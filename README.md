[![Build Status](https://secure.travis-ci.org/fegemo/bespoke-theme-fancy.png?branch=master)](https://travis-ci.org/fegemo/bespoke-theme-fancy)

# bespoke-theme-fancy

A fancy, sassy styled theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://fegemo.github.io/bespoke-theme-fancy)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/fegemo/bespoke-theme-fancy/master/dist/bespoke-theme-fancy.min.js
[max]: https://raw.github.com/fegemo/bespoke-theme-fancy/master/dist/bespoke-theme-fancy.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  fancy = require('bespoke-theme-fancy');

bespoke.from('#presentation', [
  fancy()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.fancy()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-fancy
```

### Bower

```bash
$ bower install bespoke-theme-fancy
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
