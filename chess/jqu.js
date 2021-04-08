(() => {
    'use strict';
    var e = {
        "class": "className",
        contenteditable: "contentEditable",
        "for": "htmlFor",
        readonly: "readOnly",
        maxlength: "maxLength",
        tabindex: "tabIndex",
        colspan: "colSpan",
        rowspan: "rowSpan",
        usemap: "useMap"
    };

    function g(a, b) {
        try {
            return a(b)
        } catch (c) {
            return b
        }
    }
    var m = document,
        n = window,
        aa = m.documentElement,
        p = m.createElement.bind(m),
        r = Array.isArray,
        t = Array.prototype,
        ba = t.concat,
        u = t.filter,
        v = t.indexOf,
        w = t.map,
        ca = t.push,
        y = t.slice,
        A = t.some,
        da = t.splice,
        ea = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,
        fa = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,
        ha = /<.+>/,
        ia = /^\w+$/;

    function B(a, b) {
        return a && (C(b) || D(b)) ? fa.test(a) ? b.getElementsByClassName(a.slice(1)) : ia.test(a) ? b.getElementsByTagName(a) : b.querySelectorAll(a) : []
    }
    var E = function () {
            function a(a, c) {
                if (a) {
                    if (a instanceof E) return a;
                    var b = a;
                    if (F(a)) {
                        if (b = (c instanceof E ? c[0] : c) || m, b = ea.test(a) ? b.getElementById(a.slice(1)) : ha.test(a) ? G(a) : B(a, b), !b) return
                    } else if (H(a)) return this.ready(a);
                    if (b.nodeType || b === n) b = [b];
                    this.length = b.length;
                    a = 0;
                    for (c = this.length; a < c; a++) this[a] = b[a]
                }
            }
            a.prototype.init = function (b, c) {
                return new a(b, c)
            };
            return a
        }(),
        I = E.prototype,
        J = I.init;
    J.fn = J.prototype = I;
    I.length = 0;
    I.splice = da;
    "function" === typeof Symbol && (I[Symbol.iterator] = t[Symbol.iterator]);
    I.map = function (a) {
        return J(ba.apply([], w.call(this, function (b, c) {
            return a.call(b, c, b)
        })))
    };
    I.slice = function (a, b) {
        return J(y.call(this, a, b))
    };
    var ja = /-([a-z])/g;

    function K(a) {
        return a.replace(ja, function (a, c) {
            return c.toUpperCase()
        })
    }

    function L(a, b, c) {
        if (c)
            for (c = a.length; c-- && !1 !== b.call(a[c], c, a[c]););
        else {
            c = 0;
            for (var d = a.length; c < d && !1 !== b.call(a[c], c, a[c]); c++);
        }
        return a
    }
    J.each = L;
    I.each = function (a) {
        return L(this, a)
    };
    I.removeProp = function (a) {
        return this.each(function (b, c) {
            delete c[e[a] || a]
        })
    };
    J.guid = 1;

    function ka(a, b) {
        var c = a && (a.matches || a.webkitMatchesSelector || a.msMatchesSelector);
        return !!c && !!b && c.call(a, b)
    }

    function M(a) {
        return !!a && a === a.window
    }

    function C(a) {
        return !!a && 9 === a.nodeType
    }

    function D(a) {
        return !!a && 1 === a.nodeType
    }

    function H(a) {
        return "function" === typeof a
    }

    function F(a) {
        return "string" === typeof a
    }

    function la(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
    J.isWindow = M;
    J.isFunction = H;
    J.isNumeric = la;
    J.isArray = r;
    I.prop = function (a, b) {
        if (a) {
            if (F(a)) return a = e[a] || a, 2 > arguments.length ? this[0] && this[0][a] : this.each(function (c, h) {
                h[a] = b
            });
            for (var c in a) this.prop(c, a[c]);
            return this
        }
    };
    I.get = function (a) {
        if (void 0 === a) return y.call(this);
        a = Number(a);
        return this[0 > a ? a + this.length : a]
    };
    I.eq = function (a) {
        return J(this.get(a))
    };
    I.first = function () {
        return this.eq(0)
    };
    I.last = function () {
        return this.eq(-1)
    };

    function N(a) {
        return F(a) ? function (b, c) {
            return ka(c, a)
        } : H(a) ? a : a instanceof E ? function (b, c) {
            return a.is(c)
        } : a ? function (b, c) {
            return c === a
        } : function () {
            return !1
        }
    }
    I.filter = function (a) {
        var b = N(a);
        return J(u.call(this, function (a, d) {
            return b.call(a, d, a)
        }))
    };

    function O(a, b) {
        return b ? a.filter(b) : a
    }
    var ma = /\S+/g;

    function P(a) {
        return F(a) ? a.match(ma) || [] : []
    }
    I.hasClass = function (a) {
        return !!a && A.call(this, function (b) {
            return D(b) && b.classList.contains(a)
        })
    };
    I.removeAttr = function (a) {
        var b = P(a);
        return this.each(function (a, d) {
            D(d) && L(b, function (a, b) {
                d.removeAttribute(b)
            })
        })
    };
    I.attr = function (a, b) {
        if (a) {
            if (F(a)) {
                if (2 > arguments.length) {
                    if (!this[0] || !D(this[0])) return;
                    var c = this[0].getAttribute(a);
                    return null === c ? void 0 : c
                }
                return void 0 === b ? this : null === b ? this.removeAttr(a) : this.each(function (c, h) {
                    D(h) && h.setAttribute(a, b)
                })
            }
            for (c in a) this.attr(c, a[c]);
            return this
        }
    };
    I.toggleClass = function (a, b) {
        var c = P(a),
            d = void 0 !== b;
        return this.each(function (a, f) {
            D(f) && L(c, function (a, c) {
                d ? b ? f.classList.add(c) : f.classList.remove(c) : f.classList.toggle(c)
            })
        })
    };
    I.addClass = function (a) {
        return this.toggleClass(a, !0)
    };
    I.removeClass = function (a) {
        return arguments.length ? this.toggleClass(a, !1) : this.attr("class", "")
    };

    function Q(a, b, c, d) {
        for (var h = [], f = H(b), l = d && N(d), x = 0, k = a.length; x < k; x++)
            if (f) {
                var q = b(a[x]);
                q.length && ca.apply(h, q)
            } else
                for (q = a[x][b]; !(null == q || d && l(-1, q));) h.push(q), q = c ? q[b] : null;
        return h
    }

    function R(a) {
        return 1 < a.length ? u.call(a, function (a, c, d) {
            return v.call(d, a) === c
        }) : a
    }
    J.unique = R;
    I.add = function (a, b) {
        return J(R(this.get().concat(J(a, b).get())))
    };

    function S(a, b, c) {
        if (D(a)) {
            var d = n.getComputedStyle(a, null);
            return c ? d.getPropertyValue(b) || void 0 : d[b] || a.style[b]
        }
    }

    function T(a, b) {
        return parseInt(S(a, b), 10) || 0
    }
    var na = /^--/,
        oa = {
            opacity: !0,
            order: !0,
            zIndex: !0
        };

    function pa(a, b, c) {
        void 0 === c && (c = na.test(a));
        return c || oa[a] || !la(b) ? b : b + "px"
    }
    I.css = function (a, b) {
        if (F(a)) {
            var c = na.test(a);
            if (2 > arguments.length) return this[0] && S(this[0], a, c);
            if (!a) return this;
            b = pa(a, b, c);
            return this.each(function (d, f) {
                D(f) && (c ? f.style.setProperty(a, b) : f.style[a] = b)
            })
        }
        for (var d in a) this.css(d, a[d]);
        return this
    };
    var qa = /^\s+|\s+$/;

    function ra(a, b) {
        a = a.dataset[b] || a.dataset[K(b)];
        return qa.test(a) ? a : g(JSON.parse, a)
    }
    I.data = function (a, b) {
        if (!a) {
            if (!this[0]) return;
            var c = {},
                d;
            for (d in this[0].dataset) c[d] = ra(this[0], d);
            return c
        }
        if (F(a)) return 2 > arguments.length ? this[0] && ra(this[0], a) : void 0 === b ? this : this.each(function (c, d) {
            c = b;
            c = F(c) ? c : g(JSON.stringify, c);
            d.dataset[K(a)] = c
        });
        for (d in a) this.data(d, a[d]);
        return this
    };

    function sa(a, b) {
        var c = a.documentElement;
        return Math.max(a.body["scroll" + b], c["scroll" + b], a.body["offset" + b], c["offset" + b], c["client" + b])
    }

    function ta(a, b) {
        return T(a, "border" + (b ? "Left" : "Top") + "Width") + T(a, "padding" + (b ? "Left" : "Top")) + T(a, "padding" + (b ? "Right" : "Bottom")) + T(a, "border" + (b ? "Right" : "Bottom") + "Width")
    }
    L([!0, !1], function (a, b) {
        L(["Width", "Height"], function (a, d) {
            I[(b ? "outer" : "inner") + d] = function (c) {
                if (this[0]) return M(this[0]) ? b ? this[0]["inner" + d] : this[0].document.documentElement["client" + d] : C(this[0]) ? sa(this[0], d) : this[0][(b ? "offset" : "client") + d] + (c && b ? T(this[0], "margin" + (a ? "Top" : "Left")) + T(this[0], "margin" + (a ? "Bottom" : "Right")) : 0)
            }
        })
    });
    L(["Width", "Height"], function (a, b) {
        var c = b.toLowerCase();
        I[c] = function (d) {
            if (!this[0]) return void 0 === d ? void 0 : this;
            if (!arguments.length) return M(this[0]) ? this[0].document.documentElement["client" + b] : C(this[0]) ? sa(this[0], b) : this[0].getBoundingClientRect()[c] - ta(this[0], !a);
            var h = parseInt(d, 10);
            return this.each(function (b, d) {
                D(d) && (b = S(d, "boxSizing"), d.style[c] = pa(c, h + ("border-box" === b ? ta(d, !a) : 0)))
            })
        }
    });
    var U = {};
    I.toggle = function (a) {
        return this.each(function (b, c) {
            if (D(c))
                if (void 0 === a ? "none" === S(c, "display") : a) {
                    if (c.style.display = c.___cd || "", "none" === S(c, "display")) {
                        b = c.style;
                        c = c.tagName;
                        if (U[c]) c = U[c];
                        else {
                            var d = p(c);
                            m.body.insertBefore(d, null);
                            var h = S(d, "display");
                            m.body.removeChild(d);
                            c = U[c] = "none" !== h ? h : "block"
                        }
                        b.display = c
                    }
                } else c.___cd = S(c, "display"), c.style.display = "none"
        })
    };
    I.hide = function () {
        return this.toggle(!1)
    };
    I.show = function () {
        return this.toggle(!0)
    };

    function ua(a, b) {
        return !b || !A.call(b, function (b) {
            return 0 > a.indexOf(b)
        })
    }
    var V = {
            focus: "focusin",
            blur: "focusout"
        },
        W = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        va = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;

    function wa(a, b, c, d, h) {
        var f = a.___ce = a.___ce || {};
        f[b] = f[b] || [];
        f[b].push([c, d, h]);
        a.addEventListener(b, h)
    }

    function X(a) {
        a = a.split(".");
        return [a[0], a.slice(1).sort()]
    }

    function Y(a, b, c, d, h) {
        var f = a.___ce = a.___ce || {};
        if (b) f[b] && (f[b] = f[b].filter(function (f) {
            var l = f[0],
                k = f[1];
            f = f[2];
            if (h && f.guid !== h.guid || !ua(l, c) || d && d !== k) return !0;
            a.removeEventListener(b, f)
        }));
        else
            for (b in f) Y(a, b, c, d, h)
    }
    I.off = function (a, b, c) {
        var d = this;
        if (void 0 === a) this.each(function (a, b) {
            (D(b) || C(b) || M(b)) && Y(b)
        });
        else if (F(a)) H(b) && (c = b, b = ""), L(P(a), function (a, h) {
            a = X(h);
            h = a[0];
            var f = a[1],
                k = W[h] || V[h] || h;
            d.each(function (a, d) {
                (D(d) || C(d) || M(d)) && Y(d, k, f, b, c)
            })
        });
        else
            for (var h in a) this.off(h, a[h]);
        return this
    };
    I.on = function (a, b, c, d, h) {
        var f = this;
        if (!F(a)) {
            for (var l in a) this.on(l, b, c, a[l], h);
            return this
        }
        F(b) || (void 0 !== b && null !== b && (void 0 !== c && (d = c), c = b), b = "");
        H(d) || (d = c, c = void 0);
        if (!d) return this;
        L(P(a), function (a, k) {
            a = X(k);
            k = a[0];
            var q = a[1],
                l = W[k] || V[k] || k,
                x = k in W,
                xa = k in V;
            l && f.each(function (a, f) {
                if (D(f) || C(f) || M(f)) a = function ya(a) {
                    if (a.target["___i" + a.type]) return a.stopImmediatePropagation();
                    if (!a.namespace || ua(q, a.namespace.split(".")))
                        if (b || !(xa && (a.target !== f || a.___ot === l) || x && a.relatedTarget &&
                                f.contains(a.relatedTarget))) {
                            var k = f;
                            if (b) {
                                for (var z = a.target; !ka(z, b);) {
                                    if (z === f) return;
                                    z = z.parentNode;
                                    if (!z) return
                                }
                                k = z;
                                a.___cd = !0
                            }
                            a.___cd && Object.defineProperty(a, "currentTarget", {
                                configurable: !0,
                                get: function () {
                                    return k
                                }
                            });
                            Object.defineProperty(a, "data", {
                                configurable: !0,
                                get: function () {
                                    return c
                                }
                            });
                            z = d.call(k, a, a.___td);
                            h && Y(f, l, q, b, ya);
                            !1 === z && (a.preventDefault(), a.stopPropagation())
                        }
                }, a.guid = d.guid = d.guid || J.guid++, wa(f, l, q, b, a)
            })
        });
        return this
    };
    I.one = function (a, b, c, d) {
        return this.on(a, b, c, d, !0)
    };
    I.ready = function (a) {
        function b() {
            return setTimeout(a, 0, J)
        }
        "loading" !== m.readyState ? b() : m.addEventListener("DOMContentLoaded", b);
        return this
    };
    I.trigger = function (a, b) {
        if (F(a)) {
            var c = X(a),
                d = c[0];
            c = c[1];
            var h = W[d] || V[d] || d;
            if (!h) return this;
            var f = va.test(h) ? "MouseEvents" : "HTMLEvents";
            a = m.createEvent(f);
            a.initEvent(h, !0, !0);
            a.namespace = c.join(".");
            a.___ot = d
        }
        a.___td = b;
        var l = a.___ot in V;
        return this.each(function (b, c) {
            l && H(c[a.___ot]) && (c["___i" + a.type] = !0, c[a.___ot](), c["___i" + a.type] = !1);
            c.dispatchEvent(a)
        })
    };

    function za(a) {
        return a.multiple && a.options ? Q(u.call(a.options, function (a) {
            return a.selected && !a.disabled && !a.parentNode.disabled
        }), "value") : a.value || ""
    }
    var Aa = /radio|checkbox/i;
    I.val = function (a) {
        return arguments.length ? this.each(function (b, c) {
            if ((b = c.multiple && c.options) || Aa.test(c.type)) {
                var d = r(a) ? w.call(a, String) : null === a ? [] : [String(a)];
                b ? L(c.options, function (a, b) {
                    b.selected = 0 <= d.indexOf(b.value)
                }, !0) : c.checked = 0 <= d.indexOf(c.value)
            } else c.value = void 0 === a || null === a ? "" : a
        }) : this[0] && za(this[0])
    };
    I.clone = function () {
        return this.map(function (a, b) {
            return b.cloneNode(!0)
        })
    };
    I.detach = function (a) {
        O(this, a).each(function (a, c) {
            c.parentNode && c.parentNode.removeChild(c)
        });
        return this
    };
    var Ba = /^\s*<(\w+)[^>]*>/,
        Ca = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function G(a) {
        if (!F(a)) return [];
        if (Ca.test(a)) return [p(RegExp.$1)];
        var b = Ba.test(a) && RegExp.$1;
        b = p("tr" == b ? "tbody" : "div");
        b.innerHTML = a;
        return J(b.childNodes).detach().get()
    }
    J.parseHTML = G;
    I.empty = function () {
        return this.each(function (a, b) {
            for (; b.firstChild;) b.removeChild(b.firstChild)
        })
    };

    function Z(a, b, c, d, h, f, l, x) {
        L(a, function (a, f) {
            L(J(f), function (a, f) {
                L(J(b), function (b, k) {
                    var l = c ? k : f;
                    k = c ? f : k;
                    b = (c ? a : b) ? l.cloneNode(!0) : l;
                    h ? k.insertBefore(b, d ? k.firstChild : null) : k.parentNode.insertBefore(b, d ? k : k.nextSibling)
                }, x)
            }, l)
        }, f);
        return b
    }
    I.after = function () {
        return Z(arguments, this, !1, !1, !1, !0, !0)
    };
    I.append = function () {
        return Z(arguments, this, !1, !1, !0)
    };
    I.appendTo = function (a) {
        return Z(arguments, this, !0, !1, !0)
    };
    I.before = function () {
        return Z(arguments, this, !1, !0)
    };
    I.html = function (a) {
        return arguments.length ? void 0 === a ? this : this.each(function (b, c) {
            D(c) && (c.innerHTML = a)
        }) : this[0] && this[0].innerHTML
    };
    I.insertAfter = function (a) {
        return Z(arguments, this, !0, !1, !1, !1, !1, !0)
    };
    I.insertBefore = function (a) {
        return Z(arguments, this, !0, !0)
    };
    I.prepend = function () {
        return Z(arguments, this, !1, !0, !0, !0, !0)
    };
    I.prependTo = function (a) {
        return Z(arguments, this, !0, !0, !0, !1, !1, !0)
    };
    I.remove = function (a) {
        O(this, a).detach().off();
        return this
    };
    I.replaceWith = function (a) {
        return this.before(a).remove()
    };
    I.replaceAll = function (a) {
        J(a).replaceWith(this);
        return this
    };
    I.text = function (a) {
        return void 0 === a ? this[0] ? this[0].textContent : "" : this.each(function (b, c) {
            D(c) && (c.textContent = a)
        })
    };
    I.unwrap = function () {
        this.parent().each(function (a, b) {
            "BODY" !== b.tagName && (a = J(b), a.replaceWith(a.children()))
        });
        return this
    };
    I.wrapAll = function (a) {
        a = J(a);
        for (var b = a[0]; b.children.length;) b = b.firstElementChild;
        this.first().before(a);
        return this.appendTo(b)
    };
    I.wrap = function (a) {
        return this.each(function (b, c) {
            var d = J(a)[0];
            J(c).wrapAll(b ? d.cloneNode(!0) : d)
        })
    };
    I.wrapInner = function (a) {
        return this.each(function (b, c) {
            b = J(c);
            c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    };
    I.offset = function () {
        var a = this[0];
        if (a) return a = a.getBoundingClientRect(), {
            top: a.top + n.pageYOffset,
            left: a.left + n.pageXOffset
        }
    };
    I.offsetParent = function () {
        return this.map(function (a, b) {
            for (a = b.offsetParent; a && "static" === S(a, "position");) a = a.offsetParent;
            return a || aa
        })
    };
    I.children = function (a) {
        return O(J(R(Q(this, function (a) {
            return a.children
        }))), a)
    };
    I.contents = function () {
        return J(R(Q(this, function (a) {
            return "IFRAME" === a.tagName ? [a.contentDocument] : "TEMPLATE" === a.tagName ? a.content.childNodes : a.childNodes
        })))
    };
    I.find = function (a) {
        return J(R(Q(this, function (b) {
            return B(a, b)
        })))
    };
    I.has = function (a) {
        var b = F(a) ? function (b, d) {
            return B(a, d).length
        } : function (b, d) {
            return d.contains(a)
        };
        return this.filter(b)
    };
    I.is = function (a) {
        var b = N(a);
        return A.call(this, function (a, d) {
            return b.call(a, d, a)
        })
    };
    I.next = function (a, b, c) {
        return O(J(R(Q(this, "nextElementSibling", b, c))), a)
    };
    I.nextAll = function (a) {
        return this.next(a, !0)
    };
    I.nextUntil = function (a, b) {
        return this.next(b, !0, a)
    };
    I.not = function (a) {
        var b = N(a);
        return this.filter(function (c, d) {
            return (!F(a) || D(d)) && !b.call(d, c, d)
        })
    };
    I.parent = function (a) {
        return O(J(R(Q(this, "parentNode"))), a)
    };
    I.index = function (a) {
        var b = a ? J(a)[0] : this[0];
        a = a ? this : J(b).parent().children();
        return v.call(a, b)
    };
    I.closest = function (a) {
        var b = this.filter(a);
        if (b.length) return b;
        var c = this.parent();
        return c.length ? c.closest(a) : b
    };
    I.parents = function (a, b) {
        return O(J(R(Q(this, "parentElement", !0, b))), a)
    };
    I.parentsUntil = function (a, b) {
        return this.parents(b, a)
    };
    I.prev = function (a, b, c) {
        return O(J(R(Q(this, "previousElementSibling", b, c))), a)
    };
    I.prevAll = function (a) {
        return this.prev(a, !0)
    };
    I.prevUntil = function (a, b) {
        return this.prev(b, !0, a)
    };
    I.siblings = function (a) {
        return O(J(R(Q(this, function (a) {
            return J(a).parent().children().not(a)
        }))), a)
    };
    "undefined" !== typeof exports ? module.exports = J : n.cash = n.$ = J;
})();
! function () {
    var l = "displayController",
        p = "hasActiveHover",
        u = "forcedOpen",
        f = {
            isTipOpen: !1,
            isClosing: !1,
            tipOpenImminent: !1,
            activeHover: null,
            currentX: 0,
            currentY: 0,
            previousX: 0,
            previousY: 0,
            desyncTimeout: null,
            mouseTrackingActive: !1,
            delayInProgress: !1,
            windowWidth: 0,
            windowHeight: 0,
            scrollTop: 0,
            scrollLeft: 0
        },
        w = {
            none: 0,
            top: 1,
            bottom: 2,
            left: 4,
            right: 8
        };

    function h() {
        var i = this;
        i.top = "auto", i.left = "auto", i.right = "auto", i.bottom = "auto", i.set = function (e, t) {
            $.isNumeric(t) && (i[e] = Math.round(t))
        }
    }

    function n(i, n, o) {
        var s = null;

        function r(e, t) {
            c(), i[0][p] || (e ? (t && (i[0][u] = !0), o.showTip(i)) : (f.tipOpenImminent = !0, s = setTimeout(function () {
                var e, t;
                s = null, e = Math.abs(f.previousX - f.currentX), t = Math.abs(f.previousY - f.currentY), e + t < n.intentSensitivity ? o.showTip(i) : (f.previousX = f.currentX, f.previousY = f.currentY, r())
            }, n.intentPollInterval)))
        }

        function c() {
            s = clearTimeout(s), f.delayInProgress = !1
        }
        this.show = r, this.hide = function (e) {
            c(), f.tipOpenImminent = !1, i[0][p] && (i[0][u] = !1, e ? o.hideTip(i) : (f.delayInProgress = !0, s = setTimeout(function () {
                s = null, o.hideTip(i), f.delayInProgress = !1
            }, n.closeDelay)))
        }, this.cancel = c, this.resetPosition = function () {
            o.resetPosition(i)
        }
    }

    function e() {
        this.compute = function (e, t, i, n, o) {
            var s = t.split("-")[0],
                r = new h,
                c = function (e, t) {
                    var i, n, o = e.offset(),
                        s = e.outerWidth(),
                        r = e.outerHeight();
                    switch (t) {
                        case "n":
                            i = o.left + s / 2, n = o.top;
                            break;
                        case "e":
                            i = o.left + s, n = o.top + r / 2;
                            break;
                        case "s":
                            i = o.left + s / 2, n = o.top + r;
                            break;
                        case "w":
                            i = o.left, n = o.top + r / 2;
                            break;
                        case "nw":
                            i = o.left, n = o.top;
                            break;
                        case "ne":
                            i = o.left + s, n = o.top;
                            break;
                        case "sw":
                            i = o.left, n = o.top + r;
                            break;
                        case "se":
                            i = o.left + s, n = o.top + r
                    }
                    return {
                        top: n,
                        left: i
                    }
                }(e, s);
            switch (t) {
                case "n":
                    r.set("left", c.left - i / 2), r.set("bottom", f.windowHeight - c.top + o);
                    break;
                case "e":
                    r.set("left", c.left + o), r.set("top", c.top - n / 2);
                    break;
                case "s":
                    r.set("left", c.left - i / 2), r.set("top", c.top + o);
                    break;
                case "w":
                    r.set("top", c.top - n / 2), r.set("right", f.windowWidth - c.left + o);
                    break;
                case "nw":
                    r.set("bottom", f.windowHeight - c.top + o), r.set("right", f.windowWidth - c.left - 20);
                    break;
                case "ne":
                    r.set("left", c.left - 20), r.set("bottom", f.windowHeight - c.top + o);
                    break;
                case "sw":
                    r.set("top", c.top + o), r.set("right", f.windowWidth - c.left - 20);
                    break;
                case "se":
                    r.set("left", c.left - 20), r.set("top", c.top + o)
            }
            return r
        }
    }

    function o(r) {
        var c = new e,
            a = $("#" + r.popupId);

        function i(e) {
            f.isClosing = !0, f.activeHover = null, f.isTipOpen = !1, f.desyncTimeout = clearInterval(f.desyncTimeout), e[0][p] = !1, e[0][u] = !1, a.hide();
            var t = new h;
            f.isClosing = !1, a.removeClass(), t.set("top", f.currentY + r.offset), t.set("left", f.currentX + r.offset), a.css(t)
        }

        function n(n) {
            var e;
            r.smartPlacement ? (e = $.fn.powerTip.smartPlacementLists[r.placement], $.each(e, function (e, t) {
                var i = function (e, t, i) {
                    var n = f.scrollTop,
                        o = f.scrollLeft,
                        s = n + f.windowHeight,
                        r = o + f.windowWidth,
                        c = w.none;
                    (e.top < n || Math.abs(e.bottom - f.windowHeight) - i < n) && (c |= w.top);
                    (e.top + i > s || Math.abs(e.bottom - f.windowHeight) > s) && (c |= w.bottom);
                    (e.left < o || e.right + t > r) && (c |= w.left);
                    (e.left + t > r || e.right < o) && (c |= w.right);
                    return c
                }(o(n, t), a.outerWidth() || r.defaultSize[0], a.outerHeight() || r.defaultSize[1]);
                if (i === w.none) return !1
            })) : (o(n, r.placement), r.placement)
        }

        function o(e, t) {
            var i, n, o = 0,
                s = new h;
            for (s.set("top", 0), s.set("left", 0), a.css(s); i = a.outerWidth() || r.defaultSize[0], n = a.outerHeight() || r.defaultSize[1], s = c.compute(e, t, i, n, r.offset), a.css(s), ++o <= 5 && (i !== a.outerWidth() || n !== a.outerHeight()););
            return s
        }

        function s() {
            var e = !1;
            !f.isTipOpen || f.isClosing || f.delayInProgress || (!1 !== f.activeHover[0][p] && !f.activeHover.is(":disabled") && (t(f.activeHover) || f.activeHover.is(":focus") || f.activeHover[0][u] || t(a)) || (e = !0), e && i(f.activeHover))
        }
        0 === a.length && (a = $('<div id="' + r.popupId + '"/>'), $("body").append(a)), a.on({
            mouseenter: function () {
                f.activeHover && f.activeHover[0][l].cancel()
            },
            mouseleave: function () {
                f.activeHover && f.activeHover[0][l].hide()
            }
        }), this.showTip = function (e) {
            e[0][p] = !0,
                function e(t) {
                    if (!t[0][p]) return;
                    if (f.isTipOpen) return f.isClosing || i(f.activeHover), void setTimeout(function () {
                        e(t)
                    }, 100);
                    a.empty();
                    r.preRender && r.preRender(t[0]);
                    f.activeHover = t;
                    f.isTipOpen = !0;
                    n(t);
                    a.show();
                    f.desyncTimeout || (f.desyncTimeout = setInterval(s, 500))
                }(e)
        }, this.hideTip = i, this.resetPosition = n
    }

    function s(e) {
        f.currentX = e.pageX, f.currentY = e.pageY
    }

    function t(e) {
        var t = e.offset();
        return f.currentX >= t.left && f.currentX <= t.left + e.width() && f.currentY >= t.top && f.currentY <= t.top + e.height()
    }
    $.fn.powerTip = function (e) {
        if (!this.length) return this;
        var t = Object.assign({}, $.fn.powerTip.defaults, e),
            i = new o(t);
        return function () {
            {
                var e;
                f.mouseTrackingActive || (f.mouseTrackingActive = !0, e = $(window), f.scrollLeft = window.scrollX, f.scrollTop = window.scrollY, f.windowWidth = e.width(), f.windowHeight = e.height(), document.addEventListener("mousemove", s), window.addEventListener("resize", function () {
                    f.windowWidth = e.width(), f.windowHeight = e.height()
                }, {
                    passive: !0
                }), window.addEventListener("scroll", function () {
                    var e = window.scrollX,
                        t = window.scrollY;
                    e !== f.scrollLeft && (f.currentX += e - f.scrollLeft, f.scrollLeft = e), t !== f.scrollTop && (f.currentY += t - f.scrollTop, f.scrollTop = t)
                }, {
                    passive: !0
                }))
            }
        }(), this.each(function () {
            var e = $(this);
            this[l] && $.powerTip.destroy(e), this[l] = new n(e, t, i)
        }), this.on({
            mouseenter: function (e) {
                $.powerTip.show(this, e)
            },
            mouseleave: function () {
                $.powerTip.hide(this)
            }
        }), this
    }, $.fn.powerTip.defaults = {
        popupId: "powerTip",
        intentSensitivity: 7,
        intentPollInterval: 150,
        closeDelay: 150,
        placement: "n",
        smartPlacement: !0,
        defaultSize: [260, 120],
        offset: 10
    }, $.fn.powerTip.smartPlacementLists = {
        n: ["n", "ne", "nw", "s"],
        e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"],
        s: ["s", "se", "sw", "n"],
        w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"],
        nw: ["nw", "w", "sw", "n", "s", "se", "nw"],
        ne: ["ne", "e", "se", "n", "s", "sw", "ne"],
        sw: ["sw", "w", "nw", "s", "n", "ne", "sw"],
        se: ["se", "e", "ne", "s", "n", "nw", "se"]
    }, $.powerTip = {
        show: function (e, t) {
            return t ? (s(t), f.previousX = t.pageX, f.previousY = t.pageY, $(e)[0][l].show()) : $(e).first()[0][l].show(!0, !0), e
        },
        reposition: function (e) {
            return $(e).first()[0][l].resetPosition(), e
        },
        hide: function (e, t) {
            return e ? $(e).first()[0][l].hide(t) : f.activeHover && f.activeHover[0][l].hide(!0), e
        },
        destroy: function (e) {
            return $(e).off(".powertip").each(function () {
                delete this[l], delete this[p], delete this[u]
            }), e
        }
    }, $.powerTip.showTip = $.powerTip.show, $.powerTip.closeTip = $.powerTip.hide
}();
// https://github.com/ornicar/howler.js/tree/2.0-lila-trim2
! function () {
    "use strict";
    var e = function () {
        this.init()
    };
    e.prototype = {
        init: function () {
            var e = this || n;
            return e._codecs = {}, e._howls = [], e._canPlayEvent = "canplaythrough", e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
        },
        unload: function () {
            for (var e = this || n, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
            return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, d()), e
        },
        codecs: function (e) {
            return (this || n)._codecs[e.replace(/^x-/, "")]
        },
        _setup: function () {
            var e = this || n;
            if (e.state = e.ctx && e.ctx.state || "running", e._autoSuspend(), !e.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    void 0 === (t = new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                } catch (o) {
                    e.noAudio = !0
                } else e.noAudio = !0;
            try {
                var t;
                (t = new Audio).muted ? e.noAudio = !0 : e._codecs = {
                    mp3: !(!t.canPlayType("audio/mpeg;").replace(/^no$/, "") && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")
                }
            } catch (o) {}
            return e
        },
        _enableMobileAudio: function () {
            var e = this || n;
            if (!e._mobileEnabled && e.ctx && (/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(navigator.userAgent) || "ontouchend" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
                e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                var t = function () {
                    var n = e.ctx.createBufferSource();
                    n.buffer = e._scratchBuffer, n.connect(e.ctx.destination), void 0 === n.start ? n.noteOn(0) : n.start(0), n.onended = function () {
                        n.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchend", t, !0)
                    }
                };
                return document.addEventListener("touchend", t, !0), e
            }
        },
        _autoSuspend: function () {
            var e = this;
            if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
                for (var t = 0; t < e._howls.length; t++)
                    if (e._howls[t]._webAudio) return e._howls[t]._sounds.length > 0;
                return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout((function () {
                    e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then((function () {
                        e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                    })))
                }), 9e4), e
            }
        },
        _autoResume: function () {
            var e = this;
            if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.state = "resuming", e.ctx.resume().then((function () {
                e.state = "running", e._howls.forEach(e => e._emit("resume"))
            })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
        }
    };
    var n = new e,
        t = function (e) {
            e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
        };
    t.prototype = {
        init: function (e) {
            var t = this;
            return n.ctx || d(), t._html5 = !1, t._pool = 5, t._preload = !0, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._onload = t._onpause = t._onplay = t._onstop = t._onvolume = t._onresume = t._onend = [], t._webAudio = n.usingWebAudio && !t._html5, void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(), n._howls.push(t), t._preload && t.load(), t
        },
        load: function () {
            var e = this,
                t = null;
            if (!n.noAudio) {
                "string" == typeof e._src && (e._src = [e._src]);
                for (var u = 0; u < e._src.length; u++) {
                    var r = e._src[u],
                        d = /\.([^.]+)$/.exec(r.split("?", 1)[0]);
                    if (d && (d = d[1].toLowerCase()), n.codecs(d)) {
                        t = e._src[u];
                        break
                    }
                }
                if (t) return e._src = t, e._state = "loading", new o(e), e._webAudio && i(e), e
            }
        },
        play: function () {
            var e = this,
                t = e._inactiveSound();
            if ("loaded" !== e._state) return e._queue.push({
                event: "play",
                action() {
                    e.play()
                }
            }), t._id;
            e._webAudio && n._autoResume(), t._ended = !1;
            var o = t._node;
            if (e._webAudio) {
                var u = function () {
                        e._refreshBuffer(t), o.gain.setValueAtTime(t._volume, n.ctx.currentTime), t._playStart = n.ctx.currentTime, void 0 === o.bufferSource.start ? o.bufferSource.noteGrainOn(0, 0, e._duration) : o.bufferSource.start(0, 0, e._duration), e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), 1e3 * e._duration), setTimeout((function () {
                            e._emit("play", t._id)
                        }), 0)
                    },
                    i = "running" === n.state;
                "loaded" === e._state && i ? u() : (e.on(i ? "load" : "resume", u, i ? t._id : null, 1), e._clearTimer(t._id))
            } else {
                var r = function () {
                        o.currentTime = 0, o.volume = t._volume, setTimeout((function () {
                            o.play(), e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), 1e3 * e._duration), e._emit("play", t._id)
                        }), 0)
                    },
                    d = "loaded" === e._state;
                if (4 === o.readyState || d) r();
                else {
                    var s = function () {
                        r(), o.removeEventListener(n._canPlayEvent, s, !1)
                    };
                    o.addEventListener(n._canPlayEvent, s, !1), e._clearTimer(t._id)
                }
            }
            return t._id
        },
        stop: function (e) {
            var n = this;
            if ("loaded" !== n._state) return n._queue.push({
                event: "stop",
                action() {
                    n.stop(e)
                }
            }), n;
            for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                n._clearTimer(t[o]);
                var u = n._soundById(t[o]);
                if (u && (u._ended = !0, u._node))
                    if (n._webAudio) {
                        if (!u._node.bufferSource) return n._emit("stop", u._id), n;
                        void 0 === u._node.bufferSource.stop ? u._node.bufferSource.noteOff(0) : u._node.bufferSource.stop(0), n._cleanBuffer(u._node)
                    } else isNaN(u._node.duration) && u._node.duration !== 1 / 0 || (u._node.currentTime = u._start || 0, u._node.pause());
                u && n._emit("stop", u._id)
            }
            return n
        },
        volume: function (e) {
            var t = this;
            return "loaded" !== t._state ? (t._queue.push({
                event: "volume",
                action() {
                    t.volume.apply(t, [e])
                }
            }), t) : (t._volume = e, t._sounds.forEach((function (o) {
                o._volume = e, t._webAudio && o._node ? o._node.gain.setValueAtTime(e, n.ctx.currentTime) : o._node && (o._node.volume = e), t._emit("volume", o._id)
            })), t)
        },
        playing: function (e) {
            return "number" == typeof e ? !!this._soundById(e) : this._sounds.length > 0
        },
        state: function () {
            return this._state
        },
        on: function (e, n, t, o) {
            this["_on" + e].push({
                id: t,
                fn: n,
                once: !!o
            })
        },
        _emit: function (e, n, t) {
            for (var o = this["_on" + e], u = o.length - 1; u >= 0; u--) o[u].id && o[u].id !== n && "load" !== e || (setTimeout(function (e) {
                e.call(this, n, t)
            }.bind(this, o[u].fn), 0), o[u].once && o.splice(u, 1))
        },
        _loadQueue: function () {
            var e = this;
            if (e._queue.length > 0) {
                var n = e._queue[0];
                e.on(n.event, (function () {
                    e._queue.shift(), e._loadQueue()
                }), null, 1), n.action()
            }
            return e
        },
        _ended: function (e) {
            var t = this;
            return t._emit("end", e._id), t._webAudio && (e._ended = !0, t._clearTimer(e._id), t._cleanBuffer(e._node), n._autoSuspend()), t._webAudio || t.stop(e._id), t
        },
        _clearTimer: function (e) {
            var n = this;
            return n._endTimers[e] && (clearTimeout(n._endTimers[e]), delete n._endTimers[e]), n
        },
        _soundById: function (e) {
            for (var n = this, t = 0; t < n._sounds.length; t++)
                if (e === n._sounds[t]._id) return n._sounds[t];
            return null
        },
        _inactiveSound: function () {
            var e = this;
            e._drain();
            for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended) return e._sounds[n].reset();
            return new o(e)
        },
        _drain: function () {
            var e = this,
                n = e._pool,
                t = 0;
            if (!(e._sounds.length < n)) {
                var o = e._sounds.reduce((e, n) => e + (n._ended ? 1 : 0), 0);
                for (t = e._sounds.length - 1; t >= 0; t--) {
                    if (o <= n) return;
                    e._sounds[t]._ended && (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--)
                }
            }
        },
        _getSoundIds: function (e) {
            if (void 0 === e) {
                for (var n = [], t = 0; t < this._sounds.length; t++) n.push(this._sounds[t]._id);
                return n
            }
            return [e]
        },
        _refreshBuffer: function (e) {
            return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = u[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), this
        },
        _cleanBuffer: function (e) {
            var n = this;
            if (n._scratchBuffer) {
                e.bufferSource.onended = null, e.bufferSource.disconnect(0);
                try {
                    e.bufferSource.buffer = n._scratchBuffer
                } catch (t) {}
            }
            return e.bufferSource = null, n
        }
    };
    var o = function (e) {
        this._parent = e, this.init()
    };
    o.prototype = {
        init: function () {
            var e = this,
                n = e._parent;
            return e._volume = n._volume, e._ended = !0, e._id = Math.round(Date.now() * Math.random()), n._sounds.push(e), e.create(), e
        },
        create: function () {
            var e = this,
                t = e._parent,
                o = e._volume;
            return t._webAudio ? (e._node = n.ctx.createGain ? n.ctx.createGain() : n.ctx.createGainNode(), e._node.gain.setValueAtTime(o, n.ctx.currentTime), e._node.connect(n.ctx.destination)) : (e._node = new Audio, e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = o, e._node.load()), e
        },
        reset: function () {
            var e = this,
                n = e._parent;
            return e._volume = n._volume, e._ended = !0, e._id = Math.round(Date.now() * Math.random()), e
        },
        _loadListener: function () {
            var e = this,
                t = e._parent;
            t._duration = Math.ceil(10 * e._node.duration) / 10, "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1)
        }
    };
    var u = {},
        i = function (e) {
            var t = e._src;
            u[t] ? (e._duration = u[t].duration, r(e)) : fetch(t, {}).then(t => {
                t.ok ? t.arrayBuffer().then(t => n.ctx.decodeAudioData(t, n => {
                    n && e._sounds.length > 0 && (u[e._src] = n, r(e, n))
                })) : Promise.reject()
            }).catch(() => {
                e._html5 = !0, e._webAudio = !1, e._sounds = [], delete u[t], e.load()
            })
        },
        r = function (e, n) {
            n && !e._duration && (e._duration = n.duration), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
        },
        d = function () {
            try {
                "undefined" != typeof AudioContext ? n.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext : n.usingWebAudio = !1
            } catch (t) {
                n.usingWebAudio = !1
            }
            var e = /iP(hone|od|ad)/.test(navigator) && navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/) ? parseInt(appVersion[1], 10) : null;
            e && e < 9 && !/safari/.test(navigator.userAgent.toLowerCase()) && (n.usingWebAudio = !1), n._setup()
        };
    window.Howler = n, window.Howl = t
}();
! function () {
    for (var e, t = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "ins",
            46: "del",
            91: "meta",
            93: "meta",
            224: "meta"
        }, n = {
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        }, a = {
            option: "alt",
            command: "meta",
            return: "enter",
            escape: "esc",
            plus: "+",
            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
        }, r = 1; r < 20; ++r) t[111 + r] = "f" + r;
    for (r = 0; r <= 9; ++r) t[r + 96] = r.toString();

    function o(e) {
        if ("keypress" == e.type) {
            var a = String.fromCharCode(e.which);
            return e.shiftKey || (a = a.toLowerCase()), a
        }
        return t[e.which] ? t[e.which] : n[e.which] ? n[e.which] : String.fromCharCode(e.which).toLowerCase()
    }

    function i(e) {
        return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
    }

    function c(n, a, r) {
        return r || (r = function () {
            if (!e)
                for (var n in e = {}, t) n > 95 && n < 112 || t.hasOwnProperty(n) && (e[t[n]] = n);
            return e
        }()[n] ? "keydown" : "keypress"), "keypress" == r && a.length && (r = "keydown"), r
    }

    function s(e, t) {
        var n, r, o, s = [];
        for (n = function (e) {
                return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus")).split("+")
            }(e), o = 0; o < n.length; ++o) r = n[o], a[r] && (r = a[r]), i(r) && s.push(r);
        return {
            key: r,
            modifiers: s,
            action: t = c(r, s, t)
        }
    }

    function l(e) {
        var t = this;
        if (e = e || document, !(t instanceof l)) return new l(e);
        t.target = e, t._callbacks = {};
        var n, a = {},
            r = !1,
            c = !1,
            u = !1;

        function f(e) {
            e = e || {};
            var t, n = !1;
            for (t in a) e[t] ? n = !0 : a[t] = 0;
            n || (u = !1)
        }

        function h(e, n, r, o, c, s) {
            var l, u, f, h, p = [],
                y = r.type;
            if (!t._callbacks[e]) return [];
            for ("keyup" == y && i(e) && (n = [e]), l = 0; l < t._callbacks[e].length; ++l)
                if (u = t._callbacks[e][l], (o || !u.seq || a[u.seq] == u.level) && y == u.action && ("keypress" == y && !r.metaKey && !r.ctrlKey || (f = n, h = u.modifiers, f.sort().join(",") === h.sort().join(",")))) {
                    var d = !o && u.combo == c,
                        m = o && u.seq == o && u.level == s;
                    (d || m) && t._callbacks[e].splice(l, 1), p.push(u)
                } return p
        }

        function p(e, t, n) {
            const a = t.target;
            ("esc" == n || "INPUT" != a.tagName && "SELECT" != a.tagName && "TEXTAREA" != a.tagName && !a.isContentEditable) && (e(), t.preventDefault(), t.stopPropagation())
        }

        function y(e) {
            "number" != typeof e.which && (e.which = e.keyCode);
            var n = o(e);
            n && ("keyup" != e.type || r !== n ? t._handleKey.call(t, n, function (e) {
                var t = [];
                return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
            }(e), e) : r = !1)
        }

        function d(e, t, i, c) {
            function l(t) {
                return function () {
                    u = t, ++a[e], clearTimeout(n), n = setTimeout(f, 1e3)
                }
            }

            function h(t) {
                p(i, t, e), "keyup" !== c && (r = o(t)), setTimeout(f, 10)
            }
            a[e] = 0;
            for (var y = 0; y < t.length; ++y) {
                var d = y + 1 === t.length ? h : l(c || s(t[y + 1]).action);
                m(t[y], d, c, e, y)
            }
        }

        function m(e, n, a, r, o) {
            var i, c = (e = e.replace(/\s+/g, " ")).split(" ");
            c.length > 1 ? d(e, c, n, a) : (i = s(e, a), t._callbacks[i.key] = t._callbacks[i.key] || [], h(i.key, i.modifiers, {
                type: i.action
            }, r, e, o), t._callbacks[i.key][r ? "unshift" : "push"]({
                callback: n,
                modifiers: i.modifiers,
                action: i.action,
                seq: r,
                level: o,
                combo: e
            }))
        }
        t._handleKey = function (e, t, n) {
            var a, r = h(e, t, n),
                o = {},
                s = 0,
                l = !1;
            for (a = 0; a < r.length; ++a) r[a].seq && (s = Math.max(s, r[a].level));
            for (a = 0; a < r.length; ++a)
                if (r[a].seq) {
                    if (r[a].level != s) continue;
                    l = !0, o[r[a].seq] = 1, p(r[a].callback, n, r[a].combo)
                } else l || p(r[a].callback, n, r[a].combo);
            var y = "keypress" == n.type && c;
            n.type != u || i(e) || y || f(o), c = l && "keydown" == n.type
        }, t._bindMultiple = function (e, t, n) {
            e.forEach(e => m(e, t, n))
        }, e.addEventListener("keypress", y), e.addEventListener("keydown", y), e.addEventListener("keyup", y)
    }
    l.prototype.bind = function (e, t, n) {
        return this._bindMultiple.call(this, e instanceof Array ? e : [e], t, n), this
    }, window.Mousetrap = new l
}();
! function () {
    "use strict";

    function e(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function t(e, t, s) {
        return e(s = {
            path: t,
            exports: {},
            require: function (e, t) {
                return function () {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && s.path)
            }
        }, s.exports), s.exports
    }
    var s = t((function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.set = t.get = void 0;
            const s = e => `lichess-${e}`;
            t.get = (e, t) => e[s(t)];
            t.set = (e, t, n) => e[s(t)] = n
        })),
        n = t((function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.initAll = t.initWith = t.init = void 0;
            t.init = e => {
                const [s, n, i] = e.getAttribute("data-state").split(",");
                t.initWith(e, s, n, i)
            };
            t.initWith = (e, n, i, o) => {
                window.Chessground ? s.set(e, "chessground", window.Chessground(e, {
                    orientation: i,
                    coordinates: !1,
                    viewOnly: !e.getAttribute("data-playable"),
                    resizable: !1,
                    fen: n,
                    lastMove: o && ("@" === o[1] ? [o.slice(2)] : [o[0] + o[1], o[2] + o[3]]),
                    drawable: {
                        enabled: !1,
                        visible: !1
                    }
                })) : setTimeout((() => t.init(e)), 500)
            };
            t.initAll = e => Array.from((e || document).getElementsByClassName("mini-board--init")).forEach(t.init)
        })),
        i = e(n),
        o = Object.freeze(Object.assign(Object.create(null), n, {
            default: i
        }));
    const a = e => e.indexOf(" b") > 0 ? "black" : "white",
        r = e => {
            if (window.Chessground) {
                const [t, n, i] = e.getAttribute("data-state").split(","), o = {
                    coordinates: !1,
                    viewOnly: !0,
                    resizable: !1,
                    fen: t,
                    orientation: n,
                    lastMove: i && ("@" === i[1] ? [i.slice(2)] : [i[0] + i[1], i[2] + i[3]]),
                    drawable: {
                        enabled: !1,
                        visible: !1
                    }
                }, r = $(e).removeClass("mini-game--init"), c = r.find(".cg-wrap"), l = a(t);
                s.set(c[0], "chessground", window.Chessground(c[0], o)), ["white", "black"].forEach((e => r.find(".mini-game__clock--" + e).each((function () {
                    $(this).clock({
                        time: parseInt(this.getAttribute("data-time")),
                        pause: e != l
                    })
                }))))
            } else setTimeout((() => r(e)), 200);
            return e.getAttribute("data-live")
        },
        c = e => {
            const t = Array.from((e || document).getElementsByClassName("mini-game--init")).map(r).filter((e => e));
            t.length && lichess.StrongSocket.firstConnect.then((e => e("startWatching", t.join(" "))))
        },
        l = (e, t) => {
            const n = $(e),
                i = t.lm,
                o = i && ("@" === i[1] ? [i.slice(2)] : [i[0] + i[1], i[2] + i[3]]),
                r = s.get(e.querySelector(".cg-wrap"), "chessground");
            r && r.set({
                fen: t.fen,
                lastMove: o
            });
            const c = a(t.fen),
                l = (e, t) => {
                    isNaN(e) || n.find(".mini-game__clock--" + t).clock("set", {
                        time: e,
                        pause: t != c
                    })
                };
            l(t.wc, "white"), l(t.bc, "black")
        },
        h = (e, t) => ["white", "black"].forEach((s => {
            const n = $(e).find(".mini-game__clock--" + s).each((function () {
                $(this).clock("destroy")
            }));
            n.data("managed") || n.replaceWith(`<span class="mini-game__result">${t?t==s[0]?1:0:"ВЅ"}</span>`)
        }));
    var d = Object.freeze({
        __proto__: null,
        init: r,
        initAll: c,
        update: l,
        finish: h
    });
    const u = [60, 3600, 86400, 604800, 2628e3, 31536e3],
        p = [...u];
    p[2] *= 2;
    const m = e => e instanceof Date ? e : new Date(isNaN(e) ? e : parseInt(e)),
        g = e => {
            let t = 0;
            e < 0 && (t = 1, e = -e);
            const s = e;
            let n = 0;
            for (; n < 6 && e >= p[n]; n++);
            return n > 0 && (e /= u[n - 1]), n *= 2, (e = Math.floor(e)) > (0 === n ? 9 : 1) && (n += 1), lichess.timeagoLocale(e, n, s)[t].replace("%s", e)
        };
    let f;
    const b = e => g((Date.now() - m(e).getTime()) / 1e3),
        v = e => requestAnimationFrame((() => {
            const t = Date.now();
            [].slice.call((e || document).getElementsByClassName("timeago"), 0, 99).forEach((e => {
                const s = e.classList,
                    n = s.contains("abs"),
                    i = s.contains("set");
                if (e.lichessDate = e.lichessDate || m(e.getAttribute("datetime")), !i) {
                    const t = (f = f || (window.Intl && Intl.DateTimeFormat ? new Intl.DateTimeFormat(document.documentElement.lang, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }).format : e => e.toLocaleString()))(e.lichessDate);
                    n ? e.textContent = t : e.setAttribute("title", t), s.add("set"), (n || s.contains("once")) && s.remove("timeago")
                }
                if (!n) {
                    const n = (t - e.lichessDate.getTime()) / 1e3;
                    e.textContent = g(n), Math.abs(n) > 9999 && s.remove("timeago")
                }
            }))
        })),
        w = e => {
            v(), setTimeout((() => w(1.1 * e)), e)
        };
    var y = t((function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.prop = t.notEmpty = t.isEmpty = t.notNull = t.defined = void 0;
            t.defined = e => void 0 !== e;
            t.notNull = e => null != e;
            t.isEmpty = e => !e || 0 === e.length;
            t.notEmpty = e => !t.isEmpty(e);
            t.prop = e => {
                let s = e;
                return function (e) {
                    return t.defined(e) && (s = e), s
                }
            }
        })),
        k = t((function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formToXhr = t.url = t.form = t.script = t.textRaw = t.text = t.json = t.xhrHeader = t.defaultInit = void 0;
            const s = {
                Accept: "application/vnd.lichess.v5+json"
            };
            t.defaultInit = {
                cache: "no-cache",
                credentials: "same-origin"
            }, t.xhrHeader = {
                "X-Requested-With": "XMLHttpRequest"
            };
            t.json = (e, n = {}) => fetch(e, Object.assign(Object.assign(Object.assign({}, t.defaultInit), {
                headers: Object.assign(Object.assign({}, s), t.xhrHeader)
            }), n)).then((e => {
                if (e.ok) return e.json();
                throw e.statusText
            }));
            t.text = (e, s = {}) => t.textRaw(e, s).then((e => {
                if (e.ok) return e.text();
                throw e.statusText
            }));
            t.textRaw = (e, s = {}) => fetch(e, Object.assign(Object.assign(Object.assign({}, t.defaultInit), {
                headers: Object.assign({}, t.xhrHeader)
            }), s));
            t.script = e => new Promise(((t, s) => {
                const n = document.body.getAttribute("data-nonce"),
                    i = document.createElement("script");
                n && i.setAttribute("nonce", n), i.onload = t, i.onerror = s, i.src = e, document.head.append(i)
            }));
            t.form = e => {
                const t = new FormData;
                for (const s of Object.keys(e)) t.append(s, e[s]);
                return t
            };
            t.url = (e, t) => {
                const s = new URLSearchParams;
                for (const e of Object.keys(t)) y.defined(t[e]) && s.append(e, t[e]);
                const n = s.toString();
                return n ? `${e}?${n}` : e
            };
            t.formToXhr = e => {
                const s = e.getAttribute("action");
                return s ? t.text(s, {
                    method: e.method,
                    body: new FormData(e)
                }) : Promise.reject(`Form has no action: ${e}`)
            }
        }));
    const S = (e, t) => {
            window.requestIdleCallback ? window.requestIdleCallback(e, t && {
                timeout: t
            }) : requestAnimationFrame(e)
        },
        C = e => /[&<>"']/.test(e) ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e;
    let A;
    const _ = () => {
            A && clearTimeout(A), A = void 0, $("#announce").remove()
        },
        O = e => {
            _(), e.msg && ($("body").append('<div id="announce" class="announce">' + C(e.msg) + (e.date ? '<time class="timeago" datetime="' + e.date + '"></time>' : "") + '<div class="actions"><a class="close">X</a></div></div>').find("#announce .close").on("click", _), A = setTimeout(_, e.date ? new Date(e.date).getTime() - Date.now() : 5e3), e.date && lichess.contentLoaded())
        };

    function T(e, t, s) {
        const n = ["mousemove", "touchstart"];
        let i = !1,
            o = !0,
            a = performance.now();
        const r = () => {
                o || s(), o = !0, a = performance.now(), c()
            },
            c = () => {
                i && (n.forEach((e => document.removeEventListener(e, r))), i = !1)
            };
        setInterval((() => {
            o && performance.now() - a > e && (t(), o = !1), i || (n.forEach((e => document.addEventListener(e, r))), i = !0)
        }), 1e4)
    }
    let x;
    try {
        const e = window.crypto.getRandomValues(new Uint8Array(9));
        x = btoa(String.fromCharCode(...e)).replace(/[/+]/g, "_")
    } catch (e) {
        x = Math.random().toString(36).slice(2, 12)
    }
    const L = x;
    let M = !1;
    const E = e => {
            let t;
            if ("string" == typeof e) t = e;
            else if (t = e.url, e.cookie) {
                const t = document.domain.replace(/^.+(\.[^.]+\.[^.]+)$/, "$1"),
                    s = [encodeURIComponent(e.cookie.name) + "=" + e.cookie.value, "; max-age=" + e.cookie.maxAge, "; path=/", "; domain=" + t].join("");
                document.cookie = s
            }
            const s = "//" + location.host + "/" + t.replace(/^\//, "");
            M = s, location.href = s
        },
        j = {
            expected: !1
        },
        I = () => {
            M || (j.expected = !0, lichess.socket.disconnect(), location.hash ? location.reload() : location.href = location.href)
        },
        D = e => {
            const t = {
                get: t => e.getItem(t),
                set: (t, s) => e.setItem(t, s),
                fire: (t, s) => e.setItem(t, JSON.stringify({
                    sri: L,
                    nonce: Math.random(),
                    value: s
                })),
                remove: t => e.removeItem(t),
                make: s => ({
                    get: () => t.get(s),
                    set: e => t.set(s, e),
                    fire: e => t.fire(s, e),
                    remove: () => t.remove(s),
                    listen: t => window.addEventListener("storage", (n => {
                        if (n.key !== s || n.storageArea !== e || null === n.newValue) return;
                        let i;
                        try {
                            i = JSON.parse(n.newValue)
                        } catch (e) {
                            return
                        }(null == i ? void 0 : i.sri) && i.sri !== L && t(i)
                    }))
                }),
                makeBoolean: e => ({
                    get: () => "1" == t.get(e),
                    set: s => t.set(e, s ? "1" : "0"),
                    toggle: () => t.set(e, "1" == t.get(e) ? "0" : "1")
                })
            };
            return t
        },
        P = D(window.localStorage),
        q = D(window.sessionStorage);
    class N {
        constructor(e, t, s = {}) {
            this.url = e, this.pubsub = lichess.pubsub, this.ackable = new U(((e, t, s) => this.send(e, t, s))), this.lastPingTime = performance.now(), this.pongCount = 0, this.averageLag = 0, this.tryOtherUrl = !1, this.autoReconnect = !0, this.nbConnects = 0, this.storage = P.make("surl15"), this.sign = e => {
                this._sign = e, this.ackable.sign(e)
            }, this.connect = () => {
                this.destroy(), this.autoReconnect = !0;
                const e = k.url(this.options.protocol + "//" + this.baseUrl() + this.url, Object.assign(Object.assign({}, this.settings.params), {
                    v: !1 === this.version ? void 0 : this.version
                }));
                this.debug("connection attempt to " + e);
                try {
                    const t = this.ws = new WebSocket(e);
                    t.onerror = e => this.onError(e), t.onclose = () => {
                        this.pubsub.emit("socket.close"), this.autoReconnect && (this.debug("Will autoreconnect in " + this.options.autoReconnectDelay), this.scheduleConnect(this.options.autoReconnectDelay))
                    }, t.onopen = () => {
                        this.debug("connected to " + e), this.onSuccess();
                        const t = document.body.classList;
                        t.remove("offline"), t.add("online"), t.toggle("reconnected", this.nbConnects > 1), this.pingNow(), this.pubsub.emit("socket.open"), this.ackable.resend()
                    }, t.onmessage = e => {
                        if (0 == e.data) return this.pong();
                        const t = JSON.parse(e.data);
                        "n" === t.t && this.pong(), this.handle(t)
                    }
                } catch (e) {
                    this.onError(e)
                }
                this.scheduleConnect(this.options.pingMaxLag)
            }, this.send = (e, t, s = {}, n = !1) => {
                const i = {
                    t: e
                };
                void 0 !== t && (s.withLag && (t.l = Math.round(this.averageLag)), s.millis >= 0 && (t.s = Math.round(.1 * s.millis).toString(36)), i.d = t), s.ackable && (i.d = i.d || {}, this.ackable.register(e, i.d));
                const o = JSON.stringify(i);
                if ("racerScore" != e || s.sign == this._sign) {
                    if ("move" == e && s.sign != this._sign) {
                        let e;
                        try {
                            e = (new Error).stack.split("\n").join(" / ").replace(/\s+/g, " ")
                        } catch (t) {
                            e = `${t.message} ${navigator.userAgent}`
                        }
                        e.includes("round.nvui") || setTimeout((() => this.send("rep", {
                            n: `soc: ${o} ${e}`
                        })), 1e4)
                    }
                    this.debug("send " + o);
                    try {
                        this.ws.send(o)
                    } catch (t) {
                        n || setTimeout((() => this.send(e, i.d, s, !0)), 1e3)
                    }
                }
            }, this.scheduleConnect = e => {
                this.options.idle && (e = 1e4 + 10 * Math.random() * 1e3), clearTimeout(this.pingSchedule), clearTimeout(this.connectSchedule), this.connectSchedule = setTimeout((() => {
                    document.body.classList.add("offline"), document.body.classList.remove("online"), this.tryOtherUrl = !0, this.connect()
                }), e)
            }, this.schedulePing = e => {
                clearTimeout(this.pingSchedule), this.pingSchedule = setTimeout(this.pingNow, e)
            }, this.pingNow = () => {
                clearTimeout(this.pingSchedule), clearTimeout(this.connectSchedule);
                const e = this.options.isAuth && this.pongCount % 8 == 2 ? JSON.stringify({
                    t: "p",
                    l: Math.round(.1 * this.averageLag)
                }) : "null";
                try {
                    this.ws.send(e), this.lastPingTime = performance.now()
                } catch (e) {
                    this.debug(e, !0)
                }
                this.scheduleConnect(this.options.pingMaxLag)
            }, this.computePingDelay = () => this.options.pingDelay + (this.options.idle ? 1e3 : 0), this.pong = () => {
                clearTimeout(this.connectSchedule), this.schedulePing(this.computePingDelay());
                const e = Math.min(performance.now() - this.lastPingTime, 1e4);
                this.pongCount++;
                const t = this.pongCount > 4 ? .1 : 1 / this.pongCount;
                this.averageLag += t * (e - this.averageLag), this.pubsub.emit("socket.lag", this.averageLag)
            }, this.handle = e => {
                if (e.v && !1 !== this.version) {
                    if (e.v <= this.version) return void this.debug("already has event " + e.v);
                    if (e.v > this.version + 1) return I();
                    this.version = e.v
                }
                switch (e.t || !1) {
                    case !1:
                        break;
                    case "resync":
                        I();
                        break;
                    case "ack":
                        this.ackable.onServerAck(e.d);
                        break;
                    default:
                        this.settings.receive && this.settings.receive(e.t, e.d) || (this.pubsub.emit("socket.in." + e.t, e.d, e), this.settings.events[e.t] && this.settings.events[e.t](e.d || null, e))
                }
            }, this.debug = (e, t = !1) => {
                (t || this.options.debug) && console.debug(e)
            }, this.destroy = () => {
                clearTimeout(this.pingSchedule), clearTimeout(this.connectSchedule), this.disconnect(), this.ws = void 0
            }, this.disconnect = () => {
                const e = this.ws;
                e && (this.debug("Disconnect"), this.autoReconnect = !1, e.onerror = e.onclose = e.onopen = e.onmessage = () => {}, e.close())
            }, this.onError = e => {
                this.options.debug = !0, this.debug("error: " + JSON.stringify(e)), this.tryOtherUrl = !0, clearTimeout(this.pingSchedule)
            }, this.onSuccess = () => {
                if (this.nbConnects++, 1 == this.nbConnects) {
                    let e;
                    N.resolveFirstConnect(this.send), T(6e5, (() => {
                        this.options.idle = !0, e = setTimeout(this.destroy, 72e5)
                    }), (() => {
                        this.options.idle = !1, this.ws ? clearTimeout(e) : location.reload()
                    }))
                }
            }, this.baseUrl = () => {
                const e = document.body.getAttribute("data-socket-domains").split(",");
                let t = this.storage.get();
                return t && !this.tryOtherUrl || (t = e[Math.floor(Math.random() * e.length)], this.storage.set(t)), t
            }, this.pingInterval = () => this.computePingDelay() + this.averageLag, this.getVersion = () => this.version, this.settings = {
                receive: s.receive,
                events: s.events || {},
                params: Object.assign(Object.assign({}, N.defaultParams), s.params || {})
            }, this.options = Object.assign(Object.assign({}, N.defaultOptions), s.options || {}), this.version = t, this.pubsub.on("socket.send", this.send), window.addEventListener("unload", this.destroy), this.connect()
        }
    }
    N.defaultOptions = {
        idle: !1,
        pingMaxLag: 9e3,
        pingDelay: 2500,
        autoReconnectDelay: 3500,
        protocol: "https:" === location.protocol ? "wss:" : "ws:",
        isAuth: document.body.hasAttribute("user")
    }, N.defaultParams = {
        sri: L
    }, N.firstConnect = new Promise((e => {
        N.resolveFirstConnect = e
    }));
    class U {
        constructor(e) {
            this.send = e, this.currentId = 1, this.messages = [], this.sign = e => this._sign = e, this.resend = () => {
                const e = performance.now() - 2500;
                this.messages.forEach((t => {
                    t.at < e && this.send(t.t, t.d, {
                        sign: this._sign
                    })
                }))
            }, this.register = (e, t) => {
                t.a = this.currentId++, this.messages.push({
                    t: e,
                    d: t,
                    at: performance.now()
                })
            }, this.onServerAck = e => {
                this.messages = this.messages.filter((t => t.d.a !== e))
            }, setInterval(this.resend, 1200)
        }
    }
    const R = (e, t = {}) => {
            const s = (t = t || {}).sameDomain ? "" : document.body.getAttribute("data-asset-url"),
                n = t.version || document.body.getAttribute("data-asset-version");
            return s + "/assets" + (t.noVersion ? "" : "/_" + n) + "/" + e
        },
        F = new Map,
        H = e => {
            if (!F.has(e)) {
                F.set(e, !0);
                const t = document.createElement("link");
                t.rel = "stylesheet", t.href = R(e), document.head.append(t)
            }
        },
        V = e => H(`css/${e}.${$("body").data("theme")}.${$("body").data("dev")?"dev":"min"}.css`),
        W = e => `compiled/${e}${$("body").data("dev")?"":".min"}.js`,
        B = new Map,
        J = (e, t = {}) => (B.has(e) || B.set(e, k.script(R(e, t))), B.get(e)),
        z = e => J(W(e)),
        G = () => (V("complete"), z("userComplete").then((e => window.UserComplete))),
        X = () => (H("vendor/hopscotch/dist/css/hopscotch.min.css"), J("vendor/hopscotch/dist/js/hopscotch.min.js", {
            noVersion: !0
        })),
        K = e => new Promise((t => requestAnimationFrame((() => {
            e.loadCss = V, t(window.LichessChat(document.querySelector(".mchat"), e))
        }))));

    function Z(e, t) {
        return "always" === t || !P.get(e) && (P.set(e, "1"), !0)
    }
    const Q = '<div class="spinner"><svg viewBox="0 0 40 40"><circle cx=20 cy=20 r=18 fill="none"></circle></svg></div>',
        Y = e => {
            var t;
            return null === (t = document.querySelector(".crosstable")) || void 0 === t ? void 0 : t.contains(e)
        };

    function ee(e, t) {
        return function (s) {
            const n = ($(s).data("href") || s.href).replace(/\?.+$/, "");
            t && t(n), k.text(n + "/mini").then((t => {
                const s = document.getElementById(e);
                s.innerHTML = t, lichess.contentLoaded(s)
            }))
        }
    }
    const te = (e, t) => `<a class="btn-rack__btn" href="${e}" data-icon="${t}"></a>`,
        se = (e, t) => {
            t = t || e.getAttribute("data-pt-pos") || (Y(e) ? "n" : "s"), $(e).removeClass("ulpt").powerTip({
                preRender: ee("powerTip", (t => {
                    const s = t.substr(3),
                        n = $(e).data("name") || $(e).html();
                    $("#powerTip").html('<div class="upt__info"><div class="upt__info__top"><span class="user-link offline">' + n + '</span></div></div><div class="upt__actions btn-rack">' + te("/@/" + s + "/tv", "1") + te("/inbox/new?user=" + s, "c") + te("/?user=" + s + "#friend", "U") + '<a class="btn-rack__btn relation-button" disabled></a></div>')
                })),
                placement: t
            })
        };

    function ne(e) {
        $(e).removeClass("glpt").powerTip({
            preRender: ee("miniGame", (() => Q)),
            placement: Y(e) ? "n" : "w",
            popupId: "miniGame"
        })
    }

    function ie(e, t, s) {
        "ontouchstart" in window || (s(e), $.powerTip.show(e, t))
    }

    function oe(e, t, s) {
        S((() => Array.prototype.forEach.call(e.querySelectorAll(t), (e => s(e)))), 800)
    }
    const ae = {
            watchMouse() {
                document.body.addEventListener("mouseover", (e => {
                    const t = e.target,
                        s = t.classList;
                    s.contains("ulpt") ? ie(t, e, se) : s.contains("glpt") && ie(t, e, ne)
                }))
            },
            manualGameIn(e) {
                oe(e, ".glpt", ne)
            },
            manualGame: ne,
            manualUser: se,
            manualUserIn(e) {
                oe(e, ".ulpt", se)
            }
        },
        re = (e, t) => {
            const n = $[e] = function (t, s) {
                const n = this;
                n.element = $(s), s[e] = this, n.options = t, n._create()
            };
            n.prototype = t, $.fn[e] = function (t) {
                const i = Array.prototype.slice.call(arguments, 1);
                return "string" == typeof t ? this.each((function () {
                    const n = s.get(this, e);
                    n && $.isFunction(n[t]) && n[t].apply(n, i)
                })) : this.each((function () {
                    s.get(this, e) || s.set(this, e, new n(t, this))
                })), this
            }
        };
    let ce = [];
    const le = {
            on(e, t) {
                ce[e] = ce[e] || [], ce[e].push(t)
            },
            off(e, t) {
                if (ce[e])
                    for (let s in ce[e])
                        if (ce[e][s] === t) {
                            ce[e].splice(s);
                            break
                        }
            },
            emit(e, ...t) {
                if (ce[e])
                    for (let s in ce[e]) ce[e][s].apply(null, t)
            }
        },
        he = e => {
            const t = (e, t) => {
                    if (t.length && e.includes("$s"))
                        for (var s = 1; s < 4; s++) e = e.replace("%" + s + "$s", t[s - 1]);
                    return t.forEach((function (t) {
                        e = e.replace("%s", t)
                    })), e
                },
                s = (e, t) => {
                    const s = e.split(/(%(?:\d\$)?s)/g);
                    for (let e = 1; e <= t.length; e++) {
                        const n = s.indexOf("%" + e + "$s"); - 1 !== n && (s[n] = t[e - 1])
                    }
                    for (let e = 0; e < t.length; e++) {
                        const n = s.indexOf("%s");
                        if (-1 === n) break;
                        s[n] = t[e]
                    }
                    return s
                },
                n = function (s) {
                    const n = e[s];
                    return n ? t(n, Array.prototype.slice.call(arguments, 1)) : s
                };
            return n.plural = function (s, n) {
                const i = `${s}:${lichess.quantity(n)}`,
                    o = e[i] || e[s];
                return o ? t(o, Array.prototype.slice.call(arguments, 1)) : s
            }, n.noarg = t => e[t] || t, n.vdom = function (t) {
                const n = e[t];
                return n ? s(n, Array.prototype.slice.call(arguments, 1)) : [t]
            }, n.vdomPlural = function (t, n) {
                const i = `${t}:${lichess.quantity(n)}`,
                    o = e[i] || e[t];
                return o ? s(o, Array.prototype.slice.call(arguments, 2)) : [t]
            }, n
        },
        de = new class {
            constructor() {
                this.sounds = new Map, this.soundSet = $("body").data("sound-set"), this.speechStorage = P.makeBoolean("speech.enabled"), this.volumeStorage = P.make("sound-volume"), this.baseUrl = R("sound", {
                    version: "_____1"
                }), this.loadOggOrMp3 = (e, t) => this.sounds.set(e, new window.Howl({
                    src: ["ogg", "mp3"].map((e => `${t}.${e}`))
                })), this.loadStandard = (e, t) => {
                    const s = e[0].toUpperCase() + e.slice(1);
                    this.loadOggOrMp3(e, `${this.baseUrl}/${t||this.soundSet}/${s}`)
                }, this.setVolume = this.volumeStorage.set, this.getVolume = () => {
                    const e = parseFloat(this.volumeStorage.get() || "");
                    return e >= 0 ? e : .7
                }, this.enabled = () => "silent" !== this.soundSet, this.speech = e => (void 0 !== e && this.speechStorage.set(e), this.speechStorage.get()), this.say = (e, t = !1, s = !1) => {
                    if (!this.speechStorage.get() && !s) return !1;
                    const n = e.text ? e : new SpeechSynthesisUtterance(e);
                    return n.volume = this.getVolume(), n.lang = "en-US", t && speechSynthesis.cancel(), speechSynthesis.speak(n), !0
                }, this.sayOrPlay = (e, t) => this.say(t) || this.play(e), this.publish = () => le.emit("sound_set", this.soundSet), this.changeSet = e => {
                    this.soundSet = e, this.sounds.clear(), this.publish()
                }, this.set = () => this.soundSet, "music" == this.soundSet && setTimeout(this.publish, 500)
            }
            play(e, t) {
                var s;
                if (!this.enabled()) return;
                let n = this.soundSet;
                if ("music" === n || this.speechStorage.get()) {
                    if (["move", "capture", "check"].includes(e)) return;
                    n = "standard"
                }
                let i = this.sounds.get(e);
                i || (this.loadStandard(e, n), i = this.sounds.get(e));
                const o = () => i.volume(this.getVolume() * (t || 1)).play();
                "suspended" === (null === (s = window.Howler.ctx) || void 0 === s ? void 0 : s.state) ? window.Howler.ctx.resume().then(o): o()
            }
        };
    let ue;

    function pe(e) {
        const t = e.querySelector(".list"),
            s = e.querySelector(".number");
        lichess.pubsub.on("socket.in.crowd", (e => n(e.watchers || e)));
        const n = n => {
            if (ue = n, !n || !n.nb) return e.classList.add("none");
            if (s && (s.textContent = "" + n.nb), n.users && t) {
                const e = n.users.map((e => e ? `<a class="user-link ulpt" href="/@/${e.includes(" ")?e.split(" ")[1]:e}">${e}</a>` : "Anonymous"));
                1 === n.anons ? e.push("Anonymous") : n.anons && e.push("Anonymous (" + n.anons + ")"), t.innerHTML = e.join(", ")
            } else !s && t && (t.innerHTML = `${n.nb} players in the chat`);
            e.classList.remove("none")
        };
        ue && n(ue)
    }
    console.info("Lichess is open source! https://lichess.org/source");
    const me = lichess;

    function ge() {
        var e;
        me.userAnalysis ? ((e = me.userAnalysis).$side = $(".analyse__side").clone(), fe(e)) : (me.study || me.practice || me.relay) && fe(me.study || me.practice || me.relay)
    }

    function fe(e) {
        let t;
        lichess.socket = new N(e.socketUrl || "/analysis/socket/v5", e.socketVersion, {
            receive: (e, s) => t.socketReceive(e, s)
        }), e.socketSend = me.socket.send, t = window.LichessAnalyse.start(e)
    }
    class be {
        constructor(e) {
            this.el = e, this.loaded = !1, this.receive = (e, t) => {
                this.users.clear(), e.forEach(this.insert), t.playing.map((e => this.users.get(e))).filter(y.notNull).forEach((e => e.playing = !0)), t.patrons.map((e => this.users.get(e))).filter(y.notNull).forEach((e => e.patron = !0)), this.repaint()
            }, this.repaint = () => {
                this.loaded && requestAnimationFrame((() => {
                    var e;
                    const t = Array.from(this.users.keys()).sort();
                    this.titleEl.innerHTML = this.trans.plural("nbFriendsOnline", t.length, this.loaded ? `<strong>${t.length}</strong>` : "-"), null === (e = this.el.querySelector(".nobody")) || void 0 === e || e.classList.toggle("none", !!t[0]), this.el.querySelector(".list").innerHTML = t.map((e => this.renderFriend(this.users.get(e)))).join("")
                }))
            }, this.renderFriend = e => {
                const t = `<i class="line${e.patron?" patron":""}"></i>`,
                    s = e.title ? `<span class="utitle"${"BOT"===e.title?" data-bot":""}>${e.title}</span>&nbsp;` : "",
                    n = "/@/" + e.name,
                    i = e.playing ? `<a data-icon="1" class="tv ulpt" data-pt-pos="nw" href="${n}/tv" data-href="${n}"></a>` : "";
                return `<div><a class="user-link ulpt" data-pt-pos="nw" href="${n}">${t}${s}${e.name}</a>${i}</div>`
            }, this.enters = (e, t) => {
                const s = this.insert(e);
                s.playing = t.playing, s.patron = t.patron, this.repaint()
            }, this.leaves = e => {
                this.users.delete(this.getId(e)), this.repaint()
            }, this.playing = e => {
                this.insert(e).playing = !0, this.repaint()
            }, this.stopped_playing = e => {
                this.insert(e).playing = !1, this.repaint()
            }, this.insert = e => {
                const t = this.getId(e);
                return this.users.has(t) || this.users.set(t, this.toFriend(e)), this.users.get(t)
            }, this.getId = e => e.toLowerCase().replace(/^\w+\s/, ""), this.toFriend = e => {
                const t = e.split(" ");
                return {
                    id: t[t.length - 1].toLowerCase(),
                    name: t[t.length - 1],
                    title: t.length > 1 ? t[0] : void 0,
                    playing: !1,
                    patron: !1
                }
            }, this.titleEl = this.el.querySelector(".friend_box_title"), this.titleEl.addEventListener("click", (() => {
                var e;
                null === (e = this.el.querySelector(".content_wrap")) || void 0 === e || e.classList.toggle("none"), this.loaded || (this.loaded = !0, le.emit("socket.send", "following_onlines"))
            })), this.trans = he(JSON.parse(this.el.getAttribute("data-i18n"))), this.users = new Map, le.on("socket.in.following_onlines", this.receive), ["enters", "leaves", "playing", "stopped_playing"].forEach((e => le.on("socket.in.following_" + e, this[e])))
        }
    }! function () {
        const e = window.lichess;
        e.StrongSocket = N, e.requestIdleCallback = S, e.sri = L, e.storage = P, e.tempStorage = q, e.once = Z, e.powertip = ae, e.widget = re, e.spinnerHtml = Q, e.assetUrl = R, e.loadCss = H, e.loadCssPath = V, e.jsModule = W, e.loadScript = J, e.loadModule = z, e.hopscotch = X, e.userComplete = G, e.makeChat = K, e.idleTimer = T, e.pubsub = le, e.unload = j, e.redirect = E, e.reload = I, e.watchers = pe, e.escapeHtml = C, e.announce = O, e.trans = he, e.sound = de, e.miniBoard = o, e.miniGame = d, e.timeago = b, e.contentLoaded = e => le.emit("content-loaded", e)
    }(), lichess.info = {
        date: "2021-04-01T17:06:01+00:00",
        commit: "3085b80",
        message: "show patron icon in topnav"
    }, re("clock", {
        _create: function () {
            this.target = 1e3 * this.options.time + Date.now(), this.options.pause || (this.interval = setInterval(this.render.bind(this), 1e3)), this.render()
        },
        set: function (e) {
            this.options = e, this.target = 1e3 * this.options.time + Date.now(), this.render(), clearInterval(this.interval), e.pause || (this.interval = setInterval(this.render.bind(this), 1e3))
        },
        render: function () {
            document.body.contains(this.element[0]) ? (this.element.text(this.formatMs(this.target - Date.now())), this.element.toggleClass("clock--run", !this.options.pause)) : clearInterval(this.interval)
        },
        pad: e => (e < 10 ? "0" : "") + e,
        formatMs: function (e) {
            const t = new Date(Math.max(0, e + 500)),
                s = t.getUTCHours(),
                n = t.getUTCMinutes(),
                i = t.getUTCSeconds();
            return s > 0 ? s + ":" + this.pad(n) + ":" + this.pad(i) : n + ":" + this.pad(i)
        }
    }), lichess.load.then((() => {
        ge(), requestAnimationFrame((() => {
            n.initAll(), c(), le.on("content-loaded", n.initAll), le.on("content-loaded", c), w(1e3), le.on("content-loaded", v)
        })), S((() => {
            const e = document.getElementById("friend_box");
            e && new be(e);
            const t = document.querySelector(".chat__members");
            if (t && pe(t), $("#main-wrap").on("click", ".autoselect", (function () {
                    this.select()
                })).on("click", "button.copy", (function () {
                    $("#" + $(this).data("rel")).each((function () {
                        this.select()
                    })), document.execCommand("copy"), $(this).attr("data-icon", "E")
                })), $("body").on("click", "a.relation-button", (function () {
                    const e = $(this).addClass("processing").css("opacity", .3);
                    return k.text(this.href, {
                        method: "post"
                    }).then((t => {
                        t.includes("relation-actions") ? e.parent().replaceWith(t) : e.replaceWith(t)
                    })), !1
                })), $(".mselect .button").on("click", (function () {
                    const e = $(this).parent();
                    e.toggleClass("shown"), S((() => {
                        const t = s => {
                            e[0].contains(s.target) || (e.removeClass("shown"), $("html").off("click", t))
                        };
                        $("html").on("click", t)
                    }), 200)
                })), ae.watchMouse(), setTimeout((() => {
                    lichess.socket || (lichess.socket = new N("/socket/v5", !1))
                }), 300), function () {
                    const e = `<div class="initiating">${Q}</div>`,
                        t = e => {
                            const t = document.querySelector(e),
                                s = t && window.getComputedStyle(t).display;
                            return s && "none" != s
                        };
                    "ontouchstart" in window && !window.matchMedia("(max-width: 979px)").matches && $("#topnav > section > a").removeAttr("href"), $("#topnav-toggle").on("change", (e => document.body.classList.toggle("masked", e.target.checked))), $("#top").on("click", "a.toggle", (function () {
                        const e = $(this).parent().toggleClass("shown");
                        return e.siblings(".shown").removeClass("shown"), le.emit("top.toggle." + this.id), setTimeout((() => {
                            const t = s => {
                                var n;
                                (null === (n = e[0]) || void 0 === n ? void 0 : n.contains(s.target)) || (e.removeClass("shown"), $("html").off("click", t))
                            };
                            $("html").on("click", t)
                        }), 10), !1
                    })); {
                        let s, n;
                        const i = $("#challenge-toggle");
                        i.one("mouseover click", (() => o()));
                        const o = function (o) {
                            if (n) return;
                            n = !0;
                            const a = $("#challenge-app").html(e);
                            V("challenge"), z("challenge").then((() => s = window.LichessChallenge(a[0], {
                                data: o,
                                show() {
                                    t("#challenge-app") || i.trigger("click")
                                },
                                setCount(e) {
                                    i.find("span").data("count", e)
                                },
                                pulse() {
                                    i.addClass("pulse")
                                }
                            })))
                        };
                        le.on("socket.in.challenges", (e => {
                            s ? s.update(e) : o(e)
                        })), le.on("challenge-app.open", (() => i.trigger("click")))
                    } {
                        let s, n;
                        const i = $("#notify-toggle"),
                            o = "#notify-app",
                            a = (a, r = !1) => {
                                if (n) return;
                                n = !0;
                                const c = $("#notify-app").html(e);
                                V("notify"), z("notify").then((() => s = window.LichessNotify(c.empty()[0], {
                                    data: a,
                                    incoming: r,
                                    isVisible: () => t(o),
                                    setCount(e) {
                                        i.find("span").data("count", e)
                                    },
                                    show() {
                                        t(o) || i.trigger("click")
                                    },
                                    setNotified() {
                                        lichess.socket.send("notified")
                                    },
                                    pulse() {
                                        i.addClass("pulse")
                                    }
                                })))
                            };
                        i.one("mouseover click", (() => a())).on("click", (() => {
                            "Notification" in window && Notification.requestPermission(), setTimeout((() => {
                                s && t(o) && s.setVisible()
                            }), 200)
                        })), le.on("socket.in.notifications", (e => {
                            s ? s.update(e, !0) : a(e, !0)
                        })), le.on("notify-app.set-read", (e => {
                            s ? s.setMsgRead(e) : a()
                        }))
                    } {
                        let t;
                        $("#top .dasher .toggle").one("mouseover click", (function () {
                            if (t) return;
                            t = !0, $(this).removeAttr("href");
                            const s = $("#dasher_app").html(e),
                                n = $("body").hasClass("playing");
                            V("dasher"), z("dasher").then((() => window.LichessDasher(s.empty()[0], {
                                playing: n
                            })))
                        }))
                    } {
                        const e = $("#clinput");
                        if (!e.length) return;
                        const t = e.find("input");
                        let s = !1;
                        const n = () => {
                            s || (s = !0, z("cli").then((() => window.LichessCli.app(t[0])), (() => s = !1)))
                        };
                        t.on({
                            blur() {
                                t.val(""), $("body").removeClass("clinput")
                            },
                            focus() {
                                n(), $("body").addClass("clinput")
                            }
                        }), e.find("a").on({
                            mouseover: n,
                            click() {
                                $("body").hasClass("clinput") ? t[0].blur() : t[0].focus()
                            }
                        }), window.Mousetrap.bind("/", (() => {
                            t.val("/"), t[0].focus()
                        })).bind("s", (() => t[0].focus()))
                    }
                }(), window.addEventListener("resize", (() => document.body.dispatchEvent(new Event("chessground.resize")))), $(".user-autocomplete").each((function () {
                    const e = !!this.autofocus,
                        t = () => G().then((t => t({
                            input: this,
                            friend: $(this).data("friend"),
                            tag: $(this).data("tag"),
                            focus: e
                        })));
                    e ? t() : $(this).one("focus", t)
                })), window.InfiniteScroll && window.InfiniteScroll(".infinite-scroll"), $("a.delete, input.delete").on("click", (() => confirm("Delete?"))), $("input.confirm, button.confirm").on("click", (function () {
                    return confirm(this.title || "Confirm this action?")
                })), $("#main-wrap").on("click", "a.bookmark", (function () {
                    const e = $(this).toggleClass("bookmarked");
                    k.text(this.href, {
                        method: "post"
                    });
                    const t = (parseInt(e.text(), 10) || 0) + (e.hasClass("bookmarked") ? 1 : -1);
                    return e.find("span").html("" + (t > 0 ? t : "")), !1
                })), window.Mousetrap.bind("esc", (() => {
                    const e = $("#modal-wrap .close");
                    if (e.length) e.trigger("click");
                    else {
                        const e = $(":focus");
                        e.length && e.trigger("blur")
                    }
                })), navigator.userAgent.includes("Edge/") && setTimeout((() => {
                    const e = document.getElementById("piece-sprite");
                    e.href = e.href.replace(".css", ".external.css")
                }), 1e3), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                const e = document.querySelector("meta[name=viewport]");
                e.setAttribute("content", e.getAttribute("content") + ",maximum-scale=1.0")
            }
            "#blind" !== location.hash || $("body").hasClass("blind-mode") || k.text("/toggle-blind-mode", {
                method: "post",
                body: k.form({
                    enable: 1,
                    redirect: "/"
                })
            }).then(I);
            const s = document.body.getAttribute("data-announce");
            s && O(JSON.parse(s)),
                function () {
                    if ("serviceWorker" in navigator && "Notification" in window && "PushManager" in window) {
                        const e = new URL(R(W("serviceWorker"), {
                            sameDomain: !0
                        }), self.location.href);
                        e.searchParams.set("asset-url", document.body.getAttribute("data-asset-url")), document.body.getAttribute("data-dev") && e.searchParams.set("dev", "1");
                        const t = document.body.getAttribute("data-dev") ? "none" : "all";
                        navigator.serviceWorker.register(e.href, {
                            scope: "/",
                            updateViaCache: t
                        }).then((e => {
                            const t = P.make("push-subscribed"),
                                s = document.body.getAttribute("data-vapid");
                            if (s && "granted" == Notification.permission) return e.pushManager.getSubscription().then((n => {
                                const i = parseInt(t.get() || "0", 10) + 432e5 < Date.now(),
                                    o = Uint8Array.from(atob(s), (e => e.charCodeAt(0)));
                                if (!n || i) return e.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: o
                                }).then((e => fetch("/push/subscribe", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(e)
                                }).then((e => {
                                    e.ok ? t.set("" + Date.now()) : console.log("submitting push subscription failed", e.statusText)
                                }))), (e => {
                                    console.log("push subscribe failed", e.message), n && n.unsubscribe()
                                }))
                            }));
                            t.remove()
                        }))
                    }
                }(), le.on("socket.in.redirect", (e => {
                    lichess.unload.expected = !0, lichess.redirect(e)
                })), le.on("socket.in.fen", (e => document.querySelectorAll(".mini-game-" + e.id).forEach((t => l(t, e))))), le.on("socket.in.finish", (e => document.querySelectorAll(".mini-game-" + e.id).forEach((t => h(t, e.win))))), le.on("socket.in.announce", O), le.on("socket.in.tournamentReminder", (e => {
                    if ($("#announce").length || $("body").data("tournament-id") == e.id) return;
                    const t = "/tournament/" + e.id;
                    $("body").append('<div id="announce"><a data-icon="g" class="text" href="' + t + '">' + e.name + '</a><div class="actions"><a class="withdraw text" href="' + t + '/withdraw" data-icon="Z">Pause</a><a class="text" href="' + t + '" data-icon="G">Resume</a></div></div>').find("#announce .withdraw").on("click", (function () {
                        return k.text(this.href, {
                            method: "post"
                        }), $("#announce").remove(), !1
                    }))
                }))
        }), 800)
    }))
}();