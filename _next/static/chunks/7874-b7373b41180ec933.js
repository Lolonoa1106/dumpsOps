(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7874],
  {
    21249: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_19640c",
        variable: "__variable_19640c",
      };
    },
    26259: (e, t, a) => {
      "use strict";
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: a,
            dataLayerName: o = "dataLayer",
            nonce: u,
          } = e;
          return (
            void 0 === r && (r = o),
            (0, l.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(i.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: `
          window['${o}'] = window['${o}'] || [];
          function gtag(){window['${o}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${a ? ",{ 'debug_mode': true }" : ""});`,
                  },
                  nonce: u,
                }),
                (0, n.jsx)(i.default, {
                  id: "_next-ga",
                  src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                  nonce: u,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          if (void 0 === r)
            return void console.warn(
              "@next/third-parties: GA has not been initialized"
            );
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                `@next/third-parties: GA dataLayer ${r} does not exist`
              );
        });
      let n = a(95155),
        l = a(12115),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(63554));
    },
    42714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let a = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        r = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function n(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function l(e, t) {
        for (let [l, i] of Object.entries(t)) {
          if (!t.hasOwnProperty(l) || r.includes(l) || void 0 === i) continue;
          let o = a[l] || l.toLowerCase();
          "SCRIPT" === e.tagName && n(o)
            ? (e[o] = !!i)
            : e.setAttribute(o, String(i)),
            (!1 === i ||
              ("SCRIPT" === e.tagName && n(o) && (!i || "false" === i))) &&
              (e.setAttribute(o, ""), e.removeAttribute(o));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    58930: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: a = null,
            width: l = null,
            children: i,
            dataNtpc: o = "",
          } = e;
          return (
            (0, n.useEffect)(() => {
              o &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: `next-third-parties-${o}` },
                });
            }, [o]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                i,
                t
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != a ? `${a}px` : "auto",
                        width: null != l ? `${l}px` : "auto",
                      },
                      "data-ntpc": o,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let r = a(95155),
        n = a(12115);
    },
    63554: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => n.a });
      var r = a(69243),
        n = a.n(r),
        l = {};
      for (let e in r) "default" !== e && (l[e] = () => r[e]);
      a.d(t, l);
    },
    65498: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => g });
      var r = a(12115),
        n = a(39898);
      let l = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        o = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, a) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) s.call(t, a) && f(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && f(e, a, t[a]);
          return e;
        },
        m = (e, t) => o(e, u(t));
      let g = (0, r.forwardRef)((e, t) =>
        r.createElement(n.A, m(p({ ref: t }, e), { weights: l }))
      );
      g.displayName = "X";
    },
    69243: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return y;
          },
        });
      let r = a(88229),
        n = a(6966),
        l = a(95155),
        i = r._(a(47650)),
        o = n._(a(12115)),
        u = a(82830),
        c = a(42714),
        s = a(92374),
        d = new Map(),
        f = new Set(),
        p = (e) => {
          if (i.default.preinit)
            return void e.forEach((e) => {
              i.default.preinit(e, { as: "style" });
            });
          {
            let t = document.head;
            e.forEach((e) => {
              let a = document.createElement("link");
              (a.type = "text/css"),
                (a.rel = "stylesheet"),
                (a.href = e),
                t.appendChild(a);
            });
          }
        },
        m = (e) => {
          let {
              src: t,
              id: a,
              onLoad: r = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: l,
              children: i = "",
              strategy: o = "afterInteractive",
              onError: u,
              stylesheets: s,
            } = e,
            m = a || t;
          if (m && f.has(m)) return;
          if (d.has(t)) {
            f.add(m), d.get(t).then(r, u);
            return;
          }
          let g = () => {
              n && n(), f.add(m);
            },
            y = document.createElement("script"),
            h = new Promise((e, t) => {
              y.addEventListener("load", function (t) {
                e(), r && r.call(this, t), g();
              }),
                y.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          l
            ? ((y.innerHTML = l.__html || ""), g())
            : i
            ? ((y.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
              g())
            : t && ((y.src = t), d.set(t, h)),
            (0, c.setAttributesFromProps)(y, e),
            "worker" === o && y.setAttribute("type", "text/partytown"),
            y.setAttribute("data-nscript", o),
            s && p(s),
            document.body.appendChild(y);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, s.requestIdleCallback)(() => m(e));
            })
          : m(e);
      }
      function y(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function h(e) {
        let {
            id: t,
            src: a = "",
            onLoad: r = () => {},
            onReady: n = null,
            strategy: c = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...g
          } = e,
          {
            updateScripts: y,
            scripts: h,
            getIsSsr: b,
            appDir: _,
            nonce: M,
          } = (0, o.useContext)(u.HeadManagerContext),
          w = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || a;
          w.current || (n && e && f.has(e) && n(), (w.current = !0));
        }, [n, t, a]);
        let v = (0, o.useRef)(!1);
        if (
          ((0, o.useEffect)(() => {
            if (!v.current) {
              if ("afterInteractive" === c) m(e);
              else
                "lazyOnload" === c &&
                  ("complete" === document.readyState
                    ? (0, s.requestIdleCallback)(() => m(e))
                    : window.addEventListener("load", () => {
                        (0, s.requestIdleCallback)(() => m(e));
                      }));
              v.current = !0;
            }
          }, [e, c]),
          ("beforeInteractive" === c || "worker" === c) &&
            (y
              ? ((h[c] = (h[c] || []).concat([
                  { id: t, src: a, onLoad: r, onReady: n, onError: d, ...g },
                ])),
                y(h))
              : b && b()
              ? f.add(t || a)
              : b && !b() && m(e)),
          _)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                i.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === c)
          )
            if (!a)
              return (
                g.dangerouslySetInnerHTML &&
                  ((g.children = g.dangerouslySetInnerHTML.__html),
                  delete g.dangerouslySetInnerHTML),
                (0, l.jsx)("script", {
                  nonce: M,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...g, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                i.default.preload(
                  a,
                  g.integrity
                    ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: M,
                        crossOrigin: g.crossOrigin,
                      }
                    : { as: "script", nonce: M, crossOrigin: g.crossOrigin }
                ),
                (0, l.jsx)("script", {
                  nonce: M,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([a, { ...g, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === c &&
            a &&
            i.default.preload(
              a,
              g.integrity
                ? {
                    as: "script",
                    integrity: g.integrity,
                    nonce: M,
                    crossOrigin: g.crossOrigin,
                  }
                : { as: "script", nonce: M, crossOrigin: g.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(h, "__nextScript", { value: !0 });
      let b = h;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    71211: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => g });
      var r = a(12115),
        n = a(39898);
      let l = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M216,64V192H40V64Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        o = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, a) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) s.call(t, a) && f(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && f(e, a, t[a]);
          return e;
        },
        m = (e, t) => o(e, u(t));
      let g = (0, r.forwardRef)((e, t) =>
        r.createElement(n.A, m(p({ ref: t }, e), { weights: l }))
      );
      g.displayName = "List";
    },
    71264: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Quantico', 'Quantico Fallback'",
          fontStyle: "normal",
        },
        className: "__className_5c5ee8",
        variable: "__variable_5c5ee8",
      };
    },
    82587: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => f });
      var r = a(95155),
        n = a(12115),
        l = a(90869);
      let i = (0, n.createContext)(null);
      var o = a(69515),
        u = a(97494);
      let c = (e) => !e.isLayoutDirty && e.willUpdate(!1),
        s = (e) => !0 === e,
        d = (e) => s(!0 === e) || "id" === e,
        f = (e) => {
          let { children: t, id: a, inherit: f = !0 } = e,
            p = (0, n.useContext)(l.L),
            m = (0, n.useContext)(i),
            [g, y] = (function () {
              let e = (function () {
                  let e = (0, n.useRef)(!1);
                  return (
                    (0, u.E)(
                      () => (
                        (e.current = !0),
                        () => {
                          e.current = !1;
                        }
                      ),
                      []
                    ),
                    e
                  );
                })(),
                [t, a] = (0, n.useState)(0),
                r = (0, n.useCallback)(() => {
                  e.current && a(t + 1);
                }, [t]);
              return [(0, n.useCallback)(() => o.Gt.postRender(r), [r]), t];
            })(),
            h = (0, n.useRef)(null),
            b = p.id || m;
          null === h.current &&
            (d(f) && b && (a = a ? b + "-" + a : b),
            (h.current = {
              id: a,
              group:
                (s(f) && p.group) ||
                (function () {
                  let e = new Set(),
                    t = new WeakMap(),
                    a = () => e.forEach(c);
                  return {
                    add: (r) => {
                      e.add(r), t.set(r, r.addEventListener("willUpdate", a));
                    },
                    remove: (r) => {
                      e.delete(r);
                      let n = t.get(r);
                      n && (n(), t.delete(r)), a();
                    },
                    dirty: a,
                  };
                })(),
            }));
          let _ = (0, n.useMemo)(() => ({ ...h.current, forceRender: g }), [y]);
          return (0, r.jsx)(l.L.Provider, { value: _, children: t });
        };
    },
    92374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return a;
          },
        });
      let a =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    95056: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => n });
      var r = a(12115);
      function n(e, t, a) {
        (0, r.useInsertionEffect)(() => e.on(t, a), [e, t, a]);
      }
    },
    95524: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => g });
      var r = a(12115),
        n = a(39898);
      let l = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M230.66,86l-96-64a12,12,0,0,0-13.32,0l-96,64A12,12,0,0,0,20,96V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V96A12,12,0,0,0,230.66,86ZM89.81,152,44,184.31v-65ZM114.36,164h27.28L187,196H69.05ZM166.19,152,212,119.29v65ZM128,46.42l74.86,49.91L141.61,140H114.39L53.14,96.33Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M224,96l-78.55,56h-34.9L32,96l96-64Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM103.63,152,36,199.76v-96Zm8.19,4h32.36l68,48H43.86Zm40.55-4L220,103.76v96ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11Z",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        o = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (e, t, a) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        p = (e, t) => {
          for (var a in t || (t = {})) s.call(t, a) && f(e, a, t[a]);
          if (c) for (var a of c(t)) d.call(t, a) && f(e, a, t[a]);
          return e;
        },
        m = (e, t) => o(e, u(t));
      let g = (0, r.forwardRef)((e, t) =>
        r.createElement(n.A, m(p({ ref: t }, e), { weights: l }))
      );
      g.displayName = "EnvelopeOpen";
    },
    96063: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: a = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: o = "dataLayer",
            auth: u,
            preview: c,
            dataLayer: s,
            nonce: d,
          } = e;
          i = o;
          let f = "dataLayer" !== o ? `&l=${o}` : "",
            p = u ? `&gtm_auth=${u}` : "",
            m = c ? `&gtm_preview=${c}&gtm_cookies_win=x` : "";
          return (
            (0, n.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(l.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s ? `w[l].push(${JSON.stringify(s)})` : ""}
      })(window,'${o}');`,
                  },
                  nonce: d,
                }),
                (0, r.jsx)(l.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: `${a}?id=${t}${f}${p}${m}`,
                  nonce: d,
                }),
              ],
            })
          );
        });
      let r = a(95155),
        n = a(12115),
        l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a(63554)),
        i = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let a = t || i;
        (window[a] = window[a] || []), window[a].push(e);
      };
    },
  },
]);
