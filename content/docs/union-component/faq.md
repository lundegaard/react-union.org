---
title: "FAQ"
order: 4
---

## _Why should I use it?_

React-union makes features such as Hot Module Reloading possible for systems such as WordPress or Liferay!

```jsx
// index.js
import React from 'react';
import { justRender } from 'react-union';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

const render = Component =>
	justRender(
		<AppContainer errorReporter={__DEV__ ? require('redbox-react').default : null}>
			<Component />
		</AppContainer>
	);

render(Root);

if (module.hot) {
	module.hot.accept(['./components/Root'], () => {
		const NextRoot = require('./components/Root').default;
		render(NextRoot);
	});
}
```

## _Why single virtual DOM?_

**TL;DR**: Redux :)

Your widgets might be spread out all over the document. Your application, on the contrary, should use just one place for the application state (single source of truth).
For example, in Redux, you should have one store to allow [time traveling](https://github.com/gaearon/redux-devtools#redux-devtools). Implementation in Union is pretty straightforward.

Your entry file can look like this:

```jsx
// index.js

import { justRender } from 'react-union';
import Root from './Root';

// ...

const store = configureStore();

// "justRender" creates HTML element for you app.
// Useful if you don't have root element prepared
// Never use just "document.body"!
justRender(<Root store={store} />);

export default Root;
```

...and your Root component can look like this:

```jsx
// Root.js

import { Provider } from 'redux';

// ...

const Root = ({ store }) => (
	<Provider store={store}>
		<Union routes={[route]} />
	</Provider>
);

export default Root;
```

...and that's it!

Now every widget can `connect` to your store. Multiple widgets with a single state! Time traveling everywhere!
