(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/films"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Films.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Films.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./resources/js/helper.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./resources/js/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [],
      page: 0,
      totalPages: 0,
      query: ''
    };
  },
  watch: {
    query: function query() {
      this.search();
    }
  },
  methods: {
    toPage: function toPage(page) {
      this.search(page);
    },
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function (page) {
      var _this = this;

      // No query string
      if (this.query.length === 0) return;
      var uri = _helper__WEBPACK_IMPORTED_MODULE_1__["default"].combineUri("/api/films/search-multiple", {
        query: this.query,
        page: page ? page : 1
      });
      _api__WEBPACK_IMPORTED_MODULE_2__["default"].get(uri).then(function (res) {
        _this.page = res.data.page;
        _this.totalPages = res.data.total_pages;
        _this.items = res.data.results;
      })["catch"](function (err) {
        console.log(err);
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/numbro/dist/numbro.min.js":
/*!************************************************!*\
  !*** ./node_modules/numbro/dist/numbro.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){if(true)module.exports=e();else {}}(function(){return function a(o,u,c){function s(t,e){if(!u[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return require(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=u[t]={exports:{}};o[t][0].call(i.exports,function(e){return s(o[t][1][e]||e)},i,i.exports,a,o,u,c)}return u[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,r,t){!function(e){"use strict";var t,k=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,_=Math.ceil,L=Math.floor,T="[BigNumber Error] ",P=T+"Number primitive has more than 15 significant digits: ",U=1e14,j=14,C=9007199254740991,R=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],I=1e7,$=1e9;function G(e){var t=0|e;return 0<e||e===t?t:t-1}function V(e){for(var t,r,n=1,i=e.length,a=e[0]+"";n<i;){for(t=e[n++]+"",r=j-t.length;r--;t="0"+t);a+=t}for(i=a.length;48===a.charCodeAt(--i););return a.slice(0,i+1||1)}function q(e,t){var r,n,i=e.c,a=t.c,o=e.s,u=t.s,c=e.e,s=t.e;if(!o||!u)return null;if(r=i&&!i[0],n=a&&!a[0],r||n)return r?n?0:-u:o;if(o!=u)return o;if(r=o<0,n=c==s,!i||!a)return n?0:!i^r?1:-1;if(!n)return s<c^r?1:-1;for(u=(c=i.length)<(s=a.length)?c:s,o=0;o<u;o++)if(i[o]!=a[o])return i[o]>a[o]^r?1:-1;return c==s?0:s<c^r?1:-1}function Z(e,t,r,n){if(e<t||r<e||e!==(e<0?_(e):L(e)))throw Error(T+(n||"Argument")+("number"==typeof e?e<t||r<e?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function z(e){var t=e.c.length-1;return G(e.e/j)==t&&e.c[t]%2!=0}function W(e,t){return(1<e.length?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function H(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(++t>(n=e.length)){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(t=function e(t){var y,f,p,r,s,o,u,c,l,g,n=A.prototype={constructor:A,toString:null,valueOf:null},d=new A(1),b=20,w=4,h=-7,v=21,m=-1e7,O=1e7,x=!1,a=1,S=0,N={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},M="0123456789abcdefghijklmnopqrstuvwxyz";function A(e,t){var r,n,i,a,o,u,c,s,l=this;if(!(l instanceof A))return new A(e,t);if(null==t){if(e instanceof A)return l.s=e.s,l.e=e.e,void(l.c=(e=e.c)?e.slice():e);if((u="number"==typeof e)&&0*e==0){if(l.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,o=e;10<=o;o/=10,a++);return l.e=a,void(l.c=[e])}s=String(e)}else{if(s=String(e),!k.test(s))return p(l,s,u);l.s=45==s.charCodeAt(0)?(s=s.slice(1),-1):1}-1<(a=s.indexOf("."))&&(s=s.replace(".","")),0<(o=s.search(/e/i))?(a<0&&(a=o),a+=+s.slice(o+1),s=s.substring(0,o)):a<0&&(a=s.length)}else{if(Z(t,2,M.length,"Base"),s=String(e),10==t)return E(l=new A(e instanceof A?e:s),b+l.e+1,w);if(u="number"==typeof e){if(0*e!=0)return p(l,s,u,t);if(l.s=1/e<0?(s=s.slice(1),-1):1,A.DEBUG&&15<s.replace(/^0\.0*|\./,"").length)throw Error(P+e);u=!1}else l.s=45===s.charCodeAt(0)?(s=s.slice(1),-1):1;for(r=M.slice(0,t),a=o=0,c=s.length;o<c;o++)if(r.indexOf(n=s.charAt(o))<0){if("."==n){if(a<o){a=c;continue}}else if(!i&&(s==s.toUpperCase()&&(s=s.toLowerCase())||s==s.toLowerCase()&&(s=s.toUpperCase()))){i=!0,o=-1,a=0;continue}return p(l,String(e),u,t)}-1<(a=(s=f(s,t,10,l.s)).indexOf("."))?s=s.replace(".",""):a=s.length}for(o=0;48===s.charCodeAt(o);o++);for(c=s.length;48===s.charCodeAt(--c););if(s=s.slice(o,++c)){if(c-=o,u&&A.DEBUG&&15<c&&(C<e||e!==L(e)))throw Error(P+l.s*e);if(O<(a=a-o-1))l.c=l.e=null;else if(a<m)l.c=[l.e=0];else{if(l.e=a,l.c=[],o=(a+1)%j,a<0&&(o+=j),o<c){for(o&&l.c.push(+s.slice(0,o)),c-=j;o<c;)l.c.push(+s.slice(o,o+=j));s=s.slice(o),o=j-s.length}else o-=c;for(;o--;s+="0");l.c.push(+s)}}else l.c=[l.e=0]}function i(e,t,r,n){var i,a,o,u,c;if(null==r?r=w:Z(r,0,8),!e.c)return e.toString();if(i=e.c[0],o=e.e,null==t)c=V(e.c),c=1==n||2==n&&(o<=h||v<=o)?W(c,o):H(c,o,"0");else if(a=(e=E(new A(e),t,r)).e,u=(c=V(e.c)).length,1==n||2==n&&(t<=a||a<=h)){for(;u<t;c+="0",u++);c=W(c,a)}else if(t-=o,c=H(c,a,"0"),u<a+1){if(0<--t)for(c+=".";t--;c+="0");}else if(0<(t+=a-u))for(a+1==u&&(c+=".");t--;c+="0");return e.s<0&&i?"-"+c:c}function B(e,t){for(var r,n=1,i=new A(e[0]);n<e.length;n++){if(!(r=new A(e[n])).s){i=r;break}t.call(i,r)&&(i=r)}return i}function D(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];10<=i;i/=10,n++);return(r=n+r*j-1)>O?e.c=e.e=null:e.c=r<m?[e.e=0]:(e.e=r,t),e}function E(e,t,r,n){var i,a,o,u,c,s,l,f=e.c,p=R;if(f){e:{for(i=1,u=f[0];10<=u;u/=10,i++);if((a=t-i)<0)a+=j,o=t,l=(c=f[s=0])/p[i-o-1]%10|0;else if((s=_((a+1)/j))>=f.length){if(!n)break e;for(;f.length<=s;f.push(0));c=l=0,o=(a%=j)-j+(i=1)}else{for(c=u=f[s],i=1;10<=u;u/=10,i++);l=(o=(a%=j)-j+i)<0?0:c/p[i-o-1]%10|0}if(n=n||t<0||null!=f[s+1]||(o<0?c:c%p[i-o-1]),n=r<4?(l||n)&&(0==r||r==(e.s<0?3:2)):5<l||5==l&&(4==r||n||6==r&&(0<a?0<o?c/p[i-o]:0:f[s-1])%10&1||r==(e.s<0?8:7)),t<1||!f[0])return f.length=0,n?(t-=e.e+1,f[0]=p[(j-t%j)%j],e.e=-t||0):f[0]=e.e=0,e;if(0==a?(f.length=s,u=1,s--):(f.length=s+1,u=p[j-a],f[s]=0<o?L(c/p[i-o]%p[o])*u:0),n)for(;;){if(0==s){for(a=1,o=f[0];10<=o;o/=10,a++);for(o=f[0]+=u,u=1;10<=o;o/=10,u++);a!=u&&(e.e++,f[0]==U&&(f[0]=1));break}if(f[s]+=u,f[s]!=U)break;f[s--]=0,u=1}for(a=f.length;0===f[--a];f.pop());}e.e>O?e.c=e.e=null:e.e<m&&(e.c=[e.e=0])}return e}function F(e){var t,r=e.e;return null===r?e.toString():(t=V(e.c),t=r<=h||v<=r?W(t,r):H(t,r,"0"),e.s<0?"-"+t:t)}return A.clone=e,A.ROUND_UP=0,A.ROUND_DOWN=1,A.ROUND_CEIL=2,A.ROUND_FLOOR=3,A.ROUND_HALF_UP=4,A.ROUND_HALF_DOWN=5,A.ROUND_HALF_EVEN=6,A.ROUND_HALF_CEIL=7,A.ROUND_HALF_FLOOR=8,A.EUCLID=9,A.config=A.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(T+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(Z(r=e[t],0,$,t),b=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(Z(r=e[t],0,8,t),w=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(Z(r[0],-$,0,t),Z(r[1],0,$,t),h=r[0],v=r[1]):(Z(r,-$,$,t),h=-(v=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)Z(r[0],-$,-1,t),Z(r[1],1,$,t),m=r[0],O=r[1];else{if(Z(r,-$,$,t),!r)throw Error(T+t+" cannot be zero: "+r);m=-(O=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(T+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw x=!r,Error(T+"crypto unavailable");x=r}else x=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(Z(r=e[t],0,9,t),a=r),e.hasOwnProperty(t="POW_PRECISION")&&(Z(r=e[t],0,$,t),S=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(T+t+" not an object: "+r);N=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.$|[+-.\s]|(.).*\1/.test(r))throw Error(T+t+" invalid: "+r);M=r}}return{DECIMAL_PLACES:b,ROUNDING_MODE:w,EXPONENTIAL_AT:[h,v],RANGE:[m,O],CRYPTO:x,MODULO_MODE:a,POW_PRECISION:S,FORMAT:N,ALPHABET:M}},A.isBigNumber=function(e){return e instanceof A||e&&!0===e._isBigNumber||!1},A.maximum=A.max=function(){return B(arguments,n.lt)},A.minimum=A.min=function(){return B(arguments,n.gt)},A.random=(r=9007199254740992,s=Math.random()*r&2097151?function(){return L(Math.random()*r)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,n,i,a,o=0,u=[],c=new A(d);if(null==e?e=b:Z(e,0,$),i=_(e/j),x)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(i*=2));o<i;)9e15<=(a=131072*t[o]+(t[o+1]>>>11))?(r=crypto.getRandomValues(new Uint32Array(2)),t[o]=r[0],t[o+1]=r[1]):(u.push(a%1e14),o+=2);o=i/2}else{if(!crypto.randomBytes)throw x=!1,Error(T+"crypto unavailable");for(t=crypto.randomBytes(i*=7);o<i;)9e15<=(a=281474976710656*(31&t[o])+1099511627776*t[o+1]+4294967296*t[o+2]+16777216*t[o+3]+(t[o+4]<<16)+(t[o+5]<<8)+t[o+6])?crypto.randomBytes(7).copy(t,o):(u.push(a%1e14),o+=7);o=i/7}if(!x)for(;o<i;)(a=s())<9e15&&(u[o++]=a%1e14);for(i=u[--o],e%=j,i&&e&&(a=R[j-e],u[o]=L(i/a)*a);0===u[o];u.pop(),o--);if(o<0)u=[n=0];else{for(n=-1;0===u[0];u.splice(0,1),n-=j);for(o=1,a=u[0];10<=a;a/=10,o++);o<j&&(n-=j-o)}return c.e=n,c.c=u,c}),A.sum=function(){for(var e=1,t=arguments,r=new A(t[0]);e<t.length;)r=r.plus(t[e++]);return r},f=function(){var v="0123456789";function m(e,t,r,n){for(var i,a,o=[0],u=0,c=e.length;u<c;){for(a=o.length;a--;o[a]*=t);for(o[0]+=n.indexOf(e.charAt(u++)),i=0;i<o.length;i++)o[i]>r-1&&(null==o[i+1]&&(o[i+1]=0),o[i+1]+=o[i]/r|0,o[i]%=r)}return o.reverse()}return function(e,t,r,n,i){var a,o,u,c,s,l,f,p,g=e.indexOf("."),h=b,d=w;for(0<=g&&(c=S,S=0,e=e.replace(".",""),l=(p=new A(t)).pow(e.length-g),S=c,p.c=m(H(V(l.c),l.e,"0"),10,r,v),p.e=p.c.length),u=c=(f=m(e,t,r,i?(a=M,v):(a=v,M))).length;0==f[--c];f.pop());if(!f[0])return a.charAt(0);if(g<0?--u:(l.c=f,l.e=u,l.s=n,f=(l=y(l,p,h,d,r)).c,s=l.r,u=l.e),g=f[o=u+h+1],c=r/2,s=s||o<0||null!=f[o+1],s=d<4?(null!=g||s)&&(0==d||d==(l.s<0?3:2)):c<g||g==c&&(4==d||s||6==d&&1&f[o-1]||d==(l.s<0?8:7)),o<1||!f[0])e=s?H(a.charAt(1),-h,a.charAt(0)):a.charAt(0);else{if(f.length=o,s)for(--r;++f[--o]>r;)f[o]=0,o||(++u,f=[1].concat(f));for(c=f.length;!f[--c];);for(g=0,e="";g<=c;e+=a.charAt(f[g++]));e=H(e,u,a.charAt(0))}return e}}(),y=function(){function M(e,t,r){var n,i,a,o,u=0,c=e.length,s=t%I,l=t/I|0;for(e=e.slice();c--;)u=((i=s*(a=e[c]%I)+(n=l*a+(o=e[c]/I|0)*s)%I*I+u)/r|0)+(n/I|0)+l*o,e[c]=i%r;return u&&(e=[u].concat(e)),e}function B(e,t,r,n){var i,a;if(r!=n)a=n<r?1:-1;else for(i=a=0;i<r;i++)if(e[i]!=t[i]){a=e[i]>t[i]?1:-1;break}return a}function D(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&1<e.length;e.splice(0,1));}return function(e,t,r,n,i){var a,o,u,c,s,l,f,p,g,h,d,v,m,y,b,w,O,x=e.s==t.s?1:-1,S=e.c,N=t.c;if(!(S&&S[0]&&N&&N[0]))return new A(e.s&&t.s&&(S?!N||S[0]!=N[0]:N)?S&&0==S[0]||!N?0*x:x/0:NaN);for(g=(p=new A(x)).c=[],x=r+(o=e.e-t.e)+1,i||(i=U,o=G(e.e/j)-G(t.e/j),x=x/j|0),u=0;N[u]==(S[u]||0);u++);if(N[u]>(S[u]||0)&&o--,x<0)g.push(1),c=!0;else{for(y=S.length,w=N.length,x+=2,1<(s=L(i/(N[u=0]+1)))&&(N=M(N,s,i),S=M(S,s,i),w=N.length,y=S.length),m=w,d=(h=S.slice(0,w)).length;d<w;h[d++]=0);O=N.slice(),O=[0].concat(O),b=N[0],N[1]>=i/2&&b++;do{if(s=0,(a=B(N,h,w,d))<0){if(v=h[0],w!=d&&(v=v*i+(h[1]||0)),1<(s=L(v/b)))for(i<=s&&(s=i-1),f=(l=M(N,s,i)).length,d=h.length;1==B(l,h,f,d);)s--,D(l,w<f?O:N,f,i),f=l.length,a=1;else 0==s&&(a=s=1),f=(l=N.slice()).length;if(f<d&&(l=[0].concat(l)),D(h,l,d,i),d=h.length,-1==a)for(;B(N,h,w,d)<1;)s++,D(h,w<d?O:N,d,i),d=h.length}else 0===a&&(s++,h=[0]);g[u++]=s,h[0]?h[d++]=S[m]||0:(h=[S[m]],d=1)}while((m++<y||null!=h[0])&&x--);c=null!=h[0],g[0]||g.splice(0,1)}if(i==U){for(u=1,x=g[0];10<=x;x/=10,u++);E(p,r+(p.e=u+o*j-1)+1,n,c)}else p.e=o,p.r=+c;return p}}(),o=/^(-?)0([xbo])(?=\w[\w.]*$)/i,u=/^([^.]+)\.$/,c=/^\.([^.]+)$/,l=/^-?(Infinity|NaN)$/,g=/^\s*\+(?=[\w.])|^\s+|\s+$/g,p=function(e,t,r,n){var i,a=r?t:t.replace(g,"");if(l.test(a))e.s=isNaN(a)?null:a<0?-1:1,e.c=e.e=null;else{if(!r&&(a=a.replace(o,function(e,t,r){return i="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=i?e:t}),n&&(i=n,a=a.replace(u,"$1").replace(c,"0.$1")),t!=a))return new A(a,i);if(A.DEBUG)throw Error(T+"Not a"+(n?" base "+n:"")+" number: "+t);e.c=e.e=e.s=null}},n.absoluteValue=n.abs=function(){var e=new A(this);return e.s<0&&(e.s=1),e},n.comparedTo=function(e,t){return q(this,new A(e,t))},n.decimalPlaces=n.dp=function(e,t){var r,n,i;if(null!=e)return Z(e,0,$),null==t?t=w:Z(t,0,8),E(new A(this),e+this.e+1,t);if(!(r=this.c))return null;if(n=((i=r.length-1)-G(this.e/j))*j,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},n.dividedBy=n.div=function(e,t){return y(this,new A(e,t),b,w)},n.dividedToIntegerBy=n.idiv=function(e,t){return y(this,new A(e,t),0,1)},n.exponentiatedBy=n.pow=function(e,t){var r,n,i,a,o,u,c,s,l=this;if((e=new A(e)).c&&!e.isInteger())throw Error(T+"Exponent not an integer: "+F(e));if(null!=t&&(t=new A(t)),o=14<e.e,!l.c||!l.c[0]||1==l.c[0]&&!l.e&&1==l.c.length||!e.c||!e.c[0])return s=new A(Math.pow(+F(l),o?2-z(e):+F(e))),t?s.mod(t):s;if(u=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new A(NaN);(n=!u&&l.isInteger()&&t.isInteger())&&(l=l.mod(t))}else{if(9<e.e&&(0<l.e||l.e<-1||(0==l.e?1<l.c[0]||o&&24e7<=l.c[1]:l.c[0]<8e13||o&&l.c[0]<=9999975e7)))return a=l.s<0&&z(e)?-0:0,-1<l.e&&(a=1/a),new A(u?1/a:a);S&&(a=_(S/j+2))}for(c=o?(r=new A(.5),u&&(e.s=1),z(e)):(i=Math.abs(+F(e)))%2,s=new A(d);;){if(c){if(!(s=s.times(l)).c)break;a?s.c.length>a&&(s.c.length=a):n&&(s=s.mod(t))}if(i){if(0===(i=L(i/2)))break;c=i%2}else if(E(e=e.times(r),e.e+1,1),14<e.e)c=z(e);else{if(0==(i=+F(e)))break;c=i%2}l=l.times(l),a?l.c&&l.c.length>a&&(l.c.length=a):n&&(l=l.mod(t))}return n?s:(u&&(s=d.div(s)),t?s.mod(t):a?E(s,S,w,void 0):s)},n.integerValue=function(e){var t=new A(this);return null==e?e=w:Z(e,0,8),E(t,t.e+1,e)},n.isEqualTo=n.eq=function(e,t){return 0===q(this,new A(e,t))},n.isFinite=function(){return!!this.c},n.isGreaterThan=n.gt=function(e,t){return 0<q(this,new A(e,t))},n.isGreaterThanOrEqualTo=n.gte=function(e,t){return 1===(t=q(this,new A(e,t)))||0===t},n.isInteger=function(){return!!this.c&&G(this.e/j)>this.c.length-2},n.isLessThan=n.lt=function(e,t){return q(this,new A(e,t))<0},n.isLessThanOrEqualTo=n.lte=function(e,t){return-1===(t=q(this,new A(e,t)))||0===t},n.isNaN=function(){return!this.s},n.isNegative=function(){return this.s<0},n.isPositive=function(){return 0<this.s},n.isZero=function(){return!!this.c&&0==this.c[0]},n.minus=function(e,t){var r,n,i,a,o=this,u=o.s;if(t=(e=new A(e,t)).s,!u||!t)return new A(NaN);if(u!=t)return e.s=-t,o.plus(e);var c=o.e/j,s=e.e/j,l=o.c,f=e.c;if(!c||!s){if(!l||!f)return l?(e.s=-t,e):new A(f?o:NaN);if(!l[0]||!f[0])return f[0]?(e.s=-t,e):new A(l[0]?o:3==w?-0:0)}if(c=G(c),s=G(s),l=l.slice(),u=c-s){for((i=(a=u<0)?(u=-u,l):(s=c,f)).reverse(),t=u;t--;i.push(0));i.reverse()}else for(n=(a=(u=l.length)<(t=f.length))?u:t,u=t=0;t<n;t++)if(l[t]!=f[t]){a=l[t]<f[t];break}if(a&&(i=l,l=f,f=i,e.s=-e.s),0<(t=(n=f.length)-(r=l.length)))for(;t--;l[r++]=0);for(t=U-1;u<n;){if(l[--n]<f[n]){for(r=n;r&&!l[--r];l[r]=t);--l[r],l[n]+=U}l[n]-=f[n]}for(;0==l[0];l.splice(0,1),--s);return l[0]?D(e,l,s):(e.s=3==w?-1:1,e.c=[e.e=0],e)},n.modulo=n.mod=function(e,t){var r,n,i=this;return e=new A(e,t),!i.c||!e.s||e.c&&!e.c[0]?new A(NaN):!e.c||i.c&&!i.c[0]?new A(i):(9==a?(n=e.s,e.s=1,r=y(i,e,0,3),e.s=n,r.s*=n):r=y(i,e,0,a),(e=i.minus(r.times(e))).c[0]||1!=a||(e.s=i.s),e)},n.multipliedBy=n.times=function(e,t){var r,n,i,a,o,u,c,s,l,f,p,g,h,d,v,m=this,y=m.c,b=(e=new A(e,t)).c;if(!(y&&b&&y[0]&&b[0]))return!m.s||!e.s||y&&!y[0]&&!b||b&&!b[0]&&!y?e.c=e.e=e.s=null:(e.s*=m.s,y&&b?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=G(m.e/j)+G(e.e/j),e.s*=m.s,(c=y.length)<(f=b.length)&&(h=y,y=b,b=h,i=c,c=f,f=i),i=c+f,h=[];i--;h.push(0));for(d=U,v=I,i=f;0<=--i;){for(r=0,p=b[i]%v,g=b[i]/v|0,a=i+(o=c);i<a;)r=((s=p*(s=y[--o]%v)+(u=g*s+(l=y[o]/v|0)*p)%v*v+h[a]+r)/d|0)+(u/v|0)+g*l,h[a--]=s%d;h[a]=r}return r?++n:h.splice(0,1),D(e,h,n)},n.negated=function(){var e=new A(this);return e.s=-e.s||null,e},n.plus=function(e,t){var r,n=this,i=n.s;if(t=(e=new A(e,t)).s,!i||!t)return new A(NaN);if(i!=t)return e.s=-t,n.minus(e);var a=n.e/j,o=e.e/j,u=n.c,c=e.c;if(!a||!o){if(!u||!c)return new A(i/0);if(!u[0]||!c[0])return c[0]?e:new A(u[0]?n:0*i)}if(a=G(a),o=G(o),u=u.slice(),i=a-o){for((r=0<i?(o=a,c):(i=-i,u)).reverse();i--;r.push(0));r.reverse()}for((i=u.length)-(t=c.length)<0&&(r=c,c=u,u=r,t=i),i=0;t;)i=(u[--t]=u[t]+c[t]+i)/U|0,u[t]=U===u[t]?0:u[t]%U;return i&&(u=[i].concat(u),++o),D(e,u,o)},n.precision=n.sd=function(e,t){var r,n,i;if(null!=e&&e!==!!e)return Z(e,1,$),null==t?t=w:Z(t,0,8),E(new A(this),e,t);if(!(r=this.c))return null;if(n=(i=r.length-1)*j+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];10<=i;i/=10,n++);}return e&&this.e+1>n&&(n=this.e+1),n},n.shiftedBy=function(e){return Z(e,-C,C),this.times("1e"+e)},n.squareRoot=n.sqrt=function(){var e,t,r,n,i,a=this,o=a.c,u=a.s,c=a.e,s=b+4,l=new A("0.5");if(1!==u||!o||!o[0])return new A(!u||u<0&&(!o||o[0])?NaN:o?a:1/0);if((r=0==(u=Math.sqrt(+F(a)))||u==1/0?(((t=V(o)).length+c)%2==0&&(t+="0"),u=Math.sqrt(+t),c=G((c+1)/2)-(c<0||c%2),new A(t=u==1/0?"1e"+c:(t=u.toExponential()).slice(0,t.indexOf("e")+1)+c)):new A(u+"")).c[0])for((u=(c=r.e)+s)<3&&(u=0);;)if(i=r,r=l.times(i.plus(y(a,i,s,1))),V(i.c).slice(0,u)===(t=V(r.c)).slice(0,u)){if(r.e<c&&--u,"9999"!=(t=t.slice(u-3,u+1))&&(n||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(E(r,r.e+b+2,1),e=!r.times(r).eq(a));break}if(!n&&(E(i,i.e+b+2,0),i.times(i).eq(a))){r=i;break}s+=4,u+=4,n=1}return E(r,r.e+b+1,w,e)},n.toExponential=function(e,t){return null!=e&&(Z(e,0,$),e++),i(this,e,t,1)},n.toFixed=function(e,t){return null!=e&&(Z(e,0,$),e=e+this.e+1),i(this,e,t)},n.toFormat=function(e,t,r){var n;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=N;else if("object"!=typeof r)throw Error(T+"Argument not an object: "+r);if(n=this.toFixed(e,t),this.c){var i,a=n.split("."),o=+r.groupSize,u=+r.secondaryGroupSize,c=r.groupSeparator||"",s=a[0],l=a[1],f=this.s<0,p=f?s.slice(1):s,g=p.length;if(u&&(i=o,o=u,g-=u=i),0<o&&0<g){for(i=g%o||o,s=p.substr(0,i);i<g;i+=o)s+=c+p.substr(i,o);0<u&&(s+=c+p.slice(i)),f&&(s="-"+s)}n=l?s+(r.decimalSeparator||"")+((u=+r.fractionGroupSize)?l.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):l):s}return(r.prefix||"")+n+(r.suffix||"")},n.toFraction=function(e){var t,r,n,i,a,o,u,c,s,l,f,p,g=this,h=g.c;if(null!=e&&(!(u=new A(e)).isInteger()&&(u.c||1!==u.s)||u.lt(d)))throw Error(T+"Argument "+(u.isInteger()?"out of range: ":"not an integer: ")+F(u));if(!h)return new A(g);for(t=new A(d),s=r=new A(d),n=c=new A(d),p=V(h),a=t.e=p.length-g.e-1,t.c[0]=R[(o=a%j)<0?j+o:o],e=!e||0<u.comparedTo(t)?0<a?t:s:u,o=O,O=1/0,u=new A(p),c.c[0]=0;l=y(u,t,0,1),1!=(i=r.plus(l.times(n))).comparedTo(e);)r=n,n=i,s=c.plus(l.times(i=s)),c=i,t=u.minus(l.times(i=t)),u=i;return i=y(e.minus(r),n,0,1),c=c.plus(i.times(s)),r=r.plus(i.times(n)),c.s=s.s=g.s,f=y(s,n,a*=2,w).minus(g).abs().comparedTo(y(c,r,a,w).minus(g).abs())<1?[s,n]:[c,r],O=o,f},n.toNumber=function(){return+F(this)},n.toPrecision=function(e,t){return null!=e&&Z(e,1,$),i(this,e,t,2)},n.toString=function(e){var t,r=this,n=r.s,i=r.e;return null===i?n?(t="Infinity",n<0&&(t="-"+t)):t="NaN":(t=null==e?i<=h||v<=i?W(V(r.c),i):H(V(r.c),i,"0"):10===e?H(V((r=E(new A(r),b+i+1,w)).c),r.e,"0"):(Z(e,2,M.length,"Base"),f(H(V(r.c),i,"0"),10,e,n,!0)),n<0&&r.c[0]&&(t="-"+t)),t},n.valueOf=n.toJSON=function(){return F(this)},n._isBigNumber=!0,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator&&(n[Symbol.toStringTag]="BigNumber",n[Symbol.for("nodejs.util.inspect.custom")]=n.valueOf),null!=t&&A.set(t),A}()).default=t.BigNumber=t,void 0!==r&&r.exports?r.exports=t:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=t)}(this)},{}],2:[function(e,t,r){"use strict";t.exports={languageTag:"en-US",delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},spaceSeparated:!1,ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$",position:"prefix",code:"USD"},currencyFormat:{thousandSeparated:!0,totalLength:4,spaceSeparated:!0},formats:{fourDigits:{totalLength:4,spaceSeparated:!0},fullWithTwoDecimals:{output:"currency",thousandSeparated:!0,mantissa:2},fullWithTwoDecimalsNoCurrency:{thousandSeparated:!0,mantissa:2},fullWithNoDecimals:{output:"currency",thousandSeparated:!0,mantissa:0}}}},{}],3:[function(e,t,r){"use strict";function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=e("./globalState"),o=e("./validating"),u=e("./parsing"),n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],M={general:{scale:1024,suffixes:n,marker:"bd"},binary:{scale:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],marker:"b"},decimal:{scale:1e3,suffixes:n,marker:"d"}},I={totalLength:0,characteristic:0,forceAverage:!1,average:!1,mantissa:-1,optionalMantissa:!0,thousandSeparated:!1,spaceSeparated:!1,negative:"sign",forceSign:!1};function i(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0;if("string"==typeof t&&(t=u.parseFormat(t)),!o.validateFormat(t))return"ERROR: invalid format";var n=t.prefix||"",i=t.postfix||"",a=function(e,t,r){switch(t.output){case"currency":return t=A(t,R.currentCurrencyDefaultFormat()),function(e,t,r){var n=r.currentCurrency(),i=Object.assign({},I,t),a=void 0,o="",u=!!i.totalLength||!!i.forceAverage||i.average,c=t.currencyPosition||n.position,s=t.currencySymbol||n.symbol;i.spaceSeparated&&(o=" ");"infix"===c&&(a=o+s+o);var l=D({instance:e,providedFormat:t,state:r,decimalSeparator:a});"prefix"===c&&(l=e._value<0&&"sign"===i.negative?"-".concat(o).concat(s).concat(l.slice(1)):s+o+l);c&&"postfix"!==c||(l=l+(o=u?"":o)+s);return l}(e,t,R);case"percent":return t=A(t,R.currentPercentageDefaultFormat()),function(e,t,r,n){var i=t.prefixSymbol,a=D({instance:n(100*e._value),providedFormat:t,state:r}),o=Object.assign({},I,t);if(i)return"%".concat(o.spaceSeparated?" ":"").concat(a);return"".concat(a).concat(o.spaceSeparated?" ":"","%")}(e,t,R,r);case"byte":return t=A(t,R.currentByteDefaultFormat()),h=e,v=R,m=r,y=(d=t).base||"binary",b=M[y],w=B(h._value,b.suffixes,b.scale),O=w.value,x=w.suffix,S=D({instance:m(O),providedFormat:d,state:v,defaults:v.currentByteDefaultFormat()}),N=v.currentAbbreviations(),"".concat(S).concat(N.spaced?" ":"").concat(x);case"time":return t=A(t,R.currentTimeDefaultFormat()),l=e,f=Math.floor(l._value/60/60),p=Math.floor((l._value-60*f*60)/60),g=Math.round(l._value-60*f*60-60*p),"".concat(f,":").concat(p<10?"0":"").concat(p,":").concat(g<10?"0":"").concat(g);case"ordinal":return t=A(t,R.currentOrdinalDefaultFormat()),n=e,i=t,o=(a=R).currentOrdinal(),u=Object.assign({},I,i),c=D({instance:n,providedFormat:i,state:a}),s=o(n._value),"".concat(c).concat(u.spaceSeparated?" ":"").concat(s);case"number":default:return D({instance:e,providedFormat:t,numbro:r})}var n,i,a,o,u,c,s;var l,f,p,g;var h,d,v,m,y,b,w,O,x,S,N}(e,t,r);return a=(a=n+a)+i}function B(e,t,r){var n=t[0],i=Math.abs(e);if(r<=i){for(var a=1;a<t.length;++a){var o=Math.pow(r,a),u=Math.pow(r,a+1);if(o<=i&&i<u){n=t[a],e/=o;break}}n===t[0]&&(e/=Math.pow(r,t.length-1),n=t[t.length-1])}return{value:e,suffix:n}}function p(e){for(var t="",r=0;r<e;r++)t+="0";return t}function $(e,t){return-1!==e.toString().indexOf("e")?function(e,t){var r=e.toString(),n=C(r.split("e"),2),i=n[0],a=n[1],o=C(i.split("."),2),u=o[0],c=o[1],s=void 0===c?"":c;if(0<+a)r=u+s+p(a-s.length);else{var l=".";l=+u<0?"-0".concat(l):"0".concat(l);var f=(p(-a-1)+Math.abs(u)+s).substr(0,t);f.length<t&&(f+=p(t-f.length)),r=l+f}return 0<+a&&0<t&&(r+=".".concat(p(t))),r}(e,t):(Math.round(+"".concat(e,"e+").concat(t))/Math.pow(10,t)).toFixed(t)}function D(e){var t=e.instance,r=e.providedFormat,n=e.state,i=void 0===n?R:n,a=e.decimalSeparator,o=e.defaults,u=void 0===o?i.currentDefaults():o,c=t._value;if(0===c&&i.hasZeroFormat())return i.getZeroFormat();if(!isFinite(c))return c.toString();var s,l,f,p,g,h,d,v,m=Object.assign({},I,u,r),y=m.totalLength,b=y?0:m.characteristic,w=m.optionalCharacteristic,O=m.forceAverage,x=!!y||!!O||m.average,S=y?-1:x&&void 0===r.mantissa?0:m.mantissa,N=!y&&(void 0===r.optionalMantissa?-1===S:m.optionalMantissa),M=m.trimMantissa,B=m.thousandSeparated,D=m.spaceSeparated,A=m.negative,E=m.forceSign,F=m.exponential,k="";if(x){var _=function(e){var t=e.value,r=e.forceAverage,n=e.abbreviations,i=e.spaceSeparated,a=void 0!==i&&i,o=e.totalLength,u=void 0===o?0:o,c="",s=Math.abs(t),l=-1;if(s>=Math.pow(10,12)&&!r||"trillion"===r?(c=n.trillion,t/=Math.pow(10,12)):s<Math.pow(10,12)&&s>=Math.pow(10,9)&&!r||"billion"===r?(c=n.billion,t/=Math.pow(10,9)):s<Math.pow(10,9)&&s>=Math.pow(10,6)&&!r||"million"===r?(c=n.million,t/=Math.pow(10,6)):(s<Math.pow(10,6)&&s>=Math.pow(10,3)&&!r||"thousand"===r)&&(c=n.thousand,t/=Math.pow(10,3)),c&&(c=(a?" ":"")+c),u){var f=t.toString().split(".")[0];l=Math.max(u-f.length,0)}return{value:t,abbreviation:c,mantissaPrecision:l}}({value:c,forceAverage:O,abbreviations:i.currentAbbreviations(),spaceSeparated:D,totalLength:y});c=_.value,k+=_.abbreviation,y&&(S=_.mantissaPrecision)}if(F){var L=(l=(s={value:c,characteristicPrecision:b}).value,f=s.characteristicPrecision,p=void 0===f?0:f,g=C(l.toExponential().split("e"),2),h=g[0],d=g[1],v=+h,p&&1<p&&(v*=Math.pow(10,p-1),d=0<=(d=+d-(p-1))?"+".concat(d):d),{value:v,abbreviation:"e".concat(d)});c=L.value,k=L.abbreviation+k}var T,P,U,j=function(e,t,r,n,i){if(-1===n)return e;var a=$(t,n),o=C(a.toString().split("."),2),u=o[0],c=o[1],s=void 0===c?"":c;if(s.match(/^0+$/)&&(r||i))return u;var l=s.match(/0+$/);return i&&l?"".concat(u,".").concat(s.toString().slice(0,l.index)):a.toString()}(c.toString(),c,N,S,M);return j=function(e,t,r,n,i){var a=n.currentDelimiters(),o=a.thousands;i=i||a.decimal;var u=a.thousandsSize||3,c=e.toString(),s=c.split(".")[0],l=c.split(".")[1];return r&&(t<0&&(s=s.slice(1)),function(e,t){for(var r=[],n=0,i=e;0<i;i--)n===t&&(r.unshift(i),n=0),n++;return r}(s.length,u).forEach(function(e,t){s=s.slice(0,e+t)+o+s.slice(e+t)}),t<0&&(s="-".concat(s))),c=l?s+i+l:s}(j=function(e,t,r,n){var i=e,a=C(i.toString().split("."),2),o=a[0],u=a[1];if(o.match(/^-?0$/)&&r)return u?"".concat(o.replace("0",""),".").concat(u):o.replace("0","");if(o.length<n)for(var c=n-o.length,s=0;s<c;s++)i="0".concat(i);return i.toString()}(j,0,w,b),c,B,i,a),(x||F)&&(j=j+k),(E||c<0)&&(T=j,U=A,j=0===(P=c)?T:0==+T?T.replace("-",""):0<P?"+".concat(T):"sign"===U?T:"(".concat(T.replace("-",""),")")),j}function A(e,t){if(!e)return t;var r=Object.keys(e);return 1===r.length&&"output"===r[0]?t:e}t.exports=function(n){return{format:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return i.apply(void 0,t.concat([n]))},getByteUnit:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var t=M.general;return B(e._value,t.suffixes,t.scale).suffix}.apply(void 0,t.concat([n]))},getBinaryByteUnit:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var t=M.binary;return B(e._value,t.suffixes,t.scale).suffix}.apply(void 0,t.concat([n]))},getDecimalByteUnit:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){var t=M.decimal;return B(e._value,t.suffixes,t.scale).suffix}.apply(void 0,t.concat([n]))},formatOrDefault:A}}},{"./globalState":4,"./parsing":8,"./validating":10}],4:[function(e,t,r){"use strict";var i=e("./en-US"),n=e("./validating"),a=e("./parsing"),o={},u=void 0,c={},s=null,l={};function f(e){u=e}function p(){return c[u]}o.languages=function(){return Object.assign({},c)},o.currentLanguage=function(){return u},o.currentCurrency=function(){return p().currency},o.currentAbbreviations=function(){return p().abbreviations},o.currentDelimiters=function(){return p().delimiters},o.currentOrdinal=function(){return p().ordinal},o.currentDefaults=function(){return Object.assign({},p().defaults,l)},o.currentOrdinalDefaultFormat=function(){return Object.assign({},o.currentDefaults(),p().ordinalFormat)},o.currentByteDefaultFormat=function(){return Object.assign({},o.currentDefaults(),p().byteFormat)},o.currentPercentageDefaultFormat=function(){return Object.assign({},o.currentDefaults(),p().percentageFormat)},o.currentCurrencyDefaultFormat=function(){return Object.assign({},o.currentDefaults(),p().currencyFormat)},o.currentTimeDefaultFormat=function(){return Object.assign({},o.currentDefaults(),p().timeFormat)},o.setDefaults=function(e){e=a.parseFormat(e),n.validateFormat(e)&&(l=e)},o.getZeroFormat=function(){return s},o.setZeroFormat=function(e){return s="string"==typeof e?e:null},o.hasZeroFormat=function(){return null!==s},o.languageData=function(e){if(e){if(c[e])return c[e];throw new Error('Unknown tag "'.concat(e,'"'))}return p()},o.registerLanguage=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!n.validateLanguage(e))throw new Error("Invalid language data");c[e.languageTag]=e,t&&f(e.languageTag)},o.setLanguage=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i.languageTag;if(!c[e]){var r=e.split("-")[0],n=Object.keys(c).find(function(e){return e.split("-")[0]===r});return c[n]?void f(n):void f(t)}f(e)},o.registerLanguage(i),u=i.languageTag,t.exports=o},{"./en-US":2,"./parsing":8,"./validating":10}],5:[function(n,e,t){"use strict";e.exports=function(t){return{loadLanguagesInNode:function(e){return r=t,void e.forEach(function(t){var e=void 0;try{e=n("../languages/".concat(t))}catch(e){console.error('Unable to load "'.concat(t,'". No matching language file found.'))}e&&r.registerLanguage(e)});var r}}}},{}],6:[function(e,t,r){"use strict";var c=e("bignumber.js");function a(e,t,r){var n=new c(e._value),i=t;return r.isNumbro(t)&&(i=t._value),i=new c(i),e._value=n.minus(i).toNumber(),e}t.exports=function(u){return{add:function(e,t){return n=t,i=u,a=new c((r=e)._value),o=n,i.isNumbro(n)&&(o=n._value),o=new c(o),r._value=a.plus(o).toNumber(),r;var r,n,i,a,o},subtract:function(e,t){return a(e,t,u)},multiply:function(e,t){return n=t,i=u,a=new c((r=e)._value),o=n,i.isNumbro(n)&&(o=n._value),o=new c(o),r._value=a.times(o).toNumber(),r;var r,n,i,a,o},divide:function(e,t){return n=t,i=u,a=new c((r=e)._value),o=n,i.isNumbro(n)&&(o=n._value),o=new c(o),r._value=a.dividedBy(o).toNumber(),r;var r,n,i,a,o},set:function(e,t){return r=e,i=n=t,u.isNumbro(n)&&(i=n._value),r._value=i,r;var r,n,i},difference:function(e,t){return r=t,a(i=(n=u)(e._value),r,n),Math.abs(i._value);var r,n,i}}}},{"bignumber.js":1}],7:[function(e,t,r){"use strict";function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=e("./globalState"),n=e("./validating"),o=e("./loading")(g),u=e("./unformatting"),c=e("./formatting")(g),s=e("./manipulating")(g),l=e("./parsing"),f=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._value=e}var e,r,n;return e=t,(r=[{key:"clone",value:function(){return g(this._value)}},{key:"format",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return c.format(this,e)}},{key:"formatCurrency",value:function(e){return"string"==typeof e&&(e=l.parseFormat(e)),(e=c.formatOrDefault(e,a.currentCurrencyDefaultFormat())).output="currency",c.format(this,e)}},{key:"formatTime",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.output="time",c.format(this,e)}},{key:"binaryByteUnits",value:function(){return c.getBinaryByteUnit(this)}},{key:"decimalByteUnits",value:function(){return c.getDecimalByteUnit(this)}},{key:"byteUnits",value:function(){return c.getByteUnit(this)}},{key:"difference",value:function(e){return s.difference(this,e)}},{key:"add",value:function(e){return s.add(this,e)}},{key:"subtract",value:function(e){return s.subtract(this,e)}},{key:"multiply",value:function(e){return s.multiply(this,e)}},{key:"divide",value:function(e){return s.divide(this,e)}},{key:"set",value:function(e){return s.set(this,p(e))}},{key:"value",value:function(){return this._value}},{key:"valueOf",value:function(){return this._value}}])&&i(e.prototype,r),n&&i(e,n),t}();function p(e){var t=e;return g.isNumbro(e)?t=e._value:"string"==typeof e?t=g.unformat(e):isNaN(e)&&(t=NaN),t}function g(e){return new f(p(e))}g.version="2.1.2",g.isNumbro=function(e){return e instanceof f},g.language=a.currentLanguage,g.registerLanguage=a.registerLanguage,g.setLanguage=a.setLanguage,g.languages=a.languages,g.languageData=a.languageData,g.zeroFormat=a.setZeroFormat,g.defaultFormat=a.currentDefaults,g.setDefaults=a.setDefaults,g.defaultCurrencyFormat=a.currentCurrencyDefaultFormat,g.validate=n.validate,g.loadLanguagesInNode=o.loadLanguagesInNode,g.unformat=u.unformat,t.exports=g},{"./formatting":3,"./globalState":4,"./loading":5,"./manipulating":6,"./parsing":8,"./unformatting":9,"./validating":10}],8:[function(e,t,r){"use strict";t.exports={parseFormat:function(e){var t,r,n,i,a,o,u,c,s,l,f,p,g,h,d,v,m,y,b,w,O=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"string"!=typeof e?e:(r=O,e=(n=(t=e).match(/^{([^}]*)}/))?(r.prefix=n[1],t.slice(n[0].length)):t,a=O,function(e,t){if(-1===e.indexOf("$")){if(-1===e.indexOf("%"))return-1!==e.indexOf("bd")?(t.output="byte",t.base="general"):-1!==e.indexOf("b")?(t.output="byte",t.base="binary"):-1!==e.indexOf("d")?(t.output="byte",t.base="decimal"):-1===e.indexOf(":")?-1!==e.indexOf("o")&&(t.output="ordinal"):t.output="time";t.output="percent"}else t.output="currency"}(e=(o=(i=e).match(/{([^}]*)}$/))?(a.postfix=o[1],i.slice(0,-o[0].length)):i,O),u=O,(c=e.match(/[1-9]+[0-9]*/))&&(u.totalLength=+c[0]),s=O,(l=e.split(".")[0].match(/0+/))&&(s.characteristic=l[0].length),function(e,t){if(-1!==e.indexOf(".")){var r=e.split(".")[0];t.optionalCharacteristic=-1===r.indexOf("0")}}(e,O),f=O,-1!==e.indexOf("a")&&(f.average=!0),g=O,-1!==(p=e).indexOf("K")?g.forceAverage="thousand":-1!==p.indexOf("M")?g.forceAverage="million":-1!==p.indexOf("B")?g.forceAverage="billion":-1!==p.indexOf("T")&&(g.forceAverage="trillion"),function(e,t){var r=e.split(".")[1];if(r){var n=r.match(/0+/);n&&(t.mantissa=n[0].length)}}(e,O),d=O,(h=e).match(/\[\.]/)?d.optionalMantissa=!0:h.match(/\./)&&(d.optionalMantissa=!1),v=O,-1!==e.indexOf(",")&&(v.thousandSeparated=!0),m=O,-1!==e.indexOf(" ")&&(m.spaceSeparated=!0),b=O,(y=e).match(/^\+?\([^)]*\)$/)&&(b.negative="parenthesis"),y.match(/^\+?-/)&&(b.negative="sign"),w=O,e.match(/^\+/)&&(w.forceSign=!0),O)}}},{}],9:[function(p,e,t){"use strict";var O=[{key:"ZiB",factor:Math.pow(1024,7)},{key:"ZB",factor:Math.pow(1e3,7)},{key:"YiB",factor:Math.pow(1024,8)},{key:"YB",factor:Math.pow(1e3,8)},{key:"TiB",factor:Math.pow(1024,4)},{key:"TB",factor:Math.pow(1e3,4)},{key:"PiB",factor:Math.pow(1024,5)},{key:"PB",factor:Math.pow(1e3,5)},{key:"MiB",factor:Math.pow(1024,2)},{key:"MB",factor:Math.pow(1e3,2)},{key:"KiB",factor:Math.pow(1024,1)},{key:"KB",factor:Math.pow(1e3,1)},{key:"GiB",factor:Math.pow(1024,3)},{key:"GB",factor:Math.pow(1e3,3)},{key:"EiB",factor:Math.pow(1024,6)},{key:"EB",factor:Math.pow(1e3,6)},{key:"B",factor:1}];function x(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function g(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",n=3<arguments.length?arguments[3]:void 0,i=4<arguments.length?arguments[4]:void 0,a=5<arguments.length?arguments[5]:void 0,o=6<arguments.length?arguments[6]:void 0;if(""!==e)return e===i?0:function e(t,r){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",i=3<arguments.length?arguments[3]:void 0,a=4<arguments.length?arguments[4]:void 0,o=5<arguments.length?arguments[5]:void 0,u=6<arguments.length?arguments[6]:void 0;if(!isNaN(+t))return+t;var c="",s=t.replace(/(^[^(]*)\((.*)\)([^)]*$)/,"$1$2$3");if(s!==t)return-1*e(s,r,n,i,a,o,u);for(var l=0;l<O.length;l++){var f=O[l];if((c=t.replace(f.key,""))!==t)return e(c,r,n,i,a,o,u)*f.factor}if((c=t.replace("%",""))!==t)return e(c,r,n,i,a,o,u)/100;var p=parseFloat(t);if(!isNaN(p)){var g=i(p);if(g&&"."!==g&&(c=t.replace(new RegExp("".concat(x(g),"$")),""))!==t)return e(c,r,n,i,a,o,u);var h={};Object.keys(o).forEach(function(e){h[o[e]]=e});for(var d=Object.keys(h).sort().reverse(),v=d.length,m=0;m<v;m++){var y=d[m],b=h[y];if((c=t.replace(y,""))!==t){var w=void 0;switch(b){case"thousand":w=Math.pow(10,3);break;case"million":w=Math.pow(10,6);break;case"billion":w=Math.pow(10,9);break;case"trillion":w=Math.pow(10,12)}return e(c,r,n,i,a,o,u)*w}}}}(function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",n=e.replace(r,"");return n=(n=n.replace(new RegExp("([0-9])".concat(x(t.thousands),"([0-9])"),"g"),"$1$2")).replace(t.decimal,".")}(e,t,r),t,r,n,i,a,o)}e.exports={unformat:function(e,t){var r,n,i,a=p("./globalState"),o=a.currentDelimiters(),u=a.currentCurrency().symbol,c=a.currentOrdinal(),s=a.getZeroFormat(),l=a.currentAbbreviations(),f=void 0;if("string"==typeof e)f=function(e,t){if(!e.indexOf(":")||":"===t.thousands)return!1;var r=e.split(":");if(3!==r.length)return!1;var n=+r[0],i=+r[1],a=+r[2];return!isNaN(n)&&!isNaN(i)&&!isNaN(a)}(e,o)?(r=e.split(":"),n=+r[0],i=+r[1],+r[2]+60*i+3600*n):g(e,o,u,c,s,l,t);else{if("number"!=typeof e)return;f=e}if(void 0!==f)return f}}},{"./globalState":4}],10:[function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=e("./unformatting"),a=/^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/,p={output:{type:"string",validValues:["currency","percent","byte","time","ordinal","number"]},base:{type:"string",validValues:["decimal","binary","general"],restriction:function(e,t){return"byte"===t.output},message:"`base` must be provided only when the output is `byte`",mandatory:function(e){return"byte"===e.output}},characteristic:{type:"number",restriction:function(e){return 0<=e},message:"value must be positive"},prefix:"string",postfix:"string",forceAverage:{type:"string",validValues:["trillion","billion","million","thousand"]},average:"boolean",currencyPosition:{type:"string",validValues:["prefix","infix","postfix"]},currencySymbol:"string",totalLength:{type:"number",restrictions:[{restriction:function(e){return 0<=e},message:"value must be positive"},{restriction:function(e,t){return!t.exponential},message:"`totalLength` is incompatible with `exponential`"}]},mantissa:{type:"number",restriction:function(e){return 0<=e},message:"value must be positive"},optionalMantissa:"boolean",trimMantissa:"boolean",optionalCharacteristic:"boolean",thousandSeparated:"boolean",spaceSeparated:"boolean",abbreviations:{type:"object",children:{thousand:"string",million:"string",billion:"string",trillion:"string"}},negative:{type:"string",validValues:["sign","parenthesis"]},forceSign:"boolean",exponential:{type:"boolean"},prefixSymbol:{type:"boolean",restriction:function(e,t){return"percent"===t.output},message:"`prefixSymbol` can be provided only when the output is `percent`"}},o={languageTag:{type:"string",mandatory:!0,restriction:function(e){return e.match(a)},message:"the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)"},delimiters:{type:"object",children:{thousands:"string",decimal:"string",thousandsSize:"number"},mandatory:!0},abbreviations:{type:"object",children:{thousand:{type:"string",mandatory:!0},million:{type:"string",mandatory:!0},billion:{type:"string",mandatory:!0},trillion:{type:"string",mandatory:!0}},mandatory:!0},spaceSeparated:"boolean",ordinal:{type:"function",mandatory:!0},currency:{type:"object",children:{symbol:"string",position:"string",code:"string"},mandatory:!0},defaults:"format",ordinalFormat:"format",byteFormat:"format",percentageFormat:"format",currencyFormat:"format",timeDefaults:"format",formats:{type:"object",children:{fourDigits:{type:"format",mandatory:!0},fullWithTwoDecimals:{type:"format",mandatory:!0},fullWithTwoDecimalsNoCurrency:{type:"format",mandatory:!0},fullWithNoDecimals:{type:"format",mandatory:!0}}}};function u(e){return!!i.unformat(e)}function g(c,s,l){var e=3<arguments.length&&void 0!==arguments[3]&&arguments[3],t=Object.keys(c).map(function(e){if(!s[e])return console.error("".concat(l," Invalid key: ").concat(e)),!1;var t=c[e],r=s[e];if("string"==typeof r&&(r={type:r}),"format"===r.type){if(!g(t,p,"[Validate ".concat(e,"]"),!0))return!1}else if(f(t)!==r.type)return console.error("".concat(l," ").concat(e,' type mismatched: "').concat(r.type,'" expected, "').concat(f(t),'" provided')),!1;if(r.restrictions&&r.restrictions.length)for(var n=r.restrictions.length,i=0;i<n;i++){var a=r.restrictions[i],o=a.restriction,u=a.message;if(!o(t,c))return console.error("".concat(l," ").concat(e," invalid value: ").concat(u)),!1}if(r.restriction&&!r.restriction(t,c))return console.error("".concat(l," ").concat(e," invalid value: ").concat(r.message)),!1;if(r.validValues&&-1===r.validValues.indexOf(t))return console.error("".concat(l," ").concat(e," invalid value: must be among ").concat(JSON.stringify(r.validValues),', "').concat(t,'" provided')),!1;if(r.children&&!g(t,r.children,"[Validate ".concat(e,"]")))return!1;return!0});return e||t.push.apply(t,n(Object.keys(s).map(function(e){var t=s[e];if("string"==typeof t&&(t={type:t}),t.mandatory){var r=t.mandatory;if("function"==typeof r&&(r=r(c)),r&&void 0===c[e])return console.error("".concat(l,' Missing mandatory key "').concat(e,'"')),!1}return!0}))),t.reduce(function(e,t){return e&&t},!0)}function c(e){return g(e,p,"[Validate format]")}t.exports={validate:function(e,t){var r=u(e),n=c(t);return r&&n},validateFormat:c,validateInput:u,validateLanguage:function(e){return g(e,o,"[Validate language]")}}},{"./unformatting":9}]},{},[7])(7)});
//# sourceMappingURL=numbro.min.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/store/dist/store.legacy.js":
/*!*************************************************!*\
  !*** ./node_modules/store/dist/store.legacy.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var engine = __webpack_require__(/*! ../src/store-engine */ "./node_modules/store/src/store-engine.js")

var storages = __webpack_require__(/*! ../storages/all */ "./node_modules/store/storages/all.js")
var plugins = [__webpack_require__(/*! ../plugins/json2 */ "./node_modules/store/plugins/json2.js")]

module.exports = engine.createStore(storages, plugins)


/***/ }),

