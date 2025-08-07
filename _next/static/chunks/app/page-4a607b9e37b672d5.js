(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    2467: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l });
      var a = s(95155);
      s(12115);
      let l = (e) => {
        let { children: t, className: s, id: l } = e;
        return (0, a.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${s}`,
          id: l,
          children: t,
        });
      };
    },
    5113: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var a = s(95155),
        l = s(12115),
        r = s(36356);
      let i = {
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
      function n(e) {
        let {
            text: t,
            speed: s = 50,
            maxIterations: n = 10,
            sequential: o = !1,
            revealDirection: c = "start",
            useOriginalCharsOnly: d = !1,
            characters:
              u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
            className: h = "",
            parentClassName: m = "",
            encryptedClassName: p = "",
            animateOn: x = "hover",
            ...f
          } = e,
          [g, y] = (0, l.useState)(t),
          [w, b] = (0, l.useState)(!1),
          [j, v] = (0, l.useState)(!1),
          [N, _] = (0, l.useState)(new Set()),
          [A, S] = (0, l.useState)(!1),
          E = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let e,
              a = 0,
              l = (e) => {
                let s = t.length;
                switch (c) {
                  case "start":
                  default:
                    return e.size;
                  case "end":
                    return s - 1 - e.size;
                  case "center": {
                    let t = Math.floor(s / 2),
                      a = Math.floor(e.size / 2),
                      l = e.size % 2 == 0 ? t + a : t - a - 1;
                    if (l >= 0 && l < s && !e.has(l)) return l;
                    for (let t = 0; t < s; t++) if (!e.has(t)) return t;
                    return 0;
                  }
                }
              },
              r = d
                ? Array.from(new Set(t.split(""))).filter((e) => " " !== e)
                : u.split(""),
              i = (e, t) => {
                if (!d)
                  return e
                    .split("")
                    .map((s, a) =>
                      " " === s
                        ? " "
                        : t.has(a)
                        ? e[a]
                        : r[Math.floor(Math.random() * r.length)]
                    )
                    .join("");
                {
                  let s = e
                      .split("")
                      .map((e, s) => ({
                        char: e,
                        isSpace: " " === e,
                        index: s,
                        isRevealed: t.has(s),
                      })),
                    a = s
                      .filter((e) => !e.isSpace && !e.isRevealed)
                      .map((e) => e.char);
                  for (let e = a.length - 1; e > 0; e--) {
                    let t = Math.floor(Math.random() * (e + 1));
                    [a[e], a[t]] = [a[t], a[e]];
                  }
                  let l = 0;
                  return s
                    .map((t) =>
                      t.isSpace ? " " : t.isRevealed ? e[t.index] : a[l++]
                    )
                    .join("");
                }
              };
            return (
              w
                ? (v(!0),
                  (e = setInterval(() => {
                    _((s) => {
                      if (!o)
                        return (
                          y(i(t, s)),
                          ++a >= n && (clearInterval(e), v(!1), y(t)),
                          s
                        );
                      if (!(s.size < t.length))
                        return clearInterval(e), v(!1), s;
                      {
                        let e = l(s),
                          a = new Set(s);
                        return a.add(e), y(i(t, a)), a;
                      }
                    });
                  }, s)))
                : (y(t), _(new Set()), v(!1)),
              () => {
                e && clearInterval(e);
              }
            );
          }, [w, t, s, n, o, c, u, d]),
          (0, l.useEffect)(() => {
            if ("view" !== x) return;
            let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && !A && (b(!0), S(!0));
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.1 }
              ),
              t = E.current;
            return (
              t && e.observe(t),
              () => {
                t && e.unobserve(t);
              }
            );
          }, [x, A]),
          (0, a.jsxs)(r.P.span, {
            className: m,
            ref: E,
            style: i.wrapper,
            ...("hover" === x
              ? { onMouseEnter: () => b(!0), onMouseLeave: () => b(!1) }
              : {}),
            ...f,
            children: [
              (0, a.jsx)("span", { style: i.srOnly, children: g }),
              (0, a.jsx)("span", {
                "aria-hidden": "true",
                children: g.split("").map((e, t) => {
                  let s = N.has(t) || !j || !w;
                  return (0, a.jsx)(
                    "span",
                    { className: s ? h : p, children: e },
                    t
                  );
                }),
              }),
            ],
          })
        );
      }
    },
    8300: (e, t, s) => {
      "use strict";
      s.d(t, { s: () => i });
      let a = s(69719).A.getInstance();
      a.init("f2623245635722f8e69e09e00e3b92d2");
      var l = s(12115);
      let r = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 !== window.navigator)
            try {
              a.logEvent(e, t);
            } catch (e) {}
        },
        i = () => ({
          track: (e, t) => {
            a.logEvent(e, t);
          },
          trackPage: (0, l.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            r(`Landed on ${e}`, { ...t });
          }, []),
          trackClick: (0, l.useCallback)(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            r(`Clicked on ${e}`, { ...t });
          }, []),
        });
    },
    10255: (e, t, s) => {
      "use strict";
      function a(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        s(95155),
        s(47650),
        s(85744),
        s(20589);
    },
    17828: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = (0, s(64054).createAsyncLocalStorage)();
    },
    33857: (e, t, s) => {
      "use strict";
      s.d(t, { YN: () => a, YX: () => n, f_: () => i });
      let a = async () => {
          try {
            let e = await fetch(
              "https://oms-oneclick.nodeops.xyz/api/v1/newsletter"
            );
            return await e.json();
          } catch (e) {
            return null;
          }
        },
        l = `
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
      async function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          return (
            await fetch("https://gql.hashnode.com", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: e, variables: t }),
              next: { revalidate: 1 },
            })
          ).json();
        } catch (e) {
          return console.error(e), null;
        }
      }
      let i = async () => {
        let e = !1,
          t = [],
          s = "";
        for (; !e; ) {
          let a = await r(l, { cursor: s });
          a?.data?.publication?.posts?.pageInfo?.hasNextPage || (e = !0),
            t.push(...a?.data?.publication?.posts?.edges),
            (s = a?.data?.publication?.posts?.pageInfo?.endCursor);
        }
        return t;
      };
      async function n(e) {
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
    35482: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 75657));
    },
    35695: (e, t, s) => {
      "use strict";
      var a = s(18999);
      s.o(a, "usePathname") &&
        s.d(t, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        s.o(a, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        s.o(a, "useSearchParams") &&
          s.d(t, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
    36645: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let a = s(88229)._(s(67357));
      function l(e, t) {
        var s;
        let l = {};
        "function" == typeof e && (l.loader = e);
        let r = { ...l, ...t };
        return (0, a.default)({
          ...r,
          modules: null == (s = r.loadableGenerated) ? void 0 : s.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    55028: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l.a });
      var a = s(36645),
        l = s.n(a);
    },
    55645: (e, t, s) => {
      "use strict";
      s.d(t, { R: () => l, v: () => a });
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
    60013: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(95155),
        l = s(36356);
      s(12115);
      let r = (e) => {
        let { className: t = "" } = e;
        return (0, a.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, a.jsxs)(l.P.div, {
            className: "absolute inset-0 flex",
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 12, ease: "linear", repeat: 1 / 0 },
            children: [
              (0, a.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, a.jsx)("line", {
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
              (0, a.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, a.jsx)("line", {
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
    62146: (e, t, s) => {
      "use strict";
      function a(e) {
        let { reason: t, children: s } = e;
        return s;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        s(45262);
    },
    64054: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          bindSnapshot: function () {
            return i;
          },
          createAsyncLocalStorage: function () {
            return r;
          },
          createSnapshot: function () {
            return n;
          },
        });
      let s = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class a {
        disable() {
          throw s;
        }
        getStore() {}
        run() {
          throw s;
        }
        exit() {
          throw s;
        }
        enterWith() {
          throw s;
        }
        static bind(e) {
          return e;
        }
      }
      let l = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function r() {
        return l ? new l() : new a();
      }
      function i(e) {
        return l ? l.bind(e) : a.bind(e);
      }
      function n() {
        return l
          ? l.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    67357: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let a = s(95155),
        l = s(12115),
        r = s(62146);
      function i(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      s(10255);
      let n = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0,
        },
        o = function (e) {
          let t = { ...n, ...e },
            s = (0, l.lazy)(() => t.loader().then(i)),
            o = t.loading;
          function c(e) {
            let i = o
                ? (0, a.jsx)(o, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              n = !t.ssr || !!t.loading,
              c = n ? l.Suspense : l.Fragment,
              d = t.ssr
                ? (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(s, { ...e })],
                  })
                : (0, a.jsx)(r.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, a.jsx)(s, { ...e }),
                  });
            return (0, a.jsx)(c, {
              ...(n ? { fallback: i } : {}),
              children: d,
            });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    75657: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => D });
      var a = s(95155),
        l = s(12115);
      let r = JSON.parse(
          '[{"id":"1","name":"L1D","href":"https://l1d.com/","type":"VC"},{"id":"21","name":"Finality Capital","href":"https://www.finality.capital/","type":"VC"},{"id":"29","name":"Sandeep Nailwal (Polygon Labs)","href":"https://x.com/sandeepnailwal","type":"Angel"},{"id":"","name":"Richard Ma (QuantStamp)","href":"https://www.linkedin.com/in/rtmtd/","type":"Angel"},{"id":"19","name":"Kamal Mokeddem (Finality Capital)","href":"https://x.com/KamalMokeddem","type":"Angel"},{"id":"26","name":"Dorothy (AltLayer)","href":"https://x.com/Dorothy_defi","type":"Angel"},{"id":"28","name":"Aishwary Gupta (Polygon)","href":"https://in.linkedin.com/in/aishwary1992","type":"Angel"},{"id":"3","name":"Sunil Sharma (Circle)","href":"@sunilsharma_eth","type":"Angel"},{"id":"4","name":"Hitesh.Eth","href":"@hmalviya9","type":"Angel"},{"id":"1","name":"Shruti Kohli (Bitrue)","href":"@shrutiKohli_13","type":"Angel"},{"id":"10","name":"Suraj Chawla (GPU.Net)","href":"@ssurajchawla","type":"Angel"},{"id":"12","name":"CryptoDaku","href":"https://x.com/CryptoDaku_","type":"Angel"},{"id":"9","name":"Crypto Vikings","href":"https://x.com/CryptoVikings07","type":"Angel"},{"id":"25","name":"Ben Wee","href":"https://www.linkedin.com/in/ben-wee/","type":"Angel"},{"id":"27","name":"Sandeep Nailwal","href":"https://x.com/sandeepnailwal","type":"VC"},{"id":"30","name":"JD Kanani","href":"https://x.com/jdkanani","type":"VC"},{"id":"30","name":"Richard Ma","href":"https://x.com/Quantstamp","type":"VC"},{"id":"31","name":"Sunil Sharma","href":"https://x.com/sunilsharma_eth","type":"VC"},{"id":"32","name":"Michael","href":"https://www.linkedin.com/in/mheinrich","type":"VC"}]'
        ),
        i = r?.filter((e) => e?.type?.toLocaleLowerCase() === "vc"),
        n = (e) => {
          let { isHorizontal: t } = e;
          return (0, a.jsx)("div", {
            className:
              "relative flex overflow-hidden py-3 border-primary/10 border-b",
            children: (0, a.jsxs)("div", {
              className: `marquee ${!t ? "flex-col" : ""}`,
              children: [
                (0, a.jsx)("div", {
                  className: "marquee__group",
                  children: i.map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "flex items-center px-2",
                        children: (0, a.jsx)("img", {
                          src: `/backed/${e?.name
                            ?.replaceAll(" ", "-")
                            .replaceAll(",", "")
                            .replaceAll(".", "")}.svg`,
                          alt: `${e?.name} logo`,
                          className:
                            "h-[40px] w-auto max-w-[120px] object-contain brightness-0 invert opacity-30",
                          width: 120,
                          height: 40,
                          style: { width: "120px", height: "40px" },
                          loading: "lazy",
                        }),
                      },
                      t
                    )
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "marquee__group",
                  "aria-hidden": "true",
                  children: i.map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "flex items-center px-2",
                        children: (0, a.jsx)("img", {
                          src: `/backed/${e?.name
                            ?.replaceAll(" ", "-")
                            .replaceAll(",", "")
                            .replaceAll(".", "")}.svg`,
                          alt: `${e?.name} logo`,
                          className:
                            "h-[40px] w-auto max-w-[120px] object-contain brightness-0 invert opacity-30",
                          width: 120,
                          height: 40,
                          loading: "lazy",
                          style: { width: "120px", height: "40px" },
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          });
        };
      var o = s(60013),
        c = s(2467),
        d = s(75783),
        u = s(66766),
        h = s(67052),
        m = s(5113),
        p = s(36356),
        x = s(5765),
        f = s(6874),
        g = s.n(f),
        y = s(55645),
        w = s(8300);
      let b = () => {
        let [e, t] = (0, l.useState)(),
          [s, r] = (0, l.useState)(!1),
          [i, n] = (0, l.useState)(""),
          { trackClick: o } = (0, w.s)();
        return (
          (0, l.useEffect)(() => {
            r(!0),
              fetch(
                "https://oms-oneclick.nodeops.xyz/api/v1/dune/stats?refresh=true"
              )
                .then((e) => e.json())
                .then((e) => {
                  t(e?.data), n(""), r(!1);
                })
                .catch((e) => {
                  n(e), r(!1);
                });
          }, []),
          (0, a.jsxs)(c.A, {
            className: "my-20",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex md:flex-row flex-col gap-5 items-center justify-between",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-3xl",
                    children: "Stats So Far",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-36 mt-16",
                children: [
                  {
                    title: "Assets Under Management",
                    subtitle: "(AUM)",
                    valueKey: "assets_under_management",
                    showCurrency: !0,
                    showValue: !0,
                  },
                  {
                    title: "Annual Recurring Revenue",
                    subtitle: "",
                    valueKey: "annualized_recurring_revenue",
                    showCurrency: !0,
                    showValue: !0,
                  },
                  {
                    title: "Verified Users",
                    subtitle: "",
                    valueKey: "total_users",
                    showCurrency: !1,
                    showValue: !0,
                  },
                  {
                    title: "Nodes Under Management",
                    subtitle: "(NUM)",
                    valueKey: "total_nodes_under_management",
                    showCurrency: !1,
                    showValue: !0,
                  },
                  {
                    title: "Total NodePoints Distributed",
                    subtitle: "",
                    valueKey: "total_nodepoints_distributed",
                    showCurrency: !1,
                    showValue: !0,
                  },
                  {
                    title: "Cloud CPU (in Cores)",
                    subtitle: "",
                    valueKey: "cpu_in_cores",
                    showCurrency: !1,
                    showValue: !0,
                  },
                  {
                    title: "Cloud Storage (in GBs)",
                    subtitle: "",
                    valueKey: "storage_in_gbs",
                    showCurrency: !1,
                    showValue: !0,
                  },
                  {
                    title: "Cloud Utilisation Rate",
                    subtitle: "",
                    valueKey: "cloud_utilisation_rate",
                    showCurrency: !1,
                    showValue: !0,
                  },
                ].map((t, s) =>
                  (0, a.jsx)(
                    d.Zp,
                    {
                      className: "px-4",
                      children: (0, a.jsxs)(p.P.div, {
                        initial: { opacity: 0, y: 100 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.2 * s },
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-primary/60 group-hover:text-primary/80 transition-colors",
                            children: t.title,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "flex items-end gap-2 text-6xl mt-20 group-hover:text-primary transition-colors",
                            children: (0, a.jsx)(m.A, {
                              text: `${
                                t.showValue &&
                                (0, x.Z)(
                                  Number(e?.[t?.valueKey]?.value ?? 0),
                                  t?.showCurrency
                                )
                              }`,
                              animateOn: "hover",
                              speed: 70,
                              sequential: !0,
                              maxIterations: 10,
                            }),
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
        );
      };
      var j = s(33857);
      let v = () => {
        let [e, t] = (0, l.useState)([]),
          [s, r] = (0, l.useState)(!1),
          { trackClick: i } = (0, w.s)();
        (0, l.useEffect)(() => {
          (async () => {
            r(!0);
            let e = await (0, j.YN)();
            t(e?.data?.news), r(!1);
          })();
        }, []);
        let n = e.filter((e) => e.is_featured);
        return (0, a.jsxs)(c.A, {
          className: "mt-20",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap gap-5 items-center justify-between",
              children: [
                (0, a.jsx)("p", {
                  className: "text-3xl",
                  children: "What’s happening at NodeOps",
                }),
          
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
              children: n.map((e) =>
                (0, a.jsxs)(
                  d.Zp,
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
                      (0, a.jsx)("div", {
                        className:
                          "relative w-full h-48 border border-primary/20",
                        children: (0, a.jsx)(u.default, {
                          src: e.image,
                          alt: e.title,
                          width: 400,
                          height: 192,
                          className: "w-full h-full object-cover",
                          loading: "lazy",
                          placeholder: "blur",
                          blurDataURL:
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "h-36",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm text-primary/40 mt-1 line-clamp-1 capitalize",
                                children: e.description,
                              }),
                              (0, a.jsx)("p", {
                                className: "text-xl mt-5 line-clamp-2",
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, a.jsxs)(d.$n, {
                            onClick: () => {
                              i(
                                y.R.LANDING_PAGE_NEWSLETTER_READ_MORE_CTA +
                                  e.title
                              ),
                                window.open(e.url, "_blank");
                            },
                            variant: "outline",
                            className: "gap-2 mt-5 w-fit",
                            children: [
                              "Read More",
                              (0, a.jsx)(h.Q, {
                                className: "w-4 h-4 -rotate-45",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.title
                )
              ),
            }),
          ],
        });
      };
      var N = s(86802);
      let _ = (e) => {
        let { useCaseItems: t, activeTab: s, openFormModal: l } = e;
        return (0, a.jsxs)(
          p.P.div,
          {
            className: "flex flex-col mt-10",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            exit: { opacity: 0, y: -20 },
            children: [
              t[0].shouldShow &&
                (0, a.jsxs)(g(), {
                  href: t[0].link || "",
                  target: t[0].isExternal ? "_blank" : "_self",
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  onClick: t[0].link?.includes("zohopublic")
                    ? (e) => {
                        e.preventDefault(), l(t[0].link);
                      }
                    : void 0,
                  children: [
                    (0, a.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, a.jsx)("img", {
                        src: t[0].image,
                        alt: "icon",
                        className: "w-auto h-auto",
                        width: 100,
                        height: 100,
                      }),
                    }),
                    (0, a.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 p-6 flex flex-col justify-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-xl",
                          children: t[0]?.title || "",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-base md:text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children: t[0].desc,
                        }),
                      ],
                    }),
                  ],
                }),
              t[1].shouldShow &&
                (0, a.jsxs)(g(), {
                  href: t[1].link || "",
                  target: t[1].isExternal ? "_blank" : "_self",
                  className:
                    "flex md:flex-row flex-col border border-primary/20",
                  onClick: t[1].link?.includes("zohopublic")
                    ? (e) => {
                        e.preventDefault(), l(t[1].link);
                      }
                    : void 0,
                  children: [
                    (0, a.jsxs)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-2/3 w-full h-56 p-6 flex flex-col justify-center bg-background",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-xl",
                          children: t[1]?.title || "",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "text-lg md:text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                          children: t[1].desc,
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/3 w-full h-56 flex items-end justify-center",
                      children: (0, a.jsx)("img", {
                        src: t[1].image,
                        alt: "icon",
                        className: "w-auto h-auto",
                        width: 100,
                        height: 100,
                      }),
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: "flex md:flex-row flex-col border border-primary/20",
                children: [
                  t[2].shouldShow &&
                    !t[2].isFullWidth &&
                    (0, a.jsx)(g(), {
                      href: t[2].link || "",
                      target: t[2].isExternal ? "_blank" : "_self",
                      className:
                        "md:w-1/2 w-full py-6 flex flex-col justify-center bg-background",
                      onClick: t[2].link?.includes("zohopublic")
                        ? (e) => {
                            e.preventDefault(), l(t[2].link);
                          }
                        : void 0,
                      children: (0, a.jsxs)(d.Zp, {
                        isBothSide: !0,
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "flex items-end justify-center h-40 border-b border-primary/20",
                            children: (0, a.jsx)("img", {
                              src: t[2].image,
                              alt: "icon",
                              className: "w-auto h-auto",
                              width: 100,
                              height: 100,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "px-6 pt-6",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-xl",
                                children: t[2]?.title || "",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-lg md:text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                                children: t[2]?.desc || "",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  t[2].shouldShow &&
                    t[2].isFullWidth &&
                    (0, a.jsxs)(g(), {
                      href: t[2].link || "",
                      target: t[2].isExternal ? "_blank" : "_self",
                      className:
                        "flex md:flex-row flex-col border border-primary/20 w-full",
                      onClick: t[2].link?.includes("zohopublic")
                        ? (e) => {
                            e.preventDefault(), l(t[2].link);
                          }
                        : void 0,
                      children: [
                        (0, a.jsx)(d.Zp, {
                          isBothSide: !0,
                          className:
                            "md:w-1/3 w-full h-56 flex items-end justify-center",
                          children: (0, a.jsx)("img", {
                            src: t[2].image,
                            alt: "icon",
                            className: "w-auto h-auto",
                            width: 100,
                            height: 100,
                          }),
                        }),
                        (0, a.jsxs)(d.Zp, {
                          isBothSide: !0,
                          className:
                            "md:w-2/3 w-full h-56 p-6 flex flex-col justify-center",
                          children: [
                            (0, a.jsx)("p", {
                              className: "text-xl",
                              children: t[2]?.title || "",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-lg md:text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                              children: t[2].desc,
                            }),
                          ],
                        }),
                      ],
                    }),
                  t[3].shouldShow &&
                    (0, a.jsx)(d.Zp, {
                      isBothSide: !0,
                      className:
                        "md:w-1/2 w-full py-6 flex flex-col justify-center bg-background",
                      children: (0, a.jsxs)(g(), {
                        href: t[3].link || "",
                        target: t[3].isExternal ? "_blank" : "_self",
                        onClick: t[3].link?.includes("zohopublic")
                          ? (e) => {
                              e.preventDefault(), l(t[3].link);
                            }
                          : void 0,
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "flex items-end justify-center h-40 border-b border-primary/20",
                            children: (0, a.jsx)("img", {
                              src: t[3].image,
                              alt: "icon",
                              className: "w-auto h-auto",
                              width: 100,
                              height: 100,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "px-6 pt-6",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-xl",
                                children: t[3]?.title || "",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-lg md:text-xl leading-tight text-primary/40 mt-2 max-w-xl",
                                children: t[3].desc,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          },
          s
        );
      };
      var A = s(84070);
      let S = [
          { id: "1", label: "Everyone" },
          { id: "2", label: "Developers" },
          { id: "3", label: "Enterprises" },
          { id: "4", label: "Compute providers" },
        ],
        E = {
          1: [
            {
              title: "DumpOps Console",
              desc: "Node-as-a-Service dashboard",
              image: "/usecases/everyone/1.svg",
              shouldShow: !0,
            },
            {
              title: "Security Hub",
              desc: "AI-powered code vulnerability detection",
              image: "/usecases/everyone/2.svg",
              shouldShow: !0,
            },
            {
              title: "Staking Hub",
              desc: "Staking-as-a-Service dashboard",
              image: "/usecases/everyone/4.svg",
              shouldShow: !0,
              isFullWidth: !0,
            },
            { title: "", desc: "", image: "", shouldShow: !1 },
          ],
          2: [
            {
              title: "Agent Terminal",
              desc: "Collaborative AI agent development sandbox",
              image: "/usecases/developers/1.svg",
              shouldShow: !0,
            },
            {
              title: "DumpOps Cloud Marketplace",
              desc: "Permissionless DePIN verifiable Compute marketplace",
              image: "/usecases/developers/2.svg",
              shouldShow: !0,
            },
            {
              title: "Infrastructure-as-a-Service",
              desc: "Templatized Cloud infrastructure",
              image: "/usecases/developers/3.svg",
              shouldShow: !0,
              link: "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s",
              isExternal: !0,
            },
            {
              title: "RPC-as-a-Service",
              desc: "Institutional-grade RPC Node operations",
              image: "/usecases/developers/4.svg",
              shouldShow: !0,
            },
          ],
          3: [
            {
              title: "Blockchain deployment",
              desc: "Institutional-grade Node operations",
              image: "/usecases/enterprises/1.svg",
              shouldShow: !0,
              link: "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s",
              isExternal: !0,
            },
            { title: "", desc: "", image: "", shouldShow: !1 },
            {
              title: "Infrastructure management",
              desc: "Institutional-grade Cloud operations",
              image: "/usecases/enterprises/3.svg",
              shouldShow: !0,
              link: "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s",
              isExternal: !0,
            },
            {
              title: "Staking-as-a-service",
              desc: "Institutional-grade B2B Staking",
              image: "/usecases/enterprises/4.svg",
              shouldShow: !0,
            },
          ],
          4: [
            {
              title: "Global Compute Marketplace",
              desc: "Bare metal leasing for onchain revenue",
              image: "/usecases/computeProviders/3.svg",
              shouldShow: !0,
              link: "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s",
              isExternal: !0,
            },
            { title: "", desc: "", image: "", shouldShow: !1 },
            { title: "", desc: "", image: "", shouldShow: !1 },
            { title: "", desc: "", image: "", shouldShow: !1 },
          ],
        },
        C = () => {
          let [e, t] = (0, l.useState)(S[0].id),
            { openFormModal: s } = (0, A.V)();
          return (0, a.jsxs)(c.A, {
            className: "",
            children: [
              (0, a.jsx)("p", {
                className: "text-2xl md:text-3xl text-center mb-8",
                children: "These products serve",
              }),
              (0, a.jsx)(d.tU, {
                tabs: S,
                className: "w-fit mx-auto",
                onChange: (e) => t(e),
                activeTab: e,
              }),
              (0, a.jsx)(_, {
                useCaseItems: E[e],
                activeTab: e,
                openFormModal: s,
              }),
            ],
          });
        };
      var P = s(55028),
        k = s(35695);
      let O = (e) => {
          let { caseStudies: t } = e,
            { trackClick: s } = (0, w.s)(),
            l = (0, k.useRouter)();
          return (0, a.jsxs)(c.A, {
            className: "mt-20",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-wrap gap-5 items-center justify-between",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-3xl",
                    children: "Case Studies",
                  }),
                
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 gap-5 mt-10",
                children: t.map((e) =>
                  (0, a.jsxs)(
                    d.Zp,
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
                        (0, a.jsx)("div", {
                          className:
                            "relative w-full h-48 border border-primary/20",
                          children: (0, a.jsx)(u.default, {
                            src: e.node.coverImage.url,
                            alt: e.node.title,
                            width: 400,
                            height: 192,
                            className: "w-full h-full object-cover",
                            loading: "lazy",
                            placeholder: "blur",
                            blurDataURL:
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "h-36",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm text-primary/40 mt-1 line-clamp-1 capitalize",
                                  children: e.node.tags
                                    .map((e) => e.name)
                                    .join(", "),
                                }),
                                (0, a.jsx)("p", {
                                  className: "text-xl mt-5 line-clamp-2",
                                  children: e.node.title,
                                }),
                              ],
                            }),
                            (0, a.jsxs)(d.$n, {
                              onClick: () => {
                                s(
                                  y.R.LANDING_PAGE_NEWSLETTER_READ_MORE_CTA +
                                    e.node.title
                                ),
                                  l.push(`/case-studies/${e.node.slug}`);
                              },
                              variant: "outline",
                              className: "gap-2 mt-5 w-fit",
                              children: [
                                "Read More",
                                (0, a.jsx)(h.Q, {
                                  className: "w-4 h-4 -rotate-45",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.node.title
                  )
                ),
              }),
            ],
          });
        },
        R = (0, P.default)(
          () => Promise.all([s.e(4685), s.e(4032)]).then(s.bind(s, 34032)),
          { loadableGenerated: { webpack: () => [34032] }, ssr: !1 }
        ),
        I = (0, P.default)(
          () => Promise.all([s.e(8494), s.e(9045)]).then(s.bind(s, 29045)),
          { loadableGenerated: { webpack: () => [29045] }, ssr: !1 }
        ),
        M = (0, P.default)(() => s.e(9564).then(s.bind(s, 89564)), {
          loadableGenerated: { webpack: () => [89564] },
          ssr: !1,
        }),
        T = (0, P.default)(
          () =>
            Promise.all([s.e(3063), s.e(5592), s.e(5215), s.e(3105)]).then(
              s.bind(s, 23105)
            ),
          { loadableGenerated: { webpack: () => [23105] }, ssr: !1 }
        ),
        D = () => {
          let { trackPage: e } = (0, w.s)();
          (0, l.useEffect)(() => {
            e(y.v.HOME);
          }, []);
          let [t, s] = (0, l.useState)([]);
          (0, l.useEffect)(() => {
            (async () => {
              s(await (0, j.f_)());
            })();
          }, []);
          let r = t?.filter((e) => e?.node?.slug?.includes("case-study"));
          return (0, a.jsxs)("div", {
            className: "w-full z-0",
            children: [
              (0, a.jsx)(l.Suspense, {
                fallback: (0, a.jsx)("div", { children: "Loading..." }),
                children: (0, a.jsx)(T, {}),
              }),
              (0, a.jsx)(n, { isHorizontal: !0 }),
              (0, a.jsx)(c.A, {
                className: "mb-20 mt-14",
                children: (0, a.jsx)(o.A, {}),
              }),
              (0, a.jsx)(b, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
              (0, a.jsx)(R, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
              (0, a.jsx)(I, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
              (0, a.jsx)(M, {}),
              (0, a.jsx)(c.A, { className: "", children: (0, a.jsx)(o.A, {}) }),
              (0, a.jsx)(v, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
              (0, a.jsx)(C, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
              r?.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(O, { caseStudies: r?.slice(0, 3) }),
                    (0, a.jsx)(c.A, {
                      className: "my-20",
                      children: (0, a.jsx)(o.A, {}),
                    }),
                  ],
                }),
              (0, a.jsx)(N.A, {}),
              (0, a.jsx)(c.A, {
                className: "my-20",
                children: (0, a.jsx)(o.A, {}),
              }),
            ],
          });
        };
    },
    84070: (e, t, s) => {
      "use strict";
      s.d(t, { FormModalProvider: () => o, V: () => n });
      var a = s(95155),
        l = s(12115),
        r = s(52319);
      let i = (0, l.createContext)(void 0);
      function n() {
        let e = (0, l.useContext)(i);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function o(e) {
        let { children: t } = e,
          [s, n] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)("");
        return (0, a.jsxs)(i.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), n(!0);
            },
          },
          children: [
            t,
            (0, a.jsx)(r.a, {
              isOpen: s,
              onClose: () => n(!1),
              className: "h-[670px]",
              modalClassName: "max-w-2xl",
              children: (0, a.jsx)("iframe", {
                src: o,
                className: "w-full h-full border-0",
                title: "Form",
              }),
            }),
          ],
        });
      }
    },
    85744: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return a.workAsyncStorageInstance;
          },
        });
      let a = s(17828);
    },
    86802: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => c });
      var a = s(95155);
      s(12115);
      var l = s(2467),
        r = s(66766),
        i = s(75783),
        n = s(67052),
        o = s(84070);
      let c = () => {
        let { openFormModal: e } = (0, o.V)();
        return (0, a.jsx)(l.A, {
          className: "",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col-reverse md:flex-row items-center gap-10",
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "md:w-2/3 w-full text-4xl md:text-5xl leading-tight",
                    children:
                      "Ready to launch your Protocol, Network, or Blockchain?",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-primary/50 mt-5 text-lg max-w-xl",
                    children:
                      "Whether you're looking to kickstart operations or scale up, we're here to help you succeed. Reach out to us and let's make it happen!",
                  }),
                  (0, a.jsxs)(i.$n, {
                    className: "mt-5 gap-2",
                    variant: "outline",
                    onClick: () =>
                      e(
                        "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                      ),
                    children: [
                      "Contact Us ",
                      (0, a.jsx)(n.Q, { className: "w-4 h-4" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(r.default, {
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
    var t = (t) => e((e.s = t));
    e.O(0, [3495, 5753, 6080, 6766, 6874, 5783, 8441, 1684, 7358], () =>
      t(35482)
    ),
      (_N_E = e.O());
  },
]);
