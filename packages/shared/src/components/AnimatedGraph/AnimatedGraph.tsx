import { Canvas, Group, LinearGradient, Path, Skia, SkPath, vec } from '@shopify/react-native-skia';
import * as d3 from 'd3';
import { useCallback, useEffect, useRef } from 'react';
import { Dimensions, LayoutChangeEvent, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  interpolate,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { parse } from 'react-native-redash';

import { Indicator } from './Indicator';
import { createStyleSheet, useStyles } from '../ThemeProvider/ThemeProvider';

const { width } = Dimensions.get('window');

type DataPoint = {
  x: number;
  y: number;
};

// TODO properly handle current and next graph to handle interpolation and animation (with state based on useShareValue)

const data: DataPoint[] = [
  { x: 0, y: 0 },
  { x: 10, y: 20 },
  { x: 20, y: 20 },
  { x: 30, y: 100 },
  { x: 40, y: 5 },
  { x: 50, y: 10 },
  { x: 60, y: 80 },
  { x: 70, y: 80 },
  { x: 80, y: 100 },
  { x: 90, y: 100 },
  { x: 100, y: 100 },
];

const data2: DataPoint[] = [
  { x: 0, y: 10 },
  { x: 10, y: 80 },
  { x: 20, y: 20 },
  { x: 30, y: 20 },
  { x: 40, y: 5 },
  { x: 50, y: 10 },
  { x: 60, y: 40 },
  { x: 70, y: 80 },
  { x: 80, y: 20 },
  { x: 90, y: 20 },
  { x: 100, y: 50 },
];

const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0 + 40, width - 40]);

const line = d3
  .line<DataPoint>()
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y))
  .curve(d3.curveNatural);

const pathDataRaw = line(data);
const pathDataRaw2 = line(data2);
const path = Skia.Path.MakeFromSVGString(pathDataRaw ?? '0') ?? Skia.Path.Make();
const path2 = Skia.Path.MakeFromSVGString(pathDataRaw2 ?? '0') ?? Skia.Path.Make();
const pathData = parse(pathDataRaw ?? '0');
const pathData2 = parse(pathDataRaw2 ?? '0');

export const getGradientAreaSplit = (
  gradientAreaSplit: SkPath,
  width: number,
  height: number,
  variant: 'positive' | 'negative'
) => {
  const useFirstY =
    (variant === 'positive' && gradientAreaSplit.getPoint(0).y > 0) ||
    (variant === 'negative' && gradientAreaSplit.getPoint(0).y < 0);
  gradientAreaSplit
    .lineTo(width, height)
    .lineTo(0, height)
    .lineTo(0, useFirstY ? gradientAreaSplit.getPoint(0).y : height);
  return gradientAreaSplit;
};

const posPath = getGradientAreaSplit(path, width, width, 'positive');
const posPath2 = getGradientAreaSplit(path2, width, width, 'positive');

export const AnimatedGraph = () => {
  const indicatorX = useSharedValue(0);
  // TODO: should be interpolated so it does not reach 0 on the left, max 4 and higher
  // cuz it behaves strangely
  const translate = useSharedValue(0);

  useAnimatedReaction(
    () => {
      return indicatorX.value;
    },
    (v) => {
      console.log(v);
    }
  );

  useEffect(() => {
    setTimeout(() => {
      translate.value = withTiming(1, { duration: 500 });
    }, 2000);
  }, []);

  const pathh = useDerivedValue(() => {
    return path2.interpolate(path, translate.value);
  }, [translate]);

  const indicatorData = useDerivedValue(() => {
    return translate.value === 1 ? pathData2 : pathData;
  });

  const posPathh = useDerivedValue(() => {
    return posPath2.interpolate(posPath, translate.value);
  }, [translate]);

  const dimensions = useRef({ width: 0, height: 0 });
  const { styles } = useStyles(stylesheet);
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width, height },
      },
    }: LayoutChangeEvent) => {
      dimensions.current = { width, height };
    },
    []
  );
  const gesture = Gesture.Pan()
    .onBegin((e) => {
      indicatorX.value = withTiming(e.absoluteX, { duration: 100 });
    })
    .onChange((e) => {
      indicatorX.value += e.changeX;
      indicatorX.value = interpolate(
        indicatorX.value,
        [-1, 0, width, width + 1],
        [0, 0, width, width]
      );
    });

  return (
    <View onLayout={onLayout} style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Canvas style={styles.canvas}>
          <Group>
            <Path path={pathh as any} style="stroke" strokeWidth={4}>
              <LinearGradient
                // line itself
                start={vec(0, 0)}
                end={vec(width, 0)}
                colors={['rgba(0, 0, 0, 0.4)', '#FFFFFF']}
              />
            </Path>
            <Path path={posPathh as any}>
              <LinearGradient
                // gradient fill below line
                start={vec(0, 0)}
                end={vec(0, width * 0.8)}
                colors={['rgba(0, 0, 0, 0.2)', '#FFFFFF']}
              />
            </Path>
          </Group>

          <Indicator path={pathh} indicatorX={indicatorX} />
        </Canvas>
      </GestureDetector>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  canvas: {
    width,
    height: width,
  },
  container: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: theme.colors.background,
    marginTop: theme.spacings.xl,
  },
}));