/***/ "./node_modules/store/plugins/json2.js":
/*!*********************************************!*\
  !*** ./node_modules/store/plugins/json2.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = json2Plugin

function json2Plugin() {
	__webpack_require__(/*! ./lib/json2 */ "./node_modules/store/plugins/lib/json2.js")
	return {}
}


/***/ }),

/***/ "./node_modules/store/plugins/lib/json2.js":
/*!*************************************************!*\
  !*** ./node_modules/store/plugins/lib/json2.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */

//  json2.js
//  2016-10-28
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://www.JSON.org/js.html
//  This code should be minified before deployment.
//  See http://javascript.crockford.com/jsmin.html

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });

//          myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
//              var d;
//              if (typeof value === "string" &&
//                      value.slice(0, 5) === "Date(" &&
//                      value.slice(-1) === ")") {
//                  d = new Date(value.slice(5, -1));
//                  if (d) {
//                      return d;
//                  }
//              }
//              return value;
//          });

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
    eval, for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
                        f(this.getUTCMonth() + 1) + "-" +
                        f(this.getUTCDate()) + "T" +
                        f(this.getUTCHours()) + ":" +
                        f(this.getUTCMinutes()) + ":" +
                        f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
                typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case "string":
            return quote(value);

        case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value)
                ? String(value)
                : "null";

        case "boolean":
        case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

        case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

            if (!value) {
                return "null";
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? "[]"
                    : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? "{}"
                : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                    (typeof replacer !== "object" ||
                    typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                            ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

/***/ }),

