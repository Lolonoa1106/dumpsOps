(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6031],
  {
    2467: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => o });
      var t = s(95155);
      s(12115);
      let o = (e) => {
        let { children: r, className: s, id: o } = e;
        return (0, t.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${s}`,
          id: o,
          children: r,
        });
      };
    },
    44677: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => l });
      var t = s(95155),
        o = s(12115),
        a = s(36356);
      let l = () => {
        let [e, r] = (0, o.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, o.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  s = Math.floor(20 * Math.random()) + 10,
                  t = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                r((r) => {
                  let o = [...r];
                  for (let r = e; r < e + s && r < 150; r++) o[r] = t;
                  return o;
                });
              },
              s = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(s);
          }, []),
          (0, t.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, r) =>
              (0, t.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, t.jsx)(a.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, t.jsx)(a.P.div, {
                      className: "h-[1px] w-full -mt-[1px] bg-primary/20",
                      animate: { backgroundColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                  ],
                },
                r
              )
            ),
          })
        );
      };
    },
    47663: (e, r, s) => {
      Promise.resolve().then(s.bind(s, 77579));
    },
    60013: (e, r, s) => {
      "use strict";
      s.d(r, { A: () => a });
      var t = s(95155),
        o = s(36356);
      s(12115);
      let a = (e) => {
        let { className: r = "" } = e;
        return (0, t.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${r}`,
          children: (0, t.jsxs)(o.P.div, {
            className: "absolute inset-0 flex",
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 12, ease: "linear", repeat: 1 / 0 },
            children: [
              (0, t.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, t.jsx)("line", {
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
              (0, t.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, t.jsx)("line", {
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
    77579: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, { default: () => P });
      var t = s(95155);
      s(12115);
      var o = s(2467),
        a = s(75783),
        l = s(67052);
      let i = () =>
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(o.A, {
              className:
                "py-2 h-screen flex flex-col items-center justify-center",
              children: [
                (0, t.jsx)("h1", {
                  className:
                    "text-3xl sm:text-5xl 2xl:text-7xl font-bold text-center max-w-6xl pt-64 md:pt-96",
                  children: "Governance that builds",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-sm sm:text-lg text-primary/60 text-center mt-5 max-w-5xl",
                  children:
                    "DumpOps Governance empowers token holders to propose, vote, and execute decisions that drive real Network evolution. Built on accountability, not abstraction.",
                }),
                (0, t.jsxs)("div", {
                  className:
                    "flex items-center md:flex-row flex-col gap-5 mt-10",
                  children: [
                    (0, t.jsxs)(a.$n, {
                      className: "gap-2",
                      variant: "outline",
                      isStretched: !0,
                      onClick: () =>
                        window.open(
                          "https://nodeops.discourse.group/",
                          "_blank"
                        ),
                      children: [
                        "Discussion forum ",
                        (0, t.jsx)(l.Q, { size: 14 }),
                      ],
                    }),
                    (0, t.jsxs)(a.$n, {
                      className: "gap-2",
                      variant: "secondary",
                      isStretched: !0,
                      onClick: () => {
                        window.open("https://portal.nodeops.network", "_blank");
                      },
                      children: [
                        "Proposal voting ",
                        (0, t.jsx)(l.Q, { size: 14 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("img", {
              src: "/governanceHero.webp",
              alt: "Product Hero",
              className:
                "w-full h-full object-cover absolute top-0 left-0 -z-10",
            }),
          ],
        });
      var n = s(60013),
        c = s(44677),
        d = s(76488),
        x = s(19260),
        m = s(63403);
      let p = [
          {
            icon: (0, t.jsx)(d.A, { size: 34, className: "text-green-500" }),
            extraClass:
              "md:col-span-4 col-span-1 border-b border-t border-primary/10",
            title: "What is DumpOps governance?",
            iconBorder: "border-green-500/10",
            border: "border-green-500",
            bgColor: "bg-green-500/5",
            description:
              "DumpOps governance empowers token holders to actively shape the protocol’s evolution, from staking logic and emissions schedules to economic parameters. Anchored by the $DUMP token, the governance model rewards meaningful contribution and influence is earned, not bought.",
          },
          {
            icon: (0, t.jsx)(x.g, { size: 34, className: "text-purple-500" }),
            title: "Principles of Coordination",
            extraClass:
              "md:col-span-2 col-span-1 md:border-0 border-b border-primary/10",
            iconBorder: "border-purple-500/10",
            border: "border-purple-500",
            bgColor: "bg-purple-500/5",
            description:
              "We built a governance model with accountability built-in by design, powered by revenue-backed tokenomics, and which gives stakeholders visibility across the tech stack. This translates in ecosystem coordination that delivers deliberate, layered decentralization.",
          },
          {
            icon: (0, t.jsx)(m.I, { size: 34, className: "text-yellow-500" }),
            title: "Why it matters",
            extraClass: "md:col-span-2 col-span-1",
            iconBorder: "border-yellow-500/10",
            border: "border-yellow-500",
            bgColor: "bg-yellow-500/5",
            description:
              "Decentralized infrastructure is nothing without trust, and trust has no power without coordination. As we pioneer DePIN 2.0, governance becomes the backbone of enforcement, ensuring that decisions are accountable, mission-aligned, and economically sound.",
          },
        ],
        h = () =>
          (0, t.jsx)(o.A, {
            className: "mt-20 mb-20",
            children: (0, t.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, t.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, t.jsx)("p", {
                    className: "text-3xl",
                    children: "Overview",
                  }),
                }),
                (0, t.jsx)(c.A, {}),
                (0, t.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-4",
                  children: p.map((e, r) =>
                    (0, t.jsxs)(
                      a.Zp,
                      {
                        isBothSide: !0,
                        className: `flex flex-col ${e.extraClass} md:p-10 p-5`,
                        children: [
                          (0, t.jsxs)("div", {
                            className: `border ${e.bgColor} ${e.iconBorder} w-20 h-20 flex items-center justify-center relative`,
                            children: [
                              (0, t.jsx)(a.P, {
                                className: "w-3 h-3",
                                borderColor: e.border,
                                notAllowedCorners: ["top-right", "bottom-left"],
                              }),
                              e.icon,
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-2xl mt-7",
                            children: e.title,
                          }),
                          (0, t.jsx)("p", {
                            className: "text-xl text-primary/50 mt-2",
                            children: e.description,
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          });
      var b = s(66766),
        g = s(35695);
      let j = () => (
          (0, g.useRouter)(),
          (0, t.jsx)(o.A, {
            className: "mt-20 mb-20",
            children: (0, t.jsxs)("div", {
              className:
                "border border-primary/20 relative flex md:flex-row flex-col",
              children: [
                (0, t.jsx)(a.P, { className: "w-6 h-6" }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col justify-between md:p-10 p-5",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("p", {
                          className: "text-3xl",
                          children: "The DePIN 2.0 Governance Manifesto ",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-xl text-primary/50 mt-2",
                          children:
                            "A blueprint for coordinated, purpose-driven governance built to align incentives, reward contribution, and scale with the Network.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(a.$n, {
                      className: "w-fit gap-2",
                      onClick: () => {
                        window.open(
                          `${window.location.origin}/manifesto`,
                          "_blank"
                        );
                      },
                      children: [
                        "View Manifesto ",
                        (0, t.jsx)(l.Q, { size: 14 }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "flex flex-col md:p-10 p-5",
                  children: (0, t.jsx)(b.default, {
                    src: "/governanceManifesto.webp",
                    alt: "governance manifesto",
                    width: 400,
                    height: 400,
                  }),
                }),
              ],
            }),
          })
        ),
        u = () =>
          (0, t.jsxs)(o.A, {
            className: "mt-20 mb-20",
            children: [
              (0, t.jsx)("p", {
                className: "text-3xl",
                children: "How governance works",
              }),
              (0, t.jsxs)("div", {
                className: "border border-primary/10 mt-10",
                children: [
                  (0, t.jsxs)(a.Zp, {
                    isBothSide: !0,
                    className: "flex md:flex-row flex-col",
                    children: [
                      (0, t.jsx)(b.default, {
                        src: "/governance/howGovernance1.png",
                        alt: "how governance works",
                        width: 300,
                        height: 300,
                        className: "md:border-0 border-b border-primary/10",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col gap-4 md:p-10 p-5 border-l border-primary/10",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-2xl font-bold",
                            children: "Tokenholder roles",
                          }),
                          (0, t.jsxs)("p", {
                            className: "text-xl text-primary/50",
                            children: [
                              (0, t.jsx)("span", {
                                className: "font-bold text-primary",
                                children: "Builders",
                              }),
                              " shape the roadmap by proposing feature changes to the product.",
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            className: "text-xl text-primary/50",
                            children: [
                              (0, t.jsx)("span", {
                                className: "font-bold text-primary",
                                children: "Stakers",
                              }),
                              " show commitment through long-term alignment and vote participation",
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            className: "text-xl text-primary/50",
                            children: [
                              (0, t.jsx)("span", {
                                className: "font-bold text-primary",
                                children: "Providers",
                              }),
                              " ensure stability by staking on their ability to provide uptime and posting bonding guarantees.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)(a.Zp, {
                    isBothSide: !0,
                    className:
                      "flex md:flex-row flex-col-reverse border-t border-primary/10",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col gap-4 md:p-10 p-5 border-r border-primary/10",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-2xl font-bold",
                            children: "Voting mechanics",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-xl text-primary/50",
                            children:
                              "Governance is structured to balance fairness, commitment, and contribution",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-xl text-primary/50",
                            children:
                              "Each mechanism is designed to keep the system open, responsive, and grounded in meaningful engagement.",
                          }),
                        ],
                      }),
                      (0, t.jsx)(b.default, {
                        src: "/governance/howGovernance2.png",
                        alt: "how governance works",
                        width: 400,
                        height: 400,
                        className: "md:border-0 border-b border-primary/10",
                      }),
                    ],
                  }),
                  (0, t.jsxs)(a.Zp, {
                    isBothSide: !0,
                    className:
                      "flex md:flex-row flex-col border-t border-primary/10",
                    children: [
                      (0, t.jsx)(b.default, {
                        src: "/governance/howGovernance3.png",
                        alt: "how governance works",
                        width: 400,
                        height: 400,
                        className: "md:border-0 border-b border-primary/10",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col gap-4 md:p-10 p-5 border-l border-primary/10",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-2xl font-bold",
                            children: "Stake-weighted power",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-xl text-primary/50",
                            children:
                              "The longer you stake, the more influence you earn. This design rewards commitment over churn, aligning incentives between protocol growth and long-term holders.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var f = s(21715),
        v = s(38685),
        N = s(56946),
        w = s(76256);
      let y = [
          {
            icon: (0, t.jsx)(f.s, { size: 34, className: "text-green-500" }),
            title: "Governance onboarding guide",
            extraClass: "col-span-2 border-t border-primary/10",
            iconBorder: "border-green-500/10",
            border: "border-green-500",
            bgColor: "bg-green-500/5",
            description: (0, t.jsxs)("span", {
              children: [
                "Get started with a few simple steps:",
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { className: "font-bold", children: "1." }),
                " Connect your wallet",
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { className: "font-bold", children: "2." }),
                " Verify your identity with Privado",
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { className: "font-bold", children: "3." }),
                " Stake $DUMP",
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { className: "font-bold", children: "4." }),
                " Join your first vote or discussion",
              ],
            }),
          },
          {
            icon: (0, t.jsx)(v.S, { size: 34, className: "text-yellow-500" }),
            title: "Delegate hub",
            extraClass: "col-span-2 border-t border-primary/10",
            iconBorder: "border-yellow-500/10",
            border: "border-yellow-500",
            bgColor: "bg-yellow-500/5",
            isComingSoon: !0,
            description:
              "Prefer to support trusted participants? Delegate your voting power to coordinators aligned with your values. Track their activity, statements, and participation history.",
          },
          {
            icon: (0, t.jsx)(N.V, { size: 34, className: "text-purple-500" }),
            title: "Voting portal",
            extraClass: "col-span-2 border-t border-primary/10",
            iconBorder: "border-purple-500/10",
            border: "border-purple-500",
            bgColor: "bg-purple-500/5",
            isVotingPortal: !0,
            description: (0, t.jsx)("span", {
              children:
                "One interface for everything you need: current proposals, archived outcomes, and what's coming next.",
            }),
          },
          {
            icon: (0, t.jsx)(w.p, { size: 34, className: "text-accent" }),
            title: "Join the forum",
            extraClass: "col-span-2 border-t border-primary/10",
            iconBorder: "border-accent/10",
            border: "border-accent",
            bgColor: "bg-accent/5",
            description:
              "The DumpOps Forum is where coordination takes shape. From emissions planning to validator policy, every stakeholder has a seat at the table.",
          },
        ],
        k = () =>
          (0, t.jsx)(o.A, {
            className: "mt-20 mb-20",
            children: (0, t.jsxs)("div", {
              className: "border border-primary/20",
              children: [
                (0, t.jsx)("div", {
                  className: "flex flex-col p-5 md:p-10",
                  children: (0, t.jsx)("p", {
                    className: "text-3xl",
                    children: "Participate",
                  }),
                }),
                (0, t.jsx)(c.A, {}),
                (0, t.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-4",
                  children: y.map((e, r) =>
                    (0, t.jsxs)(
                      a.Zp,
                      {
                        isBothSide: !0,
                        className: `flex flex-col ${e.extraClass} md:p-10 p-5`,
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, t.jsxs)("div", {
                                className: `border ${e.bgColor} ${e.iconBorder} w-20 h-20 flex items-center justify-center relative`,
                                children: [
                                  (0, t.jsx)(a.P, {
                                    className: "w-3 h-3",
                                    borderColor: e.border,
                                    notAllowedCorners: [
                                      "top-right",
                                      "bottom-left",
                                    ],
                                  }),
                                  e.icon,
                                ],
                              }),
                              e.isComingSoon &&
                                (0, t.jsx)(a.$n, {
                                  disabled: !0,
                                  variant: "outline",
                                  className: "text-xs",
                                  children: "Coming soon",
                                }),
                              e.isVotingPortal &&
                                (0, t.jsxs)(a.$n, {
                                  variant: "outline",
                                  className: "gap-2",
                                  onClick: () =>
                                    window.open(
                                      "https://portal.nodeops.network",
                                      "_blank"
                                    ),
                                  children: [
                                    "Enter Voting Portal ",
                                    (0, t.jsx)(l.Q, { size: 16 }),
                                  ],
                                }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "text-2xl mt-7",
                            children: e.title,
                          }),
                          (0, t.jsx)("p", {
                            className: "text-xl text-primary/50 mt-2",
                            children: e.description,
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          }),
        C = [
          {
            title: "Emissions schedule & unlocks",
            description:
              "See how emissions evolve over time—calibrated to revenue, burn ratios, and protocol milestones. All data is transparent and onchain.",
            link: "/tokenomics?tab=release-schedule",
            ctaText: "View Simulator",
          },
          {
            title: "Governance deep dive",
            description:
              "Get a detailed breakdown of how DumpOps governance works, from voting mechanics to proposal flow and staking logic. Everything you need to participate with confidence, all in one place.",
            link: "https://docs.nodeops.network/Tokenomics/governance",
            ctaText: "View docs",
            isExternal: !0,
          },
        ],
        A = () => {
          let e = (0, g.useRouter)();
          return (0, t.jsxs)(o.A, {
            className: "mt-20 mb-20",
            children: [
              (0, t.jsx)("p", {
                className: "text-3xl text-center",
                children: "Resources",
              }),
              (0, t.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-10 mt-10",
                children: C.map((r, s) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "md:p-10 p-5 flex flex-col justify-between border border-primary/10 relative",
                      children: [
                        (0, t.jsx)(a.P, { className: "w-5 h-5" }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-2xl font-bold",
                              children: r.title,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-xl text-primary/50",
                              children: r.description,
                            }),
                          ],
                        }),
                        r.ctaText &&
                          (0, t.jsxs)(a.$n, {
                            className: "gap-2 mt-10 w-fit",
                            onClick: () =>
                              r.isExternal
                                ? window.open(r.link, "_blank")
                                : e.push(r.link),
                            children: [
                              r.ctaText,
                              " ",
                              (0, t.jsx)(l.Q, { size: 16 }),
                            ],
                          }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          });
        },
        P = () =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(i, {}),
              (0, t.jsx)(o.A, {
                className: "my-20",
                children: (0, t.jsx)(n.A, {}),
              }),
              (0, t.jsx)(h, {}),
              (0, t.jsx)(o.A, {
                className: "my-20",
                children: (0, t.jsx)(n.A, {}),
              }),
              (0, t.jsx)(j, {}),
              (0, t.jsx)(o.A, {
                className: "my-20",
                children: (0, t.jsx)(n.A, {}),
              }),
              (0, t.jsx)(u, {}),
              (0, t.jsx)(o.A, {
                className: "my-20",
                children: (0, t.jsx)(n.A, {}),
              }),
              (0, t.jsx)(k, {}),
              (0, t.jsx)(o.A, {
                className: "my-20",
                children: (0, t.jsx)(n.A, {}),
              }),
              (0, t.jsx)(A, {}),
            ],
          });
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [5753, 6766, 2251, 5783, 8441, 1684, 7358], () => r(47663)),
      (_N_E = e.O());
  },
]);
