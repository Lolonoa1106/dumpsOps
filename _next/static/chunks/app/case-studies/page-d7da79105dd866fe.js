(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [979],
  {
    19959: (e, l, s) => {
      Promise.resolve().then(s.bind(s, 28375));
    },
    28375: (e, l, s) => {
      "use strict";
      s.d(l, { default: () => f });
      var a = s(95155),
        t = s(12115),
        r = s(60013),
        i = s(2467),
        c = s(51443),
        d = s(18684),
        o = s(86802),
        n = s(8300),
        m = s(55645);
      let x = [
          { id: "1", label: "All" },
          { id: "2", label: "Research" },
          { id: "3", label: "Gaming" },
          { id: "4", label: "AI" },
          { id: "5", label: "Cloud" },
          { id: "6", label: "DePIN" },
        ],
        f = (e) => {
          let { caseStudyBlogs: l } = e,
            [s, f] = (0, t.useState)(""),
            { trackPage: u } = (0, n.s)(),
            [h, j] = (0, t.useState)(x[0].id);
          (0, t.useEffect)(() => {
            u(m.v.NEWSROOM);
          }, []);
          let [b, p] = (0, t.useState)(l),
            v = (e) => {
              let s = x.find((l) => l.id === e)?.label;
              "All" === s
                ? p(l)
                : p(
                    l.filter((e) =>
                      e.node?.tags
                        ?.map((e) => e.name.toLowerCase())
                        .includes(s?.toLowerCase() || "")
                    )
                  );
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c.A, { blogItems: l?.slice(0, 3) }),
              (0, a.jsx)(i.A, {
                className: "my-20",
                children: (0, a.jsx)(r.A, {}),
              }),
              (0, a.jsx)(d.A, {
                title: "All case studies",
                setSearch: (e) => {
                  f(e),
                    p(
                      l.filter((l) =>
                        l.node?.title?.toLowerCase().includes(e.toLowerCase())
                      )
                    );
                },
                search: s,
                isCaseStudy: !0,
                tabs: x,
                handleTabClick: (e) => {
                  j(e), v(e);
                },
                blogs: b,
                activeTab: h,
              }),
              (0, a.jsx)(i.A, {
                className: "my-20",
                children: (0, a.jsx)(r.A, {}),
              }),
              (0, a.jsx)(o.A, {}),
              (0, a.jsx)(i.A, {
                className: "my-20",
                children: (0, a.jsx)(r.A, {}),
              }),
            ],
          });
        };
    },
    44677: (e, l, s) => {
      "use strict";
      s.d(l, { A: () => i });
      var a = s(95155),
        t = s(12115),
        r = s(36356);
      let i = () => {
        let [e, l] = (0, t.useState)(() =>
          Array.from(
            { length: 150 },
            () => [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())]
          )
        );
        return (
          (0, t.useEffect)(() => {
            let e = () => {
                let e = Math.floor(130 * Math.random()),
                  s = Math.floor(20 * Math.random()) + 10,
                  a = [0.2, 0.3, 0.1, 0.5][Math.floor(4 * Math.random())];
                l((l) => {
                  let t = [...l];
                  for (let l = e; l < e + s && l < 150; l++) t[l] = a;
                  return t;
                });
              },
              s = setInterval(() => {
                e();
              }, 1e3);
            return () => clearInterval(s);
          }, []),
          (0, a.jsx)("div", {
            className:
              "h-7 w-full flex border-t border-primary/20 relative overflow-hidden",
            children: e.map((e, l) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "flex-1 relative",
                  children: [
                    (0, a.jsx)(r.P.div, {
                      className:
                        "absolute inset-0 border-l last:border-r border-primary/20",
                      animate: { borderColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                    (0, a.jsx)(r.P.div, {
                      className: "h-[1px] w-full -mt-[1px] bg-primary/20",
                      animate: { backgroundColor: `rgba(255, 255, 255, ${e})` },
                      transition: { duration: 0.5 },
                    }),
                  ],
                },
                l
              )
            ),
          })
        );
      };
    },
    51443: (e, l, s) => {
      "use strict";
      s.d(l, { A: () => m });
      var a = s(95155),
        t = s(75783),
        r = s(35438);
      s(12115);
      var i = s(2467),
        c = s(44677),
        d = s(35695),
        o = s(27677),
        n = s(38486);
      s(2252), s(59408);
      let m = (e) => {
        let { isNewsroom: l, newsItems: s, blogItems: m, isCaseStudy: x } = e,
          f = (0, d.useRouter)();
        return (0, a.jsx)(i.A, {
          className:
            "!p-3 h-full flex md:flex-row flex-col gap-4 mt-32 border border-primary/20",
          children: (0, a.jsxs)(o.RC, {
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            modules: [n.Ij, n.Vx],
            children: [
              !l &&
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
                                  (0, a.jsxs)(t.$n, {
                                    onClick: () => {
                                      f.push(`/blog/${e.node.slug}`);
                                    },
                                    variant: "outline",
                                    className: "gap-2 mt-3",
                                    children: [
                                      "Read More ",
                                      (0, a.jsx)(r.F, { className: "w-4 h-4" }),
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
              l &&
                s?.map((e, l) =>
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
                                  (0, a.jsxs)(t.$n, {
                                    onClick: () => {
                                      window.open(e?.url, "_blank");
                                    },
                                    variant: "outline",
                                    className: "gap-2 mt-3",
                                    children: [
                                      "Read More ",
                                      (0, a.jsx)(r.F, { className: "w-4 h-4" }),
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
                    l
                  )
                ),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(
      0,
      [4213, 3495, 5753, 6080, 6766, 1483, 5783, 1299, 8441, 1684, 7358],
      () => l(19959)
    ),
      (_N_E = e.O());
  },
]);
