---
title: "Union"
order: 3
---

`<Union />` component renders your widgets based on provided [_routes_](#route) and the [_widget descriptors_](/union-component-widget-descriptors) in the DOM. The widgets are managed in a single virtual DOM even though their markup might distributed over the DOM.

## Import

```js
import { Union } from 'react-union';
```

or

```js
var Union = require('react-union').Union;
```

## Properties

#### `children` : _ReactNode_

Children of the `Union` component.

#### `onScanEnd` : _function_
Called after the scan of the HTML is done.

#### `onScanError` : _function_
Called when there is an error while scanning the HTML.

#### `onScanStart` : _function_
Called before the scan of the HTML.

#### `parent` : _DOMelement_
Element in which the scan is running. The default value is `document.body`.

#### `routes` : _Route[]_
Array of routes that are supported by your application. See section [_Route_](#route).

#### `strictMode` : _boolean_
Enable React.Strict mode. By default `true`.

## Route

An object that is used for pairing a [_widget descriptor_](/union-component-widget-descriptors) with a React widget.

### Properties

#### `path` : _string_
Indicates that a [_widget descriptor_](/union-component-widget-descriptors) with the `data-union-widget` attribute equal to this value is matched by this route.

#### `getComponent(done: function): undefined` : _function_
This function is called after the `<Union />` component finishes scanning the DOM. Function will be provided a single argument
`done`. You should call this callback with the main React component of the matching widget:

```js
// routeForMyWidget.js

export default {
	path: 'my-widget',
	getComponent(done) {
		import('./MyWidget').then(MyWidget => done(MyWidget.default));
	},
};
```

Please note that in the example above, we use the webpack `import` function. However, if you use [react-union-scripts](/scripts-introduction), there is a better way to load your components asynchronously. See [react-union-boilerplate-basic](/boilerplates-basic).


## Usage

### 1. Mocking a server output

First, we will assume that code below is a part of your server output.

```html
<main>
	<p>Static content produced by your favourite CMS.</p>


	<div id="hero-container"></div>


	<p>More static content produced by your favourite CMS.</p>

	<!-- Union widget descriptor - configuration for your React widget  -->
	<script
		data-union-widget="hero"
		data-union-container="hero-container"
		type="application/json"
	>
		{
			"username": "reactlover"
		}
	</script>
</main>
```

As you can see above, there is an empty `div` with an `id` of `hero-container`. This is the HTML element where we want to render the widget called `hero`.
To do so, we must create a [_widget descriptor_](/union-component-widget-descriptors) .

A _Widget descriptor_ is a JSON script element that contains the `data-union-widget` attribute. It tells React-union that the `hero` widget should be rendered into the `hero-container` element and be passed the data `{"username": "reactlover"}`.


### 2. Writing a Hero widget

Great! Now we will write some code for the widget, namely the component `Hero.js`. The widget must always consist of a single React component.

```jsx
// Hero.js

// Main component of your Hero widget
const Hero = ({ data }) => `Hello, ${data.username}!`;

export default Hero;
```

The widget simply renders the `username` passed in the widget descriptor content.

### 3. Writing a route for Hero

Next, React-union needs to know where is the code for the widget we called as `hero`.
So we will write simple object with just 2 properties called `route` (in our case `HeroRoute`):

```js
// HeroRoute.js
import Hero from './Hero';

export default {
	path: 'hero',
	getComponent(done) {
		done(Hero);
	},
};
```

This one says that if there is a widget descriptor in the DOM with the name `hero`,
we return its root React component passed as the argument of the callback `done` inside `getComponent`.

Please note that to make things simple, we are using a static import of `Hero` component. You can also use dynamic importing (e.g. `require.ensure`, the webpack `import` function, [`react-loadable`](http://npm.im/react-loadable) or anything else).

Also note that if you know [React-router](http://npm.im/react-router), the route format should be familiar to you.

### 4. Write an entry to the application

Finally, we can define our component responsible for rendering widgets based on the provided routes and *widget descriptor*s.

```jsx
// Root.js
import { Union } from 'react-union';
import HeroRoute from './HeroRoute';

const Root = ({ store }) => <Union routes={[HeroRoute]} />;

export default Root;
```

Just render the Union component with an array of supported routes. In our case it is just `HeroRoute`.

When `<Union />` is mounted, the `scan` process of HTML starts.

The scan process finds the widget descriptors in the DOM and, based on them, `<Union />` renders the appropriate widgets.

The scan is launched if either `Union` is mounted or reference to the `routes` property changes.

### 5. Optimization

In the case above, a new array of routes is created with every render and it impacts the performance.
If there is no need for generating routes dynamically, we can refactor above example like this:

```jsx
// Root.js

import { Union } from 'react-union';
import HeroRoute from './HeroRoute';

const routes = [HeroRoute];

const Root = ({ store }) => <Union routes={routes} />;

export default Root;
```

Please note that we have chosen to define the routes alongside the widgets. If you need multiple entry points to your application (or even reuse an existing widget in multiple paths), it might make more sense to define the routes in the entry point (the app) itself - the choice is yours!

