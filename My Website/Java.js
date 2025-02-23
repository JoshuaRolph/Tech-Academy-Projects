!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("scc-c2", [], e) : "object" == typeof exports ? exports["scc-c2"] = e() : t["scc-c2"] = e()
}(self, ( () => ( () => {
    "use strict";
    var t = {
        d: (e, n) => {
            for (var r in n)
                t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: n[r]
                })
        }
        ,
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
      , e = {};
    t.r(e),
    t.d(e, {
        _isDebug: () => v,
        debug: () => w,
        error: () => h,
        info: () => m,
        log: () => m,
        setDebug: () => b,
        warn: () => g
    });
    var n = {};
    t.r(n),
    t.d(n, {
        cmdLogEvent: () => Ki,
        cmdLogPerf: () => Gi
    });
    var r, o, i, a, c, u = (r = "",
    i = {
        document: o = Object.create({
            get cookie() {
                return r
            },
            set cookie(t) {
                r = t
            }
        })
    },
    a = {},
    "undefined" == typeof window ? {
        window: i,
        document: o,
        navigator: a
    } : {
        window: window || i,
        document: window.document || o,
        navigator: navigator || a
    }), f = function() {
        return u.window
    }, s = function() {
        return u.document
    }, l = function() {
        return u.navigator
    }, p = function() {
        var t = f().location;
        return t && t.hostname ? t.hostname : ""
    }, y = function() {
        var t = p()
          , e = t.split(".")
          , n = e.length;
        return n > 2 && (t = "".concat(e[n - 2], ".").concat(e[n - 1]),
        2 !== e[n - 2].length && 3 !== e[n - 2].length || 2 !== e[n - 1].length || (t = "".concat(e[n - 3], ".").concat(t))),
        t
    }, v = !1, b = function(t) {
        v = !0 === t || "true" === t
    }, d = function(t) {
        return f().console,
        function() {}
    }, m = d(), h = d(), g = d(), w = function() {
        if (v) {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            m.apply(null, e)
        }
    }, O = function(t) {
        if (f()[c])
            return f()[c][t]
    }, j = function(t, e) {
        f()[c] && (f()[c][t] = e)
    }, _ = function(t, e) {
        f()[t] = e,
        j(t, e)
    };
    function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function P(t, e, n) {
        return (e = function(t) {
            var e = function(t) {
                if ("object" != E(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != E(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == E(e) ? e : e + ""
        }(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function E(t) {
        return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        E(t)
    }
    var k = function(t, e) {
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r = t[n];
                try {
                    if (e(n, r))
                        return t
                } catch (t) {}
            }
        return t
    }
      , T = function() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
            "object" === E(n) && k(n, (function(e, n) {
                t[e] = n
            }
            ))
        }
        return t
    }
      , C = function(t) {
        for (var e in t)
            void 0 === t[e] ? delete t[e] : "object" === E(t[e]) && (C(t[e]),
            0 === Object.keys(t[e]).length && delete t[e]);
        return t
    }
      , I = function(t) {
        if (2 === t.length)
            return t[1]
    }
      , x = function(t, e, n) {
        if ("string" != typeof t)
            return {};
        for (var r = {}, o = t.split(e), i = 0; i < o.length; i++) {
            var a = o[i].split(n);
            r[a[0]] = I(a)
        }
        return r
    }
      , L = function(t, e, n) {
        var r = [];
        return k(t, (function(t, e) {
            r.push("".concat(t).concat(n).concat(e))
        }
        )),
        0 === r.length ? "" : r.join(e)
    }
      , R = function(t, e) {
        return e && (t = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach((function(e) {
                    P(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }({}, t)),
        Object.keys(t).forEach((function(n) {
            if ("object" === E(t[n])) {
                var r = R(t[n], e);
                e && (t[n] = r)
            }
        }
        )),
        Object.freeze(t)
    }
      , D = function(t, e) {
        if (void 0 === t)
            return t;
        void 0 === e && (e = 2);
        for (var n = String(t); n.length < e; )
            n = "0" + n;
        return n
    }
      , A = function(t) {
        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] || void 0 !== t)
            return !0 === t || 1 === t || "string" == typeof t && ("true" === t.toLowerCase() || "1" === t)
    }
      , M = function(t) {
        var e = parseInt(t, 10);
        if (!isNaN(e))
            return e
    }
      , B = function(t) {
        return /^-?\d+$/.test(t)
    }
      , F = function() {
        return function(t) {
            var e = t.getUTCFullYear() + "-" + D(t.getUTCMonth() + 1);
            if (e += "-" + D(t.getUTCDate()) + "T" + D(t.getUTCHours()) + ":",
            e += D(t.getUTCMinutes()) + ":" + D(t.getUTCSeconds()),
            t.getUTCMilliseconds) {
                var n = t.getUTCMilliseconds();
                B(n) && (e += "." + String((n / 1e3).toFixed(3)).slice(2, 5))
            }
            return e + "Z"
        }(new Date)
    }
      , q = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , U = function(t, e) {
        q(t) && t.push({
            timestamp: F(),
            data: e
        })
    };
    function N(t) {
        return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        N(t)
    }
    function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function K(t, e, n) {
        return (e = z(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function G(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, z(r.key), r)
        }
    }
    function z(t) {
        var e = function(t) {
            if ("object" != N(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != N(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == N(e) ? e : e + ""
    }
    const H = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.properties = e ? function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? V(Object(n), !0).forEach((function(e) {
                        K(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }({}, e) : {}
        }
        return e = t,
        (n = [{
            key: "clear",
            value: function() {
                this.properties = {}
            }
        }, {
            key: "get",
            value: function(t) {
                if (this.properties.hasOwnProperty(t))
                    return this.properties[t]
            }
        }, {
            key: "set",
            value: function(t, e) {
                this.properties[t] = e
            }
        }, {
            key: "isSet",
            value: function(t) {
                if (this.properties.hasOwnProperty(t))
                    return !0
            }
        }, {
            key: "delete",
            value: function(t) {
                delete this.properties[t]
            }
        }, {
            key: "getProperties",
            value: function(t) {
                var e = {}
                  , n = function() {
                    return !1
                };
                return t || "function" != typeof t || (n = t),
                k(this.properties, (function(t, r) {
                    n(t) || (e[t] = r)
                }
                )),
                e
            }
        }, {
            key: "merge",
            value: function(e) {
                var n = this
                  , r = e;
                r instanceof t && (r = e.getProperties()),
                k(r, (function(t, e) {
                    n.set(t, e)
                }
                ))
            }
        }]) && G(e.prototype, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e;
        var e, n
    }();
    var W, $ = {}, Q = {
        "first-paint": "fp",
        "first-contentful-paint": "fcp"
    }, J = ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "navigationStart", "requestStart", "responseEnd", "responseStart", "loadEventStart", "loadEventEnd"], Z = ["transferSize", "encodedBodySize", "decodedBodySize"], X = function(t, e) {
        for (var n = {}, r = 0; r < e.length; r++) {
            var o = e[r]
              , i = t[o];
            void 0 !== i && (n[o] = Math.round(i))
        }
        return n
    }, Y = function(t) {
        return X(t, J)
    }, tt = function(t) {
        return X(t, Z)
    }, et = function(t, e) {
        var n = new H;
        "tcc" === t && n.set("tccin", e || "na");
        try {
            (W = f().performance) && W.timing ? (function(t) {
                if (t.merge(Y(W.timing)),
                W.getEntriesByName) {
                    var e = W.getEntriesByName(s().location.href)[0];
                    if (!e && W.getEntriesByType) {
                        var n = W.getEntriesByType("navigation");
                        e = n[n.length - 1]
                    }
                    e && (t.merge(tt(e)),
                    t.set("navigationType", e.type))
                }
            }(n),
            "tcc" === t && (function(t) {
                if (W.getEntriesByType) {
                    var e = W.getEntriesByType("mark");
                    if (q(e)) {
                        t.set("marks", e.slice(0, 10).map((function(t) {
                            return {
                                name: t.name,
                                startTime: Math.round(t.startTime)
                            }
                        }
                        )));
                        var n = W.getEntriesByType("measure");
                        q(n) && t.set("measures", n.slice(0, 10).map((function(t) {
                            return {
                                name: t.name,
                                duration: Math.round(t.duration)
                            }
                        }
                        )))
                    }
                }
            }(n),
            function(t) {
                if (W.getEntriesByType) {
                    var e = W.getEntriesByType("paint");
                    e && e.forEach((function(e) {
                        t.set(Q[e.name], Math.round(e.startTime))
                    }
                    ))
                }
            }(n))) : ("tcc" === t && n.set("tccperfapi", "not supported"),
            h("Error loading performance lib"))
        } catch (t) {
            h("_collect unable to get performance data", t)
        }
        return n.getProperties()
    }, nt = function(t, e, n) {
        setTimeout((function() {
            f()._expDataLayer = f()._expDataLayer || [],
            f()._expDataLayer.push({
                schema: "add_perf",
                version: "v1",
                data: "tcc" === t ? {
                    type: "pageperf",
                    properties: T(e, $, {
                        nav_type: "hard"
                    }),
                    custom_properties: n
                } : {
                    timing_object: T(e, $),
                    is_hard_navigation: !0,
                    custom_properties: n
                }
            })
        }
        ), 0)
    }, rt = function() {
        return !(W = f().performance) || !W.timing || W.timing.loadEventStart > 0
    }, ot = !1;
    function it(t) {
        return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        it(t)
    }
    function at(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, ct(r.key), r)
        }
    }
    function ct(t) {
        var e = function(t) {
            if ("object" != it(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != it(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == it(e) ? e : e + ""
    }
    var ut, ft = function() {
        return t = function t(e, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._loaded = !1,
            this._onLoadFns = [],
            e ? this._loaded = !0 : n(this._triggerOnLoad.bind(this))
        }
        ,
        e = [{
            key: "_executeFn",
            value: function(t) {
                try {
                    t()
                } catch (e) {
                    h("Exception while executing onLoad callback", t, e)
                }
            }
        }, {
            key: "_triggerOnLoad",
            value: function() {
                this._loaded = !0;
                for (var t = 0; t < this._onLoadFns.length; t++)
                    this._executeFn(this._onLoadFns[t])
            }
        }, {
            key: "registerOnLoadFn",
            value: function(t) {
                (function(t) {
                    return t && "[object Function]" === {}.toString.call(t)
                }
                )(t) && (this._loaded ? this._executeFn(t) : this._onLoadFns.push(t))
            }
        }],
        e && at(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }(), st = f().Request, lt = st && "keepalive"in new st(""), pt = void 0 !== l().sendBeacon, yt = function(t, e, n, r) {
        var o = f().XMLHttpRequest;
        if (o) {
            var i = new o;
            i.open(e, t, !0),
            k(r, (function(t, e) {
                i.setRequestHeader(t, e)
            }
            )),
            i.send(n)
        }
    }, vt = function(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          , o = r.queryParams
          , i = r.payload
          , a = r.requestHeaders
          , c = r.credentials
          , u = r.sendAsBeacon
          , s = void 0 !== u && u
          , p = T({}, a)
          , y = i ? JSON.stringify(i) : null;
        if (s && pt && !p.Authorization && "POST" === e)
            try {
                var v = f().Blob;
                l().sendBeacon(t, new v([y],p))
            } catch (n) {
                yt(t, e, y, p)
            }
        else
            !function(t, e, n, r, o) {
                var i = f().fetch;
                lt && i ? i(t, {
                    keepalive: !0,
                    method: e,
                    headers: r,
                    body: n,
                    credentials: o
                }).catch((function(o) {
                    yt(t, e, n, r)
                }
                )) : yt(t, e, n, r)
            }(t, e, y, p, c);
        !function(t, e, n, r, o) {
            var i = {
                endpoint: e,
                queryParams: n,
                method: r,
                payload: o
            };
            U(O(t), i)
        }(n, t, o, e, i)
    }, bt = function(t, e) {
        var n = O("config")[t];
        if (n && e)
            return n[e]
    }, dt = [{
        name: "EMAIL",
        regex: /[^@^=]+@[^@]+\.[^@^&]+/
    }], mt = function(t, e) {
        if ("string" != typeof t)
            return t;
        for (var n = t, r = 0; r < dt.length; r++)
            for (var o = dt[r].regex, i = n.match(o); i && i[0]; )
                i = (n = n.replace(i[0], "REDACTED")).match(o);
        return n
    }, ht = function(t) {
        return (t = t || f().location.search) ? ("?" === t.substr(0, 1) && (t = t.substring(1)),
        t.split("&")) : []
    }, gt = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return "https://".concat(t ? t + "." : "").concat(function() {
            if (ut)
                return ut;
            var t = y();
            if ("secureserver.net" === (t = function(t) {
                var e = t || y();
                return e.indexOf("godaddy.com") >= 0 || e.indexOf("secureserver.net") >= 0
            }(t) ? t : "secureserver.net")) {
                var e = bt("build", "env");
                t = "prod" === e ? t : "".concat(e, "-").concat(t)
            }
            return ut = t
        }())
    };
    function wt(t) {
        return wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        wt(t)
    }
    function Ot(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], u = !0, f = !1;
                try {
                    if (i = (n = n.call(t)).next,
                    0 === e) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = i.call(n)).done) && (c.push(r.value),
                        c.length !== e); u = !0)
                            ;
                } catch (t) {
                    f = !0,
                    o = t
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (f)
                            throw o
                    }
                }
                return c
            }
        }(t, e) || jt(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function jt(t, e) {
        if (t) {
            if ("string" == typeof t)
                return _t(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _t(t, e) : void 0
        }
    }
    function _t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function St(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Pt(r.key), r)
        }
    }
    function Pt(t) {
        var e = function(t) {
            if ("object" != wt(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != wt(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == wt(e) ? e : e + ""
    }
    const Et = function() {
        return t = function t(e) {
            var n = this
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._eventQueue = [],
            this._sendBatchCallback = e,
            this._maxEvents = r,
            this._isFlushing = !1,
            this._bindHandlers(),
            this._processInterval = setInterval((function() {
                n._sendBatch()
            }
            ), 250)
        }
        ,
        (e = [{
            key: "_bindHandlers",
            value: function() {
                var t = this
                  , e = this._hidePage.bind(this)
                  , n = this._showPage.bind(this)
                  , r = f().attachEvent
                  , o = f().addEventListener;
                o ? (o("beforeunload", e, !1),
                o("pagehide", e, !1),
                o("pageshow", n, !1)) : r && (r("beforeunload", e),
                r("pagehide", e),
                r("pageshow", n));
                var i = s()
                  , a = i.addEventListener;
                a && a("visibilitychange", function() {
                    "hidden" === i.visibilityState && t._hidePage(),
                    "visible" === i.visibilityState && t._showPage()
                }
                .bind(this))
            }
        }, {
            key: "_hidePage",
            value: function() {
                for (this._isFlushing = !0; this._eventQueue.length > 0; )
                    this._sendBatch()
            }
        }, {
            key: "_showPage",
            value: function() {
                this._isFlushing = !1
            }
        }, {
            key: "_sendRequests",
            value: function(t) {
                var e = this;
                Object.entries(t).forEach((function(t) {
                    var n = Ot(t, 2)
                      , r = n[0]
                      , o = n[1];
                    try {
                        var i = Ot(r.split("|"), 2)
                          , a = i[0]
                          , c = {
                            schemaId: i[1],
                            data: []
                        };
                        Object.values(o).forEach((function(t) {
                            if (t.events.length > 10)
                                for (var e = t.events.length / 10, n = 0; n < e; n++)
                                    c.data.push(T(t, {
                                        events: t.events.slice(10 * n, 10 * n + 10)
                                    }));
                            else
                                c.data.push(t)
                        }
                        )),
                        e._sendBatchCallback(c, {
                            apiKey: a,
                            isFlushing: e._isFlushing
                        })
                    } catch (t) {
                        h("Failed to send request: ".concat(t))
                    }
                }
                ))
            }
        }, {
            key: "pushEvent",
            value: function(t, e) {
                e || !lt && !pt || this._isFlushing ? this._sendBatch(t) : this._eventQueue.push(t)
            }
        }, {
            key: "_getRequestBatch",
            value: function(t, e, n) {
                var r = n.apiKey
                  , o = n.schemaId
                  , i = n.global
                  , a = n.contextVersion
                  , c = n.businessContext
                  , u = "".concat(r, "|").concat(o)
                  , f = t[u] || {};
                t[u] = f;
                var s = 0;
                c && (e.push(c),
                s = e.length);
                var l = "".concat(a, "|").concat(s);
                return {
                    batch: f[l] || {
                        global: i,
                        businessContext: c,
                        events: []
                    },
                    batchKey: l,
                    request: f
                }
            }
        }, {
            key: "_processEvent",
            value: function(t, e, n) {
                var r, o = this._getRequestBatch(t, e, n), i = o.batch, a = o.batchKey, c = o.request;
                return (r = i.events).push.apply(r, function(t) {
                    return function(t) {
                        if (Array.isArray(t))
                            return _t(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                            return Array.from(t)
                    }(t) || jt(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }(n.events.slice(0, this._maxEvents))),
                n.events.length > this._maxEvents && this.pushEvent(T(n, {
                    events: n.events.slice(this._maxEvents)
                })),
                c[a] = i,
                Math.min(n.events.length, this._maxEvents)
            }
        }, {
            key: "_sendBatch",
            value: function(t) {
                var e = 0
                  , n = {}
                  , r = [];
                for (t && (e += this._processEvent(n, r, t)); this._eventQueue.length > 0 && e < this._maxEvents; )
                    e += this._processEvent(n, r, this._eventQueue.shift());
                this._sendRequests(n)
            }
        }]) && St(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }();
    var kt, Tt = "_eventBusSendLog", Ct = function(t, e) {
        var n = e.apiKey
          , r = e.isFlushing;
        vt("".concat(gt("csp"), "/eventbus/web?clientid=").concat(n), "POST", Tt, {
            payload: t,
            sendAsBeacon: r
        })
    };
    function It(t) {
        return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        It(t)
    }
    function xt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Lt(r.key), r)
        }
    }
    function Lt(t) {
        var e = function(t) {
            if ("object" != It(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != It(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == It(e) ? e : e + ""
    }
    function Rt() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Rt = function() {
            return !!t
        }
        )()
    }
    function Dt(t, e, n, r) {
        var o = At(Mt(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o ? function(t) {
            return o.apply(n, t)
        }
        : o
    }
    function At() {
        return At = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Mt(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        At.apply(null, arguments)
    }
    function Mt(t) {
        return Mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Mt(t)
    }
    function Bt(t, e) {
        return Bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Bt(t, e)
    }
    var Ft = function(t) {
        try {
            return JSON.parse(t)
        } catch (t) {
            return {}
        }
    };
    const qt = new (function(t) {
        function e(t) {
            var n;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            (n = function(t, e, n) {
                return e = Mt(e),
                function(t, e) {
                    if (e && ("object" == It(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Rt() ? Reflect.construct(e, n || [], Mt(t).constructor) : e.apply(t, n))
            }(this, e, [t]))._updateWindow(),
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Bt(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_updateWindow",
            value: function() {
                j("config", R(this.properties, !0))
            }
        }, {
            key: "set",
            value: function(t, n) {
                Dt(e, "set", this, 3)([t, n]),
                this._updateWindow()
            }
        }, {
            key: "merge",
            value: function(t) {
                Dt(e, "merge", this, 3)([t]),
                this._updateWindow()
            }
        }]) && xt(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(H))({
        build: {
            env: "prod",
            date: "2024-12-22T23:44:05.033Z"
        },
        client: {
            name: "scc-c2",
            version: "1.0.1"
        },
        cookie: {
            sameSite: "none"
        },
        site: {
            privateLabelId: ""
        },
        sGtm: {
            enabled: A(""),
            whitelist: Ft(""),
            account: "",
            host: ""
        },
        ga: {
            account: ""
        },
        wGtm: {
            account: "",
            enableProxy: A(""),
            enabled: A(""),
            requireGoogleClientId: A(""),
            whitelist: Ft("")
        },
        eventBus: {
            enabled: A("true"),
            sccApiKey: "b18ef4f046435b64a469b32c3c1c20a3",
            rigorApiKey: "8da2217409854bee82e12dc4ca0b39fb"
        },
        clickListener: {
            enabled: !0,
            navDelayMs: 75
        },
        timing: {
            auto: !0
        },
        webVitals: {
            enabled: !0,
            url: ""
        },
        consent: {
            delayMs: 500
        }
    });
    var Ut, Nt, Vt, Kt = function(t, e) {
        var n = qt.get(t);
        if (n && e)
            return n[e]
    }, Gt = function(t, e, n) {
        var r = qt.get(t)
          , o = r || {};
        r || qt.set(t, o),
        o[e] = n
    };
    function zt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    var Ht, Wt, $t = [], Qt = {}, Jt = 0, Zt = function(t) {
        var e, n = function(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return zt(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zt(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    i = t
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }(Ht);
        try {
            for (n.s(); !(e = n.n()).done; ) {
                var r = e.value;
                if (t.startsWith("".concat(r, ".")))
                    return !1
            }
        } catch (t) {
            n.e(t)
        } finally {
            n.f()
        }
        return !0
    }, Xt = function(t, e) {
        "debug" === t && b(e)
    }, Yt = function() {
        var t, e, n = function() {
            for (var t = {}, e = 0; e < Nt.length; e++) {
                var n = Nt[e];
                k(n, (function(e, n) {
                    -1 === Wt.indexOf(e.toLowerCase()) && (Xt(e, n),
                    Zt(e) || (t[e] = n))
                }
                ))
            }
            return t
        }();
        e = {
            identity: {
                realm: (t = n)["".concat(Ut, ".realm")]
            },
            site: {
                privateLabelId: t["".concat(Ut, ".privateLabelId")]
            },
            timing: {
                auto: !A(t["".concat(Ut, ".manualPagePerf")], !1)
            },
            page: {
                spa: t["".concat(Ut, ".spa")],
                id: t["".concat(Ut, ".pageId")],
                contentGroup: t["".concat(Ut, ".gaContentGroup")] || t["".concat(Ut, ".contentGroup")],
                referrerExclusion: t["".concat(Ut, ".referrerExclusion")]
            },
            cookie: {
                sameSite: t["".concat(Ut, ".cookies.sameSite")]
            },
            wGtm: {
                enabled: A(t["".concat(Ut, ".webGtmEnabled")], !1)
            },
            clickListener: {
                enabled: !A(t["".concat(Ut, ".listenerDisabled")], !1),
                navDelayMs: t["".concat(Ut, ".eventDelayMs")]
            }
        },
        Object.keys(e).forEach((function(t) {
            Object.keys(e[t]).forEach((function(n) {
                var r = e[t][n];
                void 0 !== r && Gt(t, n, r)
            }
            ))
        }
        )),
        qt.merge(n),
        U($t, n)
    };
    const te = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    let ee;
    const ne = new Uint8Array(16);
    function re() {
        if (!ee && (ee = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
        !ee))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return ee(ne)
    }
    const oe = [];
    for (let t = 0; t < 256; ++t)
        oe.push((t + 256).toString(16).slice(1));
    const ie = function(t, e, n) {
        if (te.randomUUID && !e && !t)
            return te.randomUUID();
        const r = (t = t || {}).random || (t.rng || re)();
        if (r[6] = 15 & r[6] | 64,
        r[8] = 63 & r[8] | 128,
        e) {
            n = n || 0;
            for (let t = 0; t < 16; ++t)
                e[n + t] = r[t];
            return e
        }
        return function(t, e=0) {
            return oe[t[e + 0]] + oe[t[e + 1]] + oe[t[e + 2]] + oe[t[e + 3]] + "-" + oe[t[e + 4]] + oe[t[e + 5]] + "-" + oe[t[e + 6]] + oe[t[e + 7]] + "-" + oe[t[e + 8]] + oe[t[e + 9]] + "-" + oe[t[e + 10]] + oe[t[e + 11]] + oe[t[e + 12]] + oe[t[e + 13]] + oe[t[e + 14]] + oe[t[e + 15]]
        }(r)
    };
    var ae = function() {
        return ie()
    };
    function ce(t) {
        return ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ce(t)
    }
    function ue(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function fe(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, se(r.key), r)
        }
    }
    function se(t) {
        var e = function(t) {
            if ("object" != ce(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ce(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == ce(e) ? e : e + ""
    }
    var le = function() {
        return t = function t(e) {
            var n = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.dataLayerNames = e,
            this.dataLayerLog = [],
            this.asyncCommands = [],
            this.loaded = !1,
            this.dataLayers = [],
            this.dataLayerNames.forEach((function(t) {
                var e, r = f()[t];
                q(r) && (e = n.asyncCommands).push.apply(e, function(t) {
                    return function(t) {
                        if (Array.isArray(t))
                            return ue(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                            return Array.from(t)
                    }(t) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t)
                                return ue(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(t, e) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }(r)),
                _(t, n),
                n.dataLayers.push(r)
            }
            ))
        }
        ,
        (e = [{
            key: "start",
            value: function() {
                this.loadAsyncCommands()
            }
        }, {
            key: "pushLog",
            value: function(t) {
                U(this.dataLayerLog, t)
            }
        }, {
            key: "process",
            value: function() {}
        }, {
            key: "push",
            value: function(t) {
                this.loaded ? this.process(t) : this.asyncCommands.push(t)
            }
        }, {
            key: "loadAsyncCommands",
            value: function() {
                for (; this.asyncCommands.length > 0; )
                    this.process(this.asyncCommands.shift());
                this.loaded = !0
            }
        }]) && fe(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }();
    function pe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function ye(t) {
        return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ye(t)
    }
    function ve(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function be(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, me(r.key), r)
        }
    }
    function de(t, e, n) {
        return e && be(t.prototype, e),
        n && be(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function me(t) {
        var e = function(t) {
            if ("object" != ye(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ye(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == ye(e) ? e : e + ""
    }
    var he = function() {
        return de((function t(e, n) {
            if (ve(this, t),
            !e)
                throw "Missing version definitions";
            this._versionedDefinitions = e,
            this._interfaceType = n
        }
        ), [{
            key: "getInterface",
            value: function(t, e) {
                var n = this._versionedDefinitions[e];
                if (n)
                    return n
            }
        }])
    }()
      , ge = function() {
        return de((function t(e) {
            if (ve(this, t),
            !e)
                throw "Missing type definitions";
            this._typeVersionDefinitionMap = e
        }
        ), [{
            key: "getInterface",
            value: function(t, e, n) {
                var r = this._typeVersionDefinitionMap[n];
                if (r)
                    return r.getInterface(t, e)
            }
        }])
    }()
      , we = {}
      , Oe = function(t) {
        for (var e = function() {
            var t, e, o = (t = r[n],
            e = 2,
            function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, a, c = [], u = !0, f = !1;
                    try {
                        if (i = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            u = !1
                        } else
                            for (; !(u = (r = i.call(n)).done) && (c.push(r.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        f = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (f)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return pe(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pe(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), i = o[0], a = o[1];
            if (q(a)) {
                var c = {};
                a.forEach((function(t) {
                    var e = {};
                    Object.keys(t).forEach((function(n) {
                        "type" !== n && (e[n] = t[n])
                    }
                    )),
                    c[t.type] = new he(e,t.type)
                }
                )),
                we[i] = new ge(c)
            } else
                we[i] = new he(a)
        }, n = 0, r = Object.entries(t); n < r.length; n++)
            e()
    }
      , je = "string"
      , _e = /^([\w-]+)$/
      , Se = /^([\w/-]+)$/
      , Pe = "OPTIONAL"
      , Ee = "REQUIRED"
      , ke = "map";
    function Te(t, e, n) {
        return e = Le(e),
        function(t, e) {
            if (e && ("object" == qe(e) || "function" == typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, Ce() ? Reflect.construct(e, n || [], Le(t).constructor) : e.apply(t, n))
    }
    function Ce() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Ce = function() {
            return !!t
        }
        )()
    }
    function Ie(t, e, n, r) {
        var o = xe(Le(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o ? function(t) {
            return o.apply(n, t)
        }
        : o
    }
    function xe() {
        return xe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Le(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        xe.apply(null, arguments)
    }
    function Le(t) {
        return Le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Le(t)
    }
    function Re(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && De(t, e)
    }
    function De(t, e) {
        return De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        De(t, e)
    }
    function Ae(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Me(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Fe(r.key), r)
        }
    }
    function Be(t, e, n) {
        return e && Me(t.prototype, e),
        n && Me(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function Fe(t) {
        var e = function(t) {
            if ("object" != qe(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != qe(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == qe(e) ? e : e + ""
    }
    function qe(t) {
        return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        qe(t)
    }
    var Ue = function(t, e, n) {
        var r;
        if ("CALCULATED" !== e._fieldType) {
            var o = t[e.name];
            "sub" === e._resolutionType && (o = t),
            r = e.parse(o)
        }
        var i = qe(e.transformFn);
        if ("undefined" !== i) {
            var a = q(e.transformFn);
            if ("function" === i || a)
                for (var c = a ? e.transformFn : [e.transformFn], u = 0; u < c.length; u++)
                    r = c[u](r, n);
            else
                r = e.transformFn
        }
        return e._outputType && e._outputType === je && (r = r.toString()),
        r
    }
      , Ne = function() {
        return Be((function t(e) {
            Ae(this, t),
            this.name = e,
            this.properties = [],
            this.definitionType = "",
            this._outputType,
            this._resolutionType = ke,
            this._fieldType = Pe,
            this.outputKey,
            this.allowedValuesList = []
        }
        ), [{
            key: "parse",
            value: function(t) {
                if (this.validate(t),
                this._fieldType !== Pe || t || "boolean" == typeof t || 0 === t) {
                    for (var e = new H, n = 0; n < this.properties.length; n++) {
                        var r = this.properties[n]
                          , o = Ue(t, r, e.getProperties());
                        r._resolutionType === ke ? e.set(r.outputKey || r.name, o) : e.merge(o)
                    }
                    return e.getProperties()
                }
            }
        }, {
            key: "validate",
            value: function(t) {
                if (this._fieldType === Ee && !t && "boolean" != typeof t && 0 !== t)
                    throw "Missing required property '".concat(this.name, "'");
                if (this.allowedValuesList.length > 0 && !this.allowedValuesList.includes(t))
                    throw "Input '".concat(t, "' for property '").concat(this.name, "' is not one of the allowed values (").concat(this.allowedValuesList, ").")
            }
        }, {
            key: "optional",
            value: function() {
                return this._fieldType = Pe,
                this
            }
        }, {
            key: "required",
            value: function() {
                return this._fieldType = Ee,
                this
            }
        }, {
            key: "stringify",
            value: function() {
                for (var t = new H, e = 0; e < this.properties.length; e++) {
                    var n = this.properties[e];
                    t.merge(n.stringify())
                }
                return t.getProperties()
            }
        }, {
            key: "transform",
            value: function(t) {
                return this.transformFn = t,
                this
            }
        }, {
            key: "transformKey",
            value: function(t) {
                return this.outputKey = t,
                this
            }
        }, {
            key: "allowedValues",
            value: function(t) {
                return this.allowedValuesList = t,
                this
            }
        }, {
            key: "outputType",
            value: function(t) {
                return this._outputType = t,
                this
            }
        }])
    }()
      , Ve = function(t) {
        function e(t, n) {
            var r;
            return Ae(this, e),
            (r = Te(this, e, [t])).definitionType = "Schema",
            r.properties = n,
            r
        }
        return Re(e, t),
        Be(e, [{
            key: "parse",
            value: function(t) {
                var n;
                if (this.properties && this.properties.length > 0)
                    try {
                        n = Ie(e, "parse", this, 3)([t || {}])
                    } catch (t) {
                        throw ""
                    }
                return Object.freeze(n)
            }
        }])
    }(Ne)
      , Ke = function(t) {
        function e() {
            return Ae(this, e),
            Te(this, e, arguments)
        }
        return Re(e, t),
        Be(e, [{
            key: "parse",
            value: function(t) {
                return this.validate(t),
                t
            }
        }, {
            key: "stringify",
            value: function() {
                var t = {};
                return t[this.name] = this._fieldType,
                t
            }
        }])
    }(Ne)
      , Ge = function(t) {
        function e() {
            return Ae(this, e),
            Te(this, e, arguments)
        }
        return Re(e, t),
        Be(e, [{
            key: "pattern",
            value: function(t) {
                return this._pattern = t,
                this
            }
        }, {
            key: "validate",
            value: function(t) {
                Ie(e, "validate", this, 3)([t]);
                var n = qe(t);
                if ("string" === n) {
                    if (this._pattern && !t.match(this._pattern))
                        throw "Input ".concat(t, " does not match ").concat(this._pattern)
                } else if ("undefined" !== n && null != t)
                    throw "Input is not a string"
            }
        }, {
            key: "stringify",
            value: function() {
                var t = Ie(e, "stringify", this, 3)([])
                  , n = this._pattern ? " | pattern: ".concat(this._pattern) : "";
                return t[this.name] = "".concat(t[this.name], " | type: string").concat(n),
                t
            }
        }])
    }(Ke)
      , ze = function(t) {
        function e() {
            var t;
            return Ae(this, e),
            (t = Te(this, e)).definitionType = "Object",
            t
        }
        return Re(e, t),
        Be(e, [{
            key: "stringify",
            value: function() {
                if (this._resolutionType === ke) {
                    var t = {};
                    return t["".concat(this.name, " (").concat(this._fieldType, ")")] = Ie(e, "stringify", this, 3)([]),
                    t
                }
                return Ie(e, "stringify", this, 3)([])
            }
        }, {
            key: "substitute",
            value: function(t) {
                return this.properties = this.properties.concat(t),
                this._resolutionType = "sub",
                this
            }
        }, {
            key: "map",
            value: function(t, e) {
                return this.name = t,
                this.properties = this.properties.concat(e),
                this._resolutionType = ke,
                this
            }
        }, {
            key: "extend",
            value: function(t) {
                return t && (this.properties = this.properties.concat(t)),
                this
            }
        }])
    }(Ne)
      , He = function(t) {
        function e() {
            var t;
            return Ae(this, e),
            (t = Te(this, e)).definitionType = "Collection",
            t.minElements = 0,
            t
        }
        return Re(e, t),
        Be(e, [{
            key: "parse",
            value: function(t) {
                if (this.minElements && (!t || t.length < this.minElements))
                    throw "";
                if (void 0 !== t) {
                    if (!q(t))
                        throw "";
                    return t.map(Ie(e, "parse", this, 1).bind(this))
                }
            }
        }, {
            key: "stringify",
            value: function() {
                if (this._resolutionType === ke) {
                    var t = {};
                    t["".concat(this.minElements, "...n")] = Ie(e, "stringify", this, 3)([])["".concat(this.name, " (").concat(this._fieldType, ")")];
                    var n = {};
                    return n["".concat(this.name, " (").concat(this._fieldType, ")")] = t,
                    n
                }
                return Ie(e, "stringify", this, 3)([])
            }
        }, {
            key: "withMinElements",
            value: function(t) {
                return this.minElements = t,
                this._fieldType = t > 0 ? Ee : Pe,
                this
            }
        }])
    }(ze);
    function We(t) {
        return We = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        We(t)
    }
    function $e(t) {
        return function(t) {
            if (Array.isArray(t))
                return Qe(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return Qe(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qe(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Qe(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function Je(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Ze(r.key), r)
        }
    }
    function Ze(t) {
        var e = function(t) {
            if ("object" != We(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != We(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == We(e) ? e : e + ""
    }
    function Xe() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Xe = function() {
            return !!t
        }
        )()
    }
    function Ye(t, e, n, r) {
        var o = tn(en(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o ? function(t) {
            return o.apply(n, t)
        }
        : o
    }
    function tn() {
        return tn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = en(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        tn.apply(null, arguments)
    }
    function en(t) {
        return en = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        en(t)
    }
    function nn(t, e) {
        return nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        nn(t, e)
    }
    var rn = ["_expDataLayer", "_signalsDataLayer"]
      , on = ["add_virtual_page_view", "set_config", "subscribe"]
      , an = function(t) {
        function n(t) {
            var e, r = t.pageViewSchema, o = t.autoPageViewDisabled, i = t.beforeEvent, a = t.immediateSchemas, c = void 0 === a ? [] : a;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            (e = function(t, e, n) {
                return e = en(e),
                function(t, e) {
                    if (e && ("object" == We(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Xe() ? Reflect.construct(e, n || [], en(t).constructor) : e.apply(t, n))
            }(this, n, [rn])).pageViewSchema = r,
            e.autoPageViewDisabled = o,
            e.beforeEvent = i,
            e.immediateSchemas = [on].concat($e(c)),
            e._initEvents(),
            e
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && nn(t, e)
        }(n, t),
        r = n,
        (o = [{
            key: "push",
            value: function(t) {
                return this.immediateSchemas.includes(t.schema) ? this.process(t) : Ye(n, "push", this, 3)([t])
            }
        }, {
            key: "_initEvents",
            value: function() {
                for (var t = !this.autoPageViewDisabled, e = this.asyncCommands.length - 1; e >= 0; e--) {
                    var n = this.asyncCommands[e];
                    n.schema !== this.pageViewSchema || n.data && n.data.virtual_path || (t = !1),
                    "set_config" === n.schema && this.process.apply(this, $e(this.asyncCommands.splice(e, 1)))
                }
                t && this.process({
                    schema: this.pageViewSchema
                })
            }
        }, {
            key: "process",
            value: function(t) {
                Ye(n, "pushLog", this, 3)([t]);
                try {
                    var r = t.data
                      , o = t.schema || t.interface
                      , i = t.type
                      , a = t.version || "v1"
                      , c = t.targets || []
                      , u = {
                        eventId: ae()
                    };
                    this.beforeEvent && this.beforeEvent(),
                    function() {
                        for (; Jt < Nt.length; ) {
                            var t = Nt[Jt];
                            k(t, (function(t, e) {
                                -1 === Wt.indexOf(t.toLowerCase()) && Zt(t) && (Xt(t, e),
                                Qt[t] = e)
                            }
                            )),
                            Jt++
                        }
                    }(),
                    function(t, e, n, r, o, i) {
                        var a = function(t, e, n) {
                            var r = we[t];
                            if (r)
                                return r.getInterface(t, n, e)
                        }(t, e, n)
                          , c = new Ve(t,a.properties).parse(r) || {}
                          , u = new a.handler(c,e,n,o,i);
                        u.preProcess(c),
                        u.process(c)
                    }(o, i, a, r, u, c)
                } catch (n) {
                    var f = ["Unable to process", t, "\n\n"];
                    h.apply(e, f.concat(n))
                }
            }
        }]) && Je(r.prototype, o),
        Object.defineProperty(r, "prototype", {
            writable: !1
        }),
        r;
        var r, o
    }(le);
    function cn(t) {
        return cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        cn(t)
    }
    function un(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, fn(r.key), r)
        }
    }
    function fn(t) {
        var e = function(t) {
            if ("object" != cn(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != cn(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == cn(e) ? e : e + ""
    }
    function sn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (sn = function() {
            return !!t
        }
        )()
    }
    function ln() {
        return ln = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = pn(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        ln.apply(null, arguments)
    }
    function pn(t) {
        return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        pn(t)
    }
    function yn(t, e) {
        return yn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        yn(t, e)
    }
    var vn = ["_trfq"]
      , bn = function(t) {
        function e(t) {
            var n;
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            (n = function(t, e, n) {
                return e = pn(e),
                function(t, e) {
                    if (e && ("object" == cn(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, sn() ? Reflect.construct(e, n || [], pn(t).constructor) : e.apply(t, n))
            }(this, e, [vn])).handlers = t,
            n.start(),
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && yn(t, e)
        }(e, t),
        n = e,
        r = [{
            key: "process",
            value: function(t) {
                var n, r, o;
                (n = e,
                r = this,
                "function" == typeof (o = ln(pn(1 & 3 ? n.prototype : n), "pushLog", r)) ? function(t) {
                    return o.apply(r, t)
                }
                : o)([t]);
                try {
                    var i = Array.prototype.slice.call(t, 1)
                      , a = t[0];
                    this.handlers[a] ? this.handlers[a].apply(null, i) : h("Invalid command sent to data layer", this.dataLayerName, t)
                } catch (r) {
                    h("Unable to process", t, r)
                }
            }
        }],
        r && un(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(le);
    const dn = new H;
    var mn, hn, gn, wn = function(t, e, n, r) {
        var o = bt("cookie", "sameSite") || ""
          , i = new Date;
        i.setTime(i.getTime() + 60 * n * 1e3),
        s().cookie = "".concat(t, "=").concat(encodeURI(e), "; domain=").concat(y(), "; ") + (n ? "expires=".concat(i.toGMTString(), "; ") : "") + (r ? "path=".concat(r, "; ") : "") + (o ? "SameSite=".concat(o, "; ") : "") + ("NONE" === o.toUpperCase() ? " Secure;" : "")
    }, On = function(t) {
        var e = s().cookie;
        return hn !== e && (gn = function(t) {
            for (var e = t.split(";"), n = Object.create(null), r = 0; r < e.length; r++) {
                var o = /([^=]*)*=([\s\S]*)/.exec(e[r]);
                if (o && o[2]) {
                    var i = o[1].trim()
                      , a = decodeURIComponent(o[2].trim());
                    n[i] = a
                }
            }
            return n
        }(e),
        hn = e),
        gn[t]
    }, jn = function(t) {
        var e = On(t);
        return x(e, "&", "=")
    }, _n = function() {
        var t, e = s().querySelector("meta[name='gd:traceId']");
        return e && (t = e.getAttribute("content")),
        t && !qt.get("tcc.disablePageTracing") ? {
            trace_id: t,
            traced: 1
        } : {
            trace_id: ae().replace(/-/g, "")
        }
    }, Sn = "experiments";
    const Pn = new H;
    function En(t) {
        return En = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        En(t)
    }
    function kn(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, o, i, a, c = [], u = !0, f = !1;
                try {
                    if (i = (n = n.call(t)).next,
                    0 === e) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = i.call(n)).done) && (c.push(r.value),
                        c.length !== e); u = !0)
                            ;
                } catch (t) {
                    f = !0,
                    o = t
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (f)
                            throw o
                    }
                }
                return c
            }
        }(t, e) || function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return Tn(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tn(t, e) : void 0
            }
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Tn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function Cn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function In(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Cn(Object(n), !0).forEach((function(e) {
                xn(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function xn(t, e, n) {
        return (e = Rn(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function Ln(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Rn(r.key), r)
        }
    }
    function Rn(t) {
        var e = function(t) {
            if ("object" != En(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != En(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == En(e) ? e : e + ""
    }
    var Dn = function() {
        return t = function t(e) {
            var n = e.contextFnMap
              , r = e.paramsFnMap
              , o = void 0 === r ? {} : r
              , i = e.windowName;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._contextFnMap = n,
            this._paramsFnMap = o,
            this._windowName = i
        }
        ,
        (e = [{
            key: "init",
            value: function(t) {
                var e = t.context
                  , n = void 0 === e ? {} : e
                  , r = t.contextFnMap
                  , o = void 0 === r ? {} : r
                  , i = t.paramsFnMap
                  , a = void 0 === i ? {} : i;
                this.version = 0,
                this.context = n,
                this._initialContext = In({}, n),
                this._contextMap = {},
                this._contextFnMap = T(this._contextFnMap, o),
                this._paramsFnMap = T(this._paramsFnMap, a)
            }
        }, {
            key: "_buildContext",
            value: function(t) {
                var e = In({}, this._initialContext);
                return Object.entries(t).forEach((function(t) {
                    var n, r = kn(t, 2), o = r[0], i = r[1], a = o.split("."), c = e;
                    a.forEach((function(t, e) {
                        e < a.length - 1 ? (c[t] = c[t] || {},
                        c = c[t]) : n = t
                    }
                    )),
                    c[n] = i
                }
                )),
                e
            }
        }, {
            key: "updateContext",
            value: function() {
                var t = this;
                if (this._contextFnMap) {
                    var e = !1
                      , n = {}
                      , r = {};
                    Object.entries(this._paramsFnMap).forEach((function(t) {
                        var e = kn(t, 2)
                          , n = e[0]
                          , o = e[1];
                        try {
                            r[n] = o()
                        } catch (t) {
                            h("Error executing paramsFnMap for key: ".concat(n), t)
                        }
                    }
                    )),
                    Object.entries(this._contextFnMap).forEach((function(o) {
                        var i = kn(o, 2)
                          , a = i[0]
                          , c = (0,
                        i[1])(r);
                        t._contextMap[a] !== c && (e = !0),
                        void 0 !== c && (n[a] = c)
                    }
                    )),
                    e && (this.version++,
                    this.context = R(this._buildContext(n)),
                    this._contextMap = n,
                    this._windowName && j(this._windowName, this.context))
                }
            }
        }]) && Ln(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }();
    const An = new Dn({
        contextFnMap: {
            experiments: function() {
                return Pn.get("experiments")
            }
        }
    });
    var Mn = {
        "godaddy.com": 1,
        "mediatemple.net": 4500,
        "afternic.com": 497036
    }
      , Bn = [function() {
        return Kt("site", "privateLabelId")
    }
    , function() {
        return function(t, e, n) {
            for (var r = ht(n), o = r.length - 1; o >= 0; o--) {
                var i = r[o].split("=");
                if (e) {
                    if ((i[0] + "").toLowerCase() === (t + "").toLowerCase())
                        return i[1]
                } else if (i[0] === t)
                    return i[1]
            }
        }("plid")
    }
    , function() {
        var t = y().replace("dev-", "").replace("test-", "").replace("stg-", "");
        if (Mn.hasOwnProperty(t))
            return Mn[t]
    }
    ]
      , Fn = function() {
        for (var t = 0; t < Bn.length; t++) {
            var e = Bn[t]();
            if (e && B(e))
                return M(e)
        }
    };
    function qn(t) {
        return qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        qn(t)
    }
    function Un(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Nn(r.key), r)
        }
    }
    function Nn(t) {
        var e = function(t) {
            if ("object" != qn(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != qn(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == qn(e) ? e : e + ""
    }
    function Vn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Vn = function() {
            return !!t
        }
        )()
    }
    function Kn() {
        return Kn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Gn(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        Kn.apply(null, arguments)
    }
    function Gn(t) {
        return Gn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Gn(t)
    }
    function zn(t, e) {
        return zn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        zn(t, e)
    }
    var Hn = {
        "client.userAgent": function() {
            return l().userAgent
        },
        "client.sdk.name": function() {
            return Kt("client", "name")
        },
        "client.sdk.version": function() {
            return Kt("client", "version")
        },
        "client.device.viewportWidth": function(t) {
            var e = t.win
              , n = t.doc;
            return M(e.innerWidth ? e.innerWidth : n.body.offsetWidth)
        },
        "client.device.viewportHeight": function(t) {
            var e = t.win
              , n = t.doc;
            return M(e.innerHeight ? e.innerHeight : n.body.offsetHeight)
        },
        "client.device.screenResolutionWidth": function(t) {
            var e = t.win;
            return M(e.screen.width)
        },
        "client.device.screenResolutionHeight": function(t) {
            var e = t.win;
            return M(e.screen.height)
        },
        "page.id": function() {
            return Kt("page", "id")
        },
        "page.traceId": function() {
            return dn.get("trace_id")
        },
        "page.contentGroup": function() {
            return function() {
                var t = Kt("page", "contentGroup");
                if ("string" != typeof t)
                    return t;
                for (var e = t.split("/"), n = e.length - 1; n >= 0; n--)
                    e[n] = e[n].trim(),
                    e[n] || e.splice(n, 1);
                if (e.length > 0)
                    for (; e.length < 3; )
                        e.push("Other");
                return e.join(" / ")
            }()
        },
        "page.host": function() {
            return p()
        },
        "page.path": function(t) {
            return t.win.location.pathname
        },
        "page.virtualPath": function() {
            return dn.get("virtual_path")
        },
        "page.location": function() {
            return n = (t = ht()).length ? (function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e].split("=")
                      , r = !1
                      , o = n[1];
                    o !== decodeURIComponent(n[1]) && (o = decodeURIComponent(n[1]),
                    r = !0);
                    var i = mt(o);
                    r && (i = encodeURIComponent(i)),
                    t[e] = "".concat(n[0], "=").concat(i)
                }
            }(t),
            "?" + t.join("&")) : "",
            (r = f().location) && (e = "".concat(r.protocol, "//").concat(r.hostname).concat(r.pathname)),
            n && (e = "".concat(e).concat(n)),
            e;
            var t, e, n, r
        },
        "page.referrer": function(t) {
            return t.doc.referrer
        },
        "site.privateLabelId": function() {
            return Fn()
        }
    }
      , Wn = {
        win: f,
        doc: s
    };
    const $n = new (function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = Gn(e),
                function(t, e) {
                    if (e && ("object" == qn(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Vn() ? Reflect.construct(e, n || [], Gn(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && zn(t, e)
        }(e, t),
        n = e,
        r = [{
            key: "init",
            value: function(t) {
                var n, r, o, i = t.traceId, a = t.contextFnMap, c = t.paramsFnMap;
                (n = e,
                r = this,
                "function" == typeof (o = Kn(Gn(1 & 3 ? n.prototype : n), "init", r)) ? function(t) {
                    return o.apply(r, t)
                }
                : o)([{
                    context: {
                        traceId: i
                    },
                    contextFnMap: a,
                    paramsFnMap: c
                }])
            }
        }],
        r && Un(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(Dn))({
        contextFnMap: Hn,
        paramsFnMap: Wn,
        windowName: "globalContext"
    });
    var Qn = ["events"];
    function Jn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    var Zn = {}
      , Xn = ["routing", "webContext"]
      , Yn = function(t, e, n) {
        var r = e.callback;
        setTimeout((function() {
            try {
                r(n)
            } catch (e) {
                h("Failed to push datalayer event to subscriber (".concat(t, ") callback"), e)
            }
        }
        ), 0)
    }
      , tr = function(t, e, n) {
        var r = e.schemaIds
          , o = function(t, e) {
            e.events;
            var n = function(t, e) {
                if (null == t)
                    return {};
                var n, r, o = function(t, e) {
                    if (null == t)
                        return {};
                    var n = {};
                    for (var r in t)
                        if ({}.hasOwnProperty.call(t, r)) {
                            if (e.includes(r))
                                continue;
                            n[r] = t[r]
                        }
                    return n
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        e.includes(n) || {}.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }(e, Qn)
              , r = t.fields || [];
            return Xn.forEach((function(t) {
                r.includes(t) || delete n[t]
            }
            )),
            n
        }(e, n);
        e.batch ? (o.events = r ? n.events.filter((function(t) {
            return r.includes(t.schemaId)
        }
        )) : n.events,
        o.events.length > 0 && Yn(t, e, o)) : n.events.forEach((function(n) {
            r && !r.includes(n.schemaId) || Yn(t, e, T(o, {
                event: n
            }))
        }
        ))
    }
      , er = function(t, e) {
        var n = or();
        n.length >= nr && g("".concat(t, " subscribed to SCC after the eventQueue was full. Some events may have been lost.")),
        n.forEach((function(n) {
            return tr(t, e, n)
        }
        )),
        Zn[t] = e
    }
      , nr = 2e3
      , rr = []
      , or = function() {
        return [].concat(rr)
    };
    function ir(t) {
        return ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ir(t)
    }
    function ar(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, cr(r.key), r)
        }
    }
    function cr(t) {
        var e = function(t) {
            if ("object" != ir(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ir(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == ir(e) ? e : e + ""
    }
    var ur = function() {
        return t = function t(e, n, r, o, i) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.input = e,
            this.interfaceType = n,
            this.interfaceVersion = r,
            this.internal = o,
            this.targets = i
        }
        ,
        (e = [{
            key: "preProcess",
            value: function(t) {}
        }, {
            key: "process",
            value: function(t) {}
        }]) && ar(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }();
    function fr(t) {
        return fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        fr(t)
    }
    function sr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, lr(r.key), r)
        }
    }
    function lr(t) {
        var e = function(t) {
            if ("object" != fr(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != fr(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == fr(e) ? e : e + ""
    }
    function pr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (pr = function() {
            return !!t
        }
        )()
    }
    function yr(t) {
        return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        yr(t)
    }
    function vr(t, e) {
        return vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        vr(t, e)
    }
    var br = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = yr(e),
                function(t, e) {
                    if (e && ("object" == fr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, pr() ? Reflect.construct(e, n || [], yr(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && vr(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "process",
            value: function(t) {
                this._pushToQueue(t)
            }
        }, {
            key: "_pushToQueue",
            value: function(t) {
                if (!this.internal.hasFired) {
                    var e = this._getEvents(t);
                    if (e && 0 !== e.length) {
                        for (var n = F(), r = 0; r < e.length; r++)
                            e[r].data = T({
                                eventCreationTimestamp: n
                            }, e[r].data);
                        var o = this._getGlobalSchemaId()
                          , i = this._getBusinessContext();
                        $n.updateContext(),
                        An.updateContext(),
                        a = {
                            schemaId: o,
                            global: $n.context,
                            businessContext: i,
                            events: e,
                            webContext: T(An.context, this._getWebContext(t)),
                            routing: {
                                eventBusApiKey: this._getApiKey(),
                                globalContextVersion: $n.version,
                                hasConversion: this._hasConversion(),
                                targets: this.targets
                            }
                        },
                        R(a),
                        rr.push(a),
                        function(t) {
                            for (var e = 0, n = Object.entries(Zn); e < n.length; e++) {
                                var r = (c = 2,
                                function(t) {
                                    if (Array.isArray(t))
                                        return t
                                }(a = n[e]) || function(t, e) {
                                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != n) {
                                        var r, o, i, a, c = [], u = !0, f = !1;
                                        try {
                                            if (i = (n = n.call(t)).next,
                                            0 === e) {
                                                if (Object(n) !== n)
                                                    return;
                                                u = !1
                                            } else
                                                for (; !(u = (r = i.call(n)).done) && (c.push(r.value),
                                                c.length !== e); u = !0)
                                                    ;
                                        } catch (t) {
                                            f = !0,
                                            o = t
                                        } finally {
                                            try {
                                                if (!u && null != n.return && (a = n.return(),
                                                Object(a) !== a))
                                                    return
                                            } finally {
                                                if (f)
                                                    throw o
                                            }
                                        }
                                        return c
                                    }
                                }(a, c) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t)
                                            return Jn(t, e);
                                        var n = {}.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name),
                                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Jn(t, e) : void 0
                                    }
                                }(a, c) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())
                                  , o = r[0]
                                  , i = r[1];
                                try {
                                    tr(o, i, t)
                                } catch (t) {
                                    h("Failed to push datalayer event batch to subscriber (".concat(o, ")"), t)
                                }
                            }
                            var a, c
                        }(a),
                        rr.length > nr && rr.shift(),
                        this.internal.hasFired = !0
                    }
                }
                var a
            }
        }, {
            key: "_getSchemaId",
            value: function() {}
        }, {
            key: "_getEvents",
            value: function(t) {
                return [{
                    schemaId: this._getSchemaId(),
                    data: t
                }]
            }
        }, {
            key: "_getGlobalSchemaId",
            value: function() {
                return Fn() ? "urn:shared:user:events:/v2" : "urn:shared:user:events:/v1"
            }
        }, {
            key: "_getBusinessContext",
            value: function() {}
        }, {
            key: "_getApiKey",
            value: function() {
                return Kt("eventBus", "sccApiKey")
            }
        }, {
            key: "_hasConversion",
            value: function() {}
        }, {
            key: "_getWebContext",
            value: function(t) {}
        }]) && sr(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(ur);
    function dr(t) {
        return dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        dr(t)
    }
    function mr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, hr(r.key), r)
        }
    }
    function hr(t) {
        var e = function(t) {
            if ("object" != dr(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != dr(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == dr(e) ? e : e + ""
    }
    function gr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (gr = function() {
            return !!t
        }
        )()
    }
    function wr(t) {
        return wr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        wr(t)
    }
    function Or(t, e) {
        return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Or(t, e)
    }
    const jr = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = wr(e),
                function(t, e) {
                    if (e && ("object" == dr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, gr() ? Reflect.construct(e, n || [], wr(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Or(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_getBusinessContext",
            value: function() {
                return this.input.businessContext
            }
        }, {
            key: "_getEvents",
            value: function() {
                return this.input.events
            }
        }, {
            key: "_getApiKey",
            value: function() {
                return this.input.apiKey
            }
        }, {
            key: "_getGlobalSchemaId",
            value: function() {
                return this.input.schemaId
            }
        }]) && mr(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(br);
    var _r = "urn:shared:user:event:/data-platform/signals/click/v1"
      , Sr = "urn:shared:user:event:/data-platform/signals/impression/v1"
      , Pr = "urn:shared:user:event:/data-platform/signals/element-action/v1"
      , Er = "urn:shared:user:event:/data-platform/signals/traffic-event/v1"
      , kr = "urn:shared:user:event:/data-platform/signals/page-view/v1"
      , Tr = "urn:shared:user:event:/data-platform/signals/ecommerce/add-to-cart/v1"
      , Cr = "urn:shared:user:event:/data-platform/signals/ecommerce/checkout-progress/v1"
      , Ir = "urn:shared:user:event:/data-platform/signals/ecommerce/remove-from-cart/v1"
      , xr = "urn:shared:user:event:/data-platform/signals/ecommerce/transaction/v2"
      , Lr = "urn:shared:user:event:/data-platform/signals/experiment-assignment/v1"
      , Rr = "urn:shared:user:event:/rigor/page-navigation/v1"
      , Dr = "urn:shared:user:event:/rigor/page-navigation-delayed/v1"
      , Ar = "urn:shared:user:event:/data-platform/signals/conversion/v1"
      , Mr = "urn:shared:user:event:/appconfig/id-percentage-evaluation/v1"
      , Br = /[^a-z0-9\_\/\.\-]/g
      , Fr = /^([a-z0-9_\-]+)\.([a-z0-9_\-]+)\.(([a-z0-9_\/\-]+)\.)?([a-z0-9_\/\-]+)\.([a-z0-9_\-]+)\.([a-z0-9_\-]+)$/g
      , qr = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , e = t.eid
          , n = t.customProperties
          , r = t.eventCategory;
        return T({
            pageLevelProperties: T(Qt),
            identityRealm: Kt("identity", "realm")
        }, e && {
            eid: e
        }, n && {
            customProperties: n
        }, r && {
            eventCategory: r
        })
    }
      , Ur = function(t, e, n, r) {
        var o = {
            traffic: qr({
                eid: e,
                customProperties: r
            }),
            producerEventId: t
        };
        if (e) {
            var i = function(t) {
                return t.split(".")
            }(e)
              , a = function(t) {
                return t[t.length - 1]
            }(i);
            (function(t) {
                return !!(t.match(Fr) && t.length <= 500)
            }
            )(e) && function(t, e, n) {
                return e === n && t.length >= 5 && t.length <= 6
            }(i, a, n) && (o.element = function(t, e) {
                var n = 6 === t.length ? 1 : 0
                  , r = {
                    area: t[0],
                    product: t[1],
                    section: t[2 + n],
                    widget: t[3 + n]
                };
                return ["impression", "click"].includes(e) || (r.action = e),
                r
            }(i, a))
        }
        return o
    }
      , Nr = function(t, e, n, r) {
        null != r && null != n && 0 !== r && 0 !== n && n > r && (t[e] = Math.round(n - r))
    }
      , Vr = function(t, e, n, r) {
        var o = Y(e);
        !function(t, e) {
            Nr(t, "pageLoadTime", e.loadEventStart, e.navigationStart),
            Nr(t, "domContentLoadedTime", e.domContentLoadedEventStart, e.navigationStart),
            Nr(t, "domInteractiveTime", e.domInteractive, e.navigationStart),
            Nr(t, "pageDownloadTime", e.responseEnd, e.responseStart),
            Nr(t, "domainLookupTime", e.domainLookupEnd, e.domainLookupStart),
            Nr(t, "serverResponseTime", e.responseStart, e.requestStart),
            Nr(t, "serverConnectionTime", e.connectEnd, e.connectStart),
            Nr(t, "redirectionTime", e.fetchStart, e.navigationStart)
        }(o, e);
        var i = {
            navigationType: e.navigationType,
            timing: {
                navigation: o
            },
            traffic: qr({
                customProperties: n
            }),
            producerEventId: t,
            contentLoadType: r
        };
        return "hard" === r && (i.response = tt(e),
        i.timing.marks = e.marks,
        i.timing.measures = e.measures,
        i.timing.paint = {
            firstPaint: e.fp,
            firstContentfulPaint: e.fcp,
            largestContentfulPaint: e.lcp
        }),
        i
    }
      , Kr = function(t, e, n) {
        return {
            timing: {
                paint: {
                    largestContentfulPaint: e.LCP
                },
                vitals: {
                    cumulativeLayoutShift: e.CLS,
                    firstInputDelay: e.FID,
                    timeToInteractive: e.timeToInteractive,
                    interactionToNextPaint: e.INP
                }
            },
            traffic: qr({
                customProperties: n
            }),
            producerEventId: t
        }
    };
    function Gr(t) {
        return Gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Gr(t)
    }
    function zr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Hr(r.key), r)
        }
    }
    function Hr(t) {
        var e = function(t) {
            if ("object" != Gr(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Gr(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == Gr(e) ? e : e + ""
    }
    function Wr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Wr = function() {
            return !!t
        }
        )()
    }
    function $r(t) {
        return $r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        $r(t)
    }
    function Qr(t, e) {
        return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Qr(t, e)
    }
    const Jr = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = $r(e),
                function(t, e) {
                    if (e && ("object" == Gr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Wr() ? Reflect.construct(e, n || [], $r(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Qr(t, e)
        }(e, t),
        n = e,
        r = [{
            key: "_getSchemaId",
            value: function() {
                return Pr
            }
        }, {
            key: "_getActionType",
            value: function(t) {
                return t.element.action
            }
        }, {
            key: "_getEvents",
            value: function(t, e) {
                var n = t.traffic || {};
                return n.eid = this._buildLegacyEid(this._getActionType(t), t.element, n.eid),
                [{
                    schemaId: this._getSchemaId(),
                    data: T(t, {
                        producerEventId: e || this.internal.eventId,
                        element: t.element,
                        traffic: qr(n)
                    })
                }]
            }
        }, {
            key: "_buildLegacyEid",
            value: function(t, e) {
                return arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "".concat(e.area, ".").concat(e.product, ".").concat(e.section, ".").concat(e.widget, ".").concat(t)
            }
        }, {
            key: "_transformLegacyPromo",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = n.eid
                  , o = n.customProperties
                  , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return {
                    id: i.id,
                    name: i.name,
                    creative_name: i.creative,
                    creative_slot: i.position,
                    type: t,
                    properties: o,
                    eid: this._buildLegacyEid(t, e, r)
                }
            }
        }, {
            key: "_isPromo",
            value: function(t) {
                return t.promotion && Object.keys(t.promotion).length > 0
            }
        }],
        r && zr(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(br);
    function Zr(t) {
        return Zr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Zr(t)
    }
    function Xr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Yr(r.key), r)
        }
    }
    function Yr(t) {
        var e = function(t) {
            if ("object" != Zr(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Zr(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == Zr(e) ? e : e + ""
    }
    function to() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (to = function() {
            return !!t
        }
        )()
    }
    function eo(t) {
        return eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        eo(t)
    }
    function no(t, e) {
        return no = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        no(t, e)
    }
    const ro = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = eo(e),
                function(t, e) {
                    if (e && ("object" == Zr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, to() ? Reflect.construct(e, n || [], eo(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && no(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_getSchemaId",
            value: function() {
                return _r
            }
        }, {
            key: "_getActionType",
            value: function() {
                return "click"
            }
        }]) && Xr(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(Jr);
    function oo(t) {
        return oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        oo(t)
    }
    function io(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function ao(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, co(r.key), r)
        }
    }
    function co(t) {
        var e = function(t) {
            if ("object" != oo(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != oo(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == oo(e) ? e : e + ""
    }
    function uo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (uo = function() {
            return !!t
        }
        )()
    }
    function fo() {
        return fo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = so(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        fo.apply(null, arguments)
    }
    function so(t) {
        return so = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        so(t)
    }
    function lo(t, e) {
        return lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        lo(t, e)
    }
    const po = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = so(e),
                function(t, e) {
                    if (e && ("object" == oo(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, uo() ? Reflect.construct(e, n || [], so(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && lo(t, e)
        }(e, t),
        n = e,
        r = [{
            key: "_getSchemaId",
            value: function() {
                return Sr
            }
        }, {
            key: "_getActionType",
            value: function() {
                return "impression"
            }
        }, {
            key: "_getEvents",
            value: function(t) {
                var n = this
                  , r = [];
                return t.impressions.forEach((function(t) {
                    var o, i, a;
                    r.push.apply(r, function(t) {
                        return function(t) {
                            if (Array.isArray(t))
                                return io(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                                return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t)
                                    return io(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? io(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((o = e,
                    i = n,
                    "function" == typeof (a = fo(so(1 & 3 ? o.prototype : o), "_getEvents", i)) ? function(t) {
                        return a.apply(i, t)
                    }
                    : a)([t, ae()])))
                }
                )),
                r
            }
        }],
        r && ao(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(Jr);
    function yo(t) {
        return yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        yo(t)
    }
    function vo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, bo(r.key), r)
        }
    }
    function bo(t) {
        var e = function(t) {
            if ("object" != yo(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != yo(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == yo(e) ? e : e + ""
    }
    function mo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (mo = function() {
            return !!t
        }
        )()
    }
    function ho(t) {
        return ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ho(t)
    }
    function go(t, e) {
        return go = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        go(t, e)
    }
    var wo = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = ho(e),
                function(t, e) {
                    if (e && ("object" == yo(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, mo() ? Reflect.construct(e, n || [], ho(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && go(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "process",
            value: function(t) {
                C(t.config),
                k(t.config, (function(e, n) {
                    if (!t.overwrite) {
                        var r = qt.get(e);
                        q(r) ? n = [].concat(r, n) : "object" === yo(r) && (n = T(r, n))
                    }
                    qt.set(e, n)
                }
                ))
            }
        }]) && vo(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(ur);
    function Oo(t) {
        return Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Oo(t)
    }
    function jo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, _o(r.key), r)
        }
    }
    function _o(t) {
        var e = function(t) {
            if ("object" != Oo(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Oo(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == Oo(e) ? e : e + ""
    }
    function So() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (So = function() {
            return !!t
        }
        )()
    }
    function Po(t) {
        return Po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Po(t)
    }
    function Eo(t, e) {
        return Eo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Eo(t, e)
    }
    var ko = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = Po(e),
                function(t, e) {
                    if (e && ("object" == Oo(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, So() ? Reflect.construct(e, n || [], Po(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Eo(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "process",
            value: function(t) {
                er(t.name, {
                    callback: t.callback,
                    schemaIds: t.schemaIds,
                    batch: t.batch,
                    fields: t.fields
                })
            }
        }]) && jo(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(ur);
    function To(t) {
        return To = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        To(t)
    }
    function Co(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Io(r.key), r)
        }
    }
    function Io(t) {
        var e = function(t) {
            if ("object" != To(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != To(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == To(e) ? e : e + ""
    }
    function xo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (xo = function() {
            return !!t
        }
        )()
    }
    function Lo(t, e, n, r) {
        var o = Ro(Do(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o ? function(t) {
            return o.apply(n, t)
        }
        : o
    }
    function Ro() {
        return Ro = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = function(t, e) {
                for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Do(t)); )
                    ;
                return t
            }(t, e);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, e);
                return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
            }
        }
        ,
        Ro.apply(null, arguments)
    }
    function Do(t) {
        return Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Do(t)
    }
    function Ao(t, e) {
        return Ao = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Ao(t, e)
    }
    var Mo, Bo, Fo = function(t) {
        var e = {};
        if (q(t))
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                q(r) && (e[r[0]] = I(r))
            }
        return e
    }, qo = function(t) {
        return x(t, "^", ",")
    }, Uo = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = Do(e),
                function(t, e) {
                    if (e && ("object" == To(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, xo() ? Reflect.construct(e, n || [], Do(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Ao(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "setTDataString",
            value: function(t) {
                Lo(e, "merge", this, 3)([qo(t)])
            }
        }, {
            key: "stringify",
            value: function() {
                var t, e = C(this.getProperties());
                (t = e) && k(t, (function(e, n) {
                    var r = (e + "").split(".").join("_");
                    delete t[e],
                    t[r] = n
                }
                ));
                var n = L(e, "^", ",");
                if (n)
                    return n
            }
        }, {
            key: "set",
            value: function(t, n) {
                "object" !== To(n) && "[object Function]" !== {}.toString.call(n) ? Lo(e, "set", this, 3)([t, n]) : h("Invalid key/value pair found in Traffic's custom properties (tData). Objects, arrays, and functions are not supported.\n\nKey: '".concat(t, "' Value: '").concat(n, "' Type: '").concat(To(n), "'."))
            }
        }]) && Co(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(H), No = function(t) {
        var e = new Uo;
        return e.merge(t.custom_properties),
        t.traffic && e.merge(t.traffic.customProperties),
        e
    }, Vo = function(t) {
        var e = t.traffic;
        return e && function(t, e) {
            var n = t.eid || e && e();
            if (!n)
                throw "";
            if (t.eid = n.toLowerCase(),
            function(t) {
                return t.match(Br)
            }(t.eid))
                throw t.eid,
                ""
        }(e),
        t
    }, Ko = function() {
        return Math.floor(2147483647 * Math.random())
    };
    function Go(t) {
        return Go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Go(t)
    }
    function zo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Ho(r.key), r)
        }
    }
    function Ho(t) {
        var e = function(t) {
            if ("object" != Go(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Go(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == Go(e) ? e : e + ""
    }
    function Wo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Wo = function() {
            return !!t
        }
        )()
    }
    function $o(t) {
        return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        $o(t)
    }
    function Qo(t, e) {
        return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Qo(t, e)
    }
    var Jo = 0
      , Zo = function() {
        var t = qt.get("components");
        if (Bo !== t)
            return Bo = t
    }
      , Xo = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = $o(e),
                function(t, e) {
                    if (e && ("object" == Go(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Wo() ? Reflect.construct(e, n || [], $o(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Qo(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_getWebContext",
            value: function() {
                return {
                    pageViewCount: Jo
                }
            }
        }, {
            key: "_getEvents",
            value: function(t) {
                var e = No(t);
                return [{
                    schemaId: kr,
                    data: {
                        forensics: {
                            traceIdAdopted: A(dn.get("traced")),
                            components: Zo()
                        },
                        traffic: qr({
                            customProperties: e.getProperties()
                        }),
                        producerEventId: this.internal.eventId
                    }
                }]
            }
        }, {
            key: "preProcess",
            value: function(t) {
                var e = t.path || t.virtual_path || t.virtualPath
                  , n = void 0 !== e;
                if (n || (e = f().location.pathname),
                Mo === e)
                    throw "cmd: LogPageRequest duplicate page request detected, ignoring duplicate path";
                Mo = e,
                dn.set("corrid", Ko()),
                n && (Yt(),
                dn.set("virtual_path", e)),
                mn.incrementPageCount(),
                Jo += 1,
                dn.get("trace_id") || dn.merge(_n())
            }
        }]) && zo(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(br)
      , Yo = function(t) {
        return [(new ze).map("element", [new Ge("area").required().pattern(_e), new Ge("product").required().pattern(_e), new Ge("section").required().pattern(Se), new Ge("widget").required().pattern(_e)]).required().extend(t)]
    }
      , ti = function(t) {
        return [(new ze).map("traffic", [new Ke("customProperties")]).extend(t)]
    }
      , ei = function() {
        return [(new ze).substitute(ti([new Ke("eid")]))]
    }
      , ni = function() {
        return [(new ze).substitute(Yo()), (new ze).substitute(ei()), (new ze).map("promotion", [new Ke("id").required(), new Ke("name"), new Ke("creative"), new Ke("position")]), (new ze).map("product", [new Ke("actionCode").required().allowedValues(["add_to_cart", "product_detail"]), (new ze).map("basket", [new Ke("couponCode"), new Ke("currencyCode"), new Ke("itemTrackingCode")]), (new He).map("products", [new Ke("productId").required(), new Ke("productName"), new Ke("productInstanceId"), new Ke("priceUsd"), new Ke("quantity").required(), new Ke("couponCode"), new Ke("itemTrackingCode")]), (new He).map("packages", [new Ke("id"), new Ke("priceUsd"), new Ke("quantity"), new Ke("category")])])]
    };
    const ri = {
        add_click: {
            v1: {
                handler: ro,
                properties: [(new ze).substitute(ni()).transform(Vo)]
            }
        },
        add_element_action: {
            v1: {
                handler: Jr,
                properties: [(new ze).substitute([(new ze).substitute(Yo([new Ke("action").required().allowedValues(["blur", "drag", "focus", "hover", "load", "scroll"])])), (new ze).substitute(ei())]).transform(Vo)]
            }
        },
        add_impressions: {
            v1: {
                handler: po,
                properties: [(new He).map("impressions", [(new ze).substitute(ni()).transform(Vo)]).withMinElements(1)]
            }
        },
        add_virtual_page_view: {
            v1: {
                handler: Xo,
                properties: [new Ke("virtualPath").required(), (new ze).substitute(ti())]
            }
        },
        add_micro_events: {
            v1: {
                handler: jr,
                properties: [new Ke("apiKey").required(), new Ke("schemaId").required(), (new He).map("events", [new Ke("schemaId").required(), new Ke("data").required()]).withMinElements(1), (new ze).map("businessContext", [new Ke("schemaId").required(), new Ke("data").required()])]
            }
        },
        subscribe: {
            v1: {
                handler: ko,
                properties: [new Ke("name").required(), new Ke("callback").required(), new Ke("schemaIds"), new Ke("fields"), new Ke("batch")]
            }
        },
        set_config: {
            v1: {
                handler: wo,
                properties: [(new ze).map("config", [(new He).map("components", [new Ke("name").required(), new Ke("version").required().outputType(je)]), (new ze).map("cookie", [new Ke("sameSite")]), (new ze).map("page", [new Ke("spa"), new Ke("id"), new Ke("contentGroup"), new Ke("referrerExclusion")]), (new ze).map("identity", [new Ke("realm")]), (new ze).map("site", [new Ke("privateLabelId")]), (new ze).map("timing", [new Ke("auto")])]).required(), new Ke("overwrite")]
            }
        }
    };
    function oi(t) {
        return oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        oi(t)
    }
    function ii(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function ai(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ii(Object(n), !0).forEach((function(e) {
                ci(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ii(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function ci(t, e, n) {
        return (e = function(t) {
            var e = function(t) {
                if ("object" != oi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != oi(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == oi(e) ? e : e + ""
        }(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    var ui = function(t, e) {
        var n = Pn.get(Sn) || {};
        Pn.set(Sn, ai(ai({}, n), {}, ci({}, t, e)))
    };
    function fi(t) {
        return fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        fi(t)
    }
    function si(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function li(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? si(Object(n), !0).forEach((function(e) {
                pi(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function pi(t, e, n) {
        return (e = function(t) {
            var e = function(t) {
                if ("object" != fi(t) || !t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != fi(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == fi(e) ? e : e + ""
        }(e))in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    er("scc-experiment-listener", {
        callback: function(t) {
            var e = t.event
              , n = e.data;
            if (e.schemaId === Lr)
                ui(n.experimentId, n.variantId);
            else if (e.schemaId === Mr && "hivemind" === n.fqAppId) {
                var r = JSON.parse(n.settingValue);
                ui(n.setting, r.cohortId)
            }
        },
        schemaIds: [Lr, Mr]
    });
    var yi = !1
      , vi = function(t) {
        var e = t.trfqMethods
          , n = t.legacyName
          , r = t.dataLayerConfig
          , o = t.globalContextConfig
          , i = t.hooks
          , a = i.onLoad
          , c = i.beforeLoad
          , u = i.beforeEvent
          , l = i.getEnvironment;
        if (!yi) {
            yi = !0,
            Gt("build", "env", l && l() || Kt("build", "env")),
            dn.merge(_n()),
            $n.init(li({
                traceId: dn.get("trace_id")
            }, o)),
            Oe(ri),
            function() {
                var t = f();
                if (t.PerformanceObserver) {
                    var e = new t.PerformanceObserver((function(t) {
                        var e = t.getEntries()
                          , n = e[e.length - 1];
                        n.renderTime && ($.lcp = Math.round(n.startTime))
                    }
                    ));
                    try {
                        e.observe({
                            type: "largest-contentful-paint",
                            buffered: !0
                        })
                    } catch (t) {}
                }
            }();
            var p = new ft("complete" === s().readyState,(function(t) {
                f().addEventListener("load", t)
            }
            ));
            mn.getSession(),
            c && c();
            var y = new an(li({
                autoPageViewDisabled: qt.get("".concat(n, ".manualPageRequest")),
                beforeEvent: u
            }, r));
            p.registerOnLoadFn((function() {
                a && a(),
                y.start(),
                new bn(e),
                Kt("timing", "auto") && function(t, e, n) {
                    if (!ot)
                        if (ot = !0,
                        rt())
                            nt(t, et(t, e), n);
                        else
                            var r = setInterval((function() {
                                rt() && (clearInterval(r),
                                nt(t, et(t, e), n))
                            }
                            ), 250)
                }(n, "auto"),
                Kt("eventBus", "enabled") && (j(Tt, []),
                kt = new Et(Ct),
                f()._signalsDataLayer = f()._signalsDataLayer || [],
                f()._signalsDataLayer.push({
                    schema: "subscribe",
                    data: {
                        name: "scc-plugin-sink-event-bus",
                        batch: !0,
                        fields: ["routing"],
                        callback: function(t) {
                            var e = t.schemaId
                              , n = t.global
                              , r = t.businessContext
                              , o = t.events
                              , i = t.routing
                              , a = i.eventBusApiKey
                              , c = i.hasConversion
                              , u = i.globalContextVersion;
                            kt.pushEvent({
                                apiKey: a,
                                businessContext: r,
                                contextVersion: u,
                                schemaId: e,
                                global: n,
                                events: o
                            }, c)
                        }
                    }
                }))
            }
            )),
            m("SCC STARTED", qt.getProperties())
        }
    };
    function bi(t) {
        return bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        bi(t)
    }
    function di(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, mi(r.key), r)
        }
    }
    function mi(t) {
        var e = function(t) {
            if ("object" != bi(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != bi(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == bi(e) ? e : e + ""
    }
    function hi(t) {
        return hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        hi(t)
    }
    function gi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, _i(r.key), r)
        }
    }
    function wi() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (wi = function() {
            return !!t
        }
        )()
    }
    function Oi(t) {
        return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Oi(t)
    }
    function ji(t, e) {
        return ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        ji(t, e)
    }
    function _i(t) {
        var e = function(t) {
            if ("object" != hi(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != hi(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == hi(e) ? e : e + ""
    }
    var Si = "_tccl_visitor"
      , Pi = "_tccl_visit"
      , Ei = function(t) {
        function e() {
            var t, n, r, o;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                a[c] = arguments[c];
            return t = function(t, e, n) {
                return e = Oi(e),
                function(t, e) {
                    if (e && ("object" == hi(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, wi() ? Reflect.construct(e, n || [], Oi(t).constructor) : e.apply(t, n))
            }(this, e, [].concat(a)),
            n = t,
            o = "_scc_session",
            (r = _i(r = "_sessionCookieName"))in n ? Object.defineProperty(n, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = o,
            t
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && ji(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "getSession",
            value: function() {
                var t = On(Si)
                  , e = On(Pi);
                t || e ? (t || (t = ae()),
                e || (e = ae())) : t = e = ae(),
                wn(Si, t, 525600, "/"),
                wn(Pi, e, 30, "/");
                var n = jn(this._sessionCookieName);
                return {
                    visitorGuid: t,
                    visitGuid: e,
                    pageCount: M(n.pc) || 0
                }
            }
        }]) && gi(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(function() {
        return t = function t() {
            var e, n, r;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            e = this,
            r = void 0,
            (n = mi(n = "_sessionCookieName"))in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = r
        }
        ,
        (e = [{
            key: "getSession",
            value: function() {}
        }, {
            key: "saveSessionCookie",
            value: function(t) {
                var e = L(t, "&", "=");
                wn(this._sessionCookieName, e, 20, "/")
            }
        }, {
            key: "incrementPageCount",
            value: function() {
                var t = jn(this._sessionCookieName)
                  , e = M(t.pc) || 0;
                t.pc = e + 1,
                t.C_TOUCH = F(),
                this.saveSessionCookie(t)
            }
        }]) && di(t.prototype, e),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t;
        var t, e
    }());
    function ki(t) {
        return ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ki(t)
    }
    function Ti(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Ci(r.key), r)
        }
    }
    function Ci(t) {
        var e = function(t) {
            if ("object" != ki(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ki(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == ki(e) ? e : e + ""
    }
    function Ii() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Ii = function() {
            return !!t
        }
        )()
    }
    function xi(t) {
        return xi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        xi(t)
    }
    function Li(t, e) {
        return Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        Li(t, e)
    }
    var Ri = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = xi(e),
                function(t, e) {
                    if (e && ("object" == ki(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Ii() ? Reflect.construct(e, n || [], xi(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && Li(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_getEvents",
            value: function(t) {
                var e = t.eid
                  , n = t.type.toLowerCase()
                  , r = function(t) {
                    return "click" === t ? _r : "impression" === t ? Sr : ["blur", "drag", "focus", "hover", "load", "scroll"].includes(t) ? Pr : Er
                }(n)
                  , o = No(t).getProperties();
                return [{
                    schemaId: r,
                    data: r !== Er ? Ur(this.internal.eventId, e, n, o) : {
                        traffic: qr({
                            customProperties: o,
                            eid: e,
                            eventCategory: n
                        }),
                        producerEventId: this.internal.eventId
                    }
                }]
            }
        }]) && Ti(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(br);
    function Di(t) {
        return Di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        Di(t)
    }
    function Ai(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, Mi(r.key), r)
        }
    }
    function Mi(t) {
        var e = function(t) {
            if ("object" != Di(t) || !t)
                return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Di(n))
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == Di(e) ? e : e + ""
    }
    function Bi() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (t) {}
        return (Bi = function() {
            return !!t
        }
        )()
    }
    function Fi(t) {
        return Fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Fi(t)
    }
    function qi(t, e) {
        return qi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        qi(t, e)
    }
    var Ui = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e, n) {
                return e = Fi(e),
                function(t, e) {
                    if (e && ("object" == Di(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, Bi() ? Reflect.construct(e, n || [], Fi(t).constructor) : e.apply(t, n))
            }(this, e, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && qi(t, e)
        }(e, t),
        n = e,
        (r = [{
            key: "_getApiKey",
            value: function() {
                return bt("eventBus", "rigorApiKey")
            }
        }, {
            key: "_getEvents",
            value: function(t) {
                var e = t.is_hard_navigation ? "hard" : "soft"
                  , n = t.timing_object;
                if (n) {
                    if (n.navigationStart)
                        return [{
                            schemaId: Rr,
                            data: Vr(this.internal.eventId, n, t.custom_properties, e)
                        }];
                    if (n.timeToInteractive)
                        return [{
                            schemaId: Dr,
                            data: Kr(this.internal.eventId, n, t.custom_properties)
                        }]
                }
            }
        }]) && Ai(n.prototype, r),
        Object.defineProperty(n, "prototype", {
            writable: !1
        }),
        n;
        var n, r
    }(br)
      , Ni = function() {
        return [new Ke("custom_properties").optional()]
    };
    const Vi = {
        add_event: {
            v1: {
                handler: Ri,
                properties: [new Ke("type").required(), (new ze).substitute([new Ke("eid").optional()]), (new ze).substitute(Ni())]
            }
        },
        add_page_view: {
            v1: {
                handler: Xo,
                properties: [new Ke("path").optional(), (new ze).substitute(Ni())]
            }
        },
        add_perf: {
            v1: {
                handler: Ui,
                properties: [new Ke("timing_object").required(), new Ke("is_hard_navigation").optional(), (new ze).substitute(Ni())]
            }
        }
    }
      , Ki = function(t, e, n) {
        f()._expDataLayer.push({
            schema: "add_event",
            version: "v1",
            data: {
                type: t,
                eid: e,
                custom_properties: Fo(n)
            }
        })
    }
      , Gi = function(t, e) {
        f()._expDataLayer.push({
            schema: "add_perf",
            version: "v1",
            data: {
                timing_object: t,
                custom_properties: Fo(e)
            }
        })
    };
    var zi = "traffic.tcc.instrumentation.navigation.timing"
      , Hi = "click"
      , Wi = "impression"
      , $i = function(t, e) {
        var n = e.data
          , r = n.traffic.eid
          , o = n.element
          , i = void 0 === o ? {} : o
          , a = i.area
          , c = i.product
          , u = i.section
          , f = i.widget;
        return null != r ? r : "".concat(a, ".").concat(c, ".").concat(u, ".").concat(f, ".").concat(t)
    }
      , Qi = function(t) {
        var e = t.data
          , n = e.element
          , r = e.traffic.eid;
        return n ? n.action : r.split(".").pop()
    }
      , Ji = function(t) {
        var e, n;
        switch (t.schemaId) {
        case xr:
            return function(t, e, n) {
                var r = n.newCustomerFlag
                  , o = n.newVsRenewal;
                t = t || "modular-cart";
                var i = e ? "payment-pending_" : "payment-processed_";
                return "ecomm.payments.transaction.".concat(r ? "new-customer_" : "existing-customer_").concat(i).concat(o, ".").concat(t, ".success")
            }(null === (e = t.data.cart) || void 0 === e ? void 0 : e.type, null === (n = t.data.payment) || void 0 === n ? void 0 : n.pendingFlag, t.data.order);
        case Tr:
            return "gpd.exp.tcc.add-to-cart.success";
        case Ir:
            return "gpd.exp.tcc.remove-from-cart.success";
        case Cr:
            return 1 === t.data.checkout.step ? "gpd.exp.tcc.begin-checkout.success" : "gpd.exp.tcc.checkout-progress.success";
        case Lr:
            return "traffic.tcc.instrumentation.experiment.add_experiment";
        case Ar:
            return "".concat("tcc.conversion.").concat(t.data.conversion.area, ".").concat(t.data.conversion.product, ".").concat(t.data.conversion.revenue, ".").concat(t.data.conversion.action);
        case Er:
            return t.data.traffic.eid;
        case Pr:
            return $i(Qi(t), t);
        case _r:
            return $i(Hi, t);
        case Sr:
            return $i(Wi, t);
        case Rr:
        case Dr:
            return zi
        }
    }
      , Zi = function(t) {
        switch (t.schemaId) {
        case Rr:
        case Dr:
            return "pageperf";
        case Er:
            return t.data.traffic.eventCategory;
        case Ar:
            return "genConv";
        case xr:
        case Tr:
        case Ir:
        case Cr:
            return "ecommerce";
        case Lr:
            return "experiment";
        case Pr:
            return Qi(t);
        case _r:
            return Hi;
        case Sr:
            return Wi
        }
    }
      , Xi = "perf"
      , Yi = "pageevent"
      , ta = function(t) {
        var e = t.schemaId
          , n = t.data;
        switch (e) {
        case kr:
            return "pageview";
        case Rr:
        case Dr:
            return Xi;
        case Er:
            return n.traffic.eid === zi ? Xi : Yi;
        default:
            return Yi
        }
    };
    function ea(t) {
        return ea = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        ea(t)
    }
    var na, ra = "_trfqSendLog", oa = [kr, _r, Sr, Er, Pr, Dr, Rr], ia = function(t) {
        var e = t.events
          , n = t.global
          , r = t.webContext
          , o = function(t) {
            var e, n, r = t.traceId, o = t.context, i = t.client, a = t.page;
            return {
                dh: a.host,
                dr: (n = a.referrer,
                void 0 !== n ? n.substring(0, 1e3) : void 0),
                ua: i.userAgent,
                client_name: i.sdk.name,
                cv: i.sdk.version,
                vg: o.sessionId,
                vtg: o.visitorId,
                dp: (e = a.path,
                e ? (/\/$/.test(e) && (e = e.substring(0, e.length - 1)),
                "/" !== e[0] && (e = "/".concat(e)),
                e) : "notspecified"),
                trace_id: r
            }
        }(n);
        e.forEach((function(t) {
            var e = t.schemaId
              , i = t.data
              , a = T(o, function(t) {
                var e = t.schemaId
                  , n = t.webContext
                  , r = t.data
                  , o = r.eventCreationTimestamp
                  , i = r.producerEventId
                  , a = r.traffic
                  , c = a.customProperties
                  , u = a.pageLevelProperties
                  , f = void 0 === u ? {} : u
                  , s = new Uo(c)
                  , l = new H({
                    cts: o,
                    hit_id: i,
                    ea: Zi(t),
                    ht: ta(t),
                    eid: Ji(t),
                    trfd: JSON.stringify(f),
                    usrin: s.stringify(),
                    ap: f.ap ? f.ap : "not_set",
                    vci: n.pageCorrelationId,
                    z: Ko()
                });
                return e !== Rr && e !== Dr || function(t, e) {
                    var n = e.schemaId
                      , r = e.data
                      , o = r.navigationType
                      , i = r.contentLoadType
                      , a = r.timing
                      , c = a.navigation
                      , u = a.vitals
                      , f = void 0 === u ? {} : u
                      , s = a.paint
                      , l = void 0 === s ? {} : s;
                    n === Rr ? t.merge({
                        tce: c.connectEnd,
                        tcs: c.connectStart,
                        tdc: c.domComplete,
                        tdclee: c.domContentLoadedEventEnd,
                        tdcles: c.domContentLoadedEventStart,
                        tdi: c.domInteractive,
                        tdl: c.domLoading,
                        tdle: c.domainLookupEnd,
                        tdls: c.domainLookupStart,
                        tfs: c.fetchStart,
                        tns: c.navigationStart,
                        trqs: c.requestStart,
                        tre: c.responseEnd,
                        trps: c.responseStart,
                        tles: c.loadEventStart,
                        tlee: c.loadEventEnd,
                        nt: o,
                        LCP: l.largestContentfulPaint
                    }) : n === Dr && (i = "hard",
                    t.merge({
                        LCP: l.largestContentfulPaint,
                        CLS: f.cumulativeLayoutShift,
                        FID: f.firstInputDelay,
                        timeToInteractive: f.timeToInteractive
                    })),
                    t.set("nav_type", i)
                }(l, t),
                l.getProperties()
            }({
                schemaId: e,
                data: i,
                webContext: r,
                global: n
            }));
            !function(t, e) {
                var n, r, o = gt("events.api") + e, i = (r = {},
                k(t, (function(t, e) {
                    void 0 !== e && "object" !== ea(e) && "[object Function]" !== {}.toString.call(e) && (r[t] = e)
                }
                )),
                n = {},
                k(r, (function(t, e) {
                    void 0 !== e && (n[t] = encodeURIComponent(e))
                }
                )),
                n), a = function(t, e) {
                    var n = -1 === e.indexOf("?") ? "?" : "&"
                      , r = L(t, "&", "=");
                    return "".concat(e).concat(n).concat(r)
                }(i, o);
                vt(a, "GET", ra, {
                    queryParams: L(i, "&", "=")
                })
            }(a, "/t/1/tl/event")
        }
        ))
    }, aa = {
        session: function() {
            return mn.getSession()
        }
    }, ca = {
        pageCorrelationId: function() {
            return dn.get("corrid")
        }
    }, ua = "tccl";
    return na = new Ei,
    mn = na,
    Oe(Vi),
    function(t) {
        var e = t.legacyName
          , n = t.configManagerProps
          , r = t.hooks.beforeInit;
        !function() {
            try {
                var o, i = s().cookie;
                Object.defineProperty(document, "cookie", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        (o = o || Object.getOwnPropertyDescriptor(Document.prototype, "cookie")).set.call(document, t),
                        i = o.get.call(document)
                    },
                    configurable: !0,
                    enumerable: !0
                }),
                function() {
                    if (a = l().userAgent.toLowerCase(),
                    !/msie [1-8]\./.test(a))
                        if (i = "_".concat(e, "Internal"),
                        c = i,
                        void 0 !== f()[c] || (f()[c] = {},
                        0))
                            h("SCC Library has already been loaded on page");
                        else if (function(t) {
                            var e = t.dataLayerName
                              , n = t.clientConfigPrefixes
                              , r = t.ignoredProperties
                              , o = t.legacyName;
                            Ut = o,
                            Wt = r || [],
                            Vt = e,
                            Ht = n,
                            Nt = f()[Vt] || [],
                            _(Vt, Nt),
                            j("".concat(Vt, "Log"), $t),
                            Yt()
                        }(n),
                        r && r(),
                        "off" !== qt.get("".concat(e, ".status"))) {
                            var o = s();
                            "prerender" !== o.visibilityState ? vi(t) : o.addEventListener("visibilitychange", (function() {
                                "prerender" !== o.visibilityState && "unloaded" !== o.visibilityState && vi(t)
                            }
                            ))
                        }
                    var i, a
                }()
            } finally {
                delete s().cookie
            }
        }()
    }({
        legacyName: ua,
        trfqMethods: n,
        configManagerProps: {
            legacyName: ua,
            dataLayerName: "_trfd",
            clientConfigPrefixes: [ua]
        },
        dataLayerConfig: {
            pageViewSchema: "add_page_view",
            autoPageViewDisabled: !1,
            immediateSchemas: ["add_page_view"]
        },
        globalContextConfig: {
            contextFnMap: {
                "context.userType": function() {
                    return "c2"
                },
                "context.visitorId": function(t) {
                    return t.session.visitorGuid
                },
                "context.sessionId": function(t) {
                    return t.session.visitGuid
                },
                "page.sessionPageViewCount": function(t) {
                    return t.session.pageCount
                }
            },
            paramsFnMap: aa
        },
        hooks: {
            getEnvironment: function() {
                var t = qt.get("".concat(ua, ".baseHost"));
                if (t)
                    return "secureserver.net" === t ? "prod" : "test-secureserver.net" === t ? "test" : "dev"
            },
            onLoad: function() {
                j(ra, []),
                f()._signalsDataLayer = f()._signalsDataLayer || [],
                f()._signalsDataLayer.push({
                    schema: "subscribe",
                    data: {
                        name: "scc-plugin-sink-event-service",
                        batch: !0,
                        callback: ia,
                        schemaIds: oa,
                        fields: ["webContext"]
                    }
                })
            },
            beforeLoad: function() {
                An.init({
                    contextFnMap: ca
                })
            }
        }
    }),
    {}
}
)()));
