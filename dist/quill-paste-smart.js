/*! For license information please see quill-paste-smart.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill")):"function"==typeof define&&define.amd?define(["quill"],t):"object"==typeof exports?exports.QuillPasteSmart=t(require("quill")):e.QuillPasteSmart=t(e.Quill)}(self,(e=>(()=>{"use strict";var t={912:t=>{t.exports=e}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};o.r(r),o.d(r,{default:()=>be});var i=o(912),a=o.n(i);const{entries:l,setPrototypeOf:s,isFrozen:c,getPrototypeOf:u,getOwnPropertyDescriptor:f}=Object;let{freeze:p,seal:d,create:m}=Object,{apply:h,construct:T}="undefined"!=typeof Reflect&&Reflect;p||(p=function(e){return e}),d||(d=function(e){return e}),h||(h=function(e,t,n){return e.apply(t,n)}),T||(T=function(e,t){return new e(...t)});const g=M(Array.prototype.forEach),A=M(Array.prototype.lastIndexOf),y=M(Array.prototype.pop),b=M(Array.prototype.push),S=M(Array.prototype.splice),E=M(String.prototype.toLowerCase),v=M(String.prototype.toString),L=M(String.prototype.match),_=M(String.prototype.replace),O=M(String.prototype.indexOf),D=M(String.prototype.trim),k=M(Object.prototype.hasOwnProperty),w=M(RegExp.prototype.test),N=(R=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return T(R,t)});var R;function M(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return h(e,t,o)}}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;s&&s(e,null);let o=t.length;for(;o--;){let r=t[o];if("string"==typeof r){const e=n(r);e!==r&&(c(t)||(t[o]=e),r=e)}e[r]=!0}return e}function x(e){for(let t=0;t<e.length;t++)k(e,t)||(e[t]=null);return e}function z(e){const t=m(null);for(const[n,o]of l(e))k(e,n)&&(Array.isArray(o)?t[n]=x(o):o&&"object"==typeof o&&o.constructor===Object?t[n]=z(o):t[n]=o);return t}function I(e,t){for(;null!==e;){const n=f(e,t);if(n){if(n.get)return M(n.get);if("function"==typeof n.value)return M(n.value)}e=u(e)}return function(){return null}}const P=p(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),W=p(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),H=p(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=p(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),G=p(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),j=p(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),F=p(["#text"]),q=p(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),B=p(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Y=p(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),X=p(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$=d(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=d(/<%[\w\W]*|[\w\W]*%>/gm),V=d(/\$\{[\w\W]*/gm),K=d(/^data-[\-\w.\u00B7-\uFFFF]+$/),Q=d(/^aria-[\-\w]+$/),J=d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=d(/^(?:\w+script|data):/i),te=d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=d(/^html$/i),oe=d(/^[a-z][.\w]*(-[.\w]+)+$/i);var re=Object.freeze({__proto__:null,ARIA_ATTR:Q,ATTR_WHITESPACE:te,CUSTOM_ELEMENT:oe,DATA_ATTR:K,DOCTYPE_NAME:ne,ERB_EXPR:Z,IS_ALLOWED_URI:J,IS_SCRIPT_OR_DATA:ee,MUSTACHE_EXPR:$,TMPLIT_EXPR:V});const ie=function(){return"undefined"==typeof window?null:window};var ae=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie();const n=t=>e(t);if(n.version="3.2.4",n.removed=[],!t||!t.document||9!==t.document.nodeType||!t.Element)return n.isSupported=!1,n;let{document:o}=t;const r=o,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:c,Element:u,NodeFilter:f,NamedNodeMap:d=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:T,trustedTypes:R}=t,M=u.prototype,x=I(M,"cloneNode"),$=I(M,"remove"),Z=I(M,"nextSibling"),V=I(M,"childNodes"),K=I(M,"parentNode");if("function"==typeof s){const e=o.createElement("template");e.content&&e.content.ownerDocument&&(o=e.content.ownerDocument)}let Q,ee="";const{implementation:te,createNodeIterator:oe,createDocumentFragment:ae,getElementsByTagName:le}=o,{importNode:se}=r;let ce={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof l&&"function"==typeof K&&te&&void 0!==te.createHTMLDocument;const{MUSTACHE_EXPR:ue,ERB_EXPR:fe,TMPLIT_EXPR:pe,DATA_ATTR:de,ARIA_ATTR:me,IS_SCRIPT_OR_DATA:he,ATTR_WHITESPACE:Te,CUSTOM_ELEMENT:ge}=re;let{IS_ALLOWED_URI:Ae}=re,ye=null;const be=C({},[...P,...W,...H,...G,...F]);let Se=null;const Ee=C({},[...q,...B,...Y,...X]);let ve=Object.seal(m(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Le=null,_e=null,Oe=!0,De=!0,ke=!1,we=!0,Ne=!1,Re=!0,Me=!1,Ce=!1,xe=!1,ze=!1,Ie=!1,Pe=!1,We=!0,He=!1,Ue=!0,Ge=!1,je={},Fe=null;const qe=C({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Be=null;const Ye=C({},["audio","video","img","source","image","track"]);let Xe=null;const $e=C({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml";let Qe=Ke,Je=!1,et=null;const tt=C({},[Ze,Ve,Ke],v);let nt=C({},["mi","mo","mn","ms","mtext"]),ot=C({},["annotation-xml"]);const rt=C({},["title","style","font","a","script"]);let it=null;const at=["application/xhtml+xml","text/html"];let lt=null,st=null;const ct=o.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},ft=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!st||st!==e){if(e&&"object"==typeof e||(e={}),e=z(e),it=-1===at.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,lt="application/xhtml+xml"===it?v:E,ye=k(e,"ALLOWED_TAGS")?C({},e.ALLOWED_TAGS,lt):be,Se=k(e,"ALLOWED_ATTR")?C({},e.ALLOWED_ATTR,lt):Ee,et=k(e,"ALLOWED_NAMESPACES")?C({},e.ALLOWED_NAMESPACES,v):tt,Xe=k(e,"ADD_URI_SAFE_ATTR")?C(z($e),e.ADD_URI_SAFE_ATTR,lt):$e,Be=k(e,"ADD_DATA_URI_TAGS")?C(z(Ye),e.ADD_DATA_URI_TAGS,lt):Ye,Fe=k(e,"FORBID_CONTENTS")?C({},e.FORBID_CONTENTS,lt):qe,Le=k(e,"FORBID_TAGS")?C({},e.FORBID_TAGS,lt):{},_e=k(e,"FORBID_ATTR")?C({},e.FORBID_ATTR,lt):{},je=!!k(e,"USE_PROFILES")&&e.USE_PROFILES,Oe=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ne=e.SAFE_FOR_TEMPLATES||!1,Re=!1!==e.SAFE_FOR_XML,Me=e.WHOLE_DOCUMENT||!1,ze=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Pe=e.RETURN_TRUSTED_TYPE||!1,xe=e.FORCE_BODY||!1,We=!1!==e.SANITIZE_DOM,He=e.SANITIZE_NAMED_PROPS||!1,Ue=!1!==e.KEEP_CONTENT,Ge=e.IN_PLACE||!1,Ae=e.ALLOWED_URI_REGEXP||J,Qe=e.NAMESPACE||Ke,nt=e.MATHML_TEXT_INTEGRATION_POINTS||nt,ot=e.HTML_INTEGRATION_POINTS||ot,ve=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ve.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ve.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ve.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ne&&(De=!1),Ie&&(ze=!0),je&&(ye=C({},F),Se=[],!0===je.html&&(C(ye,P),C(Se,q)),!0===je.svg&&(C(ye,W),C(Se,B),C(Se,X)),!0===je.svgFilters&&(C(ye,H),C(Se,B),C(Se,X)),!0===je.mathMl&&(C(ye,G),C(Se,Y),C(Se,X))),e.ADD_TAGS&&(ye===be&&(ye=z(ye)),C(ye,e.ADD_TAGS,lt)),e.ADD_ATTR&&(Se===Ee&&(Se=z(Se)),C(Se,e.ADD_ATTR,lt)),e.ADD_URI_SAFE_ATTR&&C(Xe,e.ADD_URI_SAFE_ATTR,lt),e.FORBID_CONTENTS&&(Fe===qe&&(Fe=z(Fe)),C(Fe,e.FORBID_CONTENTS,lt)),Ue&&(ye["#text"]=!0),Me&&C(ye,["html","head","body"]),ye.table&&(C(ye,["tbody"]),delete Le.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw N('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw N('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Q=e.TRUSTED_TYPES_POLICY,ee=Q.createHTML("")}else void 0===Q&&(Q=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(R,i)),null!==Q&&"string"==typeof ee&&(ee=Q.createHTML(""));p&&p(e),st=e}},pt=C({},[...W,...H,...U]),dt=C({},[...G,...j]),mt=function(e){b(n.removed,{element:e});try{K(e).removeChild(e)}catch(t){$(e)}},ht=function(e,t){try{b(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){b(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ze||Ie)try{mt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Tt=function(e){let t=null,n=null;if(xe)e="<remove></remove>"+e;else{const t=L(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===it&&Qe===Ke&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const r=Q?Q.createHTML(e):e;if(Qe===Ke)try{t=(new T).parseFromString(r,it)}catch(e){}if(!t||!t.documentElement){t=te.createDocument(Qe,"template",null);try{t.documentElement.innerHTML=Je?ee:r}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(o.createTextNode(n),i.childNodes[0]||null),Qe===Ke?le.call(t,Me?"html":"body")[0]:Me?t.documentElement:i},gt=function(e){return oe.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},At=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},yt=function(e){return"function"==typeof c&&e instanceof c};function bt(e,t,o){g(e,(e=>{e.call(n,t,o,st)}))}const St=function(e){let t=null;if(bt(ce.beforeSanitizeElements,e,null),At(e))return mt(e),!0;const o=lt(e.nodeName);if(bt(ce.uponSanitizeElement,e,{tagName:o,allowedTags:ye}),e.hasChildNodes()&&!yt(e.firstElementChild)&&w(/<[/\w]/g,e.innerHTML)&&w(/<[/\w]/g,e.textContent))return mt(e),!0;if(7===e.nodeType)return mt(e),!0;if(Re&&8===e.nodeType&&w(/<[/\w]/g,e.data))return mt(e),!0;if(!ye[o]||Le[o]){if(!Le[o]&&vt(o)){if(ve.tagNameCheck instanceof RegExp&&w(ve.tagNameCheck,o))return!1;if(ve.tagNameCheck instanceof Function&&ve.tagNameCheck(o))return!1}if(Ue&&!Fe[o]){const t=K(e)||e.parentNode,n=V(e)||e.childNodes;if(n&&t)for(let o=n.length-1;o>=0;--o){const r=x(n[o],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,Z(e))}}return mt(e),!0}return e instanceof u&&!function(e){let t=K(e);t&&t.tagName||(t={namespaceURI:Qe,tagName:"template"});const n=E(e.tagName),o=E(t.tagName);return!!et[e.namespaceURI]&&(e.namespaceURI===Ve?t.namespaceURI===Ke?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===o||nt[o]):Boolean(pt[n]):e.namespaceURI===Ze?t.namespaceURI===Ke?"math"===n:t.namespaceURI===Ve?"math"===n&&ot[o]:Boolean(dt[n]):e.namespaceURI===Ke?!(t.namespaceURI===Ve&&!ot[o])&&!(t.namespaceURI===Ze&&!nt[o])&&!dt[n]&&(rt[n]||!pt[n]):!("application/xhtml+xml"!==it||!et[e.namespaceURI]))}(e)?(mt(e),!0):"noscript"!==o&&"noembed"!==o&&"noframes"!==o||!w(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ne&&3===e.nodeType&&(t=e.textContent,g([ue,fe,pe],(e=>{t=_(t,e," ")})),e.textContent!==t&&(b(n.removed,{element:e.cloneNode()}),e.textContent=t)),bt(ce.afterSanitizeElements,e,null),!1):(mt(e),!0)},Et=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in o||n in ct))return!1;if(De&&!_e[t]&&w(de,t));else if(Oe&&w(me,t));else if(!Se[t]||_e[t]){if(!(vt(e)&&(ve.tagNameCheck instanceof RegExp&&w(ve.tagNameCheck,e)||ve.tagNameCheck instanceof Function&&ve.tagNameCheck(e))&&(ve.attributeNameCheck instanceof RegExp&&w(ve.attributeNameCheck,t)||ve.attributeNameCheck instanceof Function&&ve.attributeNameCheck(t))||"is"===t&&ve.allowCustomizedBuiltInElements&&(ve.tagNameCheck instanceof RegExp&&w(ve.tagNameCheck,n)||ve.tagNameCheck instanceof Function&&ve.tagNameCheck(n))))return!1}else if(Xe[t]);else if(w(Ae,_(n,Te,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==O(n,"data:")||!Be[e])if(ke&&!w(he,_(n,Te,"")));else if(n)return!1;return!0},vt=function(e){return"annotation-xml"!==e&&L(e,ge)},Lt=function(e){bt(ce.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||At(e))return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se,forceKeepAttr:void 0};let r=t.length;for(;r--;){const i=t[r],{name:a,namespaceURI:l,value:s}=i,c=lt(a);let u="value"===a?s:D(s);if(o.attrName=c,o.attrValue=u,o.keepAttr=!0,o.forceKeepAttr=void 0,bt(ce.uponSanitizeAttribute,e,o),u=o.attrValue,!He||"id"!==c&&"name"!==c||(ht(a,e),u="user-content-"+u),Re&&w(/((--!?|])>)|<\/(style|title)/i,u)){ht(a,e);continue}if(o.forceKeepAttr)continue;if(ht(a,e),!o.keepAttr)continue;if(!we&&w(/\/>/i,u)){ht(a,e);continue}Ne&&g([ue,fe,pe],(e=>{u=_(u,e," ")}));const f=lt(e.nodeName);if(Et(f,c,u)){if(Q&&"object"==typeof R&&"function"==typeof R.getAttributeType)if(l);else switch(R.getAttributeType(f,c)){case"TrustedHTML":u=Q.createHTML(u);break;case"TrustedScriptURL":u=Q.createScriptURL(u)}try{l?e.setAttributeNS(l,a,u):e.setAttribute(a,u),At(e)?mt(e):y(n.removed)}catch(e){}}}bt(ce.afterSanitizeAttributes,e,null)},_t=function e(t){let n=null;const o=gt(t);for(bt(ce.beforeSanitizeShadowDOM,t,null);n=o.nextNode();)bt(ce.uponSanitizeShadowNode,n,null),St(n),Lt(n),n.content instanceof a&&e(n.content);bt(ce.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,l=null,s=null;if(Je=!e,Je&&(e="\x3c!--\x3e"),"string"!=typeof e&&!yt(e)){if("function"!=typeof e.toString)throw N("toString is not a function");if("string"!=typeof(e=e.toString()))throw N("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Ce||ft(t),n.removed=[],"string"==typeof e&&(Ge=!1),Ge){if(e.nodeName){const t=lt(e.nodeName);if(!ye[t]||Le[t])throw N("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)o=Tt("\x3c!----\x3e"),i=o.ownerDocument.importNode(e,!0),1===i.nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!ze&&!Ne&&!Me&&-1===e.indexOf("<"))return Q&&Pe?Q.createHTML(e):e;if(o=Tt(e),!o)return ze?null:Pe?ee:""}o&&xe&&mt(o.firstChild);const u=gt(Ge?e:o);for(;l=u.nextNode();)St(l),Lt(l),l.content instanceof a&&_t(l.content);if(Ge)return e;if(ze){if(Ie)for(s=ae.call(o.ownerDocument);o.firstChild;)s.appendChild(o.firstChild);else s=o;return(Se.shadowroot||Se.shadowrootmode)&&(s=se.call(r,s,!0)),s}let f=Me?o.outerHTML:o.innerHTML;return Me&&ye["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&w(ne,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),Ne&&g([ue,fe,pe],(e=>{f=_(f,e," ")})),Q&&Pe?Q.createHTML(f):f},n.setConfig=function(){ft(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Ce=!0},n.clearConfig=function(){st=null,Ce=!1},n.isValidAttribute=function(e,t,n){st||ft({});const o=lt(e),r=lt(t);return Et(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&b(ce[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=A(ce[e],t);return-1===n?void 0:S(ce[e],n,1)[0]}return y(ce[e])},n.removeHooks=function(e){ce[e]=[]},n.removeAllHooks=function(){ce={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return(t=de(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,de(o.key),o)}}function de(e){var t=function(e){if("object"!=le(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=le(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==le(t)?t:t+""}function me(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(me=function(){return!!e})()}function he(e){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},he(e)}function Te(e,t){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Te(e,t)}var ge=a().import("modules/clipboard"),Ae=a().import("delta"),ye=function(e){function t(e,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=function(e,t,n){return t=he(t),function(e,t){if(t&&("object"==le(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,me()?Reflect.construct(t,n||[],he(e).constructor):t.apply(e,n))}(this,t,[e,n])).allowed=n.allowed,o.keepSelection=n.keepSelection,o.substituteBlockElements=n.substituteBlockElements,o.magicPasteLinks=n.magicPasteLinks,o.hooks=n.hooks,o.handleImagePaste=n.handleImagePaste,o.customButtons=n.customButtons,o.removeConsecutiveSubstitutionTags=n.removeConsecutiveSubstitutionTags,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Te(e,t)}(t,e),n=t,o=[{key:"onCapturePaste",value:function(e){var t,n,o,r=this;if(!e.defaultPrevented&&this.quill.isEnabled()){e.preventDefault();var i=this.quill.getSelection();if(null!=i){var l=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"),s=null===(n=e.clipboardData)||void 0===n?void 0:n.getData("text/html"),c=null===(o=e.clipboardData)||void 0===o||null===(o=o.items)||void 0===o?void 0:o[0],u=(new Ae).retain(i.index).delete(i.length),f=this.getDOMPurifyOptions(),p=!1,d=l;if(!s&&f.ALLOWED_TAGS.includes("a")&&this.isURL(l)&&i.length>0&&this.magicPasteLinks){d=this.quill.getText(i.index,i.length);var m=/^https?:\/\//i.test(l)?l:"https://".concat(l);u=u.insert(d,{link:m})}else if(!s&&f.ALLOWED_TAGS.includes("img")&&c&&"file"===c.kind&&c.type.match(/^image\//i)){var h=c.getAsFile();if(void 0!==this.handleImagePaste)this.handleImagePaste(h);else{var T=new FileReader;T.onload=function(e){r.quill.insertEmbed(i.index,"image",e.target.result),r.keepSelection||r.quill.setSelection(i.index+1)},T.readAsDataURL(h)}}else{var g,A,y,b,S,E,v,L,_;if(s||(p=!0,s=d),"function"==typeof(null===(g=this.hooks)||void 0===g?void 0:g.beforeSanitizeElements)&&ae.addHook("beforeSanitizeElements",this.hooks.beforeSanitizeElements),"function"==typeof(null===(A=this.hooks)||void 0===A?void 0:A.uponSanitizeElement)&&ae.addHook("uponSanitizeElement",this.hooks.uponSanitizeElement),"function"==typeof(null===(y=this.hooks)||void 0===y?void 0:y.afterSanitizeElements)&&ae.addHook("afterSanitizeElements",this.hooks.afterSanitizeElements),"function"==typeof(null===(b=this.hooks)||void 0===b?void 0:b.beforeSanitizeAttributes)&&ae.addHook("beforeSanitizeAttributes",this.hooks.beforeSanitizeAttributes),"function"==typeof(null===(S=this.hooks)||void 0===S?void 0:S.uponSanitizeAttribute)&&ae.addHook("uponSanitizeAttribute",this.hooks.uponSanitizeAttribute),"function"==typeof(null===(E=this.hooks)||void 0===E?void 0:E.afterSanitizeAttributes)&&ae.addHook("afterSanitizeAttributes",this.hooks.afterSanitizeAttributes),"function"==typeof(null===(v=this.hooks)||void 0===v?void 0:v.beforeSanitizeShadowDOM)&&ae.addHook("beforeSanitizeShadowDOM",this.hooks.beforeSanitizeShadowDOM),"function"==typeof(null===(L=this.hooks)||void 0===L?void 0:L.uponSanitizeShadowNode)&&ae.addHook("uponSanitizeShadowNode",this.hooks.uponSanitizeShadowNode),"function"==typeof(null===(_=this.hooks)||void 0===_?void 0:_.afterSanitizeShadowDOM)&&ae.addHook("afterSanitizeShadowDOM",this.hooks.afterSanitizeShadowDOM),p)d=ae.sanitize(s,f),u=u.insert(d);else{if(s=f.ALLOWED_TAGS.includes("table")?this.tableHeadersToCells(s):this.convertTableContent(s),!1!==this.substituteBlockElements){var O,D=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return fe(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.substitute(s,f),2);s=D[0],O=D[1],d=s.innerHTML,this.removeConsecutiveSubstitutionTags&&(d=this.collapseConsecutiveSubstitutionTags(d,O))}else d=ae.sanitize(s,f);u=u.concat(this.convert({html:d}))}}this.quill.updateContents(u,a().sources.USER),p||(u=this.convert({html:d})),this.keepSelection?this.quill.setSelection(i.index,u.length(),a().sources.SILENT):this.quill.setSelection(i.index+u.length(),a().sources.SILENT),this.quill.scrollSelectionIntoView(),ae.removeAllHooks()}}}},{key:"collapseConsecutiveSubstitutionTags",value:function(e,t){var n=(new DOMParser).parseFromString(e,"text/html"),o=n.querySelectorAll(t),r=!1;return o.forEach((function(e){r?null===e.firstChild||3===e.firstChild.nodeType&&""===e.firstChild.nodeValue.trim()?e.parentNode.removeChild(e):r=!1:r=!0})),n.body.innerHTML}},{key:"tableHeadersToCells",value:function(e){var t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("table").forEach((function(e){var t=e.querySelector("thead");if(t){var n=e.querySelector("tbody");if(n){var o=t.querySelector("tr");n.insertBefore(o,n.firstChild)}}e.querySelectorAll("th").forEach((function(e){var t=document.createElement("td");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)}))})),"<html>".concat(t.body.outerHTML,"<html>")}},{key:"convertTableContent",value:function(e){var t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("tr").forEach((function(e){e.outerHTML="<p>".concat(Array.from(e.querySelectorAll("td, th")).map((function(e){return e.innerHTML})).join(" "),"</p>")})),t.querySelectorAll("td, th").forEach((function(e){e.outerHTML="".concat(e.innerHTML," ")})),t.querySelectorAll("thead, tbody, tfoot").forEach((function(e){e.outerHTML=e.innerHTML})),t.querySelectorAll("table").forEach((function(e){e.outerHTML=e.innerHTML})),"<html>".concat(t.body.outerHTML,"<html>")}},{key:"getDOMPurifyOptions",value:function(){var e,t,n={};if(null!==(e=this.allowed)&&void 0!==e&&e.tags&&(n.ALLOWED_TAGS=this.allowed.tags),null!==(t=this.allowed)&&void 0!==t&&t.attributes&&(n.ALLOWED_ATTR=this.allowed.attributes),void 0===n.ALLOWED_TAGS||void 0===n.ALLOWED_ATTR){var o,r=!1;void 0===n.ALLOWED_TAGS&&(r=!0,n.ALLOWED_TAGS=["p","br","span"]);var i=!1;void 0===n.ALLOWED_ATTR&&(i=!0,n.ALLOWED_ATTR=["class"]);var a,l=this.quill.getModule("toolbar");null==l||null===(o=l.controls)||void 0===o||o.forEach((function(e){switch(e[0]){case"bold":r&&(n.ALLOWED_TAGS.push("b"),n.ALLOWED_TAGS.push("strong"));break;case"italic":r&&(n.ALLOWED_TAGS.push("i"),n.ALLOWED_TAGS.push("em"));break;case"underline":r&&n.ALLOWED_TAGS.push("u");break;case"strike":r&&n.ALLOWED_TAGS.push("s");break;case"color":case"background":i&&n.ALLOWED_ATTR.push("style");break;case"script":r&&("super"===e[1].value?n.ALLOWED_TAGS.push("sup"):"sub"===e[1].value&&n.ALLOWED_TAGS.push("sub"));break;case"header":if(r){var t=function(e){"1"===e?n.ALLOWED_TAGS.push("h1"):"2"===e?n.ALLOWED_TAGS.push("h2"):"3"===e?n.ALLOWED_TAGS.push("h3"):"4"===e?n.ALLOWED_TAGS.push("h4"):"5"===e?n.ALLOWED_TAGS.push("h5"):"6"===e&&n.ALLOWED_TAGS.push("h6")};e[1].value?t(e[1].value):e[1].options&&e[1].options.length&&[].forEach.call(e[1].options,(function(e){e.value&&t(e.value)}))}break;case"code-block":r&&n.ALLOWED_TAGS.push("pre"),i&&n.ALLOWED_ATTR.push("spellcheck");break;case"list":r&&("ordered"===e[1].value?n.ALLOWED_TAGS.push("ol"):"bullet"===e[1].value&&n.ALLOWED_TAGS.push("ul"),n.ALLOWED_TAGS.push("li"));break;case"link":r&&n.ALLOWED_TAGS.push("a"),i&&(n.ALLOWED_ATTR.push("href"),n.ALLOWED_ATTR.push("target"),n.ALLOWED_ATTR.push("rel"));break;case"image":r&&n.ALLOWED_TAGS.push("img"),i&&(n.ALLOWED_ATTR.push("src"),n.ALLOWED_ATTR.push("title"),n.ALLOWED_ATTR.push("alt"),n.ALLOWED_ATTR.push("height"),n.ALLOWED_ATTR.push("width"));break;case"video":r&&n.ALLOWED_TAGS.push("iframe"),i&&(n.ALLOWED_ATTR.push("frameborder"),n.ALLOWED_ATTR.push("allowfullscreen"),n.ALLOWED_ATTR.push("src"),n.ALLOWED_ATTR.push("height"),n.ALLOWED_ATTR.push("width"));break;case"blockquote":r&&n.ALLOWED_TAGS.push(e[0]);break;case"table":r&&(n.ALLOWED_TAGS.push("table"),n.ALLOWED_TAGS.push("tr"),n.ALLOWED_TAGS.push("td"))}})),null!=l&&l.controls&&(null===(a=this.customButtons)||void 0===a||a.forEach((function(e){var t,o;l.controls.some((function(t){return t[0]===e.module}))&&(null===(t=e.allowedTags)||void 0===t||t.forEach((function(e){n.ALLOWED_TAGS.push(e)})),null===(o=e.allowedAttr)||void 0===o||o.forEach((function(e){n.ALLOWED_ATTR.push(e)})))})))}return n}},{key:"substitute",value:function(e,t){var n,o=["h1","h2","h3","h4","h5","h6"],r=["p","div","section","article","fieldset","address","aside","blockquote","canvas","dl","figcaption","figure","footer","form","header","main","nav","noscript","ol","pre","ul","video"],i=["li","dt","dd","hr"];return ae.addHook("uponSanitizeElement",(function(e,a,l){for(var s=0;!n&&s<3;)t.ALLOWED_TAGS.includes(r[s])&&(n=r[s]),++s;if(n&&e.tagName&&!t.ALLOWED_TAGS.includes(e.tagName.toLowerCase())){var c=e.tagName.toLowerCase();o.includes(c)?e.innerHTML="<".concat(n,"><b>").concat(e.innerHTML,"</b></").concat(n,">"):r.includes(c)?e.innerHTML="<".concat(n,">").concat(e.innerHTML,"</").concat(n,">"):i.includes(c)&&(e.innerHTML="".concat(e.innerHTML,"<br>"))}})),e=ae.sanitize(e,ce(ce({},t),{RETURN_DOM:!0,WHOLE_DOCUMENT:!1})),ae.removeAllHooks(),[e,n]}},{key:"isURL",value:function(e){return!!/^((?:(http|https):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi.test(e)}}],o&&pe(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(ge);a().register("modules/clipboard",ye,!0);const be=ye;return r})()));