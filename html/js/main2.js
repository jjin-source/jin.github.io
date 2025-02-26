(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        t(i);
    new MutationObserver(i => {
        for (const n of i)
            if (n.type === "childList")
                for (const s of n.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && t(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity),
        i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function t(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const n = r(i);
        fetch(i.href, n)
    }
}
)();
function vr(u) {
    if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u
}
function _u(u, e) {
    u.prototype = Object.create(e.prototype),
    u.prototype.constructor = u,
    u.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Vt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Pi = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Js, pt, Fe, gr = 1e8, dt = 1 / gr, Ts = Math.PI * 2, qa = Ts / 4, Ga = 0, Du = Math.sqrt, Ka = Math.cos, ja = Math.sin, et = function(e) {
    return typeof e == "string"
}, Oe = function(e) {
    return typeof e == "function"
}, Tr = function(e) {
    return typeof e == "number"
}, eo = function(e) {
    return typeof e > "u"
}, yr = function(e) {
    return typeof e == "object"
}, Tt = function(e) {
    return e !== !1
}, to = function() {
    return typeof window < "u"
}, vn = function(e) {
    return Oe(e) || et(e)
}, gu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, _t = Array.isArray, Ss = /(?:-?\.?\d|\.)+/gi, mu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ci = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, fs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Cu = /[+-]=-?[.\d]+/, yu = /[^,'"\[\]\s]+/gi, Qa = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ae, fr, As, ro, $t = {}, Hn = {}, xu, vu = function(e) {
    return (Hn = ui(e, $t)) && Mt
}, io = function(e, r) {
    return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
}, fn = function(e, r) {
    return !r && console.warn(e)
}, bu = function(e, r) {
    return e && ($t[e] = r) && Hn && (Hn[e] = r) || $t
}, cn = function() {
    return 0
}, Za = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, zn = {
    suppressEvents: !0,
    kill: !1
}, Ja = {
    suppressEvents: !0
}, no = {}, zr = [], Ps = {}, Eu, It = {}, cs = {}, To = 30, In = [], so = "", oo = function(e) {
    var r = e[0], t, i;
    if (yr(r) || Oe(r) || (e = [e]),
    !(t = (r._gsap || {}).harness)) {
        for (i = In.length; i-- && !In[i].targetTest(r); )
            ;
        t = In[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new Gu(e[i],t))) || e.splice(i, 1);
    return e
}, ei = function(e) {
    return e._gsap || oo(Gt(e))[0]._gsap
}, Fu = function(e, r, t) {
    return (t = e[r]) && Oe(t) ? e[r]() : eo(t) && e.getAttribute && e.getAttribute(r) || t
}, St = function(e, r) {
    return (e = e.split(",")).forEach(r) || e
}, ke = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Je = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Ei = function(e, r) {
    var t = r.charAt(0)
      , i = parseFloat(r.substr(2));
    return e = parseFloat(e),
    t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
}, el = function(e, r) {
    for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; )
        ;
    return i < t
}, qn = function() {
    var e = zr.length, r = zr.slice(0), t, i;
    for (Ps = {},
    zr.length = 0,
    t = 0; t < e; t++)
        i = r[t],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, wu = function(e, r, t, i) {
    zr.length && !pt && qn(),
    e.render(r, t, pt && r < 0 && (e._initted || e._startAt)),
    zr.length && !pt && qn()
}, Tu = function(e) {
    var r = parseFloat(e);
    return (r || r === 0) && (e + "").match(yu).length < 2 ? r : et(e) ? e.trim() : e
}, Su = function(e) {
    return e
}, jt = function(e, r) {
    for (var t in r)
        t in e || (e[t] = r[t]);
    return e
}, tl = function(e) {
    return function(r, t) {
        for (var i in t)
            i in r || i === "duration" && e || i === "ease" || (r[i] = t[i])
    }
}, ui = function(e, r) {
    for (var t in r)
        e[t] = r[t];
    return e
}, So = function u(e, r) {
    for (var t in r)
        t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = yr(r[t]) ? u(e[t] || (e[t] = {}), r[t]) : r[t]);
    return e
}, Gn = function(e, r) {
    var t = {}, i;
    for (i in e)
        i in r || (t[i] = e[i]);
    return t
}, Qi = function(e) {
    var r = e.parent || Ae
      , t = e.keyframes ? tl(_t(e.keyframes)) : jt;
    if (Tt(e.inherit))
        for (; r; )
            t(e, r.vars.defaults),
            r = r.parent || r._dp;
    return e
}, rl = function(e, r) {
    for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; )
        ;
    return t < 0
}, Au = function(e, r, t, i, n) {
    var s = e[i], o;
    if (n)
        for (o = r[n]; s && s[n] > o; )
            s = s._prev;
    return s ? (r._next = s._next,
    s._next = r) : (r._next = e[t],
    e[t] = r),
    r._next ? r._next._prev = r : e[i] = r,
    r._prev = s,
    r.parent = r._dp = e,
    r
}, ns = function(e, r, t, i) {
    t === void 0 && (t = "_first"),
    i === void 0 && (i = "_last");
    var n = r._prev
      , s = r._next;
    n ? n._next = s : e[t] === r && (e[t] = s),
    s ? s._prev = n : e[i] === r && (e[i] = n),
    r._next = r._prev = r.parent = null
}, Yr = function(e, r) {
    e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, ti = function(e, r) {
    if (e && (!r || r._end > e._dur || r._start < 0))
        for (var t = e; t; )
            t._dirty = 1,
            t = t.parent;
    return e
}, il = function(e) {
    for (var r = e.parent; r && r.parent; )
        r._dirty = 1,
        r.totalDuration(),
        r = r.parent;
    return e
}, Ms = function(e, r, t, i) {
    return e._startAt && (pt ? e._startAt.revert(zn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i))
}, nl = function u(e) {
    return !e || e._ts && u(e.parent)
}, Ao = function(e) {
    return e._repeat ? Mi(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Mi = function(e, r) {
    var t = Math.floor(e /= r);
    return e && t === e ? t - 1 : t
}, Kn = function(e, r) {
    return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
}, ss = function(e) {
    return e._end = Je(e._start + (e._tDur / Math.abs(e._ts || e._rts || dt) || 0))
}, os = function(e, r) {
    var t = e._dp;
    return t && t.smoothChildTiming && e._ts && (e._start = Je(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)),
    ss(e),
    t._dirty || ti(t, e)),
    e
}, Pu = function(e, r) {
    var t;
    if ((r._time || !r._dur && r._initted || r._start < e._time && (r._dur || !r.add)) && (t = Kn(e.rawTime(), r),
    (!r._dur || Cn(0, r.totalDuration(), t) - r._tTime > dt) && r.render(t, !0)),
    ti(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (t = e; t._dp; )
                t.rawTime() >= 0 && t.totalTime(t._tTime),
                t = t._dp;
        e._zTime = -1e-8
    }
}, dr = function(e, r, t, i) {
    return r.parent && Yr(r),
    r._start = Je((Tr(t) ? t : t || e !== Ae ? Ut(e, t, r) : e._time) + r._delay),
    r._end = Je(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
    Au(e, r, "_first", "_last", e._sort ? "_start" : 0),
    Os(r) || (e._recent = r),
    i || Pu(e, r),
    e._ts < 0 && os(e, e._tTime),
    e
}, Mu = function(e, r) {
    return ($t.ScrollTrigger || io("scrollTrigger", r)) && $t.ScrollTrigger.create(r, e)
}, Ou = function(e, r, t, i, n) {
    if (ao(e, r, n),
    !e._initted)
        return 1;
    if (!t && e._pt && !pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Eu !== Nt.frame)
        return zr.push(e),
        e._lazy = [n, i],
        1
}, sl = function u(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || u(r))
}, Os = function(e) {
    var r = e.data;
    return r === "isFromStart" || r === "isStart"
}, ol = function(e, r, t, i) {
    var n = e.ratio, s = r < 0 || !r && (!e._start && sl(e) && !(!e._initted && Os(e)) || (e._ts < 0 || e._dp._ts < 0) && !Os(e)) ? 0 : 1, o = e._rDelay, a = 0, l, f, p;
    if (o && e._repeat && (a = Cn(0, e._tDur, r),
    f = Mi(a, o),
    e._yoyo && f & 1 && (s = 1 - s),
    f !== Mi(e._tTime, o) && (n = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== n || pt || i || e._zTime === dt || !r && e._zTime) {
        if (!e._initted && Ou(e, r, i, t, a))
            return;
        for (p = e._zTime,
        e._zTime = r || (t ? dt : 0),
        t || (t = r && !p),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = a,
        l = e._pt; l; )
            l.r(s, l.d),
            l = l._next;
        r < 0 && Ms(e, r, t, !0),
        e._onUpdate && !t && Wt(e, "onUpdate"),
        a && e._repeat && !t && e.parent && Wt(e, "onRepeat"),
        (r >= e._tDur || r < 0) && e.ratio === s && (s && Yr(e, 1),
        !t && !pt && (Wt(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = r)
}, ul = function(e, r, t) {
    var i;
    if (t > r)
        for (i = e._first; i && i._start <= t; ) {
            if (i.data === "isPause" && i._start > r)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= t; ) {
            if (i.data === "isPause" && i._start < r)
                return i;
            i = i._prev
        }
}, Oi = function(e, r, t, i) {
    var n = e._repeat
      , s = Je(r) || 0
      , o = e._tTime / e._tDur;
    return o && !i && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = n ? n < 0 ? 1e10 : Je(s * (n + 1) + e._rDelay * n) : s,
    o > 0 && !i && os(e, e._tTime = e._tDur * o),
    e.parent && ss(e),
    t || ti(e.parent, e),
    e
}, Po = function(e) {
    return e instanceof bt ? ti(e) : Oi(e, e._dur)
}, al = {
    _start: 0,
    endTime: cn,
    totalDuration: cn
}, Ut = function u(e, r, t) {
    var i = e.labels, n = e._recent || al, s = e.duration() >= gr ? n.endTime(!1) : e._dur, o, a, l;
    return et(r) && (isNaN(r) || r in i) ? (a = r.charAt(0),
    l = r.substr(-1) === "%",
    o = r.indexOf("="),
    a === "<" || a === ">" ? (o >= 0 && (r = r.replace(/=/, "")),
    (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (o < 0 ? n : t).totalDuration() / 100 : 1)) : o < 0 ? (r in i || (i[r] = s),
    i[r]) : (a = parseFloat(r.charAt(o - 1) + r.substr(o + 1)),
    l && t && (a = a / 100 * (_t(t) ? t[0] : t).totalDuration()),
    o > 1 ? u(e, r.substr(0, o - 1), t) + a : s + a)) : r == null ? s : +r
}, Zi = function(e, r, t) {
    var i = Tr(r[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = r[n], o, a;
    if (i && (s.duration = r[1]),
    s.parent = t,
    e) {
        for (o = s,
        a = t; a && !("immediateRender"in o); )
            o = a.vars.defaults || {},
            a = Tt(a.vars.inherit) && a.parent;
        s.immediateRender = Tt(o.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1]
    }
    return new Ye(r[0],s,r[n + 1])
}, Xr = function(e, r) {
    return e || e === 0 ? r(e) : r
}, Cn = function(e, r, t) {
    return t < e ? e : t > r ? r : t
}, ht = function(e, r) {
    return !et(e) || !(r = Qa.exec(e)) ? "" : r[1]
}, ll = function(e, r, t) {
    return Xr(t, function(i) {
        return Cn(e, r, i)
    })
}, Bs = [].slice, Bu = function(e, r) {
    return e && yr(e) && "length"in e && (!r && !e.length || e.length - 1 in e && yr(e[0])) && !e.nodeType && e !== fr
}, fl = function(e, r, t) {
    return t === void 0 && (t = []),
    e.forEach(function(i) {
        var n;
        return et(i) && !r || Bu(i, 1) ? (n = t).push.apply(n, Gt(i)) : t.push(i)
    }) || t
}, Gt = function(e, r, t) {
    return Fe && !r && Fe.selector ? Fe.selector(e) : et(e) && !t && (As || !Bi()) ? Bs.call((r || ro).querySelectorAll(e), 0) : _t(e) ? fl(e, t) : Bu(e) ? Bs.call(e, 0) : e ? [e] : []
}, Rs = function(e) {
    return e = Gt(e)[0] || fn("Invalid scope") || {},
    function(r) {
        var t = e.current || e.nativeElement || e;
        return Gt(r, t.querySelectorAll ? t : t === e ? fn("Invalid scope") || ro.createElement("div") : e)
    }
}, Ru = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Lu = function(e) {
    if (Oe(e))
        return e;
    var r = yr(e) ? e : {
        each: e
    }
      , t = ri(r.ease)
      , i = r.from || 0
      , n = parseFloat(r.base) || 0
      , s = {}
      , o = i > 0 && i < 1
      , a = isNaN(i) || o
      , l = r.axis
      , f = i
      , p = i;
    return et(i) ? f = p = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !o && a && (f = i[0],
    p = i[1]),
    function(h, d, _) {
        var c = (_ || r).length, D = s[c], m, b, E, C, F, T, x, P, S;
        if (!D) {
            if (S = r.grid === "auto" ? 0 : (r.grid || [1, gr])[1],
            !S) {
                for (x = -1e8; x < (x = _[S++].getBoundingClientRect().left) && S < c; )
                    ;
                S < c && S--
            }
            for (D = s[c] = [],
            m = a ? Math.min(S, c) * f - .5 : i % S,
            b = S === gr ? 0 : a ? c * p / S - .5 : i / S | 0,
            x = 0,
            P = gr,
            T = 0; T < c; T++)
                E = T % S - m,
                C = b - (T / S | 0),
                D[T] = F = l ? Math.abs(l === "y" ? C : E) : Du(E * E + C * C),
                F > x && (x = F),
                F < P && (P = F);
            i === "random" && Ru(D),
            D.max = x - P,
            D.min = P,
            D.v = c = (parseFloat(r.amount) || parseFloat(r.each) * (S > c ? c - 1 : l ? l === "y" ? c / S : S : Math.max(S, c / S)) || 0) * (i === "edges" ? -1 : 1),
            D.b = c < 0 ? n - c : n,
            D.u = ht(r.amount || r.each) || 0,
            t = t && c < 0 ? Uu(t) : t
        }
        return c = (D[h] - D.min) / D.max || 0,
        Je(D.b + (t ? t(c) : c) * D.v) + D.u
    }
}, Ls = function(e) {
    var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(t) {
        var i = Je(Math.round(parseFloat(t) / e) * e * r);
        return (i - i % 1) / r + (Tr(t) ? 0 : ht(t))
    }
}, ku = function(e, r) {
    var t = _t(e), i, n;
    return !t && yr(e) && (i = t = e.radius || gr,
    e.values ? (e = Gt(e.values),
    (n = !Tr(e[0])) && (i *= i)) : e = Ls(e.increment)),
    Xr(r, t ? Oe(e) ? function(s) {
        return n = e(s),
        Math.abs(n - s) <= i ? n : s
    }
    : function(s) {
        for (var o = parseFloat(n ? s.x : s), a = parseFloat(n ? s.y : 0), l = gr, f = 0, p = e.length, h, d; p--; )
            n ? (h = e[p].x - o,
            d = e[p].y - a,
            h = h * h + d * d) : h = Math.abs(e[p] - o),
            h < l && (l = h,
            f = p);
        return f = !i || l <= i ? e[f] : s,
        n || f === s || Tr(s) ? f : f + ht(s)
    }
    : Ls(e))
}, zu = function(e, r, t, i) {
    return Xr(_t(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
        return _t(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * i) / i
    })
}, cl = function() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
        r[t] = arguments[t];
    return function(i) {
        return r.reduce(function(n, s) {
            return s(n)
        }, i)
    }
}, hl = function(e, r) {
    return function(t) {
        return e(parseFloat(t)) + (r || ht(t))
    }
}, dl = function(e, r, t) {
    return Nu(e, r, 0, 1, t)
}, Iu = function(e, r, t) {
    return Xr(t, function(i) {
        return e[~~r(i)]
    })
}, pl = function u(e, r, t) {
    var i = r - e;
    return _t(e) ? Iu(e, u(0, e.length), r) : Xr(t, function(n) {
        return (i + (n - e) % i) % i + e
    })
}, _l = function u(e, r, t) {
    var i = r - e
      , n = i * 2;
    return _t(e) ? Iu(e, u(0, e.length - 1), r) : Xr(t, function(s) {
        return s = (n + (s - e) % n) % n || 0,
        e + (s > i ? n - s : s)
    })
}, hn = function(e) {
    for (var r = 0, t = "", i, n, s, o; ~(i = e.indexOf("random(", r)); )
        s = e.indexOf(")", i),
        o = e.charAt(i + 7) === "[",
        n = e.substr(i + 7, s - i - 7).match(o ? yu : Ss),
        t += e.substr(r, i - r) + zu(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
        r = s + 1;
    return t + e.substr(r, e.length - r)
}, Nu = function(e, r, t, i, n) {
    var s = r - e
      , o = i - t;
    return Xr(n, function(a) {
        return t + ((a - e) / s * o || 0)
    })
}, Dl = function u(e, r, t, i) {
    var n = isNaN(e + r) ? 0 : function(d) {
        return (1 - d) * e + d * r
    }
    ;
    if (!n) {
        var s = et(e), o = {}, a, l, f, p, h;
        if (t === !0 && (i = 1) && (t = null),
        s)
            e = {
                p: e
            },
            r = {
                p: r
            };
        else if (_t(e) && !_t(r)) {
            for (f = [],
            p = e.length,
            h = p - 2,
            l = 1; l < p; l++)
                f.push(u(e[l - 1], e[l]));
            p--,
            n = function(_) {
                _ *= p;
                var c = Math.min(h, ~~_);
                return f[c](_ - c)
            }
            ,
            t = r
        } else
            i || (e = ui(_t(e) ? [] : {}, e));
        if (!f) {
            for (a in r)
                uo.call(o, e, a, "get", r[a]);
            n = function(_) {
                return co(_, o) || (s ? e.p : e)
            }
        }
    }
    return Xr(t, n)
}, Mo = function(e, r, t) {
    var i = e.labels, n = gr, s, o, a;
    for (s in i)
        o = i[s] - r,
        o < 0 == !!t && o && n > (o = Math.abs(o)) && (a = s,
        n = o);
    return a
}, Wt = function(e, r, t) {
    var i = e.vars, n = i[r], s = Fe, o = e._ctx, a, l, f;
    if (n)
        return a = i[r + "Params"],
        l = i.callbackScope || e,
        t && zr.length && qn(),
        o && (Fe = o),
        f = a ? n.apply(l, a) : n.call(l),
        Fe = s,
        f
}, $i = function(e) {
    return Yr(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!pt),
    e.progress() < 1 && Wt(e, "onInterrupt"),
    e
}, yi, Yu = [], Wu = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        to() || e.headless) {
            var r = e.name
              , t = Oe(e)
              , i = r && !t && e.init ? function() {
                this._props = []
            }
            : e
              , n = {
                init: cn,
                render: co,
                add: uo,
                kill: Ol,
                modifier: Ml,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: fo,
                aliases: {},
                register: 0
            };
            if (Bi(),
            e !== i) {
                if (It[r])
                    return;
                jt(i, jt(Gn(e, n), s)),
                ui(i.prototype, ui(n, Gn(e, s))),
                It[i.prop = r] = i,
                e.targetTest && (In.push(i),
                no[r] = 1),
                r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
            }
            bu(r, i),
            e.register && e.register(Mt, i, At)
        } else
            Yu.push(e)
}, ye = 255, Xi = {
    aqua: [0, ye, ye],
    lime: [0, ye, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ye],
    navy: [0, 0, 128],
    white: [ye, ye, ye],
    olive: [128, 128, 0],
    yellow: [ye, ye, 0],
    orange: [ye, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ye, 0, 0],
    pink: [ye, 192, 203],
    cyan: [0, ye, ye],
    transparent: [ye, ye, ye, 0]
}, hs = function(e, r, t) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * ye + .5 | 0
}, Vu = function(e, r, t) {
    var i = e ? Tr(e) ? [e >> 16, e >> 8 & ye, e & ye] : 0 : Xi.black, n, s, o, a, l, f, p, h, d, _;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Xi[e])
            i = Xi[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (n = e.charAt(1),
            s = e.charAt(2),
            o = e.charAt(3),
            e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & ye, i & ye, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & ye, e & ye]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = _ = e.match(Ss),
            !r)
                a = +i[0] % 360 / 360,
                l = +i[1] / 100,
                f = +i[2] / 100,
                s = f <= .5 ? f * (l + 1) : f + l - f * l,
                n = f * 2 - s,
                i.length > 3 && (i[3] *= 1),
                i[0] = hs(a + 1 / 3, n, s),
                i[1] = hs(a, n, s),
                i[2] = hs(a - 1 / 3, n, s);
            else if (~e.indexOf("="))
                return i = e.match(mu),
                t && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(Ss) || Xi.transparent;
        i = i.map(Number)
    }
    return r && !_ && (n = i[0] / ye,
    s = i[1] / ye,
    o = i[2] / ye,
    p = Math.max(n, s, o),
    h = Math.min(n, s, o),
    f = (p + h) / 2,
    p === h ? a = l = 0 : (d = p - h,
    l = f > .5 ? d / (2 - p - h) : d / (p + h),
    a = p === n ? (s - o) / d + (s < o ? 6 : 0) : p === s ? (o - n) / d + 2 : (n - s) / d + 4,
    a *= 60),
    i[0] = ~~(a + .5),
    i[1] = ~~(l * 100 + .5),
    i[2] = ~~(f * 100 + .5)),
    t && i.length < 4 && (i[3] = 1),
    i
}, $u = function(e) {
    var r = []
      , t = []
      , i = -1;
    return e.split(Ir).forEach(function(n) {
        var s = n.match(Ci) || [];
        r.push.apply(r, s),
        t.push(i += s.length + 1)
    }),
    r.c = t,
    r
}, Oo = function(e, r, t) {
    var i = "", n = (e + i).match(Ir), s = r ? "hsla(" : "rgba(", o = 0, a, l, f, p;
    if (!n)
        return e;
    if (n = n.map(function(h) {
        return (h = Vu(h, r, 1)) && s + (r ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    t && (f = $u(e),
    a = t.c,
    a.join(i) !== f.c.join(i)))
        for (l = e.replace(Ir, "1").split(Ci),
        p = l.length - 1; o < p; o++)
            i += l[o] + (~a.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
    if (!l)
        for (l = e.split(Ir),
        p = l.length - 1; o < p; o++)
            i += l[o] + n[o];
    return i + l[p]
}, Ir = function() {
    var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Xi)
        u += "|" + e + "\\b";
    return new RegExp(u + ")","gi")
}(), gl = /hsl[a]?\(/, Xu = function(e) {
    var r = e.join(" "), t;
    if (Ir.lastIndex = 0,
    Ir.test(r))
        return t = gl.test(r),
        e[1] = Oo(e[1], t),
        e[0] = Oo(e[0], t, $u(e[1])),
        !0
}, dn, Nt = function() {
    var u = Date.now, e = 500, r = 33, t = u(), i = t, n = 1e3 / 240, s = n, o = [], a, l, f, p, h, d, _ = function c(D) {
        var m = u() - i, b = D === !0, E, C, F, T;
        if ((m > e || m < 0) && (t += m - r),
        i += m,
        F = i - t,
        E = F - s,
        (E > 0 || b) && (T = ++p.frame,
        h = F - p.time * 1e3,
        p.time = F = F / 1e3,
        s += E + (E >= n ? 4 : n - E),
        C = 1),
        b || (a = l(c)),
        C)
            for (d = 0; d < o.length; d++)
                o[d](F, h, T, D)
    };
    return p = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(D) {
            return h / (1e3 / (D || 60))
        },
        wake: function() {
            xu && (!As && to() && (fr = As = window,
            ro = fr.document || {},
            $t.gsap = Mt,
            (fr.gsapVersions || (fr.gsapVersions = [])).push(Mt.version),
            vu(Hn || fr.GreenSockGlobals || !fr.gsap && fr || {}),
            Yu.forEach(Wu)),
            f = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            a && p.sleep(),
            l = f || function(D) {
                return setTimeout(D, s - p.time * 1e3 + 1 | 0)
            }
            ,
            dn = 1,
            _(2))
        },
        sleep: function() {
            (f ? cancelAnimationFrame : clearTimeout)(a),
            dn = 0,
            l = cn
        },
        lagSmoothing: function(D, m) {
            e = D || 1 / 0,
            r = Math.min(m || 33, e)
        },
        fps: function(D) {
            n = 1e3 / (D || 240),
            s = p.time * 1e3 + n
        },
        add: function(D, m, b) {
            var E = m ? function(C, F, T, x) {
                D(C, F, T, x),
                p.remove(E)
            }
            : D;
            return p.remove(D),
            o[b ? "unshift" : "push"](E),
            Bi(),
            E
        },
        remove: function(D, m) {
            ~(m = o.indexOf(D)) && o.splice(m, 1) && d >= m && d--
        },
        _listeners: o
    },
    p
}(), Bi = function() {
    return !dn && Nt.wake()
}, ce = {}, ml = /^[\d.\-M][\d.\-,\s]/, Cl = /["']/g, yl = function(e) {
    for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, o, a, l; n < s; n++)
        a = t[n],
        o = n !== s - 1 ? a.lastIndexOf(",") : a.length,
        l = a.substr(0, o),
        r[i] = isNaN(l) ? l.replace(Cl, "").trim() : +l,
        i = a.substr(o + 1).trim();
    return r
}, xl = function(e) {
    var r = e.indexOf("(") + 1
      , t = e.indexOf(")")
      , i = e.indexOf("(", r);
    return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t)
}, vl = function(e) {
    var r = (e + "").split("(")
      , t = ce[r[0]];
    return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [yl(r[1])] : xl(e).split(",").map(Tu)) : ce._CE && ml.test(e) ? ce._CE("", e) : t
}, Uu = function(e) {
    return function(r) {
        return 1 - e(1 - r)
    }
}, Hu = function u(e, r) {
    for (var t = e._first, i; t; )
        t instanceof bt ? u(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? u(t.timeline, r) : (i = t._ease,
        t._ease = t._yEase,
        t._yEase = i,
        t._yoyo = r)),
        t = t._next
}, ri = function(e, r) {
    return e && (Oe(e) ? e : ce[e] || vl(e)) || r
}, di = function(e, r, t, i) {
    t === void 0 && (t = function(a) {
        return 1 - r(1 - a)
    }
    ),
    i === void 0 && (i = function(a) {
        return a < .5 ? r(a * 2) / 2 : 1 - r((1 - a) * 2) / 2
    }
    );
    var n = {
        easeIn: r,
        easeOut: t,
        easeInOut: i
    }, s;
    return St(e, function(o) {
        ce[o] = $t[o] = n,
        ce[s = o.toLowerCase()] = t;
        for (var a in n)
            ce[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = ce[o + "." + a] = n[a]
    }),
    n
}, qu = function(e) {
    return function(r) {
        return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
    }
}, ds = function u(e, r, t) {
    var i = r >= 1 ? r : 1
      , n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1)
      , s = n / Ts * (Math.asin(1 / i) || 0)
      , o = function(f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * ja((f - s) * n) + 1
    }
      , a = e === "out" ? o : e === "in" ? function(l) {
        return 1 - o(1 - l)
    }
    : qu(o);
    return n = Ts / n,
    a.config = function(l, f) {
        return u(e, l, f)
    }
    ,
    a
}, ps = function u(e, r) {
    r === void 0 && (r = 1.70158);
    var t = function(s) {
        return s ? --s * s * ((r + 1) * s + r) + 1 : 0
    }
      , i = e === "out" ? t : e === "in" ? function(n) {
        return 1 - t(1 - n)
    }
    : qu(t);
    return i.config = function(n) {
        return u(e, n)
    }
    ,
    i
};
St("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, e) {
    var r = e < 5 ? e + 1 : e;
    di(u + ",Power" + (r - 1), e ? function(t) {
        return Math.pow(t, r)
    }
    : function(t) {
        return t
    }
    , function(t) {
        return 1 - Math.pow(1 - t, r)
    }, function(t) {
        return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    })
});
ce.Linear.easeNone = ce.none = ce.Linear.easeIn;
di("Elastic", ds("in"), ds("out"), ds());
(function(u, e) {
    var r = 1 / e
      , t = 2 * r
      , i = 2.5 * r
      , n = function(o) {
        return o < r ? u * o * o : o < t ? u * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? u * (o -= 2.25 / e) * o + .9375 : u * Math.pow(o - 2.625 / e, 2) + .984375
    };
    di("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
di("Expo", function(u) {
    return u ? Math.pow(2, 10 * (u - 1)) : 0
});
di("Circ", function(u) {
    return -(Du(1 - u * u) - 1)
});
di("Sine", function(u) {
    return u === 1 ? 1 : -Ka(u * qa) + 1
});
di("Back", ps("in"), ps("out"), ps());
ce.SteppedEase = ce.steps = $t.SteppedEase = {
    config: function(e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e
          , i = e + (r ? 0 : 1)
          , n = r ? 1 : 0
          , s = 1 - dt;
        return function(o) {
            return ((i * Cn(0, s, o) | 0) + n) * t
        }
    }
};
Pi.ease = ce["quad.out"];
St("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
    return so += u + "," + u + "Params,"
});
var Gu = function(e, r) {
    this.id = Ga++,
    e._gsap = this,
    this.target = e,
    this.harness = r,
    this.get = r ? r.get : Fu,
    this.set = r ? r.getSetter : fo
}
  , pn = function() {
    function u(r) {
        this.vars = r,
        this._delay = +r.delay || 0,
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0,
        this._yoyo = !!r.yoyo || !!r.yoyoEase),
        this._ts = 1,
        Oi(this, +r.duration, 1, 1),
        this.data = r.data,
        Fe && (this._ctx = Fe,
        Fe.data.push(this)),
        dn || Nt.wake()
    }
    var e = u.prototype;
    return e.delay = function(t) {
        return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        Oi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, i) {
        if (Bi(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (os(this, t),
            !n._dp || n.parent || Pu(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && dr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === dt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        wu(this, t, i)),
        this
    }
    ,
    e.time = function(t, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ao(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(t, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(t, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Ao(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(t, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? Mi(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(t, i) {
        if (!arguments.length)
            return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var n = this.parent && this._ts ? Kn(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -1e-8 ? 0 : this._rts,
        this.totalTime(Cn(-Math.abs(this._delay), this._tDur, n), i !== !1),
        ss(this),
        il(this)
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && (this._ps = t,
        t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Bi(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== dt && (this._tTime -= dt)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        if (arguments.length) {
            this._start = t;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && dr(i, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (Tt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var i = this.parent || this._dp;
        return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Kn(i.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(t) {
        t === void 0 && (t = Ja);
        var i = pt;
        return pt = t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        this.data !== "nested" && t.kill !== !1 && this.kill(),
        pt = i,
        this
    }
    ,
    e.globalTime = function(t) {
        for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
            n = i._start + n / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(t) : n
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        Po(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = t,
            Po(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, i) {
        return this.totalTime(Ut(this, t), Tt(i))
    }
    ,
    e.restart = function(t, i) {
        return this.play().totalTime(t ? -this._delay : 0, Tt(i))
    }
    ,
    e.play = function(t, i) {
        return t != null && this.seek(t, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, i) {
        return t != null && this.seek(t || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, i) {
        return t != null && this.seek(t, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -1e-8,
        this
    }
    ,
    e.isActive = function() {
        var t = this.parent || this._dp, i = this._start, n;
        return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - dt)
    }
    ,
    e.eventCallback = function(t, i, n) {
        var s = this.vars;
        return arguments.length > 1 ? (i ? (s[t] = i,
        n && (s[t + "Params"] = n),
        t === "onUpdate" && (this._onUpdate = i)) : delete s[t],
        this) : s[t]
    }
    ,
    e.then = function(t) {
        var i = this;
        return new Promise(function(n) {
            var s = Oe(t) ? t : Su
              , o = function() {
                var l = i.then;
                i.then = null,
                Oe(s) && (s = s(i)) && (s.then || s === i) && (i.then = l),
                n(s),
                i.then = l
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
        }
        )
    }
    ,
    e.kill = function() {
        $i(this)
    }
    ,
    u
}();
jt(pn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var bt = function(u) {
    _u(e, u);
    function e(t, i) {
        var n;
        return t === void 0 && (t = {}),
        n = u.call(this, t) || this,
        n.labels = {},
        n.smoothChildTiming = !!t.smoothChildTiming,
        n.autoRemoveChildren = !!t.autoRemoveChildren,
        n._sort = Tt(t.sortChildren),
        Ae && dr(t.parent || Ae, vr(n), i),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        t.scrollTrigger && Mu(vr(n), t.scrollTrigger),
        n
    }
    var r = e.prototype;
    return r.to = function(i, n, s) {
        return Zi(0, arguments, this),
        this
    }
    ,
    r.from = function(i, n, s) {
        return Zi(1, arguments, this),
        this
    }
    ,
    r.fromTo = function(i, n, s, o) {
        return Zi(2, arguments, this),
        this
    }
    ,
    r.set = function(i, n, s) {
        return n.duration = 0,
        n.parent = this,
        Qi(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new Ye(i,n,Ut(this, s),1),
        this
    }
    ,
    r.call = function(i, n, s) {
        return dr(this, Ye.delayedCall(0, i, n), s)
    }
    ,
    r.staggerTo = function(i, n, s, o, a, l, f) {
        return s.duration = n,
        s.stagger = s.stagger || o,
        s.onComplete = l,
        s.onCompleteParams = f,
        s.parent = this,
        new Ye(i,s,Ut(this, a)),
        this
    }
    ,
    r.staggerFrom = function(i, n, s, o, a, l, f) {
        return s.runBackwards = 1,
        Qi(s).immediateRender = Tt(s.immediateRender),
        this.staggerTo(i, n, s, o, a, l, f)
    }
    ,
    r.staggerFromTo = function(i, n, s, o, a, l, f, p) {
        return o.startAt = s,
        Qi(o).immediateRender = Tt(o.immediateRender),
        this.staggerTo(i, n, o, a, l, f, p)
    }
    ,
    r.render = function(i, n, s) {
        var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : Je(i), p = this._zTime < 0 != i < 0 && (this._initted || !l), h, d, _, c, D, m, b, E, C, F, T, x;
        if (this !== Ae && f > a && i >= 0 && (f = a),
        f !== this._tTime || s || p) {
            if (o !== this._time && l && (f += this._time - o,
            i += this._time - o),
            h = f,
            C = this._start,
            E = this._ts,
            m = !E,
            p && (l || (o = this._zTime),
            (i || !n) && (this._zTime = i)),
            this._repeat) {
                if (T = this._yoyo,
                D = l + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(D * 100 + i, n, s);
                if (h = Je(f % D),
                f === a ? (c = this._repeat,
                h = l) : (c = ~~(f / D),
                c && c === f / D && (h = l,
                c--),
                h > l && (h = l)),
                F = Mi(this._tTime, D),
                !o && this._tTime && F !== c && this._tTime - F * D - this._dur <= 0 && (F = c),
                T && c & 1 && (h = l - h,
                x = 1),
                c !== F && !this._lock) {
                    var P = T && F & 1
                      , S = P === (T && c & 1);
                    if (c < F && (P = !P),
                    o = P ? 0 : f % l ? l : f,
                    this._lock = 1,
                    this.render(o || (x ? 0 : Je(c * D)), n, !l)._lock = 0,
                    this._tTime = f,
                    !n && this.parent && Wt(this, "onRepeat"),
                    this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
                    o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (l = this._dur,
                    a = this._tDur,
                    S && (this._lock = 2,
                    o = P ? l : -1e-4,
                    this.render(o, !0),
                    this.vars.repeatRefresh && !x && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !m)
                        return this;
                    Hu(this, x)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (b = ul(this, Je(o), Je(h)),
            b && (f -= h - (h = b._start))),
            this._tTime = f,
            this._time = h,
            this._act = !E,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            o = 0),
            !o && h && !n && !c && (Wt(this, "onStart"),
            this._tTime !== f))
                return this;
            if (h >= o && i >= 0)
                for (d = this._first; d; ) {
                    if (_ = d._next,
                    (d._act || h >= d._start) && d._ts && b !== d) {
                        if (d.parent !== this)
                            return this.render(i, n, s);
                        if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, n, s),
                        h !== this._time || !this._ts && !m) {
                            b = 0,
                            _ && (f += this._zTime = -1e-8);
                            break
                        }
                    }
                    d = _
                }
            else {
                d = this._last;
                for (var A = i < 0 ? i : h; d; ) {
                    if (_ = d._prev,
                    (d._act || A <= d._end) && d._ts && b !== d) {
                        if (d.parent !== this)
                            return this.render(i, n, s);
                        if (d.render(d._ts > 0 ? (A - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (A - d._start) * d._ts, n, s || pt && (d._initted || d._startAt)),
                        h !== this._time || !this._ts && !m) {
                            b = 0,
                            _ && (f += this._zTime = A ? -1e-8 : dt);
                            break
                        }
                    }
                    d = _
                }
            }
            if (b && !n && (this.pause(),
            b.render(h >= o ? 0 : -1e-8)._zTime = h >= o ? 1 : -1,
            this._ts))
                return this._start = C,
                ss(this),
                this.render(i, n, s);
            this._onUpdate && !n && Wt(this, "onUpdate", !0),
            (f === a && this._tTime >= this.totalDuration() || !f && o) && (C === this._start || Math.abs(E) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === a && this._ts > 0 || !f && this._ts < 0) && Yr(this, 1),
            !n && !(i < 0 && !o) && (f || o || !a) && (Wt(this, f === a && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    r.add = function(i, n) {
        var s = this;
        if (Tr(n) || (n = Ut(this, n, i)),
        !(i instanceof pn)) {
            if (_t(i))
                return i.forEach(function(o) {
                    return s.add(o, n)
                }),
                this;
            if (et(i))
                return this.addLabel(i, n);
            if (Oe(i))
                i = Ye.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? dr(this, i, n) : this
    }
    ,
    r.getChildren = function(i, n, s, o) {
        i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -1e8);
        for (var a = [], l = this._first; l; )
            l._start >= o && (l instanceof Ye ? n && a.push(l) : (s && a.push(l),
            i && a.push.apply(a, l.getChildren(!0, n, s)))),
            l = l._next;
        return a
    }
    ,
    r.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
            if (n[s].vars.id === i)
                return n[s]
    }
    ,
    r.remove = function(i) {
        return et(i) ? this.removeLabel(i) : Oe(i) ? this.killTweensOf(i) : (ns(this, i),
        i === this._recent && (this._recent = this._last),
        ti(this))
    }
    ,
    r.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Je(Nt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        u.prototype.totalTime.call(this, i, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    r.addLabel = function(i, n) {
        return this.labels[i] = Ut(this, n),
        this
    }
    ,
    r.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    r.addPause = function(i, n, s) {
        var o = Ye.delayedCall(0, n || cn, s);
        return o.data = "isPause",
        this._hasPause = 1,
        dr(this, o, Ut(this, i))
    }
    ,
    r.removePause = function(i) {
        var n = this._first;
        for (i = Ut(this, i); n; )
            n._start === i && n.data === "isPause" && Yr(n),
            n = n._next
    }
    ,
    r.killTweensOf = function(i, n, s) {
        for (var o = this.getTweensOf(i, s), a = o.length; a--; )
            Or !== o[a] && o[a].kill(i, n);
        return this
    }
    ,
    r.getTweensOf = function(i, n) {
        for (var s = [], o = Gt(i), a = this._first, l = Tr(n), f; a; )
            a instanceof Ye ? el(a._targets, o) && (l ? (!Or || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && s.push(a) : (f = a.getTweensOf(o, n)).length && s.push.apply(s, f),
            a = a._next;
        return s
    }
    ,
    r.tweenTo = function(i, n) {
        n = n || {};
        var s = this, o = Ut(s, i), a = n, l = a.startAt, f = a.onStart, p = a.onStartParams, h = a.immediateRender, d, _ = Ye.to(s, jt({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: o,
            overwrite: "auto",
            duration: n.duration || Math.abs((o - (l && "time"in l ? l.time : s._time)) / s.timeScale()) || dt,
            onStart: function() {
                if (s.pause(),
                !d) {
                    var D = n.duration || Math.abs((o - (l && "time"in l ? l.time : s._time)) / s.timeScale());
                    _._dur !== D && Oi(_, D, 0, 1).render(_._time, !0, !0),
                    d = 1
                }
                f && f.apply(_, p || [])
            }
        }, n));
        return h ? _.render(0) : _
    }
    ,
    r.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, jt({
            startAt: {
                time: Ut(this, i)
            }
        }, s))
    }
    ,
    r.recent = function() {
        return this._recent
    }
    ,
    r.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Mo(this, Ut(this, i))
    }
    ,
    r.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Mo(this, Ut(this, i), 1)
    }
    ,
    r.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + dt)
    }
    ,
    r.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, a = this.labels, l; o; )
            o._start >= s && (o._start += i,
            o._end += i),
            o = o._next;
        if (n)
            for (l in a)
                a[l] >= s && (a[l] += i);
        return ti(this)
    }
    ,
    r.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(i),
            n = n._next;
        return u.prototype.invalidate.call(this, i)
    }
    ,
    r.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n; )
            s = n._next,
            this.remove(n),
            n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        ti(this)
    }
    ,
    r.totalDuration = function(i) {
        var n = 0, s = this, o = s._last, a = gr, l, f, p;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (p = s.parent; o; )
                l = o._prev,
                o._dirty && o.totalDuration(),
                f = o._start,
                f > a && s._sort && o._ts && !s._lock ? (s._lock = 1,
                dr(s, o, f - o._delay, 1)._lock = 0) : a = f,
                f < 0 && o._ts && (n -= f,
                (!p && !s._dp || p && p.smoothChildTiming) && (s._start += f / s._ts,
                s._time -= f,
                s._tTime -= f),
                s.shiftChildren(-f, !1, -1 / 0),
                a = 0),
                o._end > n && o._ts && (n = o._end),
                o = l;
            Oi(s, s === Ae && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (Ae._ts && (wu(Ae, Kn(i, Ae)),
        Eu = Nt.frame),
        Nt.frame >= To) {
            To += Vt.autoSleep || 120;
            var n = Ae._first;
            if ((!n || !n._ts) && Vt.autoSleep && Nt._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || Nt.sleep()
            }
        }
    }
    ,
    e
}(pn);
jt(bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var bl = function(e, r, t, i, n, s, o) {
    var a = new At(this._pt,e,r,0,1,ea,null,n), l = 0, f = 0, p, h, d, _, c, D, m, b;
    for (a.b = t,
    a.e = i,
    t += "",
    i += "",
    (m = ~i.indexOf("random(")) && (i = hn(i)),
    s && (b = [t, i],
    s(b, e, r),
    t = b[0],
    i = b[1]),
    h = t.match(fs) || []; p = fs.exec(i); )
        _ = p[0],
        c = i.substring(l, p.index),
        d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1),
        _ !== h[f++] && (D = parseFloat(h[f - 1]) || 0,
        a._pt = {
            _next: a._pt,
            p: c || f === 1 ? c : ",",
            s: D,
            c: _.charAt(1) === "=" ? Ei(D, _) - D : parseFloat(_) - D,
            m: d && d < 4 ? Math.round : 0
        },
        l = fs.lastIndex);
    return a.c = l < i.length ? i.substring(l, i.length) : "",
    a.fp = o,
    (Cu.test(i) || m) && (a.e = 0),
    this._pt = a,
    a
}, uo = function(e, r, t, i, n, s, o, a, l, f) {
    Oe(i) && (i = i(n || 0, e, s));
    var p = e[r], h = t !== "get" ? t : Oe(p) ? l ? e[r.indexOf("set") || !Oe(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : p, d = Oe(p) ? l ? Sl : Zu : lo, _;
    if (et(i) && (~i.indexOf("random(") && (i = hn(i)),
    i.charAt(1) === "=" && (_ = Ei(h, i) + (ht(h) || 0),
    (_ || _ === 0) && (i = _))),
    !f || h !== i || ks)
        return !isNaN(h * i) && i !== "" ? (_ = new At(this._pt,e,r,+h || 0,i - (h || 0),typeof p == "boolean" ? Pl : Ju,0,d),
        l && (_.fp = l),
        o && _.modifier(o, this, e),
        this._pt = _) : (!p && !(r in e) && io(r, i),
        bl.call(this, e, r, h, i, d, a || Vt.stringFilter, l))
}, El = function(e, r, t, i, n) {
    if (Oe(e) && (e = Ji(e, n, r, t, i)),
    !yr(e) || e.style && e.nodeType || _t(e) || gu(e))
        return et(e) ? Ji(e, n, r, t, i) : e;
    var s = {}, o;
    for (o in e)
        s[o] = Ji(e[o], n, r, t, i);
    return s
}, Ku = function(e, r, t, i, n, s) {
    var o, a, l, f;
    if (It[e] && (o = new It[e]).init(n, o.rawVars ? r[e] : El(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = a = new At(t._pt,n,e,0,1,o.render,o,0,o.priority),
    t !== yi))
        for (l = t._ptLookup[t._targets.indexOf(n)],
        f = o._props.length; f--; )
            l[o._props[f]] = a;
    return o
}, Or, ks, ao = function u(e, r, t) {
    var i = e.vars, n = i.ease, s = i.startAt, o = i.immediateRender, a = i.lazy, l = i.onUpdate, f = i.runBackwards, p = i.yoyoEase, h = i.keyframes, d = i.autoRevert, _ = e._dur, c = e._startAt, D = e._targets, m = e.parent, b = m && m.data === "nested" ? m.vars.targets : D, E = e._overwrite === "auto" && !Js, C = e.timeline, F, T, x, P, S, A, W, O, V, N, J, k, L;
    if (C && (!h || !n) && (n = "none"),
    e._ease = ri(n, Pi.ease),
    e._yEase = p ? Uu(ri(p === !0 ? n : p, Pi.ease)) : 0,
    p && e._yoyo && !e._repeat && (p = e._yEase,
    e._yEase = e._ease,
    e._ease = p),
    e._from = !C && !!i.runBackwards,
    !C || h && !i.stagger) {
        if (O = D[0] ? ei(D[0]).harness : 0,
        k = O && i[O.prop],
        F = Gn(i, no),
        c && (c._zTime < 0 && c.progress(1),
        r < 0 && f && o && !d ? c.render(-1, !0) : c.revert(f && _ ? zn : Za),
        c._lazy = 0),
        s) {
            if (Yr(e._startAt = Ye.set(D, jt({
                data: "isStart",
                overwrite: !1,
                parent: m,
                immediateRender: !0,
                lazy: !c && Tt(a),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return Wt(e, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            r < 0 && (pt || !o && !d) && e._startAt.revert(zn),
            o && _ && r <= 0 && t <= 0) {
                r && (e._zTime = r);
                return
            }
        } else if (f && _ && !c) {
            if (r && (o = !1),
            x = jt({
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !c && Tt(a),
                immediateRender: o,
                stagger: 0,
                parent: m
            }, F),
            k && (x[O.prop] = k),
            Yr(e._startAt = Ye.set(D, x)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            r < 0 && (pt ? e._startAt.revert(zn) : e._startAt.render(-1, !0)),
            e._zTime = r,
            !o)
                u(e._startAt, dt, dt);
            else if (!r)
                return
        }
        for (e._pt = e._ptCache = 0,
        a = _ && Tt(a) || a && !_,
        T = 0; T < D.length; T++) {
            if (S = D[T],
            W = S._gsap || oo(D)[T]._gsap,
            e._ptLookup[T] = N = {},
            Ps[W.id] && zr.length && qn(),
            J = b === D ? T : b.indexOf(S),
            O && (V = new O).init(S, k || F, e, J, b) !== !1 && (e._pt = P = new At(e._pt,S,V.name,0,1,V.render,V,0,V.priority),
            V._props.forEach(function(q) {
                N[q] = P
            }),
            V.priority && (A = 1)),
            !O || k)
                for (x in F)
                    It[x] && (V = Ku(x, F, e, J, S, b)) ? V.priority && (A = 1) : N[x] = P = uo.call(e, S, x, "get", F[x], J, b, 0, i.stringFilter);
            e._op && e._op[T] && e.kill(S, e._op[T]),
            E && e._pt && (Or = e,
            Ae.killTweensOf(S, N, e.globalTime(r)),
            L = !e.parent,
            Or = 0),
            e._pt && a && (Ps[W.id] = 1)
        }
        A && ta(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = l,
    e._initted = (!e._op || e._pt) && !L,
    h && r <= 0 && C.render(gr, !0, !0)
}, Fl = function(e, r, t, i, n, s, o, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[r], f, p, h, d;
    if (!l)
        for (l = e._ptCache[r] = [],
        h = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (f = h[d][r],
            f && f.d && f.d._pt)
                for (f = f.d._pt; f && f.p !== r && f.fp !== r; )
                    f = f._next;
            if (!f)
                return ks = 1,
                e.vars[r] = "+=0",
                ao(e, o),
                ks = 0,
                a ? fn(r + " not eligible for reset") : 1;
            l.push(f)
        }
    for (d = l.length; d--; )
        p = l[d],
        f = p._pt || p,
        f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c,
        f.c = t - f.s,
        p.e && (p.e = ke(t) + ht(p.e)),
        p.b && (p.b = f.s + ht(p.b))
}, wl = function(e, r) {
    var t = e[0] ? ei(e[0]).harness : 0, i = t && t.aliases, n, s, o, a;
    if (!i)
        return r;
    n = ui({}, r);
    for (s in i)
        if (s in n)
            for (a = i[s].split(","),
            o = a.length; o--; )
                n[a[o]] = n[s];
    return n
}, Tl = function(e, r, t, i) {
    var n = r.ease || i || "power1.inOut", s, o;
    if (_t(r))
        o = t[e] || (t[e] = []),
        r.forEach(function(a, l) {
            return o.push({
                t: l / (r.length - 1) * 100,
                v: a,
                e: n
            })
        });
    else
        for (s in r)
            o = t[s] || (t[s] = []),
            s === "ease" || o.push({
                t: parseFloat(e),
                v: r[s],
                e: n
            })
}, Ji = function(e, r, t, i, n) {
    return Oe(e) ? e.call(r, t, i, n) : et(e) && ~e.indexOf("random(") ? hn(e) : e
}, ju = so + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Qu = {};
St(ju + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
    return Qu[u] = 1
});
var Ye = function(u) {
    _u(e, u);
    function e(t, i, n, s) {
        var o;
        typeof i == "number" && (n.duration = i,
        i = n,
        n = null),
        o = u.call(this, s ? i : Qi(i)) || this;
        var a = o.vars, l = a.duration, f = a.delay, p = a.immediateRender, h = a.stagger, d = a.overwrite, _ = a.keyframes, c = a.defaults, D = a.scrollTrigger, m = a.yoyoEase, b = i.parent || Ae, E = (_t(t) || gu(t) ? Tr(t[0]) : "length"in i) ? [t] : Gt(t), C, F, T, x, P, S, A, W;
        if (o._targets = E.length ? oo(E) : fn("GSAP target " + t + " not found. https://gsap.com", !Vt.nullTargetWarn) || [],
        o._ptLookup = [],
        o._overwrite = d,
        _ || h || vn(l) || vn(f)) {
            if (i = o.vars,
            C = o.timeline = new bt({
                data: "nested",
                defaults: c || {},
                targets: b && b.data === "nested" ? b.vars.targets : E
            }),
            C.kill(),
            C.parent = C._dp = vr(o),
            C._start = 0,
            h || vn(l) || vn(f)) {
                if (x = E.length,
                A = h && Lu(h),
                yr(h))
                    for (P in h)
                        ~ju.indexOf(P) && (W || (W = {}),
                        W[P] = h[P]);
                for (F = 0; F < x; F++)
                    T = Gn(i, Qu),
                    T.stagger = 0,
                    m && (T.yoyoEase = m),
                    W && ui(T, W),
                    S = E[F],
                    T.duration = +Ji(l, vr(o), F, S, E),
                    T.delay = (+Ji(f, vr(o), F, S, E) || 0) - o._delay,
                    !h && x === 1 && T.delay && (o._delay = f = T.delay,
                    o._start += f,
                    T.delay = 0),
                    C.to(S, T, A ? A(F, S, E) : 0),
                    C._ease = ce.none;
                C.duration() ? l = f = 0 : o.timeline = 0
            } else if (_) {
                Qi(jt(C.vars.defaults, {
                    ease: "none"
                })),
                C._ease = ri(_.ease || i.ease || "none");
                var O = 0, V, N, J;
                if (_t(_))
                    _.forEach(function(k) {
                        return C.to(E, k, ">")
                    }),
                    C.duration();
                else {
                    T = {};
                    for (P in _)
                        P === "ease" || P === "easeEach" || Tl(P, _[P], T, _.easeEach);
                    for (P in T)
                        for (V = T[P].sort(function(k, L) {
                            return k.t - L.t
                        }),
                        O = 0,
                        F = 0; F < V.length; F++)
                            N = V[F],
                            J = {
                                ease: N.e,
                                duration: (N.t - (F ? V[F - 1].t : 0)) / 100 * l
                            },
                            J[P] = N.v,
                            C.to(E, J, O),
                            O += J.duration;
                    C.duration() < l && C.to({}, {
                        duration: l - C.duration()
                    })
                }
            }
            l || o.duration(l = C.duration())
        } else
            o.timeline = 0;
        return d === !0 && !Js && (Or = vr(o),
        Ae.killTweensOf(E),
        Or = 0),
        dr(b, vr(o), n),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (p || !l && !_ && o._start === Je(b._time) && Tt(p) && nl(vr(o)) && b.data !== "nested") && (o._tTime = -1e-8,
        o.render(Math.max(0, -f) || 0)),
        D && Mu(vr(o), D),
        o
    }
    var r = e.prototype;
    return r.render = function(i, n, s) {
        var o = this._time, a = this._tDur, l = this._dur, f = i < 0, p = i > a - dt && !f ? a : i < dt ? 0 : i, h, d, _, c, D, m, b, E, C;
        if (!l)
            ol(this, i, n, s);
        else if (p !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (h = p,
            E = this.timeline,
            this._repeat) {
                if (c = l + this._rDelay,
                this._repeat < -1 && f)
                    return this.totalTime(c * 100 + i, n, s);
                if (h = Je(p % c),
                p === a ? (_ = this._repeat,
                h = l) : (_ = ~~(p / c),
                _ && _ === Je(p / c) && (h = l,
                _--),
                h > l && (h = l)),
                m = this._yoyo && _ & 1,
                m && (C = this._yEase,
                h = l - h),
                D = Mi(this._tTime, c),
                h === o && !s && this._initted && _ === D)
                    return this._tTime = p,
                    this;
                _ !== D && (E && this._yEase && Hu(E, m),
                this.vars.repeatRefresh && !m && !this._lock && this._time !== c && this._initted && (this._lock = s = 1,
                this.render(Je(c * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ou(this, f ? i : h, s, n, p))
                    return this._tTime = 0,
                    this;
                if (o !== this._time && !(s && this.vars.repeatRefresh && _ !== D))
                    return this;
                if (l !== this._dur)
                    return this.render(i, n, s)
            }
            if (this._tTime = p,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = b = (C || this._ease)(h / l),
            this._from && (this.ratio = b = 1 - b),
            h && !o && !n && !_ && (Wt(this, "onStart"),
            this._tTime !== p))
                return this;
            for (d = this._pt; d; )
                d.r(b, d.d),
                d = d._next;
            E && E.render(i < 0 ? i : E._dur * E._ease(h / this._dur), n, s) || this._startAt && (this._zTime = i),
            this._onUpdate && !n && (f && Ms(this, i, n, s),
            Wt(this, "onUpdate")),
            this._repeat && _ !== D && this.vars.onRepeat && !n && this.parent && Wt(this, "onRepeat"),
            (p === this._tDur || !p) && this._tTime === p && (f && !this._onUpdate && Ms(this, i, !0, !0),
            (i || !l) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Yr(this, 1),
            !n && !(f && !o) && (p || o || m) && (Wt(this, p === a ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(p < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    r.targets = function() {
        return this._targets
    }
    ,
    r.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        u.prototype.invalidate.call(this, i)
    }
    ,
    r.resetTo = function(i, n, s, o, a) {
        dn || Nt.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
        return this._initted || ao(this, l),
        f = this._ease(l / this._dur),
        Fl(this, i, n, s, o, f, l, a) ? this.resetTo(i, n, s, o, 1) : (os(this, 0),
        this.parent || Au(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    r.kill = function(i, n) {
        if (n === void 0 && (n = "all"),
        !i && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? $i(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, Or && Or.vars.overwrite !== !0)._first || $i(this),
            this.parent && s !== this.timeline.totalDuration() && Oi(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var o = this._targets, a = i ? Gt(i) : o, l = this._ptLookup, f = this._pt, p, h, d, _, c, D, m;
        if ((!n || n === "all") && rl(o, a))
            return n === "all" && (this._pt = 0),
            $i(this);
        for (p = this._op = this._op || [],
        n !== "all" && (et(n) && (c = {},
        St(n, function(b) {
            return c[b] = 1
        }),
        n = c),
        n = wl(o, n)),
        m = o.length; m--; )
            if (~a.indexOf(o[m])) {
                h = l[m],
                n === "all" ? (p[m] = n,
                _ = h,
                d = {}) : (d = p[m] = p[m] || {},
                _ = n);
                for (c in _)
                    D = h && h[c],
                    D && ((!("kill"in D.d) || D.d.kill(c) === !0) && ns(this, D, "_pt"),
                    delete h[c]),
                    d !== "all" && (d[c] = 1)
            }
        return this._initted && !this._pt && f && $i(this),
        this
    }
    ,
    e.to = function(i, n) {
        return new e(i,n,arguments[2])
    }
    ,
    e.from = function(i, n) {
        return Zi(1, arguments)
    }
    ,
    e.delayedCall = function(i, n, s, o) {
        return new e(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }
    ,
    e.fromTo = function(i, n, s) {
        return Zi(2, arguments)
    }
    ,
    e.set = function(i, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new e(i,n)
    }
    ,
    e.killTweensOf = function(i, n, s) {
        return Ae.killTweensOf(i, n, s)
    }
    ,
    e
}(pn);
jt(Ye.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
St("staggerTo,staggerFrom,staggerFromTo", function(u) {
    Ye[u] = function() {
        var e = new bt
          , r = Bs.call(arguments, 0);
        return r.splice(u === "staggerFromTo" ? 5 : 4, 0, 0),
        e[u].apply(e, r)
    }
});
var lo = function(e, r, t) {
    return e[r] = t
}
  , Zu = function(e, r, t) {
    return e[r](t)
}
  , Sl = function(e, r, t, i) {
    return e[r](i.fp, t)
}
  , Al = function(e, r, t) {
    return e.setAttribute(r, t)
}
  , fo = function(e, r) {
    return Oe(e[r]) ? Zu : eo(e[r]) && e.setAttribute ? Al : lo
}
  , Ju = function(e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
}
  , Pl = function(e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r)
}
  , ea = function(e, r) {
    var t = r._pt
      , i = "";
    if (!e && r.b)
        i = r.b;
    else if (e === 1 && r.e)
        i = r.e;
    else {
        for (; t; )
            i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i,
            t = t._next;
        i += r.c
    }
    r.set(r.t, r.p, i, r)
}
  , co = function(e, r) {
    for (var t = r._pt; t; )
        t.r(e, t.d),
        t = t._next
}
  , Ml = function(e, r, t, i) {
    for (var n = this._pt, s; n; )
        s = n._next,
        n.p === i && n.modifier(e, r, t),
        n = s
}
  , Ol = function(e) {
    for (var r = this._pt, t, i; r; )
        i = r._next,
        r.p === e && !r.op || r.op === e ? ns(this, r, "_pt") : r.dep || (t = 1),
        r = i;
    return !t
}
  , Bl = function(e, r, t, i) {
    i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
}
  , ta = function(e) {
    for (var r = e._pt, t, i, n, s; r; ) {
        for (t = r._next,
        i = n; i && i.pr > r.pr; )
            i = i._next;
        (r._prev = i ? i._prev : s) ? r._prev._next = r : n = r,
        (r._next = i) ? i._prev = r : s = r,
        r = t
    }
    e._pt = n
}
  , At = function() {
    function u(r, t, i, n, s, o, a, l, f) {
        this.t = t,
        this.s = n,
        this.c = s,
        this.p = i,
        this.r = o || Ju,
        this.d = a || this,
        this.set = l || lo,
        this.pr = f || 0,
        this._next = r,
        r && (r._prev = this)
    }
    var e = u.prototype;
    return e.modifier = function(t, i, n) {
        this.mSet = this.mSet || this.set,
        this.set = Bl,
        this.m = t,
        this.mt = n,
        this.tween = i
    }
    ,
    u
}();
St(so + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
    return no[u] = 1
});
$t.TweenMax = $t.TweenLite = Ye;
$t.TimelineLite = $t.TimelineMax = bt;
Ae = new bt({
    sortChildren: !1,
    defaults: Pi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Vt.stringFilter = Xu;
var ii = []
  , Nn = {}
  , Rl = []
  , Bo = 0
  , Ll = 0
  , _s = function(e) {
    return (Nn[e] || Rl).map(function(r) {
        return r()
    })
}
  , zs = function() {
    var e = Date.now()
      , r = [];
    e - Bo > 2 && (_s("matchMediaInit"),
    ii.forEach(function(t) {
        var i = t.queries, n = t.conditions, s, o, a, l;
        for (o in i)
            s = fr.matchMedia(i[o]).matches,
            s && (a = 1),
            s !== n[o] && (n[o] = s,
            l = 1);
        l && (t.revert(),
        a && r.push(t))
    }),
    _s("matchMediaRevert"),
    r.forEach(function(t) {
        return t.onMatch(t, function(i) {
            return t.add(null, i)
        })
    }),
    Bo = e,
    _s("matchMedia"))
}
  , ra = function() {
    function u(r, t) {
        this.selector = t && Rs(t),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Ll++,
        r && this.add(r)
    }
    var e = u.prototype;
    return e.add = function(t, i, n) {
        Oe(t) && (n = i,
        i = t,
        t = Oe);
        var s = this
          , o = function() {
            var l = Fe, f = s.selector, p;
            return l && l !== s && l.data.push(s),
            n && (s.selector = Rs(n)),
            Fe = s,
            p = i.apply(s, arguments),
            Oe(p) && s._r.push(p),
            Fe = l,
            s.selector = f,
            s.isReverted = !1,
            p
        };
        return s.last = o,
        t === Oe ? o(s, function(a) {
            return s.add(null, a)
        }) : t ? s[t] = o : o
    }
    ,
    e.ignore = function(t) {
        var i = Fe;
        Fe = null,
        t(this),
        Fe = i
    }
    ,
    e.getTweens = function() {
        var t = [];
        return this.data.forEach(function(i) {
            return i instanceof u ? t.push.apply(t, i.getTweens()) : i instanceof Ye && !(i.parent && i.parent.data === "nested") && t.push(i)
        }),
        t
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(t, i) {
        var n = this;
        if (t ? function() {
            for (var o = n.getTweens(), a = n.data.length, l; a--; )
                l = n.data[a],
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(f) {
                    return o.splice(o.indexOf(f), 1)
                }));
            for (o.map(function(f) {
                return {
                    g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
                    t: f
                }
            }).sort(function(f, p) {
                return p.g - f.g || -1 / 0
            }).forEach(function(f) {
                return f.t.revert(t)
            }),
            a = n.data.length; a--; )
                l = n.data[a],
                l instanceof bt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(),
                l.kill()) : !(l instanceof Ye) && l.revert && l.revert(t);
            n._r.forEach(function(f) {
                return f(t, n)
            }),
            n.isReverted = !0
        }() : this.data.forEach(function(o) {
            return o.kill && o.kill()
        }),
        this.clear(),
        i)
            for (var s = ii.length; s--; )
                ii[s].id === this.id && ii.splice(s, 1)
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    u
}()
  , kl = function() {
    function u(r) {
        this.contexts = [],
        this.scope = r,
        Fe && Fe.data.push(this)
    }
    var e = u.prototype;
    return e.add = function(t, i, n) {
        yr(t) || (t = {
            matches: t
        });
        var s = new ra(0,n || this.scope), o = s.conditions = {}, a, l, f;
        Fe && !s.selector && (s.selector = Fe.selector),
        this.contexts.push(s),
        i = s.add("onMatch", i),
        s.queries = t;
        for (l in t)
            l === "all" ? f = 1 : (a = fr.matchMedia(t[l]),
            a && (ii.indexOf(s) < 0 && ii.push(s),
            (o[l] = a.matches) && (f = 1),
            a.addListener ? a.addListener(zs) : a.addEventListener("change", zs)));
        return f && i(s, function(p) {
            return s.add(null, p)
        }),
        this
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    e.kill = function(t) {
        this.contexts.forEach(function(i) {
            return i.kill(t, !0)
        })
    }
    ,
    u
}()
  , jn = {
    registerPlugin: function() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
        r.forEach(function(i) {
            return Wu(i)
        })
    },
    timeline: function(e) {
        return new bt(e)
    },
    getTweensOf: function(e, r) {
        return Ae.getTweensOf(e, r)
    },
    getProperty: function(e, r, t, i) {
        et(e) && (e = Gt(e)[0]);
        var n = ei(e || {}).get
          , s = t ? Su : Tu;
        return t === "native" && (t = ""),
        e && (r ? s((It[r] && It[r].get || n)(e, r, t, i)) : function(o, a, l) {
            return s((It[o] && It[o].get || n)(e, o, a, l))
        }
        )
    },
    quickSetter: function(e, r, t) {
        if (e = Gt(e),
        e.length > 1) {
            var i = e.map(function(f) {
                return Mt.quickSetter(f, r, t)
            })
              , n = i.length;
            return function(f) {
                for (var p = n; p--; )
                    i[p](f)
            }
        }
        e = e[0] || {};
        var s = It[r]
          , o = ei(e)
          , a = o.harness && (o.harness.aliases || {})[r] || r
          , l = s ? function(f) {
            var p = new s;
            yi._pt = 0,
            p.init(e, t ? f + t : f, yi, 0, [e]),
            p.render(1, p),
            yi._pt && co(1, yi)
        }
        : o.set(e, a);
        return s ? l : function(f) {
            return l(e, a, t ? f + t : f, o, 1)
        }
    },
    quickTo: function(e, r, t) {
        var i, n = Mt.to(e, ui((i = {},
        i[r] = "+=0.1",
        i.paused = !0,
        i), t || {})), s = function(a, l, f) {
            return n.resetTo(r, a, l, f)
        };
        return s.tween = n,
        s
    },
    isTweening: function(e) {
        return Ae.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = ri(e.ease, Pi.ease)),
        So(Pi, e || {})
    },
    config: function(e) {
        return So(Vt, e || {})
    },
    registerEffect: function(e) {
        var r = e.name
          , t = e.effect
          , i = e.plugins
          , n = e.defaults
          , s = e.extendTimeline;
        (i || "").split(",").forEach(function(o) {
            return o && !It[o] && !$t[o] && fn(r + " effect requires " + o + " plugin.")
        }),
        cs[r] = function(o, a, l) {
            return t(Gt(o), jt(a || {}, n), l)
        }
        ,
        s && (bt.prototype[r] = function(o, a, l) {
            return this.add(cs[r](o, yr(a) ? a : (l = a) && {}, this), l)
        }
        )
    },
    registerEase: function(e, r) {
        ce[e] = ri(r)
    },
    parseEase: function(e, r) {
        return arguments.length ? ri(e, r) : ce
    },
    getById: function(e) {
        return Ae.getById(e)
    },
    exportRoot: function(e, r) {
        e === void 0 && (e = {});
        var t = new bt(e), i, n;
        for (t.smoothChildTiming = Tt(e.smoothChildTiming),
        Ae.remove(t),
        t._dp = 0,
        t._time = t._tTime = Ae._time,
        i = Ae._first; i; )
            n = i._next,
            (r || !(!i._dur && i instanceof Ye && i.vars.onComplete === i._targets[0])) && dr(t, i, i._start - i._delay),
            i = n;
        return dr(Ae, t, 0),
        t
    },
    context: function(e, r) {
        return e ? new ra(e,r) : Fe
    },
    matchMedia: function(e) {
        return new kl(e)
    },
    matchMediaRefresh: function() {
        return ii.forEach(function(e) {
            var r = e.conditions, t, i;
            for (i in r)
                r[i] && (r[i] = !1,
                t = 1);
            t && e.revert()
        }) || zs()
    },
    addEventListener: function(e, r) {
        var t = Nn[e] || (Nn[e] = []);
        ~t.indexOf(r) || t.push(r)
    },
    removeEventListener: function(e, r) {
        var t = Nn[e]
          , i = t && t.indexOf(r);
        i >= 0 && t.splice(i, 1)
    },
    utils: {
        wrap: pl,
        wrapYoyo: _l,
        distribute: Lu,
        random: zu,
        snap: ku,
        normalize: dl,
        getUnit: ht,
        clamp: ll,
        splitColor: Vu,
        toArray: Gt,
        selector: Rs,
        mapRange: Nu,
        pipe: cl,
        unitize: hl,
        interpolate: Dl,
        shuffle: Ru
    },
    install: vu,
    effects: cs,
    ticker: Nt,
    updateRoot: bt.updateRoot,
    plugins: It,
    globalTimeline: Ae,
    core: {
        PropTween: At,
        globals: bu,
        Tween: Ye,
        Timeline: bt,
        Animation: pn,
        getCache: ei,
        _removeLinkedListItem: ns,
        reverting: function() {
            return pt
        },
        context: function(e) {
            return e && Fe && (Fe.data.push(e),
            e._ctx = Fe),
            Fe
        },
        suppressOverwrites: function(e) {
            return Js = e
        }
    }
};
St("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
    return jn[u] = Ye[u]
});
Nt.add(bt.updateRoot);
yi = jn.to({}, {
    duration: 0
});
var zl = function(e, r) {
    for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
        t = t._next;
    return t
}
  , Il = function(e, r) {
    var t = e._targets, i, n, s;
    for (i in r)
        for (n = t.length; n--; )
            s = e._ptLookup[n][i],
            s && (s = s.d) && (s._pt && (s = zl(s, i)),
            s && s.modifier && s.modifier(r[i], e, t[n], i))
}
  , Ds = function(e, r) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, n, s) {
            s._onInit = function(o) {
                var a, l;
                if (et(n) && (a = {},
                St(n, function(f) {
                    return a[f] = 1
                }),
                n = a),
                r) {
                    a = {};
                    for (l in n)
                        a[l] = r(n[l]);
                    n = a
                }
                Il(o, n)
            }
        }
    }
}
  , Mt = jn.registerPlugin({
    name: "attr",
    init: function(e, r, t, i, n) {
        var s, o, a;
        this.tween = t;
        for (s in r)
            a = e.getAttribute(s) || "",
            o = this.add(e, "setAttribute", (a || 0) + "", r[s], i, n, 0, 0, s),
            o.op = s,
            o.b = a,
            this._props.push(s)
    },
    render: function(e, r) {
        for (var t = r._pt; t; )
            pt ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d),
            t = t._next
    }
}, {
    name: "endArray",
    init: function(e, r) {
        for (var t = r.length; t--; )
            this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1)
    }
}, Ds("roundProps", Ls), Ds("modifiers"), Ds("snap", ku)) || jn;
Ye.version = bt.version = Mt.version = "3.12.5";
xu = 1;
to() && Bi();
ce.Power0;
ce.Power1;
ce.Power2;
ce.Power3;
ce.Power4;
ce.Linear;
ce.Quad;
ce.Cubic;
ce.Quart;
ce.Quint;
ce.Strong;
ce.Elastic;
ce.Back;
ce.SteppedEase;
ce.Bounce;
ce.Sine;
ce.Expo;
ce.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ro, Br, Fi, ho, Zr, Lo, po, Nl = function() {
    return typeof window < "u"
}, Sr = {}, Gr = 180 / Math.PI, wi = Math.PI / 180, pi = Math.atan2, ko = 1e8, _o = /([A-Z])/g, Yl = /(left|right|width|margin|padding|x)/i, Wl = /[\s,\(]\S/, _r = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Is = function(e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
}, Vl = function(e, r) {
    return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
}, $l = function(e, r) {
    return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
}, Xl = function(e, r) {
    var t = r.s + r.c * e;
    r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
}, ia = function(e, r) {
    return r.set(r.t, r.p, e ? r.e : r.b, r)
}, na = function(e, r) {
    return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
}, Ul = function(e, r, t) {
    return e.style[r] = t
}, Hl = function(e, r, t) {
    return e.style.setProperty(r, t)
}, ql = function(e, r, t) {
    return e._gsap[r] = t
}, Gl = function(e, r, t) {
    return e._gsap.scaleX = e._gsap.scaleY = t
}, Kl = function(e, r, t, i, n) {
    var s = e._gsap;
    s.scaleX = s.scaleY = t,
    s.renderTransform(n, s)
}, jl = function(e, r, t, i, n) {
    var s = e._gsap;
    s[r] = t,
    s.renderTransform(n, s)
}, Pe = "transform", Pt = Pe + "Origin", Ql = function u(e, r) {
    var t = this
      , i = this.target
      , n = i.style
      , s = i._gsap;
    if (e in Sr && n) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = _r[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                return t.tfm[o] = br(i, o)
            }) : this.tfm[e] = s.x ? s[e] : br(i, e),
            e === Pt && (this.tfm.zOrigin = s.zOrigin);
        else
            return _r.transform.split(",").forEach(function(o) {
                return u.call(t, o, r)
            });
        if (this.props.indexOf(Pe) >= 0)
            return;
        s.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Pt, r, "")),
        e = Pe
    }
    (n || r) && this.props.push(e, r, n[e])
}, sa = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Zl = function() {
    var e = this.props, r = this.target, t = r.style, i = r._gsap, n, s;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(_o, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            i[s] = this.tfm[s];
        i.svg && (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        n = po(),
        (!n || !n.isStart) && !t[Pe] && (sa(t),
        i.zOrigin && t[Pt] && (t[Pt] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, oa = function(e, r) {
    var t = {
        target: e,
        props: [],
        revert: Zl,
        save: Ql
    };
    return e._gsap || Mt.core.getCache(e),
    r && r.split(",").forEach(function(i) {
        return t.save(i)
    }),
    t
}, ua, Ns = function(e, r) {
    var t = Br.createElementNS ? Br.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Br.createElement(e);
    return t && t.style ? t : Br.createElement(e)
}, mr = function u(e, r, t) {
    var i = getComputedStyle(e);
    return i[r] || i.getPropertyValue(r.replace(_o, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && u(e, Ri(r) || r, 1) || ""
}, zo = "O,Moz,ms,Ms,Webkit".split(","), Ri = function(e, r, t) {
    var i = r || Zr
      , n = i.style
      , s = 5;
    if (e in n && !t)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(zo[s] + e in n); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? zo[s] : "") + e
}, Ys = function() {
    Nl() && window.document && (Ro = window,
    Br = Ro.document,
    Fi = Br.documentElement,
    Zr = Ns("div") || {
        style: {}
    },
    Ns("div"),
    Pe = Ri(Pe),
    Pt = Pe + "Origin",
    Zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    ua = !!Ri("perspective"),
    po = Mt.core.reverting,
    ho = 1)
}, gs = function u(e) {
    var r = Ns("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), t = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
    if (Fi.appendChild(r),
    r.appendChild(this),
    this.style.display = "block",
    e)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = u
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return t && (i ? t.insertBefore(this, i) : t.appendChild(this)),
    Fi.removeChild(r),
    this.style.cssText = n,
    s
}, Io = function(e, r) {
    for (var t = r.length; t--; )
        if (e.hasAttribute(r[t]))
            return e.getAttribute(r[t])
}, aa = function(e) {
    var r;
    try {
        r = e.getBBox()
    } catch {
        r = gs.call(e, !0)
    }
    return r && (r.width || r.height) || e.getBBox === gs || (r = gs.call(e, !0)),
    r && !r.width && !r.x && !r.y ? {
        x: +Io(e, ["x", "cx", "x1"]) || 0,
        y: +Io(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : r
}, la = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && aa(e))
}, ai = function(e, r) {
    if (r) {
        var t = e.style, i;
        r in Sr && r !== Pt && (r = Pe),
        t.removeProperty ? (i = r.substr(0, 2),
        (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
        t.removeProperty(i === "--" ? r : r.replace(_o, "-$1").toLowerCase())) : t.removeAttribute(r)
    }
}, Rr = function(e, r, t, i, n, s) {
    var o = new At(e._pt,r,t,0,1,s ? na : ia);
    return e._pt = o,
    o.b = i,
    o.e = n,
    e._props.push(t),
    o
}, No = {
    deg: 1,
    rad: 1,
    turn: 1
}, Jl = {
    grid: 1,
    flex: 1
}, Wr = function u(e, r, t, i) {
    var n = parseFloat(t) || 0, s = (t + "").trim().substr((n + "").length) || "px", o = Zr.style, a = Yl.test(r), l = e.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (a ? "Width" : "Height"), p = 100, h = i === "px", d = i === "%", _, c, D, m;
    if (i === s || !n || No[i] || No[s])
        return n;
    if (s !== "px" && !h && (n = u(e, r, t, "px")),
    m = e.getCTM && la(e),
    (d || s === "%") && (Sr[r] || ~r.indexOf("adius")))
        return _ = m ? e.getBBox()[a ? "width" : "height"] : e[f],
        ke(d ? n / _ * p : n / 100 * _);
    if (o[a ? "width" : "height"] = p + (h ? s : i),
    c = ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode,
    m && (c = (e.ownerSVGElement || {}).parentNode),
    (!c || c === Br || !c.appendChild) && (c = Br.body),
    D = c._gsap,
    D && d && D.width && a && D.time === Nt.time && !D.uncache)
        return ke(n / D.width * p);
    if (d && (r === "height" || r === "width")) {
        var b = e.style[r];
        e.style[r] = p + i,
        _ = e[f],
        b ? e.style[r] = b : ai(e, r)
    } else
        (d || s === "%") && !Jl[mr(c, "display")] && (o.position = mr(e, "position")),
        c === e && (o.position = "static"),
        c.appendChild(Zr),
        _ = Zr[f],
        c.removeChild(Zr),
        o.position = "absolute";
    return a && d && (D = ei(c),
    D.time = Nt.time,
    D.width = c[f]),
    ke(h ? _ * n / p : _ && n ? p / _ * n : 0)
}, br = function(e, r, t, i) {
    var n;
    return ho || Ys(),
    r in _r && r !== "transform" && (r = _r[r],
    ~r.indexOf(",") && (r = r.split(",")[0])),
    Sr[r] && r !== "transform" ? (n = Dn(e, i),
    n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Zn(mr(e, Pt)) + " " + n.zOrigin + "px") : (n = e.style[r],
    (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Qn[r] && Qn[r](e, r, t) || mr(e, r) || Fu(e, r) || (r === "opacity" ? 1 : 0))),
    t && !~(n + "").trim().indexOf(" ") ? Wr(e, r, n, t) + t : n
}, ef = function(e, r, t, i) {
    if (!t || t === "none") {
        var n = Ri(r, e, 1)
          , s = n && mr(e, n, 1);
        s && s !== t ? (r = n,
        t = s) : r === "borderColor" && (t = mr(e, "borderTopColor"))
    }
    var o = new At(this._pt,e.style,r,0,1,ea), a = 0, l = 0, f, p, h, d, _, c, D, m, b, E, C, F;
    if (o.b = t,
    o.e = i,
    t += "",
    i += "",
    i === "auto" && (c = e.style[r],
    e.style[r] = i,
    i = mr(e, r) || i,
    c ? e.style[r] = c : ai(e, r)),
    f = [t, i],
    Xu(f),
    t = f[0],
    i = f[1],
    h = t.match(Ci) || [],
    F = i.match(Ci) || [],
    F.length) {
        for (; p = Ci.exec(i); )
            D = p[0],
            b = i.substring(a, p.index),
            _ ? _ = (_ + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (_ = 1),
            D !== (c = h[l++] || "") && (d = parseFloat(c) || 0,
            C = c.substr((d + "").length),
            D.charAt(1) === "=" && (D = Ei(d, D) + C),
            m = parseFloat(D),
            E = D.substr((m + "").length),
            a = Ci.lastIndex - E.length,
            E || (E = E || Vt.units[r] || C,
            a === i.length && (i += E,
            o.e += E)),
            C !== E && (d = Wr(e, r, c, E) || 0),
            o._pt = {
                _next: o._pt,
                p: b || l === 1 ? b : ",",
                s: d,
                c: m - d,
                m: _ && _ < 4 || r === "zIndex" ? Math.round : 0
            });
        o.c = a < i.length ? i.substring(a, i.length) : ""
    } else
        o.r = r === "display" && i === "none" ? na : ia;
    return Cu.test(i) && (o.e = 0),
    this._pt = o,
    o
}, Yo = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, tf = function(e) {
    var r = e.split(" ")
      , t = r[0]
      , i = r[1] || "50%";
    return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t,
    t = i,
    i = e),
    r[0] = Yo[t] || t,
    r[1] = Yo[i] || i,
    r.join(" ")
}, rf = function(e, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
        var t = r.t, i = t.style, n = r.u, s = t._gsap, o, a, l;
        if (n === "all" || n === !0)
            i.cssText = "",
            a = 1;
        else
            for (n = n.split(","),
            l = n.length; --l > -1; )
                o = n[l],
                Sr[o] && (a = 1,
                o = o === "transformOrigin" ? Pt : Pe),
                ai(t, o);
        a && (ai(t, Pe),
        s && (s.svg && t.removeAttribute("transform"),
        Dn(t, 1),
        s.uncache = 1,
        sa(i)))
    }
}, Qn = {
    clearProps: function(e, r, t, i, n) {
        if (n.data !== "isFromStart") {
            var s = e._pt = new At(e._pt,r,t,0,0,rf);
            return s.u = i,
            s.pr = -10,
            s.tween = n,
            e._props.push(t),
            1
        }
    }
}, _n = [1, 0, 0, 1, 0, 0], fa = {}, ca = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Wo = function(e) {
    var r = mr(e, Pe);
    return ca(r) ? _n : r.substr(7).match(mu).map(ke)
}, Do = function(e, r) {
    var t = e._gsap || ei(e), i = e.style, n = Wo(e), s, o, a, l;
    return t.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix,
    n = [a.a, a.b, a.c, a.d, a.e, a.f],
    n.join(",") === "1,0,0,1,0,0" ? _n : n) : (n === _n && !e.offsetParent && e !== Fi && !t.svg && (a = i.display,
    i.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent) && (l = 1,
    o = e.nextElementSibling,
    Fi.appendChild(e)),
    n = Wo(e),
    a ? i.display = a : ai(e, "display"),
    l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : Fi.removeChild(e))),
    r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, Ws = function(e, r, t, i, n, s) {
    var o = e._gsap, a = n || Do(e, !0), l = o.xOrigin || 0, f = o.yOrigin || 0, p = o.xOffset || 0, h = o.yOffset || 0, d = a[0], _ = a[1], c = a[2], D = a[3], m = a[4], b = a[5], E = r.split(" "), C = parseFloat(E[0]) || 0, F = parseFloat(E[1]) || 0, T, x, P, S;
    t ? a !== _n && (x = d * D - _ * c) && (P = C * (D / x) + F * (-c / x) + (c * b - D * m) / x,
    S = C * (-_ / x) + F * (d / x) - (d * b - _ * m) / x,
    C = P,
    F = S) : (T = aa(e),
    C = T.x + (~E[0].indexOf("%") ? C / 100 * T.width : C),
    F = T.y + (~(E[1] || E[0]).indexOf("%") ? F / 100 * T.height : F)),
    i || i !== !1 && o.smooth ? (m = C - l,
    b = F - f,
    o.xOffset = p + (m * d + b * c) - m,
    o.yOffset = h + (m * _ + b * D) - b) : o.xOffset = o.yOffset = 0,
    o.xOrigin = C,
    o.yOrigin = F,
    o.smooth = !!i,
    o.origin = r,
    o.originIsAbsolute = !!t,
    e.style[Pt] = "0px 0px",
    s && (Rr(s, o, "xOrigin", l, C),
    Rr(s, o, "yOrigin", f, F),
    Rr(s, o, "xOffset", p, o.xOffset),
    Rr(s, o, "yOffset", h, o.yOffset)),
    e.setAttribute("data-svg-origin", C + " " + F)
}, Dn = function(e, r) {
    var t = e._gsap || new Gu(e);
    if ("x"in t && !r && !t.uncache)
        return t;
    var i = e.style, n = t.scaleX < 0, s = "px", o = "deg", a = getComputedStyle(e), l = mr(e, Pt) || "0", f, p, h, d, _, c, D, m, b, E, C, F, T, x, P, S, A, W, O, V, N, J, k, L, q, w, g, re, me, We, ie, j;
    return f = p = h = c = D = m = b = E = C = 0,
    d = _ = 1,
    t.svg = !!(e.getCTM && la(e)),
    a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Pe] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Pe] !== "none" ? a[Pe] : "")),
    i.scale = i.rotate = i.translate = "none"),
    x = Do(e, t.svg),
    t.svg && (t.uncache ? (q = e.getBBox(),
    l = t.xOrigin - q.x + "px " + (t.yOrigin - q.y) + "px",
    L = "") : L = !r && e.getAttribute("data-svg-origin"),
    Ws(e, L || l, !!L || t.originIsAbsolute, t.smooth !== !1, x)),
    F = t.xOrigin || 0,
    T = t.yOrigin || 0,
    x !== _n && (W = x[0],
    O = x[1],
    V = x[2],
    N = x[3],
    f = J = x[4],
    p = k = x[5],
    x.length === 6 ? (d = Math.sqrt(W * W + O * O),
    _ = Math.sqrt(N * N + V * V),
    c = W || O ? pi(O, W) * Gr : 0,
    b = V || N ? pi(V, N) * Gr + c : 0,
    b && (_ *= Math.abs(Math.cos(b * wi))),
    t.svg && (f -= F - (F * W + T * V),
    p -= T - (F * O + T * N))) : (j = x[6],
    We = x[7],
    g = x[8],
    re = x[9],
    me = x[10],
    ie = x[11],
    f = x[12],
    p = x[13],
    h = x[14],
    P = pi(j, me),
    D = P * Gr,
    P && (S = Math.cos(-P),
    A = Math.sin(-P),
    L = J * S + g * A,
    q = k * S + re * A,
    w = j * S + me * A,
    g = J * -A + g * S,
    re = k * -A + re * S,
    me = j * -A + me * S,
    ie = We * -A + ie * S,
    J = L,
    k = q,
    j = w),
    P = pi(-V, me),
    m = P * Gr,
    P && (S = Math.cos(-P),
    A = Math.sin(-P),
    L = W * S - g * A,
    q = O * S - re * A,
    w = V * S - me * A,
    ie = N * A + ie * S,
    W = L,
    O = q,
    V = w),
    P = pi(O, W),
    c = P * Gr,
    P && (S = Math.cos(P),
    A = Math.sin(P),
    L = W * S + O * A,
    q = J * S + k * A,
    O = O * S - W * A,
    k = k * S - J * A,
    W = L,
    J = q),
    D && Math.abs(D) + Math.abs(c) > 359.9 && (D = c = 0,
    m = 180 - m),
    d = ke(Math.sqrt(W * W + O * O + V * V)),
    _ = ke(Math.sqrt(k * k + j * j)),
    P = pi(J, k),
    b = Math.abs(P) > 2e-4 ? P * Gr : 0,
    C = ie ? 1 / (ie < 0 ? -ie : ie) : 0),
    t.svg && (L = e.getAttribute("transform"),
    t.forceCSS = e.setAttribute("transform", "") || !ca(mr(e, Pe)),
    L && e.setAttribute("transform", L))),
    Math.abs(b) > 90 && Math.abs(b) < 270 && (n ? (d *= -1,
    b += c <= 0 ? 180 : -180,
    c += c <= 0 ? 180 : -180) : (_ *= -1,
    b += b <= 0 ? 180 : -180)),
    r = r || t.uncache,
    t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s,
    t.y = p - ((t.yPercent = p && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s,
    t.z = h + s,
    t.scaleX = ke(d),
    t.scaleY = ke(_),
    t.rotation = ke(c) + o,
    t.rotationX = ke(D) + o,
    t.rotationY = ke(m) + o,
    t.skewX = b + o,
    t.skewY = E + o,
    t.transformPerspective = C + s,
    (t.zOrigin = parseFloat(l.split(" ")[2]) || !r && t.zOrigin || 0) && (i[Pt] = Zn(l)),
    t.xOffset = t.yOffset = 0,
    t.force3D = Vt.force3D,
    t.renderTransform = t.svg ? sf : ua ? ha : nf,
    t.uncache = 0,
    t
}, Zn = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, ms = function(e, r, t) {
    var i = ht(r);
    return ke(parseFloat(r) + parseFloat(Wr(e, "x", t + "px", i))) + i
}, nf = function(e, r) {
    r.z = "0px",
    r.rotationY = r.rotationX = "0deg",
    r.force3D = 0,
    ha(e, r)
}, Hr = "0deg", Ni = "0px", qr = ") ", ha = function(e, r) {
    var t = r || this
      , i = t.xPercent
      , n = t.yPercent
      , s = t.x
      , o = t.y
      , a = t.z
      , l = t.rotation
      , f = t.rotationY
      , p = t.rotationX
      , h = t.skewX
      , d = t.skewY
      , _ = t.scaleX
      , c = t.scaleY
      , D = t.transformPerspective
      , m = t.force3D
      , b = t.target
      , E = t.zOrigin
      , C = ""
      , F = m === "auto" && e && e !== 1 || m === !0;
    if (E && (p !== Hr || f !== Hr)) {
        var T = parseFloat(f) * wi, x = Math.sin(T), P = Math.cos(T), S;
        T = parseFloat(p) * wi,
        S = Math.cos(T),
        s = ms(b, s, x * S * -E),
        o = ms(b, o, -Math.sin(T) * -E),
        a = ms(b, a, P * S * -E + E)
    }
    D !== Ni && (C += "perspective(" + D + qr),
    (i || n) && (C += "translate(" + i + "%, " + n + "%) "),
    (F || s !== Ni || o !== Ni || a !== Ni) && (C += a !== Ni || F ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + qr),
    l !== Hr && (C += "rotate(" + l + qr),
    f !== Hr && (C += "rotateY(" + f + qr),
    p !== Hr && (C += "rotateX(" + p + qr),
    (h !== Hr || d !== Hr) && (C += "skew(" + h + ", " + d + qr),
    (_ !== 1 || c !== 1) && (C += "scale(" + _ + ", " + c + qr),
    b.style[Pe] = C || "translate(0, 0)"
}, sf = function(e, r) {
    var t = r || this, i = t.xPercent, n = t.yPercent, s = t.x, o = t.y, a = t.rotation, l = t.skewX, f = t.skewY, p = t.scaleX, h = t.scaleY, d = t.target, _ = t.xOrigin, c = t.yOrigin, D = t.xOffset, m = t.yOffset, b = t.forceCSS, E = parseFloat(s), C = parseFloat(o), F, T, x, P, S;
    a = parseFloat(a),
    l = parseFloat(l),
    f = parseFloat(f),
    f && (f = parseFloat(f),
    l += f,
    a += f),
    a || l ? (a *= wi,
    l *= wi,
    F = Math.cos(a) * p,
    T = Math.sin(a) * p,
    x = Math.sin(a - l) * -h,
    P = Math.cos(a - l) * h,
    l && (f *= wi,
    S = Math.tan(l - f),
    S = Math.sqrt(1 + S * S),
    x *= S,
    P *= S,
    f && (S = Math.tan(f),
    S = Math.sqrt(1 + S * S),
    F *= S,
    T *= S)),
    F = ke(F),
    T = ke(T),
    x = ke(x),
    P = ke(P)) : (F = p,
    P = h,
    T = x = 0),
    (E && !~(s + "").indexOf("px") || C && !~(o + "").indexOf("px")) && (E = Wr(d, "x", s, "px"),
    C = Wr(d, "y", o, "px")),
    (_ || c || D || m) && (E = ke(E + _ - (_ * F + c * x) + D),
    C = ke(C + c - (_ * T + c * P) + m)),
    (i || n) && (S = d.getBBox(),
    E = ke(E + i / 100 * S.width),
    C = ke(C + n / 100 * S.height)),
    S = "matrix(" + F + "," + T + "," + x + "," + P + "," + E + "," + C + ")",
    d.setAttribute("transform", S),
    b && (d.style[Pe] = S)
}, of = function(e, r, t, i, n) {
    var s = 360, o = et(n), a = parseFloat(n) * (o && ~n.indexOf("rad") ? Gr : 1), l = a - i, f = i + l + "deg", p, h;
    return o && (p = n.split("_")[1],
    p === "short" && (l %= s,
    l !== l % (s / 2) && (l += l < 0 ? s : -360)),
    p === "cw" && l < 0 ? l = (l + s * ko) % s - ~~(l / s) * s : p === "ccw" && l > 0 && (l = (l - s * ko) % s - ~~(l / s) * s)),
    e._pt = h = new At(e._pt,r,t,i,l,Vl),
    h.e = f,
    h.u = "deg",
    e._props.push(t),
    h
}, Vo = function(e, r) {
    for (var t in r)
        e[t] = r[t];
    return e
}, uf = function(e, r, t) {
    var i = Vo({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = t.style, o, a, l, f, p, h, d, _;
    i.svg ? (l = t.getAttribute("transform"),
    t.setAttribute("transform", ""),
    s[Pe] = r,
    o = Dn(t, 1),
    ai(t, Pe),
    t.setAttribute("transform", l)) : (l = getComputedStyle(t)[Pe],
    s[Pe] = r,
    o = Dn(t, 1),
    s[Pe] = l);
    for (a in Sr)
        l = i[a],
        f = o[a],
        l !== f && n.indexOf(a) < 0 && (d = ht(l),
        _ = ht(f),
        p = d !== _ ? Wr(t, a, l, _) : parseFloat(l),
        h = parseFloat(f),
        e._pt = new At(e._pt,o,a,p,h - p,Is),
        e._pt.u = _ || 0,
        e._props.push(a));
    Vo(o, i)
};
St("padding,margin,Width,Radius", function(u, e) {
    var r = "Top"
      , t = "Right"
      , i = "Bottom"
      , n = "Left"
      , s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(o) {
        return e < 2 ? u + o : "border" + o + u
    });
    Qn[e > 1 ? "border" + u : u] = function(o, a, l, f, p) {
        var h, d;
        if (arguments.length < 4)
            return h = s.map(function(_) {
                return br(o, _, l)
            }),
            d = h.join(" "),
            d.split(h[0]).length === 5 ? h[0] : d;
        h = (f + "").split(" "),
        d = {},
        s.forEach(function(_, c) {
            return d[_] = h[c] = h[c] || h[(c - 1) / 2 | 0]
        }),
        o.init(a, d, p)
    }
});
var da = {
    name: "css",
    register: Ys,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, r, t, i, n) {
        var s = this._props, o = e.style, a = t.vars.startAt, l, f, p, h, d, _, c, D, m, b, E, C, F, T, x, P;
        ho || Ys(),
        this.styles = this.styles || oa(e),
        P = this.styles.props,
        this.tween = t;
        for (c in r)
            if (c !== "autoRound" && (f = r[c],
            !(It[c] && Ku(c, r, t, i, e, n)))) {
                if (d = typeof f,
                _ = Qn[c],
                d === "function" && (f = f.call(t, i, e, n),
                d = typeof f),
                d === "string" && ~f.indexOf("random(") && (f = hn(f)),
                _)
                    _(this, e, c, f, t) && (x = 1);
                else if (c.substr(0, 2) === "--")
                    l = (getComputedStyle(e).getPropertyValue(c) + "").trim(),
                    f += "",
                    Ir.lastIndex = 0,
                    Ir.test(l) || (D = ht(l),
                    m = ht(f)),
                    m ? D !== m && (l = Wr(e, c, l, m) + m) : D && (f += D),
                    this.add(o, "setProperty", l, f, i, n, 0, 0, c),
                    s.push(c),
                    P.push(c, 0, o[c]);
                else if (d !== "undefined") {
                    if (a && c in a ? (l = typeof a[c] == "function" ? a[c].call(t, i, e, n) : a[c],
                    et(l) && ~l.indexOf("random(") && (l = hn(l)),
                    ht(l + "") || l === "auto" || (l += Vt.units[c] || ht(br(e, c)) || ""),
                    (l + "").charAt(1) === "=" && (l = br(e, c))) : l = br(e, c),
                    h = parseFloat(l),
                    b = d === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                    b && (f = f.substr(2)),
                    p = parseFloat(f),
                    c in _r && (c === "autoAlpha" && (h === 1 && br(e, "visibility") === "hidden" && p && (h = 0),
                    P.push("visibility", 0, o.visibility),
                    Rr(this, o, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)),
                    c !== "scale" && c !== "transform" && (c = _r[c],
                    ~c.indexOf(",") && (c = c.split(",")[0]))),
                    E = c in Sr,
                    E) {
                        if (this.styles.save(c),
                        C || (F = e._gsap,
                        F.renderTransform && !r.parseTransform || Dn(e, r.parseTransform),
                        T = r.smoothOrigin !== !1 && F.smooth,
                        C = this._pt = new At(this._pt,o,Pe,0,1,F.renderTransform,F,0,-1),
                        C.dep = 1),
                        c === "scale")
                            this._pt = new At(this._pt,F,"scaleY",F.scaleY,(b ? Ei(F.scaleY, b + p) : p) - F.scaleY || 0,Is),
                            this._pt.u = 0,
                            s.push("scaleY", c),
                            c += "X";
                        else if (c === "transformOrigin") {
                            P.push(Pt, 0, o[Pt]),
                            f = tf(f),
                            F.svg ? Ws(e, f, 0, T, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0,
                            m !== F.zOrigin && Rr(this, F, "zOrigin", F.zOrigin, m),
                            Rr(this, o, c, Zn(l), Zn(f)));
                            continue
                        } else if (c === "svgOrigin") {
                            Ws(e, f, 1, T, 0, this);
                            continue
                        } else if (c in fa) {
                            of(this, F, c, h, b ? Ei(h, b + f) : f);
                            continue
                        } else if (c === "smoothOrigin") {
                            Rr(this, F, "smooth", F.smooth, f);
                            continue
                        } else if (c === "force3D") {
                            F[c] = f;
                            continue
                        } else if (c === "transform") {
                            uf(this, f, e);
                            continue
                        }
                    } else
                        c in o || (c = Ri(c) || c);
                    if (E || (p || p === 0) && (h || h === 0) && !Wl.test(f) && c in o)
                        D = (l + "").substr((h + "").length),
                        p || (p = 0),
                        m = ht(f) || (c in Vt.units ? Vt.units[c] : D),
                        D !== m && (h = Wr(e, c, l, m)),
                        this._pt = new At(this._pt,E ? F : o,c,h,(b ? Ei(h, b + p) : p) - h,!E && (m === "px" || c === "zIndex") && r.autoRound !== !1 ? Xl : Is),
                        this._pt.u = m || 0,
                        D !== m && m !== "%" && (this._pt.b = l,
                        this._pt.r = $l);
                    else if (c in o)
                        ef.call(this, e, c, l, b ? b + f : f);
                    else if (c in e)
                        this.add(e, c, l || e[c], b ? b + f : f, i, n);
                    else if (c !== "parseTransform") {
                        io(c, f);
                        continue
                    }
                    E || (c in o ? P.push(c, 0, o[c]) : P.push(c, 1, l || e[c])),
                    s.push(c)
                }
            }
        x && ta(this)
    },
    render: function(e, r) {
        if (r.tween._time || !po())
            for (var t = r._pt; t; )
                t.r(e, t.d),
                t = t._next;
        else
            r.styles.revert()
    },
    get: br,
    aliases: _r,
    getSetter: function(e, r, t) {
        var i = _r[r];
        return i && i.indexOf(",") < 0 && (r = i),
        r in Sr && r !== Pt && (e._gsap.x || br(e, "x")) ? t && Lo === t ? r === "scale" ? Gl : ql : (Lo = t || {}) && (r === "scale" ? Kl : jl) : e.style && !eo(e.style[r]) ? Ul : ~r.indexOf("-") ? Hl : fo(e, r)
    },
    core: {
        _removeProperty: ai,
        _getMatrix: Do
    }
};
Mt.utils.checkPrefix = Ri;
Mt.core.getStyleSaver = oa;
(function(u, e, r, t) {
    var i = St(u + "," + e + "," + r, function(n) {
        Sr[n] = 1
    });
    St(e, function(n) {
        Vt.units[n] = "deg",
        fa[n] = 1
    }),
    _r[i[13]] = u + "," + e,
    St(t, function(n) {
        var s = n.split(":");
        _r[s[1]] = i[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
St("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
    Vt.units[u] = "px"
});
Mt.registerPlugin(da);
var Vr = Mt.registerPlugin(da) || Mt;
Vr.core.Tween;
document.addEventListener("DOMContentLoaded", () => {
    let u = 10;
    window.innerWidth < 1024 ? u = 7 : window.innerWidth < 640 && (u = 5);
    const e = document.getElementById("pixel-container")
      , r = document.getElementById("pixel-container").getBoundingClientRect().width + 100
      , t = document.getElementById("pixel-container").getBoundingClientRect().height;
    let i = e.getBoundingClientRect().width / u;
    const n = Math.ceil(r / i)
      , s = Math.ceil(t / i)
      , o = n * s;
    let a = [];
    function l() {
        for (let D = 0; D < o; D++) {
            const m = document.createElement("div");
            m.classList.add("pixel"),
            e.appendChild(m),
            m.style.width = i + "px",
            m.style.height = i + "px",
            a.push(m)
        }
    }
    function f() {
        Vr.fromTo(a, {
            opacity: 0
        }, {
            delay: 2,
            opacity: 1,
            duration: .001,
            stagger: {
                each: .02,
                from: "random"
            }
        })
    }
    const p = document.getElementById("preloader-title")
      , h = document.getElementById("preloader-text")
      , d = document.querySelector("body")
      , _ = document.querySelector("main")
      , c = document.querySelector("nav");
    window.scrollY > 0 && c.classList.remove("translate-x-full"),
    l(),
    f(),
    setTimeout( () => {
        Vr.fromTo(h, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.inOut"
        }),
        e.classList.remove("bg-e-blue"),
        e.classList.add("bg-white"),
        a.map(D => {
            D.style.display = "none",
            D.remove()
        }
        ),
        p.classList.remove("absolute"),
        c.classList.remove("translate-x-full"),
        setTimeout( () => {
            d.classList.remove("overflow-hidden"),
            _.classList.remove("translate-y-0"),
            window.innerWidth > 1024 ? _.classList.add("-translate-y-40") : _.classList.add("-translate-y-52")
        }
        , 2e3)
    }
    , 4e3)
}
);
function af(u, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(u, t.key, t)
    }
}
function lf(u, e, r) {
    return af(u.prototype, e),
    u
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var nt, Yn, Yt, Lr, kr, Ti, pa, Kr, en, _a, Fr, rr, Da, ga = function() {
    return nt || typeof window < "u" && (nt = window.gsap) && nt.registerPlugin && nt
}, ma = 1, xi = [], ae = [], Cr = [], tn = Date.now, Vs = function(e, r) {
    return r
}, ff = function() {
    var e = en.core
      , r = e.bridge || {}
      , t = e._scrollers
      , i = e._proxies;
    t.push.apply(t, ae),
    i.push.apply(i, Cr),
    ae = t,
    Cr = i,
    Vs = function(s, o) {
        return r[s](o)
    }
}, Nr = function(e, r) {
    return ~Cr.indexOf(e) && Cr[Cr.indexOf(e) + 1][r]
}, rn = function(e) {
    return !!~_a.indexOf(e)
}, Ct = function(e, r, t, i, n) {
    return e.addEventListener(r, t, {
        passive: i !== !1,
        capture: !!n
    })
}, mt = function(e, r, t, i) {
    return e.removeEventListener(r, t, !!i)
}, bn = "scrollLeft", En = "scrollTop", $s = function() {
    return Fr && Fr.isPressed || ae.cache++
}, Jn = function(e, r) {
    var t = function i(n) {
        if (n || n === 0) {
            ma && (Yt.history.scrollRestoration = "manual");
            var s = Fr && Fr.isPressed;
            n = i.v = Math.round(n) || (Fr && Fr.iOS ? 1 : 0),
            e(n),
            i.cacheID = ae.cache,
            s && Vs("ss", n)
        } else
            (r || ae.cache !== i.cacheID || Vs("ref")) && (i.cacheID = ae.cache,
            i.v = e());
        return i.v + i.offset
    };
    return t.offset = 0,
    e && t
}, Et = {
    s: bn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jn(function(u) {
        return arguments.length ? Yt.scrollTo(u, Ue.sc()) : Yt.pageXOffset || Lr[bn] || kr[bn] || Ti[bn] || 0
    })
}, Ue = {
    s: En,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Et,
    sc: Jn(function(u) {
        return arguments.length ? Yt.scrollTo(Et.sc(), u) : Yt.pageYOffset || Lr[En] || kr[En] || Ti[En] || 0
    })
}, wt = function(e, r) {
    return (r && r._ctx && r._ctx.selector || nt.utils.toArray)(e)[0] || (typeof e == "string" && nt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, $r = function(e, r) {
    var t = r.s
      , i = r.sc;
    rn(e) && (e = Lr.scrollingElement || kr);
    var n = ae.indexOf(e)
      , s = i === Ue.sc ? 1 : 2;
    !~n && (n = ae.push(e) - 1),
    ae[n + s] || Ct(e, "scroll", $s);
    var o = ae[n + s]
      , a = o || (ae[n + s] = Jn(Nr(e, t), !0) || (rn(e) ? i : Jn(function(l) {
        return arguments.length ? e[t] = l : e[t]
    })));
    return a.target = e,
    o || (a.smooth = nt.getProperty(e, "scrollBehavior") === "smooth"),
    a
}, Xs = function(e, r, t) {
    var i = e
      , n = e
      , s = tn()
      , o = s
      , a = r || 50
      , l = Math.max(500, a * 3)
      , f = function(_, c) {
        var D = tn();
        c || D - s > a ? (n = i,
        i = _,
        o = s,
        s = D) : t ? i += _ : i = n + (_ - n) / (D - o) * (s - o)
    }
      , p = function() {
        n = i = t ? 0 : i,
        o = s = 0
    }
      , h = function(_) {
        var c = o
          , D = n
          , m = tn();
        return (_ || _ === 0) && _ !== i && f(_),
        s === o || m - o > l ? 0 : (i + (t ? D : -D)) / ((t ? m : s) - c) * 1e3
    };
    return {
        update: f,
        reset: p,
        getVelocity: h
    }
}, Yi = function(e, r) {
    return r && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, $o = function(e) {
    var r = Math.max.apply(Math, e)
      , t = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(t) ? r : t
}, Ca = function() {
    en = nt.core.globals().ScrollTrigger,
    en && en.core && ff()
}, ya = function(e) {
    return nt = e || ga(),
    !Yn && nt && typeof document < "u" && document.body && (Yt = window,
    Lr = document,
    kr = Lr.documentElement,
    Ti = Lr.body,
    _a = [Yt, Lr, kr, Ti],
    nt.utils.clamp,
    Da = nt.core.context || function() {}
    ,
    Kr = "onpointerenter"in Ti ? "pointer" : "mouse",
    pa = ze.isTouch = Yt.matchMedia && Yt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Yt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    rr = ze.eventTypes = ("ontouchstart"in kr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in kr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return ma = 0
    }, 500),
    Ca(),
    Yn = 1),
    Yn
};
Et.op = Ue;
ae.cache = 0;
var ze = function() {
    function u(r) {
        this.init(r)
    }
    var e = u.prototype;
    return e.init = function(t) {
        Yn || ya(nt) || console.warn("Please gsap.registerPlugin(Observer)"),
        en || Ca();
        var i = t.tolerance
          , n = t.dragMinimum
          , s = t.type
          , o = t.target
          , a = t.lineHeight
          , l = t.debounce
          , f = t.preventDefault
          , p = t.onStop
          , h = t.onStopDelay
          , d = t.ignore
          , _ = t.wheelSpeed
          , c = t.event
          , D = t.onDragStart
          , m = t.onDragEnd
          , b = t.onDrag
          , E = t.onPress
          , C = t.onRelease
          , F = t.onRight
          , T = t.onLeft
          , x = t.onUp
          , P = t.onDown
          , S = t.onChangeX
          , A = t.onChangeY
          , W = t.onChange
          , O = t.onToggleX
          , V = t.onToggleY
          , N = t.onHover
          , J = t.onHoverEnd
          , k = t.onMove
          , L = t.ignoreCheck
          , q = t.isNormalizer
          , w = t.onGestureStart
          , g = t.onGestureEnd
          , re = t.onWheel
          , me = t.onEnable
          , We = t.onDisable
          , ie = t.onClick
          , j = t.scrollSpeed
          , Be = t.capture
          , he = t.allowClicks
          , He = t.lockAxis
          , qe = t.onLockAxis;
        this.target = o = wt(o) || kr,
        this.vars = t,
        d && (d = nt.utils.toArray(d)),
        i = i || 1e-9,
        n = n || 0,
        _ = _ || 1,
        j = j || 1,
        s = s || "wheel,touch,pointer",
        l = l !== !1,
        a || (a = parseFloat(Yt.getComputedStyle(Ti).lineHeight) || 22);
        var Qt, Ge, Dt, de, we, tt, gt, v = this, st = 0, B = 0, y = t.passive || !f, M = $r(o, Et), Y = $r(o, Ue), U = M(), Q = Y(), ne = ~s.indexOf("touch") && !~s.indexOf("pointer") && rr[0] === "pointerdown", Re = rn(o), ee = o.ownerDocument || Lr, xe = [0, 0, 0], pe = [0, 0, 0], ue = 0, Ve = function() {
            return ue = tn()
        }, I = function($, _e) {
            return (v.event = $) && d && ~d.indexOf($.target) || _e && ne && $.pointerType !== "touch" || L && L($, _e)
        }, Ar = function() {
            v._vx.reset(),
            v._vy.reset(),
            Ge.pause(),
            p && p(v)
        }, Ot = function() {
            var $ = v.deltaX = $o(xe)
              , _e = v.deltaY = $o(pe)
              , R = Math.abs($) >= i
              , Z = Math.abs(_e) >= i;
            W && (R || Z) && W(v, $, _e, xe, pe),
            R && (F && v.deltaX > 0 && F(v),
            T && v.deltaX < 0 && T(v),
            S && S(v),
            O && v.deltaX < 0 != st < 0 && O(v),
            st = v.deltaX,
            xe[0] = xe[1] = xe[2] = 0),
            Z && (P && v.deltaY > 0 && P(v),
            x && v.deltaY < 0 && x(v),
            A && A(v),
            V && v.deltaY < 0 != B < 0 && V(v),
            B = v.deltaY,
            pe[0] = pe[1] = pe[2] = 0),
            (de || Dt) && (k && k(v),
            Dt && (b(v),
            Dt = !1),
            de = !1),
            tt && !(tt = !1) && qe && qe(v),
            we && (re(v),
            we = !1),
            Qt = 0
        }, Bt = function($, _e, R) {
            xe[R] += $,
            pe[R] += _e,
            v._vx.update($),
            v._vy.update(_e),
            l ? Qt || (Qt = requestAnimationFrame(Ot)) : Ot()
        }, xr = function($, _e) {
            He && !gt && (v.axis = gt = Math.abs($) > Math.abs(_e) ? "x" : "y",
            tt = !0),
            gt !== "y" && (xe[2] += $,
            v._vx.update($, !0)),
            gt !== "x" && (pe[2] += _e,
            v._vy.update(_e, !0)),
            l ? Qt || (Qt = requestAnimationFrame(Ot)) : Ot()
        }, Xt = function($) {
            if (!I($, 1)) {
                $ = Yi($, f);
                var _e = $.clientX
                  , R = $.clientY
                  , Z = _e - v.x
                  , X = R - v.y
                  , K = v.isDragging;
                v.x = _e,
                v.y = R,
                (K || Math.abs(v.startX - _e) >= n || Math.abs(v.startY - R) >= n) && (b && (Dt = !0),
                K || (v.isDragging = !0),
                xr(Z, X),
                K || D && D(v))
            }
        }, Zt = v.onPress = function(H) {
            I(H, 1) || H && H.button || (v.axis = gt = null,
            Ge.pause(),
            v.isPressed = !0,
            H = Yi(H),
            st = B = 0,
            v.startX = v.x = H.clientX,
            v.startY = v.y = H.clientY,
            v._vx.reset(),
            v._vy.reset(),
            Ct(q ? o : ee, rr[1], Xt, y, !0),
            v.deltaX = v.deltaY = 0,
            E && E(v))
        }
        , G = v.onRelease = function(H) {
            if (!I(H, 1)) {
                mt(q ? o : ee, rr[1], Xt, !0);
                var $ = !isNaN(v.y - v.startY)
                  , _e = v.isDragging
                  , R = _e && (Math.abs(v.x - v.startX) > 3 || Math.abs(v.y - v.startY) > 3)
                  , Z = Yi(H);
                !R && $ && (v._vx.reset(),
                v._vy.reset(),
                f && he && nt.delayedCall(.08, function() {
                    if (tn() - ue > 300 && !H.defaultPrevented) {
                        if (H.target.click)
                            H.target.click();
                        else if (ee.createEvent) {
                            var X = ee.createEvent("MouseEvents");
                            X.initMouseEvent("click", !0, !0, Yt, 1, Z.screenX, Z.screenY, Z.clientX, Z.clientY, !1, !1, !1, !1, 0, null),
                            H.target.dispatchEvent(X)
                        }
                    }
                })),
                v.isDragging = v.isGesturing = v.isPressed = !1,
                p && _e && !q && Ge.restart(!0),
                m && _e && m(v),
                C && C(v, R)
            }
        }
        , nr = function($) {
            return $.touches && $.touches.length > 1 && (v.isGesturing = !0) && w($, v.isDragging)
        }, Ke = function() {
            return (v.isGesturing = !1) || g(v)
        }, ge = function($) {
            if (!I($)) {
                var _e = M()
                  , R = Y();
                Bt((_e - U) * j, (R - Q) * j, 1),
                U = _e,
                Q = R,
                p && Ge.restart(!0)
            }
        }, be = function($) {
            if (!I($)) {
                $ = Yi($, f),
                re && (we = !0);
                var _e = ($.deltaMode === 1 ? a : $.deltaMode === 2 ? Yt.innerHeight : 1) * _;
                Bt($.deltaX * _e, $.deltaY * _e, 0),
                p && !q && Ge.restart(!0)
            }
        }, Rt = function($) {
            if (!I($)) {
                var _e = $.clientX
                  , R = $.clientY
                  , Z = _e - v.x
                  , X = R - v.y;
                v.x = _e,
                v.y = R,
                de = !0,
                p && Ge.restart(!0),
                (Z || X) && xr(Z, X)
            }
        }, Jt = function($) {
            v.event = $,
            N(v)
        }, Ie = function($) {
            v.event = $,
            J(v)
        }, er = function($) {
            return I($) || Yi($, f) && ie(v)
        };
        Ge = v._dc = nt.delayedCall(h || .25, Ar).pause(),
        v.deltaX = v.deltaY = 0,
        v._vx = Xs(0, 50, !0),
        v._vy = Xs(0, 50, !0),
        v.scrollX = M,
        v.scrollY = Y,
        v.isDragging = v.isGesturing = v.isPressed = !1,
        Da(this),
        v.enable = function(H) {
            return v.isEnabled || (Ct(Re ? ee : o, "scroll", $s),
            s.indexOf("scroll") >= 0 && Ct(Re ? ee : o, "scroll", ge, y, Be),
            s.indexOf("wheel") >= 0 && Ct(o, "wheel", be, y, Be),
            (s.indexOf("touch") >= 0 && pa || s.indexOf("pointer") >= 0) && (Ct(o, rr[0], Zt, y, Be),
            Ct(ee, rr[2], G),
            Ct(ee, rr[3], G),
            he && Ct(o, "click", Ve, !0, !0),
            ie && Ct(o, "click", er),
            w && Ct(ee, "gesturestart", nr),
            g && Ct(ee, "gestureend", Ke),
            N && Ct(o, Kr + "enter", Jt),
            J && Ct(o, Kr + "leave", Ie),
            k && Ct(o, Kr + "move", Rt)),
            v.isEnabled = !0,
            H && H.type && Zt(H),
            me && me(v)),
            v
        }
        ,
        v.disable = function() {
            v.isEnabled && (xi.filter(function(H) {
                return H !== v && rn(H.target)
            }).length || mt(Re ? ee : o, "scroll", $s),
            v.isPressed && (v._vx.reset(),
            v._vy.reset(),
            mt(q ? o : ee, rr[1], Xt, !0)),
            mt(Re ? ee : o, "scroll", ge, Be),
            mt(o, "wheel", be, Be),
            mt(o, rr[0], Zt, Be),
            mt(ee, rr[2], G),
            mt(ee, rr[3], G),
            mt(o, "click", Ve, !0),
            mt(o, "click", er),
            mt(ee, "gesturestart", nr),
            mt(ee, "gestureend", Ke),
            mt(o, Kr + "enter", Jt),
            mt(o, Kr + "leave", Ie),
            mt(o, Kr + "move", Rt),
            v.isEnabled = v.isPressed = v.isDragging = !1,
            We && We(v))
        }
        ,
        v.kill = v.revert = function() {
            v.disable();
            var H = xi.indexOf(v);
            H >= 0 && xi.splice(H, 1),
            Fr === v && (Fr = 0)
        }
        ,
        xi.push(v),
        q && rn(o) && (Fr = v),
        v.enable(c)
    }
    ,
    lf(u, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    u
}();
ze.version = "3.12.5";
ze.create = function(u) {
    return new ze(u)
}
;
ze.register = ya;
ze.getAll = function() {
    return xi.slice()
}
;
ze.getById = function(u) {
    return xi.filter(function(e) {
        return e.vars.id === u
    })[0]
}
;
ga() && nt.registerPlugin(ze);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var z, gi, fe, Se, ir, ve, xa, es, gn, nn, Ui, Fn, lt, us, Us, xt, Xo, Uo, mi, va, Cs, ba, yt, Hs, Ea, Fa, Mr, qs, go, Si, mo, ts, Gs, ys, wn = 1, ct = Date.now, xs = ct(), Kt = 0, Hi = 0, Ho = function(e, r, t) {
    var i = zt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return t["_" + r + "Clamp"] = i,
    i ? e.substr(6, e.length - 7) : e
}, qo = function(e, r) {
    return r && (!zt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, cf = function u() {
    return Hi && requestAnimationFrame(u)
}, Go = function() {
    return us = 1
}, Ko = function() {
    return us = 0
}, cr = function(e) {
    return e
}, qi = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, wa = function() {
    return typeof window < "u"
}, Ta = function() {
    return z || wa() && (z = window.gsap) && z.registerPlugin && z
}, li = function(e) {
    return !!~xa.indexOf(e)
}, Sa = function(e) {
    return (e === "Height" ? mo : fe["inner" + e]) || ir["client" + e] || ve["client" + e]
}, Aa = function(e) {
    return Nr(e, "getBoundingClientRect") || (li(e) ? function() {
        return Un.width = fe.innerWidth,
        Un.height = mo,
        Un
    }
    : function() {
        return Er(e)
    }
    )
}, hf = function(e, r, t) {
    var i = t.d
      , n = t.d2
      , s = t.a;
    return (s = Nr(e, "getBoundingClientRect")) ? function() {
        return s()[i]
    }
    : function() {
        return (r ? Sa(n) : e["client" + n]) || 0
    }
}, df = function(e, r) {
    return !r || ~Cr.indexOf(e) ? Aa(e) : function() {
        return Un
    }
}, Dr = function(e, r) {
    var t = r.s
      , i = r.d2
      , n = r.d
      , s = r.a;
    return Math.max(0, (t = "scroll" + i) && (s = Nr(e, t)) ? s() - Aa(e)()[n] : li(e) ? (ir[t] || ve[t]) - Sa(i) : e[t] - e["offset" + i])
}, Tn = function(e, r) {
    for (var t = 0; t < mi.length; t += 3)
        (!r || ~r.indexOf(mi[t + 1])) && e(mi[t], mi[t + 1], mi[t + 2])
}, zt = function(e) {
    return typeof e == "string"
}, Ft = function(e) {
    return typeof e == "function"
}, Gi = function(e) {
    return typeof e == "number"
}, jr = function(e) {
    return typeof e == "object"
}, Wi = function(e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause()
}, vs = function(e, r) {
    if (e.enabled) {
        var t = e._ctx ? e._ctx.add(function() {
            return r(e)
        }) : r(e);
        t && t.totalTime && (e.callbackAnimation = t)
    }
}, _i = Math.abs, Pa = "left", Ma = "top", Co = "right", yo = "bottom", ni = "width", si = "height", sn = "Right", on = "Left", un = "Top", an = "Bottom", Ne = "padding", Ht = "margin", Li = "Width", xo = "Height", Xe = "px", qt = function(e) {
    return fe.getComputedStyle(e)
}, pf = function(e) {
    var r = qt(e).position;
    e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
}, jo = function(e, r) {
    for (var t in r)
        t in e || (e[t] = r[t]);
    return e
}, Er = function(e, r) {
    var t = r && qt(e)[Us] !== "matrix(1, 0, 0, 1, 0, 0)" && z.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return t && t.progress(0).kill(),
    i
}, rs = function(e, r) {
    var t = r.d2;
    return e["offset" + t] || e["client" + t] || 0
}, Oa = function(e) {
    var r = [], t = e.labels, i = e.duration(), n;
    for (n in t)
        r.push(t[n] / i);
    return r
}, _f = function(e) {
    return function(r) {
        return z.utils.snap(Oa(e), r)
    }
}, vo = function(e) {
    var r = z.utils.snap(e)
      , t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
        return i - n
    });
    return t ? function(i, n, s) {
        s === void 0 && (s = .001);
        var o;
        if (!n)
            return r(i);
        if (n > 0) {
            for (i -= s,
            o = 0; o < t.length; o++)
                if (t[o] >= i)
                    return t[o];
            return t[o - 1]
        } else
            for (o = t.length,
            i += s; o--; )
                if (t[o] <= i)
                    return t[o];
        return t[0]
    }
    : function(i, n, s) {
        s === void 0 && (s = .001);
        var o = r(i);
        return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : r(n < 0 ? i - e : i + e)
    }
}, Df = function(e) {
    return function(r, t) {
        return vo(Oa(e))(r, t.direction)
    }
}, Sn = function(e, r, t, i) {
    return t.split(",").forEach(function(n) {
        return e(r, n, i)
    })
}, Ze = function(e, r, t, i, n) {
    return e.addEventListener(r, t, {
        passive: !i,
        capture: !!n
    })
}, Qe = function(e, r, t, i) {
    return e.removeEventListener(r, t, !!i)
}, An = function(e, r, t) {
    t = t && t.wheelHandler,
    t && (e(r, "wheel", t),
    e(r, "touchmove", t))
}, Qo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Pn = {
    toggleActions: "play",
    anticipatePin: 0
}, is = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Wn = function(e, r) {
    if (zt(e)) {
        var t = e.indexOf("=")
          , i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
        ~t && (e.indexOf("%") > t && (i *= r / 100),
        e = e.substr(0, t - 1)),
        e = i + (e in is ? is[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
    }
    return e
}, Mn = function(e, r, t, i, n, s, o, a) {
    var l = n.startColor
      , f = n.endColor
      , p = n.fontSize
      , h = n.indent
      , d = n.fontWeight
      , _ = Se.createElement("div")
      , c = li(t) || Nr(t, "pinType") === "fixed"
      , D = e.indexOf("scroller") !== -1
      , m = c ? ve : t
      , b = e.indexOf("start") !== -1
      , E = b ? l : f
      , C = "border-color:" + E + ";font-size:" + p + ";color:" + E + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return C += "position:" + ((D || a) && c ? "fixed;" : "absolute;"),
    (D || a || !c) && (C += (i === Ue ? Co : yo) + ":" + (s + parseFloat(h)) + "px;"),
    o && (C += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
    _._isStart = b,
    _.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
    _.style.cssText = C,
    _.innerText = r || r === 0 ? e + "-" + r : e,
    m.children[0] ? m.insertBefore(_, m.children[0]) : m.appendChild(_),
    _._offset = _["offset" + i.op.d2],
    Vn(_, 0, i, b),
    _
}, Vn = function(e, r, t, i) {
    var n = {
        display: "block"
    }
      , s = t[i ? "os2" : "p2"]
      , o = t[i ? "p2" : "os2"];
    e._isFlipped = i,
    n[t.a + "Percent"] = i ? -100 : 0,
    n[t.a] = i ? "1px" : 0,
    n["border" + s + Li] = 1,
    n["border" + o + Li] = 0,
    n[t.p] = r + "px",
    z.set(e, n)
}, se = [], Ks = {}, mn, Zo = function() {
    return ct() - Kt > 34 && (mn || (mn = requestAnimationFrame(wr)))
}, Di = function() {
    (!yt || !yt.isPressed || yt.startX > ve.clientWidth) && (ae.cache++,
    yt ? mn || (mn = requestAnimationFrame(wr)) : wr(),
    Kt || ci("scrollStart"),
    Kt = ct())
}, bs = function() {
    Fa = fe.innerWidth,
    Ea = fe.innerHeight
}, Ki = function() {
    ae.cache++,
    !lt && !ba && !Se.fullscreenElement && !Se.webkitFullscreenElement && (!Hs || Fa !== fe.innerWidth || Math.abs(fe.innerHeight - Ea) > fe.innerHeight * .25) && es.restart(!0)
}, fi = {}, gf = [], Ba = function u() {
    return Qe(oe, "scrollEnd", u) || Jr(!0)
}, ci = function(e) {
    return fi[e] && fi[e].map(function(r) {
        return r()
    }) || gf
}, kt = [], Ra = function(e) {
    for (var r = 0; r < kt.length; r += 5)
        (!e || kt[r + 4] && kt[r + 4].query === e) && (kt[r].style.cssText = kt[r + 1],
        kt[r].getBBox && kt[r].setAttribute("transform", kt[r + 2] || ""),
        kt[r + 3].uncache = 1)
}, bo = function(e, r) {
    var t;
    for (xt = 0; xt < se.length; xt++)
        t = se[xt],
        t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
    ts = !0,
    r && Ra(r),
    r || ci("revert")
}, La = function(e, r) {
    ae.cache++,
    (r || !vt) && ae.forEach(function(t) {
        return Ft(t) && t.cacheID++ && (t.rec = 0)
    }),
    zt(e) && (fe.history.scrollRestoration = go = e)
}, vt, oi = 0, Jo, mf = function() {
    if (Jo !== oi) {
        var e = Jo = oi;
        requestAnimationFrame(function() {
            return e === oi && Jr(!0)
        })
    }
}, ka = function() {
    ve.appendChild(Si),
    mo = !yt && Si.offsetHeight || fe.innerHeight,
    ve.removeChild(Si)
}, eu = function(e) {
    return gn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
        return r.style.display = e ? "none" : "block"
    })
}, Jr = function(e, r) {
    if (Kt && !e && !ts) {
        Ze(oe, "scrollEnd", Ba);
        return
    }
    ka(),
    vt = oe.isRefreshing = !0,
    ae.forEach(function(i) {
        return Ft(i) && ++i.cacheID && (i.rec = i())
    });
    var t = ci("refreshInit");
    va && oe.sort(),
    r || bo(),
    ae.forEach(function(i) {
        Ft(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    se.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    ts = !1,
    se.forEach(function(i) {
        if (i._subPinOffset && i.pin) {
            var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , s = i.pin[n];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[n] - s),
            i.refresh()
        }
    }),
    Gs = 1,
    eu(!0),
    se.forEach(function(i) {
        var n = Dr(i.scroller, i._dir)
          , s = i.vars.end === "max" || i._endClamp && i.end > n
          , o = i._startClamp && i.start >= n;
        (s || o) && i.setPositions(o ? n - 1 : i.start, s ? Math.max(o ? n : i.start + 1, n) : i.end, !0)
    }),
    eu(!1),
    Gs = 0,
    t.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    ae.forEach(function(i) {
        Ft(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    La(go, 1),
    es.pause(),
    oi++,
    vt = 2,
    wr(2),
    se.forEach(function(i) {
        return Ft(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    vt = oe.isRefreshing = !1,
    ci("refresh")
}, js = 0, $n = 1, ln, wr = function(e) {
    if (e === 2 || !vt && !ts) {
        oe.isUpdating = !0,
        ln && ln.update(0);
        var r = se.length
          , t = ct()
          , i = t - xs >= 50
          , n = r && se[0].scroll();
        if ($n = js > n ? -1 : 1,
        vt || (js = n),
        i && (Kt && !us && t - Kt > 200 && (Kt = 0,
        ci("scrollEnd")),
        Ui = xs,
        xs = t),
        $n < 0) {
            for (xt = r; xt-- > 0; )
                se[xt] && se[xt].update(0, i);
            $n = 1
        } else
            for (xt = 0; xt < r; xt++)
                se[xt] && se[xt].update(0, i);
        oe.isUpdating = !1
    }
    mn = 0
}, Qs = [Pa, Ma, yo, Co, Ht + an, Ht + sn, Ht + un, Ht + on, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Xn = Qs.concat([ni, si, "boxSizing", "max" + Li, "max" + xo, "position", Ht, Ne, Ne + un, Ne + sn, Ne + an, Ne + on]), Cf = function(e, r, t) {
    Ai(t);
    var i = e._gsap;
    if (i.spacerIsNative)
        Ai(i.spacerState);
    else if (e._gsap.swappedIn) {
        var n = r.parentNode;
        n && (n.insertBefore(e, r),
        n.removeChild(r))
    }
    e._gsap.swappedIn = !1
}, Es = function(e, r, t, i) {
    if (!e._gsap.swappedIn) {
        for (var n = Qs.length, s = r.style, o = e.style, a; n--; )
            a = Qs[n],
            s[a] = t[a];
        s.position = t.position === "absolute" ? "absolute" : "relative",
        t.display === "inline" && (s.display = "inline-block"),
        o[yo] = o[Co] = "auto",
        s.flexBasis = t.flexBasis || "auto",
        s.overflow = "visible",
        s.boxSizing = "border-box",
        s[ni] = rs(e, Et) + Xe,
        s[si] = rs(e, Ue) + Xe,
        s[Ne] = o[Ht] = o[Ma] = o[Pa] = "0",
        Ai(i),
        o[ni] = o["max" + Li] = t[ni],
        o[si] = o["max" + xo] = t[si],
        o[Ne] = t[Ne],
        e.parentNode !== r && (e.parentNode.insertBefore(r, e),
        r.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, yf = /([A-Z])/g, Ai = function(e) {
    if (e) {
        var r = e.t.style, t = e.length, i = 0, n, s;
        for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; i < t; i += 2)
            s = e[i + 1],
            n = e[i],
            s ? r[n] = s : r[n] && r.removeProperty(n.replace(yf, "-$1").toLowerCase())
    }
}, On = function(e) {
    for (var r = Xn.length, t = e.style, i = [], n = 0; n < r; n++)
        i.push(Xn[n], t[Xn[n]]);
    return i.t = e,
    i
}, xf = function(e, r, t) {
    for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
        o = e[s],
        i.push(o, o in r ? r[o] : e[s + 1]);
    return i.t = e.t,
    i
}, Un = {
    left: 0,
    top: 0
}, tu = function(e, r, t, i, n, s, o, a, l, f, p, h, d, _) {
    Ft(e) && (e = e(a)),
    zt(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Wn("0" + e.substr(3), t) : 0));
    var c = d ? d.time() : 0, D, m, b;
    if (d && d.seek(0),
    isNaN(e) || (e = +e),
    Gi(e))
        d && (e = z.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)),
        o && Vn(o, t, i, !0);
    else {
        Ft(r) && (r = r(a));
        var E = (e || "0").split(" "), C, F, T, x;
        b = wt(r, a) || ve,
        C = Er(b) || {},
        (!C || !C.left && !C.top) && qt(b).display === "none" && (x = b.style.display,
        b.style.display = "block",
        C = Er(b),
        x ? b.style.display = x : b.style.removeProperty("display")),
        F = Wn(E[0], C[i.d]),
        T = Wn(E[1] || "0", t),
        e = C[i.p] - l[i.p] - f + F + n - T,
        o && Vn(o, T, i, t - T < 20 || o._isStart && T > 20),
        t -= t - T
    }
    if (_ && (a[_] = e || -.001,
    e < 0 && (e = 0)),
    s) {
        var P = e + t
          , S = s._isStart;
        D = "scroll" + i.d2,
        Vn(s, P, i, S && P > 20 || !S && (p ? Math.max(ve[D], ir[D]) : s.parentNode[D]) <= P + 1),
        p && (l = Er(o),
        p && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Xe))
    }
    return d && b && (D = Er(b),
    d.seek(h),
    m = Er(b),
    d._caScrollDist = D[i.p] - m[i.p],
    e = e / d._caScrollDist * h),
    d && d.seek(c),
    d ? e : Math.round(e)
}, vf = /(webkit|moz|length|cssText|inset)/i, ru = function(e, r, t, i) {
    if (e.parentNode !== r) {
        var n = e.style, s, o;
        if (r === ve) {
            e._stOrig = n.cssText,
            o = qt(e);
            for (s in o)
                !+s && !vf.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
            n.top = t,
            n.left = i
        } else
            n.cssText = e._stOrig;
        z.core.getCache(e).uncache = 1,
        r.appendChild(e)
    }
}, za = function(e, r, t) {
    var i = r
      , n = i;
    return function(s) {
        var o = Math.round(e());
        return o !== i && o !== n && Math.abs(o - i) > 3 && Math.abs(o - n) > 3 && (s = o,
        t && t()),
        n = i,
        i = s,
        s
    }
}, Bn = function(e, r, t) {
    var i = {};
    i[r.p] = "+=" + t,
    z.set(e, i)
}, iu = function(e, r) {
    var t = $r(e, r)
      , i = "_scroll" + r.p2
      , n = function s(o, a, l, f, p) {
        var h = s.tween
          , d = a.onComplete
          , _ = {};
        l = l || t();
        var c = za(t, l, function() {
            h.kill(),
            s.tween = 0
        });
        return p = f && p || 0,
        f = f || o - l,
        h && h.kill(),
        a[i] = o,
        a.inherit = !1,
        a.modifiers = _,
        _[i] = function() {
            return c(l + f * h.ratio + p * h.ratio * h.ratio)
        }
        ,
        a.onUpdate = function() {
            ae.cache++,
            s.tween && wr()
        }
        ,
        a.onComplete = function() {
            s.tween = 0,
            d && d.call(h)
        }
        ,
        h = s.tween = z.to(e, a),
        h
    };
    return e[i] = t,
    t.wheelHandler = function() {
        return n.tween && n.tween.kill() && (n.tween = 0)
    }
    ,
    Ze(e, "wheel", t.wheelHandler),
    oe.isTouch && Ze(e, "touchmove", t.wheelHandler),
    n
}, oe = function() {
    function u(r, t) {
        gi || u.register(z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        qs(this),
        this.init(r, t)
    }
    var e = u.prototype;
    return e.init = function(t, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Hi) {
            this.update = this.refresh = this.kill = cr;
            return
        }
        t = jo(zt(t) || Gi(t) || t.nodeType ? {
            trigger: t
        } : t, Pn);
        var n = t, s = n.onUpdate, o = n.toggleClass, a = n.id, l = n.onToggle, f = n.onRefresh, p = n.scrub, h = n.trigger, d = n.pin, _ = n.pinSpacing, c = n.invalidateOnRefresh, D = n.anticipatePin, m = n.onScrubComplete, b = n.onSnapComplete, E = n.once, C = n.snap, F = n.pinReparent, T = n.pinSpacer, x = n.containerAnimation, P = n.fastScrollEnd, S = n.preventOverlaps, A = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Et : Ue, W = !p && p !== 0, O = wt(t.scroller || fe), V = z.core.getCache(O), N = li(O), J = ("pinType"in t ? t.pinType : Nr(O, "pinType") || N && "fixed") === "fixed", k = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], L = W && t.toggleActions.split(" "), q = "markers"in t ? t.markers : Pn.markers, w = N ? 0 : parseFloat(qt(O)["border" + A.p2 + Li]) || 0, g = this, re = t.onRefreshInit && function() {
            return t.onRefreshInit(g)
        }
        , me = hf(O, N, A), We = df(O, N), ie = 0, j = 0, Be = 0, he = $r(O, A), He, qe, Qt, Ge, Dt, de, we, tt, gt, v, st, B, y, M, Y, U, Q, ne, Re, ee, xe, pe, ue, Ve, I, Ar, Ot, Bt, xr, Xt, Zt, G, nr, Ke, ge, be, Rt, Jt, Ie;
        if (g._startClamp = g._endClamp = !1,
        g._dir = A,
        D *= 45,
        g.scroller = O,
        g.scroll = x ? x.time.bind(x) : he,
        Ge = he(),
        g.vars = t,
        i = i || t.animation,
        "refreshPriority"in t && (va = 1,
        t.refreshPriority === -9999 && (ln = g)),
        V.tweenScroll = V.tweenScroll || {
            top: iu(O, Ue),
            left: iu(O, Et)
        },
        g.tweenTo = He = V.tweenScroll[A.p],
        g.scrubDuration = function(R) {
            nr = Gi(R) && R,
            nr ? G ? G.duration(R) : G = z.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: nr,
                paused: !0,
                onComplete: function() {
                    return m && m(g)
                }
            }) : (G && G.progress(1).kill(),
            G = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !g.isReverted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        g.animation = i.pause(),
        i.scrollTrigger = g,
        g.scrubDuration(p),
        Xt = 0,
        a || (a = i.vars.id)),
        C && ((!jr(C) || C.push) && (C = {
            snapTo: C
        }),
        "scrollBehavior"in ve.style && z.set(N ? [ve, ir] : O, {
            scrollBehavior: "auto"
        }),
        ae.forEach(function(R) {
            return Ft(R) && R.target === (N ? Se.scrollingElement || ir : O) && (R.smooth = !1)
        }),
        Qt = Ft(C.snapTo) ? C.snapTo : C.snapTo === "labels" ? _f(i) : C.snapTo === "labelsDirectional" ? Df(i) : C.directional !== !1 ? function(R, Z) {
            return vo(C.snapTo)(R, ct() - j < 500 ? 0 : Z.direction)
        }
        : z.utils.snap(C.snapTo),
        Ke = C.duration || {
            min: .1,
            max: 2
        },
        Ke = jr(Ke) ? nn(Ke.min, Ke.max) : nn(Ke, Ke),
        ge = z.delayedCall(C.delay || nr / 2 || .1, function() {
            var R = he()
              , Z = ct() - j < 500
              , X = He.tween;
            if ((Z || Math.abs(g.getVelocity()) < 10) && !X && !us && ie !== R) {
                var K = (R - de) / M, je = i && !W ? i.totalProgress() : K, le = Z ? 0 : (je - Zt) / (ct() - Ui) * 1e3 || 0, Le = z.utils.clamp(-K, 1 - K, _i(le / 2) * le / .185), ot = K + (C.inertia === !1 ? 0 : Le), Me, Ee, Ce = C, tr = Ce.onStart, Te = Ce.onInterrupt, Lt = Ce.onComplete;
                if (Me = Qt(ot, g),
                Gi(Me) || (Me = ot),
                Ee = Math.round(de + Me * M),
                R <= we && R >= de && Ee !== R) {
                    if (X && !X._initted && X.data <= _i(Ee - R))
                        return;
                    C.inertia === !1 && (Le = Me - K),
                    He(Ee, {
                        duration: Ke(_i(Math.max(_i(ot - je), _i(Me - je)) * .185 / le / .05 || 0)),
                        ease: C.ease || "power3",
                        data: _i(Ee - R),
                        onInterrupt: function() {
                            return ge.restart(!0) && Te && Te(g)
                        },
                        onComplete: function() {
                            g.update(),
                            ie = he(),
                            i && (G ? G.resetTo("totalProgress", Me, i._tTime / i._tDur) : i.progress(Me)),
                            Xt = Zt = i && !W ? i.totalProgress() : g.progress,
                            b && b(g),
                            Lt && Lt(g)
                        }
                    }, R, Le * M, Ee - R - Le * M),
                    tr && tr(g, He.tween)
                }
            } else
                g.isActive && ie !== R && ge.restart(!0)
        }).pause()),
        a && (Ks[a] = g),
        h = g.trigger = wt(h || d !== !0 && d),
        Ie = h && h._gsap && h._gsap.stRevert,
        Ie && (Ie = Ie(g)),
        d = d === !0 ? h : wt(d),
        zt(o) && (o = {
            targets: h,
            className: o
        }),
        d && (_ === !1 || _ === Ht || (_ = !_ && d.parentNode && d.parentNode.style && qt(d.parentNode).display === "flex" ? !1 : Ne),
        g.pin = d,
        qe = z.core.getCache(d),
        qe.spacer ? Y = qe.pinState : (T && (T = wt(T),
        T && !T.nodeType && (T = T.current || T.nativeElement),
        qe.spacerIsNative = !!T,
        T && (qe.spacerState = On(T))),
        qe.spacer = ne = T || Se.createElement("div"),
        ne.classList.add("pin-spacer"),
        a && ne.classList.add("pin-spacer-" + a),
        qe.pinState = Y = On(d)),
        t.force3D !== !1 && z.set(d, {
            force3D: !0
        }),
        g.spacer = ne = qe.spacer,
        xr = qt(d),
        Ve = xr[_ + A.os2],
        ee = z.getProperty(d),
        xe = z.quickSetter(d, A.a, Xe),
        Es(d, ne, xr),
        Q = On(d)),
        q) {
            B = jr(q) ? jo(q, Qo) : Qo,
            v = Mn("scroller-start", a, O, A, B, 0),
            st = Mn("scroller-end", a, O, A, B, 0, v),
            Re = v["offset" + A.op.d2];
            var er = wt(Nr(O, "content") || O);
            tt = this.markerStart = Mn("start", a, er, A, B, Re, 0, x),
            gt = this.markerEnd = Mn("end", a, er, A, B, Re, 0, x),
            x && (Jt = z.quickSetter([tt, gt], A.a, Xe)),
            !J && !(Cr.length && Nr(O, "fixedMarkers") === !0) && (pf(N ? ve : O),
            z.set([v, st], {
                force3D: !0
            }),
            Ar = z.quickSetter(v, A.a, Xe),
            Bt = z.quickSetter(st, A.a, Xe))
        }
        if (x) {
            var H = x.vars.onUpdate
              , $ = x.vars.onUpdateParams;
            x.eventCallback("onUpdate", function() {
                g.update(0, 0, 1),
                H && H.apply(x, $ || [])
            })
        }
        if (g.previous = function() {
            return se[se.indexOf(g) - 1]
        }
        ,
        g.next = function() {
            return se[se.indexOf(g) + 1]
        }
        ,
        g.revert = function(R, Z) {
            if (!Z)
                return g.kill(!0);
            var X = R !== !1 || !g.enabled
              , K = lt;
            X !== g.isReverted && (X && (be = Math.max(he(), g.scroll.rec || 0),
            Be = g.progress,
            Rt = i && i.progress()),
            tt && [tt, gt, v, st].forEach(function(je) {
                return je.style.display = X ? "none" : "block"
            }),
            X && (lt = g,
            g.update(X)),
            d && (!F || !g.isActive) && (X ? Cf(d, ne, Y) : Es(d, ne, qt(d), I)),
            X || g.update(X),
            lt = K,
            g.isReverted = X)
        }
        ,
        g.refresh = function(R, Z, X, K) {
            if (!((lt || !g.enabled) && !Z)) {
                if (d && R && Kt) {
                    Ze(u, "scrollEnd", Ba);
                    return
                }
                !vt && re && re(g),
                lt = g,
                He.tween && !X && (He.tween.kill(),
                He.tween = 0),
                G && G.pause(),
                c && i && i.revert({
                    kill: !1
                }).invalidate(),
                g.isReverted || g.revert(!0, !0),
                g._subPinOffset = !1;
                var je = me(), le = We(), Le = x ? x.duration() : Dr(O, A), ot = M <= .01, Me = 0, Ee = K || 0, Ce = jr(X) ? X.end : t.end, tr = t.endTrigger || h, Te = jr(X) ? X.start : t.start || (t.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), Lt = g.pinnedContainer = t.pinnedContainer && wt(t.pinnedContainer, g), sr = h && Math.max(0, se.indexOf(g)) || 0, rt = sr, it, ut, Ur, yn, at, $e, or, ls, wo, ki, ur, zi, xn;
                for (q && jr(X) && (zi = z.getProperty(v, A.p),
                xn = z.getProperty(st, A.p)); rt--; )
                    $e = se[rt],
                    $e.end || $e.refresh(0, 1) || (lt = g),
                    or = $e.pin,
                    or && (or === h || or === d || or === Lt) && !$e.isReverted && (ki || (ki = []),
                    ki.unshift($e),
                    $e.revert(!0, !0)),
                    $e !== se[rt] && (sr--,
                    rt--);
                for (Ft(Te) && (Te = Te(g)),
                Te = Ho(Te, "start", g),
                de = tu(Te, h, je, A, he(), tt, v, g, le, w, J, Le, x, g._startClamp && "_startClamp") || (d ? -.001 : 0),
                Ft(Ce) && (Ce = Ce(g)),
                zt(Ce) && !Ce.indexOf("+=") && (~Ce.indexOf(" ") ? Ce = (zt(Te) ? Te.split(" ")[0] : "") + Ce : (Me = Wn(Ce.substr(2), je),
                Ce = zt(Te) ? Te : (x ? z.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, de) : de) + Me,
                tr = h)),
                Ce = Ho(Ce, "end", g),
                we = Math.max(de, tu(Ce || (tr ? "100% 0" : Le), tr, je, A, he() + Me, gt, st, g, le, w, J, Le, x, g._endClamp && "_endClamp")) || -.001,
                Me = 0,
                rt = sr; rt--; )
                    $e = se[rt],
                    or = $e.pin,
                    or && $e.start - $e._pinPush <= de && !x && $e.end > 0 && (it = $e.end - (g._startClamp ? Math.max(0, $e.start) : $e.start),
                    (or === h && $e.start - $e._pinPush < de || or === Lt) && isNaN(Te) && (Me += it * (1 - $e.progress)),
                    or === d && (Ee += it));
                if (de += Me,
                we += Me,
                g._startClamp && (g._startClamp += Me),
                g._endClamp && !vt && (g._endClamp = we || -.001,
                we = Math.min(we, Dr(O, A))),
                M = we - de || (de -= .01) && .001,
                ot && (Be = z.utils.clamp(0, 1, z.utils.normalize(de, we, be))),
                g._pinPush = Ee,
                tt && Me && (it = {},
                it[A.a] = "+=" + Me,
                Lt && (it[A.p] = "-=" + he()),
                z.set([tt, gt], it)),
                d && !(Gs && g.end >= Dr(O, A)))
                    it = qt(d),
                    yn = A === Ue,
                    Ur = he(),
                    pe = parseFloat(ee(A.a)) + Ee,
                    !Le && we > 1 && (ur = (N ? Se.scrollingElement || ir : O).style,
                    ur = {
                        style: ur,
                        value: ur["overflow" + A.a.toUpperCase()]
                    },
                    N && qt(ve)["overflow" + A.a.toUpperCase()] !== "scroll" && (ur.style["overflow" + A.a.toUpperCase()] = "scroll")),
                    Es(d, ne, it),
                    Q = On(d),
                    ut = Er(d, !0),
                    ls = J && $r(O, yn ? Et : Ue)(),
                    _ ? (I = [_ + A.os2, M + Ee + Xe],
                    I.t = ne,
                    rt = _ === Ne ? rs(d, A) + M + Ee : 0,
                    rt && (I.push(A.d, rt + Xe),
                    ne.style.flexBasis !== "auto" && (ne.style.flexBasis = rt + Xe)),
                    Ai(I),
                    Lt && se.forEach(function(Ii) {
                        Ii.pin === Lt && Ii.vars.pinSpacing !== !1 && (Ii._subPinOffset = !0)
                    }),
                    J && he(be)) : (rt = rs(d, A),
                    rt && ne.style.flexBasis !== "auto" && (ne.style.flexBasis = rt + Xe)),
                    J && (at = {
                        top: ut.top + (yn ? Ur - de : ls) + Xe,
                        left: ut.left + (yn ? ls : Ur - de) + Xe,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    at[ni] = at["max" + Li] = Math.ceil(ut.width) + Xe,
                    at[si] = at["max" + xo] = Math.ceil(ut.height) + Xe,
                    at[Ht] = at[Ht + un] = at[Ht + sn] = at[Ht + an] = at[Ht + on] = "0",
                    at[Ne] = it[Ne],
                    at[Ne + un] = it[Ne + un],
                    at[Ne + sn] = it[Ne + sn],
                    at[Ne + an] = it[Ne + an],
                    at[Ne + on] = it[Ne + on],
                    U = xf(Y, at, F),
                    vt && he(0)),
                    i ? (wo = i._initted,
                    Cs(1),
                    i.render(i.duration(), !0, !0),
                    ue = ee(A.a) - pe + M + Ee,
                    Ot = Math.abs(M - ue) > 1,
                    J && Ot && U.splice(U.length - 2, 2),
                    i.render(0, !0, !0),
                    wo || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Cs(0)) : ue = M,
                    ur && (ur.value ? ur.style["overflow" + A.a.toUpperCase()] = ur.value : ur.style.removeProperty("overflow-" + A.a));
                else if (h && he() && !x)
                    for (ut = h.parentNode; ut && ut !== ve; )
                        ut._pinOffset && (de -= ut._pinOffset,
                        we -= ut._pinOffset),
                        ut = ut.parentNode;
                ki && ki.forEach(function(Ii) {
                    return Ii.revert(!1, !0)
                }),
                g.start = de,
                g.end = we,
                Ge = Dt = vt ? be : he(),
                !x && !vt && (Ge < be && he(be),
                g.scroll.rec = 0),
                g.revert(!1, !0),
                j = ct(),
                ge && (ie = -1,
                ge.restart(!0)),
                lt = 0,
                i && W && (i._initted || Rt) && i.progress() !== Rt && i.progress(Rt || 0, !0).render(i.time(), !0, !0),
                (ot || Be !== g.progress || x || c) && (i && !W && i.totalProgress(x && de < -.001 && !Be ? z.utils.normalize(de, we, 0) : Be, !0),
                g.progress = ot || (Ge - de) / M === Be ? 0 : Be),
                d && _ && (ne._pinOffset = Math.round(g.progress * ue)),
                G && G.invalidate(),
                isNaN(zi) || (zi -= z.getProperty(v, A.p),
                xn -= z.getProperty(st, A.p),
                Bn(v, A, zi),
                Bn(tt, A, zi - (K || 0)),
                Bn(st, A, xn),
                Bn(gt, A, xn - (K || 0))),
                ot && !vt && g.update(),
                f && !vt && !y && (y = !0,
                f(g),
                y = !1)
            }
        }
        ,
        g.getVelocity = function() {
            return (he() - Dt) / (ct() - Ui) * 1e3 || 0
        }
        ,
        g.endAnimation = function() {
            Wi(g.callbackAnimation),
            i && (G ? G.progress(1) : i.paused() ? W || Wi(i, g.direction < 0, 1) : Wi(i, i.reversed()))
        }
        ,
        g.labelToScroll = function(R) {
            return i && i.labels && (de || g.refresh() || de) + i.labels[R] / i.duration() * M || 0
        }
        ,
        g.getTrailing = function(R) {
            var Z = se.indexOf(g)
              , X = g.direction > 0 ? se.slice(0, Z).reverse() : se.slice(Z + 1);
            return (zt(R) ? X.filter(function(K) {
                return K.vars.preventOverlaps === R
            }) : X).filter(function(K) {
                return g.direction > 0 ? K.end <= de : K.start >= we
            })
        }
        ,
        g.update = function(R, Z, X) {
            if (!(x && !X && !R)) {
                var K = vt === !0 ? be : g.scroll(), je = R ? 0 : (K - de) / M, le = je < 0 ? 0 : je > 1 ? 1 : je || 0, Le = g.progress, ot, Me, Ee, Ce, tr, Te, Lt, sr;
                if (Z && (Dt = Ge,
                Ge = x ? he() : K,
                C && (Zt = Xt,
                Xt = i && !W ? i.totalProgress() : le)),
                D && d && !lt && !wn && Kt && (!le && de < K + (K - Dt) / (ct() - Ui) * D ? le = 1e-4 : le === 1 && we > K + (K - Dt) / (ct() - Ui) * D && (le = .9999)),
                le !== Le && g.enabled) {
                    if (ot = g.isActive = !!le && le < 1,
                    Me = !!Le && Le < 1,
                    Te = ot !== Me,
                    tr = Te || !!le != !!Le,
                    g.direction = le > Le ? 1 : -1,
                    g.progress = le,
                    tr && !lt && (Ee = le && !Le ? 0 : le === 1 ? 1 : Le === 1 ? 2 : 3,
                    W && (Ce = !Te && L[Ee + 1] !== "none" && L[Ee + 1] || L[Ee],
                    sr = i && (Ce === "complete" || Ce === "reset" || Ce in i))),
                    S && (Te || sr) && (sr || p || !i) && (Ft(S) ? S(g) : g.getTrailing(S).forEach(function(Ur) {
                        return Ur.endAnimation()
                    })),
                    W || (G && !lt && !wn ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start),
                    G.resetTo ? G.resetTo("totalProgress", le, i._tTime / i._tDur) : (G.vars.totalProgress = le,
                    G.invalidate().restart())) : i && i.totalProgress(le, !!(lt && (j || R)))),
                    d) {
                        if (R && _ && (ne.style[_ + A.os2] = Ve),
                        !J)
                            xe(qi(pe + ue * le));
                        else if (tr) {
                            if (Lt = !R && le > Le && we + 1 > K && K + 1 >= Dr(O, A),
                            F)
                                if (!R && (ot || Lt)) {
                                    var rt = Er(d, !0)
                                      , it = K - de;
                                    ru(d, ve, rt.top + (A === Ue ? it : 0) + Xe, rt.left + (A === Ue ? 0 : it) + Xe)
                                } else
                                    ru(d, ne);
                            Ai(ot || Lt ? U : Q),
                            Ot && le < 1 && ot || xe(pe + (le === 1 && !Lt ? ue : 0))
                        }
                    }
                    C && !He.tween && !lt && !wn && ge.restart(!0),
                    o && (Te || E && le && (le < 1 || !ys)) && gn(o.targets).forEach(function(Ur) {
                        return Ur.classList[ot || E ? "add" : "remove"](o.className)
                    }),
                    s && !W && !R && s(g),
                    tr && !lt ? (W && (sr && (Ce === "complete" ? i.pause().totalProgress(1) : Ce === "reset" ? i.restart(!0).pause() : Ce === "restart" ? i.restart(!0) : i[Ce]()),
                    s && s(g)),
                    (Te || !ys) && (l && Te && vs(g, l),
                    k[Ee] && vs(g, k[Ee]),
                    E && (le === 1 ? g.kill(!1, 1) : k[Ee] = 0),
                    Te || (Ee = le === 1 ? 1 : 3,
                    k[Ee] && vs(g, k[Ee]))),
                    P && !ot && Math.abs(g.getVelocity()) > (Gi(P) ? P : 2500) && (Wi(g.callbackAnimation),
                    G ? G.progress(1) : Wi(i, Ce === "reverse" ? 1 : !le, 1))) : W && s && !lt && s(g)
                }
                if (Bt) {
                    var ut = x ? K / x.duration() * (x._caScrollDist || 0) : K;
                    Ar(ut + (v._isFlipped ? 1 : 0)),
                    Bt(ut)
                }
                Jt && Jt(-K / x.duration() * (x._caScrollDist || 0))
            }
        }
        ,
        g.enable = function(R, Z) {
            g.enabled || (g.enabled = !0,
            Ze(O, "resize", Ki),
            N || Ze(O, "scroll", Di),
            re && Ze(u, "refreshInit", re),
            R !== !1 && (g.progress = Be = 0,
            Ge = Dt = ie = he()),
            Z !== !1 && g.refresh())
        }
        ,
        g.getTween = function(R) {
            return R && He ? He.tween : G
        }
        ,
        g.setPositions = function(R, Z, X, K) {
            if (x) {
                var je = x.scrollTrigger
                  , le = x.duration()
                  , Le = je.end - je.start;
                R = je.start + Le * R / le,
                Z = je.start + Le * Z / le
            }
            g.refresh(!1, !1, {
                start: qo(R, X && !!g._startClamp),
                end: qo(Z, X && !!g._endClamp)
            }, K),
            g.update()
        }
        ,
        g.adjustPinSpacing = function(R) {
            if (I && R) {
                var Z = I.indexOf(A.d) + 1;
                I[Z] = parseFloat(I[Z]) + R + Xe,
                I[1] = parseFloat(I[1]) + R + Xe,
                Ai(I)
            }
        }
        ,
        g.disable = function(R, Z) {
            if (g.enabled && (R !== !1 && g.revert(!0, !0),
            g.enabled = g.isActive = !1,
            Z || G && G.pause(),
            be = 0,
            qe && (qe.uncache = 1),
            re && Qe(u, "refreshInit", re),
            ge && (ge.pause(),
            He.tween && He.tween.kill() && (He.tween = 0)),
            !N)) {
                for (var X = se.length; X--; )
                    if (se[X].scroller === O && se[X] !== g)
                        return;
                Qe(O, "resize", Ki),
                N || Qe(O, "scroll", Di)
            }
        }
        ,
        g.kill = function(R, Z) {
            g.disable(R, Z),
            G && !Z && G.kill(),
            a && delete Ks[a];
            var X = se.indexOf(g);
            X >= 0 && se.splice(X, 1),
            X === xt && $n > 0 && xt--,
            X = 0,
            se.forEach(function(K) {
                return K.scroller === g.scroller && (X = 1)
            }),
            X || vt || (g.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            R && i.revert({
                kill: !1
            }),
            Z || i.kill()),
            tt && [tt, gt, v, st].forEach(function(K) {
                return K.parentNode && K.parentNode.removeChild(K)
            }),
            ln === g && (ln = 0),
            d && (qe && (qe.uncache = 1),
            X = 0,
            se.forEach(function(K) {
                return K.pin === d && X++
            }),
            X || (qe.spacer = 0)),
            t.onKill && t.onKill(g)
        }
        ,
        se.push(g),
        g.enable(!1, !1),
        Ie && Ie(g),
        i && i.add && !M) {
            var _e = g.update;
            g.update = function() {
                g.update = _e,
                de || we || g.refresh()
            }
            ,
            z.delayedCall(.01, g.update),
            M = .01,
            de = we = 0
        } else
            g.refresh();
        d && mf()
    }
    ,
    u.register = function(t) {
        return gi || (z = t || Ta(),
        wa() && window.document && u.enable(),
        gi = Hi),
        gi
    }
    ,
    u.defaults = function(t) {
        if (t)
            for (var i in t)
                Pn[i] = t[i];
        return Pn
    }
    ,
    u.disable = function(t, i) {
        Hi = 0,
        se.forEach(function(s) {
            return s[i ? "kill" : "disable"](t)
        }),
        Qe(fe, "wheel", Di),
        Qe(Se, "scroll", Di),
        clearInterval(Fn),
        Qe(Se, "touchcancel", cr),
        Qe(ve, "touchstart", cr),
        Sn(Qe, Se, "pointerdown,touchstart,mousedown", Go),
        Sn(Qe, Se, "pointerup,touchend,mouseup", Ko),
        es.kill(),
        Tn(Qe);
        for (var n = 0; n < ae.length; n += 3)
            An(Qe, ae[n], ae[n + 1]),
            An(Qe, ae[n], ae[n + 2])
    }
    ,
    u.enable = function() {
        if (fe = window,
        Se = document,
        ir = Se.documentElement,
        ve = Se.body,
        z && (gn = z.utils.toArray,
        nn = z.utils.clamp,
        qs = z.core.context || cr,
        Cs = z.core.suppressOverwrites || cr,
        go = fe.history.scrollRestoration || "auto",
        js = fe.pageYOffset,
        z.core.globals("ScrollTrigger", u),
        ve)) {
            Hi = 1,
            Si = document.createElement("div"),
            Si.style.height = "100vh",
            Si.style.position = "absolute",
            ka(),
            cf(),
            ze.register(z),
            u.isTouch = ze.isTouch,
            Mr = ze.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Hs = ze.isTouch === 1,
            Ze(fe, "wheel", Di),
            xa = [fe, Se, ir, ve],
            z.matchMedia ? (u.matchMedia = function(a) {
                var l = z.matchMedia(), f;
                for (f in a)
                    l.add(f, a[f]);
                return l
            }
            ,
            z.addEventListener("matchMediaInit", function() {
                return bo()
            }),
            z.addEventListener("matchMediaRevert", function() {
                return Ra()
            }),
            z.addEventListener("matchMedia", function() {
                Jr(0, 1),
                ci("matchMedia")
            }),
            z.matchMedia("(orientation: portrait)", function() {
                return bs(),
                bs
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            bs(),
            Ze(Se, "scroll", Di);
            var t = ve.style, i = t.borderTopStyle, n = z.core.Animation.prototype, s, o;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            t.borderTopStyle = "solid",
            s = Er(ve),
            Ue.m = Math.round(s.top + Ue.sc()) || 0,
            Et.m = Math.round(s.left + Et.sc()) || 0,
            i ? t.borderTopStyle = i : t.removeProperty("border-top-style"),
            Fn = setInterval(Zo, 250),
            z.delayedCall(.5, function() {
                return wn = 0
            }),
            Ze(Se, "touchcancel", cr),
            Ze(ve, "touchstart", cr),
            Sn(Ze, Se, "pointerdown,touchstart,mousedown", Go),
            Sn(Ze, Se, "pointerup,touchend,mouseup", Ko),
            Us = z.utils.checkPrefix("transform"),
            Xn.push(Us),
            gi = ct(),
            es = z.delayedCall(.2, Jr).pause(),
            mi = [Se, "visibilitychange", function() {
                var a = fe.innerWidth
                  , l = fe.innerHeight;
                Se.hidden ? (Xo = a,
                Uo = l) : (Xo !== a || Uo !== l) && Ki()
            }
            , Se, "DOMContentLoaded", Jr, fe, "load", Jr, fe, "resize", Ki],
            Tn(Ze),
            se.forEach(function(a) {
                return a.enable(0, 1)
            }),
            o = 0; o < ae.length; o += 3)
                An(Qe, ae[o], ae[o + 1]),
                An(Qe, ae[o], ae[o + 2])
        }
    }
    ,
    u.config = function(t) {
        "limitCallbacks"in t && (ys = !!t.limitCallbacks);
        var i = t.syncInterval;
        i && clearInterval(Fn) || (Fn = i) && setInterval(Zo, i),
        "ignoreMobileResize"in t && (Hs = u.isTouch === 1 && t.ignoreMobileResize),
        "autoRefreshEvents"in t && (Tn(Qe) || Tn(Ze, t.autoRefreshEvents || "none"),
        ba = (t.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    u.scrollerProxy = function(t, i) {
        var n = wt(t)
          , s = ae.indexOf(n)
          , o = li(n);
        ~s && ae.splice(s, o ? 6 : 2),
        i && (o ? Cr.unshift(fe, i, ve, i, ir, i) : Cr.unshift(n, i))
    }
    ,
    u.clearMatchMedia = function(t) {
        se.forEach(function(i) {
            return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0)
        })
    }
    ,
    u.isInViewport = function(t, i, n) {
        var s = (zt(t) ? wt(t) : t).getBoundingClientRect()
          , o = s[n ? ni : si] * i || 0;
        return n ? s.right - o > 0 && s.left + o < fe.innerWidth : s.bottom - o > 0 && s.top + o < fe.innerHeight
    }
    ,
    u.positionInViewport = function(t, i, n) {
        zt(t) && (t = wt(t));
        var s = t.getBoundingClientRect()
          , o = s[n ? ni : si]
          , a = i == null ? o / 2 : i in is ? is[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
        return n ? (s.left + a) / fe.innerWidth : (s.top + a) / fe.innerHeight
    }
    ,
    u.killAll = function(t) {
        if (se.slice(0).forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        t !== !0) {
            var i = fi.killAll || [];
            fi = {},
            i.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    u
}();
oe.version = "3.12.5";
oe.saveStyles = function(u) {
    return u ? gn(u).forEach(function(e) {
        if (e && e.style) {
            var r = kt.indexOf(e);
            r >= 0 && kt.splice(r, 5),
            kt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), z.core.getCache(e), qs())
        }
    }) : kt
}
;
oe.revert = function(u, e) {
    return bo(!u, e)
}
;
oe.create = function(u, e) {
    return new oe(u,e)
}
;
oe.refresh = function(u) {
    return u ? Ki() : (gi || oe.register()) && Jr(!0)
}
;
oe.update = function(u) {
    return ++ae.cache && wr(u === !0 ? 2 : 0)
}
;
oe.clearScrollMemory = La;
oe.maxScroll = function(u, e) {
    return Dr(u, e ? Et : Ue)
}
;
oe.getScrollFunc = function(u, e) {
    return $r(wt(u), e ? Et : Ue)
}
;
oe.getById = function(u) {
    return Ks[u]
}
;
oe.getAll = function() {
    return se.filter(function(u) {
        return u.vars.id !== "ScrollSmoother"
    })
}
;
oe.isScrolling = function() {
    return !!Kt
}
;
oe.snapDirectional = vo;
oe.addEventListener = function(u, e) {
    var r = fi[u] || (fi[u] = []);
    ~r.indexOf(e) || r.push(e)
}
;
oe.removeEventListener = function(u, e) {
    var r = fi[u]
      , t = r && r.indexOf(e);
    t >= 0 && r.splice(t, 1)
}
;
oe.batch = function(u, e) {
    var r = [], t = {}, i = e.interval || .016, n = e.batchMax || 1e9, s = function(l, f) {
        var p = []
          , h = []
          , d = z.delayedCall(i, function() {
            f(p, h),
            p = [],
            h = []
        }).pause();
        return function(_) {
            p.length || d.restart(!0),
            p.push(_.trigger),
            h.push(_),
            n <= p.length && d.progress(1)
        }
    }, o;
    for (o in e)
        t[o] = o.substr(0, 2) === "on" && Ft(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
    return Ft(n) && (n = n(),
    Ze(oe, "refresh", function() {
        return n = e.batchMax()
    })),
    gn(u).forEach(function(a) {
        var l = {};
        for (o in t)
            l[o] = t[o];
        l.trigger = a,
        r.push(oe.create(l))
    }),
    r
}
;
var nu = function(e, r, t, i) {
    return r > i ? e(i) : r < 0 && e(0),
    t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
}, Fs = function u(e, r) {
    r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (ze.isTouch ? " pinch-zoom" : "") : "none",
    e === ir && u(ve, r)
}, Rn = {
    auto: 1,
    scroll: 1
}, bf = function(e) {
    var r = e.event, t = e.target, i = e.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target, s = n._gsap || z.core.getCache(n), o = ct(), a;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
        for (; n && n !== ve && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Rn[(a = qt(n)).overflowY] || Rn[a.overflowX])); )
            n = n.parentNode;
        s._isScroll = n && n !== t && !li(n) && (Rn[(a = qt(n)).overflowY] || Rn[a.overflowX]),
        s._isScrollT = o
    }
    (s._isScroll || i === "x") && (r.stopPropagation(),
    r._gsapAllow = !0)
}, Ia = function(e, r, t, i) {
    return ze.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: i = i && bf,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return t && Ze(Se, ze.eventTypes[0], ou, !1, !0)
        },
        onDisable: function() {
            return Qe(Se, ze.eventTypes[0], ou, !0)
        }
    })
}, Ef = /(input|label|select|textarea)/i, su, ou = function(e) {
    var r = Ef.test(e.target.tagName);
    (r || su) && (e._gsapAllow = !0,
    su = r)
}, Ff = function(e) {
    jr(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var r = e, t = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, s = r.onRelease, o, a, l = wt(e.target) || ir, f = z.core.globals().ScrollSmoother, p = f && f.get(), h = Mr && (e.content && wt(e.content) || p && e.content !== !1 && !p.smooth() && p.content()), d = $r(l, Ue), _ = $r(l, Et), c = 1, D = (ze.isTouch && fe.visualViewport ? fe.visualViewport.scale * fe.visualViewport.width : fe.outerWidth) / fe.innerWidth, m = 0, b = Ft(i) ? function() {
        return i(o)
    }
    : function() {
        return i || 2.8
    }
    , E, C, F = Ia(l, e.type, !0, n), T = function() {
        return C = !1
    }, x = cr, P = cr, S = function() {
        a = Dr(l, Ue),
        P = nn(Mr ? 1 : 0, a),
        t && (x = nn(0, Dr(l, Et))),
        E = oi
    }, A = function() {
        h._gsap.y = qi(parseFloat(h._gsap.y) + d.offset) + "px",
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, W = function() {
        if (C) {
            requestAnimationFrame(T);
            var q = qi(o.deltaY / 2)
              , w = P(d.v - q);
            if (h && w !== d.v + d.offset) {
                d.offset = w - d.v;
                var g = qi((parseFloat(h && h._gsap.y) || 0) - d.offset);
                h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)",
                h._gsap.y = g + "px",
                d.cacheID = ae.cache,
                wr()
            }
            return !0
        }
        d.offset && A(),
        C = !0
    }, O, V, N, J, k = function() {
        S(),
        O.isActive() && O.vars.scrollY > a && (d() > a ? O.progress(1) && d(a) : O.resetTo("scrollY", a))
    };
    return h && z.set(h, {
        y: "+=0"
    }),
    e.ignoreCheck = function(L) {
        return Mr && L.type === "touchmove" && W() || c > 1.05 && L.type !== "touchstart" || o.isGesturing || L.touches && L.touches.length > 1
    }
    ,
    e.onPress = function() {
        C = !1;
        var L = c;
        c = qi((fe.visualViewport && fe.visualViewport.scale || 1) / D),
        O.pause(),
        L !== c && Fs(l, c > 1.01 ? !0 : t ? !1 : "x"),
        V = _(),
        N = d(),
        S(),
        E = oi
    }
    ,
    e.onRelease = e.onGestureStart = function(L, q) {
        if (d.offset && A(),
        !q)
            J.restart(!0);
        else {
            ae.cache++;
            var w = b(), g, re;
            t && (g = _(),
            re = g + w * .05 * -L.velocityX / .227,
            w *= nu(_, g, re, Dr(l, Et)),
            O.vars.scrollX = x(re)),
            g = d(),
            re = g + w * .05 * -L.velocityY / .227,
            w *= nu(d, g, re, Dr(l, Ue)),
            O.vars.scrollY = P(re),
            O.invalidate().duration(w).play(.01),
            (Mr && O.vars.scrollY >= a || g >= a - 1) && z.to({}, {
                onUpdate: k,
                duration: w
            })
        }
        s && s(L)
    }
    ,
    e.onWheel = function() {
        O._ts && O.pause(),
        ct() - m > 1e3 && (E = 0,
        m = ct())
    }
    ,
    e.onChange = function(L, q, w, g, re) {
        if (oi !== E && S(),
        q && t && _(x(g[2] === q ? V + (L.startX - L.x) : _() + q - g[1])),
        w) {
            d.offset && A();
            var me = re[2] === w
              , We = me ? N + L.startY - L.y : d() + w - re[1]
              , ie = P(We);
            me && We !== ie && (N += ie - We),
            d(ie)
        }
        (w || q) && wr()
    }
    ,
    e.onEnable = function() {
        Fs(l, t ? !1 : "x"),
        oe.addEventListener("refresh", k),
        Ze(fe, "resize", k),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = _.smooth = !1),
        F.enable()
    }
    ,
    e.onDisable = function() {
        Fs(l, !0),
        Qe(fe, "resize", k),
        oe.removeEventListener("refresh", k),
        F.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new ze(e),
    o.iOS = Mr,
    Mr && !d() && d(1),
    Mr && z.ticker.add(cr),
    J = o._dc,
    O = z.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: za(d, d(), function() {
                return O.pause()
            })
        },
        onUpdate: wr,
        onComplete: J.vars.onComplete
    }),
    o
};
oe.sort = function(u) {
    return se.sort(u || function(e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
oe.observe = function(u) {
    return new ze(u)
}
;
oe.normalizeScroll = function(u) {
    if (typeof u > "u")
        return yt;
    if (u === !0 && yt)
        return yt.enable();
    if (u === !1) {
        yt && yt.kill(),
        yt = u;
        return
    }
    var e = u instanceof ze ? u : Ff(u);
    return yt && yt.target === e.target && yt.kill(),
    li(e.target) && (yt = e),
    e
}
;
oe.core = {
    _getVelocityProp: Xs,
    _inputObserver: Ia,
    _scrollers: ae,
    _proxies: Cr,
    bridge: {
        ss: function() {
            Kt || ci("scrollStart"),
            Kt = ct()
        },
        ref: function() {
            return lt
        }
    }
};
Ta() && z.registerPlugin(oe);
function pr(u) {
    return Math.floor(Math.random() * u)
}
Vr.registerPlugin(oe);
document.addEventListener("DOMContentLoaded", () => {
    let u = 20;
    window.innerWidth < 1024 ? u = 15 : window.innerWidth < 640 && (u = 10);
    const e = document.querySelectorAll(".pixel-grid-container");
    e[0].getBoundingClientRect().width,
    e[0].getBoundingClientRect().height,
    e[0].getBoundingClientRect().width / u;
    const r = document.querySelectorAll("article")
      , t = n => {
        n.children[0].classList.add("text-white"),
        n.children[0].classList.remove("text-black"),
        n.children[1].classList.add("text-white"),
        n.children[1].classList.remove("text-black"),
        n.children[2].classList.remove("opacity-0"),
        n.children[2].classList.add("opacity-100")
    }
      , i = n => {
        n.children[0].classList.remove("text-white"),
        n.children[0].classList.add("text-black"),
        n.children[1].classList.remove("text-white"),
        n.children[1].classList.add("text-black"),
        n.children[2].classList.add("opacity-0"),
        n.children[2].classList.remove("opacity-100")
    }
    ;
    window.innerWidth < 1024 && r.forEach(n => {
        oe.create({
            trigger: n,
            start: "top 90%",
            end: "bottom 90%",
            markers: !1,
            onEnter: () => {
                t(n)
            }
            ,
            onLeaveBack: () => {
                i(n)
            }
            ,
            onLeave: () => {
                i(n)
            }
            ,
            onEnterBack: () => {
                t(n)
            }
        })
    }
    )
}
);
document.addEventListener("DOMContentLoaded", () => {
    let u = 20;
    window.innerWidth < 1024 ? u = 15 : window.innerWidth < 640 && (u = 10);
    const e = document.querySelectorAll(".pixel-grid-container")
      , r = e[0].getBoundingClientRect().width
      , t = e[0].getBoundingClientRect().height;
    let i = e[0].getBoundingClientRect().width / u;
    const n = Math.ceil(r / i)
      , s = Math.ceil(t / i)
      , o = n * s;
    let a = [];
    function l(f, p) {
        for (let h = 0; h < o; h++) {
            const d = document.createElement("div");
            d.classList.add("pixel-grid"),
            f.appendChild(d),
            d.style.width = i + "px",
            d.style.height = i + "px",
            a.push(d)
        }
    }
    window.innerWidth > 1024 && e.forEach(f => {
        f.addEventListener("mouseenter", () => {
            l(f),
            a.forEach( (p, h) => {
                let d = pr(15)
                  , _ = pr(11)
                  , c = pr(3)
                  , D = pr(5)
                  , m = pr(7);
                p.addEventListener("mouseover", () => {
                    h - o / s + d > 0 && h - o / s + d < a.length - 1 && a[h - o / s + d].classList.add("bg-e-blue"),
                    h - o / s + _ > 0 && h - o / s + _ < a.length - 1 && a[h - o / s + _].classList.add("opacity-30"),
                    h - 1 - c > 0 && h - 1 - c < a.length - 1 && a[h - 1 - c].classList.add("bg-e-blue"),
                    h - 1 - D > 0 && h - 1 - D < a.length - 1 && a[h - 1 - D].classList.add("opacity-30"),
                    p.classList.add("bg-e-blue"),
                    h + 1 + D > 0 && h + 1 + D < a.length - 1 && a[h + 1 + D].classList.add("bg-e-blue"),
                    h + 1 + m > 0 && h + 1 + m < a.length - 1 && a[h + 1 + m].classList.add("opacity-30"),
                    h + o / s - d > 0 && h + o / s - d < a.length - 1 && a[h + o / s - d].classList.add("bg-e-blue"),
                    h + o / s - _ > 0 && h + o / s - _ < a.length - 1 && a[h + o / s - _].classList.add("opacity-30")
                }
                ),
                p.addEventListener("mouseover", () => {
                    setTimeout( () => {
                        h - o / s + d > 0 && h - o / s + d < a.length - 1 && a[h - o / s + d].classList.remove("bg-e-blue"),
                        h - o / s + _ > 0 && h - o / s + _ < a.length - 1 && a[h - o / s + _].classList.remove("opacity-30"),
                        h - 1 - c > 0 && h - 1 - c < a.length - 1 && a[h - 1 - c].classList.remove("bg-e-blue"),
                        h - 1 - D > 0 && h - 1 - D < a.length - 1 && a[h - 1 - D].classList.remove("opacity-30"),
                        p.classList.remove("bg-e-blue"),
                        h + 1 + D > 0 && h + 1 + D < a.length - 1 && a[h + 1 + D].classList.remove("bg-e-blue"),
                        h + 1 + m > 0 && h + 1 + m < a.length - 1 && a[h + 1 + m].classList.remove("opacity-30"),
                        h + o / s - d > 0 && h + o / s - d < a.length - 1 && a[h + o / s - d].classList.remove("bg-e-blue"),
                        h + o / s - _ > 0 && h + o / s - _ < a.length - 1 && a[h + o / s - _].classList.remove("opacity-30")
                    }
                    , 300)
                }
                )
            }
            )
        }
        ),
        f.addEventListener("mouseleave", () => {
            a.forEach(p => {
                p.remove()
            }
            )
        }
        )
    }
    )
}
);
document.addEventListener("DOMContentLoaded", () => {
    const u = document.getElementById("menu");
    let e = !1
      , r = 30;
    window.innerWidth < 1024 ? r = 25 : window.innerWidth < 640 && (r = 20);
    const t = document.querySelector("#menu-container")
      , i = t.getBoundingClientRect().width
      , n = t.getBoundingClientRect().height;
    let s = t.getBoundingClientRect().width / r;
    const o = Math.ceil(i / s)
      , a = Math.ceil(n / s)
      , l = o * a;
    let f = [];
    u.addEventListener("click", () => {
        if (e = !e,
        e) {
            let d = function(_, c) {
                for (let D = 0; D < l; D++) {
                    const m = document.createElement("div");
                    m.classList.add("pixel-menu"),
                    _.appendChild(m),
                    m.style.width = s + "px",
                    m.style.height = s + "px",
                    f.push(m)
                }
            };
            var h = d;
            d(t),
            f.forEach( (_, c) => {
                let D = pr(15)
                  , m = pr(11)
                  , b = pr(3)
                  , E = pr(5)
                  , C = pr(7);
                _.addEventListener("mouseover", () => {
                    c - l / a + D > 0 && c - l / a + D < f.length - 1 && f[c - l / a + D].classList.add("bg-e-blue"),
                    c - l / a + m > 0 && c - l / a + m < f.length - 1 && f[c - l / a + m].classList.add("opacity-30"),
                    c - 1 - b > 0 && c - 1 - b < f.length - 1 && f[c - 1 - b].classList.add("bg-e-blue"),
                    c - 1 - E > 0 && c - 1 - E < f.length - 1 && f[c - 1 - E].classList.add("opacity-30"),
                    _.classList.add("bg-e-blue"),
                    c + 1 + E > 0 && c + 1 + E < f.length - 1 && f[c + 1 + E].classList.add("bg-e-blue"),
                    c + 1 + C > 0 && c + 1 + C < f.length - 1 && f[c + 1 + C].classList.add("opacity-30"),
                    c + l / a - D > 0 && c + l / a - D < f.length - 1 && f[c + l / a - D].classList.add("bg-e-blue"),
                    c + l / a - m > 0 && c + l / a - m < f.length - 1 && f[c + l / a - m].classList.add("opacity-30")
                }
                ),
                _.addEventListener("mouseover", () => {
                    setTimeout( () => {
                        c - l / a + D > 0 && c - l / a + D < f.length - 1 && f[c - l / a + D].classList.remove("bg-e-blue"),
                        c - l / a + m > 0 && c - l / a + m < f.length - 1 && f[c - l / a + m].classList.remove("opacity-30"),
                        c - 1 - b > 0 && c - 1 - b < f.length - 1 && f[c - 1 - b].classList.remove("bg-e-blue"),
                        c - 1 - E > 0 && c - 1 - E < f.length - 1 && f[c - 1 - E].classList.remove("opacity-30"),
                        _.classList.remove("bg-e-blue"),
                        c + 1 + E > 0 && c + 1 + E < f.length - 1 && f[c + 1 + E].classList.remove("bg-e-blue"),
                        c + 1 + C > 0 && c + 1 + C < f.length - 1 && f[c + 1 + C].classList.remove("opacity-30"),
                        c + l / a - D > 0 && c + l / a - D < f.length - 1 && f[c + l / a - D].classList.remove("bg-e-blue"),
                        c + l / a - m > 0 && c + l / a - m < f.length - 1 && f[c + l / a - m].classList.remove("opacity-30")
                    }
                    , 300)
                }
                )
            }
            )
        } else
            f.forEach(d => {
                setTimeout( () => {
                    d.remove()
                }
                , 500)
            }
            )
    }
    ),
    document.getElementById("surimpression").addEventListener("click", () => {
        e = !1,
        f.forEach(h => {
            setTimeout( () => {
                h.remove()
            }
            , 1e3)
        }
        )
    }
    )
}
);
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var wf = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Na(u) {
    var e = u.nodeType
      , r = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof u.textContent == "string")
            return u.textContent;
        for (u = u.firstChild; u; u = u.nextSibling)
            r += Na(u)
    } else if (e === 3 || e === 4)
        return u.nodeValue;
    return r
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var vi, Zs, Ya, Vi, Wa, as, Tf = /(?:\r|\n|\t\t)/g, Sf = /(?:\s\s+)/g, Af = " ", Va = function(e) {
    vi = document,
    Zs = window,
    Vi = Vi || e || Zs.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    Vi && (as = Vi.utils.toArray,
    Wa = Vi.core.context || function() {}
    ,
    Ya = 1)
}, $a = function(e) {
    return Zs.getComputedStyle(e)
}, Eo = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, Pf = function(e, r) {
    for (var t = r.length, i; --t > -1; )
        if (i = r[t],
        e.substr(0, i.length) === i)
            return i.length
}, Mf = " style='position:relative;display:inline-block;'", uu = function(e, r) {
    e === void 0 && (e = "");
    var t = ~e.indexOf("++")
      , i = 1;
    return t && (e = e.split("++").join("")),
    function() {
        return "<" + r + Mf + (e ? " class='" + e + (t ? i++ : "") + "'>" : ">")
    }
}, Xa = function u(e, r, t) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            u(e, r, t);
    else
        (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(r).join(t))
}, ws = function(e, r) {
    for (var t = r.length; --t > -1; )
        e.push(r[t])
}, au = function(e, r, t) {
    for (var i; e && e !== r; ) {
        if (i = e._next || e.nextSibling,
        i)
            return i.textContent.charAt(0) === t;
        e = e.parentNode || e._parent
    }
}, Of = function u(e) {
    var r = as(e.childNodes), t = r.length, i, n;
    for (i = 0; i < t; i++)
        n = r[i],
        n._isSplit ? u(n) : i && n.previousSibling && n.previousSibling.nodeType === 3 ? (n.previousSibling.nodeValue += n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue,
        e.removeChild(n)) : n.nodeType !== 3 && (e.insertBefore(n.firstChild, n),
        e.removeChild(n))
}, ar = function(e, r) {
    return parseFloat(r[e]) || 0
}, Bf = function(e, r, t, i, n, s, o) {
    var a = $a(e), l = ar("paddingLeft", a), f = -999, p = ar("borderBottomWidth", a) + ar("borderTopWidth", a), h = ar("borderLeftWidth", a) + ar("borderRightWidth", a), d = ar("paddingTop", a) + ar("paddingBottom", a), _ = ar("paddingLeft", a) + ar("paddingRight", a), c = ar("fontSize", a) * (r.lineThreshold || .2), D = a.textAlign, m = [], b = [], E = [], C = r.wordDelimiter || " ", F = r.tag ? r.tag : r.span ? "span" : "div", T = r.type || r.split || "chars,words,lines", x = n && ~T.indexOf("lines") ? [] : null, P = ~T.indexOf("words"), S = ~T.indexOf("chars"), A = Eo(r), W = r.linesClass, O = ~(W || "").indexOf("++"), V = [], N = a.display === "flex", J = e.style.display, k, L, q, w, g, re, me, We, ie, j, Be, he;
    for (O && (W = W.split("++").join("")),
    N && (e.style.display = "block"),
    L = e.getElementsByTagName("*"),
    q = L.length,
    g = [],
    k = 0; k < q; k++)
        g[k] = L[k];
    if (x || A)
        for (k = 0; k < q; k++)
            w = g[k],
            re = w.parentNode === e,
            (re || A || S && !P) && (he = w.offsetTop,
            x && re && Math.abs(he - f) > c && (w.nodeName !== "BR" || k === 0) && (me = [],
            x.push(me),
            f = he),
            A && (w._x = w.offsetLeft,
            w._y = he,
            w._w = w.offsetWidth,
            w._h = w.offsetHeight),
            x && ((w._isSplit && re || !S && re || P && re || !P && w.parentNode.parentNode === e && !w.parentNode._isSplit) && (me.push(w),
            w._x -= l,
            au(w, e, C) && (w._wordEnd = !0)),
            w.nodeName === "BR" && (w.nextSibling && w.nextSibling.nodeName === "BR" || k === 0) && x.push([])));
    for (k = 0; k < q; k++) {
        if (w = g[k],
        re = w.parentNode === e,
        w.nodeName === "BR") {
            x || A ? (w.parentNode && w.parentNode.removeChild(w),
            g.splice(k--, 1),
            q--) : P || e.appendChild(w);
            continue
        }
        if (A && (ie = w.style,
        !P && !re && (w._x += w.parentNode._x,
        w._y += w.parentNode._y),
        ie.left = w._x + "px",
        ie.top = w._y + "px",
        ie.position = "absolute",
        ie.display = "block",
        ie.width = w._w + 1 + "px",
        ie.height = w._h + "px"),
        !P && S)
            if (w._isSplit)
                for (w._next = L = w.nextSibling,
                w.parentNode.appendChild(w); L && L.nodeType === 3 && L.textContent === " "; )
                    w._next = L.nextSibling,
                    w.parentNode.appendChild(L),
                    L = L.nextSibling;
            else
                w.parentNode._isSplit ? (w._parent = w.parentNode,
                !w.previousSibling && w.firstChild && (w.firstChild._isFirst = !0),
                w.nextSibling && w.nextSibling.textContent === " " && !w.nextSibling.nextSibling && V.push(w.nextSibling),
                w._next = w.nextSibling && w.nextSibling._isFirst ? null : w.nextSibling,
                w.parentNode.removeChild(w),
                g.splice(k--, 1),
                q--) : re || (he = !w.nextSibling && au(w.parentNode, e, C),
                w.parentNode._parent && w.parentNode._parent.appendChild(w),
                he && w.parentNode.appendChild(vi.createTextNode(" ")),
                F === "span" && (w.style.display = "inline"),
                m.push(w));
        else
            w.parentNode._isSplit && !w._isSplit && w.innerHTML !== "" ? b.push(w) : S && !w._isSplit && (F === "span" && (w.style.display = "inline"),
            m.push(w))
    }
    for (k = V.length; --k > -1; )
        V[k].parentNode.removeChild(V[k]);
    if (x) {
        for (A && (j = vi.createElement(F),
        e.appendChild(j),
        Be = j.offsetWidth + "px",
        he = j.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(j)),
        ie = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (We = C === " " && (!A || !P && !S),
        k = 0; k < x.length; k++) {
            for (me = x[k],
            j = vi.createElement(F),
            j.style.cssText = "display:block;text-align:" + D + ";position:" + (A ? "absolute;" : "relative;"),
            W && (j.className = W + (O ? k + 1 : "")),
            E.push(j),
            q = me.length,
            L = 0; L < q; L++)
                me[L].nodeName !== "BR" && (w = me[L],
                j.appendChild(w),
                We && w._wordEnd && j.appendChild(vi.createTextNode(" ")),
                A && (L === 0 && (j.style.top = w._y + "px",
                j.style.left = l + he + "px"),
                w.style.top = "0px",
                he && (w.style.left = w._x - he + "px")));
            q === 0 ? j.innerHTML = "&nbsp;" : !P && !S && (Of(j),
            Xa(j, " ", " ")),
            A && (j.style.width = Be,
            j.style.height = w._h + "px"),
            e.appendChild(j)
        }
        e.style.cssText = ie
    }
    A && (o > e.clientHeight && (e.style.height = o - d + "px",
    e.clientHeight < o && (e.style.height = o + p + "px")),
    s > e.clientWidth && (e.style.width = s - _ + "px",
    e.clientWidth < s && (e.style.width = s + h + "px"))),
    N && (J ? e.style.display = J : e.style.removeProperty("display")),
    ws(t, m),
    P && ws(i, b),
    ws(n, E)
}, Rf = function(e, r, t, i) {
    var n = r.tag ? r.tag : r.span ? "span" : "div", s = r.type || r.split || "chars,words,lines", o = ~s.indexOf("chars"), a = Eo(r), l = r.wordDelimiter || " ", f = function(A) {
        return A === l || A === Af && l === " "
    }, p = l !== " " ? "" : a ? "&#173; " : " ", h = "</" + n + ">", d = 1, _ = r.specialChars ? typeof r.specialChars == "function" ? r.specialChars : Pf : null, c, D, m, b, E, C, F, T, x = vi.createElement("div"), P = e.parentNode;
    for (P.insertBefore(x, e),
    x.textContent = e.nodeValue,
    P.removeChild(e),
    e = x,
    c = Na(e),
    F = c.indexOf("<") !== -1,
    r.reduceWhiteSpace !== !1 && (c = c.replace(Sf, " ").replace(Tf, "")),
    F && (c = c.split("<").join("{{LT}}")),
    E = c.length,
    D = (c.charAt(0) === " " ? p : "") + t(),
    m = 0; m < E; m++)
        if (C = c.charAt(m),
        _ && (T = _(c.substr(m), r.specialChars)))
            C = c.substr(m, T || 1),
            D += o && C !== " " ? i() + C + "</" + n + ">" : C,
            m += T - 1;
        else if (f(C) && !f(c.charAt(m - 1)) && m) {
            for (D += d ? h : "",
            d = 0; f(c.charAt(m + 1)); )
                D += p,
                m++;
            m === E - 1 ? D += p : c.charAt(m + 1) !== ")" && (D += p + t(),
            d = 1)
        } else
            C === "{" && c.substr(m, 6) === "{{LT}}" ? (D += o ? i() + "{{LT}}</" + n + ">" : "{{LT}}",
            m += 5) : C.charCodeAt(0) >= 55296 && C.charCodeAt(0) <= 56319 || c.charCodeAt(m + 1) >= 65024 && c.charCodeAt(m + 1) <= 65039 ? (b = ((c.substr(m, 12).split(wf) || [])[1] || "").length || 2,
            D += o && C !== " " ? i() + c.substr(m, b) + "</" + n + ">" : c.substr(m, b),
            m += b - 1) : D += o && C !== " " ? i() + C + "</" + n + ">" : C;
    e.outerHTML = D + (d ? h : ""),
    F && Xa(P, "{{LT}}", "<")
}, Lf = function u(e, r, t, i) {
    var n = as(e.childNodes), s = n.length, o = Eo(r), a, l;
    if (e.nodeType !== 3 || s > 1) {
        for (r.absolute = !1,
        a = 0; a < s; a++)
            l = n[a],
            l._next = l._isFirst = l._parent = l._wordEnd = null,
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (o && l.nodeType !== 3 && $a(l).display === "inline" && (l.style.display = "inline-block",
            l.style.position = "relative"),
            l._isSplit = !0,
            u(l, r, t, i));
        r.absolute = o,
        e._isSplit = !0;
        return
    }
    Rf(e, r, t, i)
}, Fo = function() {
    function u(r, t) {
        Ya || Va(),
        this.elements = as(r),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = t || {},
        Wa(this),
        this.split(t)
    }
    var e = u.prototype;
    return e.split = function(t) {
        this.isSplit && this.revert(),
        this.vars = t = t || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var i = this.elements.length, n = t.tag ? t.tag : t.span ? "span" : "div", s = uu(t.wordsClass, n), o = uu(t.charsClass, n), a, l, f; --i > -1; )
            f = this.elements[i],
            this._originals[i] = {
                html: f.innerHTML,
                style: f.getAttribute("style")
            },
            a = f.clientHeight,
            l = f.clientWidth,
            Lf(f, t, s, o),
            Bf(f, t, this.chars, this.words, this.lines, l, a);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var t = this._originals;
        if (!t)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(i, n) {
            i.innerHTML = t[n].html,
            i.setAttribute("style", t[n].style)
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    u.create = function(t, i) {
        return new u(t,i)
    }
    ,
    u
}();
Fo.version = "3.12.5";
Fo.register = Va;
Vr.registerPlugin(Fo);
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".line").forEach(e => {
        Vr.fromTo(e, {
            y: e.getBoundingClientRect().height * 2,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power4.inOut"
        })
    }
    )
}
);
document.addEventListener("DOMContentLoaded", () => {
    const u = document.getElementById("menu")
      , e = document.querySelector("#menu :nth-child(1)")
      , r = document.querySelector("#menu :nth-child(2)");
    let t = !1;
    const i = document.getElementById("menu-container");
    u.addEventListener("click", () => {
        t = !t,
        p(e, r, t, i)
    }
    );
    const n = document.getElementById("tickets")
      , s = document.querySelector("#tickets :nth-child(1)")
      , o = document.querySelector("#tickets :nth-child(2)");
    let a = !1;
    const l = document.getElementById("tickets-container");
    n.addEventListener("click", () => {
        a = !a,
        p(s, o, a, l)
    }
    ),
    document.getElementById("surimpression").addEventListener("click", () => {
        t = !1,
        a = !1,
        setTimeout( () => {
            p(e, r, t, i)
        }
        , 300),
        p(s, o, a, l)
    }
    );
    function p(h, d, _, c) {
        _ === !0 ? (h.classList.remove("-translate-x-8"),
        h.classList.remove("group-hover:translate-x-0"),
        h.classList.add("translate-x-full"),
        d.classList.add("-translate-x-8"),
        d.classList.add("group-hover:translate-x-0"),
        d.classList.remove("-translate-x-full"),
        c.classList.remove("translate-x-full")) : (h.classList.add("-translate-x-8"),
        h.classList.add("group-hover:translate-x-0"),
        h.classList.remove("translate-x-full"),
        d.classList.remove("-translate-x-8"),
        d.classList.remove("group-hover:translate-x-0"),
        d.classList.add("-translate-x-full"),
        c.classList.add("translate-x-full"))
    }
}
);
document.addEventListener("DOMContentLoaded", () => {
    const u = document.getElementById("menu-mobile")
      , e = document.querySelector("#menu-mobile :nth-child(1)")
      , r = document.querySelector("#menu-mobile :nth-child(2)")
      , t = document.getElementById("menu-container-mobile");
    let i = !1;
    u.addEventListener("click", () => {
        i = !i,
        p(e, r, i, t)
    }
    );
    const n = document.getElementById("tickets-mobile")
      , s = document.querySelector("#tickets-mobile :nth-child(1)")
      , o = document.querySelector("#tickets-mobile :nth-child(2)")
      , a = document.getElementById("tickets-container-mobile");
    let l = !1;
    n.addEventListener("click", () => {
        l = !l,
        p(s, o, l, a)
    }
    ),
    document.getElementById("surimpression-mobile").addEventListener("click", () => {
        i = !1,
        l = !1,
        setTimeout( () => {
            p(e, r, i, t)
        }
        , 300),
        p(s, o, l, a),
        window.scrollTo(0, 0)
    }
    );
    function p(h, d, _, c) {
        _ === !0 ? (h.classList.remove("translate-y-[0.8rem]"),
        h.classList.add("translate-y-full"),
        d.classList.add("translate-y-[0.8rem]"),
        d.classList.remove("translate-y-full"),
        c.classList.remove("-translate-y-full")) : (h.classList.add("translate-y-[0.8rem]"),
        h.classList.remove("translate-y-full"),
        d.classList.remove("translate-y-[0.8rem]"),
        d.classList.add("translate-y-full"),
        c.classList.add("-translate-y-full"))
    }
}
);
function kf(u, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(u, t.key, t)
    }
}
function zf(u, e, r) {
    return kf(u.prototype, e),
    u
}
/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var De, Ln, ft, bi, ji, lr, Qr, lu, te, hr, kn, fu, cu, hu, du, Ua = function() {
    return typeof window < "u"
}, Ha = function() {
    return De || Ua() && (De = window.gsap) && De.registerPlugin && De
}, If = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Pr = function(e) {
    return te.maxScroll(e || ft)
}, Nf = function(e, r) {
    var t = e.parentNode || ji, i = e.getBoundingClientRect(), n = t.getBoundingClientRect(), s = n.top - i.top, o = n.bottom - i.bottom, a = (Math.abs(s) > Math.abs(o) ? s : o) / (1 - r), l = -a * r, f, p;
    return a > 0 && (f = n.height / (ft.innerHeight + n.height),
    p = f === .5 ? n.height * 2 : Math.min(n.height, Math.abs(-a * f / (2 * f - 1))) * 2 * (r || 1),
    l += r ? -p * r : -p / 2,
    a += p),
    {
        change: a,
        offset: l
    }
}, Yf = function(e) {
    var r = bi.querySelector(".ScrollSmoother-wrapper");
    return r || (r = bi.createElement("div"),
    r.classList.add("ScrollSmoother-wrapper"),
    e.parentNode.insertBefore(r, e),
    r.appendChild(e)),
    r
}, hi = function() {
    function u(e) {
        var r = this;
        Ln || u.register(De) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        e = this.vars = e || {},
        hr && hr.kill(),
        hr = this,
        hu(this);
        var t = e, i = t.smoothTouch, n = t.onUpdate, s = t.onStop, o = t.smooth, a = t.onFocusIn, l = t.normalizeScroll, f = t.wholePixels, p, h, d, _, c, D, m, b, E, C, F, T, x, P, S = this, A = e.effectsPrefix || "", W = te.getScrollFunc(ft), O = te.isTouch === 1 ? i === !0 ? .8 : parseFloat(i) || 0 : o === 0 || o === !1 ? 0 : parseFloat(o) || .8, V = O && +e.speed || 1, N = 0, J = 0, k = 1, L = fu(0), q = function() {
            return L.update(-N)
        }, w = {
            y: 0
        }, g = function() {
            return p.style.overflow = "visible"
        }, re, me = function(y) {
            y.update();
            var M = y.getTween();
            M && (M.pause(),
            M._time = M._dur,
            M._tTime = M._tDur),
            re = !1,
            y.animation.progress(y.progress, !0)
        }, We = function(y, M) {
            (y !== N && !C || M) && (f && (y = Math.round(y)),
            O && (p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)",
            p._gsap.y = y + "px"),
            J = y - N,
            N = y,
            te.isUpdating || u.isRefreshing || te.update())
        }, ie = function(y) {
            return arguments.length ? (y < 0 && (y = 0),
            w.y = -y,
            re = !0,
            C ? N = -y : We(-y),
            te.isRefreshing ? _.update() : W(y / V),
            this) : -N
        }, j = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
            if (!te.isRefreshing) {
                var B = Pr(h) * V;
                B < -N && ie(B),
                du.restart(!0)
            }
        }
        ), Be, he = function(y) {
            h.scrollTop = 0,
            !(y.target.contains && y.target.contains(h) || a && a(r, y) === !1) && (te.isInViewport(y.target) || y.target === Be || r.scrollTo(y.target, !1, "center center"),
            Be = y.target)
        }, He = function(y, M) {
            if (y < M.start)
                return y;
            var Y = isNaN(M.ratio) ? 1 : M.ratio
              , U = M.end - M.start
              , Q = y - M.start
              , ne = M.offset || 0
              , Re = M.pins || []
              , ee = Re.offset || 0
              , xe = M._startClamp && M.start <= 0 || M.pins && M.pins.offset ? 0 : M._endClamp && M.end === Pr() ? 1 : .5;
            return Re.forEach(function(pe) {
                U -= pe.distance,
                pe.nativeStart <= y && (Q -= pe.distance)
            }),
            ee && (Q *= (U - ee / Y) / U),
            y + (Q - ne * xe) / Y - Q
        }, qe = function B(y, M, Y) {
            Y || (y.pins.length = y.pins.offset = 0);
            var U = y.pins, Q = y.markers, ne, Re, ee, xe, pe, ue, Ve, I;
            for (Ve = 0; Ve < M.length; Ve++)
                if (I = M[Ve],
                y.trigger && I.trigger && y !== I && (I.trigger === y.trigger || I.pinnedContainer === y.trigger || y.trigger.contains(I.trigger)) && (pe = I._startNative || I._startClamp || I.start,
                ue = I._endNative || I._endClamp || I.end,
                ee = He(pe, y),
                xe = I.pin && ue > 0 ? ee + (ue - pe) : He(ue, y),
                I.setPositions(ee, xe, !0, (I._startClamp ? Math.max(0, ee) : ee) - pe),
                I.markerStart && Q.push(De.quickSetter([I.markerStart, I.markerEnd], "y", "px")),
                I.pin && I.end > 0 && !Y)) {
                    if (ne = I.end - I.start,
                    Re = y._startClamp && I.start < 0,
                    Re) {
                        if (y.start > 0) {
                            y.setPositions(0, y.end + (y._startNative - y.start), !0),
                            B(y, M);
                            return
                        }
                        ne += I.start,
                        U.offset = -I.start
                    }
                    U.push({
                        start: I.start,
                        nativeStart: pe,
                        end: I.end,
                        distance: ne,
                        trig: I
                    }),
                    y.setPositions(y.start, y.end + (Re ? -I.start : ne), !0)
                }
        }, Qt = function(y, M) {
            c.forEach(function(Y) {
                return qe(Y, y, M)
            })
        }, Ge = function() {
            g(),
            requestAnimationFrame(g),
            c && (te.getAll().forEach(function(y) {
                y._startNative = y.start,
                y._endNative = y.end
            }),
            c.forEach(function(y) {
                var M = y._startClamp || y.start
                  , Y = y.autoSpeed ? Math.min(Pr(), y.end) : M + Math.abs((y.end - M) / y.ratio)
                  , U = Y - y.end;
                if (M -= U / 2,
                Y -= U / 2,
                M > Y) {
                    var Q = M;
                    M = Y,
                    Y = Q
                }
                y._startClamp && M < 0 ? (Y = y.ratio < 0 ? Pr() : y.end / y.ratio,
                U = Y - y.end,
                M = 0) : (y.ratio < 0 || y._endClamp && Y >= Pr()) && (Y = Pr(),
                M = y.ratio < 0 || y.ratio > 1 ? 0 : Y - (Y - y.start) / y.ratio,
                U = (Y - M) * y.ratio - (y.end - y.start)),
                y.offset = U || 1e-4,
                y.pins.length = y.pins.offset = 0,
                y.setPositions(M, Y, !0)
            }),
            Qt(te.sort())),
            L.reset()
        }, Dt = function() {
            return te.addEventListener("refresh", Ge)
        }, de = function() {
            return c && c.forEach(function(y) {
                return y.vars.onRefresh(y)
            })
        }, we = function() {
            return c && c.forEach(function(y) {
                return y.vars.onRefreshInit(y)
            }),
            de
        }, tt = function(y, M, Y, U) {
            return function() {
                var Q = typeof M == "function" ? M(Y, U) : M;
                Q || Q === 0 || (Q = U.getAttribute("data-" + A + y) || (y === "speed" ? 1 : 0)),
                U.setAttribute("data-" + A + y, Q);
                var ne = (Q + "").substr(0, 6) === "clamp(";
                return {
                    clamp: ne,
                    value: ne ? Q.substr(6, Q.length - 7) : Q
                }
            }
        }, gt = function(y, M, Y, U, Q) {
            Q = (typeof Q == "function" ? Q(U, y) : Q) || 0;
            var ne = tt("speed", M, U, y), Re = tt("lag", Y, U, y), ee = De.getProperty(y, "y"), xe = y._gsap, pe, ue, Ve, I, Ar, Ot, Bt = [], xr = function() {
                M = ne(),
                Y = parseFloat(Re().value),
                pe = parseFloat(M.value) || 1,
                Ve = M.value === "auto",
                Ar = Ve || ue && ue._startClamp && ue.start <= 0 || Bt.offset ? 0 : ue && ue._endClamp && ue.end === Pr() ? 1 : .5,
                I && I.kill(),
                I = Y && De.to(y, {
                    ease: kn,
                    overwrite: !1,
                    y: "+=0",
                    duration: Y
                }),
                ue && (ue.ratio = pe,
                ue.autoSpeed = Ve)
            }, Xt = function() {
                xe.y = ee + "px",
                xe.renderTransform(1),
                xr()
            }, Zt = [], G = 0, nr = function(ge) {
                if (Ve) {
                    Xt();
                    var be = Nf(y, lu(0, 1, -ge.start / (ge.end - ge.start)));
                    G = be.change,
                    Ot = be.offset
                } else
                    Ot = Bt.offset || 0,
                    G = (ge.end - ge.start - Ot) * (1 - pe);
                Bt.forEach(function(Rt) {
                    return G -= Rt.distance * (1 - pe)
                }),
                ge.offset = G || .001,
                ge.vars.onUpdate(ge),
                I && I.progress(1)
            };
            return xr(),
            (pe !== 1 || Ve || I) && (ue = te.create({
                trigger: Ve ? y.parentNode : y,
                start: function() {
                    return M.clamp ? "clamp(top bottom+=" + Q + ")" : "top bottom+=" + Q
                },
                end: function() {
                    return M.value < 0 ? "max" : M.clamp ? "clamp(bottom top-=" + Q + ")" : "bottom top-=" + Q
                },
                scroller: h,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Xt,
                onRefresh: nr,
                onKill: function(ge) {
                    var be = c.indexOf(ge);
                    be >= 0 && c.splice(be, 1),
                    Xt()
                },
                onUpdate: function(ge) {
                    var be = ee + G * (ge.progress - Ar), Rt = Bt.length, Jt = 0, Ie, er, H;
                    if (ge.offset) {
                        if (Rt) {
                            for (er = -N,
                            H = ge.end; Rt--; ) {
                                if (Ie = Bt[Rt],
                                Ie.trig.isActive || er >= Ie.start && er <= Ie.end) {
                                    I && (Ie.trig.progress += Ie.trig.direction < 0 ? .001 : -.001,
                                    Ie.trig.update(0, 0, 1),
                                    I.resetTo("y", parseFloat(xe.y), -J, !0),
                                    k && I.progress(1));
                                    return
                                }
                                er > Ie.end && (Jt += Ie.distance),
                                H -= Ie.distance
                            }
                            be = ee + Jt + G * ((De.utils.clamp(ge.start, ge.end, er) - ge.start - Jt) / (H - ge.start) - Ar)
                        }
                        Zt.length && !Ve && Zt.forEach(function($) {
                            return $(be - Jt)
                        }),
                        be = If(be + Ot),
                        I ? (I.resetTo("y", be, -J, !0),
                        k && I.progress(1)) : (xe.y = be + "px",
                        xe.renderTransform(1))
                    }
                }
            }),
            nr(ue),
            De.core.getCache(ue.trigger).stRevert = we,
            ue.startY = ee,
            ue.pins = Bt,
            ue.markers = Zt,
            ue.ratio = pe,
            ue.autoSpeed = Ve,
            y.style.willChange = "transform"),
            ue
        };
        Dt(),
        te.addEventListener("killAll", Dt),
        De.delayedCall(.5, function() {
            return k = 0
        }),
        this.scrollTop = ie,
        this.scrollTo = function(B, y, M) {
            var Y = De.utils.clamp(0, Pr(), isNaN(B) ? r.offset(B, M, !!y && !C) : +B);
            y ? C ? De.to(r, {
                duration: O,
                scrollTop: Y,
                overwrite: "auto",
                ease: kn
            }) : W(Y) : ie(Y)
        }
        ,
        this.offset = function(B, y, M) {
            B = Qr(B)[0];
            var Y = B.style.cssText, U = te.create({
                trigger: B,
                start: y || "top top"
            }), Q;
            return c && (k ? te.refresh() : Qt([U], !0)),
            Q = U.start / (M ? V : 1),
            U.kill(!1),
            B.style.cssText = Y,
            De.core.getCache(B).uncache = 1,
            Q
        }
        ;
        function v() {
            return d = p.clientHeight,
            p.style.overflow = "visible",
            lr.style.height = ft.innerHeight + (d - ft.innerHeight) / V + "px",
            d - ft.innerHeight
        }
        this.content = function(B) {
            if (arguments.length) {
                var y = Qr(B || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || lr.children[0];
                return y !== p && (p = y,
                E = p.getAttribute("style") || "",
                j && j.observe(p),
                De.set(p, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                O || De.set(p, {
                    clearProps: "transform"
                })),
                this
            }
            return p
        }
        ,
        this.wrapper = function(B) {
            return arguments.length ? (h = Qr(B || "#smooth-wrapper")[0] || Yf(p),
            b = h.getAttribute("style") || "",
            v(),
            De.set(h, O ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : h
        }
        ,
        this.effects = function(B, y) {
            var M;
            if (c || (c = []),
            !B)
                return c.slice(0);
            B = Qr(B),
            B.forEach(function(pe) {
                for (var ue = c.length; ue--; )
                    c[ue].trigger === pe && c[ue].kill()
            }),
            y = y || {};
            var Y = y, U = Y.speed, Q = Y.lag, ne = Y.effectsPadding, Re = [], ee, xe;
            for (ee = 0; ee < B.length; ee++)
                xe = gt(B[ee], U, Q, ee, ne),
                xe && Re.push(xe);
            return (M = c).push.apply(M, Re),
            y.refresh !== !1 && te.refresh(),
            Re
        }
        ,
        this.sections = function(B, y) {
            var M;
            if (D || (D = []),
            !B)
                return D.slice(0);
            var Y = Qr(B).map(function(U) {
                return te.create({
                    trigger: U,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function(ne) {
                        U.style.opacity = ne.isActive ? "1" : "0",
                        U.style.pointerEvents = ne.isActive ? "all" : "none"
                    }
                })
            });
            return y && y.add ? (M = D).push.apply(M, Y) : D = Y.slice(0),
            Y
        }
        ,
        this.content(e.content),
        this.wrapper(e.wrapper),
        this.render = function(B) {
            return We(B || B === 0 ? B : N)
        }
        ,
        this.getVelocity = function() {
            return L.getVelocity(-N)
        }
        ,
        te.scrollerProxy(h, {
            scrollTop: ie,
            scrollHeight: function() {
                return v() && lr.scrollHeight
            },
            fixedMarkers: e.fixedMarkers !== !1 && !!O,
            content: p,
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: ft.innerWidth,
                    height: ft.innerHeight
                }
            }
        }),
        te.defaults({
            scroller: h
        });
        var st = te.getAll().filter(function(B) {
            return B.scroller === ft || B.scroller === h
        });
        st.forEach(function(B) {
            return B.revert(!0, !0)
        }),
        _ = te.create({
            animation: De.fromTo(w, {
                y: function() {
                    return P = 0,
                    0
                }
            }, {
                y: function() {
                    return P = 1,
                    -v()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    if (P) {
                        var y = re;
                        y && (me(_),
                        w.y = N),
                        We(w.y, y),
                        q(),
                        n && !C && n(S)
                    }
                }
            }),
            onRefreshInit: function(y) {
                if (!u.isRefreshing) {
                    if (u.isRefreshing = !0,
                    c) {
                        var M = te.getAll().filter(function(U) {
                            return !!U.pin
                        });
                        c.forEach(function(U) {
                            U.vars.pinnedContainer || M.forEach(function(Q) {
                                if (Q.pin.contains(U.trigger)) {
                                    var ne = U.vars;
                                    ne.pinnedContainer = Q.pin,
                                    U.vars = null,
                                    U.init(ne, U.animation)
                                }
                            })
                        })
                    }
                    var Y = y.getTween();
                    x = Y && Y._end > Y._dp._time,
                    T = N,
                    w.y = 0,
                    O && (te.isTouch === 1 && (h.style.position = "absolute"),
                    h.scrollTop = 0,
                    te.isTouch === 1 && (h.style.position = "fixed"))
                }
            },
            onRefresh: function(y) {
                y.animation.invalidate(),
                y.setPositions(y.start, v() / V),
                x || me(y),
                w.y = -W() * V,
                We(w.y),
                k || (x && (re = !1),
                y.animation.progress(De.utils.clamp(0, 1, T / V / -y.end))),
                x && (y.progress -= .001,
                y.update()),
                u.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: ft,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function() {
                return v() / V
            },
            onScrubComplete: function() {
                L.reset(),
                s && s(r)
            },
            scrub: O || !0
        }),
        this.smooth = function(B) {
            return arguments.length && (O = B || 0,
            V = O && +e.speed || 1,
            _.scrubDuration(B)),
            _.getTween() ? _.getTween().duration() : 0
        }
        ,
        _.getTween() && (_.getTween().vars.ease = e.ease || kn),
        this.scrollTrigger = _,
        e.effects && this.effects(e.effects === !0 ? "[data-" + A + "speed], [data-" + A + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding,
            refresh: !1
        }),
        e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections),
        st.forEach(function(B) {
            B.vars.scroller = h,
            B.revert(!1, !0),
            B.init(B.vars, B.animation)
        }),
        this.paused = function(B, y) {
            return arguments.length ? (!!C !== B && (B ? (_.getTween() && _.getTween().pause(),
            W(-N / V),
            L.reset(),
            F = te.normalizeScroll(),
            F && F.disable(),
            C = te.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function() {
                    return ie(-N)
                }
            }),
            C.nested = cu(ji, "wheel,touch,scroll", !0, y !== !1)) : (C.nested.kill(),
            C.kill(),
            C = 0,
            F && F.enable(),
            _.progress = (-N / V - _.start) / (_.end - _.start),
            me(_))),
            this) : !!C
        }
        ,
        this.kill = this.revert = function() {
            r.paused(!1),
            me(_),
            _.kill();
            for (var B = (c || []).concat(D || []), y = B.length; y--; )
                B[y].kill();
            te.scrollerProxy(h),
            te.removeEventListener("killAll", Dt),
            te.removeEventListener("refresh", Ge),
            h.style.cssText = b,
            p.style.cssText = E;
            var M = te.defaults({});
            M && M.scroller === h && te.defaults({
                scroller: ft
            }),
            r.normalizer && te.normalizeScroll(!1),
            clearInterval(m),
            hr = null,
            j && j.disconnect(),
            lr.style.removeProperty("height"),
            ft.removeEventListener("focusin", he)
        }
        ,
        this.refresh = function(B, y) {
            return _.refresh(B, y)
        }
        ,
        l && (this.normalizer = te.normalizeScroll(l === !0 ? {
            debounce: !0,
            content: !O && p
        } : l)),
        te.config(e),
        "overscrollBehavior"in ft.getComputedStyle(lr) && De.set([lr, ji], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in ft.getComputedStyle(lr) && De.set([lr, ji], {
            scrollBehavior: "auto"
        }),
        ft.addEventListener("focusin", he),
        m = setInterval(q, 250),
        bi.readyState === "loading" || requestAnimationFrame(function() {
            return te.refresh()
        })
    }
    return u.register = function(r) {
        return Ln || (De = r || Ha(),
        Ua() && window.document && (ft = window,
        bi = document,
        ji = bi.documentElement,
        lr = bi.body),
        De && (Qr = De.utils.toArray,
        lu = De.utils.clamp,
        kn = De.parseEase("expo"),
        hu = De.core.context || function() {}
        ,
        te = De.core.globals().ScrollTrigger,
        De.core.globals("ScrollSmoother", u),
        lr && te && (du = De.delayedCall(.2, function() {
            return te.isRefreshing || hr && hr.refresh()
        }).pause(),
        fu = te.core._getVelocityProp,
        cu = te.core._inputObserver,
        u.refresh = te.refresh,
        Ln = 1))),
        Ln
    }
    ,
    zf(u, [{
        key: "progress",
        get: function() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    u
}();
hi.version = "3.12.5";
hi.create = function(u) {
    return hr && u && hr.content() === Qr(u.content)[0] ? hr : new hi(u)
}
;
hi.get = function() {
    return hr
}
;
Ha() && De.registerPlugin(hi);
Vr.registerPlugin(oe, hi);
window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}
;
hi.create({
    smooth: 2,
    effects: !0,
    smoothTouch: .1
});
const pu = document.getElementById("pixel-container");
Vr.to(pu, {
    scrollTrigger: {
        trigger: pu,
        start: "top top",
        scrub: 1,
        pin: !0,
        pinSpacing: !1
    }
});
