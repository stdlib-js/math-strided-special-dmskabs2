// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};function c(e,t,r){f(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(e,t,r,n,o,a,i,u){var l,f,c,_;if(e<=0)return a;for(l=r<0?(1-e)*r:0,f=o<0?(1-e)*o:0,c=i<0?(1-e)*i:0,_=0;_<e;_++)0===n[f]&&(a[c]=u(t[l])),l+=r,f+=o,c+=i;return a}function p(e,t,r,n,o,a,i,u,l,f,c){var _,p,d,s;if(e<=0)return u;for(_=n,p=i,d=f,s=0;s<e;s++)0===o[p]&&(u[d]=c(t[_])),_+=r,p+=a,d+=l;return u}function d(e){return e*e}function s(e,t,r,n,o,a,i){return _(e,t,r,n,o,a,i,d)}function y(e,t,r,n,o,a,i,u,l,f){return p(e,t,r,n,o,a,i,u,l,f,d)}c(_,"ndarray",p),c(s,"ndarray",y),e.default=s,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dmskabs2={});
//# sourceMappingURL=browser.js.map
