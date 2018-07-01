# Architecture

- [`.vscode`](#vscode)
- [`docs`](#docs)
- [`functions`](#functions)
- [`public`](#public)
  - [`index.html`](#indexhtml)
- [`src`](#src)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`app.vue`](#appvue)
  - [`main.js`](#mainjs)
- [`tests`](#tests)

## `.vscode`

Settings and extensions specific to this project, for Visual Studio Code.

## `docs`

You found me! :wink:

## `public`

Where you'll keep any static assets, to be added to the `dist` directory without processing from our build system.

### `index.html`

This one file actually _does_ get processed by our build system, allowing us to inject some information from Webpack with [EJS](http://ejs.co/), such as the title, then add our JS and CSS.

## `src`

Where we keep all our source files.

### `assets`

This project manages assets via Vue CLI. Learn more about [its asset handling here](https://github.com/vuejs/vue-cli/blob/dev/docs/assets.md).

### `components`

Where most of the components in our app will live, including our [global base components](development.md#base-components).

### `app.vue`

The root Vue component that simply delegates to the router view. This is typically the only component to contain global CSS.

### `main.js`

The entry point to our app, were we create our Vue instance and mount it to the DOM.

## `tests`

Where all our tests go. See [the tests doc](tests.md) for more.
