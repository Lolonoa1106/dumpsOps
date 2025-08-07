"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7344],
  {
    17344: (e, t, r) => {
      r.r(t), r.d(t, { default: () => h });
      var u = r(95155),
        l = r(83816),
        a = r(12115),
        i = r(43264);
      let n = (e) =>
        e === Object(e) && !Array.isArray(e) && "function" != typeof e;
      function o(e, t) {
        let r = (0, l.A)((e) => e.gl),
          u = (0, l.F)(i.Tap, n(e) ? Object.values(e) : e);
        return (
          (0, a.useLayoutEffect)(() => {
            null == t || t(u);
          }, [t]),
          (0, a.useEffect)(() => {
            if ("initTexture" in r) {
              let e = [];
              Array.isArray(u)
                ? (e = u)
                : u instanceof i.gPd
                ? (e = [u])
                : n(u) && (e = Object.values(u)),
                e.forEach((e) => {
                  e instanceof i.gPd && r.initTexture(e);
                });
            }
          }, [r, u]),
          (0, a.useMemo)(() => {
            if (!n(e)) return u;
            {
              let t = {},
                r = 0;
              for (let l in e) t[l] = u[r++];
              return t;
            }
          }, [e, u])
        );
      }
      (o.preload = (e) => l.F.preload(i.Tap, e)),
        (o.clear = (e) => l.F.clear(i.Tap, e));
      var s = r(891),
        c = r(19816),
        f = r(39676),
        p = r(50802),
        d = r(79634);
      let h = () => {
        let { setIsLoading: e } = (0, a.useContext)(c.F),
          [t, r] = o(["herorawblack.webp", "herodepth1.webp"], () => {
            e(!1), (t.colorSpace = i.er$);
          }),
          { material: n, uniforms: h } = (0, a.useMemo)(() => {
            let e = (0, d.PiW)(new i.I9Y(0)),
              u = (0, d.PiW)(0),
              l = (0, d.wHr)(r),
              a = (0, d.wHr)(t, (0, d.uv)().add(l.r.mul(e).mul(0.01))),
              n = (0, d.fVC)(1600).div(900),
              o = (0, d.ZcS)((0, d.uv)().x.mul(n), (0, d.uv)().y),
              c = (0, d.ZcS)(120),
              f = (0, d.ziu)(o.mul(c), 2).sub(1),
              p = (0, d.twT)(o.mul(c).div(2)),
              h = (0, d.fVC)(f.length()),
              m = (0, d.fVC)((0, d.TF7)(0.5, 0.49, h)).mul(p),
              w = (0, d.zbg)((0, d.TF7)(0, 0.02, (0, d.tnl)(l.sub(u)))),
              v = m.mul(w).mul((0, d.eR5)(5, 5, 5)),
              b = (0, d.g1e)(a, v);
            return {
              material: new s.MeshBasicNodeMaterial({ colorNode: b }),
              uniforms: { uPointer: e, uProgress: u },
            };
          }, [t, r]),
          [m, w] = (function (e, t, r = 1) {
            let u = (0, l.A)((e) => e.viewport),
              a = 900 * (u.aspect > 1600 / 900 ? u.width / 1600 : u.height / t);
            return [
              e * (u.aspect > e / t ? u.width / e : u.height / t) * r,
              a * r,
              1,
            ];
          })(1600, 900);
        return (
          (0, f.L)(() => {
            p.Ay.to(h.uProgress, {
              value: 1,
              repeat: -1,
              duration: 5,
              ease: "power1.out",
            });
          }, [h.uProgress]),
          (0, l.C)((e) => {
            let { pointer: t } = e;
            h.uPointer.value = t;
          }),
          (0, u.jsx)("mesh", {
            scale: [m, w, 1],
            material: n,
            children: (0, u.jsx)("planeGeometry", {}),
          })
        );
      };
    },
  },
]);
