window.__require=function t(e,o,r){function n(l,c){if(!o[l]){if(!e[l]){var i=l.split("/");if(i=i[i.length-1],!e[i]){var u="function"==typeof __require&&__require;if(!c&&u)return u(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+l+"'")}l=i}var p=o[l]={exports:{}};e[l][0].call(p.exports,function(t){return n(e[l][1][t]||t)},p,p.exports,t,e,o,r)}return o[l].exports}for(var a="function"==typeof __require&&__require,l=0;l<r.length;l++)n(r[l]);return n}({balldrop:[function(t,e,o){"use strict";cc._RF.push(e,"f37e9xvwHhO/KpfA0BRayyd","balldrop");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),a=this&&this.__decorate||function(t,e,o,r){var n,a=arguments.length,l=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(l=(a<3?n(l):a>3?n(e,o,l):n(e,o))||l);return a>3&&l&&Object.defineProperty(e,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=cc._decorator,c=l.ccclass,i=l.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ball=null,e.targetPab=null,e.targetLayout=null,e.ballNode=null,e}return n(e,t),e.prototype.onLoad=function(){this.targetLayout.node.removeAllChildren();for(var t=0;t<100;t++){var e=cc.instantiate(this.targetPab);e.on(cc.Node.EventType.TOUCH_START,this.onTouch,this),e.setParent(this.targetLayout.node)}},e.prototype.onTouch=function(t){this.ballNode.removeAllChildren();var e=cc.instantiate(this.ball);e.setParent(this.ballNode),this.animateBall(e,t.target)},e.prototype.onRandom=function(){this.ballNode.removeAllChildren();for(var t=0;t<3;t++){var e=Math.floor(100*Math.random()),o=this.targetLayout.node.children[e],r=cc.instantiate(this.ball);r.setParent(this.ballNode),this.animateBall(r,o)}},e.prototype.animateBall=function(t,e){var o=1==Math.floor(2*Math.random())?-20:20,r=1==Math.floor(2*Math.random())?-8:8,n=1==Math.floor(2*Math.random())?-8:8;cc.tween(t).to(.25,{scale:.3,x:e.x/2,y:e.y/2}).to(.25,{scale:.4,x:e.x/2*1,y:e.y/2*1.5}).to(.25,{scale:.3,x:e.x/2*1.2,y:e.y/2*1.5}).to(.3,{scale:.35,x:e.x/2*1.6,y:e.y/2*1.5}).to(.35,{scale:.3,x:e.x/2*1.8,y:e.y/2*1.5}).to(.4,{scale:.3,x:e.x+o,y:e.y}).to(1.5,{scale:.3,x:e.x+r,y:e.y+n}).start()},a([i(cc.Prefab)],e.prototype,"ball",void 0),a([i(cc.Prefab)],e.prototype,"targetPab",void 0),a([i(cc.Layout)],e.prototype,"targetLayout",void 0),a([i(cc.Node)],e.prototype,"ballNode",void 0),a([c],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["balldrop"]);