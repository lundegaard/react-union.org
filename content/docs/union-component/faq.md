---
title: 'FAQ'
order: 8
---

## _Why should I use it?_

React Union makes features such as Hot Module Reloading possible for systems such as WordPress or Liferay!

```jsx
// index.js

import '@babel/polyfill';
import React from 'react';
import { justRender } from 'react-union';

import Root from './components/Root';

justRender(<Root />);
```

```jsx
// Root.js

import React from 'react';
import { Union } from 'react-union';
import { hot } from 'react-hot-loader';

import routes from '../../routes';

import './Root.css';

const Root = () => <Union routes={routes} />;

export default hot(module)(Root);
```

## _Why use a single virtual DOM?_

**TL;DR**: Redux!

Your widgets might be spread out all over the document. Your application, on the contrary, should use a single source of truth for the application state – a single Redux store.
For example, in Redux, you should only ever use a single store to allow [time traveling](https://github.com/gaearon/redux-devtools#redux-devtools) and other cool features. Implementation in Union is pretty straightforward.

Your entry file can look like this:

```jsx
// index.js

import { justRender } from 'react-union';
import Root from './Root';

// ...

const store = configureStore();

// `justRender` creates an HTML element for your app.
// Useful if you don't have root element prepared
// Do NOT use `document.body`!
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

## But you can reuse a Redux store everywhere if you make it a singleton, right?

Sure, there are other solutions which use singletons to achieve the same behaviour, but there are many issues with this kind of approach.

Singletons will make it incredibly hard to test your widgets or use them in isolation. They also make it almost impossible to add server-side rendering to your application, because a separate store should be created per request.

This is why a single virtual DOM is the superior solution, it simply has no disadvantages.
