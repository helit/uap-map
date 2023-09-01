function Df(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != 'string' && !Array.isArray(r)) {
            for (const o in r)
                if (o !== 'default' && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    );
}
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === 'childList')
                for (const a of i.addedNodes)
                    a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === 'use-credentials'
                ? (i.credentials = 'include')
                : o.crossOrigin === 'anonymous'
                ? (i.credentials = 'omit')
                : (i.credentials = 'same-origin'),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
var Qy =
    typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {};
function Bf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e;
}
var Io = {},
    Wf = {
        get exports() {
            return Io;
        },
        set exports(e) {
            Io = e;
        },
    },
    di = {},
    C = {},
    Hf = {
        get exports() {
            return C;
        },
        set exports(e) {
            C = e;
        },
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for('react.element'),
    Vf = Symbol.for('react.portal'),
    Kf = Symbol.for('react.fragment'),
    Gf = Symbol.for('react.strict_mode'),
    Qf = Symbol.for('react.profiler'),
    Yf = Symbol.for('react.provider'),
    Jf = Symbol.for('react.context'),
    Zf = Symbol.for('react.forward_ref'),
    Xf = Symbol.for('react.suspense'),
    qf = Symbol.for('react.memo'),
    ep = Symbol.for('react.lazy'),
    xs = Symbol.iterator;
function tp(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (xs && e[xs]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var uc = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    cc = Object.assign,
    dc = {};
function Kn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = dc),
        (this.updater = n || uc);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
Kn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function fc() {}
fc.prototype = Kn.prototype;
function vl(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = dc),
        (this.updater = n || uc);
}
var wl = (vl.prototype = new fc());
wl.constructor = vl;
cc(wl, Kn.prototype);
wl.isPureReactComponent = !0;
var Cs = Array.isArray,
    pc = Object.prototype.hasOwnProperty,
    Sl = { current: null },
    hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function mc(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = '' + t.key),
        t))
            pc.call(t, r) && !hc.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
        o.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Hr,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Sl.current,
    };
}
function np(e, t) {
    return {
        $$typeof: Hr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function kl(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Hr;
}
function rp(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Es = /\/+/g;
function Ki(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? rp('' + e.key)
        : t.toString(36);
}
function xo(e, t, n, r, o) {
    var i = typeof e;
    (i === 'undefined' || i === 'boolean') && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
        switch (i) {
            case 'string':
            case 'number':
                a = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case Hr:
                    case Vf:
                        a = !0;
                }
        }
    if (a)
        return (
            (a = e),
            (o = o(a)),
            (e = r === '' ? '.' + Ki(a, 0) : r),
            Cs(o)
                ? ((n = ''),
                  e != null && (n = e.replace(Es, '$&/') + '/'),
                  xo(o, t, n, '', function (u) {
                      return u;
                  }))
                : o != null &&
                  (kl(o) &&
                      (o = np(
                          o,
                          n +
                              (!o.key || (a && a.key === o.key)
                                  ? ''
                                  : ('' + o.key).replace(Es, '$&/') + '/') +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((a = 0), (r = r === '' ? '.' : r + ':'), Cs(e)))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var s = r + Ki(i, l);
            a += xo(i, t, n, s, o);
        }
    else if (((s = tp(e)), typeof s == 'function'))
        for (e = s.call(e), l = 0; !(i = e.next()).done; )
            (i = i.value), (s = r + Ki(i, l++)), (a += xo(i, t, n, s, o));
    else if (i === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return a;
}
function ro(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        xo(e, r, '', '', function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function op(e) {
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
var Se = { current: null },
    Co = { transition: null },
    ip = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Co,
        ReactCurrentOwner: Sl,
    };
L.Children = {
    map: ro,
    forEach: function (e, t, n) {
        ro(
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
            ro(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            ro(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!kl(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            );
        return e;
    },
};
L.Component = Kn;
L.Fragment = Kf;
L.Profiler = Qf;
L.PureComponent = vl;
L.StrictMode = Gf;
L.Suspense = Xf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
L.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        );
    var r = cc({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (a = Sl.current)),
            t.key !== void 0 && (o = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (s in t)
            pc.call(t, s) &&
                !hc.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        l = Array(s);
        for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
        r.children = l;
    }
    return { $$typeof: Hr, type: e.type, key: o, ref: i, props: r, _owner: a };
};
L.createContext = function (e) {
    return (
        (e = {
            $$typeof: Jf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Yf, _context: e }),
        (e.Consumer = e)
    );
};
L.createElement = mc;
L.createFactory = function (e) {
    var t = mc.bind(null, e);
    return (t.type = e), t;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (e) {
    return { $$typeof: Zf, render: e };
};
L.isValidElement = kl;
L.lazy = function (e) {
    return { $$typeof: ep, _payload: { _status: -1, _result: e }, _init: op };
};
L.memo = function (e, t) {
    return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
    var t = Co.transition;
    Co.transition = {};
    try {
        e();
    } finally {
        Co.transition = t;
    }
};
L.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
L.useCallback = function (e, t) {
    return Se.current.useCallback(e, t);
};
L.useContext = function (e) {
    return Se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
    return Se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
    return Se.current.useEffect(e, t);
};
L.useId = function () {
    return Se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
    return Se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
    return Se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
    return Se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
    return Se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
    return Se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
    return Se.current.useRef(e);
};
L.useState = function (e) {
    return Se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
    return Se.current.useTransition();
};
L.version = '18.2.0';
(function (e) {
    e.exports = L;
})(Hf);
const gc = Bf(C),
    _s = Df({ __proto__: null, default: gc }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = C,
    lp = Symbol.for('react.element'),
    sp = Symbol.for('react.fragment'),
    up = Object.prototype.hasOwnProperty,
    cp =
        ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function yc(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    n !== void 0 && (i = '' + n),
        t.key !== void 0 && (i = '' + t.key),
        t.ref !== void 0 && (a = t.ref);
    for (r in t) up.call(t, r) && !dp.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: lp,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: cp.current,
    };
}
di.Fragment = sp;
di.jsx = yc;
di.jsxs = yc;
(function (e) {
    e.exports = di;
})(Wf);
const R = Io.jsx,
    Yt = Io.jsxs;
var ka = {},
    xr = {},
    fp = {
        get exports() {
            return xr;
        },
        set exports(e) {
            xr = e;
        },
    },
    Fe = {},
    xa = {},
    pp = {
        get exports() {
            return xa;
        },
        set exports(e) {
            xa = e;
        },
    },
    vc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, z) {
        var F = P.length;
        P.push(z);
        e: for (; 0 < F; ) {
            var X = (F - 1) >>> 1,
                ie = P[X];
            if (0 < o(ie, z)) (P[X] = z), (P[F] = ie), (F = X);
            else break e;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function r(P) {
        if (P.length === 0) return null;
        var z = P[0],
            F = P.pop();
        if (F !== z) {
            P[0] = F;
            e: for (var X = 0, ie = P.length, to = ie >>> 1; X < to; ) {
                var Dt = 2 * (X + 1) - 1,
                    Vi = P[Dt],
                    Bt = Dt + 1,
                    no = P[Bt];
                if (0 > o(Vi, F))
                    Bt < ie && 0 > o(no, Vi)
                        ? ((P[X] = no), (P[Bt] = F), (X = Bt))
                        : ((P[X] = Vi), (P[Dt] = F), (X = Dt));
                else if (Bt < ie && 0 > o(no, F))
                    (P[X] = no), (P[Bt] = F), (X = Bt);
                else break e;
            }
        }
        return z;
    }
    function o(P, z) {
        var F = P.sortIndex - z.sortIndex;
        return F !== 0 ? F : P.id - z.id;
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function () {
            return a.now() - l;
        };
    }
    var s = [],
        u = [],
        f = 1,
        m = null,
        p = 3,
        v = !1,
        y = !1,
        g = !1,
        _ = typeof setTimeout == 'function' ? setTimeout : null,
        d = typeof clearTimeout == 'function' ? clearTimeout : null,
        c = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(P) {
        for (var z = n(u); z !== null; ) {
            if (z.callback === null) r(u);
            else if (z.startTime <= P)
                r(u), (z.sortIndex = z.expirationTime), t(s, z);
            else break;
            z = n(u);
        }
    }
    function w(P) {
        if (((g = !1), h(P), !y))
            if (n(s) !== null) (y = !0), Wi(S);
            else {
                var z = n(u);
                z !== null && Hi(w, z.startTime - P);
            }
    }
    function S(P, z) {
        (y = !1), g && ((g = !1), d(A), (A = -1)), (v = !0);
        var F = p;
        try {
            for (
                h(z), m = n(s);
                m !== null && (!(m.expirationTime > z) || (P && !ne()));

            ) {
                var X = m.callback;
                if (typeof X == 'function') {
                    (m.callback = null), (p = m.priorityLevel);
                    var ie = X(m.expirationTime <= z);
                    (z = e.unstable_now()),
                        typeof ie == 'function'
                            ? (m.callback = ie)
                            : m === n(s) && r(s),
                        h(z);
                } else r(s);
                m = n(s);
            }
            if (m !== null) var to = !0;
            else {
                var Dt = n(u);
                Dt !== null && Hi(w, Dt.startTime - z), (to = !1);
            }
            return to;
        } finally {
            (m = null), (p = F), (v = !1);
        }
    }
    var E = !1,
        x = null,
        A = -1,
        M = 5,
        O = -1;
    function ne() {
        return !(e.unstable_now() - O < M);
    }
    function Ze() {
        if (x !== null) {
            var P = e.unstable_now();
            O = P;
            var z = !0;
            try {
                z = x(!0, P);
            } finally {
                z ? jt() : ((E = !1), (x = null));
            }
        } else E = !1;
    }
    var jt;
    if (typeof c == 'function')
        jt = function () {
            c(Ze);
        };
    else if (typeof MessageChannel < 'u') {
        var un = new MessageChannel(),
            jf = un.port2;
        (un.port1.onmessage = Ze),
            (jt = function () {
                jf.postMessage(null);
            });
    } else
        jt = function () {
            _(Ze, 0);
        };
    function Wi(P) {
        (x = P), E || ((E = !0), jt());
    }
    function Hi(P, z) {
        A = _(function () {
            P(e.unstable_now());
        }, z);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || v || ((y = !0), Wi(S));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (M = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (P) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = p;
            }
            var F = p;
            p = z;
            try {
                return P();
            } finally {
                p = F;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, z) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var F = p;
            p = P;
            try {
                return z();
            } finally {
                p = F;
            }
        }),
        (e.unstable_scheduleCallback = function (P, z, F) {
            var X = e.unstable_now();
            switch (
                (typeof F == 'object' && F !== null
                    ? ((F = F.delay),
                      (F = typeof F == 'number' && 0 < F ? X + F : X))
                    : (F = X),
                P)
            ) {
                case 1:
                    var ie = -1;
                    break;
                case 2:
                    ie = 250;
                    break;
                case 5:
                    ie = 1073741823;
                    break;
                case 4:
                    ie = 1e4;
                    break;
                default:
                    ie = 5e3;
            }
            return (
                (ie = F + ie),
                (P = {
                    id: f++,
                    callback: z,
                    priorityLevel: P,
                    startTime: F,
                    expirationTime: ie,
                    sortIndex: -1,
                }),
                F > X
                    ? ((P.sortIndex = F),
                      t(u, P),
                      n(s) === null &&
                          P === n(u) &&
                          (g ? (d(A), (A = -1)) : (g = !0), Hi(w, F - X)))
                    : ((P.sortIndex = ie),
                      t(s, P),
                      y || v || ((y = !0), Wi(S))),
                P
            );
        }),
        (e.unstable_shouldYield = ne),
        (e.unstable_wrapCallback = function (P) {
            var z = p;
            return function () {
                var F = p;
                p = z;
                try {
                    return P.apply(this, arguments);
                } finally {
                    p = F;
                }
            };
        });
})(vc);
(function (e) {
    e.exports = vc;
})(pp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wc = C,
    ze = xa;
function k(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var Sc = new Set(),
    Cr = {};
function on(e, t) {
    Nn(e, t), Nn(e + 'Capture', t);
}
function Nn(e, t) {
    for (Cr[e] = t, e = 0; e < t.length; e++) Sc.add(t[e]);
}
var ht = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Ca = Object.prototype.hasOwnProperty,
    hp =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ts = {},
    Ps = {};
function mp(e) {
    return Ca.call(Ps, e)
        ? !0
        : Ca.call(Ts, e)
        ? !1
        : hp.test(e)
        ? (Ps[e] = !0)
        : ((Ts[e] = !0), !1);
}
function gp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function yp(e, t, n, r) {
    if (t === null || typeof t > 'u' || gp(e, t, n, r)) return !0;
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
function ke(e, t, n, r, o, i, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = a);
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        de[e] = new ke(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    de[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    de[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    de[e] = new ke(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        de[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    de[e] = new ke(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    de[e] = new ke(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    de[e] = new ke(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    de[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xl = /[\-:]([a-z])/g;
function Cl(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xl, Cl);
        de[t] = new ke(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xl, Cl);
        de[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(xl, Cl);
    de[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new ke(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function El(e, t, n, r) {
    var o = de.hasOwnProperty(t) ? de[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (yp(t, n, o, r) && (n = null),
        r || o === null
            ? mp(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    oo = Symbol.for('react.element'),
    gn = Symbol.for('react.portal'),
    yn = Symbol.for('react.fragment'),
    _l = Symbol.for('react.strict_mode'),
    Ea = Symbol.for('react.profiler'),
    kc = Symbol.for('react.provider'),
    xc = Symbol.for('react.context'),
    Tl = Symbol.for('react.forward_ref'),
    _a = Symbol.for('react.suspense'),
    Ta = Symbol.for('react.suspense_list'),
    Pl = Symbol.for('react.memo'),
    kt = Symbol.for('react.lazy'),
    Cc = Symbol.for('react.offscreen'),
    As = Symbol.iterator;
function Jn(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (As && e[As]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var Q = Object.assign,
    Gi;
function lr(e) {
    if (Gi === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Gi = (t && t[1]) || '';
        }
    return (
        `
` +
        Gi +
        e
    );
}
var Qi = !1;
function Yi(e, t) {
    if (!e || Qi) return '';
    Qi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == 'string') {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    a = o.length - 1,
                    l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

            )
                l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if ((a--, l--, 0 > l || o[a] !== i[l])) {
                                var s =
                                    `
` + o[a].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace(
                                            '<anonymous>',
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= a && 0 <= l);
                    break;
                }
        }
    } finally {
        (Qi = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? lr(e) : '';
}
function vp(e) {
    switch (e.tag) {
        case 5:
            return lr(e.type);
        case 16:
            return lr('Lazy');
        case 13:
            return lr('Suspense');
        case 19:
            return lr('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Yi(e.type, !1)), e;
        case 11:
            return (e = Yi(e.type.render, !1)), e;
        case 1:
            return (e = Yi(e.type, !0)), e;
        default:
            return '';
    }
}
function Pa(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case yn:
            return 'Fragment';
        case gn:
            return 'Portal';
        case Ea:
            return 'Profiler';
        case _l:
            return 'StrictMode';
        case _a:
            return 'Suspense';
        case Ta:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case xc:
                return (e.displayName || 'Context') + '.Consumer';
            case kc:
                return (e._context.displayName || 'Context') + '.Provider';
            case Tl:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case Pl:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Pa(e.type) || 'Memo'
                );
            case kt:
                (t = e._payload), (e = e._init);
                try {
                    return Pa(e(t));
                } catch {}
        }
    return null;
}
function wp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName ||
                    (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Pa(t);
        case 8:
            return t === _l ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function Lt(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function Ec(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    );
}
function Sp(e) {
    var t = Ec(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (a) {
                    (r = '' + a), i.call(this, a);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (a) {
                    r = '' + a;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function io(e) {
    e._valueTracker || (e._valueTracker = Sp(e));
}
function _c(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (
        e && (r = Ec(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function $o(e) {
    if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Aa(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Os(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Lt(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        });
}
function Tc(e, t) {
    (t = t.checked), t != null && El(e, 'checked', t, !1);
}
function Oa(e, t) {
    Tc(e, t);
    var n = Lt(t.value),
        r = t.type;
    if (n != null)
        r === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value')
        ? ba(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && ba(e, t.type, Lt(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function bs(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n);
}
function ba(e, t, n) {
    (t !== 'number' || $o(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var sr = Array.isArray;
function An(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + Lt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ma(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function Ms(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(k(92));
            if (sr(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: Lt(n) };
}
function Pc(e, t) {
    var n = Lt(t.value),
        r = Lt(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r);
}
function Rs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t);
}
function Ac(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Ra(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? Ac(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
}
var ao,
    Oc = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t;
        else {
            for (
                ao = ao || document.createElement('div'),
                    ao.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ao.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Er(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var fr = {
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
    kp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fr).forEach(function (e) {
    kp.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
    });
});
function bc(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
          typeof t != 'number' ||
          t === 0 ||
          (fr.hasOwnProperty(e) && fr[e])
        ? ('' + t).trim()
        : t + 'px';
}
function Mc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                o = bc(n, t[n], r);
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var xp = Q(
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
function za(e, t) {
    if (t) {
        if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(k(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(k(62));
    }
}
function Fa(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var La = null;
function Al(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Na = null,
    On = null,
    bn = null;
function zs(e) {
    if ((e = Gr(e))) {
        if (typeof Na != 'function') throw Error(k(280));
        var t = e.stateNode;
        t && ((t = gi(t)), Na(e.stateNode, e.type, t));
    }
}
function Rc(e) {
    On ? (bn ? bn.push(e) : (bn = [e])) : (On = e);
}
function zc() {
    if (On) {
        var e = On,
            t = bn;
        if (((bn = On = null), zs(e), t))
            for (e = 0; e < t.length; e++) zs(t[e]);
    }
}
function Fc(e, t) {
    return e(t);
}
function Lc() {}
var Ji = !1;
function Nc(e, t, n) {
    if (Ji) return e(t, n);
    Ji = !0;
    try {
        return Fc(e, t, n);
    } finally {
        (Ji = !1), (On !== null || bn !== null) && (Lc(), zc());
    }
}
function _r(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = gi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
    return n;
}
var Ua = !1;
if (ht)
    try {
        var Zn = {};
        Object.defineProperty(Zn, 'passive', {
            get: function () {
                Ua = !0;
            },
        }),
            window.addEventListener('test', Zn, Zn),
            window.removeEventListener('test', Zn, Zn);
    } catch {
        Ua = !1;
    }
function Cp(e, t, n, r, o, i, a, l, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (f) {
        this.onError(f);
    }
}
var pr = !1,
    jo = null,
    Do = !1,
    Ia = null,
    Ep = {
        onError: function (e) {
            (pr = !0), (jo = e);
        },
    };
function _p(e, t, n, r, o, i, a, l, s) {
    (pr = !1), (jo = null), Cp.apply(Ep, arguments);
}
function Tp(e, t, n, r, o, i, a, l, s) {
    if ((_p.apply(this, arguments), pr)) {
        if (pr) {
            var u = jo;
            (pr = !1), (jo = null);
        } else throw Error(k(198));
        Do || ((Do = !0), (Ia = u));
    }
}
function an(e) {
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
function Uc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Fs(e) {
    if (an(e) !== e) throw Error(k(188));
}
function Pp(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = an(e)), t === null)) throw Error(k(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return Fs(o), e;
                if (i === r) return Fs(o), t;
                i = i.sibling;
            }
            throw Error(k(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var a = !1, l = o.child; l; ) {
                if (l === n) {
                    (a = !0), (n = o), (r = i);
                    break;
                }
                if (l === r) {
                    (a = !0), (r = o), (n = i);
                    break;
                }
                l = l.sibling;
            }
            if (!a) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        (a = !0), (n = i), (r = o);
                        break;
                    }
                    if (l === r) {
                        (a = !0), (r = i), (n = o);
                        break;
                    }
                    l = l.sibling;
                }
                if (!a) throw Error(k(189));
            }
        }
        if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
}
function Ic(e) {
    return (e = Pp(e)), e !== null ? $c(e) : null;
}
function $c(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = $c(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var jc = ze.unstable_scheduleCallback,
    Ls = ze.unstable_cancelCallback,
    Ap = ze.unstable_shouldYield,
    Op = ze.unstable_requestPaint,
    q = ze.unstable_now,
    bp = ze.unstable_getCurrentPriorityLevel,
    Ol = ze.unstable_ImmediatePriority,
    Dc = ze.unstable_UserBlockingPriority,
    Bo = ze.unstable_NormalPriority,
    Mp = ze.unstable_LowPriority,
    Bc = ze.unstable_IdlePriority,
    fi = null,
    ot = null;
function Rp(e) {
    if (ot && typeof ot.onCommitFiberRoot == 'function')
        try {
            ot.onCommitFiberRoot(
                fi,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Lp,
    zp = Math.log,
    Fp = Math.LN2;
function Lp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((zp(e) / Fp) | 0)) | 0;
}
var lo = 64,
    so = 4194304;
function ur(e) {
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
function Wo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var l = a & ~o;
        l !== 0 ? (r = ur(l)) : ((i &= a), i !== 0 && (r = ur(i)));
    } else (a = n & ~o), a !== 0 ? (r = ur(a)) : i !== 0 && (r = ur(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ge(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Np(e, t) {
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
function Up(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var a = 31 - Ge(i),
            l = 1 << a,
            s = o[a];
        s === -1
            ? (!(l & n) || l & r) && (o[a] = Np(l, t))
            : s <= t && (e.expiredLanes |= l),
            (i &= ~l);
    }
}
function $a(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Wc() {
    var e = lo;
    return (lo <<= 1), !(lo & 4194240) && (lo = 64), e;
}
function Zi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Vr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ge(t)),
        (e[t] = n);
}
function Ip(e, t) {
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
        var o = 31 - Ge(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function bl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var j = 0;
function Hc(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Vc,
    Ml,
    Kc,
    Gc,
    Qc,
    ja = !1,
    uo = [],
    Pt = null,
    At = null,
    Ot = null,
    Tr = new Map(),
    Pr = new Map(),
    Ct = [],
    $p =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Ns(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Pt = null;
            break;
        case 'dragenter':
        case 'dragleave':
            At = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Ot = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Tr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Pr.delete(t.pointerId);
    }
}
function Xn(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = Gr(t)), t !== null && Ml(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function jp(e, t, n, r, o) {
    switch (t) {
        case 'focusin':
            return (Pt = Xn(Pt, e, t, n, r, o)), !0;
        case 'dragenter':
            return (At = Xn(At, e, t, n, r, o)), !0;
        case 'mouseover':
            return (Ot = Xn(Ot, e, t, n, r, o)), !0;
        case 'pointerover':
            var i = o.pointerId;
            return Tr.set(i, Xn(Tr.get(i) || null, e, t, n, r, o)), !0;
        case 'gotpointercapture':
            return (
                (i = o.pointerId),
                Pr.set(i, Xn(Pr.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function Yc(e) {
    var t = Kt(e.target);
    if (t !== null) {
        var n = an(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Uc(n)), t !== null)) {
                    (e.blockedOn = t),
                        Qc(e.priority, function () {
                            Kc(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Eo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (La = r), n.target.dispatchEvent(r), (La = null);
        } else return (t = Gr(n)), t !== null && Ml(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Us(e, t, n) {
    Eo(e) && n.delete(t);
}
function Dp() {
    (ja = !1),
        Pt !== null && Eo(Pt) && (Pt = null),
        At !== null && Eo(At) && (At = null),
        Ot !== null && Eo(Ot) && (Ot = null),
        Tr.forEach(Us),
        Pr.forEach(Us);
}
function qn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ja ||
            ((ja = !0),
            ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Dp)));
}
function Ar(e) {
    function t(o) {
        return qn(o, e);
    }
    if (0 < uo.length) {
        qn(uo[0], e);
        for (var n = 1; n < uo.length; n++) {
            var r = uo[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Pt !== null && qn(Pt, e),
            At !== null && qn(At, e),
            Ot !== null && qn(Ot, e),
            Tr.forEach(t),
            Pr.forEach(t),
            n = 0;
        n < Ct.length;
        n++
    )
        (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
        Yc(n), n.blockedOn === null && Ct.shift();
}
var Mn = wt.ReactCurrentBatchConfig,
    Ho = !0;
function Bp(e, t, n, r) {
    var o = j,
        i = Mn.transition;
    Mn.transition = null;
    try {
        (j = 1), Rl(e, t, n, r);
    } finally {
        (j = o), (Mn.transition = i);
    }
}
function Wp(e, t, n, r) {
    var o = j,
        i = Mn.transition;
    Mn.transition = null;
    try {
        (j = 4), Rl(e, t, n, r);
    } finally {
        (j = o), (Mn.transition = i);
    }
}
function Rl(e, t, n, r) {
    if (Ho) {
        var o = Da(e, t, n, r);
        if (o === null) la(e, t, r, Vo, n), Ns(e, r);
        else if (jp(o, e, t, n, r)) r.stopPropagation();
        else if ((Ns(e, r), t & 4 && -1 < $p.indexOf(e))) {
            for (; o !== null; ) {
                var i = Gr(o);
                if (
                    (i !== null && Vc(i),
                    (i = Da(e, t, n, r)),
                    i === null && la(e, t, r, Vo, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else la(e, t, r, null, n);
    }
}
var Vo = null;
function Da(e, t, n, r) {
    if (((Vo = null), (e = Al(r)), (e = Kt(e)), e !== null))
        if (((t = an(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Uc(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Vo = e), null;
}
function Jc(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (bp()) {
                case Ol:
                    return 1;
                case Dc:
                    return 4;
                case Bo:
                case Mp:
                    return 16;
                case Bc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var _t = null,
    zl = null,
    _o = null;
function Zc() {
    if (_o) return _o;
    var e,
        t = zl,
        n = t.length,
        r,
        o = 'value' in _t ? _t.value : _t.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return (_o = o.slice(e, 1 < r ? 1 - r : void 0));
}
function To(e) {
    var t = e.keyCode;
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function co() {
    return !0;
}
function Is() {
    return !1;
}
function Le(e) {
    function t(n, r, o, i, a) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null);
        for (var l in e)
            e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? co
                : Is),
            (this.isPropagationStopped = Is),
            this
        );
    }
    return (
        Q(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = co));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = co));
            },
            persist: function () {},
            isPersistent: co,
        }),
        t
    );
}
var Gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Fl = Le(Gn),
    Kr = Q({}, Gn, { view: 0, detail: 0 }),
    Hp = Le(Kr),
    Xi,
    qi,
    er,
    pi = Q({}, Kr, {
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
        getModifierState: Ll,
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
            return 'movementX' in e
                ? e.movementX
                : (e !== er &&
                      (er && e.type === 'mousemove'
                          ? ((Xi = e.screenX - er.screenX),
                            (qi = e.screenY - er.screenY))
                          : (qi = Xi = 0),
                      (er = e)),
                  Xi);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : qi;
        },
    }),
    $s = Le(pi),
    Vp = Q({}, pi, { dataTransfer: 0 }),
    Kp = Le(Vp),
    Gp = Q({}, Kr, { relatedTarget: 0 }),
    ea = Le(Gp),
    Qp = Q({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yp = Le(Qp),
    Jp = Q({}, Gn, {
        clipboardData: function (e) {
            return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Zp = Le(Jp),
    Xp = Q({}, Gn, { data: 0 }),
    js = Le(Xp),
    qp = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    eh = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    th = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };
function nh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = th[e])
        ? !!t[e]
        : !1;
}
function Ll() {
    return nh;
}
var rh = Q({}, Kr, {
        key: function (e) {
            if (e.key) {
                var t = qp[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = To(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? eh[e.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ll,
        charCode: function (e) {
            return e.type === 'keypress' ? To(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? To(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0;
        },
    }),
    oh = Le(rh),
    ih = Q({}, pi, {
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
    Ds = Le(ih),
    ah = Q({}, Kr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ll,
    }),
    lh = Le(ah),
    sh = Q({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uh = Le(sh),
    ch = Q({}, pi, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    dh = Le(ch),
    fh = [9, 13, 27, 32],
    Nl = ht && 'CompositionEvent' in window,
    hr = null;
ht && 'documentMode' in document && (hr = document.documentMode);
var ph = ht && 'TextEvent' in window && !hr,
    Xc = ht && (!Nl || (hr && 8 < hr && 11 >= hr)),
    Bs = String.fromCharCode(32),
    Ws = !1;
function qc(e, t) {
    switch (e) {
        case 'keyup':
            return fh.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function ed(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var vn = !1;
function hh(e, t) {
    switch (e) {
        case 'compositionend':
            return ed(t);
        case 'keypress':
            return t.which !== 32 ? null : ((Ws = !0), Bs);
        case 'textInput':
            return (e = t.data), e === Bs && Ws ? null : e;
        default:
            return null;
    }
}
function mh(e, t) {
    if (vn)
        return e === 'compositionend' || (!Nl && qc(e, t))
            ? ((e = Zc()), (_o = zl = _t = null), (vn = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return Xc && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var gh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
function Hs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!gh[e.type] : t === 'textarea';
}
function td(e, t, n, r) {
    Rc(r),
        (t = Ko(t, 'onChange')),
        0 < t.length &&
            ((n = new Fl('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }));
}
var mr = null,
    Or = null;
function yh(e) {
    fd(e, 0);
}
function hi(e) {
    var t = kn(e);
    if (_c(t)) return e;
}
function vh(e, t) {
    if (e === 'change') return t;
}
var nd = !1;
if (ht) {
    var ta;
    if (ht) {
        var na = 'oninput' in document;
        if (!na) {
            var Vs = document.createElement('div');
            Vs.setAttribute('oninput', 'return;'),
                (na = typeof Vs.oninput == 'function');
        }
        ta = na;
    } else ta = !1;
    nd = ta && (!document.documentMode || 9 < document.documentMode);
}
function Ks() {
    mr && (mr.detachEvent('onpropertychange', rd), (Or = mr = null));
}
function rd(e) {
    if (e.propertyName === 'value' && hi(Or)) {
        var t = [];
        td(t, Or, e, Al(e)), Nc(yh, t);
    }
}
function wh(e, t, n) {
    e === 'focusin'
        ? (Ks(), (mr = t), (Or = n), mr.attachEvent('onpropertychange', rd))
        : e === 'focusout' && Ks();
}
function Sh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return hi(Or);
}
function kh(e, t) {
    if (e === 'click') return hi(t);
}
function xh(e, t) {
    if (e === 'input' || e === 'change') return hi(t);
}
function Ch(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == 'function' ? Object.is : Ch;
function br(e, t) {
    if (Je(e, t)) return !0;
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ca.call(t, o) || !Je(e[o], t[o])) return !1;
    }
    return !0;
}
function Gs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Qs(e, t) {
    var n = Gs(e);
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
        n = Gs(n);
    }
}
function od(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? od(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function id() {
    for (var e = window, t = $o(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = $o(e.document);
    }
    return t;
}
function Ul(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function Eh(e) {
    var t = id(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        od(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Ul(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Qs(n, i));
                var a = Qs(n, r);
                o &&
                    a &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== a.node ||
                        e.focusOffset !== a.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(a.node, a.offset))
                        : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var _h = ht && 'documentMode' in document && 11 >= document.documentMode,
    wn = null,
    Ba = null,
    gr = null,
    Wa = !1;
function Ys(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wa ||
        wn == null ||
        wn !== $o(r) ||
        ((r = wn),
        'selectionStart' in r && Ul(r)
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
        (gr && br(gr, r)) ||
            ((gr = r),
            (r = Ko(Ba, 'onSelect')),
            0 < r.length &&
                ((t = new Fl('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = wn))));
}
function fo(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var Sn = {
        animationend: fo('Animation', 'AnimationEnd'),
        animationiteration: fo('Animation', 'AnimationIteration'),
        animationstart: fo('Animation', 'AnimationStart'),
        transitionend: fo('Transition', 'TransitionEnd'),
    },
    ra = {},
    ad = {};
ht &&
    ((ad = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Sn.animationend.animation,
        delete Sn.animationiteration.animation,
        delete Sn.animationstart.animation),
    'TransitionEvent' in window || delete Sn.transitionend.transition);
function mi(e) {
    if (ra[e]) return ra[e];
    if (!Sn[e]) return e;
    var t = Sn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in ad) return (ra[e] = t[n]);
    return e;
}
var ld = mi('animationend'),
    sd = mi('animationiteration'),
    ud = mi('animationstart'),
    cd = mi('transitionend'),
    dd = new Map(),
    Js =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function Ut(e, t) {
    dd.set(e, t), on(t, [e]);
}
for (var oa = 0; oa < Js.length; oa++) {
    var ia = Js[oa],
        Th = ia.toLowerCase(),
        Ph = ia[0].toUpperCase() + ia.slice(1);
    Ut(Th, 'on' + Ph);
}
Ut(ld, 'onAnimationEnd');
Ut(sd, 'onAnimationIteration');
Ut(ud, 'onAnimationStart');
Ut('dblclick', 'onDoubleClick');
Ut('focusin', 'onFocus');
Ut('focusout', 'onBlur');
Ut(cd, 'onTransitionEnd');
Nn('onMouseEnter', ['mouseout', 'mouseover']);
Nn('onMouseLeave', ['mouseout', 'mouseover']);
Nn('onPointerEnter', ['pointerout', 'pointerover']);
Nn('onPointerLeave', ['pointerout', 'pointerover']);
on(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
);
on(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
on('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
on(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
on(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
on(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var cr =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    Ah = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(cr)
    );
function Zs(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), Tp(r, t, void 0, e), (e.currentTarget = null);
}
function fd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a],
                        s = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), s !== i && o.isPropagationStopped()))
                        break e;
                    Zs(o, l, u), (i = s);
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (
                        ((l = r[a]),
                        (s = l.instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        s !== i && o.isPropagationStopped())
                    )
                        break e;
                    Zs(o, l, u), (i = s);
                }
        }
    }
    if (Do) throw ((e = Ia), (Do = !1), (Ia = null), e);
}
function B(e, t) {
    var n = t[Qa];
    n === void 0 && (n = t[Qa] = new Set());
    var r = e + '__bubble';
    n.has(r) || (pd(t, e, 2, !1), n.add(r));
}
function aa(e, t, n) {
    var r = 0;
    t && (r |= 4), pd(n, e, r, t);
}
var po = '_reactListening' + Math.random().toString(36).slice(2);
function Mr(e) {
    if (!e[po]) {
        (e[po] = !0),
            Sc.forEach(function (n) {
                n !== 'selectionchange' &&
                    (Ah.has(n) || aa(n, !1, e), aa(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[po] || ((t[po] = !0), aa('selectionchange', !1, t));
    }
}
function pd(e, t, n, r) {
    switch (Jc(t)) {
        case 1:
            var o = Bp;
            break;
        case 4:
            o = Wp;
            break;
        default:
            o = Rl;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Ua ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function la(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var s = a.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = a.stateNode.containerInfo),
                            s === o || (s.nodeType === 8 && s.parentNode === o))
                        )
                            return;
                        a = a.return;
                    }
                for (; l !== null; ) {
                    if (((a = Kt(l)), a === null)) return;
                    if (((s = a.tag), s === 5 || s === 6)) {
                        r = i = a;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    Nc(function () {
        var u = i,
            f = Al(n),
            m = [];
        e: {
            var p = dd.get(e);
            if (p !== void 0) {
                var v = Fl,
                    y = e;
                switch (e) {
                    case 'keypress':
                        if (To(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        v = oh;
                        break;
                    case 'focusin':
                        (y = 'focus'), (v = ea);
                        break;
                    case 'focusout':
                        (y = 'blur'), (v = ea);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        v = ea;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        v = $s;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        v = Kp;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        v = lh;
                        break;
                    case ld:
                    case sd:
                    case ud:
                        v = Yp;
                        break;
                    case cd:
                        v = uh;
                        break;
                    case 'scroll':
                        v = Hp;
                        break;
                    case 'wheel':
                        v = dh;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        v = Zp;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        v = Ds;
                }
                var g = (t & 4) !== 0,
                    _ = !g && e === 'scroll',
                    d = g ? (p !== null ? p + 'Capture' : null) : p;
                g = [];
                for (var c = u, h; c !== null; ) {
                    h = c;
                    var w = h.stateNode;
                    if (
                        (h.tag === 5 &&
                            w !== null &&
                            ((h = w),
                            d !== null &&
                                ((w = _r(c, d)),
                                w != null && g.push(Rr(c, w, h)))),
                        _)
                    )
                        break;
                    c = c.return;
                }
                0 < g.length &&
                    ((p = new v(p, y, null, n, f)),
                    m.push({ event: p, listeners: g }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === 'mouseover' || e === 'pointerover'),
                    (v = e === 'mouseout' || e === 'pointerout'),
                    p &&
                        n !== La &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Kt(y) || y[mt]))
                )
                    break e;
                if (
                    (v || p) &&
                    ((p =
                        f.window === f
                            ? f
                            : (p = f.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    v
                        ? ((y = n.relatedTarget || n.toElement),
                          (v = u),
                          (y = y ? Kt(y) : null),
                          y !== null &&
                              ((_ = an(y)),
                              y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((v = null), (y = u)),
                    v !== y)
                ) {
                    if (
                        ((g = $s),
                        (w = 'onMouseLeave'),
                        (d = 'onMouseEnter'),
                        (c = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((g = Ds),
                            (w = 'onPointerLeave'),
                            (d = 'onPointerEnter'),
                            (c = 'pointer')),
                        (_ = v == null ? p : kn(v)),
                        (h = y == null ? p : kn(y)),
                        (p = new g(w, c + 'leave', v, n, f)),
                        (p.target = _),
                        (p.relatedTarget = h),
                        (w = null),
                        Kt(f) === u &&
                            ((g = new g(d, c + 'enter', y, n, f)),
                            (g.target = h),
                            (g.relatedTarget = _),
                            (w = g)),
                        (_ = w),
                        v && y)
                    )
                        t: {
                            for (g = v, d = y, c = 0, h = g; h; h = cn(h)) c++;
                            for (h = 0, w = d; w; w = cn(w)) h++;
                            for (; 0 < c - h; ) (g = cn(g)), c--;
                            for (; 0 < h - c; ) (d = cn(d)), h--;
                            for (; c--; ) {
                                if (
                                    g === d ||
                                    (d !== null && g === d.alternate)
                                )
                                    break t;
                                (g = cn(g)), (d = cn(d));
                            }
                            g = null;
                        }
                    else g = null;
                    v !== null && Xs(m, p, v, g, !1),
                        y !== null && _ !== null && Xs(m, _, y, g, !0);
                }
            }
            e: {
                if (
                    ((p = u ? kn(u) : window),
                    (v = p.nodeName && p.nodeName.toLowerCase()),
                    v === 'select' || (v === 'input' && p.type === 'file'))
                )
                    var S = vh;
                else if (Hs(p))
                    if (nd) S = xh;
                    else {
                        S = Sh;
                        var E = wh;
                    }
                else
                    (v = p.nodeName) &&
                        v.toLowerCase() === 'input' &&
                        (p.type === 'checkbox' || p.type === 'radio') &&
                        (S = kh);
                if (S && (S = S(e, u))) {
                    td(m, S, n, f);
                    break e;
                }
                E && E(e, p, u),
                    e === 'focusout' &&
                        (E = p._wrapperState) &&
                        E.controlled &&
                        p.type === 'number' &&
                        ba(p, 'number', p.value);
            }
            switch (((E = u ? kn(u) : window), e)) {
                case 'focusin':
                    (Hs(E) || E.contentEditable === 'true') &&
                        ((wn = E), (Ba = u), (gr = null));
                    break;
                case 'focusout':
                    gr = Ba = wn = null;
                    break;
                case 'mousedown':
                    Wa = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Wa = !1), Ys(m, n, f);
                    break;
                case 'selectionchange':
                    if (_h) break;
                case 'keydown':
                case 'keyup':
                    Ys(m, n, f);
            }
            var x;
            if (Nl)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var A = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            A = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            A = 'onCompositionUpdate';
                            break e;
                    }
                    A = void 0;
                }
            else
                vn
                    ? qc(e, n) && (A = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (A = 'onCompositionStart');
            A &&
                (Xc &&
                    n.locale !== 'ko' &&
                    (vn || A !== 'onCompositionStart'
                        ? A === 'onCompositionEnd' && vn && (x = Zc())
                        : ((_t = f),
                          (zl = 'value' in _t ? _t.value : _t.textContent),
                          (vn = !0))),
                (E = Ko(u, A)),
                0 < E.length &&
                    ((A = new js(A, e, null, n, f)),
                    m.push({ event: A, listeners: E }),
                    x
                        ? (A.data = x)
                        : ((x = ed(n)), x !== null && (A.data = x)))),
                (x = ph ? hh(e, n) : mh(e, n)) &&
                    ((u = Ko(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((f = new js(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            f
                        )),
                        m.push({ event: f, listeners: u }),
                        (f.data = x)));
        }
        fd(m, t);
    });
}
function Rr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ko(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = _r(e, n)),
            i != null && r.unshift(Rr(e, i, o)),
            (i = _r(e, t)),
            i != null && r.push(Rr(e, i, o))),
            (e = e.return);
    }
    return r;
}
function cn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Xs(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
        var l = n,
            s = l.alternate,
            u = l.stateNode;
        if (s !== null && s === r) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            o
                ? ((s = _r(n, i)), s != null && a.unshift(Rr(n, s, l)))
                : o || ((s = _r(n, i)), s != null && a.push(Rr(n, s, l)))),
            (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
}
var Oh = /\r\n?/g,
    bh = /\u0000|\uFFFD/g;
function qs(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            Oh,
            `
`
        )
        .replace(bh, '');
}
function ho(e, t, n) {
    if (((t = qs(t)), qs(e) !== t && n)) throw Error(k(425));
}
function Go() {}
var Ha = null,
    Va = null;
function Ka(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Ga = typeof setTimeout == 'function' ? setTimeout : void 0,
    Mh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    eu = typeof Promise == 'function' ? Promise : void 0,
    Rh =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof eu < 'u'
            ? function (e) {
                  return eu.resolve(null).then(e).catch(zh);
              }
            : Ga;
function zh(e) {
    setTimeout(function () {
        throw e;
    });
}
function sa(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(o), Ar(t);
                    return;
                }
                r--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
        n = o;
    } while (n);
    Ar(t);
}
function bt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function tu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Qn = Math.random().toString(36).slice(2),
    nt = '__reactFiber$' + Qn,
    zr = '__reactProps$' + Qn,
    mt = '__reactContainer$' + Qn,
    Qa = '__reactEvents$' + Qn,
    Fh = '__reactListeners$' + Qn,
    Lh = '__reactHandles$' + Qn;
function Kt(e) {
    var t = e[nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[mt] || n[nt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = tu(e); e !== null; ) {
                    if ((n = e[nt])) return n;
                    e = tu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Gr(e) {
    return (
        (e = e[nt] || e[mt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
}
function gi(e) {
    return e[zr] || null;
}
var Ya = [],
    xn = -1;
function It(e) {
    return { current: e };
}
function W(e) {
    0 > xn || ((e.current = Ya[xn]), (Ya[xn] = null), xn--);
}
function D(e, t) {
    xn++, (Ya[xn] = e.current), (e.current = t);
}
var Nt = {},
    ge = It(Nt),
    Ee = It(!1),
    Xt = Nt;
function Un(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Nt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function _e(e) {
    return (e = e.childContextTypes), e != null;
}
function Qo() {
    W(Ee), W(ge);
}
function nu(e, t, n) {
    if (ge.current !== Nt) throw Error(k(168));
    D(ge, t), D(Ee, n);
}
function hd(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(k(108, wp(e) || 'Unknown', o));
    return Q({}, n, r);
}
function Yo(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Nt),
        (Xt = ge.current),
        D(ge, e),
        D(Ee, Ee.current),
        !0
    );
}
function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
        ? ((e = hd(e, t, Xt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          W(Ee),
          W(ge),
          D(ge, e))
        : W(Ee),
        D(Ee, n);
}
var st = null,
    yi = !1,
    ua = !1;
function md(e) {
    st === null ? (st = [e]) : st.push(e);
}
function Nh(e) {
    (yi = !0), md(e);
}
function $t() {
    if (!ua && st !== null) {
        ua = !0;
        var e = 0,
            t = j;
        try {
            var n = st;
            for (j = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (st = null), (yi = !1);
        } catch (o) {
            throw (st !== null && (st = st.slice(e + 1)), jc(Ol, $t), o);
        } finally {
            (j = t), (ua = !1);
        }
    }
    return null;
}
var Cn = [],
    En = 0,
    Jo = null,
    Zo = 0,
    Ne = [],
    Ue = 0,
    qt = null,
    ct = 1,
    dt = '';
function Wt(e, t) {
    (Cn[En++] = Zo), (Cn[En++] = Jo), (Jo = e), (Zo = t);
}
function gd(e, t, n) {
    (Ne[Ue++] = ct), (Ne[Ue++] = dt), (Ne[Ue++] = qt), (qt = e);
    var r = ct;
    e = dt;
    var o = 32 - Ge(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Ge(t) + o;
    if (30 < i) {
        var a = o - (o % 5);
        (i = (r & ((1 << a) - 1)).toString(32)),
            (r >>= a),
            (o -= a),
            (ct = (1 << (32 - Ge(t) + o)) | (n << o) | r),
            (dt = i + e);
    } else (ct = (1 << i) | (n << o) | r), (dt = e);
}
function Il(e) {
    e.return !== null && (Wt(e, 1), gd(e, 1, 0));
}
function $l(e) {
    for (; e === Jo; )
        (Jo = Cn[--En]), (Cn[En] = null), (Zo = Cn[--En]), (Cn[En] = null);
    for (; e === qt; )
        (qt = Ne[--Ue]),
            (Ne[Ue] = null),
            (dt = Ne[--Ue]),
            (Ne[Ue] = null),
            (ct = Ne[--Ue]),
            (Ne[Ue] = null);
}
var Me = null,
    be = null,
    V = !1,
    Ke = null;
function yd(e, t) {
    var n = Ie(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ou(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Me = e), (be = bt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Me = e), (be = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = qt !== null ? { id: ct, overflow: dt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ie(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Me = e),
                      (be = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Ja(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Za(e) {
    if (V) {
        var t = be;
        if (t) {
            var n = t;
            if (!ou(e, t)) {
                if (Ja(e)) throw Error(k(418));
                t = bt(n.nextSibling);
                var r = Me;
                t && ou(e, t)
                    ? yd(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Me = e));
            }
        } else {
            if (Ja(e)) throw Error(k(418));
            (e.flags = (e.flags & -4097) | 2), (V = !1), (Me = e);
        }
    }
}
function iu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Me = e;
}
function mo(e) {
    if (e !== Me) return !1;
    if (!V) return iu(e), (V = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !Ka(e.type, e.memoizedProps))),
        t && (t = be))
    ) {
        if (Ja(e)) throw (vd(), Error(k(418)));
        for (; t; ) yd(e, t), (t = bt(t.nextSibling));
    }
    if ((iu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            be = bt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            be = null;
        }
    } else be = Me ? bt(e.stateNode.nextSibling) : null;
    return !0;
}
function vd() {
    for (var e = be; e; ) e = bt(e.nextSibling);
}
function In() {
    (be = Me = null), (V = !1);
}
function jl(e) {
    Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Uh = wt.ReactCurrentBatchConfig;
function He(e, t) {
    if (e && e.defaultProps) {
        (t = Q({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Xo = It(null),
    qo = null,
    _n = null,
    Dl = null;
function Bl() {
    Dl = _n = qo = null;
}
function Wl(e) {
    var t = Xo.current;
    W(Xo), (e._currentValue = t);
}
function Xa(e, t, n) {
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
function Rn(e, t) {
    (qo = e),
        (Dl = _n = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function je(e) {
    var t = e._currentValue;
    if (Dl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
            if (qo === null) throw Error(k(308));
            (_n = e), (qo.dependencies = { lanes: 0, firstContext: e });
        } else _n = _n.next = e;
    return t;
}
var Gt = null;
function Hl(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e);
}
function wd(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), Hl(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        gt(e, r)
    );
}
function gt(e, t) {
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
var xt = !1;
function Vl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Sd(e, t) {
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
function ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), N & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            gt(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), Hl(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        gt(e, n)
    );
}
function Po(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
    }
}
function au(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
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
function ei(e, t, n, r) {
    var o = e.updateQueue;
    xt = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var s = l,
            u = s.next;
        (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
        var f = e.alternate;
        f !== null &&
            ((f = f.updateQueue),
            (l = f.lastBaseUpdate),
            l !== a &&
                (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
                (f.lastBaseUpdate = s)));
    }
    if (i !== null) {
        var m = o.baseState;
        (a = 0), (f = u = s = null), (l = i);
        do {
            var p = l.lane,
                v = l.eventTime;
            if ((r & p) === p) {
                f !== null &&
                    (f = f.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        g = l;
                    switch (((p = t), (v = n), g.tag)) {
                        case 1:
                            if (((y = g.payload), typeof y == 'function')) {
                                m = y.call(v, m, p);
                                break e;
                            }
                            m = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = g.payload),
                                (p =
                                    typeof y == 'function'
                                        ? y.call(v, m, p)
                                        : y),
                                p == null)
                            )
                                break e;
                            m = Q({}, m, p);
                            break e;
                        case 2:
                            xt = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = o.effects),
                    p === null ? (o.effects = [l]) : p.push(l));
            } else
                (v = {
                    eventTime: v,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    f === null ? ((u = f = v), (s = m)) : (f = f.next = v),
                    (a |= p);
            if (((l = l.next), l === null)) {
                if (((l = o.shared.pending), l === null)) break;
                (p = l),
                    (l = p.next),
                    (p.next = null),
                    (o.lastBaseUpdate = p),
                    (o.shared.pending = null);
            }
        } while (1);
        if (
            (f === null && (s = m),
            (o.baseState = s),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = f),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (a |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (tn |= a), (e.lanes = a), (e.memoizedState = m);
    }
}
function lu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != 'function'))
                    throw Error(k(191, o));
                o.call(r);
            }
        }
}
var kd = new wc.Component().refs;
function qa(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Q({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? an(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            o = zt(e),
            i = ft(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = Mt(e, i, o)),
            t !== null && (Qe(t, e, o, r), Po(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            o = zt(e),
            i = ft(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = Mt(e, i, o)),
            t !== null && (Qe(t, e, o, r), Po(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ve(),
            r = zt(e),
            o = ft(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = Mt(e, o, r)),
            t !== null && (Qe(t, e, r, n), Po(t, e, r));
    },
};
function su(e, t, n, r, o, i, a) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, i, a)
            : t.prototype && t.prototype.isPureReactComponent
            ? !br(n, r) || !br(o, i)
            : !0
    );
}
function xd(e, t, n) {
    var r = !1,
        o = Nt,
        i = t.contextType;
    return (
        typeof i == 'object' && i !== null
            ? (i = je(i))
            : ((o = _e(t) ? Xt : ge.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Un(e, o) : Nt)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = vi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function uu(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && vi.enqueueReplaceState(t, t.state, null);
}
function el(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = kd), Vl(e);
    var i = t.contextType;
    typeof i == 'object' && i !== null
        ? (o.context = je(i))
        : ((i = _e(t) ? Xt : ge.current), (o.context = Un(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == 'function' && (qa(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof o.getSnapshotBeforeUpdate == 'function' ||
            (typeof o.UNSAFE_componentWillMount != 'function' &&
                typeof o.componentWillMount != 'function') ||
            ((t = o.state),
            typeof o.componentWillMount == 'function' && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == 'function' &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && vi.enqueueReplaceState(o, o.state, null),
            ei(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function tr(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(k(147, e));
            var o = r,
                i = '' + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (a) {
                      var l = o.refs;
                      l === kd && (l = o.refs = {}),
                          a === null ? delete l[i] : (l[i] = a);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != 'string') throw Error(k(284));
        if (!n._owner) throw Error(k(290, e));
    }
    return e;
}
function go(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            k(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e
            )
        ))
    );
}
function cu(e) {
    var t = e._init;
    return t(e._payload);
}
function Cd(e) {
    function t(d, c) {
        if (e) {
            var h = d.deletions;
            h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
        }
    }
    function n(d, c) {
        if (!e) return null;
        for (; c !== null; ) t(d, c), (c = c.sibling);
        return null;
    }
    function r(d, c) {
        for (d = new Map(); c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
                (c = c.sibling);
        return d;
    }
    function o(d, c) {
        return (d = Ft(d, c)), (d.index = 0), (d.sibling = null), d;
    }
    function i(d, c, h) {
        return (
            (d.index = h),
            e
                ? ((h = d.alternate),
                  h !== null
                      ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
                      : ((d.flags |= 2), c))
                : ((d.flags |= 1048576), c)
        );
    }
    function a(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
    }
    function l(d, c, h, w) {
        return c === null || c.tag !== 6
            ? ((c = ga(h, d.mode, w)), (c.return = d), c)
            : ((c = o(c, h)), (c.return = d), c);
    }
    function s(d, c, h, w) {
        var S = h.type;
        return S === yn
            ? f(d, c, h.props.children, w, h.key)
            : c !== null &&
              (c.elementType === S ||
                  (typeof S == 'object' &&
                      S !== null &&
                      S.$$typeof === kt &&
                      cu(S) === c.type))
            ? ((w = o(c, h.props)), (w.ref = tr(d, c, h)), (w.return = d), w)
            : ((w = zo(h.type, h.key, h.props, null, d.mode, w)),
              (w.ref = tr(d, c, h)),
              (w.return = d),
              w);
    }
    function u(d, c, h, w) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== h.containerInfo ||
            c.stateNode.implementation !== h.implementation
            ? ((c = ya(h, d.mode, w)), (c.return = d), c)
            : ((c = o(c, h.children || [])), (c.return = d), c);
    }
    function f(d, c, h, w, S) {
        return c === null || c.tag !== 7
            ? ((c = Zt(h, d.mode, w, S)), (c.return = d), c)
            : ((c = o(c, h)), (c.return = d), c);
    }
    function m(d, c, h) {
        if ((typeof c == 'string' && c !== '') || typeof c == 'number')
            return (c = ga('' + c, d.mode, h)), (c.return = d), c;
        if (typeof c == 'object' && c !== null) {
            switch (c.$$typeof) {
                case oo:
                    return (
                        (h = zo(c.type, c.key, c.props, null, d.mode, h)),
                        (h.ref = tr(d, null, c)),
                        (h.return = d),
                        h
                    );
                case gn:
                    return (c = ya(c, d.mode, h)), (c.return = d), c;
                case kt:
                    var w = c._init;
                    return m(d, w(c._payload), h);
            }
            if (sr(c) || Jn(c))
                return (c = Zt(c, d.mode, h, null)), (c.return = d), c;
            go(d, c);
        }
        return null;
    }
    function p(d, c, h, w) {
        var S = c !== null ? c.key : null;
        if ((typeof h == 'string' && h !== '') || typeof h == 'number')
            return S !== null ? null : l(d, c, '' + h, w);
        if (typeof h == 'object' && h !== null) {
            switch (h.$$typeof) {
                case oo:
                    return h.key === S ? s(d, c, h, w) : null;
                case gn:
                    return h.key === S ? u(d, c, h, w) : null;
                case kt:
                    return (S = h._init), p(d, c, S(h._payload), w);
            }
            if (sr(h) || Jn(h)) return S !== null ? null : f(d, c, h, w, null);
            go(d, h);
        }
        return null;
    }
    function v(d, c, h, w, S) {
        if ((typeof w == 'string' && w !== '') || typeof w == 'number')
            return (d = d.get(h) || null), l(c, d, '' + w, S);
        if (typeof w == 'object' && w !== null) {
            switch (w.$$typeof) {
                case oo:
                    return (
                        (d = d.get(w.key === null ? h : w.key) || null),
                        s(c, d, w, S)
                    );
                case gn:
                    return (
                        (d = d.get(w.key === null ? h : w.key) || null),
                        u(c, d, w, S)
                    );
                case kt:
                    var E = w._init;
                    return v(d, c, h, E(w._payload), S);
            }
            if (sr(w) || Jn(w))
                return (d = d.get(h) || null), f(c, d, w, S, null);
            go(c, w);
        }
        return null;
    }
    function y(d, c, h, w) {
        for (
            var S = null, E = null, x = c, A = (c = 0), M = null;
            x !== null && A < h.length;
            A++
        ) {
            x.index > A ? ((M = x), (x = null)) : (M = x.sibling);
            var O = p(d, x, h[A], w);
            if (O === null) {
                x === null && (x = M);
                break;
            }
            e && x && O.alternate === null && t(d, x),
                (c = i(O, c, A)),
                E === null ? (S = O) : (E.sibling = O),
                (E = O),
                (x = M);
        }
        if (A === h.length) return n(d, x), V && Wt(d, A), S;
        if (x === null) {
            for (; A < h.length; A++)
                (x = m(d, h[A], w)),
                    x !== null &&
                        ((c = i(x, c, A)),
                        E === null ? (S = x) : (E.sibling = x),
                        (E = x));
            return V && Wt(d, A), S;
        }
        for (x = r(d, x); A < h.length; A++)
            (M = v(x, d, A, h[A], w)),
                M !== null &&
                    (e &&
                        M.alternate !== null &&
                        x.delete(M.key === null ? A : M.key),
                    (c = i(M, c, A)),
                    E === null ? (S = M) : (E.sibling = M),
                    (E = M));
        return (
            e &&
                x.forEach(function (ne) {
                    return t(d, ne);
                }),
            V && Wt(d, A),
            S
        );
    }
    function g(d, c, h, w) {
        var S = Jn(h);
        if (typeof S != 'function') throw Error(k(150));
        if (((h = S.call(h)), h == null)) throw Error(k(151));
        for (
            var E = (S = null), x = c, A = (c = 0), M = null, O = h.next();
            x !== null && !O.done;
            A++, O = h.next()
        ) {
            x.index > A ? ((M = x), (x = null)) : (M = x.sibling);
            var ne = p(d, x, O.value, w);
            if (ne === null) {
                x === null && (x = M);
                break;
            }
            e && x && ne.alternate === null && t(d, x),
                (c = i(ne, c, A)),
                E === null ? (S = ne) : (E.sibling = ne),
                (E = ne),
                (x = M);
        }
        if (O.done) return n(d, x), V && Wt(d, A), S;
        if (x === null) {
            for (; !O.done; A++, O = h.next())
                (O = m(d, O.value, w)),
                    O !== null &&
                        ((c = i(O, c, A)),
                        E === null ? (S = O) : (E.sibling = O),
                        (E = O));
            return V && Wt(d, A), S;
        }
        for (x = r(d, x); !O.done; A++, O = h.next())
            (O = v(x, d, A, O.value, w)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        x.delete(O.key === null ? A : O.key),
                    (c = i(O, c, A)),
                    E === null ? (S = O) : (E.sibling = O),
                    (E = O));
        return (
            e &&
                x.forEach(function (Ze) {
                    return t(d, Ze);
                }),
            V && Wt(d, A),
            S
        );
    }
    function _(d, c, h, w) {
        if (
            (typeof h == 'object' &&
                h !== null &&
                h.type === yn &&
                h.key === null &&
                (h = h.props.children),
            typeof h == 'object' && h !== null)
        ) {
            switch (h.$$typeof) {
                case oo:
                    e: {
                        for (var S = h.key, E = c; E !== null; ) {
                            if (E.key === S) {
                                if (((S = h.type), S === yn)) {
                                    if (E.tag === 7) {
                                        n(d, E.sibling),
                                            (c = o(E, h.props.children)),
                                            (c.return = d),
                                            (d = c);
                                        break e;
                                    }
                                } else if (
                                    E.elementType === S ||
                                    (typeof S == 'object' &&
                                        S !== null &&
                                        S.$$typeof === kt &&
                                        cu(S) === E.type)
                                ) {
                                    n(d, E.sibling),
                                        (c = o(E, h.props)),
                                        (c.ref = tr(d, E, h)),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                }
                                n(d, E);
                                break;
                            } else t(d, E);
                            E = E.sibling;
                        }
                        h.type === yn
                            ? ((c = Zt(h.props.children, d.mode, w, h.key)),
                              (c.return = d),
                              (d = c))
                            : ((w = zo(
                                  h.type,
                                  h.key,
                                  h.props,
                                  null,
                                  d.mode,
                                  w
                              )),
                              (w.ref = tr(d, c, h)),
                              (w.return = d),
                              (d = w));
                    }
                    return a(d);
                case gn:
                    e: {
                        for (E = h.key; c !== null; ) {
                            if (c.key === E)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        h.containerInfo &&
                                    c.stateNode.implementation ===
                                        h.implementation
                                ) {
                                    n(d, c.sibling),
                                        (c = o(c, h.children || [])),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                } else {
                                    n(d, c);
                                    break;
                                }
                            else t(d, c);
                            c = c.sibling;
                        }
                        (c = ya(h, d.mode, w)), (c.return = d), (d = c);
                    }
                    return a(d);
                case kt:
                    return (E = h._init), _(d, c, E(h._payload), w);
            }
            if (sr(h)) return y(d, c, h, w);
            if (Jn(h)) return g(d, c, h, w);
            go(d, h);
        }
        return (typeof h == 'string' && h !== '') || typeof h == 'number'
            ? ((h = '' + h),
              c !== null && c.tag === 6
                  ? (n(d, c.sibling), (c = o(c, h)), (c.return = d), (d = c))
                  : (n(d, c), (c = ga(h, d.mode, w)), (c.return = d), (d = c)),
              a(d))
            : n(d, c);
    }
    return _;
}
var $n = Cd(!0),
    Ed = Cd(!1),
    Qr = {},
    it = It(Qr),
    Fr = It(Qr),
    Lr = It(Qr);
function Qt(e) {
    if (e === Qr) throw Error(k(174));
    return e;
}
function Kl(e, t) {
    switch ((D(Lr, t), D(Fr, e), D(it, Qr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ra(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Ra(t, e));
    }
    W(it), D(it, t);
}
function jn() {
    W(it), W(Fr), W(Lr);
}
function _d(e) {
    Qt(Lr.current);
    var t = Qt(it.current),
        n = Ra(t, e.type);
    t !== n && (D(Fr, e), D(it, n));
}
function Gl(e) {
    Fr.current === e && (W(it), W(Fr));
}
var K = It(0);
function ti(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
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
var ca = [];
function Ql() {
    for (var e = 0; e < ca.length; e++)
        ca[e]._workInProgressVersionPrimary = null;
    ca.length = 0;
}
var Ao = wt.ReactCurrentDispatcher,
    da = wt.ReactCurrentBatchConfig,
    en = 0,
    G = null,
    re = null,
    ae = null,
    ni = !1,
    yr = !1,
    Nr = 0,
    Ih = 0;
function fe() {
    throw Error(k(321));
}
function Yl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Je(e[n], t[n])) return !1;
    return !0;
}
function Jl(e, t, n, r, o, i) {
    if (
        ((en = i),
        (G = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ao.current = e === null || e.memoizedState === null ? Bh : Wh),
        (e = n(r, o)),
        yr)
    ) {
        i = 0;
        do {
            if (((yr = !1), (Nr = 0), 25 <= i)) throw Error(k(301));
            (i += 1),
                (ae = re = null),
                (t.updateQueue = null),
                (Ao.current = Hh),
                (e = n(r, o));
        } while (yr);
    }
    if (
        ((Ao.current = ri),
        (t = re !== null && re.next !== null),
        (en = 0),
        (ae = re = G = null),
        (ni = !1),
        t)
    )
        throw Error(k(300));
    return e;
}
function Zl() {
    var e = Nr !== 0;
    return (Nr = 0), e;
}
function qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function De() {
    if (re === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var t = ae === null ? G.memoizedState : ae.next;
    if (t !== null) (ae = t), (re = e);
    else {
        if (e === null) throw Error(k(310));
        (re = e),
            (e = {
                memoizedState: re.memoizedState,
                baseState: re.baseState,
                baseQueue: re.baseQueue,
                queue: re.queue,
                next: null,
            }),
            ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e);
    }
    return ae;
}
function Ur(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function fa(e) {
    var t = De(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = re,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            (o.next = i.next), (i.next = a);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var l = (a = null),
            s = null,
            u = i;
        do {
            var f = u.lane;
            if ((en & f) === f)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var m = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                s === null ? ((l = s = m), (a = r)) : (s = s.next = m),
                    (G.lanes |= f),
                    (tn |= f);
            }
            u = u.next;
        } while (u !== null && u !== i);
        s === null ? (a = r) : (s.next = l),
            Je(r, t.memoizedState) || (Ce = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (G.lanes |= i), (tn |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function pa(e) {
    var t = De(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = (o = o.next);
        do (i = e(i, a.action)), (a = a.next);
        while (a !== o);
        Je(i, t.memoizedState) || (Ce = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Td() {}
function Pd(e, t) {
    var n = G,
        r = De(),
        o = t(),
        i = !Je(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (Ce = !0)),
        (r = r.queue),
        Xl(bd.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (ae !== null && ae.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Ir(9, Od.bind(null, n, r, o, t), void 0, null),
            le === null)
        )
            throw Error(k(349));
        en & 30 || Ad(n, t, o);
    }
    return o;
}
function Ad(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = G.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (G.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Od(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Md(t) && Rd(e);
}
function bd(e, t, n) {
    return n(function () {
        Md(t) && Rd(e);
    });
}
function Md(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Je(e, n);
    } catch {
        return !0;
    }
}
function Rd(e) {
    var t = gt(e, 1);
    t !== null && Qe(t, e, 1, -1);
}
function du(e) {
    var t = qe();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ur,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Dh.bind(null, G, e)),
        [t.memoizedState, e]
    );
}
function Ir(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = G.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (G.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function zd() {
    return De().memoizedState;
}
function Oo(e, t, n, r) {
    var o = qe();
    (G.flags |= e),
        (o.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function wi(e, t, n, r) {
    var o = De();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (re !== null) {
        var a = re.memoizedState;
        if (((i = a.destroy), r !== null && Yl(r, a.deps))) {
            o.memoizedState = Ir(t, n, i, r);
            return;
        }
    }
    (G.flags |= e), (o.memoizedState = Ir(1 | t, n, i, r));
}
function fu(e, t) {
    return Oo(8390656, 8, e, t);
}
function Xl(e, t) {
    return wi(2048, 8, e, t);
}
function Fd(e, t) {
    return wi(4, 2, e, t);
}
function Ld(e, t) {
    return wi(4, 4, e, t);
}
function Nd(e, t) {
    if (typeof t == 'function')
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
function Ud(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), wi(4, 4, Nd.bind(null, t, e), n)
    );
}
function ql() {}
function Id(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function $d(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yl(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jd(e, t, n) {
    return en & 21
        ? (Je(n, t) ||
              ((n = Wc()), (G.lanes |= n), (tn |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Ce = !0)),
          (e.memoizedState = n));
}
function $h(e, t) {
    var n = j;
    (j = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = da.transition;
    da.transition = {};
    try {
        e(!1), t();
    } finally {
        (j = n), (da.transition = r);
    }
}
function Dd() {
    return De().memoizedState;
}
function jh(e, t, n) {
    var r = zt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Bd(e))
    )
        Wd(t, n);
    else if (((n = wd(e, t, n, r)), n !== null)) {
        var o = ve();
        Qe(n, e, r, o), Hd(n, t, r);
    }
}
function Dh(e, t, n) {
    var r = zt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Bd(e)) Wd(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var a = t.lastRenderedState,
                    l = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Je(l, a))) {
                    var s = t.interleaved;
                    s === null
                        ? ((o.next = o), Hl(t))
                        : ((o.next = s.next), (s.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = wd(e, t, o, r)),
            n !== null && ((o = ve()), Qe(n, e, r, o), Hd(n, t, r));
    }
}
function Bd(e) {
    var t = e.alternate;
    return e === G || (t !== null && t === G);
}
function Wd(e, t) {
    yr = ni = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Hd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
    }
}
var ri = {
        readContext: je,
        useCallback: fe,
        useContext: fe,
        useEffect: fe,
        useImperativeHandle: fe,
        useInsertionEffect: fe,
        useLayoutEffect: fe,
        useMemo: fe,
        useReducer: fe,
        useRef: fe,
        useState: fe,
        useDebugValue: fe,
        useDeferredValue: fe,
        useTransition: fe,
        useMutableSource: fe,
        useSyncExternalStore: fe,
        useId: fe,
        unstable_isNewReconciler: !1,
    },
    Bh = {
        readContext: je,
        useCallback: function (e, t) {
            return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: je,
        useEffect: fu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Oo(4194308, 4, Nd.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Oo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Oo(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = qe();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = qe();
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
                (e = e.dispatch = jh.bind(null, G, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = qe();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: du,
        useDebugValue: ql,
        useDeferredValue: function (e) {
            return (qe().memoizedState = e);
        },
        useTransition: function () {
            var e = du(!1),
                t = e[0];
            return (e = $h.bind(null, e[1])), (qe().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = G,
                o = qe();
            if (V) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (((n = t()), le === null)) throw Error(k(349));
                en & 30 || Ad(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                fu(bd.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ir(9, Od.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = qe(),
                t = le.identifierPrefix;
            if (V) {
                var n = dt,
                    r = ct;
                (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = Nr++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = Ih++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Wh = {
        readContext: je,
        useCallback: Id,
        useContext: je,
        useEffect: Xl,
        useImperativeHandle: Ud,
        useInsertionEffect: Fd,
        useLayoutEffect: Ld,
        useMemo: $d,
        useReducer: fa,
        useRef: zd,
        useState: function () {
            return fa(Ur);
        },
        useDebugValue: ql,
        useDeferredValue: function (e) {
            var t = De();
            return jd(t, re.memoizedState, e);
        },
        useTransition: function () {
            var e = fa(Ur)[0],
                t = De().memoizedState;
            return [e, t];
        },
        useMutableSource: Td,
        useSyncExternalStore: Pd,
        useId: Dd,
        unstable_isNewReconciler: !1,
    },
    Hh = {
        readContext: je,
        useCallback: Id,
        useContext: je,
        useEffect: Xl,
        useImperativeHandle: Ud,
        useInsertionEffect: Fd,
        useLayoutEffect: Ld,
        useMemo: $d,
        useReducer: pa,
        useRef: zd,
        useState: function () {
            return pa(Ur);
        },
        useDebugValue: ql,
        useDeferredValue: function (e) {
            var t = De();
            return re === null
                ? (t.memoizedState = e)
                : jd(t, re.memoizedState, e);
        },
        useTransition: function () {
            var e = pa(Ur)[0],
                t = De().memoizedState;
            return [e, t];
        },
        useMutableSource: Td,
        useSyncExternalStore: Pd,
        useId: Dd,
        unstable_isNewReconciler: !1,
    };
function Dn(e, t) {
    try {
        var n = '',
            r = t;
        do (n += vp(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function ha(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Vh = typeof WeakMap == 'function' ? WeakMap : Map;
function Vd(e, t, n) {
    (n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            ii || ((ii = !0), (dl = r)), tl(e, t);
        }),
        n
    );
}
function Kd(e, t, n) {
    (n = ft(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                tl(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == 'function' &&
            (n.callback = function () {
                tl(e, t),
                    typeof r != 'function' &&
                        (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: a !== null ? a : '',
                });
            }),
        n
    );
}
function pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vh();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = im.bind(null, e, t, n)), t.then(e, e));
}
function hu(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function mu(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = ft(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Kh = wt.ReactCurrentOwner,
    Ce = !1;
function ye(e, t, n, r) {
    t.child = e === null ? Ed(t, null, n, r) : $n(t, e.child, n, r);
}
function gu(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        Rn(t, o),
        (r = Jl(e, t, n, r, i, o)),
        (n = Zl()),
        e !== null && !Ce
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              yt(e, t, o))
            : (V && n && Il(t), (t.flags |= 1), ye(e, t, r, o), t.child)
    );
}
function yu(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == 'function' &&
            !ls(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Gd(e, t, i, r, o))
            : ((e = zo(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var a = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : br),
            n(a, r) && e.ref === t.ref)
        )
            return yt(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = Ft(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Gd(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (br(i, r) && e.ref === t.ref)
            if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (Ce = !0);
            else return (t.lanes = e.lanes), yt(e, t, o);
    }
    return nl(e, t, n, r, o);
}
function Qd(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                D(Pn, Ae),
                (Ae |= n);
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
                    D(Pn, Ae),
                    (Ae |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                D(Pn, Ae),
                (Ae |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            D(Pn, Ae),
            (Ae |= r);
    return ye(e, t, o, n), t.child;
}
function Yd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function nl(e, t, n, r, o) {
    var i = _e(n) ? Xt : ge.current;
    return (
        (i = Un(t, i)),
        Rn(t, o),
        (n = Jl(e, t, n, r, i, o)),
        (r = Zl()),
        e !== null && !Ce
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              yt(e, t, o))
            : (V && r && Il(t), (t.flags |= 1), ye(e, t, n, o), t.child)
    );
}
function vu(e, t, n, r, o) {
    if (_e(n)) {
        var i = !0;
        Yo(t);
    } else i = !1;
    if ((Rn(t, o), t.stateNode === null))
        bo(e, t), xd(t, n, r), el(t, n, r, o), (r = !0);
    else if (e === null) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var s = a.context,
            u = n.contextType;
        typeof u == 'object' && u !== null
            ? (u = je(u))
            : ((u = _e(n) ? Xt : ge.current), (u = Un(t, u)));
        var f = n.getDerivedStateFromProps,
            m =
                typeof f == 'function' ||
                typeof a.getSnapshotBeforeUpdate == 'function';
        m ||
            (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof a.componentWillReceiveProps != 'function') ||
            ((l !== r || s !== u) && uu(t, a, r, u)),
            (xt = !1);
        var p = t.memoizedState;
        (a.state = p),
            ei(t, r, a, o),
            (s = t.memoizedState),
            l !== r || p !== s || Ee.current || xt
                ? (typeof f == 'function' &&
                      (qa(t, n, f, r), (s = t.memoizedState)),
                  (l = xt || su(t, n, l, r, p, s, u))
                      ? (m ||
                            (typeof a.UNSAFE_componentWillMount != 'function' &&
                                typeof a.componentWillMount != 'function') ||
                            (typeof a.componentWillMount == 'function' &&
                                a.componentWillMount(),
                            typeof a.UNSAFE_componentWillMount == 'function' &&
                                a.UNSAFE_componentWillMount()),
                        typeof a.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof a.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = u),
                  (r = l))
                : (typeof a.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (a = t.stateNode),
            Sd(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : He(t.type, l)),
            (a.props = u),
            (m = t.pendingProps),
            (p = a.context),
            (s = n.contextType),
            typeof s == 'object' && s !== null
                ? (s = je(s))
                : ((s = _e(n) ? Xt : ge.current), (s = Un(t, s)));
        var v = n.getDerivedStateFromProps;
        (f =
            typeof v == 'function' ||
            typeof a.getSnapshotBeforeUpdate == 'function') ||
            (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof a.componentWillReceiveProps != 'function') ||
            ((l !== m || p !== s) && uu(t, a, r, s)),
            (xt = !1),
            (p = t.memoizedState),
            (a.state = p),
            ei(t, r, a, o);
        var y = t.memoizedState;
        l !== m || p !== y || Ee.current || xt
            ? (typeof v == 'function' &&
                  (qa(t, n, v, r), (y = t.memoizedState)),
              (u = xt || su(t, n, u, r, p, y, s) || !1)
                  ? (f ||
                        (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                            typeof a.componentWillUpdate != 'function') ||
                        (typeof a.componentWillUpdate == 'function' &&
                            a.componentWillUpdate(r, y, s),
                        typeof a.UNSAFE_componentWillUpdate == 'function' &&
                            a.UNSAFE_componentWillUpdate(r, y, s)),
                    typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof a.componentDidUpdate != 'function' ||
                        (l === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate != 'function' ||
                        (l === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (a.props = r),
              (a.state = y),
              (a.context = s),
              (r = u))
            : (typeof a.componentDidUpdate != 'function' ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return rl(e, t, n, r, i, o);
}
function rl(e, t, n, r, o, i) {
    Yd(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && ru(t, n, !1), yt(e, t, i);
    (r = t.stateNode), (Kh.current = t);
    var l =
        a && typeof n.getDerivedStateFromError != 'function'
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && a
            ? ((t.child = $n(t, e.child, null, i)),
              (t.child = $n(t, null, l, i)))
            : ye(e, t, l, i),
        (t.memoizedState = r.state),
        o && ru(t, n, !0),
        t.child
    );
}
function Jd(e) {
    var t = e.stateNode;
    t.pendingContext
        ? nu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && nu(e, t.context, !1),
        Kl(e, t.containerInfo);
}
function wu(e, t, n, r, o) {
    return In(), jl(o), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Zd(e, t, n) {
    var r = t.pendingProps,
        o = K.current,
        i = !1,
        a = (t.flags & 128) !== 0,
        l;
    if (
        ((l = a) ||
            (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        l
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        D(K, o & 1),
        e === null)
    )
        return (
            Za(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((a = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (a = { mode: 'hidden', children: a }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = a))
                            : (i = xi(a, r, 0, null)),
                        (e = Zt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = il(n)),
                        (t.memoizedState = ol),
                        e)
                      : es(t, a))
        );
    if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
        return Gh(e, t, a, r, l, o, n);
    if (i) {
        (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
        var s = { mode: 'hidden', children: r.children };
        return (
            !(a & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = Ft(o, s)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            l !== null
                ? (i = Ft(l, i))
                : ((i = Zt(i, a, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (a = e.child.memoizedState),
            (a =
                a === null
                    ? il(n)
                    : {
                          baseLanes: a.baseLanes | n,
                          cachePool: null,
                          transitions: a.transitions,
                      }),
            (i.memoizedState = a),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = ol),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = Ft(i, { mode: 'visible', children: r.children })),
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
function es(e, t) {
    return (
        (t = xi({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function yo(e, t, n, r) {
    return (
        r !== null && jl(r),
        $n(t, e.child, null, n),
        (e = es(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Gh(e, t, n, r, o, i, a) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ha(Error(k(422)))), yo(e, t, a, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = xi({ mode: 'visible', children: r.children }, o, 0, null)),
              (i = Zt(i, o, a, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && $n(t, e.child, null, a),
              (t.child.memoizedState = il(a)),
              (t.memoizedState = ol),
              i);
    if (!(t.mode & 1)) return yo(e, t, a, null);
    if (o.data === '$!') {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
            (r = l), (i = Error(k(419))), (r = ha(i, r, void 0)), yo(e, t, a, r)
        );
    }
    if (((l = (a & e.childLanes) !== 0), Ce || l)) {
        if (((r = le), r !== null)) {
            switch (a & -a) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | a) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), gt(e, o), Qe(r, e, o, -1));
        }
        return as(), (r = ha(Error(k(421)))), yo(e, t, a, r);
    }
    return o.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = am.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (be = bt(o.nextSibling)),
          (Me = t),
          (V = !0),
          (Ke = null),
          e !== null &&
              ((Ne[Ue++] = ct),
              (Ne[Ue++] = dt),
              (Ne[Ue++] = qt),
              (ct = e.id),
              (dt = e.overflow),
              (qt = t)),
          (t = es(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Su(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Xa(e.return, t, n);
}
function ma(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function Xd(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((ye(e, t, r.children, n), (r = K.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
                else if (e.tag === 19) Su(e, n, t);
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
    if ((D(K, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case 'forwards':
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && ti(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    ma(t, !1, o, n, i);
                break;
            case 'backwards':
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && ti(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ma(t, !0, n, null, i);
                break;
            case 'together':
                ma(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function bo(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (tn |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Ft(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Qh(e, t, n) {
    switch (t.tag) {
        case 3:
            Jd(t), In();
            break;
        case 5:
            _d(t);
            break;
        case 1:
            _e(t.type) && Yo(t);
            break;
        case 4:
            Kl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            D(Xo, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (D(K, K.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Zd(e, t, n)
                    : (D(K, K.current & 1),
                      (e = yt(e, t, n)),
                      e !== null ? e.sibling : null);
            D(K, K.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Xd(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                D(K, K.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Qd(e, t, n);
    }
    return yt(e, t, n);
}
var qd, al, ef, tf;
qd = function (e, t) {
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
al = function () {};
ef = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), Qt(it.current);
        var i = null;
        switch (n) {
            case 'input':
                (o = Aa(e, o)), (r = Aa(e, r)), (i = []);
                break;
            case 'select':
                (o = Q({}, o, { value: void 0 })),
                    (r = Q({}, r, { value: void 0 })),
                    (i = []);
                break;
            case 'textarea':
                (o = Ma(e, o)), (r = Ma(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = Go);
        }
        za(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === 'style') {
                    var l = o[u];
                    for (a in l)
                        l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (Cr.hasOwnProperty(u)
                            ? i || (i = [])
                            : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (
                ((l = o != null ? o[u] : void 0),
                r.hasOwnProperty(u) && s !== l && (s != null || l != null))
            )
                if (u === 'style')
                    if (l) {
                        for (a in l)
                            !l.hasOwnProperty(a) ||
                                (s && s.hasOwnProperty(a)) ||
                                (n || (n = {}), (n[a] = ''));
                        for (a in s)
                            s.hasOwnProperty(a) &&
                                l[a] !== s[a] &&
                                (n || (n = {}), (n[a] = s[a]));
                    } else n || (i || (i = []), i.push(u, n)), (n = s);
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((s = s ? s.__html : void 0),
                          (l = l ? l.__html : void 0),
                          s != null && l !== s && (i = i || []).push(u, s))
                        : u === 'children'
                        ? (typeof s != 'string' && typeof s != 'number') ||
                          (i = i || []).push(u, '' + s)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (Cr.hasOwnProperty(u)
                              ? (s != null &&
                                    u === 'onScroll' &&
                                    B('scroll', e),
                                i || l === s || (i = []))
                              : (i = i || []).push(u, s));
        }
        n && (i = i || []).push('style', n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
tf = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function nr(e, t) {
    if (!V)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
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
function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yh(e, t, n) {
    var r = t.pendingProps;
    switch (($l(t), t.tag)) {
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
            return pe(t), null;
        case 1:
            return _e(t.type) && Qo(), pe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                jn(),
                W(Ee),
                W(ge),
                Ql(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (mo(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ke !== null && (hl(Ke), (Ke = null)))),
                al(e, t),
                pe(t),
                null
            );
        case 5:
            Gl(t);
            var o = Qt(Lr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                ef(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return pe(t), null;
                }
                if (((e = Qt(it.current)), mo(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[nt] = t), (r[zr] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            B('cancel', r), B('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            B('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (o = 0; o < cr.length; o++) B(cr[o], r);
                            break;
                        case 'source':
                            B('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            B('error', r), B('load', r);
                            break;
                        case 'details':
                            B('toggle', r);
                            break;
                        case 'input':
                            Os(r, i), B('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                B('invalid', r);
                            break;
                        case 'textarea':
                            Ms(r, i), B('invalid', r);
                    }
                    za(n, i), (o = null);
                    for (var a in i)
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            a === 'children'
                                ? typeof l == 'string'
                                    ? r.textContent !== l &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          ho(r.textContent, l, e),
                                      (o = ['children', l]))
                                    : typeof l == 'number' &&
                                      r.textContent !== '' + l &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          ho(r.textContent, l, e),
                                      (o = ['children', '' + l]))
                                : Cr.hasOwnProperty(a) &&
                                  l != null &&
                                  a === 'onScroll' &&
                                  B('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            io(r), bs(r, i, !0);
                            break;
                        case 'textarea':
                            io(r), Rs(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof i.onClick == 'function' && (r.onclick = Go);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (a = o.nodeType === 9 ? o : o.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = Ac(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = a.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                ? (e = a.createElement(n, { is: r.is }))
                                : ((e = a.createElement(n)),
                                  n === 'select' &&
                                      ((a = e),
                                      r.multiple
                                          ? (a.multiple = !0)
                                          : r.size && (a.size = r.size)))
                            : (e = a.createElementNS(e, n)),
                        (e[nt] = t),
                        (e[zr] = r),
                        qd(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((a = Fa(n, r)), n)) {
                            case 'dialog':
                                B('cancel', e), B('close', e), (o = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                B('load', e), (o = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (o = 0; o < cr.length; o++) B(cr[o], e);
                                o = r;
                                break;
                            case 'source':
                                B('error', e), (o = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                B('error', e), B('load', e), (o = r);
                                break;
                            case 'details':
                                B('toggle', e), (o = r);
                                break;
                            case 'input':
                                Os(e, r), (o = Aa(e, r)), B('invalid', e);
                                break;
                            case 'option':
                                o = r;
                                break;
                            case 'select':
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = Q({}, r, { value: void 0 })),
                                    B('invalid', e);
                                break;
                            case 'textarea':
                                Ms(e, r), (o = Ma(e, r)), B('invalid', e);
                                break;
                            default:
                                o = r;
                        }
                        za(n, o), (l = o);
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var s = l[i];
                                i === 'style'
                                    ? Mc(e, s)
                                    : i === 'dangerouslySetInnerHTML'
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && Oc(e, s))
                                    : i === 'children'
                                    ? typeof s == 'string'
                                        ? (n !== 'textarea' || s !== '') &&
                                          Er(e, s)
                                        : typeof s == 'number' && Er(e, '' + s)
                                    : i !== 'suppressContentEditableWarning' &&
                                      i !== 'suppressHydrationWarning' &&
                                      i !== 'autoFocus' &&
                                      (Cr.hasOwnProperty(i)
                                          ? s != null &&
                                            i === 'onScroll' &&
                                            B('scroll', e)
                                          : s != null && El(e, i, s, a));
                            }
                        switch (n) {
                            case 'input':
                                io(e), bs(e, r, !1);
                                break;
                            case 'textarea':
                                io(e), Rs(e);
                                break;
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + Lt(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? An(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          An(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof o.onClick == 'function' &&
                                    (e.onclick = Go);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
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
            return pe(t), null;
        case 6:
            if (e && t.stateNode != null) tf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(k(166));
                if (((n = Qt(Lr.current)), Qt(it.current), mo(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[nt] = t),
                        (i = r.nodeValue !== n) && ((e = Me), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                ho(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    ho(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[nt] = t),
                        (t.stateNode = r);
            }
            return pe(t), null;
        case 13:
            if (
                (W(K),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (V && be !== null && t.mode & 1 && !(t.flags & 128))
                    vd(), In(), (t.flags |= 98560), (i = !1);
                else if (((i = mo(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(k(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(k(317));
                        i[nt] = t;
                    } else
                        In(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    pe(t), (i = !1);
                } else Ke !== null && (hl(Ke), (Ke = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || K.current & 1
                              ? oe === 0 && (oe = 3)
                              : as())),
                  t.updateQueue !== null && (t.flags |= 4),
                  pe(t),
                  null);
        case 4:
            return (
                jn(),
                al(e, t),
                e === null && Mr(t.stateNode.containerInfo),
                pe(t),
                null
            );
        case 10:
            return Wl(t.type._context), pe(t), null;
        case 17:
            return _e(t.type) && Qo(), pe(t), null;
        case 19:
            if ((W(K), (i = t.memoizedState), i === null)) return pe(t), null;
            if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
                if (r) nr(i, !1);
                else {
                    if (oe !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((a = ti(e)), a !== null)) {
                                for (
                                    t.flags |= 128,
                                        nr(i, !1),
                                        r = a.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (a = i.alternate),
                                        a === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = a.childLanes),
                                              (i.lanes = a.lanes),
                                              (i.child = a.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  a.memoizedProps),
                                              (i.memoizedState =
                                                  a.memoizedState),
                                              (i.updateQueue = a.updateQueue),
                                              (i.type = a.type),
                                              (e = a.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return D(K, (K.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        q() > Bn &&
                        ((t.flags |= 128),
                        (r = !0),
                        nr(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ti(a)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            nr(i, !0),
                            i.tail === null &&
                                i.tailMode === 'hidden' &&
                                !a.alternate &&
                                !V)
                        )
                            return pe(t), null;
                    } else
                        2 * q() - i.renderingStartTime > Bn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            nr(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : ((n = i.last),
                      n !== null ? (n.sibling = a) : (t.child = a),
                      (i.last = a));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = q()),
                  (t.sibling = null),
                  (n = K.current),
                  D(K, r ? (n & 1) | 2 : n & 1),
                  t)
                : (pe(t), null);
        case 22:
        case 23:
            return (
                is(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Ae & 1073741824 &&
                      (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : pe(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(k(156, t.tag));
}
function Jh(e, t) {
    switch (($l(t), t.tag)) {
        case 1:
            return (
                _e(t.type) && Qo(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                jn(),
                W(Ee),
                W(ge),
                Ql(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Gl(t), null;
        case 13:
            if (
                (W(K),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(k(340));
                In();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return W(K), null;
        case 4:
            return jn(), null;
        case 10:
            return Wl(t.type._context), null;
        case 22:
        case 23:
            return is(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var vo = !1,
    me = !1,
    Zh = typeof WeakSet == 'function' ? WeakSet : Set,
    T = null;
function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (r) {
                Z(e, t, r);
            }
        else n.current = null;
}
function ll(e, t, n) {
    try {
        n();
    } catch (r) {
        Z(e, t, r);
    }
}
var ku = !1;
function Xh(e, t) {
    if (((Ha = Ho), (e = id()), Ul(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var a = 0,
                        l = -1,
                        s = -1,
                        u = 0,
                        f = 0,
                        m = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var v;
                            m !== n ||
                                (o !== 0 && m.nodeType !== 3) ||
                                (l = a + o),
                                m !== i ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (s = a + r),
                                m.nodeType === 3 && (a += m.nodeValue.length),
                                (v = m.firstChild) !== null;

                        )
                            (p = m), (m = v);
                        for (;;) {
                            if (m === e) break t;
                            if (
                                (p === n && ++u === o && (l = a),
                                p === i && ++f === r && (s = a),
                                (v = m.nextSibling) !== null)
                            )
                                break;
                            (m = p), (p = m.parentNode);
                        }
                        m = v;
                    }
                    n = l === -1 || s === -1 ? null : { start: l, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Va = { focusedElem: e, selectionRange: n }, Ho = !1, T = t;
        T !== null;

    )
        if (
            ((t = T),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (T = e);
        else
            for (; T !== null; ) {
                t = T;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var g = y.memoizedProps,
                                        _ = y.memoizedState,
                                        d = t.stateNode,
                                        c = d.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? g
                                                : He(t.type, g),
                                            _
                                        );
                                    d.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var h = t.stateNode.containerInfo;
                                h.nodeType === 1
                                    ? (h.textContent = '')
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
                                throw Error(k(163));
                        }
                } catch (w) {
                    Z(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (T = e);
                    break;
                }
                T = t.return;
            }
    return (y = ku), (ku = !1), y;
}
function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && ll(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Si(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
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
function sl(e) {
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
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function nf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), nf(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[nt],
                delete t[zr],
                delete t[Qa],
                delete t[Fh],
                delete t[Lh])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xu(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || rf(e.return)) return null;
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
function ul(e, t, n) {
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
                  n != null || t.onclick !== null || (t.onclick = Go));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ul(e, t, n), e = e.sibling; e !== null; )
            ul(e, t, n), (e = e.sibling);
}
function cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (cl(e, t, n), e = e.sibling; e !== null; )
            cl(e, t, n), (e = e.sibling);
}
var se = null,
    Ve = !1;
function St(e, t, n) {
    for (n = n.child; n !== null; ) of(e, t, n), (n = n.sibling);
}
function of(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == 'function')
        try {
            ot.onCommitFiberUnmount(fi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            me || Tn(n, t);
        case 6:
            var r = se,
                o = Ve;
            (se = null),
                St(e, t, n),
                (se = r),
                (Ve = o),
                se !== null &&
                    (Ve
                        ? ((e = se),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : se.removeChild(n.stateNode));
            break;
        case 18:
            se !== null &&
                (Ve
                    ? ((e = se),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? sa(e.parentNode, n)
                          : e.nodeType === 1 && sa(e, n),
                      Ar(e))
                    : sa(se, n.stateNode));
            break;
        case 4:
            (r = se),
                (o = Ve),
                (se = n.stateNode.containerInfo),
                (Ve = !0),
                St(e, t, n),
                (se = r),
                (Ve = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !me &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        a = i.destroy;
                    (i = i.tag),
                        a !== void 0 && (i & 2 || i & 4) && ll(n, t, a),
                        (o = o.next);
                } while (o !== r);
            }
            St(e, t, n);
            break;
        case 1:
            if (
                !me &&
                (Tn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (l) {
                    Z(n, t, l);
                }
            St(e, t, n);
            break;
        case 21:
            St(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((me = (r = me) || n.memoizedState !== null),
                  St(e, t, n),
                  (me = r))
                : St(e, t, n);
            break;
        default:
            St(e, t, n);
    }
}
function Cu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Zh()),
            t.forEach(function (r) {
                var o = lm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function We(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    a = t,
                    l = a;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (se = l.stateNode), (Ve = !1);
                            break e;
                        case 3:
                            (se = l.stateNode.containerInfo), (Ve = !0);
                            break e;
                        case 4:
                            (se = l.stateNode.containerInfo), (Ve = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (se === null) throw Error(k(160));
                of(i, a, o), (se = null), (Ve = !1);
                var s = o.alternate;
                s !== null && (s.return = null), (o.return = null);
            } catch (u) {
                Z(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) af(t, e), (t = t.sibling);
}
function af(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((We(t, e), Xe(e), r & 4)) {
                try {
                    vr(3, e, e.return), Si(3, e);
                } catch (g) {
                    Z(e, e.return, g);
                }
                try {
                    vr(5, e, e.return);
                } catch (g) {
                    Z(e, e.return, g);
                }
            }
            break;
        case 1:
            We(t, e), Xe(e), r & 512 && n !== null && Tn(n, n.return);
            break;
        case 5:
            if (
                (We(t, e),
                Xe(e),
                r & 512 && n !== null && Tn(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    Er(o, '');
                } catch (g) {
                    Z(e, e.return, g);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    a = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        l === 'input' &&
                            i.type === 'radio' &&
                            i.name != null &&
                            Tc(o, i),
                            Fa(l, a);
                        var u = Fa(l, i);
                        for (a = 0; a < s.length; a += 2) {
                            var f = s[a],
                                m = s[a + 1];
                            f === 'style'
                                ? Mc(o, m)
                                : f === 'dangerouslySetInnerHTML'
                                ? Oc(o, m)
                                : f === 'children'
                                ? Er(o, m)
                                : El(o, f, m, u);
                        }
                        switch (l) {
                            case 'input':
                                Oa(o, i);
                                break;
                            case 'textarea':
                                Pc(o, i);
                                break;
                            case 'select':
                                var p = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var v = i.value;
                                v != null
                                    ? An(o, !!i.multiple, v, !1)
                                    : p !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? An(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : An(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : '',
                                                !1
                                            ));
                        }
                        o[zr] = i;
                    } catch (g) {
                        Z(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((We(t, e), Xe(e), r & 4)) {
                if (e.stateNode === null) throw Error(k(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (g) {
                    Z(e, e.return, g);
                }
            }
            break;
        case 3:
            if (
                (We(t, e),
                Xe(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Ar(t.containerInfo);
                } catch (g) {
                    Z(e, e.return, g);
                }
            break;
        case 4:
            We(t, e), Xe(e);
            break;
        case 13:
            We(t, e),
                Xe(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (rs = q())),
                r & 4 && Cu(e);
            break;
        case 22:
            if (
                ((f = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((me = (u = me) || f), We(t, e), (me = u))
                    : We(t, e),
                Xe(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !f && e.mode & 1)
                )
                    for (T = e, f = e.child; f !== null; ) {
                        for (m = T = f; T !== null; ) {
                            switch (((p = T), (v = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    vr(4, p, p.return);
                                    break;
                                case 1:
                                    Tn(p, p.return);
                                    var y = p.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        'function'
                                    ) {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (g) {
                                            Z(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    Tn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        _u(m);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = p), (T = v)) : _u(m);
                        }
                        f = f.sibling;
                    }
                e: for (f = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (f === null) {
                            f = m;
                            try {
                                (o = m.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == 'function'
                                              ? i.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (i.display = 'none'))
                                        : ((l = m.stateNode),
                                          (s = m.memoizedProps.style),
                                          (a =
                                              s != null &&
                                              s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (l.style.display = bc('display', a)));
                            } catch (g) {
                                Z(e, e.return, g);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (f === null)
                            try {
                                m.stateNode.nodeValue = u
                                    ? ''
                                    : m.memoizedProps;
                            } catch (g) {
                                Z(e, e.return, g);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        f === m && (f = null), (m = m.return);
                    }
                    f === m && (f = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            We(t, e), Xe(e), r & 4 && Cu(e);
            break;
        case 21:
            break;
        default:
            We(t, e), Xe(e);
    }
}
function Xe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (rf(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(k(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Er(o, ''), (r.flags &= -33));
                    var i = xu(e);
                    cl(e, i, o);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo,
                        l = xu(e);
                    ul(e, l, a);
                    break;
                default:
                    throw Error(k(161));
            }
        } catch (s) {
            Z(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function qh(e, t, n) {
    (T = e), lf(e);
}
function lf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
        var o = T,
            i = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || vo;
            if (!a) {
                var l = o.alternate,
                    s = (l !== null && l.memoizedState !== null) || me;
                l = vo;
                var u = me;
                if (((vo = a), (me = s) && !u))
                    for (T = o; T !== null; )
                        (a = T),
                            (s = a.child),
                            a.tag === 22 && a.memoizedState !== null
                                ? Tu(o)
                                : s !== null
                                ? ((s.return = a), (T = s))
                                : Tu(o);
                for (; i !== null; ) (T = i), lf(i), (i = i.sibling);
                (T = o), (vo = l), (me = u);
            }
            Eu(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (T = i))
                : Eu(e);
    }
}
function Eu(e) {
    for (; T !== null; ) {
        var t = T;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            me || Si(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !me)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : He(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && lu(t, i, r);
                            break;
                        case 3:
                            var a = t.updateQueue;
                            if (a !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                lu(t, a, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        s.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        s.src && (n.src = s.src);
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
                                var u = t.alternate;
                                if (u !== null) {
                                    var f = u.memoizedState;
                                    if (f !== null) {
                                        var m = f.dehydrated;
                                        m !== null && Ar(m);
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
                            throw Error(k(163));
                    }
                me || (t.flags & 512 && sl(t));
            } catch (p) {
                Z(t, t.return, p);
            }
        }
        if (t === e) {
            T = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function _u(e) {
    for (; T !== null; ) {
        var t = T;
        if (t === e) {
            T = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function Tu(e) {
    for (; T !== null; ) {
        var t = T;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Si(4, t);
                    } catch (s) {
                        Z(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == 'function') {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            Z(t, o, s);
                        }
                    }
                    var i = t.return;
                    try {
                        sl(t);
                    } catch (s) {
                        Z(t, i, s);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        sl(t);
                    } catch (s) {
                        Z(t, a, s);
                    }
            }
        } catch (s) {
            Z(t, t.return, s);
        }
        if (t === e) {
            T = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (T = l);
            break;
        }
        T = t.return;
    }
}
var em = Math.ceil,
    oi = wt.ReactCurrentDispatcher,
    ts = wt.ReactCurrentOwner,
    $e = wt.ReactCurrentBatchConfig,
    N = 0,
    le = null,
    te = null,
    ce = 0,
    Ae = 0,
    Pn = It(0),
    oe = 0,
    $r = null,
    tn = 0,
    ki = 0,
    ns = 0,
    wr = null,
    xe = null,
    rs = 0,
    Bn = 1 / 0,
    lt = null,
    ii = !1,
    dl = null,
    Rt = null,
    wo = !1,
    Tt = null,
    ai = 0,
    Sr = 0,
    fl = null,
    Mo = -1,
    Ro = 0;
function ve() {
    return N & 6 ? q() : Mo !== -1 ? Mo : (Mo = q());
}
function zt(e) {
    return e.mode & 1
        ? N & 2 && ce !== 0
            ? ce & -ce
            : Uh.transition !== null
            ? (Ro === 0 && (Ro = Wc()), Ro)
            : ((e = j),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Jc(e.type))),
              e)
        : 1;
}
function Qe(e, t, n, r) {
    if (50 < Sr) throw ((Sr = 0), (fl = null), Error(k(185)));
    Vr(e, n, r),
        (!(N & 2) || e !== le) &&
            (e === le && (!(N & 2) && (ki |= n), oe === 4 && Et(e, ce)),
            Te(e, r),
            n === 1 &&
                N === 0 &&
                !(t.mode & 1) &&
                ((Bn = q() + 500), yi && $t()));
}
function Te(e, t) {
    var n = e.callbackNode;
    Up(e, t);
    var r = Wo(e, e === le ? ce : 0);
    if (r === 0)
        n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Ls(n), t === 1))
            e.tag === 0 ? Nh(Pu.bind(null, e)) : md(Pu.bind(null, e)),
                Rh(function () {
                    !(N & 6) && $t();
                }),
                (n = null);
        else {
            switch (Hc(r)) {
                case 1:
                    n = Ol;
                    break;
                case 4:
                    n = Dc;
                    break;
                case 16:
                    n = Bo;
                    break;
                case 536870912:
                    n = Bc;
                    break;
                default:
                    n = Bo;
            }
            n = mf(n, sf.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function sf(e, t) {
    if (((Mo = -1), (Ro = 0), N & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (zn() && e.callbackNode !== n) return null;
    var r = Wo(e, e === le ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = li(e, r);
    else {
        t = r;
        var o = N;
        N |= 2;
        var i = cf();
        (le !== e || ce !== t) && ((lt = null), (Bn = q() + 500), Jt(e, t));
        do
            try {
                rm();
                break;
            } catch (l) {
                uf(e, l);
            }
        while (1);
        Bl(),
            (oi.current = i),
            (N = o),
            te !== null ? (t = 0) : ((le = null), (ce = 0), (t = oe));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = $a(e)), o !== 0 && ((r = o), (t = pl(e, o)))),
            t === 1)
        )
            throw ((n = $r), Jt(e, 0), Et(e, r), Te(e, q()), n);
        if (t === 6) Et(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !tm(o) &&
                    ((t = li(e, r)),
                    t === 2 &&
                        ((i = $a(e)), i !== 0 && ((r = i), (t = pl(e, i)))),
                    t === 1))
            )
                throw ((n = $r), Jt(e, 0), Et(e, r), Te(e, q()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Ht(e, xe, lt);
                    break;
                case 3:
                    if (
                        (Et(e, r),
                        (r & 130023424) === r && ((t = rs + 500 - q()), 10 < t))
                    ) {
                        if (Wo(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            ve(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Ga(Ht.bind(null, e, xe, lt), t);
                        break;
                    }
                    Ht(e, xe, lt);
                    break;
                case 4:
                    if ((Et(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var a = 31 - Ge(r);
                        (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = q() - r),
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
                                : 1960 * em(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ga(Ht.bind(null, e, xe, lt), r);
                        break;
                    }
                    Ht(e, xe, lt);
                    break;
                case 5:
                    Ht(e, xe, lt);
                    break;
                default:
                    throw Error(k(329));
            }
        }
    }
    return Te(e, q()), e.callbackNode === n ? sf.bind(null, e) : null;
}
function pl(e, t) {
    var n = wr;
    return (
        e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256),
        (e = li(e, t)),
        e !== 2 && ((t = xe), (xe = n), t !== null && hl(t)),
        e
    );
}
function hl(e) {
    xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function tm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Je(i(), o)) return !1;
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
function Et(e, t) {
    for (
        t &= ~ns,
            t &= ~ki,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ge(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Pu(e) {
    if (N & 6) throw Error(k(327));
    zn();
    var t = Wo(e, 0);
    if (!(t & 1)) return Te(e, q()), null;
    var n = li(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $a(e);
        r !== 0 && ((t = r), (n = pl(e, r)));
    }
    if (n === 1) throw ((n = $r), Jt(e, 0), Et(e, t), Te(e, q()), n);
    if (n === 6) throw Error(k(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ht(e, xe, lt),
        Te(e, q()),
        null
    );
}
function os(e, t) {
    var n = N;
    N |= 1;
    try {
        return e(t);
    } finally {
        (N = n), N === 0 && ((Bn = q() + 500), yi && $t());
    }
}
function nn(e) {
    Tt !== null && Tt.tag === 0 && !(N & 6) && zn();
    var t = N;
    N |= 1;
    var n = $e.transition,
        r = j;
    try {
        if ((($e.transition = null), (j = 1), e)) return e();
    } finally {
        (j = r), ($e.transition = n), (N = t), !(N & 6) && $t();
    }
}
function is() {
    (Ae = Pn.current), W(Pn);
}
function Jt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Mh(n)), te !== null))
        for (n = te.return; n !== null; ) {
            var r = n;
            switch (($l(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Qo();
                    break;
                case 3:
                    jn(), W(Ee), W(ge), Ql();
                    break;
                case 5:
                    Gl(r);
                    break;
                case 4:
                    jn();
                    break;
                case 13:
                    W(K);
                    break;
                case 19:
                    W(K);
                    break;
                case 10:
                    Wl(r.type._context);
                    break;
                case 22:
                case 23:
                    is();
            }
            n = n.return;
        }
    if (
        ((le = e),
        (te = e = Ft(e.current, null)),
        (ce = Ae = t),
        (oe = 0),
        ($r = null),
        (ns = ki = tn = 0),
        (xe = wr = null),
        Gt !== null)
    ) {
        for (t = 0; t < Gt.length; t++)
            if (((n = Gt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var a = i.next;
                    (i.next = o), (r.next = a);
                }
                n.pending = r;
            }
        Gt = null;
    }
    return e;
}
function uf(e, t) {
    do {
        var n = te;
        try {
            if ((Bl(), (Ao.current = ri), ni)) {
                for (var r = G.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                ni = !1;
            }
            if (
                ((en = 0),
                (ae = re = G = null),
                (yr = !1),
                (Nr = 0),
                (ts.current = null),
                n === null || n.return === null)
            ) {
                (oe = 1), ($r = t), (te = null);
                break;
            }
            e: {
                var i = e,
                    a = n.return,
                    l = n,
                    s = t;
                if (
                    ((t = ce),
                    (l.flags |= 32768),
                    s !== null &&
                        typeof s == 'object' &&
                        typeof s.then == 'function')
                ) {
                    var u = s,
                        f = l,
                        m = f.tag;
                    if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = f.alternate;
                        p
                            ? ((f.updateQueue = p.updateQueue),
                              (f.memoizedState = p.memoizedState),
                              (f.lanes = p.lanes))
                            : ((f.updateQueue = null),
                              (f.memoizedState = null));
                    }
                    var v = hu(a);
                    if (v !== null) {
                        (v.flags &= -257),
                            mu(v, a, l, i, t),
                            v.mode & 1 && pu(i, u, t),
                            (t = v),
                            (s = u);
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set();
                            g.add(s), (t.updateQueue = g);
                        } else y.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            pu(i, u, t), as();
                            break e;
                        }
                        s = Error(k(426));
                    }
                } else if (V && l.mode & 1) {
                    var _ = hu(a);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            mu(_, a, l, i, t),
                            jl(Dn(s, l));
                        break e;
                    }
                }
                (i = s = Dn(s, l)),
                    oe !== 4 && (oe = 2),
                    wr === null ? (wr = [i]) : wr.push(i),
                    (i = a);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var d = Vd(i, s, t);
                            au(i, d);
                            break e;
                        case 1:
                            l = s;
                            var c = i.type,
                                h = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    'function' ||
                                    (h !== null &&
                                        typeof h.componentDidCatch ==
                                            'function' &&
                                        (Rt === null || !Rt.has(h))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var w = Kd(i, l, t);
                                au(i, w);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            ff(n);
        } catch (S) {
            (t = S), te === n && n !== null && (te = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function cf() {
    var e = oi.current;
    return (oi.current = ri), e === null ? ri : e;
}
function as() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
        le === null || (!(tn & 268435455) && !(ki & 268435455)) || Et(le, ce);
}
function li(e, t) {
    var n = N;
    N |= 2;
    var r = cf();
    (le !== e || ce !== t) && ((lt = null), Jt(e, t));
    do
        try {
            nm();
            break;
        } catch (o) {
            uf(e, o);
        }
    while (1);
    if ((Bl(), (N = n), (oi.current = r), te !== null)) throw Error(k(261));
    return (le = null), (ce = 0), oe;
}
function nm() {
    for (; te !== null; ) df(te);
}
function rm() {
    for (; te !== null && !Ap(); ) df(te);
}
function df(e) {
    var t = hf(e.alternate, e, Ae);
    (e.memoizedProps = e.pendingProps),
        t === null ? ff(e) : (te = t),
        (ts.current = null);
}
function ff(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Jh(n, t)), n !== null)) {
                (n.flags &= 32767), (te = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (oe = 6), (te = null);
                return;
            }
        } else if (((n = Yh(n, t, Ae)), n !== null)) {
            te = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            te = t;
            return;
        }
        te = t = e;
    } while (t !== null);
    oe === 0 && (oe = 5);
}
function Ht(e, t, n) {
    var r = j,
        o = $e.transition;
    try {
        ($e.transition = null), (j = 1), om(e, t, n, r);
    } finally {
        ($e.transition = o), (j = r);
    }
    return null;
}
function om(e, t, n, r) {
    do zn();
    while (Tt !== null);
    if (N & 6) throw Error(k(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Ip(e, i),
        e === le && ((te = le = null), (ce = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            wo ||
            ((wo = !0),
            mf(Bo, function () {
                return zn(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = $e.transition), ($e.transition = null);
        var a = j;
        j = 1;
        var l = N;
        (N |= 4),
            (ts.current = null),
            Xh(e, n),
            af(n, e),
            Eh(Va),
            (Ho = !!Ha),
            (Va = Ha = null),
            (e.current = n),
            qh(n),
            Op(),
            (N = l),
            (j = a),
            ($e.transition = i);
    } else e.current = n;
    if (
        (wo && ((wo = !1), (Tt = e), (ai = o)),
        (i = e.pendingLanes),
        i === 0 && (Rt = null),
        Rp(n.stateNode),
        Te(e, q()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (ii) throw ((ii = !1), (e = dl), (dl = null), e);
    return (
        ai & 1 && e.tag !== 0 && zn(),
        (i = e.pendingLanes),
        i & 1 ? (e === fl ? Sr++ : ((Sr = 0), (fl = e))) : (Sr = 0),
        $t(),
        null
    );
}
function zn() {
    if (Tt !== null) {
        var e = Hc(ai),
            t = $e.transition,
            n = j;
        try {
            if ((($e.transition = null), (j = 16 > e ? 16 : e), Tt === null))
                var r = !1;
            else {
                if (((e = Tt), (Tt = null), (ai = 0), N & 6))
                    throw Error(k(331));
                var o = N;
                for (N |= 4, T = e.current; T !== null; ) {
                    var i = T,
                        a = i.child;
                    if (T.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (T = u; T !== null; ) {
                                    var f = T;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            vr(8, f, i);
                                    }
                                    var m = f.child;
                                    if (m !== null) (m.return = f), (T = m);
                                    else
                                        for (; T !== null; ) {
                                            f = T;
                                            var p = f.sibling,
                                                v = f.return;
                                            if ((nf(f), f === u)) {
                                                T = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = v), (T = p);
                                                break;
                                            }
                                            T = v;
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var _ = g.sibling;
                                        (g.sibling = null), (g = _);
                                    } while (g !== null);
                                }
                            }
                            T = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        (a.return = i), (T = a);
                    else
                        e: for (; T !== null; ) {
                            if (((i = T), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vr(9, i, i.return);
                                }
                            var d = i.sibling;
                            if (d !== null) {
                                (d.return = i.return), (T = d);
                                break e;
                            }
                            T = i.return;
                        }
                }
                var c = e.current;
                for (T = c; T !== null; ) {
                    a = T;
                    var h = a.child;
                    if (a.subtreeFlags & 2064 && h !== null)
                        (h.return = a), (T = h);
                    else
                        e: for (a = c; T !== null; ) {
                            if (((l = T), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Si(9, l);
                                    }
                                } catch (S) {
                                    Z(l, l.return, S);
                                }
                            if (l === a) {
                                T = null;
                                break e;
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                (w.return = l.return), (T = w);
                                break e;
                            }
                            T = l.return;
                        }
                }
                if (
                    ((N = o),
                    $t(),
                    ot && typeof ot.onPostCommitFiberRoot == 'function')
                )
                    try {
                        ot.onPostCommitFiberRoot(fi, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (j = n), ($e.transition = t);
        }
    }
    return !1;
}
function Au(e, t, n) {
    (t = Dn(n, t)),
        (t = Vd(e, t, 1)),
        (e = Mt(e, t, 1)),
        (t = ve()),
        e !== null && (Vr(e, 1, t), Te(e, t));
}
function Z(e, t, n) {
    if (e.tag === 3) Au(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Au(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (Rt === null || !Rt.has(r)))
                ) {
                    (e = Dn(n, e)),
                        (e = Kd(t, e, 1)),
                        (t = Mt(t, e, 1)),
                        (e = ve()),
                        t !== null && (Vr(t, 1, e), Te(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function im(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ve()),
        (e.pingedLanes |= e.suspendedLanes & n),
        le === e &&
            (ce & n) === n &&
            (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > q() - rs)
                ? Jt(e, 0)
                : (ns |= n)),
        Te(e, t);
}
function pf(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = so), (so <<= 1), !(so & 130023424) && (so = 4194304))
            : (t = 1));
    var n = ve();
    (e = gt(e, t)), e !== null && (Vr(e, t, n), Te(e, n));
}
function am(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), pf(e, n);
}
function lm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314));
    }
    r !== null && r.delete(t), pf(e, n);
}
var hf;
hf = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Ce = !1), Qh(e, t, n);
            Ce = !!(e.flags & 131072);
        }
    else (Ce = !1), V && t.flags & 1048576 && gd(t, Zo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            bo(e, t), (e = t.pendingProps);
            var o = Un(t, ge.current);
            Rn(t, n), (o = Jl(null, t, r, e, o, n));
            var i = Zl();
            return (
                (t.flags |= 1),
                typeof o == 'object' &&
                o !== null &&
                typeof o.render == 'function' &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      _e(r) ? ((i = !0), Yo(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      Vl(t),
                      (o.updater = vi),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      el(t, r, e, n),
                      (t = rl(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      V && i && Il(t),
                      ye(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (bo(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = um(r)),
                    (e = He(r, e)),
                    o)
                ) {
                    case 0:
                        t = nl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = vu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = gu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = yu(null, t, r, He(r.type, e), n);
                        break e;
                }
                throw Error(k(306, r, ''));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : He(r, o)),
                nl(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : He(r, o)),
                vu(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((Jd(t), e === null)) throw Error(k(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    Sd(e, t),
                    ei(t, r, null, n);
                var a = t.memoizedState;
                if (((r = a.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries:
                                a.pendingSuspenseBoundaries,
                            transitions: a.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = Dn(Error(k(423)), t)), (t = wu(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = Dn(Error(k(424)), t)), (t = wu(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            be = bt(t.stateNode.containerInfo.firstChild),
                                Me = t,
                                V = !0,
                                Ke = null,
                                n = Ed(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((In(), r === o)) {
                        t = yt(e, t, n);
                        break e;
                    }
                    ye(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                _d(t),
                e === null && Za(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (a = o.children),
                Ka(r, o)
                    ? (a = null)
                    : i !== null && Ka(r, i) && (t.flags |= 32),
                Yd(e, t),
                ye(e, t, a, n),
                t.child
            );
        case 6:
            return e === null && Za(t), null;
        case 13:
            return Zd(e, t, n);
        case 4:
            return (
                Kl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = $n(t, null, r, n)) : ye(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : He(r, o)),
                gu(e, t, r, o, n)
            );
        case 7:
            return ye(e, t, t.pendingProps, n), t.child;
        case 8:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (a = o.value),
                    D(Xo, r._currentValue),
                    (r._currentValue = a),
                    i !== null)
                )
                    if (Je(i.value, a)) {
                        if (i.children === o.children && !Ee.current) {
                            t = yt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var l = i.dependencies;
                            if (l !== null) {
                                a = i.child;
                                for (var s = l.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            (s = ft(-1, n & -n)), (s.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null
                                                    ? (s.next = s)
                                                    : ((s.next = f.next),
                                                      (f.next = s)),
                                                    (u.pending = s);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (s = i.alternate),
                                            s !== null && (s.lanes |= n),
                                            Xa(i.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (i.tag === 10)
                                a = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((a = i.return), a === null))
                                    throw Error(k(341));
                                (a.lanes |= n),
                                    (l = a.alternate),
                                    l !== null && (l.lanes |= n),
                                    Xa(a, n, t),
                                    (a = i.sibling);
                            } else a = i.child;
                            if (a !== null) a.return = i;
                            else
                                for (a = i; a !== null; ) {
                                    if (a === t) {
                                        a = null;
                                        break;
                                    }
                                    if (((i = a.sibling), i !== null)) {
                                        (i.return = a.return), (a = i);
                                        break;
                                    }
                                    a = a.return;
                                }
                            i = a;
                        }
                ye(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Rn(t, n),
                (o = je(o)),
                (r = r(o)),
                (t.flags |= 1),
                ye(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = He(r, t.pendingProps)),
                (o = He(r.type, o)),
                yu(e, t, r, o, n)
            );
        case 15:
            return Gd(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : He(r, o)),
                bo(e, t),
                (t.tag = 1),
                _e(r) ? ((e = !0), Yo(t)) : (e = !1),
                Rn(t, n),
                xd(t, r, o),
                el(t, r, o, n),
                rl(null, t, r, !0, e, n)
            );
        case 19:
            return Xd(e, t, n);
        case 22:
            return Qd(e, t, n);
    }
    throw Error(k(156, t.tag));
};
function mf(e, t) {
    return jc(e, t);
}
function sm(e, t, n, r) {
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
function Ie(e, t, n, r) {
    return new sm(e, t, n, r);
}
function ls(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function um(e) {
    if (typeof e == 'function') return ls(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Tl)) return 11;
        if (e === Pl) return 14;
    }
    return 2;
}
function Ft(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ie(e.tag, t, e.key, e.mode)),
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
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function zo(e, t, n, r, o, i) {
    var a = 2;
    if (((r = e), typeof e == 'function')) ls(e) && (a = 1);
    else if (typeof e == 'string') a = 5;
    else
        e: switch (e) {
            case yn:
                return Zt(n.children, o, i, t);
            case _l:
                (a = 8), (o |= 8);
                break;
            case Ea:
                return (
                    (e = Ie(12, n, t, o | 2)),
                    (e.elementType = Ea),
                    (e.lanes = i),
                    e
                );
            case _a:
                return (
                    (e = Ie(13, n, t, o)),
                    (e.elementType = _a),
                    (e.lanes = i),
                    e
                );
            case Ta:
                return (
                    (e = Ie(19, n, t, o)),
                    (e.elementType = Ta),
                    (e.lanes = i),
                    e
                );
            case Cc:
                return xi(n, o, i, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case kc:
                            a = 10;
                            break e;
                        case xc:
                            a = 9;
                            break e;
                        case Tl:
                            a = 11;
                            break e;
                        case Pl:
                            a = 14;
                            break e;
                        case kt:
                            (a = 16), (r = null);
                            break e;
                    }
                throw Error(k(130, e == null ? e : typeof e, ''));
        }
    return (
        (t = Ie(a, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Zt(e, t, n, r) {
    return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function xi(e, t, n, r) {
    return (
        (e = Ie(22, e, r, t)),
        (e.elementType = Cc),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function ga(e, t, n) {
    return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function ya(e, t, n) {
    return (
        (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function cm(e, t, n, r, o) {
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
        (this.eventTimes = Zi(0)),
        (this.expirationTimes = Zi(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Zi(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function ss(e, t, n, r, o, i, a, l, s) {
    return (
        (e = new cm(e, t, n, l, s)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Ie(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Vl(i),
        e
    );
}
function dm(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gn,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function gf(e) {
    if (!e) return Nt;
    e = e._reactInternals;
    e: {
        if (an(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (_e(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(k(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_e(n)) return hd(e, n, t);
    }
    return t;
}
function yf(e, t, n, r, o, i, a, l, s) {
    return (
        (e = ss(n, r, !0, e, o, i, a, l, s)),
        (e.context = gf(null)),
        (n = e.current),
        (r = ve()),
        (o = zt(n)),
        (i = ft(r, o)),
        (i.callback = t ?? null),
        Mt(n, i, o),
        (e.current.lanes = o),
        Vr(e, o, r),
        Te(e, r),
        e
    );
}
function Ci(e, t, n, r) {
    var o = t.current,
        i = ve(),
        a = zt(o);
    return (
        (n = gf(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ft(i, a)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Mt(o, t, a)),
        e !== null && (Qe(e, o, a, i), Po(e, o, a)),
        a
    );
}
function si(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Ou(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function us(e, t) {
    Ou(e, t), (e = e.alternate) && Ou(e, t);
}
function fm() {
    return null;
}
var vf =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function cs(e) {
    this._internalRoot = e;
}
Ei.prototype.render = cs.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Ci(e, t, null, null);
};
Ei.prototype.unmount = cs.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nn(function () {
            Ci(null, e, null, null);
        }),
            (t[mt] = null);
    }
};
function Ei(e) {
    this._internalRoot = e;
}
Ei.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Gc();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
        Ct.splice(n, 0, e), n === 0 && Yc(e);
    }
};
function ds(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _i(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function bu() {}
function pm(e, t, n, r, o) {
    if (o) {
        if (typeof r == 'function') {
            var i = r;
            r = function () {
                var u = si(a);
                i.call(u);
            };
        }
        var a = yf(t, r, e, 0, null, !1, !1, '', bu);
        return (
            (e._reactRootContainer = a),
            (e[mt] = a.current),
            Mr(e.nodeType === 8 ? e.parentNode : e),
            nn(),
            a
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == 'function') {
        var l = r;
        r = function () {
            var u = si(s);
            l.call(u);
        };
    }
    var s = ss(e, 0, !1, null, null, !1, !1, '', bu);
    return (
        (e._reactRootContainer = s),
        (e[mt] = s.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        nn(function () {
            Ci(t, s, n, r);
        }),
        s
    );
}
function Ti(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == 'function') {
            var l = o;
            o = function () {
                var s = si(a);
                l.call(s);
            };
        }
        Ci(t, a, e, o);
    } else a = pm(n, t, e, o, r);
    return si(a);
}
Vc = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ur(t.pendingLanes);
                n !== 0 &&
                    (bl(t, n | 1),
                    Te(t, q()),
                    !(N & 6) && ((Bn = q() + 500), $t()));
            }
            break;
        case 13:
            nn(function () {
                var r = gt(e, 1);
                if (r !== null) {
                    var o = ve();
                    Qe(r, e, 1, o);
                }
            }),
                us(e, 1);
    }
};
Ml = function (e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = ve();
            Qe(t, e, 134217728, n);
        }
        us(e, 134217728);
    }
};
Kc = function (e) {
    if (e.tag === 13) {
        var t = zt(e),
            n = gt(e, t);
        if (n !== null) {
            var r = ve();
            Qe(n, e, t, r);
        }
        us(e, t);
    }
};
Gc = function () {
    return j;
};
Qc = function (e, t) {
    var n = j;
    try {
        return (j = e), t();
    } finally {
        j = n;
    }
};
Na = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Oa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = gi(r);
                        if (!o) throw Error(k(90));
                        _c(r), Oa(r, o);
                    }
                }
            }
            break;
        case 'textarea':
            Pc(e, n);
            break;
        case 'select':
            (t = n.value), t != null && An(e, !!n.multiple, t, !1);
    }
};
Fc = os;
Lc = nn;
var hm = { usingClientEntryPoint: !1, Events: [Gr, kn, gi, Rc, zc, os] },
    rr = {
        findFiberByHostInstance: Kt,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    mm = {
        bundleType: rr.bundleType,
        version: rr.version,
        rendererPackageName: rr.rendererPackageName,
        rendererConfig: rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: wt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Ic(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: rr.findFiberByHostInstance || fm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var So = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!So.isDisabled && So.supportsFiber)
        try {
            (fi = So.inject(mm)), (ot = So);
        } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
Fe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ds(t)) throw Error(k(200));
    return dm(e, t, null, n);
};
Fe.createRoot = function (e, t) {
    if (!ds(e)) throw Error(k(299));
    var n = !1,
        r = '',
        o = vf;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = ss(e, 1, !1, null, null, n, !1, r, o)),
        (e[mt] = t.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        new cs(t)
    );
};
Fe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(k(188))
            : ((e = Object.keys(e).join(',')), Error(k(268, e)));
    return (e = Ic(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
    return nn(e);
};
Fe.hydrate = function (e, t, n) {
    if (!_i(t)) throw Error(k(200));
    return Ti(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
    if (!ds(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = '',
        a = vf;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = yf(t, null, e, 1, n ?? null, o, !1, i, a)),
        (e[mt] = t.current),
        Mr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ei(t);
};
Fe.render = function (e, t, n) {
    if (!_i(t)) throw Error(k(200));
    return Ti(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
    if (!_i(e)) throw Error(k(40));
    return e._reactRootContainer
        ? (nn(function () {
              Ti(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mt] = null);
              });
          }),
          !0)
        : !1;
};
Fe.unstable_batchedUpdates = os;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!_i(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Ti(e, t, n, !1, r);
};
Fe.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
    function t() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (n) {
                console.error(n);
            }
    }
    t(), (e.exports = Fe);
})(fp);
var Mu = xr;
(ka.createRoot = Mu.createRoot), (ka.hydrateRoot = Mu.hydrateRoot);
const gm = { black: '#000', white: '#fff' },
    jr = gm,
    ym = {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
    },
    dn = ym,
    vm = {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
    },
    fn = vm,
    wm = {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
    },
    pn = wm,
    Sm = {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
    },
    hn = Sm,
    km = {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
    },
    mn = km,
    xm = {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
    },
    or = xm,
    Cm = {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    Em = Cm;
function b() {
    return (
        (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        b.apply(this, arguments)
    );
}
function Vt(e) {
    return e !== null && typeof e == 'object' && e.constructor === Object;
}
function wf(e) {
    if (!Vt(e)) return e;
    const t = {};
    return (
        Object.keys(e).forEach((n) => {
            t[n] = wf(e[n]);
        }),
        t
    );
}
function pt(e, t, n = { clone: !0 }) {
    const r = n.clone ? b({}, e) : e;
    return (
        Vt(e) &&
            Vt(t) &&
            Object.keys(t).forEach((o) => {
                o !== '__proto__' &&
                    (Vt(t[o]) && o in e && Vt(e[o])
                        ? (r[o] = pt(e[o], t[o], n))
                        : n.clone
                        ? (r[o] = Vt(t[o]) ? wf(t[o]) : t[o])
                        : (r[o] = t[o]));
            }),
        r
    );
}
function Wn(e) {
    let t = 'https://mui.com/production-error/?code=' + e;
    for (let n = 1; n < arguments.length; n += 1)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified MUI error #' + e + '; visit ' + t + ' for the full message.'
    );
}
function Ye(e) {
    if (typeof e != 'string') throw new Error(Wn(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function Sf(e, t) {
    const n = b({}, t);
    return (
        Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/))
                n[r] = b({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
                const o = e[r] || {},
                    i = t[r];
                (n[r] = {}),
                    !i || !Object.keys(i)
                        ? (n[r] = o)
                        : !o || !Object.keys(o)
                        ? (n[r] = i)
                        : ((n[r] = b({}, i)),
                          Object.keys(o).forEach((a) => {
                              n[r][a] = Sf(o[a], i[a]);
                          }));
            } else n[r] === void 0 && (n[r] = e[r]);
        }),
        n
    );
}
function Pi(e, t, n) {
    const r = {};
    return (
        Object.keys(e).forEach((o) => {
            r[o] = e[o]
                .reduce(
                    (i, a) => (
                        a && (i.push(t(a)), n && n[a] && i.push(n[a])), i
                    ),
                    []
                )
                .join(' ');
        }),
        r
    );
}
const Ru = (e) => e,
    _m = () => {
        let e = Ru;
        return {
            configure(t) {
                e = t;
            },
            generate(t) {
                return e(t);
            },
            reset() {
                e = Ru;
            },
        };
    },
    Tm = _m(),
    Pm = Tm,
    Am = {
        active: 'active',
        checked: 'checked',
        completed: 'completed',
        disabled: 'disabled',
        readOnly: 'readOnly',
        error: 'error',
        expanded: 'expanded',
        focused: 'focused',
        focusVisible: 'focusVisible',
        required: 'required',
        selected: 'selected',
    };
function Yr(e, t, n = 'Mui') {
    const r = Am[t];
    return r ? `${n}-${r}` : `${Pm.generate(e)}-${t}`;
}
function Ai(e, t, n = 'Mui') {
    const r = {};
    return (
        t.forEach((o) => {
            r[o] = Yr(e, o, n);
        }),
        r
    );
}
function we(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        i;
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
function kf(e) {
    var t = Object.create(null);
    return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
}
var Om =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    bm = kf(function (e) {
        return (
            Om.test(e) ||
            (e.charCodeAt(0) === 111 &&
                e.charCodeAt(1) === 110 &&
                e.charCodeAt(2) < 91)
        );
    });
function Mm(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t];
}
function Rm(e) {
    var t = document.createElement('style');
    return (
        t.setAttribute('data-emotion', e.key),
        e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
        t.appendChild(document.createTextNode('')),
        t.setAttribute('data-s', ''),
        t
    );
}
var zm = (function () {
        function e(n) {
            var r = this;
            (this._insertTag = function (o) {
                var i;
                r.tags.length === 0
                    ? r.insertionPoint
                        ? (i = r.insertionPoint.nextSibling)
                        : r.prepend
                        ? (i = r.container.firstChild)
                        : (i = r.before)
                    : (i = r.tags[r.tags.length - 1].nextSibling),
                    r.container.insertBefore(o, i),
                    r.tags.push(o);
            }),
                (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = n.nonce),
                (this.key = n.key),
                (this.container = n.container),
                (this.prepend = n.prepend),
                (this.insertionPoint = n.insertionPoint),
                (this.before = null);
        }
        var t = e.prototype;
        return (
            (t.hydrate = function (r) {
                r.forEach(this._insertTag);
            }),
            (t.insert = function (r) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                    this._insertTag(Rm(this));
                var o = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var i = Mm(o);
                    try {
                        i.insertRule(r, i.cssRules.length);
                    } catch {}
                } else o.appendChild(document.createTextNode(r));
                this.ctr++;
            }),
            (t.flush = function () {
                this.tags.forEach(function (r) {
                    return r.parentNode && r.parentNode.removeChild(r);
                }),
                    (this.tags = []),
                    (this.ctr = 0);
            }),
            e
        );
    })(),
    he = '-ms-',
    ui = '-moz-',
    U = '-webkit-',
    xf = 'comm',
    fs = 'rule',
    ps = 'decl',
    Fm = '@import',
    Cf = '@keyframes',
    Lm = Math.abs,
    Oi = String.fromCharCode,
    Nm = Object.assign;
function Um(e, t) {
    return ue(e, 0) ^ 45
        ? (((((((t << 2) ^ ue(e, 0)) << 2) ^ ue(e, 1)) << 2) ^ ue(e, 2)) << 2) ^
              ue(e, 3)
        : 0;
}
function Ef(e) {
    return e.trim();
}
function Im(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
    return e.replace(t, n);
}
function ml(e, t) {
    return e.indexOf(t);
}
function ue(e, t) {
    return e.charCodeAt(t) | 0;
}
function Dr(e, t, n) {
    return e.slice(t, n);
}
function et(e) {
    return e.length;
}
function hs(e) {
    return e.length;
}
function ko(e, t) {
    return t.push(e), e;
}
function $m(e, t) {
    return e.map(t).join('');
}
var bi = 1,
    Hn = 1,
    _f = 0,
    Pe = 0,
    ee = 0,
    Yn = '';
function Mi(e, t, n, r, o, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: bi,
        column: Hn,
        length: a,
        return: '',
    };
}
function ir(e, t) {
    return Nm(
        Mi('', null, null, '', null, null, 0),
        e,
        { length: -e.length },
        t
    );
}
function jm() {
    return ee;
}
function Dm() {
    return (
        (ee = Pe > 0 ? ue(Yn, --Pe) : 0),
        Hn--,
        ee === 10 && ((Hn = 1), bi--),
        ee
    );
}
function Re() {
    return (
        (ee = Pe < _f ? ue(Yn, Pe++) : 0),
        Hn++,
        ee === 10 && ((Hn = 1), bi++),
        ee
    );
}
function at() {
    return ue(Yn, Pe);
}
function Fo() {
    return Pe;
}
function Jr(e, t) {
    return Dr(Yn, e, t);
}
function Br(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function Tf(e) {
    return (bi = Hn = 1), (_f = et((Yn = e))), (Pe = 0), [];
}
function Pf(e) {
    return (Yn = ''), e;
}
function Lo(e) {
    return Ef(Jr(Pe - 1, gl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bm(e) {
    for (; (ee = at()) && ee < 33; ) Re();
    return Br(e) > 2 || Br(ee) > 3 ? '' : ' ';
}
function Wm(e, t) {
    for (
        ;
        --t &&
        Re() &&
        !(ee < 48 || ee > 102 || (ee > 57 && ee < 65) || (ee > 70 && ee < 97));

    );
    return Jr(e, Fo() + (t < 6 && at() == 32 && Re() == 32));
}
function gl(e) {
    for (; Re(); )
        switch (ee) {
            case e:
                return Pe;
            case 34:
            case 39:
                e !== 34 && e !== 39 && gl(ee);
                break;
            case 40:
                e === 41 && gl(e);
                break;
            case 92:
                Re();
                break;
        }
    return Pe;
}
function Hm(e, t) {
    for (; Re() && e + ee !== 47 + 10; )
        if (e + ee === 42 + 42 && at() === 47) break;
    return '/*' + Jr(t, Pe - 1) + '*' + Oi(e === 47 ? e : Re());
}
function Vm(e) {
    for (; !Br(at()); ) Re();
    return Jr(e, Pe);
}
function Km(e) {
    return Pf(No('', null, null, null, [''], (e = Tf(e)), 0, [0], e));
}
function No(e, t, n, r, o, i, a, l, s) {
    for (
        var u = 0,
            f = 0,
            m = a,
            p = 0,
            v = 0,
            y = 0,
            g = 1,
            _ = 1,
            d = 1,
            c = 0,
            h = '',
            w = o,
            S = i,
            E = r,
            x = h;
        _;

    )
        switch (((y = c), (c = Re()))) {
            case 40:
                if (y != 108 && ue(x, m - 1) == 58) {
                    ml((x += I(Lo(c), '&', '&\f')), '&\f') != -1 && (d = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                x += Lo(c);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                x += Bm(y);
                break;
            case 92:
                x += Wm(Fo() - 1, 7);
                continue;
            case 47:
                switch (at()) {
                    case 42:
                    case 47:
                        ko(Gm(Hm(Re(), Fo()), t, n), s);
                        break;
                    default:
                        x += '/';
                }
                break;
            case 123 * g:
                l[u++] = et(x) * d;
            case 125 * g:
            case 59:
            case 0:
                switch (c) {
                    case 0:
                    case 125:
                        _ = 0;
                    case 59 + f:
                        v > 0 &&
                            et(x) - m &&
                            ko(
                                v > 32
                                    ? Fu(x + ';', r, n, m - 1)
                                    : Fu(I(x, ' ', '') + ';', r, n, m - 2),
                                s
                            );
                        break;
                    case 59:
                        x += ';';
                    default:
                        if (
                            (ko(
                                (E = zu(
                                    x,
                                    t,
                                    n,
                                    u,
                                    f,
                                    o,
                                    l,
                                    h,
                                    (w = []),
                                    (S = []),
                                    m
                                )),
                                i
                            ),
                            c === 123)
                        )
                            if (f === 0) No(x, t, E, E, w, i, m, l, S);
                            else
                                switch (
                                    p === 99 && ue(x, 3) === 110 ? 100 : p
                                ) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        No(
                                            e,
                                            E,
                                            E,
                                            r &&
                                                ko(
                                                    zu(
                                                        e,
                                                        E,
                                                        E,
                                                        0,
                                                        0,
                                                        o,
                                                        l,
                                                        h,
                                                        o,
                                                        (w = []),
                                                        m
                                                    ),
                                                    S
                                                ),
                                            o,
                                            S,
                                            m,
                                            l,
                                            r ? w : S
                                        );
                                        break;
                                    default:
                                        No(x, E, E, E, [''], S, 0, l, S);
                                }
                }
                (u = f = v = 0), (g = d = 1), (h = x = ''), (m = a);
                break;
            case 58:
                (m = 1 + et(x)), (v = y);
            default:
                if (g < 1) {
                    if (c == 123) --g;
                    else if (c == 125 && g++ == 0 && Dm() == 125) continue;
                }
                switch (((x += Oi(c)), c * g)) {
                    case 38:
                        d = f > 0 ? 1 : ((x += '\f'), -1);
                        break;
                    case 44:
                        (l[u++] = (et(x) - 1) * d), (d = 1);
                        break;
                    case 64:
                        at() === 45 && (x += Lo(Re())),
                            (p = at()),
                            (f = m = et((h = x += Vm(Fo())))),
                            c++;
                        break;
                    case 45:
                        y === 45 && et(x) == 2 && (g = 0);
                }
        }
    return i;
}
function zu(e, t, n, r, o, i, a, l, s, u, f) {
    for (
        var m = o - 1, p = o === 0 ? i : [''], v = hs(p), y = 0, g = 0, _ = 0;
        y < r;
        ++y
    )
        for (
            var d = 0, c = Dr(e, m + 1, (m = Lm((g = a[y])))), h = e;
            d < v;
            ++d
        )
            (h = Ef(g > 0 ? p[d] + ' ' + c : I(c, /&\f/g, p[d]))) &&
                (s[_++] = h);
    return Mi(e, t, n, o === 0 ? fs : l, s, u, f);
}
function Gm(e, t, n) {
    return Mi(e, t, n, xf, Oi(jm()), Dr(e, 2, -2), 0);
}
function Fu(e, t, n, r) {
    return Mi(e, t, n, ps, Dr(e, 0, r), Dr(e, r + 1, -1), r);
}
function Fn(e, t) {
    for (var n = '', r = hs(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
    return n;
}
function Qm(e, t, n, r) {
    switch (e.type) {
        case Fm:
        case ps:
            return (e.return = e.return || e.value);
        case xf:
            return '';
        case Cf:
            return (e.return = e.value + '{' + Fn(e.children, r) + '}');
        case fs:
            e.value = e.props.join(',');
    }
    return et((n = Fn(e.children, r)))
        ? (e.return = e.value + '{' + n + '}')
        : '';
}
function Ym(e) {
    var t = hs(e);
    return function (n, r, o, i) {
        for (var a = '', l = 0; l < t; l++) a += e[l](n, r, o, i) || '';
        return a;
    };
}
function Jm(e) {
    return function (t) {
        t.root || ((t = t.return) && e(t));
    };
}
var Zm = function (t, n, r) {
        for (
            var o = 0, i = 0;
            (o = i), (i = at()), o === 38 && i === 12 && (n[r] = 1), !Br(i);

        )
            Re();
        return Jr(t, Pe);
    },
    Xm = function (t, n) {
        var r = -1,
            o = 44;
        do
            switch (Br(o)) {
                case 0:
                    o === 38 && at() === 12 && (n[r] = 1),
                        (t[r] += Zm(Pe - 1, n, r));
                    break;
                case 2:
                    t[r] += Lo(o);
                    break;
                case 4:
                    if (o === 44) {
                        (t[++r] = at() === 58 ? '&\f' : ''),
                            (n[r] = t[r].length);
                        break;
                    }
                default:
                    t[r] += Oi(o);
            }
        while ((o = Re()));
        return t;
    },
    qm = function (t, n) {
        return Pf(Xm(Tf(t), n));
    },
    Lu = new WeakMap(),
    eg = function (t) {
        if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
            for (
                var n = t.value,
                    r = t.parent,
                    o = t.column === r.column && t.line === r.line;
                r.type !== 'rule';

            )
                if (((r = r.parent), !r)) return;
            if (
                !(
                    t.props.length === 1 &&
                    n.charCodeAt(0) !== 58 &&
                    !Lu.get(r)
                ) &&
                !o
            ) {
                Lu.set(t, !0);
                for (
                    var i = [], a = qm(n, i), l = r.props, s = 0, u = 0;
                    s < a.length;
                    s++
                )
                    for (var f = 0; f < l.length; f++, u++)
                        t.props[u] = i[s]
                            ? a[s].replace(/&\f/g, l[f])
                            : l[f] + ' ' + a[s];
            }
        }
    },
    tg = function (t) {
        if (t.type === 'decl') {
            var n = t.value;
            n.charCodeAt(0) === 108 &&
                n.charCodeAt(2) === 98 &&
                ((t.return = ''), (t.value = ''));
        }
    };
function Af(e, t) {
    switch (Um(e, t)) {
        case 5103:
            return U + 'print-' + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return U + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return U + e + ui + e + he + e + e;
        case 6828:
        case 4268:
            return U + e + he + e + e;
        case 6165:
            return U + e + he + 'flex-' + e + e;
        case 5187:
            return (
                U +
                e +
                I(e, /(\w+).+(:[^]+)/, U + 'box-$1$2' + he + 'flex-$1$2') +
                e
            );
        case 5443:
            return U + e + he + 'flex-item-' + I(e, /flex-|-self/, '') + e;
        case 4675:
            return (
                U +
                e +
                he +
                'flex-line-pack' +
                I(e, /align-content|flex-|-self/, '') +
                e
            );
        case 5548:
            return U + e + he + I(e, 'shrink', 'negative') + e;
        case 5292:
            return U + e + he + I(e, 'basis', 'preferred-size') + e;
        case 6060:
            return (
                U +
                'box-' +
                I(e, '-grow', '') +
                U +
                e +
                he +
                I(e, 'grow', 'positive') +
                e
            );
        case 4554:
            return U + I(e, /([^-])(transform)/g, '$1' + U + '$2') + e;
        case 6187:
            return (
                I(
                    I(I(e, /(zoom-|grab)/, U + '$1'), /(image-set)/, U + '$1'),
                    e,
                    ''
                ) + e
            );
        case 5495:
        case 3959:
            return I(e, /(image-set\([^]*)/, U + '$1$`$1');
        case 4968:
            return (
                I(
                    I(
                        e,
                        /(.+:)(flex-)?(.*)/,
                        U + 'box-pack:$3' + he + 'flex-pack:$3'
                    ),
                    /s.+-b[^;]+/,
                    'justify'
                ) +
                U +
                e +
                e
            );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return I(e, /(.+)-inline(.+)/, U + '$1$2') + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (et(e) - 1 - t > 6)
                switch (ue(e, t + 1)) {
                    case 109:
                        if (ue(e, t + 4) !== 45) break;
                    case 102:
                        return (
                            I(
                                e,
                                /(.+:)(.+)-([^]+)/,
                                '$1' +
                                    U +
                                    '$2-$3$1' +
                                    ui +
                                    (ue(e, t + 3) == 108 ? '$3' : '$2-$3')
                            ) + e
                        );
                    case 115:
                        return ~ml(e, 'stretch')
                            ? Af(I(e, 'stretch', 'fill-available'), t) + e
                            : e;
                }
            break;
        case 4949:
            if (ue(e, t + 1) !== 115) break;
        case 6444:
            switch (ue(e, et(e) - 3 - (~ml(e, '!important') && 10))) {
                case 107:
                    return I(e, ':', ':' + U) + e;
                case 101:
                    return (
                        I(
                            e,
                            /(.+:)([^;!]+)(;|!.+)?/,
                            '$1' +
                                U +
                                (ue(e, 14) === 45 ? 'inline-' : '') +
                                'box$3$1' +
                                U +
                                '$2$3$1' +
                                he +
                                '$2box$3'
                        ) + e
                    );
            }
            break;
        case 5936:
            switch (ue(e, t + 11)) {
                case 114:
                    return U + e + he + I(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
                case 108:
                    return U + e + he + I(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
                case 45:
                    return U + e + he + I(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
            return U + e + he + e + e;
    }
    return e;
}
var ng = function (t, n, r, o) {
        if (t.length > -1 && !t.return)
            switch (t.type) {
                case ps:
                    t.return = Af(t.value, t.length);
                    break;
                case Cf:
                    return Fn([ir(t, { value: I(t.value, '@', '@' + U) })], o);
                case fs:
                    if (t.length)
                        return $m(t.props, function (i) {
                            switch (Im(i, /(::plac\w+|:read-\w+)/)) {
                                case ':read-only':
                                case ':read-write':
                                    return Fn(
                                        [
                                            ir(t, {
                                                props: [
                                                    I(
                                                        i,
                                                        /:(read-\w+)/,
                                                        ':' + ui + '$1'
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                                case '::placeholder':
                                    return Fn(
                                        [
                                            ir(t, {
                                                props: [
                                                    I(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ':' + U + 'input-$1'
                                                    ),
                                                ],
                                            }),
                                            ir(t, {
                                                props: [
                                                    I(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ':' + ui + '$1'
                                                    ),
                                                ],
                                            }),
                                            ir(t, {
                                                props: [
                                                    I(
                                                        i,
                                                        /:(plac\w+)/,
                                                        he + 'input-$1'
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                            }
                            return '';
                        });
            }
    },
    rg = [ng],
    og = function (t) {
        var n = t.key;
        if (n === 'css') {
            var r = document.querySelectorAll(
                'style[data-emotion]:not([data-s])'
            );
            Array.prototype.forEach.call(r, function (g) {
                var _ = g.getAttribute('data-emotion');
                _.indexOf(' ') !== -1 &&
                    (document.head.appendChild(g),
                    g.setAttribute('data-s', ''));
            });
        }
        var o = t.stylisPlugins || rg,
            i = {},
            a,
            l = [];
        (a = t.container || document.head),
            Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
                function (g) {
                    for (
                        var _ = g.getAttribute('data-emotion').split(' '),
                            d = 1;
                        d < _.length;
                        d++
                    )
                        i[_[d]] = !0;
                    l.push(g);
                }
            );
        var s,
            u = [eg, tg];
        {
            var f,
                m = [
                    Qm,
                    Jm(function (g) {
                        f.insert(g);
                    }),
                ],
                p = Ym(u.concat(o, m)),
                v = function (_) {
                    return Fn(Km(_), p);
                };
            s = function (_, d, c, h) {
                (f = c),
                    v(_ ? _ + '{' + d.styles + '}' : d.styles),
                    h && (y.inserted[d.name] = !0);
            };
        }
        var y = {
            key: n,
            sheet: new zm({
                key: n,
                container: a,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: s,
        };
        return y.sheet.hydrate(l), y;
    },
    ig = !0;
function ag(e, t, n) {
    var r = '';
    return (
        n.split(' ').forEach(function (o) {
            e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
        }),
        r
    );
}
var Of = function (t, n, r) {
        var o = t.key + '-' + n.name;
        (r === !1 || ig === !1) &&
            t.registered[o] === void 0 &&
            (t.registered[o] = n.styles);
    },
    lg = function (t, n, r) {
        Of(t, n, r);
        var o = t.key + '-' + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
            while (i !== void 0);
        }
    };
function sg(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
        (n =
            (e.charCodeAt(r) & 255) |
            ((e.charCodeAt(++r) & 255) << 8) |
            ((e.charCodeAt(++r) & 255) << 16) |
            ((e.charCodeAt(++r) & 255) << 24)),
            (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
            (n ^= n >>> 24),
            (t =
                ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            (t ^= e.charCodeAt(r) & 255),
                (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
}
var ug = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    cg = /[A-Z]|^ms/g,
    dg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    bf = function (t) {
        return t.charCodeAt(1) === 45;
    },
    Nu = function (t) {
        return t != null && typeof t != 'boolean';
    },
    va = kf(function (e) {
        return bf(e) ? e : e.replace(cg, '-$&').toLowerCase();
    }),
    Uu = function (t, n) {
        switch (t) {
            case 'animation':
            case 'animationName':
                if (typeof n == 'string')
                    return n.replace(dg, function (r, o, i) {
                        return (tt = { name: o, styles: i, next: tt }), o;
                    });
        }
        return ug[t] !== 1 && !bf(t) && typeof n == 'number' && n !== 0
            ? n + 'px'
            : n;
    };
function Wr(e, t, n) {
    if (n == null) return '';
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case 'boolean':
            return '';
        case 'object': {
            if (n.anim === 1)
                return (
                    (tt = { name: n.name, styles: n.styles, next: tt }), n.name
                );
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        (tt = { name: r.name, styles: r.styles, next: tt }),
                            (r = r.next);
                var o = n.styles + ';';
                return o;
            }
            return fg(e, t, n);
        }
        case 'function': {
            if (e !== void 0) {
                var i = tt,
                    a = n(e);
                return (tt = i), Wr(e, t, a);
            }
            break;
        }
    }
    if (t == null) return n;
    var l = t[n];
    return l !== void 0 ? l : n;
}
function fg(e, t, n) {
    var r = '';
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += Wr(e, t, n[o]) + ';';
    else
        for (var i in n) {
            var a = n[i];
            if (typeof a != 'object')
                t != null && t[a] !== void 0
                    ? (r += i + '{' + t[a] + '}')
                    : Nu(a) && (r += va(i) + ':' + Uu(i, a) + ';');
            else if (
                Array.isArray(a) &&
                typeof a[0] == 'string' &&
                (t == null || t[a[0]] === void 0)
            )
                for (var l = 0; l < a.length; l++)
                    Nu(a[l]) && (r += va(i) + ':' + Uu(i, a[l]) + ';');
            else {
                var s = Wr(e, t, a);
                switch (i) {
                    case 'animation':
                    case 'animationName': {
                        r += va(i) + ':' + s + ';';
                        break;
                    }
                    default:
                        r += i + '{' + s + '}';
                }
            }
        }
    return r;
}
var Iu = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    tt,
    pg = function (t, n, r) {
        if (
            t.length === 1 &&
            typeof t[0] == 'object' &&
            t[0] !== null &&
            t[0].styles !== void 0
        )
            return t[0];
        var o = !0,
            i = '';
        tt = void 0;
        var a = t[0];
        a == null || a.raw === void 0
            ? ((o = !1), (i += Wr(r, n, a)))
            : (i += a[0]);
        for (var l = 1; l < t.length; l++)
            (i += Wr(r, n, t[l])), o && (i += a[l]);
        Iu.lastIndex = 0;
        for (var s = '', u; (u = Iu.exec(i)) !== null; ) s += '-' + u[1];
        var f = sg(i) + s;
        return { name: f, styles: i, next: tt };
    },
    hg = function (t) {
        return t();
    },
    mg = _s['useInsertionEffect'] ? _s['useInsertionEffect'] : !1,
    gg = mg || hg,
    Mf = C.createContext(typeof HTMLElement < 'u' ? og({ key: 'css' }) : null);
Mf.Provider;
var yg = function (t) {
        return C.forwardRef(function (n, r) {
            var o = C.useContext(Mf);
            return t(n, o, r);
        });
    },
    vg = C.createContext({}),
    wg = bm,
    Sg = function (t) {
        return t !== 'theme';
    },
    $u = function (t) {
        return typeof t == 'string' && t.charCodeAt(0) > 96 ? wg : Sg;
    },
    ju = function (t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o =
                t.__emotion_forwardProp && i
                    ? function (a) {
                          return t.__emotion_forwardProp(a) && i(a);
                      }
                    : i;
        }
        return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
    },
    kg = function (t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return (
            Of(n, r, o),
            gg(function () {
                return lg(n, r, o);
            }),
            null
        );
    },
    xg = function e(t, n) {
        var r = t.__emotion_real === t,
            o = (r && t.__emotion_base) || t,
            i,
            a;
        n !== void 0 && ((i = n.label), (a = n.target));
        var l = ju(t, n, r),
            s = l || $u(o),
            u = !s('as');
        return function () {
            var f = arguments,
                m =
                    r && t.__emotion_styles !== void 0
                        ? t.__emotion_styles.slice(0)
                        : [];
            if (
                (i !== void 0 && m.push('label:' + i + ';'),
                f[0] == null || f[0].raw === void 0)
            )
                m.push.apply(m, f);
            else {
                m.push(f[0][0]);
                for (var p = f.length, v = 1; v < p; v++) m.push(f[v], f[0][v]);
            }
            var y = yg(function (g, _, d) {
                var c = (u && g.as) || o,
                    h = '',
                    w = [],
                    S = g;
                if (g.theme == null) {
                    S = {};
                    for (var E in g) S[E] = g[E];
                    S.theme = C.useContext(vg);
                }
                typeof g.className == 'string'
                    ? (h = ag(_.registered, w, g.className))
                    : g.className != null && (h = g.className + ' ');
                var x = pg(m.concat(w), _.registered, S);
                (h += _.key + '-' + x.name), a !== void 0 && (h += ' ' + a);
                var A = u && l === void 0 ? $u(c) : s,
                    M = {};
                for (var O in g) (u && O === 'as') || (A(O) && (M[O] = g[O]));
                return (
                    (M.className = h),
                    (M.ref = d),
                    C.createElement(
                        C.Fragment,
                        null,
                        C.createElement(kg, {
                            cache: _,
                            serialized: x,
                            isStringTag: typeof c == 'string',
                        }),
                        C.createElement(c, M)
                    )
                );
            });
            return (
                (y.displayName =
                    i !== void 0
                        ? i
                        : 'Styled(' +
                          (typeof o == 'string'
                              ? o
                              : o.displayName || o.name || 'Component') +
                          ')'),
                (y.defaultProps = t.defaultProps),
                (y.__emotion_real = y),
                (y.__emotion_base = o),
                (y.__emotion_styles = m),
                (y.__emotion_forwardProp = l),
                Object.defineProperty(y, 'toString', {
                    value: function () {
                        return '.' + a;
                    },
                }),
                (y.withComponent = function (g, _) {
                    return e(
                        g,
                        b({}, n, _, { shouldForwardProp: ju(y, _, !0) })
                    ).apply(void 0, m);
                }),
                y
            );
        };
    },
    Cg = [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
    ],
    Be = xg.bind();
Cg.forEach(function (e) {
    Be[e] = Be(e);
});
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Eg(e, t) {
    return Be(e, t);
}
const _g = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
        (e.__emotion_styles = t(e.__emotion_styles));
};
function kr(e, t) {
    return t ? pt(e, t, { clone: !1 }) : e;
}
const ms = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Du = {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        up: (e) => `@media (min-width:${ms[e]}px)`,
    };
function vt(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Du;
        return t.reduce((a, l, s) => ((a[i.up(i.keys[s])] = n(t[s])), a), {});
    }
    if (typeof t == 'object') {
        const i = r.breakpoints || Du;
        return Object.keys(t).reduce((a, l) => {
            if (Object.keys(i.values || ms).indexOf(l) !== -1) {
                const s = i.up(l);
                a[s] = n(t[l], l);
            } else {
                const s = l;
                a[s] = t[s];
            }
            return a;
        }, {});
    }
    return n(t);
}
function Tg(e = {}) {
    var t;
    return (
        ((t = e.keys) == null
            ? void 0
            : t.reduce((r, o) => {
                  const i = e.up(o);
                  return (r[i] = {}), r;
              }, {})) || {}
    );
}
function Pg(e, t) {
    return e.reduce((n, r) => {
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
}
function Ri(e, t, n = !0) {
    if (!t || typeof t != 'string') return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`
            .split('.')
            .reduce((o, i) => (o && o[i] ? o[i] : null), e);
        if (r != null) return r;
    }
    return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ci(e, t, n, r = n) {
    let o;
    return (
        typeof e == 'function'
            ? (o = e(n))
            : Array.isArray(e)
            ? (o = e[n] || r)
            : (o = Ri(e, n) || r),
        t && (o = t(o, r, e)),
        o
    );
}
function $(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
        i = (a) => {
            if (a[t] == null) return null;
            const l = a[t],
                s = a.theme,
                u = Ri(s, r) || {};
            return vt(a, l, (m) => {
                let p = ci(u, o, m);
                return (
                    m === p &&
                        typeof m == 'string' &&
                        (p = ci(
                            u,
                            o,
                            `${t}${m === 'default' ? '' : Ye(m)}`,
                            m
                        )),
                    n === !1 ? p : { [n]: p }
                );
            });
        };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function zi(...e) {
    const t = e.reduce(
            (r, o) => (
                o.filterProps.forEach((i) => {
                    r[i] = o;
                }),
                r
            ),
            {}
        ),
        n = (r) =>
            Object.keys(r).reduce((o, i) => (t[i] ? kr(o, t[i](r)) : o), {});
    return (
        (n.propTypes = {}),
        (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
        n
    );
}
function Ag(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Og = { m: 'margin', p: 'padding' },
    bg = {
        t: 'Top',
        r: 'Right',
        b: 'Bottom',
        l: 'Left',
        x: ['Left', 'Right'],
        y: ['Top', 'Bottom'],
    },
    Bu = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
    Mg = Ag((e) => {
        if (e.length > 2)
            if (Bu[e]) e = Bu[e];
            else return [e];
        const [t, n] = e.split(''),
            r = Og[t],
            o = bg[n] || '';
        return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    gs = [
        'm',
        'mt',
        'mr',
        'mb',
        'ml',
        'mx',
        'my',
        'margin',
        'marginTop',
        'marginRight',
        'marginBottom',
        'marginLeft',
        'marginX',
        'marginY',
        'marginInline',
        'marginInlineStart',
        'marginInlineEnd',
        'marginBlock',
        'marginBlockStart',
        'marginBlockEnd',
    ],
    ys = [
        'p',
        'pt',
        'pr',
        'pb',
        'pl',
        'px',
        'py',
        'padding',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        'paddingX',
        'paddingY',
        'paddingInline',
        'paddingInlineStart',
        'paddingInlineEnd',
        'paddingBlock',
        'paddingBlockStart',
        'paddingBlockEnd',
    ];
[...gs, ...ys];
function Zr(e, t, n, r) {
    var o;
    const i = (o = Ri(e, t, !1)) != null ? o : n;
    return typeof i == 'number'
        ? (a) => (typeof a == 'string' ? a : i * a)
        : Array.isArray(i)
        ? (a) => (typeof a == 'string' ? a : i[a])
        : typeof i == 'function'
        ? i
        : () => {};
}
function Rf(e) {
    return Zr(e, 'spacing', 8);
}
function Xr(e, t) {
    if (typeof t == 'string' || t == null) return t;
    const n = Math.abs(t),
        r = e(n);
    return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function Rg(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = Xr(t, n)), r), {});
}
function zg(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = Mg(n),
        i = Rg(o, r),
        a = e[n];
    return vt(e, a, i);
}
function zf(e, t) {
    const n = Rf(e.theme);
    return Object.keys(e)
        .map((r) => zg(e, t, r, n))
        .reduce(kr, {});
}
function Y(e) {
    return zf(e, gs);
}
Y.propTypes = {};
Y.filterProps = gs;
function J(e) {
    return zf(e, ys);
}
J.propTypes = {};
J.filterProps = ys;
function rt(e) {
    return typeof e != 'number' ? e : `${e}px solid`;
}
const Fg = $({ prop: 'border', themeKey: 'borders', transform: rt }),
    Lg = $({ prop: 'borderTop', themeKey: 'borders', transform: rt }),
    Ng = $({ prop: 'borderRight', themeKey: 'borders', transform: rt }),
    Ug = $({ prop: 'borderBottom', themeKey: 'borders', transform: rt }),
    Ig = $({ prop: 'borderLeft', themeKey: 'borders', transform: rt }),
    $g = $({ prop: 'borderColor', themeKey: 'palette' }),
    jg = $({ prop: 'borderTopColor', themeKey: 'palette' }),
    Dg = $({ prop: 'borderRightColor', themeKey: 'palette' }),
    Bg = $({ prop: 'borderBottomColor', themeKey: 'palette' }),
    Wg = $({ prop: 'borderLeftColor', themeKey: 'palette' }),
    Fi = (e) => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Zr(e.theme, 'shape.borderRadius', 4),
                n = (r) => ({ borderRadius: Xr(t, r) });
            return vt(e, e.borderRadius, n);
        }
        return null;
    };
Fi.propTypes = {};
Fi.filterProps = ['borderRadius'];
zi(Fg, Lg, Ng, Ug, Ig, $g, jg, Dg, Bg, Wg, Fi);
const Li = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Zr(e.theme, 'spacing', 8),
            n = (r) => ({ gap: Xr(t, r) });
        return vt(e, e.gap, n);
    }
    return null;
};
Li.propTypes = {};
Li.filterProps = ['gap'];
const Ni = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Zr(e.theme, 'spacing', 8),
            n = (r) => ({ columnGap: Xr(t, r) });
        return vt(e, e.columnGap, n);
    }
    return null;
};
Ni.propTypes = {};
Ni.filterProps = ['columnGap'];
const Ui = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Zr(e.theme, 'spacing', 8),
            n = (r) => ({ rowGap: Xr(t, r) });
        return vt(e, e.rowGap, n);
    }
    return null;
};
Ui.propTypes = {};
Ui.filterProps = ['rowGap'];
const Hg = $({ prop: 'gridColumn' }),
    Vg = $({ prop: 'gridRow' }),
    Kg = $({ prop: 'gridAutoFlow' }),
    Gg = $({ prop: 'gridAutoColumns' }),
    Qg = $({ prop: 'gridAutoRows' }),
    Yg = $({ prop: 'gridTemplateColumns' }),
    Jg = $({ prop: 'gridTemplateRows' }),
    Zg = $({ prop: 'gridTemplateAreas' }),
    Xg = $({ prop: 'gridArea' });
zi(Li, Ni, Ui, Hg, Vg, Kg, Gg, Qg, Yg, Jg, Zg, Xg);
function Ln(e, t) {
    return t === 'grey' ? t : e;
}
const qg = $({ prop: 'color', themeKey: 'palette', transform: Ln }),
    e0 = $({
        prop: 'bgcolor',
        cssProperty: 'backgroundColor',
        themeKey: 'palette',
        transform: Ln,
    }),
    t0 = $({ prop: 'backgroundColor', themeKey: 'palette', transform: Ln });
zi(qg, e0, t0);
function Oe(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const n0 = $({ prop: 'width', transform: Oe }),
    vs = (e) => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
            const t = (n) => {
                var r, o, i;
                return {
                    maxWidth:
                        ((r = e.theme) == null ||
                        (o = r.breakpoints) == null ||
                        (i = o.values) == null
                            ? void 0
                            : i[n]) ||
                        ms[n] ||
                        Oe(n),
                };
            };
            return vt(e, e.maxWidth, t);
        }
        return null;
    };
vs.filterProps = ['maxWidth'];
const r0 = $({ prop: 'minWidth', transform: Oe }),
    o0 = $({ prop: 'height', transform: Oe }),
    i0 = $({ prop: 'maxHeight', transform: Oe }),
    a0 = $({ prop: 'minHeight', transform: Oe });
$({ prop: 'size', cssProperty: 'width', transform: Oe });
$({ prop: 'size', cssProperty: 'height', transform: Oe });
const l0 = $({ prop: 'boxSizing' });
zi(n0, vs, r0, o0, i0, a0, l0);
const s0 = {
        border: { themeKey: 'borders', transform: rt },
        borderTop: { themeKey: 'borders', transform: rt },
        borderRight: { themeKey: 'borders', transform: rt },
        borderBottom: { themeKey: 'borders', transform: rt },
        borderLeft: { themeKey: 'borders', transform: rt },
        borderColor: { themeKey: 'palette' },
        borderTopColor: { themeKey: 'palette' },
        borderRightColor: { themeKey: 'palette' },
        borderBottomColor: { themeKey: 'palette' },
        borderLeftColor: { themeKey: 'palette' },
        borderRadius: { themeKey: 'shape.borderRadius', style: Fi },
        color: { themeKey: 'palette', transform: Ln },
        bgcolor: {
            themeKey: 'palette',
            cssProperty: 'backgroundColor',
            transform: Ln,
        },
        backgroundColor: { themeKey: 'palette', transform: Ln },
        p: { style: J },
        pt: { style: J },
        pr: { style: J },
        pb: { style: J },
        pl: { style: J },
        px: { style: J },
        py: { style: J },
        padding: { style: J },
        paddingTop: { style: J },
        paddingRight: { style: J },
        paddingBottom: { style: J },
        paddingLeft: { style: J },
        paddingX: { style: J },
        paddingY: { style: J },
        paddingInline: { style: J },
        paddingInlineStart: { style: J },
        paddingInlineEnd: { style: J },
        paddingBlock: { style: J },
        paddingBlockStart: { style: J },
        paddingBlockEnd: { style: J },
        m: { style: Y },
        mt: { style: Y },
        mr: { style: Y },
        mb: { style: Y },
        ml: { style: Y },
        mx: { style: Y },
        my: { style: Y },
        margin: { style: Y },
        marginTop: { style: Y },
        marginRight: { style: Y },
        marginBottom: { style: Y },
        marginLeft: { style: Y },
        marginX: { style: Y },
        marginY: { style: Y },
        marginInline: { style: Y },
        marginInlineStart: { style: Y },
        marginInlineEnd: { style: Y },
        marginBlock: { style: Y },
        marginBlockStart: { style: Y },
        marginBlockEnd: { style: Y },
        displayPrint: {
            cssProperty: !1,
            transform: (e) => ({ '@media print': { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: Li },
        rowGap: { style: Ui },
        columnGap: { style: Ni },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: 'zIndex' },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: 'shadows' },
        width: { transform: Oe },
        maxWidth: { style: vs },
        minWidth: { transform: Oe },
        height: { transform: Oe },
        maxHeight: { transform: Oe },
        minHeight: { transform: Oe },
        boxSizing: {},
        fontFamily: { themeKey: 'typography' },
        fontSize: { themeKey: 'typography' },
        fontStyle: { themeKey: 'typography' },
        fontWeight: { themeKey: 'typography' },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: 'typography' },
    },
    Ii = s0;
function u0(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
        n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
}
function c0(e, t) {
    return typeof e == 'function' ? e(t) : e;
}
function d0() {
    function e(n, r, o, i) {
        const a = { [n]: r, theme: o },
            l = i[n];
        if (!l) return { [n]: r };
        const { cssProperty: s = n, themeKey: u, transform: f, style: m } = l;
        if (r == null) return null;
        const p = Ri(o, u) || {};
        return m
            ? m(a)
            : vt(a, r, (y) => {
                  let g = ci(p, f, y);
                  return (
                      y === g &&
                          typeof y == 'string' &&
                          (g = ci(
                              p,
                              f,
                              `${n}${y === 'default' ? '' : Ye(y)}`,
                              y
                          )),
                      s === !1 ? g : { [s]: g }
                  );
              });
    }
    function t(n) {
        var r;
        const { sx: o, theme: i = {} } = n || {};
        if (!o) return null;
        const a = (r = i.unstable_sxConfig) != null ? r : Ii;
        function l(s) {
            let u = s;
            if (typeof s == 'function') u = s(i);
            else if (typeof s != 'object') return s;
            if (!u) return null;
            const f = Tg(i.breakpoints),
                m = Object.keys(f);
            let p = f;
            return (
                Object.keys(u).forEach((v) => {
                    const y = c0(u[v], i);
                    if (y != null)
                        if (typeof y == 'object')
                            if (a[v]) p = kr(p, e(v, y, i, a));
                            else {
                                const g = vt({ theme: i }, y, (_) => ({
                                    [v]: _,
                                }));
                                u0(g, y)
                                    ? (p[v] = t({ sx: y, theme: i }))
                                    : (p = kr(p, g));
                            }
                        else p = kr(p, e(v, y, i, a));
                }),
                Pg(m, p)
            );
        }
        return Array.isArray(o) ? o.map(l) : l(o);
    }
    return t;
}
const Ff = d0();
Ff.filterProps = ['sx'];
const ws = Ff,
    f0 = ['sx'],
    p0 = (e) => {
        var t, n;
        const r = { systemProps: {}, otherProps: {} },
            o =
                (t =
                    e == null || (n = e.theme) == null
                        ? void 0
                        : n.unstable_sxConfig) != null
                    ? t
                    : Ii;
        return (
            Object.keys(e).forEach((i) => {
                o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
            }),
            r
        );
    };
function h0(e) {
    const { sx: t } = e,
        n = we(e, f0),
        { systemProps: r, otherProps: o } = p0(n);
    let i;
    return (
        Array.isArray(t)
            ? (i = [r, ...t])
            : typeof t == 'function'
            ? (i = (...a) => {
                  const l = t(...a);
                  return Vt(l) ? b({}, r, l) : r;
              })
            : (i = b({}, r, t)),
        b({}, o, { sx: i })
    );
}
function Lf(e) {
    var t,
        n,
        r = '';
    if (typeof e == 'string' || typeof e == 'number') r += e;
    else if (typeof e == 'object')
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Lf(e[t])) && (r && (r += ' '), (r += n));
        else for (t in e) e[t] && (r && (r += ' '), (r += t));
    return r;
}
function $i() {
    for (var e, t, n = 0, r = ''; n < arguments.length; )
        (e = arguments[n++]) && (t = Lf(e)) && (r && (r += ' '), (r += t));
    return r;
}
const m0 = ['values', 'unit', 'step'],
    g0 = (e) => {
        const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
        return (
            t.sort((n, r) => n.val - r.val),
            t.reduce((n, r) => b({}, n, { [r.key]: r.val }), {})
        );
    };
function y0(e) {
    const {
            values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
            unit: n = 'px',
            step: r = 5,
        } = e,
        o = we(e, m0),
        i = g0(t),
        a = Object.keys(i);
    function l(p) {
        return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`;
    }
    function s(p) {
        return `@media (max-width:${
            (typeof t[p] == 'number' ? t[p] : p) - r / 100
        }${n})`;
    }
    function u(p, v) {
        const y = a.indexOf(v);
        return `@media (min-width:${
            typeof t[p] == 'number' ? t[p] : p
        }${n}) and (max-width:${
            (y !== -1 && typeof t[a[y]] == 'number' ? t[a[y]] : v) - r / 100
        }${n})`;
    }
    function f(p) {
        return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
    }
    function m(p) {
        const v = a.indexOf(p);
        return v === 0
            ? l(a[1])
            : v === a.length - 1
            ? s(a[v])
            : u(p, a[a.indexOf(p) + 1]).replace('@media', '@media not all and');
    }
    return b(
        {
            keys: a,
            values: i,
            up: l,
            down: s,
            between: u,
            only: f,
            not: m,
            unit: n,
        },
        o
    );
}
const v0 = { borderRadius: 4 },
    w0 = v0;
function S0(e = 8) {
    if (e.mui) return e;
    const t = Rf({ spacing: e }),
        n = (...r) =>
            (r.length === 0 ? [1] : r)
                .map((i) => {
                    const a = t(i);
                    return typeof a == 'number' ? `${a}px` : a;
                })
                .join(' ');
    return (n.mui = !0), n;
}
const k0 = ['breakpoints', 'palette', 'spacing', 'shape'];
function Ss(e = {}, ...t) {
    const {
            breakpoints: n = {},
            palette: r = {},
            spacing: o,
            shape: i = {},
        } = e,
        a = we(e, k0),
        l = y0(n),
        s = S0(o);
    let u = pt(
        {
            breakpoints: l,
            direction: 'ltr',
            components: {},
            palette: b({ mode: 'light' }, r),
            spacing: s,
            shape: b({}, w0, i),
        },
        a
    );
    return (
        (u = t.reduce((f, m) => pt(f, m), u)),
        (u.unstable_sxConfig = b(
            {},
            Ii,
            a == null ? void 0 : a.unstable_sxConfig
        )),
        (u.unstable_sx = function (m) {
            return ws({ sx: m, theme: this });
        }),
        u
    );
}
const x0 = C.createContext(null),
    C0 = x0;
function E0() {
    return C.useContext(C0);
}
function _0(e) {
    return Object.keys(e).length === 0;
}
function T0(e = null) {
    const t = E0();
    return !t || _0(t) ? e : t;
}
const P0 = Ss();
function A0(e = P0) {
    return T0(e);
}
const O0 = ['variant'];
function Wu(e) {
    return e.length === 0;
}
function Nf(e) {
    const { variant: t } = e,
        n = we(e, O0);
    let r = t || '';
    return (
        Object.keys(n)
            .sort()
            .forEach((o) => {
                o === 'color'
                    ? (r += Wu(r) ? e[o] : Ye(e[o]))
                    : (r += `${Wu(r) ? o : Ye(o)}${Ye(e[o].toString())}`);
            }),
        r
    );
}
const b0 = [
        'name',
        'slot',
        'skipVariantsResolver',
        'skipSx',
        'overridesResolver',
    ],
    M0 = ['theme'],
    R0 = ['theme'];
function ar(e) {
    return Object.keys(e).length === 0;
}
function z0(e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const F0 = (e, t) =>
        t.components && t.components[e] && t.components[e].styleOverrides
            ? t.components[e].styleOverrides
            : null,
    L0 = (e, t) => {
        let n = [];
        t &&
            t.components &&
            t.components[e] &&
            t.components[e].variants &&
            (n = t.components[e].variants);
        const r = {};
        return (
            n.forEach((o) => {
                const i = Nf(o.props);
                r[i] = o.style;
            }),
            r
        );
    },
    N0 = (e, t, n, r) => {
        var o, i;
        const { ownerState: a = {} } = e,
            l = [],
            s =
                n == null || (o = n.components) == null || (i = o[r]) == null
                    ? void 0
                    : i.variants;
        return (
            s &&
                s.forEach((u) => {
                    let f = !0;
                    Object.keys(u.props).forEach((m) => {
                        a[m] !== u.props[m] && e[m] !== u.props[m] && (f = !1);
                    }),
                        f && l.push(t[Nf(u.props)]);
                }),
            l
        );
    };
function Uo(e) {
    return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const U0 = Ss();
function I0(e = {}) {
    const {
            defaultTheme: t = U0,
            rootShouldForwardProp: n = Uo,
            slotShouldForwardProp: r = Uo,
        } = e,
        o = (i) => {
            const a = ar(i.theme) ? t : i.theme;
            return ws(b({}, i, { theme: a }));
        };
    return (
        (o.__mui_systemSx = !0),
        (i, a = {}) => {
            _g(i, (h) => h.filter((w) => !(w != null && w.__mui_systemSx)));
            const {
                    name: l,
                    slot: s,
                    skipVariantsResolver: u,
                    skipSx: f,
                    overridesResolver: m,
                } = a,
                p = we(a, b0),
                v = u !== void 0 ? u : (s && s !== 'Root') || !1,
                y = f || !1;
            let g,
                _ = Uo;
            s === 'Root' ? (_ = n) : s ? (_ = r) : z0(i) && (_ = void 0);
            const d = Eg(i, b({ shouldForwardProp: _, label: g }, p)),
                c = (h, ...w) => {
                    const S = w
                        ? w.map((M) =>
                              typeof M == 'function' && M.__emotion_real !== M
                                  ? (O) => {
                                        let { theme: ne } = O,
                                            Ze = we(O, M0);
                                        return M(
                                            b({ theme: ar(ne) ? t : ne }, Ze)
                                        );
                                    }
                                  : M
                          )
                        : [];
                    let E = h;
                    l &&
                        m &&
                        S.push((M) => {
                            const O = ar(M.theme) ? t : M.theme,
                                ne = F0(l, O);
                            if (ne) {
                                const Ze = {};
                                return (
                                    Object.entries(ne).forEach(([jt, un]) => {
                                        Ze[jt] =
                                            typeof un == 'function'
                                                ? un(b({}, M, { theme: O }))
                                                : un;
                                    }),
                                    m(M, Ze)
                                );
                            }
                            return null;
                        }),
                        l &&
                            !v &&
                            S.push((M) => {
                                const O = ar(M.theme) ? t : M.theme;
                                return N0(M, L0(l, O), O, l);
                            }),
                        y || S.push(o);
                    const x = S.length - w.length;
                    if (Array.isArray(h) && x > 0) {
                        const M = new Array(x).fill('');
                        (E = [...h, ...M]), (E.raw = [...h.raw, ...M]);
                    } else
                        typeof h == 'function' &&
                            h.__emotion_real !== h &&
                            (E = (M) => {
                                let { theme: O } = M,
                                    ne = we(M, R0);
                                return h(b({ theme: ar(O) ? t : O }, ne));
                            });
                    return d(E, ...S);
                };
            return d.withConfig && (c.withConfig = d.withConfig), c;
        }
    );
}
function $0(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
        !t.components ||
        !t.components[n] ||
        !t.components[n].defaultProps
        ? r
        : Sf(t.components[n].defaultProps, r);
}
function j0({ props: e, name: t, defaultTheme: n }) {
    const r = A0(n);
    return $0({ theme: r, name: t, props: e });
}
function ks(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
}
function D0(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
    let n = e.match(t);
    return (
        n && n[0].length === 1 && (n = n.map((r) => r + r)),
        n
            ? `rgb${n.length === 4 ? 'a' : ''}(${n
                  .map((r, o) =>
                      o < 3
                          ? parseInt(r, 16)
                          : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
                  )
                  .join(', ')})`
            : ''
    );
}
function rn(e) {
    if (e.type) return e;
    if (e.charAt(0) === '#') return rn(D0(e));
    const t = e.indexOf('('),
        n = e.substring(0, t);
    if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
        throw new Error(Wn(9, e));
    let r = e.substring(t + 1, e.length - 1),
        o;
    if (n === 'color') {
        if (
            ((r = r.split(' ')),
            (o = r.shift()),
            r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
            [
                'srgb',
                'display-p3',
                'a98-rgb',
                'prophoto-rgb',
                'rec-2020',
            ].indexOf(o) === -1)
        )
            throw new Error(Wn(10, o));
    } else r = r.split(',');
    return (
        (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
}
function ji(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
        t.indexOf('rgb') !== -1
            ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
            : t.indexOf('hsl') !== -1 &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
        t.indexOf('color') !== -1
            ? (r = `${n} ${r.join(' ')}`)
            : (r = `${r.join(', ')}`),
        `${t}(${r})`
    );
}
function B0(e) {
    e = rn(e);
    const { values: t } = e,
        n = t[0],
        r = t[1] / 100,
        o = t[2] / 100,
        i = r * Math.min(o, 1 - o),
        a = (u, f = (u + n / 30) % 12) =>
            o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
    let l = 'rgb';
    const s = [
        Math.round(a(0) * 255),
        Math.round(a(8) * 255),
        Math.round(a(4) * 255),
    ];
    return (
        e.type === 'hsla' && ((l += 'a'), s.push(t[3])),
        ji({ type: l, values: s })
    );
}
function Hu(e) {
    e = rn(e);
    let t = e.type === 'hsl' || e.type === 'hsla' ? rn(B0(e)).values : e.values;
    return (
        (t = t.map(
            (n) => (
                e.type !== 'color' && (n /= 255),
                n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
            )
        )),
        Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
}
function W0(e, t) {
    const n = Hu(e),
        r = Hu(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function yl(e, t) {
    return (
        (e = rn(e)),
        (t = ks(t)),
        (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
        e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
        ji(e)
    );
}
function H0(e, t) {
    if (((e = rn(e)), (t = ks(t)), e.type.indexOf('hsl') !== -1))
        e.values[2] *= 1 - t;
    else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return ji(e);
}
function V0(e, t) {
    if (((e = rn(e)), (t = ks(t)), e.type.indexOf('hsl') !== -1))
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf('rgb') !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf('color') !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return ji(e);
}
function K0(e, t) {
    return b(
        {
            toolbar: {
                minHeight: 56,
                [e.up('xs')]: {
                    '@media (orientation: landscape)': { minHeight: 48 },
                },
                [e.up('sm')]: { minHeight: 64 },
            },
        },
        t
    );
}
const G0 = ['mode', 'contrastThreshold', 'tonalOffset'],
    Vu = {
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        background: { paper: jr.white, default: jr.white },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    wa = {
        text: {
            primary: jr.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: { paper: '#121212', default: '#121212' },
        action: {
            active: jr.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
        },
    };
function Ku(e, t, n, r) {
    const o = r.light || r,
        i = r.dark || r * 1.5;
    e[t] ||
        (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : t === 'light'
            ? (e.light = V0(e.main, o))
            : t === 'dark' && (e.dark = H0(e.main, i)));
}
function Q0(e = 'light') {
    return e === 'dark'
        ? { main: pn[200], light: pn[50], dark: pn[400] }
        : { main: pn[700], light: pn[400], dark: pn[800] };
}
function Y0(e = 'light') {
    return e === 'dark'
        ? { main: fn[200], light: fn[50], dark: fn[400] }
        : { main: fn[500], light: fn[300], dark: fn[700] };
}
function J0(e = 'light') {
    return e === 'dark'
        ? { main: dn[500], light: dn[300], dark: dn[700] }
        : { main: dn[700], light: dn[400], dark: dn[800] };
}
function Z0(e = 'light') {
    return e === 'dark'
        ? { main: hn[400], light: hn[300], dark: hn[700] }
        : { main: hn[700], light: hn[500], dark: hn[900] };
}
function X0(e = 'light') {
    return e === 'dark'
        ? { main: mn[400], light: mn[300], dark: mn[700] }
        : { main: mn[800], light: mn[500], dark: mn[900] };
}
function q0(e = 'light') {
    return e === 'dark'
        ? { main: or[400], light: or[300], dark: or[700] }
        : { main: '#ed6c02', light: or[500], dark: or[900] };
}
function e1(e) {
    const {
            mode: t = 'light',
            contrastThreshold: n = 3,
            tonalOffset: r = 0.2,
        } = e,
        o = we(e, G0),
        i = e.primary || Q0(t),
        a = e.secondary || Y0(t),
        l = e.error || J0(t),
        s = e.info || Z0(t),
        u = e.success || X0(t),
        f = e.warning || q0(t);
    function m(g) {
        return W0(g, wa.text.primary) >= n ? wa.text.primary : Vu.text.primary;
    }
    const p = ({
            color: g,
            name: _,
            mainShade: d = 500,
            lightShade: c = 300,
            darkShade: h = 700,
        }) => {
            if (
                ((g = b({}, g)),
                !g.main && g[d] && (g.main = g[d]),
                !g.hasOwnProperty('main'))
            )
                throw new Error(Wn(11, _ ? ` (${_})` : '', d));
            if (typeof g.main != 'string')
                throw new Error(
                    Wn(12, _ ? ` (${_})` : '', JSON.stringify(g.main))
                );
            return (
                Ku(g, 'light', c, r),
                Ku(g, 'dark', h, r),
                g.contrastText || (g.contrastText = m(g.main)),
                g
            );
        },
        v = { dark: wa, light: Vu };
    return pt(
        b(
            {
                common: b({}, jr),
                mode: t,
                primary: p({ color: i, name: 'primary' }),
                secondary: p({
                    color: a,
                    name: 'secondary',
                    mainShade: 'A400',
                    lightShade: 'A200',
                    darkShade: 'A700',
                }),
                error: p({ color: l, name: 'error' }),
                warning: p({ color: f, name: 'warning' }),
                info: p({ color: s, name: 'info' }),
                success: p({ color: u, name: 'success' }),
                grey: Em,
                contrastThreshold: n,
                getContrastText: m,
                augmentColor: p,
                tonalOffset: r,
            },
            v[t]
        ),
        o
    );
}
const t1 = [
    'fontFamily',
    'fontSize',
    'fontWeightLight',
    'fontWeightRegular',
    'fontWeightMedium',
    'fontWeightBold',
    'htmlFontSize',
    'allVariants',
    'pxToRem',
];
function n1(e) {
    return Math.round(e * 1e5) / 1e5;
}
const Gu = { textTransform: 'uppercase' },
    Qu = '"Roboto", "Helvetica", "Arial", sans-serif';
function r1(e, t) {
    const n = typeof t == 'function' ? t(e) : t,
        {
            fontFamily: r = Qu,
            fontSize: o = 14,
            fontWeightLight: i = 300,
            fontWeightRegular: a = 400,
            fontWeightMedium: l = 500,
            fontWeightBold: s = 700,
            htmlFontSize: u = 16,
            allVariants: f,
            pxToRem: m,
        } = n,
        p = we(n, t1),
        v = o / 14,
        y = m || ((d) => `${(d / u) * v}rem`),
        g = (d, c, h, w, S) =>
            b(
                { fontFamily: r, fontWeight: d, fontSize: y(c), lineHeight: h },
                r === Qu ? { letterSpacing: `${n1(w / c)}em` } : {},
                S,
                f
            ),
        _ = {
            h1: g(i, 96, 1.167, -1.5),
            h2: g(i, 60, 1.2, -0.5),
            h3: g(a, 48, 1.167, 0),
            h4: g(a, 34, 1.235, 0.25),
            h5: g(a, 24, 1.334, 0),
            h6: g(l, 20, 1.6, 0.15),
            subtitle1: g(a, 16, 1.75, 0.15),
            subtitle2: g(l, 14, 1.57, 0.1),
            body1: g(a, 16, 1.5, 0.15),
            body2: g(a, 14, 1.43, 0.15),
            button: g(l, 14, 1.75, 0.4, Gu),
            caption: g(a, 12, 1.66, 0.4),
            overline: g(a, 12, 2.66, 1, Gu),
        };
    return pt(
        b(
            {
                htmlFontSize: u,
                pxToRem: y,
                fontFamily: r,
                fontSize: o,
                fontWeightLight: i,
                fontWeightRegular: a,
                fontWeightMedium: l,
                fontWeightBold: s,
            },
            _
        ),
        p,
        { clone: !1 }
    );
}
const o1 = 0.2,
    i1 = 0.14,
    a1 = 0.12;
function H(...e) {
    return [
        `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${o1})`,
        `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${i1})`,
        `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${a1})`,
    ].join(',');
}
const l1 = [
        'none',
        H(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
        H(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
        H(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
        H(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        H(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        H(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        H(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        H(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        H(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        H(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        H(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        H(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        H(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        H(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        H(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        H(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        H(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        H(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        H(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        H(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        H(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        H(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        H(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        H(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    s1 = l1,
    u1 = ['duration', 'easing', 'delay'],
    c1 = {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    d1 = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
    };
function Yu(e) {
    return `${Math.round(e)}ms`;
}
function f1(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function p1(e) {
    const t = b({}, c1, e.easing),
        n = b({}, d1, e.duration);
    return b(
        {
            getAutoHeightDuration: f1,
            create: (o = ['all'], i = {}) => {
                const {
                    duration: a = n.standard,
                    easing: l = t.easeInOut,
                    delay: s = 0,
                } = i;
                return (
                    we(i, u1),
                    (Array.isArray(o) ? o : [o])
                        .map(
                            (u) =>
                                `${u} ${
                                    typeof a == 'string' ? a : Yu(a)
                                } ${l} ${typeof s == 'string' ? s : Yu(s)}`
                        )
                        .join(',')
                );
            },
        },
        e,
        { easing: t, duration: n }
    );
}
const h1 = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    m1 = h1,
    g1 = [
        'breakpoints',
        'mixins',
        'spacing',
        'palette',
        'transitions',
        'typography',
        'shape',
    ];
function y1(e = {}, ...t) {
    const {
            mixins: n = {},
            palette: r = {},
            transitions: o = {},
            typography: i = {},
        } = e,
        a = we(e, g1);
    if (e.vars) throw new Error(Wn(18));
    const l = e1(r),
        s = Ss(e);
    let u = pt(s, {
        mixins: K0(s.breakpoints, n),
        palette: l,
        shadows: s1.slice(),
        typography: r1(l, i),
        transitions: p1(o),
        zIndex: b({}, m1),
    });
    return (
        (u = pt(u, a)),
        (u = t.reduce((f, m) => pt(f, m), u)),
        (u.unstable_sxConfig = b(
            {},
            Ii,
            a == null ? void 0 : a.unstable_sxConfig
        )),
        (u.unstable_sx = function (m) {
            return ws({ sx: m, theme: this });
        }),
        u
    );
}
const v1 = y1(),
    Uf = v1;
function Di({ props: e, name: t }) {
    return j0({ props: e, name: t, defaultTheme: Uf });
}
const w1 = (e) => Uo(e) && e !== 'classes',
    S1 = I0({ defaultTheme: Uf, rootShouldForwardProp: w1 }),
    qr = S1,
    k1 = (e) => {
        let t;
        return (
            e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
            (t / 100).toFixed(2)
        );
    },
    Ju = k1;
function x1(e) {
    return Yr('MuiSvgIcon', e);
}
Ai('MuiSvgIcon', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'colorAction',
    'colorError',
    'colorDisabled',
    'fontSizeInherit',
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeLarge',
]);
const C1 = [
        'children',
        'className',
        'color',
        'component',
        'fontSize',
        'htmlColor',
        'inheritViewBox',
        'titleAccess',
        'viewBox',
    ],
    E1 = (e) => {
        const { color: t, fontSize: n, classes: r } = e,
            o = {
                root: [
                    'root',
                    t !== 'inherit' && `color${Ye(t)}`,
                    `fontSize${Ye(n)}`,
                ],
            };
        return Pi(o, x1, r);
    },
    _1 = qr('svg', {
        name: 'MuiSvgIcon',
        slot: 'Root',
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.color !== 'inherit' && t[`color${Ye(n.color)}`],
                t[`fontSize${Ye(n.fontSize)}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n, r, o, i, a, l, s, u, f, m, p, v, y, g, _, d, c;
        return {
            userSelect: 'none',
            width: '1em',
            height: '1em',
            display: 'inline-block',
            fill: 'currentColor',
            flexShrink: 0,
            transition:
                (n = e.transitions) == null || (r = n.create) == null
                    ? void 0
                    : r.call(n, 'fill', {
                          duration:
                              (o = e.transitions) == null ||
                              (i = o.duration) == null
                                  ? void 0
                                  : i.shorter,
                      }),
            fontSize: {
                inherit: 'inherit',
                small:
                    ((a = e.typography) == null || (l = a.pxToRem) == null
                        ? void 0
                        : l.call(a, 20)) || '1.25rem',
                medium:
                    ((s = e.typography) == null || (u = s.pxToRem) == null
                        ? void 0
                        : u.call(s, 24)) || '1.5rem',
                large:
                    ((f = e.typography) == null || (m = f.pxToRem) == null
                        ? void 0
                        : m.call(f, 35)) || '2.1875rem',
            }[t.fontSize],
            color:
                (p =
                    (v = (e.vars || e).palette) == null ||
                    (y = v[t.color]) == null
                        ? void 0
                        : y.main) != null
                    ? p
                    : {
                          action:
                              (g = (e.vars || e).palette) == null ||
                              (_ = g.action) == null
                                  ? void 0
                                  : _.active,
                          disabled:
                              (d = (e.vars || e).palette) == null ||
                              (c = d.action) == null
                                  ? void 0
                                  : c.disabled,
                          inherit: void 0,
                      }[t.color],
        };
    }),
    If = C.forwardRef(function (t, n) {
        const r = Di({ props: t, name: 'MuiSvgIcon' }),
            {
                children: o,
                className: i,
                color: a = 'inherit',
                component: l = 'svg',
                fontSize: s = 'medium',
                htmlColor: u,
                inheritViewBox: f = !1,
                titleAccess: m,
                viewBox: p = '0 0 24 24',
            } = r,
            v = we(r, C1),
            y = b({}, r, {
                color: a,
                component: l,
                fontSize: s,
                instanceFontSize: t.fontSize,
                inheritViewBox: f,
                viewBox: p,
            }),
            g = {};
        f || (g.viewBox = p);
        const _ = E1(y);
        return Yt(
            _1,
            b(
                {
                    as: l,
                    className: $i(_.root, i),
                    focusable: 'false',
                    color: u,
                    'aria-hidden': m ? void 0 : !0,
                    role: m ? 'img' : void 0,
                    ref: n,
                },
                g,
                v,
                {
                    ownerState: y,
                    children: [o, m ? R('title', { children: m }) : null],
                }
            )
        );
    });
If.muiName = 'SvgIcon';
const Zu = If;
function ln(e, t) {
    function n(r, o) {
        return R(
            Zu,
            b({ 'data-testid': `${t}Icon`, ref: o }, r, { children: e })
        );
    }
    return (n.muiName = Zu.muiName), C.memo(C.forwardRef(n));
}
function T1(e) {
    return Yr('MuiPaper', e);
}
Ai('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24',
]);
const P1 = ['className', 'component', 'elevation', 'square', 'variant'],
    A1 = (e) => {
        const { square: t, elevation: n, variant: r, classes: o } = e,
            i = {
                root: [
                    'root',
                    r,
                    !t && 'rounded',
                    r === 'elevation' && `elevation${n}`,
                ],
            };
        return Pi(i, T1, o);
    },
    O1 = qr('div', {
        name: 'MuiPaper',
        slot: 'Root',
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.variant],
                !n.square && t.rounded,
                n.variant === 'elevation' && t[`elevation${n.elevation}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n;
        return b(
            {
                backgroundColor: (e.vars || e).palette.background.paper,
                color: (e.vars || e).palette.text.primary,
                transition: e.transitions.create('box-shadow'),
            },
            !t.square && { borderRadius: e.shape.borderRadius },
            t.variant === 'outlined' && {
                border: `1px solid ${(e.vars || e).palette.divider}`,
            },
            t.variant === 'elevation' &&
                b(
                    { boxShadow: (e.vars || e).shadows[t.elevation] },
                    !e.vars &&
                        e.palette.mode === 'dark' && {
                            backgroundImage: `linear-gradient(${yl(
                                '#fff',
                                Ju(t.elevation)
                            )}, ${yl('#fff', Ju(t.elevation))})`,
                        },
                    e.vars && {
                        backgroundImage:
                            (n = e.vars.overlays) == null
                                ? void 0
                                : n[t.elevation],
                    }
                )
        );
    }),
    b1 = C.forwardRef(function (t, n) {
        const r = Di({ props: t, name: 'MuiPaper' }),
            {
                className: o,
                component: i = 'div',
                elevation: a = 1,
                square: l = !1,
                variant: s = 'elevation',
            } = r,
            u = we(r, P1),
            f = b({}, r, { component: i, elevation: a, square: l, variant: s }),
            m = A1(f);
        return R(
            O1,
            b({ as: i, ownerState: f, className: $i(m.root, o), ref: n }, u)
        );
    }),
    $f = b1;
function M1(e) {
    return Yr('MuiTypography', e);
}
Ai('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph',
]);
const R1 = [
        'align',
        'className',
        'component',
        'gutterBottom',
        'noWrap',
        'paragraph',
        'variant',
        'variantMapping',
    ],
    z1 = (e) => {
        const {
                align: t,
                gutterBottom: n,
                noWrap: r,
                paragraph: o,
                variant: i,
                classes: a,
            } = e,
            l = {
                root: [
                    'root',
                    i,
                    e.align !== 'inherit' && `align${Ye(t)}`,
                    n && 'gutterBottom',
                    r && 'noWrap',
                    o && 'paragraph',
                ],
            };
        return Pi(l, M1, a);
    },
    F1 = qr('span', {
        name: 'MuiTypography',
        slot: 'Root',
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.variant && t[n.variant],
                n.align !== 'inherit' && t[`align${Ye(n.align)}`],
                n.noWrap && t.noWrap,
                n.gutterBottom && t.gutterBottom,
                n.paragraph && t.paragraph,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        b(
            { margin: 0 },
            t.variant && e.typography[t.variant],
            t.align !== 'inherit' && { textAlign: t.align },
            t.noWrap && {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
            t.gutterBottom && { marginBottom: '0.35em' },
            t.paragraph && { marginBottom: 16 }
        )
    ),
    Xu = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'p',
        inherit: 'p',
    },
    L1 = {
        primary: 'primary.main',
        textPrimary: 'text.primary',
        secondary: 'secondary.main',
        textSecondary: 'text.secondary',
        error: 'error.main',
    },
    N1 = (e) => L1[e] || e,
    U1 = C.forwardRef(function (t, n) {
        const r = Di({ props: t, name: 'MuiTypography' }),
            o = N1(r.color),
            i = h0(b({}, r, { color: o })),
            {
                align: a = 'inherit',
                className: l,
                component: s,
                gutterBottom: u = !1,
                noWrap: f = !1,
                paragraph: m = !1,
                variant: p = 'body1',
                variantMapping: v = Xu,
            } = i,
            y = we(i, R1),
            g = b({}, i, {
                align: a,
                color: o,
                className: l,
                component: s,
                gutterBottom: u,
                noWrap: f,
                paragraph: m,
                variant: p,
                variantMapping: v,
            }),
            _ = s || (m ? 'p' : v[p] || Xu[p]) || 'span',
            d = z1(g);
        return R(
            F1,
            b({ as: _, ref: n, ownerState: g, className: $i(d.root, l) }, y)
        );
    }),
    dr = U1;
function I1(e) {
    return Yr('MuiDivider', e);
}
Ai('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
]);
const $1 = [
        'absolute',
        'children',
        'className',
        'component',
        'flexItem',
        'light',
        'orientation',
        'role',
        'textAlign',
        'variant',
    ],
    j1 = (e) => {
        const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: i,
            orientation: a,
            textAlign: l,
            variant: s,
        } = e;
        return Pi(
            {
                root: [
                    'root',
                    t && 'absolute',
                    s,
                    i && 'light',
                    a === 'vertical' && 'vertical',
                    o && 'flexItem',
                    n && 'withChildren',
                    n && a === 'vertical' && 'withChildrenVertical',
                    l === 'right' && a !== 'vertical' && 'textAlignRight',
                    l === 'left' && a !== 'vertical' && 'textAlignLeft',
                ],
                wrapper: ['wrapper', a === 'vertical' && 'wrapperVertical'],
            },
            I1,
            r
        );
    },
    D1 = qr('div', {
        name: 'MuiDivider',
        slot: 'Root',
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.absolute && t.absolute,
                t[n.variant],
                n.light && t.light,
                n.orientation === 'vertical' && t.vertical,
                n.flexItem && t.flexItem,
                n.children && t.withChildren,
                n.children &&
                    n.orientation === 'vertical' &&
                    t.withChildrenVertical,
                n.textAlign === 'right' &&
                    n.orientation !== 'vertical' &&
                    t.textAlignRight,
                n.textAlign === 'left' &&
                    n.orientation !== 'vertical' &&
                    t.textAlignLeft,
            ];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            b(
                {
                    margin: 0,
                    flexShrink: 0,
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: (e.vars || e).palette.divider,
                    borderBottomWidth: 'thin',
                },
                t.absolute && {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                },
                t.light && {
                    borderColor: e.vars
                        ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
                        : yl(e.palette.divider, 0.08),
                },
                t.variant === 'inset' && { marginLeft: 72 },
                t.variant === 'middle' &&
                    t.orientation === 'horizontal' && {
                        marginLeft: e.spacing(2),
                        marginRight: e.spacing(2),
                    },
                t.variant === 'middle' &&
                    t.orientation === 'vertical' && {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1),
                    },
                t.orientation === 'vertical' && {
                    height: '100%',
                    borderBottomWidth: 0,
                    borderRightWidth: 'thin',
                },
                t.flexItem && { alignSelf: 'stretch', height: 'auto' }
            ),
        ({ theme: e, ownerState: t }) =>
            b(
                {},
                t.children && {
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    border: 0,
                    '&::before, &::after': {
                        position: 'relative',
                        width: '100%',
                        borderTop: `thin solid ${
                            (e.vars || e).palette.divider
                        }`,
                        top: '50%',
                        content: '""',
                        transform: 'translateY(50%)',
                    },
                }
            ),
        ({ theme: e, ownerState: t }) =>
            b(
                {},
                t.children &&
                    t.orientation === 'vertical' && {
                        flexDirection: 'column',
                        '&::before, &::after': {
                            height: '100%',
                            top: '0%',
                            left: '50%',
                            borderTop: 0,
                            borderLeft: `thin solid ${
                                (e.vars || e).palette.divider
                            }`,
                            transform: 'translateX(0%)',
                        },
                    }
            ),
        ({ ownerState: e }) =>
            b(
                {},
                e.textAlign === 'right' &&
                    e.orientation !== 'vertical' && {
                        '&::before': { width: '90%' },
                        '&::after': { width: '10%' },
                    },
                e.textAlign === 'left' &&
                    e.orientation !== 'vertical' && {
                        '&::before': { width: '10%' },
                        '&::after': { width: '90%' },
                    }
            )
    ),
    B1 = qr('span', {
        name: 'MuiDivider',
        slot: 'Wrapper',
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.wrapper,
                n.orientation === 'vertical' && t.wrapperVertical,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        b(
            {
                display: 'inline-block',
                paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
                paddingRight: `calc(${e.spacing(1)} * 1.2)`,
            },
            t.orientation === 'vertical' && {
                paddingTop: `calc(${e.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
            }
        )
    ),
    W1 = C.forwardRef(function (t, n) {
        const r = Di({ props: t, name: 'MuiDivider' }),
            {
                absolute: o = !1,
                children: i,
                className: a,
                component: l = i ? 'div' : 'hr',
                flexItem: s = !1,
                light: u = !1,
                orientation: f = 'horizontal',
                role: m = l !== 'hr' ? 'separator' : void 0,
                textAlign: p = 'center',
                variant: v = 'fullWidth',
            } = r,
            y = we(r, $1),
            g = b({}, r, {
                absolute: o,
                component: l,
                flexItem: s,
                light: u,
                orientation: f,
                role: m,
                textAlign: p,
                variant: v,
            }),
            _ = j1(g);
        return R(
            D1,
            b(
                {
                    as: l,
                    className: $i(_.root, a),
                    role: m,
                    ref: n,
                    ownerState: g,
                },
                y,
                {
                    children: i
                        ? R(B1, {
                              className: _.wrapper,
                              ownerState: g,
                              children: i,
                          })
                        : null,
                }
            )
        );
    }),
    qu = W1;
const H1 = 'modulepreload',
    V1 = function (e) {
        return '/' + e;
    },
    ec = {},
    K1 = function (t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName('link');
        return Promise.all(
            n.map((i) => {
                if (((i = V1(i)), i in ec)) return;
                ec[i] = !0;
                const a = i.endsWith('.css'),
                    l = a ? '[rel="stylesheet"]' : '';
                if (!!r)
                    for (let f = o.length - 1; f >= 0; f--) {
                        const m = o[f];
                        if (m.href === i && (!a || m.rel === 'stylesheet'))
                            return;
                    }
                else if (document.querySelector(`link[href="${i}"]${l}`))
                    return;
                const u = document.createElement('link');
                if (
                    ((u.rel = a ? 'stylesheet' : H1),
                    a || ((u.as = 'script'), (u.crossOrigin = '')),
                    (u.href = i),
                    document.head.appendChild(u),
                    a)
                )
                    return new Promise((f, m) => {
                        u.addEventListener('load', f),
                            u.addEventListener('error', () =>
                                m(new Error(`Unable to preload CSS for ${i}`))
                            );
                    });
            })
        ).then(() => t());
    },
    G1 = C.createContext(null);
function Q1(e, t) {
    const n = Array.isArray(e) ? e[0] : e ? e.x : 0,
        r = Array.isArray(e) ? e[1] : e ? e.y : 0,
        o = Array.isArray(t) ? t[0] : t ? t.x : 0,
        i = Array.isArray(t) ? t[1] : t ? t.y : 0;
    return n === o && r === i;
}
function ut(e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    if (Array.isArray(e)) {
        if (!Array.isArray(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!ut(e[n], t[n])) return !1;
        return !0;
    } else if (Array.isArray(t)) return !1;
    if (typeof e == 'object' && typeof t == 'object') {
        const n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (const o of n)
            if (!t.hasOwnProperty(o) || !ut(e[o], t[o])) return !1;
        return !0;
    }
    return !1;
}
function Y1(e) {
    const t = e.clone();
    return (t.pixelsToGLUnits = e.pixelsToGLUnits), t;
}
function tc(e, t) {
    if (!e.getProjection) return;
    const n = e.getProjection(),
        r = t.getProjection();
    ut(n, r) || t.setProjection(n);
}
function nc(e) {
    return {
        longitude: e.center.lng,
        latitude: e.center.lat,
        zoom: e.zoom,
        pitch: e.pitch,
        bearing: e.bearing,
        padding: e.padding,
    };
}
function rc(e, t) {
    const n = t.viewState || t;
    let r = !1;
    if ('longitude' in n && 'latitude' in n) {
        const o = e.center;
        (e.center = new o.constructor(n.longitude, n.latitude)),
            (r = r || o !== e.center);
    }
    if ('zoom' in n) {
        const o = e.zoom;
        (e.zoom = n.zoom), (r = r || o !== e.zoom);
    }
    if ('bearing' in n) {
        const o = e.bearing;
        (e.bearing = n.bearing), (r = r || o !== e.bearing);
    }
    if ('pitch' in n) {
        const o = e.pitch;
        (e.pitch = n.pitch), (r = r || o !== e.pitch);
    }
    return (
        n.padding &&
            !e.isPaddingEqual(n.padding) &&
            ((r = !0), (e.padding = n.padding)),
        r
    );
}
const J1 = [
    'type',
    'source',
    'source-layer',
    'minzoom',
    'maxzoom',
    'filter',
    'layout',
];
function oc(e) {
    if (!e) return null;
    if (typeof e == 'string' || ('toJS' in e && (e = e.toJS()), !e.layers))
        return e;
    const t = {};
    for (const r of e.layers) t[r.id] = r;
    const n = e.layers.map((r) => {
        let o = null;
        'interactive' in r &&
            ((o = Object.assign({}, r)), delete o.interactive);
        const i = t[r.ref];
        if (i) {
            (o = o || Object.assign({}, r)), delete o.ref;
            for (const a of J1) a in i && (o[a] = i[a]);
        }
        return o || r;
    });
    return { ...e, layers: n };
}
const ic = { version: 8, sources: {}, layers: [] },
    ac = {
        mousedown: 'onMouseDown',
        mouseup: 'onMouseUp',
        mouseover: 'onMouseOver',
        mousemove: 'onMouseMove',
        click: 'onClick',
        dblclick: 'onDblClick',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        mouseout: 'onMouseOut',
        contextmenu: 'onContextMenu',
        touchstart: 'onTouchStart',
        touchend: 'onTouchEnd',
        touchmove: 'onTouchMove',
        touchcancel: 'onTouchCancel',
    },
    Sa = {
        movestart: 'onMoveStart',
        move: 'onMove',
        moveend: 'onMoveEnd',
        dragstart: 'onDragStart',
        drag: 'onDrag',
        dragend: 'onDragEnd',
        zoomstart: 'onZoomStart',
        zoom: 'onZoom',
        zoomend: 'onZoomEnd',
        rotatestart: 'onRotateStart',
        rotate: 'onRotate',
        rotateend: 'onRotateEnd',
        pitchstart: 'onPitchStart',
        pitch: 'onPitch',
        pitchend: 'onPitchEnd',
    },
    lc = {
        wheel: 'onWheel',
        boxzoomstart: 'onBoxZoomStart',
        boxzoomend: 'onBoxZoomEnd',
        boxzoomcancel: 'onBoxZoomCancel',
        resize: 'onResize',
        load: 'onLoad',
        render: 'onRender',
        idle: 'onIdle',
        remove: 'onRemove',
        data: 'onData',
        styledata: 'onStyleData',
        sourcedata: 'onSourceData',
        error: 'onError',
    },
    Z1 = [
        'minZoom',
        'maxZoom',
        'minPitch',
        'maxPitch',
        'maxBounds',
        'projection',
        'renderWorldCopies',
    ],
    X1 = [
        'scrollZoom',
        'boxZoom',
        'dragRotate',
        'dragPan',
        'keyboard',
        'doubleClickZoom',
        'touchZoomRotate',
        'touchPitch',
    ];
class Vn {
    constructor(t, n, r) {
        (this._map = null),
            (this._internalUpdate = !1),
            (this._inRender = !1),
            (this._hoveredFeatures = null),
            (this._deferredEvents = {
                move: !1,
                zoom: !1,
                pitch: !1,
                rotate: !1,
            }),
            (this._onEvent = (o) => {
                const i = this.props[lc[o.type]];
                i ? i(o) : o.type === 'error' && console.error(o.error);
            }),
            (this._onPointerEvent = (o) => {
                (o.type === 'mousemove' || o.type === 'mouseout') &&
                    this._updateHover(o);
                const i = this.props[ac[o.type]];
                i &&
                    (this.props.interactiveLayerIds &&
                        o.type !== 'mouseover' &&
                        o.type !== 'mouseout' &&
                        (o.features =
                            this._hoveredFeatures ||
                            this._queryRenderedFeatures(o.point)),
                    i(o),
                    delete o.features);
            }),
            (this._onCameraEvent = (o) => {
                if (!this._internalUpdate) {
                    const i = this.props[Sa[o.type]];
                    i && i(o);
                }
                o.type in this._deferredEvents &&
                    (this._deferredEvents[o.type] = !1);
            }),
            (this._MapClass = t),
            (this.props = n),
            this._initialize(r);
    }
    get map() {
        return this._map;
    }
    get transform() {
        return this._renderTransform;
    }
    setProps(t) {
        const n = this.props;
        this.props = t;
        const r = this._updateSettings(t, n);
        r && this._createShadowTransform(this._map);
        const o = this._updateSize(t),
            i = this._updateViewState(t, !0);
        this._updateStyle(t, n),
            this._updateStyleComponents(t, n),
            this._updateHandlers(t, n),
            (r || o || (i && !this._map.isMoving())) && this.redraw();
    }
    static reuse(t, n) {
        const r = Vn.savedMaps.pop();
        if (!r) return null;
        const o = r.map,
            i = o.getContainer();
        for (n.className = i.className; i.childNodes.length > 0; )
            n.appendChild(i.childNodes[0]);
        o._container = n;
        const a = o._resizeObserver;
        a && (a.disconnect(), a.observe(n)),
            r.setProps({ ...t, styleDiffing: !1 }),
            o.resize();
        const { initialViewState: l } = t;
        return (
            l &&
                (l.bounds
                    ? o.fitBounds(l.bounds, {
                          ...l.fitBoundsOptions,
                          duration: 0,
                      })
                    : r._updateViewState(l, !1)),
            o.isStyleLoaded()
                ? o.fire('load')
                : o.once('styledata', () => o.fire('load')),
            o._update(),
            r
        );
    }
    _initialize(t) {
        const { props: n } = this,
            { mapStyle: r = ic } = n,
            o = {
                ...n,
                ...n.initialViewState,
                accessToken: n.mapboxAccessToken || q1() || null,
                container: t,
                style: oc(r),
            },
            i = o.initialViewState || o.viewState || o;
        if (
            (Object.assign(o, {
                center: [i.longitude || 0, i.latitude || 0],
                zoom: i.zoom || 0,
                pitch: i.pitch || 0,
                bearing: i.bearing || 0,
            }),
            n.gl)
        ) {
            const f = HTMLCanvasElement.prototype.getContext;
            HTMLCanvasElement.prototype.getContext = () => (
                (HTMLCanvasElement.prototype.getContext = f), n.gl
            );
        }
        const a = new this._MapClass(o);
        i.padding && a.setPadding(i.padding),
            n.cursor && (a.getCanvas().style.cursor = n.cursor),
            this._createShadowTransform(a);
        const l = a._render;
        a._render = (f) => {
            (this._inRender = !0), l.call(a, f), (this._inRender = !1);
        };
        const s = a._renderTaskQueue.run;
        (a._renderTaskQueue.run = (f) => {
            s.call(a._renderTaskQueue, f), this._onBeforeRepaint();
        }),
            a.on('render', () => this._onAfterRepaint());
        const u = a.fire;
        (a.fire = this._fireEvent.bind(this, u)),
            a.on('resize', () => {
                this._renderTransform.resize(
                    a.transform.width,
                    a.transform.height
                );
            }),
            a.on('styledata', () => {
                this._updateStyleComponents(this.props, {}),
                    tc(a.transform, this._renderTransform);
            }),
            a.on('sourcedata', () =>
                this._updateStyleComponents(this.props, {})
            );
        for (const f in ac) a.on(f, this._onPointerEvent);
        for (const f in Sa) a.on(f, this._onCameraEvent);
        for (const f in lc) a.on(f, this._onEvent);
        this._map = a;
    }
    recycle() {
        const n = this.map.getContainer().querySelector('[mapboxgl-children]');
        n == null || n.remove(), Vn.savedMaps.push(this);
    }
    destroy() {
        this._map.remove();
    }
    redraw() {
        const t = this._map;
        !this._inRender &&
            t.style &&
            (t._frame && (t._frame.cancel(), (t._frame = null)), t._render());
    }
    _createShadowTransform(t) {
        const n = Y1(t.transform);
        (t.painter.transform = n), (this._renderTransform = n);
    }
    _updateSize(t) {
        const { viewState: n } = t;
        if (n) {
            const r = this._map;
            if (
                n.width !== r.transform.width ||
                n.height !== r.transform.height
            )
                return r.resize(), !0;
        }
        return !1;
    }
    _updateViewState(t, n) {
        if (this._internalUpdate) return !1;
        const r = this._map,
            o = this._renderTransform,
            { zoom: i, pitch: a, bearing: l } = o,
            s = r.isMoving();
        s && (o.cameraElevationReference = 'sea');
        const u = rc(o, { ...nc(r.transform), ...t });
        if ((s && (o.cameraElevationReference = 'ground'), u && n)) {
            const f = this._deferredEvents;
            (f.move = !0),
                f.zoom || (f.zoom = i !== o.zoom),
                f.rotate || (f.rotate = l !== o.bearing),
                f.pitch || (f.pitch = a !== o.pitch);
        }
        return s || rc(r.transform, t), u;
    }
    _updateSettings(t, n) {
        const r = this._map;
        let o = !1;
        for (const i of Z1)
            if (i in t && !ut(t[i], n[i])) {
                o = !0;
                const a = r[`set${i[0].toUpperCase()}${i.slice(1)}`];
                a == null || a.call(r, t[i]);
            }
        return o;
    }
    _updateStyle(t, n) {
        if (
            (t.cursor !== n.cursor &&
                (this._map.getCanvas().style.cursor = t.cursor),
            t.mapStyle !== n.mapStyle)
        ) {
            const { mapStyle: r = ic, styleDiffing: o = !0 } = t,
                i = { diff: o };
            return (
                'localIdeographFontFamily' in t &&
                    (i.localIdeographFontFamily = t.localIdeographFontFamily),
                this._map.setStyle(oc(r), i),
                !0
            );
        }
        return !1;
    }
    _updateStyleComponents(t, n) {
        const r = this._map;
        let o = !1;
        return (
            r.isStyleLoaded() &&
                ('light' in t &&
                    r.setLight &&
                    !ut(t.light, n.light) &&
                    ((o = !0), r.setLight(t.light)),
                'fog' in t &&
                    r.setFog &&
                    !ut(t.fog, n.fog) &&
                    ((o = !0), r.setFog(t.fog)),
                'terrain' in t &&
                    r.setTerrain &&
                    !ut(t.terrain, n.terrain) &&
                    (!t.terrain || r.getSource(t.terrain.source)) &&
                    ((o = !0), r.setTerrain(t.terrain))),
            o
        );
    }
    _updateHandlers(t, n) {
        var r, o;
        const i = this._map;
        let a = !1;
        for (const l of X1) {
            const s = (r = t[l]) !== null && r !== void 0 ? r : !0,
                u = (o = n[l]) !== null && o !== void 0 ? o : !0;
            ut(s, u) || ((a = !0), s ? i[l].enable(s) : i[l].disable());
        }
        return a;
    }
    _queryRenderedFeatures(t) {
        const n = this._map,
            { interactiveLayerIds: r = [] } = this.props;
        try {
            return n.queryRenderedFeatures(t, {
                layers: r.filter(n.getLayer.bind(n)),
            });
        } catch {
            return [];
        }
    }
    _updateHover(t) {
        var n;
        const { props: r } = this;
        if (
            r.interactiveLayerIds &&
            (r.onMouseMove || r.onMouseEnter || r.onMouseLeave)
        ) {
            const i = t.type,
                a =
                    ((n = this._hoveredFeatures) === null || n === void 0
                        ? void 0
                        : n.length) > 0,
                l = this._queryRenderedFeatures(t.point),
                s = l.length > 0;
            !s && a && ((t.type = 'mouseleave'), this._onPointerEvent(t)),
                (this._hoveredFeatures = l),
                s && !a && ((t.type = 'mouseenter'), this._onPointerEvent(t)),
                (t.type = i);
        } else this._hoveredFeatures = null;
    }
    _fireEvent(t, n, r) {
        const o = this._map,
            i = o.transform,
            a = typeof n == 'string' ? n : n.type;
        return (
            a === 'move' && this._updateViewState(this.props, !1),
            a in Sa &&
            (typeof n == 'object' && (n.viewState = nc(i)),
            this._map.isMoving())
                ? ((o.transform = this._renderTransform),
                  t.call(o, n, r),
                  (o.transform = i),
                  o)
                : (t.call(o, n, r), o)
        );
    }
    _onBeforeRepaint() {
        const t = this._map;
        this._internalUpdate = !0;
        for (const r in this._deferredEvents)
            this._deferredEvents[r] && t.fire(r);
        this._internalUpdate = !1;
        const n = this._map.transform;
        (t.transform = this._renderTransform),
            (this._onAfterRepaint = () => {
                tc(this._renderTransform, n), (t.transform = n);
            });
    }
}
Vn.savedMaps = [];
function q1() {
    let e = null;
    if (typeof location < 'u') {
        const t = /access_token=([^&\/]*)/.exec(location.search);
        e = t && t[1];
    }
    try {
        e = e || {}.MapboxAccessToken;
    } catch {}
    try {
        e = e || {}.REACT_APP_MAPBOX_ACCESS_TOKEN;
    } catch {}
    return e;
}
const ey = [
    'setMaxBounds',
    'setMinZoom',
    'setMaxZoom',
    'setMinPitch',
    'setMaxPitch',
    'setRenderWorldCopies',
    'setProjection',
    'setStyle',
    'addSource',
    'removeSource',
    'addLayer',
    'removeLayer',
    'setLayerZoomRange',
    'setFilter',
    'setPaintProperty',
    'setLayoutProperty',
    'setLight',
    'setTerrain',
    'setFog',
    'remove',
];
function ty(e) {
    if (!e) return null;
    const t = e.map,
        n = {
            getMap: () => t,
            getCenter: () => e.transform.center,
            getZoom: () => e.transform.zoom,
            getBearing: () => e.transform.bearing,
            getPitch: () => e.transform.pitch,
            getPadding: () => e.transform.padding,
            getBounds: () => e.transform.getBounds(),
            project: (r) => {
                const o = t.transform;
                t.transform = e.transform;
                const i = t.project(r);
                return (t.transform = o), i;
            },
            unproject: (r) => {
                const o = t.transform;
                t.transform = e.transform;
                const i = t.unproject(r);
                return (t.transform = o), i;
            },
            queryTerrainElevation: (r, o) => {
                const i = t.transform;
                t.transform = e.transform;
                const a = t.queryTerrainElevation(r, o);
                return (t.transform = i), a;
            },
        };
    for (const r of ny(t))
        !(r in n) && !ey.includes(r) && (n[r] = t[r].bind(t));
    return n;
}
function ny(e) {
    const t = new Set();
    let n = e;
    for (; n; ) {
        for (const r of Object.getOwnPropertyNames(n))
            r[0] !== '_' &&
                typeof e[r] == 'function' &&
                r !== 'fire' &&
                r !== 'setEventedParent' &&
                t.add(r);
        n = Object.getPrototypeOf(n);
    }
    return Array.from(t);
}
const ry = typeof document < 'u' ? C.useLayoutEffect : C.useEffect,
    oy = [
        'baseApiUrl',
        'maxParallelImageRequests',
        'workerClass',
        'workerCount',
        'workerUrl',
    ];
function iy(e, t) {
    for (const r of oy) r in t && (e[r] = t[r]);
    const {
        RTLTextPlugin:
            n = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    } = t;
    n &&
        e.getRTLTextPluginStatus &&
        e.getRTLTextPluginStatus() === 'unavailable' &&
        e.setRTLTextPlugin(
            n,
            (r) => {
                r && console.error(r);
            },
            !1
        );
}
const Bi = C.createContext(null);
function ay(e, t, n) {
    const r = C.useContext(G1),
        [o, i] = C.useState(null),
        a = C.useRef(),
        { current: l } = C.useRef({ mapLib: null, map: null });
    C.useEffect(() => {
        const f = e.mapLib;
        let m = !0,
            p;
        return (
            Promise.resolve(f || n)
                .then((v) => {
                    if (!m) return;
                    if (!v) throw new Error('Invalid mapLib');
                    const y = 'Map' in v ? v : v.default;
                    if (!y.Map) throw new Error('Invalid mapLib');
                    if ((iy(y, e), !y.supported || y.supported(e)))
                        e.reuseMaps && (p = Vn.reuse(e, a.current)),
                            p || (p = new Vn(y.Map, e, a.current)),
                            (l.map = ty(p)),
                            (l.mapLib = y),
                            i(p),
                            r == null || r.onMapMount(l.map, e.id);
                    else
                        throw new Error('Map is not supported by this browser');
                })
                .catch((v) => {
                    const { onError: y } = e;
                    y
                        ? y({
                              type: 'error',
                              target: null,
                              originalEvent: null,
                              error: v,
                          })
                        : console.error(v);
                }),
            () => {
                (m = !1),
                    p &&
                        (r == null || r.onMapUnmount(e.id),
                        e.reuseMaps ? p.recycle() : p.destroy());
            }
        );
    }, []),
        ry(() => {
            o && o.setProps(e);
        }),
        C.useImperativeHandle(t, () => l.map, [o]);
    const s = C.useMemo(
            () => ({
                position: 'relative',
                width: '100%',
                height: '100%',
                ...e.style,
            }),
            [e.style]
        ),
        u = { height: '100%' };
    return C.createElement(
        'div',
        { id: e.id, ref: a, style: s },
        o &&
            C.createElement(
                Bi.Provider,
                { value: l },
                C.createElement(
                    'div',
                    { 'mapboxgl-children': '', style: u },
                    e.children
                )
            )
    );
}
const ly =
    /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function sn(e, t) {
    if (!e || !t) return;
    const n = e.style;
    for (const r in t) {
        const o = t[r];
        Number.isFinite(o) && !ly.test(r) ? (n[r] = `${o}px`) : (n[r] = o);
    }
}
function sy(e, t) {
    const { map: n, mapLib: r } = C.useContext(Bi),
        o = C.useRef({ props: e });
    o.current.props = e;
    const i = C.useMemo(() => {
        let g = !1;
        C.Children.forEach(e.children, (c) => {
            c && (g = !0);
        });
        const _ = { ...e, element: g ? document.createElement('div') : null },
            d = new r.Marker(_);
        return (
            d.setLngLat([e.longitude, e.latitude]),
            d.getElement().addEventListener('click', (c) => {
                var h, w;
                (w = (h = o.current.props).onClick) === null ||
                    w === void 0 ||
                    w.call(h, { type: 'click', target: d, originalEvent: c });
            }),
            d.on('dragstart', (c) => {
                var h, w;
                const S = c;
                (S.lngLat = i.getLngLat()),
                    (w = (h = o.current.props).onDragStart) === null ||
                        w === void 0 ||
                        w.call(h, S);
            }),
            d.on('drag', (c) => {
                var h, w;
                const S = c;
                (S.lngLat = i.getLngLat()),
                    (w = (h = o.current.props).onDrag) === null ||
                        w === void 0 ||
                        w.call(h, S);
            }),
            d.on('dragend', (c) => {
                var h, w;
                const S = c;
                (S.lngLat = i.getLngLat()),
                    (w = (h = o.current.props).onDragEnd) === null ||
                        w === void 0 ||
                        w.call(h, S);
            }),
            d
        );
    }, []);
    C.useEffect(
        () => (
            i.addTo(n.getMap()),
            () => {
                i.remove();
            }
        ),
        []
    );
    const {
        longitude: a,
        latitude: l,
        offset: s,
        style: u,
        draggable: f = !1,
        popup: m = null,
        rotation: p = 0,
        rotationAlignment: v = 'auto',
        pitchAlignment: y = 'auto',
    } = e;
    return (
        C.useEffect(() => {
            sn(i.getElement(), u);
        }, [u]),
        C.useImperativeHandle(t, () => i, []),
        (i.getLngLat().lng !== a || i.getLngLat().lat !== l) &&
            i.setLngLat([a, l]),
        s && !Q1(i.getOffset(), s) && i.setOffset(s),
        i.isDraggable() !== f && i.setDraggable(f),
        i.getRotation() !== p && i.setRotation(p),
        i.getRotationAlignment() !== v && i.setRotationAlignment(v),
        i.getPitchAlignment() !== y && i.setPitchAlignment(y),
        i.getPopup() !== m && i.setPopup(m),
        xr.createPortal(e.children, i.getElement())
    );
}
const uy = C.memo(C.forwardRef(sy));
function sc(e) {
    return new Set(e ? e.trim().split(/\s+/) : []);
}
function cy(e, t) {
    const { map: n, mapLib: r } = C.useContext(Bi),
        o = C.useMemo(() => document.createElement('div'), []),
        i = C.useRef({ props: e });
    i.current.props = e;
    const a = C.useMemo(() => {
        const l = { ...e },
            s = new r.Popup(l);
        return (
            s.setLngLat([e.longitude, e.latitude]),
            s.once('open', (u) => {
                var f, m;
                (m = (f = i.current.props).onOpen) === null ||
                    m === void 0 ||
                    m.call(f, u);
            }),
            s
        );
    }, []);
    if (
        (C.useEffect(() => {
            const l = (s) => {
                var u, f;
                (f = (u = i.current.props).onClose) === null ||
                    f === void 0 ||
                    f.call(u, s);
            };
            return (
                a.on('close', l),
                a.setDOMContent(o).addTo(n.getMap()),
                () => {
                    a.off('close', l), a.isOpen() && a.remove();
                }
            );
        }, []),
        C.useEffect(() => {
            sn(a.getElement(), e.style);
        }, [e.style]),
        C.useImperativeHandle(t, () => a, []),
        a.isOpen() &&
            ((a.getLngLat().lng !== e.longitude ||
                a.getLngLat().lat !== e.latitude) &&
                a.setLngLat([e.longitude, e.latitude]),
            e.offset &&
                !ut(a.options.offset, e.offset) &&
                a.setOffset(e.offset),
            (a.options.anchor !== e.anchor ||
                a.options.maxWidth !== e.maxWidth) &&
                ((a.options.anchor = e.anchor), a.setMaxWidth(e.maxWidth)),
            a.options.className !== e.className))
    ) {
        const l = sc(a.options.className),
            s = sc(e.className);
        for (const u of l) s.has(u) || a.removeClassName(u);
        for (const u of s) l.has(u) || a.addClassName(u);
        a.options.className = e.className;
    }
    return xr.createPortal(e.children, o);
}
C.memo(C.forwardRef(cy));
function eo(e, t, n, r) {
    const o = C.useContext(Bi),
        i = C.useMemo(() => e(o), []);
    return (
        C.useEffect(() => {
            const a = r || n || t,
                l = typeof t == 'function' && typeof n == 'function' ? t : null,
                s =
                    typeof n == 'function'
                        ? n
                        : typeof t == 'function'
                        ? t
                        : null,
                { map: u } = o;
            return (
                u.hasControl(i) ||
                    (u.addControl(i, a == null ? void 0 : a.position),
                    l && l(o)),
                () => {
                    s && s(o), u.hasControl(i) && u.removeControl(i);
                }
            );
        }, []),
        i
    );
}
function dy(e) {
    const t = eo(({ mapLib: n }) => new n.AttributionControl(e), {
        position: e.position,
    });
    return (
        C.useEffect(() => {
            sn(t._container, e.style);
        }, [e.style]),
        null
    );
}
C.memo(dy);
function fy(e) {
    const t = eo(
        ({ mapLib: n }) =>
            new n.FullscreenControl({
                container:
                    e.containerId && document.getElementById(e.containerId),
            }),
        { position: e.position }
    );
    return (
        C.useEffect(() => {
            sn(t._controlContainer, e.style);
        }, [e.style]),
        null
    );
}
C.memo(fy);
function py(e, t) {
    const n = C.useRef({ props: e }),
        r = eo(
            ({ mapLib: o }) => {
                const i = new o.GeolocateControl(e),
                    a = i._setupUI;
                return (
                    (i._setupUI = (l) => {
                        i._container.hasChildNodes() || a(l);
                    }),
                    i.on('geolocate', (l) => {
                        var s, u;
                        (u = (s = n.current.props).onGeolocate) === null ||
                            u === void 0 ||
                            u.call(s, l);
                    }),
                    i.on('error', (l) => {
                        var s, u;
                        (u = (s = n.current.props).onError) === null ||
                            u === void 0 ||
                            u.call(s, l);
                    }),
                    i.on('outofmaxbounds', (l) => {
                        var s, u;
                        (u = (s = n.current.props).onOutOfMaxBounds) === null ||
                            u === void 0 ||
                            u.call(s, l);
                    }),
                    i.on('trackuserlocationstart', (l) => {
                        var s, u;
                        (u = (s = n.current.props).onTrackUserLocationStart) ===
                            null ||
                            u === void 0 ||
                            u.call(s, l);
                    }),
                    i.on('trackuserlocationend', (l) => {
                        var s, u;
                        (u = (s = n.current.props).onTrackUserLocationEnd) ===
                            null ||
                            u === void 0 ||
                            u.call(s, l);
                    }),
                    i
                );
            },
            { position: e.position }
        );
    return (
        (n.current.props = e),
        C.useImperativeHandle(t, () => r, []),
        C.useEffect(() => {
            sn(r._container, e.style);
        }, [e.style]),
        null
    );
}
const hy = C.memo(C.forwardRef(py));
function my(e) {
    const t = eo(({ mapLib: n }) => new n.NavigationControl(e), {
        position: e.position,
    });
    return (
        C.useEffect(() => {
            sn(t._container, e.style);
        }, [e.style]),
        null
    );
}
C.memo(my);
function gy(e) {
    const t = eo(({ mapLib: i }) => new i.ScaleControl(e), {
            position: e.position,
        }),
        n = C.useRef(e),
        r = n.current;
    n.current = e;
    const { style: o } = e;
    return (
        e.maxWidth !== void 0 &&
            e.maxWidth !== r.maxWidth &&
            (t.options.maxWidth = e.maxWidth),
        e.unit !== void 0 && e.unit !== r.unit && t.setUnit(e.unit),
        C.useEffect(() => {
            sn(t._container, o);
        }, [o]),
        null
    );
}
C.memo(gy);
const yy = K1(() => import('./mapbox-gl-24df3c61.js').then((e) => e.m), []),
    vy = (() =>
        C.forwardRef(function (t, n) {
            return ay(t, n, yy);
        }))(),
    wy = uy,
    Sy = hy,
    ky = Be.div`
    width: 100%;
    height: 100vh;
`,
    xy = [
        {
            id: '1',
            date: 'c. 1450 BC',
            name: 'Thutmose III Jebel Barkal Stele',
            type: 'Sighting',
            location: { name: 'Egypt', coordinates: '26, 30' },
            description: `After conquering the ancient Nubian city of Napata,
    Thutmose III had a stele erected at the Temple of Amun,
    beneath the cobra-shaped Jebel Barkal outcropping
    [4] The stele describes how "a star came down" to set fire to Thutmose's adversaries
    [5][6] The incident has been cited by many ufologists via the purported Tulli Papyrus,
    considered a likely fraud by Edward Condon.[7] The alleged translation
    of the papyrus—published in issue 41 of the Fortean Society's magazine
    Doubt—included such Fortean phenomena as "circles of fire" and fish that "fell down from the sky".`,
            url: 'https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings',
        },
        {
            id: '2',
            date: '1566-8-7',
            name: '1566 celestial phenomenon over Basel',
            type: 'Sighting',
            location: {
                name: 'Switzerland; Basel, Basel',
                coordinates: '47.55, 7.566667',
            },
            description:
                'A broadsheet published in 1566 depicted numerous spherical objects appearing out of the sun. The event was recorded and depicted by Samuel Coccius, "a student of the Holy Scripture and of the free arts, at Basel".',
        },
        {
            id: '3',
            date: '1609-9-22',
            name: 'Gwanghaegun period UFO Turmoil',
            type: 'Sighting',
            location: {
                name: 'Joseon (Korea); Gangwon Province',
                coordinates: '37.750000,128.250000',
            },
            description:
                'On September 22, 1609, multiple witnesses reported seeing UFOs in Goseong, Wonju Gangneung at 사시 (9am-11am), Chuncheon County at 오시 (11am-1pm) and Yangyang County at 미시 (1pm-3pm). They described a Halo or washbowl that was divided in two.',
        },
        {
            id: '4',
            date: '1803-2-22 or 1803-3-24',
            name: 'Utsuro-bune at Haratono-hama',
            type: 'Close encounter',
            location: {
                name: 'Japan; Hitachi Province',
                coordinates: '36.233333, 140.283333',
            },
            description:
                'In 1803, local fishermen reportedly found a closed vessel with small windows adrift. They said when they investigated it that "a beautiful young woman" with red and white hair and dressed in strange clothes emerged, holding a square box "that no one was allowed to touch" and that she spoke to them in a language they had never heard before.',
        },
        {
            id: '5',
            date: '1883-8-12',
            name: 'Bonilla observation',
            type: 'Sighting',
            location: {
                name: 'Mexico; Zacatecas Observatory, Zacatecas',
                coordinates: '23.3, -102.7',
            },
            description:
                "On August 12, the astronomer José Bonilla counted over 400 dark, unidentified objects crossing the sun while observing sunspot activity at Zacatecas Observatory in Mexico. He was able to take photographs, exposing wet plates at 1/100 second. He published an account of the event three years later in L'Astronomie, a French astronomy journal.",
        },
        {
            id: '6',
            date: '1896-11-17 to 1897-4-23',
            name: 'Mystery airships',
            type: 'Sighting',
            location: { name: 'United States', coordinates: '37, -120' },
            description:
                'Newspapers across California, and later other states, printed reports of strange airships. Common elements of the descriptions included flapping wings, a cigar-shaped body, and a metal hull.',
        },
        {
            id: '7',
            date: '1897-4-17',
            name: 'Aurora, Texas, UFO incident',
            type: 'Crash',
            location: {
                name: 'United States; Aurora, Texas',
                coordinates: '33.055833, -97.509722',
            },
            description:
                'Local correspondent S.E. Hayden reported the crash of an airship piloted by an alien. According to Hayden, the spaceman was buried in the local cemetery. Residents of Aurora embrace the story without taking it seriously.',
        },
        {
            id: '8',
            date: '1907',
            name: 'Mihal Grameno UFO',
            type: 'Sighting',
            location: {
                name: 'Ottoman Empire; Albania',
                coordinates: '41, 20',
            },
            description:
                'Mihal Grameno a distinguished Albanian journalist, writer, and activist writes in The Albanian Uprising, "One night, while the fighters of Çerçiz were stationed at the top of a high mountain, a shiny object flew in front of us, stood suspended in the air for several minutes, and then disappeared',
        },
        {
            id: '9',
            date: '1909',
            name: 'New Zealand airship sightings',
            type: 'Sighting',
            location: {
                name: 'New Zealand; Otago',
                coordinates: '-45.236131, 169.632071',
            },
            description:
                'In August 1909, moving and whirring lights were reported in the sky around Otago. In the following months, many sightings were reported across New Zealand with varying descriptions of the craft and crew.',
        },
        {
            id: '10',
            date: '1917-8-13, 1917-9-13, 1917-10-13',
            name: 'Miracle of the Sun',
            type: 'Sighting',
            location: {
                name: 'Portugal; Fátima, Santarém District',
                coordinates: '39.233333, -8.683333',
            },
            description: `Thousands of people gathered in Fátima based on reported Marian apparitions and observed bizarre solar activity. Catholic bishop José Alves Correia da Silva declared the miracle "worthy of belief" on 13 October 1930, and the primarily Catholic witnesses viewed the event in religious terms. Later, Jacques Vallée, Joaquim Fernandes and Fina d'Armada interpreted it as a mass UFO sighting.`,
        },
        {
            id: '11',
            date: '1933-7-8',
            name: 'UFOs above Vlore',
            type: 'Sighting',
            location: {
                name: 'Albania; Vlorë',
                coordinates: '40.466667, 19.483333',
            },
            description:
                'In 1933, a list of abnormal reports was addressed to the Prefecture of Milan, mentioning an unusual incident that occurred on 8 July 1933 in the sky of Vlorë. It was reported that two airplanes changed direction in a non-normal way for the technology of the time.',
        },
        {
            id: '12',
            date: '1940 c. 1940',
            name: 'Foo fighters',
            type: 'Sighting',
            location: {
                name: 'Over World War II theaters',
                coordinates: '50.349617, 10.309510',
            },
            description:
                'During World War II, allied fighter pilots above Europe reported colorful balls of light following their aircraft at high speeds.',
        },
        {
            id: '13',
            date: '1941 c. 1941',
            name: 'Cape Girardeau UFO legend',
            type: 'Crash',
            location: {
                name: 'United States; Cape Girardeau, Missouri',
                coordinates: '37.310833, -89.559722',
            },
            description:
                'A local legend first gained wider attention in the 1980s when resident Charlotte Mann claimed in interviews that her father, Reverend William Huffman of the Red Star Baptist Church, had administered last rites for the dying crew of a crashed flying saucer.',
        },
        {
            id: '14',
            date: '1942-2-24',
            name: 'Battle of Los Angeles',
            type: 'Undefined report',
            location: {
                name: 'United States; Los Angeles, California',
                coordinates: '34.05, -118.25',
            },
            description:
                'Just months after the Japanese Attack on Pearl Harbor, U.S. radar stations picked up an unidentified aerial object in the early morning. For several hours, anti-aircraft artillery fired thousands of rounds into the searchlight-scoured sky. The LA Times reported that “the air over Los Angeles erupted like a volcano.”',
        },
        {
            id: '15',
            date: '1946',
            name: 'The Ghost Rockets',
            type: 'Sighting',
            location: {
                name: 'Scandinavia and other parts of Europe',
                coordinates: '66.37070,22.30556',
            },
            description:
                'Thousands of UFO sightings were reported over Europe. Due in part to concerns that foreign governments were testing recovered experimental German technology, the Swedish and Greek governments investigated the reports separately.',
        },
        {
            id: '16',
            date: '1946-5-18',
            name: 'Ängelholm UFO memorial',
            type: 'Landing',
            location: {
                name: 'Sweden; Ängelholm, Kristianstads County',
                coordinates: '56.25, 12.85',
            },
            description:
                'Swedish entrepreneur Gösta Carlsson, the founder and owner of Cernelle AB, attributes his success to a 1946 UFO encounter. Decades later, he erected a concrete monument in the clearing where he says the flying saucer landed.',
        },
        {
            id: '17',
            date: '1947-6-21',
            name: 'Maury Island incident',
            type: 'Undefined report',
            location: {
                name: 'United States; Puget Sound near Maury Island, Washington',
                coordinates: '47.6, -122.4',
            },
            description:
                'Fred Crisman mailed an account from employee Harold A. Dahl, along with a cigar box of metal wreckage, to Raymond A. Palmer who had previously published the Shaver Mystery stories. Dahl claimed that his dog was killed and his son was injured by debris in an encounter with six flying doughnut-shaped objects. He also reported that he was subsequently threatened by Men in Black. On July 31, 1947, Palmer arranged a meeting between Crisman, Dahl, Air Force investigators, and flying saucer witnesses Kenneth Arnold & Emil Smith.',
        },
        {
            id: '18',
            date: '1947-6-24',
            name: 'Kenneth Arnold UFO sighting',
            type: 'Sighting',
            location: {
                name: 'United States; North of Mount Rainier, Washington',
                coordinates: '46.852827, -121.760441',
            },
            description: `Private pilot Kenneth Arnold was flying near Mount Rainier when he reported seeing a group of reflective craft moving at high speeds and flashing in the sun like mirrors. Bill Bequette of the East Oregonian, who first interviewed Arnold, summarized the sighting as, "nine saucer-like aircraft flying in formation." This introduced the term flying saucers, and Arnold's sighting sparked an explosion of UFO reports around the country.`,
        },
        {
            id: '19',
            date: '1947 c. 1947',
            name: '1947 flying disc craze',
            type: 'Sighting',
            location: {
                name: 'United States; Washington and other states',
                coordinates: '47, -120',
            },
            description:
                'After the Kenneth Arnold sighting was reported in the news, over 800 similar sightings were reported throughout 1947.',
        },
        {
            id: '20',
            date: '1947-7-4',
            name: 'Flight 105 UFO sighting',
            type: 'Sighting',
            location: {
                name: 'United States; En route from Boise, Idaho to Pendleton, Oregon',
                coordinates: '44.7746455,-117.852328',
            },
            description: `A United Airlines crew including Captain Emil Smith, co-pilot Ralph Stephens, and stewardess Marty Morrow witnessed nine unidentified objects. Believing them to be aircraft, Smith flashed the plane's landing lights intending to alert the objects which he described as "smooth on the bottom and rough appearing on top".`,
        },
        {
            id: '21',
            date: '1947-7-8',
            name: 'The Roswell Incident',
            type: 'Crash',
            location: {
                name: 'United States; about 30 mi. north of Roswell, New Mexico',
                coordinates: '33.387222, -104.528056',
            },
            description:
                'Walter Haut, a United States Army Air Forces spokesperson, issued a press release announcing the "capture" of a "flying saucer".  Hours later, the Army announced that the find was a crashed weather balloon.  In 1978, the case regained attention after Jesse Marcel, the Army Officer who recovered the wreckage, told UFO researchers that the weather balloon explanation was a cover story. In 1994, the Air Force attributed the incident to the previously classified Project Mogul.',
        },
        {
            id: '22',
            date: '1948 c. 1948',
            name: 'The Green Fireballs',
            type: 'Undefined report',
            location: {
                name: 'United States; New Mexico and other parts of the Southwestern United States',
                coordinates: '34, -106',
            },
            description:
                'The US Air Force investigated reports of green flares streaking across the sky after an Air Force C-47 transport encountered a green ball of fire on 5 December 1948. The pilot, Captain Goede, described the object as larger than a meteor and not arching downward as a meteor would. The Air Force investigation was inconclusive.',
        },
        {
            id: '23',
            date: '1948-1-7',
            name: 'Mantell UFO incident',
            type: 'Sighting',
            location: {
                name: 'United States; Kentucky',
                coordinates: '37.92, -85.96',
            },
            description:
                'The flight tower at Godman Army Airfield instructed Captain Thomas Mantell to pursue a UFO sighted over Fort Knox, Kentucky. His aircraft crashed while in pursuit and Mantell died in Franklin, Kentucky. According to the historical marker placed on Interstate 65 near the site it "is still uncertain what Mantell was pursuing".',
        },
        {
            id: '24',
            date: '1948-3-25',
            name: 'Aztec, New Mexico UFO hoax',
            type: 'Undefined report',
            location: {
                name: 'United States; New Mexico',
                coordinates: '36.822222, -107.992778',
            },
            description:
                'Conmen Silas Newton and Leo Gebauer sold "magnetic oil-detecting machines" based on the story that they had replicated technology from a crashed spaceship. The pair were convicted of fraud in 1953. Elements of their story regarding a crashed ship with occupants were later entangled in the Roswell narrative.',
        },
        {
            id: '25',
            date: '1948-7-24',
            name: 'Chiles-Whitted UFO encounter',
            type: 'Close encounter',
            location: {
                name: 'United States; Montgomery, Alabama',
                coordinates: '32.361667, -86.279167',
            },
            description:
                'Clarence Chiles and John Whitted, American commercial pilots, reported that their airplane had nearly collided with a UFO near Montgomery. According to the pilots the object "looked like a wingless aircraft...it seemed to have two rows of windows through which glowed a very bright light, as brilliant as a magnesium flare.',
        },
        {
            id: '26',
            date: '1948-10-1',
            name: 'Gorman dogfight',
            type: 'Undefined report',
            location: {
                name: 'United States; North Dakota',
                coordinates: '46.873333, -96.827222',
            },
            description:
                "A US Air Force pilot sighted and pursued a UFO for 27 minutes over Fargo, North Dakota. According to US Air Force officer Edward J. Ruppelt, this was one of three cases, along with the Mantell incident and Chiles-Whitted encounter, that shifted the Air Force's attitude about UFO reports leading to the creation of Project Blue Book.",
        },
        {
            id: '27',
            date: '1950-5-11',
            name: 'McMinnville UFO photographs',
            type: 'Undefined report',
            location: {
                name: 'United States; a farm near McMinnville, Oregon',
                coordinates: '45.211667, -123.197222',
            },
            description:
                'A farmer took pictures of a purported "flying saucer". These were the first flying saucer photographs since the coining of the term.',
        },
        {
            id: '28',
            date: '1950-8-15',
            name: 'Mariana UFO incident',
            type: 'Undefined report',
            location: {
                name: 'United States; Great Falls, Montana',
                coordinates: '47.503611, -111.286389',
            },
            description:
                "The manager of Great Falls' pro baseball team took color film of two UFOs flying over Great Falls. The film was extensively analyzed by the US Air Force and several independent investigators.",
        },
        {
            id: '29',
            date: '1951-8-25',
            name: 'Lubbock Lights',
            type: 'Sighting',
            location: {
                name: 'United States; Lubbock, Texas',
                coordinates: '33.585, -101.845',
            },
            description:
                'Several Lights in V-Shaped formations were repeatedly spotted flying over the city. Witnesses included W. I. Robinson, A. G. Oberg, and W. L. Ducker, professors of geology, chemical engineering, and petroleum engineering respectively. Teenage student Carl Hart Jr. photographed the lights',
        },
        {
            id: '30',
            date: '1952-7-12 to 1952-7-29',
            name: '1952 Washington, D.C. UFO incident',
            type: 'Sighting',
            location: {
                name: 'United States; Washington, D.C.',
                coordinates: '38.904722, -77.016389',
            },
            description:
                'A series of sightings in July 1952 accompanied radar contacts in the Washington area. These were the first sightings to be widely and seriously reported as potentially physical craft operated by intelligent life from another planet. In response, the CIA formed the Robertson Panel which advised Project Blue Book to "strip the Unidentified Flying Objects of the special status they have been given and the aura of mystery they have unfortunately acquired.',
        },
        {
            id: '31',
            date: '1952-7-14',
            name: 'Nash-Fortenberry UFO sighting',
            type: 'Sighting',
            location: {
                name: 'United States; Norfolk, Virginia',
                coordinates: '36.846944, -76.285278',
            },
            description:
                'William B. Nash and William H. Fortenberry, pilots of a DC-4 airliner of Pan American Airways, radioed the Norfolk civil aviation authority to report eight large, round, glowing red objects.',
        },
        {
            id: '32',
            date: '1952-9-12',
            name: 'The Flatwoods Monster',
            type: 'Close encounter',
            location: {
                name: 'United States; Flatwoods, West Virginia',
                coordinates: '38.721389, -80.653056',
            },
            description:
                'Three local boys followed a bright object into the forest to what they believed was a UFO landing. They went to the nearby home of Kathleen May who accompanied them back to the spot along with 2 other children and teenage National Guardsman Eugene Lemon. In the forest, they smelled a foul odor and saw what May described as a tall figure with claws and "a head that resembled the ace of spades".',
        },
        {
            id: '33',
            date: '1954-10-27',
            name: 'Fiorentina Stadium Mass Sighting',
            type: 'Sighting',
            location: {
                name: 'Italy; Stadio Artemio Franchi in Florence',
                coordinates: '43.780822, 11.282258',
            },
            description:
                'A football game between Fiorentina and Pistoiese was under way at the Stadio Artemio Franchi when a group of UFOs traveling at high speed abruptly stopped over the stadium. The stadium became silent as the crowd of around 10,000 spectators witnessed the event and described the UFOs as cigar shaped.',
        },
        {
            id: '34',
            date: '1955-8-21 to 1955-8-22',
            name: 'Kelly–Hopkinsville encounter',
            type: 'Close encounter',
            location: {
                name: 'United States; A farmhouse near Hopkinsville, Kentucky',
                coordinates: '36.854722, -87.488889',
            },
            description:
                'At a rural farmhouse, eleven people witnessed creatures in the night. Two of the men opened fire with a shotgun and rifle, and the entire group later fled to the Hopkinsville police station. The creatures have been variously described as goblins, aliens, "little green men", owls, and circus monkeys. Four officers, five state troopers, three deputies, and four military police investigated the farmhouse finding bullet holes but no monsters. The story has had a broad impact on popular culture.',
        },
        {
            id: '35',
            date: '1956-7-24',
            name: 'Lakenheath-Bentwaters incident',
            type: 'Undefined report',
            location: {
                name: 'United Kingdom; Suffolk, England',
                coordinates: '52.166667, 1',
            },
            description:
                'United States Air Force (USAF) and Royal Air Force (RAF) radar operators (from Lakenheath RAF Station, Bentwaters RAF Station, and Sculthorpe RAF Station) detected up to 15 objects over Suffolk. An RAF pilot was sent out from Waterbeach RAF Station in a de Havilland Venom, a jet aircraft with Airborne Interception radar. The pilot reported spotting the object on radar and visually observing a luminous white object that moved behind his craft when he attempted to intercept.',
        },
        {
            id: '36',
            date: '1956-8-13',
            name: 'Elizabeth Klarer',
            type: 'Close encounter',
            location: {
                name: 'South Africa; Drakensberg',
                coordinates: '-29.383333, 29.45',
            },
            description:
                'A series of photos depicting a supposed UFO, were taken on 24 July near Rosetta in the Drakensberg region. The photographer, meteorologist Elizabeth Klarer, claimed detailed adventures with an alien race including having had an alien lover, Akon, who would have fathered her son Ayling.',
        },
        {
            id: '37',
            date: '1957-5-3',
            name: 'Gordon Cooper UFO Sightings',
            type: 'Landing',
            location: {
                name: 'United States; Edwards Air Force Base, California',
                coordinates: '34.905556, -117.883611',
            },
            description:
                'Gordon Cooper, one of the original Project Mercury astronauts, witnessed a type of metallic craft without wings flying over Germany in the 1950s. At the time, Cooper believed these to be Soviet aircraft. His attitude later changed after an incident at Edwards Air Force Base. Cooper sent a crew of James Bittick and Jack Gettys out to a dry lake bed to set up data-recording photography equipment. Cooper said the two men, both familiar with experimental aircraft, came back shaken and talking about witnessing a wingless aircraft with retractable legs silently land and take off near them. Cooper reported the incident to The Pentagon which asked for all photographs of the craft. Cooper looked at the photos before sending them off and felt that the government covered up a UFO encounter.',
        },
        {
            id: '38',
            date: '1957-5-20',
            name: 'Milton Torres 1957 UFO Encounter',
            type: 'Close encounter',
            location: {
                name: 'United Kingdom; East Anglia',
                coordinates: '52.5, 1',
            },
            description: `U.S. Air Force fighter pilot Milton Torres reports that he was ordered to intercept and fire on a UFO displaying "very unusual flight patterns" over East Anglia. Ground radar operators tracked what was believed to be an unidentified aircraft for some time before Torres' plane was scrambled to intercept.`,
        },
        {
            id: '39',
            date: '1957-10-15',
            name: 'Antônio Vilas-Boas Abduction',
            type: 'Abduction',
            location: {
                name: 'Brazil; Near São Francisco de Sales, Minas Gerais',
                coordinates: '-19.856944, -49.773889',
            },
            description:
                'Law student, Antônio Vilas-Boas, described being abducted by humanoid aliens and taken aboard their egg-shaped craft. He also said that he was confined within a small round room where he was compelled to have sex with a four foot tall alien woman.',
        },
        {
            id: '40',
            date: '1957-11-2',
            name: 'Levelland UFO case',
            type: 'Sighting',
            location: {
                name: 'United States; Levelland, Texas',
                coordinates: '33.587222, -102.378056',
            },
            description:
                'Numerous drivers observed glowing objects hovering over the highway. They described them as approximately 200 feet long and shaped like eggs or cigars. The appearance of these lights was immediately followed by electrical failures including ignition failures in their cars.',
        },
        {
            id: '41',
            date: '1957-11-4',
            name: 'Kirtland AFB UFO sighting',
            type: 'Sighting',
            location: {
                name: 'United States; Albuquerque, New Mexico',
                coordinates: '35.110833, -106.61',
            },
            description:
                'Two Civil Aeronautics Administration tower operators observed an egg-shaped object emitting a white light beneath it come down to the Kirtland AFB runway as if landing. At seven times magnification through binoculars, they could see neither wings, tail, nor fuselage. They watched the object come to a stop several feet above the ground, hover, and then rapidly ascend. The operators then called CAA Radar Approach Control who tracked the object on radar.',
        },
        {
            id: '42',
            date: '1961-9-19',
            name: 'Betty and Barney Hill abduction',
            type: 'Abduction',
            location: {
                name: 'United States; South of Lancaster on Route 3, New Hampshire',
                coordinates: '44.488889, -71.569167',
            },
            description:
                'The Hills reported the first alien abduction experience to be widely spread in English-language publications. While driving home, they observed a light move through the sky and land ahead of them. Barney Hill said that, against his will, he turned the car down a side road towards the light, where he found six small humanoid beings waiting for them. Betty Hill reported that they inserted a needle through her navel among other vaguely medical tests.',
        },
        {
            id: '43',
            date: '1963',
            name: 'Kallamishtez UFO incident',
            type: 'Sighting',
            location: {
                name: 'Albania; Kurvelesh',
                coordinates: '40.236667, 19.866944',
            },
            description:
                'In January 1963, residents of the village of Kallamishtëz in the Kurvelesh area reported seeing a bright object in the sky. Albanian authorities attempted to calm the population by telling them that what they had seen was not a UFO, but rather a new model of a jet plane being used by the Albanian Air Force.',
        },
        {
            id: '44',
            date: '1964-4-24',
            name: 'Lonnie Zamora incident',
            type: 'Close encounter',
            location: {
                name: 'United States; Socorro, New Mexico',
                coordinates: '34.061667, -106.899444',
            },
            description:
                'Police officer Lonnie Zamora investigated a roaring sound. Zamora and a nearby tourist found a craft that took off shortly after their arrival. The craft left impressions in the ground that did not aid in identification.',
        },
        {
            id: '45',
            date: '1964-9-18 until 9-24',
            name: 'Dwikora Operation UFO incident',
            type: 'Sighting',
            location: {
                name: 'Surabaya, Indonesia',
                coordinates: '-7.245833, 112.737778',
            },
            description:
                'During the Indonesia-Malaysia Confrontation, a strange black object that resembles like a mango fruit and described to have greenish blue lights was spotted in the dark sky. Several military personels tried to shot down the object but failed and resulted in additional casualties as the fragments of the artillery (from the military) ended up striking those who were outside of their home in Sidoarjo during the incident',
        },
        {
            id: '46',
            date: '1965-6-4',
            name: 'Project Gemini UFO',
            type: 'Sighting',
            location: {
                name: 'Low Earth orbit; Above Hawaii',
                coordinates: '21.5, -158',
            },
            description:
                'During Gemini 4, astronaut James McDivitt spotted a white cylinder with a protruding arm traveling in his orbit. McDivitt has said that it was impossible for him to assign scale to the object against the black background of space, saying that it could have been small enough to hold in his hands or "the size of the Empire State Building.',
        },
        {
            id: '47',
            date: '1965-9-3',
            name: 'The Incident at Exeter',
            type: 'Sighting',
            location: {
                name: 'United States; Exeter, New Hampshire',
                coordinates: '42.981389, -70.947778',
            },
            description:
                'Numerous people reported pulsating UFOs in Exeter, New Hampshire. The events were the subject of The Incident at Exeter by John G. Fuller.',
        },
        {
            id: '48',
            date: '1965-7-1',
            name: 'The Valensole UFO incident',
            type: 'Undefined report',
            location: {
                name: "France; Valensole, Provence-Alpes-Côte d'Azur",
                coordinates: '44, 6',
            },
            description:
                'French farmer, Maurice Massé, witnessed a spherical vehicle in his lavender field. He noticed and approached two individuals that he observed near the vehicle, but after one pointed a tube in his direction, he stood still feeling paralyzed. He described the beings as child-sized, pale, large-headed, with only holes where a mouth should be. Massé said that after they left in their vehicle, he was never again able to grow a healthy plant in the area where the craft had landed. He did not personally comment on the effect this had on him, saying, "One always says too much." His wife reported that the man was plagued with exhaustion for months, that he had confessed some type of communication to her, and that it was a "spiritual experience" for her husband.',
        },
        {
            id: '49',
            date: '1965-12-9',
            name: 'Kecksburg UFO incident',
            type: 'Landing',
            location: {
                name: 'United States; Kecksburg, Pennsylvania',
                coordinates: '40.184722, -79.461389',
            },
            description:
                'Local newspapers and newscasts reported a fireball observed in the skies over Kecksburg. According to some residents, they found an acorn-shaped object in the woods. The U.S. military closed off the area to investigate and reported no evidence of a crash. A model built for Unsolved Mysteries is kept on display by the fire department, which leads an annual UFO celebration.',
        },
        {
            id: '50',
            date: '1966-4-6',
            name: 'Westall UFO',
            type: 'Undefined report',
            location: {
                name: 'Australia; Clayton South, Victoria',
                coordinates: '-37.947, 145.123',
            },
            description:
                'Several hundred students and school faculty watched an object land at the Grange Reserve for horses, lift off, and vanish. Witnesses of "The Clayton Incident" still gather for reunions.',
        },
        {
            id: '51',
            date: '1967-8-29',
            name: 'Close encounter of Cussac',
            type: 'Close encounter',
            location: {
                name: 'France; near Cussac, Auvergne',
                coordinates: '44.9847, 2.9333',
            },
            description:
                'A 13-year-old boy and his younger sister reported an incident to their father, local police, and investigators. According to police reports, they witnessed a brilliant sphere and four small black occupants while herding cattle outside their village.',
        },
        {
            id: '52',
            date: '1967-10-4',
            name: 'Shag Harbour UFO incident',
            type: 'Crash',
            location: {
                name: 'Canada; Gulf of Maine near Shag Harbour, Nova Scotia',
                coordinates: '43.494167, -65.718056',
            },
            description:
                'Royal Canadian Mounted Police and six civilians reported that a large illuminated object crashed into Shag Harbour. A Department of National Defence underwater search followed, but located no physical evidence.',
        },
        {
            id: '53',
            date: '1969-1-6',
            name: 'Jimmy Carter UFO incident',
            type: 'Sighting',
            location: {
                name: 'United States; Leary, Georgia',
                coordinates: '31.485556, -84.513333',
            },
            description:
                'While governor of Georgia, future president Jimmy Carter filed a written report of a "luminous, not solid" light over Leary, Georgia in 1969.',
        },
        {
            id: '54',
            date: '1969-4-12',
            name: 'Finnish Air Force sighting',
            type: 'Sighting',
            location: { name: 'Finland; Pori', coordinates: '61.483333, 21.8' },
            description: `Finnish pilot Jouko Kuronen overheard a radio conversation between air traffic control and fighter pilot Tarmo Tukeva. Tukeva was ordered to investigate "seven balloons" visible from Kuronen's position in the sky. Kuronen described the objects as discs that accelerated in formation against the wind at speeds not feasible for balloons.`,
        },
        {
            id: '55',
            date: '1969-9-1',
            name: 'Labour Day 1969 UFO Incident',
            type: 'Abduction',
            location: {
                name: 'United States; Berkshire County, Massachusetts',
                coordinates: '42.37, -73.21',
            },
            description:
                'Four families with no prior connection alleged that they saw a UFO, were moved by a beam of light, and lost several hours of time. The Great Barrington Historical Society recognized the accounts as a "historical event" in 2015.',
        },
        {
            id: '56',
            date: '1973-10-11',
            name: 'Pascagoula Abduction',
            type: 'Abduction',
            location: {
                name: 'United States; Pascagoula, Mississippi',
                coordinates: '30.363611, -88.541944',
            },
            description:
                'Charles Hickson and Calvin Parker were fishing from a pier on the Pascagoula River when they say that they heard whirring sounds and witnessed a craft over 30 feet long with flashing lights. Both men say they were paralyzed and then taken by humanoids with "robotic slit-mouths" and "crab-like pincers".',
        },
        {
            id: '57',
            date: '1974-1-23',
            name: 'Berwyn Mountain UFO incident',
            type: 'Undefined report',
            location: {
                name: 'United Kingdom; Llandrillo, Merionethshire, North Wales',
                coordinates: '52.922, -3.436',
            },
            description:
                'An alleged UFO crash involving lights in the sky moments before a large impact shock. The cause of the incident was however soon revealed as a 3.5 magnitude earthquake.',
        },
        {
            id: '58',
            date: '1974-8-23',
            name: 'John Lennon UFO incident',
            type: 'Sighting',
            location: {
                name: 'United States; New York City, New York',
                coordinates: '40.712778, -74.006111',
            },
            description:
                'Musician John Lennon and then-assistant May Pang report seeing a craft emitting lights that changed color in the night sky above their Manhattan penthouse. Lennon would later reference this experience in his song "Nobody Told Me".',
        },
        {
            id: '59',
            date: '1975-11-05',
            name: 'Travis Walton',
            type: 'Abduction',
            location: {
                name: 'United States; Near Turkey Springs in Apache-Sitgreaves National Forest, Arizona',
                coordinates: '34.3020411,-110.6455564',
            },
            description: `Logger Travis Walton disappeared for over 5 days resulting in a police investigation of his coworkers. When questioned on where he had been, Walton said that he had been taken aboard a spacecraft by nearly human creatures. Walton's alien abduction account is the basis for the book The Walton Experience (1978), the film Fire in the Sky (1993), and the documentary "Alien Abduction: Travis Walton" (2022).`,
        },
        {
            id: '60',
            date: '1976-9-17',
            name: '1976 Tehran UFO incident',
            type: 'Sighting',
            location: {
                name: 'Iran; Tehran, Tehran province',
                coordinates: '35.689167, 51.388889',
            },
            description:
                'The 1976 Tehran UFO Incident was a radar and visual sighting of a UFO over the capital of Iran, during early morning hours. Two Imperial Iranian Air Force F-4 Phantom II jet interceptors reported losing instrumentation and communications as they approached the object.',
        },
        {
            id: '61',
            date: '1977-9-20',
            name: 'Petrozavodsk phenomenon',
            type: 'Sighting',
            location: {
                name: 'Soviet Union, Finland, Lithuania, and Denmark',
                coordinates: '61.783333, 34.333333',
            },
            description:
                'Residents of Petrozavodsk reported a giant glowing "jellyfish" of light (visible for over ten minutes) looming in the early morning sky. The light was seen and photographed in several Baltic Sea countries. In response to the phenomenon, the Soviet Union created a government program to study anomalous atmospheric phenomena. This program would later attribute the Petrozavodsk sightings to the secret night launch of the Kosmos 955 spy satellite. According to Soviet astrophysicist, Yuli Platov, sunlight can cause the giant plumes of gas and dust produced by rockets to glow, especially "in twilight hours, when the rocket streaks through sunlit regions and the observer is on the nighttime side of the Earth.',
        },
        {
            id: '62',
            date: '1978-5-10',
            name: 'Emilcin Abduction',
            type: 'Abduction',
            location: {
                name: 'Poland; Emilcin, Lublin Voivodeship',
                coordinates: '51.136667, 22.039167',
            },
            description:
                'Polish farmer Jan Wolski reported that while returning home, two "short, green-faced humanoid entities" wearing black overalls jumped onto his horse-drawn cart and started speaking an incomprehensible language. After about 1000 ft (300 m), he reported seeing a white flying object, from which an alien creature came out and invited Wolski inside. The farmer said that they examined him once inside.',
        },
        {
            id: '63',
            date: '1978-10-21',
            name: 'Valentich disappearance',
            type: 'Disappearance',
            location: {
                name: 'Australia; Victoria',
                coordinates: '-37.975833, 145.102222',
            },
            description: `Frederick Valentich left Moorabbin Airport in a Cessna 182 Skylane, a single-engined light aircraft. At 7:06 PM, he began reporting a strange craft to Melbourne air traffic control. Valentich's last words were, "That strange aircraft is hovering on top of me again … it is hovering and it's not an aircraft." Neither the pilot nor the plane were ever found.`,
        },
        {
            id: '64',
            date: '1978-12-6',
            name: 'Zanfretta UFO Incident',
            type: 'Undefined report',
            location: {
                name: 'Italy; Torriglia, Genoa',
                coordinates: '44.516667, 9.166667',
            },
            description:
                'Italian nightwatchman Pier Fortunato Zanfretta perceived a red, oval object and phoned his supervisor. During the call, he described non-human creatures that he said were attacking him. He was later found in a state of shock and his experience was adapted into a stage play.',
        },
        {
            id: '65',
            date: '1979-11-11',
            name: 'Manises UFO incident',
            type: 'Undefined report',
            location: {
                name: 'Spain; Valencia, Valencian Community',
                coordinates: '39.47, -0.376389',
            },
            description:
                'En route to Las Palmas, commercial pilot Francisco Javier Lerdo de Tejada radioed air traffic control regarding a pair of red lights approaching his TAE Supercaravelle. Neither air traffic control in Barcelona nor the military identified the object. Tejada made an emergency landing at the nearby airport in Manises.',
        },
        {
            id: '66',
            date: '1980-4-11',
            name: 'Arequipa UFO incident',
            type: 'Close encounter',
            location: {
                name: 'Peru; Arequipa Region',
                coordinates: '-15.86, -72.25',
            },
            description:
                'Early in the morning of April 11, La Joya Air Force Base ordered fighter pilot Oscar Santa María Huertas to intercept an object in restricted air space. Huertas pursued the object in a Sukhoi Su-22 and fired a barrage of 30mm shells into it. According to Huertas the object did not seem damaged and rose to 19,200 meters. He described it as similar in shape to an incandescent lightbulb with a much wider circular silver base and said that it "lacked all the typical components of aircraft. It had no wings, propulsion jets, exhausts, windows, antennae, and so forth".',
        },
        {
            id: '67',
            date: '1980-12-24',
            name: 'Rendlesham Forest incident',
            type: 'Landing',
            location: {
                name: 'United Kingdom; Rendlesham Forest, Suffolk, England',
                coordinates: '52.083889, 1.432778',
            },
            description:
                'United States Air Force personnel reported various unusual observations at RAF Woodbridge and RAF Bentwaters, two American air bases located in England. Their reports included lights in the sky, a metallic triangular object in the forest, multi-colored lights moving through the forest, and higher levels of radiation.',
        },
        {
            id: '68',
            date: '1981-1-8',
            name: 'Trans-en-Provence case',
            type: 'Sighting',
            location: {
                name: "France; Trans-en-Provence, Provence-Alpes-Côte d'Azur",
                coordinates: '43.5042, 6.4867',
            },
            description:
                "Retired contractor, Renato Nicolai reported the landing of a flying object near his home to local police. Renato believed it to be a military craft. Groupe d'Étude des Phénomènes Aérospatiaux Non-identifiés (GEPAN), a branch of French Space Agency created to investigate UFOs, conducted an investigation, photographed circular impressions on the ground, and took samples of the area. Skeptics have been critical of the GEPAN investigation which took place 40 days after the initial sighting.",
        },
        {
            id: '69',
            date: '1984',
            name: 'Hudson Valley Sightings',
            type: 'Sighting',
            location: {
                name: 'United States; Hudson Valley, New York',
                coordinates: '41.458611, -73.959722',
            },
            description:
                'State police discovered that widespread reports of a massive object—described by one observer as a "city of lights" hanging silently above their home— were caused by a group of pilots flying small aircraft in formation. The events were the subject of an Unsolved Mysteries episode and Night Siege, a posthumous collaboration between ufologists including J. Allen Hynek.',
        },
        {
            id: '70',
            date: '1986-5-19',
            name: 'Night of the UFOs" in Brazil',
            type: 'Sighting',
            location: {
                name: 'Brazil; São Paulo, Rio de Janeiro, Minas Gerais and Goiás',
                coordinates: '-19.816667, -43.95',
            },
            description:
                "Radar and visual contacts were obtained with multiple 'bright colorful objects' in the sky across several states. Mirage 2000 and F-5 fighters were scrambled but failed to intercept, with pilots describing the objects as capable of impossible maneuvers and rapidly accelerating to as much as Mach 15 once approached.",
        },
        {
            id: '71',
            date: '1986-11-17',
            name: 'Japan Air Lines Cargo Flight 1628 incident',
            type: 'Undefined report',
            location: {
                name: 'United States; Alaska',
                coordinates: '63.394253, -157.734666',
            },
            description:
                'While piloting a Japanese Boeing 747-200F cargo aircraft on a polar route from France to Narita International Airport in Japan, the flight crew witnessed several unidentified objects over eastern Alaska. Captain Kenju Terauchi (寺内謙寿, Terauchi Kenju), co-pilot  Takanori Tamefuji (為藤隆憲, Tamefuji Takanori), and flight engineer Yoshio Tsukuda (佃善雄, Tsukuda Yoshio) reported rectangular arrays of what Captain Terauchi described as glowing nozzles or thrusters.',
        },
        {
            id: '72',
            date: '1987-12-1',
            name: 'Ilkley Moor UFO incident',
            type: 'Abduction',
            location: {
                name: 'United Kingdom; Ilkley Moor',
                coordinates: '53.915, -1.815',
            },
            description:
                'Retired police officer, Philip Spencer, took a photograph of what he said was a strange being on the moor. According to Spencer, the being fled after being photographed and left in a domed craft.',
        },
        {
            id: '73',
            date: '1990-8-1',
            name: 'Shkoder UFO incident',
            type: 'Sighting',
            location: {
                name: 'Albania; Shkodër',
                coordinates: '42.068056, 19.511944',
            },
            description: `Gëzim Dapi and five other soldiers reported a series of lights arranged in a diamond-like pattern in the sky, moving at high speed with minimal noise. They were questioned by their superiors, and the incident was reported by the Labour Youth Union of Albania's biweekly newspaper, "Zëri i Rinisë".`,
        },
        {
            id: '74',
            date: '1993-7-12',
            name: 'Cerrik UFO incident',
            type: 'Sighting',
            location: {
                name: 'Albania; Cërrik, Elbasan',
                coordinates: '41.111111, 20.080556',
            },
            description:
                'Around 8:00 PM, a glowing flying object appeared in the sky of Cërrik, Elbasan. According to eyewitness accounts, the illuminated object made sudden and quick movements. The news that a UFO was flying around quickly spread throughout the town. Law enforcement was notified, and they tried to limit the spread of panic among the population. The glowing object disappeared from the sky around 10:00 PM, according to eyewitness accounts.',
        },
        {
            id: '75',
            date: '1994-9-16',
            name: 'Ariel School UFO incident',
            type: 'Landing',
            location: {
                name: 'Zimbabwe; Ruwa',
                coordinates: '-17.889722, 31.244722',
            },
            description:
                'Over sixty students reported seeing a silver craft land in a field near the school. They described occupants dressed in all black that exited the silver object.',
        },
        {
            id: '76',
            date: '1996-01-20',
            name: 'Varginha UFO incident',
            type: 'Undefined report',
            location: {
                name: 'Brazil; Varginha, Minas Gerais',
                coordinates: '-21.551667, -45.43',
            },
            description:
                'In 1996, various individuals reported possibly unrelated incidents with what they described as UFOs, creatures, and the Brazilian military. The events are the inspiration for saucer-shaped Varginha water tower, the Nave Espacial de Varginha; the 1998 Brazilian video game Incidente em Varginha; and 1996, a film by director Rodrigo Brandão.',
        },
        {
            id: '77',
            date: '1997-3-13',
            name: 'Phoenix Lights',
            type: 'Sighting',
            location: {
                name: 'United States; Phoenix, Arizona',
                coordinates: '33.448333, -112.073889',
            },
            description:
                'Hundreds of people witnessed a series of lights in a "V" pattern moving through Arizona. The incident is unusual for the large number of photographs.',
        },
        {
            id: '78',
            date: '2000-10-5',
            name: 'Bonsall UFO sighting',
            type: 'Sighting',
            location: {
                name: 'United Kingdom; Bonsall, Derbyshire',
                coordinates: '53.121, -1.584',
            },
            description:
                'Resident, Sharon Rowlands, filmed a luminous object in the night sky starting around 9:15 PM and continuing for several minutes. Various other residents reported strange lights including a man who described a "pink glow, vertically shaped like a shoe box".',
        },
        {
            id: '79',
            date: '2004',
            name: 'Tinley Park Lights',
            type: 'Sighting',
            location: {
                name: 'United States; Illinois',
                coordinates: '41.573889, -87.803889',
            },
            description:
                'At 8 PM on Halloween night (2004), residents were outside trick-or-treating on the streets of Tinley Park and other Chicago suburbs, when thousands of people watched, photographed, and filmed a formation of red lights hanging in the October sky above them. Similar formations of lights drifted over the area the following autumn.',
        },
        {
            id: '80',
            date: '2004-3-5',
            name: '2004 Mexican UFO incident',
            type: 'Sighting',
            location: { name: 'Mexico; Campeche', coordinates: '20, -94' },
            description:
                'Mexican Air Force pilots filmed (initially unidentified) lights in the sky using infrared cameras while searching for drug-smuggling planes. Multiple subsequent investigations identified these as massive burn-off flares from a cluster of off-shore oil platforms in the Bay of Campeche.',
        },
        {
            id: '81',
            date: '2004-11-14',
            name: 'USS Nimitz UFO incident',
            type: 'Sighting',
            location: {
                name: 'United States; Off the coast of San Diego, California',
                coordinates: '31.378509, -117.083602',
            },
            description:
                'Several pilots from VFA-41 squadron flying Super Hornets from the USS Nimitz, were directed by the USS Princeton to intercept one of several unidentified flying objects detected by radar. The pilots reported a visual encounter and recorded an infrared video. The Navy has verified that the video was taken by Navy personnel and has stated that it has not yet identified the nature of the sightings which they classify as unexplained aerial phenomena.',
        },
        {
            id: '82',
            date: '2006-5-4',
            name: 'Roskovec UFO Landing',
            type: 'Landing',
            location: {
                name: 'Albania; Roskovec',
                coordinates: '40.73799,19.6982717',
            },
            description:
                'Eyewitnesses and village residents reported a UFO sighting on May 4 around 7:00 PM. An unidentified object landed, leaving three double-banded black circles in the asphalt which Halim Çepele photographed. Witnesses described a sudden darkness, mist, bent tree branches, and a cold wind. A 10-year-old boy saw a disc-shaped object with a gray color and a thin blue line on the ground for a few seconds. The incident left the boy in shock for about three months. Other residents claimed to have seen the marks on the asphalt and observed that rose petals were burned when placed on the landing site.',
        },
        {
            id: '83',
            date: '2006-11-7',
            name: "2006 O'Hare International Airport UFO sighting",
            type: 'Sighting',
            location: {
                name: 'United States; Chicago, Illinois',
                coordinates: '41.881944, -87.627778',
            },
            description:
                "United Airlines employees and pilots reported sightings of a saucer-shaped, unlit craft hovering over a Chicago O'Hare Airport terminal, before appearing to leave with a rapid vertical rise.",
        },
        {
            id: '84',
            date: '2007-4-23',
            name: '2007 Alderney UFO sighting',
            type: 'Sighting',
            location: {
                name: 'Bailiwick of Guernsey; Alderney',
                coordinates: '49.7, -2.366667',
            },
            description:
                'On separate flights, two airline pilots and multiple passengers reported a "sunlight-colored" object at an altitude of around 2,000 feet off the coast of Alderney. One of the pilots, Ray Bowyer, filed a report with Britain’s Civil Aviation Authority upon landing.',
        },
        {
            id: '85',
            date: '2007-11-28 to 2011-12-13',
            name: 'Dudley Dorito',
            type: 'Sighting',
            location: {
                name: 'United Kingdom; West Midlands conurbation',
                coordinates: '52.511794, -1.975307',
            },
            description:
                'The "Dudley Dorito" refers to a series of black triangle sightings reported in the West Midlands conurbation.',
        },
        {
            id: '86',
            date: '2008-6-20',
            name: 'Wales UFO sightings',
            type: 'Sighting',
            location: {
                name: 'United Kingdom; Various cities, Wales',
                coordinates: '52.3, -3.6',
            },
            description:
                'Over the Bristol Channel, a South Wales Police helicopter took evasive actions to avoid what the crew described as a saucer-shaped UFO.',
        },
        {
            id: '87',
            date: '2009-1-5',
            name: 'Morristown UFO hoax',
            type: 'Undefined report',
            location: {
                name: 'United States; Morristown, New Jersey',
                coordinates: '40.796562, -74.477318',
            },
            description:
                'In the evening, citizens in Morristown and other town in Morris County, New Jersey saw five red lights in the sky. After three months, two men from the Morristown area announced that they had organized a UFO hoax, meant as a "social experiment".',
        },
        {
            id: '88',
            date: '2010-1-25',
            name: 'Harbour Mille incident',
            type: 'Sighting',
            location: {
                name: 'Canada; Harbour Mille, Newfoundland and Labrador',
                coordinates: '47.586, -54.874',
            },
            description:
                'At least three UFOs that looked like missiles but emitted no noise were spotted over Harbour Mille.',
        },
        {
            id: '89',
            date: '2010-8-7',
            name: 'Tirana UFO incident',
            type: 'Sighting',
            location: {
                name: 'Albania; Tirana',
                coordinates: '41.328889, 19.817778',
            },
            description:
                'Rezmie Lulo, a witness from Tirana, described three spherical, orange, glowing objects that appeared close at first but gradually rose higher. One object rapidly broke away towards the northwest, while the other two vanished instantly after. The Albanian Army declined to comment on the incident. Officials from the National Air Traffic Agency and Civil Aviation Authority stated that there were no flights at that time and no official reports of such objects.',
        },
        {
            id: '90',
            date: '2014-6-2 to 2015-3-10',
            name: 'USS Theodore Roosevelt UFO incidents',
            type: 'Sighting',
            location: {
                name: 'United States; East Coast of the United States',
                coordinates: '30.734299, -79.425793',
            },
            description:
                'Navy pilots from the Theodore Roosevelt began to notice unexplained objects on their radar after an equipment upgrade. Some pilots were unable to see the objects. Others captured video footage, later released to the public. The pilots reported these incidents to the then-obscure Advanced Aerospace Threat Identification Program resulting in new guidelines regarding unexplained aerial phenomena sightings.',
        },
        {
            id: '91',
            date: '2023-1-28 to 2023-2-13',
            name: 'List of high-altitude object events in 2023',
            type: 'Undefined report',
            location: {
                name: 'United States, Canada, Colombia, Costa Rica, and Venezuela',
                coordinates: '33.689060,-78.886696',
            },
            description:
                'Multiple airborne objects, sometimes reported in mainstream media as UFOs, were observed and sometimes shot down by military aircraft. Many of the objects were reported as meteorology or espionage balloons.',
        },
        {
            id: '92',
            date: '218 BC',
            name: 'Ships in the sky',
            type: 'Sighting',
            location: {
                name: 'Roman Republic, Rome, Italia',
                coordinates: '41.893333, 12.502778',
            },
            description:
                'During the build-up to the Second Punic War, Livy recorded prodigies in the winter sky, including navium speciem de caelo adfulsisse ("phantom ships had been seen gleaming in the sky").',
        },
        {
            id: '93',
            date: '76 BC',
            name: 'Spark from a falling star',
            type: 'Sighting',
            location: {
                name: 'Roman Republic, Asia',
                coordinates: '38.504532, 27.924071',
            },
            description:
                'According to Pliny the Elder, a spark fell from a star and grew as it descended until it appeared to be the size of the Moon. It then ascended back up to the heavens and was transformed into a torch. Astronomer Richard Stothers interpreted the report as a description of a bolide.',
        },
        {
            id: '94',
            date: '7 BC',
            name: 'Flame-like wine-jars from the sky',
            type: 'Undefined report',
            location: {
                name: 'Roman Republic, Phrygia, Asia',
                coordinates: '39, 31',
            },
            description:
                'According to Plutarch, a Roman army commanded by Lucullus was about to begin a battle with Mithridates VI of Pontus when "the sky burst asunder, and a huge, flame-like body was seen to fall between the two armies". Plutarch reports the shape of the object as like a wine-jar (pithos).',
        },
        {
            id: '95',
            date: 'AD 65',
            name: 'Sky army',
            type: 'Undefined report',
            location: {
                name: 'Roman Empire, Judaea',
                coordinates: '32.5, 34.9',
            },
            description:
                'Romano-Jewish historian Flavius Josephus reported chariots "hurtling through the clouds" prior to the First Jewish–Roman War.',
        },
        {
            id: '96',
            date: 'AD 196',
            name: 'Angel hair',
            type: 'Undefined report',
            location: {
                name: 'Roman Empire, Rome, Italia',
                coordinates: '41.893333, 12.462778',
            },
            description:
                'Historian Cassius Dio described "A fine rain resembling silver descended from a clear sky upon the Forum of Augustus." He used some of the material to plate some of his bronze coins, but by the fourth day afterwards, the silvery coating was gone.',
        },
        {
            id: '97',
            date: 'AD 740',
            name: 'Air ship of Clonmacnoise',
            type: 'Undefined report',
            location: {
                name: 'Ireland, Teltown in County Meath, and Clonmacnoise in County Offaly',
                coordinates: '53.323889, -7.991111',
            },
            description:
                'Several sets of Irish annals, those of Ulster, Tigernach, Clonmacnoise, and the Four Masters, all have entries to the effect that "ships with their crews were seen in the air".',
        },
    ],
    Cy = Be.div`
    position: relative;
`,
    Ey = Be.div`
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #f44336;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`,
    _y = ln(
        R('path', {
            d: 'M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5C9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89zM18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12z',
        }),
        'CrisisAlert'
    ),
    Ty = ln(
        R('path', {
            d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm3 2v2h6v-2h-6zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z',
        }),
        'PersonRemove'
    ),
    Py = ln(
        R('path', {
            d: 'M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z',
        }),
        'Report'
    ),
    Ay = ln(
        R('path', {
            d: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1l-.5-2zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z',
        }),
        'SettingsAccessibility'
    ),
    Oy = ln(
        R('path', {
            d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z',
        }),
        'SupervisorAccount'
    ),
    by = ln(
        R('path', { d: 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z' }),
        'VerticalAlignBottom'
    ),
    My = ln(
        R('path', {
            d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        }),
        'Visibility'
    ),
    Ry = Be.div`
    position: absolute;
    top: -15px;
    left: 30px;

    hover: {
        cursor: default;
    }
`,
    zy = Be.div`
    padding: 16px;
`,
    Fy = Be.div``,
    Ly = Be.div``,
    Ny = Be.div``,
    Uy = ({ sighting: e }) =>
        R(Ry, {
            children: R(zy, {
                children: Yt($f, {
                    sx: { padding: '16px', width: '400px' },
                    children: [
                        Yt(Fy, {
                            children: [
                                R(dr, {
                                    variant: 'h6',
                                    gutterBottom: !0,
                                    children: e.name,
                                }),
                                R(dr, {
                                    variant: 'body2',
                                    gutterBottom: !0,
                                    children: `Date: ${e.date}`,
                                }),
                                R(dr, {
                                    variant: 'body2',
                                    gutterBottom: !0,
                                    children: `Type: ${e.type}`,
                                }),
                            ],
                        }),
                        R(qu, { sx: { margin: '16px 0' } }),
                        R(Ly, {
                            children: R(dr, {
                                variant: 'body1',
                                children: e.description,
                            }),
                        }),
                        R(qu, { sx: { margin: '16px 0' } }),
                        Yt(Ny, {
                            children: [
                                'Source:',
                                ' ',
                                R('a', {
                                    href: 'https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings',
                                    children: 'List of reported UFO sightings',
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    Iy = Be.div`
    position: relative;
`,
    $y = ({ modal: e, unSetModal: t }) => (
        C.useEffect(() => {
            console.log('modal', e);
        }, [e, t]),
        R(Iy, {
            children: R($f, {
                sx: { width: '500px', height: '500px' },
                children: e,
            }),
        })
    ),
    jy = C.createContext({ setModal: (e) => {} }),
    Dy = () => {
        const e = C.useContext(jy);
        if (e === void 0)
            throw new Error('useModal must be used within a ModalProvider');
        return e;
    },
    By = ({ sighting: e }) => {
        const [t, n] = C.useState(!1),
            { setModal: r } = Dy();
        return Yt(Cy, {
            onClick: () => {
                console.log('togglePopup'), r(R('h1', { children: e.name }));
            },
            children: [
                R(Ey, {
                    children: (() => {
                        switch (e.type) {
                            case 'Sighting':
                                return R(My, { sx: { color: 'white' } });
                            case 'Abduction':
                                return R(Ay, { sx: { color: 'white' } });
                            case 'Close encounter':
                                return R(Oy, { sx: { color: 'white' } });
                            case 'Disappearance':
                                return R(Ty, { sx: { color: 'white' } });
                            case 'Crash':
                                return R(_y, { sx: { color: 'white' } });
                            case 'Landing':
                                return R(by, { sx: { color: 'white' } });
                            default:
                                return R(Py, { sx: { color: 'white' } });
                        }
                    })(),
                }),
                t && R(Uy, { sighting: e }),
            ],
        });
    },
    Wy = ({ sighting: e }) => {
        var n;
        const t = (n = e.location.coordinates) == null ? void 0 : n.split(',');
        return R(wy, {
            latitude: Number(t[0]),
            longitude: Number(t[1]),
            anchor: 'center',
            children: R(By, { sighting: e }),
        });
    },
    Hy = {
        streets: 'mapbox://styles/mapbox/streets-v12',
        outdoors: 'mapbox://styles/mapbox/outdoors-v12',
        light: 'mapbox://styles/mapbox/light-v11',
        dark: 'mapbox://styles/mapbox/dark-v11',
        satellite: 'mapbox://styles/mapbox/satellite-v9',
        satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v12',
        navigationDay: 'mapbox://styles/mapbox/navigation-day-v1',
        navigationNight: 'mapbox://styles/mapbox/navigation-night-v1',
    },
    Vy = { initialViewState: { longitude: -95, latitude: 35, zoom: 3 } },
    Ky = () =>
        R(ky, {
            children: Yt(vy, {
                mapboxAccessToken:
                    'pk.eyJ1IjoiaGVubGl0IiwiYSI6ImNrZHQ2eHBmMTBuMTQydG9xcmtteW9xZHAifQ.p3rnYNgr1p2JX8SebXG06w',
                initialViewState: Vy.initialViewState,
                mapStyle: Hy.outdoors,
                style: { width: '100%', height: '100%' },
                children: [
                    R(Sy, {
                        positionOptions: { enableHighAccuracy: !0 },
                        trackUserLocation: !0,
                    }),
                    xy.map((e) => R(Wy, { sighting: e }, e.id)),
                ],
            }),
        }),
    Gy = () =>
        Yt('div', {
            style: { display: 'flex', position: 'relative' },
            children: [
                R(dr, {
                    variant: 'h5',
                    sx: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        margin: '16px',
                        color: '#ffffff',
                        zIndex: 10,
                    },
                    children: 'UFO/UAP Report & Sighting map',
                }),
                R(Ky, {}),
                R($y, {}),
            ],
        });
ka.createRoot(document.getElementById('root')).render(
    R(gc.StrictMode, { children: R(Gy, {}) })
);
export { Qy as c, Bf as g };