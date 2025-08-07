"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5783],
  {
    4276: (e, r, t) => {
      t.d(r, { H: () => a, t: () => n });
      var i = t(95155),
        l = t(5765),
        s = t(36356);
      t(12115);
      let a = (e) => {
        let { position: r, className: t } = e;
        return (0, i.jsx)(s.P.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          exit: { scale: 0 },
          className: (0, l.cn)("absolute", r, t),
          children: (0, i.jsxs)("div", {
            className: (0, l.cn)("relative w-3 h-3", t),
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-primary/60",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-primary/60",
              }),
            ],
          }),
        });
      };
      function n(e) {
        let {
            tabs: r,
            onChange: t,
            className: n,
            activeTab: o,
            scrollRef: c,
          } = e,
          d = (e) => {
            t?.(e);
          };
        return (0, i.jsx)("div", {
          className:
            "w-full space-y-2 overflow-x-auto hide-scrollbar relative px-2 ",
          ref: c,
          children: (0, i.jsx)("div", {
            className: "w-fit space-y-2",
            children: (0, i.jsx)("div", {
              className: (0, l.cn)(
                "flex items-center gap-2 h-12 w-full overflow-x-auto scrollbar-hide",
                n
              ),
              children: r.map((e) =>
                (0, i.jsxs)(
                  s.P.button,
                  {
                    onClick: () => d(e.id),
                    className: (0, l.cn)(
                      "px-2 sm:px-3 md:px-6 lg:px-8 h-9 whitespace-nowrap flex-shrink-0",
                      "relative",
                      "hover:bg-primary/10",
                      "font-medium",
                      o === e.id
                        ? "text-primary border border-primary/10 md:border-2 bg-primary/10 backdrop-blur-sm"
                        : "text-primary/50 hover:text-primary/70"
                    ),
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                    children: [
                      e.label,
                      o === e.id &&
                        (0, i.jsxs)(s.P.div, {
                          initial: "hidden",
                          animate: "visible",
                          variants: {
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          },
                          transition: { duration: 0.2 },
                          children: [
                            (0, i.jsx)(a, {
                              position:
                                "-top-1.5 -left-1.5 md:-top-2 md:-left-2",
                            }),
                            (0, i.jsx)(a, {
                              position:
                                "-top-1.5 -right-1.5 md:-top-2 md:-right-2",
                            }),
                            (0, i.jsx)(a, {
                              position:
                                "-bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2",
                            }),
                            (0, i.jsx)(a, {
                              position:
                                "-bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2",
                            }),
                          ],
                        }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          }),
        });
      }
    },
    5765: (e, r, t) => {
      t.d(r, { Z: () => a, cn: () => s });
      var i = t(52596),
        l = t(39688);
      function s() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return (0, l.QP)((0, i.$)(r));
      }
      function a(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e >= 1e9
          ? r
            ? "$" + (e / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
            : (e / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
          : e >= 1e6
          ? r
            ? "$" + (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
            : (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
          : e >= 1e3
          ? r
            ? "$" + (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
            : (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
          : r
          ? "$" + e.toString()
          : e.toString();
      }
    },
    40402: (e, r, t) => {
      t.d(r, { P: () => s });
      var i = t(95155),
        l = t(5765);
      function s(e) {
        let {
            className: r,
            borderColor: t = "border-primary/60",
            notAllowedCorners: s = [],
            isStretched: a = !1,
          } = e,
          n = (e) => !s.includes(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            n("top-left") &&
              (0, i.jsx)("div", {
                className: (0, l.cn)(
                  "absolute  w-2 h-2 border-t border-l pointer-events-none",
                  t,
                  a ? "-top-[3px] -left-[3px]" : "-top-[1px] -left-[1px]",
                  r
                ),
              }),
            n("top-right") &&
              (0, i.jsx)("div", {
                className: (0, l.cn)(
                  "absolute w-2 h-2 border-t border-r pointer-events-none",
                  t,
                  a ? "-top-[3px] -right-[3px]" : "-top-[1px] -right-[1px]",
                  r
                ),
              }),
            n("bottom-left") &&
              (0, i.jsx)("div", {
                className: (0, l.cn)(
                  "absolute w-2 h-2 border-b border-l pointer-events-none",
                  t,
                  a ? "-bottom-[3px] -left-[3px]" : "-bottom-[1px] -left-[1px]",
                  r
                ),
              }),
            n("bottom-right") &&
              (0, i.jsx)("div", {
                className: (0, l.cn)(
                  "absolute w-2 h-2 border-b border-r pointer-events-none",
                  t,
                  a
                    ? "-bottom-[3px] -right-[3px]"
                    : "-bottom-[1px] -right-[1px]",
                  r
                ),
              }),
          ],
        });
      }
    },
    44912: (e, r, t) => {
      t.d(r, { $: () => o });
      var i = t(95155),
        l = t(74466),
        s = t(5765),
        a = t(40402);
      let n = (0, l.F)(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 relative",
          {
            variants: {
              variant: {
                default: "bg-accent text-background hover:bg-accent/90",
                outline:
                  "border border-primary/10 text-primary hover:bg-primary/5",
                secondary: "bg-primary text-background hover:bg-primary/90",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        o = (e) => {
          let {
            className: r,
            variant: t,
            size: l,
            children: o,
            isStretched: c,
            ...d
          } = e;
          return (0, i.jsxs)("button", {
            className: (0, s.cn)(n({ variant: t, size: l, className: r })),
            ...d,
            children: [
              ("outline" === t || "secondary" === t) &&
                (0, i.jsx)(a.P, { isStretched: c }),
              o,
            ],
          });
        };
    },
    52319: (e, r, t) => {
      t.d(r, { a: () => o });
      var i = t(95155),
        l = t(60760),
        s = t(36356),
        a = t(40402),
        n = t(5765);
      function o(e) {
        let {
          isOpen: r,
          onClose: t,
          children: o,
          className: c,
          modalClassName: d,
        } = e;
        return (0, i.jsx)(l.N, {
          children:
            r &&
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(s.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: t,
                  className:
                    "fixed inset-0 bg-dark/10 backdrop-blur-xs z-[999]",
                }),
                (0, i.jsx)(s.P.div, {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                  className:
                    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full px-4 sm:px-0",
                  children: (0, i.jsxs)("div", {
                    className: (0, n.cn)("relative max-w-lg mx-auto", d),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute -right-0 md:-right-12.5 md:-top-0.5 -top-13 mt-[1px] -mr-[1px]",
                        children: (0, i.jsxs)("button", {
                          onClick: t,
                          className:
                            "relative border border-primary/10 bg-primary/5 p-3 group",
                          children: [
                            (0, i.jsx)(a.P, {
                              borderColor: "border-primary/60",
                            }),
                            (0, i.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className:
                                "text-primary/60 group-hover:text-primary transition-colors relative z-10",
                              children: [
                                (0, i.jsx)("path", { d: "M18 6 6 18" }),
                                (0, i.jsx)("path", { d: "m6 6 12 12" }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: (0, n.cn)(
                          "relative bg-background border border-primary/10 p-6",
                          "w-full",
                          "h-auto overflow-y-auto",
                          c
                        ),
                        children: o,
                      }),
                      (0, i.jsx)(a.P, { borderColor: "border-primary/60" }),
                    ],
                  }),
                }),
              ],
            }),
        });
      }
    },
    73061: (e, r, t) => {
      t.d(r, { _I: () => v });
      var i = t(95155),
        l = t(60760),
        s = t(36356),
        a = t(12115),
        n = t(40402),
        o = t(88611),
        c = t(75799);
      let d = (e, r) => (!e || e.length <= r ? e : `${e.slice(0, r - 3)}...`),
        m = (e) => {
          let { className: r, ...t } = e;
          return (0, i.jsx)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-white/5 p-4",
            ...t,
            children: (0, i.jsx)("h3", { children: "Tweet not found" }),
          });
        },
        p = (e) => {
          let { className: r, ...t } = e;
          return (0, i.jsx)("div", {
            className: "animate-pulse rounded-md bg-primary/10",
            ...t,
          });
        },
        x = (e) => {
          let { className: r, ...t } = e;
          return (0, i.jsxs)("div", {
            className:
              "flex h-full max-h-max w-full min-w-[18rem] flex-col gap-2 rounded-lg border p-4",
            ...t,
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-row gap-2",
                children: [
                  (0, i.jsx)(p, {
                    className: "h-10 w-10 shrink-0 rounded-full",
                  }),
                  (0, i.jsx)(p, { className: "h-10 w-full" }),
                ],
              }),
              (0, i.jsx)(p, { className: "h-20 w-full" }),
            ],
          });
        },
        u = (e) => {
          let { items: r, currentIndex: t, onUserClick: l } = e;
          return (0, i.jsx)("div", {
            className: "flex items-center justify-center gap-2 mb-8",
            children: r.map((e, r) => {
              let { data: s } = (0, o.n)(e);
              if (!s) return null;
              let a = s.user,
                c = r === t;
              return (0, i.jsxs)(
                "div",
                {
                  className: `relative transition-all shrink-0 duration-300 border border-primary/20 rounded-full p-1 cursor-pointer group ${
                    c
                      ? "scale-110"
                      : "opacity-50 hover:-translate-y-2 hover:opacity-100"
                  } `,
                  onClick: () => l(r),
                  children: [
                    (0, i.jsx)("img", {
                      src: a.profile_image_url_https,
                      alt: a.screen_name,
                      className: "w-10 h-10 shrink-0 rounded-full",
                      onError: (e) => {
                        e.currentTarget.src =
                          "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
                      },
                    }),
                    c && (0, i.jsx)(n.P, { className: "w-2 h-2" }),
                  ],
                },
                e
              );
            }),
          });
        },
        h = (e) => {
          let { tweet: r } = e;
          return (0, i.jsxs)("div", {
            className: "flex gap-4 items-center",
            children: [
              (0, i.jsx)("div", {
                className: "flex flex-row justify-between tracking-tight",
                children: (0, i.jsx)("a", {
                  href: r.user.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "border border-primary/20",
                  children: (0, i.jsx)("img", {
                    title: `Profile picture of ${r.user.name}`,
                    alt: r.user.screen_name,
                    src: r.user.profile_image_url_https,
                    onError: (e) => {
                      e.currentTarget.src =
                        "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
                    },
                    className:
                      "overflow-hidden border border-transparent w-10 h-10",
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col justify-between",
                children: [
                  (0, i.jsxs)("a", {
                    href: r.user.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex items-center whitespace-nowrap text-sm",
                    children: [
                      d(r.user.name, 20),
                      r.user.verified ||
                        (r.user.is_blue_verified &&
                          (0, i.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            className: "ml-1 inline h-4 w-4 text-blue-500",
                            fill: "currentColor",
                            children: (0, i.jsx)("path", {
                              d: "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z",
                            }),
                          })),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "flex items-center space-x-1",
                    children: (0, i.jsxs)("a", {
                      href: r.user.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        " text-primary/40 text-sm transition-all duration-75",
                      children: ["@", d(r.user.screen_name, 16)],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let { tweet: r } = e;
          return (0, i.jsx)("div", {
            className: "break-words leading-normal tracking-tighter mt-2",
            children: r.entities.map((e, r) => {
              switch (e.type) {
                case "url":
                case "symbol":
                case "hashtag":
                case "mention":
                  return (0, i.jsx)(
                    "a",
                    {
                      href: e.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-sm font-normal text-primary",
                      children: (0, i.jsx)("span", { children: e.text }),
                    },
                    r
                  );
                case "text":
                  return (0, i.jsx)(
                    "span",
                    {
                      className: "text-sm font-normal text-primary/40",
                      dangerouslySetInnerHTML: { __html: e.text },
                    },
                    r
                  );
                default:
                  return null;
              }
            }),
          });
        },
        b = (e) => {
          let {
              tweetId: r,
              apiUrl: t,
              fallback: l = (0, i.jsx)(x, {}),
              components: s,
              fetchOptions: a,
              onError: n,
              ...d
            } = e,
            { data: p, error: u, isLoading: b } = (0, o.n)(r, t, a);
          if (b) return l;
          if (u || !p) {
            let e = s?.TweetNotFound || m;
            return (0, i.jsx)(e, { error: n ? n(u) : u });
          }
          let v = (0, c.nl)(p);
          return (0, i.jsxs)("a", {
            href: v.url,
            target: "_blank",
            rel: "noreferrer",
            className:
              "relative flex h-full w-full flex-col gap-2 overflow-hidden",
            ...d,
            children: [
              (0, i.jsx)(h, { tweet: v }),
              (0, i.jsx)(f, { tweet: v, ...d }),
            ],
          });
        },
        v = (e) => {
          let { items: r } = e,
            [t, o] = (0, a.useState)(2),
            [c, d] = (0, a.useState)(!1),
            m = Math.floor(2.5);
          return (
            (0, a.useEffect)(() => {
              let e = setInterval(() => {
                c ||
                  (d(!0),
                  o((e) => (e + 1) % r.length),
                  setTimeout(() => d(!1), 1e3));
              }, 5e3);
              return () => clearInterval(e);
            }, [r.length, c]),
            (0, i.jsxs)("div", {
              className:
                "relative flex flex-col items-center justify-center overflow-hidden",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex items-center justify-center gap-4 mt-10 mb-16",
                  children: (0, i.jsx)(l.N, {
                    mode: "popLayout",
                    initial: !1,
                    children: (() => {
                      let e = [...r, ...r, ...r],
                        i = t - m + r.length;
                      return e.slice(i, i + 5);
                    })().map((e, r) =>
                      (0, i.jsxs)(
                        s.P.div,
                        {
                          initial: { x: 300, opacity: 0 },
                          animate: { x: 0, opacity: r === m ? 1 : 0.5 },
                          exit: { x: -300, opacity: 0 },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 0.5,
                          },
                          className:
                            "flex items-center justify-center relative p-2 group",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "w-80 h-80 relative border border-white/20 text-white p-4 overflow-hidden",
                              children: (0, i.jsx)(b, { tweetId: e }),
                            }),
                            r === m &&
                              (0, i.jsx)(n.P, {
                                className:
                                  "w-4 h-4 scale-100 group-hover:w-8 group-hover:h-8 group-hover:scale-50 transition-all duration-300",
                              }),
                          ],
                        },
                        `${e}-${r}`
                      )
                    ),
                  }),
                }),
                (0, i.jsx)(u, {
                  items: r,
                  currentIndex: t,
                  onUserClick: (e) => {
                    c || (d(!0), o(e), setTimeout(() => d(!1), 1e3));
                  },
                }),
              ],
            })
          );
        };
    },
    75783: (e, r, t) => {
      t.d(r, {
        $n: () => i.$,
        Zp: () => s.Z,
        Hp: () => o.H,
        pd: () => m,
        aF: () => c.a,
        l6: () => h,
        P: () => l.P,
        tU: () => o.t,
      });
      var i = t(44912),
        l = t(40402),
        s = t(91202),
        a = t(95155),
        n = t(12115),
        o = t(4276);
      t(73061);
      var c = t(52319),
        d = t(5765);
      let m = (0, n.forwardRef)((e, r) => {
        let {
          className: t,
          type: i,
          icon: s,
          wrapperClassName: n,
          rightLabel: o,
          inputClassName: c,
          isCorner: m = !0,
          ...p
        } = e;
        return (0, a.jsx)("div", {
          className: (0, d.cn)("relative w-full", n),
          children: (0, a.jsx)("div", {
            className: "relative flex items-center",
            children: (0, a.jsx)("div", {
              className: "relative w-full",
              children: (0, a.jsxs)("div", {
                className: (0, d.cn)(
                  "flex h-12 w-full rounded-none border border-primary/10 bg-transparent px-3 py-2",
                  "text-sm text-primary placeholder:text-primary/50",
                  "focus-within:border-primary/20",
                  "transition-colors relative",
                  t
                ),
                children: [
                  s && (0, a.jsx)(a.Fragment, { children: s }),
                  (0, a.jsx)("input", {
                    type: i,
                    className: (0, d.cn)(
                      "w-full bg-transparent outline-none placeholder:text-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
                      c
                    ),
                    ref: r,
                    ...p,
                  }),
                  o &&
                    (0, a.jsx)("div", {
                      className: "flex items-center",
                      children: o,
                    }),
                  m && (0, a.jsx)(l.P, {}),
                ],
              }),
            }),
          }),
        });
      });
      m.displayName = "Input";
      var p = t(48373),
        x = t(36356),
        u = t(60760);
      let h = (0, n.forwardRef)((e, r) => {
        let {
            className: t,
            icon: i,
            wrapperClassName: s,
            rightLabel: o,
            selectClassName: c,
            isCorner: m = !0,
            options: h,
            value: f,
            onChange: b,
            ...v
          } = e,
          [g, j] = (0, n.useState)(!1),
          y = h.find((e) => e.value === f) || h[0];
        return (0, a.jsx)("div", {
          className: (0, d.cn)("relative w-full", s),
          children: (0, a.jsx)("div", {
            className: "relative flex items-center",
            children: (0, a.jsxs)("div", {
              className: "relative w-full",
              children: [
                (0, a.jsxs)("div", {
                  className: (0, d.cn)(
                    "flex h-12 w-full rounded-none border border-primary/10 bg-transparent px-3 py-2",
                    "text-sm text-primary",
                    "focus-within:border-primary/20",
                    "transition-colors relative",
                    "cursor-pointer",
                    t
                  ),
                  onClick: () => j(!g),
                  children: [
                    i && (0, a.jsx)(a.Fragment, { children: i }),
                    (0, a.jsx)("div", {
                      className: (0, d.cn)(
                        "w-full flex items-center  bg-transparent outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
                        c
                      ),
                      children: y.label,
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        o &&
                          (0, a.jsx)("div", {
                            className: "flex items-center",
                            children: o,
                          }),
                        (0, a.jsx)(x.P.div, {
                          animate: { rotate: 180 * !!g },
                          transition: { duration: 0.2 },
                          children: (0, a.jsx)(p.a, {
                            size: 16,
                            weight: "bold",
                            className: "text-primary",
                          }),
                        }),
                      ],
                    }),
                    m && (0, a.jsx)(l.P, {}),
                  ],
                }),
                (0, a.jsx)(u.N, {
                  children:
                    g &&
                    (0, a.jsx)(x.P.div, {
                      initial: { opacity: 0, y: -10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.2 },
                      className:
                        "absolute z-50 w-full mt-1 bg-background border border-primary/10",
                      children: h.map((e) =>
                        (0, a.jsx)(
                          x.P.div,
                          {
                            whileHover: {
                              backgroundColor: "rgba(var(--primary), 0.1)",
                            },
                            className: "px-3 py-2 cursor-pointer text-sm",
                            onClick: () => {
                              b && b({ target: { value: e.value.toString() } }),
                                j(!1);
                            },
                            children: e.label,
                          },
                          e.value
                        )
                      ),
                    }),
                }),
              ],
            }),
          }),
        });
      });
      h.displayName = "Select";
    },
    91202: (e, r, t) => {
      t.d(r, { Z: () => n });
      var i = t(95155);
      t(12115);
      var l = t(36356);
      let s = { left: "left-0", right: "right-0" },
        a = (e) => {
          let {
            className: r = "",
            side: t = "left",
            lineColor: l = "bg-white",
            leftLinePositions: a = ["top", "bottom"],
            rightLinePositions: n = ["top", "bottom"],
            topLineHeight: o = "h-8",
            bottomLineHeight: c = "h-20",
            showMiddleLine: d = !0,
          } = e;
          return (0, i.jsxs)("div", {
            className: `absolute ${s[t]} top-0 h-full z-0 ${r}`,
            children: [
              a.includes("top") &&
                (0, i.jsx)("div", {
                  className: `absolute top-0 w-[1px] ${l} origin-top ${o} group-hover:h-full transition-all duration-500`,
                }),
              d &&
                (0, i.jsx)("div", {
                  className: "absolute w-[1px] bg-white/20",
                  style: { top: 0, bottom: 0 },
                }),
              n.includes("bottom") &&
                (0, i.jsx)("div", {
                  className: `absolute bottom-0 w-[1px] ${l} origin-bottom ${c} group-hover:h-full transition-all duration-500`,
                }),
            ],
          });
        },
        n = (e) => {
          let {
            children: r,
            className: t = "",
            position: s = "left",
            isBothSide: n,
            lineColor: o = "bg-white",
            leftLinePositions: c = ["top", "bottom"],
            rightLinePositions: d = ["top", "bottom"],
            topLineHeight: m = "h-8",
            bottomLineHeight: p = "h-20",
            showMiddleLine: x = !0,
            onClick: u,
          } = e;
          return (0, i.jsxs)(l.P.div, {
            className: `relative group ${t}`,
            transition: { duration: 0.2 },
            onClick: u,
            children: [
              (0, i.jsx)(a, {
                side: s,
                lineColor: o,
                leftLinePositions: c,
                rightLinePositions: c,
                topLineHeight: m,
                bottomLineHeight: p,
                showMiddleLine: x,
              }),
              n &&
                (0, i.jsx)(a, {
                  side: "right",
                  lineColor: o,
                  leftLinePositions: d,
                  rightLinePositions: d,
                  topLineHeight: m,
                  bottomLineHeight: p,
                  showMiddleLine: x,
                }),
              r,
            ],
          });
        };
    },
  },
]);
