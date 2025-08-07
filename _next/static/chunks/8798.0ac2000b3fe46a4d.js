"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8798],
  {
    68798: (e, t, r) => {
      let s;
      r.r(t), r.d(t, { PostProcessing: () => m });
      var i = r(83816),
        a = r(12115),
        l = r(891),
        n = r(43264),
        h = r(79634);
      let d = new l.QuadMesh(),
        u = new n.I9Y(),
        o = new n.I9Y(1, 0),
        g = new n.I9Y(0, 1);
      class p extends l.TempNode {
        static get type() {
          return "BloomNode";
        }
        constructor(e, t = 1, r = 0, s = 0) {
          super("vec4"),
            (this.inputNode = e),
            (this.strength = (0, h.PiW)(t)),
            (this.radius = (0, h.PiW)(r)),
            (this.threshold = (0, h.PiW)(s)),
            (this.smoothWidth = (0, h.PiW)(0.01)),
            (this._renderTargetsHorizontal = []),
            (this._renderTargetsVertical = []),
            (this._nMips = 5),
            (this._renderTargetBright = new n.O0B(1, 1, {
              depthBuffer: !1,
              type: n.ix0,
            })),
            (this._renderTargetBright.texture.name = "UnrealBloomPass.bright"),
            (this._renderTargetBright.texture.generateMipmaps = !1);
          for (let e = 0; e < this._nMips; e++) {
            let t = new n.O0B(1, 1, { depthBuffer: !1, type: n.ix0 });
            (t.texture.name = "UnrealBloomPass.h" + e),
              (t.texture.generateMipmaps = !1),
              this._renderTargetsHorizontal.push(t);
            let r = new n.O0B(1, 1, { depthBuffer: !1, type: n.ix0 });
            (r.texture.name = "UnrealBloomPass.v" + e),
              (r.texture.generateMipmaps = !1),
              this._renderTargetsVertical.push(r);
          }
          (this._compositeMaterial = null),
            (this._highPassFilterMaterial = null),
            (this._separableBlurMaterials = []),
            (this._textureNodeBright = (0, h.wHr)(
              this._renderTargetBright.texture
            )),
            (this._textureNodeBlur0 = (0, h.wHr)(
              this._renderTargetsVertical[0].texture
            )),
            (this._textureNodeBlur1 = (0, h.wHr)(
              this._renderTargetsVertical[1].texture
            )),
            (this._textureNodeBlur2 = (0, h.wHr)(
              this._renderTargetsVertical[2].texture
            )),
            (this._textureNodeBlur3 = (0, h.wHr)(
              this._renderTargetsVertical[3].texture
            )),
            (this._textureNodeBlur4 = (0, h.wHr)(
              this._renderTargetsVertical[4].texture
            )),
            (this._textureOutput = (0, h.h7x)(
              this,
              this._renderTargetsHorizontal[0].texture
            )),
            (this.updateBeforeType = l.NodeUpdateType.FRAME);
        }
        getTextureNode() {
          return this._textureOutput;
        }
        setSize(e, t) {
          let r = Math.round(e / 2),
            s = Math.round(t / 2);
          this._renderTargetBright.setSize(r, s);
          for (let e = 0; e < this._nMips; e++)
            this._renderTargetsHorizontal[e].setSize(r, s),
              this._renderTargetsVertical[e].setSize(r, s),
              this._separableBlurMaterials[e].invSize.value.set(1 / r, 1 / s),
              (r = Math.round(r / 2)),
              (s = Math.round(s / 2));
        }
        updateBefore(e) {
          let { renderer: t } = e;
          s = l.RendererUtils.resetRendererState(t, s);
          let r = t.getDrawingBufferSize(u);
          this.setSize(r.width, r.height),
            t.setRenderTarget(this._renderTargetBright),
            (d.material = this._highPassFilterMaterial),
            d.render(t);
          let i = this._renderTargetBright;
          for (let e = 0; e < this._nMips; e++)
            (d.material = this._separableBlurMaterials[e]),
              (this._separableBlurMaterials[e].colorTexture.value = i.texture),
              (this._separableBlurMaterials[e].direction.value = o),
              t.setRenderTarget(this._renderTargetsHorizontal[e]),
              d.render(t),
              (this._separableBlurMaterials[e].colorTexture.value =
                this._renderTargetsHorizontal[e].texture),
              (this._separableBlurMaterials[e].direction.value = g),
              t.setRenderTarget(this._renderTargetsVertical[e]),
              d.render(t),
              (i = this._renderTargetsVertical[e]);
          t.setRenderTarget(this._renderTargetsHorizontal[0]),
            (d.material = this._compositeMaterial),
            d.render(t),
            l.RendererUtils.restoreRendererState(t, s);
        }
        setup(e) {
          let t = (0, h.Fn)(() => {
            let e = this.inputNode,
              t = (0, h.NkA)(e.rgb),
              r = (0, h.TF7)(
                this.threshold,
                this.threshold.add(this.smoothWidth),
                t
              );
            return (0, h.jhA)((0, h.lnd)(0), e, r);
          });
          (this._highPassFilterMaterial =
            this._highPassFilterMaterial || new l.NodeMaterial()),
            (this._highPassFilterMaterial.fragmentNode = t().context(
              e.getSharedContext()
            )),
            (this._highPassFilterMaterial.name = "Bloom_highPass"),
            (this._highPassFilterMaterial.needsUpdate = !0);
          let r = [3, 5, 7, 9, 11];
          for (let t = 0; t < this._nMips; t++)
            this._separableBlurMaterials.push(
              this._getSeparableBlurMaterial(e, r[t])
            );
          let s = (0, h.Wep)([1, 0.8, 0.6, 0.4, 0.2]),
            i = (0, h.Wep)([
              new n.Pq0(1, 1, 1),
              new n.Pq0(1, 1, 1),
              new n.Pq0(1, 1, 1),
              new n.Pq0(1, 1, 1),
              new n.Pq0(1, 1, 1),
            ]),
            a = (0, h.Fn)(([e, t]) => {
              let r = (0, h.fVC)(1.2).sub(e);
              return (0, h.jhA)(e, r, t);
            }).setLayout({
              name: "lerpBloomFactor",
              type: "float",
              inputs: [
                { name: "factor", type: "float" },
                { name: "radius", type: "float" },
              ],
            }),
            d = (0, h.Fn)(() => {
              let e = a(s.element(0), this.radius)
                  .mul((0, h.lnd)(i.element(0), 1))
                  .mul(this._textureNodeBlur0),
                t = a(s.element(1), this.radius)
                  .mul((0, h.lnd)(i.element(1), 1))
                  .mul(this._textureNodeBlur1),
                r = a(s.element(2), this.radius)
                  .mul((0, h.lnd)(i.element(2), 1))
                  .mul(this._textureNodeBlur2),
                l = a(s.element(3), this.radius)
                  .mul((0, h.lnd)(i.element(3), 1))
                  .mul(this._textureNodeBlur3),
                n = a(s.element(4), this.radius)
                  .mul((0, h.lnd)(i.element(4), 1))
                  .mul(this._textureNodeBlur4);
              return e.add(t).add(r).add(l).add(n).mul(this.strength);
            });
          return (
            (this._compositeMaterial =
              this._compositeMaterial || new l.NodeMaterial()),
            (this._compositeMaterial.fragmentNode = d().context(
              e.getSharedContext()
            )),
            (this._compositeMaterial.name = "Bloom_comp"),
            (this._compositeMaterial.needsUpdate = !0),
            this._textureOutput
          );
        }
        dispose() {
          for (let e = 0; e < this._renderTargetsHorizontal.length; e++)
            this._renderTargetsHorizontal[e].dispose();
          for (let e = 0; e < this._renderTargetsVertical.length; e++)
            this._renderTargetsVertical[e].dispose();
          this._renderTargetBright.dispose();
        }
        _getSeparableBlurMaterial(e, t) {
          let r = [];
          for (let e = 0; e < t; e++)
            r.push((0.39894 * Math.exp((-0.5 * e * e) / (t * t))) / t);
          let s = (0, h.wHr)(),
            i = (0, h.Wep)(r),
            a = (0, h.PiW)(new n.I9Y()),
            d = (0, h.PiW)(new n.I9Y(0.5, 0.5)),
            u = (0, h.uv)(),
            o = (e) => s.sample(e),
            g = (0, h.Fn)(() => {
              let e = i.element(0).toVar(),
                r = o(u).rgb.mul(e).toVar();
              return (
                (0, h.FZF)(
                  {
                    start: (0, h.Whr)(1),
                    end: (0, h.Whr)(t),
                    type: "int",
                    condition: "<",
                  },
                  ({ i: t }) => {
                    let s = (0, h.fVC)(t),
                      l = i.element(t),
                      n = d.mul(a).mul(s),
                      g = o(u.add(n)).rgb,
                      p = o(u.sub(n)).rgb;
                    r.addAssign((0, h.WQq)(g, p).mul(l)),
                      e.addAssign((0, h.fVC)(2).mul(l));
                  }
                ),
                (0, h.lnd)(r.div(e), 1)
              );
            }),
            p = new l.NodeMaterial();
          return (
            (p.fragmentNode = g().context(e.getSharedContext())),
            (p.name = "Bloom_separable"),
            (p.needsUpdate = !0),
            (p.colorTexture = s),
            (p.direction = d),
            (p.invSize = a),
            p
          );
        }
      }
      let _ = (e, t, r, s) => (0, h.mp$)(new p((0, h.mp$)(e), t, r, s)),
        m = (e) => {
          let { strength: t = 1, threshold: r = 1 } = e,
            { gl: s, scene: n, camera: d } = (0, i.A)(),
            u = (0, a.useMemo)(() => {
              let e = new l.PostProcessing(s),
                i = (0, h.IXH)(n, d).getTextureNode("output"),
                a = _(i, t, 0.5, r);
              return (e.outputNode = i.add(a)), e;
            }, [d, s, n, t, r]);
          return (
            (0, i.C)(() => {
              u.renderAsync();
            }, 1),
            null
          );
        };
    },
  },
]);
