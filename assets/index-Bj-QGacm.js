function Za(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var Ya =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var l2 = { exports: {} },
  Ol = {},
  i2 = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yr = Symbol.for("react.element"),
  Ja = Symbol.for("react.portal"),
  Xa = Symbol.for("react.fragment"),
  qa = Symbol.for("react.strict_mode"),
  _a = Symbol.for("react.profiler"),
  $a = Symbol.for("react.provider"),
  ec = Symbol.for("react.context"),
  tc = Symbol.for("react.forward_ref"),
  nc = Symbol.for("react.suspense"),
  rc = Symbol.for("react.memo"),
  lc = Symbol.for("react.lazy"),
  O0 = Symbol.iterator;
function ic(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (O0 && e[O0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var o2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  s2 = Object.assign,
  u2 = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = u2),
    (this.updater = n || o2);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function a2() {}
a2.prototype = Ln.prototype;
function To(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = u2),
    (this.updater = n || o2);
}
var Mo = (To.prototype = new a2());
Mo.constructor = To;
s2(Mo, Ln.prototype);
Mo.isPureReactComponent = !0;
var F0 = Array.isArray,
  c2 = Object.prototype.hasOwnProperty,
  Po = { current: null },
  d2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function f2(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      c2.call(t, r) && !d2.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), f = 0; f < u; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: yr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Po.current,
  };
}
function oc(e, t) {
  return {
    $$typeof: yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ro(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yr;
}
function sc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var z0 = /\/+/g;
function ei(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sc("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yr:
          case Ja:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ei(o, 0) : r),
      F0(l)
        ? ((n = ""),
          e != null && (n = e.replace(z0, "$&/") + "/"),
          Kr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (Ro(l) &&
            (l = oc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(z0, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), F0(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + ei(i, u);
      o += Kr(i, t, n, a, l);
    }
  else if (((a = ic(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + ei(i, u++)), (o += Kr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function uc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Zr = { transition: null },
  ac = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Zr,
    ReactCurrentOwner: Po,
  };
H.Children = {
  map: Nr,
  forEach: function (e, t, n) {
    Nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ro(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = Ln;
H.Fragment = Xa;
H.Profiler = _a;
H.PureComponent = To;
H.StrictMode = qa;
H.Suspense = nc;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ac;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = s2({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Po.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      c2.call(t, a) &&
        !d2.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var f = 0; f < a; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: yr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: ec,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $a, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = f2;
H.createFactory = function (e) {
  var t = f2.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: tc, render: e };
};
H.isValidElement = Ro;
H.lazy = function (e) {
  return { $$typeof: lc, _payload: { _status: -1, _result: e }, _init: uc };
};
H.memo = function (e, t) {
  return { $$typeof: rc, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Ae.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
H.useId = function () {
  return Ae.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Ae.current.useRef(e);
};
H.useState = function (e) {
  return Ae.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Ae.current.useTransition();
};
H.version = "18.2.0";
i2.exports = H;
var U = i2.exports;
const tt = ba(U),
  cc = Za({ __proto__: null, default: tt }, [U]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = U,
  fc = Symbol.for("react.element"),
  pc = Symbol.for("react.fragment"),
  hc = Object.prototype.hasOwnProperty,
  mc = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function p2(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) hc.call(t, r) && !gc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: fc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: mc.current,
  };
}
Ol.Fragment = pc;
Ol.jsx = p2;
Ol.jsxs = p2;
l2.exports = Ol;
var s = l2.exports,
  Mi = {},
  h2 = { exports: {} },
  ze = {},
  m2 = { exports: {} },
  g2 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, z) {
    var B = A.length;
    A.push(z);
    e: for (; 0 < B; ) {
      var F = (B - 1) >>> 1,
        V = A[F];
      if (0 < l(V, z)) (A[F] = z), (A[B] = V), (B = F);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var z = A[0],
      B = A.pop();
    if (B !== z) {
      A[0] = B;
      e: for (var F = 0, V = A.length, le = V >>> 1; F < le; ) {
        var K = 2 * (F + 1) - 1,
          ie = A[K],
          we = K + 1,
          We = A[we];
        if (0 > l(ie, B))
          we < V && 0 > l(We, ie)
            ? ((A[F] = We), (A[we] = B), (F = we))
            : ((A[F] = ie), (A[K] = B), (F = K));
        else if (we < V && 0 > l(We, B)) (A[F] = We), (A[we] = B), (F = we);
        else break e;
      }
    }
    return z;
  }
  function l(A, z) {
    var B = A.sortIndex - z.sortIndex;
    return B !== 0 ? B : A.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    f = [],
    v = 1,
    g = null,
    m = 3,
    w = !1,
    x = !1,
    C = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(A) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= A)
        r(f), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(f);
    }
  }
  function y(A) {
    if (((C = !1), h(A), !x))
      if (n(a) !== null) (x = !0), ke(k);
      else {
        var z = n(f);
        z !== null && Ee(y, z.startTime - A);
      }
  }
  function k(A, z) {
    (x = !1), C && ((C = !1), p(O), (O = -1)), (w = !0);
    var B = m;
    try {
      for (
        h(z), g = n(a);
        g !== null && (!(g.expirationTime > z) || (A && !ee()));

      ) {
        var F = g.callback;
        if (typeof F == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var V = F(g.expirationTime <= z);
          (z = e.unstable_now()),
            typeof V == "function" ? (g.callback = V) : g === n(a) && r(a),
            h(z);
        } else r(a);
        g = n(a);
      }
      if (g !== null) var le = !0;
      else {
        var K = n(f);
        K !== null && Ee(y, K.startTime - z), (le = !1);
      }
      return le;
    } finally {
      (g = null), (m = B), (w = !1);
    }
  }
  var L = !1,
    N = null,
    O = -1,
    j = 5,
    D = -1;
  function ee() {
    return !(e.unstable_now() - D < j);
  }
  function ae() {
    if (N !== null) {
      var A = e.unstable_now();
      D = A;
      var z = !0;
      try {
        z = N(!0, A);
      } finally {
        z ? ve() : ((L = !1), (N = null));
      }
    } else L = !1;
  }
  var ve;
  if (typeof c == "function")
    ve = function () {
      c(ae);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      Ie = ye.port2;
    (ye.port1.onmessage = ae),
      (ve = function () {
        Ie.postMessage(null);
      });
  } else
    ve = function () {
      T(ae, 0);
    };
  function ke(A) {
    (N = A), L || ((L = !0), ve());
  }
  function Ee(A, z) {
    O = T(function () {
      A(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), ke(k));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (A) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var B = m;
      m = z;
      try {
        return A();
      } finally {
        m = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, z) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var B = m;
      m = A;
      try {
        return z();
      } finally {
        m = B;
      }
    }),
    (e.unstable_scheduleCallback = function (A, z, B) {
      var F = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? F + B : F))
          : (B = F),
        A)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = B + V),
        (A = {
          id: v++,
          callback: z,
          priorityLevel: A,
          startTime: B,
          expirationTime: V,
          sortIndex: -1,
        }),
        B > F
          ? ((A.sortIndex = B),
            t(f, A),
            n(a) === null &&
              A === n(f) &&
              (C ? (p(O), (O = -1)) : (C = !0), Ee(y, B - F)))
          : ((A.sortIndex = V), t(a, A), x || w || ((x = !0), ke(k))),
        A
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (A) {
      var z = m;
      return function () {
        var B = m;
        m = z;
        try {
          return A.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    });
})(g2);
m2.exports = g2;
var vc = m2.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v2 = U,
  Fe = vc;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var y2 = new Set(),
  er = {};
function Xt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (er[e] = t, e = 0; e < t.length; e++) y2.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pi = Object.prototype.hasOwnProperty,
  yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  U0 = {},
  I0 = {};
function wc(e) {
  return Pi.call(I0, e)
    ? !0
    : Pi.call(U0, e)
    ? !1
    : yc.test(e)
    ? (I0[e] = !0)
    : ((U0[e] = !0), !1);
}
function xc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cc(e, t, n, r) {
  if (t === null || typeof t > "u" || xc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oo = /[\-:]([a-z])/g;
function Fo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oo, Fo);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oo, Fo);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Oo, Fo);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zo(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cc(t, n, l, r) && (n = null),
    r || l === null
      ? wc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = v2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  Uo = Symbol.for("react.strict_mode"),
  Ri = Symbol.for("react.profiler"),
  w2 = Symbol.for("react.provider"),
  x2 = Symbol.for("react.context"),
  Io = Symbol.for("react.forward_ref"),
  Oi = Symbol.for("react.suspense"),
  Fi = Symbol.for("react.suspense_list"),
  Do = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  C2 = Symbol.for("react.offscreen"),
  D0 = Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (D0 && e[D0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  ti;
function Vn(e) {
  if (ti === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ti = (t && t[1]) || "";
    }
  return (
    `
` +
    ti +
    e
  );
}
var ni = !1;
function ri(e, t) {
  if (!e || ni) return "";
  ni = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ni = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vn(e) : "";
}
function Ac(e) {
  switch (e.tag) {
    case 5:
      return Vn(e.type);
    case 16:
      return Vn("Lazy");
    case 13:
      return Vn("Suspense");
    case 19:
      return Vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ri(e.type, !1)), e;
    case 11:
      return (e = ri(e.type.render, !1)), e;
    case 1:
      return (e = ri(e.type, !0)), e;
    default:
      return "";
  }
}
function zi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case Ri:
      return "Profiler";
    case Uo:
      return "StrictMode";
    case Oi:
      return "Suspense";
    case Fi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case x2:
        return (e.displayName || "Context") + ".Consumer";
      case w2:
        return (e._context.displayName || "Context") + ".Provider";
      case Io:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Do:
        return (
          (t = e.displayName || null), t !== null ? t : zi(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return zi(e(t));
        } catch {}
    }
  return null;
}
function Sc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zi(t);
    case 8:
      return t === Uo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function A2(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kc(e) {
  var t = A2(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Tr(e) {
  e._valueTracker || (e._valueTracker = kc(e));
}
function S2(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = A2(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function rl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ui(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function B0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function k2(e, t) {
  (t = t.checked), t != null && zo(e, "checked", t, !1);
}
function Ii(e, t) {
  k2(e, t);
  var n = Pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Di(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Di(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function V0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Di(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function H0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function E2(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function G0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function j2(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? j2(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Mr,
  N2 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Mr = Mr || document.createElement("div"),
          Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wn = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0,
  },
  Ec = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function (e) {
  Ec.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
  });
});
function L2(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
    ? ("" + t).trim()
    : t + "px";
}
function T2(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = L2(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jc = q(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Hi(e, t) {
  if (t) {
    if (jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Gi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Qi = null;
function Bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wi = null,
  mn = null,
  gn = null;
function Q0(e) {
  if ((e = Cr(e))) {
    if (typeof Wi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Wi(e.stateNode, e.type, t));
  }
}
function M2(e) {
  mn ? (gn ? gn.push(e) : (gn = [e])) : (mn = e);
}
function P2() {
  if (mn) {
    var e = mn,
      t = gn;
    if (((gn = mn = null), Q0(e), t)) for (e = 0; e < t.length; e++) Q0(t[e]);
  }
}
function R2(e, t) {
  return e(t);
}
function O2() {}
var li = !1;
function F2(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return R2(e, t, n);
  } finally {
    (li = !1), (mn !== null || gn !== null) && (O2(), P2());
  }
}
function nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Ki = !1;
if (ct)
  try {
    var Rn = {};
    Object.defineProperty(Rn, "passive", {
      get: function () {
        Ki = !0;
      },
    }),
      window.addEventListener("test", Rn, Rn),
      window.removeEventListener("test", Rn, Rn);
  } catch {
    Ki = !1;
  }
function Nc(e, t, n, r, l, i, o, u, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var Kn = !1,
  ll = null,
  il = !1,
  Zi = null,
  Lc = {
    onError: function (e) {
      (Kn = !0), (ll = e);
    },
  };
function Tc(e, t, n, r, l, i, o, u, a) {
  (Kn = !1), (ll = null), Nc.apply(Lc, arguments);
}
function Mc(e, t, n, r, l, i, o, u, a) {
  if ((Tc.apply(this, arguments), Kn)) {
    if (Kn) {
      var f = ll;
      (Kn = !1), (ll = null);
    } else throw Error(S(198));
    il || ((il = !0), (Zi = f));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function z2(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function W0(e) {
  if (qt(e) !== e) throw Error(S(188));
}
function Pc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return W0(l), e;
        if (i === r) return W0(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function U2(e) {
  return (e = Pc(e)), e !== null ? I2(e) : null;
}
function I2(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = I2(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var D2 = Fe.unstable_scheduleCallback,
  K0 = Fe.unstable_cancelCallback,
  Rc = Fe.unstable_shouldYield,
  Oc = Fe.unstable_requestPaint,
  $ = Fe.unstable_now,
  Fc = Fe.unstable_getCurrentPriorityLevel,
  Vo = Fe.unstable_ImmediatePriority,
  B2 = Fe.unstable_UserBlockingPriority,
  ol = Fe.unstable_NormalPriority,
  zc = Fe.unstable_LowPriority,
  V2 = Fe.unstable_IdlePriority,
  Fl = null,
  nt = null;
function Uc(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : Bc,
  Ic = Math.log,
  Dc = Math.LN2;
function Bc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ic(e) / Dc) | 0)) | 0;
}
var Pr = 64,
  Rr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Gn(u)) : ((i &= o), i !== 0 && (r = Gn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Gn(o)) : i !== 0 && (r = Gn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Je(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Vc(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Yi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function H2() {
  var e = Pr;
  return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
function Gc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Je(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ho(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Q = 0;
function G2(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Q2,
  Go,
  W2,
  K2,
  Z2,
  bi = !1,
  Or = [],
  St = null,
  kt = null,
  Et = null,
  rr = new Map(),
  lr = new Map(),
  wt = [],
  Qc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Z0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Cr(t)), t !== null && Go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Wc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (St = On(St, e, t, n, r, l)), !0;
    case "dragenter":
      return (kt = On(kt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Et = On(Et, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return rr.set(i, On(rr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), lr.set(i, On(lr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Y2(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = z2(n)), t !== null)) {
          (e.blockedOn = t),
            Z2(e.priority, function () {
              W2(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qi = r), n.target.dispatchEvent(r), (Qi = null);
    } else return (t = Cr(n)), t !== null && Go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Y0(e, t, n) {
  Yr(e) && n.delete(t);
}
function Kc() {
  (bi = !1),
    St !== null && Yr(St) && (St = null),
    kt !== null && Yr(kt) && (kt = null),
    Et !== null && Yr(Et) && (Et = null),
    rr.forEach(Y0),
    lr.forEach(Y0);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bi ||
      ((bi = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Kc)));
}
function ir(e) {
  function t(l) {
    return Fn(l, e);
  }
  if (0 < Or.length) {
    Fn(Or[0], e);
    for (var n = 1; n < Or.length; n++) {
      var r = Or[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && Fn(St, e),
      kt !== null && Fn(kt, e),
      Et !== null && Fn(Et, e),
      rr.forEach(t),
      lr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Y2(n), n.blockedOn === null && wt.shift();
}
var vn = ht.ReactCurrentBatchConfig,
  ul = !0;
function Zc(e, t, n, r) {
  var l = Q,
    i = vn.transition;
  vn.transition = null;
  try {
    (Q = 1), Qo(e, t, n, r);
  } finally {
    (Q = l), (vn.transition = i);
  }
}
function Yc(e, t, n, r) {
  var l = Q,
    i = vn.transition;
  vn.transition = null;
  try {
    (Q = 4), Qo(e, t, n, r);
  } finally {
    (Q = l), (vn.transition = i);
  }
}
function Qo(e, t, n, r) {
  if (ul) {
    var l = Ji(e, t, n, r);
    if (l === null) mi(e, t, r, al, n), Z0(e, r);
    else if (Wc(l, e, t, n, r)) r.stopPropagation();
    else if ((Z0(e, r), t & 4 && -1 < Qc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Cr(l);
        if (
          (i !== null && Q2(i),
          (i = Ji(e, t, n, r)),
          i === null && mi(e, t, r, al, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else mi(e, t, r, null, n);
  }
}
var al = null;
function Ji(e, t, n, r) {
  if (((al = null), (e = Bo(r)), (e = Bt(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = z2(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (al = e), null;
}
function b2(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fc()) {
        case Vo:
          return 1;
        case B2:
          return 4;
        case ol:
        case zc:
          return 16;
        case V2:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  Wo = null,
  br = null;
function J2() {
  if (br) return br;
  var e,
    t = Wo,
    n = t.length,
    r,
    l = "value" in Ct ? Ct.value : Ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (br = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fr() {
  return !0;
}
function b0() {
  return !1;
}
function Ue(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fr
        : b0),
      (this.isPropagationStopped = b0),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fr));
      },
      persist: function () {},
      isPersistent: Fr,
    }),
    t
  );
}
var Tn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ko = Ue(Tn),
  xr = q({}, Tn, { view: 0, detail: 0 }),
  bc = Ue(xr),
  oi,
  si,
  zn,
  zl = q({}, xr, {
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
    getModifierState: Zo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((oi = e.screenX - zn.screenX), (si = e.screenY - zn.screenY))
              : (si = oi = 0),
            (zn = e)),
          oi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : si;
    },
  }),
  J0 = Ue(zl),
  Jc = q({}, zl, { dataTransfer: 0 }),
  Xc = Ue(Jc),
  qc = q({}, xr, { relatedTarget: 0 }),
  ui = Ue(qc),
  _c = q({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $c = Ue(_c),
  e1 = q({}, Tn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  t1 = Ue(e1),
  n1 = q({}, Tn, { data: 0 }),
  X0 = Ue(n1),
  r1 = {
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
    MozPrintableKey: "Unidentified",
  },
  l1 = {
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
    224: "Meta",
  },
  i1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function o1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = i1[e]) ? !!t[e] : !1;
}
function Zo() {
  return o1;
}
var s1 = q({}, xr, {
    key: function (e) {
      if (e.key) {
        var t = r1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? l1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zo,
    charCode: function (e) {
      return e.type === "keypress" ? Jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Jr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  u1 = Ue(s1),
  a1 = q({}, zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  q0 = Ue(a1),
  c1 = q({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo,
  }),
  d1 = Ue(c1),
  f1 = q({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  p1 = Ue(f1),
  h1 = q({}, zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  m1 = Ue(h1),
  g1 = [9, 13, 27, 32],
  Yo = ct && "CompositionEvent" in window,
  Zn = null;
ct && "documentMode" in document && (Zn = document.documentMode);
var v1 = ct && "TextEvent" in window && !Zn,
  X2 = ct && (!Yo || (Zn && 8 < Zn && 11 >= Zn)),
  _0 = " ",
  $0 = !1;
function q2(e, t) {
  switch (e) {
    case "keyup":
      return g1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _2(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rn = !1;
function y1(e, t) {
  switch (e) {
    case "compositionend":
      return _2(t);
    case "keypress":
      return t.which !== 32 ? null : (($0 = !0), _0);
    case "textInput":
      return (e = t.data), e === _0 && $0 ? null : e;
    default:
      return null;
  }
}
function w1(e, t) {
  if (rn)
    return e === "compositionend" || (!Yo && q2(e, t))
      ? ((e = J2()), (br = Wo = Ct = null), (rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return X2 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var x1 = {
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
  week: !0,
};
function es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!x1[e.type] : t === "textarea";
}
function $2(e, t, n, r) {
  M2(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new Ko("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yn = null,
  or = null;
function C1(e) {
  cu(e, 0);
}
function Ul(e) {
  var t = sn(e);
  if (S2(t)) return e;
}
function A1(e, t) {
  if (e === "change") return t;
}
var eu = !1;
if (ct) {
  var ai;
  if (ct) {
    var ci = "oninput" in document;
    if (!ci) {
      var ts = document.createElement("div");
      ts.setAttribute("oninput", "return;"),
        (ci = typeof ts.oninput == "function");
    }
    ai = ci;
  } else ai = !1;
  eu = ai && (!document.documentMode || 9 < document.documentMode);
}
function ns() {
  Yn && (Yn.detachEvent("onpropertychange", tu), (or = Yn = null));
}
function tu(e) {
  if (e.propertyName === "value" && Ul(or)) {
    var t = [];
    $2(t, or, e, Bo(e)), F2(C1, t);
  }
}
function S1(e, t, n) {
  e === "focusin"
    ? (ns(), (Yn = t), (or = n), Yn.attachEvent("onpropertychange", tu))
    : e === "focusout" && ns();
}
function k1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ul(or);
}
function E1(e, t) {
  if (e === "click") return Ul(t);
}
function j1(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function N1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : N1;
function sr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Pi.call(t, l) || !qe(e[l], t[l])) return !1;
  }
  return !0;
}
function rs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ls(e, t) {
  var n = rs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rs(n);
  }
}
function nu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ru() {
  for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rl(e.document);
  }
  return t;
}
function bo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function L1(e) {
  var t = ru(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ls(n, i));
        var o = ls(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var T1 = ct && "documentMode" in document && 11 >= document.documentMode,
  ln = null,
  Xi = null,
  bn = null,
  qi = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qi ||
    ln == null ||
    ln !== rl(r) ||
    ((r = ln),
    "selectionStart" in r && bo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bn && sr(bn, r)) ||
      ((bn = r),
      (r = cl(Xi, "onSelect")),
      0 < r.length &&
        ((t = new Ko("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ln))));
}
function zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var on = {
    animationend: zr("Animation", "AnimationEnd"),
    animationiteration: zr("Animation", "AnimationIteration"),
    animationstart: zr("Animation", "AnimationStart"),
    transitionend: zr("Transition", "TransitionEnd"),
  },
  di = {},
  lu = {};
ct &&
  ((lu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete on.animationend.animation,
    delete on.animationiteration.animation,
    delete on.animationstart.animation),
  "TransitionEvent" in window || delete on.transitionend.transition);
function Il(e) {
  if (di[e]) return di[e];
  if (!on[e]) return e;
  var t = on[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lu) return (di[e] = t[n]);
  return e;
}
var iu = Il("animationend"),
  ou = Il("animationiteration"),
  su = Il("animationstart"),
  uu = Il("transitionend"),
  au = new Map(),
  os =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ot(e, t) {
  au.set(e, t), Xt(t, [e]);
}
for (var fi = 0; fi < os.length; fi++) {
  var pi = os[fi],
    M1 = pi.toLowerCase(),
    P1 = pi[0].toUpperCase() + pi.slice(1);
  Ot(M1, "on" + P1);
}
Ot(iu, "onAnimationEnd");
Ot(ou, "onAnimationIteration");
Ot(su, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(uu, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  R1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function ss(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mc(r, t, void 0, e), (e.currentTarget = null);
}
function cu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          ss(l, u, f), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          ss(l, u, f), (i = a);
        }
    }
  }
  if (il) throw ((e = Zi), (il = !1), (Zi = null), e);
}
function Z(e, t) {
  var n = t[no];
  n === void 0 && (n = t[no] = new Set());
  var r = e + "__bubble";
  n.has(r) || (du(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), du(n, e, r, t);
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function ur(e) {
  if (!e[Ur]) {
    (e[Ur] = !0),
      y2.forEach(function (n) {
        n !== "selectionchange" && (R1.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || ((t[Ur] = !0), hi("selectionchange", !1, t));
  }
}
function du(e, t, n, r) {
  switch (b2(t)) {
    case 1:
      var l = Zc;
      break;
    case 4:
      l = Yc;
      break;
    default:
      l = Qo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ki ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function mi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Bt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  F2(function () {
    var f = i,
      v = Bo(n),
      g = [];
    e: {
      var m = au.get(e);
      if (m !== void 0) {
        var w = Ko,
          x = e;
        switch (e) {
          case "keypress":
            if (Jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = u1;
            break;
          case "focusin":
            (x = "focus"), (w = ui);
            break;
          case "focusout":
            (x = "blur"), (w = ui);
            break;
          case "beforeblur":
          case "afterblur":
            w = ui;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = J0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Xc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = d1;
            break;
          case iu:
          case ou:
          case su:
            w = $c;
            break;
          case uu:
            w = p1;
            break;
          case "scroll":
            w = bc;
            break;
          case "wheel":
            w = m1;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = t1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = q0;
        }
        var C = (t & 4) !== 0,
          T = !C && e === "scroll",
          p = C ? (m !== null ? m + "Capture" : null) : m;
        C = [];
        for (var c = f, h; c !== null; ) {
          h = c;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              p !== null && ((y = nr(c, p)), y != null && C.push(ar(c, y, h)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < C.length &&
          ((m = new w(m, x, null, n, v)), g.push({ event: m, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Qi &&
            (x = n.relatedTarget || n.fromElement) &&
            (Bt(x) || x[dt]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = f),
              (x = x ? Bt(x) : null),
              x !== null &&
                ((T = qt(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = f)),
          w !== x)
        ) {
          if (
            ((C = J0),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = q0),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (T = w == null ? m : sn(w)),
            (h = x == null ? m : sn(x)),
            (m = new C(y, c + "leave", w, n, v)),
            (m.target = T),
            (m.relatedTarget = h),
            (y = null),
            Bt(v) === f &&
              ((C = new C(p, c + "enter", x, n, v)),
              (C.target = h),
              (C.relatedTarget = T),
              (y = C)),
            (T = y),
            w && x)
          )
            t: {
              for (C = w, p = x, c = 0, h = C; h; h = $t(h)) c++;
              for (h = 0, y = p; y; y = $t(y)) h++;
              for (; 0 < c - h; ) (C = $t(C)), c--;
              for (; 0 < h - c; ) (p = $t(p)), h--;
              for (; c--; ) {
                if (C === p || (p !== null && C === p.alternate)) break t;
                (C = $t(C)), (p = $t(p));
              }
              C = null;
            }
          else C = null;
          w !== null && us(g, m, w, C, !1),
            x !== null && T !== null && us(g, T, x, C, !0);
        }
      }
      e: {
        if (
          ((m = f ? sn(f) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var k = A1;
        else if (es(m))
          if (eu) k = j1;
          else {
            k = k1;
            var L = S1;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = E1);
        if (k && (k = k(e, f))) {
          $2(g, k, n, v);
          break e;
        }
        L && L(e, m, f),
          e === "focusout" &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === "number" &&
            Di(m, "number", m.value);
      }
      switch (((L = f ? sn(f) : window), e)) {
        case "focusin":
          (es(L) || L.contentEditable === "true") &&
            ((ln = L), (Xi = f), (bn = null));
          break;
        case "focusout":
          bn = Xi = ln = null;
          break;
        case "mousedown":
          qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qi = !1), is(g, n, v);
          break;
        case "selectionchange":
          if (T1) break;
        case "keydown":
        case "keyup":
          is(g, n, v);
      }
      var N;
      if (Yo)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        rn
          ? q2(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (X2 &&
          n.locale !== "ko" &&
          (rn || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && rn && (N = J2())
            : ((Ct = v),
              (Wo = "value" in Ct ? Ct.value : Ct.textContent),
              (rn = !0))),
        (L = cl(f, O)),
        0 < L.length &&
          ((O = new X0(O, e, null, n, v)),
          g.push({ event: O, listeners: L }),
          N ? (O.data = N) : ((N = _2(n)), N !== null && (O.data = N)))),
        (N = v1 ? y1(e, n) : w1(e, n)) &&
          ((f = cl(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new X0("onBeforeInput", "beforeinput", null, n, v)),
            g.push({ event: v, listeners: f }),
            (v.data = N)));
    }
    cu(g, t);
  });
}
function ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = nr(e, n)),
      i != null && r.unshift(ar(e, i, l)),
      (i = nr(e, t)),
      i != null && r.push(ar(e, i, l))),
      (e = e.return);
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function us(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      f = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((a = nr(n, i)), a != null && o.unshift(ar(n, a, u)))
        : l || ((a = nr(n, i)), a != null && o.push(ar(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var O1 = /\r\n?/g,
  F1 = /\u0000|\uFFFD/g;
function as(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      O1,
      `
`
    )
    .replace(F1, "");
}
function Ir(e, t, n) {
  if (((t = as(t)), as(e) !== t && n)) throw Error(S(425));
}
function dl() {}
var _i = null,
  $i = null;
function eo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var to = typeof setTimeout == "function" ? setTimeout : void 0,
  z1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cs = typeof Promise == "function" ? Promise : void 0,
  U1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cs < "u"
      ? function (e) {
          return cs.resolve(null).then(e).catch(I1);
        }
      : to;
function I1(e) {
  setTimeout(function () {
    throw e;
  });
}
function gi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ir(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ds(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + Mn,
  cr = "__reactProps$" + Mn,
  dt = "__reactContainer$" + Mn,
  no = "__reactEvents$" + Mn,
  D1 = "__reactListeners$" + Mn,
  B1 = "__reactHandles$" + Mn;
function Bt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ds(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = ds(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cr(e) {
  return (
    (e = e[et] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Dl(e) {
  return e[cr] || null;
}
var ro = [],
  un = -1;
function Ft(e) {
  return { current: e };
}
function Y(e) {
  0 > un || ((e.current = ro[un]), (ro[un] = null), un--);
}
function W(e, t) {
  un++, (ro[un] = e.current), (e.current = t);
}
var Rt = {},
  ge = Ft(Rt),
  Le = Ft(!1),
  Kt = Rt;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function fl() {
  Y(Le), Y(ge);
}
function fs(e, t, n) {
  if (ge.current !== Rt) throw Error(S(168));
  W(ge, t), W(Le, n);
}
function fu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Sc(e) || "Unknown", l));
  return q({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Kt = ge.current),
    W(ge, e),
    W(Le, Le.current),
    !0
  );
}
function ps(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = fu(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Le),
      Y(ge),
      W(ge, e))
    : Y(Le),
    W(Le, n);
}
var ot = null,
  Bl = !1,
  vi = !1;
function pu(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function V1(e) {
  (Bl = !0), pu(e);
}
function zt() {
  if (!vi && ot !== null) {
    vi = !0;
    var e = 0,
      t = Q;
    try {
      var n = ot;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (Bl = !1);
    } catch (l) {
      throw (ot !== null && (ot = ot.slice(e + 1)), D2(Vo, zt), l);
    } finally {
      (Q = t), (vi = !1);
    }
  }
  return null;
}
var an = [],
  cn = 0,
  hl = null,
  ml = 0,
  De = [],
  Be = 0,
  Zt = null,
  st = 1,
  ut = "";
function It(e, t) {
  (an[cn++] = ml), (an[cn++] = hl), (hl = e), (ml = t);
}
function hu(e, t, n) {
  (De[Be++] = st), (De[Be++] = ut), (De[Be++] = Zt), (Zt = e);
  var r = st;
  e = ut;
  var l = 32 - Je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Je(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (st = (1 << (32 - Je(t) + l)) | (n << l) | r),
      (ut = i + e);
  } else (st = (1 << i) | (n << l) | r), (ut = e);
}
function Jo(e) {
  e.return !== null && (It(e, 1), hu(e, 1, 0));
}
function Xo(e) {
  for (; e === hl; )
    (hl = an[--cn]), (an[cn] = null), (ml = an[--cn]), (an[cn] = null);
  for (; e === Zt; )
    (Zt = De[--Be]),
      (De[Be] = null),
      (ut = De[--Be]),
      (De[Be] = null),
      (st = De[--Be]),
      (De[Be] = null);
}
var Oe = null,
  Re = null,
  b = !1,
  be = null;
function mu(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Re = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zt !== null ? { id: st, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function io(e) {
  if (b) {
    var t = Re;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (lo(e)) throw Error(S(418));
        t = jt(n.nextSibling);
        var r = Oe;
        t && hs(e, t)
          ? mu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Oe = e));
      }
    } else {
      if (lo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (Oe = e);
    }
  }
}
function ms(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Dr(e) {
  if (e !== Oe) return !1;
  if (!b) return ms(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !eo(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (lo(e)) throw (gu(), Error(S(418)));
    for (; t; ) mu(e, t), (t = jt(t.nextSibling));
  }
  if ((ms(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Oe ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function gu() {
  for (var e = Re; e; ) e = jt(e.nextSibling);
}
function An() {
  (Re = Oe = null), (b = !1);
}
function qo(e) {
  be === null ? (be = [e]) : be.push(e);
}
var H1 = ht.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var gl = Ft(null),
  vl = null,
  dn = null,
  _o = null;
function $o() {
  _o = dn = vl = null;
}
function e0(e) {
  var t = gl.current;
  Y(gl), (e._currentValue = t);
}
function oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yn(e, t) {
  (vl = e),
    (_o = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (_o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (vl === null) throw Error(S(308));
      (dn = e), (vl.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var Vt = null;
function t0(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function vu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), t0(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function n0(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function at(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), t0(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function Xr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
function gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yl(e, t, n, r) {
  var l = e.updateQueue;
  yt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      f = a.next;
    (a.next = null), o === null ? (i = f) : (o.next = f), (o = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = f) : (u.next = f),
        (v.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var g = l.baseState;
    (o = 0), (v = f = a = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            C = u;
          switch (((m = t), (w = n), C.tag)) {
            case 1:
              if (((x = C.payload), typeof x == "function")) {
                g = x.call(w, g, m);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = C.payload),
                (m = typeof x == "function" ? x.call(w, g, m) : x),
                m == null)
              )
                break e;
              g = q({}, g, m);
              break e;
            case 2:
              yt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((f = v = w), (a = g)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (a = g),
      (l.baseState = a),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (bt |= o), (e.lanes = o), (e.memoizedState = g);
  }
}
function vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var wu = new v2.Component().refs;
function so(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = Tt(e),
      i = at(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Nt(e, i, l)),
      t !== null && (Xe(t, e, l, r), Xr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = Tt(e),
      i = at(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Nt(e, i, l)),
      t !== null && (Xe(t, e, l, r), Xr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Tt(e),
      l = at(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (Xe(t, e, r, n), Xr(t, e, r));
  },
};
function ys(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sr(n, r) || !sr(l, i)
      : !0
  );
}
function xu(e, t, n) {
  var r = !1,
    l = Rt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ge(i))
      : ((l = Te(t) ? Kt : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Cn(e, l) : Rt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ws(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function uo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = wu), n0(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ge(i))
    : ((i = Te(t) ? Kt : ge.current), (l.context = Cn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (so(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vl.enqueueReplaceState(l, l.state, null),
      yl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === wu && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xs(e) {
  var t = e._init;
  return t(e._payload);
}
function Cu(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [c]), (p.flags |= 16)) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = Mt(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((p.flags |= 2), c) : h)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, h, y) {
    return c === null || c.tag !== 6
      ? ((c = ki(h, p.mode, y)), (c.return = p), c)
      : ((c = l(c, h)), (c.return = p), c);
  }
  function a(p, c, h, y) {
    var k = h.type;
    return k === nn
      ? v(p, c, h.props.children, y, h.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === vt &&
            xs(k) === c.type))
      ? ((y = l(c, h.props)), (y.ref = Un(p, c, h)), (y.return = p), y)
      : ((y = nl(h.type, h.key, h.props, null, p.mode, y)),
        (y.ref = Un(p, c, h)),
        (y.return = p),
        y);
  }
  function f(p, c, h, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = Ei(h, p.mode, y)), (c.return = p), c)
      : ((c = l(c, h.children || [])), (c.return = p), c);
  }
  function v(p, c, h, y, k) {
    return c === null || c.tag !== 7
      ? ((c = Wt(h, p.mode, y, k)), (c.return = p), c)
      : ((c = l(c, h)), (c.return = p), c);
  }
  function g(p, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ki("" + c, p.mode, h)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return (
            (h = nl(c.type, c.key, c.props, null, p.mode, h)),
            (h.ref = Un(p, null, c)),
            (h.return = p),
            h
          );
        case tn:
          return (c = Ei(c, p.mode, h)), (c.return = p), c;
        case vt:
          var y = c._init;
          return g(p, y(c._payload), h);
      }
      if (Hn(c) || Pn(c))
        return (c = Wt(c, p.mode, h, null)), (c.return = p), c;
      Br(p, c);
    }
    return null;
  }
  function m(p, c, h, y) {
    var k = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : u(p, c, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lr:
          return h.key === k ? a(p, c, h, y) : null;
        case tn:
          return h.key === k ? f(p, c, h, y) : null;
        case vt:
          return (k = h._init), m(p, c, k(h._payload), y);
      }
      if (Hn(h) || Pn(h)) return k !== null ? null : v(p, c, h, y, null);
      Br(p, h);
    }
    return null;
  }
  function w(p, c, h, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (p = p.get(h) || null), u(c, p, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Lr:
          return (p = p.get(y.key === null ? h : y.key) || null), a(c, p, y, k);
        case tn:
          return (p = p.get(y.key === null ? h : y.key) || null), f(c, p, y, k);
        case vt:
          var L = y._init;
          return w(p, c, h, L(y._payload), k);
      }
      if (Hn(y) || Pn(y)) return (p = p.get(h) || null), v(c, p, y, k, null);
      Br(c, y);
    }
    return null;
  }
  function x(p, c, h, y) {
    for (
      var k = null, L = null, N = c, O = (c = 0), j = null;
      N !== null && O < h.length;
      O++
    ) {
      N.index > O ? ((j = N), (N = null)) : (j = N.sibling);
      var D = m(p, N, h[O], y);
      if (D === null) {
        N === null && (N = j);
        break;
      }
      e && N && D.alternate === null && t(p, N),
        (c = i(D, c, O)),
        L === null ? (k = D) : (L.sibling = D),
        (L = D),
        (N = j);
    }
    if (O === h.length) return n(p, N), b && It(p, O), k;
    if (N === null) {
      for (; O < h.length; O++)
        (N = g(p, h[O], y)),
          N !== null &&
            ((c = i(N, c, O)), L === null ? (k = N) : (L.sibling = N), (L = N));
      return b && It(p, O), k;
    }
    for (N = r(p, N); O < h.length; O++)
      (j = w(N, p, O, h[O], y)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? O : j.key),
          (c = i(j, c, O)),
          L === null ? (k = j) : (L.sibling = j),
          (L = j));
    return (
      e &&
        N.forEach(function (ee) {
          return t(p, ee);
        }),
      b && It(p, O),
      k
    );
  }
  function C(p, c, h, y) {
    var k = Pn(h);
    if (typeof k != "function") throw Error(S(150));
    if (((h = k.call(h)), h == null)) throw Error(S(151));
    for (
      var L = (k = null), N = c, O = (c = 0), j = null, D = h.next();
      N !== null && !D.done;
      O++, D = h.next()
    ) {
      N.index > O ? ((j = N), (N = null)) : (j = N.sibling);
      var ee = m(p, N, D.value, y);
      if (ee === null) {
        N === null && (N = j);
        break;
      }
      e && N && ee.alternate === null && t(p, N),
        (c = i(ee, c, O)),
        L === null ? (k = ee) : (L.sibling = ee),
        (L = ee),
        (N = j);
    }
    if (D.done) return n(p, N), b && It(p, O), k;
    if (N === null) {
      for (; !D.done; O++, D = h.next())
        (D = g(p, D.value, y)),
          D !== null &&
            ((c = i(D, c, O)), L === null ? (k = D) : (L.sibling = D), (L = D));
      return b && It(p, O), k;
    }
    for (N = r(p, N); !D.done; O++, D = h.next())
      (D = w(N, p, O, D.value, y)),
        D !== null &&
          (e && D.alternate !== null && N.delete(D.key === null ? O : D.key),
          (c = i(D, c, O)),
          L === null ? (k = D) : (L.sibling = D),
          (L = D));
    return (
      e &&
        N.forEach(function (ae) {
          return t(p, ae);
        }),
      b && It(p, O),
      k
    );
  }
  function T(p, c, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === nn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Lr:
          e: {
            for (var k = h.key, L = c; L !== null; ) {
              if (L.key === k) {
                if (((k = h.type), k === nn)) {
                  if (L.tag === 7) {
                    n(p, L.sibling),
                      (c = l(L, h.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  L.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === vt &&
                    xs(k) === L.type)
                ) {
                  n(p, L.sibling),
                    (c = l(L, h.props)),
                    (c.ref = Un(p, L, h)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            h.type === nn
              ? ((c = Wt(h.props.children, p.mode, y, h.key)),
                (c.return = p),
                (p = c))
              : ((y = nl(h.type, h.key, h.props, null, p.mode, y)),
                (y.ref = Un(p, c, h)),
                (y.return = p),
                (p = y));
          }
          return o(p);
        case tn:
          e: {
            for (L = h.key; c !== null; ) {
              if (c.key === L)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = Ei(h, p.mode, y)), (c.return = p), (p = c);
          }
          return o(p);
        case vt:
          return (L = h._init), T(p, c, L(h._payload), y);
      }
      if (Hn(h)) return x(p, c, h, y);
      if (Pn(h)) return C(p, c, h, y);
      Br(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, h)), (c.return = p), (p = c))
          : (n(p, c), (c = ki(h, p.mode, y)), (c.return = p), (p = c)),
        o(p))
      : n(p, c);
  }
  return T;
}
var Sn = Cu(!0),
  Au = Cu(!1),
  Ar = {},
  rt = Ft(Ar),
  dr = Ft(Ar),
  fr = Ft(Ar);
function Ht(e) {
  if (e === Ar) throw Error(S(174));
  return e;
}
function r0(e, t) {
  switch ((W(fr, t), W(dr, e), W(rt, Ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vi(t, e));
  }
  Y(rt), W(rt, t);
}
function kn() {
  Y(rt), Y(dr), Y(fr);
}
function Su(e) {
  Ht(fr.current);
  var t = Ht(rt.current),
    n = Vi(t, e.type);
  t !== n && (W(dr, e), W(rt, n));
}
function l0(e) {
  dr.current === e && (Y(rt), Y(dr));
}
var J = Ft(0);
function wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var yi = [];
function i0() {
  for (var e = 0; e < yi.length; e++)
    yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var qr = ht.ReactCurrentDispatcher,
  wi = ht.ReactCurrentBatchConfig,
  Yt = 0,
  X = null,
  ne = null,
  se = null,
  xl = !1,
  Jn = !1,
  pr = 0,
  G1 = 0;
function pe() {
  throw Error(S(321));
}
function o0(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function s0(e, t, n, r, l, i) {
  if (
    ((Yt = i),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? Z1 : Y1),
    (e = n(r, l)),
    Jn)
  ) {
    i = 0;
    do {
      if (((Jn = !1), (pr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (se = ne = null),
        (t.updateQueue = null),
        (qr.current = b1),
        (e = n(r, l));
    } while (Jn);
  }
  if (
    ((qr.current = Cl),
    (t = ne !== null && ne.next !== null),
    (Yt = 0),
    (se = ne = X = null),
    (xl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function u0() {
  var e = pr !== 0;
  return (pr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (X.memoizedState = se = e) : (se = se.next = e), se;
}
function Qe() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = se === null ? X.memoizedState : se.next;
  if (t !== null) (se = t), (ne = e);
  else {
    if (e === null) throw Error(S(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      se === null ? (X.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xi(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ne,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      f = i;
    do {
      var v = f.lane;
      if ((Yt & v) === v)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var g = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        a === null ? ((u = a = g), (o = r)) : (a = a.next = g),
          (X.lanes |= v),
          (bt |= v);
      }
      f = f.next;
    } while (f !== null && f !== i);
    a === null ? (o = r) : (a.next = u),
      qe(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (X.lanes |= i), (bt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ci(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    qe(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ku() {}
function Eu(e, t) {
  var n = X,
    r = Qe(),
    l = t(),
    i = !qe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ne = !0)),
    (r = r.queue),
    a0(Lu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mr(9, Nu.bind(null, n, r, l, t), void 0, null),
      ue === null)
    )
      throw Error(S(349));
    Yt & 30 || ju(n, t, l);
  }
  return l;
}
function ju(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tu(t) && Mu(e);
}
function Lu(e, t, n) {
  return n(function () {
    Tu(t) && Mu(e);
  });
}
function Tu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Mu(e) {
  var t = ft(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Cs(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = K1.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pu() {
  return Qe().memoizedState;
}
function _r(e, t, n, r) {
  var l = $e();
  (X.flags |= e),
    (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hl(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ne !== null) {
    var o = ne.memoizedState;
    if (((i = o.destroy), r !== null && o0(r, o.deps))) {
      l.memoizedState = mr(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = mr(1 | t, n, i, r));
}
function As(e, t) {
  return _r(8390656, 8, e, t);
}
function a0(e, t) {
  return Hl(2048, 8, e, t);
}
function Ru(e, t) {
  return Hl(4, 2, e, t);
}
function Ou(e, t) {
  return Hl(4, 4, e, t);
}
function Fu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function zu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hl(4, 4, Fu.bind(null, t, e), n)
  );
}
function c0() {}
function Uu(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && o0(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Iu(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && o0(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Du(e, t, n) {
  return Yt & 21
    ? (qe(n, t) || ((n = H2()), (X.lanes |= n), (bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Q1(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wi.transition;
  wi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (wi.transition = r);
  }
}
function Bu() {
  return Qe().memoizedState;
}
function W1(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vu(e))
  )
    Hu(t, n);
  else if (((n = vu(e, t, n, r)), n !== null)) {
    var l = Ce();
    Xe(n, e, r, l), Gu(n, t, r);
  }
}
function K1(e, t, n) {
  var r = Tt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vu(e)) Hu(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), qe(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), t0(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = vu(e, t, l, r)),
      n !== null && ((l = Ce()), Xe(n, e, r, l), Gu(n, t, r));
  }
}
function Vu(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Hu(e, t) {
  Jn = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
var Cl = {
    readContext: Ge,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Z1 = {
    readContext: Ge,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: As,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, Fu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = W1.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cs,
    useDebugValue: c0,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Cs(!1),
        t = e[0];
      return (e = Q1.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = $e();
      if (b) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(S(349));
        Yt & 30 || ju(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        As(Lu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mr(9, Nu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = ue.identifierPrefix;
      if (b) {
        var n = ut,
          r = st;
        (n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Y1 = {
    readContext: Ge,
    useCallback: Uu,
    useContext: Ge,
    useEffect: a0,
    useImperativeHandle: zu,
    useInsertionEffect: Ru,
    useLayoutEffect: Ou,
    useMemo: Iu,
    useReducer: xi,
    useRef: Pu,
    useState: function () {
      return xi(hr);
    },
    useDebugValue: c0,
    useDeferredValue: function (e) {
      var t = Qe();
      return Du(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = xi(hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ku,
    useSyncExternalStore: Eu,
    useId: Bu,
    unstable_isNewReconciler: !1,
  },
  b1 = {
    readContext: Ge,
    useCallback: Uu,
    useContext: Ge,
    useEffect: a0,
    useImperativeHandle: zu,
    useInsertionEffect: Ru,
    useLayoutEffect: Ou,
    useMemo: Iu,
    useReducer: Ci,
    useRef: Pu,
    useState: function () {
      return Ci(hr);
    },
    useDebugValue: c0,
    useDeferredValue: function (e) {
      var t = Qe();
      return ne === null ? (t.memoizedState = e) : Du(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ci(hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ku,
    useSyncExternalStore: Eu,
    useId: Bu,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ac(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var J1 = typeof WeakMap == "function" ? WeakMap : Map;
function Qu(e, t, n) {
  (n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Sl || ((Sl = !0), (xo = r)), ao(e, t);
    }),
    n
  );
}
function Wu(e, t, n) {
  (n = at(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ao(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ao(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new J1();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ad.bind(null, e, t, n)), t.then(e, e));
}
function ks(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Es(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = at(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var X1 = ht.ReactCurrentOwner,
  Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Au(t, null, n, r) : Sn(t, e.child, n, r);
}
function js(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    yn(t, l),
    (r = s0(e, t, n, r, i, l)),
    (n = u0()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (b && n && Jo(t), (t.flags |= 1), xe(e, t, r, l), t.child)
  );
}
function Ns(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !y0(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ku(e, t, i, r, l))
      : ((e = nl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sr), n(o, r) && e.ref === t.ref)
    )
      return pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Mt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ku(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (sr(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), pt(e, t, l);
  }
  return co(e, t, n, r, l);
}
function Zu(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(pn, Pe),
        (Pe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(pn, Pe),
          (Pe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        W(pn, Pe),
        (Pe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(pn, Pe),
      (Pe |= r);
  return xe(e, t, l, n), t.child;
}
function Yu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function co(e, t, n, r, l) {
  var i = Te(n) ? Kt : ge.current;
  return (
    (i = Cn(t, i)),
    yn(t, l),
    (n = s0(e, t, n, r, i, l)),
    (r = u0()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        pt(e, t, l))
      : (b && r && Jo(t), (t.flags |= 1), xe(e, t, n, l), t.child)
  );
}
function Ls(e, t, n, r, l) {
  if (Te(n)) {
    var i = !0;
    pl(t);
  } else i = !1;
  if ((yn(t, l), t.stateNode === null))
    $r(e, t), xu(t, n, r), uo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Ge(f))
      : ((f = Te(n) ? Kt : ge.current), (f = Cn(t, f)));
    var v = n.getDerivedStateFromProps,
      g =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== f) && ws(t, o, r, f)),
      (yt = !1);
    var m = t.memoizedState;
    (o.state = m),
      yl(t, r, o, l),
      (a = t.memoizedState),
      u !== r || m !== a || Le.current || yt
        ? (typeof v == "function" && (so(t, n, v, r), (a = t.memoizedState)),
          (u = yt || ys(t, n, u, r, m, a, f))
            ? (g ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      yu(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ze(t.type, u)),
      (o.props = f),
      (g = t.pendingProps),
      (m = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ge(a))
        : ((a = Te(n) ? Kt : ge.current), (a = Cn(t, a)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== g || m !== a) && ws(t, o, r, a)),
      (yt = !1),
      (m = t.memoizedState),
      (o.state = m),
      yl(t, r, o, l);
    var x = t.memoizedState;
    u !== g || m !== x || Le.current || yt
      ? (typeof w == "function" && (so(t, n, w, r), (x = t.memoizedState)),
        (f = yt || ys(t, n, f, r, m, x, a) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = a),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fo(e, t, n, r, i, l);
}
function fo(e, t, n, r, l, i) {
  Yu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ps(t, n, !1), pt(e, t, i);
  (r = t.stateNode), (X1.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Sn(t, e.child, null, i)), (t.child = Sn(t, null, u, i)))
      : xe(e, t, u, i),
    (t.memoizedState = r.state),
    l && ps(t, n, !0),
    t.child
  );
}
function bu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? fs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && fs(e, t.context, !1),
    r0(e, t.containerInfo);
}
function Ts(e, t, n, r, l) {
  return An(), qo(l), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var po = { dehydrated: null, treeContext: null, retryLane: 0 };
function ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ju(e, t, n) {
  var r = t.pendingProps,
    l = J.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(J, l & 1),
    e === null)
  )
    return (
      io(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Wl(o, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ho(n)),
              (t.memoizedState = po),
              e)
            : d0(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return q1(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Mt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = Mt(u, i)) : ((i = Wt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ho(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = po),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Mt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function d0(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && qo(r),
    Sn(t, e.child, null, n),
    (e = d0(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function q1(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ai(Error(S(422)))), Vr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Wl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Wt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, o),
        (t.child.memoizedState = ho(o)),
        (t.memoizedState = po),
        i);
  if (!(t.mode & 1)) return Vr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = Ai(i, r, void 0)), Vr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), Ne || u)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), ft(e, l), Xe(r, e, l, -1));
    }
    return v0(), (r = Ai(Error(S(421)))), Vr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Re = jt(l.nextSibling)),
      (Oe = t),
      (b = !0),
      (be = null),
      e !== null &&
        ((De[Be++] = st),
        (De[Be++] = ut),
        (De[Be++] = Zt),
        (st = e.id),
        (ut = e.overflow),
        (Zt = t)),
      (t = d0(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ms(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), oo(e.return, t, n);
}
function Si(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Xu(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ms(e, n, t);
        else if (e.tag === 19) Ms(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && wl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Si(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && wl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Si(t, !0, n, null, i);
        break;
      case "together":
        Si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _1(e, t, n) {
  switch (t.tag) {
    case 3:
      bu(t), An();
      break;
    case 5:
      Su(t);
      break;
    case 1:
      Te(t.type) && pl(t);
      break;
    case 4:
      r0(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      W(gl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ju(e, t, n)
          : (W(J, J.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null);
      W(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zu(e, t, n);
  }
  return pt(e, t, n);
}
var qu, mo, _u, $u;
qu = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
mo = function () {};
_u = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ht(rt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ui(e, l)), (r = Ui(e, r)), (i = []);
        break;
      case "select":
        (l = q({}, l, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Bi(e, l)), (r = Bi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = dl);
    }
    Hi(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (er.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && a !== u && (a != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(f, n)), (n = a);
        else
          f === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(f, a))
            : f === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(f, "" + a)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (er.hasOwnProperty(f)
                ? (a != null && f === "onScroll" && Z("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(f, a));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
$u = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $1(e, t, n) {
  var r = t.pendingProps;
  switch ((Xo(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return Te(t.type) && fl(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kn(),
        Y(Le),
        Y(ge),
        i0(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), be !== null && (So(be), (be = null)))),
        mo(e, t),
        he(t),
        null
      );
    case 5:
      l0(t);
      var l = Ht(fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _u(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return he(t), null;
        }
        if (((e = Ht(rt.current)), Dr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[et] = t), (r[cr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Qn.length; l++) Z(Qn[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              B0(r, i), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              H0(r, i), Z("invalid", r);
          }
          Hi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ir(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : er.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              Tr(r), V0(r, i, !0);
              break;
            case "textarea":
              Tr(r), G0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = dl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = j2(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[et] = t),
            (e[cr] = r),
            qu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Gi(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Qn.length; l++) Z(Qn[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (l = r);
                break;
              case "details":
                Z("toggle", e), (l = r);
                break;
              case "input":
                B0(e, r), (l = Ui(e, r)), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = q({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                H0(e, r), (l = Bi(e, r)), Z("invalid", e);
                break;
              default:
                l = r;
            }
            Hi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? T2(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && N2(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && tr(e, a)
                    : typeof a == "number" && tr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (er.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && Z("scroll", e)
                      : a != null && zo(e, i, a, o));
              }
            switch (n) {
              case "input":
                Tr(e), V0(e, r, !1);
                break;
              case "textarea":
                Tr(e), G0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = dl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Ht(fr.current)), Ht(rt.current), Dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (i = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ir(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ir(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (Y(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Re !== null && t.mode & 1 && !(t.flags & 128))
          gu(), An(), (t.flags |= 98560), (i = !1);
        else if (((i = Dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[et] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (i = !1);
        } else be !== null && (So(be), (be = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? re === 0 && (re = 3) : v0())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        kn(), mo(e, t), e === null && ur(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return e0(t.type._context), he(t), null;
    case 17:
      return Te(t.type) && fl(), he(t), null;
    case 19:
      if ((Y(J), (i = t.memoizedState), i === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) In(i, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = wl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    In(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $() > jn &&
            ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              In(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !b)
            )
              return he(t), null;
          } else
            2 * $() - i.renderingStartTime > jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $()),
          (t.sibling = null),
          (n = J.current),
          W(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        g0(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ed(e, t) {
  switch ((Xo(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kn(),
        Y(Le),
        Y(ge),
        i0(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return l0(t), null;
    case 13:
      if ((Y(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        An();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(J), null;
    case 4:
      return kn(), null;
    case 10:
      return e0(t.type._context), null;
    case 22:
    case 23:
      return g0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1,
  me = !1,
  td = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        _(e, t, r);
      }
    else n.current = null;
}
function go(e, t, n) {
  try {
    n();
  } catch (r) {
    _(e, t, r);
  }
}
var Ps = !1;
function nd(e, t) {
  if (((_i = ul), (e = ru()), bo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            f = 0,
            v = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              g !== n || (l !== 0 && g.nodeType !== 3) || (u = o + l),
                g !== i || (r !== 0 && g.nodeType !== 3) || (a = o + r),
                g.nodeType === 3 && (o += g.nodeValue.length),
                (w = g.firstChild) !== null;

            )
              (m = g), (g = w);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++f === l && (u = o),
                m === i && ++v === r && (a = o),
                (w = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = w;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, ul = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var C = x.memoizedProps,
                    T = x.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Ze(t.type, C),
                      T
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          _(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (x = Ps), (Ps = !1), x;
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && go(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Gl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ea(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ea(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[cr], delete t[no], delete t[D1], delete t[B1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ta(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ta(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = dl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), (e = e.sibling);
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), (e = e.sibling);
}
var ce = null,
  Ye = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) na(e, t, n), (n = n.sibling);
}
function na(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || fn(n, t);
    case 6:
      var r = ce,
        l = Ye;
      (ce = null),
        gt(e, t, n),
        (ce = r),
        (Ye = l),
        ce !== null &&
          (Ye
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Ye
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? gi(e.parentNode, n)
              : e.nodeType === 1 && gi(e, n),
            ir(e))
          : gi(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (l = Ye),
        (ce = n.stateNode.containerInfo),
        (Ye = !0),
        gt(e, t, n),
        (ce = r),
        (Ye = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && go(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          _(n, t, u);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), gt(e, t, n), (me = r))
        : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function Os(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new td()),
      t.forEach(function (r) {
        var l = dd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ce = u.stateNode), (Ye = !1);
              break e;
            case 3:
              (ce = u.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (ce = u.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          u = u.return;
        }
        if (ce === null) throw Error(S(160));
        na(i, o, l), (ce = null), (Ye = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (f) {
        _(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ra(t, e), (t = t.sibling);
}
function ra(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), _e(e), r & 4)) {
        try {
          Xn(3, e, e.return), Gl(3, e);
        } catch (C) {
          _(e, e.return, C);
        }
        try {
          Xn(5, e, e.return);
        } catch (C) {
          _(e, e.return, C);
        }
      }
      break;
    case 1:
      Ke(t, e), _e(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        _e(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          tr(l, "");
        } catch (C) {
          _(e, e.return, C);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && k2(l, i),
              Gi(u, o);
            var f = Gi(u, i);
            for (o = 0; o < a.length; o += 2) {
              var v = a[o],
                g = a[o + 1];
              v === "style"
                ? T2(l, g)
                : v === "dangerouslySetInnerHTML"
                ? N2(l, g)
                : v === "children"
                ? tr(l, g)
                : zo(l, v, g, f);
            }
            switch (u) {
              case "input":
                Ii(l, i);
                break;
              case "textarea":
                E2(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? hn(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hn(l, !!i.multiple, i.defaultValue, !0)
                      : hn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[cr] = i;
          } catch (C) {
            _(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), _e(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (C) {
          _(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), _e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ir(t.containerInfo);
        } catch (C) {
          _(e, e.return, C);
        }
      break;
    case 4:
      Ke(t, e), _e(e);
      break;
    case 13:
      Ke(t, e),
        _e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (h0 = $())),
        r & 4 && Os(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (f = me) || v), Ke(t, e), (me = f)) : Ke(t, e),
        _e(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (R = e, v = e.child; v !== null; ) {
            for (g = R = v; R !== null; ) {
              switch (((m = R), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, m, m.return);
                  break;
                case 1:
                  fn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (C) {
                      _(r, n, C);
                    }
                  }
                  break;
                case 5:
                  fn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    zs(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (R = w)) : zs(g);
            }
            v = v.sibling;
          }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                (l = g.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = g.stateNode),
                      (a = g.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = L2("display", o)));
              } catch (C) {
                _(e, e.return, C);
              }
            }
          } else if (g.tag === 6) {
            if (v === null)
              try {
                g.stateNode.nodeValue = f ? "" : g.memoizedProps;
              } catch (C) {
                _(e, e.return, C);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            v === g && (v = null), (g = g.return);
          }
          v === g && (v = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), _e(e), r & 4 && Os(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), _e(e);
  }
}
function _e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ta(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tr(l, ""), (r.flags &= -33));
          var i = Rs(e);
          wo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Rs(e);
          yo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      _(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rd(e, t, n) {
  (R = e), la(e);
}
function la(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Hr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || me;
        u = Hr;
        var f = me;
        if (((Hr = o), (me = a) && !f))
          for (R = l; R !== null; )
            (o = R),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Us(l)
                : a !== null
                ? ((a.return = o), (R = a))
                : Us(l);
        for (; i !== null; ) (R = i), la(i), (i = i.sibling);
        (R = l), (Hr = u), (me = f);
      }
      Fs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (R = i)) : Fs(e);
  }
}
function Fs(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Gl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && vs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var g = v.dehydrated;
                    g !== null && ir(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        me || (t.flags & 512 && vo(t));
      } catch (m) {
        _(t, t.return, m);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function zs(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Us(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gl(4, t);
          } catch (a) {
            _(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              _(t, l, a);
            }
          }
          var i = t.return;
          try {
            vo(t);
          } catch (a) {
            _(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            vo(t);
          } catch (a) {
            _(t, o, a);
          }
      }
    } catch (a) {
      _(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (R = u);
      break;
    }
    R = t.return;
  }
}
var ld = Math.ceil,
  Al = ht.ReactCurrentDispatcher,
  f0 = ht.ReactCurrentOwner,
  He = ht.ReactCurrentBatchConfig,
  G = 0,
  ue = null,
  te = null,
  de = 0,
  Pe = 0,
  pn = Ft(0),
  re = 0,
  gr = null,
  bt = 0,
  Ql = 0,
  p0 = 0,
  qn = null,
  je = null,
  h0 = 0,
  jn = 1 / 0,
  it = null,
  Sl = !1,
  xo = null,
  Lt = null,
  Gr = !1,
  At = null,
  kl = 0,
  _n = 0,
  Co = null,
  el = -1,
  tl = 0;
function Ce() {
  return G & 6 ? $() : el !== -1 ? el : (el = $());
}
function Tt(e) {
  return e.mode & 1
    ? G & 2 && de !== 0
      ? de & -de
      : H1.transition !== null
      ? (tl === 0 && (tl = H2()), tl)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : b2(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < _n) throw ((_n = 0), (Co = null), Error(S(185)));
  wr(e, n, r),
    (!(G & 2) || e !== ue) &&
      (e === ue && (!(G & 2) && (Ql |= n), re === 4 && xt(e, de)),
      Me(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((jn = $() + 500), Bl && zt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Hc(e, t);
  var r = sl(e, e === ue ? de : 0);
  if (r === 0)
    n !== null && K0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && K0(n), t === 1))
      e.tag === 0 ? V1(Is.bind(null, e)) : pu(Is.bind(null, e)),
        U1(function () {
          !(G & 6) && zt();
        }),
        (n = null);
    else {
      switch (G2(r)) {
        case 1:
          n = Vo;
          break;
        case 4:
          n = B2;
          break;
        case 16:
          n = ol;
          break;
        case 536870912:
          n = V2;
          break;
        default:
          n = ol;
      }
      n = fa(n, ia.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ia(e, t) {
  if (((el = -1), (tl = 0), G & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = sl(e, e === ue ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = sa();
    (ue !== e || de !== t) && ((it = null), (jn = $() + 500), Qt(e, t));
    do
      try {
        sd();
        break;
      } catch (u) {
        oa(e, u);
      }
    while (!0);
    $o(),
      (Al.current = i),
      (G = l),
      te !== null ? (t = 0) : ((ue = null), (de = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Yi(e)), l !== 0 && ((r = l), (t = Ao(e, l)))), t === 1)
    )
      throw ((n = gr), Qt(e, 0), xt(e, r), Me(e, $()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !id(l) &&
          ((t = El(e, r)),
          t === 2 && ((i = Yi(e)), i !== 0 && ((r = i), (t = Ao(e, i)))),
          t === 1))
      )
        throw ((n = gr), Qt(e, 0), xt(e, r), Me(e, $()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Dt(e, je, it);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = h0 + 500 - $()), 10 < t))
          ) {
            if (sl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = to(Dt.bind(null, e, je, it), t);
            break;
          }
          Dt(e, je, it);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Je(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = $() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ld(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = to(Dt.bind(null, e, je, it), r);
            break;
          }
          Dt(e, je, it);
          break;
        case 5:
          Dt(e, je, it);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Me(e, $()), e.callbackNode === n ? ia.bind(null, e) : null;
}
function Ao(e, t) {
  var n = qn;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && So(t)),
    e
  );
}
function So(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function id(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xt(e, t) {
  for (
    t &= ~p0,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Is(e) {
  if (G & 6) throw Error(S(327));
  wn();
  var t = sl(e, 0);
  if (!(t & 1)) return Me(e, $()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yi(e);
    r !== 0 && ((t = r), (n = Ao(e, r)));
  }
  if (n === 1) throw ((n = gr), Qt(e, 0), xt(e, t), Me(e, $()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e, je, it),
    Me(e, $()),
    null
  );
}
function m0(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((jn = $() + 500), Bl && zt());
  }
}
function Jt(e) {
  At !== null && At.tag === 0 && !(G & 6) && wn();
  var t = G;
  G |= 1;
  var n = He.transition,
    r = Q;
  try {
    if (((He.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (He.transition = n), (G = t), !(G & 6) && zt();
  }
}
function g0() {
  (Pe = pn.current), Y(pn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), z1(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Xo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fl();
          break;
        case 3:
          kn(), Y(Le), Y(ge), i0();
          break;
        case 5:
          l0(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          Y(J);
          break;
        case 19:
          Y(J);
          break;
        case 10:
          e0(r.type._context);
          break;
        case 22:
        case 23:
          g0();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (te = e = Mt(e.current, null)),
    (de = Pe = t),
    (re = 0),
    (gr = null),
    (p0 = Ql = bt = 0),
    (je = qn = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function oa(e, t) {
  do {
    var n = te;
    try {
      if (($o(), (qr.current = Cl), xl)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((Yt = 0),
        (se = ne = X = null),
        (Jn = !1),
        (pr = 0),
        (f0.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (gr = t), (te = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = de),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var f = a,
            v = u,
            g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = ks(o);
          if (w !== null) {
            (w.flags &= -257),
              Es(w, o, u, i, t),
              w.mode & 1 && Ss(i, f, t),
              (t = w),
              (a = f);
            var x = t.updateQueue;
            if (x === null) {
              var C = new Set();
              C.add(a), (t.updateQueue = C);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(i, f, t), v0();
              break e;
            }
            a = Error(S(426));
          }
        } else if (b && u.mode & 1) {
          var T = ks(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Es(T, o, u, i, t),
              qo(En(a, u));
            break e;
          }
        }
        (i = a = En(a, u)),
          re !== 4 && (re = 2),
          qn === null ? (qn = [i]) : qn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Qu(i, a, t);
              gs(i, p);
              break e;
            case 1:
              u = a;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Wu(i, u, t);
                gs(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      aa(n);
    } catch (k) {
      (t = k), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sa() {
  var e = Al.current;
  return (Al.current = Cl), e === null ? Cl : e;
}
function v0() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    ue === null || (!(bt & 268435455) && !(Ql & 268435455)) || xt(ue, de);
}
function El(e, t) {
  var n = G;
  G |= 2;
  var r = sa();
  (ue !== e || de !== t) && ((it = null), Qt(e, t));
  do
    try {
      od();
      break;
    } catch (l) {
      oa(e, l);
    }
  while (!0);
  if (($o(), (G = n), (Al.current = r), te !== null)) throw Error(S(261));
  return (ue = null), (de = 0), re;
}
function od() {
  for (; te !== null; ) ua(te);
}
function sd() {
  for (; te !== null && !Rc(); ) ua(te);
}
function ua(e) {
  var t = da(e.alternate, e, Pe);
  (e.memoizedProps = e.pendingProps),
    t === null ? aa(e) : (te = t),
    (f0.current = null);
}
function aa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ed(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (te = null);
        return;
      }
    } else if (((n = $1(n, t, Pe)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Dt(e, t, n) {
  var r = Q,
    l = He.transition;
  try {
    (He.transition = null), (Q = 1), ud(e, t, n, r);
  } finally {
    (He.transition = l), (Q = r);
  }
  return null;
}
function ud(e, t, n, r) {
  do wn();
  while (At !== null);
  if (G & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gc(e, i),
    e === ue && ((te = ue = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gr ||
      ((Gr = !0),
      fa(ol, function () {
        return wn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = He.transition), (He.transition = null);
    var o = Q;
    Q = 1;
    var u = G;
    (G |= 4),
      (f0.current = null),
      nd(e, n),
      ra(n, e),
      L1($i),
      (ul = !!_i),
      ($i = _i = null),
      (e.current = n),
      rd(n),
      Oc(),
      (G = u),
      (Q = o),
      (He.transition = i);
  } else e.current = n;
  if (
    (Gr && ((Gr = !1), (At = e), (kl = l)),
    (i = e.pendingLanes),
    i === 0 && (Lt = null),
    Uc(n.stateNode),
    Me(e, $()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sl) throw ((Sl = !1), (e = xo), (xo = null), e);
  return (
    kl & 1 && e.tag !== 0 && wn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Co ? _n++ : ((_n = 0), (Co = e))) : (_n = 0),
    zt(),
    null
  );
}
function wn() {
  if (At !== null) {
    var e = G2(kl),
      t = He.transition,
      n = Q;
    try {
      if (((He.transition = null), (Q = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (kl = 0), G & 6)) throw Error(S(331));
        var l = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var i = R,
            o = i.child;
          if (R.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var f = u[a];
                for (R = f; R !== null; ) {
                  var v = R;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, v, i);
                  }
                  var g = v.child;
                  if (g !== null) (g.return = v), (R = g);
                  else
                    for (; R !== null; ) {
                      v = R;
                      var m = v.sibling,
                        w = v.return;
                      if ((ea(v), v === f)) {
                        R = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (R = m);
                        break;
                      }
                      R = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var T = C.sibling;
                    (C.sibling = null), (C = T);
                  } while (C !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (R = o);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (R = p);
                break e;
              }
              R = i.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          o = R;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (R = h);
          else
            e: for (o = c; R !== null; ) {
              if (((u = R), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gl(9, u);
                  }
                } catch (k) {
                  _(u, u.return, k);
                }
              if (u === o) {
                R = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (R = y);
                break e;
              }
              R = u.return;
            }
        }
        if (
          ((G = l), zt(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(Fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (He.transition = t);
    }
  }
  return !1;
}
function Ds(e, t, n) {
  (t = En(n, t)),
    (t = Qu(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = Ce()),
    e !== null && (wr(e, 1, t), Me(e, t));
}
function _(e, t, n) {
  if (e.tag === 3) Ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = En(n, e)),
            (e = Wu(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = Ce()),
            t !== null && (wr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ad(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (de & n) === n &&
      (re === 4 || (re === 3 && (de & 130023424) === de && 500 > $() - h0)
        ? Qt(e, 0)
        : (p0 |= n)),
    Me(e, t);
}
function ca(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rr), (Rr <<= 1), !(Rr & 130023424) && (Rr = 4194304))
      : (t = 1));
  var n = Ce();
  (e = ft(e, t)), e !== null && (wr(e, t, n), Me(e, n));
}
function cd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ca(e, n);
}
function dd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), ca(e, n);
}
var da;
da = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), _1(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), b && t.flags & 1048576 && hu(t, ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $r(e, t), (e = t.pendingProps);
      var l = Cn(t, ge.current);
      yn(t, n), (l = s0(null, t, r, e, l, n));
      var i = u0();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((i = !0), pl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            n0(t),
            (l.updater = Vl),
            (t.stateNode = l),
            (l._reactInternals = t),
            uo(t, r, e, n),
            (t = fo(null, t, r, !0, i, n)))
          : ((t.tag = 0), b && i && Jo(t), xe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = pd(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = co(null, t, r, e, n);
            break e;
          case 1:
            t = Ls(null, t, r, e, n);
            break e;
          case 11:
            t = js(null, t, r, e, n);
            break e;
          case 14:
            t = Ns(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        co(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Ls(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((bu(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          yu(e, t),
          yl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = En(Error(S(423)), t)), (t = Ts(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = En(Error(S(424)), t)), (t = Ts(e, t, r, n, l));
            break e;
          } else
            for (
              Re = jt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                b = !0,
                be = null,
                n = Au(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((An(), r === l)) {
            t = pt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Su(t),
        e === null && io(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        eo(r, l) ? (o = null) : i !== null && eo(r, i) && (t.flags |= 32),
        Yu(e, t),
        xe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && io(t), null;
    case 13:
      return Ju(e, t, n);
    case 4:
      return (
        r0(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        js(e, t, r, l, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          W(gl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (qe(i.value, o)) {
            if (i.children === l.children && !Le.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = at(-1, n & -n)), (a.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (f.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      oo(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  oo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        xe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        yn(t, n),
        (l = Ge(l)),
        (r = r(l)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        Ns(e, t, r, l, n)
      );
    case 15:
      return Ku(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        $r(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), pl(t)) : (e = !1),
        yn(t, n),
        xu(t, r, l),
        uo(t, r, l, n),
        fo(null, t, r, !0, e, n)
      );
    case 19:
      return Xu(e, t, n);
    case 22:
      return Zu(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function fa(e, t) {
  return D2(e, t);
}
function fd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new fd(e, t, n, r);
}
function y0(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pd(e) {
  if (typeof e == "function") return y0(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Io)) return 11;
    if (e === Do) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) y0(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case nn:
        return Wt(n.children, l, i, t);
      case Uo:
        (o = 8), (l |= 8);
        break;
      case Ri:
        return (
          (e = Ve(12, n, t, l | 2)), (e.elementType = Ri), (e.lanes = i), e
        );
      case Oi:
        return (e = Ve(13, n, t, l)), (e.elementType = Oi), (e.lanes = i), e;
      case Fi:
        return (e = Ve(19, n, t, l)), (e.elementType = Fi), (e.lanes = i), e;
      case C2:
        return Wl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case w2:
              o = 10;
              break e;
            case x2:
              o = 9;
              break e;
            case Io:
              o = 11;
              break e;
            case Do:
              o = 14;
              break e;
            case vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Wt(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = C2),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ki(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function Ei(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function w0(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new hd(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ve(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    n0(i),
    e
  );
}
function md(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pa(e) {
  if (!e) return Rt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return fu(e, n, t);
  }
  return t;
}
function ha(e, t, n, r, l, i, o, u, a) {
  return (
    (e = w0(n, r, !0, e, l, i, o, u, a)),
    (e.context = pa(null)),
    (n = e.current),
    (r = Ce()),
    (l = Tt(n)),
    (i = at(r, l)),
    (i.callback = t ?? null),
    Nt(n, i, l),
    (e.current.lanes = l),
    wr(e, l, r),
    Me(e, r),
    e
  );
}
function Kl(e, t, n, r) {
  var l = t.current,
    i = Ce(),
    o = Tt(l);
  return (
    (n = pa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = at(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, o)),
    e !== null && (Xe(e, l, o, i), Xr(e, l, o)),
    o
  );
}
function jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function x0(e, t) {
  Bs(e, t), (e = e.alternate) && Bs(e, t);
}
function gd() {
  return null;
}
var ma =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function C0(e) {
  this._internalRoot = e;
}
Zl.prototype.render = C0.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Kl(e, t, null, null);
};
Zl.prototype.unmount = C0.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function () {
      Kl(null, e, null, null);
    }),
      (t[dt] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = K2();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Y2(e);
  }
};
function A0(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vs() {}
function vd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = jl(o);
        i.call(f);
      };
    }
    var o = ha(t, r, e, 0, null, !1, !1, "", Vs);
    return (
      (e._reactRootContainer = o),
      (e[dt] = o.current),
      ur(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = jl(a);
      u.call(f);
    };
  }
  var a = w0(e, 0, !1, null, null, !1, !1, "", Vs);
  return (
    (e._reactRootContainer = a),
    (e[dt] = a.current),
    ur(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      Kl(t, a, n, r);
    }),
    a
  );
}
function bl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = jl(o);
        u.call(a);
      };
    }
    Kl(t, o, e, l);
  } else o = vd(n, t, e, l, r);
  return jl(o);
}
Q2 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (Ho(t, n | 1), Me(t, $()), !(G & 6) && ((jn = $() + 500), zt()));
      }
      break;
    case 13:
      Jt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var l = Ce();
          Xe(r, e, 1, l);
        }
      }),
        x0(e, 1);
  }
};
Go = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = Ce();
      Xe(t, e, 134217728, n);
    }
    x0(e, 134217728);
  }
};
W2 = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = Ce();
      Xe(n, e, t, r);
    }
    x0(e, t);
  }
};
K2 = function () {
  return Q;
};
Z2 = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(S(90));
            S2(r), Ii(r, l);
          }
        }
      }
      break;
    case "textarea":
      E2(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
R2 = m0;
O2 = Jt;
var yd = { usingClientEntryPoint: !1, Events: [Cr, sn, Dl, M2, P2, m0] },
  Dn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wd = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = U2(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || gd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qr.isDisabled && Qr.supportsFiber)
    try {
      (Fl = Qr.inject(wd)), (nt = Qr);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!A0(t)) throw Error(S(200));
  return md(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!A0(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = ma;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = w0(e, 1, !1, null, null, n, !1, r, l)),
    (e[dt] = t.current),
    ur(e.nodeType === 8 ? e.parentNode : e),
    new C0(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = U2(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Jt(e);
};
ze.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(S(200));
  return bl(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!A0(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = ma;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ha(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[dt] = t.current),
    ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Zl(t);
};
ze.render = function (e, t, n) {
  if (!Yl(t)) throw Error(S(200));
  return bl(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Jt(function () {
        bl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dt] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = m0;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return bl(e, t, n, !1, r);
};
ze.version = "18.2.0-next-9e3b772b8-20220608";
function ga() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ga);
    } catch (e) {
      console.error(e);
    }
}
ga(), (h2.exports = ze);
var xd = h2.exports,
  Hs = xd;
(Mi.createRoot = Hs.createRoot), (Mi.hydrateRoot = Hs.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(this, arguments)
  );
}
var Gt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Gt || (Gt = {}));
const Gs = "popstate";
function Cd(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return ko(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : va(l);
  }
  return Sd(t, n, null, e);
}
function S0(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ad() {
  return Math.random().toString(36).substr(2, 8);
}
function Qs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ko(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Nl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ya(t) : t,
      { state: n, key: (t && t.key) || r || Ad() }
    )
  );
}
function va(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ya(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Sd(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = Gt.Pop,
    a = null,
    f = v();
  f == null && ((f = 0), o.replaceState(Nl({}, o.state, { idx: f }), ""));
  function v() {
    return (o.state || { idx: null }).idx;
  }
  function g() {
    u = Gt.Pop;
    let T = v(),
      p = T == null ? null : T - f;
    (f = T), a && a({ action: u, location: C.location, delta: p });
  }
  function m(T, p) {
    u = Gt.Push;
    let c = ko(C.location, T, p);
    n && n(c, T), (f = v() + 1);
    let h = Qs(c, f),
      y = C.createHref(c);
    try {
      o.pushState(h, "", y);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(y);
    }
    i && a && a({ action: u, location: C.location, delta: 1 });
  }
  function w(T, p) {
    u = Gt.Replace;
    let c = ko(C.location, T, p);
    n && n(c, T), (f = v());
    let h = Qs(c, f),
      y = C.createHref(c);
    o.replaceState(h, "", y),
      i && a && a({ action: u, location: C.location, delta: 0 });
  }
  function x(T) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof T == "string" ? T : va(T);
    return (
      (c = c.replace(/ $/, "%20")),
      S0(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
    );
  }
  let C = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Gs, g),
        (a = T),
        () => {
          l.removeEventListener(Gs, g), (a = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: x,
    encodeLocation(T) {
      let p = x(T);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: m,
    replace: w,
    go(T) {
      return o.go(T);
    },
  };
  return C;
}
var Ws;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ws || (Ws = {}));
function kd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const wa = ["post", "put", "patch", "delete"];
new Set(wa);
const Ed = ["get", ...wa];
new Set(Ed);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Eo() {
  return (
    (Eo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Eo.apply(this, arguments)
  );
}
const jd = U.createContext(null),
  k0 = U.createContext(null);
function xa() {
  return U.useContext(k0) != null;
}
function Nd() {
  return xa() || S0(!1), U.useContext(k0).location;
}
function Ld(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Gt.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  xa() && S0(!1);
  let a = t.replace(/^\/*/, "/"),
    f = U.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: o,
        future: Eo({ v7_relativeSplatPath: !1 }, u),
      }),
      [a, u, i, o]
    );
  typeof r == "string" && (r = ya(r));
  let {
      pathname: v = "/",
      search: g = "",
      hash: m = "",
      state: w = null,
      key: x = "default",
    } = r,
    C = U.useMemo(() => {
      let T = kd(v, a);
      return T == null
        ? null
        : {
            location: { pathname: T, search: g, hash: m, state: w, key: x },
            navigationType: l,
          };
    }, [a, v, g, m, w, x, l]);
  return C == null
    ? null
    : U.createElement(
        jd.Provider,
        { value: f },
        U.createElement(k0.Provider, { children: n, value: C })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Td = "6";
try {
  window.__reactRouterVersion = Td;
} catch {}
const Md = "startTransition",
  Ks = cc[Md];
function Pd(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = U.useRef();
  i.current == null && (i.current = Cd({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, a] = U.useState({ action: o.action, location: o.location }),
    { v7_startTransition: f } = r || {},
    v = U.useCallback(
      (g) => {
        f && Ks ? Ks(() => a(g)) : a(g);
      },
      [a, f]
    );
  return (
    U.useLayoutEffect(() => o.listen(v), [o, v]),
    U.createElement(Ld, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
var Zs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zs || (Zs = {}));
var Ys;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ys || (Ys = {}));
const Rd = () =>
    s.jsx("svg", {
      className: "block",
      width: 0,
      height: 0,
      children: s.jsxs("defs", {
        children: [
          s.jsxs("linearGradient", {
            id: "btn-left",
            x1: "50%",
            x2: "50%",
            y1: "0%",
            y2: "100%",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#89F9E8" }),
              s.jsx("stop", { offset: "100%", stopColor: "#FACB7B" }),
            ],
          }),
          s.jsxs("linearGradient", {
            id: "btn-top",
            x1: "100%",
            x2: "0%",
            y1: "50%",
            y2: "50%",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#D87CEE" }),
              s.jsx("stop", { offset: "100%", stopColor: "#FACB7B" }),
            ],
          }),
          s.jsxs("linearGradient", {
            id: "btn-bottom",
            x1: "100%",
            x2: "0%",
            y1: "50%",
            y2: "50%",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#9099FC" }),
              s.jsx("stop", { offset: "100%", stopColor: "#89F9E8" }),
            ],
          }),
          s.jsxs("linearGradient", {
            id: "btn-right",
            x1: "14.635%",
            x2: "14.635%",
            y1: "0%",
            y2: "100%",
            children: [
              s.jsx("stop", { offset: "0%", stopColor: "#9099FC" }),
              s.jsx("stop", { offset: "100%", stopColor: "#D87CEE" }),
            ],
          }),
        ],
      }),
    }),
  Od = "/assets/logo.png",
  E0 =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  Fd = "/assets/logo.png",
  zd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%3e%3cpolygon%20fill='%23FFFFFF'%20points='38.831%2015.118%2038.823%209.905%2029.203%203.617%2029.203%207.639%2035.548%2011.817%2035.553%2015.019%2032.605%2017.015%2030.594%2015.548%2030.594%2013.063%2027.317%2010.821%2027.317%2015.344%2022.122%2018.532%2022.113%2026.952%2018.44%2029.02%2016.554%2027.543%2016.554%2025.105%2018.786%2023.576%2018.786%2023.556%2018.786%2019.783%2014.769%2022.471%2011.698%2020.473%208.893%2022.31%2013.277%2025.311%2013.277%2027.154%2010.117%2029.291%206.894%2027.109%206.894%2019.848%2011.679%2016.608%2011.684%2013.492%2017.82%2017.445%2022.978%2014.011%2019.834%2012.177%2017.776%2013.564%2013.294%2010.6%2018.349%207.654%2022.727%2010.22%2022.727%206.393%2018.354%203.828%208.411%209.625%208.404%2014.84%203.617%2018.082%203.617%2028.874%208.404%2032.116%208.411%2037.332%2018.032%2043.617%2018.032%2039.598%2011.686%2035.42%2011.681%2032.218%2014.629%2030.222%2016.64%2031.689%2016.64%2034.174%2019.917%2036.416%2019.917%2031.892%2025.186%2028.705%2025.245%2020.285%2028.795%2018.217%2030.68%2019.694%2030.68%2022.131%2028.448%2023.661%2028.448%2023.68%2028.448%2027.454%2032.465%2024.765%2035.536%2026.764%2038.341%2024.927%2033.958%2021.923%2033.958%2020.083%2037.117%2017.946%2040.34%2020.128%2040.34%2027.389%2035.556%2030.629%2035.551%2033.744%2029.414%2029.79%2024.256%2033.201%2027.401%2035.033%2029.459%2033.672%2033.941%2036.636%2028.886%2039.583%2024.507%2037.016%2024.507%2040.842%2028.881%2043.406%2038.823%2037.612%2038.831%2032.396%2043.617%2029.154%2043.617%2018.361'/%3e%3c/svg%3e",
  Ud =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20d='M8.006%202.802l.036.024%2010.549%207.032.805.567c.227.183.494.437.648.808a2%202%200%200%201%200%201.532c-.154.371-.421.625-.648.808-.217.175-.5.364-.805.567L8.006%2021.198l-.993.627c-.285.154-.676.331-1.132.303a2%202%200%200%201-1.476-.79c-.276-.365-.346-.788-.375-1.111S4%2019.502%204%2019.054V4.99v-.043l.029-1.174c.03-.323.1-.746.375-1.11a2%202%200%200%201%201.476-.79c.456-.027.847.149%201.132.304s.62.378.993.627z'%20fill='%23fff'%20/%3e%3c/svg%3e",
  Ca = "/assets/gradient-BMjsV91j.png",
  Id = "/assets/4-small-Dl1zRJyK.png",
  Dd = "/assets/grid-coKqRXJ5.png",
  Bd =
    "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.0215%203.52925C14.2819%203.7896%2014.2819%204.21171%2014.0215%204.47206L6.6882%2011.8054C6.42785%2012.0657%206.00574%2012.0657%205.74539%2011.8054L2.41206%208.47206C2.15171%208.21171%202.15171%207.7896%202.41206%207.52925C2.67241%207.2689%203.09452%207.2689%203.35487%207.52925L6.2168%2010.3912L13.0787%203.52925C13.3391%203.2689%2013.7612%203.2689%2014.0215%203.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  Vd =
    "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%200.833984C8.58564%200.833984%208.88411%201.13246%208.88411%201.50065V3.16732C8.88411%203.53551%208.58564%203.83398%208.21745%203.83398C7.84926%203.83398%207.55078%203.53551%207.55078%203.16732V1.50065C7.55078%201.13246%207.84926%200.833984%208.21745%200.833984Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.21745%2011.334C8.58564%2011.334%208.88411%2011.6325%208.88411%2012.0007V14.6673C8.88411%2015.0355%208.58564%2015.334%208.21745%2015.334C7.84926%2015.334%207.55078%2015.0355%207.55078%2014.6673V12.0007C7.55078%2011.6325%207.84926%2011.334%208.21745%2011.334Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.05078%208.00065C1.05078%207.63246%201.34926%207.33398%201.71745%207.33398H4.05078C4.41897%207.33398%204.71745%207.63246%204.71745%208.00065C4.71745%208.36884%204.41897%208.66732%204.05078%208.66732H1.71745C1.34926%208.66732%201.05078%208.36884%201.05078%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.7174%208.00065C12.7174%207.63246%2013.0159%207.33398%2013.3841%207.33398H14.3841C14.7523%207.33398%2015.0508%207.63246%2015.0508%208.00065C15.0508%208.36884%2014.7523%208.66732%2014.3841%208.66732H13.3841C13.0159%208.66732%2012.7174%208.36884%2012.7174%208.00065Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.5794%2011.3626C11.8397%2011.1022%2012.2618%2011.1022%2012.5222%2011.3626L12.9936%2011.834C13.2539%2012.0943%2013.2539%2012.5164%2012.9936%2012.7768C12.7332%2013.0371%2012.3111%2013.0371%2012.0508%2012.7768L11.5794%2012.3054C11.319%2012.045%2011.319%2011.6229%2011.5794%2011.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.1317%203.13977C13.392%203.40012%2013.392%203.82223%2013.1317%204.08258L12.1889%205.02539C11.9285%205.28574%2011.5064%205.28574%2011.246%205.02539C10.9857%204.76504%2010.9857%204.34293%2011.246%204.08258L12.1889%203.13977C12.4492%202.87942%2012.8713%202.87942%2013.1317%203.13977Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.85552%2010.3626C6.11587%2010.6229%206.11587%2011.045%205.85552%2011.3054L3.9699%2013.191C3.70955%2013.4514%203.28744%2013.4514%203.02709%2013.191C2.76674%2012.9307%202.76674%2012.5085%203.02709%2012.2482L4.91271%2010.3626C5.17306%2010.1022%205.59517%2010.1022%205.85552%2010.3626Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.16516%203.0017C3.42551%202.74135%203.84762%202.74135%204.10797%203.0017L5.52219%204.41591C5.78254%204.67626%205.78254%205.09837%205.52219%205.35872C5.26184%205.61907%204.83973%205.61907%204.57938%205.35872L3.16516%203.94451C2.90481%203.68416%202.90481%203.26205%203.16516%203.0017Z'%20fill='black'/%3e%3c/svg%3e",
  Bn = "/assets/yourlogo-C6EMCCmQ.svg",
  Hd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.12602%2014.0007C8.57006%2015.7259%2010.1362%2017.0007%2012%2017.0007C13.8638%2017.0007%2015.4299%2015.7259%2015.874%2014.0007M11.0177%202.76473L4.23539%208.03986C3.78202%208.39248%203.55534%208.56879%203.39203%208.78959C3.24737%208.98518%203.1396%209.20552%203.07403%209.43978C3%209.70425%203%209.99143%203%2010.5658V17.8007C3%2018.9208%203%2019.4809%203.21799%2019.9087C3.40973%2020.285%203.71569%2020.591%204.09202%2020.7827C4.51984%2021.0007%205.07989%2021.0007%206.2%2021.0007H17.8C18.9201%2021.0007%2019.4802%2021.0007%2019.908%2020.7827C20.2843%2020.591%2020.5903%2020.285%2020.782%2019.9087C21%2019.4809%2021%2018.9208%2021%2017.8007V10.5658C21%209.99143%2021%209.70425%2020.926%209.43978C20.8604%209.20552%2020.7526%208.98518%2020.608%208.78959C20.4447%208.56879%2020.218%208.39248%2019.7646%208.03986L12.9823%202.76473C12.631%202.49148%2012.4553%202.35485%2012.2613%202.30233C12.0902%202.25599%2011.9098%202.25599%2011.7387%202.30233C11.5447%202.35485%2011.369%202.49148%2011.0177%202.76473Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Gd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%2011H8M10%2015H8M16%207H8M20%206.8V17.2C20%2018.8802%2020%2019.7202%2019.673%2020.362C19.3854%2020.9265%2018.9265%2021.3854%2018.362%2021.673C17.7202%2022%2016.8802%2022%2015.2%2022H8.8C7.11984%2022%206.27976%2022%205.63803%2021.673C5.07354%2021.3854%204.6146%2020.9265%204.32698%2020.362C4%2019.7202%204%2018.8802%204%2017.2V6.8C4%205.11984%204%204.27976%204.32698%203.63803C4.6146%203.07354%205.07354%202.6146%205.63803%202.32698C6.27976%202%207.11984%202%208.8%202H15.2C16.8802%202%2017.7202%202%2018.362%202.32698C18.9265%202.6146%2019.3854%203.07354%2019.673%203.63803C20%204.27976%2020%205.11984%2020%206.8Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Qd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11%202C6.02944%202%202%206.02944%202%2011C2%2015.9706%206.02944%2020%2011%2020C13.125%2020%2015.078%2019.2635%2016.6177%2018.0319L20.2929%2021.7071C20.6834%2022.0976%2021.3166%2022.0976%2021.7071%2021.7071C22.0976%2021.3166%2022.0976%2020.6834%2021.7071%2020.2929L18.0319%2016.6177C19.2635%2015.078%2020%2013.125%2020%2011C20%206.02944%2015.9706%202%2011%202ZM4%2011C4%207.13401%207.13401%204%2011%204C14.866%204%2018%207.13401%2018%2011C18%2014.866%2014.866%2018%2011%2018C7.13401%2018%204%2014.866%204%2011Z'%20fill='white'/%3e%3c/svg%3e",
  Wd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%208V16M8%2012H16M7.8%2021H16.2C17.8802%2021%2018.7202%2021%2019.362%2020.673C19.9265%2020.3854%2020.3854%2019.9265%2020.673%2019.362C21%2018.7202%2021%2017.8802%2021%2016.2V7.8C21%206.11984%2021%205.27976%2020.673%204.63803C20.3854%204.07354%2019.9265%203.6146%2019.362%203.32698C18.7202%203%2017.8802%203%2016.2%203H7.8C6.11984%203%205.27976%203%204.63803%203.32698C4.07354%203.6146%203.6146%204.07354%203.32698%204.63803C3%205.27976%203%206.11984%203%207.8V16.2C3%2017.8802%203%2018.7202%203.32698%2019.362C3.6146%2019.9265%204.07354%2020.3854%204.63803%2020.673C5.27976%2021%206.11984%2021%207.8%2021Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Kd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%201C5.92487%201%201%205.92487%201%2012C1%2018.0751%205.92487%2023%2012%2023C18.0751%2023%2023%2018.0751%2023%2012C23%205.92487%2018.0751%201%2012%201ZM14%206C14.5523%206%2015%206.44772%2015%207V17C15%2017.5523%2014.5523%2018%2014%2018C13.4477%2018%2013%2017.5523%2013%2017V7C13%206.44772%2013.4477%206%2014%206ZM11%209C11%208.44772%2010.5523%208%2010%208C9.44771%208%209%208.44772%209%209V15C9%2015.5523%209.44772%2016%2010%2016C10.5523%2016%2011%2015.5523%2011%2015V9ZM7%2011C7%2010.4477%206.55228%2010%206%2010C5.44772%2010%205%2010.4477%205%2011V13C5%2013.5523%205.44772%2014%206%2014C6.55228%2014%207%2013.5523%207%2013V11ZM19%2011C19%2010.4477%2018.5523%2010%2018%2010C17.4477%2010%2017%2010.4477%2017%2011V13C17%2013.5523%2017.4477%2014%2018%2014C18.5523%2014%2019%2013.5523%2019%2013V11Z'%20fill='white'/%3e%3c/svg%3e",
  Zd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M1%207C1.55228%207%202%207.44772%202%208L2%2012C2%2012.5523%201.55228%2013%201%2013%20.44772%2013%200%2012.5523%200%2012L0%208C0%207.44772.44772%207%201%207ZM5.5%203C6.05228%203%206.5%203.44772%206.5%204L6.5%2016C6.5%2016.5523%206.05229%2017%205.5%2017%204.94772%2017%204.5%2016.5523%204.5%2016L4.5%204C4.5%203.44772%204.94772%203%205.5%203ZM10%200C10.5523%200%2011%20.44772%2011%201L11%2019C11%2019.5523%2010.5523%2020%2010%2020%209.4477%2020%209%2019.5523%209%2019L9%201C9%20.44772%209.4477%200%2010%200ZM14.5%203C15.0523%203%2015.5%203.44772%2015.5%204L15.5%2016C15.5%2016.5523%2015.0523%2017%2014.5%2017%2013.9477%2017%2013.5%2016.5523%2013.5%2016L13.5%204C13.5%203.44772%2013.9477%203%2014.5%203ZM19%207C19.5523%207%2020%207.44772%2020%208L20%2012C20%2012.5523%2019.5523%2013%2019%2013%2018.4477%2013%2018%2012.5523%2018%2012L18%208C18%207.44772%2018.4477%207%2019%207Z'%20transform='translate(2%202)'/%3e%3c/svg%3e",
  Yd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023C5.92487%2023%201%2018.0751%201%2012ZM12%2015C13.6569%2015%2015%2013.6569%2015%2012C15%2010.3431%2013.6569%209%2012%209C10.3431%209%209%2010.3431%209%2012C9%2013.6569%2010.3431%2015%2012%2015ZM15.4291%204.77031C14.9302%204.53333%2014.3337%204.74562%2014.0967%205.24448C13.8598%205.74334%2014.0721%206.33985%2014.5709%206.57683C16.6003%207.54091%2018%209.60796%2018%2011.9999C18%2012.5522%2018.4477%2012.9999%2019%2012.9999C19.5523%2012.9999%2020%2012.5522%2020%2011.9999C20%208.80713%2018.1296%206.05317%2015.4291%204.77031ZM6%2011.9999C6%2011.4476%205.55228%2010.9999%205%2010.9999C4.44772%2010.9999%204%2011.4476%204%2011.9999C4%2014.9112%205.55568%2017.4581%207.87631%2018.8564C8.34935%2019.1415%208.9639%2018.989%209.24894%2018.516C9.53398%2018.043%209.38157%2017.4284%208.90852%2017.1434C7.16348%2016.0919%206%2014.1813%206%2011.9999Z'%20fill='white'/%3e%3c/svg%3e",
  bd =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M17.2413003,1.9999997%20L6.7587003,1.9999997%20C5.9537403,1.9999997%205.2893703,1.9999997%204.7481803,2.04419%20C4.1860803,2.09012%203.6693703,2.18868%203.1840403,2.43598%20C2.4313903,2.81947%201.8194703,3.43139%201.4359803,4.18404%20C1.1886803,4.66937%201.0901203,5.18608%201.0441903,5.74818%20C1,6.28937%201,6.95372%201,7.75869%20L1,16.2413%20C1,17.0463%201,17.7106%201.0441903,18.2518%20C1.0901203,18.8139%201.1886803,19.3306%201.4359803,19.816%20C1.8194703,20.5686%202.4313903,21.1805%203.1840403,21.564%20C3.6693703,21.8113%204.1860803,21.9099%204.7481803,21.9558%20C5.2893703,21.9999997%205.9537203,21.9999997%206.7586803,21.9999997%20L17.2413003,21.9999997%20C18.0463003,21.9999997%2018.7106003,21.9999997%2019.2518003,21.9558%20C19.8139003,21.9099%2020.3306003,21.8113%2020.8160003,21.564%20C21.5686003,21.1805%2022.1805003,20.5686%2022.5640003,19.816%20C22.8113003,19.3306%2022.9099003,18.8139%2022.9558003,18.2518%20C23,17.7106%2023,17.0463%2023,16.2413%20L23,7.75868%20C23,6.95372%2023,6.28937%2022.9558003,5.74818%20C22.9099003,5.18608%2022.8113003,4.66937%2022.5640003,4.18404%20C22.1805003,3.43139%2021.5686003,2.81947%2020.8160003,2.43598%20C20.3306003,2.18868%2019.8139003,2.09012%2019.2518003,2.04419%20C18.7106003,1.9999997%2018.0463003,1.9999997%2017.2413003,1.9999997%20Z%20M4.0060803,9.93935%20C4.0671303,9.39045%204.5615903,8.99497%205.1104903,9.05602%20C7.3669203,9.30698%209.4708003,10.3183%2011.0762003,11.9237%20C12.6816003,13.529%2013.6929003,15.6329%2013.9438003,17.8894%20C14.0049003,18.4383%2013.6094003,18.9327%2013.0605003,18.9938%20C12.5116003,19.0548%2012.0171003,18.6593%2011.9561003,18.1104%20C11.7553003,16.3053%2010.9463003,14.6222%209.6620003,13.3379%20C8.3776603,12.0536%206.6945603,11.2445%204.8894103,11.0438%20C4.3405103,10.9827%203.9450303,10.4883%204.0060803,9.93935%20Z%20M4.0201203,13.9001%20C4.1304903,13.3589%204.6586403,13.0097%205.1997803,13.1201%20C6.3528503,13.3552%207.4113103,13.9243%208.2434403,14.7564%20C9.0755703,15.5885%209.6446003,16.647%209.8798003,17.8%20C9.9901003,18.3412%209.6409003,18.8693%209.0997803,18.9797%20C8.5586403,19.0901%208.0304903,18.7409%207.9201203,18.1997%20C7.7633503,17.431%207.3839803,16.7254%206.8292303,16.1706%20C6.2744803,15.6159%205.5688403,15.2365%204.8001203,15.0797%20C4.2589803,14.9693%203.9097603,14.4412%204.0201203,13.9001%20Z%20M4.9999503,16.9999%20C4.4476703,16.9999%203.9999503,17.4476%203.9999503,17.9999%20C3.9999503,18.5522%204.4476703,18.9999%204.9999503,18.9999%20L5.0099503,18.9999%20C5.5622403,18.9999%206.0099503,18.5522%206.0099503,17.9999%20C6.0099503,17.4476%205.5622403,16.9999%205.0099503,16.9999%20L4.9999503,16.9999%20Z'/%3e%3c/svg%3e",
  Jd =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%209L14.126%209C14.5701%2010.7252%2016.1362%2012%2018%2012C20.2091%2012%2022%2010.2091%2022%208C22%205.79086%2020.2091%204%2018%204C16.1362%204%2014.5701%205.27477%2014.126%207L3%207C2.44772%207%202%207.44772%202%208C2%208.55228%202.44772%209%203%209Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21%2015L9.87398%2015C9.42994%2013.2748%207.86384%2012%206%2012C3.79086%2012%202%2013.7909%202%2016C2%2018.2091%203.79086%2020%206%2020C7.86384%2020%209.42994%2018.7252%209.87398%2017L21%2017C21.5523%2017%2022%2016.5523%2022%2016C22%2015.4477%2021.5523%2015%2021%2015Z'%20fill='white'/%3e%3c/svg%3e",
  Xd = "/assets/loading-CllQEGx_.png",
  qd = "/assets/background-BF0zYYBx.jpg",
  _d = "/assets/curve-DplsLMf8.png",
  $d = "/assets/robot-idimR07Z.jpg",
  ef = "/assets/hero-background-DUbyVUlq.jpg",
  tf =
    "data:image/svg+xml,%3csvg%20width='522'%20height='182'%20viewBox='0%200%20522%20182'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.333333%20179C0.333333%20180.473%201.52724%20181.667%203%20181.667C4.47276%20181.667%205.66667%20180.473%205.66667%20179C5.66667%20177.527%204.47276%20176.333%203%20176.333C1.52724%20176.333%200.333333%20177.527%200.333333%20179ZM517%203.5L522%205.88675V0.113249L517%202.5V3.5ZM3%20179.5H131.782V178.5H3V179.5ZM212.282%2099V83H211.282V99H212.282ZM291.782%203.5H517.5V2.5H291.782V3.5ZM212.282%2083C212.282%2039.0934%20247.875%203.5%20291.782%203.5V2.5C247.323%202.5%20211.282%2038.5411%20211.282%2083H212.282ZM131.782%20179.5C176.241%20179.5%20212.282%20143.459%20212.282%2099H211.282C211.282%20142.907%20175.688%20178.5%20131.782%20178.5V179.5Z'%20fill='%23252134'/%3e%3c/svg%3e",
  nf =
    "data:image/svg+xml,%3csvg%20width='162'%20height='76'%20viewBox='0%200%20162%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.333333%203C0.333333%201.52724%201.52724%200.333336%203%200.333336C4.47276%200.333336%205.66667%201.52724%205.66667%203C5.66667%204.47276%204.47276%205.66666%203%205.66666C1.52724%205.66666%200.333333%204.47276%200.333333%203ZM157%2072.5L162%2070.1132V75.8868L157%2073.5V72.5ZM84.5606%2038C84.5606%2036.5272%2085.7545%2035.3333%2087.2272%2035.3333C88.7%2035.3333%2089.8939%2036.5272%2089.8939%2038C89.8939%2039.4728%2088.7%2040.6667%2087.2272%2040.6667C85.7545%2040.6667%2084.5606%2039.4728%2084.5606%2038ZM3%202.5H52.2273V3.5H3V2.5ZM122.227%2072.5H157.5V73.5H122.227V72.5ZM87.7272%2038C87.7272%2057.0538%20103.173%2072.5%20122.227%2072.5V73.5C102.621%2073.5%2086.7272%2057.6061%2086.7272%2038H87.7272ZM52.2273%202.5C71.8334%202.5%2087.7272%2018.3939%2087.7272%2038H86.7272C86.7272%2018.9462%2071.2811%203.5%2052.2273%203.5V2.5Z'%20fill='%23252134'/%3e%3c/svg%3e",
  rf =
    "data:image/png;base64,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",
  lf =
    "data:image/png;base64,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",
  of = "/assets/framer-DIttm_fk.png",
  sf =
    "data:image/png;base64,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",
  uf =
    "data:image/png;base64,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",
  af = "/assets/protopie-R4iJxyNF.png",
  cf =
    "data:image/png;base64,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",
  df =
    "data:image/png;base64,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",
  ff = "/assets/service-1-bvSONSha.png",
  pf = "/assets/service-2-C-pPDQl7.png",
  hf = "/assets/service-3-CruucQ7U.png",
  Aa =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1480'%20height='177'%20viewBox='0%200%201480%20177'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-opacity='.1'%20d='M1480%200%201439.40086%200C1426.1468%200%201415.40266%2010.7452%201415.40266%2024L1415.40266%2062C1415.40266%2075.2548%201404.65831%2086%201391.40435%2086L0%2086M1480%20175%201439.40086%20175C1426.1468%20175%201415.40266%20164.255%201415.40266%20151L1415.40266%20113C1415.40266%2099.745%201404.65831%2089%201391.40435%2089L0%2089'%20transform='translate(0%201)'/%3e%3c/svg%3e",
  mf =
    "data:image/svg+xml,%3csvg%20width='952'%20height='396'%20viewBox='0%200%20952%20396'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.35'%3e%3ccircle%20cx='417'%20cy='161'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='515'%20cy='116'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='423'%20cy='279'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='366'%20cy='394'%20r='2'%20fill='white'/%3e%3ccircle%20cx='265'%20cy='327'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='362'%20cy='209'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='548'%20cy='211'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='607'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.21'%20cx='789'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20cx='362'%20cy='65'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='192'%20cy='132'%20r='2'%20fill='white'/%3e%3ccircle%20cx='743'%20cy='2'%20r='2'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M834%20150C827.373%20150%20822%20144.627%20822%20138C822%20131.373%20827.373%20126%20834%20126C840.627%20126%20846%20131.373%20846%20138C846%20144.627%20840.627%20150%20834%20150Z'%20fill='url(%23paint0_linear_701_17365)'/%3e%3cpath%20d='M4%20206C1.79086%20206%204.76837e-07%20204.209%204.76837e-07%20202C4.76837e-07%20199.791%201.79086%20198%204%20198C6.20914%20198%208%20199.791%208%20202C8%20204.209%206.20914%20206%204%20206Z'%20fill='url(%23paint1_linear_701_17365)'/%3e%3cpath%20d='M948%20206C945.791%20206%20944%20204.209%20944%20202C944%20199.791%20945.791%20198%20948%20198C950.209%20198%20952%20199.791%20952%20202C952%20204.209%20950.209%20206%20948%20206Z'%20fill='url(%23paint2_linear_701_17365)'/%3e%3cpath%20d='M154%20326C149.582%20326%20146%20322.418%20146%20318C146%20313.582%20149.582%20310%20154%20310C158.418%20310%20162%20313.582%20162%20318C162%20322.418%20158.418%20326%20154%20326Z'%20fill='url(%23paint3_linear_701_17365)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_701_17365'%20x1='834'%20y1='126'%20x2='834'%20y2='150'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2388E5BE'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_701_17365'%20x1='4'%20y1='198'%20x2='4'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_701_17365'%20x1='948'%20y1='198'%20x2='948'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_701_17365'%20x1='154'%20y1='310'%20x2='154'%20y2='326'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23B9AEDF'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  gf = "/assets/image-1-BL_C2sN6.png",
  vf = "/assets/image-2-C8poHMFX.png",
  yf = "/assets/image-3-DL8wGSR2.png",
  wf = "/assets/image-4-Cbi5cq1J.png",
  xf = "/assets/image-1-CTP7EhT0.png",
  Cf =
    "data:image/png;base64,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",
  Af =
    "data:image/png;base64,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",
  Sf =
    "data:image/png;base64,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",
  bs =
    "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15%2021.4V29.2747C15%2031.1327%2015%2032.0617%2015.3646%2032.484C15.6809%2032.8503%2016.1545%2033.0415%2016.6364%2032.9975C17.1921%2032.9468%2017.8371%2032.2782%2019.1272%2030.9411L20.0563%2029.9781C20.4043%2029.6174%2020.5783%2029.4371%2020.7832%2029.3079C20.9648%2029.1935%2021.1637%2029.109%2021.3722%2029.0578C21.6073%2029%2021.8579%2029%2022.3592%2029H26.6C28.8402%2029%2029.9603%2029%2030.816%2028.564C31.5686%2028.1805%2032.1805%2027.5686%2032.564%2026.816C33%2025.9603%2033%2024.8402%2033%2022.6V21.4C33%2019.1598%2033%2018.0397%2032.564%2017.184C32.1805%2016.4314%2031.5686%2015.8195%2030.816%2015.436C29.9603%2015%2028.8402%2015%2026.6%2015H21.4C19.1598%2015%2018.0397%2015%2017.184%2015.436C16.4314%2015.8195%2015.8195%2016.4314%2015.436%2017.184C15%2018.0397%2015%2019.1598%2015%2021.4ZM20%2023C20.5523%2023%2021%2022.5523%2021%2022C21%2021.4477%2020.5523%2021%2020%2021C19.4477%2021%2019%2021.4477%2019%2022C19%2022.5523%2019.4477%2023%2020%2023ZM25%2022C25%2022.5523%2024.5523%2023%2024%2023C23.4477%2023%2023%2022.5523%2023%2022C23%2021.4477%2023.4477%2021%2024%2021C24.5523%2021%2025%2021.4477%2025%2022ZM28%2023C28.5523%2023%2029%2022.5523%2029%2022C29%2021.4477%2028.5523%2021%2028%2021C27.4477%2021%2027%2021.4477%2027%2022C27%2022.5523%2027.4477%2023%2028%2023Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  Js =
    "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20rx='12'%20fill='%23FFC876'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2033H18C16.3432%2033%2015%2031.6569%2015%2030V18C15%2016.3432%2016.3432%2015%2018%2015H30C31.6569%2015%2033%2016.3432%2033%2018V30C33%2031.6569%2031.6569%2033%2030%2033ZM29%2020.4142L24.4142%2025H26C26.5523%2025%2027%2025.4477%2027%2026C27%2026.5523%2026.5523%2027%2026%2027H22C21.4477%2027%2021%2026.5523%2021%2026V22C21%2021.4477%2021.4477%2021%2022%2021C22.5523%2021%2023%2021.4477%2023%2022V23.5858L27.5858%2019H26C25.4477%2019%2025%2018.5523%2025%2018C25%2017.4477%2025.4477%2017%2026%2017H30C30.5523%2017%2031%2017.4477%2031%2018V22C31%2022.5523%2030.5523%2023%2030%2023C29.4477%2023%2029%2022.5523%2029%2022V20.4142Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  kf =
    "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20rx='12'%20fill='%237ADB78'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31%2029.5C31%2028.6716%2030.3284%2028%2029.5%2028H20C17.2386%2028%2015%2025.7614%2015%2023C15%2020.2386%2017.2386%2018%2020%2018H23V20H20C18.3432%2020%2017%2021.3432%2017%2023C17%2024.6569%2018.3432%2026%2020%2026H29.5C31.433%2026%2033%2027.567%2033%2029.5C33%2031.433%2031.433%2033%2029.5%2033H16C15.4477%2033%2015%2032.5523%2015%2032C15%2031.4477%2015.4477%2031%2016%2031H29.5C30.3284%2031%2031%2030.3284%2031%2029.5Z'%20fill='%230E0C15'/%3e%3cpath%20d='M32%2016H28V18H32C32.5523%2018%2033%2017.5523%2033%2017C33%2016.4477%2032.5523%2016%2032%2016Z'%20fill='%230E0C15'/%3e%3cpath%20d='M32%2020H28V22H32C32.5523%2022%2033%2021.5523%2033%2021C33%2020.4477%2032.5523%2020%2032%2020Z'%20fill='%230E0C15'/%3e%3cpath%20d='M21%2019C21%2016.7909%2022.7909%2015%2025%2015H29C29.5523%2015%2030%2015.4477%2030%2016V22C30%2022.5523%2029.5523%2023%2029%2023H25C22.7909%2023%2021%2021.2091%2021%2019Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  Ef =
    "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='48'%20height='48'%20rx='12'%20fill='%23FF776F'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31%2029.5C31%2028.6716%2030.3284%2028%2029.5%2028H20C17.2386%2028%2015%2025.7614%2015%2023C15%2020.2386%2017.2386%2018%2020%2018H23V20H20C18.3432%2020%2017%2021.3432%2017%2023C17%2024.6569%2018.3432%2026%2020%2026H29.5C31.433%2026%2033%2027.567%2033%2029.5C33%2031.433%2031.433%2033%2029.5%2033H16C15.4477%2033%2015%2032.5523%2015%2032C15%2031.4477%2015.4477%2031%2016%2031H29.5C30.3284%2031%2031%2030.3284%2031%2029.5Z'%20fill='%230E0C15'/%3e%3cpath%20d='M32%2016H28V18H32C32.5523%2018%2033%2017.5523%2033%2017C33%2016.4477%2032.5523%2016%2032%2016Z'%20fill='%230E0C15'/%3e%3cpath%20d='M32%2020H28V22H32C32.5523%2022%2033%2021.5523%2033%2021C33%2020.4477%2032.5523%2020%2032%2020Z'%20fill='%230E0C15'/%3e%3cpath%20d='M21%2019C21%2016.7909%2022.7909%2015%2025%2015H29C29.5523%2015%2030%2015.4477%2030%2016V22C30%2022.5523%2029.5523%2023%2029%2023H25C22.7909%2023%2021%2021.2091%2021%2019Z'%20fill='%230E0C15'/%3e%3c/svg%3e",
  en = "/assets/image-2-DhSZK1Xt.png",
  jf =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32803)'%3e%3cpath%20d='M7.44668%207.6204C7.20785%207.64005%206.98515%207.7488%206.82279%207.92506C6.66044%208.10132%206.57031%208.33219%206.57031%208.57183C6.57031%208.81146%206.66044%209.04234%206.82279%209.2186C6.98515%209.39485%207.20785%209.50361%207.44668%209.52325C7.56687%209.51885%207.685%209.49069%207.79424%209.44038C7.90348%209.39008%208.00168%209.31864%208.08317%209.23018C8.16465%209.14172%208.22781%209.038%208.26899%208.925C8.31017%208.81201%208.32857%208.69197%208.32311%208.57183C8.329%208.45158%208.31091%208.33136%208.26989%208.21818C8.22887%208.10499%208.16573%208.0011%208.08417%207.91255C8.0026%207.824%207.90423%207.75257%207.79478%207.70241C7.68534%207.65225%207.56701%207.62438%207.44668%207.6204ZM10.5753%207.6204C10.3838%207.60465%2010.192%207.64707%2010.025%207.74209C9.85794%207.83711%209.7235%207.98031%209.63919%208.15297C9.55489%208.32564%209.52465%208.51972%209.55243%208.70985C9.58021%208.89998%209.66471%209.0773%209.7949%209.21862C9.92508%209.35995%2010.0949%209.4587%2010.2821%209.50196C10.4693%209.54522%2010.6652%209.53099%2010.8442%209.46111C11.0232%209.39123%2011.1769%209.26897%2011.2853%209.11031C11.3937%208.95165%2011.4517%208.76397%2011.4517%208.57183C11.4571%208.45186%2011.4388%208.33199%2011.3978%208.21913C11.3567%208.10627%2011.2938%208.00264%2011.2125%207.91421C11.1312%207.82578%2011.0333%207.75429%2010.9243%207.70387C10.8153%207.65345%2010.6974%207.62508%2010.5774%207.6204H10.5753Z'%20fill='%23757185'/%3e%3cpath%20d='M14.7429%200.428711H3.25715C3.02566%200.429273%202.79655%200.475461%202.58291%200.564635C2.36928%200.653809%202.17532%200.784219%202.01213%200.948408C1.84894%201.1126%201.71971%201.30734%201.63183%201.52151C1.54396%201.73568%201.49917%201.96507%201.50001%202.19657V13.783C1.49917%2014.0145%201.54396%2014.2439%201.63183%2014.458C1.71971%2014.6722%201.84894%2014.867%202.01213%2015.0312C2.17532%2015.1953%202.36928%2015.3258%202.58291%2015.4149C2.79655%2015.5041%203.02566%2015.5503%203.25715%2015.5509H12.9772L12.5229%2013.9651L13.62%2014.983L14.6572%2015.943L16.5%2017.5716V2.19657C16.5009%201.96507%2016.4561%201.73568%2016.3682%201.52151C16.2803%201.30734%2016.1511%201.1126%2015.9879%200.948408C15.8247%200.784219%2015.6307%200.653809%2015.4171%200.564635C15.2035%200.475461%2014.9744%200.429273%2014.7429%200.428711V0.428711ZM11.4343%2011.6251C11.4343%2011.6251%2011.1257%2011.2566%2010.8686%2010.9287C11.4903%2010.7834%2012.0407%2010.4229%2012.4222%209.91085C12.1137%2010.1161%2011.7831%2010.2858%2011.4364%2010.4166C11.0377%2010.5868%2010.6207%2010.7104%2010.1936%2010.7851C9.45948%2010.9203%208.70662%2010.9174%207.97358%2010.7766C7.54323%2010.6924%207.12147%2010.569%206.71358%2010.408C6.36915%2010.2745%206.04011%2010.1042%205.73215%209.90014C6.09897%2010.4018%206.62954%2010.7596%207.23215%2010.9116C6.97501%2011.2373%206.65787%2011.623%206.65787%2011.623C6.1487%2011.6367%205.64396%2011.5251%205.18808%2011.2979C4.73221%2011.0707%204.33917%2010.7349%204.04358%2010.3201C4.07074%208.58263%204.49204%206.87397%205.27573%205.323C5.96662%204.78043%206.80902%204.46593%207.68644%204.423L7.77215%204.52585C6.94736%204.72997%206.17767%205.11335%205.51787%205.64871C5.51787%205.64871%205.70644%205.54585%206.02358%205.40014C6.64038%205.11868%207.29777%204.93643%207.97144%204.86014C8.01942%204.85021%208.06818%204.84447%208.11715%204.843C8.69154%204.76816%209.27283%204.7624%209.84858%204.82585C10.754%204.92927%2011.6305%205.2088%2012.4286%205.64871C11.8022%205.13886%2011.0748%204.76782%2010.2943%204.56014L10.4143%204.423C11.2917%204.46593%2012.1341%204.78043%2012.825%205.323C13.6087%206.87397%2014.03%208.58263%2014.0572%2010.3201C13.7594%2010.7349%2013.3648%2011.0706%2012.9076%2011.298C12.4505%2011.5255%2011.9447%2011.6378%2011.4343%2011.6251Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32803'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Nf =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32826)'%3e%3cpath%20d='M7.10334%2017.0363V10.072H4.71289V6.8577H7.10334V4.61305C7.10334%202.16793%208.65128%200.964844%2010.8325%200.964844C11.8773%200.964844%2012.7753%201.04263%2013.037%201.0774V3.63269L11.5242%203.63338C10.3379%203.63338%2010.07%204.19708%2010.07%205.02426V6.8577H13.2843L12.2129%2010.072H10.07V17.0363H7.10334Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32826'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Lf =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32812)'%3e%3cpath%20d='M8.99749%2011.7147C10.4965%2011.7147%2011.7118%2010.4995%2011.7118%209.00042C11.7118%207.50136%2010.4965%206.28613%208.99749%206.28613C7.49843%206.28613%206.2832%207.50136%206.2832%209.00042C6.2832%2010.4995%207.49843%2011.7147%208.99749%2011.7147Z'%20fill='%23757185'/%3e%3cpath%20d='M12.3905%200.857422H5.60479C2.98618%200.857422%200.855469%202.98882%200.855469%205.6081V12.3938C0.855469%2015.0124%202.98686%2017.1431%205.60615%2017.1431H12.3919C15.0105%2017.1431%2017.1412%2015.0117%2017.1412%2012.3925V5.60674C17.1412%202.98814%2015.0098%200.857422%2012.3905%200.857422ZM8.99833%2013.0717C6.75293%2013.0717%204.9269%2011.2457%204.9269%209.00028C4.9269%206.75489%206.75293%204.92885%208.99833%204.92885C11.2437%204.92885%2013.0698%206.75489%2013.0698%209.00028C13.0698%2011.2457%2011.2437%2013.0717%208.99833%2013.0717ZM13.7483%204.92885C13.3738%204.92885%2013.0698%204.62485%2013.0698%204.25028C13.0698%203.87571%2013.3738%203.57171%2013.7483%203.57171C14.1229%203.57171%2014.4269%203.87571%2014.4269%204.25028C14.4269%204.62485%2014.1229%204.92885%2013.7483%204.92885Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32812'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Tf =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32822)'%3e%3cpath%20d='M17.5357%202.23341C17.5219%202.17014%2017.4916%202.11167%2017.4478%202.06395C17.4041%202.01623%2017.3484%201.98098%2017.2866%201.9618C17.0615%201.9174%2016.8286%201.93405%2016.6121%202.01001C16.6121%202.01001%201.5923%207.40841%200.734626%208.00626C0.549269%208.13484%200.487661%208.2093%200.457126%208.29769C0.308733%208.72305%200.770519%208.91055%200.770519%208.91055L4.64159%2010.1722C4.70698%2010.1835%204.7741%2010.1794%204.83766%2010.1604C5.71838%209.6043%2013.6978%204.56537%2014.1591%204.39609C14.2314%204.37412%2014.285%204.39609%2014.2732%204.44966C14.0846%205.09573%207.19373%2011.2195%207.1557%2011.257C7.13721%2011.2721%207.12268%2011.2916%207.11335%2011.3136C7.10402%2011.3356%207.10016%2011.3596%207.10213%2011.3834L6.74213%2015.1607C6.74213%2015.1607%206.59105%2016.3393%207.76748%2015.1607C8.60159%2014.3255%209.40195%2013.6345%209.8032%2013.2986C11.1344%2014.2173%2012.5669%2015.2336%2013.1846%2015.7629C13.2883%2015.8635%2013.4111%2015.9423%2013.5459%2015.9944C13.6806%2016.0465%2013.8245%2016.0709%2013.9689%2016.0661C14.5582%2016.0436%2014.7189%2015.3991%2014.7189%2015.3991C14.7189%2015.3991%2017.4553%204.38751%2017.5475%202.91162C17.5561%202.76698%2017.5684%202.6743%2017.5694%202.57519C17.5743%202.46024%2017.563%202.34518%2017.5357%202.23341Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32822'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Mf =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_702_32808)'%3e%3cpath%20d='M17.5714%203.69685C16.9286%203.9647%2016.2857%204.17899%2015.5357%204.23256C16.2857%203.80399%2016.8214%203.10756%2017.0893%202.30399C16.3929%202.73256%2015.6429%203.00042%2014.8393%203.16113C14.1964%202.4647%2013.2857%202.03613%2012.3214%202.03613C10.3929%202.03613%208.78572%203.5897%208.78572%205.57185C8.78572%205.8397%208.83929%206.10756%208.89286%206.37542C5.94643%206.2147%203.375%204.82185%201.60714%202.67899C1.28571%203.2147%201.125%203.80399%201.125%204.44685C1.125%205.67899%201.76786%206.75042%202.67857%207.39328C2.08929%207.39328%201.55357%207.23256%201.07143%206.9647V7.01828C1.07143%208.73256%202.30357%2010.1254%203.91071%2010.4468C3.58929%2010.5004%203.32143%2010.554%203%2010.554C2.78571%2010.554%202.57143%2010.554%202.35714%2010.5004C2.78571%2011.8933%204.125%2012.9111%205.625%2012.9647C4.44643%2013.929%202.89286%2014.4647%201.23214%2014.4647C0.964286%2014.4647%200.642857%2014.4647%200.375%2014.4111C1.98214%2015.3754%203.85714%2015.9647%205.83929%2015.9647C12.3214%2015.9647%2015.8571%2010.6076%2015.8571%205.94685C15.8571%205.78613%2015.8571%205.62542%2015.8571%205.51828C16.5%204.98256%2017.0893%204.39328%2017.5714%203.69685Z'%20fill='%23757185'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_702_32808'%3e%3crect%20width='17.1429'%20height='17.1429'%20fill='white'%20transform='translate(0.427734%200.428711)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Pf = [
    { id: "0", title: "Features", url: "#features" },
    { id: "1", title: "How to use", url: "#how-to-use" },
    { id: "2", title: "Roadmap", url: "#roadmap" },
    { id: "3", title: "Doc", url: "https://johns-organization-137.gitbook.io/synapseai" },
  ],
  Rf = [Hd, Gd, Qd, Wd],
  Of = [Sf, Af, Cf],
  Ff = [Bn, Bn, Bn, Bn, Bn],
  zf = ["Photo generating", "Photo enhance", "Seamless Integration"],
  Uf = [Kd, Zd, Yd, bd, Jd],
  If = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: gf,
      colorful: !0,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: vf,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: yf,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: wf,
    },
  ],
  Sa =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
  Df = [
    { id: "0", title: "Seamless Integration", text: Sa },
    { id: "1", title: "Smart Automation" },
    { id: "2", title: "Top-notch Security" },
  ],
  Bf = [
    { id: "0", title: "Figma", icon: lf, width: 26, height: 36 },
    { id: "1", title: "Notion", icon: sf, width: 34, height: 36 },
    { id: "2", title: "Discord", icon: rf, width: 36, height: 28 },
    { id: "3", title: "Slack", icon: df, width: 34, height: 35 },
    { id: "4", title: "Photoshop", icon: uf, width: 34, height: 34 },
    { id: "5", title: "Protopie", icon: af, width: 34, height: 34 },
    { id: "6", title: "Framer", icon: of, width: 26, height: 34 },
    { id: "7", title: "Raindrop", icon: cf, width: 38, height: 32 },
  ],
  Vf = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ],
  Hf = [
    {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: bs,
      imageUrl: en,
    },
    {
      id: "1",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: Js,
      imageUrl: en,
      light: !0,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: kf,
      imageUrl: en,
    },
    {
      id: "3",
      title: "Fast responding",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: Ef,
      imageUrl: en,
      light: !0,
    },
    {
      id: "4",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: bs,
      imageUrl: en,
    },
    {
      id: "5",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: Js,
      imageUrl: en,
    },
  ],
  Gf = [
    { id: "0", title: "Twitter", iconUrl: Mf, url: "https://x.com/SynapseAI_eth" },
    { id: "1", title: "Telegram", iconUrl: Tf, url: "https://t.me/SynapseAI_eth" },
  ],
  Xs = (e) =>
    e === "left"
      ? s.jsxs("svg", {
          width: "5",
          height: "14",
          viewBox: "0 0 5 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("path", {
              d: "M5 0.822266H1V12.8223H5",
              stroke: "url(#brackets-left)",
            }),
            s.jsx("defs", {
              children: s.jsxs("linearGradient", {
                id: "brackets-left",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%",
                children: [
                  s.jsx("stop", { offset: "0%", stopColor: "#89F9E8" }),
                  s.jsx("stop", { offset: "100%", stopColor: "#FACB7B" }),
                ],
              }),
            }),
          ],
        })
      : s.jsxs("svg", {
          width: "5",
          height: "14",
          viewBox: "0 0 5 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("path", {
              d: "M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08",
              stroke: "url(#brackets-right)",
            }),
            s.jsx("defs", {
              children: s.jsxs("linearGradient", {
                id: "brackets-right",
                x1: "14.635%",
                x2: "14.635%",
                y1: "0%",
                y2: "100%",
                children: [
                  s.jsx("stop", { offset: "0%", stopColor: "#9099FC" }),
                  s.jsx("stop", { offset: "100%", stopColor: "#D87CEE" }),
                ],
              }),
            }),
          ],
        }),
  ka = ({ className: e, children: t }) =>
    s.jsxs("div", {
      className: `tagline flex items-center ${e || ""}`,
      children: [
        Xs("left"),
        s.jsx("div", { className: "mx-3 text-n-3", children: t }),
        Xs("right"),
      ],
    }),
  Jl = ({ className: e, title: t, text: n, tag: r }) =>
    s.jsxs("div", {
      className: `${e} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`,
      children: [
        r && s.jsx(ka, { className: "mb-4 md:justify-center", children: r }),
        t && s.jsx("h2", { className: "h2", children: t }),
        n && s.jsx("p", { className: "body-2 mt-4 text-n-4", children: n }),
      ],
    }),
  Ll = ({ className: e = "" }) =>
    s.jsx("svg", {
      className: `${e} || ""`,
      width: "11",
      height: "11",
      fill: "none",
      children: s.jsx("path", {
        d: "M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z",
        fill: "#ada8c4",
      }),
    }),
  Qf = ({ crossesOffset: e }) =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(Ll, {
          className: `hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
            e && e
          } pointer-events-none lg:block xl:left-[2.1875rem]`,
        }),
        s.jsx(Ll, {
          className: `hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
            e && e
          } pointer-events-none lg:block xl:right-[2.1875rem]`,
        }),
      ],
    }),
  _t = ({
    className: e,
    id: t,
    crosses: n,
    crossesOffset: r,
    customPaddings: l,
    children: i,
  }) =>
    s.jsxs("div", {
      id: t,
      className: `
      relative 
      ${l || `py-10 lg:py-16 xl:py-20 ${n ? "lg:py-32 xl:py-40" : ""}`} 
      ${e || ""}`,
      children: [
        i,
        s.jsx("div", {
          className:
            "hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10",
        }),
        s.jsx("div", {
          className:
            "hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10",
        }),
        n &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx("div", {
                className: `hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
                  r && r
                } pointer-events-none lg:block xl:left-10 right-10`,
              }),
              s.jsx(Qf, { crossesOffset: r }),
            ],
          }),
      ],
    }),
  Wf = () =>
    s.jsx("svg", {
      className: "ml-5 fill-n-1",
      width: "24",
      height: "24",
      children: s.jsx("path", {
        d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z",
      }),
    }),
  Kf = () =>
    s.jsx("div", {
      className:
        "absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none",
    }),
  Zf = () =>
    s.jsx("svg", {
      className: "block",
      width: 0,
      height: 0,
      children: s.jsx("clipPath", {
        id: "benefits",
        clipPathUnits: "objectBoundingBox",
        children: s.jsx("path", {
          d: "M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0",
        }),
      }),
    }),
  Yf = () =>
    s.jsx(_t, {
      id: "features",
      children: s.jsxs("div", {
        className: "container relative z-2",
        children: [
          s.jsx(Jl, {
            className: "md:max-w-md lg:max-w-2xl",
            title: "Chat Smarter, Not Harder with Synapse AI",
          }),
          s.jsx("div", {
            className: "flex flex-wrap gap-10 mb-10",
            children: Hf.map((e) =>
              s.jsxs(
                "div",
                {
                  className:
                    "block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]",
                  style: { backgroundImage: `url(${e.backgroundUrl})` },
                  children: [
                    s.jsxs("div", {
                      className:
                        "relative z-2 flex flex-col min-h-[10rem] p-[2.4rem] pointer-events-none",
                      children: [
                        s.jsx("h5", {
                          className: "h5 mb-5",
                          children: e.title,
                        }),
                        s.jsx("p", {
                          className: "body-2 mb-6 text-n-3",
                          children: e.text,
                        }),
                        
                      ],
                    }),
                    e.light && s.jsx(Kf, {}),
                    s.jsx("div", {
                      className: "absolute inset-0.5 bg-n-8",
                      style: { clipPath: "url(#benefits)" },
                      children: s.jsx("div", {
                        className:
                          "absolute inset-0 opacity-0 transition-opacity hover:opacity-10",
                        children:
                          e.imageUrl &&
                          s.jsx("img", {
                            src: e.imageUrl,
                            width: 380,
                            height: 362,
                            alt: e.title,
                            className: "w-full h-full object-cover",
                          }),
                      }),
                    }),
                    s.jsx(Zf, {}),
                  ],
                },
                e.id
              )
            ),
          }),
        ],
      }),
    }),
  qs = (e) =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("svg", {
          className: "absolute top-0 left-0",
          width: "21",
          height: "44",
          viewBox: "0 0 21 44",
          children: s.jsx("path", {
            fill: e ? "white" : "none",
            stroke: e ? "white" : "url(#btn-left)",
            strokeWidth: "2",
            d: "M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1",
          }),
        }),
        s.jsx("svg", {
          className: "absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]",
          height: "44",
          viewBox: "0 0 100 44",
          preserveAspectRatio: "none",
          fill: e ? "white" : "none",
          children: e
            ? s.jsx("polygon", {
                fill: "white",
                fillRule: "nonzero",
                points: "100 0 100 44 0 44 0 0",
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsx("polygon", {
                    fill: "url(#btn-top)",
                    fillRule: "nonzero",
                    points: "100 42 100 44 0 44 0 42",
                  }),
                  s.jsx("polygon", {
                    fill: "url(#btn-bottom)",
                    fillRule: "nonzero",
                    points: "100 0 100 2 0 2 0 0",
                  }),
                ],
              }),
        }),
        s.jsx("svg", {
          className: "absolute top-0 right-0",
          width: "21",
          height: "44",
          viewBox: "0 0 21 44",
          children: s.jsx("path", {
            fill: e ? "white" : "none",
            stroke: e ? "white" : "url(#btn-right)",
            strokeWidth: "2",
            d: "M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1",
          }),
        }),
      ],
    }),
  Nn = ({
    className: e,
    href: t,
    onClick: n,
    children: r,
    px: l,
    white: i,
  }) => {
    const o = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
        l || "px-7"
      } ${i ? "text-n-8" : "text-n-1"} ${e || ""}`,
      u = "relative z-10";
    return t
      ? s.jsxs("a", {
          href: t,
          className: o,
          children: [s.jsx("span", { className: u, children: r }), qs(i)],
        })
      : s.jsxs("button", {
          className: o,
          onClick: n,
          children: [s.jsx("span", { className: u, children: r }), qs(i)],
        });
  },
  bf = () =>
    s.jsx("div", {
      className:
        "hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block",
      children: s.jsx("img", {
        src: nf,
        width: 162,
        height: 76,
        alt: "Curve 2",
      }),
    }),
  Jf = () =>
    s.jsx("div", {
      className:
        "hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block",
      children: s.jsx("img", {
        src: tf,
        width: 522,
        height: 182,
        alt: "Curve 1",
      }),
    }),
  Xf = () =>
    s.jsx(_t, {
      crosses: !0,
      children: s.jsxs("div", {
        className: "container lg:flex",
        children: [
          s.jsxs("div", {
            className: "max-w-[25rem]",
            children: [
              s.jsx("h2", {
                className: "h2 mb-4 md:mb-8",
                children: "AI Chat App for seamless collaboration",
              }),
              s.jsx("ul", {
                className: "max-w-[22rem] mb-10 md:mb-14",
                children: Df.map((e) =>
                  s.jsxs(
                    "li",
                    {
                      className: "mb-3 py-3",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            s.jsx("img", {
                              src: E0,
                              width: 24,
                              height: 24,
                              alt: "check",
                            }),
                            s.jsx("h6", {
                              className: "body-2 ml-5",
                              children: e.title,
                            }),
                          ],
                        }),
                        e.text &&
                          s.jsx("p", {
                            className: "body-2 mt-3 text-n-4",
                            children: e.text,
                          }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            
            ],
          }),
          s.jsxs("div", {
            className: "lg:ml-auto xl:w-[38rem] mt-4",
            children: [
              s.jsx("p", {
                className:
                  "body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto",
                children: Sa,
              }),
              s.jsxs("div", {
                className:
                  "relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100",
                children: [
                  s.jsx("div", {
                    className:
                      "flex w-60 aspect-square m-auto border border-n-6 rounded-full",
                    children: s.jsx("div", {
                      className:
                        "w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full",
                      children: s.jsx("div", {
                        className:
                          "flex items-center justify-center w-full h-full bg-n-8 rounded-full",
                        children: s.jsx("img", {
                          src: Fd,
                          width: 48,
                          height: 48,
                          alt: "Synapse AI",
                        }),
                      }),
                    }),
                  }),
                  s.jsx("ul", {
                    children: Bf.map((e, t) =>
                      s.jsx(
                        "li",
                        {
                          className: `absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                            t * 45
                          }`,
                          children: s.jsx("div", {
                            className: `relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                              t * 45
                            }`,
                            children: s.jsx("img", {
                              className: "m-auto",
                              width: e.width,
                              height: e.height,
                              alt: e.title,
                              src: e.icon,
                            }),
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                  s.jsx(Jf, {}),
                  s.jsx(bf, {}),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  qf = () =>
    s.jsx(_t, {
      crosses: !0,
      className: "!px-0 !py-10",
      children: s.jsxs("div", {
        className:
          "container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col",
        children: [
          s.jsxs("p", {
            className: "caption text-n-4 lg:block",
            children: [
              "© ",
              new Date().getFullYear(),
              ". All rights reserved.",
            ],
          }),
          s.jsx("ul", {
            className: "flex gap-5 flex-wrap",
            children: Gf.map((e) =>
              s.jsx(
                "a",
                {
                  href: e.url,
                  target: "_blank",
                  className:
                    "flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6",
                  children: s.jsx("img", {
                    src: e.iconUrl,
                    width: 16,
                    height: 16,
                    alt: e.title,
                  }),
                },
                e.id
              )
            ),
          }),
        ],
      }),
    });
var Ea = { exports: {} };
(function (e, t) {
  (function (r, l) {
    e.exports = l();
  })(Ya, function () {
    return (function (n) {
      var r = {};
      function l(i) {
        if (r[i]) return r[i].exports;
        var o = (r[i] = { i, l: !1, exports: {} });
        return n[i].call(o.exports, o, o.exports, l), (o.l = !0), o.exports;
      }
      return (
        (l.m = n),
        (l.c = r),
        (l.d = function (i, o, u) {
          l.o(i, o) || Object.defineProperty(i, o, { enumerable: !0, get: u });
        }),
        (l.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (l.t = function (i, o) {
          if (
            (o & 1 && (i = l(i)),
            o & 8 || (o & 4 && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var u = Object.create(null);
          if (
            (l.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: i }),
            o & 2 && typeof i != "string")
          )
            for (var a in i)
              l.d(
                u,
                a,
                function (f) {
                  return i[f];
                }.bind(null, a)
              );
          return u;
        }),
        (l.n = function (i) {
          var o =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return l.d(o, "a", o), o;
        }),
        (l.o = function (i, o) {
          return Object.prototype.hasOwnProperty.call(i, o);
        }),
        (l.p = ""),
        l((l.s = 0))
      );
    })([
      function (n, r, l) {
        l.r(r);
        var i = function (d) {
            return Array.isArray(d) ? d : [d];
          },
          o = function (d) {
            return d instanceof Node;
          },
          u = function (d) {
            return d instanceof NodeList;
          },
          a = function (d, E) {
            if (d && E) {
              d = u(d) ? d : [d];
              for (var P = 0; P < d.length && E(d[P], P, d.length) !== !0; P++);
            }
          },
          f = function (d) {
            return console.error("[scroll-lock] ".concat(d));
          },
          v = function (d) {
            if (Array.isArray(d)) {
              var E = d.join(", ");
              return E;
            }
          },
          g = function (d) {
            var E = [];
            return (
              a(d, function (P) {
                return E.push(P);
              }),
              E
            );
          },
          m = function (d, E) {
            var P =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !0,
              I =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : document;
            if (P && g(I.querySelectorAll(E)).indexOf(d) !== -1) return d;
            for (
              ;
              (d = d.parentElement) &&
              g(I.querySelectorAll(E)).indexOf(d) === -1;

            );
            return d;
          },
          w = function (d, E) {
            var P =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : document,
              I = g(P.querySelectorAll(E)).indexOf(d) !== -1;
            return I;
          },
          x = function (d) {
            if (d) {
              var E = getComputedStyle(d),
                P = E.overflow === "hidden";
              return P;
            }
          },
          C = function (d) {
            if (d) {
              if (x(d)) return !0;
              var E = d.scrollTop;
              return E <= 0;
            }
          },
          T = function (d) {
            if (d) {
              if (x(d)) return !0;
              var E = d.scrollTop,
                P = d.scrollHeight,
                I = E + d.offsetHeight;
              return I >= P;
            }
          },
          p = function (d) {
            if (d) {
              if (x(d)) return !0;
              var E = d.scrollLeft;
              return E <= 0;
            }
          },
          c = function (d) {
            if (d) {
              if (x(d)) return !0;
              var E = d.scrollLeft,
                P = d.scrollWidth,
                I = E + d.offsetWidth;
              return I >= P;
            }
          },
          h = function (d) {
            var E = 'textarea, [contenteditable="true"]';
            return w(d, E);
          },
          y = function (d) {
            var E = 'input[type="range"]';
            return w(d, E);
          };
        l.d(r, "disablePageScroll", function () {
          return D;
        }),
          l.d(r, "enablePageScroll", function () {
            return ee;
          }),
          l.d(r, "getScrollState", function () {
            return ae;
          }),
          l.d(r, "clearQueueScrollLocks", function () {
            return ve;
          }),
          l.d(r, "getTargetScrollBarWidth", function () {
            return ye;
          }),
          l.d(r, "getCurrentTargetScrollBarWidth", function () {
            return Ie;
          }),
          l.d(r, "getPageScrollBarWidth", function () {
            return ke;
          }),
          l.d(r, "getCurrentPageScrollBarWidth", function () {
            return Ee;
          }),
          l.d(r, "addScrollableTarget", function () {
            return A;
          }),
          l.d(r, "removeScrollableTarget", function () {
            return z;
          }),
          l.d(r, "addScrollableSelector", function () {
            return B;
          }),
          l.d(r, "removeScrollableSelector", function () {
            return F;
          }),
          l.d(r, "addLockableTarget", function () {
            return V;
          }),
          l.d(r, "addLockableSelector", function () {
            return le;
          }),
          l.d(r, "setFillGapMethod", function () {
            return K;
          }),
          l.d(r, "addFillGapTarget", function () {
            return ie;
          }),
          l.d(r, "removeFillGapTarget", function () {
            return we;
          }),
          l.d(r, "addFillGapSelector", function () {
            return We;
          }),
          l.d(r, "removeFillGapSelector", function () {
            return N0;
          }),
          l.d(r, "refillGaps", function () {
            return kr;
          });
        function k(M) {
          for (var d = 1; d < arguments.length; d++) {
            var E = arguments[d] != null ? arguments[d] : {},
              P = Object.keys(E);
            typeof Object.getOwnPropertySymbols == "function" &&
              (P = P.concat(
                Object.getOwnPropertySymbols(E).filter(function (I) {
                  return Object.getOwnPropertyDescriptor(E, I).enumerable;
                })
              )),
              P.forEach(function (I) {
                L(M, I, E[I]);
              });
          }
          return M;
        }
        function L(M, d, E) {
          return (
            d in M
              ? Object.defineProperty(M, d, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (M[d] = E),
            M
          );
        }
        var N = ["padding", "margin", "width", "max-width", "none"],
          O = 3,
          j = {
            scroll: !0,
            queue: 0,
            scrollableSelectors: ["[data-scroll-lock-scrollable]"],
            lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
            fillGapSelectors: [
              "body",
              "[data-scroll-lock-fill-gap]",
              "[data-scroll-lock-lockable]",
            ],
            fillGapMethod: N[0],
            startTouchY: 0,
            startTouchX: 0,
          },
          D = function (d) {
            j.queue <= 0 && ((j.scroll = !1), ql(), L0()), A(d), j.queue++;
          },
          ee = function (d) {
            j.queue > 0 && j.queue--,
              j.queue <= 0 && ((j.scroll = !0), Ra(), Ia()),
              z(d);
          },
          ae = function () {
            return j.scroll;
          },
          ve = function () {
            j.queue = 0;
          },
          ye = function (d) {
            var E =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (o(d)) {
              var P = d.style.overflowY;
              E
                ? ae() ||
                  (d.style.overflowY = d.getAttribute(
                    "data-scroll-lock-saved-overflow-y-property"
                  ))
                : (d.style.overflowY = "scroll");
              var I = Ie(d);
              return (d.style.overflowY = P), I;
            } else return 0;
          },
          Ie = function (d) {
            if (o(d))
              if (d === document.body) {
                var E = document.documentElement.clientWidth,
                  P = window.innerWidth,
                  I = P - E;
                return I;
              } else {
                var lt = d.style.borderLeftWidth,
                  Ut = d.style.borderRightWidth;
                (d.style.borderLeftWidth = "0px"),
                  (d.style.borderRightWidth = "0px");
                var mt = d.offsetWidth - d.clientWidth;
                return (
                  (d.style.borderLeftWidth = lt),
                  (d.style.borderRightWidth = Ut),
                  mt
                );
              }
            else return 0;
          },
          ke = function () {
            var d =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !1;
            return ye(document.body, d);
          },
          Ee = function () {
            return Ie(document.body);
          },
          A = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                a(P, function (I) {
                  o(I)
                    ? I.setAttribute("data-scroll-lock-scrollable", "")
                    : f('"'.concat(I, '" is not a Element.'));
                });
              });
            }
          },
          z = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                a(P, function (I) {
                  o(I)
                    ? I.removeAttribute("data-scroll-lock-scrollable")
                    : f('"'.concat(I, '" is not a Element.'));
                });
              });
            }
          },
          B = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                j.scrollableSelectors.push(P);
              });
            }
          },
          F = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                j.scrollableSelectors = j.scrollableSelectors.filter(function (
                  I
                ) {
                  return I !== P;
                });
              });
            }
          },
          V = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                a(P, function (I) {
                  o(I)
                    ? I.setAttribute("data-scroll-lock-lockable", "")
                    : f('"'.concat(I, '" is not a Element.'));
                });
              }),
                ae() || ql();
            }
          },
          le = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                j.lockableSelectors.push(P);
              }),
                ae() || ql(),
                We(d);
            }
          },
          K = function (d) {
            if (d)
              if (N.indexOf(d) !== -1) (j.fillGapMethod = d), kr();
              else {
                var E = N.join(", ");
                f(
                  '"'
                    .concat(
                      d,
                      `" method is not available!
Available fill gap methods: `
                    )
                    .concat(E, ".")
                );
              }
          },
          ie = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                a(P, function (I) {
                  o(I)
                    ? (I.setAttribute("data-scroll-lock-fill-gap", ""),
                      j.scroll || M0(I))
                    : f('"'.concat(I, '" is not a Element.'));
                });
              });
            }
          },
          we = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                a(P, function (I) {
                  o(I)
                    ? (I.removeAttribute("data-scroll-lock-fill-gap"),
                      j.scroll || _l(I))
                    : f('"'.concat(I, '" is not a Element.'));
                });
              });
            }
          },
          We = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                j.fillGapSelectors.indexOf(P) === -1 &&
                  (j.fillGapSelectors.push(P), j.scroll || T0(P));
              });
            }
          },
          N0 = function (d) {
            if (d) {
              var E = i(d);
              E.map(function (P) {
                (j.fillGapSelectors = j.fillGapSelectors.filter(function (I) {
                  return I !== P;
                })),
                  j.scroll || P0(P);
              });
            }
          },
          kr = function () {
            j.scroll || L0();
          },
          ql = function () {
            var d = v(j.lockableSelectors);
            Oa(d);
          },
          Ra = function () {
            var d = v(j.lockableSelectors);
            Fa(d);
          },
          Oa = function (d) {
            var E = document.querySelectorAll(d);
            a(E, function (P) {
              za(P);
            });
          },
          Fa = function (d) {
            var E = document.querySelectorAll(d);
            a(E, function (P) {
              Ua(P);
            });
          },
          za = function (d) {
            if (o(d) && d.getAttribute("data-scroll-lock-locked") !== "true") {
              var E = window.getComputedStyle(d);
              d.setAttribute(
                "data-scroll-lock-saved-overflow-y-property",
                E.overflowY
              ),
                d.setAttribute(
                  "data-scroll-lock-saved-inline-overflow-property",
                  d.style.overflow
                ),
                d.setAttribute(
                  "data-scroll-lock-saved-inline-overflow-y-property",
                  d.style.overflowY
                ),
                (d.style.overflow = "hidden"),
                d.setAttribute("data-scroll-lock-locked", "true");
            }
          },
          Ua = function (d) {
            o(d) &&
              d.getAttribute("data-scroll-lock-locked") === "true" &&
              ((d.style.overflow = d.getAttribute(
                "data-scroll-lock-saved-inline-overflow-property"
              )),
              (d.style.overflowY = d.getAttribute(
                "data-scroll-lock-saved-inline-overflow-y-property"
              )),
              d.removeAttribute("data-scroll-lock-saved-overflow-property"),
              d.removeAttribute(
                "data-scroll-lock-saved-inline-overflow-property"
              ),
              d.removeAttribute(
                "data-scroll-lock-saved-inline-overflow-y-property"
              ),
              d.removeAttribute("data-scroll-lock-locked"));
          },
          L0 = function () {
            j.fillGapSelectors.map(function (d) {
              T0(d);
            });
          },
          Ia = function () {
            j.fillGapSelectors.map(function (d) {
              P0(d);
            });
          },
          T0 = function (d) {
            var E = document.querySelectorAll(d),
              P = j.lockableSelectors.indexOf(d) !== -1;
            a(E, function (I) {
              M0(I, P);
            });
          },
          M0 = function (d) {
            var E =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (o(d)) {
              var P;
              if (d.getAttribute("data-scroll-lock-lockable") === "" || E)
                P = ye(d, !0);
              else {
                var I = m(d, v(j.lockableSelectors));
                P = ye(I, !0);
              }
              d.getAttribute("data-scroll-lock-filled-gap") === "true" && _l(d);
              var lt = window.getComputedStyle(d);
              if (
                (d.setAttribute("data-scroll-lock-filled-gap", "true"),
                d.setAttribute(
                  "data-scroll-lock-current-fill-gap-method",
                  j.fillGapMethod
                ),
                j.fillGapMethod === "margin")
              ) {
                var Ut = parseFloat(lt.marginRight);
                d.style.marginRight = "".concat(Ut + P, "px");
              } else if (j.fillGapMethod === "width")
                d.style.width = "calc(100% - ".concat(P, "px)");
              else if (j.fillGapMethod === "max-width")
                d.style.maxWidth = "calc(100% - ".concat(P, "px)");
              else if (j.fillGapMethod === "padding") {
                var mt = parseFloat(lt.paddingRight);
                d.style.paddingRight = "".concat(mt + P, "px");
              }
            }
          },
          P0 = function (d) {
            var E = document.querySelectorAll(d);
            a(E, function (P) {
              _l(P);
            });
          },
          _l = function (d) {
            if (
              o(d) &&
              d.getAttribute("data-scroll-lock-filled-gap") === "true"
            ) {
              var E = d.getAttribute(
                "data-scroll-lock-current-fill-gap-method"
              );
              d.removeAttribute("data-scroll-lock-filled-gap"),
                d.removeAttribute("data-scroll-lock-current-fill-gap-method"),
                E === "margin"
                  ? (d.style.marginRight = "")
                  : E === "width"
                  ? (d.style.width = "")
                  : E === "max-width"
                  ? (d.style.maxWidth = "")
                  : E === "padding" && (d.style.paddingRight = "");
            }
          },
          Da = function (d) {
            kr();
          },
          Ba = function (d) {
            j.scroll ||
              ((j.startTouchY = d.touches[0].clientY),
              (j.startTouchX = d.touches[0].clientX));
          },
          Va = function (d) {
            if (!j.scroll) {
              var E = j.startTouchY,
                P = j.startTouchX,
                I = d.touches[0].clientY,
                lt = d.touches[0].clientX;
              if (d.touches.length < 2) {
                var Ut = v(j.scrollableSelectors),
                  mt = { up: E < I, down: E > I, left: P < lt, right: P > lt },
                  Er = {
                    up: E + O < I,
                    down: E - O > I,
                    left: P + O < lt,
                    right: P - O > lt,
                  },
                  Wa = function R0(oe) {
                    var Ka =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1;
                    if (oe) {
                      var $l = m(oe, Ut, !1);
                      if (y(oe)) return !1;
                      if (Ka || (h(oe) && m(oe, Ut)) || w(oe, Ut)) {
                        var jr = !1;
                        p(oe) && c(oe)
                          ? ((mt.up && C(oe)) || (mt.down && T(oe))) &&
                            (jr = !0)
                          : C(oe) && T(oe)
                          ? ((mt.left && p(oe)) || (mt.right && c(oe))) &&
                            (jr = !0)
                          : ((Er.up && C(oe)) ||
                              (Er.down && T(oe)) ||
                              (Er.left && p(oe)) ||
                              (Er.right && c(oe))) &&
                            (jr = !0),
                          jr &&
                            ($l
                              ? R0($l, !0)
                              : d.cancelable && d.preventDefault());
                      } else R0($l);
                    } else d.cancelable && d.preventDefault();
                  };
                Wa(d.target);
              }
            }
          },
          Ha = function (d) {
            j.scroll || ((j.startTouchY = 0), (j.startTouchX = 0));
          };
        typeof window < "u" && window.addEventListener("resize", Da),
          typeof document < "u" &&
            (document.addEventListener("touchstart", Ba),
            document.addEventListener("touchmove", Va, { passive: !1 }),
            document.addEventListener("touchend", Ha));
        var Ga = {
            hide: function (d) {
              f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),
                D(d);
            },
            show: function (d) {
              f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),
                ee(d);
            },
            toggle: function (d) {
              f('"toggle" is deprecated! Do not use it.'), ae() ? D() : ee(d);
            },
            getState: function () {
              return (
                f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),
                ae()
              );
            },
            getWidth: function () {
              return (
                f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),
                ke()
              );
            },
            getCurrentWidth: function () {
              return (
                f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),
                Ee()
              );
            },
            setScrollableTargets: function (d) {
              f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),
                A(d);
            },
            setFillGapSelectors: function (d) {
              f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),
                We(d);
            },
            setFillGapTargets: function (d) {
              f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),
                ie(d);
            },
            clearQueue: function () {
              f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),
                ve();
            },
          },
          Qa = k(
            {
              disablePageScroll: D,
              enablePageScroll: ee,
              getScrollState: ae,
              clearQueueScrollLocks: ve,
              getTargetScrollBarWidth: ye,
              getCurrentTargetScrollBarWidth: Ie,
              getPageScrollBarWidth: ke,
              getCurrentPageScrollBarWidth: Ee,
              addScrollableSelector: B,
              removeScrollableSelector: F,
              addScrollableTarget: A,
              removeScrollableTarget: z,
              addLockableSelector: le,
              addLockableTarget: V,
              addFillGapSelector: We,
              removeFillGapSelector: N0,
              addFillGapTarget: ie,
              removeFillGapTarget: we,
              setFillGapMethod: K,
              refillGaps: kr,
              _state: j,
            },
            Ga
          );
        r.default = Qa;
      },
    ]).default;
  });
})(Ea);
var ji = Ea.exports;
const _f = ({ openNavigation: e }) =>
    s.jsxs("svg", {
      className: "overflow-visible",
      width: "20",
      height: "12",
      viewBox: "0 0 20 12",
      children: [
        s.jsx("rect", {
          className: "transition-all origin-center",
          y: e ? "5" : "0",
          width: "20",
          height: "2",
          rx: "1",
          fill: "white",
          transform: `rotate(${e ? "45" : "0"})`,
        }),
        s.jsx("rect", {
          className: "transition-all origin-center",
          y: e ? "5" : "10",
          width: "20",
          height: "2",
          rx: "1",
          fill: "white",
          transform: `rotate(${e ? "-45" : "0"})`,
        }),
      ],
    }),
  $f = () =>
    s.jsxs("div", {
      className:
        "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
      children: [
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
      ],
    }),
  e3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className: "absolute top-0 left-5 w-0.25 h-full bg-n-6",
        }),
        s.jsx("div", {
          className: "absolute top-0 right-5 w-0.25 h-full bg-n-6",
        }),
      ],
    }),
  t3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full",
        }),
        s.jsx("div", {
          className:
            "absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full",
        }),
        s.jsx("div", {
          className:
            "absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full",
        }),
      ],
    }),
  n3 = () =>
    s.jsxs("div", {
      className: "absolute inset-0 pointer-events-none lg:hidden",
      children: [
        s.jsx("div", {
          className: "absolute inset-0 opacity-[.03]",
          children: s.jsx("img", {
            className: "w-full h-full object-cover",
            src: qd,
            width: 688,
            height: 953,
            alt: "Background",
          }),
        }),
        s.jsx($f, {}),
        s.jsx(e3, {}),
        s.jsx(t3, {}),
      ],
    }),
  r3 = () => {
    const e = Nd(),
      [t, n] = U.useState(!1),
      r = () => {
        t ? (n(!1), ji.enablePageScroll()) : (n(!0), ji.disablePageScroll());
      },
      l = () => {
        t && (ji.enablePageScroll(), n(!1));
      };
    return s.jsx("div", {
      className: `fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        t ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`,
      children: s.jsxs("div", {
        className: "flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4",
        children: [
          s.jsx("a", {
            className: "block w-[12rem] xl:mr-8",
            href: "#hero",
            children: s.jsx("img", {
              src: Od,
              width: 100,
              height: 40,
              alt: "Synapse AI",
            }),
          }),
          s.jsxs("nav", {
            className: `${
              t ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`,
            children: [
              s.jsx("div", {
                className:
                  "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row",
                children: Pf.map((i) =>
                  s.jsx(
                    "a",
                    {
                      href: i.url,
                      onClick: l,
                      className: `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                        i.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                        i.url === e.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`,
                      children: i.title,
                    },
                    i.id
                  )
                ),
              }),
              s.jsx(n3, {}),
            ],
          }),
          s.jsx("a", {
            href: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000",
            className:
              "button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block",
            children: "Chart",
          }),
          s.jsx(Nn, {
            className: "hidden lg:flex",
            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
            children: "Buy SNAI",
          }),
          s.jsx(Nn, {
            className: "ml-auto lg:hidden",
            px: "px-3",
            onClick: r,
            children: s.jsx(_f, { openNavigation: t }),
          }),
        ],
      }),
    });
  },
  l3 = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  ja =
    typeof window < "u"
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(l3()), 16.666666666666668);
let jo = !0,
  vr = !1,
  No = !1;
const $n = { delta: 0, timestamp: 0 },
  Sr = ["read", "update", "preRender", "render", "postRender"],
  Xl = Sr.reduce(
    (e, t) => (
      (e[t] = (function (n) {
        let r = [],
          l = [],
          i = 0,
          o = !1,
          u = !1;
        const a = new WeakSet(),
          f = {
            schedule: (v, g = !1, m = !1) => {
              const w = m && o,
                x = w ? r : l;
              return (
                g && a.add(v),
                x.indexOf(v) === -1 && (x.push(v), w && o && (i = r.length)),
                v
              );
            },
            cancel: (v) => {
              const g = l.indexOf(v);
              g !== -1 && l.splice(g, 1), a.delete(v);
            },
            process: (v) => {
              if (o) u = !0;
              else {
                if (
                  ((o = !0),
                  ([r, l] = [l, r]),
                  (l.length = 0),
                  (i = r.length),
                  i)
                )
                  for (let g = 0; g < i; g++) {
                    const m = r[g];
                    m(v), a.has(m) && (f.schedule(m), n());
                  }
                (o = !1), u && ((u = !1), f.process(v));
              }
            },
          };
        return f;
      })(() => (vr = !0))),
      e
    ),
    {}
  ),
  Tl = Sr.reduce((e, t) => {
    const n = Xl[t];
    return (e[t] = (r, l = !1, i = !1) => (vr || o3(), n.schedule(r, l, i))), e;
  }, {}),
  Ml = Sr.reduce((e, t) => ((e[t] = Xl[t].cancel), e), {});
Sr.reduce((e, t) => ((e[t] = () => Xl[t].process($n)), e), {});
const i3 = (e) => Xl[e].process($n),
  Na = (e) => {
    (vr = !1),
      ($n.delta = jo
        ? 16.666666666666668
        : Math.max(Math.min(e - $n.timestamp, 40), 1)),
      ($n.timestamp = e),
      (No = !0),
      Sr.forEach(i3),
      (No = !1),
      vr && ((jo = !1), ja(Na));
  },
  o3 = () => {
    (vr = !0), (jo = !0), No || ja(Na);
  };
var Wr =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  s3 = /^\s+|\s+$/g,
  u3 = /^[-+]0x[0-9a-f]+$/i,
  a3 = /^0b[01]+$/i,
  c3 = /^0o[0-7]+$/i,
  d3 = parseInt,
  f3 = typeof Wr == "object" && Wr && Wr.Object === Object && Wr,
  p3 = typeof self == "object" && self && self.Object === Object && self,
  h3 = f3 || p3 || Function("return this")(),
  m3 = Object.prototype.toString,
  g3 = Math.max,
  v3 = Math.min,
  Ni = function () {
    return h3.Date.now();
  };
function Lo(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function _s(e) {
  if (typeof e == "number") return e;
  if (
    (function (r) {
      return (
        typeof r == "symbol" ||
        ((function (l) {
          return !!l && typeof l == "object";
        })(r) &&
          m3.call(r) == "[object Symbol]")
      );
    })(e)
  )
    return NaN;
  if (Lo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Lo(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(s3, "");
  var n = a3.test(e);
  return n || c3.test(e) ? d3(e.slice(2), n ? 2 : 8) : u3.test(e) ? NaN : +e;
}
var j0 = function (e, t, n) {
    var r,
      l,
      i,
      o,
      u,
      a,
      f = 0,
      v = !1,
      g = !1,
      m = !0;
    if (typeof e != "function") throw new TypeError("Expected a function");
    function w(h) {
      var y = r,
        k = l;
      return (r = l = void 0), (f = h), (o = e.apply(k, y));
    }
    function x(h) {
      return (f = h), (u = setTimeout(T, t)), v ? w(h) : o;
    }
    function C(h) {
      var y = h - a;
      return a === void 0 || y >= t || y < 0 || (g && h - f >= i);
    }
    function T() {
      var h = Ni();
      if (C(h)) return p(h);
      u = setTimeout(
        T,
        (function (y) {
          var k = t - (y - a);
          return g ? v3(k, i - (y - f)) : k;
        })(h)
      );
    }
    function p(h) {
      return (u = void 0), m && r ? w(h) : ((r = l = void 0), o);
    }
    function c() {
      var h = Ni(),
        y = C(h);
      if (((r = arguments), (l = this), (a = h), y)) {
        if (u === void 0) return x(a);
        if (g) return (u = setTimeout(T, t)), w(a);
      }
      return u === void 0 && (u = setTimeout(T, t)), o;
    }
    return (
      (t = _s(t) || 0),
      Lo(n) &&
        ((v = !!n.leading),
        (i = (g = "maxWait" in n) ? g3(_s(n.maxWait) || 0, t) : i),
        (m = "trailing" in n ? !!n.trailing : m)),
      (c.cancel = function () {
        u !== void 0 && clearTimeout(u), (f = 0), (r = a = l = u = void 0);
      }),
      (c.flush = function () {
        return u === void 0 ? o : p(Ni());
      }),
      c
    );
  },
  Pl = { exports: {} },
  $s = typeof document < "u" ? document.createElement("p").style : {},
  e2 = ["O", "ms", "Moz", "Webkit"],
  Li = /([A-Z])/g,
  Ti = {};
function t2(e) {
  if (
    ((e = e.replace(/-([a-z])/g, function (l, i) {
      return i.toUpperCase();
    })),
    $s[e] !== void 0)
  )
    return e;
  for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = e2.length; n--; ) {
    var r = e2[n] + t;
    if ($s[r] !== void 0) return r;
  }
  return e;
}
(Pl.exports = function (e) {
  return e in Ti ? Ti[e] : (Ti[e] = t2(e));
}),
  (Pl.exports.dash = function (e) {
    return (
      (e = t2(e)),
      Li.test(e) && ((e = "-" + e.replace(Li, "-$1")), (Li.lastIndex = 0)),
      e.toLowerCase()
    );
  });
const n2 = { isReady: !1, scrollbarWidth: 0, windowHeight: 0, windowWidth: 0 },
  La = () => {
    const [e, t] = U.useState(n2),
      n = U.useRef(n2),
      r = U.useCallback(() => {
        const l = {
          isReady: !0,
          scrollbarWidth:
            window.innerWidth - document.documentElement.clientWidth,
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth,
        };
        t(l), (n.current = l);
      }, []);
    return (
      U.useEffect(() => {
        const l = j0(r, 100);
        return (
          window.addEventListener("resize", l),
          r(),
          () => {
            window.removeEventListener("resize", l);
          }
        );
      }, [r]),
      { windowSize: e, windowSizeRef: n }
    );
  },
  Rl = (e, t, n) => e + (t - e) * n;
class y3 extends class {
  addEventListener(t, n) {
    this._listeners === void 0 && (this._listeners = {});
    const r = this._listeners;
    r[t] === void 0 && (r[t] = []), r[t].indexOf(n) === -1 && r[t].push(n);
  }
  hasEventListener(t, n) {
    if (this._listeners === void 0) return !1;
    const r = this._listeners;
    return r[t] !== void 0 && r[t].indexOf(n) !== -1;
  }
  removeEventListener(t, n) {
    if (this._listeners === void 0) return;
    const r = this._listeners[t];
    if (r !== void 0) {
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const r = n.slice(0);
      for (let l = 0, i = r.length; l < i; l++) r[l].call(this, t);
      t.target = null;
    }
  }
} {
  constructor() {
    super(),
      (this._mouseLast = { x: 0, y: 0 }),
      (this._isTouching = !1),
      (this.mouse = { x: 0, y: 0 }),
      (this._shouldUpdate = !1),
      (this._onTouchDown = (t) => {
        this._shouldUpdate &&
          ((this._isTouching = !0),
          (this._mouseLast.x =
            "touches" in t ? t.touches[0].clientX : t.clientX),
          (this._mouseLast.y =
            "touches" in t ? t.touches[0].clientY : t.clientY),
          (this.mouse.x = this._mouseLast.x),
          (this.mouse.y = this._mouseLast.y),
          this.dispatchEvent({ type: "down" }),
          this.dispatchEvent({ type: "mousemove" }));
      }),
      (this._onTouchMove = (t) => {
        if (!this._shouldUpdate) return;
        const n = "touches" in t ? t.touches[0].clientX : t.clientX,
          r = "touches" in t ? t.touches[0].clientY : t.clientY,
          l = n - this._mouseLast.x,
          i = r - this._mouseLast.y;
        (this._mouseLast.x = n),
          (this._mouseLast.y = r),
          (this.mouse.x += l),
          (this.mouse.y += i),
          this.dispatchEvent({ type: "mousemove" });
      }),
      (this._onTouchUp = () => {
        this._shouldUpdate &&
          ((this._isTouching = !1),
          this.dispatchEvent({ type: "up" }),
          this.dispatchEvent({ type: "mousemove" }));
      }),
      (this._onMouseLeave = () => {
        this.dispatchEvent({ type: "left" });
      });
  }
  _addEvents() {
    this._targetEl.addEventListener("mousedown", this._onTouchDown),
      this._targetEl.addEventListener("mousemove", this._onTouchMove, {
        passive: !0,
      }),
      this._targetEl.addEventListener("mouseup", this._onTouchUp),
      this._targetEl.addEventListener("touchstart", this._onTouchDown, {
        passive: !0,
      }),
      this._targetEl.addEventListener("touchmove", this._onTouchMove, {
        passive: !0,
      }),
      this._targetEl.addEventListener("touchend", this._onTouchUp),
      this._targetEl.addEventListener("mouseout", this._onMouseLeave);
  }
  _removeEvents() {
    this._targetEl.removeEventListener("mousedown", this._onTouchDown),
      this._targetEl.removeEventListener("mousemove", this._onTouchMove),
      this._targetEl.removeEventListener("mouseup", this._onTouchUp),
      this._targetEl.removeEventListener("touchstart", this._onTouchDown),
      this._targetEl.removeEventListener("touchmove", this._onTouchMove),
      this._targetEl.removeEventListener("touchend", this._onTouchUp),
      this._targetEl.removeEventListener("mouseout", this._onMouseLeave);
  }
  init(t) {
    (this._targetEl = window),
      t && t.current && (this._targetEl = t.current),
      this._addEvents();
  }
  destroy() {
    this._removeEvents();
  }
  setShouldUpdate(t) {
    this._shouldUpdate = t;
  }
  update() {
    (this._mouseLast.x = this.mouse.x), (this._mouseLast.y = this.mouse.y);
  }
}
const Ta = () =>
    typeof window < "u" &&
    ("ontouchstart" in window ||
      "ontouchstart" in document.documentElement ||
      navigator.maxTouchPoints > 0),
  w3 = { height: 1, width: 1, x: 1, y: 1 },
  x3 = (e) => {
    const {
        children: t,
        strength: n = 0.14,
        parallaxContainerRef: r = null,
        scrollContainerRef: l = null,
        shouldResetPosition: i = !1,
        enableOnTouchDevice: o = !1,
        isAbsolutelyPositioned: u = !1,
        lerpEase: a = 0.06,
        zIndex: f = null,
        shouldPause: v = !0,
      } = e,
      { windowSizeRef: g } = La(),
      m = U.useRef(null),
      w = U.useRef(null),
      x = U.useRef(0),
      C = U.useRef(0),
      T = U.useRef(0),
      p = U.useRef(0),
      c = U.useRef(null),
      h = U.useRef(null),
      y = U.useRef(!0),
      k = U.useRef(w3),
      L = U.useRef(new y3()),
      N = U.useRef(null),
      O = U.useRef(Pl.exports("transform")),
      j = () => {
        y.current &&
          m.current &&
          ((m.current.style.willChange = "transform"),
          (c.current = Tl.render(ee, !0)),
          (h.current = Tl.update(ae, !0)));
      },
      D = () => {
        m.current &&
          ((m.current.style.willChange = "auto"),
          c.current && Ml.render(c.current),
          h.current && Ml.update(h.current));
      },
      ee = () => {
        if (!m.current) return;
        let F = g.current.windowWidth,
          V = g.current.windowHeight;
        r && r.current && ((F = k.current.width), (V = k.current.height)),
          (F *= 0.5),
          (V *= 0.5),
          (F *= n),
          (V *= n),
          (m.current.style[O.current] = `translate3d(${x.current * F}px, ${
            C.current * V
          }px, 0px)`);
      },
      ae = ({ delta: F }) => {
        const V = Math.abs(T.current - x.current),
          le = Math.abs(p.current - C.current);
        if (V < 0.001 && le < 0.001) return;
        let K = F / 16.666666666666668;
        L.current.update();
        const ie = Math.round(K);
        ie >= 1 && (K = ie);
        const we = Rl(x.current, T.current, a * K);
        x.current = we;
        const We = Rl(C.current, p.current, a * K);
        C.current = We;
      },
      ve = () => {
        document.hidden ? D() : j();
      },
      ye = (F, V) => {
        let le = g.current.windowWidth,
          K = g.current.windowHeight,
          ie = F,
          we = V;
        return (
          r &&
            r.current &&
            ((le = k.current.width),
            (K = k.current.height),
            (ie = F - k.current.x),
            (we = V - k.current.y)),
          { x: (ie / le) * 2 - 1, y: (we / K) * 2 - 1 }
        );
      },
      Ie = (F) => {
        const V = F.target.mouse.x,
          le = F.target.mouse.y,
          { x: K, y: ie } = ye(V, le);
        (T.current = K), (p.current = ie);
      },
      ke = () => {
        i && ((T.current = 0), (p.current = 0));
      },
      Ee = (F) => {
        const V = "touches" in F ? F.touches[0].clientX : F.clientX,
          le = "touches" in F ? F.touches[0].clientY : F.clientY,
          { x: K, y: ie } = ye(V, le);
        (K <= -1 || K >= 1 || ie >= 1 || ie <= -1) && ke();
      },
      A = () => {
        if (!r || !r.current) return;
        const F = r.current.getBoundingClientRect();
        k.current = {
          x: F.x,
          y: F.y,
          width: r.current.clientWidth,
          height: r.current.clientHeight,
        };
      },
      z = j0(A, 150),
      B = (F) => {
        if (F[0].isIntersecting)
          (y.current = !0), j(), L.current.setShouldUpdate(!0);
        else {
          if (!v) return;
          (y.current = !1), D(), L.current.setShouldUpdate(!1);
        }
      };
    return (
      U.useEffect(() => {
        if (!o && Ta()) return;
        L.current.init(r), j();
        let F = window,
          V = window;
        return (
          l && l.current && (V = l.current),
          r &&
            r.current &&
            (A(),
            (F = r.current),
            V.addEventListener("scroll", z, { passive: !0 }),
            window.addEventListener("resize", z, { passive: !0 })),
          L.current.addEventListener("mousemove", Ie),
          window.addEventListener("visibilitychange", ve),
          window.addEventListener("touchstart", Ee, { passive: !0 }),
          F.addEventListener("mouseout", ke),
          (N.current = new IntersectionObserver(B, { threshold: 0.5 })),
          w.current && N.current.observe(w.current),
          () => {
            D(),
              r &&
                r.current &&
                (V.removeEventListener("scroll", z),
                window.removeEventListener("resize", z)),
              L.current.removeEventListener("mousemove", Ie),
              window.removeEventListener("visibilitychange", ve),
              window.removeEventListener("touchstart", Ee),
              F.removeEventListener("mouseout", ke),
              w.current && N.current && N.current.unobserve(w.current),
              L.current.destroy();
          }
        );
      }, []),
      tt.createElement(
        tt.Fragment,
        null,
        tt.createElement(
          "span",
          {
            ref: w,
            style: {
              width: "100%",
              height: "100%",
              display: "inline-block",
              userSelect: "none",
              pointerEvents: "none",
              position: u ? "absolute" : "relative",
              top: 0,
              left: 0,
              zIndex: f || "initial",
            },
          },
          tt.createElement(
            "span",
            {
              ref: m,
              style: {
                backfaceVisibility: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "initial",
                pointerEvents: "initial",
              },
            },
            t
          )
        )
      )
    );
  },
  C3 = { xMaxOffset: 1, xOffset: 1, yMaxOffset: 1, yOffset: 1 },
  r2 = U.forwardRef((e, t) => {
    U.useImperativeHandle(t, () => ({ updateValues: ye }));
    const {
        children: n,
        strength: r = 0.14,
        scrollContainerRef: l = null,
        enableOnTouchDevice: i = !0,
        lerpEase: o = 0.06,
        isHorizontal: u = !1,
        isAbsolutelyPositioned: a = !1,
        zIndex: f = null,
        shouldPause: v = !0,
      } = e,
      g = U.useRef(null),
      m = U.useRef(null),
      w = U.useRef(1),
      x = U.useRef(1),
      C = U.useRef(1),
      T = U.useRef(1),
      p = U.useRef(null),
      c = U.useRef(null),
      h = U.useRef(!0),
      y = U.useRef(C3),
      k = U.useRef(1),
      L = U.useRef(1),
      { windowSizeRef: N } = La(),
      O = U.useRef(Pl.exports("transform")),
      j = () => {
        g.current &&
          ((g.current.style.willChange = "transform"),
          (p.current = Tl.render(ee, !0)),
          (c.current = Tl.update(ae, !0)));
      },
      D = () => {
        g.current &&
          ((g.current.style.willChange = "auto"),
          p.current && Ml.render(p.current),
          c.current && Ml.update(c.current));
      },
      ee = () => {
        if (!h.current || !g.current) return;
        let A = u ? 1 : 0;
        g.current.style[O.current] = `translate3d(${w.current * r * A}px, ${
          x.current * r * (1 - A)
        }px, 0px)`;
      },
      ae = ({ delta: A }) => {
        if (!h.current) return;
        const z = Math.abs(C.current - w.current),
          B = Math.abs(T.current - x.current);
        if (z < 0.001 && B < 0.001) return;
        let F = A / 16.666666666666668;
        const V = Math.round(F);
        V >= 1 && (F = V);
        const le = Rl(w.current, C.current, o * F);
        w.current = le;
        const K = Rl(x.current, T.current, o * F);
        x.current = K;
      },
      ve = () => {
        document.hidden ? D() : j();
      },
      ye = () => {
        (() => {
          if (!m || !m.current) return;
          ke();
          const A = m.current.getBoundingClientRect();
          (k.current = y.current.xOffset + A.x + 0.5 * A.width),
            (L.current = y.current.yOffset + A.y + 0.5 * A.height);
        })(),
          Ee();
      },
      Ie = j0(ye, 150),
      ke = () => {
        var A;
        l && l.current
          ? (y.current = {
              xOffset: (A = l.current).scrollLeft,
              yOffset: A.scrollTop,
              xMaxOffset: A.scrollWidth - A.offsetWidth,
              yMaxOffset: A.scrollHeight - A.offsetHeight,
            })
          : (y.current = {
              xOffset: window.pageXOffset,
              yOffset: window.pageYOffset,
              xMaxOffset: document.body.clientWidth - window.innerWidth,
              yMaxOffset: document.body.clientHeight - window.innerHeight,
            });
      },
      Ee = () => {
        ke();
        let A = y.current.xOffset - k.current,
          z = y.current.yOffset - L.current;
        if (
          ((A += 0.5 * N.current.windowWidth),
          (z += 0.5 * N.current.windowHeight),
          (C.current = A),
          (T.current = z),
          Math.abs(T.current) > 1.5 * N.current.windowHeight ||
            Math.abs(C.current) > 1.5 * N.current.windowWidth)
        ) {
          if (!v) return;
          h.current = !1;
        } else h.current = !0;
      };
    return (
      U.useEffect(() => {
        if (!i && Ta()) return;
        j();
        let A = window;
        return (
          l && l.current && (A = l.current),
          A.addEventListener("scroll", Ee, { passive: !0 }),
          window.addEventListener("visibilitychange", ve),
          window.addEventListener("resize", Ie),
          ye(),
          () => {
            D(),
              A.removeEventListener("scroll", Ee),
              window.removeEventListener("visibilitychange", ve),
              window.removeEventListener("resize", Ie);
          }
        );
      }, []),
      tt.createElement(
        tt.Fragment,
        null,
        tt.createElement(
          "span",
          {
            ref: m,
            style: {
              width: "100%",
              height: "100%",
              display: "inline-block",
              userSelect: "none",
              pointerEvents: "none",
              position: a ? "absolute" : "relative",
              top: 0,
              left: 0,
              zIndex: f || "initial",
            },
          },
          tt.createElement(
            "span",
            {
              ref: g,
              style: {
                backfaceVisibility: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "initial",
                pointerEvents: "initial",
              },
            },
            n
          )
        )
      )
    );
  }),
  A3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8",
        }),
        s.jsx("div", {
          className:
            "relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20",
        }),
      ],
    }),
  S3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block",
        }),
        s.jsx(Ll, {
          className:
            "hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block",
        }),
        s.jsx(Ll, {
          className:
            "hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block",
        }),
      ],
    }),
  k3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
        s.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        }),
      ],
    }),
  E3 = ({ parallaxRef: e }) => {
    const [t, n] = U.useState(!1);
    return (
      U.useEffect(() => {
        n(!0);
      }, []),
      s.jsxs("div", {
        className:
          "absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]",
        children: [
          s.jsx(k3, {}),
          s.jsxs(x3, {
            strength: 0.07,
            parallaxContainerRef: e,
            children: [
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]",
                children: s.jsx("div", {
                  className: `w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]",
                children: s.jsx("div", {
                  className: `w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]",
                children: s.jsx("div", {
                  className: `hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]",
                children: s.jsx("div", {
                  className: `w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]",
                children: s.jsx("div", {
                  className: `w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]",
                children: s.jsx("div", {
                  className: `w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                    t ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`,
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  Ma = ({ className: e }) =>
    s.jsxs("div", {
      className: `flex items-center ${
        e || ""
      } text-base`,
      
    }),
  j3 = ({ className: e, title: t }) =>
    s.jsxs("div", {
      className: `${
        e || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`,
      children: [
        s.jsx("img", {
          src: xf,
          width: 62,
          height: 62,
          alt: "image",
          className: "rounded-xl",
        }),
        s.jsxs("div", {
          className: "flex-1",
          children: [
            s.jsx("h6", {
              className: "mb-1 font-semibold text-base",
              children: t,
            }),
            s.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                s.jsx("ul", {
                  className: "flex -m-0.5",
                  children: Of.map((n, r) =>
                    s.jsx(
                      "li",
                      {
                        className:
                          "flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden",
                        children: s.jsx("img", {
                          src: n,
                          className: "w-full",
                          width: 20,
                          height: 20,
                          alt: n,
                        }),
                      },
                      r
                    )
                  ),
                }),
                s.jsx("div", {
                  className: "body-2 text-n-13",
                  children: "1m ago",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  N3 = ({ className: e }) =>
    s.jsxs("div", {
      className: e,
    }),
  L3 = () => {
    const e = U.useRef(null);
    return s.jsxs(_t, {
      className: "pt-[12rem] -mt-[5.25rem]",
      crosses: !0,
      crossesOffset: "lg:translate-y-[5.25rem]",
      customPaddings: !0,
      id: "hero",
      children: [
        s.jsxs("div", {
          className: "container relative",
          ref: e,
          children: [
            s.jsxs("div", {
              className:
                "relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]",
              children: [
                s.jsxs("h1", {
                  className: "h1 mb-6",
                  children: [
                    "Explore the Possibilities of AI Chatting with ",
                    " ",
                    s.jsxs("span", {
                      className: "inline-block relative",
                      children: [
                        "Synapse AI",
                        " ",
                        s.jsx("img", {
                          src: _d,
                          className: "absolute top-full left-0 w-full xl:-mt-2",
                          width: 624,
                          height: 28,
                          alt: "Curve",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("p", {
                  className: "body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8",
                  children:
                    "Unleash the power of AI within Synapse AI. Upgrade your productivity with Synapse AI, the open AI chat app.",
                }),
                s.jsx(Nn, {
                  href: "/app",
                  white: !0,
                  children: "Go to App",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24",
              children: [
                s.jsxs("div", {
                  className: "relative z-1 p-0.5 rounded-2xl bg-conic-gradient",
                  children: [
                    s.jsxs("div", {
                      className: "relative bg-n-8 rounded-[1rem]",
                      children: [
                        s.jsx("div", {
                          className: "h-[1.4rem] bg-n-10 rounded-t-[0.9rem]",
                        }),
                        s.jsxs("div", {
                          className:
                            "aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]",
                          children: [
                            s.jsx("img", {
                              src: $d,
                              className:
                                "w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]",
                              width: 1024,
                              height: 490,
                              alt: "AI",
                            }),
                            s.jsx(Ma, {
                              className:
                                "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2",
                            }),
                            s.jsx(r2, {
                              isAbsolutelyPositioned: !0,
                              children: s.jsx("ul", {
                                className:
                                  "hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex",
                                children: Rf.map((t, n) =>
                                  s.jsx(
                                    "li",
                                    {
                                      className: "p-5",
                                      children: s.jsx("img", {
                                        src: t,
                                        width: 24,
                                        height: 25,
                                        alt: t,
                                      }),
                                    },
                                    n
                                  )
                                ),
                              }),
                            }),
                            s.jsx(r2, {
                              isAbsolutelyPositioned: !0,
                              children: s.jsx(j3, {
                                className:
                                  "hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex",
                                title: "Code generation",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx(A3, {}),
                  ],
                }),
                s.jsx("div", {
                  className:
                    "absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]",
                  children: s.jsx("img", {
                    src: ef,
                    className: "w-full",
                    width: 1440,
                    height: 1800,
                    alt: "hero",
                  }),
                }),
                s.jsx(E3, {}),
              ],
            }),
            s.jsx(N3, { className: "hidden relative z-10 mt-20 lg:block" }),
          ],
        }),
        s.jsx(S3, {}),
      ],
    });
  },
  T3 = () =>
    s.jsx("div", {
      className: "flex gap-[1rem] max-lg:flex-wrap",
      children: s.jsx("div", {
        className: "hidden"
      })
    }),
  M3 = () =>
    s.jsx("div", {
      className:
        "hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none",
      children: s.jsx("img", {
        className: "w-full",
        src: Aa,
        width: 1480,
        height: 177,
        alt: "Lines",
      }),
    }),
  P3 = () =>
    s.jsx("div", {
      className:
        "hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none",
      children: s.jsx("img", {
        className: "w-full",
        src: Aa,
        width: 1480,
        height: 177,
        alt: "Lines",
      }),
    }),
  R3 = () =>
    s.jsx(_t, {
      className: "overflow-hidden",
      id: "pricing",
      children: s.jsxs("div", {
        className: "container relative z-2",
        children: [
          s.jsxs("div", {
            className: "hidden relative justify-center mb-[6.5rem] lg:flex",
            children: [
              s.jsx("img", {
                src: Id,
                className: "relative z-1",
                width: 255,
                height: 255,
                alt: "Sphere",
              }),
              s.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                children: s.jsx("img", {
                  src: mf,
                  className: "w-full",
                  width: 950,
                  height: 400,
                  alt: "Stars",
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "relative",
            children: [s.jsx(T3, {}), s.jsx(M3, {}), s.jsx(P3, {})],
          }),
          
        ],
      }),
    }),
  O3 = () =>
    s.jsx("div", {
      className:
        "absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none",
      children: s.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2",
        children: s.jsx("img", {
          className: "w-full",
          src: Ca,
          width: 942,
          height: 942,
          alt: "Gradient",
        }),
      }),
    }),
  F3 = () =>
    s.jsx(_t, {
      className: "overflow-hidden",
      id: "roadmap",
      children: s.jsxs("div", {
        className: "container md:pb-10",
        children: [
          s.jsx(Jl, {
            tag: "Ready to get started",
            title: "What we’re working on",
          }),
          s.jsxs("div", {
            className:
              "relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]",
            children: [
              If.map((e) => {
                const t = e.status === "done" ? "Done" : "In progress";
                return s.jsx(
                  "div",
                  {
                    className: `md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      e.colorful ? "bg-conic-gradient" : "bg-n-6"
                    }`,
                    children: s.jsxs("div", {
                      className:
                        "relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15",
                      children: [
                        s.jsx("div", {
                          className: "absolute top-0 left-0 max-w-full",
                          children: s.jsx("img", {
                            className: "w-full",
                            src: Dd,
                            width: 550,
                            height: 550,
                            alt: "Grid",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "relative z-1",
                          children: [
                            s.jsxs("div", {
                              className:
                                "flex items-center justify-between max-w-[27rem] mb-8 md:mb-20",
                              children: [
                                s.jsx(ka, { children: e.date }),
                                s.jsxs("div", {
                                  className:
                                    "flex items-center px-4 py-1 bg-n-1 rounded text-n-8",
                                  children: [
                                    s.jsx("img", {
                                      className: "mr-2.5",
                                      src: e.status === "done" ? Bd : Vd,
                                      width: 16,
                                      height: 16,
                                      alt: t,
                                    }),
                                    s.jsx("div", {
                                      className: "tagline",
                                      children: t,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "mb-10 -my-10 -mx-15",
                              children: s.jsx("img", {
                                className: "w-full",
                                src: e.imageUrl,
                                width: 628,
                                height: 426,
                                alt: e.title,
                              }),
                            }),
                            s.jsx("h4", {
                              className: "h4 mb-4",
                              children: e.title,
                            }),
                            s.jsx("p", {
                              className: "body-2 text-n-4",
                              children: e.text,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.id
                );
              }),
              s.jsx(O3, {}),
            ],
          }),
          
        ],
      }),
    }),
  Pa = ({ className: e, pathClassName: t }) =>
    s.jsx("svg", {
      className: `${e || ""}`,
      xmlns: "http://www.w3.org/2000/svg",
      width: "26",
      height: "37",
      children: s.jsx("path", {
        className: `${t || ""}`,
        d: "M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z",
      }),
    }),
  z3 = () =>
    s.jsx("div", {
      className:
        "absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none",
      children: s.jsx("img", {
        className:
          "absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2",
        src: Ca,
        width: 1417,
        height: 1417,
        alt: "Gradient",
      }),
    }),
  U3 = () =>
    s.jsxs("div", {
      className:
        "absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]",
      children: [
        "Hey Synapse AI, enhance this photo",
        s.jsx(Pa, { className: "absolute left-full bottom-0" }),
      ],
    }),
  I3 = () =>
    s.jsxs("div", {
      className:
        "absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]",
      children: [
        "Video generated!",
        s.jsx("div", {
          className:
            "absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]",
          children: s.jsx("img", {
            src: zd,
            width: 26,
            height: 26,
            alt: "Synapse AI",
          }),
        }),
        s.jsx("p", {
          className:
            "tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase",
          children: "just now",
        }),
        s.jsx(Pa, {
          className: "absolute right-full bottom-0 -scale-x-100",
          pathClassName: "fill-n-6",
        }),
      ],
    }),
  D3 = () =>
    s.jsxs("div", {
      className: "absolute left-0 bottom-0 w-full flex items-center p-6",
      children: [
        
      ],
    }),
  B3 = () =>
    s.jsx(_t, {
      id: "how-to-use",
      children: s.jsxs("div", {
        className: "container",
        children: [
          s.jsx(Jl, {
            title: "Generative AI made for creators.",
            text: "Synapse AI unlocks the potential of AI-powered applications",
          }),
          s.jsxs("div", {
            className: "relative",
            children: [
              s.jsxs("div", {
                className:
                  "relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]",
                children: [
                  s.jsx("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto",
                    children: s.jsx("img", {
                      className: "w-full h-full object-cover md:object-right",
                      width: 800,
                      alt: "Smartest AI",
                      height: 730,
                      src: ff,
                    }),
                  }),
                  s.jsxs("div", {
                    className: "relative z-1 max-w-[17rem] ml-auto",
                    children: [
                      s.jsx("h4", {
                        className: "h4 mb-4",
                        children: "Smartest AI",
                      }),
                      s.jsx("p", {
                        className: "body-2 mb-[3rem] text-n-3",
                        children:
                          "Synapse AI unlocks the potential of AI-powered applications",
                      }),
                      s.jsx("ul", {
                        className: "body-2",
                        children: zf.map((e, t) =>
                          s.jsxs(
                            "li",
                            {
                              className:
                                "flex items-start py-4 border-t border-n-6",
                              children: [
                                s.jsx("img", {
                                  width: 24,
                                  height: 24,
                                  src: E0,
                                }),
                                s.jsx("p", { className: "ml-4", children: e }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  s.jsx(Ma, {
                    className:
                      "absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "relative z-1 grid gap-5 lg:grid-cols-2",
                children: [
                  s.jsxs("div", {
                    className:
                      "relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden",
                    children: [
                      s.jsx("div", {
                        className: "absolute inset-0",
                        children: s.jsx("img", {
                          src: pf,
                          className: "h-full w-full object-cover",
                          width: 630,
                          height: 750,
                          alt: "robot",
                        }),
                      }),
                      s.jsxs("div", {
                        className:
                          "absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15",
                        children: [
                          s.jsx("h4", {
                            className: "h4 mb-4",
                            children: "Photo editing",
                          }),
                          s.jsx("p", {
                            className: "body-2 mb-[3rem] text-n-3",
                            children:
                              "Automatically enhance your photos using our AI app's photo editing feature. Try it now!",
                          }),
                        ],
                      }),
                      s.jsx(U3, {}),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]",
                    children: [
                      s.jsxs("div", {
                        className: "py-12 px-4 xl:px-8",
                        children: [
                          s.jsx("h4", {
                            className: "h4 mb-4",
                            children: "Video generation",
                          }),
                          s.jsx("p", {
                            className: "body-2 mb-[2rem] text-n-3",
                            children:
                              "The world’s most powerful AI photo and video art generation engine. What will you create?",
                          }),
                          s.jsx("ul", {
                            className: "flex items-center justify-between",
                            children: Uf.map((e, t) =>
                              s.jsx(
                                "li",
                                {
                                  className: `rounded-2xl flex items-center justify-center ${
                                    t === 2
                                      ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                      : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                  }`,
                                  children: s.jsx("div", {
                                    className:
                                      t === 2
                                        ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                        : "",
                                    children: s.jsx("img", {
                                      src: e,
                                      width: 24,
                                      height: 24,
                                      alt: e,
                                    }),
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]",
                        children: [
                          s.jsx("img", {
                            src: hf,
                            className: "w-full h-full object-cover",
                            width: 520,
                            height: 400,
                            alt: "Scary robot",
                          }),
                          s.jsx(I3, {}),
                          s.jsx(D3, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx(z3, {}),
            ],
          }),
        ],
      }),
    }),
  V3 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden",
          children: [
            s.jsx(r3, {}),
            s.jsx(L3, {}),
            s.jsx(Yf, {}),
            s.jsx(Xf, {}),
            s.jsx(B3, {}),
            s.jsx(R3, {}),
            s.jsx(F3, {}),
            s.jsx(qf, {}),
          ],
        }),
        s.jsx(Rd, {}),
      ],
    });
Mi.createRoot(document.getElementById("root")).render(
  s.jsx(tt.StrictMode, { children: s.jsx(Pd, { children: s.jsx(V3, {}) }) })
);
