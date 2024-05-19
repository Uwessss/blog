/* fisker-blog v1.0.0 | (c) 2024 fisker Cheung | MIT License */
"use strict";(function(){var a=Function("return this")(),b={api:"//api.github.com",accessTokens:[["5","a41e75c8b2","2c70d70b08ae21","5cd774758e3b8b0"]],cache:{index:5e3,article:6e4},name:"fisker's blog",owner:"fisker",repo:"blog",pageSize:30,require:{paths:{marked:"//cdn.bootcss.com/marked/0.7.0/marked.min","highlight-js":"//cdn.bootcss.com/highlight.js/9.15.8/highlight.min","es6-promise":"//cdn.bootcss.com/es6-promise/4.1.1/es6-promise.min",localforage:"//cdn.bootcss.com/localforage/1.7.3/localforage.min"}}},c=a.require;c.config(b.require);var d=a.Promise;(function(a){function b(){a(function(a){return new d(function(b){c([a],function(a){b(a)})})})}d?b():c(["es6-promise"],function(a){d=a.Promise,b()})})(function(c){var e=a.document,f=function(){var b=a._||(a._={});b.now=Date.now||function(){return+new Date},b.require=c,b.Promise=d;var e=Object.prototype.toString;b.type=function(a){return e.call(a).slice(7,-1)};var f=Array.prototype.slice;b.toArray=Array.from||function(a){return f.call(a)},b.isArray=Array.isArray||function(a){return"Array"===b.type(a)},b.isArrayLike=function(a){return b.isArray(a)||a&&"Number"===b.type(a.length)&&parseInt(a.length,10)===a.length};var g=Array.prototype.forEach||function(a){for(var b=0;b<this.length;b+=1)a.call(this,this[b],b,this)},h=function(a,b){return"undefined"!=typeof a&&null!==a&&Object.prototype.hasOwnProperty.call(a,b)},i=function(a,b){for(var c in a)h(a,c)&&b.call(a,a[c],c,a)};b.forIn=i,b.forEach=function(a,c){(b.isArrayLike(a)?g:i).call(a,c)};var j=Array.prototype.map||function(a){for(var b=[],c=0;c<this.length;c+=1)b[c]=a.call(this,this[c],c,this);return b};b.map=function(a,b){return j.call(a,b)};var k=Array.prototype.filter||function(a){for(var b,c=[],d=0;d<this.length;d+=1)b=a.call(this,this[d],d,this),b&&c.push(this[d]);return c};b.filter=function(a,b){return k.call(a,b)},b.assign=Object.assign||function(a){return b.forEach(f.call(arguments,1),function(c){b.forEach(c,function(b,c){a[c]=b})}),a},b.hash=function(){return{parse:function(a){a=a.slice(2);for(var b=a?a.split("/"):[],c={},d=0;d<b.length;d+=2)c[decodeURIComponent(b[d])]=decodeURIComponent(b[d+1]||"");return c},build:function(a){var b=[];return i(a,function(a,c){b.push("".concat(encodeURIComponent(c),"/").concat(encodeURIComponent(a)))}),"#/".concat(b.sort().join("/"))}}}(),b.search=function(){return{build:function(a){var b=[];return i(a,function(a,c){b.push("".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(a)))}),b.join("&")}}}(),b.localforage=function(){return{setItem:function(a,b){return c("localforage").then(function(c){return c.setItem(a,b)})},getItem:function(a){return c("localforage").then(function(b){return b.getItem(a)})}}}(),b.markdown=function(a,b){return d.all([c("marked"),c("highlight-js")]).then(function(c){var d=c[0],e=c[1];return d.setOptions({highlight:function(a,b){return b&&e.getLanguage(b)?e.highlight(b,a).value:e.highlightAuto(a).value}}),d(a,b)})};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},m=/["&'<>`]/g;return b.escape=function(a){return(a+"").replace(m,function(a){return l[a]})},b}(),g=Function("config","return (function(){\n  var undefined;\n\n  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n  var root = freeGlobal || freeSelf || Function('return this')();\n\n  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n  var _ = root._ || {};\n\n  /*----------------------------------------------------------------------------*/\n\n  var templates = {\n    'article': {},\n    'index': {}\n  };\n\n  templates['article'] =   function(obj) {\n    obj || (obj = {});\n    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, '') }\n    with (obj) {\n    __p += '<article class=\"article\"><h1 class=\"article__title\">' +\n    __e( data.title ) +\n    '</h1><header class=\"article__author\"><!-- <img class=\"article__author-avatar\" src=\"' +\n    ((__t = ( data.user.avatar_url + '&s=40' )) == null ? '' : __t) +\n    '\"> --><div>' +\n    __e( data.created_at ) +\n    '</div></header><hr><div class=\"markdown-body\">' +\n    ((__t = ( data.html )) == null ? '' : __t) +\n    '</div><footer>';\n     data.labels.forEach(function(label) {\n    __p += '<a href=\"' +\n    ((__t = ( _.hash.build({label: label.name}) )) == null ? '' : __t) +\n    '\" style=\"background:#' +\n    ((__t = ( label.color)) == null ? '' : __t) +\n    '\">' +\n    __e( label.name) +\n    '</a>';\n     });\n    __p += '</footer></article>';\n\n    }\n    return __p\n  };\n\n  templates['index'] =   function(obj) {\n    obj || (obj = {});\n    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;\n    function print() { __p += __j.call(arguments, '') }\n    with (obj) {\n    __p += '<h1>' +\n    __e( config.name ) +\n    '</h1><hr><ul class=\"list\">';\n     data.forEach(function(article) {\n    __p += '<li class=\"list__item\"><a class=\"list__title\" href=\"' +\n    __e( _.hash.build({id: article.number}) ) +\n    '\">' +\n    __e( article.title ) +\n    '</a><div class=\"list__meta\"> #' +\n    __e( article.number ) +\n    ' posted at <time class=\"list__time\" datetime=\"' +\n    __e( article.created_at ) +\n    '\">' +\n    __e( article.created_at ) +\n    '</time></div></li>';\n     }) ;\n    __p += '</ul>';\n     if (meta.Link) {\n    __p += '<hr><nav class=\"pagination\">';\n\n          meta.Link.forEach(function(link) {\n          var pageIndex = link[0].match(/[?&]page=(\\d+)/)[1]\n    __p += '<a href=\"' +\n    __e( _.hash.build({page: pageIndex}) ) +\n    '\" title=\"' +\n    __e( link[1].rel ) +\n    '\">' +\n    __e( link[1].rel ) +\n    '</a>';\n     }) ;\n    __p += '</nav>';\n     }\n\n    }\n    return __p\n  };\n;return templates})()")(b),h=function(){function a(a){return{token:a,remaining:a?5000:60,reset:0}}function c(){return(Math.random()*f.now()).toString(16).replace(".","").slice(0,6)}function g(a,b,g){function i(){l.removeChild(k),window[j]=null}g=g||{};var j="jsonp_".concat(c()),k=e.createElement("script");return b=f.assign({},b,{callback:j}),g.token&&(b.access_token=g.token),k.src="".concat(o+a,"?").concat(f.search.build(b)),l.appendChild(k),new d(function(a,b){window[j]=function(b){a(b),i()},k.onerror=function(a){b(a),i()}}).then(function(a){return h(a,g)})}function h(a,b){if(!a||!a.data)return d.reject(new Error("no data found."));if(a.data.message)return d.reject(a.data.message);var c=a.meta;if(c){var e=c["X-RateLimit-Remaining"],f=c["X-RateLimit-Reset"];e&&(b.remaining=parseInt(e,10)),f&&(b.reset=1e3*parseInt(e,10))}return a}function i(a){return!a.remaining&&2000000<f.now()-m.rest&&(a.remaining=5000),a}function j(){return f.forEach(n,i),f.find(n,function(a){return a.remaining})}function k(a,b){var c=j();return c?g(a,b,c):d.reject(new Error("no token"))}var l=e.head||e.getElementsByTagName("head")[0],m=a(""),n=f.map(b.accessTokens,function(b){return f.isArray(b)&&(b=b.join("")),a(b)}),o=function(){var a=[b.api];return a=b.repoId?a.concat(["repositories",b.repoId]):a.concat(["repos",b.owner,b.repo]),a.push("issues"),a.join("/")}();return{get:function c(a,b){return i(m),m.remaining?g(a,b,m)["catch"](function(){return k(a,b)}):k(a,b)}}}(),i=function(){function a(a){return l?f.localforage.getItem("index").then(function(c){if(c&&c.pageSize===b.pageSize){var d=c.pages[a-1];return d&&d.time&&!(f.now()-d.time>l)?d:void 0}}):void 0}function c(a){return h.get("",{page:a,per_page:b.pageSize,state:"open",creator:b.owner}).then(function(b){return e(b,a),b})}function e(a,c){return j.storage({data:a.data}),l?f.localforage.getItem("index").then(function(d){return d&&d.pageSize===b.pageSize||(d={pages:[],pageSize:b.pageSize}),d.pages[c-1]={meta:{Link:a.meta.Link,ETag:a.meta.ETag},time:f.now(),data:[]},d.pages[c-1].data=a.data.map(function(a){return{created_at:a.created_at,title:a.title,number:a.number}}),d.time=f.now(),d}).then(function(a){return f.localforage.setItem("index",a)}).then(function(){return a}):a}function i(b){return b=parseInt(b,10)||1,1>b&&(b=1),d.resolve().then(function(){return a(b)}).then(function(a){return a||c(b)})}var k="index",l=1e3*(b.cache&&b.cache.index||0),m=g.index;return{get:i,storage:e,render:m}}(),j=function(){function a(a){return k?f.localforage.getItem("articles").then(function(b){var c=b&&b[a];return c&&c.time&&!(f.now()-c.time>k)?c:void 0}):void 0}function c(a){return h.get("/".concat(a)).then(function(a){return e(a),a})}function e(a){return k?f.localforage.getItem("articles").then(function(b){return b=b||{},a.data.forEach?a.data.forEach(function(c){b[c.number]={data:c,id:c.number,time:f.now(),meta:{ETag:a.meta&&a.meta.ETag}}}):b[a.data.number]={data:a.data,id:a.data.number,time:f.now(),meta:{ETag:a.meta&&a.meta.ETag}},b}).then(function(a){return f.localforage.setItem("articles",a)}).then(function(){return a}):a}function i(b){return b=+b,d.resolve().then(function(){return a(b)}).then(function(a){return a||c(b)}).then(function(a){return f.markdown(a.data.body).then(function(b){return a.data.html=b,a})})}var j="articles",k=1e3*(b.cache&&b.cache.article||0),l=g.article;return{get:i,storage:e,render:l}}(),k=function(){function a(a){m.innerHTML=a}function c(a){console.trace(a),m.innerHTML="error occured <button onclick=\"location.reload()\">retry</button>"}function d(a){return e.title=b.name,i.get(a).then(i.render)}function g(a){return j.get(a).then(function(a){return e.title=a.data.title,a}).then(j.render)}function h(){m.innerHTML="loading..."}function k(){var b=f.hash.parse(window.location.hash);h();var e;if(b.id)e=g(b.id);else{if(b.label)return alert("\u6682\u65F6\u4E0D\u652F\u6301\u6807\u7B7E"),void window.history.go(-1);e=d(b.page)}return e.then(a)["catch"](c)}function l(){k(),window.addEventListener("hashchange",k,!1)}var m=e.getElementById("js-app");return{run:l}}();// avoid use with in strict mode
/* global config: true, _: true */ /* global config: true, _: true, templates: true, github: true, article: true */ /* global _: true, config: true, templates: true, github: true */ /* global config: true, _: true, article: true, index: true */k.run()})})();