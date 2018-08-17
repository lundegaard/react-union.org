---
title: "Usage"
order: 3
---

**TL;DR** You can use one of our [boilerplates](https://github.com/lundegaard/react-union/tree/master/boilerplates) as a base for your project instead.

## 1. Simulate output of your server in development

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

For details how to write a template, see [https://github.com/jantimon/html-webpack-plugin](html-webpack-plugin).

## 2. Add scripts

Put script from RUS to your `package.json`:

```json
{
	"scripts": {
		"start": "react-union-scripts start --app YourAppName",
		"build": "react-union-scripts build"
	}
}
```

## 3. Create entry to your application

Code of your `<project root>/src/apps/YourAppName/index.js` may look like following:

```jsx
import React from 'react';
import { render } from 'react-dom';

render('Hello World', document.getElementById('root'));
```

## 4. Run your project

**Development server**

```
yarn start --app YourAppName
```

**Start proxy server**

```
yarn start --app YourAppName --proxy
```

**Production build**

Build all registered apps.

```
yarn build --release
```

or build just one

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
