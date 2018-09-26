---
title: 'Monorepo'
order: 2
---

This project can either be used as an example of react-union and react-union-scripts working together or as a starting point for your project.

## Running the example

```sh
git clone https://github.com/lundegaard/react-union.git

cd react-union/boilerplates/react-union-boilerplate-monorepo

yarn && yarn start
```

Make sure you have Yarn v1.3.1 or higher and Node v8 or higher.

## Using the Boilerplate

### Starting develop server

```sh
yarn start
```

### Starting proxy

```sh
yarn start --proxy
```

### Production build

```sh
yarn build --release
```

**Note:** Creates production bundles.

### Running unit tests in watch mode

```sh
yarn test
```

### Analyze build

```sh
yarn build --release --analyze
```
