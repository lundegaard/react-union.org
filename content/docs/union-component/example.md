---
title: "Example"
order: 2
---

**Output of a server:**

```html
<main>
	<p>Static content produced by your favourite CMS.</p>


	<div id="hero-container"></div>


	<p>More static content produced by your favourite CMS.</p>

	<!-- Union widget descriptor - configuration for your React widget  -->
	<!-- Probably rendered by a server  -->
	<script data-union-widget="hero" data-union-container="hero-container" type="application/json"></script>
</main>
```

**One of your React widgets:**

```jsx
// Hero.js

// Main component of your Hero widget
const Hero = () => 'I am Hero!';

// Route is an object that pairs a widget descriptor with your widget
export const route = {
	path: 'hero',
	getComponent(done) {
		done(Hero);
	},
};

export default Hero;
```

**Main Root component:**

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

## Widget context

Every widget will get it's initial data and namespace to the Root component of widget.

```jsx
// react-union-boilerplate-basic/src/widgets/Content/Components/Root.js
import React from 'react';

const Root = ({ namespace, data }) => (
	<div>
		I am widget Content. With namespace: <b>{namespace}</b> and initial data:
		<b>{JSON.stringify(data)}</b>
	</div>
);

export default Root;
```

But sometimes can be handy to access these data from nested components. To avoid passing down these props, we provide a WidgetContext.

```jsx
// react-union-boilerplate-basic/src/widgets/Content/Components/NestedComponent.js
import React from 'react';
import { WidgetContext } from 'react-union';

const NestedComponent = () => (
	<WidgetContext.Consumer>
		{({ namespace, data }) => (
			<div>
				Im nested component of Content. I have also namespace: <b>{namespace}</b> and initial data:
				<b>{JSON.stringify(data)}</b>. But taken from context :p.
			</div>
		)}
	</WidgetContext.Consumer>
);

export default NestedComponent;
```
