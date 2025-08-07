"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3547],
  {
    23547: (e, t, r) => {
      r.r(t), r.d(t, { WebGPUCanvas: () => v });
      var n = r(95155),
        i = r(891),
        o = r(83816),
        s = r(12115),
        l = r(97431);
      function c(e, t) {
        let r;
        return (...n) => {
          window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t));
        };
      }
      let u = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        a = (e, t) => u.every((r) => e[r] === t[r]);
      var d = r(26354);
      function f({
        ref: e,
        children: t,
        fallback: r,
        resize: i,
        style: u,
        gl: d,
        events: f = o.f,
        eventSource: h,
        eventPrefix: v,
        shadows: w,
        linear: m,
        flat: b,
        legacy: p,
        orthographic: g,
        frameloop: E,
        dpr: y,
        performance: z,
        raycaster: x,
        camera: C,
        scene: L,
        onPointerMissed: j,
        onCreated: H,
        ...O
      }) {
        s.useMemo(() => (0, o.e)(l), []);
        let R = (0, o.u)(),
          [S, k] = (function (
            { debounce: e, scroll: t, polyfill: r, offsetSize: n } = {
              debounce: 0,
              scroll: !1,
              offsetSize: !1,
            }
          ) {
            var i, o, l;
            let u =
              r ||
              ("undefined" == typeof window ? class {} : window.ResizeObserver);
            if (!u)
              throw Error(
                "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
              );
            let [d, f] = (0, s.useState)({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0,
              }),
              h = (0, s.useRef)({
                element: null,
                scrollContainers: null,
                resizeObserver: null,
                lastBounds: d,
                orientationHandler: null,
              }),
              v = e ? ("number" == typeof e ? e : e.scroll) : null,
              w = e ? ("number" == typeof e ? e : e.resize) : null,
              m = (0, s.useRef)(!1);
            (0, s.useEffect)(
              () => ((m.current = !0), () => void (m.current = !1))
            );
            let [b, p, g] = (0, s.useMemo)(() => {
              let e = () => {
                if (!h.current.element) return;
                let {
                    left: e,
                    top: t,
                    width: r,
                    height: i,
                    bottom: o,
                    right: s,
                    x: l,
                    y: c,
                  } = h.current.element.getBoundingClientRect(),
                  u = {
                    left: e,
                    top: t,
                    width: r,
                    height: i,
                    bottom: o,
                    right: s,
                    x: l,
                    y: c,
                  };
                h.current.element instanceof HTMLElement &&
                  n &&
                  ((u.height = h.current.element.offsetHeight),
                  (u.width = h.current.element.offsetWidth)),
                  Object.freeze(u),
                  m.current &&
                    !a(h.current.lastBounds, u) &&
                    f((h.current.lastBounds = u));
              };
              return [e, w ? c(e, w) : e, v ? c(e, v) : e];
            }, [f, n, v, w]);
            function E() {
              h.current.scrollContainers &&
                (h.current.scrollContainers.forEach((e) =>
                  e.removeEventListener("scroll", g, !0)
                ),
                (h.current.scrollContainers = null)),
                h.current.resizeObserver &&
                  (h.current.resizeObserver.disconnect(),
                  (h.current.resizeObserver = null)),
                h.current.orientationHandler &&
                  ("orientation" in screen &&
                  "removeEventListener" in screen.orientation
                    ? screen.orientation.removeEventListener(
                        "change",
                        h.current.orientationHandler
                      )
                    : "onorientationchange" in window &&
                      window.removeEventListener(
                        "orientationchange",
                        h.current.orientationHandler
                      ));
            }
            function y() {
              h.current.element &&
                ((h.current.resizeObserver = new u(g)),
                h.current.resizeObserver.observe(h.current.element),
                t &&
                  h.current.scrollContainers &&
                  h.current.scrollContainers.forEach((e) =>
                    e.addEventListener("scroll", g, {
                      capture: !0,
                      passive: !0,
                    })
                  ),
                (h.current.orientationHandler = () => {
                  g();
                }),
                "orientation" in screen &&
                "addEventListener" in screen.orientation
                  ? screen.orientation.addEventListener(
                      "change",
                      h.current.orientationHandler
                    )
                  : "onorientationchange" in window &&
                    window.addEventListener(
                      "orientationchange",
                      h.current.orientationHandler
                    ));
            }
            return (
              (i = g),
              (o = !!t),
              (0, s.useEffect)(() => {
                if (o)
                  return (
                    window.addEventListener("scroll", i, {
                      capture: !0,
                      passive: !0,
                    }),
                    () => void window.removeEventListener("scroll", i, !0)
                  );
              }, [i, o]),
              (l = p),
              (0, s.useEffect)(
                () => (
                  window.addEventListener("resize", l),
                  () => void window.removeEventListener("resize", l)
                ),
                [l]
              ),
              (0, s.useEffect)(() => {
                E(), y();
              }, [t, g, p]),
              (0, s.useEffect)(() => E, []),
              [
                (e) => {
                  e &&
                    e !== h.current.element &&
                    (E(),
                    (h.current.element = e),
                    (h.current.scrollContainers = (function e(t) {
                      let r = [];
                      if (!t || t === document.body) return r;
                      let {
                        overflow: n,
                        overflowX: i,
                        overflowY: o,
                      } = window.getComputedStyle(t);
                      return (
                        [n, i, o].some((e) => "auto" === e || "scroll" === e) &&
                          r.push(t),
                        [...r, ...e(t.parentElement)]
                      );
                    })(e)),
                    y());
                },
                d,
                b,
              ]
            );
          })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...i }),
          B = s.useRef(null),
          M = s.useRef(null);
        s.useImperativeHandle(e, () => B.current);
        let T = (0, o.a)(j),
          [_, P] = s.useState(!1),
          [W, G] = s.useState(!1);
        if (_) throw _;
        if (W) throw W;
        let N = s.useRef(null);
        (0, o.b)(() => {
          let e = B.current;
          k.width > 0 &&
            k.height > 0 &&
            e &&
            (N.current || (N.current = (0, o.c)(e)),
            (async function () {
              await N.current.configure({
                gl: d,
                scene: L,
                events: f,
                shadows: w,
                linear: m,
                flat: b,
                legacy: p,
                orthographic: g,
                frameloop: E,
                dpr: y,
                performance: z,
                raycaster: x,
                camera: C,
                size: k,
                onPointerMissed: (...e) =>
                  null == T.current ? void 0 : T.current(...e),
                onCreated: (e) => {
                  null == e.events.connect ||
                    e.events.connect(
                      h ? ((0, o.i)(h) ? h.current : h) : M.current
                    ),
                    v &&
                      e.setEvents({
                        compute: (e, t) => {
                          let r = e[v + "X"],
                            n = e[v + "Y"];
                          t.pointer.set(
                            (r / t.size.width) * 2 - 1,
                            -(2 * (n / t.size.height)) + 1
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera);
                        },
                      }),
                    null == H || H(e);
                },
              }),
                N.current.render(
                  (0, n.jsx)(R, {
                    children: (0, n.jsx)(o.E, {
                      set: G,
                      children: (0, n.jsx)(s.Suspense, {
                        fallback: (0, n.jsx)(o.B, { set: P }),
                        children: null != t ? t : null,
                      }),
                    }),
                  })
                );
            })());
        }),
          s.useEffect(() => {
            let e = B.current;
            if (e) return () => (0, o.d)(e);
          }, []);
        let U = h ? "none" : "auto";
        return (0, n.jsx)("div", {
          ref: M,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: U,
            ...u,
          },
          ...O,
          children: (0, n.jsx)("div", {
            ref: S,
            style: { width: "100%", height: "100%" },
            children: (0, n.jsx)("canvas", {
              ref: B,
              style: { display: "block" },
              children: r,
            }),
          }),
        });
      }
      function h(e) {
        return (0, n.jsx)(d.Af, { children: (0, n.jsx)(f, { ...e }) });
      }
      r(61933), r(45220), r(74342), (0, o.e)(i);
      let v = (e) =>
        (0, n.jsx)(h, {
          ...e,
          flat: !0,
          gl: async (e) => {
            let t = new i.WebGPURenderer(e);
            return await t.init(), t;
          },
          children: e.children,
        });
    },
  },
]);
