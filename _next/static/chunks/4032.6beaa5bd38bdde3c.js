(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4032],
  {
    34032: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var r = n(95155),
        i = n(12115),
        a = n(2467),
        o = n(44677),
        s = n(42198);
      let l = { some: 0, all: 1 };
      var c = n(36356),
        d = n(54668),
        u = n.n(d),
        f = n(75783),
        h = n(67052),
        v = n(6874),
        p = n.n(v),
        m = n(55645),
        b = n(8300),
        g = n(84070);
      let x = [
          {
            title: "DumpOps Cloud",
            description: "Permissionless DePIN verifiable Compute marketplace",
            riveAsset: "/rive/cloud.riv",
            getStartedLink: "https://cloud.nodeops.network",
            learnMoreLink:
              "https://docs.nodeops.network/Core-Services/orchestrated-cloud",
          },
          {
            title: "DumpOps Console",
            description:
              "Node-as-a-Service (NaaS) one-click dashboard serving multiple blockchains",
            riveAsset: "/rive/node_console.riv",
            getStartedLink: "https://console.nodeops.network/",
            learnMoreLink:
              "https://docs.nodeops.network/Core-Services/no-code-console",
          },
          {
            title: "NodePad",
            description: "Bootstrap your Node network permissionlessly",
            riveAsset: "/rive/nodepad_launchpad.riv",
            getStartedLink: "",
            learnMoreLink: "",
            isContactUs: !0,
          },
          {
            title: "Agent Terminal",
            description: "Collaborative AI agent development sandbox",
            riveAsset: "/rive/agent_terminal.riv",
            getStartedLink: "",
            learnMoreLink:
              "https://docs.nodeops.network/Core-Services/agent-terminal",
            isComingSoon: !0,
          },
          {
            title: "RPC Services",
            description: "Institutional-grade RPC Node operations",
            riveAsset: "/rive/rpc.riv",
            getStartedLink: "",
            learnMoreLink: "",
            isContactUs: !0,
          },
          {
            title: "Security Hub",
            description:
              "AI-powered code vulnerability detection and correction",
            riveAsset: "/rive/security_hub.riv",
            getStartedLink: "https://cloud.nodeops.network/scan",
            learnMoreLink:
              "https://docs.nodeops.network/Core-Services/security",
          },
          {
            title: "Staking Hub",
            description: "Institutional-grade Staking-as-a-Service",
            riveAsset: "/rive/staking_hub.riv",
            getStartedLink: "https://stake.nodeops.network",
            learnMoreLink:
              "https://docs.nodeops.network/Get-Started/Stake/stakedrop",
          },
          {
            title: "Enterprise Staking Infrastructure",
            description: "Institutional-grade B2B Staking and Node Operations",
            riveAsset: "/rive/enterprise_staking_infrastructure.riv",
            getStartedLink: "",
            learnMoreLink: "",
            isContactUs: !0,
          },
        ],
        w = (e) => {
          let { offering: t, changeActiveIndex: n, isActive: a, index: o } = e,
            d = (0, i.useRef)(null),
            [v, x] = (0, i.useState)(!1);
          !(function (
            e,
            {
              root: t,
              margin: n,
              amount: r,
              once: a = !1,
              initial: o = !1,
            } = {}
          ) {
            let [c, d] = (0, i.useState)(o);
            (0, i.useEffect)(() => {
              if (!e.current || (a && c)) return;
              let i = {
                root: (t && t.current) || void 0,
                margin: n,
                amount: r,
              };
              return (function (
                e,
                t,
                { root: n, margin: r, amount: i = "some" } = {}
              ) {
                let a = (0, s.K)(e),
                  o = new WeakMap(),
                  c = new IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        let n = o.get(e.target);
                        if (!!n !== e.isIntersecting)
                          if (e.isIntersecting) {
                            let n = t(e.target, e);
                            "function" == typeof n
                              ? o.set(e.target, n)
                              : c.unobserve(e.target);
                          } else
                            "function" == typeof n &&
                              (n(e), o.delete(e.target));
                      });
                    },
                    {
                      root: n,
                      rootMargin: r,
                      threshold: "number" == typeof i ? i : l[i],
                    }
                  );
                return a.forEach((e) => c.observe(e)), () => c.disconnect();
              })(e.current, () => (d(!0), a ? void 0 : () => d(!1)), i);
            }, [t, e, n, a, r]);
          })(d, { margin: "-30% 0px -70% 0px" });
          let { trackClick: w } = (0, b.s)(),
            { openFormModal: y } = (0, g.V)();
          return (
            i.useEffect(() => {
              let e = () => {
                if (!d.current || v) return;
                let e = d.current.getBoundingClientRect(),
                  t = window.innerHeight;
                100 > Math.abs(e.top + e.height / 2 - t / 2) && !a && n(o);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, [o, n, a, v]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: "lg:hidden border border-primary/20",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "w-full h-[280px] md:h-[320px] flex items-center justify-center",
                      children: (0, r.jsx)("div", {
                        className:
                          "w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-primary/10 rounded-lg overflow-hidden",
                        children: (0, r.jsx)(u(), {
                          src: t.riveAsset,
                          className: "w-full h-full",
                        }),
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "px-4 py-8 border-b border-primary/20",
                      children: [
                        (0, r.jsx)("h3", {
                          className: "text-lg mb-2",
                          children: t.title,
                        }),
                        (0, r.jsx)("p", {
                          className: "text-lg text-primary/40",
                          children: t.description,
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex flex-row gap-3 mt-6",
                          children: [
                            t.isContactUs &&
                              (0, r.jsxs)(f.$n, {
                                variant: "outline",
                                className: "gap-2",
                                onClick: (e) => {
                                  e.preventDefault(),
                                    y(
                                      "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                                    );
                                },
                                children: [
                                  "Contact Us ",
                                  (0, r.jsx)(h.Q, {
                                    className: "w-3 h-3 -rotate-45",
                                  }),
                                ],
                              }),
                            t.isComingSoon &&
                              (0, r.jsx)(f.$n, {
                                disabled: !0,
                                variant: "outline",
                                className: "gap-2",
                                children: "Coming Soon",
                              }),
                            t.getStartedLink &&
                              (0, r.jsx)(p(), {
                                href: t.getStartedLink,
                                target: "_blank",
                                children: (0, r.jsxs)(f.$n, {
                                  variant: "outline",
                                  className: "gap-2 w-full sm:w-auto text-sm",
                                  children: [
                                    "Get Started ",
                                    (0, r.jsx)(h.Q, {
                                      className: "w-3 h-3 -rotate-45",
                                    }),
                                  ],
                                }),
                              }),
                            t.learnMoreLink &&
                              (0, r.jsx)(p(), {
                                href: t.learnMoreLink,
                                target: "_blank",
                                children: (0, r.jsxs)(f.$n, {
                                  variant: "outline",
                                  className: "gap-2 w-full sm:w-auto text-sm",
                                  children: [
                                    "Learn More ",
                                    (0, r.jsx)(h.Q, {
                                      className: "w-3 h-3 -rotate-45",
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  ref: d,
                  className: "hidden lg:block",
                  children: (0, r.jsxs)(c.P.div, {
                    className: `px-8 py-16 border-l-2 relative cursor-pointer ${
                      a ? "border-l-primary" : "border-l-transparent"
                    }`,
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, once: !0 },
                    onClick: () => {
                      n(o),
                        x(!0),
                        d.current &&
                          d.current.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest",
                          });
                    },
                    children: [
                      (0, r.jsx)("div", {
                        className: `absolute inset-0 transition-opacity duration-500 ${
                          a ? "opacity-100" : "opacity-0"
                        }`,
                        children: (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "relative z-10",
                        children: [
                          (0, r.jsx)("h3", {
                            className: "text-xl mb-4",
                            children: t.title,
                          }),
                          (0, r.jsx)("p", {
                            className: "text-primary/40 text-xl",
                            children: t.description,
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-5 mt-8",
                            children: [
                              t.isContactUs &&
                                (0, r.jsxs)(f.$n, {
                                  onClick: (e) => {
                                    e.stopPropagation(),
                                      w(m.R.LANDING_PAGE_CONTACT_US + t.title),
                                      y(
                                        "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                                      );
                                  },
                                  variant: "outline",
                                  className: "gap-2",
                                  children: [
                                    "Contact Us ",
                                    (0, r.jsx)(h.Q, {
                                      className: "w-4 h-4 -rotate-45",
                                    }),
                                  ],
                                }),
                              t.isComingSoon &&
                                (0, r.jsx)(f.$n, {
                                  disabled: !0,
                                  variant: "outline",
                                  className: "gap-2",
                                  children: "Coming Soon",
                                }),
                              t.getStartedLink &&
                                (0, r.jsx)(p(), {
                                  href: t.getStartedLink,
                                  target: "_blank",
                                  onClick: (e) => {
                                    e.stopPropagation(),
                                      w(m.R.LANDING_PAGE_GET_STARTED + t.title);
                                  },
                                  children: (0, r.jsxs)(f.$n, {
                                    variant: "outline",
                                    className: "gap-2",
                                    children: [
                                      "Get Started ",
                                      (0, r.jsx)(h.Q, {
                                        className: "w-4 h-4 -rotate-45",
                                      }),
                                    ],
                                  }),
                                }),
                              t.learnMoreLink &&
                                (0, r.jsx)(p(), {
                                  href: t.learnMoreLink,
                                  target: "_blank",
                                  onClick: (e) => {
                                    e.stopPropagation(),
                                      w(m.R.LANDING_PAGE_LEARN_MORE + t.title);
                                  },
                                  children: (0, r.jsxs)(f.$n, {
                                    variant: "outline",
                                    className: "gap-2",
                                    children: [
                                      "Learn More ",
                                      (0, r.jsx)(h.Q, {
                                        className: "w-4 h-4 -rotate-45",
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        y = () => {
          let e = (0, i.useRef)(null),
            [t, n] = (0, i.useState)(0),
            s = (0, i.useCallback)((e) => {
              n(e);
            }, []);
          return (
            x.length,
            (0, r.jsx)(a.A, {
              children: (0, r.jsxs)("div", {
                ref: e,
                className: "relative",
                children: [
                  (0, r.jsxs)(c.P.div, {
                    id: "what-we-offer-header",
                    className:
                      "sticky top-20 z-10 bg-background border border-primary/20",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "flex flex-col py-3 md:py-5 pl-4 md:pl-5 pr-6 md:pr-8 w-fit",
                        children: (0, r.jsx)("p", {
                          className: "text-2xl md:text-3xl",
                          children: "What we offer",
                        }),
                      }),
                      (0, r.jsx)(o.A, {}),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "lg:hidden",
                    children: x.map((e) =>
                      (0, r.jsx)(
                        w,
                        {
                          offering: e,
                          changeActiveIndex: () => {},
                          isActive: !1,
                          index: 0,
                        },
                        e.title
                      )
                    ),
                  }),
                  (0, r.jsxs)("div", {
                    className: "hidden lg:flex relative",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "w-1/2 border-r border-l border-primary/20 divide-y divide-primary/20 z-0",
                        children: [
                          x.map((e, n) =>
                            (0, r.jsx)(
                              w,
                              {
                                offering: e,
                                changeActiveIndex: s,
                                isActive: n === t,
                                index: n,
                              },
                              e.title
                            )
                          ),
                          (0, r.jsx)("div", {
                            className:
                              "h-[40vh] border-b border-primary/20 transition-all duration-500",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "w-1/2",
                        children: (0, r.jsx)("div", {
                          className:
                            "sticky top-[calc(20vh-106px)] h-[calc(100vh-80px)] border-b border-r border-primary/20",
                          children: (0, r.jsx)("div", {
                            className:
                              "w-full h-[calc(100vh+40px)] flex items-center justify-center",
                            children: (0, r.jsx)(
                              c.P.div,
                              {
                                className:
                                  "w-[400px] h-[400px] bg-primary/10 rounded-lg overflow-hidden",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: {
                                  duration: 0.5,
                                  ease: "easeInOut",
                                },
                                children: (0, r.jsx)(u(), {
                                  src: x[t].riveAsset,
                                  className: "w-full h-full",
                                }),
                              },
                              t
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    44677: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(95155),
        i = n(12115),
        a = n(36356);
      let o = () => {
        let [e, t] = (0, i.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, i.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  n = Math.floor(20 * Math.random()) + 10,
                  r = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                t((t) => {
                  let i = [...t];
                  for (let t = e; t < e + n && t < 150; t++) i[t] = r;
                  return i;
                });
              },
              n = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(n);
          }, []),
          (0, r.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, t) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, r.jsx)(a.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, r.jsx)(a.P.div, {
                      className: "h-[1px] w-full -mt-[1px] bg-primary/20",
                      animate: { backgroundColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                  ],
                },
                t
              )
            ),
          })
        );
      };
    },
    54668: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(12115),
        i = n(14749),
        a = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(r),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
      function s(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function l(e) {
        var t = e || c(),
          n = r.useState(t),
          i = n[0],
          a = n[1];
        return (
          r.useEffect(
            function () {
              if ("undefined" != typeof window && "matchMedia" in window) {
                var t = function () {
                    a(e || c());
                  },
                  n = window.matchMedia(
                    "screen and (resolution: ".concat(i, "dppx)")
                  );
                return (
                  n.hasOwnProperty("addEventListener")
                    ? n.addEventListener("change", t)
                    : n.addListener(t),
                  function () {
                    n.hasOwnProperty("removeEventListener")
                      ? n.removeEventListener("change", t)
                      : n.removeListener(t);
                  }
                );
              }
            },
            [i, e]
          ),
          i
        );
      }
      function c() {
        return Math.min(
          Math.max(
            1,
            "undefined" != typeof window &&
              "number" == typeof window.devicePixelRatio
              ? window.devicePixelRatio
              : 1
          ),
          3
        );
      }
      "function" == typeof SuppressedError && SuppressedError;
      var d = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        u = globalThis.ResizeObserver || d,
        f = void 0 !== globalThis.ResizeObserver,
        h = !f,
        v = {
          useDevicePixelRatio: !0,
          fitCanvasToArtboardHeight: !1,
          useOffscreenRenderer: !0,
          shouldResizeCanvasToContainer: !0,
        };
      function p(e) {
        return Object.assign({}, v, e);
      }
      function m(e) {
        var t,
          n,
          i,
          a,
          o,
          s,
          c,
          d = e.riveLoaded,
          v = void 0 !== d && d,
          m = e.canvasElem,
          b = e.containerRef,
          g = e.options,
          x = e.onCanvasHasResized,
          w = e.artboardBounds,
          y = p(void 0 === g ? {} : g),
          k = r.useState({ height: 0, width: 0 }),
          C = k[0],
          N = C.height,
          j = C.width,
          R = k[1],
          S = r.useState({ height: 0, width: 0 }),
          E = S[0],
          L = E.height,
          O = E.width,
          M = S[1],
          I = r.useState(!0),
          P = I[0],
          A = I[1],
          _ = y.fitCanvasToArtboardHeight,
          T = y.shouldResizeCanvasToContainer,
          z = y.useDevicePixelRatio,
          H = y.customDevicePixelRatio,
          G =
            (void 0 === (t = T) && (t = !0),
            (i = (n = r.useState({ width: 0, height: 0 }))[0]),
            (a = n[1]),
            r.useEffect(function () {
              if ("undefined" != typeof window && t) {
                var e = function () {
                  a({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  h && (e(), window.addEventListener("resize", e)),
                  function () {
                    return window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            (c = r.useRef(
              new u(
                ((o = function (e) {
                  f &&
                    a({
                      width: e[e.length - 1].contentRect.width,
                      height: e[e.length - 1].contentRect.height,
                    });
                }),
                (s = 0),
                function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  clearTimeout(s),
                    (s = window.setTimeout(function () {
                      return o.apply(e, t);
                    }, 0));
                })
              )
            )),
            r.useEffect(
              function () {
                var e = c.current;
                if (t) {
                  var n = b.current;
                  return (
                    b.current && f && e.observe(b.current),
                    function () {
                      e.disconnect(), n && f && e.unobserve(n);
                    }
                  );
                }
                e.disconnect();
              },
              [b, c]
            ),
            i),
          U = l(H),
          D = null != w ? w : {},
          $ = D.maxX,
          W = D.maxY,
          B = r.useCallback(
            function () {
              var e,
                t,
                n,
                r,
                i =
                  null != (t = null == (e = b.current) ? void 0 : e.clientWidth)
                    ? t
                    : 0,
                a =
                  null !=
                  (r = null == (n = b.current) ? void 0 : n.clientHeight)
                    ? r
                    : 0;
              return _ && w
                ? { width: i, height: i * (w.maxY / w.maxX) }
                : { width: i, height: a };
            },
            [b, _, $, W]
          );
        r.useEffect(
          function () {
            if (T && b.current && v) {
              var e = B(),
                t = e.width,
                n = e.height,
                r = !1;
              if (m) {
                var i = t !== j || n !== N;
                if (
                  (y.fitCanvasToArtboardHeight &&
                    i &&
                    ((b.current.style.height = n + "px"), (r = !0)),
                  y.useDevicePixelRatio)
                ) {
                  if (i || t * U !== O || n * U !== L) {
                    var a = U * t,
                      o = U * n;
                    (m.width = a),
                      (m.height = o),
                      (m.style.width = t + "px"),
                      (m.style.height = n + "px"),
                      M({ width: a, height: o }),
                      (r = !0);
                  }
                } else
                  i &&
                    ((m.width = t),
                    (m.height = n),
                    M({ width: t, height: n }),
                    (r = !0));
                R({ width: t, height: n });
              }
              x && (P || r) && x && x(), P && A(!1);
            }
          },
          [m, b, G, U, B, P, A, L, O, N, j, x, T, _, z, v]
        ),
          r.useEffect(
            function () {
              M({ width: 0, height: 0 });
            },
            [m]
          );
      }
      var b,
        g = (function () {
          function e() {}
          return (
            (e.prototype.observe = function () {}),
            (e.prototype.unobserve = function () {}),
            (e.prototype.disconnect = function () {}),
            e
          );
        })(),
        x = globalThis.IntersectionObserver || g,
        w = (function () {
          function e() {
            var e = this;
            (this.elementsMap = new Map()),
              (this.onObserved = function (t) {
                t.forEach(function (t) {
                  var n = e.elementsMap.get(t.target);
                  n && n(t);
                });
              }),
              (this.observer = new x(this.onObserved));
          }
          return (
            (e.prototype.registerCallback = function (e, t) {
              this.observer.observe(e), this.elementsMap.set(e, t);
            }),
            (e.prototype.removeCallback = function (e) {
              this.observer.unobserve(e), this.elementsMap.delete(e);
            }),
            e
          );
        })(),
        y = function () {
          return b || (b = new w()), b;
        };
      function k(e) {
        var t = e.setContainerRef,
          n = e.setCanvasRef,
          r = e.className,
          i = void 0 === r ? "" : r,
          l = e.style,
          c = e.children,
          d = s(e, [
            "setContainerRef",
            "setCanvasRef",
            "className",
            "style",
            "children",
          ]),
          u = o({ width: "100%", height: "100%" }, l);
        return a.default.createElement(
          "div",
          o({ ref: t, className: i }, !i && { style: u }),
          a.default.createElement(
            "canvas",
            o(
              { ref: n, style: { verticalAlign: "top", width: 0, height: 0 } },
              d
            ),
            c
          )
        );
      }
      function C(e, t) {
        void 0 === t && (t = {});
        var n = r.useState(null),
          s = n[0],
          c = n[1],
          d = r.useRef(null),
          u = r.useState(null),
          f = u[0],
          h = u[1],
          v = !!e,
          b = p(t),
          g = l(),
          x = r.useCallback(
            function () {
              if (f) {
                if (f.layout && f.layout.fit === i.Fit.Layout && s) {
                  var e = g * f.layout.layoutScaleFactor;
                  (f.devicePixelRatioUsed = g),
                    (f.artboardWidth = (null == s ? void 0 : s.width) / e),
                    (f.artboardHeight = (null == s ? void 0 : s.height) / e);
                }
                f.startRendering(), f.resizeToCanvas();
              }
            },
            [f, g]
          );
        m({
          riveLoaded: !!f,
          canvasElem: s,
          containerRef: d,
          options: b,
          onCanvasHasResized: x,
          artboardBounds: null == f ? void 0 : f.bounds,
        });
        var w = r.useCallback(function (e) {
          null === e && s && ((s.height = 0), (s.width = 0)), c(e);
        }, []);
        r.useEffect(
          function () {
            if (s && e) {
              var t,
                n = null != f;
              if (null == f) {
                var r = b.useOffscreenRenderer;
                (t = new i.Rive(
                  o(o({ useOffscreenRenderer: r }, e), { canvas: s })
                )).on(i.EventType.Load, function () {
                  (n = !0), s ? h(t) : t.cleanup();
                });
              }
              return function () {
                n || null == t || t.cleanup();
              };
            }
          },
          [s, v, f]
        );
        var C = r.useCallback(function (e) {
            d.current = e;
          }, []),
          N = {
            observe: r.useCallback(function (e, t) {
              y().registerCallback(e, t);
            }, []),
            unobserve: r.useCallback(function (e) {
              y().removeCallback(e);
            }, []),
          },
          j = N.observe,
          R = N.unobserve;
        r.useEffect(
          function () {
            var e,
              t = !1,
              n = function () {
                if (s && t) {
                  var e = s.getBoundingClientRect();
                  e.width > 0 &&
                    e.height > 0 &&
                    e.top <
                      (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                    e.bottom > 0 &&
                    e.left <
                      (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                    e.right > 0 &&
                    (null == f || f.startRendering(), (t = !1));
                }
              };
            return (
              s &&
                !1 !== b.shouldUseIntersectionObserver &&
                j(s, function (r) {
                  r.isIntersecting
                    ? f && f.startRendering()
                    : f && f.stopRendering(),
                    (t = !r.isIntersecting),
                    clearTimeout(e),
                    r.isIntersecting ||
                      0 !== r.boundingClientRect.width ||
                      (e = setTimeout(n, 10));
                }),
              function () {
                s && R(s);
              }
            );
          },
          [j, R, f, s, b.shouldUseIntersectionObserver]
        ),
          r.useEffect(
            function () {
              return function () {
                f && (f.cleanup(), h(null));
              };
            },
            [f, s]
          );
        var S = null == e ? void 0 : e.animations;
        r.useEffect(
          function () {
            f &&
              S &&
              (f.isPlaying
                ? (f.stop(f.animationNames), f.play(S))
                : f.isPaused && (f.stop(f.animationNames), f.pause(S)));
          },
          [S, f]
        );
        var E = r.useCallback(
          function (e) {
            return a.default.createElement(
              k,
              o({ setContainerRef: C, setCanvasRef: w }, e)
            );
          },
          [w, C]
        );
        return {
          canvas: s,
          container: d.current,
          setCanvasRef: w,
          setContainerRef: C,
          rive: f,
          RiveComponent: E,
        };
      }
      (t.default = function (e) {
        var t = e.src,
          n = e.artboard,
          r = e.animations,
          i = e.stateMachines,
          l = e.layout,
          c = e.useOffscreenRenderer,
          d = e.shouldDisableRiveListeners,
          u = e.shouldResizeCanvasToContainer,
          f = e.automaticallyHandleEvents,
          h = e.children,
          v = s(e, [
            "src",
            "artboard",
            "animations",
            "stateMachines",
            "layout",
            "useOffscreenRenderer",
            "shouldDisableRiveListeners",
            "shouldResizeCanvasToContainer",
            "automaticallyHandleEvents",
            "children",
          ]),
          p = C(
            {
              src: t,
              artboard: n,
              animations: r,
              layout: l,
              stateMachines: i,
              autoplay: !0,
              shouldDisableRiveListeners: void 0 !== d && d,
              automaticallyHandleEvents: void 0 !== f && f,
            },
            {
              useOffscreenRenderer: void 0 === c || c,
              shouldResizeCanvasToContainer: void 0 === u || u,
            }
          ).RiveComponent;
        return a.default.createElement(p, o({}, v), h);
      }),
        (t.useResizeCanvas = m),
        (t.useRive = C),
        (t.useRiveFile = function (e) {
          var t = this,
            n = r.useState(null),
            a = n[0],
            o = n[1],
            s = r.useState("idle"),
            l = s[0],
            c = s[1];
          return (
            r.useEffect(
              function () {
                var n,
                  r,
                  a,
                  s = null;
                return (
                  (n = void 0),
                  (r = void 0),
                  (a = function () {
                    return (function (e, t) {
                      var n,
                        r,
                        i,
                        a = {
                          label: 0,
                          sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                          },
                          trys: [],
                          ops: [],
                        },
                        o = Object.create(
                          ("function" == typeof Iterator ? Iterator : Object)
                            .prototype
                        );
                      return (
                        (o.next = s(0)),
                        (o.throw = s(1)),
                        (o.return = s(2)),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function s(s) {
                        return function (l) {
                          var c = [s, l];
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; o && ((o = 0), c[0] && (a = 0)), a; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (i =
                                    2 & c[0]
                                      ? r.return
                                      : c[0]
                                      ? r.throw ||
                                        ((i = r.return) && i.call(r), 0)
                                      : r.next) &&
                                  !(i = i.call(r, c[1])).done)
                              )
                                return i;
                              switch (
                                ((r = 0), i && (c = [2 & c[0], i.value]), c[0])
                              ) {
                                case 0:
                                case 1:
                                  i = c;
                                  break;
                                case 4:
                                  return a.label++, { value: c[1], done: !1 };
                                case 5:
                                  a.label++, (r = c[1]), (c = [0]);
                                  continue;
                                case 7:
                                  (c = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(i =
                                      (i = a.trys).length > 0 &&
                                      i[i.length - 1]) &&
                                    (6 === c[0] || 2 === c[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === c[0] &&
                                    (!i || (c[1] > i[0] && c[1] < i[3]))
                                  ) {
                                    a.label = c[1];
                                    break;
                                  }
                                  if (6 === c[0] && a.label < i[1]) {
                                    (a.label = i[1]), (i = c);
                                    break;
                                  }
                                  if (i && a.label < i[2]) {
                                    (a.label = i[2]), a.ops.push(c);
                                    break;
                                  }
                                  i[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              c = t.call(e, a);
                            } catch (e) {
                              (c = [6, e]), (r = 0);
                            } finally {
                              n = i = 0;
                            }
                          if (5 & c[0]) throw c[1];
                          return { value: c[0] ? c[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (t) {
                      try {
                        c("loading"),
                          (s = new i.RiveFile(e)).init(),
                          s.on(i.EventType.Load, function () {
                            null == s || s.getInstance(), o(s), c("success");
                          }),
                          s.on(i.EventType.LoadError, function () {
                            c("failed");
                          }),
                          o(s);
                      } catch (e) {
                        console.error(e), c("failed");
                      }
                      return [2];
                    });
                  }),
                  new (r || (r = Promise))(function (e, i) {
                    function o(e) {
                      try {
                        l(a.next(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function s(e) {
                      try {
                        l(a.throw(e));
                      } catch (e) {
                        i(e);
                      }
                    }
                    function l(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value) instanceof r
                            ? n
                            : new r(function (e) {
                                e(n);
                              })
                          ).then(o, s);
                    }
                    l((a = a.apply(t, n || [])).next());
                  }),
                  function () {
                    null == s || s.cleanup();
                  }
                );
              },
              [e.src, e.buffer]
            ),
            { riveFile: a, status: l }
          );
        }),
        (t.useStateMachineInput = function (e, t, n, a) {
          var o = r.useState(null),
            s = o[0],
            l = o[1];
          return (
            r.useEffect(
              function () {
                function r() {
                  if (((e && t && n) || l(null), e && t && n)) {
                    var r = e.stateMachineInputs(t);
                    if (r) {
                      var i = r.find(function (e) {
                        return e.name === n;
                      });
                      void 0 !== a && i && (i.value = a), l(i || null);
                    }
                  } else l(null);
                }
                r(),
                  e &&
                    e.on(i.EventType.Load, function () {
                      r();
                    });
              },
              [e]
            ),
            s
          );
        }),
        Object.keys(i).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            });
        });
    },
  },
]);
