(() => {
  "use strict";
  var e = {},
    t = {};
  function r(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var o = (t[a] = { id: a, loaded: !1, exports: {} }),
      i = !0;
    try {
      e[a].call(o.exports, o, o.exports, r), (i = !1);
    } finally {
      i && delete t[a];
    }
    return (o.loaded = !0), o.exports;
  }
  (r.m = e),
    (r.amdO = {}),
    (() => {
      var e = [];
      r.O = (t, a, n, o) => {
        if (a) {
          o = o || 0;
          for (var i = e.length; i > 0 && e[i - 1][2] > o; i--) e[i] = e[i - 1];
          e[i] = [a, n, o];
          return;
        }
        for (var d = 1 / 0, i = 0; i < e.length; i++) {
          for (var [a, n, o] = e[i], l = !0, c = 0; c < a.length; c++)
            (!1 & o || d >= o) && Object.keys(r.O).every((e) => r.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((l = !1), o < d && (d = o));
          if (l) {
            e.splice(i--, 1);
            var f = n();
            void 0 !== f && (t = f);
          }
        }
        return t;
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (a, n) {
        if (
          (1 & n && (a = this(a)),
          8 & n ||
            ("object" == typeof a &&
              a &&
              ((4 & n && a.__esModule) ||
                (16 & n && "function" == typeof a.then))))
        )
          return a;
        var o = Object.create(null);
        r.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var d = 2 & n && a;
          "object" == typeof d && !~e.indexOf(d);
          d = t(d)
        )
          Object.getOwnPropertyNames(d).forEach((e) => (i[e] = () => a[e]));
        return (i.default = () => a), r.d(o, i), o;
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
      "static/chunks/" +
      ({
        950: "b055d1fb",
        1831: "bd904a5c",
        4685: "bf76e631",
        5592: "c15bf2b0",
        8413: "1329d575",
        9367: "b536a0f1",
      }[e] || e) +
      "." +
      {
        950: "43078a183c2e6550",
        1831: "d3904a8c2fd7ba32",
        3105: "604de2d311519296",
        3547: "ad1a2df039ea3fc9",
        4032: "6beaa5bd38bdde3c",
        4685: "aaa61571d789eaa4",
        5215: "9083c679d4ce1fda",
        5592: "9baa6a463f295c0e",
        7344: "640bbede9529d137",
        8252: "cddd3d42171ac559",
        8413: "7c036fc831c8654b",
        8798: "0ac2000b3fe46a4d",
        9045: "e37df291b1629b95",
        9367: "7efc990617157c10",
        9564: "87c0002a964b87f6",
        9634: "f05db1a3e77225a2",
      }[e] +
      ".js"),
    (r.miniCssF = (e) =>
      "static/css/" +
      { 3063: "d4b8fae49c100a6f", 8494: "20b8e35262c4d531" }[e] +
      ".css"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "_N_E:";
      r.l = (a, n, o, i) => {
        if (e[a]) return void e[a].push(n);
        if (void 0 !== o)
          for (
            var d, l, c = document.getElementsByTagName("script"), f = 0;
            f < c.length;
            f++
          ) {
            var u = c[f];
            if (
              u.getAttribute("src") == a ||
              u.getAttribute("data-webpack") == t + o
            ) {
              d = u;
              break;
            }
          }
        d ||
          ((l = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          r.nc && d.setAttribute("nonce", r.nc),
          d.setAttribute("data-webpack", t + o),
          (d.src = r.tu(a))),
          (e[a] = [n]);
        var s = (t, r) => {
            (d.onerror = d.onload = null), clearTimeout(p);
            var n = e[a];
            if (
              (delete e[a],
              d.parentNode && d.parentNode.removeChild(d),
              n && n.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = s.bind(null, d.onerror)),
          (d.onload = s.bind(null, d.onload)),
          l && document.head.appendChild(d);
      };
    })(),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = "/_next/"),
    (() => {
      var e = (e, t, r, a) => {
          var n = document.createElement("link");
          return (
            (n.rel = "stylesheet"),
            (n.type = "text/css"),
            (n.onerror = n.onload =
              (o) => {
                if (((n.onerror = n.onload = null), "load" === o.type)) r();
                else {
                  var i = o && ("load" === o.type ? "missing" : o.type),
                    d = (o && o.target && o.target.href) || t,
                    l = Error(
                      "Loading CSS chunk " + e + " failed.\n(" + d + ")"
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = i),
                    (l.request = d),
                    n.parentNode.removeChild(n),
                    a(l);
                }
              }),
            (n.href = t),
            !(function (e) {
              if ("function" == typeof _N_E_STYLE_LOAD) {
                let { href: t, onload: r, onerror: a } = e;
                _N_E_STYLE_LOAD(
                  0 === t.indexOf(window.location.origin)
                    ? new URL(t).pathname
                    : t
                ).then(
                  () => (null == r ? void 0 : r.call(e, { type: "load" })),
                  () => (null == a ? void 0 : a.call(e, {}))
                );
              } else document.head.appendChild(e);
            })(n),
            n
          );
        },
        t = (e, t) => {
          for (
            var r = document.getElementsByTagName("link"), a = 0;
            a < r.length;
            a++
          ) {
            var n = r[a],
              o = n.getAttribute("data-href") || n.getAttribute("href");
            if ("stylesheet" === n.rel && (o === e || o === t)) return n;
          }
          for (
            var i = document.getElementsByTagName("style"), a = 0;
            a < i.length;
            a++
          ) {
            var n = i[a],
              o = n.getAttribute("data-href");
            if (o === e || o === t) return n;
          }
        },
        a = (a) =>
          new Promise((n, o) => {
            var i = r.miniCssF(a),
              d = r.p + i;
            if (t(i, d)) return n();
            e(a, d, n, o);
          }),
        n = { 8068: 0 };
      r.f.miniCss = (e, t) => {
        n[e]
          ? t.push(n[e])
          : 0 !== n[e] &&
            { 3063: 1, 8494: 1 }[e] &&
            t.push(
              (n[e] = a(e).then(
                () => {
                  n[e] = 0;
                },
                (t) => {
                  throw (delete n[e], t);
                }
              ))
            );
      };
    })(),
    (() => {
      var e = { 8068: 0, 1946: 0, 4213: 0 };
      (r.f.j = (t, a) => {
        var n = r.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) a.push(n[2]);
          else if (/^(1946|3063|4213|8068|8494)$/.test(t)) e[t] = 0;
          else {
            var o = new Promise((r, a) => (n = e[t] = [r, a]));
            a.push((n[2] = o));
            var i = r.p + r.u(t),
              d = Error();
            r.l(
              i,
              (a) => {
                if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    i = a && a.target && a.target.src;
                  (d.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = i),
                    n[1](d);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var n,
            o,
            [i, d, l] = a,
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (n in d) r.o(d, n) && (r.m[n] = d[n]);
            if (l) var f = l(r);
          }
          for (t && t(a); c < i.length; c++)
            (o = i[c]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(f);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
})();
