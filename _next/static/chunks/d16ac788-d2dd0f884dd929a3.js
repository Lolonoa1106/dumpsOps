"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3495],
  {
    69719: (e, t, n) => {
      n.d(t, { A: () => eU });
      var i,
        o,
        r = n(71882),
        s = n(36971),
        a = n.n(s),
        u = n(91163),
        p = n(56801),
        c = n.n(p),
        l = n(57672),
        d = n(44134).hp;
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function g(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, S(i.key), i);
        }
      }
      function _(e, t, n) {
        return (
          t && y(e.prototype, t),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function m(e, t, n) {
        return (
          (t = S(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function E(e, t) {
        if (e) {
          if ("string" == typeof e) return I(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return I(e, t);
        }
      }
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function S(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != typeof i) return i;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      var N = {
          DEFAULT_INSTANCE: "$default_instance",
          API_VERSION: 2,
          MAX_STRING_LENGTH: 4096,
          MAX_PROPERTY_KEYS: 1e3,
          IDENTIFY_EVENT: "$identify",
          GROUP_IDENTIFY_EVENT: "$groupidentify",
          EVENT_LOG_URL: "api.amplitude.com",
          EVENT_LOG_EU_URL: "api.eu.amplitude.com",
          DYNAMIC_CONFIG_URL: "regionconfig.amplitude.com",
          DYNAMIC_CONFIG_EU_URL: "regionconfig.eu.amplitude.com",
          DEVICE_ID_INDEX: 0,
          USER_ID_INDEX: 1,
          OPT_OUT_INDEX: 2,
          SESSION_ID_INDEX: 3,
          LAST_EVENT_TIME_INDEX: 4,
          EVENT_ID_INDEX: 5,
          IDENTIFY_ID_INDEX: 6,
          SEQUENCE_NUMBER_INDEX: 7,
          COOKIE_TEST_PREFIX: "amp_cookie_test",
          COOKIE_PREFIX: "amp",
          STORAGE_DEFAULT: "",
          STORAGE_COOKIES: "cookies",
          STORAGE_NONE: "none",
          STORAGE_LOCAL: "localStorage",
          STORAGE_SESSION: "sessionStorage",
          REVENUE_EVENT: "revenue_amount",
          REVENUE_PRODUCT_ID: "$productId",
          REVENUE_QUANTITY: "$quantity",
          REVENUE_PRICE: "$price",
          REVENUE_REVENUE_TYPE: "$revenueType",
          AMP_DEVICE_ID_PARAM: "amp_device_id",
          AMP_REFERRER_PARAM: "amp_referrer",
          REFERRER: "referrer",
          REFERRING_DOMAIN: "referring_domain",
          UTM_SOURCE: "utm_source",
          UTM_MEDIUM: "utm_medium",
          UTM_CAMPAIGN: "utm_campaign",
          UTM_TERM: "utm_term",
          UTM_CONTENT: "utm_content",
          ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
          TRANSPORT_HTTP: "http",
          TRANSPORT_BEACON: "beacon",
        },
        b = {
          encode: function (e) {
            for (var t = "", n = 0; n < e.length; n++) {
              var i = e.charCodeAt(n);
              i < 128
                ? (t += String.fromCharCode(i))
                : (i > 127 && i < 2048
                    ? (t += String.fromCharCode((i >> 6) | 192))
                    : ((t += String.fromCharCode((i >> 12) | 224)),
                      (t += String.fromCharCode(((i >> 6) & 63) | 128))),
                  (t += String.fromCharCode((63 & i) | 128)));
            }
            return t;
          },
          decode: function (e) {
            for (var t = "", n = 0, i = 0, o = 0, r = 0; n < e.length; )
              (i = e.charCodeAt(n)) < 128
                ? ((t += String.fromCharCode(i)), n++)
                : i > 191 && i < 224
                ? ((t += String.fromCharCode(
                    ((31 & i) << 6) | (63 & (o = e.charCodeAt(n + 1)))
                  )),
                  (n += 2))
                : ((t += String.fromCharCode(
                    ((15 & i) << 12) |
                      ((63 & (o = e.charCodeAt(n + 1))) << 6) |
                      (63 & e.charCodeAt(n + 2))
                  )),
                  (n += 3));
            return t;
          },
        },
        O =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : void 0 !== n.g
            ? n.g
            : void 0,
        T = {
          _keyStr:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function (e) {
            try {
              if (O.btoa && O.atob)
                return O.btoa(unescape(encodeURIComponent(e)));
            } catch (e) {}
            return T._encode(e);
          },
          _encode: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              u = "",
              p = 0;
            for (e = b.encode(e); p < e.length; )
              (t = e.charCodeAt(p++)),
                (n = e.charCodeAt(p++)),
                (i = e.charCodeAt(p++)),
                (o = t >> 2),
                (r = ((3 & t) << 4) | (n >> 4)),
                (s = ((15 & n) << 2) | (i >> 6)),
                (a = 63 & i),
                isNaN(n) ? (s = a = 64) : isNaN(i) && (a = 64),
                (u =
                  u +
                  T._keyStr.charAt(o) +
                  T._keyStr.charAt(r) +
                  T._keyStr.charAt(s) +
                  T._keyStr.charAt(a));
            return u;
          },
          decode: function (e) {
            try {
              if (O.btoa && O.atob)
                return decodeURIComponent(escape(O.atob(e)));
            } catch (e) {}
            return T._decode(e);
          },
          _decode: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              u = "",
              p = 0;
            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); p < e.length; )
              (o = T._keyStr.indexOf(e.charAt(p++))),
                (r = T._keyStr.indexOf(e.charAt(p++))),
                (s = T._keyStr.indexOf(e.charAt(p++))),
                (a = T._keyStr.indexOf(e.charAt(p++))),
                (t = (o << 2) | (r >> 4)),
                (n = ((15 & r) << 4) | (s >> 2)),
                (i = ((3 & s) << 6) | a),
                (u += String.fromCharCode(t)),
                64 !== s && (u += String.fromCharCode(n)),
                64 !== a && (u += String.fromCharCode(i));
            return b.decode(u);
          },
        },
        R = Object.prototype.toString;
      function A(e) {
        switch (R.call(e)) {
          case "[object Date]":
            return "date";
          case "[object RegExp]":
            return "regexp";
          case "[object Arguments]":
            return "arguments";
          case "[object Array]":
            return "array";
          case "[object Error]":
            return "error";
        }
        return null === e
          ? "null"
          : void 0 === e
          ? "undefined"
          : e != e
          ? "nan"
          : e && 1 === e.nodeType
          ? "element"
          : void 0 !== d && "function" == typeof d.isBuffer && d.isBuffer(e)
          ? "buffer"
          : ((e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)),
            v(e));
      }
      var C = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
        k = C.WARN,
        P = {
          error: function (e) {
            k >= C.ERROR && D(e);
          },
          warn: function (e) {
            k >= C.WARN && D(e);
          },
          info: function (e) {
            k >= C.INFO && D(e);
          },
        },
        D = function (e) {
          try {
            console.log("[Amplitude] " + e);
          } catch (e) {}
        },
        U = function (e, t, n) {
          return (
            A(e) === n ||
            (P.error(
              "Invalid " +
                t +
                " input type. Expected " +
                n +
                " but received " +
                A(e)
            ),
            !1)
          );
        },
        w = function (e) {
          var t = A(e);
          if ("object" !== t)
            return (
              P.error(
                "Error: invalid properties format. Expecting Javascript object, received " +
                  t +
                  ", ignoring"
              ),
              {}
            );
          if (Object.keys(e).length > N.MAX_PROPERTY_KEYS)
            return (
              P.error("Error: too many properties (more than 1000), ignoring"),
              {}
            );
          var n = {};
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = i,
                r = A(o);
              "string" !== r &&
                ((o = String(o)),
                P.warn(
                  "WARNING: Non-string property key, received type " +
                    r +
                    ', coercing to string "' +
                    o +
                    '"'
                ));
              var s = x(o, e[i]);
              null !== s && (n[o] = s);
            }
          return n;
        },
        M = ["nan", "function", "arguments", "regexp", "element"],
        x = function e(t, n) {
          var i = A(n);
          if (-1 !== M.indexOf(i))
            P.warn(
              'WARNING: Property key "' +
                t +
                '" with invalid value type ' +
                i +
                ", ignoring"
            ),
              (n = null);
          else if ("undefined" === i) n = null;
          else if ("error" === i)
            (n = String(n)),
              P.warn(
                'WARNING: Property key "' +
                  t +
                  '" with value type error, coercing to ' +
                  n
              );
          else if ("array" === i) {
            for (var o = [], r = 0; r < n.length; r++) {
              var s = n[r],
                a = A(s);
              if ("array" === a) {
                P.warn(
                  "WARNING: Cannot have " +
                    a +
                    " nested in an array property value, skipping"
                );
                continue;
              }
              "object" === a ? o.push(w(s)) : o.push(e(t, s));
            }
            n = o;
          } else "object" === i && (n = w(n));
          return n;
        },
        q = function (e, t) {
          var n = A(t);
          if ("string" === n) return t;
          if ("date" === n || "number" === n || "boolean" === n)
            return (
              (t = String(t)),
              P.warn(
                "WARNING: Non-string groupName, received type " +
                  n +
                  ', coercing to string "' +
                  t +
                  '"'
              ),
              t
            );
          if ("array" === n) {
            for (var i = [], o = 0; o < t.length; o++) {
              var r = t[o],
                s = A(r);
              if ("array" === s || "object" === s) {
                P.warn("WARNING: Skipping nested " + s + " in array groupName");
                continue;
              }
              "string" === s
                ? i.push(r)
                : ("date" === s || "number" === s || "boolean" === s) &&
                  ((r = String(r)),
                  P.warn(
                    "WARNING: Non-string groupName, received type " +
                      s +
                      ', coercing to string "' +
                      r +
                      '"'
                  ),
                  i.push(r));
            }
            return i;
          }
          P.warn(
            "WARNING: Non-string groupName, received type " +
              n +
              ". Please use strings or array of strings for groupName"
          );
        },
        j = {
          setLogLevel: function (e) {
            Object.prototype.hasOwnProperty.call(C, e) && (k = C[e]);
          },
          log: P,
          isEmptyString: function (e) {
            return !e || 0 === e.length;
          },
          isWebWorkerEnvironment: function () {
            return "undefined" != typeof WorkerGlobalScope;
          },
          getQueryParam: function (e, t) {
            var n = RegExp(
              "[\\?&]" +
                (e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")) +
                "=([^&#]*)"
            ).exec(t);
            return null === n
              ? void 0
              : decodeURIComponent(n[1].replace(/\+/g, " "));
          },
          truncate: function e(t) {
            if ("array" === A(t))
              for (var n, i = 0; i < t.length; i++) t[i] = e(t[i]);
            else if ("object" === A(t))
              for (var o in t) o in t && (t[o] = e(t[o]));
            else {
              t =
                "string" === A((n = t)) && n.length > N.MAX_STRING_LENGTH
                  ? n.substring(0, N.MAX_STRING_LENGTH)
                  : n;
            }
            return t;
          },
          validateGroups: function (e) {
            var t = A(e);
            if ("object" !== t)
              return (
                P.error(
                  "Error: invalid groups format. Expecting Javascript object, received " +
                    t +
                    ", ignoring"
                ),
                {}
              );
            var n = {};
            for (var i in e)
              if (Object.prototype.hasOwnProperty.call(e, i)) {
                var o = i,
                  r = A(o);
                "string" !== r &&
                  ((o = String(o)),
                  P.warn(
                    "WARNING: Non-string groupType, received type " +
                      r +
                      ', coercing to string "' +
                      o +
                      '"'
                  ));
                var s = q(o, e[i]);
                null !== s && (n[o] = s);
              }
            return n;
          },
          validateInput: U,
          validateProperties: w,
          validateDeviceId: function (e) {
            return (
              !!U(e, "deviceId", "string") &&
              (!(e.indexOf(".") >= 0) ||
                (P.error(
                  "Device IDs may not contain '.' characters. Value will be ignored: \"".concat(
                    e,
                    '"'
                  )
                ),
                !1))
            );
          },
          validateTransport: function (e) {
            return (
              !!U(e, "transport", "string") &&
              (e !== N.TRANSPORT_HTTP && e !== N.TRANSPORT_BEACON
                ? (P.error(
                    "transport value must be one of '"
                      .concat(N.TRANSPORT_BEACON, "' or '")
                      .concat(N.TRANSPORT_HTTP, "'")
                  ),
                  !1)
                : e === N.TRANSPORT_HTTP ||
                  "undefined" == typeof navigator ||
                  !!navigator.sendBeacon ||
                  (P.error(
                    "browser does not support sendBeacon, so transport must be HTTP"
                  ),
                  !1))
            );
          },
          validateSessionId: function (e) {
            return (
              !!(U(e, "sessionId", "number") && new Date(e).getTime() > 0) ||
              (P.error(
                "sessionId value must in milliseconds since epoch (Unix Timestamp)"
              ),
              !1)
            );
          },
          getLocation: function () {
            return O.location;
          },
          getHost: function (e) {
            var t = O.location ? O.location.hostname : "";
            if (e) {
              if ("undefined" != typeof document) {
                var n = document.createElement("a");
                return (n.href = e), n.hostname || t;
              }
              if ("function" == typeof URL) return new URL(e).hostname || t;
            }
            return t;
          },
        },
        G = function (e) {
          try {
            for (
              var t = document.cookie.split(";"), n = null, i = 0;
              i < t.length;
              i++
            ) {
              for (var o = t[i]; " " === o.charAt(0); )
                o = o.substring(1, o.length);
              if (0 === o.indexOf(e)) {
                n = o.substring(e.length, o.length);
                break;
              }
            }
            return n;
          } catch (e) {
            return null;
          }
        },
        L = function (e, t, n) {
          var i = null !== t ? n.expirationDays : -1;
          if (i) {
            var o = new Date();
            o.setTime(o.getTime() + 24 * i * 36e5), (i = o);
          }
          var r = e + "=" + t;
          i && (r += "; expires=" + i.toUTCString()),
            (r += "; path=/"),
            n.domain && (r += "; domain=" + n.domain),
            n.secure && (r += "; Secure"),
            n.sameSite && (r += "; SameSite=" + n.sameSite),
            (document.cookie = r);
        },
        V = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n = t.split(".")[N.LAST_EVENT_TIME_INDEX];
          return (n && (e = parseInt(n, 32)), e)
            ? e
            : (j.log.warn("unable to parse malformed cookie: ".concat(t)), 0);
        },
        K = {
          set: L,
          get: G,
          getAll: function (e) {
            try {
              var t,
                n = document.cookie.split(";").map(function (e) {
                  return e.trimStart();
                }),
                i = [],
                o = (function (e, t) {
                  var n =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (Array.isArray(e) || (n = E(e))) {
                      n && (e = n);
                      var i = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return i >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[i++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: o,
                      };
                    }
                    throw TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var r,
                    s = !0,
                    a = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (s = e.done), e;
                    },
                    e: function (e) {
                      (a = !0), (r = e);
                    },
                    f: function () {
                      try {
                        s || null == n.return || n.return();
                      } finally {
                        if (a) throw r;
                      }
                    },
                  };
                })(n);
              try {
                for (o.s(); !(t = o.n()).done; ) {
                  for (var r = t.value; " " === r.charAt(0); )
                    r = r.substring(1);
                  0 === r.indexOf(e) && i.push(r.substring(e.length));
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
              return i;
            } catch (e) {
              return [];
            }
          },
          sortByEventTime: function (e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return I(e);
              })(e) ||
              (function (e) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              E(e) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            ).sort(function (e, t) {
              var n = V(e);
              return V(t) - n;
            });
          },
          areCookiesEnabled: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = N.COOKIE_TEST_PREFIX;
            if ("undefined" == typeof document) return !1;
            var n = !1;
            try {
              var i = String(Date.now());
              L(t, i, e),
                j.log.info("Testing if cookies available"),
                (n = G(t + "=") === i);
            } catch (e) {
              j.log.warn(
                'Error thrown when checking for cookies. Reason: "'.concat(
                  e,
                  '"'
                )
              );
            } finally {
              j.log.info("Cleaning up cookies availability test"),
                L(t, null, e);
            }
            return n;
          },
        },
        F = function () {
          for (var e = "", t = 0; t < 22; ++t)
            e +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                Math.floor(64 * Math.random())
              );
          return e;
        },
        X = function (e) {
          var t = j.getHost(e).split("."),
            n = [],
            i = "_tldtest_" + F();
          if (j.isWebWorkerEnvironment()) return "";
          for (var o = t.length - 2; o >= 0; --o) n.push(t.slice(o).join("."));
          for (var r = 0; r < n.length; ++r) {
            var s = n[r],
              a = { domain: "." + s };
            if ((K.set(i, 1, a), K.get(i))) return K.set(i, null, a), s;
          }
          return "";
        },
        W = { expirationDays: void 0, domain: void 0 },
        B = function (e) {
          var t = "";
          return (
            W.domain &&
              (t =
                "." === W.domain.charAt(0) ? W.domain.substring(1) : W.domain),
            e + t
          );
        },
        Y = function (e) {
          var t = B(e) + "=",
            n = K.get(t);
          try {
            if (n) return JSON.parse(T.decode(n));
          } catch (e) {}
          return null;
        },
        H = function (e, t) {
          try {
            return K.set(B(e), T.encode(JSON.stringify(t)), W), !0;
          } catch (e) {
            return !1;
          }
        },
        $ = function (e) {
          try {
            return K.set(B(e), null, W), !0;
          } catch (e) {
            return !1;
          }
        },
        J = {
          reset: function () {
            W = { expirationDays: void 0, domain: void 0 };
          },
          options: function (e) {
            if (0 == arguments.length) return W;
            (e = e || {}),
              (W.expirationDays = e.expirationDays),
              (W.secure = e.secure),
              (W.sameSite = e.sameSite);
            var t = j.isEmptyString(e.domain)
                ? "." + X(j.getLocation().href)
                : e.domain,
              n = Math.random();
            (W.domain = t), H("amplitude_test", n);
            var i = Y("amplitude_test");
            return (
              (i && i === n) || (t = null),
              $("amplitude_test"),
              (W.domain = t),
              W
            );
          },
          get: Y,
          set: H,
          remove: $,
          setRaw: function (e, t) {
            try {
              return K.set(B(e), t, W), !0;
            } catch (e) {
              return !1;
            }
          },
          getRaw: function (e) {
            var t = B(e) + "=";
            return K.get(t);
          },
        },
        Q = (function () {
          function e() {
            g(this, e), (this.map = new Map()), (this.length = 0);
          }
          return (
            _(e, [
              {
                key: "key",
                value: function (e) {
                  var t = Array.from(this.map.keys())[e];
                  return this.map.get(t);
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  return this.map.get(e);
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  this.map.has(e) || (this.length += 1), this.map.set(e, t);
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  this.map.has(e) && ((this.length -= 1), this.map.delete(e));
                },
              },
              {
                key: "clear",
                value: function () {
                  this.map.clear(), (this.length = 0);
                },
              },
            ]),
            e
          );
        })();
      if (
        (function () {
          var e,
            t = new Date();
          try {
            return (
              O.localStorage.setItem(t, t),
              (e = O.localStorage.getItem(t) === String(t)),
              O.localStorage.removeItem(t),
              e
            );
          } catch (e) {}
          return !1;
        })()
      )
        i = O.localStorage;
      else if (void 0 !== O && O.globalStorage)
        try {
          i = O.globalStorage[O.location.hostname];
        } catch (e) {}
      else if ("undefined" != typeof document) {
        var z = document.createElement("div"),
          Z = "localStorage";
        (z.style.display = "none"),
          document.getElementsByTagName("head")[0].appendChild(z),
          z.addBehavior &&
            (z.addBehavior("#default#userdata"),
            (i = {
              length: 0,
              setItem: function (e, t) {
                z.load(Z),
                  !z.getAttribute(e) && this.length++,
                  z.setAttribute(e, t),
                  z.save(Z);
              },
              getItem: function (e) {
                return z.load(Z), z.getAttribute(e);
              },
              removeItem: function (e) {
                z.load(Z),
                  z.getAttribute(e) && this.length--,
                  z.removeAttribute(e),
                  z.save(Z);
              },
              clear: function () {
                z.load(Z);
                for (
                  var e, t = 0;
                  (e = z.XMLDocument.documentElement.attributes[t++]);

                )
                  z.removeAttribute(e.name);
                z.save(Z), (this.length = 0);
              },
              key: function (e) {
                return z.load(Z), z.XMLDocument.documentElement.attributes[e];
              },
            }),
            z.load(Z),
            (i.length = z.XMLDocument.documentElement.attributes.length));
      } else j.isWebWorkerEnvironment() && (i = new Q());
      i ||
        (i = {
          length: 0,
          setItem: function (e, t) {},
          getItem: function (e) {},
          removeItem: function (e) {},
          clear: function () {},
          key: function (e) {},
        });
      var ee = i,
        et = function () {
          this.storage = null;
        };
      et.prototype.getStorage = function (e) {
        if (null !== this.storage) return this.storage;
        if (!e && K.areCookiesEnabled()) this.storage = J;
        else {
          var t = "amp_cookiestore_";
          this.storage = {
            _options: { expirationDays: void 0, domain: void 0, secure: !1 },
            reset: function () {
              this._options = {
                expirationDays: void 0,
                domain: void 0,
                secure: !1,
              };
            },
            options: function (e) {
              return 0 == arguments.length
                ? this._options
                : ((e = e || {}),
                  (this._options.expirationDays =
                    e.expirationDays || this._options.expirationDays),
                  (this._options.domain =
                    e.domain ||
                    this._options.domain ||
                    (O && O.location && O.location.hostname)),
                  (this._options.secure = e.secure || !1));
            },
            get: function (e) {
              try {
                return JSON.parse(ee.getItem(t + e));
              } catch (e) {}
              return null;
            },
            set: function (e, n) {
              try {
                return ee.setItem(t + e, JSON.stringify(n)), !0;
              } catch (e) {}
              return !1;
            },
            remove: function (e) {
              try {
                ee.removeItem(t + e);
              } catch (e) {
                return !1;
              }
            },
          };
        }
        return this.storage;
      };
      var en =
          (m((o = {}), N.STORAGE_COOKIES, !0),
          m(o, N.STORAGE_NONE, !0),
          m(o, N.STORAGE_LOCAL, !0),
          m(o, N.STORAGE_SESSION, !0),
          o),
        ei = (function () {
          function e(t) {
            var n = t.storageKey,
              i = t.disableCookies,
              o = t.domain,
              r = t.secure,
              s = t.sameSite,
              a = t.expirationDays,
              u = t.storage;
            g(this, e),
              (this.storageKey = n),
              (this.domain = o),
              (this.secure = r),
              (this.sameSite = s),
              (this.expirationDays = a),
              (this.cookieDomain = "");
            var p = j.getLocation() ? j.getLocation().href : void 0,
              c = i ? "" : X(p);
            (this.cookieDomain = o || (c ? "." + c : null)),
              en[u]
                ? (this.storage = u)
                : i ||
                  !K.areCookiesEnabled({
                    domain: this.cookieDomain,
                    secure: this.secure,
                    sameSite: this.sameSite,
                    expirationDays: this.expirationDays,
                  })
                ? (this.storage = N.STORAGE_LOCAL)
                : (this.storage = N.STORAGE_COOKIES);
          }
          return (
            _(e, [
              {
                key: "getCookieStorageKey",
                value: function () {
                  if (!this.domain) return this.storageKey;
                  var e =
                    "." === this.domain.charAt(0)
                      ? this.domain.substring(1)
                      : this.domain;
                  return ""
                    .concat(this.storageKey)
                    .concat(e ? "_".concat(e) : "");
                },
              },
              {
                key: "save",
                value: function (e) {
                  var t = e.deviceId,
                    n = e.userId,
                    i = e.optOut,
                    o = e.sessionId,
                    r = e.lastEventTime,
                    s = e.eventId,
                    a = e.identifyId,
                    u = e.sequenceNumber;
                  if (this.storage !== N.STORAGE_NONE) {
                    var p = [
                      t,
                      T.encode(n || ""),
                      i ? "1" : "",
                      o ? o.toString(32) : "0",
                      r ? r.toString(32) : "0",
                      s ? s.toString(32) : "0",
                      a ? a.toString(32) : "0",
                      u ? u.toString(32) : "0",
                    ].join(".");
                    switch (this.storage) {
                      case N.STORAGE_SESSION:
                        O.sessionStorage &&
                          O.sessionStorage.setItem(this.storageKey, p);
                        break;
                      case N.STORAGE_LOCAL:
                        ee.setItem(this.storageKey, p);
                        break;
                      case N.STORAGE_COOKIES:
                        this.saveCookie(p);
                    }
                  }
                },
              },
              {
                key: "saveCookie",
                value: function (e) {
                  K.set(this.getCookieStorageKey(), e, {
                    domain: this.cookieDomain,
                    secure: this.secure,
                    sameSite: this.sameSite,
                    expirationDays: this.expirationDays,
                  });
                },
              },
              {
                key: "load",
                value: function () {
                  var e,
                    t = this;
                  if (this.storage === N.STORAGE_COOKIES) {
                    var n = this.getCookieStorageKey() + "=",
                      i = K.getAll(n);
                    if (0 === i.length || 1 === i.length) e = i[0];
                    else {
                      var o = K.sortByEventTime(i)[0];
                      i.forEach(function () {
                        return K.set(t.getCookieStorageKey(), null, {});
                      }),
                        this.saveCookie(o),
                        (e = K.get(n));
                    }
                  }
                  if ((e || (e = ee.getItem(this.storageKey)), !e))
                    try {
                      e =
                        O.sessionStorage &&
                        O.sessionStorage.getItem(this.storageKey);
                    } catch (e) {
                      j.log.info(
                        'window.sessionStorage unavailable. Reason: "'.concat(
                          e,
                          '"'
                        )
                      );
                    }
                  if (!e) return null;
                  var r = e.split("."),
                    s = null;
                  if (r[N.USER_ID_INDEX])
                    try {
                      s = T.decode(r[N.USER_ID_INDEX]);
                    } catch (e) {
                      s = null;
                    }
                  return {
                    deviceId: r[N.DEVICE_ID_INDEX],
                    userId: s,
                    optOut: "1" === r[N.OPT_OUT_INDEX],
                    sessionId: parseInt(r[N.SESSION_ID_INDEX], 32),
                    lastEventTime: parseInt(r[N.LAST_EVENT_TIME_INDEX], 32),
                    eventId: parseInt(r[N.EVENT_ID_INDEX], 32),
                    identifyId: parseInt(r[N.IDENTIFY_ID_INDEX], 32),
                    sequenceNumber: parseInt(r[N.SEQUENCE_NUMBER_INDEX], 32),
                  };
                },
              },
              {
                key: "clear",
                value: function () {
                  var e;
                  if (
                    (this.storage === N.STORAGE_COOKIES &&
                      ((e = K.get(this.getCookieStorageKey() + "=")),
                      K.set(this.getCookieStorageKey(), null, {
                        domain: this.cookieDomain,
                        secure: this.secure,
                        sameSite: this.sameSite,
                        expirationDays: 0,
                      })),
                    e || ((e = ee.getItem(this.storageKey)), ee.clear()),
                    !e)
                  )
                    try {
                      (e =
                        O.sessionStorage &&
                        O.sessionStorage.getItem(this.storageKey)),
                        O.sessionStorage.clear();
                    } catch (e) {
                      j.log.info(
                        'window.sessionStorage unavailable. Reason: "'.concat(
                          e,
                          '"'
                        )
                      );
                    }
                  return !!e;
                },
              },
            ]),
            e
          );
        })(),
        eo = function (e, t) {
          var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
            i = function (e, t, n, i) {
              return j.getQueryParam(e, t) || j.getQueryParam(n, i);
            },
            o = i(N.UTM_SOURCE, t, "utmcsr", n),
            r = i(N.UTM_MEDIUM, t, "utmcmd", n),
            s = i(N.UTM_CAMPAIGN, t, "utmccn", n),
            a = i(N.UTM_TERM, t, "utmctr", n),
            u = i(N.UTM_CONTENT, t, "utmcct", n),
            p = {},
            c = function (e, t) {
              j.isEmptyString(t) || (p[e] = t);
            };
          return (
            c(N.UTM_SOURCE, o),
            c(N.UTM_MEDIUM, r),
            c(N.UTM_CAMPAIGN, s),
            c(N.UTM_TERM, a),
            c(N.UTM_CONTENT, u),
            p
          );
        },
        er = "$clearAll",
        es = function () {
          (this.userPropertiesOperations = {}), (this.properties = []);
        };
      (es.prototype.add = function (e, t) {
        return (
          "number" === A(t) || "string" === A(t)
            ? this._addOperation("$add", e, t)
            : j.log.error(
                "Unsupported type for value: " +
                  A(t) +
                  ", expecting number or string"
              ),
          this
        );
      }),
        (es.prototype.append = function (e, t) {
          return this._addOperation("$append", e, t), this;
        }),
        (es.prototype.clearAll = function () {
          return (
            Object.keys(this.userPropertiesOperations).length > 0
              ? Object.prototype.hasOwnProperty.call(
                  this.userPropertiesOperations,
                  er
                ) ||
                j.log.error(
                  "Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"
                )
              : (this.userPropertiesOperations[er] = "-"),
            this
          );
        }),
        (es.prototype.prepend = function (e, t) {
          return this._addOperation("$prepend", e, t), this;
        }),
        (es.prototype.set = function (e, t) {
          return this._addOperation("$set", e, t), this;
        }),
        (es.prototype.setOnce = function (e, t) {
          return this._addOperation("$setOnce", e, t), this;
        }),
        (es.prototype.unset = function (e) {
          return this._addOperation("$unset", e, "-"), this;
        }),
        (es.prototype.preInsert = function (e, t) {
          return this._addOperation("$preInsert", e, t), this;
        }),
        (es.prototype.postInsert = function (e, t) {
          return this._addOperation("$postInsert", e, t), this;
        }),
        (es.prototype.remove = function (e, t) {
          return this._addOperation("$remove", e, t), this;
        }),
        (es.prototype._addOperation = function (e, t, n) {
          return Object.prototype.hasOwnProperty.call(
            this.userPropertiesOperations,
            er
          )
            ? void j.log.error(
                "This identify already contains a $clearAll operation, skipping operation " +
                  e
              )
            : -1 !== this.properties.indexOf(t)
            ? void j.log.error(
                'User property "' +
                  t +
                  '" already used in this identify, skipping operation ' +
                  e
              )
            : void (!Object.prototype.hasOwnProperty.call(
                this.userPropertiesOperations,
                e
              ) && (this.userPropertiesOperations[e] = {}),
              (this.userPropertiesOperations[e][t] = n),
              this.properties.push(t));
        });
      var ea = function (e, t, n) {
        (this.url = e), (this.data = t || {}), (this.headers = n);
      };
      ea.prototype.send = function (e) {
        if (O.XDomainRequest) {
          var t = new O.XDomainRequest();
          t.open("POST", this.url, !0),
            (t.onload = function () {
              e(200, t.responseText);
            }),
            (t.onerror = function () {
              "Request Entity Too Large" === t.responseText
                ? e(413, t.responseText)
                : e(500, t.responseText);
            }),
            (t.ontimeout = function () {}),
            (t.onprogress = function () {}),
            t.send(u.A.stringify(this.data));
        } else if ("undefined" != typeof XMLHttpRequest) {
          var n = new XMLHttpRequest();
          n.open("POST", this.url, !0),
            (n.onreadystatechange = function () {
              4 === n.readyState && e(n.status, n.responseText);
            });
          var i = this.headers;
          for (var o in i)
            ("Cross-Origin-Resource-Policy" !== o || i[o]) &&
              n.setRequestHeader(o, i[o]);
          n.send(u.A.stringify(this.data));
        } else {
          var r = void 0;
          fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: u.A.stringify(this.data),
          })
            .then(function (e) {
              return (r = e.status), e.text();
            })
            .then(function (t) {
              e(r, t);
            });
        }
      };
      var eu = function () {
        (this._price = null),
          (this._productId = null),
          (this._quantity = 1),
          (this._revenueType = null),
          (this._properties = null);
      };
      (eu.prototype.setProductId = function (e) {
        return (
          "string" !== A(e)
            ? j.log.error(
                "Unsupported type for productId: " + A(e) + ", expecting string"
              )
            : j.isEmptyString(e)
            ? j.log.error("Invalid empty productId")
            : (this._productId = e),
          this
        );
      }),
        (eu.prototype.setQuantity = function (e) {
          return (
            "number" !== A(e)
              ? j.log.error(
                  "Unsupported type for quantity: " +
                    A(e) +
                    ", expecting number"
                )
              : (this._quantity = parseInt(e)),
            this
          );
        }),
        (eu.prototype.setPrice = function (e) {
          return (
            "number" !== A(e)
              ? j.log.error(
                  "Unsupported type for price: " + A(e) + ", expecting number"
                )
              : (this._price = e),
            this
          );
        }),
        (eu.prototype.setRevenueType = function (e) {
          return (
            "string" !== A(e)
              ? j.log.error(
                  "Unsupported type for revenueType: " +
                    A(e) +
                    ", expecting string"
                )
              : (this._revenueType = e),
            this
          );
        }),
        (eu.prototype.setEventProperties = function (e) {
          return (
            "object" !== A(e)
              ? j.log.error(
                  "Unsupported type for eventProperties: " +
                    A(e) +
                    ", expecting object"
                )
              : (this._properties = j.validateProperties(e)),
            this
          );
        }),
        (eu.prototype._isValidRevenue = function () {
          return (
            "number" === A(this._price) ||
            (j.log.error("Invalid revenue, need to set price field"), !1)
          );
        }),
        (eu.prototype._toJSONObject = function () {
          var e = "object" === A(this._properties) ? this._properties : {};
          return (
            null !== this._productId &&
              (e[N.REVENUE_PRODUCT_ID] = this._productId),
            null !== this._quantity && (e[N.REVENUE_QUANTITY] = this._quantity),
            null !== this._price && (e[N.REVENUE_PRICE] = this._price),
            null !== this._revenueType &&
              (e[N.REVENUE_REVENUE_TYPE] = this._revenueType),
            e
          );
        });
      var ep = { US: "US", EU: "EU" },
        ec = function (e) {
          var t = N.EVENT_LOG_URL;
          switch (e) {
            case ep.EU:
              t = N.EVENT_LOG_EU_URL;
              break;
            case ep.US:
              t = N.EVENT_LOG_URL;
          }
          return t;
        },
        el = function (e) {
          var t = N.DYNAMIC_CONFIG_URL;
          switch (e) {
            case ep.EU:
              t = N.DYNAMIC_CONFIG_EU_URL;
              break;
            case ep.US:
              t = N.DYNAMIC_CONFIG_URL;
          }
          return t;
        },
        ed = "8.21.9",
        eh = {
          apiEndpoint: N.EVENT_LOG_URL,
          batchEvents: !1,
          cookieExpiration: 365,
          cookieName: "amplitude_id",
          sameSiteCookie: "Lax",
          cookieForceUpgrade: !1,
          deferInitialization: !1,
          disableCookies: !1,
          deviceIdFromUrlParam: !1,
          domain: "",
          eventUploadPeriodMillis: 3e4,
          eventUploadThreshold: 30,
          forceHttps: !0,
          includeFbclid: !1,
          includeGclid: !1,
          includeReferrer: !1,
          includeUtm: !1,
          ingestionMetadata: { sourceName: "", sourceVersion: "" },
          language: {
            getLanguage: function () {
              return (
                ("undefined" != typeof navigator &&
                  ((navigator.languages && navigator.languages[0]) ||
                    navigator.language ||
                    navigator.userLanguage)) ||
                ""
              );
            },
          }.getLanguage(),
          library: { name: "amplitude-js", version: ed },
          logLevel: "WARN",
          logAttributionCapturedEvent: !1,
          optOut: !1,
          onError: function () {},
          onExitPage: function () {},
          onNewSessionStart: function () {},
          plan: { branch: "", source: "", version: "", versionId: "" },
          platform: "Web",
          savedMaxCount: 1e3,
          saveEvents: !0,
          saveParamsReferrerOncePerSession: !0,
          secureCookie: !1,
          sessionTimeout: 18e5,
          storage: N.STORAGE_DEFAULT,
          trackingOptions: {
            city: !0,
            country: !0,
            carrier: !0,
            device_manufacturer: !0,
            device_model: !0,
            dma: !0,
            ip_address: !0,
            language: !0,
            os_name: !0,
            os_version: !0,
            platform: !0,
            region: !0,
            version_name: !0,
          },
          transport: N.TRANSPORT_HTTP,
          unsetParamsReferrerOnNewSession: !1,
          unsentKey: "amplitude_unsent",
          unsentIdentifyKey: "amplitude_unsent_identify",
          uploadBatchSize: 100,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cross-Origin-Resource-Policy": "cross-origin",
          },
          serverZone: ep.US,
          useDynamicConfig: !1,
          serverZoneBasedApi: !1,
          sessionId: null,
          partnerId: "",
        },
        ef = new ((function () {
          function e() {
            return (
              g(this, e),
              e.instance ||
                ((this.ingestionEndpoint = N.EVENT_LOG_URL),
                (e.instance = this)),
              e.instance
            );
          }
          return (
            _(e, [
              {
                key: "refresh",
                value: function (e, t, n) {
                  var i = "https";
                  t || "https:" === O.location.protocol || (i = "http");
                  var o = i + "://" + el(e),
                    r = this;
                  if (O.XDomainRequest) {
                    var s = new O.XDomainRequest();
                    s.open("GET", o, !0),
                      (s.onload = function () {
                        (r.ingestionEndpoint = JSON.parse(
                          s.responseText
                        ).ingestionEndpoint),
                          n && n();
                      }),
                      (s.onerror = function () {}),
                      (s.ontimeout = function () {}),
                      (s.onprogress = function () {}),
                      s.send();
                  } else {
                    var a = new XMLHttpRequest();
                    a.open("GET", o, !0),
                      (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          200 === a.status &&
                          ((r.ingestionEndpoint = JSON.parse(
                            a.responseText
                          ).ingestionEndpoint),
                          n && n());
                      }),
                      a.send();
                  }
                },
              },
            ]),
            e
          );
        })())(),
        ev = function (e) {
          (0, r.OL)() ||
            j.isWebWorkerEnvironment() ||
            j.log.warn(
              "amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"
            ),
            (this._instanceName = j.isEmptyString(e)
              ? N.DEFAULT_INSTANCE
              : e.toLowerCase()),
            (this._unsentEvents = []),
            (this._unsentIdentifys = []),
            (this.options = f(
              f({}, eh),
              {},
              {
                headers: f({}, eh.headers),
                ingestionMetadata: f({}, eh.ingestionMetadata),
                library: f({}, eh.library),
                plan: f({}, eh.plan),
                trackingOptions: f({}, eh.trackingOptions),
              }
            )),
            (this._q = []),
            (this._sending = !1),
            (this._updateScheduled = !1),
            (this._onInitCallbacks = []),
            (this._onNewSessionStartCallbacks = []),
            (this._eventId = 0),
            (this._identifyId = 0),
            (this._lastEventTime = null),
            (this._newSession = !1),
            (this._sequenceNumber = 0),
            (this._sessionId = null),
            (this._isInitialized = !1),
            (this._connector = null),
            (this._userAgent =
              ("undefined" != typeof navigator &&
                navigator &&
                navigator.userAgent) ||
              null),
            (this._ua = new (c())(this._userAgent).getResult());
        };
      (ev.prototype.Identify = es),
        (ev.prototype.Revenue = eu),
        (ev.prototype.init = function (e, t, n, i) {
          var o = this;
          if ("string" !== A(e) || j.isEmptyString(e))
            return void j.log.error(
              "Invalid apiKey. Please re-initialize with a valid apiKey"
            );
          try {
            (this._connector = l.i.getInstance(this._instanceName)),
              ey(this.options, n),
              ((0, r.OL)() || j.isWebWorkerEnvironment()) &&
                void 0 !== O.Prototype &&
                Array.prototype.toJSON &&
                ((0, r.LD)(),
                j.log.warn(
                  "Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify"
                )),
              this.options.cookieName !== eh.cookieName &&
                j.log.warn(
                  "The cookieName option is deprecated. We will be ignoring it for newer cookies"
                ),
              this.options.serverZoneBasedApi &&
                (this.options.apiEndpoint = ec(this.options.serverZone)),
              this._refreshDynamicConfig(),
              (this.options.apiKey = e),
              (this._storageSuffix =
                "_" +
                e +
                (this._instanceName === N.DEFAULT_INSTANCE
                  ? ""
                  : "_" + this._instanceName)),
              (this._storageSuffixV5 = e.slice(0, 6)),
              (this._oldCookiename =
                this.options.cookieName + this._storageSuffix),
              (this._unsentKey = this.options.unsentKey + this._storageSuffix),
              (this._unsentIdentifyKey =
                this.options.unsentIdentifyKey + this._storageSuffix),
              (this._cookieName =
                N.COOKIE_PREFIX + "_" + this._storageSuffixV5),
              (this.cookieStorage = new et().getStorage(
                this.options.disableCookies
              )),
              this.cookieStorage.options({
                expirationDays: this.options.cookieExpiration,
                domain: this.options.domain,
                secure: this.options.secureCookie,
                sameSite: this.options.sameSiteCookie,
              }),
              (this._metadataStorage = new ei({
                storageKey: this._cookieName,
                disableCookies: this.options.disableCookies,
                expirationDays: this.options.cookieExpiration,
                domain: this.options.domain,
                secure: this.options.secureCookie,
                sameSite: this.options.sameSiteCookie,
                storage: this.options.storage,
              }));
            var s = !!this.cookieStorage.get(this._oldCookiename),
              a = !!this._metadataStorage.load();
            if (
              ((this._useOldCookie =
                !a && s && !this.options.cookieForceUpgrade),
              this.options.deferInitialization && !(a || s))
            )
              return void this._deferInitialization(e, t, n, i);
            (this.options.domain = this.cookieStorage.options().domain),
              "string" === A(this.options.logLevel) &&
                j.setLogLevel(this.options.logLevel);
            var u = eR(this);
            (this._apiPropertiesTrackingOptions =
              Object.keys(u).length > 0 ? { tracking_options: u } : {}),
              this.options.cookieForceUpgrade &&
                s &&
                (a || em(this), this.cookieStorage.remove(this._oldCookiename)),
              e_(this),
              (this._pendingReadStorage = !0),
              this.options.saveEvents &&
                ((this._unsentEvents = this._loadSavedUnsentEvents(
                  this.options.unsentKey
                )
                  .map(function (e) {
                    return { event: e };
                  })
                  .concat(this._unsentEvents)),
                (this._unsentIdentifys = this._loadSavedUnsentEvents(
                  this.options.unsentIdentifyKey
                )
                  .map(function (e) {
                    return { event: e };
                  })
                  .concat(this._unsentIdentifys))),
              n &&
                n.onNewSessionStart &&
                this.onNewSessionStart(this.options.onNewSessionStart),
              (function () {
                n &&
                  n.deviceId &&
                  !j.validateDeviceId(n.deviceId) &&
                  (j.log.error(
                    'Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(
                      n.deviceId,
                      '"'
                    )
                  ),
                  delete n.deviceId),
                  (o.options.deviceId = o._getInitialDeviceId(
                    n && n.deviceId,
                    void 0
                  )),
                  (o.options.userId =
                    ("string" === A(t) && !j.isEmptyString(t) && t) ||
                    ("number" === A(t) && t.toString()) ||
                    o.options.userId ||
                    null);
                var e = new Date().getTime(),
                  i =
                    !o._sessionId ||
                    !o._lastEventTime ||
                    e - o._lastEventTime > o.options.sessionTimeout ||
                    o.options.sessionId;
                i &&
                  (o.options.unsetParamsReferrerOnNewSession &&
                    o._unsetUTMParams(),
                  (o._newSession = !0),
                  (o._sessionId = o.options.sessionId || e),
                  (o.options.sessionId = void 0),
                  o.options.saveParamsReferrerOncePerSession &&
                    o._trackParamsAndReferrer()),
                  o.options.saveParamsReferrerOncePerSession ||
                    o._trackParamsAndReferrer(),
                  o.options.saveEvents &&
                    (eg(o._unsentEvents), eg(o._unsentIdentifys)),
                  (o._lastEventTime = e),
                  eI(o),
                  (o._pendingReadStorage = !1),
                  o._sendEventsIfReady();
                for (var r = 0; r < o._onInitCallbacks.length; r++)
                  o._onInitCallbacks[r](o);
                (o._onInitCallbacks = []),
                  (o._isInitialized = !0),
                  i && o._runNewSessionStartCallbacks();
              })(),
              this.runQueuedFunctions(),
              "function" === A(i) && i(this);
            var p = this.options.onExitPage;
            if (
              "function" === A(p) &&
              O.addEventListener &&
              !this.pageHandlersAdded
            ) {
              this.pageHandlersAdded = !0;
              var c = function () {
                var e = o.options.transport;
                o.setTransport(N.TRANSPORT_BEACON), p(), o.setTransport(e);
              };
              O.addEventListener(
                "pagehide",
                function () {
                  c();
                },
                !1
              );
            }
            this._connector.eventBridge.setEventReceiver(function (e) {
              o._logEvent(e.eventType, e.eventProperties, e.userProperties);
            });
            var d = this._connector.identityStore.editIdentity();
            this.options.deviceId && d.setDeviceId(this.options.deviceId),
              this.options.userId && d.setUserId(this.options.userId),
              d.commit();
          } catch (e) {
            j.log.error(e), n && "function" === A(n.onError) && n.onError(e);
          }
        }),
        (ev.prototype._runNewSessionStartCallbacks = function () {
          for (var e = 0; e < this._onNewSessionStartCallbacks.length; e++)
            this._onNewSessionStartCallbacks[e](this);
        }),
        (ev.prototype.deleteLowerLevelDomainCookies = function () {
          var e = j.getHost(),
            t =
              this.options.domain && "." === this.options.domain[0]
                ? this.options.domain.slice(1)
                : this.options.domain;
          if (
            t &&
            j.isWebWorkerEnvironment() &&
            e !== t &&
            RegExp(t + "$").test(e)
          ) {
            for (
              var n = e.split("."), i = t.split("."), o = n.length;
              o > i.length;
              --o
            ) {
              var r = n.slice(n.length - o).join(".");
              K.set(this._cookieName, null, { domain: "." + r });
            }
            K.set(this._cookieName, null, {});
          }
        }),
        (ev.prototype._getInitialDeviceId = function (e, t) {
          if (e) return e;
          if (this.options.deviceIdFromUrlParam) {
            var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
            if (n) return n;
          }
          return this.options.deviceId ? this.options.deviceId : t || F();
        });
      var eg = function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t].event.user_properties,
            i = e[t].event.event_properties,
            o = e[t].event.groups;
          (e[t].event.user_properties = j.validateProperties(n)),
            (e[t].event.event_properties = j.validateProperties(i)),
            (e[t].event.groups = j.validateGroups(o));
        }
      };
      ev.prototype._trackParamsAndReferrer = function () {
        if (
          (this.options.includeUtm && (e = this._initUtmData()),
          this.options.includeReferrer &&
            (t = this._saveReferrer(this._getReferrer())),
          this.options.includeGclid &&
            (n = this._saveGclid(this._getUrlParams())),
          this.options.includeFbclid &&
            (i = this._saveFbclid(this._getUrlParams())),
          this.options.logAttributionCapturedEvent)
        ) {
          var e,
            t,
            n,
            i,
            o = f(f(f(f({}, e), t), n), i);
          Object.keys(o).length > 0 && this.logEvent(N.ATTRIBUTION_EVENT, o);
        }
      };
      var ey = function e(t, n) {
        if ("object" === A(n)) {
          var i = new Set(["headers"]),
            o = new Set(["eventUploadPeriodMillis"]);
          for (var r in n)
            i.has(r)
              ? (t[r] = f(f({}, t[r]), n[r]))
              : Object.prototype.hasOwnProperty.call(n, r) &&
                (function (i) {
                  if (Object.prototype.hasOwnProperty.call(t, i)) {
                    var r = n[i],
                      s = A(t[i]);
                    if ("transport" !== i || j.validateTransport(r)) {
                      if ("sessionId" === i && null !== r) {
                        t[i] = j.validateSessionId(r) ? r : null;
                        return;
                      }
                      if (!j.validateInput(r, i + " option", s)) return;
                      "boolean" === s
                        ? (t[i] = !!r)
                        : ("string" === s && !j.isEmptyString(r)) ||
                          ("number" === s &&
                            (r > 0 || (0 === r && o.has(i)))) ||
                          "function" === s
                        ? (t[i] = r)
                        : "object" === s && e(t[i], r);
                    }
                  }
                })(r);
        }
      };
      (ev.prototype.runQueuedFunctions = function () {
        var e = this._q;
        this._q = [];
        for (var t = 0; t < e.length; t++) {
          var n = this[e[t][0]];
          "function" === A(n) && n.apply(this, e[t].slice(1));
        }
      }),
        (ev.prototype._apiKeySet = function (e) {
          return (
            !j.isEmptyString(this.options.apiKey) ||
            (j.log.error(
              "Invalid apiKey. Please set a valid apiKey with init() before calling " +
                e
            ),
            !1)
          );
        }),
        (ev.prototype._loadSavedUnsentEvents = function (e) {
          var t = this._getFromStorage(ee, e),
            n = this._parseSavedUnsentEventsString(t, e);
          return this._setInStorage(ee, e, JSON.stringify(n)), n;
        }),
        (ev.prototype._parseSavedUnsentEventsString = function (e, t) {
          if (j.isEmptyString(e)) return [];
          if ("string" === A(e))
            try {
              var n = JSON.parse(e);
              if ("array" === A(n)) return n;
            } catch (e) {}
          return (
            j.log.error(
              "Unable to load " + t + " events. Restart with a new empty queue."
            ),
            []
          );
        }),
        (ev.prototype.isNewSession = function () {
          return this._newSession;
        }),
        (ev.prototype.onInit = function (e) {
          this._isInitialized ? e(this) : this._onInitCallbacks.push(e);
        }),
        (ev.prototype.onNewSessionStart = function (e) {
          this._onNewSessionStartCallbacks.push(e);
        }),
        (ev.prototype.getSessionId = function () {
          return this._sessionId;
        }),
        (ev.prototype.nextEventId = function () {
          return this._eventId++, this._eventId;
        }),
        (ev.prototype.nextIdentifyId = function () {
          return this._identifyId++, this._identifyId;
        }),
        (ev.prototype.nextSequenceNumber = function () {
          return this._sequenceNumber++, this._sequenceNumber;
        }),
        (ev.prototype._unsentCount = function () {
          return this._unsentEvents.length + this._unsentIdentifys.length;
        }),
        (ev.prototype._sendEventsIfReady = function () {
          return (
            0 !== this._unsentCount() &&
            (!this.options.batchEvents ||
            this._unsentCount() >= this.options.eventUploadThreshold ||
            this.options.transport === N.TRANSPORT_BEACON
              ? (this.sendEvents(), !0)
              : (this._updateScheduled ||
                  ((this._updateScheduled = !0),
                  setTimeout(
                    function () {
                      (this._updateScheduled = !1), this.sendEvents();
                    }.bind(this),
                    this.options.eventUploadPeriodMillis
                  )),
                !1))
          );
        }),
        (ev.prototype.clearStorage = function () {
          return this._metadataStorage.clear();
        }),
        (ev.prototype._getFromStorage = function (e, t) {
          return e.getItem(t + this._storageSuffix);
        }),
        (ev.prototype._setInStorage = function (e, t, n) {
          e.setItem(t + this._storageSuffix, n);
        });
      var e_ = function (e) {
          if (!e._useOldCookie) {
            var t = e._metadataStorage.load();
            "object" === A(t) && eE(e, t);
            return;
          }
          var n = e.cookieStorage.get(e._oldCookiename);
          if ("object" === A(n)) return void eE(e, n);
        },
        em = function (e) {
          var t = e.cookieStorage.get(e._oldCookiename);
          "object" === A(t) && (eE(e, t), eI(e));
        },
        eE = function (e, t) {
          t.deviceId && (e.options.deviceId = t.deviceId),
            t.userId && (e.options.userId = t.userId),
            null !== t.optOut &&
              void 0 !== t.optOut &&
              !1 !== t.optOut &&
              (e.options.optOut = t.optOut),
            t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)),
            t.lastEventTime &&
              (e._lastEventTime = parseInt(t.lastEventTime, 10)),
            t.eventId && (e._eventId = parseInt(t.eventId, 10)),
            t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)),
            t.sequenceNumber &&
              (e._sequenceNumber = parseInt(t.sequenceNumber, 10));
        },
        eI = function (e) {
          var t = {
            deviceId: e.options.deviceId,
            userId: e.options.userId,
            optOut: e.options.optOut,
            sessionId: e._sessionId,
            lastEventTime: e._lastEventTime,
            eventId: e._eventId,
            identifyId: e._identifyId,
            sequenceNumber: e._sequenceNumber,
          };
          e._useOldCookie
            ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t)
            : e._metadataStorage.save(t);
        };
      (ev.prototype._initUtmData = function (e, t) {
        e = e || this._getUrlParams();
        var n = eo((t = t || this.cookieStorage.get("__utmz")), e);
        return eS(this, n), n;
      }),
        (ev.prototype._unsetUTMParams = function () {
          var e = new es();
          e.unset(N.REFERRER),
            e.unset(N.REFERRING_DOMAIN),
            e.unset(N.UTM_SOURCE),
            e.unset(N.UTM_MEDIUM),
            e.unset(N.UTM_CAMPAIGN),
            e.unset(N.UTM_TERM),
            e.unset(N.UTM_CONTENT),
            this.identify(e);
        });
      var eS = function (e, t) {
        if ("object" === A(t) && 0 !== Object.keys(t).length) {
          var n = new es();
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) &&
              (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
          e.identify(n);
        }
      };
      (ev.prototype._getReferrer = function () {
        var e = this._getReferrerFromUrlParam(this._getUrlParams());
        return e || ("undefined" != typeof document ? document.referrer : "");
      }),
        (ev.prototype._getUrlParams = function () {
          return O.location.search;
        }),
        (ev.prototype._saveGclid = function (e) {
          var t = j.getQueryParam("gclid", e);
          if (!j.isEmptyString(t)) {
            var n = { gclid: t };
            return eS(this, n), n;
          }
        }),
        (ev.prototype._saveFbclid = function (e) {
          var t = j.getQueryParam("fbclid", e);
          if (!j.isEmptyString(t)) {
            var n = { fbclid: t };
            return eS(this, n), n;
          }
        }),
        (ev.prototype._getDeviceIdFromUrlParam = function (e) {
          return j.getQueryParam(N.AMP_DEVICE_ID_PARAM, e);
        }),
        (ev.prototype._getReferrerFromUrlParam = function (e) {
          return j.getQueryParam(N.AMP_REFERRER_PARAM, e);
        }),
        (ev.prototype._getReferringDomain = function (e) {
          if (j.isEmptyString(e)) return null;
          var t = e.split("/");
          return t.length >= 3 ? t[2] : null;
        }),
        (ev.prototype._saveReferrer = function (e) {
          if (!j.isEmptyString(e)) {
            var t = {
              referrer: e,
              referring_domain: this._getReferringDomain(e),
            };
            return eS(this, t), t;
          }
        }),
        (ev.prototype.saveEvents = function () {
          try {
            var e = JSON.stringify(
              this._unsentEvents.map(function (e) {
                return e.event;
              })
            );
            this._setInStorage(ee, this.options.unsentKey, e);
          } catch (e) {}
          try {
            var t = JSON.stringify(
              this._unsentIdentifys.map(function (e) {
                return e.event;
              })
            );
            this._setInStorage(ee, this.options.unsentIdentifyKey, t);
          } catch (e) {}
        }),
        (ev.prototype.setDomain = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setDomain"].concat(Array.prototype.slice.call(arguments, 0))
            );
          if (j.validateInput(e, "domain", "string"))
            try {
              this.cookieStorage.options({
                expirationDays: this.options.cookieExpiration,
                secure: this.options.secureCookie,
                domain: e,
                sameSite: this.options.sameSiteCookie,
              }),
                (this.options.domain = this.cookieStorage.options().domain),
                e_(this),
                eI(this);
            } catch (e) {
              j.log.error(e);
            }
        }),
        (ev.prototype.setUserId = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (j.validateInput(t, "startNewSession", "boolean")) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setUserId"].concat(Array.prototype.slice.call(arguments, 0))
              );
            try {
              (this.options.userId = (null != e && "" + e) || null),
                t &&
                  (this.options.unsetParamsReferrerOnNewSession &&
                    this._unsetUTMParams(),
                  (this._newSession = !0),
                  (this._sessionId = new Date().getTime()),
                  this._runNewSessionStartCallbacks(),
                  this.options.saveParamsReferrerOncePerSession &&
                    this._trackParamsAndReferrer()),
                eI(this),
                this._connector &&
                  this._connector.identityStore
                    .editIdentity()
                    .setUserId(this.options.userId)
                    .commit();
            } catch (e) {
              j.log.error(e);
            }
          }
        }),
        (ev.prototype.setGroup = function (e, t) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setGroup"].concat(Array.prototype.slice.call(arguments, 0))
            );
          if (
            !(
              !this._apiKeySet("setGroup()") ||
              !j.validateInput(e, "groupType", "string") ||
              j.isEmptyString(e)
            )
          ) {
            var n = {};
            n[e] = t;
            var i = new es().set(e, t);
            this._logEvent(
              N.IDENTIFY_EVENT,
              null,
              null,
              i.userPropertiesOperations,
              n,
              null,
              null,
              null
            );
          }
        }),
        (ev.prototype.setOptOut = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setOptOut"].concat(Array.prototype.slice.call(arguments, 0))
            );
          if (j.validateInput(e, "enable", "boolean"))
            try {
              (this.options.optOut = e), eI(this);
            } catch (e) {
              j.log.error(e);
            }
        }),
        (ev.prototype.setSessionId = function (e) {
          if (j.validateInput(e, "sessionId", "number"))
            try {
              (this._sessionId = e), eI(this);
            } catch (e) {
              j.log.error(e);
            }
        }),
        (ev.prototype.resetSessionId = function () {
          this.setSessionId(new Date().getTime());
        }),
        (ev.prototype.regenerateDeviceId = function () {
          if (this._shouldDeferCall())
            return this._q.push(
              ["regenerateDeviceId"].concat(
                Array.prototype.slice.call(arguments, 0)
              )
            );
          this.setDeviceId(F());
        }),
        (ev.prototype.setDeviceId = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0))
            );
          if (j.validateDeviceId(e))
            try {
              !j.isEmptyString(e) &&
                ((this.options.deviceId = "" + e),
                eI(this),
                this._connector &&
                  this._connector.identityStore
                    .editIdentity()
                    .setDeviceId(this.options.deviceId)
                    .commit());
            } catch (e) {
              j.log.error(e);
            }
        }),
        (ev.prototype.setTransport = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setTransport"].concat(Array.prototype.slice.call(arguments, 0))
            );
          j.validateTransport(e) && (this.options.transport = e);
        }),
        (ev.prototype.setUserProperties = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setUserProperties"].concat(
                Array.prototype.slice.call(arguments, 0)
              )
            );
          if (
            this._apiKeySet("setUserProperties()") &&
            j.validateInput(e, "userProperties", "object")
          ) {
            var t = j.truncate(j.validateProperties(e));
            if (0 !== Object.keys(t).length) {
              var n = new es();
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
              this.identify(n);
            }
          }
        }),
        (ev.prototype.clearUserProperties = function () {
          if (this._shouldDeferCall())
            return this._q.push(
              ["clearUserProperties"].concat(
                Array.prototype.slice.call(arguments, 0)
              )
            );
          if (this._apiKeySet("clearUserProperties()")) {
            var e = new es();
            e.clearAll(), this.identify(e);
          }
        });
      var eN = function (e, t) {
        for (var n = 0; n < t._q.length; n++) {
          var i = e[t._q[n][0]];
          "function" === A(i) && i.apply(e, t._q[n].slice(1));
        }
        return e;
      };
      (ev.prototype.identify = function (e, t, n, i) {
        if (this._shouldDeferCall())
          return this._q.push(
            ["identify"].concat(Array.prototype.slice.call(arguments, 0))
          );
        if (!this._apiKeySet("identify()"))
          return void eC(t, n, 0, "No request sent", {
            reason: "API key is not set",
          });
        if (
          ("object" === A(e) &&
            Object.prototype.hasOwnProperty.call(e, "_q") &&
            (e = eN(new es(), e)),
          e instanceof es)
        )
          if (Object.keys(e.userPropertiesOperations).length > 0)
            return this._logEvent(
              N.IDENTIFY_EVENT,
              null,
              null,
              e.userPropertiesOperations,
              null,
              null,
              null,
              t,
              n,
              i
            );
          else
            eC(t, n, 0, "No request sent", {
              reason: "No user property operations",
            });
        else
          j.log.error(
            "Invalid identify input type. Expected Identify object but saw " +
              A(e)
          ),
            eC(t, n, 0, "No request sent", {
              reason: "Invalid identify input type",
            });
      }),
        (ev.prototype.groupIdentify = function (e, t, n, i, o, r) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0))
            );
          if (!this._apiKeySet("groupIdentify()"))
            return void eC(i, o, 0, "No request sent", {
              reason: "API key is not set",
            });
          if (!j.validateInput(e, "group_type", "string") || j.isEmptyString(e))
            return void eC(i, o, 0, "No request sent", {
              reason: "Invalid group type",
            });
          if (null == t)
            return void eC(i, o, 0, "No request sent", {
              reason: "Invalid group name",
            });
          if (
            ("object" === A(n) &&
              Object.prototype.hasOwnProperty.call(n, "_q") &&
              (n = eN(new es(), n)),
            n instanceof es)
          )
            if (Object.keys(n.userPropertiesOperations).length > 0)
              return this._logEvent(
                N.GROUP_IDENTIFY_EVENT,
                null,
                null,
                null,
                m({}, e, t),
                n.userPropertiesOperations,
                null,
                i,
                o,
                r
              );
            else
              eC(i, o, 0, "No request sent", {
                reason: "No group property operations",
              });
          else
            j.log.error(
              "Invalid identify input type. Expected Identify object but saw " +
                A(n)
            ),
              eC(i, o, 0, "No request sent", {
                reason: "Invalid identify input type",
              });
        }),
        (ev.prototype.setVersionName = function (e) {
          if (this._shouldDeferCall())
            return this._q.push(
              ["setVersionName"].concat(
                Array.prototype.slice.call(arguments, 0)
              )
            );
          j.validateInput(e, "versionName", "string") &&
            (this.options.versionName = e);
        }),
        (ev.prototype._logEvent = function (e, t, n, i, o, r, s, a, u, p) {
          if ((e_(this), !e))
            return void eC(a, u, 0, "No request sent", {
              reason: "Missing eventType",
            });
          if (this.options.optOut)
            return void eC(a, u, 0, "No request sent", {
              reason: "optOut is set to true",
            });
          try {
            var c =
                e === N.IDENTIFY_EVENT || e === N.GROUP_IDENTIFY_EVENT
                  ? this.nextIdentifyId()
                  : this.nextEventId(),
              l = this.nextSequenceNumber(),
              d = "number" === A(s) ? s : new Date().getTime();
            p
              ? (this._sessionId = -1)
              : (this._sessionId &&
                  this._lastEventTime &&
                  !(d - this._lastEventTime > this.options.sessionTimeout)) ||
                ((this._sessionId = d), this._runNewSessionStartCallbacks()),
              (this._lastEventTime = d),
              eI(this);
            var h = this._ua.browser.name,
              v = this._ua.browser.major,
              g = this._ua.device.model || this._ua.os.name,
              y = this._ua.device.vendor;
            i = i || {};
            var _ = f({}, this._apiPropertiesTrackingOptions);
            (n = f(f({}, n || {}), _)),
              (t = t || {}),
              (o = o || {}),
              (r = r || {});
            var m = {
              device_id: this.options.deviceId,
              user_id: this.options.userId,
              timestamp: d,
              event_id: c,
              session_id: this._sessionId || -1,
              event_type: e,
              version_name: this.options.versionName || null,
              platform: eT(this, "platform") ? this.options.platform : null,
              os_name: (eT(this, "os_name") && h) || null,
              os_version: (eT(this, "os_version") && v) || null,
              device_model: (eT(this, "device_model") && g) || null,
              device_manufacturer:
                (eT(this, "device_manufacturer") && y) || null,
              language: eT(this, "language") ? this.options.language : null,
              api_properties: n,
              event_properties: j.truncate(j.validateProperties(t)),
              user_properties: j.truncate(j.validateProperties(i)),
              uuid: (function e(t) {
                return t
                  ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
                  : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e);
              })(),
              library: this.options.library,
              sequence_number: l,
              groups: j.truncate(j.validateGroups(o)),
              group_properties: j.truncate(j.validateProperties(r)),
              user_agent: this._userAgent,
              partner_id: this.options.partnerId || null,
            };
            return (
              eb(this) &&
                (m.plan = {
                  branch: this.options.plan.branch || void 0,
                  source: this.options.plan.source || void 0,
                  version: this.options.plan.version || void 0,
                  versionId: this.options.plan.versionId || void 0,
                }),
              eO(this) &&
                (m.ingestion_metadata = {
                  source_name:
                    this.options.ingestionMetadata.sourceName || void 0,
                  source_version:
                    this.options.ingestionMetadata.sourceVersion || void 0,
                }),
              e === N.IDENTIFY_EVENT || e === N.GROUP_IDENTIFY_EVENT
                ? (this._unsentIdentifys.push({
                    event: m,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentIdentifys))
                : (this._unsentEvents.push({
                    event: m,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentEvents)),
              this.options.saveEvents && this.saveEvents(),
              this._sendEventsIfReady(),
              e === N.IDENTIFY_EVENT &&
                this._connector &&
                this._connector.identityStore
                  .editIdentity()
                  .updateUserProperties(j.truncate(j.validateProperties(i)))
                  .commit(),
              c
            );
          } catch (e) {
            j.log.error(e);
          }
        });
      var eb = function (e) {
          return (
            e.options.plan &&
            (e.options.plan.source ||
              e.options.plan.branch ||
              e.options.plan.version ||
              e.options.plan.versionId)
          );
        },
        eO = function (e) {
          return (
            e.options.ingestionMetadata &&
            (e.options.ingestionMetadata.sourceName ||
              e.options.ingestionMetadata.sourceVersion)
          );
        },
        eT = function (e, t) {
          return !!e.options.trackingOptions[t];
        },
        eR = function (e) {
          for (
            var t = ["city", "country", "dma", "ip_address", "region"],
              n = {},
              i = 0;
            i < t.length;
            i++
          ) {
            var o = t[i];
            eT(e, o) || (n[o] = !1);
          }
          return n;
        };
      (ev.prototype._limitEventsQueued = function (e) {
        e.length > this.options.savedMaxCount &&
          e
            .splice(0, e.length - this.options.savedMaxCount)
            .forEach(function (e) {
              eC(e.callback, e.errorCallback, 0, "No request sent", {
                reason:
                  "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker",
              });
            });
      }),
        (ev.prototype.logEvent = function (e, t, n, i) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          return this._shouldDeferCall()
            ? this._q.push(
                ["logEvent"].concat(Array.prototype.slice.call(arguments, 0))
              )
            : this.logEventWithTimestamp(e, t, null, n, i, o);
        }),
        (ev.prototype.logEventWithTimestamp = function (e, t, n, i, o) {
          var r =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          return this._shouldDeferCall()
            ? this._q.push(
                ["logEventWithTimestamp"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              )
            : this._apiKeySet("logEvent()")
            ? j.validateInput(e, "eventType", "string")
              ? j.isEmptyString(e)
                ? (eC(i, o, 0, "No request sent", {
                    reason: "Missing eventType",
                  }),
                  -1)
                : (j.validateInput(r, "outOfSession", "boolean") ||
                    eC(i, o, 0, "No request sent", {
                      reason: "Invalid outOfSession value",
                    }),
                  this._logEvent(e, t, null, null, null, null, n, i, o, r))
              : (eC(i, o, 0, "No request sent", {
                  reason: "Invalid type for eventType",
                }),
                -1)
            : (eC(i, o, 0, "No request sent", { reason: "API key not set" }),
              -1);
        }),
        (ev.prototype.logEventWithGroups = function (e, t, n, i, o) {
          var r =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          return this._shouldDeferCall()
            ? this._q.push(
                ["logEventWithGroups"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              )
            : this._apiKeySet("logEventWithGroups()")
            ? j.validateInput(e, "eventType", "string")
              ? (j.validateInput(r, "outOfSession", "boolean") ||
                  eC(
                    event.callback,
                    event.errorCallback,
                    0,
                    "No request sent",
                    { reason: "Invalid outOfSession value" }
                  ),
                this._logEvent(e, t, null, null, n, null, null, i, o, r))
              : (eC(event.callback, event.errorCallback, 0, "No request sent", {
                  reason: "Invalid type for eventType",
                }),
                -1)
            : (eC(event.callback, event.errorCallback, 0, "No request sent", {
                reason: "API key not set",
              }),
              -1);
        });
      var eA = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        eC = function (e, t, n, i, o) {
          "function" === A(e) && e(n, i, o), "function" === A(t) && t(n, i, o);
        };
      (ev.prototype.logRevenueV2 = function (e) {
        if (this._shouldDeferCall())
          return this._q.push(
            ["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0))
          );
        if (this._apiKeySet("logRevenueV2()"))
          if (
            ("object" === A(e) &&
              Object.prototype.hasOwnProperty.call(e, "_q") &&
              (e = eN(new eu(), e)),
            e instanceof eu)
          ) {
            if (e && e._isValidRevenue())
              return this.logEvent(N.REVENUE_EVENT, e._toJSONObject());
          } else
            j.log.error(
              "Invalid revenue input type. Expected Revenue object but saw " +
                A(e)
            );
      }),
        (ev.prototype.logRevenue = function (e, t, n) {
          return this._shouldDeferCall()
            ? this._q.push(
                ["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))
              )
            : this._apiKeySet("logRevenue()") &&
              eA(e) &&
              (void 0 === t || eA(t))
            ? this._logEvent(
                N.REVENUE_EVENT,
                {},
                {
                  productId: n,
                  special: "revenue_amount",
                  quantity: t || 1,
                  price: e,
                },
                null,
                null,
                null,
                null,
                null
              )
            : -1;
        }),
        (ev.prototype._logErrorsOnEvents = function (e, t, n, i) {
          for (
            var o = ["_unsentEvents", "_unsentIdentifys"], r = 0;
            r < o.length;
            r++
          )
            for (
              var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0;
              u < this[s].length || 0;
              u++
            ) {
              var p = this[s][u];
              p.event.event_id <= a && p.errorCallback && p.errorCallback(n, i);
            }
        }),
        (ev.prototype.removeEvents = function (e, t, n, i) {
          ek(this, "_unsentEvents", e, n, i),
            ek(this, "_unsentIdentifys", t, n, i);
        });
      var ek = function (e, t, n, i, o) {
        if (!(n < 0)) {
          for (var r = [], s = 0; s < e[t].length || 0; s++) {
            var a = e[t][s];
            a.event.event_id > n ? r.push(a) : a.callback && a.callback(i, o);
          }
          e[t] = r;
        }
      };
      (ev.prototype.sendEvents = function () {
        if (!this._apiKeySet("sendEvents()"))
          return void this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
            reason: "API key not set",
          });
        if (this.options.optOut)
          return void this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
            reason: "Opt out is set to true",
          });
        if (0 !== this._unsentCount()) {
          if (this.options.transport !== N.TRANSPORT_BEACON) {
            if (this._sending) return;
            this._sending = !0;
          }
          var e =
              (this.options.forceHttps || "https:" === O.location.protocol
                ? "https"
                : "http") +
              "://" +
              this.options.apiEndpoint,
            t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
            n = this._mergeEventsAndIdentifys(t),
            i = n.maxEventId,
            o = n.maxIdentifyId,
            r = JSON.stringify(
              n.eventsToSend.map(function (e) {
                return e.event;
              })
            ),
            s = new Date().getTime(),
            u = {
              client: this.options.apiKey,
              e: r,
              v: N.API_VERSION,
              upload_time: s,
              checksum: a()(N.API_VERSION + this.options.apiKey + r + s),
            };
          if (
            this.options.transport === N.TRANSPORT_BEACON &&
            "undefined" != typeof navigator
          )
            return void (navigator.sendBeacon(e, new URLSearchParams(u))
              ? (this.removeEvents(i, o, 200, "success"),
                this.options.saveEvents && this.saveEvents())
              : this._logErrorsOnEvents(i, o, 0, ""));
          var p = this;
          try {
            new ea(e, u, this.options.headers).send(function (e, n) {
              p._sending = !1;
              try {
                200 === e
                  ? (p.removeEvents(i, o, e, n),
                    p.options.saveEvents && p.saveEvents(),
                    p._sendEventsIfReady())
                  : (p._logErrorsOnEvents(i, o, e, n),
                    413 === e &&
                      (1 === p.options.uploadBatchSize &&
                        p.removeEvents(i, o, e, n),
                      (p.options.uploadBatchSize = Math.ceil(t / 2)),
                      p.sendEvents()));
              } catch (e) {}
            });
          } catch (e) {
            var c = "Request failed to send";
            j.log.error(c),
              p._logErrorsOnEvents(i, o, 0, c),
              p.removeEvents(i, o, 0, c, { reason: e.message });
          }
        }
      }),
        (ev.prototype._mergeEventsAndIdentifys = function (e) {
          for (var t = [], n = 0, i = -1, o = 0, r = -1; t.length < e; ) {
            var s = void 0,
              a = o >= this._unsentIdentifys.length,
              u = n >= this._unsentEvents.length;
            if (u && a) {
              j.log.error(
                "Merging Events and Identifys, less events and identifys than expected"
              );
              break;
            }
            a
              ? (i = (s = this._unsentEvents[n++]).event.event_id)
              : u ||
                ("sequence_number" in this._unsentEvents[n].event &&
                  !(
                    this._unsentEvents[n].event.sequence_number <
                    this._unsentIdentifys[o].event.sequence_number
                  ))
              ? (r = (s = this._unsentIdentifys[o++]).event.event_id)
              : (i = (s = this._unsentEvents[n++]).event.event_id),
              t.push(s);
          }
          return { eventsToSend: t, maxEventId: i, maxIdentifyId: r };
        }),
        (ev.prototype.setGlobalUserProperties = function (e) {
          this.setUserProperties(e);
        }),
        (ev.prototype.__VERSION__ = function () {
          return this.options.library.version;
        }),
        (ev.prototype.setLibrary = function (e, t) {
          null != e && (this.options.library.name = e),
            null != t && (this.options.library.version = t);
        }),
        (ev.prototype._shouldDeferCall = function () {
          return this._pendingReadStorage || this._initializationDeferred;
        }),
        (ev.prototype._deferInitialization = function () {
          (this._initializationDeferred = !0),
            this._q.push(
              ["init"].concat(Array.prototype.slice.call(arguments, 0))
            );
        }),
        (ev.prototype.enableTracking = function () {
          (this._initializationDeferred = !1),
            eI(this),
            this.runQueuedFunctions();
        }),
        (ev.prototype._refreshDynamicConfig = function () {
          this.options.useDynamicConfig &&
            ef.refresh(
              this.options.serverZone,
              this.options.forceHttps,
              function () {
                this.options.apiEndpoint = ef.ingestionEndpoint;
              }.bind(this)
            );
        }),
        (ev.prototype.getDeviceId = function () {
          return this.options.deviceId;
        }),
        (ev.prototype.getUserId = function () {
          return this.options.userId;
        }),
        (ev.prototype.setMinTimeBetweenSessionsMillis = function (e) {
          if (j.validateInput(e, "timeInMillis", "number")) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setMinTimeBetweenSessionsMillis"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              );
            try {
              this.options.sessionTimeout = e;
            } catch (e) {
              j.log.error(e);
            }
          }
        }),
        (ev.prototype.setEventUploadThreshold = function (e) {
          if (j.validateInput(e, "eventUploadThreshold", "number")) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setEventUploadThreshold"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              );
            try {
              this.options.eventUploadThreshold = e;
            } catch (e) {
              j.log.error(e);
            }
          }
        }),
        (ev.prototype.setUseDynamicConfig = function (e) {
          if (j.validateInput(e, "useDynamicConfig", "boolean")) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setUseDynamicConfig"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              );
            try {
              (this.options.useDynamicConfig = e), this._refreshDynamicConfig();
            } catch (e) {
              j.log.error(e);
            }
          }
        }),
        (ev.prototype.setServerZone = function (e) {
          var t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (
            (e === ep.EU || e === ep.US) &&
            j.validateInput(t, "serverZoneBasedApi", "boolean")
          ) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setServerZone"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              );
            try {
              (this.options.serverZone = e),
                (this.options.serverZoneBasedApi = t),
                t && (this.options.apiEndpoint = ec(this.options.serverZone));
            } catch (e) {
              j.log.error(e);
            }
          }
        }),
        (ev.prototype.setServerUrl = function (e) {
          if (j.validateInput(e, "serverUrl", "string")) {
            if (this._shouldDeferCall())
              return this._q.push(
                ["setServerUrl"].concat(
                  Array.prototype.slice.call(arguments, 0)
                )
              );
            try {
              this.options.apiEndpoint = e;
            } catch (e) {
              j.log.error(e);
            }
          }
        });
      var eP = function () {
        (this.options = f({}, eh)), (this._q = []), (this._instances = {});
      };
      (eP.prototype.Identify = es),
        (eP.prototype.Revenue = eu),
        (eP.prototype.getInstance = function (e) {
          e = j.isEmptyString(e) ? N.DEFAULT_INSTANCE : e.toLowerCase();
          var t = this._instances[e];
          return void 0 === t && ((t = new ev(e)), (this._instances[e] = t)), t;
        }),
        (eP.prototype.init = function (e, t, n, i) {
          this.getInstance().init(
            e,
            t,
            n,
            function (e) {
              (this.options = e.options), "function" === A(i) && i(e);
            }.bind(this)
          );
        }),
        (eP.prototype.isNewSession = function () {
          return this.getInstance().isNewSession();
        }),
        (eP.prototype.getSessionId = function () {
          return this.getInstance().getSessionId();
        }),
        (eP.prototype.nextEventId = function () {
          return this.getInstance().nextEventId();
        }),
        (eP.prototype.nextIdentifyId = function () {
          return this.getInstance().nextIdentifyId();
        }),
        (eP.prototype.nextSequenceNumber = function () {
          return this.getInstance().nextSequenceNumber();
        }),
        (eP.prototype.saveEvents = function () {
          this.getInstance().saveEvents();
        }),
        (eP.prototype.setDomain = function (e) {
          this.getInstance().setDomain(e);
        }),
        (eP.prototype.setUserId = function (e) {
          this.getInstance().setUserId(e);
        }),
        (eP.prototype.setGroup = function (e, t) {
          this.getInstance().setGroup(e, t);
        }),
        (eP.prototype.setOptOut = function (e) {
          this.getInstance().setOptOut(e);
        }),
        (eP.prototype.regenerateDeviceId = function () {
          this.getInstance().regenerateDeviceId();
        }),
        (eP.prototype.setDeviceId = function (e) {
          this.getInstance().setDeviceId(e);
        }),
        (eP.prototype.setUserProperties = function (e) {
          this.getInstance().setUserProperties(e);
        }),
        (eP.prototype.clearUserProperties = function () {
          this.getInstance().clearUserProperties();
        }),
        (eP.prototype.identify = function (e, t) {
          this.getInstance().identify(e, t);
        }),
        (eP.prototype.setVersionName = function (e) {
          this.getInstance().setVersionName(e);
        }),
        (eP.prototype.logEvent = function (e, t, n) {
          return this.getInstance().logEvent(e, t, n);
        }),
        (eP.prototype.logEventWithGroups = function (e, t, n, i) {
          return this.getInstance().logEventWithGroups(e, t, n, i);
        }),
        (eP.prototype.logRevenueV2 = function (e) {
          return this.getInstance().logRevenueV2(e);
        }),
        (eP.prototype.logRevenue = function (e, t, n) {
          return this.getInstance().logRevenue(e, t, n);
        }),
        (eP.prototype.removeEvents = function (e, t) {
          this.getInstance().removeEvents(e, t);
        }),
        (eP.prototype.sendEvents = function (e) {
          this.getInstance().sendEvents(e);
        }),
        (eP.prototype.setGlobalUserProperties = function (e) {
          this.getInstance().setUserProperties(e);
        }),
        (eP.prototype.__VERSION__ = ed);
      var eD = (void 0 !== O && O.amplitude) || {},
        eU = new eP();
      for (var ew in ((eU._q = eD._q || []), eD._iq))
        Object.prototype.hasOwnProperty.call(eD._iq, ew) &&
          (eU.getInstance(ew)._q = eD._iq[ew]._q || []);
    },
  },
]);
