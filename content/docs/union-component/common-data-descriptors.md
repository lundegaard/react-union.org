---
title: 'Common Data Descriptors'
order: 5
---

A _common data descriptor_ is a DOM element used for passing common data to all of your widgets.

It must be a `<script>` element with the `data-union-common` HTML attribute.

Please note that although you can provide multiple common data descriptors to React Union, it is discouraged if you don't have control over their order in the portal or CMS.

## Attributes

#### `data-union-common` : _string\*_

Used to mark a `script` element as a common descriptor.

The body of the `<script />` must be a valid JSON.

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

**Note:** If you are generating the JSON body using a templating engine, ensure that all quotes are properly matched and that there are no trailing commas. This is a very common source of bugs!
