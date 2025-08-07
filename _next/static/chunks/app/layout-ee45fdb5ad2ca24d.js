(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    2467: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => a });
      var r = t(95155);
      t(12115);
      let a = (e) => {
        let { children: s, className: t, id: a } = e;
        return (0, r.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${t}`,
          id: a,
          children: s,
        });
      };
    },
    2973: (e, s, t) => {
      Promise.resolve().then(t.t.bind(t, 19324, 23)),
        Promise.resolve().then(t.bind(t, 49841)),
        Promise.resolve().then(t.bind(t, 70984)),
        Promise.resolve().then(t.bind(t, 80652)),
        Promise.resolve().then(t.bind(t, 84070)),
        Promise.resolve().then(t.bind(t, 26259)),
        Promise.resolve().then(t.bind(t, 96063)),
        Promise.resolve().then(t.bind(t, 58930)),
        Promise.resolve().then(t.t.bind(t, 69243, 23)),
        Promise.resolve().then(t.t.bind(t, 71264, 23)),
        Promise.resolve().then(t.t.bind(t, 21249, 23)),
        Promise.resolve().then(t.bind(t, 56671));
    },
    8300: (e, s, t) => {
      "use strict";
      t.d(s, { s: () => i });
      let r = t(69719).A.getInstance();
      r.init("f2623245635722f8e69e09e00e3b92d2");
      var a = t(12115);
      let l = function (e) {
          let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              r.logEvent(e, s);
            } catch (e) {}
        },
        i = () => ({
          track: (e, s) => {
            r.logEvent(e, s);
          },
          trackPage: (0, a.useCallback)(function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Landed on ${e}`, { ...s });
          }, []),
          trackClick: (0, a.useCallback)(function (e) {
            let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            l(`Clicked on ${e}`, { ...s });
          }, []),
        });
    },
    19324: () => {},
    33857: (e, s, t) => {
      "use strict";
      t.d(s, { YN: () => r, YX: () => o, f_: () => i });
      let r = async () => {
          try {
            let e = await fetch(
              "https://oms-oneclick.nodeops.xyz/api/v1/newsletter"
            );
            return await e.json();
          } catch (e) {
            return null;
          }
        },
        a = `
 query Publication($id: ObjectId="669e562e8d64bee489c47f56",$cursor:String) {
      publication(id: $id) {
          id,
     			posts(first:30,after:$cursor){
          pageInfo{
            hasNextPage,
            endCursor
          },
          edges {
            node {
              	id,
              title,
              slug
          coverImage {
            url
          }
          tags {
            name
          }
          publishedAt
          author {
            name
            profilePicture
          }
            }
          }
        }
      }
  }
`;
      async function l(e) {
        let s =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          return (
            await fetch("https://gql.hashnode.com", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: e, variables: s }),
              next: { revalidate: 1 },
            })
          ).json();
        } catch (e) {
          return console.error(e), null;
        }
      }
      let i = async () => {
        let e = !1,
          s = [],
          t = "";
        for (; !e; ) {
          let r = await l(a, { cursor: t });
          r?.data?.publication?.posts?.pageInfo?.hasNextPage || (e = !0),
            s.push(...r?.data?.publication?.posts?.edges),
            (t = r?.data?.publication?.posts?.pageInfo?.endCursor);
        }
        return s;
      };
      async function o(e) {
        try {
          return (
            await fetch(
              "https://oms-oneclick.nodeops.xyz/api/v1/subscribe/email",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e }),
              }
            )
          ).json();
        } catch (e) {
          return console.error(e), null;
        }
      }
    },
    49841: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => h });
      var r = t(95155),
        a = t(12115),
        l = t(2467),
        i = t(66766),
        o = t(6874),
        n = t.n(o),
        c = t(55645),
        d = t(8300),
        p = t(75783);
      let m = [

        ],
        h = () => {
          let { trackClick: e } = (0, d.s)(),
            [s, t] = (0, a.useState)(!1),
            [o, h] = (0, a.useState)(""),
            x = (s) => {
              h(s), t(!0), e(c.R.FOOTER_LINK + "Form");
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(l.A, {
                className: "mt-20 overflow-hidden",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 gap-10",
                    children: [
                      (0, r.jsx)(i.default, {
                        src: "/logo.png",
                        alt: "DumpOps",
                        width: 80,
                        height: 80,
                      }),
                      (0, r.jsx)("div", {
                        className: "flex flex-col md:items-end",
                        children: (0, r.jsx)(i.default, {
                          src: "/auditName.png",
                          alt: "Audited By",
                          width: 400,
                          height: 400,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10",
                    children: m.map((s) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "w-1 h-1 bg-emerald-400",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-xs",
                                  children: s.label,
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "flex flex-col gap-2 mt-4",
                              children: s.items.map((s) =>
                                s.href.includes("zohopublic")
                                  ? (0, r.jsx)(
                                      "button",
                                      {
                                        onClick: () => x(s.href),
                                        className: "text-xl text-left",
                                        children: (0, r.jsx)("p", {
                                          className: "text-xl",
                                          children: s.label,
                                        }),
                                      },
                                      s.label
                                    )
                                  : (0, r.jsx)(
                                      n(),
                                      {
                                        href: s.href,
                                        target: s.isExternal
                                          ? "_blank"
                                          : "_self",
                                        className: "text-xl",
                                        onClick: () =>
                                          e(c.R.FOOTER_LINK + s.label),
                                        children: (0, r.jsx)("p", {
                                          className: "text-xl",
                                          children: s.label,
                                        }),
                                      },
                                      s.label
                                    )
                              ),
                            }),
                          ],
                        },
                        s.label
                      )
                    ),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex items-center justify-between md:flex-row flex-col gap-4 mt-16",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-xs text-primary/50",
                        children:
                          "\xa92025 DumpOps Network // All rights reserved",
                      }),
                      (0, r.jsxs)("div", {
                        className: "text-xs text-primary/50 flex gap-2",
                        children: [
                          (0, r.jsx)(n(), {
                            href: "https://nodeops-public-assets.s3.eu-central-1.amazonaws.com/terms.pdf",
                            className: "underline",
                            target: "_blank",
                            children: "Terms",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-primary/50",
                            children: "|",
                          }),
                          (0, r.jsx)(n(), {
                            href: "https://nodeops-public-assets.s3.eu-central-1.amazonaws.com/privacy.pdf",
                            className: "underline",
                            target: "_blank",
                            children: "Privacy",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "relative md:h-[233px] h-[133px] mt-10",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute -top-[1px] -left-[1px] md:w-20 md:h-20 w-10 h-10 border-t border-l pointer-events-none",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "absolute -top-[1px] -right-[1px] md:w-20 md:h-20 w-10 h-10 border-t border-r pointer-events-none",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "md:text-[266px] text-[85px] font-bold text-center absolute md:-bottom-40 -bottom-12 left-1/2 -translate-x-1/2",
                        children: "DumpOps",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(p.aF, {
                isOpen: s,
                onClose: () => t(!1),
                className: "h-[670px]",
                modalClassName: "max-w-2xl",
                children: (0, r.jsx)("iframe", {
                  src: o,
                  className: "w-full h-full border-0",
                  title: "Form",
                }),
              }),
            ],
          });
        };
    },
    55645: (e, s, t) => {
      "use strict";
      t.d(s, { R: () => a, v: () => r });
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
    60013: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      var r = t(95155),
        a = t(36356);
      t(12115);
      let l = (e) => {
        let { className: s = "" } = e;
        return (0, r.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${s}`,
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
    70984: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => C });
      var r = t(95155),
        a = t(12115),
        l = t(6874),
        i = t.n(l),
        o = t(66766),
        n = t(67052),
        c = t(71211),
        d = t(36356),
        p = t(60760),
        m = t(40402),
        h = t(48373),
        x = t(35695),
        u = t(55645),
        b = t(8300),
        f = t(84070);
      let g = {
          hidden: { opacity: 0, y: -5, transition: { duration: 0.2 } },
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        },
        v = (e) => {
          let {
              label: s,
              items: t,
              isLastItem: l = !1,
              itemHref: c,
              isCTA: v = !1,
            } = e,
            [N, y] = (0, a.useState)(!1),
            { trackClick: j } = (0, b.s)(),
            { openFormModal: E } = (0, f.V)(),
            w = (0, x.useRouter)(),
            k = "Resources" === s ? t.slice(0, 5) : t.slice(0, 4),
            _ = "Resources" === s ? t.slice(5, 10) : t.slice(4, 8);
          return (0, r.jsxs)("div", {
            className: "relative",
            onMouseEnter: () => {
              t.length > 0 && y(!0);
            },
            onMouseLeave: () => {
              t.length > 0 && y(!1);
            },
            children: [
              (0, r.jsxs)("button", {
                onClick: () => {
                  c
                    ? (j(u.R.NAVBAR_ITEM + s),
                      c.includes("zohopublic") ? E(c) : w.push(c))
                    : y(!N);
                },
                className: `flex items-center gap-1 px-4 py-2.5  hover:text-primary transition-colors ${
                  v
                    ? "border border-primary/20 text-primary"
                    : "text-primary/60 text-sm"
                }`,
                children: [
                  v && (0, r.jsx)(m.P, {}),
                  (0, r.jsx)("span", { children: s }),
                  (0, r.jsx)(d.P.div, {
                    animate: { rotate: 180 * !!N },
                    transition: { duration: 0.2 },
                    children: t.length > 0 && (0, r.jsx)(h.a, { size: 16 }),
                  }),
                ],
              }),
              (0, r.jsx)(p.N, {
                children:
                  N &&
                  (0, r.jsxs)(d.P.div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: g,
                    className:
                      "absolute top-full mt-2 bg-background backdrop-blur-md border border-primary/10 rounded-none",
                    style: {
                      transformOrigin: "top",
                      width: _.length > 0 ? "600px" : "300px",
                      ...(l ? { right: 0 } : { left: 0 }),
                    },
                    children: [
                      (0, r.jsx)(m.P, {}),
                      (0, r.jsx)("div", {
                        className: "relative z-10 p-4",
                        children: (0, r.jsxs)("div", {
                          className: `grid ${
                            _.length > 0 ? "grid-cols-2" : "grid-cols-1"
                          }`,
                          children: [
                            (0, r.jsx)("div", {
                              className: "",
                              children: k.map((e, t) =>
                                e.href && e.href.includes("zohopublic")
                                  ? (0, r.jsxs)(
                                      "button",
                                      {
                                        onClick: (t) => {
                                          t.preventDefault(),
                                            E(e.href),
                                            j(
                                              u.R.NAVBAR_DROPDOWN_ITEM +
                                                "-" +
                                                s +
                                                "-" +
                                                e.label
                                            );
                                        },
                                        className:
                                          "flex items-center relative gap-3 p-3 hover:bg-primary/10 transition-colors group border border-primary/20 w-full text-left",
                                        children: [
                                          (0, r.jsx)(m.P, {}),
                                          e.icon &&
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-12 h-12 flex items-center justify-center border border-primary/20",
                                              children: (0, r.jsx)(o.default, {
                                                src: e.icon,
                                                alt: "icon",
                                                width: 24,
                                                height: 24,
                                              }),
                                            }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "flex flex-col flex-grow",
                                            children: (0, r.jsx)("span", {
                                              className:
                                                "font-medium text-primary group-hover:text-primary",
                                              children: e.label,
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "text-primary opacity-0 group-hover:opacity-100 transition-all duration-300",
                                            children: (0, r.jsx)(n.Q, {
                                              size: 20,
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  : (0, r.jsxs)(
                                      i(),
                                      {
                                        href: e.href,
                                        target: e.isExternal
                                          ? "_blank"
                                          : "_self",
                                        onClick: () =>
                                          j(
                                            u.R.NAVBAR_DROPDOWN_ITEM +
                                              "-" +
                                              s +
                                              "-" +
                                              e.label
                                          ),
                                        className:
                                          "flex items-center relative gap-3 p-3 hover:bg-primary/10 transition-colors group border border-primary/20",
                                        children: [
                                          (0, r.jsx)(m.P, {}),
                                          e.icon &&
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-12 h-12 flex items-center justify-center border border-primary/20",
                                              children: (0, r.jsx)(o.default, {
                                                src: e.icon,
                                                alt: "icon",
                                                width: 24,
                                                height: 24,
                                              }),
                                            }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "flex flex-col flex-grow",
                                            children: (0, r.jsx)("span", {
                                              className:
                                                "font-medium text-primary group-hover:text-primary",
                                              children: e.label,
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "text-primary opacity-0 group-hover:opacity-100 transition-all duration-300",
                                            children: (0, r.jsx)(n.Q, {
                                              size: 20,
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                              ),
                            }),
                            _.length > 0 &&
                              (0, r.jsx)("div", {
                                className: "",
                                children: _.map((e, t) =>
                                  e.href && e.href.includes("zohopublic")
                                    ? (0, r.jsxs)(
                                        "button",
                                        {
                                          onClick: (t) => {
                                            t.preventDefault(),
                                              E(e.href),
                                              j(
                                                u.R.NAVBAR_DROPDOWN_ITEM +
                                                  "-" +
                                                  s +
                                                  "-" +
                                                  e.label
                                              );
                                          },
                                          className:
                                            "flex items-center relative gap-3 p-3 hover:bg-primary/10 transition-colors group border border-primary/20 w-full text-left",
                                          children: [
                                            (0, r.jsx)(m.P, {}),
                                            e.icon &&
                                              (0, r.jsx)("div", {
                                                className:
                                                  "w-12 h-12 flex items-center justify-center border border-primary/20",
                                                children: (0, r.jsx)(
                                                  o.default,
                                                  {
                                                    src: e.icon,
                                                    alt: "icon",
                                                    width: 24,
                                                    height: 24,
                                                  }
                                                ),
                                              }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "flex flex-col flex-grow",
                                              children: (0, r.jsx)("span", {
                                                className:
                                                  "font-medium text-primary group-hover:text-primary",
                                                children: e.label,
                                              }),
                                            }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "text-primary opacity-0 group-hover:opacity-100 transition-all duration-300",
                                              children: (0, r.jsx)(n.Q, {
                                                size: 20,
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    : (0, r.jsxs)(
                                        i(),
                                        {
                                          href: e.href,
                                          target: e.isExternal
                                            ? "_blank"
                                            : "_self",
                                          onClick: () =>
                                            j(
                                              u.R.NAVBAR_DROPDOWN_ITEM +
                                                "-" +
                                                s +
                                                "-" +
                                                e.label
                                            ),
                                          className:
                                            "flex items-center relative gap-3 p-3 hover:bg-primary/10 transition-colors group border border-primary/20",
                                          children: [
                                            (0, r.jsx)(m.P, {}),
                                            e.icon &&
                                              (0, r.jsx)("div", {
                                                className:
                                                  "w-12 h-12 flex items-center justify-center border border-primary/20",
                                                children: (0, r.jsx)(
                                                  o.default,
                                                  {
                                                    src: e.icon,
                                                    alt: "icon",
                                                    width: 24,
                                                    height: 24,
                                                  }
                                                ),
                                              }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "flex flex-col flex-grow",
                                              children: (0, r.jsx)("span", {
                                                className:
                                                  "font-medium text-primary group-hover:text-primary",
                                                children: e.label,
                                              }),
                                            }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "text-primary opacity-0 group-hover:opacity-100 transition-all duration-300",
                                              children: (0, r.jsx)(n.Q, {
                                                size: 20,
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                ),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
              }),
            ],
          });
        };
      var N = t(82587),
        y = t(65498);
      let j = (e) => {
        let { isOpen: s, onClose: t, menuItems: l } = e,
          [c, h] = a.useState(null),
          f = (0, x.useRouter)(),
          { trackClick: g } = (0, b.s)(),
          v = [
            {
              label: "Launch App",
              subMenu: [
                {
                  label: "DumpOps Cloud",
                  href: "https://cloud.nodeops.network",
                  isExternal: !0,
                  icon: "/products/icons/cloud.svg",
                },
                {
                  label: "DumpOps Console",
                  href: "https://console.nodeops.network",
                  isExternal: !0,
                  icon: "/products/icons/codesandbox.svg",
                },
                {
                  label: "Staking Hub",
                  href: "https://stake.nodeops.network",
                  isExternal: !0,
                  icon: "/products/icons/coins.svg",
                },
                {
                  label: "Portal",
                  href: "https://portal.nodeops.network/",
                  isExternal: !0,
                  icon: "/products/icons/portal.svg",
                },
              ],
            },
            ...l,
          ];
        return (0, r.jsx)("div", {
          className: "relative",
          children: (0, r.jsx)(p.N, {
            children:
              s &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(d.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className:
                      "fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]",
                    onClick: t,
                  }),
                  (0, r.jsx)(d.P.div, {
                    initial: { y: "100%" },
                    animate: { y: 0 },
                    exit: { y: "100%" },
                    transition: { type: "spring", damping: 25, stiffness: 200 },
                    className:
                      "fixed inset-x-0 bottom-0 bg-background border-t border-primary/10 z-[999] max-h-[85vh] overflow-hidden rounded-t-xl",
                    children: (0, r.jsxs)(d.P.div, {
                      className: "relative",
                      layout: !0,
                      transition: {
                        layout: { duration: 0.3, ease: "easeInOut" },
                      },
                      children: [
                        (0, r.jsx)(m.P, {}),
                        (0, r.jsxs)("div", {
                          className:
                            "sticky top-0 bg-background/80 backdrop-blur-md border-b border-primary/10 p-4 flex justify-between items-center z-10",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "text-xl font-medium text-primary",
                              children: "Menu",
                            }),
                            (0, r.jsx)("button", {
                              onClick: t,
                              className:
                                "text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors",
                              children: (0, r.jsx)(y.X, { size: 24 }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(d.P.div, {
                          className: "overflow-auto",
                          style: { maxHeight: "calc(85vh - 70px)" },
                          children: (0, r.jsx)(N.o, {
                            children: (0, r.jsx)(d.P.div, {
                              className: "p-4 space-y-4",
                              layout: !0,
                              children: c
                                ? (0, r.jsxs)(d.P.div, {
                                    className: "space-y-4",
                                    initial: { opacity: 0, x: 20 },
                                    animate: { opacity: 1, x: 0 },
                                    exit: { opacity: 0, x: -20 },
                                    transition: { duration: 0.2 },
                                    children: [
                                      (0, r.jsxs)("button", {
                                        onClick: () => h(null),
                                        className:
                                          "text-primary/60 flex items-center gap-2 hover:text-primary transition-colors px-2",
                                        children: [
                                          (0, r.jsx)(n.Q, {
                                            className: "rotate-180",
                                            size: 20,
                                          }),
                                          "Back to menu",
                                        ],
                                      }),
                                      (0, r.jsx)("h3", {
                                        className: "text-lg font-medium px-2",
                                        children: c,
                                      }),
                                      (0, r.jsx)(d.P.div, {
                                        layout: !0,
                                        children: v
                                          .find((e) => e.label === c)
                                          ?.subMenu.map((e, s) =>
                                            (0, r.jsx)(
                                              d.P.div,
                                              {
                                                layout: !0,
                                                initial: { opacity: 0, y: 10 },
                                                animate: { opacity: 1, y: 0 },
                                                transition: { delay: 0.05 * s },
                                                children: (0, r.jsxs)(i(), {
                                                  href: e.href,
                                                  target: e.isExternal
                                                    ? "_blank"
                                                    : "_self",
                                                  className:
                                                    "flex items-center gap-3 p-3 hover:bg-primary/10 transition-colors group border border-primary/20 relative",
                                                  onClick: (s) => {
                                                    g(
                                                      u.R.MOBILE_MENU_ITEM +
                                                        e.label
                                                    ),
                                                      t();
                                                  },
                                                  children: [
                                                    (0, r.jsx)(m.P, {}),
                                                    e.icon &&
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-12 h-12 shrink-0 flex items-center justify-center border border-primary/20",
                                                        children: (0, r.jsx)(
                                                          o.default,
                                                          {
                                                            src: e.icon,
                                                            alt: e.label,
                                                            width: 24,
                                                            height: 24,
                                                          }
                                                        ),
                                                      }),
                                                    (0, r.jsxs)("div", {
                                                      className: "flex-grow",
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "font-medium text-primary group-hover:text-accent",
                                                          children: e.label,
                                                        }),
                                                        e.desc &&
                                                          (0, r.jsx)("div", {
                                                            className:
                                                              "text-sm text-primary/60",
                                                            children: e.desc,
                                                          }),
                                                      ],
                                                    }),
                                                    (0, r.jsx)(n.Q, {
                                                      size: 20,
                                                      className:
                                                        "text-accent opacity-0 group-hover:opacity-100 transition-all duration-300",
                                                    }),
                                                  ],
                                                }),
                                              },
                                              s
                                            )
                                          ),
                                      }),
                                    ],
                                  })
                                : (0, r.jsx)(d.P.div, {
                                    layout: !0,
                                    children: v.map((e, s) =>
                                      (0, r.jsx)(
                                        d.P.div,
                                        {
                                          layout: !0,
                                          initial: { opacity: 0, y: 10 },
                                          animate: { opacity: 1, y: 0 },
                                          transition: { delay: 0.05 * s },
                                          children: (0, r.jsxs)("button", {
                                            onClick: () => {
                                              g(u.R.MOBILE_MENU_ITEM + e.label),
                                                e?.subMenu?.length > 0
                                                  ? h(e.label)
                                                  : (f.push(e?.href || ""),
                                                    t());
                                            },
                                            className:
                                              "w-full flex items-center justify-between p-4 hover:bg-primary/10 transition-colors group border border-primary/20 relative",
                                            children: [
                                              (0, r.jsx)(m.P, {}),
                                              (0, r.jsx)("span", {
                                                className:
                                                  "text-lg text-primary group-hover:text-accent",
                                                children: e.label,
                                              }),
                                              (0, r.jsx)(n.Q, {
                                                size: 20,
                                                className:
                                                  "text-primary/60 group-hover:text-accent",
                                              }),
                                            ],
                                          }),
                                        },
                                        s
                                      )
                                    ),
                                  }),
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "h-[env(safe-area-inset-bottom)]",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          }),
        });
      };
      var E = t(71780),
        w = t(95056),
        k = t(5765);
      function _(e) {
        let {
          className: s,
          reverse: t = !1,
          pauseOnHover: a = !1,
          children: l,
          vertical: i = !1,
          repeat: o = 4,
          ...n
        } = e;
        return (0, r.jsx)("div", {
          ...n,
          className: (0, k.cn)(
            "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
            { "flex-row": !i, "flex-col": i },
            s
          ),
          children: Array(o)
            .fill(0)
            .map((e, s) =>
              (0, r.jsx)(
                "div",
                {
                  className: (0, k.cn)(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    {
                      "animate-marquee flex-row": !i,
                      "animate-marquee-vertical flex-col": i,
                      "group-hover:[animation-play-state:paused]": a,
                      "[animation-direction:reverse]": t,
                    }
                  ),
                  children: l,
                },
                s
              )
            ),
        });
      }
      let P = [

          { label: "Blog",href: "/blog", subMenu: [ ] },
          { label: "Documentation",href: "https://docs.nodeops.network", subMenu: [ ] },
          { label: "About",href: "/about", subMenu: [ ] },
          { label: "Tokenomics",href: "/tokenomics", subMenu: [ ] },
          {
            label: "Community",
            subMenu: [
              {
                label: "Twitter",
                href: "https://x.com/DumpOpsHQ",
                icon: "/icons/twitter.svg",
                desc: "",
                isExternal: !0,
              },
              {
                label: "Telegram",
                href: "https://t.me/nodeopsxyz",
                icon: "/icons/telegram.svg",
                desc: "",
                isExternal: !0,
              },
            ],
          },
        ],
        C = () => {
          let [e, s] = (0, a.useState)(!1),
            [t, l] = (0, a.useState)(!1),
            { scrollY: p, scrollYProgress: m } = (0, E.L)(),
            h = (0, x.usePathname)(),
            { openFormModal: u } = (0, f.V)(),
            b = "/" === h || "/grant" === h;
          return (
            (0, w.L)(p, "change", (e) => {
              l(e > 10);
            }),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: `fixed top-0 mt-3 left-1/2 -translate-x-1/2 h-20 w-full max-w-screen-xl z-[999] ${
                    b ? "bg-transparent" : "bg-background"
                  }`,
                  children: [
                    (0, r.jsx)("div", {
                      className: `md:h-8 h-10 w-full border-t border-r border-l border-primary/20 ${
                        t ? "backdrop-blur-md" : ""
                      } shadow-[0_12px_20px_#ffffff08_inset,0_0_40px_#ffffff14_inset,0_0_8px_#ffffff08_inset,0_0_12px_#ffffff0d_inset,0_1px_1px_#ffffff1f_inset]`,
                      children: (0, r.jsx)(_, {
                        className: "h-full w-full p-0 [--duration:20s]",
                        pauseOnHover: !0,
                        children: [
                          {
                            title: "Tokenomics",
                            icon: "/logo.png",
                            ctaLabel: "Explore Now",
                            link: "/tokenomics",
                            isExternal: !1,
                          },
                          {
                            title: "Stake your $DUMP",
                            icon: "/products/icons/handcoins.svg",
                            ctaLabel: "Explore Now",
                            link: "https://portal.nodeops.network/stake",
                            isExternal: !0,
                          },
                          {
                            title: "Deploy UNO Dump",
                            icon: "/logo.png",
                            ctaLabel: "Explore Now",
                            link: "https://console.nodeops.network/deployNode/nodeops-mainnet-orchestrator",
                            isExternal: !0,
                          },
                          {
                            title: "Claim your $DUMP",
                            icon: "/products/icons/dollar2.svg",
                            ctaLabel: "Claim Now",
                            link: "https://claims.nodeops.network",
                            isExternal: !0,
                          },
                          {
                            title: "DumpOps Portal: Your DeFi hub",
                            icon: "/Portal.png",
                            ctaLabel: "Explore Portal",
                            link: "https://portal.nodeops.network",
                            isExternal: !0,
                          },
                        ].map((e, s) =>
                          (0, r.jsx)(
                            "div",
                            {
                              className:
                                "flex-shrink-0 px-8 py-2 cursor-pointer hover:bg-accent/5 transition-all duration-300 flex items-center justify-center",
                              onClick: () => {
                                e.isExternal
                                  ? window.open(e.link, "_blank")
                                  : (window.location.href = e.link);
                              },
                              children: (0, r.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 text-sm md:text-xs text-primary/80 hover:text-accent transition-colors duration-300",
                                children: [
                                  (0, r.jsx)("img", {
                                    src: e.icon,
                                    alt: e.title,
                                    className: "w-4 h-4",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "inline",
                                    children: e.title,
                                  }),
                                  (0, r.jsx)(n.Q, {
                                    className: "w-3 h-3 -rotate-45",
                                  }),
                                ],
                              }),
                            },
                            s
                          )
                        ),
                      }),
                    }),
                    (0, r.jsx)(d.P.nav, {
                      animate: {
                        backgroundColor: t
                          ? "rgba(0, 0, 0, 0.1)"
                          : b
                          ? "transparent"
                          : "#000000",
                        backdropFilter: t ? "blur(10px)" : "none",
                      },
                      transition: { duration: 0.3 },
                      className: "relative h-full w-full",
                      children: (0, r.jsxs)("div", {
                        className:
                          "max-w-screen-xl relative mx-auto px-4 py-2 h-full flex items-center justify-between border border-primary/20",
                        children: [
                          (0, r.jsx)(i(), {
                            href: "/",
                            className: "text-2xl font-bold z-20",
                            children: (0, r.jsx)(o.default, {
                              src: "/logo.png",
                              alt: "Node",
                              width: 50,
                              height: 50,
                            }),
                          }),
                          (0, r.jsx)(d.P.div, {
                            style: { scaleX: m },
                            className:
                              "absolute top-0 left-0 right-0 bottom-0 h-full bg-primary/10 origin-[0%] z-0",
                          }),
                          (0, r.jsx)("div", {
                            className: "hidden lg:flex items-center",
                            children: P?.map((e, s) =>
                              (0, r.jsx)(
                                v,
                                {
                                  label: e.label,
                                  items: e.subMenu.map((e) =>
                                    e.href && e.href.includes("zohopublic")
                                      ? {
                                          ...e,
                                          onClick: (s) => {
                                            s.preventDefault(), u(e.href);
                                          },
                                        }
                                      : e
                                  ),
                                  isLastItem: s >= P.length - 2,
                                  itemHref: e.href,
                                },
                                e.label
                              )
                            ),
                          }),
                          (0, r.jsx)("button", {
                            className: "lg:hidden text-primary p-2",
                            onClick: () => s(!0),
                            children: (0, r.jsx)(c.B, { size: 24 }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(j, {
                  isOpen: e,
                  onClose: () => s(!1),
                  menuItems: P,
                }),
              ],
            })
          );
        };
    },
    80652: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => m });
      var r = t(95155),
        a = t(12115),
        l = t(2467),
        i = t(75783),
        o = t(67052),
        n = t(95524),
        c = t(60013),
        d = t(33857),
        p = t(56671);
      let m = () => {
        let [e, s] = (0, a.useState)(!1),
          [t, m] = (0, a.useState)(""),
          [h, x] = (0, a.useState)(!0),
          u = async () => {
            if ((s(!0), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))) {
              p.o.error("Please enter a valid email address"), s(!1);
              return;
            }
            "success" === (await (0, d.YX)(t)).message
              ? (m(""), p.o.success("Email registered successfully"))
              : p.o.error("Failed to register email"),
              s(!1);
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.A, {
              className: "",
              children: (0, r.jsxs)("div", {
                className:
                  "flex md:flex-row items-center justify-between gap-10 border border-primary/10 p-10 relative bg-[radial-gradient(ellipse_at_center,transparent,rgba(255,255,255,0.05))]",
                children: [
                  (0, r.jsx)(i.P, { className: "w-4 h-4" }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-3xl",
                        children: "Get your weekly drop",
                      }),
                      (0, r.jsxs)("div", {
                        className: "text-primary/50 mt-5 text-lg",
                        children: [
                          "Infrastructure alpha, real stats, new deployments straight from the DumpOps team. One email. Once a week.",
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-primary",
                            children: "Always worth it.",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "flex gap-4",
                        children: (0, r.jsx)("div", {
                          className: "relative",
                          children: (0, r.jsxs)("div", {
                            className: "flex gap-2 mt-8 flex-wrap",
                            children: [
                              (0, r.jsx)(i.pd, {
                                wrapperClassName: "md:w-80 w-full",
                                className: "w-full",
                                type: "email",
                                placeholder: "Enter your email",
                                value: t,
                                onChange: (e) => {
                                  m(e.target.value);
                                },
                              }),
                              (0, r.jsxs)(i.$n, {
                                className:
                                  "gap-2 !h-12 bg-accent hover:bg-accent/90 text-black md:w-auto w-full",
                                variant: "outline",
                                disabled: e || !h || !t,
                                onClick: u,
                                children: [
                                  "Sign Up ",
                                  (0, r.jsx)(o.Q, { className: "w-4 h-4" }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex items-center gap-2 mt-4 cursor-pointer",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "h-4 w-4 border border-primary/20 flex items-center justify-center",
                            onClick: () => x(!h),
                            children: (0, r.jsx)("div", {
                              className: `h-2.5 w-2.5 text-accent focus:ring-accent ${
                                h ? "bg-accent" : ""
                              }`,
                            }),
                          }),
                          (0, r.jsx)("label", {
                            htmlFor: "consent",
                            className: "text-sm text-primary cursor-pointer",
                            onClick: () => x(!h),
                            children:
                              "Yes, I agree to receive email communications",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "md:flex hidden items-center justify-center border border-primary/10 p-6",
                    children: (0, r.jsx)(n.j, {
                      className: "w-40 h-40 text-primary/20",
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(l.A, {
              className: "my-20",
              children: (0, r.jsx)(c.A, {}),
            }),
          ],
        });
      };
    },
    84070: (e, s, t) => {
      "use strict";
      t.d(s, { FormModalProvider: () => n, V: () => o });
      var r = t(95155),
        a = t(12115),
        l = t(52319);
      let i = (0, a.createContext)(void 0);
      function o() {
        let e = (0, a.useContext)(i);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function n(e) {
        let { children: s } = e,
          [t, o] = (0, a.useState)(!1),
          [n, c] = (0, a.useState)("");
        return (0, r.jsxs)(i.Provider, {
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
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [
        1946, 3495, 5753, 6080, 6766, 6874, 3753, 1780, 7874, 5783, 8441, 1684,
        7358,
      ],
      () => s(2973)
    ),
      (_N_E = e.O());
  },
]);
