"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=n(function(C,q){
var x=require('@stdlib/strided-base-dmskmap/dist'),l=require('@stdlib/math-base-special-abs2/dist');function R(e,r,a,s,i,t,u){return x(e,r,a,s,i,t,u,l)}q.exports=R
});var o=n(function(D,m){
var _=require('@stdlib/strided-base-dmskmap/dist').ndarray,E=require('@stdlib/math-base-special-abs2/dist');function O(e,r,a,s,i,t,u,y,f,j){return _(e,r,a,s,i,t,u,y,f,j,E)}m.exports=O
});var b=n(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=d(),h=o();g(c,"ndarray",h);p.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=b(),v,k=z(w(__dirname,"./native.js"));k instanceof Error?v=A:v=k;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
