---
title: "Common Data Descriptors"
order: 5
---

_Common data descriptor_ is a DOM element used for passing common data to all your widgets described by [_widget descriptors_](/union-component-widget-descriptors).

The common descriptor must be a `<script>` element with the attribute `data-union-common`.

Please note that even though you can provide multiple common data descriptors to React-union, but it is discouraged if you don't have control over their order in the portal or CMS.

## Attributes

#### `data-union-common` : _string*_
Use to mark `script` tag as a common descriptor.

Body of the `<script />` should be your data in JSON format.


## Example

```html
<!-- Widget descriptor -->
<script data-union-common type="application/json">
	{
		"customField": "custom field",
		"urls": {
			"home": "www.example.com",
			"api": "/api"
		}
	}
</script>
```