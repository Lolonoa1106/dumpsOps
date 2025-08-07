"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3105],
  {
    19816: (e, t, s) => {
      s.d(t, { D: () => r, F: () => d });
      var a = s(95155),
        l = s(12115);
      let d = (0, l.createContext)({}),
        r = (e) => {
          let { children: t } = e,
            [s, r] = (0, l.useState)(!0);
          return (0, a.jsx)(d.Provider, {
            value: { isLoading: s, setIsLoading: r },
            children: t,
          });
        };
    },
    23105: (e, t, s) => {
      s.r(t), s.d(t, { default: () => N });
      var a = s(95155),
        l = s(12115),
        d = s(17690),
        r = s.n(d),
        i = s(50802),
        n = s(39676),
        c = s(19816),
        x = s(44912),
        o = s(67052),
        h = s(55028),
        m = s(6874),
        u = s.n(m),
        p = s(8300),
        f = s(55645);
      let j = (0, h.default)(
          () =>
            Promise.all([
              s.e(950),
              s.e(1831),
              s.e(9367),
              s.e(8413),
              s.e(8252),
              s.e(3547),
            ])
              .then(s.bind(s, 23547))
              .then((e) => e.WebGPUCanvas),
          { loadableGenerated: { webpack: () => [23547] }, ssr: !1 }
        ),
        v = (0, h.default)(
          () =>
            Promise.all([
              s.e(950),
              s.e(1831),
              s.e(9367),
              s.e(8413),
              s.e(8252),
              s.e(9634),
              s.e(8798),
            ])
              .then(s.bind(s, 68798))
              .then((e) => e.PostProcessing),
          { loadableGenerated: { webpack: () => [68798] }, ssr: !1 }
        ),
        b = (0, h.default)(
          () =>
            Promise.all([
              s.e(950),
              s.e(1831),
              s.e(9367),
              s.e(8413),
              s.e(8252),
              s.e(9634),
              s.e(7344),
            ]).then(s.bind(s, 17344)),
          { loadableGenerated: { webpack: () => [17344] }, ssr: !1 }
        ),
        y = () => {
          let { isLoading: e } = (0, l.useContext)(c.F),
            { trackClick: t } = (0, p.s)();
          return (
            (0, n.L)(() => {
              e ||
                i.Ay.timeline()
                  .to("[data-loader]", { opacity: 0 })
                  .from("[data-title]", {
                    yPercent: -100,
                    stagger: { each: 0.15 },
                    ease: "power1.out",
                  })
                  .from("[data-desc]", { opacity: 0, yPercent: 100 })
                  .from("[data-desc2]", {
                    opacity: 0,
                    yPercent: 100,
                    delay: 0.5,
                  })
                  .from("[data-button]", { opacity: 0, yPercent: -100 });
            }, [e]),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("div", {
                  className:
                    "h-svh fixed z-90 bg-black pointer-events-none w-full flex justify-center items-center",
                  "data-loader": !0,
                  "aria-hidden": "true",
                  children: (0, a.jsx)("div", {
                    className: "w-6 h-6 bg-white animate-ping rounded-full",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "h-svh ",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "h-svh md:pt-48 pt-20 items-center w-full absolute z-60 px-10 flex justify-center flex-col",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl",
                          style: { ...r().style },
                          children: (0, a.jsx)("div", {
                            className:
                              "flex space-x-2 lg:space-x-6 overflow-hidden",
                            children: "NodeOps"
                              .split(" ")
                              .map((e, t) =>
                                (0, a.jsx)(
                                  "div",
                                  { "data-title": !0, children: e },
                                  t
                                )
                              ),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            " md:text-xl xl:text-xl 2xl:text-xl mt-2 overflow-hidden",
                          children: [
                            (0, a.jsx)("div", {
                              "data-desc": !0,
                              className: "text-center",
                              children:
                                "NodeOps is the leading AI-powered DePIN Orchestration Layer",
                            }),
                            (0, a.jsx)("div", {
                              "data-desc2": !0,
                              className: "text-center text-primary/50 mt-1",
                              children:
                                "Keeping builders focused on what matters",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(j, {
                      children: [(0, a.jsx)(v, {}), (0, a.jsx)(b, {})],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function N() {
        return (0, a.jsx)(c.D, { children: (0, a.jsx)(y, {}) });
      }
    },
  },
]);
