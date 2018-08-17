---
title: "withWidgetContext()"
order: 6
---

 High order component - HOC - which spreads the surrounding WidgetContext's value to passed component.

## Import

```js
import { withWidgetContext } from 'react-union';
```
or

```js
var withWidgetContext = require('react-union').withWidgetContext;
```

## Input properties

#### `namespace` : _string_
Namespace of the widget. See [widget descriptor](/union-component-widget-descriptors#attributes).

#### `data` : _object_

Data passed by the both widget and common data descriptors.

## Example
```html
<div id="navigation"></div>

<!-- Widget descriptor -->
<script
	data-union-widget="navigation"
	type="application/json"
>
	{
		"urls": {
			"home": "www.example.com",
			"api": "/api"
		}
	}
</script>
```

Than inside your Navigation widget you can use component e.g. like in following code:

```jsx
import React from 'react';
import { withWidgetContext } from 'react-union';

const HomeLink = ({ data: { urls } }) => (
	<a href={urls.home}>Home</a>
);

export default withWidgetContext(HomeLink);
```