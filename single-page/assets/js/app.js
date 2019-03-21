! function(window) {
  window.Package ? M = {} : window.M = {}
}(window), "function" == typeof define && define.amd ? define("M", [], function() {
  return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M), exports.default = M), M.getOverflowParent = function(element) {
  return null == element ? null : element === document.body || "visible" !== getComputedStyle(element).overflow ? element : M.getOverflowParent(element.parentElement)
}, M.getIdFromTrigger = function(trigger) {
  let id = trigger.getAttribute("data-target");
  return id || (id = (id = trigger.getAttribute("href")) ? id.slice(1) : ""), id
}, M.getDocumentScrollTop = function() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}, M.getDocumentScrollLeft = function() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
};
var $jscomp = {
  scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");
  e != Array.prototype && e != Object.prototype && (e[r] = p.value)
}, $jscomp.getGlobal = function(e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++
}, $jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var e = $jscomp.global.Symbol.iterator;
  e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
    configurable: !0,
    writable: !0,
    value: function() {
      return $jscomp.arrayIterator(this)
    }
  }), $jscomp.initSymbolIterator = function() {}
}, $jscomp.arrayIterator = function(e) {
  var r = 0;
  return $jscomp.iteratorPrototype(function() {
    return r < e.length ? {
      done: !1,
      value: e[r++]
    } : {
      done: !0
    }
  })
}, $jscomp.iteratorPrototype = function(e) {
  return $jscomp.initSymbolIterator(), (e = {
    next: e
  })[$jscomp.global.Symbol.iterator] = function() {
    return this
  }, e
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(e, r) {
  $jscomp.initSymbolIterator(), e instanceof String && (e += "");
  var p = 0,
  m = {
    next: function() {
      if (p < e.length) {
        var u = p++;
        return {
          value: r(u, e[u]),
          done: !1
        }
      }
      return m.next = function() {
        return {
          done: !0,
          value: void 0
        }
      }, m.next()
    }
  };
  return m[Symbol.iterator] = function() {
    return m
  }, m
}, $jscomp.polyfill = function(e, r, p, m) {
  if (r) {
    for (p = $jscomp.global, e = e.split("."), m = 0; m < e.length - 1; m++) {
      var u = e[m];
      u in p || (p[u] = {}), p = p[u]
    }(r = r(m = p[e = e[e.length - 1]])) != m && null != r && $jscomp.defineProperty(p, e, {
      configurable: !0,
      writable: !0,
      value: r
    })
  }
}, $jscomp.polyfill("Array.prototype.keys", function(e) {
  return e || function() {
    return $jscomp.iteratorFromArray(this, function(e) {
      return e
    })
  }
}, "es6-impl", "es3");
var $jscomp$this = this;
! function(r) {
  M.anime = r()
}(function() {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a)
    } catch (c) {}
  }

  function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++)
      if (n in a) {
        var k = a[n];
        c.call(b, k, n, a) && f.push(k)
      }
      return f
    }

    function p(a) {
      return a.reduce(function(a, d) {
        return a.concat(h.arr(d) ? p(d) : d)
      }, [])
    }

    function m(a) {
      return h.arr(a) ? a : (h.str(a) && (a = e(a) || a), a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a])
    }

    function u(a, c) {
      return a.some(function(a) {
        return a === c
      })
    }

    function C(a) {
      var c = {},
      d;
      for (d in a) c[d] = a[d];
        return c
    }

    function D(a, c) {
      var d = C(a),
      b;
      for (b in a) d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
        return d
    }

    function z(a, c) {
      var d = C(a),
      b;
      for (b in c) d[b] = h.und(a[b]) ? c[b] : a[b];
        return d
    }

    function T(a) {
      a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, c, d, k) {
        return c + c + d + d + k + k
      });
      var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a),
      d, c;
      return "rgba(" + (a = parseInt(c[1], 16)) + "," + parseInt(c[2], 16) + "," + (c = parseInt(c[3], 16)) + ",1)"
    }

    function U(a) {
      function c(a, c, b) {
        return 0 > b && (b += 1), 1 < b && --b, b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a
      }
      var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);
      a = parseInt(d[1]) / 360;
      var b = parseInt(d[2]) / 100,
      f = parseInt(d[3]) / 100,
      d = d[4] || 1;
      if (0 == b) f = b = a = f;
      else {
        var n = .5 > f ? f * (1 + b) : f + b - f * b,
        k = 2 * f - n,
        f = c(k, n, a + 1 / 3),
        b = c(k, n, a);
        a = c(k, n, a - 1 / 3)
      }
      return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")"
    }

    function y(a) {
      if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2]
    }

  function V(a) {
    return -1 < a.indexOf("translate") || "perspective" === a ? "px" : -1 < a.indexOf("rotate") || -1 < a.indexOf("skew") ? "deg" : void 0
  }

  function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a
  }

  function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
  }

function J(a, c) {
  return h.dom(a) && u(W, c) ? "transform" : h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c]) ? "attribute" : h.dom(a) && "transform" !== c && E(a, c) ? "css" : null != a[c] ? "object" : void 0
}

function X(a, c) {
  var d = V(c),
  d = -1 < c.indexOf("scale") ? 1 : 0 + d;
  if (!(a = a.style.transform)) return d;
  for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) f.push(b[1]), n.push(b[2]);
    return (a = r(n, function(a, b) {
      return f[b] === c
    })).length ? a[0] : d
}

function K(a, c) {
  switch (J(a, c)) {
    case "transform":
    return X(a, c);
    case "css":
    return E(a, c);
    case "attribute":
    return a.getAttribute(c)
  }
  return a[c] || 0
}

function L(a, c) {
  var d = /^(\*=|\+=|-=)/.exec(a);
  if (!d) return a;
  var b = y(a) || 0;
  switch (c = parseFloat(c), a = parseFloat(a.replace(d[0], "")), d[0][0]) {
    case "+":
    return c + a + b;
    case "-":
    return c - a + b;
    case "*":
    return c * a + b
  }
}

function F(a, c) {
  return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2))
}

function M(a) {
  a = a.points;
  for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
    var f = a.getItem(b);
    0 < b && (c += F(d, f)), d = f
  }
  return c
}

