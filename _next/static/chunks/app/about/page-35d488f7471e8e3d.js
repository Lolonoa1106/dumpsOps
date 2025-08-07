(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7220],
  {
    2467: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var s = a(95155);
      a(12115);
      let i = (e) => {
        let { children: t, className: a, id: i } = e;
        return (0, s.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${a}`,
          id: i,
          children: t,
        });
      };
    },
    8300: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => l });
      let s = a(69719).A.getInstance();
      s.init("f2623245635722f8e69e09e00e3b92d2");
      var i = a(12115);
      let r = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              s.logEvent(e, t);
            } catch (e) {}
        },
        l = () => ({
          track: (e, t) => {
            s.logEvent(e, t);
          },
          trackPage: (0, i.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            r(`Landed on ${e}`, { ...t });
          }, []),
          trackClick: (0, i.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            r(`Clicked on ${e}`, { ...t });
          }, []),
        });
    },
    16154: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 90617));
    },
    35220: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => u });
      var s = a(12115),
        i = a(39898);
      let r = new Map([
        [
          "bold",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
            })
          ),
        ],
        [
          "duotone",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
              opacity: "0.2",
            }),
            s.createElement("path", {
              d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "fill",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "light",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
            })
          ),
        ],
        [
          "regular",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "thin",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        n = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        h = (e, t, a) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) m.call(t, a) && h(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && h(e, a, t[a]);
          return e;
        },
        x = (e, t) => n(e, o(t));
      let u = (0, s.forwardRef)((e, t) =>
        s.createElement(i.A, x(p({ ref: t }, e), { weights: r }))
      );
      u.displayName = "Check";
    },
    37841: (e, t, a) => {
      "use strict";
      a.d(t, { g: () => u });
      var s = a(12115),
        i = a(39898);
      let r = new Map([
        [
          "bold",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z",
            })
          ),
        ],
        [
          "duotone",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M208,216H160L48,40H96Z",
              opacity: "0.2",
            }),
            s.createElement("path", {
              d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
            })
          ),
        ],
        [
          "fill",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z",
            })
          ),
        ],
        [
          "light",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
            })
          ),
        ],
        [
          "regular",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
            })
          ),
        ],
        [
          "thin",
          s.createElement(
            s.Fragment,
            null,
            s.createElement("path", {
              d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        n = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        h = (e, t, a) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) m.call(t, a) && h(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && h(e, a, t[a]);
          return e;
        },
        x = (e, t) => n(e, o(t));
      let u = (0, s.forwardRef)((e, t) =>
        s.createElement(i.A, x(p({ ref: t }, e), { weights: r }))
      );
      u.displayName = "XLogo";
    },
    44677: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var s = a(95155),
        i = a(12115),
        r = a(36356);
      let l = () => {
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
                  a = Math.floor(20 * Math.random()) + 10,
                  s = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                t((t) => {
                  let i = [...t];
                  for (let t = e; t < e + a && t < 150; t++) i[t] = s;
                  return i;
                });
              },
              a = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(a);
          }, []),
          (0, s.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, t) =>
              (0, s.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, s.jsx)(r.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, s.jsx)(r.P.div, {
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
      a.d(t, { R: () => i, v: () => s });
      var s = (function (e) {
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
      a.d(t, { A: () => r });
      var s = a(95155),
        i = a(36356);
      a(12115);
      let r = (e) => {
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
    84070: (e, t, a) => {
      "use strict";
      a.d(t, { FormModalProvider: () => o, V: () => n });
      var s = a(95155),
        i = a(12115),
        r = a(52319);
      let l = (0, i.createContext)(void 0);
      function n() {
        let e = (0, i.useContext)(l);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function o(e) {
        let { children: t } = e,
          [a, n] = (0, i.useState)(!1),
          [o, c] = (0, i.useState)("");
        return (0, s.jsxs)(l.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), n(!0);
            },
          },
          children: [
            t,
            (0, s.jsx)(r.a, {
              isOpen: a,
              onClose: () => n(!1),
              className: "h-[670px]",
              modalClassName: "max-w-2xl",
              children: (0, s.jsx)("iframe", {
                src: o,
                className: "w-full h-full border-0",
                title: "Form",
              }),
            }),
          ],
        });
      }
    },
    86802: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c });
      var s = a(95155);
      a(12115);
      var i = a(2467),
        r = a(66766),
        l = a(75783),
        n = a(67052),
        o = a(84070);
      let c = () => {
        let { openFormModal: e } = (0, o.V)();
        return (0, s.jsx)(i.A, {
          className: "",
          children: (0, s.jsxs)("div", {
            className: "flex flex-col-reverse md:flex-row items-center gap-10",
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "md:w-2/3 w-full text-4xl md:text-5xl leading-tight",
                    children:
                      "Ready to launch your Protocol, Network, or Blockchain?",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-primary/50 mt-5 text-lg max-w-xl",
                    children:
                      "Whether you're looking to kickstart operations or scale up, we're here to help you succeed. Reach out to us and let's make it happen!",
                  }),
                  (0, s.jsxs)(l.$n, {
                    className: "mt-5 gap-2",
                    variant: "outline",
                    onClick: () =>
                      e(
                        "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                      ),
                    children: [
                      "Contact Us ",
                      (0, s.jsx)(n.Q, { className: "w-4 h-4" }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r.default, {
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
    90617: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => z });
      var s = a(95155),
        i = a(12115),
        r = a(60013),
        l = a(2467);
      let n = () =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(l.A, {
              className:
                "py-2 h-screen flex flex-col items-center justify-center",
              children: [
                (0, s.jsx)("h1", {
                  className:
                    "text-3xl sm:text-5xl 2xl:text-7xl font-bold text-center max-w-6xl pt-64 md:pt-96",
                  children:
                    "DumpOps Network: Your trusted partner in decentralized infrastructure",
                }),
                (0, s.jsx)("p", {
                  className:
                    "text-sm sm:text-lg text-primary/60 text-center mt-5 max-w-5xl",
                  children:
                    "DumpOps is a pioneering platform providing AI-enabled, effective solutions for non-technical Node operators, Web3 and blockchain protocols, developers, and enterprises. Since 2023, DumpOps has demonstrated that it's possible to streamline the deployment, management, and orchestration of blockchain and general Compute Nodes, empowering a truly decentralized Compute ecosystem.",
                }),
              ],
            }),
            (0, s.jsx)("img", {
              src: "/aboutHero.webp",
              alt: "Product Hero",
              className:
                "w-full h-full object-cover absolute top-0 left-0 -z-10",
            }),
          ],
        });
      var o = a(66766);
      let c = () =>
        (0, s.jsx)(l.A, {
          className: "my-20",
          children: (0, s.jsxs)("div", {
            className: "flex flex-col md:flex-row items-center gap-20",
            children: [
              (0, s.jsx)(o.default, {
                src: "/gola.webp",
                alt: "Our Mission",
                width: 500,
                height: 500,
                className: "w-[300px] h-[300px] object-cover",
              }),
              (0, s.jsxs)("p", {
                className:
                  "text-primary/50 md:w-2/3 w-full md:text-5xl text-4xl leading-tight",
                children: [
                  "At DumpOps, our mission is to enhance the builder experience so that users and developers remain",
                  " ",
                  (0, s.jsx)("span", {
                    className: "text-primary",
                    children: "focused on what matters.",
                  }),
                ],
              }),
            ],
          }),
        });
      var m = a(44677),
        d = a(75783);
      let h = () =>
          (0, s.jsx)(l.A, {
            className: "my-20",
            children: (0, s.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, s.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, s.jsx)("p", {
                    className: "text-3xl",
                    children: "The problems we solve",
                  }),
                }),
                (0, s.jsx)(m.A, {}),
                (0, s.jsxs)("div", {
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  children: [
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, s.jsx)("img", {
                        src: "/about/cloud.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 md:p-10 p-5 flex flex-col justify-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl",
                          children:
                            "Centralized Cloud creates an off switch for your company",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children:
                            "Our decentralized Cloud Compute enables you to run workloads without a single point of failure.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  children: [
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 md:p-10 p-5 flex flex-col justify-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl",
                          children:
                            "Node deployment and maintenance can be challenging",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children:
                            "We offer one-click Node deployment solutions across multiple blockchain networks, removing barriers to entry for Node operators.",
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, s.jsx)("img", {
                        src: "/about/nodeDeployment.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  children: [
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, s.jsx)("img", {
                        src: "/about/coin.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 md:p-10 p-5 flex flex-col justify-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl",
                          children:
                            "It’s difficult to bootstrap Web3 and Blockchain Node networks",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children:
                            "Our non-technical Node as a Service offering allows Protocols and Blockchain teams to incentivize a distributed network of Node operators.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  children: [
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 md:p-10 p-5 flex flex-col justify-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl",
                          children:
                            "Stable Compute infrastructure requires an entire team",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children:
                            "Our platform leverages AI to simplify complex Node infrastructure operations, providing a robust and user-friendly experience.",
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, s.jsx)("img", {
                        src: "/about/infrastructure.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  children: [
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, s.jsx)("img", {
                        src: "/about/computeServices.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 md:p-10 p-5 flex flex-col justify-center",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl",
                          children: "Compute services need SLAs",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children:
                            "We have developed an onchain permissionless incentivization system, ensuring economic alignment for all participants within the ecosystem.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        p = () =>
          (0, s.jsx)(l.A, {
            className: "",
            children: (0, s.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, s.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, s.jsx)("p", {
                    className: "text-3xl",
                    children: "The people we solve problems for",
                  }),
                }),
                (0, s.jsx)(m.A, {}),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center border-t border-primary/20 w-full relative",
                  children: [
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "p-5 md:p-14 w-full md:w-1/2 md:h-96 h-full flex items-center justify-center",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, s.jsx)("p", {
                        className:
                          "text-xl leading-tight text-primary/40 max-w-3xl",
                        children:
                          "Our customers range from non-technical retail users who seek passive income in Web3 to large enterprises seeking resilient Compute Node and Protocol Node operations. You won't find bots here. We were revenue positive from our first year of operations because people loved our services so much they got out cold hard cash (well, tokens and stables until 2025, when we started accepting fiat!).",
                      }),
                    }),
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className: "w-full md:w-1/2 h-full md:h-96",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, s.jsx)("img", {
                        src: "/about/people.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-fill",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        x = () =>
          (0, s.jsx)(l.A, {
            children: (0, s.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, s.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, s.jsx)("p", {
                    className: "text-3xl",
                    children: "Key Achievements",
                  }),
                }),
                (0, s.jsx)(m.A, {}),
                (0, s.jsxs)("div", {
                  className: "grid lg:grid-cols-3 border-t border-primary/20",
                  children: [
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, s.jsx)("img", {
                            src: "/about/icons/diamond.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Supporting Over 45 Blockchain Networks",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-1",
                          children:
                            "We have successfully deployed Nodes across a wide range of blockchain infrastructures.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, s.jsx)("img", {
                            src: "/products/icons/dollar.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "$5 Million Seed Funding",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-1",
                          children:
                            "We secured significant investment to expand our Node orchestration layer.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className: "p-5 md:p-10",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-16 h-16 border border-primary/20 flex items-center justify-center",
                          children: (0, s.jsx)("img", {
                            src: "/products/icons/boundingBox.svg",
                            alt: "icon",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl mt-4",
                          children: "Growing Ecosystem",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-xl leading-tight text-primary/40 mt-1",
                          children:
                            "Our platform has enabled the creation of over 20,000 NodeFolios and manages assets worth millions.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "grid lg:grid-cols-1 border-t border-primary/20",
                  children: (0, s.jsxs)(d.Zp, {
                    isBothSide: !0,
                    className: "p-5 md:p-10",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-16 h-16 border border-primary/20 flex items-center justify-center",
                        children: (0, s.jsx)("img", {
                          src: "/about/icons/trophy.svg",
                          alt: "icon",
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-xl mt-4",
                        children: "Revenue positive",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-xl leading-tight text-primary/40 mt-1",
                        children:
                          "Revenue generating from month 1 in 2024 to ranking 3rd on the DePIN.ninja leaderboard in 2025.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
      var u = a(44912),
        g = a(37841),
        b = a(39898);
      let f = new Map([
        [
          "bold",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
            })
          ),
        ],
        [
          "duotone",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
              opacity: "0.2",
            }),
            i.createElement("path", {
              d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
            })
          ),
        ],
        [
          "fill",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
            })
          ),
        ],
        [
          "light",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
            })
          ),
        ],
        [
          "regular",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
            })
          ),
        ],
        [
          "thin",
          i.createElement(
            i.Fragment,
            null,
            i.createElement("path", {
              d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
            })
          ),
        ],
      ]);
      var w = Object.defineProperty,
        j = Object.defineProperties,
        N = Object.getOwnPropertyDescriptors,
        v = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        A = (e, t, a) =>
          t in e
            ? w(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        E = (e, t) => {
          for (var a in t || (t = {})) y.call(t, a) && A(e, a, t[a]);
          if (v) for (var a of v(t)) k.call(t, a) && A(e, a, t[a]);
          return e;
        },
        L = (e, t) => j(e, N(t));
      let P = (0, i.forwardRef)((e, t) =>
        i.createElement(b.A, L(E({ ref: t }, e), { weights: f }))
      );
      P.displayName = "LinkedinLogo";
      var C = a(91202);
      let O = [
          {
            name: "Naman Kabra",
            role: "CEO & Co-Founder",
            image: "/about/team/naman.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/namankabra/",
              },
              { name: "Twitter", link: "https://x.com/naman_307" },
            ],
          },
          {
            name: "Pratik Balar",
            role: "Tech Lead & Co-Founder",
            image: "/about/team/pratik.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/pratikbalar/",
              },
              { name: "Twitter", link: "https://x.com/pratikbin" },
            ],
          },
          {
            name: "Jagdish Chudasama",
            role: "Product Head & Co-Founder",
            image: "/about/team/jd.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/chudasama-jagdish-3759981b1/",
              },
              { name: "Twitter", link: "https://x.com/JagdishChudas15 " },
            ],
          },
          {
            name: "Shruti Kohli",
            role: "Finance & Legal Operations",
            image: "/about/team/shruti.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/shruti-kohli-35377b52/",
              },
              { name: "Twitter", link: "https://x.com/shrutiKohli_13" },
            ],
          },
          {
            name: "Alex Albano",
            role: "Head of Marketing",
            image: "/about/team/alex.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/albanoalex",
              },
              { name: "Twitter", link: null },
            ],
          },
          {
            name: "Harrie Bickle",
            role: "Documentation Lead",
            image: "/about/team/harrie.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/harriebickle?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
              },
              { name: "Twitter", link: "https://x.com/ANodeRunner" },
            ],
          },
          {
            name: "Mrudul Gole",
            role: "Business Development",
            image: "/about/team/mrudul.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/mrudulgole/",
              },
              { name: "Twitter", link: "https://x.com/mrudulgole" },
            ],
          },
          {
            name: "Eric Della Casa",
            role: "Social Media Manager",
            image: "/about/team/eric.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/eric-della-casa-4262839b/",
              },
              { name: "Twitter", link: "https://x.com/RicoDC95" },
            ],
          },
          {
            name: "Juliana Mei",
            role: "Developer Relations",
            image: "/about/team/juliana.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/julianamei/",
              },
              { name: "Twitter", link: "https://x.com/sudobangbang" },
            ],
          },
          {
            name: "Ryan Eborall",
            role: "AI/ML Specialist",
            image: "/about/team/ryan.webp",
            socialLinks: [
              { name: "LinkedIn", link: null },
              { name: "Twitter", link: "https://x.com/_TENNKN" },
            ],
          },
          {
            name: "Parth Devra",
            role: "Business Development Manager",
            image: "/about/team/parth.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/parthdevra/",
              },
              { name: "Twitter", link: "https://x.com/parthdevra" },
            ],
          },
          {
            name: "Siddharth Chadha",
            role: "Product Manager",
            image: "/about/team/sid.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/siddharth-chadha-268587199/",
              },
              { name: "Twitter", link: "https://x.com/Sid_625" },
            ],
          },
          {
            name: "Naved Alam",
            role: "Product Designer",
            image: "/about/team/naved.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/navedux/",
              },
              { name: "Twitter", link: "https://x.com/Navedux" },
            ],
          },
          {
            name: "Sagar Punjabi",
            role: "Operations + Customer Support",
            image: "/about/team/sagar.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/sp_archer_007/",
              },
              { name: "Twitter", link: "https://x.com/sp_archer_007" },
            ],
          },
          {
            name: "Saurabh Chauhan",
            role: "Frontend Engineer",
            image: "/about/team/saurabh.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/starc007/",
              },
              { name: "Twitter", link: "https://x.com/saurra3h" },
            ],
          },
          {
            name: "Mukund Rawat",
            role: " Backend Engineer",
            image: "/about/team/mukund.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/mukund-rawat-7795871b1/",
              },
              { name: "Twitter", link: null },
            ],
          },
          {
            name: "Bhautik Chudasama",
            role: "Backend Engineer",
            image: "/about/team/bhautik.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/bhautikchudasama/",
              },
              { name: "Twitter", link: "https://x.com/bhautiktweets" },
            ],
          },
          {
            name: "Naman Dave",
            role: "Backend Engineer",
            image: "/about/team/namandave.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/naman-dave",
              },
              { name: "Twitter", link: "https://x.com/naman_m_dave" },
            ],
          },
          {
            name: "Ashwaq Reheman",
            role: "DevOps Engineer",
            image: "/about/team/ashwaq.webp",
            socialLinks: [
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/ashwaq-reheman-06/",
              },
              { name: "Twitter", link: "https://x.com/ashw6q" },
            ],
          },
        ],
        M = () =>
          (0, s.jsxs)(l.A, {
            children: [
              (0, s.jsx)("div", {
                className: "flex flex-wrap gap-5 items-center justify-center",
                children: (0, s.jsx)("p", {
                  className: "text-3xl",
                  children: "Meet the Buidlers",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
                children: O.map((e) =>
                  (0, s.jsxs)(
                    C.Z,
                    {
                      className: "border border-primary/20 p-3 gap-4",
                      isBothSide: !0,
                      lineColor: "bg-primary",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      showMiddleLine: !1,
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "h-[324px] bg-primary/5 flex items-center justify-center",
                          children: (0, s.jsx)(o.default, {
                            src: e.image,
                            alt: e.name,
                            width: 200,
                            height: 200,
                            className: "h-full w-full object-contain",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl mt-5",
                          children: e.name,
                        }),
                        (0, s.jsx)("p", {
                          className: "text-primary/50",
                          children: e.role,
                        }),
                        (0, s.jsx)("div", {
                          className: "flex items-center justify-between mt-5",
                          children: (0, s.jsxs)("div", {
                            className:
                              "flex gap-3 items-center justify-between",
                            children: [
                              e.socialLinks[1]?.link &&
                                (0, s.jsx)("a", {
                                  href: e.socialLinks[1]?.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-center gap-2",
                                  children: (0, s.jsx)(u.$, {
                                    variant: "outline",
                                    className: "gap-2",
                                    children: (0, s.jsx)(g.g, {
                                      className: "w-4 h-4 aspect-square",
                                    }),
                                  }),
                                }),
                              e.socialLinks[0]?.link &&
                                (0, s.jsx)("a", {
                                  href: e.socialLinks[0]?.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-center gap-2",
                                  children: (0, s.jsx)(u.$, {
                                    variant: "outline",
                                    className: "gap-2",
                                    children: (0, s.jsx)(P, {
                                      className: "w-4 h-4 aspect-square",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    },
                    `founder-${e.name}`
                  )
                ),
              }),
            ],
          });
      var S = a(86802),
        _ = a(67052),
        T = a(8300),
        Z = a(55645);
      let I = () => {
          let { trackClick: e } = (0, T.s)();
          return (0, s.jsxs)(l.A, {
            className: "flex flex-col items-center",
            children: [
              (0, s.jsx)("div", {
                className: "flex flex-wrap gap-5 items-center justify-center",
                children: (0, s.jsx)("p", {
                  className: "text-3xl",
                  children: "How will we scale?",
                }),
              }),
              (0, s.jsx)("div", {
                className: "border border-t-0 border-primary/20 mt-10",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row  border-t border-primary/20 w-full relative",
                  children: [
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "p-5 md:p-14 w-full md:w-1/2 flex flex-col justify-center",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl text-primary/50",
                          children: "Step 1",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl leading-tight mt-2",
                          children:
                            "DumpOps Cloud will absorb the Compute demands of DumpOps Console",
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex items-center justify-center h-full",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, s.jsx)("img", {
                        src: "/about/scale1.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-contain",
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(o.default, {
                src: "/about/pathLineLeftToRight.svg",
                alt: "Our Mission",
                width: 500,
                height: 500,
                className: "object-cover",
              }),
              (0, s.jsx)("div", {
                className: "border border-t-0 border-primary/20",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row  border-t border-primary/20 w-full relative",
                  children: [
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex items-center justify-center h-full",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, s.jsx)("img", {
                        src: "/about/scale2.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-contain",
                      }),
                    }),
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "p-5 md:p-14 w-full md:w-1/2 flex flex-col justify-center",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl text-primary/50",
                          children: "Step 2",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl leading-tight mt-2",
                          children:
                            "DumpOps Network's growing suite of products and services will attract users creating additional Compute demand",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(o.default, {
                src: "/about/pathLineRightToLeft.svg",
                alt: "Our Mission",
                width: 500,
                height: 500,
                className: "object-cover",
              }),
              (0, s.jsx)("div", {
                className: "border border-t-0 border-primary/20",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row  border-t border-primary/20 w-full relative",
                  children: [
                    (0, s.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "p-5 md:p-14 w-full md:w-1/2 flex flex-col justify-center",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-xl text-primary/50",
                          children: "Step 3",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xl leading-tight mt-2",
                          children:
                            "Cloud infrastructure developers will be incentivized to move Web2 and Web3 workloads onto the decentralized Cloud Compute architecture",
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "w-full md:w-1/2 flex items-center justify-center h-full",
                      leftLinePositions: ["top"],
                      rightLinePositions: ["bottom"],
                      topLineHeight: "h-20",
                      bottomLineHeight: "h-20",
                      children: (0, s.jsx)("img", {
                        src: "/about/scale3.webp",
                        alt: "marketplace",
                        className: "w-full h-full object-contain",
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)(d.$n, {
                variant: "outline",
                className: "gap-2 mt-14 text-xl border-primary/10 py-6 px-8",
                onClick: () => {
                  e(Z.R.VIEW_ROADMAP);
                  let t = document.getElementById("roadmap");
                  t && t.scrollIntoView({ behavior: "smooth" });
                },
                children: [
                  "View Roadmap ",
                  (0, s.jsx)(_.Q, { className: "w-4 h-4" }),
                ],
              }),
            ],
          });
        },
        H = () =>
          (0, s.jsxs)(l.A, {
            children: [
              (0, s.jsx)("p", {
                className: "text-3xl text-center",
                children: "Our core values",
              }),
              (0, s.jsx)("p", {
                className: "text-lg text-primary/60 text-center mt-5",
                children:
                  "At DumpOps, we believe in creating a positive work environment for everyone.",
              }),
              (0, s.jsxs)("div", {
                className: "border-y border-primary/20 mt-10",
                children: [
                  (0, s.jsxs)("div", {
                    className: "grid lg:grid-cols-3",
                    children: [
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/chart.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Consistency",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We obsess over reliable Web3 and Compute Node operations with over 99% uptime",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/chats.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Communication",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We maintain effective and respectful communication with our clients and within the team",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/trend.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Growth",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We believe in constant improvement and development in the decentralized infra space",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "grid lg:grid-cols-3 border-t border-primary/20",
                    children: [
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/shield.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Security",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We implement stringent security methods to protect all sensitive data and operations",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/devices.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "User Experience",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We are committed to providing a best-in-class user experience for every one of our users",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(d.Zp, {
                        isBothSide: !0,
                        className: "p-5 md:p-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-16 h-16 border border-primary/20 flex items-center justify-center",
                            children: (0, s.jsx)("img", {
                              src: "/about/icons/scalability.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xl mt-4",
                            children: "Scalability",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-xl leading-tight text-primary/40 mt-1",
                            children:
                              "We offer scalable services to grow with the demands across the expanding blockchain and DePIN infra space",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var B = a(35220),
        R = a(36356),
        D = a(5765);
      let V = [
          {
            quarter: "Q1",
            items: [
              {
                title: "Expansion & Participation",
                subItems: [
                  "Polygon DVT inception",
                  "Rollup-as-a-Service",
                  "One-click deployment: Testnet, RPCs, Nodes",
                  "Client launches: LandSlide, Airchain",
                  "Ecosystem expansions: Avalanche, Arbitrium, Aptos",
                ],
              },
            ],
            isDone: !0,
            isActive: !1,
          },
          {
            quarter: "Q2",
            items: [
              {
                title: "Business",
                subItems: [
                  "Pre-seed round",
                  "Expansion to APAC, DAOs, and distribution via exclusive Partnerships",
                  "+18 Chains in the pipeline",
                  "25k MRR",
                ],
              },
              {
                title: "Technical",
                subItems: [
                  "Incentivization module soft release (private)",
                  "Tokenomics",
                  "Contribute & earn: Feature release",
                  "Multi-chain templates",
                  "Enhance playground capabilities",
                  "Dashboard launch for Governance, Validators, Blockchain Foundations",
                ],
              },
            ],
            isDone: !0,
            isActive: !1,
          },
          {
            quarter: "Q3",
            items: [
              {
                title: "Business",
                subItems: [
                  "One-click: Incentivized Testnet deployments/architecture",
                  "Token utility",
                  "Incentivization module beta release",
                ],
              },
              {
                title: "Technical",
                subItems: [
                  "Vertical integration with Marketplaces, Documentations: SDK/iFrame-based",
                  "Playground support for academies, developer ecosystems, and evangelists",
                  "Payment settlement layer via the native token",
                  "Public launch: Incentivization Module",
                  "Feature release: Royalty via contribute & earn (Private launch)",
                ],
              },
            ],
            isDone: !0,
            isActive: !1,
          },
          {
            quarter: "Q4",
            items: [
              {
                title: "Business",
                subItems: [
                  "Seed round: Private sale",
                  "Introduced an incentive program for developers and Node operators",
                ],
              },
              {
                title: "Technical",
                subItems: [
                  "Public launch: Royalty via contribute & earn",
                  "Node infrastructure expansion",
                  "Marketplace integrations (payable via native token)",
                ],
              },
            ],
            isDone: !0,
            isActive: !1,
          },
        ],
        F = [
          {
            quarter: "Q1",
            items: [
              {
                title: "Accelerate",
                subItems: [
                  "Wave-2 Points to $DUMP claim program",
                  "DumpOps Console V2 | Node Credits",
                  "Compute providers onboarding (supply bootstrapping)",
                  "DumpOps Network Compute Nodes on the Marketplace",
                  "NodeScore and SLA enforcement for Compute Providers | V1",
                  "Security Hub launch: AI-Powered vulnerability tracker",
                ],
              },
            ],
            isDone: !0,
            isActive: !1,
          },
          {
            quarter: "Q2",
            items: [
              {
                title: "Innovate",
                subItems: [
                  "$DUMP staking campaign",
                  "Staking Hub launch",
                  "UNO AI Watcher Nodes",
                  "Developer & grant initiatives via #BuildOnDumpOps campaign",
                ],
              },
            ],
            isDone: !1,
            isActive: !0,
          },
          {
            quarter: "Q3",
            title: "Activate",
            items: [
              {
                title: "Business",
                subItems: [
                  "$DUMP token launch and listings",
                  "$DUMP mint & burn Stage-1",
                  "Trusted Execution Environment (TEE)-powered key management system",
                  "New integrations with more product line launches",
                  "Strategic partnerships & ecosystem development",
                ],
              },
            ],
            isDone: !1,
            isActive: !1,
          },
          {
            quarter: "Q4",
            title: "Dominate",
            items: [
              {
                title: "Business",
                subItems: [
                  "Enterprise support for AI-driven workloads and use cases",
                  "Product B2B integrations/distribution",
                  "$DUMP mint & burn Stage-2",
                  "Ecosystem chapters across various demographics",
                ],
              },
            ],
            isDone: !1,
            isActive: !1,
          },
        ],
        G = [
          { id: "1", label: "2024" },
          { id: "2", label: "2025" },
        ],
        W = (e) => {
          let { position: t } = e;
          return (0, s.jsx)(R.P.div, {
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 0 },
            className: (0, D.cn)("absolute", t),
            children: (0, s.jsxs)("div", {
              className: "relative w-3 h-3",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-[#38c793]/60",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-[#38c793]/60",
                }),
              ],
            }),
          });
        },
        U = () => {
          let [e, t] = (0, i.useState)(G[1].id),
            a = "1" === e ? V : F;
          return (0, s.jsxs)(l.A, {
            id: "roadmap",
            children: [
              (0, s.jsx)("h1", {
                className: "text-3xl text-center mt-10",
                children: "Roadmap",
              }),
              (0, s.jsx)(d.tU, {
                tabs: G,
                className: "place-self-center pr-2 mt-5",
                activeTab: e,
                onChange: (e) => t(e),
              }),
              (0, s.jsx)(
                R.P.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "mt-10",
                  children: a.map((e, t) =>
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsxs)(
                          d.Zp,
                          {
                            isBothSide: !0,
                            className: `relative h-full flex flex-col md:flex-row border-t border-primary/20 ${
                              a.length - 1 === t && "border-b"
                            }`,
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex md:flex-col flex-row h-full",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-24 h-24 md:w-32 md:h-32 border border-t-0 border-l-0 border-primary/20 flex items-center justify-center text-4xl",
                                    children: e.quarter,
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "vertical-lines-dark md:mt-32 ml-24 md:ml-0 md:w-32 w-[calc(100%-96px)] md:h-[calc(100%-128px)] h-24 border-r border-primary/20",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: `p-5 md:p-10 w-full flex flex-col gap-5 ${
                                  e.isActive &&
                                  "bg-[radial-gradient(ellipse_at_center,transparent,rgba(255,255,255,0.13))] border-l-4 border-primary"
                                }`,
                                children: [
                                  e.isDone &&
                                    (0, s.jsx)("div", {
                                      className: "absolute top-5 right-5",
                                      children: (0, s.jsxs)("div", {
                                        className:
                                          "relative h-16 w-16 border border-[#38c793]/30 bg-[#38c793]/10 flex items-center justify-center",
                                        children: [
                                          (0, s.jsx)(B.J, {
                                            className:
                                              "text-[#38c793] z-20 h-6 w-6",
                                          }),
                                          (0, s.jsx)(W, {
                                            position:
                                              "-top-1.5 -left-1.5 md:-top-2 md:-left-2",
                                          }),
                                          (0, s.jsx)(W, {
                                            position:
                                              "-top-1.5 -right-1.5 md:-top-2 md:-right-2",
                                          }),
                                          (0, s.jsx)(W, {
                                            position:
                                              "-bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2",
                                          }),
                                          (0, s.jsx)(W, {
                                            position:
                                              "-bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2",
                                          }),
                                        ],
                                      }),
                                    }),
                                  e?.items?.map((e, t) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className: "w-full",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: (0, s.jsx)("p", {
                                              className: "text-3xl",
                                              children: e.title,
                                            }),
                                          }),
                                          (0, s.jsx)("ul", {
                                            className:
                                              "text-base md:text-lg leading-tight text-primary/40 list-disc pl-5 mt-3 space-y-2",
                                            children: e.subItems.map((e, t) =>
                                              (0, s.jsx)(
                                                "li",
                                                { children: e },
                                                t
                                              )
                                            ),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                ],
                              }),
                            ],
                          },
                          t
                        ),
                        a.length - 1 !== t && (0, s.jsx)(m.A, {}),
                      ],
                    })
                  ),
                },
                e
              ),
            ],
          });
        },
        z = () => {
          let { trackPage: e } = (0, T.s)();
          return (
            (0, i.useEffect)(() => {
              e(Z.v.ABOUT);
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(n, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(c, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(h, {}),
                (0, s.jsx)(p, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(x, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(M, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(I, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(H, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(U, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
                (0, s.jsx)(S.A, {}),
                (0, s.jsx)(l.A, {
                  className: "my-20",
                  children: (0, s.jsx)(r.A, {}),
                }),
              ],
            })
          );
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [3495, 5753, 6080, 6766, 5783, 8441, 1684, 7358], () => t(16154)),
      (_N_E = e.O());
  },
]);
