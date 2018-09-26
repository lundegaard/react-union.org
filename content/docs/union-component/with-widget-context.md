---
title: 'withWidgetContext()'
order: 6
---

Higher-order component which spreads the surrounding WidgetContext's value to the passed component.

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

And somewhere deep down your React component tree:

```jsx
import React from 'react';
import { withWidgetContext } from 'react-union';

const HomeLink = ({ data: { urls } }) => <a href={urls.home}>Home</a>;

export default withWidgetContext(HomeLink);
```
