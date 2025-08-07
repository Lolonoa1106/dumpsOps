(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6675],
  {
    12691: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 56379));
    },
    33857: (e, t, l) => {
      "use strict";
      l.d(t, { YN: () => a, YX: () => c, f_: () => n });
      let a = async () => {
          try {
            let e = await fetch(
              "https://oms-oneclick.nodeops.xyz/api/v1/newsletter"
            );
            return await e.json();
          } catch (e) {
            return null;
          }
        },
        r = `
 query Publication($id: ObjectId="669e562e8d64bee489c47f56",$cursor:String) {
      publication(id: $id) {
          id,
     			posts(first:30,after:$cursor){
          pageInfo{
            hasNextPage,
            endCursor
          },
          edges {
            node {
              	id,
              title,
              slug
          coverImage {
            url
          }
          tags {
            name
          }
          publishedAt
          author {
            name
            profilePicture
          }
            }
          }
        }
      }
  }
`;
      async function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          return (
            await fetch("https://gql.hashnode.com", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: e, variables: t }),
              next: { revalidate: 1 },
            })
          ).json();
        } catch (e) {
          return console.error(e), null;
        }
      }
      let n = async () => {
        let e = !1,
          t = [],
          l = "";
        for (; !e; ) {
          let a = await s(r, { cursor: l });
          a?.data?.publication?.posts?.pageInfo?.hasNextPage || (e = !0),
            t.push(...a?.data?.publication?.posts?.edges),
            (l = a?.data?.publication?.posts?.pageInfo?.endCursor);
        }
        return t;
      };
      async function c(e) {
        try {
          return (
            await fetch(
              "https://oms-oneclick.nodeops.xyz/api/v1/subscribe/email",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e }),
              }
            )
          ).json();
        } catch (e) {
          return console.error(e), null;
        }
      }
    },
    44677: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      var a = l(95155),
        r = l(12115),
        s = l(36356);
      let n = () => {
        let [e, t] = (0, r.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, r.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  l = Math.floor(20 * Math.random()) + 10,
                  a = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                t((t) => {
                  let r = [...t];
                  for (let t = e; t < e + l && t < 150; t++) r[t] = a;
                  return r;
                });
              },
              l = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(l);
          }, []),
          (0, a.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, t) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, a.jsx)(s.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, a.jsx)(s.P.div, {
                      className: "h-[1px] w-full -mt-[1px] bg-primary/20",
                      animate: { backgroundColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                  ],
                },
                t
              )
            ),
          })
        );
      };
    },
    51443: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => m });
      var a = l(95155),
        r = l(75783),
        s = l(35438);
      l(12115);
      var n = l(2467),
        c = l(44677),
        i = l(35695),
        o = l(27677),
        d = l(38486);
      l(2252), l(59408);
      let m = (e) => {
        let { isNewsroom: t, newsItems: l, blogItems: m, isCaseStudy: u } = e,
          f = (0, i.useRouter)();
        return (0, a.jsx)(n.A, {
          className:
            "!p-3 h-full flex md:flex-row flex-col gap-4 mt-32 border border-primary/20",
          children: (0, a.jsxs)(o.RC, {
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            modules: [d.Ij, d.Vx],
            children: [
              !t &&
                m?.map((e) =>
                  (0, a.jsx)(
                    o.qr,
                    {
                      style: { border: "0" },
                      className: "w-full h-full",
                      children: (0, a.jsxs)("div", {
                        className:
                          "flex md:flex-row flex-col gap-4 w-full h-full",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col items-start justify-between w-full md:w-1/2 p-8 relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "vertical-lines-dark-blog w-full h-full top-0 left-0",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-lg text-primary/30 text-left",
                                children: e.node.author.name,
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col items-start",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xl text-primary text-left",
                                    children: e.node.title,
                                  }),
                                  (0, a.jsxs)(r.$n, {
                                    onClick: () => {
                                      f.push(`/blog/${e.node.slug}`);
                                    },
                                    variant: "outline",
                                    className: "gap-2 mt-3",
                                    children: [
                                      "Read More ",
                                      (0, a.jsx)(s.F, { className: "w-4 h-4" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col gap-3 items-center w-full md:w-1/2",
                            children: [
                              (0, a.jsx)(c.A, {}),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-center items-center border border-primary/20 relative w-full h-[300px]",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: e?.node?.coverImage?.url,
                                    className:
                                      "w-full h-full object-contain md:object-cover",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute top-0 left-0 w-full h-full bg-black/20",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(c.A, {}),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.node.slug
                  )
                ),
              t &&
                l?.map((e, t) =>
                  (0, a.jsx)(
                    o.qr,
                    {
                      style: { border: "0" },
                      className: "w-full h-full",
                      children: (0, a.jsxs)("div", {
                        className:
                          "flex md:flex-row flex-col gap-4 w-full h-full",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col items-start justify-between w-full md:w-1/2 p-8 relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "vertical-lines-dark-blog w-full h-full top-0 left-0",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-lg text-primary/30 text-left",
                                children: e.tag,
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col items-start",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "text-xl text-primary text-left",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-lg text-primary/30 mt-2 line-clamp-1 text-left",
                                    children: e?.description,
                                  }),
                                  (0, a.jsxs)(r.$n, {
                                    onClick: () => {
                                      window.open(e?.url, "_blank");
                                    },
                                    variant: "outline",
                                    className: "gap-2 mt-3",
                                    children: [
                                      "Read More ",
                                      (0, a.jsx)(s.F, { className: "w-4 h-4" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-col gap-3 items-center w-full md:w-1/2",
                            children: [
                              (0, a.jsx)(c.A, {}),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-center items-center border border-primary/20 relative w-full h-[300px]",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: e.image,
                                    className:
                                      "w-full h-full object-contain md:object-cover",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute top-0 left-0 w-full h-full bg-black/20",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(c.A, {}),
                            ],
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
            ],
          }),
        });
      };
    },
    56379: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => C });
      var a = l(95155),
        r = l(12115),
        s = l(60013),
        n = l(2467),
        c = l(51443),
        i = l(18684),
        o = l(86802),
        d = l(33857),
        m = l(39898);
      let u = new Map([
        [
          "bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z",
            })
          ),
        ],
        [
          "duotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
              opacity: "0.2",
            }),
            r.createElement("path", {
              d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z",
            })
          ),
        ],
        [
          "fill",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z",
            })
          ),
        ],
        [
          "light",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z",
            })
          ),
        ],
        [
          "regular",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z",
            })
          ),
        ],
        [
          "thin",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M228,128a100,100,0,0,1-200,0c0-39.4,22.9-75.37,58.33-91.63a4,4,0,1,1,3.34,7.27C57.07,58.6,36,91.71,36,128a92,92,0,0,0,184,0c0-36.29-21.07-69.4-53.67-84.36a4,4,0,1,1,3.34-7.27C205.1,52.63,228,88.6,228,128Z",
            })
          ),
        ],
      ]);
      var f = Object.defineProperty,
        x = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        w = (e, t, l) =>
          t in e
            ? f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        g = (e, t) => {
          for (var l in t || (t = {})) j.call(t, l) && w(e, l, t[l]);
          if (p) for (var l of p(t)) b.call(t, l) && w(e, l, t[l]);
          return e;
        },
        v = (e, t) => x(e, h(t));
      let y = (0, r.forwardRef)((e, t) =>
        r.createElement(m.A, v(g({ ref: t }, e), { weights: u }))
      );
      y.displayName = "CircleNotch";
      var N = l(8300),
        A = l(55645);
      let C = () => {
        let [e, t] = (0, r.useState)([]),
          [l, m] = (0, r.useState)(!1),
          [u, f] = (0, r.useState)(""),
          { trackPage: x } = (0, N.s)();
        (0, r.useEffect)(() => {
          x(A.v.NEWSROOM),
            (async () => {
              m(!0);
              let e = await (0, d.YN)();
              t(e?.data?.news), m(!1);
            })();
        }, []);
        let h = e?.filter((e) =>
          e?.title?.toLowerCase().includes(u.toLowerCase())
        );
        return l
          ? (0, a.jsx)("div", {
              className: "flex justify-center items-center mt-80",
              children: (0, a.jsx)(y, { className: "w-10 h-10 animate-spin" }),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(c.A, { isNewsroom: !0, newsItems: e?.slice(0, 3) }),
                (0, a.jsx)(n.A, {
                  className: "my-20",
                  children: (0, a.jsx)(s.A, {}),
                }),
                (0, a.jsx)(i.A, {
                  title: "All news posts",
                  isNewsroom: !0,
                  newsList: h,
                  setSearch: f,
                  search: u,
                }),
                (0, a.jsx)(n.A, {
                  className: "my-20",
                  children: (0, a.jsx)(s.A, {}),
                }),
                (0, a.jsx)(o.A, {}),
                (0, a.jsx)(n.A, {
                  className: "my-20",
                  children: (0, a.jsx)(s.A, {}),
                }),
              ],
            });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [4213, 3495, 5753, 6080, 6766, 1483, 5783, 1299, 8441, 1684, 7358],
      () => t(12691)
    ),
      (_N_E = e.O());
  },
]);
