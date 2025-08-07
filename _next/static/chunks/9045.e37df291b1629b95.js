(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9045],
  {
    29045: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, { default: () => y });
      var o = n(95155);
      n(44679);
      var r = n(44912),
        l = n(5113),
        c = n(2467),
        i = n(67052),
        p = n(6874),
        t = n.n(p),
        s = n(55645),
        F = n(8300),
        g = n(40402),
        m = n(60760),
        d = n(36356),
        x = n(12115);
      let h = () => {
          let [e, a] = (0, x.useState)({ x: 0, y: 0 });
          return (
            (0, x.useEffect)(() => {
              let e = (e) => {
                a({ x: e.clientX, y: e.clientY });
              };
              return (
                window.addEventListener("mousemove", e),
                () => {
                  window.removeEventListener("mousemove", e);
                }
              );
            }, []),
            e
          );
        },
        u = {
          "ZORA.png": { name: "ZORA", color: "#3C8BDD" },
          "Xprotocol.png": { name: "X Protocol", color: "#FFBC0E" },
          "XAI.png": { name: "XAI", color: "#FF0030" },
          "Vemp.png": { name: "Vemp", color: "#FFFFFF" },
          "Timpi.png": { name: "Timpi", color: "#EB1C4E" },
          "Taiko.png": { name: "Taiko", color: "#C8047D" },
          "Sophon.png": { name: "Sophon", color: "#FFFFFF" },
          "SCRIPT_TV.png": { name: "Script TV", color: "#FFEF00" },
          "Rivalz.png": { name: "Rivalz", color: "#69FF93" },
          "PLayAI.png": { name: "PlayAI", color: "#FFFFFF" },
          "Orichain.png": { name: "Orichain", color: "#FFFFFF" },
          "Openpad.png": { name: "Openpad", color: "#FFFFFF" },
          "Nubit.png": { name: "Nubit", color: "#E16151" },
          "NEURAL_INTERNET.png": { name: "Neural Internet", color: "#FFFFFF" },
          "Lumoz.png": { name: "Lumoz", color: "#BEFE00" },
          "KIP.png": { name: "KIP", color: "#FFFFFF" },
          "iAgent.png": { name: "iAgent", color: "#00FF00" },
          "Hychain.png": { name: "Hychain", color: "#FFB16A" },
          "HUDDLE.png": { name: "Huddle", color: "#246BFD" },
          "GPUNET.png": { name: "GPUNET", color: "#F85712" },
          "GAM3.png": { name: "GAM3", color: "#FFFFFF" },
          "FUEL.png": { name: "FUEL", color: "#00F58B" },
          "Farcaster.png": { name: "Farcaster", color: "#855DCD" },
          "EMTN.png": { name: "EMTN", color: "#FFFFFF" },
          "Elixer.png": { name: "Elixer", color: "#FF78AC" },
          "EigenLayer.png": { name: "EigenLayer", color: "#FFFFFF" },
          "DIN.png": { name: "DIN", color: "#D7EE6A" },
          "Celestia.png": { name: "Celestia", color: "#7B2BF9" },
          "Carv.png": { name: "Carv", color: "#FFFFFF" },
          "Babylon.png": { name: "Babylon", color: "#FFFFFF" },
          "Avail.png": { name: "Avail", color: "#07EFFB" },
          "Ather.png": { name: "Ather", color: "#D7FE51" },
          "Archway.png": { name: "Archway", color: "#FF4D00" },
          "0G.png": { name: "0G", color: "#FF9566" },
          "Beam.png": { name: "Beam", color: "#F3DE5C" },
        },
        E = (e) => {
          let { children: a, protocol: n } = e,
            r = h(),
            [l, c] = (0, x.useState)(!1),
            i = ((e) => {
              let a = parseInt(e.slice(1, 3), 16) / 255,
                n = parseInt(e.slice(3, 5), 16) / 255,
                o = parseInt(e.slice(5, 7), 16) / 255,
                r = Math.max(a, n, o),
                l = Math.min(a, n, o),
                c = 0,
                i = 0,
                p = (r + l) / 2;
              if (r !== l) {
                let e = r - l;
                switch (((i = p > 0.5 ? e / (2 - r - l) : e / (r + l)), r)) {
                  case a:
                    c = (n - o) / e + 6 * (n < o);
                    break;
                  case n:
                    c = (o - a) / e + 2;
                    break;
                  case o:
                    c = (a - n) / e + 4;
                }
                c = Math.round(60 * c);
              }
              return { h: c, s: 100 * i, l: 100 * p };
            })(n.color);
          return (0, o.jsxs)("div", {
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            className: "relative overflow-hidden",
            children: [
              (0, o.jsx)(m.N, {
                children:
                  l &&
                  (0, o.jsx)(d.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    layoutId: "spotlight",
                    className: "absolute inset-0 z-0 overflow-hidden bg-fixed",
                    style: {
                      background: `radial-gradient(circle at ${r.x}px ${r.y}px, hsla(${i.h},${i.s}%,${i.l}%,0.035) 0%,transparent 10%,transparent) fixed`,
                    },
                  }),
              }),
              (0, o.jsx)(d.P.div, {
                className: "absolute inset-0 z-0 overflow-hidden bg-fixed",
                style: {
                  clipPath:
                    "polygon(0% 0%, 0% 100%, calc(0% + 1px) 100%, calc(0% + 1px) calc(0% + 1px), calc(100% - 1px) calc(0% + 1px), calc(100% - 1px) calc(100% - 1px), calc(0% + 1px) calc(100% - 1px), calc(0% + 1px) 100%, 100% 100%, 100% 0%)",
                  background: `radial-gradient(circle at ${r.x}px ${r.y}px, hsla(${i.h},${i.s}%,${i.l}%,0.65) 0%,transparent 10%,transparent) fixed`,
                },
              }),
              (0, o.jsx)("div", { className: "relative z-10", children: a }),
            ],
          });
        };
      function y() {
        let { trackClick: e } = (0, F.s)();
        return (0, o.jsxs)(c.A, {
          className: "my-20",
          children: [
            (0, o.jsxs)("div", {
              className: "flex flex-wrap gap-5 items-center justify-between",
              children: [
                (0, o.jsx)("p", {
                  className: "text-3xl",
                  children: "Supported Chains and Protocols",
                }),
                (0, o.jsx)(t(), {
                  href: "/ecosystem",
                  onClick: () => e(s.R.LANDING_PAGE_EXPLORE_NODEOPS_ECOSYSTEM),
                  children: (0, o.jsxs)(r.$, {
                    variant: "outline",
                    className: "gap-2",
                    children: [
                      (0, o.jsx)(l.A, {
                        text: "Explore NodeOps Ecosystem",
                        animateOn: "hover",
                        speed: 70,
                        sequential: !0,
                        maxIterations: 10,
                        useOriginalCharsOnly: !0,
                      }),
                      (0, o.jsx)(i.Q, { className: "w-4 h-4 -rotate-45" }),
                    ],
                  }),
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: "max-w-screen-xl container mx-auto relative mt-10",
              children: (0, o.jsx)("div", {
                className:
                  "grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-4 grid-cols-4 gap-4 mb-8",
                children: [
                  "ZORA.png",
                  "Xprotocol.png",
                  "XAI.png",
                  "Vemp.png",
                  "Timpi.png",
                  "Taiko.png",
                  "Sophon.png",
                  "SCRIPT_TV.png",
                  "Rivalz.png",
                  "PLayAI.png",
                  "Orichain.png",
                  "Openpad.png",
                  "Nubit.png",
                  "NEURAL_INTERNET.png",
                  "Lumoz.png",
                  "KIP.png",
                  "iAgent.png",
                  "Hychain.png",
                  "HUDDLE.png",
                  "GPUNET.png",
                  "GAM3.png",
                  "FUEL.png",
                  "Farcaster.png",
                  "EMTN.png",
                  "Elixer.png",
                  "EigenLayer.png",
                  "DIN.png",
                  "Celestia.png",
                  "Carv.png",
                  "Babylon.png",
                  "Avail.png",
                  "Ather.png",
                  "Archway.png",
                  "0G.png",
                  "Beam.png",
                ].map((e, a) => {
                  let n = u[e];
                  return (0, o.jsx)(
                    E,
                    {
                      protocol: n,
                      children: (0, o.jsxs)("div", {
                        className:
                          "aspect-square relative flex items-center justify-center p-2 transition-all duration-300 group",
                        style: { border: "1px solid rgba(255, 255, 255, 0.1)" },
                        children: [
                          (0, o.jsx)("img", {
                            src: `/protocolWall/${e}`,
                            alt: n.name,
                            className:
                              "w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 opacity-50 group-hover:opacity-100",
                            width: 100,
                            height: 100,
                            loading: "lazy",
                            decoding: "async",
                          }),
                          (0, o.jsx)(g.P, {
                            borderColor: `border-[${n.color}]`,
                            className:
                              "opacity-30 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                        ],
                      }),
                    },
                    a
                  );
                }),
              }),
            }),
          ],
        });
      }
    },
    44679: () => {},
  },
]);
