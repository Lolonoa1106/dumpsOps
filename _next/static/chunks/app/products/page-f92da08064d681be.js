(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3571],
  {
    2467: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => i });
      var r = t(95155);
      t(12115);
      let i = (e) => {
        let { children: s, className: t, id: i } = e;
        return (0, r.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${t}`,
          id: i,
          children: s,
        });
      };
    },
    5107: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 64921));
    },
    5113: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => o });
      var r = t(95155),
        i = t(12115),
        l = t(36356);
      let a = {
        wrapper: { display: "inline-block", whiteSpace: "pre-wrap" },
        srOnly: {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          border: 0,
        },
      };
      function o(e) {
        let {
            text: s,
            speed: t = 50,
            maxIterations: o = 10,
            sequential: n = !1,
            revealDirection: c = "start",
            useOriginalCharsOnly: d = !1,
            characters:
              m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            className: x = "",
            parentClassName: p = "",
            encryptedClassName: h = "",
            animateOn: u = "hover",
            ...j
          } = e,
          [f, N] = (0, i.useState)(s),
          [g, b] = (0, i.useState)(!1),
          [v, y] = (0, i.useState)(!1),
          [w, C] = (0, i.useState)(new Set()),
          [A, P] = (0, i.useState)(!1),
          S = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e,
              r = 0,
              i = (e) => {
                let t = s.length;
                switch (c) {
                  case "start":
                  default:
                    return e.size;
                  case "end":
                    return t - 1 - e.size;
                  case "center": {
                    let s = Math.floor(t / 2),
                      r = Math.floor(e.size / 2),
                      i = e.size % 2 == 0 ? s + r : s - r - 1;
                    if (i >= 0 && i < t && !e.has(i)) return i;
                    for (let s = 0; s < t; s++) if (!e.has(s)) return s;
                    return 0;
                  }
                }
              },
              l = d
                ? Array.from(new Set(s.split(""))).filter((e) => " " !== e)
                : m.split(""),
              a = (e, s) => {
                if (!d)
                  return e
                    .split("")
                    .map((t, r) =>
                      " " === t
                        ? " "
                        : s.has(r)
                        ? e[r]
                        : l[Math.floor(Math.random() * l.length)]
                    )
                    .join("");
                {
                  let t = e
                      .split("")
                      .map((e, t) => ({
                        char: e,
                        isSpace: " " === e,
                        index: t,
                        isRevealed: s.has(t),
                      })),
                    r = t
                      .filter((e) => !e.isSpace && !e.isRevealed)
                      .map((e) => e.char);
                  for (let e = r.length - 1; e > 0; e--) {
                    let s = Math.floor(Math.random() * (e + 1));
                    [r[e], r[s]] = [r[s], r[e]];
                  }
                  let i = 0;
                  return t
                    .map((s) =>
                      s.isSpace ? " " : s.isRevealed ? e[s.index] : r[i++]
                    )
                    .join("");
                }
              };
            return (
              g
                ? (y(!0),
                  (e = setInterval(() => {
                    C((t) => {
                      if (!n)
                        return (
                          N(a(s, t)),
                          ++r >= o && (clearInterval(e), y(!1), N(s)),
                          t
                        );
                      if (!(t.size < s.length))
                        return clearInterval(e), y(!1), t;
                      {
                        let e = i(t),
                          r = new Set(t);
                        return r.add(e), N(a(s, r)), r;
                      }
                    });
                  }, t)))
                : (N(s), C(new Set()), y(!1)),
              () => {
                e && clearInterval(e);
              }
            );
          }, [g, s, t, o, n, c, m, d]),
          (0, i.useEffect)(() => {
            if ("view" !== u) return;
            let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && !A && (b(!0), P(!0));
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.1 }
              ),
              s = S.current;
            return (
              s && e.observe(s),
              () => {
                s && e.unobserve(s);
              }
            );
          }, [u, A]),
          (0, r.jsxs)(l.P.span, {
            className: p,
            ref: S,
            style: a.wrapper,
            ...("hover" === u
              ? { onMouseEnter: () => b(!0), onMouseLeave: () => b(!1) }
              : {}),
            ...j,
            children: [
              (0, r.jsx)("span", { style: a.srOnly, children: f }),
              (0, r.jsx)("span", {
                "aria-hidden": "true",
                children: f.split("").map((e, s) => {
                  let t = w.has(s) || !v || !g;
                  return (0, r.jsx)(
                    "span",
                    { className: t ? x : h, children: e },
                    s
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    8300: (e, s, t) => {
      "use strict";
      t.d(s, { s: () => a });
      let r = t(69719).A.getInstance();
      r.init("f2623245635722f8e69e09e00e3b92d2");
      var i = t(12115);
      let l = function (e) {
          let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              r.logEvent(e, s);
            } catch (e) {}
        },
        a = () => ({
          track: (e, s) => {
            r.logEvent(e, s);
          },
          trackPage: (0, i.useCallback)(function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Landed on ${e}`, { ...s });
          }, []),
          trackClick: (0, i.useCallback)(function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Clicked on ${e}`, { ...s });
          }, []),
        });
    },
    44677: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      var r = t(95155),
        i = t(12115),
        l = t(36356);
      let a = () => {
        let [e, s] = (0, i.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, i.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  t = Math.floor(20 * Math.random()) + 10,
                  r = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                s((s) => {
                  let i = [...s];
                  for (let s = e; s < e + t && s < 150; s++) i[s] = r;
                  return i;
                });
              },
              t = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(t);
          }, []),
          (0, r.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, s) =>
              (0, r.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, r.jsx)(l.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, r.jsx)(l.P.div, {
                      className: "h-[1px] w-full -mt-[1px] bg-primary/20",
                      animate: { backgroundColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                  ],
                },
                s
              )
            ),
          })
        );
      };
    },
    55645: (e, s, t) => {
      "use strict";
      t.d(s, { R: () => i, v: () => r });
      var r = (function (e) {
          return (
            (e.HOME = "Home"),
            (e.PRODUCTS = "Products"),
            (e.ECOSYSTEM = "Ecosystem"),
            (e.BLOG = "Blog"),
            (e.NEWSROOM = "Newsroom"),
            (e.BRAND = "Brand"),
            (e.REPORT = "Report"),
            (e.ABOUT = "About"),
            (e.CAREER = "Career"),
            e
          );
        })({}),
        i = (function (e) {
          return (
            (e.EXPLORE_PRODUCTS = "Explore Products"),
            (e.EXPLORE_DUNE_DASHBOARD = "Explore Dune Dashboard"),
            (e.LANDING_PAGE_GET_STARTED = "Landing Page Get Started CTA - "),
            (e.LANDING_PAGE_CONTACT_US = "Landing Page Contact Us CTA - "),
            (e.LANDING_PAGE_LEARN_MORE = "Landing Page Learn More CTA - "),
            (e.LANDING_PAGE_EXPLORE_NODEOPS_ECOSYSTEM =
              "Landing Page Explore NodeOps Ecosystem"),
            (e.LANDING_PAGE_BROWSE_MORE_NEWSLETTER =
              "Landing Page Browse More Newsletter"),
            (e.LANDING_PAGE_NEWSLETTER_READ_MORE_CTA =
              "Landing Page Newsletter Read More CTA - "),
            (e.FOOTER_LINK = "Footer Link - "),
            (e.MOBILE_MENU_ITEM = "Mobile Menu Item - "),
            (e.NAVBAR_ITEM = "Navbar Item - "),
            (e.NAVBAR_DROPDOWN_ITEM = "Navbar Dropdown Item - "),
            (e.PRODUCT_PAGE_LEARN_MORE_CTA = "Product Page Learn More CTA - "),
            (e.PRODUCT_PAGE_GET_STARTED_CTA =
              "Product Page Get Started CTA - "),
            (e.PRODUCT_PAGE_JOIN_ECOSYSTEM_CTA =
              "Product Page Join Ecosystem CTA - "),
            (e.PRODUCT_PAGE_CONTACT_US_CTA = "Product Page Contact Us CTA - "),
            (e.ECOSYSTEM_PAGE_JOIN_ECOSYSTEM_CTA =
              "Ecosystem Page Join Ecosystem CTA - "),
            (e.ECOSYSTEM_PAGE_CTA = "Ecosystem Page CTA - "),
            (e.BLOG_PAGE_CLICK = "Blog Page Click - "),
            (e.CASE_STUDY_PAGE_CLICK = "Case Study Page Click - "),
            (e.NEWSROOM_PAGE_CLICK = "Newsroom Page Click - "),
            (e.REPORT_PAGE_CLICK = "Report Page Click - "),
            (e.VIEW_ROADMAP = "View Roadmap"),
            (e.CAREER_PAGE_JOIN_TEAM = "Career Page Join Team"),
            e
          );
        })({});
    },
    60013: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      var r = t(95155),
        i = t(36356);
      t(12115);
      let l = (e) => {
        let { className: s = "" } = e;
        return (0, r.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${s}`,
          children: (0, r.jsxs)(i.P.div, {
            className: "absolute inset-0 flex",
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 12, ease: "linear", repeat: 1 / 0 },
            children: [
              (0, r.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, r.jsx)("line", {
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
              (0, r.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, r.jsx)("line", {
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
    64921: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => k });
      var r = t(95155),
        i = t(12115),
        l = t(2467);
      let a = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l.A, {
              className:
                "py-2 flex flex-col items-center justify-center h-screen",
              children: [
                (0, r.jsx)("h1", {
                  className:
                    "text-3xl sm:text-5xl 2xl:text-7xl font-bold text-center max-w-6xl md:pt-96 pt-64",
                  children:
                    "NodeOps Network: The leading general purpose DePIN orchestration layer",
                }),
                (0, r.jsx)("p", {
                  className:
                    "text-sm sm:text-lg text-primary/60 text-center mt-5 max-w-3xl",
                  children:
                    "A chain-agnostic, DePIN orchestration layer for general-purpose Compute; secured by Autonomous Verifiable Services. The Network revolves around the $DUMP token fueling this growing product suite.",
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: "/productHero.webp",
              alt: "Product Hero",
              className:
                "w-full h-full object-cover absolute top-0 left-0 -z-10",
            }),
          ],
        });
      var o = t(60013),
        n = t(44677),
        c = t(75783),
        d = t(67052),
        m = t(5113),
        x = t(6874),
        p = t.n(x),
        h = t(55645),
        u = t(8300);
      let j = [
          {
            title: "Remove the risk",
            description:
              "Your best choice for decentralized, multi-region, lock-in-free Compute with no single point of failure or geopolitical risks",
            image: "/products/risk.svg",
          },
          {
            title: "Simplify your infrastructure setup",
            description:
              "Instantly orchestrate clusters for redundancy with our containerized infrastructure, leaving you to focus on core development",
            image: "/products/infrastructure.svg",
          },
          {
            title: "Driving developer traction",
            description:
              "Leverage verified Cloud infrastructure templates to deploy your workloads instantly",
            image: "/products/developerTraction.svg",
          },
          {
            title: "Enjoy the benefits",
            description:
              "Low cost, high-performance nodes with AVS-secured uptime to ensure smooth functioning of your applications",
            image: "/products/benfits.svg",
          },
        ],
        f = [
          {
            title: "Global access",
            description: "Connect with a global Compute consumer base",
            image: "/products/icons/globe.svg",
          },
          {
            title: "Monetize hardware",
            description: "Turn your hardware into a revenue stream",
            image: "/products/icons/hardDrive.svg",
          },
          {
            title: "Onchain earnings",
            description: "Earn verifiable revenue, onchain",
            image: "/products/icons/money.svg",
          },
          {
            title: "Trustless trust",
            description:
              "Trust in a trustless, transparent, economic alignment Protocol",
            image: "/products/icons/shield.svg",
          },
          {
            title: "Decentralized impact",
            description:
              "Help to decentralize the world, one machine at a time",
            image: "/products/icons/cpu.svg",
          },
        ],
        N = () => {
          let { trackClick: e } = (0, u.s)();
          return (0, r.jsx)(l.A, {
            className: "mt-20 mb-20",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              id: "cloud-marketplace",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "NodeOps Cloud Marketplace",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className: "flex md:flex-row flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "w-full md:w-1/2",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col border-t border-primary/20 w-full relative",
                          children: [
                            (0, r.jsx)(c.Zp, {
                              isBothSide: !0,
                              className:
                                "w-full flex items-center justify-center h-full",
                              leftLinePositions: ["top"],
                              rightLinePositions: ["bottom"],
                              topLineHeight: "h-20",
                              bottomLineHeight: "h-20",
                              children: (0, r.jsx)("img", {
                                src: "/products/rent.png",
                                alt: "marketplace",
                                className: "w-full h-80 object-cover",
                              }),
                            }),
                            (0, r.jsxs)(c.Zp, {
                              isBothSide: !0,
                              className:
                                "p-5 md:p-14 w-full border-t border-primary/20",
                              leftLinePositions: ["top"],
                              rightLinePositions: ["bottom"],
                              topLineHeight: "h-20",
                              bottomLineHeight: "h-20",
                              children: [
                                (0, r.jsx)("p", {
                                  className: "text-xl",
                                  children: "Rent Compute",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-primary/50 mt-3 max-w-3xl text-xl md:h-20",
                                  children:
                                    "NodeOps Cloud’s permissionless DePIN marketplace empowers you to access the Compute you need at prices you like for the use cases that matter",
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-wrap items-center gap-5 mt-10",
                                  children: [
                                    (0, r.jsx)(c.$n, {
                                      variant: "outline",
                                      className: "gap-2",
                                      disabled: !0,
                                      children: "Coming Soon",
                                    }),
                                    (0, r.jsx)(p(), {
                                      href: "https://docs.nodeops.network/Get-Started/Provide-Compute",
                                      target: "_blank",
                                      onClick: () =>
                                        e(
                                          h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                            "Rent Compute"
                                        ),
                                      children: (0, r.jsxs)(c.$n, {
                                        variant: "outline",
                                        className: "gap-2",
                                        children: [
                                          "Learn More ",
                                          (0, r.jsx)(d.Q, {
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
                        (0, r.jsx)("div", {
                          className:
                            "flex flex-col gap-10 px-5 pb-10 border-r border-primary/20",
                          children: j.map((e, s) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: `flex items-start ${
                                  0 === s
                                    ? "border-t border-primary/20 pt-7"
                                    : "-mt-8"
                                }`,
                                children: (0, r.jsxs)("div", {
                                  className: "flex flex-row gap-5 items-start",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "flex flex-col items-center",
                                      children: [
                                        (0, r.jsx)("img", {
                                          src: e.image,
                                          alt: "icon",
                                          className: "w-10 h-10",
                                        }),
                                        s < j.length - 1 &&
                                          (0, r.jsx)("div", {
                                            className:
                                              "h-28 w-[1px] bg-primary/20 my-2",
                                          }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)(m.A, {
                                          text: e.title,
                                          animateOn: "hover",
                                          speed: 50,
                                          sequential: !0,
                                          maxIterations: 10,
                                          useOriginalCharsOnly: !0,
                                          parentClassName: "text-xl",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "md:text-xl text-primary/50 mt-1 max-w-xl",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "w-full md:w-1/2",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col md:items-center border-t border-primary/20 w-full relative",
                          children: [
                            (0, r.jsx)(c.Zp, {
                              isBothSide: !0,
                              className:
                                "w-full flex items-center justify-center h-full",
                              leftLinePositions: ["top"],
                              rightLinePositions: ["bottom"],
                              topLineHeight: "h-20",
                              bottomLineHeight: "h-20",
                              children: (0, r.jsx)("img", {
                                src: "/products/addMachine.png",
                                alt: "marketplace",
                                className: "w-full h-80 object-cover",
                              }),
                            }),
                            (0, r.jsxs)(c.Zp, {
                              isBothSide: !0,
                              className:
                                "p-5 md:p-14 w-full border-t border-primary/20",
                              leftLinePositions: ["top"],
                              rightLinePositions: ["bottom"],
                              topLineHeight: "h-20",
                              bottomLineHeight: "h-20",
                              children: [
                                (0, r.jsx)("p", {
                                  className: "text-xl",
                                  children: "Lease Compute",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-primary/50 mt-3 max-w-3xl text-xl md:h-20",
                                  children:
                                    "Leverage your spare CPU and GPU to earn in the NodeOps Cloud Marketplace",
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-wrap items-center gap-5 mt-10",
                                  children: [
                                    (0, r.jsx)(c.$n, {
                                      disabled: !0,
                                      variant: "outline",
                                      className: "gap-2",
                                      children: "Coming Soon",
                                    }),
                                    (0, r.jsx)(p(), {
                                      href: "https://docs.nodeops.network",
                                      target: "_blank",
                                      onClick: () =>
                                        e(
                                          h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                            "Lease Compute"
                                        ),
                                      children: (0, r.jsxs)(c.$n, {
                                        variant: "outline",
                                        className: "gap-2",
                                        children: [
                                          "Learn More",
                                          (0, r.jsx)(d.Q, {
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
                        (0, r.jsx)("div", {
                          className: "flex flex-col gap-10 px-5",
                          children: f.map((e, s) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className: `flex items-start gap-5 ${
                                  0 === s
                                    ? "border-t border-primary/20 pt-7"
                                    : "-mt-10"
                                }`,
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: e.image,
                                        alt: "icon",
                                        className: "w-10 h-10",
                                      }),
                                      s < f.length - 1 &&
                                        (0, r.jsx)("div", {
                                          className:
                                            "h-20 w-[1px] bg-primary/20 my-2",
                                        }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)(m.A, {
                                        text: e.title,
                                        animateOn: "hover",
                                        speed: 50,
                                        sequential: !0,
                                        maxIterations: 10,
                                        useOriginalCharsOnly: !0,
                                        parentClassName: "text-xl",
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "md:text-xl text-primary/50 mt-1 max-w-xl",
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              s
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        g = () => {
          let { trackClick: e } = (0, u.s)();
          return (0, r.jsx)(l.A, {
            className: "mb-20",
            id: "nodeops-console",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "NodeOps Console",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "w-full md:w-1/2 flex justify-center h-auto",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/products/deploy.webp",
                          alt: "marketplace",
                          className: "w-full h-full object-contain",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute -translate-x-1/2 -z-10 w-[1px] h-full bg-primary/20",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-14 w-full md:w-1/2",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsxs)("p", {
                          className: "text-primary/50 mt-3 max-w-3xl text-xl",
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-primary",
                              children: "NodeOps Console ",
                            }),
                            "lets anyone access NodeOps’ DePIN Cloud Compute to run Node as a Service (NaaS) from a no-code dashboard serving a diverse blockchain ecosystem",
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center gap-5 mt-10",
                          children: (0, r.jsx)(p(), {
                            href: "https://console.nodeops.network",
                            target: "_blank",
                            onClick: () =>
                              e(
                                h.R.PRODUCT_PAGE_GET_STARTED_CTA +
                                  "NodeOps Console"
                              ),
                            children: (0, r.jsxs)(c.$n, {
                              variant: "outline",
                              className: "gap-2",
                              children: [
                                "Get Started ",
                                (0, r.jsx)(d.Q, {
                                  className: "w-4 h-4 -rotate-45",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20  ",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/click.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "At a click",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children: "Permissionless Node operations",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/boundingBox.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Your favorites",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Access a diverse blockchain and Web3 ecosystem",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/filecode.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Bring your own license",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Delegate your licenses to your dedicated Node or to one of ours",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/signal.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Accessible monitoring",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Let NodeFolio help you understand your Nodes’ status and performance",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var b = t(84070);
      let v = () => {
          let { trackClick: e } = (0, u.s)(),
            { openFormModal: s } = (0, b.V)();
          return (0, r.jsx)(l.A, {
            className: "mb-20",
            id: "DumpPad-launchpad",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "DumpPad",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-14 w-full md:w-1/2",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-xl",
                          children: "Decentralize your Node network fast",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-primary/50 mt-1 max-w-3xl text-xl",
                          children:
                            "Diversify and decentralize your Protocol by becoming part of the NodeOps Console ecosystem",
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center gap-5 mt-10 md:mt-24",
                          children: (0, r.jsxs)(c.$n, {
                            onClick: (t) => {
                              t.preventDefault(),
                                e(
                                  h.R.PRODUCT_PAGE_JOIN_ECOSYSTEM_CTA +
                                    "DumpPad Launchpad"
                                ),
                                s(
                                  "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                                );
                            },
                            variant: "outline",
                            className: "gap-2",
                            children: [
                              "Join the ecosystem",
                              (0, r.jsx)(d.Q, {
                                className: "w-4 h-4 -rotate-45",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(c.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex justify-center items-end h-auto",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, r.jsx)("img", {
                        src: "/products/globe.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-contain",
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/handfist.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Decentralize fast",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Incentivize users to launch your Nodes at-a-click",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/codesandbox.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Stabilize your Protocol",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children: "Optimize Node performance and uptime",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        y = () => {
          let { trackClick: e } = (0, u.s)();
          return (0, r.jsx)(l.A, {
            className: "mb-20",
            id: "agent-terminal",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "Agent Terminal",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "w-full md:w-1/2 flex justify-center h-auto",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/products/agentTerminal.webp",
                          alt: "marketplace",
                          className: "w-full h-full object-contain",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute -translate-x-1/2 -z-10 w-[1px] h-full bg-primary/20",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-14 w-full md:w-1/2",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-xl",
                          children: "Agent Terminal",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-primary/50 mt-1 max-w-3xl text-xl",
                          children:
                            "Agent Terminal is your go-to environment for experimenting, building, and deploying AI solutions in real time. Whether you're working on small-scale agents or testing advanced AI workloads, it’s the development environment you’ll love.",
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center gap-5 mt-10",
                          children: (0, r.jsx)(p(), {
                            href: "https://docs.nodeops.network/Core-Services/agent-terminal",
                            target: "_blank",
                            onClick: () =>
                              e(
                                h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                  "Agent Terminal"
                              ),
                            children: (0, r.jsxs)(c.$n, {
                              variant: "outline",
                              className: "gap-2",
                              children: [
                                "Learn More ",
                                (0, r.jsx)(d.Q, {
                                  className: "w-4 h-4 -rotate-45",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-3 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/robot.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Integrated tools",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children: "Your go-to AI frameworks and libraries",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/cpu.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Future-ready",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children: "Built with Compute scalability in mind",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/terminal.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "HTTP enabled",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children: "Collect data from trusted oracles",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/lightening.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Real-time, edge-speed collaboration",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children:
                            "Collaborative code sharing, live editing, and commenting",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/key.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Bring your own key",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children:
                            "Instantly access over 60 open source models with your keys",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        w = () => {
          let { trackClick: e } = (0, u.s)(),
            { openFormModal: s } = (0, b.V)();
          return (0, r.jsx)(l.A, {
            className: "mb-20",
            id: "rpc-services",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "RPC Services",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-14 w-full md:w-1/2",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-xl",
                          children: "RPC Services",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-primary/50 mt-1 max-w-3xl text-xl",
                          children: "Institutional-grade RPC Node operations",
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center gap-5 mt-10 md:mt-36",
                          children: (0, r.jsxs)(c.$n, {
                            onClick: (t) => {
                              t.preventDefault(),
                                e(
                                  h.R.PRODUCT_PAGE_CONTACT_US_CTA +
                                    "RPC Services"
                                ),
                                s(
                                  "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                                );
                            },
                            variant: "outline",
                            className: "gap-2",
                            children: [
                              "Contact Us",
                              (0, r.jsx)(d.Q, {
                                className: "w-4 h-4 -rotate-45",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(c.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex justify-center items-end h-auto",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, r.jsx)("img", {
                        src: "/products/rpc.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-contain",
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/lightening.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Bespoke infrastructure",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children:
                            "Dedicated Nodes for your blockchain transactions",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/codesandbox.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "High throughput",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/40",
                          children:
                            "Reliable, secure Nodes to support your business needs",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var C = t(66766),
        A = t(4029);
      let P = () => {
          let { trackClick: e } = (0, u.s)(),
            { openFormModal: s } = (0, b.V)();
          return (0, r.jsx)(l.A, {
            className: "mb-20",
            id: "security-hub",
            children: (0, r.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, r.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, r.jsx)("p", {
                    className: "text-3xl",
                    children: "Security Hub",
                  }),
                }),
                (0, r.jsx)(n.A, {}),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center border-t border-primary/20 w-full relative",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex items-center justify-center h-full",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/products/scanner.webp",
                          alt: "marketplace",
                          className: "w-full h-full object-contain",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "absolute -translate-y-1/2 -z-10 h-[1px] w-full bg-primary/20",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-14 w-full md:w-1/2",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-xl",
                          children: "Security Hub",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-primary/50 mt-1 max-w-3xl text-xl",
                          children:
                            "AI-powered code vulnerability service protecting you from exposed apps and code",
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-5 mt-10",
                          children: [
                            (0, r.jsx)(p(), {
                              href: "https://console-nodeop.vercel.app/scan",
                              target: "_blank",
                              onClick: () =>
                                e(
                                  h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                    "Security Hub"
                                ),
                              children: (0, r.jsxs)(c.$n, {
                                variant: "outline",
                                className: "gap-2",
                                children: [
                                  "Get Started ",
                                  (0, r.jsx)(d.Q, {
                                    className: "w-4 h-4 -rotate-45",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsx)(p(), {
                              "data-tooltip-id": "docs",
                              "data-tooltip-content": "Learn More",
                              href: "https://docs.nodeops.network/Core-Services/security",
                              target: "_blank",
                              onClick: () =>
                                e(
                                  h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                    "Security Hub"
                                ),
                              children: (0, r.jsx)(c.$n, {
                                variant: "outline",
                                className: "gap-2 p-2",
                                children: (0, r.jsx)(C.default, {
                                  src: "/products/icons/openBook.svg",
                                  alt: "docs",
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                            }),
                            (0, r.jsx)(A.m_, { id: "docs" }),
                            (0, r.jsx)(c.$n, {
                              "data-tooltip-id": "contact-us",
                              "data-tooltip-content": "Contact Us",
                              onClick: () => {
                                e(
                                  h.R.PRODUCT_PAGE_CONTACT_US_CTA +
                                    "Security Hub"
                                ),
                                  s(
                                    "https://forms.zohopublic.in/nodeops1/form/SecurityHubInterestForm/formperma/oXY1RvH6HugYZghnFAmrks5rngJoIrsufkHr6q4X28A"
                                  );
                              },
                              variant: "outline",
                              className: "gap-2 p-2",
                              children: (0, r.jsx)(C.default, {
                                src: "/icons/support.svg",
                                alt: "docs",
                                width: 24,
                                height: 24,
                              }),
                            }),
                            (0, r.jsx)(A.m_, { id: "contact-us" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-3 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/barchart.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Detailed analysis",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Understand vulnerabilities and their severity",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/wrench.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Instant fixes",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Instantly update your dependencies to fix known issues with verified versions",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/click.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "User-friendly",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children: "At-a-click access to scans and reports",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid lg:grid-cols-2 border-t border-primary/20",
                  children: [
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/scan.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Comprehensive scans",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Search for vulnerabilities and misconfigurations and receive a thorough analysis of your assets",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(c.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, r.jsx)("img", {
                            src: "/products/icons/notification.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Stay updated",
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-1 text-primary/50",
                          children:
                            "Receive alerts when the apps or tech stack you rely on are injected with malicious code",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S = () => {
          let { trackClick: e } = (0, u.s)(),
            { openFormModal: s } = (0, b.V)();
          return (0, r.jsxs)(l.A, {
            className: "",
            children: [
              (0, r.jsxs)("div", {
                className: "border border-primary/20",
                id: "staking-hub",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex flex-col p-5 md:p-10",
                    children: (0, r.jsx)("p", {
                      className: "text-3xl",
                      children: "Staking Hub",
                    }),
                  }),
                  (0, r.jsx)(n.A, {}),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                    children: [
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-14 w-full md:w-1/2",
                        leftLinePositions: ["top"],
                        rightLinePositions: ["bottom"],
                        topLineHeight: "h-20",
                        bottomLineHeight: "h-20",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xl",
                            children: "Staking Hub",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-primary/50 mt-1 max-w-3xl text-xl",
                            children:
                              "NodeOps Stakedrop allows anyone to earn staking yield",
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-5 mt-10 md:mt-36",
                            children: [
                              (0, r.jsx)(p(), {
                                href: "https://stake.nodeops.network",
                                target: "_blank",
                                onClick: () =>
                                  e(
                                    h.R.PRODUCT_PAGE_GET_STARTED_CTA +
                                      "Staking Hub"
                                  ),
                                children: (0, r.jsxs)(c.$n, {
                                  variant: "outline",
                                  className: "gap-2",
                                  children: [
                                    "Get Started",
                                    (0, r.jsx)(d.Q, {
                                      className: "w-4 h-4 -rotate-45",
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(p(), {
                                href: "https://docs.nodeops.network/Get-Started/Stake/stakedrop",
                                target: "_blank",
                                onClick: () =>
                                  e(
                                    h.R.PRODUCT_PAGE_LEARN_MORE_CTA +
                                      "Staking Hub"
                                  ),
                                children: (0, r.jsxs)(c.$n, {
                                  variant: "outline",
                                  className: "gap-2",
                                  children: [
                                    "Learn More ",
                                    (0, r.jsx)(d.Q, {
                                      className: "w-4 h-4 -rotate-45",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(c.Zp, {
                        isBothSide: !0,
                        className:
                          "w-full md:w-1/2 flex justify-center items-end h-auto",
                        leftLinePositions: ["top"],
                        rightLinePositions: ["bottom"],
                        topLineHeight: "h-20",
                        bottomLineHeight: "h-20",
                        children: (0, r.jsx)("img", {
                          src: "/products/stake.webp",
                          alt: "marketplace",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid lg:grid-cols-2 border-t border-primary/20",
                    children: [
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: "/products/icons/coins.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Competitive yields",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-1 text-primary/50",
                            children: "Earn a competitive APY on staked tokens",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: "/products/icons/click.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "User-friendly",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-1 text-primary/50",
                            children: "At-a-click access to passive yield",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "border border-primary/20 mt-20",
                id: "enterprise-staking",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex flex-col p-5 md:p-10",
                    children: (0, r.jsx)("p", {
                      className: "text-3xl",
                      children: "Enterprise Staking Infrastructure",
                    }),
                  }),
                  (0, r.jsx)(n.A, {}),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                    children: [
                      (0, r.jsx)(c.Zp, {
                        isBothSide: !0,
                        className:
                          "w-full md:w-1/2 flex justify-center items-end h-auto",
                        leftLinePositions: ["top"],
                        rightLinePositions: ["bottom"],
                        topLineHeight: "h-20",
                        bottomLineHeight: "h-20",
                        children: (0, r.jsx)("img", {
                          src: "/products/coins.webp",
                          alt: "marketplace",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-14 w-full md:w-1/2",
                        leftLinePositions: ["top"],
                        rightLinePositions: ["bottom"],
                        topLineHeight: "h-20",
                        bottomLineHeight: "h-20",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-xl",
                            children: "Enterprise Staking Infrastructure",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-primary/50 mt-1 max-w-3xl text-xl",
                            children:
                              "NodeOps Validator allows Web3 and blockchain Protocols to decentralize quickly and securely with our managed Node hosting service",
                          }),
                          (0, r.jsx)("div", {
                            className: "flex items-center gap-5 mt-10 md:mt-36",
                            children: (0, r.jsxs)(c.$n, {
                              onClick: (t) => {
                                t.preventDefault(),
                                  e(
                                    h.R.PRODUCT_PAGE_CONTACT_US_CTA +
                                      "Enterprise Staking Infrastructure"
                                  ),
                                  s(
                                    "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                                  );
                              },
                              variant: "outline",
                              className: "gap-2",
                              children: [
                                "Contact Us",
                                (0, r.jsx)(d.Q, {
                                  className: "w-4 h-4 -rotate-45",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid lg:grid-cols-3 border-t border-primary/20",
                    children: [
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: "/products/icons/refresh.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Automated software updates",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-1 text-primary/50",
                            children: "Enjoy hassle-free automatic updates",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: "/products/icons/signal.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Reliable uptime",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-1 text-primary/50",
                            children:
                              "Experience consistent performance and reliability",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(c.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, r.jsx)("img", {
                              src: "/products/icons/money.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Cost effective",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-xl mt-1 text-primary/50",
                            children:
                              "No need to invest in or manage physical equipment",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        _ = () =>
          (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)("h2", {
                className: "text-3xl text-center",
                children:
                  "NodeOps Network offers a full suite of products and services",
              }),
              (0, r.jsx)(N, {}),
              (0, r.jsx)(g, {}),
              (0, r.jsx)(v, {}),
              (0, r.jsx)(y, {}),
              (0, r.jsx)(w, {}),
              (0, r.jsx)(P, {}),
              (0, r.jsx)(S, {}),
            ],
          });
      var E = t(86802);
      let k = () => {
        let { trackPage: e } = (0, u.s)();
        return (
          (0, i.useEffect)(() => {
            e(h.v.PRODUCTS);
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a, {}),
              (0, r.jsx)(l.A, {
                className: "my-20",
                children: (0, r.jsx)(o.A, {}),
              }),
              (0, r.jsx)(_, {}),
              (0, r.jsx)(l.A, {
                className: "my-20",
                children: (0, r.jsx)(o.A, {}),
              }),
              (0, r.jsx)(E.A, {}),
              (0, r.jsx)(l.A, {
                className: "my-20",
                children: (0, r.jsx)(o.A, {}),
              }),
            ],
          })
        );
      };
    },
    84070: (e, s, t) => {
      "use strict";
      t.d(s, { FormModalProvider: () => n, V: () => o });
      var r = t(95155),
        i = t(12115),
        l = t(52319);
      let a = (0, i.createContext)(void 0);
      function o() {
        let e = (0, i.useContext)(a);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function n(e) {
        let { children: s } = e,
          [t, o] = (0, i.useState)(!1),
          [n, c] = (0, i.useState)("");
        return (0, r.jsxs)(a.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), o(!0);
            },
          },
          children: [
            s,
            (0, r.jsx)(l.a, {
              isOpen: t,
              onClose: () => o(!1),
              className: "h-[670px]",
              modalClassName: "max-w-2xl",
              children: (0, r.jsx)("iframe", {
                src: n,
                className: "w-full h-full border-0",
                title: "Form",
              }),
            }),
          ],
        });
      }
    },
    86802: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => c });
      var r = t(95155);
      t(12115);
      var i = t(2467),
        l = t(66766),
        a = t(75783),
        o = t(67052),
        n = t(84070);
      let c = () => {
        let { openFormModal: e } = (0, n.V)();
        return (0, r.jsx)(i.A, {
          className: "",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col-reverse md:flex-row items-center gap-10",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("p", {
                    className:
                      "md:w-2/3 w-full text-4xl md:text-5xl leading-tight",
                    children:
                      "Ready to launch your Protocol, Network, or Blockchain?",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-primary/50 mt-5 text-lg max-w-xl",
                    children:
                      "Whether you're looking to kickstart operations or scale up, we're here to help you succeed. Reach out to us and let's make it happen!",
                  }),
                  (0, r.jsxs)(a.$n, {
                    className: "mt-5 gap-2",
                    variant: "outline",
                    onClick: () =>
                      e(
                        "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                      ),
                    children: [
                      "Contact Us ",
                      (0, r.jsx)(o.Q, { className: "w-4 h-4" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l.default, {
                src: "/universe.webp",
                alt: "Our Mission",
                width: 500,
                height: 500,
                className: "md:w-1/3 w-full object-cover",
                loading: "lazy",
              }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [3495, 5753, 6080, 6766, 6874, 4029, 5783, 8441, 1684, 7358], () =>
      s(5107)
    ),
      (_N_E = e.O());
  },
]);
