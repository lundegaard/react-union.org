---
title: 'Polyfilling'
order: 9
---

In the past the `@babel/polyfills` was used, but it became obsolete. It is necessary to manually import the polyfills if needed.
For this case we have created package `react-union-polyfills`.

##Usage

To use stable polyfills, just import `importPolyfills` function from `react-union-polyfills` in root package

```js
import { importPolyfills } from 'react-union-polyfills';
```

###Internet Explorer

If you need to support Internet Explorer 11, run function `importPolyfills.ie11()` within `ready` function of root package

```js
ready(() => {
	importPolyfills.ie11();
	justRender(<Root />);
});
```

To support Internet Explorer 9, run function `importPolyfills.ie9()` instead of `importPolyfills.ie11()` as mentioned above. Support for IE11 will be added automaticaly.
