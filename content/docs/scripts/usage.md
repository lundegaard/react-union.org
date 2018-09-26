---
title: 'Usage'
order: 3
---

**TL;DR** You can use one of our [boilerplates](https://github.com/lundegaard/react-union/tree/master/boilerplates) as a starting point for your project instead.

## 1. Simulate the output of your server in development

Create `<project root>/public/YourAppName/index.ejs`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

For details on how to write a template, see [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

## 2. Add some scripts to your package.json

```json
{
	"scripts": {
		"start": "react-union-scripts start --app YourAppName",
		"build": "react-union-scripts build"
	}
}
```

## 3. Create your application entry point

Source code of your `<project root>/src/apps/YourAppName/index.js` file may look like this:

```jsx
import React from 'react';
import { render } from 'react-dom';

render('Hello World', document.getElementById('root'));
```

## 4. Run the application

**Start a development server**

```
yarn start --app YourAppName
```

**Start a proxy server**

```
yarn start --app YourAppName --proxy
```

**Production build**

Build all available apps

```
yarn build --release
```

or just a single one

```
yarn build --app YourAppName --release
```

**Running Jest tests**

Run in watch mode

```
yarn test
```

or run just once

```
yarn test --release
```

**Analyze build**

Runs [`webpack-bundle-analyzer`](https://github.com/th0r/webpack-bundle-analyzer).

```
yarn start --app YourAppName --analyze
```
