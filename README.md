# Framework7 Component Loader for parcel-bundler

> Parcel plugin for Framework7 single file router components
> This plugin i fork from original webpack plugin [framework7-component-loader](https://github.com/framework7io/framework7-component-loader) to work also for parcel-bundler

## What is Framework7 Component Loader?

`parcel-plugin-framework7-component-loader` is a plugin for [parcel](https://parceljs.io/) that allows you to author [Framework7 Router components](http://framework7.io/docs/router-component.html) in a format called [Single-File Components](http://framework7.io/docs/router-component.html#single-file-component):

```html
<!-- my-page.f7 -->
<template>
  <div class="page">{{msg}}</div>
  <!-- Inline partials -->
  {{> 'foo'}}
  {{> 'bar'}}
  <!-- External partials -->
  {{> 'external'}}
</template>

<!-- Template7 inline partial support (optional) -->
<template-partial id="foo">
  <div>foo</div>
</template-partial>
<template-partial id="bar">
  <div>bar</div>
</template-partial>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
```
#### External partial templates example (see config for location)
```html
<!-- external.f7p -->
<template>
  <div>External template get scope context {{msg}}</div>
</template>
```

## Installation

```
npm i parcel-plugin-framework7-component-loader
```

## Configuration

```js
// Example for .f7rc.js or f7.config.js
module.exports = {
  helpersPath: './src/template7-helpers-list.js',
  partialsPath: './src/pages/',
  partialsExt: '.f7p',
  t7InWIndow: false // Set true if you using window.Framework7
}
```

```json
// Example for using .f7rc
{
  "helpersPath": "./src/template7-helpers-list.js",
  "partialsPath": "./src/pages/",
  "partialsExt": ".f7p",
  "t7InWIndow": false
}
```