---
title: 'CLI'
order: 5
---

## Table of Contents

- [--analyze](#--analyze)
- [--app](#--app)
- [--no-hmr](#--no-hmr)
- [--proxy](#--proxy)
- [--release](#--release)
- [--target](#--target)
- [--verbose](#--verbose)

### **--analyze**

Runs [`webpack-bundle-analyzer`](https://github.com/th0r/webpack-bundle-analyzer).

Available for the following scripts: `start`, `build`.

#### Example

```sh
react-union-scripts start --app MyApp --analyze
```

### **--app**

Determines what application to build or start.

Available for the following scripts: `start`, `build`.

#### Example

```sh
react-union-scripts start --app MyApp
```

### **--no-hmr**

If passed, hot module replacement will be disabled.

Available for the following scripts: `start`.

#### Example

```sh
react-union-scripts start --no-hmr
```

### **--proxy**

If passed, a proxy server will be started instead of a development server.

Available for the following scripts: `start`.

#### Example

```sh
react-union-scripts start --proxy
```

### **--release**

If passed, the JavaScript output will be optimized for production.

Available for the following scripts: `start`.

#### Example

```sh
react-union-scripts build --release
```

### **--target**

Custom value that can be used in `union.config.js`.

Available for the following scripts: `start`, `build`.

#### Example

```sh
react-union-scripts build --target wordpress
```

### **--verbose**

If passed, the console output will be more verbose.

Available for the following scripts: `start`, `build`.

#### Example

```sh
react-union-scripts build --verbose
```
