(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../../../lib/bespoke-theme-fancy.js":2,"bespoke":10,"bespoke-bullets":3,"bespoke-keys":5,"bespoke-progress":6,"bespoke-scale":7,"bespoke-state":8,"bespoke-touch":9}],2:[function(require,module,exports){

var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function() {
  var css = "@import url(\"http://fonts.googleapis.com/css?family=Calligraffitti|Open+Sans:400italic,700italic,400,700\");\n/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}legend,td,th{padding:0}@media screen{.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-parent{background-color:#d7d7fa}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:800px;height:600px;position:absolute;overflow:hidden;top:50%;left:50%;margin-left:-400px;margin-top:-300px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.emphatic{background:#a6b0ff;color:#fff}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#431380}h1{color:#6e8ae4;font-family:'Calligraffitti',cursive;font-size:3em}h2{font-size:2em}h3{font-size:1.5em}h4,h5,h6{font-size:1em}article,h2,h3,h4,h5,h6{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}h1,h2,h3,h4,h5,h6,strong{font-weight:400}li,p{font-size:24px;line-height:1.5em}strong{color:#fc49d8}a{color:#b66c7e;text-decoration:none}a:hover{text-decoration:underline}code,pre{font-size:20px}.slide{overflow:hidden}.slide .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .8s ease}.slide .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.slide .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.slide .bespoke-inactive .bespoke-bullet-inactive{transition:opacity .8s ease}.cube{overflow:hidden}.cube,.cube .bespoke-scale-parent{-webkit-perspective:800px;perspective:800px}.cube .bespoke-slide{-webkit-transform-origin:50% 50% -400px;transform-origin:50% 50% -400px;transition:all .8s ease;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.cube .bespoke-inactive{opacity:0}.cube .bespoke-before{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)}.cube .bespoke-after{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}.zelda-transition{overflow:hidden}.zelda-transition .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .8s cubic-bezier(.78,.03,.22,.68)}.zelda-transition .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.zelda-transition .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.2vw}.bespoke-progress-bar{position:absolute;height:100%;transition:width .6s ease}.bespoke-progress-bar:after,.bespoke-progress-bar:before{content:\"\";position:absolute;display:block;width:100%;height:50%}.bespoke-progress-bar:before{background:#aeaef5}.bespoke-progress-bar:after{top:50%;background:#c2c2f7}.bespoke-simple-overview .bespoke-parent{display:inline-block}.bespoke-simple-overview .bespoke-slide{position:absolute;-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);opacity:1;outline:4px solid silver;background-color:rgba(255,255,255,.2)}.bespoke-simple-overview .bespoke-slide.bespoke-active,.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-inactive.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2),.bespoke-simple-overview .bespoke-slide.bespoke-inactive.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2){display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bespoke-simple-overview .bespoke-slide.bespoke-after{display:none;-webkit-transform:translate3d(4120.00048000192px,0,-2000px);transform:translate3d(4120.00048000192px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before{display:none;-webkit-transform:translate3d(-4120.00048000192px,0,-2000px);transform:translate3d(-4120.00048000192px,0,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-after{-webkit-transform:translate3d(4120.00048000192px,100%,-2000px);transform:translate3d(4120.00048000192px,100%,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-before{-webkit-transform:translate3d(-4120.00048000192px,100%,-2000px);transform:translate3d(-4120.00048000192px,100%,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(824.000096000384px,0,-2000px);transform:translate3d(824.000096000384px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-824.000096000384px,0,-2000px);transform:translate3d(-824.000096000384px,0,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-after-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(824.000096000384px,100%,-2000px);transform:translate3d(824.000096000384px,100%,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-before-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-824.000096000384px,100%,-2000px);transform:translate3d(-824.000096000384px,100%,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(1648.000192000768px,0,-2000px);transform:translate3d(1648.000192000768px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-1648.000192000768px,0,-2000px);transform:translate3d(-1648.000192000768px,0,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-after-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(1648.000192000768px,100%,-2000px);transform:translate3d(1648.000192000768px,100%,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-before-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-1648.000192000768px,100%,-2000px);transform:translate3d(-1648.000192000768px,100%,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(2472.000288001152px,0,-2000px);transform:translate3d(2472.000288001152px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-2472.000288001152px,0,-2000px);transform:translate3d(-2472.000288001152px,0,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-after-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(2472.000288001152px,100%,-2000px);transform:translate3d(2472.000288001152px,100%,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide.bespoke-before-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-2472.000288001152px,100%,-2000px);transform:translate3d(-2472.000288001152px,100%,-2000px)}.bespoke-simple-overview.zelda-transition .bespoke-slide{-webkit-transform:translate3d(0,100%,-2000px);transform:translate3d(0,100%,-2000px);background-color:inherit}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:-5%;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:none;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important;color:#000!important;text-shadow:none!important}body,html{overflow:visible!important;height:auto!important}body{margin:0!important;padding:.1in!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-column-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":4,"insert-css":11}],3:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (activeSlideHasBulletByOffset(1)) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (activeSlideHasBulletByOffset(-1)) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],6:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
    });
  };
};

},{}],7:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      firstSlide = deck.slides[0],
      slideHeight = firstSlide.offsetHeight,
      slideWidth = firstSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      wrap = function(element) {
        var wrapper = document.createElement('div');
        wrapper.className = 'bespoke-scale-parent';
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        return wrapper;
      },

      elements = useZoom ? deck.slides : deck.slides.map(wrap),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = parent.offsetHeight / slideHeight;

        elements.forEach(scale.bind(null, Math.min(xScale, yScale)));
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],8:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var modifyState = function(method, event) {
      var attr = event.slide.getAttribute('data-bespoke-state');

      if (attr) {
        attr.split(' ').forEach(function(state) {
          deck.parent.classList[method](state);
        });
      }
    };

    deck.on('activate', modifyState.bind(null, 'add'));
    deck.on('deactivate', modifyState.bind(null, 'remove'));
  };
};

},{}],9:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],10:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],11:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9zY3JpcHRzL21haW4uanMiLCJsaWIvYmVzcG9rZS10aGVtZS1mYW5jeS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWJ1bGxldHMvbGliL2Jlc3Bva2UtYnVsbGV0cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWNsYXNzZXMvbGliL2Jlc3Bva2UtY2xhc3Nlcy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWtleXMvbGliL2Jlc3Bva2Uta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXByb2dyZXNzL2xpYi9iZXNwb2tlLXByb2dyZXNzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2NhbGUvbGliL2Jlc3Bva2Utc2NhbGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zdGF0ZS9saWIvYmVzcG9rZS1zdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXRvdWNoL2xpYi9iZXNwb2tlLXRvdWNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UvbGliL2Jlc3Bva2UuanMiLCJub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXG4gIGZhbmN5ID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliL2Jlc3Bva2UtdGhlbWUtZmFuY3kuanMnKSxcbiAga2V5cyA9IHJlcXVpcmUoJ2Jlc3Bva2Uta2V5cycpLFxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcbiAgYnVsbGV0cyA9IHJlcXVpcmUoJ2Jlc3Bva2UtYnVsbGV0cycpLFxuICBzY2FsZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2NhbGUnKSxcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXG4gIHN0YXRlID0gcmVxdWlyZSgnYmVzcG9rZS1zdGF0ZScpO1xuXG5iZXNwb2tlLmZyb20oJ2FydGljbGUnLCBbXG4gIGZhbmN5KCksXG4gIHNjYWxlKCksXG4gIGtleXMoKSxcbiAgdG91Y2goKSxcbiAgYnVsbGV0cygnbGksIC5idWxsZXQnKSxcbiAgcHJvZ3Jlc3MoKSxcbiAgc3RhdGUoKVxuXSk7XG4iLCJcbnZhciBjbGFzc2VzID0gcmVxdWlyZSgnYmVzcG9rZS1jbGFzc2VzJyk7XG52YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY3NzID0gXCJAaW1wb3J0IHVybChcXFwiaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2FsbGlncmFmZml0dGl8T3BlbitTYW5zOjQwMGl0YWxpYyw3MDBpdGFsaWMsNDAwLDcwMFxcXCIpO1xcbi8qISBub3JtYWxpemUuY3NzIHYzLjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcbmh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb24sc3VtbWFyeXtkaXNwbGF5OmJsb2NrfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1he2JhY2tncm91bmQ6MCAwfWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZTowfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206MXB4IGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDo3MDB9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9bWFya3tiYWNrZ3JvdW5kOiNmZjA7Y29sb3I6IzAwMH1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1cHt0b3A6LS41ZW19c3Vie2JvdHRvbTotLjI1ZW19aW1ne2JvcmRlcjowfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjB9cHJle292ZXJmbG93OmF1dG99Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7bWFyZ2luOjB9YnV0dG9ue292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixodG1sIGlucHV0W3R5cGU9YnV0dG9uXSxpbnB1dFt0eXBlPXJlc2V0XSxpbnB1dFt0eXBlPXN1Ym1pdF17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtjdXJzb3I6cG9pbnRlcn1idXR0b25bZGlzYWJsZWRdLGh0bWwgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDtwYWRkaW5nOjB9aW5wdXR7bGluZS1oZWlnaHQ6bm9ybWFsfWlucHV0W3R5cGU9Y2hlY2tib3hdLGlucHV0W3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31pbnB1dFt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fWlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfWxlZ2VuZHtib3JkZXI6MH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfW9wdGdyb3Vwe2ZvbnQtd2VpZ2h0OjcwMH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH1sZWdlbmQsdGQsdGh7cGFkZGluZzowfUBtZWRpYSBzY3JlZW57LmJlc3Bva2UtcGFyZW50LC5iZXNwb2tlLXNjYWxlLXBhcmVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0uYmVzcG9rZS1wYXJlbnR7YmFja2dyb3VuZC1jb2xvcjojZDdkN2ZhfS5iZXNwb2tlLXNjYWxlLXBhcmVudHtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLXNjYWxlLXBhcmVudCAuYmVzcG9rZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uYmVzcG9rZS1zbGlkZXt3aWR0aDo4MDBweDtoZWlnaHQ6NjAwcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTQwMHB4O21hcmdpbi10b3A6LTMwMHB4O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmJlc3Bva2UtaW5hY3RpdmV7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmVtcGhhdGlje2JhY2tncm91bmQ6I2E2YjBmZjtjb2xvcjojZmZmfS5lbXBoYXRpYyBoMSwuZW1waGF0aWMgaDIsLmVtcGhhdGljIGgzLC5lbXBoYXRpYyBoNCwuZW1waGF0aWMgaDUsLmVtcGhhdGljIGg2e2NvbG9yOiM0MzEzODB9aDF7Y29sb3I6IzZlOGFlNDtmb250LWZhbWlseTonQ2FsbGlncmFmZml0dGknLGN1cnNpdmU7Zm9udC1zaXplOjNlbX1oMntmb250LXNpemU6MmVtfWgze2ZvbnQtc2l6ZToxLjVlbX1oNCxoNSxoNntmb250LXNpemU6MWVtfWFydGljbGUsaDIsaDMsaDQsaDUsaDZ7Zm9udC1mYW1pbHk6J09wZW4gU2FucycsRnVzZS1TZWdvZS1VSSxoZWx2ZXRpY2EsYXJpYWwsc2Fucy1zZXJpZn1oMSxoMixoMyxoNCxoNSxoNixzdHJvbmd7Zm9udC13ZWlnaHQ6NDAwfWxpLHB7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS41ZW19c3Ryb25ne2NvbG9yOiNmYzQ5ZDh9YXtjb2xvcjojYjY2YzdlO3RleHQtZGVjb3JhdGlvbjpub25lfWE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1jb2RlLHByZXtmb250LXNpemU6MjBweH0uc2xpZGV7b3ZlcmZsb3c6aGlkZGVufS5zbGlkZSAuYmVzcG9rZS1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2l0aW9uOmFsbCAuOHMgZWFzZX0uc2xpZGUgLmJlc3Bva2UtYmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LnNsaWRlIC5iZXNwb2tlLWFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfS5zbGlkZSAuYmVzcG9rZS1pbmFjdGl2ZSAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7dHJhbnNpdGlvbjpvcGFjaXR5IC44cyBlYXNlfS5jdWJle292ZXJmbG93OmhpZGRlbn0uY3ViZSwuY3ViZSAuYmVzcG9rZS1zY2FsZS1wYXJlbnR7LXdlYmtpdC1wZXJzcGVjdGl2ZTo4MDBweDtwZXJzcGVjdGl2ZTo4MDBweH0uY3ViZSAuYmVzcG9rZS1zbGlkZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJSAtNDAwcHg7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlIC00MDBweDt0cmFuc2l0aW9uOmFsbCAuOHMgZWFzZTstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LmN1YmUgLmJlc3Bva2UtaW5hY3RpdmV7b3BhY2l0eTowfS5jdWJlIC5iZXNwb2tlLWJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVkoLTkwZGVnKX0uY3ViZSAuYmVzcG9rZS1hZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZyl9LnplbGRhLXRyYW5zaXRpb257b3ZlcmZsb3c6aGlkZGVufS56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zaXRpb246YWxsIC44cyBjdWJpYy1iZXppZXIoLjc4LC4wMywuMjIsLjY4KX0uemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1iZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0uemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1hZnRlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0uYmVzcG9rZS1idWxsZXR7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zaXRpb246YWxsIC40cyBlYXNlfS5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQwcHgsMCwwKTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZX0uYmVzcG9rZS1idWxsZXQtb2ZmIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7LXdlYmtpdC10cmFuc2Zvcm06aW5pdGlhbDt0cmFuc2Zvcm06aW5pdGlhbH0uYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0Oi4ydnd9LmJlc3Bva2UtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3RyYW5zaXRpb246d2lkdGggLjZzIGVhc2V9LmJlc3Bva2UtcHJvZ3Jlc3MtYmFyOmFmdGVyLC5iZXNwb2tlLXByb2dyZXNzLWJhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjUwJX0uYmVzcG9rZS1wcm9ncmVzcy1iYXI6YmVmb3Jle2JhY2tncm91bmQ6I2FlYWVmNX0uYmVzcG9rZS1wcm9ncmVzcy1iYXI6YWZ0ZXJ7dG9wOjUwJTtiYWNrZ3JvdW5kOiNjMmMyZjd9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXBhcmVudHtkaXNwbGF5OmlubGluZS1ibG9ja30uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsLTIwMDBweCk7b3BhY2l0eToxO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFjdGl2ZSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGU6aG92ZXJ7b3V0bGluZS1jb2xvcjojNDY4MmI0fS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWluYWN0aXZlLmJlc3Bva2UtYWZ0ZXI6bm90KC5iZXNwb2tlLWFmdGVyLTEpOm5vdCguYmVzcG9rZS1hZnRlci0yKSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1pbmFjdGl2ZS5iZXNwb2tlLWJlZm9yZTpub3QoLmJlc3Bva2UtYmVmb3JlLTEpOm5vdCguYmVzcG9rZS1iZWZvcmUtMil7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7LXdlYmtpdC10cmFuc2Zvcm06aW5pdGlhbDt0cmFuc2Zvcm06aW5pdGlhbH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlcntkaXNwbGF5Om5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDEyMC4wMDA0ODAwMDE5MnB4LDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQxMjAuMDAwNDgwMDAxOTJweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZXtkaXNwbGF5Om5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQxMjAuMDAwNDgwMDAxOTJweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDEyMC4wMDA0ODAwMDE5MnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MTIwLjAwMDQ4MDAwMTkycHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDEyMC4wMDA0ODAwMDE5MnB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQxMjAuMDAwNDgwMDAxOTJweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDEyMC4wMDA0ODAwMDE5MnB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg4MjQuMDAwMDk2MDAwMzg0cHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoODI0LjAwMDA5NjAwMDM4NHB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTgyNC4wMDAwOTYwMDAzODRweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtODI0LjAwMDA5NjAwMDM4NHB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xe2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDgyNC4wMDAwOTYwMDAzODRweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg4MjQuMDAwMDk2MDAwMzg0cHgsMTAwJSwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0xe2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC04MjQuMDAwMDk2MDAwMzg0cHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTgyNC4wMDAwOTYwMDAzODRweCwxMDAlLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTY0OC4wMDAxOTIwMDA3NjhweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxNjQ4LjAwMDE5MjAwMDc2OHB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTJ7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTE2NDguMDAwMTkyMDAwNzY4cHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTE2NDguMDAwMTkyMDAwNzY4cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTY0OC4wMDAxOTIwMDA3NjhweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxNjQ4LjAwMDE5MjAwMDc2OHB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMntkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTY0OC4wMDAxOTIwMDA3NjhweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTY0OC4wMDAxOTIwMDA3NjhweCwxMDAlLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTN7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjQ3Mi4wMDAyODgwMDExNTJweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNDcyLjAwMDI4ODAwMTE1MnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTN7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjQ3Mi4wMDAyODgwMDExNTJweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNDcyLjAwMDI4ODAwMTE1MnB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtM3tkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjQ3Mi4wMDAyODgwMDExNTJweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjQ3Mi4wMDAyODgwMDExNTJweCwxMDAlLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLC0yMDAwcHgpO2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH0jYmVzcG9rZS1zZWFyY2h7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTtvcGFjaXR5OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LC4zKTt0cmFuc2l0aW9uOm9wYWNpdHkgMTAwbXMgZWFzZS1vdXR9I2Jlc3Bva2Utc2VhcmNoLmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZ3tvcGFjaXR5OjF9I2Jlc3Bva2Utc2VhcmNoLmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZz4jYmVzcG9rZS1zZWFyY2gtaW5wdXR7Ym90dG9tOjUlfSNiZXNwb2tlLXNlYXJjaC1pbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtib3R0b206LTUlO3BvaW50ZXItZXZlbnRzOmFsbDt3aWR0aDoyMDBweDttYXJnaW4tbGVmdDotMTAwcHg7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2JvcmRlcjoxcHggc29saWQgc2lsdmVyO291dGxpbmU6bm9uZTtjb2xvcjpncmF5O2ZvbnQtc2l6ZTp4LWxhcmdlO2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOSk7dHJhbnNpdGlvbjpib3R0b20gMTQwbXMgZWFzZS1vdXR9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjB9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdC1mb2N1c2Vke2JhY2tncm91bmQtY29sb3I6b3JhbmdlfSNiZXNwb2tlLXNlYXJjaC5iZXNwb2tlLXNlYXJjaC1uby1yZXN1bHQ+I2Jlc3Bva2Utc2VhcmNoLWlucHV0e2JvcmRlcjoxcHggc29saWQgIzhiMDAwMDtjb2xvcjojOGIwMDAwfSNiZXNwb2tlLXNlYXJjaC1yZXN1bHRzLWNvdW50e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMzBweDt3aWR0aDo2MHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTpzbWFsbGVyO2NvbG9yOiM4YTJiZTI7Zm9udC13ZWlnaHQ6NzAwfX1AbWVkaWEgcHJpbnR7KntiYWNrZ3JvdW5kOjAgMCFpbXBvcnRhbnQ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7dGV4dC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9Ym9keSxodG1se292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudH1ib2R5e21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOi4xaW4haW1wb3J0YW50fWJvZHksY29kZXtsaW5lLWhlaWdodDoxZW0haW1wb3J0YW50fWNvZGUsb2wscHJlLHVse3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9cHJlIGNvZGV7Ym9yZGVyOjFweCBzb2xpZCAjNjk2OTY5IWltcG9ydGFudDtwYWRkaW5nOjVweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo0cHghaW1wb3J0YW50fUBwYWdle21hcmdpbjouNzlpbiFpbXBvcnRhbnR9LmJlc3Bva2Utc2xpZGV7Ym94LXNpemluZzpib3JkZXItYm94IWltcG9ydGFudDtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtmbG9hdDpsZWZ0IWltcG9ydGFudDtib3JkZXI6MnB4IHNvbGlkICMwMDAhaW1wb3J0YW50O3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudDttYXJnaW4tdG9wOjAhaW1wb3J0YW50O21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50O3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZT4qe3pvb206LjY1IWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZT4qICp7em9vbTouODUhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlPmgxOm9ubHktY2hpbGQsLmJlc3Bva2Utc2xpZGU+aDI6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oMzpvbmx5LWNoaWxkLC5iZXNwb2tlLXNsaWRlPmg0Om9ubHktY2hpbGQsLmJlc3Bva2Utc2xpZGU+aDU6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oNjpvbmx5LWNoaWxke21hcmdpbi10b3A6NGVtIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZSAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7b3BhY2l0eToxIWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZTpudGgtY2hpbGQoNm4pLC5iZXNwb2tlLXNsaWRlOm50aC1vZi10eXBlKDZuKXtwYWdlLWJyZWFrLWFmdGVyOmFsd2F5cyFpbXBvcnRhbnQ7LXdlYmtpdC1jb2x1bW4tYnJlYWstYWZ0ZXI6cGFnZSFpbXBvcnRhbnQ7YnJlYWstYWZ0ZXI6cGFnZSFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KXsuYmVzcG9rZS1zbGlkZXt3aWR0aDoyLjkxOTQ3MjQ0MzAwMDAwMWluIWltcG9ydGFudDtoZWlnaHQ6Mi4xODk2MDQzMzIyNTAwMDFpbiFpbXBvcnRhbnQ7bWFyZ2luLXJpZ2h0Oi4zMjQzODU4MjdpbiFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouMzI0Mzg1ODI3aW4haW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlOm50aC1jaGlsZCgybil7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5iZXNwb2tlLXBhcmVudHt3aWR0aDo2LjQ4NzcxNjU0MDAwMDAwMWluIWltcG9ydGFudH1pbWd7bWF4LXdpZHRoOjUuMjQ4MDEyOTc2NDcwNTg5aW4haW1wb3J0YW50fX1AbWVkaWEgcHJpbnQgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpey5iZXNwb2tlLXNsaWRle3dpZHRoOjIuOTczODc0MDJpbiFpbXBvcnRhbnQ7aGVpZ2h0OjIuMjMwNDA1NTE1aW4haW1wb3J0YW50O21hcmdpbi1yaWdodDouMjk3Mzg3NDAyaW4haW1wb3J0YW50O21hcmdpbi1ib3R0b206LjI5NzM4NzQwMmluIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZTpudGgtY2hpbGQoM24pe21hcmdpbi1yaWdodDowIWltcG9ydGFudH0uYmVzcG9rZS1wYXJlbnR7d2lkdGg6OS45MTI5MTM0aW4haW1wb3J0YW50fWltZ3ttYXgtd2lkdGg6My40OTg2NzUzMTc2NDcwNTlpbiFpbXBvcnRhbnR9fVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRoZW1lLmNzcy5tYXAgKi9cXG5cIjtcbiAgaW5zZXJ0Q3NzKGNzcywgeyBwcmVwZW5kOiB0cnVlIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgY2xhc3NlcygpKGRlY2spO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBhY3RpdmVTbGlkZUluZGV4LFxuICAgICAgYWN0aXZlQnVsbGV0SW5kZXgsXG5cbiAgICAgIGJ1bGxldHMgPSBkZWNrLnNsaWRlcy5tYXAoZnVuY3Rpb24oc2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoc2xpZGUucXVlcnlTZWxlY3RvckFsbCgodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6ICdbZGF0YS1iZXNwb2tlLWJ1bGxldF0nKSksIDApO1xuICAgICAgfSksXG5cbiAgICAgIG5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHRTbGlkZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleCArIDE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQoMSkpIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChhY3RpdmVTbGlkZUluZGV4LCBhY3RpdmVCdWxsZXRJbmRleCArIDEpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChidWxsZXRzW25leHRTbGlkZUluZGV4XSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KG5leHRTbGlkZUluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcHJldiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJldlNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4IC0gMTtcblxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCgtMSkpIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChhY3RpdmVTbGlkZUluZGV4LCBhY3RpdmVCdWxsZXRJbmRleCAtIDEpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChidWxsZXRzW3ByZXZTbGlkZUluZGV4XSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KHByZXZTbGlkZUluZGV4LCBidWxsZXRzW3ByZXZTbGlkZUluZGV4XS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYWN0aXZhdGVCdWxsZXQgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBidWxsZXRJbmRleCkge1xuICAgICAgICBhY3RpdmVTbGlkZUluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgYWN0aXZlQnVsbGV0SW5kZXggPSBidWxsZXRJbmRleDtcblxuICAgICAgICBidWxsZXRzLmZvckVhY2goZnVuY3Rpb24oc2xpZGUsIHMpIHtcbiAgICAgICAgICBzbGlkZS5mb3JFYWNoKGZ1bmN0aW9uKGJ1bGxldCwgYikge1xuICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0Jyk7XG5cbiAgICAgICAgICAgIGlmIChzIDwgc2xpZGVJbmRleCB8fCBzID09PSBzbGlkZUluZGV4ICYmIGIgPD0gYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZScpO1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzID09PSBzbGlkZUluZGV4ICYmIGIgPT09IGJ1bGxldEluZGV4KSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtY3VycmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGJ1bGxldHNbYWN0aXZlU2xpZGVJbmRleF1bYWN0aXZlQnVsbGV0SW5kZXggKyBvZmZzZXRdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9O1xuXG4gICAgZGVjay5vbignbmV4dCcsIG5leHQpO1xuICAgIGRlY2sub24oJ3ByZXYnLCBwcmV2KTtcblxuICAgIGRlY2sub24oJ3NsaWRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgYWN0aXZhdGVCdWxsZXQoZS5pbmRleCwgMCk7XG4gICAgfSk7XG5cbiAgICBhY3RpdmF0ZUJ1bGxldCgwLCAwKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS0nICsgY2xzKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWVcbiAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCdiZXNwb2tlLScgKyBjbHMgKycoXFxcXHN8JCknLCAnZycpLCAnICcpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH0sXG5cbiAgICAgIGRlYWN0aXZhdGUgPSBmdW5jdGlvbihlbCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZVNsaWRlID0gZGVjay5zbGlkZXNbZGVjay5zbGlkZSgpXSxcbiAgICAgICAgICBvZmZzZXQgPSBpbmRleCAtIGRlY2suc2xpZGUoKSxcbiAgICAgICAgICBvZmZzZXRDbGFzcyA9IG9mZnNldCA+IDAgPyAnYWZ0ZXInIDogJ2JlZm9yZSc7XG5cbiAgICAgICAgWydiZWZvcmUoLVxcXFxkKyk/JywgJ2FmdGVyKC1cXFxcZCspPycsICdhY3RpdmUnLCAnaW5hY3RpdmUnXS5tYXAocmVtb3ZlQ2xhc3MuYmluZChudWxsLCBlbCkpO1xuXG4gICAgICAgIGlmIChlbCAhPT0gYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgICBbJ2luYWN0aXZlJywgb2Zmc2V0Q2xhc3MsIG9mZnNldENsYXNzICsgJy0nICsgTWF0aC5hYnMob2Zmc2V0KV0ubWFwKGFkZENsYXNzLmJpbmQobnVsbCwgZWwpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGFkZENsYXNzKGRlY2sucGFyZW50LCAncGFyZW50Jyk7XG4gICAgZGVjay5zbGlkZXMubWFwKGZ1bmN0aW9uKGVsKSB7IGFkZENsYXNzKGVsLCAnc2xpZGUnKTsgfSk7XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRlY2suc2xpZGVzLm1hcChkZWFjdGl2YXRlKTtcbiAgICAgIGFkZENsYXNzKGUuc2xpZGUsICdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUNsYXNzKGUuc2xpZGUsICdpbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBpc0hvcml6b250YWwgPSBvcHRpb25zICE9PSAndmVydGljYWwnO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09IDM0IHx8IC8vIFBBR0UgRE9XTlxuICAgICAgICAoZS53aGljaCA9PSAzMiAmJiAhZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgV0lUSE9VVCBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzkpIHx8IC8vIFJJR0hUXG4gICAgICAgICghaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gNDApIC8vIERPV05cbiAgICAgICkgeyBkZWNrLm5leHQoKTsgfVxuXG4gICAgICBpZiAoZS53aGljaCA9PSAzMyB8fCAvLyBQQUdFIFVQXG4gICAgICAgIChlLndoaWNoID09IDMyICYmIGUuc2hpZnRLZXkpIHx8IC8vIFNQQUNFICsgU0hJRlRcbiAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiBlLndoaWNoID09IDM3KSB8fCAvLyBMRUZUXG4gICAgICAgICghaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzgpIC8vIFVQXG4gICAgICApIHsgZGVjay5wcmV2KCk7IH1cbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkZWNrKSB7XG4gICAgdmFyIHByb2dyZXNzUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgcHJvcCA9IG9wdGlvbnMgPT09ICd2ZXJ0aWNhbCcgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBwcm9ncmVzc1BhcmVudC5jbGFzc05hbWUgPSAnYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnQnO1xuICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLWJhcic7XG4gICAgcHJvZ3Jlc3NQYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xuICAgIGRlY2sucGFyZW50LmFwcGVuZENoaWxkKHByb2dyZXNzUGFyZW50KTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGVbcHJvcF0gPSAoZS5pbmRleCAqIDEwMCAvIChkZWNrLnNsaWRlcy5sZW5ndGggLSAxKSkgKyAnJSc7XG4gICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIHBhcmVudCA9IGRlY2sucGFyZW50LFxuICAgICAgZmlyc3RTbGlkZSA9IGRlY2suc2xpZGVzWzBdLFxuICAgICAgc2xpZGVIZWlnaHQgPSBmaXJzdFNsaWRlLm9mZnNldEhlaWdodCxcbiAgICAgIHNsaWRlV2lkdGggPSBmaXJzdFNsaWRlLm9mZnNldFdpZHRoLFxuICAgICAgdXNlWm9vbSA9IG9wdGlvbnMgPT09ICd6b29tJyB8fCAoJ3pvb20nIGluIHBhcmVudC5zdHlsZSAmJiBvcHRpb25zICE9PSAndHJhbnNmb3JtJyksXG5cbiAgICAgIHdyYXAgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2Utc2NhbGUtcGFyZW50JztcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgICB9LFxuXG4gICAgICBlbGVtZW50cyA9IHVzZVpvb20gPyBkZWNrLnNsaWRlcyA6IGRlY2suc2xpZGVzLm1hcCh3cmFwKSxcblxuICAgICAgdHJhbnNmb3JtUHJvcGVydHkgPSAoZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJ01veiBXZWJraXQgTyBtcycuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVzLnJlZHVjZShmdW5jdGlvbihjdXJyZW50UHJvcGVydHksIHByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIHByb3BlcnR5IGluIHBhcmVudC5zdHlsZSA/IHByZWZpeCArIHByb3BlcnR5IDogY3VycmVudFByb3BlcnR5O1xuICAgICAgICAgIH0sIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSgnVHJhbnNmb3JtJykpLFxuXG4gICAgICBzY2FsZSA9IHVzZVpvb20gP1xuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuem9vbSA9IHJhdGlvO1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24ocmF0aW8sIGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICdzY2FsZSgnICsgcmF0aW8gKyAnKSc7XG4gICAgICAgIH0sXG5cbiAgICAgIHNjYWxlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB4U2NhbGUgPSBwYXJlbnQub2Zmc2V0V2lkdGggLyBzbGlkZVdpZHRoLFxuICAgICAgICAgIHlTY2FsZSA9IHBhcmVudC5vZmZzZXRIZWlnaHQgLyBzbGlkZUhlaWdodDtcblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHNjYWxlLmJpbmQobnVsbCwgTWF0aC5taW4oeFNjYWxlLCB5U2NhbGUpKSk7XG4gICAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNjYWxlQWxsKTtcbiAgICBzY2FsZUFsbCgpO1xuICB9O1xuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgbW9kaWZ5U3RhdGUgPSBmdW5jdGlvbihtZXRob2QsIGV2ZW50KSB7XG4gICAgICB2YXIgYXR0ciA9IGV2ZW50LnNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLXN0YXRlJyk7XG5cbiAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgIGF0dHIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgZGVjay5wYXJlbnQuY2xhc3NMaXN0W21ldGhvZF0oc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBtb2RpZnlTdGF0ZS5iaW5kKG51bGwsICdhZGQnKSk7XG4gICAgZGVjay5vbignZGVhY3RpdmF0ZScsIG1vZGlmeVN0YXRlLmJpbmQobnVsbCwgJ3JlbW92ZScpKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYXhpcyA9IG9wdGlvbnMgPT0gJ3ZlcnRpY2FsJyA/ICdZJyA6ICdYJyxcbiAgICAgIHN0YXJ0UG9zaXRpb24sXG4gICAgICBkZWx0YTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBlLnRvdWNoZXNbMF1bJ3BhZ2UnICsgYXhpc107XG4gICAgICAgIGRlbHRhID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWx0YSA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXSAtIHN0YXJ0UG9zaXRpb247XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWNrLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKE1hdGguYWJzKGRlbHRhKSA+IDUwKSB7XG4gICAgICAgIGRlY2tbZGVsdGEgPiAwID8gJ3ByZXYnIDogJ25leHQnXSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsInZhciBmcm9tID0gZnVuY3Rpb24ob3B0cywgcGx1Z2lucykge1xuICB2YXIgcGFyZW50ID0gKG9wdHMucGFyZW50IHx8IG9wdHMpLm5vZGVUeXBlID09PSAxID8gKG9wdHMucGFyZW50IHx8IG9wdHMpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRzLnBhcmVudCB8fCBvcHRzKSxcbiAgICBzbGlkZXMgPSBbXS5maWx0ZXIuY2FsbCh0eXBlb2Ygb3B0cy5zbGlkZXMgPT09ICdzdHJpbmcnID8gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zbGlkZXMpIDogKG9wdHMuc2xpZGVzIHx8IHBhcmVudC5jaGlsZHJlbiksIGZ1bmN0aW9uKGVsKSB7IHJldHVybiBlbC5ub2RlTmFtZSAhPT0gJ1NDUklQVCc7IH0pLFxuICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzWzBdLFxuICAgIGxpc3RlbmVycyA9IHt9LFxuXG4gICAgYWN0aXZhdGUgPSBmdW5jdGlvbihpbmRleCwgY3VzdG9tRGF0YSkge1xuICAgICAgaWYgKCFzbGlkZXNbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmlyZSgnZGVhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbaW5kZXhdO1xuICAgICAgZmlyZSgnYWN0aXZhdGUnLCBjcmVhdGVFdmVudERhdGEoYWN0aXZlU2xpZGUsIGN1c3RvbURhdGEpKTtcbiAgICB9LFxuXG4gICAgc2xpZGUgPSBmdW5jdGlvbihpbmRleCwgY3VzdG9tRGF0YSkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgZmlyZSgnc2xpZGUnLCBjcmVhdGVFdmVudERhdGEoc2xpZGVzW2luZGV4XSwgY3VzdG9tRGF0YSkpICYmIGFjdGl2YXRlKGluZGV4LCBjdXN0b21EYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0ZXAgPSBmdW5jdGlvbihvZmZzZXQsIGN1c3RvbURhdGEpIHtcbiAgICAgIHZhciBzbGlkZUluZGV4ID0gc2xpZGVzLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgb2Zmc2V0O1xuXG4gICAgICBmaXJlKG9mZnNldCA+IDAgPyAnbmV4dCcgOiAncHJldicsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpICYmIGFjdGl2YXRlKHNsaWRlSW5kZXgsIGN1c3RvbURhdGEpO1xuICAgIH0sXG5cbiAgICBvbiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCAobGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIG9mZi5iaW5kKG51bGwsIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBvZmYgPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lciAhPT0gY2FsbGJhY2s7IH0pO1xuICAgIH0sXG5cbiAgICBmaXJlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgIHJldHVybiAobGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW10pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24obm90Q2FuY2VsbGVkLCBjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBub3RDYW5jZWxsZWQgJiYgY2FsbGJhY2soZXZlbnREYXRhKSAhPT0gZmFsc2U7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVFdmVudERhdGEgPSBmdW5jdGlvbihlbCwgZXZlbnREYXRhKSB7XG4gICAgICBldmVudERhdGEgPSBldmVudERhdGEgfHwge307XG4gICAgICBldmVudERhdGEuaW5kZXggPSBzbGlkZXMuaW5kZXhPZihlbCk7XG4gICAgICBldmVudERhdGEuc2xpZGUgPSBlbDtcbiAgICAgIHJldHVybiBldmVudERhdGE7XG4gICAgfSxcblxuICAgIGRlY2sgPSB7XG4gICAgICBvbjogb24sXG4gICAgICBvZmY6IG9mZixcbiAgICAgIGZpcmU6IGZpcmUsXG4gICAgICBzbGlkZTogc2xpZGUsXG4gICAgICBuZXh0OiBzdGVwLmJpbmQobnVsbCwgMSksXG4gICAgICBwcmV2OiBzdGVwLmJpbmQobnVsbCwgLTEpLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzbGlkZXM6IHNsaWRlc1xuICAgIH07XG5cbiAgKHBsdWdpbnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcGx1Z2luKGRlY2spO1xuICB9KTtcblxuICBhY3RpdmF0ZSgwKTtcblxuICByZXR1cm4gZGVjaztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmcm9tOiBmcm9tXG59O1xuIiwidmFyIGluc2VydGVkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcywgb3B0aW9ucykge1xuICAgIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm47XG4gICAgaW5zZXJ0ZWRbY3NzXSA9IHRydWU7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9XG4gICAgXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZShlbGVtLCBoZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcbiJdfQ==
