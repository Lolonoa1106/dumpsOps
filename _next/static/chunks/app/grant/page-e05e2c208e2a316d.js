(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8403],
  {
    2467: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var s = r(95155);
      r(12115);
      let a = (e) => {
        let { children: t, className: r, id: a } = e;
        return (0, s.jsx)("div", {
          className: `max-w-screen-xl container mx-auto px-4 ${r}`,
          id: a,
          children: t,
        });
      };
    },
    8619: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => n });
      var s = r(60098),
        a = r(12115),
        i = r(51508),
        l = r(82885);
      function n(e) {
        let t = (0, l.M)(() => (0, s.OQ)(e)),
          { isStatic: r } = (0, a.useContext)(i.Q);
        if (r) {
          let [, r] = (0, a.useState)(e);
          (0, a.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
    19280: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var s = r(95155);
      r(12115);
      var a = r(70881),
        i = r(36356),
        l = r(5765);
      let n = (e) => {
        let { position: t, progress: r, className: n } = e,
          o = (0, a.G)(r, (e) => -((e / 100) * 400)),
          c = (0, a.G)(r, (e) => `${Math.round(e)}%`);
        return (0, s.jsxs)("div", {
          className: (0, l.cn)(
            "w-full h-full sticky top-20 lg:flex hidden flex-col items-center justify-center",
            n
          ),
          children: [
            (0, s.jsx)(i.P.span, {
              className: "text-primary/50 mb-4 mt-4",
              animate: {},
              children: c,
            }),
            (0, s.jsx)("div", {
              style: { width: 16 },
              className: "overflow-hidden relative h-[calc(100vh-80px)]",
              children: (0, s.jsx)(i.P.div, {
                style: {
                  position: "absolute",
                  top: o,
                  left: 0,
                  width: "100%",
                  height: 800,
                },
                children: [...Array(144)].map((e, t) =>
                  (0, s.jsx)(
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
    28274: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Z });
      var s = r(95155),
        a = r(12115),
        i = r(71780),
        l = r(70881),
        n = r(97178),
        o = r(19280),
        c = r(2467),
        d = r(60013),
        m = r(36356),
        p = r(60760),
        x = r(40402),
        h = r(5765);
      function u(e) {
        let {
          title: t,
          content: r,
          isOpen: a,
          onClick: i,
          outline: l = !0,
          num: n,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, h.cn)(
            "relative w-full",
            l && "border border-primary/10 bg-background"
          ),
          children: [
            (0, s.jsxs)("button", {
              className: (0, h.cn)(
                "w-full flex items-center justify-between p-4 text-left font-medium transition-colors relative text-sm sm:text-base",
                a && "bg-primary/5"
              ),
              onClick: i,
              children: [
                (0, s.jsxs)("span", { children: [n + 1, ". ", t] }),
                (0, s.jsx)(m.P.span, {
                  animate: { rotate: 0 },
                  transition: { duration: 0.2 },
                  className: "ml-2 flex items-center justify-center w-6 h-6",
                  children: a
                    ? (0, s.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("rect", {
                          x: "5",
                          y: "11",
                          width: "14",
                          height: "2",
                          rx: "1",
                          fill: "currentColor",
                          className: "text-primary/60",
                        }),
                      })
                    : (0, s.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, s.jsx)("rect", {
                            x: "11",
                            y: "5",
                            width: "2",
                            height: "14",
                            rx: "1",
                            fill: "currentColor",
                            className: "text-primary/60",
                          }),
                          (0, s.jsx)("rect", {
                            x: "5",
                            y: "11",
                            width: "14",
                            height: "2",
                            rx: "1",
                            fill: "currentColor",
                            className: "text-primary/60",
                          }),
                        ],
                      }),
                }),
              ],
            }),
            (0, s.jsx)(p.N, {
              initial: !1,
              children:
                a &&
                (0, s.jsx)(m.P.div, {
                  initial: { opacity: 0, scale: 0.98, height: 0 },
                  animate: { opacity: 1, scale: 1, height: "auto" },
                  exit: { opacity: 0, scale: 0.98, height: 0 },
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                  className: "overflow-hidden px-0 pb-0",
                  children: (0, s.jsx)("div", {
                    className: "relative px-4 pb-4 bg-primary/5",
                    children: (0, s.jsx)("div", {
                      className: "relative z-10 text-primary/50",
                      children: r,
                    }),
                  }),
                }),
            }),
            l && (0, s.jsx)(x.P, {}),
          ],
        });
      }
      function g(e) {
        let {
            items: t,
            allowMultipleOpen: r = !1,
            outline: i = !0,
            className: l,
          } = e,
          [n, o] = (0, a.useState)([]),
          c = (e) => {
            o((t) =>
              r
                ? t.includes(e)
                  ? t.filter((t) => t !== e)
                  : [...t, e]
                : t.includes(e)
                ? []
                : [e]
            );
          };
        return (0, s.jsx)("div", {
          className: (0, h.cn)("w-full", l),
          children: t.map((e, t) =>
            (0, s.jsx)(
              u,
              {
                title: e.title,
                content: e.content,
                isOpen: n.includes(t),
                onClick: () => c(t),
                outline: i,
                num: t,
              },
              t
            )
          ),
        });
      }
      let f = [
          {
            title: "What's the total grant amount for Wave 1?",
            content:
              "The total grant pool for  Wave 1 is $3 Million, which will be allocated across the applicant group on a case-by-case basis in $NODE tokens and NodeOps Infra Credits, based on project scope and milestones.",
          },
          {
            title: "How is the grant issued?",
            content:
              "Grants are issued on a milestone basis, with allocations released as key development checkpoints are met, ensuring aligned growth and support as you build.",
          },
          {
            title: "Who can apply?",
            content:
              "Builders, developers, early-stage teams, solo developers, anyone with a strong use case on NodeOps infra.",
          },
          {
            title: "What infra access do I get?",
            content:
              "You'll get credits to use in the Marketplace app and priority access to NodeOps Cloud, RPC, Validators, and Console tools.",
          },
          {
            title: "How long do I have to build?",
            content:
              "There's no time requirement set. Most teams build over 2–6 months with syncs and support along the way.",
          },
          {
            title: "Will there be future waves?",
            content:
              "Yes, Wave 2 is already in planning. Wave 1 is your early access opportunity.",
          },
          {
            title:
              "Does receiving a grant in Wave 1 prevent me from applying for a grant in Wave 2?",
            content:
              "No, receiving a grant in Wave 1 does not prevent you from applying again in Wave 2.",
          },
        ],
        b = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d.A, { className: "mt-16" }),
              (0, s.jsxs)("div", {
                className: "flex flex-col py-20",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-xl sm:text-3xl font-bold text-center",
                    children: "FAQs for grant program",
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-10 md:px-10",
                    children: (0, s.jsx)(g, { items: f }),
                  }),
                ],
              }),
            ],
          });
      var y = r(75783),
        w = r(67052),
        v = r(84070);
      let N = () => {
        let { openFormModal: e } = (0, v.V)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(c.A, {
              className:
                "py-2 h-screen flex flex-col items-center justify-center",
              children: [
                (0, s.jsx)("h1", {
                  className:
                    "text-4xl sm:text-6xl lg:text-8xl font-bold text-center max-w-6xl pt-64 md:pt-96",
                  children: "Build On NodeOps",
                }),
                (0, s.jsx)("p", {
                  className:
                    "text-2xl sm:text-4xl md:text-6xl text-center font-bold text-primary/50 mt-5",
                  children: "The $3 Million Grant Program",
                }),
                (0, s.jsx)("p", {
                  className:
                    "sm:text-2xl text-center mt-5 max-w-5xl text-primary/50",
                  children: "Powered by NodeOps Network",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center md:flex-row flex-col gap-5 mt-10",
                  children: [
                    (0, s.jsxs)(y.$n, {
                      className: "gap-2",
                      variant: "outline",
                      isStretched: !0,
                      onClick: () => {
                        let e = document.getElementById("what-build");
                        if (e) {
                          let t =
                            e.getBoundingClientRect().top +
                            window.pageYOffset -
                            128;
                          window.scrollTo({ top: t, behavior: "smooth" });
                        }
                      },
                      children: [
                        "Explore inspiration hub ",
                        (0, s.jsx)(w.Q, { size: 14 }),
                      ],
                    }),
                    (0, s.jsxs)(y.$n, {
                      className: "gap-2",
                      variant: "secondary",
                      isStretched: !0,
                      onClick: () =>
                        e(
                          "https://forms.zohopublic.in/parthnod1/form/BuildOnNodeOpsGrantProgram/formperma/A0j6q-ChMzEUldiqrQNDrkyk7iIaIwmb_6swORtbUqc"
                        ),
                      children: [
                        "Apply for a grant ",
                        (0, s.jsx)(w.Q, { size: 14, className: "-rotate-45" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("img", {
              src: "/grantHero.webp",
              alt: "Product Hero",
              className:
                "w-full h-full object-cover absolute top-0 left-0 -z-10",
            }),
          ],
        });
      };
      var j = r(44912);
      let k = () => {
        let { openFormModal: e } = (0, v.V)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(d.A, { className: "mt-16" }),
            (0, s.jsx)("div", {
              className: "mt-10 md:px-10",
              children: (0, s.jsxs)("div", {
                className:
                  "border border-primary/10 relative flex md:flex-row flex-col gap-10",
                children: [
                  (0, s.jsx)(y.P, {}),
                  (0, s.jsxs)("div", {
                    className: "md:w-2/3 w-full md:p-10 p-5",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-xl sm:text-3xl max-w-sm",
                        children:
                          "Ready to build? Apply now and get funded to launch",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-primary/50 text-sm sm:text-lg mt-4 max-w-xl",
                        children:
                          "Outline your project, team, and intended use of NodeOps Network’s infra. We’ll review and assign an advisor to help you kick off.",
                      }),
                      (0, s.jsxs)(j.$, {
                        className: "mt-16 gap-1",
                        variant: "outline",
                        onClick: () => {
                          e(
                            "https://forms.zohopublic.in/parthnod1/form/BuildOnNodeOpsGrantProgram/formperma/A0j6q-ChMzEUldiqrQNDrkyk7iIaIwmb_6swORtbUqc"
                          );
                        },
                        children: [
                          "Apply to Build On NodeOps",
                          (0, s.jsx)(w.Q, {
                            size: 20,
                            className: "text-primary/60",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "md:w-1/3 w-full",
                    children: (0, s.jsx)("img", {
                      src: "/qrScan.webp",
                      alt: "qr-code",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var L = r(39898);
      let C = new Map([
        [
          "bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z",
            })
          ),
        ],
        [
          "duotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M112,56V200L40,128Z",
              opacity: "0.2",
            }),
            a.createElement("path", {
              d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z",
            })
          ),
        ],
        [
          "fill",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "light",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z",
            })
          ),
        ],
        [
          "regular",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z",
            })
          ),
        ],
        [
          "thin",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z",
            })
          ),
        ],
      ]);
      var O = Object.defineProperty,
        A = Object.defineProperties,
        z = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        P = (e, t, r) =>
          t in e
            ? O(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        S = (e, t) => {
          for (var r in t || (t = {})) T.call(t, r) && P(e, r, t[r]);
          if (E) for (var r of E(t)) I.call(t, r) && P(e, r, t[r]);
          return e;
        },
        M = (e, t) => A(e, z(t));
      let B = (0, a.forwardRef)((e, t) =>
        a.createElement(L.A, M(S({ ref: t }, e), { weights: C }))
      );
      B.displayName = "ArrowLeft";
      var F = r(6874),
        D = r.n(F);
      let W = [
          { id: "2", label: "AI & Agents" },
          { id: "3", label: "Gaming & Experience Layers" },
          { id: "6", label: "Core DePIN Infrastructure" },
          { id: "4", label: "Dev Tools & Infra" },
          { id: "5", label: "Web2 Meets Web3" },
          { id: "1", label: "The Template Library" },
        ],
        G = {
          1: [
            {
              title: "The Template Library",
              desc: "Design a suite of high-quality, plug-and-play templates that accelerate how teams build on NodeOps Network. These templates should simplify complex setups, promote best practices, and enable developers to launch faster with minimal configuration. Set the foundation others will rely on to build with confidence.",
              img: "/grant/template/1.png",
              ctaText: "View Template ideas",
              ctaLink:
                "https://nodeopsxyz.notion.site/ebd/2001e446bb3880dfa5e1ff9b66445cb4",
              isEmbed: !0,
            },
          ],
          2: [
            {
              title: "Autonomous agents toolkit",
              desc: "Build modular deployment and control tools for AI agents using NodeOps Agent Terminal. Enable real-time feedback, task execution, or inter-agent collaboration. Think of it as an open-source framework for decentralized GPT-style agents that can interact with APIs, data, or each other.",
              img: "/grant/agents/1.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "AI & ML model hosting",
              desc: "Host decentralized Machine Learning workloads and inference models using NodeOps cloud. Whether you're fine-tuning LLMs or building AI-powered dApps, NodeOps Network provides the backend to run high-intensity Compute without centralized bottlenecks.",
              img: "/grant/agents/2.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Simulated systems & behavior models",
              desc: "Design agent-based simulations, economic behavior models, or physics engines. Ideal for climate data modeling, social simulations, or decentralized network testing environments. Make them modular so others can fork and iterate.",
              img: "/grant/agents/3.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
          ],
          3: [
            {
              title: "Build2Play: DePIN gaming toolkits",
              desc: "Create game frameworks that use decentralized logic or serve in-game assets from NodeOps Network’s infrastructure. From matchmaking Nodes to tokenized scoreboards, bring DePIN and gameplay together.",
              img: "/grant/gaming/1.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "All-in-one streaming layer",
              desc: "Create a decentralized, full-featured streaming platform built on NodeOps Network. Combine live encoding, token-gated access, tipping, and community interaction into one seamless experience. Ideal for gaming, creator content, or AI-driven broadcasts — without relying on centralized infrastructure.",
              img: "/grant/gaming/2.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Audio and video generators",
              desc: "Build tools that let users create audio or video content using pre-built, customizable templates. Think of platforms where creators can generate music tracks, voiceovers, or short-form videos in just a few clicks. Your goal is to simplify content creation while giving users creative control through AI-powered templates hosted on NodeOps Network.",
              img: "/grant/gaming/3.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Meme machines and SocialFi widgets",
              desc: "Build viral content engines like meme creators, SocialFi bots, or influencer dashboards. Include gamification, tokenized incentives, or creator-based crediting systems.",
              img: "/grant/gaming/4.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
          ],
          4: [
            {
              title: "Validator CLI wizard",
              desc: "Simplify validator deployment through a one-line CLI wizard. Include automatic configuration, monitoring, and chain-specific options to deploy validators with zero friction.",
              img: "/grant/devtool/1.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Agent Terminal deployment tool",
              desc: "Wrap NodeOps Network’s Agent Terminal into an easy-to-use GUI. Add version control, memory settings, plugin integrations, and real-time logs for agents built on NodeOps Network.",
              img: "/grant/devtool/2.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Chrome extensions and browser bots",
              desc: "Build browser tools that serve on-chain users or DAOs. Think bots that auto-submit proposals, monitor wallets, or offer real-time interactions powered by NodeOps in the background.",
              img: "/grant/devtool/3.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
          ],
          5: [
            {
              title: "Distributed Compute for Web2 workloads",
              desc: "Build a system that translates traditional Compute jobs into decentralized executions. Examples include media encoding, batch processing, or ETL pipelines. Consider simplifying the UX with drag-and-drop job submissions.",
              img: "/grant/web2/1.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Data analytics toolkits",
              desc: "Design analytics dashboards for Protocols, validators, or app ecosystems. Consider including chain health metrics, usage insights, or builder behavior with optional AI-assisted summaries.",
              img: "/grant/web2/2.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
          ],
          6: [
            {
              title: "NodeOps Cloud native tools",
              desc: "Create usage visualizers, credit monitors, or orchestration UIs for teams using NodeOps Cloud. Consider how tools could simplify deployment, optimization, and tracking.",
              img: "/grant/depin/1.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Decentralized rendering engines",
              desc: "Use GPU resources to offer on-demand rendering for AR, VR, game engines, or creative tools. Build client-facing SDKs that plug into design workflows or Web3 gaming.",
              img: "/grant/depin/2.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Decentralized storage interfaces",
              desc: "Design access layers, SDKs, or UIs that plug into decentralized storage networks like IPFS or Filecoin. Focus on usability and verifiability.",
              img: "/grant/depin/3.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
            {
              title: "Energy grid simulations and sustainability models",
              desc: "Are you a builder in ReFi, IoT, or supply chain industries? Consider using NodeOps Network Compute credits to model real-world energy grids, simulate usage, or analyze ESG metrics. ",
              img: "/grant/depin/4.png",
              ctaText: "Learn more",
              ctaLink: "",
            },
          ],
        },
        $ = () => {
          let [e, t] = (0, a.useState)(W[0].id),
            r = (0, a.useRef)(null),
            [i, l] = (0, a.useState)(!1),
            [n, o] = (0, a.useState)(!1),
            { openFormModal: c } = (0, v.V)(),
            m = () => {
              let e = r.current;
              e &&
                (l(e.scrollLeft > 0),
                o(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
            };
          (0, a.useEffect)(() => {
            m();
            let e = r.current;
            if (e)
              return (
                e.addEventListener("scroll", m),
                window.addEventListener("resize", m),
                () => {
                  e.removeEventListener("scroll", m),
                    window.removeEventListener("resize", m);
                }
              );
          }, []);
          let p = (e) => {
            let t = r.current;
            t &&
              t.scrollBy({
                left: "right" === e ? 100 : -100,
                behavior: "smooth",
              });
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d.A, { className: "mt-16" }),
              (0, s.jsxs)("div", {
                className: "flex flex-col py-20",
                id: "what-build",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row justify-between gap-5 md:px-10",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "text-xl sm:text-3xl",
                            children: "Build what matters",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-primary/50 text-sm sm:text-2xl mt-4 max-w-4xl",
                            children:
                              "NodeOps is for builders who are done chasing hype and ready to ship products that work. Whether you're in AI, DePIN, or decentralized coordination, we want to support ideas with substance.",
                          }),
                        ],
                      }),
                      (0, s.jsx)(D(), {
                        href: "https://app.gitbook.com",
                        target: "_blank",
                        children: (0, s.jsxs)(y.$n, {
                          variant: "outline",
                          className: "gap-2 text-sm sm:text-base",
                          children: [
                            "View Docs",
                            (0, s.jsx)(w.Q, { size: 16 }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-10 hide-scrollbar relative md:px-10",
                    children: [
                      i &&
                        (0, s.jsx)("div", {
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-background via-background/80 to-transparent pr-4 flex items-center h-full cursor-pointer z-10",
                          onClick: () => p("left"),
                          children: (0, s.jsx)(B, {
                            size: 24,
                            className: "text-primary/60",
                          }),
                        }),
                      (0, s.jsx)(y.tU, {
                        tabs: W,
                        onChange: (e) => t(e),
                        scrollRef: r,
                        activeTab: e,
                      }),
                      n &&
                        (0, s.jsx)("div", {
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-l from-background via-background/80 to-transparent pl-4 flex items-center h-full cursor-pointer z-10",
                          onClick: () => p("right"),
                          children: (0, s.jsx)(w.Q, {
                            size: 24,
                            className: "text-primary/60",
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-10 md:px-10",
                    children: G[e].map((t, r) =>
                      (0, s.jsxs)(
                        y.Zp,
                        {
                          isBothSide: !0,
                          className:
                            "flex md:flex-row flex-col gap-10 p-10 border-b border-t border-primary/10",
                          leftLinePositions: ["top"],
                          rightLinePositions: ["bottom"],
                          topLineHeight: "h-24",
                          bottomLineHeight: "h-24",
                          children: [
                            (0, s.jsx)("div", {
                              className: "md:w-1/3 w-full h-64",
                              children: (0, s.jsx)("img", {
                                src: t.img,
                                alt: t.title,
                                className: "w-full h-full object-contain",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "md:w-2/3 w-full flex flex-col justify-between",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "text-2xl",
                                      children: t.title,
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-primary/50 sm:text-lg mt-4",
                                      children: t.desc,
                                    }),
                                  ],
                                }),
                                t?.isEmbed &&
                                  (0, s.jsxs)(y.$n, {
                                    className:
                                      "mt-6 w-fit text-sm sm:text-base",
                                    variant: "outline",
                                    onClick: () => {
                                      t.isEmbed
                                        ? c(t.ctaLink)
                                        : window.open(t.ctaLink, "_blank");
                                    },
                                    children: [
                                      t.ctaText,
                                      (0, s.jsx)(w.Q, {
                                        size: 24,
                                        className: "text-primary/60",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        `${e}-${r}`
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        H = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d.A, { className: "mt-16" }),
              (0, s.jsxs)("div", {
                className: "flex flex-col py-20 max-w-7xl mx-auto",
                children: [
                  (0, s.jsx)("h2", {
                    className: "text-xl sm:text-3xl font-bold text-center",
                    children: "Build. Launch. Scale. Onchain.",
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-center text-sm sm:text-2xl text-primary/50 mt-5 max-w-4xl mx-auto",
                    children:
                      "NodeOps Network is where real builders go from prototype to production — fast. Tap into decentralized, verifiable Compute and ship with confidence. From your first workload to global scale, NodeOps is your full-stack foundation to go live.",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex md:flex-row flex-col mt-10 md:px-10 min-h-full",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col md:w-1/2 w-full min-h-full",
                        children: [
                          (0, s.jsxs)(y.Zp, {
                            isBothSide: !0,
                            className:
                              "flex md:flex-row flex-col-reverse p-10 gap-10 border-t border-primary/20",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className: "text-2xl",
                                    children:
                                      "Full-stack infrastructure from day one",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-primary/50 text-lg",
                                    children:
                                      "Instant access to validator services, decentralized GPU/CPU Compute, and protocol-grade infrastructure — ready when you are.",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("img", {
                                src: "/grant/why1.png",
                                alt: "NodeOps Network",
                                className:
                                  "w-full md:h-full h-40 object-contain md:w-40 shrink-0  ",
                              }),
                            ],
                          }),
                          (0, s.jsxs)(y.Zp, {
                            isBothSide: !0,
                            className:
                              "flex md:flex-row flex-col p-10 gap-10 border-t border-b border-primary/20",
                            children: [
                              (0, s.jsx)("img", {
                                src: "/grant/why2.png",
                                alt: "NodeOps Network",
                                className:
                                  "w-full md:h-full h-40 object-contain md:w-40 shrink-0",
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, s.jsx)("h3", {
                                    className: "text-2xl",
                                    children:
                                      "Scalable Compute that grows with you",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "text-primary/50 text-lg",
                                    children:
                                      "Whether you're deploying AI models, real-time apps, or blockchain services, NodeOps delivers high-performance, decentralized resources that flex with your needs.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "md:w-1/2 w-full min-h-full",
                        children: (0, s.jsxs)(y.Zp, {
                          isBothSide: !0,
                          className:
                            "flex flex-col p-10 gap-10 border-t border-b border-primary/20 h-full",
                          children: [
                            (0, s.jsx)("img", {
                              src: "/grant/why3.png",
                              alt: "NodeOps Network",
                              className: "w-full md:h-80 h-60 shrink-0",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex flex-col",
                              children: [
                                (0, s.jsx)("h3", {
                                  className: "text-2xl",
                                  children: "Ship fast, go live",
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-primary/50 text-lg",
                                  children:
                                    "Go from testnet to mainnet with infrastructure optimized for uptime, orchestration, and scale — so you can focus on building, not maintaining.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row w-full min-h-full md:px-10",
                    children: [
                      (0, s.jsxs)(y.Zp, {
                        isBothSide: !0,
                        className:
                          "md:w-1/2 w-full flex flex-col p-10 gap-10 border-b border-primary/20",
                        children: [
                          (0, s.jsx)("img", {
                            src: "/grant/why4.png",
                            alt: "NodeOps Network",
                            className: "w-full h-full object-contain",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, s.jsx)("h3", {
                                className: "text-2xl",
                                children:
                                  "Milestone-based grants that fit your roadmap",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-primary/50 text-lg",
                                children:
                                  "Receive flexible support in $NODE tokens and infrastructure credits, tied to your development milestones — not arbitrary deadlines.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)(y.Zp, {
                        isBothSide: !0,
                        className:
                          "md:w-1/2 w-full flex flex-col p-10 gap-10 border-b border-primary/20",
                        children: [
                          (0, s.jsx)("img", {
                            src: "/grant/why5.png",
                            alt: "NodeOps Network",
                            className: "w-full h-full object-contain",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, s.jsx)("h3", {
                                className: "text-2xl",
                                children:
                                  "Strategic support beyond infrastructure",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-primary/50 text-lg",
                                children:
                                  "Work with the NodeOps team to shape your go-to-market, sharpen your messaging, and amplify your launch to the right ecosystems.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        R = [
          {
            title:
              "$3M grant pool distributed in $NODE + infrastructure credits",
            icon: "/products/icons/dollar.svg",
            extraCls:
              "col-span-2  border-t border-primary/10 border-b border-primary/10",
          },
          {
            title:
              "$500 in Infra Credits on acceptance, with $10,000+ unlocked via proposals",
            icon: "/products/icons/coins.svg",
            extraCls:
              "col-span-2 border-t border-primary/10 border-b border-primary/10",
          },
          {
            title: "1:1 business and tech mentorship",
            icon: "/products/icons/handshake.svg",
            extraCls: "md:col-span-1 col-span-2 border-b border-primary/10",
          },
          {
            title: "Milestone-based payouts",
            icon: "/products/icons/money.svg",
            extraCls: "md:col-span-1 col-span-2 border-b border-primary/10",
          },
          {
            title: "Connections to VCs, accelerators & partner projects ",
            icon: "/products/icons/handcoins.svg",
            extraCls: "col-span-2 border-b border-primary/10",
          },
        ],
        U = () =>
          (0, s.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "flex flex-col py-6 sm:py-10",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "text-xl sm:text-3xl font-bold text-center max-w-4xl mx-auto",
                    children:
                      "Launch-ready infrastructure. Builder-aligned capital.",
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-center text-sm sm:text-2xl text-primary/50 mt-3 sm:mt-5 max-w-4xl mx-auto",
                    children:
                      "The Build on NodeOps Grant Program is a milestone-based funding initiative designed for developers building real products on the NodeOps Network.",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: " grid grid-cols-1 md:grid-cols-2",
                children: R.map((e, t) =>
                  (0, s.jsxs)(
                    y.Zp,
                    {
                      isBothSide: !0,
                      className: `p-5 flex items-center gap-5 ${e.extraCls}`,
                      bottomLineHeight: "h-4",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "border border-primary/10 w-14 h-14 flex items-center justify-center shrink-0",
                          children: (0, s.jsx)("img", {
                            src: e.icon,
                            alt: "icon",
                            className: "w-8 h-8",
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: "md:text-2xl",
                          children: e.title,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        Z = () => {
          let e = (0, a.useRef)(null),
            { scrollYProgress: t } = (0, i.L)({
              target: e,
              offset: ["start end", "end start"],
            }),
            r = (0, l.G)(t, (e) => 100 * e),
            d = (0, n.z)(r, { stiffness: 120, damping: 20 });
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(N, {}),
              (0, s.jsx)("div", {
                className: "border border-primary/10",
                ref: e,
                children: (0, s.jsxs)("div", {
                  className: "lg:flex lg:flex-row lg:items-start",
                  children: [
                    (0, s.jsx)(o.A, { position: "left", progress: d }),
                    (0, s.jsx)("div", {
                      style: { flex: 1 },
                      children: (0, s.jsxs)(c.A, {
                        className: "border-l border-r border-primary/10",
                        children: [
                          (0, s.jsx)(U, {}),
                          (0, s.jsx)(H, {}),
                          (0, s.jsx)($, {}),
                          (0, s.jsx)(k, {}),
                          (0, s.jsx)(b, {}),
                        ],
                      }),
                    }),
                    (0, s.jsx)(o.A, { position: "right", progress: d }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    60013: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var s = r(95155),
        a = r(36356);
      r(12115);
      let i = (e) => {
        let { className: t = "" } = e;
        return (0, s.jsx)("div", {
          className: `relative w-full h-[2px] overflow-hidden ${t}`,
          children: (0, s.jsxs)(a.P.div, {
            className: "absolute inset-0 flex",
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 12, ease: "linear", repeat: 1 / 0 },
            children: [
              (0, s.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, s.jsx)("line", {
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
              (0, s.jsx)("svg", {
                width: "100%",
                height: "2",
                className: "min-w-full",
                children: (0, s.jsx)("line", {
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
    70881: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => p });
      var s = r(97846);
      let a = (e) => e && "object" == typeof e && e.mix,
        i = (e) => (a(e) ? e.mix : void 0);
      var l = r(82885),
        n = r(69515),
        o = r(97494),
        c = r(8619);
      function d(e, t) {
        let r = (0, c.d)(t()),
          s = () => r.set(t());
        return (
          s(),
          (0, o.E)(() => {
            let t = () => n.Gt.preRender(s, !1, !0),
              r = e.map((e) => e.on("change", t));
            return () => {
              r.forEach((e) => e()), (0, n.WG)(s);
            };
          }),
          r
        );
      }
      var m = r(60098);
      function p(e, t, r, a) {
        if ("function" == typeof e) {
          (m.bt.current = []), e();
          let t = d(m.bt.current, e);
          return (m.bt.current = void 0), t;
        }
        let l =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  r = t ? 0 : -1,
                  a = e[0 + r],
                  l = e[1 + r],
                  n = e[2 + r],
                  o = e[3 + r],
                  c = (0, s.G)(l, n, { mixer: i(n[0]), ...o });
                return t ? c(a) : c;
              })(t, r, a);
        return Array.isArray(e) ? x(e, l) : x([e], ([e]) => l(e));
      }
      function x(e, t) {
        let r = (0, l.M)(() => []);
        return d(e, () => {
          r.length = 0;
          let s = e.length;
          for (let t = 0; t < s; t++) r[t] = e[t].get();
          return t(r);
        });
      }
    },
    84070: (e, t, r) => {
      "use strict";
      r.d(t, { FormModalProvider: () => o, V: () => n });
      var s = r(95155),
        a = r(12115),
        i = r(52319);
      let l = (0, a.createContext)(void 0);
      function n() {
        let e = (0, a.useContext)(l);
        if (!e)
          throw Error("useFormModal must be used within FormModalProvider");
        return e;
      }
      function o(e) {
        let { children: t } = e,
          [r, n] = (0, a.useState)(!1),
          [o, c] = (0, a.useState)("");
        return (0, s.jsxs)(l.Provider, {
          value: {
            openFormModal: (e) => {
              c(e), n(!0);
            },
          },
          children: [
            t,
            (0, s.jsx)(i.a, {
              isOpen: r,
              onClose: () => n(!1),
              className: "h-[670px]",
              modalClassName: "max-w-2xl",
              children: (0, s.jsx)("iframe", {
                src: o,
                className: "w-full h-full border-0",
                title: "Form",
              }),
            }),
          ],
        });
      }
    },
    91555: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 28274));
    },
    97178: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => p });
      var s = r(69515),
        a = r(19827),
        i = r(12115),
        l = r(77778),
        n = r(51508),
        o = r(82885),
        c = r(97494),
        d = r(8619),
        m = r(14570);
      function p(e, t = {}) {
        let { isStatic: r } = (0, i.useContext)(n.Q),
          h = (0, i.useRef)(null),
          u = (0, o.M)(() => ((0, m.S)(e) ? e.get() : e)),
          g = (0, o.M)(() =>
            "string" == typeof u ? u.replace(/[\d.-]/g, "") : void 0
          ),
          f = (0, d.d)(u),
          b = (0, i.useRef)(u),
          y = (0, i.useRef)(a.l),
          w = () => {
            v(),
              (h.current = (0, l.L)({
                keyframes: [x(f.get()), x(b.current)],
                velocity: f.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...t,
                onUpdate: y.current,
              }));
          },
          v = () => {
            h.current && h.current.stop();
          };
        return (
          (0, i.useInsertionEffect)(
            () =>
              f.attach(
                (e, t) =>
                  r
                    ? t(e)
                    : ((b.current = e),
                      (y.current = (e) => {
                        var r, s;
                        return t(((r = e), (s = g) ? r + s : r));
                      }),
                      s.Gt.postRender(w),
                      f.get()),
                v
              ),
            [JSON.stringify(t)]
          ),
          (0, c.E)(() => {
            if ((0, m.S)(e))
              return e.on("change", (e) => {
                var t, r;
                return f.set(((t = e), (r = g) ? t + r : t));
              });
          }, [f, g]),
          f
        );
      }
      function x(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [5753, 6874, 1780, 5783, 8441, 1684, 7358], () => t(91555)),
      (_N_E = e.O());
  },
]);
