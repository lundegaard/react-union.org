---
title: "CLI"
order: 5
---

## Table of Contents

* [--analyze](#--analyze)
* [--app](#--app)
* [--no-hmr](#--no-hmr)
* [--proxy](#--proxy)
* [--release](#--release)
* [--target](#--target)
* [--verbose](#--verbose)


### __--analyze__

Runs [`webpack-bundle-analyzer`](https://github.com/th0r/webpack-bundle-analyzer).

Option is available for `start` script.


#### Example

```sh
react-union-scripts start --app MyApp --analyze
```

### __--app__

Determines what application to build or start.

Option is available for `start` and `build` scripts.

#### Example

```sh
react-union-scripts start --app MyApp
```

### __--no-hmr__

If is set, hot module replacement is off.

Option is available for `start` and `build` scripts.

#### Example

```sh
react-union-scripts start --no-hmr
```

### __--proxy__

If is set, we start proxy server instead of development server.

Option is available for `start` script.

#### Example

```sh
react-union-scripts start --proxy
```

### __--release__

If is set, the build is optimized for production.

Option is available for `start` and `build` scripts.

#### Example

```sh
react-union-scripts build --release
```

### __--target__

Custom value that can be used in `union.config.js
`.
Option is available for `start` and `build` scripts.

#### Example

```sh
react-union-scripts build --target wordpress
```

### __--verbose__

If is set, the console output is more verbose.

Option is available for `start` and `build` scripts.

#### Example

```sh
react-union-scripts build --verbose
```
