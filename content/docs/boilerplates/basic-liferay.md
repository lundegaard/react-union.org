---
title: 'Liferay'
order: 3
---

This project shows how both `react-union` and `react-union-scripts` can be used within [Liferay](https://dev.liferay.com/) portal platform.

## Running the example

```sh
git clone https://github.com/lundegaard/react-union.git

cd react-union/boilerplates/react-union-boilerplate-liferay-basic

yarn && yarn start
```

## Usage

### 1. Setup `union.config.js`

By default `union.config.js` is configured to:

- With `yarn start` you run development server over `localhost:3300`.
- There is one `SampleApp` application.

### 2. Mock Liferay output and run development server

- The HTML template used while running DEV server can be found in `public/SampleApp/index.ejs` file.
- Run `yarn start` to start DEV server.

### 3. Create Liferay portlets that render [`widget descriptors`](https://github.com/lundegaard/react-union/blob/master/packages/react-union/API.md#widget-descriptor)

### 4. Run proxy server over locally running Liferay instance

- Run `yarn start:proxy` to start proxy server with Hot Module Replacement available
- Configure proxy in `union.config.js`. By default the target is `localhost:8080`

### 5. Create production build

- Run `yarn build:liferay`.

### 6. Build and deploy `liferay-amd-loader` module

AMD loader is an OSGi module that enables you to include static resources into liferay ecosystem. Afterwards you can require them asynchronously from union based application, portlet or elsewhere.

- Move to `/liferay-amd-loader` subfolder.
- Run `./gradlew build`.
- Deploy manually or using blade tools

### 7. Build and deploy `hero-portlet` module

Portlets are a preferred way how to place union apps within Liferay pages.

- Move to `/hero-portlet` subfolder.
- Run `./gradlew build`.
- Deploy manually or using blade tools

## Using the Boilerplate

Make sure you have Yarn v1.3.1 or higher and Node v8 or higher.

### Starting develop server

```sh
yarn start
```

### Starting proxy over Liferay

```sh
yarn start:proxy
```

### Production build

Bundle to `build` folder

```sh
yarn build
```

### Production build with AMD loader specific configuration

Bundle to `build` folder and creates AMD loader specific `loader` subfolder which is then used by gradle build script in `liferay-amd-loader` module

```sh
yarn build:liferay
```

### Running unit tests in watch mode

```sh
yarn test
```

### Analyze build

```sh
yarn build --release --analyze
```

# FAQ

## _How to move the `liferay-amd-loader` folder out of the root directory of my project?_

Just cut and place the folder to the new location. After that, update `paths.build` in `union.config.js`.
