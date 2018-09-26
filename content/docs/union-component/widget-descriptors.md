---
title: 'Widget Descriptors'
order: 4
---

_Widget descriptor_ is a DOM element used for the description of:

- where to place the widget in the HTML,
- what widget should be rendered in the container (Based on _route_)
- passing some data from a server to the widget.

The widget descriptor must be a `<script>` element with the attribute `data-union-widget`. This element can also contain additional attributes.

## Attributes

#### `data-union-widget` : _string\*_

Name of the widget. In order to pair a _widget descriptor_ with a route, this attribute must equal to a `path` property of a route.

#### `data-union-container` : _string_

`id` attribute of an HTML element in which the widget returned by route will be rendered. `container` should be unique within the scope of a _widget descriptor_.

#### `data-union-namespace` : _string_

String that represents a unique ID of a _widget descriptor_. By default, the value of `namespace` is set to value within `container`.

Value will be available in the widget root component under the `namespace` property.

Please note, that at least one of the `data-union-container` or `data-union-namespace` attributes must be specified.

Additionally, you may pass any valid JSON as the content of the script element, which will be available in the widget root component under the `data` property.

## Obtaining data from descriptor

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

But sometimes can be handy to access these data from nested components.

To avoid passing down these props, we provide a [withWidgetContext HOC](/union-component-withwidgetcontext).

## Examples

### 1. Simple

It renders the widget returned by the route with the path `my-widget` to element with id `my-widget-root`.

```html
<div id="my-widget-root"></div>

<!-- Widget descriptor -->
<script
	data-union-widget="name"
	data-union-container="my-widget-root"
	type="application/json"
>
</script>
```

### 2. With `namespace`

It renders the widget returned by the route with the path `my-widget` to the element with id `my-widget-root`. The instance is used internally under the key `unique-string` (provided by `namespace`).

```html
<div id="my-widget-root"></div>

<!-- Widget descriptor -->
<script
	data-union-widget="my-widget"
	data-union-container="my-widget-root"
	data-union-namespace="unique-string"
	type="application/json"
>
</script>
```

### 3. Passing data

If you need to provide custom data to the instance of your widget, pass a valid JSON as the content of the script element.

```html
<div id="my-widget-root"></div>

<!-- Widget descriptor -->
<script
	data-union-widget="my-widget"
	data-union-container="my-widget-root"
	type="application/json"
>
	{
		"customField": "custom field",
		"urls": {
			"home": "www.example.com",
			"api": "/api"
		}
	}
</script>
```

### 4. Data Widget

If you only need to provide data to other widgets in your application, there is no need to render anything.

```html
<!-- Widget descriptor -->
<script
	data-union-widget="my-widget"
	data-union-namespace="my-widget-namespace"
	type="application/json"
>
	{
		"customField": "custom field",
		"urls": {
			"home": "www.example.com",
			"api": "/api"
		}
	}
</script>
```