function N(a) {
  if (a.getTotalLength) return a.getTotalLength();
  switch (a.tagName.toLowerCase()) {
    case "circle":
    return 2 * Math.PI * a.getAttribute("r");
    case "rect":
    return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");
    case "line":
    return F({
      x: a.getAttribute("x1"),
      y: a.getAttribute("y1")
    }, {
      x: a.getAttribute("x2"),
      y: a.getAttribute("y2")
    });
    case "polyline":
    return M(a);
    case "polygon":
    var c = a.points;
    return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0))
  }
}

function Y(a, c) {
  function d(b) {
    return b = void 0 === b ? 0 : b, a.el.getPointAtLength(1 <= c + b ? c + b : 0)
  }
  var b = d(),
  f = d(-1),
  n = d(1);
  switch (a.property) {
    case "x":
    return b.x;
    case "y":
    return b.y;
    case "angle":
    return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI
  }
}

function O(a, c) {
  var d = /-?\d*\.?\d+/g,
  b;
  if (b = h.pth(a) ? a.totalLength : a, h.col(b))
    if (h.rgb(b)) {
      var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);
      b = f ? "rgba(" + f[1] + ",1)" : b
    } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;
    return {
      original: b += "",
      numbers: b.match(d) ? b.match(d).map(Number) : [0],
      strings: h.str(a) || c ? b.split(d) : []
    }
  }

  function P(a) {
    return r(a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [], function(a, d, b) {
      return b.indexOf(a) === d
    })
  }

  function Z(a) {
    var c = P(a);
    return c.map(function(a, b) {
      return {
        target: a,
        id: b,
        total: c.length
      }
    })
  }

  function aa(a, c) {
    var d = C(c);
    if (h.arr(a)) {
      var b = a.length;
      2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = {
        value: a
      }
    }
    return m(a).map(function(a, b) {
      return b = b ? 0 : c.delay, a = h.obj(a) && !h.pth(a) ? a : {
        value: a
      }, h.und(a.delay) && (a.delay = b), a
    }).map(function(a) {
      return z(a, d)
    })
  }

  function ba(a, c) {
    var d = {},
    b;
    for (b in a) {
      var f = I(a[b], c);
      h.arr(f) && (1 === (f = f.map(function(a) {
        return I(a, c)
      })).length && (f = f[0])), d[b] = f
    }
    return d.duration = parseFloat(d.duration), d.delay = parseFloat(d.delay), d
  }

  function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a]
  }

  function da(a, c) {
    var d;
    return a.tweens.map(function(b) {
      var f = (b = ba(b, c)).value,
      e = K(c.target, a.name),
      k = d ? d.to.original : e,
      k = h.arr(f) ? f[0] : k,
      w = L(h.arr(f) ? f[1] : f, k),
      e = y(w) || y(k) || y(e);
      return b.from = O(k, e), b.to = O(w, e), b.start = d ? d.end : a.offset, b.end = b.start + b.delay + b.duration, b.easing = ca(b.easing), b.elasticity = (1e3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1e3, b.isPath = h.pth(f), b.isColor = h.col(b.from.original), b.isColor && (b.round = 1), d = b
    })
  }

  function ea(a, c) {
    return r(p(a.map(function(a) {
      return c.map(function(b) {
        var c = J(a.target, b.name);
        if (c) {
          var d = da(b, a);
          b = {
            type: c,
            property: b.name,
            animatable: a,
            tweens: d,
            duration: d[d.length - 1].end,
            delay: d[0].delay
          }
        } else b = void 0;
        return b
      })
    })), function(a) {
      return !h.und(a)
    })
  }

  function R(a, c, d, b) {
    var f = "delay" === a;
    return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function(b) {
      return b[a]
    })) : f ? b.delay : d.offset + b.delay + b.duration
  }

  function fa(a) {
    var c = D(ga, a),
    d = D(S, a),
    b = Z(a.targets),
    f = [],
    e = z(c, d),
    k;
    for (k in a) e.hasOwnProperty(k) || "targets" === k || f.push({
      name: k,
      offset: e.offset,
      tweens: aa(a[k], d)
    });
      return z(c, {
        children: [],
        animatables: b,
        animations: a = ea(b, f),
        duration: R("duration", a, c, d),
        delay: R("delay", a, c, d)
      })
    }

    function q(a) {
      function c() {
        return window.Promise && new Promise(function(a) {
          return p = a
        })
      }

      function d(a) {
        return g.reversed ? g.duration - a : a
      }

      function b(a) {
        for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
          var e = d[b],
          k = e.animatable,
          h, n, l = (h = e.tweens)[n = h.length - 1];
          n && (l = r(h, function(b) {
            return a < b.end
          })[0] || l);
          for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
            var x = void 0,
            x = l.to.numbers[t],
            q = l.from.numbers[t],
            x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);
            p && (l.isColor && 2 < t || (x = Math.round(x * p) / p)), n.push(x)
          }
          if (l = h.length)
            for (m = h[0], w = 0; w < l; w++) p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
              else m = n[0];
            ha[e.type](k.target, e.property, m, c, k.id), e.currentValue = m, b++
          }
          if (b = Object.keys(c).length)
            for (d = 0; d < b; d++) H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
              g.currentTime = a, g.progress = a / g.duration * 100
          }

          function f(a) {
            g[a] && g[a](g)
          }

          function e() {
            g.remaining && !0 !== g.remaining && g.remaining--
          }

          function k(a) {
            var k = g.duration,
            n = g.offset,
            w = n + g.delay,
            r = g.currentTime,
            x = g.reversed,
            q = d(a);
            if (g.children.length) {
              var u = g.children,
              v = u.length;
              if (q >= g.currentTime)
                for (var G = 0; G < v; G++) u[G].seek(q);
                  else
                    for (; v--;) u[v].seek(q)
                  }(q >= w || !k) && (g.began || (g.began = !0, f("begin")), f("run")), q > n && q < k ? b(q) : (q <= n && 0 !== r && (b(0), x && e()), (q >= k && r !== k || !k) && (b(k), x || e())), f("update"), a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0)
              }
              a = void 0 === a ? {} : a;
              var h, t, l = 0,
              p = null,
              m = c(),
              g = fa(a);
              return g.reset = function() {
                var a = g.direction,
                c = g.loop;
                for (g.currentTime = 0, g.progress = 0, g.paused = !0, g.began = !1, g.completed = !1, g.reversed = "reverse" === a, g.remaining = "alternate" === a && 1 === c ? 2 : c, b(0), a = g.children.length; a--;) g.children[a].reset()
              }, g.tick = function(a) {
                h = a, t || (t = h), k((l + h - t) * q.speed)
              }, g.seek = function(a) {
                k(d(a))
              }, g.pause = function() {
                var a = v.indexOf(g); - 1 < a && v.splice(a, 1), g.paused = !0
              }, g.play = function() {
                g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia())
              }, g.reverse = function() {
                g.reversed = !g.reversed, t = 0, l = d(g.currentTime)
              }, g.restart = function() {
                g.pause(), g.reset(), g.play()
              }, g.finished = m, g.reset(), g.autoplay && g.play(), g
            }
            var ga = {
              update: void 0,
              begin: void 0,
              run: void 0,
              complete: void 0,
              loop: 1,
              direction: "normal",
              autoplay: !0,
              offset: 0
            },
            S = {
              duration: 1e3,
              delay: 0,
              easing: "easeOutElastic",
              elasticity: 500,
              round: 0
            },
            W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
            H, h = {
              arr: function(a) {
                return Array.isArray(a)
              },
              obj: function(a) {
                return -1 < Object.prototype.toString.call(a).indexOf("Object")
              },
              pth: function(a) {
                return h.obj(a) && a.hasOwnProperty("totalLength")
              },
              svg: function(a) {
                return a instanceof SVGElement
              },
              dom: function(a) {
                return a.nodeType || h.svg(a)
              },
              str: function(a) {
                return "string" == typeof a
              },
              fnc: function(a) {
                return "function" == typeof a
              },
              und: function(a) {
                return void 0 === a
              },
              hex: function(a) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
              },
              rgb: function(a) {
                return /^rgb/.test(a)
              },
              hsl: function(a) {
                return /^hsl/.test(a)
              },
              col: function(a) {
                return h.hex(a) || h.rgb(a) || h.hsl(a)
              }
            },
            A = function() {
              function a(a, d, b) {
                return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a
              }
              return function(c, d, b, f) {
                if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
                  var e = new Float32Array(11);
                  if (c !== d || b !== f)
                    for (var k = 0; 11 > k; ++k) e[k] = a(.1 * k, c, b);
                      return function(k) {
                        if (c === d && b === f) return k;
                        if (0 === k) return 0;
                        if (1 === k) return 1;
                        for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) h += .1;
                          var l = h + (k - e[--l]) / (e[l + 1] - e[l]) * .1,
                        n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;
                        if (.001 <= n) {
                          for (h = 0; 4 > h && 0 !== (n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c); ++h) var m = a(l, c, b) - k,
                            l = l - m / n;
                          k = l
                        } else if (0 === n) k = l;
                        else {
                          var l = h,
                          h = h + .1,
                          g = 0;
                          do {
                            0 < (n = a(m = l + (h - l) / 2, c, b) - k) ? h = m : l = m
                          } while (1e-7 < Math.abs(n) && 10 > ++g);
                          k = m
                        }
                        return a(k, d, f)
                      }
                    }
                  }
                }(),
                Q = function() {
                  function a(a, b) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
                  }
                  var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                  d = {
                    In: [
                    [.55, .085, .68, .53],
                    [.55, .055, .675, .19],
                    [.895, .03, .685, .22],
                    [.755, .05, .855, .06],
                    [.47, 0, .745, .715],
                    [.95, .05, .795, .035],
                    [.6, .04, .98, .335],
                    [.6, -.28, .735, .045], a
                    ],
                    Out: [
                    [.25, .46, .45, .94],
                    [.215, .61, .355, 1],
                    [.165, .84, .44, 1],
                    [.23, 1, .32, 1],
                    [.39, .575, .565, 1],
                    [.19, 1, .22, 1],
                    [.075, .82, .165, 1],
                    [.175, .885, .32, 1.275],
                    function(b, c) {
                      return 1 - a(1 - b, c)
                    }
                    ],
                    InOut: [
                    [.455, .03, .515, .955],
                    [.645, .045, .355, 1],
                    [.77, 0, .175, 1],
                    [.86, 0, .07, 1],
                    [.445, .05, .55, .95],
                    [1, 0, 0, 1],
                    [.785, .135, .15, .86],
                    [.68, -.55, .265, 1.55],
                    function(b, c) {
                      return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
                    }
                    ]
                  },
                  b = {
                    linear: A(.25, .25, .75, .75)
                  },
                  f = {},
                  e;
                  for (e in d) f.type = e, d[f.type].forEach(function(a) {
                    return function(d, f) {
                      b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d)
                    }
                  }(f)), f = {
                    type: f.type
                  };
                  return b
                }(),
                ha = {
                  css: function(a, c, d) {
                    return a.style[c] = d
                  },
                  attribute: function(a, c, d) {
                    return a.setAttribute(c, d)
                  },
                  object: function(a, c, d) {
                    return a[c] = d
                  },
                  transform: function(a, c, d, b, f) {
                    b[f] || (b[f] = []), b[f].push(c + "(" + d + ")")
                  }
                },
                v = [],
                B = 0,
                ia = function() {
                  function a() {
                    B = requestAnimationFrame(c)
                  }

                  function c(c) {
                    var b = v.length;
                    if (b) {
                      for (var d = 0; d < b;) v[d] && v[d].tick(c), d++;
                        a()
                    } else cancelAnimationFrame(B), B = 0
                  }
                  return a
                }();
                return q.version = "2.2.0", q.speed = 1, q.running = v, q.remove = function(a) {
                  a = P(a);
                  for (var c = v.length; c--;)
                    for (var d = v[c], b = d.animations, f = b.length; f--;) u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause())
                  }, q.getValue = K, q.path = function(a, c) {
                    var d = h.str(a) ? e(a)[0] : a,
                    b = c || 100;
                    return function(a) {
                      return {
                        el: d,
                        property: a,
                        totalLength: N(d) * (b / 100)
                      }
                    }
                  }, q.setDashoffset = function(a) {
                    var c = N(a);
                    return a.setAttribute("stroke-dasharray", c), c
                  }, q.bezier = A, q.easings = Q, q.timeline = function(a) {
                    var c = q(a);
                    return c.pause(), c.duration = 0, c.add = function(d) {
                      return c.children.forEach(function(a) {
                        a.began = !0, a.completed = !0
                      }), m(d).forEach(function(b) {
                        var d = z(b, D(S, a || {}));
                        d.targets = d.targets || a.targets, b = c.duration;
                        var e = d.offset;
                        d.autoplay = !1, d.direction = c.direction, d.offset = h.und(e) ? b : L(e, b), c.began = !0, c.completed = !0, c.seek(d.offset), (d = q(d)).began = !0, d.completed = !0, d.duration > b && (c.duration = d.duration), c.children.push(d)
                      }), c.seek(0), c.reset(), c.autoplay && c.restart(), c
                    }, c
                  }, q.random = function(a, c) {
                    return Math.floor(Math.random() * (c - a + 1)) + a
                  }, q
                }),
