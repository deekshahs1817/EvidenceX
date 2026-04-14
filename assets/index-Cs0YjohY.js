var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function O(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(O(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function k(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function k(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?k(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return k(e(t))}catch{}}return null}var A=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},P=[],F=-1;function ae(e){return{current:e}}function oe(e){0>F||(e.current=P[F],P[F]=null,F--)}function se(e,t){F++,P[F]=e.current,e.current=t}var ce=ae(null),le=ae(null),ue=ae(null),de=ae(null);function fe(e,t){switch(se(ue,t),se(le,e),se(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}oe(ce),se(ce,e)}function pe(){oe(ce),oe(le),oe(ue)}function me(e){e.memoizedState!==null&&se(de,e);var t=ce.current,n=Ud(t,e.type);t!==n&&(se(le,e),se(ce,n))}function he(e){le.current===e&&(oe(ce),oe(le)),de.current===e&&(oe(de),$f._currentValue=N)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,Te=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,De=t.unstable_requestPaint,Oe=t.unstable_now,ke=t.unstable_getCurrentPriorityLevel,Ae=t.unstable_ImmediatePriority,je=t.unstable_UserBlockingPriority,Me=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,Re=null;function ze(e){if(typeof Fe==`function`&&Ie(e),Re&&typeof Re.setStrictMode==`function`)try{Re.setStrictMode(Le,e)}catch{}}var Be=Math.clz32?Math.clz32:Ue,Ve=Math.log,He=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(Ve(e)/He|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function I(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $e(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Be(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&et(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function et(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Be(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function tt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function nt(e,t){var n=t&-t;return n=n&42?1:rt(n),(n&(e.suspendedLanes|t))===0?n:0}function rt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function it(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function at(){var e=M.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function ot(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var st=Math.random().toString(36).slice(2),ct=`__reactFiber$`+st,lt=`__reactProps$`+st,ut=`__reactContainer$`+st,dt=`__reactEvents$`+st,ft=`__reactListeners$`+st,pt=`__reactHandles$`+st,mt=`__reactResources$`+st,ht=`__reactMarker$`+st;function gt(e){delete e[ct],delete e[lt],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ct])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[ct]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function R(e,t){z(e,t),z(e+`Capture`,t)}function z(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return Ce.call(Et,e)?!0:Ce.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function B(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(A(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),V=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return V.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function H(){}var Zt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $t=null,en=null;function tn(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[lt]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var nn=!1;function rn(e,t,n){if(nn)return e(t,n);nn=!0;try{return e(t)}finally{if(nn=!1,($t!==null||en!==null)&&(yu(),$t&&(t=$t,e=en,en=$t=null,tn(t),e)))for(t=0;t<e.length;t++)tn(e[t])}}function an(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var on=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),sn=!1;if(on)try{var cn={};Object.defineProperty(cn,`passive`,{get:function(){sn=!0}}),window.addEventListener(`test`,cn,cn),window.removeEventListener(`test`,cn,cn)}catch{sn=!1}var ln=null,un=null,dn=null;function fn(){if(dn)return dn;var e,t=un,n=t.length,r,i=`value`in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return dn=i.slice(e,1<r?1-r:void 0)}function pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function U(){return!0}function mn(){return!1}function hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?U:mn,this.isPropagationStopped=mn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=U)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=U)},persist:function(){},isPersistent:U}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=hn(gn),vn=h({},gn,{view:0,detail:0}),yn=hn(vn),bn,xn,Sn,Cn=h({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Sn&&(Sn&&e.type===`mousemove`?(bn=e.screenX-Sn.screenX,xn=e.screenY-Sn.screenY):xn=bn=0,Sn=e),bn)},movementY:function(e){return`movementY`in e?e.movementY:xn}}),wn=hn(Cn),Tn=hn(h({},Cn,{dataTransfer:0})),En=hn(h({},vn,{relatedTarget:0})),Dn=hn(h({},gn,{animationName:0,elapsedTime:0,pseudoElement:0})),On=hn(h({},gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),kn=hn(h({},gn,{data:0})),An={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Mn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Nn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mn[e])?!!t[e]:!1}function Pn(){return Nn}var Fn=hn(h({},vn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pn,charCode:function(e){return e.type===`keypress`?pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),W=hn(h({},Cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),In=hn(h({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pn})),Ln=hn(h({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=hn(h({},Cn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=hn(h({},gn,{newState:0,oldState:0})),Bn=[9,13,27,32],Vn=on&&`CompositionEvent`in window,Hn=null;on&&`documentMode`in document&&(Hn=document.documentMode);var Un=on&&`TextEvent`in window&&!Hn,Wn=on&&(!Vn||Hn&&8<Hn&&11>=Hn),Gn=` `,Kn=!1;function qn(e,t){switch(e){case`keyup`:return Bn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Jn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Yn=!1;function Xn(e,t){switch(e){case`compositionend`:return Jn(t);case`keypress`:return t.which===32?(Kn=!0,Gn):null;case`textInput`:return e=t.data,e===Gn&&Kn?null:e;default:return null}}function Zn(e,t){if(Yn)return e===`compositionend`||!Vn&&qn(e,t)?(e=fn(),dn=un=ln=null,Yn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Wn&&t.locale!==`ko`?null:t.data;default:return null}}var Qn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Qn[e.type]:t===`textarea`}function er(e,t,n,r){$t?en?en.push(r):en=[r]:$t=r,t=Ed(t,`onChange`),0<t.length&&(n=new _n(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var tr=null,nr=null;function rr(e){yd(e,0)}function ir(e){if(Pt(yt(e)))return e}function ar(e,t){if(e===`change`)return t}var or=!1;if(on){var sr;if(on){var cr=`oninput`in document;if(!cr){var G=document.createElement(`div`);G.setAttribute(`oninput`,`return;`),cr=typeof G.oninput==`function`}sr=cr}else sr=!1;or=sr&&(!document.documentMode||9<document.documentMode)}function lr(){tr&&(tr.detachEvent(`onpropertychange`,ur),nr=tr=null)}function ur(e){if(e.propertyName===`value`&&ir(nr)){var t=[];er(t,nr,e,Qt(e)),rn(rr,t)}}function dr(e,t,n){e===`focusin`?(lr(),tr=t,nr=n,tr.attachEvent(`onpropertychange`,ur)):e===`focusout`&&lr()}function fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ir(nr)}function pr(e,t){if(e===`click`)return ir(t)}function mr(e,t){if(e===`input`||e===`change`)return ir(t)}function hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var gr=typeof Object.is==`function`?Object.is:hr;function _r(e,t){if(gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!gr(e[i],t[i]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n=vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=vr(n)}}function br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Cr=on&&`documentMode`in document&&11>=document.documentMode,wr=null,Tr=null,Er=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||wr==null||wr!==Ft(r)||(r=wr,`selectionStart`in r&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&_r(Er,r)||(Er=r,r=Ed(Tr,`onSelect`),0<r.length&&(t=new _n(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ar={animationend:kr(`Animation`,`AnimationEnd`),animationiteration:kr(`Animation`,`AnimationIteration`),animationstart:kr(`Animation`,`AnimationStart`),transitionrun:kr(`Transition`,`TransitionRun`),transitionstart:kr(`Transition`,`TransitionStart`),transitioncancel:kr(`Transition`,`TransitionCancel`),transitionend:kr(`Transition`,`TransitionEnd`)},jr={},Mr={};on&&(Mr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),`TransitionEvent`in window||delete Ar.transitionend.transition);function Nr(e){if(jr[e])return jr[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mr)return jr[e]=t[n];return e}var Pr=Nr(`animationend`),Fr=Nr(`animationiteration`),Ir=Nr(`animationstart`),Lr=Nr(`transitionrun`),Rr=Nr(`transitionstart`),zr=Nr(`transitioncancel`),Br=Nr(`transitionend`),Vr=new Map,Hr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Hr.push(`scrollEnd`);function Ur(e,t){Vr.set(e,t),R(t,[e])}var Wr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Gr=[],Kr=0,qr=0;function Jr(){for(var e=Kr,t=qr=Kr=0;t<e;){var n=Gr[t];Gr[t++]=null;var r=Gr[t];Gr[t++]=null;var i=Gr[t];Gr[t++]=null;var a=Gr[t];if(Gr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Qr(n,i,a)}}function Yr(e,t,n,r){Gr[Kr++]=e,Gr[Kr++]=t,Gr[Kr++]=n,Gr[Kr++]=r,qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Xr(e,t,n,r){return Yr(e,t,n,r),$r(e)}function Zr(e,t){return Yr(e,null,null,t),$r(e)}function Qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Be(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function $r(e){if(50<uu)throw uu=0,du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ii(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ai(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ri(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ni(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ni(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ni(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ni(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=ni(7,e,r,t),e.lanes=n,e}function ci(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function li(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function ui(e,t,n){return t=ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var di=new WeakMap;function fi(e,t){if(typeof e==`object`&&e){var n=di.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},di.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var pi=[],mi=0,hi=null,gi=0,_i=[],vi=0,yi=null,bi=1,xi=``;function Si(e,t){pi[mi++]=gi,pi[mi++]=hi,hi=e,gi=t}function Ci(e,t,n){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,yi=e;var r=bi;e=xi;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var a=32-Be(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bi=1<<32-Be(t)+i|n<<i|r,xi=a+e}else bi=1<<a|n<<i|r,xi=e}function wi(e){e.return!==null&&(Si(e,1),Ci(e,1,0))}function Ti(e){for(;e===hi;)hi=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null;for(;e===yi;)yi=_i[--vi],_i[vi]=null,xi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null}function Ei(e,t){_i[vi++]=bi,_i[vi++]=xi,_i[vi++]=yi,bi=t.id,xi=t.overflow,yi=e}var Di=null,Oi=null,K=!1,ki=null,Ai=!1,ji=Error(i(519));function Mi(e){throw Ri(fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ji}function Ni(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ct]=e,t[lt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)$(_d[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=H),t=!0):t=!1,t||Mi(e,!0)}function Pi(e){for(Di=e.return;Di;)switch(Di.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Di=Di.return}}function Fi(e){if(e!==Di)return!1;if(!K)return Pi(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&Oi&&Mi(e),Pi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Oi=df(e)}else t===27?(t=Oi,Qd(e.type)?(e=uf,uf=null,Oi=e):Oi=t):Oi=Di?lf(e.stateNode.nextSibling):null;return!0}function Ii(){Oi=Di=null,K=!1}function Li(){var e=ki;return e!==null&&(Xl===null?Xl=e:Xl.push.apply(Xl,e),ki=null),e}function Ri(e){ki===null?ki=[e]:ki.push(e)}var zi=ae(null),Bi=null,Vi=null;function Hi(e,t,n){se(zi,t._currentValue),t._currentValue=n}function Ui(e){e._currentValue=zi.current,oe(zi)}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Gi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Wi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ki(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;gr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Gi(t,e,n,r),t.flags|=262144}function qi(e){for(e=e.firstContext;e!==null;){if(!gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ji(e){Bi=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Yi(e){return Zi(Bi,e)}function Xi(e,t){return Bi===null&&Ji(e),Zi(e,t)}function Zi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vi===null){if(e===null)throw Error(i(308));Vi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vi=Vi.next=t;return n}var Qi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},$i=t.unstable_scheduleCallback,ea=t.unstable_NormalPriority,ta={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function na(){return{controller:new Qi,data:new Map,refCount:0}}function ra(e){e.refCount--,e.refCount===0&&$i(ea,function(){e.controller.abort()})}var ia=null,aa=0,oa=0,sa=null;function ca(e,t){if(ia===null){var n=ia=[];aa=0,oa=dd(),sa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return aa++,t.then(la,la),t}function la(){if(--aa===0&&ia!==null){sa!==null&&(sa.status=`fulfilled`);var e=ia;ia=null,oa=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ua(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var da=j.S;j.S=function(e,t){$l=Oe(),typeof t==`object`&&t&&typeof t.then==`function`&&ca(e,t),da!==null&&da(e,t)};var fa=ae(null);function pa(){var e=fa.current;return e===null?Ll.pooledCache:e}function ma(e,t){t===null?se(fa,fa.current):se(fa,t.pool)}function ha(){var e=pa();return e===null?null:{parent:ta._currentValue,pool:e}}var ga=Error(i(460)),_a=Error(i(474)),va=Error(i(542)),ya={then:function(){}};function ba(e){return e=e.status,e===`fulfilled`||e===`rejected`}function xa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(H,H),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ta(e),e;default:if(typeof t.status==`string`)t.then(H,H);else{if(e=Ll,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ta(e),e}throw Ca=t,ga}}function Sa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ca=e,ga):e}}var Ca=null;function wa(){if(Ca===null)throw Error(i(459));var e=Ca;return Ca=null,e}function Ta(e){if(e===ga||e===va)throw Error(i(483))}var Ea=null,Da=0;function Oa(e){var t=Da;return Da+=1,Ea===null&&(Ea=[]),xa(Ea,e,t)}function ka(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Aa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ja(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Sa(i)===t.type)?(t=a(t,n.props),ka(t,n),t.return=e,t):(t=oi(n.type,n.key,n.props,null,e.mode,r),ka(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=oi(t.type,t.key,t.props,null,e.mode,n),ka(n,t),n.return=e,n;case v:return t=ui(t,e.mode,n),t.return=e,t;case D:return t=Sa(t),f(e,t,n)}if(A(t)||O(t))return t=si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Oa(t),n);if(t.$$typeof===C)return f(e,Xi(e,t),n);Aa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Sa(n),p(e,t,n,r)}if(A(n)||O(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Oa(n),r);if(n.$$typeof===C)return p(e,t,Xi(e,n),r);Aa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Sa(r),m(e,t,n,r,i)}if(A(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Oa(r),i);if(r.$$typeof===C)return m(e,t,n,Xi(t,r),i);Aa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&Si(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&Si(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&Si(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&Si(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&Si(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&Si(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Sa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ka(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=oi(o.type,o.key,o.props,null,e.mode,c),ka(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ui(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Sa(o),b(e,r,o,c)}if(A(o))return h(e,r,o,c);if(O(o)){if(l=O(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Oa(o),c);if(o.$$typeof===C)return b(e,r,Xi(e,o),c);Aa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Da=0;var i=b(e,t,n,r);return Ea=null,i}catch(t){if(t===ga||t===va)throw t;var a=ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ma=ja(!0),Na=ja(!1),Pa=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=$r(e),Qr(e,null,n),t}return Yr(e,r,t,n),$r(e)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Va=!1;function Ha(){if(Va){var e=sa;if(e!==null)throw e}}function Ua(e,t,n,r){Va=!1;var i=e.updateQueue;Pa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Z&f)===f:(r&f)===f){f!==0&&f===oa&&(Va=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Pa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Wl|=o,e.lanes=o,e.memoizedState=d}}function Wa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ga(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wa(n[e],t)}var Ka=ae(null),qa=ae(0);function Ja(e,t){e=Hl,se(qa,e),se(Ka,t),Hl=e|t.baseLanes}function Ya(){se(qa,Hl),se(Ka,Ka.current)}function Xa(){Hl=qa.current,oe(Ka),oe(qa)}var Za=ae(null),Qa=null;function $a(e){var t=e.alternate;se(io,io.current&1),se(Za,e),Qa===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(Qa=e)}function eo(e){se(io,io.current),se(Za,e),Qa===null&&(Qa=e)}function to(e){e.tag===22?(se(io,io.current),se(Za,e),Qa===null&&(Qa=e)):no(e)}function no(){se(io,io.current),se(Za,Za.current)}function ro(e){oe(Za),Qa===e&&(Qa=null),oe(io)}var io=ae(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=0,q=null,so=null,co=null,lo=!1,uo=!1,fo=!1,po=0,mo=0,ho=null,go=0;function _o(){throw Error(i(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gr(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,i,a){return oo=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Is:Ls,fo=!1,a=n(r,i),fo=!1,uo&&(a=xo(t,n,r,i)),bo(e),a}function bo(e){j.H=Fs;var t=so!==null&&so.next!==null;if(oo=0,co=so=q=null,lo=!1,mo=0,ho=null,t)throw Error(i(300));e===null||ec||(e=e.dependencies,e!==null&&qi(e)&&(ec=!0))}function xo(e,t,n,r){q=e;var a=0;do{if(uo&&(ho=null),mo=0,uo=!1,25<=a)throw Error(i(301));if(a+=1,co=so=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Rs,o=t(n,r)}while(uo);return o}function So(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?ko(t):t,e=e.useState()[0],(so===null?null:so.memoizedState)!==e&&(q.flags|=1024),t}function Co(){var e=po!==0;return po=0,e}function wo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function To(e){if(lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lo=!1}oo=0,co=so=q=null,uo=!1,mo=po=0,ho=null}function Eo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?q.memoizedState=co=e:co=co.next=e,co}function Do(){if(so===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=so.next;var t=co===null?q.memoizedState:co.next;if(t!==null)co=t,so=e;else{if(e===null)throw q.alternate===null?Error(i(467)):Error(i(310));so=e,e={memoizedState:so.memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},co===null?q.memoizedState=co=e:co=co.next=e}return co}function Oo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var t=mo;return mo+=1,ho===null&&(ho=[]),e=xa(ho,e,t),t=q,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Is:Ls),e}function Ao(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ko(e);if(e.$$typeof===C)return Yi(e)}throw Error(i(438,String(e)))}function jo(e){var t=null,n=q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=q.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Oo(),q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Mo(e,t){return typeof t==`function`?t(e):t}function No(e){return Po(Do(),so,e)}function Po(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(oo&f)===f:(Z&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===oa&&(d=!0);else if((oo&p)===p){u=u.next,p===oa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,q.lanes|=p,Wl|=p;f=u.action,fo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,q.lanes|=f,Wl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!gr(o,e.memoizedState)&&(ec=!0,d&&(n=sa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fo(e){var t=Do(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);gr(o,t.memoizedState)||(ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Io(e,t,n){var r=q,a=Do(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!gr((so||a).memoizedState,n);if(s&&(a.memoizedState=n,ec=!0),a=a.queue,ss(zo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||co!==null&&co.memoizedState.tag&1){if(r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,a,n,t),null),Ll===null)throw Error(i(349));o||oo&127||Lo(r,t,n)}return n}function Lo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t=Oo(),q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ro(e,t,n,r){t.value=n,t.getSnapshot=r,Bo(t)&&Vo(e)}function zo(e,t,n){return n(function(){Bo(t)&&Vo(e)})}function Bo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gr(e,n)}catch{return!0}}function Vo(e){var t=Zr(e,2);t!==null&&mu(t,e,2)}function Ho(e){var t=Eo();if(typeof e==`function`){var n=e;if(e=n(),fo){ze(!0);try{n()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t}function Uo(e,t,n,r){return e.baseState=n,Po(e,so,typeof r==`function`?r:Mo)}function Wo(e,t,n,r,a){if(Ms(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Go(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Go(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Ko(e,t,s)}catch(n){Jo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Ko(e,t,a)}catch(n){Jo(e,t,n)}}function Ko(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){qo(e,t,n)},function(n){return Jo(e,t,n)}):qo(e,t,n)}function qo(e,t,n){t.status=`fulfilled`,t.value=n,Yo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Go(e,n)))}function Jo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Yo(t),t=t.next;while(t!==r)}e.action=null}function Yo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xo(e,t){return t}function Zo(e,t){if(K){var n=Ll.formState;if(n!==null){a:{var r=q;if(K){if(Oi){b:{for(var i=Oi,a=Ai;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Oi=lf(i.nextSibling),r=i.data===`F!`;break a}}Mi(r)}r=!1}r&&(t=n[0])}}return n=Eo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},n.queue=r,n=ks.bind(null,q,r),r.dispatch=n,r=Ho(!1),a=js.bind(null,q,!1,r.queue),r=Eo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Wo.bind(null,q,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qo(e){return $o(Do(),so,e)}function $o(e,t,n){if(t=Po(e,t,Xo)[0],e=No(Mo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ko(t)}catch(e){throw e===ga?va:e}else r=t;t=Do();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(q.flags|=2048,ns(9,{destroy:void 0},es.bind(null,i,n),null)),[r,a,e]}function es(e,t){e.action=t}function ts(e){var t=Do(),n=so;if(n!==null)return $o(t,n,e);Do(),t=t.memoizedState,n=Do();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=q.updateQueue,t===null&&(t=Oo(),q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function rs(){return Do().memoizedState}function is(e,t,n,r){var i=Eo();q.flags|=e,i.memoizedState=ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function as(e,t,n,r){var i=Do();r=r===void 0?null:r;var a=i.memoizedState.inst;so!==null&&r!==null&&vo(r,so.memoizedState.deps)?i.memoizedState=ns(t,a,n,r):(q.flags|=e,i.memoizedState=ns(1|t,a,n,r))}function os(e,t){is(8390656,8,e,t)}function ss(e,t){as(2048,8,e,t)}function cs(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=Oo(),q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ls(e){var t=Do().memoizedState;return cs({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function us(e,t){return as(4,2,e,t)}function ds(e,t){return as(4,4,e,t)}function fs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){n=n==null?null:n.concat([e]),as(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Do();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&vo(t,r[1]))return r[0];if(r=e(),fo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r}function _s(e,t,n){return n===void 0||oo&1073741824&&!(Z&261930)?e.memoizedState=t:(e.memoizedState=n,e=pu(),q.lanes|=e,Wl|=e,n)}function vs(e,t,n,r){return gr(n,t)?n:Ka.current===null?!(oo&42)||oo&1073741824&&!(Z&261930)?(ec=!0,e.memoizedState=n):(e=pu(),q.lanes|=e,Wl|=e,t):(e=_s(e,n,r),gr(e,t)||(ec=!0),e)}function ys(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,js(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?As(e,t,ua(c,r),fu(e)):As(e,t,r,fu(e))}catch(n){As(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function bs(){}function xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ss(e).queue;ys(e,a,t,N,n===null?bs:function(){return Cs(e),n(r)})}function Ss(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:N},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cs(e){var t=Ss(e);t.next===null&&(t=e.alternate.memoizedState),As(e,t.next.queue,{},fu())}function ws(){return Yi($f)}function Ts(){return Do().memoizedState}function Es(){return Do().memoizedState}function Ds(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=La(n);var r=Ra(t,e,n);r!==null&&(mu(r,t,n),za(r,t,n)),t={cache:na()},e.payload=t;return}t=t.return}}function Os(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ms(e)?Ns(t,n):(n=Xr(e,t,n,r),n!==null&&(mu(n,e,r),Ps(n,t,r)))}function ks(e,t,n){As(e,t,n,fu())}function As(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ms(e))Ns(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,gr(s,o))return Yr(e,t,i,0),Ll===null&&Jr(),!1}catch{}if(n=Xr(e,t,i,r),n!==null)return mu(n,e,r),Ps(n,t,r),!0}return!1}function js(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ms(e)){if(t)throw Error(i(479))}else t=Xr(e,n,r,2),t!==null&&mu(t,e,2)}function Ms(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ns(e,t){uo=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ps(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tt(e,n)}}var Fs={readContext:Yi,use:Ao,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useLayoutEffect:_o,useInsertionEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useSyncExternalStore:_o,useId:_o,useHostTransitionStatus:_o,useFormState:_o,useActionState:_o,useOptimistic:_o,useMemoCache:_o,useCacheRefresh:_o};Fs.useEffectEvent=_o;var Is={readContext:Yi,use:Ao,useCallback:function(e,t){return Eo().memoizedState=[e,t===void 0?null:t],e},useContext:Yi,useEffect:os,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),is(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){is(4,2,e,t)},useMemo:function(e,t){var n=Eo();t=t===void 0?null:t;var r=e();if(fo){ze(!0);try{e()}finally{ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Eo();if(n!==void 0){var i=n(t);if(fo){ze(!0);try{n(t)}finally{ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Os.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Eo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,n=ks.bind(null,q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ms,useDeferredValue:function(e,t){return _s(Eo(),e,t)},useTransition:function(){var e=Ho(!1);return e=ys.bind(null,q,e.queue,!0,!1),Eo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=q,a=Eo();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ll===null)throw Error(i(349));Z&127||Lo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,os(zo.bind(null,r,o,e),[e]),r.flags|=2048,ns(9,{destroy:void 0},Ro.bind(null,r,o,n,t),null),n},useId:function(){var e=Eo(),t=Ll.identifierPrefix;if(K){var n=xi,r=bi;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=po++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ws,useFormState:Zo,useActionState:Zo,useOptimistic:function(e){var t=Eo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,q,!0,n),n.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return Eo().memoizedState=Ds.bind(null,q)},useEffectEvent:function(e){var t=Eo(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ls={readContext:Yi,use:Ao,useCallback:hs,useContext:Yi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:No,useRef:rs,useState:function(){return No(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){return vs(Do(),so.memoizedState,e,t)},useTransition:function(){var e=No(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){return Uo(Do(),so,e,t)},useMemoCache:jo,useCacheRefresh:Es};Ls.useEffectEvent=ls;var Rs={readContext:Yi,use:Ao,useCallback:hs,useContext:Yi,useEffect:ss,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Fo,useRef:rs,useState:function(){return Fo(Mo)},useDebugValue:ms,useDeferredValue:function(e,t){var n=Do();return so===null?_s(n,e,t):vs(n,so.memoizedState,e,t)},useTransition:function(){var e=Fo(Mo)[0],t=Do().memoizedState;return[typeof e==`boolean`?e:ko(e),t]},useSyncExternalStore:Io,useId:Ts,useHostTransitionStatus:ws,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){var n=Do();return so===null?(n.baseState=e,[e,n.queue.dispatch]):Uo(n,so,e,t)},useMemoCache:jo,useCacheRefresh:Es};Rs.useEffectEvent=ls;function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),i=La(r);i.payload=t,n!=null&&(i.callback=n),t=Ra(e,i,r),t!==null&&(mu(t,e,r),za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),i=La(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ra(e,i,r),t!==null&&(mu(t,e,r),za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=La(n);r.tag=2,t!=null&&(r.callback=t),t=Ra(e,r,n),t!==null&&(mu(t,e,n),za(t,e,n))}};function Vs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,a):!0}function Hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function Us(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ws(e){Wr(e)}function Gs(e){console.error(e)}function Ks(e){Wr(e)}function qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Js(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){qs(e,t)},n}function Xs(e){return e=La(e),e.tag=3,e}function Zs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Js(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Js(t,n,r),typeof i!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Qs(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ki(t,n,a,!0),n=Za.current,n!==null){switch(n.tag){case 31:case 13:return Qa===null?Eu():n.alternate===null&&Ul===0&&(Ul=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ya?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ya?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Eu(),!1}if(K)return t=Za.current,t===null?(r!==ji&&(t=Error(i(423),{cause:r}),Ri(fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fi(r,n),a=Ys(e.stateNode,r,a),Ba(e,a),Ul!==4&&(Ul=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ji&&(e=Error(i(422),{cause:r}),Ri(fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=fi(o,n),Yl===null?Yl=[o]:Yl.push(o),Ul!==4&&(Ul=2),t===null)return!0;r=fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ys(n.stateNode,r,e),Ba(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(nu===null||!nu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xs(a),Zs(a,e,n,r),Ba(n,a),!1}n=n.return}while(n!==null);return!1}var $s=Error(i(461)),ec=!1;function tc(e,t,n,r){t.child=e===null?Na(t,null,n,r):Ma(t,e.child,n,r)}function nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ji(t),r=yo(e,t,n,o,a,i),s=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(K&&s&&wi(t),t.flags|=1,tc(e,t,r,i),t.child)}function rc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ic(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?_r:n,n(o,r)&&e.ref===t.ref)return Ec(e,t,i)}return t.flags|=1,e=ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_r(a,r)&&e.ref===t.ref)if(ec=!1,t.pendingProps=r=a,Dc(e,i))e.flags&131072&&(ec=!0);else return t.lanes=e.lanes,Ec(e,t,i)}return fc(e,t,n,r,i)}function ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ma(t,a===null?null:a.cachePool),a===null?Ya():Ja(t,a),to(t);else return r=t.lanes=536870912,sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ma(t,null),Ya(),no(t)):(ma(t,a.cachePool),Ja(t,a),no(t),t.memoizedState=null);return tc(e,t,i,n),t.child}function oc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sc(e,t,n,r,i){var a=pa();return a=a===null?null:{parent:ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ma(t,null),Ya(),to(t),e!==null&&Ki(e,t,r,!0),t.childLanes=i,null}function cc(e,t){return t=xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lc(e,t,n){return Ma(t,e.child,null,n),e=cc(t,t.pendingProps),e.flags|=2,ro(t),t.memoizedState=null,e}function uc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=cc(t,r),t.lanes=536870912,oc(null,e);if(eo(t),(e=Oi)?(e=af(e,Ai),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Mi(t);return t.lanes=536870912,null}return cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(eo(t),a)if(t.flags&256)t.flags&=-257,t=lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ec||Ki(e,t,n,!1),a=(n&e.childLanes)!==0,ec||a){if(r=Ll,r!==null&&(s=nt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Zr(e,s),mu(r,e,s),$s;Eu(),t=lc(e,t,n)}else e=o.treeContext,Oi=lf(s.nextSibling),Di=t,K=!0,ki=null,Ai=!1,e!==null&&Ei(t,e),t=cc(t,r),t.flags|=4096;return t}return e=ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,r,i){return Ji(t),n=yo(e,t,n,r,void 0,i),r=Co(),e!==null&&!ec?(wo(e,t,i),Ec(e,t,i)):(K&&r&&wi(t),t.flags|=1,tc(e,t,n,i),t.child)}function pc(e,t,n,r,i,a){return Ji(t),t.updateQueue=null,n=xo(t,r,n,i),bo(e),r=Co(),e!==null&&!ec?(wo(e,t,a),Ec(e,t,a)):(K&&r&&wi(t),t.flags|=1,tc(e,t,n,a),t.child)}function mc(e,t,n,r,i){if(Ji(t),t.stateNode===null){var a=ei,o=n.contextType;typeof o==`object`&&o&&(a=Yi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Fa(t),o=n.contextType,a.context=typeof o==`object`&&o?Yi(o):ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Bs.enqueueReplaceState(a,a.state,null),Ua(t,r,a,i),Ha(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Us(n,s);a.props=c;var l=a.context,u=n.contextType;o=ei,typeof u==`object`&&u&&(o=Yi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Hs(t,a,r,o),Pa=!1;var f=t.memoizedState;a.state=f,Ua(t,r,a,i),Ha(),l=t.memoizedState,s||f!==l||Pa?(typeof d==`function`&&(zs(t,n,d,r),l=t.memoizedState),(c=Pa||Vs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ia(e,t),o=t.memoizedProps,u=Us(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ei,typeof l==`object`&&l&&(c=Yi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Hs(t,a,r,c),Pa=!1,f=t.memoizedState,a.state=f,Ua(t,r,a,i),Ha();var p=t.memoizedState;o!==d||f!==p||Pa||e!==null&&e.dependencies!==null&&qi(e.dependencies)?(typeof s==`function`&&(zs(t,n,s,r),p=t.memoizedState),(u=Pa||Vs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,dc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ma(t,e.child,null,i),t.child=Ma(t,null,n,i)):tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ec(e,t,i),e}function hc(e,t,n,r){return Ii(),t.flags|=256,tc(e,t,n,r),t.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ha()}}function vc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ql),e}function yc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(io.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(K){if(a?$a(t):no(t),(e=Oi)?(e=af(e,Ai),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:yi===null?null:{id:bi,overflow:xi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Di=t,Oi=null)):e=null,e===null)throw Mi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(no(t),a=t.mode,c=xc({mode:`hidden`,children:c},a),r=si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(null,r)):($a(t),bc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?($a(t),t.flags&=-257,t=Sc(e,t,n)):t.memoizedState===null?(no(t),c=r.fallback,a=t.mode,r=xc({mode:`visible`,children:r.children},a),c=si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ma(t,e.child,null,n),r=t.child,r.memoizedState=_c(n),r.childLanes=vc(e,s,n),t.memoizedState=gc,t=oc(null,r)):(no(t),t.child=e.child,t.flags|=128,t=null);else if($a(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ri({value:r,source:null,stack:null}),t=Sc(e,t,n)}else if(ec||Ki(e,t,n,!1),s=(n&e.childLanes)!==0,ec||s){if(s=Ll,s!==null&&(r=nt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Zr(e,r),mu(s,e,r),$s;of(c)||Eu(),t=Sc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Oi=lf(c.nextSibling),Di=t,K=!0,ki=null,Ai=!1,e!==null&&Ei(t,e),t=bc(t,r.children),t.flags|=4096);return t}return a?(no(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ii(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=si(c,a,n,null),c.flags|=2):c=ii(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,oc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=_c(n):(a=c.cachePool,a===null?a=ha():(l=ta._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=vc(e,s,n),t.memoizedState=gc,oc(e.child,r)):($a(t),n=e.child,e=n.sibling,n=ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function bc(e,t){return t=xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function Sc(e,t,n){return Ma(t,e.child,null,n),e=bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function wc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=io.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,se(io,o),tc(e,t,r,n),r=K?gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,a,r);break;case`together`:wc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&qi(e))):!0}function Oc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Hi(t,ta,e.memoizedState.cache),Ii();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Hi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,eo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?($a(t),e=Ec(e,t,n),e===null?null:e.sibling):yc(e,t,n):($a(t),t.flags|=128,null);$a(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ki(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(io,io.current),r)break;return null;case 22:return t.lanes=0,ac(e,t,n,t.pendingProps);case 24:Hi(t,ta,e.memoizedState.cache)}return Ec(e,t,n)}function kc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ec=!0;else{if(!Dc(e,n)&&!(t.flags&128))return ec=!1,Oc(e,t,n);ec=!!(e.flags&131072)}else ec=!1,K&&t.flags&1048576&&Ci(t,gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Sa(t.elementType),t.type=e,typeof e==`function`)ri(e)?(r=Us(e,r),t.tag=1,t=mc(null,t,e,r,n)):(t.tag=0,t=fc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=nc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=rc(null,t,e,r,n);break a}}throw t=k(e)||e,Error(i(306,t,``))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Us(r,t.pendingProps),mc(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ia(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Hi(t,ta,r),r!==o.cache&&Gi(t,[ta],n,!0),Ha(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=hc(e,t,r,n);break a}else if(r!==a){a=fi(Error(i(424)),t),Ri(a),t=hc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Oi=lf(e.firstChild),Di=t,K=!0,ki=null,Ai=!0,n=Na(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ii(),r===a){t=Ec(e,t,n);break a}tc(e,t,r,n)}t=t.child}return t;case 26:return dc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(n=t.type,e=t.pendingProps,r=Vd(ue.current).createElement(n),r[ct]=t,r[lt]=e,Fd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&K&&(r=t.stateNode=pf(t.type,t.pendingProps,ue.current),Di=t,Ai=!0,a=Oi,Qd(t.type)?(uf=a,Oi=lf(r.firstChild)):Oi=a),tc(e,t,t.pendingProps.children,n),dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Oi)&&(r=nf(r,t.type,t.pendingProps,Ai),r===null?a=!1:(t.stateNode=r,Di=t,Oi=lf(r.firstChild),Ai=!1,a=!0)),a||Mi(t)),me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yo(e,t,So,null,null,n),$f._currentValue=a),dc(e,t),tc(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Oi)&&(n=rf(n,t.pendingProps,Ai),n===null?e=!1:(t.stateNode=n,Di=t,Oi=null,e=!0)),e||Mi(t)),null;case 13:return yc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ma(t,null,r,n):tc(e,t,r,n),t.child;case 11:return nc(e,t,t.type,t.pendingProps,n);case 7:return tc(e,t,t.pendingProps,n),t.child;case 8:return tc(e,t,t.pendingProps.children,n),t.child;case 12:return tc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Hi(t,t.type,r.value),tc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ji(t),a=Yi(a),r=r(a),t.flags|=1,tc(e,t,r,n),t.child;case 14:return rc(e,t,t.type,t.pendingProps,n);case 15:return ic(e,t,t.type,t.pendingProps,n);case 19:return Tc(e,t,n);case 31:return uc(e,t,n);case 22:return ac(e,t,n,t.pendingProps);case 24:return Ji(t),r=Yi(ta),e===null?(a=pa(),a===null&&(a=Ll,o=na(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Fa(t),Hi(t,ta,a)):((e.lanes&n)!==0&&(Ia(e,t),Ua(t,null,null,n),Ha()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Hi(t,ta,r),r!==a.cache&&Gi(t,[ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Hi(t,ta,r))),tc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ac(e){e.flags|=4}function jc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw Ca=ya,_a}else e.flags&=-16777217}function Mc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(Cu())e.flags|=8192;else throw Ca=ya,_a}function Nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Jl|=t)}function Pc(e,t){if(!K)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function J(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fc(e,t,n){var r=t.pendingProps;switch(Ti(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(t),null;case 1:return J(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ui(ta),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?Ac(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Li())),J(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ac(t),o===null?(J(t),jc(t,a,null,r,n)):(J(t),Mc(t,o))):o?o===e.memoizedState?(J(t),t.flags&=-16777217):(Ac(t),J(t),Mc(t,o)):(e=e.memoizedProps,e!==r&&Ac(t),J(t),jc(t,a,e,r,n)),null;case 27:if(he(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return J(t),null}e=ce.current,Fi(t)?Ni(t,e):(e=pf(a,r,n),t.stateNode=e,Ac(t))}return J(t),null;case 5:if(he(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return J(t),null}if(o=ce.current,Fi(t))Ni(t,o);else{var s=Vd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ct]=t,o[lt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ac(t)}}return J(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ac(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Fi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Di,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Mi(t,!0)}else e=Vd(e).createTextNode(r),e[ct]=t,t.stateNode=e}return J(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Fi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ct]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),e=!1}else n=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ro(t),t):(ro(t),null);if(t.flags&128)throw Error(i(558))}return J(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ct]=t}else Ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;J(t),a=!1}else a=Li(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ro(t),t):(ro(t),null)}return ro(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Nc(t,t.updateQueue),J(t),null);case 4:return pe(),e===null&&Sd(t.stateNode.containerInfo),J(t),null;case 10:return Ui(t.type),J(t),null;case 19:if(oe(io),r=t.memoizedState,r===null)return J(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Pc(r,!1);else{if(Ul!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ao(e),o!==null){for(t.flags|=128,Pc(r,!1),e=o.updateQueue,t.updateQueue=e,Nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ai(n,e),n=n.sibling;return se(io,io.current&1|2),K&&Si(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Oe()>eu&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ao(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Nc(t,e),Pc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!K)return J(t),null}else 2*Oe()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,a=!0,Pc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(J(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Oe(),e.sibling=null,n=io.current,se(io,a?n&1|2:n&1),K&&Si(t,r.treeForkCount),e);case 22:case 23:return ro(t),Xa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(J(t),t.subtreeFlags&6&&(t.flags|=8192)):J(t),n=t.updateQueue,n!==null&&Nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&oe(fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ui(ta),J(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Ic(e,t){switch(Ti(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(ta),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if(ro(t),t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ro(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(io),null;case 4:return pe(),null;case 10:return Ui(t.type),null;case 22:case 23:return ro(t),Xa(),e!==null&&oe(fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ui(ta),null;case 25:return null;default:return null}}function Lc(e,t){switch(Ti(t),t.tag){case 3:Ui(ta),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&ro(t);break;case 13:ro(t);break;case 19:oe(io);break;case 10:Ui(t.type);break;case 22:case 23:ro(t),Xa(),e!==null&&oe(fa);break;case 24:Ui(ta)}}function Rc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Wu(t,t.return,e)}}function zc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Wu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Wu(t,t.return,e)}}function Bc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ga(t,n)}catch(t){Wu(e,e.return,t)}}}function Vc(e,t,n){n.props=Us(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Wu(e,t,n)}}function Hc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Wu(e,t,n)}}function Uc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Wu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Wu(e,t,n)}else n.current=null}function Wc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Wu(e,e.return,t)}}function Gc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[lt]=t}catch(t){Wu(e,e.return,t)}}function Kc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=H));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Jc(e,t,n),e=e.sibling;e!==null;)Jc(e,t,n),e=e.sibling}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function Xc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ct]=e,t[lt]=n}catch(t){Wu(e,e.return,t)}}var Zc=!1,Qc=!1,$c=!1,el=typeof WeakSet==`function`?WeakSet:Set,tl=null;function nl(e,t){if(e=e.containerInfo,zd=cp,e=xr(e),Sr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,tl=t;tl!==null;)if(t=tl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,tl=e;else for(;tl!==null;){switch(t=tl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Us(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Wu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,tl=e;break}tl=t.return}}function rl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:vl(e,n),r&4&&Rc(5,n);break;case 1:if(vl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Wu(n,n.return,e)}else{var i=Us(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Wu(n,n.return,e)}}r&64&&Bc(n),r&512&&Hc(n,n.return);break;case 3:if(vl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ga(e,t)}catch(e){Wu(n,n.return,e)}}break;case 27:t===null&&r&4&&Xc(n);case 26:case 5:vl(e,n),t===null&&r&4&&Wc(n),r&512&&Hc(n,n.return);break;case 12:vl(e,n);break;case 31:vl(e,n),r&4&&ll(e,n);break;case 13:vl(e,n),r&4&&ul(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||Zc,!r){t=t!==null&&t.memoizedState!==null||Qc,i=Zc;var a=Qc;Zc=r,(Qc=t)&&!a?bl(e,n,(n.subtreeFlags&8772)!=0):vl(e,n),Zc=i,Qc=a}break;case 30:break;default:vl(e,n)}}function il(e){var t=e.alternate;t!==null&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var al=null,ol=!1;function sl(e,t,n){for(n=n.child;n!==null;)cl(e,t,n),n=n.sibling}function cl(e,t,n){if(Re&&typeof Re.onCommitFiberUnmount==`function`)try{Re.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:Qc||Uc(n,t),sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qc||Uc(n,t);var r=al,i=ol;Qd(n.type)&&(al=n.stateNode,ol=!1),sl(e,t,n),mf(n.stateNode),al=r,ol=i;break;case 5:Qc||Uc(n,t);case 6:if(r=al,i=ol,al=null,sl(e,t,n),al=r,ol=i,al!==null)if(ol)try{(al.nodeType===9?al.body:al.nodeName===`HTML`?al.ownerDocument.body:al).removeChild(n.stateNode)}catch(e){Wu(n,t,e)}else try{al.removeChild(n.stateNode)}catch(e){Wu(n,t,e)}break;case 18:al!==null&&(ol?(e=al,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(al,n.stateNode));break;case 4:r=al,i=ol,al=n.stateNode.containerInfo,ol=!0,sl(e,t,n),al=r,ol=i;break;case 0:case 11:case 14:case 15:zc(2,n,t),Qc||zc(4,n,t),sl(e,t,n);break;case 1:Qc||(Uc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Vc(n,t,r)),sl(e,t,n);break;case 21:sl(e,t,n);break;case 22:Qc=(r=Qc)||n.memoizedState!==null,sl(e,t,n),Qc=r;break;default:sl(e,t,n)}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Wu(t,t.return,e)}}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Wu(t,t.return,e)}}function dl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new el),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new el),t;default:throw Error(i(435,e.tag))}}function fl(e,t){var n=dl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function pl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){al=c.stateNode,ol=!1;break a}break;case 5:al=c.stateNode,ol=!1;break a;case 3:case 4:al=c.stateNode.containerInfo,ol=!0;break a}c=c.return}if(al===null)throw Error(i(160));cl(o,s,a),al=null,ol=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hl(t,e),t=t.sibling}var ml=null;function hl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pl(t,e),gl(e),r&4&&(zc(3,e,e.return),Rc(3,e),zc(5,e,e.return));break;case 1:pl(t,e),gl(e),r&512&&(Qc||n===null||Uc(n,n.return)),r&64&&Zc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ml;if(pl(t,e),gl(e),r&512&&(Qc||n===null||Uc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ct]=e,xt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ct]=e,xt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:pl(t,e),gl(e),r&512&&(Qc||n===null||Uc(n,n.return)),n!==null&&r&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pl(t,e),gl(e),r&512&&(Qc||n===null||Uc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Wu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Gc(e,a,n===null?a:n.memoizedProps)),r&1024&&($c=!0);break;case 6:if(pl(t,e),gl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Wu(e,e.return,t)}}break;case 3:if(Vf=null,a=ml,ml=_f(t.containerInfo),pl(t,e),ml=a,gl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Wu(e,e.return,t)}$c&&($c=!1,_l(e));break;case 4:r=ml,ml=_f(e.stateNode.containerInfo),pl(t,e),gl(e),ml=r;break;case 12:pl(t,e),gl(e);break;case 31:pl(t,e),gl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 13:pl(t,e),gl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=Oe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Zc,d=Qc;if(Zc=u||a,Qc=d||l,pl(t,e),Qc=d,Zc=u,gl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Zc||Qc||yl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Wu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Wu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Wu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,fl(e,n))));break;case 19:pl(t,e),gl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,fl(e,r)));break;case 30:break;case 21:break;default:pl(t,e),gl(e)}}function gl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Kc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Yc(e,qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Yc(e,qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Jc(e,qc(e),s);break;default:throw Error(i(161))}}catch(t){Wu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _l(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_l(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function vl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)rl(e,t.alternate,t),t=t.sibling}function yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zc(4,t,t.return),yl(t);break;case 1:Uc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Vc(t,t.return,n),yl(t);break;case 27:mf(t.stateNode);case 26:case 5:Uc(t,t.return),yl(t);break;case 22:t.memoizedState===null&&yl(t);break;case 30:yl(t);break;default:yl(t)}e=e.sibling}}function bl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:bl(i,a,n),Rc(4,a);break;case 1:if(bl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Wu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Wa(c[i],s)}catch(e){Wu(r,r.return,e)}}n&&o&64&&Bc(a),Hc(a,a.return);break;case 27:Xc(a);case 26:case 5:bl(i,a,n),n&&r===null&&o&4&&Wc(a),Hc(a,a.return);break;case 12:bl(i,a,n);break;case 31:bl(i,a,n),n&&o&4&&ll(i,a);break;case 13:bl(i,a,n),n&&o&4&&ul(i,a);break;case 22:a.memoizedState===null&&bl(i,a,n),Hc(a,a.return);break;case 30:break;default:bl(i,a,n)}t=t.sibling}}function xl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ra(n))}function Sl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e))}function Cl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wl(e,t,n,r),t=t.sibling}function wl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Cl(e,t,n,r),i&2048&&Rc(9,t);break;case 1:Cl(e,t,n,r);break;case 3:Cl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ra(e)));break;case 12:if(i&2048){Cl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Wu(t,t.return,e)}}else Cl(e,t,n,r);break;case 31:Cl(e,t,n,r);break;case 13:Cl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Cl(e,t,n,r):(a._visibility|=2,Tl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Cl(e,t,n,r):El(e,t),i&2048&&xl(o,t);break;case 24:Cl(e,t,n,r),i&2048&&Sl(t.alternate,t);break;default:Cl(e,t,n,r)}}function Tl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Tl(a,o,s,c,i),Rc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Tl(a,o,s,c,i)):u._visibility&2?Tl(a,o,s,c,i):El(a,o),i&&l&2048&&xl(o.alternate,o);break;case 24:Tl(a,o,s,c,i),i&&l&2048&&Sl(o.alternate,o);break;default:Tl(a,o,s,c,i)}t=t.sibling}}function El(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:El(n,r),i&2048&&xl(r.alternate,r);break;case 24:El(n,r),i&2048&&Sl(r.alternate,r);break;default:El(n,r)}t=t.sibling}}var Dl=8192;function Ol(e,t,n){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)kl(e,t,n),e=e.sibling}function kl(e,t,n){switch(e.tag){case 26:Ol(e,t,n),e.flags&Dl&&e.memoizedState!==null&&Kf(n,ml,e.memoizedState,e.memoizedProps);break;case 5:Ol(e,t,n);break;case 3:case 4:var r=ml;ml=_f(e.stateNode.containerInfo),Ol(e,t,n),ml=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Dl,Dl=16777216,Ol(e,t,n),Dl=r):Ol(e,t,n));break;default:Ol(e,t,n)}}function Al(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Pl(r,e)}Al(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ml(e),e=e.sibling}function Ml(e){switch(e.tag){case 0:case 11:case 15:jl(e),e.flags&2048&&zc(9,e,e.return);break;case 3:jl(e);break;case 12:jl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nl(e)):jl(e);break;default:jl(e)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tl=r,Pl(r,e)}Al(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zc(8,t,t.return),Nl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nl(t));break;default:Nl(t)}e=e.sibling}}function Pl(e,t){for(;tl!==null;){var n=tl;switch(n.tag){case 0:case 11:case 15:zc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ra(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,tl=r;else a:for(n=e;tl!==null;){r=tl;var i=r.sibling,a=r.return;if(il(r),r===n){tl=null;break a}if(i!==null){i.return=a,tl=i;break a}tl=a}}}var Fl={getCacheForType:function(e){var t=Yi(ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Yi(ta).controller.signal}},Il=typeof WeakMap==`function`?WeakMap:Map,Y=0,Ll=null,X=null,Z=0,Q=0,Rl=null,zl=!1,Bl=!1,Vl=!1,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=null,Xl=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return Y&2&&Z!==0?Z&-Z:j.T===null?at():dd()}function pu(){if(ql===0)if(!(Z&536870912)||K){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),ql=e}else ql=536870912;return e=Za.current,e!==null&&(e.flags|=32),ql}function mu(e,t,n){(e===Ll&&(Q===2||Q===9)||e.cancelPendingCommit!==null)&&(xu(e,0),vu(e,Z,ql,!1)),I(e,n),(!(Y&2)||e!==Ll)&&(e===Ll&&(!(Y&2)&&(Gl|=n),Ul===4&&vu(e,Z,ql,!1)),rd(e))}function hu(e,t,n){if(Y&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?ku(e,t):Du(e,t,!0),o=r;do{if(a===0){Bl&&!r&&vu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!_u(n)){a=Du(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Yl;var l=c.current.memoizedState.isDehydrated;if(l&&(xu(c,s).flags|=256),s=Du(c,s,!1),s!==2){if(Vl&&!l){c.errorRecoveryDisabledLanes|=o,Gl|=o,a=4;break a}o=Xl,Xl=a,o!==null&&(Xl===null?Xl=o:Xl.push.apply(Xl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){xu(e,0),vu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:vu(r,t,ql,!zl);break a;case 2:Xl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Ql+300-Oe(),10<a)){if(vu(r,t,ql,!zl),Je(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=qd(gu.bind(null,r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,`Throttled`,-0,0),a);break a}gu(r,n,Xl,tu,Zl,t,ql,Gl,Jl,zl,o,null,-0,0)}}break}while(1);rd(e)}function gu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},kl(t,a,d);var m=(a&62914560)===a?Ql-Oe():(a&4194048)===a?$l-Oe():0;if(m=Jf(d,m),m!==null){ou=a,e.cancelPendingCommit=m(Iu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),vu(e,a,o,!l);return}}Iu(e,t,a,n,r,i,o,s,c)}function _u(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vu(e,t,n,r){t&=~Kl,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Be(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&et(e,n,t)}function yu(){return Y&6?!0:(id(0,!1),!1)}function bu(){if(X!==null){if(Q===0)var e=X.return;else e=X,Vi=Bi=null,To(e),Ea=null,Da=0,e=X;for(;e!==null;)Lc(e.alternate,e),e=e.return;X=null}}function xu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,bu(),Ll=e,X=n=ii(e.current,null),Z=t,Q=0,Rl=null,zl=!1,Bl=Ye(e,t),Vl=!1,Jl=ql=Kl=Gl=Wl=Ul=0,Xl=Yl=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Be(r),a=1<<i;t|=e[i],r&=~a}return Hl=t,Jr(),n}function Su(e,t){q=null,j.H=Fs,t===ga||t===va?(t=wa(),Q=3):t===_a?(t=wa(),Q=4):Q=t===$s?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Rl=t,X===null&&(Ul=1,qs(e,fi(t,e.current)))}function Cu(){var e=Za.current;return e===null?!0:(Z&4194048)===Z?Qa===null:(Z&62914560)===Z||Z&536870912?e===Qa:!1}function wu(){var e=j.H;return j.H=Fs,e===null?Fs:e}function Tu(){var e=j.A;return j.A=Fl,e}function Eu(){Ul=4,zl||(Z&4194048)!==Z&&Za.current!==null||(Bl=!0),!(Wl&134217727)&&!(Gl&134217727)||Ll===null||vu(Ll,Z,ql,!1)}function Du(e,t,n){var r=Y;Y|=2;var i=wu(),a=Tu();(Ll!==e||Z!==t)&&(tu=null,xu(e,t)),t=!1;var o=Ul;a:do try{if(Q!==0&&X!==null){var s=X,c=Rl;switch(Q){case 8:bu(),o=6;break a;case 3:case 2:case 9:case 6:Za.current===null&&(t=!0);var l=Q;if(Q=0,Rl=null,Nu(e,s,c,l),n&&Bl){o=0;break a}break;default:l=Q,Q=0,Rl=null,Nu(e,s,c,l)}}Ou(),o=Ul;break}catch(t){Su(e,t)}while(1);return t&&e.shellSuspendCounter++,Vi=Bi=null,Y=r,j.H=i,j.A=a,X===null&&(Ll=null,Z=0,Jr()),o}function Ou(){for(;X!==null;)ju(X)}function ku(e,t){var n=Y;Y|=2;var r=wu(),a=Tu();Ll!==e||Z!==t?(tu=null,eu=Oe()+500,xu(e,t)):Bl=Ye(e,t);a:do try{if(Q!==0&&X!==null){t=X;var o=Rl;b:switch(Q){case 1:Q=0,Rl=null,Nu(e,t,o,1);break;case 2:case 9:if(ba(o)){Q=0,Rl=null,Mu(t);break}t=function(){Q!==2&&Q!==9||Ll!==e||(Q=7),rd(e)},o.then(t,t);break a;case 3:Q=7;break a;case 4:Q=5;break a;case 7:ba(o)?(Q=0,Rl=null,Mu(t)):(Q=0,Rl=null,Nu(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Gf(s):c.stateNode.complete){Q=0,Rl=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Pu(u))}break b}}Q=0,Rl=null,Nu(e,t,o,5);break;case 6:Q=0,Rl=null,Nu(e,t,o,6);break;case 8:bu(),Ul=6;break a;default:throw Error(i(462))}}Au();break}catch(t){Su(e,t)}while(1);return Vi=Bi=null,j.H=r,j.A=a,Y=n,X===null?(Ll=null,Z=0,Jr(),Ul):0}function Au(){for(;X!==null&&!Ee();)ju(X)}function ju(e){var t=kc(e.alternate,e,Hl);e.memoizedProps=e.pendingProps,t===null?Pu(e):X=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pc(n,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=pc(n,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:To(t);default:Lc(n,t),t=X=ai(t,Hl),t=kc(n,t,Hl)}e.memoizedProps=e.pendingProps,t===null?Pu(e):X=t}function Nu(e,t,n,r){Vi=Bi=null,To(t),Ea=null,Da=0;var i=t.return;try{if(Qs(e,i,t,n,Z)){Ul=1,qs(e,fi(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;Ul=1,qs(e,fi(n,e.current)),X=null;return}t.flags&32768?(K||r===1?e=!0:Bl||Z&536870912?e=!1:(zl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Za.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,zl);return}e=t.return;var n=Fc(t.alternate,t,Hl);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Ul===0&&(Ul=5)}function Fu(e,t){do{var n=Ic(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);Ul=6,X=null}function Iu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Vu();while(ru!==0);if(Y&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=qr,$e(e,n,o,s,c,l),e===Ll&&(X=Ll=null,Z=0),au=t,iu=e,ou=n,su=o,cu=a,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Me,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=Y,Y|=4;try{nl(e,t,n)}finally{Y=s,M.p=a,j.T=r}}ru=1,Lu(),Ru(),zu()}}function Lu(){if(ru===1){ru=0;var e=iu,t=au,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Y;Y|=4;try{hl(t,e);var a=Bd,o=xr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&br(s.ownerDocument.documentElement,s)){if(c!==null&&Sr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=yr(s,h),v=yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{Y=i,M.p=r,j.T=n}}e.current=t,ru=2}}function Ru(){if(ru===2){ru=0;var e=iu,t=au,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Y;Y|=4;try{rl(e,t.alternate,t)}finally{Y=i,M.p=r,j.T=n}}ru=3}}function zu(){if(ru===4||ru===3){ru=0,De();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,Bu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(nu=null),it(n),t=t.stateNode,Re&&typeof Re.onCommitFiberRoot==`function`)try{Re.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}ou&3&&Vu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===du?uu++:(uu=0,du=e):uu=0,id(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ra(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=it(ou),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=cu,cu=null;var o=iu,s=ou;if(ru=0,au=iu=null,ou=0,Y&6)throw Error(i(331));var c=Y;if(Y|=4,Ml(o.current),wl(o,o.current,s,n),Y=c,id(0,!1),Re&&typeof Re.onPostCommitFiberRoot==`function`)try{Re.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{M.p=a,j.T=r,Bu(e,t)}}function Uu(e,t,n){t=fi(n,t),t=Ys(e.stateNode,t,2),e=Ra(e,t,2),e!==null&&(I(e,2),rd(e))}function Wu(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=fi(n,e),n=Xs(2),r=Ra(t,n,2),r!==null&&(Zs(n,r,t,e),I(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Il;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Vl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ll===e&&(Z&n)===n&&(Ul===4||Ul===3&&(Z&62914560)===Z&&300>Oe()-Ql?!(Y&2)&&xu(e,0):Kl|=n,Jl===Z&&(Jl=0)),rd(e)}function qu(e,t){t===0&&(t=Ze()),e=Zr(e,t),e!==null&&(I(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return we(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Be(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Z,a=Je(r,r===Ll?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=Oe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}ru!==0&&ru!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Be(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ll,n=Z,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Q===2||Q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Te(r),it(n)){case 2:case 8:n=je;break;case 32:n=Me;break;case 268435456:n=Pe;break;default:n=Me}return r=cd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Te(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=Z;return r=Je(e,e===Ll?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(hu(e,r,t),sd(e,Oe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Vu())return null;hu(e,t,!0)}function ud(){Xd(function(){Y&6?we(Ae,ad):od()})}function dd(){if(nd===0){var e=oa;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Xt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[lt]||null).action),o=r.submitter;o&&(t=(t=o[lt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new _n(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Hr.length;hd++){var gd=Hr[hd];Ur(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Ur(Pr,`onAnimationEnd`),Ur(Fr,`onAnimationIteration`),Ur(Ir,`onAnimationStart`),Ur(`dblclick`,`onDoubleClick`),Ur(`focusin`,`onFocus`),Ur(`focusout`,`onBlur`),Ur(Lr,`onTransitionRun`),Ur(Rr,`onTransitionStart`),Ur(zr,`onTransitionCancel`),Ur(Br,`onTransitionEnd`),z(`onMouseEnter`,[`mouseout`,`mouseover`]),z(`onMouseLeave`,[`mouseout`,`mouseover`]),z(`onPointerEnter`,[`pointerout`,`pointerover`]),z(`onPointerLeave`,[`pointerout`,`pointerover`]),R(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),R(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),R(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),R(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Wr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}rn(function(){var r=a,i=Qt(n),s=[];a:{var c=Vr.get(e);if(c!==void 0){var l=_n,u=e;switch(e){case`keypress`:if(pn(n)===0)break a;case`keydown`:case`keyup`:l=Fn;break;case`focusin`:u=`focus`,l=En;break;case`focusout`:u=`blur`,l=En;break;case`beforeblur`:case`afterblur`:l=En;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Tn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=In;break;case Pr:case Fr:case Ir:l=Dn;break;case Br:l=Ln;break;case`scroll`:case`scrollend`:l=yn;break;case`wheel`:l=Rn;break;case`copy`:case`cut`:case`paste`:l=On;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=W;break;case`toggle`:case`beforetoggle`:l=zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=an(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Zt&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=W,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ar;else if($n(c))if(or)v=mr;else{v=fr;var y=dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=ar):v=pr;if(v&&=v(e,r)){er(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:($n(y)||y.contentEditable===`true`)&&(wr=y,Tr=r,Er=null);break;case`focusout`:Er=Tr=wr=null;break;case`mousedown`:Dr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Dr=!1,Or(s,n,i);break;case`selectionchange`:if(Cr)break;case`keydown`:case`keyup`:Or(s,n,i)}var b;if(Vn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Yn?qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Wn&&n.locale!==`ko`&&(Yn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Yn&&(b=fn()):(ln=i,un=`value`in ln?ln.value:ln.textContent,Yn=!0)),y=Ed(r,x),0<y.length&&(x=new kn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Jn(n),b!==null&&(x.data=b)))),(b=Un?Xn(e,n):Zn(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=an(e,n),i!=null&&r.unshift(Td(e,i,a)),i=an(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=an(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=an(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=H);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Xt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),B(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:B(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,B(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=H);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[lt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):B(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)$(_d[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=M.d;M.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=yu();return e||t}function bf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Cs(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=bt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);xt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=bt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),xt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=bt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),xt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=ue.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Lt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),xt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Lt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,xt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=na(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Fa(a),e}function np(e){return e?(e=ei,e):ei}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=La(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ra(e,r,t),n!==null&&(mu(n,e,t),za(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Zr(e,67108864);t!==null&&mu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=fu();t=rt(t);var n=Zr(e,t);n!==null&&mu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,dp(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,dp(e,t,n,r)}finally{M.p=a,j.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)wd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Be(o);s.entanglements[1]|=c,o&=~c}rd(a),!(Y&6)&&(eu=Oe()+500,id(0,!1))}}break;case 31:case 13:s=Zr(a,2),s!==null&&mu(s,a,2),yu(),ap(a,2)}if(a=fp(r),a===null&&wd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function fp(e){return e=Qt(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ke()){case Ae:return 2;case je:return 8;case Me:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ot(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ot(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zt=r,n.target.dispatchEvent(r),Zt=null}else return t=vt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[lt]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[lt]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,fu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),yu(),t[ut]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=at();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.4`)throw Error(i(527,Rp,`19.2.4`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Le=Bp.inject(zp),Re=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ws,s=Gs,c=Ks;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ut]=t.current,Sd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/EvidenceX/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return te(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return O(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function D(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||ee(),unstable_mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function O(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=D(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=D(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ie(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ie(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ne(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function k(e,t,n=`/`){return A(e,t,n,!1)}function A(e,t,n,r){let i=_e((typeof t==`string`?re(t):t).pathname||`/`,n);if(i==null)return null;let a=M(e);P(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=ge(i);o=pe(a[e],t,r)}return o}function j(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function M(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Te([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),M(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:de(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of N(e.path))a(e,t,!0,n)}),t}function N(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=N(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function P(e){e.sort((e,t)=>e.score===t.score?fe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var F=/^:[\w-]+$/,ae=3,oe=2,se=1,ce=10,le=-2,ue=e=>e===`*`;function de(e,t){let n=e.split(`/`),r=n.length;return n.some(ue)&&(r+=le),t&&(r+=oe),n.filter(e=>!ue(e)).reduce((e,t)=>e+(F.test(t)?ae:t===``?se:ce),r)}function fe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function pe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=me({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=me({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Te([a,u.pathname]),pathnameBase:Ee(Te([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Te([a,u.pathnameBase]))}return o}function me(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=he(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function he(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ge(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _e(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ve=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ye(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?be(n.substring(1),`/`):be(n,t)):a=t,{pathname:a,search:De(r),hash:Oe(i)}}function be(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function xe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Se(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ce(e){let t=Se(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function we(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),xe(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),xe(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),xe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ye(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Te=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ee=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),De=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Oe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ke=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ae(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function je(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Me=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ne(e,t){let n=e;if(typeof n!=`string`||!ve.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Me)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=_e(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Pe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Pe);var Fe=[`GET`,...Pe];new Set(Fe);var Ie=x.createContext(null);Ie.displayName=`DataRouter`;var Le=x.createContext(null);Le.displayName=`DataRouterState`;var Re=x.createContext(!1);function ze(){return x.useContext(Re)}var Be=x.createContext({isTransitioning:!1});Be.displayName=`ViewTransition`;var Ve=x.createContext(new Map);Ve.displayName=`Fetchers`;var He=x.createContext(null);He.displayName=`Await`;var Ue=x.createContext(null);Ue.displayName=`Navigation`;var We=x.createContext(null);We.displayName=`Location`;var Ge=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ge.displayName=`Route`;var Ke=x.createContext(null);Ke.displayName=`RouteError`;var qe=`REACT_ROUTER_ERROR`,Je=`REDIRECT`,Ye=`ROUTE_ERROR_RESPONSE`;function Xe(e){if(e.startsWith(`${qe}:${Je}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function Ze(e){if(e.startsWith(`${qe}:${Ye}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ke(t.status,t.statusText,t.data)}catch{}}function Qe(e,{relative:t}={}){T(I(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Ue),{hash:i,pathname:a,search:o}=it(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Te([n,a])),r.createHref({pathname:s,search:o,hash:i})}function I(){return x.useContext(We)!=null}function $e(){return T(I(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(We).location}var et=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function tt(e){x.useContext(Ue).static||x.useLayoutEffect(e)}function nt(){let{isDataRoute:e}=x.useContext(Ge);return e?Ct():rt()}function rt(){T(I(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ie),{basename:t,navigator:n}=x.useContext(Ue),{matches:r}=x.useContext(Ge),{pathname:i}=$e(),a=JSON.stringify(Ce(r)),o=x.useRef(!1);return tt(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(E(o.current,et),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=we(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Te([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function it(e,{relative:t}={}){let{matches:n}=x.useContext(Ge),{pathname:r}=$e(),i=JSON.stringify(Ce(n));return x.useMemo(()=>we(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function at(e,t){return ot(e,t)}function ot(e,t,n){T(I(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Ue),{matches:i}=x.useContext(Ge),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;z(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=$e(),d;if(t){let e=typeof t==`string`?re(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=k(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=pt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Te([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Te([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(We.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function st(){let e=St(),t=Ae(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var ct=x.createElement(st,null),lt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=Ze(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(Ge.Provider,{value:this.props.routeContext},x.createElement(Ke.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(dt,{error:e},t):t}};lt.contextType=Re;var ut=new WeakMap;function dt({children:e,error:t}){let{basename:n}=x.useContext(Ue);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Xe(t.digest);if(e){let r=ut.get(t);if(r)throw r;let i=Ne(e.location,n);if(Me&&!ut.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw ut.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function ft({routeContext:e,match:t,children:n}){let r=x.useContext(Ie);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ge.Provider,{value:e},n)}function pt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:je(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||ct,o&&(s<0&&c===0?(z(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(ft,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(lt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function mt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ht(e){let t=x.useContext(Ie);return T(t,mt(e)),t}function gt(e){let t=x.useContext(Le);return T(t,mt(e)),t}function _t(e){let t=x.useContext(Ge);return T(t,mt(e)),t}function vt(e){let t=_t(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function yt(){return vt(`useRouteId`)}function bt(){return gt(`useNavigation`).navigation}function xt(){let{matches:e,loaderData:t}=gt(`useMatches`);return x.useMemo(()=>e.map(e=>j(e,t)),[e,t])}function St(){let e=x.useContext(Ke),t=gt(`useRouteError`),n=vt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ct(){let{router:e}=ht(`useNavigate`),t=vt(`useNavigate`),n=x.useRef(!1);return tt(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{E(n.current,et),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var R={};function z(e,t,n){!t&&!R[e]&&(R[e]=!0,E(!1,n))}x.useOptimistic,x.memo(wt);function wt({routes:e,future:t,state:n,isStatic:r,onError:i}){return ot(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Tt({to:e,replace:t,state:n,relative:r}){T(I(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext(Ue);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(Ge),{pathname:o}=$e(),s=nt(),c=we(e,Ce(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Et(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Dt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!I(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=_e(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Ue.Provider,{value:c},x.createElement(We.Provider,{children:t,value:h}))}function B({children:e,location:t}){return at(Ot(e),t)}x.Component;function Ot(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ot(e.props.children,i));return}T(e.type===Et,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ot(e.props.children,i)),n.push(a)}),n}var kt=`get`,At=`application/x-www-form-urlencoded`;function jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Mt(e){return jt(e)&&e.tagName.toLowerCase()===`button`}function Nt(e){return jt(e)&&e.tagName.toLowerCase()===`form`}function Pt(e){return jt(e)&&e.tagName.toLowerCase()===`input`}function Ft(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function It(e,t){return e.button===0&&(!t||t===`_self`)&&!Ft(e)}var Lt=null;function Rt(){if(Lt===null)try{new FormData(document.createElement(`form`),0),Lt=!1}catch{Lt=!0}return Lt}var zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Bt(e){return e!=null&&!zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${At}"`),null):e}function Vt(e,t){let n,r,i,a,o;if(Nt(e)){let o=e.getAttribute(`action`);r=o?_e(o,t):null,n=e.getAttribute(`method`)||kt,i=Bt(e.getAttribute(`enctype`))||At,a=new FormData(e)}else if(Mt(e)||Pt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?_e(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||kt,i=Bt(e.getAttribute(`formenctype`))||Bt(o.getAttribute(`enctype`))||At,a=new FormData(o,e),!Rt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=kt,r=null,i=At,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ht={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Ut=/[&><\u2028\u2029]/g;function Wt(e){return e.replace(Ut,e=>Ht[e])}function Gt(e,t){if(e===!1||e==null)throw Error(t)}function Kt(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&_e(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function qt(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jt(e){return e!=null&&typeof e.page==`string`}function Yt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function V(e,t,n){return $t((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await qt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Yt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Xt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function H(e,t,{includeHydrateFallback:n}={}){return Zt(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Zt(e){return[...new Set(e)]}function Qt(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function $t(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Jt(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Qt(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function en(){let e=x.useContext(Ie);return Gt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function tn(){let e=x.useContext(Le);return Gt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var nn=x.createContext(void 0);nn.displayName=`FrameworkContext`;function rn(){let e=x.useContext(nn);return Gt(e,`You must render this element inside a <HydratedRouter> element`),e}function an(e,t){let n=x.useContext(nn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:on(s,p),onBlur:on(c,m),onMouseEnter:on(l,p),onMouseLeave:on(u,m),onTouchStart:on(d,p)}]:[a,f,{}]:[!1,f,{}]}function on(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function sn({page:e,...t}){let n=ze(),{router:r}=en(),i=x.useMemo(()=>k(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(ln,{page:e,matches:i,...t}):x.createElement(un,{page:e,matches:i,...t}):null}function cn(e){let{manifest:t,routeModules:n}=rn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return V(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function ln({page:e,matches:t,...n}){let r=$e(),{future:i}=rn(),{basename:a}=en(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=Kt(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function un({page:e,matches:t,...n}){let r=$e(),{future:i,manifest:a,routeModules:o}=rn(),{basename:s}=en(),{loaderData:c,matches:l}=tn(),u=x.useMemo(()=>Xt(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>Xt(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=Kt(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>H(d,a),[d,a]),m=cn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function dn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var fn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{fn&&(window.__reactRouterVersion=`7.14.0`)}catch{}function pn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Dt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function U({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Dt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}U.displayName=`unstable_HistoryRouter`;var mn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(Ue),v=typeof l==`string`&&mn.test(l),y=Ne(l,h);l=y.to;let b=Qe(l,{relative:r}),S=$e(),C=null;if(o){let e=we(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Te([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=an(n,p),ee=Sn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||ee(t)}let te=!(y.isExternal||i),ne=x.createElement(`a`,{...p,...E,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:dn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?x.createElement(x.Fragment,null,ne,x.createElement(sn,{page:b})):ne});hn.displayName=`Link`;var gn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=it(a,{relative:c.relative}),d=$e(),f=x.useContext(Le),{navigator:p,basename:m}=x.useContext(Ue),h=f!=null&&Mn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=_e(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(hn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});gn.displayName=`NavLink`;var _n=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(Ue),g=Tn(),_=En(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&mn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});_n.displayName=`Form`;function vn({getKey:e,storageKey:t,...n}){let r=x.useContext(nn),{basename:i}=x.useContext(Ue),a=$e(),o=xt();An({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=kn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${Wt(JSON.stringify(t||Dn))}, ${Wt(JSON.stringify(s))})`}})}vn.displayName=`ScrollRestoration`;function yn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bn(e){let t=x.useContext(Ie);return T(t,yn(e)),t}function xn(e){let t=x.useContext(Le);return T(t,yn(e)),t}function Sn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=nt(),d=$e(),f=it(e,{relative:o});return x.useCallback(p=>{if(It(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Cn=0,wn=()=>`__${String(++Cn)}__`;function Tn(){let{router:e}=bn(`useSubmit`),{basename:t}=x.useContext(Ue),n=yt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Vt(e,t);a.navigate===!1?await r(a.fetcherKey||wn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function En(e,{relative:t}={}){let{basename:n}=x.useContext(Ue),r=x.useContext(Ge);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...it(e||`.`,{relative:t})},o=$e();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Te([n,a.pathname])),ne(a)}var Dn=`react-router-scroll-positions`,On={};function kn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:_e(e.pathname,n)||e.pathname},t)),i??=e.key,i}function An({getKey:e,storageKey:t}={}){let{router:n}=bn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=xn(`useScrollRestoration`),{basename:a}=x.useContext(Ue),o=$e(),s=xt(),c=bt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),jn(x.useCallback(()=>{if(c.state===`idle`){let t=kn(o,s,a,e);On[t]=window.scrollY}try{sessionStorage.setItem(t||Dn,JSON.stringify(On))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Dn);e&&(On=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(On,()=>window.scrollY,e?(t,n)=>kn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function jn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Mn(e,{relative:t}={}){let n=x.useContext(Be);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bn(`useViewTransitionState`),i=it(e,{relative:t});if(!n.isTransitioning)return!1;let a=_e(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_e(n.nextLocation.pathname,r)||n.nextLocation.pathname;return me(i.pathname,o)!=null||me(i.pathname,a)!=null}var Nn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Pn=o(((e,t)=>{t.exports=Nn()})),Fn=c(g(),1),W=Pn(),In=(0,x.createContext)(null),Ln=`http://localhost:3001/api`;function Rn({children:e}){let[t,n]=(0,x.useState)(null),[r,i]=(0,x.useState)(!0);return(0,x.useEffect)(()=>{let e=localStorage.getItem(`evidencex_user`);if(e)try{n(JSON.parse(e))}catch{}i(!1)},[]),(0,W.jsx)(In.Provider,{value:{user:t,login:async(e,t)=>{try{let r=await fetch(`${Ln}/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,password:t})}),i=await r.json();return r.ok&&i.token?(n(i.user),localStorage.setItem(`evidencex_user`,JSON.stringify(i.user)),localStorage.setItem(`evidencex_token`,i.token),{success:!0}):{success:!1,error:i.error||`Invalid credentials`}}catch{return{success:!1,error:`Failed to connect to server`}}},register:async(e,t,r)=>{try{let i=await fetch(`${Ln}/register`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:e,email:t,password:r})}),a=await i.json();return i.ok&&a.token?(n(a.user),localStorage.setItem(`evidencex_user`,JSON.stringify(a.user)),localStorage.setItem(`evidencex_token`,a.token),{success:!0}):{success:!1,error:a.error||`Registration failed`}}catch{return{success:!1,error:`Failed to connect to server`}}},logout:()=>{n(null),localStorage.removeItem(`evidencex_user`),localStorage.removeItem(`evidencex_token`)},loading:r},children:e})}function zn(){let e=(0,x.useContext)(In);if(!e)throw Error(`useAuth must be used within AuthProvider`);return e}var Bn=(0,x.createContext)(null),Vn=`evidencex_investigations`,Hn=`evidencex_active_investigation`,Un=`evidencex_theme`,Wn={suspects:[],evidenceFiles:[],analysisResults:[],networkData:{nodes:[],links:[]},timelineEvents:[],cdrData:[],towerLocations:{},crossEvidenceLinks:[],aiInsights:[],movementPatterns:[],recentActivity:[]};function Gn(e,t){if(!t||t.length===0)return{nodes:[],links:[]};let n=new Map;t.forEach(t=>{if(!n.has(t.source)){let r=e.find(e=>e.name===t.source);n.set(t.source,{id:t.source,type:r?`person`:`location`,risk:r?.risk||`medium`,group:r?1:4})}if(!n.has(t.target)){let r=e.find(e=>e.name===t.target);n.set(t.target,{id:t.target,type:r?`person`:`location`,risk:r?.risk||`medium`,group:r?1:4})}});let r=t.map(e=>({source:e.source,target:e.target,strength:e.strength,calls:e.calls&&parseInt(e.calls)||null,label:e.label}));return{nodes:Array.from(n.values()),links:r}}function Kn(e){if(!e||e.length===0)return{};let t={};return e.forEach(e=>{t[e.towerId]={lat:parseFloat(e.lat),lng:parseFloat(e.lng),name:e.name,area:e.area}}),t}function qn(){return Date.now().toString(36)+Math.random().toString(36).substring(2,7)}function Jn(){try{let e=localStorage.getItem(Vn);if(e)return JSON.parse(e)}catch{}return[]}function Yn(e){try{localStorage.setItem(Vn,JSON.stringify(e))}catch{}}function Xn(e){try{let t=localStorage.getItem(`evidencex_data_${e}`);if(t){let e=JSON.parse(t);return{...Wn,...e}}}catch{}return{...Wn}}function Zn(e,t){try{localStorage.setItem(`evidencex_data_${e}`,JSON.stringify(t))}catch{}}function Qn({children:e}){let[t,n]=(0,x.useState)(()=>localStorage.getItem(Un)||`dark`),[r,i]=(0,x.useState)(()=>{let e=Jn();if(e.length===0){let e={id:qn(),name:`Investigation 1`,createdAt:new Date().toISOString()};return Yn([e]),localStorage.setItem(Hn,e.id),[e]}return e}),[a,o]=(0,x.useState)(()=>localStorage.getItem(Hn)||Jn()[0]?.id||``),[s,c]=(0,x.useState)(()=>Xn(a));(0,x.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,t),localStorage.setItem(Un,t)},[t]),(0,x.useEffect)(()=>{a&&Zn(a,s)},[s,a]);let l=(0,x.useCallback)(()=>{n(e=>e===`dark`?`light`:`dark`)},[]),u=(0,x.useCallback)(e=>{o(e),localStorage.setItem(Hn,e),c(Xn(e))},[]),d=(0,x.useCallback)(e=>{let t={id:qn(),name:e||`Investigation ${r.length+1}`,createdAt:new Date().toISOString()},n=[...r,t];return i(n),Yn(n),o(t.id),localStorage.setItem(Hn,t.id),c({...Wn}),t},[r]),f=(0,x.useCallback)(e=>{if(r.length<=1)return;let t=r.filter(t=>t.id!==e);i(t),Yn(t);try{localStorage.removeItem(`evidencex_data_${e}`)}catch{}if(e===a){let e=t[0].id;o(e),localStorage.setItem(Hn,e),c(Xn(e))}},[r,a]),p=(0,x.useCallback)((e,t)=>{let n=r.map(n=>n.id===e?{...n,name:t}:n);i(n),Yn(n)},[r]),m=(0,x.useCallback)((e,t)=>{c(n=>{let r={...n};switch(e){case`suspects`:r.suspects=t.map(e=>({...e,age:parseInt(e.age)||0,score:parseInt(e.score)||0,image:null})),n._rawConnections&&(r.networkData=Gn(r.suspects,n._rawConnections));break;case`cdr_data`:r.cdrData=t.map((e,t)=>({...e,id:parseInt(e.id)||t+1,lat:parseFloat(e.lat),lng:parseFloat(e.lng)}));break;case`evidence_files`:r.evidenceFiles=t.map(e=>({...e,uploadTime:e.uploadTime||new Date().toLocaleString()}));break;case`timeline_events`:r.timelineEvents=t;break;case`tower_locations`:r.towerLocations=Kn(t),r._rawTowers=t;break;case`network_connections`:r._rawConnections=t,r.networkData=Gn(r.suspects,t);break;case`movement_patterns`:r.movementPatterns=t.map(e=>({...e,visits:e.visits?parseInt(e.visits):null,times:e.times?e.times.split(`|`):null}));break;case`analysis_results`:r.analysisResults=t;break;case`cross_evidence_links`:r.crossEvidenceLinks=t.map(e=>({...e,confidence:parseInt(e.confidence)||0,evidence:typeof e.evidence==`string`?e.evidence.split(`|`):e.evidence||[],suspects:typeof e.suspects==`string`?e.suspects.split(`|`):e.suspects||[]}));break;case`ai_insights`:r.aiInsights=t.map(e=>({...e,confidence:parseInt(e.confidence)||0,suspects:typeof e.suspects==`string`?e.suspects.split(`|`):e.suspects||[]}));break;default:break}return r.recentActivity=[{time:`Just now`,action:`Dataset imported: ${e.replace(/_/g,` `)}`,detail:`${t.length} records loaded`,type:`upload`},...n.recentActivity.slice(0,9)],r})},[]),h=(0,x.useCallback)(e=>{c(t=>{let n={...t};switch(e){case`suspects`:n.suspects=[];break;case`cdr_data`:n.cdrData=[];break;case`evidence_files`:n.evidenceFiles=[];break;case`timeline_events`:n.timelineEvents=[];break;case`tower_locations`:n.towerLocations={},n._rawTowers=[];break;case`network_connections`:n._rawConnections=[],n.networkData={nodes:[],links:[]};break;case`movement_patterns`:n.movementPatterns=[];break;case`analysis_results`:n.analysisResults=[];break;case`cross_evidence_links`:n.crossEvidenceLinks=[];break;case`ai_insights`:n.aiInsights=[];break;default:break}return n})},[]),g=(0,x.useCallback)(()=>{c({...Wn}),a&&Zn(a,{...Wn})},[a]),_=(0,x.useCallback)(e=>{switch(e){case`suspects`:return s.suspects.length;case`cdr_data`:return s.cdrData.length;case`evidence_files`:return s.evidenceFiles.length;case`timeline_events`:return s.timelineEvents.length;case`tower_locations`:return Object.keys(s.towerLocations).length;case`network_connections`:return s.networkData.links.length;case`movement_patterns`:return s.movementPatterns.length;case`analysis_results`:return s.analysisResults.length;case`cross_evidence_links`:return s.crossEvidenceLinks.length;case`ai_insights`:return s.aiInsights.length;default:return 0}},[s]),v=r.find(e=>e.id===a);return(0,W.jsx)(Bn.Provider,{value:{...s,importDataset:m,clearDataset:h,clearAllData:g,getRecordCount:_,theme:t,toggleTheme:l,investigations:r,activeInvestigation:v,activeInvestigationId:a,switchInvestigation:u,createInvestigation:d,deleteInvestigation:f,renameInvestigation:p},children:e})}function $n(){let e=(0,x.useContext)(Bn);if(!e)throw Error(`useData must be used within DataProvider`);return e}var er=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),tr=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),nr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),rr=e=>{let t=nr(e);return t.charAt(0).toUpperCase()+t.slice(1)},ir={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ar=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},or=(0,x.createContext)({}),sr=()=>(0,x.useContext)(or),cr=(0,x.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=sr()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,x.createElement)(`svg`,{ref:c,...ir,width:t??l??ir.width,height:t??l??ir.height,stroke:e??f,strokeWidth:m,className:er(`lucide`,p,i),...!a&&!ar(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,x.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),G=(e,t)=>{let n=(0,x.forwardRef)(({className:n,...r},i)=>(0,x.createElement)(cr,{ref:i,iconNode:t,className:er(`lucide-${tr(rr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=rr(e),n},lr=G(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),ur=G(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),dr=G(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),fr=G(`camera`,[[`path`,{d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,key:`18u6gg`}],[`circle`,{cx:`12`,cy:`13`,r:`3`,key:`1vg3eu`}]]),pr=G(`car`,[[`path`,{d:`M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,key:`5owen`}],[`circle`,{cx:`7`,cy:`17`,r:`2`,key:`u2ysq9`}],[`path`,{d:`M9 17h6`,key:`r8uit2`}],[`circle`,{cx:`17`,cy:`17`,r:`2`,key:`axvx0g`}]]),mr=G(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),hr=G(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),gr=G(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),_r=G(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),vr=G(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),yr=G(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),br=G(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),xr=G(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Sr=G(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),Cr=G(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),wr=G(`dollar-sign`,[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]),Tr=G(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Er=G(`eye-off`,[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),Dr=G(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Or=G(`file-image`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`circle`,{cx:`10`,cy:`12`,r:`2`,key:`737tya`}],[`path`,{d:`m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22`,key:`wt3hpn`}]]),kr=G(`file-play`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z`,key:`1tzo1f`}]]),Ar=G(`file-stack`,[[`path`,{d:`M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1`,key:`likhh7`}],[`path`,{d:`M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1`,key:`17ky3x`}],[`path`,{d:`M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z`,key:`1hyeo0`}]]),jr=G(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Mr=G(`file`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}]]),Nr=G(`fingerprint-pattern`,[[`path`,{d:`M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`,key:`1nerag`}],[`path`,{d:`M14 13.12c0 2.38 0 6.38-1 8.88`,key:`o46ks0`}],[`path`,{d:`M17.29 21.02c.12-.6.43-2.3.5-3.02`,key:`ptglia`}],[`path`,{d:`M2 12a10 10 0 0 1 18-6`,key:`ydlgp0`}],[`path`,{d:`M2 16h.01`,key:`1gqxmh`}],[`path`,{d:`M21.8 16c.2-2 .131-5.354 0-6`,key:`drycrb`}],[`path`,{d:`M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`,key:`1tidbn`}],[`path`,{d:`M8.65 22c.21-.66.45-1.32.57-2`,key:`13wd9y`}],[`path`,{d:`M9 6.8a6 6 0 0 1 9 5.2v2`,key:`1fr1j5`}]]),Pr=G(`folder-plus`,[[`path`,{d:`M12 10v6`,key:`1bos4e`}],[`path`,{d:`M9 13h6`,key:`1uhe8q`}],[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),Fr=G(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),Ir=G(`gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),Lr=G(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Rr=G(`layout-dashboard`,[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`,key:`10lvy0`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`,key:`16une8`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`,key:`1hutg5`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`ldoo1y`}]]),zr=G(`link-2`,[[`path`,{d:`M9 17H7A5 5 0 0 1 7 7h2`,key:`8i5ue5`}],[`path`,{d:`M15 7h2a5 5 0 1 1 0 10h-2`,key:`1b9ql8`}],[`line`,{x1:`8`,x2:`16`,y1:`12`,y2:`12`,key:`1jonct`}]]),Br=G(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Vr=G(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Hr=G(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Ur=G(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),Wr=G(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),Gr=G(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Kr=G(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),qr=G(`package`,[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]),Jr=G(`pencil`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]),Yr=G(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Xr=G(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Zr=G(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),Qr=G(`radio`,[[`path`,{d:`M16.247 7.761a6 6 0 0 1 0 8.478`,key:`1fwjs5`}],[`path`,{d:`M19.075 4.933a10 10 0 0 1 0 14.134`,key:`ehdyv1`}],[`path`,{d:`M4.925 19.067a10 10 0 0 1 0-14.134`,key:`1q22gi`}],[`path`,{d:`M7.753 16.239a6 6 0 0 1 0-8.478`,key:`r2q7qm`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),$r=G(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),ei=G(`repeat`,[[`path`,{d:`m17 2 4 4-4 4`,key:`nntrym`}],[`path`,{d:`M3 11v-1a4 4 0 0 1 4-4h14`,key:`84bu3i`}],[`path`,{d:`m7 22-4-4 4-4`,key:`1wqhfi`}],[`path`,{d:`M21 13v1a4 4 0 0 1-4 4H3`,key:`1rx37r`}]]),ti=G(`rotate-cw`,[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]),ni=G(`route`,[[`circle`,{cx:`6`,cy:`19`,r:`3`,key:`1kj8tv`}],[`path`,{d:`M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15`,key:`1d8sl`}],[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}]]),ri=G(`scan-search`,[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`path`,{d:`m16 16-1.9-1.9`,key:`1dq9hf`}]]),ii=G(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),ai=G(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),oi=G(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),si=G(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),ci=G(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),li=G(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),ui=G(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),di=G(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),fi=G(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),pi=G(`user-plus`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]),mi=G(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),hi=G(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),gi=G(`video`,[[`path`,{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,key:`ftymec`}],[`rect`,{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`,key:`158x01`}]]),_i=G(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),vi=G(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),yi=[{path:`/`,label:`Dashboard`,icon:Rr},{path:`/import`,label:`Import Datasets`,icon:Cr},{path:`/evidence`,label:`Evidence Upload`,icon:fi},{path:`/cctv`,label:`CCTV Detection`,icon:fr},{path:`/analysis`,label:`AI Analysis`,icon:ri},{path:`/network`,label:`Suspect Network`,icon:Kr},{path:`/timeline`,label:`Timeline View`,icon:Sr},{path:`/geolocation`,label:`Geo-Location`,icon:Hr},{path:`/scores`,label:`Suspicion Scores`,icon:Ir},{path:`/cross-evidence`,label:`Cross-Evidence`,icon:zr},{path:`/insights`,label:`AI Insights`,icon:ur},{path:`/movement`,label:`Movement Patterns`,icon:ni},{path:`/report`,label:`Case Report`,icon:jr}];function bi(){let{user:e,logout:t}=zn(),{theme:n,toggleTheme:r,investigations:i,activeInvestigation:a,activeInvestigationId:o,switchInvestigation:s,createInvestigation:c,deleteInvestigation:l,renameInvestigation:u}=$n(),[d,f]=(0,x.useState)(!1),[p,m]=(0,x.useState)(!1),[h,g]=(0,x.useState)(null),[_,v]=(0,x.useState)(``),[y,b]=(0,x.useState)(!1),[S,C]=(0,x.useState)(``),w=$e(),T=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=e=>{T.current&&!T.current.contains(e.target)&&m(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let E=()=>{c(S.trim()||`Investigation ${i.length+1}`),C(``),b(!1)},ee=e=>{_.trim()&&u(e,_.trim()),g(null),v(``)};return(0,W.jsxs)(`aside`,{className:`sidebar ${d?`sidebar-collapsed`:``}`,children:[(0,W.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,W.jsx)(`div`,{className:`sidebar-logo`,children:(0,W.jsx)(oi,{size:28,strokeWidth:2.5})}),!d&&(0,W.jsxs)(`div`,{className:`sidebar-brand-text`,children:[(0,W.jsx)(`span`,{className:`brand-name`,children:`EvidenceX`}),(0,W.jsx)(`span`,{className:`brand-tag`,children:`Investigation System`})]}),(0,W.jsx)(`button`,{className:`sidebar-toggle`,onClick:()=>f(!d),children:d?(0,W.jsx)(vr,{size:16}):(0,W.jsx)(_r,{size:16})})]}),!d&&(0,W.jsxs)(`div`,{className:`inv-switcher`,ref:T,children:[(0,W.jsxs)(`button`,{className:`inv-current`,onClick:()=>m(!p),children:[(0,W.jsxs)(`div`,{className:`inv-current-info`,children:[(0,W.jsx)(`span`,{className:`inv-current-label`,children:`Active Case`}),(0,W.jsx)(`span`,{className:`inv-current-name`,children:a?.name||`No Investigation`})]}),(0,W.jsx)(gr,{size:14,className:`inv-chevron ${p?`open`:``}`})]}),p&&(0,W.jsxs)(`div`,{className:`inv-dropdown`,children:[(0,W.jsxs)(`div`,{className:`inv-dropdown-header`,children:[(0,W.jsx)(`span`,{children:`Investigations`}),(0,W.jsx)(`button`,{className:`inv-new-btn`,onClick:()=>b(!0),title:`New Investigation`,children:(0,W.jsx)(Pr,{size:14})})]}),y&&(0,W.jsxs)(`div`,{className:`inv-new-input`,children:[(0,W.jsx)(`input`,{type:`text`,value:S,onChange:e=>C(e.target.value),placeholder:`Case name...`,autoFocus:!0,onKeyDown:e=>{e.key===`Enter`&&E(),e.key===`Escape`&&b(!1)}}),(0,W.jsx)(`button`,{onClick:E,children:(0,W.jsx)(hr,{size:12})}),(0,W.jsx)(`button`,{onClick:()=>b(!1),children:(0,W.jsx)(_i,{size:12})})]}),(0,W.jsx)(`div`,{className:`inv-list`,children:i.map(e=>(0,W.jsx)(`div`,{className:`inv-item ${e.id===o?`active`:``}`,children:h===e.id?(0,W.jsxs)(`div`,{className:`inv-edit-row`,children:[(0,W.jsx)(`input`,{type:`text`,value:_,onChange:e=>v(e.target.value),autoFocus:!0,onKeyDown:t=>{t.key===`Enter`&&ee(e.id),t.key===`Escape`&&g(null)}}),(0,W.jsx)(`button`,{onClick:()=>ee(e.id),children:(0,W.jsx)(hr,{size:12})})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`button`,{className:`inv-item-btn`,onClick:()=>{s(e.id),m(!1)},children:[(0,W.jsx)(`span`,{className:`inv-item-name`,children:e.name}),e.id===o&&(0,W.jsx)(`span`,{className:`inv-active-dot`})]}),(0,W.jsxs)(`div`,{className:`inv-item-actions`,children:[(0,W.jsx)(`button`,{onClick:()=>{g(e.id),v(e.name)},title:`Rename`,children:(0,W.jsx)(Jr,{size:11})}),i.length>1&&(0,W.jsx)(`button`,{onClick:()=>l(e.id),title:`Delete`,className:`inv-delete`,children:(0,W.jsx)(li,{size:11})})]})]})},e.id))})]})]}),(0,W.jsx)(`nav`,{className:`sidebar-nav`,children:yi.map(e=>{let t=e.icon,n=w.pathname===e.path;return(0,W.jsxs)(gn,{to:e.path,className:`sidebar-link ${n?`active`:``}`,title:d?e.label:void 0,children:[(0,W.jsx)(t,{size:20}),!d&&(0,W.jsx)(`span`,{children:e.label}),n&&(0,W.jsx)(`div`,{className:`sidebar-active-indicator`})]},e.path)})}),(0,W.jsxs)(`div`,{className:`sidebar-footer`,children:[(0,W.jsxs)(`button`,{className:`sidebar-link theme-toggle`,onClick:r,title:n===`dark`?`Light Mode`:`Dark Mode`,children:[n===`dark`?(0,W.jsx)(si,{size:20}):(0,W.jsx)(Gr,{size:20}),!d&&(0,W.jsx)(`span`,{children:n===`dark`?`Light Mode`:`Dark Mode`})]}),!d&&e&&(0,W.jsxs)(`div`,{className:`sidebar-user`,children:[(0,W.jsx)(`div`,{className:`user-avatar`,children:e.name.split(` `).map(e=>e[0]).join(``).slice(0,2)}),(0,W.jsxs)(`div`,{className:`user-info`,children:[(0,W.jsx)(`span`,{className:`user-name`,children:e.name}),(0,W.jsx)(`span`,{className:`user-role`,children:e.role})]})]}),(0,W.jsxs)(`button`,{className:`sidebar-link logout-btn`,onClick:t,title:`Logout`,children:[(0,W.jsx)(Vr,{size:20}),!d&&(0,W.jsx)(`span`,{children:`Logout`})]})]}),(0,W.jsx)(`style`,{children:`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-primary);
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: width var(--transition-base);
          overflow: hidden;
        }
        .sidebar-collapsed {
          width: var(--sidebar-collapsed);
        }
        .sidebar-collapsed + .main-content {
          margin-left: var(--sidebar-collapsed);
        }
        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 18px;
          border-bottom: 1px solid var(--border-primary);
          position: relative;
        }
        .sidebar-logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .sidebar-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .brand-name {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .brand-tag {
          font-size: 0.65rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .sidebar-toggle {
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 10;
        }
        .sidebar-toggle:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        /* Investigation Switcher */
        .inv-switcher {
          padding: 10px 10px 0;
          position: relative;
        }
        .inv-current {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .inv-current:hover {
          border-color: var(--accent-primary);
          background: var(--bg-elevated);
        }
        .inv-current-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .inv-current-label {
          font-size: 0.6rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .inv-current-name {
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 170px;
        }
        .inv-chevron {
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
          flex-shrink: 0;
        }
        .inv-chevron.open { transform: rotate(180deg); }
        .inv-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 10px;
          right: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-secondary);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 200;
          overflow: hidden;
          animation: fadeInDown 0.2s ease-out;
        }
        .inv-dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 1px solid var(--border-primary);
        }
        .inv-new-btn {
          background: rgba(59,130,246,0.1);
          color: var(--accent-primary);
          border: none;
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .inv-new-btn:hover { background: rgba(59,130,246,0.2); }
        .inv-new-input {
          display: flex;
          gap: 4px;
          padding: 8px 10px;
          border-bottom: 1px solid var(--border-primary);
        }
        .inv-new-input input {
          flex: 1;
          padding: 5px 8px;
          background: var(--bg-input);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.8rem;
        }
        .inv-new-input input:focus { border-color: var(--accent-primary); }
        .inv-new-input button {
          background: var(--bg-tertiary);
          border: none;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .inv-new-input button:hover { color: var(--accent-primary); }
        .inv-list {
          max-height: 200px;
          overflow-y: auto;
        }
        .inv-item {
          display: flex;
          align-items: center;
          padding: 0 6px;
        }
        .inv-item.active { background: rgba(59,130,246,0.08); }
        .inv-item-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 8px;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 0.82rem;
          cursor: pointer;
          text-align: left;
          min-width: 0;
        }
        .inv-item-btn:hover { color: var(--accent-primary); }
        .inv-item-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .inv-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-primary);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--accent-primary);
        }
        .inv-item-actions {
          display: flex;
          gap: 2px;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .inv-item:hover .inv-item-actions { opacity: 1; }
        .inv-item-actions button {
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
        }
        .inv-item-actions button:hover { color: var(--accent-primary); background: var(--bg-tertiary); }
        .inv-delete:hover { color: var(--accent-danger) !important; }
        .inv-edit-row {
          display: flex;
          gap: 4px;
          flex: 1;
          padding: 6px 4px;
        }
        .inv-edit-row input {
          flex: 1;
          padding: 4px 8px;
          background: var(--bg-input);
          border: 1px solid var(--accent-primary);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.8rem;
        }
        .inv-edit-row button {
          background: var(--bg-tertiary);
          border: none;
          color: var(--accent-primary);
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .sidebar-nav {
          flex: 1;
          padding: 12px 10px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          text-decoration: none;
          position: relative;
          white-space: nowrap;
        }
        .sidebar-link:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .sidebar-link.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          font-weight: 600;
        }
        .sidebar-active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: var(--accent-primary);
          border-radius: 0 2px 2px 0;
        }
        .sidebar-footer {
          padding: 12px 10px;
          border-top: 1px solid var(--border-primary);
        }
        .theme-toggle {
          margin-bottom: 4px;
          background: none;
          border: none;
          width: 100%;
          justify-content: flex-start;
          cursor: pointer;
        }
        .theme-toggle:hover {
          background: var(--bg-tertiary);
          color: var(--accent-warning) !important;
        }
        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          margin-bottom: 8px;
        }
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .user-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .user-role {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .logout-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          justify-content: flex-start;
        }
        .logout-btn:hover {
          color: var(--accent-danger) !important;
          background: rgba(239, 68, 68, 0.1) !important;
        }
      `})]})}var xi=()=>{let e=(0,x.useRef)(null),{theme:t}=$n();return(0,x.useEffect)(()=>{let n=e.current;if(!n)return;let r=n.getContext(`2d`),i,a=window.innerWidth,o=window.innerHeight;n.width=a,n.height=o;let s=[],c=Math.floor(a*o/15e3),l=t===`dark`,u=l?`rgba(59, 130, 246, 0.4)`:`rgba(59, 130, 246, 0.3)`,d=.3;for(let e=0;e<c;e++)s.push({x:Math.random()*a,y:Math.random()*o,vx:(Math.random()-.5)*d,vy:(Math.random()-.5)*d,radius:Math.random()*1.5+.5});let f=()=>{a=window.innerWidth,o=window.innerHeight,n.width=a,n.height=o};window.addEventListener(`resize`,f);let p=()=>{r.clearRect(0,0,a,o);let e=l?`59, 130, 246`:`37, 99, 235`;for(let t=0;t<c;t++){let n=s[t];n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>a)&&(n.vx*=-1),(n.y<0||n.y>o)&&(n.vy*=-1),r.beginPath(),r.arc(n.x,n.y,n.radius,0,Math.PI*2),r.fillStyle=u,r.fill();for(let i=t+1;i<c;i++){let t=s[i],a=n.x-t.x,o=n.y-t.y,c=Math.sqrt(a*a+o*o);if(c<120){let i=1-c/120;r.beginPath(),r.moveTo(n.x,n.y),r.lineTo(t.x,t.y),r.strokeStyle=`rgba(${e}, ${i*(l?.2:.15)})`,r.lineWidth=.8,r.stroke()}}}i=requestAnimationFrame(p)};return p(),()=>{window.removeEventListener(`resize`,f),cancelAnimationFrame(i)}},[t]),(0,W.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:0,pointerEvents:`none`},children:(0,W.jsx)(`canvas`,{ref:e,style:{display:`block`,width:`100%`,height:`100%`}})})};function Si(){let[e,t]=(0,x.useState)(``),[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(``),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(!1),m=nt(),{login:h,register:g}=zn(),{theme:_,toggleTheme:v}=$n();return(0,W.jsxs)(`div`,{className:`login-page`,children:[(0,W.jsx)(`div`,{className:`login-bg`}),(0,W.jsx)(`div`,{className:`login-grid`}),(0,W.jsx)(`button`,{className:`theme-toggle-login`,onClick:v,title:_===`dark`?`Light Mode`:`Dark Mode`,children:_===`dark`?(0,W.jsx)(si,{size:24}):(0,W.jsx)(Gr,{size:24})}),(0,W.jsxs)(`div`,{className:`login-split-layout`,children:[(0,W.jsxs)(`div`,{className:`login-content-side animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`brand-badge`,children:[(0,W.jsx)(lr,{size:14}),` LIVE THREAT INTELLIGENCE`]}),(0,W.jsxs)(`h1`,{className:`hero-title`,children:[`Evidence`,(0,W.jsx)(`span`,{className:`accent-x`,children:`X`})]}),(0,W.jsx)(`h2`,{className:`hero-subtitle`,children:`Advanced AI Crime Investigation Platform`}),(0,W.jsx)(`p`,{className:`hero-description`,children:`Join the next generation of law enforcement and cybersecurity professionals utilizing advanced YOLOv8 algorithms, neural networking, and automated CCTV evidence processing.`}),(0,W.jsxs)(`div`,{className:`features-list`,children:[(0,W.jsxs)(`div`,{className:`feature-item`,children:[(0,W.jsx)(`div`,{className:`feature-icon`,children:(0,W.jsx)(gi,{size:18})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:`Real-Time CCTV Analysis`}),(0,W.jsx)(`p`,{children:`Automated object detection, weapon identification, and facial recognition from any camera feed.`})]})]}),(0,W.jsxs)(`div`,{className:`feature-item`,children:[(0,W.jsx)(`div`,{className:`feature-icon`,children:(0,W.jsx)(Kr,{size:18})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:`Suspect Triangulation`}),(0,W.jsx)(`p`,{children:`Build associative networks mapping suspicious individuals directly via AI data nodes.`})]})]}),(0,W.jsxs)(`div`,{className:`feature-item`,children:[(0,W.jsx)(`div`,{className:`feature-icon`,children:(0,W.jsx)(Hr,{size:18})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:`Geolocational Tracking`}),(0,W.jsx)(`p`,{children:`Pinpoint activity hotspots and trace suspect escape routes.`})]})]}),(0,W.jsxs)(`div`,{className:`feature-item`,children:[(0,W.jsx)(`div`,{className:`feature-icon`,children:(0,W.jsx)(lr,{size:18})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:`Cross-Evidence Correlation`}),(0,W.jsx)(`p`,{children:`Let AI find hidden links across hundreds of disparate case files.`})]})]})]})]}),(0,W.jsx)(`div`,{className:`login-form-side`,children:(0,W.jsxs)(`div`,{className:`login-container animate-scale-in ${o?`registering-mode`:``}`,children:[(0,W.jsxs)(`div`,{className:`login-header ${o?`registering`:``}`,children:[(0,W.jsx)(`div`,{className:`login-logo`,children:o?(0,W.jsx)(Nr,{size:36,strokeWidth:2.5}):(0,W.jsx)(oi,{size:36,strokeWidth:2.5})}),(0,W.jsxs)(`h3`,{children:[document.title,` Access`]}),(0,W.jsx)(`div`,{className:`login-badge`,children:o?`NEW OFFICER ENROLLMENT`:`RESTRICTED ACCESS`})]}),(0,W.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),l(``),d(!0);try{let t;if(o){if(!i.trim())throw Error(`Name is required for registration`);t=await g(i,e,n)}else t=await h(e,n);t.success?m(`/`):(l(t.error),d(!1))}catch(e){l(e.message||`Authentication failed`),d(!1)}},className:`login-form`,children:[c&&(0,W.jsxs)(`div`,{className:`login-error animate-fade-in`,children:[(0,W.jsx)(br,{size:16}),(0,W.jsx)(`span`,{children:c})]}),o&&(0,W.jsxs)(`div`,{className:`input-group animate-fade-in`,children:[(0,W.jsx)(`label`,{htmlFor:`name`,children:`Full Name / Rank`}),(0,W.jsx)(`input`,{id:`name`,type:`text`,className:`input`,placeholder:`e.g. Inspector Raj`,value:i,onChange:e=>a(e.target.value),required:o})]}),(0,W.jsxs)(`div`,{className:`input-group`,children:[(0,W.jsx)(`label`,{htmlFor:`email`,children:`Officer Email`}),(0,W.jsx)(`input`,{id:`email`,type:`email`,className:`input`,placeholder:`Enter your email`,value:e,onChange:e=>t(e.target.value),autoFocus:!0,required:!0})]}),(0,W.jsxs)(`div`,{className:`input-group`,children:[(0,W.jsx)(`label`,{htmlFor:`password`,children:`Access Code`}),(0,W.jsxs)(`div`,{className:`password-wrapper`,children:[(0,W.jsx)(`input`,{id:`password`,type:f?`text`:`password`,className:`input`,placeholder:`Enter your password`,value:n,onChange:e=>r(e.target.value),required:!0}),(0,W.jsx)(`button`,{type:`button`,className:`password-toggle`,onClick:()=>p(!f),children:f?(0,W.jsx)(Er,{size:18}):(0,W.jsx)(Dr,{size:18})})]})]}),(0,W.jsx)(`button`,{type:`submit`,className:`btn btn-lg login-submit ${o?`btn-danger`:`btn-primary`}`,disabled:u,children:u?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{className:`loading-spinner`,style:{width:20,height:20,margin:0,borderWidth:2}}),(0,W.jsx)(`span`,{children:o?`Registering...`:`Authenticating...`})]}):(0,W.jsxs)(W.Fragment,{children:[o?(0,W.jsx)(pi,{size:18,className:`mr-2`}):null,(0,W.jsx)(`span`,{children:o?`Enroll to System`:`Access Platform`}),!o&&(0,W.jsx)(vr,{size:18,className:`ml-2`})]})}),(0,W.jsx)(`div`,{className:`toggle-auth-mode`,children:(0,W.jsx)(`button`,{type:`button`,className:`text-btn toggle-mode-btn`,onClick:()=>{s(!o),l(``),t(``),r(``),a(``)},children:o?`Already have an access code? Sign In`:`New officer? Request Clearance`})}),!o&&(0,W.jsxs)(`div`,{className:`login-hint`,children:[(0,W.jsx)(`p`,{children:`Demo Credentials:`}),(0,W.jsx)(`code`,{children:`admin@evidencex.com / admin123`})]})]})]})})]}),(0,W.jsx)(`style`,{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: transparent; 
        }
        
        .login-bg {
          display: none;
        }

        .login-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 1;
        }

        .theme-toggle-login {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-primary);
          color: var(--text-primary);
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          transition: all 0.2s ease;
        }

        .theme-toggle-login:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .login-split-layout {
          display: flex;
          width: 100%;
          max-width: 1240px;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 20px 40px;
          z-index: 10;
        }

        .login-content-side {
          flex: 1;
          color: var(--text-primary);
          max-width: 600px;
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-full);
          color: var(--accent-primary);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #ffffff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title .accent-x {
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .hero-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .feature-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-md);
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-item h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .feature-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        .login-form-side {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 440px;
        }

        .login-container {
          width: 100%;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl);
          padding: 30px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }
        
        .login-container.registering-mode {
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239, 68, 68, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .login-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 12px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: pulseGlow 3s ease-in-out infinite;
          transition: background 0.5s ease;
        }

        .login-header.registering .login-logo {
          background: linear-gradient(135deg, var(--accent-danger, #ef4444), #b91c1c);
          animation: pulseRed 3s ease-in-out infinite;
        }

        @keyframes pulseRed {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }

        .login-header h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .login-badge {
          display: inline-block;
          margin-top: 6px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .login-header.registering .login-badge {
          background: rgba(239, 68, 68, 0.2);
          color: var(--accent-danger, #ef4444);
        }

        .input-group {
          margin-bottom: 16px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .password-wrapper {
          position: relative;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .login-submit {
          width: 100%;
          margin-top: 24px;
          height: 48px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .login-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
        }

        .toggle-auth-mode {
          text-align: center;
          margin-top: 24px;
        }

        .toggle-mode-btn {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: underline;
          cursor: pointer;
          background: none;
          border: none;
          padding: 5px;
        }

        .toggle-mode-btn:hover {
          color: var(--accent-primary);
        }

        .login-hint {
          margin-top: 30px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .login-hint code {
          display: inline-block;
          margin-top: 4px;
          padding: 4px 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          font-family: monospace;
          color: var(--accent-primary);
        }

        .login-form .input {
          width: 100%;
        }

        .mr-2 { margin-right: 8px; }
        .ml-2 { margin-left: 8px; }

        /* --- Global Light Theme Overrides for Login Page --- */
        [data-theme="light"] .hero-title {
          background: linear-gradient(135deg, #0f172a, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="light"] .login-container {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(59, 130, 246, 0.05);
        }
        
        [data-theme="light"] .theme-toggle-login {
          background: rgba(255, 255, 255, 0.8);
          border-color: var(--border-secondary);
        }
      `})]})}function Ci(){let{user:e}=zn(),{evidenceFiles:t,suspects:n,recentActivity:r,timelineEvents:i}=$n(),a=nt(),[o,s]=(0,x.useState)(!1);(0,x.useEffect)(()=>{let e=setTimeout(()=>s(!0),200);return()=>clearTimeout(e)},[]);let c=n.filter(e=>e.risk===`high`).length,l=t.filter(e=>e.status===`analyzed`).length,u=t.length>0||n.length>0,d=[{label:`Total Evidence`,value:t.length,icon:Ar,color:`blue`,change:u?`${t.length} files`:`No data`,positive:u},{label:`Active Suspects`,value:n.length,icon:hi,color:`purple`,change:u?`${n.length} profiled`:`No data`,positive:u},{label:`High Risk Alerts`,value:c,icon:di,color:`red`,change:u?`${c} flagged`:`No data`,positive:!1},{label:`Cases Analyzed`,value:l,icon:ri,color:`green`,change:u?`${t.length>0?Math.round(l/t.length*100):0}% complete`:`No data`,positive:u}],f=[{label:`Import Datasets`,icon:Cr,path:`/import`,desc:`Load CSV/JSON data files`},{label:`Upload Evidence`,icon:fi,path:`/evidence`,desc:`Add new files to case`},{label:`View Analysis`,icon:ri,path:`/analysis`,desc:`AI detection results`},{label:`Network Graph`,icon:zr,path:`/network`,desc:`Suspect relationships`},{label:`Geo Tracking`,icon:Hr,path:`/geolocation`,desc:`CDR movement map`}],p=e=>{switch(e){case`upload`:return(0,W.jsx)(fi,{size:16});case`analysis`:return(0,W.jsx)(ri,{size:16});case`alert`:return(0,W.jsx)(di,{size:16});case`link`:return(0,W.jsx)(zr,{size:16});case`financial`:return(0,W.jsx)(ui,{size:16});default:return(0,W.jsx)(lr,{size:16})}},m=e=>{switch(e){case`alert`:return`var(--accent-danger)`;case`analysis`:return`var(--accent-success)`;case`upload`:return`var(--accent-primary)`;case`link`:return`var(--accent-secondary)`;case`financial`:return`var(--accent-warning)`;default:return`var(--text-tertiary)`}};return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsx)(`div`,{className:`page-header`,children:(0,W.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h1`,{children:`Command Center`}),(0,W.jsxs)(`p`,{children:[`Welcome back, `,e?.name||`Officer`,`. Case overview and real-time intelligence feed.`]})]}),(0,W.jsxs)(`div`,{className:`dashboard-time`,children:[(0,W.jsx)(Sr,{size:16}),(0,W.jsx)(`span`,{children:new Date().toLocaleDateString(`en-IN`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})})]})]})}),!u&&(0,W.jsxs)(`div`,{className:`no-data-banner animate-fade-in-up`,children:[(0,W.jsx)(`div`,{className:`no-data-icon`,children:(0,W.jsx)(Cr,{size:32})}),(0,W.jsxs)(`div`,{className:`no-data-text`,children:[(0,W.jsx)(`h3`,{children:`No Datasets Loaded`}),(0,W.jsx)(`p`,{children:`Import your investigation datasets (CSV/JSON) to populate the dashboard with real data.`})]}),(0,W.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>a(`/import`),children:[(0,W.jsx)(Cr,{size:16}),` Import Datasets`]})]}),(0,W.jsx)(`div`,{className:`grid-4`,style:{marginBottom:28},children:d.map((e,t)=>{let n=e.icon;return(0,W.jsxs)(`div`,{className:`stat-card animate-fade-in-up delay-${t+1}`,children:[(0,W.jsx)(`div`,{className:`stat-icon ${e.color}`,children:(0,W.jsx)(n,{size:24})}),(0,W.jsxs)(`div`,{className:`stat-info`,children:[(0,W.jsx)(`h3`,{children:e.label}),(0,W.jsx)(`div`,{className:`stat-value`,children:o?e.value:`—`}),(0,W.jsxs)(`div`,{className:`stat-change ${e.positive?`positive`:`negative`}`,children:[(0,W.jsx)(ui,{size:12}),e.change]})]})]},e.label)})}),(0,W.jsxs)(`div`,{className:`dashboard-grid`,children:[(0,W.jsxs)(`div`,{className:`card animate-fade-in-up delay-3`,children:[(0,W.jsx)(`div`,{className:`card-header`,children:(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(lr,{size:18}),` Quick Actions`]})}),(0,W.jsx)(`div`,{className:`quick-actions-grid`,children:f.map(e=>{let t=e.icon;return(0,W.jsxs)(`button`,{className:`quick-action-btn`,onClick:()=>a(e.path),children:[(0,W.jsx)(`div`,{className:`quick-action-icon`,children:(0,W.jsx)(t,{size:22})}),(0,W.jsx)(`span`,{className:`quick-action-label`,children:e.label}),(0,W.jsx)(`span`,{className:`quick-action-desc`,children:e.desc})]},e.path)})})]}),(0,W.jsxs)(`div`,{className:`card animate-fade-in-up delay-4`,children:[(0,W.jsxs)(`div`,{className:`card-header`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(Sr,{size:18}),` Recent Activity`]}),(0,W.jsxs)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>a(`/timeline`),children:[`View All `,(0,W.jsx)(vr,{size:14})]})]}),(0,W.jsx)(`div`,{className:`activity-feed`,children:r.length===0?(0,W.jsxs)(`div`,{className:`empty-state-sm`,children:[(0,W.jsx)(Sr,{size:24}),(0,W.jsx)(`p`,{children:`No activity yet. Import datasets to begin.`})]}):r.map((e,t)=>(0,W.jsxs)(`div`,{className:`activity-item`,children:[(0,W.jsx)(`div`,{className:`activity-icon`,style:{color:m(e.type),background:`${m(e.type)}15`},children:p(e.type)}),(0,W.jsxs)(`div`,{className:`activity-content`,children:[(0,W.jsx)(`span`,{className:`activity-action`,children:e.action}),(0,W.jsx)(`span`,{className:`activity-detail`,children:e.detail})]}),(0,W.jsx)(`span`,{className:`activity-time`,children:e.time})]},t))})]}),(0,W.jsxs)(`div`,{className:`card animate-fade-in-up delay-5`,children:[(0,W.jsxs)(`div`,{className:`card-header`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(hi,{size:18}),` Top Suspects`]}),(0,W.jsxs)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>a(`/scores`),children:[`View All `,(0,W.jsx)(vr,{size:14})]})]}),(0,W.jsx)(`div`,{className:`suspects-list`,children:n.filter(e=>e.risk===`high`).length===0?(0,W.jsxs)(`div`,{className:`empty-state-sm`,children:[(0,W.jsx)(hi,{size:24}),(0,W.jsx)(`p`,{children:`No suspects loaded. Import suspects dataset.`})]}):n.filter(e=>e.risk===`high`).map(e=>(0,W.jsxs)(`div`,{className:`suspect-item`,children:[(0,W.jsx)(`div`,{className:`suspect-avatar`,children:e.name.split(` `).map(e=>e[0]).join(``)}),(0,W.jsxs)(`div`,{className:`suspect-details`,children:[(0,W.jsx)(`span`,{className:`suspect-name`,children:e.name}),(0,W.jsx)(`span`,{className:`suspect-location`,children:e.lastSeen})]}),(0,W.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,W.jsx)(`span`,{className:`badge badge-${e.risk}`,children:e.risk}),(0,W.jsx)(`span`,{className:`score-mini`,children:e.score})]})]},e.id))})]}),(0,W.jsxs)(`div`,{className:`card animate-fade-in-up delay-6`,children:[(0,W.jsxs)(`div`,{className:`card-header`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(Ar,{size:18}),` Evidence Summary`]}),(0,W.jsxs)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>a(`/evidence`),children:[`Upload `,(0,W.jsx)(vr,{size:14})]})]}),(0,W.jsx)(`div`,{className:`evidence-summary`,children:t.length===0?(0,W.jsxs)(`div`,{className:`empty-state-sm`,children:[(0,W.jsx)(Ar,{size:24}),(0,W.jsx)(`p`,{children:`No evidence loaded. Import evidence dataset.`})]}):(0,W.jsxs)(W.Fragment,{children:[[{type:`Video`,count:t.filter(e=>e.type===`video`).length,color:`var(--accent-primary)`},{type:`Images`,count:t.filter(e=>e.type===`image`).length,color:`var(--accent-secondary)`},{type:`Documents`,count:t.filter(e=>e.type===`pdf`).length,color:`var(--accent-warning)`},{type:`Text/Logs`,count:t.filter(e=>e.type===`text`).length,color:`var(--accent-success)`}].map(e=>(0,W.jsxs)(`div`,{className:`evidence-type-row`,children:[(0,W.jsxs)(`div`,{className:`evidence-type-info`,children:[(0,W.jsx)(`span`,{className:`evidence-type-dot`,style:{background:e.color}}),(0,W.jsx)(`span`,{children:e.type})]}),(0,W.jsxs)(`span`,{className:`evidence-type-count`,children:[e.count,` files`]}),(0,W.jsx)(`div`,{className:`progress-bar`,style:{width:80},children:(0,W.jsx)(`div`,{className:`progress-fill`,style:{width:`${t.length>0?e.count/t.length*100:0}%`,background:e.color}})})]},e.type)),(0,W.jsx)(`div`,{className:`section-divider`}),(0,W.jsxs)(`div`,{className:`evidence-total`,children:[(0,W.jsx)(`span`,{children:`Total Files`}),(0,W.jsx)(`span`,{className:`font-bold`,children:t.length})]}),(0,W.jsxs)(`div`,{className:`evidence-total`,children:[(0,W.jsx)(`span`,{children:`Analyzed`}),(0,W.jsxs)(`span`,{style:{color:`var(--accent-success)`},children:[l,` / `,t.length]})]})]})})]})]}),(0,W.jsx)(`style`,{children:`
        .no-data-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          background: linear-gradient(135deg, var(--bg-card), rgba(59,130,246,0.06));
          border: 1px dashed var(--accent-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }
        .no-data-icon {
          width: 56px;
          height: 56px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .no-data-text { flex: 1; }
        .no-data-text h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .no-data-text p { font-size: 0.85rem; color: var(--text-secondary); }
        .empty-state-sm {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 32px 16px;
          color: var(--text-tertiary);
          text-align: center;
        }
        .empty-state-sm p { font-size: 0.8rem; }
        .dashboard-time {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-tertiary);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
        .quick-actions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .quick-action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .quick-action-btn:hover {
          background: var(--bg-elevated);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59,130,246,0.15);
        }
        .quick-action-icon {
          width: 44px;
          height: 44px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }
        .quick-action-label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .quick-action-desc {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .activity-feed {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-primary);
        }
        .activity-item:last-child { border-bottom: none; }
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .activity-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .activity-action {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .activity-detail {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .activity-time {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .suspects-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .suspect-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-primary);
          transition: all var(--transition-fast);
        }
        .suspect-item:hover {
          border-color: var(--border-secondary);
          background: var(--bg-elevated);
        }
        .suspect-avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--accent-danger), #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .suspect-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .suspect-name {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .suspect-location {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }
        .score-mini {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-danger);
        }
        .evidence-summary {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .evidence-type-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .evidence-type-info {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          font-size: 0.85rem;
        }
        .evidence-type-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .evidence-type-count {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          min-width: 50px;
          text-align: right;
        }
        .evidence-total {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `})]})}function wi(e){let t=e.split(`
`).filter(e=>e.trim()!==``);if(t.length<2)return{data:[],errors:[]};let n=t[0].split(`,`).map(e=>e.trim().replace(/^"|"$/g,``)),r=[],i=[];for(let e=1;e<t.length;e++){let a=[],o=``,s=!1;for(let n=0;n<t[e].length;n++){let r=t[e][n];r===`"`?s=!s:r===`,`&&!s?(a.push(o.trim()),o=``):o+=r}if(a.push(o.trim()),a.length===n.length){let e={};n.forEach((t,n)=>{e[t]=a[n]}),r.push(e)}else a.some(e=>e!==``)&&i.push({row:e,message:`Column mismatch at row ${e}`})}return{data:r,errors:i}}var Ti=[{key:`suspects`,label:`Suspects`,icon:hi,color:`#ef4444`,format:`csv`,desc:`Suspect profiles with risk levels & scores`,file:`suspects.csv`},{key:`cdr_data`,label:`CDR Records`,icon:Yr,color:`#f59e0b`,format:`csv`,desc:`Call detail records with tower/GPS data`,file:`cdr_data.csv`},{key:`evidence_files`,label:`Evidence Files`,icon:Ar,color:`#3b82f6`,format:`csv`,desc:`Evidence metadata (files uploaded to system)`,file:`evidence_files.csv`},{key:`timeline_events`,label:`Timeline Events`,icon:Sr,color:`#8b5cf6`,format:`csv`,desc:`Chronological investigation events`,file:`timeline_events.csv`},{key:`tower_locations`,label:`Tower Locations`,icon:Qr,color:`#06b6d4`,format:`csv`,desc:`Cell tower GPS coordinates for CDR mapping`,file:`tower_locations.csv`},{key:`network_connections`,label:`Network Graph`,icon:Kr,color:`#ec4899`,format:`csv`,desc:`Suspect network connections & relationships`,file:`network_connections.csv`},{key:`movement_patterns`,label:`Movement Patterns`,icon:ni,color:`#14b8a6`,format:`csv`,desc:`Suspect movement behavior analysis`,file:`movement_patterns.csv`},{key:`analysis_results`,label:`Analysis Results`,icon:ri,color:`#10b981`,format:`json`,desc:`AI analysis output for evidence items`,file:`analysis_results.json`},{key:`cross_evidence_links`,label:`Cross-Evidence`,icon:zr,color:`#f97316`,format:`csv`,desc:`Evidence correlation links`,file:`cross_evidence_links.csv`},{key:`ai_insights`,label:`AI Insights`,icon:ur,color:`#a855f7`,format:`csv`,desc:`AI-generated intelligence findings`,file:`ai_insights.csv`}];function Ei(){let{importDataset:e,clearDataset:t,clearAllData:n,getRecordCount:r}=$n(),[i,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(null),[c,l]=(0,x.useState)(null),u=(0,x.useRef)({}),d=Ti.reduce((e,t)=>e+r(t.key),0),f=(t,n,r)=>{let i=r.target.files?.[0];if(i){if(a(t),l(null),s(null),n===`json`){let n=new FileReader;n.onload=n=>{try{let r=JSON.parse(n.target.result),i=Array.isArray(r)?r:[r];e(t,i),s({key:t,count:i.length}),setTimeout(()=>s(null),3e3)}catch{l({key:t,message:`Invalid JSON file`})}a(null)},n.readAsText(i)}else{let n=new FileReader;n.onload=n=>{try{let r=wi(n.target.result);r.errors.length>0?l({key:t,message:`Parse error: ${r.errors[0].message}`}):(e(t,r.data),s({key:t,count:r.data.length}),setTimeout(()=>s(null),3e3))}catch{l({key:t,message:`Failed to parse CSV file`})}a(null)},n.readAsText(i)}r.target.value=``}},p=e=>{t(e),s(null),l(null)};return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsx)(`div`,{className:`page-header`,children:(0,W.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h1`,{children:`Import Datasets`}),(0,W.jsx)(`p`,{children:`Upload CSV/JSON files to populate the investigation system. All pages reflect imported data in real-time.`})]}),(0,W.jsxs)(`div`,{className:`import-header-stats`,children:[(0,W.jsxs)(`div`,{className:`import-total`,children:[(0,W.jsx)(Cr,{size:18}),(0,W.jsx)(`span`,{children:d}),(0,W.jsx)(`small`,{children:`total records`})]}),d>0&&(0,W.jsxs)(`button`,{className:`btn btn-ghost btn-sm`,onClick:n,style:{color:`var(--accent-danger)`},children:[(0,W.jsx)(li,{size:14}),` Clear All`]})]})]})}),(0,W.jsxs)(`div`,{className:`import-progress animate-fade-in-up`,children:[(0,W.jsx)(`div`,{className:`import-progress-bar`,children:(0,W.jsx)(`div`,{className:`import-progress-fill`,style:{width:`${Ti.filter(e=>r(e.key)>0).length/Ti.length*100}%`}})}),(0,W.jsxs)(`span`,{className:`import-progress-text`,children:[Ti.filter(e=>r(e.key)>0).length,` / `,Ti.length,` datasets loaded`]})]}),(0,W.jsx)(`div`,{className:`import-grid`,children:Ti.map((e,t)=>{let n=e.icon,a=r(e.key),s=a>0,l=i===e.key,d=o?.key===e.key,m=c?.key===e.key;return(0,W.jsxs)(`div`,{className:`import-card animate-fade-in-up delay-${Math.min(t+1,6)} ${s?`loaded`:``}`,style:{"--card-color":e.color},children:[(0,W.jsxs)(`div`,{className:`import-card-header`,children:[(0,W.jsx)(`div`,{className:`import-card-icon`,style:{color:e.color,background:`${e.color}15`},children:(0,W.jsx)(n,{size:22})}),(0,W.jsxs)(`div`,{className:`import-card-info`,children:[(0,W.jsx)(`h3`,{children:e.label}),(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[e.format.toUpperCase(),` • `,e.file]})]}),s&&(0,W.jsxs)(`div`,{className:`import-card-badge`,style:{background:`${e.color}20`,color:e.color},children:[(0,W.jsx)(xr,{size:12}),a]})]}),(0,W.jsx)(`p`,{className:`import-card-desc`,children:e.desc}),l&&(0,W.jsxs)(`div`,{className:`import-status importing`,children:[(0,W.jsx)(`div`,{className:`loading-spinner`,style:{width:16,height:16,borderWidth:2}}),(0,W.jsx)(`span`,{children:`Parsing file...`})]}),d&&(0,W.jsxs)(`div`,{className:`import-status success`,children:[(0,W.jsx)(xr,{size:14}),(0,W.jsxs)(`span`,{children:[o.count,` records imported successfully`]})]}),m&&(0,W.jsxs)(`div`,{className:`import-status error`,children:[(0,W.jsx)(br,{size:14}),(0,W.jsx)(`span`,{children:c.message})]}),(0,W.jsxs)(`div`,{className:`import-card-actions`,children:[(0,W.jsx)(`input`,{ref:t=>u.current[e.key]=t,type:`file`,accept:e.format===`json`?`.json`:`.csv`,onChange:t=>f(e.key,e.format,t),style:{display:`none`}}),(0,W.jsxs)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>u.current[e.key]?.click(),disabled:l,style:{background:e.color,borderColor:e.color},children:[(0,W.jsx)(fi,{size:14}),s?`Re-import`:`Import`]}),s&&(0,W.jsxs)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>p(e.key),children:[(0,W.jsx)(_i,{size:14}),` Clear`]})]})]},e.key)})}),(0,W.jsx)(`style`,{children:`
        .import-header-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .import-total {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--accent-primary);
        }
        .import-total span {
          font-size: 1.3rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .import-total small {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          font-weight: 400;
        }
        .import-progress {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .import-progress-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .import-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-full);
          transition: width 0.5s ease-out;
        }
        .import-progress-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 600;
          white-space: nowrap;
        }
        .import-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
        }
        .import-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 20px;
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .import-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--card-color);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .import-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .import-card:hover::before { opacity: 1; }
        .import-card.loaded::before { opacity: 1; }
        .import-card.loaded {
          border-color: color-mix(in srgb, var(--card-color) 30%, var(--border-primary));
        }
        .import-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .import-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .import-card-info { flex: 1; }
        .import-card-info h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .import-card-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .import-card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .import-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          margin-bottom: 12px;
        }
        .import-status.importing {
          background: rgba(59,130,246,0.1);
          color: var(--accent-primary);
        }
        .import-status.success {
          background: rgba(16,185,129,0.1);
          color: var(--accent-success);
        }
        .import-status.error {
          background: rgba(239,68,68,0.1);
          color: var(--accent-danger);
        }
        .import-card-actions {
          display: flex;
          gap: 8px;
        }
        .import-card-actions .btn-primary:hover {
          filter: brightness(1.15);
        }
        @media (max-width: 768px) {
          .import-grid { grid-template-columns: 1fr; }
          .import-header-stats { flex-direction: column; }
        }
      `})]})}var Di={video:kr,image:Or,pdf:jr,text:Mr},Oi={video:`var(--accent-primary)`,image:`var(--accent-secondary)`,pdf:`var(--accent-warning)`,text:`var(--accent-success)`};function K(e){let t=e.split(`.`).pop().toLowerCase();return[`mp4`,`avi`,`mov`,`mkv`,`webm`].includes(t)?`video`:[`jpg`,`jpeg`,`png`,`gif`,`webp`].includes(t)?`image`:[`pdf`].includes(t)?`pdf`:`text`}function ki(){let{evidenceFiles:e}=$n(),[t,n]=(0,x.useState)([]),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),[s,c]=(0,x.useState)([]),[l,u]=(0,x.useState)(`all`),[d,f]=(0,x.useState)(``),[p,m]=(0,x.useState)(null),[h,g]=(0,x.useState)({}),_=(0,x.useRef)(null);!r&&e.length>0?(n(e),i(!0)):!r&&e.length===0&&i(!0);let v=e=>{e.preventDefault(),o(!1),b(Array.from(e.dataTransfer.files))},y=e=>{b(Array.from(e.target.files)),e.target.value=``},b=e=>{let t=e.map((e,t)=>{let n=null,r=K(e.name);return(r===`video`||r===`image`)&&(n=URL.createObjectURL(e)),{id:`U${Date.now()}-${t}`,name:e.name,size:S(e.size),rawSize:e.size,type:r,progress:0,blobUrl:n,rawFile:e}});c(e=>[...e,...t]),t.forEach(e=>{let t=0,r=setInterval(()=>{t+=Math.random()*20+5,t>=100&&(t=100,clearInterval(r),setTimeout(()=>{c(t=>t.filter(t=>t.id!==e.id)),n(t=>[...t,{id:e.id,name:e.name,type:e.type,size:e.size,rawSize:e.rawSize,uploadTime:new Date().toLocaleString(),status:`pending`,caseId:`C001`,blobUrl:e.blobUrl}]),setTimeout(()=>w(e.id),800)},500)),c(n=>n.map(n=>n.id===e.id?{...n,progress:Math.min(t,100)}:n))},200)})},S=e=>typeof e==`string`?e:e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(0)+` KB`:e<1024*1024*1024?(e/(1024*1024)).toFixed(1)+` MB`:(e/(1024*1024*1024)).toFixed(2)+` GB`,C=e=>{let r=t.find(t=>t.id===e);r?.blobUrl&&URL.revokeObjectURL(r.blobUrl),n(t=>t.filter(t=>t.id!==e))},w=e=>{g(t=>({...t,[e]:0}));let t=0,r=setInterval(()=>{t+=Math.random()*15+8,t>=100?(t=100,clearInterval(r),g(t=>{let n={...t};return delete n[e],n}),n(t=>t.map(t=>t.id===e?{...t,status:`analyzed`}:t))):g(n=>({...n,[e]:Math.min(t,100)}))},300)},T=()=>{t.filter(e=>e.status===`pending`&&!h[e.id]).forEach((e,t)=>setTimeout(()=>w(e.id),t*400))},E=t.filter(e=>!(l!==`all`&&e.type!==l||d&&!e.name.toLowerCase().includes(d.toLowerCase()))),ee=t.filter(e=>e.type===`video`).length,D=t.filter(e=>e.type===`image`).length;return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Evidence Upload`}),(0,W.jsx)(`p`,{children:`Upload and manage case evidence files — CCTV footage, images, documents, and communication logs.`})]}),(0,W.jsxs)(`div`,{className:`upload-zone ${a?`upload-zone-active`:``} animate-fade-in-up`,onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:()=>o(!1),onDrop:v,onClick:()=>_.current?.click(),children:[(0,W.jsx)(`input`,{ref:_,type:`file`,multiple:!0,accept:`.mp4,.avi,.mov,.mkv,.webm,.jpg,.jpeg,.png,.gif,.webp,.pdf,.txt,.csv,.doc,.docx`,onChange:y,style:{display:`none`}}),(0,W.jsx)(`div`,{className:`upload-icon`,children:(0,W.jsx)(fi,{size:36})}),(0,W.jsx)(`h3`,{children:`Drop files here or click to browse`}),(0,W.jsx)(`p`,{children:`Supports MP4, AVI, MOV, JPG, PNG, PDF, TXT, CSV • Videos play in-browser`}),(0,W.jsxs)(`div`,{className:`upload-types`,children:[(0,W.jsxs)(`span`,{className:`upload-type-tag video-tag`,children:[(0,W.jsx)(kr,{size:14}),`CCTV / VIDEO`]}),(0,W.jsxs)(`span`,{className:`upload-type-tag`,children:[(0,W.jsx)(Or,{size:14}),`IMAGE`]}),(0,W.jsxs)(`span`,{className:`upload-type-tag`,children:[(0,W.jsx)(jr,{size:14}),`PDF`]}),(0,W.jsxs)(`span`,{className:`upload-type-tag`,children:[(0,W.jsx)(Mr,{size:14}),`TEXT`]})]})]}),s.length>0&&(0,W.jsx)(`div`,{className:`upload-progress-list animate-fade-in`,children:s.map(e=>(0,W.jsxs)(`div`,{className:`upload-progress-item`,children:[(0,W.jsx)(Di[e.type]||Mr,{size:20,style:{color:Oi[e.type]}}),(0,W.jsxs)(`div`,{className:`upload-progress-info`,children:[(0,W.jsxs)(`div`,{className:`flex justify-between`,children:[(0,W.jsx)(`span`,{className:`text-sm font-bold`,children:e.name}),(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[Math.round(e.progress),`%`]})]}),(0,W.jsx)(`div`,{className:`progress-bar`,children:(0,W.jsx)(`div`,{className:`progress-fill`,style:{width:`${e.progress}%`}})})]})]},e.id))}),t.length>0&&(0,W.jsxs)(`div`,{className:`evidence-stats animate-fade-in-up delay-1`,children:[(0,W.jsxs)(`div`,{className:`evidence-stat`,children:[(0,W.jsx)(Mr,{size:16}),(0,W.jsx)(`span`,{className:`evidence-stat-value`,children:t.length}),(0,W.jsx)(`span`,{className:`evidence-stat-label`,children:`Total Files`})]}),(0,W.jsxs)(`div`,{className:`evidence-stat`,children:[(0,W.jsx)(kr,{size:16,style:{color:`var(--accent-primary)`}}),(0,W.jsx)(`span`,{className:`evidence-stat-value`,children:ee}),(0,W.jsx)(`span`,{className:`evidence-stat-label`,children:`CCTV / Videos`})]}),(0,W.jsxs)(`div`,{className:`evidence-stat`,children:[(0,W.jsx)(Or,{size:16,style:{color:`var(--accent-secondary)`}}),(0,W.jsx)(`span`,{className:`evidence-stat-value`,children:D}),(0,W.jsx)(`span`,{className:`evidence-stat-label`,children:`Images`})]}),(0,W.jsxs)(`div`,{className:`evidence-stat`,children:[(0,W.jsx)(xr,{size:16,style:{color:`var(--accent-success)`}}),(0,W.jsx)(`span`,{className:`evidence-stat-value`,children:t.filter(e=>e.status===`analyzed`).length}),(0,W.jsx)(`span`,{className:`evidence-stat-label`,children:`Analyzed`})]}),t.some(e=>e.status===`pending`)&&(0,W.jsxs)(`button`,{className:`btn btn-primary btn-sm analyze-all-btn`,onClick:T,children:[(0,W.jsx)(vi,{size:14}),`Analyze All Pending (`,t.filter(e=>e.status===`pending`).length,`)`]})]}),(0,W.jsxs)(`div`,{className:`evidence-toolbar animate-fade-in-up delay-2`,children:[(0,W.jsxs)(`div`,{className:`search-box`,children:[(0,W.jsx)(ii,{size:16}),(0,W.jsx)(`input`,{type:`text`,placeholder:`Search evidence files...`,value:d,onChange:e=>f(e.target.value),className:`input`})]}),(0,W.jsx)(`div`,{className:`filter-tabs`,children:[`all`,`video`,`image`,`pdf`,`text`].map(e=>(0,W.jsxs)(`button`,{className:`filter-tab ${l===e?`active`:``}`,onClick:()=>u(e),children:[e===`all`?`All`:e===`video`?`CCTV/Video`:e.charAt(0).toUpperCase()+e.slice(1),(0,W.jsx)(`span`,{className:`filter-count`,children:e===`all`?t.length:t.filter(t=>t.type===e).length})]},e))})]}),(0,W.jsx)(`div`,{className:`evidence-list animate-fade-in-up delay-3`,children:E.length===0?(0,W.jsxs)(`div`,{className:`empty-state`,children:[(0,W.jsx)(jr,{size:48}),(0,W.jsx)(`h3`,{children:`No evidence files found`}),(0,W.jsx)(`p`,{children:`Upload CCTV footage, images, or documents to get started`})]}):(0,W.jsxs)(W.Fragment,{children:[(l===`all`||l===`video`||l===`image`)&&E.some(e=>e.type===`video`||e.type===`image`)&&(0,W.jsx)(`div`,{className:`media-gallery`,children:E.filter(e=>e.type===`video`||e.type===`image`).map(e=>(0,W.jsxs)(`div`,{className:`media-card`,onClick:()=>m(e),children:[(0,W.jsxs)(`div`,{className:`media-card-preview`,children:[e.type===`video`?e.blobUrl?(0,W.jsx)(`video`,{src:e.blobUrl,className:`media-thumb`,muted:!0,preload:`metadata`}):(0,W.jsx)(`div`,{className:`media-placeholder video-placeholder`,children:(0,W.jsx)(kr,{size:32})}):e.blobUrl?(0,W.jsx)(`img`,{src:e.blobUrl,className:`media-thumb`,alt:e.name}):(0,W.jsx)(`div`,{className:`media-placeholder`,children:(0,W.jsx)(Or,{size:32})}),(0,W.jsx)(`div`,{className:`media-card-overlay`,children:e.type===`video`?(0,W.jsx)(`div`,{className:`media-play-btn`,children:(0,W.jsx)(Xr,{size:24})}):(0,W.jsx)(`div`,{className:`media-play-btn`,children:(0,W.jsx)(Ur,{size:20})})}),e.type===`video`&&(0,W.jsxs)(`span`,{className:`media-badge-video`,children:[(0,W.jsx)(kr,{size:10}),` CCTV`]})]}),(0,W.jsxs)(`div`,{className:`media-card-info`,children:[(0,W.jsx)(`span`,{className:`media-card-name`,children:e.name}),(0,W.jsxs)(`div`,{className:`media-card-meta`,children:[(0,W.jsx)(`span`,{children:e.size}),(0,W.jsx)(`span`,{className:`media-status ${e.status}`,children:e.status===`analyzed`?`● Analyzed`:`○ Pending`})]})]})]},e.id))}),(0,W.jsx)(`div`,{className:`table-wrapper`,style:{marginTop:16},children:(0,W.jsxs)(`table`,{className:`table`,children:[(0,W.jsx)(`thead`,{children:(0,W.jsxs)(`tr`,{children:[(0,W.jsx)(`th`,{children:`File Name`}),(0,W.jsx)(`th`,{children:`Type`}),(0,W.jsx)(`th`,{children:`Size`}),(0,W.jsx)(`th`,{children:`Upload Time`}),(0,W.jsx)(`th`,{children:`Status`}),(0,W.jsx)(`th`,{children:`Actions`})]})}),(0,W.jsx)(`tbody`,{children:E.map(e=>{let t=Di[e.type]||Mr,n=e.blobUrl&&(e.type===`video`||e.type===`image`);return(0,W.jsxs)(`tr`,{children:[(0,W.jsx)(`td`,{children:(0,W.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,W.jsx)(`div`,{className:`file-icon`,style:{color:Oi[e.type],background:`${Oi[e.type]}15`},children:(0,W.jsx)(t,{size:18})}),(0,W.jsx)(`span`,{className:`font-bold text-sm`,children:e.name})]})}),(0,W.jsx)(`td`,{children:(0,W.jsx)(`span`,{className:`tag`,children:e.type===`video`?`CCTV/VIDEO`:e.type.toUpperCase()})}),(0,W.jsx)(`td`,{className:`text-muted text-mono text-sm`,children:e.size}),(0,W.jsx)(`td`,{className:`text-muted text-sm`,children:e.uploadTime}),(0,W.jsx)(`td`,{children:h[e.id]===void 0?e.status===`analyzed`?(0,W.jsxs)(`span`,{className:`badge badge-low`,children:[(0,W.jsx)(xr,{size:12}),` Analyzed`]}):(0,W.jsxs)(`span`,{className:`badge badge-medium analyze-pending-badge`,onClick:()=>w(e.id),title:`Click to analyze`,children:[(0,W.jsx)(vi,{size:12}),` Pending — Analyze`]}):(0,W.jsxs)(`div`,{className:`analyze-progress-cell`,children:[(0,W.jsx)(Br,{size:14,className:`analyze-spinner`}),(0,W.jsxs)(`span`,{className:`analyze-pct`,children:[Math.round(h[e.id]),`%`]}),(0,W.jsx)(`div`,{className:`analyze-bar`,children:(0,W.jsx)(`div`,{className:`analyze-bar-fill`,style:{width:`${h[e.id]}%`}})})]})}),(0,W.jsx)(`td`,{children:(0,W.jsxs)(`div`,{className:`flex gap-2`,children:[n&&(0,W.jsx)(`button`,{className:`btn btn-ghost btn-sm`,title:`View / Play`,onClick:()=>m(e),style:{color:`var(--accent-primary)`},children:e.type===`video`?(0,W.jsx)(Xr,{size:14}):(0,W.jsx)(Dr,{size:14})}),!n&&(0,W.jsx)(`button`,{className:`btn btn-ghost btn-sm`,title:`No preview available`,disabled:!0,children:(0,W.jsx)(Dr,{size:14})}),e.status===`pending`&&!h[e.id]&&(0,W.jsx)(`button`,{className:`btn btn-ghost btn-sm`,title:`Run AI Analysis`,onClick:()=>w(e.id),style:{color:`var(--accent-warning)`},children:(0,W.jsx)(vi,{size:14})}),(0,W.jsx)(`button`,{className:`btn btn-ghost btn-sm`,title:`Delete`,onClick:()=>C(e.id),children:(0,W.jsx)(li,{size:14})})]})})]},e.id)})})]})})]})}),p&&(0,W.jsx)(`div`,{className:`media-modal-overlay`,onClick:()=>m(null),children:(0,W.jsxs)(`div`,{className:`media-modal`,onClick:e=>e.stopPropagation(),children:[(0,W.jsxs)(`div`,{className:`media-modal-header`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-3`,children:[p.type===`video`?(0,W.jsx)(kr,{size:18,style:{color:`var(--accent-primary)`}}):(0,W.jsx)(Or,{size:18,style:{color:`var(--accent-secondary)`}}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:p.name}),(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[p.size,` • `,p.uploadTime||`CCTV Evidence`]})]})]}),(0,W.jsx)(`button`,{className:`media-modal-close`,onClick:()=>m(null),children:(0,W.jsx)(_i,{size:20})})]}),(0,W.jsx)(`div`,{className:`media-modal-content`,children:p.type===`video`?p.blobUrl?(0,W.jsx)(`video`,{src:p.blobUrl,controls:!0,autoPlay:!0,className:`media-modal-video`}):(0,W.jsxs)(`div`,{className:`media-modal-placeholder`,children:[(0,W.jsx)(kr,{size:64}),(0,W.jsx)(`h3`,{children:`CCTV Footage`}),(0,W.jsx)(`p`,{children:`Video preview not available for imported metadata. Upload the actual video file to enable playback.`})]}):p.type===`image`?p.blobUrl?(0,W.jsx)(`img`,{src:p.blobUrl,className:`media-modal-image`,alt:p.name}):(0,W.jsxs)(`div`,{className:`media-modal-placeholder`,children:[(0,W.jsx)(Or,{size:64}),(0,W.jsx)(`h3`,{children:`Image Evidence`}),(0,W.jsx)(`p`,{children:`Image preview not available for imported metadata. Upload the actual file to enable viewing.`})]}):null}),(0,W.jsxs)(`div`,{className:`media-modal-footer`,children:[(0,W.jsx)(`span`,{className:`badge badge-info`,children:p.type===`video`?`CCTV / Video`:`Image`}),p.status===`analyzed`?(0,W.jsxs)(`span`,{className:`badge badge-low`,children:[(0,W.jsx)(xr,{size:12}),` AI Analyzed`]}):(0,W.jsxs)(`span`,{className:`badge badge-medium`,children:[(0,W.jsx)(Sr,{size:12}),` Pending Analysis`]}),p.blobUrl&&(0,W.jsxs)(`a`,{href:p.blobUrl,download:p.name,className:`btn btn-secondary btn-sm`,children:[(0,W.jsx)(Tr,{size:14}),` Download`]})]})]})}),(0,W.jsx)(`style`,{children:`
        .upload-zone {
          border: 2px dashed var(--border-secondary);
          border-radius: var(--radius-lg);
          padding: 48px 32px;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-base);
          background: var(--bg-card);
          margin-bottom: 24px;
        }
        .upload-zone:hover, .upload-zone-active {
          border-color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.03);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.08);
        }
        .upload-zone-active {
          animation: borderGlow 1.5s ease-in-out infinite;
        }
        .upload-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 16px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }
        .upload-zone h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .upload-zone > p {
          color: var(--text-tertiary);
          font-size: 0.85rem;
        }
        .upload-types {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
        }
        .upload-type-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .video-tag {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .upload-progress-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }
        .upload-progress-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .upload-progress-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Stats Bar */
        .evidence-stats {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .evidence-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
        }
        .evidence-stat-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }
        .evidence-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        /* Toolbar */
        .evidence-toolbar {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 14px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          flex: 1;
          min-width: 200px;
          color: var(--text-tertiary);
        }
        .search-box .input {
          border: none;
          background: none;
          padding: 10px 0;
          flex: 1;
        }
        .search-box .input:focus {
          box-shadow: none;
        }
        .filter-tabs {
          display: flex;
          gap: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 4px;
        }
        .filter-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        .filter-tab.active {
          background: var(--accent-primary);
          color: white;
        }
        .filter-count {
          font-size: 0.7rem;
          padding: 1px 6px;
          background: rgba(255,255,255,0.15);
          border-radius: var(--radius-full);
        }
        .filter-tab:not(.active) .filter-count {
          background: var(--bg-tertiary);
        }
        .file-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Media Gallery */
        .media-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 8px;
        }
        .media-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .media-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .media-card-preview {
          position: relative;
          height: 140px;
          background: var(--bg-tertiary);
          overflow: hidden;
        }
        .media-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-elevated));
        }
        .video-placeholder {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          color: var(--accent-primary);
        }
        .media-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .media-card:hover .media-card-overlay {
          opacity: 1;
        }
        .media-play-btn {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(4px);
        }
        .media-badge-video {
          position: absolute;
          top: 8px;
          left: 8px;
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 3px 8px;
          background: rgba(59, 130, 246, 0.85);
          color: white;
          border-radius: var(--radius-full);
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
        }
        .media-card-info {
          padding: 10px 12px;
        }
        .media-card-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .media-card-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .media-status.analyzed { color: var(--accent-success); }
        .media-status.pending { color: var(--accent-warning); }

        /* Media Modal */
        .media-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
          backdrop-filter: blur(8px);
        }
        .media-modal {
          background: var(--bg-card);
          border: 1px solid var(--border-secondary);
          border-radius: var(--radius-xl);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: scaleIn 0.3s ease-out;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .media-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-primary);
        }
        .media-modal-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .media-modal-close {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .media-modal-close:hover {
          background: var(--accent-danger);
          color: white;
          border-color: var(--accent-danger);
        }
        .media-modal-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          min-height: 300px;
        }
        .media-modal-video {
          width: 100%;
          max-height: 60vh;
          outline: none;
        }
        .media-modal-image {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
        }
        .media-modal-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 60px;
          color: var(--text-tertiary);
          text-align: center;
        }
        .media-modal-placeholder h3 {
          color: var(--text-secondary);
          font-size: 1rem;
        }
        .media-modal-placeholder p {
          font-size: 0.85rem;
          max-width: 320px;
        }
        .media-modal-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-top: 1px solid var(--border-primary);
        }
        .media-modal-footer .btn {
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .media-gallery { grid-template-columns: repeat(2, 1fr); }
          .evidence-stats { flex-direction: column; }
        }

        /* Analyze Progress */
        .analyze-progress-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 120px;
        }
        .analyze-spinner {
          animation: spin 1s linear infinite;
          color: var(--accent-warning);
          flex-shrink: 0;
        }
        .analyze-pct {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-warning);
          font-family: var(--font-mono);
          min-width: 28px;
        }
        .analyze-bar {
          flex: 1;
          height: 4px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
          min-width: 50px;
        }
        .analyze-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-warning), var(--accent-success));
          border-radius: var(--radius-full);
          transition: width 0.3s ease-out;
        }
        .analyze-pending-badge {
          cursor: pointer !important;
          transition: all var(--transition-fast);
        }
        .analyze-pending-badge:hover {
          background: rgba(245, 158, 11, 0.25) !important;
          transform: scale(1.05);
        }
        .analyze-all-btn {
          margin-left: auto;
          background: linear-gradient(135deg, var(--accent-warning), #d97706) !important;
          border-color: var(--accent-warning) !important;
          white-space: nowrap;
        }
        .analyze-all-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-1px);
        }
      `})]})}var Ai={video:kr,image:Or,pdf:jr,text:Mr},ji={Person:mi,Location:Hr,Date:dr,Phone:Yr,Amount:wr,Account:wr,"Code Words":di};function Mi(){let{analysisResults:e,evidenceFiles:t}=$n(),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(`all`),o=i===`all`?e:e.filter(e=>e.riskLevel===i),s=e=>t.find(t=>t.id===e);return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`AI Analysis Results`}),(0,W.jsx)(`p`,{children:`Object detection, entity extraction, and risk assessment powered by AI engine.`})]}),(0,W.jsxs)(`div`,{className:`analysis-summary animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`analysis-stat`,children:[(0,W.jsx)(`span`,{className:`analysis-stat-value`,children:e.length}),(0,W.jsx)(`span`,{className:`analysis-stat-label`,children:`Files Analyzed`})]}),(0,W.jsxs)(`div`,{className:`analysis-stat`,children:[(0,W.jsx)(`span`,{className:`analysis-stat-value`,style:{color:`var(--accent-danger)`},children:e.filter(e=>e.riskLevel===`high`).length}),(0,W.jsx)(`span`,{className:`analysis-stat-label`,children:`High Risk`})]}),(0,W.jsxs)(`div`,{className:`analysis-stat`,children:[(0,W.jsx)(`span`,{className:`analysis-stat-value`,style:{color:`var(--accent-warning)`},children:e.filter(e=>e.riskLevel===`medium`).length}),(0,W.jsx)(`span`,{className:`analysis-stat-label`,children:`Medium Risk`})]}),(0,W.jsxs)(`div`,{className:`analysis-stat`,children:[(0,W.jsx)(`span`,{className:`analysis-stat-value`,style:{color:`var(--accent-success)`},children:e.filter(e=>e.riskLevel===`low`).length}),(0,W.jsx)(`span`,{className:`analysis-stat-label`,children:`Low Risk`})]})]}),(0,W.jsx)(`div`,{className:`analysis-filters animate-fade-in-up delay-1`,children:[`all`,`high`,`medium`,`low`].map(e=>(0,W.jsx)(`button`,{className:`filter-tab ${i===e?`active`:``}`,onClick:()=>a(e),style:i===e&&e!==`all`?{background:e===`high`?`var(--accent-danger)`:e===`medium`?`var(--accent-warning)`:`var(--accent-success)`}:{},children:e===`all`?`All Results`:`${e.charAt(0).toUpperCase()+e.slice(1)} Risk`},e))}),(0,W.jsx)(`div`,{className:`analysis-results-list`,children:o.map((e,t)=>{let i=s(e.evidenceId),a=Ai[e.type]||Mr,o=n===e.evidenceId;return(0,W.jsxs)(`div`,{className:`analysis-card animate-fade-in-up delay-${Math.min(t+1,6)}`,children:[(0,W.jsxs)(`div`,{className:`analysis-card-header`,onClick:()=>r(o?null:e.evidenceId),children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,W.jsx)(`div`,{className:`analysis-type-icon`,style:{color:e.type===`video`||e.type===`image`?`var(--accent-primary)`:`var(--accent-warning)`},children:(0,W.jsx)(a,{size:22})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{className:`analysis-file-name`,children:i?.name||e.evidenceId}),(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[e.type.toUpperCase(),` • Score: `,e.riskScore,`/100`]})]})]}),(0,W.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,W.jsxs)(`div`,{className:`risk-meter risk-${e.riskLevel}`,children:[(0,W.jsx)(`div`,{className:`risk-meter-fill`,style:{width:`${e.riskScore}%`}}),(0,W.jsx)(`span`,{children:e.riskScore})]}),(0,W.jsxs)(`span`,{className:`badge badge-${e.riskLevel}`,children:[e.riskLevel===`high`&&(0,W.jsx)(di,{size:11}),e.riskLevel===`low`&&(0,W.jsx)(xr,{size:11}),e.riskLevel]}),o?(0,W.jsx)(yr,{size:18}):(0,W.jsx)(gr,{size:18})]})]}),(0,W.jsxs)(`div`,{className:`analysis-summary-text`,children:[(0,W.jsx)(oi,{size:14}),` `,e.summary]}),o&&(0,W.jsxs)(`div`,{className:`analysis-details animate-fade-in`,children:[e.detections&&(0,W.jsxs)(`div`,{className:`detail-section`,children:[(0,W.jsxs)(`h4`,{children:[(0,W.jsx)(ci,{size:16}),` Object Detections`]}),(0,W.jsx)(`div`,{className:`detection-grid`,children:e.detections.map((e,t)=>(0,W.jsxs)(`div`,{className:`detection-card`,children:[(0,W.jsxs)(`div`,{className:`detection-header`,children:[(0,W.jsx)(`span`,{className:`detection-object`,children:e.object}),(0,W.jsxs)(`span`,{className:`detection-count`,children:[`×`,e.count]})]}),(0,W.jsxs)(`div`,{className:`detection-confidence`,children:[(0,W.jsx)(`div`,{className:`progress-bar`,children:(0,W.jsx)(`div`,{className:`progress-fill`,style:{width:`${e.confidence*100}%`,background:e.confidence>.8?`var(--accent-success)`:e.confidence>.6?`var(--accent-warning)`:`var(--accent-danger)`}})}),(0,W.jsxs)(`span`,{className:`text-xs text-mono`,children:[(e.confidence*100).toFixed(0),`%`]})]}),e.timestamps&&(0,W.jsx)(`div`,{className:`detection-timestamps`,children:e.timestamps.map((e,t)=>(0,W.jsx)(`span`,{className:`tag`,children:e},t))})]},t))})]}),e.entities&&(0,W.jsxs)(`div`,{className:`detail-section`,children:[(0,W.jsxs)(`h4`,{children:[(0,W.jsx)(ri,{size:16}),` Extracted Entities`]}),(0,W.jsx)(`div`,{className:`entity-grid`,children:e.entities.map((e,t)=>(0,W.jsxs)(`div`,{className:`entity-card`,children:[(0,W.jsxs)(`div`,{className:`entity-header`,children:[(0,W.jsx)(ji[e.type]||jr,{size:16}),(0,W.jsx)(`span`,{className:`entity-type`,children:e.type}),(0,W.jsx)(`span`,{className:`entity-count`,children:e.values.length})]}),(0,W.jsx)(`div`,{className:`entity-values`,children:e.values.map((e,t)=>(0,W.jsx)(`span`,{className:`entity-value`,children:e},t))})]},t))})]}),(0,W.jsxs)(`div`,{className:`detail-section`,children:[(0,W.jsxs)(`h4`,{children:[(0,W.jsx)(jr,{size:16}),` Structured JSON Output`]}),(0,W.jsx)(`pre`,{className:`json-output`,children:JSON.stringify(e,null,2)})]})]})]},e.evidenceId)})}),(0,W.jsx)(`style`,{children:`
        .analysis-summary {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
        }
        .analysis-stat {
          flex: 1;
          text-align: center;
        }
        .analysis-stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
        }
        .analysis-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .analysis-filters {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          padding: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          width: fit-content;
        }
        .filter-tab {
          padding: 6px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover { color: var(--text-primary); background: var(--bg-tertiary); }
        .filter-tab.active { color: white; }
        .analysis-results-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .analysis-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .analysis-card:hover {
          border-color: var(--border-secondary);
        }
        .analysis-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .analysis-card-header:hover {
          background: var(--bg-hover);
        }
        .analysis-type-icon {
          width: 44px;
          height: 44px;
          background: currentColor;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .analysis-file-name {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .risk-meter {
          width: 80px;
          height: 28px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
        }
        .risk-meter span {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .risk-meter-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: var(--radius-sm);
          transition: width 1s ease-out;
        }
        .risk-high .risk-meter-fill { background: rgba(239, 68, 68, 0.3); }
        .risk-medium .risk-meter-fill { background: rgba(245, 158, 11, 0.3); }
        .risk-low .risk-meter-fill { background: rgba(16, 185, 129, 0.3); }
        .analysis-summary-text {
          padding: 0 24px 16px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .analysis-summary-text svg {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .analysis-details {
          padding: 0 24px 24px;
          border-top: 1px solid var(--border-primary);
          padding-top: 20px;
        }
        .detail-section {
          margin-bottom: 24px;
        }
        .detail-section:last-child { margin-bottom: 0; }
        .detail-section h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .detection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .detection-card {
          padding: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .detection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .detection-object {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .detection-count {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 700;
        }
        .detection-confidence {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .detection-timestamps {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .entity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
        }
        .entity-card {
          padding: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .entity-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          color: var(--accent-secondary);
        }
        .entity-type {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .entity-count {
          margin-left: auto;
          font-size: 0.7rem;
          padding: 2px 6px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
        }
        .entity-values {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .entity-value {
          padding: 3px 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-primary);
        }
        .json-output {
          padding: 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          overflow-x: auto;
          max-height: 300px;
          overflow-y: auto;
          line-height: 1.6;
        }
      `})]})}var Ni={value:()=>{}};function Pi(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new Fi(n)}function Fi(e){this._=e}function Ii(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}Fi.prototype=Pi.prototype={constructor:Fi,on:function(e,t){var n=this._,r=Ii(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=Li(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=Ri(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Ri(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Fi(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function Li(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Ri(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Ni,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var zi={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function Bi(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),zi.hasOwnProperty(t)?{space:zi[t],local:e}:e}function Vi(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function Hi(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Ui(e){var t=Bi(e);return(t.local?Hi:Vi)(t)}function Wi(){}function Gi(e){return e==null?Wi:function(){return this.querySelector(e)}}function Ki(e){typeof e!=`function`&&(e=Gi(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new Po(r,this._parents)}function qi(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Ji(){return[]}function Yi(e){return e==null?Ji:function(){return this.querySelectorAll(e)}}function Xi(e){return function(){return qi(e.apply(this,arguments))}}function Zi(e){e=typeof e==`function`?Xi(e):Yi(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new Po(r,i)}function Qi(e){return function(){return this.matches(e)}}function $i(e){return function(t){return t.matches(e)}}var ea=Array.prototype.find;function ta(e){return function(){return ea.call(this.children,e)}}function na(){return this.firstElementChild}function ra(e){return this.select(e==null?na:ta(typeof e==`function`?e:$i(e)))}var ia=Array.prototype.filter;function aa(){return Array.from(this.children)}function oa(e){return function(){return ia.call(this.children,e)}}function sa(e){return this.selectAll(e==null?aa:oa(typeof e==`function`?e:$i(e)))}function ca(e){typeof e!=`function`&&(e=Qi(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Po(r,this._parents)}function la(e){return Array(e.length)}function ua(){return new Po(this._enter||this._groups.map(la),this._parents)}function da(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}da.prototype={constructor:da,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function fa(e){return function(){return e}}function pa(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new da(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function ma(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new da(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function ha(e){return e.__data__}function ga(e,t){if(!arguments.length)return Array.from(this,ha);var n=t?ma:pa,r=this._parents,i=this._groups;typeof e!=`function`&&(e=fa(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=_a(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new Po(o,r),o._enter=s,o._exit=c,o}function _a(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function va(){return new Po(this._exit||this._groups.map(la),this._parents)}function ya(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function ba(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new Po(s,this._parents)}function xa(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Sa(e){e||=Ca;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new Po(i,this._parents).order()}function Ca(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function wa(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ta(){return Array.from(this)}function Ea(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function Da(){let e=0;for(let t of this)++e;return e}function Oa(){return!this.node()}function ka(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function Aa(e){return function(){this.removeAttribute(e)}}function ja(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Ma(e,t){return function(){this.setAttribute(e,t)}}function Na(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Pa(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Fa(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ia(e,t){var n=Bi(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?ja:Aa:typeof t==`function`?n.local?Fa:Pa:n.local?Na:Ma)(n,t))}function La(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Ra(e){return function(){this.style.removeProperty(e)}}function za(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ba(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Va(e,t,n){return arguments.length>1?this.each((t==null?Ra:typeof t==`function`?Ba:za)(e,t,n??``)):Ha(this.node(),e)}function Ha(e,t){return e.style.getPropertyValue(t)||La(e).getComputedStyle(e,null).getPropertyValue(t)}function Ua(e){return function(){delete this[e]}}function Wa(e,t){return function(){this[e]=t}}function Ga(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Ka(e,t){return arguments.length>1?this.each((t==null?Ua:typeof t==`function`?Ga:Wa)(e,t)):this.node()[e]}function qa(e){return e.trim().split(/^|\s+/)}function Ja(e){return e.classList||new Ya(e)}function Ya(e){this._node=e,this._names=qa(e.getAttribute(`class`)||``)}Ya.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Xa(e,t){for(var n=Ja(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Za(e,t){for(var n=Ja(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Qa(e){return function(){Xa(this,e)}}function $a(e){return function(){Za(this,e)}}function eo(e,t){return function(){(t.apply(this,arguments)?Xa:Za)(this,e)}}function to(e,t){var n=qa(e+``);if(arguments.length<2){for(var r=Ja(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?eo:t?Qa:$a)(n,t))}function no(){this.textContent=``}function ro(e){return function(){this.textContent=e}}function io(e){return function(){this.textContent=e.apply(this,arguments)??``}}function ao(e){return arguments.length?this.each(e==null?no:(typeof e==`function`?io:ro)(e)):this.node().textContent}function oo(){this.innerHTML=``}function q(e){return function(){this.innerHTML=e}}function so(e){return function(){this.innerHTML=e.apply(this,arguments)??``}}function co(e){return arguments.length?this.each(e==null?oo:(typeof e==`function`?so:q)(e)):this.node().innerHTML}function lo(){this.nextSibling&&this.parentNode.appendChild(this)}function uo(){return this.each(lo)}function fo(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function po(){return this.each(fo)}function mo(e){var t=typeof e==`function`?e:Ui(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ho(){return null}function go(e,t){var n=typeof e==`function`?e:Ui(e),r=t==null?ho:typeof t==`function`?t:Gi(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function _o(){var e=this.parentNode;e&&e.removeChild(this)}function vo(){return this.each(_o)}function yo(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function bo(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xo(e){return this.select(e?bo:yo)}function So(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function Co(e){return function(t){e.call(this,t,this.__data__)}}function wo(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function To(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function Eo(e,t,n){return function(){var r=this.__on,i,a=Co(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function Do(e,t,n){var r=wo(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?Eo:To,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function Oo(e,t,n){var r=La(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function ko(e,t){return function(){return Oo(this,e,t)}}function Ao(e,t){return function(){return Oo(this,e,t.apply(this,arguments))}}function jo(e,t){return this.each((typeof t==`function`?Ao:ko)(e,t))}function*Mo(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var No=[null];function Po(e,t){this._groups=e,this._parents=t}function Fo(){return new Po([[document.documentElement]],No)}function Io(){return this}Po.prototype=Fo.prototype={constructor:Po,select:Ki,selectAll:Zi,selectChild:ra,selectChildren:sa,filter:ca,data:ga,enter:ua,exit:va,join:ya,merge:ba,selection:Io,order:xa,sort:Sa,call:wa,nodes:Ta,node:Ea,size:Da,empty:Oa,each:ka,attr:Ia,style:Va,property:Ka,classed:to,text:ao,html:co,raise:uo,lower:po,append:mo,insert:go,remove:vo,clone:xo,datum:So,on:Do,dispatch:jo,[Symbol.iterator]:Mo};function Lo(e){return typeof e==`string`?new Po([[document.querySelector(e)]],[document.documentElement]):new Po([[e]],No)}function Ro(e){let t;for(;t=e.sourceEvent;)e=t;return e}function zo(e,t){if(e=Ro(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}var Bo={passive:!1},Vo={capture:!0,passive:!1};function Ho(e){e.stopImmediatePropagation()}function Uo(e){e.preventDefault(),e.stopImmediatePropagation()}function Wo(e){var t=e.document.documentElement,n=Lo(e).on(`dragstart.drag`,Uo,Vo);`onselectstart`in t?n.on(`selectstart.drag`,Uo,Vo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect=`none`)}function Go(e,t){var n=e.document.documentElement,r=Lo(e).on(`dragstart.drag`,null);t&&(r.on(`click.drag`,Uo,Vo),setTimeout(function(){r.on(`click.drag`,null)},0)),`onselectstart`in n?r.on(`selectstart.drag`,null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Ko=e=>()=>e;function qo(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:a,x:o,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}qo.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Jo(e){return!e.ctrlKey&&!e.button}function Yo(){return this.parentNode}function Xo(e,t){return t??{x:e.x,y:e.y}}function Zo(){return navigator.maxTouchPoints||`ontouchstart`in this}function Qo(){var e=Jo,t=Yo,n=Xo,r=Zo,i={},a=Pi(`start`,`drag`,`end`),o=0,s,c,l,u,d=0;function f(e){e.on(`mousedown.drag`,p).filter(r).on(`touchstart.drag`,g).on(`touchmove.drag`,_,Bo).on(`touchend.drag touchcancel.drag`,v).style(`touch-action`,`none`).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}function p(n,r){if(!(u||!e.call(this,n,r))){var i=y(this,t.call(this,n,r),n,r,`mouse`);i&&(Lo(n.view).on(`mousemove.drag`,m,Vo).on(`mouseup.drag`,h,Vo),Wo(n.view),Ho(n),l=!1,s=n.clientX,c=n.clientY,i(`start`,n))}}function m(e){if(Uo(e),!l){var t=e.clientX-s,n=e.clientY-c;l=t*t+n*n>d}i.mouse(`drag`,e)}function h(e){Lo(e.view).on(`mousemove.drag mouseup.drag`,null),Go(e.view,l),Uo(e),i.mouse(`end`,e)}function g(n,r){if(e.call(this,n,r)){var i=n.changedTouches,a=t.call(this,n,r),o=i.length,s,c;for(s=0;s<o;++s)(c=y(this,a,n,r,i[s].identifier,i[s]))&&(Ho(n),c(`start`,n,i[s]))}}function _(e){var t=e.changedTouches,n=t.length,r,a;for(r=0;r<n;++r)(a=i[t[r].identifier])&&(Uo(e),a(`drag`,e,t[r]))}function v(e){var t=e.changedTouches,n=t.length,r,a;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),r=0;r<n;++r)(a=i[t[r].identifier])&&(Ho(e),a(`end`,e,t[r]))}function y(e,t,r,s,c,l){var u=a.copy(),d=zo(l||r,t),p,m,h;if((h=n.call(e,new qo(`beforestart`,{sourceEvent:r,target:f,identifier:c,active:o,x:d[0],y:d[1],dx:0,dy:0,dispatch:u}),s))!=null)return p=h.x-d[0]||0,m=h.y-d[1]||0,function n(r,a,l){var g=d,_;switch(r){case`start`:i[c]=n,_=o++;break;case`end`:delete i[c],--o;case`drag`:d=zo(l||a,t),_=o;break}u.call(r,e,new qo(r,{sourceEvent:a,subject:h,target:f,identifier:c,active:_,x:d[0]+p,y:d[1]+m,dx:d[0]-g[0],dy:d[1]-g[1],dispatch:u}),s)}}return f.filter=function(t){return arguments.length?(e=typeof t==`function`?t:Ko(!!t),f):e},f.container=function(e){return arguments.length?(t=typeof e==`function`?e:Ko(e),f):t},f.subject=function(e){return arguments.length?(n=typeof e==`function`?e:Ko(e),f):n},f.touchable=function(e){return arguments.length?(r=typeof e==`function`?e:Ko(!!e),f):r},f.on=function(){var e=a.on.apply(a,arguments);return e===a?f:e},f.clickDistance=function(e){return arguments.length?(d=(e=+e)*e,f):Math.sqrt(d)},f}function $o(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function es(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ts(){}var ns=.7,rs=1/ns,is=`\\s*([+-]?\\d+)\\s*`,as=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,os=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,ss=/^#([0-9a-f]{3,8})$/,cs=RegExp(`^rgb\\(${is},${is},${is}\\)$`),ls=RegExp(`^rgb\\(${os},${os},${os}\\)$`),us=RegExp(`^rgba\\(${is},${is},${is},${as}\\)$`),ds=RegExp(`^rgba\\(${os},${os},${os},${as}\\)$`),fs=RegExp(`^hsl\\(${as},${os},${os}\\)$`),ps=RegExp(`^hsla\\(${as},${os},${os},${as}\\)$`),ms={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$o(ts,ys,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:hs,formatHex:hs,formatHex8:gs,formatHsl:_s,formatRgb:vs,toString:vs});function hs(){return this.rgb().formatHex()}function gs(){return this.rgb().formatHex8()}function _s(){return Ms(this).formatHsl()}function vs(){return this.rgb().formatRgb()}function ys(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=ss.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?bs(t):n===3?new ws(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?xs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?xs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=cs.exec(e))?new ws(t[1],t[2],t[3],1):(t=ls.exec(e))?new ws(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=us.exec(e))?xs(t[1],t[2],t[3],t[4]):(t=ds.exec(e))?xs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=fs.exec(e))?js(t[1],t[2]/100,t[3]/100,1):(t=ps.exec(e))?js(t[1],t[2]/100,t[3]/100,t[4]):ms.hasOwnProperty(e)?bs(ms[e]):e===`transparent`?new ws(NaN,NaN,NaN,0):null}function bs(e){return new ws(e>>16&255,e>>8&255,e&255,1)}function xs(e,t,n,r){return r<=0&&(e=t=n=NaN),new ws(e,t,n,r)}function Ss(e){return e instanceof ts||(e=ys(e)),e?(e=e.rgb(),new ws(e.r,e.g,e.b,e.opacity)):new ws}function Cs(e,t,n,r){return arguments.length===1?Ss(e):new ws(e,t,n,r??1)}function ws(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}$o(ws,Cs,es(ts,{brighter(e){return e=e==null?rs:rs**+e,new ws(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ns:ns**+e,new ws(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new ws(ks(this.r),ks(this.g),ks(this.b),Os(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ts,formatHex:Ts,formatHex8:Es,formatRgb:Ds,toString:Ds}));function Ts(){return`#${As(this.r)}${As(this.g)}${As(this.b)}`}function Es(){return`#${As(this.r)}${As(this.g)}${As(this.b)}${As((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ds(){let e=Os(this.opacity);return`${e===1?`rgb(`:`rgba(`}${ks(this.r)}, ${ks(this.g)}, ${ks(this.b)}${e===1?`)`:`, ${e})`}`}function Os(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function ks(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function As(e){return e=ks(e),(e<16?`0`:``)+e.toString(16)}function js(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Ps(e,t,n,r)}function Ms(e){if(e instanceof Ps)return new Ps(e.h,e.s,e.l,e.opacity);if(e instanceof ts||(e=ys(e)),!e)return new Ps;if(e instanceof Ps)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new Ps(o,s,c,e.opacity)}function Ns(e,t,n,r){return arguments.length===1?Ms(e):new Ps(e,t,n,r??1)}function Ps(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}$o(Ps,Ns,es(ts,{brighter(e){return e=e==null?rs:rs**+e,new Ps(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ns:ns**+e,new Ps(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new ws(Ls(e>=240?e-240:e+120,i,r),Ls(e,i,r),Ls(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Ps(Fs(this.h),Is(this.s),Is(this.l),Os(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Os(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Fs(this.h)}, ${Is(this.s)*100}%, ${Is(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Fs(e){return e=(e||0)%360,e<0?e+360:e}function Is(e){return Math.max(0,Math.min(1,e||0))}function Ls(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Rs=e=>()=>e;function zs(e,t){return function(n){return e+n*t}}function Bs(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function Vs(e){return(e=+e)==1?Hs:function(t,n){return n-t?Bs(t,n,e):Rs(isNaN(t)?n:t)}}function Hs(e,t){var n=t-e;return n?zs(e,n):Rs(isNaN(e)?t:e)}var Us=(function e(t){var n=Vs(t);function r(e,t){var r=n((e=Cs(e)).r,(t=Cs(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=Hs(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function Ws(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Gs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ks=new RegExp(Gs.source,`g`);function qs(e){return function(){return e}}function Js(e){return function(t){return e(t)+``}}function Ys(e,t){var n=Gs.lastIndex=Ks.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Gs.exec(e))&&(i=Ks.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Ws(r,i)})),n=Ks.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?Js(c[0].x):qs(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}var Xs=180/Math.PI,Zs={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qs(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*Xs,skewX:Math.atan(c)*Xs,scaleX:o,scaleY:s}}var $s;function ec(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Zs:Qs(t.a,t.b,t.c,t.d,t.e,t.f)}function tc(e){return e==null||($s||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),$s.setAttribute(`transform`,e),!(e=$s.transform.baseVal.consolidate()))?Zs:(e=e.matrix,Qs(e.a,e.b,e.c,e.d,e.e,e.f))}function nc(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:Ws(e,i)},{i:c-2,x:Ws(r,a)})}else (i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:Ws(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:Ws(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:Ws(e,n)},{i:s-2,x:Ws(t,r)})}else (n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var rc=nc(ec,`px, `,`px)`,`deg)`),ic=nc(tc,`, `,`)`,`)`),ac=1e-12;function oc(e){return((e=Math.exp(e))+1/e)/2}function sc(e){return((e=Math.exp(e))-1/e)/2}function cc(e){return((e=Math.exp(2*e))-1)/(e+1)}var lc=(function e(t,n,r){function i(e,i){var a=e[0],o=e[1],s=e[2],c=i[0],l=i[1],u=i[2],d=c-a,f=l-o,p=d*d+f*f,m,h;if(p<ac)h=Math.log(u/s)/t,m=function(e){return[a+e*d,o+e*f,s*Math.exp(t*e*h)]};else{var g=Math.sqrt(p),_=(u*u-s*s+r*p)/(2*s*n*g),v=(u*u-s*s-r*p)/(2*u*n*g),y=Math.log(Math.sqrt(_*_+1)-_);h=(Math.log(Math.sqrt(v*v+1)-v)-y)/t,m=function(e){var r=e*h,i=oc(y),c=s/(n*g)*(i*cc(t*r+y)-sc(y));return[a+c*d,o+c*f,s*i/oc(t*r+y)]}}return m.duration=h*1e3*t/Math.SQRT2,m}return i.rho=function(t){var n=Math.max(.001,+t),r=n*n;return e(n,r,r*r)},i})(Math.SQRT2,2,4),uc=0,dc=0,fc=0,pc=1e3,mc,hc,gc=0,_c=0,vc=0,yc=typeof performance==`object`&&performance.now?performance:Date,bc=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function xc(){return _c||=(bc(Sc),yc.now()+vc)}function Sc(){_c=0}function Cc(){this._call=this._time=this._next=null}Cc.prototype=wc.prototype={constructor:Cc,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?xc():+n)+(t==null?0:+t),!this._next&&hc!==this&&(hc?hc._next=this:mc=this,hc=this),this._call=e,this._time=n,kc()},stop:function(){this._call&&(this._call=null,this._time=1/0,kc())}};function wc(e,t,n){var r=new Cc;return r.restart(e,t,n),r}function Tc(){xc(),++uc;for(var e=mc,t;e;)(t=_c-e._time)>=0&&e._call.call(void 0,t),e=e._next;--uc}function Ec(){_c=(gc=yc.now())+vc,uc=dc=0;try{Tc()}finally{uc=0,Oc(),_c=0}}function Dc(){var e=yc.now(),t=e-gc;t>pc&&(vc-=t,gc=e)}function Oc(){for(var e,t=mc,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:mc=n);hc=e,kc(r)}function kc(e){uc||(dc&&=clearTimeout(dc),e-_c>24?(e<1/0&&(dc=setTimeout(Ec,e-yc.now()-vc)),fc&&=clearInterval(fc)):(fc||=(gc=yc.now(),setInterval(Dc,pc)),uc=1,bc(Ec)))}function Ac(e,t,n){var r=new Cc;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var jc=Pi(`start`,`end`,`cancel`,`interrupt`),Mc=[];function Nc(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;Ic(e,n,{name:t,index:r,group:i,on:jc,tween:Mc,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Pc(e,t){var n=Fc(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function J(e,t){var n=Fc(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function Fc(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function Ic(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=wc(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Ac(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Ac(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function Lc(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function Rc(e){return this.each(function(){Lc(this,e)})}function zc(e,t){var n,r;return function(){var i=J(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Bc(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=J(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Vc(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=Fc(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?zc:Bc)(n,e,t))}function Hc(e,t,n){var r=e._id;return e.each(function(){var e=J(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return Fc(e,r).value[t]}}function Uc(e,t){var n;return(typeof t==`number`?Ws:t instanceof ys?Us:(n=ys(t))?(t=n,Us):Ys)(e,t)}function Wc(e){return function(){this.removeAttribute(e)}}function Gc(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Kc(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function qc(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function Jc(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function Yc(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function Xc(e,t){var n=Bi(e),r=n===`transform`?ic:Uc;return this.attrTween(e,typeof t==`function`?(n.local?Yc:Jc)(n,r,Hc(this,`attr.`+e,t)):t==null?(n.local?Gc:Wc)(n):(n.local?qc:Kc)(n,r,t))}function Zc(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Qc(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function $c(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Qc(e,i)),n}return i._value=t,i}function el(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Zc(e,i)),n}return i._value=t,i}function tl(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=Bi(e);return this.tween(n,(r.local?$c:el)(r,t))}function nl(e,t){return function(){Pc(this,e).delay=+t.apply(this,arguments)}}function rl(e,t){return t=+t,function(){Pc(this,e).delay=t}}function il(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?nl:rl)(t,e)):Fc(this.node(),t).delay}function al(e,t){return function(){J(this,e).duration=+t.apply(this,arguments)}}function ol(e,t){return t=+t,function(){J(this,e).duration=t}}function sl(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?al:ol)(t,e)):Fc(this.node(),t).duration}function cl(e,t){if(typeof t!=`function`)throw Error();return function(){J(this,e).ease=t}}function ll(e){var t=this._id;return arguments.length?this.each(cl(t,e)):Fc(this.node(),t).ease}function ul(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();J(this,e).ease=n}}function dl(e){if(typeof e!=`function`)throw Error();return this.each(ul(this._id,e))}function fl(e){typeof e!=`function`&&(e=Qi(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Q(r,this._parents,this._name,this._id)}function pl(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Q(o,this._parents,this._name,this._id)}function ml(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function hl(e,t,n){var r,i,a=ml(t)?Pc:J;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function gl(e,t){var n=this._id;return arguments.length<2?Fc(this.node(),n).on.on(e):this.each(hl(n,e,t))}function _l(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function vl(){return this.on(`end.remove`,_l(this._id))}function yl(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Gi(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Nc(l[f],t,n,f,l,Fc(u,n)));return new Q(a,this._parents,t,n)}function bl(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Yi(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=Fc(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Nc(p,t,n,h,f,m);a.push(f),o.push(u)}return new Q(a,o,t,n)}var xl=Fo.prototype.constructor;function Sl(){return new xl(this._groups,this._parents)}function Cl(e,t){var n,r,i;return function(){var a=Ha(this,e),o=(this.style.removeProperty(e),Ha(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function wl(e){return function(){this.style.removeProperty(e)}}function Tl(e,t,n){var r,i=n+``,a;return function(){var o=Ha(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function El(e,t,n){var r,i,a;return function(){var o=Ha(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),Ha(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Dl(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=J(this,e),l=c.on,u=c.value[a]==null?s||=wl(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function Ol(e,t,n){var r=(e+=``)==`transform`?rc:Uc;return t==null?this.styleTween(e,Cl(e,r)).on(`end.style.`+e,wl(e)):typeof t==`function`?this.styleTween(e,El(e,r,Hc(this,`style.`+e,t))).each(Dl(this._id,e)):this.styleTween(e,Tl(e,r,t),n).on(`end.style.`+e,null)}function kl(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Al(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&kl(e,a,n)),r}return a._value=t,a}function jl(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,Al(e,t,n??``))}function Ml(e){return function(){this.textContent=e}}function Nl(e){return function(){this.textContent=e(this)??``}}function Pl(e){return this.tween(`text`,typeof e==`function`?Nl(Hc(this,`text`,e)):Ml(e==null?``:e+``))}function Fl(e){return function(t){this.textContent=e.call(this,t)}}function Il(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Fl(r)),t}return r._value=e,r}function Y(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,Il(e))}function Ll(){for(var e=this._name,t=this._id,n=zl(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=Fc(c,t);Nc(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Q(r,this._parents,e,n)}function X(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=J(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Z=0;function Q(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Rl(e){return Fo().transition(e)}function zl(){return++Z}var Bl=Fo.prototype;Q.prototype=Rl.prototype={constructor:Q,select:yl,selectAll:bl,selectChild:Bl.selectChild,selectChildren:Bl.selectChildren,filter:fl,merge:pl,selection:Sl,transition:Ll,call:Bl.call,nodes:Bl.nodes,node:Bl.node,size:Bl.size,empty:Bl.empty,each:Bl.each,on:gl,attr:Xc,attrTween:tl,style:Ol,styleTween:jl,text:Pl,textTween:Y,remove:vl,tween:Vc,delay:il,duration:sl,ease:ll,easeVarying:dl,end:X,[Symbol.iterator]:Bl[Symbol.iterator]};function Vl(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Hl={time:null,delay:0,duration:250,ease:Vl};function Ul(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function Wl(e){var t,n;e instanceof Q?(t=e._id,e=e._name):(t=zl(),(n=Hl).time=xc(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Nc(c,e,t,l,o,n||Ul(c,t));return new Q(r,this._parents,e,t)}Fo.prototype.interrupt=Rc,Fo.prototype.transition=Wl;var{abs:Gl,max:Kl,min:ql}=Math;[`w`,`e`].map(Jl),[`n`,`s`].map(Jl),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(Jl);function Jl(e){return{type:e}}function Yl(e,t){var n,r=1;e??=0,t??=0;function i(){var i,a=n.length,o,s=0,c=0;for(i=0;i<a;++i)o=n[i],s+=o.x,c+=o.y;for(s=(s/a-e)*r,c=(c/a-t)*r,i=0;i<a;++i)o=n[i],o.x-=s,o.y-=c}return i.initialize=function(e){n=e},i.x=function(t){return arguments.length?(e=+t,i):e},i.y=function(e){return arguments.length?(t=+e,i):t},i.strength=function(e){return arguments.length?(r=+e,i):r},i}function Xl(e){let t=+this._x.call(null,e),n=+this._y.call(null,e);return Zl(this.cover(t,n),t,n,e)}function Zl(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,a=e._root,o={data:r},s=e._x0,c=e._y0,l=e._x1,u=e._y1,d,f,p,m,h,g,_,v;if(!a)return e._root=o,e;for(;a.length;)if((h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f,i=a,!(a=a[_=g<<1|h]))return i[_]=o,e;if(p=+e._x.call(null,a.data),m=+e._y.call(null,a.data),t===p&&n===m)return o.next=a,i?i[_]=o:e._root=o,e;do i=i?i[_]=[,,,,]:e._root=[,,,,],(h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f;while((_=g<<1|h)==(v=(m>=f)<<1|p>=d));return i[v]=a,i[_]=o,e}function Ql(e){var t,n,r=e.length,i,a,o=Array(r),s=Array(r),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(a=+this._y.call(null,t))||(o[n]=i,s[n]=a,i<c&&(c=i),i>u&&(u=i),a<l&&(l=a),a>d&&(d=a));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<r;++n)Zl(this,o[n],s[n],e[n]);return this}function $l(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,a=(r=Math.floor(t))+1;else{for(var o=i-n||1,s=this._root,c,l;n>e||e>=i||r>t||t>=a;)switch(l=(t<r)<<1|e<n,c=[,,,,],c[l]=s,s=c,o*=2,l){case 0:i=n+o,a=r+o;break;case 1:n=i-o,a=r+o;break;case 2:i=n+o,r=a-o;break;case 3:n=i-o,r=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this}function eu(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function tu(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function nu(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function ru(e,t,n){var r,i=this._x0,a=this._y0,o,s,c,l,u=this._x1,d=this._y1,f=[],p=this._root,m,h;for(p&&f.push(new nu(p,i,a,u,d)),n==null?n=1/0:(i=e-n,a=t-n,u=e+n,d=t+n,n*=n);m=f.pop();)if(!(!(p=m.node)||(o=m.x0)>u||(s=m.y0)>d||(c=m.x1)<i||(l=m.y1)<a))if(p.length){var g=(o+c)/2,_=(s+l)/2;f.push(new nu(p[3],g,_,c,l),new nu(p[2],o,_,g,l),new nu(p[1],g,s,c,_),new nu(p[0],o,s,g,_)),(h=(t>=_)<<1|e>=g)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-h],f[f.length-1-h]=m)}else{var v=e-+this._x.call(null,p.data),y=t-+this._y.call(null,p.data),b=v*v+y*y;if(b<n){var x=Math.sqrt(n=b);i=e-x,a=t-x,u=e+x,d=t+x,r=p.data}}return r}function iu(e){if(isNaN(u=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e)))return this;var t,n=this._root,r,i,a,o=this._x0,s=this._y0,c=this._x1,l=this._y1,u,d,f,p,m,h,g,_;if(!n)return this;if(n.length)for(;;){if((m=u>=(f=(o+c)/2))?o=f:c=f,(h=d>=(p=(s+l)/2))?s=p:l=p,t=n,!(n=n[g=h<<1|m]))return this;if(!n.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(r=t,_=g)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):t?(a?t[g]=a:delete t[g],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[_]=n:this._root=n),this):(this._root=a,this)}function au(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function ou(){return this._root}function su(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function cu(e){var t=[],n,r=this._root,i,a,o,s,c;for(r&&t.push(new nu(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,a=n.x0,o=n.y0,s=n.x1,c=n.y1)&&r.length){var l=(a+s)/2,u=(o+c)/2;(i=r[3])&&t.push(new nu(i,l,u,s,c)),(i=r[2])&&t.push(new nu(i,a,u,l,c)),(i=r[1])&&t.push(new nu(i,l,o,s,u)),(i=r[0])&&t.push(new nu(i,a,o,l,u))}return this}function lu(e){var t=[],n=[],r;for(this._root&&t.push(new nu(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var a,o=r.x0,s=r.y0,c=r.x1,l=r.y1,u=(o+c)/2,d=(s+l)/2;(a=i[0])&&t.push(new nu(a,o,s,u,d)),(a=i[1])&&t.push(new nu(a,u,s,c,d)),(a=i[2])&&t.push(new nu(a,o,d,u,l)),(a=i[3])&&t.push(new nu(a,u,d,c,l))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function uu(e){return e[0]}function du(e){return arguments.length?(this._x=e,this):this._x}function fu(e){return e[1]}function pu(e){return arguments.length?(this._y=e,this):this._y}function mu(e,t,n){var r=new hu(t??uu,n??fu,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function hu(e,t,n,r,i,a){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function gu(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var _u=mu.prototype=hu.prototype;_u.copy=function(){var e=new hu(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=gu(t),e;for(n=[{source:t,target:e._root=[,,,,]}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=[,,,,]}):t.target[i]=gu(r));return e},_u.add=Xl,_u.addAll=Ql,_u.cover=$l,_u.data=eu,_u.extent=tu,_u.find=ru,_u.remove=iu,_u.removeAll=au,_u.root=ou,_u.size=su,_u.visit=cu,_u.visitAfter=lu,_u.x=du,_u.y=pu;function vu(e){return function(){return e}}function yu(e){return(e()-.5)*1e-6}function bu(e){return e.x+e.vx}function xu(e){return e.y+e.vy}function Su(e){var t,n,r,i=1,a=1;typeof e!=`function`&&(e=vu(e==null?1:+e));function o(){for(var e,o=t.length,c,l,u,d,f,p,m=0;m<a;++m)for(c=mu(t,bu,xu).visitAfter(s),e=0;e<o;++e)l=t[e],f=n[l.index],p=f*f,u=l.x+l.vx,d=l.y+l.vy,c.visit(h);function h(e,t,n,a,o){var s=e.data,c=e.r,m=f+c;if(s){if(s.index>l.index){var h=u-s.x-s.vx,g=d-s.y-s.vy,_=h*h+g*g;_<m*m&&(h===0&&(h=yu(r),_+=h*h),g===0&&(g=yu(r),_+=g*g),_=(m-(_=Math.sqrt(_)))/_*i,l.vx+=(h*=_)*(m=(c*=c)/(p+c)),l.vy+=(g*=_)*m,s.vx-=h*(m=1-m),s.vy-=g*m)}return}return t>u+m||a<u-m||n>d+m||o<d-m}}function s(e){if(e.data)return e.r=n[e.data.index];for(var t=e.r=0;t<4;++t)e[t]&&e[t].r>e.r&&(e.r=e[t].r)}function c(){if(t){var r,i=t.length,a;for(n=Array(i),r=0;r<i;++r)a=t[r],n[a.index]=+e(a,r,t)}}return o.initialize=function(e,n){t=e,r=n,c()},o.iterations=function(e){return arguments.length?(a=+e,o):a},o.strength=function(e){return arguments.length?(i=+e,o):i},o.radius=function(t){return arguments.length?(e=typeof t==`function`?t:vu(+t),c(),o):e},o}function Cu(e){return e.index}function wu(e,t){var n=e.get(t);if(!n)throw Error(`node not found: `+t);return n}function Tu(e){var t=Cu,n=d,r,i=vu(30),a,o,s,c,l,u=1;e??=[];function d(e){return 1/Math.min(s[e.source.index],s[e.target.index])}function f(t){for(var n=0,i=e.length;n<u;++n)for(var o=0,s,d,f,p,m,h,g;o<i;++o)s=e[o],d=s.source,f=s.target,p=f.x+f.vx-d.x-d.vx||yu(l),m=f.y+f.vy-d.y-d.vy||yu(l),h=Math.sqrt(p*p+m*m),h=(h-a[o])/h*t*r[o],p*=h,m*=h,f.vx-=p*(g=c[o]),f.vy-=m*g,d.vx+=p*(g=1-g),d.vy+=m*g}function p(){if(o){var n,i=o.length,l=e.length,u=new Map(o.map((e,n)=>[t(e,n,o),e])),d;for(n=0,s=Array(i);n<l;++n)d=e[n],d.index=n,typeof d.source!=`object`&&(d.source=wu(u,d.source)),typeof d.target!=`object`&&(d.target=wu(u,d.target)),s[d.source.index]=(s[d.source.index]||0)+1,s[d.target.index]=(s[d.target.index]||0)+1;for(n=0,c=Array(l);n<l;++n)d=e[n],c[n]=s[d.source.index]/(s[d.source.index]+s[d.target.index]);r=Array(l),m(),a=Array(l),h()}}function m(){if(o)for(var t=0,i=e.length;t<i;++t)r[t]=+n(e[t],t,e)}function h(){if(o)for(var t=0,n=e.length;t<n;++t)a[t]=+i(e[t],t,e)}return f.initialize=function(e,t){o=e,l=t,p()},f.links=function(t){return arguments.length?(e=t,p(),f):e},f.id=function(e){return arguments.length?(t=e,f):t},f.iterations=function(e){return arguments.length?(u=+e,f):u},f.strength=function(e){return arguments.length?(n=typeof e==`function`?e:vu(+e),m(),f):n},f.distance=function(e){return arguments.length?(i=typeof e==`function`?e:vu(+e),h(),f):i},f}var Eu=1664525,Du=1013904223,Ou=4294967296;function ku(){let e=1;return()=>(e=(Eu*e+Du)%Ou)/Ou}function Au(e){return e.x}function ju(e){return e.y}var Mu=10,Nu=Math.PI*(3-Math.sqrt(5));function Pu(e){var t,n=1,r=.001,i=1-r**(1/300),a=0,o=.6,s=new Map,c=wc(d),l=Pi(`tick`,`end`),u=ku();e??=[];function d(){f(),l.call(`tick`,t),n<r&&(c.stop(),l.call(`end`,t))}function f(r){var c,l=e.length,u;r===void 0&&(r=1);for(var d=0;d<r;++d)for(n+=(a-n)*i,s.forEach(function(e){e(n)}),c=0;c<l;++c)u=e[c],u.fx==null?u.x+=u.vx*=o:(u.x=u.fx,u.vx=0),u.fy==null?u.y+=u.vy*=o:(u.y=u.fy,u.vy=0);return t}function p(){for(var t=0,n=e.length,r;t<n;++t){if(r=e[t],r.index=t,r.fx!=null&&(r.x=r.fx),r.fy!=null&&(r.y=r.fy),isNaN(r.x)||isNaN(r.y)){var i=Mu*Math.sqrt(.5+t),a=t*Nu;r.x=i*Math.cos(a),r.y=i*Math.sin(a)}(isNaN(r.vx)||isNaN(r.vy))&&(r.vx=r.vy=0)}}function m(t){return t.initialize&&t.initialize(e,u),t}return p(),t={tick:f,restart:function(){return c.restart(d),t},stop:function(){return c.stop(),t},nodes:function(n){return arguments.length?(e=n,p(),s.forEach(m),t):e},alpha:function(e){return arguments.length?(n=+e,t):n},alphaMin:function(e){return arguments.length?(r=+e,t):r},alphaDecay:function(e){return arguments.length?(i=+e,t):+i},alphaTarget:function(e){return arguments.length?(a=+e,t):a},velocityDecay:function(e){return arguments.length?(o=1-e,t):1-o},randomSource:function(e){return arguments.length?(u=e,s.forEach(m),t):u},force:function(e,n){return arguments.length>1?(n==null?s.delete(e):s.set(e,m(n)),t):s.get(e)},find:function(t,n,r){var i=0,a=e.length,o,s,c,l,u;for(r==null?r=1/0:r*=r,i=0;i<a;++i)l=e[i],o=t-l.x,s=n-l.y,c=o*o+s*s,c<r&&(u=l,r=c);return u},on:function(e,n){return arguments.length>1?(l.on(e,n),t):l.on(e)}}}function Fu(){var e,t,n,r,i=vu(-30),a,o=1,s=1/0,c=.81;function l(n){var i,a=e.length,o=mu(e,Au,ju).visitAfter(d);for(r=n,i=0;i<a;++i)t=e[i],o.visit(f)}function u(){if(e){var t,n=e.length,r;for(a=Array(n),t=0;t<n;++t)r=e[t],a[r.index]=+i(r,t,e)}}function d(e){var t=0,n,r,i=0,o,s,c;if(e.length){for(o=s=c=0;c<4;++c)(n=e[c])&&(r=Math.abs(n.value))&&(t+=n.value,i+=r,o+=r*n.x,s+=r*n.y);e.x=o/i,e.y=s/i}else{n=e,n.x=n.data.x,n.y=n.data.y;do t+=a[n.data.index];while(n=n.next)}e.value=t}function f(e,i,l,u){if(!e.value)return!0;var d=e.x-t.x,f=e.y-t.y,p=u-i,m=d*d+f*f;if(p*p/c<m)return m<s&&(d===0&&(d=yu(n),m+=d*d),f===0&&(f=yu(n),m+=f*f),m<o&&(m=Math.sqrt(o*m)),t.vx+=d*e.value*r/m,t.vy+=f*e.value*r/m),!0;if(!(e.length||m>=s)){(e.data!==t||e.next)&&(d===0&&(d=yu(n),m+=d*d),f===0&&(f=yu(n),m+=f*f),m<o&&(m=Math.sqrt(o*m)));do e.data!==t&&(p=a[e.data.index]*r/m,t.vx+=d*p,t.vy+=f*p);while(e=e.next)}}return l.initialize=function(t,r){e=t,n=r,u()},l.strength=function(e){return arguments.length?(i=typeof e==`function`?e:vu(+e),u(),l):i},l.distanceMin=function(e){return arguments.length?(o=e*e,l):Math.sqrt(o)},l.distanceMax=function(e){return arguments.length?(s=e*e,l):Math.sqrt(s)},l.theta=function(e){return arguments.length?(c=e*e,l):Math.sqrt(c)},l}var Iu=e=>()=>e;function Lu(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ru(e,t,n){this.k=e,this.x=t,this.y=n}Ru.prototype={constructor:Ru,scale:function(e){return e===1?this:new Ru(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ru(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var zu=new Ru(1,0,0);Bu.prototype=Ru.prototype;function Bu(e){for(;!e.__zoom;)if(!(e=e.parentNode))return zu;return e.__zoom}function Vu(e){e.stopImmediatePropagation()}function Hu(e){e.preventDefault(),e.stopImmediatePropagation()}function Uu(e){return(!e.ctrlKey||e.type===`wheel`)&&!e.button}function Wu(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute(`viewBox`)?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Gu(){return this.__zoom||zu}function Ku(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function qu(){return navigator.maxTouchPoints||`ontouchstart`in this}function Ju(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}function Yu(){var e=Uu,t=Wu,n=Ju,r=Ku,i=qu,a=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],s=250,c=lc,l=Pi(`start`,`zoom`,`end`),u,d,f,p=500,m=150,h=0,g=10;function _(e){e.property(`__zoom`,Gu).on(`wheel.zoom`,w,{passive:!1}).on(`mousedown.zoom`,T).on(`dblclick.zoom`,E).filter(i).on(`touchstart.zoom`,ee).on(`touchmove.zoom`,D).on(`touchend.zoom touchcancel.zoom`,te).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}_.transform=function(e,t,n,r){var i=e.selection?e.selection():e;i.property(`__zoom`,Gu),e===i?i.interrupt().each(function(){S(this,arguments).event(r).start().zoom(null,typeof t==`function`?t.apply(this,arguments):t).end()}):x(e,t,n,r)},_.scaleBy=function(e,t,n,r){_.scaleTo(e,function(){return this.__zoom.k*(typeof t==`function`?t.apply(this,arguments):t)},n,r)},_.scaleTo=function(e,r,i,a){_.transform(e,function(){var e=t.apply(this,arguments),a=this.__zoom,s=i==null?b(e):typeof i==`function`?i.apply(this,arguments):i,c=a.invert(s),l=typeof r==`function`?r.apply(this,arguments):r;return n(y(v(a,l),s,c),e,o)},i,a)},_.translateBy=function(e,r,i,a){_.transform(e,function(){return n(this.__zoom.translate(typeof r==`function`?r.apply(this,arguments):r,typeof i==`function`?i.apply(this,arguments):i),t.apply(this,arguments),o)},null,a)},_.translateTo=function(e,r,i,a,s){_.transform(e,function(){var e=t.apply(this,arguments),s=this.__zoom,c=a==null?b(e):typeof a==`function`?a.apply(this,arguments):a;return n(zu.translate(c[0],c[1]).scale(s.k).translate(typeof r==`function`?-r.apply(this,arguments):-r,typeof i==`function`?-i.apply(this,arguments):-i),e,o)},a,s)};function v(e,t){return t=Math.max(a[0],Math.min(a[1],t)),t===e.k?e:new Ru(t,e.x,e.y)}function y(e,t,n){var r=t[0]-n[0]*e.k,i=t[1]-n[1]*e.k;return r===e.x&&i===e.y?e:new Ru(e.k,r,i)}function b(e){return[(+e[0][0]+ +e[1][0])/2,(+e[0][1]+ +e[1][1])/2]}function x(e,n,r,i){e.on(`start.zoom`,function(){S(this,arguments).event(i).start()}).on(`interrupt.zoom end.zoom`,function(){S(this,arguments).event(i).end()}).tween(`zoom`,function(){var e=this,a=arguments,o=S(e,a).event(i),s=t.apply(e,a),l=r==null?b(s):typeof r==`function`?r.apply(e,a):r,u=Math.max(s[1][0]-s[0][0],s[1][1]-s[0][1]),d=e.__zoom,f=typeof n==`function`?n.apply(e,a):n,p=c(d.invert(l).concat(u/d.k),f.invert(l).concat(u/f.k));return function(e){if(e===1)e=f;else{var t=p(e),n=u/t[2];e=new Ru(n,l[0]-t[0]*n,l[1]-t[1]*n)}o.zoom(null,e)}})}function S(e,t,n){return!n&&e.__zooming||new C(e,t)}function C(e,n){this.that=e,this.args=n,this.active=0,this.sourceEvent=null,this.extent=t.apply(e,n),this.taps=0}C.prototype={event:function(e){return e&&(this.sourceEvent=e),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit(`start`)),this},zoom:function(e,t){return this.mouse&&e!==`mouse`&&(this.mouse[1]=t.invert(this.mouse[0])),this.touch0&&e!==`touch`&&(this.touch0[1]=t.invert(this.touch0[0])),this.touch1&&e!==`touch`&&(this.touch1[1]=t.invert(this.touch1[0])),this.that.__zoom=t,this.emit(`zoom`),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit(`end`)),this},emit:function(e){var t=Lo(this.that).datum();l.call(e,this.that,new Lu(e,{sourceEvent:this.sourceEvent,target:_,type:e,transform:this.that.__zoom,dispatch:l}),t)}};function w(t,...i){if(!e.apply(this,arguments))return;var s=S(this,i).event(t),c=this.__zoom,l=Math.max(a[0],Math.min(a[1],c.k*2**r.apply(this,arguments))),u=zo(t);if(s.wheel)(s.mouse[0][0]!==u[0]||s.mouse[0][1]!==u[1])&&(s.mouse[1]=c.invert(s.mouse[0]=u)),clearTimeout(s.wheel);else if(c.k===l)return;else s.mouse=[u,c.invert(u)],Lc(this),s.start();Hu(t),s.wheel=setTimeout(d,m),s.zoom(`mouse`,n(y(v(c,l),s.mouse[0],s.mouse[1]),s.extent,o));function d(){s.wheel=null,s.end()}}function T(t,...r){if(f||!e.apply(this,arguments))return;var i=t.currentTarget,a=S(this,r,!0).event(t),s=Lo(t.view).on(`mousemove.zoom`,d,!0).on(`mouseup.zoom`,p,!0),c=zo(t,i),l=t.clientX,u=t.clientY;Wo(t.view),Vu(t),a.mouse=[c,this.__zoom.invert(c)],Lc(this),a.start();function d(e){if(Hu(e),!a.moved){var t=e.clientX-l,r=e.clientY-u;a.moved=t*t+r*r>h}a.event(e).zoom(`mouse`,n(y(a.that.__zoom,a.mouse[0]=zo(e,i),a.mouse[1]),a.extent,o))}function p(e){s.on(`mousemove.zoom mouseup.zoom`,null),Go(e.view,a.moved),Hu(e),a.event(e).end()}}function E(r,...i){if(e.apply(this,arguments)){var a=this.__zoom,c=zo(r.changedTouches?r.changedTouches[0]:r,this),l=a.invert(c),u=a.k*(r.shiftKey?.5:2),d=n(y(v(a,u),c,l),t.apply(this,i),o);Hu(r),s>0?Lo(this).transition().duration(s).call(x,d,c,r):Lo(this).call(_.transform,d,c,r)}}function ee(t,...n){if(e.apply(this,arguments)){var r=t.touches,i=r.length,a=S(this,n,t.changedTouches.length===i).event(t),o,s,c,l;for(Vu(t),s=0;s<i;++s)c=r[s],l=zo(c,this),l=[l,this.__zoom.invert(l),c.identifier],a.touch0?!a.touch1&&a.touch0[2]!==l[2]&&(a.touch1=l,a.taps=0):(a.touch0=l,o=!0,a.taps=1+!!u);u&&=clearTimeout(u),o&&(a.taps<2&&(d=l[0],u=setTimeout(function(){u=null},p)),Lc(this),a.start())}}function D(e,...t){if(this.__zooming){var r=S(this,t).event(e),i=e.changedTouches,a=i.length,s,c,l,u;for(Hu(e),s=0;s<a;++s)c=i[s],l=zo(c,this),r.touch0&&r.touch0[2]===c.identifier?r.touch0[0]=l:r.touch1&&r.touch1[2]===c.identifier&&(r.touch1[0]=l);if(c=r.that.__zoom,r.touch1){var d=r.touch0[0],f=r.touch0[1],p=r.touch1[0],m=r.touch1[1],h=(h=p[0]-d[0])*h+(h=p[1]-d[1])*h,g=(g=m[0]-f[0])*g+(g=m[1]-f[1])*g;c=v(c,Math.sqrt(h/g)),l=[(d[0]+p[0])/2,(d[1]+p[1])/2],u=[(f[0]+m[0])/2,(f[1]+m[1])/2]}else if(r.touch0)l=r.touch0[0],u=r.touch0[1];else return;r.zoom(`touch`,n(y(c,l,u),r.extent,o))}}function te(e,...t){if(this.__zooming){var n=S(this,t).event(e),r=e.changedTouches,i=r.length,a,o;for(Vu(e),f&&clearTimeout(f),f=setTimeout(function(){f=null},p),a=0;a<i;++a)o=r[a],n.touch0&&n.touch0[2]===o.identifier?delete n.touch0:n.touch1&&n.touch1[2]===o.identifier&&delete n.touch1;if(n.touch1&&!n.touch0&&(n.touch0=n.touch1,delete n.touch1),n.touch0)n.touch0[1]=this.__zoom.invert(n.touch0[0]);else if(n.end(),n.taps===2&&(o=zo(o,this),Math.hypot(d[0]-o[0],d[1]-o[1])<g)){var s=Lo(this).on(`dblclick.zoom`);s&&s.apply(this,arguments)}}}return _.wheelDelta=function(e){return arguments.length?(r=typeof e==`function`?e:Iu(+e),_):r},_.filter=function(t){return arguments.length?(e=typeof t==`function`?t:Iu(!!t),_):e},_.touchable=function(e){return arguments.length?(i=typeof e==`function`?e:Iu(!!e),_):i},_.extent=function(e){return arguments.length?(t=typeof e==`function`?e:Iu([[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]]),_):t},_.scaleExtent=function(e){return arguments.length?(a[0]=+e[0],a[1]=+e[1],_):[a[0],a[1]]},_.translateExtent=function(e){return arguments.length?(o[0][0]=+e[0][0],o[1][0]=+e[1][0],o[0][1]=+e[0][1],o[1][1]=+e[1][1],_):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},_.constrain=function(e){return arguments.length?(n=e,_):n},_.duration=function(e){return arguments.length?(s=+e,_):s},_.interpolate=function(e){return arguments.length?(c=e,_):c},_.on=function(){var e=l.on.apply(l,arguments);return e===l?_:e},_.clickDistance=function(e){return arguments.length?(h=(e=+e)*e,_):Math.sqrt(h)},_.tapDistance=function(e){return arguments.length?(g=+e,_):g},_}function Xu(){let{networkData:e}=$n(),t=(0,x.useRef)(null),n=(0,x.useRef)(null),[r,i]=(0,x.useState)(null),[a,o]=(0,x.useState)({width:900,height:600});return(0,x.useEffect)(()=>{let e=()=>{if(n.current){let e=n.current.getBoundingClientRect();o({width:e.width,height:Math.max(e.height,550)})}};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,x.useEffect)(()=>{if(!t.current||a.width<100)return;let n=Lo(t.current);n.selectAll(`*`).remove();let{width:r,height:o}=a;n.attr(`viewBox`,`0 0 ${r} ${o}`);let s=n.append(`defs`),c=s.append(`linearGradient`).attr(`id`,`link-gradient`);c.append(`stop`).attr(`offset`,`0%`).attr(`stop-color`,`#3b82f6`).attr(`stop-opacity`,.5),c.append(`stop`).attr(`offset`,`100%`).attr(`stop-color`,`#06b6d4`).attr(`stop-opacity`,.5);let l=s.append(`filter`).attr(`id`,`glow`);l.append(`feGaussianBlur`).attr(`stdDeviation`,`3`).attr(`result`,`blur`),l.append(`feMerge`).selectAll(`feMergeNode`).data([`blur`,`SourceGraphic`]).enter().append(`feMergeNode`).attr(`in`,e=>e);let u=n.append(`g`),d=Yu().scaleExtent([.3,4]).on(`zoom`,e=>u.attr(`transform`,e.transform));n.call(d);let f=Pu(e.nodes).force(`link`,Tu(e.links).id(e=>e.id).distance(e=>e.strength===`strong`?100:e.strength===`medium`?150:200)).force(`charge`,Fu().strength(-300)).force(`center`,Yl(r/2,o/2)).force(`collision`,Su().radius(40)),p=u.append(`g`).selectAll(`line`).data(e.links).enter().append(`line`).attr(`stroke`,e=>e.strength===`strong`?`#3b82f6`:e.strength===`medium`?`#f59e0b`:`#475569`).attr(`stroke-width`,e=>e.strength===`strong`?3:e.strength===`medium`?2:1).attr(`stroke-opacity`,e=>e.strength===`strong`?.7:e.strength===`medium`?.5:.3).attr(`stroke-dasharray`,e=>e.strength===`weak`?`4,4`:null),m=u.append(`g`).selectAll(`text`).data(e.links).enter().append(`text`).attr(`font-size`,9).attr(`fill`,`#64748b`).attr(`text-anchor`,`middle`).attr(`font-family`,`Inter, sans-serif`).text(e=>e.label),h={high:`#ef4444`,medium:`#f59e0b`,low:`#10b981`},g=u.append(`g`).selectAll(`g`).data(e.nodes).enter().append(`g`).attr(`cursor`,`pointer`).call(Qo().on(`start`,(e,t)=>{e.active||f.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}).on(`drag`,(e,t)=>{t.fx=e.x,t.fy=e.y}).on(`end`,(e,t)=>{e.active||f.alphaTarget(0),t.fx=null,t.fy=null}));return g.each(function(e){let t=Lo(this),n=h[e.risk]||`#64748b`;e.type===`person`?(t.append(`circle`).attr(`r`,26).attr(`fill`,`none`).attr(`stroke`,n).attr(`stroke-width`,1.5).attr(`stroke-opacity`,.3).attr(`filter`,`url(#glow)`),t.append(`circle`).attr(`r`,20).attr(`fill`,`${n}20`).attr(`stroke`,n).attr(`stroke-width`,2),t.append(`text`).attr(`text-anchor`,`middle`).attr(`dy`,4).attr(`font-size`,11).attr(`font-weight`,700).attr(`fill`,n).attr(`font-family`,`Inter, sans-serif`).text(e.id.split(` `).map(e=>e[0]).join(``))):t.append(`rect`).attr(`width`,28).attr(`height`,28).attr(`x`,-14).attr(`y`,-14).attr(`transform`,`rotate(45)`).attr(`fill`,`${n}20`).attr(`stroke`,n).attr(`stroke-width`,2).attr(`rx`,3),t.append(`text`).attr(`text-anchor`,`middle`).attr(`dy`,e.type===`person`?36:30).attr(`font-size`,10).attr(`fill`,`#94a3b8`).attr(`font-family`,`Inter, sans-serif`).attr(`font-weight`,500).text(e.id.length>18?e.id.substring(0,16)+`…`:e.id)}),g.on(`mouseover`,function(t,n){Lo(this).select(`circle:nth-child(2), rect`).transition().duration(200).attr(`stroke-width`,3),p.attr(`stroke-opacity`,e=>e.source.id===n.id||e.target.id===n.id?1:.1).attr(`stroke-width`,e=>e.source.id===n.id||e.target.id===n.id?4:1),g.attr(`opacity`,t=>t.id===n.id||e.links.some(e=>(e.source.id||e.source)===n.id&&(e.target.id||e.target)===t.id||(e.target.id||e.target)===n.id&&(e.source.id||e.source)===t.id)?1:.2)}).on(`mouseout`,function(){g.attr(`opacity`,1),p.attr(`stroke-opacity`,e=>e.strength===`strong`?.7:e.strength===`medium`?.5:.3).attr(`stroke-width`,e=>e.strength===`strong`?3:e.strength===`medium`?2:1),g.selectAll(`circle:nth-child(2), rect`).transition().duration(200).attr(`stroke-width`,2)}).on(`click`,(t,n)=>{let r=e.links.filter(e=>(e.source.id||e.source)===n.id||(e.target.id||e.target)===n.id);i({...n,connections:r})}),f.on(`tick`,()=>{p.attr(`x1`,e=>e.source.x).attr(`y1`,e=>e.source.y).attr(`x2`,e=>e.target.x).attr(`y2`,e=>e.target.y),m.attr(`x`,e=>(e.source.x+e.target.x)/2).attr(`y`,e=>(e.source.y+e.target.y)/2),g.attr(`transform`,e=>`translate(${e.x},${e.y})`)}),()=>f.stop()},[a]),(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Suspect Network Graph`}),(0,W.jsx)(`p`,{children:`Interactive relationship graph showing connections between suspects and locations.`})]}),(0,W.jsxs)(`div`,{className:`network-legend animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`legend-section`,children:[(0,W.jsx)(`span`,{className:`legend-title`,children:`Nodes`}),(0,W.jsxs)(`div`,{className:`legend-items`,children:[(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-circle`,style:{background:`#ef4444`}}),` High Risk`]}),(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-circle`,style:{background:`#f59e0b`}}),` Medium Risk`]}),(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-circle`,style:{background:`#10b981`}}),` Low Risk`]}),(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-diamond`}),` Location`]})]})]}),(0,W.jsxs)(`div`,{className:`legend-section`,children:[(0,W.jsx)(`span`,{className:`legend-title`,children:`Edges`}),(0,W.jsxs)(`div`,{className:`legend-items`,children:[(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-line strong`}),` Strong (Frequent)`]}),(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-line medium`}),` Medium`]}),(0,W.jsxs)(`span`,{className:`legend-item`,children:[(0,W.jsx)(`span`,{className:`legend-line weak`}),` Weak (Rare)`]})]})]})]}),(0,W.jsxs)(`div`,{className:`network-container animate-fade-in-up delay-2`,children:[(0,W.jsx)(`div`,{ref:n,className:`network-graph-wrapper`,children:(0,W.jsx)(`svg`,{ref:t,className:`network-svg`})}),r&&(0,W.jsxs)(`div`,{className:`network-detail-panel animate-slide-right`,children:[(0,W.jsxs)(`div`,{className:`detail-panel-header`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-2`,children:[r.type===`person`?(0,W.jsx)(mi,{size:18}):(0,W.jsx)(Hr,{size:18}),(0,W.jsx)(`h3`,{children:r.id})]}),(0,W.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>i(null),children:(0,W.jsx)(_i,{size:16})})]}),(0,W.jsxs)(`div`,{className:`detail-panel-body`,children:[(0,W.jsxs)(`div`,{className:`detail-row`,children:[(0,W.jsx)(`span`,{className:`detail-label`,children:`Type`}),(0,W.jsx)(`span`,{className:`tag`,children:r.type})]}),(0,W.jsxs)(`div`,{className:`detail-row`,children:[(0,W.jsx)(`span`,{className:`detail-label`,children:`Risk Level`}),(0,W.jsx)(`span`,{className:`badge badge-${r.risk}`,children:r.risk})]}),(0,W.jsxs)(`div`,{className:`detail-row`,children:[(0,W.jsx)(`span`,{className:`detail-label`,children:`Connections`}),(0,W.jsx)(`span`,{className:`font-bold`,children:r.connections?.length||0})]}),(0,W.jsx)(`div`,{className:`section-divider`}),(0,W.jsx)(`h4`,{style:{fontSize:`0.8rem`,color:`var(--text-secondary)`,marginBottom:8},children:`CONNECTIONS`}),r.connections?.map((e,t)=>(0,W.jsxs)(`div`,{className:`connection-item`,children:[(0,W.jsx)(`span`,{className:`connection-target`,children:(e.source.id||e.source)===r.id?e.target.id||e.target:e.source.id||e.source}),(0,W.jsx)(`span`,{className:`badge badge-${e.strength===`strong`?`high`:e.strength===`medium`?`medium`:`low`}`,children:e.strength}),e.calls&&(0,W.jsxs)(`span`,{className:`text-xs text-mono text-muted`,children:[e.calls,` calls`]})]},t))]})]})]}),(0,W.jsx)(`style`,{children:`
        .network-legend {
          display: flex;
          gap: 32px;
          padding: 14px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .legend-title {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-right: 12px;
        }
        .legend-items {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .legend-circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .legend-diamond {
          width: 10px;
          height: 10px;
          background: var(--accent-primary);
          transform: rotate(45deg);
          border-radius: 2px;
        }
        .legend-line {
          width: 24px;
          height: 0;
          border-top: 2px solid;
        }
        .legend-line.strong { border-color: #3b82f6; border-width: 3px; }
        .legend-line.medium { border-color: #f59e0b; }
        .legend-line.weak { border-color: #475569; border-style: dashed; }
        .network-container {
          display: flex;
          gap: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 550px;
        }
        .network-graph-wrapper {
          flex: 1;
          min-height: 550px;
        }
        .network-svg {
          width: 100%;
          height: 100%;
          min-height: 550px;
        }
        .network-detail-panel {
          width: 300px;
          border-left: 1px solid var(--border-primary);
          background: var(--bg-secondary);
          overflow-y: auto;
        }
        .detail-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-primary);
        }
        .detail-panel-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .detail-panel-body {
          padding: 16px 20px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        .detail-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        .connection-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .connection-target {
          font-size: 0.82rem;
          font-weight: 600;
          flex: 1;
        }
        .legend-section {
          display: flex;
          align-items: center;
        }
      `})]})}var Zu={cctv:{icon:gi,color:`var(--accent-primary)`,label:`CCTV Detection`},call:{icon:Yr,color:`var(--accent-secondary)`,label:`Call Intercept`},location:{icon:Hr,color:`var(--accent-warning)`,label:`Location Ping`},document:{icon:jr,color:`var(--accent-success)`,label:`Document Analysis`}},Qu={high:`var(--accent-danger)`,medium:`var(--accent-warning)`,low:`var(--accent-success)`};function $u(){let{timelineEvents:e}=$n(),[t,n]=(0,x.useState)(`all`),[r,i]=(0,x.useState)(`all`),[a,o]=(0,x.useState)(null),s=e.filter(e=>!(t!==`all`&&e.type!==t||r!==`all`&&e.severity!==r)),c={};return s.forEach(e=>{let t=e.time.split(` `)[0];c[t]||(c[t]=[]),c[t].push(e)}),(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Investigation Timeline`}),(0,W.jsx)(`p`,{children:`Chronological view of all events from CCTV, call logs, location pings, and document analysis.`})]}),(0,W.jsx)(`div`,{className:`timeline-stats animate-fade-in-up`,children:Object.entries(Zu).map(([r,i])=>{let a=e.filter(e=>e.type===r).length,o=i.icon;return(0,W.jsxs)(`div`,{className:`timeline-stat`,onClick:()=>n(t===r?`all`:r),style:{borderColor:t===r?i.color:`var(--border-primary)`},children:[(0,W.jsx)(o,{size:20,style:{color:i.color}}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`span`,{className:`timeline-stat-value`,children:a}),(0,W.jsx)(`span`,{className:`timeline-stat-label`,children:i.label})]})]},r)})}),(0,W.jsxs)(`div`,{className:`timeline-filters animate-fade-in-up delay-1`,children:[(0,W.jsxs)(`div`,{className:`filter-group`,children:[(0,W.jsx)(`span`,{className:`filter-label`,children:`Type`}),(0,W.jsx)(`div`,{className:`filter-tabs`,children:[`all`,`cctv`,`call`,`location`,`document`].map(e=>(0,W.jsx)(`button`,{className:`filter-tab ${t===e?`active`:``}`,onClick:()=>n(e),children:e===`all`?`All`:Zu[e]?.label||e},e))})]}),(0,W.jsxs)(`div`,{className:`filter-group`,children:[(0,W.jsx)(`span`,{className:`filter-label`,children:`Severity`}),(0,W.jsx)(`div`,{className:`filter-tabs`,children:[`all`,`high`,`medium`,`low`].map(e=>(0,W.jsx)(`button`,{className:`filter-tab ${r===e?`active`:``}`,onClick:()=>i(e),style:r===e&&e!==`all`?{background:Qu[e]}:{},children:e===`all`?`All`:e.charAt(0).toUpperCase()+e.slice(1)},e))})]})]}),(0,W.jsx)(`div`,{className:`timeline-container animate-fade-in-up delay-2`,children:Object.entries(c).map(([e,t])=>(0,W.jsxs)(`div`,{className:`timeline-date-group`,children:[(0,W.jsxs)(`div`,{className:`timeline-date-header`,children:[(0,W.jsx)(`span`,{className:`timeline-date-badge`,children:new Date(e).toLocaleDateString(`en-IN`,{weekday:`long`,month:`short`,day:`numeric`,year:`numeric`})}),(0,W.jsxs)(`span`,{className:`timeline-date-count`,children:[t.length,` events`]})]}),(0,W.jsx)(`div`,{className:`timeline-track`,children:t.map((e,t)=>{let n=Zu[e.type],r=n.icon,i=a===e.id;return(0,W.jsxs)(`div`,{className:`timeline-event animate-fade-in-up delay-${Math.min(t+1,6)}`,onClick:()=>o(i?null:e.id),children:[(0,W.jsx)(`div`,{className:`timeline-time`,children:(0,W.jsx)(`span`,{className:`time-value`,children:e.time.split(` `)[1]})}),(0,W.jsxs)(`div`,{className:`timeline-connector`,children:[(0,W.jsx)(`div`,{className:`timeline-dot`,style:{background:n.color,boxShadow:`0 0 10px ${n.color}60`}}),(0,W.jsx)(`div`,{className:`timeline-line`})]}),(0,W.jsxs)(`div`,{className:`timeline-card ${i?`expanded`:``}`,children:[(0,W.jsxs)(`div`,{className:`timeline-card-header`,children:[(0,W.jsx)(`div`,{className:`timeline-icon`,style:{color:n.color,background:`${n.color}15`},children:(0,W.jsx)(r,{size:18})}),(0,W.jsxs)(`div`,{className:`timeline-card-info`,children:[(0,W.jsx)(`h4`,{children:e.title}),(0,W.jsxs)(`div`,{className:`timeline-meta`,children:[(0,W.jsx)(`span`,{className:`badge badge-${e.severity}`,children:e.severity}),(0,W.jsx)(`span`,{className:`tag`,children:n.label}),e.suspect&&(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[`Suspect: `,e.suspect]})]})]}),(0,W.jsx)(gr,{size:16,className:`timeline-chevron ${i?`rotated`:``}`})]}),i&&(0,W.jsxs)(`div`,{className:`timeline-card-body animate-fade-in`,children:[(0,W.jsx)(`p`,{children:e.description}),e.location&&(0,W.jsxs)(`div`,{className:`timeline-location`,children:[(0,W.jsx)(Hr,{size:14}),(0,W.jsx)(`span`,{children:e.location})]})]})]})]},e.id)})})]},e))}),(0,W.jsx)(`style`,{children:`
        .timeline-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .timeline-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .timeline-stat:hover {
          background: var(--bg-hover);
        }
        .timeline-stat-value {
          font-size: 1.25rem;
          font-weight: 800;
          display: block;
        }
        .timeline-stat-label {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          display: block;
        }
        .timeline-filters {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .filter-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .timeline-container {
          position: relative;
        }
        .timeline-date-group {
          margin-bottom: 32px;
        }
        .timeline-date-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .timeline-date-badge {
          padding: 6px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .timeline-date-count {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }
        .timeline-track {
          position: relative;
          padding-left: 20px;
        }
        .timeline-event {
          display: flex;
          gap: 16px;
          margin-bottom: 8px;
        }
        .timeline-time {
          width: 60px;
          flex-shrink: 0;
          padding-top: 14px;
        }
        .time-value {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 14px;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          z-index: 1;
        }
        .timeline-line {
          width: 2px;
          flex: 1;
          background: var(--border-primary);
          margin-top: 4px;
        }
        .timeline-card {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }
        .timeline-card:hover {
          border-color: var(--border-secondary);
          background: var(--bg-hover);
        }
        .timeline-card.expanded {
          border-color: var(--border-accent);
        }
        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .timeline-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .timeline-card-info {
          flex: 1;
          min-width: 0;
        }
        .timeline-card-info h4 {
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .timeline-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .timeline-chevron {
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
          flex-shrink: 0;
        }
        .timeline-chevron.rotated {
          transform: rotate(180deg);
        }
        .timeline-card-body {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-primary);
        }
        .timeline-card-body p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .timeline-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 0.8rem;
          color: var(--accent-warning);
        }
        @media (max-width: 768px) {
          .timeline-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}function ed(e,t){let n=(0,x.useRef)(t);(0,x.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function td(e,t,n){t.center!==n.center&&e.setLatLng(t.center),t.radius!=null&&t.radius!==n.radius&&e.setRadius(t.radius)}function nd(e){return Object.freeze({__version:1,map:e})}function rd(e,t){return Object.freeze({...e,...t})}var id=(0,x.createContext)(null);function ad(){let e=(0,x.use)(id);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}var od=c(m(),1);function sd(e){function t(t,n){let{instance:r,context:i}=e(t).current;(0,x.useImperativeHandle)(n,()=>r);let{children:a}=t;return a==null?null:x.createElement(id,{value:i},a)}return(0,x.forwardRef)(t)}function cd(e){function t(t,n){let[r,i]=(0,x.useState)(!1),{instance:a}=e(t,i).current;(0,x.useImperativeHandle)(n,()=>a),(0,x.useEffect)(function(){r&&a.update()},[a,r,t.children]);let o=a._contentNode;return o?(0,od.createPortal)(t.children,o):null}return(0,x.forwardRef)(t)}function ld(e){function t(t,n){let{instance:r}=e(t).current;return(0,x.useImperativeHandle)(n,()=>r),null}return(0,x.forwardRef)(t)}function ud(e,t){let n=(0,x.useRef)(void 0);(0,x.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function dd(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function fd(e,t){return function(n,r){let i=ad(),a=e(dd(n,i),i);return ed(i.map,n.attribution),ud(a.current,n.eventHandlers),t(a.current,i,n,r),a}}var pd=o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,w=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function T(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function E(e){e&&w.call(window,e)}var ee={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:w,requestAnimFrame:T,cancelAnimFrame:E};function D(){}D.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(te(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},D.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},D.mergeOptions=function(e){return n(this.prototype.options,e),this},D.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function te(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var ne={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};ne.addEventListener=ne.on,ne.removeEventListener=ne.clearAllEventListeners=ne.off,ne.addOneTimeEventListener=ne.once,ne.fireEvent=ne.fire,ne.hasEventListeners=ne.listens;var re=D.extend(ne);function O(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var ie=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(e){return this.clone()._add(k(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(k(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new O(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new O(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ie(this.x),this.y=ie(this.y),this},distanceTo:function(e){e=k(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=k(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=k(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function k(e,t,n){return e instanceof O?e:_(e)?new O(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new O(e.x,e.y):new O(e,t,n)}function A(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}A.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof O||typeof e[0]==`number`||`x`in e)t=n=k(e);else if(e=j(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return k((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return k(this.min.x,this.max.y)},getTopRight:function(){return k(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof O?k(e):j(e),e instanceof A?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=j(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=j(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return j(k(t.x-r,t.y-i),k(n.x+r,n.y+i))},equals:function(e){return e?(e=j(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function j(e,t){return!e||e instanceof A?e:new A(e,t)}function M(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}M.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof P)r=e,i=e;else if(e instanceof M){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(F(e)||N(e)):this;return!t&&!n?(this._southWest=new P(r.lat,r.lng),this._northEast=new P(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new M(new P(t.lat-r,t.lng-i),new P(n.lat+r,n.lng+i))},getCenter:function(){return new P((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new P(this.getNorth(),this.getWest())},getSouthEast:function(){return new P(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof P||`lat`in e?F(e):N(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof M?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=N(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=N(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=N(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function N(e,t){return e instanceof M?e:new M(e,t)}function P(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}P.prototype={equals:function(e,t){return e?(e=F(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return oe.distance(this,F(e))},wrap:function(){return oe.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return N([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new P(this.lat,this.lng,this.alt)}};function F(e,t,n){return e instanceof P?e:_(e)&&typeof e[0]!=`object`?e.length===3?new P(e[0],e[1],e[2]):e.length===2?new P(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new P(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new P(e,t,n)}var ae={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new A(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new P(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new M(new P(a.lat-r,a.lng-i),new P(o.lat-r,o.lng-i))}},oe=n({},ae,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),se=6378137,ce={R:se,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new O(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new P((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=se*Math.PI;return new A([-e,-e],[e,e])})()};function le(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}le.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new O((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function ue(e,t,n,r){return new le(e,t,n,r)}var de=n({},oe,{code:`EPSG:3857`,projection:ce,transformation:function(){var e=.5/(Math.PI*ce.R);return ue(e,.5,-e,.5)}()}),fe=n({},de,{code:`EPSG:900913`});function pe(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function me(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?I.svg?`z`:`x`:``}return n||`M0 0`}var he=document.documentElement.style,ge=`ActiveXObject`in window,_e=ge&&!document.addEventListener,ve=`msLaunchUri`in navigator&&!(`documentMode`in document),ye=Qe(`webkit`),be=Qe(`android`),xe=Qe(`android 2`)||Qe(`android 3`),Se=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ce=be&&Qe(`Google`)&&Se<537&&!(`AudioNode`in window),we=!!window.opera,Te=!ve&&Qe(`chrome`),Ee=Qe(`gecko`)&&!ye&&!we&&!ge,De=!Te&&Qe(`safari`),Oe=Qe(`phantom`),ke=`OTransition`in he,Ae=navigator.platform.indexOf(`Win`)===0,je=ge&&`transition`in he,Me=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!xe,Ne=`MozPerspective`in he,Pe=!window.L_DISABLE_3D&&(je||Me||Ne)&&!ke&&!Oe,Fe=typeof orientation<`u`||Qe(`mobile`),Ie=Fe&&ye,Le=Fe&&Me,Re=!window.PointerEvent&&window.MSPointerEvent,ze=!!(window.PointerEvent||Re),Be=`ontouchstart`in window||!!window.TouchEvent,Ve=!window.L_NO_TOUCH&&(Be||ze),He=Fe&&we,Ue=Fe&&Ee,We=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ge=function(){var e=!1;try{var t=Object.defineProperty({},`passive`,{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),Ke=function(){return!!document.createElement(`canvas`).getContext}(),qe=!!(document.createElementNS&&pe(`svg`).createSVGRect),Je=!!qe&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),Ye=!qe&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Xe=navigator.platform.indexOf(`Mac`)===0,Ze=navigator.platform.indexOf(`Linux`)===0;function Qe(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var I={ie:ge,ielt9:_e,edge:ve,webkit:ye,android:be,android23:xe,androidStock:Ce,opera:we,chrome:Te,gecko:Ee,safari:De,phantom:Oe,opera12:ke,win:Ae,ie3d:je,webkit3d:Me,gecko3d:Ne,any3d:Pe,mobile:Fe,mobileWebkit:Ie,mobileWebkit3d:Le,msPointer:Re,pointer:ze,touch:Ve,touchNative:Be,mobileOpera:He,mobileGecko:Ue,retina:We,passiveEvents:Ge,canvas:Ke,svg:qe,vml:Ye,inlineSvg:Je,mac:Xe,linux:Ze},$e=I.msPointer?`MSPointerDown`:`pointerdown`,et=I.msPointer?`MSPointerMove`:`pointermove`,tt=I.msPointer?`MSPointerUp`:`pointerup`,nt=I.msPointer?`MSPointerCancel`:`pointercancel`,rt={touchstart:$e,touchmove:et,touchend:tt,touchcancel:nt},it={touchstart:mt,touchmove:pt,touchend:pt,touchcancel:pt},at={},ot=!1;function st(e,t,n){return t===`touchstart`&&ft(),it[t]?(n=it[t].bind(this,n),e.addEventListener(rt[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function ct(e,t,n){if(!rt[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener(rt[t],n,!1)}function lt(e){at[e.pointerId]=e}function ut(e){at[e.pointerId]&&(at[e.pointerId]=e)}function dt(e){delete at[e.pointerId]}function ft(){ot||=(document.addEventListener($e,lt,!0),document.addEventListener(et,ut,!0),document.addEventListener(tt,dt,!0),document.addEventListener(nt,dt,!0),!0)}function pt(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],at)t.touches.push(at[n]);t.changedTouches=[t],e(t)}}function mt(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&an(t),pt(e,t)}function ht(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var gt=200;function _t(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=sn(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=gt?(r++,r===2&&t(ht(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function vt(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var yt=Nt([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),bt=Nt([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),xt=bt===`webkitTransition`||bt===`OTransition`?bt+`End`:`transitionend`;function St(e){return typeof e==`string`?document.getElementById(e):e}function Ct(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function R(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function z(e){var t=e.parentNode;t&&t.removeChild(e)}function wt(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Tt(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function Et(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function Dt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=At(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function B(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!Dt(e,t)){var a=At(e);kt(e,(a?a+` `:``)+t)}}function Ot(e,t){e.classList===void 0?kt(e,d((` `+At(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function kt(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function At(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function jt(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&Mt(e,t)}function Mt(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function Nt(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function Pt(e,t,n){var r=t||new O(0,0);e.style[yt]=(I.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function Ft(e,t){e._leaflet_pos=t,I.any3d?Pt(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function It(e){return e._leaflet_pos||new O(0,0)}var Lt,Rt,zt;if(`onselectstart`in document)Lt=function(){V(window,`selectstart`,an)},Rt=function(){H(window,`selectstart`,an)};else{var Bt=Nt([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Lt=function(){if(Bt){var e=document.documentElement.style;zt=e[Bt],e[Bt]=`none`}},Rt=function(){Bt&&(document.documentElement.style[Bt]=zt,zt=void 0)}}function Vt(){V(window,`dragstart`,an)}function Ht(){H(window,`dragstart`,an)}var Ut,Wt;function Gt(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Kt(),Ut=e,Wt=e.style.outlineStyle,e.style.outlineStyle=`none`,V(window,`keydown`,Kt))}function Kt(){Ut&&(Ut.style.outlineStyle=Wt,Ut=void 0,Wt=void 0,H(window,`keydown`,Kt))}function qt(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Jt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Yt={__proto__:null,TRANSFORM:yt,TRANSITION:bt,TRANSITION_END:xt,get:St,getStyle:Ct,create:R,remove:z,empty:wt,toFront:Tt,toBack:Et,hasClass:Dt,addClass:B,removeClass:Ot,setClass:kt,getClass:At,setOpacity:jt,testProp:Nt,setTransform:Pt,setPosition:Ft,getPosition:It,get disableTextSelection(){return Lt},get enableTextSelection(){return Rt},disableImageDrag:Vt,enableImageDrag:Ht,preventOutline:Gt,restoreOutline:Kt,getSizedParentNode:qt,getScale:Jt};function V(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)$t(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)$t(e,t[a],n,r)}return this}var Xt=`_leaflet_events`;function H(e,t,n,r){if(arguments.length===1)Zt(e),delete e[Xt];else if(t&&typeof t==`object`)for(var i in t)en(e,i,t[i],n);else if(t=f(t),arguments.length===2)Zt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)en(e,t[a],n,r);return this}function Zt(e,t){for(var n in e[Xt]){var r=n.split(/\d/)[0];(!t||t(r))&&en(e,r,null,null,n)}}var Qt={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function $t(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[Xt]&&e[Xt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!I.touchNative&&I.pointer&&t.indexOf(`touch`)===0?a=st(e,t,a):I.touch&&t===`dblclick`?a=_t(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Qt[t]||t,a,I.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,dn(e,t)&&s(t)},e.addEventListener(Qt[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[Xt]=e[Xt]||{},e[Xt][i]=a}function en(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[Xt]&&e[Xt][i];if(!a)return this;!I.touchNative&&I.pointer&&t.indexOf(`touch`)===0?ct(e,t,a):I.touch&&t===`dblclick`?vt(e,a):`removeEventListener`in e?e.removeEventListener(Qt[t]||t,a,!1):e.detachEvent(`on`+t,a),e[Xt][i]=null}function tn(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function nn(e){return $t(e,`wheel`,tn),this}function rn(e){return V(e,`mousedown touchstart dblclick contextmenu`,tn),e._leaflet_disable_click=!0,this}function an(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function on(e){return an(e),tn(e),this}function sn(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function cn(e,t){if(!t)return new O(e.clientX,e.clientY);var n=Jt(t),r=n.boundingClientRect;return new O((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var ln=I.linux&&I.chrome?window.devicePixelRatio:I.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function un(e){return I.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/ln:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function dn(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var fn={__proto__:null,on:V,off:H,stopPropagation:tn,disableScrollPropagation:nn,disableClickPropagation:rn,preventDefault:an,stop:on,getPropagationPath:sn,getMousePosition:cn,getWheelDelta:un,isExternalTarget:dn,addListener:V,removeListener:H},pn=re.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=It(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),Ft(this._el,n),this.fire(`step`)},_complete:function(){E(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),U=re.extend({options:{crs:de,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(F(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=bt&&I.any3d&&!I.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,xt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(F(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=I.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=I.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof O?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():N(e);var n=k(t.paddingTopLeft||t.padding||[0,0]),r=k(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=N(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=k(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){B(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!I.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=F(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=N(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,N(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=k(t.paddingTopLeft||t.padding||[0,0]),r=k(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=j([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new P(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),z(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(E(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)z(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=R(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new M(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=N(e),n=k(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=j(this.project(s,r),this.project(o,r)).getSize(),u=I.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new A(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(F(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(k(e),t)},layerPointToLatLng:function(e){var t=k(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(F(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(F(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(N(e))},distance:function(e,t){return this.options.crs.distance(F(e),F(t))},containerPointToLayerPoint:function(e){return k(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return k(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(k(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(e)))},mouseEventToContainerPoint:function(e){return cn(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=St(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);V(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&I.any3d,B(e,`leaflet-container`+(I.touch?` leaflet-touch`:``)+(I.retina?` leaflet-retina`:``)+(I.ielt9?` leaflet-oldie`:``)+(I.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=Ct(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),Ft(this._mapPane,new O(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(B(e.markerPane,`leaflet-zoom-hide`),B(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){Ft(this._mapPane,new O(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){Ft(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?H:V;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),I.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!dn(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Gt(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&an(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return It(this._mapPane)||new O(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return j([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new A(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new A(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=j(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new O(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=I.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){Ot(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=R(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=yt,n=this._proxy.style[t];Pt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){z(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Pt(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(T(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,B(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ot(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function mn(e,t){return new U(e,t)}var hn=D.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return B(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(z(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),gn=function(e){return new hn(e)};U.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=R(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=R(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)z(this._controlCorners[e]);z(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var _n=hn.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:r<n?1:0}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return hn.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){B(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(B(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):Ot(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return Ot(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=R(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),rn(t),nn(t);var r=this._section=R(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),V(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=R(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),V(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){an(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=R(`div`,e+`-base`,r),this._separator=R(`div`,e+`-separator`,r),this._overlaysList=R(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;wt(this._baseLayersList),wt(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=r.overlay?0:1;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),V(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,V(e,`click`,an),this.expand();var t=this;setTimeout(function(){H(e,`click`,an),t._preventClick=!1})}}),vn=function(e,t,n){return new _n(e,t,n)},yn=hn.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=R(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=R(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),rn(a),V(a,`click`,on),V(a,`click`,i,this),V(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;Ot(this._zoomInButton,t),Ot(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(B(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(B(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});U.mergeOptions({zoomControl:!0}),U.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new yn,this.addControl(this.zoomControl))});var bn=function(e){return new yn(e)},xn=hn.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=R(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=R(`div`,t,n)),e.imperial&&(this._iScale=R(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),Sn=function(e){return new xn(e)},Cn=hn.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(I.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=R(`div`,`leaflet-control-attribution`),rn(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});U.mergeOptions({attributionControl:!0}),U.addInitHook(function(){this.options.attributionControl&&new Cn().addTo(this)}),hn.Layers=_n,hn.Zoom=yn,hn.Scale=xn,hn.Attribution=Cn,gn.layers=vn,gn.zoom=bn,gn.scale=Sn,gn.attribution=function(e){return new Cn(e)};var wn=D.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});wn.addTo=function(e,t){return e.addHandler(t,this),this};var Tn={Events:ne},En=I.touch?`touchstart mousedown`:`mousedown`,Dn=re.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(V(this._dragStartTarget,En,this._onDown,this),!0)},disable:function(){this._enabled&&(Dn._dragging===this&&this.finishDrag(!0),H(this._dragStartTarget,En,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!Dt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){Dn._dragging===this&&this.finishDrag();return}if(!(Dn._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(Dn._dragging=this,this._preventOutline&&Gt(this._element),Vt(),Lt(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=qt(this._element);this._startPoint=new O(t.clientX,t.clientY),this._startPos=It(this._element),this._parentScale=Jt(n);var r=e.type===`mousedown`;V(document,r?`mousemove`:`touchmove`,this._onMove,this),V(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new O(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,an(e),this._moved||(this.fire(`dragstart`),this._moved=!0,B(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),B(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),Ft(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){Ot(document.body,`leaflet-dragging`),this._lastTarget&&=(Ot(this._lastTarget,`leaflet-drag-target`),null),H(document,`mousemove touchmove`,this._onMove,this),H(document,`mouseup touchend touchcancel`,this._onUp,this),Ht(),Rt();var t=this._moved&&this._moving;this._moving=!1,Dn._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function On(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=Bn(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=zn(l,c,d,t,n),f._code=Bn(f,t),r.push(f)):(l._code&d&&(f=zn(l,c,d,t,n),f._code=Bn(f,t),r.push(f)),r.push(c));e=r}return e}function kn(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Un(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=F([0,0]),f=N(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=An(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=F(e[n]);m.push(t.project(F([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(k(u));return F([g.lat+d.lat,g.lng+d.lng])}function An(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=F(e[i]);t+=a.lat,n+=a.lng,r++}return F([t/r,n/r])}var jn={__proto__:null,clipPolygon:On,polygonCenter:kn,centroid:An};function Mn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=In(e,n),e=Fn(e,n),e}function Nn(e,t,n){return Math.sqrt(Hn(e,t,n,!0))}function Pn(e,t,n){return Hn(e,t,n)}function Fn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,W(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function W(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=Hn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,W(e,t,n,r,o),W(e,t,n,o,i))}function In(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Vn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var Ln;function Rn(e,t,n,r,i){var a=r?Ln:Bn(e,n),o=Bn(t,n),s,c,l;for(Ln=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=zn(e,t,s,n,i),l=Bn(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function zn(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new O(l,u,i)}function Bn(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Vn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Hn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new O(i,a)}function Un(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function Wn(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Un(e)}function Gn(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Un(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=F([0,0]),d=N(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=An(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=F(e[n]);p.push(t.project(F([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(k(l));return F([h.lat+u.lat,h.lng+u.lng])}var Kn={__proto__:null,simplify:Mn,pointToSegmentDistance:Nn,closestPointOnSegment:Pn,clipSegment:Rn,_getEdgeIntersection:zn,_getBitCode:Bn,_sqClosestPointOnSegment:Hn,isFlat:Un,_flat:Wn,polylineCenter:Gn},qn={project:function(e){return new O(e.lng,e.lat)},unproject:function(e){return new P(e.y,e.x)},bounds:new A([-180,-90],[180,90])},Jn={R:6378137,R_MINOR:6356752.314245179,bounds:new A([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new O(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new P(o*t,e.x*t/n)}},Yn={__proto__:null,LonLat:qn,Mercator:Jn,SphericalMercator:ce},Xn=n({},oe,{code:`EPSG:3395`,projection:Jn,transformation:function(){var e=.5/(Math.PI*Jn.R);return ue(e,.5,-e,.5)}()}),Zn=n({},oe,{code:`EPSG:4326`,projection:qn,transformation:ue(1/180,1,-1/180,.5)}),Qn=n({},ae,{projection:qn,transformation:ue(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});ae.Earth=oe,ae.EPSG3395=Xn,ae.EPSG3857=de,ae.EPSG900913=fe,ae.EPSG4326=Zn,ae.Simple=Qn;var $n=re.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});U.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var er=$n.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),tr=function(e,t){return new er(e,t)},nr=er.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),er.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),er.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new M;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),rr=function(e,t){return new nr(e,t)},ir=D.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=k(r),a=k(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return I.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function ar(e){return new ir(e)}var or=ir.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof or.imagePath!=`string`&&(or.imagePath=this._detectIconPath()),(this.options.imagePath||or.imagePath)+ir.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=R(`div`,`leaflet-default-icon-path`,document.body),t=Ct(e,`background-image`)||Ct(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),sr=wn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new Dn(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),B(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ot(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=It(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=j(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=k((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),Ft(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=T(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=It(t._icon),i=t._map.layerPointToLatLng(r);n&&Ft(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){E(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),cr=$n.extend({options:{icon:new or,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=F(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),B(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&V(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(B(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&H(this._icon,`focus`,this._panOnFocus,this),z(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&z(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&Ft(this._icon,e),this._shadow&&Ft(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(B(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),sr)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new sr(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&jt(this._icon,e),this._shadow&&jt(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?k(t.iconSize):k(0,0),r=t.iconAnchor?k(t.iconAnchor):k(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function G(e,t){return new cr(e,t)}var lr=$n.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ur=lr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=F(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=F(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return lr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new A(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function dr(e,t){return new ur(e,t)}var fr=ur.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=F(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new M(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:lr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===oe.distance){var i=Math.PI/180,a=this._mRadius/oe.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function pr(e,t,n){return new fr(e,t,n)}var mr=lr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Hn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Gn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=F(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new M,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Un(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Un(e),r=0,i=e.length;r<i;r++)n?(t[r]=F(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new A;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new O(e,e);this._rawPxBounds&&(this._pxBounds=new A([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof P,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=Rn(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=Mn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&Nn(e,s[i],s[r])<=c)return!0;return!1}});function hr(e,t){return new mr(e,t)}mr._flat=Wn;var gr=mr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return kn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=mr.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof P&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){mr.prototype._setLatLngs.call(this,e),Un(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Un(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new O(t,t);if(e=new A(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=On(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||mr.prototype._containsPoint.call(this,e,!0)}});function _r(e,t){return new gr(e,t)}var vr=nr.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=yr(e,a);return o?(o.feature=Er(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function yr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||xr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),br(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(br(a,e,s,t));return new nr(i);case`LineString`:case`MultiLineString`:return c=Sr(r,n.type===`LineString`?0:1,o),new mr(c,t);case`Polygon`:case`MultiPolygon`:return c=Sr(r,n.type===`Polygon`?1:2,o),new gr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=yr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new nr(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=yr(n.features[l],t);f&&i.push(f)}return new nr(i);default:throw Error(`Invalid GeoJSON object.`)}}function br(e,t,n,r){return e?e(t,n):new cr(n,r&&r.markersInheritOptions&&r)}function xr(e){return new P(e[1],e[0],e[2])}function Sr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?Sr(e[i],t-1,n):(n||xr)(e[i]),r.push(o);return r}function Cr(e,t){return e=F(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function wr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?wr(e[a],Un(e[a])?0:t-1,n,r):Cr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function Tr(e,t){return e.feature?n({},e.feature,{geometry:t}):Er(t)}function Er(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var Dr={toGeoJSON:function(e){return Tr(this,{type:`Point`,coordinates:Cr(this.getLatLng(),e)})}};cr.include(Dr),fr.include(Dr),ur.include(Dr),mr.include({toGeoJSON:function(e){var t=!Un(this._latlngs),n=wr(this._latlngs,t?1:0,!1,e);return Tr(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),gr.include({toGeoJSON:function(e){var t=!Un(this._latlngs),n=t&&!Un(this._latlngs[0]),r=wr(this._latlngs,n?2:t?1:0,!0,e);return t||(r=[r]),Tr(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),er.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),Tr(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=Er(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?Tr(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function Or(e,t){return new vr(e,t)}var kr=Or,Ar=$n.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=N(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(B(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){z(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&Tt(this._image),this},bringToBack:function(){return this._map&&Et(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=N(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:R(`img`);if(B(t,`leaflet-image-layer`),this._zoomAnimated&&B(t,`leaflet-zoom-animated`),this.options.className&&B(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Pt(this._image,n,t)},_reset:function(){var e=this._image,t=new A(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();Ft(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){jt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),jr=function(e,t,n){return new Ar(e,t,n)},Mr=Ar.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:R(`video`);if(B(t,`leaflet-image-layer`),this._zoomAnimated&&B(t,`leaflet-zoom-animated`),this.options.className&&B(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=R(`source`);s.src=this._url[o],t.appendChild(s)}}});function Nr(e,t,n){return new Mr(e,t,n)}var Pr=Ar.extend({_initImage:function(){var e=this._image=this._url;B(e,`leaflet-image-layer`),this._zoomAnimated&&B(e,`leaflet-zoom-animated`),this.options.className&&B(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Fr(e,t,n){return new Pr(e,t,n)}var Ir=$n.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof P||_(e))?(this._latlng=F(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&jt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&jt(this._container,1),this.bringToFront(),this.options.interactive&&(B(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(jt(this._container,0),this._removeTimeout=setTimeout(i(z,void 0,this._container),200)):z(this._container),this.options.interactive&&(Ot(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=F(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Tt(this._container),this},bringToBack:function(){return this._map&&Et(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof nr){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e)if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`);return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=k(this.options.offset),n=this._getAnchor();this._zoomAnimated?Ft(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});U.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),$n.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var Lr=Ir.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Ir.prototype.openOn.call(this,e)},onAdd:function(e){Ir.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof lr||this._source.on(`preclick`,tn))},onRemove:function(e){Ir.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof lr||this._source.off(`preclick`,tn))},getEvents:function(){var e=Ir.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=R(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=R(`div`,e+`-content-wrapper`,t);if(this._contentNode=R(`div`,e+`-content`,n),rn(t),nn(this._contentNode),V(t,`contextmenu`,tn),this._tipContainer=R(`div`,e+`-tip-container`,t),this._tip=R(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=R(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,V(r,`click`,function(e){an(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,B(e,a)):Ot(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();Ft(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(Ct(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new O(this._containerLeft,-n-this._containerBottom);i._add(It(this._container));var a=e.layerPointToContainerPoint(i),o=k(this.options.autoPanPadding),s=k(this.options.autoPanPaddingTopLeft||o),c=k(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return k(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Rr=function(e,t){return new Lr(e,t)};U.mergeOptions({closePopupOnClick:!0}),U.include({openPopup:function(e,t,n){return this._initOverlay(Lr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),$n.include({bindPopup:function(e,t){return this._popup=this._initOverlay(Lr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof nr||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){on(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof lr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var zr=Ir.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Ir.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Ir.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Ir.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){this._contentNode=this._container=R(`div`,`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`)),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=k(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(k(t,n,!0)).add(u).add(d),Ot(i,`leaflet-tooltip-right`),Ot(i,`leaflet-tooltip-left`),Ot(i,`leaflet-tooltip-top`),Ot(i,`leaflet-tooltip-bottom`),B(i,`leaflet-tooltip-`+s),Ft(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&jt(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return k(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Br=function(e,t){return new zr(e,t)};U.include({openTooltip:function(e,t,n){return this._initOverlay(zr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),$n.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(zr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof nr||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(V(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),V(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Vr=ir.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(wt(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=k(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Hr(e){return new Vr(e)}ir.Default=or;var Ur=$n.extend({options:{tileSize:256,opacity:1,updateWhenIdle:I.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),z(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Tt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Et(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof O?e:new O(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!I.ielt9){jt(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);jt(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=R(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(z(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=R(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)z(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new O(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r?this._retainParent(i,a,o,r):!1)},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new O(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}else c&&c.loaded&&(c.retain=!0);n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();I.any3d?Pt(e.el,i,r):Ft(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new A(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new A(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new O(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new O(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return N(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new M(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new O(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(z(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){B(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,I.ielt9&&this.options.opacity<1&&jt(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&T(i(this._tileReady,this,e,null,a)),Ft(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(jt(n.el,0),E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(B(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),I.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new O(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new A(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Wr(e){return new Ur(e)}var Gr=Ur.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&I.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return V(n,`load`,i(this._tileOnLoad,this,t,n)),V(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:I.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){I.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;z(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Ur.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Ur.prototype._tileReady.call(this,e,t,n)}});function Kr(e,t){return new Gr(e,t)}var qr=Gr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&I.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Gr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=j(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Zn?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Gr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Jr(e,t){return new qr(e,t)}Gr.WMS=qr,Kr.wms=Jr;var Yr=$n.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),B(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));I.any3d?Pt(this._container,a,n):Ft(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new A(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Xr=Yr.extend({options:{tolerance:0},getEvents:function(){var e=Yr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Yr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);V(e,`mousemove`,this._onMouseMove,this),V(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),V(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,z(this._container),H(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Yr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=I.retina?2:1;Ft(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,I.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Yr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new A,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(!(e.type===`click`||e.type===`preclick`)||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(Ot(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(B(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Zr(e){return I.canvas?new Xr(e):null}var Qr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),$r={_initContainer:function(){this._container=R(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Yr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Qr(`shape`);B(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Qr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;z(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Qr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Qr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){Tt(e._container)},_bringToBack:function(e){Et(e._container)}},ei=I.vml?Qr:pe,ti=Yr.extend({_initContainer:function(){this._container=ei(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=ei(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){z(this._container),H(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Yr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),Ft(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=ei(`path`);e.options.className&&B(t,e.options.className),e.options.interactive&&B(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){z(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,me(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){Tt(e._path)},_bringToBack:function(e){Et(e._path)}});I.vml&&ti.include($r);function ni(e){return I.svg||I.vml?new ti(e):null}U.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Zr(e)||ni(e)}});var ri=gr.extend({initialize:function(e,t){gr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=N(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function ii(e,t){return new ri(e,t)}ti.create=ei,ti.pointsToPath=me,vr.geometryToLayer=yr,vr.coordsToLatLng=xr,vr.coordsToLatLngs=Sr,vr.latLngToCoords=Cr,vr.latLngsToCoords=wr,vr.getFeature=Tr,vr.asFeature=Er,U.mergeOptions({boxZoom:!0});var ai=wn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){V(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){H(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){z(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Lt(),Vt(),this._startPoint=this._map.mouseEventToContainerPoint(e),V(document,{contextmenu:on,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=R(`div`,`leaflet-zoom-box`,this._container),B(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new A(this._point,this._startPoint),n=t.getSize();Ft(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(z(this._box),Ot(this._container,`leaflet-crosshair`)),Rt(),Ht(),H(document,{contextmenu:on,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if(!(e.which!==1&&e.button!==1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new M(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});U.addInitHook(`addHandler`,`boxZoom`,ai),U.mergeOptions({doubleClickZoom:!0});var oi=wn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});U.addInitHook(`addHandler`,`doubleClickZoom`,oi),U.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var si=wn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new Dn(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}B(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ot(this._map._container,`leaflet-grab`),Ot(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=N(this._map.options.maxBounds);this._offsetLimit=j(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2);this._initialWorldOffset=this._map.latLngToLayerPoint([0,0]).subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),T(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});U.addInitHook(`addHandler`,`dragging`,si),U.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ci=wn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),V(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),H(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){V(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){H(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(r=this._panKeys[t],e.shiftKey&&(r=k(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(k(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;on(e)}}});U.addInitHook(`addHandler`,`keyboard`,ci),U.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var li=wn.extend({addHooks:function(){V(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){H(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=un(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),on(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});U.addInitHook(`addHandler`,`scrollWheelZoom`,li);var ui=600;U.mergeOptions({tapHold:I.touchNative&&I.safari&&I.mobile,tapTolerance:15});var di=wn.extend({addHooks:function(){V(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){H(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new O(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(V(document,`touchend`,an),V(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),ui),V(document,`touchend touchcancel contextmenu`,this._cancel,this),V(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){H(document,`touchend`,an),H(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),H(document,`touchend touchcancel contextmenu`,this._cancel,this),H(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new O(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});U.addInitHook(`addHandler`,`tapHold`,di),U.mergeOptions({touchZoom:I.touch,bounceAtZoomLimits:!0});var fi=wn.extend({addHooks:function(){B(this._map._container,`leaflet-touch-zoom`),V(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){Ot(this._map._container,`leaflet-touch-zoom`),H(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),V(document,`touchmove`,this._onTouchMove,this),V(document,`touchend touchcancel`,this._onTouchEnd,this),an(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),E(this._animRequest),this._animRequest=T(i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0),this,!0),an(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),H(document,`touchmove`,this._onTouchMove,this),H(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});U.addInitHook(`addHandler`,`touchZoom`,fi),U.BoxZoom=ai,U.DoubleClickZoom=oi,U.Drag=si,U.Keyboard=ci,U.ScrollWheelZoom=li,U.TapHold=di,U.TouchZoom=fi,e.Bounds=A,e.Browser=I,e.CRS=ae,e.Canvas=Xr,e.Circle=fr,e.CircleMarker=ur,e.Class=D,e.Control=hn,e.DivIcon=Vr,e.DivOverlay=Ir,e.DomEvent=fn,e.DomUtil=Yt,e.Draggable=Dn,e.Evented=re,e.FeatureGroup=nr,e.GeoJSON=vr,e.GridLayer=Ur,e.Handler=wn,e.Icon=ir,e.ImageOverlay=Ar,e.LatLng=P,e.LatLngBounds=M,e.Layer=$n,e.LayerGroup=er,e.LineUtil=Kn,e.Map=U,e.Marker=cr,e.Mixin=Tn,e.Path=lr,e.Point=O,e.PolyUtil=jn,e.Polygon=gr,e.Polyline=mr,e.Popup=Lr,e.PosAnimation=pn,e.Projection=Yn,e.Rectangle=ri,e.Renderer=Yr,e.SVG=ti,e.SVGOverlay=Pr,e.TileLayer=Gr,e.Tooltip=zr,e.Transformation=le,e.Util=ee,e.VideoOverlay=Mr,e.bind=i,e.bounds=j,e.canvas=Zr,e.circle=pr,e.circleMarker=dr,e.control=gn,e.divIcon=Hr,e.extend=n,e.featureGroup=rr,e.geoJSON=Or,e.geoJson=kr,e.gridLayer=Wr,e.icon=ar,e.imageOverlay=jr,e.latLng=F,e.latLngBounds=N,e.layerGroup=tr,e.map=mn,e.marker=G,e.point=k,e.polygon=_r,e.polyline=hr,e.popup=Rr,e.rectangle=ii,e.setOptions=p,e.stamp=o,e.svg=ni,e.svgOverlay=Fr,e.tileLayer=Kr,e.tooltip=Br,e.transformation=ue,e.version=t,e.videoOverlay=Nr;var pi=window.L;e.noConflict=function(){return window.L=pi,this},window.L=e}))}));function md(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function hd(e,t){return t==null?function(t,n){let r=(0,x.useRef)(void 0);return r.current||=e(t,n),r}:function(n,r){let i=(0,x.useRef)(void 0);i.current||=e(n,r);let a=(0,x.useRef)(n),{instance:o}=i.current;return(0,x.useEffect)(function(){a.current!==n&&(t(o,n,a.current),a.current=n)},[o,n,t]),i}}function gd(e,t){(0,x.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function _d(e){return function(t){let n=ad(),r=e(dd(t,n),n);return ed(n.map,t.attribution),ud(r.current,t.eventHandlers),gd(r.current,n),r}}function vd(e,t){let n=(0,x.useRef)(void 0);(0,x.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}function yd(e){return function(t){let n=ad(),r=e(dd(t,n),n);return ud(r.current,t.eventHandlers),gd(r.current,n),vd(r.current,t),r}}function $(e,t){return cd(fd(hd(e),t))}function bd(e,t){return sd(yd(hd(e,t)))}function xd(e,t){return ld(_d(hd(e,t)))}function Sd(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}var Cd=c(pd(),1),wd=bd(function({center:e,children:t,...n},r){let i=new Cd.CircleMarker(e,n);return md(i,rd(r,{overlayContainer:i}))},td);function Td({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:a,placeholder:o,style:s,whenReady:c,zoom:l,...u},d){let[f]=(0,x.useState)({className:i,id:a,style:s}),[p,m]=(0,x.useState)(null),h=(0,x.useRef)(void 0);(0,x.useImperativeHandle)(d,()=>p?.map??null,[p]);let g=(0,x.useCallback)(r=>{if(r!==null&&!h.current){let i=new Cd.Map(r,u);h.current=i,n!=null&&l!=null?i.setView(n,l):e!=null&&i.fitBounds(e,t),c!=null&&i.whenReady(c),m(nd(i))}},[]);(0,x.useEffect)(()=>()=>{p?.map.remove()},[p]);let _=p?x.createElement(id,{value:p},r):o??null;return x.createElement(`div`,{...f,ref:g},_)}var Ed=(0,x.forwardRef)(Td),Dd=bd(function({positions:e,...t},n){let r=new Cd.Polyline(e,t);return md(r,rd(n,{overlayContainer:r}))},function(e,t,n){t.positions!==n.positions&&e.setLatLngs(t.positions)}),Od=$(function(e,t){return md(new Cd.Popup(e,t.overlayContainer),t)},function(e,t,{position:n},r){(0,x.useEffect)(function(){let{instance:i}=e;function a(e){e.popup===i&&(i.update(),r(!0))}function o(e){e.popup===i&&r(!1)}return t.map.on({popupopen:a,popupclose:o}),t.overlayContainer==null?(n!=null&&i.setLatLng(n),i.openOn(t.map)):t.overlayContainer.bindPopup(i),function(){t.map.off({popupopen:a,popupclose:o}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(i)}},[e,t,r,n])}),kd=xd(function({url:e,...t},n){return md(new Cd.TileLayer(e,dd(t,n)),n)},function(e,t,n){Sd(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)});delete Cd.default.Icon.Default.prototype._getIconUrl,Cd.default.Icon.Default.mergeOptions({iconRetinaUrl:`https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png`,iconUrl:`https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png`,shadowUrl:`https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png`});var Ad={"Rajesh Kumar":`#ef4444`,"Vikram Patel":`#f59e0b`,"Mohammad Ali":`#8b5cf6`,"Deepak Verma":`#06b6d4`,"Amit Sharma":`#10b981`};function jd(){let{cdrData:e,towerLocations:t,suspects:n}=$n(),[r,i]=(0,x.useState)(`all`),[a,o]=(0,x.useState)(!0),[s,c]=(0,x.useState)(!0),l=(0,x.useMemo)(()=>[...new Set(e.map(e=>e.caller))],[e]),u=r===`all`?e:e.filter(e=>e.caller===r||e.receiver===r),d=(0,x.useMemo)(()=>{let t={};return e.forEach(e=>{t[e.caller]||(t[e.caller]=[]),t[e.caller].push([e.lat,e.lng])}),t},[e]),f=(0,x.useMemo)(()=>{let n={};return e.forEach(e=>{let r=e.towerId;n[r]||(n[r]={...t[r],count:0,towerId:r}),n[r].count++}),Object.values(n).sort((e,t)=>t.count-e.count)},[e,t]),p=(0,x.useMemo)(()=>{let n=[],r={};return e.forEach(e=>{r[e.towerId]||(r[e.towerId]=[]),r[e.towerId].push(e)}),Object.entries(r).forEach(([e,r])=>{let i=[...new Set(r.map(e=>e.caller))];i.length>=2&&n.push({towerId:e,location:t[e],suspects:i,records:r.length})}),n},[e,t]);return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Geo-Location Analysis`}),(0,W.jsx)(`p`,{children:`CDR-based movement tracking, tower triangulation, and meeting point detection.`})]}),(0,W.jsxs)(`div`,{className:`geo-controls animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`filter-group`,children:[(0,W.jsxs)(`span`,{className:`filter-label`,children:[(0,W.jsx)(Fr,{size:14}),` Suspect`]}),(0,W.jsxs)(`select`,{className:`input`,value:r,onChange:e=>i(e.target.value),style:{width:200,padding:`8px 12px`},children:[(0,W.jsx)(`option`,{value:`all`,children:`All Suspects`}),l.map(e=>(0,W.jsx)(`option`,{value:e,children:e},e))]})]}),(0,W.jsxs)(`div`,{className:`geo-toggles`,children:[(0,W.jsxs)(`label`,{className:`geo-toggle`,children:[(0,W.jsx)(`input`,{type:`checkbox`,checked:a,onChange:e=>o(e.target.checked)}),(0,W.jsx)(`span`,{children:`Movement Paths`})]}),(0,W.jsxs)(`label`,{className:`geo-toggle`,children:[(0,W.jsx)(`input`,{type:`checkbox`,checked:s,onChange:e=>c(e.target.checked)}),(0,W.jsx)(`span`,{children:`Tower Locations`})]})]})]}),(0,W.jsxs)(`div`,{className:`geo-layout animate-fade-in-up delay-2`,children:[(0,W.jsx)(`div`,{className:`geo-map-container`,children:(0,W.jsxs)(Ed,{center:[28.62,77.25],zoom:12,style:{height:`100%`,width:`100%`,borderRadius:`10px`},children:[(0,W.jsx)(kd,{url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,attribution:`© OpenStreetMap`}),s&&Object.entries(t).map(([e,t])=>{let n=f.find(t=>t.towerId===e);return(0,W.jsx)(wd,{center:[t.lat,t.lng],radius:8+(n?.count||0)*2,pathOptions:{fillColor:(n?.count||0)>3?`#ef4444`:(n?.count||0)>1?`#f59e0b`:`#3b82f6`,fillOpacity:.5,stroke:!0,color:`#fff`,weight:2},children:(0,W.jsx)(Od,{children:(0,W.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,color:`#1e293b`},children:[(0,W.jsx)(`strong`,{children:t.name}),(0,W.jsx)(`br`,{}),`Tower ID: `,e,(0,W.jsx)(`br`,{}),`Area: `,t.area,(0,W.jsx)(`br`,{}),`Pings: `,n?.count||0,(0,W.jsx)(`br`,{}),`Lat: `,t.lat,`, Lng: `,t.lng]})})},e)}),a&&Object.entries(d).map(([e,t])=>r!==`all`&&e!==r?null:(0,W.jsx)(Dd,{positions:t,pathOptions:{color:Ad[e]||`#3b82f6`,weight:3,opacity:.7,dashArray:`8, 4`}},e)),p.map((e,t)=>(0,W.jsx)(wd,{center:[e.location.lat,e.location.lng],radius:18,pathOptions:{fillColor:`#ef4444`,fillOpacity:.2,stroke:!0,color:`#ef4444`,weight:2,dashArray:`5, 5`},children:(0,W.jsx)(Od,{children:(0,W.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,color:`#1e293b`},children:[(0,W.jsx)(`strong`,{children:`⚠ Meeting Point`}),(0,W.jsx)(`br`,{}),e.location.name,(0,W.jsx)(`br`,{}),`Suspects: `,e.suspects.join(`, `),(0,W.jsx)(`br`,{}),`Records: `,e.records]})})},t))]})}),(0,W.jsxs)(`div`,{className:`geo-panel`,children:[(0,W.jsxs)(`div`,{className:`geo-section`,children:[(0,W.jsxs)(`h3`,{children:[(0,W.jsx)(Hr,{size:16}),` Frequent Locations`]}),f.slice(0,5).map((e,t)=>(0,W.jsxs)(`div`,{className:`freq-location`,children:[(0,W.jsx)(`div`,{className:`freq-rank`,children:t+1}),(0,W.jsxs)(`div`,{className:`freq-info`,children:[(0,W.jsx)(`span`,{className:`freq-name`,children:e.name}),(0,W.jsx)(`span`,{className:`text-xs text-muted`,children:e.area})]}),(0,W.jsxs)(`div`,{className:`freq-count`,children:[e.count,` pings`]})]},t))]}),(0,W.jsxs)(`div`,{className:`geo-section`,children:[(0,W.jsxs)(`h3`,{children:[(0,W.jsx)(Qr,{size:16}),` Meeting Points`]}),p.map((e,t)=>(0,W.jsxs)(`div`,{className:`meeting-point`,children:[(0,W.jsx)(`div`,{className:`meeting-location`,children:e.location.name}),(0,W.jsx)(`div`,{className:`meeting-suspects`,children:e.suspects.map(e=>(0,W.jsx)(`span`,{className:`meeting-suspect-tag`,style:{borderColor:Ad[e]||`var(--border-primary)`},children:e.split(` `)[0]},e))})]},t))]}),(0,W.jsxs)(`div`,{className:`geo-section`,children:[(0,W.jsxs)(`h3`,{children:[(0,W.jsx)(Yr,{size:16}),` CDR Records`]}),(0,W.jsx)(`div`,{className:`cdr-list`,children:u.slice(0,8).map(e=>(0,W.jsxs)(`div`,{className:`cdr-record`,children:[(0,W.jsx)(`div`,{className:`cdr-time`,children:e.time.split(` `)[1]}),(0,W.jsxs)(`div`,{className:`cdr-details`,children:[(0,W.jsxs)(`span`,{className:`cdr-parties`,children:[(0,W.jsx)(`span`,{style:{color:Ad[e.caller]},children:e.caller.split(` `)[0]}),` → `,(0,W.jsx)(`span`,{style:{color:Ad[e.receiver]},children:e.receiver.split(` `)[0]})]}),(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[e.duration,` • `,e.towerId]})]}),(0,W.jsx)(`span`,{className:`tag ${e.type,``}`,children:e.type})]},e.id))})]})]})]}),(0,W.jsx)(`style`,{children:`
        .geo-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
          padding: 14px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          flex-wrap: wrap;
        }
        .geo-toggles {
          display: flex;
          gap: 16px;
        }
        .geo-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .geo-toggle input {
          accent-color: var(--accent-primary);
        }
        .geo-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 20px;
          min-height: 600px;
        }
        @media (max-width: 1100px) {
          .geo-layout { grid-template-columns: 1fr; }
        }
        .geo-map-container {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 600px;
        }
        .geo-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
          max-height: 650px;
        }
        .geo-section {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 16px;
        }
        .geo-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 12px;
        }
        .freq-location {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-primary);
        }
        .freq-location:last-child { border-bottom: none; }
        .freq-rank {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .freq-info { flex: 1; }
        .freq-name { font-size: 0.85rem; font-weight: 600; display: block; }
        .freq-count {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-warning);
        }
        .meeting-point {
          padding: 10px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          margin-bottom: 8px;
          border-left: 3px solid var(--accent-danger);
        }
        .meeting-location {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .meeting-suspects {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .meeting-suspect-tag {
          padding: 2px 8px;
          border: 1px solid;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .cdr-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cdr-record {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        .cdr-time {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          min-width: 44px;
        }
        .cdr-details { flex: 1; min-width: 0; }
        .cdr-parties {
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
        }
      `})]})}function Md(){let{suspects:e,cdrData:t}=$n(),[n,r]=(0,x.useState)(null),i=e=>e>=71?`var(--accent-danger)`:e>=31?`var(--accent-warning)`:`var(--accent-success)`,a=e=>e>=71?`High Risk`:e>=31?`Medium Risk`:`Low Risk`,o=e=>{let n=t.filter(t=>t.caller===e.name||t.receiver===e.name).length,r=Object.keys(t.filter(t=>t.caller===e.name).reduce((e,t)=>(e[t.towerId]=!0,e),{})).length;return{calls:{value:n,max:15,label:`Call Frequency`,weight:40},movement:{value:r,max:7,label:`Movement Range`,weight:30},detections:{value:e.risk===`high`?4:e.risk===`medium`?2:1,max:5,label:`CCTV Detections`,weight:30}}},s=[...e].sort((e,t)=>t.score-e.score);return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Suspicion Scores`}),(0,W.jsx)(`p`,{children:`Composite scoring system based on call frequency, movement patterns, and detection count.`})]}),(0,W.jsxs)(`div`,{className:`score-distribution animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`score-dist-item`,children:[(0,W.jsx)(`div`,{className:`score-dist-bar`,children:(0,W.jsx)(`div`,{className:`score-dist-fill`,style:{width:`${e.filter(e=>e.risk===`high`).length/e.length*100}%`,background:`var(--accent-danger)`}})}),(0,W.jsx)(`span`,{className:`score-dist-label`,children:`High Risk (71-100)`}),(0,W.jsx)(`span`,{className:`score-dist-count`,style:{color:`var(--accent-danger)`},children:e.filter(e=>e.risk===`high`).length})]}),(0,W.jsxs)(`div`,{className:`score-dist-item`,children:[(0,W.jsx)(`div`,{className:`score-dist-bar`,children:(0,W.jsx)(`div`,{className:`score-dist-fill`,style:{width:`${e.filter(e=>e.risk===`medium`).length/e.length*100}%`,background:`var(--accent-warning)`}})}),(0,W.jsx)(`span`,{className:`score-dist-label`,children:`Medium Risk (31-70)`}),(0,W.jsx)(`span`,{className:`score-dist-count`,style:{color:`var(--accent-warning)`},children:e.filter(e=>e.risk===`medium`).length})]}),(0,W.jsxs)(`div`,{className:`score-dist-item`,children:[(0,W.jsx)(`div`,{className:`score-dist-bar`,children:(0,W.jsx)(`div`,{className:`score-dist-fill`,style:{width:`${e.filter(e=>e.risk===`low`).length/e.length*100}%`,background:`var(--accent-success)`}})}),(0,W.jsx)(`span`,{className:`score-dist-label`,children:`Low Risk (0-30)`}),(0,W.jsx)(`span`,{className:`score-dist-count`,style:{color:`var(--accent-success)`},children:e.filter(e=>e.risk===`low`).length})]})]}),(0,W.jsx)(`div`,{className:`score-layout`,children:(0,W.jsx)(`div`,{className:`score-cards`,children:s.map((e,t)=>{let s=o(e),c=n?.id===e.id,l=i(e.score);return(0,W.jsxs)(`div`,{className:`score-card animate-fade-in-up delay-${Math.min(t+1,6)} ${c?`selected`:``}`,onClick:()=>r(c?null:e),style:{borderColor:c?l:void 0},children:[(0,W.jsxs)(`div`,{className:`score-card-top`,children:[(0,W.jsx)(`div`,{className:`score-avatar`,style:{background:`${l}20`,color:l},children:e.name.split(` `).map(e=>e[0]).join(``)}),(0,W.jsxs)(`div`,{className:`score-gauge`,children:[(0,W.jsxs)(`svg`,{viewBox:`0 0 80 80`,className:`gauge-svg`,children:[(0,W.jsx)(`circle`,{cx:`40`,cy:`40`,r:`34`,fill:`none`,stroke:`var(--bg-tertiary)`,strokeWidth:`6`}),(0,W.jsx)(`circle`,{cx:`40`,cy:`40`,r:`34`,fill:`none`,stroke:l,strokeWidth:`6`,strokeDasharray:`${e.score/100*213.6} 213.6`,strokeLinecap:`round`,transform:`rotate(-90 40 40)`,style:{transition:`stroke-dasharray 1s ease-out`}})]}),(0,W.jsx)(`span`,{className:`gauge-value`,style:{color:l},children:e.score})]})]}),(0,W.jsxs)(`div`,{className:`score-card-body`,children:[(0,W.jsx)(`h3`,{children:e.name}),(0,W.jsx)(`span`,{className:`text-xs text-muted`,children:e.phone}),(0,W.jsxs)(`div`,{className:`score-badges`,children:[(0,W.jsx)(`span`,{className:`badge badge-${e.risk}`,children:a(e.score)}),(0,W.jsx)(`span`,{className:`tag`,children:e.alias})]})]}),(0,W.jsx)(`div`,{className:`score-factors`,children:Object.values(s).map((e,t)=>(0,W.jsxs)(`div`,{className:`score-factor`,children:[(0,W.jsxs)(`div`,{className:`factor-header`,children:[(0,W.jsx)(`span`,{className:`factor-label`,children:e.label}),(0,W.jsxs)(`span`,{className:`text-xs text-mono`,children:[e.value,`/`,e.max]})]}),(0,W.jsx)(`div`,{className:`progress-bar`,children:(0,W.jsx)(`div`,{className:`progress-fill`,style:{width:`${Math.min(e.value/e.max*100,100)}%`,background:e.value/e.max>.7?`var(--accent-danger)`:e.value/e.max>.4?`var(--accent-warning)`:`var(--accent-success)`}})})]},t))}),(0,W.jsx)(`div`,{className:`score-card-footer`,children:(0,W.jsxs)(`span`,{className:`text-xs text-muted`,children:[(0,W.jsx)(Hr,{size:12}),` `,e.lastSeen]})})]},e.id)})})}),(0,W.jsx)(`style`,{children:`
        .score-distribution {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
        }
        .score-dist-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .score-dist-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .score-dist-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 1s ease-out;
        }
        .score-dist-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          min-width: 130px;
        }
        .score-dist-count {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .score-layout {
          display: flex;
          gap: 20px;
        }
        .score-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          flex: 1;
        }
        .score-card {
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 20px;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .score-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .score-card.selected {
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }
        .score-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .score-avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
        }
        .score-gauge {
          position: relative;
          width: 68px;
          height: 68px;
        }
        .gauge-svg {
          width: 100%;
          height: 100%;
        }
        .gauge-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .score-card-body h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .score-badges {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }
        .score-factors {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--border-primary);
        }
        .score-factor { }
        .factor-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .factor-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .score-card-footer {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-primary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .score-card-footer .text-xs {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `})]})}var Nd={"person-cctv-call":{icon:gi,label:`CCTV + Call Records`,color:`var(--accent-primary)`},"person-financial-call":{icon:jr,label:`Financial + Call`,color:`var(--accent-warning)`},"location-cctv-cdr":{icon:fr,label:`CCTV + CDR Location`,color:`var(--accent-danger)`},"chat-call-match":{icon:Yr,label:`Chat + Call Match`,color:`var(--accent-secondary)`},"person-photo-cctv":{icon:fr,label:`Photo + CCTV Match`,color:`var(--accent-tertiary)`},"movement-financial":{icon:jr,label:`Movement + Financial`,color:`var(--accent-success)`}};function Pd(){let{crossEvidenceLinks:e,evidenceFiles:t}=$n(),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(`all`),o=i===`all`?e:e.filter(e=>e.severity===i);return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Cross-Evidence Linking`}),(0,W.jsx)(`p`,{children:`Automated connections between CCTV detections, extracted names, call records, and financial data.`})]}),(0,W.jsxs)(`div`,{className:`cross-stats animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`cross-stat`,children:[(0,W.jsx)(`span`,{className:`cross-stat-value`,children:e.length}),(0,W.jsx)(`span`,{className:`cross-stat-label`,children:`Total Links`})]}),(0,W.jsxs)(`div`,{className:`cross-stat`,children:[(0,W.jsx)(`span`,{className:`cross-stat-value`,style:{color:`var(--accent-danger)`},children:e.filter(e=>e.severity===`high`).length}),(0,W.jsx)(`span`,{className:`cross-stat-label`,children:`High Confidence`})]}),(0,W.jsxs)(`div`,{className:`cross-stat`,children:[(0,W.jsx)(`span`,{className:`cross-stat-value`,style:{color:`var(--accent-primary)`},children:[...new Set(e.flatMap(e=>e.suspects))].length}),(0,W.jsx)(`span`,{className:`cross-stat-label`,children:`Linked Suspects`})]}),(0,W.jsxs)(`div`,{className:`cross-stat`,children:[(0,W.jsx)(`span`,{className:`cross-stat-value`,style:{color:`var(--accent-secondary)`},children:[...new Set(e.flatMap(e=>e.evidence))].length}),(0,W.jsx)(`span`,{className:`cross-stat-label`,children:`Evidence Files`})]})]}),(0,W.jsx)(`div`,{className:`cross-filters animate-fade-in-up delay-1`,children:[`all`,`high`,`medium`].map(e=>(0,W.jsx)(`button`,{className:`filter-tab ${i===e?`active`:``}`,onClick:()=>a(e),style:i===e&&e!==`all`?{background:e===`high`?`var(--accent-danger)`:`var(--accent-warning)`}:{},children:e===`all`?`All Links`:`${e.charAt(0).toUpperCase()+e.slice(1)} Confidence`},e))}),(0,W.jsx)(`div`,{className:`cross-links animate-fade-in-up delay-2`,children:o.map((e,n)=>{let r=Nd[e.type]||{icon:zr,label:`Connection`,color:`var(--accent-primary)`},i=r.icon;return(0,W.jsxs)(`div`,{className:`cross-link-card animate-fade-in-up delay-${Math.min(n+1,6)}`,style:{borderLeftColor:r.color},children:[(0,W.jsxs)(`div`,{className:`cross-link-header`,children:[(0,W.jsx)(`div`,{className:`cross-link-icon`,style:{color:r.color,background:`${r.color}15`},children:(0,W.jsx)(i,{size:20})}),(0,W.jsxs)(`div`,{className:`cross-link-info`,children:[(0,W.jsx)(`span`,{className:`cross-link-type`,children:r.label}),(0,W.jsx)(`span`,{className:`badge badge-${e.severity}`,children:e.severity})]}),(0,W.jsxs)(`div`,{className:`cross-confidence`,children:[(0,W.jsxs)(`svg`,{viewBox:`0 0 36 36`,className:`confidence-ring`,children:[(0,W.jsx)(`circle`,{cx:`18`,cy:`18`,r:`15`,fill:`none`,stroke:`var(--bg-tertiary)`,strokeWidth:`3`}),(0,W.jsx)(`circle`,{cx:`18`,cy:`18`,r:`15`,fill:`none`,stroke:r.color,strokeWidth:`3`,strokeDasharray:`${e.confidence/100*94.2} 94.2`,strokeLinecap:`round`,transform:`rotate(-90 18 18)`})]}),(0,W.jsxs)(`span`,{className:`confidence-value`,children:[e.confidence,`%`]})]})]}),(0,W.jsx)(`p`,{className:`cross-link-description`,children:e.description}),(0,W.jsxs)(`div`,{className:`cross-link-footer`,children:[(0,W.jsxs)(`div`,{className:`cross-suspects`,children:[(0,W.jsx)(`span`,{className:`cross-label`,children:`Suspects:`}),e.suspects.map(e=>(0,W.jsx)(`span`,{className:`tag`,children:e},e))]}),(0,W.jsxs)(`div`,{className:`cross-evidence-refs`,children:[(0,W.jsx)(`span`,{className:`cross-label`,children:`Evidence:`}),e.evidence.map(e=>{let n=t.find(t=>t.id===e);return(0,W.jsx)(`span`,{className:`evidence-ref`,children:n?n.name.substring(0,20)+`...`:e},e)})]})]})]},e.id)})}),(0,W.jsx)(`style`,{children:`
        .cross-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        .cross-stat {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          text-align: center;
        }
        .cross-stat-value {
          font-size: 2rem;
          font-weight: 800;
          display: block;
        }
        .cross-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .cross-filters {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          padding: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          width: fit-content;
        }
        .cross-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cross-link-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-left: 4px solid;
          border-radius: var(--radius-md);
          padding: 20px 24px;
          transition: all var(--transition-fast);
        }
        .cross-link-card:hover {
          background: var(--bg-hover);
          border-color: var(--border-secondary);
          border-left-width: 4px;
        }
        .cross-link-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .cross-link-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cross-link-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cross-link-type {
          font-size: 0.85rem;
          font-weight: 700;
        }
        .cross-confidence {
          position: relative;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        }
        .confidence-ring {
          width: 100%;
          height: 100%;
        }
        .confidence-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .cross-link-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--accent-primary);
        }
        .cross-link-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cross-suspects, .cross-evidence-refs {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cross-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          min-width: 65px;
        }
        .evidence-ref {
          padding: 3px 8px;
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          font-family: var(--font-mono);
        }
        @media (max-width: 768px) {
          .cross-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}var Fd={connection:zr,movement:Hr,financial:wr,communication:Wr,location:Lr,pattern:mr,anomaly:di,network:Kr},Id={connection:`var(--accent-primary)`,movement:`var(--accent-warning)`,financial:`var(--accent-success)`,communication:`var(--accent-secondary)`,location:`var(--accent-tertiary)`,pattern:`var(--accent-primary)`,anomaly:`var(--accent-danger)`,network:`var(--accent-secondary)`};function Ld(){let{aiInsights:e}=$n(),[t,n]=(0,x.useState)(`all`),r=[`all`,...new Set(e.map(e=>e.type))],i=t===`all`?e:e.filter(e=>e.type===t);return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`AI Insight Engine`}),(0,W.jsx)(`p`,{children:`Machine-learning generated insights from cross-referencing all evidence sources.`})]}),(0,W.jsxs)(`div`,{className:`insights-hero animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`insights-hero-icon`,children:[(0,W.jsx)(ur,{size:40}),(0,W.jsx)(`div`,{className:`insights-pulse`})]}),(0,W.jsxs)(`div`,{className:`insights-hero-text`,children:[(0,W.jsxs)(`h2`,{children:[e.length,` Insights Generated`]}),(0,W.jsxs)(`p`,{children:[`AI engine has analyzed `,e.length,` patterns across CCTV, call records, CDR data, and financial records.`]})]}),(0,W.jsxs)(`div`,{className:`insights-hero-stats`,children:[(0,W.jsxs)(`div`,{className:`hero-stat`,children:[(0,W.jsx)(vi,{size:16}),(0,W.jsxs)(`span`,{children:[e.filter(e=>e.severity===`high`).length,` Critical`]})]}),(0,W.jsxs)(`div`,{className:`hero-stat`,children:[(0,W.jsx)(ui,{size:16}),(0,W.jsxs)(`span`,{children:[Math.round(e.reduce((e,t)=>e+t.confidence,0)/e.length),`% Avg Confidence`]})]})]})]}),(0,W.jsx)(`div`,{className:`insights-filters animate-fade-in-up delay-1`,children:r.map(e=>(0,W.jsx)(`button`,{className:`insight-filter ${t===e?`active`:``}`,onClick:()=>n(e),style:t===e&&e!==`all`?{borderColor:Id[e],color:Id[e]}:{},children:e===`all`?`🔍 All`:`${e.charAt(0).toUpperCase()+e.slice(1)}`},e))}),(0,W.jsx)(`div`,{className:`insights-grid animate-fade-in-up delay-2`,children:i.map((e,t)=>{let n=Fd[e.type]||ur,r=Id[e.type]||`var(--accent-primary)`;return(0,W.jsxs)(`div`,{className:`insight-card animate-fade-in-up delay-${Math.min(t+1,6)}`,style:{"--insight-color":r},children:[(0,W.jsxs)(`div`,{className:`insight-header`,children:[(0,W.jsx)(`div`,{className:`insight-icon`,style:{color:r,background:`${r}15`},children:(0,W.jsx)(n,{size:22})}),(0,W.jsxs)(`div`,{className:`insight-meta`,children:[(0,W.jsx)(`span`,{className:`insight-type-tag`,style:{color:r,borderColor:`${r}40`},children:e.type}),(0,W.jsx)(`span`,{className:`badge badge-${e.severity}`,children:e.severity})]})]}),(0,W.jsx)(`h3`,{className:`insight-title`,children:e.title}),(0,W.jsx)(`p`,{className:`insight-description`,children:e.description}),(0,W.jsxs)(`div`,{className:`insight-footer`,children:[(0,W.jsxs)(`div`,{className:`insight-confidence`,children:[(0,W.jsx)(`div`,{className:`progress-bar`,style:{flex:1},children:(0,W.jsx)(`div`,{className:`progress-fill`,style:{width:`${e.confidence}%`,background:r}})}),(0,W.jsxs)(`span`,{className:`text-xs text-mono`,style:{color:r},children:[e.confidence,`%`]})]}),(0,W.jsx)(`div`,{className:`insight-suspects`,children:e.suspects.map(e=>(0,W.jsx)(`span`,{className:`tag`,children:e.split(` `)[0]},e))})]})]},e.id)})}),(0,W.jsx)(`style`,{children:`
        .insights-hero {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px 32px;
          background: linear-gradient(135deg, var(--bg-card), var(--bg-tertiary));
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .insights-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary));
        }
        .insights-hero-icon {
          position: relative;
          width: 72px;
          height: 72px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .insights-pulse {
          position: absolute;
          inset: -4px;
          border: 2px solid var(--accent-primary);
          border-radius: var(--radius-lg);
          opacity: 0.3;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .insights-hero-text {
          flex: 1;
        }
        .insights-hero-text h2 {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .insights-hero-text p {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .insights-hero-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hero-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: var(--bg-card);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .insights-filters {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .insight-filter {
          padding: 8px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .insight-filter:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .insight-filter.active {
          background: var(--bg-elevated);
          font-weight: 600;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 16px;
        }
        .insight-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .insight-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--insight-color);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .insight-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .insight-card:hover::after { opacity: 1; }
        .insight-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .insight-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .insight-type-tag {
          padding: 3px 10px;
          border: 1px solid;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .insight-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .insight-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .insight-footer {
          padding-top: 14px;
          border-top: 1px solid var(--border-primary);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .insight-confidence {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .insight-suspects {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
      `})]})}var Rd={repeated_visit:{icon:ei,color:`var(--accent-warning)`,label:`Repeated Visit`},route_change:{icon:ni,color:`var(--accent-danger)`,label:`Route Change`},sudden_movement:{icon:ui,color:`var(--accent-danger)`,label:`Sudden Movement`},convergence:{icon:hi,color:`var(--accent-tertiary)`,label:`Convergence Point`}};function zd(){let{movementPatterns:e,suspects:t}=$n(),[n,r]=(0,x.useState)(`all`),[i,a]=(0,x.useState)(`all`),o=e.filter(e=>!(n!==`all`&&e.pattern!==n||i!==`all`&&e.severity!==i)),s={repeated_visit:e.filter(e=>e.pattern===`repeated_visit`).length,route_change:e.filter(e=>e.pattern===`route_change`).length,sudden_movement:e.filter(e=>e.pattern===`sudden_movement`).length,convergence:e.filter(e=>e.pattern===`convergence`).length};return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Movement Pattern Detection`}),(0,W.jsx)(`p`,{children:`Analysis of repeated visits, sudden movement changes, and convergence patterns from CDR data.`})]}),(0,W.jsx)(`div`,{className:`pattern-types animate-fade-in-up`,children:Object.entries(Rd).map(([e,t])=>{let i=t.icon,a=s[e];return(0,W.jsxs)(`div`,{className:`pattern-type-card ${n===e?`active`:``}`,onClick:()=>r(n===e?`all`:e),style:n===e?{borderColor:t.color,background:`${t.color}08`}:{},children:[(0,W.jsx)(`div`,{className:`pattern-type-icon`,style:{color:t.color,background:`${t.color}15`},children:(0,W.jsx)(i,{size:22})}),(0,W.jsxs)(`div`,{className:`pattern-type-info`,children:[(0,W.jsx)(`span`,{className:`pattern-type-count`,children:a}),(0,W.jsx)(`span`,{className:`pattern-type-label`,children:t.label})]})]},e)})}),(0,W.jsxs)(`div`,{className:`movement-filters animate-fade-in-up delay-1`,children:[(0,W.jsx)(`span`,{className:`filter-label`,children:`Severity:`}),(0,W.jsx)(`div`,{className:`filter-tabs`,children:[`all`,`high`,`medium`,`low`].map(e=>(0,W.jsx)(`button`,{className:`filter-tab ${i===e?`active`:``}`,onClick:()=>a(e),style:i===e&&e!==`all`?{background:e===`high`?`var(--accent-danger)`:e===`medium`?`var(--accent-warning)`:`var(--accent-success)`}:{},children:e===`all`?`All`:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),(0,W.jsx)(`div`,{className:`patterns-list animate-fade-in-up delay-2`,children:o.map((e,n)=>{let r=Rd[e.pattern]||{icon:ni,color:`var(--accent-primary)`,label:`Unknown`},i=r.icon,a=t.find(t=>t.name===e.suspect);return(0,W.jsxs)(`div`,{className:`pattern-card animate-fade-in-up delay-${Math.min(n+1,6)}`,children:[(0,W.jsxs)(`div`,{className:`pattern-card-left`,style:{borderColor:r.color},children:[(0,W.jsx)(`div`,{className:`pattern-icon`,style:{color:r.color,background:`${r.color}12`},children:(0,W.jsx)(i,{size:24})}),(0,W.jsx)(`span`,{className:`pattern-label`,style:{color:r.color},children:r.label})]}),(0,W.jsxs)(`div`,{className:`pattern-card-body`,children:[(0,W.jsxs)(`div`,{className:`pattern-card-header`,children:[(0,W.jsxs)(`div`,{className:`pattern-suspect`,children:[(0,W.jsx)(`div`,{className:`pattern-avatar`,style:{background:`${e.severity===`high`?`var(--accent-danger)`:e.severity===`medium`?`var(--accent-warning)`:`var(--accent-success)`}20`,color:e.severity===`high`?`var(--accent-danger)`:e.severity===`medium`?`var(--accent-warning)`:`var(--accent-success)`},children:e.suspect.split(` `).map(e=>e[0]).join(``)}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:e.suspect}),(0,W.jsx)(`span`,{className:`text-xs text-muted`,children:a?.phone||`Unknown`})]})]}),(0,W.jsx)(`span`,{className:`badge badge-${e.severity}`,children:e.severity})]}),(0,W.jsx)(`p`,{className:`pattern-description`,children:e.description}),(0,W.jsxs)(`div`,{className:`pattern-details`,children:[(0,W.jsxs)(`div`,{className:`pattern-detail`,children:[(0,W.jsx)(Hr,{size:14}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`strong`,{children:`Location:`}),` `,e.location]})]}),(0,W.jsxs)(`div`,{className:`pattern-detail`,children:[(0,W.jsx)(Sr,{size:14}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`strong`,{children:`Timeframe:`}),` `,e.timeframe]})]}),e.visits&&(0,W.jsxs)(`div`,{className:`pattern-detail`,children:[(0,W.jsx)(ti,{size:14}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(`strong`,{children:`Visit Count:`}),` `,e.visits]})]}),e.times&&(0,W.jsxs)(`div`,{className:`pattern-detail`,children:[(0,W.jsx)(Sr,{size:14}),(0,W.jsx)(`span`,{children:(0,W.jsx)(`strong`,{children:`Common Times:`})}),(0,W.jsx)(`div`,{className:`pattern-times`,children:e.times.map((e,t)=>(0,W.jsx)(`span`,{className:`time-tag`,children:e},t))})]})]})]})]},n)})}),o.length===0&&(0,W.jsxs)(`div`,{className:`empty-state`,children:[(0,W.jsx)(ni,{size:48}),(0,W.jsx)(`h3`,{children:`No patterns match your filters`}),(0,W.jsx)(`p`,{children:`Try adjusting the pattern type or severity filters.`})]}),(0,W.jsx)(`style`,{children:`
        .pattern-types {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .pattern-type-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pattern-type-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-1px);
        }
        .pattern-type-card.active {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .pattern-type-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pattern-type-count {
          font-size: 1.5rem;
          font-weight: 800;
          display: block;
        }
        .pattern-type-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .movement-filters {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .patterns-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pattern-card {
          display: flex;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .pattern-card:hover {
          border-color: var(--border-secondary);
          box-shadow: var(--shadow-glow);
        }
        .pattern-card-left {
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-tertiary);
          border-right: 2px solid;
          padding: 20px 12px;
          flex-shrink: 0;
        }
        .pattern-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pattern-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }
        .pattern-card-body {
          flex: 1;
          padding: 20px 24px;
        }
        .pattern-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .pattern-suspect {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pattern-avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .pattern-card-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .pattern-description {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }
        .pattern-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid var(--border-primary);
        }
        .pattern-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .pattern-detail svg {
          color: var(--text-tertiary);
          flex-shrink: 0;
        }
        .pattern-times {
          display: flex;
          gap: 4px;
        }
        .time-tag {
          padding: 2px 8px;
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-secondary);
        }
        @media (max-width: 768px) {
          .pattern-types { grid-template-columns: repeat(2, 1fr); }
          .pattern-card { flex-direction: column; }
          .pattern-card-left {
            width: 100%;
            flex-direction: row;
            border-right: none;
            border-bottom: 2px solid;
            padding: 12px 20px;
          }
        }
      `})]})}function Bd(){let{suspects:e,evidenceFiles:t,analysisResults:n,crossEvidenceLinks:r,aiInsights:i,cdrData:a,timelineEvents:o}=$n(),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(!1),d={id:`CASE-2026-C001`,title:`Operation Shadow Net`,officer:`Inspector Arjun Mehta`,badge:`IPS-4521`,dateOpened:`March 10, 2026`,lastUpdated:new Date().toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`}),status:`Active Investigation`,priority:`HIGH`},f={totalEvidence:t.length,analyzed:t.filter(e=>e.status===`analyzed`).length,suspects:e.length,highRisk:e.filter(e=>e.risk===`high`).length,crossLinks:r.length,insights:i.length,callRecords:a.length,events:o.length};return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsx)(`h1`,{children:`Case Report Generator`}),(0,W.jsx)(`p`,{children:`Compile a comprehensive investigation report from all analyzed evidence and AI findings.`})]}),(0,W.jsxs)(`div`,{className:`report-banner animate-fade-in-up`,children:[(0,W.jsx)(`div`,{className:`report-badge`,children:(0,W.jsx)(oi,{size:32})}),(0,W.jsxs)(`div`,{className:`report-case-info`,children:[(0,W.jsx)(`div`,{className:`report-case-id`,children:d.id}),(0,W.jsx)(`h2`,{children:d.title}),(0,W.jsxs)(`div`,{className:`report-meta`,children:[(0,W.jsxs)(`span`,{children:[`Officer: `,d.officer]}),(0,W.jsxs)(`span`,{children:[`Badge: `,d.badge]}),(0,W.jsxs)(`span`,{children:[`Opened: `,d.dateOpened]})]})]}),(0,W.jsxs)(`div`,{className:`report-status`,children:[(0,W.jsx)(`span`,{className:`badge badge-high`,children:d.priority}),(0,W.jsx)(`span`,{className:`report-status-text`,children:d.status})]})]}),(0,W.jsx)(`div`,{className:`report-stats animate-fade-in-up delay-1`,children:[{icon:jr,label:`Evidence Files`,value:`${f.analyzed}/${f.totalEvidence}`,sub:`Analyzed`},{icon:hi,label:`Suspects`,value:f.suspects,sub:`${f.highRisk} High Risk`},{icon:zr,label:`Cross-Links`,value:f.crossLinks,sub:`Connections`},{icon:ur,label:`AI Insights`,value:f.insights,sub:`Generated`},{icon:Sr,label:`Timeline Events`,value:f.events,sub:`Tracked`},{icon:mr,label:`CDR Records`,value:f.callRecords,sub:`Analyzed`}].map((e,t)=>(0,W.jsxs)(`div`,{className:`report-stat-card`,children:[(0,W.jsx)(e.icon,{size:20,className:`report-stat-icon`}),(0,W.jsx)(`div`,{className:`report-stat-value`,children:e.value}),(0,W.jsx)(`div`,{className:`report-stat-label`,children:e.label}),(0,W.jsx)(`div`,{className:`text-xs text-muted`,children:e.sub})]},t))}),(0,W.jsxs)(`div`,{className:`report-sections animate-fade-in-up delay-2`,children:[(0,W.jsx)(`h3`,{children:`Report Sections`}),(0,W.jsx)(`div`,{className:`report-section-list`,children:[{title:`Executive Summary`,desc:`Case overview, key findings, and recommended actions`,status:`ready`},{title:`Evidence Inventory`,desc:`${f.totalEvidence} evidence files catalogued and analyzed`,status:`ready`},{title:`Suspect Profiles`,desc:`${f.suspects} suspects profiled with risk assessments`,status:`ready`},{title:`AI Analysis Results`,desc:`Object detection, entity extraction, and risk scoring`,status:`ready`},{title:`Network Analysis`,desc:`Suspect relationship mapping and connection strengths`,status:`ready`},{title:`Timeline Reconstruction`,desc:`${f.events} events reconstructed chronologically`,status:`ready`},{title:`Geo-Location Analysis`,desc:`CDR-based movement tracking and tower triangulation`,status:`ready`},{title:`Cross-Evidence Linking`,desc:`${f.crossLinks} automated evidence connections verified`,status:`ready`},{title:`AI Insights & Recommendations`,desc:`${f.insights} machine-generated intelligence points`,status:`ready`},{title:`Appendices`,desc:`Raw data tables, methodology notes, and glossary`,status:`ready`}].map((e,t)=>(0,W.jsxs)(`div`,{className:`report-section-item`,children:[(0,W.jsx)(`div`,{className:`report-section-num`,children:t+1}),(0,W.jsxs)(`div`,{className:`report-section-info`,children:[(0,W.jsx)(`span`,{className:`report-section-title`,children:e.title}),(0,W.jsx)(`span`,{className:`text-xs text-muted`,children:e.desc})]}),(0,W.jsx)(xr,{size:16,style:{color:`var(--accent-success)`}})]},t))})]}),(0,W.jsxs)(`div`,{className:`report-findings animate-fade-in-up delay-3`,children:[(0,W.jsx)(`h3`,{children:`Key Findings Summary`}),(0,W.jsx)(`div`,{className:`findings-grid`,children:i.filter(e=>e.severity===`high`).slice(0,4).map(e=>(0,W.jsxs)(`div`,{className:`finding-card`,children:[(0,W.jsxs)(`div`,{className:`finding-header`,children:[(0,W.jsx)(di,{size:16,style:{color:`var(--accent-danger)`}}),(0,W.jsx)(`span`,{className:`badge badge-high`,children:`Critical`})]}),(0,W.jsx)(`h4`,{children:e.title}),(0,W.jsxs)(`p`,{children:[e.description.substring(0,120),`...`]}),(0,W.jsxs)(`div`,{className:`finding-meta`,children:[(0,W.jsxs)(`span`,{children:[`Confidence: `,e.confidence,`%`]}),(0,W.jsxs)(`span`,{children:[`Suspects: `,e.suspects.length]})]})]},e.id))})]}),(0,W.jsx)(`div`,{className:`report-actions animate-fade-in-up delay-4`,children:l?(0,W.jsxs)(`div`,{className:`report-generated`,children:[(0,W.jsx)(xr,{size:28,style:{color:`var(--accent-success)`}}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:`Report Generated Successfully`}),(0,W.jsxs)(`p`,{className:`text-muted`,children:[`Case report compiled with `,f.totalEvidence,` evidence files, `,f.suspects,` suspects, and `,f.insights,` AI insights.`]})]}),(0,W.jsxs)(`div`,{className:`report-download-actions`,children:[(0,W.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>window.print(),children:[(0,W.jsx)(Zr,{size:16}),` Print`]}),(0,W.jsxs)(`button`,{className:`btn btn-outline`,onClick:()=>u(!1),children:[(0,W.jsx)(Tr,{size:16}),` Export PDF`]})]})]}):(0,W.jsx)(`button`,{className:`btn btn-primary report-generate-btn`,onClick:()=>{c(!0),setTimeout(()=>{c(!1),u(!0)},2500)},disabled:s,children:s?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`div`,{className:`loading-spinner`,style:{width:20,height:20,borderWidth:2}}),`Compiling Report...`]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(jr,{size:20}),`Generate Full Report`]})})}),(0,W.jsx)(`style`,{children:`
        .report-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 32px;
          background: linear-gradient(135deg, var(--bg-card), rgba(59,130,246,0.08));
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .report-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        }
        .report-badge {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-lg);
          background: rgba(59,130,246,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .report-case-info { flex: 1; }
        .report-case-id {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .report-case-info h2 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .report-meta {
          display: flex;
          gap: 18px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .report-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .report-status-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .report-stats {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .report-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
        }
        .report-stat-icon {
          color: var(--accent-primary);
          margin-bottom: 8px;
        }
        .report-stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .report-stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .report-sections {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 20px;
        }
        .report-sections h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--accent-primary);
        }
        .report-section-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .report-section-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }
        .report-section-item:hover {
          background: var(--bg-tertiary);
        }
        .report-section-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .report-section-info { flex: 1; }
        .report-section-title {
          font-size: 0.88rem;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
        .report-findings {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
        }
        .report-findings h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--accent-danger);
        }
        .findings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .finding-card {
          padding: 18px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--accent-danger);
        }
        .finding-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .finding-card h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .finding-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 10px;
        }
        .finding-meta {
          display: flex;
          gap: 14px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
        }
        .report-actions {
          text-align: center;
          padding: 20px 0;
        }
        .report-generate-btn {
          padding: 16px 48px;
          font-size: 1rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .report-generated {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 32px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-lg);
        }
        .report-generated h3 {
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .report-download-actions {
          display: flex;
          gap: 10px;
          margin-left: auto;
        }
        @media (max-width: 1100px) {
          .report-stats { grid-template-columns: repeat(3, 1fr); }
          .findings-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .report-stats { grid-template-columns: repeat(2, 1fr); }
          .report-banner { flex-direction: column; text-align: center; }
          .report-meta { flex-direction: column; gap: 4px; }
        }
      `})]})}var Vd=`/api/cctv`,Hd={person:`#3b82f6`,car:`#10b981`,truck:`#f59e0b`,bus:`#8b5cf6`,motorcycle:`#ef4444`,bicycle:`#06b6d4`,dog:`#ec4899`,cat:`#14b8a6`,default:`#6366f1`};function Ud(e){return Hd[e]||Hd.default}function Wd(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(null),[i,a]=(0,x.useState)(null),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(0),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(0),[m,h]=(0,x.useState)(null),[g,_]=(0,x.useState)(null),[v,y]=(0,x.useState)(0),[b,S]=(0,x.useState)(null),[C,w]=(0,x.useState)(null),[T,E]=(0,x.useState)(!1),[ee,D]=(0,x.useState)({frameSkip:10,confidence:.35}),[te,ne]=(0,x.useState)(!1),[re,O]=(0,x.useState)(null),ie=(0,x.useRef)(null),k=(0,x.useRef)(null);(0,x.useEffect)(()=>{fetch(`${Vd}/health`).then(e=>e.json()).then(()=>O(!0)).catch(()=>O(!1))},[]),(0,x.useEffect)(()=>()=>{k.current&&clearInterval(k.current),n&&URL.revokeObjectURL(n)},[n]);let A=e=>{e.preventDefault(),E(!1);let t=e.dataTransfer.files[0];t&&M(t)},j=e=>{let t=e.target.files[0];t&&M(t),e.target.value=``},M=e=>{let n=e.name.split(`.`).pop().toLowerCase();if(![`mp4`,`avi`,`mov`,`mkv`,`webm`].includes(n)){w(`Unsupported format. Use MP4, AVI, MOV, MKV, or WebM.`);return}t(e),r(URL.createObjectURL(e)),_(null),a(null),w(null),h(null)},N=async()=>{if(e){w(null),s(!0),l(0);try{let t=new FormData;t.append(`video`,e);let n=new XMLHttpRequest,r=await new Promise((e,r)=>{n.upload.onprogress=e=>{e.lengthComputable&&l(Math.round(e.loaded/e.total*100))},n.onload=()=>{n.status===200?e(JSON.parse(n.responseText)):r(Error(JSON.parse(n.responseText)?.error||`Upload failed`))},n.onerror=()=>r(Error(`Connection failed — is the Python server running?`)),n.open(`POST`,`${Vd}/upload`),n.send(t)});a(r.video_id),s(!1),l(100),d(!0),p(0),h(`Starting YOLOv8 detection...`);let i=await fetch(`${Vd}/analyze/${r.video_id}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({frame_skip:ee.frameSkip,confidence:ee.confidence})});if(!i.ok){let e=await i.json();throw Error(e.error||`Analysis failed to start`)}k.current=setInterval(async()=>{try{let e=await(await fetch(`${Vd}/status/${r.video_id}`)).json();if(p(e.progress||0),h(e.status===`analyzing`?`Analyzing frame ${e.processed_frames}/${e.total_frames} (${e.analyzed_count} analyzed)`:e.status===`completed`?`Detection complete!`:e.status),e.status===`completed`)clearInterval(k.current),k.current=null,_(await(await fetch(`${Vd}/results/${r.video_id}`)).json()),d(!1),p(100);else if(e.status===`error`)throw clearInterval(k.current),k.current=null,Error(e.error||`Analysis failed`)}catch(e){clearInterval(k.current),k.current=null,w(e.message),d(!1)}},1e3)}catch(e){w(e.message),s(!1),d(!1)}}},P=()=>{k.current&&clearInterval(k.current),n&&URL.revokeObjectURL(n),t(null),r(null),a(null),_(null),w(null),d(!1),s(!1),h(null),y(0)};return(0,W.jsxs)(`div`,{className:`page-wrapper`,children:[(0,W.jsxs)(`div`,{className:`page-header`,children:[(0,W.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,W.jsx)(`div`,{className:`cctv-header-icon`,children:(0,W.jsx)(fr,{size:24})}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h1`,{children:`CCTV Detection`}),(0,W.jsx)(`p`,{children:`Upload surveillance footage for AI-powered object detection using YOLOv8 + OpenCV`})]})]}),(0,W.jsx)(`div`,{className:`cctv-header-actions`,children:(0,W.jsxs)(`div`,{className:`server-badge ${re===!0?`online`:re===!1?`offline`:`checking`}`,children:[(0,W.jsx)(`span`,{className:`server-dot`}),re===!0?`AI Server Online`:re===!1?`Server Offline`:`Checking...`]})})]}),re===!1&&(0,W.jsxs)(`div`,{className:`cctv-alert animate-fade-in`,children:[(0,W.jsx)(di,{size:20}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`strong`,{children:`Python Detection Server is not running`}),(0,W.jsxs)(`p`,{children:[`Start it with: `,(0,W.jsx)(`code`,{children:`cd server && pip install -r requirements.txt && python cctv_server.py`})]})]})]}),C&&(0,W.jsxs)(`div`,{className:`cctv-alert error animate-fade-in`,children:[(0,W.jsx)(di,{size:20}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`strong`,{children:`Error`}),(0,W.jsx)(`p`,{children:C})]}),(0,W.jsx)(`button`,{className:`cctv-alert-close`,onClick:()=>w(null),children:(0,W.jsx)(_i,{size:16})})]}),g?(0,W.jsxs)(`div`,{className:`cctv-results animate-fade-in-up`,children:[(0,W.jsxs)(`div`,{className:`cctv-summary`,children:[(0,W.jsxs)(`div`,{className:`cctv-summary-card total`,children:[(0,W.jsx)(ci,{size:22}),(0,W.jsx)(`div`,{className:`cctv-summary-value`,children:g.summary.total_detections}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Total Detections`})]}),(0,W.jsxs)(`div`,{className:`cctv-summary-card persons`,children:[(0,W.jsx)(hi,{size:22}),(0,W.jsx)(`div`,{className:`cctv-summary-value`,children:g.summary.persons_detected}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Persons Detected`})]}),(0,W.jsxs)(`div`,{className:`cctv-summary-card vehicles`,children:[(0,W.jsx)(pr,{size:22}),(0,W.jsx)(`div`,{className:`cctv-summary-value`,children:g.summary.vehicles_detected}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Vehicles Detected`})]}),(0,W.jsxs)(`div`,{className:`cctv-summary-card classes`,children:[(0,W.jsx)(qr,{size:22}),(0,W.jsx)(`div`,{className:`cctv-summary-value`,children:g.summary.unique_classes}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Object Classes`})]}),(0,W.jsxs)(`div`,{className:`cctv-summary-card frames`,children:[(0,W.jsx)(mr,{size:22}),(0,W.jsx)(`div`,{className:`cctv-summary-value`,children:g.summary.analyzed_frames}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Frames Analyzed`})]}),(0,W.jsxs)(`div`,{className:`cctv-summary-card duration`,children:[(0,W.jsx)(Sr,{size:22}),(0,W.jsxs)(`div`,{className:`cctv-summary-value`,children:[g.summary.duration,`s`]}),(0,W.jsx)(`div`,{className:`cctv-summary-label`,children:`Video Duration`})]})]}),(0,W.jsxs)(`div`,{className:`cctv-section`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(mr,{size:18}),` Detection Distribution`]}),(0,W.jsx)(`div`,{className:`cctv-class-grid`,children:Object.entries(g.summary.class_counts).map(([e,t])=>(0,W.jsxs)(`div`,{className:`cctv-class-bar`,children:[(0,W.jsxs)(`div`,{className:`cctv-class-name`,children:[(0,W.jsx)(`span`,{className:`cctv-class-dot`,style:{background:Ud(e)}}),e]}),(0,W.jsx)(`div`,{className:`cctv-class-track`,children:(0,W.jsx)(`div`,{className:`cctv-class-fill`,style:{width:`${t/Math.max(...Object.values(g.summary.class_counts))*100}%`,background:Ud(e)}})}),(0,W.jsx)(`span`,{className:`cctv-class-count`,children:t})]},e))})]}),g.frames&&g.frames.length>0&&(0,W.jsxs)(`div`,{className:`cctv-section`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(fr,{size:18}),` Annotated Frames (`,g.frames.length,`)`]}),(0,W.jsxs)(`div`,{className:`cctv-frame-viewer`,children:[(0,W.jsxs)(`div`,{className:`cctv-frame-main`,onClick:()=>S(g.frames[v]),children:[(0,W.jsx)(`img`,{src:`${Vd}/frames/${g.video_id}/${g.frames[v]?.image}`,alt:`Frame ${v}`,className:`cctv-frame-img`}),(0,W.jsx)(`div`,{className:`cctv-frame-overlay`,children:(0,W.jsx)(Ur,{size:24})}),(0,W.jsxs)(`div`,{className:`cctv-frame-info`,children:[(0,W.jsxs)(`span`,{children:[`Frame `,g.frames[v]?.frame_idx,` • `,g.frames[v]?.timestamp,`s`]}),(0,W.jsxs)(`span`,{children:[g.frames[v]?.detection_count,` detections`]})]})]}),(0,W.jsxs)(`div`,{className:`cctv-frame-nav`,children:[(0,W.jsx)(`button`,{onClick:()=>y(Math.max(0,v-1)),disabled:v===0,children:(0,W.jsx)(_r,{size:18})}),(0,W.jsxs)(`span`,{className:`text-sm`,children:[v+1,` / `,g.frames.length]}),(0,W.jsx)(`button`,{onClick:()=>y(Math.min(g.frames.length-1,v+1)),disabled:v===g.frames.length-1,children:(0,W.jsx)(vr,{size:18})})]}),(0,W.jsx)(`div`,{className:`cctv-frame-strip`,children:g.frames.map((e,t)=>(0,W.jsxs)(`div`,{className:`cctv-frame-thumb ${t===v?`active`:``}`,onClick:()=>y(t),children:[(0,W.jsx)(`img`,{src:`${Vd}/frames/${g.video_id}/${e.image}`,alt:``}),e.detection_count>0&&(0,W.jsx)(`span`,{className:`cctv-thumb-count`,children:e.detection_count})]},t))})]})]}),(0,W.jsxs)(`div`,{className:`cctv-section`,children:[(0,W.jsxs)(`h2`,{children:[(0,W.jsx)(Sr,{size:18}),` Detection Timeline`]}),(0,W.jsx)(`div`,{className:`cctv-timeline`,children:g.frames.map((e,t)=>(0,W.jsx)(`div`,{className:`cctv-timeline-bar`,style:{height:`${Math.max(4,e.detection_count/Math.max(...g.frames.map(e=>e.detection_count))*60)}px`},onClick:()=>y(t),title:`${e.timestamp}s — ${e.detection_count} detections`,children:(0,W.jsx)(`div`,{className:`cctv-timeline-fill`,style:{background:e.detection_count>3?`var(--accent-danger)`:e.detection_count>0?`var(--accent-primary)`:`var(--bg-elevated)`}})},t))}),(0,W.jsxs)(`div`,{className:`cctv-timeline-labels`,children:[(0,W.jsx)(`span`,{children:`0s`}),(0,W.jsxs)(`span`,{children:[g.summary.duration,`s`]})]})]}),(0,W.jsx)(`div`,{className:`cctv-new-analysis`,children:(0,W.jsxs)(`button`,{className:`btn btn-primary`,onClick:P,children:[(0,W.jsx)($r,{size:16}),` Analyze New Video`]})})]}):(0,W.jsx)(`div`,{className:`cctv-upload-area animate-fade-in-up`,children:e?(0,W.jsxs)(`div`,{className:`cctv-preview-panel`,children:[(0,W.jsx)(`div`,{className:`cctv-video-preview`,children:(0,W.jsx)(`video`,{src:n,controls:!0,className:`cctv-video`})}),(0,W.jsxs)(`div`,{className:`cctv-preview-info`,children:[(0,W.jsx)(`h3`,{children:e.name}),(0,W.jsx)(`p`,{className:`text-muted`,children:(e=>e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(0)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`)(e.size)}),(0,W.jsxs)(`button`,{className:`cctv-settings-btn`,onClick:()=>ne(!te),children:[(0,W.jsx)(ai,{size:14}),` Analysis Settings`]}),te&&(0,W.jsxs)(`div`,{className:`cctv-settings`,children:[(0,W.jsxs)(`label`,{children:[`Frame Skip (analyze every Nth frame)`,(0,W.jsx)(`input`,{type:`number`,min:1,max:60,value:ee.frameSkip,onChange:e=>D(t=>({...t,frameSkip:parseInt(e.target.value)||10}))})]}),(0,W.jsxs)(`label`,{children:[`Confidence Threshold`,(0,W.jsx)(`input`,{type:`number`,step:.05,min:.1,max:.95,value:ee.confidence,onChange:e=>D(t=>({...t,confidence:parseFloat(e.target.value)||.35}))})]})]}),o&&(0,W.jsxs)(`div`,{className:`cctv-progress`,children:[(0,W.jsxs)(`div`,{className:`cctv-progress-label`,children:[(0,W.jsx)(fi,{size:14}),` Uploading video...`]}),(0,W.jsx)(`div`,{className:`cctv-progress-bar`,children:(0,W.jsx)(`div`,{className:`cctv-progress-fill upload`,style:{width:`${c}%`}})}),(0,W.jsxs)(`span`,{className:`cctv-progress-pct`,children:[c,`%`]})]}),u&&(0,W.jsxs)(`div`,{className:`cctv-progress`,children:[(0,W.jsxs)(`div`,{className:`cctv-progress-label`,children:[(0,W.jsx)(Br,{size:14,className:`spin`}),` `,m]}),(0,W.jsx)(`div`,{className:`cctv-progress-bar`,children:(0,W.jsx)(`div`,{className:`cctv-progress-fill analyze`,style:{width:`${f}%`}})}),(0,W.jsxs)(`span`,{className:`cctv-progress-pct`,children:[Math.round(f),`%`]})]}),(0,W.jsxs)(`div`,{className:`cctv-preview-actions`,children:[(0,W.jsx)(`button`,{className:`btn btn-primary`,onClick:N,disabled:o||u||!re,children:o?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Br,{size:16,className:`spin`}),` Uploading...`]}):u?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Br,{size:16,className:`spin`}),` Analyzing...`]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(vi,{size:16}),` Run YOLOv8 Detection`]})}),(0,W.jsxs)(`button`,{className:`btn btn-secondary`,onClick:P,disabled:o||u,children:[(0,W.jsx)($r,{size:14}),` Change Video`]})]})]})]}):(0,W.jsxs)(`div`,{className:`cctv-dropzone ${T?`active`:``}`,onDragOver:e=>{e.preventDefault(),E(!0)},onDragLeave:()=>E(!1),onDrop:A,onClick:()=>ie.current?.click(),children:[(0,W.jsx)(`input`,{ref:ie,type:`file`,accept:`.mp4,.avi,.mov,.mkv,.webm`,onChange:j,style:{display:`none`}}),(0,W.jsx)(`div`,{className:`cctv-drop-icon`,children:(0,W.jsx)(fr,{size:48})}),(0,W.jsx)(`h3`,{children:`Drop CCTV footage here`}),(0,W.jsx)(`p`,{children:`or click to browse • MP4, AVI, MOV, MKV, WebM`}),(0,W.jsxs)(`div`,{className:`cctv-drop-features`,children:[(0,W.jsxs)(`span`,{children:[(0,W.jsx)(ci,{size:14}),` YOLOv8 Detection`]}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(hi,{size:14}),` Person Tracking`]}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(pr,{size:14}),` Vehicle Detection`]}),(0,W.jsxs)(`span`,{children:[(0,W.jsx)(oi,{size:14}),` 80+ Object Classes`]})]})]})}),b&&(0,W.jsx)(`div`,{className:`cctv-modal-overlay`,onClick:()=>S(null),children:(0,W.jsxs)(`div`,{className:`cctv-modal`,onClick:e=>e.stopPropagation(),children:[(0,W.jsxs)(`div`,{className:`cctv-modal-header`,children:[(0,W.jsxs)(`h3`,{children:[`Frame `,b.frame_idx,` — `,b.timestamp,`s`]}),(0,W.jsx)(`button`,{onClick:()=>S(null),children:(0,W.jsx)(_i,{size:20})})]}),(0,W.jsx)(`img`,{src:`${Vd}/frames/${g.video_id}/${b.image}`,className:`cctv-modal-img`,alt:``}),(0,W.jsxs)(`div`,{className:`cctv-modal-detections`,children:[b.detections.map((e,t)=>(0,W.jsxs)(`span`,{className:`cctv-detection-tag`,style:{borderColor:Ud(e.class)},children:[(0,W.jsx)(`span`,{className:`cctv-class-dot`,style:{background:Ud(e.class)}}),e.class,` (`,Math.round(e.confidence*100),`%)`]},t)),b.detections.length===0&&(0,W.jsx)(`span`,{className:`text-muted`,children:`No detections in this frame`})]})]})}),(0,W.jsx)(`style`,{children:`
        .cctv-header-icon {
          width: 48px; height: 48px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .cctv-header-actions { display: flex; gap: 8px; margin-left: auto; }
        .server-badge {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: var(--radius-full);
          font-size: 0.75rem; font-weight: 600;
          border: 1px solid var(--border-primary);
        }
        .server-dot {
          width: 8px; height: 8px; border-radius: 50%;
        }
        .server-badge.online { color: var(--accent-success); }
        .server-badge.online .server-dot { background: var(--accent-success); box-shadow: 0 0 8px var(--accent-success); }
        .server-badge.offline { color: var(--accent-danger); }
        .server-badge.offline .server-dot { background: var(--accent-danger); }
        .server-badge.checking { color: var(--text-tertiary); }
        .server-badge.checking .server-dot { background: var(--text-tertiary); animation: pulse 1.5s infinite; }

        .cctv-alert {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 18px; border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245,158,11,0.3);
          color: var(--accent-warning); margin-bottom: 20px; position: relative;
        }
        .cctv-alert strong { display: block; margin-bottom: 2px; }
        .cctv-alert p { font-size: 0.8rem; color: var(--text-secondary); margin: 0; }
        .cctv-alert code {
          background: var(--bg-tertiary); padding: 2px 8px; border-radius: var(--radius-sm);
          font-size: 0.75rem; font-family: var(--font-mono);
        }
        .cctv-alert.error { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: var(--accent-danger); }
        .cctv-alert-close {
          position: absolute; top: 10px; right: 10px;
          background: none; border: none; color: var(--text-tertiary); cursor: pointer;
        }

        /* Dropzone */
        .cctv-dropzone {
          border: 2px dashed var(--border-secondary);
          border-radius: var(--radius-xl); padding: 64px 32px;
          text-align: center; cursor: pointer;
          transition: all var(--transition-base);
          background: var(--bg-card);
        }
        .cctv-dropzone:hover, .cctv-dropzone.active {
          border-color: var(--accent-primary);
          box-shadow: 0 0 40px rgba(59,130,246,0.08);
          background: rgba(59,130,246,0.02);
        }
        .cctv-drop-icon {
          width: 88px; height: 88px; margin: 0 auto 20px;
          background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15));
          border-radius: var(--radius-xl);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-primary);
        }
        .cctv-dropzone h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
        .cctv-dropzone > p { color: var(--text-tertiary); font-size: 0.9rem; }
        .cctv-drop-features {
          display: flex; justify-content: center; gap: 16px; margin-top: 20px; flex-wrap: wrap;
        }
        .cctv-drop-features span {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 14px; background: var(--bg-tertiary);
          border-radius: var(--radius-full); font-size: 0.75rem;
          font-weight: 600; color: var(--text-secondary);
        }

        /* Preview */
        .cctv-preview-panel {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl); padding: 24px; overflow: hidden;
        }
        .cctv-video { width: 100%; border-radius: var(--radius-md); background: #000; }
        .cctv-preview-info { display: flex; flex-direction: column; gap: 12px; }
        .cctv-preview-info h3 { font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .cctv-settings-btn {
          display: flex; align-items: center; gap: 6px;
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm); padding: 6px 12px;
          color: var(--text-secondary); font-size: 0.8rem; cursor: pointer; width: fit-content;
        }
        .cctv-settings-btn:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
        .cctv-settings {
          display: flex; flex-direction: column; gap: 10px;
          padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-md);
        }
        .cctv-settings label {
          font-size: 0.75rem; color: var(--text-secondary);
          display: flex; flex-direction: column; gap: 4px;
        }
        .cctv-settings input {
          padding: 6px 10px; background: var(--bg-input); border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem;
        }

        /* Progress */
        .cctv-progress { display: flex; flex-direction: column; gap: 6px; }
        .cctv-progress-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: var(--text-secondary);
        }
        .cctv-progress-bar {
          height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;
        }
        .cctv-progress-fill {
          height: 100%; border-radius: var(--radius-full); transition: width 0.5s ease;
        }
        .cctv-progress-fill.upload { background: var(--accent-primary); }
        .cctv-progress-fill.analyze { background: linear-gradient(90deg, var(--accent-warning), var(--accent-success)); }
        .cctv-progress-pct { font-size: 0.7rem; font-weight: 700; font-family: var(--font-mono); color: var(--text-tertiary); }

        .cctv-preview-actions { display: flex; gap: 10px; margin-top: auto; flex-wrap: wrap; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Summary Cards */
        .cctv-summary {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 14px; margin-bottom: 24px;
        }
        .cctv-summary-card {
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-md); padding: 18px;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          transition: all var(--transition-fast);
        }
        .cctv-summary-card:hover { border-color: var(--accent-primary); transform: translateY(-2px); }
        .cctv-summary-value { font-size: 1.6rem; font-weight: 800; font-family: var(--font-mono); }
        .cctv-summary-label { font-size: 0.7rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
        .cctv-summary-card.total { color: var(--accent-primary); }
        .cctv-summary-card.persons { color: #3b82f6; }
        .cctv-summary-card.vehicles { color: #10b981; }
        .cctv-summary-card.classes { color: #8b5cf6; }
        .cctv-summary-card.frames { color: var(--accent-warning); }
        .cctv-summary-card.duration { color: var(--accent-secondary); }

        /* Sections */
        .cctv-section {
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg); padding: 20px; margin-bottom: 20px;
        }
        .cctv-section h2 {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.95rem; font-weight: 700; margin-bottom: 16px;
        }

        /* Class Distribution */
        .cctv-class-grid { display: flex; flex-direction: column; gap: 8px; }
        .cctv-class-bar { display: flex; align-items: center; gap: 10px; }
        .cctv-class-name {
          display: flex; align-items: center; gap: 6px;
          min-width: 100px; font-size: 0.8rem; font-weight: 600;
          text-transform: capitalize;
        }
        .cctv-class-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .cctv-class-track {
          flex: 1; height: 8px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;
        }
        .cctv-class-fill { height: 100%; border-radius: var(--radius-full); transition: width 0.5s ease; }
        .cctv-class-count { font-size: 0.8rem; font-weight: 700; font-family: var(--font-mono); min-width: 30px; text-align: right; }

        /* Frame Viewer */
        .cctv-frame-main {
          position: relative; border-radius: var(--radius-md); overflow: hidden; cursor: pointer;
          background: #000;
        }
        .cctv-frame-img { width: 100%; display: block; }
        .cctv-frame-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          color: white; opacity: 0; transition: opacity var(--transition-fast);
        }
        .cctv-frame-main:hover .cctv-frame-overlay { opacity: 1; }
        .cctv-frame-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; justify-content: space-between;
          padding: 8px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white; font-size: 0.75rem;
        }
        .cctv-frame-nav {
          display: flex; align-items: center; justify-content: center; gap: 16px; padding: 10px 0;
        }
        .cctv-frame-nav button {
          width: 32px; height: 32px;
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary); cursor: pointer;
        }
        .cctv-frame-nav button:hover:not(:disabled) { background: var(--accent-primary); color: white; }
        .cctv-frame-nav button:disabled { opacity: 0.3; cursor: default; }

        .cctv-frame-strip {
          display: flex; gap: 6px; overflow-x: auto; padding: 4px 0;
        }
        .cctv-frame-thumb {
          width: 72px; height: 48px; border-radius: var(--radius-sm); overflow: hidden;
          cursor: pointer; border: 2px solid transparent; flex-shrink: 0; position: relative;
          transition: all var(--transition-fast);
        }
        .cctv-frame-thumb.active { border-color: var(--accent-primary); }
        .cctv-frame-thumb:hover { border-color: var(--accent-secondary); }
        .cctv-frame-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .cctv-thumb-count {
          position: absolute; top: 2px; right: 2px;
          background: var(--accent-danger); color: white;
          font-size: 0.55rem; font-weight: 700; padding: 1px 4px;
          border-radius: var(--radius-full);
        }

        /* Timeline */
        .cctv-timeline {
          display: flex; gap: 2px; align-items: flex-end; height: 60px; padding: 4px 0;
        }
        .cctv-timeline-bar {
          flex: 1; cursor: pointer; border-radius: 2px 2px 0 0; overflow: hidden; min-width: 3px;
          transition: all var(--transition-fast);
        }
        .cctv-timeline-bar:hover { opacity: 0.8; transform: scaleY(1.15); }
        .cctv-timeline-fill { width: 100%; height: 100%; border-radius: 2px 2px 0 0; }
        .cctv-timeline-labels {
          display: flex; justify-content: space-between;
          font-size: 0.65rem; color: var(--text-tertiary);
        }

        .cctv-new-analysis { display: flex; justify-content: center; padding: 12px 0; }

        /* Modal */
        .cctv-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn 0.2s ease-out; backdrop-filter: blur(8px);
        }
        .cctv-modal {
          background: var(--bg-card); border: 1px solid var(--border-secondary);
          border-radius: var(--radius-xl); max-width: 960px; width: 100%; max-height: 90vh;
          overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .cctv-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px; border-bottom: 1px solid var(--border-primary);
        }
        .cctv-modal-header h3 { font-size: 0.9rem; }
        .cctv-modal-header button {
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          color: var(--text-secondary); width: 32px; height: 32px;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }
        .cctv-modal-header button:hover { background: var(--accent-danger); color: white; }
        .cctv-modal-img { width: 100%; display: block; }
        .cctv-modal-detections {
          display: flex; flex-wrap: wrap; gap: 6px; padding: 14px 20px;
        }
        .cctv-detection-tag {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px; border: 1px solid; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 600;
        }

        @media (max-width: 768px) {
          .cctv-preview-panel { grid-template-columns: 1fr; }
          .cctv-summary { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}function Gd({children:e}){let{user:t,loading:n}=zn();return n?(0,W.jsxs)(`div`,{className:`loading-page`,children:[(0,W.jsx)(`div`,{className:`loading-spinner`}),(0,W.jsx)(`p`,{children:`Initializing system...`})]}):t?e:(0,W.jsx)(Tt,{to:`/login`,replace:!0})}function Kd(){let{user:e}=zn();return e?(0,W.jsxs)(`div`,{className:`app-global-container`,children:[(0,W.jsx)(xi,{}),(0,W.jsxs)(`div`,{className:`app-layout`,children:[(0,W.jsx)(bi,{}),(0,W.jsx)(`main`,{className:`main-content`,children:(0,W.jsxs)(B,{children:[(0,W.jsx)(Et,{path:`/`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Ci,{})})}),(0,W.jsx)(Et,{path:`/import`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Ei,{})})}),(0,W.jsx)(Et,{path:`/evidence`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(ki,{})})}),(0,W.jsx)(Et,{path:`/cctv`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Wd,{})})}),(0,W.jsx)(Et,{path:`/analysis`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Mi,{})})}),(0,W.jsx)(Et,{path:`/network`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Xu,{})})}),(0,W.jsx)(Et,{path:`/timeline`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)($u,{})})}),(0,W.jsx)(Et,{path:`/geolocation`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(jd,{})})}),(0,W.jsx)(Et,{path:`/scores`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Md,{})})}),(0,W.jsx)(Et,{path:`/cross-evidence`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Pd,{})})}),(0,W.jsx)(Et,{path:`/insights`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Ld,{})})}),(0,W.jsx)(Et,{path:`/movement`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(zd,{})})}),(0,W.jsx)(Et,{path:`/report`,element:(0,W.jsx)(Gd,{children:(0,W.jsx)(Bd,{})})}),(0,W.jsx)(Et,{path:`/login`,element:(0,W.jsx)(Tt,{to:`/`,replace:!0})}),(0,W.jsx)(Et,{path:`*`,element:(0,W.jsx)(Tt,{to:`/`,replace:!0})})]})})]})]}):(0,W.jsxs)(`div`,{className:`app-global-container`,children:[(0,W.jsx)(xi,{}),(0,W.jsxs)(B,{children:[(0,W.jsx)(Et,{path:`/login`,element:(0,W.jsx)(Si,{})}),(0,W.jsx)(Et,{path:`*`,element:(0,W.jsx)(Tt,{to:`/login`,replace:!0})})]})]})}Fn.createRoot(document.getElementById(`root`)).render((0,W.jsx)(x.StrictMode,{children:(0,W.jsx)(pn,{children:(0,W.jsx)(Rn,{children:(0,W.jsx)(Qn,{children:(0,W.jsx)(Kd,{})})})})}));