!function(e){function r(r){for(var o,u,i=r[0],c=r[1],a=r[2],s=0,p=[];s<i.length;s++)u=i[s],n[u]&&p.push(n[u][0]),n[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(f&&f(r);p.length;)p.shift()();return l.push.apply(l,a||[]),t()}function t(){for(var e,r=0;r<l.length;r++){for(var t=l[r],o=!0,i=1;i<t.length;i++){var c=t[i];0!==n[c]&&(o=!1)}o&&(l.splice(r--,1),e=u(u.s=t[0]))}return e}var o={},n={2:0},l=[];function u(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=o,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)u.d(t,o,function(r){return e[r]}.bind(null,o));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var a=0;a<i.length;a++)r(i[a]);var f=c;l.push([132,0]),t()}({132:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const o=t(128);o("#save").click(function(){var e=o("#color").val(),r=o("#like").prop("checked");chrome.storage.sync.set({favoriteColor:e,likesColor:r},()=>{var e=o("#status");e.text("Options saved."),setTimeout(function(){e.text("")},750)})}),o(function(){chrome.storage.sync.get({favoriteColor:"red",likesColor:!0},e=>{o("#color").val(e.favoriteColor),o("#like").prop("checked",e.likesColor)})})}});