export default function() {
  var google = {};
  try {
    if (!google.doodle) google.doodle = {};
    var d = ["webkitTransition", "MozTransition", "OTransition", "transition"],
      f,
      g = null,
      h = !1,
      i = !1,
      j = !1,
      k = !0,
      l = !1,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = !1,
      v = !1,
      w = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
      },
      x = function(a, b, c) {
        if (!google.doodle.a) google.doodle.a = [];
        google.doodle.a.push(arguments);
        var e = a,
          C = b,
          D = c;
        e.addEventListener ? e.addEventListener(C, D, !1) : e.attachEvent("on" + C, D)
      },
      y = function() {
        h = k && i;
        p.className = h ? "visible" : "";
        if (!u) p.style.visibility = h ? "visible" : "hidden";
        var a = j && i;
        if (a) t.style.left = m + 289 + "px",
          t.style.top = n + 10 + "px";
        v ? t.style.opacity = a ? 1 : 0 : t.style.display = a ? "block" : "none"
      },
      z = function(a, b) {
        var c = a - m,
          e = b - n;
        i = c > -10 && e > -10 && c < 431 && e < 167;
        if (k && i) p.style.left = a - (l ? 100 : 0) + "px",
          p.style.top = b + "px",
          c = -(c * 3 - 100),
          e = -(e * 3 - 100),
          r.style.left = c - 23 + "px",
          r.style.top = e - 41 + "px",
          q.style.left = c - 51 + "px",
          q.style.top = e - 22 + "px",
          s.style.left = c - 51 + "px",
          s.style.top = e - 159 + "px";
        y()
      },
      B = function(a) {
        f = [(a.clientX || a.targetTouches && a.targetTouches[0].clientX || 0) + (document.body.scrollLeft || document.documentElement.scrollLeft || 0), (a.clientY || a.targetTouches && a.targetTouches[0].clientY || 0) + (document.body.scrollTop || document.documentElement.scrollTop || 0)];
        g || (g = window.setTimeout(A, 30))
      },
      A = function() {
        g = null;
        f && z(f[0], f[1])
      },
      E = function() {
        k ? (k = !1, j = !0, y()) : google.nav && google.nav.go ? google.nav.go("/search?q=World%27s+Fair&ct=worldsfair11-hp&oi=ddle") : window.location.href = "/search?q=World%27s+Fair&ct=worldsfair11-hp&oi=ddle"
      },
      F = function() {
        k = !1;
        j = !0;
        y()
      },
      G = function() {
        if (o = document.getElementById("hplogo")) {
          var a = o,
            b = 0;
          do b += a.offsetLeft;
          while (a = a.offsetParent);
          m = b;
          a = o;
          b = 0;
          do b += a.offsetTop;
          while (a = a.offsetParent);
          n = b
        }
      },
      H = function(a) {
        a.preventDefault();
        l = k = !0;
        B(a)
      },
      I = function() {
        k = !1;
        y()
      },
      J = function() {
        if (google.doodle.a)
          for (var a; a = google.doodle.a.pop();) w.apply(null, a);
        g && (window.clearTimeout(g), g = null);
        k = !1;
        y()
      },
      K = function(a) {
        return document.getElementById(a).getElementsByTagName("div")[0]
      },
      L = function() {
        if (!google.doodle.b) google.doodle.b = !0;
        if (o = document.getElementById("hplogo")) {
          p = document.getElementById("loupe");
          q = K("loupe-canvas-top");
          r = K("loupe-canvas-mid");
          s = K("loupe-canvas-bottom");
          t = document.getElementById("hplogot");
          p.style.marginLeft = "-100px";
          p.style.marginTop = "-100px";
          p.style.width = "200px";
          p.style.height = "200px";
          k = !0;
          j = !1;
          G();
          window.setTimeout(G, 0);
          z(0, 0);
          x(document, "mousemove", B);
          x(o, "touchstart", H);
          x(o, "touchmove", B);
          x(document, "touchend", I);
          x(o, "mousedown", E);
          x(window, "resize", G);
          x(window, "load", G);
          x(document, "keydown", F);
          x(document.forms.f || document.forms.gs || document.forms.c, "keydown", F);
          x(navigator.userAgent.indexOf("Firefox") >= 0 ? window : document.body, "keydown", F);
          for (var a = 0, b; b = d[a++];)
            if (typeof p.style[b] != "undefined") {
              u = !0;
              p.style.visibility = "visible";
              break
            }
          if (typeof t.style.opacity != "undefined") v = !0,
            t.style.display = "block"
        }
      };
    L();
  } catch (M) {
    console.log(M);
  };
}
