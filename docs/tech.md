# Languages and technologies

- [JavaScript](#javascript)
  - [Polyfills](#polyfills)
  - [Vue](#vue)
  - [Vue Router](#vue-router)
  - [Vuex (state management)](#vuex-state-management)
  - [JavaScript FAQ](#javascript-faq)
- [HTML](#html)
  - [Templates](#templates)
  - [Render functions](#render-functions)
  - [HTML FAQ](#html-faq)
- [CSS](#css)
  - [SCSS](#scss)
  - [Importing global modules](#importing-global-modules)
  - [Design variables and tooling](#design-variables-and-tooling)
  - [CSS modules](#css-modules)
    - [Sharing SCSS variables with JavaScript](#sharing-scss-variables-with-javascript)
  - [Global CSS](#global-css)
  - [CSS FAQ](#css-faq)

## JavaScript

Our JavaScript is compiled by Babel, using the [`@vue/babel-preset-app`](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) as a base configuration.

If you're new to features such as `const`, `let`, and `=>` (arrow functions), take some time to read about the following features in Babel's ES2015 guide:

- [Arrow functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this)
- [Template literals](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings)
- [Destructuring](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring)
- [Spread operator](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread)
- [`let`/`const`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const)
- [`for`...`of`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of)

Reading these sections alone will get you 99% of the way to mastering Babel code. It's also a good idea to read about Promises, if you don't yet feel comfortable with them. Here's a [good intro](https://developers.google.com/web/fundamentals/getting-started/primers/promises)..

### Vue

Since Vue is such a huge part of our app, I strongly recommend everyone read through at least the _Essentials_ of [Vue's guide](https://vuejs.org/v2/guide/).

### Vue Router

To understand how to manage pages with Vue Router, I recommend reading through the _Essentials_ of [those docs](https://router.vuejs.org/en/essentials/getting-started.html). Then you can read more about [routing in this application](routing.md).

### Vuex (state management)

To wrap your head around our state management, I recommend reading through [those docs](https://vuex.vuejs.org/en/intro.html), starting at _What is Vuex?_ and stopping before _Application Architecture_. Then skip down and read [_Form Handling_](https://vuex.vuejs.org/en/forms.html) and [_Testing_](https://vuex.vuejs.org/en/testing.html). Finally, read about [state management in this application](state.md).

## HTML

All HTML will exist within [`.vue` files](https://vuejs.org/v2/guide/single-file-components.html), either:

- in a `<template>`, or

### [Templates](https://vuejs.org/v2/guide/syntax.html)

~95% of HTML will be in `.vue` files. Since Vue has a chance to parse it before the browser does, we can also do a few extra things that normally aren't possible in a browser.

For example, any element or component can be self-closing:

```html
<span class="fa fa-comment"/>
```

The above simply compiles to:

```html
<span class="fa fa-comment"></span>
```

This feature is especially useful when writing components with long names, but no content:

```html
<FileUploader
  title="Upload any relevant legal documents"
  description="PDFs or scanned images are preferred"
  icon="folder-open"
/>
```

## CSS

For our styles, we're using SCSS and CSS modules, which you can activate by adding the `lang="scss"` and `module` attributes to style tags in Vue components:

```html
<style lang="scss" module>
  /* Styles go here */
</style>
```

### SCSS

SCSS is a superset of CSS, meaning any valid CSS is _also_ valid SCSS. This allows you to easily copy properties from other sources, without having to reformat it. It also means you can stick to writing the CSS you're still comfortable with while you're learning to use more advanced SCSS features.

I specifically recommend reading about:

- [Variables](http://sass-lang.com/guide#topic-2)
- [Nesting](http://sass-lang.com/guide#topic-3)
- [Operators](http://sass-lang.com/guide#topic-8)

Just those features cover at least 95% of use cases.

### Tailwind

We use [tailwindcss](https://tailwindcss.com) as a utility framework. This allows us to share some global utilities as well as do fast prototyping. Don't feel you have to use tailwind but when writing css and we might phase this out as we move from a prototype to production.

### PurgeCSS

Do to tailwind adding a lot of good utility classes, we use purgecss (_temporarily disabled_) to strip out all unused css classes on build. _TODO: improve the docs and explain purge's issues and gotchas_

### Design variables and tooling

All of our variables can be found in tailwind.js config. You can reference these in scss with a simple call to config `color: config('colors.grey-lightest');`

### CSS modules

As mentioned earlier, every Vue component should be a CSS module. That means the classes you define are not _actually_ classes. When you write:

```html
<style lang='scss' module>
.inputLabel {
  /* ... */
}

.input {
  /* ... */
}
</style>
```

You're actually defining values on a `$style` property of the Vue instance such as:

```js
$style: {
  inputLabel: 'base-input_inputLabel__3EAebB_0',
  input: 'base-input_input__3EAebB_1'
}
```

These values contain automatically generated classes with:

- the file name of the component
- the name of the class
- a random hash

Do you know what that means?! You can _never_ accidentally write styles that interfere with another component. You also don't have to come up with clever class names, unique across the entire project. You can use class names like `.input`, `.container`, `.checkbox`, or whatever else makes sense within the isolated scope of the component - just like you would with JavaScript variables.

#### Sharing SCSS variables with JavaScript

If you ever need to expose the value of an SCSS variable to your JavaScript, you _can_ with CSS module exports! For example, assuming you have this variable defined:

```scss
$size-grid-padding: 1.3rem;
```

You could import our design tooling, then use CSS modules' `:export` it:

```html
<style lang="scss" module>
@import '@design';

:export {
  grid-padding: $size-grid-padding;
}
</style>
```

Then you can access the value using `this.$style['grid-padding']`.

### Global CSS

Typically, only [`src/app.vue`](src/app.vue) should ever contain global CSS and even that should only include base element styles and utility classes (e.g. tailwind).

### CSS FAQ

**Why use SCSS instead of plain CSS or another CSS preprocessor?**

CSS preprocessors offer a lot of additional power - just having a browser-independent way to use variables is invaluable. But SCSS has some other advantages over competing preprocessors:

- SCSS it a superset of CSS, which means:
  - You can copy and paste valid CSS into SCSS and it will always be valid.
  - There's a gentler learning curve, as devs can write the same CSS they're used to, gradually incorporating more SCSS features as they're needed.
- It's well-supported by both Stylelint and Prettier, eliminating nearly all arguments over code style.

**Why use CSS modules for scoping, instead of [Vue's `scoped` attribute](https://vue-loader.vuejs.org/en/features/scoped-css.html)?**

While a little more complex to begin with, CSS modules offer:

- Universality. The same scoping strategy can be used anywhere in our app, regardless of whether it's in a `.vue` file or `.scss` file.
- True protection from collisions. Using the `scoped` attribute, vendor CSS could still affect your own classes, if you both use the same names.
- Improved performance. Generated class selectors like `.base-input_inputLabel__3EAebB_0` are faster than attribute selectors, especially on an element selector like `input[data-v-3EAebB]`.
- Increased versatility. There are cases the `scoped` attribute just can't handle, such as passing a scoped class to a child component that does _not_ render HTML directly. This is fairly common for component wrappers of views driven by WebGL or Canvas, that often inject HTML overlays such as tooltips at the root of the `<body>`.
