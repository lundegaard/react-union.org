---
title: "Utilities"
order: 7
---

### `justRender`

A wrapper over `ReactDOM.render`. You need to provide the component you want to render.

`justRender(component: ReactComponent, htmlElementId: String): undefined` : function

- `component` - **required** - Root component of your app.
- `htmlElementId` - `id` of the HTML element where the `component` should be rendered. If the element is not found, `justRender` will create it for you, defaulting to `"union"`.

#### `justUnmountComponentAtNode`
Wrapper over `ReactDOM.unmountComponentAtNode`. You need to provide component that you want to unmount.

`justUnmountComponentAtNode(component: ReactComponent, htmlElementId: String):undefined` : function

- `component` - **required** - Root component of your app.
- `htmlElementId` - `id` of the HTML element where `component` should be unmounted. Defaults to `"union"`.
