import * as Z from "react";
import on, { useRef as Et, useState as Hn, useCallback as Ct, useMemo as Zt, useContext as yt, useEffect as ln, useLayoutEffect as _w, useImperativeHandle as Mw, useReducer as Q_, createContext as X_, cloneElement as Tm, forwardRef as Z_ } from "react";
function rp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Aw = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(l) {
  (function() {
    var u = {}.hasOwnProperty;
    function c() {
      for (var f = [], v = 0; v < arguments.length; v++) {
        var h = arguments[v];
        if (h) {
          var m = typeof h;
          if (m === "string" || m === "number")
            f.push(h);
          else if (Array.isArray(h)) {
            if (h.length) {
              var C = c.apply(null, h);
              C && f.push(C);
            }
          } else if (m === "object") {
            if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]")) {
              f.push(h.toString());
              continue;
            }
            for (var b in h)
              u.call(h, b) && h[b] && f.push(b);
          }
        }
      }
      return f.join(" ");
    }
    l.exports ? (c.default = c, l.exports = c) : window.classNames = c;
  })();
})(Aw);
var J_ = Aw.exports;
const de = /* @__PURE__ */ rp(J_);
function aE() {
  return aE = Object.assign ? Object.assign.bind() : function(l) {
    for (var u = 1; u < arguments.length; u++) {
      var c = arguments[u];
      for (var f in c)
        Object.prototype.hasOwnProperty.call(c, f) && (l[f] = c[f]);
    }
    return l;
  }, aE.apply(this, arguments);
}
function jw(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
var eM = function(l, u, c, f, v, h, m, C) {
  if (process.env.NODE_ENV !== "production" && u === void 0)
    throw new Error("invariant requires an error message argument");
  if (!l) {
    var b;
    if (u === void 0)
      b = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var w = [c, f, v, h, m, C], R = 0;
      b = new Error(
        u.replace(/%s/g, function() {
          return w[R++];
        })
      ), b.name = "Invariant Violation";
    }
    throw b.framesToPop = 1, b;
  }
}, tM = eM;
const Em = /* @__PURE__ */ rp(tM);
function $x(l) {
  return "default" + l.charAt(0).toUpperCase() + l.substr(1);
}
function nM(l) {
  var u = rM(l, "string");
  return typeof u == "symbol" ? u : String(u);
}
function rM(l, u) {
  if (typeof l != "object" || l === null)
    return l;
  var c = l[Symbol.toPrimitive];
  if (c !== void 0) {
    var f = c.call(l, u || "default");
    if (typeof f != "object")
      return f;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (u === "string" ? String : Number)(l);
}
function Lw(l, u, c) {
  var f = Et(l !== void 0), v = Hn(u), h = v[0], m = v[1], C = l !== void 0, b = f.current;
  return f.current = C, !C && b && h !== u && m(u), [C ? l : h, Ct(function(w) {
    for (var R = arguments.length, O = new Array(R > 1 ? R - 1 : 0), M = 1; M < R; M++)
      O[M - 1] = arguments[M];
    c && c.apply(void 0, [w].concat(O)), m(w);
  }, [c])];
}
function $o(l, u) {
  return Object.keys(u).reduce(function(c, f) {
    var v, h = c, m = h[$x(f)], C = h[f], b = jw(h, [$x(f), f].map(nM)), w = u[f], R = Lw(C, m, l[w]), O = R[0], M = R[1];
    return aE({}, b, (v = {}, v[f] = O, v[w] = M, v));
  }, l);
}
function iE(l, u) {
  return iE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, v) {
    return f.__proto__ = v, f;
  }, iE(l, u);
}
function aM(l, u) {
  l.prototype = Object.create(u.prototype), l.prototype.constructor = l, iE(l, u);
}
var oE = { exports: {} }, B0 = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var H0, Ux;
function ap() {
  if (Ux)
    return H0;
  Ux = 1;
  var l = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function f(h) {
    if (h == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(h);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var h = new String("abc");
      if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
        return !1;
      for (var m = {}, C = 0; C < 10; C++)
        m["_" + String.fromCharCode(C)] = C;
      var b = Object.getOwnPropertyNames(m).map(function(R) {
        return m[R];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        w[R] = R;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return H0 = v() ? Object.assign : function(h, m) {
    for (var C, b = f(h), w, R = 1; R < arguments.length; R++) {
      C = Object(arguments[R]);
      for (var O in C)
        u.call(C, O) && (b[O] = C[O]);
      if (l) {
        w = l(C);
        for (var M = 0; M < w.length; M++)
          c.call(C, w[M]) && (b[w[M]] = C[w[M]]);
      }
    }
    return b;
  }, H0;
}
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fx;
function iM() {
  return Fx || (Fx = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      var u = on, c = ap(), f = 60103, v = 60106;
      l.Fragment = 60107;
      var h = 60108, m = 60114, C = 60109, b = 60110, w = 60112, R = 60113, O = 60120, M = 60115, _ = 60116, $ = 60121, Y = 60122, z = 60117, te = 60129, J = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var P = Symbol.for;
        f = P("react.element"), v = P("react.portal"), l.Fragment = P("react.fragment"), h = P("react.strict_mode"), m = P("react.profiler"), C = P("react.provider"), b = P("react.context"), w = P("react.forward_ref"), R = P("react.suspense"), O = P("react.suspense_list"), M = P("react.memo"), _ = P("react.lazy"), $ = P("react.block"), Y = P("react.server.block"), z = P("react.fundamental"), P("react.scope"), P("react.opaque.id"), te = P("react.debug_trace_mode"), P("react.offscreen"), J = P("react.legacy_hidden");
      }
      var q = typeof Symbol == "function" && Symbol.iterator, j = "@@iterator";
      function Q(L) {
        if (L === null || typeof L != "object")
          return null;
        var ye = q && L[q] || L[j];
        return typeof ye == "function" ? ye : null;
      }
      var ne = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function ce(L) {
        {
          for (var ye = arguments.length, je = new Array(ye > 1 ? ye - 1 : 0), et = 1; et < ye; et++)
            je[et - 1] = arguments[et];
          Te("error", L, je);
        }
      }
      function Te(L, ye, je) {
        {
          var et = ne.ReactDebugCurrentFrame, xt = et.getStackAddendum();
          xt !== "" && (ye += "%s", je = je.concat([xt]));
          var at = je.map(function(wt) {
            return "" + wt;
          });
          at.unshift("Warning: " + ye), Function.prototype.apply.call(console[L], console, at);
        }
      }
      var Ne = !1;
      function we(L) {
        return !!(typeof L == "string" || typeof L == "function" || L === l.Fragment || L === m || L === te || L === h || L === R || L === O || L === J || Ne || typeof L == "object" && L !== null && (L.$$typeof === _ || L.$$typeof === M || L.$$typeof === C || L.$$typeof === b || L.$$typeof === w || L.$$typeof === z || L.$$typeof === $ || L[0] === Y));
      }
      function De(L, ye, je) {
        var et = ye.displayName || ye.name || "";
        return L.displayName || (et !== "" ? je + "(" + et + ")" : je);
      }
      function Oe(L) {
        return L.displayName || "Context";
      }
      function Me(L) {
        if (L == null)
          return null;
        if (typeof L.tag == "number" && ce("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof L == "function")
          return L.displayName || L.name || null;
        if (typeof L == "string")
          return L;
        switch (L) {
          case l.Fragment:
            return "Fragment";
          case v:
            return "Portal";
          case m:
            return "Profiler";
          case h:
            return "StrictMode";
          case R:
            return "Suspense";
          case O:
            return "SuspenseList";
        }
        if (typeof L == "object")
          switch (L.$$typeof) {
            case b:
              var ye = L;
              return Oe(ye) + ".Consumer";
            case C:
              var je = L;
              return Oe(je._context) + ".Provider";
            case w:
              return De(L, L.render, "ForwardRef");
            case M:
              return Me(L.type);
            case $:
              return Me(L._render);
            case _: {
              var et = L, xt = et._payload, at = et._init;
              try {
                return Me(at(xt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = 0, Be, Ze, Ke, nt, re, W, le;
      function ae() {
      }
      ae.__reactDisabledLog = !0;
      function ge() {
        {
          if (Ae === 0) {
            Be = console.log, Ze = console.info, Ke = console.warn, nt = console.error, re = console.group, W = console.groupCollapsed, le = console.groupEnd;
            var L = {
              configurable: !0,
              enumerable: !0,
              value: ae,
              writable: !0
            };
            Object.defineProperties(console, {
              info: L,
              log: L,
              warn: L,
              error: L,
              group: L,
              groupCollapsed: L,
              groupEnd: L
            });
          }
          Ae++;
        }
      }
      function Ce() {
        {
          if (Ae--, Ae === 0) {
            var L = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: c({}, L, {
                value: Be
              }),
              info: c({}, L, {
                value: Ze
              }),
              warn: c({}, L, {
                value: Ke
              }),
              error: c({}, L, {
                value: nt
              }),
              group: c({}, L, {
                value: re
              }),
              groupCollapsed: c({}, L, {
                value: W
              }),
              groupEnd: c({}, L, {
                value: le
              })
            });
          }
          Ae < 0 && ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ee = ne.ReactCurrentDispatcher, Ie;
      function Re(L, ye, je) {
        {
          if (Ie === void 0)
            try {
              throw Error();
            } catch (xt) {
              var et = xt.stack.trim().match(/\n( *(at )?)/);
              Ie = et && et[1] || "";
            }
          return `
` + Ie + L;
        }
      }
      var Pe = !1, Qe;
      {
        var Ge = typeof WeakMap == "function" ? WeakMap : Map;
        Qe = new Ge();
      }
      function oe(L, ye) {
        if (!L || Pe)
          return "";
        {
          var je = Qe.get(L);
          if (je !== void 0)
            return je;
        }
        var et;
        Pe = !0;
        var xt = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var at;
        at = Ee.current, Ee.current = null, ge();
        try {
          if (ye) {
            var wt = function() {
              throw Error();
            };
            if (Object.defineProperty(wt.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(wt, []);
              } catch (Gn) {
                et = Gn;
              }
              Reflect.construct(L, [], wt);
            } else {
              try {
                wt.call();
              } catch (Gn) {
                et = Gn;
              }
              L.call(wt.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Gn) {
              et = Gn;
            }
            L();
          }
        } catch (Gn) {
          if (Gn && et && typeof Gn.stack == "string") {
            for (var Tt = Gn.stack.split(`
`), Vt = et.stack.split(`
`), Ut = Tt.length - 1, Wt = Vt.length - 1; Ut >= 1 && Wt >= 0 && Tt[Ut] !== Vt[Wt]; )
              Wt--;
            for (; Ut >= 1 && Wt >= 0; Ut--, Wt--)
              if (Tt[Ut] !== Vt[Wt]) {
                if (Ut !== 1 || Wt !== 1)
                  do
                    if (Ut--, Wt--, Wt < 0 || Tt[Ut] !== Vt[Wt]) {
                      var Rr = `
` + Tt[Ut].replace(" at new ", " at ");
                      return typeof L == "function" && Qe.set(L, Rr), Rr;
                    }
                  while (Ut >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          Pe = !1, Ee.current = at, Ce(), Error.prepareStackTrace = xt;
        }
        var mr = L ? L.displayName || L.name : "", ei = mr ? Re(mr) : "";
        return typeof L == "function" && Qe.set(L, ei), ei;
      }
      function kt(L, ye, je) {
        return oe(L, !1);
      }
      function jt(L) {
        var ye = L.prototype;
        return !!(ye && ye.isReactComponent);
      }
      function Je(L, ye, je) {
        if (L == null)
          return "";
        if (typeof L == "function")
          return oe(L, jt(L));
        if (typeof L == "string")
          return Re(L);
        switch (L) {
          case R:
            return Re("Suspense");
          case O:
            return Re("SuspenseList");
        }
        if (typeof L == "object")
          switch (L.$$typeof) {
            case w:
              return kt(L.render);
            case M:
              return Je(L.type, ye, je);
            case $:
              return kt(L._render);
            case _: {
              var et = L, xt = et._payload, at = et._init;
              try {
                return Je(at(xt), ye, je);
              } catch {
              }
            }
          }
        return "";
      }
      var mn = {}, cn = ne.ReactDebugCurrentFrame;
      function Cn(L) {
        if (L) {
          var ye = L._owner, je = Je(L.type, L._source, ye ? ye.type : null);
          cn.setExtraStackFrame(je);
        } else
          cn.setExtraStackFrame(null);
      }
      function vr(L, ye, je, et, xt) {
        {
          var at = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var wt in L)
            if (at(L, wt)) {
              var Tt = void 0;
              try {
                if (typeof L[wt] != "function") {
                  var Vt = Error((et || "React class") + ": " + je + " type `" + wt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[wt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Vt.name = "Invariant Violation", Vt;
                }
                Tt = L[wt](ye, wt, et, je, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                Tt = Ut;
              }
              Tt && !(Tt instanceof Error) && (Cn(xt), ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", et || "React class", je, wt, typeof Tt), Cn(null)), Tt instanceof Error && !(Tt.message in mn) && (mn[Tt.message] = !0, Cn(xt), ce("Failed %s type: %s", je, Tt.message), Cn(null));
            }
        }
      }
      var un = ne.ReactCurrentOwner, xn = Object.prototype.hasOwnProperty, ar = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wn, hn, it;
      it = {};
      function Ot(L) {
        if (xn.call(L, "ref")) {
          var ye = Object.getOwnPropertyDescriptor(L, "ref").get;
          if (ye && ye.isReactWarning)
            return !1;
        }
        return L.ref !== void 0;
      }
      function Mt(L) {
        if (xn.call(L, "key")) {
          var ye = Object.getOwnPropertyDescriptor(L, "key").get;
          if (ye && ye.isReactWarning)
            return !1;
        }
        return L.key !== void 0;
      }
      function Hr(L, ye) {
        if (typeof L.ref == "string" && un.current && ye && un.current.stateNode !== ye) {
          var je = Me(un.current.type);
          it[je] || (ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Me(un.current.type), L.ref), it[je] = !0);
        }
      }
      function Vr(L, ye) {
        {
          var je = function() {
            wn || (wn = !0, ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
          };
          je.isReactWarning = !0, Object.defineProperty(L, "key", {
            get: je,
            configurable: !0
          });
        }
      }
      function xr(L, ye) {
        {
          var je = function() {
            hn || (hn = !0, ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
          };
          je.isReactWarning = !0, Object.defineProperty(L, "ref", {
            get: je,
            configurable: !0
          });
        }
      }
      var _e = function(L, ye, je, et, xt, at, wt) {
        var Tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: f,
          // Built-in properties that belong on the element
          type: L,
          key: ye,
          ref: je,
          props: wt,
          // Record the component responsible for creating this element.
          _owner: at
        };
        return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: et
        }), Object.defineProperty(Tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: xt
        }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
      };
      function ve(L, ye, je, et, xt) {
        {
          var at, wt = {}, Tt = null, Vt = null;
          je !== void 0 && (Tt = "" + je), Mt(ye) && (Tt = "" + ye.key), Ot(ye) && (Vt = ye.ref, Hr(ye, xt));
          for (at in ye)
            xn.call(ye, at) && !ar.hasOwnProperty(at) && (wt[at] = ye[at]);
          if (L && L.defaultProps) {
            var Ut = L.defaultProps;
            for (at in Ut)
              wt[at] === void 0 && (wt[at] = Ut[at]);
          }
          if (Tt || Vt) {
            var Wt = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
            Tt && Vr(wt, Wt), Vt && xr(wt, Wt);
          }
          return _e(L, Tt, Vt, xt, et, un.current, wt);
        }
      }
      var Ue = ne.ReactCurrentOwner, mt = ne.ReactDebugCurrentFrame;
      function Nt(L) {
        if (L) {
          var ye = L._owner, je = Je(L.type, L._source, ye ? ye.type : null);
          mt.setExtraStackFrame(je);
        } else
          mt.setExtraStackFrame(null);
      }
      var Ft;
      Ft = !1;
      function Gt(L) {
        return typeof L == "object" && L !== null && L.$$typeof === f;
      }
      function On() {
        {
          if (Ue.current) {
            var L = Me(Ue.current.type);
            if (L)
              return `

Check the render method of \`` + L + "`.";
          }
          return "";
        }
      }
      function Jt(L) {
        {
          if (L !== void 0) {
            var ye = L.fileName.replace(/^.*[\\\/]/, ""), je = L.lineNumber;
            return `

Check your code at ` + ye + ":" + je + ".";
          }
          return "";
        }
      }
      var wr = {};
      function Fl(L) {
        {
          var ye = On();
          if (!ye) {
            var je = typeof L == "string" ? L : L.displayName || L.name;
            je && (ye = `

Check the top-level render call using <` + je + ">.");
          }
          return ye;
        }
      }
      function ia(L, ye) {
        {
          if (!L._store || L._store.validated || L.key != null)
            return;
          L._store.validated = !0;
          var je = Fl(ye);
          if (wr[je])
            return;
          wr[je] = !0;
          var et = "";
          L && L._owner && L._owner !== Ue.current && (et = " It was passed a child from " + Me(L._owner.type) + "."), Nt(L), ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', je, et), Nt(null);
        }
      }
      function ka(L, ye) {
        {
          if (typeof L != "object")
            return;
          if (Array.isArray(L))
            for (var je = 0; je < L.length; je++) {
              var et = L[je];
              Gt(et) && ia(et, ye);
            }
          else if (Gt(L))
            L._store && (L._store.validated = !0);
          else if (L) {
            var xt = Q(L);
            if (typeof xt == "function" && xt !== L.entries)
              for (var at = xt.call(L), wt; !(wt = at.next()).done; )
                Gt(wt.value) && ia(wt.value, ye);
          }
        }
      }
      function Ja(L) {
        {
          var ye = L.type;
          if (ye == null || typeof ye == "string")
            return;
          var je;
          if (typeof ye == "function")
            je = ye.propTypes;
          else if (typeof ye == "object" && (ye.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          ye.$$typeof === M))
            je = ye.propTypes;
          else
            return;
          if (je) {
            var et = Me(ye);
            vr(je, L.props, "prop", et, L);
          } else if (ye.PropTypes !== void 0 && !Ft) {
            Ft = !0;
            var xt = Me(ye);
            ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
          }
          typeof ye.getDefaultProps == "function" && !ye.getDefaultProps.isReactClassApproved && ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wr(L) {
        {
          for (var ye = Object.keys(L.props), je = 0; je < ye.length; je++) {
            var et = ye[je];
            if (et !== "children" && et !== "key") {
              Nt(L), ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", et), Nt(null);
              break;
            }
          }
          L.ref !== null && (Nt(L), ce("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
        }
      }
      function ir(L, ye, je, et, xt, at) {
        {
          var wt = we(L);
          if (!wt) {
            var Tt = "";
            (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Vt = Jt(xt);
            Vt ? Tt += Vt : Tt += On();
            var Ut;
            L === null ? Ut = "null" : Array.isArray(L) ? Ut = "array" : L !== void 0 && L.$$typeof === f ? (Ut = "<" + (Me(L.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : Ut = typeof L, ce("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ut, Tt);
          }
          var Wt = ve(L, ye, je, xt, at);
          if (Wt == null)
            return Wt;
          if (wt) {
            var Rr = ye.children;
            if (Rr !== void 0)
              if (et)
                if (Array.isArray(Rr)) {
                  for (var mr = 0; mr < Rr.length; mr++)
                    ka(Rr[mr], L);
                  Object.freeze && Object.freeze(Rr);
                } else
                  ce("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ka(Rr, L);
          }
          return L === l.Fragment ? Wr(Wt) : Ja(Wt), Wt;
        }
      }
      function hr(L, ye, je) {
        return ir(L, ye, je, !0);
      }
      function Da(L, ye, je) {
        return ir(L, ye, je, !1);
      }
      var Tr = Da, qi = hr;
      l.jsx = Tr, l.jsxs = qi;
    }();
  }(B0)), B0;
}
var Nc = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zx;
function oM() {
  if (zx)
    return Nc;
  zx = 1, ap();
  var l = on, u = 60103;
  if (Nc.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var c = Symbol.for;
    u = c("react.element"), Nc.Fragment = c("react.fragment");
  }
  var f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = Object.prototype.hasOwnProperty, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(C, b, w) {
    var R, O = {}, M = null, _ = null;
    w !== void 0 && (M = "" + w), b.key !== void 0 && (M = "" + b.key), b.ref !== void 0 && (_ = b.ref);
    for (R in b)
      v.call(b, R) && !h.hasOwnProperty(R) && (O[R] = b[R]);
    if (C && C.defaultProps)
      for (R in b = C.defaultProps, b)
        O[R] === void 0 && (O[R] = b[R]);
    return { $$typeof: u, type: C, key: M, ref: _, props: O, _owner: f.current };
  }
  return Nc.jsx = m, Nc.jsxs = m, Nc;
}
process.env.NODE_ENV === "production" ? oE.exports = oM() : oE.exports = iM();
var A = oE.exports;
const CE = ["xxl", "xl", "lg", "md", "sm", "xs"], xE = "xs", ip = /* @__PURE__ */ Z.createContext({
  prefixes: {},
  breakpoints: CE,
  minBreakpoint: xE
}), {
  Consumer: uU,
  Provider: lM
} = ip;
function sU({
  prefixes: l = {},
  breakpoints: u = CE,
  minBreakpoint: c = xE,
  dir: f,
  children: v
}) {
  const h = Zt(() => ({
    prefixes: {
      ...l
    },
    breakpoints: u,
    minBreakpoint: c,
    dir: f
  }), [l, u, c, f]);
  return /* @__PURE__ */ A.jsx(lM, {
    value: h,
    children: v
  });
}
function be(l, u) {
  const {
    prefixes: c
  } = yt(ip);
  return l || c[u] || u;
}
function wE() {
  const {
    breakpoints: l
  } = yt(ip);
  return l;
}
function TE() {
  const {
    minBreakpoint: l
  } = yt(ip);
  return l;
}
function op() {
  const {
    dir: l
  } = yt(ip);
  return l === "rtl";
}
function Bc(l) {
  return l && l.ownerDocument || document;
}
function uM(l) {
  var u = Bc(l);
  return u && u.defaultView || window;
}
function sM(l, u) {
  return uM(l).getComputedStyle(l, u);
}
var cM = /([A-Z])/g;
function fM(l) {
  return l.replace(cM, "-$1").toLowerCase();
}
var dM = /^ms-/;
function fm(l) {
  return fM(l).replace(dM, "-ms-");
}
var pM = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function vM(l) {
  return !!(l && pM.test(l));
}
function Ao(l, u) {
  var c = "", f = "";
  if (typeof u == "string")
    return l.style.getPropertyValue(fm(u)) || sM(l).getPropertyValue(fm(u));
  Object.keys(u).forEach(function(v) {
    var h = u[v];
    !h && h !== 0 ? l.style.removeProperty(fm(v)) : vM(v) ? f += v + "(" + h + ") " : c += fm(v) + ": " + h + ";";
  }), f && (c += "transform: " + f + ";"), l.style.cssText += ";" + c;
}
var lE = { exports: {} }, V0, Ix;
function RE() {
  if (Ix)
    return V0;
  Ix = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return V0 = l, V0;
}
var W0, Px;
function hM() {
  if (Px)
    return W0;
  Px = 1;
  var l = RE();
  function u() {
  }
  function c() {
  }
  return c.resetWarningCache = u, W0 = function() {
    function f(m, C, b, w, R, O) {
      if (O !== l) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    f.isRequired = f;
    function v() {
      return f;
    }
    var h = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: v,
      element: f,
      elementType: f,
      instanceOf: v,
      node: f,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: c,
      resetWarningCache: u
    };
    return h.PropTypes = h, h;
  }, W0;
}
var dm = { exports: {} }, Bt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bx;
function mM() {
  return Bx || (Bx = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, u = l ? Symbol.for("react.element") : 60103, c = l ? Symbol.for("react.portal") : 60106, f = l ? Symbol.for("react.fragment") : 60107, v = l ? Symbol.for("react.strict_mode") : 60108, h = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, C = l ? Symbol.for("react.context") : 60110, b = l ? Symbol.for("react.async_mode") : 60111, w = l ? Symbol.for("react.concurrent_mode") : 60111, R = l ? Symbol.for("react.forward_ref") : 60112, O = l ? Symbol.for("react.suspense") : 60113, M = l ? Symbol.for("react.suspense_list") : 60120, _ = l ? Symbol.for("react.memo") : 60115, $ = l ? Symbol.for("react.lazy") : 60116, Y = l ? Symbol.for("react.block") : 60121, z = l ? Symbol.for("react.fundamental") : 60117, te = l ? Symbol.for("react.responder") : 60118, J = l ? Symbol.for("react.scope") : 60119;
    function P(oe) {
      return typeof oe == "string" || typeof oe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      oe === f || oe === w || oe === h || oe === v || oe === O || oe === M || typeof oe == "object" && oe !== null && (oe.$$typeof === $ || oe.$$typeof === _ || oe.$$typeof === m || oe.$$typeof === C || oe.$$typeof === R || oe.$$typeof === z || oe.$$typeof === te || oe.$$typeof === J || oe.$$typeof === Y);
    }
    function q(oe) {
      if (typeof oe == "object" && oe !== null) {
        var kt = oe.$$typeof;
        switch (kt) {
          case u:
            var jt = oe.type;
            switch (jt) {
              case b:
              case w:
              case f:
              case h:
              case v:
              case O:
                return jt;
              default:
                var Je = jt && jt.$$typeof;
                switch (Je) {
                  case C:
                  case R:
                  case $:
                  case _:
                  case m:
                    return Je;
                  default:
                    return kt;
                }
            }
          case c:
            return kt;
        }
      }
    }
    var j = b, Q = w, ne = C, ce = m, Te = u, Ne = R, we = f, De = $, Oe = _, Me = c, Ae = h, Be = v, Ze = O, Ke = !1;
    function nt(oe) {
      return Ke || (Ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(oe) || q(oe) === b;
    }
    function re(oe) {
      return q(oe) === w;
    }
    function W(oe) {
      return q(oe) === C;
    }
    function le(oe) {
      return q(oe) === m;
    }
    function ae(oe) {
      return typeof oe == "object" && oe !== null && oe.$$typeof === u;
    }
    function ge(oe) {
      return q(oe) === R;
    }
    function Ce(oe) {
      return q(oe) === f;
    }
    function Ee(oe) {
      return q(oe) === $;
    }
    function Ie(oe) {
      return q(oe) === _;
    }
    function Re(oe) {
      return q(oe) === c;
    }
    function Pe(oe) {
      return q(oe) === h;
    }
    function Qe(oe) {
      return q(oe) === v;
    }
    function Ge(oe) {
      return q(oe) === O;
    }
    Bt.AsyncMode = j, Bt.ConcurrentMode = Q, Bt.ContextConsumer = ne, Bt.ContextProvider = ce, Bt.Element = Te, Bt.ForwardRef = Ne, Bt.Fragment = we, Bt.Lazy = De, Bt.Memo = Oe, Bt.Portal = Me, Bt.Profiler = Ae, Bt.StrictMode = Be, Bt.Suspense = Ze, Bt.isAsyncMode = nt, Bt.isConcurrentMode = re, Bt.isContextConsumer = W, Bt.isContextProvider = le, Bt.isElement = ae, Bt.isForwardRef = ge, Bt.isFragment = Ce, Bt.isLazy = Ee, Bt.isMemo = Ie, Bt.isPortal = Re, Bt.isProfiler = Pe, Bt.isStrictMode = Qe, Bt.isSuspense = Ge, Bt.isValidElementType = P, Bt.typeOf = q;
  }()), Bt;
}
var Ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hx;
function yM() {
  if (Hx)
    return Ht;
  Hx = 1;
  var l = typeof Symbol == "function" && Symbol.for, u = l ? Symbol.for("react.element") : 60103, c = l ? Symbol.for("react.portal") : 60106, f = l ? Symbol.for("react.fragment") : 60107, v = l ? Symbol.for("react.strict_mode") : 60108, h = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, C = l ? Symbol.for("react.context") : 60110, b = l ? Symbol.for("react.async_mode") : 60111, w = l ? Symbol.for("react.concurrent_mode") : 60111, R = l ? Symbol.for("react.forward_ref") : 60112, O = l ? Symbol.for("react.suspense") : 60113, M = l ? Symbol.for("react.suspense_list") : 60120, _ = l ? Symbol.for("react.memo") : 60115, $ = l ? Symbol.for("react.lazy") : 60116, Y = l ? Symbol.for("react.block") : 60121, z = l ? Symbol.for("react.fundamental") : 60117, te = l ? Symbol.for("react.responder") : 60118, J = l ? Symbol.for("react.scope") : 60119;
  function P(j) {
    if (typeof j == "object" && j !== null) {
      var Q = j.$$typeof;
      switch (Q) {
        case u:
          switch (j = j.type, j) {
            case b:
            case w:
            case f:
            case h:
            case v:
            case O:
              return j;
            default:
              switch (j = j && j.$$typeof, j) {
                case C:
                case R:
                case $:
                case _:
                case m:
                  return j;
                default:
                  return Q;
              }
          }
        case c:
          return Q;
      }
    }
  }
  function q(j) {
    return P(j) === w;
  }
  return Ht.AsyncMode = b, Ht.ConcurrentMode = w, Ht.ContextConsumer = C, Ht.ContextProvider = m, Ht.Element = u, Ht.ForwardRef = R, Ht.Fragment = f, Ht.Lazy = $, Ht.Memo = _, Ht.Portal = c, Ht.Profiler = h, Ht.StrictMode = v, Ht.Suspense = O, Ht.isAsyncMode = function(j) {
    return q(j) || P(j) === b;
  }, Ht.isConcurrentMode = q, Ht.isContextConsumer = function(j) {
    return P(j) === C;
  }, Ht.isContextProvider = function(j) {
    return P(j) === m;
  }, Ht.isElement = function(j) {
    return typeof j == "object" && j !== null && j.$$typeof === u;
  }, Ht.isForwardRef = function(j) {
    return P(j) === R;
  }, Ht.isFragment = function(j) {
    return P(j) === f;
  }, Ht.isLazy = function(j) {
    return P(j) === $;
  }, Ht.isMemo = function(j) {
    return P(j) === _;
  }, Ht.isPortal = function(j) {
    return P(j) === c;
  }, Ht.isProfiler = function(j) {
    return P(j) === h;
  }, Ht.isStrictMode = function(j) {
    return P(j) === v;
  }, Ht.isSuspense = function(j) {
    return P(j) === O;
  }, Ht.isValidElementType = function(j) {
    return typeof j == "string" || typeof j == "function" || j === f || j === w || j === h || j === v || j === O || j === M || typeof j == "object" && j !== null && (j.$$typeof === $ || j.$$typeof === _ || j.$$typeof === m || j.$$typeof === C || j.$$typeof === R || j.$$typeof === z || j.$$typeof === te || j.$$typeof === J || j.$$typeof === Y);
  }, Ht.typeOf = P, Ht;
}
var Vx;
function $w() {
  return Vx || (Vx = 1, process.env.NODE_ENV === "production" ? dm.exports = yM() : dm.exports = mM()), dm.exports;
}
var Y0, Wx;
function Uw() {
  return Wx || (Wx = 1, Y0 = Function.call.bind(Object.prototype.hasOwnProperty)), Y0;
}
var q0, Yx;
function gM() {
  if (Yx)
    return q0;
  Yx = 1;
  var l = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var u = RE(), c = {}, f = Uw();
    l = function(h) {
      var m = "Warning: " + h;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function v(h, m, C, b, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in h)
        if (f(h, R)) {
          var O;
          try {
            if (typeof h[R] != "function") {
              var M = Error(
                (b || "React class") + ": " + C + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            O = h[R](m, R, b, C, null, u);
          } catch ($) {
            O = $;
          }
          if (O && !(O instanceof Error) && l(
            (b || "React class") + ": type specification of " + C + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof O + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), O instanceof Error && !(O.message in c)) {
            c[O.message] = !0;
            var _ = w ? w() : "";
            l(
              "Failed " + C + " type: " + O.message + (_ ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, q0 = v, q0;
}
var G0, qx;
function EM() {
  if (qx)
    return G0;
  qx = 1;
  var l = $w(), u = ap(), c = RE(), f = Uw(), v = gM(), h = function() {
  };
  process.env.NODE_ENV !== "production" && (h = function(C) {
    var b = "Warning: " + C;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return G0 = function(C, b) {
    var w = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function O(re) {
      var W = re && (w && re[w] || re[R]);
      if (typeof W == "function")
        return W;
    }
    var M = "<<anonymous>>", _ = {
      array: te("array"),
      bigint: te("bigint"),
      bool: te("boolean"),
      func: te("function"),
      number: te("number"),
      object: te("object"),
      string: te("string"),
      symbol: te("symbol"),
      any: J(),
      arrayOf: P,
      element: q(),
      elementType: j(),
      instanceOf: Q,
      node: Ne(),
      objectOf: ce,
      oneOf: ne,
      oneOfType: Te,
      shape: De,
      exact: Oe
    };
    function $(re, W) {
      return re === W ? re !== 0 || 1 / re === 1 / W : re !== re && W !== W;
    }
    function Y(re, W) {
      this.message = re, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    Y.prototype = Error.prototype;
    function z(re) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, le = 0;
      function ae(Ce, Ee, Ie, Re, Pe, Qe, Ge) {
        if (Re = Re || M, Qe = Qe || Ie, Ge !== c) {
          if (b) {
            var oe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw oe.name = "Invariant Violation", oe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var kt = Re + ":" + Ie;
            !W[kt] && // Avoid spamming the console because they are often not actionable except for lib authors
            le < 3 && (h(
              "You are manually calling a React.PropTypes validation function for the `" + Qe + "` prop on `" + Re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[kt] = !0, le++);
          }
        }
        return Ee[Ie] == null ? Ce ? Ee[Ie] === null ? new Y("The " + Pe + " `" + Qe + "` is marked as required " + ("in `" + Re + "`, but its value is `null`.")) : new Y("The " + Pe + " `" + Qe + "` is marked as required in " + ("`" + Re + "`, but its value is `undefined`.")) : null : re(Ee, Ie, Re, Pe, Qe);
      }
      var ge = ae.bind(null, !1);
      return ge.isRequired = ae.bind(null, !0), ge;
    }
    function te(re) {
      function W(le, ae, ge, Ce, Ee, Ie) {
        var Re = le[ae], Pe = Be(Re);
        if (Pe !== re) {
          var Qe = Ze(Re);
          return new Y(
            "Invalid " + Ce + " `" + Ee + "` of type " + ("`" + Qe + "` supplied to `" + ge + "`, expected ") + ("`" + re + "`."),
            { expectedType: re }
          );
        }
        return null;
      }
      return z(W);
    }
    function J() {
      return z(m);
    }
    function P(re) {
      function W(le, ae, ge, Ce, Ee) {
        if (typeof re != "function")
          return new Y("Property `" + Ee + "` of component `" + ge + "` has invalid PropType notation inside arrayOf.");
        var Ie = le[ae];
        if (!Array.isArray(Ie)) {
          var Re = Be(Ie);
          return new Y("Invalid " + Ce + " `" + Ee + "` of type " + ("`" + Re + "` supplied to `" + ge + "`, expected an array."));
        }
        for (var Pe = 0; Pe < Ie.length; Pe++) {
          var Qe = re(Ie, Pe, ge, Ce, Ee + "[" + Pe + "]", c);
          if (Qe instanceof Error)
            return Qe;
        }
        return null;
      }
      return z(W);
    }
    function q() {
      function re(W, le, ae, ge, Ce) {
        var Ee = W[le];
        if (!C(Ee)) {
          var Ie = Be(Ee);
          return new Y("Invalid " + ge + " `" + Ce + "` of type " + ("`" + Ie + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(re);
    }
    function j() {
      function re(W, le, ae, ge, Ce) {
        var Ee = W[le];
        if (!l.isValidElementType(Ee)) {
          var Ie = Be(Ee);
          return new Y("Invalid " + ge + " `" + Ce + "` of type " + ("`" + Ie + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(re);
    }
    function Q(re) {
      function W(le, ae, ge, Ce, Ee) {
        if (!(le[ae] instanceof re)) {
          var Ie = re.name || M, Re = nt(le[ae]);
          return new Y("Invalid " + Ce + " `" + Ee + "` of type " + ("`" + Re + "` supplied to `" + ge + "`, expected ") + ("instance of `" + Ie + "`."));
        }
        return null;
      }
      return z(W);
    }
    function ne(re) {
      if (!Array.isArray(re))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? h(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : h("Invalid argument supplied to oneOf, expected an array.")), m;
      function W(le, ae, ge, Ce, Ee) {
        for (var Ie = le[ae], Re = 0; Re < re.length; Re++)
          if ($(Ie, re[Re]))
            return null;
        var Pe = JSON.stringify(re, function(Ge, oe) {
          var kt = Ze(oe);
          return kt === "symbol" ? String(oe) : oe;
        });
        return new Y("Invalid " + Ce + " `" + Ee + "` of value `" + String(Ie) + "` " + ("supplied to `" + ge + "`, expected one of " + Pe + "."));
      }
      return z(W);
    }
    function ce(re) {
      function W(le, ae, ge, Ce, Ee) {
        if (typeof re != "function")
          return new Y("Property `" + Ee + "` of component `" + ge + "` has invalid PropType notation inside objectOf.");
        var Ie = le[ae], Re = Be(Ie);
        if (Re !== "object")
          return new Y("Invalid " + Ce + " `" + Ee + "` of type " + ("`" + Re + "` supplied to `" + ge + "`, expected an object."));
        for (var Pe in Ie)
          if (f(Ie, Pe)) {
            var Qe = re(Ie, Pe, ge, Ce, Ee + "." + Pe, c);
            if (Qe instanceof Error)
              return Qe;
          }
        return null;
      }
      return z(W);
    }
    function Te(re) {
      if (!Array.isArray(re))
        return process.env.NODE_ENV !== "production" && h("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var W = 0; W < re.length; W++) {
        var le = re[W];
        if (typeof le != "function")
          return h(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ke(le) + " at index " + W + "."
          ), m;
      }
      function ae(ge, Ce, Ee, Ie, Re) {
        for (var Pe = [], Qe = 0; Qe < re.length; Qe++) {
          var Ge = re[Qe], oe = Ge(ge, Ce, Ee, Ie, Re, c);
          if (oe == null)
            return null;
          oe.data && f(oe.data, "expectedType") && Pe.push(oe.data.expectedType);
        }
        var kt = Pe.length > 0 ? ", expected one of type [" + Pe.join(", ") + "]" : "";
        return new Y("Invalid " + Ie + " `" + Re + "` supplied to " + ("`" + Ee + "`" + kt + "."));
      }
      return z(ae);
    }
    function Ne() {
      function re(W, le, ae, ge, Ce) {
        return Me(W[le]) ? null : new Y("Invalid " + ge + " `" + Ce + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return z(re);
    }
    function we(re, W, le, ae, ge) {
      return new Y(
        (re || "React class") + ": " + W + " type `" + le + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ge + "`."
      );
    }
    function De(re) {
      function W(le, ae, ge, Ce, Ee) {
        var Ie = le[ae], Re = Be(Ie);
        if (Re !== "object")
          return new Y("Invalid " + Ce + " `" + Ee + "` of type `" + Re + "` " + ("supplied to `" + ge + "`, expected `object`."));
        for (var Pe in re) {
          var Qe = re[Pe];
          if (typeof Qe != "function")
            return we(ge, Ce, Ee, Pe, Ze(Qe));
          var Ge = Qe(Ie, Pe, ge, Ce, Ee + "." + Pe, c);
          if (Ge)
            return Ge;
        }
        return null;
      }
      return z(W);
    }
    function Oe(re) {
      function W(le, ae, ge, Ce, Ee) {
        var Ie = le[ae], Re = Be(Ie);
        if (Re !== "object")
          return new Y("Invalid " + Ce + " `" + Ee + "` of type `" + Re + "` " + ("supplied to `" + ge + "`, expected `object`."));
        var Pe = u({}, le[ae], re);
        for (var Qe in Pe) {
          var Ge = re[Qe];
          if (f(re, Qe) && typeof Ge != "function")
            return we(ge, Ce, Ee, Qe, Ze(Ge));
          if (!Ge)
            return new Y(
              "Invalid " + Ce + " `" + Ee + "` key `" + Qe + "` supplied to `" + ge + "`.\nBad object: " + JSON.stringify(le[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(re), null, "  ")
            );
          var oe = Ge(Ie, Qe, ge, Ce, Ee + "." + Qe, c);
          if (oe)
            return oe;
        }
        return null;
      }
      return z(W);
    }
    function Me(re) {
      switch (typeof re) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !re;
        case "object":
          if (Array.isArray(re))
            return re.every(Me);
          if (re === null || C(re))
            return !0;
          var W = O(re);
          if (W) {
            var le = W.call(re), ae;
            if (W !== re.entries) {
              for (; !(ae = le.next()).done; )
                if (!Me(ae.value))
                  return !1;
            } else
              for (; !(ae = le.next()).done; ) {
                var ge = ae.value;
                if (ge && !Me(ge[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ae(re, W) {
      return re === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function Be(re) {
      var W = typeof re;
      return Array.isArray(re) ? "array" : re instanceof RegExp ? "object" : Ae(W, re) ? "symbol" : W;
    }
    function Ze(re) {
      if (typeof re > "u" || re === null)
        return "" + re;
      var W = Be(re);
      if (W === "object") {
        if (re instanceof Date)
          return "date";
        if (re instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function Ke(re) {
      var W = Ze(re);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function nt(re) {
      return !re.constructor || !re.constructor.name ? M : re.constructor.name;
    }
    return _.checkPropTypes = v, _.resetWarningCache = v.resetWarningCache, _.PropTypes = _, _;
  }, G0;
}
if (process.env.NODE_ENV !== "production") {
  var SM = $w(), bM = !0;
  lE.exports = EM()(SM.isElement, bM);
} else
  lE.exports = hM()();
var CM = lE.exports;
const xe = /* @__PURE__ */ rp(CM);
var uE = { exports: {} }, na = {}, pm = { exports: {} }, K0 = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gx;
function xM() {
  return Gx || (Gx = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      var u = !1, c = !1, f, v, h, m, C = typeof performance == "object" && typeof performance.now == "function";
      if (C) {
        var b = performance;
        l.unstable_now = function() {
          return b.now();
        };
      } else {
        var w = Date, R = w.now();
        l.unstable_now = function() {
          return w.now() - R;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window > "u" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var O = null, M = null, _ = function() {
          if (O !== null)
            try {
              var _e = l.unstable_now(), ve = !0;
              O(ve, _e), O = null;
            } catch (Ue) {
              throw setTimeout(_, 0), Ue;
            }
        };
        f = function(_e) {
          O !== null ? setTimeout(f, 0, _e) : (O = _e, setTimeout(_, 0));
        }, v = function(_e, ve) {
          M = setTimeout(_e, ve);
        }, h = function() {
          clearTimeout(M);
        }, l.unstable_shouldYield = function() {
          return !1;
        }, m = l.unstable_forceFrameRate = function() {
        };
      } else {
        var $ = window.setTimeout, Y = window.clearTimeout;
        if (typeof console < "u") {
          var z = window.requestAnimationFrame, te = window.cancelAnimationFrame;
          typeof z != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof te != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var J = !1, P = null, q = -1, j = 5, Q = 0;
        l.unstable_shouldYield = function() {
          return l.unstable_now() >= Q;
        }, m = function() {
        }, l.unstable_forceFrameRate = function(_e) {
          if (_e < 0 || _e > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          _e > 0 ? j = Math.floor(1e3 / _e) : j = 5;
        };
        var ne = function() {
          if (P !== null) {
            var _e = l.unstable_now();
            Q = _e + j;
            var ve = !0;
            try {
              var Ue = P(ve, _e);
              Ue ? Te.postMessage(null) : (J = !1, P = null);
            } catch (mt) {
              throw Te.postMessage(null), mt;
            }
          } else
            J = !1;
        }, ce = new MessageChannel(), Te = ce.port2;
        ce.port1.onmessage = ne, f = function(_e) {
          P = _e, J || (J = !0, Te.postMessage(null));
        }, v = function(_e, ve) {
          q = $(function() {
            _e(l.unstable_now());
          }, ve);
        }, h = function() {
          Y(q), q = -1;
        };
      }
      function Ne(_e, ve) {
        var Ue = _e.length;
        _e.push(ve), Oe(_e, ve, Ue);
      }
      function we(_e) {
        var ve = _e[0];
        return ve === void 0 ? null : ve;
      }
      function De(_e) {
        var ve = _e[0];
        if (ve !== void 0) {
          var Ue = _e.pop();
          return Ue !== ve && (_e[0] = Ue, Me(_e, Ue, 0)), ve;
        } else
          return null;
      }
      function Oe(_e, ve, Ue) {
        for (var mt = Ue; ; ) {
          var Nt = mt - 1 >>> 1, Ft = _e[Nt];
          if (Ft !== void 0 && Ae(Ft, ve) > 0)
            _e[Nt] = ve, _e[mt] = Ft, mt = Nt;
          else
            return;
        }
      }
      function Me(_e, ve, Ue) {
        for (var mt = Ue, Nt = _e.length; mt < Nt; ) {
          var Ft = (mt + 1) * 2 - 1, Gt = _e[Ft], On = Ft + 1, Jt = _e[On];
          if (Gt !== void 0 && Ae(Gt, ve) < 0)
            Jt !== void 0 && Ae(Jt, Gt) < 0 ? (_e[mt] = Jt, _e[On] = ve, mt = On) : (_e[mt] = Gt, _e[Ft] = ve, mt = Ft);
          else if (Jt !== void 0 && Ae(Jt, ve) < 0)
            _e[mt] = Jt, _e[On] = ve, mt = On;
          else
            return;
        }
      }
      function Ae(_e, ve) {
        var Ue = _e.sortIndex - ve.sortIndex;
        return Ue !== 0 ? Ue : _e.id - ve.id;
      }
      var Be = 1, Ze = 2, Ke = 3, nt = 4, re = 5;
      function W(_e, ve) {
      }
      var le = 1073741823, ae = -1, ge = 250, Ce = 5e3, Ee = 1e4, Ie = le, Re = [], Pe = [], Qe = 1, Ge = null, oe = Ke, kt = !1, jt = !1, Je = !1;
      function mn(_e) {
        for (var ve = we(Pe); ve !== null; ) {
          if (ve.callback === null)
            De(Pe);
          else if (ve.startTime <= _e)
            De(Pe), ve.sortIndex = ve.expirationTime, Ne(Re, ve);
          else
            return;
          ve = we(Pe);
        }
      }
      function cn(_e) {
        if (Je = !1, mn(_e), !jt)
          if (we(Re) !== null)
            jt = !0, f(Cn);
          else {
            var ve = we(Pe);
            ve !== null && v(cn, ve.startTime - _e);
          }
      }
      function Cn(_e, ve) {
        jt = !1, Je && (Je = !1, h()), kt = !0;
        var Ue = oe;
        try {
          var mt;
          if (!c)
            return vr(_e, ve);
        } finally {
          Ge = null, oe = Ue, kt = !1;
        }
      }
      function vr(_e, ve) {
        var Ue = ve;
        for (mn(Ue), Ge = we(Re); Ge !== null && !u && !(Ge.expirationTime > Ue && (!_e || l.unstable_shouldYield())); ) {
          var mt = Ge.callback;
          if (typeof mt == "function") {
            Ge.callback = null, oe = Ge.priorityLevel;
            var Nt = Ge.expirationTime <= Ue, Ft = mt(Nt);
            Ue = l.unstable_now(), typeof Ft == "function" ? Ge.callback = Ft : Ge === we(Re) && De(Re), mn(Ue);
          } else
            De(Re);
          Ge = we(Re);
        }
        if (Ge !== null)
          return !0;
        var Gt = we(Pe);
        return Gt !== null && v(cn, Gt.startTime - Ue), !1;
      }
      function un(_e, ve) {
        switch (_e) {
          case Be:
          case Ze:
          case Ke:
          case nt:
          case re:
            break;
          default:
            _e = Ke;
        }
        var Ue = oe;
        oe = _e;
        try {
          return ve();
        } finally {
          oe = Ue;
        }
      }
      function xn(_e) {
        var ve;
        switch (oe) {
          case Be:
          case Ze:
          case Ke:
            ve = Ke;
            break;
          default:
            ve = oe;
            break;
        }
        var Ue = oe;
        oe = ve;
        try {
          return _e();
        } finally {
          oe = Ue;
        }
      }
      function ar(_e) {
        var ve = oe;
        return function() {
          var Ue = oe;
          oe = ve;
          try {
            return _e.apply(this, arguments);
          } finally {
            oe = Ue;
          }
        };
      }
      function wn(_e, ve, Ue) {
        var mt = l.unstable_now(), Nt;
        if (typeof Ue == "object" && Ue !== null) {
          var Ft = Ue.delay;
          typeof Ft == "number" && Ft > 0 ? Nt = mt + Ft : Nt = mt;
        } else
          Nt = mt;
        var Gt;
        switch (_e) {
          case Be:
            Gt = ae;
            break;
          case Ze:
            Gt = ge;
            break;
          case re:
            Gt = Ie;
            break;
          case nt:
            Gt = Ee;
            break;
          case Ke:
          default:
            Gt = Ce;
            break;
        }
        var On = Nt + Gt, Jt = {
          id: Qe++,
          callback: ve,
          priorityLevel: _e,
          startTime: Nt,
          expirationTime: On,
          sortIndex: -1
        };
        return Nt > mt ? (Jt.sortIndex = Nt, Ne(Pe, Jt), we(Re) === null && Jt === we(Pe) && (Je ? h() : Je = !0, v(cn, Nt - mt))) : (Jt.sortIndex = On, Ne(Re, Jt), !jt && !kt && (jt = !0, f(Cn))), Jt;
      }
      function hn() {
      }
      function it() {
        !jt && !kt && (jt = !0, f(Cn));
      }
      function Ot() {
        return we(Re);
      }
      function Mt(_e) {
        _e.callback = null;
      }
      function Hr() {
        return oe;
      }
      var Vr = m, xr = null;
      l.unstable_IdlePriority = re, l.unstable_ImmediatePriority = Be, l.unstable_LowPriority = nt, l.unstable_NormalPriority = Ke, l.unstable_Profiling = xr, l.unstable_UserBlockingPriority = Ze, l.unstable_cancelCallback = Mt, l.unstable_continueExecution = it, l.unstable_getCurrentPriorityLevel = Hr, l.unstable_getFirstCallbackNode = Ot, l.unstable_next = xn, l.unstable_pauseExecution = hn, l.unstable_requestPaint = Vr, l.unstable_runWithPriority = un, l.unstable_scheduleCallback = wn, l.unstable_wrapCallback = ar;
    }();
  }(K0)), K0;
}
var Q0 = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function wM() {
  return Kx || (Kx = 1, function(l) {
    var u, c, f, v;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      l.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, C = m.now();
      l.unstable_now = function() {
        return m.now() - C;
      };
    }
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var b = null, w = null, R = function() {
        if (b !== null)
          try {
            var W = l.unstable_now();
            b(!0, W), b = null;
          } catch (le) {
            throw setTimeout(R, 0), le;
          }
      };
      u = function(W) {
        b !== null ? setTimeout(u, 0, W) : (b = W, setTimeout(R, 0));
      }, c = function(W, le) {
        w = setTimeout(W, le);
      }, f = function() {
        clearTimeout(w);
      }, l.unstable_shouldYield = function() {
        return !1;
      }, v = l.unstable_forceFrameRate = function() {
      };
    } else {
      var O = window.setTimeout, M = window.clearTimeout;
      if (typeof console < "u") {
        var _ = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof _ != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var $ = !1, Y = null, z = -1, te = 5, J = 0;
      l.unstable_shouldYield = function() {
        return l.unstable_now() >= J;
      }, v = function() {
      }, l.unstable_forceFrameRate = function(W) {
        0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < W ? Math.floor(1e3 / W) : 5;
      };
      var P = new MessageChannel(), q = P.port2;
      P.port1.onmessage = function() {
        if (Y !== null) {
          var W = l.unstable_now();
          J = W + te;
          try {
            Y(!0, W) ? q.postMessage(null) : ($ = !1, Y = null);
          } catch (le) {
            throw q.postMessage(null), le;
          }
        } else
          $ = !1;
      }, u = function(W) {
        Y = W, $ || ($ = !0, q.postMessage(null));
      }, c = function(W, le) {
        z = O(function() {
          W(l.unstable_now());
        }, le);
      }, f = function() {
        M(z), z = -1;
      };
    }
    function j(W, le) {
      var ae = W.length;
      W.push(le);
      e:
        for (; ; ) {
          var ge = ae - 1 >>> 1, Ce = W[ge];
          if (Ce !== void 0 && 0 < ce(Ce, le))
            W[ge] = le, W[ae] = Ce, ae = ge;
          else
            break e;
        }
    }
    function Q(W) {
      return W = W[0], W === void 0 ? null : W;
    }
    function ne(W) {
      var le = W[0];
      if (le !== void 0) {
        var ae = W.pop();
        if (ae !== le) {
          W[0] = ae;
          e:
            for (var ge = 0, Ce = W.length; ge < Ce; ) {
              var Ee = 2 * (ge + 1) - 1, Ie = W[Ee], Re = Ee + 1, Pe = W[Re];
              if (Ie !== void 0 && 0 > ce(Ie, ae))
                Pe !== void 0 && 0 > ce(Pe, Ie) ? (W[ge] = Pe, W[Re] = ae, ge = Re) : (W[ge] = Ie, W[Ee] = ae, ge = Ee);
              else if (Pe !== void 0 && 0 > ce(Pe, ae))
                W[ge] = Pe, W[Re] = ae, ge = Re;
              else
                break e;
            }
        }
        return le;
      }
      return null;
    }
    function ce(W, le) {
      var ae = W.sortIndex - le.sortIndex;
      return ae !== 0 ? ae : W.id - le.id;
    }
    var Te = [], Ne = [], we = 1, De = null, Oe = 3, Me = !1, Ae = !1, Be = !1;
    function Ze(W) {
      for (var le = Q(Ne); le !== null; ) {
        if (le.callback === null)
          ne(Ne);
        else if (le.startTime <= W)
          ne(Ne), le.sortIndex = le.expirationTime, j(Te, le);
        else
          break;
        le = Q(Ne);
      }
    }
    function Ke(W) {
      if (Be = !1, Ze(W), !Ae)
        if (Q(Te) !== null)
          Ae = !0, u(nt);
        else {
          var le = Q(Ne);
          le !== null && c(Ke, le.startTime - W);
        }
    }
    function nt(W, le) {
      Ae = !1, Be && (Be = !1, f()), Me = !0;
      var ae = Oe;
      try {
        for (Ze(le), De = Q(Te); De !== null && (!(De.expirationTime > le) || W && !l.unstable_shouldYield()); ) {
          var ge = De.callback;
          if (typeof ge == "function") {
            De.callback = null, Oe = De.priorityLevel;
            var Ce = ge(De.expirationTime <= le);
            le = l.unstable_now(), typeof Ce == "function" ? De.callback = Ce : De === Q(Te) && ne(Te), Ze(le);
          } else
            ne(Te);
          De = Q(Te);
        }
        if (De !== null)
          var Ee = !0;
        else {
          var Ie = Q(Ne);
          Ie !== null && c(Ke, Ie.startTime - le), Ee = !1;
        }
        return Ee;
      } finally {
        De = null, Oe = ae, Me = !1;
      }
    }
    var re = v;
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, l.unstable_continueExecution = function() {
      Ae || Me || (Ae = !0, u(nt));
    }, l.unstable_getCurrentPriorityLevel = function() {
      return Oe;
    }, l.unstable_getFirstCallbackNode = function() {
      return Q(Te);
    }, l.unstable_next = function(W) {
      switch (Oe) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = Oe;
      }
      var ae = Oe;
      Oe = le;
      try {
        return W();
      } finally {
        Oe = ae;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = re, l.unstable_runWithPriority = function(W, le) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var ae = Oe;
      Oe = W;
      try {
        return le();
      } finally {
        Oe = ae;
      }
    }, l.unstable_scheduleCallback = function(W, le, ae) {
      var ge = l.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? ge + ae : ge) : ae = ge, W) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = ae + Ce, W = { id: we++, callback: le, priorityLevel: W, startTime: ae, expirationTime: Ce, sortIndex: -1 }, ae > ge ? (W.sortIndex = ae, j(Ne, W), Q(Te) === null && W === Q(Ne) && (Be ? f() : Be = !0, c(Ke, ae - ge))) : (W.sortIndex = Ce, j(Te, W), Ae || Me || (Ae = !0, u(nt))), W;
    }, l.unstable_wrapCallback = function(W) {
      var le = Oe;
      return function() {
        var ae = Oe;
        Oe = le;
        try {
          return W.apply(this, arguments);
        } finally {
          Oe = ae;
        }
      };
    };
  }(Q0)), Q0;
}
var Qx;
function Fw() {
  return Qx || (Qx = 1, process.env.NODE_ENV === "production" ? pm.exports = wM() : pm.exports = xM()), pm.exports;
}
var vm = { exports: {} }, X0 = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xx;
function TM() {
  return Xx || (Xx = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      var u = 0, c = 0, f = 0;
      l.__interactionsRef = null, l.__subscriberRef = null, l.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, l.__subscriberRef = {
        current: null
      };
      function v(J) {
        var P = l.__interactionsRef.current;
        l.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return J();
        } finally {
          l.__interactionsRef.current = P;
        }
      }
      function h() {
        return l.__interactionsRef.current;
      }
      function m() {
        return ++f;
      }
      function C(J, P, q) {
        var j = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : u, Q = {
          __count: 1,
          id: c++,
          name: J,
          timestamp: P
        }, ne = l.__interactionsRef.current, ce = new Set(ne);
        ce.add(Q), l.__interactionsRef.current = ce;
        var Te = l.__subscriberRef.current, Ne;
        try {
          Te !== null && Te.onInteractionTraced(Q);
        } finally {
          try {
            Te !== null && Te.onWorkStarted(ce, j);
          } finally {
            try {
              Ne = q();
            } finally {
              l.__interactionsRef.current = ne;
              try {
                Te !== null && Te.onWorkStopped(ce, j);
              } finally {
                Q.__count--, Te !== null && Q.__count === 0 && Te.onInteractionScheduledWorkCompleted(Q);
              }
            }
          }
        }
        return Ne;
      }
      function b(J) {
        var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, q = l.__interactionsRef.current, j = l.__subscriberRef.current;
        j !== null && j.onWorkScheduled(q, P), q.forEach(function(ce) {
          ce.__count++;
        });
        var Q = !1;
        function ne() {
          var ce = l.__interactionsRef.current;
          l.__interactionsRef.current = q, j = l.__subscriberRef.current;
          try {
            var Te;
            try {
              j !== null && j.onWorkStarted(q, P);
            } finally {
              try {
                Te = J.apply(void 0, arguments);
              } finally {
                l.__interactionsRef.current = ce, j !== null && j.onWorkStopped(q, P);
              }
            }
            return Te;
          } finally {
            Q || (Q = !0, q.forEach(function(Ne) {
              Ne.__count--, j !== null && Ne.__count === 0 && j.onInteractionScheduledWorkCompleted(Ne);
            }));
          }
        }
        return ne.cancel = function() {
          j = l.__subscriberRef.current;
          try {
            j !== null && j.onWorkCanceled(q, P);
          } finally {
            q.forEach(function(Te) {
              Te.__count--, j && Te.__count === 0 && j.onInteractionScheduledWorkCompleted(Te);
            });
          }
        }, ne;
      }
      var w = null;
      w = /* @__PURE__ */ new Set();
      function R(J) {
        w.add(J), w.size === 1 && (l.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: _,
          onInteractionTraced: M,
          onWorkCanceled: te,
          onWorkScheduled: $,
          onWorkStarted: Y,
          onWorkStopped: z
        });
      }
      function O(J) {
        w.delete(J), w.size === 0 && (l.__subscriberRef.current = null);
      }
      function M(J) {
        var P = !1, q = null;
        if (w.forEach(function(j) {
          try {
            j.onInteractionTraced(J);
          } catch (Q) {
            P || (P = !0, q = Q);
          }
        }), P)
          throw q;
      }
      function _(J) {
        var P = !1, q = null;
        if (w.forEach(function(j) {
          try {
            j.onInteractionScheduledWorkCompleted(J);
          } catch (Q) {
            P || (P = !0, q = Q);
          }
        }), P)
          throw q;
      }
      function $(J, P) {
        var q = !1, j = null;
        if (w.forEach(function(Q) {
          try {
            Q.onWorkScheduled(J, P);
          } catch (ne) {
            q || (q = !0, j = ne);
          }
        }), q)
          throw j;
      }
      function Y(J, P) {
        var q = !1, j = null;
        if (w.forEach(function(Q) {
          try {
            Q.onWorkStarted(J, P);
          } catch (ne) {
            q || (q = !0, j = ne);
          }
        }), q)
          throw j;
      }
      function z(J, P) {
        var q = !1, j = null;
        if (w.forEach(function(Q) {
          try {
            Q.onWorkStopped(J, P);
          } catch (ne) {
            q || (q = !0, j = ne);
          }
        }), q)
          throw j;
      }
      function te(J, P) {
        var q = !1, j = null;
        if (w.forEach(function(Q) {
          try {
            Q.onWorkCanceled(J, P);
          } catch (ne) {
            q || (q = !0, j = ne);
          }
        }), q)
          throw j;
      }
      l.unstable_clear = v, l.unstable_getCurrent = h, l.unstable_getThreadID = m, l.unstable_subscribe = R, l.unstable_trace = C, l.unstable_unsubscribe = O, l.unstable_wrap = b;
    }();
  }(X0)), X0;
}
var Qa = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function RM() {
  if (Zx)
    return Qa;
  Zx = 1;
  var l = 0;
  return Qa.__interactionsRef = null, Qa.__subscriberRef = null, Qa.unstable_clear = function(u) {
    return u();
  }, Qa.unstable_getCurrent = function() {
    return null;
  }, Qa.unstable_getThreadID = function() {
    return ++l;
  }, Qa.unstable_subscribe = function() {
  }, Qa.unstable_trace = function(u, c, f) {
    return f();
  }, Qa.unstable_unsubscribe = function() {
  }, Qa.unstable_wrap = function(u) {
    return u;
  }, Qa;
}
var Jx;
function OM() {
  return Jx || (Jx = 1, process.env.NODE_ENV === "production" ? vm.exports = RM() : vm.exports = TM()), vm.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ew;
function kM() {
  return ew || (ew = 1, process.env.NODE_ENV !== "production" && function() {
    var l = on, u = ap(), c = Fw(), f = OM(), v = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        C("warn", e, r);
      }
    }
    function m(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        C("error", e, r);
      }
    }
    function C(e, t, r) {
      {
        var i = v.ReactDebugCurrentFrame, s = i.getStackAddendum();
        s !== "" && (t += "%s", r = r.concat([s]));
        var p = r.map(function(g) {
          return "" + g;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    if (!l)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var b = 0, w = 1, R = 2, O = 3, M = 4, _ = 5, $ = 6, Y = 7, z = 8, te = 9, J = 10, P = 11, q = 12, j = 13, Q = 14, ne = 15, ce = 16, Te = 17, Ne = 18, we = 19, De = 20, Oe = 21, Me = 22, Ae = 23, Be = 24, Ze = !0, Ke = !1, nt = !1, re = !1, W = /* @__PURE__ */ new Set(), le = {}, ae = {};
    function ge(e, t) {
      Ce(e, t), Ce(e + "Capture", t);
    }
    function Ce(e, t) {
      le[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), le[e] = t;
      {
        var r = e.toLowerCase();
        ae[r] = e, e === "onDoubleClick" && (ae.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        W.add(t[i]);
    }
    var Ee = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ie = 0, Re = 1, Pe = 2, Qe = 3, Ge = 4, oe = 5, kt = 6, jt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Je = jt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", mn = "data-reactroot", cn = new RegExp("^[" + jt + "][" + Je + "]*$"), Cn = Object.prototype.hasOwnProperty, vr = {}, un = {};
    function xn(e) {
      return Cn.call(un, e) ? !0 : Cn.call(vr, e) ? !1 : cn.test(e) ? (un[e] = !0, !0) : (vr[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function ar(e, t, r) {
      return t !== null ? t.type === Ie : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function wn(e, t, r, i) {
      if (r !== null && r.type === Ie)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (r !== null)
            return !r.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function hn(e, t, r, i) {
      if (t === null || typeof t > "u" || wn(e, t, r, i))
        return !0;
      if (i)
        return !1;
      if (r !== null)
        switch (r.type) {
          case Qe:
            return !t;
          case Ge:
            return t === !1;
          case oe:
            return isNaN(t);
          case kt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function it(e) {
      return Mt.hasOwnProperty(e) ? Mt[e] : null;
    }
    function Ot(e, t, r, i, s, p, g) {
      this.acceptsBooleans = t === Pe || t === Qe || t === Ge, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = g;
    }
    var Mt = {}, Hr = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Hr.forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Ie,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      Mt[t] = new Ot(
        t,
        Re,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Pe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Pe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Qe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Qe,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Ge,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        kt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        oe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Vr = /[\-\:]([a-z])/g, xr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Vr, xr);
      Mt[t] = new Ot(
        t,
        Re,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Vr, xr);
      Mt[t] = new Ot(
        t,
        Re,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Vr, xr);
      Mt[t] = new Ot(
        t,
        Re,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Re,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _e = "xlinkHref";
    Mt[_e] = new Ot(
      "xlinkHref",
      Re,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Mt[e] = new Ot(
        e,
        Re,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ve = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ue = !1;
    function mt(e) {
      !Ue && ve.test(e) && (Ue = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Nt(e, t, r, i) {
      if (i.mustUseProperty) {
        var s = i.propertyName;
        return e[s];
      } else {
        i.sanitizeURL && mt("" + r);
        var p = i.attributeName, g = null;
        if (i.type === Ge) {
          if (e.hasAttribute(p)) {
            var E = e.getAttribute(p);
            return E === "" ? !0 : hn(t, r, i, !1) ? E : E === "" + r ? r : E;
          }
        } else if (e.hasAttribute(p)) {
          if (hn(t, r, i, !1))
            return e.getAttribute(p);
          if (i.type === Qe)
            return r;
          g = e.getAttribute(p);
        }
        return hn(t, r, i, !1) ? g === null ? r : g : g === "" + r ? r : g;
      }
    }
    function Ft(e, t, r) {
      {
        if (!xn(t))
          return;
        if (bk(r))
          return r;
        if (!e.hasAttribute(t))
          return r === void 0 ? void 0 : null;
        var i = e.getAttribute(t);
        return i === "" + r ? r : i;
      }
    }
    function Gt(e, t, r, i) {
      var s = it(t);
      if (!ar(t, s, i)) {
        if (hn(t, r, s, i) && (r = null), i || s === null) {
          if (xn(t)) {
            var p = t;
            r === null ? e.removeAttribute(p) : e.setAttribute(p, "" + r);
          }
          return;
        }
        var g = s.mustUseProperty;
        if (g) {
          var E = s.propertyName;
          if (r === null) {
            var x = s.type;
            e[E] = x === Qe ? !1 : "";
          } else
            e[E] = r;
          return;
        }
        var D = s.attributeName, N = s.attributeNamespace;
        if (r === null)
          e.removeAttribute(D);
        else {
          var G = s.type, F;
          G === Qe || G === Ge && r === !0 ? F = "" : (F = "" + r, s.sanitizeURL && mt(F.toString())), N ? e.setAttributeNS(N, D, F) : e.setAttribute(D, F);
        }
      }
    }
    var On = 60103, Jt = 60106, wr = 60107, Fl = 60108, ia = 60114, ka = 60109, Ja = 60110, Wr = 60112, ir = 60113, hr = 60120, Da = 60115, Tr = 60116, qi = 60121, L = 60119, ye = 60128, je = 60129, et = 60130, xt = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var at = Symbol.for;
      On = at("react.element"), Jt = at("react.portal"), wr = at("react.fragment"), Fl = at("react.strict_mode"), ia = at("react.profiler"), ka = at("react.provider"), Ja = at("react.context"), Wr = at("react.forward_ref"), ir = at("react.suspense"), hr = at("react.suspense_list"), Da = at("react.memo"), Tr = at("react.lazy"), qi = at("react.block"), at("react.server.block"), at("react.fundamental"), L = at("react.scope"), ye = at("react.opaque.id"), je = at("react.debug_trace_mode"), et = at("react.offscreen"), xt = at("react.legacy_hidden");
    }
    var wt = typeof Symbol == "function" && Symbol.iterator, Tt = "@@iterator";
    function Vt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = wt && e[wt] || e[Tt];
      return typeof t == "function" ? t : null;
    }
    var Ut = 0, Wt, Rr, mr, ei, Gn, ls, dp;
    function pp() {
    }
    pp.__reactDisabledLog = !0;
    function oa() {
      {
        if (Ut === 0) {
          Wt = console.log, Rr = console.info, mr = console.warn, ei = console.error, Gn = console.group, ls = console.groupCollapsed, dp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ut++;
      }
    }
    function Vn() {
      {
        if (Ut--, Ut === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: u({}, e, {
              value: Wt
            }),
            info: u({}, e, {
              value: Rr
            }),
            warn: u({}, e, {
              value: mr
            }),
            error: u({}, e, {
              value: ei
            }),
            group: u({}, e, {
              value: Gn
            }),
            groupCollapsed: u({}, e, {
              value: ls
            }),
            groupEnd: u({}, e, {
              value: dp
            })
          });
        }
        Ut < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var us = v.ReactCurrentDispatcher, ss;
    function ti(e, t, r) {
      {
        if (ss === void 0)
          try {
            throw Error();
          } catch (s) {
            var i = s.stack.trim().match(/\n( *(at )?)/);
            ss = i && i[1] || "";
          }
        return `
` + ss + e;
      }
    }
    var cs = !1, zl;
    {
      var vp = typeof WeakMap == "function" ? WeakMap : Map;
      zl = new vp();
    }
    function Il(e, t) {
      if (!e || cs)
        return "";
      {
        var r = zl.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      cs = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = us.current, us.current = null, oa();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (pe) {
              i = pe;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (pe) {
              i = pe;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            i = pe;
          }
          e();
        }
      } catch (pe) {
        if (pe && i && typeof pe.stack == "string") {
          for (var E = pe.stack.split(`
`), x = i.stack.split(`
`), D = E.length - 1, N = x.length - 1; D >= 1 && N >= 0 && E[D] !== x[N]; )
            N--;
          for (; D >= 1 && N >= 0; D--, N--)
            if (E[D] !== x[N]) {
              if (D !== 1 || N !== 1)
                do
                  if (D--, N--, N < 0 || E[D] !== x[N]) {
                    var G = `
` + E[D].replace(" at new ", " at ");
                    return typeof e == "function" && zl.set(e, G), G;
                  }
                while (D >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        cs = !1, us.current = p, Vn(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", X = F ? ti(F) : "";
      return typeof e == "function" && zl.set(e, X), X;
    }
    function hp(e, t, r) {
      return Il(e, !0);
    }
    function Fo(e, t, r) {
      return Il(e, !1);
    }
    function Yc(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Or(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Il(e, Yc(e));
      if (typeof e == "string")
        return ti(e);
      switch (e) {
        case ir:
          return ti("Suspense");
        case hr:
          return ti("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Wr:
            return Fo(e.render);
          case Da:
            return Or(e.type, t, r);
          case qi:
            return Fo(e._render);
          case Tr: {
            var i = e, s = i._payload, p = i._init;
            try {
              return Or(p(s), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    function ni(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case _:
          return ti(e.type);
        case ce:
          return ti("Lazy");
        case j:
          return ti("Suspense");
        case we:
          return ti("SuspenseList");
        case b:
        case R:
        case ne:
          return Fo(e.type);
        case P:
          return Fo(e.type.render);
        case Me:
          return Fo(e.type._render);
        case w:
          return hp(e.type);
        default:
          return "";
      }
    }
    function Na(e) {
      try {
        var t = "", r = e;
        do
          t += ni(r), r = r.return;
        while (r);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ri(e, t, r) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
    }
    function zo(e) {
      return e.displayName || "Context";
    }
    function Le(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case wr:
          return "Fragment";
        case Jt:
          return "Portal";
        case ia:
          return "Profiler";
        case Fl:
          return "StrictMode";
        case ir:
          return "Suspense";
        case hr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ja:
            var t = e;
            return zo(t) + ".Consumer";
          case ka:
            var r = e;
            return zo(r._context) + ".Provider";
          case Wr:
            return ri(e, e.render, "ForwardRef");
          case Da:
            return Le(e.type);
          case qi:
            return Le(e._render);
          case Tr: {
            var i = e, s = i._payload, p = i._init;
            try {
              return Le(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Io = v.ReactDebugCurrentFrame, Kn = null, ai = !1;
    function Po() {
      {
        if (Kn === null)
          return null;
        var e = Kn._debugOwner;
        if (e !== null && typeof e < "u")
          return Le(e.type);
      }
      return null;
    }
    function Pl() {
      return Kn === null ? "" : Na(Kn);
    }
    function or() {
      Io.getCurrentStack = null, Kn = null, ai = !1;
    }
    function kn(e) {
      Io.getCurrentStack = Pl, Kn = e, ai = !1;
    }
    function yr(e) {
      ai = e;
    }
    function mp() {
      return ai;
    }
    function kr(e) {
      return "" + e;
    }
    function Dr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var yp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Bo(e, t) {
      yp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Gi(e) {
      var t = e.type, r = e.nodeName;
      return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fs(e) {
      return e._valueTracker;
    }
    function gp(e) {
      e._valueTracker = null;
    }
    function ds(e) {
      var t = "";
      return e && (Gi(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ep(e) {
      var t = Gi(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
        var s = r.get, p = r.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(E) {
            i = "" + E, p.call(this, E);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        });
        var g = {
          getValue: function() {
            return i;
          },
          setValue: function(E) {
            i = "" + E;
          },
          stopTracking: function() {
            gp(e), delete e[t];
          }
        };
        return g;
      }
    }
    function Bl(e) {
      fs(e) || (e._valueTracker = Ep(e));
    }
    function qc(e) {
      if (!e)
        return !1;
      var t = fs(e);
      if (!t)
        return !0;
      var r = t.getValue(), i = ds(e);
      return i !== r ? (t.setValue(i), !0) : !1;
    }
    function Hl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Gc = !1, ps = !1, Sp = !1, vs = !1;
    function bp(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function zt(e, t) {
      var r = e, i = t.checked, s = u({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? r._wrapperState.initialChecked
      });
      return s;
    }
    function Ki(e, t) {
      Bo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ps && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Po() || "A component", t.type), ps = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Gc && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Po() || "A component", t.type), Gc = !0);
      var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
      r._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Dr(t.value != null ? t.value : i),
        controlled: bp(t)
      };
    }
    function Cp(e, t) {
      var r = e, i = t.checked;
      i != null && Gt(r, "checked", i, !1);
    }
    function Kc(e, t) {
      var r = e;
      {
        var i = bp(t);
        !r._wrapperState.controlled && i && !vs && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vs = !0), r._wrapperState.controlled && !i && !Sp && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sp = !0);
      }
      Cp(e, t);
      var s = Dr(t.value), p = t.type;
      if (s != null)
        p === "number" ? (s === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        r.value != s) && (r.value = kr(s)) : r.value !== kr(s) && (r.value = kr(s));
      else if (p === "submit" || p === "reset") {
        r.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ii(r, t.type, s) : t.hasOwnProperty("defaultValue") && ii(r, t.type, Dr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
    }
    function Ho(e, t, r) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, p = s === "submit" || s === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var g = kr(i._wrapperState.initialValue);
        r || g !== i.value && (i.value = g), i.defaultValue = g;
      }
      var E = i.name;
      E !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, E !== "" && (i.name = E);
    }
    function xp(e, t) {
      var r = e;
      Kc(r, t), hs(r, t);
    }
    function hs(e, t) {
      var r = t.name;
      if (t.type === "radio" && r != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        for (var s = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), p = 0; p < s.length; p++) {
          var g = s[p];
          if (!(g === e || g.form !== e.form)) {
            var E = Gv(g);
            if (!E)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qc(g), Kc(g, E);
          }
        }
      }
    }
    function ii(e, t, r) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hl(e.ownerDocument) !== e) && (r == null ? e.defaultValue = kr(e._wrapperState.initialValue) : e.defaultValue !== kr(r) && (e.defaultValue = kr(r)));
    }
    var ms = !1, Vl = !1;
    function oi(e) {
      var t = "";
      return l.Children.forEach(e, function(r) {
        r != null && (t += r);
      }), t;
    }
    function wp(e, t) {
      typeof t.children == "object" && t.children !== null && l.Children.forEach(t.children, function(r) {
        r != null && (typeof r == "string" || typeof r == "number" || typeof r.type == "string" && (Vl || (Vl = !0, m("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !ms && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ms = !0);
    }
    function jm(e, t) {
      t.value != null && e.setAttribute("value", kr(Dr(t.value)));
    }
    function Qc(e, t) {
      var r = u({
        children: void 0
      }, t), i = oi(t.children);
      return i && (r.children = i), r;
    }
    var Xc;
    Xc = !1;
    function Tp() {
      var e = Po();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Wl = ["value", "defaultValue"];
    function Lm(e) {
      {
        Bo("select", e);
        for (var t = 0; t < Wl.length; t++) {
          var r = Wl[t];
          if (e[r] != null) {
            var i = Array.isArray(e[r]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, Tp()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, Tp());
          }
        }
      }
    }
    function Vo(e, t, r, i) {
      var s = e.options;
      if (t) {
        for (var p = r, g = {}, E = 0; E < p.length; E++)
          g["$" + p[E]] = !0;
        for (var x = 0; x < s.length; x++) {
          var D = g.hasOwnProperty("$" + s[x].value);
          s[x].selected !== D && (s[x].selected = D), D && i && (s[x].defaultSelected = !0);
        }
      } else {
        for (var N = kr(Dr(r)), G = null, F = 0; F < s.length; F++) {
          if (s[F].value === N) {
            s[F].selected = !0, i && (s[F].defaultSelected = !0);
            return;
          }
          G === null && !s[F].disabled && (G = s[F]);
        }
        G !== null && (G.selected = !0);
      }
    }
    function Yl(e, t) {
      return u({}, t, {
        value: void 0
      });
    }
    function ys(e, t) {
      var r = e;
      Lm(t), r._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Xc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xc = !0);
    }
    function li(e, t) {
      var r = e;
      r.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vo(r, !!t.multiple, i, !1) : t.defaultValue != null && Vo(r, !!t.multiple, t.defaultValue, !0);
    }
    function Zc(e, t) {
      var r = e, i = r._wrapperState.wasMultiple;
      r._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? Vo(r, !!t.multiple, s, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vo(r, !!t.multiple, t.defaultValue, !0) : Vo(r, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function gs(e, t) {
      var r = e, i = t.value;
      i != null && Vo(r, !!t.multiple, i, !1);
    }
    var Jc = !1;
    function Wo(e, t) {
      var r = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = u({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: kr(r._wrapperState.initialValue)
      });
      return i;
    }
    function ql(e, t) {
      var r = e;
      Bo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jc && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Po() || "A component"), Jc = !0);
      var i = t.value;
      if (i == null) {
        var s = t.children, p = t.defaultValue;
        if (s != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(s)) {
              if (!(s.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            p = s;
          }
        }
        p == null && (p = ""), i = p;
      }
      r._wrapperState = {
        initialValue: Dr(i)
      };
    }
    function ef(e, t) {
      var r = e, i = Dr(t.value), s = Dr(t.defaultValue);
      if (i != null) {
        var p = kr(i);
        p !== r.value && (r.value = p), t.defaultValue == null && r.defaultValue !== p && (r.defaultValue = p);
      }
      s != null && (r.defaultValue = kr(s));
    }
    function lr(e, t) {
      var r = e, i = r.textContent;
      i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
    }
    function Yo(e, t) {
      ef(e, t);
    }
    var qo = "http://www.w3.org/1999/xhtml", Go = "http://www.w3.org/1998/Math/MathML", tf = "http://www.w3.org/2000/svg", Es = {
      html: qo,
      mathml: Go,
      svg: tf
    };
    function Gl(e) {
      switch (e) {
        case "svg":
          return tf;
        case "math":
          return Go;
        default:
          return qo;
      }
    }
    function Qi(e, t) {
      return e == null || e === qo ? Gl(t) : e === tf && t === "foreignObject" ? qo : e;
    }
    var Ss = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, r, i, s);
        });
      } : e;
    }, Kl, Rp = Ss(function(e, t) {
      if (e.namespaceURI === Es.svg && !("innerHTML" in e)) {
        Kl = Kl || document.createElement("div"), Kl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var r = Kl.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; r.firstChild; )
          e.appendChild(r.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Nr = 1, _a = 3, Qn = 8, ui = 9, Op = 11, bs = function(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === _a) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, $m = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ql = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function kp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Um = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ql).forEach(function(e) {
      Um.forEach(function(t) {
        Ql[kp(t, e)] = Ql[e];
      });
    });
    function nf(e, t, r) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !r && typeof t == "number" && t !== 0 && !(Ql.hasOwnProperty(e) && Ql[e]) ? t + "px" : ("" + t).trim();
    }
    var Fm = /([A-Z])/g, zm = /^ms-/;
    function rf(e) {
      return e.replace(Fm, "-$1").toLowerCase().replace(zm, "-ms-");
    }
    var Dp = function() {
    };
    {
      var Im = /^(?:webkit|moz|o)[A-Z]/, Pm = /^-ms-/, Np = /-(.)/g, _p = /;\s*$/, Ko = {}, af = {}, Mp = !1, Ap = !1, Bm = function(e) {
        return e.replace(Np, function(t, r) {
          return r.toUpperCase();
        });
      }, Hm = function(e) {
        Ko.hasOwnProperty(e) && Ko[e] || (Ko[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bm(e.replace(Pm, "ms-"))
        ));
      }, of = function(e) {
        Ko.hasOwnProperty(e) && Ko[e] || (Ko[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Xl = function(e, t) {
        af.hasOwnProperty(t) && af[t] || (af[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(_p, "")));
      }, Vm = function(e, t) {
        Mp || (Mp = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jp = function(e, t) {
        Ap || (Ap = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Dp = function(e, t) {
        e.indexOf("-") > -1 ? Hm(e) : Im.test(e) ? of(e) : _p.test(t) && Xl(e, t), typeof t == "number" && (isNaN(t) ? Vm(e, t) : isFinite(t) || jp(e, t));
      };
    }
    var Lp = Dp;
    function $p(e) {
      {
        var t = "", r = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var s = e[i];
            if (s != null) {
              var p = i.indexOf("--") === 0;
              t += r + (p ? i : rf(i)) + ":", t += nf(i, s, p), r = ";";
            }
          }
        return t || null;
      }
    }
    function lf(e, t) {
      var r = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var s = i.indexOf("--") === 0;
          s || Lp(i, t[i]);
          var p = nf(i, t[i], s);
          i === "float" && (i = "cssFloat"), s ? r.setProperty(i, p) : r[i] = p;
        }
    }
    function Up(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Xi(e) {
      var t = {};
      for (var r in e)
        for (var i = $m[r] || [r], s = 0; s < i.length; s++)
          t[i[s]] = r;
      return t;
    }
    function Wm(e, t) {
      {
        if (!t)
          return;
        var r = Xi(e), i = Xi(t), s = {};
        for (var p in r) {
          var g = r[p], E = i[p];
          if (E && g !== E) {
            var x = g + "," + E;
            if (s[x])
              continue;
            s[x] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Up(e[g]) ? "Removing" : "Updating", g, E);
          }
        }
      }
    }
    var Ym = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, qm = u({
      menuitem: !0
    }, Ym), Fp = "__html";
    function Cs(e, t) {
      if (t) {
        if (qm[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Fp in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Yr(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var si = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, zp = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ma = {}, Gm = new RegExp("^(aria)-[" + Je + "]*$"), Ip = new RegExp("^(aria)[A-Z][" + Je + "]*$"), uf = Object.prototype.hasOwnProperty;
    function sf(e, t) {
      {
        if (uf.call(Ma, t) && Ma[t])
          return !0;
        if (Ip.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), i = zp.hasOwnProperty(r) ? r : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ma[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ma[t] = !0, !0;
        }
        if (Gm.test(t)) {
          var s = t.toLowerCase(), p = zp.hasOwnProperty(s) ? s : null;
          if (p == null)
            return Ma[t] = !0, !1;
          if (t !== p)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), Ma[t] = !0, !0;
        }
      }
      return !0;
    }
    function Pp(e, t) {
      {
        var r = [];
        for (var i in t) {
          var s = sf(e, i);
          s || r.push(i);
        }
        var p = r.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        r.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : r.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Bp(e, t) {
      Yr(e, t) || Pp(e, t);
    }
    var cf = !1;
    function Km(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !cf && (cf = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Hp = function() {
    };
    {
      var Xn = {}, Qm = Object.prototype.hasOwnProperty, Vp = /^on./, _r = /^on[^A-Z]/, Xm = new RegExp("^(aria)-[" + Je + "]*$"), Zl = new RegExp("^(aria)[A-Z][" + Je + "]*$");
      Hp = function(e, t, r, i) {
        if (Qm.call(Xn, t) && Xn[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var p = i.registrationNameDependencies, g = i.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var E = g.hasOwnProperty(s) ? g[s] : null;
          if (E != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, E), Xn[t] = !0, !0;
          if (Vp.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (Vp.test(t))
          return _r.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (Xm.test(t) || Zl.test(t))
          return !0;
        if (s === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (s === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (s === "is" && r !== null && r !== void 0 && typeof r != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), Xn[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var x = it(t), D = x !== null && x.type === Ie;
        if (si.hasOwnProperty(s)) {
          var N = si[s];
          if (N !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, N), Xn[t] = !0, !0;
        } else if (!D && t !== s)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), Xn[t] = !0, !0;
        return typeof r == "boolean" && wn(t, r, x, !1) ? (r ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), Xn[t] = !0, !0) : D ? !0 : wn(t, r, x, !1) ? (Xn[t] = !0, !1) : ((r === "false" || r === "true") && x !== null && x.type === Qe && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), Xn[t] = !0), !0);
      };
    }
    var Wp = function(e, t, r) {
      {
        var i = [];
        for (var s in t) {
          var p = Hp(e, s, t[s], r);
          p || i.push(s);
        }
        var g = i.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e);
      }
    };
    function Yp(e, t, r) {
      Yr(e, t) || Wp(e, t, r);
    }
    var ff = 1, Jl = 2, Zi = 4, qp = 16, Qo = ff | Jl | Zi;
    function eu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === _a ? t.parentNode : t;
    }
    var Ji = null, ci = null, eo = null;
    function df(e) {
      var t = Cl(e);
      if (t) {
        if (typeof Ji != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var r = t.stateNode;
        if (r) {
          var i = Gv(r);
          Ji(t.stateNode, t.type, i);
        }
      }
    }
    function pf(e) {
      Ji = e;
    }
    function Xo(e) {
      ci ? eo ? eo.push(e) : eo = [e] : ci = e;
    }
    function Gp() {
      return ci !== null || eo !== null;
    }
    function vf() {
      if (ci) {
        var e = ci, t = eo;
        if (ci = null, eo = null, df(e), t)
          for (var r = 0; r < t.length; r++)
            df(t[r]);
      }
    }
    var xs = function(e, t) {
      return e(t);
    }, Kt = function(e, t, r, i, s) {
      return e(t, r, i, s);
    }, ws = function() {
    }, hf = xs, Aa = !1, Ts = !1;
    function Rs() {
      var e = Gp();
      e && (ws(), vf());
    }
    function tu(e, t) {
      if (Aa)
        return e(t);
      Aa = !0;
      try {
        return xs(e, t);
      } finally {
        Aa = !1, Rs();
      }
    }
    function Os(e, t, r) {
      if (Ts)
        return e(t, r);
      Ts = !0;
      try {
        return hf(e, t, r);
      } finally {
        Ts = !1, Rs();
      }
    }
    function Zo(e, t, r, i, s) {
      var p = Aa;
      Aa = !0;
      try {
        return Kt(e, t, r, i, s);
      } finally {
        Aa = p, Aa || Rs();
      }
    }
    function Kp(e) {
      Aa || ws();
    }
    function ks(e, t, r, i) {
      xs = e, Kt = t, ws = r, hf = i;
    }
    function mf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function yf(e, t, r) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(r.disabled && mf(t));
        default:
          return !1;
      }
    }
    function Jo(e, t) {
      var r = e.stateNode;
      if (r === null)
        return null;
      var i = Gv(r);
      if (i === null)
        return null;
      var s = i[t];
      if (yf(t, e.type, i))
        return null;
      if (!(!s || typeof s == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var nu = !1;
    if (Ee)
      try {
        var el = {};
        Object.defineProperty(el, "passive", {
          get: function() {
            nu = !0;
          }
        }), window.addEventListener("test", el, el), window.removeEventListener("test", el, el);
      } catch {
        nu = !1;
      }
    function Qp(e, t, r, i, s, p, g, E, x) {
      var D = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, D);
      } catch (N) {
        this.onError(N);
      }
    }
    var Ds = Qp;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var fi = document.createElement("react");
      Ds = function(t, r, i, s, p, g, E, x, D) {
        if (!(typeof document < "u"))
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var N = document.createEvent("Event"), G = !1, F = !0, X = window.event, pe = Object.getOwnPropertyDescriptor(window, "event");
        function ke() {
          fi.removeEventListener(ie, St, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = X);
        }
        var tt = Array.prototype.slice.call(arguments, 3);
        function St() {
          G = !0, ke(), r.apply(i, tt), F = !1;
        }
        var ut, _t = !1, Xt = !1;
        function K(H) {
          if (ut = H.error, _t = !0, ut === null && H.colno === 0 && H.lineno === 0 && (Xt = !0), H.defaultPrevented && ut != null && typeof ut == "object")
            try {
              ut._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", K), fi.addEventListener(ie, St, !1), N.initEvent(ie, !1, !1), fi.dispatchEvent(N), pe && Object.defineProperty(window, "event", pe), G && F && (_t ? Xt && (ut = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ut = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ut)), window.removeEventListener("error", K), !G)
          return ke(), Qp.apply(this, arguments);
      };
    }
    var Xp = Ds, di = !1, Ns = null, to = !1, la = null, _s = {
      onError: function(e) {
        di = !0, Ns = e;
      }
    };
    function Zn(e, t, r, i, s, p, g, E, x) {
      di = !1, Ns = null, Xp.apply(_s, arguments);
    }
    function Zp(e, t, r, i, s, p, g, E, x) {
      if (Zn.apply(this, arguments), di) {
        var D = Jn();
        to || (to = !0, la = D);
      }
    }
    function no() {
      if (to) {
        var e = la;
        throw to = !1, la = null, e;
      }
    }
    function gr() {
      return di;
    }
    function Jn() {
      if (di) {
        var e = Ns;
        return di = !1, Ns = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ja(e) {
      return e._reactInternals;
    }
    function Jp(e) {
      return e._reactInternals !== void 0;
    }
    function gf(e, t) {
      e._reactInternals = t;
    }
    var It = (
      /*                      */
      0
    ), er = (
      /*                */
      1
    ), pt = (
      /*                    */
      2
    ), ot = (
      /*                       */
      4
    ), pi = (
      /*           */
      6
    ), tn = (
      /*                     */
      8
    ), Fn = (
      /*                 */
      16
    ), vi = (
      /*                     */
      32
    ), Lt = (
      /*                   */
      64
    ), zn = (
      /*                          */
      128
    ), ua = (
      /*                     */
      256
    ), tl = (
      /*                      */
      512
    ), nl = (
      /*     */
      8192
    ), Mr = (
      /*                    */
      1024
    ), ev = (
      /*           */
      1028
    ), Ef = (
      /*          */
      932
    ), ro = (
      /*               */
      2047
    ), ru = (
      /*                   */
      2048
    ), qr = (
      /*                */
      4096
    ), au = (
      /* */
      16384
    ), Zm = v.ReactCurrentOwner;
    function hi(e) {
      var t = e, r = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (pt | Mr)) !== It && (r = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? r : null;
    }
    function Ms(e) {
      if (e.tag === j) {
        var t = e.memoizedState;
        if (t === null) {
          var r = e.alternate;
          r !== null && (t = r.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function tv(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function As(e) {
      return hi(e) === e;
    }
    function nv(e) {
      {
        var t = Zm.current;
        if (t !== null && t.tag === w) {
          var r = t, i = r.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(r.type) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var s = ja(e);
      return s ? hi(s) === s : !1;
    }
    function Sf(e) {
      if (hi(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function bf(e) {
      var t = e.alternate;
      if (!t) {
        var r = hi(e);
        if (r === null)
          throw Error("Unable to find node on an unmounted component.");
        return r !== e ? null : e;
      }
      for (var i = e, s = t; ; ) {
        var p = i.return;
        if (p === null)
          break;
        var g = p.alternate;
        if (g === null) {
          var E = p.return;
          if (E !== null) {
            i = s = E;
            continue;
          }
          break;
        }
        if (p.child === g.child) {
          for (var x = p.child; x; ) {
            if (x === i)
              return Sf(p), e;
            if (x === s)
              return Sf(p), t;
            x = x.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== s.return)
          i = p, s = g;
        else {
          for (var D = !1, N = p.child; N; ) {
            if (N === i) {
              D = !0, i = p, s = g;
              break;
            }
            if (N === s) {
              D = !0, s = p, i = g;
              break;
            }
            N = N.sibling;
          }
          if (!D) {
            for (N = g.child; N; ) {
              if (N === i) {
                D = !0, i = g, s = p;
                break;
              }
              if (N === s) {
                D = !0, s = g, i = p;
                break;
              }
              N = N.sibling;
            }
            if (!D)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== s)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Cf(e) {
      var t = bf(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === _ || r.tag === $)
          return r;
        if (r.child) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function xf(e) {
      var t = bf(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === _ || r.tag === $ || Ke)
          return r;
        if (r.child && r.tag !== M) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function rv(e, t) {
      for (var r = t, i = e.alternate; r !== null; ) {
        if (r === e || r === i)
          return !0;
        r = r.return;
      }
      return !1;
    }
    var sa;
    function js(e) {
      sa = e;
    }
    var iu;
    function av(e) {
      iu = e;
    }
    var In;
    function rl(e) {
      In = e;
    }
    var wf;
    function ao(e) {
      wf = e;
    }
    var io = !1, Dn = [], La = null, mi = null, Nn = null, yi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), ca = [];
    function Ls() {
      return Dn.length > 0;
    }
    var Tf = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function $s(e) {
      return Tf.indexOf(e) > -1;
    }
    function Rf(e, t, r, i, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r | qp,
        nativeEvent: s,
        targetContainers: [i]
      };
    }
    function oo(e, t, r, i, s) {
      var p = Rf(e, t, r, i, s);
      Dn.push(p);
    }
    function Er(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          La = null;
          break;
        case "dragenter":
        case "dragleave":
          mi = null;
          break;
        case "mouseover":
        case "mouseout":
          Nn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var r = t.pointerId;
          yi.delete(r);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          gi.delete(i);
          break;
        }
      }
    }
    function Ar(e, t, r, i, s, p) {
      if (e === null || e.nativeEvent !== p) {
        var g = Rf(t, r, i, s, p);
        if (t !== null) {
          var E = Cl(t);
          E !== null && iu(E);
        }
        return g;
      }
      e.eventSystemFlags |= i;
      var x = e.targetContainers;
      return s !== null && x.indexOf(s) === -1 && x.push(s), e;
    }
    function Of(e, t, r, i, s) {
      switch (t) {
        case "focusin": {
          var p = s;
          return La = Ar(La, e, t, r, i, p), !0;
        }
        case "dragenter": {
          var g = s;
          return mi = Ar(mi, e, t, r, i, g), !0;
        }
        case "mouseover": {
          var E = s;
          return Nn = Ar(Nn, e, t, r, i, E), !0;
        }
        case "pointerover": {
          var x = s, D = x.pointerId;
          return yi.set(D, Ar(yi.get(D) || null, e, t, r, i, x)), !0;
        }
        case "gotpointercapture": {
          var N = s, G = N.pointerId;
          return gi.set(G, Ar(gi.get(G) || null, e, t, r, i, N)), !0;
        }
      }
      return !1;
    }
    function iv(e) {
      var t = $u(e.target);
      if (t !== null) {
        var r = hi(t);
        if (r !== null) {
          var i = r.tag;
          if (i === j) {
            var s = Ms(r);
            if (s !== null) {
              e.blockedOn = s, wf(e.lanePriority, function() {
                c.unstable_runWithPriority(e.priority, function() {
                  In(r);
                });
              });
              return;
            }
          } else if (i === O) {
            var p = r.stateNode;
            if (p.hydrate) {
              e.blockedOn = tv(r);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gr(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var r = t[0], i = Cu(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
        if (i !== null) {
          var s = Cl(i);
          return s !== null && iu(s), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function $a(e, t, r) {
      Gr(e) && r.delete(t);
    }
    function ov() {
      for (io = !1; Dn.length > 0; ) {
        var e = Dn[0];
        if (e.blockedOn !== null) {
          var t = Cl(e.blockedOn);
          t !== null && sa(t);
          break;
        }
        for (var r = e.targetContainers; r.length > 0; ) {
          var i = r[0], s = Cu(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
          if (s !== null) {
            e.blockedOn = s;
            break;
          }
          r.shift();
        }
        e.blockedOn === null && Dn.shift();
      }
      La !== null && Gr(La) && (La = null), mi !== null && Gr(mi) && (mi = null), Nn !== null && Gr(Nn) && (Nn = null), yi.forEach($a), gi.forEach($a);
    }
    function Ua(e, t) {
      e.blockedOn === t && (e.blockedOn = null, io || (io = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, ov)));
    }
    function kf(e) {
      if (Dn.length > 0) {
        Ua(Dn[0], e);
        for (var t = 1; t < Dn.length; t++) {
          var r = Dn[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      La !== null && Ua(La, e), mi !== null && Ua(mi, e), Nn !== null && Ua(Nn, e);
      var i = function(E) {
        return Ua(E, e);
      };
      yi.forEach(i), gi.forEach(i);
      for (var s = 0; s < ca.length; s++) {
        var p = ca[s];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; ca.length > 0; ) {
        var g = ca[0];
        if (g.blockedOn !== null)
          break;
        iv(g), g.blockedOn === null && ca.shift();
      }
    }
    var Us = 0, ou = 1, al = 2;
    function lu(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var lo = {
      animationend: lu("Animation", "AnimationEnd"),
      animationiteration: lu("Animation", "AnimationIteration"),
      animationstart: lu("Animation", "AnimationStart"),
      transitionend: lu("Transition", "TransitionEnd")
    }, Fs = {}, zs = {};
    Ee && (zs = document.createElement("div").style, "AnimationEvent" in window || (delete lo.animationend.animation, delete lo.animationiteration.animation, delete lo.animationstart.animation), "TransitionEvent" in window || delete lo.transitionend.transition);
    function uo(e) {
      if (Fs[e])
        return Fs[e];
      if (!lo[e])
        return e;
      var t = lo[e];
      for (var r in t)
        if (t.hasOwnProperty(r) && r in zs)
          return Fs[e] = t[r];
      return e;
    }
    var il = uo("animationend"), uu = uo("animationiteration"), Df = uo("animationstart"), su = uo("transitionend"), Nf = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), fa = [
      "cancel",
      "cancel",
      "click",
      "click",
      "close",
      "close",
      "contextmenu",
      "contextMenu",
      "copy",
      "copy",
      "cut",
      "cut",
      "auxclick",
      "auxClick",
      "dblclick",
      "doubleClick",
      // Careful!
      "dragend",
      "dragEnd",
      "dragstart",
      "dragStart",
      "drop",
      "drop",
      "focusin",
      "focus",
      // Careful!
      "focusout",
      "blur",
      // Careful!
      "input",
      "input",
      "invalid",
      "invalid",
      "keydown",
      "keyDown",
      "keypress",
      "keyPress",
      "keyup",
      "keyUp",
      "mousedown",
      "mouseDown",
      "mouseup",
      "mouseUp",
      "paste",
      "paste",
      "pause",
      "pause",
      "play",
      "play",
      "pointercancel",
      "pointerCancel",
      "pointerdown",
      "pointerDown",
      "pointerup",
      "pointerUp",
      "ratechange",
      "rateChange",
      "reset",
      "reset",
      "seeked",
      "seeked",
      "submit",
      "submit",
      "touchcancel",
      "touchCancel",
      "touchend",
      "touchEnd",
      "touchstart",
      "touchStart",
      "volumechange",
      "volumeChange"
    ], cu = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], fu = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], co = ["abort", "abort", il, "animationEnd", uu, "animationIteration", Df, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", su, "transitionEnd", "waiting", "waiting"];
    function du(e, t) {
      for (var r = 0; r < e.length; r += 2) {
        var i = e[r], s = e[r + 1], p = s[0].toUpperCase() + s.slice(1), g = "on" + p;
        so.set(i, t), Nf.set(i, g), ge(g, [i]);
      }
    }
    function ol(e, t) {
      for (var r = 0; r < e.length; r++)
        so.set(e[r], t);
    }
    function lv(e) {
      var t = so.get(e);
      return t === void 0 ? al : t;
    }
    function _f() {
      du(fa, Us), du(fu, ou), du(co, al), ol(cu, Us);
    }
    var fn = c.unstable_now;
    if (!(f.__interactionsRef != null && f.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var pu = 99, da = 98, Fa = 97, pa = 96, Mf = 95, uv = 90;
    fn();
    var Ei = 15, vu = 14, hu = 13, ll = 12, fo = 11, Si = 10, ul = 9, _n = 8, sl = 7, nn = 6, Mn = 5, An = 4, mu = 3, bi = 2, tr = 1, za = 0, Af = 31, se = (
      /*                        */
      0
    ), yn = (
      /*                          */
      0
    ), Rt = (
      /*                        */
      1
    ), Ia = (
      /*                 */
      2
    ), po = (
      /*      */
      4
    ), yu = (
      /*                    */
      24
    ), jf = (
      /*           */
      32
    ), Lf = (
      /*                  */
      192
    ), cl = (
      /*            */
      256
    ), fl = (
      /*                   */
      3584
    ), $f = (
      /*                */
      4096
    ), Pa = (
      /*                       */
      4186112
    ), dl = (
      /*                            */
      62914560
    ), Ci = (
      /*                  */
      33554432
    ), Is = (
      /*          */
      67108864
    ), gu = (
      /*                                 */
      134217727
    ), Uf = (
      /*               */
      134217728
    ), Ps = (
      /*                             */
      805306368
    ), Kr = (
      /*                   */
      1073741824
    ), rn = -1;
    function Jm(e) {
    }
    var Yt = _n;
    function pl(e) {
      if ((Rt & e) !== se)
        return Yt = Ei, Rt;
      if ((Ia & e) !== se)
        return Yt = vu, Ia;
      if ((po & e) !== se)
        return Yt = hu, po;
      var t = yu & e;
      if (t !== se)
        return Yt = ll, t;
      if ((e & jf) !== se)
        return Yt = fo, jf;
      var r = Lf & e;
      if (r !== se)
        return Yt = Si, r;
      if ((e & cl) !== se)
        return Yt = ul, cl;
      var i = fl & e;
      if (i !== se)
        return Yt = _n, i;
      if ((e & $f) !== se)
        return Yt = sl, $f;
      var s = Pa & e;
      if (s !== se)
        return Yt = nn, s;
      var p = dl & e;
      if (p !== se)
        return Yt = Mn, p;
      if (e & Is)
        return Yt = An, Is;
      if ((e & Uf) !== se)
        return Yt = mu, Uf;
      var g = Ps & e;
      return g !== se ? (Yt = bi, g) : (Kr & e) !== se ? (Yt = tr, Kr) : (m("Should have found matching lanes. This is a bug in React."), Yt = _n, e);
    }
    function Ff(e) {
      switch (e) {
        case pu:
          return Ei;
        case da:
          return Si;
        case Fa:
        case pa:
          return _n;
        case Mf:
          return bi;
        default:
          return za;
      }
    }
    function Bs(e) {
      switch (e) {
        case Ei:
        case vu:
          return pu;
        case hu:
        case ll:
        case fo:
        case Si:
          return da;
        case ul:
        case _n:
        case sl:
        case nn:
        case An:
        case Mn:
          return Fa;
        case mu:
        case bi:
        case tr:
          return Mf;
        case za:
          return uv;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function Eu(e, t) {
      var r = e.pendingLanes;
      if (r === se)
        return Yt = za, se;
      var i = se, s = za, p = e.expiredLanes, g = e.suspendedLanes, E = e.pingedLanes;
      if (p !== se)
        i = p, s = Yt = Ei;
      else {
        var x = r & gu;
        if (x !== se) {
          var D = x & ~g;
          if (D !== se)
            i = pl(D), s = Yt;
          else {
            var N = x & E;
            N !== se && (i = pl(N), s = Yt);
          }
        } else {
          var G = r & ~g;
          G !== se ? (i = pl(G), s = Yt) : E !== se && (i = pl(E), s = Yt);
        }
      }
      if (i === se)
        return se;
      if (i = r & dv(i), t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & g) === se) {
        pl(t);
        var F = Yt;
        if (s <= F)
          return t;
        Yt = s;
      }
      var X = e.entangledLanes;
      if (X !== se)
        for (var pe = e.entanglements, ke = i & X; ke > 0; ) {
          var tt = xi(ke), St = 1 << tt;
          i |= pe[tt], ke &= ~St;
        }
      return i;
    }
    function ey(e, t) {
      for (var r = e.eventTimes, i = rn; t > 0; ) {
        var s = xi(t), p = 1 << s, g = r[s];
        g > i && (i = g), t &= ~p;
      }
      return i;
    }
    function ty(e, t) {
      pl(e);
      var r = Yt;
      return r >= Si ? t + 250 : r >= nn ? t + 5e3 : rn;
    }
    function ny(e, t) {
      for (var r = e.pendingLanes, i = e.suspendedLanes, s = e.pingedLanes, p = e.expirationTimes, g = r; g > 0; ) {
        var E = xi(g), x = 1 << E, D = p[E];
        D === rn ? ((x & i) === se || (x & s) !== se) && (p[E] = ty(x, t)) : D <= t && (e.expiredLanes |= x), g &= ~x;
      }
    }
    function jr(e) {
      var t = e.pendingLanes & ~Kr;
      return t !== se ? t : t & Kr ? Kr : se;
    }
    function ur() {
      return Yt;
    }
    function zf(e) {
      return (e & gu) !== se;
    }
    function If(e) {
      return (e & dl) === e;
    }
    function sv(e) {
      return (e & Pa) === e;
    }
    function vl(e, t) {
      switch (e) {
        case za:
          break;
        case Ei:
          return Rt;
        case vu:
          return Ia;
        case ll: {
          var r = jn(yu & ~t);
          return r === yn ? vl(Si, t) : r;
        }
        case Si: {
          var i = jn(Lf & ~t);
          return i === yn ? vl(_n, t) : i;
        }
        case _n: {
          var s = jn(fl & ~t);
          return s === yn && (s = jn(Pa & ~t), s === yn && (s = jn(fl))), s;
        }
        case nn:
        case Mn:
          break;
        case bi:
          var p = jn(Ps & ~t);
          return p === yn && (p = jn(Ps)), p;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function cv(e, t) {
      var r = jn(Pa & ~t);
      return r === yn && (r = jn(Pa & ~e), r === yn && (r = jn(Pa))), r;
    }
    function Pf(e) {
      var t = jn(dl & ~e);
      return t === yn && (t = jn(dl)), t;
    }
    function fv(e) {
      return e & -e;
    }
    function Bf(e) {
      var t = 31 - mv(e);
      return t < 0 ? se : 1 << t;
    }
    function dv(e) {
      return (Bf(e) << 1) - 1;
    }
    function jn(e) {
      return fv(e);
    }
    function xi(e) {
      return 31 - mv(e);
    }
    function pv(e) {
      return xi(e);
    }
    function Pn(e, t) {
      return (e & t) !== se;
    }
    function wi(e, t) {
      return (e & t) === t;
    }
    function At(e, t) {
      return e | t;
    }
    function hl(e, t) {
      return e & ~t;
    }
    function ry(e) {
      return e;
    }
    function Ba(e, t) {
      return e !== yn && e < t ? e : t;
    }
    function Hs(e) {
      for (var t = [], r = 0; r < Af; r++)
        t.push(e);
      return t;
    }
    function ml(e, t, r) {
      e.pendingLanes |= t;
      var i = t - 1;
      e.suspendedLanes &= i, e.pingedLanes &= i;
      var s = e.eventTimes, p = pv(t);
      s[p] = r;
    }
    function vv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var r = e.expirationTimes, i = t; i > 0; ) {
        var s = xi(i), p = 1 << s;
        r[s] = rn, i &= ~p;
      }
    }
    function Hf(e, t, r) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Su(e) {
      e.expiredLanes |= yu & e.pendingLanes;
    }
    function ay(e) {
      return (e & yu) !== se;
    }
    function hv(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function Vf(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, s = e.eventTimes, p = e.expirationTimes, g = r; g > 0; ) {
        var E = xi(g), x = 1 << E;
        i[E] = se, s[E] = rn, p[E] = rn, g &= ~x;
      }
    }
    function Wf(e, t) {
      e.entangledLanes |= t;
      for (var r = e.entanglements, i = t; i > 0; ) {
        var s = xi(i), p = 1 << s;
        r[s] |= t, i &= ~p;
      }
    }
    var mv = Math.clz32 ? Math.clz32 : iy, yv = Math.log, gv = Math.LN2;
    function iy(e) {
      return e === 0 ? 32 : 31 - (yv(e) / gv | 0) | 0;
    }
    var Ev = c.unstable_UserBlockingPriority, oy = c.unstable_runWithPriority, Yf = !0;
    function qf(e) {
      Yf = !!e;
    }
    function Sv() {
      return Yf;
    }
    function bv(e, t, r) {
      var i = lv(t), s;
      switch (i) {
        case Us:
          s = Cv;
          break;
        case ou:
          s = xv;
          break;
        case al:
        default:
          s = bu;
          break;
      }
      return s.bind(null, t, r, e);
    }
    function Cv(e, t, r, i) {
      Kp(i.timeStamp), Zo(bu, e, t, r, i);
    }
    function xv(e, t, r, i) {
      oy(Ev, bu.bind(null, e, t, r, i));
    }
    function bu(e, t, r, i) {
      if (Yf) {
        var s = !0;
        if (s = (t & Zi) === 0, s && Ls() && $s(e)) {
          oo(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            r,
            i
          );
          return;
        }
        var p = Cu(e, t, r, i);
        if (p === null) {
          s && Er(e, i);
          return;
        }
        if (s) {
          if ($s(e)) {
            oo(p, e, t, r, i);
            return;
          }
          if (Of(p, e, t, r, i))
            return;
          Er(e, i);
        }
        hS(e, t, i, null, r);
      }
    }
    function Cu(e, t, r, i) {
      var s = eu(i), p = $u(s);
      if (p !== null) {
        var g = hi(p);
        if (g === null)
          p = null;
        else {
          var E = g.tag;
          if (E === j) {
            var x = Ms(g);
            if (x !== null)
              return x;
            p = null;
          } else if (E === O) {
            var D = g.stateNode;
            if (D.hydrate)
              return tv(g);
            p = null;
          } else
            g !== p && (p = null);
        }
      }
      return hS(e, t, i, p, r), null;
    }
    function wv(e, t, r) {
      return e.addEventListener(t, r, !1), r;
    }
    function Gf(e, t, r) {
      return e.addEventListener(t, r, !0), r;
    }
    function Tv(e, t, r, i) {
      return e.addEventListener(t, r, {
        capture: !0,
        passive: i
      }), r;
    }
    function ly(e, t, r, i) {
      return e.addEventListener(t, r, {
        passive: i
      }), r;
    }
    var xu = null, yl = null, vo = null;
    function ct(e) {
      return xu = e, yl = Bn(), !0;
    }
    function nr() {
      xu = null, yl = null, vo = null;
    }
    function gn() {
      if (vo)
        return vo;
      var e, t = yl, r = t.length, i, s = Bn(), p = s.length;
      for (e = 0; e < r && t[e] === s[e]; e++)
        ;
      var g = r - e;
      for (i = 1; i <= g && t[r - i] === s[p - i]; i++)
        ;
      var E = i > 1 ? 1 - i : void 0;
      return vo = s.slice(e, E), vo;
    }
    function Bn() {
      return "value" in xu ? xu.value : xu.textContent;
    }
    function va(e) {
      var t, r = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function gl() {
      return !0;
    }
    function Ln() {
      return !1;
    }
    function Wn(e) {
      function t(r, i, s, p, g) {
        this._reactName = r, this._targetInst = s, this.type = i, this.nativeEvent = p, this.target = g, this.currentTarget = null;
        for (var E in e)
          if (e.hasOwnProperty(E)) {
            var x = e[E];
            x ? this[E] = x(p) : this[E] = p[E];
          }
        var D = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return D ? this.isDefaultPrevented = gl : this.isDefaultPrevented = Ln, this.isPropagationStopped = Ln, this;
      }
      return u(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = gl);
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = gl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: gl
      }), t;
    }
    var Qr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ho = Wn(Qr), ha = u({}, Qr, {
      view: 0,
      detail: 0
    }), Kf = Wn(ha), wu, Tu, mo;
    function El(e) {
      e !== mo && (mo && e.type === "mousemove" ? (wu = e.screenX - mo.screenX, Tu = e.screenY - mo.screenY) : (wu = 0, Tu = 0), mo = e);
    }
    var He = u({}, ha, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ya,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (El(e), wu);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Tu;
      }
    }), Ru = Wn(He), Qf = u({}, He, {
      dataTransfer: 0
    }), ma = Wn(Qf), Ti = u({}, ha, {
      relatedTarget: 0
    }), yo = Wn(Ti), Ou = u({}, Qr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xf = Wn(Ou), Zf = u({}, Qr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ha = Wn(Zf), ku = u({}, Qr, {
      data: 0
    }), Vs = Wn(ku), Ws = Vs, Va = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ys = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Du(e) {
      if (e.key) {
        var t = Va[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var r = va(e);
        return r === 13 ? "Enter" : String.fromCharCode(r);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ys[e.keyCode] || "Unidentified" : "";
    }
    var qs = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Sr(e) {
      var t = this, r = t.nativeEvent;
      if (r.getModifierState)
        return r.getModifierState(e);
      var i = qs[e];
      return i ? !!r[i] : !1;
    }
    function ya(e) {
      return Sr;
    }
    var Ri = u({}, ha, {
      key: Du,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ya,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? va(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? va(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Gs = Wn(Ri), Lr = u({}, He, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Jf = Wn(Lr), Sl = u({}, ha, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ya
    }), ed = Wn(Sl), uy = u({}, Qr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rv = Wn(uy), Ov = u({}, He, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ks = Wn(Ov), td = [9, 13, 27, 32], go = 229, Qs = Ee && "CompositionEvent" in window, bl = null;
    Ee && "documentMode" in document && (bl = document.documentMode);
    var Nu = Ee && "TextEvent" in window && !bl, kv = Ee && (!Qs || bl && bl > 8 && bl <= 11), Dv = 32, nd = String.fromCharCode(Dv);
    function Nv() {
      ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ge("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ge("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ge("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Oi = !1;
    function sy(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function cy(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ki(e, t) {
      return e === "keydown" && t.keyCode === go;
    }
    function _v(e, t) {
      switch (e) {
        case "keyup":
          return td.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== go;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function rd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Mv(e) {
      return e.locale === "ko";
    }
    var Eo = !1;
    function Di(e, t, r, i, s) {
      var p, g;
      if (Qs ? p = cy(t) : Eo ? _v(t, i) && (p = "onCompositionEnd") : ki(t, i) && (p = "onCompositionStart"), !p)
        return null;
      kv && !Mv(i) && (!Eo && p === "onCompositionStart" ? Eo = ct(s) : p === "onCompositionEnd" && Eo && (g = gn()));
      var E = Uv(r, p);
      if (E.length > 0) {
        var x = new Vs(p, t, null, i, s);
        if (e.push({
          event: x,
          listeners: E
        }), g)
          x.data = g;
        else {
          var D = rd(i);
          D !== null && (x.data = D);
        }
      }
    }
    function fy(e, t) {
      switch (e) {
        case "compositionend":
          return rd(t);
        case "keypress":
          var r = t.which;
          return r !== Dv ? null : (Oi = !0, nd);
        case "textInput":
          var i = t.data;
          return i === nd && Oi ? null : i;
        default:
          return null;
      }
    }
    function dy(e, t) {
      if (Eo) {
        if (e === "compositionend" || !Qs && _v(e, t)) {
          var r = gn();
          return nr(), Eo = !1, r;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!sy(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return kv && !Mv(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Av(e, t, r, i, s) {
      var p;
      if (Nu ? p = fy(t, i) : p = dy(t, i), !p)
        return null;
      var g = Uv(r, "onBeforeInput");
      if (g.length > 0) {
        var E = new Ws("onBeforeInput", "beforeinput", null, i, s);
        e.push({
          event: E,
          listeners: g
        }), E.data = p;
      }
    }
    function py(e, t, r, i, s, p, g) {
      Di(e, t, r, i, s), Av(e, t, r, i, s);
    }
    var $r = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Xs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!$r[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function vy(e) {
      if (!Ee)
        return !1;
      var t = "on" + e, r = t in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), r = typeof i[t] == "function";
      }
      return r;
    }
    function Ni() {
      ge("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function _u(e, t, r, i) {
      Xo(i);
      var s = Uv(t, "onChange");
      if (s.length > 0) {
        var p = new ho("onChange", "change", null, r, i);
        e.push({
          event: p,
          listeners: s
        });
      }
    }
    var ga = null, So = null;
    function ad(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function id(e) {
      var t = [];
      _u(t, So, e, eu(e)), tu(hy, t);
    }
    function hy(e) {
      sS(e, 0);
    }
    function Zs(e) {
      var t = lc(e);
      if (qc(t))
        return e;
    }
    function Js(e, t) {
      if (e === "change")
        return t;
    }
    var ec = !1;
    Ee && (ec = vy("input") && (!document.documentMode || document.documentMode > 9));
    function jv(e, t) {
      ga = e, So = t, ga.attachEvent("onpropertychange", Lv);
    }
    function tc() {
      ga && (ga.detachEvent("onpropertychange", Lv), ga = null, So = null);
    }
    function Lv(e) {
      e.propertyName === "value" && Zs(So) && id(e);
    }
    function od(e, t, r) {
      e === "focusin" ? (tc(), jv(t, r)) : e === "focusout" && tc();
    }
    function Mu(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Zs(So);
    }
    function my(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function nc(e, t) {
      if (e === "click")
        return Zs(t);
    }
    function $v(e, t) {
      if (e === "input" || e === "change")
        return Zs(t);
    }
    function yy(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ii(e, "number", e.value);
    }
    function Au(e, t, r, i, s, p, g) {
      var E = r ? lc(r) : window, x, D;
      if (ad(E) ? x = Js : Xs(E) ? ec ? x = $v : (x = Mu, D = od) : my(E) && (x = nc), x) {
        var N = x(t, r);
        if (N) {
          _u(e, N, i, s);
          return;
        }
      }
      D && D(t, E, r), t === "focusout" && yy(E);
    }
    function gy() {
      Ce("onMouseEnter", ["mouseout", "mouseover"]), Ce("onMouseLeave", ["mouseout", "mouseover"]), Ce("onPointerEnter", ["pointerout", "pointerover"]), Ce("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function rc(e, t, r, i, s, p, g) {
      var E = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
      if (E && !(p & qp)) {
        var D = i.relatedTarget || i.fromElement;
        if (D && ($u(D) || qv(D)))
          return;
      }
      if (!(!x && !E)) {
        var N;
        if (s.window === s)
          N = s;
        else {
          var G = s.ownerDocument;
          G ? N = G.defaultView || G.parentWindow : N = window;
        }
        var F, X;
        if (x) {
          var pe = i.relatedTarget || i.toElement;
          if (F = r, X = pe ? $u(pe) : null, X !== null) {
            var ke = hi(X);
            (X !== ke || X.tag !== _ && X.tag !== $) && (X = null);
          }
        } else
          F = null, X = r;
        if (F !== X) {
          var tt = Ru, St = "onMouseLeave", ut = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (tt = Jf, St = "onPointerLeave", ut = "onPointerEnter", _t = "pointer");
          var Xt = F == null ? N : lc(F), K = X == null ? N : lc(X), ie = new tt(St, _t + "leave", F, i, s);
          ie.target = Xt, ie.relatedTarget = K;
          var H = null, Se = $u(s);
          if (Se === r) {
            var $e = new tt(ut, _t + "enter", X, i, s);
            $e.target = K, $e.relatedTarget = Xt, H = $e;
          }
          fO(e, ie, H, F, X);
        }
      }
    }
    function n(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var a = typeof Object.is == "function" ? Object.is : n, o = Object.prototype.hasOwnProperty;
    function d(e, t) {
      if (a(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length)
        return !1;
      for (var s = 0; s < r.length; s++)
        if (!o.call(t, r[s]) || !a(e[r[s]], t[r[s]]))
          return !1;
      return !0;
    }
    function y(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function S(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function T(e, t) {
      for (var r = y(e), i = 0, s = 0; r; ) {
        if (r.nodeType === _a) {
          if (s = i + r.textContent.length, i <= t && s >= t)
            return {
              node: r,
              offset: t - i
            };
          i = s;
        }
        r = y(S(r));
      }
    }
    function k(e) {
      var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var s = i.anchorNode, p = i.anchorOffset, g = i.focusNode, E = i.focusOffset;
      try {
        s.nodeType, g.nodeType;
      } catch {
        return null;
      }
      return U(e, s, p, g, E);
    }
    function U(e, t, r, i, s) {
      var p = 0, g = -1, E = -1, x = 0, D = 0, N = e, G = null;
      e:
        for (; ; ) {
          for (var F = null; N === t && (r === 0 || N.nodeType === _a) && (g = p + r), N === i && (s === 0 || N.nodeType === _a) && (E = p + s), N.nodeType === _a && (p += N.nodeValue.length), (F = N.firstChild) !== null; )
            G = N, N = F;
          for (; ; ) {
            if (N === e)
              break e;
            if (G === t && ++x === r && (g = p), G === i && ++D === s && (E = p), (F = N.nextSibling) !== null)
              break;
            N = G, G = N.parentNode;
          }
          N = F;
        }
      return g === -1 || E === -1 ? null : {
        start: g,
        end: E
      };
    }
    function ee(e, t) {
      var r = e.ownerDocument || document, i = r && r.defaultView || window;
      if (i.getSelection) {
        var s = i.getSelection(), p = e.textContent.length, g = Math.min(t.start, p), E = t.end === void 0 ? g : Math.min(t.end, p);
        if (!s.extend && g > E) {
          var x = E;
          E = g, g = x;
        }
        var D = T(e, g), N = T(e, E);
        if (D && N) {
          if (s.rangeCount === 1 && s.anchorNode === D.node && s.anchorOffset === D.offset && s.focusNode === N.node && s.focusOffset === N.offset)
            return;
          var G = r.createRange();
          G.setStart(D.node, D.offset), s.removeAllRanges(), g > E ? (s.addRange(G), s.extend(N.node, N.offset)) : (G.setEnd(N.node, N.offset), s.addRange(G));
        }
      }
    }
    function Fe(e) {
      return e && e.nodeType === _a;
    }
    function ft(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Fe(e) ? !1 : Fe(t) ? ft(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function me(e) {
      return e && e.ownerDocument && ft(e.ownerDocument.documentElement, e);
    }
    function Xe(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function st() {
      for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
        if (Xe(t))
          e = t.contentWindow;
        else
          return t;
        t = Hl(e.document);
      }
      return t;
    }
    function rt(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function V() {
      var e = st();
      return {
        focusedElem: e,
        selectionRange: rt(e) ? B(e) : null
      };
    }
    function I(e) {
      var t = st(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && me(r)) {
        i !== null && rt(r) && ue(r, i);
        for (var s = [], p = r; p = p.parentNode; )
          p.nodeType === Nr && s.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof r.focus == "function" && r.focus();
        for (var g = 0; g < s.length; g++) {
          var E = s[g];
          E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
        }
      }
    }
    function B(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = k(e), t || {
        start: 0,
        end: 0
      };
    }
    function ue(e, t) {
      var r = t.start, i = t.end;
      i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : ee(e, t);
    }
    var fe = Ee && "documentMode" in document && document.documentMode <= 11;
    function vt() {
      ge("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ve = null, dt = null, gt = null, ht = !1;
    function _i(e) {
      if ("selectionStart" in e && rt(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
      return {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      };
    }
    function Ey(e) {
      return e.window === e ? e.document : e.nodeType === ui ? e : e.ownerDocument;
    }
    function oS(e, t, r) {
      var i = Ey(r);
      if (!(ht || Ve == null || Ve !== Hl(i))) {
        var s = _i(Ve);
        if (!gt || !d(gt, s)) {
          gt = s;
          var p = Uv(dt, "onSelect");
          if (p.length > 0) {
            var g = new ho("onSelect", "select", null, t, r);
            e.push({
              event: g,
              listeners: p
            }), g.target = Ve;
          }
        }
      }
    }
    function aO(e, t, r, i, s, p, g) {
      var E = r ? lc(r) : window;
      switch (t) {
        case "focusin":
          (Xs(E) || E.contentEditable === "true") && (Ve = E, dt = r, gt = null);
          break;
        case "focusout":
          Ve = null, dt = null, gt = null;
          break;
        case "mousedown":
          ht = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ht = !1, oS(e, i, s);
          break;
        case "selectionchange":
          if (fe)
            break;
        case "keydown":
        case "keyup":
          oS(e, i, s);
      }
    }
    function iO(e, t, r, i, s, p, g) {
      var E = Nf.get(t);
      if (E !== void 0) {
        var x = ho, D = t;
        switch (t) {
          case "keypress":
            if (va(i) === 0)
              return;
          case "keydown":
          case "keyup":
            x = Gs;
            break;
          case "focusin":
            D = "focus", x = yo;
            break;
          case "focusout":
            D = "blur", x = yo;
            break;
          case "beforeblur":
          case "afterblur":
            x = yo;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ma;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = ed;
            break;
          case il:
          case uu:
          case Df:
            x = Xf;
            break;
          case su:
            x = Rv;
            break;
          case "scroll":
            x = Kf;
            break;
          case "wheel":
            x = Ks;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Ha;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Jf;
            break;
        }
        var N = (p & Zi) !== 0;
        {
          var G = !N && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = sO(r, E, i.type, N, G);
          if (F.length > 0) {
            var X = new x(E, D, null, i, s);
            e.push({
              event: X,
              listeners: F
            });
          }
        }
      }
    }
    _f(), gy(), Ni(), vt(), Nv();
    function oO(e, t, r, i, s, p, g) {
      iO(e, t, r, i, s, p);
      var E = (p & Qo) === 0;
      E && (rc(e, t, r, i, s, p), Au(e, t, r, i, s), aO(e, t, r, i, s), py(e, t, r, i, s));
    }
    var ld = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], lS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ld));
    function uS(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, Zp(i, t, void 0, e), e.currentTarget = null;
    }
    function lO(e, t, r) {
      var i;
      if (r)
        for (var s = t.length - 1; s >= 0; s--) {
          var p = t[s], g = p.instance, E = p.currentTarget, x = p.listener;
          if (g !== i && e.isPropagationStopped())
            return;
          uS(e, x, E), i = g;
        }
      else
        for (var D = 0; D < t.length; D++) {
          var N = t[D], G = N.instance, F = N.currentTarget, X = N.listener;
          if (G !== i && e.isPropagationStopped())
            return;
          uS(e, X, F), i = G;
        }
    }
    function sS(e, t) {
      for (var r = (t & Zi) !== 0, i = 0; i < e.length; i++) {
        var s = e[i], p = s.event, g = s.listeners;
        lO(p, g, r);
      }
      no();
    }
    function uO(e, t, r, i, s) {
      var p = eu(r), g = [];
      oO(g, e, i, r, p, t), sS(g, t);
    }
    function sn(e, t) {
      var r = !1, i = BS(t), s = yS(e, r);
      i.has(s) || (pS(t, e, Jl, r), i.add(s));
    }
    var cS = "_reactListening" + Math.random().toString(36).slice(2);
    function fS(e) {
      {
        if (e[cS])
          return;
        e[cS] = !0, W.forEach(function(t) {
          lS.has(t) || dS(t, !1, e, null), dS(t, !0, e, null);
        });
      }
    }
    function dS(e, t, r, i) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, p = r;
      if (e === "selectionchange" && r.nodeType !== ui && (p = r.ownerDocument), i !== null && !t && lS.has(e)) {
        if (e !== "scroll")
          return;
        s |= Jl, p = i;
      }
      var g = BS(p), E = yS(e, t);
      g.has(E) || (t && (s |= Zi), pS(p, e, s, t), g.add(E));
    }
    function pS(e, t, r, i, s) {
      var p = bv(e, t, r), g = void 0;
      nu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (g = !0), e = e, i ? g !== void 0 ? Tv(e, t, p, g) : Gf(e, t, p) : g !== void 0 ? ly(e, t, p, g) : wv(e, t, p);
    }
    function vS(e, t) {
      return e === t || e.nodeType === Qn && e.parentNode === t;
    }
    function hS(e, t, r, i, s) {
      var p = i;
      if (!(t & ff) && !(t & Jl)) {
        var g = s;
        if (i !== null) {
          var E = i;
          e:
            for (; ; ) {
              if (E === null)
                return;
              var x = E.tag;
              if (x === O || x === M) {
                var D = E.stateNode.containerInfo;
                if (vS(D, g))
                  break;
                if (x === M)
                  for (var N = E.return; N !== null; ) {
                    var G = N.tag;
                    if (G === O || G === M) {
                      var F = N.stateNode.containerInfo;
                      if (vS(F, g))
                        return;
                    }
                    N = N.return;
                  }
                for (; D !== null; ) {
                  var X = $u(D);
                  if (X === null)
                    return;
                  var pe = X.tag;
                  if (pe === _ || pe === $) {
                    E = p = X;
                    continue e;
                  }
                  D = D.parentNode;
                }
              }
              E = E.return;
            }
        }
      }
      Os(function() {
        return uO(e, t, r, p);
      });
    }
    function ud(e, t, r) {
      return {
        instance: e,
        listener: t,
        currentTarget: r
      };
    }
    function sO(e, t, r, i, s) {
      for (var p = t !== null ? t + "Capture" : null, g = i ? p : t, E = [], x = e, D = null; x !== null; ) {
        var N = x, G = N.stateNode, F = N.tag;
        if (F === _ && G !== null && (D = G, g !== null)) {
          var X = Jo(x, g);
          X != null && E.push(ud(x, X, D));
        }
        if (s)
          break;
        x = x.return;
      }
      return E;
    }
    function Uv(e, t) {
      for (var r = t + "Capture", i = [], s = e; s !== null; ) {
        var p = s, g = p.stateNode, E = p.tag;
        if (E === _ && g !== null) {
          var x = g, D = Jo(s, r);
          D != null && i.unshift(ud(s, D, x));
          var N = Jo(s, t);
          N != null && i.push(ud(s, N, x));
        }
        s = s.return;
      }
      return i;
    }
    function ac(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== _);
      return e || null;
    }
    function cO(e, t) {
      for (var r = e, i = t, s = 0, p = r; p; p = ac(p))
        s++;
      for (var g = 0, E = i; E; E = ac(E))
        g++;
      for (; s - g > 0; )
        r = ac(r), s--;
      for (; g - s > 0; )
        i = ac(i), g--;
      for (var x = s; x--; ) {
        if (r === i || i !== null && r === i.alternate)
          return r;
        r = ac(r), i = ac(i);
      }
      return null;
    }
    function mS(e, t, r, i, s) {
      for (var p = t._reactName, g = [], E = r; E !== null && E !== i; ) {
        var x = E, D = x.alternate, N = x.stateNode, G = x.tag;
        if (D !== null && D === i)
          break;
        if (G === _ && N !== null) {
          var F = N;
          if (s) {
            var X = Jo(E, p);
            X != null && g.unshift(ud(E, X, F));
          } else if (!s) {
            var pe = Jo(E, p);
            pe != null && g.push(ud(E, pe, F));
          }
        }
        E = E.return;
      }
      g.length !== 0 && e.push({
        event: t,
        listeners: g
      });
    }
    function fO(e, t, r, i, s) {
      var p = i && s ? cO(i, s) : null;
      i !== null && mS(e, t, i, p, !1), s !== null && r !== null && mS(e, r, s, p, !0);
    }
    function yS(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ur = !1, sd = "dangerouslySetInnerHTML", Fv = "suppressContentEditableWarning", cd = "suppressHydrationWarning", gS = "autoFocus", ju = "children", Lu = "style", zv = "__html", ic = Es.html, Sy, fd, Iv, Pv, dd, ES, Bv, SS, pd, bS;
    {
      Sy = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Iv = function(e, t) {
        Bp(e, t), Km(e, t), Yp(e, t, {
          registrationNameDependencies: le,
          possibleRegistrationNames: ae
        });
      }, SS = Ee && !document.documentMode;
      var dO = /\r\n?/g, pO = /\u0000|\uFFFD/g;
      pd = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(dO, `
`).replace(pO, "");
      }, Pv = function(e, t) {
        if (!Ur) {
          var r = pd(t), i = pd(e);
          i !== r && (Ur = !0, m('Text content did not match. Server: "%s" Client: "%s"', i, r));
        }
      }, dd = function(e, t, r) {
        if (!Ur) {
          var i = pd(r), s = pd(t);
          s !== i && (Ur = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(i)));
        }
      }, ES = function(e) {
        if (!Ur) {
          Ur = !0;
          var t = [];
          e.forEach(function(r) {
            t.push(r);
          }), m("Extra attributes from the server: %s", t);
        }
      }, Bv = function(e, t) {
        t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, bS = function(e, t) {
        var r = e.namespaceURI === ic ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return r.innerHTML = t, r.innerHTML;
      };
    }
    function CS(e) {
      return e.nodeType === ui ? e : e.ownerDocument;
    }
    function vO() {
    }
    function Hv(e) {
      e.onclick = vO;
    }
    function hO(e, t, r, i, s) {
      for (var p in i)
        if (i.hasOwnProperty(p)) {
          var g = i[p];
          if (p === Lu)
            g && Object.freeze(g), lf(t, g);
          else if (p === sd) {
            var E = g ? g[zv] : void 0;
            E != null && Rp(t, E);
          } else if (p === ju)
            if (typeof g == "string") {
              var x = e !== "textarea" || g !== "";
              x && bs(t, g);
            } else
              typeof g == "number" && bs(t, "" + g);
          else
            p === Fv || p === cd || p === gS || (le.hasOwnProperty(p) ? g != null && (typeof g != "function" && Bv(p, g), p === "onScroll" && sn("scroll", t)) : g != null && Gt(t, p, g, s));
        }
    }
    function mO(e, t, r, i) {
      for (var s = 0; s < t.length; s += 2) {
        var p = t[s], g = t[s + 1];
        p === Lu ? lf(e, g) : p === sd ? Rp(e, g) : p === ju ? bs(e, g) : Gt(e, p, g, i);
      }
    }
    function yO(e, t, r, i) {
      var s, p = CS(r), g, E = i;
      if (E === ic && (E = Gl(e)), E === ic) {
        if (s = Yr(e, t), !s && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var x = p.createElement("div");
          x.innerHTML = "<script><\/script>";
          var D = x.firstChild;
          g = x.removeChild(D);
        } else if (typeof t.is == "string")
          g = p.createElement(e, {
            is: t.is
          });
        else if (g = p.createElement(e), e === "select") {
          var N = g;
          t.multiple ? N.multiple = !0 : t.size && (N.size = t.size);
        }
      } else
        g = p.createElementNS(E, e);
      return E === ic && !s && Object.prototype.toString.call(g) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(Sy, e) && (Sy[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), g;
    }
    function gO(e, t) {
      return CS(t).createTextNode(e);
    }
    function EO(e, t, r, i) {
      var s = Yr(t, r);
      Iv(t, r);
      var p;
      switch (t) {
        case "dialog":
          sn("cancel", e), sn("close", e), p = r;
          break;
        case "iframe":
        case "object":
        case "embed":
          sn("load", e), p = r;
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ld.length; g++)
            sn(ld[g], e);
          p = r;
          break;
        case "source":
          sn("error", e), p = r;
          break;
        case "img":
        case "image":
        case "link":
          sn("error", e), sn("load", e), p = r;
          break;
        case "details":
          sn("toggle", e), p = r;
          break;
        case "input":
          Ki(e, r), p = zt(e, r), sn("invalid", e);
          break;
        case "option":
          wp(e, r), p = Qc(e, r);
          break;
        case "select":
          ys(e, r), p = Yl(e, r), sn("invalid", e);
          break;
        case "textarea":
          ql(e, r), p = Wo(e, r), sn("invalid", e);
          break;
        default:
          p = r;
      }
      switch (Cs(t, p), hO(t, e, i, p, s), t) {
        case "input":
          Bl(e), Ho(e, r, !1);
          break;
        case "textarea":
          Bl(e), lr(e);
          break;
        case "option":
          jm(e, r);
          break;
        case "select":
          li(e, r);
          break;
        default:
          typeof p.onClick == "function" && Hv(e);
          break;
      }
    }
    function SO(e, t, r, i, s) {
      Iv(t, i);
      var p = null, g, E;
      switch (t) {
        case "input":
          g = zt(e, r), E = zt(e, i), p = [];
          break;
        case "option":
          g = Qc(e, r), E = Qc(e, i), p = [];
          break;
        case "select":
          g = Yl(e, r), E = Yl(e, i), p = [];
          break;
        case "textarea":
          g = Wo(e, r), E = Wo(e, i), p = [];
          break;
        default:
          g = r, E = i, typeof g.onClick != "function" && typeof E.onClick == "function" && Hv(e);
          break;
      }
      Cs(t, E);
      var x, D, N = null;
      for (x in g)
        if (!(E.hasOwnProperty(x) || !g.hasOwnProperty(x) || g[x] == null))
          if (x === Lu) {
            var G = g[x];
            for (D in G)
              G.hasOwnProperty(D) && (N || (N = {}), N[D] = "");
          } else
            x === sd || x === ju || x === Fv || x === cd || x === gS || (le.hasOwnProperty(x) ? p || (p = []) : (p = p || []).push(x, null));
      for (x in E) {
        var F = E[x], X = g != null ? g[x] : void 0;
        if (!(!E.hasOwnProperty(x) || F === X || F == null && X == null))
          if (x === Lu)
            if (F && Object.freeze(F), X) {
              for (D in X)
                X.hasOwnProperty(D) && (!F || !F.hasOwnProperty(D)) && (N || (N = {}), N[D] = "");
              for (D in F)
                F.hasOwnProperty(D) && X[D] !== F[D] && (N || (N = {}), N[D] = F[D]);
            } else
              N || (p || (p = []), p.push(x, N)), N = F;
          else if (x === sd) {
            var pe = F ? F[zv] : void 0, ke = X ? X[zv] : void 0;
            pe != null && ke !== pe && (p = p || []).push(x, pe);
          } else
            x === ju ? (typeof F == "string" || typeof F == "number") && (p = p || []).push(x, "" + F) : x === Fv || x === cd || (le.hasOwnProperty(x) ? (F != null && (typeof F != "function" && Bv(x, F), x === "onScroll" && sn("scroll", e)), !p && X !== F && (p = [])) : typeof F == "object" && F !== null && F.$$typeof === ye ? F.toString() : (p = p || []).push(x, F));
      }
      return N && (Wm(N, E[Lu]), (p = p || []).push(Lu, N)), p;
    }
    function bO(e, t, r, i, s) {
      r === "input" && s.type === "radio" && s.name != null && Cp(e, s);
      var p = Yr(r, i), g = Yr(r, s);
      switch (mO(e, t, p, g), r) {
        case "input":
          Kc(e, s);
          break;
        case "textarea":
          ef(e, s);
          break;
        case "select":
          Zc(e, s);
          break;
      }
    }
    function CO(e) {
      {
        var t = e.toLowerCase();
        return si.hasOwnProperty(t) && si[t] || null;
      }
    }
    function xO(e, t, r, i, s) {
      var p, g;
      switch (fd = r[cd] === !0, p = Yr(t, r), Iv(t, r), t) {
        case "dialog":
          sn("cancel", e), sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          sn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < ld.length; E++)
            sn(ld[E], e);
          break;
        case "source":
          sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          sn("error", e), sn("load", e);
          break;
        case "details":
          sn("toggle", e);
          break;
        case "input":
          Ki(e, r), sn("invalid", e);
          break;
        case "option":
          wp(e, r);
          break;
        case "select":
          ys(e, r), sn("invalid", e);
          break;
        case "textarea":
          ql(e, r), sn("invalid", e);
          break;
      }
      Cs(t, r);
      {
        g = /* @__PURE__ */ new Set();
        for (var x = e.attributes, D = 0; D < x.length; D++) {
          var N = x[D].name.toLowerCase();
          switch (N) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(x[D].name);
          }
        }
      }
      var G = null;
      for (var F in r)
        if (r.hasOwnProperty(F)) {
          var X = r[F];
          if (F === ju)
            typeof X == "string" ? e.textContent !== X && (fd || Pv(e.textContent, X), G = [ju, X]) : typeof X == "number" && e.textContent !== "" + X && (fd || Pv(e.textContent, X), G = [ju, "" + X]);
          else if (le.hasOwnProperty(F))
            X != null && (typeof X != "function" && Bv(F, X), F === "onScroll" && sn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof p == "boolean"
          ) {
            var pe = void 0, ke = it(F);
            if (!fd) {
              if (!(F === Fv || F === cd || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === sd) {
                  var tt = e.innerHTML, St = X ? X[zv] : void 0;
                  if (St != null) {
                    var ut = bS(e, St);
                    ut !== tt && dd(F, tt, ut);
                  }
                } else if (F === Lu) {
                  if (g.delete(F), SS) {
                    var _t = $p(X);
                    pe = e.getAttribute("style"), _t !== pe && dd(F, pe, _t);
                  }
                } else if (p)
                  g.delete(F.toLowerCase()), pe = Ft(e, F, X), X !== pe && dd(F, pe, X);
                else if (!ar(F, ke, p) && !hn(F, X, ke, p)) {
                  var Xt = !1;
                  if (ke !== null)
                    g.delete(ke.attributeName), pe = Nt(e, F, X, ke);
                  else {
                    var K = i;
                    if (K === ic && (K = Gl(t)), K === ic)
                      g.delete(F.toLowerCase());
                    else {
                      var ie = CO(F);
                      ie !== null && ie !== F && (Xt = !0, g.delete(ie)), g.delete(F);
                    }
                    pe = Ft(e, F, X);
                  }
                  X !== pe && !Xt && dd(F, pe, X);
                }
              }
            }
          }
        }
      switch (g.size > 0 && !fd && ES(g), t) {
        case "input":
          Bl(e), Ho(e, r, !0);
          break;
        case "textarea":
          Bl(e), lr(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof r.onClick == "function" && Hv(e);
          break;
      }
      return G;
    }
    function wO(e, t) {
      var r = e.nodeValue !== t;
      return r;
    }
    function xS(e, t) {
      Pv(e.nodeValue, t);
    }
    function wS(e, t) {
      {
        if (Ur)
          return;
        Ur = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function TS(e, t) {
      {
        if (Ur)
          return;
        Ur = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function RS(e, t, r) {
      {
        if (Ur)
          return;
        Ur = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function OS(e, t) {
      {
        if (t === "" || Ur)
          return;
        Ur = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function TO(e, t, r) {
      switch (t) {
        case "input":
          xp(e, r);
          return;
        case "textarea":
          Yo(e, r);
          return;
        case "select":
          gs(e, r);
          return;
      }
    }
    var vd = function() {
    }, hd = function() {
    };
    {
      var RO = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], kS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], OO = kS.concat(["button"]), kO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], DS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      hd = function(e, t) {
        var r = u({}, e || DS), i = {
          tag: t
        };
        return kS.indexOf(t) !== -1 && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), OO.indexOf(t) !== -1 && (r.pTagInButtonScope = null), RO.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = i, t === "form" && (r.formTag = i), t === "a" && (r.aTagInScope = i), t === "button" && (r.buttonTagInScope = i), t === "nobr" && (r.nobrTagInScope = i), t === "p" && (r.pTagInButtonScope = i), t === "li" && (r.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (r.dlItemTagAutoclosing = i), r;
      };
      var DO = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return kO.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, NO = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, NS = {};
      vd = function(e, t, r) {
        r = r || DS;
        var i = r.current, s = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = DO(e, s) ? null : i, g = p ? null : NO(e, r), E = p || g;
        if (E) {
          var x = E.tag, D = !!p + "|" + e + "|" + x;
          if (!NS[D]) {
            NS[D] = !0;
            var N = e, G = "";
            if (e === "#text" ? /\S/.test(t) ? N = "Text nodes" : (N = "Whitespace text nodes", G = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : N = "<" + e + ">", p) {
              var F = "";
              x === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", N, x, G, F);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", N, x);
          }
        }
      };
    }
    var oc;
    oc = "suppressHydrationWarning";
    var _S = "$", MS = "/$", by = "$?", Cy = "$!", _O = "style", xy = null, wy = null;
    function AS(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function MO(e) {
      var t, r, i = e.nodeType;
      switch (i) {
        case ui:
        case Op: {
          t = i === ui ? "#document" : "#fragment";
          var s = e.documentElement;
          r = s ? s.namespaceURI : Qi(null, "");
          break;
        }
        default: {
          var p = i === Qn ? e.parentNode : e, g = p.namespaceURI || null;
          t = p.tagName, r = Qi(g, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), x = hd(null, E);
        return {
          namespace: r,
          ancestorInfo: x
        };
      }
    }
    function AO(e, t, r) {
      {
        var i = e, s = Qi(i.namespace, t), p = hd(i.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: p
        };
      }
    }
    function oU(e) {
      return e;
    }
    function jO(e) {
      xy = Sv(), wy = V();
      var t = null;
      return qf(!1), t;
    }
    function LO(e) {
      I(wy), qf(xy), xy = null, wy = null;
    }
    function $O(e, t, r, i, s) {
      var p;
      {
        var g = i;
        if (vd(e, null, g.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, x = hd(g.ancestorInfo, e);
          vd(null, E, x);
        }
        p = g.namespace;
      }
      var D = yO(e, t, r, p);
      return Yv(s, D), ky(D, t), D;
    }
    function UO(e, t) {
      e.appendChild(t);
    }
    function FO(e, t, r, i, s) {
      return EO(e, t, r, i), AS(t, r);
    }
    function zO(e, t, r, i, s, p) {
      {
        var g = p;
        if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var E = "" + i.children, x = hd(g.ancestorInfo, t);
          vd(null, E, x);
        }
      }
      return SO(e, t, r, i);
    }
    function Ty(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function IO(e, t, r, i) {
      {
        var s = r;
        vd(null, e, s.ancestorInfo);
      }
      var p = gO(e, t);
      return Yv(i, p), p;
    }
    var jS = typeof setTimeout == "function" ? setTimeout : void 0, PO = typeof clearTimeout == "function" ? clearTimeout : void 0, Ry = -1;
    function BO(e, t, r, i) {
      AS(t, r) && e.focus();
    }
    function HO(e, t, r, i, s, p) {
      ky(e, s), bO(e, t, r, i, s);
    }
    function LS(e) {
      bs(e, "");
    }
    function VO(e, t, r) {
      e.nodeValue = r;
    }
    function WO(e, t) {
      e.appendChild(t);
    }
    function YO(e, t) {
      var r;
      e.nodeType === Qn ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
      var i = e._reactRootContainer;
      i == null && r.onclick === null && Hv(r);
    }
    function qO(e, t, r) {
      e.insertBefore(t, r);
    }
    function GO(e, t, r) {
      e.nodeType === Qn ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
    }
    function KO(e, t) {
      e.removeChild(t);
    }
    function QO(e, t) {
      e.nodeType === Qn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function XO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ZO(e) {
      e.nodeValue = "";
    }
    function JO(e, t) {
      e = e;
      var r = t[_O], i = r != null && r.hasOwnProperty("display") ? r.display : null;
      e.style.display = nf("display", i);
    }
    function ek(e, t) {
      e.nodeValue = t;
    }
    function Oy(e) {
      if (e.nodeType === Nr)
        e.textContent = "";
      else if (e.nodeType === ui) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function tk(e, t, r) {
      return e.nodeType !== Nr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function nk(e, t) {
      return t === "" || e.nodeType !== _a ? null : e;
    }
    function rk(e) {
      return e.data === by;
    }
    function ak(e) {
      return e.data === Cy;
    }
    function $S(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Nr || t === _a)
          break;
      }
      return e;
    }
    function Vv(e) {
      return $S(e.nextSibling);
    }
    function US(e) {
      return $S(e.firstChild);
    }
    function ik(e, t, r, i, s, p) {
      Yv(p, e), ky(e, r);
      var g;
      {
        var E = s;
        g = E.namespace;
      }
      return xO(e, t, r, g);
    }
    function ok(e, t, r) {
      return Yv(r, e), wO(e, t);
    }
    function lk(e) {
      for (var t = e.nextSibling, r = 0; t; ) {
        if (t.nodeType === Qn) {
          var i = t.data;
          if (i === MS) {
            if (r === 0)
              return Vv(t);
            r--;
          } else
            (i === _S || i === Cy || i === by) && r++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function FS(e) {
      for (var t = e.previousSibling, r = 0; t; ) {
        if (t.nodeType === Qn) {
          var i = t.data;
          if (i === _S || i === Cy || i === by) {
            if (r === 0)
              return t;
            r--;
          } else
            i === MS && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function uk(e) {
      kf(e);
    }
    function sk(e) {
      kf(e);
    }
    function ck(e, t, r) {
      xS(t, r);
    }
    function fk(e, t, r, i, s) {
      t[oc] !== !0 && xS(i, s);
    }
    function dk(e, t) {
      t.nodeType === Nr ? wS(e, t) : t.nodeType === Qn || TS(e, t);
    }
    function pk(e, t, r, i) {
      t[oc] !== !0 && (i.nodeType === Nr ? wS(r, i) : i.nodeType === Qn || TS(r, i));
    }
    function vk(e, t, r) {
      RS(e, t);
    }
    function hk(e, t) {
      OS(e, t);
    }
    function mk(e, t, r, i, s) {
      t[oc] !== !0 && RS(r, i);
    }
    function yk(e, t, r, i) {
      t[oc] !== !0 && OS(r, i);
    }
    function gk(e, t, r) {
      t[oc];
    }
    var Ek = 0;
    function Sk(e) {
      var t = "r:" + (Ek++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function bk(e) {
      return e !== null && typeof e == "object" && e.$$typeof === ye;
    }
    function Ck(e) {
      return {
        $$typeof: ye,
        toString: e,
        valueOf: e
      };
    }
    function xk(e) {
      fS(e);
    }
    var Wv = Math.random().toString(36).slice(2), md = "__reactFiber$" + Wv, zS = "__reactProps$" + Wv, yd = "__reactContainer$" + Wv, IS = "__reactEvents$" + Wv;
    function Yv(e, t) {
      t[md] = e;
    }
    function wk(e, t) {
      t[yd] = e;
    }
    function PS(e) {
      e[yd] = null;
    }
    function qv(e) {
      return !!e[yd];
    }
    function $u(e) {
      var t = e[md];
      if (t)
        return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[yd] || r[md], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var s = FS(e); s !== null; ) {
              var p = s[md];
              if (p)
                return p;
              s = FS(s);
            }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function Cl(e) {
      var t = e[md] || e[yd];
      return t && (t.tag === _ || t.tag === $ || t.tag === j || t.tag === O) ? t : null;
    }
    function lc(e) {
      if (e.tag === _ || e.tag === $)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Gv(e) {
      return e[zS] || null;
    }
    function ky(e, t) {
      e[zS] = t;
    }
    function BS(e) {
      var t = e[IS];
      return t === void 0 && (t = e[IS] = /* @__PURE__ */ new Set()), t;
    }
    var HS = {}, VS = v.ReactDebugCurrentFrame;
    function Kv(e) {
      if (e) {
        var t = e._owner, r = Or(e.type, e._source, t ? t.type : null);
        VS.setExtraStackFrame(r);
      } else
        VS.setExtraStackFrame(null);
    }
    function Wa(e, t, r, i, s) {
      {
        var p = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var g in e)
          if (p(e, g)) {
            var E = void 0;
            try {
              if (typeof e[g] != "function") {
                var x = Error((i || "React class") + ": " + r + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              E = e[g](t, g, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              E = D;
            }
            E && !(E instanceof Error) && (Kv(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, g, typeof E), Kv(null)), E instanceof Error && !(E.message in HS) && (HS[E.message] = !0, Kv(s), m("Failed %s type: %s", r, E.message), Kv(null));
          }
      }
    }
    var Dy = [], Qv;
    Qv = [];
    var bo = -1;
    function xl(e) {
      return {
        current: e
      };
    }
    function sr(e, t) {
      if (bo < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Qv[bo] && m("Unexpected Fiber popped."), e.current = Dy[bo], Dy[bo] = null, Qv[bo] = null, bo--;
    }
    function cr(e, t, r) {
      bo++, Dy[bo] = e.current, Qv[bo] = r, e.current = t;
    }
    var Ny;
    Ny = {};
    var Xr = {};
    Object.freeze(Xr);
    var Co = xl(Xr), Mi = xl(!1), _y = Xr;
    function uc(e, t, r) {
      return r && Ai(t) ? _y : Co.current;
    }
    function WS(e, t, r) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
      }
    }
    function sc(e, t) {
      {
        var r = e.type, i = r.contextTypes;
        if (!i)
          return Xr;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var g in i)
          p[g] = t[g];
        {
          var E = Le(r) || "Unknown";
          Wa(i, p, "context", E);
        }
        return s && WS(e, t, p), p;
      }
    }
    function Xv() {
      return Mi.current;
    }
    function Ai(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Zv(e) {
      sr(Mi, e), sr(Co, e);
    }
    function My(e) {
      sr(Mi, e), sr(Co, e);
    }
    function YS(e, t, r) {
      {
        if (Co.current !== Xr)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        cr(Co, t, e), cr(Mi, r, e);
      }
    }
    function qS(e, t, r) {
      {
        var i = e.stateNode, s = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var p = Le(t) || "Unknown";
            Ny[p] || (Ny[p] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return r;
        }
        var g = i.getChildContext();
        for (var E in g)
          if (!(E in s))
            throw Error((Le(t) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var x = Le(t) || "Unknown";
          Wa(s, g, "child context", x);
        }
        return u({}, r, g);
      }
    }
    function Jv(e) {
      {
        var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || Xr;
        return _y = Co.current, cr(Co, r, e), cr(Mi, Mi.current, e), !0;
      }
    }
    function GS(e, t, r) {
      {
        var i = e.stateNode;
        if (!i)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (r) {
          var s = qS(e, t, _y);
          i.__reactInternalMemoizedMergedChildContext = s, sr(Mi, e), sr(Co, e), cr(Co, s, e), cr(Mi, r, e);
        } else
          sr(Mi, e), cr(Mi, r, e);
      }
    }
    function Tk(e) {
      {
        if (!(As(e) && e.tag === w))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case w: {
              var r = t.type;
              if (Ai(r))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ay = 0, KS = 1, QS = 2, eh = null, ji = null, cc = !1, Rk = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ok(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        eh = t.inject(e), ji = t;
      } catch (r) {
        m("React instrumentation encountered an error: %s.", r);
      }
      return !0;
    }
    function kk(e, t) {
      if (ji && typeof ji.onScheduleFiberRoot == "function")
        try {
          ji.onScheduleFiberRoot(eh, e, t);
        } catch (r) {
          cc || (cc = !0, m("React instrumentation encountered an error: %s", r));
        }
    }
    function Dk(e, t) {
      if (ji && typeof ji.onCommitFiberRoot == "function")
        try {
          var r = (e.current.flags & Lt) === Lt;
          Ze && ji.onCommitFiberRoot(eh, e, t, r);
        } catch (i) {
          cc || (cc = !0, m("React instrumentation encountered an error: %s", i));
        }
    }
    function Nk(e) {
      if (ji && typeof ji.onCommitFiberUnmount == "function")
        try {
          ji.onCommitFiberUnmount(eh, e);
        } catch (t) {
          cc || (cc = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    var _k = c.unstable_runWithPriority, jy = c.unstable_scheduleCallback, XS = c.unstable_cancelCallback, Mk = c.unstable_shouldYield, ZS = c.unstable_requestPaint, Ly = c.unstable_now, Ak = c.unstable_getCurrentPriorityLevel, th = c.unstable_ImmediatePriority, JS = c.unstable_UserBlockingPriority, eb = c.unstable_NormalPriority, tb = c.unstable_LowPriority, nb = c.unstable_IdlePriority;
    if (!(f.__interactionsRef != null && f.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var rb = {}, Ea = 99, Uu = 98, xo = 97, ab = 96, ib = 95, $y = 90, jk = Mk, Lk = (
      // Fall back gracefully if we're running an older version of Scheduler.
      ZS !== void 0 ? ZS : function() {
      }
    ), wo = null, nh = null, Uy = !1, ob = Ly(), fr = ob < 1e4 ? Ly : function() {
      return Ly() - ob;
    };
    function fc() {
      switch (Ak()) {
        case th:
          return Ea;
        case JS:
          return Uu;
        case eb:
          return xo;
        case tb:
          return ab;
        case nb:
          return ib;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function lb(e) {
      switch (e) {
        case Ea:
          return th;
        case Uu:
          return JS;
        case xo:
          return eb;
        case ab:
          return tb;
        case ib:
          return nb;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Fu(e, t) {
      var r = lb(e);
      return _k(r, t);
    }
    function wl(e, t, r) {
      var i = lb(e);
      return jy(i, t, r);
    }
    function $k(e) {
      return wo === null ? (wo = [e], nh = jy(th, sb)) : wo.push(e), rb;
    }
    function ub(e) {
      e !== rb && XS(e);
    }
    function Li() {
      if (nh !== null) {
        var e = nh;
        nh = null, XS(e);
      }
      sb();
    }
    function sb() {
      if (!Uy && wo !== null) {
        Uy = !0;
        var e = 0;
        try {
          var t = !0, r = wo;
          Fu(Ea, function() {
            for (; e < r.length; e++) {
              var i = r[e];
              do
                i = i(t);
              while (i !== null);
            }
          }), wo = null;
        } catch (i) {
          throw wo !== null && (wo = wo.slice(e + 1)), jy(th, Li), i;
        } finally {
          Uy = !1;
        }
      }
    }
    var cb = "17.0.2", dn = 0, En = 1, Fr = 2, zu = 4, Zr = 8, Uk = 16, Fk = v.ReactCurrentBatchConfig, zk = 0;
    function Ik() {
      return Fk.transition;
    }
    var Ya = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Pk = function(e) {
        for (var t = null, r = e; r !== null; )
          r.mode & En && (t = r), r = r.return;
        return t;
      }, Iu = function(e) {
        var t = [];
        return e.forEach(function(r) {
          t.push(r);
        }), t.sort().join(", ");
      }, gd = [], Ed = [], Sd = [], bd = [], Cd = [], xd = [], Pu = /* @__PURE__ */ new Set();
      Ya.recordUnsafeLifecycleWarnings = function(e, t) {
        Pu.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gd.push(e), e.mode & En && typeof t.UNSAFE_componentWillMount == "function" && Ed.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Sd.push(e), e.mode & En && typeof t.UNSAFE_componentWillReceiveProps == "function" && bd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Cd.push(e), e.mode & En && typeof t.UNSAFE_componentWillUpdate == "function" && xd.push(e));
      }, Ya.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gd.length > 0 && (gd.forEach(function(F) {
          e.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), gd = []);
        var t = /* @__PURE__ */ new Set();
        Ed.length > 0 && (Ed.forEach(function(F) {
          t.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), Ed = []);
        var r = /* @__PURE__ */ new Set();
        Sd.length > 0 && (Sd.forEach(function(F) {
          r.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), Sd = []);
        var i = /* @__PURE__ */ new Set();
        bd.length > 0 && (bd.forEach(function(F) {
          i.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), bd = []);
        var s = /* @__PURE__ */ new Set();
        Cd.length > 0 && (Cd.forEach(function(F) {
          s.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), Cd = []);
        var p = /* @__PURE__ */ new Set();
        if (xd.length > 0 && (xd.forEach(function(F) {
          p.add(Le(F.type) || "Component"), Pu.add(F.type);
        }), xd = []), t.size > 0) {
          var g = Iu(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, g);
        }
        if (i.size > 0) {
          var E = Iu(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (p.size > 0) {
          var x = Iu(p);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
        }
        if (e.size > 0) {
          var D = Iu(e);
          h(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (r.size > 0) {
          var N = Iu(r);
          h(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
        if (s.size > 0) {
          var G = Iu(s);
          h(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, G);
        }
      };
      var rh = /* @__PURE__ */ new Map(), fb = /* @__PURE__ */ new Set();
      Ya.recordLegacyContextWarning = function(e, t) {
        var r = Pk(e);
        if (r === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fb.has(e.type)) {
          var i = rh.get(r);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], rh.set(r, i)), i.push(e));
        }
      }, Ya.flushLegacyContextWarning = function() {
        rh.forEach(function(e, t) {
          if (e.length !== 0) {
            var r = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              i.add(Le(p.type) || "Component"), fb.add(p.type);
            });
            var s = Iu(i);
            try {
              kn(r), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              or();
            }
          }
        });
      }, Ya.discardPendingWarnings = function() {
        gd = [], Ed = [], Sd = [], bd = [], Cd = [], xd = [], rh = /* @__PURE__ */ new Map();
      };
    }
    function qa(e, t) {
      if (e && e.defaultProps) {
        var r = u({}, t), i = e.defaultProps;
        for (var s in i)
          r[s] === void 0 && (r[s] = i[s]);
        return r;
      }
      return t;
    }
    var ah = 1073741823, Fy = xl(null), zy;
    zy = {};
    var ih = null, dc = null, oh = null, lh = !1;
    function uh() {
      ih = null, dc = null, oh = null, lh = !1;
    }
    function db() {
      lh = !0;
    }
    function pb() {
      lh = !1;
    }
    function vb(e, t) {
      var r = e.type._context;
      cr(Fy, r._currentValue, e), r._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== zy && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = zy;
    }
    function Iy(e) {
      var t = Fy.current;
      sr(Fy, e);
      var r = e.type._context;
      r._currentValue = t;
    }
    function Bk(e, t, r) {
      if (a(r, t))
        return 0;
      var i = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(r, t) : ah;
      return (i & ah) !== i && m("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", i), i | 0;
    }
    function hb(e, t) {
      for (var r = e; r !== null; ) {
        var i = r.alternate;
        if (!wi(r.childLanes, t))
          r.childLanes = At(r.childLanes, t), i !== null && (i.childLanes = At(i.childLanes, t));
        else if (i !== null && !wi(i.childLanes, t))
          i.childLanes = At(i.childLanes, t);
        else
          break;
        r = r.return;
      }
    }
    function Hk(e, t, r, i) {
      var s = e.child;
      for (s !== null && (s.return = e); s !== null; ) {
        var p = void 0, g = s.dependencies;
        if (g !== null) {
          p = s.child;
          for (var E = g.firstContext; E !== null; ) {
            if (E.context === t && E.observedBits & r) {
              if (s.tag === w) {
                var x = Tl(rn, jn(i));
                x.tag = sh, Rl(s, x);
              }
              s.lanes = At(s.lanes, i);
              var D = s.alternate;
              D !== null && (D.lanes = At(D.lanes, i)), hb(s.return, i), g.lanes = At(g.lanes, i);
              break;
            }
            E = E.next;
          }
        } else
          s.tag === J ? p = s.type === e.type ? null : s.child : p = s.child;
        if (p !== null)
          p.return = s;
        else
          for (p = s; p !== null; ) {
            if (p === e) {
              p = null;
              break;
            }
            var N = p.sibling;
            if (N !== null) {
              N.return = p.return, p = N;
              break;
            }
            p = p.return;
          }
        s = p;
      }
    }
    function pc(e, t) {
      ih = e, dc = null, oh = null;
      var r = e.dependencies;
      if (r !== null) {
        var i = r.firstContext;
        i !== null && (Pn(r.lanes, t) && Gg(), r.firstContext = null);
      }
    }
    function $n(e, t) {
      if (lh && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), oh !== e) {
        if (!(t === !1 || t === 0)) {
          var r;
          typeof t != "number" || t === ah ? (oh = e, r = ah) : r = t;
          var i = {
            context: e,
            observedBits: r,
            next: null
          };
          if (dc === null) {
            if (ih === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            dc = i, ih.dependencies = {
              lanes: se,
              firstContext: i,
              responders: null
            };
          } else
            dc = dc.next = i;
        }
      }
      return e._currentValue;
    }
    var mb = 0, yb = 1, sh = 2, Py = 3, ch = !1, By, fh;
    By = !1, fh = null;
    function Hy(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gb(e, t) {
      var r = t.updateQueue, i = e.updateQueue;
      if (r === i) {
        var s = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = s;
      }
    }
    function Tl(e, t) {
      var r = {
        eventTime: e,
        lane: t,
        tag: mb,
        payload: null,
        callback: null,
        next: null
      };
      return r;
    }
    function Rl(e, t) {
      var r = e.updateQueue;
      if (r !== null) {
        var i = r.shared, s = i.pending;
        s === null ? t.next = t : (t.next = s.next, s.next = t), i.pending = t, fh === i && !By && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), By = !0);
      }
    }
    function Eb(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var s = i.updateQueue;
        if (r === s) {
          var p = null, g = null, E = r.firstBaseUpdate;
          if (E !== null) {
            var x = E;
            do {
              var D = {
                eventTime: x.eventTime,
                lane: x.lane,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null
              };
              g === null ? p = g = D : (g.next = D, g = D), x = x.next;
            } while (x !== null);
            g === null ? p = g = t : (g.next = t, g = t);
          } else
            p = g = t;
          r = {
            baseState: s.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: g,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = r;
          return;
        }
      }
      var N = r.lastBaseUpdate;
      N === null ? r.firstBaseUpdate = t : N.next = t, r.lastBaseUpdate = t;
    }
    function Vk(e, t, r, i, s, p) {
      switch (r.tag) {
        case yb: {
          var g = r.payload;
          if (typeof g == "function") {
            db();
            var E = g.call(p, i, s);
            {
              if (e.mode & En) {
                oa();
                try {
                  g.call(p, i, s);
                } finally {
                  Vn();
                }
              }
              pb();
            }
            return E;
          }
          return g;
        }
        case Py:
          e.flags = e.flags & ~qr | Lt;
        case mb: {
          var x = r.payload, D;
          if (typeof x == "function") {
            db(), D = x.call(p, i, s);
            {
              if (e.mode & En) {
                oa();
                try {
                  x.call(p, i, s);
                } finally {
                  Vn();
                }
              }
              pb();
            }
          } else
            D = x;
          return D == null ? i : u({}, i, D);
        }
        case sh:
          return ch = !0, i;
      }
      return i;
    }
    function wd(e, t, r, i) {
      var s = e.updateQueue;
      ch = !1, fh = s.shared;
      var p = s.firstBaseUpdate, g = s.lastBaseUpdate, E = s.shared.pending;
      if (E !== null) {
        s.shared.pending = null;
        var x = E, D = x.next;
        x.next = null, g === null ? p = D : g.next = D, g = x;
        var N = e.alternate;
        if (N !== null) {
          var G = N.updateQueue, F = G.lastBaseUpdate;
          F !== g && (F === null ? G.firstBaseUpdate = D : F.next = D, G.lastBaseUpdate = x);
        }
      }
      if (p !== null) {
        var X = s.baseState, pe = se, ke = null, tt = null, St = null, ut = p;
        do {
          var _t = ut.lane, Xt = ut.eventTime;
          if (wi(i, _t)) {
            if (St !== null) {
              var ie = {
                eventTime: Xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yn,
                tag: ut.tag,
                payload: ut.payload,
                callback: ut.callback,
                next: null
              };
              St = St.next = ie;
            }
            X = Vk(e, s, ut, X, t, r);
            var H = ut.callback;
            if (H !== null) {
              e.flags |= vi;
              var Se = s.effects;
              Se === null ? s.effects = [ut] : Se.push(ut);
            }
          } else {
            var K = {
              eventTime: Xt,
              lane: _t,
              tag: ut.tag,
              payload: ut.payload,
              callback: ut.callback,
              next: null
            };
            St === null ? (tt = St = K, ke = X) : St = St.next = K, pe = At(pe, _t);
          }
          if (ut = ut.next, ut === null) {
            if (E = s.shared.pending, E === null)
              break;
            var $e = E, qe = $e.next;
            $e.next = null, ut = qe, s.lastBaseUpdate = $e, s.shared.pending = null;
          }
        } while (!0);
        St === null && (ke = X), s.baseState = ke, s.firstBaseUpdate = tt, s.lastBaseUpdate = St, E0(pe), e.lanes = pe, e.memoizedState = X;
      }
      fh = null;
    }
    function Wk(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function Sb() {
      ch = !1;
    }
    function dh() {
      return ch;
    }
    function bb(e, t, r) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var s = 0; s < i.length; s++) {
          var p = i[s], g = p.callback;
          g !== null && (p.callback = null, Wk(g, r));
        }
    }
    var Vy = {}, Yk = Array.isArray, Cb = new l.Component().refs, Wy, Yy, qy, Gy, Ky, xb, ph, Qy, Xy, Zy;
    {
      Wy = /* @__PURE__ */ new Set(), Yy = /* @__PURE__ */ new Set(), qy = /* @__PURE__ */ new Set(), Gy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set(), Ky = /* @__PURE__ */ new Set(), Xy = /* @__PURE__ */ new Set(), Zy = /* @__PURE__ */ new Set();
      var wb = /* @__PURE__ */ new Set();
      ph = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          wb.has(r) || (wb.add(r), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, xb = function(e, t) {
        if (t === void 0) {
          var r = Le(e) || "Component";
          Ky.has(r) || (Ky.add(r), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      }, Object.defineProperty(Vy, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Vy);
    }
    function vh(e, t, r, i) {
      var s = e.memoizedState;
      if (e.mode & En) {
        oa();
        try {
          r(i, s);
        } finally {
          Vn();
        }
      }
      var p = r(i, s);
      xb(t, p);
      var g = p == null ? s : u({}, s, p);
      if (e.memoizedState = g, e.lanes === se) {
        var E = e.updateQueue;
        E.baseState = g;
      }
    }
    var Jy = {
      isMounted: nv,
      enqueueSetState: function(e, t, r) {
        var i = ja(e), s = ea(), p = Nl(i), g = Tl(s, p);
        g.payload = t, r != null && (ph(r, "setState"), g.callback = r), Rl(i, g), pr(i, p, s);
      },
      enqueueReplaceState: function(e, t, r) {
        var i = ja(e), s = ea(), p = Nl(i), g = Tl(s, p);
        g.tag = yb, g.payload = t, r != null && (ph(r, "replaceState"), g.callback = r), Rl(i, g), pr(i, p, s);
      },
      enqueueForceUpdate: function(e, t) {
        var r = ja(e), i = ea(), s = Nl(r), p = Tl(i, s);
        p.tag = sh, t != null && (ph(t, "forceUpdate"), p.callback = t), Rl(r, p), pr(r, s, i);
      }
    };
    function Tb(e, t, r, i, s, p, g) {
      var E = e.stateNode;
      if (typeof E.shouldComponentUpdate == "function") {
        if (e.mode & En) {
          oa();
          try {
            E.shouldComponentUpdate(i, p, g);
          } finally {
            Vn();
          }
        }
        var x = E.shouldComponentUpdate(i, p, g);
        return x === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Le(t) || "Component"), x;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !d(r, i) || !d(s, p) : !0;
    }
    function qk(e, t, r) {
      var i = e.stateNode;
      {
        var s = Le(t) || "Component", p = i.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !Xy.has(t) && (Xy.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Le(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var g = i.props !== r;
        i.props !== void 0 && g && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qy.has(t) && (qy.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Le(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var E = i.state;
        E && (typeof E != "object" || Yk(E)) && m("%s.state: must be set to an object or null", s), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Rb(e, t) {
      t.updater = Jy, e.stateNode = t, gf(t, e), t._reactInternalInstance = Vy;
    }
    function Ob(e, t, r) {
      var i = !1, s = Xr, p = Xr, g = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          g === null || g !== void 0 && g.$$typeof === Ja && g._context === void 0
        );
        if (!E && !Zy.has(t)) {
          Zy.add(t);
          var x = "";
          g === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? x = " However, it is set to a " + typeof g + "." : g.$$typeof === ka ? x = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Le(t) || "Component", x);
        }
      }
      if (typeof g == "object" && g !== null)
        p = $n(g);
      else {
        s = uc(e, t, !0);
        var D = t.contextTypes;
        i = D != null, p = i ? sc(e, s) : Xr;
      }
      if (e.mode & En) {
        oa();
        try {
          new t(r, p);
        } finally {
          Vn();
        }
      }
      var N = new t(r, p), G = e.memoizedState = N.state !== null && N.state !== void 0 ? N.state : null;
      Rb(e, N);
      {
        if (typeof t.getDerivedStateFromProps == "function" && G === null) {
          var F = Le(t) || "Component";
          Yy.has(F) || (Yy.add(F), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, N.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof N.getSnapshotBeforeUpdate == "function") {
          var X = null, pe = null, ke = null;
          if (typeof N.componentWillMount == "function" && N.componentWillMount.__suppressDeprecationWarning !== !0 ? X = "componentWillMount" : typeof N.UNSAFE_componentWillMount == "function" && (X = "UNSAFE_componentWillMount"), typeof N.componentWillReceiveProps == "function" && N.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? pe = "componentWillReceiveProps" : typeof N.UNSAFE_componentWillReceiveProps == "function" && (pe = "UNSAFE_componentWillReceiveProps"), typeof N.componentWillUpdate == "function" && N.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ke = "componentWillUpdate" : typeof N.UNSAFE_componentWillUpdate == "function" && (ke = "UNSAFE_componentWillUpdate"), X !== null || pe !== null || ke !== null) {
            var tt = Le(t) || "Component", St = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Gy.has(tt) || (Gy.add(tt), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, tt, St, X !== null ? `
  ` + X : "", pe !== null ? `
  ` + pe : "", ke !== null ? `
  ` + ke : ""));
          }
        }
      }
      return i && WS(e, s, p), N;
    }
    function Gk(e, t) {
      var r = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e.type) || "Component"), Jy.enqueueReplaceState(t, t.state, null));
    }
    function kb(e, t, r, i) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== s) {
        {
          var p = Le(e.type) || "Component";
          Wy.has(p) || (Wy.add(p), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        Jy.enqueueReplaceState(t, t.state, null);
      }
    }
    function eg(e, t, r, i) {
      qk(e, t, r);
      var s = e.stateNode;
      s.props = r, s.state = e.memoizedState, s.refs = Cb, Hy(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        s.context = $n(p);
      else {
        var g = uc(e, t, !0);
        s.context = sc(e, g);
      }
      {
        if (s.state === r) {
          var E = Le(t) || "Component";
          Qy.has(E) || (Qy.add(E), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & En && Ya.recordLegacyContextWarning(e, s), Ya.recordUnsafeLifecycleWarnings(e, s);
      }
      wd(e, r, s, i), s.state = e.memoizedState;
      var x = t.getDerivedStateFromProps;
      typeof x == "function" && (vh(e, t, x, r), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (Gk(e, s), wd(e, r, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= ot);
    }
    function Kk(e, t, r, i) {
      var s = e.stateNode, p = e.memoizedProps;
      s.props = p;
      var g = s.context, E = t.contextType, x = Xr;
      if (typeof E == "object" && E !== null)
        x = $n(E);
      else {
        var D = uc(e, t, !0);
        x = sc(e, D);
      }
      var N = t.getDerivedStateFromProps, G = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !G && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== r || g !== x) && kb(e, s, r, x), Sb();
      var F = e.memoizedState, X = s.state = F;
      if (wd(e, r, s, i), X = e.memoizedState, p === r && F === X && !Xv() && !dh())
        return typeof s.componentDidMount == "function" && (e.flags |= ot), !1;
      typeof N == "function" && (vh(e, t, N, r), X = e.memoizedState);
      var pe = dh() || Tb(e, t, p, r, F, X, x);
      return pe ? (!G && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= ot)) : (typeof s.componentDidMount == "function" && (e.flags |= ot), e.memoizedProps = r, e.memoizedState = X), s.props = r, s.state = X, s.context = x, pe;
    }
    function Qk(e, t, r, i, s) {
      var p = t.stateNode;
      gb(e, t);
      var g = t.memoizedProps, E = t.type === t.elementType ? g : qa(t.type, g);
      p.props = E;
      var x = t.pendingProps, D = p.context, N = r.contextType, G = Xr;
      if (typeof N == "object" && N !== null)
        G = $n(N);
      else {
        var F = uc(t, r, !0);
        G = sc(t, F);
      }
      var X = r.getDerivedStateFromProps, pe = typeof X == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !pe && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (g !== x || D !== G) && kb(t, p, i, G), Sb();
      var ke = t.memoizedState, tt = p.state = ke;
      if (wd(t, i, p, s), tt = t.memoizedState, g === x && ke === tt && !Xv() && !dh())
        return typeof p.componentDidUpdate == "function" && (g !== e.memoizedProps || ke !== e.memoizedState) && (t.flags |= ot), typeof p.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ke !== e.memoizedState) && (t.flags |= ua), !1;
      typeof X == "function" && (vh(t, r, X, i), tt = t.memoizedState);
      var St = dh() || Tb(t, r, E, i, ke, tt, G);
      return St ? (!pe && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(i, tt, G), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(i, tt, G)), typeof p.componentDidUpdate == "function" && (t.flags |= ot), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= ua)) : (typeof p.componentDidUpdate == "function" && (g !== e.memoizedProps || ke !== e.memoizedState) && (t.flags |= ot), typeof p.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ke !== e.memoizedState) && (t.flags |= ua), t.memoizedProps = i, t.memoizedState = tt), p.props = i, p.state = tt, p.context = G, St;
    }
    var tg, ng, rg, ag, ig, Db = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, Db = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var r = Le(t.type) || "Component";
        ag[r] || (ag[r] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var hh = Array.isArray;
    function Td(e, t, r) {
      var i = r.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & En || re) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(r._owner && r._self && r._owner.stateNode !== r._self)) {
          var s = Le(e.type) || "Component";
          rg[s] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), rg[s] = !0);
        }
        if (r._owner) {
          var p = r._owner, g;
          if (p) {
            var E = p;
            if (E.tag !== w)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            g = E.stateNode;
          }
          if (!g)
            throw Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var D = function(N) {
            var G = g.refs;
            G === Cb && (G = g.refs = {}), N === null ? delete G[x] : G[x] = N;
          };
          return D._stringRef = x, D;
        } else {
          if (typeof i != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!r._owner)
            throw Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function mh(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function yh(e) {
      {
        var t = Le(e.type) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Nb(e) {
      function t(K, ie) {
        if (e) {
          var H = K.lastEffect;
          H !== null ? (H.nextEffect = ie, K.lastEffect = ie) : K.firstEffect = K.lastEffect = ie, ie.nextEffect = null, ie.flags = tn;
        }
      }
      function r(K, ie) {
        if (!e)
          return null;
        for (var H = ie; H !== null; )
          t(K, H), H = H.sibling;
        return null;
      }
      function i(K, ie) {
        for (var H = /* @__PURE__ */ new Map(), Se = ie; Se !== null; )
          Se.key !== null ? H.set(Se.key, Se) : H.set(Se.index, Se), Se = Se.sibling;
        return H;
      }
      function s(K, ie) {
        var H = Zu(K, ie);
        return H.index = 0, H.sibling = null, H;
      }
      function p(K, ie, H) {
        if (K.index = H, !e)
          return ie;
        var Se = K.alternate;
        if (Se !== null) {
          var $e = Se.index;
          return $e < ie ? (K.flags = pt, ie) : $e;
        } else
          return K.flags = pt, ie;
      }
      function g(K) {
        return e && K.alternate === null && (K.flags = pt), K;
      }
      function E(K, ie, H, Se) {
        if (ie === null || ie.tag !== $) {
          var $e = A0(H, K.mode, Se);
          return $e.return = K, $e;
        } else {
          var qe = s(ie, H);
          return qe.return = K, qe;
        }
      }
      function x(K, ie, H, Se) {
        if (ie !== null && (ie.elementType === H.type || // Keep this check inline so it only runs on the false path:
        cx(ie, H))) {
          var $e = s(ie, H.props);
          return $e.ref = Td(K, ie, H), $e.return = K, $e._debugSource = H._source, $e._debugOwner = H._owner, $e;
        }
        var qe = _0(H, K.mode, Se);
        return qe.ref = Td(K, ie, H), qe.return = K, qe;
      }
      function D(K, ie, H, Se) {
        if (ie === null || ie.tag !== M || ie.stateNode.containerInfo !== H.containerInfo || ie.stateNode.implementation !== H.implementation) {
          var $e = j0(H, K.mode, Se);
          return $e.return = K, $e;
        } else {
          var qe = s(ie, H.children || []);
          return qe.return = K, qe;
        }
      }
      function N(K, ie, H, Se, $e) {
        if (ie === null || ie.tag !== Y) {
          var qe = Ju(H, K.mode, Se, $e);
          return qe.return = K, qe;
        } else {
          var Dt = s(ie, H);
          return Dt.return = K, Dt;
        }
      }
      function G(K, ie, H) {
        if (typeof ie == "string" || typeof ie == "number") {
          var Se = A0("" + ie, K.mode, H);
          return Se.return = K, Se;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case On: {
              var $e = _0(ie, K.mode, H);
              return $e.ref = Td(K, null, ie), $e.return = K, $e;
            }
            case Jt: {
              var qe = j0(ie, K.mode, H);
              return qe.return = K, qe;
            }
          }
          if (hh(ie) || Vt(ie)) {
            var Dt = Ju(ie, K.mode, H, null);
            return Dt.return = K, Dt;
          }
          mh(K, ie);
        }
        return typeof ie == "function" && yh(K), null;
      }
      function F(K, ie, H, Se) {
        var $e = ie !== null ? ie.key : null;
        if (typeof H == "string" || typeof H == "number")
          return $e !== null ? null : E(K, ie, "" + H, Se);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case On:
              return H.key === $e ? H.type === wr ? N(K, ie, H.props.children, Se, $e) : x(K, ie, H, Se) : null;
            case Jt:
              return H.key === $e ? D(K, ie, H, Se) : null;
          }
          if (hh(H) || Vt(H))
            return $e !== null ? null : N(K, ie, H, Se, null);
          mh(K, H);
        }
        return typeof H == "function" && yh(K), null;
      }
      function X(K, ie, H, Se, $e) {
        if (typeof Se == "string" || typeof Se == "number") {
          var qe = K.get(H) || null;
          return E(ie, qe, "" + Se, $e);
        }
        if (typeof Se == "object" && Se !== null) {
          switch (Se.$$typeof) {
            case On: {
              var Dt = K.get(Se.key === null ? H : Se.key) || null;
              return Se.type === wr ? N(ie, Dt, Se.props.children, $e, Se.key) : x(ie, Dt, Se, $e);
            }
            case Jt: {
              var an = K.get(Se.key === null ? H : Se.key) || null;
              return D(ie, an, Se, $e);
            }
          }
          if (hh(Se) || Vt(Se)) {
            var pn = K.get(H) || null;
            return N(ie, pn, Se, $e, null);
          }
          mh(ie, Se);
        }
        return typeof Se == "function" && yh(ie), null;
      }
      function pe(K, ie, H) {
        {
          if (typeof K != "object" || K === null)
            return ie;
          switch (K.$$typeof) {
            case On:
            case Jt:
              Db(K, H);
              var Se = K.key;
              if (typeof Se != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(Se);
                break;
              }
              if (!ie.has(Se)) {
                ie.add(Se);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Se);
              break;
          }
        }
        return ie;
      }
      function ke(K, ie, H, Se) {
        for (var $e = null, qe = 0; qe < H.length; qe++) {
          var Dt = H[qe];
          $e = pe(Dt, $e, K);
        }
        for (var an = null, pn = null, Pt = ie, Un = 0, $t = 0, vn = null; Pt !== null && $t < H.length; $t++) {
          Pt.index > $t ? (vn = Pt, Pt = null) : vn = Pt.sibling;
          var qn = F(K, Pt, H[$t], Se);
          if (qn === null) {
            Pt === null && (Pt = vn);
            break;
          }
          e && Pt && qn.alternate === null && t(K, Pt), Un = p(qn, Un, $t), pn === null ? an = qn : pn.sibling = qn, pn = qn, Pt = vn;
        }
        if ($t === H.length)
          return r(K, Pt), an;
        if (Pt === null) {
          for (; $t < H.length; $t++) {
            var Tn = G(K, H[$t], Se);
            Tn !== null && (Un = p(Tn, Un, $t), pn === null ? an = Tn : pn.sibling = Tn, pn = Tn);
          }
          return an;
        }
        for (var Pi = i(K, Pt); $t < H.length; $t++) {
          var Rn = X(Pi, K, $t, H[$t], Se);
          Rn !== null && (e && Rn.alternate !== null && Pi.delete(Rn.key === null ? $t : Rn.key), Un = p(Rn, Un, $t), pn === null ? an = Rn : pn.sibling = Rn, pn = Rn);
        }
        return e && Pi.forEach(function(Bi) {
          return t(K, Bi);
        }), an;
      }
      function tt(K, ie, H, Se) {
        var $e = Vt(H);
        if (typeof $e != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (ng || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), H.entries === $e && (tg || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var qe = $e.call(H);
          if (qe)
            for (var Dt = null, an = qe.next(); !an.done; an = qe.next()) {
              var pn = an.value;
              Dt = pe(pn, Dt, K);
            }
        }
        var Pt = $e.call(H);
        if (Pt == null)
          throw Error("An iterable object provided no iterator.");
        for (var Un = null, $t = null, vn = ie, qn = 0, Tn = 0, Pi = null, Rn = Pt.next(); vn !== null && !Rn.done; Tn++, Rn = Pt.next()) {
          vn.index > Tn ? (Pi = vn, vn = null) : Pi = vn.sibling;
          var Bi = F(K, vn, Rn.value, Se);
          if (Bi === null) {
            vn === null && (vn = Pi);
            break;
          }
          e && vn && Bi.alternate === null && t(K, vn), qn = p(Bi, qn, Tn), $t === null ? Un = Bi : $t.sibling = Bi, $t = Bi, vn = Pi;
        }
        if (Rn.done)
          return r(K, vn), Un;
        if (vn === null) {
          for (; !Rn.done; Tn++, Rn = Pt.next()) {
            var es = G(K, Rn.value, Se);
            es !== null && (qn = p(es, qn, Tn), $t === null ? Un = es : $t.sibling = es, $t = es);
          }
          return Un;
        }
        for (var P0 = i(K, vn); !Rn.done; Tn++, Rn = Pt.next()) {
          var Al = X(P0, K, Tn, Rn.value, Se);
          Al !== null && (e && Al.alternate !== null && P0.delete(Al.key === null ? Tn : Al.key), qn = p(Al, qn, Tn), $t === null ? Un = Al : $t.sibling = Al, $t = Al);
        }
        return e && P0.forEach(function(K_) {
          return t(K, K_);
        }), Un;
      }
      function St(K, ie, H, Se) {
        if (ie !== null && ie.tag === $) {
          r(K, ie.sibling);
          var $e = s(ie, H);
          return $e.return = K, $e;
        }
        r(K, ie);
        var qe = A0(H, K.mode, Se);
        return qe.return = K, qe;
      }
      function ut(K, ie, H, Se) {
        for (var $e = H.key, qe = ie; qe !== null; ) {
          if (qe.key === $e) {
            switch (qe.tag) {
              case Y: {
                if (H.type === wr) {
                  r(K, qe.sibling);
                  var Dt = s(qe, H.props.children);
                  return Dt.return = K, Dt._debugSource = H._source, Dt._debugOwner = H._owner, Dt;
                }
                break;
              }
              case Me:
              default: {
                if (qe.elementType === H.type || // Keep this check inline so it only runs on the false path:
                cx(qe, H)) {
                  r(K, qe.sibling);
                  var an = s(qe, H.props);
                  return an.ref = Td(K, qe, H), an.return = K, an._debugSource = H._source, an._debugOwner = H._owner, an;
                }
                break;
              }
            }
            r(K, qe);
            break;
          } else
            t(K, qe);
          qe = qe.sibling;
        }
        if (H.type === wr) {
          var pn = Ju(H.props.children, K.mode, Se, H.key);
          return pn.return = K, pn;
        } else {
          var Pt = _0(H, K.mode, Se);
          return Pt.ref = Td(K, ie, H), Pt.return = K, Pt;
        }
      }
      function _t(K, ie, H, Se) {
        for (var $e = H.key, qe = ie; qe !== null; ) {
          if (qe.key === $e)
            if (qe.tag === M && qe.stateNode.containerInfo === H.containerInfo && qe.stateNode.implementation === H.implementation) {
              r(K, qe.sibling);
              var Dt = s(qe, H.children || []);
              return Dt.return = K, Dt;
            } else {
              r(K, qe);
              break;
            }
          else
            t(K, qe);
          qe = qe.sibling;
        }
        var an = j0(H, K.mode, Se);
        return an.return = K, an;
      }
      function Xt(K, ie, H, Se) {
        var $e = typeof H == "object" && H !== null && H.type === wr && H.key === null;
        $e && (H = H.props.children);
        var qe = typeof H == "object" && H !== null;
        if (qe)
          switch (H.$$typeof) {
            case On:
              return g(ut(K, ie, H, Se));
            case Jt:
              return g(_t(K, ie, H, Se));
          }
        if (typeof H == "string" || typeof H == "number")
          return g(St(K, ie, "" + H, Se));
        if (hh(H))
          return ke(K, ie, H, Se);
        if (Vt(H))
          return tt(K, ie, H, Se);
        if (qe && mh(K, H), typeof H == "function" && yh(K), typeof H > "u" && !$e)
          switch (K.tag) {
            case w: {
              var Dt = K.stateNode;
              if (Dt.render._isMockFunction)
                break;
            }
            case Me:
            case b:
            case P:
            case ne:
              throw Error((Le(K.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return r(K, ie);
      }
      return Xt;
    }
    var gh = Nb(!0), _b = Nb(!1);
    function Xk(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var r = t.child, i = Zu(r, r.pendingProps);
        for (t.child = i, i.return = t; r.sibling !== null; )
          r = r.sibling, i = i.sibling = Zu(r, r.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Zk(e, t) {
      for (var r = e.child; r !== null; )
        f_(r, t), r = r.sibling;
    }
    var Rd = {}, Ol = xl(Rd), Od = xl(Rd), Eh = xl(Rd);
    function Sh(e) {
      if (e === Rd)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Mb() {
      var e = Sh(Eh.current);
      return e;
    }
    function og(e, t) {
      cr(Eh, t, e), cr(Od, e, e), cr(Ol, Rd, e);
      var r = MO(t);
      sr(Ol, e), cr(Ol, r, e);
    }
    function vc(e) {
      sr(Ol, e), sr(Od, e), sr(Eh, e);
    }
    function lg() {
      var e = Sh(Ol.current);
      return e;
    }
    function Ab(e) {
      Sh(Eh.current);
      var t = Sh(Ol.current), r = AO(t, e.type);
      t !== r && (cr(Od, e, e), cr(Ol, r, e));
    }
    function ug(e) {
      Od.current === e && (sr(Ol, e), sr(Od, e));
    }
    var Jk = 0, jb = 1, sg = 1, kd = 2, Ga = xl(Jk);
    function bh(e, t) {
      return (e & t) !== 0;
    }
    function Dd(e) {
      return e & jb;
    }
    function cg(e, t) {
      return e & jb | t;
    }
    function eD(e, t) {
      return e | t;
    }
    function Bu(e, t) {
      cr(Ga, t, e);
    }
    function hc(e) {
      sr(Ga, e);
    }
    function tD(e, t) {
      var r = e.memoizedState;
      if (r !== null)
        return r.dehydrated !== null;
      var i = e.memoizedProps;
      return i.fallback === void 0 ? !1 : i.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function Ch(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === j) {
          var r = t.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            if (i === null || rk(i) || ak(i))
              return t;
          }
        } else if (t.tag === we && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & Lt) !== It;
          if (s)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var fg = (
      /*  */
      0
    ), mc = (
      /* */
      1
    ), yc = (
      /*    */
      2
    ), Nd = (
      /*   */
      4
    ), Sa = null, Hu = null, kl = !1;
    function nD(e) {
      var t = e.stateNode.containerInfo;
      return Hu = US(t), Sa = e, kl = !0, !0;
    }
    function Lb(e, t) {
      switch (e.tag) {
        case O:
          dk(e.stateNode.containerInfo, t);
          break;
        case _:
          pk(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var r = y_();
      r.stateNode = t, r.return = e, r.flags = tn, e.lastEffect !== null ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r;
    }
    function $b(e, t) {
      switch (t.flags = t.flags & ~Mr | pt, e.tag) {
        case O: {
          var r = e.stateNode.containerInfo;
          switch (t.tag) {
            case _:
              var i = t.type;
              t.pendingProps, vk(r, i);
              break;
            case $:
              var s = t.pendingProps;
              hk(r, s);
              break;
          }
          break;
        }
        case _: {
          var p = e.type, g = e.memoizedProps, E = e.stateNode;
          switch (t.tag) {
            case _:
              var x = t.type;
              t.pendingProps, mk(p, g, E, x);
              break;
            case $:
              var D = t.pendingProps;
              yk(p, g, E, D);
              break;
            case j:
              gk(p, g);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function Ub(e, t) {
      switch (e.tag) {
        case _: {
          var r = e.type;
          e.pendingProps;
          var i = tk(t, r);
          return i !== null ? (e.stateNode = i, !0) : !1;
        }
        case $: {
          var s = e.pendingProps, p = nk(t, s);
          return p !== null ? (e.stateNode = p, !0) : !1;
        }
        case j:
          return !1;
        default:
          return !1;
      }
    }
    function dg(e) {
      if (kl) {
        var t = Hu;
        if (!t) {
          $b(Sa, e), kl = !1, Sa = e;
          return;
        }
        var r = t;
        if (!Ub(e, t)) {
          if (t = Vv(r), !t || !Ub(e, t)) {
            $b(Sa, e), kl = !1, Sa = e;
            return;
          }
          Lb(Sa, r);
        }
        Sa = e, Hu = US(t);
      }
    }
    function rD(e, t, r) {
      var i = e.stateNode, s = ik(i, e.type, e.memoizedProps, t, r, e);
      return e.updateQueue = s, s !== null;
    }
    function aD(e) {
      var t = e.stateNode, r = e.memoizedProps, i = ok(t, r, e);
      if (i) {
        var s = Sa;
        if (s !== null)
          switch (s.tag) {
            case O: {
              var p = s.stateNode.containerInfo;
              ck(p, t, r);
              break;
            }
            case _: {
              var g = s.type, E = s.memoizedProps, x = s.stateNode;
              fk(g, E, x, t, r);
              break;
            }
          }
      }
      return i;
    }
    function iD(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return lk(r);
    }
    function Fb(e) {
      for (var t = e.return; t !== null && t.tag !== _ && t.tag !== O && t.tag !== j; )
        t = t.return;
      Sa = t;
    }
    function xh(e) {
      if (e !== Sa)
        return !1;
      if (!kl)
        return Fb(e), kl = !0, !1;
      var t = e.type;
      if (e.tag !== _ || t !== "head" && t !== "body" && !Ty(t, e.memoizedProps))
        for (var r = Hu; r; )
          Lb(e, r), r = Vv(r);
      return Fb(e), e.tag === j ? Hu = iD(e) : Hu = Sa ? Vv(e.stateNode) : null, !0;
    }
    function pg() {
      Sa = null, Hu = null, kl = !1;
    }
    function vg() {
      return kl;
    }
    var _d = [], hg;
    hg = {};
    function oD(e) {
      _d.push(e);
    }
    function mg() {
      for (var e = 0; e < _d.length; e++) {
        var t = _d[e];
        t._workInProgressVersionPrimary = null;
      }
      _d.length = 0;
    }
    function lD(e) {
      return e._workInProgressVersionPrimary;
    }
    function zb(e, t) {
      e._workInProgressVersionPrimary = t, _d.push(e);
    }
    function uD(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = hg : e._currentPrimaryRenderer !== hg && m("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var ze = v.ReactCurrentDispatcher, ba = v.ReactCurrentBatchConfig, yg, gg;
    gg = {}, yg = /* @__PURE__ */ new Set();
    var Md = se, en = null, dr = null, Yn = null, wh = !1, Ad = !1, sD = 25, he = null, Ca = null, Dl = -1, Eg = !1;
    function Qt() {
      {
        var e = he;
        Ca === null ? Ca = [e] : Ca.push(e);
      }
    }
    function We() {
      {
        var e = he;
        Ca !== null && (Dl++, Ca[Dl] !== e && cD(e));
      }
    }
    function jd(e) {
      e != null && !Array.isArray(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", he, typeof e);
    }
    function cD(e) {
      {
        var t = Le(en.type);
        if (!yg.has(t) && (yg.add(t), Ca !== null)) {
          for (var r = "", i = 30, s = 0; s <= Dl; s++) {
            for (var p = Ca[s], g = s === Dl ? e : p, E = s + 1 + ". " + p; E.length < i; )
              E += " ";
            E += g + `
`, r += E;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
        }
      }
    }
    function zr() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Sg(e, t) {
      if (Eg)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", he), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, he, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!a(e[r], t[r]))
          return !1;
      return !0;
    }
    function gc(e, t, r, i, s, p) {
      Md = p, en = t, Ca = e !== null ? e._debugHookTypes : null, Dl = -1, Eg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? ze.current = eC : Ca !== null ? ze.current = Jb : ze.current = Zb;
      var g = r(i, s);
      if (Ad) {
        var E = 0;
        do {
          if (Ad = !1, !(E < sD))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, Eg = !1, dr = null, Yn = null, t.updateQueue = null, Dl = -1, ze.current = tC, g = r(i, s);
        } while (Ad);
      }
      ze.current = $h, t._debugHookTypes = Ca;
      var x = dr !== null && dr.next !== null;
      if (Md = se, en = null, dr = null, Yn = null, he = null, Ca = null, Dl = -1, wh = !1, x)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return g;
    }
    function Ib(e, t, r) {
      t.updateQueue = e.updateQueue, t.flags &= ~(tl | ot), e.lanes = hl(e.lanes, r);
    }
    function Pb() {
      if (ze.current = $h, wh) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        wh = !1;
      }
      Md = se, en = null, dr = null, Yn = null, Ca = null, Dl = -1, he = null, Lh = !1, Ad = !1;
    }
    function Vu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Yn === null ? en.memoizedState = Yn = e : Yn = Yn.next = e, Yn;
    }
    function Wu() {
      var e;
      if (dr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var r;
      if (Yn === null ? r = en.memoizedState : r = Yn.next, r !== null)
        Yn = r, r = Yn.next, dr = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        Yn === null ? en.memoizedState = Yn = i : Yn = Yn.next = i;
      }
      return Yn;
    }
    function fD() {
      return {
        lastEffect: null
      };
    }
    function Th(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bg(e, t, r) {
      var i = Vu(), s;
      r !== void 0 ? s = r(t) : s = t, i.memoizedState = i.baseState = s;
      var p = i.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, g = p.dispatch = jg.bind(null, en, p);
      return [i.memoizedState, g];
    }
    function Cg(e, t, r) {
      var i = Wu(), s = i.queue;
      if (s === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = dr, g = p.baseQueue, E = s.pending;
      if (E !== null) {
        if (g !== null) {
          var x = g.next, D = E.next;
          g.next = D, E.next = x;
        }
        p.baseQueue !== g && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = g = E, s.pending = null;
      }
      if (g !== null) {
        var N = g.next, G = p.baseState, F = null, X = null, pe = null, ke = N;
        do {
          var tt = ke.lane;
          if (wi(Md, tt)) {
            if (pe !== null) {
              var ut = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yn,
                action: ke.action,
                eagerReducer: ke.eagerReducer,
                eagerState: ke.eagerState,
                next: null
              };
              pe = pe.next = ut;
            }
            if (ke.eagerReducer === e)
              G = ke.eagerState;
            else {
              var _t = ke.action;
              G = e(G, _t);
            }
          } else {
            var St = {
              lane: tt,
              action: ke.action,
              eagerReducer: ke.eagerReducer,
              eagerState: ke.eagerState,
              next: null
            };
            pe === null ? (X = pe = St, F = G) : pe = pe.next = St, en.lanes = At(en.lanes, tt), E0(tt);
          }
          ke = ke.next;
        } while (ke !== null && ke !== N);
        pe === null ? F = G : pe.next = X, a(G, i.memoizedState) || Gg(), i.memoizedState = G, i.baseState = F, i.baseQueue = pe, s.lastRenderedState = G;
      }
      var Xt = s.dispatch;
      return [i.memoizedState, Xt];
    }
    function xg(e, t, r) {
      var i = Wu(), s = i.queue;
      if (s === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var p = s.dispatch, g = s.pending, E = i.memoizedState;
      if (g !== null) {
        s.pending = null;
        var x = g.next, D = x;
        do {
          var N = D.action;
          E = e(E, N), D = D.next;
        } while (D !== x);
        a(E, i.memoizedState) || Gg(), i.memoizedState = E, i.baseQueue === null && (i.baseState = E), s.lastRenderedState = E;
      }
      return [E, p];
    }
    function Bb(e, t, r) {
      uD(t);
      var i = t._getVersion, s = i(t._source), p = !1, g = lD(t);
      if (g !== null ? p = g === s : (p = wi(Md, e.mutableReadLanes), p && zb(t, s)), p) {
        var E = r(t._source);
        return typeof E == "function" && m("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), E;
      } else
        throw oD(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function Hb(e, t, r, i) {
      var s = hN();
      if (s === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var p = t._getVersion, g = p(t._source), E = ze.current, x = E.useState(function() {
        return Bb(s, t, r);
      }), D = x[0], N = x[1], G = D, F = Yn, X = e.memoizedState, pe = X.refs, ke = pe.getSnapshot, tt = X.source, St = X.subscribe, ut = en;
      if (e.memoizedState = {
        refs: pe,
        source: t,
        subscribe: i
      }, E.useEffect(function() {
        pe.getSnapshot = r, pe.setSnapshot = N;
        var Xt = p(t._source);
        if (!a(g, Xt)) {
          var K = r(t._source);
          if (typeof K == "function" && m("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !a(G, K)) {
            N(K);
            var ie = Nl(ut);
            hv(s, ie);
          }
          Wf(s, s.mutableReadLanes);
        }
      }, [r, t, i]), E.useEffect(function() {
        var Xt = function() {
          var ie = pe.getSnapshot, H = pe.setSnapshot;
          try {
            H(ie(t._source));
            var Se = Nl(ut);
            hv(s, Se);
          } catch ($e) {
            H(function() {
              throw $e;
            });
          }
        }, K = i(t._source, Xt);
        return typeof K != "function" && m("Mutable source subscribe function must return an unsubscribe function."), K;
      }, [t, i]), !a(ke, r) || !a(tt, t) || !a(St, i)) {
        var _t = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Th,
          lastRenderedState: G
        };
        _t.dispatch = N = jg.bind(null, en, _t), F.queue = _t, F.baseQueue = null, G = Bb(s, t, r), F.memoizedState = F.baseState = G;
      }
      return G;
    }
    function wg(e, t, r) {
      var i = Vu();
      return i.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: r
      }, Hb(i, e, t, r);
    }
    function Rh(e, t, r) {
      var i = Wu();
      return Hb(i, e, t, r);
    }
    function Yu(e) {
      var t = Vu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var r = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Th,
        lastRenderedState: e
      }, i = r.dispatch = jg.bind(null, en, r);
      return [t.memoizedState, i];
    }
    function Ld(e) {
      return Cg(Th);
    }
    function $d(e) {
      return xg(Th);
    }
    function Oh(e, t, r, i) {
      var s = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        // Circular
        next: null
      }, p = en.updateQueue;
      if (p === null)
        p = fD(), en.updateQueue = p, p.lastEffect = s.next = s;
      else {
        var g = p.lastEffect;
        if (g === null)
          p.lastEffect = s.next = s;
        else {
          var E = g.next;
          g.next = s, s.next = E, p.lastEffect = s;
        }
      }
      return s;
    }
    function kh(e) {
      var t = Vu(), r = {
        current: e
      };
      return Object.seal(r), t.memoizedState = r, r;
    }
    function Ec(e) {
      var t = Wu();
      return t.memoizedState;
    }
    function Tg(e, t, r, i) {
      var s = Vu(), p = i === void 0 ? null : i;
      en.flags |= e, s.memoizedState = Oh(mc | t, r, void 0, p);
    }
    function Rg(e, t, r, i) {
      var s = Wu(), p = i === void 0 ? null : i, g = void 0;
      if (dr !== null) {
        var E = dr.memoizedState;
        if (g = E.destroy, p !== null) {
          var x = E.deps;
          if (Sg(p, x)) {
            Oh(t, r, g, p);
            return;
          }
        }
      }
      en.flags |= e, s.memoizedState = Oh(mc | t, r, g, p);
    }
    function Dh(e, t) {
      return typeof jest < "u" && ax(en), Tg(ot | tl, Nd, e, t);
    }
    function Sc(e, t) {
      return typeof jest < "u" && ax(en), Rg(ot | tl, Nd, e, t);
    }
    function Og(e, t) {
      return Tg(ot, yc, e, t);
    }
    function Nh(e, t) {
      return Rg(ot, yc, e, t);
    }
    function Vb(e, t) {
      if (typeof t == "function") {
        var r = t, i = e();
        return r(i), function() {
          r(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var p = e();
        return s.current = p, function() {
          s.current = null;
        };
      }
    }
    function kg(e, t, r) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Tg(ot, yc, Vb.bind(null, t, e), i);
    }
    function _h(e, t, r) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Rg(ot, yc, Vb.bind(null, t, e), i);
    }
    function dD(e, t) {
    }
    var Mh = dD;
    function Dg(e, t) {
      var r = Vu(), i = t === void 0 ? null : t;
      return r.memoizedState = [e, i], e;
    }
    function Ah(e, t) {
      var r = Wu(), i = t === void 0 ? null : t, s = r.memoizedState;
      if (s !== null && i !== null) {
        var p = s[1];
        if (Sg(i, p))
          return s[0];
      }
      return r.memoizedState = [e, i], e;
    }
    function Ng(e, t) {
      var r = Vu(), i = t === void 0 ? null : t, s = e();
      return r.memoizedState = [s, i], s;
    }
    function jh(e, t) {
      var r = Wu(), i = t === void 0 ? null : t, s = r.memoizedState;
      if (s !== null && i !== null) {
        var p = s[1];
        if (Sg(i, p))
          return s[0];
      }
      var g = e();
      return r.memoizedState = [g, i], g;
    }
    function _g(e) {
      var t = Yu(e), r = t[0], i = t[1];
      return Dh(function() {
        var s = ba.transition;
        ba.transition = 1;
        try {
          i(e);
        } finally {
          ba.transition = s;
        }
      }, [e]), r;
    }
    function Wb(e) {
      var t = Ld(), r = t[0], i = t[1];
      return Sc(function() {
        var s = ba.transition;
        ba.transition = 1;
        try {
          i(e);
        } finally {
          ba.transition = s;
        }
      }, [e]), r;
    }
    function Yb(e) {
      var t = $d(), r = t[0], i = t[1];
      return Sc(function() {
        var s = ba.transition;
        ba.transition = 1;
        try {
          i(e);
        } finally {
          ba.transition = s;
        }
      }, [e]), r;
    }
    function pD(e, t) {
      var r = fc();
      Fu(r < Uu ? Uu : r, function() {
        e(!0);
      }), Fu(r > xo ? xo : r, function() {
        var i = ba.transition;
        ba.transition = 1;
        try {
          e(!1), t();
        } finally {
          ba.transition = i;
        }
      });
    }
    function Mg() {
      var e = Yu(!1), t = e[0], r = e[1], i = pD.bind(null, r);
      return kh(i), [i, t];
    }
    function qb() {
      var e = Ld(), t = e[0], r = Ec(), i = r.current;
      return [i, t];
    }
    function Gb() {
      var e = $d(), t = e[0], r = Ec(), i = r.current;
      return [i, t];
    }
    var Lh = !1;
    function vD() {
      return Lh;
    }
    function Kb(e) {
      {
        var t = Le(e.type) || "Unknown";
        mp() && !gg[t] && (m("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), gg[t] = !0);
      }
    }
    function Ag() {
      var e = Sk.bind(null, Kb.bind(null, en));
      if (vg()) {
        var t = !1, r = en, i = function() {
          throw t || (t = !0, Lh = !0, p(e()), Lh = !1, Kb(r)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, s = Ck(i), p = Yu(s)[1];
        return (en.mode & Fr) === dn && (en.flags |= ot | tl, Oh(mc | Nd, function() {
          p(e());
        }, void 0, null)), s;
      } else {
        var g = e();
        return Yu(g), g;
      }
    }
    function Qb() {
      var e = Ld()[0];
      return e;
    }
    function Xb() {
      var e = $d()[0];
      return e;
    }
    function jg(e, t, r) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ea(), s = Nl(e), p = {
        lane: s,
        action: r,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, g = t.pending;
      g === null ? p.next = p : (p.next = g.next, g.next = p), t.pending = p;
      var E = e.alternate;
      if (e === en || E !== null && E === en)
        Ad = wh = !0;
      else {
        if (e.lanes === se && (E === null || E.lanes === se)) {
          var x = t.lastRenderedReducer;
          if (x !== null) {
            var D;
            D = ze.current, ze.current = Ka;
            try {
              var N = t.lastRenderedState, G = x(N, r);
              if (p.eagerReducer = x, p.eagerState = G, a(G, N))
                return;
            } catch {
            } finally {
              ze.current = D;
            }
          }
        }
        typeof jest < "u" && (rx(e), XN(e)), pr(e, s, i);
      }
    }
    var $h = {
      readContext: $n,
      useCallback: zr,
      useContext: zr,
      useEffect: zr,
      useImperativeHandle: zr,
      useLayoutEffect: zr,
      useMemo: zr,
      useReducer: zr,
      useRef: zr,
      useState: zr,
      useDebugValue: zr,
      useDeferredValue: zr,
      useTransition: zr,
      useMutableSource: zr,
      useOpaqueIdentifier: zr,
      unstable_isNewReconciler: nt
    }, Zb = null, Jb = null, eC = null, tC = null, $i = null, Ka = null, Uh = null;
    {
      var Lg = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, bt = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Zb = {
        readContext: function(e, t) {
          return $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", Qt(), jd(t), Dg(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", Qt(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", Qt(), jd(t), Dh(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", Qt(), jd(r), kg(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", Qt(), jd(t), Og(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", Qt(), jd(t);
          var r = ze.current;
          ze.current = $i;
          try {
            return Ng(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", Qt();
          var i = ze.current;
          ze.current = $i;
          try {
            return bg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", Qt(), kh(e);
        },
        useState: function(e) {
          he = "useState", Qt();
          var t = ze.current;
          ze.current = $i;
          try {
            return Yu(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", Qt(), _g(e);
        },
        useTransition: function() {
          return he = "useTransition", Qt(), Mg();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", Qt(), wg(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", Qt(), Ag();
        },
        unstable_isNewReconciler: nt
      }, Jb = {
        readContext: function(e, t) {
          return $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", We(), Dg(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", We(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", We(), Dh(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", We(), kg(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", We(), Og(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", We();
          var r = ze.current;
          ze.current = $i;
          try {
            return Ng(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", We();
          var i = ze.current;
          ze.current = $i;
          try {
            return bg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", We(), kh(e);
        },
        useState: function(e) {
          he = "useState", We();
          var t = ze.current;
          ze.current = $i;
          try {
            return Yu(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", We(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", We(), _g(e);
        },
        useTransition: function() {
          return he = "useTransition", We(), Mg();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", We(), wg(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", We(), Ag();
        },
        unstable_isNewReconciler: nt
      }, eC = {
        readContext: function(e, t) {
          return $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", We(), Ah(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", We(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", We(), Sc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", We(), _h(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", We(), Nh(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", We();
          var r = ze.current;
          ze.current = Ka;
          try {
            return jh(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", We();
          var i = ze.current;
          ze.current = Ka;
          try {
            return Cg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", We(), Ec();
        },
        useState: function(e) {
          he = "useState", We();
          var t = ze.current;
          ze.current = Ka;
          try {
            return Ld(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", We(), Mh();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", We(), Wb(e);
        },
        useTransition: function() {
          return he = "useTransition", We(), qb();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", We(), Rh(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", We(), Qb();
        },
        unstable_isNewReconciler: nt
      }, tC = {
        readContext: function(e, t) {
          return $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", We(), Ah(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", We(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", We(), Sc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", We(), _h(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", We(), Nh(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", We();
          var r = ze.current;
          ze.current = Uh;
          try {
            return jh(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", We();
          var i = ze.current;
          ze.current = Uh;
          try {
            return xg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", We(), Ec();
        },
        useState: function(e) {
          he = "useState", We();
          var t = ze.current;
          ze.current = Uh;
          try {
            return $d(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", We(), Mh();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", We(), Yb(e);
        },
        useTransition: function() {
          return he = "useTransition", We(), Gb();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", We(), Rh(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", We(), Xb();
        },
        unstable_isNewReconciler: nt
      }, $i = {
        readContext: function(e, t) {
          return Lg(), $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", bt(), Qt(), Dg(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", bt(), Qt(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", bt(), Qt(), Dh(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", bt(), Qt(), kg(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", bt(), Qt(), Og(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", bt(), Qt();
          var r = ze.current;
          ze.current = $i;
          try {
            return Ng(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", bt(), Qt();
          var i = ze.current;
          ze.current = $i;
          try {
            return bg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", bt(), Qt(), kh(e);
        },
        useState: function(e) {
          he = "useState", bt(), Qt();
          var t = ze.current;
          ze.current = $i;
          try {
            return Yu(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", bt(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", bt(), Qt(), _g(e);
        },
        useTransition: function() {
          return he = "useTransition", bt(), Qt(), Mg();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", bt(), Qt(), wg(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", bt(), Qt(), Ag();
        },
        unstable_isNewReconciler: nt
      }, Ka = {
        readContext: function(e, t) {
          return Lg(), $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", bt(), We(), Ah(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", bt(), We(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", bt(), We(), Sc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", bt(), We(), _h(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", bt(), We(), Nh(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", bt(), We();
          var r = ze.current;
          ze.current = Ka;
          try {
            return jh(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", bt(), We();
          var i = ze.current;
          ze.current = Ka;
          try {
            return Cg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", bt(), We(), Ec();
        },
        useState: function(e) {
          he = "useState", bt(), We();
          var t = ze.current;
          ze.current = Ka;
          try {
            return Ld(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", bt(), We(), Mh();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", bt(), We(), Wb(e);
        },
        useTransition: function() {
          return he = "useTransition", bt(), We(), qb();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", bt(), We(), Rh(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", bt(), We(), Qb();
        },
        unstable_isNewReconciler: nt
      }, Uh = {
        readContext: function(e, t) {
          return Lg(), $n(e, t);
        },
        useCallback: function(e, t) {
          return he = "useCallback", bt(), We(), Ah(e, t);
        },
        useContext: function(e, t) {
          return he = "useContext", bt(), We(), $n(e, t);
        },
        useEffect: function(e, t) {
          return he = "useEffect", bt(), We(), Sc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return he = "useImperativeHandle", bt(), We(), _h(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return he = "useLayoutEffect", bt(), We(), Nh(e, t);
        },
        useMemo: function(e, t) {
          he = "useMemo", bt(), We();
          var r = ze.current;
          ze.current = Ka;
          try {
            return jh(e, t);
          } finally {
            ze.current = r;
          }
        },
        useReducer: function(e, t, r) {
          he = "useReducer", bt(), We();
          var i = ze.current;
          ze.current = Ka;
          try {
            return xg(e, t, r);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return he = "useRef", bt(), We(), Ec();
        },
        useState: function(e) {
          he = "useState", bt(), We();
          var t = ze.current;
          ze.current = Ka;
          try {
            return $d(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return he = "useDebugValue", bt(), We(), Mh();
        },
        useDeferredValue: function(e) {
          return he = "useDeferredValue", bt(), We(), Yb(e);
        },
        useTransition: function() {
          return he = "useTransition", bt(), We(), Gb();
        },
        useMutableSource: function(e, t, r) {
          return he = "useMutableSource", bt(), We(), Rh(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return he = "useOpaqueIdentifier", bt(), We(), Xb();
        },
        unstable_isNewReconciler: nt
      };
    }
    var Fh = c.unstable_now, nC = 0, Ud = -1;
    function hD() {
      return nC;
    }
    function rC() {
      nC = Fh();
    }
    function $g(e) {
      Ud = Fh(), e.actualStartTime < 0 && (e.actualStartTime = Fh());
    }
    function aC(e) {
      Ud = -1;
    }
    function zh(e, t) {
      if (Ud >= 0) {
        var r = Fh() - Ud;
        e.actualDuration += r, t && (e.selfBaseDuration = r), Ud = -1;
      }
    }
    function Ug(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var Fd = v.ReactCurrentOwner, Ui = !1, Fg, zd, zg, Ig, Pg, qu, Bg, Ih;
    Fg = {}, zd = {}, zg = {}, Ig = {}, Pg = {}, qu = !1, Bg = {}, Ih = {};
    function Ir(e, t, r, i) {
      e === null ? t.child = _b(t, null, r, i) : t.child = gh(t, e.child, r, i);
    }
    function mD(e, t, r, i) {
      t.child = gh(t, e.child, null, i), t.child = gh(t, null, r, i);
    }
    function iC(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var p = r.propTypes;
        p && Wa(
          p,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var g = r.render, E = t.ref, x;
      pc(t, s);
      {
        if (Fd.current = t, yr(!0), x = gc(e, t, g, i, E, s), t.mode & En) {
          oa();
          try {
            x = gc(e, t, g, i, E, s);
          } finally {
            Vn();
          }
        }
        yr(!1);
      }
      return e !== null && !Ui ? (Ib(e, t, s), To(e, t, s)) : (t.flags |= er, Ir(e, t, x, s), t.child);
    }
    function oC(e, t, r, i, s, p) {
      if (e === null) {
        var g = r.type;
        if (s_(g) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        r.defaultProps === void 0) {
          var E = g;
          return E = kc(g), t.tag = ne, t.type = E, Yg(t, g), lC(e, t, E, i, s, p);
        }
        {
          var x = g.propTypes;
          x && Wa(
            x,
            i,
            // Resolved props
            "prop",
            Le(g)
          );
        }
        var D = N0(r.type, null, i, t, t.mode, p);
        return D.ref = t.ref, D.return = t, t.child = D, D;
      }
      {
        var N = r.type, G = N.propTypes;
        G && Wa(
          G,
          i,
          // Resolved props
          "prop",
          Le(N)
        );
      }
      var F = e.child;
      if (!Pn(s, p)) {
        var X = F.memoizedProps, pe = r.compare;
        if (pe = pe !== null ? pe : d, pe(X, i) && e.ref === t.ref)
          return To(e, t, p);
      }
      t.flags |= er;
      var ke = Zu(F, i);
      return ke.ref = t.ref, ke.return = t, t.child = ke, ke;
    }
    function lC(e, t, r, i, s, p) {
      if (t.type !== t.elementType) {
        var g = t.elementType;
        if (g.$$typeof === Tr) {
          var E = g, x = E._payload, D = E._init;
          try {
            g = D(x);
          } catch {
            g = null;
          }
          var N = g && g.propTypes;
          N && Wa(
            N,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Le(g)
          );
        }
      }
      if (e !== null) {
        var G = e.memoizedProps;
        if (d(G, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ui = !1, Pn(p, s))
            (e.flags & au) !== It && (Ui = !0);
          else
            return t.lanes = e.lanes, To(e, t, p);
      }
      return Vg(e, t, r, i, p);
    }
    function Hg(e, t, r) {
      var i = t.pendingProps, s = i.children, p = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || i.mode === "unstable-defer-without-hiding")
        if ((t.mode & zu) === dn) {
          var g = {
            baseLanes: se
          };
          t.memoizedState = g, nm(t, r);
        } else if (Pn(r, Kr)) {
          var N = {
            baseLanes: se
          };
          t.memoizedState = N;
          var G = p !== null ? p.baseLanes : r;
          nm(t, G);
        } else {
          var E;
          if (p !== null) {
            var x = p.baseLanes;
            E = At(x, r);
          } else
            E = r;
          um(Kr), t.lanes = t.childLanes = Kr;
          var D = {
            baseLanes: E
          };
          return t.memoizedState = D, nm(t, E), null;
        }
      else {
        var F;
        p !== null ? (F = At(p.baseLanes, r), t.memoizedState = null) : F = r, nm(t, F);
      }
      return Ir(e, t, s, r), t.child;
    }
    var yD = Hg;
    function gD(e, t, r) {
      var i = t.pendingProps;
      return Ir(e, t, i, r), t.child;
    }
    function ED(e, t, r) {
      var i = t.pendingProps.children;
      return Ir(e, t, i, r), t.child;
    }
    function SD(e, t, r) {
      {
        t.flags |= ot;
        var i = t.stateNode;
        i.effectDuration = 0, i.passiveEffectDuration = 0;
      }
      var s = t.pendingProps, p = s.children;
      return Ir(e, t, p, r), t.child;
    }
    function uC(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= zn);
    }
    function Vg(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var p = r.propTypes;
        p && Wa(
          p,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var g;
      {
        var E = uc(t, r, !0);
        g = sc(t, E);
      }
      var x;
      pc(t, s);
      {
        if (Fd.current = t, yr(!0), x = gc(e, t, r, i, g, s), t.mode & En) {
          oa();
          try {
            x = gc(e, t, r, i, g, s);
          } finally {
            Vn();
          }
        }
        yr(!1);
      }
      return e !== null && !Ui ? (Ib(e, t, s), To(e, t, s)) : (t.flags |= er, Ir(e, t, x, s), t.child);
    }
    function sC(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var p = r.propTypes;
        p && Wa(
          p,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var g;
      Ai(r) ? (g = !0, Jv(t)) : g = !1, pc(t, s);
      var E = t.stateNode, x;
      E === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= pt), Ob(t, r, i), eg(t, r, i, s), x = !0) : e === null ? x = Kk(t, r, i, s) : x = Qk(e, t, r, i, s);
      var D = Wg(e, t, r, x, g, s);
      {
        var N = t.stateNode;
        x && N.props !== i && (qu || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t.type) || "a component"), qu = !0);
      }
      return D;
    }
    function Wg(e, t, r, i, s, p) {
      uC(e, t);
      var g = (t.flags & Lt) !== It;
      if (!i && !g)
        return s && GS(t, r, !1), To(e, t, p);
      var E = t.stateNode;
      Fd.current = t;
      var x;
      if (g && typeof r.getDerivedStateFromError != "function")
        x = null, aC();
      else {
        if (yr(!0), x = E.render(), t.mode & En) {
          oa();
          try {
            E.render();
          } finally {
            Vn();
          }
        }
        yr(!1);
      }
      return t.flags |= er, e !== null && g ? mD(e, t, x, p) : Ir(e, t, x, p), t.memoizedState = E.state, s && GS(t, r, !0), t.child;
    }
    function cC(e) {
      var t = e.stateNode;
      t.pendingContext ? YS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && YS(e, t.context, !1), og(e, t.containerInfo);
    }
    function bD(e, t, r) {
      cC(t);
      var i = t.updateQueue;
      if (!(e !== null && i !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var s = t.pendingProps, p = t.memoizedState, g = p !== null ? p.element : null;
      gb(e, t), wd(t, s, null, r);
      var E = t.memoizedState, x = E.element;
      if (x === g)
        return pg(), To(e, t, r);
      var D = t.stateNode;
      if (D.hydrate && nD(t)) {
        {
          var N = D.mutableSourceEagerHydrationData;
          if (N != null)
            for (var G = 0; G < N.length; G += 2) {
              var F = N[G], X = N[G + 1];
              zb(F, X);
            }
        }
        var pe = _b(t, null, x, r);
        t.child = pe;
        for (var ke = pe; ke; )
          ke.flags = ke.flags & ~pt | Mr, ke = ke.sibling;
      } else
        Ir(e, t, x, r), pg();
      return t.child;
    }
    function CD(e, t, r) {
      Ab(t), e === null && dg(t);
      var i = t.type, s = t.pendingProps, p = e !== null ? e.memoizedProps : null, g = s.children, E = Ty(i, s);
      return E ? g = null : p !== null && Ty(i, p) && (t.flags |= Fn), uC(e, t), Ir(e, t, g, r), t.child;
    }
    function xD(e, t) {
      return e === null && dg(t), null;
    }
    function wD(e, t, r, i, s) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= pt);
      var p = t.pendingProps, g = r, E = g._payload, x = g._init, D = x(E);
      t.type = D;
      var N = t.tag = c_(D), G = qa(D, p), F;
      switch (N) {
        case b:
          return Yg(t, D), t.type = D = kc(D), F = Vg(null, t, D, G, s), F;
        case w:
          return t.type = D = w0(D), F = sC(null, t, D, G, s), F;
        case P:
          return t.type = D = T0(D), F = iC(null, t, D, G, s), F;
        case Q: {
          if (t.type !== t.elementType) {
            var X = D.propTypes;
            X && Wa(
              X,
              G,
              // Resolved for outer only
              "prop",
              Le(D)
            );
          }
          return F = oC(
            null,
            t,
            D,
            qa(D.type, G),
            // The inner type can have defaults too
            i,
            s
          ), F;
        }
      }
      var pe = "";
      throw D !== null && typeof D == "object" && D.$$typeof === Tr && (pe = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + D + ". Lazy element type must resolve to a class or function." + pe);
    }
    function TD(e, t, r, i, s) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= pt), t.tag = w;
      var p;
      return Ai(r) ? (p = !0, Jv(t)) : p = !1, pc(t, s), Ob(t, r, i), eg(t, r, i, s), Wg(null, t, r, !0, p, s);
    }
    function RD(e, t, r, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= pt);
      var s = t.pendingProps, p;
      {
        var g = uc(t, r, !1);
        p = sc(t, g);
      }
      pc(t, i);
      var E;
      {
        if (r.prototype && typeof r.prototype.render == "function") {
          var x = Le(r) || "Unknown";
          Fg[x] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), Fg[x] = !0);
        }
        t.mode & En && Ya.recordLegacyContextWarning(t, null), yr(!0), Fd.current = t, E = gc(null, t, r, s, p, i), yr(!1);
      }
      if (t.flags |= er, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var D = Le(r) || "Unknown";
        zd[D] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), zd[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var N = Le(r) || "Unknown";
          zd[N] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), zd[N] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var G = !1;
        Ai(r) ? (G = !0, Jv(t)) : G = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, Hy(t);
        var F = r.getDerivedStateFromProps;
        return typeof F == "function" && vh(t, r, F, s), Rb(t, E), eg(t, r, s, i), Wg(null, t, r, !0, G, i);
      } else {
        if (t.tag = b, t.mode & En) {
          oa();
          try {
            E = gc(null, t, r, s, p, i);
          } finally {
            Vn();
          }
        }
        return Ir(null, t, E, i), Yg(t, r), t.child;
      }
    }
    function Yg(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var r = "", i = Po();
          i && (r += `

Check the render method of \`` + i + "`.");
          var s = i || e._debugID || "", p = e._debugSource;
          p && (s = p.fileName + ":" + p.lineNumber), Pg[s] || (Pg[s] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var g = Le(t) || "Unknown";
          Ig[g] || (m("%s: Function components do not support getDerivedStateFromProps.", g), Ig[g] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = Le(t) || "Unknown";
          zg[E] || (m("%s: Function components do not support contextType.", E), zg[E] = !0);
        }
      }
    }
    var Ph = {
      dehydrated: null,
      retryLane: yn
    };
    function Bh(e) {
      return {
        baseLanes: e
      };
    }
    function fC(e, t) {
      return {
        baseLanes: At(e.baseLanes, t)
      };
    }
    function OD(e, t, r, i) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return bh(e, kd);
    }
    function dC(e, t) {
      return hl(e.childLanes, t);
    }
    function pC(e, t, r) {
      var i = t.pendingProps;
      D_(t) && (t.flags |= Lt);
      var s = Ga.current, p = !1, g = (t.flags & Lt) !== It;
      if (g || OD(s, e) ? (p = !0, t.flags &= ~Lt) : (e === null || e.memoizedState !== null) && i.fallback !== void 0 && i.unstable_avoidThisFallback !== !0 && (s = eD(s, sg)), s = Dd(s), Bu(t, s), e === null) {
        i.fallback !== void 0 && dg(t);
        var E = i.children, x = i.fallback;
        if (p) {
          var D = vC(t, E, x, r), N = t.child;
          return N.memoizedState = Bh(r), t.memoizedState = Ph, D;
        } else if (typeof i.unstable_expectedLoadTime == "number") {
          var G = vC(t, E, x, r), F = t.child;
          return F.memoizedState = Bh(r), t.memoizedState = Ph, t.lanes = Ci, um(Ci), G;
        } else
          return kD(t, E, r);
      } else {
        var X = e.memoizedState;
        if (X !== null)
          if (p) {
            var pe = i.fallback, ke = i.children, tt = yC(e, t, ke, pe, r), St = t.child, ut = e.child.memoizedState;
            return St.memoizedState = ut === null ? Bh(r) : fC(ut, r), St.childLanes = dC(e, r), t.memoizedState = Ph, tt;
          } else {
            var _t = i.children, Xt = mC(e, t, _t, r);
            return t.memoizedState = null, Xt;
          }
        else if (p) {
          var K = i.fallback, ie = i.children, H = yC(e, t, ie, K, r), Se = t.child, $e = e.child.memoizedState;
          return Se.memoizedState = $e === null ? Bh(r) : fC($e, r), Se.childLanes = dC(e, r), t.memoizedState = Ph, H;
        } else {
          var qe = i.children, Dt = mC(e, t, qe, r);
          return t.memoizedState = null, Dt;
        }
      }
    }
    function kD(e, t, r) {
      var i = e.mode, s = {
        mode: "visible",
        children: t
      }, p = M0(s, i, r, null);
      return p.return = e, e.child = p, p;
    }
    function vC(e, t, r, i) {
      var s = e.mode, p = e.child, g = {
        mode: "hidden",
        children: t
      }, E, x;
      return (s & Fr) === dn && p !== null ? (E = p, E.childLanes = se, E.pendingProps = g, e.mode & Zr && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), x = Ju(r, s, i, null)) : (E = M0(g, s, se, null), x = Ju(r, s, i, null)), E.return = e, x.return = e, E.sibling = x, e.child = E, x;
    }
    function hC(e, t) {
      return Zu(e, t);
    }
    function mC(e, t, r, i) {
      var s = e.child, p = s.sibling, g = hC(s, {
        mode: "visible",
        children: r
      });
      return (t.mode & Fr) === dn && (g.lanes = i), g.return = t, g.sibling = null, p !== null && (p.nextEffect = null, p.flags = tn, t.firstEffect = t.lastEffect = p), t.child = g, g;
    }
    function yC(e, t, r, i, s) {
      var p = t.mode, g = e.child, E = g.sibling, x = {
        mode: "hidden",
        children: r
      }, D;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & Fr) === dn && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== g
      ) {
        var N = t.child;
        D = N, D.childLanes = se, D.pendingProps = x, t.mode & Zr && (D.actualDuration = 0, D.actualStartTime = -1, D.selfBaseDuration = g.selfBaseDuration, D.treeBaseDuration = g.treeBaseDuration);
        var G = D.lastEffect;
        G !== null ? (t.firstEffect = D.firstEffect, t.lastEffect = G, G.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        D = hC(g, x);
      var F;
      return E !== null ? F = Zu(E, i) : (F = Ju(i, p, s, null), F.flags |= pt), F.return = t, D.return = t, D.sibling = F, t.child = D, F;
    }
    function gC(e, t) {
      e.lanes = At(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = At(r.lanes, t)), hb(e.return, t);
    }
    function DD(e, t, r) {
      for (var i = t; i !== null; ) {
        if (i.tag === j) {
          var s = i.memoizedState;
          s !== null && gC(i, r);
        } else if (i.tag === we)
          gC(i, r);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ND(e) {
      for (var t = e, r = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Ch(i) === null && (r = t), t = t.sibling;
      }
      return r;
    }
    function _D(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Bg[e])
        if (Bg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function MD(e, t) {
      e !== void 0 && !Ih[e] && (e !== "collapsed" && e !== "hidden" ? (Ih[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ih[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EC(e, t) {
      {
        var r = Array.isArray(e), i = !r && typeof Vt(e) == "function";
        if (r || i) {
          var s = r ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function AD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r++)
            if (!EC(e[r], r))
              return;
        } else {
          var i = Vt(e);
          if (typeof i == "function") {
            var s = i.call(e);
            if (s)
              for (var p = s.next(), g = 0; !p.done; p = s.next()) {
                if (!EC(p.value, g))
                  return;
                g++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function qg(e, t, r, i, s, p) {
      var g = e.memoizedState;
      g === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: r,
        tailMode: s,
        lastEffect: p
      } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = i, g.tail = r, g.tailMode = s, g.lastEffect = p);
    }
    function SC(e, t, r) {
      var i = t.pendingProps, s = i.revealOrder, p = i.tail, g = i.children;
      _D(s), MD(p, s), AD(g, s), Ir(e, t, g, r);
      var E = Ga.current, x = bh(E, kd);
      if (x)
        E = cg(E, kd), t.flags |= Lt;
      else {
        var D = e !== null && (e.flags & Lt) !== It;
        D && DD(t, t.child, r), E = Dd(E);
      }
      if (Bu(t, E), (t.mode & Fr) === dn)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var N = ND(t.child), G;
            N === null ? (G = t.child, t.child = null) : (G = N.sibling, N.sibling = null), qg(
              t,
              !1,
              // isBackwards
              G,
              N,
              p,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var F = null, X = t.child;
            for (t.child = null; X !== null; ) {
              var pe = X.alternate;
              if (pe !== null && Ch(pe) === null) {
                t.child = X;
                break;
              }
              var ke = X.sibling;
              X.sibling = F, F = X, X = ke;
            }
            qg(
              t,
              !0,
              // isBackwards
              F,
              null,
              // last
              p,
              t.lastEffect
            );
            break;
          }
          case "together": {
            qg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function jD(e, t, r) {
      og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = gh(t, null, i, r) : Ir(e, t, i, r), t.child;
    }
    var bC = !1;
    function LD(e, t, r) {
      var i = t.type, s = i._context, p = t.pendingProps, g = t.memoizedProps, E = p.value;
      {
        "value" in p || bC || (bC = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var x = t.type.propTypes;
        x && Wa(x, p, "prop", "Context.Provider");
      }
      if (vb(t, E), g !== null) {
        var D = g.value, N = Bk(s, E, D);
        if (N === 0) {
          if (g.children === p.children && !Xv())
            return To(e, t, r);
        } else
          Hk(t, s, N, r);
      }
      var G = p.children;
      return Ir(e, t, G, r), t.child;
    }
    var CC = !1;
    function $D(e, t, r) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (CC || (CC = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var s = t.pendingProps, p = s.children;
      typeof p != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), pc(t, r);
      var g = $n(i, s.unstable_observedBits), E;
      return Fd.current = t, yr(!0), E = p(g), yr(!1), t.flags |= er, Ir(e, t, E, r), t.child;
    }
    function Gg() {
      Ui = !0;
    }
    function To(e, t, r) {
      return e !== null && (t.dependencies = e.dependencies), aC(), E0(t.lanes), Pn(r, t.childLanes) ? (Xk(e, t), t.child) : null;
    }
    function UD(e, t, r) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
          i.child = r;
        else {
          var s = i.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = r;
        }
        var p = i.lastEffect;
        return p !== null ? (p.nextEffect = e, i.lastEffect = e) : i.firstEffect = i.lastEffect = e, e.nextEffect = null, e.flags = tn, r.flags |= pt, r;
      }
    }
    function xC(e, t, r) {
      var i = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return UD(e, t, N0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var s = e.memoizedProps, p = t.pendingProps;
        if (s !== p || Xv() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ui = !0;
        else if (Pn(r, i))
          (e.flags & au) !== It ? Ui = !0 : Ui = !1;
        else {
          switch (Ui = !1, t.tag) {
            case O:
              cC(t), pg();
              break;
            case _:
              Ab(t);
              break;
            case w: {
              var g = t.type;
              Ai(g) && Jv(t);
              break;
            }
            case M:
              og(t, t.stateNode.containerInfo);
              break;
            case J: {
              var E = t.memoizedProps.value;
              vb(t, E);
              break;
            }
            case q:
              {
                var x = Pn(r, t.childLanes);
                x && (t.flags |= ot);
                var D = t.stateNode;
                D.effectDuration = 0, D.passiveEffectDuration = 0;
              }
              break;
            case j: {
              var N = t.memoizedState;
              if (N !== null) {
                var G = t.child, F = G.childLanes;
                if (Pn(r, F))
                  return pC(e, t, r);
                Bu(t, Dd(Ga.current));
                var X = To(e, t, r);
                return X !== null ? X.sibling : null;
              } else
                Bu(t, Dd(Ga.current));
              break;
            }
            case we: {
              var pe = (e.flags & Lt) !== It, ke = Pn(r, t.childLanes);
              if (pe) {
                if (ke)
                  return SC(e, t, r);
                t.flags |= Lt;
              }
              var tt = t.memoizedState;
              if (tt !== null && (tt.rendering = null, tt.tail = null, tt.lastEffect = null), Bu(t, Ga.current), ke)
                break;
              return null;
            }
            case Ae:
            case Be:
              return t.lanes = se, Hg(e, t, r);
          }
          return To(e, t, r);
        }
      } else
        Ui = !1;
      switch (t.lanes = se, t.tag) {
        case R:
          return RD(e, t, t.type, r);
        case ce: {
          var St = t.elementType;
          return wD(e, t, St, i, r);
        }
        case b: {
          var ut = t.type, _t = t.pendingProps, Xt = t.elementType === ut ? _t : qa(ut, _t);
          return Vg(e, t, ut, Xt, r);
        }
        case w: {
          var K = t.type, ie = t.pendingProps, H = t.elementType === K ? ie : qa(K, ie);
          return sC(e, t, K, H, r);
        }
        case O:
          return bD(e, t, r);
        case _:
          return CD(e, t, r);
        case $:
          return xD(e, t);
        case j:
          return pC(e, t, r);
        case M:
          return jD(e, t, r);
        case P: {
          var Se = t.type, $e = t.pendingProps, qe = t.elementType === Se ? $e : qa(Se, $e);
          return iC(e, t, Se, qe, r);
        }
        case Y:
          return gD(e, t, r);
        case z:
          return ED(e, t, r);
        case q:
          return SD(e, t, r);
        case J:
          return LD(e, t, r);
        case te:
          return $D(e, t, r);
        case Q: {
          var Dt = t.type, an = t.pendingProps, pn = qa(Dt, an);
          if (t.type !== t.elementType) {
            var Pt = Dt.propTypes;
            Pt && Wa(
              Pt,
              pn,
              // Resolved for outer only
              "prop",
              Le(Dt)
            );
          }
          return pn = qa(Dt.type, pn), oC(e, t, Dt, pn, i, r);
        }
        case ne:
          return lC(e, t, t.type, t.pendingProps, i, r);
        case Te: {
          var Un = t.type, $t = t.pendingProps, vn = t.elementType === Un ? $t : qa(Un, $t);
          return TD(e, t, Un, vn, r);
        }
        case we:
          return SC(e, t, r);
        case De:
          break;
        case Oe:
          break;
        case Me:
          break;
        case Ae:
          return Hg(e, t, r);
        case Be:
          return yD(e, t, r);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bc(e) {
      e.flags |= ot;
    }
    function wC(e) {
      e.flags |= zn;
    }
    var TC, Kg, RC, OC;
    TC = function(e, t, r, i) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === _ || s.tag === $)
          UO(e, s.stateNode);
        else if (s.tag !== M) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, Kg = function(e) {
    }, RC = function(e, t, r, i, s) {
      var p = e.memoizedProps;
      if (p !== i) {
        var g = t.stateNode, E = lg(), x = zO(g, r, p, i, s, E);
        t.updateQueue = x, x && bc(t);
      }
    }, OC = function(e, t, r, i) {
      r !== i && bc(t);
    };
    function Id(e, t) {
      if (!vg())
        switch (e.tailMode) {
          case "hidden": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, p = null; s !== null; )
              s.alternate !== null && (p = s), s = s.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function kC(e, t, r) {
      var i = t.pendingProps;
      switch (t.tag) {
        case R:
        case ce:
        case ne:
        case b:
        case P:
        case Y:
        case z:
        case q:
        case te:
        case Q:
          return null;
        case w: {
          var s = t.type;
          return Ai(s) && Zv(t), null;
        }
        case O: {
          vc(t), My(t), mg();
          var p = t.stateNode;
          if (p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var g = xh(t);
            g ? bc(t) : p.hydrate || (t.flags |= ua);
          }
          return Kg(t), null;
        }
        case _: {
          ug(t);
          var E = Mb(), x = t.type;
          if (e !== null && t.stateNode != null)
            RC(e, t, x, i, E), e.ref !== t.ref && wC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var D = lg(), N = xh(t);
            if (N)
              rD(t, E, D) && bc(t);
            else {
              var G = $O(x, i, E, D, t);
              TC(G, t, !1, !1), t.stateNode = G, FO(G, x, i, E) && bc(t);
            }
            t.ref !== null && wC(t);
          }
          return null;
        }
        case $: {
          var F = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            OC(e, t, X, F);
          } else {
            if (typeof F != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var pe = Mb(), ke = lg(), tt = xh(t);
            tt ? aD(t) && bc(t) : t.stateNode = IO(F, pe, ke, t);
          }
          return null;
        }
        case j: {
          hc(t);
          var St = t.memoizedState;
          if ((t.flags & Lt) !== It)
            return t.lanes = r, (t.mode & Zr) !== dn && Ug(t), t;
          var ut = St !== null, _t = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && xh(t);
          else {
            var Xt = e.memoizedState;
            _t = Xt !== null;
          }
          if (ut && !_t && (t.mode & Fr) !== dn) {
            var K = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            K || bh(Ga.current, sg) ? xN() : wN();
          }
          return (ut || _t) && (t.flags |= ot), null;
        }
        case M:
          return vc(t), Kg(t), e === null && xk(t.stateNode.containerInfo), null;
        case J:
          return Iy(t), null;
        case Te: {
          var ie = t.type;
          return Ai(ie) && Zv(t), null;
        }
        case we: {
          hc(t);
          var H = t.memoizedState;
          if (H === null)
            return null;
          var Se = (t.flags & Lt) !== It, $e = H.rendering;
          if ($e === null)
            if (Se)
              Id(H, !1);
            else {
              var qe = RN() && (e === null || (e.flags & Lt) === It);
              if (!qe)
                for (var Dt = t.child; Dt !== null; ) {
                  var an = Ch(Dt);
                  if (an !== null) {
                    Se = !0, t.flags |= Lt, Id(H, !1);
                    var pn = an.updateQueue;
                    return pn !== null && (t.updateQueue = pn, t.flags |= ot), H.lastEffect === null && (t.firstEffect = null), t.lastEffect = H.lastEffect, Zk(t, r), Bu(t, cg(Ga.current, kd)), t.child;
                  }
                  Dt = Dt.sibling;
                }
              H.tail !== null && fr() > VC() && (t.flags |= Lt, Se = !0, Id(H, !1), t.lanes = Ci, um(Ci));
            }
          else {
            if (!Se) {
              var Pt = Ch($e);
              if (Pt !== null) {
                t.flags |= Lt, Se = !0;
                var Un = Pt.updateQueue;
                if (Un !== null && (t.updateQueue = Un, t.flags |= ot), Id(H, !0), H.tail === null && H.tailMode === "hidden" && !$e.alternate && !vg()) {
                  var $t = t.lastEffect = H.lastEffect;
                  return $t !== null && ($t.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                fr() * 2 - H.renderingStartTime > VC() && r !== Kr && (t.flags |= Lt, Se = !0, Id(H, !1), t.lanes = Ci, um(Ci));
            }
            if (H.isBackwards)
              $e.sibling = t.child, t.child = $e;
            else {
              var vn = H.last;
              vn !== null ? vn.sibling = $e : t.child = $e, H.last = $e;
            }
          }
          if (H.tail !== null) {
            var qn = H.tail;
            H.rendering = qn, H.tail = qn.sibling, H.lastEffect = t.lastEffect, H.renderingStartTime = fr(), qn.sibling = null;
            var Tn = Ga.current;
            return Se ? Tn = cg(Tn, kd) : Tn = Dd(Tn), Bu(t, Tn), qn;
          }
          return null;
        }
        case De:
          break;
        case Oe:
          break;
        case Me:
          break;
        case Ae:
        case Be: {
          if (g0(t), e !== null) {
            var Pi = t.memoizedState, Rn = e.memoizedState, Bi = Rn !== null, es = Pi !== null;
            Bi !== es && i.mode !== "unstable-defer-without-hiding" && (t.flags |= ot);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function FD(e, t) {
      switch (e.tag) {
        case w: {
          var r = e.type;
          Ai(r) && Zv(e);
          var i = e.flags;
          return i & qr ? (e.flags = i & ~qr | Lt, (e.mode & Zr) !== dn && Ug(e), e) : null;
        }
        case O: {
          vc(e), My(e), mg();
          var s = e.flags;
          if ((s & Lt) !== It)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = s & ~qr | Lt, e;
        }
        case _:
          return ug(e), null;
        case j: {
          hc(e);
          var p = e.flags;
          return p & qr ? (e.flags = p & ~qr | Lt, (e.mode & Zr) !== dn && Ug(e), e) : null;
        }
        case we:
          return hc(e), null;
        case M:
          return vc(e), null;
        case J:
          return Iy(e), null;
        case Ae:
        case Be:
          return g0(e), null;
        default:
          return null;
      }
    }
    function DC(e) {
      switch (e.tag) {
        case w: {
          var t = e.type.childContextTypes;
          t != null && Zv(e);
          break;
        }
        case O: {
          vc(e), My(e), mg();
          break;
        }
        case _: {
          ug(e);
          break;
        }
        case M:
          vc(e);
          break;
        case j:
          hc(e);
          break;
        case we:
          hc(e);
          break;
        case J:
          Iy(e);
          break;
        case Ae:
        case Be:
          g0(e);
          break;
      }
    }
    function Qg(e, t) {
      return {
        value: e,
        source: t,
        stack: Na(t)
      };
    }
    function zD(e, t) {
      return !0;
    }
    function Xg(e, t) {
      try {
        var r = zD(e, t);
        if (r === !1)
          return;
        var i = t.value, s = t.source, p = t.stack, g = p !== null ? p : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(i);
        }
        var E = s ? Le(s.type) : null, x = E ? "The above error occurred in the <" + E + "> component:" : "The above error occurred in one of your React components:", D, N = Le(e.type);
        N ? D = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + N + ".") : D = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        var G = x + `
` + g + `

` + ("" + D);
        console.error(G);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var ID = typeof WeakMap == "function" ? WeakMap : Map;
    function NC(e, t, r) {
      var i = Tl(rn, r);
      i.tag = Py, i.payload = {
        element: null
      };
      var s = t.value;
      return i.callback = function() {
        IN(s), Xg(e, t);
      }, i;
    }
    function _C(e, t, r) {
      var i = Tl(rn, r);
      i.tag = Py;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var p = t.value;
        i.payload = function() {
          return Xg(e, t), s(p);
        };
      }
      var g = e.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" ? i.callback = function() {
        fx(e), typeof s != "function" && (FN(this), Xg(e, t));
        var x = t.value, D = t.stack;
        this.componentDidCatch(x, {
          componentStack: D !== null ? D : ""
        }), typeof s != "function" && (Pn(e.lanes, Rt) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e.type) || "Unknown"));
      } : i.callback = function() {
        fx(e);
      }, i;
    }
    function PD(e, t, r) {
      var i = e.pingCache, s;
      if (i === null ? (i = e.pingCache = new ID(), s = /* @__PURE__ */ new Set(), i.set(t, s)) : (s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s))), !s.has(r)) {
        s.add(r);
        var p = PN.bind(null, e, t, r);
        t.then(p, p);
      }
    }
    function BD(e, t, r, i, s) {
      if (r.flags |= ru, r.firstEffect = r.lastEffect = null, i !== null && typeof i == "object" && typeof i.then == "function") {
        var p = i;
        if ((r.mode & Fr) === dn) {
          var g = r.alternate;
          g ? (r.updateQueue = g.updateQueue, r.memoizedState = g.memoizedState, r.lanes = g.lanes) : (r.updateQueue = null, r.memoizedState = null);
        }
        var E = bh(Ga.current, sg), x = t;
        do {
          if (x.tag === j && tD(x, E)) {
            var D = x.updateQueue;
            if (D === null) {
              var N = /* @__PURE__ */ new Set();
              N.add(p), x.updateQueue = N;
            } else
              D.add(p);
            if ((x.mode & Fr) === dn) {
              if (x.flags |= Lt, r.flags |= au, r.flags &= ~(Ef | ru), r.tag === w) {
                var G = r.alternate;
                if (G === null)
                  r.tag = Te;
                else {
                  var F = Tl(rn, Rt);
                  F.tag = sh, Rl(r, F);
                }
              }
              r.lanes = At(r.lanes, Rt);
              return;
            }
            PD(e, p, s), x.flags |= qr, x.lanes = s;
            return;
          }
          x = x.return;
        } while (x !== null);
        i = new Error((Le(r.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      TN(), i = Qg(i, r);
      var X = t;
      do {
        switch (X.tag) {
          case O: {
            var pe = i;
            X.flags |= qr;
            var ke = jn(s);
            X.lanes = At(X.lanes, ke);
            var tt = NC(X, pe, ke);
            Eb(X, tt);
            return;
          }
          case w:
            var St = i, ut = X.type, _t = X.stateNode;
            if ((X.flags & Lt) === It && (typeof ut.getDerivedStateFromError == "function" || _t !== null && typeof _t.componentDidCatch == "function" && !S0(_t))) {
              X.flags |= qr;
              var Xt = jn(s);
              X.lanes = At(X.lanes, Xt);
              var K = _C(X, St, Xt);
              Eb(X, K);
              return;
            }
            break;
        }
        X = X.return;
      } while (X !== null);
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var HD = typeof WeakSet == "function" ? WeakSet : Set, VD = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function WD(e, t) {
      if (Zn(null, VD, null, e, t), gr()) {
        var r = Jn();
        _l(e, r);
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (Zn(null, t, null, null), gr()) {
            var r = Jn();
            _l(e, r);
          }
        } else
          t.current = null;
    }
    function YD(e, t) {
      if (Zn(null, t, null), gr()) {
        var r = Jn();
        _l(e, r);
      }
    }
    function qD(e, t) {
      switch (t.tag) {
        case b:
        case P:
        case ne:
        case Me:
          return;
        case w: {
          if (t.flags & ua && e !== null) {
            var r = e.memoizedProps, i = e.memoizedState, s = t.stateNode;
            t.type === t.elementType && !qu && (s.props !== t.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(t.type) || "instance"), s.state !== t.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(t.type) || "instance"));
            var p = s.getSnapshotBeforeUpdate(t.elementType === t.type ? r : qa(t.type, r), i);
            {
              var g = MC;
              p === void 0 && !g.has(t.type) && (g.add(t.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(t.type)));
            }
            s.__reactInternalSnapshotBeforeUpdate = p;
          }
          return;
        }
        case O: {
          if (t.flags & ua) {
            var E = t.stateNode;
            Oy(E.containerInfo);
          }
          return;
        }
        case _:
        case $:
        case M:
        case Te:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function GD(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var s = i.next, p = s;
        do {
          if ((p.tag & e) === e) {
            var g = p.destroy;
            p.destroy = void 0, g !== void 0 && g();
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function KD(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var s = i.next, p = s;
        do {
          if ((p.tag & e) === e) {
            var g = p.create;
            p.destroy = g();
            {
              var E = p.destroy;
              if (E !== void 0 && typeof E != "function") {
                var x = void 0;
                E === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof E.then == "function" ? x = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + E, m("An effect function must not return anything besides a function, which is used for clean-up.%s", x);
              }
            }
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function QD(e) {
      var t = e.updateQueue, r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var i = r.next, s = i;
        do {
          var p = s, g = p.next, E = p.tag;
          (E & Nd) !== fg && (E & mc) !== fg && (JC(e, s), LN(e, s)), s = g;
        } while (s !== i);
      }
    }
    function XD(e, t, r, i) {
      switch (r.tag) {
        case b:
        case P:
        case ne:
        case Me: {
          KD(yc | mc, r), QD(r);
          return;
        }
        case w: {
          var s = r.stateNode;
          if (r.flags & ot)
            if (t === null)
              r.type === r.elementType && !qu && (s.props !== r.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), s.state !== r.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), s.componentDidMount();
            else {
              var p = r.elementType === r.type ? t.memoizedProps : qa(r.type, t.memoizedProps), g = t.memoizedState;
              r.type === r.elementType && !qu && (s.props !== r.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), s.state !== r.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), s.componentDidUpdate(p, g, s.__reactInternalSnapshotBeforeUpdate);
            }
          var E = r.updateQueue;
          E !== null && (r.type === r.elementType && !qu && (s.props !== r.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), s.state !== r.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), bb(r, E, s));
          return;
        }
        case O: {
          var x = r.updateQueue;
          if (x !== null) {
            var D = null;
            if (r.child !== null)
              switch (r.child.tag) {
                case _:
                  D = r.child.stateNode;
                  break;
                case w:
                  D = r.child.stateNode;
                  break;
              }
            bb(r, x, D);
          }
          return;
        }
        case _: {
          var N = r.stateNode;
          if (t === null && r.flags & ot) {
            var G = r.type, F = r.memoizedProps;
            BO(N, G, F);
          }
          return;
        }
        case $:
          return;
        case M:
          return;
        case q: {
          {
            var X = r.memoizedProps;
            X.onCommit;
            var pe = X.onRender;
            r.stateNode.effectDuration;
            var ke = hD();
            typeof pe == "function" && pe(r.memoizedProps.id, t === null ? "mount" : "update", r.actualDuration, r.treeBaseDuration, r.actualStartTime, ke, e.memoizedInteractions);
          }
          return;
        }
        case j: {
          iN(e, r);
          return;
        }
        case we:
        case Te:
        case De:
        case Oe:
        case Ae:
        case Be:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jC(e, t) {
      for (var r = e; ; ) {
        if (r.tag === _) {
          var i = r.stateNode;
          t ? XO(i) : JO(r.stateNode, r.memoizedProps);
        } else if (r.tag === $) {
          var s = r.stateNode;
          t ? ZO(s) : ek(s, r.memoizedProps);
        } else if (!((r.tag === Ae || r.tag === Be) && r.memoizedState !== null && r !== e)) {
          if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
        }
        if (r === e)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    function ZD(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode, i;
        switch (e.tag) {
          case _:
            i = r;
            break;
          default:
            i = r;
        }
        typeof t == "function" ? t(i) : (t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e.type)), t.current = i);
      }
    }
    function JD(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function LC(e, t, r) {
      switch (Nk(t), t.tag) {
        case b:
        case P:
        case Q:
        case ne:
        case Me: {
          var i = t.updateQueue;
          if (i !== null) {
            var s = i.lastEffect;
            if (s !== null) {
              var p = s.next, g = p;
              do {
                var E = g, x = E.destroy, D = E.tag;
                x !== void 0 && ((D & Nd) !== fg ? JC(t, g) : YD(t, x)), g = g.next;
              } while (g !== p);
            }
          }
          return;
        }
        case w: {
          AC(t);
          var N = t.stateNode;
          typeof N.componentWillUnmount == "function" && WD(t, N);
          return;
        }
        case _: {
          AC(t);
          return;
        }
        case M: {
          zC(e, t);
          return;
        }
        case De:
          return;
        case Ne:
          return;
        case Oe:
          return;
      }
    }
    function eN(e, t, r) {
      for (var i = t; ; ) {
        if (LC(e, i), i.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        i.tag !== M) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $C(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function tN(e) {
      for (var t = e.return; t !== null; ) {
        if (UC(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function UC(e) {
      return e.tag === _ || e.tag === O || e.tag === M;
    }
    function nN(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || UC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== _ && t.tag !== $ && t.tag !== Ne; ) {
            if (t.flags & pt || t.child === null || t.tag === M)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & pt))
            return t.stateNode;
        }
    }
    function FC(e) {
      var t = tN(e), r, i, s = t.stateNode;
      switch (t.tag) {
        case _:
          r = s, i = !1;
          break;
        case O:
          r = s.containerInfo, i = !0;
          break;
        case M:
          r = s.containerInfo, i = !0;
          break;
        case De:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.flags & Fn && (LS(r), t.flags &= ~Fn);
      var p = nN(e);
      i ? Zg(e, p, r) : Jg(e, p, r);
    }
    function Zg(e, t, r) {
      var i = e.tag, s = i === _ || i === $;
      if (s || Ke) {
        var p = s ? e.stateNode : e.stateNode.instance;
        t ? GO(r, p, t) : YO(r, p);
      } else if (i !== M) {
        var g = e.child;
        if (g !== null) {
          Zg(g, t, r);
          for (var E = g.sibling; E !== null; )
            Zg(E, t, r), E = E.sibling;
        }
      }
    }
    function Jg(e, t, r) {
      var i = e.tag, s = i === _ || i === $;
      if (s || Ke) {
        var p = s ? e.stateNode : e.stateNode.instance;
        t ? qO(r, p, t) : WO(r, p);
      } else if (i !== M) {
        var g = e.child;
        if (g !== null) {
          Jg(g, t, r);
          for (var E = g.sibling; E !== null; )
            Jg(E, t, r), E = E.sibling;
        }
      }
    }
    function zC(e, t, r) {
      for (var i = t, s = !1, p, g; ; ) {
        if (!s) {
          var E = i.return;
          e:
            for (; ; ) {
              if (E === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var x = E.stateNode;
              switch (E.tag) {
                case _:
                  p = x, g = !1;
                  break e;
                case O:
                  p = x.containerInfo, g = !0;
                  break e;
                case M:
                  p = x.containerInfo, g = !0;
                  break e;
              }
              E = E.return;
            }
          s = !0;
        }
        if (i.tag === _ || i.tag === $)
          eN(e, i), g ? QO(p, i.stateNode) : KO(p, i.stateNode);
        else if (i.tag === M) {
          if (i.child !== null) {
            p = i.stateNode.containerInfo, g = !0, i.child.return = i, i = i.child;
            continue;
          }
        } else if (LC(e, i), i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return, i.tag === M && (s = !1);
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function rN(e, t, r) {
      zC(e, t);
      var i = t.alternate;
      $C(t), i !== null && $C(i);
    }
    function e0(e, t) {
      switch (t.tag) {
        case b:
        case P:
        case Q:
        case ne:
        case Me: {
          GD(yc | mc, t);
          return;
        }
        case w:
          return;
        case _: {
          var r = t.stateNode;
          if (r != null) {
            var i = t.memoizedProps, s = e !== null ? e.memoizedProps : i, p = t.type, g = t.updateQueue;
            t.updateQueue = null, g !== null && HO(r, g, p, s, i);
          }
          return;
        }
        case $: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var E = t.stateNode, x = t.memoizedProps, D = e !== null ? e.memoizedProps : x;
          VO(E, D, x);
          return;
        }
        case O: {
          {
            var N = t.stateNode;
            N.hydrate && (N.hydrate = !1, uk(N.containerInfo));
          }
          return;
        }
        case q:
          return;
        case j: {
          aN(t), IC(t);
          return;
        }
        case we: {
          IC(t);
          return;
        }
        case Te:
          return;
        case De:
          break;
        case Oe:
          break;
        case Ae:
        case Be: {
          var G = t.memoizedState, F = G !== null;
          jC(t, F);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function aN(e) {
      var t = e.memoizedState;
      if (t !== null) {
        CN();
        {
          var r = e.child;
          jC(r, !0);
        }
      }
    }
    function iN(e, t) {
      var r = t.memoizedState;
      if (r === null) {
        var i = t.alternate;
        if (i !== null) {
          var s = i.memoizedState;
          if (s !== null) {
            var p = s.dehydrated;
            p !== null && sk(p);
          }
        }
      }
    }
    function IC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new HD()), t.forEach(function(i) {
          var s = HN.bind(null, e, i);
          r.has(i) || (i.__reactDoNotTraceInteractions !== !0 && (s = f.unstable_wrap(s)), r.add(i), i.then(s, s));
        });
      }
    }
    function oN(e, t) {
      if (e !== null) {
        var r = e.memoizedState;
        if (r === null || r.dehydrated !== null) {
          var i = t.memoizedState;
          return i !== null && i.dehydrated === null;
        }
      }
      return !1;
    }
    function lN(e) {
      LS(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Pd = Symbol.for;
      Pd("selector.component"), Pd("selector.has_pseudo_class"), Pd("selector.role"), Pd("selector.test_id"), Pd("selector.text");
    }
    var uN = [];
    function sN() {
      uN.forEach(function(e) {
        return e();
      });
    }
    var cN = Math.ceil, t0 = v.ReactCurrentDispatcher, n0 = v.ReactCurrentOwner, r0 = v.IsSomeRendererActing, Sn = (
      /*             */
      0
    ), Hh = (
      /*               */
      1
    ), fN = (
      /*                 */
      2
    ), a0 = (
      /*         */
      4
    ), i0 = (
      /*       */
      8
    ), Jr = (
      /*                */
      16
    ), Fi = (
      /*                */
      32
    ), PC = (
      /*       */
      64
    ), Ro = 0, Vh = 1, Wh = 2, Yh = 3, qh = 4, o0 = 5, lt = Sn, br = null, bn = null, Cr = se, zi = se, l0 = xl(se), rr = Ro, Gh = null, Gu = se, Kh = se, Ku = se, Qh = se, u0 = null, s0 = 0, BC = 500, HC = 1 / 0, dN = 500;
    function Cc() {
      HC = fr() + dN;
    }
    function VC() {
      return HC;
    }
    var Ye = null, Xh = !1, c0 = null, xc = null, Oo = !1, wc = null, Bd = $y, f0 = se, d0 = [], p0 = [], ko = null, pN = 50, Hd = 0, v0 = null, vN = 50, Zh = 0, Qu = null, Vd = rn, Do = se, Jh = se, h0 = !1, Wd = null, em = !1;
    function hN() {
      return br;
    }
    function ea() {
      return (lt & (Jr | Fi)) !== Sn ? fr() : (Vd !== rn || (Vd = fr()), Vd);
    }
    function Nl(e) {
      var t = e.mode;
      if ((t & Fr) === dn)
        return Rt;
      if ((t & zu) === dn)
        return fc() === Ea ? Rt : Ia;
      Do === se && (Do = Gu);
      var r = Ik() !== zk;
      if (r)
        return Jh !== se && (Jh = u0 !== null ? u0.pendingLanes : se), cv(Do, Jh);
      var i = fc(), s;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (lt & a0) !== Sn && i === Uu
      )
        s = vl(ll, Do);
      else {
        var p = Ff(i);
        s = vl(p, Do);
      }
      return s;
    }
    function mN(e) {
      var t = e.mode;
      return (t & Fr) === dn ? Rt : (t & zu) === dn ? fc() === Ea ? Rt : Ia : (Do === se && (Do = Gu), Pf(Do));
    }
    function pr(e, t, r) {
      WN(), KN(e);
      var i = tm(e, t);
      if (i === null)
        return qN(e), null;
      ml(i, t, r), i === br && (Ku = At(Ku, t), rr === qh && Tc(i, Cr));
      var s = fc();
      t === Rt ? /* Check if we're inside unbatchedUpdates */ (lt & i0) !== Sn && // Check if we're not already rendering
      (lt & (Jr | Fi)) === Sn ? (Ml(i, t), m0(i)) : (xa(i, r), Ml(i, t), lt === Sn && (Cc(), Li())) : ((lt & a0) !== Sn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (s === Uu || s === Ea) && (ko === null ? ko = /* @__PURE__ */ new Set([i]) : ko.add(i)), xa(i, r), Ml(i, t)), u0 = i;
    }
    function tm(e, t) {
      e.lanes = At(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = At(r.lanes, t)), r === null && (e.flags & (pt | Mr)) !== It && tx(e);
      for (var i = e, s = e.return; s !== null; )
        s.childLanes = At(s.childLanes, t), r = s.alternate, r !== null ? r.childLanes = At(r.childLanes, t) : (s.flags & (pt | Mr)) !== It && tx(e), i = s, s = s.return;
      if (i.tag === O) {
        var p = i.stateNode;
        return p;
      } else
        return null;
    }
    function xa(e, t) {
      var r = e.callbackNode;
      ny(e, t);
      var i = Eu(e, e === br ? Cr : se), s = ur();
      if (i === se) {
        r !== null && (ub(r), e.callbackNode = null, e.callbackPriority = za);
        return;
      }
      if (r !== null) {
        var p = e.callbackPriority;
        if (p === s)
          return;
        ub(r);
      }
      var g;
      if (s === Ei)
        g = $k(m0.bind(null, e));
      else if (s === vu)
        g = wl(Ea, m0.bind(null, e));
      else {
        var E = Bs(s);
        g = wl(E, WC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = g;
    }
    function WC(e) {
      if (Vd = rn, Do = se, Jh = se, (lt & (Jr | Fi)) !== Sn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, r = Ii();
      if (r && e.callbackNode !== t)
        return null;
      var i = Eu(e, e === br ? Cr : se);
      if (i === se)
        return null;
      var s = kN(e, i);
      if (Pn(Gu, Ku))
        Rc(e, se);
      else if (s !== Ro) {
        if (s === Wh && (lt |= PC, e.hydrate && (e.hydrate = !1, Oy(e.containerInfo)), i = jr(e), i !== se && (s = Yd(e, i))), s === Vh) {
          var p = Gh;
          throw Rc(e, se), Tc(e, i), xa(e, fr()), p;
        }
        var g = e.current.alternate;
        e.finishedWork = g, e.finishedLanes = i, yN(e, s, i);
      }
      return xa(e, fr()), e.callbackNode === t ? WC.bind(null, e) : null;
    }
    function yN(e, t, r) {
      switch (t) {
        case Ro:
        case Vh:
          throw Error("Root did not complete. This is a bug in React.");
        case Wh: {
          Xu(e);
          break;
        }
        case Yh: {
          if (Tc(e, r), If(r) && // do not delay if we're inside an act() scope
          !JN()) {
            var i = s0 + BC - fr();
            if (i > 10) {
              var s = Eu(e, se);
              if (s !== se)
                break;
              var p = e.suspendedLanes;
              if (!wi(p, r)) {
                ea(), Hf(e, p);
                break;
              }
              e.timeoutHandle = jS(Xu.bind(null, e), i);
              break;
            }
          }
          Xu(e);
          break;
        }
        case qh: {
          if (Tc(e, r), sv(r))
            break;
          {
            var g = ey(e, r), E = g, x = fr() - E, D = VN(x) - x;
            if (D > 10) {
              e.timeoutHandle = jS(Xu.bind(null, e), D);
              break;
            }
          }
          Xu(e);
          break;
        }
        case o0: {
          Xu(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function Tc(e, t) {
      t = hl(t, Qh), t = hl(t, Ku), vv(e, t);
    }
    function m0(e) {
      if ((lt & (Jr | Fi)) !== Sn)
        throw Error("Should not already be working.");
      Ii();
      var t, r;
      if (e === br && Pn(e.expiredLanes, Cr) ? (t = Cr, r = Yd(e, t), Pn(Gu, Ku) && (t = Eu(e, t), r = Yd(e, t))) : (t = Eu(e, se), r = Yd(e, t)), e.tag !== Ay && r === Wh && (lt |= PC, e.hydrate && (e.hydrate = !1, Oy(e.containerInfo)), t = jr(e), t !== se && (r = Yd(e, t))), r === Vh) {
        var i = Gh;
        throw Rc(e, se), Tc(e, t), xa(e, fr()), i;
      }
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Xu(e), xa(e, fr()), null;
    }
    function gN() {
      if ((lt & (Hh | Jr | Fi)) !== Sn) {
        (lt & Jr) !== Sn && m("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      EN(), Ii();
    }
    function EN() {
      if (ko !== null) {
        var e = ko;
        ko = null, e.forEach(function(t) {
          Su(t), xa(t, fr());
        });
      }
      Li();
    }
    function YC(e, t) {
      var r = lt;
      lt |= Hh;
      try {
        return e(t);
      } finally {
        lt = r, lt === Sn && (Cc(), Li());
      }
    }
    function SN(e, t) {
      var r = lt;
      lt |= fN;
      try {
        return e(t);
      } finally {
        lt = r, lt === Sn && (Cc(), Li());
      }
    }
    function bN(e, t, r, i, s) {
      var p = lt;
      lt |= a0;
      try {
        return Fu(Uu, e.bind(null, t, r, i, s));
      } finally {
        lt = p, lt === Sn && (Cc(), Li());
      }
    }
    function qC(e, t) {
      var r = lt;
      lt &= ~Hh, lt |= i0;
      try {
        return e(t);
      } finally {
        lt = r, lt === Sn && (Cc(), Li());
      }
    }
    function y0(e, t) {
      var r = lt;
      if ((r & (Jr | Fi)) !== Sn)
        return m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      lt |= Hh;
      try {
        return e ? Fu(Ea, e.bind(null, t)) : void 0;
      } finally {
        lt = r, Li();
      }
    }
    function nm(e, t) {
      cr(l0, zi, e), zi = At(zi, t), Gu = At(Gu, t);
    }
    function g0(e) {
      zi = l0.current, sr(l0, e);
    }
    function Rc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var r = e.timeoutHandle;
      if (r !== Ry && (e.timeoutHandle = Ry, PO(r)), bn !== null)
        for (var i = bn.return; i !== null; )
          DC(i), i = i.return;
      br = e, bn = Zu(e.current, null), Cr = zi = Gu = t, rr = Ro, Gh = null, Kh = se, Ku = se, Qh = se, Qu = null, Ya.discardPendingWarnings();
    }
    function GC(e, t) {
      do {
        var r = bn;
        try {
          if (uh(), Pb(), or(), n0.current = null, r === null || r.return === null) {
            rr = Vh, Gh = t, bn = null;
            return;
          }
          Ze && r.mode & Zr && zh(r, !0), BD(e, r.return, r, t, Cr), ZC(r);
        } catch (i) {
          t = i, bn === r && r !== null ? (r = r.return, bn = r) : r = bn;
          continue;
        }
        return;
      } while (!0);
    }
    function KC() {
      var e = t0.current;
      return t0.current = $h, e === null ? $h : e;
    }
    function QC(e) {
      t0.current = e;
    }
    function rm(e) {
      {
        var t = f.__interactionsRef.current;
        return f.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function am(e) {
      f.__interactionsRef.current = e;
    }
    function CN() {
      s0 = fr();
    }
    function E0(e) {
      Kh = At(e, Kh);
    }
    function xN() {
      rr === Ro && (rr = Yh);
    }
    function wN() {
      (rr === Ro || rr === Yh) && (rr = qh), br !== null && (zf(Kh) || zf(Ku)) && Tc(br, Cr);
    }
    function TN() {
      rr !== o0 && (rr = Wh);
    }
    function RN() {
      return rr === Ro;
    }
    function Yd(e, t) {
      var r = lt;
      lt |= Jr;
      var i = KC();
      (br !== e || Cr !== t) && (Rc(e, t), lx(e, t));
      var s = rm(e);
      do
        try {
          ON();
          break;
        } catch (p) {
          GC(e, p);
        }
      while (!0);
      if (uh(), am(s), lt = r, QC(i), bn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return br = null, Cr = se, rr;
    }
    function ON() {
      for (; bn !== null; )
        XC(bn);
    }
    function kN(e, t) {
      var r = lt;
      lt |= Jr;
      var i = KC();
      (br !== e || Cr !== t) && (Cc(), Rc(e, t), lx(e, t));
      var s = rm(e);
      do
        try {
          DN();
          break;
        } catch (p) {
          GC(e, p);
        }
      while (!0);
      return uh(), am(s), QC(i), lt = r, bn !== null ? Ro : (br = null, Cr = se, rr);
    }
    function DN() {
      for (; bn !== null && !jk(); )
        XC(bn);
    }
    function XC(e) {
      var t = e.alternate;
      kn(e);
      var r;
      (e.mode & Zr) !== dn ? ($g(e), r = b0(t, e, zi), zh(e, !0)) : r = b0(t, e, zi), or(), e.memoizedProps = e.pendingProps, r === null ? ZC(e) : bn = r, n0.current = null;
    }
    function ZC(e) {
      var t = e;
      do {
        var r = t.alternate, i = t.return;
        if ((t.flags & ru) === It) {
          kn(t);
          var s = void 0;
          if ((t.mode & Zr) === dn ? s = kC(r, t, zi) : ($g(t), s = kC(r, t, zi), zh(t, !1)), or(), s !== null) {
            bn = s;
            return;
          }
          if (NN(t), i !== null && // Do not append effects to parents if a sibling failed to complete
          (i.flags & ru) === It) {
            i.firstEffect === null && (i.firstEffect = t.firstEffect), t.lastEffect !== null && (i.lastEffect !== null && (i.lastEffect.nextEffect = t.firstEffect), i.lastEffect = t.lastEffect);
            var p = t.flags;
            p > er && (i.lastEffect !== null ? i.lastEffect.nextEffect = t : i.firstEffect = t, i.lastEffect = t);
          }
        } else {
          var g = FD(t);
          if (g !== null) {
            g.flags &= ro, bn = g;
            return;
          }
          if ((t.mode & Zr) !== dn) {
            zh(t, !1);
            for (var E = t.actualDuration, x = t.child; x !== null; )
              E += x.actualDuration, x = x.sibling;
            t.actualDuration = E;
          }
          i !== null && (i.firstEffect = i.lastEffect = null, i.flags |= ru);
        }
        var D = t.sibling;
        if (D !== null) {
          bn = D;
          return;
        }
        t = i, bn = t;
      } while (t !== null);
      rr === Ro && (rr = o0);
    }
    function NN(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Be || e.tag === Ae) && e.memoizedState !== null && !Pn(zi, Kr) && (e.mode & zu) !== se)
      ) {
        var t = se;
        if ((e.mode & Zr) !== dn) {
          for (var r = e.actualDuration, i = e.selfBaseDuration, s = e.alternate === null || e.child !== e.alternate.child, p = e.child; p !== null; )
            t = At(t, At(p.lanes, p.childLanes)), s && (r += p.actualDuration), i += p.treeBaseDuration, p = p.sibling;
          var g = e.tag === j && e.memoizedState !== null;
          if (g) {
            var E = e.child;
            E !== null && (i -= E.treeBaseDuration);
          }
          e.actualDuration = r, e.treeBaseDuration = i;
        } else
          for (var x = e.child; x !== null; )
            t = At(t, At(x.lanes, x.childLanes)), x = x.sibling;
        e.childLanes = t;
      }
    }
    function Xu(e) {
      var t = fc();
      return Fu(Ea, _N.bind(null, e, t)), null;
    }
    function _N(e, t) {
      do
        Ii();
      while (wc !== null);
      if (YN(), (lt & (Jr | Fi)) !== Sn)
        throw Error("Should not already be working.");
      var r = e.finishedWork, i = e.finishedLanes;
      if (r === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = se, r === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var s = At(r.lanes, r.childLanes);
      Vf(e, s), ko !== null && !ay(s) && ko.has(e) && ko.delete(e), e === br && (br = null, bn = null, Cr = se);
      var p;
      if (r.flags > er ? r.lastEffect !== null ? (r.lastEffect.nextEffect = r, p = r.firstEffect) : p = r : p = r.firstEffect, p !== null) {
        var g = lt;
        lt |= Fi;
        var E = rm(e);
        n0.current = null, Wd = jO(e.containerInfo), em = !1, Ye = p;
        do
          if (Zn(null, MN, null), gr()) {
            if (Ye === null)
              throw Error("Should be working on an effect.");
            var x = Jn();
            _l(Ye, x), Ye = Ye.nextEffect;
          }
        while (Ye !== null);
        Wd = null, rC(), Ye = p;
        do
          if (Zn(null, AN, null, e, t), gr()) {
            if (Ye === null)
              throw Error("Should be working on an effect.");
            var D = Jn();
            _l(Ye, D), Ye = Ye.nextEffect;
          }
        while (Ye !== null);
        LO(e.containerInfo), e.current = r, Ye = p;
        do
          if (Zn(null, jN, null, e, i), gr()) {
            if (Ye === null)
              throw Error("Should be working on an effect.");
            var N = Jn();
            _l(Ye, N), Ye = Ye.nextEffect;
          }
        while (Ye !== null);
        Ye = null, Lk(), am(E), lt = g;
      } else
        e.current = r, rC();
      var G = Oo;
      if (Oo)
        Oo = !1, wc = e, f0 = i, Bd = t;
      else
        for (Ye = p; Ye !== null; ) {
          var F = Ye.nextEffect;
          Ye.nextEffect = null, Ye.flags & tn && sx(Ye), Ye = F;
        }
      if (s = e.pendingLanes, s !== se) {
        if (Qu !== null) {
          var X = Qu;
          Qu = null;
          for (var pe = 0; pe < X.length; pe++)
            ox(e, X[pe], e.memoizedInteractions);
        }
        Ml(e, s);
      } else
        xc = null;
      if (G || ux(e, i), s === Rt ? e === v0 ? Hd++ : (Hd = 0, v0 = e) : Hd = 0, Dk(r.stateNode, t), sN(), xa(e, fr()), Xh) {
        Xh = !1;
        var ke = c0;
        throw c0 = null, ke;
      }
      return (lt & i0) !== Sn || Li(), null;
    }
    function MN() {
      for (; Ye !== null; ) {
        var e = Ye.alternate;
        !em && Wd !== null && ((Ye.flags & tn) !== It ? rv(Ye, Wd) && (em = !0) : Ye.tag === j && oN(e, Ye) && rv(Ye, Wd) && (em = !0));
        var t = Ye.flags;
        (t & ua) !== It && (kn(Ye), qD(e, Ye), or()), (t & tl) !== It && (Oo || (Oo = !0, wl(xo, function() {
          return Ii(), null;
        }))), Ye = Ye.nextEffect;
      }
    }
    function AN(e, t) {
      for (; Ye !== null; ) {
        kn(Ye);
        var r = Ye.flags;
        if (r & Fn && lN(Ye), r & zn) {
          var i = Ye.alternate;
          i !== null && JD(i);
        }
        var s = r & (pt | ot | tn | Mr);
        switch (s) {
          case pt: {
            FC(Ye), Ye.flags &= ~pt;
            break;
          }
          case pi: {
            FC(Ye), Ye.flags &= ~pt;
            var p = Ye.alternate;
            e0(p, Ye);
            break;
          }
          case Mr: {
            Ye.flags &= ~Mr;
            break;
          }
          case ev: {
            Ye.flags &= ~Mr;
            var g = Ye.alternate;
            e0(g, Ye);
            break;
          }
          case ot: {
            var E = Ye.alternate;
            e0(E, Ye);
            break;
          }
          case tn: {
            rN(e, Ye);
            break;
          }
        }
        or(), Ye = Ye.nextEffect;
      }
    }
    function jN(e, t) {
      for (; Ye !== null; ) {
        kn(Ye);
        var r = Ye.flags;
        if (r & (ot | vi)) {
          var i = Ye.alternate;
          XD(e, i, Ye);
        }
        r & zn && ZD(Ye), or(), Ye = Ye.nextEffect;
      }
    }
    function Ii() {
      if (Bd !== $y) {
        var e = Bd > xo ? xo : Bd;
        return Bd = $y, Fu(e, UN);
      }
      return !1;
    }
    function LN(e, t) {
      d0.push(t, e), Oo || (Oo = !0, wl(xo, function() {
        return Ii(), null;
      }));
    }
    function JC(e, t) {
      p0.push(t, e);
      {
        e.flags |= nl;
        var r = e.alternate;
        r !== null && (r.flags |= nl);
      }
      Oo || (Oo = !0, wl(xo, function() {
        return Ii(), null;
      }));
    }
    function $N(e) {
      var t = e.create;
      e.destroy = t();
    }
    function UN() {
      if (wc === null)
        return !1;
      var e = wc, t = f0;
      if (wc = null, f0 = se, (lt & (Jr | Fi)) !== Sn)
        throw Error("Cannot flush passive effects while already rendering.");
      h0 = !0;
      var r = lt;
      lt |= Fi;
      var i = rm(e), s = p0;
      p0 = [];
      for (var p = 0; p < s.length; p += 2) {
        var g = s[p], E = s[p + 1], x = g.destroy;
        g.destroy = void 0;
        {
          E.flags &= ~nl;
          var D = E.alternate;
          D !== null && (D.flags &= ~nl);
        }
        if (typeof x == "function") {
          if (kn(E), Zn(null, x, null), gr()) {
            if (E === null)
              throw Error("Should be working on an effect.");
            var N = Jn();
            _l(E, N);
          }
          or();
        }
      }
      var G = d0;
      d0 = [];
      for (var F = 0; F < G.length; F += 2) {
        var X = G[F], pe = G[F + 1];
        {
          if (kn(pe), Zn(null, $N, null, X), gr()) {
            if (pe === null)
              throw Error("Should be working on an effect.");
            var ke = Jn();
            _l(pe, ke);
          }
          or();
        }
      }
      for (var tt = e.current.firstEffect; tt !== null; ) {
        var St = tt.nextEffect;
        tt.nextEffect = null, tt.flags & tn && sx(tt), tt = St;
      }
      return am(i), ux(e, t), h0 = !1, lt = r, Li(), Zh = wc === null ? 0 : Zh + 1, !0;
    }
    function S0(e) {
      return xc !== null && xc.has(e);
    }
    function FN(e) {
      xc === null ? xc = /* @__PURE__ */ new Set([e]) : xc.add(e);
    }
    function zN(e) {
      Xh || (Xh = !0, c0 = e);
    }
    var IN = zN;
    function ex(e, t, r) {
      var i = Qg(r, t), s = NC(e, i, Rt);
      Rl(e, s);
      var p = ea(), g = tm(e, Rt);
      g !== null && (ml(g, Rt, p), xa(g, p), Ml(g, Rt));
    }
    function _l(e, t) {
      if (e.tag === O) {
        ex(e, e, t);
        return;
      }
      for (var r = e.return; r !== null; ) {
        if (r.tag === O) {
          ex(r, e, t);
          return;
        } else if (r.tag === w) {
          var i = r.type, s = r.stateNode;
          if (typeof i.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !S0(s)) {
            var p = Qg(t, e), g = _C(r, p, Rt);
            Rl(r, g);
            var E = ea(), x = tm(r, Rt);
            if (x !== null)
              ml(x, Rt, E), xa(x, E), Ml(x, Rt);
            else if (typeof s.componentDidCatch == "function" && !S0(s))
              try {
                s.componentDidCatch(t, p);
              } catch {
              }
            return;
          }
        }
        r = r.return;
      }
    }
    function PN(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var s = ea();
      Hf(e, r), br === e && wi(Cr, r) && (rr === qh || rr === Yh && If(Cr) && fr() - s0 < BC ? Rc(e, se) : Qh = At(Qh, r)), xa(e, s), Ml(e, r);
    }
    function BN(e, t) {
      t === yn && (t = mN(e));
      var r = ea(), i = tm(e, t);
      i !== null && (ml(i, t, r), xa(i, r), Ml(i, t));
    }
    function HN(e, t) {
      var r = yn, i;
      i = e.stateNode, i !== null && i.delete(t), BN(e, r);
    }
    function VN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : cN(e / 1960) * 1960;
    }
    function WN() {
      if (Hd > pN)
        throw Hd = 0, v0 = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Zh > vN && (Zh = 0, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function YN() {
      Ya.flushLegacyContextWarning(), Ya.flushPendingUnsafeLifecycleWarnings();
    }
    var im = null;
    function tx(e) {
      {
        if ((lt & Jr) !== Sn || !(e.mode & (Fr | zu)))
          return;
        var t = e.tag;
        if (t !== R && t !== O && t !== w && t !== b && t !== P && t !== Q && t !== ne && t !== Me)
          return;
        var r = Le(e.type) || "ReactComponent";
        if (im !== null) {
          if (im.has(r))
            return;
          im.add(r);
        } else
          im = /* @__PURE__ */ new Set([r]);
        var i = Kn;
        try {
          kn(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? kn(e) : or();
        }
      }
    }
    var om = null;
    function qN(e) {
      {
        var t = e.tag;
        if (t !== O && t !== w && t !== b && t !== P && t !== Q && t !== ne && t !== Me || (e.flags & nl) !== It)
          return;
        var r = Le(e.type) || "ReactComponent";
        if (om !== null) {
          if (om.has(r))
            return;
          om.add(r);
        } else
          om = /* @__PURE__ */ new Set([r]);
        if (!h0) {
          var i = Kn;
          try {
            kn(e), m("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === w ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            i ? kn(e) : or();
          }
        }
      }
    }
    var b0;
    {
      var GN = null;
      b0 = function(e, t, r) {
        var i = px(GN, t);
        try {
          return xC(e, t, r);
        } catch (p) {
          if (p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (uh(), Pb(), DC(t), px(t, i), t.mode & Zr && $g(t), Zn(null, xC, null, e, t, r), gr()) {
            var s = Jn();
            throw s;
          } else
            throw p;
        }
      };
    }
    var nx = !1, C0;
    C0 = /* @__PURE__ */ new Set();
    function KN(e) {
      if (ai && (lt & Jr) !== Sn && !vD())
        switch (e.tag) {
          case b:
          case P:
          case ne: {
            var t = bn && Le(bn.type) || "Unknown", r = t;
            if (!C0.has(r)) {
              C0.add(r);
              var i = Le(e.type) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case w: {
            nx || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), nx = !0);
            break;
          }
        }
    }
    var lm = {
      current: !1
    };
    function rx(e) {
      if (r0.current === !0 && lm.current !== !0) {
        var t = Kn;
        try {
          kn(e), m(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);`);
        } finally {
          t ? kn(e) : or();
        }
      }
    }
    function ax(e) {
      (e.mode & En) !== dn && r0.current === !1 && lm.current === !1 && m(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e.type));
    }
    function QN(e) {
      if (lt === Sn && r0.current === !1 && lm.current === !1) {
        var t = Kn;
        try {
          kn(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e.type));
        } finally {
          t ? kn(e) : or();
        }
      }
    }
    var XN = QN, ix = !1;
    function ZN(e) {
      ix === !1 && c.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Fr || e.mode & zu) && (ix = !0, m(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function x0(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function um(e) {
      Qu === null ? Qu = [e] : Qu.push(e);
    }
    function ox(e, t, r) {
      if (r.size > 0) {
        var i = e.pendingInteractionMap, s = i.get(t);
        s != null ? r.forEach(function(E) {
          s.has(E) || E.__count++, s.add(E);
        }) : (i.set(t, new Set(r)), r.forEach(function(E) {
          E.__count++;
        }));
        var p = f.__subscriberRef.current;
        if (p !== null) {
          var g = x0(e, t);
          p.onWorkScheduled(r, g);
        }
      }
    }
    function Ml(e, t) {
      ox(e, t, f.__interactionsRef.current);
    }
    function lx(e, t) {
      var r = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(p, g) {
        Pn(t, g) && p.forEach(function(E) {
          return r.add(E);
        });
      }), e.memoizedInteractions = r, r.size > 0) {
        var i = f.__subscriberRef.current;
        if (i !== null) {
          var s = x0(e, t);
          try {
            i.onWorkStarted(r, s);
          } catch (p) {
            wl(Ea, function() {
              throw p;
            });
          }
        }
      }
    }
    function ux(e, t) {
      var r = e.pendingLanes, i;
      try {
        if (i = f.__subscriberRef.current, i !== null && e.memoizedInteractions.size > 0) {
          var s = x0(e, t);
          i.onWorkStopped(e.memoizedInteractions, s);
        }
      } catch (g) {
        wl(Ea, function() {
          throw g;
        });
      } finally {
        var p = e.pendingInteractionMap;
        p.forEach(function(g, E) {
          Pn(r, E) || (p.delete(E), g.forEach(function(x) {
            if (x.__count--, i !== null && x.__count === 0)
              try {
                i.onInteractionScheduledWorkCompleted(x);
              } catch (D) {
                wl(Ea, function() {
                  throw D;
                });
              }
          }));
        });
      }
    }
    function JN() {
      return e_ > 0;
    }
    var e_ = 0;
    function sx(e) {
      e.sibling = null, e.stateNode = null;
    }
    var wa = null, Oc = null, t_ = function(e) {
      wa = e;
    };
    function kc(e) {
      {
        if (wa === null)
          return e;
        var t = wa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function w0(e) {
      return kc(e);
    }
    function T0(e) {
      {
        if (wa === null)
          return e;
        var t = wa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var r = kc(e.render);
            if (e.render !== r) {
              var i = {
                $$typeof: Wr,
                render: r
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function cx(e, t) {
      {
        if (wa === null)
          return !1;
        var r = e.elementType, i = t.type, s = !1, p = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case w: {
            typeof i == "function" && (s = !0);
            break;
          }
          case b: {
            (typeof i == "function" || p === Tr) && (s = !0);
            break;
          }
          case P: {
            (p === Wr || p === Tr) && (s = !0);
            break;
          }
          case Q:
          case ne: {
            (p === Da || p === Tr) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var g = wa(r);
          if (g !== void 0 && g === wa(i))
            return !0;
        }
        return !1;
      }
    }
    function fx(e) {
      {
        if (wa === null || typeof WeakSet != "function")
          return;
        Oc === null && (Oc = /* @__PURE__ */ new WeakSet()), Oc.add(e);
      }
    }
    var n_ = function(e, t) {
      {
        if (wa === null)
          return;
        var r = t.staleFamilies, i = t.updatedFamilies;
        Ii(), y0(function() {
          R0(e.current, i, r);
        });
      }
    }, r_ = function(e, t) {
      {
        if (e.context !== Xr)
          return;
        Ii(), y0(function() {
          qd(t, e, null, null);
        });
      }
    };
    function R0(e, t, r) {
      {
        var i = e.alternate, s = e.child, p = e.sibling, g = e.tag, E = e.type, x = null;
        switch (g) {
          case b:
          case ne:
          case w:
            x = E;
            break;
          case P:
            x = E.render;
            break;
        }
        if (wa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var D = !1, N = !1;
        if (x !== null) {
          var G = wa(x);
          G !== void 0 && (r.has(G) ? N = !0 : t.has(G) && (g === w ? N = !0 : D = !0));
        }
        Oc !== null && (Oc.has(e) || i !== null && Oc.has(i)) && (N = !0), N && (e._debugNeedsRemount = !0), (N || D) && pr(e, Rt, rn), s !== null && !N && R0(s, t, r), p !== null && R0(p, t, r);
      }
    }
    var a_ = function(e, t) {
      {
        var r = /* @__PURE__ */ new Set(), i = new Set(t.map(function(s) {
          return s.current;
        }));
        return O0(e.current, i, r), r;
      }
    };
    function O0(e, t, r) {
      {
        var i = e.child, s = e.sibling, p = e.tag, g = e.type, E = null;
        switch (p) {
          case b:
          case ne:
          case w:
            E = g;
            break;
          case P:
            E = g.render;
            break;
        }
        var x = !1;
        E !== null && t.has(E) && (x = !0), x ? i_(e, r) : i !== null && O0(i, t, r), s !== null && O0(s, t, r);
      }
    }
    function i_(e, t) {
      {
        var r = o_(e, t);
        if (r)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case _:
              t.add(i.stateNode);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function o_(e, t) {
      for (var r = e, i = !1; ; ) {
        if (r.tag === _)
          i = !0, t.add(r.stateNode);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return i;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return i;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return !1;
    }
    var k0;
    {
      k0 = !1;
      try {
        var dx = Object.preventExtensions({});
      } catch {
        k0 = !0;
      }
    }
    var l_ = 1;
    function u_(e, t, r, i) {
      this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = It, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = l_++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !k0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ta = function(e, t, r, i) {
      return new u_(e, t, r, i);
    };
    function D0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function s_(e) {
      return typeof e == "function" && !D0(e) && e.defaultProps === void 0;
    }
    function c_(e) {
      if (typeof e == "function")
        return D0(e) ? w : b;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Wr)
          return P;
        if (t === Da)
          return Q;
      }
      return R;
    }
    function Zu(e, t) {
      var r = e.alternate;
      r === null ? (r = ta(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugID = e._debugID, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = It, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, r.actualDuration = 0, r.actualStartTime = -1), r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (r.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
        case R:
        case b:
        case ne:
          r.type = kc(e.type);
          break;
        case w:
          r.type = w0(e.type);
          break;
        case P:
          r.type = T0(e.type);
          break;
      }
      return r;
    }
    function f_(e, t) {
      e.flags &= pt, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var r = e.alternate;
      if (r === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
        var i = r.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
      }
      return e;
    }
    function d_(e) {
      var t;
      return e === QS ? t = zu | Fr | En : e === KS ? t = Fr | En : t = dn, Rk && (t |= Zr), ta(O, null, null, t);
    }
    function N0(e, t, r, i, s, p) {
      var g = R, E = e;
      if (typeof e == "function")
        D0(e) ? (g = w, E = w0(E)) : E = kc(E);
      else if (typeof e == "string")
        g = _;
      else
        e:
          switch (e) {
            case wr:
              return Ju(r.children, s, p, t);
            case je:
              g = z, s |= Uk;
              break;
            case Fl:
              g = z, s |= En;
              break;
            case ia:
              return p_(r, s, p, t);
            case ir:
              return v_(r, s, p, t);
            case hr:
              return h_(r, s, p, t);
            case et:
              return M0(r, s, p, t);
            case xt:
              return m_(r, s, p, t);
            case L:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ka:
                    g = J;
                    break e;
                  case Ja:
                    g = te;
                    break e;
                  case Wr:
                    g = P, E = T0(E);
                    break e;
                  case Da:
                    g = Q;
                    break e;
                  case Tr:
                    g = ce, E = null;
                    break e;
                  case qi:
                    g = Me;
                    break e;
                }
              var x = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var D = i ? Le(i.type) : null;
                D && (x += `

Check the render method of \`` + D + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + x);
            }
          }
      var N = ta(g, r, t, s);
      return N.elementType = e, N.type = E, N.lanes = p, N._debugOwner = i, N;
    }
    function _0(e, t, r) {
      var i = null;
      i = e._owner;
      var s = e.type, p = e.key, g = e.props, E = N0(s, p, g, i, t, r);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function Ju(e, t, r, i) {
      var s = ta(Y, e, i, t);
      return s.lanes = r, s;
    }
    function p_(e, t, r, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" as a prop');
      var s = ta(q, e, i, t | Zr);
      return s.elementType = ia, s.type = ia, s.lanes = r, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function v_(e, t, r, i) {
      var s = ta(j, e, i, t);
      return s.type = ir, s.elementType = ir, s.lanes = r, s;
    }
    function h_(e, t, r, i) {
      var s = ta(we, e, i, t);
      return s.type = hr, s.elementType = hr, s.lanes = r, s;
    }
    function M0(e, t, r, i) {
      var s = ta(Ae, e, i, t);
      return s.type = et, s.elementType = et, s.lanes = r, s;
    }
    function m_(e, t, r, i) {
      var s = ta(Be, e, i, t);
      return s.type = xt, s.elementType = xt, s.lanes = r, s;
    }
    function A0(e, t, r) {
      var i = ta($, e, null, t);
      return i.lanes = r, i;
    }
    function y_() {
      var e = ta(_, null, null, dn);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function j0(e, t, r) {
      var i = e.children !== null ? e.children : [], s = ta(M, i, e.key, t);
      return s.lanes = r, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function px(e, t) {
      return e === null && (e = ta(R, null, null, dn)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function g_(e, t, r) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ry, this.context = null, this.pendingContext = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = za, this.eventTimes = Hs(se), this.expirationTimes = Hs(rn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Hs(se), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = f.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case KS:
          this._debugRootType = "createBlockingRoot()";
          break;
        case QS:
          this._debugRootType = "createRoot()";
          break;
        case Ay:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function E_(e, t, r, i) {
      var s = new g_(e, t, r), p = d_(t);
      return s.current = p, p.stateNode = s, Hy(p), s;
    }
    function S_(e, t) {
      var r = t._getVersion, i = r(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    function b_(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Jt,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    var L0, $0;
    L0 = !1, $0 = {};
    function C_(e) {
      if (!e)
        return Xr;
      var t = ja(e), r = Tk(t);
      if (t.tag === w) {
        var i = t.type;
        if (Ai(i))
          return qS(t, i, r);
      }
      return r;
    }
    function x_(e, t) {
      {
        var r = ja(e);
        if (r === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var i = Cf(r);
        if (i === null)
          return null;
        if (i.mode & En) {
          var s = Le(r.type) || "Component";
          if (!$0[s]) {
            $0[s] = !0;
            var p = Kn;
            try {
              kn(i), r.mode & En ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              p ? kn(p) : or();
            }
          }
        }
        return i.stateNode;
      }
    }
    function w_(e, t, r, i) {
      return E_(e, t, r);
    }
    function qd(e, t, r, i) {
      kk(t, e);
      var s = t.current, p = ea();
      typeof jest < "u" && (ZN(s), rx(s));
      var g = Nl(s), E = C_(r);
      t.context === null ? t.context = E : t.pendingContext = E, ai && Kn !== null && !L0 && (L0 = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(Kn.type) || "Unknown"));
      var x = Tl(p, g);
      return x.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), x.callback = i), Rl(s, x), pr(s, g, p), g;
    }
    function U0(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case _:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function vx(e, t) {
      var r = e.memoizedState;
      r !== null && r.dehydrated !== null && (r.retryLane = Ba(r.retryLane, t));
    }
    function F0(e, t) {
      vx(e, t);
      var r = e.alternate;
      r && vx(r, t);
    }
    function T_(e) {
      if (e.tag === j) {
        var t = ea(), r = po;
        pr(e, r, t), F0(e, r);
      }
    }
    function R_(e) {
      if (e.tag === j) {
        var t = ea(), r = Is;
        pr(e, r, t), F0(e, r);
      }
    }
    function O_(e) {
      if (e.tag === j) {
        var t = ea(), r = Nl(e);
        pr(e, r, t), F0(e, r);
      }
    }
    function k_(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function hx(e) {
      var t = xf(e);
      return t === null ? null : t.tag === De ? t.stateNode.instance : t.stateNode;
    }
    var mx = function(e) {
      return !1;
    };
    function D_(e) {
      return mx(e);
    }
    var yx = null, gx = null, Ex = null, Sx = null, bx = null, Cx = null, xx = null, wx = null;
    {
      var Tx = function(e, t, r) {
        var i = t[r], s = Array.isArray(e) ? e.slice() : u({}, e);
        return r + 1 === t.length ? (Array.isArray(s) ? s.splice(i, 1) : delete s[i], s) : (s[i] = Tx(e[i], t, r + 1), s);
      }, Rx = function(e, t) {
        return Tx(e, t, 0);
      }, Ox = function(e, t, r, i) {
        var s = t[i], p = Array.isArray(e) ? e.slice() : u({}, e);
        if (i + 1 === t.length) {
          var g = r[i];
          p[g] = p[s], Array.isArray(p) ? p.splice(s, 1) : delete p[s];
        } else
          p[s] = Ox(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            r,
            i + 1
          );
        return p;
      }, kx = function(e, t, r) {
        if (t.length !== r.length) {
          h("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < r.length - 1; i++)
            if (t[i] !== r[i]) {
              h("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Ox(e, t, r, 0);
      }, Dx = function(e, t, r, i) {
        if (r >= t.length)
          return i;
        var s = t[r], p = Array.isArray(e) ? e.slice() : u({}, e);
        return p[s] = Dx(e[s], t, r + 1, i), p;
      }, Nx = function(e, t, r) {
        return Dx(e, t, 0, r);
      }, z0 = function(e, t) {
        for (var r = e.memoizedState; r !== null && t > 0; )
          r = r.next, t--;
        return r;
      };
      yx = function(e, t, r, i) {
        var s = z0(e, t);
        if (s !== null) {
          var p = Nx(s.memoizedState, r, i);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = u({}, e.memoizedProps), pr(e, Rt, rn);
        }
      }, gx = function(e, t, r) {
        var i = z0(e, t);
        if (i !== null) {
          var s = Rx(i.memoizedState, r);
          i.memoizedState = s, i.baseState = s, e.memoizedProps = u({}, e.memoizedProps), pr(e, Rt, rn);
        }
      }, Ex = function(e, t, r, i) {
        var s = z0(e, t);
        if (s !== null) {
          var p = kx(s.memoizedState, r, i);
          s.memoizedState = p, s.baseState = p, e.memoizedProps = u({}, e.memoizedProps), pr(e, Rt, rn);
        }
      }, Sx = function(e, t, r) {
        e.pendingProps = Nx(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), pr(e, Rt, rn);
      }, bx = function(e, t) {
        e.pendingProps = Rx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), pr(e, Rt, rn);
      }, Cx = function(e, t, r) {
        e.pendingProps = kx(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), pr(e, Rt, rn);
      }, xx = function(e) {
        pr(e, Rt, rn);
      }, wx = function(e) {
        mx = e;
      };
    }
    function N_(e) {
      var t = Cf(e);
      return t === null ? null : t.stateNode;
    }
    function __(e) {
      return null;
    }
    function M_() {
      return Kn;
    }
    function A_(e) {
      var t = e.findFiberByHostInstance, r = v.ReactCurrentDispatcher;
      return Ok({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: yx,
        overrideHookStateDeletePath: gx,
        overrideHookStateRenamePath: Ex,
        overrideProps: Sx,
        overridePropsDeletePath: bx,
        overridePropsRenamePath: Cx,
        setSuspenseHandler: wx,
        scheduleUpdate: xx,
        currentDispatcherRef: r,
        findHostInstanceByFiber: N_,
        findFiberByHostInstance: t || __,
        // React Refresh
        findHostInstancesForRefresh: a_,
        scheduleRefresh: n_,
        scheduleRoot: r_,
        setRefreshHandler: t_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: M_
      });
    }
    function I0(e, t, r) {
      this._internalRoot = j_(e, t, r);
    }
    I0.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var r = t.containerInfo;
        if (r.nodeType !== Qn) {
          var i = hx(t.current);
          i && i.parentNode !== r && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qd(e, t, null, null);
    }, I0.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      qd(null, e, null, function() {
        PS(t);
      });
    };
    function j_(e, t, r) {
      var i = r != null && r.hydrate === !0;
      r != null && r.hydrationOptions;
      var s = r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources || null, p = w_(e, t, i);
      wk(p.current, e), e.nodeType;
      {
        var g = e.nodeType === Qn ? e.parentNode : e;
        fS(g);
      }
      if (s)
        for (var E = 0; E < s.length; E++) {
          var x = s[E];
          S_(p, x);
        }
      return p;
    }
    function L_(e, t) {
      return new I0(e, Ay, t);
    }
    function Dc(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === ui || e.nodeType === Op || e.nodeType === Qn && e.nodeValue === " react-mount-point-unstable "));
    }
    var $_ = v.ReactCurrentOwner, _x, Mx = !1;
    _x = function(e) {
      if (e._reactRootContainer && e.nodeType !== Qn) {
        var t = hx(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var r = !!e._reactRootContainer, i = sm(e), s = !!(i && Cl(i));
      s && !r && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sm(e) {
      return e ? e.nodeType === ui ? e.documentElement : e.firstChild : null;
    }
    function U_(e) {
      var t = sm(e);
      return !!(t && t.nodeType === Nr && t.hasAttribute(mn));
    }
    function F_(e, t) {
      var r = t || U_(e);
      if (!r)
        for (var i = !1, s; s = e.lastChild; )
          !i && s.nodeType === Nr && s.hasAttribute(mn) && (i = !0, m("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(s);
      return r && !t && !Mx && (Mx = !0, h("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), L_(e, r ? {
        hydrate: !0
      } : void 0);
    }
    function z_(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function cm(e, t, r, i, s) {
      _x(r), z_(s === void 0 ? null : s, "render");
      var p = r._reactRootContainer, g;
      if (p) {
        if (g = p._internalRoot, typeof s == "function") {
          var x = s;
          s = function() {
            var D = U0(g);
            x.call(D);
          };
        }
        qd(t, g, e, s);
      } else {
        if (p = r._reactRootContainer = F_(r, i), g = p._internalRoot, typeof s == "function") {
          var E = s;
          s = function() {
            var D = U0(g);
            E.call(D);
          };
        }
        qC(function() {
          qd(t, g, e, s);
        });
      }
      return U0(g);
    }
    function I_(e) {
      {
        var t = $_.current;
        if (t !== null && t.stateNode !== null) {
          var r = t.stateNode._warnedAboutRefsInRender;
          r || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Nr ? e : x_(e, "findDOMNode");
    }
    function P_(e, t, r) {
      if (!Dc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = qv(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return cm(null, e, t, !0, r);
    }
    function B_(e, t, r) {
      if (!Dc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = qv(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return cm(null, e, t, !1, r);
    }
    function H_(e, t, r, i) {
      if (!Dc(r))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Jp(e)))
        throw Error("parentComponent must be a valid React Component");
      return cm(e, t, r, !1, i);
    }
    function V_(e) {
      if (!Dc(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = qv(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var r = sm(e), i = r && !Cl(r);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return qC(function() {
          cm(null, null, e, !1, function() {
            e._reactRootContainer = null, PS(e);
          });
        }), !0;
      } else {
        {
          var s = sm(e), p = !!(s && Cl(s)), g = e.nodeType === Nr && Dc(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", g ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    js(T_), av(R_), rl(O_), ao(k_);
    var Ax = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), pf(TO), ks(YC, bN, gN, SN);
    function jx(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dc(t))
        throw Error("Target container is not a DOM element.");
      return b_(e, t, null, r);
    }
    function W_(e, t, r, i) {
      return H_(e, t, r, i);
    }
    function Y_(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return Ax || (Ax = !0, h('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), jx(e, t, r);
    }
    var q_ = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        Cl,
        lc,
        Gv,
        Xo,
        vf,
        Ii,
        // TODO: This is related to `act`, not events. Move to separate key?
        lm
      ]
    }, G_ = A_({
      findFiberByHostInstance: $u,
      bundleType: 1,
      version: cb,
      rendererPackageName: "react-dom"
    });
    if (!G_ && Ee && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Lx = window.location.protocol;
      /^(https?|file):$/.test(Lx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Lx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q_, na.createPortal = jx, na.findDOMNode = I_, na.flushSync = y0, na.hydrate = P_, na.render = B_, na.unmountComponentAtNode = V_, na.unstable_batchedUpdates = YC, na.unstable_createPortal = Y_, na.unstable_renderSubtreeIntoContainer = W_, na.version = cb;
  }()), na;
}
var ra = {};
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tw;
function DM() {
  if (tw)
    return ra;
  tw = 1;
  var l = on, u = ap(), c = Fw();
  function f(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      a += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!l)
    throw Error(f(227));
  var v = /* @__PURE__ */ new Set(), h = {};
  function m(n, a) {
    C(n, a), C(n + "Capture", a);
  }
  function C(n, a) {
    for (h[n] = a, n = 0; n < a.length; n++)
      v.add(a[n]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = Object.prototype.hasOwnProperty, O = {}, M = {};
  function _(n) {
    return R.call(M, n) ? !0 : R.call(O, n) ? !1 : w.test(n) ? M[n] = !0 : (O[n] = !0, !1);
  }
  function $(n, a, o, d) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Y(n, a, o, d) {
    if (a === null || typeof a > "u" || $(n, a, o, d))
      return !0;
    if (d)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function z(n, a, o, d, y, S, T) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = d, this.attributeNamespace = y, this.mustUseProperty = o, this.propertyName = n, this.type = a, this.sanitizeURL = S, this.removeEmptyString = T;
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    te[n] = new z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    te[a] = new z(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    te[n] = new z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    te[n] = new z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    te[n] = new z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    te[n] = new z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    te[n] = new z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    te[n] = new z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    te[n] = new z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var J = /[\-:]([a-z])/g;
  function P(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      J,
      P
    );
    te[a] = new z(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(J, P);
    te[a] = new z(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(J, P);
    te[a] = new z(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    te[n] = new z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), te.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    te[n] = new z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function q(n, a, o, d) {
    var y = te.hasOwnProperty(a) ? te[a] : null, S = y !== null ? y.type === 0 : d ? !1 : !(!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N");
    S || (Y(a, o, y, d) && (o = null), d || y === null ? _(a) && (o === null ? n.removeAttribute(a) : n.setAttribute(a, "" + o)) : y.mustUseProperty ? n[y.propertyName] = o === null ? y.type === 3 ? !1 : "" : o : (a = y.attributeName, d = y.attributeNamespace, o === null ? n.removeAttribute(a) : (y = y.type, o = y === 3 || y === 4 && o === !0 ? "" : "" + o, d ? n.setAttributeNS(d, a, o) : n.setAttribute(a, o))));
  }
  var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = 60103, ne = 60106, ce = 60107, Te = 60108, Ne = 60114, we = 60109, De = 60110, Oe = 60112, Me = 60113, Ae = 60120, Be = 60115, Ze = 60116, Ke = 60121, nt = 60128, re = 60129, W = 60130, le = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var ae = Symbol.for;
    Q = ae("react.element"), ne = ae("react.portal"), ce = ae("react.fragment"), Te = ae("react.strict_mode"), Ne = ae("react.profiler"), we = ae("react.provider"), De = ae("react.context"), Oe = ae("react.forward_ref"), Me = ae("react.suspense"), Ae = ae("react.suspense_list"), Be = ae("react.memo"), Ze = ae("react.lazy"), Ke = ae("react.block"), ae("react.scope"), nt = ae("react.opaque.id"), re = ae("react.debug_trace_mode"), W = ae("react.offscreen"), le = ae("react.legacy_hidden");
  }
  var ge = typeof Symbol == "function" && Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = ge && n[ge] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ee;
  function Ie(n) {
    if (Ee === void 0)
      try {
        throw Error();
      } catch (o) {
        var a = o.stack.trim().match(/\n( *(at )?)/);
        Ee = a && a[1] || "";
      }
    return `
` + Ee + n;
  }
  var Re = !1;
  function Pe(n, a) {
    if (!n || Re)
      return "";
    Re = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (U) {
            var d = U;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (U) {
            d = U;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          d = U;
        }
        n();
      }
    } catch (U) {
      if (U && d && typeof U.stack == "string") {
        for (var y = U.stack.split(`
`), S = d.stack.split(`
`), T = y.length - 1, k = S.length - 1; 1 <= T && 0 <= k && y[T] !== S[k]; )
          k--;
        for (; 1 <= T && 0 <= k; T--, k--)
          if (y[T] !== S[k]) {
            if (T !== 1 || k !== 1)
              do
                if (T--, k--, 0 > k || y[T] !== S[k])
                  return `
` + y[T].replace(" at new ", " at ");
              while (1 <= T && 0 <= k);
            break;
          }
      }
    } finally {
      Re = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Ie(n) : "";
  }
  function Qe(n) {
    switch (n.tag) {
      case 5:
        return Ie(n.type);
      case 16:
        return Ie("Lazy");
      case 13:
        return Ie("Suspense");
      case 19:
        return Ie("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 22:
        return n = Pe(n.type._render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ge(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ce:
        return "Fragment";
      case ne:
        return "Portal";
      case Ne:
        return "Profiler";
      case Te:
        return "StrictMode";
      case Me:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case De:
          return (n.displayName || "Context") + ".Consumer";
        case we:
          return (n._context.displayName || "Context") + ".Provider";
        case Oe:
          var a = n.render;
          return a = a.displayName || a.name || "", n.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Be:
          return Ge(n.type);
        case Ke:
          return Ge(n._render);
        case Ze:
          a = n._payload, n = n._init;
          try {
            return Ge(n(a));
          } catch {
          }
      }
    return null;
  }
  function oe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function kt(n) {
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function jt(n) {
    var a = kt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, a), d = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var y = o.get, S = o.set;
      return Object.defineProperty(n, a, { configurable: !0, get: function() {
        return y.call(this);
      }, set: function(T) {
        d = "" + T, S.call(this, T);
      } }), Object.defineProperty(n, a, { enumerable: o.enumerable }), { getValue: function() {
        return d;
      }, setValue: function(T) {
        d = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[a];
      } };
    }
  }
  function Je(n) {
    n._valueTracker || (n._valueTracker = jt(n));
  }
  function mn(n) {
    if (!n)
      return !1;
    var a = n._valueTracker;
    if (!a)
      return !0;
    var o = a.getValue(), d = "";
    return n && (d = kt(n) ? n.checked ? "true" : "false" : n.value), n = d, n !== o ? (a.setValue(n), !0) : !1;
  }
  function cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, a) {
    var o = a.checked;
    return u({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function vr(n, a) {
    var o = a.defaultValue == null ? "" : a.defaultValue, d = a.checked != null ? a.checked : a.defaultChecked;
    o = oe(a.value != null ? a.value : o), n._wrapperState = { initialChecked: d, initialValue: o, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function un(n, a) {
    a = a.checked, a != null && q(n, "checked", a, !1);
  }
  function xn(n, a) {
    un(n, a);
    var o = oe(a.value), d = a.type;
    if (o != null)
      d === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (d === "submit" || d === "reset") {
      n.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? wn(n, a.type, o) : a.hasOwnProperty("defaultValue") && wn(n, a.type, oe(a.defaultValue)), a.checked == null && a.defaultChecked != null && (n.defaultChecked = !!a.defaultChecked);
  }
  function ar(n, a, o) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var d = a.type;
      if (!(d !== "submit" && d !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + n._wrapperState.initialValue, o || a === n.value || (n.value = a), n.defaultValue = a;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function wn(n, a, o) {
    (a !== "number" || cn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  function hn(n) {
    var a = "";
    return l.Children.forEach(n, function(o) {
      o != null && (a += o);
    }), a;
  }
  function it(n, a) {
    return n = u({ children: void 0 }, a), (a = hn(a.children)) && (n.children = a), n;
  }
  function Ot(n, a, o, d) {
    if (n = n.options, a) {
      a = {};
      for (var y = 0; y < o.length; y++)
        a["$" + o[y]] = !0;
      for (o = 0; o < n.length; o++)
        y = a.hasOwnProperty("$" + n[o].value), n[o].selected !== y && (n[o].selected = y), y && d && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + oe(o), a = null, y = 0; y < n.length; y++) {
        if (n[y].value === o) {
          n[y].selected = !0, d && (n[y].defaultSelected = !0);
          return;
        }
        a !== null || n[y].disabled || (a = n[y]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Mt(n, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(f(91));
    return u({}, a, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Hr(n, a) {
    var o = a.value;
    if (o == null) {
      if (o = a.children, a = a.defaultValue, o != null) {
        if (a != null)
          throw Error(f(92));
        if (Array.isArray(o)) {
          if (!(1 >= o.length))
            throw Error(f(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), o = a;
    }
    n._wrapperState = { initialValue: oe(o) };
  }
  function Vr(n, a) {
    var o = oe(a.value), d = oe(a.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), a.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), d != null && (n.defaultValue = "" + d);
  }
  function xr(n) {
    var a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  var _e = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function ve(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ue(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ve(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var mt, Nt = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, o, d, y) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(a, o, d, y);
      });
    } : n;
  }(function(n, a) {
    if (n.namespaceURI !== _e.svg || "innerHTML" in n)
      n.innerHTML = a;
    else {
      for (mt = mt || document.createElement("div"), mt.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = mt.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; a.firstChild; )
        n.appendChild(a.firstChild);
    }
  });
  function Ft(n, a) {
    if (a) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Gt = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, On = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gt).forEach(function(n) {
    On.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), Gt[a] = Gt[n];
    });
  });
  function Jt(n, a, o) {
    return a == null || typeof a == "boolean" || a === "" ? "" : o || typeof a != "number" || a === 0 || Gt.hasOwnProperty(n) && Gt[n] ? ("" + a).trim() : a + "px";
  }
  function wr(n, a) {
    n = n.style;
    for (var o in a)
      if (a.hasOwnProperty(o)) {
        var d = o.indexOf("--") === 0, y = Jt(o, a[o], d);
        o === "float" && (o = "cssFloat"), d ? n.setProperty(o, y) : n[o] = y;
      }
  }
  var Fl = u({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ia(n, a) {
    if (a) {
      if (Fl[n] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(f(137, n));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(f(60));
        if (!(typeof a.dangerouslySetInnerHTML == "object" && "__html" in a.dangerouslySetInnerHTML))
          throw Error(f(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(f(62));
    }
  }
  function ka(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  function Ja(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wr = null, ir = null, hr = null;
  function Da(n) {
    if (n = gr(n)) {
      if (typeof Wr != "function")
        throw Error(f(280));
      var a = n.stateNode;
      a && (a = ja(a), Wr(n.stateNode, n.type, a));
    }
  }
  function Tr(n) {
    ir ? hr ? hr.push(n) : hr = [n] : ir = n;
  }
  function qi() {
    if (ir) {
      var n = ir, a = hr;
      if (hr = ir = null, Da(n), a)
        for (n = 0; n < a.length; n++)
          Da(a[n]);
    }
  }
  function L(n, a) {
    return n(a);
  }
  function ye(n, a, o, d, y) {
    return n(a, o, d, y);
  }
  function je() {
  }
  var et = L, xt = !1, at = !1;
  function wt() {
    (ir !== null || hr !== null) && (je(), qi());
  }
  function Tt(n, a, o) {
    if (at)
      return n(a, o);
    at = !0;
    try {
      return et(n, a, o);
    } finally {
      at = !1, wt();
    }
  }
  function Vt(n, a) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var d = ja(o);
    if (d === null)
      return null;
    o = d[a];
    e:
      switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (n = n.type, d = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !d;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(f(231, a, typeof o));
    return o;
  }
  var Ut = !1;
  if (b)
    try {
      var Wt = {};
      Object.defineProperty(Wt, "passive", { get: function() {
        Ut = !0;
      } }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt);
    } catch {
      Ut = !1;
    }
  function Rr(n, a, o, d, y, S, T, k, U) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(o, ee);
    } catch (Fe) {
      this.onError(Fe);
    }
  }
  var mr = !1, ei = null, Gn = !1, ls = null, dp = { onError: function(n) {
    mr = !0, ei = n;
  } };
  function pp(n, a, o, d, y, S, T, k, U) {
    mr = !1, ei = null, Rr.apply(dp, arguments);
  }
  function oa(n, a, o, d, y, S, T, k, U) {
    if (pp.apply(this, arguments), mr) {
      if (mr) {
        var ee = ei;
        mr = !1, ei = null;
      } else
        throw Error(f(198));
      Gn || (Gn = !0, ls = ee);
    }
  }
  function Vn(n) {
    var a = n, o = n;
    if (n.alternate)
      for (; a.return; )
        a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 1026 && (o = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? o : null;
  }
  function us(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function ss(n) {
    if (Vn(n) !== n)
      throw Error(f(188));
  }
  function ti(n) {
    var a = n.alternate;
    if (!a) {
      if (a = Vn(n), a === null)
        throw Error(f(188));
      return a !== n ? null : n;
    }
    for (var o = n, d = a; ; ) {
      var y = o.return;
      if (y === null)
        break;
      var S = y.alternate;
      if (S === null) {
        if (d = y.return, d !== null) {
          o = d;
          continue;
        }
        break;
      }
      if (y.child === S.child) {
        for (S = y.child; S; ) {
          if (S === o)
            return ss(y), n;
          if (S === d)
            return ss(y), a;
          S = S.sibling;
        }
        throw Error(f(188));
      }
      if (o.return !== d.return)
        o = y, d = S;
      else {
        for (var T = !1, k = y.child; k; ) {
          if (k === o) {
            T = !0, o = y, d = S;
            break;
          }
          if (k === d) {
            T = !0, d = y, o = S;
            break;
          }
          k = k.sibling;
        }
        if (!T) {
          for (k = S.child; k; ) {
            if (k === o) {
              T = !0, o = S, d = y;
              break;
            }
            if (k === d) {
              T = !0, d = S, o = y;
              break;
            }
            k = k.sibling;
          }
          if (!T)
            throw Error(f(189));
        }
      }
      if (o.alternate !== d)
        throw Error(f(190));
    }
    if (o.tag !== 3)
      throw Error(f(188));
    return o.stateNode.current === o ? n : a;
  }
  function cs(n) {
    if (n = ti(n), !n)
      return null;
    for (var a = n; ; ) {
      if (a.tag === 5 || a.tag === 6)
        return a;
      if (a.child)
        a.child.return = a, a = a.child;
      else {
        if (a === n)
          break;
        for (; !a.sibling; ) {
          if (!a.return || a.return === n)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return null;
  }
  function zl(n, a) {
    for (var o = n.alternate; a !== null; ) {
      if (a === n || a === o)
        return !0;
      a = a.return;
    }
    return !1;
  }
  var vp, Il, hp, Fo, Yc = !1, Or = [], ni = null, Na = null, ri = null, zo = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Io = [], Kn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ai(n, a, o, d, y) {
    return { blockedOn: n, domEventName: a, eventSystemFlags: o | 16, nativeEvent: y, targetContainers: [d] };
  }
  function Po(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        ni = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        ri = null;
        break;
      case "pointerover":
      case "pointerout":
        zo.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Le.delete(a.pointerId);
    }
  }
  function Pl(n, a, o, d, y, S) {
    return n === null || n.nativeEvent !== S ? (n = ai(a, o, d, y, S), a !== null && (a = gr(a), a !== null && Il(a)), n) : (n.eventSystemFlags |= d, a = n.targetContainers, y !== null && a.indexOf(y) === -1 && a.push(y), n);
  }
  function or(n, a, o, d, y) {
    switch (a) {
      case "focusin":
        return ni = Pl(ni, n, a, o, d, y), !0;
      case "dragenter":
        return Na = Pl(Na, n, a, o, d, y), !0;
      case "mouseover":
        return ri = Pl(ri, n, a, o, d, y), !0;
      case "pointerover":
        var S = y.pointerId;
        return zo.set(S, Pl(zo.get(S) || null, n, a, o, d, y)), !0;
      case "gotpointercapture":
        return S = y.pointerId, Le.set(S, Pl(Le.get(S) || null, n, a, o, d, y)), !0;
    }
    return !1;
  }
  function kn(n) {
    var a = no(n.target);
    if (a !== null) {
      var o = Vn(a);
      if (o !== null) {
        if (a = o.tag, a === 13) {
          if (a = us(o), a !== null) {
            n.blockedOn = a, Fo(n.lanePriority, function() {
              c.unstable_runWithPriority(n.priority, function() {
                hp(o);
              });
            });
            return;
          }
        } else if (a === 3 && o.stateNode.hydrate) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function yr(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var o = ys(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (o !== null)
        return a = gr(o), a !== null && Il(a), n.blockedOn = o, !1;
      a.shift();
    }
    return !0;
  }
  function mp(n, a, o) {
    yr(n) && o.delete(a);
  }
  function kr() {
    for (Yc = !1; 0 < Or.length; ) {
      var n = Or[0];
      if (n.blockedOn !== null) {
        n = gr(n.blockedOn), n !== null && vp(n);
        break;
      }
      for (var a = n.targetContainers; 0 < a.length; ) {
        var o = ys(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
        if (o !== null) {
          n.blockedOn = o;
          break;
        }
        a.shift();
      }
      n.blockedOn === null && Or.shift();
    }
    ni !== null && yr(ni) && (ni = null), Na !== null && yr(Na) && (Na = null), ri !== null && yr(ri) && (ri = null), zo.forEach(mp), Le.forEach(mp);
  }
  function Dr(n, a) {
    n.blockedOn === a && (n.blockedOn = null, Yc || (Yc = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, kr)));
  }
  function yp(n) {
    function a(y) {
      return Dr(y, n);
    }
    if (0 < Or.length) {
      Dr(Or[0], n);
      for (var o = 1; o < Or.length; o++) {
        var d = Or[o];
        d.blockedOn === n && (d.blockedOn = null);
      }
    }
    for (ni !== null && Dr(ni, n), Na !== null && Dr(Na, n), ri !== null && Dr(ri, n), zo.forEach(a), Le.forEach(a), o = 0; o < Io.length; o++)
      d = Io[o], d.blockedOn === n && (d.blockedOn = null);
    for (; 0 < Io.length && (o = Io[0], o.blockedOn === null); )
      kn(o), o.blockedOn === null && Io.shift();
  }
  function Bo(n, a) {
    var o = {};
    return o[n.toLowerCase()] = a.toLowerCase(), o["Webkit" + n] = "webkit" + a, o["Moz" + n] = "moz" + a, o;
  }
  var Gi = { animationend: Bo("Animation", "AnimationEnd"), animationiteration: Bo("Animation", "AnimationIteration"), animationstart: Bo("Animation", "AnimationStart"), transitionend: Bo("Transition", "TransitionEnd") }, fs = {}, gp = {};
  b && (gp = document.createElement("div").style, "AnimationEvent" in window || (delete Gi.animationend.animation, delete Gi.animationiteration.animation, delete Gi.animationstart.animation), "TransitionEvent" in window || delete Gi.transitionend.transition);
  function ds(n) {
    if (fs[n])
      return fs[n];
    if (!Gi[n])
      return n;
    var a = Gi[n], o;
    for (o in a)
      if (a.hasOwnProperty(o) && o in gp)
        return fs[n] = a[o];
    return n;
  }
  var Ep = ds("animationend"), Bl = ds("animationiteration"), qc = ds("animationstart"), Hl = ds("transitionend"), Gc = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), Sp = [
    "abort",
    "abort",
    Ep,
    "animationEnd",
    Bl,
    "animationIteration",
    qc,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Hl,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function vs(n, a) {
    for (var o = 0; o < n.length; o += 2) {
      var d = n[o], y = n[o + 1];
      y = "on" + (y[0].toUpperCase() + y.slice(1)), ps.set(d, a), Gc.set(d, y), m(y, [d]);
    }
  }
  var bp = c.unstable_now;
  bp();
  var zt = 8;
  function Ki(n) {
    if (1 & n)
      return zt = 15, 1;
    if (2 & n)
      return zt = 14, 2;
    if (4 & n)
      return zt = 13, 4;
    var a = 24 & n;
    return a !== 0 ? (zt = 12, a) : n & 32 ? (zt = 11, 32) : (a = 192 & n, a !== 0 ? (zt = 10, a) : n & 256 ? (zt = 9, 256) : (a = 3584 & n, a !== 0 ? (zt = 8, a) : n & 4096 ? (zt = 7, 4096) : (a = 4186112 & n, a !== 0 ? (zt = 6, a) : (a = 62914560 & n, a !== 0 ? (zt = 5, a) : n & 67108864 ? (zt = 4, 67108864) : n & 134217728 ? (zt = 3, 134217728) : (a = 805306368 & n, a !== 0 ? (zt = 2, a) : 1073741824 & n ? (zt = 1, 1073741824) : (zt = 8, n))))));
  }
  function Cp(n) {
    switch (n) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Kc(n) {
    switch (n) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(f(358, n));
    }
  }
  function Ho(n, a) {
    var o = n.pendingLanes;
    if (o === 0)
      return zt = 0;
    var d = 0, y = 0, S = n.expiredLanes, T = n.suspendedLanes, k = n.pingedLanes;
    if (S !== 0)
      d = S, y = zt = 15;
    else if (S = o & 134217727, S !== 0) {
      var U = S & ~T;
      U !== 0 ? (d = Ki(U), y = zt) : (k &= S, k !== 0 && (d = Ki(k), y = zt));
    } else
      S = o & ~T, S !== 0 ? (d = Ki(S), y = zt) : k !== 0 && (d = Ki(k), y = zt);
    if (d === 0)
      return 0;
    if (d = 31 - oi(d), d = o & ((0 > d ? 0 : 1 << d) << 1) - 1, a !== 0 && a !== d && !(a & T)) {
      if (Ki(a), y <= zt)
        return a;
      zt = y;
    }
    if (a = n.entangledLanes, a !== 0)
      for (n = n.entanglements, a &= d; 0 < a; )
        o = 31 - oi(a), y = 1 << o, d |= n[o], a &= ~y;
    return d;
  }
  function xp(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function hs(n, a) {
    switch (n) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return n = ii(24 & ~a), n === 0 ? hs(10, a) : n;
      case 10:
        return n = ii(192 & ~a), n === 0 ? hs(8, a) : n;
      case 8:
        return n = ii(3584 & ~a), n === 0 && (n = ii(4186112 & ~a), n === 0 && (n = 512)), n;
      case 2:
        return a = ii(805306368 & ~a), a === 0 && (a = 268435456), a;
    }
    throw Error(f(358, n));
  }
  function ii(n) {
    return n & -n;
  }
  function ms(n) {
    for (var a = [], o = 0; 31 > o; o++)
      a.push(n);
    return a;
  }
  function Vl(n, a, o) {
    n.pendingLanes |= a;
    var d = a - 1;
    n.suspendedLanes &= d, n.pingedLanes &= d, n = n.eventTimes, a = 31 - oi(a), n[a] = o;
  }
  var oi = Math.clz32 ? Math.clz32 : Qc, wp = Math.log, jm = Math.LN2;
  function Qc(n) {
    return n === 0 ? 32 : 31 - (wp(n) / jm | 0) | 0;
  }
  var Xc = c.unstable_UserBlockingPriority, Tp = c.unstable_runWithPriority, Wl = !0;
  function Lm(n, a, o, d) {
    xt || je();
    var y = Yl, S = xt;
    xt = !0;
    try {
      ye(y, n, a, o, d);
    } finally {
      (xt = S) || wt();
    }
  }
  function Vo(n, a, o, d) {
    Tp(Xc, Yl.bind(null, n, a, o, d));
  }
  function Yl(n, a, o, d) {
    if (Wl) {
      var y;
      if ((y = (a & 4) === 0) && 0 < Or.length && -1 < Kn.indexOf(n))
        n = ai(null, n, a, o, d), Or.push(n);
      else {
        var S = ys(n, a, o, d);
        if (S === null)
          y && Po(n, d);
        else {
          if (y) {
            if (-1 < Kn.indexOf(n)) {
              n = ai(S, n, a, o, d), Or.push(n);
              return;
            }
            if (or(S, n, a, o, d))
              return;
            Po(n, d);
          }
          Rs(n, a, d, null, o);
        }
      }
    }
  }
  function ys(n, a, o, d) {
    var y = Ja(d);
    if (y = no(y), y !== null) {
      var S = Vn(y);
      if (S === null)
        y = null;
      else {
        var T = S.tag;
        if (T === 13) {
          if (y = us(S), y !== null)
            return y;
          y = null;
        } else if (T === 3) {
          if (S.stateNode.hydrate)
            return S.tag === 3 ? S.stateNode.containerInfo : null;
          y = null;
        } else
          S !== y && (y = null);
      }
    }
    return Rs(n, a, d, y, o), null;
  }
  var li = null, Zc = null, gs = null;
  function Jc() {
    if (gs)
      return gs;
    var n, a = Zc, o = a.length, d, y = "value" in li ? li.value : li.textContent, S = y.length;
    for (n = 0; n < o && a[n] === y[n]; n++)
      ;
    var T = o - n;
    for (d = 1; d <= T && a[o - d] === y[S - d]; d++)
      ;
    return gs = y.slice(n, 1 < d ? 1 - d : void 0);
  }
  function Wo(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ql() {
    return !0;
  }
  function ef() {
    return !1;
  }
  function lr(n) {
    function a(o, d, y, S, T) {
      this._reactName = o, this._targetInst = y, this.type = d, this.nativeEvent = S, this.target = T, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(S) : S[k]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? ql : ef, this.isPropagationStopped = ef, this;
    }
    return u(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ql);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ql);
    }, persist: function() {
    }, isPersistent: ql }), a;
  }
  var Yo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qo = lr(Yo), Go = u({}, Yo, { view: 0, detail: 0 }), tf = lr(Go), Es, Gl, Qi, Ss = u({}, Go, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Qi && (Qi && n.type === "mousemove" ? (Es = n.screenX - Qi.screenX, Gl = n.screenY - Qi.screenY) : Gl = Es = 0, Qi = n), Es);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Gl;
  } }), Kl = lr(Ss), Rp = u({}, Ss, { dataTransfer: 0 }), Nr = lr(Rp), _a = u({}, Go, { relatedTarget: 0 }), Qn = lr(_a), ui = u({}, Yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Op = lr(ui), bs = u({}, Yo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $m = lr(bs), Ql = u({}, Yo, { data: 0 }), kp = lr(Ql), Um = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, nf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Fm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zm(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = Fm[n]) ? !!a[n] : !1;
  }
  function rf() {
    return zm;
  }
  var Dp = u({}, Go, { key: function(n) {
    if (n.key) {
      var a = Um[n.key] || n.key;
      if (a !== "Unidentified")
        return a;
    }
    return n.type === "keypress" ? (n = Wo(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rf, charCode: function(n) {
    return n.type === "keypress" ? Wo(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Wo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Im = lr(Dp), Pm = u({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Np = lr(Pm), _p = u({}, Go, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rf }), Ko = lr(_p), af = u({}, Yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mp = lr(af), Ap = u({}, Ss, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bm = lr(Ap), Hm = [9, 13, 27, 32], of = b && "CompositionEvent" in window, Xl = null;
  b && "documentMode" in document && (Xl = document.documentMode);
  var Vm = b && "TextEvent" in window && !Xl, jp = b && (!of || Xl && 8 < Xl && 11 >= Xl), Lp = " ", $p = !1;
  function lf(n, a) {
    switch (n) {
      case "keyup":
        return Hm.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Up(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Xi = !1;
  function Wm(n, a) {
    switch (n) {
      case "compositionend":
        return Up(a);
      case "keypress":
        return a.which !== 32 ? null : ($p = !0, Lp);
      case "textInput":
        return n = a.data, n === Lp && $p ? null : n;
      default:
        return null;
    }
  }
  function Ym(n, a) {
    if (Xi)
      return n === "compositionend" || !of && lf(n, a) ? (n = Jc(), gs = Zc = li = null, Xi = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return jp && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fp(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!qm[n.type] : a === "textarea";
  }
  function Cs(n, a, o, d) {
    Tr(d), a = Os(a, "onChange"), 0 < a.length && (o = new qo("onChange", "change", null, o, d), n.push({ event: o, listeners: a }));
  }
  var Yr = null, si = null;
  function zp(n) {
    xs(n, 0);
  }
  function Ma(n) {
    var a = Jn(n);
    if (mn(a))
      return n;
  }
  function Gm(n, a) {
    if (n === "change")
      return a;
  }
  var Ip = !1;
  if (b) {
    var uf;
    if (b) {
      var sf = "oninput" in document;
      if (!sf) {
        var Pp = document.createElement("div");
        Pp.setAttribute("oninput", "return;"), sf = typeof Pp.oninput == "function";
      }
      uf = sf;
    } else
      uf = !1;
    Ip = uf && (!document.documentMode || 9 < document.documentMode);
  }
  function Bp() {
    Yr && (Yr.detachEvent("onpropertychange", cf), si = Yr = null);
  }
  function cf(n) {
    if (n.propertyName === "value" && Ma(si)) {
      var a = [];
      if (Cs(a, si, n, Ja(n)), n = zp, xt)
        n(a);
      else {
        xt = !0;
        try {
          L(n, a);
        } finally {
          xt = !1, wt();
        }
      }
    }
  }
  function Km(n, a, o) {
    n === "focusin" ? (Bp(), Yr = a, si = o, Yr.attachEvent("onpropertychange", cf)) : n === "focusout" && Bp();
  }
  function Hp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ma(si);
  }
  function Xn(n, a) {
    if (n === "click")
      return Ma(a);
  }
  function Qm(n, a) {
    if (n === "input" || n === "change")
      return Ma(a);
  }
  function Vp(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var _r = typeof Object.is == "function" ? Object.is : Vp, Xm = Object.prototype.hasOwnProperty;
  function Zl(n, a) {
    if (_r(n, a))
      return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var o = Object.keys(n), d = Object.keys(a);
    if (o.length !== d.length)
      return !1;
    for (d = 0; d < o.length; d++)
      if (!Xm.call(a, o[d]) || !_r(n[o[d]], a[o[d]]))
        return !1;
    return !0;
  }
  function Wp(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Yp(n, a) {
    var o = Wp(n);
    n = 0;
    for (var d; o; ) {
      if (o.nodeType === 3) {
        if (d = n + o.textContent.length, n <= a && d >= a)
          return { node: o, offset: a - n };
        n = d;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Wp(o);
    }
  }
  function ff(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? ff(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Jl() {
    for (var n = window, a = cn(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof a.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = a.contentWindow;
      else
        break;
      a = cn(n.document);
    }
    return a;
  }
  function Zi(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  var qp = b && "documentMode" in document && 11 >= document.documentMode, Qo = null, eu = null, Ji = null, ci = !1;
  function eo(n, a, o) {
    var d = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    ci || Qo == null || Qo !== cn(d) || (d = Qo, "selectionStart" in d && Zi(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Ji && Zl(Ji, d) || (Ji = d, d = Os(eu, "onSelect"), 0 < d.length && (a = new qo("onSelect", "select", null, a, o), n.push({ event: a, listeners: d }), a.target = Qo)));
  }
  vs(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), vs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), vs(Sp, 2);
  for (var df = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), pf = 0; pf < df.length; pf++)
    ps.set(df[pf], 0);
  C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));
  function vf(n, a, o) {
    var d = n.type || "unknown-event";
    n.currentTarget = o, oa(d, a, void 0, n), n.currentTarget = null;
  }
  function xs(n, a) {
    a = (a & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var d = n[o], y = d.event;
      d = d.listeners;
      e: {
        var S = void 0;
        if (a)
          for (var T = d.length - 1; 0 <= T; T--) {
            var k = d[T], U = k.instance, ee = k.currentTarget;
            if (k = k.listener, U !== S && y.isPropagationStopped())
              break e;
            vf(y, k, ee), S = U;
          }
        else
          for (T = 0; T < d.length; T++) {
            if (k = d[T], U = k.instance, ee = k.currentTarget, k = k.listener, U !== S && y.isPropagationStopped())
              break e;
            vf(y, k, ee), S = U;
          }
      }
    }
    if (Gn)
      throw n = ls, Gn = !1, ls = null, n;
  }
  function Kt(n, a) {
    var o = Jp(a), d = n + "__bubble";
    o.has(d) || (Ts(a, n, 2, !1), o.add(d));
  }
  var ws = "_reactListening" + Math.random().toString(36).slice(2);
  function hf(n) {
    n[ws] || (n[ws] = !0, v.forEach(function(a) {
      Gp.has(a) || Aa(a, !1, n, null), Aa(a, !0, n, null);
    }));
  }
  function Aa(n, a, o, d) {
    var y = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, S = o;
    if (n === "selectionchange" && o.nodeType !== 9 && (S = o.ownerDocument), d !== null && !a && Gp.has(n)) {
      if (n !== "scroll")
        return;
      y |= 2, S = d;
    }
    var T = Jp(S), k = n + "__" + (a ? "capture" : "bubble");
    T.has(k) || (a && (y |= 4), Ts(S, n, y, a), T.add(k));
  }
  function Ts(n, a, o, d) {
    var y = ps.get(a);
    switch (y === void 0 ? 2 : y) {
      case 0:
        y = Lm;
        break;
      case 1:
        y = Vo;
        break;
      default:
        y = Yl;
    }
    o = y.bind(null, a, o, n), y = void 0, !Ut || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (y = !0), d ? y !== void 0 ? n.addEventListener(a, o, { capture: !0, passive: y }) : n.addEventListener(a, o, !0) : y !== void 0 ? n.addEventListener(a, o, { passive: y }) : n.addEventListener(a, o, !1);
  }
  function Rs(n, a, o, d, y) {
    var S = d;
    if (!(a & 1) && !(a & 2) && d !== null)
      e:
        for (; ; ) {
          if (d === null)
            return;
          var T = d.tag;
          if (T === 3 || T === 4) {
            var k = d.stateNode.containerInfo;
            if (k === y || k.nodeType === 8 && k.parentNode === y)
              break;
            if (T === 4)
              for (T = d.return; T !== null; ) {
                var U = T.tag;
                if ((U === 3 || U === 4) && (U = T.stateNode.containerInfo, U === y || U.nodeType === 8 && U.parentNode === y))
                  return;
                T = T.return;
              }
            for (; k !== null; ) {
              if (T = no(k), T === null)
                return;
              if (U = T.tag, U === 5 || U === 6) {
                d = S = T;
                continue e;
              }
              k = k.parentNode;
            }
          }
          d = d.return;
        }
    Tt(function() {
      var ee = S, Fe = Ja(o), ft = [];
      e: {
        var me = Gc.get(n);
        if (me !== void 0) {
          var Xe = qo, st = n;
          switch (n) {
            case "keypress":
              if (Wo(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Xe = Im;
              break;
            case "focusin":
              st = "focus", Xe = Qn;
              break;
            case "focusout":
              st = "blur", Xe = Qn;
              break;
            case "beforeblur":
            case "afterblur":
              Xe = Qn;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Xe = Kl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Xe = Nr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Xe = Ko;
              break;
            case Ep:
            case Bl:
            case qc:
              Xe = Op;
              break;
            case Hl:
              Xe = Mp;
              break;
            case "scroll":
              Xe = tf;
              break;
            case "wheel":
              Xe = Bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Xe = $m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Xe = Np;
          }
          var rt = (a & 4) !== 0, V = !rt && n === "scroll", I = rt ? me !== null ? me + "Capture" : null : me;
          rt = [];
          for (var B = ee, ue; B !== null; ) {
            ue = B;
            var fe = ue.stateNode;
            if (ue.tag === 5 && fe !== null && (ue = fe, I !== null && (fe = Vt(B, I), fe != null && rt.push(tu(B, fe, ue)))), V)
              break;
            B = B.return;
          }
          0 < rt.length && (me = new Xe(me, st, null, o, Fe), ft.push({ event: me, listeners: rt }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Xe = n === "mouseout" || n === "pointerout", me && !(a & 16) && (st = o.relatedTarget || o.fromElement) && (no(st) || st[Zn]))
            break e;
          if ((Xe || me) && (me = Fe.window === Fe ? Fe : (me = Fe.ownerDocument) ? me.defaultView || me.parentWindow : window, Xe ? (st = o.relatedTarget || o.toElement, Xe = ee, st = st ? no(st) : null, st !== null && (V = Vn(st), st !== V || st.tag !== 5 && st.tag !== 6) && (st = null)) : (Xe = null, st = ee), Xe !== st)) {
            if (rt = Kl, fe = "onMouseLeave", I = "onMouseEnter", B = "mouse", (n === "pointerout" || n === "pointerover") && (rt = Np, fe = "onPointerLeave", I = "onPointerEnter", B = "pointer"), V = Xe == null ? me : Jn(Xe), ue = st == null ? me : Jn(st), me = new rt(fe, B + "leave", Xe, o, Fe), me.target = V, me.relatedTarget = ue, fe = null, no(Fe) === ee && (rt = new rt(I, B + "enter", st, o, Fe), rt.target = ue, rt.relatedTarget = V, fe = rt), V = fe, Xe && st)
              t: {
                for (rt = Xe, I = st, B = 0, ue = rt; ue; ue = Zo(ue))
                  B++;
                for (ue = 0, fe = I; fe; fe = Zo(fe))
                  ue++;
                for (; 0 < B - ue; )
                  rt = Zo(rt), B--;
                for (; 0 < ue - B; )
                  I = Zo(I), ue--;
                for (; B--; ) {
                  if (rt === I || I !== null && rt === I.alternate)
                    break t;
                  rt = Zo(rt), I = Zo(I);
                }
                rt = null;
              }
            else
              rt = null;
            Xe !== null && Kp(ft, me, Xe, rt, !1), st !== null && V !== null && Kp(ft, V, st, rt, !0);
          }
        }
        e: {
          if (me = ee ? Jn(ee) : window, Xe = me.nodeName && me.nodeName.toLowerCase(), Xe === "select" || Xe === "input" && me.type === "file")
            var vt = Gm;
          else if (Fp(me))
            if (Ip)
              vt = Qm;
            else {
              vt = Hp;
              var Ve = Km;
            }
          else
            (Xe = me.nodeName) && Xe.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (vt = Xn);
          if (vt && (vt = vt(n, ee))) {
            Cs(ft, vt, o, Fe);
            break e;
          }
          Ve && Ve(n, me, ee), n === "focusout" && (Ve = me._wrapperState) && Ve.controlled && me.type === "number" && wn(me, "number", me.value);
        }
        switch (Ve = ee ? Jn(ee) : window, n) {
          case "focusin":
            (Fp(Ve) || Ve.contentEditable === "true") && (Qo = Ve, eu = ee, Ji = null);
            break;
          case "focusout":
            Ji = eu = Qo = null;
            break;
          case "mousedown":
            ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ci = !1, eo(ft, o, Fe);
            break;
          case "selectionchange":
            if (qp)
              break;
          case "keydown":
          case "keyup":
            eo(ft, o, Fe);
        }
        var dt;
        if (of)
          e: {
            switch (n) {
              case "compositionstart":
                var gt = "onCompositionStart";
                break e;
              case "compositionend":
                gt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                gt = "onCompositionUpdate";
                break e;
            }
            gt = void 0;
          }
        else
          Xi ? lf(n, o) && (gt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (gt = "onCompositionStart");
        gt && (jp && o.locale !== "ko" && (Xi || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && Xi && (dt = Jc()) : (li = Fe, Zc = "value" in li ? li.value : li.textContent, Xi = !0)), Ve = Os(ee, gt), 0 < Ve.length && (gt = new kp(gt, n, null, o, Fe), ft.push({ event: gt, listeners: Ve }), dt ? gt.data = dt : (dt = Up(o), dt !== null && (gt.data = dt)))), (dt = Vm ? Wm(n, o) : Ym(n, o)) && (ee = Os(ee, "onBeforeInput"), 0 < ee.length && (Fe = new kp(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          Fe
        ), ft.push({ event: Fe, listeners: ee }), Fe.data = dt));
      }
      xs(ft, a);
    });
  }
  function tu(n, a, o) {
    return { instance: n, listener: a, currentTarget: o };
  }
  function Os(n, a) {
    for (var o = a + "Capture", d = []; n !== null; ) {
      var y = n, S = y.stateNode;
      y.tag === 5 && S !== null && (y = S, S = Vt(n, o), S != null && d.unshift(tu(n, S, y)), S = Vt(n, a), S != null && d.push(tu(n, S, y))), n = n.return;
    }
    return d;
  }
  function Zo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Kp(n, a, o, d, y) {
    for (var S = a._reactName, T = []; o !== null && o !== d; ) {
      var k = o, U = k.alternate, ee = k.stateNode;
      if (U !== null && U === d)
        break;
      k.tag === 5 && ee !== null && (k = ee, y ? (U = Vt(o, S), U != null && T.unshift(tu(o, U, k))) : y || (U = Vt(o, S), U != null && T.push(tu(o, U, k)))), o = o.return;
    }
    T.length !== 0 && n.push({ event: a, listeners: T });
  }
  function ks() {
  }
  var mf = null, yf = null;
  function Jo(n, a) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!a.autoFocus;
    }
    return !1;
  }
  function nu(n, a) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var el = typeof setTimeout == "function" ? setTimeout : void 0, Qp = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function Ds(n) {
    n.nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && (n = n.body, n != null && (n.textContent = ""));
  }
  function fi(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3)
        break;
    }
    return n;
  }
  function Xp(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (a === 0)
            return n;
          a--;
        } else
          o === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var di = 0;
  function Ns(n) {
    return { $$typeof: nt, toString: n, valueOf: n };
  }
  var to = Math.random().toString(36).slice(2), la = "__reactFiber$" + to, _s = "__reactProps$" + to, Zn = "__reactContainer$" + to, Zp = "__reactEvents$" + to;
  function no(n) {
    var a = n[la];
    if (a)
      return a;
    for (var o = n.parentNode; o; ) {
      if (a = o[Zn] || o[la]) {
        if (o = a.alternate, a.child !== null || o !== null && o.child !== null)
          for (n = Xp(n); n !== null; ) {
            if (o = n[la])
              return o;
            n = Xp(n);
          }
        return a;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function gr(n) {
    return n = n[la] || n[Zn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Jn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(f(33));
  }
  function ja(n) {
    return n[_s] || null;
  }
  function Jp(n) {
    var a = n[Zp];
    return a === void 0 && (a = n[Zp] = /* @__PURE__ */ new Set()), a;
  }
  var gf = [], It = -1;
  function er(n) {
    return { current: n };
  }
  function pt(n) {
    0 > It || (n.current = gf[It], gf[It] = null, It--);
  }
  function ot(n, a) {
    It++, gf[It] = n.current, n.current = a;
  }
  var pi = {}, tn = er(pi), Fn = er(!1), vi = pi;
  function Lt(n, a) {
    var o = n.type.contextTypes;
    if (!o)
      return pi;
    var d = n.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === a)
      return d.__reactInternalMemoizedMaskedChildContext;
    var y = {}, S;
    for (S in o)
      y[S] = a[S];
    return d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = a, n.__reactInternalMemoizedMaskedChildContext = y), y;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ua() {
    pt(Fn), pt(tn);
  }
  function tl(n, a, o) {
    if (tn.current !== pi)
      throw Error(f(168));
    ot(tn, a), ot(Fn, o);
  }
  function nl(n, a, o) {
    var d = n.stateNode;
    if (n = a.childContextTypes, typeof d.getChildContext != "function")
      return o;
    d = d.getChildContext();
    for (var y in d)
      if (!(y in n))
        throw Error(f(108, Ge(a) || "Unknown", y));
    return u({}, o, d);
  }
  function Mr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || pi, vi = tn.current, ot(tn, n), ot(Fn, Fn.current), !0;
  }
  function ev(n, a, o) {
    var d = n.stateNode;
    if (!d)
      throw Error(f(169));
    o ? (n = nl(n, a, vi), d.__reactInternalMemoizedMergedChildContext = n, pt(Fn), pt(tn), ot(tn, n)) : pt(Fn), ot(Fn, o);
  }
  var Ef = null, ro = null, ru = c.unstable_runWithPriority, qr = c.unstable_scheduleCallback, au = c.unstable_cancelCallback, Zm = c.unstable_shouldYield, hi = c.unstable_requestPaint, Ms = c.unstable_now, tv = c.unstable_getCurrentPriorityLevel, As = c.unstable_ImmediatePriority, nv = c.unstable_UserBlockingPriority, Sf = c.unstable_NormalPriority, bf = c.unstable_LowPriority, Cf = c.unstable_IdlePriority, xf = {}, rv = hi !== void 0 ? hi : function() {
  }, sa = null, js = null, iu = !1, av = Ms(), In = 1e4 > av ? Ms : function() {
    return Ms() - av;
  };
  function rl() {
    switch (tv()) {
      case As:
        return 99;
      case nv:
        return 98;
      case Sf:
        return 97;
      case bf:
        return 96;
      case Cf:
        return 95;
      default:
        throw Error(f(332));
    }
  }
  function wf(n) {
    switch (n) {
      case 99:
        return As;
      case 98:
        return nv;
      case 97:
        return Sf;
      case 96:
        return bf;
      case 95:
        return Cf;
      default:
        throw Error(f(332));
    }
  }
  function ao(n, a) {
    return n = wf(n), ru(n, a);
  }
  function io(n, a, o) {
    return n = wf(n), qr(n, a, o);
  }
  function Dn() {
    if (js !== null) {
      var n = js;
      js = null, au(n);
    }
    La();
  }
  function La() {
    if (!iu && sa !== null) {
      iu = !0;
      var n = 0;
      try {
        var a = sa;
        ao(99, function() {
          for (; n < a.length; n++) {
            var o = a[n];
            do
              o = o(!0);
            while (o !== null);
          }
        }), sa = null;
      } catch (o) {
        throw sa !== null && (sa = sa.slice(n + 1)), qr(As, Dn), o;
      } finally {
        iu = !1;
      }
    }
  }
  var mi = j.ReactCurrentBatchConfig;
  function Nn(n, a) {
    if (n && n.defaultProps) {
      a = u({}, a), n = n.defaultProps;
      for (var o in n)
        a[o] === void 0 && (a[o] = n[o]);
      return a;
    }
    return a;
  }
  var yi = er(null), gi = null, ca = null, Ls = null;
  function Tf() {
    Ls = ca = gi = null;
  }
  function $s(n) {
    var a = yi.current;
    pt(yi), n.type._context._currentValue = a;
  }
  function Rf(n, a) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & a) === a) {
        if (o === null || (o.childLanes & a) === a)
          break;
        o.childLanes |= a;
      } else
        n.childLanes |= a, o !== null && (o.childLanes |= a);
      n = n.return;
    }
  }
  function oo(n, a) {
    gi = n, Ls = ca = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (jr = !0), n.firstContext = null);
  }
  function Er(n, a) {
    if (Ls !== n && a !== !1 && a !== 0)
      if ((typeof a != "number" || a === 1073741823) && (Ls = n, a = 1073741823), a = { context: n, observedBits: a, next: null }, ca === null) {
        if (gi === null)
          throw Error(f(308));
        ca = a, gi.dependencies = { lanes: 0, firstContext: a, responders: null };
      } else
        ca = ca.next = a;
    return n._currentValue;
  }
  var Ar = !1;
  function Of(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function iv(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Gr(n, a) {
    return { eventTime: n, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function $a(n, a) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var o = n.pending;
      o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
    }
  }
  function ov(n, a) {
    var o = n.updateQueue, d = n.alternate;
    if (d !== null && (d = d.updateQueue, o === d)) {
      var y = null, S = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var T = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          S === null ? y = S = T : S = S.next = T, o = o.next;
        } while (o !== null);
        S === null ? y = S = a : S = S.next = a;
      } else
        y = S = a;
      o = { baseState: d.baseState, firstBaseUpdate: y, lastBaseUpdate: S, shared: d.shared, effects: d.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = a : n.next = a, o.lastBaseUpdate = a;
  }
  function Ua(n, a, o, d) {
    var y = n.updateQueue;
    Ar = !1;
    var S = y.firstBaseUpdate, T = y.lastBaseUpdate, k = y.shared.pending;
    if (k !== null) {
      y.shared.pending = null;
      var U = k, ee = U.next;
      U.next = null, T === null ? S = ee : T.next = ee, T = U;
      var Fe = n.alternate;
      if (Fe !== null) {
        Fe = Fe.updateQueue;
        var ft = Fe.lastBaseUpdate;
        ft !== T && (ft === null ? Fe.firstBaseUpdate = ee : ft.next = ee, Fe.lastBaseUpdate = U);
      }
    }
    if (S !== null) {
      ft = y.baseState, T = 0, Fe = ee = U = null;
      do {
        k = S.lane;
        var me = S.eventTime;
        if ((d & k) === k) {
          Fe !== null && (Fe = Fe.next = {
            eventTime: me,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var Xe = n, st = S;
            switch (k = a, me = o, st.tag) {
              case 1:
                if (Xe = st.payload, typeof Xe == "function") {
                  ft = Xe.call(me, ft, k);
                  break e;
                }
                ft = Xe;
                break e;
              case 3:
                Xe.flags = Xe.flags & -4097 | 64;
              case 0:
                if (Xe = st.payload, k = typeof Xe == "function" ? Xe.call(me, ft, k) : Xe, k == null)
                  break e;
                ft = u({}, ft, k);
                break e;
              case 2:
                Ar = !0;
            }
          }
          S.callback !== null && (n.flags |= 32, k = y.effects, k === null ? y.effects = [S] : k.push(S));
        } else
          me = { eventTime: me, lane: k, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Fe === null ? (ee = Fe = me, U = ft) : Fe = Fe.next = me, T |= k;
        if (S = S.next, S === null) {
          if (k = y.shared.pending, k === null)
            break;
          S = k.next, k.next = null, y.lastBaseUpdate = k, y.shared.pending = null;
        }
      } while (!0);
      Fe === null && (U = ft), y.baseState = U, y.firstBaseUpdate = ee, y.lastBaseUpdate = Fe, ho |= T, n.lanes = T, n.memoizedState = ft;
    }
  }
  function kf(n, a, o) {
    if (n = a.effects, a.effects = null, n !== null)
      for (a = 0; a < n.length; a++) {
        var d = n[a], y = d.callback;
        if (y !== null) {
          if (d.callback = null, d = o, typeof y != "function")
            throw Error(f(191, y));
          y.call(d);
        }
      }
  }
  var Us = new l.Component().refs;
  function ou(n, a, o, d) {
    a = n.memoizedState, o = o(d, a), o = o == null ? a : u({}, a, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var al = { isMounted: function(n) {
    return (n = n._reactInternals) ? Vn(n) === n : !1;
  }, enqueueSetState: function(n, a, o) {
    n = n._reactInternals;
    var d = Sr(), y = ya(n), S = Gr(d, y);
    S.payload = a, o != null && (S.callback = o), $a(n, S), Ri(n, y, d);
  }, enqueueReplaceState: function(n, a, o) {
    n = n._reactInternals;
    var d = Sr(), y = ya(n), S = Gr(d, y);
    S.tag = 1, S.payload = a, o != null && (S.callback = o), $a(n, S), Ri(n, y, d);
  }, enqueueForceUpdate: function(n, a) {
    n = n._reactInternals;
    var o = Sr(), d = ya(n), y = Gr(o, d);
    y.tag = 2, a != null && (y.callback = a), $a(n, y), Ri(n, d, o);
  } };
  function lu(n, a, o, d, y, S, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(d, S, T) : a.prototype && a.prototype.isPureReactComponent ? !Zl(o, d) || !Zl(y, S) : !0;
  }
  function lo(n, a, o) {
    var d = !1, y = pi, S = a.contextType;
    return typeof S == "object" && S !== null ? S = Er(S) : (y = zn(a) ? vi : tn.current, d = a.contextTypes, S = (d = d != null) ? Lt(n, y) : pi), a = new a(o, S), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = al, n.stateNode = a, a._reactInternals = n, d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = y, n.__reactInternalMemoizedMaskedChildContext = S), a;
  }
  function Fs(n, a, o, d) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(o, d), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(o, d), a.state !== n && al.enqueueReplaceState(a, a.state, null);
  }
  function zs(n, a, o, d) {
    var y = n.stateNode;
    y.props = o, y.state = n.memoizedState, y.refs = Us, Of(n);
    var S = a.contextType;
    typeof S == "object" && S !== null ? y.context = Er(S) : (S = zn(a) ? vi : tn.current, y.context = Lt(n, S)), Ua(n, o, y, d), y.state = n.memoizedState, S = a.getDerivedStateFromProps, typeof S == "function" && (ou(n, a, S, o), y.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (a = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), a !== y.state && al.enqueueReplaceState(y, y.state, null), Ua(n, o, y, d), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4);
  }
  var uo = Array.isArray;
  function il(n, a, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(f(309));
          var d = o.stateNode;
        }
        if (!d)
          throw Error(f(147, n));
        var y = "" + n;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === y ? a.ref : (a = function(S) {
          var T = d.refs;
          T === Us && (T = d.refs = {}), S === null ? delete T[y] : T[y] = S;
        }, a._stringRef = y, a);
      }
      if (typeof n != "string")
        throw Error(f(284));
      if (!o._owner)
        throw Error(f(290, n));
    }
    return n;
  }
  function uu(n, a) {
    if (n.type !== "textarea")
      throw Error(f(31, Object.prototype.toString.call(a) === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : a));
  }
  function Df(n) {
    function a(V, I) {
      if (n) {
        var B = V.lastEffect;
        B !== null ? (B.nextEffect = I, V.lastEffect = I) : V.firstEffect = V.lastEffect = I, I.nextEffect = null, I.flags = 8;
      }
    }
    function o(V, I) {
      if (!n)
        return null;
      for (; I !== null; )
        a(V, I), I = I.sibling;
      return null;
    }
    function d(V, I) {
      for (V = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? V.set(I.key, I) : V.set(I.index, I), I = I.sibling;
      return V;
    }
    function y(V, I) {
      return V = Ni(V, I), V.index = 0, V.sibling = null, V;
    }
    function S(V, I, B) {
      return V.index = B, n ? (B = V.alternate, B !== null ? (B = B.index, B < I ? (V.flags = 2, I) : B) : (V.flags = 2, I)) : I;
    }
    function T(V) {
      return n && V.alternate === null && (V.flags = 2), V;
    }
    function k(V, I, B, ue) {
      return I === null || I.tag !== 6 ? (I = ad(B, V.mode, ue), I.return = V, I) : (I = y(I, B), I.return = V, I);
    }
    function U(V, I, B, ue) {
      return I !== null && I.elementType === B.type ? (ue = y(I, B.props), ue.ref = il(V, I, B), ue.return = V, ue) : (ue = _u(B.type, B.key, B.props, null, V.mode, ue), ue.ref = il(V, I, B), ue.return = V, ue);
    }
    function ee(V, I, B, ue) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== B.containerInfo || I.stateNode.implementation !== B.implementation ? (I = id(B, V.mode, ue), I.return = V, I) : (I = y(I, B.children || []), I.return = V, I);
    }
    function Fe(V, I, B, ue, fe) {
      return I === null || I.tag !== 7 ? (I = ga(B, V.mode, ue, fe), I.return = V, I) : (I = y(I, B), I.return = V, I);
    }
    function ft(V, I, B) {
      if (typeof I == "string" || typeof I == "number")
        return I = ad("" + I, V.mode, B), I.return = V, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Q:
            return B = _u(I.type, I.key, I.props, null, V.mode, B), B.ref = il(V, null, I), B.return = V, B;
          case ne:
            return I = id(I, V.mode, B), I.return = V, I;
        }
        if (uo(I) || Ce(I))
          return I = ga(
            I,
            V.mode,
            B,
            null
          ), I.return = V, I;
        uu(V, I);
      }
      return null;
    }
    function me(V, I, B, ue) {
      var fe = I !== null ? I.key : null;
      if (typeof B == "string" || typeof B == "number")
        return fe !== null ? null : k(V, I, "" + B, ue);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Q:
            return B.key === fe ? B.type === ce ? Fe(V, I, B.props.children, ue, fe) : U(V, I, B, ue) : null;
          case ne:
            return B.key === fe ? ee(V, I, B, ue) : null;
        }
        if (uo(B) || Ce(B))
          return fe !== null ? null : Fe(V, I, B, ue, null);
        uu(V, B);
      }
      return null;
    }
    function Xe(V, I, B, ue, fe) {
      if (typeof ue == "string" || typeof ue == "number")
        return V = V.get(B) || null, k(I, V, "" + ue, fe);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case Q:
            return V = V.get(ue.key === null ? B : ue.key) || null, ue.type === ce ? Fe(I, V, ue.props.children, fe, ue.key) : U(I, V, ue, fe);
          case ne:
            return V = V.get(ue.key === null ? B : ue.key) || null, ee(I, V, ue, fe);
        }
        if (uo(ue) || Ce(ue))
          return V = V.get(B) || null, Fe(I, V, ue, fe, null);
        uu(I, ue);
      }
      return null;
    }
    function st(V, I, B, ue) {
      for (var fe = null, vt = null, Ve = I, dt = I = 0, gt = null; Ve !== null && dt < B.length; dt++) {
        Ve.index > dt ? (gt = Ve, Ve = null) : gt = Ve.sibling;
        var ht = me(V, Ve, B[dt], ue);
        if (ht === null) {
          Ve === null && (Ve = gt);
          break;
        }
        n && Ve && ht.alternate === null && a(V, Ve), I = S(ht, I, dt), vt === null ? fe = ht : vt.sibling = ht, vt = ht, Ve = gt;
      }
      if (dt === B.length)
        return o(V, Ve), fe;
      if (Ve === null) {
        for (; dt < B.length; dt++)
          Ve = ft(V, B[dt], ue), Ve !== null && (I = S(Ve, I, dt), vt === null ? fe = Ve : vt.sibling = Ve, vt = Ve);
        return fe;
      }
      for (Ve = d(V, Ve); dt < B.length; dt++)
        gt = Xe(Ve, V, dt, B[dt], ue), gt !== null && (n && gt.alternate !== null && Ve.delete(gt.key === null ? dt : gt.key), I = S(gt, I, dt), vt === null ? fe = gt : vt.sibling = gt, vt = gt);
      return n && Ve.forEach(function(_i) {
        return a(V, _i);
      }), fe;
    }
    function rt(V, I, B, ue) {
      var fe = Ce(B);
      if (typeof fe != "function")
        throw Error(f(150));
      if (B = fe.call(B), B == null)
        throw Error(f(151));
      for (var vt = fe = null, Ve = I, dt = I = 0, gt = null, ht = B.next(); Ve !== null && !ht.done; dt++, ht = B.next()) {
        Ve.index > dt ? (gt = Ve, Ve = null) : gt = Ve.sibling;
        var _i = me(V, Ve, ht.value, ue);
        if (_i === null) {
          Ve === null && (Ve = gt);
          break;
        }
        n && Ve && _i.alternate === null && a(V, Ve), I = S(_i, I, dt), vt === null ? fe = _i : vt.sibling = _i, vt = _i, Ve = gt;
      }
      if (ht.done)
        return o(V, Ve), fe;
      if (Ve === null) {
        for (; !ht.done; dt++, ht = B.next())
          ht = ft(V, ht.value, ue), ht !== null && (I = S(ht, I, dt), vt === null ? fe = ht : vt.sibling = ht, vt = ht);
        return fe;
      }
      for (Ve = d(V, Ve); !ht.done; dt++, ht = B.next())
        ht = Xe(Ve, V, dt, ht.value, ue), ht !== null && (n && ht.alternate !== null && Ve.delete(ht.key === null ? dt : ht.key), I = S(ht, I, dt), vt === null ? fe = ht : vt.sibling = ht, vt = ht);
      return n && Ve.forEach(function(Ey) {
        return a(V, Ey);
      }), fe;
    }
    return function(V, I, B, ue) {
      var fe = typeof B == "object" && B !== null && B.type === ce && B.key === null;
      fe && (B = B.props.children);
      var vt = typeof B == "object" && B !== null;
      if (vt)
        switch (B.$$typeof) {
          case Q:
            e: {
              for (vt = B.key, fe = I; fe !== null; ) {
                if (fe.key === vt) {
                  switch (fe.tag) {
                    case 7:
                      if (B.type === ce) {
                        o(V, fe.sibling), I = y(fe, B.props.children), I.return = V, V = I;
                        break e;
                      }
                      break;
                    default:
                      if (fe.elementType === B.type) {
                        o(V, fe.sibling), I = y(fe, B.props), I.ref = il(V, fe, B), I.return = V, V = I;
                        break e;
                      }
                  }
                  o(V, fe);
                  break;
                } else
                  a(V, fe);
                fe = fe.sibling;
              }
              B.type === ce ? (I = ga(B.props.children, V.mode, ue, B.key), I.return = V, V = I) : (ue = _u(B.type, B.key, B.props, null, V.mode, ue), ue.ref = il(V, I, B), ue.return = V, V = ue);
            }
            return T(V);
          case ne:
            e: {
              for (fe = B.key; I !== null; ) {
                if (I.key === fe)
                  if (I.tag === 4 && I.stateNode.containerInfo === B.containerInfo && I.stateNode.implementation === B.implementation) {
                    o(V, I.sibling), I = y(I, B.children || []), I.return = V, V = I;
                    break e;
                  } else {
                    o(V, I);
                    break;
                  }
                else
                  a(V, I);
                I = I.sibling;
              }
              I = id(B, V.mode, ue), I.return = V, V = I;
            }
            return T(V);
        }
      if (typeof B == "string" || typeof B == "number")
        return B = "" + B, I !== null && I.tag === 6 ? (o(V, I.sibling), I = y(I, B), I.return = V, V = I) : (o(V, I), I = ad(B, V.mode, ue), I.return = V, V = I), T(V);
      if (uo(B))
        return st(V, I, B, ue);
      if (Ce(B))
        return rt(V, I, B, ue);
      if (vt && uu(V, B), typeof B > "u" && !fe)
        switch (V.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(f(152, Ge(V.type) || "Component"));
        }
      return o(V, I);
    };
  }
  var su = Df(!0), Nf = Df(!1), so = {}, fa = er(so), cu = er(so), fu = er(so);
  function co(n) {
    if (n === so)
      throw Error(f(174));
    return n;
  }
  function du(n, a) {
    switch (ot(fu, a), ot(cu, n), ot(fa, so), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : Ue(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = Ue(a, n);
    }
    pt(fa), ot(fa, a);
  }
  function ol() {
    pt(fa), pt(cu), pt(fu);
  }
  function lv(n) {
    co(fu.current);
    var a = co(fa.current), o = Ue(a, n.type);
    a !== o && (ot(cu, n), ot(fa, o));
  }
  function _f(n) {
    cu.current === n && (pt(fa), pt(cu));
  }
  var fn = er(0);
  function pu(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 64)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var da = null, Fa = null, pa = !1;
  function Mf(n, a) {
    var o = $r(5, null, null, 0);
    o.elementType = "DELETED", o.type = "DELETED", o.stateNode = a, o.return = n, o.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = o, n.lastEffect = o) : n.firstEffect = n.lastEffect = o;
  }
  function uv(n, a) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return a = a.nodeType !== 1 || o.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 6:
        return a = n.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function Ei(n) {
    if (pa) {
      var a = Fa;
      if (a) {
        var o = a;
        if (!uv(n, a)) {
          if (a = fi(o.nextSibling), !a || !uv(n, a)) {
            n.flags = n.flags & -1025 | 2, pa = !1, da = n;
            return;
          }
          Mf(da, o);
        }
        da = n, Fa = fi(a.firstChild);
      } else
        n.flags = n.flags & -1025 | 2, pa = !1, da = n;
    }
  }
  function vu(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    da = n;
  }
  function hu(n) {
    if (n !== da)
      return !1;
    if (!pa)
      return vu(n), pa = !0, !1;
    var a = n.type;
    if (n.tag !== 5 || a !== "head" && a !== "body" && !nu(a, n.memoizedProps))
      for (a = Fa; a; )
        Mf(n, a), a = fi(a.nextSibling);
    if (vu(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(f(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (a === 0) {
                Fa = fi(n.nextSibling);
                break e;
              }
              a--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || a++;
          }
          n = n.nextSibling;
        }
        Fa = null;
      }
    } else
      Fa = da ? fi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ll() {
    Fa = da = null, pa = !1;
  }
  var fo = [];
  function Si() {
    for (var n = 0; n < fo.length; n++)
      fo[n]._workInProgressVersionPrimary = null;
    fo.length = 0;
  }
  var ul = j.ReactCurrentDispatcher, _n = j.ReactCurrentBatchConfig, sl = 0, nn = null, Mn = null, An = null, mu = !1, bi = !1;
  function tr() {
    throw Error(f(321));
  }
  function za(n, a) {
    if (a === null)
      return !1;
    for (var o = 0; o < a.length && o < n.length; o++)
      if (!_r(n[o], a[o]))
        return !1;
    return !0;
  }
  function Af(n, a, o, d, y, S) {
    if (sl = S, nn = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, ul.current = n === null || n.memoizedState === null ? Eu : ey, n = o(d, y), bi) {
      S = 0;
      do {
        if (bi = !1, !(25 > S))
          throw Error(f(301));
        S += 1, An = Mn = null, a.updateQueue = null, ul.current = ty, n = o(d, y);
      } while (bi);
    }
    if (ul.current = Bs, a = Mn !== null && Mn.next !== null, sl = 0, An = Mn = nn = null, mu = !1, a)
      throw Error(f(300));
    return n;
  }
  function se() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return An === null ? nn.memoizedState = An = n : An = An.next = n, An;
  }
  function yn() {
    if (Mn === null) {
      var n = nn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Mn.next;
    var a = An === null ? nn.memoizedState : An.next;
    if (a !== null)
      An = a, Mn = n;
    else {
      if (n === null)
        throw Error(f(310));
      Mn = n, n = { memoizedState: Mn.memoizedState, baseState: Mn.baseState, baseQueue: Mn.baseQueue, queue: Mn.queue, next: null }, An === null ? nn.memoizedState = An = n : An = An.next = n;
    }
    return An;
  }
  function Rt(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Ia(n) {
    var a = yn(), o = a.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var d = Mn, y = d.baseQueue, S = o.pending;
    if (S !== null) {
      if (y !== null) {
        var T = y.next;
        y.next = S.next, S.next = T;
      }
      d.baseQueue = y = S, o.pending = null;
    }
    if (y !== null) {
      y = y.next, d = d.baseState;
      var k = T = S = null, U = y;
      do {
        var ee = U.lane;
        if ((sl & ee) === ee)
          k !== null && (k = k.next = { lane: 0, action: U.action, eagerReducer: U.eagerReducer, eagerState: U.eagerState, next: null }), d = U.eagerReducer === n ? U.eagerState : n(d, U.action);
        else {
          var Fe = {
            lane: ee,
            action: U.action,
            eagerReducer: U.eagerReducer,
            eagerState: U.eagerState,
            next: null
          };
          k === null ? (T = k = Fe, S = d) : k = k.next = Fe, nn.lanes |= ee, ho |= ee;
        }
        U = U.next;
      } while (U !== null && U !== y);
      k === null ? S = d : k.next = T, _r(d, a.memoizedState) || (jr = !0), a.memoizedState = d, a.baseState = S, a.baseQueue = k, o.lastRenderedState = d;
    }
    return [a.memoizedState, o.dispatch];
  }
  function po(n) {
    var a = yn(), o = a.queue;
    if (o === null)
      throw Error(f(311));
    o.lastRenderedReducer = n;
    var d = o.dispatch, y = o.pending, S = a.memoizedState;
    if (y !== null) {
      o.pending = null;
      var T = y = y.next;
      do
        S = n(S, T.action), T = T.next;
      while (T !== y);
      _r(S, a.memoizedState) || (jr = !0), a.memoizedState = S, a.baseQueue === null && (a.baseState = S), o.lastRenderedState = S;
    }
    return [S, d];
  }
  function yu(n, a, o) {
    var d = a._getVersion;
    d = d(a._source);
    var y = a._workInProgressVersionPrimary;
    if (y !== null ? n = y === d : (n = n.mutableReadLanes, (n = (sl & n) === n) && (a._workInProgressVersionPrimary = d, fo.push(a))), n)
      return o(a._source);
    throw fo.push(a), Error(f(350));
  }
  function jf(n, a, o, d) {
    var y = nr;
    if (y === null)
      throw Error(f(349));
    var S = a._getVersion, T = S(a._source), k = ul.current, U = k.useState(function() {
      return yu(y, a, o);
    }), ee = U[1], Fe = U[0];
    U = An;
    var ft = n.memoizedState, me = ft.refs, Xe = me.getSnapshot, st = ft.source;
    ft = ft.subscribe;
    var rt = nn;
    return n.memoizedState = { refs: me, source: a, subscribe: d }, k.useEffect(function() {
      me.getSnapshot = o, me.setSnapshot = ee;
      var V = S(a._source);
      if (!_r(T, V)) {
        V = o(a._source), _r(Fe, V) || (ee(V), V = ya(rt), y.mutableReadLanes |= V & y.pendingLanes), V = y.mutableReadLanes, y.entangledLanes |= V;
        for (var I = y.entanglements, B = V; 0 < B; ) {
          var ue = 31 - oi(B), fe = 1 << ue;
          I[ue] |= V, B &= ~fe;
        }
      }
    }, [o, a, d]), k.useEffect(function() {
      return d(a._source, function() {
        var V = me.getSnapshot, I = me.setSnapshot;
        try {
          I(V(a._source));
          var B = ya(rt);
          y.mutableReadLanes |= B & y.pendingLanes;
        } catch (ue) {
          I(function() {
            throw ue;
          });
        }
      });
    }, [a, d]), _r(Xe, o) && _r(st, a) && _r(ft, d) || (n = { pending: null, dispatch: null, lastRenderedReducer: Rt, lastRenderedState: Fe }, n.dispatch = ee = Ff.bind(null, nn, n), U.queue = n, U.baseQueue = null, Fe = yu(y, a, o), U.memoizedState = U.baseState = Fe), Fe;
  }
  function Lf(n, a, o) {
    var d = yn();
    return jf(d, n, a, o);
  }
  function cl(n) {
    var a = se();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = a.queue = { pending: null, dispatch: null, lastRenderedReducer: Rt, lastRenderedState: n }, n = n.dispatch = Ff.bind(null, nn, n), [a.memoizedState, n];
  }
  function fl(n, a, o, d) {
    return n = { tag: n, create: a, destroy: o, deps: d, next: null }, a = nn.updateQueue, a === null ? (a = { lastEffect: null }, nn.updateQueue = a, a.lastEffect = n.next = n) : (o = a.lastEffect, o === null ? a.lastEffect = n.next = n : (d = o.next, o.next = n, n.next = d, a.lastEffect = n)), n;
  }
  function $f(n) {
    var a = se();
    return n = { current: n }, a.memoizedState = n;
  }
  function Pa() {
    return yn().memoizedState;
  }
  function dl(n, a, o, d) {
    var y = se();
    nn.flags |= n, y.memoizedState = fl(1 | a, o, void 0, d === void 0 ? null : d);
  }
  function Ci(n, a, o, d) {
    var y = yn();
    d = d === void 0 ? null : d;
    var S = void 0;
    if (Mn !== null) {
      var T = Mn.memoizedState;
      if (S = T.destroy, d !== null && za(d, T.deps)) {
        fl(a, o, S, d);
        return;
      }
    }
    nn.flags |= n, y.memoizedState = fl(1 | a, o, S, d);
  }
  function Is(n, a) {
    return dl(516, 4, n, a);
  }
  function gu(n, a) {
    return Ci(516, 4, n, a);
  }
  function Uf(n, a) {
    return Ci(4, 2, n, a);
  }
  function Ps(n, a) {
    if (typeof a == "function")
      return n = n(), a(n), function() {
        a(null);
      };
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function Kr(n, a, o) {
    return o = o != null ? o.concat([n]) : null, Ci(4, 2, Ps.bind(null, a, n), o);
  }
  function rn() {
  }
  function Jm(n, a) {
    var o = yn();
    a = a === void 0 ? null : a;
    var d = o.memoizedState;
    return d !== null && a !== null && za(a, d[1]) ? d[0] : (o.memoizedState = [n, a], n);
  }
  function Yt(n, a) {
    var o = yn();
    a = a === void 0 ? null : a;
    var d = o.memoizedState;
    return d !== null && a !== null && za(a, d[1]) ? d[0] : (n = n(), o.memoizedState = [n, a], n);
  }
  function pl(n, a) {
    var o = rl();
    ao(98 > o ? 98 : o, function() {
      n(!0);
    }), ao(97 < o ? 97 : o, function() {
      var d = _n.transition;
      _n.transition = 1;
      try {
        n(!1), a();
      } finally {
        _n.transition = d;
      }
    });
  }
  function Ff(n, a, o) {
    var d = Sr(), y = ya(n), S = { lane: y, action: o, eagerReducer: null, eagerState: null, next: null }, T = a.pending;
    if (T === null ? S.next = S : (S.next = T.next, T.next = S), a.pending = S, T = n.alternate, n === nn || T !== null && T === nn)
      bi = mu = !0;
    else {
      if (n.lanes === 0 && (T === null || T.lanes === 0) && (T = a.lastRenderedReducer, T !== null))
        try {
          var k = a.lastRenderedState, U = T(k, o);
          if (S.eagerReducer = T, S.eagerState = U, _r(U, k))
            return;
        } catch {
        } finally {
        }
      Ri(n, y, d);
    }
  }
  var Bs = { readContext: Er, useCallback: tr, useContext: tr, useEffect: tr, useImperativeHandle: tr, useLayoutEffect: tr, useMemo: tr, useReducer: tr, useRef: tr, useState: tr, useDebugValue: tr, useDeferredValue: tr, useTransition: tr, useMutableSource: tr, useOpaqueIdentifier: tr, unstable_isNewReconciler: !1 }, Eu = { readContext: Er, useCallback: function(n, a) {
    return se().memoizedState = [n, a === void 0 ? null : a], n;
  }, useContext: Er, useEffect: Is, useImperativeHandle: function(n, a, o) {
    return o = o != null ? o.concat([n]) : null, dl(4, 2, Ps.bind(
      null,
      a,
      n
    ), o);
  }, useLayoutEffect: function(n, a) {
    return dl(4, 2, n, a);
  }, useMemo: function(n, a) {
    var o = se();
    return a = a === void 0 ? null : a, n = n(), o.memoizedState = [n, a], n;
  }, useReducer: function(n, a, o) {
    var d = se();
    return a = o !== void 0 ? o(a) : a, d.memoizedState = d.baseState = a, n = d.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: a }, n = n.dispatch = Ff.bind(null, nn, n), [d.memoizedState, n];
  }, useRef: $f, useState: cl, useDebugValue: rn, useDeferredValue: function(n) {
    var a = cl(n), o = a[0], d = a[1];
    return Is(function() {
      var y = _n.transition;
      _n.transition = 1;
      try {
        d(n);
      } finally {
        _n.transition = y;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = cl(!1), a = n[0];
    return n = pl.bind(null, n[1]), $f(n), [n, a];
  }, useMutableSource: function(n, a, o) {
    var d = se();
    return d.memoizedState = { refs: { getSnapshot: a, setSnapshot: null }, source: n, subscribe: o }, jf(d, n, a, o);
  }, useOpaqueIdentifier: function() {
    if (pa) {
      var n = !1, a = Ns(function() {
        throw n || (n = !0, o("r:" + (di++).toString(36))), Error(f(355));
      }), o = cl(a)[1];
      return !(nn.mode & 2) && (nn.flags |= 516, fl(
        5,
        function() {
          o("r:" + (di++).toString(36));
        },
        void 0,
        null
      )), a;
    }
    return a = "r:" + (di++).toString(36), cl(a), a;
  }, unstable_isNewReconciler: !1 }, ey = { readContext: Er, useCallback: Jm, useContext: Er, useEffect: gu, useImperativeHandle: Kr, useLayoutEffect: Uf, useMemo: Yt, useReducer: Ia, useRef: Pa, useState: function() {
    return Ia(Rt);
  }, useDebugValue: rn, useDeferredValue: function(n) {
    var a = Ia(Rt), o = a[0], d = a[1];
    return gu(function() {
      var y = _n.transition;
      _n.transition = 1;
      try {
        d(n);
      } finally {
        _n.transition = y;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = Ia(Rt)[0];
    return [
      Pa().current,
      n
    ];
  }, useMutableSource: Lf, useOpaqueIdentifier: function() {
    return Ia(Rt)[0];
  }, unstable_isNewReconciler: !1 }, ty = { readContext: Er, useCallback: Jm, useContext: Er, useEffect: gu, useImperativeHandle: Kr, useLayoutEffect: Uf, useMemo: Yt, useReducer: po, useRef: Pa, useState: function() {
    return po(Rt);
  }, useDebugValue: rn, useDeferredValue: function(n) {
    var a = po(Rt), o = a[0], d = a[1];
    return gu(function() {
      var y = _n.transition;
      _n.transition = 1;
      try {
        d(n);
      } finally {
        _n.transition = y;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = po(Rt)[0];
    return [
      Pa().current,
      n
    ];
  }, useMutableSource: Lf, useOpaqueIdentifier: function() {
    return po(Rt)[0];
  }, unstable_isNewReconciler: !1 }, ny = j.ReactCurrentOwner, jr = !1;
  function ur(n, a, o, d) {
    a.child = n === null ? Nf(a, null, o, d) : su(a, n.child, o, d);
  }
  function zf(n, a, o, d, y) {
    o = o.render;
    var S = a.ref;
    return oo(a, y), d = Af(n, a, o, d, S, y), n !== null && !jr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~y, Ba(n, a, y)) : (a.flags |= 1, ur(n, a, d, y), a.child);
  }
  function If(n, a, o, d, y, S) {
    if (n === null) {
      var T = o.type;
      return typeof T == "function" && !Xs(T) && T.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (a.tag = 15, a.type = T, sv(n, a, T, d, y, S)) : (n = _u(o.type, null, d, a, a.mode, S), n.ref = a.ref, n.return = a, a.child = n);
    }
    return T = n.child, !(y & S) && (y = T.memoizedProps, o = o.compare, o = o !== null ? o : Zl, o(y, d) && n.ref === a.ref) ? Ba(n, a, S) : (a.flags |= 1, n = Ni(T, d), n.ref = a.ref, n.return = a, a.child = n);
  }
  function sv(n, a, o, d, y, S) {
    if (n !== null && Zl(n.memoizedProps, d) && n.ref === a.ref)
      if (jr = !1, (S & y) !== 0)
        n.flags & 16384 && (jr = !0);
      else
        return a.lanes = n.lanes, Ba(n, a, S);
    return Pf(n, a, o, d, S);
  }
  function vl(n, a, o) {
    var d = a.pendingProps, y = d.children, S = n !== null ? n.memoizedState : null;
    if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
      if (!(a.mode & 4))
        a.memoizedState = { baseLanes: 0 }, Ks(a, o);
      else if (o & 1073741824)
        a.memoizedState = { baseLanes: 0 }, Ks(a, S !== null ? S.baseLanes : o);
      else
        return n = S !== null ? S.baseLanes | o : o, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: n }, Ks(a, n), null;
    else
      S !== null ? (d = S.baseLanes | o, a.memoizedState = null) : d = o, Ks(a, d);
    return ur(n, a, y, o), a.child;
  }
  function cv(n, a) {
    var o = a.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (a.flags |= 128);
  }
  function Pf(n, a, o, d, y) {
    var S = zn(o) ? vi : tn.current;
    return S = Lt(a, S), oo(a, y), o = Af(n, a, o, d, S, y), n !== null && !jr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~y, Ba(n, a, y)) : (a.flags |= 1, ur(n, a, o, y), a.child);
  }
  function fv(n, a, o, d, y) {
    if (zn(o)) {
      var S = !0;
      Mr(a);
    } else
      S = !1;
    if (oo(a, y), a.stateNode === null)
      n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), lo(a, o, d), zs(a, o, d, y), d = !0;
    else if (n === null) {
      var T = a.stateNode, k = a.memoizedProps;
      T.props = k;
      var U = T.context, ee = o.contextType;
      typeof ee == "object" && ee !== null ? ee = Er(ee) : (ee = zn(o) ? vi : tn.current, ee = Lt(a, ee));
      var Fe = o.getDerivedStateFromProps, ft = typeof Fe == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      ft || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (k !== d || U !== ee) && Fs(a, T, d, ee), Ar = !1;
      var me = a.memoizedState;
      T.state = me, Ua(a, d, T, y), U = a.memoizedState, k !== d || me !== U || Fn.current || Ar ? (typeof Fe == "function" && (ou(a, o, Fe, d), U = a.memoizedState), (k = Ar || lu(a, o, k, d, me, U, ee)) ? (ft || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (a.flags |= 4)) : (typeof T.componentDidMount == "function" && (a.flags |= 4), a.memoizedProps = d, a.memoizedState = U), T.props = d, T.state = U, T.context = ee, d = k) : (typeof T.componentDidMount == "function" && (a.flags |= 4), d = !1);
    } else {
      T = a.stateNode, iv(n, a), k = a.memoizedProps, ee = a.type === a.elementType ? k : Nn(a.type, k), T.props = ee, ft = a.pendingProps, me = T.context, U = o.contextType, typeof U == "object" && U !== null ? U = Er(U) : (U = zn(o) ? vi : tn.current, U = Lt(a, U));
      var Xe = o.getDerivedStateFromProps;
      (Fe = typeof Xe == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (k !== ft || me !== U) && Fs(a, T, d, U), Ar = !1, me = a.memoizedState, T.state = me, Ua(a, d, T, y);
      var st = a.memoizedState;
      k !== ft || me !== st || Fn.current || Ar ? (typeof Xe == "function" && (ou(a, o, Xe, d), st = a.memoizedState), (ee = Ar || lu(a, o, ee, d, me, st, U)) ? (Fe || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(
        d,
        st,
        U
      ), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(d, st, U)), typeof T.componentDidUpdate == "function" && (a.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (a.flags |= 256)) : (typeof T.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (a.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (a.flags |= 256), a.memoizedProps = d, a.memoizedState = st), T.props = d, T.state = st, T.context = U, d = ee) : (typeof T.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (a.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (a.flags |= 256), d = !1);
    }
    return Bf(n, a, o, d, S, y);
  }
  function Bf(n, a, o, d, y, S) {
    cv(n, a);
    var T = (a.flags & 64) !== 0;
    if (!d && !T)
      return y && ev(a, o, !1), Ba(n, a, S);
    d = a.stateNode, ny.current = a;
    var k = T && typeof o.getDerivedStateFromError != "function" ? null : d.render();
    return a.flags |= 1, n !== null && T ? (a.child = su(a, n.child, null, S), a.child = su(a, null, k, S)) : ur(n, a, k, S), a.memoizedState = d.state, y && ev(a, o, !0), a.child;
  }
  function dv(n) {
    var a = n.stateNode;
    a.pendingContext ? tl(n, a.pendingContext, a.pendingContext !== a.context) : a.context && tl(n, a.context, !1), du(n, a.containerInfo);
  }
  var jn = { dehydrated: null, retryLane: 0 };
  function xi(n, a, o) {
    var d = a.pendingProps, y = fn.current, S = !1, T;
    return (T = (a.flags & 64) !== 0) || (T = n !== null && n.memoizedState === null ? !1 : (y & 2) !== 0), T ? (S = !0, a.flags &= -65) : n !== null && n.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === !0 || (y |= 1), ot(fn, y & 1), n === null ? (d.fallback !== void 0 && Ei(a), n = d.children, y = d.fallback, S ? (n = pv(a, n, y, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = jn, n) : typeof d.unstable_expectedLoadTime == "number" ? (n = pv(a, n, y, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = jn, a.lanes = 33554432, n) : (o = So({ mode: "visible", children: n }, a.mode, o, null), o.return = a, a.child = o)) : n.memoizedState !== null ? S ? (d = wi(n, a, d.children, d.fallback, o), S = a.child, y = n.child.memoizedState, S.memoizedState = y === null ? { baseLanes: o } : { baseLanes: y.baseLanes | o }, S.childLanes = n.childLanes & ~o, a.memoizedState = jn, d) : (o = Pn(n, a, d.children, o), a.memoizedState = null, o) : S ? (d = wi(n, a, d.children, d.fallback, o), S = a.child, y = n.child.memoizedState, S.memoizedState = y === null ? { baseLanes: o } : { baseLanes: y.baseLanes | o }, S.childLanes = n.childLanes & ~o, a.memoizedState = jn, d) : (o = Pn(n, a, d.children, o), a.memoizedState = null, o);
  }
  function pv(n, a, o, d) {
    var y = n.mode, S = n.child;
    return a = { mode: "hidden", children: a }, !(y & 2) && S !== null ? (S.childLanes = 0, S.pendingProps = a) : S = So(a, y, 0, null), o = ga(o, y, d, null), S.return = n, o.return = n, S.sibling = o, n.child = S, o;
  }
  function Pn(n, a, o, d) {
    var y = n.child;
    return n = y.sibling, o = Ni(y, { mode: "visible", children: o }), !(a.mode & 2) && (o.lanes = d), o.return = a, o.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, a.firstEffect = a.lastEffect = n), a.child = o;
  }
  function wi(n, a, o, d, y) {
    var S = a.mode, T = n.child;
    n = T.sibling;
    var k = { mode: "hidden", children: o };
    return !(S & 2) && a.child !== T ? (o = a.child, o.childLanes = 0, o.pendingProps = k, T = o.lastEffect, T !== null ? (a.firstEffect = o.firstEffect, a.lastEffect = T, T.nextEffect = null) : a.firstEffect = a.lastEffect = null) : o = Ni(T, k), n !== null ? d = Ni(n, d) : (d = ga(d, S, y, null), d.flags |= 2), d.return = a, o.return = a, o.sibling = d, a.child = o, d;
  }
  function At(n, a) {
    n.lanes |= a;
    var o = n.alternate;
    o !== null && (o.lanes |= a), Rf(n.return, a);
  }
  function hl(n, a, o, d, y, S) {
    var T = n.memoizedState;
    T === null ? n.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: d, tail: o, tailMode: y, lastEffect: S } : (T.isBackwards = a, T.rendering = null, T.renderingStartTime = 0, T.last = d, T.tail = o, T.tailMode = y, T.lastEffect = S);
  }
  function ry(n, a, o) {
    var d = a.pendingProps, y = d.revealOrder, S = d.tail;
    if (ur(n, a, d.children, o), d = fn.current, d & 2)
      d = d & 1 | 2, a.flags |= 64;
    else {
      if (n !== null && n.flags & 64)
        e:
          for (n = a.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && At(n, o);
            else if (n.tag === 19)
              At(n, o);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === a)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      d &= 1;
    }
    if (ot(fn, d), !(a.mode & 2))
      a.memoizedState = null;
    else
      switch (y) {
        case "forwards":
          for (o = a.child, y = null; o !== null; )
            n = o.alternate, n !== null && pu(n) === null && (y = o), o = o.sibling;
          o = y, o === null ? (y = a.child, a.child = null) : (y = o.sibling, o.sibling = null), hl(a, !1, y, o, S, a.lastEffect);
          break;
        case "backwards":
          for (o = null, y = a.child, a.child = null; y !== null; ) {
            if (n = y.alternate, n !== null && pu(n) === null) {
              a.child = y;
              break;
            }
            n = y.sibling, y.sibling = o, o = y, y = n;
          }
          hl(a, !0, o, null, S, a.lastEffect);
          break;
        case "together":
          hl(a, !1, null, null, void 0, a.lastEffect);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function Ba(n, a, o) {
    if (n !== null && (a.dependencies = n.dependencies), ho |= a.lanes, o & a.childLanes) {
      if (n !== null && a.child !== n.child)
        throw Error(f(153));
      if (a.child !== null) {
        for (n = a.child, o = Ni(n, n.pendingProps), a.child = o, o.return = a; n.sibling !== null; )
          n = n.sibling, o = o.sibling = Ni(n, n.pendingProps), o.return = a;
        o.sibling = null;
      }
      return a.child;
    }
    return null;
  }
  var Hs, ml, vv, Hf;
  Hs = function(n, a) {
    for (var o = a.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === a)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === a)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, ml = function() {
  }, vv = function(n, a, o, d) {
    var y = n.memoizedProps;
    if (y !== d) {
      n = a.stateNode, co(fa.current);
      var S = null;
      switch (o) {
        case "input":
          y = Cn(n, y), d = Cn(n, d), S = [];
          break;
        case "option":
          y = it(n, y), d = it(n, d), S = [];
          break;
        case "select":
          y = u({}, y, { value: void 0 }), d = u({}, d, { value: void 0 }), S = [];
          break;
        case "textarea":
          y = Mt(n, y), d = Mt(n, d), S = [];
          break;
        default:
          typeof y.onClick != "function" && typeof d.onClick == "function" && (n.onclick = ks);
      }
      ia(o, d);
      var T;
      o = null;
      for (ee in y)
        if (!d.hasOwnProperty(ee) && y.hasOwnProperty(ee) && y[ee] != null)
          if (ee === "style") {
            var k = y[ee];
            for (T in k)
              k.hasOwnProperty(T) && (o || (o = {}), o[T] = "");
          } else
            ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (h.hasOwnProperty(ee) ? S || (S = []) : (S = S || []).push(ee, null));
      for (ee in d) {
        var U = d[ee];
        if (k = y != null ? y[ee] : void 0, d.hasOwnProperty(ee) && U !== k && (U != null || k != null))
          if (ee === "style")
            if (k) {
              for (T in k)
                !k.hasOwnProperty(T) || U && U.hasOwnProperty(T) || (o || (o = {}), o[T] = "");
              for (T in U)
                U.hasOwnProperty(T) && k[T] !== U[T] && (o || (o = {}), o[T] = U[T]);
            } else
              o || (S || (S = []), S.push(ee, o)), o = U;
          else
            ee === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, k = k ? k.__html : void 0, U != null && k !== U && (S = S || []).push(ee, U)) : ee === "children" ? typeof U != "string" && typeof U != "number" || (S = S || []).push(ee, "" + U) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (h.hasOwnProperty(ee) ? (U != null && ee === "onScroll" && Kt("scroll", n), S || k === U || (S = [])) : typeof U == "object" && U !== null && U.$$typeof === nt ? U.toString() : (S = S || []).push(ee, U));
      }
      o && (S = S || []).push(
        "style",
        o
      );
      var ee = S;
      (a.updateQueue = ee) && (a.flags |= 4);
    }
  }, Hf = function(n, a, o, d) {
    o !== d && (a.flags |= 4);
  };
  function Su(n, a) {
    if (!pa)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var d = null; o !== null; )
            o.alternate !== null && (d = o), o = o.sibling;
          d === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : d.sibling = null;
      }
  }
  function ay(n, a, o) {
    var d = a.pendingProps;
    switch (a.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return zn(a.type) && ua(), null;
      case 3:
        return ol(), pt(Fn), pt(tn), Si(), d = a.stateNode, d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (n === null || n.child === null) && (hu(a) ? a.flags |= 4 : d.hydrate || (a.flags |= 256)), ml(a), null;
      case 5:
        _f(a);
        var y = co(fu.current);
        if (o = a.type, n !== null && a.stateNode != null)
          vv(n, a, o, d, y), n.ref !== a.ref && (a.flags |= 128);
        else {
          if (!d) {
            if (a.stateNode === null)
              throw Error(f(166));
            return null;
          }
          if (n = co(fa.current), hu(a)) {
            d = a.stateNode, o = a.type;
            var S = a.memoizedProps;
            switch (d[la] = a, d[_s] = S, o) {
              case "dialog":
                Kt("cancel", d), Kt("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", d);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Xo.length; n++)
                  Kt(Xo[n], d);
                break;
              case "source":
                Kt("error", d);
                break;
              case "img":
              case "image":
              case "link":
                Kt("error", d), Kt("load", d);
                break;
              case "details":
                Kt("toggle", d);
                break;
              case "input":
                vr(d, S), Kt("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!S.multiple }, Kt("invalid", d);
                break;
              case "textarea":
                Hr(d, S), Kt("invalid", d);
            }
            ia(o, S), n = null;
            for (var T in S)
              S.hasOwnProperty(T) && (y = S[T], T === "children" ? typeof y == "string" ? d.textContent !== y && (n = ["children", y]) : typeof y == "number" && d.textContent !== "" + y && (n = ["children", "" + y]) : h.hasOwnProperty(T) && y != null && T === "onScroll" && Kt("scroll", d));
            switch (o) {
              case "input":
                Je(d), ar(d, S, !0);
                break;
              case "textarea":
                Je(d), xr(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (d.onclick = ks);
            }
            d = n, a.updateQueue = d, d !== null && (a.flags |= 4);
          } else {
            switch (T = y.nodeType === 9 ? y : y.ownerDocument, n === _e.html && (n = ve(o)), n === _e.html ? o === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof d.is == "string" ? n = T.createElement(o, { is: d.is }) : (n = T.createElement(o), o === "select" && (T = n, d.multiple ? T.multiple = !0 : d.size && (T.size = d.size))) : n = T.createElementNS(n, o), n[la] = a, n[_s] = d, Hs(n, a, !1, !1), a.stateNode = n, T = ka(o, d), o) {
              case "dialog":
                Kt("cancel", n), Kt("close", n), y = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", n), y = d;
                break;
              case "video":
              case "audio":
                for (y = 0; y < Xo.length; y++)
                  Kt(Xo[y], n);
                y = d;
                break;
              case "source":
                Kt("error", n), y = d;
                break;
              case "img":
              case "image":
              case "link":
                Kt("error", n), Kt("load", n), y = d;
                break;
              case "details":
                Kt("toggle", n), y = d;
                break;
              case "input":
                vr(n, d), y = Cn(n, d), Kt("invalid", n);
                break;
              case "option":
                y = it(n, d);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!d.multiple }, y = u({}, d, { value: void 0 }), Kt("invalid", n);
                break;
              case "textarea":
                Hr(n, d), y = Mt(n, d), Kt("invalid", n);
                break;
              default:
                y = d;
            }
            ia(o, y);
            var k = y;
            for (S in k)
              if (k.hasOwnProperty(S)) {
                var U = k[S];
                S === "style" ? wr(n, U) : S === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Nt(n, U)) : S === "children" ? typeof U == "string" ? (o !== "textarea" || U !== "") && Ft(n, U) : typeof U == "number" && Ft(n, "" + U) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (h.hasOwnProperty(S) ? U != null && S === "onScroll" && Kt("scroll", n) : U != null && q(n, S, U, T));
              }
            switch (o) {
              case "input":
                Je(n), ar(n, d, !1);
                break;
              case "textarea":
                Je(n), xr(n);
                break;
              case "option":
                d.value != null && n.setAttribute("value", "" + oe(d.value));
                break;
              case "select":
                n.multiple = !!d.multiple, S = d.value, S != null ? Ot(n, !!d.multiple, S, !1) : d.defaultValue != null && Ot(n, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                typeof y.onClick == "function" && (n.onclick = ks);
            }
            Jo(o, d) && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 128);
        }
        return null;
      case 6:
        if (n && a.stateNode != null)
          Hf(n, a, n.memoizedProps, d);
        else {
          if (typeof d != "string" && a.stateNode === null)
            throw Error(f(166));
          o = co(fu.current), co(fa.current), hu(a) ? (d = a.stateNode, o = a.memoizedProps, d[la] = a, d.nodeValue !== o && (a.flags |= 4)) : (d = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(d), d[la] = a, a.stateNode = d);
        }
        return null;
      case 13:
        return pt(fn), d = a.memoizedState, a.flags & 64 ? (a.lanes = o, a) : (d = d !== null, o = !1, n === null ? a.memoizedProps.fallback !== void 0 && hu(a) : o = n.memoizedState !== null, d && !o && a.mode & 2 && (n === null && a.memoizedProps.unstable_avoidThisFallback !== !0 || fn.current & 1 ? Ln === 0 && (Ln = 3) : ((Ln === 0 || Ln === 3) && (Ln = 4), nr === null || !(ho & 134217727) && !(ha & 134217727) || Sl(nr, Bn))), (d || o) && (a.flags |= 4), null);
      case 4:
        return ol(), ml(a), n === null && hf(a.stateNode.containerInfo), null;
      case 10:
        return $s(a), null;
      case 17:
        return zn(a.type) && ua(), null;
      case 19:
        if (pt(fn), d = a.memoizedState, d === null)
          return null;
        if (S = (a.flags & 64) !== 0, T = d.rendering, T === null)
          if (S)
            Su(d, !1);
          else {
            if (Ln !== 0 || n !== null && n.flags & 64)
              for (n = a.child; n !== null; ) {
                if (T = pu(n), T !== null) {
                  for (a.flags |= 64, Su(d, !1), S = T.updateQueue, S !== null && (a.updateQueue = S, a.flags |= 4), d.lastEffect === null && (a.firstEffect = null), a.lastEffect = d.lastEffect, d = o, o = a.child; o !== null; )
                    S = o, n = d, S.flags &= 2, S.nextEffect = null, S.firstEffect = null, S.lastEffect = null, T = S.alternate, T === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = T.childLanes, S.lanes = T.lanes, S.child = T.child, S.memoizedProps = T.memoizedProps, S.memoizedState = T.memoizedState, S.updateQueue = T.updateQueue, S.type = T.type, n = T.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return ot(fn, fn.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            d.tail !== null && In() > mo && (a.flags |= 64, S = !0, Su(d, !1), a.lanes = 33554432);
          }
        else {
          if (!S)
            if (n = pu(T), n !== null) {
              if (a.flags |= 64, S = !0, o = n.updateQueue, o !== null && (a.updateQueue = o, a.flags |= 4), Su(d, !0), d.tail === null && d.tailMode === "hidden" && !T.alternate && !pa)
                return a = a.lastEffect = d.lastEffect, a !== null && (a.nextEffect = null), null;
            } else
              2 * In() - d.renderingStartTime > mo && o !== 1073741824 && (a.flags |= 64, S = !0, Su(d, !1), a.lanes = 33554432);
          d.isBackwards ? (T.sibling = a.child, a.child = T) : (o = d.last, o !== null ? o.sibling = T : a.child = T, d.last = T);
        }
        return d.tail !== null ? (o = d.tail, d.rendering = o, d.tail = o.sibling, d.lastEffect = a.lastEffect, d.renderingStartTime = In(), o.sibling = null, a = fn.current, ot(fn, S ? a & 1 | 2 : a & 1), o) : null;
      case 23:
      case 24:
        return td(), n !== null && n.memoizedState !== null != (a.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (a.flags |= 4), null;
    }
    throw Error(f(156, a.tag));
  }
  function hv(n) {
    switch (n.tag) {
      case 1:
        zn(n.type) && ua();
        var a = n.flags;
        return a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 3:
        if (ol(), pt(Fn), pt(tn), Si(), a = n.flags, a & 64)
          throw Error(f(285));
        return n.flags = a & -4097 | 64, n;
      case 5:
        return _f(n), null;
      case 13:
        return pt(fn), a = n.flags, a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 19:
        return pt(fn), null;
      case 4:
        return ol(), null;
      case 10:
        return $s(n), null;
      case 23:
      case 24:
        return td(), null;
      default:
        return null;
    }
  }
  function Vf(n, a) {
    try {
      var o = "", d = a;
      do
        o += Qe(d), d = d.return;
      while (d);
      var y = o;
    } catch (S) {
      y = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: a, stack: y };
  }
  function Wf(n, a) {
    try {
      console.error(a.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var mv = typeof WeakMap == "function" ? WeakMap : Map;
  function yv(n, a, o) {
    o = Gr(-1, o), o.tag = 3, o.payload = { element: null };
    var d = a.value;
    return o.callback = function() {
      Ru || (Ru = !0, Qf = d), Wf(n, a);
    }, o;
  }
  function gv(n, a, o) {
    o = Gr(-1, o), o.tag = 3;
    var d = n.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = a.value;
      o.payload = function() {
        return Wf(n, a), d(y);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (o.callback = function() {
      typeof d != "function" && (ma === null ? ma = /* @__PURE__ */ new Set([this]) : ma.add(this), Wf(n, a));
      var T = a.stack;
      this.componentDidCatch(a.value, { componentStack: T !== null ? T : "" });
    }), o;
  }
  var iy = typeof WeakSet == "function" ? WeakSet : Set;
  function Ev(n) {
    var a = n.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Di(n, o);
        }
      else
        a.current = null;
  }
  function oy(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (a.flags & 256 && n !== null) {
          var o = n.memoizedProps, d = n.memoizedState;
          n = a.stateNode, a = n.getSnapshotBeforeUpdate(a.elementType === a.type ? o : Nn(a.type, o), d), n.__reactInternalSnapshotBeforeUpdate = a;
        }
        return;
      case 3:
        a.flags & 256 && Ds(a.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(f(163));
  }
  function Yf(n, a, o) {
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            if ((n.tag & 3) === 3) {
              var d = n.create;
              n.destroy = d();
            }
            n = n.next;
          } while (n !== a);
        }
        if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            var y = n;
            d = y.next, y = y.tag, y & 4 && y & 1 && (rd(o, n), _v(o, n)), n = d;
          } while (n !== a);
        }
        return;
      case 1:
        n = o.stateNode, o.flags & 4 && (a === null ? n.componentDidMount() : (d = o.elementType === o.type ? a.memoizedProps : Nn(o.type, a.memoizedProps), n.componentDidUpdate(
          d,
          a.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), a = o.updateQueue, a !== null && kf(o, a, n);
        return;
      case 3:
        if (a = o.updateQueue, a !== null) {
          if (n = null, o.child !== null)
            switch (o.child.tag) {
              case 5:
                n = o.child.stateNode;
                break;
              case 1:
                n = o.child.stateNode;
            }
          kf(o, a, n);
        }
        return;
      case 5:
        n = o.stateNode, a === null && o.flags & 4 && Jo(o.type, o.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        o.memoizedState === null && (o = o.alternate, o !== null && (o = o.memoizedState, o !== null && (o = o.dehydrated, o !== null && yp(o))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(f(163));
  }
  function qf(n, a) {
    for (var o = n; ; ) {
      if (o.tag === 5) {
        var d = o.stateNode;
        if (a)
          d = d.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
        else {
          d = o.stateNode;
          var y = o.memoizedProps.style;
          y = y != null && y.hasOwnProperty("display") ? y.display : null, d.style.display = Jt("display", y);
        }
      } else if (o.tag === 6)
        o.stateNode.nodeValue = a ? "" : o.memoizedProps;
      else if ((o.tag !== 23 && o.tag !== 24 || o.memoizedState === null || o === n) && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === n)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }
  function Sv(n, a) {
    if (ro && typeof ro.onCommitFiberUnmount == "function")
      try {
        ro.onCommitFiberUnmount(Ef, a);
      } catch {
      }
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = a.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var o = n = n.next;
          do {
            var d = o, y = d.destroy;
            if (d = d.tag, y !== void 0)
              if (d & 4)
                rd(a, o);
              else {
                d = a;
                try {
                  y();
                } catch (S) {
                  Di(d, S);
                }
              }
            o = o.next;
          } while (o !== n);
        }
        break;
      case 1:
        if (Ev(a), n = a.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = a.memoizedProps, n.state = a.memoizedState, n.componentWillUnmount();
          } catch (S) {
            Di(
              a,
              S
            );
          }
        break;
      case 5:
        Ev(a);
        break;
      case 4:
        wv(n, a);
    }
  }
  function bv(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function Cv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function xv(n) {
    e: {
      for (var a = n.return; a !== null; ) {
        if (Cv(a))
          break e;
        a = a.return;
      }
      throw Error(f(160));
    }
    var o = a;
    switch (a = o.stateNode, o.tag) {
      case 5:
        var d = !1;
        break;
      case 3:
        a = a.containerInfo, d = !0;
        break;
      case 4:
        a = a.containerInfo, d = !0;
        break;
      default:
        throw Error(f(161));
    }
    o.flags & 16 && (Ft(a, ""), o.flags &= -17);
    e:
      t:
        for (o = n; ; ) {
          for (; o.sibling === null; ) {
            if (o.return === null || Cv(o.return)) {
              o = null;
              break e;
            }
            o = o.return;
          }
          for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
            if (o.flags & 2 || o.child === null || o.tag === 4)
              continue t;
            o.child.return = o, o = o.child;
          }
          if (!(o.flags & 2)) {
            o = o.stateNode;
            break e;
          }
        }
    d ? bu(n, o, a) : Cu(n, o, a);
  }
  function bu(n, a, o) {
    var d = n.tag, y = d === 5 || d === 6;
    if (y)
      n = y ? n.stateNode : n.stateNode.instance, a ? o.nodeType === 8 ? o.parentNode.insertBefore(n, a) : o.insertBefore(n, a) : (o.nodeType === 8 ? (a = o.parentNode, a.insertBefore(n, o)) : (a = o, a.appendChild(n)), o = o._reactRootContainer, o != null || a.onclick !== null || (a.onclick = ks));
    else if (d !== 4 && (n = n.child, n !== null))
      for (bu(n, a, o), n = n.sibling; n !== null; )
        bu(n, a, o), n = n.sibling;
  }
  function Cu(n, a, o) {
    var d = n.tag, y = d === 5 || d === 6;
    if (y)
      n = y ? n.stateNode : n.stateNode.instance, a ? o.insertBefore(n, a) : o.appendChild(n);
    else if (d !== 4 && (n = n.child, n !== null))
      for (Cu(n, a, o), n = n.sibling; n !== null; )
        Cu(n, a, o), n = n.sibling;
  }
  function wv(n, a) {
    for (var o = a, d = !1, y, S; ; ) {
      if (!d) {
        d = o.return;
        e:
          for (; ; ) {
            if (d === null)
              throw Error(f(160));
            switch (y = d.stateNode, d.tag) {
              case 5:
                S = !1;
                break e;
              case 3:
                y = y.containerInfo, S = !0;
                break e;
              case 4:
                y = y.containerInfo, S = !0;
                break e;
            }
            d = d.return;
          }
        d = !0;
      }
      if (o.tag === 5 || o.tag === 6) {
        e:
          for (var T = n, k = o, U = k; ; )
            if (Sv(T, U), U.child !== null && U.tag !== 4)
              U.child.return = U, U = U.child;
            else {
              if (U === k)
                break e;
              for (; U.sibling === null; ) {
                if (U.return === null || U.return === k)
                  break e;
                U = U.return;
              }
              U.sibling.return = U.return, U = U.sibling;
            }
        S ? (T = y, k = o.stateNode, T.nodeType === 8 ? T.parentNode.removeChild(k) : T.removeChild(k)) : y.removeChild(o.stateNode);
      } else if (o.tag === 4) {
        if (o.child !== null) {
          y = o.stateNode.containerInfo, S = !0, o.child.return = o, o = o.child;
          continue;
        }
      } else if (Sv(n, o), o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === a)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === a)
          return;
        o = o.return, o.tag === 4 && (d = !1);
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }
  function Gf(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var o = a.updateQueue;
        if (o = o !== null ? o.lastEffect : null, o !== null) {
          var d = o = o.next;
          do
            (d.tag & 3) === 3 && (n = d.destroy, d.destroy = void 0, n !== void 0 && n()), d = d.next;
          while (d !== o);
        }
        return;
      case 1:
        return;
      case 5:
        if (o = a.stateNode, o != null) {
          d = a.memoizedProps;
          var y = n !== null ? n.memoizedProps : d;
          n = a.type;
          var S = a.updateQueue;
          if (a.updateQueue = null, S !== null) {
            for (o[_s] = d, n === "input" && d.type === "radio" && d.name != null && un(o, d), ka(n, y), a = ka(n, d), y = 0; y < S.length; y += 2) {
              var T = S[y], k = S[y + 1];
              T === "style" ? wr(o, k) : T === "dangerouslySetInnerHTML" ? Nt(o, k) : T === "children" ? Ft(o, k) : q(o, T, k, a);
            }
            switch (n) {
              case "input":
                xn(o, d);
                break;
              case "textarea":
                Vr(o, d);
                break;
              case "select":
                n = o._wrapperState.wasMultiple, o._wrapperState.wasMultiple = !!d.multiple, S = d.value, S != null ? Ot(o, !!d.multiple, S, !1) : n !== !!d.multiple && (d.defaultValue != null ? Ot(o, !!d.multiple, d.defaultValue, !0) : Ot(o, !!d.multiple, d.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (a.stateNode === null)
          throw Error(f(162));
        a.stateNode.nodeValue = a.memoizedProps;
        return;
      case 3:
        o = a.stateNode, o.hydrate && (o.hydrate = !1, yp(o.containerInfo));
        return;
      case 12:
        return;
      case 13:
        a.memoizedState !== null && (Tu = In(), qf(a.child, !0)), Tv(a);
        return;
      case 19:
        Tv(a);
        return;
      case 17:
        return;
      case 23:
      case 24:
        qf(a, a.memoizedState !== null);
        return;
    }
    throw Error(f(163));
  }
  function Tv(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new iy()), a.forEach(function(d) {
        var y = dy.bind(null, n, d);
        o.has(d) || (o.add(d), d.then(y, y));
      });
    }
  }
  function ly(n, a) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (a = a.memoizedState, a !== null && a.dehydrated === null) : !1;
  }
  var xu = Math.ceil, yl = j.ReactCurrentDispatcher, vo = j.ReactCurrentOwner, ct = 0, nr = null, gn = null, Bn = 0, va = 0, gl = er(0), Ln = 0, Wn = null, Qr = 0, ho = 0, ha = 0, Kf = 0, wu = null, Tu = 0, mo = 1 / 0;
  function El() {
    mo = In() + 500;
  }
  var He = null, Ru = !1, Qf = null, ma = null, Ti = !1, yo = null, Ou = 90, Xf = [], Zf = [], Ha = null, ku = 0, Vs = null, Ws = -1, Va = 0, Ys = 0, Du = null, qs = !1;
  function Sr() {
    return ct & 48 ? In() : Ws !== -1 ? Ws : Ws = In();
  }
  function ya(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return rl() === 99 ? 1 : 2;
    if (Va === 0 && (Va = Qr), mi.transition !== 0) {
      Ys !== 0 && (Ys = wu !== null ? wu.pendingLanes : 0), n = Va;
      var a = 4186112 & ~Ys;
      return a &= -a, a === 0 && (n = 4186112 & ~n, a = n & -n, a === 0 && (a = 8192)), a;
    }
    return n = rl(), ct & 4 && n === 98 ? n = hs(12, Va) : (n = Cp(n), n = hs(n, Va)), n;
  }
  function Ri(n, a, o) {
    if (50 < ku)
      throw ku = 0, Vs = null, Error(f(185));
    if (n = Gs(n, a), n === null)
      return null;
    Vl(n, a, o), n === nr && (ha |= a, Ln === 4 && Sl(n, Bn));
    var d = rl();
    a === 1 ? ct & 8 && !(ct & 48) ? ed(n) : (Lr(n, o), ct === 0 && (El(), Dn())) : (!(ct & 4) || d !== 98 && d !== 99 || (Ha === null ? Ha = /* @__PURE__ */ new Set([n]) : Ha.add(n)), Lr(n, o)), wu = n;
  }
  function Gs(n, a) {
    n.lanes |= a;
    var o = n.alternate;
    for (o !== null && (o.lanes |= a), o = n, n = n.return; n !== null; )
      n.childLanes |= a, o = n.alternate, o !== null && (o.childLanes |= a), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  function Lr(n, a) {
    for (var o = n.callbackNode, d = n.suspendedLanes, y = n.pingedLanes, S = n.expirationTimes, T = n.pendingLanes; 0 < T; ) {
      var k = 31 - oi(T), U = 1 << k, ee = S[k];
      if (ee === -1) {
        if (!(U & d) || U & y) {
          ee = a, Ki(U);
          var Fe = zt;
          S[k] = 10 <= Fe ? ee + 250 : 6 <= Fe ? ee + 5e3 : -1;
        }
      } else
        ee <= a && (n.expiredLanes |= U);
      T &= ~U;
    }
    if (d = Ho(n, n === nr ? Bn : 0), a = zt, d === 0)
      o !== null && (o !== xf && au(o), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (o !== null) {
        if (n.callbackPriority === a)
          return;
        o !== xf && au(o);
      }
      a === 15 ? (o = ed.bind(null, n), sa === null ? (sa = [o], js = qr(As, La)) : sa.push(o), o = xf) : a === 14 ? o = io(99, ed.bind(null, n)) : (o = Kc(a), o = io(o, Jf.bind(null, n))), n.callbackPriority = a, n.callbackNode = o;
    }
  }
  function Jf(n) {
    if (Ws = -1, Ys = Va = 0, ct & 48)
      throw Error(f(327));
    var a = n.callbackNode;
    if (ki() && n.callbackNode !== a)
      return null;
    var o = Ho(n, n === nr ? Bn : 0);
    if (o === 0)
      return null;
    var d = o, y = ct;
    ct |= 16;
    var S = bl();
    (nr !== n || Bn !== d) && (El(), go(n, d));
    do
      try {
        Dv();
        break;
      } catch (k) {
        Qs(n, k);
      }
    while (!0);
    if (Tf(), yl.current = S, ct = y, gn !== null ? d = 0 : (nr = null, Bn = 0, d = Ln), Qr & ha)
      go(n, 0);
    else if (d !== 0) {
      if (d === 2 && (ct |= 64, n.hydrate && (n.hydrate = !1, Ds(n.containerInfo)), o = xp(n), o !== 0 && (d = Nu(n, o))), d === 1)
        throw a = Wn, go(n, 0), Sl(n, o), Lr(n, In()), a;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = o, d) {
        case 0:
        case 1:
          throw Error(f(345));
        case 2:
          Oi(n);
          break;
        case 3:
          if (Sl(n, o), (o & 62914560) === o && (d = Tu + 500 - In(), 10 < d)) {
            if (Ho(n, 0) !== 0)
              break;
            if (y = n.suspendedLanes, (y & o) !== o) {
              Sr(), n.pingedLanes |= n.suspendedLanes & y;
              break;
            }
            n.timeoutHandle = el(Oi.bind(null, n), d);
            break;
          }
          Oi(n);
          break;
        case 4:
          if (Sl(n, o), (o & 4186112) === o)
            break;
          for (d = n.eventTimes, y = -1; 0 < o; ) {
            var T = 31 - oi(o);
            S = 1 << T, T = d[T], T > y && (y = T), o &= ~S;
          }
          if (o = y, o = In() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * xu(o / 1960)) - o, 10 < o) {
            n.timeoutHandle = el(Oi.bind(null, n), o);
            break;
          }
          Oi(n);
          break;
        case 5:
          Oi(n);
          break;
        default:
          throw Error(f(329));
      }
    }
    return Lr(n, In()), n.callbackNode === a ? Jf.bind(null, n) : null;
  }
  function Sl(n, a) {
    for (a &= ~Kf, a &= ~ha, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var o = 31 - oi(a), d = 1 << o;
      n[o] = -1, a &= ~d;
    }
  }
  function ed(n) {
    if (ct & 48)
      throw Error(f(327));
    if (ki(), n === nr && n.expiredLanes & Bn) {
      var a = Bn, o = Nu(n, a);
      Qr & ha && (a = Ho(n, a), o = Nu(n, a));
    } else
      a = Ho(n, 0), o = Nu(n, a);
    if (n.tag !== 0 && o === 2 && (ct |= 64, n.hydrate && (n.hydrate = !1, Ds(n.containerInfo)), a = xp(n), a !== 0 && (o = Nu(n, a))), o === 1)
      throw o = Wn, go(n, 0), Sl(n, a), Lr(n, In()), o;
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, Oi(n), Lr(n, In()), null;
  }
  function uy() {
    if (Ha !== null) {
      var n = Ha;
      Ha = null, n.forEach(function(a) {
        a.expiredLanes |= 24 & a.pendingLanes, Lr(a, In());
      });
    }
    Dn();
  }
  function Rv(n, a) {
    var o = ct;
    ct |= 1;
    try {
      return n(a);
    } finally {
      ct = o, ct === 0 && (El(), Dn());
    }
  }
  function Ov(n, a) {
    var o = ct;
    ct &= -2, ct |= 8;
    try {
      return n(a);
    } finally {
      ct = o, ct === 0 && (El(), Dn());
    }
  }
  function Ks(n, a) {
    ot(gl, va), va |= a, Qr |= a;
  }
  function td() {
    va = gl.current, pt(gl);
  }
  function go(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Qp(o)), gn !== null)
      for (o = gn.return; o !== null; ) {
        var d = o;
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes, d != null && ua();
            break;
          case 3:
            ol(), pt(Fn), pt(tn), Si();
            break;
          case 5:
            _f(d);
            break;
          case 4:
            ol();
            break;
          case 13:
            pt(fn);
            break;
          case 19:
            pt(fn);
            break;
          case 10:
            $s(d);
            break;
          case 23:
          case 24:
            td();
        }
        o = o.return;
      }
    nr = n, gn = Ni(n.current, null), Bn = va = Qr = a, Ln = 0, Wn = null, Kf = ha = ho = 0;
  }
  function Qs(n, a) {
    do {
      var o = gn;
      try {
        if (Tf(), ul.current = Bs, mu) {
          for (var d = nn.memoizedState; d !== null; ) {
            var y = d.queue;
            y !== null && (y.pending = null), d = d.next;
          }
          mu = !1;
        }
        if (sl = 0, An = Mn = nn = null, bi = !1, vo.current = null, o === null || o.return === null) {
          Ln = 1, Wn = a, gn = null;
          break;
        }
        e: {
          var S = n, T = o.return, k = o, U = a;
          if (a = Bn, k.flags |= 2048, k.firstEffect = k.lastEffect = null, U !== null && typeof U == "object" && typeof U.then == "function") {
            var ee = U;
            if (!(k.mode & 2)) {
              var Fe = k.alternate;
              Fe ? (k.updateQueue = Fe.updateQueue, k.memoizedState = Fe.memoizedState, k.lanes = Fe.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var ft = (fn.current & 1) !== 0, me = T;
            do {
              var Xe;
              if (Xe = me.tag === 13) {
                var st = me.memoizedState;
                if (st !== null)
                  Xe = st.dehydrated !== null;
                else {
                  var rt = me.memoizedProps;
                  Xe = rt.fallback === void 0 ? !1 : rt.unstable_avoidThisFallback !== !0 ? !0 : !ft;
                }
              }
              if (Xe) {
                var V = me.updateQueue;
                if (V === null) {
                  var I = /* @__PURE__ */ new Set();
                  I.add(ee), me.updateQueue = I;
                } else
                  V.add(ee);
                if (!(me.mode & 2)) {
                  if (me.flags |= 64, k.flags |= 16384, k.flags &= -2981, k.tag === 1)
                    if (k.alternate === null)
                      k.tag = 17;
                    else {
                      var B = Gr(-1, 1);
                      B.tag = 2, $a(k, B);
                    }
                  k.lanes |= 1;
                  break e;
                }
                U = void 0, k = a;
                var ue = S.pingCache;
                if (ue === null ? (ue = S.pingCache = new mv(), U = /* @__PURE__ */ new Set(), ue.set(ee, U)) : (U = ue.get(ee), U === void 0 && (U = /* @__PURE__ */ new Set(), ue.set(ee, U))), !U.has(k)) {
                  U.add(k);
                  var fe = fy.bind(null, S, ee, k);
                  ee.then(fe, fe);
                }
                me.flags |= 4096, me.lanes = a;
                break e;
              }
              me = me.return;
            } while (me !== null);
            U = Error((Ge(k.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          Ln !== 5 && (Ln = 2), U = Vf(U, k), me = T;
          do {
            switch (me.tag) {
              case 3:
                S = U, me.flags |= 4096, a &= -a, me.lanes |= a;
                var vt = yv(me, S, a);
                ov(me, vt);
                break e;
              case 1:
                S = U;
                var Ve = me.type, dt = me.stateNode;
                if (!(me.flags & 64) && (typeof Ve.getDerivedStateFromError == "function" || dt !== null && typeof dt.componentDidCatch == "function" && (ma === null || !ma.has(dt)))) {
                  me.flags |= 4096, a &= -a, me.lanes |= a;
                  var gt = gv(me, S, a);
                  ov(me, gt);
                  break e;
                }
            }
            me = me.return;
          } while (me !== null);
        }
        Nv(o);
      } catch (ht) {
        a = ht, gn === o && o !== null && (gn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bl() {
    var n = yl.current;
    return yl.current = Bs, n === null ? Bs : n;
  }
  function Nu(n, a) {
    var o = ct;
    ct |= 16;
    var d = bl();
    nr === n && Bn === a || go(n, a);
    do
      try {
        kv();
        break;
      } catch (y) {
        Qs(n, y);
      }
    while (!0);
    if (Tf(), ct = o, yl.current = d, gn !== null)
      throw Error(f(261));
    return nr = null, Bn = 0, Ln;
  }
  function kv() {
    for (; gn !== null; )
      nd(gn);
  }
  function Dv() {
    for (; gn !== null && !Zm(); )
      nd(gn);
  }
  function nd(n) {
    var a = Av(n.alternate, n, va);
    n.memoizedProps = n.pendingProps, a === null ? Nv(n) : gn = a, vo.current = null;
  }
  function Nv(n) {
    var a = n;
    do {
      var o = a.alternate;
      if (n = a.return, a.flags & 2048) {
        if (o = hv(a), o !== null) {
          o.flags &= 2047, gn = o;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (o = ay(o, a, va), o !== null) {
          gn = o;
          return;
        }
        if (o = a, o.tag !== 24 && o.tag !== 23 || o.memoizedState === null || va & 1073741824 || !(o.mode & 4)) {
          for (var d = 0, y = o.child; y !== null; )
            d |= y.lanes | y.childLanes, y = y.sibling;
          o.childLanes = d;
        }
        n !== null && !(n.flags & 2048) && (n.firstEffect === null && (n.firstEffect = a.firstEffect), a.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = a.firstEffect), n.lastEffect = a.lastEffect), 1 < a.flags && (n.lastEffect !== null ? n.lastEffect.nextEffect = a : n.firstEffect = a, n.lastEffect = a));
      }
      if (a = a.sibling, a !== null) {
        gn = a;
        return;
      }
      gn = a = n;
    } while (a !== null);
    Ln === 0 && (Ln = 5);
  }
  function Oi(n) {
    var a = rl();
    return ao(99, sy.bind(null, n, a)), null;
  }
  function sy(n, a) {
    do
      ki();
    while (yo !== null);
    if (ct & 48)
      throw Error(f(327));
    var o = n.finishedWork;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(f(177));
    n.callbackNode = null;
    var d = o.lanes | o.childLanes, y = d, S = n.pendingLanes & ~y;
    n.pendingLanes = y, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= y, n.mutableReadLanes &= y, n.entangledLanes &= y, y = n.entanglements;
    for (var T = n.eventTimes, k = n.expirationTimes; 0 < S; ) {
      var U = 31 - oi(S), ee = 1 << U;
      y[U] = 0, T[U] = -1, k[U] = -1, S &= ~ee;
    }
    if (Ha !== null && !(d & 24) && Ha.has(n) && Ha.delete(n), n === nr && (gn = nr = null, Bn = 0), 1 < o.flags ? o.lastEffect !== null ? (o.lastEffect.nextEffect = o, d = o.firstEffect) : d = o : d = o.firstEffect, d !== null) {
      if (y = ct, ct |= 32, vo.current = null, mf = Wl, T = Jl(), Zi(T)) {
        if ("selectionStart" in T)
          k = { start: T.selectionStart, end: T.selectionEnd };
        else
          e:
            if (k = (k = T.ownerDocument) && k.defaultView || window, (ee = k.getSelection && k.getSelection()) && ee.rangeCount !== 0) {
              k = ee.anchorNode, S = ee.anchorOffset, U = ee.focusNode, ee = ee.focusOffset;
              try {
                k.nodeType, U.nodeType;
              } catch {
                k = null;
                break e;
              }
              var Fe = 0, ft = -1, me = -1, Xe = 0, st = 0, rt = T, V = null;
              t:
                for (; ; ) {
                  for (var I; rt !== k || S !== 0 && rt.nodeType !== 3 || (ft = Fe + S), rt !== U || ee !== 0 && rt.nodeType !== 3 || (me = Fe + ee), rt.nodeType === 3 && (Fe += rt.nodeValue.length), (I = rt.firstChild) !== null; )
                    V = rt, rt = I;
                  for (; ; ) {
                    if (rt === T)
                      break t;
                    if (V === k && ++Xe === S && (ft = Fe), V === U && ++st === ee && (me = Fe), (I = rt.nextSibling) !== null)
                      break;
                    rt = V, V = rt.parentNode;
                  }
                  rt = I;
                }
              k = ft === -1 || me === -1 ? null : { start: ft, end: me };
            } else
              k = null;
        k = k || { start: 0, end: 0 };
      } else
        k = null;
      yf = { focusedElem: T, selectionRange: k }, Wl = !1, Du = null, qs = !1, He = d;
      do
        try {
          cy();
        } catch (ht) {
          if (He === null)
            throw Error(f(330));
          Di(He, ht), He = He.nextEffect;
        }
      while (He !== null);
      Du = null, He = d;
      do
        try {
          for (T = n; He !== null; ) {
            var B = He.flags;
            if (B & 16 && Ft(He.stateNode, ""), B & 128) {
              var ue = He.alternate;
              if (ue !== null) {
                var fe = ue.ref;
                fe !== null && (typeof fe == "function" ? fe(null) : fe.current = null);
              }
            }
            switch (B & 1038) {
              case 2:
                xv(He), He.flags &= -3;
                break;
              case 6:
                xv(He), He.flags &= -3, Gf(He.alternate, He);
                break;
              case 1024:
                He.flags &= -1025;
                break;
              case 1028:
                He.flags &= -1025, Gf(He.alternate, He);
                break;
              case 4:
                Gf(He.alternate, He);
                break;
              case 8:
                k = He, wv(T, k);
                var vt = k.alternate;
                bv(k), vt !== null && bv(vt);
            }
            He = He.nextEffect;
          }
        } catch (ht) {
          if (He === null)
            throw Error(f(330));
          Di(He, ht), He = He.nextEffect;
        }
      while (He !== null);
      if (fe = yf, ue = Jl(), B = fe.focusedElem, T = fe.selectionRange, ue !== B && B && B.ownerDocument && ff(B.ownerDocument.documentElement, B)) {
        for (T !== null && Zi(B) && (ue = T.start, fe = T.end, fe === void 0 && (fe = ue), "selectionStart" in B ? (B.selectionStart = ue, B.selectionEnd = Math.min(fe, B.value.length)) : (fe = (ue = B.ownerDocument || document) && ue.defaultView || window, fe.getSelection && (fe = fe.getSelection(), k = B.textContent.length, vt = Math.min(T.start, k), T = T.end === void 0 ? vt : Math.min(T.end, k), !fe.extend && vt > T && (k = T, T = vt, vt = k), k = Yp(B, vt), S = Yp(B, T), k && S && (fe.rangeCount !== 1 || fe.anchorNode !== k.node || fe.anchorOffset !== k.offset || fe.focusNode !== S.node || fe.focusOffset !== S.offset) && (ue = ue.createRange(), ue.setStart(k.node, k.offset), fe.removeAllRanges(), vt > T ? (fe.addRange(ue), fe.extend(S.node, S.offset)) : (ue.setEnd(S.node, S.offset), fe.addRange(ue)))))), ue = [], fe = B; fe = fe.parentNode; )
          fe.nodeType === 1 && ue.push({ element: fe, left: fe.scrollLeft, top: fe.scrollTop });
        for (typeof B.focus == "function" && B.focus(), B = 0; B < ue.length; B++)
          fe = ue[B], fe.element.scrollLeft = fe.left, fe.element.scrollTop = fe.top;
      }
      Wl = !!mf, yf = mf = null, n.current = o, He = d;
      do
        try {
          for (B = n; He !== null; ) {
            var Ve = He.flags;
            if (Ve & 36 && Yf(B, He.alternate, He), Ve & 128) {
              ue = void 0;
              var dt = He.ref;
              if (dt !== null) {
                var gt = He.stateNode;
                switch (He.tag) {
                  case 5:
                    ue = gt;
                    break;
                  default:
                    ue = gt;
                }
                typeof dt == "function" ? dt(ue) : dt.current = ue;
              }
            }
            He = He.nextEffect;
          }
        } catch (ht) {
          if (He === null)
            throw Error(f(330));
          Di(He, ht), He = He.nextEffect;
        }
      while (He !== null);
      He = null, rv(), ct = y;
    } else
      n.current = o;
    if (Ti)
      Ti = !1, yo = n, Ou = a;
    else
      for (He = d; He !== null; )
        a = He.nextEffect, He.nextEffect = null, He.flags & 8 && (Ve = He, Ve.sibling = null, Ve.stateNode = null), He = a;
    if (d = n.pendingLanes, d === 0 && (ma = null), d === 1 ? n === Vs ? ku++ : (ku = 0, Vs = n) : ku = 0, o = o.stateNode, ro && typeof ro.onCommitFiberRoot == "function")
      try {
        ro.onCommitFiberRoot(Ef, o, void 0, (o.current.flags & 64) === 64);
      } catch {
      }
    if (Lr(n, In()), Ru)
      throw Ru = !1, n = Qf, Qf = null, n;
    return ct & 8 || Dn(), null;
  }
  function cy() {
    for (; He !== null; ) {
      var n = He.alternate;
      qs || Du === null || (He.flags & 8 ? zl(He, Du) && (qs = !0) : He.tag === 13 && ly(n, He) && zl(He, Du) && (qs = !0));
      var a = He.flags;
      a & 256 && oy(n, He), !(a & 512) || Ti || (Ti = !0, io(97, function() {
        return ki(), null;
      })), He = He.nextEffect;
    }
  }
  function ki() {
    if (Ou !== 90) {
      var n = 97 < Ou ? 97 : Ou;
      return Ou = 90, ao(n, Mv);
    }
    return !1;
  }
  function _v(n, a) {
    Xf.push(a, n), Ti || (Ti = !0, io(97, function() {
      return ki(), null;
    }));
  }
  function rd(n, a) {
    Zf.push(a, n), Ti || (Ti = !0, io(97, function() {
      return ki(), null;
    }));
  }
  function Mv() {
    if (yo === null)
      return !1;
    var n = yo;
    if (yo = null, ct & 48)
      throw Error(f(331));
    var a = ct;
    ct |= 32;
    var o = Zf;
    Zf = [];
    for (var d = 0; d < o.length; d += 2) {
      var y = o[d], S = o[d + 1], T = y.destroy;
      if (y.destroy = void 0, typeof T == "function")
        try {
          T();
        } catch (U) {
          if (S === null)
            throw Error(f(330));
          Di(S, U);
        }
    }
    for (o = Xf, Xf = [], d = 0; d < o.length; d += 2) {
      y = o[d], S = o[d + 1];
      try {
        var k = y.create;
        y.destroy = k();
      } catch (U) {
        if (S === null)
          throw Error(f(330));
        Di(S, U);
      }
    }
    for (k = n.current.firstEffect; k !== null; )
      n = k.nextEffect, k.nextEffect = null, k.flags & 8 && (k.sibling = null, k.stateNode = null), k = n;
    return ct = a, Dn(), !0;
  }
  function Eo(n, a, o) {
    a = Vf(o, a), a = yv(n, a, 1), $a(n, a), a = Sr(), n = Gs(n, 1), n !== null && (Vl(n, 1, a), Lr(n, a));
  }
  function Di(n, a) {
    if (n.tag === 3)
      Eo(n, n, a);
    else
      for (var o = n.return; o !== null; ) {
        if (o.tag === 3) {
          Eo(o, n, a);
          break;
        } else if (o.tag === 1) {
          var d = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (ma === null || !ma.has(d))) {
            n = Vf(a, n);
            var y = gv(o, n, 1);
            if ($a(o, y), y = Sr(), o = Gs(o, 1), o !== null)
              Vl(o, 1, y), Lr(o, y);
            else if (typeof d.componentDidCatch == "function" && (ma === null || !ma.has(d)))
              try {
                d.componentDidCatch(a, n);
              } catch {
              }
            break;
          }
        }
        o = o.return;
      }
  }
  function fy(n, a, o) {
    var d = n.pingCache;
    d !== null && d.delete(a), a = Sr(), n.pingedLanes |= n.suspendedLanes & o, nr === n && (Bn & o) === o && (Ln === 4 || Ln === 3 && (Bn & 62914560) === Bn && 500 > In() - Tu ? go(n, 0) : Kf |= o), Lr(n, a);
  }
  function dy(n, a) {
    var o = n.stateNode;
    o !== null && o.delete(a), a = 0, a === 0 && (a = n.mode, a & 2 ? a & 4 ? (Va === 0 && (Va = Qr), a = ii(62914560 & ~Va), a === 0 && (a = 4194304)) : a = rl() === 99 ? 1 : 2 : a = 1), o = Sr(), n = Gs(n, a), n !== null && (Vl(n, a, o), Lr(n, o));
  }
  var Av;
  Av = function(n, a, o) {
    var d = a.lanes;
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps || Fn.current)
        jr = !0;
      else if (o & d)
        jr = !!(n.flags & 16384);
      else {
        switch (jr = !1, a.tag) {
          case 3:
            dv(a), ll();
            break;
          case 5:
            lv(a);
            break;
          case 1:
            zn(a.type) && Mr(a);
            break;
          case 4:
            du(a, a.stateNode.containerInfo);
            break;
          case 10:
            d = a.memoizedProps.value;
            var y = a.type._context;
            ot(yi, y._currentValue), y._currentValue = d;
            break;
          case 13:
            if (a.memoizedState !== null)
              return o & a.child.childLanes ? xi(n, a, o) : (ot(fn, fn.current & 1), a = Ba(n, a, o), a !== null ? a.sibling : null);
            ot(fn, fn.current & 1);
            break;
          case 19:
            if (d = (o & a.childLanes) !== 0, n.flags & 64) {
              if (d)
                return ry(n, a, o);
              a.flags |= 64;
            }
            if (y = a.memoizedState, y !== null && (y.rendering = null, y.tail = null, y.lastEffect = null), ot(fn, fn.current), d)
              break;
            return null;
          case 23:
          case 24:
            return a.lanes = 0, vl(n, a, o);
        }
        return Ba(n, a, o);
      }
    else
      jr = !1;
    switch (a.lanes = 0, a.tag) {
      case 2:
        if (d = a.type, n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, y = Lt(a, tn.current), oo(a, o), y = Af(null, a, d, n, y, o), a.flags |= 1, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
          if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, zn(d)) {
            var S = !0;
            Mr(a);
          } else
            S = !1;
          a.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Of(a);
          var T = d.getDerivedStateFromProps;
          typeof T == "function" && ou(a, d, T, n), y.updater = al, a.stateNode = y, y._reactInternals = a, zs(a, d, n, o), a = Bf(null, a, d, !0, S, o);
        } else
          a.tag = 0, ur(null, a, y, o), a = a.child;
        return a;
      case 16:
        y = a.elementType;
        e: {
          switch (n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, S = y._init, y = S(y._payload), a.type = y, S = a.tag = vy(y), n = Nn(y, n), S) {
            case 0:
              a = Pf(null, a, y, n, o);
              break e;
            case 1:
              a = fv(null, a, y, n, o);
              break e;
            case 11:
              a = zf(null, a, y, n, o);
              break e;
            case 14:
              a = If(null, a, y, Nn(y.type, n), d, o);
              break e;
          }
          throw Error(f(306, y, ""));
        }
        return a;
      case 0:
        return d = a.type, y = a.pendingProps, y = a.elementType === d ? y : Nn(d, y), Pf(n, a, d, y, o);
      case 1:
        return d = a.type, y = a.pendingProps, y = a.elementType === d ? y : Nn(d, y), fv(n, a, d, y, o);
      case 3:
        if (dv(a), d = a.updateQueue, n === null || d === null)
          throw Error(f(282));
        if (d = a.pendingProps, y = a.memoizedState, y = y !== null ? y.element : null, iv(n, a), Ua(a, d, null, o), d = a.memoizedState.element, d === y)
          ll(), a = Ba(n, a, o);
        else {
          if (y = a.stateNode, (S = y.hydrate) && (Fa = fi(a.stateNode.containerInfo.firstChild), da = a, S = pa = !0), S) {
            if (n = y.mutableSourceEagerHydrationData, n != null)
              for (y = 0; y < n.length; y += 2)
                S = n[y], S._workInProgressVersionPrimary = n[y + 1], fo.push(S);
            for (o = Nf(a, null, d, o), a.child = o; o; )
              o.flags = o.flags & -3 | 1024, o = o.sibling;
          } else
            ur(n, a, d, o), ll();
          a = a.child;
        }
        return a;
      case 5:
        return lv(a), n === null && Ei(a), d = a.type, y = a.pendingProps, S = n !== null ? n.memoizedProps : null, T = y.children, nu(d, y) ? T = null : S !== null && nu(d, S) && (a.flags |= 16), cv(n, a), ur(n, a, T, o), a.child;
      case 6:
        return n === null && Ei(a), null;
      case 13:
        return xi(n, a, o);
      case 4:
        return du(a, a.stateNode.containerInfo), d = a.pendingProps, n === null ? a.child = su(a, null, d, o) : ur(n, a, d, o), a.child;
      case 11:
        return d = a.type, y = a.pendingProps, y = a.elementType === d ? y : Nn(d, y), zf(n, a, d, y, o);
      case 7:
        return ur(n, a, a.pendingProps, o), a.child;
      case 8:
        return ur(
          n,
          a,
          a.pendingProps.children,
          o
        ), a.child;
      case 12:
        return ur(n, a, a.pendingProps.children, o), a.child;
      case 10:
        e: {
          d = a.type._context, y = a.pendingProps, T = a.memoizedProps, S = y.value;
          var k = a.type._context;
          if (ot(yi, k._currentValue), k._currentValue = S, T !== null)
            if (k = T.value, S = _r(k, S) ? 0 : (typeof d._calculateChangedBits == "function" ? d._calculateChangedBits(k, S) : 1073741823) | 0, S === 0) {
              if (T.children === y.children && !Fn.current) {
                a = Ba(n, a, o);
                break e;
              }
            } else
              for (k = a.child, k !== null && (k.return = a); k !== null; ) {
                var U = k.dependencies;
                if (U !== null) {
                  T = k.child;
                  for (var ee = U.firstContext; ee !== null; ) {
                    if (ee.context === d && ee.observedBits & S) {
                      k.tag === 1 && (ee = Gr(-1, o & -o), ee.tag = 2, $a(k, ee)), k.lanes |= o, ee = k.alternate, ee !== null && (ee.lanes |= o), Rf(k.return, o), U.lanes |= o;
                      break;
                    }
                    ee = ee.next;
                  }
                } else
                  T = k.tag === 10 && k.type === a.type ? null : k.child;
                if (T !== null)
                  T.return = k;
                else
                  for (T = k; T !== null; ) {
                    if (T === a) {
                      T = null;
                      break;
                    }
                    if (k = T.sibling, k !== null) {
                      k.return = T.return, T = k;
                      break;
                    }
                    T = T.return;
                  }
                k = T;
              }
          ur(n, a, y.children, o), a = a.child;
        }
        return a;
      case 9:
        return y = a.type, S = a.pendingProps, d = S.children, oo(a, o), y = Er(
          y,
          S.unstable_observedBits
        ), d = d(y), a.flags |= 1, ur(n, a, d, o), a.child;
      case 14:
        return y = a.type, S = Nn(y, a.pendingProps), S = Nn(y.type, S), If(n, a, y, S, d, o);
      case 15:
        return sv(n, a, a.type, a.pendingProps, d, o);
      case 17:
        return d = a.type, y = a.pendingProps, y = a.elementType === d ? y : Nn(d, y), n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, zn(d) ? (n = !0, Mr(a)) : n = !1, oo(a, o), lo(a, d, y), zs(a, d, y, o), Bf(null, a, d, !0, n, o);
      case 19:
        return ry(n, a, o);
      case 23:
        return vl(n, a, o);
      case 24:
        return vl(n, a, o);
    }
    throw Error(f(156, a.tag));
  };
  function py(n, a, o, d) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $r(n, a, o, d) {
    return new py(n, a, o, d);
  }
  function Xs(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vy(n) {
    if (typeof n == "function")
      return Xs(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Oe)
        return 11;
      if (n === Be)
        return 14;
    }
    return 2;
  }
  function Ni(n, a) {
    var o = n.alternate;
    return o === null ? (o = $r(n.tag, a, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = a, o.type = n.type, o.flags = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, a = n.dependencies, o.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function _u(n, a, o, d, y, S) {
    var T = 2;
    if (d = n, typeof n == "function")
      Xs(n) && (T = 1);
    else if (typeof n == "string")
      T = 5;
    else
      e:
        switch (n) {
          case ce:
            return ga(o.children, y, S, a);
          case re:
            T = 8, y |= 16;
            break;
          case Te:
            T = 8, y |= 1;
            break;
          case Ne:
            return n = $r(12, o, a, y | 8), n.elementType = Ne, n.type = Ne, n.lanes = S, n;
          case Me:
            return n = $r(13, o, a, y), n.type = Me, n.elementType = Me, n.lanes = S, n;
          case Ae:
            return n = $r(19, o, a, y), n.elementType = Ae, n.lanes = S, n;
          case W:
            return So(o, y, S, a);
          case le:
            return n = $r(24, o, a, y), n.elementType = le, n.lanes = S, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case we:
                  T = 10;
                  break e;
                case De:
                  T = 9;
                  break e;
                case Oe:
                  T = 11;
                  break e;
                case Be:
                  T = 14;
                  break e;
                case Ze:
                  T = 16, d = null;
                  break e;
                case Ke:
                  T = 22;
                  break e;
              }
            throw Error(f(130, n == null ? n : typeof n, ""));
        }
    return a = $r(T, o, a, y), a.elementType = n, a.type = d, a.lanes = S, a;
  }
  function ga(n, a, o, d) {
    return n = $r(7, n, d, a), n.lanes = o, n;
  }
  function So(n, a, o, d) {
    return n = $r(23, n, d, a), n.elementType = W, n.lanes = o, n;
  }
  function ad(n, a, o) {
    return n = $r(6, n, null, a), n.lanes = o, n;
  }
  function id(n, a, o) {
    return a = $r(4, n.children !== null ? n.children : [], n.key, a), a.lanes = o, a.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, a;
  }
  function hy(n, a, o) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.mutableSourceEagerHydrationData = null;
  }
  function Zs(n, a, o) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: d == null ? null : "" + d, children: n, containerInfo: a, implementation: o };
  }
  function Js(n, a, o, d) {
    var y = a.current, S = Sr(), T = ya(y);
    e:
      if (o) {
        o = o._reactInternals;
        t: {
          if (Vn(o) !== o || o.tag !== 1)
            throw Error(f(170));
          var k = o;
          do {
            switch (k.tag) {
              case 3:
                k = k.stateNode.context;
                break t;
              case 1:
                if (zn(k.type)) {
                  k = k.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            k = k.return;
          } while (k !== null);
          throw Error(f(171));
        }
        if (o.tag === 1) {
          var U = o.type;
          if (zn(U)) {
            o = nl(o, U, k);
            break e;
          }
        }
        o = k;
      } else
        o = pi;
    return a.context === null ? a.context = o : a.pendingContext = o, a = Gr(S, T), a.payload = { element: n }, d = d === void 0 ? null : d, d !== null && (a.callback = d), $a(y, a), Ri(y, T, S), T;
  }
  function ec(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function jv(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < a ? o : a;
    }
  }
  function tc(n, a) {
    jv(n, a), (n = n.alternate) && jv(n, a);
  }
  function Lv() {
    return null;
  }
  function od(n, a, o) {
    var d = o != null && o.hydrationOptions != null && o.hydrationOptions.mutableSources || null;
    if (o = new hy(n, a, o != null && o.hydrate === !0), a = $r(3, null, null, a === 2 ? 7 : a === 1 ? 3 : 0), o.current = a, a.stateNode = o, Of(a), n[Zn] = o.current, hf(n.nodeType === 8 ? n.parentNode : n), d)
      for (n = 0; n < d.length; n++) {
        a = d[n];
        var y = a._getVersion;
        y = y(a._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [a, y] : o.mutableSourceEagerHydrationData.push(a, y);
      }
    this._internalRoot = o;
  }
  od.prototype.render = function(n) {
    Js(n, this._internalRoot, null, null);
  }, od.prototype.unmount = function() {
    var n = this._internalRoot, a = n.containerInfo;
    Js(null, n, null, function() {
      a[Zn] = null;
    });
  };
  function Mu(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function my(n, a) {
    if (a || (a = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, a = !(!a || a.nodeType !== 1 || !a.hasAttribute("data-reactroot"))), !a)
      for (var o; o = n.lastChild; )
        n.removeChild(o);
    return new od(n, 0, a ? { hydrate: !0 } : void 0);
  }
  function nc(n, a, o, d, y) {
    var S = o._reactRootContainer;
    if (S) {
      var T = S._internalRoot;
      if (typeof y == "function") {
        var k = y;
        y = function() {
          var ee = ec(T);
          k.call(ee);
        };
      }
      Js(a, T, n, y);
    } else {
      if (S = o._reactRootContainer = my(o, d), T = S._internalRoot, typeof y == "function") {
        var U = y;
        y = function() {
          var ee = ec(T);
          U.call(ee);
        };
      }
      Ov(function() {
        Js(a, T, n, y);
      });
    }
    return ec(T);
  }
  vp = function(n) {
    if (n.tag === 13) {
      var a = Sr();
      Ri(n, 4, a), tc(n, 4);
    }
  }, Il = function(n) {
    if (n.tag === 13) {
      var a = Sr();
      Ri(n, 67108864, a), tc(n, 67108864);
    }
  }, hp = function(n) {
    if (n.tag === 13) {
      var a = Sr(), o = ya(n);
      Ri(n, o, a), tc(n, o);
    }
  }, Fo = function(n, a) {
    return a();
  }, Wr = function(n, a, o) {
    switch (a) {
      case "input":
        if (xn(n, o), a = o.name, o.type === "radio" && a != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < o.length; a++) {
            var d = o[a];
            if (d !== n && d.form === n.form) {
              var y = ja(d);
              if (!y)
                throw Error(f(90));
              mn(d), xn(d, y);
            }
          }
        }
        break;
      case "textarea":
        Vr(n, o);
        break;
      case "select":
        a = o.value, a != null && Ot(n, !!o.multiple, a, !1);
    }
  }, L = Rv, ye = function(n, a, o, d, y) {
    var S = ct;
    ct |= 4;
    try {
      return ao(98, n.bind(null, a, o, d, y));
    } finally {
      ct = S, ct === 0 && (El(), Dn());
    }
  }, je = function() {
    !(ct & 49) && (uy(), ki());
  }, et = function(n, a) {
    var o = ct;
    ct |= 2;
    try {
      return n(a);
    } finally {
      ct = o, ct === 0 && (El(), Dn());
    }
  };
  function $v(n, a) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mu(a))
      throw Error(f(200));
    return Zs(n, a, null, o);
  }
  var yy = { Events: [gr, Jn, ja, Tr, qi, ki, { current: !1 }] }, Au = { findFiberByHostInstance: no, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, gy = { bundleType: Au.bundleType, version: Au.version, rendererPackageName: Au.rendererPackageName, rendererConfig: Au.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: j.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = cs(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Au.findFiberByHostInstance || Lv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rc.isDisabled && rc.supportsFiber)
      try {
        Ef = rc.inject(gy), ro = rc;
      } catch {
      }
  }
  return ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy, ra.createPortal = $v, ra.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(f(188)) : Error(f(268, Object.keys(n)));
    return n = cs(a), n = n === null ? null : n.stateNode, n;
  }, ra.flushSync = function(n, a) {
    var o = ct;
    if (o & 48)
      return n(a);
    ct |= 1;
    try {
      if (n)
        return ao(99, n.bind(null, a));
    } finally {
      ct = o, Dn();
    }
  }, ra.hydrate = function(n, a, o) {
    if (!Mu(a))
      throw Error(f(200));
    return nc(null, n, a, !0, o);
  }, ra.render = function(n, a, o) {
    if (!Mu(a))
      throw Error(f(200));
    return nc(null, n, a, !1, o);
  }, ra.unmountComponentAtNode = function(n) {
    if (!Mu(n))
      throw Error(f(40));
    return n._reactRootContainer ? (Ov(function() {
      nc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Zn] = null;
      });
    }), !0) : !1;
  }, ra.unstable_batchedUpdates = Rv, ra.unstable_createPortal = function(n, a) {
    return $v(n, a, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, ra.unstable_renderSubtreeIntoContainer = function(n, a, o, d) {
    if (!Mu(o))
      throw Error(f(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(f(38));
    return nc(n, a, o, !1, d);
  }, ra.version = "17.0.2", ra;
}
function zw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (zw(), uE.exports = DM()) : uE.exports = kM();
var NM = uE.exports;
const ts = /* @__PURE__ */ rp(NM), nw = {
  disabled: !1
};
var _M = process.env.NODE_ENV !== "production" ? xe.oneOfType([xe.number, xe.shape({
  enter: xe.number,
  exit: xe.number,
  appear: xe.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && xe.oneOfType([xe.string, xe.shape({
  enter: xe.string,
  exit: xe.string,
  active: xe.string
}), xe.shape({
  enter: xe.string,
  enterDone: xe.string,
  enterActive: xe.string,
  exit: xe.string,
  exitDone: xe.string,
  exitActive: xe.string
})]);
const Iw = on.createContext(null);
var MM = function(u) {
  return u.scrollTop;
}, Kd = "unmounted", jl = "exited", Ta = "entering", _o = "entered", Lc = "exiting", Uo = /* @__PURE__ */ function(l) {
  aM(u, l);
  function u(f, v) {
    var h;
    h = l.call(this, f, v) || this;
    var m = v, C = m && !m.isMounting ? f.enter : f.appear, b;
    return h.appearStatus = null, f.in ? C ? (b = jl, h.appearStatus = Ta) : b = _o : f.unmountOnExit || f.mountOnEnter ? b = Kd : b = jl, h.state = {
      status: b
    }, h.nextCallback = null, h;
  }
  u.getDerivedStateFromProps = function(v, h) {
    var m = v.in;
    return m && h.status === Kd ? {
      status: jl
    } : null;
  };
  var c = u.prototype;
  return c.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, c.componentDidUpdate = function(v) {
    var h = null;
    if (v !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== Ta && m !== _o && (h = Ta) : (m === Ta || m === _o) && (h = Lc);
    }
    this.updateStatus(!1, h);
  }, c.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, c.getTimeouts = function() {
    var v = this.props.timeout, h, m, C;
    return h = m = C = v, v != null && typeof v != "number" && (h = v.exit, m = v.enter, C = v.appear !== void 0 ? v.appear : m), {
      exit: h,
      enter: m,
      appear: C
    };
  }, c.updateStatus = function(v, h) {
    if (v === void 0 && (v = !1), h !== null)
      if (this.cancelNextCallback(), h === Ta) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this);
          m && MM(m);
        }
        this.performEnter(v);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === jl && this.setState({
        status: Kd
      });
  }, c.performEnter = function(v) {
    var h = this, m = this.props.enter, C = this.context ? this.context.isMounting : v, b = this.props.nodeRef ? [C] : [ts.findDOMNode(this), C], w = b[0], R = b[1], O = this.getTimeouts(), M = C ? O.appear : O.enter;
    if (!v && !m || nw.disabled) {
      this.safeSetState({
        status: _o
      }, function() {
        h.props.onEntered(w);
      });
      return;
    }
    this.props.onEnter(w, R), this.safeSetState({
      status: Ta
    }, function() {
      h.props.onEntering(w, R), h.onTransitionEnd(M, function() {
        h.safeSetState({
          status: _o
        }, function() {
          h.props.onEntered(w, R);
        });
      });
    });
  }, c.performExit = function() {
    var v = this, h = this.props.exit, m = this.getTimeouts(), C = this.props.nodeRef ? void 0 : ts.findDOMNode(this);
    if (!h || nw.disabled) {
      this.safeSetState({
        status: jl
      }, function() {
        v.props.onExited(C);
      });
      return;
    }
    this.props.onExit(C), this.safeSetState({
      status: Lc
    }, function() {
      v.props.onExiting(C), v.onTransitionEnd(m.exit, function() {
        v.safeSetState({
          status: jl
        }, function() {
          v.props.onExited(C);
        });
      });
    });
  }, c.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, c.safeSetState = function(v, h) {
    h = this.setNextCallback(h), this.setState(v, h);
  }, c.setNextCallback = function(v) {
    var h = this, m = !0;
    return this.nextCallback = function(C) {
      m && (m = !1, h.nextCallback = null, v(C));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, c.onTransitionEnd = function(v, h) {
    this.setNextCallback(h);
    var m = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this), C = v == null && !this.props.addEndListener;
    if (!m || C) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var b = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], w = b[0], R = b[1];
      this.props.addEndListener(w, R);
    }
    v != null && setTimeout(this.nextCallback, v);
  }, c.render = function() {
    var v = this.state.status;
    if (v === Kd)
      return null;
    var h = this.props, m = h.children;
    h.in, h.mountOnEnter, h.unmountOnExit, h.appear, h.enter, h.exit, h.timeout, h.addEndListener, h.onEnter, h.onEntering, h.onEntered, h.onExit, h.onExiting, h.onExited, h.nodeRef;
    var C = jw(h, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ on.createElement(Iw.Provider, {
        value: null
      }, typeof m == "function" ? m(v, C) : on.cloneElement(on.Children.only(m), C))
    );
  }, u;
}(on.Component);
Uo.contextType = Iw;
Uo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: xe.shape({
    current: typeof Element > "u" ? xe.any : function(l, u, c, f, v, h) {
      var m = l[u];
      return xe.instanceOf(m && "ownerDocument" in m ? m.ownerDocument.defaultView.Element : Element)(l, u, c, f, v, h);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: xe.oneOfType([xe.func.isRequired, xe.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: xe.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: xe.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: xe.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: xe.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: xe.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: xe.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(u) {
    var c = _M;
    u.addEndListener || (c = c.isRequired);
    for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
      v[h - 1] = arguments[h];
    return c.apply(void 0, [u].concat(v));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: xe.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: xe.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: xe.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: xe.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: xe.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: xe.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: xe.func
} : {};
function _c() {
}
Uo.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _c,
  onEntering: _c,
  onEntered: _c,
  onExit: _c,
  onExiting: _c,
  onExited: _c
};
Uo.UNMOUNTED = Kd;
Uo.EXITED = jl;
Uo.ENTERING = Ta;
Uo.ENTERED = _o;
Uo.EXITING = Lc;
const Hc = !!(typeof window < "u" && window.document && window.document.createElement);
var sE = !1, cE = !1;
try {
  var Z0 = {
    get passive() {
      return sE = !0;
    },
    get once() {
      return cE = sE = !0;
    }
  };
  Hc && (window.addEventListener("test", Z0, Z0), window.removeEventListener("test", Z0, !0));
} catch {
}
function OE(l, u, c, f) {
  if (f && typeof f != "boolean" && !cE) {
    var v = f.once, h = f.capture, m = c;
    !cE && v && (m = c.__once || function C(b) {
      this.removeEventListener(u, C, h), c.call(this, b);
    }, c.__once = m), l.addEventListener(u, m, sE ? f : h);
  }
  l.addEventListener(u, c, f);
}
function fE(l, u, c, f) {
  var v = f && typeof f != "boolean" ? f.capture : f;
  l.removeEventListener(u, c, v), c.__once && l.removeEventListener(u, c.__once, v);
}
function Mo(l, u, c, f) {
  return OE(l, u, c, f), function() {
    fE(l, u, c, f);
  };
}
function AM(l, u, c, f) {
  if (c === void 0 && (c = !1), f === void 0 && (f = !0), l) {
    var v = document.createEvent("HTMLEvents");
    v.initEvent(u, c, f), l.dispatchEvent(v);
  }
}
function jM(l) {
  var u = Ao(l, "transitionDuration") || "", c = u.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(u) * c;
}
function LM(l, u, c) {
  c === void 0 && (c = 5);
  var f = !1, v = setTimeout(function() {
    f || AM(l, "transitionend", !0);
  }, u + c), h = Mo(l, "transitionend", function() {
    f = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(v), h();
  };
}
function Pw(l, u, c, f) {
  c == null && (c = jM(l) || 0);
  var v = LM(l, c, f), h = Mo(l, "transitionend", u);
  return function() {
    v(), h();
  };
}
function rw(l, u) {
  const c = Ao(l, u) || "", f = c.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(c) * f;
}
function Rm(l, u) {
  const c = rw(l, "transitionDuration"), f = rw(l, "transitionDelay"), v = Pw(l, (h) => {
    h.target === l && (v(), u(h));
  }, c + f);
}
function jc(...l) {
  return l.filter((u) => u != null).reduce((u, c) => {
    if (typeof c != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return u === null ? c : function(...v) {
      u.apply(this, v), c.apply(this, v);
    };
  }, null);
}
function kE(l) {
  l.offsetHeight;
}
const aw = (l) => !l || typeof l == "function" ? l : (u) => {
  l.current = u;
};
function $M(l, u) {
  const c = aw(l), f = aw(u);
  return (v) => {
    c && c(v), f && f(v);
  };
}
function Za(l, u) {
  return Zt(() => $M(l, u), [l, u]);
}
function Sm(l) {
  return l && "setState" in l ? ts.findDOMNode(l) : l ?? null;
}
const UM = /* @__PURE__ */ on.forwardRef(({
  onEnter: l,
  onEntering: u,
  onEntered: c,
  onExit: f,
  onExiting: v,
  onExited: h,
  addEndListener: m,
  children: C,
  childRef: b,
  ...w
}, R) => {
  const O = Et(null), M = Za(O, b), _ = (Q) => {
    M(Sm(Q));
  }, $ = (Q) => (ne) => {
    Q && O.current && Q(O.current, ne);
  }, Y = Ct($(l), [l]), z = Ct($(u), [u]), te = Ct($(c), [c]), J = Ct($(f), [f]), P = Ct($(v), [v]), q = Ct($(h), [h]), j = Ct($(m), [m]);
  return /* @__PURE__ */ A.jsx(Uo, {
    ref: R,
    ...w,
    onEnter: Y,
    onEntered: te,
    onEntering: z,
    onExit: J,
    onExited: q,
    onExiting: P,
    addEndListener: j,
    nodeRef: O,
    children: typeof C == "function" ? (Q, ne) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      C(Q, {
        ...ne,
        ref: _
      })
    ) : /* @__PURE__ */ on.cloneElement(C, {
      ref: _
    })
  });
}), Om = UM, FM = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function zM(l, u) {
  const c = `offset${l[0].toUpperCase()}${l.slice(1)}`, f = u[c], v = FM[l];
  return f + // @ts-ignore
  parseInt(Ao(u, v[0]), 10) + // @ts-ignore
  parseInt(Ao(u, v[1]), 10);
}
const IM = {
  [jl]: "collapse",
  [Lc]: "collapsing",
  [Ta]: "collapsing",
  [_o]: "collapse show"
}, PM = /* @__PURE__ */ on.forwardRef(({
  onEnter: l,
  onEntering: u,
  onEntered: c,
  onExit: f,
  onExiting: v,
  className: h,
  children: m,
  dimension: C = "height",
  in: b = !1,
  timeout: w = 300,
  mountOnEnter: R = !1,
  unmountOnExit: O = !1,
  appear: M = !1,
  getDimensionValue: _ = zM,
  ...$
}, Y) => {
  const z = typeof C == "function" ? C() : C, te = Zt(() => jc((Q) => {
    Q.style[z] = "0";
  }, l), [z, l]), J = Zt(() => jc((Q) => {
    const ne = `scroll${z[0].toUpperCase()}${z.slice(1)}`;
    Q.style[z] = `${Q[ne]}px`;
  }, u), [z, u]), P = Zt(() => jc((Q) => {
    Q.style[z] = null;
  }, c), [z, c]), q = Zt(() => jc((Q) => {
    Q.style[z] = `${_(z, Q)}px`, kE(Q);
  }, f), [f, _, z]), j = Zt(() => jc((Q) => {
    Q.style[z] = null;
  }, v), [z, v]);
  return /* @__PURE__ */ A.jsx(Om, {
    ref: Y,
    addEndListener: Rm,
    ...$,
    "aria-expanded": $.role ? b : null,
    onEnter: te,
    onEntering: J,
    onEntered: P,
    onExit: q,
    onExiting: j,
    childRef: m.ref,
    in: b,
    timeout: w,
    mountOnEnter: R,
    unmountOnExit: O,
    appear: M,
    children: (Q, ne) => /* @__PURE__ */ on.cloneElement(m, {
      ...ne,
      className: de(h, m.props.className, IM[Q], z === "width" && "collapse-horizontal")
    })
  });
}), Bw = PM;
function Hw(l, u) {
  return Array.isArray(l) ? l.includes(u) : l === u;
}
const Vw = /* @__PURE__ */ Z.createContext({});
Vw.displayName = "AccordionContext";
const km = Vw, Ww = /* @__PURE__ */ Z.forwardRef(({
  as: l = "div",
  bsPrefix: u,
  className: c,
  children: f,
  eventKey: v,
  ...h
}, m) => {
  const {
    activeEventKey: C
  } = yt(km);
  return u = be(u, "accordion-collapse"), /* @__PURE__ */ A.jsx(Bw, {
    ref: m,
    in: Hw(C, v),
    ...h,
    className: de(c, u),
    children: /* @__PURE__ */ A.jsx(l, {
      children: Z.Children.only(f)
    })
  });
});
Ww.displayName = "AccordionCollapse";
const Yw = Ww, qw = /* @__PURE__ */ Z.createContext({
  eventKey: ""
});
qw.displayName = "AccordionItemContext";
const DE = qw, Gw = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  bsPrefix: u,
  className: c,
  onEnter: f,
  onEntering: v,
  onEntered: h,
  onExit: m,
  onExiting: C,
  onExited: b,
  ...w
}, R) => {
  u = be(u, "accordion-body");
  const {
    eventKey: O
  } = yt(DE);
  return /* @__PURE__ */ A.jsx(Yw, {
    eventKey: O,
    onEnter: f,
    onEntering: v,
    onEntered: h,
    onExit: m,
    onExiting: C,
    onExited: b,
    children: /* @__PURE__ */ A.jsx(l, {
      ref: R,
      ...w,
      className: de(c, u)
    })
  });
});
Gw.displayName = "AccordionBody";
const BM = Gw;
function HM(l, u) {
  const {
    activeEventKey: c,
    onSelect: f,
    alwaysOpen: v
  } = yt(km);
  return (h) => {
    let m = l === c ? null : l;
    v && (Array.isArray(c) ? c.includes(l) ? m = c.filter((C) => C !== l) : m = [...c, l] : m = [l]), f == null || f(m, h), u == null || u(h);
  };
}
const Kw = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "button",
  bsPrefix: u,
  className: c,
  onClick: f,
  ...v
}, h) => {
  u = be(u, "accordion-button");
  const {
    eventKey: m
  } = yt(DE), C = HM(m, f), {
    activeEventKey: b
  } = yt(km);
  return l === "button" && (v.type = "button"), /* @__PURE__ */ A.jsx(l, {
    ref: h,
    onClick: C,
    ...v,
    "aria-expanded": Array.isArray(b) ? b.includes(m) : m === b,
    className: de(c, u, !Hw(b, m) && "collapsed")
  });
});
Kw.displayName = "AccordionButton";
const Qw = Kw, Xw = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "h2",
  bsPrefix: u,
  className: c,
  children: f,
  onClick: v,
  ...h
}, m) => (u = be(u, "accordion-header"), /* @__PURE__ */ A.jsx(l, {
  ref: m,
  ...h,
  className: de(c, u),
  children: /* @__PURE__ */ A.jsx(Qw, {
    onClick: v,
    children: f
  })
})));
Xw.displayName = "AccordionHeader";
const VM = Xw, Zw = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  bsPrefix: u,
  className: c,
  eventKey: f,
  ...v
}, h) => {
  u = be(u, "accordion-item");
  const m = Zt(() => ({
    eventKey: f
  }), [f]);
  return /* @__PURE__ */ A.jsx(DE.Provider, {
    value: m,
    children: /* @__PURE__ */ A.jsx(l, {
      ref: h,
      ...v,
      className: de(c, u)
    })
  });
});
Zw.displayName = "AccordionItem";
const WM = Zw, Jw = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: c = "div",
    activeKey: f,
    bsPrefix: v,
    className: h,
    onSelect: m,
    flush: C,
    alwaysOpen: b,
    ...w
  } = $o(l, {
    activeKey: "onSelect"
  }), R = be(v, "accordion"), O = Zt(() => ({
    activeEventKey: f,
    onSelect: m,
    alwaysOpen: b
  }), [f, m, b]);
  return /* @__PURE__ */ A.jsx(km.Provider, {
    value: O,
    children: /* @__PURE__ */ A.jsx(c, {
      ref: u,
      ...w,
      className: de(h, R, C && `${R}-flush`)
    })
  });
});
Jw.displayName = "Accordion";
const cU = Object.assign(Jw, {
  Button: Qw,
  Collapse: Yw,
  Item: WM,
  Header: VM,
  Body: BM
});
function eT(l) {
  const u = Et(l);
  return ln(() => {
    u.current = l;
  }, [l]), u;
}
function qt(l) {
  const u = eT(l);
  return Ct(function(...c) {
    return u.current && u.current(...c);
  }, [u]);
}
const lp = (l) => /* @__PURE__ */ Z.forwardRef((u, c) => /* @__PURE__ */ A.jsx("div", {
  ...u,
  ref: c,
  className: de(u.className, l)
})), tT = lp("h4");
tT.displayName = "DivStyledAsH4";
const nT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = tT,
  ...f
}, v) => (u = be(u, "alert-heading"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
nT.displayName = "AlertHeading";
const YM = nT;
function bm() {
  return Hn(null);
}
function qM(l, u, c, f = !1) {
  const v = qt(c);
  ln(() => {
    const h = typeof l == "function" ? l() : l;
    return h.addEventListener(u, v, f), () => h.removeEventListener(u, v, f);
  }, [l]);
}
function NE() {
  const l = Et(!0), u = Et(() => l.current);
  return ln(() => (l.current = !0, () => {
    l.current = !1;
  }), []), u.current;
}
function rT(l) {
  const u = Et(null);
  return ln(() => {
    u.current = l;
  }), u.current;
}
const GM = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", KM = typeof document < "u", Jd = KM || GM ? _w : ln, QM = ["as", "disabled"];
function XM(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
function ZM(l) {
  return !l || l.trim() === "#";
}
function _E({
  tagName: l,
  disabled: u,
  href: c,
  target: f,
  rel: v,
  role: h,
  onClick: m,
  tabIndex: C = 0,
  type: b
}) {
  l || (c != null || f != null || v != null ? l = "a" : l = "button");
  const w = {
    tagName: l
  };
  if (l === "button")
    return [{
      type: b || "button",
      disabled: u
    }, w];
  const R = (M) => {
    if ((u || l === "a" && ZM(c)) && M.preventDefault(), u) {
      M.stopPropagation();
      return;
    }
    m == null || m(M);
  }, O = (M) => {
    M.key === " " && (M.preventDefault(), R(M));
  };
  return l === "a" && (c || (c = "#"), u && (c = void 0)), [{
    role: h ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: u ? void 0 : C,
    href: c,
    target: l === "a" ? f : void 0,
    "aria-disabled": u || void 0,
    rel: l === "a" ? v : void 0,
    onClick: R,
    onKeyDown: O
  }, w];
}
const ME = /* @__PURE__ */ Z.forwardRef((l, u) => {
  let {
    as: c,
    disabled: f
  } = l, v = XM(l, QM);
  const [h, {
    tagName: m
  }] = _E(Object.assign({
    tagName: c,
    disabled: f
  }, v));
  return /* @__PURE__ */ A.jsx(m, Object.assign({}, v, h, {
    ref: u
  }));
});
ME.displayName = "Button";
const JM = ["onKeyDown"];
function eA(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
function tA(l) {
  return !l || l.trim() === "#";
}
const aT = /* @__PURE__ */ Z.forwardRef((l, u) => {
  let {
    onKeyDown: c
  } = l, f = eA(l, JM);
  const [v] = _E(Object.assign({
    tagName: "a"
  }, f)), h = qt((m) => {
    v.onKeyDown(m), c == null || c(m);
  });
  return tA(f.href) || f.role === "button" ? /* @__PURE__ */ A.jsx("a", Object.assign({
    ref: u
  }, f, v, {
    onKeyDown: h
  })) : /* @__PURE__ */ A.jsx("a", Object.assign({
    ref: u
  }, f, {
    onKeyDown: c
  }));
});
aT.displayName = "Anchor";
const rs = aT, iT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = rs,
  ...f
}, v) => (u = be(u, "alert-link"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
iT.displayName = "AlertLink";
const nA = iT, rA = {
  [Ta]: "show",
  [_o]: "show"
}, oT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  children: u,
  transitionClasses: c = {},
  onEnter: f,
  ...v
}, h) => {
  const m = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...v
  }, C = Ct((b, w) => {
    kE(b), f == null || f(b, w);
  }, [f]);
  return /* @__PURE__ */ A.jsx(Om, {
    ref: h,
    addEndListener: Rm,
    ...m,
    onEnter: C,
    childRef: u.ref,
    children: (b, w) => /* @__PURE__ */ Z.cloneElement(u, {
      ...w,
      className: de("fade", l, u.props.className, rA[b], c[b])
    })
  });
});
oT.displayName = "Fade";
const Wi = oT, aA = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": xe.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: xe.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: xe.oneOf(["white"])
}, AE = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  variant: u,
  "aria-label": c = "Close",
  ...f
}, v) => /* @__PURE__ */ A.jsx("button", {
  ref: v,
  type: "button",
  className: de("btn-close", u && `btn-close-${u}`, l),
  "aria-label": c,
  ...f
}));
AE.displayName = "CloseButton";
AE.propTypes = aA;
const jE = AE, lT = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    bsPrefix: c,
    show: f = !0,
    closeLabel: v = "Close alert",
    closeVariant: h,
    className: m,
    children: C,
    variant: b = "primary",
    onClose: w,
    dismissible: R,
    transition: O = Wi,
    ...M
  } = $o(l, {
    show: "onClose"
  }), _ = be(c, "alert"), $ = qt((te) => {
    w && w(!1, te);
  }), Y = O === !0 ? Wi : O, z = /* @__PURE__ */ A.jsxs("div", {
    role: "alert",
    ...Y ? void 0 : M,
    ref: u,
    className: de(m, _, b && `${_}-${b}`, R && `${_}-dismissible`),
    children: [R && /* @__PURE__ */ A.jsx(jE, {
      onClick: $,
      "aria-label": v,
      variant: h
    }), C]
  });
  return Y ? /* @__PURE__ */ A.jsx(Y, {
    unmountOnExit: !0,
    ...M,
    ref: void 0,
    in: f,
    children: z
  }) : f ? z : null;
});
lT.displayName = "Alert";
const fU = Object.assign(lT, {
  Link: nA,
  Heading: YM
}), uT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  bg: u = "primary",
  pill: c = !1,
  text: f,
  className: v,
  as: h = "span",
  ...m
}, C) => {
  const b = be(l, "badge");
  return /* @__PURE__ */ A.jsx(h, {
    ref: C,
    ...m,
    className: de(v, b, c && "rounded-pill", f && `text-${f}`, u && `bg-${u}`)
  });
});
uT.displayName = "Badge";
const dU = uT, sT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  active: u = !1,
  children: c,
  className: f,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "li",
  linkAs: h = rs,
  linkProps: m = {},
  href: C,
  title: b,
  target: w,
  ...R
}, O) => {
  const M = be(l, "breadcrumb-item");
  return /* @__PURE__ */ A.jsx(v, {
    ref: O,
    ...R,
    className: de(M, f, {
      active: u
    }),
    "aria-current": u ? "page" : void 0,
    children: u ? c : /* @__PURE__ */ A.jsx(h, {
      ...m,
      href: C,
      title: b,
      target: w,
      children: c
    })
  });
});
sT.displayName = "BreadcrumbItem";
const iA = sT, cT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  listProps: c = {},
  children: f,
  label: v = "breadcrumb",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: h = "nav",
  ...m
}, C) => {
  const b = be(l, "breadcrumb");
  return /* @__PURE__ */ A.jsx(h, {
    "aria-label": v,
    className: u,
    ref: C,
    ...m,
    children: /* @__PURE__ */ A.jsx("ol", {
      ...c,
      className: de(b, c == null ? void 0 : c.className),
      children: f
    })
  });
});
cT.displayName = "Breadcrumb";
const pU = Object.assign(cT, {
  Item: iA
}), fT = /* @__PURE__ */ Z.forwardRef(({
  as: l,
  bsPrefix: u,
  variant: c = "primary",
  size: f,
  active: v = !1,
  disabled: h = !1,
  className: m,
  ...C
}, b) => {
  const w = be(u, "btn"), [R, {
    tagName: O
  }] = _E({
    tagName: l,
    disabled: h,
    ...C
  }), M = O;
  return /* @__PURE__ */ A.jsx(M, {
    ...R,
    ...C,
    ref: b,
    disabled: h,
    className: de(m, w, v && "active", c && `${w}-${c}`, f && `${w}-${f}`, C.href && h && "disabled")
  });
});
fT.displayName = "Button";
const Dm = fT, dT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  size: u,
  vertical: c = !1,
  className: f,
  role: v = "group",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: h = "div",
  ...m
}, C) => {
  const b = be(l, "btn-group");
  let w = b;
  return c && (w = `${b}-vertical`), /* @__PURE__ */ A.jsx(h, {
    ...m,
    ref: C,
    role: v,
    className: de(f, w, u && `${b}-${u}`)
  });
});
dT.displayName = "ButtonGroup";
const pT = dT, vT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  role: c = "toolbar",
  ...f
}, v) => {
  const h = be(l, "btn-toolbar");
  return /* @__PURE__ */ A.jsx("div", {
    ...f,
    ref: v,
    className: de(u, h),
    role: c
  });
});
vT.displayName = "ButtonToolbar";
const vU = vT, hT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "card-body"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
hT.displayName = "CardBody";
const mT = hT, yT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "card-footer"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
yT.displayName = "CardFooter";
const oA = yT, gT = /* @__PURE__ */ Z.createContext(null);
gT.displayName = "CardHeaderContext";
const ET = gT, ST = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "div",
  ...f
}, v) => {
  const h = be(l, "card-header"), m = Zt(() => ({
    cardHeaderBsPrefix: h
  }), [h]);
  return /* @__PURE__ */ A.jsx(ET.Provider, {
    value: m,
    children: /* @__PURE__ */ A.jsx(c, {
      ref: v,
      ...f,
      className: de(u, h)
    })
  });
});
ST.displayName = "CardHeader";
const lA = ST, bT = /* @__PURE__ */ Z.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: l,
    className: u,
    variant: c,
    as: f = "img",
    ...v
  }, h) => {
    const m = be(l, "card-img");
    return /* @__PURE__ */ A.jsx(f, {
      ref: h,
      className: de(c ? `${m}-${c}` : m, u),
      ...v
    });
  }
);
bT.displayName = "CardImg";
const uA = bT, CT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "card-img-overlay"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
CT.displayName = "CardImgOverlay";
const sA = CT, xT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "a",
  ...f
}, v) => (u = be(u, "card-link"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
xT.displayName = "CardLink";
const cA = xT, fA = lp("h6"), wT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = fA,
  ...f
}, v) => (u = be(u, "card-subtitle"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
wT.displayName = "CardSubtitle";
const dA = wT, TT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "p",
  ...f
}, v) => (u = be(u, "card-text"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
TT.displayName = "CardText";
const pA = TT, vA = lp("h5"), RT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = vA,
  ...f
}, v) => (u = be(u, "card-title"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
RT.displayName = "CardTitle";
const hA = RT, OT = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  bg: c,
  text: f,
  border: v,
  body: h = !1,
  children: m,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: C = "div",
  ...b
}, w) => {
  const R = be(l, "card");
  return /* @__PURE__ */ A.jsx(C, {
    ref: w,
    ...b,
    className: de(u, R, c && `bg-${c}`, f && `text-${f}`, v && `border-${v}`),
    children: h ? /* @__PURE__ */ A.jsx(mT, {
      children: m
    }) : m
  });
});
OT.displayName = "Card";
const hU = Object.assign(OT, {
  Img: uA,
  Title: hA,
  Subtitle: dA,
  Body: mT,
  Link: cA,
  Text: pA,
  Header: lA,
  Footer: oA,
  ImgOverlay: sA
}), kT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "card-group"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
kT.displayName = "CardGroup";
const mU = kT;
function mA(l, u) {
  const c = Et(!0);
  ln(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    return l();
  }, u);
}
function yA(l) {
  const u = Et(l);
  return u.current = l, u;
}
function LE(l) {
  const u = yA(l);
  ln(() => () => u.current(), []);
}
const dE = 2 ** 31 - 1;
function DT(l, u, c) {
  const f = c - Date.now();
  l.current = f <= dE ? setTimeout(u, f) : setTimeout(() => DT(l, u, c), dE);
}
function $E() {
  const l = NE(), u = Et();
  return LE(() => clearTimeout(u.current)), Zt(() => {
    const c = () => clearTimeout(u.current);
    function f(v, h = 0) {
      l() && (c(), h <= dE ? u.current = setTimeout(v, h) : DT(u, v, Date.now() + h));
    }
    return {
      set: f,
      clear: c,
      handleRef: u
    };
  }, []);
}
const NT = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "carousel-caption"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
NT.displayName = "CarouselCaption";
const gA = NT, _T = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  bsPrefix: u,
  className: c,
  ...f
}, v) => {
  const h = de(c, be(u, "carousel-item"));
  return /* @__PURE__ */ A.jsx(l, {
    ref: v,
    ...f,
    className: h
  });
});
_T.displayName = "CarouselItem";
const EA = _T;
function $c(l, u) {
  let c = 0;
  return Z.Children.map(l, (f) => /* @__PURE__ */ Z.isValidElement(f) ? u(f, c++) : f);
}
function MT(l, u) {
  let c = 0;
  Z.Children.forEach(l, (f) => {
    /* @__PURE__ */ Z.isValidElement(f) && u(f, c++);
  });
}
function SA(l, u) {
  return Z.Children.toArray(l).some((c) => /* @__PURE__ */ Z.isValidElement(c) && c.type === u);
}
const bA = 40;
function CA(l) {
  if (!l || !l.style || !l.parentNode || !l.parentNode.style)
    return !1;
  const u = getComputedStyle(l);
  return u.display !== "none" && u.visibility !== "hidden" && getComputedStyle(l.parentNode).display !== "none";
}
const AT = /* @__PURE__ */ Z.forwardRef(({
  defaultActiveIndex: l = 0,
  ...u
}, c) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: f = "div",
    bsPrefix: v,
    slide: h = !0,
    fade: m = !1,
    controls: C = !0,
    indicators: b = !0,
    indicatorLabels: w = [],
    activeIndex: R,
    onSelect: O,
    onSlide: M,
    onSlid: _,
    interval: $ = 5e3,
    keyboard: Y = !0,
    onKeyDown: z,
    pause: te = "hover",
    onMouseOver: J,
    onMouseOut: P,
    wrap: q = !0,
    touch: j = !0,
    onTouchStart: Q,
    onTouchMove: ne,
    onTouchEnd: ce,
    prevIcon: Te = /* @__PURE__ */ A.jsx("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel: Ne = "Previous",
    nextIcon: we = /* @__PURE__ */ A.jsx("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel: De = "Next",
    variant: Oe,
    className: Me,
    children: Ae,
    ...Be
  } = $o({
    defaultActiveIndex: l,
    ...u
  }, {
    activeIndex: "onSelect"
  }), Ze = be(v, "carousel"), Ke = op(), nt = Et(null), [re, W] = Hn("next"), [le, ae] = Hn(!1), [ge, Ce] = Hn(!1), [Ee, Ie] = Hn(R || 0);
  ln(() => {
    !ge && R !== Ee && (nt.current ? W(nt.current) : W((R || 0) > Ee ? "next" : "prev"), h && Ce(!0), Ie(R || 0));
  }, [R, ge, Ee, h]), ln(() => {
    nt.current && (nt.current = null);
  });
  let Re = 0, Pe;
  MT(Ae, (ve, Ue) => {
    ++Re, Ue === R && (Pe = ve.props.interval);
  });
  const Qe = eT(Pe), Ge = Ct((ve) => {
    if (ge)
      return;
    let Ue = Ee - 1;
    if (Ue < 0) {
      if (!q)
        return;
      Ue = Re - 1;
    }
    nt.current = "prev", O == null || O(Ue, ve);
  }, [ge, Ee, O, q, Re]), oe = qt((ve) => {
    if (ge)
      return;
    let Ue = Ee + 1;
    if (Ue >= Re) {
      if (!q)
        return;
      Ue = 0;
    }
    nt.current = "next", O == null || O(Ue, ve);
  }), kt = Et();
  Mw(c, () => ({
    element: kt.current,
    prev: Ge,
    next: oe
  }));
  const jt = qt(() => {
    !document.hidden && CA(kt.current) && (Ke ? Ge() : oe());
  }), Je = re === "next" ? "start" : "end";
  mA(() => {
    h || (M == null || M(Ee, Je), _ == null || _(Ee, Je));
  }, [Ee]);
  const mn = `${Ze}-item-${re}`, cn = `${Ze}-item-${Je}`, Cn = Ct((ve) => {
    kE(ve), M == null || M(Ee, Je);
  }, [M, Ee, Je]), vr = Ct(() => {
    Ce(!1), _ == null || _(Ee, Je);
  }, [_, Ee, Je]), un = Ct((ve) => {
    if (Y && !/input|textarea/i.test(ve.target.tagName))
      switch (ve.key) {
        case "ArrowLeft":
          ve.preventDefault(), Ke ? oe(ve) : Ge(ve);
          return;
        case "ArrowRight":
          ve.preventDefault(), Ke ? Ge(ve) : oe(ve);
          return;
      }
    z == null || z(ve);
  }, [Y, z, Ge, oe, Ke]), xn = Ct((ve) => {
    te === "hover" && ae(!0), J == null || J(ve);
  }, [te, J]), ar = Ct((ve) => {
    ae(!1), P == null || P(ve);
  }, [P]), wn = Et(0), hn = Et(0), it = $E(), Ot = Ct((ve) => {
    wn.current = ve.touches[0].clientX, hn.current = 0, te === "hover" && ae(!0), Q == null || Q(ve);
  }, [te, Q]), Mt = Ct((ve) => {
    ve.touches && ve.touches.length > 1 ? hn.current = 0 : hn.current = ve.touches[0].clientX - wn.current, ne == null || ne(ve);
  }, [ne]), Hr = Ct((ve) => {
    if (j) {
      const Ue = hn.current;
      Math.abs(Ue) > bA && (Ue > 0 ? Ge(ve) : oe(ve));
    }
    te === "hover" && it.set(() => {
      ae(!1);
    }, $ || void 0), ce == null || ce(ve);
  }, [j, te, Ge, oe, it, $, ce]), Vr = $ != null && !le && !ge, xr = Et();
  ln(() => {
    var ve, Ue;
    if (!Vr)
      return;
    const mt = Ke ? Ge : oe;
    return xr.current = window.setInterval(document.visibilityState ? jt : mt, (ve = (Ue = Qe.current) != null ? Ue : $) != null ? ve : void 0), () => {
      xr.current !== null && clearInterval(xr.current);
    };
  }, [Vr, Ge, oe, Qe, $, jt, Ke]);
  const _e = Zt(() => b && Array.from({
    length: Re
  }, (ve, Ue) => (mt) => {
    O == null || O(Ue, mt);
  }), [b, Re, O]);
  return /* @__PURE__ */ A.jsxs(f, {
    ref: kt,
    ...Be,
    onKeyDown: un,
    onMouseOver: xn,
    onMouseOut: ar,
    onTouchStart: Ot,
    onTouchMove: Mt,
    onTouchEnd: Hr,
    className: de(Me, Ze, h && "slide", m && `${Ze}-fade`, Oe && `${Ze}-${Oe}`),
    children: [b && /* @__PURE__ */ A.jsx("div", {
      className: `${Ze}-indicators`,
      children: $c(Ae, (ve, Ue) => /* @__PURE__ */ A.jsx("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": w != null && w.length ? w[Ue] : `Slide ${Ue + 1}`,
        className: Ue === Ee ? "active" : void 0,
        onClick: _e ? _e[Ue] : void 0,
        "aria-current": Ue === Ee
      }, Ue))
    }), /* @__PURE__ */ A.jsx("div", {
      className: `${Ze}-inner`,
      children: $c(Ae, (ve, Ue) => {
        const mt = Ue === Ee;
        return h ? /* @__PURE__ */ A.jsx(Om, {
          in: mt,
          onEnter: mt ? Cn : void 0,
          onEntered: mt ? vr : void 0,
          addEndListener: Rm,
          children: (Nt, Ft) => /* @__PURE__ */ Z.cloneElement(ve, {
            ...Ft,
            className: de(ve.props.className, mt && Nt !== "entered" && mn, (Nt === "entered" || Nt === "exiting") && "active", (Nt === "entering" || Nt === "exiting") && cn)
          })
        }) : /* @__PURE__ */ Z.cloneElement(ve, {
          className: de(ve.props.className, mt && "active")
        });
      })
    }), C && /* @__PURE__ */ A.jsxs(A.Fragment, {
      children: [(q || R !== 0) && /* @__PURE__ */ A.jsxs(rs, {
        className: `${Ze}-control-prev`,
        onClick: Ge,
        children: [Te, Ne && /* @__PURE__ */ A.jsx("span", {
          className: "visually-hidden",
          children: Ne
        })]
      }), (q || R !== Re - 1) && /* @__PURE__ */ A.jsxs(rs, {
        className: `${Ze}-control-next`,
        onClick: oe,
        children: [we, De && /* @__PURE__ */ A.jsx("span", {
          className: "visually-hidden",
          children: De
        })]
      })]
    })]
  });
});
AT.displayName = "Carousel";
const yU = Object.assign(AT, {
  Caption: gA,
  Item: EA
});
function jT({
  as: l,
  bsPrefix: u,
  className: c,
  ...f
}) {
  u = be(u, "col");
  const v = wE(), h = TE(), m = [], C = [];
  return v.forEach((b) => {
    const w = f[b];
    delete f[b];
    let R, O, M;
    typeof w == "object" && w != null ? {
      span: R,
      offset: O,
      order: M
    } = w : R = w;
    const _ = b !== h ? `-${b}` : "";
    R && m.push(R === !0 ? `${u}${_}` : `${u}${_}-${R}`), M != null && C.push(`order${_}-${M}`), O != null && C.push(`offset${_}-${O}`);
  }), [{
    ...f,
    className: de(c, ...m, ...C)
  }, {
    as: l,
    bsPrefix: u,
    spans: m
  }];
}
const LT = /* @__PURE__ */ Z.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (l, u) => {
    const [{
      className: c,
      ...f
    }, {
      as: v = "div",
      bsPrefix: h,
      spans: m
    }] = jT(l);
    return /* @__PURE__ */ A.jsx(v, {
      ...f,
      ref: u,
      className: de(c, !m.length && h)
    });
  }
);
LT.displayName = "Col";
const xA = LT, $T = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  fluid: u = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "div",
  className: f,
  ...v
}, h) => {
  const m = be(l, "container"), C = typeof u == "string" ? `-${u}` : "-fluid";
  return /* @__PURE__ */ A.jsx(c, {
    ref: h,
    ...v,
    className: de(f, u ? `${m}${C}` : m)
  });
});
$T.displayName = "Container";
const gU = $T;
var wA = Function.prototype.bind.call(Function.prototype.call, [].slice);
function No(l, u) {
  return wA(l.querySelectorAll(u));
}
function UT(l, u, c) {
  const f = Et(l !== void 0), [v, h] = Hn(u), m = l !== void 0, C = f.current;
  return f.current = m, !m && C && v !== u && h(u), [m ? l : v, Ct((...b) => {
    const [w, ...R] = b;
    let O = c == null ? void 0 : c(w, ...R);
    return h(w), O;
  }, [c])];
}
function FT() {
  const [, l] = Q_((u) => !u, !1);
  return l;
}
const TA = /* @__PURE__ */ Z.createContext(null), Nm = TA;
var iw = Object.prototype.hasOwnProperty;
function ow(l, u, c) {
  for (c of l.keys())
    if (Qd(c, u))
      return c;
}
function Qd(l, u) {
  var c, f, v;
  if (l === u)
    return !0;
  if (l && u && (c = l.constructor) === u.constructor) {
    if (c === Date)
      return l.getTime() === u.getTime();
    if (c === RegExp)
      return l.toString() === u.toString();
    if (c === Array) {
      if ((f = l.length) === u.length)
        for (; f-- && Qd(l[f], u[f]); )
          ;
      return f === -1;
    }
    if (c === Set) {
      if (l.size !== u.size)
        return !1;
      for (f of l)
        if (v = f, v && typeof v == "object" && (v = ow(u, v), !v) || !u.has(v))
          return !1;
      return !0;
    }
    if (c === Map) {
      if (l.size !== u.size)
        return !1;
      for (f of l)
        if (v = f[0], v && typeof v == "object" && (v = ow(u, v), !v) || !Qd(f[1], u.get(v)))
          return !1;
      return !0;
    }
    if (c === ArrayBuffer)
      l = new Uint8Array(l), u = new Uint8Array(u);
    else if (c === DataView) {
      if ((f = l.byteLength) === u.byteLength)
        for (; f-- && l.getInt8(f) === u.getInt8(f); )
          ;
      return f === -1;
    }
    if (ArrayBuffer.isView(l)) {
      if ((f = l.byteLength) === u.byteLength)
        for (; f-- && l[f] === u[f]; )
          ;
      return f === -1;
    }
    if (!c || typeof l == "object") {
      f = 0;
      for (c in l)
        if (iw.call(l, c) && ++f && !iw.call(u, c) || !(c in u) || !Qd(l[c], u[c]))
          return !1;
      return Object.keys(u).length === f;
    }
  }
  return l !== l && u !== u;
}
function RA(l) {
  const u = NE();
  return [l[0], Ct((c) => {
    if (u())
      return l[1](c);
  }, [u, l[1]])];
}
var Pr = "top", Ra = "bottom", Oa = "right", Br = "left", UE = "auto", up = [Pr, Ra, Oa, Br], Uc = "start", ep = "end", OA = "clippingParents", zT = "viewport", Gd = "popper", kA = "reference", lw = /* @__PURE__ */ up.reduce(function(l, u) {
  return l.concat([u + "-" + Uc, u + "-" + ep]);
}, []), IT = /* @__PURE__ */ [].concat(up, [UE]).reduce(function(l, u) {
  return l.concat([u, u + "-" + Uc, u + "-" + ep]);
}, []), DA = "beforeRead", NA = "read", _A = "afterRead", MA = "beforeMain", AA = "main", jA = "afterMain", LA = "beforeWrite", $A = "write", UA = "afterWrite", FA = [DA, NA, _A, MA, AA, jA, LA, $A, UA];
function Hi(l) {
  return l.split("-")[0];
}
function aa(l) {
  if (l == null)
    return window;
  if (l.toString() !== "[object Window]") {
    var u = l.ownerDocument;
    return u && u.defaultView || window;
  }
  return l;
}
function as(l) {
  var u = aa(l).Element;
  return l instanceof u || l instanceof Element;
}
function Vi(l) {
  var u = aa(l).HTMLElement;
  return l instanceof u || l instanceof HTMLElement;
}
function FE(l) {
  if (typeof ShadowRoot > "u")
    return !1;
  var u = aa(l).ShadowRoot;
  return l instanceof u || l instanceof ShadowRoot;
}
var ns = Math.max, Cm = Math.min, Fc = Math.round;
function pE() {
  var l = navigator.userAgentData;
  return l != null && l.brands && Array.isArray(l.brands) ? l.brands.map(function(u) {
    return u.brand + "/" + u.version;
  }).join(" ") : navigator.userAgent;
}
function PT() {
  return !/^((?!chrome|android).)*safari/i.test(pE());
}
function zc(l, u, c) {
  u === void 0 && (u = !1), c === void 0 && (c = !1);
  var f = l.getBoundingClientRect(), v = 1, h = 1;
  u && Vi(l) && (v = l.offsetWidth > 0 && Fc(f.width) / l.offsetWidth || 1, h = l.offsetHeight > 0 && Fc(f.height) / l.offsetHeight || 1);
  var m = as(l) ? aa(l) : window, C = m.visualViewport, b = !PT() && c, w = (f.left + (b && C ? C.offsetLeft : 0)) / v, R = (f.top + (b && C ? C.offsetTop : 0)) / h, O = f.width / v, M = f.height / h;
  return {
    width: O,
    height: M,
    top: R,
    right: w + O,
    bottom: R + M,
    left: w,
    x: w,
    y: R
  };
}
function zE(l) {
  var u = zc(l), c = l.offsetWidth, f = l.offsetHeight;
  return Math.abs(u.width - c) <= 1 && (c = u.width), Math.abs(u.height - f) <= 1 && (f = u.height), {
    x: l.offsetLeft,
    y: l.offsetTop,
    width: c,
    height: f
  };
}
function BT(l, u) {
  var c = u.getRootNode && u.getRootNode();
  if (l.contains(u))
    return !0;
  if (c && FE(c)) {
    var f = u;
    do {
      if (f && l.isSameNode(f))
        return !0;
      f = f.parentNode || f.host;
    } while (f);
  }
  return !1;
}
function Ll(l) {
  return l ? (l.nodeName || "").toLowerCase() : null;
}
function jo(l) {
  return aa(l).getComputedStyle(l);
}
function zA(l) {
  return ["table", "td", "th"].indexOf(Ll(l)) >= 0;
}
function Ul(l) {
  return ((as(l) ? l.ownerDocument : (
    // $FlowFixMe[prop-missing]
    l.document
  )) || window.document).documentElement;
}
function _m(l) {
  return Ll(l) === "html" ? l : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    l.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    l.parentNode || // DOM Element detected
    (FE(l) ? l.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ul(l)
  );
}
function uw(l) {
  return !Vi(l) || // https://github.com/popperjs/popper-core/issues/837
  jo(l).position === "fixed" ? null : l.offsetParent;
}
function IA(l) {
  var u = /firefox/i.test(pE()), c = /Trident/i.test(pE());
  if (c && Vi(l)) {
    var f = jo(l);
    if (f.position === "fixed")
      return null;
  }
  var v = _m(l);
  for (FE(v) && (v = v.host); Vi(v) && ["html", "body"].indexOf(Ll(v)) < 0; ) {
    var h = jo(v);
    if (h.transform !== "none" || h.perspective !== "none" || h.contain === "paint" || ["transform", "perspective"].indexOf(h.willChange) !== -1 || u && h.willChange === "filter" || u && h.filter && h.filter !== "none")
      return v;
    v = v.parentNode;
  }
  return null;
}
function sp(l) {
  for (var u = aa(l), c = uw(l); c && zA(c) && jo(c).position === "static"; )
    c = uw(c);
  return c && (Ll(c) === "html" || Ll(c) === "body" && jo(c).position === "static") ? u : c || IA(l) || u;
}
function IE(l) {
  return ["top", "bottom"].indexOf(l) >= 0 ? "x" : "y";
}
function Xd(l, u, c) {
  return ns(l, Cm(u, c));
}
function PA(l, u, c) {
  var f = Xd(l, u, c);
  return f > c ? c : f;
}
function HT() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function VT(l) {
  return Object.assign({}, HT(), l);
}
function WT(l, u) {
  return u.reduce(function(c, f) {
    return c[f] = l, c;
  }, {});
}
var BA = function(u, c) {
  return u = typeof u == "function" ? u(Object.assign({}, c.rects, {
    placement: c.placement
  })) : u, VT(typeof u != "number" ? u : WT(u, up));
};
function HA(l) {
  var u, c = l.state, f = l.name, v = l.options, h = c.elements.arrow, m = c.modifiersData.popperOffsets, C = Hi(c.placement), b = IE(C), w = [Br, Oa].indexOf(C) >= 0, R = w ? "height" : "width";
  if (!(!h || !m)) {
    var O = BA(v.padding, c), M = zE(h), _ = b === "y" ? Pr : Br, $ = b === "y" ? Ra : Oa, Y = c.rects.reference[R] + c.rects.reference[b] - m[b] - c.rects.popper[R], z = m[b] - c.rects.reference[b], te = sp(h), J = te ? b === "y" ? te.clientHeight || 0 : te.clientWidth || 0 : 0, P = Y / 2 - z / 2, q = O[_], j = J - M[R] - O[$], Q = J / 2 - M[R] / 2 + P, ne = Xd(q, Q, j), ce = b;
    c.modifiersData[f] = (u = {}, u[ce] = ne, u.centerOffset = ne - Q, u);
  }
}
function VA(l) {
  var u = l.state, c = l.options, f = c.element, v = f === void 0 ? "[data-popper-arrow]" : f;
  v != null && (typeof v == "string" && (v = u.elements.popper.querySelector(v), !v) || BT(u.elements.popper, v) && (u.elements.arrow = v));
}
const WA = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: HA,
  effect: VA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ic(l) {
  return l.split("-")[1];
}
var YA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qA(l, u) {
  var c = l.x, f = l.y, v = u.devicePixelRatio || 1;
  return {
    x: Fc(c * v) / v || 0,
    y: Fc(f * v) / v || 0
  };
}
function sw(l) {
  var u, c = l.popper, f = l.popperRect, v = l.placement, h = l.variation, m = l.offsets, C = l.position, b = l.gpuAcceleration, w = l.adaptive, R = l.roundOffsets, O = l.isFixed, M = m.x, _ = M === void 0 ? 0 : M, $ = m.y, Y = $ === void 0 ? 0 : $, z = typeof R == "function" ? R({
    x: _,
    y: Y
  }) : {
    x: _,
    y: Y
  };
  _ = z.x, Y = z.y;
  var te = m.hasOwnProperty("x"), J = m.hasOwnProperty("y"), P = Br, q = Pr, j = window;
  if (w) {
    var Q = sp(c), ne = "clientHeight", ce = "clientWidth";
    if (Q === aa(c) && (Q = Ul(c), jo(Q).position !== "static" && C === "absolute" && (ne = "scrollHeight", ce = "scrollWidth")), Q = Q, v === Pr || (v === Br || v === Oa) && h === ep) {
      q = Ra;
      var Te = O && Q === j && j.visualViewport ? j.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        Q[ne]
      );
      Y -= Te - f.height, Y *= b ? 1 : -1;
    }
    if (v === Br || (v === Pr || v === Ra) && h === ep) {
      P = Oa;
      var Ne = O && Q === j && j.visualViewport ? j.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        Q[ce]
      );
      _ -= Ne - f.width, _ *= b ? 1 : -1;
    }
  }
  var we = Object.assign({
    position: C
  }, w && YA), De = R === !0 ? qA({
    x: _,
    y: Y
  }, aa(c)) : {
    x: _,
    y: Y
  };
  if (_ = De.x, Y = De.y, b) {
    var Oe;
    return Object.assign({}, we, (Oe = {}, Oe[q] = J ? "0" : "", Oe[P] = te ? "0" : "", Oe.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + Y + "px)" : "translate3d(" + _ + "px, " + Y + "px, 0)", Oe));
  }
  return Object.assign({}, we, (u = {}, u[q] = J ? Y + "px" : "", u[P] = te ? _ + "px" : "", u.transform = "", u));
}
function GA(l) {
  var u = l.state, c = l.options, f = c.gpuAcceleration, v = f === void 0 ? !0 : f, h = c.adaptive, m = h === void 0 ? !0 : h, C = c.roundOffsets, b = C === void 0 ? !0 : C, w = {
    placement: Hi(u.placement),
    variation: Ic(u.placement),
    popper: u.elements.popper,
    popperRect: u.rects.popper,
    gpuAcceleration: v,
    isFixed: u.options.strategy === "fixed"
  };
  u.modifiersData.popperOffsets != null && (u.styles.popper = Object.assign({}, u.styles.popper, sw(Object.assign({}, w, {
    offsets: u.modifiersData.popperOffsets,
    position: u.options.strategy,
    adaptive: m,
    roundOffsets: b
  })))), u.modifiersData.arrow != null && (u.styles.arrow = Object.assign({}, u.styles.arrow, sw(Object.assign({}, w, {
    offsets: u.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: b
  })))), u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-placement": u.placement
  });
}
const KA = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: GA,
  data: {}
};
var hm = {
  passive: !0
};
function QA(l) {
  var u = l.state, c = l.instance, f = l.options, v = f.scroll, h = v === void 0 ? !0 : v, m = f.resize, C = m === void 0 ? !0 : m, b = aa(u.elements.popper), w = [].concat(u.scrollParents.reference, u.scrollParents.popper);
  return h && w.forEach(function(R) {
    R.addEventListener("scroll", c.update, hm);
  }), C && b.addEventListener("resize", c.update, hm), function() {
    h && w.forEach(function(R) {
      R.removeEventListener("scroll", c.update, hm);
    }), C && b.removeEventListener("resize", c.update, hm);
  };
}
const XA = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: QA,
  data: {}
};
var ZA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ym(l) {
  return l.replace(/left|right|bottom|top/g, function(u) {
    return ZA[u];
  });
}
var JA = {
  start: "end",
  end: "start"
};
function cw(l) {
  return l.replace(/start|end/g, function(u) {
    return JA[u];
  });
}
function PE(l) {
  var u = aa(l), c = u.pageXOffset, f = u.pageYOffset;
  return {
    scrollLeft: c,
    scrollTop: f
  };
}
function BE(l) {
  return zc(Ul(l)).left + PE(l).scrollLeft;
}
function ej(l, u) {
  var c = aa(l), f = Ul(l), v = c.visualViewport, h = f.clientWidth, m = f.clientHeight, C = 0, b = 0;
  if (v) {
    h = v.width, m = v.height;
    var w = PT();
    (w || !w && u === "fixed") && (C = v.offsetLeft, b = v.offsetTop);
  }
  return {
    width: h,
    height: m,
    x: C + BE(l),
    y: b
  };
}
function tj(l) {
  var u, c = Ul(l), f = PE(l), v = (u = l.ownerDocument) == null ? void 0 : u.body, h = ns(c.scrollWidth, c.clientWidth, v ? v.scrollWidth : 0, v ? v.clientWidth : 0), m = ns(c.scrollHeight, c.clientHeight, v ? v.scrollHeight : 0, v ? v.clientHeight : 0), C = -f.scrollLeft + BE(l), b = -f.scrollTop;
  return jo(v || c).direction === "rtl" && (C += ns(c.clientWidth, v ? v.clientWidth : 0) - h), {
    width: h,
    height: m,
    x: C,
    y: b
  };
}
function HE(l) {
  var u = jo(l), c = u.overflow, f = u.overflowX, v = u.overflowY;
  return /auto|scroll|overlay|hidden/.test(c + v + f);
}
function YT(l) {
  return ["html", "body", "#document"].indexOf(Ll(l)) >= 0 ? l.ownerDocument.body : Vi(l) && HE(l) ? l : YT(_m(l));
}
function Zd(l, u) {
  var c;
  u === void 0 && (u = []);
  var f = YT(l), v = f === ((c = l.ownerDocument) == null ? void 0 : c.body), h = aa(f), m = v ? [h].concat(h.visualViewport || [], HE(f) ? f : []) : f, C = u.concat(m);
  return v ? C : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    C.concat(Zd(_m(m)))
  );
}
function vE(l) {
  return Object.assign({}, l, {
    left: l.x,
    top: l.y,
    right: l.x + l.width,
    bottom: l.y + l.height
  });
}
function nj(l, u) {
  var c = zc(l, !1, u === "fixed");
  return c.top = c.top + l.clientTop, c.left = c.left + l.clientLeft, c.bottom = c.top + l.clientHeight, c.right = c.left + l.clientWidth, c.width = l.clientWidth, c.height = l.clientHeight, c.x = c.left, c.y = c.top, c;
}
function fw(l, u, c) {
  return u === zT ? vE(ej(l, c)) : as(u) ? nj(u, c) : vE(tj(Ul(l)));
}
function rj(l) {
  var u = Zd(_m(l)), c = ["absolute", "fixed"].indexOf(jo(l).position) >= 0, f = c && Vi(l) ? sp(l) : l;
  return as(f) ? u.filter(function(v) {
    return as(v) && BT(v, f) && Ll(v) !== "body";
  }) : [];
}
function aj(l, u, c, f) {
  var v = u === "clippingParents" ? rj(l) : [].concat(u), h = [].concat(v, [c]), m = h[0], C = h.reduce(function(b, w) {
    var R = fw(l, w, f);
    return b.top = ns(R.top, b.top), b.right = Cm(R.right, b.right), b.bottom = Cm(R.bottom, b.bottom), b.left = ns(R.left, b.left), b;
  }, fw(l, m, f));
  return C.width = C.right - C.left, C.height = C.bottom - C.top, C.x = C.left, C.y = C.top, C;
}
function qT(l) {
  var u = l.reference, c = l.element, f = l.placement, v = f ? Hi(f) : null, h = f ? Ic(f) : null, m = u.x + u.width / 2 - c.width / 2, C = u.y + u.height / 2 - c.height / 2, b;
  switch (v) {
    case Pr:
      b = {
        x: m,
        y: u.y - c.height
      };
      break;
    case Ra:
      b = {
        x: m,
        y: u.y + u.height
      };
      break;
    case Oa:
      b = {
        x: u.x + u.width,
        y: C
      };
      break;
    case Br:
      b = {
        x: u.x - c.width,
        y: C
      };
      break;
    default:
      b = {
        x: u.x,
        y: u.y
      };
  }
  var w = v ? IE(v) : null;
  if (w != null) {
    var R = w === "y" ? "height" : "width";
    switch (h) {
      case Uc:
        b[w] = b[w] - (u[R] / 2 - c[R] / 2);
        break;
      case ep:
        b[w] = b[w] + (u[R] / 2 - c[R] / 2);
        break;
    }
  }
  return b;
}
function tp(l, u) {
  u === void 0 && (u = {});
  var c = u, f = c.placement, v = f === void 0 ? l.placement : f, h = c.strategy, m = h === void 0 ? l.strategy : h, C = c.boundary, b = C === void 0 ? OA : C, w = c.rootBoundary, R = w === void 0 ? zT : w, O = c.elementContext, M = O === void 0 ? Gd : O, _ = c.altBoundary, $ = _ === void 0 ? !1 : _, Y = c.padding, z = Y === void 0 ? 0 : Y, te = VT(typeof z != "number" ? z : WT(z, up)), J = M === Gd ? kA : Gd, P = l.rects.popper, q = l.elements[$ ? J : M], j = aj(as(q) ? q : q.contextElement || Ul(l.elements.popper), b, R, m), Q = zc(l.elements.reference), ne = qT({
    reference: Q,
    element: P,
    strategy: "absolute",
    placement: v
  }), ce = vE(Object.assign({}, P, ne)), Te = M === Gd ? ce : Q, Ne = {
    top: j.top - Te.top + te.top,
    bottom: Te.bottom - j.bottom + te.bottom,
    left: j.left - Te.left + te.left,
    right: Te.right - j.right + te.right
  }, we = l.modifiersData.offset;
  if (M === Gd && we) {
    var De = we[v];
    Object.keys(Ne).forEach(function(Oe) {
      var Me = [Oa, Ra].indexOf(Oe) >= 0 ? 1 : -1, Ae = [Pr, Ra].indexOf(Oe) >= 0 ? "y" : "x";
      Ne[Oe] += De[Ae] * Me;
    });
  }
  return Ne;
}
function ij(l, u) {
  u === void 0 && (u = {});
  var c = u, f = c.placement, v = c.boundary, h = c.rootBoundary, m = c.padding, C = c.flipVariations, b = c.allowedAutoPlacements, w = b === void 0 ? IT : b, R = Ic(f), O = R ? C ? lw : lw.filter(function($) {
    return Ic($) === R;
  }) : up, M = O.filter(function($) {
    return w.indexOf($) >= 0;
  });
  M.length === 0 && (M = O);
  var _ = M.reduce(function($, Y) {
    return $[Y] = tp(l, {
      placement: Y,
      boundary: v,
      rootBoundary: h,
      padding: m
    })[Hi(Y)], $;
  }, {});
  return Object.keys(_).sort(function($, Y) {
    return _[$] - _[Y];
  });
}
function oj(l) {
  if (Hi(l) === UE)
    return [];
  var u = ym(l);
  return [cw(l), u, cw(u)];
}
function lj(l) {
  var u = l.state, c = l.options, f = l.name;
  if (!u.modifiersData[f]._skip) {
    for (var v = c.mainAxis, h = v === void 0 ? !0 : v, m = c.altAxis, C = m === void 0 ? !0 : m, b = c.fallbackPlacements, w = c.padding, R = c.boundary, O = c.rootBoundary, M = c.altBoundary, _ = c.flipVariations, $ = _ === void 0 ? !0 : _, Y = c.allowedAutoPlacements, z = u.options.placement, te = Hi(z), J = te === z, P = b || (J || !$ ? [ym(z)] : oj(z)), q = [z].concat(P).reduce(function(ge, Ce) {
      return ge.concat(Hi(Ce) === UE ? ij(u, {
        placement: Ce,
        boundary: R,
        rootBoundary: O,
        padding: w,
        flipVariations: $,
        allowedAutoPlacements: Y
      }) : Ce);
    }, []), j = u.rects.reference, Q = u.rects.popper, ne = /* @__PURE__ */ new Map(), ce = !0, Te = q[0], Ne = 0; Ne < q.length; Ne++) {
      var we = q[Ne], De = Hi(we), Oe = Ic(we) === Uc, Me = [Pr, Ra].indexOf(De) >= 0, Ae = Me ? "width" : "height", Be = tp(u, {
        placement: we,
        boundary: R,
        rootBoundary: O,
        altBoundary: M,
        padding: w
      }), Ze = Me ? Oe ? Oa : Br : Oe ? Ra : Pr;
      j[Ae] > Q[Ae] && (Ze = ym(Ze));
      var Ke = ym(Ze), nt = [];
      if (h && nt.push(Be[De] <= 0), C && nt.push(Be[Ze] <= 0, Be[Ke] <= 0), nt.every(function(ge) {
        return ge;
      })) {
        Te = we, ce = !1;
        break;
      }
      ne.set(we, nt);
    }
    if (ce)
      for (var re = $ ? 3 : 1, W = function(Ce) {
        var Ee = q.find(function(Ie) {
          var Re = ne.get(Ie);
          if (Re)
            return Re.slice(0, Ce).every(function(Pe) {
              return Pe;
            });
        });
        if (Ee)
          return Te = Ee, "break";
      }, le = re; le > 0; le--) {
        var ae = W(le);
        if (ae === "break")
          break;
      }
    u.placement !== Te && (u.modifiersData[f]._skip = !0, u.placement = Te, u.reset = !0);
  }
}
const uj = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lj,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dw(l, u, c) {
  return c === void 0 && (c = {
    x: 0,
    y: 0
  }), {
    top: l.top - u.height - c.y,
    right: l.right - u.width + c.x,
    bottom: l.bottom - u.height + c.y,
    left: l.left - u.width - c.x
  };
}
function pw(l) {
  return [Pr, Oa, Ra, Br].some(function(u) {
    return l[u] >= 0;
  });
}
function sj(l) {
  var u = l.state, c = l.name, f = u.rects.reference, v = u.rects.popper, h = u.modifiersData.preventOverflow, m = tp(u, {
    elementContext: "reference"
  }), C = tp(u, {
    altBoundary: !0
  }), b = dw(m, f), w = dw(C, v, h), R = pw(b), O = pw(w);
  u.modifiersData[c] = {
    referenceClippingOffsets: b,
    popperEscapeOffsets: w,
    isReferenceHidden: R,
    hasPopperEscaped: O
  }, u.attributes.popper = Object.assign({}, u.attributes.popper, {
    "data-popper-reference-hidden": R,
    "data-popper-escaped": O
  });
}
const cj = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sj
};
function fj(l, u, c) {
  var f = Hi(l), v = [Br, Pr].indexOf(f) >= 0 ? -1 : 1, h = typeof c == "function" ? c(Object.assign({}, u, {
    placement: l
  })) : c, m = h[0], C = h[1];
  return m = m || 0, C = (C || 0) * v, [Br, Oa].indexOf(f) >= 0 ? {
    x: C,
    y: m
  } : {
    x: m,
    y: C
  };
}
function dj(l) {
  var u = l.state, c = l.options, f = l.name, v = c.offset, h = v === void 0 ? [0, 0] : v, m = IT.reduce(function(R, O) {
    return R[O] = fj(O, u.rects, h), R;
  }, {}), C = m[u.placement], b = C.x, w = C.y;
  u.modifiersData.popperOffsets != null && (u.modifiersData.popperOffsets.x += b, u.modifiersData.popperOffsets.y += w), u.modifiersData[f] = m;
}
const pj = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: dj
};
function vj(l) {
  var u = l.state, c = l.name;
  u.modifiersData[c] = qT({
    reference: u.rects.reference,
    element: u.rects.popper,
    strategy: "absolute",
    placement: u.placement
  });
}
const hj = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vj,
  data: {}
};
function mj(l) {
  return l === "x" ? "y" : "x";
}
function yj(l) {
  var u = l.state, c = l.options, f = l.name, v = c.mainAxis, h = v === void 0 ? !0 : v, m = c.altAxis, C = m === void 0 ? !1 : m, b = c.boundary, w = c.rootBoundary, R = c.altBoundary, O = c.padding, M = c.tether, _ = M === void 0 ? !0 : M, $ = c.tetherOffset, Y = $ === void 0 ? 0 : $, z = tp(u, {
    boundary: b,
    rootBoundary: w,
    padding: O,
    altBoundary: R
  }), te = Hi(u.placement), J = Ic(u.placement), P = !J, q = IE(te), j = mj(q), Q = u.modifiersData.popperOffsets, ne = u.rects.reference, ce = u.rects.popper, Te = typeof Y == "function" ? Y(Object.assign({}, u.rects, {
    placement: u.placement
  })) : Y, Ne = typeof Te == "number" ? {
    mainAxis: Te,
    altAxis: Te
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Te), we = u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null, De = {
    x: 0,
    y: 0
  };
  if (Q) {
    if (h) {
      var Oe, Me = q === "y" ? Pr : Br, Ae = q === "y" ? Ra : Oa, Be = q === "y" ? "height" : "width", Ze = Q[q], Ke = Ze + z[Me], nt = Ze - z[Ae], re = _ ? -ce[Be] / 2 : 0, W = J === Uc ? ne[Be] : ce[Be], le = J === Uc ? -ce[Be] : -ne[Be], ae = u.elements.arrow, ge = _ && ae ? zE(ae) : {
        width: 0,
        height: 0
      }, Ce = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : HT(), Ee = Ce[Me], Ie = Ce[Ae], Re = Xd(0, ne[Be], ge[Be]), Pe = P ? ne[Be] / 2 - re - Re - Ee - Ne.mainAxis : W - Re - Ee - Ne.mainAxis, Qe = P ? -ne[Be] / 2 + re + Re + Ie + Ne.mainAxis : le + Re + Ie + Ne.mainAxis, Ge = u.elements.arrow && sp(u.elements.arrow), oe = Ge ? q === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, kt = (Oe = we == null ? void 0 : we[q]) != null ? Oe : 0, jt = Ze + Pe - kt - oe, Je = Ze + Qe - kt, mn = Xd(_ ? Cm(Ke, jt) : Ke, Ze, _ ? ns(nt, Je) : nt);
      Q[q] = mn, De[q] = mn - Ze;
    }
    if (C) {
      var cn, Cn = q === "x" ? Pr : Br, vr = q === "x" ? Ra : Oa, un = Q[j], xn = j === "y" ? "height" : "width", ar = un + z[Cn], wn = un - z[vr], hn = [Pr, Br].indexOf(te) !== -1, it = (cn = we == null ? void 0 : we[j]) != null ? cn : 0, Ot = hn ? ar : un - ne[xn] - ce[xn] - it + Ne.altAxis, Mt = hn ? un + ne[xn] + ce[xn] - it - Ne.altAxis : wn, Hr = _ && hn ? PA(Ot, un, Mt) : Xd(_ ? Ot : ar, un, _ ? Mt : wn);
      Q[j] = Hr, De[j] = Hr - un;
    }
    u.modifiersData[f] = De;
  }
}
const gj = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yj,
  requiresIfExists: ["offset"]
};
function Ej(l) {
  return {
    scrollLeft: l.scrollLeft,
    scrollTop: l.scrollTop
  };
}
function Sj(l) {
  return l === aa(l) || !Vi(l) ? PE(l) : Ej(l);
}
function bj(l) {
  var u = l.getBoundingClientRect(), c = Fc(u.width) / l.offsetWidth || 1, f = Fc(u.height) / l.offsetHeight || 1;
  return c !== 1 || f !== 1;
}
function Cj(l, u, c) {
  c === void 0 && (c = !1);
  var f = Vi(u), v = Vi(u) && bj(u), h = Ul(u), m = zc(l, v, c), C = {
    scrollLeft: 0,
    scrollTop: 0
  }, b = {
    x: 0,
    y: 0
  };
  return (f || !f && !c) && ((Ll(u) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  HE(h)) && (C = Sj(u)), Vi(u) ? (b = zc(u, !0), b.x += u.clientLeft, b.y += u.clientTop) : h && (b.x = BE(h))), {
    x: m.left + C.scrollLeft - b.x,
    y: m.top + C.scrollTop - b.y,
    width: m.width,
    height: m.height
  };
}
function xj(l) {
  var u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), f = [];
  l.forEach(function(h) {
    u.set(h.name, h);
  });
  function v(h) {
    c.add(h.name);
    var m = [].concat(h.requires || [], h.requiresIfExists || []);
    m.forEach(function(C) {
      if (!c.has(C)) {
        var b = u.get(C);
        b && v(b);
      }
    }), f.push(h);
  }
  return l.forEach(function(h) {
    c.has(h.name) || v(h);
  }), f;
}
function wj(l) {
  var u = xj(l);
  return FA.reduce(function(c, f) {
    return c.concat(u.filter(function(v) {
      return v.phase === f;
    }));
  }, []);
}
function Tj(l) {
  var u;
  return function() {
    return u || (u = new Promise(function(c) {
      Promise.resolve().then(function() {
        u = void 0, c(l());
      });
    })), u;
  };
}
function Rj(l) {
  var u = l.reduce(function(c, f) {
    var v = c[f.name];
    return c[f.name] = v ? Object.assign({}, v, f, {
      options: Object.assign({}, v.options, f.options),
      data: Object.assign({}, v.data, f.data)
    }) : f, c;
  }, {});
  return Object.keys(u).map(function(c) {
    return u[c];
  });
}
var vw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hw() {
  for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
    u[c] = arguments[c];
  return !u.some(function(f) {
    return !(f && typeof f.getBoundingClientRect == "function");
  });
}
function Oj(l) {
  l === void 0 && (l = {});
  var u = l, c = u.defaultModifiers, f = c === void 0 ? [] : c, v = u.defaultOptions, h = v === void 0 ? vw : v;
  return function(C, b, w) {
    w === void 0 && (w = h);
    var R = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, vw, h),
      modifiersData: {},
      elements: {
        reference: C,
        popper: b
      },
      attributes: {},
      styles: {}
    }, O = [], M = !1, _ = {
      state: R,
      setOptions: function(te) {
        var J = typeof te == "function" ? te(R.options) : te;
        Y(), R.options = Object.assign({}, h, R.options, J), R.scrollParents = {
          reference: as(C) ? Zd(C) : C.contextElement ? Zd(C.contextElement) : [],
          popper: Zd(b)
        };
        var P = wj(Rj([].concat(f, R.options.modifiers)));
        return R.orderedModifiers = P.filter(function(q) {
          return q.enabled;
        }), $(), _.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!M) {
          var te = R.elements, J = te.reference, P = te.popper;
          if (hw(J, P)) {
            R.rects = {
              reference: Cj(J, sp(P), R.options.strategy === "fixed"),
              popper: zE(P)
            }, R.reset = !1, R.placement = R.options.placement, R.orderedModifiers.forEach(function(Ne) {
              return R.modifiersData[Ne.name] = Object.assign({}, Ne.data);
            });
            for (var q = 0; q < R.orderedModifiers.length; q++) {
              if (R.reset === !0) {
                R.reset = !1, q = -1;
                continue;
              }
              var j = R.orderedModifiers[q], Q = j.fn, ne = j.options, ce = ne === void 0 ? {} : ne, Te = j.name;
              typeof Q == "function" && (R = Q({
                state: R,
                options: ce,
                name: Te,
                instance: _
              }) || R);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tj(function() {
        return new Promise(function(z) {
          _.forceUpdate(), z(R);
        });
      }),
      destroy: function() {
        Y(), M = !0;
      }
    };
    if (!hw(C, b))
      return _;
    _.setOptions(w).then(function(z) {
      !M && w.onFirstUpdate && w.onFirstUpdate(z);
    });
    function $() {
      R.orderedModifiers.forEach(function(z) {
        var te = z.name, J = z.options, P = J === void 0 ? {} : J, q = z.effect;
        if (typeof q == "function") {
          var j = q({
            state: R,
            name: te,
            instance: _,
            options: P
          }), Q = function() {
          };
          O.push(j || Q);
        }
      });
    }
    function Y() {
      O.forEach(function(z) {
        return z();
      }), O = [];
    }
    return _;
  };
}
const kj = Oj({
  defaultModifiers: [cj, hj, KA, XA, pj, uj, gj, WA]
}), Dj = ["enabled", "placement", "strategy", "modifiers"];
function Nj(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
const _j = {
  name: "applyStyles",
  enabled: !1,
  phase: "afterWrite",
  fn: () => {
  }
}, Mj = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: ({
    state: l
  }) => () => {
    const {
      reference: u,
      popper: c
    } = l.elements;
    if ("removeAttribute" in u) {
      const f = (u.getAttribute("aria-describedby") || "").split(",").filter((v) => v.trim() !== c.id);
      f.length ? u.setAttribute("aria-describedby", f.join(",")) : u.removeAttribute("aria-describedby");
    }
  },
  fn: ({
    state: l
  }) => {
    var u;
    const {
      popper: c,
      reference: f
    } = l.elements, v = (u = c.getAttribute("role")) == null ? void 0 : u.toLowerCase();
    if (c.id && v === "tooltip" && "setAttribute" in f) {
      const h = f.getAttribute("aria-describedby");
      if (h && h.split(",").indexOf(c.id) !== -1)
        return;
      f.setAttribute("aria-describedby", h ? `${h},${c.id}` : c.id);
    }
  }
}, Aj = [];
function GT(l, u, c = {}) {
  let {
    enabled: f = !0,
    placement: v = "bottom",
    strategy: h = "absolute",
    modifiers: m = Aj
  } = c, C = Nj(c, Dj);
  const b = Et(m), w = Et(), R = Ct(() => {
    var z;
    (z = w.current) == null || z.update();
  }, []), O = Ct(() => {
    var z;
    (z = w.current) == null || z.forceUpdate();
  }, []), [M, _] = RA(Hn({
    placement: v,
    update: R,
    forceUpdate: O,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  })), $ = Zt(() => ({
    name: "updateStateModifier",
    enabled: !0,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state: z
    }) => {
      const te = {}, J = {};
      Object.keys(z.elements).forEach((P) => {
        te[P] = z.styles[P], J[P] = z.attributes[P];
      }), _({
        state: z,
        styles: te,
        attributes: J,
        update: R,
        forceUpdate: O,
        placement: z.placement
      });
    }
  }), [R, O, _]), Y = Zt(() => (Qd(b.current, m) || (b.current = m), b.current), [m]);
  return ln(() => {
    !w.current || !f || w.current.setOptions({
      placement: v,
      strategy: h,
      modifiers: [...Y, $, _j]
    });
  }, [h, v, $, f, Y]), ln(() => {
    if (!(!f || l == null || u == null))
      return w.current = kj(l, u, Object.assign({}, C, {
        placement: v,
        strategy: h,
        modifiers: [...Y, Mj, $]
      })), () => {
        w.current != null && (w.current.destroy(), w.current = void 0, _((z) => Object.assign({}, z, {
          attributes: {},
          styles: {
            popper: {}
          }
        })));
      };
  }, [f, l, u]), M;
}
function np(l, u) {
  if (l.contains)
    return l.contains(u);
  if (l.compareDocumentPosition)
    return l === u || !!(l.compareDocumentPosition(u) & 16);
}
var jj = process.env.NODE_ENV !== "production", KT = function() {
};
if (jj) {
  var Lj = function(u, c) {
    var f = arguments.length;
    c = new Array(f > 1 ? f - 1 : 0);
    for (var v = 1; v < f; v++)
      c[v - 1] = arguments[v];
    var h = 0, m = "Warning: " + u.replace(/%s/g, function() {
      return c[h++];
    });
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  };
  KT = function(l, u, c) {
    var f = arguments.length;
    c = new Array(f > 2 ? f - 2 : 0);
    for (var v = 2; v < f; v++)
      c[v - 2] = arguments[v];
    if (u === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    l || Lj.apply(null, [u].concat(c));
  };
}
var $j = KT;
const is = /* @__PURE__ */ rp($j), mw = () => {
};
function Uj(l) {
  return l.button === 0;
}
function Fj(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
const gm = (l) => l && ("current" in l ? l.current : l), yw = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function QT(l, u = mw, {
  disabled: c,
  clickTrigger: f = "click"
} = {}) {
  const v = Et(!1), h = Et(!1), m = Ct((w) => {
    const R = gm(l);
    is(!!R, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), v.current = !R || Fj(w) || !Uj(w) || !!np(R, w.target) || h.current, h.current = !1;
  }, [l]), C = qt((w) => {
    const R = gm(l);
    R && np(R, w.target) && (h.current = !0);
  }), b = qt((w) => {
    v.current || u(w);
  });
  ln(() => {
    var w, R;
    if (c || l == null)
      return;
    const O = Bc(gm(l)), M = O.defaultView || window;
    let _ = (w = M.event) != null ? w : (R = M.parent) == null ? void 0 : R.event, $ = null;
    yw[f] && ($ = Mo(O, yw[f], C, !0));
    const Y = Mo(O, f, m, !0), z = Mo(O, f, (J) => {
      if (J === _) {
        _ = void 0;
        return;
      }
      b(J);
    });
    let te = [];
    return "ontouchstart" in O.documentElement && (te = [].slice.call(O.body.children).map((J) => Mo(J, "mousemove", mw))), () => {
      $ == null || $(), Y(), z(), te.forEach((J) => J());
    };
  }, [l, c, f, m, C, b]);
}
function zj(l) {
  const u = {};
  return Array.isArray(l) ? (l == null || l.forEach((c) => {
    u[c.name] = c;
  }), u) : l || u;
}
function Ij(l = {}) {
  return Array.isArray(l) ? l : Object.keys(l).map((u) => (l[u].name = u, l[u]));
}
function XT({
  enabled: l,
  enableEvents: u,
  placement: c,
  flip: f,
  offset: v,
  fixed: h,
  containerPadding: m,
  arrowElement: C,
  popperConfig: b = {}
}) {
  var w, R, O, M, _;
  const $ = zj(b.modifiers);
  return Object.assign({}, b, {
    placement: c,
    enabled: l,
    strategy: h ? "fixed" : b.strategy,
    modifiers: Ij(Object.assign({}, $, {
      eventListeners: {
        enabled: u,
        options: (w = $.eventListeners) == null ? void 0 : w.options
      },
      preventOverflow: Object.assign({}, $.preventOverflow, {
        options: m ? Object.assign({
          padding: m
        }, (R = $.preventOverflow) == null ? void 0 : R.options) : (O = $.preventOverflow) == null ? void 0 : O.options
      }),
      offset: {
        options: Object.assign({
          offset: v
        }, (M = $.offset) == null ? void 0 : M.options)
      },
      arrow: Object.assign({}, $.arrow, {
        enabled: !!C,
        options: Object.assign({}, (_ = $.arrow) == null ? void 0 : _.options, {
          element: C
        })
      }),
      flip: Object.assign({
        enabled: !!f
      }, $.flip)
    }))
  });
}
const Pj = ["children"];
function Bj(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
const Hj = () => {
};
function ZT(l = {}) {
  const u = yt(Nm), [c, f] = bm(), v = Et(!1), {
    flip: h,
    offset: m,
    rootCloseEvent: C,
    fixed: b = !1,
    placement: w,
    popperConfig: R = {},
    enableEventListeners: O = !0,
    usePopper: M = !!u
  } = l, _ = (u == null ? void 0 : u.show) == null ? !!l.show : u.show;
  _ && !v.current && (v.current = !0);
  const $ = (Q) => {
    u == null || u.toggle(!1, Q);
  }, {
    placement: Y,
    setMenu: z,
    menuElement: te,
    toggleElement: J
  } = u || {}, P = GT(J, te, XT({
    placement: w || Y || "bottom-start",
    enabled: M,
    enableEvents: O ?? _,
    offset: m,
    flip: h,
    fixed: b,
    arrowElement: c,
    popperConfig: R
  })), q = Object.assign({
    ref: z || Hj,
    "aria-labelledby": J == null ? void 0 : J.id
  }, P.attributes.popper, {
    style: P.styles.popper
  }), j = {
    show: _,
    placement: Y,
    hasShown: v.current,
    toggle: u == null ? void 0 : u.toggle,
    popper: M ? P : null,
    arrowProps: M ? Object.assign({
      ref: f
    }, P.attributes.arrow, {
      style: P.styles.arrow
    }) : {}
  };
  return QT(te, $, {
    clickTrigger: C,
    disabled: !_
  }), [q, j];
}
const Vj = {
  usePopper: !0
};
function VE(l) {
  let {
    children: u
  } = l, c = Bj(l, Pj);
  const [f, v] = ZT(c);
  return /* @__PURE__ */ A.jsx(A.Fragment, {
    children: u(f, v)
  });
}
VE.displayName = "DropdownMenu";
VE.defaultProps = Vj;
const Pc = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, xm = /* @__PURE__ */ on.createContext(Pc), JT = /* @__PURE__ */ on.createContext(!1);
function Wj(l) {
  let u = yt(xm), c = eR(u === Pc), [f, v] = Hn(!0), h = Zt(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: u === Pc ? "" : `${u.prefix}-${c}`,
    current: 0
  }), [
    u,
    c
  ]);
  return typeof document < "u" && _w(() => {
    v(!1);
  }, []), /* @__PURE__ */ on.createElement(xm.Provider, {
    value: h
  }, /* @__PURE__ */ on.createElement(JT.Provider, {
    value: f
  }, l.children));
}
let gw = !1;
function EU(l) {
  return typeof on.useId == "function" ? (process.env.NODE_ENV !== "test" && !gw && (console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."), gw = !0), /* @__PURE__ */ on.createElement(on.Fragment, null, l.children)) : /* @__PURE__ */ on.createElement(Wj, l);
}
let Yj = !!(typeof window < "u" && window.document && window.document.createElement), J0 = /* @__PURE__ */ new WeakMap();
function eR(l = !1) {
  let u = yt(xm), c = Et(null);
  if (c.current === null && !l) {
    var f, v;
    let h = (v = on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || v === void 0 || (f = v.ReactCurrentOwner) === null || f === void 0 ? void 0 : f.current;
    if (h) {
      let m = J0.get(h);
      m == null ? J0.set(h, {
        id: u.current,
        state: h.memoizedState
      }) : h.memoizedState !== m.state && (u.current = m.id, J0.delete(h));
    }
    c.current = ++u.current;
  }
  return c.current;
}
function qj(l) {
  let u = yt(xm);
  u === Pc && !Yj && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let c = eR(!!l), f = u === Pc && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${u.prefix}`;
  return l || `${f}-${c}`;
}
function Gj(l) {
  let u = on.useId(), [c] = Hn(Zj()), f = c || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Pc.prefix}`;
  return l || `${f}-${u}`;
}
const tR = typeof on.useId == "function" ? Gj : qj;
function Kj() {
  return !1;
}
function Qj() {
  return !0;
}
function Xj(l) {
  return () => {
  };
}
function Zj() {
  return typeof on.useSyncExternalStore == "function" ? on.useSyncExternalStore(Xj, Kj, Qj) : yt(JT);
}
const nR = (l) => {
  var u;
  return ((u = l.getAttribute("role")) == null ? void 0 : u.toLowerCase()) === "menu";
}, Ew = () => {
};
function rR() {
  const l = tR(), {
    show: u = !1,
    toggle: c = Ew,
    setToggle: f,
    menuElement: v
  } = yt(Nm) || {}, h = Ct((C) => {
    c(!u, C);
  }, [u, c]), m = {
    id: l,
    ref: f || Ew,
    onClick: h,
    "aria-expanded": !!u
  };
  return v && nR(v) && (m["aria-haspopup"] = !0), [m, {
    show: u,
    toggle: c
  }];
}
function aR({
  children: l
}) {
  const [u, c] = rR();
  return /* @__PURE__ */ A.jsx(A.Fragment, {
    children: l(u, c)
  });
}
aR.displayName = "DropdownToggle";
const Jj = /* @__PURE__ */ Z.createContext(null), $l = (l, u = null) => l != null ? String(l) : u || null, Yi = Jj, iR = /* @__PURE__ */ Z.createContext(null);
iR.displayName = "NavContext";
const WE = iR, eL = "data-rr-ui-", tL = "rrUi";
function Vc(l) {
  return `${eL}${l}`;
}
function nL(l) {
  return `${tL}${l}`;
}
const rL = ["eventKey", "disabled", "onClick", "active", "as"];
function aL(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
function oR({
  key: l,
  href: u,
  active: c,
  disabled: f,
  onClick: v
}) {
  const h = yt(Yi), m = yt(WE), {
    activeKey: C
  } = m || {}, b = $l(l, u), w = c == null && l != null ? $l(C) === b : c;
  return [{
    onClick: qt((O) => {
      f || (v == null || v(O), h && !O.isPropagationStopped() && h(b, O));
    }),
    "aria-disabled": f || void 0,
    "aria-selected": w,
    [Vc("dropdown-item")]: ""
  }, {
    isActive: w
  }];
}
const lR = /* @__PURE__ */ Z.forwardRef((l, u) => {
  let {
    eventKey: c,
    disabled: f,
    onClick: v,
    active: h,
    as: m = ME
  } = l, C = aL(l, rL);
  const [b] = oR({
    key: c,
    href: C.href,
    disabled: f,
    onClick: v,
    active: h
  });
  return /* @__PURE__ */ A.jsx(m, Object.assign({}, C, {
    ref: u
  }, b));
});
lR.displayName = "DropdownItem";
const uR = /* @__PURE__ */ X_(Hc ? window : void 0);
uR.Provider;
function Mm() {
  return yt(uR);
}
function Sw() {
  const l = FT(), u = Et(null), c = Ct((f) => {
    u.current = f, l();
  }, [l]);
  return [u, c];
}
function cp({
  defaultShow: l,
  show: u,
  onSelect: c,
  onToggle: f,
  itemSelector: v = `* [${Vc("dropdown-item")}]`,
  focusFirstItemOnShow: h,
  placement: m = "bottom-start",
  children: C
}) {
  const b = Mm(), [w, R] = UT(u, l, f), [O, M] = Sw(), _ = O.current, [$, Y] = Sw(), z = $.current, te = rT(w), J = Et(null), P = Et(!1), q = yt(Yi), j = Ct((we, De, Oe = De == null ? void 0 : De.type) => {
    R(we, {
      originalEvent: De,
      source: Oe
    });
  }, [R]), Q = qt((we, De) => {
    c == null || c(we, De), j(!1, De, "select"), De.isPropagationStopped() || q == null || q(we, De);
  }), ne = Zt(() => ({
    toggle: j,
    placement: m,
    show: w,
    menuElement: _,
    toggleElement: z,
    setMenu: M,
    setToggle: Y
  }), [j, m, w, _, z, M, Y]);
  _ && te && !w && (P.current = _.contains(_.ownerDocument.activeElement));
  const ce = qt(() => {
    z && z.focus && z.focus();
  }), Te = qt(() => {
    const we = J.current;
    let De = h;
    if (De == null && (De = O.current && nR(O.current) ? "keyboard" : !1), De === !1 || De === "keyboard" && !/^key.+$/.test(we))
      return;
    const Oe = No(O.current, v)[0];
    Oe && Oe.focus && Oe.focus();
  });
  ln(() => {
    w ? Te() : P.current && (P.current = !1, ce());
  }, [w, P, ce, Te]), ln(() => {
    J.current = null;
  });
  const Ne = (we, De) => {
    if (!O.current)
      return null;
    const Oe = No(O.current, v);
    let Me = Oe.indexOf(we) + De;
    return Me = Math.max(0, Math.min(Me, Oe.length)), Oe[Me];
  };
  return qM(Ct(() => b.document, [b]), "keydown", (we) => {
    var De, Oe;
    const {
      key: Me
    } = we, Ae = we.target, Be = (De = O.current) == null ? void 0 : De.contains(Ae), Ze = (Oe = $.current) == null ? void 0 : Oe.contains(Ae);
    if (/input|textarea/i.test(Ae.tagName) && (Me === " " || Me !== "Escape" && Be || Me === "Escape" && Ae.type === "search") || !Be && !Ze || Me === "Tab" && (!O.current || !w))
      return;
    J.current = we.type;
    const nt = {
      originalEvent: we,
      source: we.type
    };
    switch (Me) {
      case "ArrowUp": {
        const re = Ne(Ae, -1);
        re && re.focus && re.focus(), we.preventDefault();
        return;
      }
      case "ArrowDown":
        if (we.preventDefault(), !w)
          R(!0, nt);
        else {
          const re = Ne(Ae, 1);
          re && re.focus && re.focus();
        }
        return;
      case "Tab":
        OE(Ae.ownerDocument, "keyup", (re) => {
          var W;
          (re.key === "Tab" && !re.target || !((W = O.current) != null && W.contains(re.target))) && R(!1, nt);
        }, {
          once: !0
        });
        break;
      case "Escape":
        Me === "Escape" && (we.preventDefault(), we.stopPropagation()), R(!1, nt);
        break;
    }
  }), /* @__PURE__ */ A.jsx(Yi.Provider, {
    value: Q,
    children: /* @__PURE__ */ A.jsx(Nm.Provider, {
      value: ne,
      children: C
    })
  });
}
cp.displayName = "Dropdown";
cp.Menu = VE;
cp.Toggle = aR;
cp.Item = lR;
const sR = /* @__PURE__ */ Z.createContext({});
sR.displayName = "DropdownContext";
const cR = sR, fR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "hr",
  role: f = "separator",
  ...v
}, h) => (u = be(u, "dropdown-divider"), /* @__PURE__ */ A.jsx(c, {
  ref: h,
  className: de(l, u),
  role: f,
  ...v
})));
fR.displayName = "DropdownDivider";
const iL = fR, dR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  role: f = "heading",
  ...v
}, h) => (u = be(u, "dropdown-header"), /* @__PURE__ */ A.jsx(c, {
  ref: h,
  className: de(l, u),
  role: f,
  ...v
})));
dR.displayName = "DropdownHeader";
const oL = dR, pR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  eventKey: c,
  disabled: f = !1,
  onClick: v,
  active: h,
  as: m = rs,
  ...C
}, b) => {
  const w = be(l, "dropdown-item"), [R, O] = oR({
    key: c,
    href: C.href,
    disabled: f,
    onClick: v,
    active: h
  });
  return /* @__PURE__ */ A.jsx(m, {
    ...C,
    ...R,
    ref: b,
    className: de(u, w, O.isActive && "active", f && "disabled")
  });
});
pR.displayName = "DropdownItem";
const lL = pR, vR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "span",
  ...f
}, v) => (u = be(u, "dropdown-item-text"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
vR.displayName = "DropdownItemText";
const uL = vR, hR = /* @__PURE__ */ Z.createContext(null);
hR.displayName = "InputGroupContext";
const YE = hR, mR = /* @__PURE__ */ Z.createContext(null);
mR.displayName = "NavbarContext";
const os = mR;
function yR(l, u) {
  if (process.env.NODE_ENV === "production")
    return l;
  const c = Ct((f) => {
    f == null || !f.isReactComponent || (process.env.NODE_ENV !== "production" ? Em(!1, `${u} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : Em(!1));
  }, [u]);
  return Za(c, l);
}
const Mc = xe.oneOf(["start", "end"]), gR = xe.oneOfType([Mc, xe.shape({
  sm: Mc
}), xe.shape({
  md: Mc
}), xe.shape({
  lg: Mc
}), xe.shape({
  xl: Mc
}), xe.shape({
  xxl: Mc
}), xe.object]);
function ER(l, u, c) {
  const f = c ? "top-end" : "top-start", v = c ? "top-start" : "top-end", h = c ? "bottom-end" : "bottom-start", m = c ? "bottom-start" : "bottom-end", C = c ? "right-start" : "left-start", b = c ? "right-end" : "left-end", w = c ? "left-start" : "right-start", R = c ? "left-end" : "right-end";
  let O = l ? m : h;
  return u === "up" ? O = l ? v : f : u === "end" ? O = l ? R : w : u === "start" ? O = l ? b : C : u === "down-centered" ? O = "bottom" : u === "up-centered" && (O = "top"), O;
}
const SR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  align: c,
  rootCloseEvent: f,
  flip: v = !0,
  show: h,
  renderOnMount: m,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: C = "div",
  popperConfig: b,
  variant: w,
  ...R
}, O) => {
  let M = !1;
  const _ = yt(os), $ = be(l, "dropdown-menu"), {
    align: Y,
    drop: z,
    isRTL: te
  } = yt(cR);
  c = c || Y;
  const J = yt(YE), P = [];
  if (c)
    if (typeof c == "object") {
      const we = Object.keys(c);
      if (process.env.NODE_ENV !== "production" && is(we.length === 1, "There should only be 1 breakpoint when passing an object to `align`"), we.length) {
        const De = we[0], Oe = c[De];
        M = Oe === "start", P.push(`${$}-${De}-${Oe}`);
      }
    } else
      c === "end" && (M = !0);
  const q = ER(M, z, te), [j, {
    hasShown: Q,
    popper: ne,
    show: ce,
    toggle: Te
  }] = ZT({
    flip: v,
    rootCloseEvent: f,
    show: h,
    usePopper: !_ && P.length === 0,
    offset: [0, 2],
    popperConfig: b,
    placement: q
  });
  if (j.ref = Za(yR(O, "DropdownMenu"), j.ref), Jd(() => {
    ce && (ne == null || ne.update());
  }, [ce]), !Q && !m && !J)
    return null;
  typeof C != "string" && (j.show = ce, j.close = () => Te == null ? void 0 : Te(!1), j.align = c);
  let Ne = R.style;
  return ne != null && ne.placement && (Ne = {
    ...R.style,
    ...j.style
  }, R["x-placement"] = ne.placement), /* @__PURE__ */ A.jsx(C, {
    ...R,
    ...j,
    style: Ne,
    ...(P.length || _) && {
      "data-bs-popper": "static"
    },
    className: de(u, $, ce && "show", M && `${$}-end`, w && `${$}-${w}`, ...P)
  });
});
SR.displayName = "DropdownMenu";
const bR = SR, CR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  split: u,
  className: c,
  childBsPrefix: f,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = Dm,
  ...h
}, m) => {
  const C = be(l, "dropdown-toggle"), b = yt(Nm);
  f !== void 0 && (h.bsPrefix = f);
  const [w] = rR();
  return w.ref = Za(w.ref, yR(m, "DropdownToggle")), /* @__PURE__ */ A.jsx(v, {
    className: de(c, C, u && `${C}-split`, (b == null ? void 0 : b.show) && "show"),
    ...w,
    ...h
  });
});
CR.displayName = "DropdownToggle";
const xR = CR, wR = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    bsPrefix: c,
    drop: f = "down",
    show: v,
    className: h,
    align: m = "start",
    onSelect: C,
    onToggle: b,
    focusFirstItemOnShow: w,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: R = "div",
    navbar: O,
    autoClose: M = !0,
    ..._
  } = $o(l, {
    show: "onToggle"
  }), $ = yt(YE), Y = be(c, "dropdown"), z = op(), te = (ne) => M === !1 ? ne === "click" : M === "inside" ? ne !== "rootClose" : M === "outside" ? ne !== "select" : !0, J = qt((ne, ce) => {
    var Te, Ne;
    !((Te = ce.originalEvent) == null || (Ne = Te.target) == null) && Ne.classList.contains("dropdown-toggle") && ce.source === "mousedown" || (ce.originalEvent.currentTarget === document && (ce.source !== "keydown" || ce.originalEvent.key === "Escape") && (ce.source = "rootClose"), te(ce.source) && (b == null || b(ne, ce)));
  }), q = ER(m === "end", f, z), j = Zt(() => ({
    align: m,
    drop: f,
    isRTL: z
  }), [m, f, z]), Q = {
    down: Y,
    "down-centered": `${Y}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return /* @__PURE__ */ A.jsx(cR.Provider, {
    value: j,
    children: /* @__PURE__ */ A.jsx(cp, {
      placement: q,
      show: v,
      onSelect: C,
      onToggle: J,
      focusFirstItemOnShow: w,
      itemSelector: `.${Y}-item:not(.disabled):not(:disabled)`,
      children: $ ? _.children : /* @__PURE__ */ A.jsx(R, {
        ..._,
        ref: u,
        className: de(h, v && "show", Q[f])
      })
    })
  });
});
wR.displayName = "Dropdown";
const Xa = Object.assign(wR, {
  Toggle: xR,
  Menu: bR,
  Item: lL,
  ItemText: uL,
  Divider: iL,
  Header: oL
}), sL = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: xe.string,
  /** An `href` passed to the Toggle component */
  href: xe.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: xe.func,
  /** The content of the non-toggle Button.  */
  title: xe.node.isRequired,
  /** Disables both Buttons  */
  disabled: xe.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: gR,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: xe.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: xe.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: xe.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: xe.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: xe.bool,
  /** @ignore */
  bsPrefix: xe.string,
  /** @ignore */
  variant: xe.string,
  /** @ignore */
  size: xe.string
}, qE = /* @__PURE__ */ Z.forwardRef(({
  title: l,
  children: u,
  bsPrefix: c,
  rootCloseEvent: f,
  variant: v,
  size: h,
  menuRole: m,
  renderMenuOnMount: C,
  disabled: b,
  href: w,
  id: R,
  menuVariant: O,
  flip: M,
  ..._
}, $) => /* @__PURE__ */ A.jsxs(Xa, {
  ref: $,
  ..._,
  children: [/* @__PURE__ */ A.jsx(xR, {
    id: R,
    href: w,
    size: h,
    variant: v,
    disabled: b,
    childBsPrefix: c,
    children: l
  }), /* @__PURE__ */ A.jsx(bR, {
    role: m,
    renderOnMount: C,
    rootCloseEvent: f,
    variant: O,
    flip: M,
    children: u
  })]
}));
qE.displayName = "DropdownButton";
qE.propTypes = sL;
const SU = qE, cL = {
  /**
   * @default 'img'
   */
  bsPrefix: xe.string,
  /**
   * Sets image as fluid image.
   */
  fluid: xe.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: xe.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: xe.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: xe.bool
}, TR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  fluid: c = !1,
  rounded: f = !1,
  roundedCircle: v = !1,
  thumbnail: h = !1,
  ...m
}, C) => (l = be(l, "img"), /* @__PURE__ */ A.jsx("img", {
  // eslint-disable-line jsx-a11y/alt-text
  ref: C,
  ...m,
  className: de(u, c && `${l}-fluid`, f && "rounded", v && "rounded-circle", h && `${l}-thumbnail`)
})));
TR.displayName = "Image";
const fL = TR, GE = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  fluid: u = !0,
  ...c
}, f) => /* @__PURE__ */ A.jsx(fL, {
  ref: f,
  ...c,
  fluid: u,
  className: de(l, "figure-img")
}));
GE.displayName = "FigureImage";
GE.propTypes = cL;
const dL = GE, RR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "figcaption",
  ...f
}, v) => (u = be(u, "figure-caption"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
RR.displayName = "FigureCaption";
const pL = RR, OR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "figure",
  ...f
}, v) => (u = be(u, "figure"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
OR.displayName = "Figure";
const bU = Object.assign(OR, {
  Image: dL,
  Caption: pL
}), vL = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: xe.string,
  /** Display feedback as a tooltip. */
  tooltip: xe.bool,
  as: xe.elementType
}, KE = /* @__PURE__ */ Z.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: l = "div",
    className: u,
    type: c = "valid",
    tooltip: f = !1,
    ...v
  }, h) => /* @__PURE__ */ A.jsx(l, {
    ...v,
    ref: h,
    className: de(u, `${c}-${f ? "tooltip" : "feedback"}`)
  })
);
KE.displayName = "Feedback";
KE.propTypes = vL;
const kR = KE, hL = /* @__PURE__ */ Z.createContext({}), Lo = hL, DR = /* @__PURE__ */ Z.forwardRef(({
  id: l,
  bsPrefix: u,
  className: c,
  type: f = "checkbox",
  isValid: v = !1,
  isInvalid: h = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: m = "input",
  ...C
}, b) => {
  const {
    controlId: w
  } = yt(Lo);
  return u = be(u, "form-check-input"), /* @__PURE__ */ A.jsx(m, {
    ...C,
    ref: b,
    type: f,
    id: l || w,
    className: de(c, u, v && "is-valid", h && "is-invalid")
  });
});
DR.displayName = "FormCheckInput";
const Am = DR, NR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  htmlFor: c,
  ...f
}, v) => {
  const {
    controlId: h
  } = yt(Lo);
  return l = be(l, "form-check-label"), /* @__PURE__ */ A.jsx("label", {
    ...f,
    ref: v,
    htmlFor: c || h,
    className: de(u, l)
  });
});
NR.displayName = "FormCheckLabel";
const hE = NR, _R = /* @__PURE__ */ Z.forwardRef(({
  id: l,
  bsPrefix: u,
  bsSwitchPrefix: c,
  inline: f = !1,
  reverse: v = !1,
  disabled: h = !1,
  isValid: m = !1,
  isInvalid: C = !1,
  feedbackTooltip: b = !1,
  feedback: w,
  feedbackType: R,
  className: O,
  style: M,
  title: _ = "",
  type: $ = "checkbox",
  label: Y,
  children: z,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: te = "input",
  ...J
}, P) => {
  u = be(u, "form-check"), c = be(c, "form-switch");
  const {
    controlId: q
  } = yt(Lo), j = Zt(() => ({
    controlId: l || q
  }), [q, l]), Q = !z && Y != null && Y !== !1 || SA(z, hE), ne = /* @__PURE__ */ A.jsx(Am, {
    ...J,
    type: $ === "switch" ? "checkbox" : $,
    ref: P,
    isValid: m,
    isInvalid: C,
    disabled: h,
    as: te
  });
  return /* @__PURE__ */ A.jsx(Lo.Provider, {
    value: j,
    children: /* @__PURE__ */ A.jsx("div", {
      style: M,
      className: de(O, Q && u, f && `${u}-inline`, v && `${u}-reverse`, $ === "switch" && c),
      children: z || /* @__PURE__ */ A.jsxs(A.Fragment, {
        children: [ne, Q && /* @__PURE__ */ A.jsx(hE, {
          title: _,
          children: Y
        }), w && /* @__PURE__ */ A.jsx(kR, {
          type: R,
          tooltip: b,
          children: w
        })]
      })
    })
  });
});
_R.displayName = "FormCheck";
const wm = Object.assign(_R, {
  Input: Am,
  Label: hE
}), MR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  type: u,
  size: c,
  htmlSize: f,
  id: v,
  className: h,
  isValid: m = !1,
  isInvalid: C = !1,
  plaintext: b,
  readOnly: w,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: R = "input",
  ...O
}, M) => {
  const {
    controlId: _
  } = yt(Lo);
  return l = be(l, "form-control"), process.env.NODE_ENV !== "production" && is(_ == null || !v, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ A.jsx(R, {
    ...O,
    type: u,
    size: f,
    ref: M,
    readOnly: w,
    id: v || _,
    className: de(h, b ? `${l}-plaintext` : l, c && `${l}-${c}`, u === "color" && `${l}-color`, m && "is-valid", C && "is-invalid")
  });
});
MR.displayName = "FormControl";
const mL = Object.assign(MR, {
  Feedback: kR
}), AR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "form-floating"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
AR.displayName = "FormFloating";
const yL = AR, jR = /* @__PURE__ */ Z.forwardRef(({
  controlId: l,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: u = "div",
  ...c
}, f) => {
  const v = Zt(() => ({
    controlId: l
  }), [l]);
  return /* @__PURE__ */ A.jsx(Lo.Provider, {
    value: v,
    children: /* @__PURE__ */ A.jsx(u, {
      ...c,
      ref: f
    })
  });
});
jR.displayName = "FormGroup";
const LR = jR, $R = /* @__PURE__ */ Z.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "label",
  bsPrefix: u,
  column: c = !1,
  visuallyHidden: f = !1,
  className: v,
  htmlFor: h,
  ...m
}, C) => {
  const {
    controlId: b
  } = yt(Lo);
  u = be(u, "form-label");
  let w = "col-form-label";
  typeof c == "string" && (w = `${w} ${w}-${c}`);
  const R = de(v, u, f && "visually-hidden", c && w);
  return process.env.NODE_ENV !== "production" && is(b == null || !h, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), h = h || b, c ? /* @__PURE__ */ A.jsx(xA, {
    ref: C,
    as: "label",
    className: R,
    htmlFor: h,
    ...m
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ A.jsx(l, {
      ref: C,
      className: R,
      htmlFor: h,
      ...m
    })
  );
});
$R.displayName = "FormLabel";
const gL = $R, UR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  id: c,
  ...f
}, v) => {
  const {
    controlId: h
  } = yt(Lo);
  return l = be(l, "form-range"), /* @__PURE__ */ A.jsx("input", {
    ...f,
    type: "range",
    ref: v,
    className: de(u, l),
    id: c || h
  });
});
UR.displayName = "FormRange";
const EL = UR, FR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  size: u,
  htmlSize: c,
  className: f,
  isValid: v = !1,
  isInvalid: h = !1,
  id: m,
  ...C
}, b) => {
  const {
    controlId: w
  } = yt(Lo);
  return l = be(l, "form-select"), /* @__PURE__ */ A.jsx("select", {
    ...C,
    size: c,
    ref: b,
    className: de(f, l, u && `${l}-${u}`, v && "is-valid", h && "is-invalid"),
    id: m || w
  });
});
FR.displayName = "FormSelect";
const SL = FR, zR = /* @__PURE__ */ Z.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: l,
    className: u,
    as: c = "small",
    muted: f,
    ...v
  }, h) => (l = be(l, "form-text"), /* @__PURE__ */ A.jsx(c, {
    ...v,
    ref: h,
    className: de(u, l, f && "text-muted")
  }))
);
zR.displayName = "FormText";
const bL = zR, IR = /* @__PURE__ */ Z.forwardRef((l, u) => /* @__PURE__ */ A.jsx(wm, {
  ...l,
  ref: u,
  type: "switch"
}));
IR.displayName = "Switch";
const CL = Object.assign(IR, {
  Input: wm.Input,
  Label: wm.Label
}), PR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  children: c,
  controlId: f,
  label: v,
  ...h
}, m) => (l = be(l, "form-floating"), /* @__PURE__ */ A.jsxs(LR, {
  ref: m,
  className: de(u, l),
  controlId: f,
  ...h,
  children: [c, /* @__PURE__ */ A.jsx("label", {
    htmlFor: f,
    children: v
  })]
})));
PR.displayName = "FloatingLabel";
const xL = PR, wL = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: xe.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: xe.bool,
  as: xe.elementType
}, QE = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  validated: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "form",
  ...f
}, v) => /* @__PURE__ */ A.jsx(c, {
  ...f,
  ref: v,
  className: de(l, u && "was-validated")
}));
QE.displayName = "Form";
QE.propTypes = wL;
const CU = Object.assign(QE, {
  Group: LR,
  Control: mL,
  Floating: yL,
  Check: wm,
  Switch: CL,
  Label: gL,
  Text: bL,
  Range: EL,
  Select: SL,
  FloatingLabel: xL
}), BR = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "span",
  ...f
}, v) => (u = be(u, "input-group-text"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
BR.displayName = "InputGroupText";
const XE = BR, TL = (l) => /* @__PURE__ */ A.jsx(XE, {
  children: /* @__PURE__ */ A.jsx(Am, {
    type: "checkbox",
    ...l
  })
}), RL = (l) => /* @__PURE__ */ A.jsx(XE, {
  children: /* @__PURE__ */ A.jsx(Am, {
    type: "radio",
    ...l
  })
}), HR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  size: u,
  hasValidation: c,
  className: f,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "div",
  ...h
}, m) => {
  l = be(l, "input-group");
  const C = Zt(() => ({}), []);
  return /* @__PURE__ */ A.jsx(YE.Provider, {
    value: C,
    children: /* @__PURE__ */ A.jsx(v, {
      ref: m,
      ...h,
      className: de(f, l, u && `${l}-${u}`, c && "has-validation")
    })
  });
});
HR.displayName = "InputGroup";
const xU = Object.assign(HR, {
  Text: XE,
  Radio: RL,
  Checkbox: TL
}), OL = /* @__PURE__ */ Z.createContext(null), Wc = OL, kL = ["as", "active", "eventKey"];
function DL(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
function ZE({
  key: l,
  onClick: u,
  active: c,
  id: f,
  role: v,
  disabled: h
}) {
  const m = yt(Yi), C = yt(WE), b = yt(Wc);
  let w = c;
  const R = {
    role: v
  };
  if (C) {
    !v && C.role === "tablist" && (R.role = "tab");
    const O = C.getControllerId(l ?? null), M = C.getControlledId(l ?? null);
    R[Vc("event-key")] = l, R.id = O || f, w = c == null && l != null ? C.activeKey === l : c, (w || !(b != null && b.unmountOnExit) && !(b != null && b.mountOnEnter)) && (R["aria-controls"] = M);
  }
  return R.role === "tab" && (R["aria-selected"] = w, w || (R.tabIndex = -1), h && (R.tabIndex = -1, R["aria-disabled"] = !0)), R.onClick = qt((O) => {
    h || (u == null || u(O), l != null && m && !O.isPropagationStopped() && m(l, O));
  }), [R, {
    isActive: w
  }];
}
const VR = /* @__PURE__ */ Z.forwardRef((l, u) => {
  let {
    as: c = ME,
    active: f,
    eventKey: v
  } = l, h = DL(l, kL);
  const [m, C] = ZE(Object.assign({
    key: $l(v, h.href),
    active: f
  }, h));
  return m[Vc("active")] = C.isActive, /* @__PURE__ */ A.jsx(c, Object.assign({}, h, m, {
    ref: u
  }));
});
VR.displayName = "NavItem";
const NL = VR, _L = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function ML(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
const bw = () => {
}, Cw = Vc("event-key"), WR = /* @__PURE__ */ Z.forwardRef((l, u) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: c = "div",
    onSelect: f,
    activeKey: v,
    role: h,
    onKeyDown: m
  } = l, C = ML(l, _L);
  const b = FT(), w = Et(!1), R = yt(Yi), O = yt(Wc);
  let M, _;
  O && (h = h || "tablist", v = O.activeKey, M = O.getControlledId, _ = O.getControllerId);
  const $ = Et(null), Y = (P) => {
    const q = $.current;
    if (!q)
      return null;
    const j = No(q, `[${Cw}]:not([aria-disabled=true])`), Q = q.querySelector("[aria-selected=true]");
    if (!Q || Q !== document.activeElement)
      return null;
    const ne = j.indexOf(Q);
    if (ne === -1)
      return null;
    let ce = ne + P;
    return ce >= j.length && (ce = 0), ce < 0 && (ce = j.length - 1), j[ce];
  }, z = (P, q) => {
    P != null && (f == null || f(P, q), R == null || R(P, q));
  }, te = (P) => {
    if (m == null || m(P), !O)
      return;
    let q;
    switch (P.key) {
      case "ArrowLeft":
      case "ArrowUp":
        q = Y(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        q = Y(1);
        break;
      default:
        return;
    }
    q && (P.preventDefault(), z(q.dataset[nL("EventKey")] || null, P), w.current = !0, b());
  };
  ln(() => {
    if ($.current && w.current) {
      const P = $.current.querySelector(`[${Cw}][aria-selected=true]`);
      P == null || P.focus();
    }
    w.current = !1;
  });
  const J = Za(u, $);
  return /* @__PURE__ */ A.jsx(Yi.Provider, {
    value: z,
    children: /* @__PURE__ */ A.jsx(WE.Provider, {
      value: {
        role: h,
        // used by NavLink to determine it's role
        activeKey: $l(v),
        getControlledId: M || bw,
        getControllerId: _ || bw
      },
      children: /* @__PURE__ */ A.jsx(c, Object.assign({}, C, {
        onKeyDown: te,
        ref: J,
        role: h
      }))
    })
  });
});
WR.displayName = "Nav";
const YR = Object.assign(WR, {
  Item: NL
}), qR = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  active: u,
  disabled: c,
  eventKey: f,
  className: v,
  variant: h,
  action: m,
  as: C,
  ...b
}, w) => {
  l = be(l, "list-group-item");
  const [R, O] = ZE({
    key: $l(f, b.href),
    active: u,
    ...b
  }), M = qt(($) => {
    if (c) {
      $.preventDefault(), $.stopPropagation();
      return;
    }
    R.onClick($);
  });
  c && b.tabIndex === void 0 && (b.tabIndex = -1, b["aria-disabled"] = !0);
  const _ = C || (m ? b.href ? "a" : "button" : "div");
  return process.env.NODE_ENV !== "production" && is(C || !(!m && b.href), "`action=false` and `href` should not be used together."), /* @__PURE__ */ A.jsx(_, {
    ref: w,
    ...b,
    ...R,
    onClick: M,
    className: de(v, l, O.isActive && "active", c && "disabled", h && `${l}-${h}`, m && `${l}-action`)
  });
});
qR.displayName = "ListGroupItem";
const AL = qR, GR = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    className: c,
    bsPrefix: f,
    variant: v,
    horizontal: h,
    numbered: m,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: C = "div",
    ...b
  } = $o(l, {
    activeKey: "onSelect"
  }), w = be(f, "list-group");
  let R;
  return h && (R = h === !0 ? "horizontal" : `horizontal-${h}`), process.env.NODE_ENV !== "production" && is(!(h && v === "flush"), '`variant="flush"` and `horizontal` should not be used together.'), /* @__PURE__ */ A.jsx(YR, {
    ref: u,
    ...b,
    as: C,
    className: de(c, w, v && `${w}-${v}`, R && `${w}-${R}`, m && `${w}-numbered`)
  });
});
GR.displayName = "ListGroup";
const wU = Object.assign(GR, {
  Item: AL
});
var mm;
function xw(l) {
  if ((!mm && mm !== 0 || l) && Hc) {
    var u = document.createElement("div");
    u.style.position = "absolute", u.style.top = "-9999px", u.style.width = "50px", u.style.height = "50px", u.style.overflow = "scroll", document.body.appendChild(u), mm = u.offsetWidth - u.clientWidth, document.body.removeChild(u);
  }
  return mm;
}
function eE(l) {
  l === void 0 && (l = Bc());
  try {
    var u = l.activeElement;
    return !u || !u.nodeName ? null : u;
  } catch {
    return l.body;
  }
}
function jL(l = document) {
  const u = l.defaultView;
  return Math.abs(u.innerWidth - l.documentElement.clientWidth);
}
const ww = Vc("modal-open");
class LL {
  constructor({
    ownerDocument: u,
    handleContainerOverflow: c = !0,
    isRTL: f = !1
  } = {}) {
    this.handleContainerOverflow = c, this.isRTL = f, this.modals = [], this.ownerDocument = u;
  }
  getScrollbarWidth() {
    return jL(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(u) {
  }
  removeModalAttributes(u) {
  }
  setContainerStyle(u) {
    const c = {
      overflow: "hidden"
    }, f = this.isRTL ? "paddingLeft" : "paddingRight", v = this.getElement();
    u.style = {
      overflow: v.style.overflow,
      [f]: v.style[f]
    }, u.scrollBarWidth && (c[f] = `${parseInt(Ao(v, f) || "0", 10) + u.scrollBarWidth}px`), v.setAttribute(ww, ""), Ao(v, c);
  }
  reset() {
    [...this.modals].forEach((u) => this.remove(u));
  }
  removeContainerStyle(u) {
    const c = this.getElement();
    c.removeAttribute(ww), Object.assign(c.style, u.style);
  }
  add(u) {
    let c = this.modals.indexOf(u);
    return c !== -1 || (c = this.modals.length, this.modals.push(u), this.setModalAttributes(u), c !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), c;
  }
  remove(u) {
    const c = this.modals.indexOf(u);
    c !== -1 && (this.modals.splice(c, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(u));
  }
  isTopModal(u) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === u;
  }
}
const JE = LL, tE = (l, u) => Hc ? l == null ? (u || Bc()).body : (typeof l == "function" && (l = l()), l && "current" in l && (l = l.current), l && ("nodeType" in l || l.getBoundingClientRect) ? l : null) : null;
function mE(l, u) {
  const c = Mm(), [f, v] = Hn(() => tE(l, c == null ? void 0 : c.document));
  if (!f) {
    const h = tE(l);
    h && v(h);
  }
  return ln(() => {
    u && f && u(f);
  }, [u, f]), ln(() => {
    const h = tE(l);
    h !== f && v(h);
  }, [l, f]), f;
}
function eS({
  children: l,
  in: u,
  onExited: c,
  mountOnEnter: f,
  unmountOnExit: v
}) {
  const h = Et(null), m = Et(u), C = qt(c);
  ln(() => {
    u ? m.current = !0 : C(h.current);
  }, [u, C]);
  const b = Za(h, l.ref), w = /* @__PURE__ */ Tm(l, {
    ref: b
  });
  return u ? w : v || !m.current && f ? null : w;
}
function $L({
  in: l,
  onTransition: u
}) {
  const c = Et(null), f = Et(!0), v = qt(u);
  return Jd(() => {
    if (!c.current)
      return;
    let h = !1;
    return v({
      in: l,
      element: c.current,
      initial: f.current,
      isStale: () => h
    }), () => {
      h = !0;
    };
  }, [l, v]), Jd(() => (f.current = !1, () => {
    f.current = !0;
  }), []), c;
}
function UL({
  children: l,
  in: u,
  onExited: c,
  onEntered: f,
  transition: v
}) {
  const [h, m] = Hn(!u);
  u && h && m(!1);
  const C = $L({
    in: !!u,
    onTransition: (w) => {
      const R = () => {
        w.isStale() || (w.in ? f == null || f(w.element, w.initial) : (m(!0), c == null || c(w.element)));
      };
      Promise.resolve(v(w)).then(R, (O) => {
        throw w.in || m(!0), O;
      });
    }
  }), b = Za(C, l.ref);
  return h && !u ? null : /* @__PURE__ */ Tm(l, {
    ref: b
  });
}
function yE(l, u, c) {
  return l ? /* @__PURE__ */ A.jsx(l, Object.assign({}, c)) : u ? /* @__PURE__ */ A.jsx(UL, Object.assign({}, c, {
    transition: u
  })) : /* @__PURE__ */ A.jsx(eS, Object.assign({}, c));
}
function KR(l) {
  return l.code === "Escape" || l.keyCode === 27;
}
const FL = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function zL(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
let nE;
function IL(l) {
  return nE || (nE = new JE({
    ownerDocument: l == null ? void 0 : l.document
  })), nE;
}
function PL(l) {
  const u = Mm(), c = l || IL(u), f = Et({
    dialog: null,
    backdrop: null
  });
  return Object.assign(f.current, {
    add: () => c.add(f.current),
    remove: () => c.remove(f.current),
    isTopModal: () => c.isTopModal(f.current),
    setDialogRef: Ct((v) => {
      f.current.dialog = v;
    }, []),
    setBackdropRef: Ct((v) => {
      f.current.backdrop = v;
    }, [])
  });
}
const QR = /* @__PURE__ */ Z_((l, u) => {
  let {
    show: c = !1,
    role: f = "dialog",
    className: v,
    style: h,
    children: m,
    backdrop: C = !0,
    keyboard: b = !0,
    onBackdropClick: w,
    onEscapeKeyDown: R,
    transition: O,
    runTransition: M,
    backdropTransition: _,
    runBackdropTransition: $,
    autoFocus: Y = !0,
    enforceFocus: z = !0,
    restoreFocus: te = !0,
    restoreFocusOptions: J,
    renderDialog: P,
    renderBackdrop: q = (Je) => /* @__PURE__ */ A.jsx("div", Object.assign({}, Je)),
    manager: j,
    container: Q,
    onShow: ne,
    onHide: ce = () => {
    },
    onExit: Te,
    onExited: Ne,
    onExiting: we,
    onEnter: De,
    onEntering: Oe,
    onEntered: Me
  } = l, Ae = zL(l, FL);
  const Be = Mm(), Ze = mE(Q), Ke = PL(j), nt = NE(), re = rT(c), [W, le] = Hn(!c), ae = Et(null);
  Mw(u, () => Ke, [Ke]), Hc && !re && c && (ae.current = eE(Be == null ? void 0 : Be.document)), c && W && le(!1);
  const ge = qt(() => {
    if (Ke.add(), Qe.current = Mo(document, "keydown", Re), Pe.current = Mo(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(Ee),
      !0
    ), ne && ne(), Y) {
      var Je, mn;
      const cn = eE((Je = (mn = Ke.dialog) == null ? void 0 : mn.ownerDocument) != null ? Je : Be == null ? void 0 : Be.document);
      Ke.dialog && cn && !np(Ke.dialog, cn) && (ae.current = cn, Ke.dialog.focus());
    }
  }), Ce = qt(() => {
    if (Ke.remove(), Qe.current == null || Qe.current(), Pe.current == null || Pe.current(), te) {
      var Je;
      (Je = ae.current) == null || Je.focus == null || Je.focus(J), ae.current = null;
    }
  });
  ln(() => {
    !c || !Ze || ge();
  }, [
    c,
    Ze,
    /* should never change: */
    ge
  ]), ln(() => {
    W && Ce();
  }, [W, Ce]), LE(() => {
    Ce();
  });
  const Ee = qt(() => {
    if (!z || !nt() || !Ke.isTopModal())
      return;
    const Je = eE(Be == null ? void 0 : Be.document);
    Ke.dialog && Je && !np(Ke.dialog, Je) && Ke.dialog.focus();
  }), Ie = qt((Je) => {
    Je.target === Je.currentTarget && (w == null || w(Je), C === !0 && ce());
  }), Re = qt((Je) => {
    b && KR(Je) && Ke.isTopModal() && (R == null || R(Je), Je.defaultPrevented || ce());
  }), Pe = Et(), Qe = Et(), Ge = (...Je) => {
    le(!0), Ne == null || Ne(...Je);
  };
  if (!Ze)
    return null;
  const oe = Object.assign({
    role: f,
    ref: Ke.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": f === "dialog" ? !0 : void 0
  }, Ae, {
    style: h,
    className: v,
    tabIndex: -1
  });
  let kt = P ? P(oe) : /* @__PURE__ */ A.jsx("div", Object.assign({}, oe, {
    children: /* @__PURE__ */ Z.cloneElement(m, {
      role: "document"
    })
  }));
  kt = yE(O, M, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!c,
    onExit: Te,
    onExiting: we,
    onExited: Ge,
    onEnter: De,
    onEntering: Oe,
    onEntered: Me,
    children: kt
  });
  let jt = null;
  return C && (jt = q({
    ref: Ke.setBackdropRef,
    onClick: Ie
  }), jt = yE(_, $, {
    in: !!c,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: jt
  })), /* @__PURE__ */ A.jsx(A.Fragment, {
    children: /* @__PURE__ */ ts.createPortal(/* @__PURE__ */ A.jsxs(A.Fragment, {
      children: [jt, kt]
    }), Ze)
  });
});
QR.displayName = "Modal";
const XR = Object.assign(QR, {
  Manager: JE
});
function gE(l, u) {
  return l.classList ? !!u && l.classList.contains(u) : (" " + (l.className.baseVal || l.className) + " ").indexOf(" " + u + " ") !== -1;
}
function BL(l, u) {
  l.classList ? l.classList.add(u) : gE(l, u) || (typeof l.className == "string" ? l.className = l.className + " " + u : l.setAttribute("class", (l.className && l.className.baseVal || "") + " " + u));
}
function Tw(l, u) {
  return l.replace(new RegExp("(^|\\s)" + u + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function HL(l, u) {
  l.classList ? l.classList.remove(u) : typeof l.className == "string" ? l.className = Tw(l.className, u) : l.setAttribute("class", Tw(l.className && l.className.baseVal || "", u));
}
const Ac = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class ZR extends JE {
  adjustAndStore(u, c, f) {
    const v = c.style[u];
    c.dataset[u] = v, Ao(c, {
      [u]: `${parseFloat(Ao(c, u)) + f}px`
    });
  }
  restore(u, c) {
    const f = c.dataset[u];
    f !== void 0 && (delete c.dataset[u], Ao(c, {
      [u]: f
    }));
  }
  setContainerStyle(u) {
    super.setContainerStyle(u);
    const c = this.getElement();
    if (BL(c, "modal-open"), !u.scrollBarWidth)
      return;
    const f = this.isRTL ? "paddingLeft" : "paddingRight", v = this.isRTL ? "marginLeft" : "marginRight";
    No(c, Ac.FIXED_CONTENT).forEach((h) => this.adjustAndStore(f, h, u.scrollBarWidth)), No(c, Ac.STICKY_CONTENT).forEach((h) => this.adjustAndStore(v, h, -u.scrollBarWidth)), No(c, Ac.NAVBAR_TOGGLER).forEach((h) => this.adjustAndStore(v, h, u.scrollBarWidth));
  }
  removeContainerStyle(u) {
    super.removeContainerStyle(u);
    const c = this.getElement();
    HL(c, "modal-open");
    const f = this.isRTL ? "paddingLeft" : "paddingRight", v = this.isRTL ? "marginLeft" : "marginRight";
    No(c, Ac.FIXED_CONTENT).forEach((h) => this.restore(f, h)), No(c, Ac.STICKY_CONTENT).forEach((h) => this.restore(v, h)), No(c, Ac.NAVBAR_TOGGLER).forEach((h) => this.restore(v, h));
  }
}
let rE;
function JR(l) {
  return rE || (rE = new ZR(l)), rE;
}
const VL = ZR, e1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "modal-body"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
e1.displayName = "ModalBody";
const WL = e1, YL = /* @__PURE__ */ Z.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), tS = YL, t1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  contentClassName: c,
  centered: f,
  size: v,
  fullscreen: h,
  children: m,
  scrollable: C,
  ...b
}, w) => {
  l = be(l, "modal");
  const R = `${l}-dialog`, O = typeof h == "string" ? `${l}-fullscreen-${h}` : `${l}-fullscreen`;
  return /* @__PURE__ */ A.jsx("div", {
    ...b,
    ref: w,
    className: de(R, u, v && `${l}-${v}`, f && `${R}-centered`, C && `${R}-scrollable`, h && O),
    children: /* @__PURE__ */ A.jsx("div", {
      className: de(`${l}-content`, c),
      children: m
    })
  });
});
t1.displayName = "ModalDialog";
const n1 = t1, r1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "modal-footer"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
r1.displayName = "ModalFooter";
const qL = r1, GL = /* @__PURE__ */ Z.forwardRef(({
  closeLabel: l = "Close",
  closeVariant: u,
  closeButton: c = !1,
  onHide: f,
  children: v,
  ...h
}, m) => {
  const C = yt(tS), b = qt(() => {
    C == null || C.onHide(), f == null || f();
  });
  return /* @__PURE__ */ A.jsxs("div", {
    ref: m,
    ...h,
    children: [v, c && /* @__PURE__ */ A.jsx(jE, {
      "aria-label": l,
      variant: u,
      onClick: b
    })]
  });
}), a1 = GL, i1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  closeLabel: c = "Close",
  closeButton: f = !1,
  ...v
}, h) => (l = be(l, "modal-header"), /* @__PURE__ */ A.jsx(a1, {
  ref: h,
  ...v,
  className: de(u, l),
  closeLabel: c,
  closeButton: f
})));
i1.displayName = "ModalHeader";
const KL = i1, QL = lp("h4"), o1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = QL,
  ...f
}, v) => (u = be(u, "modal-title"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
o1.displayName = "ModalTitle";
const XL = o1;
function ZL(l) {
  return /* @__PURE__ */ A.jsx(Wi, {
    ...l,
    timeout: null
  });
}
function JL(l) {
  return /* @__PURE__ */ A.jsx(Wi, {
    ...l,
    timeout: null
  });
}
const l1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  style: c,
  dialogClassName: f,
  contentClassName: v,
  children: h,
  dialogAs: m = n1,
  "aria-labelledby": C,
  "aria-describedby": b,
  "aria-label": w,
  /* BaseModal props */
  show: R = !1,
  animation: O = !0,
  backdrop: M = !0,
  keyboard: _ = !0,
  onEscapeKeyDown: $,
  onShow: Y,
  onHide: z,
  container: te,
  autoFocus: J = !0,
  enforceFocus: P = !0,
  restoreFocus: q = !0,
  restoreFocusOptions: j,
  onEntered: Q,
  onExit: ne,
  onExiting: ce,
  onEnter: Te,
  onEntering: Ne,
  onExited: we,
  backdropClassName: De,
  manager: Oe,
  ...Me
}, Ae) => {
  const [Be, Ze] = Hn({}), [Ke, nt] = Hn(!1), re = Et(!1), W = Et(!1), le = Et(null), [ae, ge] = bm(), Ce = Za(Ae, ge), Ee = qt(z), Ie = op();
  l = be(l, "modal");
  const Re = Zt(() => ({
    onHide: Ee
  }), [Ee]);
  function Pe() {
    return Oe || JR({
      isRTL: Ie
    });
  }
  function Qe(it) {
    if (!Hc)
      return;
    const Ot = Pe().getScrollbarWidth() > 0, Mt = it.scrollHeight > Bc(it).documentElement.clientHeight;
    Ze({
      paddingRight: Ot && !Mt ? xw() : void 0,
      paddingLeft: !Ot && Mt ? xw() : void 0
    });
  }
  const Ge = qt(() => {
    ae && Qe(ae.dialog);
  });
  LE(() => {
    fE(window, "resize", Ge), le.current == null || le.current();
  });
  const oe = () => {
    re.current = !0;
  }, kt = (it) => {
    re.current && ae && it.target === ae.dialog && (W.current = !0), re.current = !1;
  }, jt = () => {
    nt(!0), le.current = Pw(ae.dialog, () => {
      nt(!1);
    });
  }, Je = (it) => {
    it.target === it.currentTarget && jt();
  }, mn = (it) => {
    if (M === "static") {
      Je(it);
      return;
    }
    if (W.current || it.target !== it.currentTarget) {
      W.current = !1;
      return;
    }
    z == null || z();
  }, cn = (it) => {
    _ ? $ == null || $(it) : (it.preventDefault(), M === "static" && jt());
  }, Cn = (it, Ot) => {
    it && Qe(it), Te == null || Te(it, Ot);
  }, vr = (it) => {
    le.current == null || le.current(), ne == null || ne(it);
  }, un = (it, Ot) => {
    Ne == null || Ne(it, Ot), OE(window, "resize", Ge);
  }, xn = (it) => {
    it && (it.style.display = ""), we == null || we(it), fE(window, "resize", Ge);
  }, ar = Ct((it) => /* @__PURE__ */ A.jsx("div", {
    ...it,
    className: de(`${l}-backdrop`, De, !O && "show")
  }), [O, De, l]), wn = {
    ...c,
    ...Be
  };
  wn.display = "block";
  const hn = (it) => /* @__PURE__ */ A.jsx("div", {
    role: "dialog",
    ...it,
    style: wn,
    className: de(u, l, Ke && `${l}-static`, !O && "show"),
    onClick: M ? mn : void 0,
    onMouseUp: kt,
    "aria-label": w,
    "aria-labelledby": C,
    "aria-describedby": b,
    children: /* @__PURE__ */ A.jsx(m, {
      ...Me,
      onMouseDown: oe,
      className: f,
      contentClassName: v,
      children: h
    })
  });
  return /* @__PURE__ */ A.jsx(tS.Provider, {
    value: Re,
    children: /* @__PURE__ */ A.jsx(XR, {
      show: R,
      ref: Ce,
      backdrop: M,
      container: te,
      keyboard: !0,
      autoFocus: J,
      enforceFocus: P,
      restoreFocus: q,
      restoreFocusOptions: j,
      onEscapeKeyDown: cn,
      onShow: Y,
      onHide: z,
      onEnter: Cn,
      onEntering: un,
      onEntered: Q,
      onExit: vr,
      onExiting: ce,
      onExited: xn,
      manager: Pe(),
      transition: O ? ZL : void 0,
      backdropTransition: O ? JL : void 0,
      renderBackdrop: ar,
      renderDialog: hn
    })
  });
});
l1.displayName = "Modal";
const TU = Object.assign(l1, {
  Body: WL,
  Header: KL,
  Title: XL,
  Footer: qL,
  Dialog: n1,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});
var Rw = { exports: {} }, EE = { exports: {} };
(function(l, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = c;
  function c(f) {
    function v(m, C, b, w, R, O) {
      var M = w || "<<anonymous>>", _ = O || b;
      if (C[b] == null)
        return m ? new Error("Required " + R + " `" + _ + "` was not specified " + ("in `" + M + "`.")) : null;
      for (var $ = arguments.length, Y = Array($ > 6 ? $ - 6 : 0), z = 6; z < $; z++)
        Y[z - 6] = arguments[z];
      return f.apply(void 0, [C, b, M, R, _].concat(Y));
    }
    var h = v.bind(null, !1);
    return h.isRequired = v.bind(null, !0), h;
  }
  l.exports = u.default;
})(EE, EE.exports);
var e$ = EE.exports;
(function(l, u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = h;
  var c = e$, f = v(c);
  function v(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function h() {
    for (var m = arguments.length, C = Array(m), b = 0; b < m; b++)
      C[b] = arguments[b];
    function w() {
      for (var R = arguments.length, O = Array(R), M = 0; M < R; M++)
        O[M] = arguments[M];
      var _ = null;
      return C.forEach(function($) {
        if (_ == null) {
          var Y = $.apply(void 0, O);
          Y != null && (_ = Y);
        }
      }), _;
    }
    return (0, f.default)(w);
  }
  l.exports = u.default;
})(Rw, Rw.exports);
const u1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "nav-item"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
u1.displayName = "NavItem";
const s1 = u1, c1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  as: c = rs,
  active: f,
  eventKey: v,
  disabled: h = !1,
  ...m
}, C) => {
  l = be(l, "nav-link");
  const [b, w] = ZE({
    key: $l(v, m.href),
    active: f,
    disabled: h,
    ...m
  });
  return /* @__PURE__ */ A.jsx(c, {
    ...m,
    ...b,
    ref: C,
    disabled: h,
    className: de(u, l, h && "disabled", w.isActive && "active")
  });
});
c1.displayName = "NavLink";
const nS = c1, f1 = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    as: c = "div",
    bsPrefix: f,
    variant: v,
    fill: h = !1,
    justify: m = !1,
    navbar: C,
    navbarScroll: b,
    className: w,
    activeKey: R,
    ...O
  } = $o(l, {
    activeKey: "onSelect"
  }), M = be(f, "nav");
  let _, $, Y = !1;
  const z = yt(os), te = yt(ET);
  return z ? (_ = z.bsPrefix, Y = C ?? !0) : te && ({
    cardHeaderBsPrefix: $
  } = te), /* @__PURE__ */ A.jsx(YR, {
    as: c,
    ref: u,
    activeKey: R,
    className: de(w, {
      [M]: !Y,
      [`${_}-nav`]: Y,
      [`${_}-nav-scroll`]: Y && b,
      [`${$}-${v}`]: !!$,
      [`${M}-${v}`]: !!v,
      [`${M}-fill`]: h,
      [`${M}-justified`]: m
    }),
    ...O
  });
});
f1.displayName = "Nav";
const t$ = Object.assign(f1, {
  Item: s1,
  Link: nS
}), d1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  as: c,
  ...f
}, v) => {
  l = be(l, "navbar-brand");
  const h = c || (f.href ? "a" : "span");
  return /* @__PURE__ */ A.jsx(h, {
    ...f,
    ref: v,
    className: de(u, l)
  });
});
d1.displayName = "NavbarBrand";
const n$ = d1, p1 = /* @__PURE__ */ Z.forwardRef(({
  children: l,
  bsPrefix: u,
  ...c
}, f) => {
  u = be(u, "navbar-collapse");
  const v = yt(os);
  return /* @__PURE__ */ A.jsx(Bw, {
    in: !!(v && v.expanded),
    ...c,
    children: /* @__PURE__ */ A.jsx("div", {
      ref: f,
      className: u,
      children: l
    })
  });
});
p1.displayName = "NavbarCollapse";
const r$ = p1, v1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  children: c,
  label: f = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "button",
  onClick: h,
  ...m
}, C) => {
  l = be(l, "navbar-toggler");
  const {
    onToggle: b,
    expanded: w
  } = yt(os) || {}, R = qt((O) => {
    h && h(O), b && b();
  });
  return v === "button" && (m.type = "button"), /* @__PURE__ */ A.jsx(v, {
    ...m,
    ref: C,
    onClick: R,
    "aria-label": f,
    className: de(u, l, !w && "collapsed"),
    children: c || /* @__PURE__ */ A.jsx("span", {
      className: `${l}-icon`
    })
  });
});
v1.displayName = "NavbarToggle";
const a$ = v1, SE = /* @__PURE__ */ new WeakMap(), Ow = (l, u) => {
  if (!l || !u)
    return;
  const c = SE.get(u) || /* @__PURE__ */ new Map();
  SE.set(u, c);
  let f = c.get(l);
  return f || (f = u.matchMedia(l), f.refCount = 0, c.set(f.media, f)), f;
};
function i$(l, u = typeof window > "u" ? void 0 : window) {
  const c = Ow(l, u), [f, v] = Hn(() => c ? c.matches : !1);
  return Jd(() => {
    let h = Ow(l, u);
    if (!h)
      return v(!1);
    let m = SE.get(u);
    const C = () => {
      v(h.matches);
    };
    return h.refCount++, h.addListener(C), C(), () => {
      h.removeListener(C), h.refCount--, h.refCount <= 0 && (m == null || m.delete(h.media)), h = void 0;
    };
  }, [l]), f;
}
function o$(l) {
  const u = Object.keys(l);
  function c(C, b) {
    return C === b ? b : C ? `${C} and ${b}` : b;
  }
  function f(C) {
    return u[Math.min(u.indexOf(C) + 1, u.length - 1)];
  }
  function v(C) {
    const b = f(C);
    let w = l[b];
    return typeof w == "number" ? w = `${w - 0.2}px` : w = `calc(${w} - 0.2px)`, `(max-width: ${w})`;
  }
  function h(C) {
    let b = l[C];
    return typeof b == "number" && (b = `${b}px`), `(min-width: ${b})`;
  }
  function m(C, b, w) {
    let R;
    typeof C == "object" ? (R = C, w = b, b = !0) : (b = b || !0, R = {
      [C]: b
    });
    let O = Zt(() => Object.entries(R).reduce((M, [_, $]) => (($ === "up" || $ === !0) && (M = c(M, h(_))), ($ === "down" || $ === !0) && (M = c(M, v(_))), M), ""), [JSON.stringify(R)]);
    return i$(O, w);
  }
  return m;
}
const l$ = o$({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), h1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "offcanvas-body"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
h1.displayName = "OffcanvasBody";
const u$ = h1, s$ = {
  [Ta]: "show",
  [_o]: "show"
}, m1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  children: c,
  in: f = !1,
  mountOnEnter: v = !1,
  unmountOnExit: h = !1,
  appear: m = !1,
  ...C
}, b) => (l = be(l, "offcanvas"), /* @__PURE__ */ A.jsx(Om, {
  ref: b,
  addEndListener: Rm,
  in: f,
  mountOnEnter: v,
  unmountOnExit: h,
  appear: m,
  ...C,
  childRef: c.ref,
  children: (w, R) => /* @__PURE__ */ Z.cloneElement(c, {
    ...R,
    className: de(u, c.props.className, (w === Ta || w === Lc) && `${l}-toggling`, s$[w])
  })
})));
m1.displayName = "OffcanvasToggling";
const c$ = m1, y1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  closeLabel: c = "Close",
  closeButton: f = !1,
  ...v
}, h) => (l = be(l, "offcanvas-header"), /* @__PURE__ */ A.jsx(a1, {
  ref: h,
  ...v,
  className: de(u, l),
  closeLabel: c,
  closeButton: f
})));
y1.displayName = "OffcanvasHeader";
const f$ = y1, d$ = lp("h5"), g1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = d$,
  ...f
}, v) => (u = be(u, "offcanvas-title"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
g1.displayName = "OffcanvasTitle";
const p$ = g1;
function v$(l) {
  return /* @__PURE__ */ A.jsx(c$, {
    ...l
  });
}
function h$(l) {
  return /* @__PURE__ */ A.jsx(Wi, {
    ...l
  });
}
const E1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  children: c,
  "aria-labelledby": f,
  placement: v = "start",
  responsive: h,
  /* BaseModal props */
  show: m = !1,
  backdrop: C = !0,
  keyboard: b = !0,
  scroll: w = !1,
  onEscapeKeyDown: R,
  onShow: O,
  onHide: M,
  container: _,
  autoFocus: $ = !0,
  enforceFocus: Y = !0,
  restoreFocus: z = !0,
  restoreFocusOptions: te,
  onEntered: J,
  onExit: P,
  onExiting: q,
  onEnter: j,
  onEntering: Q,
  onExited: ne,
  backdropClassName: ce,
  manager: Te,
  renderStaticNode: Ne = !1,
  ...we
}, De) => {
  const Oe = Et();
  l = be(l, "offcanvas");
  const {
    onToggle: Me
  } = yt(os) || {}, [Ae, Be] = Hn(!1), Ze = l$(h || "xs", "up");
  ln(() => {
    Be(h ? m && !Ze : m);
  }, [m, h, Ze]);
  const Ke = qt(() => {
    Me == null || Me(), M == null || M();
  }), nt = Zt(() => ({
    onHide: Ke
  }), [Ke]);
  function re() {
    return Te || (w ? (Oe.current || (Oe.current = new VL({
      handleContainerOverflow: !1
    })), Oe.current) : JR());
  }
  const W = (Ce, ...Ee) => {
    Ce && (Ce.style.visibility = "visible"), j == null || j(Ce, ...Ee);
  }, le = (Ce, ...Ee) => {
    Ce && (Ce.style.visibility = ""), ne == null || ne(...Ee);
  }, ae = Ct((Ce) => /* @__PURE__ */ A.jsx("div", {
    ...Ce,
    className: de(`${l}-backdrop`, ce)
  }), [ce, l]), ge = (Ce) => /* @__PURE__ */ A.jsx("div", {
    ...Ce,
    ...we,
    className: de(u, h ? `${l}-${h}` : l, `${l}-${v}`),
    "aria-labelledby": f,
    children: c
  });
  return /* @__PURE__ */ A.jsxs(A.Fragment, {
    children: [!Ae && (h || Ne) && ge({}), /* @__PURE__ */ A.jsx(tS.Provider, {
      value: nt,
      children: /* @__PURE__ */ A.jsx(XR, {
        show: Ae,
        ref: De,
        backdrop: C,
        container: _,
        keyboard: b,
        autoFocus: $,
        enforceFocus: Y && !w,
        restoreFocus: z,
        restoreFocusOptions: te,
        onEscapeKeyDown: R,
        onShow: O,
        onHide: Ke,
        onEnter: W,
        onEntering: Q,
        onEntered: J,
        onExit: P,
        onExiting: q,
        onExited: le,
        manager: re(),
        transition: v$,
        backdropTransition: h$,
        renderBackdrop: ae,
        renderDialog: ge
      })
    })]
  });
});
E1.displayName = "Offcanvas";
const m$ = Object.assign(E1, {
  Body: u$,
  Header: f$,
  Title: p$
}), S1 = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const c = yt(os);
  return /* @__PURE__ */ A.jsx(m$, {
    ref: u,
    show: !!(c != null && c.expanded),
    ...l,
    renderStaticNode: !0
  });
});
S1.displayName = "NavbarOffcanvas";
const y$ = S1, b1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "span",
  ...f
}, v) => (u = be(u, "navbar-text"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
b1.displayName = "NavbarText";
const g$ = b1, C1 = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    bsPrefix: c,
    expand: f = !0,
    variant: v = "light",
    bg: h,
    fixed: m,
    sticky: C,
    className: b,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: w = "nav",
    expanded: R,
    onToggle: O,
    onSelect: M,
    collapseOnSelect: _ = !1,
    ...$
  } = $o(l, {
    expanded: "onToggle"
  }), Y = be(c, "navbar"), z = Ct((...P) => {
    M == null || M(...P), _ && R && (O == null || O(!1));
  }, [M, _, R, O]);
  $.role === void 0 && w !== "nav" && ($.role = "navigation");
  let te = `${Y}-expand`;
  typeof f == "string" && (te = `${te}-${f}`);
  const J = Zt(() => ({
    onToggle: () => O == null ? void 0 : O(!R),
    bsPrefix: Y,
    expanded: !!R,
    expand: f
  }), [Y, R, f, O]);
  return /* @__PURE__ */ A.jsx(os.Provider, {
    value: J,
    children: /* @__PURE__ */ A.jsx(Yi.Provider, {
      value: z,
      children: /* @__PURE__ */ A.jsx(w, {
        ref: u,
        ...$,
        className: de(b, Y, f && te, v && `${Y}-${v}`, h && `bg-${h}`, C && `sticky-${C}`, m && `fixed-${m}`)
      })
    })
  });
});
C1.displayName = "Navbar";
const RU = Object.assign(C1, {
  Brand: n$,
  Collapse: r$,
  Offcanvas: y$,
  Text: g$,
  Toggle: a$
}), x1 = /* @__PURE__ */ Z.forwardRef(({
  id: l,
  title: u,
  children: c,
  bsPrefix: f,
  className: v,
  rootCloseEvent: h,
  menuRole: m,
  disabled: C,
  active: b,
  renderMenuOnMount: w,
  menuVariant: R,
  ...O
}, M) => {
  const _ = be(void 0, "nav-item");
  return /* @__PURE__ */ A.jsxs(Xa, {
    ref: M,
    ...O,
    className: de(v, _),
    children: [/* @__PURE__ */ A.jsx(Xa.Toggle, {
      id: l,
      eventKey: null,
      active: b,
      disabled: C,
      childBsPrefix: f,
      as: nS,
      children: u
    }), /* @__PURE__ */ A.jsx(Xa.Menu, {
      role: m,
      renderOnMount: w,
      rootCloseEvent: h,
      variant: R,
      children: c
    })]
  });
});
x1.displayName = "NavDropdown";
const OU = Object.assign(x1, {
  Item: Xa.Item,
  ItemText: Xa.ItemText,
  Divider: Xa.Divider,
  Header: Xa.Header
}), E$ = () => {
};
function S$(l, u, {
  disabled: c,
  clickTrigger: f
} = {}) {
  const v = u || E$;
  QT(l, v, {
    disabled: c,
    clickTrigger: f
  });
  const h = qt((m) => {
    KR(m) && v(m);
  });
  ln(() => {
    if (c || l == null)
      return;
    const m = Bc(gm(l));
    let C = (m.defaultView || window).event;
    const b = Mo(m, "keyup", (w) => {
      if (w === C) {
        C = void 0;
        return;
      }
      h(w);
    });
    return () => {
      b();
    };
  }, [l, c, h]);
}
const w1 = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    flip: c,
    offset: f,
    placement: v,
    containerPadding: h,
    popperConfig: m = {},
    transition: C,
    runTransition: b
  } = l, [w, R] = bm(), [O, M] = bm(), _ = Za(R, u), $ = mE(l.container), Y = mE(l.target), [z, te] = Hn(!l.show), J = GT(Y, w, XT({
    placement: v,
    enableEvents: !!l.show,
    containerPadding: h || 5,
    flip: c,
    offset: f,
    arrowElement: O,
    popperConfig: m
  }));
  l.show && z && te(!1);
  const P = (...we) => {
    te(!0), l.onExited && l.onExited(...we);
  }, q = l.show || !z;
  if (S$(w, l.onHide, {
    disabled: !l.rootClose || l.rootCloseDisabled,
    clickTrigger: l.rootCloseEvent
  }), !q)
    return null;
  const {
    onExit: j,
    onExiting: Q,
    onEnter: ne,
    onEntering: ce,
    onEntered: Te
  } = l;
  let Ne = l.children(Object.assign({}, J.attributes.popper, {
    style: J.styles.popper,
    ref: _
  }), {
    popper: J,
    placement: v,
    show: !!l.show,
    arrowProps: Object.assign({}, J.attributes.arrow, {
      style: J.styles.arrow,
      ref: M
    })
  });
  return Ne = yE(C, b, {
    in: !!l.show,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: Ne,
    onExit: j,
    onExiting: Q,
    onExited: P,
    onEnter: ne,
    onEntering: ce,
    onEntered: Te
  }), $ ? /* @__PURE__ */ ts.createPortal(Ne, $) : null;
});
w1.displayName = "Overlay";
const b$ = w1, T1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "popover-header"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
T1.displayName = "PopoverHeader";
const C$ = T1, R1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "popover-body"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
R1.displayName = "PopoverBody";
const O1 = R1;
function k1(l, u) {
  let c = l;
  return l === "left" ? c = u ? "end" : "start" : l === "right" && (c = u ? "start" : "end"), c;
}
function D1(l = "absolute") {
  return {
    position: l,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}
const x$ = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  placement: u = "right",
  className: c,
  style: f,
  children: v,
  body: h,
  arrowProps: m,
  hasDoneInitialMeasure: C,
  popper: b,
  show: w,
  ...R
}, O) => {
  const M = be(l, "popover"), _ = op(), [$] = (u == null ? void 0 : u.split("-")) || [], Y = k1($, _);
  let z = f;
  return w && !C && (z = {
    ...f,
    ...D1(b == null ? void 0 : b.strategy)
  }), /* @__PURE__ */ A.jsxs("div", {
    ref: O,
    role: "tooltip",
    style: z,
    "x-placement": $,
    className: de(c, M, $ && `bs-popover-${Y}`),
    ...R,
    children: [/* @__PURE__ */ A.jsx("div", {
      className: "popover-arrow",
      ...m
    }), h ? /* @__PURE__ */ A.jsx(O1, {
      children: v
    }) : v]
  });
}), w$ = Object.assign(x$, {
  Header: C$,
  Body: O1,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
}), N1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  placement: u = "right",
  className: c,
  style: f,
  children: v,
  arrowProps: h,
  hasDoneInitialMeasure: m,
  popper: C,
  show: b,
  ...w
}, R) => {
  l = be(l, "tooltip");
  const O = op(), [M] = (u == null ? void 0 : u.split("-")) || [], _ = k1(M, O);
  let $ = f;
  return b && !m && ($ = {
    ...f,
    ...D1(C == null ? void 0 : C.strategy)
  }), /* @__PURE__ */ A.jsxs("div", {
    ref: R,
    style: $,
    role: "tooltip",
    "x-placement": M,
    className: de(c, l, `bs-tooltip-${_}`),
    ...w,
    children: [/* @__PURE__ */ A.jsx("div", {
      className: "tooltip-arrow",
      ...h
    }), /* @__PURE__ */ A.jsx("div", {
      className: `${l}-inner`,
      children: v
    })]
  });
});
N1.displayName = "Tooltip";
const T$ = Object.assign(N1, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});
function R$(l) {
  const u = Et(null), c = be(void 0, "popover"), f = be(void 0, "tooltip"), v = Zt(() => ({
    name: "offset",
    options: {
      offset: () => {
        if (l)
          return l;
        if (u.current) {
          if (gE(u.current, c))
            return w$.POPPER_OFFSET;
          if (gE(u.current, f))
            return T$.TOOLTIP_OFFSET;
        }
        return [0, 0];
      }
    }
  }), [l, c, f]);
  return [u, [v]];
}
function O$(l, u) {
  const {
    ref: c
  } = l, {
    ref: f
  } = u;
  l.ref = c.__wrapped || (c.__wrapped = (v) => c(Sm(v))), u.ref = f.__wrapped || (f.__wrapped = (v) => f(Sm(v)));
}
const _1 = /* @__PURE__ */ Z.forwardRef(({
  children: l,
  transition: u = Wi,
  popperConfig: c = {},
  rootClose: f = !1,
  placement: v = "top",
  show: h = !1,
  ...m
}, C) => {
  const b = Et({}), [w, R] = Hn(null), [O, M] = R$(m.offset), _ = Za(C, O), $ = u === !0 ? Wi : u || void 0, Y = qt((z) => {
    R(z), c == null || c.onFirstUpdate == null || c.onFirstUpdate(z);
  });
  return Jd(() => {
    w && m.target && (b.current.scheduleUpdate == null || b.current.scheduleUpdate());
  }, [w, m.target]), ln(() => {
    h || R(null);
  }, [h]), /* @__PURE__ */ A.jsx(b$, {
    ...m,
    ref: _,
    popperConfig: {
      ...c,
      modifiers: M.concat(c.modifiers || []),
      onFirstUpdate: Y
    },
    transition: $,
    rootClose: f,
    placement: v,
    show: h,
    children: (z, {
      arrowProps: te,
      popper: J,
      show: P
    }) => {
      var q, j;
      O$(z, te);
      const Q = J == null ? void 0 : J.placement, ne = Object.assign(b.current, {
        state: J == null ? void 0 : J.state,
        scheduleUpdate: J == null ? void 0 : J.update,
        placement: Q,
        outOfBoundaries: (J == null || (q = J.state) == null || (j = q.modifiersData.hide) == null ? void 0 : j.isReferenceHidden) || !1,
        strategy: c.strategy
      }), ce = !!w;
      return typeof l == "function" ? l({
        ...z,
        placement: Q,
        show: P,
        ...!u && P && {
          className: "show"
        },
        popper: ne,
        arrowProps: te,
        hasDoneInitialMeasure: ce
      }) : /* @__PURE__ */ Z.cloneElement(l, {
        ...z,
        placement: Q,
        arrowProps: te,
        popper: ne,
        hasDoneInitialMeasure: ce,
        className: de(l.props.className, !u && P && "show"),
        style: {
          ...l.props.style,
          ...z.style
        }
      });
    }
  });
});
_1.displayName = "Overlay";
const k$ = _1;
function D$(l) {
  return l && typeof l == "object" ? l : {
    show: l,
    hide: l
  };
}
function kw(l, u, c) {
  const [f] = u, v = f.currentTarget, h = f.relatedTarget || f.nativeEvent[c];
  (!h || h !== v) && !np(v, h) && l(...u);
}
xe.oneOf(["click", "hover", "focus"]);
const N$ = ({
  trigger: l = ["hover", "focus"],
  overlay: u,
  children: c,
  popperConfig: f = {},
  show: v,
  defaultShow: h = !1,
  onToggle: m,
  delay: C,
  placement: b,
  flip: w = b && b.indexOf("auto") !== -1,
  ...R
}) => {
  const O = Et(null), M = Za(O, c.ref), _ = $E(), $ = Et(""), [Y, z] = Lw(v, h, m), te = D$(C), {
    onFocus: J,
    onBlur: P,
    onClick: q
  } = typeof c != "function" ? Z.Children.only(c).props : {}, j = (Ae) => {
    M(Sm(Ae));
  }, Q = Ct(() => {
    if (_.clear(), $.current = "show", !te.show) {
      z(!0);
      return;
    }
    _.set(() => {
      $.current === "show" && z(!0);
    }, te.show);
  }, [te.show, z, _]), ne = Ct(() => {
    if (_.clear(), $.current = "hide", !te.hide) {
      z(!1);
      return;
    }
    _.set(() => {
      $.current === "hide" && z(!1);
    }, te.hide);
  }, [te.hide, z, _]), ce = Ct((...Ae) => {
    Q(), J == null || J(...Ae);
  }, [Q, J]), Te = Ct((...Ae) => {
    ne(), P == null || P(...Ae);
  }, [ne, P]), Ne = Ct((...Ae) => {
    z(!Y), q == null || q(...Ae);
  }, [q, z, Y]), we = Ct((...Ae) => {
    kw(Q, Ae, "fromElement");
  }, [Q]), De = Ct((...Ae) => {
    kw(ne, Ae, "toElement");
  }, [ne]), Oe = l == null ? [] : [].concat(l), Me = {
    ref: j
  };
  return Oe.indexOf("click") !== -1 && (Me.onClick = Ne), Oe.indexOf("focus") !== -1 && (Me.onFocus = ce, Me.onBlur = Te), Oe.indexOf("hover") !== -1 && (process.env.NODE_ENV !== "production" && is(Oe.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.'), Me.onMouseOver = we, Me.onMouseOut = De), /* @__PURE__ */ A.jsxs(A.Fragment, {
    children: [typeof c == "function" ? c(Me) : /* @__PURE__ */ Tm(c, Me), /* @__PURE__ */ A.jsx(k$, {
      ...R,
      show: Y,
      onHide: ne,
      flip: w,
      placement: b,
      popperConfig: f,
      target: O.current,
      children: u
    })]
  });
}, kU = N$, rS = /* @__PURE__ */ Z.forwardRef(({
  active: l = !1,
  disabled: u = !1,
  className: c,
  style: f,
  activeLabel: v = "(current)",
  children: h,
  linkStyle: m,
  linkClassName: C,
  ...b
}, w) => {
  const R = l || u ? "span" : rs;
  return /* @__PURE__ */ A.jsx("li", {
    ref: w,
    style: f,
    className: de(c, "page-item", {
      active: l,
      disabled: u
    }),
    children: /* @__PURE__ */ A.jsxs(R, {
      className: de("page-link", C),
      style: m,
      ...b,
      children: [h, l && v && /* @__PURE__ */ A.jsx("span", {
        className: "visually-hidden",
        children: v
      })]
    })
  });
});
rS.displayName = "PageItem";
const _$ = rS;
function fp(l, u, c = l) {
  const f = /* @__PURE__ */ Z.forwardRef(({
    children: v,
    ...h
  }, m) => /* @__PURE__ */ A.jsxs(rS, {
    ...h,
    ref: m,
    children: [/* @__PURE__ */ A.jsx("span", {
      "aria-hidden": "true",
      children: v || u
    }), /* @__PURE__ */ A.jsx("span", {
      className: "visually-hidden",
      children: c
    })]
  }));
  return f.displayName = l, f;
}
const M$ = fp("First", "«"), A$ = fp("Prev", "‹", "Previous"), j$ = fp("Ellipsis", "…", "More"), L$ = fp("Next", "›"), $$ = fp("Last", "»"), M1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  size: c,
  ...f
}, v) => {
  const h = be(l, "pagination");
  return /* @__PURE__ */ A.jsx("ul", {
    ref: v,
    ...f,
    className: de(u, h, c && `${h}-${c}`)
  });
});
M1.displayName = "Pagination";
const DU = Object.assign(M1, {
  First: M$,
  Prev: A$,
  Ellipsis: j$,
  Item: _$,
  Next: L$,
  Last: $$
});
function A1({
  animation: l,
  bg: u,
  bsPrefix: c,
  size: f,
  ...v
}) {
  c = be(c, "placeholder");
  const [{
    className: h,
    ...m
  }] = jT(v);
  return {
    ...m,
    className: de(h, l ? `${c}-${l}` : c, f && `${c}-${f}`, u && `bg-${u}`)
  };
}
const j1 = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const c = A1(l);
  return /* @__PURE__ */ A.jsx(Dm, {
    ...c,
    ref: u,
    disabled: !0,
    tabIndex: -1
  });
});
j1.displayName = "PlaceholderButton";
const U$ = j1, L1 = /* @__PURE__ */ Z.forwardRef(({
  as: l = "span",
  ...u
}, c) => {
  const f = A1(u);
  return /* @__PURE__ */ A.jsx(l, {
    ...f,
    ref: c
  });
});
L1.displayName = "Placeholder";
const NU = Object.assign(L1, {
  Button: U$
}), Dw = 1e3;
function F$(l, u, c) {
  const f = (l - u) / (c - u) * 100;
  return Math.round(f * Dw) / Dw;
}
function Nw({
  min: l,
  now: u,
  max: c,
  label: f,
  visuallyHidden: v,
  striped: h,
  animated: m,
  className: C,
  style: b,
  variant: w,
  bsPrefix: R,
  ...O
}, M) {
  return /* @__PURE__ */ A.jsx("div", {
    ref: M,
    ...O,
    role: "progressbar",
    className: de(C, `${R}-bar`, {
      [`bg-${w}`]: w,
      [`${R}-bar-animated`]: m,
      [`${R}-bar-striped`]: m || h
    }),
    style: {
      width: `${F$(u, l, c)}%`,
      ...b
    },
    "aria-valuenow": u,
    "aria-valuemin": l,
    "aria-valuemax": c,
    children: v ? /* @__PURE__ */ A.jsx("span", {
      className: "visually-hidden",
      children: f
    }) : f
  });
}
const $1 = /* @__PURE__ */ Z.forwardRef(({
  isChild: l = !1,
  ...u
}, c) => {
  const f = {
    min: 0,
    max: 100,
    animated: !1,
    visuallyHidden: !1,
    striped: !1,
    ...u
  };
  if (f.bsPrefix = be(f.bsPrefix, "progress"), l)
    return Nw(f, c);
  const {
    min: v,
    now: h,
    max: m,
    label: C,
    visuallyHidden: b,
    striped: w,
    animated: R,
    bsPrefix: O,
    variant: M,
    className: _,
    children: $,
    ...Y
  } = f;
  return /* @__PURE__ */ A.jsx("div", {
    ref: c,
    ...Y,
    className: de(_, O),
    children: $ ? $c($, (z) => /* @__PURE__ */ Tm(z, {
      isChild: !0
    })) : Nw({
      min: v,
      now: h,
      max: m,
      label: C,
      visuallyHidden: b,
      striped: w,
      animated: R,
      bsPrefix: O,
      variant: M
    }, c)
  });
});
$1.displayName = "ProgressBar";
const _U = $1;
function z$(l) {
  return l <= 0 ? "100%" : l < 1 ? `${l * 100}%` : `${l}%`;
}
const I$ = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  children: c,
  aspectRatio: f = "1x1",
  style: v,
  ...h
}, m) => {
  l = be(l, "ratio");
  const C = typeof f == "number";
  return /* @__PURE__ */ A.jsx("div", {
    ref: m,
    ...h,
    style: {
      ...v,
      ...C && {
        "--bs-aspect-ratio": z$(f)
      }
    },
    className: de(l, u, !C && `${l}-${f}`),
    children: Z.Children.only(c)
  });
}), MU = I$, U1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "div",
  ...f
}, v) => {
  const h = be(l, "row"), m = wE(), C = TE(), b = `${h}-cols`, w = [];
  return m.forEach((R) => {
    const O = f[R];
    delete f[R];
    let M;
    O != null && typeof O == "object" ? {
      cols: M
    } = O : M = O;
    const _ = R !== C ? `-${R}` : "";
    M != null && w.push(`${b}${_}-${M}`);
  }), /* @__PURE__ */ A.jsx(c, {
    ref: v,
    ...f,
    className: de(u, h, ...w)
  });
});
U1.displayName = "Row";
const AU = U1, F1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  variant: u,
  animation: c = "border",
  size: f,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "div",
  className: h,
  ...m
}, C) => {
  l = be(l, "spinner");
  const b = `${l}-${c}`;
  return /* @__PURE__ */ A.jsx(v, {
    ref: C,
    ...m,
    className: de(h, b, f && `${b}-${f}`, u && `text-${u}`)
  });
});
F1.displayName = "Spinner";
const jU = F1, P$ = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: xe.string,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: xe.string,
  /** An `href` passed to the non-toggle Button */
  href: xe.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: xe.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: xe.func,
  /** The content of the non-toggle Button.  */
  title: xe.node.isRequired,
  /** A `type` passed to the non-toggle Button */
  type: xe.string,
  /** Disables both Buttons  */
  disabled: xe.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: gR,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: xe.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: xe.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: xe.string,
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: xe.bool,
  /** @ignore */
  bsPrefix: xe.string,
  /** @ignore */
  variant: xe.string,
  /** @ignore */
  size: xe.string
}, aS = /* @__PURE__ */ Z.forwardRef(({
  id: l,
  bsPrefix: u,
  size: c,
  variant: f,
  title: v,
  type: h = "button",
  toggleLabel: m = "Toggle dropdown",
  children: C,
  onClick: b,
  href: w,
  target: R,
  menuRole: O,
  renderMenuOnMount: M,
  rootCloseEvent: _,
  flip: $,
  ...Y
}, z) => /* @__PURE__ */ A.jsxs(Xa, {
  ref: z,
  ...Y,
  as: pT,
  children: [/* @__PURE__ */ A.jsx(Dm, {
    size: c,
    variant: f,
    disabled: Y.disabled,
    bsPrefix: u,
    href: w,
    target: R,
    onClick: b,
    type: h,
    children: v
  }), /* @__PURE__ */ A.jsx(Xa.Toggle, {
    split: !0,
    id: l,
    size: c,
    variant: f,
    disabled: Y.disabled,
    childBsPrefix: u,
    children: /* @__PURE__ */ A.jsx("span", {
      className: "visually-hidden",
      children: m
    })
  }), /* @__PURE__ */ A.jsx(Xa.Menu, {
    role: O,
    renderOnMount: M,
    rootCloseEvent: _,
    flip: $,
    children: C
  })]
}));
aS.propTypes = P$;
aS.displayName = "SplitButton";
const LU = aS;
function B$(l, u = CE, c = xE) {
  const f = [];
  return Object.entries(l).forEach(([v, h]) => {
    h != null && (typeof h == "object" ? u.forEach((m) => {
      const C = h[m];
      if (C != null) {
        const b = m !== c ? `-${m}` : "";
        f.push(`${v}${b}-${C}`);
      }
    }) : f.push(`${v}-${h}`));
  }), f;
}
const z1 = /* @__PURE__ */ Z.forwardRef(({
  as: l = "div",
  bsPrefix: u,
  className: c,
  direction: f,
  gap: v,
  ...h
}, m) => {
  u = be(u, f === "horizontal" ? "hstack" : "vstack");
  const C = wE(), b = TE();
  return /* @__PURE__ */ A.jsx(l, {
    ...h,
    ref: m,
    className: de(c, u, ...B$({
      gap: v
    }, C, b))
  });
});
z1.displayName = "Stack";
const $U = z1, H$ = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"], V$ = ["activeKey", "getControlledId", "getControllerId"], W$ = ["as"];
function bE(l, u) {
  if (l == null)
    return {};
  var c = {}, f = Object.keys(l), v, h;
  for (h = 0; h < f.length; h++)
    v = f[h], !(u.indexOf(v) >= 0) && (c[v] = l[v]);
  return c;
}
function I1(l) {
  let {
    active: u,
    eventKey: c,
    mountOnEnter: f,
    transition: v,
    unmountOnExit: h,
    role: m = "tabpanel",
    onEnter: C,
    onEntering: b,
    onEntered: w,
    onExit: R,
    onExiting: O,
    onExited: M
  } = l, _ = bE(l, H$);
  const $ = yt(Wc);
  if (!$)
    return [Object.assign({}, _, {
      role: m
    }), {
      eventKey: c,
      isActive: u,
      mountOnEnter: f,
      transition: v,
      unmountOnExit: h,
      onEnter: C,
      onEntering: b,
      onEntered: w,
      onExit: R,
      onExiting: O,
      onExited: M
    }];
  const {
    activeKey: Y,
    getControlledId: z,
    getControllerId: te
  } = $, J = bE($, V$), P = $l(c);
  return [Object.assign({}, _, {
    role: m,
    id: z(c),
    "aria-labelledby": te(c)
  }), {
    eventKey: c,
    isActive: u == null && P != null ? $l(Y) === P : u,
    transition: v || J.transition,
    mountOnEnter: f ?? J.mountOnEnter,
    unmountOnExit: h ?? J.unmountOnExit,
    onEnter: C,
    onEntering: b,
    onEntered: w,
    onExit: R,
    onExiting: O,
    onExited: M
  }];
}
const P1 = /* @__PURE__ */ Z.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (l, u) => {
    let {
      as: c = "div"
    } = l, f = bE(l, W$);
    const [v, {
      isActive: h,
      onEnter: m,
      onEntering: C,
      onEntered: b,
      onExit: w,
      onExiting: R,
      onExited: O,
      mountOnEnter: M,
      unmountOnExit: _,
      transition: $ = eS
    }] = I1(f);
    return /* @__PURE__ */ A.jsx(Wc.Provider, {
      value: null,
      children: /* @__PURE__ */ A.jsx(Yi.Provider, {
        value: null,
        children: /* @__PURE__ */ A.jsx($, {
          in: h,
          onEnter: m,
          onEntering: C,
          onEntered: b,
          onExit: w,
          onExiting: R,
          onExited: O,
          mountOnEnter: M,
          unmountOnExit: _,
          children: /* @__PURE__ */ A.jsx(c, Object.assign({}, v, {
            ref: u,
            hidden: !h,
            "aria-hidden": !h
          }))
        })
      })
    });
  }
);
P1.displayName = "TabPanel";
const B1 = (l) => {
  const {
    id: u,
    generateChildId: c,
    onSelect: f,
    activeKey: v,
    defaultActiveKey: h,
    transition: m,
    mountOnEnter: C,
    unmountOnExit: b,
    children: w
  } = l, [R, O] = UT(v, h, f), M = tR(u), _ = Zt(() => c || ((Y, z) => M ? `${M}-${z}-${Y}` : null), [M, c]), $ = Zt(() => ({
    onSelect: O,
    activeKey: R,
    transition: m,
    mountOnEnter: C || !1,
    unmountOnExit: b || !1,
    getControlledId: (Y) => _(Y, "tabpane"),
    getControllerId: (Y) => _(Y, "tab")
  }), [O, R, m, C, b, _]);
  return /* @__PURE__ */ A.jsx(Wc.Provider, {
    value: $,
    children: /* @__PURE__ */ A.jsx(Yi.Provider, {
      value: O || null,
      children: w
    })
  });
};
B1.Panel = P1;
const H1 = B1;
function iS(l) {
  return typeof l == "boolean" ? l ? Wi : eS : l;
}
const V1 = ({
  transition: l,
  ...u
}) => /* @__PURE__ */ A.jsx(H1, {
  ...u,
  transition: iS(l)
});
V1.displayName = "TabContainer";
const Y$ = V1, W1 = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "tab-content"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
W1.displayName = "TabContent";
const Y1 = W1, q1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  transition: u,
  ...c
}, f) => {
  const [{
    className: v,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: h = "div",
    ...m
  }, {
    isActive: C,
    onEnter: b,
    onEntering: w,
    onEntered: R,
    onExit: O,
    onExiting: M,
    onExited: _,
    mountOnEnter: $,
    unmountOnExit: Y,
    transition: z = Wi
  }] = I1({
    ...c,
    transition: iS(u)
  }), te = be(l, "tab-pane");
  return /* @__PURE__ */ A.jsx(Wc.Provider, {
    value: null,
    children: /* @__PURE__ */ A.jsx(Yi.Provider, {
      value: null,
      children: /* @__PURE__ */ A.jsx(z, {
        in: C,
        onEnter: b,
        onEntering: w,
        onEntered: R,
        onExit: O,
        onExiting: M,
        onExited: _,
        mountOnEnter: $,
        unmountOnExit: Y,
        children: /* @__PURE__ */ A.jsx(h, {
          ...m,
          ref: f,
          className: de(v, te, C && "active")
        })
      })
    })
  });
});
q1.displayName = "TabPane";
const G1 = q1, q$ = {
  eventKey: xe.oneOfType([xe.string, xe.number]),
  /**
   * Content for the tab title.
   */
  title: xe.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: xe.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: xe.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: xe.object
}, K1 = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
};
K1.propTypes = q$;
const UU = Object.assign(K1, {
  Container: Y$,
  Content: Y1,
  Pane: G1
}), G$ = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  striped: c,
  bordered: f,
  borderless: v,
  hover: h,
  size: m,
  variant: C,
  responsive: b,
  ...w
}, R) => {
  const O = be(l, "table"), M = de(u, O, C && `${O}-${C}`, m && `${O}-${m}`, c && `${O}-${typeof c == "string" ? `striped-${c}` : "striped"}`, f && `${O}-bordered`, v && `${O}-borderless`, h && `${O}-hover`), _ = /* @__PURE__ */ A.jsx("table", {
    ...w,
    className: M,
    ref: R
  });
  if (b) {
    let $ = `${O}-responsive`;
    return typeof b == "string" && ($ = `${$}-${b}`), /* @__PURE__ */ A.jsx("div", {
      className: $,
      children: _
    });
  }
  return _;
}), FU = G$;
function K$(l) {
  let u;
  return MT(l, (c) => {
    u == null && (u = c.props.eventKey);
  }), u;
}
function Q$(l) {
  const {
    title: u,
    eventKey: c,
    disabled: f,
    tabClassName: v,
    tabAttrs: h,
    id: m
  } = l.props;
  return u == null ? null : /* @__PURE__ */ A.jsx(s1, {
    as: "li",
    role: "presentation",
    children: /* @__PURE__ */ A.jsx(nS, {
      as: "button",
      type: "button",
      eventKey: c,
      disabled: f,
      id: m,
      className: v,
      ...h,
      children: u
    })
  });
}
const Q1 = (l) => {
  const {
    id: u,
    onSelect: c,
    transition: f,
    mountOnEnter: v = !1,
    unmountOnExit: h = !1,
    variant: m = "tabs",
    children: C,
    activeKey: b = K$(C),
    ...w
  } = $o(l, {
    activeKey: "onSelect"
  });
  return /* @__PURE__ */ A.jsxs(H1, {
    id: u,
    activeKey: b,
    onSelect: c,
    transition: iS(f),
    mountOnEnter: v,
    unmountOnExit: h,
    children: [/* @__PURE__ */ A.jsx(t$, {
      ...w,
      role: "tablist",
      as: "ul",
      variant: m,
      children: $c(C, Q$)
    }), /* @__PURE__ */ A.jsx(Y1, {
      children: $c(C, (R) => {
        const O = {
          ...R.props
        };
        return delete O.title, delete O.disabled, delete O.tabClassName, delete O.tabAttrs, /* @__PURE__ */ A.jsx(G1, {
          ...O
        });
      })
    })]
  });
};
Q1.displayName = "Tabs";
const zU = Q1, X$ = {
  [Ta]: "showing",
  [Lc]: "showing show"
}, X1 = /* @__PURE__ */ Z.forwardRef((l, u) => /* @__PURE__ */ A.jsx(Wi, {
  ...l,
  ref: u,
  transitionClasses: X$
}));
X1.displayName = "ToastFade";
const Z$ = X1, J$ = /* @__PURE__ */ Z.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {
  }
}), Z1 = J$, J1 = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  closeLabel: u = "Close",
  closeVariant: c,
  closeButton: f = !0,
  className: v,
  children: h,
  ...m
}, C) => {
  l = be(l, "toast-header");
  const b = yt(Z1), w = qt((R) => {
    b == null || b.onClose == null || b.onClose(R);
  });
  return /* @__PURE__ */ A.jsxs("div", {
    ref: C,
    ...m,
    className: de(l, v),
    children: [h, f && /* @__PURE__ */ A.jsx(jE, {
      "aria-label": u,
      variant: c,
      onClick: w,
      "data-dismiss": "toast"
    })]
  });
});
J1.displayName = "ToastHeader";
const eU = J1, eO = /* @__PURE__ */ Z.forwardRef(({
  className: l,
  bsPrefix: u,
  as: c = "div",
  ...f
}, v) => (u = be(u, "toast-body"), /* @__PURE__ */ A.jsx(c, {
  ref: v,
  className: de(l, u),
  ...f
})));
eO.displayName = "ToastBody";
const tU = eO, tO = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  className: u,
  transition: c = Z$,
  show: f = !0,
  animation: v = !0,
  delay: h = 5e3,
  autohide: m = !1,
  onClose: C,
  onEntered: b,
  onExit: w,
  onExiting: R,
  onEnter: O,
  onEntering: M,
  onExited: _,
  bg: $,
  ...Y
}, z) => {
  l = be(l, "toast");
  const te = Et(h), J = Et(C);
  ln(() => {
    te.current = h, J.current = C;
  }, [h, C]);
  const P = $E(), q = !!(m && f), j = Ct(() => {
    q && (J.current == null || J.current());
  }, [q]);
  ln(() => {
    P.set(j, te.current);
  }, [P, j]);
  const Q = Zt(() => ({
    onClose: C
  }), [C]), ne = !!(c && v), ce = /* @__PURE__ */ A.jsx("div", {
    ...Y,
    ref: z,
    className: de(l, u, $ && `bg-${$}`, !ne && (f ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return /* @__PURE__ */ A.jsx(Z1.Provider, {
    value: Q,
    children: ne && c ? /* @__PURE__ */ A.jsx(c, {
      in: f,
      onEnter: O,
      onEntering: M,
      onEntered: b,
      onExit: w,
      onExiting: R,
      onExited: _,
      unmountOnExit: !0,
      children: ce
    }) : ce
  });
});
tO.displayName = "Toast";
const IU = Object.assign(tO, {
  Body: tU,
  Header: eU
}), nU = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
}, nO = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  position: u,
  containerPosition: c,
  className: f,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: v = "div",
  ...h
}, m) => (l = be(l, "toast-container"), /* @__PURE__ */ A.jsx(v, {
  ref: m,
  ...h,
  className: de(l, u && nU[u], c && `position-${c}`, f)
})));
nO.displayName = "ToastContainer";
const PU = nO, rU = () => {
}, rO = /* @__PURE__ */ Z.forwardRef(({
  bsPrefix: l,
  name: u,
  className: c,
  checked: f,
  type: v,
  onChange: h,
  value: m,
  disabled: C,
  id: b,
  inputRef: w,
  ...R
}, O) => (l = be(l, "btn-check"), /* @__PURE__ */ A.jsxs(A.Fragment, {
  children: [/* @__PURE__ */ A.jsx("input", {
    className: l,
    name: u,
    type: v,
    value: m,
    ref: w,
    autoComplete: "off",
    checked: !!f,
    disabled: !!C,
    onChange: h || rU,
    id: b
  }), /* @__PURE__ */ A.jsx(Dm, {
    ...R,
    ref: O,
    className: de(c, C && "disabled"),
    type: void 0,
    role: void 0,
    as: "label",
    htmlFor: b
  })]
})));
rO.displayName = "ToggleButton";
const aU = rO, iU = /* @__PURE__ */ Z.forwardRef((l, u) => {
  const {
    children: c,
    type: f = "radio",
    name: v,
    value: h,
    onChange: m,
    vertical: C = !1,
    ...b
  } = $o(l, {
    value: "onChange"
  }), w = () => h == null ? [] : [].concat(h), R = (O, M) => {
    if (!m)
      return;
    const _ = w(), $ = _.indexOf(O) !== -1;
    if (f === "radio") {
      $ || m(O, M);
      return;
    }
    m($ ? _.filter((Y) => Y !== O) : [..._, O], M);
  };
  return f !== "radio" || v || (process.env.NODE_ENV !== "production" ? Em(!1, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"') : Em(!1)), /* @__PURE__ */ A.jsx(pT, {
    ...b,
    ref: u,
    vertical: C,
    children: $c(c, (O) => {
      const M = w(), {
        value: _,
        onChange: $
      } = O.props, Y = (z) => R(_, z);
      return /* @__PURE__ */ Z.cloneElement(O, {
        type: f,
        name: O.name || v,
        checked: M.indexOf(_) !== -1,
        onChange: jc($, Y)
      });
    })
  });
}), BU = Object.assign(iU, {
  Button: aU
});
export {
  cU as Accordion,
  BM as AccordionBody,
  Qw as AccordionButton,
  Yw as AccordionCollapse,
  km as AccordionContext,
  VM as AccordionHeader,
  WM as AccordionItem,
  fU as Alert,
  YM as AlertHeading,
  nA as AlertLink,
  rs as Anchor,
  dU as Badge,
  pU as Breadcrumb,
  iA as BreadcrumbItem,
  Dm as Button,
  pT as ButtonGroup,
  vU as ButtonToolbar,
  hU as Card,
  mT as CardBody,
  oA as CardFooter,
  mU as CardGroup,
  lA as CardHeader,
  uA as CardImg,
  sA as CardImgOverlay,
  cA as CardLink,
  dA as CardSubtitle,
  pA as CardText,
  hA as CardTitle,
  yU as Carousel,
  gA as CarouselCaption,
  EA as CarouselItem,
  jE as CloseButton,
  xA as Col,
  Bw as Collapse,
  gU as Container,
  Xa as Dropdown,
  SU as DropdownButton,
  iL as DropdownDivider,
  oL as DropdownHeader,
  lL as DropdownItem,
  uL as DropdownItemText,
  bR as DropdownMenu,
  xR as DropdownToggle,
  Wi as Fade,
  bU as Figure,
  pL as FigureCaption,
  dL as FigureImage,
  xL as FloatingLabel,
  CU as Form,
  wm as FormCheck,
  mL as FormControl,
  yL as FormFloating,
  LR as FormGroup,
  gL as FormLabel,
  SL as FormSelect,
  bL as FormText,
  fL as Image,
  xU as InputGroup,
  wU as ListGroup,
  AL as ListGroupItem,
  TU as Modal,
  WL as ModalBody,
  n1 as ModalDialog,
  qL as ModalFooter,
  KL as ModalHeader,
  XL as ModalTitle,
  t$ as Nav,
  OU as NavDropdown,
  s1 as NavItem,
  nS as NavLink,
  RU as Navbar,
  n$ as NavbarBrand,
  r$ as NavbarCollapse,
  y$ as NavbarOffcanvas,
  g$ as NavbarText,
  a$ as NavbarToggle,
  m$ as Offcanvas,
  u$ as OffcanvasBody,
  f$ as OffcanvasHeader,
  p$ as OffcanvasTitle,
  c$ as OffcanvasToggling,
  k$ as Overlay,
  kU as OverlayTrigger,
  _$ as PageItem,
  DU as Pagination,
  NU as Placeholder,
  U$ as PlaceholderButton,
  w$ as Popover,
  O1 as PopoverBody,
  C$ as PopoverHeader,
  _U as ProgressBar,
  MU as Ratio,
  AU as Row,
  EU as SSRProvider,
  jU as Spinner,
  LU as SplitButton,
  $U as Stack,
  UU as Tab,
  Y$ as TabContainer,
  Y1 as TabContent,
  G1 as TabPane,
  FU as Table,
  zU as Tabs,
  sU as ThemeProvider,
  IU as Toast,
  tU as ToastBody,
  PU as ToastContainer,
  eU as ToastHeader,
  aU as ToggleButton,
  BU as ToggleButtonGroup,
  T$ as Tooltip,
  HM as useAccordionButton
};
