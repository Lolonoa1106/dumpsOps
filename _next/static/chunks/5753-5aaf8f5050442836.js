"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5753],
  {
    567: (t, e, r) => {
      r.d(e, { V: () => i });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    4576: (t, e, r) => {
      r.d(e, { I: () => c, r: () => d });
      let i = (t) => (180 * t) / Math.PI,
        n = (t) => o(i(Math.atan2(t[1], t[0]))),
        s = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: n,
          rotateZ: n,
          skewX: (t) => i(Math.atan(t[1])),
          skewY: (t) => i(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        o = (t) => ((t %= 360) < 0 && (t += 360), t),
        a = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        l = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        u = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: a,
          scaleY: l,
          scale: (t) => (a(t) + l(t)) / 2,
          rotateX: (t) => o(i(Math.atan2(t[6], t[5]))),
          rotateY: (t) => o(i(Math.atan2(-t[2], t[0]))),
          rotateZ: n,
          rotate: n,
          skewX: (t) => i(Math.atan(t[4])),
          skewY: (t) => i(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function h(t) {
        return +!!t.includes("scale");
      }
      function d(t, e) {
        let r, i;
        if (!t || "none" === t) return h(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (r = u), (i = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (r = s), (i = e);
        }
        if (!i) return h(e);
        let o = r[e],
          a = i[1].split(",").map(p);
        return "function" == typeof o ? o(a) : a[o];
      }
      let c = (t, e) => {
        let { transform: r = "none" } = getComputedStyle(t);
        return d(r, e);
      };
      function p(t) {
        return parseFloat(t.trim());
      }
    },
    6654: (t, e, r) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = r(12115);
      function n(t, e) {
        let r = (0, i.useRef)(null),
          n = (0, i.useRef)(null);
        return (0, i.useCallback)(
          (i) => {
            if (null === i) {
              let t = r.current;
              t && ((r.current = null), t());
              let e = n.current;
              e && ((n.current = null), e());
            } else t && (r.current = s(t, i)), e && (n.current = s(e, i));
          },
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let r = t(e);
          return "function" == typeof r ? r : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7345: (t, e, r) => {
      r.d(e, { Z: () => s });
      var i = r(45818),
        n = r(21109);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let r = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, i.q)(0, e, s);
              t.push((0, n.k)(r, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    12083: (t, e, r) => {
      r.d(e, { V: () => a });
      var i = r(23082),
        n = r(45471),
        s = r(22282),
        o = r(97219);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.KN.transform((0, s.a)(e)) +
          ", " +
          n.KN.transform((0, s.a)(r)) +
          ", " +
          (0, s.a)(i.X4.transform(o)) +
          ")",
      };
    },
    14279: (t, e, r) => {
      r.d(e, { b: () => n });
      var i = r(95190);
      let n = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, i.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    14570: (t, e, r) => {
      r.d(e, { S: () => i });
      let i = (t) => !!(t && t.getVelocity);
    },
    16498: (t, e, r) => {
      r.d(e, { G: () => i });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    18203: (t, e, r) => {
      r.d(e, { h: () => d, q: () => h });
      var i = r(69515),
        n = r(79280);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            r = new Map();
          e.forEach((t) => {
            let e = (0, n.W9)(t);
            e.length && (r.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = r.get(t);
              e &&
                e.forEach(([e, r]) => {
                  t.getValue(e)?.set(r);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, r, i, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = r),
            (this.motionValue = i),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), i.Gt.read(u), i.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: r,
            motionValue: i,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n])
              if (0 === n) {
                let n = i?.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (r && e) {
                  let i = r.readValue(e, s);
                  null != i && (t[0] = i);
                }
                void 0 === t[0] && (t[0] = s), i && void 0 === n && i.set(t[0]);
              } else t[n] = t[n - 1];
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    19827: (t, e, r) => {
      r.d(e, { l: () => i });
      let i = (t) => t;
    },
    21109: (t, e, r) => {
      r.d(e, { k: () => i });
      let i = (t, e, r) => t + (e - t) * r;
    },
    22282: (t, e, r) => {
      r.d(e, { a: () => i });
      let i = (t) => Math.round(1e5 * t) / 1e5;
    },
    22436: (t, e, r) => {
      var i = r(12115),
        n =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = i.useState,
        o = i.useEffect,
        a = i.useLayoutEffect,
        l = i.useDebugValue;
      function u(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !n(t, r);
        } catch (t) {
          return !0;
        }
      }
      var h =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                i = s({ inst: { value: r, getSnapshot: e } }),
                n = i[0].inst,
                h = i[1];
              return (
                a(
                  function () {
                    (n.value = r), (n.getSnapshot = e), u(n) && h({ inst: n });
                  },
                  [t, r, e]
                ),
                o(
                  function () {
                    return (
                      u(n) && h({ inst: n }),
                      t(function () {
                        u(n) && h({ inst: n });
                      })
                    );
                  },
                  [t]
                ),
                l(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h;
    },
    23082: (t, e, r) => {
      r.d(e, { X4: () => s, ai: () => n, hs: () => o });
      var i = r(77782);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...n, transform: (t) => (0, i.q)(0, 1, t) },
        o = { ...n, default: 1 };
    },
    23387: (t, e, r) => {
      r.d(e, { W: () => i });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    24162: (t, e, r) => {
      r.d(e, { n: () => s });
      var i = r(41917);
      let n = {},
        s = (function (t, e) {
          let r = (0, i.p)(t);
          return () => n[e] ?? r();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
    },
    24744: (t, e, r) => {
      r.d(e, { Q: () => i });
      let i = { value: null, addProjectionMetrics: null };
    },
    24935: (t, e, r) => {
      r.d(e, { B: () => u });
      var i = r(77782),
        n = r(23082),
        s = r(22282),
        o = r(97219);
      let a = (t) => (0, i.q)(0, 255, t),
        l = { ...n.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(r) +
            ", " +
            (0, s.a)(n.X4.transform(i)) +
            ")",
        };
    },
    26826: (t, e, r) => {
      r.d(e, { D: () => i });
      let i = (t) => Array.isArray(t) && "number" == typeof t[0];
    },
    32082: (t, e, r) => {
      r.d(e, { xQ: () => s });
      var i = r(12115),
        n = r(80845);
      function s(t = !0) {
        let e = (0, i.useContext)(n.t);
        if (null === e) return [!0, null];
        let { isPresent: r, onExitComplete: o, register: a } = e,
          l = (0, i.useId)();
        (0, i.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, i.useCallback)(() => t && o && o(l), [l, o, t]);
        return !r && o ? [!1, u] : [!0];
      }
    },
    36356: (t, e, r) => {
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function n(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, r) => {
            (e[0][r] = t.get()), (e[1][r] = t.getVelocity());
          }),
          e
        );
      }
      function s(t, e, r, i) {
        if ("function" == typeof e) {
          let [s, o] = n(i);
          e = e(void 0 !== r ? r : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(i);
          e = e(void 0 !== r ? r : t.custom, s, o);
        }
        return e;
      }
      function o(t, e, r) {
        let i = t.getProps();
        return s(i, e, void 0 !== r ? r : i.custom, t);
      }
      function a(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      r.d(e, { P: () => iY });
      var l,
        u,
        h = r(69515),
        d = r(87387);
      let c = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...d.U,
      ]);
      var p = r(60098);
      let m = (t) => Array.isArray(t),
        f = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        g = (t) => (m(t) ? t[t.length - 1] || 0 : t);
      var v = r(23387),
        y = r(14570);
      function b(t, e) {
        let r = t.getValue("willChange");
        if ((0, y.S)(r) && r.add) return r.add(e);
        if (!r && v.W.WillChange) {
          let r = new v.W.WillChange("auto");
          t.addValue("willChange", r), r.add(e);
        }
      }
      let x = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        w = "data-" + x("framerAppearId");
      var k = r(91116);
      class P {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(this.animations.map((t) => t.finished));
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = e;
        }
        attachTimeline(t, e) {
          let r = this.animations.map((r) =>
            (0, k.J)() && r.attachTimeline
              ? r.attachTimeline(t)
              : "function" == typeof e
              ? e(r)
              : void 0
          );
          return () => {
            r.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class S extends P {
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
      }
      var T = r(47215),
        A = r(84528),
        E = r(43128),
        M = r(26826),
        V = r(24162);
      let C = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
        j = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: C([0, 0.65, 0.55, 1]),
          circOut: C([0.55, 0, 1, 0.45]),
          backIn: C([0.31, 0.01, 0.66, -0.59]),
          backOut: C([0.33, 1.53, 0.69, 0.99]),
        };
      var D = r(63704),
        R = r(24744),
        L = r(47705);
      function O(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      var F = r(19827),
        B = r(14279),
        I = r(95190),
        $ = r(59282);
      let z = (t) => /^0[^.\s]+$/u.test(t);
      var _ = r(93013),
        U = r(66479);
      let W = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function N(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = r.match(U.S) || [];
        if (!i) return t;
        let n = r.replace(i, ""),
          s = +!!W.has(e);
        return i !== r && (s *= 100), e + "(" + s + n + ")";
      }
      let G = /\b([a-z-]*)\(.*?\)/gu,
        q = {
          ..._.f,
          getAnimatableNone: (t) => {
            let e = t.match(G);
            return e ? e.map(N).join(" ") : t;
          },
        };
      var X = r(82897),
        H = r(23082),
        K = r(45471);
      let Z = {
          borderWidth: K.px,
          borderTopWidth: K.px,
          borderRightWidth: K.px,
          borderBottomWidth: K.px,
          borderLeftWidth: K.px,
          borderRadius: K.px,
          radius: K.px,
          borderTopLeftRadius: K.px,
          borderTopRightRadius: K.px,
          borderBottomRightRadius: K.px,
          borderBottomLeftRadius: K.px,
          width: K.px,
          maxWidth: K.px,
          height: K.px,
          maxHeight: K.px,
          top: K.px,
          right: K.px,
          bottom: K.px,
          left: K.px,
          padding: K.px,
          paddingTop: K.px,
          paddingRight: K.px,
          paddingBottom: K.px,
          paddingLeft: K.px,
          margin: K.px,
          marginTop: K.px,
          marginRight: K.px,
          marginBottom: K.px,
          marginLeft: K.px,
          backgroundPositionX: K.px,
          backgroundPositionY: K.px,
        },
        Y = {
          rotate: K.uj,
          rotateX: K.uj,
          rotateY: K.uj,
          rotateZ: K.uj,
          scale: H.hs,
          scaleX: H.hs,
          scaleY: H.hs,
          scaleZ: H.hs,
          skew: K.uj,
          skewX: K.uj,
          skewY: K.uj,
          distance: K.px,
          translateX: K.px,
          translateY: K.px,
          translateZ: K.px,
          x: K.px,
          y: K.px,
          z: K.px,
          perspective: K.px,
          transformPerspective: K.px,
          opacity: H.X4,
          originX: K.gQ,
          originY: K.gQ,
          originZ: K.px,
        },
        Q = { ...H.ai, transform: Math.round },
        J = {
          ...Z,
          ...Y,
          zIndex: Q,
          size: K.px,
          fillOpacity: H.X4,
          strokeOpacity: H.X4,
          numOctaves: Q,
        },
        tt = {
          ...J,
          color: X.y,
          backgroundColor: X.y,
          outlineColor: X.y,
          fill: X.y,
          stroke: X.y,
          borderColor: X.y,
          borderTopColor: X.y,
          borderRightColor: X.y,
          borderBottomColor: X.y,
          borderLeftColor: X.y,
          filter: q,
          WebkitFilter: q,
        },
        te = (t) => tt[t];
      function tr(t, e) {
        let r = te(t);
        return (
          r !== q && (r = _.f),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
      let ti = new Set(["auto", "none", "0"]);
      var tn = r(18203),
        ts = r(54542);
      let to = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var ta = r(93676);
      let tl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var tu = r(79280);
      let th = (t) => (e) => e.test(t),
        td = [
          H.ai,
          K.px,
          K.KN,
          K.uj,
          K.vw,
          K.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tc = (t) => td.find(th(t));
      class tp extends tn.h {
        constructor(t, e, r, i, n) {
          super(t, e, r, i, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: r } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if ("string" == typeof i && ((i = i.trim()), (0, ta.p)(i))) {
              let n = (function t(e, r, i = 1) {
                (0, ts.V)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = tl.exec(t);
                  if (!e) return [,];
                  let [, r, i, n] = e;
                  return [`--${r ?? i}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(r).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return to(t) ? parseFloat(t) : t;
                }
                return (0, ta.p)(s) ? t(s, r, i + 1) : s;
              })(i, e.current);
              void 0 !== n && (t[r] = n),
                r === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !c.has(r) || 2 !== t.length))
            return;
          let [i, n] = t,
            s = tc(i),
            o = tc(n);
          if (s !== o)
            if ((0, tu.E4)(s) && (0, tu.E4)(o))
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                "string" == typeof r && (t[e] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            r = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            ("number" == typeof (i = t[e])
              ? 0 === i
              : null === i || "none" === i || "0" === i || z(i)) && r.push(e);
          }
          r.length &&
            (function (t, e, r) {
              let i,
                n = 0;
              for (; n < t.length && !i; ) {
                let e = t[n];
                "string" == typeof e &&
                  !ti.has(e) &&
                  (0, _.V)(e).values.length &&
                  (i = t[n]),
                  n++;
              }
              if (i && r) for (let n of e) t[n] = tr(r, i);
            })(t, r, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: r } = this;
          if (!t || !t.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tu.Hr[r](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(r, i).jump(i, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: r } = this;
          if (!t || !t.current) return;
          let i = t.getValue(e);
          i && i.jump(this.measuredOrigin, !1);
          let n = r.length - 1,
            s = r[n];
          (r[n] = tu.Hr[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      var tm = r(86111),
        tf = r(77778);
      let tg = new Set(["opacity", "clipPath", "filter", "transform"]);
      var tv = r(41232);
      let ty = (0, r(41917).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tb = { anticipate: B.b, backInOut: I.ZZ, circInOut: $.tn };
      class tx extends tm.i {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: r,
            element: i,
            keyframes: n,
          } = this.options;
          (this.resolver = new tp(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var r;
          let {
            duration: i = 300,
            times: n,
            ease: s,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof s && (0, V.n)() && s in tb && (s = tb[s]),
            (r = this.options),
            (0, E.W)(r.type) ||
              "spring" === r.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && (0, V.n)()) ||
                  !e ||
                  ("string" == typeof e && (e in j || (0, V.n)())) ||
                  (0, M.D)(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(r.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: r,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let r = new tf.o({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !i.done && s < 2e4; )
                  n.push((i = r.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (i = h.duration),
              (n = h.times),
              (s = h.ease),
              (o = "keyframes");
          }
          let h = (function (
            t,
            e,
            r,
            {
              delay: i = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {},
            u
          ) {
            let h = { [e]: r };
            l && (h.offset = l);
            let d = (function t(e, r) {
              if (e)
                return "function" == typeof e && (0, V.n)()
                  ? (0, L.K)(e, r)
                  : (0, M.D)(e)
                  ? C(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, r) || j.easeOut)
                  : j[e];
            })(a, n);
            Array.isArray(d) && (h.easing = d), R.Q.value && D.q.waapi++;
            let c = t.animate(h, {
              delay: i,
              duration: n,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
              pseudoElement: void 0,
            });
            return (
              R.Q.value &&
                c.finished.finally(() => {
                  D.q.waapi--;
                }),
              c
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: i,
            times: n,
            ease: s,
          });
          return (
            (h.startTime = u ?? this.calcStartTime()),
            this.pendingTimeline
              ? (O(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: r } = this.options;
                  a.set((0, tv.X)(t, this.options, e)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: i,
              times: n,
              type: o,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, T.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, T.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.currentTime = (0, T.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        get finished() {
          return this.resolved.animation.finished;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return F.l;
            let { animation: r } = e;
            O(r, t);
          } else this.pendingTimeline = t;
          return F.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: r,
            duration: i,
            type: n,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new tf.o({
                ...u,
                keyframes: r,
                duration: i,
                type: n,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              d = (0, T.f)(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: r,
            repeatDelay: i,
            repeatType: n,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            ty() &&
            r &&
            tg.has(r) &&
            ("transform" !== r || !l) &&
            !a &&
            !i &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let tw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tk = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tP = { type: "keyframes", duration: 0.8 },
        tS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tT = (t, { keyframes: e }) =>
          e.length > 2
            ? tP
            : d.f.has(t)
            ? t.startsWith("scale")
              ? tk(e[1])
              : tw
            : tS,
        tA =
          (t, e, r, i = {}, n, s) =>
          (o) => {
            let l = a(i, t) || {},
              u = l.delay || i.delay || 0,
              { elapsed: d = 0 } = i;
            d -= (0, T.f)(u);
            let c = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -d,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && (c = { ...c, ...tT(t, c) }),
              c.duration && (c.duration = (0, T.f)(c.duration)),
              c.repeatDelay && (c.repeatDelay = (0, T.f)(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 === c.delay && (p = !0)),
              (A.d.current || v.W.skipAnimations) &&
                ((p = !0), (c.duration = 0), (c.delay = 0)),
              (c.allowFlatten = !l.type && !l.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = (0, tv.X)(c.keyframes, l);
              if (void 0 !== t)
                return (
                  h.Gt.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new S([])
                );
            }
            return !s && tx.supports(c) ? new tx(c) : new tf.o(c);
          };
      function tE(t, e, { delay: r = 0, transitionOverride: i, type: n } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = e;
        i && (s = i);
        let d = [],
          m = n && t.animationState && t.animationState.getState()[n];
        for (let e in u) {
          let i = t.getValue(e, t.latestValues[e] ?? null),
            n = u[e];
          if (
            void 0 === n ||
            (m &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let i = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), i;
              })(m, e))
          )
            continue;
          let o = { delay: r, ...a(s || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let r = t.props[w];
            if (r) {
              let t = window.MotionHandoffAnimation(r, e, h.Gt);
              null !== t && ((o.startTime = t), (l = !0));
            }
          }
          b(t, e),
            i.start(
              tA(
                e,
                i,
                n,
                t.shouldReduceMotion && c.has(e) ? { type: !1 } : o,
                t,
                l
              )
            );
          let p = i.animation;
          p && d.push(p);
        }
        return (
          l &&
            Promise.all(d).then(() => {
              h.Gt.update(() => {
                l &&
                  (function (t, e) {
                    let {
                      transitionEnd: r = {},
                      transition: i = {},
                      ...n
                    } = o(t, e) || {};
                    for (let e in (n = { ...n, ...r })) {
                      let r = g(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(r)
                        : t.addValue(e, (0, p.OQ)(r));
                    }
                  })(t, l);
              });
            }),
          d
        );
      }
      function tM(t, e, r = {}) {
        let i = o(t, e, "exit" === r.type ? t.presenceContext?.custom : void 0),
          { transition: n = t.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (n = r.transitionOverride);
        let s = i ? () => Promise.all(tE(t, i, r)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, r = 0, i = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === n ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tV)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tM(t, e, { ...s, delay: r + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + i, o, a, r);
                }
              : () => Promise.resolve(),
          { when: l } = n;
        if (!l) return Promise.all([s(), a(r.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function tV(t, e) {
        return t.sortNodePosition(e);
      }
      function tC(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let i = 0; i < r; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      function tj(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let tD = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        tR = ["initial", ...tD],
        tL = tR.length,
        tO = [...tD].reverse(),
        tF = tD.length;
      function tB(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function tI() {
        return {
          animate: tB(!0),
          whileInView: tB(),
          whileHover: tB(),
          whileTap: tB(),
          whileDrag: tB(),
          whileFocus: tB(),
          exit: tB(),
        };
      }
      class t$ {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class tz extends t$ {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) =>
                        (function (t, e, r = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => tM(t, e, r)));
                          else if ("string" == typeof e) i = tM(t, e, r);
                          else {
                            let n =
                              "function" == typeof e ? o(t, e, r.custom) : e;
                            i = Promise.all(tE(t, n, r));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, r)
                      )
                    ),
                  r = tI(),
                  n = !0,
                  s = (e) => (r, i) => {
                    let n = o(
                      t,
                      i,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...i } = n;
                      r = { ...r, ...i, ...e };
                    }
                    return r;
                  };
                function a(a) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let r = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (r.initial = e.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let t = 0; t < tL; t++) {
                          let i = tR[t],
                            n = e.props[i];
                          (tj(n) || !1 === n) && (r[i] = n);
                        }
                        return r;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    c = {},
                    p = 1 / 0;
                  for (let e = 0; e < tF; e++) {
                    var f, g;
                    let o = tO[e],
                      v = r[o],
                      y = void 0 !== l[o] ? l[o] : u[o],
                      b = tj(y),
                      x = o === a ? v.isActive : null;
                    !1 === x && (p = e);
                    let w = y === u[o] && y !== l[o] && b;
                    if (
                      (w && n && t.manuallyAnimateOnMount && (w = !1),
                      (v.protectedKeys = { ...c }),
                      (!v.isActive && null === x) ||
                        (!y && !v.prevProp) ||
                        i(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let k =
                        ((f = v.prevProp),
                        "string" == typeof (g = y)
                          ? g !== f
                          : !!Array.isArray(g) && !tC(g, f)),
                      P =
                        k || (o === a && v.isActive && !w && b) || (e > p && b),
                      S = !1,
                      T = Array.isArray(y) ? y : [y],
                      A = T.reduce(s(o), {});
                    !1 === x && (A = {});
                    let { prevResolvedValues: E = {} } = v,
                      M = { ...E, ...A },
                      V = (e) => {
                        (P = !0),
                          d.has(e) && ((S = !0), d.delete(e)),
                          (v.needsAnimating[e] = !0);
                        let r = t.getValue(e);
                        r && (r.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = A[t],
                        r = E[t];
                      if (c.hasOwnProperty(t)) continue;
                      let i = !1;
                      (m(e) && m(r) ? tC(e, r) : e === r)
                        ? void 0 !== e && d.has(t)
                          ? V(t)
                          : (v.protectedKeys[t] = !0)
                        : null != e
                        ? V(t)
                        : d.add(t);
                    }
                    (v.prevProp = y),
                      (v.prevResolvedValues = A),
                      v.isActive && (c = { ...c, ...A }),
                      n && t.blockInitialAnimation && (P = !1);
                    let C = !(w && k) || S;
                    P &&
                      C &&
                      h.push(
                        ...T.map((t) => ({
                          animation: t,
                          options: { type: o },
                        }))
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let r = o(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      r && r.transition && (e.transition = r.transition);
                    }
                    d.forEach((r) => {
                      let i = t.getBaseTarget(r),
                        n = t.getValue(r);
                      n && (n.liveStyle = !0), (e[r] = i ?? null);
                    }),
                      h.push({ animation: e });
                  }
                  let v = !!h.length;
                  return (
                    n &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (v = !1),
                    (n = !1),
                    v ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, i) {
                    if (r[e].isActive === i) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, i)
                    ),
                      (r[e].isActive = i);
                    let n = a(e);
                    for (let t in r) r[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = tI()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          i(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let t_ = 0;
      class tU extends t$ {
        constructor() {
          super(...arguments), (this.id = t_++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === r) return;
          let i = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            i.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let tW = { x: !1, y: !1 };
      function tN(t, e, r, i = { passive: !0 }) {
        return t.addEventListener(e, r, i), () => t.removeEventListener(e, r);
      }
      let tG = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tq(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let tX = (t) => (e) => tG(e) && t(e, tq(e));
      function tH(t, e, r, i) {
        return tN(t, e, tX(r), i);
      }
      function tK({ top: t, left: e, right: r, bottom: i }) {
        return { x: { min: e, max: r }, y: { min: t, max: i } };
      }
      var tZ = r(21109);
      function tY(t) {
        return t.max - t.min;
      }
      function tQ(t, e, r, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, tZ.k)(e.min, e.max, t.origin)),
          (t.scale = tY(r) / tY(e)),
          (t.translate = (0, tZ.k)(r.min, r.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function tJ(t, e, r, i) {
        tQ(t.x, e.x, r.x, i ? i.originX : void 0),
          tQ(t.y, e.y, r.y, i ? i.originY : void 0);
      }
      function t0(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + tY(e));
      }
      function t1(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + tY(e));
      }
      function t2(t, e, r) {
        t1(t.x, e.x, r.x), t1(t.y, e.y, r.y);
      }
      let t8 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        t6 = () => ({ x: t8(), y: t8() }),
        t5 = () => ({ min: 0, max: 0 }),
        t4 = () => ({ x: t5(), y: t5() });
      function t3(t) {
        return [t("x"), t("y")];
      }
      function t7(t) {
        return void 0 === t || 1 === t;
      }
      function t9({ scale: t, scaleX: e, scaleY: r }) {
        return !t7(t) || !t7(e) || !t7(r);
      }
      function et(t) {
        return (
          t9(t) ||
          ee(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ee(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function er(t, e, r, i, n) {
        return void 0 !== n && (t = i + n * (t - i)), i + r * (t - i) + e;
      }
      function ei(t, e = 0, r = 1, i, n) {
        (t.min = er(t.min, e, r, i, n)), (t.max = er(t.max, e, r, i, n));
      }
      function en(t, { x: e, y: r }) {
        ei(t.x, e.translate, e.scale, e.originPoint),
          ei(t.y, r.translate, r.scale, r.originPoint);
      }
      function es(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eo(t, e, r, i, n = 0.5) {
        let s = (0, tZ.k)(t.min, t.max, n);
        ei(t, e, r, s, i);
      }
      function ea(t, e) {
        eo(t.x, e.x, e.scaleX, e.scale, e.originX),
          eo(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function el(t, e) {
        return tK(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let eu = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function eh(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let ed = (t, e) => Math.abs(t - e);
      var ec = r(97007);
      class ep {
        constructor(
          t,
          e,
          {
            transformPagePoint: r,
            contextWindow: i,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = eg(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r =
                  (function (t, e) {
                    return Math.sqrt(ed(t.x, e.x) ** 2 + ed(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !r) return;
              let { point: i } = t,
                { timestamp: n } = h.uv;
              this.history.push({ ...i, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = em(e, this.transformPagePoint)),
                h.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: i,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = eg(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : em(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(t, s), i && i(t, s);
            }),
            !tG(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = r),
            (this.contextWindow = i || window);
          let s = em(tq(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = h.uv;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, eg(s, this.history)),
            (this.removeListeners = (0, ec.F)(
              tH(this.contextWindow, "pointermove", this.handlePointerMove),
              tH(this.contextWindow, "pointerup", this.handlePointerUp),
              tH(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, h.WG)(this.updatePoint);
        }
      }
      function em(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ef(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eg({ point: t }, e) {
        return {
          point: t,
          delta: ef(t, ev(e)),
          offset: ef(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              i = null,
              n = ev(t);
            for (
              ;
              r >= 0 &&
              ((i = t[r]), !(n.timestamp - i.timestamp > (0, T.f)(0.1)));

            )
              r--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, T.X)(n.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - i.x) / s, y: (n.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function ev(t) {
        return t[t.length - 1];
      }
      var ey = r(45818),
        eb = r(77782);
      function ex(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function ew(t, e) {
        let r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, i] = [i, r]), { min: r, max: i }
        );
      }
      function ek(t, e, r) {
        return { min: eP(t, e), max: eP(t, r) };
      }
      function eP(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eS = new WeakMap();
      class eT {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = t4()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new ep(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tq(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: r,
                  dragPropagation: i,
                  onDragStart: n,
                } = this.getProps();
                if (
                  r &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (function (t) {
                    if ("x" === t || "y" === t)
                      if (tW[t]) return null;
                      else
                        return (
                          (tW[t] = !0),
                          () => {
                            tW[t] = !1;
                          }
                        );
                    return tW.x || tW.y
                      ? null
                      : ((tW.x = tW.y = !0),
                        () => {
                          tW.x = tW.y = !1;
                        });
                  })(r)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  t3((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (K.KN.test(e)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let i = r.layout.layoutBox[t];
                        i && (e = tY(i) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && h.Gt.postRender(() => n(t, e)),
                  b(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: i,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let r = null;
                    return (
                      Math.abs(t.y) > e
                        ? (r = "y")
                        : Math.abs(t.x) > e && (r = "x"),
                      r
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                t3(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play()
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: eu(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: n } = this.getProps();
          n && h.Gt.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: i } = this.getProps();
          if (!r || !eA(t, i, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: r }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, tZ.k)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = i ? (0, tZ.k)(r, t, i.max) : Math.min(t, r)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            i = this.constraints;
          t && eh(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: i, right: n }
              ) {
                return { x: ex(t.x, r, n), y: ex(t.y, e, i) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ek(t, "left", "right"), y: ek(t, "top", "bottom") }
              );
            })(e)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              t3((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !eh(e)) return !1;
          let i = e.current;
          (0, ts.V)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, r) {
              let i = el(t, r),
                { scroll: n } = e;
              return n && (es(i.x, n.offset.x), es(i.y, n.offset.y)), i;
            })(i, n.root, this.visualElement.getTransformPagePoint()),
            o =
              ((t = n.layout.layoutBox), { x: ew(t.x, s.x), y: ew(t.y, s.y) });
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = tK(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            t3((o) => {
              if (!eA(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return (
            b(this.visualElement, t),
            r.start(tA(t, r, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          t3((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          t3((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[e] ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          t3((e) => {
            let { drag: r } = this.getProps();
            if (!eA(e, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: r, max: s } = i.layout.layoutBox[e];
              n.set(t[e] - (0, tZ.k)(r, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!eh(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          t3((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let r = e.get();
              i[t] = (function (t, e) {
                let r = 0.5,
                  i = tY(t),
                  n = tY(e);
                return (
                  n > i
                    ? (r = (0, ey.q)(e.min, e.max - i, t.min))
                    : i > n && (r = (0, ey.q)(t.min, t.max - n, e.min)),
                  (0, eb.q)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            t3((e) => {
              if (!eA(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              r.set((0, tZ.k)(n, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eS.set(this.visualElement, this);
          let t = tH(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              eh(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", e);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            h.Gt.read(e);
          let n = tN(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (t3((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), i(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function eA(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      class eE extends t$ {
        constructor(t) {
          super(t),
            (this.removeGroupControls = F.l),
            (this.removeListeners = F.l),
            (this.controls = new eT(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || F.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let eM = (t) => (e, r) => {
        t && h.Gt.postRender(() => t(e, r));
      };
      class eV extends t$ {
        constructor() {
          super(...arguments), (this.removePointerDownListener = F.l);
        }
        onPointerDown(t) {
          this.session = new ep(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eu(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: r,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: eM(t),
            onStart: eM(e),
            onMove: r,
            onEnd: (t, e) => {
              delete this.session, i && h.Gt.postRender(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tH(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var eC = r(95155);
      let { schedule: ej } = (0, r(58437).I)(queueMicrotask, !1);
      var eD = r(12115),
        eR = r(32082),
        eL = r(90869);
      let eO = (0, eD.createContext)({}),
        eF = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eB(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eI = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!K.px.test(t)) return t;
              else t = parseFloat(t);
            let r = eB(t, e.target.x),
              i = eB(t, e.target.y);
            return `${r}% ${i}%`;
          },
        },
        e$ = {};
      class ez extends eD.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: i,
            } = this.props,
            { projection: n } = t;
          for (let t in eU)
            (e$[t] = eU[t]), (0, ta.j)(t) && (e$[t].isCSSVariable = !0);
          n &&
            (e.group && e.group.add(n),
            r && r.register && i && r.register(n),
            n.root.didUpdate(),
            n.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            n.setOptions({
              ...n.options,
              onExitComplete: () => this.safeToRemove(),
            })),
            (eF.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: i,
              isPresent: n,
            } = this.props,
            s = r.projection;
          return (
            s &&
              ((s.isPresent = n),
              i || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== n &&
                (n
                  ? s.promote()
                  : s.relegate() ||
                    h.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ej.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function e_(t) {
        let [e, r] = (0, eR.xQ)(),
          i = (0, eD.useContext)(eL.L);
        return (0, eC.jsx)(ez, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, eD.useContext)(eO),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let eU = {
        borderRadius: {
          ...eI,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eI,
        borderTopRightRadius: eI,
        borderBottomLeftRadius: eI,
        borderBottomRightRadius: eI,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: r }) => {
            let i = _.f.parse(t);
            if (i.length > 5) return t;
            let n = _.f.createTransformer(t),
              s = +("number" != typeof i[0]),
              o = r.x.scale * e.x,
              a = r.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, tZ.k)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              n(i)
            );
          },
        },
      };
      var eW = r(74261),
        eN = r(75626),
        eG = r(56668);
      let eq = (t, e) => t.depth - e.depth;
      class eX {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, eG.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, eG.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eq),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function eH(t) {
        let e = (0, y.S)(t) ? t.get() : t;
        return f(e) ? e.toValue() : e;
      }
      let eK = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eZ = eK.length,
        eY = (t) => ("string" == typeof t ? parseFloat(t) : t),
        eQ = (t) => "number" == typeof t || K.px.test(t);
      function eJ(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let e0 = e2(0, 0.5, $.yT),
        e1 = e2(0.5, 0.95, F.l);
      function e2(t, e, r) {
        return (i) => (i < t ? 0 : i > e ? 1 : r((0, ey.q)(t, e, i)));
      }
      function e8(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function e6(t, e) {
        e8(t.x, e.x), e8(t.y, e.y);
      }
      function e5(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function e4(t, e, r, i, n) {
        return (
          (t -= e),
          (t = i + (1 / r) * (t - i)),
          void 0 !== n && (t = i + (1 / n) * (t - i)),
          t
        );
      }
      function e3(t, e, [r, i, n], s, o) {
        !(function (t, e = 0, r = 1, i = 0.5, n, s = t, o = t) {
          if (
            (K.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tZ.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, tZ.k)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = e4(t.min, e, r, a, n)),
            (t.max = e4(t.max, e, r, a, n));
        })(t, e[r], e[i], e[n], e.scale, s, o);
      }
      let e7 = ["x", "scaleX", "originX"],
        e9 = ["y", "scaleY", "originY"];
      function rt(t, e, r, i) {
        e3(t.x, e, e7, r ? r.x : void 0, i ? i.x : void 0),
          e3(t.y, e, e9, r ? r.y : void 0, i ? i.y : void 0);
      }
      function re(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rr(t) {
        return re(t.x) && re(t.y);
      }
      function ri(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rn(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function rs(t, e) {
        return rn(t.x, e.x) && rn(t.y, e.y);
      }
      function ro(t) {
        return tY(t.x) / tY(t.y);
      }
      function ra(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class rl {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, eG.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, eG.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ru = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        rh = ["", "X", "Y", "Z"],
        rd = { visibility: "hidden" },
        rc = 0;
      function rp(t, e, r, i) {
        let { latestValues: n } = e;
        n[t] && ((r[t] = n[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function rm({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, r = e?.()) {
            (this.id = rc++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  R.Q.value &&
                    (ru.nodes =
                      ru.calculatedTargetDeltas =
                      ru.calculatedProjections =
                        0),
                  this.nodes.forEach(rv),
                  this.nodes.forEach(rS),
                  this.nodes.forEach(rT),
                  this.nodes.forEach(ry),
                  R.Q.addProjectionMetrics && R.Q.addProjectionMetrics(ru);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eX());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eN.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (n || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r,
                i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = eW.k.now(),
                      i = ({ timestamp: n }) => {
                        let s = n - r;
                        s >= 250 && ((0, h.WG)(i), t(s - e));
                      };
                    return h.Gt.read(i, !0), () => (0, h.WG)(i);
                  })(i, 250)),
                  eF.hasAnimatedSinceResize &&
                    ((eF.hasAnimatedSinceResize = !1), this.nodes.forEach(rP));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: r,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        rj,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: l,
                      } = s.getProps(),
                      u = !this.targetLayout || !rs(this.targetLayout, i),
                      h = !e && r;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (u || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...a(n, "layout"), onPlay: o, onComplete: l };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || rP(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, h.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rA),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: r } = e.options;
                  if (!r) return;
                  let i = r.props[w];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: t, layoutId: r } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      h.Gt,
                      !(t || r)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rx);
              return;
            }
            this.isUpdating || this.nodes.forEach(rw),
              (this.isUpdating = !1),
              this.nodes.forEach(rk),
              this.nodes.forEach(rf),
              this.nodes.forEach(rg),
              this.clearAllSnapshots();
            let t = eW.k.now();
            (h.uv.delta = (0, eb.q)(0, 1e3 / 60, t - h.uv.timestamp)),
              (h.uv.timestamp = t),
              (h.uv.isProcessing = !0),
              h.PP.update.process(h.uv),
              h.PP.preRender.process(h.uv),
              h.PP.render.process(h.uv),
              (h.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ej.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rb), this.sharedNodes.forEach(rE);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              h.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            h.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                tY(this.snapshot.measuredBox.x) ||
                tY(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = t4()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !rr(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || et(this.latestValues) || s) &&
              (n(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              t && (i = this.removeTransform(i)),
              rL((e = i).x),
              rL(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return t4();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(rF))) {
              let { scroll: t } = this.root;
              t && (es(e.x, t.offset.x), es(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = t4();
            if ((e6(e, t), this.scroll?.wasRoot)) return e;
            for (let r = 0; r < this.path.length; r++) {
              let i = this.path[r],
                { scroll: n, options: s } = i;
              i !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && e6(e, t),
                es(e.x, n.offset.x),
                es(e.y, n.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let r = t4();
            e6(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                ea(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                et(i.latestValues) && ea(r, i.latestValues);
            }
            return et(this.latestValues) && ea(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = t4();
            e6(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !et(r.latestValues)) continue;
              t9(r.latestValues) && r.updateSnapshot();
              let i = t4();
              e6(i, r.measurePageBox()),
                rt(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  i
                );
            }
            return et(this.latestValues) && rt(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== h.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let r = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (r && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: i, layoutId: n } = this.options;
            if (this.layout && (i || n)) {
              if (
                ((this.resolvedRelativeTargetAt = h.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = t4()),
                    (this.relativeTargetOrigin = t4()),
                    t2(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    e6(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = t4()), (this.targetWithTransforms = t4())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var s, o, a;
                  this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    t0(s.x, o.x, a.x),
                    t0(s.y, o.y, a.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : e6(this.target, this.layout.layoutBox),
                      en(this.target, this.targetDelta))
                    : e6(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = t4()),
                      (this.relativeTargetOrigin = t4()),
                      t2(this.relativeTargetOrigin, this.target, t.target),
                      e6(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                R.Q.value && ru.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                t9(this.parent.latestValues) ||
                ee(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (r = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === h.uv.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || n))
            )
              return;
            e6(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, r, i = !1) {
              let n,
                s,
                o = r.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = r[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (i &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      ea(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), en(t, s)),
                    i && et(n.latestValues) && ea(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = t4()));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (e5(this.prevProjectionDelta.x, this.projectionDelta.x),
                e5(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              tJ(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === o &&
                ra(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ra(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              R.Q.value && ru.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = t6()),
              (this.projectionDelta = t6()),
              (this.projectionDeltaWithTransform = t6());
          }
          setAnimationOrigin(t, e = !1) {
            let r,
              i = this.snapshot,
              n = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = t6();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = t4(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(rC)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (rM(o.x, t.x, i),
                  rM(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m, f, g;
                  t2(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    (f = a),
                    (g = i),
                    rV(p.x, m.x, f.x, g),
                    rV(p.y, m.y, f.y, g),
                    r &&
                      ((u = this.relativeTarget),
                      (c = r),
                      ri(u.x, c.x) && ri(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = t4()),
                    e6(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, r, i, n, s) {
                    n
                      ? ((t.opacity = (0, tZ.k)(0, r.opacity ?? 1, e0(i))),
                        (t.opacityExit = (0, tZ.k)(e.opacity ?? 1, 0, e1(i))))
                      : s &&
                        (t.opacity = (0, tZ.k)(
                          e.opacity ?? 1,
                          r.opacity ?? 1,
                          i
                        ));
                    for (let n = 0; n < eZ; n++) {
                      let s = `border${eK[n]}Radius`,
                        o = eJ(e, s),
                        a = eJ(r, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || eQ(o) === eQ(a)
                          ? ((t[s] = Math.max((0, tZ.k)(eY(o), eY(a), i), 0)),
                            (K.KN.test(a) || K.KN.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = (0, tZ.k)(e.rotate || 0, r.rotate || 0, i));
                  })(s, n, this.latestValues, i, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, h.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = h.Gt.update(() => {
                (eF.hasAnimatedSinceResize = !0),
                  D.q.layout++,
                  (this.currentAnimation = (function (t, e, r) {
                    let i = (0, y.S)(0) ? 0 : (0, p.OQ)(t);
                    return i.start(tA("", i, 1e3, r)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      D.q.layout--;
                    },
                    onComplete: () => {
                      D.q.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: i,
                latestValues: n,
              } = t;
            if (e && r && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                rO(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                r = this.target || t4();
                let e = tY(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let i = tY(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + i);
              }
              e6(e, r),
                ea(e, n),
                tJ(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rl()),
              this.sharedNodes.get(t).add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            r.z && rp("z", t, i, this.animationValues);
            for (let e = 0; e < rh.length; e++)
              rp(`rotate${rh[e]}`, t, i, this.animationValues),
                rp(`skew${rh[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rd;
            let e = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (e.opacity = ""),
                (e.pointerEvents = eH(t?.pointerEvents) || ""),
                (e.transform = r ? r(this.latestValues, "") : "none"),
                e
              );
            let i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = eH(t?.pointerEvents) || "")),
                this.hasProjected &&
                  !et(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let n = i.animationValues || i.latestValues;
            this.applyTransformsToTarget(),
              (e.transform = (function (t, e, r) {
                let i = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = r?.z || 0;
                if (
                  ((n || s || o) &&
                    (i = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = r;
                  t && (i = `perspective(${t}px) ${i}`),
                    e && (i += `rotate(${e}deg) `),
                    n && (i += `rotateX(${n}deg) `),
                    s && (i += `rotateY(${s}deg) `),
                    o && (i += `skewX(${o}deg) `),
                    a && (i += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, n)),
              r && (e.transform = r(n, e.transform));
            let { x: s, y: o } = this.projectionDelta;
            for (let t in ((e.transformOrigin = `${100 * s.origin}% ${
              100 * o.origin
            }% 0`),
            i.animationValues
              ? (e.opacity =
                  i === this
                    ? n.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
              : (e.opacity =
                  i === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                    ? n.opacityExit
                    : 0),
            e$)) {
              if (void 0 === n[t]) continue;
              let { correct: r, applyTo: s, isCSSVariable: o } = e$[t],
                a = "none" === e.transform ? n[t] : r(n[t], i);
              if (s) {
                let t = s.length;
                for (let r = 0; r < t; r++) e[s[r]] = a;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (e[t] = a);
            }
            return (
              this.options.layoutId &&
                (e.pointerEvents =
                  i === this ? eH(t?.pointerEvents) || "" : "none"),
              e
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(rx),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rf(t) {
        t.updateLayout();
      }
      function rg(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: r, measuredBox: i } = t.layout,
            { animationType: n } = t.options,
            s = e.source !== t.layout.source;
          "size" === n
            ? t3((t) => {
                let i = s ? e.measuredBox[t] : e.layoutBox[t],
                  n = tY(i);
                (i.min = r[t].min), (i.max = i.min + n);
              })
            : rO(n, e.layoutBox, r) &&
              t3((i) => {
                let n = s ? e.measuredBox[i] : e.layoutBox[i],
                  o = tY(r[i]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = t6();
          tJ(o, r, e.layoutBox);
          let a = t6();
          s
            ? tJ(a, t.applyTransform(i, !0), e.measuredBox)
            : tJ(a, r, e.layoutBox);
          let l = !rr(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: n, layout: s } = i;
              if (n && s) {
                let o = t4();
                t2(o, e.layoutBox, n.layoutBox);
                let a = t4();
                t2(a, r, s.layoutBox),
                  rs(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rv(t) {
        R.Q.value && ru.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ry(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rb(t) {
        t.clearSnapshot();
      }
      function rx(t) {
        t.clearMeasurements();
      }
      function rw(t) {
        t.isLayoutDirty = !1;
      }
      function rk(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rP(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rS(t) {
        t.resolveTargetDelta();
      }
      function rT(t) {
        t.calcProjection();
      }
      function rA(t) {
        t.resetSkewAndRotation();
      }
      function rE(t) {
        t.removeLeadSnapshot();
      }
      function rM(t, e, r) {
        (t.translate = (0, tZ.k)(e.translate, 0, r)),
          (t.scale = (0, tZ.k)(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rV(t, e, r, i) {
        (t.min = (0, tZ.k)(e.min, r.min, i)),
          (t.max = (0, tZ.k)(e.max, r.max, i));
      }
      function rC(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rj = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rD = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rR = rD("applewebkit/") && !rD("chrome/") ? Math.round : F.l;
      function rL(t) {
        (t.min = rR(t.min)), (t.max = rR(t.max));
      }
      function rO(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(ro(e) - ro(r))))
        );
      }
      function rF(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let rB = rm({
          attachResizeListener: (t, e) => tN(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rI = { current: void 0 },
        r$ = rm({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rI.current) {
              let t = new rB({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rI.current = t);
            }
            return rI.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var rz = r(42198);
      function r_(t, e) {
        let r = (0, rz.K)(t),
          i = new AbortController();
        return [r, { passive: !0, ...e, signal: i.signal }, () => i.abort()];
      }
      function rU(t) {
        return !("touch" === t.pointerType || tW.x || tW.y);
      }
      function rW(t, e, r) {
        let { props: i } = t;
        t.animationState &&
          i.whileHover &&
          t.animationState.setActive("whileHover", "Start" === r);
        let n = i["onHover" + r];
        n && h.Gt.postRender(() => n(e, tq(e)));
      }
      class rN extends t$ {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [i, n, s] = r_(t, r),
                o = (t) => {
                  if (!rU(t)) return;
                  let { target: r } = t,
                    i = e(r, t);
                  if ("function" != typeof i || !r) return;
                  let s = (t) => {
                    rU(t) && (i(t), r.removeEventListener("pointerleave", s));
                  };
                  r.addEventListener("pointerleave", s, n);
                };
              return (
                i.forEach((t) => {
                  t.addEventListener("pointerenter", o, n);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                rW(this.node, e, "Start"), (t) => rW(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class rG extends t$ {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, ec.F)(
            tN(this.node.current, "focus", () => this.onFocus()),
            tN(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let rq = (t, e) => !!e && (t === e || rq(t, e.parentElement)),
        rX = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        rH = new WeakSet();
      function rK(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rZ(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let rY = (t, e) => {
        let r = t.currentTarget;
        if (!r) return;
        let i = rK(() => {
          if (rH.has(r)) return;
          rZ(r, "down");
          let t = rK(() => {
            rZ(r, "up");
          });
          r.addEventListener("keyup", t, e),
            r.addEventListener("blur", () => rZ(r, "cancel"), e);
        });
        r.addEventListener("keydown", i, e),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", i),
            e
          );
      };
      function rQ(t) {
        return tG(t) && !(tW.x || tW.y);
      }
      function rJ(t, e, r) {
        let { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          i.whileTap &&
          t.animationState.setActive("whileTap", "Start" === r);
        let n = i["onTap" + ("End" === r ? "" : r)];
        n && h.Gt.postRender(() => n(e, tq(e)));
      }
      class r0 extends t$ {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [i, n, s] = r_(t, r),
                o = (t) => {
                  let i = t.currentTarget;
                  if (!rQ(t) || rH.has(i)) return;
                  rH.add(i);
                  let s = e(i, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        rQ(t) &&
                          rH.has(i) &&
                          (rH.delete(i),
                          "function" == typeof s && s(t, { success: e }));
                    },
                    a = (t) => {
                      o(
                        t,
                        i === window ||
                          i === document ||
                          r.useGlobalTarget ||
                          rq(i, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, n),
                    window.addEventListener("pointercancel", l, n);
                };
              return (
                i.forEach((t) => {
                  ((r.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    o,
                    n
                  ),
                  t instanceof HTMLElement) &&
                    (t.addEventListener("focus", (t) => rY(t, n)),
                    rX.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                rJ(this.node, e, "Start"),
                (t, { success: e }) => rJ(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let r1 = new WeakMap(),
        r2 = new WeakMap(),
        r8 = (t) => {
          let e = r1.get(t.target);
          e && e(t);
        },
        r6 = (t) => {
          t.forEach(r8);
        },
        r5 = { some: 0, all: 1 };
      class r4 extends t$ {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: i = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof i ? i : r5[i],
            };
          return (function (t, e, r) {
            let i = (function ({ root: t, ...e }) {
              let r = t || document;
              r2.has(r) || r2.set(r, {});
              let i = r2.get(r),
                n = JSON.stringify(e);
              return (
                i[n] ||
                  (i[n] = new IntersectionObserver(r6, { root: t, ...e })),
                i[n]
              );
            })(e);
            return (
              r1.set(t, r),
              i.observe(t),
              () => {
                r1.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: r, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? r : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let r3 = (0, eD.createContext)({ strict: !1 });
      var r7 = r(51508);
      let r9 = (0, eD.createContext)({});
      function it(t) {
        return i(t.animate) || tR.some((e) => tj(t[e]));
      }
      function ie(t) {
        return !!(it(t) || t.variants);
      }
      function ir(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var ii = r(68972);
      let is = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        io = {};
      for (let t in is) io[t] = { isEnabled: (e) => is[t].some((t) => !!e[t]) };
      let ia = Symbol.for("motionComponentSymbol");
      var il = r(80845),
        iu = r(97494);
      function ih(t, { layout: e, layoutId: r }) {
        return (
          d.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!e$[t] || "opacity" === t))
        );
      }
      let id = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        ic = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ip = d.U.length;
      function im(t, e, r) {
        let { style: i, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let r = e[t];
          if (d.f.has(t)) {
            o = !0;
            continue;
          }
          if ((0, ta.j)(t)) {
            n[t] = r;
            continue;
          }
          {
            let e = id(r, J[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (i[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || r
              ? (i.transform = (function (t, e, r) {
                  let i = "",
                    n = !0;
                  for (let s = 0; s < ip; s++) {
                    let o = d.U[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      r
                    ) {
                      let t = id(a, J[o]);
                      if (!l) {
                        n = !1;
                        let e = ic[o] || o;
                        i += `${e}(${t}) `;
                      }
                      r && (e[o] = t);
                    }
                  }
                  return (
                    (i = i.trim()),
                    r ? (i = r(e, n ? "" : i)) : n && (i = "none"),
                    i
                  );
                })(e, t.transform, r))
              : i.transform && (i.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = s;
          i.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      let ig = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function iv(t, e, r) {
        for (let i in e) (0, y.S)(e[i]) || ih(i, r) || (t[i] = e[i]);
      }
      let iy = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function ib(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iy.has(t)
        );
      }
      let ix = (t) => !ib(t);
      try {
        !(function (t) {
          t && (ix = (e) => (e.startsWith("on") ? !ib(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      let iw = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ik(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (iw.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let iP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iS = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iT(t, e, r) {
        return "string" == typeof t ? t : K.px.transform(e + r * t);
      }
      function iA(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: i,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((im(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, r) {
              let i = iT(e, t.x, t.width),
                n = iT(r, t.y, t.height);
              return `${i} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== r && (c.y = r),
          void 0 !== i && (c.scale = i),
          void 0 !== o &&
            (function (t, e, r = 1, i = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? iP : iS;
              t[s.offset] = K.px.transform(-i);
              let o = K.px.transform(e),
                a = K.px.transform(r);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let iE = () => ({ ...ig(), attrs: {} }),
        iM = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var iV = r(82885);
      let iC = (t) => (e, r) => {
        let n = (0, eD.useContext)(r9),
          o = (0, eD.useContext)(il.t),
          a = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: r,
              },
              n,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, r, n) {
                  let o = {},
                    a = n(t, {});
                  for (let t in a) o[t] = eH(a[t]);
                  let { initial: l, animate: u } = t,
                    h = it(t),
                    d = ie(t);
                  e &&
                    d &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === l && (l = e.initial),
                    void 0 === u && (u = e.animate));
                  let c = !!r && !1 === r.initial,
                    p = (c = c || !1 === l) ? u : l;
                  if (p && "boolean" != typeof p && !i(p)) {
                    let e = Array.isArray(p) ? p : [p];
                    for (let r = 0; r < e.length; r++) {
                      let i = s(t, e[r]);
                      if (i) {
                        let { transitionEnd: t, transition: e, ...r } = i;
                        for (let t in r) {
                          let e = r[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (o[t] = e);
                        }
                        for (let e in t) o[e] = t[e];
                      }
                    }
                  }
                  return o;
                })(n, o, a, t),
                renderState: e(),
              };
              return (
                r &&
                  ((l.onMount = (t) => r({ props: n, current: t, ...l })),
                  (l.onUpdate = (t) => r(t))),
                l
              );
            })(t, e, n, o);
        return r ? a() : (0, iV.M)(a);
      };
      function ij(t, e, r) {
        let { style: i } = t,
          n = {};
        for (let s in i)
          ((0, y.S)(i[s]) ||
            (e.style && (0, y.S)(e.style[s])) ||
            ih(s, t) ||
            r?.getValue(s)?.liveStyle !== void 0) &&
            (n[s] = i[s]);
        return n;
      }
      let iD = {
        useVisualState: iC({
          scrapeMotionValuesFromProps: ij,
          createRenderState: ig,
        }),
      };
      function iR(t, e) {
        try {
          e.dimensions =
            "function" == typeof t.getBBox
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch (t) {
          e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      function iL(t, { style: e, vars: r }, i, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(i)),
        r))
          t.style.setProperty(s, r[s]);
      }
      let iO = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iF(t, e, r, i) {
        for (let r in (iL(t, e, void 0, i), e.attrs))
          t.setAttribute(iO.has(r) ? r : x(r), e.attrs[r]);
      }
      function iB(t, e, r) {
        let i = ij(t, e, r);
        for (let r in t)
          ((0, y.S)(t[r]) || (0, y.S)(e[r])) &&
            (i[
              -1 !== d.U.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return i;
      }
      let iI = ["x", "y", "width", "height", "cx", "cy", "r"],
        i$ = {
          useVisualState: iC({
            scrapeMotionValuesFromProps: iB,
            createRenderState: iE,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: r,
              renderState: i,
              latestValues: n,
            }) => {
              if (!r) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in n)
                  if (d.f.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let r = 0; r < iI.length; r++) {
                  let i = iI[r];
                  t[i] !== e[i] && (o = !0);
                }
              o &&
                h.Gt.read(() => {
                  iR(r, i),
                    h.Gt.render(() => {
                      iA(i, n, iM(r.tagName), t.transformTemplate), iF(r, i);
                    });
                });
            },
          }),
        },
        iz = { current: null },
        i_ = { current: !1 },
        iU = [...td, X.y, _.f],
        iW = (t) => iU.find(th(t)),
        iN = new WeakMap(),
        iG = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class iq {
        scrapeMotionValuesFromProps(t, e, r) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tn.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = eW.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                h.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = it(e)),
            (this.isVariantNode = ie(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: d, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== a[t] && (0, y.S)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            iN.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            i_.current ||
              (function () {
                if (((i_.current = !0), ii.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iz.current = t.matches);
                    t.addListener(e), e();
                  } else iz.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iz.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, h.WG)(this.notifyUpdate),
          (0, h.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = d.f.has(t);
          i && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && h.Gt.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), r && r(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in io) {
            let e = io[t];
            if (!e) continue;
            let { isEnabled: r, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                r(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t4();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iG.length; e++) {
            let r = iG[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = t["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (t, e, r) {
            for (let i in e) {
              let n = e[i],
                s = r[i];
              if ((0, y.S)(n)) t.addValue(i, n);
              else if ((0, y.S)(s)) t.addValue(i, (0, p.OQ)(n, { owner: t }));
              else if (s !== n)
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, p.OQ)(void 0 !== e ? e : n, { owner: t }));
                }
            }
            for (let i in r) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let r = this.values.get(t);
          e !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = (0, p.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, r)),
            r
          );
        }
        readValue(t, e) {
          let r =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && (to(r) || z(r))
                ? (r = parseFloat(r))
                : !iW(r) && _.f.test(e) && (r = tr(t, e)),
              this.setBaseTarget(t, (0, y.S)(r) ? r.get() : r)),
            (0, y.S)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let i = s(this.props, r, this.presenceContext?.custom);
            i && (e = i[t]);
          }
          if (r && void 0 !== e) return e;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, y.S)(i)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eN.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class iX extends iq {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tp);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, y.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var iH = r(4576);
      class iK extends iX {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = iL);
        }
        readValueFromInstance(t, e) {
          if (d.f.has(e)) return (0, iH.I)(t, e);
          {
            let r = window.getComputedStyle(t),
              i = ((0, ta.j)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return el(t, e);
        }
        build(t, e, r) {
          im(t, e, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return ij(t, e, r);
        }
      }
      class iZ extends iX {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = t4),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                iR(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (d.f.has(e)) {
            let t = te(e);
            return (t && t.default) || 0;
          }
          return (e = iO.has(e) ? e : x(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return iB(t, e, r);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            h.Gt.postRender(this.updateDimensions);
        }
        build(t, e, r) {
          iA(t, e, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, r, i) {
          iF(t, e, r, i);
        }
        mount(t) {
          (this.isSVGTag = iM(t.tagName)), super.mount(t);
        }
      }
      let iY = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (r, i) =>
            "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
        });
      })(
        ((l = {
          animation: { Feature: tz },
          exit: { Feature: tU },
          inView: { Feature: r4 },
          tap: { Feature: r0 },
          focus: { Feature: rG },
          hover: { Feature: rN },
          pan: { Feature: eV },
          drag: { Feature: eE, ProjectionNode: r$, MeasureLayout: e_ },
          layout: { ProjectionNode: r$, MeasureLayout: e_ },
        }),
        (u = (t, e) =>
          ik(t)
            ? new iZ(e)
            : new iK(e, { allowProjection: t !== eD.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: r,
              useRender: i,
              useVisualState: n,
              Component: s,
            } = t;
            function o(t, e) {
              var o, a, l;
              let u,
                h = {
                  ...(0, eD.useContext)(r7.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      r = (0, eD.useContext)(eL.L).id;
                    return r && void 0 !== e ? r + "-" + e : e;
                  })(t),
                },
                { isStatic: d } = h,
                c = (function (t) {
                  let { initial: e, animate: r } = (function (t, e) {
                    if (it(t)) {
                      let { initial: e, animate: r } = t;
                      return {
                        initial: !1 === e || tj(e) ? e : void 0,
                        animate: tj(r) ? r : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, eD.useContext)(r9));
                  return (0, eD.useMemo)(
                    () => ({ initial: e, animate: r }),
                    [ir(e), ir(r)]
                  );
                })(t),
                p = n(t, d);
              if (!d && ii.B) {
                (a = 0), (l = 0), (0, eD.useContext)(r3).strict;
                let t = (function (t) {
                  let { drag: e, layout: r } = io;
                  if (!e && !r) return {};
                  let i = { ...e, ...r };
                  return {
                    MeasureLayout:
                      e?.isEnabled(t) || r?.isEnabled(t)
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(h);
                (u = t.MeasureLayout),
                  (c.visualElement = (function (t, e, r, i, n) {
                    let { visualElement: s } = (0, eD.useContext)(r9),
                      o = (0, eD.useContext)(r3),
                      a = (0, eD.useContext)(il.t),
                      l = (0, eD.useContext)(r7.Q).reducedMotion,
                      u = (0, eD.useRef)(null);
                    (i = i || o.renderer),
                      !u.current &&
                        i &&
                        (u.current = i(t, {
                          visualState: e,
                          parent: s,
                          props: r,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: l,
                        }));
                    let h = u.current,
                      d = (0, eD.useContext)(eO);
                    h &&
                      !h.projection &&
                      n &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, r, i) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                          layoutCrossfade: h,
                        } = e;
                        (t.projection = new r(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && eh(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: i,
                            crossfade: h,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(u.current, r, n, d);
                    let c = (0, eD.useRef)(!1);
                    (0, eD.useInsertionEffect)(() => {
                      h && c.current && h.update(r, a);
                    });
                    let p = r[w],
                      m = (0, eD.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete?.(p) &&
                          window.MotionHasOptimisedAnimation?.(p)
                      );
                    return (
                      (0, iu.E)(() => {
                        h &&
                          ((c.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          ej.render(h.render),
                          m.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, eD.useEffect)(() => {
                        h &&
                          (!m.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          m.current &&
                            (queueMicrotask(() => {
                              window.MotionHandoffMarkAsComplete?.(p);
                            }),
                            (m.current = !1)));
                      }),
                      h
                    );
                  })(s, p, h, r, t.ProjectionNode));
              }
              return (0, eC.jsxs)(r9.Provider, {
                value: c,
                children: [
                  u && c.visualElement
                    ? (0, eC.jsx)(u, { visualElement: c.visualElement, ...h })
                    : null,
                  i(
                    s,
                    t,
                    ((o = c.visualElement),
                    (0, eD.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : eh(e) && (e.current = t));
                      },
                      [o]
                    )),
                    p,
                    d,
                    c.visualElement
                  ),
                ],
              });
            }
            e &&
              (function (t) {
                for (let e in t) io[e] = { ...io[e], ...t[e] };
              })(e),
              (o.displayName = `motion.${
                "string" == typeof s
                  ? s
                  : `create(${s.displayName ?? s.name ?? ""})`
              }`);
            let a = (0, eD.forwardRef)(o);
            return (a[ia] = s), a;
          })({
            ...(ik(t) ? i$ : iD),
            preloadedFeatures: l,
            useRender: (function (t = !1) {
              return (e, r, i, { latestValues: n }, s) => {
                let o = (
                    ik(e)
                      ? function (t, e, r, i) {
                          let n = (0, eD.useMemo)(() => {
                            let r = iE();
                            return (
                              iA(r, e, iM(i), t.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iv(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let r = {},
                            i = (function (t, e) {
                              let r = t.style || {},
                                i = {};
                              return (
                                iv(i, r, t),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, eD.useMemo)(() => {
                                      let r = ig();
                                      return (
                                        im(r, e, t),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                i
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = i),
                            r
                          );
                        }
                  )(r, n, s, e),
                  a = (function (t, e, r) {
                    let i = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (ix(n) ||
                          (!0 === r && ib(n)) ||
                          (!e && !ib(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (i[n] = t[n]);
                    return i;
                  })(r, "string" == typeof e, t),
                  l = e !== eD.Fragment ? { ...a, ...o, ref: i } : {},
                  { children: u } = r,
                  h = (0, eD.useMemo)(() => ((0, y.S)(u) ? u.get() : u), [u]);
                return (0, eD.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: u,
            Component: t,
          });
        })
      );
    },
    39688: (t, e, r) => {
      r.d(e, { QP: () => tu });
      let i = (t) => {
          let e = a(t),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: i } =
              t;
          return {
            getClassGroupId: (t) => {
              let r = t.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), n(r, e) || o(t)
              );
            },
            getConflictingClassGroupIds: (t, e) => {
              let n = r[t] || [];
              return e && i[t] ? [...n, ...i[t]] : n;
            },
          };
        },
        n = (t, e) => {
          if (0 === t.length) return e.classGroupId;
          let r = t[0],
            i = e.nextPart.get(r),
            s = i ? n(t.slice(1), i) : void 0;
          if (s) return s;
          if (0 === e.validators.length) return;
          let o = t.join("-");
          return e.validators.find(({ validator: t }) => t(o))?.classGroupId;
        },
        s = /^\[(.+)\]$/,
        o = (t) => {
          if (s.test(t)) {
            let e = s.exec(t)[1],
              r = e?.substring(0, e.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        a = (t) => {
          let { theme: e, classGroups: r } = t,
            i = { nextPart: new Map(), validators: [] };
          for (let t in r) l(r[t], i, t, e);
          return i;
        },
        l = (t, e, r, i) => {
          t.forEach((t) => {
            if ("string" == typeof t) {
              ("" === t ? e : u(e, t)).classGroupId = r;
              return;
            }
            if ("function" == typeof t)
              return h(t)
                ? void l(t(i), e, r, i)
                : void e.validators.push({ validator: t, classGroupId: r });
            Object.entries(t).forEach(([t, n]) => {
              l(n, u(e, t), r, i);
            });
          });
        },
        u = (t, e) => {
          let r = t;
          return (
            e.split("-").forEach((t) => {
              r.nextPart.has(t) ||
                r.nextPart.set(t, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(t));
            }),
            r
          );
        },
        h = (t) => t.isThemeGetter,
        d = (t) => {
          if (t < 1) return { get: () => void 0, set: () => {} };
          let e = 0,
            r = new Map(),
            i = new Map(),
            n = (n, s) => {
              r.set(n, s), ++e > t && ((e = 0), (i = r), (r = new Map()));
            };
          return {
            get(t) {
              let e = r.get(t);
              return void 0 !== e
                ? e
                : void 0 !== (e = i.get(t))
                ? (n(t, e), e)
                : void 0;
            },
            set(t, e) {
              r.has(t) ? r.set(t, e) : n(t, e);
            },
          };
        },
        c = (t) => {
          let { prefix: e, experimentalParseClassName: r } = t,
            i = (t) => {
              let e,
                r = [],
                i = 0,
                n = 0,
                s = 0;
              for (let o = 0; o < t.length; o++) {
                let a = t[o];
                if (0 === i && 0 === n) {
                  if (":" === a) {
                    r.push(t.slice(s, o)), (s = o + 1);
                    continue;
                  }
                  if ("/" === a) {
                    e = o;
                    continue;
                  }
                }
                "[" === a
                  ? i++
                  : "]" === a
                  ? i--
                  : "(" === a
                  ? n++
                  : ")" === a && n--;
              }
              let o = 0 === r.length ? t : t.substring(s),
                a = p(o);
              return {
                modifiers: r,
                hasImportantModifier: a !== o,
                baseClassName: a,
                maybePostfixModifierPosition: e && e > s ? e - s : void 0,
              };
            };
          if (e) {
            let t = e + ":",
              r = i;
            i = (e) =>
              e.startsWith(t)
                ? r(e.substring(t.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: e,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (r) {
            let t = i;
            i = (e) => r({ className: e, parseClassName: t });
          }
          return i;
        },
        p = (t) =>
          t.endsWith("!")
            ? t.substring(0, t.length - 1)
            : t.startsWith("!")
            ? t.substring(1)
            : t,
        m = (t) => {
          let e = Object.fromEntries(
            t.orderSensitiveModifiers.map((t) => [t, !0])
          );
          return (t) => {
            if (t.length <= 1) return t;
            let r = [],
              i = [];
            return (
              t.forEach((t) => {
                "[" === t[0] || e[t]
                  ? (r.push(...i.sort(), t), (i = []))
                  : i.push(t);
              }),
              r.push(...i.sort()),
              r
            );
          };
        },
        f = (t) => ({
          cache: d(t.cacheSize),
          parseClassName: c(t),
          sortModifiers: m(t),
          ...i(t),
        }),
        g = /\s+/,
        v = (t, e) => {
          let {
              parseClassName: r,
              getClassGroupId: i,
              getConflictingClassGroupIds: n,
              sortModifiers: s,
            } = e,
            o = [],
            a = t.trim().split(g),
            l = "";
          for (let t = a.length - 1; t >= 0; t -= 1) {
            let e = a[t],
              {
                isExternal: u,
                modifiers: h,
                hasImportantModifier: d,
                baseClassName: c,
                maybePostfixModifierPosition: p,
              } = r(e);
            if (u) {
              l = e + (l.length > 0 ? " " + l : l);
              continue;
            }
            let m = !!p,
              f = i(m ? c.substring(0, p) : c);
            if (!f) {
              if (!m || !(f = i(c))) {
                l = e + (l.length > 0 ? " " + l : l);
                continue;
              }
              m = !1;
            }
            let g = s(h).join(":"),
              v = d ? g + "!" : g,
              y = v + f;
            if (o.includes(y)) continue;
            o.push(y);
            let b = n(f, m);
            for (let t = 0; t < b.length; ++t) {
              let e = b[t];
              o.push(v + e);
            }
            l = e + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function y() {
        let t,
          e,
          r = 0,
          i = "";
        for (; r < arguments.length; )
          (t = arguments[r++]) && (e = b(t)) && (i && (i += " "), (i += e));
        return i;
      }
      let b = (t) => {
          let e;
          if ("string" == typeof t) return t;
          let r = "";
          for (let i = 0; i < t.length; i++)
            t[i] && (e = b(t[i])) && (r && (r += " "), (r += e));
          return r;
        },
        x = (t) => {
          let e = (e) => e[t] || [];
          return (e.isThemeGetter = !0), e;
        },
        w = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        P = /^\d+\/\d+$/,
        S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        T =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        M =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        V = (t) => P.test(t),
        C = (t) => !!t && !Number.isNaN(Number(t)),
        j = (t) => !!t && Number.isInteger(Number(t)),
        D = (t) => t.endsWith("%") && C(t.slice(0, -1)),
        R = (t) => S.test(t),
        L = () => !0,
        O = (t) => T.test(t) && !A.test(t),
        F = () => !1,
        B = (t) => E.test(t),
        I = (t) => M.test(t),
        $ = (t) => !_(t) && !X(t),
        z = (t) => tt(t, tn, F),
        _ = (t) => w.test(t),
        U = (t) => tt(t, ts, O),
        W = (t) => tt(t, to, C),
        N = (t) => tt(t, tr, F),
        G = (t) => tt(t, ti, I),
        q = (t) => tt(t, tl, B),
        X = (t) => k.test(t),
        H = (t) => te(t, ts),
        K = (t) => te(t, ta),
        Z = (t) => te(t, tr),
        Y = (t) => te(t, tn),
        Q = (t) => te(t, ti),
        J = (t) => te(t, tl, !0),
        tt = (t, e, r) => {
          let i = w.exec(t);
          return !!i && (i[1] ? e(i[1]) : r(i[2]));
        },
        te = (t, e, r = !1) => {
          let i = k.exec(t);
          return !!i && (i[1] ? e(i[1]) : r);
        },
        tr = (t) => "position" === t || "percentage" === t,
        ti = (t) => "image" === t || "url" === t,
        tn = (t) => "length" === t || "size" === t || "bg-size" === t,
        ts = (t) => "length" === t,
        to = (t) => "number" === t,
        ta = (t) => "family-name" === t,
        tl = (t) => "shadow" === t;
      Symbol.toStringTag;
      let tu = (function (t, ...e) {
        let r,
          i,
          n,
          s = function (a) {
            return (
              (i = (r = f(e.reduce((t, e) => e(t), t()))).cache.get),
              (n = r.cache.set),
              (s = o),
              o(a)
            );
          };
        function o(t) {
          let e = i(t);
          if (e) return e;
          let s = v(t, r);
          return n(t, s), s;
        }
        return function () {
          return s(y.apply(null, arguments));
        };
      })(() => {
        let t = x("color"),
          e = x("font"),
          r = x("text"),
          i = x("font-weight"),
          n = x("tracking"),
          s = x("leading"),
          o = x("breakpoint"),
          a = x("container"),
          l = x("spacing"),
          u = x("radius"),
          h = x("shadow"),
          d = x("inset-shadow"),
          c = x("text-shadow"),
          p = x("drop-shadow"),
          m = x("blur"),
          f = x("perspective"),
          g = x("aspect"),
          v = x("ease"),
          y = x("animate"),
          b = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          w = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          k = () => [...w(), X, _],
          P = () => ["auto", "hidden", "clip", "visible", "scroll"],
          S = () => ["auto", "contain", "none"],
          T = () => [X, _, l],
          A = () => [V, "full", "auto", ...T()],
          E = () => [j, "none", "subgrid", X, _],
          M = () => ["auto", { span: ["full", j, X, _] }, j, X, _],
          O = () => [j, "auto", X, _],
          F = () => ["auto", "min", "max", "fr", X, _],
          B = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          I = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          tt = () => ["auto", ...T()],
          te = () => [
            V,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          tr = () => [t, X, _],
          ti = () => [...w(), Z, N, { position: [X, _] }],
          tn = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ts = () => ["auto", "cover", "contain", Y, z, { size: [X, _] }],
          to = () => [D, H, U],
          ta = () => ["", "none", "full", u, X, _],
          tl = () => ["", C, H, U],
          tu = () => ["solid", "dashed", "dotted", "double"],
          th = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          td = () => [C, D, Z, N],
          tc = () => ["", "none", m, X, _],
          tp = () => ["none", C, X, _],
          tm = () => ["none", C, X, _],
          tf = () => [C, X, _],
          tg = () => [V, "full", ...T()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [R],
            breakpoint: [R],
            color: [L],
            container: [R],
            "drop-shadow": [R],
            ease: ["in", "out", "in-out"],
            font: [$],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [R],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [R],
            shadow: [R],
            spacing: ["px", C],
            text: [R],
            "text-shadow": [R],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", V, _, X, g] }],
            container: ["container"],
            columns: [{ columns: [C, _, X, a] }],
            "break-after": [{ "break-after": b() }],
            "break-before": [{ "break-before": b() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: k() }],
            overflow: [{ overflow: P() }],
            "overflow-x": [{ "overflow-x": P() }],
            "overflow-y": [{ "overflow-y": P() }],
            overscroll: [{ overscroll: S() }],
            "overscroll-x": [{ "overscroll-x": S() }],
            "overscroll-y": [{ "overscroll-y": S() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: A() }],
            "inset-x": [{ "inset-x": A() }],
            "inset-y": [{ "inset-y": A() }],
            start: [{ start: A() }],
            end: [{ end: A() }],
            top: [{ top: A() }],
            right: [{ right: A() }],
            bottom: [{ bottom: A() }],
            left: [{ left: A() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [j, "auto", X, _] }],
            basis: [{ basis: [V, "full", "auto", a, ...T()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [C, V, "auto", "initial", "none", _] }],
            grow: [{ grow: ["", C, X, _] }],
            shrink: [{ shrink: ["", C, X, _] }],
            order: [{ order: [j, "first", "last", "none", X, _] }],
            "grid-cols": [{ "grid-cols": E() }],
            "col-start-end": [{ col: M() }],
            "col-start": [{ "col-start": O() }],
            "col-end": [{ "col-end": O() }],
            "grid-rows": [{ "grid-rows": E() }],
            "row-start-end": [{ row: M() }],
            "row-start": [{ "row-start": O() }],
            "row-end": [{ "row-end": O() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": F() }],
            "auto-rows": [{ "auto-rows": F() }],
            gap: [{ gap: T() }],
            "gap-x": [{ "gap-x": T() }],
            "gap-y": [{ "gap-y": T() }],
            "justify-content": [{ justify: [...B(), "normal"] }],
            "justify-items": [{ "justify-items": [...I(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...I()] }],
            "align-content": [{ content: ["normal", ...B()] }],
            "align-items": [{ items: [...I(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...I(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": B() }],
            "place-items": [{ "place-items": [...I(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...I()] }],
            p: [{ p: T() }],
            px: [{ px: T() }],
            py: [{ py: T() }],
            ps: [{ ps: T() }],
            pe: [{ pe: T() }],
            pt: [{ pt: T() }],
            pr: [{ pr: T() }],
            pb: [{ pb: T() }],
            pl: [{ pl: T() }],
            m: [{ m: tt() }],
            mx: [{ mx: tt() }],
            my: [{ my: tt() }],
            ms: [{ ms: tt() }],
            me: [{ me: tt() }],
            mt: [{ mt: tt() }],
            mr: [{ mr: tt() }],
            mb: [{ mb: tt() }],
            ml: [{ ml: tt() }],
            "space-x": [{ "space-x": T() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": T() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: te() }],
            w: [{ w: [a, "screen", ...te()] }],
            "min-w": [{ "min-w": [a, "screen", "none", ...te()] }],
            "max-w": [
              {
                "max-w": [
                  a,
                  "screen",
                  "none",
                  "prose",
                  { screen: [o] },
                  ...te(),
                ],
              },
            ],
            h: [{ h: ["screen", ...te()] }],
            "min-h": [{ "min-h": ["screen", "none", ...te()] }],
            "max-h": [{ "max-h": ["screen", ...te()] }],
            "font-size": [{ text: ["base", r, H, U] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [i, X, W] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  D,
                  _,
                ],
              },
            ],
            "font-family": [{ font: [K, _, e] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, X, _] }],
            "line-clamp": [{ "line-clamp": [C, "none", X, W] }],
            leading: [{ leading: [s, ...T()] }],
            "list-image": [{ "list-image": ["none", X, _] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", X, _] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: tr() }],
            "text-color": [{ text: tr() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...tu(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [C, "from-font", "auto", X, U] },
            ],
            "text-decoration-color": [{ decoration: tr() }],
            "underline-offset": [{ "underline-offset": [C, "auto", X, _] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: T() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  X,
                  _,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", X, _] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: ti() }],
            "bg-repeat": [{ bg: tn() }],
            "bg-size": [{ bg: ts() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      j,
                      X,
                      _,
                    ],
                    radial: ["", X, _],
                    conic: [j, X, _],
                  },
                  Q,
                  G,
                ],
              },
            ],
            "bg-color": [{ bg: tr() }],
            "gradient-from-pos": [{ from: to() }],
            "gradient-via-pos": [{ via: to() }],
            "gradient-to-pos": [{ to: to() }],
            "gradient-from": [{ from: tr() }],
            "gradient-via": [{ via: tr() }],
            "gradient-to": [{ to: tr() }],
            rounded: [{ rounded: ta() }],
            "rounded-s": [{ "rounded-s": ta() }],
            "rounded-e": [{ "rounded-e": ta() }],
            "rounded-t": [{ "rounded-t": ta() }],
            "rounded-r": [{ "rounded-r": ta() }],
            "rounded-b": [{ "rounded-b": ta() }],
            "rounded-l": [{ "rounded-l": ta() }],
            "rounded-ss": [{ "rounded-ss": ta() }],
            "rounded-se": [{ "rounded-se": ta() }],
            "rounded-ee": [{ "rounded-ee": ta() }],
            "rounded-es": [{ "rounded-es": ta() }],
            "rounded-tl": [{ "rounded-tl": ta() }],
            "rounded-tr": [{ "rounded-tr": ta() }],
            "rounded-br": [{ "rounded-br": ta() }],
            "rounded-bl": [{ "rounded-bl": ta() }],
            "border-w": [{ border: tl() }],
            "border-w-x": [{ "border-x": tl() }],
            "border-w-y": [{ "border-y": tl() }],
            "border-w-s": [{ "border-s": tl() }],
            "border-w-e": [{ "border-e": tl() }],
            "border-w-t": [{ "border-t": tl() }],
            "border-w-r": [{ "border-r": tl() }],
            "border-w-b": [{ "border-b": tl() }],
            "border-w-l": [{ "border-l": tl() }],
            "divide-x": [{ "divide-x": tl() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": tl() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...tu(), "hidden", "none"] }],
            "divide-style": [{ divide: [...tu(), "hidden", "none"] }],
            "border-color": [{ border: tr() }],
            "border-color-x": [{ "border-x": tr() }],
            "border-color-y": [{ "border-y": tr() }],
            "border-color-s": [{ "border-s": tr() }],
            "border-color-e": [{ "border-e": tr() }],
            "border-color-t": [{ "border-t": tr() }],
            "border-color-r": [{ "border-r": tr() }],
            "border-color-b": [{ "border-b": tr() }],
            "border-color-l": [{ "border-l": tr() }],
            "divide-color": [{ divide: tr() }],
            "outline-style": [{ outline: [...tu(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [C, X, _] }],
            "outline-w": [{ outline: ["", C, H, U] }],
            "outline-color": [{ outline: tr() }],
            shadow: [{ shadow: ["", "none", h, J, q] }],
            "shadow-color": [{ shadow: tr() }],
            "inset-shadow": [{ "inset-shadow": ["none", d, J, q] }],
            "inset-shadow-color": [{ "inset-shadow": tr() }],
            "ring-w": [{ ring: tl() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: tr() }],
            "ring-offset-w": [{ "ring-offset": [C, U] }],
            "ring-offset-color": [{ "ring-offset": tr() }],
            "inset-ring-w": [{ "inset-ring": tl() }],
            "inset-ring-color": [{ "inset-ring": tr() }],
            "text-shadow": [{ "text-shadow": ["none", c, J, q] }],
            "text-shadow-color": [{ "text-shadow": tr() }],
            opacity: [{ opacity: [C, X, _] }],
            "mix-blend": [
              { "mix-blend": [...th(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": th() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [C] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": td() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": td() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": tr() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": tr() }],
            "mask-image-t-from-pos": [{ "mask-t-from": td() }],
            "mask-image-t-to-pos": [{ "mask-t-to": td() }],
            "mask-image-t-from-color": [{ "mask-t-from": tr() }],
            "mask-image-t-to-color": [{ "mask-t-to": tr() }],
            "mask-image-r-from-pos": [{ "mask-r-from": td() }],
            "mask-image-r-to-pos": [{ "mask-r-to": td() }],
            "mask-image-r-from-color": [{ "mask-r-from": tr() }],
            "mask-image-r-to-color": [{ "mask-r-to": tr() }],
            "mask-image-b-from-pos": [{ "mask-b-from": td() }],
            "mask-image-b-to-pos": [{ "mask-b-to": td() }],
            "mask-image-b-from-color": [{ "mask-b-from": tr() }],
            "mask-image-b-to-color": [{ "mask-b-to": tr() }],
            "mask-image-l-from-pos": [{ "mask-l-from": td() }],
            "mask-image-l-to-pos": [{ "mask-l-to": td() }],
            "mask-image-l-from-color": [{ "mask-l-from": tr() }],
            "mask-image-l-to-color": [{ "mask-l-to": tr() }],
            "mask-image-x-from-pos": [{ "mask-x-from": td() }],
            "mask-image-x-to-pos": [{ "mask-x-to": td() }],
            "mask-image-x-from-color": [{ "mask-x-from": tr() }],
            "mask-image-x-to-color": [{ "mask-x-to": tr() }],
            "mask-image-y-from-pos": [{ "mask-y-from": td() }],
            "mask-image-y-to-pos": [{ "mask-y-to": td() }],
            "mask-image-y-from-color": [{ "mask-y-from": tr() }],
            "mask-image-y-to-color": [{ "mask-y-to": tr() }],
            "mask-image-radial": [{ "mask-radial": [X, _] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": td() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": td() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": tr() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": tr() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": w() }],
            "mask-image-conic-pos": [{ "mask-conic": [C] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": td() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": td() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": tr() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": tr() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: ti() }],
            "mask-repeat": [{ mask: tn() }],
            "mask-size": [{ mask: ts() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", X, _] }],
            filter: [{ filter: ["", "none", X, _] }],
            blur: [{ blur: tc() }],
            brightness: [{ brightness: [C, X, _] }],
            contrast: [{ contrast: [C, X, _] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, J, q] }],
            "drop-shadow-color": [{ "drop-shadow": tr() }],
            grayscale: [{ grayscale: ["", C, X, _] }],
            "hue-rotate": [{ "hue-rotate": [C, X, _] }],
            invert: [{ invert: ["", C, X, _] }],
            saturate: [{ saturate: [C, X, _] }],
            sepia: [{ sepia: ["", C, X, _] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", X, _] }],
            "backdrop-blur": [{ "backdrop-blur": tc() }],
            "backdrop-brightness": [{ "backdrop-brightness": [C, X, _] }],
            "backdrop-contrast": [{ "backdrop-contrast": [C, X, _] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", C, X, _] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [C, X, _] }],
            "backdrop-invert": [{ "backdrop-invert": ["", C, X, _] }],
            "backdrop-opacity": [{ "backdrop-opacity": [C, X, _] }],
            "backdrop-saturate": [{ "backdrop-saturate": [C, X, _] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", C, X, _] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": T() }],
            "border-spacing-x": [{ "border-spacing-x": T() }],
            "border-spacing-y": [{ "border-spacing-y": T() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  X,
                  _,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [C, "initial", X, _] }],
            ease: [{ ease: ["linear", "initial", v, X, _] }],
            delay: [{ delay: [C, X, _] }],
            animate: [{ animate: ["none", y, X, _] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [f, X, _] }],
            "perspective-origin": [{ "perspective-origin": k() }],
            rotate: [{ rotate: tp() }],
            "rotate-x": [{ "rotate-x": tp() }],
            "rotate-y": [{ "rotate-y": tp() }],
            "rotate-z": [{ "rotate-z": tp() }],
            scale: [{ scale: tm() }],
            "scale-x": [{ "scale-x": tm() }],
            "scale-y": [{ "scale-y": tm() }],
            "scale-z": [{ "scale-z": tm() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: tf() }],
            "skew-x": [{ "skew-x": tf() }],
            "skew-y": [{ "skew-y": tf() }],
            transform: [{ transform: [X, _, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: k() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: tg() }],
            "translate-x": [{ "translate-x": tg() }],
            "translate-y": [{ "translate-y": tg() }],
            "translate-z": [{ "translate-z": tg() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: tr() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: tr() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  X,
                  _,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": T() }],
            "scroll-mx": [{ "scroll-mx": T() }],
            "scroll-my": [{ "scroll-my": T() }],
            "scroll-ms": [{ "scroll-ms": T() }],
            "scroll-me": [{ "scroll-me": T() }],
            "scroll-mt": [{ "scroll-mt": T() }],
            "scroll-mr": [{ "scroll-mr": T() }],
            "scroll-mb": [{ "scroll-mb": T() }],
            "scroll-ml": [{ "scroll-ml": T() }],
            "scroll-p": [{ "scroll-p": T() }],
            "scroll-px": [{ "scroll-px": T() }],
            "scroll-py": [{ "scroll-py": T() }],
            "scroll-ps": [{ "scroll-ps": T() }],
            "scroll-pe": [{ "scroll-pe": T() }],
            "scroll-pt": [{ "scroll-pt": T() }],
            "scroll-pr": [{ "scroll-pr": T() }],
            "scroll-pb": [{ "scroll-pb": T() }],
            "scroll-pl": [{ "scroll-pl": T() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  X,
                  _,
                ],
              },
            ],
            fill: [{ fill: ["none", ...tr()] }],
            "stroke-w": [{ stroke: [C, H, U, W] }],
            stroke: [{ stroke: ["none", ...tr()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    },
    39898: (t, e, r) => {
      r.d(e, { A: () => p });
      var i = r(12115);
      let n = (0, i.createContext)({
        color: "currentColor",
        size: "1em",
        weight: "regular",
        mirrored: !1,
      });
      var s = Object.defineProperty,
        o = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        u = (t, e, r) =>
          e in t
            ? s(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        h = (t, e) => {
          for (var r in e || (e = {})) a.call(e, r) && u(t, r, e[r]);
          if (o) for (var r of o(e)) l.call(e, r) && u(t, r, e[r]);
          return t;
        },
        d = (t, e) => {
          var r = {};
          for (var i in t) a.call(t, i) && 0 > e.indexOf(i) && (r[i] = t[i]);
          if (null != t && o)
            for (var i of o(t))
              0 > e.indexOf(i) && l.call(t, i) && (r[i] = t[i]);
          return r;
        };
      let c = (0, i.forwardRef)((t, e) => {
        let {
            alt: r,
            color: s,
            size: o,
            weight: a,
            mirrored: l,
            children: u,
            weights: c,
          } = t,
          p = d(t, [
            "alt",
            "color",
            "size",
            "weight",
            "mirrored",
            "children",
            "weights",
          ]),
          m = (0, i.useContext)(n),
          {
            color: f = "currentColor",
            size: g,
            weight: v = "regular",
            mirrored: y = !1,
          } = m,
          b = d(m, ["color", "size", "weight", "mirrored"]);
        return i.createElement(
          "svg",
          h(
            h(
              {
                ref: e,
                xmlns: "http://www.w3.org/2000/svg",
                width: null != o ? o : g,
                height: null != o ? o : g,
                fill: null != s ? s : f,
                viewBox: "0 0 256 256",
                transform: l || y ? "scale(-1, 1)" : void 0,
              },
              b
            ),
            p
          ),
          !!r && i.createElement("title", null, r),
          u,
          c.get(null != a ? a : v)
        );
      });
      c.displayName = "IconBase";
      let p = c;
    },
    41232: (t, e, r) => {
      r.d(e, { X: () => n });
      let i = (t) => null !== t;
      function n(t, { repeat: e, repeatType: r = "loop" }, n) {
        let s = t.filter(i),
          o = e && "loop" !== r && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== n ? n : s[o];
      }
    },
    41917: (t, e, r) => {
      r.d(e, { p: () => i });
      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    42198: (t, e, r) => {
      r.d(e, { K: () => i });
      function i(t, e, r) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          let n = r?.[t] ?? i.querySelectorAll(t);
          return n ? Array.from(n) : [];
        }
        return Array.from(t);
      }
    },
    43128: (t, e, r) => {
      r.d(e, { W: () => i });
      function i(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
    },
    45471: (t, e, r) => {
      r.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => o,
        uj: () => n,
        vh: () => a,
        vw: () => l,
      });
      let i = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        n = i("deg"),
        s = i("%"),
        o = i("px"),
        a = i("vh"),
        l = i("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    45818: (t, e, r) => {
      r.d(e, { q: () => i });
      let i = (t, e, r) => {
        let i = e - t;
        return 0 === i ? 1 : (r - t) / i;
      };
    },
    47215: (t, e, r) => {
      r.d(e, { X: () => n, f: () => i });
      let i = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
    47437: (t, e, r) => {
      r.d(e, { j: () => T });
      var i = r(21109),
        n = r(54542);
      function s(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      var o = r(67730),
        a = r(24935),
        l = r(12083);
      function u(t, e) {
        return (r) => (r > 0 ? e : t);
      }
      let h = (t, e, r) => {
          let i = t * t,
            n = r * (e * e - i) + i;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        d = [o.u, a.B, l.V],
        c = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = c(t);
        if (
          ((0, n.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let r = e.parse(t);
        return (
          e === l.V &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: i }) {
              (t /= 360), (r /= 100);
              let n = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let i = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  l = 2 * r - i;
                (n = s(l, i, t + 1 / 3)),
                  (o = s(l, i, t)),
                  (a = s(l, i, t - 1 / 3));
              } else n = o = a = r;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let m = (t, e) => {
        let r = p(t),
          n = p(e);
        if (!r || !n) return u(t, e);
        let s = { ...r };
        return (t) => (
          (s.red = h(r.red, n.red, t)),
          (s.green = h(r.green, n.green, t)),
          (s.blue = h(r.blue, n.blue, t)),
          (s.alpha = (0, i.k)(r.alpha, n.alpha, t)),
          a.B.transform(s)
        );
      };
      var f = r(97007),
        g = r(82897),
        v = r(93013),
        y = r(93676);
      let b = new Set(["none", "hidden"]);
      function x(t, e) {
        return (r) => (0, i.k)(t, e, r);
      }
      function w(t) {
        return "number" == typeof t
          ? x
          : "string" == typeof t
          ? (0, y.p)(t)
            ? u
            : g.y.test(t)
            ? m
            : S
          : Array.isArray(t)
          ? k
          : "object" == typeof t
          ? g.y.test(t)
            ? m
            : P
          : u;
      }
      function k(t, e) {
        let r = [...t],
          i = r.length,
          n = t.map((t, r) => w(t)(t, e[r]));
        return (t) => {
          for (let e = 0; e < i; e++) r[e] = n[e](t);
          return r;
        };
      }
      function P(t, e) {
        let r = { ...t, ...e },
          i = {};
        for (let n in r)
          void 0 !== t[n] && void 0 !== e[n] && (i[n] = w(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in i) r[e] = i[e](t);
          return r;
        };
      }
      let S = (t, e) => {
        let r = v.f.createTransformer(e),
          i = (0, v.V)(t),
          s = (0, v.V)(e);
        return i.indexes.var.length === s.indexes.var.length &&
          i.indexes.color.length === s.indexes.color.length &&
          i.indexes.number.length >= s.indexes.number.length
          ? (b.has(t) && !s.values.length) || (b.has(e) && !i.values.length)
            ? (function (t, e) {
                return b.has(t)
                  ? (r) => (r <= 0 ? t : e)
                  : (r) => (r >= 1 ? e : t);
              })(t, e)
            : (0, f.F)(
                k(
                  (function (t, e) {
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let s = e.types[n],
                        o = t.indexes[s][i[s]],
                        a = t.values[o] ?? 0;
                      (r[n] = a), i[s]++;
                    }
                    return r;
                  })(i, s),
                  s.values
                ),
                r
              )
          : ((0, n.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function T(t, e, r) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof r
          ? (0, i.k)(t, e, r)
          : w(t)(t, e);
      }
    },
    47705: (t, e, r) => {
      r.d(e, { K: () => i });
      let i = (t, e, r = 10) => {
        let i = "",
          n = Math.max(Math.round(e / r), 2);
        for (let e = 0; e < n; e++) i += t(e / (n - 1)) + ", ";
        return `linear(${i.substring(0, i.length - 2)})`;
      };
    },
    48373: (t, e, r) => {
      r.d(e, { a: () => f });
      var i = r(12115),
        n = r(39898);
      let s = new Map([
        [
          "bold",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z",
            })
          ),
        ],
        [
          "duotone",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M208,96l-80,80L48,96Z",
              opacity: "0.2",
            }),
            i.createElement("path", {
              d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z",
            })
          ),
        ],
        [
          "fill",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z",
            })
          ),
        ],
        [
          "light",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z",
            })
          ),
        ],
        [
          "regular",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "thin",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z",
            })
          ),
        ],
      ]);
      var o = Object.defineProperty,
        a = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (t, e, r) =>
          e in t
            ? o(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        p = (t, e) => {
          for (var r in e || (e = {})) h.call(e, r) && c(t, r, e[r]);
          if (u) for (var r of u(e)) d.call(e, r) && c(t, r, e[r]);
          return t;
        },
        m = (t, e) => a(t, l(e));
      let f = (0, i.forwardRef)((t, e) =>
        i.createElement(n.A, m(p({ ref: e }, t), { weights: s }))
      );
      f.displayName = "CaretDown";
    },
    49033: (t, e, r) => {
      t.exports = r(22436);
    },
    51508: (t, e, r) => {
      r.d(e, { Q: () => i });
      let i = (0, r(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    52596: (t, e, r) => {
      function i() {
        for (var t, e, r = 0, i = "", n = arguments.length; r < n; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                i,
                n = "";
              if ("string" == typeof e || "number" == typeof e) n += e;
              else if ("object" == typeof e)
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (r = 0; r < s; r++)
                    e[r] && (i = t(e[r])) && (n && (n += " "), (n += i));
                } else for (i in e) e[i] && (n && (n += " "), (n += i));
              return n;
            })(t)) &&
            (i && (i += " "), (i += e));
        return i;
      }
      r.d(e, { $: () => i, A: () => n });
      let n = i;
    },
    54542: (t, e, r) => {
      r.d(e, { $: () => i, V: () => n });
      let i = () => {},
        n = () => {};
    },
    56668: (t, e, r) => {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, { Ai: () => n, Kq: () => i });
    },
    58437: (t, e, r) => {
      r.d(e, { I: () => o });
      var i = r(23387);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var s = r(24744);
      function o(t, e) {
        let r = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (r = !0),
          u = n.reduce(
            (t, r) => (
              (t[r] = (function (t, e) {
                let r = new Set(),
                  i = new Set(),
                  n = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function h(e) {
                  a.has(e) && (d.schedule(e), t()), u++, e(l);
                }
                let d = {
                  schedule: (t, e = !1, s = !1) => {
                    let o = s && n ? r : i;
                    return e && a.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), a.delete(t);
                  },
                  process: (t) => {
                    if (((l = t), n)) {
                      o = !0;
                      return;
                    }
                    (n = !0),
                      ([r, i] = [i, r]),
                      r.forEach(h),
                      e && s.Q.value && s.Q.value.frameloop[e].push(u),
                      (u = 0),
                      r.clear(),
                      (n = !1),
                      o && ((o = !1), d.process(t));
                  },
                };
                return d;
              })(l, e ? r : void 0)),
              t
            ),
            {}
          ),
          {
            read: h,
            resolveKeyframes: d,
            update: c,
            preRender: p,
            render: m,
            postRender: f,
          } = u,
          g = () => {
            let n = i.W.useManualTiming ? a.timestamp : performance.now();
            (r = !1),
              i.W.useManualTiming ||
                (a.delta = o
                  ? 1e3 / 60
                  : Math.max(Math.min(n - a.timestamp, 40), 1)),
              (a.timestamp = n),
              (a.isProcessing = !0),
              h.process(a),
              d.process(a),
              c.process(a),
              p.process(a),
              m.process(a),
              f.process(a),
              (a.isProcessing = !1),
              r && e && ((o = !1), t(g));
          },
          v = () => {
            (r = !0), (o = !0), a.isProcessing || t(g);
          };
        return {
          schedule: n.reduce((t, e) => {
            let i = u[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (r || v(), i.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < n.length; e++) u[n[e]].cancel(t);
          },
          state: a,
          steps: u,
        };
      }
    },
    59282: (t, e, r) => {
      r.d(e, { po: () => s, tn: () => a, yT: () => o });
      var i = r(567),
        n = r(16498);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, n.G)(s),
        a = (0, i.V)(s);
    },
    60098: (t, e, r) => {
      r.d(e, { OQ: () => h, bt: () => l });
      var i = r(75626),
        n = r(62923),
        s = r(74261),
        o = r(69515);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "12.7.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let r = s.k.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.v());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, n.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    60760: (t, e, r) => {
      r.d(e, { N: () => v });
      var i = r(95155),
        n = r(12115),
        s = r(90869),
        o = r(82885),
        a = r(97494),
        l = r(80845),
        u = r(51508);
      class h extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              r = (t instanceof HTMLElement && t.offsetWidth) || 0,
              i = this.props.sizeRef.current;
            (i.height = e.offsetHeight || 0),
              (i.width = e.offsetWidth || 0),
              (i.top = e.offsetTop),
              (i.left = e.offsetLeft),
              (i.right = r - i.width - i.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(t) {
        let { children: e, isPresent: r, anchorX: s } = t,
          o = (0, n.useId)(),
          a = (0, n.useRef)(null),
          l = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: d } = (0, n.useContext)(u.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: e, top: i, left: n, right: u } = l.current;
            if (r || !a.current || !t || !e) return;
            let h = "left" === s ? `left: ${n}` : `right: ${u}`;
            a.current.dataset.motionPopId = o;
            let c = document.createElement("style");
            return (
              d && (c.nonce = d),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${h}px !important;
            top: ${i}px !important;
          }
        `),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [r]),
          (0, i.jsx)(h, {
            isPresent: r,
            childRef: a,
            sizeRef: l,
            children: n.cloneElement(e, { ref: a }),
          })
        );
      }
      let c = (t) => {
        let {
            children: e,
            initial: r,
            isPresent: s,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: h,
            mode: c,
            anchorX: m,
          } = t,
          f = (0, o.M)(p),
          g = (0, n.useId)(),
          v = (0, n.useCallback)(
            (t) => {
              for (let e of (f.set(t, !0), f.values())) if (!e) return;
              a && a();
            },
            [f, a]
          ),
          y = (0, n.useMemo)(
            () => ({
              id: g,
              initial: r,
              isPresent: s,
              custom: u,
              onExitComplete: v,
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            h ? [Math.random(), v] : [s, v]
          );
        return (
          (0, n.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [s]),
          n.useEffect(() => {
            s || f.size || !a || a();
          }, [s]),
          "popLayout" === c &&
            (e = (0, i.jsx)(d, { isPresent: s, anchorX: m, children: e })),
          (0, i.jsx)(l.t.Provider, { value: y, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var m = r(32082);
      let f = (t) => t.key || "";
      function g(t) {
        let e = [];
        return (
          n.Children.forEach(t, (t) => {
            (0, n.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let v = (t) => {
        let {
            children: e,
            custom: r,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: d = "sync",
            propagate: p = !1,
            anchorX: v = "left",
          } = t,
          [y, b] = (0, m.xQ)(p),
          x = (0, n.useMemo)(() => g(e), [e]),
          w = p && !y ? [] : x.map(f),
          k = (0, n.useRef)(!0),
          P = (0, n.useRef)(x),
          S = (0, o.M)(() => new Map()),
          [T, A] = (0, n.useState)(x),
          [E, M] = (0, n.useState)(x);
        (0, a.E)(() => {
          (k.current = !1), (P.current = x);
          for (let t = 0; t < E.length; t++) {
            let e = f(E[t]);
            w.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1);
          }
        }, [E, w.length, w.join("-")]);
        let V = [];
        if (x !== T) {
          let t = [...x];
          for (let e = 0; e < E.length; e++) {
            let r = E[e],
              i = f(r);
            w.includes(i) || (t.splice(e, 0, r), V.push(r));
          }
          return "wait" === d && V.length && (t = V), M(g(t)), A(x), null;
        }
        let { forceRender: C } = (0, n.useContext)(s.L);
        return (0, i.jsx)(i.Fragment, {
          children: E.map((t) => {
            let e = f(t),
              n = (!p || !!y) && (x === E || w.includes(e));
            return (0, i.jsx)(
              c,
              {
                isPresent: n,
                initial: (!k.current || !!l) && void 0,
                custom: r,
                presenceAffectsLayout: h,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!S.has(e)) return;
                      S.set(e, !0);
                      let t = !0;
                      S.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (C?.(), M(P.current), p && b?.(), u && u());
                    },
                anchorX: v,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    62923: (t, e, r) => {
      r.d(e, { f: () => i });
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    63704: (t, e, r) => {
      r.d(e, { q: () => i });
      let i = { layout: 0, mainThread: 0, waapi: 0 };
    },
    66479: (t, e, r) => {
      r.d(e, { S: () => i });
      let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    67052: (t, e, r) => {
      r.d(e, { Q: () => f });
      var i = r(12115),
        n = r(39898);
      let s = new Map([
        [
          "bold",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z",
            })
          ),
        ],
        [
          "duotone",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,128l-72,72V56Z",
              opacity: "0.2",
            }),
            i.createElement("path", {
              d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z",
            })
          ),
        ],
        [
          "fill",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z",
            })
          ),
        ],
        [
          "light",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z",
            })
          ),
        ],
        [
          "regular",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
            })
          ),
        ],
        [
          "thin",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z",
            })
          ),
        ],
      ]);
      var o = Object.defineProperty,
        a = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        c = (t, e, r) =>
          e in t
            ? o(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        p = (t, e) => {
          for (var r in e || (e = {})) h.call(e, r) && c(t, r, e[r]);
          if (u) for (var r of u(e)) d.call(e, r) && c(t, r, e[r]);
          return t;
        },
        m = (t, e) => a(t, l(e));
      let f = (0, i.forwardRef)((t, e) =>
        i.createElement(n.A, m(p({ ref: e }, t), { weights: s }))
      );
      f.displayName = "ArrowRight";
    },
    67730: (t, e, r) => {
      r.d(e, { u: () => n });
      var i = r(24935);
      let n = {
        test: (0, r(97219).$)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            i = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (r = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (r += r),
                (i += i),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(i, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: i.B.transform,
      };
    },
    68972: (t, e, r) => {
      r.d(e, { B: () => i });
      let i = "undefined" != typeof window;
    },
    69515: (t, e, r) => {
      r.d(e, { Gt: () => n, PP: () => a, WG: () => s, uv: () => o });
      var i = r(19827);
      let {
        schedule: n,
        cancel: s,
        state: o,
        steps: a,
      } = (0, r(58437).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.l,
        !0
      );
    },
    74261: (t, e, r) => {
      let i;
      r.d(e, { k: () => a });
      var n = r(23387),
        s = r(69515);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.uv.isProcessing || n.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(o);
        },
      };
    },
    74466: (t, e, r) => {
      r.d(e, { F: () => o });
      var i = r(52596);
      let n = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
        s = i.$,
        o = (t, e) => (r) => {
          var i;
          if ((null == e ? void 0 : e.variants) == null)
            return s(
              t,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: o, defaultVariants: a } = e,
            l = Object.keys(o).map((t) => {
              let e = null == r ? void 0 : r[t],
                i = null == a ? void 0 : a[t];
              if (null === e) return null;
              let s = n(e) || n(i);
              return o[t][s];
            }),
            u =
              r &&
              Object.entries(r).reduce((t, e) => {
                let [r, i] = e;
                return void 0 === i || (t[r] = i), t;
              }, {});
          return s(
            t,
            l,
            null == e || null == (i = e.compoundVariants)
              ? void 0
              : i.reduce((t, e) => {
                  let { class: r, className: i, ...n } = e;
                  return Object.entries(n).every((t) => {
                    let [e, r] = t;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...u }[e])
                      : { ...a, ...u }[e] === r;
                  })
                    ? [...t, r, i]
                    : t;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    75626: (t, e, r) => {
      r.d(e, { v: () => n });
      var i = r(56668);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.Kq)(this.subscriptions, t),
            () => (0, i.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, r) {
          let i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, r);
            else
              for (let n = 0; n < i; n++) {
                let i = this.subscriptions[n];
                i && i(t, e, r);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    75799: (t, e, r) => {
      r.d(e, { nl: () => p });
      let i = (t) => `https://x.com/${t.user.screen_name}/status/${t.id_str}`,
        n = (t) =>
          `https://x.com/${"string" == typeof t ? t : t.user.screen_name}`,
        s = (t) => `https://x.com/intent/like?tweet_id=${t.id_str}`,
        o = (t) => `https://x.com/intent/tweet?in_reply_to=${t.id_str}`,
        a = (t) =>
          `https://x.com/intent/follow?screen_name=${t.user.screen_name}`,
        l = (t) => `https://x.com/hashtag/${t.text}`,
        u = (t) => `https://x.com/search?q=%24${t.text}`,
        h = (t) =>
          `https://x.com/${t.in_reply_to_screen_name}/status/${t.in_reply_to_status_id_str}`;
      function d(t) {
        let e = Array.from(t.text),
          r = [{ indices: t.display_text_range, type: "text" }];
        return (
          c(r, "hashtag", t.entities.hashtags),
          c(r, "mention", t.entities.user_mentions),
          c(r, "url", t.entities.urls),
          c(r, "symbol", t.entities.symbols),
          t.entities.media && c(r, "media", t.entities.media),
          (function (t, e) {
            t.entities.media &&
              t.entities.media[0].indices[0] < t.display_text_range[1] &&
              (t.display_text_range[1] = t.entities.media[0].indices[0]);
            let r = e.at(-1);
            r &&
              r.indices[1] > t.display_text_range[1] &&
              (r.indices[1] = t.display_text_range[1]);
          })(t, r),
          r.map((t) => {
            let r = e.slice(t.indices[0], t.indices[1]).join("");
            switch (t.type) {
              case "hashtag":
                return Object.assign(t, { href: l(t), text: r });
              case "mention":
                return Object.assign(t, { href: n(t.screen_name), text: r });
              case "url":
              case "media":
                return Object.assign(t, {
                  href: t.expanded_url,
                  text: t.display_url,
                });
              case "symbol":
                return Object.assign(t, { href: u(t), text: r });
              default:
                return Object.assign(t, { text: r });
            }
          })
        );
      }
      function c(t, e, r) {
        for (let i of r)
          for (let [r, n] of t.entries()) {
            if (n.indices[0] > i.indices[0] || n.indices[1] < i.indices[1])
              continue;
            let s = [{ ...i, type: e }];
            n.indices[0] < i.indices[0] &&
              s.unshift({
                indices: [n.indices[0], i.indices[0]],
                type: "text",
              }),
              n.indices[1] > i.indices[1] &&
                s.push({ indices: [i.indices[1], n.indices[1]], type: "text" }),
              t.splice(r, 1, ...s);
            break;
          }
      }
      let p = (t) => ({
        ...t,
        url: i(t),
        user: { ...t.user, url: n(t), follow_url: a(t) },
        like_url: s(t),
        reply_url: o(t),
        in_reply_to_url: t.in_reply_to_screen_name ? h(t) : void 0,
        entities: d(t),
        quoted_tweet: t.quoted_tweet
          ? {
              ...t.quoted_tweet,
              url: i(t.quoted_tweet),
              entities: d(t.quoted_tweet),
            }
          : void 0,
      });
    },
    77778: (t, e, r) => {
      r.d(e, { o: () => G, L: () => q });
      var i = r(43128);
      function n(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      var s = r(63704),
        o = r(47215),
        a = r(18203),
        l = r(77782),
        u = r(47437),
        h = r(97007),
        d = r(47705),
        c = r(24162),
        p = r(62923);
      function m(t, e, r) {
        let i = Math.max(e - 5, 0);
        return (0, p.f)(r - t(i), e - i);
      }
      let f = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var g = r(54542);
      function v(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let y = ["duration", "bounce"],
        b = ["stiffness", "damping", "mass"];
      function x(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function w(t = f.visualDuration, e = f.bounce) {
        let r,
          i =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: s, restDelta: a } = i,
          u = i.keyframes[0],
          h = i.keyframes[i.keyframes.length - 1],
          c = { done: !1, value: u },
          {
            stiffness: p,
            damping: k,
            mass: P,
            duration: S,
            velocity: T,
            isResolvedFromDuration: A,
          } = (function (t) {
            let e = {
              velocity: f.velocity,
              stiffness: f.stiffness,
              damping: f.damping,
              mass: f.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!x(t, b) && x(t, y))
              if (t.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * t.visualDuration),
                  i = r * r,
                  n = 2 * (0, l.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                e = { ...e, mass: f.mass, stiffness: i, damping: n };
              } else {
                let r = (function ({
                  duration: t = f.duration,
                  bounce: e = f.bounce,
                  velocity: r = f.velocity,
                  mass: i = f.mass,
                }) {
                  let n, s;
                  (0, g.$)(
                    t <= (0, o.f)(f.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - e;
                  (a = (0, l.q)(f.minDamping, f.maxDamping, a)),
                    (t = (0, l.q)(f.minDuration, f.maxDuration, (0, o.X)(t))),
                    a < 1
                      ? ((n = (e) => {
                          let i = e * a,
                            n = i * t;
                          return 0.001 - ((i - r) / v(e, a)) * Math.exp(-n);
                        }),
                        (s = (e) => {
                          let i = e * a * t,
                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-i),
                            l = v(Math.pow(e, 2), a);
                          return (
                            ((i * r + r - s) *
                              o *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                        (s = (e) => t * t * (r - e) * Math.exp(-e * t)));
                  let u = (function (t, e, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                    return i;
                  })(n, s, 5 / t);
                  if (((t = (0, o.f)(t)), isNaN(u)))
                    return {
                      stiffness: f.stiffness,
                      damping: f.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(u, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(i * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...r, mass: f.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...i, velocity: -(0, o.X)(i.velocity || 0) }),
          E = T || 0,
          M = k / (2 * Math.sqrt(p * P)),
          V = h - u,
          C = (0, o.X)(Math.sqrt(p / P)),
          j = 5 > Math.abs(V);
        if (
          (s || (s = j ? f.restSpeed.granular : f.restSpeed.default),
          a || (a = j ? f.restDelta.granular : f.restDelta.default),
          M < 1)
        ) {
          let t = v(C, M);
          r = (e) =>
            h -
            Math.exp(-M * C * e) *
              (((E + M * C * V) / t) * Math.sin(t * e) + V * Math.cos(t * e));
        } else if (1 === M)
          r = (t) => h - Math.exp(-C * t) * (V + (E + C * V) * t);
        else {
          let t = C * Math.sqrt(M * M - 1);
          r = (e) => {
            let r = Math.exp(-M * C * e),
              i = Math.min(t * e, 300);
            return (
              h -
              (r * ((E + M * C * V) * Math.sinh(i) + t * V * Math.cosh(i))) / t
            );
          };
        }
        let D = {
          calculatedDuration: (A && S) || null,
          next: (t) => {
            let e = r(t);
            if (A) c.done = t >= S;
            else {
              let i = 0;
              M < 1 && (i = 0 === t ? (0, o.f)(E) : m(r, t, e));
              let n = Math.abs(h - e) <= a;
              c.done = Math.abs(i) <= s && n;
            }
            return (c.value = c.done ? h : e), c;
          },
          toString: () => {
            let t = Math.min(n(D), 2e4),
              e = (0, d.K)((e) => D.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return D;
      }
      function k({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: i = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d,
          c,
          p = t[0],
          f = { done: !1, value: p },
          g = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l || Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = r * e,
          b = p + y,
          x = void 0 === o ? b : o(b);
        x !== b && (y = x - p);
        let k = (t) => -y * Math.exp(-t / i),
          P = (t) => x + k(t),
          S = (t) => {
            let e = k(t),
              r = P(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : r);
          },
          T = (t) => {
            g(f.value) &&
              ((d = t),
              (c = w({
                keyframes: [f.value, v(f.value)],
                velocity: m(P, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), S(t), T(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || S(t), f);
            },
          }
        );
      }
      w.applyToOptions = (t) => {
        let e = (function (t, e = 100, r) {
          let i = r({ ...t, keyframes: [0, e] }),
            s = Math.min(n(i), 2e4);
          return {
            type: "keyframes",
            ease: (t) => i.next(s * t).value / e,
            duration: (0, o.X)(s),
          };
        })(t, 100, w);
        return (
          (t.ease = (0, c.n)() ? e.ease : "easeOut"),
          (t.duration = (0, o.f)(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      var P = r(83945);
      let S = (0, P.A)(0.42, 0, 1, 1),
        T = (0, P.A)(0, 0, 0.58, 1),
        A = (0, P.A)(0.42, 0, 0.58, 1),
        E = (t) => Array.isArray(t) && "number" != typeof t[0];
      var M = r(26826),
        V = r(19827),
        C = r(14279),
        j = r(95190),
        D = r(59282);
      let R = {
          linear: V.l,
          easeIn: S,
          easeInOut: A,
          easeOut: T,
          circIn: D.po,
          circInOut: D.tn,
          circOut: D.yT,
          backIn: j.dg,
          backInOut: j.ZZ,
          backOut: j.Sz,
          anticipate: C.b,
        },
        L = (t) => {
          if ((0, M.D)(t)) {
            (0, g.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, i, n] = t;
            return (0, P.A)(e, r, i, n);
          }
          return "string" == typeof t
            ? ((0, g.V)(void 0 !== R[t], `Invalid easing type '${t}'`), R[t])
            : t;
        };
      var O = r(97846),
        F = r(7345);
      function B({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: i = "easeInOut",
      }) {
        var n;
        let s = E(i) ? i.map(L) : L(i),
          o = { done: !1, value: e[0] },
          a =
            ((n = r && r.length === e.length ? r : (0, F.Z)(e)),
            n.map((e) => e * t)),
          l = (0, O.G)(a, e, {
            ease: Array.isArray(s)
              ? s
              : e.map(() => s || A).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = l(e)), (o.done = e >= t), o),
        };
      }
      var I = r(86111),
        $ = r(69515),
        z = r(74261);
      let _ = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => $.Gt.update(e, !0),
          stop: () => (0, $.WG)(e),
          now: () => ($.uv.isProcessing ? $.uv.timestamp : z.k.now()),
        };
      };
      var U = r(41232);
      let W = { decay: k, inertia: k, tween: B, keyframes: B, spring: w },
        N = (t) => t / 100;
      class G extends I.i {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: r,
              element: i,
              keyframes: n,
            } = this.options,
            s = i?.KeyframeResolver || a.h;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e,
            r,
            {
              type: s = "keyframes",
              repeat: o = 0,
              repeatDelay: a = 0,
              repeatType: l,
              velocity: d = 0,
            } = this.options,
            c = (0, i.W)(s) ? s : W[s] || B;
          c !== B &&
            "number" != typeof t[0] &&
            ((e = (0, h.F)(N, (0, u.j)(t[0], t[1]))), (t = [0, 100]));
          let p = c({ ...this.options, keyframes: t });
          "mirror" === l &&
            (r = c({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -d,
            })),
            null === p.calculatedDuration && (p.calculatedDuration = n(p));
          let { calculatedDuration: m } = p,
            f = m + a;
          return {
            generator: p,
            mirroredGenerator: r,
            mapPercentToKeyframes: e,
            calculatedDuration: m,
            resolvedDuration: f,
            totalDuration: f * (o + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          s.q.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: d,
          } = r;
          if (null === this.startTime) return n.next(0);
          let {
            delay: c,
            repeat: p,
            repeatType: m,
            repeatDelay: f,
            onUpdate: g,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let b = this.currentTime,
            x = n;
          if (p) {
            let t = Math.min(this.currentTime, h) / d,
              e = Math.floor(t),
              r = t % 1;
            !r && t >= 1 && (r = 1),
              1 === r && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === m
                  ? ((r = 1 - r), f && (r -= f / d))
                  : "mirror" === m && (x = s)),
              (b = (0, l.q)(0, 1, r) * d);
          }
          let w = y ? { done: !1, value: a[0] } : x.next(b);
          o && (w.value = o(w.value));
          let { done: k } = w;
          y ||
            null === u ||
            (k =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && k));
          return (
            P && void 0 !== i && (w.value = (0, U.X)(a, this.options, i)),
            g && g(w.value),
            P && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, o.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, o.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, o.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, o.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = _, onPlay: e, startTime: r } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = r ?? this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"), (this.holdTime = this.currentTime ?? 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            s.q.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        get finished() {
          return this.currentFinishedPromise;
        }
      }
      function q(t) {
        return new G(t);
      }
    },
    77782: (t, e, r) => {
      r.d(e, { q: () => i });
      let i = (t, e, r) => (r > e ? e : r < t ? t : r);
    },
    79280: (t, e, r) => {
      r.d(e, { E4: () => a, Hr: () => d, W9: () => h });
      var i = r(23082),
        n = r(45471),
        s = r(87387),
        o = r(4576);
      let a = (t) => t === i.ai || t === n.px,
        l = new Set(["x", "y", "z"]),
        u = s.U.filter((t) => !l.has(t));
      function h(t) {
        let e = [];
        return (
          u.forEach((r) => {
            let i = t.getValue(r);
            void 0 !== i &&
              (e.push([r, i.get()]), i.set(+!!r.startsWith("scale")));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(r),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(r),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, o.r)(e, "x"),
        y: (t, { transform: e }) => (0, o.r)(e, "y"),
      };
      (d.translateX = d.x), (d.translateY = d.y);
    },
    80845: (t, e, r) => {
      r.d(e, { t: () => i });
      let i = (0, r(12115).createContext)(null);
    },
    82885: (t, e, r) => {
      r.d(e, { M: () => n });
      var i = r(12115);
      function n(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    82897: (t, e, r) => {
      r.d(e, { y: () => o });
      var i = r(67730),
        n = r(12083),
        s = r(24935);
      let o = {
        test: (t) => s.B.test(t) || i.u.test(t) || n.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : n.V.test(t)
            ? n.V.parse(t)
            : i.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : n.V.transform(t),
      };
    },
    83945: (t, e, r) => {
      r.d(e, { A: () => s });
      var i = r(19827);
      let n = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function s(t, e, r, s) {
        if (t === e && r === s) return i.l;
        let o = (e) =>
          (function (t, e, r, i, s) {
            let o,
              a,
              l = 0;
            do (o = n((a = e + (r - e) / 2), i, s) - t) > 0 ? (r = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : n(o(t), e, s));
      }
    },
    84528: (t, e, r) => {
      r.d(e, { d: () => i });
      let i = { current: !1 };
    },
    86111: (t, e, r) => {
      r.d(e, { i: () => d });
      var i = r(74261),
        n = r(18203),
        s = r(84528),
        o = r(43128),
        a = r(54542),
        l = r(93013);
      let u = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (l.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var h = r(41232);
      class d {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = i.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: r,
              repeat: n,
              repeatDelay: s,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = i.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: n,
            velocity: l,
            delay: d,
            onComplete: c,
            onUpdate: p,
            isGenerator: m,
          } = this.options;
          if (
            !m &&
            !(function (t, e, r, i) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                l = u(n, e),
                h = u(s, e);
              return (
                (0, a.$)(
                  l === h,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!l &&
                  !!h &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let r = 0; r < t.length; r++)
                      if (t[r] !== e) return !0;
                  })(t) ||
                    (("spring" === r || (0, o.W)(r)) && i))
              );
            })(t, r, n, l)
          )
            if (s.d.current || !d) {
              p && p((0, h.X)(t, this.options, e)),
                c && c(),
                this.resolveFinishedPromise();
              return;
            } else this.options.duration = 0;
          let f = this.initPlayback(t, e);
          !1 !== f &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...f }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    87387: (t, e, r) => {
      r.d(e, { U: () => i, f: () => n });
      let i = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(i);
    },
    88611: (t, e, r) => {
      let i;
      r.d(e, { n: () => tl });
      var n = r(12115),
        s = r(49033),
        o = Object.prototype.hasOwnProperty;
      let a = new WeakMap(),
        l = () => {},
        u = l(),
        h = Object,
        d = (t) => t === u,
        c = (t) => "function" == typeof t,
        p = (t, e) => ({ ...t, ...e }),
        m = (t) => c(t.then),
        f = {},
        g = {},
        v = "undefined",
        y = typeof window != v,
        b = typeof document != v,
        x = y && "Deno" in window,
        w = () => y && typeof window.requestAnimationFrame != v,
        k = (t, e) => {
          let r = a.get(t);
          return [
            () => (!d(e) && t.get(e)) || f,
            (i) => {
              if (!d(e)) {
                let n = t.get(e);
                e in g || (g[e] = n), r[5](e, p(n, i), n || f);
              }
            },
            r[6],
            () => (!d(e) && e in g ? g[e] : (!d(e) && t.get(e)) || f),
          ];
        },
        P = !0,
        [S, T] =
          y && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [l, l],
        A = {
          initFocus: (t) => (
            b && document.addEventListener("visibilitychange", t),
            S("focus", t),
            () => {
              b && document.removeEventListener("visibilitychange", t),
                T("focus", t);
            }
          ),
          initReconnect: (t) => {
            let e = () => {
                (P = !0), t();
              },
              r = () => {
                P = !1;
              };
            return (
              S("online", e),
              S("offline", r),
              () => {
                T("online", e), T("offline", r);
              }
            );
          },
        },
        E = !n.useId,
        M = !y || x,
        V = (t) => (w() ? window.requestAnimationFrame(t) : setTimeout(t, 1)),
        C = M ? n.useEffect : n.useLayoutEffect,
        j = "undefined" != typeof navigator && navigator.connection,
        D =
          !M &&
          j &&
          (["slow-2g", "2g"].includes(j.effectiveType) || j.saveData),
        R = new WeakMap(),
        L = (t, e) => h.prototype.toString.call(t) === `[object ${e}]`,
        O = 0,
        F = (t) => {
          let e,
            r,
            i = typeof t,
            n = L(t, "Date"),
            s = L(t, "RegExp"),
            o = L(t, "Object");
          if (h(t) !== t || n || s)
            e = n
              ? t.toJSON()
              : "symbol" == i
              ? t.toString()
              : "string" == i
              ? JSON.stringify(t)
              : "" + t;
          else {
            if ((e = R.get(t))) return e;
            if (((e = ++O + "~"), R.set(t, e), Array.isArray(t))) {
              for (r = 0, e = "@"; r < t.length; r++) e += F(t[r]) + ",";
              R.set(t, e);
            }
            if (o) {
              e = "#";
              let i = h.keys(t).sort();
              for (; !d((r = i.pop())); )
                d(t[r]) || (e += r + ":" + F(t[r]) + ",");
              R.set(t, e);
            }
          }
          return e;
        },
        B = (t) => {
          if (c(t))
            try {
              t = t();
            } catch (e) {
              t = "";
            }
          let e = t;
          return [
            (t =
              "string" == typeof t
                ? t
                : (Array.isArray(t) ? t.length : t)
                ? F(t)
                : ""),
            e,
          ];
        },
        I = 0,
        $ = () => ++I;
      async function z() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        let [i, n, s, o] = e,
          l = p(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof o ? { revalidate: o } : o || {}
          ),
          h = l.populateCache,
          f = l.rollbackOnError,
          g = l.optimisticData,
          v = (t) => ("function" == typeof f ? f(t) : !1 !== f),
          y = l.throwOnError;
        if (c(n)) {
          let t = [];
          for (let e of i.keys())
            !/^\$(inf|sub)\$/.test(e) && n(i.get(e)._k) && t.push(e);
          return Promise.all(t.map(b));
        }
        return b(n);
        async function b(t) {
          let r,
            [n] = B(t);
          if (!n) return;
          let [o, p] = k(i, n),
            [f, b, x, w] = a.get(i),
            P = () => {
              let e = f[n];
              return (c(l.revalidate)
                ? l.revalidate(o().data, t)
                : !1 !== l.revalidate) && (delete x[n], delete w[n], e && e[0])
                ? e[0](2).then(() => o().data)
                : o().data;
            };
          if (e.length < 3) return P();
          let S = s,
            T = $();
          b[n] = [T, 0];
          let A = !d(g),
            E = o(),
            M = E.data,
            V = E._c,
            C = d(V) ? M : V;
          if ((A && p({ data: (g = c(g) ? g(C, M) : g), _c: C }), c(S)))
            try {
              S = S(C);
            } catch (t) {
              r = t;
            }
          if (S && m(S)) {
            if (
              ((S = await S.catch((t) => {
                r = t;
              })),
              T !== b[n][0])
            ) {
              if (r) throw r;
              return S;
            }
            r && A && v(r) && ((h = !0), p({ data: C, _c: u }));
          }
          if (
            (h &&
              !r &&
              (c(h)
                ? p({ data: h(S, C), error: u, _c: u })
                : p({ data: S, error: u, _c: u })),
            (b[n][1] = $()),
            Promise.resolve(P()).then(() => {
              p({ _c: u });
            }),
            r)
          ) {
            if (y) throw r;
            return;
          }
          return S;
        }
      }
      let _ = (t, e) => {
          for (let r in t) t[r][0] && t[r][0](e);
        },
        U = (t, e) => {
          if (!a.has(t)) {
            let r = p(A, e),
              i = Object.create(null),
              n = z.bind(u, t),
              s = l,
              o = Object.create(null),
              h = (t, e) => {
                let r = o[t] || [];
                return (o[t] = r), r.push(e), () => r.splice(r.indexOf(e), 1);
              },
              d = (e, r, i) => {
                t.set(e, r);
                let n = o[e];
                if (n) for (let t of n) t(r, i);
              },
              c = () => {
                if (
                  !a.has(t) &&
                  (a.set(t, [
                    i,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    n,
                    d,
                    h,
                  ]),
                  !M)
                ) {
                  let e = r.initFocus(setTimeout.bind(u, _.bind(u, i, 0))),
                    n = r.initReconnect(setTimeout.bind(u, _.bind(u, i, 1)));
                  s = () => {
                    e && e(), n && n(), a.delete(t);
                  };
                }
              };
            return c(), [t, n, c, s];
          }
          return [t, a.get(t)[4]];
        },
        [W, N] = U(new Map()),
        G = p(
          {
            onLoadingSlow: l,
            onSuccess: l,
            onError: l,
            onErrorRetry: (t, e, r, i, n) => {
              let s = r.errorRetryCount,
                o = n.retryCount,
                a =
                  ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                  r.errorRetryInterval;
              (d(s) || !(o > s)) && setTimeout(i, a, n);
            },
            onDiscarded: l,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: D ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: D ? 5e3 : 3e3,
            compare: function t(e, r) {
              var i, n;
              if (e === r) return !0;
              if (e && r && (i = e.constructor) === r.constructor) {
                if (i === Date) return e.getTime() === r.getTime();
                if (i === RegExp) return e.toString() === r.toString();
                if (i === Array) {
                  if ((n = e.length) === r.length)
                    for (; n-- && t(e[n], r[n]); );
                  return -1 === n;
                }
                if (!i || "object" == typeof e) {
                  for (i in ((n = 0), e))
                    if (
                      (o.call(e, i) && ++n && !o.call(r, i)) ||
                      !(i in r) ||
                      !t(e[i], r[i])
                    )
                      return !1;
                  return Object.keys(r).length === n;
                }
              }
              return e != e && r != r;
            },
            isPaused: () => !1,
            cache: W,
            mutate: N,
            fallback: {},
          },
          {
            isOnline: () => P,
            isVisible: () => {
              let t = b && document.visibilityState;
              return d(t) || "hidden" !== t;
            },
          }
        ),
        q = (t, e) => {
          let r = p(t, e);
          if (e) {
            let { use: i, fallback: n } = t,
              { use: s, fallback: o } = e;
            i && s && (r.use = i.concat(s)), n && o && (r.fallback = p(n, o));
          }
          return r;
        },
        X = (0, n.createContext)({}),
        H = y && window.__SWR_DEVTOOLS_USE__,
        K = H ? window.__SWR_DEVTOOLS_USE__ : [],
        Z = (t) =>
          c(t[1])
            ? [t[0], t[1], t[2] || {}]
            : [t[0], null, (null === t[1] ? t[2] : t[1]) || {}],
        Y = () => p(G, (0, n.useContext)(X)),
        Q = K.concat((t) => (e, r, i) => {
          let n =
            r &&
            ((...t) => {
              let [i] = B(e),
                [, , , n] = a.get(W);
              if (i.startsWith("$inf$")) return r(...t);
              let s = n[i];
              return d(s) ? r(...t) : (delete n[i], s);
            });
          return t(e, n, i);
        }),
        J = (t, e, r) => {
          let i = e[t] || (e[t] = []);
          return (
            i.push(r),
            () => {
              let t = i.indexOf(r);
              t >= 0 && ((i[t] = i[i.length - 1]), i.pop());
            }
          );
        };
      H && (window.__SWR_DEVTOOLS_REACT__ = n);
      let tt = () => {},
        te = tt();
      new WeakMap();
      let tr =
          n.use ||
          ((t) => {
            switch (t.status) {
              case "pending":
                throw t;
              case "fulfilled":
                return t.value;
              case "rejected":
                throw t.reason;
              default:
                throw (
                  ((t.status = "pending"),
                  t.then(
                    (e) => {
                      (t.status = "fulfilled"), (t.value = e);
                    },
                    (e) => {
                      (t.status = "rejected"), (t.reason = e);
                    }
                  ),
                  t)
                );
            }
          }),
        ti = { dedupe: !0 };
      h.defineProperty(
        (t) => {
          let { value: e } = t,
            r = (0, n.useContext)(X),
            i = c(e),
            s = (0, n.useMemo)(() => (i ? e(r) : e), [i, r, e]),
            o = (0, n.useMemo)(() => (i ? s : q(r, s)), [i, r, s]),
            a = s && s.provider,
            l = (0, n.useRef)(u);
          a && !l.current && (l.current = U(a(o.cache || W), s));
          let h = l.current;
          return (
            h && ((o.cache = h[0]), (o.mutate = h[1])),
            C(() => {
              if (h) return h[2] && h[2](), h[3];
            }, []),
            (0, n.createElement)(X.Provider, p(t, { value: o }))
          );
        },
        "defaultValue",
        { value: G }
      );
      let tn =
        ((i = (t, e, r) => {
          let {
              cache: i,
              compare: o,
              suspense: l,
              fallbackData: h,
              revalidateOnMount: f,
              revalidateIfStale: g,
              refreshInterval: v,
              refreshWhenHidden: y,
              refreshWhenOffline: b,
              keepPreviousData: x,
            } = r,
            [w, P, S, T] = a.get(i),
            [A, j] = B(t),
            D = (0, n.useRef)(!1),
            R = (0, n.useRef)(!1),
            L = (0, n.useRef)(A),
            O = (0, n.useRef)(e),
            F = (0, n.useRef)(r),
            I = () => F.current,
            _ = () => I().isVisible() && I().isOnline(),
            [U, W, N, G] = k(i, A),
            q = (0, n.useRef)({}).current,
            X = d(h) ? (d(r.fallback) ? u : r.fallback[A]) : h,
            H = (t, e) => {
              for (let r in q)
                if ("data" === r) {
                  if (!o(t[r], e[r]) && (!d(t[r]) || !o(to, e[r]))) return !1;
                } else if (e[r] !== t[r]) return !1;
              return !0;
            },
            K = (0, n.useMemo)(() => {
              let t =
                  !!A && !!e && (d(f) ? !I().isPaused() && !l && !1 !== g : f),
                r = (e) => {
                  let r = p(e);
                  return (delete r._k, t)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                i = U(),
                n = G(),
                s = r(i),
                o = i === n ? s : r(n),
                a = s;
              return [
                () => {
                  let t = r(U());
                  return H(t, a)
                    ? ((a.data = t.data),
                      (a.isLoading = t.isLoading),
                      (a.isValidating = t.isValidating),
                      (a.error = t.error),
                      a)
                    : ((a = t), t);
                },
                () => o,
              ];
            }, [i, A]),
            Z = (0, s.useSyncExternalStore)(
              (0, n.useCallback)(
                (t) =>
                  N(A, (e, r) => {
                    H(r, e) || t();
                  }),
                [i, A]
              ),
              K[0],
              K[1]
            ),
            Y = !D.current,
            Q = w[A] && w[A].length > 0,
            tt = Z.data,
            te = d(tt) ? (X && m(X) ? tr(X) : X) : tt,
            tn = Z.error,
            ts = (0, n.useRef)(te),
            to = x ? (d(tt) ? (d(ts.current) ? te : ts.current) : tt) : te,
            ta =
              (!Q || !!d(tn)) &&
              (Y && !d(f)
                ? f
                : !I().isPaused() && (l ? !d(te) && g : d(te) || g)),
            tl = !!(A && e && Y && ta),
            tu = d(Z.isValidating) ? tl : Z.isValidating,
            th = d(Z.isLoading) ? tl : Z.isLoading,
            td = (0, n.useCallback)(
              async (t) => {
                let e,
                  i,
                  n = O.current;
                if (!A || !n || R.current || I().isPaused()) return !1;
                let s = !0,
                  a = t || {},
                  l = !S[A] || !a.dedupe,
                  h = () =>
                    E
                      ? !R.current && A === L.current && D.current
                      : A === L.current,
                  p = { isValidating: !1, isLoading: !1 },
                  m = () => {
                    W(p);
                  },
                  f = () => {
                    let t = S[A];
                    t && t[1] === i && delete S[A];
                  },
                  g = { isValidating: !0 };
                d(U().data) && (g.isLoading = !0);
                try {
                  if (
                    (l &&
                      (W(g),
                      r.loadingTimeout &&
                        d(U().data) &&
                        setTimeout(() => {
                          s && h() && I().onLoadingSlow(A, r);
                        }, r.loadingTimeout),
                      (S[A] = [n(j), $()])),
                    ([e, i] = S[A]),
                    (e = await e),
                    l && setTimeout(f, r.dedupingInterval),
                    !S[A] || S[A][1] !== i)
                  )
                    return l && h() && I().onDiscarded(A), !1;
                  p.error = u;
                  let t = P[A];
                  if (!d(t) && (i <= t[0] || i <= t[1] || 0 === t[1]))
                    return m(), l && h() && I().onDiscarded(A), !1;
                  let a = U().data;
                  (p.data = o(a, e) ? a : e),
                    l && h() && I().onSuccess(e, A, r);
                } catch (r) {
                  f();
                  let t = I(),
                    { shouldRetryOnError: e } = t;
                  !t.isPaused() &&
                    ((p.error = r),
                    l &&
                      h() &&
                      (t.onError(r, A, t),
                      (!0 === e || (c(e) && e(r))) &&
                        (!I().revalidateOnFocus ||
                          !I().revalidateOnReconnect ||
                          _()) &&
                        t.onErrorRetry(
                          r,
                          A,
                          t,
                          (t) => {
                            let e = w[A];
                            e && e[0] && e[0](3, t);
                          },
                          { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (s = !1), m(), !0;
              },
              [A, i]
            ),
            tc = (0, n.useCallback)((...t) => z(i, L.current, ...t), []);
          if (
            (C(() => {
              (O.current = e), (F.current = r), d(tt) || (ts.current = tt);
            }),
            C(() => {
              if (!A) return;
              let t = td.bind(u, ti),
                e = 0;
              I().revalidateOnFocus &&
                (e = Date.now() + I().focusThrottleInterval);
              let r = J(A, w, (r, i = {}) => {
                if (0 == r) {
                  let r = Date.now();
                  I().revalidateOnFocus &&
                    r > e &&
                    _() &&
                    ((e = r + I().focusThrottleInterval), t());
                } else if (1 == r) I().revalidateOnReconnect && _() && t();
                else if (2 == r) return td();
                else if (3 == r) return td(i);
              });
              return (
                (R.current = !1),
                (L.current = A),
                (D.current = !0),
                W({ _k: j }),
                ta && (d(te) || M ? t() : V(t)),
                () => {
                  (R.current = !0), r();
                }
              );
            }, [A]),
            C(() => {
              let t;
              function e() {
                let e = c(v) ? v(U().data) : v;
                e && -1 !== t && (t = setTimeout(r, e));
              }
              function r() {
                !U().error && (y || I().isVisible()) && (b || I().isOnline())
                  ? td(ti).then(e)
                  : e();
              }
              return (
                e(),
                () => {
                  t && (clearTimeout(t), (t = -1));
                }
              );
            }, [v, y, b, A]),
            (0, n.useDebugValue)(to),
            l && d(te) && A)
          ) {
            if (!E && M)
              throw Error(
                "Fallback data is required when using Suspense in SSR."
              );
            (O.current = e), (F.current = r), (R.current = !1);
            let t = T[A];
            if ((d(t) || tr(tc(t)), d(tn))) {
              let t = td(ti);
              d(to) || ((t.status = "fulfilled"), (t.value = !0)), tr(t);
            } else throw tn;
          }
          return {
            mutate: tc,
            get data() {
              return (q.data = !0), to;
            },
            get error() {
              return (q.error = !0), tn;
            },
            get isValidating() {
              return (q.isValidating = !0), tu;
            },
            get isLoading() {
              return (q.isLoading = !0), th;
            },
          };
        }),
        function (...t) {
          let e = Y(),
            [r, n, s] = Z(t),
            o = q(e, s),
            a = i,
            { use: l } = o,
            u = (l || []).concat(Q);
          for (let t = u.length; t--; ) a = u[t](a);
          return a(r, n || o.fetcher || null, o);
        });
      class ts extends Error {
        constructor({ message: t, status: e, data: r }) {
          super(t),
            (this.name = "TwitterApiError"),
            (this.status = e),
            (this.data = r);
        }
      }
      let to = tn.default || tn;
      async function ta(t) {
        let [e, r] = t,
          i = await fetch(e, r),
          n = await i.json();
        if (i.ok) return n.data || null;
        throw new ts({
          message: `Failed to fetch tweet at "${e}" with "${i.status}".`,
          data: n,
          status: i.status,
        });
      }
      let tl = (t, e, r) => {
        let {
          isLoading: i,
          data: n,
          error: s,
        } = to(
          () =>
            e || t
              ? [e || (t && `https://react-tweet.vercel.app/api/tweet/${t}`), r]
              : null,
          ta,
          {
            revalidateIfStale: !1,
            revalidateOnFocus: !1,
            shouldRetryOnError: !1,
          }
        );
        return { isLoading: !!(i || (void 0 === n && !s)), data: n, error: s };
      };
    },
    90869: (t, e, r) => {
      r.d(e, { L: () => i });
      let i = (0, r(12115).createContext)({});
    },
    91116: (t, e, r) => {
      r.d(e, { J: () => i });
      let i = (0, r(41917).p)(() => void 0 !== window.ScrollTimeline);
    },
    93013: (t, e, r) => {
      r.d(e, { V: () => h, f: () => m });
      var i = r(82897);
      let n =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = r(66479),
        o = r(22282);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          r = [],
          n = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                i.y.test(t)
                  ? (n.color.push(o), s.push(l), r.push(i.y.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(o), s.push("var"), r.push(t))
                  : (n.number.push(o), s.push(a), r.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: h, indexes: n, types: s };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: r } = h(t),
          n = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < n; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = r[u];
              e === a
                ? (s += (0, o.a)(t[u]))
                : e === l
                ? (s += i.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        m = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(s.S)?.length || 0) + (t.match(n)?.length || 0) > 0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    93676: (t, e, r) => {
      r.d(e, { j: () => n, p: () => o });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = i("--"),
        s = i("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    95190: (t, e, r) => {
      r.d(e, { Sz: () => o, ZZ: () => l, dg: () => a });
      var i = r(83945),
        n = r(567),
        s = r(16498);
      let o = (0, i.A)(0.33, 1.53, 0.69, 0.99),
        a = (0, s.G)(o),
        l = (0, n.V)(a);
    },
    97007: (t, e, r) => {
      r.d(e, { F: () => n });
      let i = (t, e) => (r) => e(t(r)),
        n = (...t) => t.reduce(i);
    },
    97219: (t, e, r) => {
      r.d(e, { $: () => s, q: () => o });
      var i = r(66479);
      let n =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (r) =>
          !!(
            ("string" == typeof r && n.test(r) && r.startsWith(t)) ||
            (e && null != r && Object.prototype.hasOwnProperty.call(r, e))
          ),
        o = (t, e, r) => (n) => {
          if ("string" != typeof n) return n;
          let [s, o, a, l] = n.match(i.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    97494: (t, e, r) => {
      r.d(e, { E: () => n });
      var i = r(12115);
      let n = r(68972).B ? i.useLayoutEffect : i.useEffect;
    },
    97846: (t, e, r) => {
      r.d(e, { G: () => u });
      var i = r(19827),
        n = r(54542),
        s = r(45818),
        o = r(77782),
        a = r(47437),
        l = r(97007);
      function u(t, e, { clamp: r = !0, ease: h, mixer: d } = {}) {
        let c = t.length;
        if (
          ((0, n.V)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && e[0] === e[1]) return () => e[1];
        let p = t[0] === t[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let m = (function (t, e, r) {
            let n = [],
              s = r || a.j,
              o = t.length - 1;
            for (let r = 0; r < o; r++) {
              let o = s(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] || i.l : e;
                o = (0, l.F)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, h, d),
          f = m.length,
          g = (r) => {
            if (p && r < t[0]) return e[0];
            let i = 0;
            if (f > 1) for (; i < t.length - 2 && !(r < t[i + 1]); i++);
            let n = (0, s.q)(t[i], t[i + 1], r);
            return m[i](n);
          };
        return r ? (e) => g((0, o.q)(t[0], t[c - 1], e)) : g;
      }
    },
  },
]);
