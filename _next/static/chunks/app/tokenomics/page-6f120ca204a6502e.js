(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1529],
  {
    2467: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var s = r(95155);
      r(12115);
      let i = (e) => {
        let { children: t, className: r, id: i } = e;
        return (0, s.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${r}`,
          id: i,
          children: t,
        });
      };
    },
    8300: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => o });
      let s = r(69719).A.getInstance();
      s.init("f2623245635722f8e69e09e00e3b92d2");
      var i = r(12115);
      let a = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              s.logEvent(e, t);
            } catch (e) {}
        },
        o = () => ({
          track: (e, t) => {
            s.logEvent(e, t);
          },
          trackPage: (0, i.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            a(`Landed on ${e}`, { ...t });
          }, []),
          trackClick: (0, i.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            a(`Clicked on ${e}`, { ...t });
          }, []),
        });
    },
    40685: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => ev });
      var s = r(95155),
        i = r(12115),
        a = r(75783),
        o = r(67052),
        n = r(2467),
        l = r(6874),
        c = r.n(l),
        x = r(8300);
      let d = () => {
        let { trackClick: e } = (0, x.s)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.A, {
              className:
                "py-2 flex flex-col items-center justify-center h-screen",
              children: (0, s.jsxs)("div", {
                className: "flex flex-col items-center pt-64 md:pt-96",
                children: [
                  (0, s.jsx)("h1", {
                    className:
                      "text-3xl sm:text-5xl 2xl:text-7xl font-bold text-center max-w-6xl",
                    children: "NODE Tokenomics",
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-sm sm:text-lg text-primary/60 text-center mt-5 max-w-3xl",
                    children:
                      "$DUMP serves as the economic layer for DumpOps Network. The token is supported by Protocol growth, optimally managed through revenue-based mechanisms.",
                  }),
                  (0, s.jsx)(c(), {
                    href: "https://docs.nodeops.network/Tokenomics/node",
                    target: "_blank",
                    children: (0, s.jsxs)(a.$n, {
                      variant: "outline",
                      className:
                        "gap-2 mt-8 text-xl border-primary/10 py-6 px-8",
                      children: [
                        "Tokenomics Documentation ",
                        (0, s.jsx)(o.Q, { className: "w-4 h-4" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("img", {
              src: "/tokenomicsHero.webp",
              alt: "Product Hero",
              className: "w-full h-full object-cover absolute top-0 -z-10",
            }),
          ],
        });
      };
      var m = r(60013),
        p = r(66766),
        u = r(36356);
      let y = (e) => {
          let {
              className: t,
              containerRef: r,
              fromRef: a,
              toRef: o,
              curvature: n = 0,
              reverse: l = !1,
              reverseS: c = !1,
              duration: x = 3 * Math.random() + 4,
              delay: d = 0,
              pathColor: m = "gray",
              pathWidth: p = 2,
              pathOpacity: y = 0.2,
              gradientStartColor: f = "#ffaa40",
              gradientStopColor: h = "#9c40ff",
              startXOffset: b = 0,
              startYOffset: g = 0,
              endXOffset: j = 0,
              endYOffset: v = 0,
              controlXOffset: N = 0,
            } = e,
            C = (0, i.useId)(),
            [w, k] = (0, i.useState)(""),
            [O, E] = (0, i.useState)({ width: 0, height: 0 }),
            I = l
              ? {
                  x1: ["90%", "-10%"],
                  x2: ["100%", "0%"],
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                }
              : {
                  x1: ["10%", "110%"],
                  x2: ["0%", "100%"],
                  y1: ["0%", "0%"],
                  y2: ["0%", "0%"],
                };
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                  if (r.current && a.current && o.current) {
                    let e = r.current.getBoundingClientRect(),
                      t = a.current.getBoundingClientRect(),
                      s = o.current.getBoundingClientRect();
                    E({ width: e.width, height: e.height });
                    let i = t.left - e.left + t.width / 2 + b,
                      l = t.top - e.top + t.height / 2 + g,
                      x = s.left - e.left + s.width / 2 + j,
                      d = s.top - e.top + s.height / 2 + v,
                      m = x - i,
                      p = d - l,
                      u = Math.sqrt(m * m + p * p) || 1,
                      y = -p / u,
                      f = m / u,
                      h = c ? -1 : 1;
                    k(
                      `M ${i},${l} C ${i + 0.3 * m + y * n * h},${
                        l + 0.3 * p + f * n * h
                      } ${x - 0.3 * m - y * n * h},${
                        d - 0.3 * p - f * n * h
                      } ${x},${d}`
                    );
                  }
                },
                t = new ResizeObserver((t) => {
                  for (let r of t) e();
                });
              return (
                r.current && t.observe(r.current),
                e(),
                () => {
                  t.disconnect();
                }
              );
            }, [r, a, o, n, b, g, j, v, N, c]),
            (0, s.jsxs)("svg", {
              fill: "none",
              width: O.width,
              height: O.height,
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2 " +
                (t || ""),
              viewBox: `0 0 ${O.width} ${O.height}`,
              children: [
                (0, s.jsx)("path", {
                  d: w,
                  stroke: m,
                  strokeWidth: p,
                  strokeOpacity: y,
                  strokeLinecap: "round",
                  strokeDasharray: "10 8",
                }),
                (0, s.jsx)("path", {
                  d: w,
                  strokeWidth: p,
                  stroke: `url(#${C})`,
                  strokeOpacity: "1",
                  strokeLinecap: "round",
                  strokeDasharray: "10 8",
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsxs)(u.P.linearGradient, {
                    className: "transform-gpu",
                    id: C,
                    gradientUnits: "userSpaceOnUse",
                    initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
                    animate: { x1: I.x1, x2: I.x2, y1: I.y1, y2: I.y2 },
                    transition: {
                      delay: d,
                      duration: x,
                      ease: [0.16, 1, 0.3, 1],
                      repeat: 1 / 0,
                      repeatDelay: 0,
                    },
                    children: [
                      (0, s.jsx)("stop", { stopColor: f, stopOpacity: "0" }),
                      (0, s.jsx)("stop", { stopColor: f }),
                      (0, s.jsx)("stop", { offset: "32.5%", stopColor: h }),
                      (0, s.jsx)("stop", {
                        offset: "100%",
                        stopColor: h,
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        f = () => {
          let [e, t] = (0, i.useState)(1364),
            r = [
              {
                name: "Compute Providers Base Rewards",
                amount: 2400,
                percentage: 12.5,
                icon: "/icons/users.svg",
              },
              {
                name: "Compute Providers Performance Reward",
                amount: 2400,
                percentage: 12.5,
                icon: "/icons/userDashed.svg",
              },
              {
                name: "Foundation Treasury",
                amount: 2400,
                percentage: 15,
                icon: "/icons/stack.svg",
              },
              {
                name: "Stakers",
                amount: 2400,
                percentage: 10,
                icon: "/icons/stack.svg",
              },
              {
                name: "Burnt",
                amount: 2400,
                percentage: 50,
                icon: "/icons/fire.svg",
              },
            ],
            o = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            l = (0, i.useRef)([]),
            [c, x] = (0, i.useState)(0),
            [d, m] = (0, i.useState)(!1),
            [u, f] = (0, i.useState)([]);
          (0, i.useEffect)(() => {
            l.current = l.current.slice(0, r.length);
          }, [r.length]),
            (0, i.useLayoutEffect)(() => {
              function e() {
                if (!n.current || !o.current) return;
                let e = n.current.getBoundingClientRect();
                o.current.getBoundingClientRect(),
                  f(
                    r.map((t, r) => {
                      let s = l.current[r];
                      if (!s) return { startX: 0, endX: 0 };
                      let i = s.getBoundingClientRect();
                      return { startX: e.width / 2, endX: -(i.width / 2) + 40 };
                    })
                  );
              }
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, [r.length]);
          let h = () => {
            m(!0),
              fetch("https://oms-oneclick.nodeops.xyz/api/v1/node-token/price")
                .then((e) => e.json())
                .then((e) => {
                  x(e?.data), m(!1);
                })
                .catch((e) => {
                  console.log("Failed to fetch NODE price", e), m(!1);
                });
          };
          (0, i.useEffect)(() => {
            h();
          }, []);
          let b = (t) => ((e / c) * t) / 100;
          return (0, s.jsxs)("div", {
            className: "flex md:flex-row flex-col md:gap-32 gap-6 relative",
            ref: o,
            children: [
              (0, s.jsxs)("div", {
                className: "flex flex-col md:w-[45%] w-full ",
                children: [
                  (0, s.jsxs)("div", {
                    className: "border border-primary/10 relative md:p-8 p-5",
                    ref: n,
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60",
                        children: "Daily revenue",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        rightLabel: "USD",
                        className: "w-full",
                        type: "number",
                        value: e,
                        onKeyDown: (e) => {
                          ["+", "-", "e", "E", "."].includes(e.key) &&
                            e.preventDefault();
                        },
                        onInput: (e) => {
                          let r = e.target,
                            s = r.value;
                          (s = s.replace(/[^0-9]/g, "")).length > 1 &&
                            "0" === s[0] &&
                            (s = s.substring(1)),
                            (r.value = s),
                            t(Number(s));
                        },
                        onChange: (e) => {
                          let r = e.target.value;
                          (r = r.replace(/[^0-9]/g, "")).length > 1 &&
                            "0" === r[0] &&
                            (r = r.substring(1)),
                            t(Number(r));
                        },
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex justify-between items-center mt-4 border border-primary/10 px-2 py-3",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary/60",
                            children: "$DUMP revenue",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary/60",
                            children: d
                              ? (0, s.jsxs)("svg", {
                                  className: "animate-spin h-5 w-5",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    (0, s.jsx)("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                    }),
                                    (0, s.jsx)("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : `${b(100).toFixed(2)} $DUMP`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "border border-primary/10 relative md:p-8 p-5",
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [
                          (0, s.jsx)(p.default, {
                            src: "/icons/handIcon.svg",
                            alt: "DumpOps Console",
                            width: 20,
                            height: 20,
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary",
                            children:
                              "Revenue split summary outlines the daily distribution of generated revenue among stakeholders, detailing the allocation percentages to various participants or funds.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              r.map((e, t) =>
                (0, s.jsx)(
                  y,
                  {
                    containerRef: o,
                    fromRef: n,
                    toRef: { current: l.current[t] },
                    curvature: 60,
                    pathColor: "#fff",
                    pathWidth: 1.5,
                    pathOpacity: 0.15,
                    gradientStartColor: "#fff",
                    gradientStopColor: "#fff",
                    duration: 8 + 0.2 * t,
                    delay: 0.15 * t,
                    startXOffset: u[t]?.startX || 0,
                    endXOffset: u[t]?.endX - 40 || 0,
                    startYOffset: -8,
                    className: "-z-10 md:block hidden",
                    reverseS: !0,
                  },
                  e.name
                )
              ),
              (0, s.jsxs)("div", {
                className:
                  "md:w-[55%] w-full border border-primary/10 relative md:p-8 p-5",
                children: [
                  (0, s.jsxs)("p", {
                    className: "text-lg",
                    children: [
                      "Revenue split summary",
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-primary/40",
                        children: "(per day)",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col gap-4 mt-4",
                    children: r.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "border border-primary/10 p-3 flex justify-between items-center relative",
                          ref: (e) => {
                            l.current[t] = e;
                          },
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "border border-primary/10 p-2",
                                  children: (0, s.jsx)(p.default, {
                                    src: e.icon,
                                    alt: "DumpOps Console",
                                    width: 28,
                                    height: 28,
                                  }),
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-sm",
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-sm",
                              children: [
                                b(e.percentage).toFixed(2),
                                " $DUMP",
                                (0, s.jsxs)("span", {
                                  className: "text-primary",
                                  children: [" (", e.percentage, "%)"],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        };
      var h = r(99445),
        b = r(96025),
        g = r(16238),
        j = r(94517),
        v = r(24026),
        N = r(62341),
        C = r(83540),
        w = r(59935),
        k = r(96774);
      let O = [
          {
            month: 0,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x5046a17,
            "Circulating Supply": 0x7f361ec,
          },
          {
            month: 1,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x5046a17,
            "Circulating Supply": 0x7f361ec,
          },
          {
            month: 2,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x5046a17,
            "Circulating Supply": 0x7f361ec,
          },
          {
            month: 3,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x5046a17,
            "Circulating Supply": 0x7f361ec,
          },
          {
            month: 4,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x539ee82,
            "Circulating Supply": 0x828e658,
          },
          {
            month: 5,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x56f72ee,
            "Circulating Supply": 0x85e6ac3,
          },
          {
            month: 6,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0xe90f1f,
            "Ecosystem + Community": 0x136bed4,
            Airdrop: 0x5a4f759,
            "Circulating Supply": 0x893ef2f,
          },
          {
            month: 7,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x10880e8,
            "Ecosystem + Community": 0x179556f,
            Airdrop: 0x5da7bc5,
            "Circulating Supply": 0x92b7bff,
          },
          {
            month: 8,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x127f2b1,
            "Ecosystem + Community": 0x1bbec0a,
            Airdrop: 0x6100031,
            "Circulating Supply": 0x9c308cf,
          },
          {
            month: 9,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x147647b,
            "Ecosystem + Community": 0x1fe82a5,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xa5a959f,
          },
          {
            month: 10,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x166d644,
            "Ecosystem + Community": 0x2411940,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xabc9e03,
          },
          {
            month: 11,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x186480d,
            "Ecosystem + Community": 0x283afdc,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xb1ea667,
          },
          {
            month: 12,
            IDO: 0xcf29e3,
            "Initial Contributors": 0,
            "Early Backers": 0,
            "DumpOps Protocol incentives": 0x1a5b9d6,
            "Ecosystem + Community": 0x2c64677,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xb80aecc,
          },
          {
            month: 13,
            IDO: 0xcf29e3,
            "Initial Contributors": 2121355,
            "Early Backers": 6364066,
            "DumpOps Protocol incentives": 0x1c52ba0,
            "Ecosystem + Community": 0x308dd12,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xc64315e,
          },
          {
            month: 14,
            IDO: 0xcf29e3,
            "Initial Contributors": 4242711,
            "Early Backers": 0xc23744,
            "DumpOps Protocol incentives": 0x1e49d69,
            "Ecosystem + Community": 0x34b73ad,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xd47b3f0,
          },
          {
            month: 15,
            IDO: 0xcf29e3,
            "Initial Contributors": 6364066,
            "Early Backers": 0x12352e7,
            "DumpOps Protocol incentives": 0x2040f32,
            "Ecosystem + Community": 0x38e0a48,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xe2b3682,
          },
          {
            month: 16,
            IDO: 0xcf29e3,
            "Initial Contributors": 8485422,
            "Early Backers": 0x1846e89,
            "DumpOps Protocol incentives": 0x22380fb,
            "Ecosystem + Community": 0x3d0a0e3,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xf0eb914,
          },
          {
            month: 17,
            IDO: 0xcf29e3,
            "Initial Contributors": 0xa1d8b9,
            "Early Backers": 0x1e58a2b,
            "DumpOps Protocol incentives": 0x242f2c5,
            "Ecosystem + Community": 0x413377e,
            Airdrop: 0x645849c,
            "Circulating Supply": 0xff23ba6,
          },
          {
            month: 18,
            IDO: 0xcf29e3,
            "Initial Contributors": 0xc23744,
            "Early Backers": 0x246a5cd,
            "DumpOps Protocol incentives": 0x262648e,
            "Ecosystem + Community": 0x455ce19,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x10d5be38,
          },
          {
            month: 19,
            IDO: 0xcf29e3,
            "Initial Contributors": 0xe295d0,
            "Early Backers": 0x2a7c170,
            "DumpOps Protocol incentives": 0x281d657,
            "Ecosystem + Community": 0x49864b4,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x11b940ca,
          },
          {
            month: 20,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x102f45b,
            "Early Backers": 0x308dd12,
            "DumpOps Protocol incentives": 0x2a14820,
            "Ecosystem + Community": 0x4dafb50,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x129cc35c,
          },
          {
            month: 21,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x12352e7,
            "Early Backers": 0x369f8b4,
            "DumpOps Protocol incentives": 0x2c0b9ea,
            "Ecosystem + Community": 0x51d91eb,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x138045ee,
          },
          {
            month: 22,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x143b172,
            "Early Backers": 0x3cb1456,
            "DumpOps Protocol incentives": 0x2e02bb3,
            "Ecosystem + Community": 0x5602886,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1463c880,
          },
          {
            month: 23,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x1640ffd,
            "Early Backers": 0x42c2ff8,
            "DumpOps Protocol incentives": 0x2ff9d7c,
            "Ecosystem + Community": 0x5a2bf21,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x15474b12,
          },
          {
            month: 24,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x1846e89,
            "Early Backers": 0x48d4b9b,
            "DumpOps Protocol incentives": 0x31f0f45,
            "Ecosystem + Community": 0x5e555bc,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x162acda4,
          },
          {
            month: 25,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x1a4cd14,
            "Early Backers": 0x4ee673d,
            "DumpOps Protocol incentives": 0x33e810f,
            "Ecosystem + Community": 0x627ec57,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x170e5036,
          },
          {
            month: 26,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x1c52ba0,
            "Early Backers": 0x54f82df,
            "DumpOps Protocol incentives": 0x35df2d8,
            "Ecosystem + Community": 0x66a82f2,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x17f1d2c8,
          },
          {
            month: 27,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x1e58a2b,
            "Early Backers": 0x5b09e81,
            "DumpOps Protocol incentives": 0x37d64a1,
            "Ecosystem + Community": 0x6ad198d,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x18d5555a,
          },
          {
            month: 28,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x205e8b7,
            "Early Backers": 0x611ba24,
            "DumpOps Protocol incentives": 0x39cd66a,
            "Ecosystem + Community": 0x6efb029,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x19b8d7ec,
          },
          {
            month: 29,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x2264742,
            "Early Backers": 0x672d5c6,
            "DumpOps Protocol incentives": 0x3bc4834,
            "Ecosystem + Community": 0x73246c4,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1a9c5a7e,
          },
          {
            month: 30,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x246a5cd,
            "Early Backers": 0x6d3f168,
            "DumpOps Protocol incentives": 0x3dbb9fd,
            "Ecosystem + Community": 0x774dd5f,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1b7fdd10,
          },
          {
            month: 31,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x2670459,
            "Early Backers": 0x7350d0a,
            "DumpOps Protocol incentives": 0x3fb2bc6,
            "Ecosystem + Community": 0x7b773fa,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1c635fa2,
          },
          {
            month: 32,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x28762e4,
            "Early Backers": 0x79628ac,
            "DumpOps Protocol incentives": 0x41a9d8f,
            "Ecosystem + Community": 0x7fa0a95,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1d46e234,
          },
          {
            month: 33,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x2a7c170,
            "Early Backers": 0x7f7444f,
            "DumpOps Protocol incentives": 0x43a0f59,
            "Ecosystem + Community": 0x83ca130,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1e2a64c6,
          },
          {
            month: 34,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x2c81ffb,
            "Early Backers": 0x8585ff1,
            "DumpOps Protocol incentives": 0x4598122,
            "Ecosystem + Community": 0x87f37cb,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1f0de758,
          },
          {
            month: 35,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x2e87e86,
            "Early Backers": 0x8b97b93,
            "DumpOps Protocol incentives": 0x478f2eb,
            "Ecosystem + Community": 0x8c1ce66,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x1ff169ea,
          },
          {
            month: 36,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x308dd12,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x49864b4,
            "Ecosystem + Community": 0x9046502,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x20d4ec7c,
          },
          {
            month: 37,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x3293b9d,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x4b7d67e,
            "Ecosystem + Community": 0x946fb9d,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2157536c,
          },
          {
            month: 38,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x3499a29,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x4d74847,
            "Ecosystem + Community": 0x9899238,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x21d9ba5b,
          },
          {
            month: 39,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x369f8b4,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x4f6ba10,
            "Ecosystem + Community": 0x9cc28d3,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x225c214b,
          },
          {
            month: 40,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x38a573f,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5162bd9,
            "Ecosystem + Community": 0xa0ebf6e,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x22de883b,
          },
          {
            month: 41,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x3aab5cb,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5359da3,
            "Ecosystem + Community": 0xa515609,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2360ef2b,
          },
          {
            month: 42,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x3cb1456,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5550f6c,
            "Ecosystem + Community": 0xa93eca4,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x23e3561a,
          },
          {
            month: 43,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x3eb72e2,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5748135,
            "Ecosystem + Community": 0xad6833f,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2465bd0a,
          },
          {
            month: 44,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x40bd16d,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x593f2fe,
            "Ecosystem + Community": 0xb1919db,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x24e823fa,
          },
          {
            month: 45,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x42c2ff8,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5b364c8,
            "Ecosystem + Community": 0xb5bb076,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x256a8aea,
          },
          {
            month: 46,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x44c8e84,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5d2d691,
            "Ecosystem + Community": 0xb9e4711,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x25ecf1da,
          },
          {
            month: 47,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x46ced0f,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x5f2485a,
            "Ecosystem + Community": 0xbe0ddac,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x266f58c9,
          },
          {
            month: 48,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x48d4b9b,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x26f1bfb9,
          },
          {
            month: 49,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x4adaa26,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27121e45,
          },
          {
            month: 50,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x4ce08b1,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27327cd0,
          },
          {
            month: 51,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x4ee673d,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2752db5b,
          },
          {
            month: 52,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x50ec5c8,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x277339e7,
          },
          {
            month: 53,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x52f2454,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27939872,
          },
          {
            month: 54,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x54f82df,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27b3f6fe,
          },
          {
            month: 55,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x56fe16a,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27d45589,
          },
          {
            month: 56,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x5903ff6,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x27f4b414,
          },
          {
            month: 57,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x5b09e81,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x281512a0,
          },
          {
            month: 58,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x5d0fd0d,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2835712b,
          },
          {
            month: 59,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x5f15b98,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x2855cfb7,
          },
          {
            month: 60,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 61,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 62,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 63,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 64,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 65,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 66,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 67,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 68,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 69,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 70,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 71,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 72,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 73,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 74,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 75,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 76,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 77,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 78,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 79,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 80,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
          {
            month: 81,
            IDO: 0xcf29e3,
            "Initial Contributors": 0x611ba24,
            "Early Backers": 0x91a9735,
            "DumpOps Protocol incentives": 0x611ba24,
            "Ecosystem + Community": 0xc237447,
            Airdrop: 0x645849c,
            "Circulating Supply": 0x28762e42,
          },
        ],
        E = (e) => {
          let { payload: t } = e;
          if (!t || 0 === t.length) return null;
          let r = {
            IDO: "#3b82f6",
            "Initial Contributors": "#eab308",
            "Early Backers": "#f97316",
            "DumpOps Protocol incentives": "#ec4899",
            "Ecosystem + Community": "#8b5cf6",
            Airdrop: "#06b6d4",
          };
          return (0, s.jsx)("div", {
            className:
              "flex items-center justify-start flex-wrap gap-2 md:gap-5 mt-4",
            children: t.map((e, t) => {
              let i = r[e.dataKey] || e.color || "#ffffff";
              return (0, s.jsxs)(
                "div",
                {
                  className: "flex items-center gap-2",
                  children: [
                    (0, s.jsx)("div", {
                      className: "w-0.5 h-3",
                      style: { backgroundColor: i },
                    }),
                    (0, s.jsx)("span", {
                      className: "text-white text-xs font-medium",
                      children: e.value,
                    }),
                  ],
                },
                t
              );
            }),
          });
        },
        I = () => {
          let [e, t] = (0, i.useState)(1),
            [r, o] = (0, i.useState)("1"),
            [n, l] = (0, i.useState)(!1),
            c = O.filter((t) => t.month <= e),
            x = [{ name: "Total", icon: "", amount: 1e6 }],
            d = (0, i.useRef)(null),
            m = (0, i.useRef)(null),
            u = (0, i.useRef)([]),
            [y, f] = (0, i.useState)([]);
          (0, i.useEffect)(() => {
            u.current = u.current.slice(0, x.length);
          }, [x.length]),
            (0, i.useEffect)(() => {
              if (!n) {
                let e = setInterval(() => {
                  t((e) => {
                    let t = e >= 60 ? 1 : e + 1;
                    return o(t.toString()), t;
                  });
                }, 1e3);
                return () => clearInterval(e);
              }
            }, [n]),
            (0, i.useLayoutEffect)(() => {
              function e() {
                if (!m.current || !d.current) return;
                let e = m.current.getBoundingClientRect();
                f(
                  x.map((t, r) => {
                    let s = u.current[r];
                    if (!s) return { startX: 0, endX: 0 };
                    let i = s.getBoundingClientRect();
                    return { startX: e.width / 2, endX: -(i.width / 2) + 40 };
                  })
                );
              }
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, [x.length]);
          let I = O.find((t) => t.month === e),
            D = I ? I["Circulating Supply"] : 0,
            S = (D / 0x28762e42) * 100;
          return (0, s.jsxs)("div", {
            className: "flex flex-col relative",
            ref: d,
            children: [
              (0, s.jsxs)("div", {
                className: "flex md:flex-row flex-col w-full ",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "border border-primary/10 relative md:p-8 p-5 md:w-1/2 w-full",
                    ref: m,
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-sm",
                            children: "Month",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary/60",
                            children: "Max: 60 Months",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-between border border-primary/10 p-3 relative mt-2",
                        children: [
                          (0, s.jsx)(a.P, {}),
                          (0, s.jsx)("button", {
                            onClick: () => {
                              if ((l(!0), e > 1)) {
                                let r = e - 1;
                                t(r), o(r.toString());
                              }
                              setTimeout(() => {
                                l(!1);
                              }, 2e3);
                            },
                            children: (0, s.jsx)(w.H, { size: 16 }),
                          }),
                          (0, s.jsx)("input", {
                            type: "text",
                            value: r,
                            onFocus: () => {
                              l(!0);
                            },
                            onChange: (e) => {
                              let r = e.target.value;
                              if ((l(!0), "" === r || /^\d+$/.test(r)))
                                if ((o(r), "" === r)) t(1);
                                else {
                                  let e = Number(r);
                                  e >= 1 && e <= 60
                                    ? t(e)
                                    : e > 60
                                    ? t(60)
                                    : e < 1 && t(1);
                                }
                            },
                            onBlur: () => {
                              if ("" === r) o("1"), t(1);
                              else {
                                let e = Number(r);
                                e < 1
                                  ? (o("1"), t(1))
                                  : e > 60 && (o("60"), t(60));
                              }
                              setTimeout(() => {
                                l(!1);
                              }, 2e3);
                            },
                            onKeyDown: (e) => {
                              "Enter" === e.key && e.currentTarget.blur();
                            },
                            className:
                              "w-full text-sm text-center border-none outline-none",
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => {
                              if ((l(!0), e < 60)) {
                                let r = e + 1;
                                t(r), o(r.toString());
                              }
                              setTimeout(() => {
                                l(!1);
                              }, 2e3);
                            },
                            children: (0, s.jsx)(k.F, { size: 16 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "md:w-1/2 w-full border border-primary/10 relative md:p-8 p-5 ",
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [
                          (0, s.jsx)(p.default, {
                            src: "/products/icons/coins.svg",
                            alt: "DumpOps Console",
                            width: 20,
                            height: 20,
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary",
                            children:
                              "The token release schedule outlining the timeline and conditions under which $DUMP is gradually unlocked and distributed, ensuring controlled supply and preventing market shocks.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full border border-primary/10 relative md:p-8 p-5 h-fit",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex items-center justify-between flex-wrap gap-2",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-lg",
                        children: "Token Release Schedule",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, s.jsxs)("p", {
                            className: "text-sm",
                            children: [
                              "Circulating Supply: ",
                              ((e) =>
                                e >= 1e6
                                  ? `${(e / 1e6).toFixed(1)}M`
                                  : e >= 1e3
                                  ? `${(e / 1e3).toFixed(1)}K`
                                  : e.toLocaleString())(D),
                              " (",
                              S.toFixed(2),
                              "%)",
                            ],
                          }),
                          "\xb7",
                          (0, s.jsxs)("p", {
                            className: "text-sm",
                            children: [
                              "Total supply at genesis: ",
                              (0x28762e42).toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col gap-4",
                    children: x.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "border border-primary/10 p-5 flex justify-between items-center relative mt-6",
                          ref: (e) => {
                            u.current[t] = e;
                          },
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsx)(C.u, {
                              width: "100%",
                              height: 500,
                              children: (0, s.jsxs)(h.Q, {
                                data: c,
                                margin: { bottom: 32, right: 0, top: 20 },
                                children: [
                                  (0, s.jsxs)("defs", {
                                    children: [
                                      (0, s.jsxs)("linearGradient", {
                                        id: "totalGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#22c55e",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#22c55e",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "idoGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#3b82f6",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#3b82f6",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "initialGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#eab308",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#eab308",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "earlyGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#f97316",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#f97316",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "nodeopsGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#ec4899",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#ec4899",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "ecosystemGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#8b5cf6",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#8b5cf6",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("linearGradient", {
                                        id: "airdropGradient",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, s.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#06b6d4",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, s.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#06b6d4",
                                            stopOpacity: 0.05,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(b.W, {
                                    dataKey: "month",
                                    axisLine: !1,
                                    tickLine: !1,
                                    tick: {
                                      fill: "#444",
                                      fontSize: 12,
                                      fontWeight: 400,
                                    },
                                    tickMargin: 8,
                                    fontSize: 12,
                                  }),
                                  (0, s.jsx)(g.h, {
                                    axisLine: !1,
                                    tickLine: !1,
                                    tick: {
                                      fill: "#444",
                                      fontSize: 12,
                                      fontWeight: 400,
                                    },
                                    tickMargin: 8,
                                    width: 60,
                                    tickFormatter: (e) =>
                                      `${(e / 1e6).toFixed(0)}m`,
                                  }),
                                  (0, s.jsx)(j.m, {
                                    contentStyle: {
                                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                                      border:
                                        "1px solid rgba(255, 255, 255, 0.1)",
                                      borderRadius: "4px",
                                      color: "#fff",
                                      fontSize: "12px",
                                    },
                                    labelStyle: {
                                      color: "#fff",
                                      fontWeight: "500",
                                    },
                                    formatter: (e, t) => [
                                      `${(e / 1e6).toFixed(1)}M`,
                                      t,
                                    ],
                                    labelFormatter: (e) => `Month ${e}`,
                                  }),
                                  (0, s.jsx)(v.s, {
                                    wrapperStyle: { paddingTop: "20px" },
                                    iconType: "line",
                                    content: (0, s.jsx)(E, {}),
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "IDO",
                                    stroke: "#3b82f6",
                                    strokeWidth: 2,
                                    fill: "url(#idoGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "Initial Contributors",
                                    stroke: "#eab308",
                                    strokeWidth: 2,
                                    fill: "url(#initialGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "Early Backers",
                                    stroke: "#f97316",
                                    strokeWidth: 2,
                                    fill: "url(#earlyGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "DumpOps Protocol incentives",
                                    stroke: "#ec4899",
                                    strokeWidth: 2,
                                    fill: "url(#nodeopsGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "Ecosystem + Community",
                                    stroke: "#8b5cf6",
                                    strokeWidth: 2,
                                    fill: "url(#ecosystemGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "Airdrop",
                                    stroke: "#06b6d4",
                                    strokeWidth: 2,
                                    fill: "url(#airdropGradient)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        D = () => {
          let [e, t] = (0, i.useState)(2),
            [r, o] = (0, i.useState)(30),
            n = (() => {
              let e = [],
                t = Math.max(1, Math.floor(r / 10));
              for (let s = 1; s <= r; s += t)
                e.push({ day: `Day ${s}`, value: 7 * s });
              return (
                e[e.length - 1]?.day !== `Day ${r}` &&
                  e.push({ day: `Day ${r}`, value: 7 * r }),
                e
              );
            })(),
            l = [
              {
                name: "Total rewards",
                amount: (2 * e + 1.5 * e) * r,
                icon: "/products/icons/dollar.svg",
              },
            ],
            c = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            d = (0, i.useRef)([]),
            [m, u] = (0, i.useState)([]);
          return (
            (0, i.useEffect)(() => {
              d.current = d.current.slice(0, l.length);
            }, [l.length]),
            (0, i.useLayoutEffect)(() => {
              function e() {
                if (!x.current || !c.current) return;
                let e = x.current.getBoundingClientRect();
                u(
                  l.map((t, r) => {
                    let s = d.current[r];
                    if (!s) return { startX: 0, endX: 0 };
                    let i = s.getBoundingClientRect();
                    return { startX: e.width / 2, endX: -(i.width / 2) + 40 };
                  })
                );
              }
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, [l.length]),
            (0, s.jsxs)("div", {
              className: "flex md:flex-row flex-col md:gap-32 gap-6 relative",
              ref: c,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col md:w-[45%] w-full ",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "border border-primary/10 relative md:p-8 p-5",
                      ref: x,
                      children: [
                        (0, s.jsx)(a.P, {}),
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-sm text-primary/60",
                              children: "Your Compute units",
                            }),
                            (0, s.jsxs)("span", {
                              className: "text-primary",
                              children: [e, " CU"],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-between mt-6",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-sm text-primary/60",
                              children: "Your staked $DUMP",
                            }),
                            (0, s.jsxs)("span", {
                              className: "text-primary",
                              children: [200 * e + 2e3, " $DUMP"],
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "text-sm mt-6 text-primary/60",
                          children: "Duration",
                        }),
                        (0, s.jsx)(a.l6, {
                          wrapperClassName: "w-full mt-2",
                          options: [
                            { value: 7, label: "7 Days" },
                            { value: 30, label: "30 Days" },
                            { value: 90, label: "90 Days" },
                            { value: 180, label: "180 Days" },
                            { value: 365, label: "365 Days" },
                          ],
                          value: r,
                          onChange: (e) => o(Number(e.target.value)),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "border border-primary/10 relative md:p-8 p-5 ",
                      children: [
                        (0, s.jsx)(a.P, {}),
                        (0, s.jsxs)("div", {
                          className: "flex items-start gap-2",
                          children: [
                            (0, s.jsx)(p.default, {
                              src: "/icons/userDashed.svg",
                              alt: "DumpOps Console",
                              width: 20,
                              height: 20,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm text-primary",
                              children:
                                "Compute providers power the network by bonding a minimum of 2,000 $DUMP for registration and 200 $DUMP per 2 CU, earning rewards for maintaining performance and network stability.",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-start gap-2 mt-6",
                          children: [
                            (0, s.jsx)(p.default, {
                              src: "/products/icons/cpu.svg",
                              alt: "DumpOps Console",
                              width: 20,
                              height: 20,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm text-primary",
                              children:
                                "Compute Units (CUs) provide a measure of total Compute capacity — factoring in CPU performance, GPU acceleration, memory availability, and bandwidth — offered by providers to support network tasks.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                l.map((e, t) =>
                  (0, s.jsx)(
                    y,
                    {
                      containerRef: c,
                      fromRef: x,
                      toRef: { current: d.current[t] },
                      curvature: 130,
                      pathColor: "#fff",
                      pathWidth: 1.5,
                      pathOpacity: 0.15,
                      gradientStartColor: "#fff",
                      gradientStopColor: "#fff",
                      duration: 8 + 0.2 * t,
                      delay: 0.15 * t,
                      startXOffset: m[t]?.startX || 0,
                      endXOffset: m[t]?.endX - 40 || 0,
                      startYOffset: -50,
                      className: "-z-10 md:block hidden",
                      reverseS: !0,
                    },
                    e.name
                  )
                ),
                (0, s.jsxs)("div", {
                  className:
                    "md:w-[55%] w-full border border-primary/10 relative md:p-8 p-5 h-fit",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-lg",
                      children: "Expected rewards summary",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "border border-primary/10 p-5 flex justify-between items-center relative mt-6",
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsx)(C.u, {
                              width: "100%",
                              height: 300,
                              children: (0, s.jsxs)(h.Q, {
                                data: n,
                                margin: {
                                  bottom: 32,
                                  left: 20,
                                  right: 0,
                                  top: 0,
                                },
                                children: [
                                  (0, s.jsx)("defs", {
                                    children: (0, s.jsxs)("linearGradient", {
                                      id: "colorValue",
                                      x1: "0",
                                      y1: "0",
                                      x2: "0",
                                      y2: "1",
                                      children: [
                                        (0, s.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#22c55e",
                                          stopOpacity: 0.3,
                                        }),
                                        (0, s.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#22c55e",
                                          stopOpacity: 0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(b.W, {
                                    dataKey: "day",
                                    axisLine: !1,
                                    tickLine: !1,
                                    tick: {
                                      fill: "#444",
                                      fontSize: 12,
                                      fontWeight: 400,
                                    },
                                    tickMargin: 8,
                                    fontSize: 12,
                                  }),
                                  (0, s.jsx)(g.h, {
                                    axisLine: !1,
                                    tickLine: !1,
                                    tick: {
                                      fill: "#444",
                                      fontSize: 12,
                                      fontWeight: 400,
                                    },
                                    tickMargin: 8,
                                    width: 30,
                                  }),
                                  (0, s.jsx)(j.m, {
                                    contentStyle: {
                                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                                      border:
                                        "1px solid rgba(255, 255, 255, 0.1)",
                                      borderRadius: "4px",
                                      color: "#fff",
                                      fontSize: "12px",
                                    },
                                    labelStyle: {
                                      color: "#fff",
                                      fontWeight: "500",
                                    },
                                    formatter: (e) => [`${e} $DUMP`, "Rewards"],
                                    labelFormatter: (e) => e,
                                  }),
                                  (0, s.jsx)(N.G, {
                                    type: "monotone",
                                    dataKey: "value",
                                    stroke: "#22c55e",
                                    strokeWidth: 2,
                                    fill: "url(#colorValue)",
                                    dot: !1,
                                    activeDot: !1,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        l.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "border border-primary/10 p-3 flex justify-between items-center relative",
                              ref: (e) => {
                                d.current[t] = e;
                              },
                              children: [
                                (0, s.jsx)(a.P, {}),
                                (0, s.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "border border-primary/10 p-2",
                                      children: (0, s.jsx)(p.default, {
                                        src: e.icon,
                                        alt: "DumpOps Console",
                                        width: 28,
                                        height: 28,
                                      }),
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-sm",
                                      children: e.name,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("p", {
                                  className: "text-sm",
                                  children: [e.amount, " $DUMP"],
                                }),
                              ],
                            },
                            e.name
                          )
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var S = r(74224),
        P = r(81905),
        B = r(25613);
      let A = () => {
        let [e, t] = (0, i.useState)("0.2"),
          [r, o] = (0, i.useState)("100000"),
          [n, l] = (0, i.useState)("30"),
          [c, x] = (0, i.useState)("186529"),
          [d, m] = (0, i.useState)("0"),
          [p, u] = (0, i.useState)(!1),
          f = {
            tokenPrice: 0.1,
            burnMint: 0.2,
            revenue: 1e5,
            duration: 30,
            maxEmissionPerDay: 186529,
          },
          h = (() => {
            let t = Number(e) || f.burnMint,
              s = Number(d) || Number(d),
              i = Number(r) || f.revenue,
              a = Number(n) || f.duration,
              o = Number(c) || f.maxEmissionPerDay,
              l = s > 0 ? (i / s) * 0.5 : 0,
              x = i / 2,
              m = t > 0 ? Math.min(o * a, l / t) : 0,
              p = m * s;
            return {
              totalTokensBurned: isFinite(l) ? l : 0,
              burnValueInUSD: isFinite(x) ? x : 0,
              totalTokensMinted: isFinite(m) ? m : 0,
              mintValueInUSD: isFinite(p) ? p : 0,
              isBurnedGreaterThanMinted: l > m,
            };
          })(),
          b = (e) =>
            !isFinite(e) || isNaN(e) || e < 0
              ? "0.00"
              : e >= 1e6
              ? `${(e / 1e6).toFixed(1)}M`
              : e >= 1e3
              ? `${(e / 1e3).toFixed(1)}K`
              : e.toFixed(2),
          g = [
            {
              name: "Total Tokens Burned",
              amount: b(h.totalTokensBurned),
              percentage: 12,
              icon: (0, s.jsx)(S.T, { size: 24 }),
              key: "totalTokensBurned",
            },
            {
              name: "Burn Value (in USD)",
              amount: `$${b(h.burnValueInUSD)}`,
              percentage: 12,
              icon: (0, s.jsx)(P.o, { size: 24 }),
              key: "burnValueInUSD",
            },
            {
              name: "Total Tokens Minted (throughout the duration)",
              amount: b(h.totalTokensMinted),
              percentage: 12,
              icon: (0, s.jsx)(B.v, { size: 24 }),
              key: "totalTokensMinted",
            },
            {
              name: "Mint Value (in USD)",
              amount: `$${b(h.mintValueInUSD)}`,
              percentage: 12,
              icon: (0, s.jsx)(P.o, { size: 24 }),
              key: "mintValueInUSD",
            },
          ],
          j = (0, i.useRef)(null),
          v = (0, i.useRef)(null),
          N = (0, i.useRef)([]),
          [C, w] = (0, i.useState)([]);
        (0, i.useEffect)(() => {
          N.current = N.current.slice(0, g.length);
        }, [g.length]),
          (0, i.useLayoutEffect)(() => {
            function e() {
              if (!v.current || !j.current) return;
              let e = v.current.getBoundingClientRect();
              j.current.getBoundingClientRect(),
                w(
                  g.map((t, r) => {
                    let s = N.current[r];
                    if (!s) return { startX: 0, endX: 0 };
                    let i = s.getBoundingClientRect();
                    return { startX: e.width / 2, endX: -(i.width / 2) + 40 };
                  })
                );
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [g.length]);
        let k = () => {
          u(!0),
            fetch("https://oms-oneclick.nodeops.xyz/api/v1/node-token/price")
              .then((e) => e.json())
              .then((e) => {
                m(Number(e?.data).toFixed(3).toString()), u(!1);
              })
              .catch((e) => {
                console.log("Failed to fetch NODE price", e), u(!1);
              });
        };
        return (
          (0, i.useEffect)(() => {
            k();
          }, []),
          (0, s.jsxs)("div", {
            className: "flex md:flex-row flex-col md:gap-32 gap-6 relative",
            ref: j,
            children: [
              (0, s.jsxs)("div", {
                className: "flex flex-col md:w-[45%] w-full ",
                children: [
                  (0, s.jsxs)("div", {
                    ref: v,
                    className: "border border-primary/10 relative md:p-8 p-5",
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60",
                        children: "Burn/Mint Ratio",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        className: "w-full",
                        type: "number",
                        step: "0.01",
                        value: e,
                        onKeyDown: (e) => {
                          ["+", "-", "e", "E"].includes(e.key) &&
                            e.preventDefault();
                        },
                        onChange: (e) => {
                          let r = e.target.value;
                          t((r = r.replace(/[+\-eE]/g, "")));
                        },
                        onBlur: () => {
                          ("" === e || 0 >= Number(e)) &&
                            t(f.burnMint.toString());
                        },
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60 mt-4",
                        children: "$DUMP Token Price",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        rightLabel: "USD",
                        className: "w-full",
                        type: "number",
                        step: "0.01",
                        value: d,
                        onKeyDown: (e) => {
                          ["+", "-", "e", "E"].includes(e.key) &&
                            e.preventDefault();
                        },
                        onChange: (e) => {
                          let t = e.target.value;
                          m((t = t.replace(/[+\-eE]/g, "")));
                        },
                        onBlur: () => {
                          ("" === d || 0 >= Number(d)) &&
                            m(f.tokenPrice.toString());
                        },
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60 mt-4",
                        children: "Duration (in Days)",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        rightLabel: Number(n) > 1 ? "Days" : "Day",
                        className: "w-full",
                        type: "number",
                        min: "1",
                        max: "365",
                        value: n,
                        onKeyDown: (e) => {
                          ["+", "-", "e", "E", "."].includes(e.key) &&
                            e.preventDefault();
                        },
                        onChange: (e) => {
                          let t = e.target.value;
                          l((t = t.replace(/[^0-9]/g, "")));
                        },
                        onBlur: () => {
                          let e = Number(n);
                          "" === n || e <= 0
                            ? l(f.duration.toString())
                            : e > 365
                            ? l("365")
                            : e < 1 && l("1");
                        },
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60 mt-4",
                        children:
                          "Revenue Generated throughout the duration (in USD)",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        rightLabel: "USD",
                        className: "w-full",
                        type: "number",
                        step: "0.01",
                        value: r,
                        onKeyDown: (e) => {
                          ["+", "-", "e", "E"].includes(e.key) &&
                            e.preventDefault();
                        },
                        onChange: (e) => {
                          let t = e.target.value;
                          o((t = t.replace(/[+\-eE]/g, "")));
                        },
                        onBlur: () => {
                          ("" === r || 0 > Number(r)) &&
                            o(f.revenue.toString());
                        },
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm text-primary/60 mt-4",
                        children: "Max Emission Per Day (in NODE)",
                      }),
                      (0, s.jsx)(a.pd, {
                        wrapperClassName: "w-full mt-2",
                        rightLabel: "NODE",
                        className: "w-full",
                        type: "text",
                        value: c,
                        disabled: !0,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "border border-primary/10 relative md:p-8 p-5",
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsxs)("div", {
                        className: "flex items-start gap-2",
                        children: [
                          (0, s.jsx)(B.v, {
                            size: 20,
                            className: "text-primary shrink-0",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm text-primary",
                            children:
                              "The burn/mint ratio defines how much value must be burned to mint new $DUMP tokens. A higher ratio means more tokens are burned for each new one created, making the system more deflationary. This helps regulate supply and align token emissions with real network usage. The ratio can be adjusted dynamically by governance to respond to changes in demand, staking participation, or Protocol revenue, ensuring sustainable growth over time.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.map((e, t) =>
                (0, s.jsx)(
                  y,
                  {
                    containerRef: j,
                    fromRef: v,
                    toRef: { current: N.current[t] },
                    curvature: 60,
                    pathColor: "#fff",
                    pathWidth: 1.5,
                    pathOpacity: 0.15,
                    gradientStartColor: "#fff",
                    gradientStopColor: "#fff",
                    duration: 8 + 0.2 * t,
                    delay: 0.15 * t,
                    startXOffset: C[t]?.startX || 0,
                    endXOffset: C[t]?.endX - 40 || 0,
                    startYOffset: -8,
                    className: "-z-10 md:block hidden",
                    reverseS: !0,
                  },
                  e.name
                )
              ),
              (0, s.jsxs)("div", {
                className:
                  "md:w-[55%] w-full border border-primary/10 relative md:p-8 p-5 h-fit",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-lg",
                    children: "Dynamic mint and burn ratio",
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col gap-4 mt-4",
                    children: g.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          ref: (e) => {
                            N.current[t] = e;
                          },
                          className: `border border-primary/10 p-3 flex justify-between items-center relative ${
                            "totalTokensMinted" === e.key &&
                            h.isBurnedGreaterThanMinted
                              ? "bg-yellow-500/10"
                              : ""
                          }`,
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "border border-primary/10 p-2",
                                  children: e.icon,
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "text-sm",
                                      children: e.name,
                                    }),
                                    "totalTokensMinted" === e.key &&
                                      h.isBurnedGreaterThanMinted &&
                                      (0, s.jsx)("p", {
                                        className: "text-xs text-yellow-500",
                                        children: "Max equilibrium reached",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: "text-sm",
                              children: e.amount,
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var R = r(4276),
        $ = r(35695);
      let z = [
          { label: "Token release schedule", id: "release-schedule" },
          { label: "Revenue split", id: "revenue-split" },
          { label: "Dynamic burn & mint", id: "dynamic-burn-mint" },
          { label: "Rewards for Compute providers", id: "compute-providers" },
        ],
        T = () => {
          let e = (0, $.useRouter)(),
            t = (0, $.useSearchParams)(),
            [r, a] = (0, i.useState)(z[0].id),
            o = (0, i.useRef)(null),
            l = (0, i.useRef)(!1);
          (0, i.useEffect)(() => {
            let e = t.get("tab");
            if (e) {
              let t = z.find((t) => t.id === e);
              t && a(t.id);
            }
          }, [t]),
            (0, i.useEffect)(() => {
              if (t.get("tab") && o.current && !l.current) {
                l.current = !0;
                let e = setTimeout(() => {
                  o.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
                return () => clearTimeout(e);
              }
            }, [t]);
          let c = (r) => {
            let s = z.find((e) => e.id === r);
            if ((a(s?.id), s)) {
              let r = new URLSearchParams(t);
              r.set("tab", s.id), e.push(`?${r.toString()}`, { scroll: !1 });
            }
          };
          return (0, s.jsx)("div", {
            ref: o,
            children: (0, s.jsxs)(n.A, {
              className: "my-20 ",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4",
                  children: (0, s.jsx)("p", {
                    className: "text-2xl md:text-3xl text-left text-nowrap",
                    children: "Tokenomics simulator",
                  }),
                }),
                (0, s.jsx)(R.t, {
                  tabs: z?.map((e) => ({ id: e.id, label: e.label })),
                  activeTab: r,
                  className: "place-self-center pr-2",
                  onChange: (e) => c?.(e),
                }),
                (0, s.jsxs)("div", {
                  className: "w-full mt-6 max-w-6xl mx-auto",
                  children: [
                    "revenue-split" === r &&
                      (0, s.jsx)(
                        u.P.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          children: (0, s.jsx)(f, {}),
                        },
                        r
                      ),
                    "compute-providers" === r &&
                      (0, s.jsx)(
                        u.P.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          children: (0, s.jsx)(D, {}),
                        },
                        r
                      ),
                    "release-schedule" === r &&
                      (0, s.jsx)(
                        u.P.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          children: (0, s.jsx)(I, {}),
                        },
                        r
                      ),
                    "dynamic-burn-mint" === r &&
                      (0, s.jsx)(
                        u.P.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          children: (0, s.jsx)(A, {}),
                        },
                        r
                      ),
                  ],
                }),
              ],
            }),
          });
        };
      var F = r(24453),
        M = r(76256),
        G = r(16162);
      let L = [
          {
            icon: (0, s.jsx)(F.k, { size: 28 }),
            title: "Dynamic burn & mint",
            description:
              "As users pay, $DUMP is burned; as revenue is earned, $DUMP is minted",
          },
          {
            icon: (0, s.jsx)(M.p, { size: 28 }),
            title: "Bonding-driven Compute onboarding",
            description: "Bond $DUMP to onboard machines",
          },
          {
            icon: (0, s.jsx)(G.N, { size: 28 }),
            title: "Governance",
            description: "Drive DumpOps' economic policy",
          },
        ],
        X = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children:
                  "A demand-driven token built for real utility, not hype",
              }),
              (0, s.jsxs)("p", {
                className:
                  "text-lg text-primary/60 text-center mt-5 max-w-4xl mx-auto",
                children: [
                  "DumpOps Network delivers verifiable, reliable Compute through its AI-powered orchestration layer.",
                  (0, s.jsx)("br", {}),
                  "At the core, $DUMP coordinates the economic alignment between users, providers, and Protocol operations.",
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "grid lg:grid-cols-3 border-t border-b border-primary/20 mt-8",
                children: L.map((e) =>
                  (0, s.jsxs)(
                    a.Zp,
                    {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: e.icon,
                        }),
                        (0, s.jsx)("p", {
                          className: "text-lg mt-4",
                          children: e.title,
                        }),
                        (0, s.jsx)("p", {
                          className: "text-lg mt-1 text-primary/40",
                          children: e.description,
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
            ],
          });
      var K = r(55404),
        W = r(94832),
        U = r(19260);
      let V = [
          {
            icon: (0, s.jsx)(K.e, { size: 28 }),
            title: "Optimally-controlled burn/mint ratio",
          },
          {
            icon: (0, s.jsx)(W.p, { size: 28 }),
            title: "Max emissions capped at 186,529 $DUMP/day",
          },
          {
            icon: (0, s.jsx)(B.v, { size: 28 }),
            title: "50% of all revenue is burned",
          },
          {
            icon: (0, s.jsx)(U.g, { size: 28 }),
            title: "Community driven economic control",
          },
        ],
        Q = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children: "Revenue-backed token issuance",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-lg text-primary/60 text-center mt-5 max-w-4xl mx-auto",
                children:
                  "DumpOps Network uses a dynamic mint-and-burn model that links $DUMP emissions directly to on-chain revenue, aligning supply with real usage.",
              }),
              (0, s.jsx)("div", {
                className: "grid md:grid-cols-2 mt-8",
                children: V.map((e) =>
                  (0, s.jsxs)("div", {
                    className: "w-full p-5 border border-primary/10 relative",
                    children: [
                      (0, s.jsx)(a.P, {}),
                      (0, s.jsx)("div", {
                        className:
                          "w-12 h-12 border border-primary/20 flex items-center justify-center",
                        children: e.icon,
                      }),
                      (0, s.jsx)("p", {
                        className: "text-xl mt-4",
                        children: e.title,
                      }),
                    ],
                  })
                ),
              }),
            ],
          });
      var _ = r(43444),
        Y = r(74942),
        H = r(24671),
        q = r(36364),
        Z = r(48996),
        J = r(5015),
        ee = r(42971),
        et = r(45626),
        er = r(8782),
        es = r(34e3),
        ei = r(54811);
      let ea = [
          {
            title: "Community allocation",
            percentage: 47.5,
            icon: (0, s.jsx)(_.n, { size: 45, weight: "light" }),
            color: "#51e5ff",
          },
          {
            title: "Initial contributors",
            percentage: 15,
            icon: (0, s.jsx)(Y.f, { size: 45, weight: "light" }),
            color: "#335CFF",
          },
          {
            title: "DumpOps Protocol incentives",
            percentage: 15,
            icon: (0, s.jsx)(H.f, { size: 45, weight: "light" }),
            color: "#7D52F4",
          },
          {
            title: "Early backers",
            percentage: 22.5,
            icon: (0, s.jsx)(q.K, { size: 45, weight: "light" }),
            color: "#38C793",
          },
        ],
        eo = [
          {
            title: "Community & ecosystem growth",
            percentage: 30,
            icon: (0, s.jsx)(G.N, { size: 45, weight: "light" }),
            color: "#51e5ff",
          },
          {
            title: "IDO",
            percentage: 2,
            icon: (0, s.jsx)(Z.t, { size: 45, weight: "light" }),
            color: "#FF8C42 ",
          },
          {
            title: "Airdrop",
            percentage: 15.5,
            icon: (0, s.jsx)(J.c, { size: 45, weight: "light" }),
            color: "#FFEF00",
          },
          {
            title: "DumpOps Protocol incentives",
            percentage: 15,
            icon: (0, s.jsx)(H.f, { size: 45, weight: "light" }),
            color: "#7D52F4 ",
          },
          {
            title: "Initial contributors",
            percentage: 15,
            icon: (0, s.jsx)(Y.f, { size: 45, weight: "light" }),
            color: "#335CFF",
          },
          {
            title: "Early backers",
            percentage: 22.5,
            icon: (0, s.jsx)(q.K, { size: 45, weight: "light" }),
            color: "#38C793",
          },
        ],
        en = (e) => {
          let { active: t, payload: r } = e;
          return t && r && r.length
            ? (0, s.jsxs)("div", {
                className:
                  "bg-black/90 backdrop-blur-sm border border-primary/20 p-3 rounded-lg shadow-lg",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-white font-medium",
                    children: r[0].payload.title,
                  }),
                  (0, s.jsx)("p", {
                    className: "text-primary/80",
                    children: `${r[0].value}%`,
                  }),
                ],
              })
            : null;
        },
        el = () => {
          let [e, t] = (0, i.useState)(!1),
            [r, o] = (0, i.useState)(0),
            l = () => {
              o((e) => e + 1), t(!e);
            };
          return (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children:
                  "Designed for long-term community aligned, optimally controlled economics",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-lg text-primary/60 text-center mt-5 max-w-3xl mx-auto",
                children:
                  "At genesis, $DUMP supply is 678,833,730 tokens. Distribution and further emissions are designed to ensure fairness, long-term growth, and to align with Protocol activity.",
              }),
              (0, s.jsxs)("div", {
                className: "border border-primary/10 md:p-8 p-4 mt-8 relative",
                children: [
                  (0, s.jsx)(a.P, { className: "w-5 h-5" }),
                  (0, s.jsxs)("p", {
                    className: "text-2xl text-primary/50 text-center mt-8",
                    children: [
                      "Total supply at genesis:",
                      " ",
                      (0, s.jsx)("span", {
                        className: "text-primary",
                        children: " 678,833,730 $DUMP",
                      }),
                    ],
                  }),
                  e
                    ? (0, s.jsxs)("div", {
                        className:
                          "flex md:flex-row flex-col mt-10 max-w-5xl mx-auto h-full",
                        children: [
                          (0, s.jsx)("div", {
                            className: "md:w-1/2 w-full h-full",
                            children: eo.map((e, t) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between px-4 py-6 border border-primary/10 relative",
                                  children: [
                                    (0, s.jsx)(a.P, {}),
                                    (0, s.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "flex items-center justify-center",
                                          style: { color: e.color },
                                          children: e.icon,
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "md:text-xl",
                                          children: e.title,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "md:text-xl",
                                      style: { color: e.color },
                                      children: [e.percentage, "%"],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "md:w-1/2 w-full relative border border-primary/10 h-[400px] md:h-auto",
                              children: [
                                (0, s.jsx)(a.P, {}),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col h-full",
                                  children: [
                                    (0, s.jsx)(C.u, {
                                      width: "100%",
                                      height: "100%",
                                      className: "flex-1",
                                      children: (0, s.jsxs)(
                                        er.r,
                                        {
                                          children: [
                                            (0, s.jsx)(es.F, {
                                              data: eo,
                                              cx: "50%",
                                              cy: "50%",
                                              innerRadius: 90,
                                              outerRadius: 150,
                                              dataKey: "percentage",
                                              stroke: "none",
                                              animationDuration: 300,
                                              animationBegin: 0,
                                              children: eo.map((e, t) =>
                                                (0, s.jsx)(
                                                  ei.f,
                                                  {
                                                    fill: e.color,
                                                    stroke: "none",
                                                  },
                                                  `cell-${t}`
                                                )
                                              ),
                                            }),
                                            (0, s.jsx)(j.m, {
                                              content: (0, s.jsx)(en, {}),
                                            }),
                                          ],
                                        },
                                        r
                                      ),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "border-t border-primary/10 px-6 py-4 relative w-full flex items-center justify-center gap-2 cursor-pointer",
                                      onClick: l,
                                      children: [
                                        (0, s.jsx)(a.P, {}),
                                        e && (0, s.jsx)(ee.Z, { size: 18 }),
                                        (0, s.jsx)("p", {
                                          className: "text-center",
                                          children: e
                                            ? "Back"
                                            : "Breakdown of Community allocation",
                                        }),
                                        !e && (0, s.jsx)(et.K, { size: 18 }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            "breakdown"
                          ),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className:
                          "flex md:flex-row flex-col mt-10 max-w-5xl mx-auto",
                        children: [
                          (0, s.jsx)("div", {
                            className: "md:w-1/2 w-full h-full",
                            children: ea.map((e, t) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between px-4 py-6 border border-primary/10 relative",
                                  children: [
                                    (0, s.jsx)(a.P, {}),
                                    (0, s.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "flex items-center justify-center",
                                          style: { color: e.color },
                                          children: e.icon,
                                        }),
                                        (0, s.jsx)("span", {
                                          className: "text-xl",
                                          children: e.title,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "text-xl",
                                      style: { color: e.color },
                                      children: [e.percentage, "%"],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "md:w-1/2 w-full relative border border-primary/10 h-[400px] md:h-auto",
                              children: [
                                (0, s.jsx)(a.P, {}),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col h-full",
                                  children: [
                                    (0, s.jsx)(C.u, {
                                      width: "100%",
                                      height: "100%",
                                      className: "flex-1",
                                      children: (0, s.jsxs)(
                                        er.r,
                                        {
                                          children: [
                                            (0, s.jsx)(es.F, {
                                              data: ea,
                                              cx: "50%",
                                              cy: "50%",
                                              innerRadius: 90,
                                              outerRadius: 150,
                                              dataKey: "percentage",
                                              stroke: "none",
                                              animationDuration: 300,
                                              animationBegin: 0,
                                              children: ea.map((e, t) =>
                                                (0, s.jsx)(
                                                  ei.f,
                                                  {
                                                    fill: e.color,
                                                    stroke: "none",
                                                  },
                                                  `cell-long-term-${t}`
                                                )
                                              ),
                                            }),
                                            (0, s.jsx)(j.m, {
                                              content: (0, s.jsx)(en, {}),
                                            }),
                                          ],
                                        },
                                        r
                                      ),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "border-t border-primary/10 px-6 py-4 relative w-full flex items-center justify-center gap-2 cursor-pointer",
                                      onClick: l,
                                      children: [
                                        (0, s.jsx)(a.P, {}),
                                        e && (0, s.jsx)(ee.Z, { size: 18 }),
                                        (0, s.jsx)("p", {
                                          className: "text-center",
                                          children: e
                                            ? "Back"
                                            : "Breakdown of Community allocation",
                                        }),
                                        !e && (0, s.jsx)(et.K, { size: 18 }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            "not-breakdown"
                          ),
                        ],
                      }),
                ],
              }),
            ],
          });
        };
      var ec = r(34451),
        ex = r(58022);
      let ed = [
          {
            title: "Burn",
            subtitle: "Supply reduction",
            percentage: 50,
            icon: (0, s.jsx)(B.v, { size: 24, weight: "light" }),
            color: "#E93544",
          },
          {
            title: "Compute Providers",
            subtitle: "Incentivizing infrastructure",
            percentage: 25,
            icon: (0, s.jsx)(ec.t, { size: 24, weight: "light" }),
            color: "#335CFF",
          },
          {
            title: "Treasury",
            subtitle: "Network development",
            percentage: 15,
            icon: (0, s.jsx)(ex.p, { size: 24, weight: "light" }),
            color: "#FFEF00",
          },
          {
            title: "Stakers",
            subtitle: "Security & capital retention",
            percentage: 10,
            icon: (0, s.jsx)(S.T, { size: 24, weight: "light" }),
            color: "#38C793",
          },
        ],
        em = (e) => {
          let { active: t, payload: r } = e;
          return t && r && r.length
            ? (0, s.jsxs)("div", {
                className:
                  "bg-black/90 backdrop-blur-sm border border-primary/20 p-3 rounded-lg shadow-lg",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-white font-medium",
                    children: r[0].payload.title,
                  }),
                  (0, s.jsx)("p", {
                    className: "text-primary/80",
                    children: `${r[0].value}%`,
                  }),
                ],
              })
            : null;
        },
        ep = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("div", {
                className: "flex justify-between items-start mb-8",
                children: (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-3xl text-center md:text-left",
                      children: "Revenue allocation",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-lg text-primary/60 text-center md:text-left mt-2",
                      children:
                        "Learn more about how does DumpOps Network distributes revenue generated by the Protocol",
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className: "border border-primary/10 md:p-8 p-4 relative ",
                children: [
                  (0, s.jsx)(a.P, { className: "w-5 h-5" }),
                  (0, s.jsxs)("div", {
                    className: "flex md:flex-row flex-col  max-w-5xl mx-auto",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "md:w-1/2 w-full border border-primary/10 relative h-[400px] md:h-auto",
                        children: [
                          (0, s.jsx)(a.P, {}),
                          (0, s.jsx)(C.u, {
                            width: "100%",
                            height: "100%",
                            children: (0, s.jsxs)(er.r, {
                              children: [
                                (0, s.jsx)(es.F, {
                                  data: ed,
                                  cx: "50%",
                                  cy: "50%",
                                  innerRadius: 80,
                                  outerRadius: 140,
                                  dataKey: "percentage",
                                  stroke: "none",
                                  children: ed.map((e, t) =>
                                    (0, s.jsx)(
                                      ei.f,
                                      { fill: e.color, stroke: "none" },
                                      `cell-${t}`
                                    )
                                  ),
                                }),
                                (0, s.jsx)(j.m, {
                                  content: (0, s.jsx)(em, {}),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "md:w-1/2 w-full flex flex-col justify-center",
                        children: ed.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-center justify-between px-6 py-4 border border-primary/10 relative",
                              children: [
                                (0, s.jsx)(a.P, { className: "w-3 h-3" }),
                                (0, s.jsxs)("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "flex items-center justify-center",
                                      style: { color: e.color },
                                      children: e.icon,
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "md:text-xl block",
                                          children: e.title,
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "md:text-lg text-primary/60 block",
                                          children: e.subtitle,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("span", {
                                  className: "text-xl",
                                  style: { color: e.color },
                                  children: [e.percentage, "%"],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        eu = [
          {
            feature: "Revenue-backed emissions",
            reason: "Inflation only happens with real usage",
          },
          {
            feature: "DAO-controlled mint ratio",
            reason: "Parameters adjust every epoch",
          },
          {
            feature: "50% burn rule",
            reason: "Supply shrinks with every transaction",
          },
          { feature: "Token bonding", reason: "Ensures economic alignment" },
          {
            feature: "Fully onchain + auditable",
            reason: "Transparent & verifiable by anyone",
          },
        ],
        ey = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children: "Engineered scarcity, transparent growth",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-lg text-primary/60 text-center mt-5 max-w-3xl mx-auto",
                children:
                  "$DUMP is not an inflationary reward token — it’s a real-time reflection of Protocol demand, with supply governed by revenue, usage, and verifiable network activity.",
              }),
              (0, s.jsxs)("div", {
                className: "overflow-x-auto mt-8",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex w-full text-base text-primary/60 bg-primary/10 border border-primary/10 px-6 py-3",
                    children: [
                      (0, s.jsx)("div", {
                        className: "w-1/2 font-normal",
                        children: "Feature",
                      }),
                      (0, s.jsx)("div", {
                        className: "w-1/2 font-normal",
                        children: "Why it matters",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col mt-2",
                    children: eu.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "flex w-full items-center px-6 py-4 border border-primary/10 relative",
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsx)("div", {
                              className:
                                "w-1/2 text-white text-base md:text-2xl",
                              children: e.feature,
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-1/2 text-green-500 text-base md:text-2xl",
                              children: e.reason,
                            }),
                          ],
                        },
                        e.feature
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ef = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children: "The $DUMP demand loop",
              }),
              (0, s.jsx)(p.default, {
                src: "/demandLoop.webp",
                alt: "Demand Loop",
                width: 1e3,
                height: 1e3,
                className: "md:w-2/3 w-full  mt-10 mx-auto",
              }),
            ],
          }),
        eh = [
          {
            epoch: "Q3 2025",
            MintBurnRatio: "0.20",
            Phase: "Bootstrapping incentives",
          },
          {
            epoch: "Q4 2025",
            MintBurnRatio: "0.32",
            Phase: "Moderate tapering",
          },
          {
            epoch: "Q1 2026",
            MintBurnRatio: "0.48",
            Phase: "Transition to baseline",
          },
          {
            epoch: "Q2+ 2026",
            MintBurnRatio: "0.72",
            Phase: "Long-term equilibrium",
          },
        ],
        eb = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-2xl md:text-3xl text-center",
                children: "Revenue share & optimal control of emissions",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-base md:text-lg text-primary/60 text-center mt-3 md:mt-5 max-w-3xl mx-auto px-4",
                children: "Governed burn/mint ratios tied to real usage.",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-base md:text-lg text-primary/60 text-center mt-3 md:mt-5 max-w-4xl mx-auto px-4",
                children:
                  "The Protocol uses epoch-based, governance-controlled burn/mint ratios, capped emissions, and transparent allocations. All token mints are traceable to actual network activity, ensuring accountable and demand-driven supply.",
              }),
              (0, s.jsxs)("div", {
                className:
                  "border border-primary/10 relative mt-6 md:mt-8 mx-4 md:mx-0",
                children: [
                  (0, s.jsx)(a.P, { className: "w-5 h-5" }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border-b border-primary/10 w-full",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "text-base md:text-lg text-primary/60 md:min-w-[300px] px-4 md:px-6 py-3 md:py-4",
                        children: "Core mint formula",
                      }),
                      (0, s.jsxs)("span", {
                        className:
                          "px-4 md:px-6 py-3 md:py-4 italic font-semibold font-mono text-xl md:text-3xl text-center flex-1 md:border-l border-primary/10 break-words",
                        children: [
                          "Minted",
                          (0, s.jsx)("sub", { children: "t" }),
                          " = Revenue",
                          (0, s.jsx)("sub", { children: "t" }),
                          " / (r(t) * P",
                          (0, s.jsx)("sub", { children: "t" }),
                          ")",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row gap-4 md:gap-10 border-b border-primary/10 w-full",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "text-base md:text-lg text-primary/60 md:min-w-[300px] px-4 md:px-6 py-3 md:py-4",
                        children: "Where",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col w-full text-base md:text-lg",
                        children: [
                          (0, s.jsxs)("span", {
                            className:
                              "px-4 md:px-6 py-3 md:py-4 border-b md:border-b md:border-l border-primary/10",
                            children: [
                              (0, s.jsx)("span", {
                                className: "font-semibold italic font-mono",
                                children: "Revenue",
                              }),
                              (0, s.jsx)("sub", {
                                className: "font-semibold italic font-mono",
                                children: "t",
                              }),
                              " is daily Protocol revenue (USD)",
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className:
                              "px-4 md:px-6 py-3 md:py-4 border-b md:border-b md:border-l border-primary/10",
                            children: [
                              (0, s.jsx)("span", {
                                className: "font-semibold italic font-mono",
                                children: "P",
                              }),
                              (0, s.jsx)("sub", {
                                className: "font-semibold italic font-mono",
                                children: "t",
                              }),
                              " is $DUMP Token price",
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className:
                              "px-4 md:px-6 py-3 md:py-4 md:border-l border-primary/10",
                            children: [
                              (0, s.jsx)("span", {
                                className: "font-semibold italic font-mono",
                                children: "r",
                              }),
                              (0, s.jsx)("sub", {
                                className: "font-semibold italic font-mono",
                                children: "(t)",
                              }),
                              " is the burn/mint ratio (adjusted each epoch)",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row gap-4 md:gap-10 w-full",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "text-base md:text-lg text-primary/60 md:min-w-[300px] px-4 md:px-6 py-3 md:py-4",
                        children: "Note",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "w-full text-base md:text-lg px-4 md:px-6 py-3 md:py-4 md:border-l border-primary/10 text-primary/60",
                        children: [
                          "The ratio r(t) is set via governance and",
                          " ",
                          (0, s.jsx)("strong", {
                            children: "can be adjusted dynamically",
                          }),
                          " based on token velocity, revenue velocity, and staking participation – a system rooted in",
                          " ",
                          (0, s.jsx)("span", {
                            className: "font-bold",
                            children: "optimal dynamic control.",
                          }),
                          (0, s.jsxs)("div", {
                            className: "mt-6 md:mt-8",
                            children: [
                              (0, s.jsx)("span", {
                                className: "font-semibold text-primary",
                                children:
                                  "Adaptive ratio control (governance-driven)",
                              }),
                              (0, s.jsx)("p", {
                                className: "mt-2",
                                children:
                                  "DumpOps starts with an initial burn/mint ratio of 0.20 to stimulate early growth, and tightens emissions over time. This ensures early adopters, Node operators, and stakers are fairly rewarded without long-term oversupply",
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-6 md:mt-8",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "font-semibold text-primary",
                                    children: "Example ratio cycle",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "overflow-x-auto mt-2",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex w-full text-sm md:text-base text-primary/60 bg-primary/10 border border-primary/10 px-4 md:px-6 py-3 min-w-[600px]",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "w-1/3 font-normal",
                                            children: "Epoch (Quarter)",
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "w-1/3 font-normal",
                                            children: "Burn/Mint Ratio",
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "w-1/3 font-normal",
                                            children: "Phase",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex flex-col mt-2 min-w-[600px]",
                                        children: eh.map((e, t) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex w-full items-center px-4 md:px-6 py-3 md:py-4 border border-primary/10 relative",
                                              children: [
                                                (0, s.jsx)(a.P, {}),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "w-1/3 text-primary text-sm md:text-base",
                                                  children: e.epoch,
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "w-1/3 text-primary/60 text-sm md:text-base",
                                                  children: e.MintBurnRatio,
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "w-1/3 text-primary/60 text-sm md:text-base",
                                                  children: e.Phase,
                                                }),
                                              ],
                                            },
                                            e.epoch
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        eg = [
          {
            category: "IDO",
            tokens: "13,576,675",
            percentage: "2.0%",
            vestingSchedule: "100% unlocked at genesis",
          },
          {
            category: "Airdrop",
            tokens: "105,221,229",
            percentage: "15.5%",
            vestingSchedule:
              "80% unlocked at genesis, 10% unlocks at 6 months, 10% unlocks at 9 months",
          },
          {
            category: "Community & Ecosystem Growth",
            tokens: "203,650,119",
            percentage: "30.0%",
            vestingSchedule:
              "6-month cliff, followed by 60-month linear vest (90% locked at genesis)",
          },
          {
            category: "Early Backers",
            tokens: "152,137,590",
            percentage: "22.5%",
            vestingSchedule:
              "12-month cliff, 36-month total linear vest (100% locked at genesis)",
          },
          {
            category: "DumpOps Protocol Incentives",
            tokens: "101,825,059",
            percentage: "15.0%",
            vestingSchedule:
              "15% unlocked at TGE, 6 months cliff, 48 months total linear vest",
          },
          {
            category: "Initial Contributors",
            tokens: "101,825,059",
            percentage: "15.0%",
            vestingSchedule:
              "12-months cliff, 60 months total linear vest (100% locked at genesis)",
          },
        ],
        ej = () =>
          (0, s.jsxs)(n.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-2xl md:text-3xl text-center",
                children: "Token Distribution & Vesting Schedule",
              }),
              (0, s.jsx)("p", {
                className:
                  "text-base md:text-lg text-primary/60 text-center mt-3 md:mt-5 max-w-3xl mx-auto px-4",
                children:
                  "Transparent allocation across key stakeholder groups with aligned vesting schedules.",
              }),
              (0, s.jsxs)("div", {
                className: "overflow-x-auto mt-6 md:mt-8 mx-4 md:mx-0",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex w-full text-sm md:text-base text-primary/60 bg-primary/10 border border-primary/10 px-4 md:px-6 py-3 min-w-[900px]",
                    children: [
                      (0, s.jsx)("div", {
                        className: "w-1/4 font-normal",
                        children: "Category",
                      }),
                      (0, s.jsx)("div", {
                        className: "w-1/6 font-normal",
                        children: "Tokens",
                      }),
                      (0, s.jsx)("div", {
                        className: "w-1/6 font-normal",
                        children: "% of Genesis Supply",
                      }),
                      (0, s.jsx)("div", {
                        className: "w-5/12 font-normal",
                        children: "Vesting Schedule",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col mt-2 min-w-[900px]",
                    children: eg.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "flex w-full items-center px-4 md:px-6 py-4 border border-primary/10 relative",
                          children: [
                            (0, s.jsx)(a.P, {}),
                            (0, s.jsx)("div", {
                              className:
                                "w-1/4 text-white text-sm md:text-base font-medium",
                              children: e.category,
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-1/6 text-primary/80 text-sm md:text-base font-mono",
                              children: e.tokens,
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-1/6 text-primary/80 text-sm md:text-base",
                              children: e.percentage,
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-5/12 text-primary/60 text-xs md:text-sm leading-relaxed",
                              children: e.vestingSchedule,
                            }),
                          ],
                        },
                        e.category
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ev = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(el, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(ej, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(eb, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(i.Suspense, {
                fallback: (0, s.jsx)("div", {
                  className: "flex justify-center items-center py-20",
                  children: "Loading tokenomics simulator...",
                }),
                children: (0, s.jsx)(T, {}),
              }),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(X, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(Q, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(ep, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(ey, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
              (0, s.jsx)(ef, {}),
              (0, s.jsx)(n.A, {
                className: "my-20",
                children: (0, s.jsx)(m.A, {}),
              }),
            ],
          });
    },
    60013: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var s = r(95155),
        i = r(36356);
      r(12115);
      let a = (e) => {
        let { className: t = "" } = e;
        return (0, s.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, s.jsxs)(i.P.div, {
            className: "absolute inset-0 flex",
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 12, ease: "linear", repeat: 1 / 0 },
            children: [
              (0, s.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, s.jsx)("line", {
                  x1: "0",
                  y1: "1",
                  x2: "100%",
                  y2: "1",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeDasharray: "8 8",
                  className: "opacity-30",
                }),
              }),
              (0, s.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, s.jsx)("line", {
                  x1: "0",
                  y1: "1",
                  x2: "100%",
                  y2: "1",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeDasharray: "8 8",
                  className: "opacity-30",
                }),
              }),
            ],
          }),
        });
      };
    },
    63909: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 40685));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [3495, 5753, 6080, 6766, 6874, 1332, 5783, 8441, 1684, 7358], () =>
      t(63909)
    ),
      (_N_E = e.O());
  },
]);
