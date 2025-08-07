(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7255],
  {
    203: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => k });
      var r = s(95155),
        i = s(2467),
        a = s(60013),
        l = s(12115);
      let n = [
          {
            title: "Merit",
            description:
              "Influence is earned, not granted. Governance participation scales with your Network contributions: running reliable Nodes, building products, maintaining 99.9% uptime. Actions speak louder than words.",
          },
          {
            title: "Agility",
            description:
              "No static system can survive real-world shocks. NodeOps Network governance adapts on multiple timeframes, from emergency changes to long-term strategy, keeping the Network responsive and resilient.",
          },
          {
            title: "Signal",
            description:
              "Tension between builders, operators, users, and token holders is not failure — it is information. Governance should turn disagreement into better outcomes, not suppress it.",
          },
          {
            title: "Stewardship",
            description:
              "Neither plutocracy nor mob rule will sustain infrastructure. NodeOps Network rewards contributors with voice and voting power, aligning long-term incentives to protect the Network's health and sustainability.",
          },
          {
            title: "Coordination",
            description:
              "A Network that decides and adapts quickly will always beat one trapped in endless debate. Governance is coordination technology, helping decisions translate into operational action.",
          },
          {
            title: "Evolution",
            description:
              "NodeOps Network governance improves continuously. Learning beats winning. Mistakes become data. Feedback refines the system. Resilience grows with every cycle.",
          },
        ],
        o = () => (
          Array.from({ length: 7 }, (e, t) => t),
          (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)("h2", {
                className: "md:text-5xl text-3xl",
                children: "Core Principles",
              }),
              (0, r.jsx)("div", {
                className: "flex flex-col mt-10 border border-primary/10",
                children: n?.map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "flex flex-col",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "bg-accent/10 px-4 md:px-6 py-4 border-b border-t border-primary/5 border-x-4 border-x-accent flex flex-row justify-between",
                          children: (0, r.jsx)("h3", {
                            className: "md:text-3xl text-xl",
                            children: e.title,
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "md:text-2xl text-lg md:p-6 p-4",
                          children: e.description,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          })
        );
      var c = s(19280),
        d = s(71780),
        x = s(70881),
        p = s(97178);
      let h = (e) => {
        let { children: t } = e,
          s = (0, l.useRef)(null),
          { scrollYProgress: i } = (0, d.L)({
            target: s,
            offset: ["start end", "end start"],
          }),
          a = (0, x.G)(i, (e) => 100 * e),
          n = (0, p.z)(a, { stiffness: 120, damping: 20 });
        return (0, r.jsx)("div", {
          className: "border border-primary/10 mt-36",
          ref: s,
          children: (0, r.jsxs)("div", {
            className: "lg:flex ",
            children: [
              (0, r.jsx)(c.A, {
                position: "left",
                progress: n,
                className: "w-64 top-32",
              }),
              (0, r.jsx)("div", {
                className: "border-l border-r border-primary/10 w-full",
                children: t,
              }),
              (0, r.jsx)(c.A, {
                position: "right",
                progress: n,
                className: "w-64 top-32",
              }),
            ],
          }),
        });
      };
      var m = s(75783),
        f = s(40402),
        _ = s(67052);
      let u = () =>
        (0, r.jsxs)("div", {
          className:
            "border border-primary/10 p-6 relative shadow-[0_12px_20px_#ffffff08_inset,0_0_40px_#ffffff14_inset,0_0_8px_#ffffff08_inset,0_0_12px_#ffffff0d_inset,0_1px_1px_#ffffff1f_inset] ",
          children: [
            (0, r.jsx)(f.P, { className: "w-4 h-4" }),
            (0, r.jsx)("p", {
              className: "md:text-2xl text-lg",
              children:
                "There is no time for complacency. Infrastructure is too critical to leave to chance or centralization.",
            }),
            (0, r.jsx)("p", {
              className: "md:text-lg text-primary/50 mt-4",
              children:
                "We invite every operator, builder, user, and stakeholder to help shape a Network that governs itself wisely, scales sustainably, and rewards those who contribute.",
            }),
            (0, r.jsxs)(m.$n, {
              onClick: () => {
                window.open(
                  "https://docs.nodeops.network/Tokenomics",
                  "_blank"
                );
              },
              variant: "outline",
              className: "gap-2 mt-5 w-fit",
              children: [
                "Join us. Coordinate. At scale. ",
                (0, r.jsx)(_.Q, { className: "w-4 h-4" }),
              ],
            }),
          ],
        });
      var g = s(5765),
        w = s(63403),
        v = s(38685),
        N = s(72105);
      let b = [
          {
            icon: (0, r.jsx)(w.I, { size: 24, color: "#38C793" }),
            description:
              "Decentralized infrastructure is governed by those who build and maintain it.",
            color: "#38C793",
          },
          {
            icon: (0, r.jsx)(v.S, { size: 24, color: "#FFB045" }),
            description:
              "Stakeholders coordinate seamlessly across economic, technical, and security layers.",
            color: "#FFB045",
          },
          {
            icon: (0, r.jsx)(N.O, { size: 24, color: "#7D52F4" }),
            description:
              "Governance empowers contributors while protecting users.",
            color: "#7D52F4",
          },
        ],
        j = () =>
          (0, r.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, r.jsx)("h2", {
                className: "md:text-5xl text-3xl",
                children: "North Star",
              }),
              (0, r.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-10",
                children: b?.map((e, t) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className:
                        "flex flex-col border border-primary/10 p-6 relative",
                      children: [
                        (0, r.jsx)(m.P, { className: "w-4 h-4" }),
                        (0, r.jsxs)("div", {
                          className: (0, g.cn)(
                            "p-2.5 w-fit flex justify-center items-center relative",
                            "border",
                            {
                              "border-[#38C793]/20 shadow-[0_12px_20px_#38C79308_inset,0_0_40px_#38C79314_inset,0_0_8px_#38C79308_inset,0_0_12px_#38C7930d_inset,0_1px_1px_#38C7931f_inset]":
                                "#38C793" === e.color,
                              "border-[#FFB045]/20 shadow-[0_12px_20px_#FFB04508_inset,0_0_40px_#FFB04514_inset,0_0_8px_#FFB04508_inset,0_0_12px_#FFB0450d_inset,0_1px_1px_#FFB0451f_inset]":
                                "#FFB045" === e.color,
                              "border-[#7D52F4]/20 shadow-[0_12px_20px_#7D52F408_inset,0_0_40px_#7D52F414_inset,0_0_8px_#7D52F408_inset,0_0_12px_#7D52F40d_inset,0_1px_1px_#7D52F41f_inset]":
                                "#7D52F4" === e.color,
                            }
                          ),
                          children: [
                            e.icon,
                            (0, r.jsx)(m.P, {
                              notAllowedCorners: ["top-right", "bottom-left"],
                              borderColor: `border-[${e.color}]`,
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "text-lg mt-4",
                          children: e.description,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, r.jsx)("p", {
                className: "md:text-2xl text-lg mt-6",
                children:
                  "NodeOps Network is building the governance backbone for the next era of Internet infrastructure.",
              }),
            ],
          });
      var y = s(66766);
      let k = () =>
        (0, r.jsx)(h, {
          children: (0, r.jsxs)("div", {
            className: "flex flex-col py-10 md:px-12 px-6",
            children: [
              (0, r.jsx)(y.default, {
                src: "/manifestohero.png",
                alt: "Governance",
                width: 1e3,
                height: 1e3,
                className: "w-full h-full object-cover",
              }),
              (0, r.jsx)("p", {
                className: "md:text-2xl text-lg mt-10",
                children:
                  "Infrastructure doesn’t govern itself. Coordination does.",
              }),
              (0, r.jsx)("p", {
                className: "md:text-2xl text-lg mt-10",
                children:
                  "We stand at the threshold of a new digital era, where running global, decentralized infrastructure at scale demands more than ideals — it demands principled, practical governance.",
              }),
              (0, r.jsx)("p", {
                className: "md:text-2xl text-lg mt-10",
                children:
                  "NodeOps Network is built to meet this challenge, proving that a well-coordinated Network can grow stronger under pressure rather than fragmenting.",
              }),
              (0, r.jsx)(i.A, {
                className: "my-20",
                children: (0, r.jsx)(a.A, {}),
              }),
              (0, r.jsx)(o, {}),
              (0, r.jsx)(i.A, {
                className: "my-20",
                children: (0, r.jsx)(a.A, {}),
              }),
              (0, r.jsx)(j, {}),
              (0, r.jsx)(i.A, {
                className: "my-20",
                children: (0, r.jsx)(a.A, {}),
              }),
              (0, r.jsx)(u, {}),
            ],
          }),
        });
    },
    2467: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(95155);
      s(12115);
      let i = (e) => {
        let { children: t, className: s, id: i } = e;
        return (0, r.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${s}`,
          id: i,
          children: t,
        });
      };
    },
    19280: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var r = s(95155);
      s(12115);
      var i = s(70881),
        a = s(36356),
        l = s(5765);
      let n = (e) => {
        let { position: t, progress: s, className: n } = e,
          o = (0, i.G)(s, (e) => -((e / 100) * 400)),
          c = (0, i.G)(s, (e) => `${Math.round(e)}%`);
        return (0, r.jsxs)("div", {
          className: (0, l.cn)(
            "w-full h-full sticky top-20 lg:flex hidden flex-col items-center justify-center",
            n
          ),
          children: [
            (0, r.jsx)(a.P.span, {
              className: "text-primary/50 mb-4 mt-4",
              animate: {},
              children: c,
            }),
            (0, r.jsx)("div", {
              style: { width: 16 },
              className: "overflow-hidden relative h-[calc(100vh-80px)]",
              children: (0, r.jsx)(a.P.div, {
                style: {
                  position: "absolute",
                  top: o,
                  left: 0,
                  width: "100%",
                  height: 800,
                },
                children: [...Array(144)].map((e, t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      style: {
                        height: 8.333333333333334,
                        opacity: t % 12 == 0 ? 1 : 0.5,
                        width: t % 2 == 0 ? 16 : 10,
                        marginLeft: 4 * (t % 2 != 0),
                      },
                      className: (0, l.cn)(
                        "border-primary/50",
                        t % 12 == 0 ? "border-b-[0.5px]" : "border-b-[0.25px]"
                      ),
                    },
                    t
                  )
                ),
              }),
            }),
          ],
        });
      };
    },
    60013: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      var r = s(95155),
        i = s(36356);
      s(12115);
      let a = (e) => {
        let { className: t = "" } = e;
        return (0, r.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, r.jsxs)(i.P.div, {
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
    90519: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 203));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [5753, 6766, 1780, 9188, 5783, 8441, 1684, 7358], () => t(90519)),
      (_N_E = e.O());
  },
]);
