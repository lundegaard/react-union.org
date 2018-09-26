---
title: 'Testing'
order: 7
---

We are currently using Jest as the main testing framework.
Check out [this recipe](/scripts-recipes#testing-with-enzyme) to learn how to add your favorite testing framework.

For custom configuration, use the `jest` key within your main `package.json`. We are currently supporting the following keys:

```js
'collectCoverageFrom',
	'coverageReporters',
	'coverageThreshold',
	'resetMocks',
	'resetModules',
	'snapshotSerializers',
	'watchPathIgnorePatterns';
```

**Note:** If you need the [`setupTestFrameworkScriptFile`](http://jestjs.io/docs/en/configuration#setuptestframeworkscriptfile-string) configuration option, just create a `testsSetup.js` file inside your root folder.

See jest [configuration options here](http://jestjs.io/docs/en/configuration).