/***/ "./node_modules/store/src/store-engine.js":
/*!************************************************!*\
  !*** ./node_modules/store/src/store-engine.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./node_modules/store/src/util.js")
var slice = util.slice
var pluck = util.pluck
var each = util.each
var bind = util.bind
var create = util.create
var isList = util.isList
var isFunction = util.isFunction
var isObject = util.isObject

module.exports = {
	createStore: createStore
}

var storeAPI = {
	version: '2.0.12',
	enabled: false,
	
	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this.storage.read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this.storage.write(this._namespacePrefix + key, this._serialize(value))
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this.storage.remove(this._namespacePrefix + key)
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this
		this.storage.each(function(val, namespacedKey) {
			callback.call(self, self._deserialize(val), (namespacedKey || '').replace(self._namespaceRegexp, ''))
		})
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this.storage.clearAll()
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function() {
		return createStore.apply(this, arguments)
	},
	
	addPlugin: function(plugin) {
		this._addPlugin(plugin)
	},
	
	namespace: function(namespace) {
		return createStore(this.storage, this.plugins, namespace)
	}
}

function _warn() {
	var _console = (typeof console == 'undefined' ? null : console)
	if (!_console) { return }
	var fn = (_console.warn ? _console.warn : _console.log)
	fn.apply(_console, arguments)
}

function createStore(storages, plugins, namespace) {
	if (!namespace) {
		namespace = ''
	}
	if (storages && !isList(storages)) {
		storages = [storages]
	}
	if (plugins && !isList(plugins)) {
		plugins = [plugins]
	}

	var namespacePrefix = (namespace ? '__storejs_'+namespace+'_' : '')
	var namespaceRegexp = (namespace ? new RegExp('^'+namespacePrefix) : null)
	var legalNamespaces = /^[a-zA-Z0-9_\-]*$/ // alpha-numeric + underscore and dash
	if (!legalNamespaces.test(namespace)) {
		throw new Error('store.js namespaces can only have alphanumerics + underscores and dashes')
	}
	
	var _privateStoreProps = {
		_namespacePrefix: namespacePrefix,
		_namespaceRegexp: namespaceRegexp,

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__'
				storage.write(testStr, testStr)
				var ok = (storage.read(testStr) === testStr)
				storage.remove(testStr)
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName]
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0)
				var self = this

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each(arguments, function(arg, i) {
						args[i] = arg
					})
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args)

				return pluginFnProp.apply(self, newFnArgs)
			}
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = ''
			try { val = JSON.parse(strVal) }
			catch(e) { val = strVal }

			return (val !== undefined ? val : defaultVal)
		},
		
		_addStorage: function(storage) {
			if (this.enabled) { return }
			if (this._testStorage(storage)) {
				this.storage = storage
				this.enabled = true
			}
		},

		_addPlugin: function(plugin) {
			var self = this

			// If the plugin is an array, then add all plugins in the array.
			// This allows for a plugin to depend on other plugins.
			if (isList(plugin)) {
				each(plugin, function(plugin) {
					self._addPlugin(plugin)
				})
				return
			}

			// Keep track of all plugins we've seen so far, so that we
			// don't add any of them twice.
			var seenPlugin = pluck(this.plugins, function(seenPlugin) {
				return (plugin === seenPlugin)
			})
			if (seenPlugin) {
				return
			}
			this.plugins.push(plugin)

			// Check that the plugin is properly formed
			if (!isFunction(plugin)) {
				throw new Error('Plugins must be function values that return objects')
			}

			var pluginProperties = plugin.call(this)
			if (!isObject(pluginProperties)) {
				throw new Error('Plugins must return an object of function properties')
			}

			// Add the plugin function properties to this store instance.
			each(pluginProperties, function(pluginFnProp, propName) {
				if (!isFunction(pluginFnProp)) {
					throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
				}
				self._assignPluginFnProp(pluginFnProp, propName)
			})
		},
		
		// Put deprecated properties in the private API, so as to not expose it to accidential
		// discovery through inspection of the store object.
		
		// Deprecated: addStorage
		addStorage: function(storage) {
			_warn('store.addStorage(storage) is deprecated. Use createStore([storages])')
			this._addStorage(storage)
		}
	}

	var store = create(_privateStoreProps, storeAPI, {
		plugins: []
	})
	store.raw = {}
	each(store, function(prop, propName) {
		if (isFunction(prop)) {
			store.raw[propName] = bind(store, prop)			
		}
	})
	each(storages, function(storage) {
		store._addStorage(storage)
	})
	each(plugins, function(plugin) {
		store._addPlugin(plugin)
	})
	return store
}


/***/ }),

