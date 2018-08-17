---
title: "Introduction"
---

The project React-union is a collection of tools that allows you to build modern React applications which run on specific server-side environments such as Content Management Systems or Portals.

## Content Management Systems, Portals and React applications

There are some problems in these types of systems that need to be addressed in order to achieve a proper developer experience. This includes features such as HMR, application state time travel, ECMAScript 7+ syntax, etc. Additionally, there are problems regarding the nature of CMS and Portal solutions.

### What are those problems?

**Ad-hoc component rendering**

We don't know the combination of widgets for any particular URL in advance. It is due to the fact that the user is able to customize what widgets should be rendered.

**Multiple instances of the same widget in one view**

E.g. image galleries, feeds or calendars. This fact adds complexity to managing application state, passing initial data, etc.

**Sharing and synchronization of data between widgets**

Even though the widgets have to be independent of each other, we have to be able to share the model/data they are working with.

**Build optimization**

Application code has to be split into several chunks to only serve code necessary for the current page.

**Passing data from server**

There are cases where our widgets need to be provided data from a server, e.g. information about user, preferences, color schema, etc.