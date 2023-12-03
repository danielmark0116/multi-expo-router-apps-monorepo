# Multi-expo-apps

## Requirements:

- [ ] Node 18.18.0
- [ ] PNPM

## ENV variables:

- You can manage env variables with EAS secrets and its CLI (for EAS builds and deployments):

```
https://docs.expo.dev/build-reference/variables/#adding-secrets-with-eas-cli
```

> Variables stored with EAS Secrets will be in your EAS builds automatically :)

- For development, just put your env variables in `.env` file, restart bundler and rebuild your js bundle :) 

! Remember not to commit any env variables !

## Run and develop:

1. Install packages with `pnpm install`
2. Run given apps bundler with:

```bash
pnpm run dev:client
// OR
pnpm run dev:merchant
```

3. Code and preview with __Expo GO__ OR __dev client__
4. In order to build dev client: `tbc`

## Test suite:

- run __tests__ with `pnpm run test`
- run __linter suite__ with `pnpm run lint`

## TODO:

- [x] unistyles
- [x] shared features
- [x] shared query - just put in @apps/shared
- [x] path aliases
- [ ] extended tests set up
- [ ] mmkv OR atom + async storage?
- [ ] add merchant app
- [x] types + domain - just put in @apps/shared
- [x] eas + test on my account
- [ ] test dev client and add to readme
- [x] envs local
- [x] envs eas
- [ ] github actions - prs - linting, tests, conventional naming
- [ ] github actions - release with eas
- [ ] nvim inline test runner not working in monorepo - fix it!
- [ ] release-it
- [ ] move deps from packages to peerDeps?
- [ ] focus handler for query (useAppState)
- [x] util hooks for query
