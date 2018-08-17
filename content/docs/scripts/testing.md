---
title: "Testing"
order: 7
---

We are currently using Jest as the main testing framework.
How to add your favorite React testing framework see [recipe](/scripts-recipes#testing-with-enzyme).

For custom configuration use `jest` key within your main `package.json`. We are currently supporting following keys:

```js
'collectCoverageFrom',
'coverageReporters',
'coverageThreshold',
'resetMocks',
'resetModules',
'snapshotSerializers',
'watchPathIgnorePatterns';
```

**Note:** If you need [`setupTestFrameworkScriptFile`](http://jestjs.io/docs/en/configuration#setuptestframeworkscriptfile-string) configuration option, just create `testsSetup.js` file inside your root folder.

See jest [configuration options](http://jestjs.io/docs/en/configuration).
