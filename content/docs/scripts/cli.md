---
title: "CLI"
order: 3
---

### analyze

- available for: `start`

Runs [`webpack-bundle-analyzer`](https://github.com/th0r/webpack-bundle-analyzer).

Example:

```
react-union-scripts start --app MyApp --analyze
```

### app

- available for: `start`, `build`

Determines what application to build or start.

Example:

```
react-union-scripts start --app MyApp
```

### no-hmr

- available for: `start`, `build`

If is set, hot module replacement is off.

Example:

```
react-union-scripts start --no-hmr
```

### proxy

- available for: `start`.

If is set, we start proxy server instead of development server.

Example:

```
react-union-scripts start --proxy
```

### release

- available for: `start`, `build`

If is set, the build is optimized for production.

Example:

```
react-union-scripts build --release
```

### target

- available for: `start`, `build`

Custom value that can be used in `union.config.js`.

Example:

```
react-union-scripts build --target wordpress
```

### verbose

- available for: `start`, `build`

If is set, the console output is more verbose.

Example:

```
react-union-scripts build --verbose
```