function(factory) {
  window.cash = factory()
}(function() {
  var doc = document,
  win = window,
  ArrayProto = Array.prototype,
  slice = ArrayProto.slice,
  filter = ArrayProto.filter,
  push = ArrayProto.push,
  noop = function() {},
  isFunction = function(item) {
    return "function" == typeof item && item.call
  },
  isString = function(item) {
    return "string" == typeof item
  },
  idMatch = /^#[\w-]*$/,
  classMatch = /^\.[\w-]*$/,
  htmlMatch = /<.+>/,
  singlet = /^\w+$/,
  frag;

  function find(selector, context) {
    var elems;
    return context = context || doc, classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector)
  }

  function parseHTML(str) {
    if (!frag) {
      var base = (frag = doc.implementation.createHTMLDocument(null)).createElement("base");
      base.href = doc.location.href, frag.head.appendChild(base)
    }
    return frag.body.innerHTML = str, frag.body.childNodes
  }

  function onReady(fn) {
    "loading" !== doc.readyState ? fn() : doc.addEventListener("DOMContentLoaded", fn)
  }

  function Init(selector, context) {
    if (!selector) return this;
    if (selector.cash && selector !== win) return selector;
    var elems = selector,
    i = 0,
    length;
    if (isString(selector)) elems = idMatch.test(selector) ? doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ? parseHTML(selector) : find(selector, context);
    else if (isFunction(selector)) return onReady(selector), this;
    if (!elems) return this;
    if (elems.nodeType || elems === win) this[0] = elems, this.length = 1;
    else
      for (length = this.length = elems.length; i < length; i++) this[i] = elems[i];
        return this
    }

    function cash(selector, context) {
      return new Init(selector, context)
    }
    var fn = cash.fn = cash.prototype = Init.prototype = {
      cash: !0,
      length: 0,
      push: push,
      splice: ArrayProto.splice,
      map: ArrayProto.map,
      init: Init
    };

    function each(collection, callback) {
      for (var l = collection.length, i = 0; i < l && !1 !== callback.call(collection[i], collection[i], i, collection); i++);
    }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector)
  }

  function getCompareFunction(selector) {
    return isString(selector) ? matches : selector.cash ? function(el) {
      return selector.is(el)
    } : function(el, selector) {
      return el === selector
    }
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function(item, index, self) {
      return self.indexOf(item) === index
    }))
  }
  Object.defineProperty(fn, "constructor", {
    value: cash
  }), cash.parseHTML = parseHTML, cash.noop = noop, cash.isFunction = isFunction, cash.isString = isString, cash.extend = fn.extend = function(target) {
    target = target || {};
    var args = slice.call(arguments),
    length = args.length,
    i = 1;
    for (1 === args.length && (target = this, i = 0); i < length; i++)
      if (args[i])
        for (var key in args[i]) args[i].hasOwnProperty(key) && (target[key] = args[i][key]);
          return target
      }, cash.extend({
        merge: function(first, second) {
          for (var len = +second.length, i = first.length, j = 0; j < len; i++, j++) first[i] = second[j];
            return first.length = i, first
        },
        each: each,
        matches: matches,
        unique: unique,
        isArray: Array.isArray,
        isNumeric: function(n) {
          return !isNaN(parseFloat(n)) && isFinite(n)
        }
      });
      var uid = cash.uid = "_cash" + Date.now();

      function getDataCache(node) {
        return node[uid] = node[uid] || {}
      }

      function setData(node, key, value) {
        return getDataCache(node)[key] = value
      }

      function getData(node, key) {
        var c = getDataCache(node);
        return void 0 === c[key] && (c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key)), c[key]
      }

      function removeData(node, key) {
        var c = getDataCache(node);
        c ? delete c[key] : node.dataset ? delete node.dataset[key] : cash(node).removeAttr("data-" + name)
      }
      fn.extend({
        data: function(name, value) {
          if (isString(name)) return void 0 === value ? getData(this[0], name) : this.each(function(v) {
            return setData(v, name, value)
          });
            for (var key in name) this.data(key, name[key]);
              return this
          },
          removeData: function(key) {
            return this.each(function(v) {
              return removeData(v, key)
            })
          }
        });
      var notWhiteMatch = /\S+/g;

      function getClasses(c) {
        return isString(c) && c.match(notWhiteMatch)
      }

      function hasClass(v, c) {
        return v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className)
      }

      function addClass(v, c, spacedName) {
        v.classList ? v.classList.add(c) : spacedName.indexOf(" " + c + " ") && (v.className += " " + c)
      }

      function removeClass(v, c) {
        v.classList ? v.classList.remove(c) : v.className = v.className.replace(c, "")
      }
      fn.extend({
        addClass: function(c) {
          var classes = getClasses(c);
          return classes ? this.each(function(v) {
            var spacedName = " " + v.className + " ";
            each(classes, function(c) {
              addClass(v, c, spacedName)
            })
          }) : this
        },
        attr: function(name, value) {
          if (name) {
            if (isString(name)) return void 0 === value ? this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : void 0 : this.each(function(v) {
              v.setAttribute ? v.setAttribute(name, value) : v[name] = value
            });
              for (var key in name) this.attr(key, name[key]);
                return this
            }
          },
          hasClass: function(c) {
            var check = !1,
            classes = getClasses(c);
            return classes && classes.length && this.each(function(v) {
              return !(check = hasClass(v, classes[0]))
            }), check
          },
          prop: function(name, value) {
            if (isString(name)) return void 0 === value ? this[0][name] : this.each(function(v) {
              v[name] = value
            });
              for (var key in name) this.prop(key, name[key]);
                return this
            },
            removeAttr: function(name) {
              return this.each(function(v) {
                v.removeAttribute ? v.removeAttribute(name) : delete v[name]
              })
            },
            removeClass: function(c) {
              if (!arguments.length) return this.attr("class", "");
              var classes = getClasses(c);
              return classes ? this.each(function(v) {
                each(classes, function(c) {
                  removeClass(v, c)
                })
              }) : this
            },
            removeProp: function(name) {
              return this.each(function(v) {
                delete v[name]
              })
            },
            toggleClass: function(c, state) {
              if (void 0 !== state) return this[state ? "addClass" : "removeClass"](c);
              var classes = getClasses(c);
              return classes ? this.each(function(v) {
                var spacedName = " " + v.className + " ";
                each(classes, function(c) {
                  hasClass(v, c) ? removeClass(v, c) : addClass(v, c, spacedName)
                })
              }) : this
            }
          }), fn.extend({
            add: function(selector, context) {
              return unique(cash.merge(this, cash(selector, context)))
            },
            each: function(callback) {
              return each(this, callback), this
            },
            eq: function(index) {
              return cash(this.get(index))
            },
            filter: function(selector) {
              if (!selector) return this;
              var comparator = isFunction(selector) ? selector : getCompareFunction(selector);
              return cash(filter.call(this, function(e) {
                return comparator(e, selector)
              }))
            },
            first: function() {
              return this.eq(0)
            },
            get: function(index) {
              return void 0 === index ? slice.call(this) : index < 0 ? this[index + this.length] : this[index]
            },
            index: function(elem) {
              var child = elem ? cash(elem)[0] : this[0],
              collection = elem ? this : cash(child).parent().children();
              return slice.call(collection).indexOf(child)
            },
            last: function() {
              return this.eq(-1)
            }
          });
          var camelCase = (camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g, function(str) {
            return str.replace(camelRegex, function(letter, index) {
              return letter[0 === index ? "toLowerCase" : "toUpperCase"]()
            }).replace(whiteSpace, "")
          }),
          camelRegex, whiteSpace, getPrefixedProp = function() {
            var cache = {},
            doc, div, style = document.createElement("div").style;
            return function(prop) {
              if (prop = camelCase(prop), cache[prop]) return cache[prop];
              var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
              prefixes, props;
              return each((prop + " " + ["webkit", "moz", "ms", "o"].join(ucProp + " ") + ucProp).split(" "), function(p) {
                if (p in style) return cache[p] = prop = cache[prop] = p, !1
              }), cache[prop]
            }
          }();

          function compute(el, prop) {
            return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0
          }

          function registerEvent(node, eventName, callback) {
            var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
            eventCache[eventName] = eventCache[eventName] || [], eventCache[eventName].push(callback), node.addEventListener(eventName, callback)
          }

          function removeEvent(node, eventName, callback) {
            var events = getData(node, "_cashEvents"),
            eventCache = events && events[eventName],
            index;
            eventCache && (callback ? (node.removeEventListener(eventName, callback), (index = eventCache.indexOf(callback)) >= 0 && eventCache.splice(index, 1)) : (each(eventCache, function(event) {
              node.removeEventListener(eventName, event)
            }), eventCache = []))
          }

          function encode(name, value) {
            return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+")
          }

          function getSelectMultiple_(el) {
            var values = [];
            return each(el.options, function(o) {
              o.selected && values.push(o.value)
            }), values.length ? values : null
          }

          function getSelectSingle_(el) {
            var selectedIndex = el.selectedIndex;
            return selectedIndex >= 0 ? el.options[selectedIndex].value : null
          }

          function getValue(el) {
            var type = el.type;
            if (!type) return null;
            switch (type.toLowerCase()) {
              case "select-one":
              return getSelectSingle_(el);
              case "select-multiple":
              return getSelectMultiple_(el);
              case "radio":
              case "checkbox":
              return el.checked ? el.value : null;
              default:
              return el.value ? el.value : null
            }
          }

          function insertElement(el, child, prepend) {
            if (prepend) {
              var first = el.childNodes[0];
              el.insertBefore(child, first)
            } else el.appendChild(child)
          }

          function insertContent(parent, child, prepend) {
            var str = isString(child);
            str || !child.length ? each(parent, str ? function(v) {
              return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child)
            } : function(v, i) {
              return insertElement(v, 0 === i ? child : child.cloneNode(!0), prepend)
            }) : each(child, function(v) {
              return insertContent(parent, v, prepend)
            })
          }
          cash.prefixedProp = getPrefixedProp, cash.camelCase = camelCase, fn.extend({
            css: function(prop, value) {
              if (isString(prop)) return prop = getPrefixedProp(prop), arguments.length > 1 ? this.each(function(v) {
                return v.style[prop] = value
              }) : win.getComputedStyle(this[0])[prop];
                for (var key in prop) this.css(key, prop[key]);
                  return this
              }
            }), each(["Width", "Height"], function(v) {
              var lower = v.toLowerCase();
              fn[lower] = function() {
                return this[0].getBoundingClientRect()[lower]
              }, fn["inner" + v] = function() {
                return this[0]["client" + v]
              }, fn["outer" + v] = function(margins) {
                return this[0]["offset" + v] + (margins ? compute(this, "margin" + ("Width" === v ? "Left" : "Top")) + compute(this, "margin" + ("Width" === v ? "Right" : "Bottom")) : 0)
              }
            }), fn.extend({
              off: function(eventName, callback) {
                return this.each(function(v) {
                  return removeEvent(v, eventName, callback)
                })
              },
              on: function(eventName, delegate, callback, runOnce) {
                var originalCallback;
                if (!isString(eventName)) {
                  for (var key in eventName) this.on(key, delegate, eventName[key]);
                    return this
                }
                return isFunction(delegate) && (callback = delegate, delegate = null), "ready" === eventName ? (onReady(callback), this) : (delegate && (originalCallback = callback, callback = function(e) {
                  for (var t = e.target; !matches(t, delegate);) {
                    if (t === this || null === t) return !1;
                    t = t.parentNode
                  }
                  t && originalCallback.call(t, e)
                }), this.each(function(v) {
                  var finalCallback = callback;
                  runOnce && (finalCallback = function() {
                    callback.apply(this, arguments), removeEvent(v, eventName, finalCallback)
                  }), registerEvent(v, eventName, finalCallback)
                }))
              },
              one: function(eventName, delegate, callback) {
                return this.on(eventName, delegate, callback, !0)
              },
              ready: onReady,
              trigger: function(eventName, data) {
                if (document.createEvent) {
                  let evt = document.createEvent("HTMLEvents");
                  return evt.initEvent(eventName, !0, !1), evt = this.extend(evt, data), this.each(function(v) {
                    return v.dispatchEvent(evt)
                  })
                }
              }
            }), fn.extend({
              serialize: function() {
                var query = "";
                return each(this[0].elements || this, function(el) {
                  if (!el.disabled && "FIELDSET" !== el.tagName) {
                    var name = el.name;
                    switch (el.type.toLowerCase()) {
                      case "file":
                      case "reset":
                      case "submit":
                      case "button":
                      break;
                      case "select-multiple":
                      var values = getValue(el);
                      null !== values && each(values, function(value) {
                        query += encode(name, value)
                      });
                      break;
                      default:
                      var value = getValue(el);
                      null !== value && (query += encode(name, value))
                    }
                  }
                }), query.substr(1)
              },
              val: function(value) {
                return void 0 === value ? getValue(this[0]) : this.each(function(v) {
                  return v.value = value
                })
              }
            }), fn.extend({
              after: function(selector) {
                return cash(selector).insertAfter(this), this
              },
              append: function(content) {
                return insertContent(this, content), this
              },
              appendTo: function(parent) {
                return insertContent(cash(parent), this), this
              },
              before: function(selector) {
                return cash(selector).insertBefore(this), this
              },
              clone: function() {
                return cash(this.map(function(v) {
                  return v.cloneNode(!0)
                }))
              },
              empty: function() {
                return this.html(""), this
              },
              html: function(content) {
                if (void 0 === content) return this[0].innerHTML;
                var source = content.nodeType ? content[0].outerHTML : content;
                return this.each(function(v) {
                  return v.innerHTML = source
                })
              },
              insertAfter: function(selector) {
                var _this = this;
                return cash(selector).each(function(el, i) {
                  var parent = el.parentNode,
                  sibling = el.nextSibling;
                  _this.each(function(v) {
                    parent.insertBefore(0 === i ? v : v.cloneNode(!0), sibling)
                  })
                }), this
              },
              insertBefore: function(selector) {
                var _this2 = this;
                return cash(selector).each(function(el, i) {
                  var parent = el.parentNode;
                  _this2.each(function(v) {
                    parent.insertBefore(0 === i ? v : v.cloneNode(!0), el)
                  })
                }), this
              },
              prepend: function(content) {
                return insertContent(this, content, !0), this
              },
              prependTo: function(parent) {
                return insertContent(cash(parent), this, !0), this
              },
              remove: function() {
                return this.each(function(v) {
                  if (v.parentNode) return v.parentNode.removeChild(v)
                })
              },
              text: function(content) {
                return void 0 === content ? this[0].textContent : this.each(function(v) {
                  return v.textContent = content
                })
              }
            });
            var docEl = doc.documentElement;
            return fn.extend({
              position: function() {
                var el = this[0];
                return {
                  left: el.offsetLeft,
                  top: el.offsetTop
                }
              },
              offset: function() {
                var rect = this[0].getBoundingClientRect();
                return {
                  top: rect.top + win.pageYOffset - docEl.clientTop,
                  left: rect.left + win.pageXOffset - docEl.clientLeft
                }
              },
              offsetParent: function() {
                return cash(this[0].offsetParent)
              }
            }), fn.extend({
              children: function(selector) {
                var elems = [];
                return this.each(function(el) {
                  push.apply(elems, el.children)
                }), elems = unique(elems), selector ? elems.filter(function(v) {
                  return matches(v, selector)
                }) : elems
              },
              closest: function(selector) {
                return !selector || this.length < 1 ? cash() : this.is(selector) ? this.filter(selector) : this.parent().closest(selector)
              },
              is: function(selector) {
                if (!selector) return !1;
                var match = !1,
                comparator = getCompareFunction(selector);
                return this.each(function(el) {
                  return !(match = comparator(el, selector))
                }), match
              },
              find: function(selector) {
                if (!selector || selector.nodeType) return cash(selector && this.has(selector).length ? selector : null);
                var elems = [];
                return this.each(function(el) {
                  push.apply(elems, find(selector, el))
                }), unique(elems)
              },
              has: function(selector) {
                var comparator = isString(selector) ? function(el) {
                  return 0 !== find(selector, el).length
                } : function(el) {
                  return el.contains(selector)
                };
                return this.filter(comparator)
              },
              next: function() {
                return cash(this[0].nextElementSibling)
              },
              not: function(selector) {
                if (!selector) return this;
                var comparator = getCompareFunction(selector);
                return this.filter(function(el) {
                  return !comparator(el, selector)
                })
              },
              parent: function() {
                var result = [];
                return this.each(function(item) {
                  item && item.parentNode && result.push(item.parentNode)
                }), unique(result)
              },
              parents: function(selector) {
                var last, result = [];
                return this.each(function(item) {
                  for (last = item; last && last.parentNode && last !== doc.body.parentNode;) last = last.parentNode, (!selector || selector && matches(last, selector)) && result.push(last)
                }), unique(result)
              },
              prev: function() {
                return cash(this[0].previousElementSibling)
              },
              siblings: function(selector) {
                var collection = this.parent().children(selector),
                el = this[0];
                return collection.filter(function(i) {
                  return i !== el
                })
              }
            }), cash
          });
