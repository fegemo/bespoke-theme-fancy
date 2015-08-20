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
  var css = "@import url(\"http://fonts.googleapis.com/css?family=Calligraffitti|Open+Sans:400italic,700italic,400,700\");html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media screen{.bespoke-parent{background-color:#d7d7fa}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:800px;height:600px;position:absolute;overflow:hidden;top:50%;left:50%;margin-left:-400px;margin-top:-300px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.emphatic{background:#a6b0ff;color:#fff}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#431380}h1{color:#6e8ae4;font-family:'Calligraffitti',cursive;font-size:3em}h2{font-size:2em}h3{font-size:1.5em}h4,h5,h6{font-size:1em}h2,h3,h4,h5,h6{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}h1,h2,h3,h4,h5,h6{font-weight:400}p,li{font-size:24px;line-height:1.5em}strong{font-weight:400;color:#fc49d8}article{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}a{color:#b66c7e;text-decoration:none}a:hover{text-decoration:underline}pre,code{font-size:20px}.slide{overflow:hidden}.slide .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .8s ease}.slide .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.slide .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.slide .bespoke-inactive .bespoke-bullet-inactive{transition:opacity .8s ease}.cube{overflow:hidden}.cube,.cube .bespoke-scale-parent{-webkit-perspective:800px;perspective:800px}.cube .bespoke-slide{-webkit-transform-origin:50% 50% -400px;transform-origin:50% 50% -400px;transition:all .8s ease;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.cube .bespoke-inactive{opacity:0}.cube .bespoke-before{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)}.cube .bespoke-after{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}.zelda-transition{overflow:hidden}.zelda-transition .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .8s cubic-bezier(.78,.03,.22,.68)}.zelda-transition .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.zelda-transition .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@media screen{.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}}@media screen{.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.2vw}.bespoke-progress-bar{position:absolute;height:100%;transition:width .6s ease}.bespoke-progress-bar:before,.bespoke-progress-bar:after{content:\"\";position:absolute;display:block;width:100%;height:50%}.bespoke-progress-bar:before{background:#aeaef5}.bespoke-progress-bar:after{top:50%;background:#c2c2f7}}@media screen{.bespoke-overview .bespoke-parent{display:inline-block}.bespoke-overview .bespoke-slide{position:absolute;-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);opacity:1;outline:4px solid silver;background-color:rgba(255,255,255,.2)}.bespoke-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-overview .bespoke-slide.bespoke-active{outline-color:#4682b4}.bespoke-overview .bespoke-slide.bespoke-inactive.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2),.bespoke-overview .bespoke-slide.bespoke-inactive.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2){display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bespoke-overview .bespoke-slide.bespoke-after{display:none;-webkit-transform:translate3d(4120.00048000192px,0,-2000px);transform:translate3d(4120.00048000192px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before{display:none;-webkit-transform:translate3d(-4120.00048000192px,0,-2000px);transform:translate3d(-4120.00048000192px,0,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-after{-webkit-transform:translate3d(4120.00048000192px,100%,-2000px);transform:translate3d(4120.00048000192px,100%,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-before{-webkit-transform:translate3d(-4120.00048000192px,100%,-2000px);transform:translate3d(-4120.00048000192px,100%,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(824.000096000384px,0,-2000px);transform:translate3d(824.000096000384px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-824.000096000384px,0,-2000px);transform:translate3d(-824.000096000384px,0,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-after-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(824.000096000384px,100%,-2000px);transform:translate3d(824.000096000384px,100%,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-before-1{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-824.000096000384px,100%,-2000px);transform:translate3d(-824.000096000384px,100%,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(1648.000192000768px,0,-2000px);transform:translate3d(1648.000192000768px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-1648.000192000768px,0,-2000px);transform:translate3d(-1648.000192000768px,0,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-after-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(1648.000192000768px,100%,-2000px);transform:translate3d(1648.000192000768px,100%,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-before-2{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-1648.000192000768px,100%,-2000px);transform:translate3d(-1648.000192000768px,100%,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(2472.000288001152px,0,-2000px);transform:translate3d(2472.000288001152px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-2472.000288001152px,0,-2000px);transform:translate3d(-2472.000288001152px,0,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-after-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(2472.000288001152px,100%,-2000px);transform:translate3d(2472.000288001152px,100%,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide.bespoke-before-3{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-2472.000288001152px,100%,-2000px);transform:translate3d(-2472.000288001152px,100%,-2000px)}.bespoke-overview.zelda-transition .bespoke-slide{-webkit-transform:translate3d(0,100%,-2000px);transform:translate3d(0,100%,-2000px);background-color:inherit}}@media screen{#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:-5%;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:none;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:#ffa500}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:transparent!important;color:#000!important;text-shadow:none!important}html,body{overflow:visible!important;height:auto!important}body{margin:0!important;padding:.1in!important}body,code{line-height:1em!important}ul,ol,pre,code{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-break-after:page!important;-moz-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}>img{max-width:6.8627862in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}>img{max-width:4.5751908in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */";
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
var from = function(selectorOrElement, plugins) {
  var parent = selectorOrElement.nodeType === 1 ? selectorOrElement : document.querySelector(selectorOrElement),
    slides = [].filter.call(parent.children, function(el) { return el.nodeName !== 'SCRIPT'; }),
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

      return function() {
        listeners[eventName] = listeners[eventName].filter(function(listener) {
          return listener !== callback;
        });
      };
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9zY3JpcHRzL21haW4uanMiLCJsaWIvYmVzcG9rZS10aGVtZS1mYW5jeS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWJ1bGxldHMvbGliL2Jlc3Bva2UtYnVsbGV0cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWNsYXNzZXMvbGliL2Jlc3Bva2UtY2xhc3Nlcy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWtleXMvbGliL2Jlc3Bva2Uta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXByb2dyZXNzL2xpYi9iZXNwb2tlLXByb2dyZXNzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2NhbGUvbGliL2Jlc3Bva2Utc2NhbGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zdGF0ZS9saWIvYmVzcG9rZS1zdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXRvdWNoL2xpYi9iZXNwb2tlLXRvdWNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UvbGliL2Jlc3Bva2UuanMiLCJub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXHJcbiAgZmFuY3kgPSByZXF1aXJlKCcuLi8uLi8uLi9saWIvYmVzcG9rZS10aGVtZS1mYW5jeS5qcycpLFxyXG4gIGtleXMgPSByZXF1aXJlKCdiZXNwb2tlLWtleXMnKSxcclxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcclxuICBidWxsZXRzID0gcmVxdWlyZSgnYmVzcG9rZS1idWxsZXRzJyksXHJcbiAgc2NhbGUgPSByZXF1aXJlKCdiZXNwb2tlLXNjYWxlJyksXHJcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXHJcbiAgc3RhdGUgPSByZXF1aXJlKCdiZXNwb2tlLXN0YXRlJyk7XHJcblxyXG5iZXNwb2tlLmZyb20oJ2FydGljbGUnLCBbXHJcbiAgZmFuY3koKSxcclxuICBzY2FsZSgpLFxyXG4gIGtleXMoKSxcclxuICB0b3VjaCgpLFxyXG4gIGJ1bGxldHMoJ2xpLCAuYnVsbGV0JyksXHJcbiAgcHJvZ3Jlc3MoKSxcclxuICBzdGF0ZSgpXHJcbl0pO1xyXG4iLCJcclxudmFyIGNsYXNzZXMgPSByZXF1aXJlKCdiZXNwb2tlLWNsYXNzZXMnKTtcclxudmFyIGluc2VydENzcyA9IHJlcXVpcmUoJ2luc2VydC1jc3MnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGNzcyA9IFwiQGltcG9ydCB1cmwoXFxcImh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhbGxpZ3JhZmZpdHRpfE9wZW4rU2Fuczo0MDBpdGFsaWMsNzAwaXRhbGljLDQwMCw3MDBcXFwiKTtodG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfWFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxtYWluLG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YXtiYWNrZ3JvdW5kOjAgMH1hOmFjdGl2ZSxhOmhvdmVye291dGxpbmU6MH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOjFweCBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6NzAwfWRmbntmb250LXN0eWxlOml0YWxpY31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfW1hcmt7YmFja2dyb3VuZDojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdXB7dG9wOi0uNWVtfXN1Yntib3R0b206LS4yNWVtfWltZ3tib3JkZXI6MH1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowfXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O21hcmdpbjowfWJ1dHRvbntvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24saHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSxpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfWlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO2JveC1zaXppbmc6Y29udGVudC1ib3h9aW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfWxlZ2VuZHtib3JkZXI6MDtwYWRkaW5nOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31vcHRncm91cHtmb250LXdlaWdodDo3MDB9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGQsdGh7cGFkZGluZzowfUBtZWRpYSBzY3JlZW57LmJlc3Bva2UtcGFyZW50e2JhY2tncm91bmQtY29sb3I6I2Q3ZDdmYX0uYmVzcG9rZS1wYXJlbnQsLmJlc3Bva2Utc2NhbGUtcGFyZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowfS5iZXNwb2tlLXNjYWxlLXBhcmVudHtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLXNjYWxlLXBhcmVudCAuYmVzcG9rZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uYmVzcG9rZS1zbGlkZXt3aWR0aDo4MDBweDtoZWlnaHQ6NjAwcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTQwMHB4O21hcmdpbi10b3A6LTMwMHB4O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmJlc3Bva2UtaW5hY3RpdmV7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmVtcGhhdGlje2JhY2tncm91bmQ6I2E2YjBmZjtjb2xvcjojZmZmfS5lbXBoYXRpYyBoMSwuZW1waGF0aWMgaDIsLmVtcGhhdGljIGgzLC5lbXBoYXRpYyBoNCwuZW1waGF0aWMgaDUsLmVtcGhhdGljIGg2e2NvbG9yOiM0MzEzODB9aDF7Y29sb3I6IzZlOGFlNDtmb250LWZhbWlseTonQ2FsbGlncmFmZml0dGknLGN1cnNpdmU7Zm9udC1zaXplOjNlbX1oMntmb250LXNpemU6MmVtfWgze2ZvbnQtc2l6ZToxLjVlbX1oNCxoNSxoNntmb250LXNpemU6MWVtfWgyLGgzLGg0LGg1LGg2e2ZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLEZ1c2UtU2Vnb2UtVUksaGVsdmV0aWNhLGFyaWFsLHNhbnMtc2VyaWZ9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC13ZWlnaHQ6NDAwfXAsbGl7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS41ZW19c3Ryb25ne2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojZmM0OWQ4fWFydGljbGV7Zm9udC1mYW1pbHk6J09wZW4gU2FucycsRnVzZS1TZWdvZS1VSSxoZWx2ZXRpY2EsYXJpYWwsc2Fucy1zZXJpZn1he2NvbG9yOiNiNjZjN2U7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfXByZSxjb2Rle2ZvbnQtc2l6ZToyMHB4fS5zbGlkZXtvdmVyZmxvdzpoaWRkZW59LnNsaWRlIC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zaXRpb246YWxsIC44cyBlYXNlfS5zbGlkZSAuYmVzcG9rZS1iZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0uc2xpZGUgLmJlc3Bva2UtYWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LnNsaWRlIC5iZXNwb2tlLWluYWN0aXZlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXt0cmFuc2l0aW9uOm9wYWNpdHkgLjhzIGVhc2V9LmN1YmV7b3ZlcmZsb3c6aGlkZGVufS5jdWJlLC5jdWJlIC5iZXNwb2tlLXNjYWxlLXBhcmVudHstd2Via2l0LXBlcnNwZWN0aXZlOjgwMHB4O3BlcnNwZWN0aXZlOjgwMHB4fS5jdWJlIC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlIC00MDBweDt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCUgLTQwMHB4O3RyYW5zaXRpb246YWxsIC44cyBlYXNlOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uY3ViZSAuYmVzcG9rZS1pbmFjdGl2ZXtvcGFjaXR5OjB9LmN1YmUgLmJlc3Bva2UtYmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVkoLTkwZGVnKTt0cmFuc2Zvcm06cm90YXRlWSgtOTBkZWcpfS5jdWJlIC5iZXNwb2tlLWFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVkoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKX0uemVsZGEtdHJhbnNpdGlvbntvdmVyZmxvdzpoaWRkZW59LnplbGRhLXRyYW5zaXRpb24gLmJlc3Bva2Utc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNpdGlvbjphbGwgLjhzIGN1YmljLWJlemllciguNzgsLjAzLC4yMiwuNjgpfS56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLWJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLWFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfX1AbWVkaWEgc2NyZWVuey5iZXNwb2tlLWJ1bGxldHtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2V9LmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDBweCwwLDApO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5iZXNwb2tlLWJ1bGxldC1vZmYgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDstd2Via2l0LXRyYW5zZm9ybTppbml0aWFsO3RyYW5zZm9ybTppbml0aWFsfX1AbWVkaWEgc2NyZWVuey5iZXNwb2tlLXByb2dyZXNzLXBhcmVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6LjJ2d30uYmVzcG9rZS1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjp3aWR0aCAuNnMgZWFzZX0uYmVzcG9rZS1wcm9ncmVzcy1iYXI6YmVmb3JlLC5iZXNwb2tlLXByb2dyZXNzLWJhcjphZnRlcntjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6NTAlfS5iZXNwb2tlLXByb2dyZXNzLWJhcjpiZWZvcmV7YmFja2dyb3VuZDojYWVhZWY1fS5iZXNwb2tlLXByb2dyZXNzLWJhcjphZnRlcnt0b3A6NTAlO2JhY2tncm91bmQ6I2MyYzJmN319QG1lZGlhIHNjcmVlbnsuYmVzcG9rZS1vdmVydmlldyAuYmVzcG9rZS1wYXJlbnR7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsLTIwMDBweCk7b3BhY2l0eToxO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIpfS5iZXNwb2tlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlOmhvdmVye291dGxpbmUtY29sb3I6IzQ2ODJiNH0uYmVzcG9rZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFjdGl2ZXtvdXRsaW5lLWNvbG9yOiM0NjgyYjR9LmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1pbmFjdGl2ZS5iZXNwb2tlLWJlZm9yZTpub3QoLmJlc3Bva2UtYmVmb3JlLTEpOm5vdCguYmVzcG9rZS1iZWZvcmUtMiksLmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1pbmFjdGl2ZS5iZXNwb2tlLWFmdGVyOm5vdCguYmVzcG9rZS1hZnRlci0xKTpub3QoLmJlc3Bva2UtYWZ0ZXItMil7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDstd2Via2l0LXRyYW5zZm9ybTppbml0aWFsO3RyYW5zZm9ybTppbml0aWFsfS5iZXNwb2tlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXJ7ZGlzcGxheTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQxMjAuMDAwNDgwMDAxOTJweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MTIwLjAwMDQ4MDAwMTkycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZXtkaXNwbGF5Om5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQxMjAuMDAwNDgwMDAxOTJweCwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDEyMC4wMDA0ODAwMDE5MnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQxMjAuMDAwNDgwMDAxOTJweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MTIwLjAwMDQ4MDAwMTkycHgsMTAwJSwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00MTIwLjAwMDQ4MDAwMTkycHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQxMjAuMDAwNDgwMDAxOTJweCwxMDAlLC0yMDAwcHgpfS5iZXNwb2tlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg4MjQuMDAwMDk2MDAwMzg0cHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoODI0LjAwMDA5NjAwMDM4NHB4LDAsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMXtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtODI0LjAwMDA5NjAwMDM4NHB4LDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC04MjQuMDAwMDk2MDAwMzg0cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg4MjQuMDAwMDk2MDAwMzg0cHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoODI0LjAwMDA5NjAwMDM4NHB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0xe2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC04MjQuMDAwMDk2MDAwMzg0cHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTgyNC4wMDAwOTYwMDAzODRweCwxMDAlLC0yMDAwcHgpfS5iZXNwb2tlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMntkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxNjQ4LjAwMDE5MjAwMDc2OHB4LDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDE2NDguMDAwMTkyMDAwNzY4cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ye2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNjQ4LjAwMDE5MjAwMDc2OHB4LDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNjQ4LjAwMDE5MjAwMDc2OHB4LDAsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTY0OC4wMDAxOTIwMDA3NjhweCwxMDAlLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxNjQ4LjAwMDE5MjAwMDc2OHB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcuemVsZGEtdHJhbnNpdGlvbiAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ye2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNjQ4LjAwMDE5MjAwMDc2OHB4LDEwMCUsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNjQ4LjAwMDE5MjAwMDc2OHB4LDEwMCUsLTIwMDBweCl9LmJlc3Bva2Utb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0ze2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI0NzIuMDAwMjg4MDAxMTUycHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjQ3Mi4wMDAyODgwMDExNTJweCwwLC0yMDAwcHgpfS5iZXNwb2tlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItM3tkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNDcyLjAwMDI4ODAwMTE1MnB4LDEwMCUsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI0NzIuMDAwMjg4MDAxMTUycHgsMTAwJSwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI0NzIuMDAwMjg4MDAxMTUycHgsMTAwJSwtMjAwMHB4KX0uYmVzcG9rZS1vdmVydmlldy56ZWxkYS10cmFuc2l0aW9uIC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLC0yMDAwcHgpO2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH19QG1lZGlhIHNjcmVlbnsjYmVzcG9rZS1zZWFyY2h7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTtvcGFjaXR5OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEyOCwxMjgsMTI4LC4zKTt0cmFuc2l0aW9uOm9wYWNpdHkgMTAwbXMgZWFzZS1vdXR9I2Jlc3Bva2Utc2VhcmNoLmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZ3tvcGFjaXR5OjF9I2Jlc3Bva2Utc2VhcmNoLmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZz4jYmVzcG9rZS1zZWFyY2gtaW5wdXR7Ym90dG9tOjUlfSNiZXNwb2tlLXNlYXJjaC1pbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTtib3R0b206LTUlO3BvaW50ZXItZXZlbnRzOmFsbDt3aWR0aDoyMDBweDttYXJnaW4tbGVmdDotMTAwcHg7cGFkZGluZzo4cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2JvcmRlcjoxcHggc29saWQgc2lsdmVyO291dGxpbmU6bm9uZTtjb2xvcjpncmF5O2ZvbnQtc2l6ZTp4LWxhcmdlO2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuOSk7dHJhbnNpdGlvbjpib3R0b20gMTQwbXMgZWFzZS1vdXR9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjB9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdC1mb2N1c2Vke2JhY2tncm91bmQtY29sb3I6I2ZmYTUwMH0jYmVzcG9rZS1zZWFyY2guYmVzcG9rZS1zZWFyY2gtbm8tcmVzdWx0PiNiZXNwb2tlLXNlYXJjaC1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICM4YjAwMDA7Y29sb3I6IzhiMDAwMH0jYmVzcG9rZS1zZWFyY2gtcmVzdWx0cy1jb3VudHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MSU7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTMwcHg7d2lkdGg6NjBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6c21hbGxlcjtjb2xvcjojOGEyYmUyO2ZvbnQtd2VpZ2h0OjcwMH19QG1lZGlhIHByaW50eyp7YmFja2dyb3VuZDp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Y29sb3I6IzAwMCFpbXBvcnRhbnQ7dGV4dC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9aHRtbCxib2R5e292ZXJmbG93OnZpc2libGUhaW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudH1ib2R5e21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOi4xaW4haW1wb3J0YW50fWJvZHksY29kZXtsaW5lLWhlaWdodDoxZW0haW1wb3J0YW50fXVsLG9sLHByZSxjb2Rle3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9cHJlIGNvZGV7Ym9yZGVyOjFweCBzb2xpZCAjNjk2OTY5IWltcG9ydGFudDtwYWRkaW5nOjVweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czo0cHghaW1wb3J0YW50fUBwYWdle21hcmdpbjouNzlpbiFpbXBvcnRhbnR9LmJlc3Bva2Utc2xpZGV7Ym94LXNpemluZzpib3JkZXItYm94IWltcG9ydGFudDtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtmbG9hdDpsZWZ0IWltcG9ydGFudDtib3JkZXI6MnB4IHNvbGlkICMwMDAhaW1wb3J0YW50O3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudDttYXJnaW4tdG9wOjAhaW1wb3J0YW50O21hcmdpbi1sZWZ0OjAhaW1wb3J0YW50O3BhZ2UtYnJlYWstaW5zaWRlOmF2b2lkIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZT4qe3pvb206LjY1IWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZT4qICp7em9vbTouODUhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlPmgxOm9ubHktY2hpbGQsLmJlc3Bva2Utc2xpZGU+aDI6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oMzpvbmx5LWNoaWxkLC5iZXNwb2tlLXNsaWRlPmg0Om9ubHktY2hpbGQsLmJlc3Bva2Utc2xpZGU+aDU6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oNjpvbmx5LWNoaWxke21hcmdpbi10b3A6NGVtIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZSAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7b3BhY2l0eToxIWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZTpudGgtY2hpbGQoNm4pLC5iZXNwb2tlLXNsaWRlOm50aC1vZi10eXBlKDZuKXtwYWdlLWJyZWFrLWFmdGVyOmFsd2F5cyFpbXBvcnRhbnQ7LXdlYmtpdC1icmVhay1hZnRlcjpwYWdlIWltcG9ydGFudDstbW96LWJyZWFrLWFmdGVyOnBhZ2UhaW1wb3J0YW50O2JyZWFrLWFmdGVyOnBhZ2UhaW1wb3J0YW50fX1AbWVkaWEgcHJpbnQgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCl7LmJlc3Bva2Utc2xpZGV7d2lkdGg6Mi45MTk0NzI0NDMwMDAwMDFpbiFpbXBvcnRhbnQ7aGVpZ2h0OjIuMTg5NjA0MzMyMjUwMDAxaW4haW1wb3J0YW50O21hcmdpbi1yaWdodDouMzI0Mzg1ODI3aW4haW1wb3J0YW50O21hcmdpbi1ib3R0b206LjMyNDM4NTgyN2luIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZTpudGgtY2hpbGQoMm4pe21hcmdpbi1yaWdodDowIWltcG9ydGFudH0uYmVzcG9rZS1wYXJlbnR7d2lkdGg6Ni40ODc3MTY1NDAwMDAwMDFpbiFpbXBvcnRhbnR9PmltZ3ttYXgtd2lkdGg6Ni44NjI3ODYyaW4haW1wb3J0YW50fWltZ3ttYXgtd2lkdGg6NS4yNDgwMTI5NzY0NzA1ODlpbiFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSl7LmJlc3Bva2Utc2xpZGV7d2lkdGg6Mi45NzM4NzQwMmluIWltcG9ydGFudDtoZWlnaHQ6Mi4yMzA0MDU1MTVpbiFpbXBvcnRhbnQ7bWFyZ2luLXJpZ2h0Oi4yOTczODc0MDJpbiFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouMjk3Mzg3NDAyaW4haW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlOm50aC1jaGlsZCgzbil7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5iZXNwb2tlLXBhcmVudHt3aWR0aDo5LjkxMjkxMzRpbiFpbXBvcnRhbnR9PmltZ3ttYXgtd2lkdGg6NC41NzUxOTA4aW4haW1wb3J0YW50fWltZ3ttYXgtd2lkdGg6My40OTg2NzUzMTc2NDcwNTlpbiFpbXBvcnRhbnR9fVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRoZW1lLmNzcy5tYXAgKi9cIjtcclxuICBpbnNlcnRDc3MoY3NzLCB7IHByZXBlbmQ6IHRydWUgfSk7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XHJcbiAgICBjbGFzc2VzKCkoZGVjayk7XHJcbiAgfTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBhY3RpdmVCdWxsZXRJbmRleCxcblxuICAgICAgYnVsbGV0cyA9IGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihzbGlkZSkge1xuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogJ1tkYXRhLWJlc3Bva2UtYnVsbGV0XScpKSwgMCk7XG4gICAgICB9KSxcblxuICAgICAgbmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4ICsgMTtcblxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCgxKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4ICsgMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbbmV4dFNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQobmV4dFNsaWRlSW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBwcmV2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggLSAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KC0xKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4IC0gMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQocHJldlNsaWRlSW5kZXgsIGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmF0ZUJ1bGxldCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGJ1bGxldEluZGV4KSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICBhY3RpdmVCdWxsZXRJbmRleCA9IGJ1bGxldEluZGV4O1xuXG4gICAgICAgIGJ1bGxldHMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgcykge1xuICAgICAgICAgIHNsaWRlLmZvckVhY2goZnVuY3Rpb24oYnVsbGV0LCBiKSB7XG4gICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQnKTtcblxuICAgICAgICAgICAgaWYgKHMgPCBzbGlkZUluZGV4IHx8IHMgPT09IHNsaWRlSW5kZXggJiYgYiA8PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHMgPT09IHNsaWRlSW5kZXggJiYgYiA9PT0gYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gYnVsbGV0c1thY3RpdmVTbGlkZUluZGV4XVthY3RpdmVCdWxsZXRJbmRleCArIG9mZnNldF0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICBkZWNrLm9uKCduZXh0JywgbmV4dCk7XG4gICAgZGVjay5vbigncHJldicsIHByZXYpO1xuXG4gICAgZGVjay5vbignc2xpZGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBhY3RpdmF0ZUJ1bGxldChlLmluZGV4LCAwKTtcbiAgICB9KTtcblxuICAgIGFjdGl2YXRlQnVsbGV0KDAsIDApO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLScgKyBjbHMpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZVxuICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ2Jlc3Bva2UtJyArIGNscyArJyhcXFxcc3wkKScsICdnJyksICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfSxcblxuICAgICAgZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldLFxuICAgICAgICAgIG9mZnNldCA9IGluZGV4IC0gZGVjay5zbGlkZSgpLFxuICAgICAgICAgIG9mZnNldENsYXNzID0gb2Zmc2V0ID4gMCA/ICdhZnRlcicgOiAnYmVmb3JlJztcblxuICAgICAgICBbJ2JlZm9yZSgtXFxcXGQrKT8nLCAnYWZ0ZXIoLVxcXFxkKyk/JywgJ2FjdGl2ZScsICdpbmFjdGl2ZSddLm1hcChyZW1vdmVDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG5cbiAgICAgICAgaWYgKGVsICE9PSBhY3RpdmVTbGlkZSkge1xuICAgICAgICAgIFsnaW5hY3RpdmUnLCBvZmZzZXRDbGFzcywgb2Zmc2V0Q2xhc3MgKyAnLScgKyBNYXRoLmFicyhvZmZzZXQpXS5tYXAoYWRkQ2xhc3MuYmluZChudWxsLCBlbCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgYWRkQ2xhc3MoZGVjay5wYXJlbnQsICdwYXJlbnQnKTtcbiAgICBkZWNrLnNsaWRlcy5tYXAoZnVuY3Rpb24oZWwpIHsgYWRkQ2xhc3MoZWwsICdzbGlkZScpOyB9KTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgZGVjay5zbGlkZXMubWFwKGRlYWN0aXZhdGUpO1xuICAgICAgYWRkQ2xhc3MoZS5zbGlkZSwgJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZS5zbGlkZSwgJ2luYWN0aXZlJyk7XG4gICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9wdGlvbnMgIT09ICd2ZXJ0aWNhbCc7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMzQgfHwgLy8gUEFHRSBET1dOXG4gICAgICAgIChlLndoaWNoID09IDMyICYmICFlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSBXSVRIT1VUIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOSkgfHwgLy8gUklHSFRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSA0MCkgLy8gRE9XTlxuICAgICAgKSB7IGRlY2submV4dCgpOyB9XG5cbiAgICAgIGlmIChlLndoaWNoID09IDMzIHx8IC8vIFBBR0UgVVBcbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgKyBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzcpIHx8IC8vIExFRlRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOCkgLy8gVVBcbiAgICAgICkgeyBkZWNrLnByZXYoKTsgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlY2spIHtcbiAgICB2YXIgcHJvZ3Jlc3NQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9wID0gb3B0aW9ucyA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHByb2dyZXNzUGFyZW50LmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLXBhcmVudCc7XG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtYmFyJztcbiAgICBwcm9ncmVzc1BhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQYXJlbnQpO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZVtwcm9wXSA9IChlLmluZGV4ICogMTAwIC8gKGRlY2suc2xpZGVzLmxlbmd0aCAtIDEpKSArICclJztcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgcGFyZW50ID0gZGVjay5wYXJlbnQsXG4gICAgICBmaXJzdFNsaWRlID0gZGVjay5zbGlkZXNbMF0sXG4gICAgICBzbGlkZUhlaWdodCA9IGZpcnN0U2xpZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgc2xpZGVXaWR0aCA9IGZpcnN0U2xpZGUub2Zmc2V0V2lkdGgsXG4gICAgICB1c2Vab29tID0gb3B0aW9ucyA9PT0gJ3pvb20nIHx8ICgnem9vbScgaW4gcGFyZW50LnN0eWxlICYmIG9wdGlvbnMgIT09ICd0cmFuc2Zvcm0nKSxcblxuICAgICAgd3JhcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYmVzcG9rZS1zY2FsZS1wYXJlbnQnO1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICAgIH0sXG5cbiAgICAgIGVsZW1lbnRzID0gdXNlWm9vbSA/IGRlY2suc2xpZGVzIDogZGVjay5zbGlkZXMubWFwKHdyYXApLFxuXG4gICAgICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSAnTW96IFdlYmtpdCBPIG1zJy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJlZml4ZXMucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnRQcm9wZXJ0eSwgcHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgcHJvcGVydHkgaW4gcGFyZW50LnN0eWxlID8gcHJlZml4ICsgcHJvcGVydHkgOiBjdXJyZW50UHJvcGVydHk7XG4gICAgICAgICAgfSwgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KCdUcmFuc2Zvcm0nKSksXG5cbiAgICAgIHNjYWxlID0gdXNlWm9vbSA/XG4gICAgICAgIGZ1bmN0aW9uKHJhdGlvLCBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS56b29tID0gcmF0aW87XG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJ3NjYWxlKCcgKyByYXRpbyArICcpJztcbiAgICAgICAgfSxcblxuICAgICAgc2NhbGVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHhTY2FsZSA9IHBhcmVudC5vZmZzZXRXaWR0aCAvIHNsaWRlV2lkdGgsXG4gICAgICAgICAgeVNjYWxlID0gcGFyZW50Lm9mZnNldEhlaWdodCAvIHNsaWRlSGVpZ2h0O1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goc2NhbGUuYmluZChudWxsLCBNYXRoLm1pbih4U2NhbGUsIHlTY2FsZSkpKTtcbiAgICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVBbGwpO1xuICAgIHNjYWxlQWxsKCk7XG4gIH07XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBtb2RpZnlTdGF0ZSA9IGZ1bmN0aW9uKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgIHZhciBhdHRyID0gZXZlbnQuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2Utc3RhdGUnKTtcblxuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgYXR0ci5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3RbbWV0aG9kXShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIG1vZGlmeVN0YXRlLmJpbmQobnVsbCwgJ2FkZCcpKTtcbiAgICBkZWNrLm9uKCdkZWFjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAncmVtb3ZlJykpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBheGlzID0gb3B0aW9ucyA9PSAndmVydGljYWwnID8gJ1knIDogJ1gnLFxuICAgICAgc3RhcnRQb3NpdGlvbixcbiAgICAgIGRlbHRhO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXTtcbiAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbHRhID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gNTApIHtcbiAgICAgICAgZGVja1tkZWx0YSA+IDAgPyAncHJldicgOiAnbmV4dCddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwidmFyIGZyb20gPSBmdW5jdGlvbihzZWxlY3Rvck9yRWxlbWVudCwgcGx1Z2lucykge1xuICB2YXIgcGFyZW50ID0gc2VsZWN0b3JPckVsZW1lbnQubm9kZVR5cGUgPT09IDEgPyBzZWxlY3Rvck9yRWxlbWVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpLFxuICAgIHNsaWRlcyA9IFtdLmZpbHRlci5jYWxsKHBhcmVudC5jaGlsZHJlbiwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSAnU0NSSVBUJzsgfSksXG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbMF0sXG4gICAgbGlzdGVuZXJzID0ge30sXG5cbiAgICBhY3RpdmF0ZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoIXNsaWRlc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlKCdkZWFjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1tpbmRleF07XG4gICAgICBmaXJlKCdhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgIH0sXG5cbiAgICBzbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaXJlKCdzbGlkZScsIGNyZWF0ZUV2ZW50RGF0YShzbGlkZXNbaW5kZXhdLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoaW5kZXgsIGN1c3RvbURhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RlcCA9IGZ1bmN0aW9uKG9mZnNldCwgY3VzdG9tRGF0YSkge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG5cbiAgICAgIGZpcmUob2Zmc2V0ID4gMCA/ICduZXh0JyA6ICdwcmV2JywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoc2xpZGVJbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgfSxcblxuICAgIG9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IChsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNbZXZlbnROYW1lXS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXIgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihub3RDYW5jZWxsZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdENhbmNlbGxlZCAmJiBjYWxsYmFjayhldmVudERhdGEpICE9PSBmYWxzZTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUV2ZW50RGF0YSA9IGZ1bmN0aW9uKGVsLCBldmVudERhdGEpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGV2ZW50RGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50RGF0YS5pbmRleCA9IHNsaWRlcy5pbmRleE9mKGVsKTtcbiAgICAgIGV2ZW50RGF0YS5zbGlkZSA9IGVsO1xuICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcbiAgICB9LFxuXG4gICAgZGVjayA9IHtcbiAgICAgIG9uOiBvbixcbiAgICAgIGZpcmU6IGZpcmUsXG4gICAgICBzbGlkZTogc2xpZGUsXG4gICAgICBuZXh0OiBzdGVwLmJpbmQobnVsbCwgMSksXG4gICAgICBwcmV2OiBzdGVwLmJpbmQobnVsbCwgLTEpLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzbGlkZXM6IHNsaWRlc1xuICAgIH07XG5cbiAgKHBsdWdpbnMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgcGx1Z2luKGRlY2spO1xuICB9KTtcblxuICBhY3RpdmF0ZSgwKTtcblxuICByZXR1cm4gZGVjaztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmcm9tOiBmcm9tXG59O1xuIiwidmFyIGluc2VydGVkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcywgb3B0aW9ucykge1xuICAgIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm47XG4gICAgaW5zZXJ0ZWRbY3NzXSA9IHRydWU7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9XG4gICAgXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZShlbGVtLCBoZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcbiJdfQ==