/***/ "./node_modules/store/src/util.js":
/*!****************************************!*\
  !*** ./node_modules/store/src/util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : global)

module.exports = {
	assign: assign,
	create: create,
	trim: trim,
	bind: bind,
	slice: slice,
	each: each,
	map: map,
	pluck: pluck,
	isList: isList,
	isFunction: isFunction,
	isObject: isObject,
	Global: Global
}

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function(val, key) {
					obj[key] = val
				})
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function(val, key) {
		fn(val, key)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function(v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/store/storages/all.js":
/*!********************************************!*\
  !*** ./node_modules/store/storages/all.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
	// Listed in order of usage preference
	__webpack_require__(/*! ./localStorage */ "./node_modules/store/storages/localStorage.js"),
	__webpack_require__(/*! ./oldFF-globalStorage */ "./node_modules/store/storages/oldFF-globalStorage.js"),
	__webpack_require__(/*! ./oldIE-userDataStorage */ "./node_modules/store/storages/oldIE-userDataStorage.js"),
	__webpack_require__(/*! ./cookieStorage */ "./node_modules/store/storages/cookieStorage.js"),
	__webpack_require__(/*! ./sessionStorage */ "./node_modules/store/storages/sessionStorage.js"),
	__webpack_require__(/*! ./memoryStorage */ "./node_modules/store/storages/memoryStorage.js")
]


