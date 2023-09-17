(function(w,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],p):(w=typeof globalThis<"u"?globalThis:w||self,p(w.ReactViteLibrary={},w.require$$0))})(this,function(w,p){"use strict";var Z={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Le(){if(se)return Y;se=1;var U=p,O=Symbol.for("react.element"),V=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,j=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function D(R,i,_){var m,h={},b=null,C=null;_!==void 0&&(b=""+_),i.key!==void 0&&(b=""+i.key),i.ref!==void 0&&(C=i.ref);for(m in i)x.call(i,m)&&!k.hasOwnProperty(m)&&(h[m]=i[m]);if(R&&R.defaultProps)for(m in i=R.defaultProps,i)h[m]===void 0&&(h[m]=i[m]);return{$$typeof:O,type:R,key:b,ref:C,props:h,_owner:j.current}}return Y.Fragment=V,Y.jsx=D,Y.jsxs=D,Y}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function Ie(){return ce||(ce=1,process.env.NODE_ENV!=="production"&&function(){var U=p,O=Symbol.for("react.element"),V=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),R=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),L=Symbol.iterator,F="@@iterator";function J(e){if(e===null||typeof e!="object")return null;var r=L&&e[L]||e[F];return typeof r=="function"?r:null}var S=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Q("error",e,t)}}function Q(e,r,t){{var n=S.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var c=t.map(function(o){return String(o)});c.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,c)}}var q=!1,s=!1,v=!1,G=!1,g=!1,le;le=Symbol.for("react.module.reference");function Ye(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===k||g||e===j||e===_||e===m||G||e===C||q||s||v||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===D||e.$$typeof===R||e.$$typeof===i||e.$$typeof===le||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function ve(e){return e.displayName||"Context"}function T(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case V:return"Portal";case k:return"Profiler";case j:return"StrictMode";case _:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ve(r)+".Consumer";case D:var t=e;return ve(t._context)+".Provider";case i:return Ne(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:T(e.type)||"Memo";case b:{var u=e,c=u._payload,o=u._init;try{return T(o(c))}catch{return null}}}return null}var A=Object.assign,M=0,de,pe,me,ge,Ee,he,ye;function be(){}be.__reactDisabledLog=!0;function Ue(){{if(M===0){de=console.log,pe=console.info,me=console.warn,ge=console.error,Ee=console.group,he=console.groupCollapsed,ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Ve(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:de}),info:A({},e,{value:pe}),warn:A({},e,{value:me}),error:A({},e,{value:ge}),group:A({},e,{value:Ee}),groupCollapsed:A({},e,{value:he}),groupEnd:A({},e,{value:ye})})}M<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ee=S.ReactCurrentDispatcher,re;function z(e,r,t){{if(re===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||""}return`
`+re+e}}var te=!1,K;{var Me=typeof WeakMap=="function"?WeakMap:Map;K=new Me}function Re(e,r){if(!e||te)return"";{var t=K.get(e);if(t!==void 0)return t}var n;te=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=ee.current,ee.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(P){n=P}Reflect.construct(e,[],o)}else{try{o.call()}catch(P){n=P}e.call(o.prototype)}}else{try{throw Error()}catch(P){n=P}e()}}catch(P){if(P&&n&&typeof P.stack=="string"){for(var a=P.stack.split(`
`),E=n.stack.split(`
`),f=a.length-1,l=E.length-1;f>=1&&l>=0&&a[f]!==E[l];)l--;for(;f>=1&&l>=0;f--,l--)if(a[f]!==E[l]){if(f!==1||l!==1)do if(f--,l--,l<0||a[f]!==E[l]){var y=`
`+a[f].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,y),y}while(f>=1&&l>=0);break}}}finally{te=!1,ee.current=c,Ve(),Error.prepareStackTrace=u}var W=e?e.displayName||e.name:"",Ae=W?z(W):"";return typeof e=="function"&&K.set(e,Ae),Ae}function Be(e,r,t){return Re(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function X(e,r,t){if(e==null)return"";if(typeof e=="function")return Re(e,Je(e));if(typeof e=="string")return z(e);switch(e){case _:return z("Suspense");case m:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case i:return Be(e.render);case h:return X(e.type,r,t);case b:{var n=e,u=n._payload,c=n._init;try{return X(c(u),r,t)}catch{}}}return""}var H=Object.prototype.hasOwnProperty,_e={},Te=S.ReactDebugCurrentFrame;function $(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}function Ge(e,r,t,n,u){{var c=Function.call.bind(H);for(var o in e)if(c(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var E=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){a=f}a&&!(a instanceof Error)&&($(u),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),$(null)),a instanceof Error&&!(a.message in _e)&&(_e[a.message]=!0,$(u),d("Failed %s type: %s",t,a.message),$(null))}}}var ze=Array.isArray;function ne(e){return ze(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return Pe(e),!1}catch{return!0}}function Pe(e){return""+e}function Ce(e){if(Xe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),Pe(e)}var B=S.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},Se,we,ae;ae={};function $e(e){if(H.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Qe(e,r){if(typeof e.ref=="string"&&B.current&&r&&B.current.stateNode!==r){var t=T(B.current.type);ae[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',T(B.current.type),e.ref),ae[t]=!0)}}function qe(e,r){{var t=function(){Se||(Se=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function er(e,r){{var t=function(){we||(we=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var rr=function(e,r,t,n,u,c,o){var a={$$typeof:O,type:e,key:r,ref:t,props:o,_owner:c};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function tr(e,r,t,n,u){{var c,o={},a=null,E=null;t!==void 0&&(Ce(t),a=""+t),Ze(r)&&(Ce(r.key),a=""+r.key),$e(r)&&(E=r.ref,Qe(r,u));for(c in r)H.call(r,c)&&!He.hasOwnProperty(c)&&(o[c]=r[c]);if(e&&e.defaultProps){var f=e.defaultProps;for(c in f)o[c]===void 0&&(o[c]=f[c])}if(a||E){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&qe(o,l),E&&er(o,l)}return rr(e,a,E,u,n,B.current,o)}}var oe=S.ReactCurrentOwner,Oe=S.ReactDebugCurrentFrame;function I(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}var ie;ie=!1;function ue(e){return typeof e=="object"&&e!==null&&e.$$typeof===O}function xe(){{if(oe.current){var e=T(oe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var je={};function ar(e){{var r=xe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function ke(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ar(r);if(je[t])return;je[t]=!0;var n="";e&&e._owner&&e._owner!==oe.current&&(n=" It was passed a child from "+T(e._owner.type)+"."),I(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),I(null)}}function De(e,r){{if(typeof e!="object")return;if(ne(e))for(var t=0;t<e.length;t++){var n=e[t];ue(n)&&ke(n,r)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var u=J(e);if(typeof u=="function"&&u!==e.entries)for(var c=u.call(e),o;!(o=c.next()).done;)ue(o.value)&&ke(o.value,r)}}}function or(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===i||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=T(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ie){ie=!0;var u=T(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ir(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){I(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),I(null);break}}e.ref!==null&&(I(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),I(null))}}function Fe(e,r,t,n,u,c){{var o=Ye(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=nr(u);E?a+=E:a+=xe();var f;e===null?f="null":ne(e)?f="array":e!==void 0&&e.$$typeof===O?(f="<"+(T(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a)}var l=tr(e,r,t,u,c);if(l==null)return l;if(o){var y=r.children;if(y!==void 0)if(n)if(ne(y)){for(var W=0;W<y.length;W++)De(y[W],e);Object.freeze&&Object.freeze(y)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else De(y,e)}return e===x?ir(l):or(l),l}}function ur(e,r,t){return Fe(e,r,t,!0)}function sr(e,r,t){return Fe(e,r,t,!1)}var cr=sr,fr=ur;N.Fragment=x,N.jsx=cr,N.jsxs=fr}()),N}process.env.NODE_ENV==="production"?Z.exports=Le():Z.exports=Ie();var fe=Z.exports;const We=({width:U,height:O,containerStyle:V,canvasStyle:x,buttonComponent:j,submitComponent:k,paintWeight:D,paintColor:R})=>{const i=p.useRef(null),[_,m]=p.useState(!1),[h,b]=p.useState(void 0),C=p.useCallback(s=>{const v=J(s);v&&(b(v),m(!0))},[]);p.useEffect(()=>{if(!i.current)return;const s=i.current;return s.addEventListener("mousedown",C),()=>{s.removeEventListener("mousedown",C)}},[C]);const L=p.useCallback(s=>{if(_){const v=J(s);h&&v&&(S(h,v),b(v))}},[_,h]);p.useEffect(()=>{if(!i.current)return;const s=i.current;s.width=U,s.height=O},[]),p.useEffect(()=>{if(!i.current)return;const s=i.current;return s.addEventListener("mousemove",L),()=>{s.removeEventListener("mousemove",L)}},[L]);const F=p.useCallback(()=>{m(!1),b(void 0)},[]);p.useEffect(()=>{if(!i.current)return;const s=i.current;return s.addEventListener("mouseup",F),s.addEventListener("mouseleave",F),()=>{s.removeEventListener("mouseup",F),s.removeEventListener("mouseleave",F)}},[F]);const J=s=>{if(!i.current)return;const v=i.current;return{x:s.pageX-v.offsetLeft,y:s.pageY-v.offsetTop}},S=(s,v)=>{if(!i.current)return;const g=i.current.getContext("2d");g&&(g.strokeStyle=R??"red",g.lineJoin="round",g.lineWidth=D??4,g.beginPath(),g.moveTo(s.x,s.y),g.lineTo(v.x,v.y),g.closePath(),g.stroke())},d=()=>{if(!i.current)return;const v=i.current.toDataURL("image/png").replace("image/png","image/octet-stream");q(v,"jpeg")},Q=()=>i.current?i.current.toDataURL("image/png"):void 0;function q(s,v,G="name"){let g=document.createElement("a");g.download=G+"."+v,g.href=s,g.click()}return fe.jsxs("div",{style:{display:"flex",flexDirection:"column",...V},children:[fe.jsx("canvas",{id:"canvas",ref:i,style:{border:"1px solid red"}}),j&&j(d),k&&k(Q)]})};w.Canvas=We,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});