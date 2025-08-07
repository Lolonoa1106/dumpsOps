(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6723],
  {
    5113: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var a = r(95155),
        l = r(12115),
        s = r(36356);
      let n = {
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
            text: t,
            speed: r = 50,
            maxIterations: o = 10,
            sequential: i = !1,
            revealDirection: c = "start",
            useOriginalCharsOnly: d = !1,
            characters:
              m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            className: h = "",
            parentClassName: p = "",
            encryptedClassName: u = "",
            animateOn: g = "hover",
            ...A
          } = e,
          [E, f] = (0, l.useState)(t),
          [b, x] = (0, l.useState)(!1),
          [N, v] = (0, l.useState)(!1),
          [_, P] = (0, l.useState)(new Set()),
          [C, w] = (0, l.useState)(!1),
          j = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let e,
              a = 0,
              l = (e) => {
                let r = t.length;
                switch (c) {
                  case "start":
                  default:
                    return e.size;
                  case "end":
                    return r - 1 - e.size;
                  case "center": {
                    let t = Math.floor(r / 2),
                      a = Math.floor(e.size / 2),
                      l = e.size % 2 == 0 ? t + a : t - a - 1;
                    if (l >= 0 && l < r && !e.has(l)) return l;
                    for (let t = 0; t < r; t++) if (!e.has(t)) return t;
                    return 0;
                  }
                }
              },
              s = d
                ? Array.from(new Set(t.split(""))).filter((e) => " " !== e)
                : m.split(""),
              n = (e, t) => {
                if (!d)
                  return e
                    .split("")
                    .map((r, a) =>
                      " " === r
                        ? " "
                        : t.has(a)
                        ? e[a]
                        : s[Math.floor(Math.random() * s.length)]
                    )
                    .join("");
                {
                  let r = e
                      .split("")
                      .map((e, r) => ({
                        char: e,
                        isSpace: " " === e,
                        index: r,
                        isRevealed: t.has(r),
                      })),
                    a = r
                      .filter((e) => !e.isSpace && !e.isRevealed)
                      .map((e) => e.char);
                  for (let e = a.length - 1; e > 0; e--) {
                    let t = Math.floor(Math.random() * (e + 1));
                    [a[e], a[t]] = [a[t], a[e]];
                  }
                  let l = 0;
                  return r
                    .map((t) =>
                      t.isSpace ? " " : t.isRevealed ? e[t.index] : a[l++]
                    )
                    .join("");
                }
              };
            return (
              b
                ? (v(!0),
                  (e = setInterval(() => {
                    P((r) => {
                      if (!i)
                        return (
                          f(n(t, r)),
                          ++a >= o && (clearInterval(e), v(!1), f(t)),
                          r
                        );
                      if (!(r.size < t.length))
                        return clearInterval(e), v(!1), r;
                      {
                        let e = l(r),
                          a = new Set(r);
                        return a.add(e), f(n(t, a)), a;
                      }
                    });
                  }, r)))
                : (f(t), P(new Set()), v(!1)),
              () => {
                e && clearInterval(e);
              }
            );
          }, [b, t, r, o, i, c, m, d]),
          (0, l.useEffect)(() => {
            if ("view" !== g) return;
            let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && !C && (x(!0), w(!0));
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.1 }
              ),
              t = j.current;
            return (
              t && e.observe(t),
              () => {
                t && e.unobserve(t);
              }
            );
          }, [g, C]),
          (0, a.jsxs)(s.P.span, {
            className: p,
            ref: j,
            style: n.wrapper,
            ...("hover" === g
              ? { onMouseEnter: () => x(!0), onMouseLeave: () => x(!1) }
              : {}),
            ...A,
            children: [
              (0, a.jsx)("span", { style: n.srOnly, children: E }),
              (0, a.jsx)("span", {
                "aria-hidden": "true",
                children: E.split("").map((e, t) => {
                  let r = _.has(t) || !N || !b;
                  return (0, a.jsx)(
                    "span",
                    { className: r ? h : u, children: e },
                    t
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    7491: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => d });
      var a = r(95155),
        l = r(44912),
        s = r(6874),
        n = r.n(s);
      r(12115);
      var o = r(5113),
        i = r(67052),
        c = r(57341);
      let d = (e) => {
        let { blogs: t, isCaseStudy: r } = e,
          s = t?.slice(0, 3);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap gap-5 items-center justify-between",
              children: [
                (0, a.jsxs)("p", {
                  className: "text-3xl",
                  children: ["Latest ", r ? "Case Studies" : "Blogs"],
                }),
                (0, a.jsx)(n(), {
                  href: r ? "/case-studies" : "/blog",
                  target: "_blank",
                  children: (0, a.jsxs)(l.$, {
                    variant: "outline",
                    className: "gap-2",
                    children: [
                      (0, a.jsx)(o.A, {
                        text: "Browse More",
                        animateOn: "hover",
                        speed: 70,
                        sequential: !0,
                        maxIterations: 10,
                        useOriginalCharsOnly: !0,
                      }),
                      (0, a.jsx)(i.Q, { className: "w-4 h-4" }),
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
              children: s?.map((e) =>
                (0, a.jsx)(c.A, { post: e }, e.node.title)
              ),
            }),
          ],
        });
      };
    },
    8300: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => n });
      let a = r(69719).A.getInstance();
      a.init("f2623245635722f8e69e09e00e3b92d2");
      var l = r(12115);
      let s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              a.logEvent(e, t);
            } catch (e) {}
        },
        n = () => ({
          track: (e, t) => {
            a.logEvent(e, t);
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
    49478: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => s });
      var a = r(95155),
        l = r(12115);
      let s = (e) => {
        let { content: t } = e,
          r = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            r.current &&
              Array.from(r.current.getElementsByTagName("img")).forEach((e) => {
                if (!e.parentElement?.classList.contains("blog-img-wrapper")) {
                  let t = document.createElement("div");
                  if (
                    ((t.className =
                      "blog-img-wrapper relative w-full border border-primary/20 my-5"),
                    e.parentNode?.insertBefore(t, e),
                    t.appendChild(e),
                    (e.className = "w-full h-auto"),
                    !t.querySelector(".blog-img-corners"))
                  ) {
                    let e = document.createElement("div");
                    (e.className =
                      "blog-img-corners absolute inset-0 pointer-events-none"),
                      t.appendChild(e),
                      [
                        { top: -1, left: -1, border: "border-t border-l" },
                        { top: -1, right: -1, border: "border-t border-r" },
                        { bottom: -1, left: -1, border: "border-b border-l" },
                        { bottom: -1, right: -1, border: "border-b border-r" },
                      ].forEach((t) => {
                        let {
                            top: r,
                            left: a,
                            right: l,
                            bottom: s,
                            border: n,
                          } = t,
                          o = document.createElement("div");
                        (o.className = `absolute w-3 h-3 ${n} border-primary`),
                          (o.style.top = void 0 !== r ? `${r}px` : "auto"),
                          (o.style.left = void 0 !== a ? `${a}px` : "auto"),
                          (o.style.right = void 0 !== l ? `${l}px` : "auto"),
                          (o.style.bottom = void 0 !== s ? `${s}px` : "auto"),
                          e.appendChild(o);
                      });
                  }
                }
              });
          }, [t]),
          (0, a.jsx)("div", {
            ref: r,
            className: "blog-content",
            dangerouslySetInnerHTML: { __html: t },
          })
        );
      };
    },
    55645: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => l, v: () => a });
      var a = (function (e) {
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
    56723: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 49478)),
        Promise.resolve().then(r.bind(r, 96720)),
        Promise.resolve().then(r.bind(r, 71140)),
        Promise.resolve().then(r.bind(r, 7491)),
        Promise.resolve().then(r.t.bind(r, 6874, 23));
    },
    57341: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(95155),
        l = r(75783),
        s = r(8300),
        n = r(55645),
        o = r(35695);
      r(12115);
      let i = (e) => {
        let { post: t, isCaseStudy: r } = e,
          i = (0, o.useRouter)(),
          { trackClick: c } = (0, s.s)();
        return (0, a.jsxs)(
          l.Zp,
          {
            className: "border border-primary/20 p-4 gap-4 cursor-pointer",
            isBothSide: !0,
            lineColor: "bg-primary",
            leftLinePositions: ["top"],
            rightLinePositions: ["bottom"],
            topLineHeight: "h-20",
            bottomLineHeight: "h-20",
            showMiddleLine: !1,
            onClick: () => {
              r
                ? (c(n.R.CASE_STUDY_PAGE_CLICK + t.node.title),
                  i.push(`/case-studies/${t.node.slug}`))
                : (c(n.R.BLOG_PAGE_CLICK + t.node.title),
                  i.push(`/blog/${t.node.slug}`));
            },
            children: [
              (0, a.jsx)("div", {
                className: "relative w-full h-48 border border-primary/20",
                children: (0, a.jsx)("img", {
                  src: t?.node?.coverImage?.url,
                  alt: t.node.title,
                  className: "w-full h-full object-cover",
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex flex-col justify-between",
                children: (0, a.jsxs)("div", {
                  className: "h-36",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-primary/40 text-sm mt-4",
                      children: t.node.tags.map((e) => e.name).join(", "),
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xl mt-5 line-clamp-2",
                      children: t.node.title,
                    }),
                  ],
                }),
              }),
            ],
          },
          t.node.title
        );
      };
    },
    71140: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => s });
      var a = r(95155),
        l = r(12115);
      function s(e) {
        let { targetId: t } = e,
          [r, s] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            let e = () => {
              let e = document.getElementById(t);
              e && s(Math.floor(e.offsetHeight / 500));
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [t]),
          (0, a.jsx)("div", {
            className:
              "flex flex-col items-center absolute top-0 left-0 right-0 -z-10 pointer-events-none",
            children: [...Array(r)].map((e, t) =>
              (0, a.jsx)(
                "hr",
                {
                  className: "w-full border-t border-primary/10",
                  style: { marginTop: 0 === t ? 0 : "500px" },
                },
                t
              )
            ),
          })
        );
      }
    },
    96720: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => N });
      var a = r(95155),
        l = r(75783),
        s = r(6874),
        n = r.n(s),
        o = r(12115),
        i = r(39898);
      let c = new Map([
        [
          "bold",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M117.18,188.74a12,12,0,0,1,0,17l-5.12,5.12A58.26,58.26,0,0,1,70.6,228h0A58.62,58.62,0,0,1,29.14,127.92L63.89,93.17a58.64,58.64,0,0,1,98.56,28.11,12,12,0,1,1-23.37,5.44,34.65,34.65,0,0,0-58.22-16.58L46.11,144.89A34.62,34.62,0,0,0,70.57,204h0a34.41,34.41,0,0,0,24.49-10.14l5.11-5.12A12,12,0,0,1,117.18,188.74ZM226.83,45.17a58.65,58.65,0,0,0-82.93,0l-5.11,5.11a12,12,0,0,0,17,17l5.12-5.12a34.63,34.63,0,1,1,49,49L175.1,145.86A34.39,34.39,0,0,1,150.61,156h0a34.63,34.63,0,0,1-33.69-26.72,12,12,0,0,0-23.38,5.44A58.64,58.64,0,0,0,150.56,180h.05a58.28,58.28,0,0,0,41.47-17.17l34.75-34.75a58.62,58.62,0,0,0,0-82.91Z",
            })
          ),
        ],
        [
          "duotone",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M218.34,119.6,183.6,154.34a46.58,46.58,0,0,1-44.31,12.26c-.31.34-.62.67-.95,1L103.6,202.34A46.63,46.63,0,1,1,37.66,136.4L72.4,101.66A46.6,46.6,0,0,1,116.71,89.4c.31-.34.62-.67,1-1L152.4,53.66a46.63,46.63,0,0,1,65.94,65.94Z",
              opacity: "0.2",
            }),
            o.createElement("path", {
              d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,7.78,8.22H152a8,8,0,0,0,8-7.78A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z",
            })
          ),
        ],
        [
          "fill",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM115.7,192.49a43.31,43.31,0,0,1-55-66.43l25.37-25.37a43.35,43.35,0,0,1,61.25,0,42.9,42.9,0,0,1,9.95,15.43,8,8,0,1,1-15,5.6A27.33,27.33,0,0,0,97.37,112L72,137.37a27.32,27.32,0,0,0,34.68,41.91,8,8,0,1,1,9,13.21Zm79.61-62.55-25.37,25.37A43,43,0,0,1,139.32,168h0a43.35,43.35,0,0,1-40.53-28.12,8,8,0,1,1,15-5.6A27.35,27.35,0,0,0,139.28,152h0a27.14,27.14,0,0,0,19.32-8L184,118.63a27.32,27.32,0,0,0-34.68-41.91,8,8,0,1,1-9-13.21,43.32,43.32,0,0,1,55,66.43Z",
            })
          ),
        ],
        [
          "light",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M238,88.18a52.42,52.42,0,0,1-15.4,35.66l-34.75,34.75A52.28,52.28,0,0,1,150.62,174h-.05A52.63,52.63,0,0,1,98,119.9a6,6,0,0,1,6-5.84h.17a6,6,0,0,1,5.83,6.16A40.62,40.62,0,0,0,150.58,162h0a40.4,40.4,0,0,0,28.73-11.9l34.75-34.74A40.63,40.63,0,0,0,156.63,57.9l-11,11a6,6,0,0,1-8.49-8.49l11-11a52.62,52.62,0,0,1,74.43,0A52.83,52.83,0,0,1,238,88.18Zm-127.62,98.9-11,11A40.36,40.36,0,0,1,70.6,210h0a40.63,40.63,0,0,1-28.7-69.36L76.62,105.9A40.63,40.63,0,0,1,146,135.77a6,6,0,0,0,5.83,6.16H152a6,6,0,0,0,6-5.84A52.63,52.63,0,0,0,68.14,97.42L33.38,132.16A52.63,52.63,0,0,0,70.56,222h0a52.26,52.26,0,0,0,37.22-15.42l11-11a6,6,0,1,0-8.49-8.48Z",
            })
          ),
        ],
        [
          "regular",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z",
            })
          ),
        ],
        [
          "thin",
          o.createElement(
            o.Fragment,
            null,
            o.createElement("path", {
              d: "M236,88.12a50.44,50.44,0,0,1-14.81,34.31l-34.75,34.74A50.33,50.33,0,0,1,150.62,172h-.05A50.63,50.63,0,0,1,100,120a4,4,0,0,1,4-3.89h.11a4,4,0,0,1,3.89,4.11A42.64,42.64,0,0,0,150.58,164h0a42.32,42.32,0,0,0,30.14-12.49l34.75-34.74a42.63,42.63,0,1,0-60.29-60.28l-11,11a4,4,0,0,1-5.66-5.65l11-11A50.64,50.64,0,0,1,236,88.12ZM111.78,188.49l-11,11A42.33,42.33,0,0,1,70.6,212h0a42.63,42.63,0,0,1-30.11-72.77l34.75-34.74A42.63,42.63,0,0,1,148,135.82a4,4,0,0,0,8,.23A50.64,50.64,0,0,0,69.55,98.83L34.8,133.57A50.63,50.63,0,0,0,70.56,220h0a50.33,50.33,0,0,0,35.81-14.83l11-11a4,4,0,1,0-5.65-5.66Z",
            })
          ),
        ],
      ]);
      var d = Object.defineProperty,
        m = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        A = (e, t, r) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        E = (e, t) => {
          for (var r in t || (t = {})) u.call(t, r) && A(e, r, t[r]);
          if (p) for (var r of p(t)) g.call(t, r) && A(e, r, t[r]);
          return e;
        },
        f = (e, t) => m(e, h(t));
      let b = (0, o.forwardRef)((e, t) =>
        o.createElement(i.A, f(E({ ref: t }, e), { weights: c }))
      );
      b.displayName = "Link";
      var x = r(56671);
      let N = (e) => {
        let {
            title: t,
            author: r,
            publishedAt: s,
            coverImage: o,
            blogUrl: i,
            isCaseStudy: c,
          } = e,
          d = c
            ? `https://nodeops.network/case-studies/${i}`
            : `https://nodeops.network/blog/${i}`,
          m = `https://x.com/intent/tweet?text=${t} by @DumpOpsHQ 

 ${d}`;
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col justify-between gap-2",
              children: [
                (0, a.jsx)("h1", {
                  className: " sm:text-5xl text-4xl",
                  children: t,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex justify-between items-center flex-wrap gap-5 mt-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "relative w-10 h-10 border border-primary/20 flex items-center justify-center bg-primary/10",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/logo.png",
                              alt: "blog",
                              className: "w-6 h-6 object-contain",
                            }),
                            (0, a.jsx)(l.Hp, {
                              position: "-top-1 -left-1 md:-top-1 md:-left-1",
                              className: "w-1 h-1",
                            }),
                            (0, a.jsx)(l.Hp, {
                              position: "-top-1 -right-1 md:-top-1 md:-right-1",
                              className: "w-1 h-1",
                            }),
                            (0, a.jsx)(l.Hp, {
                              position:
                                "-bottom-1 -left-1 md:-bottom-1 md:-left-1",
                              className: "w-1 h-1",
                            }),
                            (0, a.jsx)(l.Hp, {
                              position:
                                "-bottom-1 -right-1 md:-bottom-1 md:-right-1",
                              className: "w-1 h-1",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-medium",
                              children: r,
                            }),
                            (0, a.jsx)("div", {
                              className: "w-1 h-1 bg-primary/60 rounded-full",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-primary/60",
                              children: new Date(s).toLocaleDateString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-primary/60",
                          children: "Share on",
                        }),
                        (0, a.jsxs)(n(), {
                          href: m,
                          target: "_blank",
                          className: "p-2 border border-primary/20 relative",
                          children: [
                            (0, a.jsx)(l.P, {}),
                            (0, a.jsx)("img", {
                              src: "/icons/twitter.svg",
                              alt: "twitter",
                              className: "w-5 h-5",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(n(), {
                          href: "",
                          onClick: () => {
                            navigator.clipboard.writeText(d),
                              x.o.success("Blog URL copied!!");
                          },
                          className: "p-2 border border-primary/20 relative",
                          children: [
                            (0, a.jsx)(l.P, {}),
                            (0, a.jsx)(b, { className: "w-5 h-5" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "w-full flex flex-col gap-2 relative",
              children: [
                (0, a.jsx)("img", {
                  src: o,
                  alt: t,
                  className: "w-full h-auto border border-primary/20",
                }),
                (0, a.jsx)(l.P, {}),
              ],
            }),
          ],
        });
      };
    },
  },
]);
