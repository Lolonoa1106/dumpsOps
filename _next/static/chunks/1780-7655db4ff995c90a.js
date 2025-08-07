"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1780],
  {
    71780: (e, t, n) => {
      let r, o;
      n.d(t, { L: () => _ });
      var i = n(60098),
        l = n(54542),
        s = n(12115),
        f = n(91116),
        a = n(19827),
        c = n(69515);
      function u(e, t) {
        let n,
          r = () => {
            let { currentTime: r } = t,
              o = (null === r ? 0 : r.value) / 100;
            n !== o && e(o), (n = o);
          };
        return c.Gt.update(r, !0), () => (0, c.WG)(r);
      }
      var g = n(42198);
      let d = new WeakMap();
      function h({ target: e, contentRect: t, borderBoxSize: n }) {
        d.get(e)?.forEach((r) => {
          r({
            target: e,
            contentSize: t,
            get size() {
              if (n) {
                let { inlineSize: e, blockSize: t } = n[0];
                return { width: e, height: t };
              }
              if (e instanceof SVGElement && "getBBox" in e) return e.getBBox();
              return { width: e.offsetWidth, height: e.offsetHeight };
            },
          });
        });
      }
      function p(e) {
        e.forEach(h);
      }
      let m = new Set();
      var y = n(45818),
        v = n(62923);
      let w = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        E = () => ({ time: 0, x: w(), y: w() }),
        x = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function L(e, t, n, r) {
        let o = n[t],
          { length: i, position: l } = x[t],
          s = o.current,
          f = n.time;
        (o.current = e[`scroll${l}`]),
          (o.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, y.q)(0, o.scrollLength, o.current));
        let a = r - f;
        o.velocity = a > 50 ? 0 : (0, v.f)(o.current - s, a);
      }
      var W = n(77782),
        O = n(97846),
        b = n(7345);
      let B = { start: 0, center: 0.5, end: 1 };
      function z(e, t, n = 0) {
        let r = 0;
        if ((e in B && (e = B[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let G = [0, 0],
        H = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        S = { x: 0, y: 0 },
        k = new WeakMap(),
        N = new WeakMap(),
        T = new WeakMap(),
        M = (e) => (e === document.documentElement ? window : e);
      function P(e, { container: t = document.documentElement, ...n } = {}) {
        let i = T.get(t);
        i || ((i = new Set()), T.set(t, i));
        let l = (function (e, t, n, r = {}) {
          return {
            measure: () =>
              (function (e, t = e, n) {
                if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
                  let r = t;
                  for (; r && r !== e; )
                    (n.x.targetOffset += r.offsetLeft),
                      (n.y.targetOffset += r.offsetTop),
                      (r = r.offsetParent);
                }
                (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                  (n.y.targetLength =
                    t === e ? t.scrollHeight : t.clientHeight),
                  (n.x.containerLength = e.clientWidth),
                  (n.y.containerLength = e.clientHeight);
              })(e, r.target, n),
            update: (t) => {
              L(e, "x", n, t),
                L(e, "y", n, t),
                (n.time = t),
                (r.offset || r.target) &&
                  (function (e, t, n) {
                    let { offset: r = H.All } = n,
                      { target: o = e, axis: i = "y" } = n,
                      l = "y" === i ? "height" : "width",
                      s =
                        o !== e
                          ? (function (e, t) {
                              let n = { x: 0, y: 0 },
                                r = e;
                              for (; r && r !== t; )
                                if (r instanceof HTMLElement)
                                  (n.x += r.offsetLeft),
                                    (n.y += r.offsetTop),
                                    (r = r.offsetParent);
                                else if ("svg" === r.tagName) {
                                  let e = r.getBoundingClientRect(),
                                    t = (r =
                                      r.parentElement).getBoundingClientRect();
                                  (n.x += e.left - t.left),
                                    (n.y += e.top - t.top);
                                } else if (r instanceof SVGGraphicsElement) {
                                  let { x: e, y: t } = r.getBBox();
                                  (n.x += e), (n.y += t);
                                  let o = null,
                                    i = r.parentNode;
                                  for (; !o; )
                                    "svg" === i.tagName && (o = i),
                                      (i = r.parentNode);
                                  r = o;
                                } else break;
                              return n;
                            })(o, e)
                          : S,
                      f =
                        o === e
                          ? { width: e.scrollWidth, height: e.scrollHeight }
                          : "getBBox" in o && "svg" !== o.tagName
                          ? o.getBBox()
                          : { width: o.clientWidth, height: o.clientHeight },
                      a = { width: e.clientWidth, height: e.clientHeight };
                    t[i].offset.length = 0;
                    let c = !t[i].interpolate,
                      u = r.length;
                    for (let e = 0; e < u; e++) {
                      let n = (function (e, t, n, r) {
                        let o = Array.isArray(e) ? e : G,
                          i = 0,
                          l = 0;
                        return (
                          "number" == typeof e
                            ? (o = [e, e])
                            : "string" == typeof e &&
                              (o = (e = e.trim()).includes(" ")
                                ? e.split(" ")
                                : [e, B[e] ? e : "0"]),
                          (i = z(o[0], n, r)) - z(o[1], t)
                        );
                      })(r[e], a[l], f[l], s[i]);
                      c || n === t[i].interpolatorOffsets[e] || (c = !0),
                        (t[i].offset[e] = n);
                    }
                    c &&
                      ((t[i].interpolate = (0, O.G)(t[i].offset, (0, b.Z)(r), {
                        clamp: !1,
                      })),
                      (t[i].interpolatorOffsets = [...t[i].offset])),
                      (t[i].progress = (0, W.q)(
                        0,
                        1,
                        t[i].interpolate(t[i].current)
                      ));
                  })(e, n, r);
            },
            notify: () => t(n),
          };
        })(t, e, E(), n);
        if ((i.add(l), !k.has(t))) {
          let e = () => {
              for (let e of i) e.measure();
            },
            n = () => {
              for (let e of i) e.update(c.uv.timestamp);
            },
            l = () => {
              for (let e of i) e.notify();
            },
            s = () => {
              c.Gt.read(e, !1, !0),
                c.Gt.read(n, !1, !0),
                c.Gt.update(l, !1, !0);
            };
          k.set(t, s);
          let f = M(t);
          window.addEventListener("resize", s, { passive: !0 }),
            t !== document.documentElement &&
              N.set(
                t,
                "function" == typeof t
                  ? (m.add(t),
                    o ||
                      ((o = () => {
                        let e = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          t = { target: window, size: e, contentSize: e };
                        m.forEach((e) => e(t));
                      }),
                      window.addEventListener("resize", o)),
                    () => {
                      m.delete(t), !m.size && o && (o = void 0);
                    })
                  : (function (e, t) {
                      r ||
                        ("undefined" != typeof ResizeObserver &&
                          (r = new ResizeObserver(p)));
                      let n = (0, g.K)(e);
                      return (
                        n.forEach((e) => {
                          let n = d.get(e);
                          n || ((n = new Set()), d.set(e, n)),
                            n.add(t),
                            r?.observe(e);
                        }),
                        () => {
                          n.forEach((e) => {
                            let n = d.get(e);
                            n?.delete(t), n?.size || r?.unobserve(e);
                          });
                        }
                      );
                    })(t, s)
              ),
            f.addEventListener("scroll", s, { passive: !0 });
        }
        let s = k.get(t);
        return (
          c.Gt.read(s, !1, !0),
          () => {
            (0, c.WG)(s);
            let e = T.get(t);
            if (!e || (e.delete(l), e.size)) return;
            let n = k.get(t);
            k.delete(t),
              n &&
                (M(t).removeEventListener("scroll", n),
                N.get(t)?.(),
                window.removeEventListener("resize", n));
          }
        );
      }
      let Y = new Map();
      function $({
        source: e,
        container: t = document.documentElement,
        axis: n = "y",
      } = {}) {
        e && (t = e), Y.has(t) || Y.set(t, {});
        let r = Y.get(t);
        return (
          r[n] ||
            (r[n] = (0, f.J)()
              ? new ScrollTimeline({ source: t, axis: n })
              : (function ({ source: e, container: t, axis: n = "y" }) {
                  e && (t = e);
                  let r = { value: 0 },
                    o = P(
                      (e) => {
                        r.value = 100 * e[n].progress;
                      },
                      { container: t, axis: n }
                    );
                  return { currentTime: r, cancel: o };
                })({ source: t, axis: n })),
          r[n]
        );
      }
      function A(e) {
        return e && (e.target || e.offset);
      }
      var C = n(82885),
        Q = n(97494);
      function R(e, t) {
        (0, l.$)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let X = () => ({
        scrollX: (0, i.OQ)(0),
        scrollY: (0, i.OQ)(0),
        scrollXProgress: (0, i.OQ)(0),
        scrollYProgress: (0, i.OQ)(0),
      });
      function _({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
        let o = (0, C.M)(X);
        return (
          (n ? Q.E : s.useEffect)(
            () => (
              R("target", t),
              R("container", e),
              (function (e, { axis: t = "y", ...n } = {}) {
                var r, o;
                let i = { axis: t, ...n };
                return "function" == typeof e
                  ? ((r = e),
                    (o = i),
                    2 === r.length || A(o)
                      ? P((e) => {
                          r(e[o.axis].progress, e);
                        }, o)
                      : u(r, $(o)))
                  : (function (e, t) {
                      if ((e.flatten(), A(t)))
                        return (
                          e.pause(),
                          P((n) => {
                            e.time = e.duration * n[t.axis].progress;
                          }, t)
                        );
                      {
                        let n = $(t);
                        return e.attachTimeline
                          ? e.attachTimeline(
                              n,
                              (e) => (
                                e.pause(),
                                u((t) => {
                                  e.time = e.duration * t;
                                }, n)
                              )
                            )
                          : a.l;
                      }
                    })(e, i);
              })(
                (e, { x: t, y: n }) => {
                  o.scrollX.set(t.current),
                    o.scrollXProgress.set(t.progress),
                    o.scrollY.set(n.current),
                    o.scrollYProgress.set(n.progress);
                },
                {
                  ...r,
                  container: e?.current || void 0,
                  target: t?.current || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(r.offset)]
          ),
          o
        );
      }
    },
  },
]);