/***/ }),

/***/ "./node_modules/store/storages/cookieStorage.js":
/*!******************************************************!*\
  !*** ./node_modules/store/storages/cookieStorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global
var trim = util.trim

module.exports = {
	name: 'cookieStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var doc = Global.document

function read(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
	var cookies = doc.cookie.split(/; ?/g)
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=')
		var key = unescape(kvp[0])
		var val = unescape(kvp[1])
		callback(val, key)
	}
}

function write(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
	each(function(_, key) {
		remove(key)
	})
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}


/***/ }),

/***/ "./node_modules/store/storages/localStorage.js":
/*!*****************************************************!*\
  !*** ./node_modules/store/storages/localStorage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'localStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function localStorage() {
	return Global.localStorage
}

function read(key) {
	return localStorage().getItem(key)
}

function write(key, data) {
	return localStorage().setItem(key, data)
}

function each(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return localStorage().removeItem(key)
}

function clearAll() {
	return localStorage().clear()
}


/***/ }),

/***/ "./node_modules/store/storages/memoryStorage.js":
/*!******************************************************!*\
  !*** ./node_modules/store/storages/memoryStorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// memoryStorage is a useful last fallback to ensure that the store
// is functions (meaning store.get(), store.set(), etc will all function).
// However, stored values will not persist when the browser navigates to
// a new page or reloads the current page.

module.exports = {
	name: 'memoryStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var memoryStorage = {}

function read(key) {
	return memoryStorage[key]
}

function write(key, data) {
	memoryStorage[key] = data
}

function each(callback) {
	for (var key in memoryStorage) {
		if (memoryStorage.hasOwnProperty(key)) {
			callback(memoryStorage[key], key)
		}
	}
}

function remove(key) {
	delete memoryStorage[key]
}

function clearAll(key) {
	memoryStorage = {}
}


/***/ }),

