---
title: "Monorepo"
order: 4
---

**TL;DR** You can use our [monorepo example](https://github.com/lundegaard/react-union/tree/master/boilerplates/react-union-boilerplate-monorepo) as a boilerplate for your project instead.

Usage is mostly same as described in [usage section](scripts-usage), but it has a few differences.

#### 1. There are two types of packages - _widgets_ and _apps_.
They are distinguished by pattern `.*union-app.*` and `.*union-widget.*`.
Patterns can be changed in [configuration](/scripts-configuration#workspaces).

#### 2. Application name must reflect a folder name and must be in dash-case.

E.g. `YourAppName > union-app-your-app-name`.

#### 3. You can use as many Workspaces as you want.

E.g. we use `boilerplates/*` and `packages/*` workspaces in our [github repository](https://github.com/lundegaard/react-union/blob/master/package.json).
