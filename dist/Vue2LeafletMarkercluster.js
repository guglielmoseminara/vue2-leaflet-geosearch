!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet"),require("leaflet.markercluster")):"function"==typeof define&&define.amd?define(["leaflet","leaflet.markercluster"],t):"object"==typeof exports?exports.Vue2LeafletMarkercluster=t(require("leaflet"),require("leaflet.markercluster")):e.Vue2LeafletMarkercluster=t(e.leaflet,e["leaflet.markercluster"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null);e.exports=n.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r(5);var u={visible:{type:Boolean,custom:!0,default:!0}};t.default={props:u,mounted:function(){this.mapObject=o.default.markerClusterGroup(),this.$parent._isMounted&&this.deferredMountedTo(this.$parent.mapObject)},beforeDestroy:function(){this.setVisible(!1)},methods:{deferredMountedTo:function(e){this.parent=e;for(var t=this.mapObject,r=0;r<this.$children.length;r++)this.$children[r].deferredMountedTo(t);this.visible&&this.mapObject.addTo(e)},setVisible:function(e,t){e!==t&&this.mapObject&&(e?this.mapObject.addTo(this.parent):this.parent.removeLayer(this.mapObject))}}}},function(e,t){e.exports=function(e,t,r,n){var o,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,u=e.default);var s="function"==typeof u?u.options:u;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var f=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];f[e]=function(){return t}})}return{esModule:o,exports:u,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet.markercluster")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletMarkercluster.js.map