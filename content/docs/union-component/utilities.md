---
title: 'Utilities'
order: 7
---

### `justRender`

A wrapper over `ReactDOM.render`. You need to provide the element you want to render.

`justRender(reactElement: React.Element, rootId: String): undefined` : function

- `reactElement` - **required** - The root React element to render.
- `rootId` - `id` of the HTML element where the `reactElement` should be rendered. If the element is not found, `justRender` will create it for you, with the ID defaulting to `"union"`.

#### `justUnmountComponentAtNode`

Wrapper over `ReactDOM.unmountComponentAtNode`. You need to provide the element you want to unmount.

`justUnmountComponentAtNode(reactElement: React.Element, rootId: String): undefined` : function

- `reactElement` - **required** - The root React element to unmount.
- `rootId` - `id` of the HTML element where `reactElement` should be unmounted. Defaults to `"union"`.
