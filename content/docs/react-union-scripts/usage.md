---
title: "Usage"
order: 1
---

**TL;DR** You can use one of our [examples](https://github.com/lundegaard/react-union/tree/master/boilerplates/react-union-boilerplate-basic) as a boilerplate for your project instead.

1.  Simulate output of your server in development

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

2.  To your `package.json` add scripts:

```json
{
	"scripts": {
		"start": "react-union-scripts start --app YourAppName",
		"build": "react-union-scripts build"
	}
}
```

3.  Create `<project root>/src/apps/YourAppName/index.js`:

```jsx
import React from 'react';
import { render } from 'react-dom';

render('Hello World', document.getElementById('root'));
```

4.  Run your project

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

## Monorepo Usage

**TL;DR** You can use our mono repository example [examples](https://github.com/lundegaard/react-union/tree/master/boilerplates/react-union-boilerplate-monorepo) as a boilerplate for your project instead.

Usage is mostly same as in uni repository, but it has a few differences.

- There are two types of packages - `widgets` and `apps`.
- The are distinguished by pattern `.*union-app.*` and `.*union-widget.*` Pattern can be changed in `union.config.js`.
- App name must reflect folder name and must be in dash-case. `YourAppName > union-app-your-app-name`
- You can use as many Workspaces as you want. e.g. ['packages/*'] or ['apps/*', 'widgets/*'].
