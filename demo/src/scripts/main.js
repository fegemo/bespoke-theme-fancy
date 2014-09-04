var bespoke = require('bespoke'),
  fancy = require('../../../lib/bespoke-theme-fancy.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state');

bespoke.from('article', [
  fancy(),
  scale(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  progress(),
  state()
]);
