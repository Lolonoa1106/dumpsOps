(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9700],
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
      a.d(t, { s: () => n });
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
        n = () => ({
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
    16556: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Y });
      var r = a(95155),
        l = a(12115),
        s = a(60013),
        n = a(2467),
        i = a(86802);
      let o = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(n.A, {
              className: "py-2 h-screen flex flex-col items-center justify-end",
              children: [
                (0, r.jsx)("h1", {
                  className:
                    "text-3xl sm:text-5xl 2xl:text-7xl font-bold text-center max-w-6xl",
                  children: "Brand Assets",
                }),
                (0, r.jsx)("p", {
                  className:
                    "text-sm sm:text-xl text-primary/60 text-center mt-5 max-w-3xl pb-20",
                  children:
                    "Welcome partners! Find all the DumpOps brand assets you need—icons, logos, fonts, and colors—to help you get started.",
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: "/brandHero.webp",
              alt: "video",
              className:
                "w-full h-full object-cover absolute top-0 left-0 -z-10",
            }),
          ],
        });
      var c = a(44912),
        m = a(35220),
        d = a(39898);
      let p = new Map([
        [
          "bold",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M180,64H40A12,12,0,0,0,28,76V216a12,12,0,0,0,12,12H180a12,12,0,0,0,12-12V76A12,12,0,0,0,180,64ZM168,204H52V88H168ZM228,40V180a12,12,0,0,1-24,0V52H76a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40Z",
            })
          ),
        ],
        [
          "duotone",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M184,72V216H40V72Z",
              opacity: "0.2",
            }),
            l.createElement("path", {
              d: "M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z",
            })
          ),
        ],
        [
          "fill",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z",
            })
          ),
        ],
        [
          "light",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M184,66H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V72A6,6,0,0,0,184,66Zm-6,144H46V78H178ZM222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40Z",
            })
          ),
        ],
        [
          "regular",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z",
            })
          ),
        ],
        [
          "thin",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z",
            })
          ),
        ],
      ]);
      var h = Object.defineProperty,
        g = Object.defineProperties,
        x = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        f = (e, t, a) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        v = (e, t) => {
          for (var a in t || (t = {})) b.call(t, a) && f(e, a, t[a]);
          if (u) for (var a of u(t)) E.call(t, a) && f(e, a, t[a]);
          return e;
        },
        N = (e, t) => g(e, x(t));
      let j = (0, l.forwardRef)((e, t) =>
        l.createElement(d.A, N(v({ ref: t }, e), { weights: p }))
      );
      j.displayName = "CopySimple";
      let y = new Map([
        [
          "bold",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z",
            })
          ),
        ],
        [
          "duotone",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",
              opacity: "0.2",
            }),
            l.createElement("path", {
              d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
            })
          ),
        ],
        [
          "fill",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z",
            })
          ),
        ],
        [
          "light",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z",
            })
          ),
        ],
        [
          "regular",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
            })
          ),
        ],
        [
          "thin",
          l.createElement(
            l.Fragment,
            null,
            l.createElement("path", {
              d: "M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z",
            })
          ),
        ],
      ]);
      var w = Object.defineProperty,
        A = Object.defineProperties,
        P = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        L = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable,
        C = (e, t, a) =>
          t in e
            ? w(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        H = (e, t) => {
          for (var a in t || (t = {})) L.call(t, a) && C(e, a, t[a]);
          if (O) for (var a of O(t)) V.call(t, a) && C(e, a, t[a]);
          return e;
        },
        _ = (e, t) => A(e, P(t));
      let M = (0, l.forwardRef)((e, t) =>
        l.createElement(d.A, _(H({ ref: t }, e), { weights: y }))
      );
      M.displayName = "DownloadSimple";
      var T = a(91202),
        S = a(66766),
        R = a(36356),
        k = a(5765);
      let Z = [
          {
            name: "Horizontal",
            img: "/brand/HorizontalWhite.png",
            svg: "/brand/HorizontalWhite.svg",
            tag: ["PNG", "SVG"],
          },
          {
            name: "Vertical",
            img: "/brand/VerticalWhite.png",
            svg: "/brand/VerticalWhite.svg",
            tag: ["PNG", "SVG"],
          },
          {
            name: "Symbol",
            img: "/brand/SymbolWhite.png",
            svg: "/brand/SymbolWhite.svg",
            tag: ["PNG", "SVG"],
          },
          {
            name: "Horizontal",
            img: "/brand/HorizontalBlack.png",
            svg: "/brand/HorizontalBlack.svg",
            tag: ["PNG", "SVG"],
            isBlack: !0,
          },
          {
            name: "Vertical",
            img: "/brand/VerticalBlack.png",
            svg: "/brand/VerticalBlack.svg",
            tag: ["PNG", "SVG"],
            isBlack: !0,
          },
          {
            name: "Symbol",
            img: "/brand/SymbolBlack.png",
            svg: "/brand/SymbolBlack.svg",
            tag: ["PNG", "SVG"],
            isBlack: !0,
          },
        ],
        G = (e) => {
          let { position: t } = e;
          return (0, r.jsx)(R.P.div, {
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 0 },
            className: (0, k.cn)("absolute", t),
            children: (0, r.jsxs)("div", {
              className: "relative w-3 h-3",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-primary/60",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-primary/60",
                }),
              ],
            }),
          });
        },
        F = () => {
          let [e, t] = (0, l.useState)(""),
            a = async (e, t, a) => {
              try {
                let r = await fetch(e),
                  l = await r.blob(),
                  s = window.URL.createObjectURL(l),
                  n = document.createElement("a");
                (n.href = s),
                  (n.download = `${a}.png`),
                  document.body.appendChild(n),
                  n.click(),
                  document.body.removeChild(n),
                  window.URL.revokeObjectURL(s);
                let i = await fetch(t),
                  o = await i.blob(),
                  c = window.URL.createObjectURL(o),
                  m = document.createElement("a");
                (m.href = c),
                  (m.download = `${a}.svg`),
                  document.body.appendChild(m),
                  m.click(),
                  document.body.removeChild(m),
                  window.URL.revokeObjectURL(c);
              } catch (e) {
                console.error("Download failed:", e);
              }
            },
            s = async (e) => {
              try {
                if (e.endsWith(".svg")) {
                  let a = await fetch(e),
                    r = await a.text();
                  await navigator.clipboard.writeText(r),
                    t(e),
                    setTimeout(() => {
                      t("");
                    }, 2e3);
                  return;
                }
                let a = await fetch(e),
                  r = await a.blob();
                if (navigator.clipboard && ClipboardItem)
                  try {
                    let a = new ClipboardItem({ [r.type]: r });
                    await navigator.clipboard.write([a]),
                      t(e),
                      setTimeout(() => {
                        t("");
                      }, 2e3);
                  } catch (e) {
                    console.log(
                      "Failed to copy image. Your browser may not support this feature."
                    );
                  }
                else
                  console.log(
                    "Image copy is not supported in this browser. The image URL will be copied instead."
                  ),
                    await navigator.clipboard.writeText(e),
                    t(e),
                    setTimeout(() => {
                      t("");
                    }, 2e3);
              } catch (a) {
                await navigator.clipboard.writeText(e),
                  t(e),
                  setTimeout(() => {
                    t("");
                  }, 2e3);
              }
            };
          return (0, r.jsxs)(n.A, {
            className: "my-20",
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-wrap gap-5 items-center justify-center",
                children: (0, r.jsx)("p", {
                  className: "text-3xl",
                  children: "Logo's",
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
                children: Z.map((t, l) =>
                  (0, r.jsxs)(
                    T.Z,
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
                        (0, r.jsx)("div", {
                          className:
                            "border border-primary/20 p-4 h-[324px] bg-primary/5 flex items-center justify-center",
                          children: (0, r.jsxs)("div", {
                            className: (0, k.cn)(
                              "relative border border-primary/20 p-4",
                              t.isBlack ? "bg-primary" : "bg-primary/5"
                            ),
                            children: [
                              (0, r.jsx)(S.default, {
                                src: t.img,
                                alt: t.name,
                                width: 60,
                                height: 60,
                                className: "object-contain",
                              }),
                              (0, r.jsx)(G, {
                                position:
                                  "-top-1.5 -left-1.5 md:-top-2 md:-left-2",
                              }),
                              (0, r.jsx)(G, {
                                position:
                                  "-top-1.5 -right-1.5 md:-top-2 md:-right-2",
                              }),
                              (0, r.jsx)(G, {
                                position:
                                  "-bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2",
                              }),
                              (0, r.jsx)(G, {
                                position:
                                  "-bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-5",
                          children: t.name,
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center justify-between pt-3",
                          children: [
                            (0, r.jsx)("div", {
                              className: "flex gap-3 items-center w-full ",
                              children: t.tag.map((a, l) =>
                                (0, r.jsxs)(
                                  c.$,
                                  {
                                    variant: "outline",
                                    className: "gap-1",
                                    onClick: () =>
                                      s("PNG" === a ? t.img : t.svg),
                                    children: [
                                      e === ("PNG" === a ? t.img : t.svg)
                                        ? (0, r.jsx)(m.J, {
                                            className:
                                              "w-4 h-4 aspect-square text-green-500",
                                          })
                                        : (0, r.jsx)(j, {
                                            className: "w-4 h-4 aspect-square",
                                          }),
                                      a,
                                    ],
                                  },
                                  `${t.name}-${l}`
                                )
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: "flex gap-2",
                              children: (0, r.jsx)(c.$, {
                                onClick: () =>
                                  a(t.img, t.svg, `${t.name}-logo`),
                                variant: "outline",
                                className: "gap-1",
                                children: (0, r.jsx)(M, {
                                  className: "w-4 h-4 aspect-square",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    `logo-${t.name}-${l}`
                  )
                ),
              }),
            ],
          });
        },
        D = [
          { name: "Background", color: "#000000", className: "bg-[#000000]" },
          { name: "Primary", color: "#E7F614", className: "bg-[#E7F614]" },
          { name: "Secondary", color: "#4121E6", className: "bg-[#4121E6]" },
        ],
        I = () => {
          let [e, t] = (0, l.useState)(!1),
            [a, s] = (0, l.useState)(""),
            i = (e) => {
              navigator.clipboard.writeText(e),
                t(!0),
                s(e),
                setTimeout(() => {
                  t(!1), s("");
                }, 2e3);
            };
          return (0, r.jsxs)(n.A, {
            className: "my-20",
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-wrap gap-5 items-center justify-center",
                children: (0, r.jsx)("p", {
                  className: "text-3xl",
                  children: "Color’s",
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10",
                children: D.map((e) =>
                  (0, r.jsxs)(
                    T.Z,
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
                        (0, r.jsx)("div", {
                          className: (0, k.cn)(
                            "border border-primary/20 h-[180px]",
                            e.className
                          ),
                        }),
                        (0, r.jsx)("p", {
                          className: "text-xl mt-5",
                          children: e.color,
                        }),
                        (0, r.jsx)("div", {
                          className: "flex items-center justify-between pt-3",
                          children: (0, r.jsxs)(c.$, {
                            variant: "outline",
                            className: "gap-2",
                            onClick: () => i(e.color),
                            children: [
                              a === e.color
                                ? (0, r.jsx)(m.J, {
                                    className:
                                      "w-4 h-4 aspect-square text-green-500",
                                  })
                                : (0, r.jsx)(j, {
                                    className: "w-4 h-4 aspect-square",
                                  }),
                              "Copy",
                            ],
                          }),
                        }),
                      ],
                    },
                    `color-${e.name}`
                  )
                ),
              }),
            ],
          });
        };
      var B = a(35438);
      let U = [
          {
            name: "Quantico",
            link: "https://fonts.google.com/specimen/Quantico",
            className: "font-quantico",
          },
          {
            name: "Inter",
            link: "https://fonts.google.com/specimen/Inter",
            className: "font-inter",
          },
        ],
        W = (e) => {
          let { position: t } = e;
          return (0, r.jsx)(R.P.div, {
            initial: { scale: 0 },
            animate: { scale: 1 },
            exit: { scale: 0 },
            className: (0, k.cn)("absolute", t),
            children: (0, r.jsxs)("div", {
              className: "relative w-3 h-3",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-primary/60",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-primary/60",
                }),
              ],
            }),
          });
        },
        $ = () => {
          let [e, t] = (0, l.useState)(!1),
            [a, s] = (0, l.useState)("");
          return (0, r.jsxs)(n.A, {
            className: "my-20",
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-wrap gap-5 items-center justify-center",
                children: (0, r.jsx)("p", {
                  className: "text-3xl",
                  children: "Typography",
                }),
              }),
              (0, r.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5 mt-10",
                children: U.map((e) =>
                  (0, r.jsxs)(
                    T.Z,
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
                        (0, r.jsx)("div", {
                          className:
                            "border border-primary/20 p-4 h-[180px] bg-primary/5 flex items-center justify-center",
                          children: (0, r.jsxs)("div", {
                            className: (0, k.cn)(
                              "relative border border-primary/20 p-4",
                              e.className
                            ),
                            children: [
                              (0, r.jsx)("p", {
                                className: "text-5xl",
                                children: e.name,
                              }),
                              (0, r.jsx)(W, {
                                position:
                                  "-top-1.5 -left-1.5 md:-top-2 md:-left-2",
                              }),
                              (0, r.jsx)(W, {
                                position:
                                  "-top-1.5 -right-1.5 md:-top-2 md:-right-2",
                              }),
                              (0, r.jsx)(W, {
                                position:
                                  "-bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2",
                              }),
                              (0, r.jsx)(W, {
                                position:
                                  "-bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center justify-between mt-5",
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-xl ",
                              children: e.name,
                            }),
                            (0, r.jsx)("div", {
                              className: "flex items-center justify-between",
                              children: (0, r.jsx)(c.$, {
                                variant: "outline",
                                className: "gap-2",
                                children: (0, r.jsxs)("a", {
                                  href: e.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Download",
                                    (0, r.jsx)(B.F, {
                                      className: "w-4 h-4 aspect-square",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    `typography-${e.name}`
                  )
                ),
              }),
            ],
          });
        };
      var z = a(8300),
        J = a(55645);
      let Y = () => {
        let { trackPage: e } = (0, z.s)();
        return (
          (0, l.useEffect)(() => {
            e(J.v.BRAND);
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o, {}),
              (0, r.jsx)(n.A, {
                className: "my-20",
                children: (0, r.jsx)(s.A, {}),
              }),
              (0, r.jsx)(F, {}),
              (0, r.jsx)(n.A, {
                className: "my-20",
                children: (0, r.jsx)(s.A, {}),
              }),
              (0, r.jsx)(I, {}),
              (0, r.jsx)(n.A, {
                className: "my-20",
                children: (0, r.jsx)(s.A, {}),
              }),
              (0, r.jsx)($, {}),
              (0, r.jsx)(n.A, {
                className: "my-20",
                children: (0, r.jsx)(s.A, {}),
              }),
              (0, r.jsx)(i.A, {}),
              (0, r.jsx)(n.A, {
                className: "my-20",
                children: (0, r.jsx)(s.A, {}),
              }),
            ],
          })
        );
      };
    },
    35220: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => x });
      var r = a(12115),
        l = a(39898);
      let s = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
            })
          ),
        ],
      ]);
      var n = Object.defineProperty,
        i = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = (e, t, a) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        h = (e, t) => {
          for (var a in t || (t = {})) m.call(t, a) && p(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && p(e, a, t[a]);
          return e;
        },
        g = (e, t) => i(e, o(t));
      let x = (0, r.forwardRef)((e, t) =>
        r.createElement(l.A, g(h({ ref: t }, e), { weights: s }))
      );
      x.displayName = "Check";
    },
    35438: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => x });
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
      var n = Object.defineProperty,
        i = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        p = (e, t, a) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        h = (e, t) => {
          for (var a in t || (t = {})) m.call(t, a) && p(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && p(e, a, t[a]);
          return e;
        },
        g = (e, t) => i(e, o(t));
      let x = (0, r.forwardRef)((e, t) =>
        r.createElement(l.A, g(h({ ref: t }, e), { weights: s }))
      );
      x.displayName = "ArrowUpRight";
    },
    35626: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 16556));
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
    84070: (e, t, a) => {
      "use strict";
      a.d(t, { FormModalProvider: () => o, V: () => i });
      var r = a(95155),
        l = a(12115),
        s = a(52319);
      let n = (0, l.createContext)(void 0);
      function i() {
        let e = (0, l.useContext)(n);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function o(e) {
        let { children: t } = e,
          [a, i] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)("");
        return (0, r.jsxs)(n.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), i(!0);
            },
          },
          children: [
            t,
            (0, r.jsx)(s.a, {
              isOpen: a,
              onClose: () => i(!1),
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
      }
    },
    86802: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c });
      var r = a(95155);
      a(12115);
      var l = a(2467),
        s = a(66766),
        n = a(75783),
        i = a(67052),
        o = a(84070);
      let c = () => {
        let { openFormModal: e } = (0, o.V)();
        return (0, r.jsx)(l.A, {
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
                  (0, r.jsxs)(n.$n, {
                    className: "mt-5 gap-2",
                    variant: "outline",
                    onClick: () =>
                      e(
                        "https://forms.zohopublic.in/nodeops1/form/Salesinbound/formperma/bzYGlNW442lSp3zGcKB8vnI5le4Q_iUWxI2byH7xU4s"
                      ),
                    children: [
                      "Contact Us ",
                      (0, r.jsx)(i.Q, { className: "w-4 h-4" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(s.default, {
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
    e.O(0, [3495, 5753, 6080, 6766, 5783, 8441, 1684, 7358], () => t(35626)),
      (_N_E = e.O());
  },
]);