/***/ "./node_modules/store/storages/oldFF-globalStorage.js":
/*!************************************************************!*\
  !*** ./node_modules/store/storages/oldFF-globalStorage.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// oldFF-globalStorage provides storage for Firefox
// versions 6 and 7, where no localStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldFF-globalStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var globalStorage = Global.globalStorage

function read(key) {
	return globalStorage[key]
}

function write(key, data) {
	globalStorage[key] = data
}

function each(fn) {
	for (var i = globalStorage.length - 1; i >= 0; i--) {
		var key = globalStorage.key(i)
		fn(globalStorage[key], key)
	}
}

function remove(key) {
	return globalStorage.removeItem(key)
}

function clearAll() {
	each(function(key, _) {
		delete globalStorage[key]
	})
}


/***/ }),

/***/ "./node_modules/store/storages/oldIE-userDataStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/store/storages/oldIE-userDataStorage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// oldIE-userDataStorage provides storage for Internet Explorer
// versions 6 and 7, where no localStorage, sessionStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldIE-userDataStorage',
	write: write,
	read: read,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var storageName = 'storejs'
var doc = Global.document
var _withStorageEl = _makeIEStorageElFunction()
var disable = (Global.navigator ? Global.navigator.userAgent : '').match(/ (MSIE 8|MSIE 9|MSIE 10)\./) // MSIE 9.x, MSIE 10.x

