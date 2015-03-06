/*!
 * bespoke-theme-fancy v0.3.0
 *
 * Copyright 2015, Flávio Coutinho
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self);var o=f;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.fancy=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
console.log('simple test');

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "@import url(\"http://fonts.googleapis.com/css?family=Calligraffitti|Open+Sans:400italic,700italic,400,700\");html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media screen{.bespoke-parent{background-color:#d7d7fa}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:800px;height:600px;position:absolute;overflow:hidden;top:50%;left:50%;margin-left:-400px;margin-top:-300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-bullet{opacity:1;-webkit-transform:tranlsate3d(0,0,0);-ms-transform:tranlsate3d(0,0,0);transform:tranlsate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.emphatic{background:#a6b0ff;color:#fff}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#431380}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.2vw}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .6s ease;transition:width .6s ease}.bespoke-progress-bar:before,.bespoke-progress-bar:after{content:\"\";position:absolute;display:block;width:100%;height:50%}.bespoke-progress-bar:before{background:#aeaef5}.bespoke-progress-bar:after{top:50%;background:#c2c2f7}h1{color:#6e8ae4;font-family:'Calligraffitti',cursive;font-size:3em}h2{font-size:2em}h3{font-size:1.5em}h4,h5,h6{font-size:1em}h2,h3,h4,h5,h6{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}h1,h2,h3,h4,h5,h6{font-weight:400}p,li{font-size:24px;line-height:1.5em}strong{font-weight:400;color:#fc49d8}article{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}a{color:#b66c7e;text-decoration:none}a:hover{text-decoration:underline}pre,code{font-size:20px}.slide{overflow:hidden}.slide .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .8s ease;transition:all .8s ease}.slide .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.slide .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.slide .bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .8s ease;transition:opacity .8s ease}.cube{overflow:hidden;-webkit-perspective:800px;perspective:800px}.cube .bespoke-slide{-webkit-transform-origin:50% 50% -400px;-ms-transform-origin:50% 50% -400px;transform-origin:50% 50% -400px;-webkit-transition:all .8s ease;transition:all .8s ease;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.cube .bespoke-inactive{opacity:0}.cube .bespoke-before{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)}.cube .bespoke-after{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@media print{*{background:transparent!important;color:#000!important;text-shadow:none!important}html,body{overflow:visible!important;height:auto!important}body{margin:0!important;padding:.1in!important;line-height:1em!important}code{line-height:1em}ul,ol,pre,code{text-align:left}pre code{border:1px solid #696969;padding:5px;border-radius:4px}@page{margin:.79in}.bespoke-slide{box-sizing:border-box;display:block;float:left;border:2px solid #000;text-align:center;margin-top:0;margin-left:0;page-break-inside:avoid}.bespoke-slide>*{zoom:.65}.bespoke-slide>* *{zoom:.85}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em}.bespoke-slide .bespoke-bullet-inactive{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always;-webkit-break-after:page;-moz-break-after:page;break-after:page}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in;height:2.189604332250001in;margin-right:.324385827in;margin-bottom:.324385827in}.bespoke-slide:nth-child(2n){margin-right:0}.bespoke-parent{width:6.487716540000001in}>img{max-width:6.862786199999999in}img{max-width:5.248012976470588in}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in;height:2.230405515in;margin-right:.297387402in;margin-bottom:.297387402in}.bespoke-slide:nth-child(3n){margin-right:0}.bespoke-parent{width:9.9129134in}>img{max-width:4.575190799999999in}img{max-width:3.498675317647058in}}\n/*# sourceMappingURL=theme.css.map */";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});