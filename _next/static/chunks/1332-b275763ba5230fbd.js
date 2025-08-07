(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1332],
  {
    675: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
      };
    },
    2348: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => l });
      var n = r(12115),
        o = r(52596),
        a = r(70788),
        i = ["children", "className"];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = n.forwardRef(function (t, e) {
        var r = t.children,
          l = t.className,
          u = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, i),
          s = (0, o.A)("recharts-layer", l);
        return n.createElement(
          "g",
          c({ className: s }, (0, a.J9)(u, !0), { ref: e }),
          r
        );
      });
    },
    2494: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => c });
      var n = r(3711),
        o = r.n(n),
        a = r(40139),
        i = r.n(a);
      function c(t, e, r) {
        return !0 === e ? o()(t, r) : i()(e) ? o()(t, e) : t;
      }
    },
    3562: (t) => {
      t.exports = function (t, e, r, n) {
        for (var o = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
          if (e(t[a], a, t)) return a;
        return -1;
      };
    },
    3698: (t, e, r) => {
      var n = r(77969),
        o = r(69363);
      t.exports = function (t, e) {
        return n(o(t, e), 1);
      };
    },
    3711: (t, e, r) => {
      var n = r(18028),
        o = r(65836);
      t.exports = function (t, e) {
        return t && t.length ? o(t, n(e, 2)) : [];
      };
    },
    4217: (t, e, r) => {
      var n = r(36713),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
      };
    },
    4854: (t, e, r) => {
      var n = r(67472),
        o = r(51911);
      t.exports = function (t, e, r, a) {
        var i = r.length,
          c = i,
          l = !a;
        if (null == t) return !c;
        for (t = Object(t); i--; ) {
          var u = r[i];
          if (l && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
        }
        for (; ++i < c; ) {
          var s = (u = r[i])[0],
            f = t[s],
            p = u[1];
          if (l && u[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var h = new n();
            if (a) var d = a(f, p, s, t, e, h);
            if (!(void 0 === d ? o(p, f, 3, a, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    5015: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M236,120A108.12,108.12,0,0,0,128,12h0A108.12,108.12,0,0,0,20,120a12,12,0,0,0,3.85,8.79l.22.2c.17.15.35.31.54.45l.19.16L116,198v14h-4a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24h-4V198l91.2-68.4h0A12,12,0,0,0,236,120Zm-24.85-12H179.63c-1.79-29.27-10-50.53-18.93-65.36A84.27,84.27,0,0,1,211.15,108Zm-110.73,0C103.15,68.76,119,48.11,128,39.38c9,8.73,24.85,29.38,27.58,68.62ZM95.3,42.64c-9,14.83-17.14,36.09-18.93,65.36H44.85A84.27,84.27,0,0,1,95.3,42.64ZM68,132h48v36Zm72,0h48l-48,36Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,24S88,48,88,120H32A96,96,0,0,1,128,24Zm0,0s40,24,40,96h56A96,96,0,0,0,128,24Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.12,6.33l.08.07L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM128,34a76.89,76.89,0,0,1,13.88,16.22C149.49,62,158.45,81.87,159.82,112H96.18c1.37-30.13,10.33-50,17.94-61.74A76.92,76.92,0,0,1,128,34Zm26.4,94L128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.21,6.39h0L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM154.4,128,128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M230,120a102,102,0,0,0-204,0,6,6,0,0,0,2.27,4.69l.13.11L122,195v23H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12H134V195l93.6-70.2h0A6,6,0,0,0,230,120Zm-12.2-6H173.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2,90.2,0,0,1,217.8,114ZM128,31.43A77.14,77.14,0,0,1,143.42,49C157.26,70.08,161.24,95,161.89,114H94.11c1.06-31.88,10.49-52.86,18.47-65A76.69,76.69,0,0,1,128,31.43ZM157.8,126,128,179.65,98.2,126Zm-73.33,0,24.62,44.32L50,126Zm87.06,0H206l-59.09,44.32Zm-61-94.3C98.6,45.38,83.4,71.08,82.1,114H38.2A90.2,90.2,0,0,1,110.53,31.7Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a7.94,7.94,0,0,0,3.05,6.27.93.93,0,0,0,.15.13L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM128,34a76.89,76.89,0,0,1,13.88,16.22C149.49,62,158.45,81.87,159.82,112H96.18c1.37-30.13,10.33-50,17.94-61.74A76.92,76.92,0,0,1,128,34Zm26.4,94L128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M228,120a100,100,0,0,0-200,0,4,4,0,0,0,1.3,2.94,2.81,2.81,0,0,0,.3.26L124,194v26H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8H132V194l94.4-70.8h0A4,4,0,0,0,228,120Zm-8.09-4H172C171,67.38,152.13,40.86,140,28.79A92.14,92.14,0,0,1,219.91,116ZM128,28.89A76.67,76.67,0,0,1,145,47.64c8.36,12.69,18.27,34.71,19,68.36H92.05c.73-33.65,10.64-55.67,19-68.36A76.47,76.47,0,0,1,128,28.89ZM161.2,124,128,183.76,94.8,124Zm-75.55,0,29.74,53.54L44,124Zm84.7,0H212l-71.39,53.54ZM116,28.79C103.87,40.86,85,67.38,84,116H36.09A92.14,92.14,0,0,1,116,28.79Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Parachute";
    },
    5248: (t, e, r) => {
      "use strict";
      r.d(e, {
        P2: () => te,
        pr: () => G,
        bx: () => tr,
        vh: () => Q,
        sl: () => J,
      });
      var n = r(74925),
        o = r.n(n),
        a = r(29794),
        i = r.n(a),
        c = r(12814),
        l = r(70788),
        u = r(16377),
        s = r(12115),
        f = r(52596),
        p = r(9557),
        h = r(60245),
        d = r.n(h),
        y = r(59882),
        v = r.n(y),
        m = r(2348),
        b = r(94011),
        g = r(54811),
        x = r(36079),
        O = r(41643),
        w = r(43597),
        A = r(93179),
        j = r(67790),
        E = ["x", "y"];
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != S(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != S(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == S(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function _(t, e) {
        var r = t.x,
          n = t.y,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, E),
          a = parseInt("".concat(r), 10),
          i = parseInt("".concat(n), 10),
          c = parseInt("".concat(e.height || o.height), 10),
          l = parseInt("".concat(e.width || o.width), 10);
        return k(
          k(k(k(k({}, e), o), a ? { x: a } : {}), i ? { y: i } : {}),
          {},
          { height: c, width: l, name: e.name, radius: e.radius }
        );
      }
      function T(t) {
        return s.createElement(
          j.yp,
          P(
            {
              shapeType: "rectangle",
              propTransformer: _,
              activeClassName: "recharts-active-bar",
            },
            t
          )
        );
      }
      var C = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return function (r, n) {
            if ("number" == typeof t) return t;
            var o = "number" == typeof r;
            return o ? t(r, n) : (o || (0, A.A)(!1), e);
          };
        },
        I = ["value", "background"];
      function Z(t) {
        return (Z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function D() {
        return (D = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function N(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(r), !0).forEach(function (e) {
                F(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function H(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, z(n.key), n);
        }
      }
      function V() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (V = function () {
          return !!t;
        })();
      }
      function R(t) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function B(t, e) {
        return (B = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function F(t, e, r) {
        return (
          (e = z(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function z(t) {
        var e = (function (t, e) {
          if ("object" != Z(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Z(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Z(e) ? e : e + "";
      }
      var U = (function (t) {
        var e, r;
        function n() {
          var t, e, r;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (e = n),
            (r = [].concat(a)),
            (e = R(e)),
            F(
              (t = (function (t, e) {
                if (e && ("object" === Z(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                V()
                  ? Reflect.construct(e, r || [], R(this).constructor)
                  : e.apply(this, r)
              )),
              "state",
              { isAnimationFinished: !1 }
            ),
            F(t, "id", (0, u.NF)("recharts-bar-")),
            F(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            F(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t && B(n, t),
          (e = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.shape,
                  o = r.dataKey,
                  a = r.activeIndex,
                  i = r.activeBar,
                  c = (0, l.J9)(this.props, !1);
                return (
                  t &&
                  t.map(function (t, r) {
                    var l = r === a,
                      u = L(
                        L(L({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: l ? i : n,
                          index: r,
                          dataKey: o,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd,
                        }
                      );
                    return s.createElement(
                      m.W,
                      D(
                        { className: "recharts-bar-rectangle" },
                        (0, w.XC)(e.props, t, r),
                        {
                          key: "rectangle-"
                            .concat(null == t ? void 0 : t.x, "-")
                            .concat(null == t ? void 0 : t.y, "-")
                            .concat(null == t ? void 0 : t.value, "-")
                            .concat(r),
                        }
                      ),
                      s.createElement(T, u)
                    );
                  })
                );
              },
            },
            {
              key: "renderRectanglesWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.data,
                  n = e.layout,
                  o = e.isAnimationActive,
                  a = e.animationBegin,
                  i = e.animationDuration,
                  c = e.animationEasing,
                  l = e.animationId,
                  f = this.state.prevData;
                return s.createElement(
                  p.Ay,
                  {
                    begin: a,
                    duration: i,
                    isActive: o,
                    easing: c,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "bar-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var o = e.t,
                      a = r.map(function (t, e) {
                        var r = f && f[e];
                        if (r) {
                          var a = (0, u.Dj)(r.x, t.x),
                            i = (0, u.Dj)(r.y, t.y),
                            c = (0, u.Dj)(r.width, t.width),
                            l = (0, u.Dj)(r.height, t.height);
                          return L(
                            L({}, t),
                            {},
                            { x: a(o), y: i(o), width: c(o), height: l(o) }
                          );
                        }
                        if ("horizontal" === n) {
                          var s = (0, u.Dj)(0, t.height)(o);
                          return L(
                            L({}, t),
                            {},
                            { y: t.y + t.height - s, height: s }
                          );
                        }
                        var p = (0, u.Dj)(0, t.width)(o);
                        return L(L({}, t), {}, { width: p });
                      });
                    return s.createElement(
                      m.W,
                      null,
                      t.renderRectanglesStatically(a)
                    );
                  }
                );
              },
            },
            {
              key: "renderRectangles",
              value: function () {
                var t = this.props,
                  e = t.data,
                  r = t.isAnimationActive,
                  n = this.state.prevData;
                return r && e && e.length && (!n || !d()(n, e))
                  ? this.renderRectanglesWithAnimation()
                  : this.renderRectanglesStatically(e);
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.data,
                  n = e.dataKey,
                  o = e.activeIndex,
                  a = (0, l.J9)(this.props.background, !1);
                return r.map(function (e, r) {
                  e.value;
                  var i = e.background,
                    c = (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r = {};
                          for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                              if (e.indexOf(n) >= 0) continue;
                              r[n] = t[n];
                            }
                          return r;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < a.length; n++)
                          (r = a[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(e, I);
                  if (!i) return null;
                  var l = L(
                    L(
                      L(L(L({}, c), {}, { fill: "#eee" }, i), a),
                      (0, w.XC)(t.props, e, r)
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: n,
                      index: r,
                      className: "recharts-bar-background-rectangle",
                    }
                  );
                  return s.createElement(
                    T,
                    D(
                      {
                        key: "background-bar-".concat(r),
                        option: t.props.background,
                        isActive: r === o,
                      },
                      l
                    )
                  );
                });
              },
            },
            {
              key: "renderErrorBar",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.data,
                  o = r.xAxis,
                  a = r.yAxis,
                  i = r.layout,
                  u = r.children,
                  f = (0, l.aS)(u, b.u);
                if (!f) return null;
                var p = "vertical" === i ? n[0].height / 2 : n[0].width / 2,
                  h = function (t, e) {
                    var r = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: r,
                      errorVal: (0, c.kr)(t, e),
                    };
                  };
                return s.createElement(
                  m.W,
                  { clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
                  f.map(function (t) {
                    return s.cloneElement(t, {
                      key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
                      data: n,
                      xAxis: o,
                      yAxis: a,
                      layout: i,
                      offset: p,
                      dataPointFormatter: h,
                    });
                  })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.data,
                  n = t.className,
                  o = t.xAxis,
                  a = t.yAxis,
                  i = t.left,
                  c = t.top,
                  l = t.width,
                  u = t.height,
                  p = t.isAnimationActive,
                  h = t.background,
                  d = t.id;
                if (e || !r || !r.length) return null;
                var y = this.state.isAnimationFinished,
                  b = (0, f.A)("recharts-bar", n),
                  g = o && o.allowDataOverflow,
                  O = a && a.allowDataOverflow,
                  w = g || O,
                  A = v()(d) ? this.id : d;
                return s.createElement(
                  m.W,
                  { className: b },
                  g || O
                    ? s.createElement(
                        "defs",
                        null,
                        s.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(A) },
                          s.createElement("rect", {
                            x: g ? i : i - l / 2,
                            y: O ? c : c - u / 2,
                            width: g ? l : 2 * l,
                            height: O ? u : 2 * u,
                          })
                        )
                      )
                    : null,
                  s.createElement(
                    m.W,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: w ? "url(#clipPath-".concat(A, ")") : null,
                    },
                    h ? this.renderBackground() : null,
                    this.renderRectangles()
                  ),
                  this.renderErrorBar(w, A),
                  (!p || y) && x.Z.renderCallByParent(this.props, r)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curData: t.data,
                      prevData: e.curData,
                    }
                  : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
              },
            },
          ]),
          e && H(n.prototype, e),
          r && H(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(s.PureComponent);
      function W(t) {
        return (W =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Y(n.key), n);
        }
      }
      function q(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(Object(r), !0).forEach(function (e) {
                K(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : q(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function K(t, e, r) {
        return (
          (e = Y(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != W(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != W(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == W(e) ? e : e + "";
      }
      F(U, "displayName", "Bar"),
        F(U, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          legendType: "rect",
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: "vertical",
          activeBar: !1,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "ease",
        }),
        F(U, "getComposedData", function (t) {
          var e = t.props,
            r = t.item,
            n = t.barPosition,
            o = t.bandSize,
            a = t.xAxis,
            i = t.yAxis,
            s = t.xAxisTicks,
            f = t.yAxisTicks,
            p = t.stackedData,
            h = t.dataStartIndex,
            d = t.displayedData,
            y = t.offset,
            v = (0, c.xi)(n, r);
          if (!v) return null;
          var m = e.layout,
            b = r.type.defaultProps,
            x = void 0 !== b ? L(L({}, b), r.props) : r.props,
            O = x.dataKey,
            w = x.children,
            A = x.minPointSize,
            j = "horizontal" === m ? i : a,
            E = p ? j.scale.domain() : null,
            S = (0, c.DW)({ numericAxis: j }),
            P = (0, l.aS)(w, g.f),
            M = d.map(function (t, e) {
              p
                ? (l = (0, c._f)(p[h + e], E))
                : Array.isArray((l = (0, c.kr)(t, O))) || (l = [S, l]);
              var n = C(A, U.defaultProps.minPointSize)(l[1], e);
              if ("horizontal" === m) {
                var l,
                  d,
                  y,
                  b,
                  g,
                  x,
                  w,
                  j = [i.scale(l[0]), i.scale(l[1])],
                  M = j[0],
                  k = j[1];
                (d = (0, c.y2)({
                  axis: a,
                  ticks: s,
                  bandSize: o,
                  offset: v.offset,
                  entry: t,
                  index: e,
                })),
                  (y = null != (w = null != k ? k : M) ? w : void 0),
                  (b = v.size);
                var _ = M - k;
                if (
                  ((g = Number.isNaN(_) ? 0 : _),
                  (x = { x: d, y: i.y, width: b, height: i.height }),
                  Math.abs(n) > 0 && Math.abs(g) < Math.abs(n))
                ) {
                  var T = (0, u.sA)(g || n) * (Math.abs(n) - Math.abs(g));
                  (y -= T), (g += T);
                }
              } else {
                var I = [a.scale(l[0]), a.scale(l[1])],
                  Z = I[0],
                  D = I[1];
                if (
                  ((d = Z),
                  (y = (0, c.y2)({
                    axis: i,
                    ticks: f,
                    bandSize: o,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (b = D - Z),
                  (g = v.size),
                  (x = { x: a.x, y: y, width: a.width, height: g }),
                  Math.abs(n) > 0 && Math.abs(b) < Math.abs(n))
                ) {
                  var N = (0, u.sA)(b || n) * (Math.abs(n) - Math.abs(b));
                  b += N;
                }
              }
              return L(
                L(
                  L({}, t),
                  {},
                  {
                    x: d,
                    y: y,
                    width: b,
                    height: g,
                    value: p ? l : l[1],
                    payload: t,
                    background: x,
                  },
                  P && P[e] && P[e].props
                ),
                {},
                {
                  tooltipPayload: [(0, c.zb)(r, t)],
                  tooltipPosition: { x: d + b / 2, y: y + g / 2 },
                }
              );
            });
          return L({ data: M, layout: m }, y);
        });
      var G = function (t, e, r, n, o) {
          var a = t.width,
            i = t.height,
            s = t.layout,
            f = t.children,
            p = Object.keys(e),
            h = {
              left: r.left,
              leftMirror: r.left,
              right: a - r.right,
              rightMirror: a - r.right,
              top: r.top,
              topMirror: r.top,
              bottom: i - r.bottom,
              bottomMirror: i - r.bottom,
            },
            d = !!(0, l.BU)(f, U);
          return p.reduce(function (a, i) {
            var l,
              f,
              p,
              y,
              v,
              m = e[i],
              b = m.orientation,
              g = m.domain,
              x = m.padding,
              O = void 0 === x ? {} : x,
              w = m.mirror,
              A = m.reversed,
              j = "".concat(b).concat(w ? "Mirror" : "");
            if (
              "number" === m.type &&
              ("gap" === m.padding || "no-gap" === m.padding)
            ) {
              var E = g[1] - g[0],
                S = 1 / 0,
                P = m.categoricalDomain.sort(u.ck);
              if (
                (P.forEach(function (t, e) {
                  e > 0 && (S = Math.min((t || 0) - (P[e - 1] || 0), S));
                }),
                Number.isFinite(S))
              ) {
                var M = S / E,
                  k = "vertical" === m.layout ? r.height : r.width;
                if (
                  ("gap" === m.padding && (l = (M * k) / 2),
                  "no-gap" === m.padding)
                ) {
                  var _ = (0, u.F4)(t.barCategoryGap, M * k),
                    T = (M * k) / 2;
                  l = T - _ - ((T - _) / k) * _;
                }
              }
            }
            (f =
              "xAxis" === n
                ? [
                    r.left + (O.left || 0) + (l || 0),
                    r.left + r.width - (O.right || 0) - (l || 0),
                  ]
                : "yAxis" === n
                ? "horizontal" === s
                  ? [r.top + r.height - (O.bottom || 0), r.top + (O.top || 0)]
                  : [
                      r.top + (O.top || 0) + (l || 0),
                      r.top + r.height - (O.bottom || 0) - (l || 0),
                    ]
                : m.range),
              A && (f = [f[1], f[0]]);
            var C = (0, c.W7)(m, o, d),
              I = C.scale,
              Z = C.realScaleType;
            I.domain(g).range(f), (0, c.YB)(I);
            var D = (0, c.w7)(I, X(X({}, m), {}, { realScaleType: Z }));
            "xAxis" === n
              ? ((v = ("top" === b && !w) || ("bottom" === b && w)),
                (p = r.left),
                (y = h[j] - v * m.height))
              : "yAxis" === n &&
                ((v = ("left" === b && !w) || ("right" === b && w)),
                (p = h[j] - v * m.width),
                (y = r.top));
            var N = X(
              X(X({}, m), D),
              {},
              {
                realScaleType: Z,
                x: p,
                y: y,
                scale: I,
                width: "xAxis" === n ? r.width : m.width,
                height: "yAxis" === n ? r.height : m.height,
              }
            );
            return (
              (N.bandSize = (0, c.Hj)(N, D)),
              m.hide || "xAxis" !== n
                ? m.hide || (h[j] += (v ? -1 : 1) * N.width)
                : (h[j] += (v ? -1 : 1) * N.height),
              X(X({}, a), {}, K({}, i, N))
            );
          }, {});
        },
        J = function (t, e) {
          var r = t.x,
            n = t.y,
            o = e.x,
            a = e.y;
          return {
            x: Math.min(r, o),
            y: Math.min(n, a),
            width: Math.abs(o - r),
            height: Math.abs(a - n),
          };
        },
        Q = function (t) {
          return J({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 });
        },
        tt = (function () {
          var t, e;
          function r(t) {
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            this.scale = t;
          }
          return (
            (t = [
              {
                key: "domain",
                get: function () {
                  return this.scale.domain;
                },
              },
              {
                key: "range",
                get: function () {
                  return this.scale.range;
                },
              },
              {
                key: "rangeMin",
                get: function () {
                  return this.range()[0];
                },
              },
              {
                key: "rangeMax",
                get: function () {
                  return this.range()[1];
                },
              },
              {
                key: "bandwidth",
                get: function () {
                  return this.scale.bandwidth;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = e.bandAware,
                    n = e.position;
                  if (void 0 !== t) {
                    if (n)
                      switch (n) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var a = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + a;
                      }
                    if (r) {
                      var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + i;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    r = e[0],
                    n = e[e.length - 1];
                  return r <= n ? t >= r && t <= n : t >= n && t <= r;
                },
              },
            ]),
            (e = [
              {
                key: "create",
                value: function (t) {
                  return new r(t);
                },
              },
            ]),
            t && $(r.prototype, t),
            e && $(r, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })();
      K(tt, "EPS", 1e-4);
      var te = function (t) {
          var e = Object.keys(t).reduce(function (e, r) {
            return X(X({}, e), {}, K({}, r, tt.create(t[r])));
          }, {});
          return X(
            X({}, e),
            {},
            {
              apply: function (t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = r.bandAware,
                  a = r.position;
                return o()(t, function (t, r) {
                  return e[r].apply(t, { bandAware: n, position: a });
                });
              },
              isInRange: function (t) {
                return i()(t, function (t, r) {
                  return e[r].isInRange(t);
                });
              },
            }
          );
        },
        tr = function (t) {
          var e = t.width,
            r = t.height,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            o = ((((n % 180) + 180) % 180) * Math.PI) / 180,
            a = Math.atan(r / e);
          return Math.abs(
            o > a && o < Math.PI - a ? r / Math.sin(o) : e / Math.cos(o)
          );
        };
    },
    5516: (t, e, r) => {
      var n = r(5658);
      t.exports = function (t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), (this.size += +(r.size != o)), this;
      };
    },
    5658: (t, e, r) => {
      var n = r(30699);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    6305: (t, e, r) => {
      var n = r(53516),
        o = r(22471);
      t.exports = function (t, e) {
        var r = -1,
          a = o(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, o) {
            a[++r] = e(t, n, o);
          }),
          a
        );
      };
    },
    6997: (t) => {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    7512: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    7548: (t, e, r) => {
      var n = r(16746);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    7771: (t, e, r) => {
      var n = r(31598),
        o = r(18686),
        a = r(88748);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var i = r.__data__;
          if (!o || i.length < 199)
            return i.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new a(i);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    },
    7985: (t, e, r) => {
      t.exports = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
    },
    8782: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => te });
      var n = r(92418),
        o = r(12115),
        a = r(40139),
        i = r.n(a),
        c = r(52596),
        l = r(2348),
        u = r(51172),
        s = r(70788),
        f = ["points", "className", "baseLinePoints", "connectNulls"];
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function h(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return d(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return d(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return d(t, e);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var y = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        v = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [[]];
          return (
            t.forEach(function (t) {
              y(t)
                ? e[e.length - 1].push(t)
                : e[e.length - 1].length > 0 && e.push([]);
            }),
            y(t[0]) && e[e.length - 1].push(t[0]),
            e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
            e
          );
        },
        m = function (t, e) {
          var r = v(t);
          e &&
            (r = [
              r.reduce(function (t, e) {
                return [].concat(h(t), h(e));
              }, []),
            ]);
          var n = r
            .map(function (t) {
              return t.reduce(function (t, e, r) {
                return ""
                  .concat(t)
                  .concat(0 === r ? "M" : "L")
                  .concat(e.x, ",")
                  .concat(e.y);
              }, "");
            })
            .join("");
          return 1 === r.length ? "".concat(n, "Z") : n;
        },
        b = function (t, e, r) {
          var n = m(t, r);
          return ""
            .concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L")
            .concat(m(e.reverse(), r).slice(1));
        },
        g = function (t) {
          var e = t.points,
            r = t.className,
            n = t.baseLinePoints,
            a = t.connectNulls,
            i = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, f);
          if (!e || !e.length) return null;
          var l = (0, c.A)("recharts-polygon", r);
          if (n && n.length) {
            var u = i.stroke && "none" !== i.stroke,
              h = b(e, n, a);
            return o.createElement(
              "g",
              { className: l },
              o.createElement(
                "path",
                p({}, (0, s.J9)(i, !0), {
                  fill: "Z" === h.slice(-1) ? i.fill : "none",
                  stroke: "none",
                  d: h,
                })
              ),
              u
                ? o.createElement(
                    "path",
                    p({}, (0, s.J9)(i, !0), { fill: "none", d: m(e, a) })
                  )
                : null,
              u
                ? o.createElement(
                    "path",
                    p({}, (0, s.J9)(i, !0), { fill: "none", d: m(n, a) })
                  )
                : null
            );
          }
          var d = m(e, a);
          return o.createElement(
            "path",
            p({}, (0, s.J9)(i, !0), {
              fill: "Z" === d.slice(-1) ? i.fill : "none",
              className: l,
              d: d,
            })
          );
        },
        x = r(79095),
        O = r(43597),
        w = r(25641);
      function A(t) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function j() {
        return (j = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function E(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(r), !0).forEach(function (e) {
                T(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function P(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, C(n.key), n);
        }
      }
      function M() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (M = function () {
          return !!t;
        })();
      }
      function k(t) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function _(t, e) {
        return (_ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function T(t, e, r) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ("object" != A(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != A(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == A(e) ? e : e + "";
      }
      var I = Math.PI / 180,
        Z = (function (t) {
          var e, r;
          function n() {
            var t, e;
            if (!(this instanceof n))
              throw TypeError("Cannot call a class as a function");
            return (
              (t = n),
              (e = arguments),
              (t = k(t)),
              (function (t, e) {
                if (e && ("object" === A(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                M()
                  ? Reflect.construct(t, e || [], k(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (n.prototype = Object.create(t && t.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            t && _(n, t),
            (e = [
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e = this.props,
                    r = e.cx,
                    n = e.cy,
                    o = e.radius,
                    a = e.orientation,
                    i = e.tickSize,
                    c = (0, w.IZ)(r, n, o, t.coordinate),
                    l = (0, w.IZ)(
                      r,
                      n,
                      o + ("inner" === a ? -1 : 1) * (i || 8),
                      t.coordinate
                    );
                  return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (t) {
                  var e = this.props.orientation,
                    r = Math.cos(-t.coordinate * I);
                  return r > 1e-5
                    ? "outer" === e
                      ? "start"
                      : "end"
                    : r < -1e-5
                    ? "outer" === e
                      ? "end"
                      : "start"
                    : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    r = t.cy,
                    n = t.radius,
                    a = t.axisLine,
                    i = t.axisLineType,
                    c = S(
                      S({}, (0, s.J9)(this.props, !1)),
                      {},
                      { fill: "none" },
                      (0, s.J9)(a, !1)
                    );
                  if ("circle" === i)
                    return o.createElement(
                      u.c,
                      j({ className: "recharts-polar-angle-axis-line" }, c, {
                        cx: e,
                        cy: r,
                        r: n,
                      })
                    );
                  var l = this.props.ticks.map(function (t) {
                    return (0, w.IZ)(e, r, n, t.coordinate);
                  });
                  return o.createElement(
                    g,
                    j({ className: "recharts-polar-angle-axis-line" }, c, {
                      points: l,
                    })
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.ticks,
                    a = e.tick,
                    i = e.tickLine,
                    u = e.tickFormatter,
                    f = e.stroke,
                    p = (0, s.J9)(this.props, !1),
                    h = (0, s.J9)(a, !1),
                    d = S(S({}, p), {}, { fill: "none" }, (0, s.J9)(i, !1)),
                    y = r.map(function (e, r) {
                      var s = t.getTickLineCoord(e),
                        y = S(
                          S(
                            S({ textAnchor: t.getTickTextAnchor(e) }, p),
                            {},
                            { stroke: "none", fill: f },
                            h
                          ),
                          {},
                          { index: r, payload: e, x: s.x2, y: s.y2 }
                        );
                      return o.createElement(
                        l.W,
                        j(
                          {
                            className: (0, c.A)(
                              "recharts-polar-angle-axis-tick",
                              (0, w.Zk)(a)
                            ),
                            key: "tick-".concat(e.coordinate),
                          },
                          (0, O.XC)(t.props, e, r)
                        ),
                        i &&
                          o.createElement(
                            "line",
                            j(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              d,
                              s
                            )
                          ),
                        a && n.renderTickItem(a, y, u ? u(e.value, r) : e.value)
                      );
                    });
                  return o.createElement(
                    l.W,
                    { className: "recharts-polar-angle-axis-ticks" },
                    y
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    r = t.radius,
                    n = t.axisLine;
                  return !(r <= 0) && e && e.length
                    ? o.createElement(
                        l.W,
                        {
                          className: (0, c.A)(
                            "recharts-polar-angle-axis",
                            this.props.className
                          ),
                        },
                        n && this.renderAxisLine(),
                        this.renderTicks()
                      )
                    : null;
                },
              },
            ]),
            (r = [
              {
                key: "renderTickItem",
                value: function (t, e, r) {
                  var n;
                  return o.isValidElement(t)
                    ? o.cloneElement(t, e)
                    : i()(t)
                    ? t(e)
                    : o.createElement(
                        x.E,
                        j({}, e, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        r
                      );
                },
              },
            ]),
            e && P(n.prototype, e),
            r && P(n, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })(o.PureComponent);
      T(Z, "displayName", "PolarAngleAxis"),
        T(Z, "axisType", "angleAxis"),
        T(Z, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
      var D = r(83134),
        N = r.n(D),
        L = r(14268),
        H = r.n(L),
        V = r(60379),
        R = ["cx", "cy", "angle", "ticks", "axisLine"],
        B = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function F(t) {
        return (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function z() {
        return (z = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function U(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function W(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                G(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function $(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function q(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, J(n.key), n);
        }
      }
      function X() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (X = function () {
          return !!t;
        })();
      }
      function K(t) {
        return (K = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Y(t, e) {
        return (Y = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function G(t, e, r) {
        return (
          (e = J(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function J(t) {
        var e = (function (t, e) {
          if ("object" != F(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != F(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == F(e) ? e : e + "";
      }
      var Q = (function (t) {
        var e, r;
        function n() {
          var t, e;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = n),
            (e = arguments),
            (t = K(t)),
            (function (t, e) {
              if (e && ("object" === F(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              X()
                ? Reflect.construct(t, e || [], K(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t && Y(n, t),
          (e = [
            {
              key: "getTickValueCoord",
              value: function (t) {
                var e = t.coordinate,
                  r = this.props,
                  n = r.angle,
                  o = r.cx,
                  a = r.cy;
                return (0, w.IZ)(o, a, e, n);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case "left":
                    t = "end";
                    break;
                  case "right":
                    t = "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.angle,
                  o = t.ticks,
                  a = N()(o, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: r,
                  startAngle: n,
                  endAngle: n,
                  innerRadius:
                    H()(o, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: a.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.angle,
                  a = t.ticks,
                  i = t.axisLine,
                  c = $(t, R),
                  l = a.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0]
                  ),
                  u = (0, w.IZ)(e, r, l[0], n),
                  f = (0, w.IZ)(e, r, l[1], n),
                  p = W(
                    W(
                      W({}, (0, s.J9)(c, !1)),
                      {},
                      { fill: "none" },
                      (0, s.J9)(i, !1)
                    ),
                    {},
                    { x1: u.x, y1: u.y, x2: f.x, y2: f.y }
                  );
                return o.createElement(
                  "line",
                  z({ className: "recharts-polar-radius-axis-line" }, p)
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.ticks,
                  a = e.tick,
                  i = e.angle,
                  u = e.tickFormatter,
                  f = e.stroke,
                  p = $(e, B),
                  h = this.getTickTextAnchor(),
                  d = (0, s.J9)(p, !1),
                  y = (0, s.J9)(a, !1),
                  v = r.map(function (e, r) {
                    var s = t.getTickValueCoord(e),
                      p = W(
                        W(
                          W(
                            W(
                              {
                                textAnchor: h,
                                transform: "rotate("
                                  .concat(90 - i, ", ")
                                  .concat(s.x, ", ")
                                  .concat(s.y, ")"),
                              },
                              d
                            ),
                            {},
                            { stroke: "none", fill: f },
                            y
                          ),
                          {},
                          { index: r },
                          s
                        ),
                        {},
                        { payload: e }
                      );
                    return o.createElement(
                      l.W,
                      z(
                        {
                          className: (0, c.A)(
                            "recharts-polar-radius-axis-tick",
                            (0, w.Zk)(a)
                          ),
                          key: "tick-".concat(e.coordinate),
                        },
                        (0, O.XC)(t.props, e, r)
                      ),
                      n.renderTickItem(a, p, u ? u(e.value, r) : e.value)
                    );
                  });
                return o.createElement(
                  l.W,
                  { className: "recharts-polar-radius-axis-ticks" },
                  v
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  r = t.axisLine,
                  n = t.tick;
                return e && e.length
                  ? o.createElement(
                      l.W,
                      {
                        className: (0, c.A)(
                          "recharts-polar-radius-axis",
                          this.props.className
                        ),
                      },
                      r && this.renderAxisLine(),
                      n && this.renderTicks(),
                      V.J.renderCallByParent(this.props, this.getViewBox())
                    )
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                var n;
                return o.isValidElement(t)
                  ? o.cloneElement(t, e)
                  : i()(t)
                  ? t(e)
                  : o.createElement(
                      x.E,
                      z({}, e, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      r
                    );
              },
            },
          ]),
          e && q(n.prototype, e),
          r && q(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(o.PureComponent);
      G(Q, "displayName", "PolarRadiusAxis"),
        G(Q, "axisType", "radiusAxis"),
        G(Q, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
      var tt = r(34e3),
        te = (0, n.gu)({
          chartName: "PieChart",
          GraphicalChild: tt.F,
          validateTooltipEventTypes: ["item"],
          defaultTooltipEventType: "item",
          legendContent: "children",
          axisComponents: [
            { axisType: "angleAxis", AxisComp: Z },
            { axisType: "radiusAxis", AxisComp: Q },
          ],
          formatAxisMap: w.pr,
          defaultProps: {
            layout: "centric",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        });
    },
    8870: function (t, e, r) {
      var n;
      !(function (o) {
        "use strict";
        var a,
          i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          c = !0,
          l = "[DecimalError] ",
          u = l + "Invalid argument: ",
          s = l + "Exponent out of range: ",
          f = Math.floor,
          p = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d = f(1286742750677284.5),
          y = {};
        function v(t, e) {
          var r,
            n,
            o,
            a,
            i,
            l,
            u,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), c ? S(e, p) : e;
          if (
            ((u = t.d),
            (s = e.d),
            (i = t.e),
            (o = e.e),
            (u = u.slice()),
            (a = i - o))
          ) {
            for (
              a < 0
                ? ((n = u), (a = -a), (l = s.length))
                : ((n = s), (o = i), (l = u.length)),
                a > (l = (i = Math.ceil(p / 7)) > l ? i + 1 : l + 1) &&
                  ((a = l), (n.length = 1)),
                n.reverse();
              a--;

            )
              n.push(0);
            n.reverse();
          }
          for (
            (l = u.length) - (a = s.length) < 0 &&
              ((a = l), (n = s), (s = u), (u = n)),
              r = 0;
            a;

          )
            (r = ((u[--a] = u[a] + s[a] + r) / 1e7) | 0), (u[a] %= 1e7);
          for (r && (u.unshift(r), ++o), l = u.length; 0 == u[--l]; ) u.pop();
          return (e.d = u), (e.e = o), c ? S(e, p) : e;
        }
        function m(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(u + t);
        }
        function b(t) {
          var e,
            r,
            n,
            o = t.length - 1,
            a = "",
            i = t[0];
          if (o > 0) {
            for (a += i, e = 1; e < o; e++)
              (r = 7 - (n = t[e] + "").length) && (a += A(r)), (a += n);
            (r = 7 - (n = (i = t[e]) + "").length) && (a += A(r));
          } else if (0 === i) return "0";
          for (; i % 10 == 0; ) i /= 10;
          return a + i;
        }
        (y.absoluteValue = y.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (y.comparedTo = y.cmp =
            function (t) {
              var e, r, n, o;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, r = (n = this.d.length) < (o = t.d.length) ? n : o;
                e < r;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return n === o ? 0 : (n > o) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (y.dividedBy = y.div =
            function (t) {
              return g(this, new this.constructor(t));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (t) {
              var e = this.constructor;
              return S(g(this, new e(t), 0, 1), e.precision);
            }),
          (y.equals = y.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (y.exponent = function () {
            return O(this);
          }),
          (y.greaterThan = y.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (y.logarithm = y.log =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision,
                o = n + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(a)) throw Error(l + "NaN");
              if (this.s < 1) throw Error(l + (this.s ? "NaN" : "-Infinity"));
              return this.eq(a)
                ? new r(0)
                : ((c = !1),
                  (e = g(j(this, o), j(t, o), o)),
                  (c = !0),
                  S(e, n));
            }),
          (y.minus = y.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? P(this, t) : v(this, ((t.s = -t.s), t))
              );
            }),
          (y.modulo = y.mod =
            function (t) {
              var e,
                r = this.constructor,
                n = r.precision;
              if (!(t = new r(t)).s) throw Error(l + "NaN");
              return this.s
                ? ((c = !1),
                  (e = g(this, t, 0, 1).times(t)),
                  (c = !0),
                  this.minus(e))
                : S(new r(this), n);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return j(this);
            }),
          (y.negated = y.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (y.plus = y.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? v(this, t) : P(this, ((t.s = -t.s), t))
              );
            }),
          (y.precision = y.sd =
            function (t) {
              var e, r, n;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(u + t);
              if (
                ((e = O(this) + 1),
                (r = 7 * (n = this.d.length - 1) + 1),
                (n = this.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = this.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                o,
                a,
                i,
                u = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new u(0);
                throw Error(l + "NaN");
              }
              for (
                t = O(this),
                  c = !1,
                  0 == (o = Math.sqrt(+this)) || o == 1 / 0
                    ? (((e = b(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (n = new u(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + t)
                      )))
                    : (n = new u(o.toString())),
                  o = i = (r = u.precision) + 3;
                ;

              )
                if (
                  ((n = (a = n).plus(g(this, a, i + 2)).times(0.5)),
                  b(a.d).slice(0, i) === (e = b(n.d)).slice(0, i))
                ) {
                  if (((e = e.slice(i - 3, i + 1)), o == i && "4999" == e)) {
                    if ((S(a, r + 1, 0), a.times(a).eq(this))) {
                      n = a;
                      break;
                    }
                  } else if ("9999" != e) break;
                  i += 4;
                }
              return (c = !0), S(n, r);
            }),
          (y.times = y.mul =
            function (t) {
              var e,
                r,
                n,
                o,
                a,
                i,
                l,
                u,
                s,
                f = this.constructor,
                p = this.d,
                h = (t = new f(t)).d;
              if (!this.s || !t.s) return new f(0);
              for (
                t.s *= this.s,
                  r = this.e + t.e,
                  (u = p.length) < (s = h.length) &&
                    ((a = p), (p = h), (h = a), (i = u), (u = s), (s = i)),
                  a = [],
                  n = i = u + s;
                n--;

              )
                a.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, o = u + n; o > n; )
                  (l = a[o] + h[n] * p[o - n - 1] + e),
                    (a[o--] = l % 1e7 | 0),
                    (e = (l / 1e7) | 0);
                a[o] = (a[o] + e) % 1e7 | 0;
              }
              for (; !a[--i]; ) a.pop();
              return (
                e ? ++r : a.shift(),
                (t.d = a),
                (t.e = r),
                c ? S(t, f.precision) : t
              );
            }),
          (y.toDecimalPlaces = y.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return ((r = new n(r)), void 0 === t)
                ? r
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = n.rounding) : m(e, 0, 8),
                  S(r, t + O(r) + 1, e));
            }),
          (y.toExponential = function (t, e) {
            var r,
              n = this,
              o = n.constructor;
            return (
              void 0 === t
                ? (r = M(n, !0))
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                  (r = M((n = S(new o(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (y.toFixed = function (t, e) {
            var r,
              n,
              o = this.constructor;
            return void 0 === t
              ? M(this)
              : (m(t, 0, 1e9),
                void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                (r = M(
                  (n = S(new o(this), t + O(this) + 1, e)).abs(),
                  !1,
                  t + O(n) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + r : r);
          }),
          (y.toInteger = y.toint =
            function () {
              var t = this.constructor;
              return S(new t(this), O(this) + 1, t.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (t) {
              var e,
                r,
                n,
                o,
                i,
                u,
                s = this,
                p = s.constructor,
                h = +(t = new p(t));
              if (!t.s) return new p(a);
              if (!(s = new p(s)).s) {
                if (t.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(a)) return s;
              if (((n = p.precision), t.eq(a))) return S(s, n);
              if (((u = (e = t.e) >= (r = t.d.length - 1)), (i = s.s), u)) {
                if ((r = h < 0 ? -h : h) <= 0x1fffffffffffff) {
                  for (
                    o = new p(a), e = Math.ceil(n / 7 + 4), c = !1;
                    r % 2 && k((o = o.times(s)).d, e), 0 !== (r = f(r / 2));

                  )
                    k((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new p(a).div(o) : S(o, n);
                }
              } else if (i < 0) throw Error(l + "NaN");
              return (
                (i = i < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (o = t.times(j(s, n + 12))),
                (c = !0),
                ((o = x(o)).s = i),
                o
              );
            }),
          (y.toPrecision = function (t, e) {
            var r,
              n,
              o = this,
              a = o.constructor;
            return (
              void 0 === t
                ? ((r = O(o)), (n = M(o, r <= a.toExpNeg || r >= a.toExpPos)))
                : (m(t, 1, 1e9),
                  void 0 === e ? (e = a.rounding) : m(e, 0, 8),
                  (r = O((o = S(new a(o), t, e)))),
                  (n = M(o, t <= r || r <= a.toExpNeg, t))),
              n
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (m(t, 1, 1e9),
                    void 0 === e ? (e = r.rounding) : m(e, 0, 8)),
                S(new r(this), t, e)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var t = O(this),
                  e = this.constructor;
                return M(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var g = (function () {
          function t(t, e) {
            var r,
              n = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (r = t[o] * e + n), (t[o] = r % 1e7 | 0), (n = (r / 1e7) | 0);
            return n && t.unshift(n), t;
          }
          function e(t, e, r, n) {
            var o, a;
            if (r != n) a = r > n ? 1 : -1;
            else
              for (o = a = 0; o < r; o++)
                if (t[o] != e[o]) {
                  a = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return a;
          }
          function r(t, e, r) {
            for (var n = 0; r--; )
              (t[r] -= n), (n = +(t[r] < e[r])), (t[r] = 1e7 * n + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, o, a, i) {
            var c,
              u,
              s,
              f,
              p,
              h,
              d,
              y,
              v,
              m,
              b,
              g,
              x,
              w,
              A,
              j,
              E,
              P,
              M = n.constructor,
              k = n.s == o.s ? 1 : -1,
              _ = n.d,
              T = o.d;
            if (!n.s) return new M(n);
            if (!o.s) throw Error(l + "Division by zero");
            for (
              s = 0,
                u = n.e - o.e,
                E = T.length,
                A = _.length,
                y = (d = new M(k)).d = [];
              T[s] == (_[s] || 0);

            )
              ++s;
            if (
              (T[s] > (_[s] || 0) && --u,
              (g =
                null == a ? (a = M.precision) : i ? a + (O(n) - O(o)) + 1 : a) <
                0)
            )
              return new M(0);
            if (((g = (g / 7 + 2) | 0), (s = 0), 1 == E))
              for (f = 0, T = T[0], g++; (s < A || f) && g--; s++)
                (x = 1e7 * f + (_[s] || 0)),
                  (y[s] = (x / T) | 0),
                  (f = x % T | 0);
            else {
              for (
                (f = (1e7 / (T[0] + 1)) | 0) > 1 &&
                  ((T = t(T, f)),
                  (_ = t(_, f)),
                  (E = T.length),
                  (A = _.length)),
                  w = E,
                  m = (v = _.slice(0, E)).length;
                m < E;

              )
                v[m++] = 0;
              (P = T.slice()).unshift(0), (j = T[0]), T[1] >= 1e7 / 2 && ++j;
              do
                (f = 0),
                  (c = e(T, v, E, m)) < 0
                    ? ((b = v[0]),
                      E != m && (b = 1e7 * b + (v[1] || 0)),
                      (f = (b / j) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (h = (p = t(T, f)).length),
                          (m = v.length),
                          1 == (c = e(p, v, h, m)) &&
                            (f--, r(p, E < h ? P : T, h)))
                        : (0 == f && (c = f = 1), (p = T.slice())),
                      (h = p.length) < m && p.unshift(0),
                      r(v, p, m),
                      -1 == c &&
                        ((m = v.length),
                        (c = e(T, v, E, m)) < 1 &&
                          (f++, r(v, E < m ? P : T, m))),
                      (m = v.length))
                    : 0 === c && (f++, (v = [0])),
                  (y[s++] = f),
                  c && v[0] ? (v[m++] = _[w] || 0) : ((v = [_[w]]), (m = 1));
              while ((w++ < A || void 0 !== v[0]) && g--);
            }
            return y[0] || y.shift(), (d.e = u), S(d, i ? a + O(d) + 1 : a);
          };
        })();
        function x(t, e) {
          var r,
            n,
            o,
            i,
            l,
            u = 0,
            f = 0,
            h = t.constructor,
            d = h.precision;
          if (O(t) > 16) throw Error(s + O(t));
          if (!t.s) return new h(a);
          for (
            null == e ? ((c = !1), (l = d)) : (l = e), i = new h(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(i)), (f += 5);
          for (
            l += ((Math.log(p(2, f)) / Math.LN10) * 2 + 5) | 0,
              r = n = o = new h(a),
              h.precision = l;
            ;

          ) {
            if (
              ((n = S(n.times(t), l)),
              (r = r.times(++u)),
              b((i = o.plus(g(n, r, l))).d).slice(0, l) === b(o.d).slice(0, l))
            ) {
              for (; f--; ) o = S(o.times(o), l);
              return (h.precision = d), null == e ? ((c = !0), S(o, d)) : o;
            }
            o = i;
          }
        }
        function O(t) {
          for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function w(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              r && (t.precision = r),
              Error(l + "LN10 precision limit exceeded"))
            );
          return S(new t(t.LN10), e);
        }
        function A(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function j(t, e) {
          var r,
            n,
            o,
            i,
            u,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            x = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(a)) return new m(0);
          if ((null == e ? ((c = !1), (p = x)) : (p = e), y.eq(10)))
            return null == e && (c = !0), w(m, p);
          if (
            ((m.precision = p += 10),
            (n = (r = b(v)).charAt(0)),
            !(15e14 > Math.abs((i = O(y)))))
          )
            return (
              (f = w(m, p + 2, x).times(i + "")),
              (y = j(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = x),
              null == e ? ((c = !0), S(y, x)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = b((y = y.times(t)).d)).charAt(0)), d++;
          for (
            i = O(y),
              n > 1
                ? ((y = new m("0." + r)), i++)
                : (y = new m(n + "." + r.slice(1))),
              s = u = y = g(y.minus(a), y.plus(a), p),
              h = S(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((u = S(u.times(h), p)),
              b((f = s.plus(g(u, new m(o), p))).d).slice(0, p) ===
                b(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== i && (s = s.plus(w(m, p + 2, x).times(i + ""))),
                (s = g(s, new m(d), p)),
                (m.precision = x),
                null == e ? ((c = !0), S(s, x)) : s
              );
            (s = f), (o += 2);
          }
        }
        function E(t, e) {
          var r, n, o;
          for (
            (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (n = e.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +e.slice(n + 1)),
                  (e = e.substring(0, n)))
                : r < 0 && (r = e.length),
              n = 0;
            48 === e.charCodeAt(n);

          )
            ++n;
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(n, o))) {
            if (
              ((o -= n),
              (t.e = f((r = r - n - 1) / 7)),
              (t.d = []),
              (n = (r + 1) % 7),
              r < 0 && (n += 7),
              n < o)
            ) {
              for (n && t.d.push(+e.slice(0, n)), o -= 7; n < o; )
                t.d.push(+e.slice(n, (n += 7)));
              n = 7 - (e = e.slice(n)).length;
            } else n -= o;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > d || t.e < -d))) throw Error(s + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function S(t, e, r) {
          var n,
            o,
            a,
            i,
            l,
            u,
            h,
            y,
            v = t.d;
          for (i = 1, a = v[0]; a >= 10; a /= 10) i++;
          if ((n = e - i) < 0) (n += 7), (o = e), (h = v[(y = 0)]);
          else {
            if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t;
            for (i = 1, h = a = v[y]; a >= 10; a /= 10) i++;
            (n %= 7), (o = n - 7 + i);
          }
          if (
            (void 0 !== r &&
              ((l = (h / (a = p(10, i - o - 1))) % 10 | 0),
              (u = e < 0 || void 0 !== v[y + 1] || h % a),
              (u =
                r < 4
                  ? (l || u) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : l > 5 ||
                    (5 == l &&
                      (4 == r ||
                        u ||
                        (6 == r &&
                          (n > 0 ? (o > 0 ? h / p(10, i - o) : 0) : v[y - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !v[0])
          )
            return (
              u
                ? ((a = O(t)),
                  (v.length = 1),
                  (e = e - a - 1),
                  (v[0] = p(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((v.length = 1), (v[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((v.length = y), (a = 1), y--)
              : ((v.length = y + 1),
                (a = p(10, 7 - n)),
                (v[y] = o > 0 ? ((h / p(10, i - o)) % p(10, o) | 0) * a : 0)),
            u)
          )
            for (;;)
              if (0 == y) {
                1e7 == (v[0] += a) && ((v[0] = 1), ++t.e);
                break;
              } else {
                if (((v[y] += a), 1e7 != v[y])) break;
                (v[y--] = 0), (a = 1);
              }
          for (n = v.length; 0 === v[--n]; ) v.pop();
          if (c && (t.e > d || t.e < -d)) throw Error(s + O(t));
          return t;
        }
        function P(t, e) {
          var r,
            n,
            o,
            a,
            i,
            l,
            u,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? S(e, d) : e;
          if (
            ((u = t.d),
            (p = e.d),
            (n = e.e),
            (s = t.e),
            (u = u.slice()),
            (i = s - n))
          ) {
            for (
              (f = i < 0)
                ? ((r = u), (i = -i), (l = p.length))
                : ((r = p), (n = s), (l = u.length)),
                i > (o = Math.max(Math.ceil(d / 7), l) + 2) &&
                  ((i = o), (r.length = 1)),
                r.reverse(),
                o = i;
              o--;

            )
              r.push(0);
            r.reverse();
          } else {
            for (
              (f = (o = u.length) < (l = p.length)) && (l = o), o = 0;
              o < l;
              o++
            )
              if (u[o] != p[o]) {
                f = u[o] < p[o];
                break;
              }
            i = 0;
          }
          for (
            f && ((r = u), (u = p), (p = r), (e.s = -e.s)),
              l = u.length,
              o = p.length - l;
            o > 0;
            --o
          )
            u[l++] = 0;
          for (o = p.length; o > i; ) {
            if (u[--o] < p[o]) {
              for (a = o; a && 0 === u[--a]; ) u[a] = 1e7 - 1;
              --u[a], (u[o] += 1e7);
            }
            u[o] -= p[o];
          }
          for (; 0 === u[--l]; ) u.pop();
          for (; 0 === u[0]; u.shift()) --n;
          return u[0] ? ((e.d = u), (e.e = n), c ? S(e, d) : e) : new h(0);
        }
        function M(t, e, r) {
          var n,
            o = O(t),
            a = b(t.d),
            i = a.length;
          return (
            e
              ? (r && (n = r - i) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + A(n))
                  : i > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                (a = a + (o < 0 ? "e" : "e+") + o))
              : o < 0
              ? ((a = "0." + A(-o - 1) + a),
                r && (n = r - i) > 0 && (a += A(n)))
              : o >= i
              ? ((a += A(o + 1 - i)),
                r && (n = r - o - 1) > 0 && (a = a + "." + A(n)))
              : ((n = o + 1) < i && (a = a.slice(0, n) + "." + a.slice(n)),
                r &&
                  (n = r - i) > 0 &&
                  (o + 1 === i && (a += "."), (a += A(n)))),
            t.s < 0 ? "-" + a : a
          );
        }
        function k(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function _(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            r,
            n,
            o = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < o.length; e += 3)
            if (void 0 !== (n = t[(r = o[e])]))
              if (f(n) === n && n >= o[e + 1] && n <= o[e + 2]) this[r] = n;
              else throw Error(u + r + ": " + n);
          if (void 0 !== (n = t[(r = "LN10")]))
            if (n == Math.LN10) this[r] = new this(n);
            else throw Error(u + r + ": " + n);
          return this;
        }
        ((i = (function t(e) {
          var r, n, o;
          function a(t) {
            if (!(this instanceof a)) return new a(t);
            if (((this.constructor = a), t instanceof a)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(u + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return E(this, t.toString());
            }
            if ("string" != typeof t) throw Error(u + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              h.test(t))
            )
              E(this, t);
            else throw Error(u + t);
          }
          if (
            ((a.prototype = y),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.clone = t),
            (a.config = a.set = _),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < o.length;

            )
              e.hasOwnProperty((n = o[r++])) || (e[n] = this[n]);
          return a.config(e), a;
        })(i)).default = i.Decimal =
          i),
          (a = new i(1)),
          void 0 ===
            (n = function () {
              return i;
            }.call(e, r, e, t)) || (t.exports = n);
      })(0);
    },
    9557: (t, e, r) => {
      "use strict";
      r.d(e, { Ay: () => tj });
      var n = r(12115),
        o = r(38637),
        a = r.n(o),
        i = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty;
      function u(t, e) {
        return function (r, n, o) {
          return t(r, n, o) && e(r, n, o);
        };
      }
      function s(t) {
        return function (e, r, n) {
          if (!e || !r || "object" != typeof e || "object" != typeof r)
            return t(e, r, n);
          var o = n.cache,
            a = o.get(e),
            i = o.get(r);
          if (a && i) return a === r && i === e;
          o.set(e, r), o.set(r, e);
          var c = t(e, r, n);
          return o.delete(e), o.delete(r), c;
        };
      }
      function f(t) {
        return i(t).concat(c(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return l.call(t, e);
        };
      function h(t, e) {
        return t === e || (!t && !e && t != t && e != e);
      }
      var d = Object.getOwnPropertyDescriptor,
        y = Object.keys;
      function v(t, e, r) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function m(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e) {
        return (
          t.name === e.name &&
          t.message === e.message &&
          t.cause === e.cause &&
          t.stack === e.stack
        );
      }
      function g(t, e) {
        return t === e;
      }
      function x(t, e, r) {
        var n,
          o,
          a = t.size;
        if (a !== e.size) return !1;
        if (!a) return !0;
        for (
          var i = Array(a), c = t.entries(), l = 0;
          (n = c.next()) && !n.done;

        ) {
          for (
            var u = e.entries(), s = !1, f = 0;
            (o = u.next()) && !o.done;

          ) {
            if (i[f]) {
              f++;
              continue;
            }
            var p = n.value,
              h = o.value;
            if (
              r.equals(p[0], h[0], l, f, t, e, r) &&
              r.equals(p[1], h[1], p[0], h[0], t, e, r)
            ) {
              s = i[f] = !0;
              break;
            }
            f++;
          }
          if (!s) return !1;
          l++;
        }
        return !0;
      }
      function O(t, e, r) {
        var n = y(t),
          o = n.length;
        if (y(e).length !== o) return !1;
        for (; o-- > 0; ) if (!M(t, e, r, n[o])) return !1;
        return !0;
      }
      function w(t, e, r) {
        var n,
          o,
          a,
          i = f(t),
          c = i.length;
        if (f(e).length !== c) return !1;
        for (; c-- > 0; )
          if (
            !M(t, e, r, (n = i[c])) ||
            ((o = d(t, n)),
            (a = d(e, n)),
            (o || a) &&
              (!o ||
                !a ||
                o.configurable !== a.configurable ||
                o.enumerable !== a.enumerable ||
                o.writable !== a.writable))
          )
            return !1;
        return !0;
      }
      function A(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function E(t, e, r) {
        var n,
          o,
          a = t.size;
        if (a !== e.size) return !1;
        if (!a) return !0;
        for (var i = Array(a), c = t.values(); (n = c.next()) && !n.done; ) {
          for (var l = e.values(), u = !1, s = 0; (o = l.next()) && !o.done; ) {
            if (
              !i[s] &&
              r.equals(n.value, o.value, n.value, o.value, t, e, r)
            ) {
              u = i[s] = !0;
              break;
            }
            s++;
          }
          if (!u) return !1;
        }
        return !0;
      }
      function S(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function P(t, e) {
        return (
          t.hostname === e.hostname &&
          t.pathname === e.pathname &&
          t.protocol === e.protocol &&
          t.port === e.port &&
          t.hash === e.hash &&
          t.username === e.username &&
          t.password === e.password
        );
      }
      function M(t, e, r, n) {
        return (
          (("_owner" === n || "__o" === n || "__v" === n) &&
            (!!t.$$typeof || !!e.$$typeof)) ||
          (p(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
        );
      }
      var k = Array.isArray,
        _ =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        T = Object.assign,
        C = Object.prototype.toString.call.bind(Object.prototype.toString),
        I = Z();
      function Z(t) {
        void 0 === t && (t = {});
        var e,
          r,
          n,
          o,
          a,
          i,
          c,
          l,
          f,
          p,
          d,
          y,
          M,
          I = t.circular,
          Z = t.createInternalComparator,
          D = t.createState,
          N = t.strict,
          L =
            ((r = (e = (function (t) {
              var e = t.circular,
                r = t.createCustomConfig,
                n = t.strict,
                o = {
                  areArraysEqual: n ? w : v,
                  areDatesEqual: m,
                  areErrorsEqual: b,
                  areFunctionsEqual: g,
                  areMapsEqual: n ? u(x, w) : x,
                  areNumbersEqual: h,
                  areObjectsEqual: n ? w : O,
                  arePrimitiveWrappersEqual: A,
                  areRegExpsEqual: j,
                  areSetsEqual: n ? u(E, w) : E,
                  areTypedArraysEqual: n ? w : S,
                  areUrlsEqual: P,
                };
              if ((r && (o = T({}, o, r(o))), e)) {
                var a = s(o.areArraysEqual),
                  i = s(o.areMapsEqual),
                  c = s(o.areObjectsEqual),
                  l = s(o.areSetsEqual);
                o = T({}, o, {
                  areArraysEqual: a,
                  areMapsEqual: i,
                  areObjectsEqual: c,
                  areSetsEqual: l,
                });
              }
              return o;
            })(t)).areArraysEqual),
            (n = e.areDatesEqual),
            (o = e.areErrorsEqual),
            (a = e.areFunctionsEqual),
            (i = e.areMapsEqual),
            (c = e.areNumbersEqual),
            (l = e.areObjectsEqual),
            (f = e.arePrimitiveWrappersEqual),
            (p = e.areRegExpsEqual),
            (d = e.areSetsEqual),
            (y = e.areTypedArraysEqual),
            (M = e.areUrlsEqual),
            function (t, e, u) {
              if (t === e) return !0;
              if (null == t || null == e) return !1;
              var s = typeof t;
              if (s !== typeof e) return !1;
              if ("object" !== s)
                return "number" === s
                  ? c(t, e, u)
                  : "function" === s && a(t, e, u);
              var h = t.constructor;
              if (h !== e.constructor) return !1;
              if (h === Object) return l(t, e, u);
              if (k(t)) return r(t, e, u);
              if (null != _ && _(t)) return y(t, e, u);
              if (h === Date) return n(t, e, u);
              if (h === RegExp) return p(t, e, u);
              if (h === Map) return i(t, e, u);
              if (h === Set) return d(t, e, u);
              var v = C(t);
              return "[object Date]" === v
                ? n(t, e, u)
                : "[object RegExp]" === v
                ? p(t, e, u)
                : "[object Map]" === v
                ? i(t, e, u)
                : "[object Set]" === v
                ? d(t, e, u)
                : "[object Object]" === v
                ? "function" != typeof t.then &&
                  "function" != typeof e.then &&
                  l(t, e, u)
                : "[object URL]" === v
                ? M(t, e, u)
                : "[object Error]" === v
                ? o(t, e, u)
                : "[object Arguments]" === v
                ? l(t, e, u)
                : ("[object Boolean]" === v ||
                    "[object Number]" === v ||
                    "[object String]" === v) &&
                  f(t, e, u);
            }),
          H = Z
            ? Z(L)
            : function (t, e, r, n, o, a, i) {
                return L(t, e, i);
              };
        return (function (t) {
          var e = t.circular,
            r = t.comparator,
            n = t.createState,
            o = t.equals,
            a = t.strict;
          if (n)
            return function (t, i) {
              var c = n(),
                l = c.cache;
              return r(t, i, {
                cache: void 0 === l ? (e ? new WeakMap() : void 0) : l,
                equals: o,
                meta: c.meta,
                strict: a,
              });
            };
          if (e)
            return function (t, e) {
              return r(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: a,
              });
            };
          var i = { cache: void 0, equals: o, meta: void 0, strict: a };
          return function (t, e) {
            return r(t, e, i);
          };
        })({
          circular: void 0 !== I && I,
          comparator: L,
          createState: D,
          equals: H,
          strict: void 0 !== N && N,
        });
      }
      function D(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = -1;
        requestAnimationFrame(function n(o) {
          if ((r < 0 && (r = o), o - r > e)) t(o), (r = -1);
          else {
            var a;
            (a = n),
              "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame(a);
          }
        });
      }
      function N(t) {
        return (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function H(t) {
        return (H =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function V(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(r), !0).forEach(function (e) {
                B(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function B(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" !== H(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== H(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === H(n) ? n : String(n)) in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      Z({ strict: !0 }),
        Z({ circular: !0 }),
        Z({ circular: !0, strict: !0 }),
        Z({
          createInternalComparator: function () {
            return h;
          },
        }),
        Z({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        Z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        Z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      var F = function (t) {
          return t;
        },
        z = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return R(R({}, r), {}, B({}, n, t(n, e[n])));
          }, {});
        },
        U = function (t, e, r) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  t.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  }),
                  " "
                )
                .concat(e, "ms ")
                .concat(r);
            })
            .join(",");
        },
        W = function (t, e, r, n, o, a, i, c) {};
      function $(t, e) {
        if (t) {
          if ("string" == typeof t) return q(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return q(t, e);
        }
      }
      function q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var X = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        K = function (t, e) {
          return t
            .map(function (t, r) {
              return t * Math.pow(e, r);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        Y = function (t, e) {
          return function (r) {
            return K(X(t, e), r);
          };
        },
        G = function () {
          for (var t, e, r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          var a = n[0],
            i = n[1],
            c = n[2],
            l = n[3];
          if (1 === n.length)
            switch (n[0]) {
              case "linear":
                (a = 0), (i = 0), (c = 1), (l = 1);
                break;
              case "ease":
                (a = 0.25), (i = 0.1), (c = 0.25), (l = 1);
                break;
              case "ease-in":
                (a = 0.42), (i = 0), (c = 1), (l = 1);
                break;
              case "ease-out":
                (a = 0.42), (i = 0), (c = 0.58), (l = 1);
                break;
              case "ease-in-out":
                (a = 0), (i = 0), (c = 0.58), (l = 1);
                break;
              default:
                var u = n[0].split("(");
                if (
                  "cubic-bezier" === u[0] &&
                  4 === u[1].split(")")[0].split(",").length
                ) {
                  var s,
                    f =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(
                        (s = u[1]
                          .split(")")[0]
                          .split(",")
                          .map(function (t) {
                            return parseFloat(t);
                          }))
                      ) ||
                      (function (t, e) {
                        var r =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            a,
                            i,
                            c = [],
                            l = !0,
                            u = !1;
                          try {
                            (a = (r = r.call(t)).next), !1;
                            for (
                              ;
                              !(l = (n = a.call(r)).done) &&
                              (c.push(n.value), c.length !== e);
                              l = !0
                            );
                          } catch (t) {
                            (u = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !l &&
                                null != r.return &&
                                ((i = r.return()), Object(i) !== i)
                              )
                                return;
                            } finally {
                              if (u) throw o;
                            }
                          }
                          return c;
                        }
                      })(s, 4) ||
                      $(s, 4) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                  (a = f[0]), (i = f[1]), (c = f[2]), (l = f[3]);
                } else
                  W(
                    !1,
                    "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                    n
                  );
            }
          W(
            [a, c, i, l].every(function (t) {
              return "number" == typeof t && t >= 0 && t <= 1;
            }),
            "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
            n
          );
          var p = Y(a, c),
            h = Y(i, l),
            d =
              ((t = a),
              (e = c),
              function (r) {
                var n;
                return K(
                  [].concat(
                    (function (t) {
                      if (Array.isArray(t)) return q(t);
                    })(
                      (n = X(t, e)
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1))
                    ) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(n) ||
                      $(n) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    [0]
                  ),
                  r
                );
              }),
            y = function (t) {
              for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                var o,
                  a = p(r) - e,
                  i = d(r);
                if (1e-4 > Math.abs(a - e) || i < 1e-4) break;
                r = (o = r - a / i) > 1 ? 1 : o < 0 ? 0 : o;
              }
              return h(r);
            };
          return (y.isStepper = !1), y;
        },
        J = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.stiff,
            r = void 0 === e ? 100 : e,
            n = t.damping,
            o = void 0 === n ? 8 : n,
            a = t.dt,
            i = void 0 === a ? 17 : a,
            c = function (t, e, n) {
              var a = n + ((-(t - e) * r - n * o) * i) / 1e3,
                c = (n * i) / 1e3 + t;
              return 1e-4 > Math.abs(c - e) && 1e-4 > Math.abs(a)
                ? [e, 0]
                : [c, a];
            };
          return (c.isStepper = !0), (c.dt = i), c;
        },
        Q = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n = e[0];
          if ("string" == typeof n)
            switch (n) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return G(n);
              case "spring":
                return J();
              default:
                if ("cubic-bezier" === n.split("(")[0]) return G(n);
                W(
                  !1,
                  "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                  e
                );
            }
          return "function" == typeof n
            ? n
            : (W(
                !1,
                "[configEasing]: first argument type should be function or string, instead received %s",
                e
              ),
              null);
        };
      function tt(t) {
        return (tt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function te(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ti(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          ta(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tr(Object(r), !0).forEach(function (e) {
                to(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function to(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" !== tt(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" !== tt(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === tt(n) ? n : String(n)) in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function ta(t, e) {
        if (t) {
          if ("string" == typeof t) return ti(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return ti(t, e);
        }
      }
      function ti(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var tc = function (t, e, r) {
          return t + (e - t) * r;
        },
        tl = function (t) {
          return t.from !== t.to;
        },
        tu = function t(e, r, n) {
          var o = z(function (t, r) {
            if (tl(r)) {
              var n,
                o =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((n = e(r.from, r.to, r.velocity))) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        a,
                        i,
                        c = [],
                        l = !0,
                        u = !1;
                      try {
                        (a = (r = r.call(t)).next), !1;
                        for (
                          ;
                          !(l = (n = a.call(r)).done) &&
                          (c.push(n.value), c.length !== e);
                          l = !0
                        );
                      } catch (t) {
                        (u = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !l &&
                            null != r.return &&
                            ((i = r.return()), Object(i) !== i)
                          )
                            return;
                        } finally {
                          if (u) throw o;
                        }
                      }
                      return c;
                    }
                  })(n, 2) ||
                  ta(n, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                a = o[0],
                i = o[1];
              return tn(tn({}, r), {}, { from: a, velocity: i });
            }
            return r;
          }, r);
          return n < 1
            ? z(function (t, e) {
                return tl(e)
                  ? tn(
                      tn({}, e),
                      {},
                      {
                        velocity: tc(e.velocity, o[t].velocity, n),
                        from: tc(e.from, o[t].from, n),
                      }
                    )
                  : e;
              }, r)
            : t(e, o, n - 1);
        };
      let ts = function (t, e, r, n, o) {
        var a,
          i,
          c = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
            return t.filter(function (t) {
              return e.includes(t);
            });
          }),
          l = c.reduce(function (r, n) {
            return tn(tn({}, r), {}, to({}, n, [t[n], e[n]]));
          }, {}),
          u = c.reduce(function (r, n) {
            return tn(
              tn({}, r),
              {},
              to({}, n, { from: t[n], velocity: 0, to: e[n] })
            );
          }, {}),
          s = -1,
          f = function () {
            return null;
          };
        return (
          (f = r.isStepper
            ? function (n) {
                a || (a = n);
                var i = (n - a) / r.dt;
                (u = tu(r, u, i)),
                  o(
                    tn(
                      tn(tn({}, t), e),
                      z(function (t, e) {
                        return e.from;
                      }, u)
                    )
                  ),
                  (a = n),
                  Object.values(u).filter(tl).length &&
                    (s = requestAnimationFrame(f));
              }
            : function (a) {
                i || (i = a);
                var c = (a - i) / n,
                  u = z(function (t, e) {
                    return tc.apply(void 0, te(e).concat([r(c)]));
                  }, l);
                if ((o(tn(tn(tn({}, t), e), u)), c < 1))
                  s = requestAnimationFrame(f);
                else {
                  var p = z(function (t, e) {
                    return tc.apply(void 0, te(e).concat([r(1)]));
                  }, l);
                  o(tn(tn(tn({}, t), e), p));
                }
              }),
          function () {
            return (
              requestAnimationFrame(f),
              function () {
                cancelAnimationFrame(s);
              }
            );
          }
        );
      };
      function tf(t) {
        return (tf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var tp = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "steps",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
      ];
      function th(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return td(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return td(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return td(t, e);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function td(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function ty(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tv(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ty(Object(r), !0).forEach(function (e) {
                tm(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ty(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tm(t, e, r) {
        return (
          (e = tb(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tb(t) {
        var e = (function (t, e) {
          if ("object" !== tf(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== tf(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === tf(e) ? e : String(e);
      }
      function tg(t, e) {
        return (tg = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tx(t, e) {
        if (e && ("object" === tf(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return tO(t);
      }
      function tO(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tw(t) {
        return (tw = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var tA = (function (t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(t && t.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          t && tg(a, t);
        var e,
          r,
          o =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = tw(a);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, tw(this).constructor)
                  : r.apply(this, arguments)),
                tx(this, t)
              );
            });
        function a(t, e) {
          if (!(this instanceof a))
            throw TypeError("Cannot call a class as a function");
          var r = o.call(this, t, e),
            n = r.props,
            i = n.isActive,
            c = n.attributeName,
            l = n.from,
            u = n.to,
            s = n.steps,
            f = n.children,
            p = n.duration;
          if (
            ((r.handleStyleChange = r.handleStyleChange.bind(tO(r))),
            (r.changeStyle = r.changeStyle.bind(tO(r))),
            !i || p <= 0)
          )
            return (
              (r.state = { style: {} }),
              "function" == typeof f && (r.state = { style: u }),
              tx(r)
            );
          if (s && s.length) r.state = { style: s[0].style };
          else if (l) {
            if ("function" == typeof f) return (r.state = { style: l }), tx(r);
            r.state = { style: c ? tm({}, c, l) : l };
          } else r.state = { style: {} };
          return r;
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  r = t.canBegin;
                (this.mounted = !0), e && r && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  r = e.isActive,
                  n = e.canBegin,
                  o = e.attributeName,
                  a = e.shouldReAnimate,
                  i = e.to,
                  c = e.from,
                  l = this.state.style;
                if (n) {
                  if (!r) {
                    var u = { style: o ? tm({}, o, i) : i };
                    this.state &&
                      l &&
                      ((o && l[o] !== i) || (!o && l !== i)) &&
                      this.setState(u);
                    return;
                  }
                  if (!I(t.to, i) || !t.canBegin || !t.isActive) {
                    var s = !t.canBegin || !t.isActive;
                    this.manager && this.manager.stop(),
                      this.stopJSAnimation && this.stopJSAnimation();
                    var f = s || a ? c : t.to;
                    if (this.state && l) {
                      var p = { style: o ? tm({}, o, f) : f };
                      ((o && l[o] !== f) || (!o && l !== f)) &&
                        this.setState(p);
                    }
                    this.runAnimation(
                      tv(tv({}, this.props), {}, { from: f, begin: 0 })
                    );
                  }
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  r = t.from,
                  n = t.to,
                  o = t.duration,
                  a = t.easing,
                  i = t.begin,
                  c = t.onAnimationEnd,
                  l = t.onAnimationStart,
                  u = ts(r, n, Q(a), o, this.changeStyle);
                this.manager.start([
                  l,
                  i,
                  function () {
                    e.stopJSAnimation = u();
                  },
                  o,
                  c,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  r = t.steps,
                  n = t.begin,
                  o = t.onAnimationStart,
                  a = r[0],
                  i = a.style,
                  c = a.duration;
                return this.manager.start(
                  [o].concat(
                    th(
                      r.reduce(
                        function (t, n, o) {
                          if (0 === o) return t;
                          var a = n.duration,
                            i = n.easing,
                            c = void 0 === i ? "ease" : i,
                            l = n.style,
                            u = n.properties,
                            s = n.onAnimationEnd,
                            f = o > 0 ? r[o - 1] : n,
                            p = u || Object.keys(l);
                          if ("function" == typeof c || "spring" === c)
                            return [].concat(th(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: l,
                                duration: a,
                                easing: c,
                              }),
                              a,
                            ]);
                          var h = U(p, a, c),
                            d = tv(
                              tv(tv({}, f.style), l),
                              {},
                              { transition: h }
                            );
                          return [].concat(th(t), [d, a, s]).filter(F);
                        },
                        [i, Math.max(void 0 === c ? 0 : c, n)]
                      )
                    ),
                    [t.onAnimationEnd]
                  )
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                this.manager ||
                  (this.manager =
                    ((r = function () {
                      return null;
                    }),
                    (n = !1),
                    (o = function t(e) {
                      if (!n) {
                        if (Array.isArray(e)) {
                          if (!e.length) return;
                          var o =
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(e) ||
                              (function (t) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t["@@iterator"]
                                )
                                  return Array.from(t);
                              })(e) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return L(t, void 0);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return L(t, e);
                                }
                              })(e) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                            a = o[0],
                            i = o.slice(1);
                          return "number" == typeof a
                            ? void D(t.bind(null, i), a)
                            : (t(a), void D(t.bind(null, i)));
                        }
                        "object" === N(e) && r(e),
                          "function" == typeof e && e();
                      }
                    }),
                    {
                      stop: function () {
                        n = !0;
                      },
                      start: function (t) {
                        (n = !1), o(t);
                      },
                      subscribe: function (t) {
                        return (
                          (r = t),
                          function () {
                            r = function () {
                              return null;
                            };
                          }
                        );
                      },
                    }));
                var e,
                  r,
                  n,
                  o,
                  a = t.begin,
                  i = t.duration,
                  c = t.attributeName,
                  l = t.to,
                  u = t.easing,
                  s = t.onAnimationStart,
                  f = t.onAnimationEnd,
                  p = t.steps,
                  h = t.children,
                  d = this.manager;
                if (
                  ((this.unSubscribe = d.subscribe(this.handleStyleChange)),
                  "function" == typeof u ||
                    "function" == typeof h ||
                    "spring" === u)
                )
                  return void this.runJSAnimation(t);
                if (p.length > 1) return void this.runStepAnimation(t);
                var y = c ? tm({}, c, l) : l,
                  v = U(Object.keys(y), i, u);
                d.start([s, a, tv(tv({}, y), {}, { transition: v }), i, f]);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  r = (t.begin, t.duration),
                  o = (t.attributeName, t.easing, t.isActive),
                  a =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            o = {},
                            a = Object.keys(t);
                          for (n = 0; n < a.length; n++)
                            (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < a.length; n++)
                          (r = a[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(t, tp)),
                  i = n.Children.count(e),
                  c = this.state.style;
                if ("function" == typeof e) return e(c);
                if (!o || 0 === i || r <= 0) return e;
                var l = function (t) {
                  var e = t.props,
                    r = e.style,
                    o = e.className;
                  return (0, n.cloneElement)(
                    t,
                    tv(
                      tv({}, a),
                      {},
                      {
                        style: tv(tv({}, void 0 === r ? {} : r), c),
                        className: o,
                      }
                    )
                  );
                };
                return 1 === i
                  ? l(n.Children.only(e))
                  : n.createElement(
                      "div",
                      null,
                      n.Children.map(e, function (t) {
                        return l(t);
                      })
                    );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, tb(n.key), n);
            }
          })(a.prototype, r),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      (tA.displayName = "Animate"),
        (tA.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: "",
          to: "",
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {},
        }),
        (tA.propTypes = {
          from: a().oneOfType([a().object, a().string]),
          to: a().oneOfType([a().object, a().string]),
          attributeName: a().string,
          duration: a().number,
          begin: a().number,
          easing: a().oneOfType([a().string, a().func]),
          steps: a().arrayOf(
            a().shape({
              duration: a().number.isRequired,
              style: a().object.isRequired,
              easing: a().oneOfType([
                a().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                a().func,
              ]),
              properties: a().arrayOf("string"),
              onAnimationEnd: a().func,
            })
          ),
          children: a().oneOfType([a().node, a().func]),
          isActive: a().bool,
          canBegin: a().bool,
          onAnimationEnd: a().func,
          shouldReAnimate: a().bool,
          onAnimationStart: a().func,
          onAnimationReStart: a().func,
        });
      let tj = tA;
    },
    9699: (t, e, r) => {
      var n = r(11011);
      t.exports = function (t, e, r) {
        for (
          var o = -1,
            a = t.criteria,
            i = e.criteria,
            c = a.length,
            l = r.length;
          ++o < c;

        ) {
          var u = n(a[o], i[o]);
          if (u) {
            if (o >= l) return u;
            return u * ("desc" == r[o] ? -1 : 1);
          }
        }
        return t.index - e.index;
      };
    },
    9795: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => I });
      var n = r(12115),
        o = r(23633),
        a = r.n(o);
      let i = Math.cos,
        c = Math.sin,
        l = Math.sqrt,
        u = Math.PI,
        s = 2 * u,
        f = {
          draw(t, e) {
            let r = l(e / u);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, s);
          },
        },
        p = l(1 / 3),
        h = 2 * p,
        d = c(u / 10) / c((7 * u) / 10),
        y = c(s / 10) * d,
        v = -i(s / 10) * d,
        m = l(3),
        b = l(3) / 2,
        g = 1 / l(12),
        x = (g / 2 + 1) * 3;
      var O = r(85654),
        w = r(31847);
      l(3), l(3);
      var A = r(52596),
        j = r(70788);
      function E(t) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var S = ["type", "size", "sizeType"];
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != E(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != E(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == E(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : M(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var _ = {
          symbolCircle: f,
          symbolCross: {
            draw(t, e) {
              let r = l(e / 5) / 2;
              t.moveTo(-3 * r, -r),
                t.lineTo(-r, -r),
                t.lineTo(-r, -3 * r),
                t.lineTo(r, -3 * r),
                t.lineTo(r, -r),
                t.lineTo(3 * r, -r),
                t.lineTo(3 * r, r),
                t.lineTo(r, r),
                t.lineTo(r, 3 * r),
                t.lineTo(-r, 3 * r),
                t.lineTo(-r, r),
                t.lineTo(-3 * r, r),
                t.closePath();
            },
          },
          symbolDiamond: {
            draw(t, e) {
              let r = l(e / h),
                n = r * p;
              t.moveTo(0, -r),
                t.lineTo(n, 0),
                t.lineTo(0, r),
                t.lineTo(-n, 0),
                t.closePath();
            },
          },
          symbolSquare: {
            draw(t, e) {
              let r = l(e),
                n = -r / 2;
              t.rect(n, n, r, r);
            },
          },
          symbolStar: {
            draw(t, e) {
              let r = l(0.8908130915292852 * e),
                n = y * r,
                o = v * r;
              t.moveTo(0, -r), t.lineTo(n, o);
              for (let e = 1; e < 5; ++e) {
                let a = (s * e) / 5,
                  l = i(a),
                  u = c(a);
                t.lineTo(u * r, -l * r), t.lineTo(l * n - u * o, u * n + l * o);
              }
              t.closePath();
            },
          },
          symbolTriangle: {
            draw(t, e) {
              let r = -l(e / (3 * m));
              t.moveTo(0, 2 * r),
                t.lineTo(-m * r, -r),
                t.lineTo(m * r, -r),
                t.closePath();
            },
          },
          symbolWye: {
            draw(t, e) {
              let r = l(e / x),
                n = r / 2,
                o = r * g,
                a = r * g + r,
                i = -n;
              t.moveTo(n, o),
                t.lineTo(n, a),
                t.lineTo(i, a),
                t.lineTo(-0.5 * n - b * o, b * n + -0.5 * o),
                t.lineTo(-0.5 * n - b * a, b * n + -0.5 * a),
                t.lineTo(-0.5 * i - b * a, b * i + -0.5 * a),
                t.lineTo(-0.5 * n + b * o, -0.5 * o - b * n),
                t.lineTo(-0.5 * n + b * a, -0.5 * a - b * n),
                t.lineTo(-0.5 * i + b * a, -0.5 * a - b * i),
                t.closePath();
            },
          },
        },
        T = Math.PI / 180,
        C = function (t, e, r) {
          if ("area" === e) return t;
          switch (r) {
            case "cross":
              return (5 * t * t) / 9;
            case "diamond":
              return (0.5 * t * t) / Math.sqrt(3);
            case "square":
              return t * t;
            case "star":
              var n = 18 * T;
              return (
                1.25 *
                t *
                t *
                (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
              );
            case "triangle":
              return (Math.sqrt(3) * t * t) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
              return (Math.PI * t * t) / 4;
          }
        },
        I = function (t) {
          var e,
            r = t.type,
            o = void 0 === r ? "circle" : r,
            i = t.size,
            c = void 0 === i ? 64 : i,
            l = t.sizeType,
            u = void 0 === l ? "area" : l,
            s = k(
              k(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = (function (t, e) {
                      if (null == t) return {};
                      var r = {};
                      for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                          if (e.indexOf(n) >= 0) continue;
                          r[n] = t[n];
                        }
                      return r;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++)
                      (r = a[n]),
                        !(e.indexOf(r) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(t, r) &&
                          (o[r] = t[r]);
                  }
                  return o;
                })(t, S)
              ),
              {},
              { type: o, size: c, sizeType: u }
            ),
            p = s.className,
            h = s.cx,
            d = s.cy,
            y = (0, j.J9)(s, !0);
          return h === +h && d === +d && c === +c
            ? n.createElement(
                "path",
                P({}, y, {
                  className: (0, A.A)("recharts-symbols", p),
                  transform: "translate(".concat(h, ", ").concat(d, ")"),
                  d:
                    ((e = _["symbol".concat(a()(o))] || f),
                    (function (t, e) {
                      let r = null,
                        n = (0, w.i)(o);
                      function o() {
                        let o;
                        if (
                          (r || (r = o = n()),
                          t
                            .apply(this, arguments)
                            .draw(r, +e.apply(this, arguments)),
                          o)
                        )
                          return (r = null), o + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, O.A)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, O.A)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, O.A)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, O.A)(+t)),
                              o)
                            : e;
                        }),
                        (o.context = function (t) {
                          return arguments.length
                            ? ((r = null == t ? null : t), o)
                            : r;
                        }),
                        o
                      );
                    })()
                      .type(e)
                      .size(C(c, u, o))()),
                })
              )
            : null;
        };
      I.registerSymbol = function (t, e) {
        _["symbol".concat(a()(t))] = e;
      };
    },
    9813: (t, e, r) => {
      var n = r(22143),
        o = r(48611),
        a = Object.prototype,
        i = a.hasOwnProperty,
        c = a.propertyIsEnumerable;
      t.exports = n(
        (function () {
          return arguments;
        })()
      )
        ? n
        : function (t) {
            return o(t) && i.call(t, "callee") && !c.call(t, "callee");
          };
    },
    9819: (t, e, r) => {
      "use strict";
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      r.d(e, { A: () => n }), Array.prototype.slice;
    },
    10537: (t, e, r) => {
      var n = r(96540),
        o = r(31598),
        a = r(18686);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (a || o)(),
            string: new n(),
          });
      };
    },
    11011: (t, e, r) => {
      var n = r(70771);
      t.exports = function (t, e) {
        if (t !== e) {
          var r = void 0 !== t,
            o = null === t,
            a = t == t,
            i = n(t),
            c = void 0 !== e,
            l = null === e,
            u = e == e,
            s = n(e);
          if (
            (!l && !s && !i && t > e) ||
            (i && c && u && !l && !s) ||
            (o && c && u) ||
            (!r && u) ||
            !a
          )
            return 1;
          if (
            (!o && !i && !s && t < e) ||
            (s && r && a && !o && !i) ||
            (l && r && a) ||
            (!c && a) ||
            !u
          )
            return -1;
        }
        return 0;
      };
    },
    11670: (t, e, r) => {
      var n = r(79401),
        o = r(9813),
        a = r(39608),
        i = r(33497),
        c = r(99544),
        l = r(35190),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = a(t),
          s = !r && o(t),
          f = !r && !s && i(t),
          p = !r && !s && !f && l(t),
          h = r || s || f || p,
          d = h ? n(t.length, String) : [],
          y = d.length;
        for (var v in t)
          (e || u.call(t, v)) &&
            !(
              h &&
              ("length" == v ||
                (f && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                c(v, y))
            ) &&
            d.push(v);
        return d;
      };
    },
    12486: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    12814: (t, e, r) => {
      "use strict";
      r.d(e, {
        s0: () => n4,
        gH: () => n0,
        YB: () => on,
        HQ: () => oe,
        xi: () => oo,
        Hj: () => ob,
        BX: () => n8,
        tA: () => n2,
        DW: () => op,
        y2: () => of,
        nb: () => os,
        Ay: () => nQ,
        vf: () => n5,
        Mk: () => od,
        Ps: () => n1,
        Mn: () => ol,
        kA: () => oh,
        Rh: () => n9,
        w7: () => ou,
        zb: () => ox,
        kr: () => nJ,
        _L: () => n7,
        KC: () => og,
        A1: () => n3,
        W7: () => or,
        AQ: () => om,
        _f: () => oa,
      });
      var n,
        o,
        a,
        i,
        c,
        l,
        u,
        s = {};
      r.r(s),
        r.d(s, {
          scaleBand: () => f.A,
          scaleDiverging: () =>
            function t() {
              var e = tD(rJ()(tv));
              return (
                (e.copy = function () {
                  return rK(e, t());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleDivergingLog: () =>
            function t() {
              var e = tU(rJ()).domain([0.1, 1, 10]);
              return (
                (e.copy = function () {
                  return rK(e, t()).base(e.base());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleDivergingPow: () => rQ,
          scaleDivergingSqrt: () => r0,
          scaleDivergingSymlog: () =>
            function t() {
              var e = tq(rJ());
              return (
                (e.copy = function () {
                  return rK(e, t()).constant(e.constant());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleIdentity: () =>
            function t(e) {
              var r;
              function n(t) {
                return null == t || isNaN((t *= 1)) ? r : t;
              }
              return (
                (n.invert = n),
                (n.domain = n.range =
                  function (t) {
                    return arguments.length
                      ? ((e = Array.from(t, td)), n)
                      : e.slice();
                  }),
                (n.unknown = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.copy = function () {
                  return t(e).unknown(r);
                }),
                (e = arguments.length ? Array.from(e, td) : [0, 1]),
                tD(n)
              );
            },
          scaleImplicit: () => tX.h,
          scaleLinear: () => tN,
          scaleLog: () =>
            function t() {
              let e = tU(tO()).domain([1, 10]);
              return (
                (e.copy = () => tx(e, t()).base(e.base())),
                tA.C.apply(e, arguments),
                e
              );
            },
          scaleOrdinal: () => tX.A,
          scalePoint: () => f.z,
          scalePow: () => tQ,
          scaleQuantile: () =>
            function t() {
              var e,
                r = [],
                n = [],
                o = [];
              function a() {
                var t = 0,
                  e = Math.max(1, n.length);
                for (o = Array(e - 1); ++t < e; )
                  o[t - 1] = (function (t, e, r = A) {
                    if (!(!(n = t.length) || isNaN((e *= 1)))) {
                      if (e <= 0 || n < 2) return +r(t[0], 0, t);
                      if (e >= 1) return +r(t[n - 1], n - 1, t);
                      var n,
                        o = (n - 1) * e,
                        a = Math.floor(o),
                        i = +r(t[a], a, t);
                      return i + (r(t[a + 1], a + 1, t) - i) * (o - a);
                    }
                  })(r, t / e);
                return i;
              }
              function i(t) {
                return null == t || isNaN((t *= 1)) ? e : n[E(o, t)];
              }
              return (
                (i.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : [
                        e > 0 ? o[e - 1] : r[0],
                        e < o.length ? o[e] : r[r.length - 1],
                      ];
                }),
                (i.domain = function (t) {
                  if (!arguments.length) return r.slice();
                  for (let e of ((r = []), t))
                    null == e || isNaN((e *= 1)) || r.push(e);
                  return r.sort(g), a();
                }),
                (i.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)), a())
                    : n.slice();
                }),
                (i.unknown = function (t) {
                  return arguments.length ? ((e = t), i) : e;
                }),
                (i.quantiles = function () {
                  return o.slice();
                }),
                (i.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                tA.C.apply(i, arguments)
              );
            },
          scaleQuantize: () =>
            function t() {
              var e,
                r = 0,
                n = 1,
                o = 1,
                a = [0.5],
                i = [0, 1];
              function c(t) {
                return null != t && t <= t ? i[E(a, t, 0, o)] : e;
              }
              function l() {
                var t = -1;
                for (a = Array(o); ++t < o; )
                  a[t] = ((t + 1) * n - (t - o) * r) / (o + 1);
                return c;
              }
              return (
                (c.domain = function (t) {
                  return arguments.length
                    ? (([r, n] = t), (r *= 1), (n *= 1), l())
                    : [r, n];
                }),
                (c.range = function (t) {
                  return arguments.length
                    ? ((o = (i = Array.from(t)).length - 1), l())
                    : i.slice();
                }),
                (c.invertExtent = function (t) {
                  var e = i.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : e < 1
                    ? [r, a[0]]
                    : e >= o
                    ? [a[o - 1], n]
                    : [a[e - 1], a[e]];
                }),
                (c.unknown = function (t) {
                  return arguments.length && (e = t), c;
                }),
                (c.thresholds = function () {
                  return a.slice();
                }),
                (c.copy = function () {
                  return t().domain([r, n]).range(i).unknown(e);
                }),
                tA.C.apply(tD(c), arguments)
              );
            },
          scaleRadial: () =>
            function t() {
              var e,
                r = tw(),
                n = [0, 1],
                o = !1;
              function a(t) {
                var n,
                  a = Math.sign((n = r(t))) * Math.sqrt(Math.abs(n));
                return isNaN(a) ? e : o ? Math.round(a) : a;
              }
              return (
                (a.invert = function (t) {
                  return r.invert(t1(t));
                }),
                (a.domain = function (t) {
                  return arguments.length ? (r.domain(t), a) : r.domain();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? (r.range((n = Array.from(t, td)).map(t1)), a)
                    : n.slice();
                }),
                (a.rangeRound = function (t) {
                  return a.range(t).round(!0);
                }),
                (a.round = function (t) {
                  return arguments.length ? ((o = !!t), a) : o;
                }),
                (a.clamp = function (t) {
                  return arguments.length ? (r.clamp(t), a) : r.clamp();
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.copy = function () {
                  return t(r.domain(), n).round(o).clamp(r.clamp()).unknown(e);
                }),
                tA.C.apply(a, arguments),
                tD(a)
              );
            },
          scaleSequential: () =>
            function t() {
              var e = tD(rX()(tv));
              return (
                (e.copy = function () {
                  return rK(e, t());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleSequentialLog: () =>
            function t() {
              var e = tU(rX()).domain([1, 10]);
              return (
                (e.copy = function () {
                  return rK(e, t()).base(e.base());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleSequentialPow: () => rY,
          scaleSequentialQuantile: () =>
            function t() {
              var e = [],
                r = tv;
              function n(t) {
                if (null != t && !isNaN((t *= 1)))
                  return r((E(e, t, 1) - 1) / (e.length - 1));
              }
              return (
                (n.domain = function (t) {
                  if (!arguments.length) return e.slice();
                  for (let r of ((e = []), t))
                    null == r || isNaN((r *= 1)) || e.push(r);
                  return e.sort(g), n;
                }),
                (n.interpolator = function (t) {
                  return arguments.length ? ((r = t), n) : r;
                }),
                (n.range = function () {
                  return e.map((t, n) => r(n / (e.length - 1)));
                }),
                (n.quantiles = function (t) {
                  return Array.from({ length: t + 1 }, (r, n) =>
                    (function (t, e, r) {
                      if (
                        !(
                          !(n = (t = Float64Array.from(
                            (function* (t, e) {
                              if (void 0 === e)
                                for (let e of t)
                                  null != e && (e *= 1) >= e && (yield e);
                              else {
                                let r = -1;
                                for (let n of t)
                                  null != (n = e(n, ++r, t)) &&
                                    (n *= 1) >= n &&
                                    (yield n);
                              }
                            })(t, void 0)
                          )).length) || isNaN((e *= 1))
                        )
                      ) {
                        if (e <= 0 || n < 2) return t8(t);
                        if (e >= 1) return t2(t);
                        var n,
                          o = (n - 1) * e,
                          a = Math.floor(o),
                          i = t2(
                            (function t(e, r, n = 0, o = 1 / 0, a) {
                              if (
                                ((r = Math.floor(r)),
                                (n = Math.floor(Math.max(0, n))),
                                (o = Math.floor(Math.min(e.length - 1, o))),
                                !(n <= r && r <= o))
                              )
                                return e;
                              for (
                                a =
                                  void 0 === a
                                    ? t4
                                    : (function (t = g) {
                                        if (t === g) return t4;
                                        if ("function" != typeof t)
                                          throw TypeError(
                                            "compare is not a function"
                                          );
                                        return (e, r) => {
                                          let n = t(e, r);
                                          return n || 0 === n
                                            ? n
                                            : (0 === t(r, r)) - (0 === t(e, e));
                                        };
                                      })(a);
                                o > n;

                              ) {
                                if (o - n > 600) {
                                  let i = o - n + 1,
                                    c = r - n + 1,
                                    l = Math.log(i),
                                    u = 0.5 * Math.exp((2 * l) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((l * u * (i - u)) / i) *
                                      (c - i / 2 < 0 ? -1 : 1),
                                    f = Math.max(
                                      n,
                                      Math.floor(r - (c * u) / i + s)
                                    ),
                                    p = Math.min(
                                      o,
                                      Math.floor(r + ((i - c) * u) / i + s)
                                    );
                                  t(e, r, f, p, a);
                                }
                                let i = e[r],
                                  c = n,
                                  l = o;
                                for (
                                  t6(e, n, r), a(e[o], i) > 0 && t6(e, n, o);
                                  c < l;

                                ) {
                                  for (t6(e, c, l), ++c, --l; 0 > a(e[c], i); )
                                    ++c;
                                  for (; a(e[l], i) > 0; ) --l;
                                }
                                0 === a(e[n], i) ? t6(e, n, l) : t6(e, ++l, o),
                                  l <= r && (n = l + 1),
                                  r <= l && (o = l - 1);
                              }
                              return e;
                            })(t, a).subarray(0, a + 1)
                          );
                        return i + (t8(t.subarray(a + 1)) - i) * (o - a);
                      }
                    })(e, n / t)
                  );
                }),
                (n.copy = function () {
                  return t(r).domain(e);
                }),
                tA.K.apply(n, arguments)
              );
            },
          scaleSequentialSqrt: () => rG,
          scaleSequentialSymlog: () =>
            function t() {
              var e = tq(rX());
              return (
                (e.copy = function () {
                  return rK(e, t()).constant(e.constant());
                }),
                tA.K.apply(e, arguments)
              );
            },
          scaleSqrt: () => t0,
          scaleSymlog: () =>
            function t() {
              var e = tq(tO());
              return (
                (e.copy = function () {
                  return tx(e, t()).constant(e.constant());
                }),
                tA.C.apply(e, arguments)
              );
            },
          scaleThreshold: () =>
            function t() {
              var e,
                r = [0.5],
                n = [0, 1],
                o = 1;
              function a(t) {
                return null != t && t <= t ? n[E(r, t, 0, o)] : e;
              }
              return (
                (a.domain = function (t) {
                  return arguments.length
                    ? ((o = Math.min((r = Array.from(t)).length, n.length - 1)),
                      a)
                    : r.slice();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? ((n = Array.from(t)),
                      (o = Math.min(r.length, n.length - 1)),
                      a)
                    : n.slice();
                }),
                (a.invertExtent = function (t) {
                  var e = n.indexOf(t);
                  return [r[e - 1], r[e]];
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.copy = function () {
                  return t().domain(r).range(n).unknown(e);
                }),
                tA.C.apply(a, arguments)
              );
            },
          scaleTime: () => r$,
          scaleUtc: () => rq,
          tickFormat: () => tZ,
        });
      var f = r(81519);
      let p = Math.sqrt(50),
        h = Math.sqrt(10),
        d = Math.sqrt(2);
      function y(t, e, r) {
        let n,
          o,
          a,
          i = (e - t) / Math.max(0, r),
          c = Math.floor(Math.log10(i)),
          l = i / Math.pow(10, c),
          u = l >= p ? 10 : l >= h ? 5 : l >= d ? 2 : 1;
        return (c < 0
          ? ((n = Math.round(t * (a = Math.pow(10, -c) / u))),
            (o = Math.round(e * a)),
            n / a < t && ++n,
            o / a > e && --o,
            (a = -a))
          : ((n = Math.round(t / (a = Math.pow(10, c) * u))),
            (o = Math.round(e / a)),
            n * a < t && ++n,
            o * a > e && --o),
        o < n && 0.5 <= r && r < 2)
          ? y(t, e, 2 * r)
          : [n, o, a];
      }
      function v(t, e, r) {
        if (((e *= 1), (t *= 1), !((r *= 1) > 0))) return [];
        if (t === e) return [t];
        let n = e < t,
          [o, a, i] = n ? y(e, t, r) : y(t, e, r);
        if (!(a >= o)) return [];
        let c = a - o + 1,
          l = Array(c);
        if (n)
          if (i < 0) for (let t = 0; t < c; ++t) l[t] = -((a - t) / i);
          else for (let t = 0; t < c; ++t) l[t] = (a - t) * i;
        else if (i < 0) for (let t = 0; t < c; ++t) l[t] = -((o + t) / i);
        else for (let t = 0; t < c; ++t) l[t] = (o + t) * i;
        return l;
      }
      function m(t, e, r) {
        return y((t *= 1), (e *= 1), (r *= 1))[2];
      }
      function b(t, e, r) {
        (e *= 1), (t *= 1), (r *= 1);
        let n = e < t,
          o = n ? m(e, t, r) : m(t, e, r);
        return (n ? -1 : 1) * (o < 0 ? -(1 / o) : o);
      }
      function g(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function x(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function O(t) {
        let e, r, n;
        function o(t, n, a = 0, i = t.length) {
          if (a < i) {
            if (0 !== e(n, n)) return i;
            do {
              let e = (a + i) >>> 1;
              0 > r(t[e], n) ? (a = e + 1) : (i = e);
            } while (a < i);
          }
          return a;
        }
        return (
          2 !== t.length
            ? ((e = g), (r = (e, r) => g(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === g || t === x ? t : w), (r = t), (n = t)),
          {
            left: o,
            center: function (t, e, r = 0, a = t.length) {
              let i = o(t, e, r, a - 1);
              return i > r && n(t[i - 1], e) > -n(t[i], e) ? i - 1 : i;
            },
            right: function (t, n, o = 0, a = t.length) {
              if (o < a) {
                if (0 !== e(n, n)) return a;
                do {
                  let e = (o + a) >>> 1;
                  0 >= r(t[e], n) ? (o = e + 1) : (a = e);
                } while (o < a);
              }
              return o;
            },
          }
        );
      }
      function w() {
        return 0;
      }
      function A(t) {
        return null === t ? NaN : +t;
      }
      let j = O(g),
        E = j.right;
      function S(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function P(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function M() {}
      j.left, O(A).center;
      var k = "\\s*([+-]?\\d+)\\s*",
        _ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        T = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        C = /^#([0-9a-f]{3,8})$/,
        I = RegExp(`^rgb\\(${k},${k},${k}\\)$`),
        Z = RegExp(`^rgb\\(${T},${T},${T}\\)$`),
        D = RegExp(`^rgba\\(${k},${k},${k},${_}\\)$`),
        N = RegExp(`^rgba\\(${T},${T},${T},${_}\\)$`),
        L = RegExp(`^hsl\\(${_},${T},${T}\\)$`),
        H = RegExp(`^hsla\\(${_},${T},${T},${_}\\)$`),
        V = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32,
        };
      function R() {
        return this.rgb().formatHex();
      }
      function B() {
        return this.rgb().formatRgb();
      }
      function F(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = C.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? z(e)
                : 3 === r
                ? new $(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === r
                ? U(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === r
                ? U(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = I.exec(t))
            ? new $(e[1], e[2], e[3], 1)
            : (e = Z.exec(t))
            ? new $(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = D.exec(t))
            ? U(e[1], e[2], e[3], e[4])
            : (e = N.exec(t))
            ? U(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = L.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = H.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, e[4])
            : V.hasOwnProperty(t)
            ? z(V[t])
            : "transparent" === t
            ? new $(NaN, NaN, NaN, 0)
            : null
        );
      }
      function z(t) {
        return new $((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function U(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new $(t, e, r, n);
      }
      function W(t, e, r, n) {
        var o;
        return 1 == arguments.length
          ? ((o = t) instanceof M || (o = F(o)), o)
            ? new $((o = o.rgb()).r, o.g, o.b, o.opacity)
            : new $()
          : new $(t, e, r, null == n ? 1 : n);
      }
      function $(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function q() {
        return `#${G(this.r)}${G(this.g)}${G(this.b)}`;
      }
      function X() {
        let t = K(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${Y(this.r)}, ${Y(this.g)}, ${Y(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function K(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function Y(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function G(t) {
        return ((t = Y(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function J(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new tt(t, e, r, n)
        );
      }
      function Q(t) {
        if (t instanceof tt) return new tt(t.h, t.s, t.l, t.opacity);
        if ((t instanceof M || (t = F(t)), !t)) return new tt();
        if (t instanceof tt) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          o = Math.min(e, r, n),
          a = Math.max(e, r, n),
          i = NaN,
          c = a - o,
          l = (a + o) / 2;
        return (
          c
            ? ((i =
                e === a
                  ? (r - n) / c + (r < n) * 6
                  : r === a
                  ? (n - e) / c + 2
                  : (e - r) / c + 4),
              (c /= l < 0.5 ? a + o : 2 - a - o),
              (i *= 60))
            : (c = l > 0 && l < 1 ? 0 : i),
          new tt(i, c, l, t.opacity)
        );
      }
      function tt(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function te(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function tr(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function tn(t, e, r) {
        return (
          (t < 60
            ? e + ((r - e) * t) / 60
            : t < 180
            ? r
            : t < 240
            ? e + ((r - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      function to(t, e, r, n, o) {
        var a = t * t,
          i = a * t;
        return (
          ((1 - 3 * t + 3 * a - i) * e +
            (4 - 6 * a + 3 * i) * r +
            (1 + 3 * t + 3 * a - 3 * i) * n +
            i * o) /
          6
        );
      }
      S(M, F, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: R,
        formatHex: R,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Q(this).formatHsl();
        },
        formatRgb: B,
        toString: B,
      }),
        S(
          $,
          W,
          P(M, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new $(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new $(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new $(Y(this.r), Y(this.g), Y(this.b), K(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: q,
            formatHex: q,
            formatHex8: function () {
              return `#${G(this.r)}${G(this.g)}${G(this.b)}${G(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: X,
            toString: X,
          })
        ),
        S(
          tt,
          function (t, e, r, n) {
            return 1 == arguments.length
              ? Q(t)
              : new tt(t, e, r, null == n ? 1 : n);
          },
          P(M, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                o = 2 * r - n;
              return new $(
                tn(t >= 240 ? t - 240 : t + 120, o, n),
                tn(t, o, n),
                tn(t < 120 ? t + 240 : t - 120, o, n),
                this.opacity
              );
            },
            clamp() {
              return new tt(
                te(this.h),
                tr(this.s),
                tr(this.l),
                K(this.opacity)
              );
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = K(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${te(this.h)}, ${
                100 * tr(this.s)
              }%, ${100 * tr(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
      let ta = (t) => () => t;
      function ti(t, e) {
        var r,
          n,
          o = e - t;
        return o
          ? ((r = t),
            (n = o),
            function (t) {
              return r + t * n;
            })
          : ta(isNaN(t) ? e : t);
      }
      let tc = (function t(e) {
        var r,
          n =
            1 == (r = +e)
              ? ti
              : function (t, e) {
                  var n, o, a;
                  return e - t
                    ? ((n = t),
                      (o = e),
                      (n = Math.pow(n, (a = r))),
                      (o = Math.pow(o, a) - n),
                      (a = 1 / a),
                      function (t) {
                        return Math.pow(n + t * o, a);
                      })
                    : ta(isNaN(t) ? e : t);
                };
        function o(t, e) {
          var r = n((t = W(t)).r, (e = W(e)).r),
            o = n(t.g, e.g),
            a = n(t.b, e.b),
            i = ti(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = o(e)),
              (t.b = a(e)),
              (t.opacity = i(e)),
              t + ""
            );
          };
        }
        return (o.gamma = t), o;
      })(1);
      function tl(t) {
        return function (e) {
          var r,
            n,
            o = e.length,
            a = Array(o),
            i = Array(o),
            c = Array(o);
          for (r = 0; r < o; ++r)
            (n = W(e[r])),
              (a[r] = n.r || 0),
              (i[r] = n.g || 0),
              (c[r] = n.b || 0);
          return (
            (a = t(a)),
            (i = t(i)),
            (c = t(c)),
            (n.opacity = 1),
            function (t) {
              return (n.r = a(t)), (n.g = i(t)), (n.b = c(t)), n + "";
            }
          );
        };
      }
      tl(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            o = t[n],
            a = t[n + 1],
            i = n > 0 ? t[n - 1] : 2 * o - a,
            c = n < e - 1 ? t[n + 2] : 2 * a - o;
          return to((r - n / e) * e, i, o, a, c);
        };
      }),
        tl(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              o = t[(n + e - 1) % e],
              a = t[n % e],
              i = t[(n + 1) % e],
              c = t[(n + 2) % e];
            return to((r - n / e) * e, o, a, i, c);
          };
        });
      function tu(t, e) {
        return (
          (t *= 1),
          (e *= 1),
          function (r) {
            return t * (1 - r) + e * r;
          }
        );
      }
      var ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        tf = RegExp(ts.source, "g");
      function tp(t, e) {
        var r,
          n,
          o = typeof e;
        return null == e || "boolean" === o
          ? ta(e)
          : ("number" === o
              ? tu
              : "string" === o
              ? (n = F(e))
                ? ((e = n), tc)
                : function (t, e) {
                    var r,
                      n,
                      o,
                      a,
                      i,
                      c = (ts.lastIndex = tf.lastIndex = 0),
                      l = -1,
                      u = [],
                      s = [];
                    for (
                      t += "", e += "";
                      (o = ts.exec(t)) && (a = tf.exec(e));

                    )
                      (i = a.index) > c &&
                        ((i = e.slice(c, i)),
                        u[l] ? (u[l] += i) : (u[++l] = i)),
                        (o = o[0]) === (a = a[0])
                          ? u[l]
                            ? (u[l] += a)
                            : (u[++l] = a)
                          : ((u[++l] = null), s.push({ i: l, x: tu(o, a) })),
                        (c = tf.lastIndex);
                    return (
                      c < e.length &&
                        ((i = e.slice(c)), u[l] ? (u[l] += i) : (u[++l] = i)),
                      u.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (t) {
                              return r(t) + "";
                            })
                          : ((n = e),
                            function () {
                              return n;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var r, n = 0; n < e; ++n)
                              u[(r = s[n]).i] = r.x(t);
                            return u.join("");
                          })
                    );
                  }
              : e instanceof F
              ? tc
              : e instanceof Date
              ? function (t, e) {
                  var r = new Date();
                  return (
                    (t *= 1),
                    (e *= 1),
                    function (n) {
                      return r.setTime(t * (1 - n) + e * n), r;
                    }
                  );
                }
              : !ArrayBuffer.isView((r = e)) || r instanceof DataView
              ? Array.isArray(e)
                ? function (t, e) {
                    var r,
                      n = e ? e.length : 0,
                      o = t ? Math.min(n, t.length) : 0,
                      a = Array(o),
                      i = Array(n);
                    for (r = 0; r < o; ++r) a[r] = tp(t[r], e[r]);
                    for (; r < n; ++r) i[r] = e[r];
                    return function (t) {
                      for (r = 0; r < o; ++r) i[r] = a[r](t);
                      return i;
                    };
                  }
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? function (t, e) {
                    var r,
                      n = {},
                      o = {};
                    for (r in ((null === t || "object" != typeof t) && (t = {}),
                    (null === e || "object" != typeof e) && (e = {}),
                    e))
                      r in t ? (n[r] = tp(t[r], e[r])) : (o[r] = e[r]);
                    return function (t) {
                      for (r in n) o[r] = n[r](t);
                      return o;
                    };
                  }
                : tu
              : function (t, e) {
                  e || (e = []);
                  var r,
                    n = t ? Math.min(e.length, t.length) : 0,
                    o = e.slice();
                  return function (a) {
                    for (r = 0; r < n; ++r) o[r] = t[r] * (1 - a) + e[r] * a;
                    return o;
                  };
                })(t, e);
      }
      function th(t, e) {
        return (
          (t *= 1),
          (e *= 1),
          function (r) {
            return Math.round(t * (1 - r) + e * r);
          }
        );
      }
      function td(t) {
        return +t;
      }
      var ty = [0, 1];
      function tv(t) {
        return t;
      }
      function tm(t, e) {
        var r;
        return (e -= t *= 1)
          ? function (r) {
              return (r - t) / e;
            }
          : ((r = isNaN(e) ? NaN : 0.5),
            function () {
              return r;
            });
      }
      function tb(t, e, r) {
        var n = t[0],
          o = t[1],
          a = e[0],
          i = e[1];
        return (
          o < n
            ? ((n = tm(o, n)), (a = r(i, a)))
            : ((n = tm(n, o)), (a = r(a, i))),
          function (t) {
            return a(n(t));
          }
        );
      }
      function tg(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          o = Array(n),
          a = Array(n),
          i = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++i < n;

        )
          (o[i] = tm(t[i], t[i + 1])), (a[i] = r(e[i], e[i + 1]));
        return function (e) {
          var r = E(t, e, 1, n) - 1;
          return a[r](o[r](e));
        };
      }
      function tx(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function tO() {
        var t,
          e,
          r,
          n,
          o,
          a,
          i = ty,
          c = ty,
          l = tp,
          u = tv;
        function s() {
          var t,
            e,
            r,
            l = Math.min(i.length, c.length);
          return (
            u !== tv &&
              ((t = i[0]),
              (e = i[l - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (u = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = l > 2 ? tg : tb),
            (o = a = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e *= 1))
            ? r
            : (o || (o = n(i.map(t), c, l)))(t(u(e)));
        }
        return (
          (f.invert = function (r) {
            return u(e((a || (a = n(c, i.map(t), tu)))(r)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((i = Array.from(t, td)), s())
              : i.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
          }),
          (f.rangeRound = function (t) {
            return (c = Array.from(t)), (l = th), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((u = !!t || tv), s()) : u !== tv;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((l = t), s()) : l;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((r = t), f) : r;
          }),
          function (r, n) {
            return (t = r), (e = n), s();
          }
        );
      }
      function tw() {
        return tO()(tv, tv);
      }
      var tA = r(28749),
        tj =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function tE(t) {
        var e;
        if (!(e = tj.exec(t))) throw Error("invalid format: " + t);
        return new tS({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function tS(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function tP(t, e) {
        if (
          (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      function tM(t) {
        return (t = tP(Math.abs(t))) ? t[1] : NaN;
      }
      function tk(t, e) {
        var r = tP(t, e);
        if (!r) return t + "";
        var n = r[0],
          o = r[1];
        return o < 0
          ? "0." + Array(-o).join("0") + n
          : n.length > o + 1
          ? n.slice(0, o + 1) + "." + n.slice(o + 1)
          : n + Array(o - n.length + 2).join("0");
      }
      (tE.prototype = tS.prototype),
        (tS.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      let t_ = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => tk(100 * t, e),
        r: tk,
        s: function (t, e) {
          var r = tP(t, e);
          if (!r) return t + "";
          var o = r[0],
            a = r[1],
            i = a - (n = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            c = o.length;
          return i === c
            ? o
            : i > c
            ? o + Array(i - c + 1).join("0")
            : i > 0
            ? o.slice(0, i) + "." + o.slice(i)
            : "0." + Array(1 - i).join("0") + tP(t, Math.max(0, e + i - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function tT(t) {
        return t;
      }
      var tC = Array.prototype.map,
        tI = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function tZ(t, e, r, n) {
        var o,
          c,
          l,
          u = b(t, e, r);
        switch ((n = tE(null == n ? ",f" : n)).type) {
          case "s":
            var s = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (l = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(tM(s) / 3))) -
                      tM(Math.abs(u))
                  ))
                ) ||
                (n.precision = l),
              i(n, s)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (l =
                  Math.max(
                    0,
                    tM(
                      Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                        (o = Math.abs((o = u)))
                    ) - tM(o)
                  ) + 1)
              ) ||
              (n.precision = l - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN((l = Math.max(0, -tM(Math.abs(u))))) ||
              (n.precision = l - ("%" === n.type) * 2);
        }
        return a(n);
      }
      function tD(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return v(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return tZ(n[0], n[n.length - 1], null == t ? 10 : t, r);
          }),
          (t.nice = function (r) {
            null == r && (r = 10);
            var n,
              o,
              a = e(),
              i = 0,
              c = a.length - 1,
              l = a[i],
              u = a[c],
              s = 10;
            for (
              u < l && ((o = l), (l = u), (u = o), (o = i), (i = c), (c = o));
              s-- > 0;

            ) {
              if ((o = m(l, u, r)) === n) return (a[i] = l), (a[c] = u), e(a);
              if (o > 0)
                (l = Math.floor(l / o) * o), (u = Math.ceil(u / o) * o);
              else if (o < 0)
                (l = Math.ceil(l * o) / o), (u = Math.floor(u * o) / o);
              else break;
              n = o;
            }
            return t;
          }),
          t
        );
      }
      function tN() {
        var t = tw();
        return (
          (t.copy = function () {
            return tx(t, tN());
          }),
          tA.C.apply(t, arguments),
          tD(t)
        );
      }
      function tL(t, e) {
        t = t.slice();
        var r,
          n = 0,
          o = t.length - 1,
          a = t[n],
          i = t[o];
        return (
          i < a && ((r = n), (n = o), (o = r), (r = a), (a = i), (i = r)),
          (t[n] = e.floor(a)),
          (t[o] = e.ceil(i)),
          t
        );
      }
      function tH(t) {
        return Math.log(t);
      }
      function tV(t) {
        return Math.exp(t);
      }
      function tR(t) {
        return -Math.log(-t);
      }
      function tB(t) {
        return -Math.exp(-t);
      }
      function tF(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function tz(t) {
        return (e, r) => -t(-e, r);
      }
      function tU(t) {
        let e,
          r,
          n = t(tH, tV),
          o = n.domain,
          i = 10;
        function c() {
          var a, c;
          return (
            (e =
              (a = i) === Math.E
                ? Math.log
                : (10 === a && Math.log10) ||
                  (2 === a && Math.log2) ||
                  ((a = Math.log(a)), (t) => Math.log(t) / a)),
            (r =
              10 === (c = i)
                ? tF
                : c === Math.E
                ? Math.exp
                : (t) => Math.pow(c, t)),
            o()[0] < 0 ? ((e = tz(e)), (r = tz(r)), t(tR, tB)) : t(tH, tV),
            n
          );
        }
        return (
          (n.base = function (t) {
            return arguments.length ? ((i = +t), c()) : i;
          }),
          (n.domain = function (t) {
            return arguments.length ? (o(t), c()) : o();
          }),
          (n.ticks = (t) => {
            let n,
              a,
              c = o(),
              l = c[0],
              u = c[c.length - 1],
              s = u < l;
            s && ([l, u] = [u, l]);
            let f = e(l),
              p = e(u),
              h = null == t ? 10 : +t,
              d = [];
            if (!(i % 1) && p - f < h) {
              if (((f = Math.floor(f)), (p = Math.ceil(p)), l > 0)) {
                for (; f <= p; ++f)
                  for (n = 1; n < i; ++n)
                    if (!((a = f < 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > u) break;
                      d.push(a);
                    }
              } else
                for (; f <= p; ++f)
                  for (n = i - 1; n >= 1; --n)
                    if (!((a = f > 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > u) break;
                      d.push(a);
                    }
              2 * d.length < h && (d = v(l, u, h));
            } else d = v(f, p, Math.min(p - f, h)).map(r);
            return s ? d.reverse() : d;
          }),
          (n.tickFormat = (t, o) => {
            if (
              (null == t && (t = 10),
              null == o && (o = 10 === i ? "s" : ","),
              "function" != typeof o &&
                (i % 1 || null != (o = tE(o)).precision || (o.trim = !0),
                (o = a(o))),
              t === 1 / 0)
            )
              return o;
            let c = Math.max(1, (i * t) / n.ticks().length);
            return (t) => {
              let n = t / r(Math.round(e(t)));
              return n * i < i - 0.5 && (n *= i), n <= c ? o(t) : "";
            };
          }),
          (n.nice = () =>
            o(
              tL(o(), {
                floor: (t) => r(Math.floor(e(t))),
                ceil: (t) => r(Math.ceil(e(t))),
              })
            )),
          n
        );
      }
      function tW(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function t$(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function tq(t) {
        var e = 1,
          r = t(tW(1), t$(e));
        return (
          (r.constant = function (r) {
            return arguments.length ? t(tW((e = +r)), t$(e)) : e;
          }),
          tD(r)
        );
      }
      (a = (o = (function (t) {
        var e,
          r,
          o,
          a =
            void 0 === t.grouping || void 0 === t.thousands
              ? tT
              : ((e = tC.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var o = t.length, a = [], i = 0, c = e[0], l = 0;
                    o > 0 &&
                    c > 0 &&
                    (l + c + 1 > n && (c = Math.max(1, n - l)),
                    a.push(t.substring((o -= c), o + c)),
                    !((l += c + 1) > n));

                  )
                    c = e[(i = (i + 1) % e.length)];
                  return a.reverse().join(r);
                }),
          i = void 0 === t.currency ? "" : t.currency[0] + "",
          c = void 0 === t.currency ? "" : t.currency[1] + "",
          l = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? tT
              : ((o = tC.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return o[+t];
                  });
                }),
          s = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          p = void 0 === t.nan ? "NaN" : t.nan + "";
        function h(t) {
          var e = (t = tE(t)).fill,
            r = t.align,
            o = t.sign,
            h = t.symbol,
            d = t.zero,
            y = t.width,
            v = t.comma,
            m = t.precision,
            b = t.trim,
            g = t.type;
          "n" === g
            ? ((v = !0), (g = "g"))
            : t_[g] || (void 0 === m && (m = 12), (b = !0), (g = "g")),
            (d || ("0" === e && "=" === r)) && ((d = !0), (e = "0"), (r = "="));
          var x =
              "$" === h
                ? i
                : "#" === h && /[boxX]/.test(g)
                ? "0" + g.toLowerCase()
                : "",
            O = "$" === h ? c : /[%p]/.test(g) ? s : "",
            w = t_[g],
            A = /[defgprs%]/.test(g);
          function j(t) {
            var i,
              c,
              s,
              h = x,
              j = O;
            if ("c" === g) (j = w(t) + j), (t = "");
            else {
              var E = (t *= 1) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? p : w(Math.abs(t), m)),
                b &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, o = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          o = e = n;
                          break;
                        case "0":
                          0 === o && (o = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                E && 0 == +t && "+" !== o && (E = !1),
                (h =
                  (E ? ("(" === o ? o : f) : "-" === o || "(" === o ? "" : o) +
                  h),
                (j =
                  ("s" === g ? tI[8 + n / 3] : "") +
                  j +
                  (E && "(" === o ? ")" : "")),
                A)
              ) {
                for (i = -1, c = t.length; ++i < c; )
                  if (48 > (s = t.charCodeAt(i)) || s > 57) {
                    (j = (46 === s ? l + t.slice(i + 1) : t.slice(i)) + j),
                      (t = t.slice(0, i));
                    break;
                  }
              }
            }
            v && !d && (t = a(t, 1 / 0));
            var S = h.length + t.length + j.length,
              P = S < y ? Array(y - S + 1).join(e) : "";
            switch (
              (v &&
                d &&
                ((t = a(P + t, P.length ? y - j.length : 1 / 0)), (P = "")),
              r)
            ) {
              case "<":
                t = h + t + j + P;
                break;
              case "=":
                t = h + P + t + j;
                break;
              case "^":
                t = P.slice(0, (S = P.length >> 1)) + h + t + j + P.slice(S);
                break;
              default:
                t = P + h + t + j;
            }
            return u(t);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(g)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
            (j.toString = function () {
              return t + "";
            }),
            j
          );
        }
        return {
          format: h,
          formatPrefix: function (t, e) {
            var r = h((((t = tE(t)).type = "f"), t)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(tM(e) / 3))),
              o = Math.pow(10, -n),
              a = tI[8 + n / 3];
            return function (t) {
              return r(o * t) + a;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (i = o.formatPrefix);
      var tX = r(95442);
      function tK(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function tY(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function tG(t) {
        return t < 0 ? -t * t : t * t;
      }
      function tJ(t) {
        var e = t(tv, tv),
          r = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (r = +e)
                ? t(tv, tv)
                : 0.5 === r
                ? t(tY, tG)
                : t(tK(r), tK(1 / r))
              : r;
          }),
          tD(e)
        );
      }
      function tQ() {
        var t = tJ(tO());
        return (
          (t.copy = function () {
            return tx(t, tQ()).exponent(t.exponent());
          }),
          tA.C.apply(t, arguments),
          t
        );
      }
      function t0() {
        return tQ.apply(null, arguments).exponent(0.5);
      }
      function t1(t) {
        return Math.sign(t) * t * t;
      }
      function t2(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r < o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function t8(t, e) {
        let r;
        if (void 0 === e)
          for (let e of t)
            null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r > o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function t4(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : +(t > e))
        );
      }
      function t6(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      let t3 = new Date(),
        t5 = new Date();
      function t7(t, e, r, n) {
        function o(e) {
          return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
          (o.round = (t) => {
            let e = o(t),
              r = o.ceil(t);
            return t - e < r - t ? e : r;
          }),
          (o.offset = (t, r) => (
            e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
          )),
          (o.range = (r, n, a) => {
            let i,
              c = [];
            if (
              ((r = o.ceil(r)),
              (a = null == a ? 1 : Math.floor(a)),
              !(r < n) || !(a > 0))
            )
              return c;
            do c.push((i = new Date(+r))), e(r, a), t(r);
            while (i < r && r < n);
            return c;
          }),
          (o.filter = (r) =>
            t7(
              (e) => {
                if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
              },
              (t, n) => {
                if (t >= t)
                  if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                  else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
              }
            )),
          r &&
            ((o.count = (e, n) => (
              t3.setTime(+e),
              t5.setTime(+n),
              t(t3),
              t(t5),
              Math.floor(r(t3, t5))
            )),
            (o.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? o.filter(
                      n ? (e) => n(e) % t == 0 : (e) => o.count(0, e) % t == 0
                    )
                  : o
                : null)),
          o
        );
      }
      let t9 = t7(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      (t9.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t > 1
            ? t7(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t
              )
            : t9
          : null),
        t9.range;
      let et = t7(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, e) => {
          t.setTime(+t + 1e3 * e);
        },
        (t, e) => (e - t) / 1e3,
        (t) => t.getUTCSeconds()
      );
      et.range;
      let ee = t7(
        (t) => {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getMinutes()
      );
      ee.range;
      let er = t7(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getUTCMinutes()
      );
      er.range;
      let en = t7(
        (t) => {
          t.setTime(
            t -
              t.getMilliseconds() -
              1e3 * t.getSeconds() -
              6e4 * t.getMinutes()
          );
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getHours()
      );
      en.range;
      let eo = t7(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getUTCHours()
      );
      eo.range;
      let ea = t7(
        (t) => t.setHours(0, 0, 0, 0),
        (t, e) => t.setDate(t.getDate() + e),
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          864e5,
        (t) => t.getDate() - 1
      );
      ea.range;
      let ei = t7(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => t.getUTCDate() - 1
      );
      ei.range;
      let ec = t7(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => Math.floor(t / 864e5)
      );
      function el(t) {
        return t7(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
            6048e5
        );
      }
      ec.range;
      let eu = el(0),
        es = el(1),
        ef = el(2),
        ep = el(3),
        eh = el(4),
        ed = el(5),
        ey = el(6);
      function ev(t) {
        return t7(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / 6048e5
        );
      }
      eu.range, es.range, ef.range, ep.range, eh.range, ed.range, ey.range;
      let em = ev(0),
        eb = ev(1),
        eg = ev(2),
        ex = ev(3),
        eO = ev(4),
        ew = ev(5),
        eA = ev(6);
      em.range, eb.range, eg.range, ex.range, eO.range, ew.range, eA.range;
      let ej = t7(
        (t) => {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setMonth(t.getMonth() + e);
        },
        (t, e) =>
          e.getMonth() -
          t.getMonth() +
          (e.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      ej.range;
      let eE = t7(
        (t) => {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        (t, e) =>
          e.getUTCMonth() -
          t.getUTCMonth() +
          (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      eE.range;
      let eS = t7(
        (t) => {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setFullYear(t.getFullYear() + e);
        },
        (t, e) => e.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      (eS.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t7(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setFullYear(e.getFullYear() + r * t);
              }
            )
          : null),
        eS.range;
      let eP = t7(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      function eM(t, e, r, n, o, a) {
        let i = [
          [et, 1, 1e3],
          [et, 5, 5e3],
          [et, 15, 15e3],
          [et, 30, 3e4],
          [a, 1, 6e4],
          [a, 5, 3e5],
          [a, 15, 9e5],
          [a, 30, 18e5],
          [o, 1, 36e5],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [n, 1, 864e5],
          [n, 2, 1728e5],
          [r, 1, 6048e5],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function c(e, r, n) {
          let o = Math.abs(r - e) / n,
            a = O(([, , t]) => t).right(i, o);
          if (a === i.length) return t.every(b(e / 31536e6, r / 31536e6, n));
          if (0 === a) return t9.every(Math.max(b(e, r, n), 1));
          let [c, l] = i[o / i[a - 1][2] < i[a][2] / o ? a - 1 : a];
          return c.every(l);
        }
        return [
          function (t, e, r) {
            let n = e < t;
            n && ([t, e] = [e, t]);
            let o = r && "function" == typeof r.range ? r : c(t, e, r),
              a = o ? o.range(t, +e + 1) : [];
            return n ? a.reverse() : a;
          },
          c,
        ];
      }
      (eP.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t7(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setUTCFullYear(e.getUTCFullYear() + r * t);
              }
            )
          : null),
        eP.range;
      let [ek, e_] = eM(eP, eE, em, ec, eo, er),
        [eT, eC] = eM(eS, ej, eu, ea, en, ee);
      function eI(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function eZ(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function eD(t, e, r) {
        return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var eN = { "-": "", _: " ", 0: "0" },
        eL = /^\s*\d+/,
        eH = /^%/,
        eV = /[\\^$*+?|[\]().{}]/g;
      function eR(t, e, r) {
        var n = t < 0 ? "-" : "",
          o = (n ? -t : t) + "",
          a = o.length;
        return n + (a < r ? Array(r - a + 1).join(e) + o : o);
      }
      function eB(t) {
        return t.replace(eV, "\\$&");
      }
      function eF(t) {
        return RegExp("^(?:" + t.map(eB).join("|") + ")", "i");
      }
      function ez(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function eU(t, e, r) {
        var n = eL.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function eW(t, e, r) {
        var n = eL.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function e$(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function eq(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function eX(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function eK(t, e, r) {
        var n = eL.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function eY(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n
          ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
          : -1;
      }
      function eG(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n
          ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
          : -1;
      }
      function eJ(t, e, r) {
        var n = eL.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function eQ(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
      }
      function e0(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.d = +n[0]), r + n[0].length) : -1;
      }
      function e1(t, e, r) {
        var n = eL.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function e2(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function e8(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function e4(t, e, r) {
        var n = eL.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function e6(t, e, r) {
        var n = eL.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function e3(t, e, r) {
        var n = eL.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function e5(t, e, r) {
        var n = eH.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function e7(t, e, r) {
        var n = eL.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function e9(t, e, r) {
        var n = eL.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function rt(t, e) {
        return eR(t.getDate(), e, 2);
      }
      function re(t, e) {
        return eR(t.getHours(), e, 2);
      }
      function rr(t, e) {
        return eR(t.getHours() % 12 || 12, e, 2);
      }
      function rn(t, e) {
        return eR(1 + ea.count(eS(t), t), e, 3);
      }
      function ro(t, e) {
        return eR(t.getMilliseconds(), e, 3);
      }
      function ra(t, e) {
        return ro(t, e) + "000";
      }
      function ri(t, e) {
        return eR(t.getMonth() + 1, e, 2);
      }
      function rc(t, e) {
        return eR(t.getMinutes(), e, 2);
      }
      function rl(t, e) {
        return eR(t.getSeconds(), e, 2);
      }
      function ru(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function rs(t, e) {
        return eR(eu.count(eS(t) - 1, t), e, 2);
      }
      function rf(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? eh(t) : eh.ceil(t);
      }
      function rp(t, e) {
        return (
          (t = rf(t)), eR(eh.count(eS(t), t) + (4 === eS(t).getDay()), e, 2)
        );
      }
      function rh(t) {
        return t.getDay();
      }
      function rd(t, e) {
        return eR(es.count(eS(t) - 1, t), e, 2);
      }
      function ry(t, e) {
        return eR(t.getFullYear() % 100, e, 2);
      }
      function rv(t, e) {
        return eR((t = rf(t)).getFullYear() % 100, e, 2);
      }
      function rm(t, e) {
        return eR(t.getFullYear() % 1e4, e, 4);
      }
      function rb(t, e) {
        var r = t.getDay();
        return eR(
          (t = r >= 4 || 0 === r ? eh(t) : eh.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function rg(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          eR((e / 60) | 0, "0", 2) +
          eR(e % 60, "0", 2)
        );
      }
      function rx(t, e) {
        return eR(t.getUTCDate(), e, 2);
      }
      function rO(t, e) {
        return eR(t.getUTCHours(), e, 2);
      }
      function rw(t, e) {
        return eR(t.getUTCHours() % 12 || 12, e, 2);
      }
      function rA(t, e) {
        return eR(1 + ei.count(eP(t), t), e, 3);
      }
      function rj(t, e) {
        return eR(t.getUTCMilliseconds(), e, 3);
      }
      function rE(t, e) {
        return rj(t, e) + "000";
      }
      function rS(t, e) {
        return eR(t.getUTCMonth() + 1, e, 2);
      }
      function rP(t, e) {
        return eR(t.getUTCMinutes(), e, 2);
      }
      function rM(t, e) {
        return eR(t.getUTCSeconds(), e, 2);
      }
      function rk(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function r_(t, e) {
        return eR(em.count(eP(t) - 1, t), e, 2);
      }
      function rT(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? eO(t) : eO.ceil(t);
      }
      function rC(t, e) {
        return (
          (t = rT(t)), eR(eO.count(eP(t), t) + (4 === eP(t).getUTCDay()), e, 2)
        );
      }
      function rI(t) {
        return t.getUTCDay();
      }
      function rZ(t, e) {
        return eR(eb.count(eP(t) - 1, t), e, 2);
      }
      function rD(t, e) {
        return eR(t.getUTCFullYear() % 100, e, 2);
      }
      function rN(t, e) {
        return eR((t = rT(t)).getUTCFullYear() % 100, e, 2);
      }
      function rL(t, e) {
        return eR(t.getUTCFullYear() % 1e4, e, 4);
      }
      function rH(t, e) {
        var r = t.getUTCDay();
        return eR(
          (t = r >= 4 || 0 === r ? eO(t) : eO.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function rV() {
        return "+0000";
      }
      function rR() {
        return "%";
      }
      function rB(t) {
        return +t;
      }
      function rF(t) {
        return Math.floor(t / 1e3);
      }
      function rz(t) {
        return new Date(t);
      }
      function rU(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function rW(t, e, r, n, o, a, i, c, l, u) {
        var s = tw(),
          f = s.invert,
          p = s.domain,
          h = u(".%L"),
          d = u(":%S"),
          y = u("%I:%M"),
          v = u("%I %p"),
          m = u("%a %d"),
          b = u("%b %d"),
          g = u("%B"),
          x = u("%Y");
        function O(t) {
          return (
            l(t) < t
              ? h
              : c(t) < t
              ? d
              : i(t) < t
              ? y
              : a(t) < t
              ? v
              : n(t) < t
              ? o(t) < t
                ? m
                : b
              : r(t) < t
              ? g
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, rU)) : p().map(rz);
          }),
          (s.ticks = function (e) {
            var r = p();
            return t(r[0], r[r.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? O : u(e);
          }),
          (s.nice = function (t) {
            var r = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
              t ? p(tL(r, t)) : s
            );
          }),
          (s.copy = function () {
            return tx(s, rW(t, e, r, n, o, a, i, c, l, u));
          }),
          s
        );
      }
      function r$() {
        return tA.C.apply(
          rW(eT, eC, eS, ej, eu, ea, en, ee, et, l).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function rq() {
        return tA.C.apply(
          rW(ek, e_, eP, eE, em, ei, eo, er, et, u).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function rX() {
        var t,
          e,
          r,
          n,
          o,
          a = 0,
          i = 1,
          c = tv,
          l = !1;
        function u(e) {
          return null == e || isNaN((e *= 1))
            ? o
            : c(
                0 === r
                  ? 0.5
                  : ((e = (n(e) - t) * r), l ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var r, n;
            return arguments.length
              ? (([r, n] = e), (c = t(r, n)), u)
              : [c(0), c(1)];
          };
        }
        return (
          (u.domain = function (o) {
            return arguments.length
              ? (([a, i] = o),
                (t = n((a *= 1))),
                (e = n((i *= 1))),
                (r = t === e ? 0 : 1 / (e - t)),
                u)
              : [a, i];
          }),
          (u.clamp = function (t) {
            return arguments.length ? ((l = !!t), u) : l;
          }),
          (u.interpolator = function (t) {
            return arguments.length ? ((c = t), u) : c;
          }),
          (u.range = s(tp)),
          (u.rangeRound = s(th)),
          (u.unknown = function (t) {
            return arguments.length ? ((o = t), u) : o;
          }),
          function (o) {
            return (
              (n = o),
              (t = o(a)),
              (e = o(i)),
              (r = t === e ? 0 : 1 / (e - t)),
              u
            );
          }
        );
      }
      function rK(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function rY() {
        var t = tJ(rX());
        return (
          (t.copy = function () {
            return rK(t, rY()).exponent(t.exponent());
          }),
          tA.K.apply(t, arguments)
        );
      }
      function rG() {
        return rY.apply(null, arguments).exponent(0.5);
      }
      function rJ() {
        var t,
          e,
          r,
          n,
          o,
          a,
          i,
          c = 0,
          l = 0.5,
          u = 1,
          s = 1,
          f = tv,
          p = !1;
        function h(t) {
          return isNaN((t *= 1))
            ? i
            : ((t = 0.5 + ((t = +a(t)) - e) * (s * t < s * e ? n : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var r, n, o;
            return arguments.length
              ? (([r, n, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = tp));
                  for (
                    var r = 0,
                      n = e.length - 1,
                      o = e[0],
                      a = Array(n < 0 ? 0 : n);
                    r < n;

                  )
                    a[r] = t(o, (o = e[++r]));
                  return function (t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                    return a[e](t - e);
                  };
                })(t, [r, n, o])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (i) {
            return arguments.length
              ? (([c, l, u] = i),
                (t = a((c *= 1))),
                (e = a((l *= 1))),
                (r = a((u *= 1))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (o = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                h)
              : [c, l, u];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(tp)),
          (h.rangeRound = d(th)),
          (h.unknown = function (t) {
            return arguments.length ? ((i = t), h) : i;
          }),
          function (i) {
            return (
              (a = i),
              (t = i(c)),
              (e = i(l)),
              (r = i(u)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (o = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function rQ() {
        var t = tJ(rJ());
        return (
          (t.copy = function () {
            return rK(t, rQ()).exponent(t.exponent());
          }),
          tA.K.apply(t, arguments)
        );
      }
      function r0() {
        return rQ.apply(null, arguments).exponent(0.5);
      }
      function r1(t, e) {
        if ((o = t.length) > 1)
          for (var r, n, o, a = 1, i = t[e[0]], c = i.length; a < o; ++a)
            for (n = i, i = t[e[a]], r = 0; r < c; ++r)
              i[r][1] += i[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      (l = (c = (function (t) {
        var e = t.dateTime,
          r = t.date,
          n = t.time,
          o = t.periods,
          a = t.days,
          i = t.shortDays,
          c = t.months,
          l = t.shortMonths,
          u = eF(o),
          s = ez(o),
          f = eF(a),
          p = ez(a),
          h = eF(i),
          d = ez(i),
          y = eF(c),
          v = ez(c),
          m = eF(l),
          b = ez(l),
          g = {
            a: function (t) {
              return i[t.getDay()];
            },
            A: function (t) {
              return a[t.getDay()];
            },
            b: function (t) {
              return l[t.getMonth()];
            },
            B: function (t) {
              return c[t.getMonth()];
            },
            c: null,
            d: rt,
            e: rt,
            f: ra,
            g: rv,
            G: rb,
            H: re,
            I: rr,
            j: rn,
            L: ro,
            m: ri,
            M: rc,
            p: function (t) {
              return o[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: rB,
            s: rF,
            S: rl,
            u: ru,
            U: rs,
            V: rp,
            w: rh,
            W: rd,
            x: null,
            X: null,
            y: ry,
            Y: rm,
            Z: rg,
            "%": rR,
          },
          x = {
            a: function (t) {
              return i[t.getUTCDay()];
            },
            A: function (t) {
              return a[t.getUTCDay()];
            },
            b: function (t) {
              return l[t.getUTCMonth()];
            },
            B: function (t) {
              return c[t.getUTCMonth()];
            },
            c: null,
            d: rx,
            e: rx,
            f: rE,
            g: rN,
            G: rH,
            H: rO,
            I: rw,
            j: rA,
            L: rj,
            m: rS,
            M: rP,
            p: function (t) {
              return o[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: rB,
            s: rF,
            S: rM,
            u: rk,
            U: r_,
            V: rC,
            w: rI,
            W: rZ,
            x: null,
            X: null,
            y: rD,
            Y: rL,
            Z: rV,
            "%": rR,
          },
          O = {
            a: function (t, e, r) {
              var n = h.exec(e.slice(r));
              return n
                ? ((t.w = d.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            A: function (t, e, r) {
              var n = f.exec(e.slice(r));
              return n
                ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            b: function (t, e, r) {
              var n = m.exec(e.slice(r));
              return n
                ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            B: function (t, e, r) {
              var n = y.exec(e.slice(r));
              return n
                ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            c: function (t, r, n) {
              return j(t, e, r, n);
            },
            d: e0,
            e: e0,
            f: e3,
            g: eY,
            G: eK,
            H: e2,
            I: e2,
            j: e1,
            L: e6,
            m: eQ,
            M: e8,
            p: function (t, e, r) {
              var n = u.exec(e.slice(r));
              return n
                ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                : -1;
            },
            q: eJ,
            Q: e7,
            s: e9,
            S: e4,
            u: eW,
            U: e$,
            V: eq,
            w: eU,
            W: eX,
            x: function (t, e, n) {
              return j(t, r, e, n);
            },
            X: function (t, e, r) {
              return j(t, n, e, r);
            },
            y: eY,
            Y: eK,
            Z: eG,
            "%": e5,
          };
        function w(t, e) {
          return function (r) {
            var n,
              o,
              a,
              i = [],
              c = -1,
              l = 0,
              u = t.length;
            for (r instanceof Date || (r = new Date(+r)); ++c < u; )
              37 === t.charCodeAt(c) &&
                (i.push(t.slice(l, c)),
                null != (o = eN[(n = t.charAt(++c))])
                  ? (n = t.charAt(++c))
                  : (o = "e" === n ? " " : "0"),
                (a = e[n]) && (n = a(r, o)),
                i.push(n),
                (l = c + 1));
            return i.push(t.slice(l, c)), i.join("");
          };
        }
        function A(t, e) {
          return function (r) {
            var n,
              o,
              a = eD(1900, void 0, 1);
            if (j(a, t, (r += ""), 0) != r.length) return null;
            if ("Q" in a) return new Date(a.Q);
            if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
            if (
              (!e || "Z" in a || (a.Z = 0),
              "p" in a && (a.H = (a.H % 12) + 12 * a.p),
              void 0 === a.m && (a.m = "q" in a ? a.q : 0),
              "V" in a)
            ) {
              if (a.V < 1 || a.V > 53) return null;
              "w" in a || (a.w = 1),
                "Z" in a
                  ? ((n =
                      (o = (n = eZ(eD(a.y, 0, 1))).getUTCDay()) > 4 || 0 === o
                        ? eb.ceil(n)
                        : eb(n)),
                    (n = ei.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getUTCFullYear()),
                    (a.m = n.getUTCMonth()),
                    (a.d = n.getUTCDate() + ((a.w + 6) % 7)))
                  : ((n =
                      (o = (n = eI(eD(a.y, 0, 1))).getDay()) > 4 || 0 === o
                        ? es.ceil(n)
                        : es(n)),
                    (n = ea.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getFullYear()),
                    (a.m = n.getMonth()),
                    (a.d = n.getDate() + ((a.w + 6) % 7)));
            } else
              ("W" in a || "U" in a) &&
                ("w" in a || (a.w = "u" in a ? a.u % 7 : +("W" in a)),
                (o =
                  "Z" in a
                    ? eZ(eD(a.y, 0, 1)).getUTCDay()
                    : eI(eD(a.y, 0, 1)).getDay()),
                (a.m = 0),
                (a.d =
                  "W" in a
                    ? ((a.w + 6) % 7) + 7 * a.W - ((o + 5) % 7)
                    : a.w + 7 * a.U - ((o + 6) % 7)));
            return "Z" in a
              ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), eZ(a))
              : eI(a);
          };
        }
        function j(t, e, r, n) {
          for (var o, a, i = 0, c = e.length, l = r.length; i < c; ) {
            if (n >= l) return -1;
            if (37 === (o = e.charCodeAt(i++))) {
              if (
                !(a = O[(o = e.charAt(i++)) in eN ? e.charAt(i++) : o]) ||
                (n = a(t, r, n)) < 0
              )
                return -1;
            } else if (o != r.charCodeAt(n++)) return -1;
          }
          return n;
        }
        return (
          (g.x = w(r, g)),
          (g.X = w(n, g)),
          (g.c = w(e, g)),
          (x.x = w(r, x)),
          (x.X = w(n, x)),
          (x.c = w(e, x)),
          {
            format: function (t) {
              var e = w((t += ""), g);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = A((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = w((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = A((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        c.parse,
        (u = c.utcFormat),
        c.utcParse;
      var r2 = r(9819),
        r8 = r(85654);
      function r4(t) {
        for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function r6(t, e) {
        return t[e];
      }
      function r3(t) {
        let e = [];
        return (e.key = t), e;
      }
      var r5 = r(22315),
        r7 = r.n(r5),
        r9 = r(89053),
        nt = r.n(r9),
        ne = r(59882),
        nr = r.n(ne),
        nn = r(40139),
        no = r.n(nn),
        na = r(15438),
        ni = r.n(na),
        nc = r(48973),
        nl = r.n(nc),
        nu = r(3698),
        ns = r.n(nu),
        nf = r(13908),
        np = r.n(nf),
        nh = r(23633),
        nd = r.n(nh),
        ny = r(60245),
        nv = r.n(ny),
        nm = r(67206),
        nb = r.n(nm),
        ng = r(8870),
        nx = r.n(ng);
      function nO(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var nw = function (t) {
          return t;
        },
        nA = {},
        nj = function (t) {
          return t === nA;
        },
        nE = function (t) {
          return function e() {
            return 0 == arguments.length ||
              (1 == arguments.length &&
                nj(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        nS = function (t) {
          return (function t(e, r) {
            return 1 === e
              ? r
              : nE(function () {
                  for (
                    var n = arguments.length, o = Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  var i = o.filter(function (t) {
                    return t !== nA;
                  }).length;
                  return i >= e
                    ? r.apply(void 0, o)
                    : t(
                        e - i,
                        nE(function () {
                          for (
                            var t = arguments.length, e = Array(t), n = 0;
                            n < t;
                            n++
                          )
                            e[n] = arguments[n];
                          var a = o.map(function (t) {
                            return nj(t) ? e.shift() : t;
                          });
                          return r.apply(
                            void 0,
                            (
                              (function (t) {
                                if (Array.isArray(t)) return nO(t);
                              })(a) ||
                              (function (t) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(t)
                                )
                                  return Array.from(t);
                              })(a) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t)
                                    return nO(t, void 0);
                                  var r = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      t.constructor &&
                                      (r = t.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return nO(t, e);
                                }
                              })(a) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()
                            ).concat(e)
                          );
                        })
                      );
                });
          })(t.length, t);
        },
        nP = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        nM = nS(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        nk = function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return nw;
          var n = e.reverse(),
            o = n[0],
            a = n.slice(1);
          return function () {
            return a.reduce(function (t, e) {
              return e(t);
            }, o.apply(void 0, arguments));
          };
        },
        n_ = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        nT = function (t) {
          var e = null,
            r = null;
          return function () {
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            return e &&
              o.every(function (t, r) {
                return t === e[r];
              })
              ? r
              : ((e = o), (r = t.apply(void 0, o)));
          };
        };
      nS(function (t, e, r) {
        var n = +t;
        return n + r * (e - n);
      }),
        nS(function (t, e, r) {
          var n = e - t;
          return (r - t) / (n = n || 1 / 0);
        }),
        nS(function (t, e, r) {
          var n = e - t;
          return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)));
        });
      let nC = {
        rangeStep: function (t, e, r) {
          for (var n = new (nx())(t), o = 0, a = []; n.lt(e) && o < 1e5; )
            a.push(n.toNumber()), (n = n.add(r)), o++;
          return a;
        },
        getDigitCount: function (t) {
          var e;
          return 0 === t
            ? 1
            : Math.floor(new (nx())(t).abs().log(10).toNumber()) + 1;
        },
      };
      function nI(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return nN(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          nD(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nZ(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, c = t[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (r.push(i.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (o = !0), (a = t);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return r;
            }
          })(t, e) ||
          nD(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nD(t, e) {
        if (t) {
          if ("string" == typeof t) return nN(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return nN(t, e);
        }
      }
      function nN(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function nL(t) {
        var e = nZ(t, 2),
          r = e[0],
          n = e[1],
          o = r,
          a = n;
        return r > n && ((o = n), (a = r)), [o, a];
      }
      function nH(t, e, r) {
        if (t.lte(0)) return new (nx())(0);
        var n = nC.getDigitCount(t.toNumber()),
          o = new (nx())(10).pow(n),
          a = t.div(o),
          i = 1 !== n ? 0.05 : 0.1,
          c = new (nx())(Math.ceil(a.div(i).toNumber())).add(r).mul(i).mul(o);
        return e ? c : new (nx())(Math.ceil(c));
      }
      function nV(t, e, r) {
        var n = 1,
          o = new (nx())(t);
        if (!o.isint() && r) {
          var a = Math.abs(t);
          a < 1
            ? ((n = new (nx())(10).pow(nC.getDigitCount(t) - 1)),
              (o = new (nx())(Math.floor(o.div(n).toNumber())).mul(n)))
            : a > 1 && (o = new (nx())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (nx())(Math.floor((e - 1) / 2)))
            : r || (o = new (nx())(Math.floor(t)));
        var i = Math.floor((e - 1) / 2);
        return nk(
          nM(function (t) {
            return o.add(new (nx())(t - i).mul(n)).toNumber();
          }),
          nP
        )(0, e);
      }
      var nR = nT(function (t) {
        var e = nZ(t, 2),
          r = e[0],
          n = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = Math.max(o, 2),
          c = nZ(nL([r, n]), 2),
          l = c[0],
          u = c[1];
        if (l === -1 / 0 || u === 1 / 0) {
          var s =
            u === 1 / 0
              ? [l].concat(
                  nI(
                    nP(0, o - 1).map(function () {
                      return 1 / 0;
                    })
                  )
                )
              : [].concat(
                  nI(
                    nP(0, o - 1).map(function () {
                      return -1 / 0;
                    })
                  ),
                  [u]
                );
          return r > n ? n_(s) : s;
        }
        if (l === u) return nV(l, o, a);
        var f = (function t(e, r, n, o) {
            var a,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
            if (!Number.isFinite((r - e) / (n - 1)))
              return {
                step: new (nx())(0),
                tickMin: new (nx())(0),
                tickMax: new (nx())(0),
              };
            var c = nH(new (nx())(r).sub(e).div(n - 1), o, i),
              l = Math.ceil(
                (a =
                  e <= 0 && r >= 0
                    ? new (nx())(0)
                    : (a = new (nx())(e).add(r).div(2)).sub(
                        new (nx())(a).mod(c)
                      ))
                  .sub(e)
                  .div(c)
                  .toNumber()
              ),
              u = Math.ceil(new (nx())(r).sub(a).div(c).toNumber()),
              s = l + u + 1;
            return s > n
              ? t(e, r, n, o, i + 1)
              : (s < n &&
                  ((u = r > 0 ? u + (n - s) : u),
                  (l = r > 0 ? l : l + (n - s))),
                {
                  step: c,
                  tickMin: a.sub(new (nx())(l).mul(c)),
                  tickMax: a.add(new (nx())(u).mul(c)),
                });
          })(l, u, i, a),
          p = f.step,
          h = f.tickMin,
          d = f.tickMax,
          y = nC.rangeStep(h, d.add(new (nx())(0.1).mul(p)), p);
        return r > n ? n_(y) : y;
      });
      nT(function (t) {
        var e = nZ(t, 2),
          r = e[0],
          n = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = Math.max(o, 2),
          c = nZ(nL([r, n]), 2),
          l = c[0],
          u = c[1];
        if (l === -1 / 0 || u === 1 / 0) return [r, n];
        if (l === u) return nV(l, o, a);
        var s = nH(new (nx())(u).sub(l).div(i - 1), a, 0),
          f = nk(
            nM(function (t) {
              return new (nx())(l).add(new (nx())(t).mul(s)).toNumber();
            }),
            nP
          )(0, i).filter(function (t) {
            return t >= l && t <= u;
          });
        return r > n ? n_(f) : f;
      });
      var nB = nT(function (t, e) {
          var r = nZ(t, 2),
            n = r[0],
            o = r[1],
            a =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i = nZ(nL([n, o]), 2),
            c = i[0],
            l = i[1];
          if (c === -1 / 0 || l === 1 / 0) return [n, o];
          if (c === l) return [c];
          var u = Math.max(e, 2),
            s = nH(new (nx())(l).sub(c).div(u - 1), a, 0),
            f = [].concat(
              nI(
                nC.rangeStep(
                  new (nx())(c),
                  new (nx())(l).sub(new (nx())(0.99).mul(s)),
                  s
                )
              ),
              [l]
            );
          return n > o ? n_(f) : f;
        }),
        nF = r(94011),
        nz = r(16377),
        nU = r(70788),
        nW = r(83197);
      function n$(t) {
        return (n$ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nq(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return nX(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return nX(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return nX(t, e);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function nX(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function nK(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function nY(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nK(Object(r), !0).forEach(function (e) {
                nG(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nK(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function nG(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != n$(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != n$(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == n$(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function nJ(t, e, r) {
        return nr()(t) || nr()(e)
          ? r
          : (0, nz.vh)(e)
          ? nl()(t, e, r)
          : no()(e)
          ? e(t)
          : r;
      }
      function nQ(t, e, r, n) {
        var o = ns()(t, function (t) {
          return nJ(t, e);
        });
        if ("number" === r) {
          var a = o.filter(function (t) {
            return (0, nz.Et)(t) || parseFloat(t);
          });
          return a.length ? [nt()(a), r7()(a)] : [1 / 0, -1 / 0];
        }
        return (
          n
            ? o.filter(function (t) {
                return !nr()(t);
              })
            : o
        ).map(function (t) {
          return (0, nz.vh)(t) || t instanceof Date ? t : "";
        });
      }
      var n0 = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = -1,
            i = null != (e = null == r ? void 0 : r.length) ? e : 0;
          if (i <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            1e-6 >= Math.abs(Math.abs(o.range[1] - o.range[0]) - 360)
          )
            for (var c = o.range, l = 0; l < i; l++) {
              var u = l > 0 ? n[l - 1].coordinate : n[i - 1].coordinate,
                s = n[l].coordinate,
                f = l >= i - 1 ? n[0].coordinate : n[l + 1].coordinate,
                p = void 0;
              if ((0, nz.sA)(s - u) !== (0, nz.sA)(f - s)) {
                var h = [];
                if ((0, nz.sA)(f - s) === (0, nz.sA)(c[1] - c[0])) {
                  p = f;
                  var d = s + c[1] - c[0];
                  (h[0] = Math.min(d, (d + u) / 2)),
                    (h[1] = Math.max(d, (d + u) / 2));
                } else {
                  p = u;
                  var y = f + c[1] - c[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  a = n[l].index;
                  break;
                }
              } else {
                var m = Math.min(u, f),
                  b = Math.max(u, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  a = n[l].index;
                  break;
                }
              }
            }
          else
            for (var g = 0; g < i; g++)
              if (
                (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g > 0 &&
                  g < i - 1 &&
                  t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                  t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g === i - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
              ) {
                a = r[g].index;
                break;
              }
          return a;
        },
        n1 = function (t) {
          var e,
            r,
            n = t.type.displayName,
            o =
              null != (e = t.type) && e.defaultProps
                ? nY(nY({}, t.type.defaultProps), t.props)
                : t.props,
            a = o.stroke,
            i = o.fill;
          switch (n) {
            case "Line":
              r = a;
              break;
            case "Area":
            case "Radar":
              r = a && "none" !== a ? a : i;
              break;
            default:
              r = i;
          }
          return r;
        },
        n2 = function (t) {
          var e = t.barSize,
            r = t.totalSize,
            n = t.stackGroups,
            o = void 0 === n ? {} : n;
          if (!o) return {};
          for (var a = {}, i = Object.keys(o), c = 0, l = i.length; c < l; c++)
            for (
              var u = o[i[c]].stackGroups,
                s = Object.keys(u),
                f = 0,
                p = s.length;
              f < p;
              f++
            ) {
              var h = u[s[f]],
                d = h.items,
                y = h.cateAxisId,
                v = d.filter(function (t) {
                  return (0, nU.Mn)(t.type).indexOf("Bar") >= 0;
                });
              if (v && v.length) {
                var m = v[0].type.defaultProps,
                  b = void 0 !== m ? nY(nY({}, m), v[0].props) : v[0].props,
                  g = b.barSize,
                  x = b[y];
                a[x] || (a[x] = []);
                var O = nr()(g) ? e : g;
                a[x].push({
                  item: v[0],
                  stackList: v.slice(1),
                  barSize: nr()(O) ? void 0 : (0, nz.F4)(O, r, 0),
                });
              }
            }
          return a;
        },
        n8 = function (t) {
          var e,
            r = t.barGap,
            n = t.barCategoryGap,
            o = t.bandSize,
            a = t.sizeList,
            i = void 0 === a ? [] : a,
            c = t.maxBarSize,
            l = i.length;
          if (l < 1) return null;
          var u = (0, nz.F4)(r, o, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = o / l,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (l - 1) * u) >= o && ((h -= (l - 1) * u), (u = 0)),
              h >= o && p > 0 && ((f = !0), (p *= 0.9), (h = l * p));
            var d = { offset: (((o - h) / 2) | 0) - u, size: 0 };
            e = i.reduce(function (t, e) {
              var r = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + u,
                    size: f ? p : e.barSize,
                  },
                },
                n = [].concat(nq(t), [r]);
              return (
                (d = n[n.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: d });
                  }),
                n
              );
            }, s);
          } else {
            var y = (0, nz.F4)(n, o, 0, !0);
            o - 2 * y - (l - 1) * u <= 0 && (u = 0);
            var v = (o - 2 * y - (l - 1) * u) / l;
            v > 1 && (v >>= 0);
            var m = c === +c ? Math.min(v, c) : v;
            e = i.reduce(function (t, e, r) {
              var n = [].concat(nq(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + u) * r + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: n[n.length - 1].position });
                  }),
                n
              );
            }, s);
          }
          return e;
        },
        n4 = function (t, e, r, n) {
          var o = r.children,
            a = r.width,
            i = r.margin,
            c = a - (i.left || 0) - (i.right || 0),
            l = (0, nW.g)({ children: o, legendWidth: c });
          if (l) {
            var u = n || {},
              s = u.width,
              f = u.height,
              p = l.align,
              h = l.verticalAlign,
              d = l.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, nz.Et)(t[p])
            )
              return nY(nY({}, t), {}, nG({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, nz.Et)(t[h])
            )
              return nY(nY({}, t), {}, nG({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        n6 = function (t, e, r, n, o) {
          var a = e.props.children,
            i = (0, nU.aS)(a, nF.u).filter(function (t) {
              var e;
              return (
                (e = t.props.direction),
                !!nr()(o) ||
                  ("horizontal" === n
                    ? "yAxis" === o
                    : "vertical" === n || "x" === e
                    ? "xAxis" === o
                    : "y" !== e || "yAxis" === o)
              );
            });
          if (i && i.length) {
            var c = i.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var n = nJ(e, r);
                if (nr()(n)) return t;
                var o = Array.isArray(n) ? [nt()(n), r7()(n)] : [n, n],
                  a = c.reduce(
                    function (t, r) {
                      var n = nJ(e, r, 0),
                        a = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                        i = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                      return [Math.min(a, t[0]), Math.max(i, t[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(a[0], t[0]), Math.max(a[1], t[1])];
              },
              [1 / 0, -1 / 0]
            );
          }
          return null;
        },
        n3 = function (t, e, r, n, o) {
          var a = e
            .map(function (e) {
              return n6(t, e, r, o, n);
            })
            .filter(function (t) {
              return !nr()(t);
            });
          return a && a.length
            ? a.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              )
            : null;
        },
        n5 = function (t, e, r, n, o) {
          var a = e.map(function (e) {
            var a = e.props.dataKey;
            return ("number" === r && a && n6(t, e, a, n)) || nQ(t, a, r, o);
          });
          if ("number" === r)
            return a.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            );
          var i = {};
          return a.reduce(function (t, e) {
            for (var r = 0, n = e.length; r < n; r++)
              i[e[r]] || ((i[e[r]] = !0), t.push(e[r]));
            return t;
          }, []);
        },
        n7 = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        n9 = function (t, e, r) {
          if (!t) return null;
          var n = t.scale,
            o = t.duplicateDomain,
            a = t.type,
            i = t.range,
            c = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            l =
              (e || r) && "category" === a && n.bandwidth
                ? n.bandwidth() / c
                : 0;
          return ((l =
            "angleAxis" === t.axisType && (null == i ? void 0 : i.length) >= 2
              ? 2 * (0, nz.sA)(i[0] - i[1]) * l
              : l),
          e && (t.ticks || t.niceTicks))
            ? (t.ticks || t.niceTicks)
                .map(function (t) {
                  return {
                    coordinate: n(o ? o.indexOf(t) : t) + l,
                    value: t,
                    offset: l,
                  };
                })
                .filter(function (t) {
                  return !np()(t.coordinate);
                })
            : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: n(t) + l, value: t, index: e, offset: l };
              })
            : n.ticks && !r
            ? n.ticks(t.tickCount).map(function (t) {
                return { coordinate: n(t) + l, value: t, offset: l };
              })
            : n.domain().map(function (t, e) {
                return {
                  coordinate: n(t) + l,
                  value: o ? o[t] : t,
                  index: e,
                  offset: l,
                };
              });
        },
        ot = new WeakMap(),
        oe = function (t, e) {
          if ("function" != typeof e) return t;
          ot.has(t) || ot.set(t, new WeakMap());
          var r = ot.get(t);
          if (r.has(e)) return r.get(e);
          var n = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return r.set(e, n), n;
        },
        or = function (t, e, r) {
          var n = t.scale,
            o = t.type,
            a = t.layout,
            i = t.axisType;
          if ("auto" === n)
            return "radial" === a && "radiusAxis" === i
              ? { scale: f.A(), realScaleType: "band" }
              : "radial" === a && "angleAxis" === i
              ? { scale: tN(), realScaleType: "linear" }
              : "category" === o &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !r))
              ? { scale: f.z(), realScaleType: "point" }
              : "category" === o
              ? { scale: f.A(), realScaleType: "band" }
              : { scale: tN(), realScaleType: "linear" };
          if (ni()(n)) {
            var c = "scale".concat(nd()(n));
            return {
              scale: (s[c] || f.z)(),
              realScaleType: s[c] ? c : "point",
            };
          }
          return no()(n)
            ? { scale: n }
            : { scale: f.z(), realScaleType: "point" };
        },
        on = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              o = Math.min(n[0], n[1]) - 1e-4,
              a = Math.max(n[0], n[1]) + 1e-4,
              i = t(e[0]),
              c = t(e[r - 1]);
            (i < o || i > a || c < o || c > a) && t.domain([e[0], e[r - 1]]);
          }
        },
        oo = function (t, e) {
          if (!t) return null;
          for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
          return null;
        },
        oa = function (t, e) {
          if (!e || 2 !== e.length || !(0, nz.Et)(e[0]) || !(0, nz.Et)(e[1]))
            return t;
          var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            o = [t[0], t[1]];
          return (
            (!(0, nz.Et)(t[0]) || t[0] < r) && (o[0] = r),
            (!(0, nz.Et)(t[1]) || t[1] > n) && (o[1] = n),
            o[0] > n && (o[0] = n),
            o[1] < r && (o[1] = r),
            o
          );
        },
        oi = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, a = 0, i = 0; i < e; ++i) {
                  var c = np()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                  c >= 0
                    ? ((t[i][r][0] = o), (t[i][r][1] = o + c), (o = t[i][r][1]))
                    : ((t[i][r][0] = a),
                      (t[i][r][1] = a + c),
                      (a = t[i][r][1]));
                }
          },
          expand: function (t, e) {
            if ((n = t.length) > 0) {
              for (var r, n, o, a = 0, i = t[0].length; a < i; ++a) {
                for (o = r = 0; r < n; ++r) o += t[r][a][1] || 0;
                if (o) for (r = 0; r < n; ++r) t[r][a][1] /= o;
              }
              r1(t, e);
            }
          },
          none: r1,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, o = t[e[0]], a = o.length; n < a; ++n) {
                for (var i = 0, c = 0; i < r; ++i) c += t[i][n][1] || 0;
                o[n][1] += o[n][0] = -c / 2;
              }
              r1(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, o, a = 0, i = 1; i < n; ++i) {
                for (var c = 0, l = 0, u = 0; c < o; ++c) {
                  for (
                    var s = t[e[c]],
                      f = s[i][1] || 0,
                      p = (f - (s[i - 1][1] || 0)) / 2,
                      h = 0;
                    h < c;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[i][1] || 0) - (d[i - 1][1] || 0);
                  }
                  (l += f), (u += p * f);
                }
                (r[i - 1][1] += r[i - 1][0] = a), l && (a -= u / l);
              }
              (r[i - 1][1] += r[i - 1][0] = a), r1(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, a = 0; a < e; ++a) {
                  var i = np()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  i >= 0
                    ? ((t[a][r][0] = o), (t[a][r][1] = o + i), (o = t[a][r][1]))
                    : ((t[a][r][0] = 0), (t[a][r][1] = 0));
                }
          },
        },
        oc = function (t, e, r) {
          var n = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = oi[r];
          return (function () {
            var t = (0, r8.A)([]),
              e = r4,
              r = r1,
              n = r6;
            function o(o) {
              var a,
                i,
                c = Array.from(t.apply(this, arguments), r3),
                l = c.length,
                u = -1;
              for (let t of o)
                for (a = 0, ++u; a < l; ++a)
                  (c[a][u] = [0, +n(t, c[a].key, u, o)]).data = t;
              for (a = 0, i = (0, r2.A)(e(c)); a < l; ++a) c[i[a]].index = a;
              return r(c, i), c;
            }
            return (
              (o.keys = function (e) {
                return arguments.length
                  ? ((t =
                      "function" == typeof e ? e : (0, r8.A)(Array.from(e))),
                    o)
                  : t;
              }),
              (o.value = function (t) {
                return arguments.length
                  ? ((n = "function" == typeof t ? t : (0, r8.A)(+t)), o)
                  : n;
              }),
              (o.order = function (t) {
                return arguments.length
                  ? ((e =
                      null == t
                        ? r4
                        : "function" == typeof t
                        ? t
                        : (0, r8.A)(Array.from(t))),
                    o)
                  : e;
              }),
              (o.offset = function (t) {
                return arguments.length ? ((r = null == t ? r1 : t), o) : r;
              }),
              o
            );
          })()
            .keys(n)
            .value(function (t, e) {
              return +nJ(t, e, 0);
            })
            .order(r4)
            .offset(o)(t);
        },
        ol = function (t, e, r, n, o, a) {
          if (!t) return null;
          var i = (a ? e.reverse() : e).reduce(function (t, e) {
            var o,
              a =
                null != (o = e.type) && o.defaultProps
                  ? nY(nY({}, e.type.defaultProps), e.props)
                  : e.props,
              i = a.stackId;
            if (a.hide) return t;
            var c = a[r],
              l = t[c] || { hasStack: !1, stackGroups: {} };
            if ((0, nz.vh)(i)) {
              var u = l.stackGroups[i] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              u.items.push(e), (l.hasStack = !0), (l.stackGroups[i] = u);
            } else l.stackGroups[(0, nz.NF)("_stackId_")] = { numericAxisId: r, cateAxisId: n, items: [e] };
            return nY(nY({}, t), {}, nG({}, c, l));
          }, {});
          return Object.keys(i).reduce(function (e, a) {
            var c = i[a];
            return (
              c.hasStack &&
                (c.stackGroups = Object.keys(c.stackGroups).reduce(function (
                  e,
                  a
                ) {
                  var i = c.stackGroups[a];
                  return nY(
                    nY({}, e),
                    {},
                    nG({}, a, {
                      numericAxisId: r,
                      cateAxisId: n,
                      items: i.items,
                      stackedData: oc(t, i.items, o),
                    })
                  );
                },
                {})),
              nY(nY({}, e), {}, nG({}, a, c))
            );
          }, {});
        },
        ou = function (t, e) {
          var r = e.realScaleType,
            n = e.type,
            o = e.tickCount,
            a = e.originalDomain,
            i = e.allowDecimals,
            c = r || e.scale;
          if ("auto" !== c && "linear" !== c) return null;
          if (
            o &&
            "number" === n &&
            a &&
            ("auto" === a[0] || "auto" === a[1])
          ) {
            var l = t.domain();
            if (!l.length) return null;
            var u = nR(l, o, i);
            return t.domain([nt()(u), r7()(u)]), { niceTicks: u };
          }
          return o && "number" === n
            ? { niceTicks: nB(t.domain(), o, i) }
            : null;
        };
      function os(t) {
        var e = t.axis,
          r = t.ticks,
          n = t.bandSize,
          o = t.entry,
          a = t.index,
          i = t.dataKey;
        if ("category" === e.type) {
          if (!e.allowDuplicatedCategory && e.dataKey && !nr()(o[e.dataKey])) {
            var c = (0, nz.eP)(r, "value", o[e.dataKey]);
            if (c) return c.coordinate + n / 2;
          }
          return r[a] ? r[a].coordinate + n / 2 : null;
        }
        var l = nJ(o, nr()(i) ? e.dataKey : i);
        return nr()(l) ? null : e.scale(l);
      }
      var of = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            o = t.bandSize,
            a = t.entry,
            i = t.index;
          if ("category" === e.type) return r[i] ? r[i].coordinate + n : null;
          var c = nJ(a, e.dataKey, e.domain[i]);
          return nr()(c) ? null : e.scale(c) - o / 2 + n;
        },
        op = function (t) {
          var e = t.numericAxis,
            r = e.scale.domain();
          if ("number" === e.type) {
            var n = Math.min(r[0], r[1]),
              o = Math.max(r[0], r[1]);
            return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
          }
          return r[0];
        },
        oh = function (t, e) {
          var r,
            n = (
              null != (r = t.type) && r.defaultProps
                ? nY(nY({}, t.type.defaultProps), t.props)
                : t.props
            ).stackId;
          if ((0, nz.vh)(n)) {
            var o = e[n];
            if (o) {
              var a = o.items.indexOf(t);
              return a >= 0 ? o.stackedData[a] : null;
            }
          }
          return null;
        },
        od = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, o) {
                var a = t[o].stackedData.reduce(
                  function (t, n) {
                    var o = n.slice(e, r + 1).reduce(
                      function (t, e) {
                        return [
                          nt()(e.concat([t[0]]).filter(nz.Et)),
                          r7()(e.concat([t[1]]).filter(nz.Et)),
                        ];
                      },
                      [1 / 0, -1 / 0]
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0]
                );
                return [Math.min(a[0], n[0]), Math.max(a[1], n[1])];
              },
              [1 / 0, -1 / 0]
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        oy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ov = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        om = function (t, e, r) {
          if (no()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, nz.Et)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (oy.test(t[0])) {
            var o = +oy.exec(t[0])[1];
            n[0] = e[0] - o;
          } else no()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, nz.Et)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (ov.test(t[1])) {
            var a = +ov.exec(t[1])[1];
            n[1] = e[1] + a;
          } else no()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        ob = function (t, e, r) {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = nb()(e, function (t) {
                  return t.coordinate;
                }),
                a = 1 / 0,
                i = 1,
                c = o.length;
              i < c;
              i++
            ) {
              var l = o[i],
                u = o[i - 1];
              a = Math.min((l.coordinate || 0) - (u.coordinate || 0), a);
            }
            return a === 1 / 0 ? 0 : a;
          }
          return r ? void 0 : 0;
        },
        og = function (t, e, r) {
          return !t || !t.length || nv()(t, nl()(r, "type.defaultProps.domain"))
            ? e
            : t;
        },
        ox = function (t, e) {
          var r = t.type.defaultProps
              ? nY(nY({}, t.type.defaultProps), t.props)
              : t.props,
            n = r.dataKey,
            o = r.name,
            a = r.unit,
            i = r.formatter,
            c = r.tooltipType,
            l = r.chartType,
            u = r.hide;
          return nY(
            nY({}, (0, nU.J9)(t, !1)),
            {},
            {
              dataKey: n,
              unit: a,
              formatter: i,
              name: o || n,
              color: n1(t),
              value: nJ(e, n),
              type: c,
              payload: e,
              chartType: l,
              hide: u,
            }
          );
        };
    },
    13122: (t, e, r) => {
      var n = r(40139),
        o = r(38985),
        a = r(67460),
        i = r(7512),
        c = /^\[object .+?Constructor\]$/,
        l = Object.prototype,
        u = Function.prototype.toString,
        s = l.hasOwnProperty,
        f = RegExp(
          "^" +
            u
              .call(s)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!a(t) || o(t)) && (n(t) ? f : c).test(i(t));
      };
    },
    13364: (t, e, r) => {
      var n = r(75899),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t);
      };
    },
    13465: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    13908: (t, e, r) => {
      var n = r(40566);
      t.exports = function (t) {
        return n(t) && t != +t;
      };
    },
    14268: (t, e, r) => {
      var n = r(58918),
        o = r(18028),
        a = r(52521);
      t.exports = function (t, e) {
        return t && t.length ? n(t, o(e, 2), a) : void 0;
      };
    },
    15232: (t, e, r) => {
      "use strict";
      function n(t, e) {
        for (var r in t)
          if (
            {}.hasOwnProperty.call(t, r) &&
            (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
          )
            return !1;
        for (var n in e)
          if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
            return !1;
        return !0;
      }
      r.d(e, { b: () => n });
    },
    15438: (t, e, r) => {
      var n = r(98233),
        o = r(39608),
        a = r(48611);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && a(t) && "[object String]" == n(t))
        );
      };
    },
    15473: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    15631: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
        );
      };
    },
    16162: (t, e, r) => {
      "use strict";
      r.d(e, { N: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,56v64L168,56Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "TrendUp";
    },
    16238: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => v });
      var n = r(12115),
        o = r(52596),
        a = r(50091),
        i = r(69324),
        c = r(12814);
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (u = function () {
          return !!t;
        })();
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function f(t, e) {
        return (f = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function p(t, e, r) {
        return (
          (e = h(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function h(t) {
        var e = (function (t, e) {
          if ("object" != l(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != l(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == l(e) ? e : e + "";
      }
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var y = function (t) {
          var e = t.yAxisId,
            r = (0, a.yi)(),
            l = (0, a.rY)(),
            u = (0, a.Nk)(e);
          return null == u
            ? null
            : n.createElement(
                i.u,
                d({}, u, {
                  className: (0, o.A)(
                    "recharts-".concat(u.axisType, " ").concat(u.axisType),
                    u.className
                  ),
                  viewBox: { x: 0, y: 0, width: r, height: l },
                  ticksGenerator: function (t) {
                    return (0, c.Rh)(t, !0);
                  },
                })
              );
        },
        v = (function (t) {
          var e;
          function r() {
            var t, e;
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            return (
              (t = r),
              (e = arguments),
              (t = s(t)),
              (function (t, e) {
                if (e && ("object" === l(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                u()
                  ? Reflect.construct(t, e || [], s(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (r.prototype = Object.create(t && t.prototype, {
              constructor: { value: r, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            t && f(r, t),
            (e = [
              {
                key: "render",
                value: function () {
                  return n.createElement(y, this.props);
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, h(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.Component);
      p(v, "displayName", "YAxis"),
        p(v, "defaultProps", {
          allowDuplicatedCategory: !0,
          allowDecimals: !0,
          hide: !1,
          orientation: "left",
          width: 60,
          height: 0,
          mirror: !1,
          yAxisId: 0,
          tickCount: 5,
          type: "number",
          padding: { top: 0, bottom: 0 },
          allowDataOverflow: !1,
          scale: "auto",
          reversed: !1,
        });
    },
    16377: (t, e, r) => {
      "use strict";
      r.d(e, {
        CG: () => g,
        Dj: () => x,
        Et: () => h,
        F4: () => m,
        NF: () => v,
        _3: () => p,
        ck: () => w,
        eP: () => O,
        lX: () => b,
        sA: () => f,
        vh: () => d,
      });
      var n = r(15438),
        o = r.n(n),
        a = r(13908),
        i = r.n(a),
        c = r(48973),
        l = r.n(c),
        u = r(40566),
        s = r.n(u),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !i()(t);
        },
        d = function (t) {
          return h(t) || o()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !o()(t)) return n;
          if (p(t)) {
            var c = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, c))) / 100;
          } else r = +t;
          return i()(r) && (r = n), a && r > e && (r = e), r;
        },
        b = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        g = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++)
            if (r[t[n]]) return !0;
            else r[t[n]] = !0;
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (r) {
                return t + r * (e - t);
              }
            : function () {
                return e;
              };
        };
      function O(t, e, r) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : l()(t, e)) === r;
            })
          : null;
      }
      var w = function (t, e) {
        return h(t) && h(e)
          ? t - e
          : o()(t) && o()(e)
          ? t.localeCompare(e)
          : t instanceof Date && e instanceof Date
          ? t.getTime() - e.getTime()
          : String(t).localeCompare(String(e));
      };
    },
    16571: (t, e, r) => {
      var n = r(50687),
        o = r(54906),
        a = r(13465);
      t.exports = o
        ? function (t, e) {
            return o(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0,
            });
          }
        : a;
    },
    16613: (t, e, r) => {
      var n = r(24376),
        o = r(57213),
        a = r(39608),
        i = r(70771),
        c = 1 / 0,
        l = n ? n.prototype : void 0,
        u = l ? l.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return o(e, t) + "";
        if (i(e)) return u ? u.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -c ? "-0" : r;
      };
    },
    16746: (t, e, r) => {
      var n = r(3562),
        o = r(12486),
        a = r(69806);
      t.exports = function (t, e, r) {
        return e == e ? a(t, e, r) : n(t, o, r);
      };
    },
    17489: (t, e, r) => {
      var n = r(91113);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    17855: (t) => {
      var e = "\ud800-\udfff",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        n = "\ud83c[\udffb-\udfff]",
        o = "[^" + e + "]",
        a = "(?:\ud83c[\udde6-\uddff]){2}",
        i = "[\ud800-\udbff][\udc00-\udfff]",
        c = "(?:" + r + "|" + n + ")?",
        l = "[\\ufe0e\\ufe0f]?",
        u = "(?:\\u200d(?:" + [o, a, i].join("|") + ")" + l + c + ")*",
        s = RegExp(
          n +
            "(?=" +
            n +
            ")|" +
            ("(?:" + [o + r + "?", r, a, i, "[" + e + "]"].join("|")) +
            ")" +
            (l + c + u),
          "g"
        );
      t.exports = function (t) {
        return t.match(s) || [];
      };
    },
    18028: (t, e, r) => {
      var n = r(55910),
        o = r(96699),
        a = r(13465),
        i = r(39608),
        c = r(28126);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? a
          : "object" == typeof t
          ? i(t)
            ? o(t[0], t[1])
            : n(t)
          : c(t);
      };
    },
    18489: (t, e, r) => {
      var n = r(96294),
        o = r(72043),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t))
          a.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    18686: (t, e, r) => {
      t.exports = r(83711)(r(82500), "Map");
    },
    18940: (t, e, r) => {
      t.exports = r(64189)();
    },
    19260: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M253.88,108.11l-25.53-51a20,20,0,0,0-26.83-9L178.34,59.7,131.7,44.58a12.14,12.14,0,0,0-7.4,0L77.66,59.7,54.48,48.11a20,20,0,0,0-26.83,9L2.12,108.11a20,20,0,0,0,9,26.83l26.67,13.34,51.18,37.41A12.15,12.15,0,0,0,93,187.62l62,16a12.27,12.27,0,0,0,3,.38,12,12,0,0,0,8.48-3.52l52.62-52.62,25.83-12.92a20,20,0,0,0,8.95-26.83Zm-58.12,29.15-27.52-26a12,12,0,0,0-16.76.26c-9.66,9.74-25.06,16.81-40.81,9.55l38.19-37h22.72l25.81,51.63ZM47.32,71.37,60.59,78l-22,43.9-13.27-6.63Zm107,107.3L101.23,165l-42-30.66L85.17,82.5,128,68.61l1.69.55L90,107.68l-.13.12a20,20,0,0,0,3.4,31c20.95,13.39,46,12.07,66.33-2.73l19.2,18.15Zm63-56.77-22-43.9,13.27-6.63,21.95,43.9ZM118.55,219a12,12,0,0,1-14.62,8.62l-26.6-6.87a12,12,0,0,1-4.08-1.93L48.92,201a12,12,0,0,1,14.16-19.37l22.47,16.42,24.38,6.29A12,12,0,0,1,118.55,219Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M200,152l-40,40L96,176,40,136,72.68,70.63,128,56l55.32,14.63L183.6,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M252.51,108.8,227,57.75a14,14,0,0,0-18.78-6.27L182.66,64.26,129.53,50.2a6.1,6.1,0,0,0-3.06,0L73.34,64.26,47.79,51.48A14,14,0,0,0,29,57.75L3.49,108.8a14,14,0,0,0,6.26,18.78L36.9,141.16l55.61,39.72a6,6,0,0,0,2,.94l64,16A6.08,6.08,0,0,0,160,198a6,6,0,0,0,4.24-1.76l55.31-55.31,26.7-13.35a14,14,0,0,0,6.26-18.78Zm-53,35.16-35.8-28.68a6,6,0,0,0-8,.45c-18.65,18.79-39.5,16.42-52.79,7.92a2,2,0,0,1-.94-1.5,1.9,1.9,0,0,1,.51-1.55L146.43,78h33.86l28.41,56.82ZM14.11,115.69a2,2,0,0,1,.11-1.52L39.74,63.11a2,2,0,0,1,1.8-1.1,2,2,0,0,1,.89.21l22.21,11.1L37.32,128l-22.21-11.1A2,2,0,0,1,14.11,115.69Zm144.05,69.67-59.6-14.9L47.66,134.1,76.84,75.75,128,62.21l14.8,3.92a5.92,5.92,0,0,0-3,1.57L94.1,112.05a14,14,0,0,0,2.39,21.72c20.22,12.92,44.75,10.49,63.8-5.89L191,152.5Zm83.73-69.67a2,2,0,0,1-1,1.16L218.68,128,191.36,73.32l22.21-11.1a2,2,0,0,1,1.53-.11,2,2,0,0,1,1.16,1l25.52,51.06A2,2,0,0,1,241.89,115.69Zm-112,101.76a6,6,0,0,1-7.27,4.37L80.89,211.39a5.88,5.88,0,0,1-2-.94L52.52,191.64a6,6,0,1,1,7-9.77L84.91,200l40.61,10.15A6,6,0,0,1,129.88,217.45Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M250.73,109.69l-25.53-51a12,12,0,0,0-16.1-5.37L182.88,66.38,129,52.14a3.92,3.92,0,0,0-2,0L73.12,66.38,46.9,53.27a12,12,0,0,0-16.1,5.37L5.27,109.69a12,12,0,0,0,5.37,16.1l27.29,13.65,55.75,39.82a3.87,3.87,0,0,0,1.35.62l64,16a4,4,0,0,0,3.8-1l55.54-55.54,27-13.5a12,12,0,0,0,5.37-16.1Zm-51,36.95-37.2-29.8a4,4,0,0,0-5.34.3c-19.49,19.64-41.34,17.11-55.29,8.2a4.07,4.07,0,0,1-1.85-3,3.91,3.91,0,0,1,1.11-3.21L145.62,76h35.91l29.6,59.21ZM12.21,116.32a4,4,0,0,1,.22-3L38,62.22h0A4,4,0,0,1,41.54,60a4,4,0,0,1,1.78.43l24,12L38.21,130.64l-24-12A4,4,0,0,1,12.21,116.32Zm146.56,71.25L97.71,172.3l-52.6-37.57L75.45,74,128,60.14,157.72,68H144a4,4,0,0,0-2.79,1.13l-45.7,44.33a12,12,0,0,0,2.06,18.62c19.88,12.71,44.13,10,62.66-6.81L194,152.33Zm85-71.25a4,4,0,0,1-2,2.32l-24,12L188.68,72.43l24-12A4,4,0,0,1,218,62.22l25.53,51.05A4,4,0,0,1,243.79,116.32ZM127.94,217a4,4,0,0,1-3.88,3,4.09,4.09,0,0,1-1-.12L81.38,209.45a4,4,0,0,1-1.36-.62L53.68,190a4,4,0,0,1,4.65-6.51l25.72,18.37,41,10.25A4,4,0,0,1,127.94,217Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Handshake";
    },
    20134: (t, e, r) => {
      var n = r(86452),
        o = r(50111);
      t.exports = function (t, e) {
        return null != t && o(t, e, n);
      };
    },
    20480: (t, e, r) => {
      var n = r(86216),
        o = r(35095);
      t.exports = function (t, e) {
        return t && n(t, e, o);
      };
    },
    20570: (t, e, r) => {
      var n = r(24376),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = a.call(t, c),
          r = t[c];
        try {
          t[c] = void 0;
          var n = !0;
        } catch (t) {}
        var o = i.call(t);
        return n && (e ? (t[c] = r) : delete t[c]), o;
      };
    },
    20963: (t, e, r) => {
      var n = r(65646),
        o = r(38649),
        a = r(35095);
      t.exports = function (t) {
        return n(t, a, o);
      };
    },
    20988: (t, e, r) => {
      var n = r(75899);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += +!this.has(t)),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    21087: (t, e, r) => {
      var n = r(13465),
        o = r(64588),
        a = r(61632);
      t.exports = function (t, e) {
        return a(o(t, e, n), t + "");
      };
    },
    21582: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    21790: (t, e, r) => {
      var n = r(54360);
      t.exports = function (t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
      };
    },
    22143: (t, e, r) => {
      var n = r(98233),
        o = r(48611);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == n(t);
      };
    },
    22315: (t, e, r) => {
      var n = r(58918),
        o = r(21582),
        a = r(13465);
      t.exports = function (t) {
        return t && t.length ? n(t, a, o) : void 0;
      };
    },
    22471: (t, e, r) => {
      var n = r(40139),
        o = r(15631);
      t.exports = function (t) {
        return null != t && o(t.length) && !n(t);
      };
    },
    23360: (t, e, r) => {
      var n = r(42233);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    23633: (t, e, r) => {
      t.exports = r(62962)("toUpperCase");
    },
    24026: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => I });
      var n = r(12115),
        o = r(40139),
        a = r.n(o),
        i = r(52596),
        c = r(675),
        l = r(72790),
        u = r(9795),
        s = r(43597);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (d = function () {
          return !!t;
        })();
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function v(t, e) {
        return (v = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function m(t, e, r) {
        return (
          (e = b(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function b(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != f(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : e + "";
      }
      var g = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = y(t)),
            (function (t, e) {
              if (e && ("object" === f(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              d()
                ? Reflect.construct(t, e || [], y(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && v(r, t),
          (e = [
            {
              key: "renderIcon",
              value: function (t) {
                var e = this.props.inactiveColor,
                  r = 32 / 6,
                  o = 32 / 3,
                  a = t.inactive ? e : t.color;
                if ("plainline" === t.type)
                  return n.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: a,
                    strokeDasharray: t.payload.strokeDasharray,
                    x1: 0,
                    y1: 16,
                    x2: 32,
                    y2: 16,
                    className: "recharts-legend-icon",
                  });
                if ("line" === t.type)
                  return n.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: a,
                    d: "M0,"
                      .concat(16, "h")
                      .concat(o, "\n            A")
                      .concat(r, ",")
                      .concat(r, ",0,1,1,")
                      .concat(2 * o, ",")
                      .concat(16, "\n            H")
                      .concat(32, "M")
                      .concat(2 * o, ",")
                      .concat(16, "\n            A")
                      .concat(r, ",")
                      .concat(r, ",0,1,1,")
                      .concat(o, ",")
                      .concat(16),
                    className: "recharts-legend-icon",
                  });
                if ("rect" === t.type)
                  return n.createElement("path", {
                    stroke: "none",
                    fill: a,
                    d: "M0,"
                      .concat(4, "h")
                      .concat(32, "v")
                      .concat(24, "h")
                      .concat(-32, "z"),
                    className: "recharts-legend-icon",
                  });
                if (n.isValidElement(t.legendIcon)) {
                  var i = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? h(Object(r), !0).forEach(function (e) {
                            m(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : h(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  return delete i.legendIcon, n.cloneElement(t.legendIcon, i);
                }
                return n.createElement(u.i, {
                  fill: a,
                  cx: 16,
                  cy: 16,
                  size: 32,
                  sizeType: "diameter",
                  type: t.type,
                });
              },
            },
            {
              key: "renderItems",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.payload,
                  o = e.iconSize,
                  u = e.layout,
                  f = e.formatter,
                  h = e.inactiveColor,
                  d = { x: 0, y: 0, width: 32, height: 32 },
                  y = {
                    display: "horizontal" === u ? "inline-block" : "block",
                    marginRight: 10,
                  },
                  v = {
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4,
                  };
                return r.map(function (e, r) {
                  var u = e.formatter || f,
                    b = (0, i.A)(
                      m(
                        m(
                          { "recharts-legend-item": !0 },
                          "legend-item-".concat(r),
                          !0
                        ),
                        "inactive",
                        e.inactive
                      )
                    );
                  if ("none" === e.type) return null;
                  var g = a()(e.value) ? null : e.value;
                  (0,
                  c.R)(!a()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                  var x = e.inactive ? h : e.color;
                  return n.createElement(
                    "li",
                    p(
                      { className: b, style: y, key: "legend-item-".concat(r) },
                      (0, s.XC)(t.props, e, r)
                    ),
                    n.createElement(
                      l.u,
                      { width: o, height: o, viewBox: d, style: v },
                      t.renderIcon(e)
                    ),
                    n.createElement(
                      "span",
                      {
                        className: "recharts-legend-item-text",
                        style: { color: x },
                      },
                      u ? u(g, e, r) : g
                    )
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.payload,
                  r = t.layout,
                  o = t.align;
                return e && e.length
                  ? n.createElement(
                      "ul",
                      {
                        className: "recharts-default-legend",
                        style: {
                          padding: 0,
                          margin: 0,
                          textAlign: "horizontal" === r ? o : "left",
                        },
                      },
                      this.renderItems()
                    )
                  : null;
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, b(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.PureComponent);
      m(g, "displayName", "Legend"),
        m(g, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var x = r(16377),
        O = r(2494);
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var A = ["ref"];
      function j(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(r), !0).forEach(function (e) {
                _(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function S(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, T(n.key), n);
        }
      }
      function P() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (P = function () {
          return !!t;
        })();
      }
      function M(t) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function k(t, e) {
        return (k = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function _(t, e, r) {
        return (
          (e = T(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function T(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != w(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : e + "";
      }
      function C(t) {
        return t.value;
      }
      var I = (function (t) {
        var e, r;
        function o() {
          var t, e, r;
          if (!(this instanceof o))
            throw TypeError("Cannot call a class as a function");
          for (var n = arguments.length, a = Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = o),
            (r = [].concat(a)),
            (e = M(e)),
            _(
              (t = (function (t, e) {
                if (e && ("object" === w(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                P()
                  ? Reflect.construct(e, r || [], M(this).constructor)
                  : e.apply(this, r)
              )),
              "lastBoundingBox",
              { width: -1, height: -1 }
            ),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (o.prototype = Object.create(t && t.prototype, {
            constructor: { value: o, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          t && k(o, t),
          (e = [
            {
              key: "componentDidMount",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "getBBox",
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 !== this.lastBoundingBox.width ||
                      -1 !== this.lastBoundingBox.height) &&
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? E({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  r,
                  n = this.props,
                  o = n.layout,
                  a = n.align,
                  i = n.verticalAlign,
                  c = n.margin,
                  l = n.chartWidth,
                  u = n.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === a && "vertical" === o
                        ? {
                            left: ((l || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === a
                        ? { right: (c && c.right) || 0 }
                        : { left: (c && c.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (r =
                      "middle" === i
                        ? {
                            top: ((u || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === i
                        ? { bottom: (c && c.bottom) || 0 }
                        : { top: (c && c.top) || 0 }),
                  E(E({}, e), r)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.content,
                  o = e.width,
                  a = e.height,
                  i = e.wrapperStyle,
                  c = e.payloadUniqBy,
                  l = e.payload,
                  u = E(
                    E(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: a || "auto",
                      },
                      this.getDefaultPosition(i)
                    ),
                    i
                  );
                return n.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: u,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (n.isValidElement(t)) return n.cloneElement(t, e);
                    if ("function" == typeof t) return n.createElement(t, e);
                    e.ref;
                    var r = (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r = {};
                          for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                              if (e.indexOf(n) >= 0) continue;
                              r[n] = t[n];
                            }
                          return r;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < a.length; n++)
                          (r = a[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(e, A);
                    return n.createElement(g, r);
                  })(
                    r,
                    E(E({}, this.props), {}, { payload: (0, O.s)(l, c, C) })
                  )
                );
              },
            },
          ]),
          (r = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var r = E(E({}, this.defaultProps), t.props).layout;
                return "vertical" === r && (0, x.Et)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === r
                  ? { width: t.props.width || e }
                  : null;
              },
            },
          ]),
          e && S(o.prototype, e),
          r && S(o, r),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(n.PureComponent);
      _(I, "displayName", "Legend"),
        _(I, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    24376: (t, e, r) => {
      t.exports = r(82500).Symbol;
    },
    24453: (t, e, r) => {
      "use strict";
      r.d(e, { k: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v99l43.51-43.52a12,12,0,0,1,17,0L128,127l43-43H160a12,12,0,0,1,0-24h40a12,12,0,0,1,12,12v40a12,12,0,0,1-24,0V101l-51.51,51.52a12,12,0,0,1-17,0L96,129,44,181v15H224A12,12,0,0,1,236,208Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M224,64V208H32V48H208A16,16,0,0,1,224,64Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v76.69l34.34-34.35a8,8,0,0,1,11.32,0L128,132.69,172.69,88H144a8,8,0,0,1,0-16h48a8,8,0,0,1,8,8v48a8,8,0,0,1-16,0V99.31l-50.34,50.35a8,8,0,0,1-11.32,0L104,131.31l-40,40V176H200a8,8,0,0,1,0,16Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V161.52l53.76-53.76a6,6,0,0,1,8.48,0L128,135.51,185.52,78H160a6,6,0,0,1,0-12h40a6,6,0,0,1,6,6v40a6,6,0,0,1-12,0V86.48l-61.76,61.76a6,6,0,0,1-8.48,0L96,120.49l-58,58V202H224A6,6,0,0,1,230,208Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V166.34l57.17-57.17a4,4,0,0,1,5.66,0L128,138.34,190.34,76H160a4,4,0,0,1,0-8h40a4,4,0,0,1,4,4v40a4,4,0,0,1-8,0V81.66l-65.17,65.17a4,4,0,0,1-5.66,0L96,117.66l-60,60V204H224A4,4,0,0,1,228,208Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "ChartLineUp";
    },
    24671: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M156,88H100a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12V100A12,12,0,0,0,156,88Zm-12,56H112V112h32Zm88-4H220V116h12a12,12,0,0,0,0-24H220V56a20,20,0,0,0-20-20H164V24a12,12,0,0,0-24,0V36H116V24a12,12,0,0,0-24,0V36H56A20,20,0,0,0,36,56V92H24a12,12,0,0,0,0,24H36v24H24a12,12,0,0,0,0,24H36v36a20,20,0,0,0,20,20H92v12a12,12,0,0,0,24,0V220h24v12a12,12,0,0,0,24,0V220h36a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,56H60V60H196Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M200,48H56a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48ZM152,152H104V104h48Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M104,104h48v48H104Zm136,48a8,8,0,0,1-8,8H216v40a16,16,0,0,1-16,16H160v16a8,8,0,0,1-16,0V216H112v16a8,8,0,0,1-16,0V216H56a16,16,0,0,1-16-16V160H24a8,8,0,0,1,0-16H40V112H24a8,8,0,0,1,0-16H40V56A16,16,0,0,1,56,40H96V24a8,8,0,0,1,16,0V40h32V24a8,8,0,0,1,16,0V40h40a16,16,0,0,1,16,16V96h16a8,8,0,0,1,0,16H216v32h16A8,8,0,0,1,240,152ZM168,96a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M152,98H104a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V104A6,6,0,0,0,152,98Zm-6,48H110V110h36Zm86,0H214V110h18a6,6,0,0,0,0-12H214V56a14,14,0,0,0-14-14H158V24a6,6,0,0,0-12,0V42H110V24a6,6,0,0,0-12,0V42H56A14,14,0,0,0,42,56V98H24a6,6,0,0,0,0,12H42v36H24a6,6,0,0,0,0,12H42v42a14,14,0,0,0,14,14H98v18a6,6,0,0,0,12,0V214h36v18a6,6,0,0,0,12,0V214h42a14,14,0,0,0,14-14V158h18a6,6,0,0,0,0-12Zm-30,54a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M152,100H104a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V104A4,4,0,0,0,152,100Zm-4,48H108V108h40Zm84,0H212V108h20a4,4,0,0,0,0-8H212V56a12,12,0,0,0-12-12H156V24a4,4,0,0,0-8,0V44H108V24a4,4,0,0,0-8,0V44H56A12,12,0,0,0,44,56v44H24a4,4,0,0,0,0,8H44v40H24a4,4,0,0,0,0,8H44v44a12,12,0,0,0,12,12h44v20a4,4,0,0,0,8,0V212h40v20a4,4,0,0,0,8,0V212h44a12,12,0,0,0,12-12V156h20a4,4,0,0,0,0-8Zm-28,52a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Cpu";
    },
    25613: (t, e, r) => {
      "use strict";
      r.d(e, { v: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M177.62,159.6a52,52,0,0,1-34,34,12.2,12.2,0,0,1-3.6.55,12,12,0,0,1-3.6-23.45,28,28,0,0,0,18.32-18.32,12,12,0,0,1,22.9,7.2ZM220,144a92,92,0,0,1-184,0c0-28.81,11.27-58.18,33.48-87.28a12,12,0,0,1,17.9-1.33L107.07,74.5,127,19.89a12,12,0,0,1,18.94-5.12C168.2,33.25,220,82.85,220,144Zm-24,0c0-41.71-30.61-78.39-52.52-99.29l-20.21,55.4a12,12,0,0,1-19.63,4.5L80.71,82.36C67,103.38,60,124.06,60,144a68,68,0,0,0,136,0Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80l33,32,26.27-72C159.86,41.92,208,88.15,208,144Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M181.92,153A55.58,55.58,0,0,1,137,197.92a7,7,0,0,1-1,.08,6,6,0,0,1-1-11.92c17.38-2.92,32.13-17.68,35.08-35.08a6,6,0,1,1,11.84,2ZM214,144a86,86,0,0,1-172,0c0-27.47,10.85-55.61,32.25-83.64a6,6,0,0,1,9-.67l26.34,25.56,23.09-63.31a6,6,0,0,1,9.47-2.56C163.72,37.33,214,85.4,214,144Zm-12,0c0-48.4-38.65-89.84-61.07-109.8L117.64,98.06a6,6,0,0,1-9.82,2.25l-28-27.22C62.67,97.13,54,121,54,144a74,74,0,0,0,148,0Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M179.94,152.67a53.51,53.51,0,0,1-43.28,43.27,3.68,3.68,0,0,1-.66.06,4,4,0,0,1-.66-7.94c18.18-3.06,33.63-18.51,36.72-36.73a4,4,0,0,1,7.88,1.34ZM212,144a84,84,0,0,1-168,0c0-27,10.71-54.75,31.84-82.43a4,4,0,0,1,6-.44l28.55,27.7,24.15-66.2a4,4,0,0,1,6.31-1.71C162.22,38.69,212,86.24,212,144Zm-8,0c0-50.82-41.73-93.91-63.94-113.23l-24.3,66.6a4,4,0,0,1-6.55,1.5L79.5,70C61.25,95.07,52,119.93,52,144a76,76,0,0,0,152,0Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Fire";
    },
    25641: (t, e, r) => {
      "use strict";
      r.d(e, {
        IZ: () => v,
        Kg: () => y,
        Zk: () => A,
        lY: () => m,
        pr: () => b,
        yy: () => w,
      });
      var n = r(59882),
        o = r.n(n),
        a = r(12115),
        i = r(40139),
        c = r.n(i),
        l = r(16377),
        u = r(12814);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                h(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function h(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != s(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var y = Math.PI / 180,
        v = function (t, e, r, n) {
          return { x: t + Math.cos(-y * n) * r, y: e + Math.sin(-y * n) * r };
        },
        m = function (t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (r.left || 0) - (r.right || 0)),
              Math.abs(e - (r.top || 0) - (r.bottom || 0))
            ) / 2
          );
        },
        b = function (t, e, r, n, a) {
          var i = t.width,
            c = t.height,
            s = t.startAngle,
            f = t.endAngle,
            y = (0, l.F4)(t.cx, i, i / 2),
            v = (0, l.F4)(t.cy, c, c / 2),
            b = m(i, c, r),
            g = (0, l.F4)(t.innerRadius, b, 0),
            x = (0, l.F4)(t.outerRadius, b, 0.8 * b);
          return Object.keys(e).reduce(function (t, r) {
            var i,
              c = e[r],
              l = c.domain,
              m = c.reversed;
            if (o()(c.range))
              "angleAxis" === n
                ? (i = [s, f])
                : "radiusAxis" === n && (i = [g, x]),
                m && (i = [i[1], i[0]]);
            else {
              var b,
                O =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((b = i = c.range)) ||
                  (function (t, e) {
                    var r =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != r) {
                      var n,
                        o,
                        a,
                        i,
                        c = [],
                        l = !0,
                        u = !1;
                      try {
                        (a = (r = r.call(t)).next), !1;
                        for (
                          ;
                          !(l = (n = a.call(r)).done) &&
                          (c.push(n.value), c.length !== e);
                          l = !0
                        );
                      } catch (t) {
                        (u = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !l &&
                            null != r.return &&
                            ((i = r.return()), Object(i) !== i)
                          )
                            return;
                        } finally {
                          if (u) throw o;
                        }
                      }
                      return c;
                    }
                  })(b, 2) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return d(t, 2);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return d(t, e);
                    }
                  })(b, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })();
              (s = O[0]), (f = O[1]);
            }
            var w = (0, u.W7)(c, a),
              A = w.realScaleType,
              j = w.scale;
            j.domain(l).range(i), (0, u.YB)(j);
            var E = (0, u.w7)(j, p(p({}, c), {}, { realScaleType: A })),
              S = p(
                p(p({}, c), E),
                {},
                {
                  range: i,
                  radius: x,
                  realScaleType: A,
                  scale: j,
                  cx: y,
                  cy: v,
                  innerRadius: g,
                  outerRadius: x,
                  startAngle: s,
                  endAngle: f,
                }
              );
            return p(p({}, t), {}, h({}, r, S));
          }, {});
        },
        g = function (t, e) {
          var r = t.x,
            n = t.y;
          return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2));
        },
        x = function (t, e) {
          var r = t.x,
            n = t.y,
            o = e.cx,
            a = e.cy,
            i = g({ x: r, y: n }, { x: o, y: a });
          if (i <= 0) return { radius: i };
          var c = Math.acos((r - o) / i);
          return (
            n > a && (c = 2 * Math.PI - c),
            { radius: i, angle: (180 * c) / Math.PI, angleInRadian: c }
          );
        },
        O = function (t) {
          var e = t.startAngle,
            r = t.endAngle,
            n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
          return { startAngle: e - 360 * n, endAngle: r - 360 * n };
        },
        w = function (t, e) {
          var r,
            n = x({ x: t.x, y: t.y }, e),
            o = n.radius,
            a = n.angle,
            i = e.innerRadius,
            c = e.outerRadius;
          if (o < i || o > c) return !1;
          if (0 === o) return !0;
          var l = O(e),
            u = l.startAngle,
            s = l.endAngle,
            f = a;
          if (u <= s) {
            for (; f > s; ) f -= 360;
            for (; f < u; ) f += 360;
            r = f >= u && f <= s;
          } else {
            for (; f > u; ) f -= 360;
            for (; f < s; ) f += 360;
            r = f >= s && f <= u;
          }
          return r
            ? p(
                p({}, e),
                {},
                {
                  radius: o,
                  angle:
                    f +
                    360 *
                      Math.min(
                        Math.floor(e.startAngle / 360),
                        Math.floor(e.endAngle / 360)
                      ),
                }
              )
            : null;
        },
        A = function (t) {
          return (0, a.isValidElement)(t) || c()(t) || "boolean" == typeof t
            ? ""
            : t.className;
        };
    },
    26151: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= !!e), e;
      };
    },
    27569: (t, e, r) => {
      var n = r(32197),
        o = r(35095);
      t.exports = function (t) {
        for (var e = o(t), r = e.length; r--; ) {
          var a = e[r],
            i = t[a];
          e[r] = [a, i, n(i)];
        }
        return e;
      };
    },
    28126: (t, e, r) => {
      var n = r(96548),
        o = r(93294),
        a = r(79595),
        i = r(94356);
      t.exports = function (t) {
        return a(t) ? n(i(t)) : o(t);
      };
    },
    28749: (t, e, r) => {
      "use strict";
      function n(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function o(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      r.d(e, { C: () => n, K: () => o });
    },
    28897: (t, e, r) => {
      var n = r(54906);
      t.exports = function (t, e, r) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    29794: (t, e, r) => {
      var n = r(48628),
        o = r(74888),
        a = r(18028),
        i = r(39608),
        c = r(39641);
      t.exports = function (t, e, r) {
        var l = i(t) ? n : o;
        return r && c(t, e, r) && (e = void 0), l(t, a(e, 3));
      };
    },
    30152: (t, e, r) => {
      t.exports = r(82500)["__core-js_shared__"];
    },
    30294: (t, e) => {
      "use strict";
      var r,
        n = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        s = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        h = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy");
      Symbol.for("react.offscreen");
      Symbol.for("react.module.reference"),
        (e.isFragment = function (t) {
          return (
            (function (t) {
              if ("object" == typeof t && null !== t) {
                var e = t.$$typeof;
                switch (e) {
                  case n:
                    switch ((t = t.type)) {
                      case a:
                      case c:
                      case i:
                      case p:
                      case h:
                        return t;
                      default:
                        switch ((t = t && t.$$typeof)) {
                          case s:
                          case u:
                          case f:
                          case y:
                          case d:
                          case l:
                            return t;
                          default:
                            return e;
                        }
                    }
                  case o:
                    return e;
                }
              }
            })(t) === a
          );
        });
    },
    30699: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    30716: (t) => {
      t.exports = function (t) {
        return function (e, r, n) {
          for (var o = -1, a = Object(e), i = n(e), c = i.length; c--; ) {
            var l = i[t ? c : ++o];
            if (!1 === r(a[l], l, a)) break;
          }
          return e;
        };
      };
    },
    31431: (t) => {
      t.exports = function () {};
    },
    31545: (t, e, r) => {
      var n = r(75899);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    31598: (t, e, r) => {
      var n = r(31887),
        o = r(90929),
        a = r(45170),
        i = r(61830),
        c = r(21790);
      function l(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = a),
        (l.prototype.has = i),
        (l.prototype.set = c),
        (t.exports = l);
    },
    31847: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => l });
      let n = Math.PI,
        o = 2 * n,
        a = o - 1e-6;
      function i(t) {
        this._ += t[0];
        for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
      }
      class c {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? i
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                    if (e > 15) return i;
                    let r = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, n = t.length; e < n; ++e)
                        this._ += Math.round(arguments[e] * r) / r + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, r, n) {
          this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(t, e, r, n, o, a) {
          this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +o)},${(this._y1 =
            +a)}`;
        }
        arcTo(t, e, r, o, a) {
          if (((t *= 1), (e *= 1), (r *= 1), (o *= 1), (a *= 1) < 0))
            throw Error(`negative radius: ${a}`);
          let i = this._x1,
            c = this._y1,
            l = r - t,
            u = o - e,
            s = i - t,
            f = c - e,
            p = s * s + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (p > 1e-6)
            if (Math.abs(f * l - u * s) > 1e-6 && a) {
              let h = r - i,
                d = o - c,
                y = l * l + u * u,
                v = Math.sqrt(y),
                m = Math.sqrt(p),
                b =
                  a *
                  Math.tan(
                    (n - Math.acos((y + p - (h * h + d * d)) / (2 * v * m))) / 2
                  ),
                g = b / m,
                x = b / v;
              Math.abs(g - 1) > 1e-6 &&
                this._append`L${t + g * s},${e + g * f}`,
                this._append`A${a},${a},0,0,${+(f * h > s * d)},${(this._x1 =
                  t + x * l)},${(this._y1 = e + x * u)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
        }
        arc(t, e, r, i, c, l) {
          if (((t *= 1), (e *= 1), (r *= 1), (l = !!l), r < 0))
            throw Error(`negative radius: ${r}`);
          let u = r * Math.cos(i),
            s = r * Math.sin(i),
            f = t + u,
            p = e + s,
            h = 1 ^ l,
            d = l ? i - c : c - i;
          null === this._x1
            ? this._append`M${f},${p}`
            : (Math.abs(this._x1 - f) > 1e-6 ||
                Math.abs(this._y1 - p) > 1e-6) &&
              this._append`L${f},${p}`,
            r &&
              (d < 0 && (d = (d % o) + o),
              d > a
                ? this._append`A${r},${r},0,1,${h},${t - u},${
                    e - s
                  }A${r},${r},0,1,${h},${(this._x1 = f)},${(this._y1 = p)}`
                : d > 1e-6 &&
                  this._append`A${r},${r},0,${+(d >= n)},${h},${(this._x1 =
                    t + r * Math.cos(c))},${(this._y1 = e + r * Math.sin(c))}`);
        }
        rect(t, e, r, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(r *= 1)}v${+n}h${-r}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let e = 3;
        return (
          (t.digits = function (r) {
            if (!arguments.length) return e;
            if (null == r) e = null;
            else {
              let t = Math.floor(r);
              if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
              e = t;
            }
            return t;
          }),
          () => new c(e)
        );
      }
      c.prototype;
    },
    31887: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    32197: (t, e, r) => {
      var n = r(67460);
      t.exports = function (t) {
        return t == t && !n(t);
      };
    },
    33332: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    33497: (t, e, r) => {
      t = r.nmd(t);
      var n = r(82500),
        o = r(44158),
        a = e && !e.nodeType && e,
        i = a && t && !t.nodeType && t,
        c = i && i.exports === a ? n.Buffer : void 0,
        l = c ? c.isBuffer : void 0;
      t.exports = l || o;
    },
    34e3: (t, e, r) => {
      "use strict";
      r.d(e, { F: () => H });
      var n = r(12115),
        o = r(9557),
        a = r(48973),
        i = r.n(a),
        c = r(60245),
        l = r.n(c),
        u = r(59882),
        s = r.n(u),
        f = r(40139),
        p = r.n(f),
        h = r(52596),
        d = r(2348),
        y = r(70688),
        v = r(79095),
        m = r(60379),
        b = r(36079),
        g = r(54811),
        x = r(70788),
        O = r(41643),
        w = r(25641),
        A = r(16377),
        j = r(12814),
        E = r(675),
        S = r(43597),
        P = r(67790);
      function M(t) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function C(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, L(n.key), n);
        }
      }
      function I() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (I = function () {
          return !!t;
        })();
      }
      function Z(t) {
        return (Z = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function D(t, e) {
        return (D = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function N(t, e, r) {
        return (
          (e = L(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function L(t) {
        var e = (function (t, e) {
          if ("object" != M(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != M(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == M(e) ? e : e + "";
      }
      var H = (function (t) {
        var e, r;
        function a(t) {
          var e, r, n;
          if (!(this instanceof a))
            throw TypeError("Cannot call a class as a function");
          return (
            (r = a),
            (n = [t]),
            (r = Z(r)),
            N(
              (e = (function (t, e) {
                if (e && ("object" === M(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                I()
                  ? Reflect.construct(r, n || [], Z(this).constructor)
                  : r.apply(this, n)
              )),
              "pieRef",
              null
            ),
            N(e, "sectorRefs", []),
            N(e, "id", (0, A.NF)("recharts-pie-")),
            N(e, "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), p()(t) && t();
            }),
            N(e, "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), p()(t) && t();
            }),
            (e.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0,
            }),
            e
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (a.prototype = Object.create(t && t.prototype, {
            constructor: { value: a, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          t && D(a, t),
          (e = [
            {
              key: "isActiveIndex",
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              },
            },
            {
              key: "renderLabels",
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  r = e.label,
                  o = e.labelLine,
                  i = e.dataKey,
                  c = e.valueKey,
                  l = (0, x.J9)(this.props, !1),
                  u = (0, x.J9)(r, !1),
                  f = (0, x.J9)(o, !1),
                  p = (r && r.offsetRadius) || 20,
                  h = t.map(function (t, e) {
                    var h = (t.startAngle + t.endAngle) / 2,
                      y = (0, w.IZ)(t.cx, t.cy, t.outerRadius + p, h),
                      v = T(
                        T(T(T({}, l), t), {}, { stroke: "none" }, u),
                        {},
                        { index: e, textAnchor: a.getTextAnchor(y.x, t.cx) },
                        y
                      ),
                      m = T(
                        T(
                          T(T({}, l), t),
                          {},
                          { fill: "none", stroke: t.fill },
                          f
                        ),
                        {},
                        {
                          index: e,
                          points: [(0, w.IZ)(t.cx, t.cy, t.outerRadius, h), y],
                        }
                      ),
                      b = i;
                    return (
                      s()(i) && s()(c) ? (b = "value") : s()(i) && (b = c),
                      n.createElement(
                        d.W,
                        {
                          key: "label-"
                            .concat(t.startAngle, "-")
                            .concat(t.endAngle, "-")
                            .concat(t.midAngle, "-")
                            .concat(e),
                        },
                        o && a.renderLabelLineItem(o, m, "line"),
                        a.renderLabelItem(r, v, (0, j.kr)(t, b))
                      )
                    );
                  });
                return n.createElement(
                  d.W,
                  { className: "recharts-pie-labels" },
                  h
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  o = r.activeShape,
                  a = r.blendStroke,
                  i = r.inactiveShape;
                return t.map(function (r, c) {
                  if (
                    (null == r ? void 0 : r.startAngle) === 0 &&
                    (null == r ? void 0 : r.endAngle) === 0 &&
                    1 !== t.length
                  )
                    return null;
                  var l = e.isActiveIndex(c),
                    u = i && e.hasActiveIndex() ? i : null,
                    s = T(
                      T({}, r),
                      {},
                      { stroke: a ? r.fill : r.stroke, tabIndex: -1 }
                    );
                  return n.createElement(
                    d.W,
                    k(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, S.XC)(e.props, r, c),
                      {
                        key: "sector-"
                          .concat(null == r ? void 0 : r.startAngle, "-")
                          .concat(null == r ? void 0 : r.endAngle, "-")
                          .concat(r.midAngle, "-")
                          .concat(c),
                      }
                    ),
                    n.createElement(
                      P.yp,
                      k(
                        { option: l ? o : u, isActive: l, shapeType: "sector" },
                        s
                      )
                    )
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.sectors,
                  a = e.isAnimationActive,
                  c = e.animationBegin,
                  l = e.animationDuration,
                  u = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  h = f.prevIsAnimationActive;
                return n.createElement(
                  o.Ay,
                  {
                    begin: c,
                    duration: l,
                    isActive: a,
                    easing: u,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s, "-").concat(h),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (e) {
                    var o = e.t,
                      a = [],
                      c = (r && r[0]).startAngle;
                    return (
                      r.forEach(function (t, e) {
                        var r = p && p[e],
                          n = e > 0 ? i()(t, "paddingAngle", 0) : 0;
                        if (r) {
                          var l = (0, A.Dj)(
                              r.endAngle - r.startAngle,
                              t.endAngle - t.startAngle
                            ),
                            u = T(
                              T({}, t),
                              {},
                              { startAngle: c + n, endAngle: c + l(o) + n }
                            );
                          a.push(u), (c = u.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            h = (0, A.Dj)(0, s - f)(o),
                            d = T(
                              T({}, t),
                              {},
                              { startAngle: c + n, endAngle: c + h + n }
                            );
                          a.push(d), (c = d.endAngle);
                        }
                      }),
                      n.createElement(d.W, null, t.renderSectorsStatically(a))
                    );
                  }
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case "ArrowLeft":
                        var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case "ArrowRight":
                        var n =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  r = t.isAnimationActive,
                  n = this.state.prevSectors;
                return r && e && e.length && (!n || !l()(n, e))
                  ? this.renderSectorsWithAnimation()
                  : this.renderSectorsStatically(e);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.hide,
                  o = e.sectors,
                  a = e.className,
                  i = e.label,
                  c = e.cx,
                  l = e.cy,
                  u = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  r ||
                  !o ||
                  !o.length ||
                  !(0, A.Et)(c) ||
                  !(0, A.Et)(l) ||
                  !(0, A.Et)(u) ||
                  !(0, A.Et)(s)
                )
                  return null;
                var y = (0, h.A)("recharts-pie", a);
                return n.createElement(
                  d.W,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: y,
                    ref: function (e) {
                      t.pieRef = e;
                    },
                  },
                  this.renderSectors(),
                  i && this.renderLabels(o),
                  m.J.renderCallByParent(this.props, null, !1),
                  (!f || p) && b.Z.renderCallByParent(this.props, o, !1)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0,
                    }
                  : t.sectors !== e.curSectors
                  ? { curSectors: t.sectors, isAnimationFinished: !0 }
                  : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (t, e) {
                return t > e ? "start" : t < e ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (t, e, r) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                if (p()(t)) return t(e);
                var o = (0, h.A)(
                  "recharts-pie-label-line",
                  "boolean" != typeof t ? t.className : ""
                );
                return n.createElement(
                  y.I,
                  k({}, e, { key: r, type: "linear", className: o })
                );
              },
            },
            {
              key: "renderLabelItem",
              value: function (t, e, r) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                var o = r;
                if (p()(t) && ((o = t(e)), n.isValidElement(o))) return o;
                var a = (0, h.A)(
                  "recharts-pie-label-text",
                  "boolean" == typeof t || p()(t) ? "" : t.className
                );
                return n.createElement(
                  v.E,
                  k({}, e, { alignmentBaseline: "middle", className: a }),
                  o
                );
              },
            },
          ]),
          e && C(a.prototype, e),
          r && C(a, r),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      N(H, "displayName", "Pie"),
        N(H, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        N(H, "parseDeltaAngle", function (t, e) {
          return (0, A.sA)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        N(H, "getRealPieData", function (t) {
          var e = t.data,
            r = t.children,
            n = (0, x.J9)(t, !1),
            o = (0, x.aS)(r, g.f);
          return e && e.length
            ? e.map(function (t, e) {
                return T(T(T({ payload: t }, n), t), o && o[e] && o[e].props);
              })
            : o && o.length
            ? o.map(function (t) {
                return T(T({}, n), t.props);
              })
            : [];
        }),
        N(H, "parseCoordinateOfPie", function (t, e) {
          var r = e.top,
            n = e.left,
            o = e.width,
            a = e.height,
            i = (0, w.lY)(o, a);
          return {
            cx: n + (0, A.F4)(t.cx, o, o / 2),
            cy: r + (0, A.F4)(t.cy, a, a / 2),
            innerRadius: (0, A.F4)(t.innerRadius, i, 0),
            outerRadius: (0, A.F4)(t.outerRadius, i, 0.8 * i),
            maxRadius: t.maxRadius || Math.sqrt(o * o + a * a) / 2,
          };
        }),
        N(H, "getComposedData", function (t) {
          var e,
            r,
            n = t.item,
            o = t.offset,
            a =
              void 0 !== n.type.defaultProps
                ? T(T({}, n.type.defaultProps), n.props)
                : n.props,
            i = H.getRealPieData(a);
          if (!i || !i.length) return null;
          var c = a.cornerRadius,
            l = a.startAngle,
            u = a.endAngle,
            f = a.paddingAngle,
            p = a.dataKey,
            h = a.nameKey,
            d = a.valueKey,
            y = a.tooltipType,
            v = Math.abs(a.minAngle),
            m = H.parseCoordinateOfPie(a, o),
            b = H.parseDeltaAngle(l, u),
            g = Math.abs(b),
            x = p;
          s()(p) && s()(d)
            ? ((0, E.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = "value"))
            : s()(p) &&
              ((0, E.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = d));
          var O = i.filter(function (t) {
              return 0 !== (0, j.kr)(t, x, 0);
            }).length,
            S = g - O * v - (g >= 360 ? O : O - 1) * f,
            P = i.reduce(function (t, e) {
              var r = (0, j.kr)(e, x, 0);
              return t + ((0, A.Et)(r) ? r : 0);
            }, 0);
          return (
            P > 0 &&
              (e = i.map(function (t, e) {
                var n,
                  o = (0, j.kr)(t, x, 0),
                  a = (0, j.kr)(t, h, e),
                  i = ((0, A.Et)(o) ? o : 0) / P,
                  u =
                    (n = e ? r.endAngle + (0, A.sA)(b) * f * (0 !== o) : l) +
                    (0, A.sA)(b) * ((0 !== o ? v : 0) + i * S),
                  s = (n + u) / 2,
                  p = (m.innerRadius + m.outerRadius) / 2,
                  d = [{ name: a, value: o, payload: t, dataKey: x, type: y }],
                  g = (0, w.IZ)(m.cx, m.cy, p, s);
                return (r = T(
                  T(
                    T(
                      {
                        percent: i,
                        cornerRadius: c,
                        name: a,
                        tooltipPayload: d,
                        midAngle: s,
                        middleRadius: p,
                        tooltipPosition: g,
                      },
                      t
                    ),
                    m
                  ),
                  {},
                  {
                    value: (0, j.kr)(t, x),
                    startAngle: n,
                    endAngle: u,
                    payload: t,
                    paddingAngle: (0, A.sA)(b) * f,
                  }
                ));
              })),
            T(T({}, m), {}, { sectors: e, data: i })
          );
        });
    },
    34210: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    34451: (t, e, r) => {
      "use strict";
      r.d(e, { t: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M84,76A12,12,0,0,1,96,64h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,76Zm12,52h64a12,12,0,0,0,0-24H96a12,12,0,0,0,0,24ZM212,40V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V40A20,20,0,0,1,64,20H192A20,20,0,0,1,212,40Zm-24,4H68V212H188ZM128,168a16,16,0,1,0,16,16A16,16,0,0,0,128,168Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M200,40V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M166,72a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,72Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-58V216a14,14,0,0,1-14,14H64a14,14,0,0,1-14-14V40A14,14,0,0,1,64,26H192A14,14,0,0,1,206,40Zm-12,0a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2ZM128,170a10,10,0,1,0,10,10A10,10,0,0,0,128,170Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M164,72a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,72Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-60V216a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V40A12,12,0,0,1,64,28H192A12,12,0,0,1,204,40Zm-8,0a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4ZM128,172a8,8,0,1,0,8,8A8,8,0,0,0,128,172Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "ComputerTower";
    },
    34711: (t, e, r) => {
      var n = r(73800),
        o = r(94356);
      t.exports = function (t, e) {
        e = n(e, t);
        for (var r = 0, a = e.length; null != t && r < a; ) t = t[o(e[r++])];
        return r && r == a ? t : void 0;
      };
    },
    35095: (t, e, r) => {
      var n = r(11670),
        o = r(18489),
        a = r(22471);
      t.exports = function (t) {
        return a(t) ? n(t) : o(t);
      };
    },
    35190: (t, e, r) => {
      var n = r(89316),
        o = r(33332),
        a = r(49840),
        i = a && a.isTypedArray;
      t.exports = i ? o(i) : n;
    },
    35695: (t, e, r) => {
      "use strict";
      var n = r(18999);
      r.o(n, "usePathname") &&
        r.d(e, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(e, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(e, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    36079: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => E });
      var n = r(12115),
        o = r(59882),
        a = r.n(o),
        i = r(67460),
        c = r.n(i),
        l = r(40139),
        u = r.n(l),
        s = r(83979),
        f = r.n(s),
        p = r(60379),
        h = r(2348),
        d = r(70788),
        y = r(12814);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var m = ["valueAccessor"],
        b = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function O(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != v(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function A(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      var j = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function E(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? j : e,
          o = A(t, m),
          i = o.data,
          c = o.dataKey,
          l = o.clockWise,
          u = o.id,
          s = o.textBreakAll,
          f = A(o, b);
        return i && i.length
          ? n.createElement(
              h.W,
              { className: "recharts-label-list" },
              i.map(function (t, e) {
                var o = a()(c) ? r(t, e) : (0, y.kr)(t && t.payload, c),
                  i = a()(u) ? {} : { id: "".concat(u, "-").concat(e) };
                return n.createElement(
                  p.J,
                  x({}, (0, d.J9)(t, !0), f, i, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: s,
                    viewBox: p.J.parseViewBox(
                      a()(l) ? t : w(w({}, t), {}, { clockWise: l })
                    ),
                    key: "label-".concat(e),
                    index: e,
                  })
                );
              })
            )
          : null;
      }
      (E.displayName = "LabelList"),
        (E.renderCallByParent = function (t, e) {
          var r,
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && o && !t.label)) return null;
          var a = t.children,
            i = (0, d.aS)(a, E).map(function (t, r) {
              return (0,
              n.cloneElement)(t, { data: e, key: "labelList-".concat(r) });
            });
          return o
            ? [
                ((r = t.label),
                !r
                  ? null
                  : !0 === r
                  ? n.createElement(E, { key: "labelList-implicit", data: e })
                  : n.isValidElement(r) || u()(r)
                  ? n.createElement(E, {
                      key: "labelList-implicit",
                      data: e,
                      content: r,
                    })
                  : c()(r)
                  ? n.createElement(
                      E,
                      x({ data: e }, r, { key: "labelList-implicit" })
                    )
                  : null),
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return g(t);
                })(i) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(i) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return g(t, void 0);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === r &&
                          t.constructor &&
                          (r = t.constructor.name),
                        "Map" === r || "Set" === r)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      )
                        return g(t, e);
                    }
                  })(i) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : i;
        });
    },
    36314: (t, e, r) => {
      var n = r(24376),
        o = r(9813),
        a = r(39608),
        i = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return a(t) || o(t) || !!(i && t && t[i]);
      };
    },
    36364: (t, e, r) => {
      "use strict";
      r.d(e, { K: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232.76,137.88A28.39,28.39,0,0,0,208.13,133L172,141.26c0-.42,0-.84,0-1.26a32,32,0,0,0-32-32H89.94a35.76,35.76,0,0,0-25.45,10.54L43,140H20A20,20,0,0,0,0,160v40a20,20,0,0,0,20,20H120a11.89,11.89,0,0,0,2.91-.36l64-16a11.4,11.4,0,0,0,1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61,28.61,0,0,0,4.57-48.32ZM36,196H24V164H36Zm181.68-31.39-37.51,16L118.52,196H60V157l21.46-21.46A11.93,11.93,0,0,1,89.94,132H140a8,8,0,0,1,0,16H112a12,12,0,0,0,0,24h32a12.19,12.19,0,0,0,2.69-.3l67-15.41.47-.12a4.61,4.61,0,0,1,5.82,4.44A4.58,4.58,0,0,1,217.68,164.61ZM164,100a40.36,40.36,0,0,0,5.18-.34,40,40,0,1,0,29.67-59.32A40,40,0,1,0,164,100Zm40-36a16,16,0,1,1-16,16A16,16,0,0,1,204,64ZM164,44a16,16,0,0,1,12.94,6.58A39.9,39.9,0,0,0,164.2,76H164a16,16,0,0,1,0-32Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-45.24,10.4A26,26,0,0,0,140,114H89.94a29.78,29.78,0,0,0-21.21,8.79L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170ZM164,94a34.54,34.54,0,0,0,7.28-.78,34,34,0,1,0,25.46-42.43A34,34,0,1,0,164,94Zm62-10a22,22,0,1,1-22-22A22,22,0,0,1,226,84ZM164,38a21.94,21.94,0,0,1,21.51,17.49,34,34,0,0,0-15.38,25.65A22,22,0,1,1,164,38Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M227.9,144.24a20.45,20.45,0,0,0-17.84-3.53L160.75,152A23.76,23.76,0,0,0,164,140a24,24,0,0,0-24-24H89.94a27.81,27.81,0,0,0-19.8,8.2L46.34,148H16A12,12,0,0,0,4,160v40a12,12,0,0,0,12,12H120a4,4,0,0,0,1-.12l64-16a4.69,4.69,0,0,0,.6-.2l38.82-16.54.22-.1a20.6,20.6,0,0,0,3.29-34.8ZM12,200V160a4,4,0,0,1,4-4H44v48H16A4,4,0,0,1,12,200Zm209.13-28.17L182.72,188.2,119.51,204H52V153.66l23.8-23.8A19.86,19.86,0,0,1,89.94,124H140a16,16,0,0,1,0,32H112a4,4,0,0,0,0,8h32a3.94,3.94,0,0,0,.9-.1l67-15.41.16,0a12.6,12.6,0,0,1,9,23.38ZM164,92a31.88,31.88,0,0,0,8.73-1.2,32,32,0,1,0,22.55-37.58A32,32,0,1,0,164,92Zm64-8a24,24,0,1,1-24-24A24,24,0,0,1,228,84ZM164,36a24,24,0,0,1,23.74,20.46A32,32,0,0,0,172,82.62,24,24,0,1,1,164,36Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "HandCoins";
    },
    36713: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    36730: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          n = 0;
        return function () {
          var o = e(),
            a = 16 - (o - n);
          if (((n = o), a > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    36815: (t, e, r) => {
      var n = r(4217),
        o = r(67460),
        a = r(70771),
        i = 0 / 0,
        c = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (a(t)) return i;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = l.test(t);
        return r || u.test(t) ? s(t.slice(2), r ? 2 : 8) : c.test(t) ? i : +t;
      };
    },
    37835: (t, e, r) => {
      var n = r(17489),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g;
      t.exports = n(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(o, function (t, r, n, o) {
            e.push(n ? o.replace(a, "$1") : r || t);
          }),
          e
        );
      });
    },
    37929: (t) => {
      t.exports = function (t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (r = r > o ? o : r) < 0 && (r += o),
          (o = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var a = Array(o); ++n < o; ) a[n] = t[n + e];
        return a;
      };
    },
    38008: (t, e, r) => {
      t.exports = r(83711)(r(82500), "Set");
    },
    38406: (t, e, r) => {
      var n = r(85090),
        o = r(92313),
        a = r(82954);
      t.exports = function (t, e, r, i, c, l) {
        var u = 1 & r,
          s = t.length,
          f = e.length;
        if (s != f && !(u && f > s)) return !1;
        var p = l.get(t),
          h = l.get(e);
        if (p && h) return p == e && h == t;
        var d = -1,
          y = !0,
          v = 2 & r ? new n() : void 0;
        for (l.set(t, e), l.set(e, t); ++d < s; ) {
          var m = t[d],
            b = e[d];
          if (i) var g = u ? i(b, m, d, e, t, l) : i(m, b, d, t, e, l);
          if (void 0 !== g) {
            if (g) continue;
            y = !1;
            break;
          }
          if (v) {
            if (
              !o(e, function (t, e) {
                if (!a(v, e) && (m === t || c(m, t, r, i, l))) return v.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (!(m === b || c(m, b, r, i, l))) {
            y = !1;
            break;
          }
        }
        return l.delete(t), l.delete(e), y;
      };
    },
    38637: (t, e, r) => {
      t.exports = r(79399)();
    },
    38649: (t, e, r) => {
      var n = r(38675),
        o = r(43720),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols;
      t.exports = i
        ? function (t) {
            return null == t
              ? []
              : n(i((t = Object(t))), function (e) {
                  return a.call(t, e);
                });
          }
        : o;
    },
    38675: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, o = 0, a = [];
          ++r < n;

        ) {
          var i = t[r];
          e(i, r, t) && (a[o++] = i);
        }
        return a;
      };
    },
    38985: (t, e, r) => {
      var n = r(30152),
        o = (function () {
          var t = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!o && o in t;
      };
    },
    39608: (t) => {
      t.exports = Array.isArray;
    },
    39641: (t, e, r) => {
      var n = r(58817),
        o = r(22471),
        a = r(99544),
        i = r(67460);
      t.exports = function (t, e, r) {
        if (!i(r)) return !1;
        var c = typeof e;
        return (
          ("number" == c
            ? !!(o(r) && a(e, r.length))
            : "string" == c && e in r) && n(r[e], t)
        );
      };
    },
    39984: (t) => {
      t.exports = function (t, e, r) {
        for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    40139: (t, e, r) => {
      var n = r(98233),
        o = r(67460);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    40382: (t, e, r) => {
      t.exports = r(83711)(r(82500), "WeakMap");
    },
    40566: (t, e, r) => {
      var n = r(98233),
        o = r(48611);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == n(t));
      };
    },
    41643: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => n });
      var n = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return n[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) n[t] = e;
          else {
            var r = Object.keys(t);
            r &&
              r.length &&
              r.forEach(function (e) {
                n[e] = t[e];
              });
          }
        },
      };
    },
    42233: (t, e, r) => {
      var n = r(36815),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = n(t)) === o || t === -o
            ? (t < 0 ? -1 : 1) * 17976931348623157e292
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    42971: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M160,48V208L80,128Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "CaretLeft";
    },
    43444: (t, e, r) => {
      "use strict";
      r.d(e, { n: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M237,147.44a4,4,0,0,1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4,4,0,0,1-1.2-.2,36.76,36.76,0,0,1-3.8.2,4,4,0,0,1,0-8,28,28,0,1,0-27.12-35,4,4,0,0,1-7.75-2,36,36,0,1,1,54,39.48c10.81,3.85,20.51,12,27.31,23.48A4,4,0,0,1,237,147.44ZM187.46,214a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2,61,61,0,0,0-105.08,0,4,4,0,0,1-6.92-4,68.35,68.35,0,0,1,39.19-31,44,44,0,1,1,40.54,0A68.35,68.35,0,0,1,187.46,214ZM128,180a36,36,0,1,0-36-36A36,36,0,0,0,128,180ZM64,116A28,28,0,1,1,91.12,81a4,4,0,0,0,7.75-2A36,36,0,1,0,45.3,118.75,63.55,63.55,0,0,0,12.8,141.6a4,4,0,0,0,6.4,4.8A55.55,55.55,0,0,1,64,124a4,4,0,0,0,0-8Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "UsersThree";
    },
    43597: (t, e, r) => {
      "use strict";
      r.d(e, {
        QQ: () => c,
        VU: () => u,
        XC: () => p,
        _U: () => f,
        j2: () => s,
      });
      var n = r(12115),
        o = r(67460),
        a = r.n(o);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var c = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        l = ["points", "pathLength"],
        u = { svg: ["viewBox", "children"], polygon: l, polyline: l },
        s = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, n.isValidElement)(t) && (r = t.props), !a()(r))) return null;
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return r[t](r, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, r) {
          if (!a()(t) || "object" !== i(t)) return null;
          var n = null;
          return (
            Object.keys(t).forEach(function (o) {
              var a = t[o];
              s.includes(o) &&
                "function" == typeof a &&
                (n || (n = {}),
                (n[o] = function (t) {
                  return a(e, r, t), null;
                }));
            }),
            n
          );
        };
    },
    43720: (t) => {
      t.exports = function () {
        return [];
      };
    },
    44101: (t, e, r) => {
      t.exports = r(83711)(r(82500), "DataView");
    },
    44158: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    44482: (t, e, r) => {
      var n = r(98233),
        o = r(73726),
        a = r(48611),
        i = Object.prototype,
        c = Function.prototype.toString,
        l = i.hasOwnProperty,
        u = c.call(Object);
      t.exports = function (t) {
        if (!a(t) || "[object Object]" != n(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var r = l.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == u;
      };
    },
    44538: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => h, M: () => y });
      var n = r(12115),
        o = r(52596),
        a = r(9557),
        i = r(70788);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != c(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != c(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == c(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = function (t, e, r, n, o) {
          var a,
            i = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            c = n >= 0 ? 1 : -1,
            l = r >= 0 ? 1 : -1,
            u = +((n >= 0 && r >= 0) || (n < 0 && r < 0));
          if (i > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > i ? i : o[f];
            (a = "M".concat(t, ",").concat(e + c * s[0])),
              s[0] > 0 &&
                (a += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(u, ",")
                  .concat(t + l * s[0], ",")
                  .concat(e)),
              (a += "L ".concat(t + r - l * s[1], ",").concat(e)),
              s[1] > 0 &&
                (a += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(u, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + c * s[1])),
              (a += "L ".concat(t + r, ",").concat(e + n - c * s[2])),
              s[2] > 0 &&
                (a += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(u, ",\n        ")
                  .concat(t + r - l * s[2], ",")
                  .concat(e + n)),
              (a += "L ".concat(t + l * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (a += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(u, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - c * s[3])),
              (a += "Z");
          } else if (i > 0 && o === +o && o > 0) {
            var p = Math.min(i, o);
            a = "M "
              .concat(t, ",")
              .concat(e + c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(u, ",")
              .concat(t + l * p, ",")
              .concat(e, "\n            L ")
              .concat(t + r - l * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(u, ",")
              .concat(t + r, ",")
              .concat(e + c * p, "\n            L ")
              .concat(t + r, ",")
              .concat(e + n - c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(u, ",")
              .concat(t + r - l * p, ",")
              .concat(e + n, "\n            L ")
              .concat(t + l * p, ",")
              .concat(e + n, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(u, ",")
              .concat(t, ",")
              .concat(e + n - c * p, " Z");
          } else
            a = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(r, " v ")
              .concat(n, " h ")
              .concat(-r, " Z");
          return a;
        },
        h = function (t, e) {
          if (!t || !e) return !1;
          var r = t.x,
            n = t.y,
            o = e.x,
            a = e.y,
            i = e.width,
            c = e.height;
          if (Math.abs(i) > 0 && Math.abs(c) > 0) {
            var l = Math.min(o, o + i),
              u = Math.max(o, o + i),
              s = Math.min(a, a + c),
              f = Math.max(a, a + c);
            return r >= l && r <= u && n >= s && n <= f;
          }
          return !1;
        },
        d = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        y = function (t) {
          var e,
            r = f(f({}, d), t),
            c = (0, n.useRef)(),
            s =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, n.useState)(-1))) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    a,
                    i,
                    c = [],
                    l = !0,
                    u = !1;
                  try {
                    (a = (r = r.call(t)).next), !1;
                    for (
                      ;
                      !(l = (n = a.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      l = !0
                    );
                  } catch (t) {
                    (u = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((i = r.return()), Object(i) !== i)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return c;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return u(t, 2);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === r &&
                      t.constructor &&
                      (r = t.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return u(t, e);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            h = s[0],
            y = s[1];
          (0, n.useEffect)(function () {
            if (c.current && c.current.getTotalLength)
              try {
                var t = c.current.getTotalLength();
                t && y(t);
              } catch (t) {}
          }, []);
          var v = r.x,
            m = r.y,
            b = r.width,
            g = r.height,
            x = r.radius,
            O = r.className,
            w = r.animationEasing,
            A = r.animationDuration,
            j = r.animationBegin,
            E = r.isAnimationActive,
            S = r.isUpdateAnimationActive;
          if (
            v !== +v ||
            m !== +m ||
            b !== +b ||
            g !== +g ||
            0 === b ||
            0 === g
          )
            return null;
          var P = (0, o.A)("recharts-rectangle", O);
          return S
            ? n.createElement(
                a.Ay,
                {
                  canBegin: h > 0,
                  from: { width: b, height: g, x: v, y: m },
                  to: { width: b, height: g, x: v, y: m },
                  duration: A,
                  animationEasing: w,
                  isActive: S,
                },
                function (t) {
                  var e = t.width,
                    o = t.height,
                    u = t.x,
                    s = t.y;
                  return n.createElement(
                    a.Ay,
                    {
                      canBegin: h > 0,
                      from: "0px ".concat(-1 === h ? 1 : h, "px"),
                      to: "".concat(h, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: j,
                      duration: A,
                      isActive: E,
                      easing: w,
                    },
                    n.createElement(
                      "path",
                      l({}, (0, i.J9)(r, !0), {
                        className: P,
                        d: p(u, s, e, o, x),
                        ref: c,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "path",
                l({}, (0, i.J9)(r, !0), { className: P, d: p(v, m, b, g, x) })
              );
        };
    },
    45170: (t, e, r) => {
      var n = r(54360);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    45626: (t, e, r) => {
      "use strict";
      r.d(e, { K: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M176,128,96,208V48Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "CaretRight";
    },
    45964: (t, e, r) => {
      var n = r(67460),
        o = r(76685),
        a = r(36815),
        i = Math.max,
        c = Math.min;
      t.exports = function (t, e, r) {
        var l,
          u,
          s,
          f,
          p,
          h,
          d = 0,
          y = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function b(e) {
          var r = l,
            n = u;
          return (l = u = void 0), (d = e), (f = t.apply(n, r));
        }
        function g(t) {
          var r = t - h,
            n = t - d;
          return void 0 === h || r >= e || r < 0 || (v && n >= s);
        }
        function x() {
          var t,
            r,
            n,
            a = o();
          if (g(a)) return O(a);
          p = setTimeout(
            x,
            ((t = a - h), (r = a - d), (n = e - t), v ? c(n, s - r) : n)
          );
        }
        function O(t) {
          return ((p = void 0), m && l) ? b(t) : ((l = u = void 0), f);
        }
        function w() {
          var t,
            r = o(),
            n = g(r);
          if (((l = arguments), (u = this), (h = r), n)) {
            if (void 0 === p)
              return (d = t = h), (p = setTimeout(x, e)), y ? b(t) : f;
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = a(e) || 0),
          n(r) &&
            ((y = !!r.leading),
            (s = (v = "maxWait" in r) ? i(a(r.maxWait) || 0, e) : s),
            (m = "trailing" in r ? !!r.trailing : m)),
          (w.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (l = h = u = p = void 0);
          }),
          (w.flush = function () {
            return void 0 === p ? f : O(o());
          }),
          w
        );
      };
    },
    46605: (t, e, r) => {
      "use strict";
      r.d(e, { A3: () => p, Pu: () => f });
      var n = r(41643);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                var n, a, i;
                (n = t),
                  (a = e),
                  (i = r[e]),
                  (a = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != o(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == o(e) ? e : e + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var l = { widthCache: {}, cacheCount: 0 },
        u = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        s = "recharts_measurement_span",
        f = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (null == t || n.m.isSsr) return { width: 0, height: 0 };
          var o =
              (Object.keys((e = i({}, r))).forEach(function (t) {
                e[t] || delete e[t];
              }),
              e),
            a = JSON.stringify({ text: t, copyStyle: o });
          if (l.widthCache[a]) return l.widthCache[a];
          try {
            var c = document.getElementById(s);
            c ||
              ((c = document.createElement("span")).setAttribute("id", s),
              c.setAttribute("aria-hidden", "true"),
              document.body.appendChild(c));
            var f = i(i({}, u), o);
            Object.assign(c.style, f), (c.textContent = "".concat(t));
            var p = c.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (l.widthCache[a] = h),
              ++l.cacheCount > 2e3 && ((l.cacheCount = 0), (l.widthCache = {})),
              h
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        p = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    47995: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    48611: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    48628: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (!e(t[r], r, t)) return !1;
        return !0;
      };
    },
    48659: (t, e, r) => {
      var n = r(37929);
      t.exports = function (t, e, r) {
        var o = t.length;
        return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
      };
    },
    48973: (t, e, r) => {
      var n = r(34711);
      t.exports = function (t, e, r) {
        var o = null == t ? void 0 : n(t, e);
        return void 0 === o ? r : o;
      };
    },
    48996: (t, e, r) => {
      "use strict";
      r.d(e, { t: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M24.79,121.59a12,12,0,0,0,16.81-2.38,48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41,72,72,0,0,0-25.3-21.22,40,40,0,1,0-64.58,0A71,71,0,0,0,128,94.31a71,71,0,0,0-15.71-10.74,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,24.79,121.59ZM176,44a16,16,0,1,1-16,16A16,16,0,0,1,176,44ZM80,44A16,16,0,1,1,64,60,16,16,0,0,1,80,44ZM208.29,195.57a40,40,0,1,0-64.58,0A71.31,71.31,0,0,0,128,206.3a71.31,71.31,0,0,0-15.71-10.73,40,40,0,1,0-64.58,0,72,72,0,0,0-25.3,21.22A12,12,0,0,0,41.6,231.21a48,48,0,0,1,76.81,0,12,12,0,0,0,16.8,2.39,12.24,12.24,0,0,0,2.38-2.39h0a48,48,0,0,1,76.81,0,12,12,0,1,0,19.19-14.41A71.91,71.91,0,0,0,208.29,195.57ZM80,156a16,16,0,1,1-16,16A16,16,0,0,1,80,156Zm96,0a16,16,0,1,1-16,16A16,16,0,0,1,176,156Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M112,168a32,32,0,1,1-32-32A32,32,0,0,1,112,168ZM80,32a32,32,0,1,0,32,32A32,32,0,0,0,80,32Zm96,104a32,32,0,1,0,32,32A32,32,0,0,0,176,136Zm0-40a32,32,0,1,0-32-32A32,32,0,0,0,176,96Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M230.4,219.19A8,8,0,0,1,224,232H32a8,8,0,0,1-6.4-12.8A67.88,67.88,0,0,1,53,197.51a40,40,0,1,1,53.93,0,67.42,67.42,0,0,1,21,14.29,67.42,67.42,0,0,1,21-14.29,40,40,0,1,1,53.93,0A67.85,67.85,0,0,1,230.4,219.19ZM27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,12.8,0,52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.93,0,67.42,67.42,0,0,0-21,14.29,67.42,67.42,0,0,0-21-14.29,40,40,0,1,0-53.93,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M28.4,124.8a6,6,0,0,0,8.4-1.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21,65.74,65.74,0,0,0-29.69-22.26,38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,110.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,116.4,6,6,0,0,0,28.4,124.8ZM176,38a26,26,0,1,1-26,26A26,26,0,0,1,176,38ZM80,38A26,26,0,1,1,54,64,26,26,0,0,1,80,38ZM199.11,198.13a38,38,0,1,0-46.22,0A65.32,65.32,0,0,0,128,214.7a65.32,65.32,0,0,0-24.89-16.57,38,38,0,1,0-46.22,0A65.69,65.69,0,0,0,27.2,220.4a6,6,0,1,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,8.4,1.19,5.59,5.59,0,0,0,1.19-1.19h0a54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.21A65.74,65.74,0,0,0,199.11,198.13ZM80,142a26,26,0,1,1-26,26A26,26,0,0,1,80,142Zm96,0a26,26,0,1,1-26,26A26,26,0,0,1,176,142Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M29.6,123.2a4,4,0,0,0,5.6-.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,1,0,6.4-4.8,63.55,63.55,0,0,0-32.5-22.85,36,36,0,1,0-37.4,0,63.39,63.39,0,0,0-29.3,19,63.34,63.34,0,0,0-29.3-19,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,117.6,4,4,0,0,0,29.6,123.2ZM148,64a28,28,0,1,1,28,28A28,28,0,0,1,148,64ZM52,64A28,28,0,1,1,80,92,28,28,0,0,1,52,64ZM194.7,198.75a36,36,0,1,0-37.4,0A63.39,63.39,0,0,0,128,217.7a63.34,63.34,0,0,0-29.3-18.95,36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,28.8,221.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,3.93,3.93,0,0,0,6.38,0h0a56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.55,63.55,0,0,0,194.7,198.75ZM52,168a28,28,0,1,1,28,28A28,28,0,0,1,52,168Zm96,0a28,28,0,1,1,28,28A28,28,0,0,1,148,168Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "UsersFour";
    },
    49840: (t, e, r) => {
      t = r.nmd(t);
      var n = r(7985),
        o = e && !e.nodeType && e,
        a = o && t && !t.nodeType && t,
        i = a && a.exports === o && n.process,
        c = (function () {
          try {
            var t = a && a.require && a.require("util").types;
            if (t) return t;
            return i && i.binding && i.binding("util");
          } catch (t) {}
        })();
      t.exports = c;
    },
    49872: (t, e, r) => {
      var n = r(22471);
      t.exports = function (t, e) {
        return function (r, o) {
          if (null == r) return r;
          if (!n(r)) return t(r, o);
          for (
            var a = r.length, i = e ? a : -1, c = Object(r);
            (e ? i-- : ++i < a) && !1 !== o(c[i], i, c);

          );
          return r;
        };
      };
    },
    50091: (t, e, r) => {
      "use strict";
      r.d(e, {
        DR: () => d,
        rY: () => x,
        yi: () => g,
        Yp: () => y,
        sk: () => b,
        AF: () => v,
        Nk: () => m,
      });
      var n = r(12115),
        o = r(93179);
      r(97124), r(29794);
      var a = r(91113),
        i = r.n(a)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join(
              ""
            );
          }
        ),
        c = (0, n.createContext)(void 0),
        l = (0, n.createContext)(void 0),
        u = (0, n.createContext)(void 0),
        s = (0, n.createContext)({}),
        f = (0, n.createContext)(void 0),
        p = (0, n.createContext)(0),
        h = (0, n.createContext)(0),
        d = function (t) {
          var e = t.state,
            r = e.xAxisMap,
            o = e.yAxisMap,
            a = e.offset,
            d = t.clipPathId,
            y = t.children,
            v = t.width,
            m = t.height,
            b = i(a);
          return n.createElement(
            c.Provider,
            { value: r },
            n.createElement(
              l.Provider,
              { value: o },
              n.createElement(
                s.Provider,
                { value: a },
                n.createElement(
                  u.Provider,
                  { value: b },
                  n.createElement(
                    f.Provider,
                    { value: d },
                    n.createElement(
                      p.Provider,
                      { value: m },
                      n.createElement(h.Provider, { value: v }, y)
                    )
                  )
                )
              )
            )
          );
        },
        y = function () {
          return (0, n.useContext)(f);
        },
        v = function (t) {
          var e = (0, n.useContext)(c);
          null == e && (0, o.A)(!1);
          var r = e[t];
          return null == r && (0, o.A)(!1), r;
        },
        m = function (t) {
          var e = (0, n.useContext)(l);
          null == e && (0, o.A)(!1);
          var r = e[t];
          return null == r && (0, o.A)(!1), r;
        },
        b = function () {
          return (0, n.useContext)(u);
        },
        g = function () {
          return (0, n.useContext)(h);
        },
        x = function () {
          return (0, n.useContext)(p);
        };
    },
    50111: (t, e, r) => {
      var n = r(73800),
        o = r(9813),
        a = r(39608),
        i = r(99544),
        c = r(15631),
        l = r(94356);
      t.exports = function (t, e, r) {
        e = n(e, t);
        for (var u = -1, s = e.length, f = !1; ++u < s; ) {
          var p = l(e[u]);
          if (!(f = null != t && r(t, p))) break;
          t = t[p];
        }
        return f || ++u != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              c(s) &&
              i(p, s) &&
              (a(t) || o(t));
      };
    },
    50330: (t, e, r) => {
      "use strict";
      t.exports = r(30294);
    },
    50523: (t, e, r) => {
      var n = r(24376),
        o = r(76957),
        a = r(58817),
        i = r(38406),
        c = r(90724),
        l = r(74166),
        u = n ? n.prototype : void 0,
        s = u ? u.valueOf : void 0;
      t.exports = function (t, e, r, n, u, f, p) {
        switch (r) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              break;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            if (t.byteLength != e.byteLength || !f(new o(t), new o(e))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return a(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var h = c;
          case "[object Set]":
            var d = 1 & n;
            if ((h || (h = l), t.size != e.size && !d)) break;
            var y = p.get(t);
            if (y) return y == e;
            (n |= 2), p.set(t, e);
            var v = i(h(t), h(e), n, u, f, p);
            return p.delete(t), v;
          case "[object Symbol]":
            if (s) return s.call(t) == s.call(e);
        }
        return !1;
      };
    },
    50664: (t) => {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    50687: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    50851: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    51172: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => l });
      var n = r(12115),
        o = r(52596),
        a = r(43597),
        i = r(70788);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = function (t) {
        var e = t.cx,
          r = t.cy,
          l = t.r,
          u = t.className,
          s = (0, o.A)("recharts-dot", u);
        return e === +e && r === +r && l === +l
          ? n.createElement(
              "circle",
              c({}, (0, i.J9)(t, !1), (0, a._U)(t), {
                className: s,
                cx: e,
                cy: r,
                r: l,
              })
            )
          : null;
      };
    },
    51445: (t, e, r) => {
      var n = r(53516);
      t.exports = function (t, e) {
        var r;
        return (
          n(t, function (t, n, o) {
            return !(r = e(t, n, o));
          }),
          !!r
        );
      };
    },
    51911: (t, e, r) => {
      var n = r(69229),
        o = r(48611);
      t.exports = function t(e, r, a, i, c) {
        return (
          e === r ||
          (null != e && null != r && (o(e) || o(r))
            ? n(e, r, a, i, t, c)
            : e != e && r != r)
        );
      };
    },
    52521: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    53516: (t, e, r) => {
      var n = r(20480);
      t.exports = r(49872)(n);
    },
    53696: (t, e, r) => {
      var n = r(75899),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    54360: (t, e, r) => {
      var n = r(58817);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    54811: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    54906: (t, e, r) => {
      var n = r(83711);
      t.exports = (function () {
        try {
          var t = n(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })();
    },
    55404: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M255.62,51.65a12,12,0,0,0-11.27-11.27c-53.27-3.13-96.2,13.36-114.84,44.14-12.14,20-12.56,44.17-1.46,67.3a75.14,75.14,0,0,0-12.28,23l-12.66-12.66c7.19-16.77,6.43-34.11-2.4-48.69C86.73,90.36,54.89,78,15.55,80.27A12,12,0,0,0,4.28,91.55C2,130.89,14.36,162.73,37.45,176.71a49.76,49.76,0,0,0,26,7.27,57.54,57.54,0,0,0,22.7-4.87L112,205v23a12,12,0,0,0,24,0V198.51a51.63,51.63,0,0,1,9.49-29.95,76.82,76.82,0,0,0,32.1,7.39,64.91,64.91,0,0,0,33.89-9.46C242.25,147.85,258.76,104.92,255.62,51.65ZM49.88,156.18c-13.19-8-21.18-27.46-21.83-52.13,24.67.65,44.14,8.64,52.13,21.83a26,26,0,0,1,3.63,17L72.48,131.51a12,12,0,0,0-17,17l11.34,11.34A26.27,26.27,0,0,1,49.88,156.18ZM199.05,146c-10.66,6.45-23,7.67-35.81,3.76l37.25-37.24a12,12,0,0,0-17-17l-37.25,37.24C142.37,120,143.59,107.61,150,97c12.7-21,42.65-33,81.32-33H232C232.14,103,220.14,133.18,199.05,146Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.39,138.54,149.46ZM16.26,88.26c-3.8,64.61,34.21,95,72.21,72.21C111.27,122.47,80.87,84.46,16.26,88.26Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.48-11.78,43.16-.16,65.74a71.37,71.37,0,0,0-14.17,26.95L98.33,159c7.82-16.33,7.52-33.36-1-47.49C84.09,89.73,53.62,78,15.79,80.27a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM86.06,146.74l-24.41-24.4a8,8,0,0,0-11.31,11.31l24.41,24.41c-9.61,3.18-18.93,2.39-26.94-2.46C32.47,146.31,23.79,124.32,24,96c28.31-.25,50.31,8.47,59.6,23.81C88.45,127.82,89.24,137.14,86.06,146.74Zm111.06-1.36c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.32L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.8,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M205.41,159.07a60.9,60.9,0,0,1-31.83,8.86,71.71,71.71,0,0,1-27.36-5.66A55.55,55.55,0,0,0,136,194.51V224a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.25V211.31L81.38,172.69A52.5,52.5,0,0,1,63.44,176a45.82,45.82,0,0,1-23.92-6.67C17.73,156.09,6,125.62,8.27,87.79a8,8,0,0,1,7.52-7.52c37.83-2.23,68.3,9.46,81.5,31.25A46,46,0,0,1,103.74,140a4,4,0,0,1-6.89,2.43l-19.2-20.1a8,8,0,0,0-11.31,11.31l53.88,55.25c.06-.78.13-1.56.21-2.33a68.56,68.56,0,0,1,18.64-39.46l50.59-53.46a8,8,0,0,0-11.31-11.32l-49,51.82a4,4,0,0,1-6.78-1.74c-4.74-17.48-2.65-34.88,6.4-49.82,17.86-29.48,59.42-45.26,111.18-42.22a8,8,0,0,1,7.52,7.52C250.67,99.65,234.89,141.21,205.41,159.07Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M245.63,48A6,6,0,0,0,240,42.37c-51-3-91.88,12.42-109.35,41.26-11.63,19.21-11.38,42.68.53,65a69.42,69.42,0,0,0-15.48,30.59L95.9,159.41c8.15-16.1,8.1-32.95-.32-46.85C82.77,91.41,53,80.07,15.9,82.27a6,6,0,0,0-5.63,5.64C8.09,125,19.41,154.77,40.56,167.58A43.75,43.75,0,0,0,63.44,174a53.17,53.17,0,0,0,24-6L114,194.48V224a6,6,0,0,0,12,0V194.51A57.55,57.55,0,0,1,139.76,157c11.21,5.93,22.72,8.91,33.82,8.91a58.9,58.9,0,0,0,30.79-8.57C233.21,139.89,248.63,99,245.63,48ZM46.78,157.31C30.47,147.44,21.39,124,22,94c30-.65,53.41,8.44,63.28,24.75,5.68,9.37,6.16,20.38,1.54,31.59L60.24,123.75a6,6,0,0,0-8.49,8.49l26.62,26.61C67.16,163.47,56.15,163,46.78,157.31Zm151.38-10.22c-14.74,8.92-32.14,9.18-49.67.9l55.76-55.75a6,6,0,0,0-8.49-8.49L140,139.51c-8.28-17.53-8-34.93.9-49.66,14.52-24,49.06-37.18,93-35.75C235.33,98,222.14,132.56,198.16,147.09Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M243.63,48.12a4,4,0,0,0-3.76-3.75c-50.25-3-90.44,12.1-107.52,40.29-11.64,19.22-11.17,41.92,1.24,64.21a67.33,67.33,0,0,0-16.65,34.41L93.45,159.79c8.63-16,8.81-32.33.42-46.19C81.45,93.09,52.35,82.13,16,84.26A4,4,0,0,0,12.26,88c-2.13,36.33,8.83,65.43,29.34,77.85a41.82,41.82,0,0,0,21.88,6.18,51.29,51.29,0,0,0,24.31-6.6L116,193.67c0,.28,0,.56,0,.84V224a4,4,0,0,0,8,0V194.51a59.57,59.57,0,0,1,15.29-40c11.49,6.36,23.07,9.56,34.24,9.56a57,57,0,0,0,29.81-8.41C231.52,138.57,246.59,98.38,243.63,48.12ZM45.74,159C28.47,148.56,19,123.69,20.08,92.08c31.61-1.09,56.48,8.39,67,25.66,6.48,10.71,6.59,23.37.46,36.09L58.82,125.17a4,4,0,0,0-5.65,5.65l28.67,28.67C69.11,165.62,56.45,165.51,45.74,159ZM199.19,148.8c-16.05,9.72-35.09,9.59-54.08-.25l57.72-57.73a4,4,0,0,0-5.65-5.66l-57.73,57.73c-9.84-19-10-38-.25-54.08,15.11-25,51.08-38.53,96.63-36.64C237.73,97.72,224.15,133.69,199.19,148.8Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Plant";
    },
    55794: (t, e, r) => {
      var n = r(57213),
        o = r(34711),
        a = r(18028),
        i = r(6305),
        c = r(50664),
        l = r(33332),
        u = r(9699),
        s = r(13465),
        f = r(39608);
      t.exports = function (t, e, r) {
        e = e.length
          ? n(e, function (t) {
              return f(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        return (
          (e = n(e, l(a))),
          c(
            i(t, function (t, r, o) {
              return {
                criteria: n(e, function (e) {
                  return e(t);
                }),
                index: ++p,
                value: t,
              };
            }),
            function (t, e) {
              return u(t, e, r);
            }
          )
        );
      };
    },
    55910: (t, e, r) => {
      var n = r(4854),
        o = r(27569),
        a = r(92972);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? a(e[0][0], e[0][1])
          : function (r) {
              return r === t || n(r, t, e);
            };
      };
    },
    56917: (t, e, r) => {
      var n = r(98233),
        o = r(48611);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == n(t));
      };
    },
    57213: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
          o[r] = e(t[r], r, t);
        return o;
      };
    },
    58022: (t, e, r) => {
      "use strict";
      r.d(e, { p: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M24,108H44v48H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24H212V108h20a12,12,0,0,0,6.29-22.22l-104-64a12,12,0,0,0-12.58,0l-104,64A12,12,0,0,0,24,108Zm44,0H92v48H68Zm72,0v48H116V108Zm48,48H164V108h24ZM128,46.09,189.6,84H66.4ZM252,208a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H240A12,12,0,0,1,252,208Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,96H24L128,32Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208ZM16.3,98.18a8,8,0,0,1,3.51-9l104-64a8,8,0,0,1,8.38,0l104,64A8,8,0,0,1,232,104H208v64h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V104H24A8,8,0,0,1,16.3,98.18ZM144,160a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0Zm-48,0a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M24,102H50v68H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12H206V102h26a6,6,0,0,0,3.14-11.11l-104-64a6,6,0,0,0-6.28,0l-104,64A6,6,0,0,0,24,102Zm38,0H98v68H62Zm84,0v68H110V102Zm48,68H158V102h36ZM128,39l82.8,51H45.2ZM246,208a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H240A6,6,0,0,1,246,208Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M24,100H52v72H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8H204V100h28a4,4,0,0,0,2.1-7.41l-104-64a4,4,0,0,0-4.2,0l-104,64A4,4,0,0,0,24,100Zm36,0h40v72H60Zm88,0v72H108V100Zm48,72H156V100h40ZM128,36.7,217.87,92H38.13ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H240A4,4,0,0,1,244,208Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Bank";
    },
    58096: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    58817: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    58918: (t, e, r) => {
      var n = r(70771);
      t.exports = function (t, e, r) {
        for (var o = -1, a = t.length; ++o < a; ) {
          var i = t[o],
            c = e(i);
          if (null != c && (void 0 === l ? c == c && !n(c) : r(c, l)))
            var l = c,
              u = i;
        }
        return u;
      };
    },
    59882: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    59935: (t, e, r) => {
      "use strict";
      r.d(e, { H: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Minus";
    },
    60245: (t, e, r) => {
      var n = r(51911);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    60379: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => E });
      var n = r(12115),
        o = r(59882),
        a = r.n(o),
        i = r(40139),
        c = r.n(i),
        l = r(67460),
        u = r.n(l),
        s = r(52596),
        f = r(79095),
        p = r(70788),
        h = r(16377),
        d = r(25641);
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var v = ["offset"];
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != y(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != y(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == y(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var O = function (t) {
          var e = t.value,
            r = t.formatter,
            n = a()(t.children) ? e : t.children;
          return c()(r) ? r(n) : n;
        },
        w = function (t, e, r) {
          var o,
            i,
            c = t.position,
            l = t.viewBox,
            u = t.offset,
            f = t.className,
            p = l.cx,
            y = l.cy,
            v = l.innerRadius,
            m = l.outerRadius,
            b = l.startAngle,
            g = l.endAngle,
            O = l.clockWise,
            w = (v + m) / 2,
            A = (0, h.sA)(g - b) * Math.min(Math.abs(g - b), 360),
            j = A >= 0 ? 1 : -1;
          "insideStart" === c
            ? ((o = b + j * u), (i = O))
            : "insideEnd" === c
            ? ((o = g - j * u), (i = !O))
            : "end" === c && ((o = g + j * u), (i = O)),
            (i = A <= 0 ? i : !i);
          var E = (0, d.IZ)(p, y, w, o),
            S = (0, d.IZ)(p, y, w, o + (i ? 1 : -1) * 359),
            P = "M"
              .concat(E.x, ",")
              .concat(E.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(+!i, ",\n    ")
              .concat(S.x, ",")
              .concat(S.y),
            M = a()(t.id) ? (0, h.NF)("recharts-radial-line-") : t.id;
          return n.createElement(
            "text",
            x({}, r, {
              dominantBaseline: "central",
              className: (0, s.A)("recharts-radial-bar-label", f),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: M, d: P })
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(M) }, e)
          );
        },
        A = function (t) {
          var e = t.viewBox,
            r = t.offset,
            n = t.position,
            o = e.cx,
            a = e.cy,
            i = e.innerRadius,
            c = e.outerRadius,
            l = (e.startAngle + e.endAngle) / 2;
          if ("outside" === n) {
            var u = (0, d.IZ)(o, a, c + r, l),
              s = u.x;
            return {
              x: s,
              y: u.y,
              textAnchor: s >= o ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
            return { x: o, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var f = (0, d.IZ)(o, a, (i + c) / 2, l);
          return {
            x: f.x,
            y: f.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        j = function (t) {
          var e = t.viewBox,
            r = t.parentViewBox,
            n = t.offset,
            o = t.position,
            a = e.x,
            i = e.y,
            c = e.width,
            l = e.height,
            s = l >= 0 ? 1 : -1,
            f = s * n,
            p = s > 0 ? "end" : "start",
            d = s > 0 ? "start" : "end",
            y = c >= 0 ? 1 : -1,
            v = y * n,
            m = y > 0 ? "end" : "start",
            b = y > 0 ? "start" : "end";
          if ("top" === o)
            return g(
              g(
                {},
                {
                  x: a + c / 2,
                  y: i - s * n,
                  textAnchor: "middle",
                  verticalAnchor: p,
                }
              ),
              r ? { height: Math.max(i - r.y, 0), width: c } : {}
            );
          if ("bottom" === o)
            return g(
              g(
                {},
                {
                  x: a + c / 2,
                  y: i + l + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                }
              ),
              r
                ? { height: Math.max(r.y + r.height - (i + l), 0), width: c }
                : {}
            );
          if ("left" === o) {
            var x = {
              x: a - v,
              y: i + l / 2,
              textAnchor: m,
              verticalAnchor: "middle",
            };
            return g(
              g({}, x),
              r ? { width: Math.max(x.x - r.x, 0), height: l } : {}
            );
          }
          if ("right" === o) {
            var O = {
              x: a + c + v,
              y: i + l / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return g(
              g({}, O),
              r ? { width: Math.max(r.x + r.width - O.x, 0), height: l } : {}
            );
          }
          var w = r ? { width: c, height: l } : {};
          return "insideLeft" === o
            ? g(
                {
                  x: a + v,
                  y: i + l / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideRight" === o
            ? g(
                {
                  x: a + c - v,
                  y: i + l / 2,
                  textAnchor: m,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideTop" === o
            ? g(
                {
                  x: a + c / 2,
                  y: i + f,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                w
              )
            : "insideBottom" === o
            ? g(
                {
                  x: a + c / 2,
                  y: i + l - f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                w
              )
            : "insideTopLeft" === o
            ? g({ x: a + v, y: i + f, textAnchor: b, verticalAnchor: d }, w)
            : "insideTopRight" === o
            ? g({ x: a + c - v, y: i + f, textAnchor: m, verticalAnchor: d }, w)
            : "insideBottomLeft" === o
            ? g({ x: a + v, y: i + l - f, textAnchor: b, verticalAnchor: p }, w)
            : "insideBottomRight" === o
            ? g(
                {
                  x: a + c - v,
                  y: i + l - f,
                  textAnchor: m,
                  verticalAnchor: p,
                },
                w
              )
            : u()(o) &&
              ((0, h.Et)(o.x) || (0, h._3)(o.x)) &&
              ((0, h.Et)(o.y) || (0, h._3)(o.y))
            ? g(
                {
                  x: a + (0, h.F4)(o.x, c),
                  y: i + (0, h.F4)(o.y, l),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                w
              )
            : g(
                {
                  x: a + c / 2,
                  y: i + l / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                w
              );
        };
      function E(t) {
        var e,
          r = t.offset,
          o = g(
            { offset: void 0 === r ? 5 : r },
            (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, v)
          ),
          i = o.viewBox,
          l = o.position,
          u = o.value,
          d = o.children,
          y = o.content,
          m = o.className,
          b = o.textBreakAll;
        if (!i || (a()(u) && a()(d) && !(0, n.isValidElement)(y) && !c()(y)))
          return null;
        if ((0, n.isValidElement)(y)) return (0, n.cloneElement)(y, o);
        if (c()(y)) {
          if (((e = (0, n.createElement)(y, o)), (0, n.isValidElement)(e)))
            return e;
        } else e = O(o);
        var E = "cx" in i && (0, h.Et)(i.cx),
          S = (0, p.J9)(o, !0);
        if (E && ("insideStart" === l || "insideEnd" === l || "end" === l))
          return w(o, e, S);
        var P = E ? A(o) : j(o);
        return n.createElement(
          f.E,
          x(
            { className: (0, s.A)("recharts-label", void 0 === m ? "" : m) },
            S,
            P,
            { breakAll: b }
          ),
          e
        );
      }
      E.displayName = "Label";
      var S = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.angle,
          o = t.startAngle,
          a = t.endAngle,
          i = t.r,
          c = t.radius,
          l = t.innerRadius,
          u = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          b = t.labelViewBox;
        if (b) return b;
        if ((0, h.Et)(y) && (0, h.Et)(v)) {
          if ((0, h.Et)(s) && (0, h.Et)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.Et)(p) && (0, h.Et)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.Et)(s) && (0, h.Et)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.Et)(e) && (0, h.Et)(r)
          ? {
              cx: e,
              cy: r,
              startAngle: o || n || 0,
              endAngle: a || n || 0,
              innerRadius: l || 0,
              outerRadius: u || c || i || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (E.parseViewBox = S),
        (E.renderCallByParent = function (t, e) {
          var r,
            o,
            a =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && a && !t.label)) return null;
          var i = t.children,
            l = S(t),
            s = (0, p.aS)(i, E).map(function (t, r) {
              return (0,
              n.cloneElement)(t, { viewBox: e || l, key: "label-".concat(r) });
            });
          if (!a) return s;
          return [
            ((r = t.label),
            (o = e || l),
            !r
              ? null
              : !0 === r
              ? n.createElement(E, { key: "label-implicit", viewBox: o })
              : (0, h.vh)(r)
              ? n.createElement(E, {
                  key: "label-implicit",
                  viewBox: o,
                  value: r,
                })
              : (0, n.isValidElement)(r)
              ? r.type === E
                ? (0, n.cloneElement)(r, { key: "label-implicit", viewBox: o })
                : n.createElement(E, {
                    key: "label-implicit",
                    content: r,
                    viewBox: o,
                  })
              : c()(r)
              ? n.createElement(E, {
                  key: "label-implicit",
                  content: r,
                  viewBox: o,
                })
              : u()(r)
              ? n.createElement(
                  E,
                  x({ viewBox: o }, r, { key: "label-implicit" })
                )
              : null),
          ].concat(
            (function (t) {
              if (Array.isArray(t)) return m(t);
            })(s) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(s) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return m(t, void 0);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === r &&
                      t.constructor &&
                      (r = t.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return m(t, e);
                }
              })(s) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
          );
        });
    },
    61632: (t, e, r) => {
      var n = r(16571);
      t.exports = r(36730)(n);
    },
    61830: (t, e, r) => {
      var n = r(54360);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    62341: (t, e, r) => {
      "use strict";
      r.d(e, { G: () => L });
      var n = r(12115),
        o = r(52596),
        a = r(9557),
        i = r(40139),
        c = r.n(i),
        l = r(22315),
        u = r.n(l),
        s = r(59882),
        f = r.n(s),
        p = r(13908),
        h = r.n(p),
        d = r(60245),
        y = r.n(d),
        v = r(70688),
        m = r(51172),
        b = r(2348),
        g = r(36079),
        x = r(41643),
        O = r(16377),
        w = r(12814),
        A = r(70788),
        j = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
        E = ["key"];
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function P(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function M() {
        return (M = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, N(n.key), n);
        }
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
      }
      function I(t) {
        return (I = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Z(t, e) {
        return (Z = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function D(t, e, r) {
        return (
          (e = N(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function N(t) {
        var e = (function (t, e) {
          if ("object" != S(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != S(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == S(e) ? e : e + "";
      }
      var L = (function (t) {
        var e, r;
        function i() {
          var t, e, r;
          if (!(this instanceof i))
            throw TypeError("Cannot call a class as a function");
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = i),
            (r = [].concat(o)),
            (e = I(e)),
            D(
              (t = (function (t, e) {
                if (e && ("object" === S(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                C()
                  ? Reflect.construct(e, r || [], I(this).constructor)
                  : e.apply(this, r)
              )),
              "state",
              { isAnimationFinished: !0 }
            ),
            D(t, "id", (0, O.NF)("recharts-area-")),
            D(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), c()(e) && e();
            }),
            D(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), c()(e) && e();
            }),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (i.prototype = Object.create(t && t.prototype, {
            constructor: { value: i, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          t && Z(i, t),
          (e = [
            {
              key: "renderDots",
              value: function (t, e, r) {
                var o = this.props.isAnimationActive,
                  a = this.state.isAnimationFinished;
                if (o && !a) return null;
                var c = this.props,
                  l = c.dot,
                  u = c.points,
                  s = c.dataKey,
                  f = (0, A.J9)(this.props, !1),
                  p = (0, A.J9)(l, !0),
                  h = u.map(function (t, e) {
                    var r = _(
                      _(_({ key: "dot-".concat(e), r: 3 }, f), p),
                      {},
                      {
                        index: e,
                        cx: t.x,
                        cy: t.y,
                        dataKey: s,
                        value: t.value,
                        payload: t.payload,
                        points: u,
                      }
                    );
                    return i.renderDotItem(l, r);
                  }),
                  d = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return n.createElement(
                  b.W,
                  M({ className: "recharts-area-dots" }, d),
                  h
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  o = e.points,
                  a = e.strokeWidth,
                  i = o[0].x,
                  c = o[o.length - 1].x,
                  l = t * Math.abs(i - c),
                  s = u()(
                    o.map(function (t) {
                      return t.y || 0;
                    })
                  );
                return ((0, O.Et)(r) && "number" == typeof r
                  ? (s = Math.max(r, s))
                  : r &&
                    Array.isArray(r) &&
                    r.length &&
                    (s = Math.max(
                      u()(
                        r.map(function (t) {
                          return t.y || 0;
                        })
                      ),
                      s
                    )),
                (0, O.Et)(s))
                  ? n.createElement("rect", {
                      x: i < c ? i : i - l,
                      y: 0,
                      width: l,
                      height: Math.floor(
                        s + (a ? parseInt("".concat(a), 10) : 1)
                      ),
                    })
                  : null;
              },
            },
            {
              key: "renderVerticalRect",
              value: function (t) {
                var e = this.props,
                  r = e.baseLine,
                  o = e.points,
                  a = e.strokeWidth,
                  i = o[0].y,
                  c = o[o.length - 1].y,
                  l = t * Math.abs(i - c),
                  s = u()(
                    o.map(function (t) {
                      return t.x || 0;
                    })
                  );
                return ((0, O.Et)(r) && "number" == typeof r
                  ? (s = Math.max(r, s))
                  : r &&
                    Array.isArray(r) &&
                    r.length &&
                    (s = Math.max(
                      u()(
                        r.map(function (t) {
                          return t.x || 0;
                        })
                      ),
                      s
                    )),
                (0, O.Et)(s))
                  ? n.createElement("rect", {
                      x: 0,
                      y: i < c ? i : i - l,
                      width: s + (a ? parseInt("".concat(a), 10) : 1),
                      height: Math.floor(l),
                    })
                  : null;
              },
            },
            {
              key: "renderClipRect",
              value: function (t) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(t)
                  : this.renderHorizontalRect(t);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (t, e, r, o) {
                var a = this.props,
                  i = a.layout,
                  c = a.type,
                  l = a.stroke,
                  u = a.connectNulls,
                  s = a.isRange,
                  f = (a.ref, P(a, j));
                return n.createElement(
                  b.W,
                  { clipPath: r ? "url(#clipPath-".concat(o, ")") : null },
                  n.createElement(
                    v.I,
                    M({}, (0, A.J9)(f, !0), {
                      points: t,
                      connectNulls: u,
                      type: c,
                      baseLine: e,
                      layout: i,
                      stroke: "none",
                      className: "recharts-area-area",
                    })
                  ),
                  "none" !== l &&
                    n.createElement(
                      v.I,
                      M({}, (0, A.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: i,
                        type: c,
                        connectNulls: u,
                        fill: "none",
                        points: t,
                      })
                    ),
                  "none" !== l &&
                    s &&
                    n.createElement(
                      v.I,
                      M({}, (0, A.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: i,
                        type: c,
                        connectNulls: u,
                        fill: "none",
                        points: e,
                      })
                    )
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (t, e) {
                var r = this,
                  o = this.props,
                  i = o.points,
                  c = o.baseLine,
                  l = o.isAnimationActive,
                  u = o.animationBegin,
                  s = o.animationDuration,
                  p = o.animationEasing,
                  d = o.animationId,
                  y = this.state,
                  v = y.prevPoints,
                  m = y.prevBaseLine;
                return n.createElement(
                  a.Ay,
                  {
                    begin: u,
                    duration: s,
                    isActive: l,
                    easing: p,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(d),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (o) {
                    var a = o.t;
                    if (v) {
                      var l,
                        u = v.length / i.length,
                        s = i.map(function (t, e) {
                          var r = Math.floor(e * u);
                          if (v[r]) {
                            var n = v[r],
                              o = (0, O.Dj)(n.x, t.x),
                              i = (0, O.Dj)(n.y, t.y);
                            return _(_({}, t), {}, { x: o(a), y: i(a) });
                          }
                          return t;
                        });
                      return (
                        (l =
                          (0, O.Et)(c) && "number" == typeof c
                            ? (0, O.Dj)(m, c)(a)
                            : f()(c) || h()(c)
                            ? (0, O.Dj)(m, 0)(a)
                            : c.map(function (t, e) {
                                var r = Math.floor(e * u);
                                if (m[r]) {
                                  var n = m[r],
                                    o = (0, O.Dj)(n.x, t.x),
                                    i = (0, O.Dj)(n.y, t.y);
                                  return _(_({}, t), {}, { x: o(a), y: i(a) });
                                }
                                return t;
                              })),
                        r.renderAreaStatically(s, l, t, e)
                      );
                    }
                    return n.createElement(
                      b.W,
                      null,
                      n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          r.renderClipRect(a)
                        )
                      ),
                      n.createElement(
                        b.W,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        r.renderAreaStatically(i, c, t, e)
                      )
                    );
                  }
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  o = r.baseLine,
                  a = r.isAnimationActive,
                  i = this.state,
                  c = i.prevPoints,
                  l = i.prevBaseLine,
                  u = i.totalLength;
                return a &&
                  n &&
                  n.length &&
                  ((!c && u > 0) || !y()(c, n) || !y()(l, o))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(n, o, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  a = e.dot,
                  i = e.points,
                  c = e.className,
                  l = e.top,
                  u = e.left,
                  s = e.xAxis,
                  p = e.yAxis,
                  h = e.width,
                  d = e.height,
                  y = e.isAnimationActive,
                  v = e.id;
                if (r || !i || !i.length) return null;
                var m = this.state.isAnimationFinished,
                  x = 1 === i.length,
                  O = (0, o.A)("recharts-area", c),
                  w = s && s.allowDataOverflow,
                  j = p && p.allowDataOverflow,
                  E = w || j,
                  S = f()(v) ? this.id : v,
                  P =
                    null != (t = (0, A.J9)(a, !1))
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  M = P.r,
                  k = P.strokeWidth,
                  _ = ((0, A.sT)(a) ? a : {}).clipDot,
                  T = void 0 === _ || _,
                  C = 2 * (void 0 === M ? 3 : M) + (void 0 === k ? 2 : k);
                return n.createElement(
                  b.W,
                  { className: O },
                  w || j
                    ? n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(S) },
                          n.createElement("rect", {
                            x: w ? u : u - h / 2,
                            y: j ? l : l - d / 2,
                            width: w ? h : 2 * h,
                            height: j ? d : 2 * d,
                          })
                        ),
                        !T &&
                          n.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(S) },
                            n.createElement("rect", {
                              x: u - C / 2,
                              y: l - C / 2,
                              width: h + C,
                              height: d + C,
                            })
                          )
                      )
                    : null,
                  x ? null : this.renderArea(E, S),
                  (a || x) && this.renderDots(E, T, S),
                  (!y || m) && g.Z.renderCallByParent(this.props, i)
                );
              },
            },
          ]),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      curBaseLine: t.baseLine,
                      prevPoints: e.curPoints,
                      prevBaseLine: e.curBaseLine,
                    }
                  : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
                  ? { curPoints: t.points, curBaseLine: t.baseLine }
                  : null;
              },
            },
          ]),
          e && T(i.prototype, e),
          r && T(i, r),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(n.PureComponent);
      D(L, "displayName", "Area"),
        D(L, "defaultProps", {
          stroke: "#3182bd",
          fill: "#3182bd",
          fillOpacity: 0.6,
          xAxisId: 0,
          yAxisId: 0,
          legendType: "line",
          connectNulls: !1,
          points: [],
          dot: !1,
          activeDot: !0,
          hide: !1,
          isAnimationActive: !x.m.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        D(L, "getBaseValue", function (t, e, r, n) {
          var o = t.layout,
            a = t.baseValue,
            i = e.props.baseValue,
            c = null != i ? i : a;
          if ((0, O.Et)(c) && "number" == typeof c) return c;
          var l = "horizontal" === o ? n : r,
            u = l.scale.domain();
          if ("number" === l.type) {
            var s = Math.max(u[0], u[1]),
              f = Math.min(u[0], u[1]);
            return "dataMin" === c
              ? f
              : "dataMax" === c || s < 0
              ? s
              : Math.max(Math.min(u[0], u[1]), 0);
          }
          return "dataMin" === c ? u[0] : "dataMax" === c ? u[1] : u[0];
        }),
        D(L, "getComposedData", function (t) {
          var e,
            r = t.props,
            n = t.item,
            o = t.xAxis,
            a = t.yAxis,
            i = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.bandSize,
            u = t.dataKey,
            s = t.stackedData,
            f = t.dataStartIndex,
            p = t.displayedData,
            h = t.offset,
            d = r.layout,
            y = s && s.length,
            v = L.getBaseValue(r, n, o, a),
            m = "horizontal" === d,
            b = !1,
            g = p.map(function (t, e) {
              y
                ? (r = s[f + e])
                : Array.isArray((r = (0, w.kr)(t, u)))
                ? (b = !0)
                : (r = [v, r]);
              var r,
                n = null == r[1] || (y && null == (0, w.kr)(t, u));
              return m
                ? {
                    x: (0, w.nb)({
                      axis: o,
                      ticks: i,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    y: n ? null : a.scale(r[1]),
                    value: r,
                    payload: t,
                  }
                : {
                    x: n ? null : o.scale(r[1]),
                    y: (0, w.nb)({
                      axis: a,
                      ticks: c,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    value: r,
                    payload: t,
                  };
            });
          return (
            (e =
              y || b
                ? g.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return m
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? a.scale(e) : null,
                        }
                      : { x: null != e ? o.scale(e) : null, y: t.y };
                  })
                : m
                ? a.scale(v)
                : o.scale(v)),
            _({ points: g, baseLine: e, layout: d, isRange: b }, h)
          );
        }),
        D(L, "renderDotItem", function (t, e) {
          var r;
          if (n.isValidElement(t)) r = n.cloneElement(t, e);
          else if (c()(t)) r = t(e);
          else {
            var a = (0, o.A)(
                "recharts-area-dot",
                "boolean" != typeof t ? t.className : ""
              ),
              i = e.key,
              l = P(e, E);
            r = n.createElement(m.c, M({}, l, { key: i, className: a }));
          }
          return r;
        });
    },
    62464: (t, e, r) => {
      var n = r(3562),
        o = r(18028),
        a = r(23360),
        i = Math.max;
      t.exports = function (t, e, r) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var l = null == r ? 0 : a(r);
        return l < 0 && (l = i(c + l, 0)), n(t, o(e, 3), l);
      };
    },
    62962: (t, e, r) => {
      var n = r(48659),
        o = r(65531),
        a = r(75145),
        i = r(85855);
      t.exports = function (t) {
        return function (e) {
          var r = o((e = i(e))) ? a(e) : void 0,
            c = r ? r[0] : e.charAt(0),
            l = r ? n(r, 1).join("") : e.slice(1);
          return c[t]() + l;
        };
      };
    },
    64189: (t, e, r) => {
      var n = r(74366),
        o = r(39641),
        a = r(42233);
      t.exports = function (t) {
        return function (e, r, i) {
          return (
            i && "number" != typeof i && o(e, r, i) && (r = i = void 0),
            (e = a(e)),
            void 0 === r ? ((r = e), (e = 0)) : (r = a(r)),
            (i = void 0 === i ? (e < r ? 1 : -1) : a(i)),
            n(e, r, i, t)
          );
        };
      };
    },
    64439: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    64588: (t, e, r) => {
      var n = r(84760),
        o = Math.max;
      t.exports = function (t, e, r) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var a = arguments, i = -1, c = o(a.length - e, 0), l = Array(c);
              ++i < c;

            )
              l[i] = a[e + i];
            i = -1;
            for (var u = Array(e + 1); ++i < e; ) u[i] = a[i];
            return (u[e] = r(l)), n(t, this, u);
          }
        );
      };
    },
    65531: (t) => {
      var e = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    65646: (t, e, r) => {
      var n = r(91569),
        o = r(39608);
      t.exports = function (t, e, r) {
        var a = e(t);
        return o(t) ? a : n(a, r(t));
      };
    },
    65796: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    65836: (t, e, r) => {
      var n = r(85090),
        o = r(7548),
        a = r(39984),
        i = r(82954),
        c = r(82596),
        l = r(74166);
      t.exports = function (t, e, r) {
        var u = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (r) (p = !1), (s = a);
        else if (f >= 200) {
          var y = e ? null : c(t);
          if (y) return l(y);
          (p = !1), (s = i), (d = new n());
        } else d = e ? [] : h;
        e: for (; ++u < f; ) {
          var v = t[u],
            m = e ? e(v) : v;
          if (((v = r || 0 !== v ? v : 0), p && m == m)) {
            for (var b = d.length; b--; ) if (d[b] === m) continue e;
            e && d.push(m), h.push(v);
          } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    66373: (t, e, r) => {
      t.exports = r(83711)(r(82500), "Promise");
    },
    67206: (t, e, r) => {
      var n = r(77969),
        o = r(55794),
        a = r(21087),
        i = r(39641);
      t.exports = a(function (t, e) {
        if (null == t) return [];
        var r = e.length;
        return (
          r > 1 && i(t, e[0], e[1])
            ? (e = [])
            : r > 2 && i(e[0], e[1], e[2]) && (e = [e[0]]),
          o(t, n(e, 1), [])
        );
      });
    },
    67460: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    67472: (t, e, r) => {
      var n = r(31598),
        o = r(90453),
        a = r(47995),
        i = r(65796),
        c = r(58096),
        l = r(7771);
      function u(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (u.prototype.clear = o),
        (u.prototype.delete = a),
        (u.prototype.get = i),
        (u.prototype.has = c),
        (u.prototype.set = l),
        (t.exports = u);
    },
    67790: (t, e, r) => {
      "use strict";
      r.d(e, {
        yp: () => C,
        GG: () => V,
        NE: () => I,
        nZ: () => Z,
        xQ: () => D,
      });
      var n = r(12115),
        o = r(40139),
        a = r.n(o),
        i = r(44482),
        c = r.n(i),
        l = r(56917),
        u = r.n(l),
        s = r(60245),
        f = r.n(s),
        p = r(44538),
        h = r(52596),
        d = r(9557),
        y = r(70788);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function g(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != v(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var O = function (t, e, r, n, o) {
          var a,
            i = r - n;
          return (
            "M ".concat(t, ",").concat(e) +
            "L ".concat(t + r, ",").concat(e) +
            "L ".concat(t + r - i / 2, ",").concat(e + o) +
            "L ".concat(t + r - i / 2 - n, ",").concat(e + o) +
            "L ".concat(t, ",").concat(e, " Z")
          );
        },
        w = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        A = function (t) {
          var e,
            r = x(x({}, w), t),
            o = (0, n.useRef)(),
            a =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, n.useState)(-1))) ||
              (function (t, e) {
                var r =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    a,
                    i,
                    c = [],
                    l = !0,
                    u = !1;
                  try {
                    (a = (r = r.call(t)).next), !1;
                    for (
                      ;
                      !(l = (n = a.call(r)).done) &&
                      (c.push(n.value), c.length !== e);
                      l = !0
                    );
                  } catch (t) {
                    (u = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((i = r.return()), Object(i) !== i)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return c;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return b(t, 2);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === r &&
                      t.constructor &&
                      (r = t.constructor.name),
                    "Map" === r || "Set" === r)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return b(t, e);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            i = a[0],
            c = a[1];
          (0, n.useEffect)(function () {
            if (o.current && o.current.getTotalLength)
              try {
                var t = o.current.getTotalLength();
                t && c(t);
              } catch (t) {}
          }, []);
          var l = r.x,
            u = r.y,
            s = r.upperWidth,
            f = r.lowerWidth,
            p = r.height,
            v = r.className,
            g = r.animationEasing,
            A = r.animationDuration,
            j = r.animationBegin,
            E = r.isUpdateAnimationActive;
          if (
            l !== +l ||
            u !== +u ||
            s !== +s ||
            f !== +f ||
            p !== +p ||
            (0 === s && 0 === f) ||
            0 === p
          )
            return null;
          var S = (0, h.A)("recharts-trapezoid", v);
          return E
            ? n.createElement(
                d.Ay,
                {
                  canBegin: i > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: p, x: l, y: u },
                  to: { upperWidth: s, lowerWidth: f, height: p, x: l, y: u },
                  duration: A,
                  animationEasing: g,
                  isActive: E,
                },
                function (t) {
                  var e = t.upperWidth,
                    a = t.lowerWidth,
                    c = t.height,
                    l = t.x,
                    u = t.y;
                  return n.createElement(
                    d.Ay,
                    {
                      canBegin: i > 0,
                      from: "0px ".concat(-1 === i ? 1 : i, "px"),
                      to: "".concat(i, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: j,
                      duration: A,
                      easing: g,
                    },
                    n.createElement(
                      "path",
                      m({}, (0, y.J9)(r, !0), {
                        className: S,
                        d: O(l, u, e, a, c),
                        ref: o,
                      })
                    )
                  );
                }
              )
            : n.createElement(
                "g",
                null,
                n.createElement(
                  "path",
                  m({}, (0, y.J9)(r, !0), { className: S, d: O(l, u, s, f, p) })
                )
              );
        },
        j = r(77283),
        E = r(2348),
        S = r(9795),
        P = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function M(t) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != M(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != M(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == M(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t) {
        var e = t.shapeType,
          r = t.elementProps;
        switch (e) {
          case "rectangle":
            return n.createElement(p.M, r);
          case "trapezoid":
            return n.createElement(A, r);
          case "sector":
            return n.createElement(j.h, r);
          case "symbols":
            if ("symbols" === e) return n.createElement(S.i, r);
            break;
          default:
            return null;
        }
      }
      function C(t) {
        var e,
          r = t.option,
          o = t.shapeType,
          i = t.propTransformer,
          l = t.activeClassName,
          s = t.isActive,
          f = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, P);
        if ((0, n.isValidElement)(r))
          e = (0, n.cloneElement)(
            r,
            _(_({}, f), (0, n.isValidElement)(r) ? r.props : r)
          );
        else if (a()(r)) e = r(f);
        else if (c()(r) && !u()(r)) {
          var p = (
            void 0 === i
              ? function (t, e) {
                  return _(_({}, e), t);
                }
              : i
          )(r, f);
          e = n.createElement(T, { shapeType: o, elementProps: p });
        } else e = n.createElement(T, { shapeType: o, elementProps: f });
        return s
          ? n.createElement(
              E.W,
              { className: void 0 === l ? "recharts-active-shape" : l },
              e
            )
          : e;
      }
      function I(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function Z(t, e) {
        return null != e && "sectors" in t.props;
      }
      function D(t, e) {
        return null != e && "points" in t.props;
      }
      function N(t, e) {
        var r,
          n,
          o =
            t.x ===
              (null == e || null == (r = e.labelViewBox) ? void 0 : r.x) ||
            t.x === e.x,
          a =
            t.y ===
              (null == e || null == (n = e.labelViewBox) ? void 0 : n.y) ||
            t.y === e.y;
        return o && a;
      }
      function L(t, e) {
        var r = t.endAngle === e.endAngle,
          n = t.startAngle === e.startAngle;
        return r && n;
      }
      function H(t, e) {
        var r = t.x === e.x,
          n = t.y === e.y,
          o = t.z === e.z;
        return r && n && o;
      }
      function V(t) {
        var e,
          r,
          n,
          o = t.activeTooltipItem,
          a = t.graphicalItem,
          i = t.itemData,
          c =
            (I(a, o)
              ? (e = "trapezoids")
              : Z(a, o)
              ? (e = "sectors")
              : D(a, o) && (e = "points"),
            e),
          l = I(a, o)
            ? null == (r = o.tooltipPayload) ||
              null == (r = r[0]) ||
              null == (r = r.payload)
              ? void 0
              : r.payload
            : Z(a, o)
            ? null == (n = o.tooltipPayload) ||
              null == (n = n[0]) ||
              null == (n = n.payload)
              ? void 0
              : n.payload
            : D(a, o)
            ? o.payload
            : {},
          u = i.filter(function (t, e) {
            var r = f()(l, t),
              n = a.props[c].filter(function (t) {
                var e;
                return (I(a, o)
                  ? (e = N)
                  : Z(a, o)
                  ? (e = L)
                  : D(a, o) && (e = H),
                e)(t, o);
              }),
              i = a.props[c].indexOf(n[n.length - 1]);
            return r && e === i;
          });
        return i.indexOf(u[u.length - 1]);
      }
    },
    69229: (t, e, r) => {
      var n = r(67472),
        o = r(38406),
        a = r(50523),
        i = r(84464),
        c = r(94380),
        l = r(39608),
        u = r(33497),
        s = r(35190),
        f = "[object Arguments]",
        p = "[object Array]",
        h = "[object Object]",
        d = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, y, v, m) {
        var b = l(t),
          g = l(e),
          x = b ? p : c(t),
          O = g ? p : c(e);
        (x = x == f ? h : x), (O = O == f ? h : O);
        var w = x == h,
          A = O == h,
          j = x == O;
        if (j && u(t)) {
          if (!u(e)) return !1;
          (b = !0), (w = !1);
        }
        if (j && !w)
          return (
            m || (m = new n()),
            b || s(t) ? o(t, e, r, y, v, m) : a(t, e, x, r, y, v, m)
          );
        if (!(1 & r)) {
          var E = w && d.call(t, "__wrapped__"),
            S = A && d.call(e, "__wrapped__");
          if (E || S) {
            var P = E ? t.value() : t,
              M = S ? e.value() : e;
            return m || (m = new n()), v(P, M, r, y, m);
          }
        }
        return !!j && (m || (m = new n()), i(t, e, r, y, v, m));
      };
    },
    69324: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => H });
      var n = r(12115),
        o = r(40139),
        a = r.n(o),
        i = r(48973),
        c = r.n(i),
        l = r(52596),
        u = r(15232),
        s = r(2348),
        f = r(79095),
        p = r(60379),
        h = r(16377),
        d = r(43597),
        y = r(70788),
        v = r(46605),
        m = r(41643),
        b = r(5248);
      function g(t, e, r) {
        if (e < 1) return [];
        if (1 === e && void 0 === r) return t;
        for (var n = [], o = 0; o < t.length; o += e)
          if (void 0 !== r && !0 !== r(t[o])) return;
          else n.push(t[o]);
        return n;
      }
      function x(t, e, r, n, o) {
        if (t * e < t * n || t * e > t * o) return !1;
        var a = r();
        return t * (e - (t * a) / 2 - n) >= 0 && t * (e + (t * a) / 2 - o) <= 0;
      }
      function O(t) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function w(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != O(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != O(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == O(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var j = ["viewBox"],
        E = ["viewBox"],
        S = ["ticks"];
      function P(t) {
        return (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function M() {
        return (M = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function T(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function C(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, L(n.key), n);
        }
      }
      function I() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (I = function () {
          return !!t;
        })();
      }
      function Z(t) {
        return (Z = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function D(t, e) {
        return (D = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function N(t, e, r) {
        return (
          (e = L(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function L(t) {
        var e = (function (t, e) {
          if ("object" != P(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != P(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == P(e) ? e : e + "";
      }
      var H = (function (t) {
        var e, r;
        function o(t) {
          var e, r, n;
          if (!(this instanceof o))
            throw TypeError("Cannot call a class as a function");
          return (
            (r = o),
            (n = [t]),
            (r = Z(r)),
            ((e = (function (t, e) {
              if (e && ("object" === P(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              I()
                ? Reflect.construct(r, n || [], Z(this).constructor)
                : r.apply(this, n)
            )).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (o.prototype = Object.create(t && t.prototype, {
            constructor: { value: o, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          t && D(o, t),
          (e = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var r = t.viewBox,
                  n = T(t, j),
                  o = this.props,
                  a = o.viewBox,
                  i = T(o, E);
                return (
                  !(0, u.b)(r, a) || !(0, u.b)(n, i) || !(0, u.b)(e, this.state)
                );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var t = this.layerReference;
                if (t) {
                  var e = t.getElementsByClassName(
                    "recharts-cartesian-axis-tick-value"
                  )[0];
                  e &&
                    this.setState({
                      fontSize: window.getComputedStyle(e).fontSize,
                      letterSpacing: window.getComputedStyle(e).letterSpacing,
                    });
                }
              },
            },
            {
              key: "getTickLineCoord",
              value: function (t) {
                var e,
                  r,
                  n,
                  o,
                  a,
                  i,
                  c = this.props,
                  l = c.x,
                  u = c.y,
                  s = c.width,
                  f = c.height,
                  p = c.orientation,
                  d = c.tickSize,
                  y = c.mirror,
                  v = c.tickMargin,
                  m = y ? -1 : 1,
                  b = t.tickSize || d,
                  g = (0, h.Et)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = r = t.coordinate),
                      (i = (n = (o = u + !y * f) - m * b) - m * v),
                      (a = g);
                    break;
                  case "left":
                    (n = o = t.coordinate),
                      (a = (e = (r = l + !y * s) - m * b) - m * v),
                      (i = g);
                    break;
                  case "right":
                    (n = o = t.coordinate),
                      (a = (e = (r = l + y * s) + m * b) + m * v),
                      (i = g);
                    break;
                  default:
                    (e = r = t.coordinate),
                      (i = (n = (o = u + y * f) + m * b) + m * v),
                      (a = g);
                }
                return {
                  line: { x1: e, y1: n, x2: r, y2: o },
                  tick: { x: a, y: i },
                };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t,
                  e = this.props,
                  r = e.orientation,
                  n = e.mirror;
                switch (r) {
                  case "left":
                    t = n ? "start" : "end";
                    break;
                  case "right":
                    t = n ? "end" : "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getTickVerticalAnchor",
              value: function () {
                var t = this.props,
                  e = t.orientation,
                  r = t.mirror,
                  n = "end";
                switch (e) {
                  case "left":
                  case "right":
                    n = "middle";
                    break;
                  case "top":
                    n = r ? "start" : "end";
                    break;
                  default:
                    n = r ? "end" : "start";
                }
                return n;
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  o = t.width,
                  a = t.height,
                  i = t.orientation,
                  u = t.mirror,
                  s = t.axisLine,
                  f = _(
                    _(_({}, (0, y.J9)(this.props, !1)), (0, y.J9)(s, !1)),
                    {},
                    { fill: "none" }
                  );
                if ("top" === i || "bottom" === i) {
                  var p = +(("top" === i && !u) || ("bottom" === i && u));
                  f = _(
                    _({}, f),
                    {},
                    { x1: e, y1: r + p * a, x2: e + o, y2: r + p * a }
                  );
                } else {
                  var h = +(("left" === i && !u) || ("right" === i && u));
                  f = _(
                    _({}, f),
                    {},
                    { x1: e + h * o, y1: r, x2: e + h * o, y2: r + a }
                  );
                }
                return n.createElement(
                  "line",
                  M({}, f, {
                    className: (0, l.A)(
                      "recharts-cartesian-axis-line",
                      c()(s, "className")
                    ),
                  })
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, e, r) {
                var i = this,
                  u = this.props,
                  f = u.tickLine,
                  p = u.stroke,
                  O = u.tick,
                  w = u.tickFormatter,
                  j = u.unit,
                  E = (function (t, e, r) {
                    var n,
                      o,
                      i,
                      c,
                      l,
                      u = t.tick,
                      s = t.ticks,
                      f = t.viewBox,
                      p = t.minTickGap,
                      d = t.orientation,
                      y = t.interval,
                      O = t.tickFormatter,
                      w = t.unit,
                      j = t.angle;
                    if (!s || !s.length || !u) return [];
                    if ((0, h.Et)(y) || m.m.isSsr)
                      return g(
                        s,
                        ("number" == typeof y && (0, h.Et)(y) ? y : 0) + 1
                      );
                    var E = [],
                      S = "top" === d || "bottom" === d ? "width" : "height",
                      P =
                        w && "width" === S
                          ? (0, v.Pu)(w, { fontSize: e, letterSpacing: r })
                          : { width: 0, height: 0 },
                      M = function (t, n) {
                        var o,
                          i,
                          c = a()(O) ? O(t.value, n) : t.value;
                        return "width" === S
                          ? ((o = (0, v.Pu)(c, {
                              fontSize: e,
                              letterSpacing: r,
                            })),
                            (i = {
                              width: o.width + P.width,
                              height: o.height + P.height,
                            }),
                            (0, b.bx)(i, j))
                          : (0, v.Pu)(c, { fontSize: e, letterSpacing: r })[S];
                      },
                      k =
                        s.length >= 2
                          ? (0, h.sA)(s[1].coordinate - s[0].coordinate)
                          : 1,
                      _ =
                        ((n = "width" === S),
                        (o = f.x),
                        (i = f.y),
                        (c = f.width),
                        (l = f.height),
                        1 === k
                          ? { start: n ? o : i, end: n ? o + c : i + l }
                          : { start: n ? o + c : i + l, end: n ? o : i });
                    return "equidistantPreserveStart" === y
                      ? (function (t, e, r, n, o) {
                          for (
                            var a,
                              i = (n || []).slice(),
                              c = e.start,
                              l = e.end,
                              u = 0,
                              s = 1,
                              f = c;
                            s <= i.length;

                          )
                            if (
                              (a = (function () {
                                var e,
                                  a = null == n ? void 0 : n[u];
                                if (void 0 === a) return { v: g(n, s) };
                                var i = u,
                                  p = function () {
                                    return void 0 === e && (e = r(a, i)), e;
                                  },
                                  h = a.coordinate,
                                  d = 0 === u || x(t, h, p, f, l);
                                d || ((u = 0), (f = c), (s += 1)),
                                  d && ((f = h + t * (p() / 2 + o)), (u += s));
                              })())
                            )
                              return a.v;
                          return [];
                        })(k, _, M, s, p)
                      : ("preserveStart" === y || "preserveStartEnd" === y
                          ? (function (t, e, r, n, o, a) {
                              var i = (n || []).slice(),
                                c = i.length,
                                l = e.start,
                                u = e.end;
                              if (a) {
                                var s = n[c - 1],
                                  f = r(s, c - 1),
                                  p = t * (s.coordinate + (t * f) / 2 - u);
                                (i[c - 1] = s =
                                  A(
                                    A({}, s),
                                    {},
                                    {
                                      tickCoord:
                                        p > 0
                                          ? s.coordinate - p * t
                                          : s.coordinate,
                                    }
                                  )),
                                  x(
                                    t,
                                    s.tickCoord,
                                    function () {
                                      return f;
                                    },
                                    l,
                                    u
                                  ) &&
                                    ((u = s.tickCoord - t * (f / 2 + o)),
                                    (i[c - 1] = A(
                                      A({}, s),
                                      {},
                                      { isShow: !0 }
                                    )));
                              }
                              for (
                                var h = a ? c - 1 : c,
                                  d = function (e) {
                                    var n,
                                      a = i[e],
                                      c = function () {
                                        return void 0 === n && (n = r(a, e)), n;
                                      };
                                    if (0 === e) {
                                      var s =
                                        t * (a.coordinate - (t * c()) / 2 - l);
                                      i[e] = a = A(
                                        A({}, a),
                                        {},
                                        {
                                          tickCoord:
                                            s < 0
                                              ? a.coordinate - s * t
                                              : a.coordinate,
                                        }
                                      );
                                    } else
                                      i[e] = a = A(
                                        A({}, a),
                                        {},
                                        { tickCoord: a.coordinate }
                                      );
                                    x(t, a.tickCoord, c, l, u) &&
                                      ((l = a.tickCoord + t * (c() / 2 + o)),
                                      (i[e] = A(A({}, a), {}, { isShow: !0 })));
                                  },
                                  y = 0;
                                y < h;
                                y++
                              )
                                d(y);
                              return i;
                            })(k, _, M, s, p, "preserveStartEnd" === y)
                          : (function (t, e, r, n, o) {
                              for (
                                var a = (n || []).slice(),
                                  i = a.length,
                                  c = e.start,
                                  l = e.end,
                                  u = function (e) {
                                    var n,
                                      u = a[e],
                                      s = function () {
                                        return void 0 === n && (n = r(u, e)), n;
                                      };
                                    if (e === i - 1) {
                                      var f =
                                        t * (u.coordinate + (t * s()) / 2 - l);
                                      a[e] = u = A(
                                        A({}, u),
                                        {},
                                        {
                                          tickCoord:
                                            f > 0
                                              ? u.coordinate - f * t
                                              : u.coordinate,
                                        }
                                      );
                                    } else
                                      a[e] = u = A(
                                        A({}, u),
                                        {},
                                        { tickCoord: u.coordinate }
                                      );
                                    x(t, u.tickCoord, s, c, l) &&
                                      ((l = u.tickCoord - t * (s() / 2 + o)),
                                      (a[e] = A(A({}, u), {}, { isShow: !0 })));
                                  },
                                  s = i - 1;
                                s >= 0;
                                s--
                              )
                                u(s);
                              return a;
                            })(k, _, M, s, p)
                        ).filter(function (t) {
                          return t.isShow;
                        });
                  })(_(_({}, this.props), {}, { ticks: t }), e, r),
                  S = this.getTickTextAnchor(),
                  P = this.getTickVerticalAnchor(),
                  k = (0, y.J9)(this.props, !1),
                  T = (0, y.J9)(O, !1),
                  C = _(_({}, k), {}, { fill: "none" }, (0, y.J9)(f, !1)),
                  I = E.map(function (t, e) {
                    var r = i.getTickLineCoord(t),
                      u = r.line,
                      h = r.tick,
                      y = _(
                        _(
                          _(
                            _({ textAnchor: S, verticalAnchor: P }, k),
                            {},
                            { stroke: "none", fill: p },
                            T
                          ),
                          h
                        ),
                        {},
                        {
                          index: e,
                          payload: t,
                          visibleTicksCount: E.length,
                          tickFormatter: w,
                        }
                      );
                    return n.createElement(
                      s.W,
                      M(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, d.XC)(i.props, t, e)
                      ),
                      f &&
                        n.createElement(
                          "line",
                          M({}, C, u, {
                            className: (0, l.A)(
                              "recharts-cartesian-axis-tick-line",
                              c()(f, "className")
                            ),
                          })
                        ),
                      O &&
                        o.renderTickItem(
                          O,
                          y,
                          ""
                            .concat(a()(w) ? w(t.value, e) : t.value)
                            .concat(j || "")
                        )
                    );
                  });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  I
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.axisLine,
                  o = e.width,
                  i = e.height,
                  c = e.ticksGenerator,
                  u = e.className;
                if (e.hide) return null;
                var f = this.props,
                  h = f.ticks,
                  d = T(f, S),
                  y = h;
                return (a()(c) && (y = c(h && h.length > 0 ? this.props : d)),
                o <= 0 || i <= 0 || !y || !y.length)
                  ? null
                  : n.createElement(
                      s.W,
                      {
                        className: (0, l.A)("recharts-cartesian-axis", u),
                        ref: function (e) {
                          t.layerReference = e;
                        },
                      },
                      r && this.renderAxisLine(),
                      this.renderTicks(
                        y,
                        this.state.fontSize,
                        this.state.letterSpacing
                      ),
                      p.J.renderCallByParent(this.props)
                    );
              },
            },
          ]),
          (r = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                var o;
                return n.isValidElement(t)
                  ? n.cloneElement(t, e)
                  : a()(t)
                  ? t(e)
                  : n.createElement(
                      f.E,
                      M({}, e, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      r
                    );
              },
            },
          ]),
          e && C(o.prototype, e),
          r && C(o, r),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(n.Component);
      N(H, "displayName", "CartesianAxis"),
        N(H, "defaultProps", {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          viewBox: { x: 0, y: 0, width: 0, height: 0 },
          orientation: "bottom",
          ticks: [],
          stroke: "#666",
          tickLine: !0,
          axisLine: !0,
          tick: !0,
          mirror: !1,
          minTickGap: 5,
          tickSize: 6,
          tickMargin: 2,
          interval: "preserveEnd",
        });
    },
    69363: (t, e, r) => {
      var n = r(57213),
        o = r(18028),
        a = r(6305),
        i = r(39608);
      t.exports = function (t, e) {
        return (i(t) ? n : a)(t, o(e, 3));
      };
    },
    69806: (t) => {
      t.exports = function (t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
        return -1;
      };
    },
    70688: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => q });
      var n = r(12115);
      function o() {}
      function a(t, e, r) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + r) / 6
        );
      }
      function i(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      function l(t) {
        this._context = t;
      }
      (i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              a(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              a(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (c.prototype = {
          areaStart: o,
          areaEnd: o,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                a(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (l.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
                break;
              case 3:
                this._point = 4;
              default:
                a(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class u {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      s.prototype = {
        areaStart: o,
        areaEnd: o,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t *= 1),
            (e *= 1),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      };
      function h(t, e, r) {
        var n = t._x1 - t._x0,
          o = e - t._x1,
          a = (t._y1 - t._y0) / (n || (o < 0 && -0)),
          i = (r - t._y1) / (o || (n < 0 && -0));
        return (
          ((a < 0 ? -1 : 1) + (i < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(a),
              Math.abs(i),
              0.5 * Math.abs((a * o + i * n) / (n + o))
            ) || 0
        );
      }
      function d(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function y(t, e, r) {
        var n = t._x0,
          o = t._y0,
          a = t._x1,
          i = t._y1,
          c = (a - n) / 3;
        t._context.bezierCurveTo(n + c, o + c * e, a - c, i - c * r, a, i);
      }
      function v(t) {
        this._context = t;
      }
      function m(t) {
        this._context = new b(t);
      }
      function b(t) {
        this._context = t;
      }
      function g(t) {
        this._context = t;
      }
      function x(t) {
        var e,
          r,
          n = t.length - 1,
          o = Array(n),
          a = Array(n),
          i = Array(n);
        for (o[0] = 0, a[0] = 2, i[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
          (o[e] = 1), (a[e] = 4), (i[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[n - 1] = 2, a[n - 1] = 7, i[n - 1] = 8 * t[n - 1] + t[n], e = 1;
          e < n;
          ++e
        )
          (r = o[e] / a[e - 1]), (a[e] -= r), (i[e] -= r * i[e - 1]);
        for (o[n - 1] = i[n - 1] / a[n - 1], e = n - 2; e >= 0; --e)
          o[e] = (i[e] - o[e + 1]) / a[e];
        for (e = 0, a[n - 1] = (t[n] + o[n - 1]) / 2; e < n - 1; ++e)
          a[e] = 2 * t[e + 1] - o[e + 1];
        return [o, a];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (f.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, e);
          }
        },
      }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, d(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var r = NaN;
            if (((e *= 1), (t *= 1) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), y(this, d(this, (r = h(this, t, e))), r);
                  break;
                default:
                  y(this, this._t0, (r = h(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = r);
            }
          },
        }),
        ((m.prototype = Object.create(v.prototype)).point = function (t, e) {
          v.prototype.point.call(this, e, t);
        }),
        (b.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, r, n, o, a) {
            this._context.bezierCurveTo(e, t, n, r, a, o);
          },
        }),
        (g.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              r = t.length;
            if (r)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === r)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var n = x(t), o = x(e), a = 0, i = 1; i < r; ++a, ++i)
                  this._context.bezierCurveTo(
                    n[0][a],
                    o[0][a],
                    n[1][a],
                    o[1][a],
                    t[i],
                    e[i]
                  );
            (this._line || (0 !== this._line && 1 === r)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t *= 1), (e *= 1), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var r = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var w = r(9819),
        A = r(85654),
        j = r(31847);
      function E(t) {
        return t[0];
      }
      function S(t) {
        return t[1];
      }
      function P(t, e) {
        var r = (0, A.A)(!0),
          n = null,
          o = p,
          a = null,
          i = (0, j.i)(c);
        function c(c) {
          var l,
            u,
            s,
            f = (c = (0, w.A)(c)).length,
            p = !1;
          for (null == n && (a = o((s = i()))), l = 0; l <= f; ++l)
            !(l < f && r((u = c[l]), l, c)) === p &&
              ((p = !p) ? a.lineStart() : a.lineEnd()),
              p && a.point(+t(u, l, c), +e(u, l, c));
          if (s) return (a = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? E : (0, A.A)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? S : (0, A.A)(e)),
          (c.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), c)
              : t;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), c)
              : e;
          }),
          (c.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, A.A)(!!t)), c)
              : r;
          }),
          (c.curve = function (t) {
            return arguments.length ? ((o = t), null != n && (a = o(n)), c) : o;
          }),
          (c.context = function (t) {
            return arguments.length
              ? (null == t ? (n = a = null) : (a = o((n = t))), c)
              : n;
          }),
          c
        );
      }
      function M(t, e, r) {
        var n = null,
          o = (0, A.A)(!0),
          a = null,
          i = p,
          c = null,
          l = (0, j.i)(u);
        function u(u) {
          var s,
            f,
            p,
            h,
            d,
            y = (u = (0, w.A)(u)).length,
            v = !1,
            m = Array(y),
            b = Array(y);
          for (null == a && (c = i((d = l()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((h = u[s]), s, u)) === v)
              if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
              else {
                for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
                  c.point(m[p], b[p]);
                c.lineEnd(), c.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, u)),
              (b[s] = +e(h, s, u)),
              c.point(n ? +n(h, s, u) : m[s], r ? +r(h, s, u) : b[s]));
          }
          if (d) return (c = null), d + "" || null;
        }
        function s() {
          return P().defined(o).curve(i).context(a);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? E : (0, A.A)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, A.A)(0)
              : (0, A.A)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? S : (0, A.A)(+r)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), (n = null), u)
              : t;
          }),
          (u.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), u)
              : t;
          }),
          (u.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, A.A)(+t)),
                u)
              : n;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), (r = null), u)
              : e;
          }),
          (u.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), u)
              : e;
          }),
          (u.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, A.A)(+t)),
                u)
              : r;
          }),
          (u.lineX0 = u.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (u.lineY1 = function () {
            return s().x(t).y(r);
          }),
          (u.lineX1 = function () {
            return s().x(n).y(e);
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : (0, A.A)(!!t)), u)
              : o;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((i = t), null != a && (c = i(a)), u) : i;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (a = c = null) : (c = i((a = t))), u)
              : a;
          }),
          u
        );
      }
      var k = r(23633),
        _ = r.n(k),
        T = r(40139),
        C = r.n(T),
        I = r(52596),
        Z = r(43597),
        D = r(70788),
        N = r(16377);
      function L(t) {
        return (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function H() {
        return (H = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function V(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != L(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != L(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == L(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var B = {
          curveBasisClosed: function (t) {
            return new c(t);
          },
          curveBasisOpen: function (t) {
            return new l(t);
          },
          curveBasis: function (t) {
            return new i(t);
          },
          curveBumpX: function (t) {
            return new u(t, !0);
          },
          curveBumpY: function (t) {
            return new u(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new v(t);
          },
          curveMonotoneY: function (t) {
            return new m(t);
          },
          curveNatural: function (t) {
            return new g(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        F = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        z = function (t) {
          return t.x;
        },
        U = function (t) {
          return t.y;
        },
        W = function (t, e) {
          if (C()(t)) return t;
          var r = "curve".concat(_()(t));
          return ("curveMonotone" === r || "curveBump" === r) && e
            ? B["".concat(r).concat("vertical" === e ? "Y" : "X")]
            : B[r] || p;
        },
        $ = function (t) {
          var e,
            r = t.type,
            n = t.points,
            o = void 0 === n ? [] : n,
            a = t.baseLine,
            i = t.layout,
            c = t.connectNulls,
            l = void 0 !== c && c,
            u = W(void 0 === r ? "linear" : r, i),
            s = l
              ? o.filter(function (t) {
                  return F(t);
                })
              : o;
          if (Array.isArray(a)) {
            var f = l
                ? a.filter(function (t) {
                    return F(t);
                  })
                : a,
              p = s.map(function (t, e) {
                return R(R({}, t), {}, { base: f[e] });
              });
            return (
              (e =
                "vertical" === i
                  ? M()
                      .y(U)
                      .x1(z)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(z)
                      .y1(U)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(F)
                .curve(u),
              e(p)
            );
          }
          return (
            (e =
              "vertical" === i && (0, N.Et)(a)
                ? M().y(U).x1(z).x0(a)
                : (0, N.Et)(a)
                ? M().x(z).y1(U).y0(a)
                : P().x(z).y(U))
              .defined(F)
              .curve(u),
            e(s)
          );
        },
        q = function (t) {
          var e = t.className,
            r = t.points,
            o = t.path,
            a = t.pathRef;
          if ((!r || !r.length) && !o) return null;
          var i = r && r.length ? $(t) : o;
          return n.createElement(
            "path",
            H({}, (0, D.J9)(t, !1), (0, Z._U)(t), {
              className: (0, I.A)("recharts-curve", e),
              d: i,
              ref: a,
            })
          );
        };
    },
    70771: (t, e, r) => {
      var n = r(98233),
        o = r(48611);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
      };
    },
    70788: (t, e, r) => {
      "use strict";
      r.d(e, {
        AW: () => H,
        BU: () => M,
        J9: () => I,
        Me: () => k,
        Mn: () => A,
        OV: () => Z,
        X_: () => L,
        aS: () => P,
        ee: () => N,
        sT: () => T,
      });
      var n = r(48973),
        o = r.n(n),
        a = r(59882),
        i = r.n(a),
        c = r(15438),
        l = r.n(c),
        u = r(40139),
        s = r.n(u),
        f = r(67460),
        p = r.n(f),
        h = r(12115),
        d = r(50330),
        y = r(16377),
        v = r(15232),
        m = r(43597),
        b = ["children"],
        g = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function O(t) {
        return (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var w = {
          click: "onClick",
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          mouseout: "onMouseOut",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          touchcancel: "onTouchCancel",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
          contextmenu: "onContextMenu",
          dblclick: "onDoubleClick",
        },
        A = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        j = null,
        E = null,
        S = function t(e) {
          if (e === j && Array.isArray(E)) return E;
          var r = [];
          return (
            h.Children.forEach(e, function (e) {
              i()(e) ||
                ((0, d.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (E = r),
            (j = e),
            r
          );
        };
      function P(t, e) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(e)
            ? e.map(function (t) {
                return A(t);
              })
            : [A(e)]),
          S(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      function M(t, e) {
        var r = P(t, e);
        return r && r[0];
      }
      var k = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            r = e.width,
            n = e.height;
          return !!(0, y.Et)(r) && !(r <= 0) && !!(0, y.Et)(n) && !(n <= 0);
        },
        _ = [
          "a",
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColormatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-url",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "lineGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "script",
          "set",
          "stop",
          "style",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "title",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ],
        T = function (t) {
          return t && "object" === O(t) && "clipDot" in t;
        },
        C = function (t, e, r, n) {
          var o,
            a =
              null != (o = null === m.VU || void 0 === m.VU ? void 0 : m.VU[n])
                ? o
                : [];
          return (
            e.startsWith("data-") ||
            (!s()(t) && ((n && a.includes(e)) || m.QQ.includes(e))) ||
            (r && m.j2.includes(e))
          );
        },
        I = function (t, e, r) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, h.isValidElement)(t) && (n = t.props), !p()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              var a;
              C(null == (a = n) ? void 0 : a[t], t, e, r) && (o[t] = n[t]);
            }),
            o
          );
        },
        Z = function t(e, r) {
          if (e === r) return !0;
          var n = h.Children.count(e);
          if (n !== h.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n)
            return D(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
          for (var o = 0; o < n; o++) {
            var a = e[o],
              i = r[o];
            if (Array.isArray(a) || Array.isArray(i)) {
              if (!t(a, i)) return !1;
            } else if (!D(a, i)) return !1;
          }
          return !0;
        },
        D = function (t, e) {
          if (i()(t) && i()(e)) return !0;
          if (!i()(t) && !i()(e)) {
            var r = t.props || {},
              n = r.children,
              o = x(r, b),
              a = e.props || {},
              c = a.children,
              l = x(a, g);
            if (n && c) return (0, v.b)(o, l) && Z(n, c);
            if (!n && !c) return (0, v.b)(o, l);
          }
          return !1;
        },
        N = function (t, e) {
          var r = [],
            n = {};
          return (
            S(t).forEach(function (t, o) {
              var a;
              if ((a = t) && a.type && l()(a.type) && _.indexOf(a.type) >= 0)
                r.push(t);
              else if (t) {
                var i = A(t.type),
                  c = e[i] || {},
                  u = c.handler,
                  s = c.once;
                if (u && (!s || !n[i])) {
                  var f = u(t, i, o);
                  r.push(f), (n[i] = !0);
                }
              }
            }),
            r
          );
        },
        L = function (t) {
          var e = t && t.type;
          return e && w[e] ? w[e] : null;
        },
        H = function (t, e) {
          return S(e).indexOf(t);
        };
    },
    70966: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    71571: (t, e, r) => {
      var n = r(92313),
        o = r(18028),
        a = r(51445),
        i = r(39608),
        c = r(39641);
      t.exports = function (t, e, r) {
        var l = i(t) ? n : a;
        return r && c(t, e, r) && (e = void 0), l(t, o(e, 3));
      };
    },
    72043: (t, e, r) => {
      t.exports = r(70966)(Object.keys, Object);
    },
    72790: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => l });
      var n = r(12115),
        o = r(52596),
        a = r(70788),
        i = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t) {
        var e = t.children,
          r = t.width,
          l = t.height,
          u = t.viewBox,
          s = t.className,
          f = t.style,
          p = t.title,
          h = t.desc,
          d = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, i),
          y = u || { width: r, height: l, x: 0, y: 0 },
          v = (0, o.A)("recharts-surface", s);
        return n.createElement(
          "svg",
          c({}, (0, a.J9)(d, !0, "svg"), {
            className: v,
            width: r,
            height: l,
            style: f,
            viewBox: ""
              .concat(y.x, " ")
              .concat(y.y, " ")
              .concat(y.width, " ")
              .concat(y.height),
          }),
          n.createElement("title", null, p),
          n.createElement("desc", null, h),
          e
        );
      }
    },
    72948: (t) => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    73726: (t, e, r) => {
      t.exports = r(70966)(Object.getPrototypeOf, Object);
    },
    73800: (t, e, r) => {
      var n = r(39608),
        o = r(79595),
        a = r(37835),
        i = r(85855);
      t.exports = function (t, e) {
        return n(t) ? t : o(t, e) ? [t] : a(i(t));
      };
    },
    73956: (t, e, r) => {
      var n = r(5658);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    74166: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      };
    },
    74224: (t, e, r) => {
      "use strict";
      r.d(e, { T: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M188,86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87,40.12,119,36,96,36S51.13,40.12,34.51,47.6C14.83,56.45,4,69.38,4,84v40c0,14.62,10.83,27.55,30.51,36.4A131.67,131.67,0,0,0,68,169.88V172c0,14.62,10.83,27.55,30.51,36.4C115.13,215.88,137,220,160,220s44.87-4.12,61.49-11.6C241.17,199.55,252,186.62,252,172V132C252,109.86,226.71,92.08,188,86.11ZM228,132c0,7.75-21.77,22.48-61.81,23.88C180.33,147.4,188,136.3,188,124V110.44C213.88,115.15,228,125.48,228,132ZM107.37,147.63c-3.63.24-7.42.37-11.37.37-5.08,0-9.89-.22-14.43-.61a10.94,10.94,0,0,0-1.14-.09c-1.51-.14-3-.3-4.43-.48V130.93A187,187,0,0,0,96,132a187,187,0,0,0,20-1.07v15.89c-2.49.3-5.07.56-7.75.75C108,147.58,107.66,147.6,107.37,147.63ZM164,117.14V124c0,4.78-8.28,12.21-24,17.54v-15a115.32,115.32,0,0,0,17.49-6.13Q160.93,118.86,164,117.14ZM96,60c44,0,68,15.85,68,24s-24,24-68,24S28,92.15,28,84,52,60,96,60ZM28,124v-6.86q3.08,1.71,6.51,3.26A115.32,115.32,0,0,0,52,126.53v15C36.28,136.21,28,128.78,28,124Zm64,48v0c1.33,0,2.66,0,4,0q5.44,0,10.77-.32,4.45,1.57,9.23,2.86v15C100.28,184.21,92,176.78,92,172Zm48,22.82V178.94A186.45,186.45,0,0,0,160,180a187,187,0,0,0,20-1.07v15.89a170.08,170.08,0,0,1-40,0Zm64-5.28v-15a115.32,115.32,0,0,0,17.49-6.13q3.44-1.54,6.51-3.26V172C228,176.78,219.72,184.21,204,189.54Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M240,132c0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44h0C146.76,156.85,176,142,176,124V96.72h0C212.52,100.06,240,114.58,240,132ZM176,84c0-19.88-35.82-36-80-36S16,64.12,16,84s35.82,36,80,36S176,103.88,176,84Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM56,146.87C36.41,141.4,24,132.39,24,124V109.93c8.16,5.78,19.09,10.44,32,13.57Zm80-23.37c12.91-3.13,23.84-7.79,32-13.57V124c0,8.39-12.41,17.4-32,22.87Zm-16,71.37C100.41,189.4,88,180.39,88,172v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41Zm0-44.62A163,163,0,0,1,96,152a163,163,0,0,1-24-1.75V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54Zm64,48a165.45,165.45,0,0,1-48,0V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54ZM232,172c0,8.39-12.41,17.4-32,22.87V171.5c12.91-3.13,23.84-7.79,32-13.57Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M224.56,103.81C213.43,97.75,198.47,93.39,182,91.34V84c0-12.12-9.58-23.1-27-30.93C139.16,45.93,118.2,42,96,42S52.84,45.93,37,53.07C19.58,60.9,10,71.88,10,84v40c0,12.12,9.58,23.1,27,30.93,10.49,4.72,23.21,8,37,9.73V172c0,12.12,9.58,23.1,27,30.93C116.84,210.07,137.8,214,160,214s43.16-3.93,59-11.07c17.39-7.83,27-18.81,27-30.93V132C246,121.35,238.39,111.34,224.56,103.81Zm-5.74,10.54C228.61,119.68,234,126,234,132c0,14.19-30.39,30-74,30a166.9,166.9,0,0,1-21.21-1.34A110.79,110.79,0,0,0,155,154.93c17.39-7.83,27-18.81,27-30.93V103.43C196.4,105.36,209.3,109.16,218.82,114.35ZM108.16,153.58c-3.92.27-8,.42-12.16.42-5.3,0-10.4-.24-15.28-.67a2.22,2.22,0,0,0-.37,0c-3.58-.33-7-.77-10.35-1.3V124.12A178,178,0,0,0,96,126a178,178,0,0,0,26-1.88V152c-4.34.69-8.91,1.22-13.69,1.56ZM170,105.89V124c0,9.54-13.75,19.8-36,25.51V121.85a115,115,0,0,0,21-6.92A66.2,66.2,0,0,0,170,105.89ZM96,54c43.61,0,74,15.81,74,30s-30.39,30-74,30S22,98.19,22,84,52.39,54,96,54ZM22,124V105.89a66.2,66.2,0,0,0,15,9,115,115,0,0,0,21,6.92v27.66C35.75,143.8,22,133.54,22,124Zm64,48v-6.28c3.3.18,6.63.28,10,.28q5.91,0,11.66-.37A123.17,123.17,0,0,0,122,169.84v27.67C99.75,191.8,86,181.54,86,172Zm48,28V172.1a177.84,177.84,0,0,0,26,1.9,178,178,0,0,0,26-1.88V200a170,170,0,0,1-52,0Zm64-2.49V169.85a115,115,0,0,0,21-6.92,66.2,66.2,0,0,0,15-9V172C234,181.54,220.25,191.8,198,197.51Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M180,93.11V84c0-22.43-36.9-40-84-40S12,61.57,12,84v40c0,19.14,26.86,34.72,64,38.89V172c0,22.43,36.9,40,84,40s84-17.57,84-40V132C244,113.12,217.87,97.37,180,93.11ZM236,132c0,15.45-30.54,32-76,32a165.71,165.71,0,0,1-28-2.34v-1.39c28.61-6.31,48-20,48-36.27V101.17C212.22,105,236,117.93,236,132ZM108.19,155.59Q102.3,156,96,156c-5.47,0-10.72-.25-15.73-.69l-.27,0h0c-4.16-.38-8.16-.9-12-1.56V121.8A174.87,174.87,0,0,0,96,124a174.87,174.87,0,0,0,28-2.2v31.92a155,155,0,0,1-15.52,1.85ZM172,101.32V124c0,10.88-15.16,22.3-40,28.11V120.27C149.63,116.38,163.75,109.69,172,101.32ZM96,52c45.46,0,76,16.55,76,32s-30.54,32-76,32S20,99.45,20,84,50.54,52,96,52ZM20,124V101.32c8.25,8.37,22.37,15.06,40,19v31.84C35.16,146.3,20,134.88,20,124Zm64,48v-8.4c3.91.26,7.92.4,12,.4s8.06-.14,12-.39a123.93,123.93,0,0,0,16,4.63v31.87C99.16,194.3,84,182.88,84,172Zm48,29.72V169.77A174.48,174.48,0,0,0,160,172a174.87,174.87,0,0,0,28-2.2v31.92a173.07,173.07,0,0,1-56,0ZM236,172c0,10.88-15.16,22.3-40,28.11V168.27c17.63-3.89,31.75-10.58,40-19Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Coins";
    },
    74366: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, a) {
        for (var i = -1, c = r(e((n - t) / (o || 1)), 0), l = Array(c); c--; )
          (l[a ? c : ++i] = t), (t += o);
        return l;
      };
    },
    74544: (t, e, r) => {
      var n = r(5658);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    74888: (t, e, r) => {
      var n = r(53516);
      t.exports = function (t, e) {
        var r = !0;
        return (
          n(t, function (t, n, o) {
            return (r = !!e(t, n, o));
          }),
          r
        );
      };
    },
    74925: (t, e, r) => {
      var n = r(28897),
        o = r(20480),
        a = r(18028);
      t.exports = function (t, e) {
        var r = {};
        return (
          (e = a(e, 3)),
          o(t, function (t, o, a) {
            n(r, o, e(t, o, a));
          }),
          r
        );
      };
    },
    74942: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M92.38,38.05A12,12,0,0,1,101,23.42a108,108,0,0,1,54,0,12,12,0,1,1-6,23.23,84,84,0,0,0-42,0A12,12,0,0,1,92.38,38.05ZM32.29,113.87a12.2,12.2,0,0,0,3.2.43,12,12,0,0,0,11.56-8.8,84,84,0,0,1,21-36.35A12,12,0,1,0,50.94,52.34a108.1,108.1,0,0,0-27,46.76A12,12,0,0,0,32.29,113.87ZM149,209.35a84,84,0,0,1-42,0,12,12,0,1,0-6,23.23,108,108,0,0,0,54,0,12,12,0,1,0-6-23.23Zm59.95-103.83a12,12,0,0,0,23.12-6.42,108,108,0,0,0-27-46.78A12,12,0,1,0,188,69.15,84,84,0,0,1,208.94,105.52Zm23.15,51.39a107.86,107.86,0,0,1-31.86,51.38,12,12,0,0,1-18.72-3.48,60,60,0,0,0-107,0,12,12,0,0,1-8.5,6.36,12.48,12.48,0,0,1-2.19.2,12,12,0,0,1-8-3.08A107.85,107.85,0,0,1,23.91,156.9,12,12,0,0,1,47,150.49,83.58,83.58,0,0,0,62,180a83.46,83.46,0,0,1,29-23.47,52,52,0,1,1,74,0A83.59,83.59,0,0,1,194,180a83.73,83.73,0,0,0,15-29.49,12,12,0,0,1,23.13,6.42ZM128,148a28,28,0,1,0-28-28A28,28,0,0,0,128,148Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88,88,0,0,0-44,0A8,8,0,0,1,96.26,37ZM33.35,110a8,8,0,0,0,9.85-5.57,87.88,87.88,0,0,1,22-38.09A8,8,0,0,0,53.79,55.14a104,104,0,0,0-26,45A8,8,0,0,0,33.35,110ZM150,213.22a88,88,0,0,1-44,0,8,8,0,0,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49Zm62.8-108.77a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Zm15.44,51.39a103.68,103.68,0,0,1-30.68,49.47A8,8,0,0,1,185.07,203a64,64,0,0,0-114.14,0,8,8,0,0,1-5.67,4.23,8.11,8.11,0,0,1-1.46.14,8,8,0,0,1-5.35-2.05,103.74,103.74,0,0,1-30.68-49.49,8,8,0,0,1,15.42-4.27,87.58,87.58,0,0,0,19,34.88,79.57,79.57,0,0,1,36.1-28.77,48,48,0,1,1,59.38,0,79.57,79.57,0,0,1,36.1,28.77,87.58,87.58,0,0,0,19-34.88,8,8,0,1,1,15.42,4.28ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88,88,0,0,0-44,0A8,8,0,0,1,96.26,37ZM33.35,110a8,8,0,0,0,9.85-5.57,88,88,0,0,1,22-38.09A8,8,0,0,0,53.79,55.14a104.05,104.05,0,0,0-26,45A8,8,0,0,0,33.35,110Zm179.44-5.56a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.22A88,88,0,0,1,212.79,104.45ZM222.66,146a8,8,0,0,0-9.85,5.58,87.61,87.61,0,0,1-19,34.83A79.75,79.75,0,0,0,172,165.11a4,4,0,0,0-4.83.31,59.81,59.81,0,0,1-78.27,0,4,4,0,0,0-4.84-.31,79.52,79.52,0,0,0-22,21.12,87.7,87.7,0,0,1-18.83-34.67,8,8,0,0,0-15.42,4.28,104.07,104.07,0,0,0,200.46,0A8,8,0,0,0,222.66,146ZM128,164a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,164Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M98.19,36.54a6,6,0,0,1,4.31-7.31,102,102,0,0,1,51,0,6,6,0,1,1-3,11.61,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-64.3,71.54a5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41A102.12,102.12,0,0,0,29.7,100.7,6,6,0,0,0,33.89,108.08ZM150.5,215.15a90,90,0,0,1-45,0,6,6,0,1,0-3,11.61,102,102,0,0,0,51,0,6,6,0,0,0-3-11.62Zm64.22-111.24a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.11,90.11,0,0,1,214.72,103.91ZM226.3,155.3a101.75,101.75,0,0,1-30.08,48.53,6,6,0,0,1-9.37-1.74,66,66,0,0,0-117.7,0,6,6,0,0,1-4.26,3.18,5.74,5.74,0,0,1-1.09.1,6,6,0,0,1-4-1.54A101.74,101.74,0,0,1,29.7,155.3a6,6,0,1,1,11.56-3.21,89.79,89.79,0,0,0,21.2,37.59,77.56,77.56,0,0,1,40-31.43,46,46,0,1,1,51,0,77.56,77.56,0,0,1,40,31.43,89.7,89.7,0,0,0,21.2-37.58,6,6,0,1,1,11.56,3.2ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M96.26,37A8,8,0,0,1,102,27.29a104.11,104.11,0,0,1,52,0,8,8,0,0,1-2,15.75,8.15,8.15,0,0,1-2-.26,88,88,0,0,0-44,0A8,8,0,0,1,96.26,37ZM33.35,110a8,8,0,0,0,9.85-5.57,87.88,87.88,0,0,1,22-38.09A8,8,0,0,0,53.8,55.14a103.92,103.92,0,0,0-26,45A8,8,0,0,0,33.35,110ZM150,213.22a88,88,0,0,1-44,0,8,8,0,0,0-4,15.49,104.11,104.11,0,0,0,52,0,8,8,0,0,0-4-15.49Zm62.8-108.77a8,8,0,0,0,15.42-4.28,104,104,0,0,0-26-45,8,8,0,1,0-11.41,11.21A88.14,88.14,0,0,1,212.79,104.45Zm15.44,51.39a103.68,103.68,0,0,1-30.68,49.47A8,8,0,0,1,185.07,203a64,64,0,0,0-114.14,0,8,8,0,0,1-12.48,2.32,103.74,103.74,0,0,1-30.68-49.49,8,8,0,0,1,15.42-4.27,87.58,87.58,0,0,0,19,34.88,79.57,79.57,0,0,1,36.1-28.77,48,48,0,1,1,59.38,0,79.57,79.57,0,0,1,36.1,28.77,87.58,87.58,0,0,0,19-34.88,8,8,0,1,1,15.42,4.28ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M100.13,36A4,4,0,0,1,103,31.17a100.09,100.09,0,0,1,50,0,4,4,0,0,1-1,7.88,4.36,4.36,0,0,1-1-.13,92,92,0,0,0-46,0A4,4,0,0,1,100.13,36ZM34.42,106.16a4,4,0,0,0,4.92-2.79,91.92,91.92,0,0,1,23-39.82,4,4,0,0,0-5.71-5.61,100.15,100.15,0,0,0-25,43.3A4,4,0,0,0,34.42,106.16ZM151,217.09a92,92,0,0,1-46,0,4,4,0,0,0-2,7.75,100,100,0,0,0,50,0,4,4,0,1,0-2-7.74Zm65.65-113.71a4,4,0,1,0,7.7-2.14,100.08,100.08,0,0,0-25-43.31,4,4,0,1,0-5.71,5.61A92,92,0,0,1,216.65,103.38Zm7.73,51.39a99.77,99.77,0,0,1-29.5,47.57,4,4,0,0,1-6.24-1.16,68,68,0,0,0-121.28,0,4,4,0,0,1-2.83,2.12,3.61,3.61,0,0,1-.73.07,4,4,0,0,1-2.68-1,99.8,99.8,0,0,1-29.5-47.58,4,4,0,1,1,7.71-2.13A91.89,91.89,0,0,0,62.8,192.91a75.66,75.66,0,0,1,44.54-34.08,44,44,0,1,1,41.32,0,75.66,75.66,0,0,1,44.54,34.08,91.83,91.83,0,0,0,23.47-40.28,4,4,0,0,1,7.71,2.14ZM128,156a36,36,0,1,0-36-36A36,36,0,0,0,128,156Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "UserCircleDashed";
    },
    75031: (t, e, r) => {
      var n = r(18028),
        o = r(22471),
        a = r(35095);
      t.exports = function (t) {
        return function (e, r, i) {
          var c = Object(e);
          if (!o(e)) {
            var l = n(r, 3);
            (e = a(e)),
              (r = function (t) {
                return l(c[t], t, c);
              });
          }
          var u = t(e, r, i);
          return u > -1 ? c[l ? e[u] : u] : void 0;
        };
      };
    },
    75145: (t, e, r) => {
      var n = r(50851),
        o = r(65531),
        a = r(17855);
      t.exports = function (t) {
        return o(t) ? a(t) : n(t);
      };
    },
    75899: (t, e, r) => {
      t.exports = r(83711)(Object, "create");
    },
    76256: (t, e, r) => {
      "use strict";
      r.d(e, { p: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M172.29,68.9A84,84,0,0,0,12,104v64a20,20,0,0,0,20,20H84.1A84.18,84.18,0,0,0,160,236h64a20,20,0,0,0,20-20V152A84,84,0,0,0,172.29,68.9ZM36,104a60,60,0,1,1,60,60H36ZM220,212H160a60.14,60.14,0,0,1-49-25.37,83.93,83.93,0,0,0,68.55-91.37A60,60,0,0,1,220,152Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M168.16,74.42A78,78,0,0,0,18,104v64a14,14,0,0,0,14,14H88a78.15,78.15,0,0,0,72,48h64a14,14,0,0,0,14-14V152A78,78,0,0,0,168.16,74.42ZM30,168V104a66,66,0,1,1,66,66H32A2,2,0,0,1,30,168Zm196,48a2,2,0,0,1-2,2H160a66.13,66.13,0,0,1-58.89-36.19,77.92,77.92,0,0,0,71-94.68A66,66,0,0,1,226,152Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M166.76,76.32A76,76,0,0,0,20,104v64a12,12,0,0,0,12,12H89.33A76.13,76.13,0,0,0,160,228h64a12,12,0,0,0,12-12V152A76,76,0,0,0,166.76,76.32ZM28,168V104a68,68,0,1,1,68,68H32A4,4,0,0,1,28,168Zm200,48a4,4,0,0,1-4,4H160A68.16,68.16,0,0,1,98,180,76,76,0,0,0,169.5,84.67,68,68,0,0,1,228,152Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "ChatsTeardrop";
    },
    76685: (t, e, r) => {
      var n = r(82500);
      t.exports = function () {
        return n.Date.now();
      };
    },
    76957: (t, e, r) => {
      t.exports = r(82500).Uint8Array;
    },
    77283: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => v });
      var n = r(12115),
        o = r(52596),
        a = r(70788),
        i = r(25641),
        c = r(16377);
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != l(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != l(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == l(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.angle,
            a = t.sign,
            c = t.isExternal,
            l = t.cornerRadius,
            u = t.cornerIsExternal,
            s = l * (c ? 1 : -1) + n,
            f = Math.asin(l / s) / i.Kg,
            p = u ? o : o + a * f;
          return {
            center: (0, i.IZ)(e, r, s, p),
            circleTangency: (0, i.IZ)(e, r, n, p),
            lineTangency: (0, i.IZ)(
              e,
              r,
              s * Math.cos(f * i.Kg),
              u ? o - a * f : o
            ),
            theta: f,
          };
        },
        h = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            a = t.startAngle,
            l = t.endAngle,
            u = (0, c.sA)(l - a) * Math.min(Math.abs(l - a), 359.999),
            s = a + u,
            f = (0, i.IZ)(e, r, o, a),
            p = (0, i.IZ)(e, r, o, s),
            h = "M "
              .concat(f.x, ",")
              .concat(f.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(u) > 180), ",")
              .concat(+(a > s), ",\n    ")
              .concat(p.x, ",")
              .concat(p.y, "\n  ");
          if (n > 0) {
            var d = (0, i.IZ)(e, r, n, a),
              y = (0, i.IZ)(e, r, n, s);
            h += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(u) > 180), ",")
              .concat(+(a <= s), ",\n            ")
              .concat(d.x, ",")
              .concat(d.y, " Z");
          } else h += "L ".concat(e, ",").concat(r, " Z");
          return h;
        },
        d = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            a = t.cornerRadius,
            i = t.forceCornerRadius,
            l = t.cornerIsExternal,
            u = t.startAngle,
            s = t.endAngle,
            f = (0, c.sA)(s - u),
            d = p({
              cx: e,
              cy: r,
              radius: o,
              angle: u,
              sign: f,
              cornerRadius: a,
              cornerIsExternal: l,
            }),
            y = d.circleTangency,
            v = d.lineTangency,
            m = d.theta,
            b = p({
              cx: e,
              cy: r,
              radius: o,
              angle: s,
              sign: -f,
              cornerRadius: a,
              cornerIsExternal: l,
            }),
            g = b.circleTangency,
            x = b.lineTangency,
            O = b.theta,
            w = l ? Math.abs(u - s) : Math.abs(u - s) - m - O;
          if (w < 0)
            return i
              ? "M "
                  .concat(v.x, ",")
                  .concat(v.y, "\n        a")
                  .concat(a, ",")
                  .concat(a, ",0,0,1,")
                  .concat(2 * a, ",0\n        a")
                  .concat(a, ",")
                  .concat(a, ",0,0,1,")
                  .concat(-(2 * a), ",0\n      ")
              : h({
                  cx: e,
                  cy: r,
                  innerRadius: n,
                  outerRadius: o,
                  startAngle: u,
                  endAngle: s,
                });
          var A = "M "
            .concat(v.x, ",")
            .concat(v.y, "\n    A")
            .concat(a, ",")
            .concat(a, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(y.x, ",")
            .concat(y.y, "\n    A")
            .concat(o, ",")
            .concat(o, ",0,")
            .concat(+(w > 180), ",")
            .concat(+(f < 0), ",")
            .concat(g.x, ",")
            .concat(g.y, "\n    A")
            .concat(a, ",")
            .concat(a, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(x.x, ",")
            .concat(x.y, "\n  ");
          if (n > 0) {
            var j = p({
                cx: e,
                cy: r,
                radius: n,
                angle: u,
                sign: f,
                isExternal: !0,
                cornerRadius: a,
                cornerIsExternal: l,
              }),
              E = j.circleTangency,
              S = j.lineTangency,
              P = j.theta,
              M = p({
                cx: e,
                cy: r,
                radius: n,
                angle: s,
                sign: -f,
                isExternal: !0,
                cornerRadius: a,
                cornerIsExternal: l,
              }),
              k = M.circleTangency,
              _ = M.lineTangency,
              T = M.theta,
              C = l ? Math.abs(u - s) : Math.abs(u - s) - P - T;
            if (C < 0 && 0 === a)
              return "".concat(A, "L").concat(e, ",").concat(r, "Z");
            A += "L"
              .concat(_.x, ",")
              .concat(_.y, "\n      A")
              .concat(a, ",")
              .concat(a, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(k.x, ",")
              .concat(k.y, "\n      A")
              .concat(n, ",")
              .concat(n, ",0,")
              .concat(+(C > 180), ",")
              .concat(+(f > 0), ",")
              .concat(E.x, ",")
              .concat(E.y, "\n      A")
              .concat(a, ",")
              .concat(a, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(S.x, ",")
              .concat(S.y, "Z");
          } else A += "L".concat(e, ",").concat(r, "Z");
          return A;
        },
        y = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        v = function (t) {
          var e,
            r = f(f({}, y), t),
            i = r.cx,
            l = r.cy,
            s = r.innerRadius,
            p = r.outerRadius,
            v = r.cornerRadius,
            m = r.forceCornerRadius,
            b = r.cornerIsExternal,
            g = r.startAngle,
            x = r.endAngle,
            O = r.className;
          if (p < s || g === x) return null;
          var w = (0, o.A)("recharts-sector", O),
            A = p - s,
            j = (0, c.F4)(v, A, 0, !0);
          return (
            (e =
              j > 0 && 360 > Math.abs(g - x)
                ? d({
                    cx: i,
                    cy: l,
                    innerRadius: s,
                    outerRadius: p,
                    cornerRadius: Math.min(j, A / 2),
                    forceCornerRadius: m,
                    cornerIsExternal: b,
                    startAngle: g,
                    endAngle: x,
                  })
                : h({
                    cx: i,
                    cy: l,
                    innerRadius: s,
                    outerRadius: p,
                    startAngle: g,
                    endAngle: x,
                  })),
            n.createElement(
              "path",
              u({}, (0, a.J9)(r, !0), { className: w, d: e, role: "img" })
            )
          );
        };
    },
    77969: (t, e, r) => {
      var n = r(91569),
        o = r(36314);
      t.exports = function t(e, r, a, i, c) {
        var l = -1,
          u = e.length;
        for (a || (a = o), c || (c = []); ++l < u; ) {
          var s = e[l];
          r > 0 && a(s)
            ? r > 1
              ? t(s, r - 1, a, i, c)
              : n(c, s)
            : i || (c[c.length] = s);
        }
        return c;
      };
    },
    79095: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => L });
      var n = r(12115),
        o = r(59882),
        a = r.n(o),
        i = r(52596),
        c = r(16377),
        l = r(41643),
        u = r(70788),
        s = r(46605);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                a,
                i,
                c = [],
                l = !0,
                u = !1;
              try {
                if (((a = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (u = !0), (o = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((i = r.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return h(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(
              t,
              (function (t) {
                var e = (function (t, e) {
                  if ("object" != f(t) || !t) return t;
                  var r = t[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != f(n)) return n;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == f(e) ? e : e + "";
              })(n.key),
              n
            );
        }
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        b = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        g = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(g),
        O = (function () {
          var t, e;
          function r(t, e) {
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            (this.num = t),
              (this.unit = e),
              (this.num = t),
              (this.unit = e),
              Number.isNaN(t) && (this.unit = ""),
              "" === e || m.test(e) || ((this.num = NaN), (this.unit = "")),
              x.includes(e) && ((this.num = t * g[e]), (this.unit = "px"));
          }
          return (
            (t = [
              {
                key: "add",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num + t.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num - t.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num * t.num, this.unit || t.unit);
                },
              },
              {
                key: "divide",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new r(NaN, "")
                    : new r(this.num / t.num, this.unit || t.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ]),
            (e = [
              {
                key: "parse",
                value: function (t) {
                  var e,
                    n = p(null != (e = b.exec(t)) ? e : [], 3),
                    o = n[1],
                    a = n[2];
                  return new r(parseFloat(o), null != a ? a : "");
                },
              },
            ]),
            t && d(r.prototype, t),
            e && d(r, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })();
      function w(t) {
        if (t.includes("NaN")) return "NaN";
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            n = p(null != (r = y.exec(e)) ? r : [], 4),
            o = n[1],
            a = n[2],
            i = n[3],
            c = O.parse(null != o ? o : ""),
            l = O.parse(null != i ? i : ""),
            u = "*" === a ? c.multiply(l) : c.divide(l);
          if (u.isNaN()) return "NaN";
          e = e.replace(y, u.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null != (s = v.exec(e)) ? s : [], 4),
            h = f[1],
            d = f[2],
            m = f[3],
            b = O.parse(null != h ? h : ""),
            g = O.parse(null != m ? m : ""),
            x = "+" === d ? b.add(g) : b.subtract(g);
          if (x.isNaN()) return "NaN";
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var A = /\(([^()]*)\)/;
      function j(t) {
        var e = (function (t) {
          try {
            var e;
            return (
              (e = t.replace(/\s+/g, "")),
              (e = (function (t) {
                for (var e = t; e.includes("("); ) {
                  var r = p(A.exec(e), 2)[1];
                  e = e.replace(A, w(r));
                }
                return e;
              })(e)),
              (e = w(e))
            );
          } catch (t) {
            return "NaN";
          }
        })(t.slice(5, -1));
        return "NaN" === e ? "" : e;
      }
      var E = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        S = ["dx", "dy", "angle", "className", "breakAll"];
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function M(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function k(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                a,
                i,
                c = [],
                l = !0,
                u = !1;
              try {
                if (((a = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (u = !0), (o = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((i = r.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return _(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var T = /[ \f\n\r\t\v\u2028\u2029]+/,
        C = function (t) {
          var e = t.children,
            r = t.breakAll,
            n = t.style;
          try {
            var o = [];
            a()(e) || (o = r ? e.toString().split("") : e.toString().split(T));
            var i = o.map(function (t) {
                return { word: t, width: (0, s.Pu)(t, n).width };
              }),
              c = r ? 0 : (0, s.Pu)("\xa0", n).width;
            return { wordsWithComputedWidth: i, spaceWidth: c };
          } catch (t) {
            return null;
          }
        },
        I = function (t, e, r, n, o) {
          var a,
            i = t.maxLines,
            l = t.children,
            u = t.style,
            s = t.breakAll,
            f = (0, c.Et)(i),
            p = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.reduce(function (t, e) {
                var a = e.word,
                  i = e.width,
                  c = t[t.length - 1];
                return (
                  c && (null == n || o || c.width + i + r < Number(n))
                    ? (c.words.push(a), (c.width += i + r))
                    : t.push({ words: [a], width: i }),
                  t
                );
              }, []);
            },
            h = p(e);
          if (!f) return h;
          for (
            var d = function (t) {
                var e = p(
                  C({ breakAll: s, style: u, children: l.slice(0, t) + "…" })
                    .wordsWithComputedWidth
                );
                return [
                  e.length > i ||
                    e.reduce(function (t, e) {
                      return t.width > e.width ? t : e;
                    }).width > Number(n),
                  e,
                ];
              },
              y = 0,
              v = l.length - 1,
              m = 0;
            y <= v && m <= l.length - 1;

          ) {
            var b = Math.floor((y + v) / 2),
              g = k(d(b - 1), 2),
              x = g[0],
              O = g[1],
              w = k(d(b), 1)[0];
            if ((x || w || (y = b + 1), x && w && (v = b - 1), !x && w)) {
              a = O;
              break;
            }
            m++;
          }
          return a || h;
        },
        Z = function (t) {
          return [{ words: a()(t) ? [] : t.toString().split(T) }];
        },
        D = function (t) {
          var e = t.width,
            r = t.scaleToFit,
            n = t.children,
            o = t.style,
            a = t.breakAll,
            i = t.maxLines;
          if ((e || r) && !l.m.isSsr) {
            var c = C({ breakAll: a, children: n, style: o });
            if (!c) return Z(n);
            var u = c.wordsWithComputedWidth,
              s = c.spaceWidth;
            return I(
              { breakAll: a, children: n, maxLines: i, style: o },
              u,
              s,
              e,
              r
            );
          }
          return Z(n);
        },
        N = "#808080",
        L = function (t) {
          var e,
            r = t.x,
            o = void 0 === r ? 0 : r,
            a = t.y,
            l = void 0 === a ? 0 : a,
            s = t.lineHeight,
            f = void 0 === s ? "1em" : s,
            p = t.capHeight,
            h = void 0 === p ? "0.71em" : p,
            d = t.scaleToFit,
            y = void 0 !== d && d,
            v = t.textAnchor,
            m = t.verticalAnchor,
            b = t.fill,
            g = void 0 === b ? N : b,
            x = M(t, E),
            O = (0, n.useMemo)(
              function () {
                return D({
                  breakAll: x.breakAll,
                  children: x.children,
                  maxLines: x.maxLines,
                  scaleToFit: y,
                  style: x.style,
                  width: x.width,
                });
              },
              [x.breakAll, x.children, x.maxLines, y, x.style, x.width]
            ),
            w = x.dx,
            A = x.dy,
            k = x.angle,
            _ = x.className,
            T = x.breakAll,
            C = M(x, S);
          if (!(0, c.vh)(o) || !(0, c.vh)(l)) return null;
          var I = o + ((0, c.Et)(w) ? w : 0),
            Z = l + ((0, c.Et)(A) ? A : 0);
          switch (void 0 === m ? "end" : m) {
            case "start":
              e = j("calc(".concat(h, ")"));
              break;
            case "middle":
              e = j(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(f, " + (")
                  .concat(h, " / 2))")
              );
              break;
            default:
              e = j("calc(".concat(O.length - 1, " * -").concat(f, ")"));
          }
          var L = [];
          if (y) {
            var H = O[0].width,
              V = x.width;
            L.push("scale(".concat(((0, c.Et)(V) ? V / H : 1) / H, ")"));
          }
          return (
            k &&
              L.push("rotate(".concat(k, ", ").concat(I, ", ").concat(Z, ")")),
            L.length && (C.transform = L.join(" ")),
            n.createElement(
              "text",
              P({}, (0, u.J9)(C, !0), {
                x: I,
                y: Z,
                className: (0, i.A)("recharts-text", _),
                textAnchor: void 0 === v ? "start" : v,
                fill: g.includes("url") ? N : g,
              }),
              O.map(function (t, r) {
                var o = t.words.join(T ? "" : " ");
                return n.createElement(
                  "tspan",
                  {
                    x: I,
                    dy: 0 === r ? e : f,
                    key: "".concat(o, "-").concat(r),
                  },
                  o
                );
              })
            )
          );
        };
    },
    79399: (t, e, r) => {
      "use strict";
      var n = r(72948);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (t.exports = function () {
          function t(t, e, r, o, a, i) {
            if (i !== n) {
              var c = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var r = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    79401: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    79595: (t, e, r) => {
      var n = r(39608),
        o = r(70771),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      t.exports = function (t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return (
          !!(
            "number" == r ||
            "symbol" == r ||
            "boolean" == r ||
            null == t ||
            o(t)
          ) ||
          i.test(t) ||
          !a.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    81519: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => a, z: () => i });
      var n = r(28749),
        o = r(95442);
      function a() {
        var t,
          e,
          r = (0, o.A)().unknown(void 0),
          i = r.domain,
          c = r.range,
          l = 0,
          u = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var r = i().length,
            n = u < l,
            o = n ? u : l,
            a = n ? l : u;
          (t = (a - o) / Math.max(1, r - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (a - o - t * (r - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var d = (function (t, e, r) {
            (t *= 1),
              (e *= 1),
              (r =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                  ? 1
                  : +r);
            for (
              var n = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / r)),
                a = Array(o);
              ++n < o;

            )
              a[n] = t + n * r;
            return a;
          })(r).map(function (e) {
            return o + t * e;
          });
          return c(n ? d.reverse() : d);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (i(t), d()) : i();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([l, u] = t), (l *= 1), (u *= 1), d())
              : [l, u];
          }),
          (r.rangeRound = function (t) {
            return ([l, u] = t), (l *= 1), (u *= 1), (s = !0), d();
          }),
          (r.bandwidth = function () {
            return e;
          }),
          (r.step = function () {
            return t;
          }),
          (r.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (r.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (r.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (r.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (r.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (r.copy = function () {
            return a(i(), [l, u])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          n.C.apply(d(), arguments)
        );
      }
      function i() {
        return (function t(e) {
          var r = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return t(r());
            }),
            e
          );
        })(a.apply(null, arguments).paddingInner(1));
      }
    },
    81905: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M204,168a52.06,52.06,0,0,1-52,52H140v12a12,12,0,0,1-24,0V220H104a52.06,52.06,0,0,1-52-52,12,12,0,0,1,24,0,28,28,0,0,0,28,28h48a28,28,0,0,0,0-56H112a52,52,0,0,1,0-104h4V24a12,12,0,0,1,24,0V36h4a52.06,52.06,0,0,1,52,52,12,12,0,0,1-24,0,28,28,0,0,0-28-28H112a28,28,0,0,0,0,56h40A52.06,52.06,0,0,1,204,168Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M198,168a46.06,46.06,0,0,1-46,46H134v18a6,6,0,0,1-12,0V214H104a46.06,46.06,0,0,1-46-46,6,6,0,0,1,12,0,34,34,0,0,0,34,34h48a34,34,0,0,0,0-68H112a46,46,0,0,1,0-92h10V24a6,6,0,0,1,12,0V42h10a46.06,46.06,0,0,1,46,46,6,6,0,0,1-12,0,34,34,0,0,0-34-34H112a34,34,0,0,0,0,68h40A46.06,46.06,0,0,1,198,168Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M196,168a44.05,44.05,0,0,1-44,44H132v20a4,4,0,0,1-8,0V212H104a44.05,44.05,0,0,1-44-44,4,4,0,0,1,8,0,36,36,0,0,0,36,36h48a36,36,0,0,0,0-72H112a44,44,0,0,1,0-88h12V24a4,4,0,0,1,8,0V44h12a44.05,44.05,0,0,1,44,44,4,4,0,0,1-8,0,36,36,0,0,0-36-36H112a36,36,0,0,0,0,72h40A44.05,44.05,0,0,1,196,168Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "CurrencyDollarSimple";
    },
    82500: (t, e, r) => {
      var n = r(7985),
        o = "object" == typeof self && self && self.Object === Object && self;
      t.exports = n || o || Function("return this")();
    },
    82596: (t, e, r) => {
      var n = r(38008),
        o = r(31431),
        a = r(74166);
      t.exports =
        n && 1 / a(new n([, -0]))[1] == 1 / 0
          ? function (t) {
              return new n(t);
            }
          : o;
    },
    82661: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function o(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function a(t, e, n, a, i) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var c = new o(n, a || t, i),
          l = r ? r + e : e;
        return (
          t._events[l]
            ? t._events[l].fn
              ? (t._events[l] = [t._events[l], c])
              : t._events[l].push(c)
            : ((t._events[l] = c), t._eventsCount++),
          t
        );
      }
      function i(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function c() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (c.prototype.eventNames = function () {
          var t,
            n,
            o = [];
          if (0 === this._eventsCount) return o;
          for (n in (t = this._events))
            e.call(t, n) && o.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (c.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var o = 0, a = n.length, i = Array(a); o < a; o++)
            i[o] = n[o].fn;
          return i;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (t, e, n, o, a, i) {
          var c = r ? r + t : t;
          if (!this._events[c]) return !1;
          var l,
            u,
            s = this._events[c],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, n), !0;
              case 4:
                return s.fn.call(s.context, e, n, o), !0;
              case 5:
                return s.fn.call(s.context, e, n, o, a), !0;
              case 6:
                return s.fn.call(s.context, e, n, o, a, i), !0;
            }
            for (u = 1, l = Array(f - 1); u < f; u++) l[u - 1] = arguments[u];
            s.fn.apply(s.context, l);
          } else {
            var p,
              h = s.length;
            for (u = 0; u < h; u++)
              switch (
                (s[u].once && this.removeListener(t, s[u].fn, void 0, !0), f)
              ) {
                case 1:
                  s[u].fn.call(s[u].context);
                  break;
                case 2:
                  s[u].fn.call(s[u].context, e);
                  break;
                case 3:
                  s[u].fn.call(s[u].context, e, n);
                  break;
                case 4:
                  s[u].fn.call(s[u].context, e, n, o);
                  break;
                default:
                  if (!l)
                    for (p = 1, l = Array(f - 1); p < f; p++)
                      l[p - 1] = arguments[p];
                  s[u].fn.apply(s[u].context, l);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, r) {
          return a(this, t, e, r, !1);
        }),
        (c.prototype.once = function (t, e, r) {
          return a(this, t, e, r, !0);
        }),
        (c.prototype.removeListener = function (t, e, n, o) {
          var a = r ? r + t : t;
          if (!this._events[a]) return this;
          if (!e) return i(this, a), this;
          var c = this._events[a];
          if (c.fn)
            c.fn !== e ||
              (o && !c.once) ||
              (n && c.context !== n) ||
              i(this, a);
          else {
            for (var l = 0, u = [], s = c.length; l < s; l++)
              (c[l].fn !== e ||
                (o && !c[l].once) ||
                (n && c[l].context !== n)) &&
                u.push(c[l]);
            u.length
              ? (this._events[a] = 1 === u.length ? u[0] : u)
              : i(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && i(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        (t.exports = c);
    },
    82954: (t) => {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    83134: (t, e, r) => {
      var n = r(58918),
        o = r(21582),
        a = r(18028);
      t.exports = function (t, e) {
        return t && t.length ? n(t, a(e, 2), o) : void 0;
      };
    },
    83197: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => u });
      var n = r(24026),
        o = r(12814),
        a = r(70788);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != i(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != i(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == i(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var u = function (t) {
        var e,
          r = t.children,
          i = t.formattedGraphicalItems,
          c = t.legendWidth,
          u = t.legendContent,
          s = (0, a.BU)(r, n.s);
        if (!s) return null;
        var f = n.s.defaultProps,
          p = void 0 !== f ? l(l({}, f), s.props) : {};
        return (
          (e =
            s.props && s.props.payload
              ? s.props && s.props.payload
              : "children" === u
              ? (i || []).reduce(function (t, e) {
                  var r = e.item,
                    n = e.props,
                    o = n.sectors || n.data || [];
                  return t.concat(
                    o.map(function (t) {
                      return {
                        type: s.props.iconType || r.props.legendType,
                        value: t.name,
                        color: t.fill,
                        payload: t,
                      };
                    })
                  );
                }, [])
              : (i || []).map(function (t) {
                  var e = t.item,
                    r = e.type.defaultProps,
                    n = void 0 !== r ? l(l({}, r), e.props) : {},
                    a = n.dataKey,
                    i = n.name,
                    c = n.legendType;
                  return {
                    inactive: n.hide,
                    dataKey: a,
                    type: p.iconType || c || "square",
                    color: (0, o.Ps)(e),
                    value: i || a,
                    payload: n,
                  };
                })),
          l(l(l({}, p), n.s.getWithHeight(s, c)), {}, { payload: e, item: s })
        );
      };
    },
    83540: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => d });
      var n = r(52596),
        o = r(12115),
        a = r(91959),
        i = r.n(a),
        c = r(16377),
        l = r(675),
        u = r(70788);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var d = (0, o.forwardRef)(function (t, e) {
        var r,
          a = t.aspect,
          s = t.initialDimension,
          f = void 0 === s ? { width: -1, height: -1 } : s,
          d = t.width,
          y = void 0 === d ? "100%" : d,
          v = t.height,
          m = void 0 === v ? "100%" : v,
          b = t.minWidth,
          g = void 0 === b ? 0 : b,
          x = t.minHeight,
          O = t.maxHeight,
          w = t.children,
          A = t.debounce,
          j = void 0 === A ? 0 : A,
          E = t.id,
          S = t.className,
          P = t.onResize,
          M = t.style,
          k = (0, o.useRef)(null),
          _ = (0, o.useRef)();
        (_.current = P),
          (0, o.useImperativeHandle)(e, function () {
            return Object.defineProperty(k.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported."
                  ),
                  k.current
                );
              },
              configurable: !0,
            });
          });
        var T =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (r = (0, o.useState)({
                containerWidth: f.width,
                containerHeight: f.height,
              }))
            ) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  a,
                  i,
                  c = [],
                  l = !0,
                  u = !1;
                try {
                  (a = (r = r.call(t)).next), !1;
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    l = !0
                  );
                } catch (t) {
                  (u = !0), (o = t);
                } finally {
                  try {
                    if (
                      !l &&
                      null != r.return &&
                      ((i = r.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return c;
              }
            })(r, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return h(t, 2);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(t);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return h(t, e);
              }
            })(r, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          C = T[0],
          I = T[1],
          Z = (0, o.useCallback)(function (t, e) {
            I(function (r) {
              var n = Math.round(t),
                o = Math.round(e);
              return r.containerWidth === n && r.containerHeight === o
                ? r
                : { containerWidth: n, containerHeight: o };
            });
          }, []);
        (0, o.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                o = r.height;
              Z(n, o), null == (e = _.current) || e.call(_, n, o);
            };
            j > 0 && (t = i()(t, j, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = k.current.getBoundingClientRect();
            return (
              Z(r.width, r.height),
              e.observe(k.current),
              function () {
                e.disconnect();
              }
            );
          },
          [Z, j]
        );
        var D = (0, o.useMemo)(
          function () {
            var t = C.containerWidth,
              e = C.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.R)(
              (0, c._3)(y) || (0, c._3)(m),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              y,
              m
            ),
              (0, l.R)(
                !a || a > 0,
                "The aspect(%s) must be greater than zero.",
                a
              );
            var r = (0, c._3)(y) ? t : y,
              n = (0, c._3)(m) ? e : m;
            a &&
              a > 0 &&
              (r ? (n = r / a) : n && (r = n * a), O && n > O && (n = O)),
              (0, l.R)(
                r > 0 || n > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                r,
                n,
                y,
                m,
                g,
                x,
                a
              );
            var i = !Array.isArray(w) && (0, u.Mn)(w.type).endsWith("Chart");
            return o.Children.map(w, function (t) {
              return o.isValidElement(t)
                ? (0, o.cloneElement)(
                    t,
                    p(
                      { width: r, height: n },
                      i
                        ? {
                            style: p(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: n,
                                maxWidth: r,
                              },
                              t.props.style
                            ),
                          }
                        : {}
                    )
                  )
                : t;
            });
          },
          [a, w, m, O, x, g, C, y]
        );
        return o.createElement(
          "div",
          {
            id: E ? "".concat(E) : void 0,
            className: (0, n.A)("recharts-responsive-container", S),
            style: p(
              p({}, void 0 === M ? {} : M),
              {},
              { width: y, height: m, minWidth: g, minHeight: x, maxHeight: O }
            ),
            ref: k,
          },
          D
        );
      });
    },
    83711: (t, e, r) => {
      var n = r(13122),
        o = r(15473);
      t.exports = function (t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0;
      };
    },
    83979: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    84464: (t, e, r) => {
      var n = r(20963),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, a, i, c) {
        var l = 1 & r,
          u = n(t),
          s = u.length;
        if (s != n(e).length && !l) return !1;
        for (var f = s; f--; ) {
          var p = u[f];
          if (!(l ? p in e : o.call(e, p))) return !1;
        }
        var h = c.get(t),
          d = c.get(e);
        if (h && d) return h == e && d == t;
        var y = !0;
        c.set(t, e), c.set(e, t);
        for (var v = l; ++f < s; ) {
          var m = t[(p = u[f])],
            b = e[p];
          if (a) var g = l ? a(b, m, p, e, t, c) : a(m, b, p, t, e, c);
          if (!(void 0 === g ? m === b || i(m, b, r, a, c) : g)) {
            y = !1;
            break;
          }
          v || (v = "constructor" == p);
        }
        if (y && !v) {
          var x = t.constructor,
            O = e.constructor;
          x != O &&
            "constructor" in t &&
            "constructor" in e &&
            !(
              "function" == typeof x &&
              x instanceof x &&
              "function" == typeof O &&
              O instanceof O
            ) &&
            (y = !1);
        }
        return c.delete(t), c.delete(e), y;
      };
    },
    84760: (t) => {
      t.exports = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      };
    },
    85090: (t, e, r) => {
      var n = r(88748),
        o = r(6997),
        a = r(34210);
      function i(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
      }
      (i.prototype.add = i.prototype.push = o),
        (i.prototype.has = a),
        (t.exports = i);
    },
    85654: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { A: () => n });
    },
    85855: (t, e, r) => {
      var n = r(16613);
      t.exports = function (t) {
        return null == t ? "" : n(t);
      };
    },
    86216: (t, e, r) => {
      t.exports = r(30716)();
    },
    86452: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    88748: (t, e, r) => {
      var n = r(10537),
        o = r(94999),
        a = r(74544),
        i = r(73956),
        c = r(5516);
      function l(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = a),
        (l.prototype.has = i),
        (l.prototype.set = c),
        (t.exports = l);
    },
    89053: (t, e, r) => {
      var n = r(58918),
        o = r(52521),
        a = r(13465);
      t.exports = function (t) {
        return t && t.length ? n(t, a, o) : void 0;
      };
    },
    89316: (t, e, r) => {
      var n = r(98233),
        o = r(15631),
        a = r(48611),
        i = {};
      (i["[object Float32Array]"] =
        i["[object Float64Array]"] =
        i["[object Int8Array]"] =
        i["[object Int16Array]"] =
        i["[object Int32Array]"] =
        i["[object Uint8Array]"] =
        i["[object Uint8ClampedArray]"] =
        i["[object Uint16Array]"] =
        i["[object Uint32Array]"] =
          !0),
        (i["[object Arguments]"] =
          i["[object Array]"] =
          i["[object ArrayBuffer]"] =
          i["[object Boolean]"] =
          i["[object DataView]"] =
          i["[object Date]"] =
          i["[object Error]"] =
          i["[object Function]"] =
          i["[object Map]"] =
          i["[object Number]"] =
          i["[object Object]"] =
          i["[object RegExp]"] =
          i["[object Set]"] =
          i["[object String]"] =
          i["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return a(t) && o(t.length) && !!i[n(t)];
        });
    },
    90453: (t, e, r) => {
      var n = r(31598);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    90724: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      };
    },
    90929: (t, e, r) => {
      var n = r(54360),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
        );
      };
    },
    91113: (t, e, r) => {
      var n = r(88748);
      function o(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var i = t.apply(this, n);
          return (r.cache = a.set(o, i) || a), i;
        };
        return (r.cache = new (o.Cache || n)()), r;
      }
      (o.Cache = n), (t.exports = o);
    },
    91569: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
        return t;
      };
    },
    91959: (t, e, r) => {
      var n = r(45964),
        o = r(67460);
      t.exports = function (t, e, r) {
        var a = !0,
          i = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          o(r) &&
            ((a = "leading" in r ? !!r.leading : a),
            (i = "trailing" in r ? !!r.trailing : i)),
          n(t, e, { leading: a, maxWait: e, trailing: i })
        );
      };
    },
    92313: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      };
    },
    92418: (t, e, r) => {
      "use strict";
      r.d(e, { gu: () => eI });
      var n = r(12115),
        o = r(59882),
        a = r.n(o),
        i = r(40139),
        c = r.n(i),
        l = r(18940),
        u = r.n(l),
        s = r(48973),
        f = r.n(s),
        p = r(67206),
        h = r.n(p),
        d = r(91959),
        y = r.n(d),
        v = r(52596),
        m = r(93179),
        b = r(72790),
        g = r(2348),
        x = r(94517),
        O = r(24026),
        w = r(51172),
        A = r(44538),
        j = r(70788),
        E = r(81519),
        S = r(79095),
        P = r(12814),
        M = r(16377);
      function k(t) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(r), !0).forEach(function (e) {
                C(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function C(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != k(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != k(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == k(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var I = ["Webkit", "Moz", "O", "ms"],
        Z = function (t, e) {
          if (!t) return null;
          var r = t.replace(/(\w)/, function (t) {
              return t.toUpperCase();
            }),
            n = I.reduce(function (t, n) {
              return T(T({}, t), {}, C({}, n + r, e));
            }, {});
          return (n[t] = e), n;
        };
      function D(t) {
        return (D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function L(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(r), !0).forEach(function (e) {
                z(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function V(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, U(n.key), n);
        }
      }
      function R() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (R = function () {
          return !!t;
        })();
      }
      function B(t) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function F(t, e) {
        return (F = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function z(t, e, r) {
        return (
          (e = U(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function U(t) {
        var e = (function (t, e) {
          if ("object" != D(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != D(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == D(e) ? e : e + "";
      }
      var W = function (t) {
          var e = t.data,
            r = t.startIndex,
            n = t.endIndex,
            o = t.x,
            a = t.width,
            i = t.travellerWidth;
          if (!e || !e.length) return {};
          var c = e.length,
            l = (0, E.z)()
              .domain(u()(0, c))
              .range([o, o + a - i]),
            s = l.domain().map(function (t) {
              return l(t);
            });
          return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: l(r),
            endX: l(n),
            scale: l,
            scaleValues: s,
          };
        },
        $ = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        q = (function (t) {
          var e, r;
          function o(t) {
            var e, r, n;
            if (!(this instanceof o))
              throw TypeError("Cannot call a class as a function");
            return (
              (r = o),
              (n = [t]),
              (r = B(r)),
              z(
                (e = (function (t, e) {
                  if (e && ("object" === D(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  var r = t;
                  if (void 0 === r)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return r;
                })(
                  this,
                  R()
                    ? Reflect.construct(r, n || [], B(this).constructor)
                    : r.apply(this, n)
                )),
                "handleDrag",
                function (t) {
                  e.leaveTimer &&
                    (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                    e.state.isTravellerMoving
                      ? e.handleTravellerMove(t)
                      : e.state.isSlideMoving && e.handleSlideDrag(t);
                }
              ),
              z(e, "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              z(e, "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      r = t.endIndex,
                      n = t.onDragEnd,
                      o = t.startIndex;
                    null == n || n({ endIndex: r, startIndex: o });
                  }
                ),
                  e.detachDragEndListener();
              }),
              z(e, "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut
                  ));
              }),
              z(e, "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              z(e, "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              z(e, "handleSlideDragStart", function (t) {
                var r = $(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: r.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(e, "startX"),
                endX: e.handleTravellerDragStart.bind(e, "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (o.prototype = Object.create(t && t.prototype, {
              constructor: { value: o, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            t && F(o, t),
            (e = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    r = t.endX,
                    n = this.state.scaleValues,
                    a = this.props,
                    i = a.gap,
                    c = a.data.length - 1,
                    l = Math.min(e, r),
                    u = Math.max(e, r),
                    s = o.getIndexInRange(n, l),
                    f = o.getIndexInRange(n, u);
                  return {
                    startIndex: s - (s % i),
                    endIndex: f === c ? c : f - (f % i),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    r = e.data,
                    n = e.tickFormatter,
                    o = e.dataKey,
                    a = (0, P.kr)(r[t], o, t);
                  return c()(n) ? n(a, t) : a;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
                    window.removeEventListener(
                      "touchend",
                      this.handleDragEnd,
                      !0
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.handleDrag,
                      !0
                    );
                },
              },
              {
                key: "handleSlideDrag",
                value: function (t) {
                  var e = this.state,
                    r = e.slideMoveStartX,
                    n = e.startX,
                    o = e.endX,
                    a = this.props,
                    i = a.x,
                    c = a.width,
                    l = a.travellerWidth,
                    u = a.startIndex,
                    s = a.endIndex,
                    f = a.onChange,
                    p = t.pageX - r;
                  p > 0
                    ? (p = Math.min(p, i + c - l - o, i + c - l - n))
                    : p < 0 && (p = Math.max(p, i - n, i - o));
                  var h = this.getIndex({ startX: n + p, endX: o + p });
                  (h.startIndex !== u || h.endIndex !== s) && f && f(h),
                    this.setState({
                      startX: n + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var r = $(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: r.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e = this.state,
                    r = e.brushMoveStartX,
                    n = e.movingTravellerId,
                    o = e.endX,
                    a = e.startX,
                    i = this.state[n],
                    c = this.props,
                    l = c.x,
                    u = c.width,
                    s = c.travellerWidth,
                    f = c.onChange,
                    p = c.gap,
                    h = c.data,
                    d = { startX: this.state.startX, endX: this.state.endX },
                    y = t.pageX - r;
                  y > 0
                    ? (y = Math.min(y, l + u - s - i))
                    : y < 0 && (y = Math.max(y, l - i)),
                    (d[n] = i + y);
                  var v = this.getIndex(d),
                    m = v.startIndex,
                    b = v.endIndex,
                    g = function () {
                      var t = h.length - 1;
                      return (
                        ("startX" === n && (o > a ? m % p == 0 : b % p == 0)) ||
                        (!!(o < a) && b === t) ||
                        ("endX" === n && (o > a ? b % p == 0 : m % p == 0)) ||
                        (!!(o > a) && b === t)
                      );
                    };
                  this.setState(
                    z(z({}, n, i + y), "brushMoveStartX", t.pageX),
                    function () {
                      f && g() && f(v);
                    }
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var r = this,
                    n = this.state,
                    o = n.scaleValues,
                    a = n.startX,
                    i = n.endX,
                    c = this.state[e],
                    l = o.indexOf(c);
                  if (-1 !== l) {
                    var u = l + t;
                    if (-1 !== u && !(u >= o.length)) {
                      var s = o[u];
                      ("startX" === e && s >= i) ||
                        ("endX" === e && s <= a) ||
                        this.setState(z({}, e, s), function () {
                          r.props.onChange(
                            r.getIndex({
                              startX: r.state.startX,
                              endX: r.state.endX,
                            })
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    o = t.width,
                    a = t.height,
                    i = t.fill,
                    c = t.stroke;
                  return n.createElement("rect", {
                    stroke: c,
                    fill: i,
                    x: e,
                    y: r,
                    width: o,
                    height: a,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    o = t.width,
                    a = t.height,
                    i = t.data,
                    c = t.children,
                    l = t.padding,
                    u = n.Children.only(c);
                  return u
                    ? n.cloneElement(u, {
                        x: e,
                        y: r,
                        width: o,
                        height: a,
                        margin: l,
                        compact: !0,
                        data: i,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var r,
                    a,
                    i = this,
                    c = this.props,
                    l = c.y,
                    u = c.travellerWidth,
                    s = c.height,
                    f = c.traveller,
                    p = c.ariaLabel,
                    h = c.data,
                    d = c.startIndex,
                    y = c.endIndex,
                    v = Math.max(t, this.props.x),
                    m = H(
                      H({}, (0, j.J9)(this.props, !1)),
                      {},
                      { x: v, y: l, width: u, height: s }
                    ),
                    b =
                      p ||
                      "Min value: "
                        .concat(
                          null == (r = h[d]) ? void 0 : r.name,
                          ", Max value: "
                        )
                        .concat(null == (a = h[y]) ? void 0 : a.name);
                  return n.createElement(
                    g.W,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": b,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          i.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e
                          ));
                      },
                      onFocus: function () {
                        i.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        i.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    o.renderTraveller(f, m)
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var r = this.props,
                    o = r.y,
                    a = r.height,
                    i = r.stroke,
                    c = r.travellerWidth,
                    l = Math.min(t, e) + c,
                    u = Math.max(Math.abs(e - t) - c, 0);
                  return n.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: i,
                    fillOpacity: 0.2,
                    x: l,
                    y: o,
                    width: u,
                    height: a,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    r = t.endIndex,
                    o = t.y,
                    a = t.height,
                    i = t.travellerWidth,
                    c = t.stroke,
                    l = this.state,
                    u = l.startX,
                    s = l.endX,
                    f = { pointerEvents: "none", fill: c };
                  return n.createElement(
                    g.W,
                    { className: "recharts-brush-texts" },
                    n.createElement(
                      S.E,
                      N(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(u, s) - 5,
                          y: o + a / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(e)
                    ),
                    n.createElement(
                      S.E,
                      N(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(u, s) + i + 5,
                          y: o + a / 2,
                        },
                        f
                      ),
                      this.getTextOfTick(r)
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    r = t.className,
                    o = t.children,
                    a = t.x,
                    i = t.y,
                    c = t.width,
                    l = t.height,
                    u = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    m = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, M.Et)(a) ||
                    !(0, M.Et)(i) ||
                    !(0, M.Et)(c) ||
                    !(0, M.Et)(l) ||
                    c <= 0 ||
                    l <= 0
                  )
                    return null;
                  var b = (0, v.A)("recharts-brush", r),
                    x = 1 === n.Children.count(o),
                    O = Z("userSelect", "none");
                  return n.createElement(
                    g.W,
                    {
                      className: b,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: O,
                    },
                    this.renderBackground(),
                    x && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || m || u) && this.renderText()
                  );
                },
              },
            ]),
            (r = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    r = t.y,
                    o = t.width,
                    a = t.height,
                    i = t.stroke,
                    c = Math.floor(r + a / 2) - 1;
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("rect", {
                      x: e,
                      y: r,
                      width: o,
                      height: a,
                      fill: i,
                      stroke: "none",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: c,
                      x2: e + o - 1,
                      y2: c,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: c + 2,
                      x2: e + o - 1,
                      y2: c + 2,
                      fill: "none",
                      stroke: "#fff",
                    })
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  var r;
                  return n.isValidElement(t)
                    ? n.cloneElement(t, e)
                    : c()(t)
                    ? t(e)
                    : o.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var r = t.data,
                    n = t.width,
                    o = t.x,
                    a = t.travellerWidth,
                    i = t.updateId,
                    c = t.startIndex,
                    l = t.endIndex;
                  if (r !== e.prevData || i !== e.prevUpdateId)
                    return H(
                      {
                        prevData: r,
                        prevTravellerWidth: a,
                        prevUpdateId: i,
                        prevX: o,
                        prevWidth: n,
                      },
                      r && r.length
                        ? W({
                            data: r,
                            width: n,
                            x: o,
                            travellerWidth: a,
                            startIndex: c,
                            endIndex: l,
                          })
                        : { scale: null, scaleValues: null }
                    );
                  if (
                    e.scale &&
                    (n !== e.prevWidth ||
                      o !== e.prevX ||
                      a !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + n - a]);
                    var u = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: r,
                      prevTravellerWidth: a,
                      prevUpdateId: i,
                      prevX: o,
                      prevWidth: n,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: u,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var r = t.length, n = 0, o = r - 1; o - n > 1; ) {
                    var a = Math.floor((n + o) / 2);
                    t[a] > e ? (o = a) : (n = a);
                  }
                  return e >= t[o] ? o : n;
                },
              },
            ]),
            e && V(o.prototype, e),
            r && V(o, r),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        })(n.PureComponent);
      z(q, "displayName", "Brush"),
        z(q, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var X = r(46605),
        K = r(83197),
        Y = r(60379),
        G = function (t, e) {
          var r = t.alwaysShow,
            n = t.ifOverflow;
          return r && (n = "extendDomain"), n === e;
        },
        J = r(5248),
        Q = r(675);
      function tt() {
        return (tt = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function te(t) {
        return (te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tr(Object(r), !0).forEach(function (e) {
                tc(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function to() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (to = function () {
          return !!t;
        })();
      }
      function ta(t) {
        return (ta = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function ti(t, e) {
        return (ti = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tc(t, e, r) {
        return (
          (e = tl(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tl(t) {
        var e = (function (t, e) {
          if ("object" != te(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != te(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == te(e) ? e : e + "";
      }
      var tu = function (t) {
          var e = t.x,
            r = t.y,
            n = t.xAxis,
            o = t.yAxis,
            a = (0, J.P2)({ x: n.scale, y: o.scale }),
            i = a.apply({ x: e, y: r }, { bandAware: !0 });
          return G(t, "discard") && !a.isInRange(i) ? null : i;
        },
        ts = (function (t) {
          var e;
          function r() {
            var t, e;
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            return (
              (t = r),
              (e = arguments),
              (t = ta(t)),
              (function (t, e) {
                if (e && ("object" === te(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                to()
                  ? Reflect.construct(t, e || [], ta(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (r.prototype = Object.create(t && t.prototype, {
              constructor: { value: r, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            t && ti(r, t),
            (e = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    o = t.y,
                    a = t.r,
                    i = t.alwaysShow,
                    c = t.clipPathId,
                    l = (0, M.vh)(e),
                    u = (0, M.vh)(o);
                  if (
                    ((0, Q.R)(
                      void 0 === i,
                      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                    ),
                    !l || !u)
                  )
                    return null;
                  var s = tu(this.props);
                  if (!s) return null;
                  var f = s.x,
                    p = s.y,
                    h = this.props,
                    d = h.shape,
                    y = h.className,
                    m = tn(
                      tn(
                        {
                          clipPath: G(this.props, "hidden")
                            ? "url(#".concat(c, ")")
                            : void 0,
                        },
                        (0, j.J9)(this.props, !0)
                      ),
                      {},
                      { cx: f, cy: p }
                    );
                  return n.createElement(
                    g.W,
                    { className: (0, v.A)("recharts-reference-dot", y) },
                    r.renderDot(d, m),
                    Y.J.renderCallByParent(this.props, {
                      x: f - a,
                      y: p - a,
                      width: 2 * a,
                      height: 2 * a,
                    })
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, tl(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.Component);
      tc(ts, "displayName", "ReferenceDot"),
        tc(ts, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#fff",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
        }),
        tc(ts, "renderDot", function (t, e) {
          var r;
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : n.createElement(
                w.c,
                tt({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                })
              );
        });
      var tf = r(71571),
        tp = r.n(tf),
        th = r(50091);
      function td(t) {
        return (td =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ty() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (ty = function () {
          return !!t;
        })();
      }
      function tv(t) {
        return (tv = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tm(t, e) {
        return (tm = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tb(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tg(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tb(Object(r), !0).forEach(function (e) {
                tx(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tb(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function tx(t, e, r) {
        return (
          (e = tO(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tO(t) {
        var e = (function (t, e) {
          if ("object" != td(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != td(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == td(e) ? e : e + "";
      }
      function tw(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function tA() {
        return (tA = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var tj = function (t, e) {
          var r;
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : n.createElement(
                "line",
                tA({}, e, { className: "recharts-reference-line-line" })
              );
        },
        tE = function (t, e, r, n, o, a, i, c, l) {
          var u = o.x,
            s = o.y,
            f = o.width,
            p = o.height;
          if (r) {
            var h = l.y,
              d = t.y.apply(h, { position: a });
            if (G(l, "discard") && !t.y.isInRange(d)) return null;
            var y = [
              { x: u + f, y: d },
              { x: u, y: d },
            ];
            return "left" === c ? y.reverse() : y;
          }
          if (e) {
            var v = l.x,
              m = t.x.apply(v, { position: a });
            if (G(l, "discard") && !t.x.isInRange(m)) return null;
            var b = [
              { x: m, y: s + p },
              { x: m, y: s },
            ];
            return "top" === i ? b.reverse() : b;
          }
          if (n) {
            var g = l.segment.map(function (e) {
              return t.apply(e, { position: a });
            });
            return G(l, "discard") &&
              tp()(g, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : g;
          }
          return null;
        };
      function tS(t) {
        var e = t.x,
          r = t.y,
          o = t.segment,
          a = t.xAxisId,
          i = t.yAxisId,
          c = t.shape,
          l = t.className,
          u = t.alwaysShow,
          s = (0, th.Yp)(),
          f = (0, th.AF)(a),
          p = (0, th.Nk)(i),
          h = (0, th.sk)();
        if (!s || !h) return null;
        (0, Q.R)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var d = tE(
          (0, J.P2)({ x: f.scale, y: p.scale }),
          (0, M.vh)(e),
          (0, M.vh)(r),
          o && 2 === o.length,
          h,
          t.position,
          f.orientation,
          p.orientation,
          t
        );
        if (!d) return null;
        var y =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(d) ||
            (function (t, e) {
              var r =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != r) {
                var n,
                  o,
                  a,
                  i,
                  c = [],
                  l = !0,
                  u = !1;
                try {
                  (a = (r = r.call(t)).next), !1;
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    l = !0
                  );
                } catch (t) {
                  (u = !0), (o = t);
                } finally {
                  try {
                    if (
                      !l &&
                      null != r.return &&
                      ((i = r.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return c;
              }
            })(d, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return tw(t, 2);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(t);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return tw(t, e);
              }
            })(d, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          m = y[0],
          b = m.x,
          x = m.y,
          O = y[1],
          w = O.x,
          A = O.y,
          E = tg(
            tg(
              { clipPath: G(t, "hidden") ? "url(#".concat(s, ")") : void 0 },
              (0, j.J9)(t, !0)
            ),
            {},
            { x1: b, y1: x, x2: w, y2: A }
          );
        return n.createElement(
          g.W,
          { className: (0, v.A)("recharts-reference-line", l) },
          tj(c, E),
          Y.J.renderCallByParent(t, (0, J.vh)({ x1: b, y1: x, x2: w, y2: A }))
        );
      }
      var tP = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = tv(t)),
            (function (t, e) {
              if (e && ("object" === td(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              ty()
                ? Reflect.construct(t, e || [], tv(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && tm(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                return n.createElement(tS, this.props);
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, tO(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.Component);
      function tM() {
        return (tM = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tk(t) {
        return (tk =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function t_(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tT(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t_(Object(r), !0).forEach(function (e) {
                tD(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : t_(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      tx(tP, "displayName", "ReferenceLine"),
        tx(tP, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          fill: "none",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
          position: "middle",
        });
      function tC() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (tC = function () {
          return !!t;
        })();
      }
      function tI(t) {
        return (tI = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tZ(t, e) {
        return (tZ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tD(t, e, r) {
        return (
          (e = tN(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tN(t) {
        var e = (function (t, e) {
          if ("object" != tk(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tk(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tk(e) ? e : e + "";
      }
      var tL = function (t, e, r, n, o) {
          var a = o.x1,
            i = o.x2,
            c = o.y1,
            l = o.y2,
            u = o.xAxis,
            s = o.yAxis;
          if (!u || !s) return null;
          var f = (0, J.P2)({ x: u.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(a, { position: "start" }) : f.x.rangeMin,
              y: r ? f.y.apply(c, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(i, { position: "end" }) : f.x.rangeMax,
              y: n ? f.y.apply(l, { position: "end" }) : f.y.rangeMax,
            };
          return !G(o, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, J.sl)(p, h)
            : null;
        },
        tH = (function (t) {
          var e;
          function r() {
            var t, e;
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            return (
              (t = r),
              (e = arguments),
              (t = tI(t)),
              (function (t, e) {
                if (e && ("object" === tk(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                tC()
                  ? Reflect.construct(t, e || [], tI(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (r.prototype = Object.create(t && t.prototype, {
              constructor: { value: r, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            t && tZ(r, t),
            (e = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.x1,
                    o = t.x2,
                    a = t.y1,
                    i = t.y2,
                    c = t.className,
                    l = t.alwaysShow,
                    u = t.clipPathId;
                  (0, Q.R)(
                    void 0 === l,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                  );
                  var s = (0, M.vh)(e),
                    f = (0, M.vh)(o),
                    p = (0, M.vh)(a),
                    h = (0, M.vh)(i),
                    d = this.props.shape;
                  if (!s && !f && !p && !h && !d) return null;
                  var y = tL(s, f, p, h, this.props);
                  if (!y && !d) return null;
                  var m = G(this.props, "hidden")
                    ? "url(#".concat(u, ")")
                    : void 0;
                  return n.createElement(
                    g.W,
                    { className: (0, v.A)("recharts-reference-area", c) },
                    r.renderRect(
                      d,
                      tT(tT({ clipPath: m }, (0, j.J9)(this.props, !0)), y)
                    ),
                    Y.J.renderCallByParent(this.props, y)
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, tN(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.Component);
      function tV(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tR(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tR(t, void 0);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(t);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return tR(t, e);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tR(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      tD(tH, "displayName", "ReferenceArea"),
        tD(tH, "defaultProps", {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#ccc",
          fillOpacity: 0.5,
          stroke: "none",
          strokeWidth: 1,
        }),
        tD(tH, "renderRect", function (t, e) {
          var r;
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : n.createElement(
                A.M,
                tM({}, e, { className: "recharts-reference-area-rect" })
              );
        });
      var tB = function (t, e, r, n, o) {
          var a = (0, j.aS)(t, tP),
            i = (0, j.aS)(t, ts),
            c = [].concat(tV(a), tV(i)),
            l = (0, j.aS)(t, tH),
            u = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (c.length &&
              (f = c.reduce(function (t, e) {
                if (
                  e.props[u] === r &&
                  G(e.props, "extendDomain") &&
                  (0, M.Et)(e.props[s])
                ) {
                  var n = e.props[s];
                  return [Math.min(t[0], n), Math.max(t[1], n)];
                }
                return t;
              }, f)),
            l.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = l.reduce(function (t, e) {
              if (
                e.props[u] === r &&
                G(e.props, "extendDomain") &&
                (0, M.Et)(e.props[p]) &&
                (0, M.Et)(e.props[h])
              ) {
                var n = e.props[p],
                  o = e.props[h];
                return [Math.min(t[0], n, o), Math.max(t[1], n, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, M.Et)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        tF = r(25641),
        tz = r(15232),
        tU = r(82661),
        tW = new (r.n(tU)())(),
        t$ = "recharts.syncMouseEvents",
        tq = r(43597);
      function tX(t) {
        return (tX =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tK(t, e, r) {
        return (
          (e = tY(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function tY(t) {
        var e = (function (t, e) {
          if ("object" != tX(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tX(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tX(e) ? e : e + "";
      }
      var tG = (function () {
          var t, e;
          return (
            (t = function t() {
              if (!(this instanceof t))
                throw TypeError("Cannot call a class as a function");
              tK(this, "activeIndex", 0),
                tK(this, "coordinateList", []),
                tK(this, "layout", "horizontal");
            }),
            (e = [
              {
                key: "setDetails",
                value: function (t) {
                  var e,
                    r = t.coordinateList,
                    n = void 0 === r ? null : r,
                    o = t.container,
                    a = void 0 === o ? null : o,
                    i = t.layout,
                    c = void 0 === i ? null : i,
                    l = t.offset,
                    u = void 0 === l ? null : l,
                    s = t.mouseHandlerCallback,
                    f = void 0 === s ? null : s;
                  (this.coordinateList =
                    null != (e = null != n ? n : this.coordinateList) ? e : []),
                    (this.container = null != a ? a : this.container),
                    (this.layout = null != c ? c : this.layout),
                    (this.offset = null != u ? u : this.offset),
                    (this.mouseHandlerCallback =
                      null != f ? f : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "setIndex",
                value: function (t) {
                  this.activeIndex = t;
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var t,
                      e,
                      r = this.container.getBoundingClientRect(),
                      n = r.x,
                      o = r.y,
                      a = r.height,
                      i = this.coordinateList[this.activeIndex].coordinate,
                      c = (null == (t = window) ? void 0 : t.scrollX) || 0,
                      l = (null == (e = window) ? void 0 : e.scrollY) || 0,
                      u = o + this.offset.top + a / 2 + l;
                    this.mouseHandlerCallback({ pageX: n + i + c, pageY: u });
                  }
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, tY(n.key), n);
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(),
        tJ = r(67790),
        tQ = r(70688);
      function t0(t) {
        return (t0 =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var t1 = ["x", "y", "top", "left", "width", "height", "className"];
      function t2() {
        return (t2 = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function t8(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var t4 = function (t) {
        var e = t.x,
          r = void 0 === e ? 0 : e,
          o = t.y,
          a = void 0 === o ? 0 : o,
          i = t.top,
          c = void 0 === i ? 0 : i,
          l = t.left,
          u = void 0 === l ? 0 : l,
          s = t.width,
          f = void 0 === s ? 0 : s,
          p = t.height,
          h = void 0 === p ? 0 : p,
          d = t.className,
          y = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? t8(Object(r), !0).forEach(function (e) {
                    var n, o, a;
                    (n = t),
                      (o = e),
                      (a = r[e]),
                      (o = (function (t) {
                        var e = (function (t, e) {
                          if ("object" != t0(t) || !t) return t;
                          var r = t[Symbol.toPrimitive];
                          if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != t0(n)) return n;
                            throw TypeError(
                              "@@toPrimitive must return a primitive value."
                            );
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == t0(e) ? e : e + "";
                      })(o)) in n
                        ? Object.defineProperty(n, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[o] = a);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : t8(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
            }
            return t;
          })(
            { x: r, y: a, top: c, left: u, width: f, height: h },
            (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = (function (t, e) {
                  if (null == t) return {};
                  var r = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      r[n] = t[n];
                    }
                  return r;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(e.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, r) &&
                      (o[r] = t[r]);
              }
              return o;
            })(t, t1)
          );
        return (0, M.Et)(r) &&
          (0, M.Et)(a) &&
          (0, M.Et)(f) &&
          (0, M.Et)(h) &&
          (0, M.Et)(c) &&
          (0, M.Et)(u)
          ? n.createElement(
              "path",
              t2({}, (0, j.J9)(y, !0), {
                className: (0, v.A)("recharts-cross", d),
                d: "M"
                  .concat(r, ",")
                  .concat(c, "v")
                  .concat(h, "M")
                  .concat(u, ",")
                  .concat(a, "h")
                  .concat(f),
              })
            )
          : null;
      };
      function t6(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.startAngle,
          a = t.endAngle;
        return {
          points: [(0, tF.IZ)(e, r, n, o), (0, tF.IZ)(e, r, n, a)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: o,
          endAngle: a,
        };
      }
      var t3 = r(77283);
      function t5(t) {
        return (t5 =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function t7(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function t9(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t7(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != t5(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != t5(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == t5(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : t7(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function et(t) {
        var e,
          r,
          o,
          a,
          i = t.element,
          c = t.tooltipEventType,
          l = t.isActive,
          u = t.activeCoordinate,
          s = t.activePayload,
          f = t.offset,
          p = t.activeTooltipIndex,
          h = t.tooltipAxisBandSize,
          d = t.layout,
          y = t.chartName,
          m =
            null != (r = i.props.cursor)
              ? r
              : null == (o = i.type.defaultProps)
              ? void 0
              : o.cursor;
        if (!i || !m || !l || !u || ("ScatterChart" !== y && "axis" !== c))
          return null;
        var b = tQ.I;
        if ("ScatterChart" === y) (a = u), (b = t4);
        else if ("BarChart" === y)
          (e = h / 2),
            (a = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === d ? u.x - e : f.left + 0.5,
              y: "horizontal" === d ? f.top + 0.5 : u.y - e,
              width: "horizontal" === d ? h : f.width - 1,
              height: "horizontal" === d ? f.height - 1 : h,
            }),
            (b = A.M);
        else if ("radial" === d) {
          var g = t6(u),
            x = g.cx,
            O = g.cy,
            w = g.radius;
          (a = {
            cx: x,
            cy: O,
            startAngle: g.startAngle,
            endAngle: g.endAngle,
            innerRadius: w,
            outerRadius: w,
          }),
            (b = t3.h);
        } else
          (a = {
            points: (function (t, e, r) {
              var n, o, a, i;
              if ("horizontal" === t)
                (a = n = e.x), (o = r.top), (i = r.top + r.height);
              else if ("vertical" === t)
                (i = o = e.y), (n = r.left), (a = r.left + r.width);
              else if (null != e.cx && null != e.cy)
                if ("centric" !== t) return t6(e);
                else {
                  var c = e.cx,
                    l = e.cy,
                    u = e.innerRadius,
                    s = e.outerRadius,
                    f = e.angle,
                    p = (0, tF.IZ)(c, l, u, f),
                    h = (0, tF.IZ)(c, l, s, f);
                  (n = p.x), (o = p.y), (a = h.x), (i = h.y);
                }
              return [
                { x: n, y: o },
                { x: a, y: i },
              ];
            })(d, u, f),
          }),
            (b = tQ.I);
        var E = t9(
          t9(
            t9(t9({ stroke: "#ccc", pointerEvents: "none" }, f), a),
            (0, j.J9)(m, !1)
          ),
          {},
          {
            payload: s,
            payloadIndex: p,
            className: (0, v.A)("recharts-tooltip-cursor", m.className),
          }
        );
        return (0, n.isValidElement)(m)
          ? (0, n.cloneElement)(m, E)
          : (0, n.createElement)(b, E);
      }
      var ee = ["item"],
        er = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function en(t) {
        return (en =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function eo() {
        return (eo = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function ea(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                a,
                i,
                c = [],
                l = !0,
                u = !1;
              try {
                if (((a = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (n = a.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    l = !0
                  );
              } catch (t) {
                (u = !0), (o = t);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((i = r.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          ef(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ei(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(e.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, r) &&
                (o[r] = t[r]);
        }
        return o;
      }
      function ec() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (ec = function () {
          return !!t;
        })();
      }
      function el(t) {
        return (el = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function eu(t, e) {
        return (eu = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function es(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ep(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          ef(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ef(t, e) {
        if (t) {
          if ("string" == typeof t) return ep(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return ep(t, e);
        }
      }
      function ep(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function eh(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ed(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? eh(Object(r), !0).forEach(function (e) {
                ey(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : eh(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ey(t, e, r) {
        return (
          (e = ev(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function ev(t) {
        var e = (function (t, e) {
          if ("object" != en(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != en(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == en(e) ? e : e + "";
      }
      var em = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        eb = { width: "100%", height: "100%" },
        eg = { x: 0, y: 0 };
      function ex(t) {
        return t;
      }
      var eO = function (t, e, r, n) {
          var o = e.find(function (t) {
            return t && t.index === r;
          });
          if (o) {
            if ("horizontal" === t) return { x: o.coordinate, y: n.y };
            if ("vertical" === t) return { x: n.x, y: o.coordinate };
            if ("centric" === t) {
              var a = o.coordinate,
                i = n.radius;
              return ed(
                ed(ed({}, n), (0, tF.IZ)(n.cx, n.cy, i, a)),
                {},
                { angle: a, radius: i }
              );
            }
            var c = o.coordinate,
              l = n.angle;
            return ed(
              ed(ed({}, n), (0, tF.IZ)(n.cx, n.cy, c, l)),
              {},
              { angle: l, radius: c }
            );
          }
          return eg;
        },
        ew = function (t, e) {
          var r = e.graphicalItems,
            n = e.dataStartIndex,
            o = e.dataEndIndex,
            a = (null != r ? r : []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(es(t), es(r)) : t;
            }, []);
          return a.length > 0
            ? a
            : t && t.length && (0, M.Et)(n) && (0, M.Et)(o)
            ? t.slice(n, o + 1)
            : [];
        };
      function eA(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var ej = function (t, e, r, n) {
          var o = t.graphicalItems,
            a = t.tooltipAxis,
            i = ew(e, t);
          return r < 0 || !o || !o.length || r >= i.length
            ? null
            : o.reduce(function (o, c) {
                var l,
                  u,
                  s = null != (l = c.props.data) ? l : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    t.dataEndIndex - t.dataStartIndex >= r &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  a.dataKey && !a.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? i : s;
                  u = (0, M.eP)(f, a.dataKey, n);
                } else u = (s && s[r]) || i[r];
                return u ? [].concat(es(o), [(0, P.zb)(c, u)]) : o;
              }, []);
        },
        eE = function (t, e, r, n) {
          var o = n || { x: t.chartX, y: t.chartY },
            a =
              "horizontal" === r
                ? o.x
                : "vertical" === r
                ? o.y
                : "centric" === r
                ? o.angle
                : o.radius,
            i = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            l = t.tooltipTicks,
            u = (0, P.gH)(a, i, l, c);
          if (u >= 0 && l) {
            var s = l[u] && l[u].value,
              f = ej(t, e, u, s),
              p = eO(r, i, u, o);
            return {
              activeTooltipIndex: u,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        eS = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            o = e.axisType,
            i = e.axisIdKey,
            c = e.stackGroups,
            l = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, P._L)(f, o);
          return r.reduce(function (e, r) {
            var y =
                void 0 !== r.type.defaultProps
                  ? ed(ed({}, r.type.defaultProps), r.props)
                  : r.props,
              v = y.type,
              m = y.dataKey,
              b = y.allowDataOverflow,
              g = y.allowDuplicatedCategory,
              x = y.scale,
              O = y.ticks,
              w = y.includeHidden,
              A = y[i];
            if (e[A]) return e;
            var j = ew(t.data, {
                graphicalItems: n.filter(function (t) {
                  var e;
                  return (
                    (i in t.props
                      ? t.props[i]
                      : null == (e = t.type.defaultProps)
                      ? void 0
                      : e[i]) === A
                  );
                }),
                dataStartIndex: l,
                dataEndIndex: s,
              }),
              E = j.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  o = null == t ? void 0 : t[1];
                if (n && o && (0, M.Et)(n) && (0, M.Et)(o)) return !0;
              }
              return !1;
            })(y.domain, b, v) &&
              ((_ = (0, P.AQ)(y.domain, null, b)),
              d &&
                ("number" === v || "auto" !== x) &&
                (C = (0, P.Ay)(j, m, "category")));
            var S = eA(v);
            if (!_ || 0 === _.length) {
              var k,
                _,
                T,
                C,
                I,
                Z = null != (I = y.domain) ? I : S;
              if (m) {
                if (((_ = (0, P.Ay)(j, m, v)), "category" === v && d)) {
                  var D = (0, M.CG)(_);
                  g && D
                    ? ((T = _), (_ = u()(0, E)))
                    : g ||
                      (_ = (0, P.KC)(Z, _, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(es(t), [e]);
                      }, []));
                } else if ("category" === v)
                  _ = g
                    ? _.filter(function (t) {
                        return "" !== t && !a()(t);
                      })
                    : (0, P.KC)(Z, _, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || a()(e)
                          ? t
                          : [].concat(es(t), [e]);
                      }, []);
                else if ("number" === v) {
                  var N = (0, P.A1)(
                    j,
                    n.filter(function (t) {
                      var e,
                        r,
                        n =
                          i in t.props
                            ? t.props[i]
                            : null == (e = t.type.defaultProps)
                            ? void 0
                            : e[i],
                        o =
                          "hide" in t.props
                            ? t.props.hide
                            : null == (r = t.type.defaultProps)
                            ? void 0
                            : r.hide;
                      return n === A && (w || !o);
                    }),
                    m,
                    o,
                    f
                  );
                  N && (_ = N);
                }
                d &&
                  ("number" === v || "auto" !== x) &&
                  (C = (0, P.Ay)(j, m, "category"));
              } else
                _ = d
                  ? u()(0, E)
                  : c && c[A] && c[A].hasStack && "number" === v
                  ? "expand" === h
                    ? [0, 1]
                    : (0, P.Mk)(c[A].stackGroups, l, s)
                  : (0, P.vf)(
                      j,
                      n.filter(function (t) {
                        var e =
                            i in t.props ? t.props[i] : t.type.defaultProps[i],
                          r =
                            "hide" in t.props
                              ? t.props.hide
                              : t.type.defaultProps.hide;
                        return e === A && (w || !r);
                      }),
                      v,
                      f,
                      !0
                    );
              "number" === v
                ? ((_ = tB(p, _, A, o, O)), Z && (_ = (0, P.AQ)(Z, _, b)))
                : "category" === v &&
                  Z &&
                  _.every(function (t) {
                    return Z.indexOf(t) >= 0;
                  }) &&
                  (_ = Z);
            }
            return ed(
              ed({}, e),
              {},
              ey(
                {},
                A,
                ed(
                  ed({}, y),
                  {},
                  {
                    axisType: o,
                    domain: _,
                    categoricalDomain: C,
                    duplicateDomain: T,
                    originalDomain: null != (k = y.domain) ? k : S,
                    isCategorical: d,
                    layout: f,
                  }
                )
              )
            );
          }, {});
        },
        eP = function (t, e) {
          var r = e.graphicalItems,
            n = e.Axis,
            o = e.axisType,
            a = e.axisIdKey,
            i = e.stackGroups,
            c = e.dataStartIndex,
            l = e.dataEndIndex,
            s = t.layout,
            p = t.children,
            h = ew(t.data, {
              graphicalItems: r,
              dataStartIndex: c,
              dataEndIndex: l,
            }),
            d = h.length,
            y = (0, P._L)(s, o),
            v = -1;
          return r.reduce(function (t, e) {
            var m,
              b = (
                void 0 !== e.type.defaultProps
                  ? ed(ed({}, e.type.defaultProps), e.props)
                  : e.props
              )[a],
              g = eA("number");
            return t[b]
              ? t
              : (v++,
                (m = y
                  ? u()(0, d)
                  : i && i[b] && i[b].hasStack
                  ? tB(p, (m = (0, P.Mk)(i[b].stackGroups, c, l)), b, o)
                  : tB(
                      p,
                      (m = (0, P.AQ)(
                        g,
                        (0, P.vf)(
                          h,
                          r.filter(function (t) {
                            var e,
                              r,
                              n =
                                a in t.props
                                  ? t.props[a]
                                  : null == (e = t.type.defaultProps)
                                  ? void 0
                                  : e[a],
                              o =
                                "hide" in t.props
                                  ? t.props.hide
                                  : null == (r = t.type.defaultProps)
                                  ? void 0
                                  : r.hide;
                            return n === b && !o;
                          }),
                          "number",
                          s
                        ),
                        n.defaultProps.allowDataOverflow
                      )),
                      b,
                      o
                    )),
                ed(
                  ed({}, t),
                  {},
                  ey(
                    {},
                    b,
                    ed(
                      ed({ axisType: o }, n.defaultProps),
                      {},
                      {
                        hide: !0,
                        orientation: f()(
                          em,
                          "".concat(o, ".").concat(v % 2),
                          null
                        ),
                        domain: m,
                        originalDomain: g,
                        isCategorical: y,
                        layout: s,
                      }
                    )
                  )
                ));
          }, {});
        },
        eM = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            a = e.graphicalItems,
            i = e.stackGroups,
            c = e.dataStartIndex,
            l = e.dataEndIndex,
            u = t.children,
            s = "".concat(n, "Id"),
            f = (0, j.aS)(u, o),
            p = {};
          return (
            f && f.length
              ? (p = eS(t, {
                  axes: f,
                  graphicalItems: a,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: i,
                  dataStartIndex: c,
                  dataEndIndex: l,
                }))
              : a &&
                a.length &&
                (p = eP(t, {
                  Axis: o,
                  graphicalItems: a,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: i,
                  dataStartIndex: c,
                  dataEndIndex: l,
                })),
            p
          );
        },
        ek = function (t) {
          var e = (0, M.lX)(t),
            r = (0, P.Rh)(e, !1, !0);
          return {
            tooltipTicks: r,
            orderedTooltipTicks: h()(r, function (t) {
              return t.coordinate;
            }),
            tooltipAxis: e,
            tooltipAxisBandSize: (0, P.Hj)(e, r),
          };
        },
        e_ = function (t) {
          var e = t.children,
            r = t.defaultShowTooltip,
            n = (0, j.BU)(e, q),
            o = 0,
            a = 0;
          return (
            t.data && 0 !== t.data.length && (a = t.data.length - 1),
            n &&
              n.props &&
              (n.props.startIndex >= 0 && (o = n.props.startIndex),
              n.props.endIndex >= 0 && (a = n.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: o,
              dataEndIndex: a,
              activeTooltipIndex: -1,
              isTooltipActive: !!r,
            }
          );
        },
        eT = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        eC = function (t, e) {
          var r = t.props,
            n = t.graphicalItems,
            o = t.xAxisMap,
            a = void 0 === o ? {} : o,
            i = t.yAxisMap,
            c = void 0 === i ? {} : i,
            l = r.width,
            u = r.height,
            s = r.children,
            p = r.margin || {},
            h = (0, j.BU)(s, q),
            d = (0, j.BU)(s, O.s),
            y = Object.keys(c).reduce(
              function (t, e) {
                var r = c[e],
                  n = r.orientation;
                return r.mirror || r.hide
                  ? t
                  : ed(ed({}, t), {}, ey({}, n, t[n] + r.width));
              },
              { left: p.left || 0, right: p.right || 0 }
            ),
            v = Object.keys(a).reduce(
              function (t, e) {
                var r = a[e],
                  n = r.orientation;
                return r.mirror || r.hide
                  ? t
                  : ed(
                      ed({}, t),
                      {},
                      ey({}, n, f()(t, "".concat(n)) + r.height)
                    );
              },
              { top: p.top || 0, bottom: p.bottom || 0 }
            ),
            m = ed(ed({}, v), y),
            b = m.bottom;
          h && (m.bottom += h.props.height || q.defaultProps.height),
            d && e && (m = (0, P.s0)(m, n, r, e));
          var g = l - m.left - m.right,
            x = u - m.top - m.bottom;
          return ed(
            ed({ brushBottom: b }, m),
            {},
            { width: Math.max(g, 0), height: Math.max(x, 0) }
          );
        },
        eI = function (t) {
          var e = t.chartName,
            r = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            i = void 0 === o ? "axis" : o,
            l = t.validateTooltipEventTypes,
            u = void 0 === l ? ["axis"] : l,
            s = t.axisComponents,
            p = t.legendContent,
            h = t.formatAxisMap,
            d = t.defaultProps,
            O = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                o = e.offset,
                i = e.updateId,
                c = e.dataStartIndex,
                l = e.dataEndIndex,
                u = t.barSize,
                f = t.layout,
                p = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = eT(f),
                v = y.numericAxisName,
                b = y.cateAxisName,
                g =
                  !!r &&
                  !!r.length &&
                  r.some(function (t) {
                    var e = (0, j.Mn)(t && t.type);
                    return e && e.indexOf("Bar") >= 0;
                  }),
                x = [];
              return (
                r.forEach(function (r, y) {
                  var O = ew(t.data, {
                      graphicalItems: [r],
                      dataStartIndex: c,
                      dataEndIndex: l,
                    }),
                    w =
                      void 0 !== r.type.defaultProps
                        ? ed(ed({}, r.type.defaultProps), r.props)
                        : r.props,
                    A = w.dataKey,
                    E = w.maxBarSize,
                    S = w["".concat(v, "Id")],
                    M = w["".concat(b, "Id")],
                    k = s.reduce(function (t, r) {
                      var n = e["".concat(r.axisType, "Map")],
                        o = w["".concat(r.axisType, "Id")];
                      (n && n[o]) || "zAxis" === r.axisType || (0, m.A)(!1);
                      var a = n[o];
                      return ed(
                        ed({}, t),
                        {},
                        ey(
                          ey({}, r.axisType, a),
                          "".concat(r.axisType, "Ticks"),
                          (0, P.Rh)(a)
                        )
                      );
                    }, {}),
                    _ = k[b],
                    T = k["".concat(b, "Ticks")],
                    C =
                      n &&
                      n[S] &&
                      n[S].hasStack &&
                      (0, P.kA)(r, n[S].stackGroups),
                    I = (0, j.Mn)(r.type).indexOf("Bar") >= 0,
                    Z = (0, P.Hj)(_, T),
                    D = [],
                    N =
                      g &&
                      (0, P.tA)({
                        barSize: u,
                        stackGroups: n,
                        totalSize:
                          "xAxis" === b
                            ? k[b].width
                            : "yAxis" === b
                            ? k[b].height
                            : void 0,
                      });
                  if (I) {
                    var L,
                      H,
                      V = a()(E) ? d : E,
                      R =
                        null != (L = null != (H = (0, P.Hj)(_, T, !0)) ? H : V)
                          ? L
                          : 0;
                    (D = (0, P.BX)({
                      barGap: p,
                      barCategoryGap: h,
                      bandSize: R !== Z ? R : Z,
                      sizeList: N[M],
                      maxBarSize: V,
                    })),
                      R !== Z &&
                        (D = D.map(function (t) {
                          return ed(
                            ed({}, t),
                            {},
                            {
                              position: ed(
                                ed({}, t.position),
                                {},
                                { offset: t.position.offset - R / 2 }
                              ),
                            }
                          );
                        }));
                  }
                  var B = r && r.type && r.type.getComposedData;
                  B &&
                    x.push({
                      props: ed(
                        ed(
                          {},
                          B(
                            ed(
                              ed({}, k),
                              {},
                              {
                                displayedData: O,
                                props: t,
                                dataKey: A,
                                item: r,
                                bandSize: Z,
                                barPosition: D,
                                offset: o,
                                stackedData: C,
                                layout: f,
                                dataStartIndex: c,
                                dataEndIndex: l,
                              }
                            )
                          )
                        ),
                        {},
                        ey(
                          ey(
                            ey({ key: r.key || "item-".concat(y) }, v, k[v]),
                            b,
                            k[b]
                          ),
                          "animationId",
                          i
                        )
                      ),
                      childIndex: (0, j.AW)(r, t.children),
                      item: r,
                    });
                }),
                x
              );
            },
            E = function (t, n) {
              var o = t.props,
                a = t.dataStartIndex,
                i = t.dataEndIndex,
                c = t.updateId;
              if (!(0, j.Me)({ props: o })) return null;
              var l = o.children,
                u = o.layout,
                f = o.stackOffset,
                p = o.data,
                d = o.reverseStackOrder,
                y = eT(u),
                v = y.numericAxisName,
                m = y.cateAxisName,
                b = (0, j.aS)(l, r),
                g = (0, P.Mn)(
                  p,
                  b,
                  "".concat(v, "Id"),
                  "".concat(m, "Id"),
                  f,
                  d
                ),
                x = s.reduce(function (t, e) {
                  var r = "".concat(e.axisType, "Map");
                  return ed(
                    ed({}, t),
                    {},
                    ey(
                      {},
                      r,
                      eM(
                        o,
                        ed(
                          ed({}, e),
                          {},
                          {
                            graphicalItems: b,
                            stackGroups: e.axisType === v && g,
                            dataStartIndex: a,
                            dataEndIndex: i,
                          }
                        )
                      )
                    )
                  );
                }, {}),
                w = eC(
                  ed(ed({}, x), {}, { props: o, graphicalItems: b }),
                  null == n ? void 0 : n.legendBBox
                );
              Object.keys(x).forEach(function (t) {
                x[t] = h(o, x[t], w, t.replace("Map", ""), e);
              });
              var A = ek(x["".concat(m, "Map")]),
                E = O(
                  o,
                  ed(
                    ed({}, x),
                    {},
                    {
                      dataStartIndex: a,
                      dataEndIndex: i,
                      updateId: c,
                      graphicalItems: b,
                      stackGroups: g,
                      offset: w,
                    }
                  )
                );
              return ed(
                ed(
                  {
                    formattedGraphicalItems: E,
                    graphicalItems: b,
                    offset: w,
                    stackGroups: g,
                  },
                  A
                ),
                x
              );
            },
            S = (function (t) {
              var r;
              function o(t) {
                var r, i, l, u, s;
                if (!(this instanceof o))
                  throw TypeError("Cannot call a class as a function");
                return (
                  (u = o),
                  (s = [t]),
                  (u = el(u)),
                  ey(
                    (l = (function (t, e) {
                      if (e && ("object" === en(e) || "function" == typeof e))
                        return e;
                      if (void 0 !== e)
                        throw TypeError(
                          "Derived constructors may only return object or undefined"
                        );
                      var r = t;
                      if (void 0 === r)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return r;
                    })(
                      this,
                      ec()
                        ? Reflect.construct(u, s || [], el(this).constructor)
                        : u.apply(this, s)
                    )),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter")
                  ),
                  ey(l, "accessibilityManager", new tG()),
                  ey(l, "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = l.state,
                        r = e.dataStartIndex,
                        n = e.dataEndIndex,
                        o = e.updateId;
                      l.setState(
                        ed(
                          { legendBBox: t },
                          E(
                            {
                              props: l.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: o,
                            },
                            ed(ed({}, l.state), {}, { legendBBox: t })
                          )
                        )
                      );
                    }
                  }),
                  ey(l, "handleReceiveSyncEvent", function (t, e, r) {
                    l.props.syncId === t &&
                      (r !== l.eventEmitterSymbol ||
                        "function" == typeof l.props.syncMethod) &&
                      l.applySyncEvent(e);
                  }),
                  ey(l, "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      r = t.endIndex;
                    if (
                      e !== l.state.dataStartIndex ||
                      r !== l.state.dataEndIndex
                    ) {
                      var n = l.state.updateId;
                      l.setState(function () {
                        return ed(
                          { dataStartIndex: e, dataEndIndex: r },
                          E(
                            {
                              props: l.props,
                              dataStartIndex: e,
                              dataEndIndex: r,
                              updateId: n,
                            },
                            l.state
                          )
                        );
                      }),
                        l.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: r,
                        });
                    }
                  }),
                  ey(l, "handleMouseEnter", function (t) {
                    var e = l.getMouseInfo(t);
                    if (e) {
                      var r = ed(ed({}, e), {}, { isTooltipActive: !0 });
                      l.setState(r), l.triggerSyncEvent(r);
                      var n = l.props.onMouseEnter;
                      c()(n) && n(r, t);
                    }
                  }),
                  ey(l, "triggeredAfterMouseMove", function (t) {
                    var e = l.getMouseInfo(t),
                      r = e
                        ? ed(ed({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    l.setState(r), l.triggerSyncEvent(r);
                    var n = l.props.onMouseMove;
                    c()(n) && n(r, t);
                  }),
                  ey(l, "handleItemMouseEnter", function (t) {
                    l.setState(function () {
                      return {
                        isTooltipActive: !0,
                        activeItem: t,
                        activePayload: t.tooltipPayload,
                        activeCoordinate: t.tooltipPosition || {
                          x: t.cx,
                          y: t.cy,
                        },
                      };
                    });
                  }),
                  ey(l, "handleItemMouseLeave", function () {
                    l.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  ey(l, "handleMouseMove", function (t) {
                    t.persist(), l.throttleTriggeredAfterMouseMove(t);
                  }),
                  ey(l, "handleMouseLeave", function (t) {
                    l.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    l.setState(e), l.triggerSyncEvent(e);
                    var r = l.props.onMouseLeave;
                    c()(r) && r(e, t);
                  }),
                  ey(l, "handleOuterEvent", function (t) {
                    var e,
                      r,
                      n = (0, j.X_)(t),
                      o = f()(l.props, "".concat(n));
                    n &&
                      c()(o) &&
                      o(
                        null !=
                          (e = /.*touch.*/i.test(n)
                            ? l.getMouseInfo(t.changedTouches[0])
                            : l.getMouseInfo(t))
                          ? e
                          : {},
                        t
                      );
                  }),
                  ey(l, "handleClick", function (t) {
                    var e = l.getMouseInfo(t);
                    if (e) {
                      var r = ed(ed({}, e), {}, { isTooltipActive: !0 });
                      l.setState(r), l.triggerSyncEvent(r);
                      var n = l.props.onClick;
                      c()(n) && n(r, t);
                    }
                  }),
                  ey(l, "handleMouseDown", function (t) {
                    var e = l.props.onMouseDown;
                    c()(e) && e(l.getMouseInfo(t), t);
                  }),
                  ey(l, "handleMouseUp", function (t) {
                    var e = l.props.onMouseUp;
                    c()(e) && e(l.getMouseInfo(t), t);
                  }),
                  ey(l, "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      l.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  ey(l, "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      l.handleMouseDown(t.changedTouches[0]);
                  }),
                  ey(l, "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      l.handleMouseUp(t.changedTouches[0]);
                  }),
                  ey(l, "handleDoubleClick", function (t) {
                    var e = l.props.onDoubleClick;
                    c()(e) && e(l.getMouseInfo(t), t);
                  }),
                  ey(l, "handleContextMenu", function (t) {
                    var e = l.props.onContextMenu;
                    c()(e) && e(l.getMouseInfo(t), t);
                  }),
                  ey(l, "triggerSyncEvent", function (t) {
                    void 0 !== l.props.syncId &&
                      tW.emit(t$, l.props.syncId, t, l.eventEmitterSymbol);
                  }),
                  ey(l, "applySyncEvent", function (t) {
                    var e = l.props,
                      r = e.layout,
                      n = e.syncMethod,
                      o = l.state.updateId,
                      a = t.dataStartIndex,
                      i = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      l.setState(
                        ed(
                          { dataStartIndex: a, dataEndIndex: i },
                          E(
                            {
                              props: l.props,
                              dataStartIndex: a,
                              dataEndIndex: i,
                              updateId: o,
                            },
                            l.state
                          )
                        )
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var c = t.chartX,
                        u = t.chartY,
                        s = t.activeTooltipIndex,
                        f = l.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ("function" == typeof n) s = n(h, t);
                      else if ("value" === n) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = ed(ed({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, y.x + y.width),
                        m = Math.min(u, y.y + y.height),
                        b = h[s] && h[s].value,
                        g = ej(l.state, l.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : eg;
                      l.setState(
                        ed(
                          ed({}, t),
                          {},
                          {
                            activeLabel: b,
                            activeCoordinate: x,
                            activePayload: g,
                            activeTooltipIndex: s,
                          }
                        )
                      );
                    } else l.setState(t);
                  }),
                  ey(l, "renderCursor", function (t) {
                    var r,
                      o = l.state,
                      a = o.isTooltipActive,
                      i = o.activeCoordinate,
                      c = o.activePayload,
                      u = o.offset,
                      s = o.activeTooltipIndex,
                      f = o.tooltipAxisBandSize,
                      p = l.getTooltipEventType(),
                      h = null != (r = t.props.active) ? r : a,
                      d = l.props.layout,
                      y = t.key || "_recharts-cursor";
                    return n.createElement(et, {
                      key: y,
                      activeCoordinate: i,
                      activePayload: c,
                      activeTooltipIndex: s,
                      chartName: e,
                      element: t,
                      isActive: h,
                      layout: d,
                      offset: u,
                      tooltipAxisBandSize: f,
                      tooltipEventType: p,
                    });
                  }),
                  ey(l, "renderPolarAxis", function (t, e, r) {
                    var o = f()(t, "type.axisType"),
                      a = f()(l.state, "".concat(o, "Map")),
                      i = t.type.defaultProps,
                      c = void 0 !== i ? ed(ed({}, i), t.props) : t.props,
                      u = a && a[c["".concat(o, "Id")]];
                    return (0,
                    n.cloneElement)(t, ed(ed({}, u), {}, { className: (0, v.A)(o, u.className), key: t.key || "".concat(e, "-").concat(r), ticks: (0, P.Rh)(u, !0) }));
                  }),
                  ey(l, "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      o = e.polarAngles,
                      a = e.polarRadius,
                      i = l.state,
                      c = i.radiusAxisMap,
                      u = i.angleAxisMap,
                      s = (0, M.lX)(c),
                      f = (0, M.lX)(u),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, n.cloneElement)(t, {
                      polarAngles: Array.isArray(o)
                        ? o
                        : (0, P.Rh)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(a)
                        ? a
                        : (0, P.Rh)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || "polar-grid",
                      radialLines: r,
                    });
                  }),
                  ey(l, "renderLegend", function () {
                    var t = l.state.formattedGraphicalItems,
                      e = l.props,
                      r = e.children,
                      o = e.width,
                      a = e.height,
                      i = l.props.margin || {},
                      c = o - (i.left || 0) - (i.right || 0),
                      u = (0, K.g)({
                        children: r,
                        formattedGraphicalItems: t,
                        legendWidth: c,
                        legendContent: p,
                      });
                    if (!u) return null;
                    var s = u.item,
                      f = ei(u, ee);
                    return (0,
                    n.cloneElement)(s, ed(ed({}, f), {}, { chartWidth: o, chartHeight: a, margin: i, onBBoxUpdate: l.handleLegendBBoxUpdate }));
                  }),
                  ey(l, "renderTooltip", function () {
                    var t,
                      e = l.props,
                      r = e.children,
                      o = e.accessibilityLayer,
                      a = (0, j.BU)(r, x.m);
                    if (!a) return null;
                    var i = l.state,
                      c = i.isTooltipActive,
                      u = i.activeCoordinate,
                      s = i.activePayload,
                      f = i.activeLabel,
                      p = i.offset,
                      h = null != (t = a.props.active) ? t : c;
                    return (0,
                    n.cloneElement)(a, { viewBox: ed(ed({}, p), {}, { x: p.left, y: p.top }), active: h, label: f, payload: h ? s : [], coordinate: u, accessibilityLayer: o });
                  }),
                  ey(l, "renderBrush", function (t) {
                    var e = l.props,
                      r = e.margin,
                      o = e.data,
                      a = l.state,
                      i = a.offset,
                      c = a.dataStartIndex,
                      u = a.dataEndIndex,
                      s = a.updateId;
                    return (0,
                    n.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: (0, P.HQ)(l.handleBrushChange, t.props.onChange), data: o, x: (0, M.Et)(t.props.x) ? t.props.x : i.left, y: (0, M.Et)(t.props.y) ? t.props.y : i.top + i.height + i.brushBottom - (r.bottom || 0), width: (0, M.Et)(t.props.width) ? t.props.width : i.width, startIndex: c, endIndex: u, updateId: "brush-".concat(s) });
                  }),
                  ey(l, "renderReferenceElement", function (t, e, r) {
                    if (!t) return null;
                    var o = l.clipPathId,
                      a = l.state,
                      i = a.xAxisMap,
                      c = a.yAxisMap,
                      u = a.offset,
                      s = t.type.defaultProps || {},
                      f = t.props,
                      p = f.xAxisId,
                      h = void 0 === p ? s.xAxisId : p,
                      d = f.yAxisId,
                      y = void 0 === d ? s.yAxisId : d;
                    return (0,
                    n.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(r), xAxis: i[h], yAxis: c[y], viewBox: { x: u.left, y: u.top, width: u.width, height: u.height }, clipPathId: o });
                  }),
                  ey(l, "renderActivePoints", function (t) {
                    var e = t.item,
                      r = t.activePoint,
                      n = t.basePoint,
                      a = t.childIndex,
                      i = t.isRange,
                      c = [],
                      l = e.props.key,
                      u =
                        void 0 !== e.item.type.defaultProps
                          ? ed(ed({}, e.item.type.defaultProps), e.item.props)
                          : e.item.props,
                      s = u.activeDot,
                      f = ed(
                        ed(
                          {
                            index: a,
                            dataKey: u.dataKey,
                            cx: r.x,
                            cy: r.y,
                            r: 4,
                            fill: (0, P.Ps)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: r.payload,
                            value: r.value,
                          },
                          (0, j.J9)(s, !1)
                        ),
                        (0, tq._U)(s)
                      );
                    return (
                      c.push(
                        o.renderActiveDot(
                          s,
                          f,
                          "".concat(l, "-activePoint-").concat(a)
                        )
                      ),
                      n
                        ? c.push(
                            o.renderActiveDot(
                              s,
                              ed(ed({}, f), {}, { cx: n.x, cy: n.y }),
                              "".concat(l, "-basePoint-").concat(a)
                            )
                          )
                        : i && c.push(null),
                      c
                    );
                  }),
                  ey(l, "renderGraphicChild", function (t, e, r) {
                    var o = l.filterFormatItem(t, e, r);
                    if (!o) return null;
                    var i = l.getTooltipEventType(),
                      c = l.state,
                      u = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = l.props.children,
                      d = (0, j.BU)(h, x.m),
                      y = o.props,
                      v = y.points,
                      m = y.isRange,
                      b = y.baseLine,
                      g =
                        void 0 !== o.item.type.defaultProps
                          ? ed(ed({}, o.item.type.defaultProps), o.item.props)
                          : o.item.props,
                      O = g.activeDot,
                      w = g.hide,
                      A = g.activeBar,
                      E = g.activeShape,
                      S = !!(!w && u && d && (O || A || E)),
                      k = {};
                    "axis" !== i && d && "click" === d.props.trigger
                      ? (k = {
                          onClick: (0, P.HQ)(
                            l.handleItemMouseEnter,
                            t.props.onClick
                          ),
                        })
                      : "axis" !== i &&
                        (k = {
                          onMouseLeave: (0, P.HQ)(
                            l.handleItemMouseLeave,
                            t.props.onMouseLeave
                          ),
                          onMouseEnter: (0, P.HQ)(
                            l.handleItemMouseEnter,
                            t.props.onMouseEnter
                          ),
                        });
                    var _ = (0, n.cloneElement)(t, ed(ed({}, o.props), k));
                    if (S)
                      if (f >= 0) {
                        if (s.dataKey && !s.allowDuplicatedCategory) {
                          var T =
                            "function" == typeof s.dataKey
                              ? function (t) {
                                  return "function" == typeof s.dataKey
                                    ? s.dataKey(t.payload)
                                    : null;
                                }
                              : "payload.".concat(s.dataKey.toString());
                          (I = (0, M.eP)(v, T, p)),
                            (Z = m && b && (0, M.eP)(b, T, p));
                        } else
                          (I = null == v ? void 0 : v[f]), (Z = m && b && b[f]);
                        if (E || A) {
                          var C =
                            void 0 !== t.props.activeIndex
                              ? t.props.activeIndex
                              : f;
                          return [
                            (0, n.cloneElement)(
                              t,
                              ed(ed(ed({}, o.props), k), {}, { activeIndex: C })
                            ),
                            null,
                            null,
                          ];
                        }
                        if (!a()(I))
                          return [_].concat(
                            es(
                              l.renderActivePoints({
                                item: o,
                                activePoint: I,
                                basePoint: Z,
                                childIndex: f,
                                isRange: m,
                              })
                            )
                          );
                      } else {
                        var I,
                          Z,
                          D,
                          N = (
                            null !=
                            (D = l.getItemByXY(l.state.activeCoordinate))
                              ? D
                              : { graphicalItem: _ }
                          ).graphicalItem,
                          L = N.item,
                          H = void 0 === L ? t : L,
                          V = N.childIndex,
                          R = ed(
                            ed(ed({}, o.props), k),
                            {},
                            { activeIndex: V }
                          );
                        return [(0, n.cloneElement)(H, R), null, null];
                      }
                    return m ? [_, null, null] : [_, null];
                  }),
                  ey(l, "renderCustomized", function (t, e, r) {
                    return (0,
                    n.cloneElement)(t, ed(ed({ key: "recharts-customized-".concat(r) }, l.props), l.state));
                  }),
                  ey(l, "renderMap", {
                    CartesianGrid: { handler: ex, once: !0 },
                    ReferenceArea: { handler: l.renderReferenceElement },
                    ReferenceLine: { handler: ex },
                    ReferenceDot: { handler: l.renderReferenceElement },
                    XAxis: { handler: ex },
                    YAxis: { handler: ex },
                    Brush: { handler: l.renderBrush, once: !0 },
                    Bar: { handler: l.renderGraphicChild },
                    Line: { handler: l.renderGraphicChild },
                    Area: { handler: l.renderGraphicChild },
                    Radar: { handler: l.renderGraphicChild },
                    RadialBar: { handler: l.renderGraphicChild },
                    Scatter: { handler: l.renderGraphicChild },
                    Pie: { handler: l.renderGraphicChild },
                    Funnel: { handler: l.renderGraphicChild },
                    Tooltip: { handler: l.renderCursor, once: !0 },
                    PolarGrid: { handler: l.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: l.renderPolarAxis },
                    PolarRadiusAxis: { handler: l.renderPolarAxis },
                    Customized: { handler: l.renderCustomized },
                  }),
                  (l.clipPathId = "".concat(
                    null != (r = t.id) ? r : (0, M.NF)("recharts"),
                    "-clip"
                  )),
                  (l.throttleTriggeredAfterMouseMove = y()(
                    l.triggeredAfterMouseMove,
                    null != (i = t.throttleDelay) ? i : 1e3 / 60
                  )),
                  (l.state = {}),
                  l
                );
              }
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              return (
                (o.prototype = Object.create(t && t.prototype, {
                  constructor: { value: o, writable: !0, configurable: !0 },
                })),
                Object.defineProperty(o, "prototype", { writable: !1 }),
                t && eu(o, t),
                (r = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t, e;
                      this.addListener(),
                        this.accessibilityManager.setDetails({
                          container: this.container,
                          offset: {
                            left: null != (t = this.props.margin.left) ? t : 0,
                            top: null != (e = this.props.margin.top) ? e : 0,
                          },
                          coordinateList: this.state.tooltipTicks,
                          mouseHandlerCallback: this.triggeredAfterMouseMove,
                          layout: this.props.layout,
                        }),
                        this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "displayDefaultTooltip",
                    value: function () {
                      var t = this.props,
                        e = t.children,
                        r = t.data,
                        n = t.height,
                        o = t.layout,
                        a = (0, j.BU)(e, x.m);
                      if (a) {
                        var i = a.props.defaultIndex;
                        if (
                          "number" == typeof i &&
                          !(i < 0) &&
                          !(i > this.state.tooltipTicks.length - 1)
                        ) {
                          var c =
                              this.state.tooltipTicks[i] &&
                              this.state.tooltipTicks[i].value,
                            l = ej(this.state, r, i, c),
                            u = this.state.tooltipTicks[i].coordinate,
                            s = (this.state.offset.top + n) / 2,
                            f =
                              "horizontal" === o
                                ? { x: u, y: s }
                                : { y: u, x: s },
                            p = this.state.formattedGraphicalItems.find(
                              function (t) {
                                return "Scatter" === t.item.type.name;
                              }
                            );
                          p &&
                            ((f = ed(
                              ed({}, f),
                              p.props.points[i].tooltipPosition
                            )),
                            (l = p.props.points[i].tooltipPayload));
                          var h = {
                            activeTooltipIndex: i,
                            isTooltipActive: !0,
                            activeLabel: c,
                            activePayload: l,
                            activeCoordinate: f,
                          };
                          this.setState(h),
                            this.renderCursor(a),
                            this.accessibilityManager.setIndex(i);
                        }
                      }
                    },
                  },
                  {
                    key: "getSnapshotBeforeUpdate",
                    value: function (t, e) {
                      if (!this.props.accessibilityLayer) return null;
                      if (
                        (this.state.tooltipTicks !== e.tooltipTicks &&
                          this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks,
                          }),
                        this.props.layout !== t.layout &&
                          this.accessibilityManager.setDetails({
                            layout: this.props.layout,
                          }),
                        this.props.margin !== t.margin)
                      ) {
                        var r, n;
                        this.accessibilityManager.setDetails({
                          offset: {
                            left: null != (r = this.props.margin.left) ? r : 0,
                            top: null != (n = this.props.margin.top) ? n : 0,
                          },
                        });
                      }
                      return null;
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      (0, j.OV)(
                        [(0, j.BU)(t.children, x.m)],
                        [(0, j.BU)(this.props.children, x.m)]
                      ) || this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.removeListener(),
                        this.throttleTriggeredAfterMouseMove.cancel();
                    },
                  },
                  {
                    key: "getTooltipEventType",
                    value: function () {
                      var t = (0, j.BU)(this.props.children, x.m);
                      if (t && "boolean" == typeof t.props.shared) {
                        var e = t.props.shared ? "axis" : "item";
                        return u.indexOf(e) >= 0 ? e : i;
                      }
                      return i;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e = this.container,
                        r = e.getBoundingClientRect(),
                        n = (0, X.A3)(r),
                        o = {
                          chartX: Math.round(t.pageX - n.left),
                          chartY: Math.round(t.pageY - n.top),
                        },
                        a = r.width / e.offsetWidth || 1,
                        i = this.inRange(o.chartX, o.chartY, a);
                      if (!i) return null;
                      var c = this.state,
                        l = c.xAxisMap,
                        u = c.yAxisMap,
                        s = this.getTooltipEventType(),
                        f = eE(
                          this.state,
                          this.props.data,
                          this.props.layout,
                          i
                        );
                      if ("axis" !== s && l && u) {
                        var p = (0, M.lX)(l).scale,
                          h = (0, M.lX)(u).scale,
                          d = p && p.invert ? p.invert(o.chartX) : null,
                          y = h && h.invert ? h.invert(o.chartY) : null;
                        return ed(ed({}, o), {}, { xValue: d, yValue: y }, f);
                      }
                      return f ? ed(ed({}, o), f) : null;
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        n = this.props.layout,
                        o = t / r,
                        a = e / r;
                      if ("horizontal" === n || "vertical" === n) {
                        var i = this.state.offset;
                        return o >= i.left &&
                          o <= i.left + i.width &&
                          a >= i.top &&
                          a <= i.top + i.height
                          ? { x: o, y: a }
                          : null;
                      }
                      var c = this.state,
                        l = c.angleAxisMap,
                        u = c.radiusAxisMap;
                      if (l && u) {
                        var s = (0, M.lX)(l);
                        return (0, tF.yy)({ x: o, y: a }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, j.BU)(t, x.m),
                        n = {};
                      return (
                        r &&
                          "axis" === e &&
                          (n =
                            "click" === r.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onDoubleClick: this.handleDoubleClick,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                  onContextMenu: this.handleContextMenu,
                                }),
                        ed(
                          ed({}, (0, tq._U)(this.props, this.handleOuterEvent)),
                          n
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      tW.on(t$, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      tW.removeListener(t$, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, r) {
                      for (
                        var n = this.state.formattedGraphicalItems,
                          o = 0,
                          a = n.length;
                        o < a;
                        o++
                      ) {
                        var i = n[o];
                        if (
                          i.item === t ||
                          i.props.key === t.key ||
                          (e === (0, j.Mn)(i.item.type) && r === i.childIndex)
                        )
                          return i;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderClipPath",
                    value: function () {
                      var t = this.clipPathId,
                        e = this.state.offset,
                        r = e.left,
                        o = e.top,
                        a = e.height,
                        i = e.width;
                      return n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: t },
                          n.createElement("rect", {
                            x: r,
                            y: o,
                            height: a,
                            width: i,
                          })
                        )
                      );
                    },
                  },
                  {
                    key: "getXScales",
                    value: function () {
                      var t = this.state.xAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = ea(e, 2),
                              n = r[0],
                              o = r[1];
                            return ed(ed({}, t), {}, ey({}, n, o.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getYScales",
                    value: function () {
                      var t = this.state.yAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = ea(e, 2),
                              n = r[0],
                              o = r[1];
                            return ed(ed({}, t), {}, ey({}, n, o.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getXScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null == (e = this.state.xAxisMap) ||
                        null == (e = e[t])
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getYScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null == (e = this.state.yAxisMap) ||
                        null == (e = e[t])
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getItemByXY",
                    value: function (t) {
                      var e = this.state,
                        r = e.formattedGraphicalItems,
                        n = e.activeItem;
                      if (r && r.length)
                        for (var o = 0, a = r.length; o < a; o++) {
                          var i = r[o],
                            c = i.props,
                            l = i.item,
                            u =
                              void 0 !== l.type.defaultProps
                                ? ed(ed({}, l.type.defaultProps), l.props)
                                : l.props,
                            s = (0, j.Mn)(l.type);
                          if ("Bar" === s) {
                            var f = (c.data || []).find(function (e) {
                              return (0, A.J)(t, e);
                            });
                            if (f) return { graphicalItem: i, payload: f };
                          } else if ("RadialBar" === s) {
                            var p = (c.data || []).find(function (e) {
                              return (0, tF.yy)(t, e);
                            });
                            if (p) return { graphicalItem: i, payload: p };
                          } else if (
                            (0, tJ.NE)(i, n) ||
                            (0, tJ.nZ)(i, n) ||
                            (0, tJ.xQ)(i, n)
                          ) {
                            var h = (0, tJ.GG)({
                                graphicalItem: i,
                                activeTooltipItem: n,
                                itemData: u.data,
                              }),
                              d = void 0 === u.activeIndex ? h : u.activeIndex;
                            return {
                              graphicalItem: ed(
                                ed({}, i),
                                {},
                                { childIndex: d }
                              ),
                              payload: (0, tJ.xQ)(i, n)
                                ? u.data[h]
                                : i.props.data[h],
                            };
                          }
                        }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t,
                        e,
                        r = this;
                      if (!(0, j.Me)(this)) return null;
                      var o = this.props,
                        a = o.children,
                        i = o.className,
                        c = o.width,
                        l = o.height,
                        u = o.style,
                        s = o.compact,
                        f = o.title,
                        p = o.desc,
                        h = ei(o, er),
                        d = (0, j.J9)(h, !1);
                      if (s)
                        return n.createElement(
                          th.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          n.createElement(
                            b.u,
                            eo({}, d, {
                              width: c,
                              height: l,
                              title: f,
                              desc: p,
                            }),
                            this.renderClipPath(),
                            (0, j.ee)(a, this.renderMap)
                          )
                        );
                      this.props.accessibilityLayer &&
                        ((d.tabIndex =
                          null != (t = this.props.tabIndex) ? t : 0),
                        (d.role =
                          null != (e = this.props.role) ? e : "application"),
                        (d.onKeyDown = function (t) {
                          r.accessibilityManager.keyboardEvent(t);
                        }),
                        (d.onFocus = function () {
                          r.accessibilityManager.focus();
                        }));
                      var y = this.parseEventsOfWrapper();
                      return n.createElement(
                        th.DR,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        n.createElement(
                          "div",
                          eo(
                            {
                              className: (0, v.A)("recharts-wrapper", i),
                              style: ed(
                                {
                                  position: "relative",
                                  cursor: "default",
                                  width: c,
                                  height: l,
                                },
                                u
                              ),
                            },
                            y,
                            {
                              ref: function (t) {
                                r.container = t;
                              },
                            }
                          ),
                          n.createElement(
                            b.u,
                            eo({}, d, {
                              width: c,
                              height: l,
                              title: f,
                              desc: p,
                              style: eb,
                            }),
                            this.renderClipPath(),
                            (0, j.ee)(a, this.renderMap)
                          ),
                          this.renderLegend(),
                          this.renderTooltip()
                        )
                      );
                    },
                  },
                ]),
                (function (t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, ev(n.key), n);
                  }
                })(o.prototype, r),
                Object.defineProperty(o, "prototype", { writable: !1 }),
                o
              );
            })(n.Component);
          ey(S, "displayName", e),
            ey(
              S,
              "defaultProps",
              ed(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                d
              )
            ),
            ey(S, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                o = t.children,
                i = t.width,
                c = t.height,
                l = t.layout,
                u = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = e_(t);
                return ed(
                  ed(
                    ed({}, h),
                    {},
                    { updateId: 0 },
                    E(ed(ed({ props: t }, h), {}, { updateId: 0 }), e)
                  ),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: c,
                    prevLayout: l,
                    prevStackOffset: u,
                    prevMargin: s,
                    prevChildren: o,
                  }
                );
              }
              if (
                r !== e.prevDataKey ||
                n !== e.prevData ||
                i !== e.prevWidth ||
                c !== e.prevHeight ||
                l !== e.prevLayout ||
                u !== e.prevStackOffset ||
                !(0, tz.b)(s, e.prevMargin)
              ) {
                var d = e_(t),
                  y = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = ed(ed({}, eE(e, n, l)), {}, { updateId: e.updateId + 1 }),
                  m = ed(ed(ed({}, d), y), v);
                return ed(
                  ed(ed({}, m), E(ed({ props: t }, m), e)),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: c,
                    prevLayout: l,
                    prevStackOffset: u,
                    prevMargin: s,
                    prevChildren: o,
                  }
                );
              }
              if (!(0, j.OV)(o, e.prevChildren)) {
                var b,
                  g,
                  x,
                  O,
                  w = (0, j.BU)(o, q),
                  A =
                    w &&
                    null != (b = null == (g = w.props) ? void 0 : g.startIndex)
                      ? b
                      : f,
                  S =
                    w &&
                    null != (x = null == (O = w.props) ? void 0 : O.endIndex)
                      ? x
                      : p,
                  P =
                    a()(n) || A !== f || S !== p ? e.updateId + 1 : e.updateId;
                return ed(
                  ed(
                    { updateId: P },
                    E(
                      ed(
                        ed({ props: t }, e),
                        {},
                        { updateId: P, dataStartIndex: A, dataEndIndex: S }
                      ),
                      e
                    )
                  ),
                  {},
                  { prevChildren: o, dataStartIndex: A, dataEndIndex: S }
                );
              }
              return null;
            }),
            ey(S, "renderActiveDot", function (t, e, r) {
              var o;
              return (
                (o = (0, n.isValidElement)(t)
                  ? (0, n.cloneElement)(t, e)
                  : c()(t)
                  ? t(e)
                  : n.createElement(w.c, e)),
                n.createElement(
                  g.W,
                  { className: "recharts-active-dot", key: r },
                  o
                )
              );
            });
          var k = (0, n.forwardRef)(function (t, e) {
            return n.createElement(S, eo({}, t, { ref: e }));
          });
          return (k.displayName = S.displayName), k;
        };
    },
    92972: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      };
    },
    93179: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => n });
      function n(t, e) {
        if (!t) throw Error("Invariant failed");
      }
    },
    93294: (t, e, r) => {
      var n = r(34711);
      t.exports = function (t) {
        return function (e) {
          return n(e, t);
        };
      };
    },
    94011: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => v });
      var n = r(12115),
        o = r(93179),
        a = r(2348),
        i = r(70788),
        c = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function f() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (f = function () {
          return !!t;
        })();
      }
      function p(t) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function h(t, e) {
        return (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function d(t, e, r) {
        return (
          (e = y(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function y(t) {
        var e = (function (t, e) {
          if ("object" != l(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != l(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == l(e) ? e : e + "";
      }
      var v = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = p(t)),
            (function (t, e) {
              if (e && ("object" === l(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              f()
                ? Reflect.construct(t, e || [], p(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && h(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.offset,
                  r = t.layout,
                  l = t.width,
                  f = t.dataKey,
                  p = t.data,
                  h = t.dataPointFormatter,
                  d = t.xAxis,
                  y = t.yAxis,
                  v = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < a.length; n++)
                        (r = a[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(t, c),
                  m = (0, i.J9)(v, !1);
                "x" === this.props.direction &&
                  "number" !== d.type &&
                  (0, o.A)(!1);
                var b = p.map(function (t) {
                  var o,
                    i,
                    c = h(t, f),
                    p = c.x,
                    v = c.y,
                    b = c.value,
                    g = c.errorVal;
                  if (!g) return null;
                  var x = [];
                  if (Array.isArray(g)) {
                    var O =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(g) ||
                      (function (t, e) {
                        var r =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != r) {
                          var n,
                            o,
                            a,
                            i,
                            c = [],
                            l = !0,
                            u = !1;
                          try {
                            (a = (r = r.call(t)).next), !1;
                            for (
                              ;
                              !(l = (n = a.call(r)).done) &&
                              (c.push(n.value), c.length !== e);
                              l = !0
                            );
                          } catch (t) {
                            (u = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !l &&
                                null != r.return &&
                                ((i = r.return()), Object(i) !== i)
                              )
                                return;
                            } finally {
                              if (u) throw o;
                            }
                          }
                          return c;
                        }
                      })(g, 2) ||
                      (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return s(t, 2);
                          var r = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          if (
                            ("Object" === r &&
                              t.constructor &&
                              (r = t.constructor.name),
                            "Map" === r || "Set" === r)
                          )
                            return Array.from(t);
                          if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          )
                            return s(t, e);
                        }
                      })(g, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                    (o = O[0]), (i = O[1]);
                  } else o = i = g;
                  if ("vertical" === r) {
                    var w = d.scale,
                      A = v + e,
                      j = A + l,
                      E = A - l,
                      S = w(b - o),
                      P = w(b + i);
                    x.push({ x1: P, y1: j, x2: P, y2: E }),
                      x.push({ x1: S, y1: A, x2: P, y2: A }),
                      x.push({ x1: S, y1: j, x2: S, y2: E });
                  } else if ("horizontal" === r) {
                    var M = y.scale,
                      k = p + e,
                      _ = k - l,
                      T = k + l,
                      C = M(b - o),
                      I = M(b + i);
                    x.push({ x1: _, y1: I, x2: T, y2: I }),
                      x.push({ x1: k, y1: C, x2: k, y2: I }),
                      x.push({ x1: _, y1: C, x2: T, y2: C });
                  }
                  return n.createElement(
                    a.W,
                    u(
                      {
                        className: "recharts-errorBar",
                        key: "bar-".concat(
                          x.map(function (t) {
                            return ""
                              .concat(t.x1, "-")
                              .concat(t.x2, "-")
                              .concat(t.y1, "-")
                              .concat(t.y2);
                          })
                        ),
                      },
                      m
                    ),
                    x.map(function (t) {
                      return n.createElement(
                        "line",
                        u({}, t, {
                          key: "line-"
                            .concat(t.x1, "-")
                            .concat(t.x2, "-")
                            .concat(t.y1, "-")
                            .concat(t.y2),
                        })
                      );
                    })
                  );
                });
                return n.createElement(
                  a.W,
                  { className: "recharts-errorBars" },
                  b
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, y(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.Component);
      d(v, "defaultProps", {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        d(v, "displayName", "ErrorBar");
    },
    94356: (t, e, r) => {
      var n = r(70771),
        o = 1 / 0;
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e;
      };
    },
    94380: (t, e, r) => {
      var n = r(44101),
        o = r(18686),
        a = r(66373),
        i = r(38008),
        c = r(40382),
        l = r(98233),
        u = r(7512),
        s = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        y = u(n),
        v = u(o),
        m = u(a),
        b = u(i),
        g = u(c),
        x = l;
      ((n && x(new n(new ArrayBuffer(1))) != d) ||
        (o && x(new o()) != s) ||
        (a && x(a.resolve()) != f) ||
        (i && x(new i()) != p) ||
        (c && x(new c()) != h)) &&
        (x = function (t) {
          var e = l(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? u(r) : "";
          if (n)
            switch (n) {
              case y:
                return d;
              case v:
                return s;
              case m:
                return f;
              case b:
                return p;
              case g:
                return h;
            }
          return e;
        }),
        (t.exports = x);
    },
    94517: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => F });
      var n = r(12115),
        o = r(67206),
        a = r.n(o),
        i = r(59882),
        c = r.n(i),
        l = r(52596),
        u = r(16377);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(function (e) {
                var n, o, a;
                (n = t),
                  (o = e),
                  (a = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : e + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function y(t) {
        return Array.isArray(t) && (0, u.vh)(t[0]) && (0, u.vh)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var v = function (t) {
        var e = t.separator,
          r = void 0 === e ? " : " : e,
          o = t.contentStyle,
          i = t.itemStyle,
          s = void 0 === i ? {} : i,
          h = t.labelStyle,
          v = t.payload,
          m = t.formatter,
          b = t.itemSorter,
          g = t.wrapperClassName,
          x = t.labelClassName,
          O = t.label,
          w = t.labelFormatter,
          A = t.accessibilityLayer,
          j = d(
            {
              margin: 0,
              padding: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              whiteSpace: "nowrap",
            },
            void 0 === o ? {} : o
          ),
          E = d({ margin: 0 }, void 0 === h ? {} : h),
          S = !c()(O),
          P = S ? O : "",
          M = (0, l.A)("recharts-default-tooltip", g),
          k = (0, l.A)("recharts-tooltip-label", x);
        return (
          S && w && null != v && (P = w(O, v)),
          n.createElement(
            "div",
            f(
              { className: M, style: j },
              void 0 !== A && A
                ? { role: "status", "aria-live": "assertive" }
                : {}
            ),
            n.createElement(
              "p",
              { className: k, style: E },
              n.isValidElement(P) ? P : "".concat(P)
            ),
            (function () {
              if (v && v.length) {
                var t = (b ? a()(v, b) : v).map(function (t, e) {
                  if ("none" === t.type) return null;
                  var o = d(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      s
                    ),
                    a = t.formatter || m || y,
                    i = t.value,
                    c = t.name,
                    l = i,
                    f = c;
                  if (a && null != l && null != f) {
                    var h = a(i, c, t, e, v);
                    if (Array.isArray(h)) {
                      var b =
                        (function (t) {
                          if (Array.isArray(t)) return t;
                        })(h) ||
                        (function (t, e) {
                          var r =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != r) {
                            var n,
                              o,
                              a,
                              i,
                              c = [],
                              l = !0,
                              u = !1;
                            try {
                              (a = (r = r.call(t)).next), !1;
                              for (
                                ;
                                !(l = (n = a.call(r)).done) &&
                                (c.push(n.value), c.length !== e);
                                l = !0
                              );
                            } catch (t) {
                              (u = !0), (o = t);
                            } finally {
                              try {
                                if (
                                  !l &&
                                  null != r.return &&
                                  ((i = r.return()), Object(i) !== i)
                                )
                                  return;
                              } finally {
                                if (u) throw o;
                              }
                            }
                            return c;
                          }
                        })(h, 2) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, 2);
                            var r = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === r &&
                                t.constructor &&
                                (r = t.constructor.name),
                              "Map" === r || "Set" === r)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            )
                              return p(t, e);
                          }
                        })(h, 2) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })();
                      (l = b[0]), (f = b[1]);
                    } else l = h;
                  }
                  return n.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(e),
                      style: o,
                    },
                    (0, u.vh)(f)
                      ? n.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          f
                        )
                      : null,
                    (0, u.vh)(f)
                      ? n.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          r
                        )
                      : null,
                    n.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      l
                    ),
                    n.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      t.unit || ""
                    )
                  );
                });
                return n.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  t
                );
              }
              return null;
            })()
          )
        );
      };
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function b(t, e, r) {
        var n;
        return (
          ((n = (function (t, e) {
            if ("object" != m(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != m(n)) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == m(n) ? n : n + "") in t)
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var g = "recharts-tooltip-wrapper",
        x = { visibility: "hidden" };
      function O(t) {
        var e = t.allowEscapeViewBox,
          r = t.coordinate,
          n = t.key,
          o = t.offsetTopLeft,
          a = t.position,
          i = t.reverseDirection,
          c = t.tooltipDimension,
          l = t.viewBox,
          s = t.viewBoxDimension;
        if (a && (0, u.Et)(a[n])) return a[n];
        var f = r[n] - c - o,
          p = r[n] + o;
        return e[n]
          ? i[n]
            ? f
            : p
          : i[n]
          ? f < l[n]
            ? Math.max(p, l[n])
            : Math.max(f, l[n])
          : p + c > l[n] + s
          ? Math.max(f, l[n])
          : Math.max(p, l[n]);
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function A(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                M(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function E() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (E = function () {
          return !!t;
        })();
      }
      function S(t) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function P(t, e) {
        return (P = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function M(t, e, r) {
        return (
          (e = k(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function k(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != w(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : e + "";
      }
      var _ = (function (t) {
          var e;
          function r() {
            var t, e, n;
            if (!(this instanceof r))
              throw TypeError("Cannot call a class as a function");
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (e = r),
              (n = [].concat(a)),
              (e = S(e)),
              M(
                (t = (function (t, e) {
                  if (e && ("object" === w(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  var r = t;
                  if (void 0 === r)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return r;
                })(
                  this,
                  E()
                    ? Reflect.construct(e, n || [], S(this).constructor)
                    : e.apply(this, n)
                )),
                "state",
                {
                  dismissed: !1,
                  dismissedAtCoordinate: { x: 0, y: 0 },
                  lastBoundingBox: { width: -1, height: -1 },
                }
              ),
              M(t, "handleKeyDown", function (e) {
                if ("Escape" === e.key) {
                  var r, n, o, a;
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !=
                        (r = null == (n = t.props.coordinate) ? void 0 : n.x)
                          ? r
                          : 0,
                      y:
                        null !=
                        (o = null == (a = t.props.coordinate) ? void 0 : a.y)
                          ? o
                          : 0,
                    },
                  });
                }
              }),
              t
            );
          }
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          return (
            (r.prototype = Object.create(t && t.prototype, {
              constructor: { value: r, writable: !0, configurable: !0 },
            })),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            t && P(r, t),
            (e = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.state.lastBoundingBox.height) >
                        1) &&
                      this.setState({
                        lastBoundingBox: { width: t.width, height: t.height },
                      });
                  } else
                    (-1 !== this.state.lastBoundingBox.width ||
                      -1 !== this.state.lastBoundingBox.height) &&
                      this.setState({
                        lastBoundingBox: { width: -1, height: -1 },
                      });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyDown),
                    this.updateBBox();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      ((null == (t = this.props.coordinate) ? void 0 : t.x) !==
                        this.state.dismissedAtCoordinate.x ||
                        (null == (e = this.props.coordinate) ? void 0 : e.y) !==
                          this.state.dismissedAtCoordinate.y) &&
                      (this.state.dismissed = !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e,
                    r,
                    o,
                    a,
                    i,
                    c,
                    s,
                    f,
                    p,
                    h,
                    d,
                    y,
                    v,
                    m,
                    w,
                    A,
                    E,
                    S,
                    P = this,
                    M = this.props,
                    k = M.active,
                    _ = M.allowEscapeViewBox,
                    T = M.animationDuration,
                    C = M.animationEasing,
                    I = M.children,
                    Z = M.coordinate,
                    D = M.hasPayload,
                    N = M.isAnimationActive,
                    L = M.offset,
                    H = M.position,
                    V = M.reverseDirection,
                    R = M.useTranslate3d,
                    B = M.viewBox,
                    F = M.wrapperStyle,
                    z =
                      ((d = (t = {
                        allowEscapeViewBox: _,
                        coordinate: Z,
                        offsetTopLeft: L,
                        position: H,
                        reverseDirection: V,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: R,
                        viewBox: B,
                      }).allowEscapeViewBox),
                      (y = t.coordinate),
                      (v = t.offsetTopLeft),
                      (m = t.position),
                      (w = t.reverseDirection),
                      (A = t.tooltipBox),
                      (E = t.useTranslate3d),
                      (S = t.viewBox),
                      A.height > 0 && A.width > 0 && y
                        ? ((r = (e = {
                            translateX: (p = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "x",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: A.width,
                              viewBox: S,
                              viewBoxDimension: S.width,
                            })),
                            translateY: (h = O({
                              allowEscapeViewBox: d,
                              coordinate: y,
                              key: "y",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: A.height,
                              viewBox: S,
                              viewBoxDimension: S.height,
                            })),
                            useTranslate3d: E,
                          }).translateX),
                          (o = e.translateY),
                          (f = {
                            transform: e.useTranslate3d
                              ? "translate3d("
                                  .concat(r, "px, ")
                                  .concat(o, "px, 0)")
                              : "translate(".concat(r, "px, ").concat(o, "px)"),
                          }))
                        : (f = x),
                      {
                        cssProperties: f,
                        cssClasses:
                          ((i = (a = {
                            translateX: p,
                            translateY: h,
                            coordinate: y,
                          }).coordinate),
                          (c = a.translateX),
                          (s = a.translateY),
                          (0, l.A)(
                            g,
                            b(
                              b(
                                b(
                                  b(
                                    {},
                                    "".concat(g, "-right"),
                                    (0, u.Et)(c) &&
                                      i &&
                                      (0, u.Et)(i.x) &&
                                      c >= i.x
                                  ),
                                  "".concat(g, "-left"),
                                  (0, u.Et)(c) && i && (0, u.Et)(i.x) && c < i.x
                                ),
                                "".concat(g, "-bottom"),
                                (0, u.Et)(s) && i && (0, u.Et)(i.y) && s >= i.y
                              ),
                              "".concat(g, "-top"),
                              (0, u.Et)(s) && i && (0, u.Et)(i.y) && s < i.y
                            )
                          )),
                      }),
                    U = z.cssClasses,
                    W = z.cssProperties,
                    $ = j(
                      j(
                        {
                          transition:
                            N && k
                              ? "transform ".concat(T, "ms ").concat(C)
                              : void 0,
                        },
                        W
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && k && D
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      F
                    );
                  return n.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      className: U,
                      style: $,
                      ref: function (t) {
                        P.wrapperNode = t;
                      },
                    },
                    I
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, k(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(n.PureComponent),
        T = r(41643),
        C = r(2494);
      function I(t) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Z(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Z(Object(r), !0).forEach(function (e) {
                V(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function N() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (N = function () {
          return !!t;
        })();
      }
      function L(t) {
        return (L = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function H(t, e) {
        return (H = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function V(t, e, r) {
        return (
          (e = R(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function R(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != I(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == I(e) ? e : e + "";
      }
      function B(t) {
        return t.dataKey;
      }
      var F = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = L(t)),
            (function (t, e) {
              if (e && ("object" === I(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              N()
                ? Reflect.construct(t, e || [], L(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && H(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  r = this.props,
                  o = r.active,
                  a = r.allowEscapeViewBox,
                  i = r.animationDuration,
                  c = r.animationEasing,
                  l = r.content,
                  u = r.coordinate,
                  s = r.filterNull,
                  f = r.isAnimationActive,
                  p = r.offset,
                  h = r.payload,
                  d = r.payloadUniqBy,
                  y = r.position,
                  m = r.reverseDirection,
                  b = r.useTranslate3d,
                  g = r.viewBox,
                  x = r.wrapperStyle,
                  O = null != h ? h : [];
                s &&
                  O.length &&
                  (O = (0, C.s)(
                    h.filter(function (t) {
                      return (
                        null != t.value &&
                        (!0 !== t.hide || e.props.includeHidden)
                      );
                    }),
                    d,
                    B
                  ));
                var w = O.length > 0;
                return n.createElement(
                  _,
                  {
                    allowEscapeViewBox: a,
                    animationDuration: i,
                    animationEasing: c,
                    isAnimationActive: f,
                    active: o,
                    coordinate: u,
                    hasPayload: w,
                    offset: p,
                    position: y,
                    reverseDirection: m,
                    useTranslate3d: b,
                    viewBox: g,
                    wrapperStyle: x,
                  },
                  ((t = D(D({}, this.props), {}, { payload: O })),
                  n.isValidElement(l)
                    ? n.cloneElement(l, t)
                    : "function" == typeof l
                    ? n.createElement(l, t)
                    : n.createElement(v, t))
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, R(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.PureComponent);
      V(F, "displayName", "Tooltip"),
        V(F, "defaultProps", {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !T.m.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {},
        });
    },
    94832: (t, e, r) => {
      "use strict";
      r.d(e, { p: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,24a83.57,83.57,0,0,1,44,12.48v16L151.79,96l-28.47,3.85L104.62,87.6a20,20,0,0,0-28.07,5.28l-20.94,31.3a19.89,19.89,0,0,0-3.38,11l-.16,28.69A84,84,0,0,1,128,44ZM68.41,187.14A20,20,0,0,0,76,171.55l.2-35,18.07-27,16.62,10.88a19.92,19.92,0,0,0,14.14,3.42l31.47-4.26A20,20,0,0,0,169,112.79L191.16,87a20.15,20.15,0,0,0,4.39-8.9,83.78,83.78,0,0,1,14.12,69.48l-11.34-10.37a20.08,20.08,0,0,0-21.17-3.71l-30.45,12.66a20.1,20.1,0,0,0-12.11,15.55l-2.39,16.2a20,20,0,0,0,14.71,22.26l16,4.18a83.78,83.78,0,0,1-94.47-17.24Zm116.77,2.32-1.63-1.63a20.05,20.05,0,0,0-9.08-5.22l-18-4.72L158,167.48l26-10.81L200,171.26A84.84,84.84,0,0,1,185.18,189.46Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.84-6.22l30.46-12.66a8,8,0,0,1,8.47,1.49ZM159.89,105,182.06,79.2A8,8,0,0,0,184,74V50A96,96,0,0,0,50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26A8,8,0,0,0,159.89,105Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,12a89.53,89.53,0,0,1,50,15.2V74a2,2,0,0,1-.48,1.31L155.35,101a2,2,0,0,1-1.25.68L122.63,106a2,2,0,0,1-1.44-.36l-.24-.16-19.7-12.89a14,14,0,0,0-19.71,3.64l-21,31.3a13.94,13.94,0,0,0-2.36,7.71L58,171.45a2,2,0,0,1-.9,1.66l-5,3.27A90,90,0,0,1,128,38ZM59.28,186.05l4.43-2.9A14,14,0,0,0,70,171.52l.21-36.23a2.05,2.05,0,0,1,.33-1.1l21-31.3a2,2,0,0,1,1.31-.86,2,2,0,0,1,1.52.35l.24.16,19.7,12.89a13.93,13.93,0,0,0,10,2.44l31.47-4.26a14,14,0,0,0,8.73-4.74l22.17-25.76A14,14,0,0,0,190,74V62.82a89.91,89.91,0,0,1,22.68,95.67l-18.4-16.82a14,14,0,0,0-14.82-2.6L149,151.73a14.11,14.11,0,0,0-8.48,10.89l-2.38,16.19a14,14,0,0,0,10.3,15.58L169.9,200a2.09,2.09,0,0,1,.91.53l4.18,4.18A89.86,89.86,0,0,1,59.28,186.05ZM184.9,197.68l-5.59-5.61a14,14,0,0,0-6.36-3.65l-21.46-5.63a2,2,0,0,1-1.47-2.23l2.39-16.19a2,2,0,0,1,1.21-1.56l30.45-12.66a2,2,0,0,1,2.12.37l21.36,19.54A90.79,90.79,0,0,1,184.9,197.68Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,8a91.48,91.48,0,0,1,52,16.15V74a4,4,0,0,1-1,2.61l-22.17,25.76a4,4,0,0,1-2.49,1.35L122.9,108a3.94,3.94,0,0,1-2.88-.72l-.16-.11L100.13,94.22A12,12,0,0,0,83.2,97.33l-21,31.3a11.93,11.93,0,0,0-2,6.6L60,171.46a4,4,0,0,1-1.8,3.33l-6.65,4.36A92,92,0,0,1,128,36ZM56.32,185.6l6.29-4.13a12,12,0,0,0,5.41-10l.21-36.23a4,4,0,0,1,.67-2.2l20.95-31.3a4,4,0,0,1,5.67-1l.15.11,19.74,12.91a12,12,0,0,0,8.56,2.11l31.47-4.26a12,12,0,0,0,7.49-4.06L185.1,81.81A12,12,0,0,0,188,74V58.31A91.91,91.91,0,0,1,213.5,162l-20.57-18.82a12,12,0,0,0-12.7-2.22l-30.45,12.66a12.06,12.06,0,0,0-7.27,9.33l-2.38,16.19A12,12,0,0,0,149,192.46l21.45,5.63a4,4,0,0,1,1.82,1l5.94,6A91.85,91.85,0,0,1,56.32,185.6Zm128.43,14.76-6.86-6.88a12,12,0,0,0-5.45-3.13L151,184.72a4,4,0,0,1-3-4.45l2.39-16.2a4,4,0,0,1,2.42-3.11l30.45-12.65a4,4,0,0,1,4.24.74L210,169.62A92.43,92.43,0,0,1,184.75,200.36Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "GlobeHemisphereEast";
    },
    94999: (t, e, r) => {
      var n = r(5658);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= !!e), e;
      };
    },
    95442: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () =>
          function t() {
            var e = new n(),
              r = [],
              o = [],
              a = c;
            function l(t) {
              let n = e.get(t);
              if (void 0 === n) {
                if (a !== c) return a;
                e.set(t, (n = r.push(t) - 1));
              }
              return o[n % o.length];
            }
            return (
              (l.domain = function (t) {
                if (!arguments.length) return r.slice();
                for (let o of ((r = []), (e = new n()), t))
                  e.has(o) || e.set(o, r.push(o) - 1);
                return l;
              }),
              (l.range = function (t) {
                return arguments.length ? ((o = Array.from(t)), l) : o.slice();
              }),
              (l.unknown = function (t) {
                return arguments.length ? ((a = t), l) : a;
              }),
              (l.copy = function () {
                return t(r, o).unknown(a);
              }),
              i.C.apply(l, arguments),
              l
            );
          },
        h: () => c,
      });
      class n extends Map {
        constructor(t, e = a) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (let [e, r] of t) this.set(e, r);
        }
        get(t) {
          return super.get(o(this, t));
        }
        has(t) {
          return super.has(o(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) ? t.get(n) : (t.set(n, r), r);
            })(this, t),
            e
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, r) {
              let n = e(r);
              return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
            })(this, t)
          );
        }
      }
      function o({ _intern: t, _key: e }, r) {
        let n = e(r);
        return t.has(n) ? t.get(n) : r;
      }
      function a(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var i = r(28749);
      let c = Symbol("implicit");
    },
    96025: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => v });
      var n = r(12115),
        o = r(52596),
        a = r(50091),
        i = r(69324),
        c = r(12814);
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (u = function () {
          return !!t;
        })();
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function f(t, e) {
        return (f = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function p(t, e, r) {
        return (
          (e = h(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function h(t) {
        var e = (function (t, e) {
          if ("object" != l(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != l(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == l(e) ? e : e + "";
      }
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function y(t) {
        var e = t.xAxisId,
          r = (0, a.yi)(),
          l = (0, a.rY)(),
          u = (0, a.AF)(e);
        return null == u
          ? null
          : n.createElement(
              i.u,
              d({}, u, {
                className: (0, o.A)(
                  "recharts-".concat(u.axisType, " ").concat(u.axisType),
                  u.className
                ),
                viewBox: { x: 0, y: 0, width: r, height: l },
                ticksGenerator: function (t) {
                  return (0, c.Rh)(t, !0);
                },
              })
            );
      }
      var v = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = s(t)),
            (function (t, e) {
              if (e && ("object" === l(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              u()
                ? Reflect.construct(t, e || [], s(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && f(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                return n.createElement(y, this.props);
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, h(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(n.Component);
      p(v, "displayName", "XAxis"),
        p(v, "defaultProps", {
          allowDecimals: !0,
          hide: !1,
          orientation: "bottom",
          width: 0,
          height: 30,
          mirror: !1,
          xAxisId: 0,
          tickCount: 5,
          type: "category",
          padding: { left: 0, right: 0 },
          allowDataOverflow: !1,
          scale: "auto",
          reversed: !1,
          allowDuplicatedCategory: !0,
        });
    },
    96294: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    96540: (t, e, r) => {
      var n = r(31545),
        o = r(26151),
        a = r(53696),
        i = r(13364),
        c = r(20988);
      function l(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (l.prototype.clear = n),
        (l.prototype.delete = o),
        (l.prototype.get = a),
        (l.prototype.has = i),
        (l.prototype.set = c),
        (t.exports = l);
    },
    96548: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    96699: (t, e, r) => {
      var n = r(51911),
        o = r(48973),
        a = r(20134),
        i = r(79595),
        c = r(32197),
        l = r(92972),
        u = r(94356);
      t.exports = function (t, e) {
        return i(t) && c(e)
          ? l(u(t), e)
          : function (r) {
              var i = o(r, t);
              return void 0 === i && i === e ? a(r, t) : n(e, i, 3);
            };
      };
    },
    96774: (t, e, r) => {
      "use strict";
      r.d(e, { F: () => y });
      var n = r(12115),
        o = r(39898);
      let a = new Map([
        [
          "bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
            })
          ),
        ],
        [
          "duotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
              opacity: "0.2",
            }),
            n.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "fill",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
            })
          ),
        ],
        [
          "light",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
            })
          ),
        ],
        [
          "regular",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "thin",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (t, e, r) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) s.call(e, r) && p(t, r, e[r]);
          if (u) for (var r of u(e)) f.call(e, r) && p(t, r, e[r]);
          return t;
        },
        d = (t, e) => c(t, l(e));
      let y = (0, n.forwardRef)((t, e) =>
        n.createElement(o.A, d(h({ ref: e }, t), { weights: a }))
      );
      y.displayName = "Plus";
    },
    97124: (t, e, r) => {
      t.exports = r(75031)(r(62464));
    },
    98233: (t, e, r) => {
      var n = r(24376),
        o = r(20570),
        a = r(64439),
        i = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : i && i in Object(t)
          ? o(t)
          : a(t);
      };
    },
    99445: (t, e, r) => {
      "use strict";
      r.d(e, { Q: () => l });
      var n = r(92418),
        o = r(62341),
        a = r(96025),
        i = r(16238),
        c = r(5248),
        l = (0, n.gu)({
          chartName: "AreaChart",
          GraphicalChild: o.G,
          axisComponents: [
            { axisType: "xAxis", AxisComp: a.W },
            { axisType: "yAxis", AxisComp: i.h },
          ],
          formatAxisMap: c.pr,
        });
    },
    99544: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, r) {
        var n = typeof t;
        return (
          !!(r = null == r ? 0x1fffffffffffff : r) &&
          ("number" == n || ("symbol" != n && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < r
        );
      };
    },
  },
]);
