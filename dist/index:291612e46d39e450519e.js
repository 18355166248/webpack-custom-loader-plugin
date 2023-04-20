(() => {
  var e = {
      99: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e, t) {
            return e + t;
          });
      },
      875: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            return "commonJs11";
          });
      },
      648: (e) => {
        e.exports = "images/cbdddf2c2985097b.jpeg";
      },
      307: (e, t, r) => {
        "use strict";
        r.r(t);
      },
    },
    t = {};
  function r(u) {
    var o = t[u];
    if (void 0 !== o) return o.exports;
    var n = (t[u] = { exports: {} });
    return e[u](n, n.exports, r), n.exports;
  }
  (r.r = (e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    (() => {
      "use strict";
      var e = u(r(99)),
        t = u(r(875));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r(307),
        r(648),
        (0, e.default)(1, 2),
        (0, t.default)(),
        (0, e.default)(1, 3),
        [1, 2, 3].map((e) => e + 1);
    })();
})();
