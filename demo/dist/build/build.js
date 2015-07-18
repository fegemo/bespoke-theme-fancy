(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  var css = "@import url(\"http://fonts.googleapis.com/css?family=Calligraffitti|Open+Sans:400italic,700italic,400,700\");html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media screen{.bespoke-parent{background-color:#d7d7fa}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:800px;height:600px;position:absolute;overflow:hidden;top:50%;left:50%;margin-left:-400px;margin-top:-300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-bullet{opacity:1;-webkit-transform:tranlsate3d(0,0,0);-ms-transform:tranlsate3d(0,0,0);transform:tranlsate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.emphatic{background:#a6b0ff;color:#fff}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#431380}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.2vw}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .6s ease;transition:width .6s ease}.bespoke-progress-bar:before,.bespoke-progress-bar:after{content:\"\";position:absolute;display:block;width:100%;height:50%}.bespoke-progress-bar:before{background:#aeaef5}.bespoke-progress-bar:after{top:50%;background:#c2c2f7}h1{color:#6e8ae4;font-family:'Calligraffitti',cursive;font-size:3em}h2{font-size:2em}h3{font-size:1.5em}h4,h5,h6{font-size:1em}h2,h3,h4,h5,h6{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}h1,h2,h3,h4,h5,h6{font-weight:400}p,li{font-size:24px;line-height:1.5em}strong{font-weight:400;color:#fc49d8}article{font-family:'Open Sans',Fuse-Segoe-UI,helvetica,arial,sans-serif}a{color:#b66c7e;text-decoration:none}a:hover{text-decoration:underline}pre,code{font-size:20px}.slide{overflow:hidden}.slide .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .8s ease;transition:all .8s ease}.slide .bespoke-before{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.slide .bespoke-after{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.slide .bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .8s ease;transition:opacity .8s ease}.cube{overflow:hidden}.cube,.cube .bespoke-scale-parent{-webkit-perspective:800px;perspective:800px}.cube .bespoke-slide{-webkit-transform-origin:50% 50% -400px;-ms-transform-origin:50% 50% -400px;transform-origin:50% 50% -400px;-webkit-transition:all .8s ease;transition:all .8s ease;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.cube .bespoke-inactive{opacity:0}.cube .bespoke-before{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)}.cube .bespoke-after{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@media screen{.bespoke-overview .bespoke-parent{display:inline-block}.bespoke-overview .bespoke-slide{position:absolute;-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);opacity:1;border:4px solid silver;background-color:rgba(255,255,255,.2)}.bespoke-overview .bespoke-slide:hover{border-color:#4682b4}.bespoke-overview .bespoke-slide.bespoke-active{border-color:#4682b4}.bespoke-overview .bespoke-slide.bespoke-inactive.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2),.bespoke-overview .bespoke-slide.bespoke-inactive.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;-ms-transform:initial;transform:initial}.bespoke-overview .bespoke-slide.bespoke-after-1{-webkit-transform:translate3d(824.000096000384px,0,-2000px);transform:translate3d(824.000096000384px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-824.000096000384px,0,-2000px);transform:translate3d(-824.000096000384px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-2{-webkit-transform:translate3d(1648.000192000768px,0,-2000px);transform:translate3d(1648.000192000768px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-1648.000192000768px,0,-2000px);transform:translate3d(-1648.000192000768px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-3{-webkit-transform:translate3d(2472.000288001152px,0,-2000px);transform:translate3d(2472.000288001152px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-2472.000288001152px,0,-2000px);transform:translate3d(-2472.000288001152px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-4{-webkit-transform:translate3d(3296.000384001536px,0,-2000px);transform:translate3d(3296.000384001536px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-3296.000384001536px,0,-2000px);transform:translate3d(-3296.000384001536px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-5{-webkit-transform:translate3d(4120.00048000192px,0,-2000px);transform:translate3d(4120.00048000192px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-4120.00048000192px,0,-2000px);transform:translate3d(-4120.00048000192px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-6{-webkit-transform:translate3d(4944.000576002304px,0,-2000px);transform:translate3d(4944.000576002304px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-6{-webkit-transform:translate3d(-4944.000576002304px,0,-2000px);transform:translate3d(-4944.000576002304px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-7{-webkit-transform:translate3d(5768.000672002689px,0,-2000px);transform:translate3d(5768.000672002689px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-7{-webkit-transform:translate3d(-5768.000672002689px,0,-2000px);transform:translate3d(-5768.000672002689px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-8{-webkit-transform:translate3d(6592.000768003072px,0,-2000px);transform:translate3d(6592.000768003072px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-8{-webkit-transform:translate3d(-6592.000768003072px,0,-2000px);transform:translate3d(-6592.000768003072px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-9{-webkit-transform:translate3d(7416.000864003456px,0,-2000px);transform:translate3d(7416.000864003456px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-9{-webkit-transform:translate3d(-7416.000864003456px,0,-2000px);transform:translate3d(-7416.000864003456px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-10{-webkit-transform:translate3d(8240.00096000384px,0,-2000px);transform:translate3d(8240.00096000384px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-10{-webkit-transform:translate3d(-8240.00096000384px,0,-2000px);transform:translate3d(-8240.00096000384px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-11{-webkit-transform:translate3d(9064.001056004225px,0,-2000px);transform:translate3d(9064.001056004225px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-11{-webkit-transform:translate3d(-9064.001056004225px,0,-2000px);transform:translate3d(-9064.001056004225px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-12{-webkit-transform:translate3d(9888.001152004608px,0,-2000px);transform:translate3d(9888.001152004608px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-12{-webkit-transform:translate3d(-9888.001152004608px,0,-2000px);transform:translate3d(-9888.001152004608px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-13{-webkit-transform:translate3d(10712.001248004992px,0,-2000px);transform:translate3d(10712.001248004992px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-13{-webkit-transform:translate3d(-10712.001248004992px,0,-2000px);transform:translate3d(-10712.001248004992px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-14{-webkit-transform:translate3d(11536.001344005377px,0,-2000px);transform:translate3d(11536.001344005377px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-14{-webkit-transform:translate3d(-11536.001344005377px,0,-2000px);transform:translate3d(-11536.001344005377px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-15{-webkit-transform:translate3d(12360.00144000576px,0,-2000px);transform:translate3d(12360.00144000576px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-15{-webkit-transform:translate3d(-12360.00144000576px,0,-2000px);transform:translate3d(-12360.00144000576px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-16{-webkit-transform:translate3d(13184.001536006144px,0,-2000px);transform:translate3d(13184.001536006144px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-16{-webkit-transform:translate3d(-13184.001536006144px,0,-2000px);transform:translate3d(-13184.001536006144px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-17{-webkit-transform:translate3d(14008.001632006528px,0,-2000px);transform:translate3d(14008.001632006528px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-17{-webkit-transform:translate3d(-14008.001632006528px,0,-2000px);transform:translate3d(-14008.001632006528px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-18{-webkit-transform:translate3d(14832.001728006911px,0,-2000px);transform:translate3d(14832.001728006911px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-18{-webkit-transform:translate3d(-14832.001728006911px,0,-2000px);transform:translate3d(-14832.001728006911px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-19{-webkit-transform:translate3d(15656.001824007297px,0,-2000px);transform:translate3d(15656.001824007297px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-19{-webkit-transform:translate3d(-15656.001824007297px,0,-2000px);transform:translate3d(-15656.001824007297px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-20{-webkit-transform:translate3d(16480.00192000768px,0,-2000px);transform:translate3d(16480.00192000768px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-20{-webkit-transform:translate3d(-16480.00192000768px,0,-2000px);transform:translate3d(-16480.00192000768px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-21{-webkit-transform:translate3d(17304.002016008064px,0,-2000px);transform:translate3d(17304.002016008064px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-21{-webkit-transform:translate3d(-17304.002016008064px,0,-2000px);transform:translate3d(-17304.002016008064px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-22{-webkit-transform:translate3d(18128.00211200845px,0,-2000px);transform:translate3d(18128.00211200845px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-22{-webkit-transform:translate3d(-18128.00211200845px,0,-2000px);transform:translate3d(-18128.00211200845px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-23{-webkit-transform:translate3d(18952.00220800883px,0,-2000px);transform:translate3d(18952.00220800883px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-23{-webkit-transform:translate3d(-18952.00220800883px,0,-2000px);transform:translate3d(-18952.00220800883px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-24{-webkit-transform:translate3d(19776.002304009216px,0,-2000px);transform:translate3d(19776.002304009216px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-24{-webkit-transform:translate3d(-19776.002304009216px,0,-2000px);transform:translate3d(-19776.002304009216px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-25{-webkit-transform:translate3d(20600.002400009602px,0,-2000px);transform:translate3d(20600.002400009602px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-25{-webkit-transform:translate3d(-20600.002400009602px,0,-2000px);transform:translate3d(-20600.002400009602px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-26{-webkit-transform:translate3d(21424.002496009984px,0,-2000px);transform:translate3d(21424.002496009984px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-26{-webkit-transform:translate3d(-21424.002496009984px,0,-2000px);transform:translate3d(-21424.002496009984px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-27{-webkit-transform:translate3d(22248.00259201037px,0,-2000px);transform:translate3d(22248.00259201037px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-27{-webkit-transform:translate3d(-22248.00259201037px,0,-2000px);transform:translate3d(-22248.00259201037px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-28{-webkit-transform:translate3d(23072.002688010754px,0,-2000px);transform:translate3d(23072.002688010754px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-28{-webkit-transform:translate3d(-23072.002688010754px,0,-2000px);transform:translate3d(-23072.002688010754px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-29{-webkit-transform:translate3d(23896.002784011136px,0,-2000px);transform:translate3d(23896.002784011136px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-29{-webkit-transform:translate3d(-23896.002784011136px,0,-2000px);transform:translate3d(-23896.002784011136px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-30{-webkit-transform:translate3d(24720.00288001152px,0,-2000px);transform:translate3d(24720.00288001152px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-30{-webkit-transform:translate3d(-24720.00288001152px,0,-2000px);transform:translate3d(-24720.00288001152px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-31{-webkit-transform:translate3d(25544.002976011903px,0,-2000px);transform:translate3d(25544.002976011903px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-31{-webkit-transform:translate3d(-25544.002976011903px,0,-2000px);transform:translate3d(-25544.002976011903px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-32{-webkit-transform:translate3d(26368.00307201229px,0,-2000px);transform:translate3d(26368.00307201229px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-32{-webkit-transform:translate3d(-26368.00307201229px,0,-2000px);transform:translate3d(-26368.00307201229px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-33{-webkit-transform:translate3d(27192.003168012674px,0,-2000px);transform:translate3d(27192.003168012674px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-33{-webkit-transform:translate3d(-27192.003168012674px,0,-2000px);transform:translate3d(-27192.003168012674px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-34{-webkit-transform:translate3d(28016.003264013056px,0,-2000px);transform:translate3d(28016.003264013056px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-34{-webkit-transform:translate3d(-28016.003264013056px,0,-2000px);transform:translate3d(-28016.003264013056px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-35{-webkit-transform:translate3d(28840.00336001344px,0,-2000px);transform:translate3d(28840.00336001344px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-35{-webkit-transform:translate3d(-28840.00336001344px,0,-2000px);transform:translate3d(-28840.00336001344px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-36{-webkit-transform:translate3d(29664.003456013823px,0,-2000px);transform:translate3d(29664.003456013823px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-36{-webkit-transform:translate3d(-29664.003456013823px,0,-2000px);transform:translate3d(-29664.003456013823px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-37{-webkit-transform:translate3d(30488.00355201421px,0,-2000px);transform:translate3d(30488.00355201421px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-37{-webkit-transform:translate3d(-30488.00355201421px,0,-2000px);transform:translate3d(-30488.00355201421px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-38{-webkit-transform:translate3d(31312.003648014594px,0,-2000px);transform:translate3d(31312.003648014594px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-38{-webkit-transform:translate3d(-31312.003648014594px,0,-2000px);transform:translate3d(-31312.003648014594px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-39{-webkit-transform:translate3d(32136.003744014975px,0,-2000px);transform:translate3d(32136.003744014975px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-39{-webkit-transform:translate3d(-32136.003744014975px,0,-2000px);transform:translate3d(-32136.003744014975px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-40{-webkit-transform:translate3d(32960.00384001536px,0,-2000px);transform:translate3d(32960.00384001536px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-40{-webkit-transform:translate3d(-32960.00384001536px,0,-2000px);transform:translate3d(-32960.00384001536px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-41{-webkit-transform:translate3d(33784.003936015746px,0,-2000px);transform:translate3d(33784.003936015746px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-41{-webkit-transform:translate3d(-33784.003936015746px,0,-2000px);transform:translate3d(-33784.003936015746px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-42{-webkit-transform:translate3d(34608.00403201613px,0,-2000px);transform:translate3d(34608.00403201613px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-42{-webkit-transform:translate3d(-34608.00403201613px,0,-2000px);transform:translate3d(-34608.00403201613px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-43{-webkit-transform:translate3d(35432.00412801651px,0,-2000px);transform:translate3d(35432.00412801651px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-43{-webkit-transform:translate3d(-35432.00412801651px,0,-2000px);transform:translate3d(-35432.00412801651px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-44{-webkit-transform:translate3d(36256.0042240169px,0,-2000px);transform:translate3d(36256.0042240169px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-44{-webkit-transform:translate3d(-36256.0042240169px,0,-2000px);transform:translate3d(-36256.0042240169px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-45{-webkit-transform:translate3d(37080.00432001728px,0,-2000px);transform:translate3d(37080.00432001728px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-45{-webkit-transform:translate3d(-37080.00432001728px,0,-2000px);transform:translate3d(-37080.00432001728px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-46{-webkit-transform:translate3d(37904.00441601766px,0,-2000px);transform:translate3d(37904.00441601766px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-46{-webkit-transform:translate3d(-37904.00441601766px,0,-2000px);transform:translate3d(-37904.00441601766px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-47{-webkit-transform:translate3d(38728.00451201805px,0,-2000px);transform:translate3d(38728.00451201805px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-47{-webkit-transform:translate3d(-38728.00451201805px,0,-2000px);transform:translate3d(-38728.00451201805px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-48{-webkit-transform:translate3d(39552.00460801843px,0,-2000px);transform:translate3d(39552.00460801843px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-48{-webkit-transform:translate3d(-39552.00460801843px,0,-2000px);transform:translate3d(-39552.00460801843px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-49{-webkit-transform:translate3d(40376.004704018815px,0,-2000px);transform:translate3d(40376.004704018815px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-49{-webkit-transform:translate3d(-40376.004704018815px,0,-2000px);transform:translate3d(-40376.004704018815px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-50{-webkit-transform:translate3d(41200.004800019204px,0,-2000px);transform:translate3d(41200.004800019204px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-50{-webkit-transform:translate3d(-41200.004800019204px,0,-2000px);transform:translate3d(-41200.004800019204px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-51{-webkit-transform:translate3d(42024.004896019585px,0,-2000px);transform:translate3d(42024.004896019585px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-51{-webkit-transform:translate3d(-42024.004896019585px,0,-2000px);transform:translate3d(-42024.004896019585px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-52{-webkit-transform:translate3d(42848.00499201997px,0,-2000px);transform:translate3d(42848.00499201997px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-52{-webkit-transform:translate3d(-42848.00499201997px,0,-2000px);transform:translate3d(-42848.00499201997px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-53{-webkit-transform:translate3d(43672.005088020356px,0,-2000px);transform:translate3d(43672.005088020356px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-53{-webkit-transform:translate3d(-43672.005088020356px,0,-2000px);transform:translate3d(-43672.005088020356px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-54{-webkit-transform:translate3d(44496.00518402074px,0,-2000px);transform:translate3d(44496.00518402074px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-54{-webkit-transform:translate3d(-44496.00518402074px,0,-2000px);transform:translate3d(-44496.00518402074px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-55{-webkit-transform:translate3d(45320.00528002112px,0,-2000px);transform:translate3d(45320.00528002112px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-55{-webkit-transform:translate3d(-45320.00528002112px,0,-2000px);transform:translate3d(-45320.00528002112px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-56{-webkit-transform:translate3d(46144.00537602151px,0,-2000px);transform:translate3d(46144.00537602151px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-56{-webkit-transform:translate3d(-46144.00537602151px,0,-2000px);transform:translate3d(-46144.00537602151px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-57{-webkit-transform:translate3d(46968.00547202189px,0,-2000px);transform:translate3d(46968.00547202189px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-57{-webkit-transform:translate3d(-46968.00547202189px,0,-2000px);transform:translate3d(-46968.00547202189px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-58{-webkit-transform:translate3d(47792.00556802227px,0,-2000px);transform:translate3d(47792.00556802227px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-58{-webkit-transform:translate3d(-47792.00556802227px,0,-2000px);transform:translate3d(-47792.00556802227px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-59{-webkit-transform:translate3d(48616.005664022654px,0,-2000px);transform:translate3d(48616.005664022654px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-59{-webkit-transform:translate3d(-48616.005664022654px,0,-2000px);transform:translate3d(-48616.005664022654px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-60{-webkit-transform:translate3d(49440.00576002304px,0,-2000px);transform:translate3d(49440.00576002304px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-60{-webkit-transform:translate3d(-49440.00576002304px,0,-2000px);transform:translate3d(-49440.00576002304px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-61{-webkit-transform:translate3d(50264.005856023425px,0,-2000px);transform:translate3d(50264.005856023425px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-61{-webkit-transform:translate3d(-50264.005856023425px,0,-2000px);transform:translate3d(-50264.005856023425px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-62{-webkit-transform:translate3d(51088.00595202381px,0,-2000px);transform:translate3d(51088.00595202381px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-62{-webkit-transform:translate3d(-51088.00595202381px,0,-2000px);transform:translate3d(-51088.00595202381px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-63{-webkit-transform:translate3d(51912.006048024195px,0,-2000px);transform:translate3d(51912.006048024195px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-63{-webkit-transform:translate3d(-51912.006048024195px,0,-2000px);transform:translate3d(-51912.006048024195px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-64{-webkit-transform:translate3d(52736.00614402458px,0,-2000px);transform:translate3d(52736.00614402458px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-64{-webkit-transform:translate3d(-52736.00614402458px,0,-2000px);transform:translate3d(-52736.00614402458px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-65{-webkit-transform:translate3d(53560.00624002496px,0,-2000px);transform:translate3d(53560.00624002496px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-65{-webkit-transform:translate3d(-53560.00624002496px,0,-2000px);transform:translate3d(-53560.00624002496px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-66{-webkit-transform:translate3d(54384.00633602535px,0,-2000px);transform:translate3d(54384.00633602535px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-66{-webkit-transform:translate3d(-54384.00633602535px,0,-2000px);transform:translate3d(-54384.00633602535px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-67{-webkit-transform:translate3d(55208.00643202573px,0,-2000px);transform:translate3d(55208.00643202573px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-67{-webkit-transform:translate3d(-55208.00643202573px,0,-2000px);transform:translate3d(-55208.00643202573px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-68{-webkit-transform:translate3d(56032.00652802611px,0,-2000px);transform:translate3d(56032.00652802611px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-68{-webkit-transform:translate3d(-56032.00652802611px,0,-2000px);transform:translate3d(-56032.00652802611px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-69{-webkit-transform:translate3d(56856.0066240265px,0,-2000px);transform:translate3d(56856.0066240265px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-69{-webkit-transform:translate3d(-56856.0066240265px,0,-2000px);transform:translate3d(-56856.0066240265px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-70{-webkit-transform:translate3d(57680.00672002688px,0,-2000px);transform:translate3d(57680.00672002688px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-70{-webkit-transform:translate3d(-57680.00672002688px,0,-2000px);transform:translate3d(-57680.00672002688px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-71{-webkit-transform:translate3d(58504.006816027264px,0,-2000px);transform:translate3d(58504.006816027264px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-71{-webkit-transform:translate3d(-58504.006816027264px,0,-2000px);transform:translate3d(-58504.006816027264px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-72{-webkit-transform:translate3d(59328.006912027646px,0,-2000px);transform:translate3d(59328.006912027646px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-72{-webkit-transform:translate3d(-59328.006912027646px,0,-2000px);transform:translate3d(-59328.006912027646px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-73{-webkit-transform:translate3d(60152.007008028035px,0,-2000px);transform:translate3d(60152.007008028035px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-73{-webkit-transform:translate3d(-60152.007008028035px,0,-2000px);transform:translate3d(-60152.007008028035px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-74{-webkit-transform:translate3d(60976.00710402842px,0,-2000px);transform:translate3d(60976.00710402842px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-74{-webkit-transform:translate3d(-60976.00710402842px,0,-2000px);transform:translate3d(-60976.00710402842px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-75{-webkit-transform:translate3d(61800.0072000288px,0,-2000px);transform:translate3d(61800.0072000288px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-75{-webkit-transform:translate3d(-61800.0072000288px,0,-2000px);transform:translate3d(-61800.0072000288px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-76{-webkit-transform:translate3d(62624.00729602919px,0,-2000px);transform:translate3d(62624.00729602919px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-76{-webkit-transform:translate3d(-62624.00729602919px,0,-2000px);transform:translate3d(-62624.00729602919px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-77{-webkit-transform:translate3d(63448.00739202957px,0,-2000px);transform:translate3d(63448.00739202957px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-77{-webkit-transform:translate3d(-63448.00739202957px,0,-2000px);transform:translate3d(-63448.00739202957px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-78{-webkit-transform:translate3d(64272.00748802995px,0,-2000px);transform:translate3d(64272.00748802995px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-78{-webkit-transform:translate3d(-64272.00748802995px,0,-2000px);transform:translate3d(-64272.00748802995px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-79{-webkit-transform:translate3d(65096.00758403034px,0,-2000px);transform:translate3d(65096.00758403034px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-79{-webkit-transform:translate3d(-65096.00758403034px,0,-2000px);transform:translate3d(-65096.00758403034px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-after-80{-webkit-transform:translate3d(65920.00768003071px,0,-2000px);transform:translate3d(65920.00768003071px,0,-2000px)}.bespoke-overview .bespoke-slide.bespoke-before-80{-webkit-transform:translate3d(-65920.00768003071px,0,-2000px);transform:translate3d(-65920.00768003071px,0,-2000px)}}@media print{*{background:transparent!important;color:#000!important;text-shadow:none!important}html,body{overflow:visible!important;height:auto!important}body{margin:0!important;padding:.1in!important}body,code{line-height:1em!important}ul,ol,pre,code{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;-ms-transform:none!important;transform:none!important;-webkit-transition:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-break-after:page!important;-moz-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}>img{max-width:6.8627862in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}>img{max-width:4.5751908in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */";
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
        e.which == 32 || // SPACE
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
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