class Component {
  constructor(classDef, el, options) {
    el instanceof Element || console.error(Error(el + " is not an HTML Element"));
    let ins = classDef.getInstance(el);
    ins && ins.destroy(), this.el = el, this.$el = cash(el)
  }
  static init(classDef, els, options) {
    let instances = null;
    if (els instanceof Element) instances = new classDef(els, options);
    else if (els && (els.jquery || els.cash || els instanceof NodeList)) {
      let instancesArr = [];
      for (let i = 0; i < els.length; i++) instancesArr.push(new classDef(els[i], options));
        instances = instancesArr
    }
    return instances
  }
}! function($, anim) {
  "use strict";
  let _defaults = {
    edge: "left",
    draggable: !0,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: !0
  };
  class Sidenav extends Component {
    constructor(el, options) {
      super(Sidenav, el, options), this.el.M_Sidenav = this, this.id = this.$el.attr("id"), this.options = $.extend({}, Sidenav.defaults, options), this.isOpen = !1, this.isFixed = this.el.classList.contains("nav-out"), this.isDragged = !1, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this._createOverlay(), this._navLinks(), this._createDragTarget(), this._setupEventHandlers(), this._setupClasses(), this._setupFixed(), Sidenav._sidenavs.push(this)
    }
    static get defaults() {
      return _defaults
    }
    static init(els, options) {
      return super.init(this, els, options)
    }
    static getInstance(el) {
      let domElem;
      return (el.jquery ? el[0] : el).M_Sidenav
    }
    destroy() {
      this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";
      let index = Sidenav._sidenavs.indexOf(this);
      index >= 0 && Sidenav._sidenavs.splice(index, 1)
    }
    _createOverlay() {
      let overlay = document.createElement("div");
      this._closeBound = this.close.bind(this), overlay.classList.add("nav-overlay"), overlay.addEventListener("click", this._closeBound), document.querySelector(".header").appendChild(overlay), this._overlay = overlay
    }
    _navLinks() {
      this._closeBound = this.close.bind(this);
      for (let i of $navLinks) i.addEventListener("click", this._closeBound)
    }
  _setupEventHandlers() {
    0 === Sidenav._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound))
  }
  _removeEventHandlers() {
    1 === Sidenav._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
  }
  _handleTriggerClick(e) {
    let $trigger = $(e.target).closest(".nav-toggle");
    if (e.target && $trigger.length) {
      let sidenavId = M.getIdFromTrigger($trigger[0]),
      sidenavInstance = document.getElementById(sidenavId).M_Sidenav;
      sidenavInstance && sidenavInstance.open($trigger), e.preventDefault()
    }
  }
  _startDrag(e) {
    let clientX = e.targetTouches[0].clientX;
    this.isDragged = !0, this._startingXpos = clientX, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, anim.remove(this.el), anim.remove(this._overlay)
  }
  _dragMoveUpdate(e) {
    let clientX = e.targetTouches[0].clientX,
    currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
    this.deltaX = Math.abs(this._xPos - clientX), this._xPos = clientX, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== currentScrollTop && (this._verticallyScrolling = !0)
  }
  _handleDragTargetDrag(e) {
    if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
    this.isDragged || this._startDrag(e), this._dragMoveUpdate(e);
    let totalDeltaX = this._xPos - this._startingXpos,
    dragDirection = totalDeltaX > 0 ? "right" : "left";
    totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX)), this.options.edge === dragDirection && (totalDeltaX = 0);
    let transformX = totalDeltaX,
    transformPrefix = "translateX(-100%)";
    "right" === this.options.edge && (transformPrefix = "translateX(100%)", transformX = -transformX), this.percentOpen = Math.min(1, totalDeltaX / this._width), this.el.style.transform = `${transformPrefix} translateX(${transformX}px)`, this._overlay.style.opacity = this.percentOpen
  }
  _handleDragTargetRelease() {
    this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1)
  }
  _handleCloseDrag(e) {
    if (this.isOpen) {
      if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
      this.isDragged || this._startDrag(e), this._dragMoveUpdate(e);
      let totalDeltaX = this._xPos - this._startingXpos,
      dragDirection = totalDeltaX > 0 ? "right" : "left";
      totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX)), this.options.edge !== dragDirection && (totalDeltaX = 0);
      let transformX = -totalDeltaX;
      "right" === this.options.edge && (transformX = -transformX), this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width), this.el.style.transform = `translateX(${transformX}px)`, this._overlay.style.opacity = this.percentOpen
    }
  }
  _handleCloseRelease() {
    this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1)
  }
  _handleCloseTriggerClick(e) {
    let $closeTrigger;
    $(e.target).closest(".nav-close").length && !this._isCurrentlyFixed() && this.close()
  }
  _handleWindowResize() {
    this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight
  }
  _setupClasses() {
    "right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"))
  }
  _removeClasses() {
    this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned")
  }
  _setupFixed() {
    this._isCurrentlyFixed() && this.open()
  }
  _isCurrentlyFixed() {
    return this.isFixed && window.innerWidth > 992
  }
  _createDragTarget() {
    let dragTarget = document.createElement("div");
    dragTarget.classList.add("drag-target"), document.querySelector(".header").appendChild(dragTarget), this.dragTarget = dragTarget
  }
  _preventBodyScrolling() {
    let body;
    document.body.style.overflow = "hidden"
  }
  _enableBodyScrolling() {
    let body;
    document.body.style.overflow = ""
  }
  open() {
    !0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (anim.remove(this.el), anim({
      targets: this.el,
      translateX: 0,
      duration: 0,
      easing: "easeOutQuad"
    }), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()))
  }
  close() {
    if (!1 !== this.isOpen)
      if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
        let transformX = "left" === this.options.edge ? "-105%" : "105%";
        this.el.style.transform = `translateX(${transformX})`
      } else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
    }
    _animateIn() {
      this._animateSidenavIn(), this._animateOverlayIn()
    }
    _animateSidenavIn() {
      let slideOutPercent = "left" === this.options.edge ? -1 : 1;
      this.isDragged && (slideOutPercent = "left" === this.options.edge ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen), anim.remove(this.el), anim({
        targets: this.el,
        translateX: [`${100*slideOutPercent}%`, 0],
        duration: this.options.inDuration,
        easing: "easeOutQuad",
        complete: () => {
          "function" == typeof this.options.onOpenEnd && this.options.onOpenEnd.call(this, this.el)
        }
      })
    }
    _animateOverlayIn() {
      let start = 0;
      this.isDragged ? start = this.percentOpen : $(this._overlay).css({
        display: "block"
      }), anim.remove(this._overlay), anim({
        targets: this._overlay,
        opacity: [start, 1],
        duration: this.options.inDuration,
        easing: "easeOutQuad"
      })
    }
    _animateOut() {
      this._animateSidenavOut(), this._animateOverlayOut()
    }
    _animateSidenavOut() {
      let endPercent = "left" === this.options.edge ? -1 : 1,
      slideOutPercent = 0;
      this.isDragged && (slideOutPercent = "left" === this.options.edge ? endPercent + this.percentOpen : endPercent - this.percentOpen), anim.remove(this.el), anim({
        targets: this.el,
        translateX: [`${100*slideOutPercent}%`, `${105*endPercent}%`],
        duration: this.options.outDuration,
        easing: "easeOutQuad",
        complete: () => {
          "function" == typeof this.options.onCloseEnd && this.options.onCloseEnd.call(this, this.el)
        }
      })
    }
    _animateOverlayOut() {
      anim.remove(this._overlay), anim({
        targets: this._overlay,
        opacity: 0,
        duration: this.options.outDuration,
        easing: "easeOutQuad",
        complete: () => {
          $(this._overlay).css("display", "none")
        }
      })
    }
  }
  Sidenav._sidenavs = [], M.Sidenav = Sidenav
}(cash, M.anime),
function(window) {
  "use strict";
  var Waves = Waves || {},
  $$ = document.querySelectorAll.bind(document);

  function isWindow(obj) {
    return null !== obj && obj === obj.window
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView
  }

  function offset(elem) {
    var docElem, win, box = {
      top: 0,
      left: 0
    },
    doc = elem && elem.ownerDocument;
    return docElem = doc.documentElement, void 0 !== elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    }
  }

  function convertStyle(obj) {
    var style = "";
    for (var a in obj) obj.hasOwnProperty(a) && (style += a + ":" + obj[a] + ";");
      return style
  }
  var Effect = {
    duration: 750,
    show: function(e, element) {
      if (2 === e.button) return !1;
      var el = element || this,
      ripple = document.createElement("div");
      ripple.className = "waves-ripple", el.appendChild(ripple);
      var pos = offset(el),
      relativeY = e.pageY - pos.top,
      relativeX = e.pageX - pos.left,
      scale = "scale(" + el.clientWidth / 100 * 10 + ")";
      "touches" in e && (relativeY = e.touches[0].pageY - pos.top, relativeX = e.touches[0].pageX - pos.left), ripple.setAttribute("data-hold", Date.now()), ripple.setAttribute("data-scale", scale), ripple.setAttribute("data-x", relativeX), ripple.setAttribute("data-y", relativeY);
      var rippleStyle = {
        top: relativeY + "px",
        left: relativeX + "px"
      };
      rippleStyle["-webkit-transform"] = scale, rippleStyle["-moz-transform"] = scale, rippleStyle["-ms-transform"] = scale, rippleStyle["-o-transform"] = scale, rippleStyle.transform = scale, rippleStyle.opacity = "1", rippleStyle["-webkit-transition-duration"] = Effect.duration + "ms", rippleStyle["-moz-transition-duration"] = Effect.duration + "ms", rippleStyle["-o-transition-duration"] = Effect.duration + "ms", rippleStyle["transition-duration"] = Effect.duration + "ms", rippleStyle["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", rippleStyle["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", rippleStyle["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", rippleStyle["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", ripple.setAttribute("style", convertStyle(rippleStyle))
    },
    hide: function(e) {
      TouchHandler.touchup(e);
      var el = this,
      width = 1.4 * el.clientWidth,
      ripple = null,
      ripples = el.getElementsByClassName("waves-ripple");
      if (!(ripples.length > 0)) return !1;
      var relativeX = (ripple = ripples[ripples.length - 1]).getAttribute("data-x"),
      relativeY = ripple.getAttribute("data-y"),
      scale = ripple.getAttribute("data-scale"),
      diff, delay = 350 - (Date.now() - Number(ripple.getAttribute("data-hold")));
      delay < 0 && (delay = 0), setTimeout(function() {
        var style = {
          top: relativeY + "px",
          left: relativeX + "px",
          opacity: "0",
          "-webkit-transition-duration": Effect.duration + "ms",
          "-moz-transition-duration": Effect.duration + "ms",
          "-o-transition-duration": Effect.duration + "ms",
          "transition-duration": Effect.duration + "ms",
          "-webkit-transform": scale,
          "-moz-transform": scale,
          "-ms-transform": scale,
          "-o-transform": scale,
          transform: scale
        };
        ripple.setAttribute("style", convertStyle(style)), setTimeout(function() {
          try {
            el.removeChild(ripple)
          } catch (e) {
            return !1
          }
        }, Effect.duration)
      }, delay)
    },
    wrapInput: function(elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];
        if ("input" === el.tagName.toLowerCase()) {
          var parent = el.parentNode;
          if ("i" === parent.tagName.toLowerCase() && -1 !== parent.className.indexOf("waves")) continue
        }
    }
  }
},
TouchHandler = {
  touches: 0,
  allowEvent: function(e) {
    var allow = !0;
    return "touchstart" === e.type ? TouchHandler.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
      TouchHandler.touches > 0 && (TouchHandler.touches -= 1)
    }, 500) : "mousedown" === e.type && TouchHandler.touches > 0 && (allow = !1), allow
  },
  touchup: function(e) {
    TouchHandler.allowEvent(e)
  }
};

