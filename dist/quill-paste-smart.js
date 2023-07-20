!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill")):"function"==typeof define&&define.amd?define(["quill"],t):"object"==typeof exports?exports.QuillPasteSmart=t(require("quill")):e.QuillPasteSmart=t(e.Quill)}(window,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){
/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */
e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:i}=Object;let{freeze:r,seal:a,create:l}=Object,{apply:u,construct:s}="undefined"!=typeof Reflect&&Reflect;u||(u=function(e,t,n){return e.apply(t,n)}),r||(r=function(e){return e}),a||(a=function(e){return e}),s||(s=function(e,t){return new e(...t)});const c=D(Array.prototype.forEach),f=D(Array.prototype.pop),p=D(Array.prototype.push),d=D(String.prototype.toLowerCase),m=D(String.prototype.toString),h=D(String.prototype.match),g=D(String.prototype.replace),T=D(String.prototype.indexOf),A=D(String.prototype.trim),b=D(RegExp.prototype.test),E=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(y,t)});var y;function D(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return u(e,t,o)}}function L(e,o,i){var r;i=null!==(r=i)&&void 0!==r?r:d,t&&t(e,null);let a=o.length;for(;a--;){let t=o[a];if("string"==typeof t){const e=i(t);e!==t&&(n(o)||(o[a]=e),t=e)}e[t]=!0}return e}function S(t){const n=l(null);for(const[o,i]of e(t))n[o]=i;return n}function F(e,t){for(;null!==e;){const n=i(e,t);if(n){if(n.get)return D(n.get);if("function"==typeof n.value)return D(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}const _=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),v=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k=r(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),w=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),N=r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),x=r(["#text"]),R=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),C=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),I=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),z=a(/<%[\w\W]*|[\w\W]*%>/gm),W=a(/\${[\w\W]*}/gm),H=a(/^data-[\-\w.\u00B7-\uFFFF]/),U=a(/^aria-[\-\w]+$/),G=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),j=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),q=a(/^html$/i);var Y=Object.freeze({__proto__:null,MUSTACHE_EXPR:P,ERB_EXPR:z,TMPLIT_EXPR:W,DATA_ATTR:H,ARIA_ATTR:U,IS_ALLOWED_URI:G,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:j,DOCTYPE_NAME:q});const K=()=>"undefined"==typeof window?null:window,X=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;t&&t.hasAttribute("data-tt-policy-suffix")&&(n=t.getAttribute("data-tt-policy-suffix"));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();const o=e=>t(e);if(o.version="3.0.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;const i=n.document,a=i.currentScript;let{document:l}=n;const{DocumentFragment:u,HTMLTemplateElement:s,Node:y,Element:D,NodeFilter:P,NamedNodeMap:z=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:W,DOMParser:H,trustedTypes:U}=n,B=D.prototype,j=F(B,"cloneNode"),V=F(B,"nextSibling"),$=F(B,"childNodes"),Q=F(B,"parentNode");if("function"==typeof s){const e=l.createElement("template");e.content&&e.content.ownerDocument&&(l=e.content.ownerDocument)}let Z,J="";const{implementation:ee,createNodeIterator:te,createDocumentFragment:ne,getElementsByTagName:oe}=l,{importNode:ie}=i;let re={};o.isSupported="function"==typeof e&&"function"==typeof Q&&ee&&void 0!==ee.createHTMLDocument;const{MUSTACHE_EXPR:ae,ERB_EXPR:le,TMPLIT_EXPR:ue,DATA_ATTR:se,ARIA_ATTR:ce,IS_SCRIPT_OR_DATA:fe,ATTR_WHITESPACE:pe}=Y;let{IS_ALLOWED_URI:de}=Y,me=null;const he=L({},[..._,...v,...O,...w,...x]);let ge=null;const Te=L({},[...R,...C,...M,...I]);let Ae=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),be=null,Ee=null,ye=!0,De=!0,Le=!1,Se=!0,Fe=!1,_e=!1,ve=!1,Oe=!1,ke=!1,we=!1,Ne=!1,xe=!0,Re=!1;const Ce="user-content-";let Me=!0,Ie=!1,Pe={},ze=null;const We=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let He=null;const Ue=L({},["audio","video","img","source","image","track"]);let Ge=null;const Be=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),je="http://www.w3.org/1998/Math/MathML",qe="http://www.w3.org/2000/svg",Ye="http://www.w3.org/1999/xhtml";let Ke=Ye,Xe=!1,Ve=null;const $e=L({},[je,qe,Ye],m);let Qe;const Ze=["application/xhtml+xml","text/html"],Je="text/html";let et,tt=null;const nt=l.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},it=function(e){if(!tt||tt!==e){if(e&&"object"==typeof e||(e={}),e=S(e),Qe=Qe=-1===Ze.indexOf(e.PARSER_MEDIA_TYPE)?Je:e.PARSER_MEDIA_TYPE,et="application/xhtml+xml"===Qe?m:d,me="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS,et):he,ge="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR,et):Te,Ve="ALLOWED_NAMESPACES"in e?L({},e.ALLOWED_NAMESPACES,m):$e,Ge="ADD_URI_SAFE_ATTR"in e?L(S(Be),e.ADD_URI_SAFE_ATTR,et):Be,He="ADD_DATA_URI_TAGS"in e?L(S(Ue),e.ADD_DATA_URI_TAGS,et):Ue,ze="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS,et):We,be="FORBID_TAGS"in e?L({},e.FORBID_TAGS,et):{},Ee="FORBID_ATTR"in e?L({},e.FORBID_ATTR,et):{},Pe="USE_PROFILES"in e&&e.USE_PROFILES,ye=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Le=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Se=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Fe=e.SAFE_FOR_TEMPLATES||!1,_e=e.WHOLE_DOCUMENT||!1,ke=e.RETURN_DOM||!1,we=e.RETURN_DOM_FRAGMENT||!1,Ne=e.RETURN_TRUSTED_TYPE||!1,Oe=e.FORCE_BODY||!1,xe=!1!==e.SANITIZE_DOM,Re=e.SANITIZE_NAMED_PROPS||!1,Me=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,de=e.ALLOWED_URI_REGEXP||G,Ke=e.NAMESPACE||Ye,Ae=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ae.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ae.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ae.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(De=!1),we&&(ke=!0),Pe&&(me=L({},[...x]),ge=[],!0===Pe.html&&(L(me,_),L(ge,R)),!0===Pe.svg&&(L(me,v),L(ge,C),L(ge,I)),!0===Pe.svgFilters&&(L(me,O),L(ge,C),L(ge,I)),!0===Pe.mathMl&&(L(me,w),L(ge,M),L(ge,I))),e.ADD_TAGS&&(me===he&&(me=S(me)),L(me,e.ADD_TAGS,et)),e.ADD_ATTR&&(ge===Te&&(ge=S(ge)),L(ge,e.ADD_ATTR,et)),e.ADD_URI_SAFE_ATTR&&L(Ge,e.ADD_URI_SAFE_ATTR,et),e.FORBID_CONTENTS&&(ze===We&&(ze=S(ze)),L(ze,e.FORBID_CONTENTS,et)),Me&&(me["#text"]=!0),_e&&L(me,["html","head","body"]),me.table&&(L(me,["tbody"]),delete be.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Z=e.TRUSTED_TYPES_POLICY,J=Z.createHTML("")}else void 0===Z&&(Z=X(U,a)),null!==Z&&"string"==typeof J&&(J=Z.createHTML(""));r&&r(e),tt=e}},rt=L({},["mi","mo","mn","ms","mtext"]),at=L({},["foreignobject","desc","title","annotation-xml"]),lt=L({},["title","style","font","a","script"]),ut=L({},v);L(ut,O),L(ut,k);const st=L({},w);L(st,N);const ct=function(e){let t=Q(e);t&&t.tagName||(t={namespaceURI:Ke,tagName:"template"});const n=d(e.tagName),o=d(t.tagName);return!!Ve[e.namespaceURI]&&(e.namespaceURI===qe?t.namespaceURI===Ye?"svg"===n:t.namespaceURI===je?"svg"===n&&("annotation-xml"===o||rt[o]):Boolean(ut[n]):e.namespaceURI===je?t.namespaceURI===Ye?"math"===n:t.namespaceURI===qe?"math"===n&&at[o]:Boolean(st[n]):e.namespaceURI===Ye?!(t.namespaceURI===qe&&!at[o])&&!(t.namespaceURI===je&&!rt[o])&&!st[n]&&(lt[n]||!ut[n]):!("application/xhtml+xml"!==Qe||!Ve[e.namespaceURI]))},ft=function(e){p(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},pt=function(e,t){try{p(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ge[e])if(ke||we)try{ft(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},dt=function(e){let t,n;if(Oe)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Qe&&Ke===Ye&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=Z?Z.createHTML(e):e;if(Ke===Ye)try{t=(new H).parseFromString(o,Qe)}catch(e){}if(!t||!t.documentElement){t=ee.createDocument(Ke,"template",null);try{t.documentElement.innerHTML=Xe?J:o}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(l.createTextNode(n),i.childNodes[0]||null),Ke===Ye?oe.call(t,_e?"html":"body")[0]:_e?t.documentElement:i},mt=function(e){return te.call(e.ownerDocument||e,e,P.SHOW_ELEMENT|P.SHOW_COMMENT|P.SHOW_TEXT,null,!1)},ht=function(e){return e instanceof W&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof z)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},gt=function(e){return"object"==typeof y?e instanceof y:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Tt=function(e,t,n){re[e]&&c(re[e],e=>{e.call(o,t,n,tt)})},At=function(e){let t;if(Tt("beforeSanitizeElements",e,null),ht(e))return ft(e),!0;const n=et(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:n,allowedTags:me}),e.hasChildNodes()&&!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return ft(e),!0;if(!me[n]||be[n]){if(!be[n]&&Et(n)){if(Ae.tagNameCheck instanceof RegExp&&b(Ae.tagNameCheck,n))return!1;if(Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))return!1}if(Me&&!ze[n]){const t=Q(e)||e.parentNode,n=$(e)||e.childNodes;if(n&&t)for(let o=n.length-1;o>=0;--o)t.insertBefore(j(n[o],!0),V(e))}return ft(e),!0}return e instanceof D&&!ct(e)?(ft(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!b(/<\/no(script|embed|frames)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=g(t,ae," "),t=g(t,le," "),t=g(t,ue," "),e.textContent!==t&&(p(o.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(ft(e),!0)},bt=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in l||n in nt))return!1;if(De&&!Ee[t]&&b(se,t));else if(ye&&b(ce,t));else if(!ge[t]||Ee[t]){if(!(Et(e)&&(Ae.tagNameCheck instanceof RegExp&&b(Ae.tagNameCheck,e)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(e))&&(Ae.attributeNameCheck instanceof RegExp&&b(Ae.attributeNameCheck,t)||Ae.attributeNameCheck instanceof Function&&Ae.attributeNameCheck(t))||"is"===t&&Ae.allowCustomizedBuiltInElements&&(Ae.tagNameCheck instanceof RegExp&&b(Ae.tagNameCheck,n)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))))return!1}else if(Ge[t]);else if(b(de,g(n,pe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!He[e])if(Le&&!b(fe,g(n,pe,"")));else if(n)return!1;return!0},Et=function(e){return e.indexOf("-")>0},yt=function(e){let t,n,i,r;Tt("beforeSanitizeAttributes",e,null);const{attributes:a}=e;if(!a)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ge};for(r=a.length;r--;){t=a[r];const{name:u,namespaceURI:s}=t;if(n="value"===u?t.value:A(t.value),i=et(u),l.attrName=i,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",e,l),n=l.attrValue,l.forceKeepAttr)continue;if(pt(u,e),!l.keepAttr)continue;if(!Se&&b(/\/>/i,n)){pt(u,e);continue}Fe&&(n=g(n,ae," "),n=g(n,le," "),n=g(n,ue," "));const c=et(e.nodeName);if(bt(c,i,n)){if(!Re||"id"!==i&&"name"!==i||(pt(u,e),n=Ce+n),Z&&"object"==typeof U&&"function"==typeof U.getAttributeType)if(s);else switch(U.getAttributeType(c,i)){case"TrustedHTML":n=Z.createHTML(n);break;case"TrustedScriptURL":n=Z.createScriptURL(n)}try{s?e.setAttributeNS(s,u,n):e.setAttribute(u,n),f(o.removed)}catch(e){}}}Tt("afterSanitizeAttributes",e,null)},Dt=function e(t){let n;const o=mt(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Tt("uponSanitizeShadowNode",n,null),At(n)||(n.content instanceof u&&e(n.content),yt(n));Tt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t,n,r,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Xe=!e,Xe&&(e="\x3c!--\x3e"),"string"!=typeof e&&!gt(e)){if("function"!=typeof e.toString)throw E("toString is not a function");if("string"!=typeof(e=e.toString()))throw E("dirty is not a string, aborting")}if(!o.isSupported)return e;if(ve||it(l),o.removed=[],"string"==typeof e&&(Ie=!1),Ie){if(e.nodeName){const t=et(e.nodeName);if(!me[t]||be[t])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof y)t=dt("\x3c!----\x3e"),n=t.ownerDocument.importNode(e,!0),1===n.nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!ke&&!Fe&&!_e&&-1===e.indexOf("<"))return Z&&Ne?Z.createHTML(e):e;if(t=dt(e),!t)return ke?null:Ne?J:""}t&&Oe&&ft(t.firstChild);const s=mt(Ie?e:t);for(;r=s.nextNode();)At(r)||(r.content instanceof u&&Dt(r.content),yt(r));if(Ie)return e;if(ke){if(we)for(a=ne.call(t.ownerDocument);t.firstChild;)a.appendChild(t.firstChild);else a=t;return(ge.shadowroot||ge.shadowrootmode)&&(a=ie.call(i,a,!0)),a}let c=_e?t.outerHTML:t.innerHTML;return _e&&me["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&b(q,t.ownerDocument.doctype.name)&&(c="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+c),Fe&&(c=g(c,ae," "),c=g(c,le," "),c=g(c,ue," ")),Z&&Ne?Z.createHTML(c):c},o.setConfig=function(e){it(e),ve=!0},o.clearConfig=function(){tt=null,ve=!1},o.isValidAttribute=function(e,t,n){tt||it({});const o=et(e),i=et(t);return bt(o,i,n)},o.addHook=function(e,t){"function"==typeof t&&(re[e]=re[e]||[],p(re[e],t))},o.removeHook=function(e){if(re[e])return f(re[e])},o.removeHooks=function(e){re[e]&&(re[e]=[])},o.removeAllHooks=function(){re={}},o}()}()},function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(0),a=n.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=i.a.import("modules/clipboard"),T=i.a.import("delta"),A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,o,r=d(l);function l(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=r.call(this,e,t)).allowed=t.allowed,n.keepSelection=t.keepSelection,n.substituteBlockElements=t.substituteBlockElements,n.magicPasteLinks=t.magicPasteLinks,n.hooks=t.hooks,n}return t=l,(n=[{key:"onPaste",value:function(e){var t=this;e.preventDefault();var n,o,r,l,u,s=this.quill.getSelection();e.clipboardData&&e.clipboardData.getData||!window.clipboardData||!window.clipboardData.getData?(n=e.clipboardData.getData("text/plain"),o=e.clipboardData.getData("text/html"),r=null===(l=e.clipboardData)||void 0===l||null===(u=l.items)||void 0===u?void 0:u[0]):n=window.clipboardData.getData("Text");var c=(new T).retain(s.index).delete(s.length),f=this.getDOMPurifyOptions(),p=!1,d=n;if(!o&&f.ALLOWED_TAGS.includes("a")&&this.isURL(n)&&s.length>0&&this.magicPasteLinks)d=this.quill.getText(s.index,s.length),c=c.insert(d,{link:n});else if(!o&&f.ALLOWED_TAGS.includes("img")&&r&&"file"===r.kind&&r.type.match(/^image\//i)){var m=r.getAsFile(),h=new FileReader;h.onload=function(e){t.quill.insertEmbed(s.index,"image",e.target.result),t.keepSelection||t.quill.setSelection(s.index+1)},h.readAsDataURL(m)}else{var g,A,b,E,y,D,L,S,F;o||(p=!0,o=d),"function"==typeof(null===(g=this.hooks)||void 0===g?void 0:g.beforeSanitizeElements)&&a.a.addHook("beforeSanitizeElements",this.hooks.beforeSanitizeElements),"function"==typeof(null===(A=this.hooks)||void 0===A?void 0:A.uponSanitizeElement)&&a.a.addHook("uponSanitizeElement",this.hooks.uponSanitizeElement),"function"==typeof(null===(b=this.hooks)||void 0===b?void 0:b.afterSanitizeElements)&&a.a.addHook("afterSanitizeElements",this.hooks.afterSanitizeElements),"function"==typeof(null===(E=this.hooks)||void 0===E?void 0:E.beforeSanitizeAttributes)&&a.a.addHook("beforeSanitizeAttributes",this.hooks.beforeSanitizeAttributes),"function"==typeof(null===(y=this.hooks)||void 0===y?void 0:y.uponSanitizeAttribute)&&a.a.addHook("uponSanitizeAttribute",this.hooks.uponSanitizeAttribute),"function"==typeof(null===(D=this.hooks)||void 0===D?void 0:D.afterSanitizeAttributes)&&a.a.addHook("afterSanitizeAttributes",this.hooks.afterSanitizeAttributes),"function"==typeof(null===(L=this.hooks)||void 0===L?void 0:L.beforeSanitizeShadowDOM)&&a.a.addHook("beforeSanitizeShadowDOM",this.hooks.beforeSanitizeShadowDOM),"function"==typeof(null===(S=this.hooks)||void 0===S?void 0:S.uponSanitizeShadowNode)&&a.a.addHook("uponSanitizeShadowNode",this.hooks.uponSanitizeShadowNode),"function"==typeof(null===(F=this.hooks)||void 0===F?void 0:F.afterSanitizeShadowDOM)&&a.a.addHook("afterSanitizeShadowDOM",this.hooks.afterSanitizeShadowDOM),p?(d=a.a.sanitize(o,f),c=c.insert(d)):(d=!1!==this.substituteBlockElements?(o=this.substitute(o,f)).innerHTML:a.a.sanitize(o,f),c=c.concat(this.convert(d)))}this.quill.updateContents(c,i.a.sources.USER),p||(c=this.convert(d)),this.keepSelection?this.quill.setSelection(s.index,c.length(),i.a.sources.SILENT):this.quill.setSelection(s.index+c.length(),i.a.sources.SILENT),this.quill.scrollIntoView(),a.a.removeAllHooks()}},{key:"getDOMPurifyOptions",value:function(){var e,t,n={};if(null!==(e=this.allowed)&&void 0!==e&&e.tags&&(n.ALLOWED_TAGS=this.allowed.tags),null!==(t=this.allowed)&&void 0!==t&&t.attributes&&(n.ALLOWED_ATTR=this.allowed.attributes),void 0===n.ALLOWED_TAGS||void 0===n.ALLOWED_ATTR){var o,i=!1;void 0===n.ALLOWED_TAGS&&(i=!0,n.ALLOWED_TAGS=["p","br","span"]);var r=!1;void 0===n.ALLOWED_ATTR&&(r=!0,n.ALLOWED_ATTR=["class"]);var a=this.quill.getModule("toolbar");null==a||null===(o=a.controls)||void 0===o||o.forEach((function(e){switch(e[0]){case"bold":i&&(n.ALLOWED_TAGS.push("b"),n.ALLOWED_TAGS.push("strong"));break;case"italic":i&&(n.ALLOWED_TAGS.push("i"),n.ALLOWED_TAGS.push("em"));break;case"underline":i&&n.ALLOWED_TAGS.push("u");break;case"strike":i&&n.ALLOWED_TAGS.push("s");break;case"color":case"background":r&&n.ALLOWED_ATTR.push("style");break;case"script":i&&("super"===e[1].value?n.ALLOWED_TAGS.push("sup"):"sub"===e[1].value&&n.ALLOWED_TAGS.push("sub"));break;case"header":if(i){var t=function(e){"1"===e?n.ALLOWED_TAGS.push("h1"):"2"===e?n.ALLOWED_TAGS.push("h2"):"3"===e?n.ALLOWED_TAGS.push("h3"):"4"===e?n.ALLOWED_TAGS.push("h4"):"5"===e?n.ALLOWED_TAGS.push("h5"):"6"===e&&n.ALLOWED_TAGS.push("h6")};e[1].value?t(e[1].value):e[1].options&&e[1].options.length&&[].forEach.call(e[1].options,(function(e){e.value&&t(e.value)}))}break;case"code-block":i&&n.ALLOWED_TAGS.push("pre"),r&&n.ALLOWED_ATTR.push("spellcheck");break;case"list":i&&("ordered"===e[1].value?n.ALLOWED_TAGS.push("ol"):"bullet"===e[1].value&&n.ALLOWED_TAGS.push("ul"),n.ALLOWED_TAGS.push("li"));break;case"link":i&&n.ALLOWED_TAGS.push("a"),r&&(n.ALLOWED_ATTR.push("href"),n.ALLOWED_ATTR.push("target"),n.ALLOWED_ATTR.push("rel"));break;case"image":i&&n.ALLOWED_TAGS.push("img"),r&&(n.ALLOWED_ATTR.push("src"),n.ALLOWED_ATTR.push("title"),n.ALLOWED_ATTR.push("alt"));break;case"video":i&&n.ALLOWED_TAGS.push("iframe"),r&&(n.ALLOWED_ATTR.push("frameborder"),n.ALLOWED_ATTR.push("allowfullscreen"),n.ALLOWED_ATTR.push("src"));break;case"blockquote":i&&n.ALLOWED_TAGS.push(e[0])}}))}return n}},{key:"substitute",value:function(e,t){var n,o=["h1","h2","h3","h4","h5","h6"],i=["p","div","section","article","fieldset","address","aside","blockquote","canvas","dl","figcaption","figure","footer","form","header","main","nav","noscript","ol","pre","table","tfoot","ul","video"],r=["li","dt","dd","hr"];a.a.addHook("uponSanitizeElement",(function(e,a,l){for(var u=0;!n&&u<3;)t.ALLOWED_TAGS.includes(i[u])&&(n=i[u]),++u;if(n&&e.tagName&&!t.ALLOWED_TAGS.includes(e.tagName.toLowerCase())){var s=e.tagName.toLowerCase();o.includes(s)?e.innerHTML="<".concat(n,"><b>").concat(e.innerHTML,"</b></").concat(n,">"):i.includes(s)?e.innerHTML="<".concat(n,">").concat(e.innerHTML,"</").concat(n,">"):r.includes(s)&&(e.innerHTML="".concat(e.innerHTML,"<br>"))}})),e=a.a.sanitize(e,s(s({},t),{RETURN_DOM:!0,WHOLE_DOCUMENT:!1})),a.a.removeAllHooks();var l,u=function(e){var t=document.createElement(e.tagName.toLowerCase()),n=e.attributes;return n.length&&Array.from(n).forEach((function(e){return t.setAttribute(e.nodeName,e.value)})),t},c=0,f=document.createElement("body");return function e(t,n){for(n(t,c),t=c<=1?t.firstChild:void 0;t;)++c,e(t,n),t=t.nextSibling;--c}(e,(function(e,t){if(1===t)if(e.tagName&&i.includes(e.tagName.toLowerCase())){l&&(l=void 0);var o=u(e);o.innerHTML=e.innerHTML,f.appendChild(o)}else if(void 0===l&&(l=document.createElement(n),f.appendChild(l)),e.tagName){var r=u(e);e.innerHTML&&(r.innerHTML=e.innerHTML),l.appendChild(r)}else{var a=document.createTextNode(e.textContent);l.appendChild(a)}})),f}},{key:"isURL",value:function(e){return!!/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\x2D?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:(?![\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)?$/i.test(e)}}])&&f(t.prototype,n),o&&f(t,o),l}(g);i.a.register("modules/clipboard",A,!0),t.default=A}])}));