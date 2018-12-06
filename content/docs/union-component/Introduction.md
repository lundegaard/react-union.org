---
title: 'Introduction'
order: 2
---

React Union is a library for rendering React applications in CMS-like environments. It allows you to treat your React applications as widgets, meaning that the user gets to choose the combination and location of widgets for any given page.

The main idea is that instead of rendering the application directly, we render HTML fragments which describe the widgets to render. We call them [widget descriptors](https://react-union.org/union-component-widget-descriptors). React Union then parses the HTML output and renders the React application, which uses a single virtual DOM, making it trivial to reuse e.g. Redux state across widgets.

## Example

See the [usage section](/union-component-union#usage) for more advanced examples.

**Output of a server:**

```html
<main>
	<p>Static content produced by your favourite CMS.</p>


	<div id="hero-container"></div>


	<p>More static content produced by your favourite CMS.</p>

	<!-- A widget descriptor – configuration of your React widget.  -->
	<script
		data-union-widget="hero"
		data-union-container="hero-container"
		type="application/json"
	></script>
</main>
```

**One of your React widgets:**

```jsx
// Hero.js

// Main component of your Hero widget
const Hero = () => 'I am Hero!';

// Route is an object that pairs widget descriptors with a widget
export const route = {
	path: 'hero',
	component: Hero,
};

export default Hero;
```

**Root application component:**

```jsx
// Root.js

import React from 'react';
import { Union } from 'react-union';

import { route } from './Hero';

// `Union` renders found widgets into their containers
// but retains a single virtual DOM. Yes, it uses React portals :)

const Root = () => <Union routes={[route]} />;

export default Root;
```
