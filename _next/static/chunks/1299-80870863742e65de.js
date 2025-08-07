"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1299],
  {
    2467: (e, t, s) => {
      s.d(t, { A: () => a });
      var r = s(95155);
      s(12115);
      let a = (e) => {
        let { children: t, className: s, id: a } = e;
        return (0, r.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${s}`,
          id: a,
          children: t,
        });
      };
    },
    8300: (e, t, s) => {
      s.d(t, { s: () => i });
      let r = s(69719).A.getInstance();
      r.init("f2623245635722f8e69e09e00e3b92d2");
      var a = s(12115);
      let l = function (e) {
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
          trackPage: (0, a.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Landed on ${e}`, { ...t });
          }, []),
          trackClick: (0, a.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Clicked on ${e}`, { ...t });
          }, []),
        });
    },
    18684: (e, t, s) => {
      s.d(t, { A: () => v });
      var r = s(95155),
        a = s(12115),
        l = s(2467),
        i = s(75783),
        o = s(55645),
        n = s(67052),
        c = s(8300);
      let d = (e) => {
        let { post: t, isReport: s, isCaseStudy: a } = e,
          { trackClick: l } = (0, c.s)();
        return (0, r.jsxs)(
          i.Zp,
          {
            className: "border border-primary/20 p-4 gap-4",
            isBothSide: !0,
            lineColor: "bg-primary",
            leftLinePositions: ["top"],
            rightLinePositions: ["bottom"],
            topLineHeight: "h-20",
            bottomLineHeight: "h-20",
            showMiddleLine: !1,
            children: [
              (0, r.jsx)("div", {
                className: "relative w-full h-48 border border-primary/20",
                children: (0, r.jsx)("img", {
                  src: t.image,
                  alt: t.title,
                  className: "w-full h-full object-cover",
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col justify-between",
                children: [
                  (0, r.jsxs)("div", {
                    className: "h-36",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-primary/40 text-sm mt-4",
                        children: a ? t.tag.join(", ") : t.tag,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-xl mt-5 line-clamp-2",
                        children: t.title,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-sm text-primary/40 mt-1 line-clamp-1",
                        children: t.description,
                      }),
                      !a &&
                        (0, r.jsx)("p", {
                          className:
                            "text-sm text-primary/40 mt-1 line-clamp-1",
                          children: t.author?.name,
                        }),
                    ],
                  }),
                  (0, r.jsxs)(i.$n, {
                    onClick: () => {
                      l(
                        s
                          ? o.R.REPORT_PAGE_CLICK + t.title
                          : o.R.NEWSROOM_PAGE_CLICK + t.title
                      ),
                        window.open(t.url, "_blank");
                    },
                    variant: "outline",
                    className: "gap-2 mt-5 w-fit",
                    children: [
                      s ? "View Report" : "Read More",
                      (0, r.jsx)(n.Q, { className: "w-4 h-4 -rotate-45" }),
                    ],
                  }),
                ],
              }),
            ],
          },
          t.title
        );
      };
      var m = s(57341),
        x = s(36356),
        u = s(60760),
        h = s(40402),
        p = s(99497),
        N = s(48373),
        E = s(35220);
      let g = {
          hidden: {
            opacity: 0,
            y: -5,
            scale: 0.95,
            transition: { duration: 0.15 },
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.15 },
          },
        },
        C = (e) => {
          let { tabs: t, activeTab: s, onChange: l, className: i = "" } = e,
            [o, n] = (0, a.useState)(!1),
            c = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let e = (e) => {
              c.current && !c.current.contains(e.target) && n(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []);
          let d = t.find((e) => e.id === s)?.label || "Select Filter",
            m = (e) => {
              l(e), n(!1);
            };
          return (0, r.jsxs)("div", {
            className: `relative ${i}`,
            ref: c,
            children: [
              (0, r.jsxs)("button", {
                onClick: () => n(!o),
                className:
                  "flex items-center gap-2 px-4 py-2.5 border border-primary/20 hover:border-primary/40 transition-colors text-sm text-primary/60 hover:text-primary min-w-fit",
                children: [
                  (0, r.jsx)(h.P, {}),
                  (0, r.jsx)(p.n, { size: 16 }),
                  (0, r.jsx)("span", { children: d }),
                  (0, r.jsx)(x.P.div, {
                    animate: { rotate: 180 * !!o },
                    transition: { duration: 0.2 },
                    children: (0, r.jsx)(N.a, { size: 14 }),
                  }),
                ],
              }),
              (0, r.jsx)(u.N, {
                children:
                  o &&
                  (0, r.jsxs)(x.P.div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: g,
                    className:
                      "absolute top-full mt-2 bg-background backdrop-blur-md border border-primary/10 rounded-none min-w-full z-50",
                    style: { transformOrigin: "top" },
                    children: [
                      (0, r.jsx)(h.P, {}),
                      (0, r.jsx)("div", {
                        className: "relative z-10 py-2",
                        children: t.map((e) =>
                          (0, r.jsxs)(
                            "button",
                            {
                              onClick: () => m(e.id),
                              className:
                                "flex items-center justify-between w-full px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors text-left group",
                              children: [
                                (0, r.jsx)("span", {
                                  className: `${
                                    s === e.id
                                      ? "text-primary font-medium"
                                      : "text-primary/60"
                                  }`,
                                  children: e.label,
                                }),
                                s === e.id &&
                                  (0, r.jsx)(E.J, {
                                    size: 16,
                                    className: "text-primary",
                                  }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
              }),
            ],
          });
        };
      var _ = s(8680);
      let v = (e) => {
        let {
          title: t,
          isNewsroom: s,
          newsList: a,
          setSearch: o,
          search: n,
          blogs: c,
          activeTab: x,
          handleTabClick: u,
          tabs: h,
          isReport: p,
          isCaseStudy: N,
        } = e;
        return (0, r.jsxs)(l.A, {
          className: "mt-20",
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex flex-col md:flex-row gap-5 md:items-center justify-between",
              children: [
                (0, r.jsx)("p", {
                  className: "text-3xl text-nowrap",
                  children: t,
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "w-full md:w-80 relative",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex items-center gap-2 border border-primary/20  p-2",
                          children: [
                            (0, r.jsx)(_.e, {
                              className: "text-primary/50",
                              size: 20,
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              placeholder: "Search",
                              className:
                                "placeholder:text-primary/50  focus:outline-none md:w-80 w-full",
                              onChange: (e) => o?.(e.target.value),
                              value: n,
                            }),
                          ],
                        }),
                        (0, r.jsx)(i.P, {}),
                      ],
                    }),
                    !s && h && h.length > 0
                      ? (0, r.jsx)(C, {
                          tabs: h,
                          activeTab: x,
                          onChange: (e) => u?.(e),
                          className: "w-fit",
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
              children: [
                s && a?.length === 0
                  ? (0, r.jsxs)("div", {
                      className:
                        "col-span-full text-center text-lg text-primary/50 mt-10",
                      children: [
                        "No ",
                        p ? "report" : "post",
                        ' with "',
                        n,
                        '" found',
                      ],
                    })
                  : (s || p) &&
                    a?.map((e) =>
                      (0, r.jsx)(d, { post: e, isReport: p }, e.title)
                    ),
                s || c?.length !== 0
                  ? !s &&
                    c?.map((e) =>
                      (0, r.jsx)(m.A, { post: e, isCaseStudy: N }, e.node.title)
                    )
                  : (0, r.jsx)("div", {
                      className:
                        "col-span-full text-center text-lg text-primary/50 mt-10",
                      children: "No blog found",
                    }),
              ],
            }),
          ],
        });
      };
    },
    55645: (e, t, s) => {
      s.d(t, { R: () => a, v: () => r });
      var r = (function (e) {
          return (
            (e.HOME = "Home"),
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
        a = (function (e) {
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
    57341: (e, t, s) => {
      s.d(t, { A: () => n });
      var r = s(95155),
        a = s(75783),
        l = s(8300),
        i = s(55645),
        o = s(35695);
      s(12115);
      let n = (e) => {
        let { post: t, isCaseStudy: s } = e,
          n = (0, o.useRouter)(),
          { trackClick: c } = (0, l.s)();
        return (0, r.jsxs)(
          a.Zp,
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
              s
                ? (c(i.R.CASE_STUDY_PAGE_CLICK + t.node.title),
                  n.push(`/case-studies/${t.node.slug}`))
                : (c(i.R.BLOG_PAGE_CLICK + t.node.title),
                  n.push(`/blog/${t.node.slug}`));
            },
            children: [
              (0, r.jsx)("div", {
                className: "relative w-full h-48 border border-primary/20",
                children: (0, r.jsx)("img", {
                  src: t?.node?.coverImage?.url,
                  alt: t.node.title,
                  className: "w-full h-full object-cover",
                }),
              }),
              (0, r.jsx)("div", {
                className: "flex flex-col justify-between",
                children: (0, r.jsxs)("div", {
                  className: "h-36",
                  children: [
                    (0, r.jsx)("p", {
                      className: "text-primary/40 text-sm mt-4",
                      children: t.node.tags.map((e) => e.name).join(", "),
                    }),
                    (0, r.jsx)("p", {
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
    60013: (e, t, s) => {
      s.d(t, { A: () => l });
      var r = s(95155),
        a = s(36356);
      s(12115);
      let l = (e) => {
        let { className: t = "" } = e;
        return (0, r.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, r.jsxs)(a.P.div, {
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
    84070: (e, t, s) => {
      s.d(t, { FormModalProvider: () => n, V: () => o });
      var r = s(95155),
        a = s(12115),
        l = s(52319);
      let i = (0, a.createContext)(void 0);
      function o() {
        let e = (0, a.useContext)(i);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function n(e) {
        let { children: t } = e,
          [s, o] = (0, a.useState)(!1),
          [n, c] = (0, a.useState)("");
        return (0, r.jsxs)(i.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), o(!0);
            },
          },
          children: [
            t,
            (0, r.jsx)(l.a, {
              isOpen: s,
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
    86802: (e, t, s) => {
      s.d(t, { A: () => c });
      var r = s(95155);
      s(12115);
      var a = s(2467),
        l = s(66766),
        i = s(75783),
        o = s(67052),
        n = s(84070);
      let c = () => {
        let { openFormModal: e } = (0, n.V)();
        return (0, r.jsx)(a.A, {
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
                  (0, r.jsxs)(i.$n, {
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
]);