function getWavesEffectElement(e) {
  if (!1 === TouchHandler.allowEvent(e)) return null;
  for (var element = null, target = e.target || e.srcElement; null !== target.parentNode;) {
    if (!(target instanceof SVGElement) && -1 !== target.className.indexOf("waves")) {
      element = target;
      break
    }
    target = target.parentNode
  }
  return element
}

function showEffect(e) {
  var element = getWavesEffectElement(e);
  null !== element && (Effect.show(e, element), "ontouchstart" in window && (element.addEventListener("touchend", Effect.hide, !1), element.addEventListener("touchcancel", Effect.hide, !1)), element.addEventListener("mouseup", Effect.hide, !1), element.addEventListener("mouseleave", Effect.hide, !1), element.addEventListener("dragend", Effect.hide, !1))
}
Waves.displayEffect = function(options) {
  "duration" in (options = options || {}) && (Effect.duration = options.duration), Effect.wrapInput($$(".waves")), "ontouchstart" in window && document.body.addEventListener("touchstart", showEffect, !1), document.body.addEventListener("mousedown", showEffect, !1)
}, Waves.attach = function(element) {
  "input" === element.tagName.toLowerCase() && (Effect.wrapInput([element]), element = element.parentNode), "ontouchstart" in window && element.addEventListener("touchstart", showEffect, !1), element.addEventListener("mousedown", showEffect, !1)
}, window.Waves = Waves, document.addEventListener("DOMContentLoaded", function() {
  Waves.displayEffect()
}, !1)
}(window);