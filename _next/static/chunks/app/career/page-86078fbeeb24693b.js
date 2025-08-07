(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4257],
  {
    2467: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var r = a(95155);
      a(12115);
      let l = (e) => {
        let { children: t, className: a, id: l } = e;
        return (0, r.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${a}`,
          id: l,
          children: t,
        });
      };
    },
    8300: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => i });
      let r = a(69719).A.getInstance();
      r.init("f2623245635722f8e69e09e00e3b92d2");
      var l = a(12115);
      let s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              r.logEvent(e, t);
            } catch (e) {}
        },
        i = () => ({
          track: (e, t) => {
            r.logEvent(e, t);
          },
          trackPage: (0, l.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            s(`Landed on ${e}`, { ...t });
          }, []),
          trackClick: (0, l.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            s(`Clicked on ${e}`, { ...t });
          }, []),
        });
    },
    18105: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => y });
      var r = a(95155),
        l = a(12115),
        s = a(60013),
        i = a(2467),
        o = a(75783),
        n = a(67052),
        c = a(6874),
        d = a.n(c),
        m = a(55645),
        p = a(8300);
      let x = () => {
        let { trackClick: e } = (0, p.s)();
        return (0, r.jsxs)(i.A, {
          className: "py-2 h-full flex flex-col items-center mt-32",
          children: [
            (0, r.jsx)("img", {
              src: "/careerHero.webp",
              alt: "Product Hero",
              className:
                "w-full h-full object-cover -z-10 absolute top-0 left-0",
            }),
            (0, r.jsx)("h1", {
              className:
                "text-5xl font-bold text-center max-w-6xl md:pt-96 pt-64",
              children: "Join our team",
            }),
            (0, r.jsx)("p", {
              className: "text-lg text-primary/60 text-center mt-5 max-w-3xl",
              children:
                "Help us enhance the builder experience so that users and developers remain focused on what matters",
            }),
            (0, r.jsx)(d(), {
              href: "https://www.notion.so/nodeopsxyz/Careers-page-NodeOps-9644e68d693c4aafb5868ded71fbc483?pvs=4",
              target: "_blank",
              onClick: () =>
                e(m.R.PRODUCT_PAGE_LEARN_MORE_CTA + "Join Our Team"),
              children: (0, r.jsxs)(o.$n, {
                variant: "outline",
                className: "gap-2 mt-8 text-xl border-primary/10 py-6 px-8",
                children: [
                  "Join Our Team ",
                  (0, r.jsx)(n.Q, { className: "w-4 h-4" }),
                ],
              }),
            }),
          ],
        });
      };
      var h = a(44677);
      let u = () =>
        (0, r.jsx)(i.A, {
          children: (0, r.jsxs)("div", {
            className: "border border-primary/20",
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-col p-5 md:p-10",
                children: (0, r.jsx)("p", {
                  className: "text-3xl",
                  children: "Life at DumpOps",
                }),
              }),
              (0, r.jsx)(h.A, {}),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row border-t border-primary/20 w-full h-full relative",
                children: [
                  (0, r.jsxs)(o.Zp, {
                    isBothSide: !0,
                    className: "p-5 md:p-14 w-full md:w-1/2 text-xl",
                    leftLinePositions: ["top"],
                    rightLinePositions: ["bottom"],
                    topLineHeight: "h-20",
                    bottomLineHeight: "h-20",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-primary/50 mt-3 max-w-3xl",
                        children:
                          "At DumpOps, we're building a more open, inclusive, and robust Cloud. Join our diverse and dynamic team, whether in the office or by becoming part of our growing remote army. We are all aligned around a shared vision onboarding everyone into a decentralized Cloud future.",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-primary/50 mt-3 max-w-3xl",
                        children:
                          "At DumpOps, you'll be expected to take agency and ownership of your own projects to drive meaningful change. You'll have the opportunity to work alongside some of the most dedicated, creative, and open minds in the industry.",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-primary/50 mt-3 max-w-3xl",
                        children:
                          "Come and shape the intersection of AI and Cloud Compute here at DumpOps.",
                      }),
                    ],
                  }),
                  (0, r.jsx)(o.Zp, {
                    isBothSide: !0,
                    className:
                      "w-full md:w-1/2 flex justify-center items-center h-auto",
                    leftLinePositions: ["top"],
                    rightLinePositions: ["bottom"],
                    topLineHeight: "h-20",
                    bottomLineHeight: "h-20",
                    children: (0, r.jsx)("img", {
                      src: "/team.webp",
                      alt: "team",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      var E = a(36356),
        f = a(35438);
      let g = (e) => {
          let { roleItems: t, activeTab: a } = e;
          return (0, r.jsx)(
            E.P.div,
            {
              className: "flex flex-col gap-5 mt-10",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              exit: { opacity: 0, y: -20 },
              children: t.map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className:
                      "flex md:flex-row flex-col border border-primary/20",
                    children: (0, r.jsxs)(o.Zp, {
                      isBothSide: !0,
                      lineColor: "bg-primary",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      showMiddleLine: !1,
                      className:
                        "w-full h-auto p-6 flex flex-col justify-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex justify-between items-center",
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-base text-primary/30 max-w-xl",
                              children: e.department,
                            }),
                            (0, r.jsx)("a", {
                              href: e.link,
                              target: "_blank",
                              children: (0, r.jsxs)(o.$n, {
                                variant: "outline",
                                className: "gap-1",
                                children: [
                                  "Apply ",
                                  (0, r.jsx)(f.F, { className: "w-4 h-4" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl text-primary mt-5",
                          children: e.role,
                        }),
                        (0, r.jsx)("p", {
                          className: "text-sm text-primary/30 mt-3",
                          children: e.location,
                        }),
                      ],
                    }),
                  },
                  t
                )
              ),
            },
            a
          );
        },
        N = [
          { id: "1", label: "All" },
          { id: "2", label: "Dev" },
          { id: "3", label: "Design" },
          { id: "4", label: "Business Development" },
          { id: "5", label: "DevOps" },
          { id: "6", label: "PM" },
        ],
        A = [
          {
            role: "Head of Marketing",
            department: "Marketing",
            location: "BLR, IN",
            id: "4",
            link: "https://www.notion.so/nodeopsxyz/Head-of-Marketing-1141e446bb3880f58be7d00860497b3d?pvs=4",
          },
          {
            role: "Backend Engineer",
            department: "Dev",
            location: "BLR, IN",
            id: "2",
            link: "https://www.notion.so/nodeopsxyz/Backend-Engineer-GoLang-026881d4eafb47a8a6583fb2b980e10c?pvs=4",
          },
          {
            role: "DevOps Engineer",
            department: "Dev",
            location: "BLR, IN",
            id: "2",
            link: "https://www.notion.so/nodeopsxyz/DevOps-Security-Validator-RPC-SRE-Engineer-698d104552fe4dcf9a2736500346fd22?pvs=4",
          },
          {
            role: "Partnerships, Communication & Growth",
            department: "Business Development",
            location: "BLR, IN",
            id: "2",
            link: "https://www.notion.so/nodeopsxyz/Partnerships-Communications-Growth-2bb92c6711324dccbd6317a74de9634f?pvs=4",
          },
        ],
        b = () => {
          let { trackClick: e } = (0, p.s)(),
            [t, a] = (0, l.useState)(N[0].id),
            [s, n] = (0, l.useState)(A),
            c = (e) => {
              a(e), "1" === e ? n(A) : n(A.filter((t) => t?.id === e));
            };
          return (0, r.jsxs)(i.A, {
            children: [
              (0, r.jsxs)("div", {
                className: "flex gap-5 items-center justify-between",
                children: [
                  (0, r.jsx)("p", {
                    className: "text-3xl text-nowrap",
                    children: "Open Roles",
                  }),
                  (0, r.jsx)(o.tU, {
                    tabs: N,
                    className: "place-self-end pr-2",
                    onChange: (e) => c(e),
                    activeTab: t,
                  }),
                ],
              }),
              (0, r.jsx)(g, { roleItems: s, activeTab: t }),
              (0, r.jsx)(
                E.P.div,
                {
                  className: "flex flex-col gap-5 mt-5",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  exit: { opacity: 0, y: -20 },
                  children: (0, r.jsx)("div", {
                    className:
                      "flex md:flex-row flex-col border border-primary/20",
                    children: (0, r.jsxs)(o.Zp, {
                      isBothSide: !0,
                      lineColor: "bg-primary",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      showMiddleLine: !1,
                      className:
                        "w-full h-auto p-6 flex flex-col justify-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex justify-between items-center",
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-base text-primary/30 max-w-xl",
                              children: "404?",
                            }),
                            (0, r.jsx)("a", {
                              href: "mailto:hiring@nodeops.xyz",
                              onClick: () => {
                                e(m.R.CAREER_PAGE_JOIN_TEAM);
                              },
                              children: (0, r.jsxs)(o.$n, {
                                variant: "outline",
                                className: "gap-1",
                                children: [
                                  "Mail Us ",
                                  (0, r.jsx)(f.F, { className: "w-4 h-4" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "text-xl text-primary/30 mt-3",
                          children: [
                            "If no roles are open, but you believe we need you, you are welcome to pass your CV along to",
                            " ",
                            (0, r.jsx)("a", {
                              href: "mailto:hiring@nodeops.xyz",
                              className: "text-primary",
                              onClick: () => {
                                e(m.R.CAREER_PAGE_JOIN_TEAM);
                              },
                              children: "hiring@nodeops.xyz",
                            }),
                            " ",
                            "with a letter of motivation.",
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                t
              ),
            ],
          });
        },
        y = () => {
          let { trackPage: e } = (0, p.s)();
          return (
            (0, l.useEffect)(() => {
              e(m.v.CAREER);
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(x, {}),
                (0, r.jsx)(i.A, {
                  className: "mb-20 mt-50",
                  children: (0, r.jsx)(s.A, {}),
                }),
                (0, r.jsx)(u, {}),
                (0, r.jsx)(i.A, {
                  className: "my-20",
                  children: (0, r.jsx)(s.A, {}),
                }),
                (0, r.jsx)(b, {}),
                (0, r.jsx)(i.A, {
                  className: "my-20",
                  children: (0, r.jsx)(s.A, {}),
                }),
              ],
            })
          );
        };
    },
    19309: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 18105));
    },
    35438: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => u });
      var r = a(12115),
        l = a(39898);
      let s = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M192,64V168L88,64Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        o = Object.defineProperties,
        n = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        p = (e, t, a) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        x = (e, t) => {
          for (var a in t || (t = {})) d.call(t, a) && p(e, a, t[a]);
          if (c) for (var a of c(t)) m.call(t, a) && p(e, a, t[a]);
          return e;
        },
        h = (e, t) => o(e, n(t));
      let u = (0, r.forwardRef)((e, t) =>
        r.createElement(l.A, h(x({ ref: t }, e), { weights: s }))
      );
      u.displayName = "ArrowUpRight";
    },
    44677: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var r = a(95155),
        l = a(12115),
        s = a(36356);
      let i = () => {
        let [e, t] = (0, l.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, l.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  a = Math.floor(20 * Math.random()) + 10,
                  r = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                t((t) => {
                  let l = [...t];
                  for (let t = e; t < e + a && t < 150; t++) l[t] = r;
                  return l;
                });
              },
              a = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(a);
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
                    (0, r.jsx)(s.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, r.jsx)(s.P.div, {
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
    55645: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => l, v: () => r });
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
        l = (function (e) {
          return (
            (e.EXPLORE_PRODUCTS = "Explore Products"),
            (e.EXPLORE_DUNE_DASHBOARD = "Explore Dune Dashboard"),
            (e.LANDING_PAGE_GET_STARTED = "Landing Page Get Started CTA - "),
            (e.LANDING_PAGE_CONTACT_US = "Landing Page Contact Us CTA - "),
            (e.LANDING_PAGE_LEARN_MORE = "Landing Page Learn More CTA - "),
            (e.LANDING_PAGE_EXPLORE_NODEOPS_ECOSYSTEM =
              "Landing Page Explore DumpOps Ecosystem"),
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
    60013: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var r = a(95155),
        l = a(36356);
      a(12115);
      let s = (e) => {
        let { className: t = "" } = e;
        return (0, r.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, r.jsxs)(l.P.div, {
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [3495, 5753, 6080, 6874, 5783, 8441, 1684, 7358], () => t(19309)),
      (_N_E = e.O());
  },
]);