function write(unfixedKey, data) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.setAttribute(fixedKey, data)
		storageEl.save(storageName)
	})
}

function read(unfixedKey) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	var res = null
	_withStorageEl(function(storageEl) {
		res = storageEl.getAttribute(fixedKey)
	})
	return res
}

function each(callback) {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		for (var i=attributes.length-1; i>=0; i--) {
			var attr = attributes[i]
			callback(storageEl.getAttribute(attr.name), attr.name)
		}
	})
}

function remove(unfixedKey) {
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.removeAttribute(fixedKey)
		storageEl.save(storageName)
	})
}

function clearAll() {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		storageEl.load(storageName)
		for (var i=attributes.length-1; i>=0; i--) {
			storageEl.removeAttribute(attributes[i].name)
		}
		storageEl.save(storageName)
	})
}

// Helpers
//////////

// In IE7, keys cannot start with a digit or contain certain chars.
// See https://github.com/marcuswestin/store.js/issues/40
// See https://github.com/marcuswestin/store.js/issues/83
var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
function fixKey(key) {
	return key.replace(/^\d/, '___$&').replace(forbiddenCharsRegex, '___')
}

function _makeIEStorageElFunction() {
	if (!doc || !doc.documentElement || !doc.documentElement.addBehavior) {
		return null
	}
	var scriptTag = 'script',
		storageOwner,
		storageContainer,
		storageEl

	// Since #userData storage applies only to specific paths, we need to
	// somehow link our data to a specific path.  We choose /favicon.ico
	// as a pretty safe option, since all browsers already make a request to
	// this URL anyway and being a 404 will not hurt us here.  We wrap an
	// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
	// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
	// since the iframe access rules appear to allow direct access and
	// manipulation of the document element, even for a 404 page.  This
	// document can be used instead of the current document (which would
	// have been limited to the current path) to perform #userData storage.
	try {
		/* global ActiveXObject */
		storageContainer = new ActiveXObject('htmlfile')
		storageContainer.open()
		storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
		storageContainer.close()
		storageOwner = storageContainer.w.frames[0].document
		storageEl = storageOwner.createElement('div')
	} catch(e) {
		// somehow ActiveXObject instantiation failed (perhaps some special
		// security settings or otherwse), fall back to per-path storage
		storageEl = doc.createElement('div')
		storageOwner = doc.body
	}

	return function(storeFunction) {
		var args = [].slice.call(arguments, 0)
		args.unshift(storageEl)
		// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
		// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
		storageOwner.appendChild(storageEl)
		storageEl.addBehavior('#default#userData')
		storageEl.load(storageName)
		storeFunction.apply(this, args)
		storageOwner.removeChild(storageEl)
		return
	}
}


