import { Circle, Group, Paint, SkPath } from '@shopify/react-native-skia';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';

// import { getYForX, Path } from 'react-native-redash';
import { getYForX } from './animatedGraphUtils';

const color = 'black';

type Props = {
  indicatorX: SharedValue<number>;
  // path: SharedValue<Path>;
  path: SharedValue<SkPath | null>;
};

export const Indicator = ({ indicatorX, path }: Props) => {
  const translateY = useDerivedValue(
    () => (path.value ? getYForX(path.value.toCmds(), indicatorX.value) : 0),
    []
  );
  const transform = useDerivedValue(() => [
    {
      translateX: indicatorX.value,
    },
    {
      translateY: translateY?.value ?? 0,
    },
  ]);

  return (
    <Group transform={transform}>
      <Circle cx={0} cy={0} r={18} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={10} color={color} opacity={0.15} />
      <Circle cx={0} cy={0} r={4} color={color}>
        <Paint style="stroke" strokeWidth={2} color="white" />
      </Circle>
    </Group>
  );
};
