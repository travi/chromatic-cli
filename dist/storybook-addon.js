"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"isChromatic",{enumerable:!0,get:function get(){return _isChromatic["default"]}});var _taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_utilDeprecate=_interopRequireDefault(require("util-deprecate")),_commonTags=require("common-tags"),_isChromatic=_interopRequireDefault(require("./isChromatic"));function _templateObject(){var a=(0,_taggedTemplateLiteral2["default"])(["\n    You're importing 'storybook-chromatic' in your config.js\n    This is no longer necessary!\n\n    If you're importing { isChromatic } in your stories, please change that to:\n    \"import isChromatic from \"storybook-chromatic/isChromatic\";\"\n  "]);return _templateObject=function(){return a},a}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var CHROMATIC_PARAMETERS=["viewports","delay","disable","noScroll","diffThreshold","pauseAnimationAtEnd"];function specFromStory(a){var b=a.id,c=a.kind,d=a.name,e=a.parameters;e=void 0===e?{}:e;var f=e.chromatic,g=function(a){return"function"==typeof a?a({id:b,kind:c,name:d}):a};return{storyId:b,name:d,component:{name:c,displayName:c.split(/\||\/|\./).slice(-1)[0]},parameters:f&&CHROMATIC_PARAMETERS.reduce(function(a,b){return f[b]?_objectSpread({},a,(0,_defineProperty2["default"])({},b,g(f[b]))):a},{})}}var extract=function(a){var b=a.__STORYBOOK_CLIENT_API__;if(!b)throw new Error("Chromatic requires Storybook version at least 3.4. Please update your Storybook!");var c=b._storyStore;return c.extract?Object.values(c.extract()).map(specFromStory):b.getStorybook().map(function(a){var b=a.kind,d=a.stories;return d.map(function(a){var d=a.name;return specFromStory({kind:b,name:d,parameters:c.getStoryAndParameters&&c.getStoryAndParameters(b,d).parameters})})}).reduce(function(c,a){return[].concat((0,_toConsumableArray2["default"])(c),(0,_toConsumableArray2["default"])(a))},[])};(0,_utilDeprecate["default"])(function(){global.__renderChromaticSpec__=Object.assign(function(){var a=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function a(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=b.storyId,d=b.name,e=b.component.name,f=global,g=f.__STORYBOOK_CLIENT_API__,h=f.__STORYBOOK_ADDONS_CHANNEL__,g||h){a.next=4;break}throw new Error("Chromatic requires Storybook version at least 3.4. Please update your Storybook!");case 4:if(i=function(a){return a.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},j=function(a,b){var c=i(a);if(""===c)throw new Error("Invalid ".concat(b," '").concat(a,"', must include alphanumeric characters"));return c},k=function(a,b){return"".concat(j(a,"kind"),"--").concat(j(b,"name"))},l=h,m=g._storyStore,!m.extract){a.next=11;break}return a.abrupt("return",new Promise(function(a,b){l.on("storyRendered",function(){return a(document.getElementById("root"))}),l.on("storyUnchanged",function(){return a(document.getElementById("root"))}),l.on("storyErrored",function(a){return b(a)}),l.on("storyThrewException",function(a){return b(a)}),l.on("storyMissing",function(){return b(new Error("storyMissing"))}),l.emit("setCurrentStory",{storyId:c||k(e,d)})}));case 11:if(l._handleEvent({type:"setCurrentStory",args:[{kind:e,story:d}],from:"chromatic"}),!document.body.classList.contains("sb-show-errordisplay")){a.next=18;break}throw n=document.getElementById("error-message").textContent,o=document.getElementById("error-stack").textContent,p=new Error(n),p.stack=o,p;case 18:return a.abrupt("return",document.getElementById("root"));case 19:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),{isDeprecated:!0}),global.__chromaticRuntimeSpecs__=Object.assign((0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function a(){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",extract(global));case 1:case"end":return a.stop();}},a)})),{isDeprecated:!0})},(0,_commonTags.stripIndents)(_templateObject()))();
//# sourceMappingURL=storybook-addon.js.map