/***/ }),

/***/ "./node_modules/store/storages/sessionStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/store/storages/sessionStorage.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll
}

function sessionStorage() {
	return Global.sessionStorage
}

function read(key) {
	return sessionStorage().getItem(key)
}

function write(key, data) {
	return sessionStorage().setItem(key, data)
}

function each(fn) {
	for (var i = sessionStorage().length - 1; i >= 0; i--) {
		var key = sessionStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return sessionStorage().removeItem(key)
}

function clearAll() {
	return sessionStorage().clear()
}


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Films.vue?vue&type=template&id=dad836d8&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Films.vue?vue&type=template&id=dad836d8& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pt-3 pl-5 pr-5" },
    [
      _c(
        "v-app-bar",
        { attrs: { dense: "", tile: false, "scroll-target": "#films" } },
        [
          _c("v-text-field", {
            attrs: {
              "hide-details": "",
              "prepend-icon": "search",
              "single-line": "",
              placeholder: "Search for Movies, TV-shows ..."
            },
            model: {
              value: _vm.query,
              callback: function($$v) {
                _vm.query = $$v
              },
              expression: "query"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("more_vert")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-5", attrs: { id: "films" } },
        [
          _vm._l(_vm.items, function(item) {
            return _c(
              "v-card",
              { key: item.id, staticClass: "film-card" },
              [
                _c(
                  "v-img",
                  {
                    class:
                      "" +
                      (item.poster_path
                        ? "film-card-poster"
                        : "no-image-holder"),
                    attrs: {
                      src: item.poster_path
                        ? "https://image.tmdb.org/t/p/w500" + item.poster_path
                        : ""
                    }
                  },
                  [
                    item.poster_path
                      ? _c(
                          "v-card-title",
                          { staticClass: "align-end fill-height" },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.title ? item.title : item.name) +
                                "\n                    (" +
                                _vm._s(
                                  item.release_date
                                    ? item.release_date.substring(0, 4)
                                    : item.first_air_date.substring(0, 4)
                                ) +
                                ")\n                "
                            )
                          ]
                        )
                      : _c(
                          "v-icon",
                          { staticClass: "mt-5", attrs: { size: "180" } },
                          [_vm._v("far fa-image")]
                        )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-card-text", { staticClass: "film-card-content" }, [
                  _c(
                    "span",
                    [
                      _c("v-icon", { staticClass: "mb-1 mr-1 orange--text" }, [
                        _vm._v("far fa-star")
                      ]),
                      _vm._v(_vm._s(item.vote_average))
                    ],
                    1
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text--primary" },
                    [
                      _c(
                        "v-tooltip",
                        {
                          attrs: { "max-width": "300", top: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c("span", _vm._g({}, on), [
                                      _vm._v(_vm._s(item.overview))
                                    ])
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(item.overview))])
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c("v-btn", { attrs: { text: "", color: "orange" } }, [
                      _vm._v("\n                    Share\n                ")
                    ]),
                    _vm._v(" "),
                    _c("v-btn", { attrs: { text: "", color: "orange" } }, [
                      _vm._v("\n                    Explore\n                ")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-pagination", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.items.length,
                expression: "items.length"
              }
            ],
            attrs: { length: _vm.totalPages, "total-visible": 7 },
            on: { input: _vm.toPage },
            model: {
              value: _vm.page,
              callback: function($$v) {
                _vm.page = $$v
              },
              expression: "page"
            }
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/App.js":
/*!*****************************!*\
  !*** ./resources/js/App.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);

var App = function App(components, domId) {
  _classCallCheck(this, App);

  var el = domId || '#app';
  new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    el: el,
    components: components,
    vuetify: new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a({
      theme: {
        dark: true
      }
    })
  });
};



/***/ }),

/***/ "./resources/js/User.js":
/*!******************************!*\
  !*** ./resources/js/User.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(payload) {
    _classCallCheck(this, User);

    this.payload = payload || {
      roles: []
    };
  }

  _createClass(User, [{
    key: "name",
    value: function name() {
      return this.payload.name;
    }
  }, {
    key: "account",
    value: function account() {
      return this.payload.account;
    }
  }, {
    key: "roles",
    value: function roles() {
      return this.payload.roles;
    }
  }]);

  return User;
}();



/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./resources/js/User.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var AUTH_COOKIE = 'auth';

var Api =
/*#__PURE__*/
function () {
  function Api() {
    var _this = this;

    _classCallCheck(this, Api);

    this.ax = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    this.ax.interceptors.request.use(function (config) {
      config.headers['Authorization'] = "Bearer ".concat(_this.token());
      return config;
    });
  }

  _createClass(Api, [{
    key: "get",
    value: function get(uri) {
      return this.ax.get(uri);
    }
  }, {
    key: "getAll",
    value: function getAll(uris) {
      var _this2 = this;

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.all(uris.map(function (uri) {
        return _this2.ax.get(uri);
      }));
    }
  }, {
    key: "post",
    value: function post(uri, payload) {
      return this.ax.post(uri, payload);
    }
  }, {
    key: "postForm",
    value: function postForm(uri, payload) {
      return this.ax.post(uri, payload, {
        headers: {
          'Content-Type': 'multipart/form-data;'
        }
      });
    }
  }, {
    key: "put",
    value: function put(uri, payload) {
      return this.ax.put(uri, payload);
    }
  }, {
    key: "delete",
    value: function _delete(uri, params) {
      return this.ax["delete"](uri, {
        params: params
      });
    }
  }, {
    key: "token",
    value: function token() {
      return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(AUTH_COOKIE);
    }
  }, {
    key: "user",
    value: function user() {
      return new _User__WEBPACK_IMPORTED_MODULE_3__["default"](store__WEBPACK_IMPORTED_MODULE_1___default.a.get('user'));
    }
  }, {
    key: "storeUser",
    value: function storeUser(user) {
      store__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', user);
      return new _User__WEBPACK_IMPORTED_MODULE_3__["default"](user);
    }
  }, {
    key: "removeUser",
    value: function removeUser() {
      store__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Api());

/***/ }),

/***/ "./resources/js/components/Films.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Films.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Films.vue?vue&type=template&id=dad836d8& */ "./resources/js/components/Films.vue?vue&type=template&id=dad836d8&");
/* harmony import */ var _Films_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Films.vue?vue&type=script&lang=js& */ "./resources/js/components/Films.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Films_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Films.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Films.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Films.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Films_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Films.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Films.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Films_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Films.vue?vue&type=template&id=dad836d8&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Films.vue?vue&type=template&id=dad836d8& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Films.vue?vue&type=template&id=dad836d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Films.vue?vue&type=template&id=dad836d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Films_vue_vue_type_template_id_dad836d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/films.js":
/*!*******************************!*\
  !*** ./resources/js/films.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./resources/js/App.js");
/* harmony import */ var _components_Films_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Films.vue */ "./resources/js/components/Films.vue");


new _App__WEBPACK_IMPORTED_MODULE_0__["default"]({
  Films: _components_Films_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numbro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numbro */ "./node_modules/numbro/dist/numbro.min.js");
/* harmony import */ var numbro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numbro__WEBPACK_IMPORTED_MODULE_2__);



var thisYear = function thisYear(year) {
  var y = new Date().getFullYear();
  return +y === +year;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  round: function round(value, precision) {
    if (precision === undefined || precision === null || precision === 0) {
      return +numbro__WEBPACK_IMPORTED_MODULE_2___default()(value).format('0');
    }

    var decimal = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.repeat('0', precision);

    return +numbro__WEBPACK_IMPORTED_MODULE_2___default()(value).format("0.".concat(decimal));
  },
  precision: function precision(currency) {
    if (currency === 'NTD' || currency === 'TWD') {
      return 0;
    }

    return 2;
  },
  numFmt: function numFmt(value) {
    if (value === undefined || value === null || value === '') {
      return '';
    }

    return numbro__WEBPACK_IMPORTED_MODULE_2___default()(value).format('0,0');
  },
  floatFmt: function floatFmt(value) {
    if (value === undefined || value === null || value === '') {
      return '';
    }

    return numbro__WEBPACK_IMPORTED_MODULE_2___default()(value).format('0,0.00');
  },
  priceFmt: function priceFmt(value, currency) {
    return currency === 'NTD' ? this.numFmt(value) : this.floatFmt(value);
  },
  combineUri: function combineUri(uri, query) {
    var filtered = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omitBy(query, function (q) {
      return q === undefined || q === null || q === '';
    });

    var q = Object.keys(filtered).map(function (key) {
      return "".concat(key, "=").concat(filtered[key]);
    }).join('&');
    return "".concat(uri, "?").concat(q);
  },
  dateFmt: function dateFmt(date) {
    var forceYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var year = +date.substr(0, 4);
    var month = +date.substr(5, 2);
    var day = +date.substr(8, 2);

    if (forceYear || !thisYear(year)) {
      return "".concat(year, " \u5E74 ").concat(month, " \u6708 ").concat(day, " \u65E5");
    }

    return "".concat(month, " \u6708 ").concat(day, " \u65E5");
  },
  percentTrans: function percentTrans(value) {
    if (value === undefined || value === null || value === '') {
      return '';
    }

    return numbro__WEBPACK_IMPORTED_MODULE_2___default()(value).format('0,0.0') + "%";
  },
  redirect: function redirect(url) {
    window.location = url;
  }
});

/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** multi ./resources/js/films.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/humanfly/Projects/humanfly/resources/js/films.js */"./resources/js/films.js");


/***/ })

},[[2,"/js/manifest","/js/common"]]]);