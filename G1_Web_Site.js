function hex_md5(a) {
    return binl2hex(core_md5(str2binl(a), a.length * chrsz))
}
function b64_md5(a) {
    return binl2b64(core_md5(str2binl(a), a.length * chrsz))
}
function str_md5(a) {
    return binl2str(core_md5(str2binl(a), a.length * chrsz))
}
function hex_hmac_md5(a, t) {
    return binl2hex(core_hmac_md5(a, t))
}
function b64_hmac_md5(a, t) {
    return binl2b64(core_hmac_md5(a, t))
}
function str_hmac_md5(a, t) {
    return binl2str(core_hmac_md5(a, t))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(a, t) {
    a[t>>5]|=128<<t%32, a[(t + 64>>>9<<4) + 14] = t;
    for (var r = 1732584193, e =- 271733879, i =- 1732584194, s = 271733878, o = 0; o < a.length; o += 16) {
        var n = r, c = e, h = i, l = s;
        r = md5_ff(r, e, i, s, a[o + 0], 7, - 680876936), s = md5_ff(s, r, e, i, a[o + 1], 12, - 389564586), i = md5_ff(i, s, r, e, a[o + 2], 17, 606105819), e = md5_ff(e, i, s, r, a[o + 3], 22, - 1044525330), r = md5_ff(r, e, i, s, a[o + 4], 7, - 176418897), s = md5_ff(s, r, e, i, a[o + 5], 12, 1200080426), i = md5_ff(i, s, r, e, a[o + 6], 17, - 1473231341), e = md5_ff(e, i, s, r, a[o + 7], 22, - 45705983), r = md5_ff(r, e, i, s, a[o + 8], 7, 1770035416), s = md5_ff(s, r, e, i, a[o + 9], 12, - 1958414417), i = md5_ff(i, s, r, e, a[o + 10], 17, - 42063), e = md5_ff(e, i, s, r, a[o + 11], 22, - 1990404162), r = md5_ff(r, e, i, s, a[o + 12], 7, 1804603682), s = md5_ff(s, r, e, i, a[o + 13], 12, - 40341101), i = md5_ff(i, s, r, e, a[o + 14], 17, - 1502002290), e = md5_ff(e, i, s, r, a[o + 15], 22, 1236535329), r = md5_gg(r, e, i, s, a[o + 1], 5, - 165796510), s = md5_gg(s, r, e, i, a[o + 6], 9, - 1069501632), i = md5_gg(i, s, r, e, a[o + 11], 14, 643717713), e = md5_gg(e, i, s, r, a[o + 0], 20, - 373897302), r = md5_gg(r, e, i, s, a[o + 5], 5, - 701558691), s = md5_gg(s, r, e, i, a[o + 10], 9, 38016083), i = md5_gg(i, s, r, e, a[o + 15], 14, - 660478335), e = md5_gg(e, i, s, r, a[o + 4], 20, - 405537848), r = md5_gg(r, e, i, s, a[o + 9], 5, 568446438), s = md5_gg(s, r, e, i, a[o + 14], 9, - 1019803690), i = md5_gg(i, s, r, e, a[o + 3], 14, - 187363961), e = md5_gg(e, i, s, r, a[o + 8], 20, 1163531501), r = md5_gg(r, e, i, s, a[o + 13], 5, - 1444681467), s = md5_gg(s, r, e, i, a[o + 2], 9, - 51403784), i = md5_gg(i, s, r, e, a[o + 7], 14, 1735328473), e = md5_gg(e, i, s, r, a[o + 12], 20, - 1926607734), r = md5_hh(r, e, i, s, a[o + 5], 4, - 378558), s = md5_hh(s, r, e, i, a[o + 8], 11, - 2022574463), i = md5_hh(i, s, r, e, a[o + 11], 16, 1839030562), e = md5_hh(e, i, s, r, a[o + 14], 23, - 35309556), r = md5_hh(r, e, i, s, a[o + 1], 4, - 1530992060), s = md5_hh(s, r, e, i, a[o + 4], 11, 1272893353), i = md5_hh(i, s, r, e, a[o + 7], 16, - 155497632), e = md5_hh(e, i, s, r, a[o + 10], 23, - 1094730640), r = md5_hh(r, e, i, s, a[o + 13], 4, 681279174), s = md5_hh(s, r, e, i, a[o + 0], 11, - 358537222), i = md5_hh(i, s, r, e, a[o + 3], 16, - 722521979), e = md5_hh(e, i, s, r, a[o + 6], 23, 76029189), r = md5_hh(r, e, i, s, a[o + 9], 4, - 640364487), s = md5_hh(s, r, e, i, a[o + 12], 11, - 421815835), i = md5_hh(i, s, r, e, a[o + 15], 16, 530742520), e = md5_hh(e, i, s, r, a[o + 2], 23, - 995338651), r = md5_ii(r, e, i, s, a[o + 0], 6, - 198630844), s = md5_ii(s, r, e, i, a[o + 7], 10, 1126891415), i = md5_ii(i, s, r, e, a[o + 14], 15, - 1416354905), e = md5_ii(e, i, s, r, a[o + 5], 21, - 57434055), r = md5_ii(r, e, i, s, a[o + 12], 6, 1700485571), s = md5_ii(s, r, e, i, a[o + 3], 10, - 1894986606), i = md5_ii(i, s, r, e, a[o + 10], 15, - 1051523), e = md5_ii(e, i, s, r, a[o + 1], 21, - 2054922799), r = md5_ii(r, e, i, s, a[o + 8], 6, 1873313359), s = md5_ii(s, r, e, i, a[o + 15], 10, - 30611744), i = md5_ii(i, s, r, e, a[o + 6], 15, - 1560198380), e = md5_ii(e, i, s, r, a[o + 13], 21, 1309151649), r = md5_ii(r, e, i, s, a[o + 4], 6, - 145523070), s = md5_ii(s, r, e, i, a[o + 11], 10, - 1120210379), i = md5_ii(i, s, r, e, a[o + 2], 15, 718787259), e = md5_ii(e, i, s, r, a[o + 9], 21, - 343485551), r = safe_add(r, n), e = safe_add(e, c), i = safe_add(i, h), s = safe_add(s, l)
    }
    return Array(r, e, i, s)
}
function md5_cmn(a, t, r, e, i, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, a), safe_add(e, s)), i), r)
}
function md5_ff(a, t, r, e, i, s, o) {
    return md5_cmn(t & r|~t & e, a, t, i, s, o)
}
function md5_gg(a, t, r, e, i, s, o) {
    return md5_cmn(t & e | r&~e, a, t, i, s, o)
}
function md5_hh(a, t, r, e, i, s, o) {
    return md5_cmn(t^r^e, a, t, i, s, o)
}
function md5_ii(a, t, r, e, i, s, o) {
    return md5_cmn(r^(t|~e), a, t, i, s, o)
}
function core_hmac_md5(a, t) {
    var r = str2binl(a);
    r.length > 16 && (r = core_md5(r, a.length * chrsz));
    for (var e = Array(16), i = Array(16), s = 0; 16 > s; s++)
        e[s] = 909522486^r[s], i[s] = 1549556828^r[s];
    var o = core_md5(e.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(i.concat(o), 640)
}
function safe_add(a, t) {
    var r = (65535 & a) + (65535 & t), e = (a>>16) + (t>>16) + (r>>16);
    return e<<16 | 65535 & r
}
function bit_rol(a, t) {
    return a<<t | a>>>32 - t
}
function str2binl(a) {
    for (var t = Array(), r = (1<<chrsz) - 1, e = 0; e < a.length * chrsz; e += chrsz)
        t[e>>5]|=(a.charCodeAt(e / chrsz) & r)<<e%32;
    return t
}
function binl2str(a) {
    for (var t = "", r = (1<<chrsz) - 1, e = 0; e < 32 * a.length; e += chrsz)
        t += String.fromCharCode(a[e>>5]>>>e%32 & r);
    return t
}
function binl2hex(a) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", e = 0; e < 4 * a.length; e++)
        r += t.charAt(a[e>>2]>>e%4 * 8 + 4 & 15) + t.charAt(a[e>>2]>>e%4 * 8 & 15);
    return r
}
function binl2b64(a) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "", e = 0; e < 4 * a.length; e += 3)
        for (var i = (a[e>>2]>>8 * (e%4) & 255)<<16 | (a[e + 1>>2]>>8 * ((e + 1)%4) & 255)<<8 | a[e + 2>>2]>>8 * ((e + 2)%4) & 255, s = 0; 4 > s; s++)
            r += 8 * e + 6 * s > 32 * a.length ? b64pad : t.charAt(i>>6 * (3 - s) & 63);
    return r
}
"undefined" == typeof console && (console = {
    log: function(a) {},
    debug: function(a) {}
});
var Gravatar = {
    profile_stack: {},
    profile_map: {},
    overTimeout: !1,
    outTimeout: !1,
    stopOver: !1,
    active_grav: !1,
    active_hash: !1,
    active_id: !1,
    active_grav_clone: !1,
    profile_cb: null,
    stats_queue: [],
    throbber: null,
    has_bg: !1,
    disabled: !1,
    url_prefix: "http://en",
    disable: function() {
        Gravatar.disabled=!0, Gravatar.hide_card();
        var a = new Date(2100, 1, 1, 1, 1, 1);
        Gravatar.stat("disable"), - 1 == window.location.host.search(/wordpress.com/i) ? document.cookie = "nohovercard=1; expires=" + a.toUTCString() + ";" : document.cookie = "nohovercard=1; expires=" + a.toUTCString() + "; domain=.wordpress.com; path=/"
    },
    mouseOut: function(a) {
        a.stopImmediatePropagation(), Gravatar.stopOver=!0, Gravatar.outTimeout = setTimeout(function() {
            Gravatar.hide_card()
        }, 300)
    },
    init: function(a, t) {
        var r, e, i = document.cookie.split(";");
        for (r = 0; r < i.length; r++) {
            for (e = i[r]; " " == e.charAt(0);)
                e = e.substring(1, e.length);
            if (0 == e.indexOf("nohovercard=1"))
                return 
        }
        "https:" == window.location.protocol && (this.url_prefix = "https://secure"), this.attach_profiles(a, t), this.add_card_css(), jQuery("body").on("mouseenter.gravatar mouseleave.gravatar", "img.grav-hashed", function(a) {
            if (!Gravatar.disabled) {
                if (a.preventDefault(), a.stopPropagation(), "mouseleave" == a.type || "mouseout" == a.type)
                    return Gravatar.mouseOut.call(this, a);
                Gravatar.stopOver=!1, Gravatar.active_id = jQuery(this).attr("id"), Gravatar.active_hash = Gravatar.active_id.split("-")[1], Gravatar.untilt_gravatar(), clearTimeout(Gravatar.overTimeout), !1 !== Gravatar.profile_map["g" + Gravatar.active_hash] && (Gravatar.stat("hover"), clearTimeout(Gravatar.outTimeout), Gravatar.tilt_gravatar(), Gravatar.fetch_profile_by_hash(Gravatar.active_hash, Gravatar.active_id), Gravatar.overTimeout = setTimeout(function() {
                    Gravatar.show_card()
                }, 600))
            }
        }), jQuery("body").on("mouseenter.gravatar mouseleave.gravatar", "div.gcard, img.grav-clone", function(a) {
            Gravatar.disabled || (a.preventDefault(), a.stopPropagation(), "mouseenter" == a.type || "mouseover" == a.type ? (Gravatar.stopOver=!1, clearTimeout(Gravatar.outTimeout)) : Gravatar.mouseOut.call(this, a))
        }), jQuery(window).bind("scroll", function() {
            Gravatar.active_hash.length && Gravatar.hide_card()
        })
    },
    attach_profiles: function(a, t) {
        setInterval(Gravatar.send_stats, 3e3), a = "undefined" == typeof a ? "body" : a, t && "string" == typeof t && jQuery(t).addClass("no-grav"), jQuery(a + ' img[src*="gravatar.com/avatar"]').not(".no-grav, .no-grav img").each(function() {
            if (hash = Gravatar.extract_hash(this), uniq = 0, jQuery("#grav-" + hash + "-" + uniq).length)
                for (; jQuery("#grav-" + hash + "-" + uniq).length;)
                    uniq++;
            var a = jQuery(this).attr("id", "grav-" + hash + "-" + uniq).attr("title", "").removeAttr("title");
            a.parent("a").size() && a.parent("a").attr("title", "").removeAttr("title"), a.addClass("grav-hashed"), (a.parents("#comments, .comments, #commentlist, .commentlist, .grav-hijack").size() ||!a.parents("a:first").size()) && a.addClass("grav-hijack")
        })
    },
    show_card: function() {
        if (!Gravatar.stopOver) {
            if (dom_id = this.profile_map["g" + Gravatar.active_hash], jQuery(".gcard").hide(), "fetching" == this.profile_stack["g" + Gravatar.active_hash])
                return Gravatar.show_throbber(), this.listen(Gravatar.active_hash, "show_card"), void Gravatar.stat("wait");
            if ("undefined" == typeof this.profile_stack["g" + Gravatar.active_hash])
                return Gravatar.show_throbber(), this.listen(Gravatar.active_hash, "show_card"), void this.fetch_profile_by_hash(Gravatar.active_hash, dom_id);
            Gravatar.stat("show"), Gravatar.hide_throbber(), jQuery("#profile-" + this.active_hash).length || this.build_card(this.active_hash, this.profile_stack["g" + this.active_hash]), this.render_card(this.active_grav, "profile-" + this.active_hash)
        }
    },
    hide_card: function() {
        clearTimeout(Gravatar.overTimeout), this.untilt_gravatar(), jQuery("div.gcard").filter("#profile-" + this.active_hash).fadeOut(120, function() {
            jQuery("img.grav-large").stop().remove()
        }).end().not("#profile-" + this.active_hash).hide()
    },
    render_card: function(a, t) {
        var r = jQuery("#" + t).stop(), e = a, i = e.offset();
        if (null != i) {
            var s = e.width(), o = e.height(), n = 5 + .4 * s, c = r.width(), h = r.height();
            c == jQuery(window).width() && (c = 400, h = 200);
            var l = i.left - 17, d = i.top - 7, f = "pos-right";
            i.left + s + n + c > jQuery(window).width() + jQuery(window).scrollLeft() && (l = i.left - c + s + 17, f = "pos-left");
            var v = .25 * o;
            jQuery("#" + t).removeClass("pos-right pos-left").addClass(f).css({
                top: d - v + "px",
                left: l + "px"
            });
            var u = o / 2;
            u > h && (u = h / 2), u > h / 2 - 6 && (u = h / 2 - 6), u > 53 && (u = 53), this.has_bg && (u -= 8), 0 > u && (u = 0);
            var g = {
                height: 2 * o + v + "px"
            };
            "pos-right" == f ? (g.right = "auto", g.left = "-7px", g["background-position"] = "0px " + u + "px") : (g.right = "-10px", g.left = "auto", g["background-position"] = "0px " + u + "px"), jQuery("#" + t + " .grav-cardarrow").css(g)
        }
        r.stop().css({
            opacity: 0
        }).show().animate({
            opacity: 1
        }, 150, "linear", function() {
            jQuery(this).css({
                opacity: "auto"
            }), jQuery(this).stop()
        })
    },
    build_card: function(a, t) {
        Object.size = function(a) {
            var t, r = 0;
            for (t in a)
                a.hasOwnProperty(t) && r++;
            return r
        }, GProfile.init(t);
        var r = GProfile.get("urls"), e = (GProfile.get("photos"), GProfile.get("accounts")), i = 100;
        i += Object.size(r) > 3 ? 90 : 10 + 20 * Object.size(r), Object.size(e) > 0 && (i += 30);
        var s = GProfile.get("aboutMe");
        s = s.replace(/<[^>]+>/gi, ""), s = s.toString().substr(0, i), i == s.length && (s += '<a href="' + GProfile.get("profileUrl") + '" target="_blank">&#8230;</a>');
        var o = "grav-inner";
        Gravatar.my_hash && a == Gravatar.my_hash && (o += " grav-is-user", s.length || (s = "<p>Want a better profile? <a class='grav-edit-profile' href='http://gravatar.com/profiles/edit/?noclose' target='_blank'>Click here</a>.</p>")), s.length && (o += " gcard-about"), name = GProfile.get("displayName"), name.length || (name = GProfile.get("preferredUsername"));
        var n = '<div id="profile-' + a + '" class="gcard grofile"> 						<div class="grav-inner"> 							<div class="grav-grav"> 								<a href="' + GProfile.get("profileUrl") + '" target="_blank"> 									<img src="' + GProfile.get("thumbnailUrl") + '?s=100&r=pg&d=mm" width="100" height="100" /> 								</a> 							</div> 							<div class="grav-info"> 								<h4><a href="' + GProfile.get("profileUrl") + '" target="_blank">' + name + '</a></h4> 								<p class="grav-loc">' + GProfile.get("currentLocation") + '</p> 								<p class="grav-about">' + s + '</p> 								<div class="grav-view-complete-button"> 									<a href="' + GProfile.get("profileUrl") + '" target="_blank" class="grav-view-complete">View Complete Profile</a> 								</div> 								<p class="grav-disable"><a href="#" onclick="Gravatar.disable(); return false">Turn off hovercards</a></p> 							</div> 							<div style="clear:both"></div> 						</div> 						<div class="grav-cardarrow"></div> 						<div class="grav-tag"><a href="http://gravatar.com/" title="Powered by Gravatar.com" target="_blank">&nbsp;</a></div> 					</div>';
        jQuery("body").append(jQuery(n)), jQuery("#profile-" + a + " .grav-inner").addClass(o), this.has_bg=!1;
        var c = GProfile.get("profileBackground");
        if (Object.size(c)) {
            this.has_bg=!0;
            var h = {
                padding: "8px 0"
            };
            c.color && (h["background-color"] = c.color), c.url && (h["background-image"] = "url(" + c.url + ")"), c.position && (h["background-position"] = c.position), c.repeat && (h["background-repeat"] = c.repeat), jQuery("#profile-" + a).css(h), jQuery("#profile-" + a + " .grav-tag").css("top", "8px")
        }
        jQuery("#profile-" + a + " .gcard-links").length || jQuery("#profile-" + a + " .gcard-services").length || jQuery("#profile-" + a + " .grav-rightcol").css({
            width: "auto"
        }), jQuery("#profile-" + a + " .gcard-about").length || jQuery("#profile-" + a + " .grav-leftcol").css({
            width: "auto"
        }), jQuery.isFunction(Gravatar.profile_cb) && Gravatar.loaded_js(a, "profile-" + a), jQuery("#profile-" + a + " a.grav-extra-comments").click(function(a) {
            return Gravatar.stat("click_comment", a)
        }), jQuery("#profile-" + a + " a.grav-extra-likes").click(function(a) {
            return Gravatar.stat("click_like", a)
        }), jQuery("#profile-" + a + " .grav-links a").click(function(a) {
            return Gravatar.stat("click_link", a)
        }), jQuery("#profile-" + a + " .grav-services a").click(function(a) {
            return Gravatar.stat("click_service", a)
        }), jQuery("#profile-" + a + " h4 a, #profile-" + a + " .grav-view-complete, #profile-" + a + " .grav-grav a").click(function(a) {
            return Gravatar.stat("to_profile", a)
        }), jQuery("#profile-" + a + " .grav-tag a").click(function(a) {
            return 3 == a.which || 2 == a.button || a.altKey || a.metaKey || a.ctrlKey ? (a.preventDefault(), a.stopImmediatePropagation(), Gravatar.stat("egg"), Gravatar.whee()) : Gravatar.stat("to_gravatar", a)
        }).bind("contextmenu", function(a) {
            return a.preventDefault(), a.stopImmediatePropagation(), Gravatar.stat("egg"), Gravatar.whee()
        }), jQuery("#profile-" + a + " a.grav-edit-profile").click(function(a) {
            return Gravatar.stat("click_edit_profile", a)
        })
    },
    tilt_gravatar: function() {
        if (this.active_grav = jQuery("img#" + this.active_id), !jQuery("img#grav-clone-" + this.active_hash).length) {
            this.active_grav_clone = this.active_grav.clone().attr("id", "grav-clone-" + this.active_hash).addClass("grav-clone");
            var a = this.active_grav.offset().top + parseInt(this.active_grav.css("padding-top"), 10), t = this.active_grav.offset().left + parseInt(this.active_grav.css("padding-left"), 10), r = {
                "-webkit-box-shadow": "0 0 4px rgba(0,0,0,.4)",
                "-moz-box-shadow": "0 0 4px rgba(0,0,0,.4)",
                "box-shadow": "0 0 4px rgba(0,0,0,.4)",
                "border-width": "2px 2px " + this.active_grav.height() / 5 + "px 2px",
                "border-color": "#fff",
                "border-style": "solid",
                padding: "0px",
                margin: "-2px 0 0 -2px"
            };
            if (this.active_grav.hasClass("grav-hijack"))
                var e = '<a href="http://gravatar.com/' + this.active_hash + '" class="grav-clone-a" target="_blank"></a>';
            else 
                var e = this.active_grav.parents("a:first").clone(!0).empty();
            var i = this.active_grav_clone.css(r).wrap(e).parent().css({
                position: "absolute",
                top: a + "px",
                left: t + "px",
                "z-index": 15,
                border: "none",
                "text-decoration": "none"
            });
            jQuery("body").append(i), this.active_grav_clone.removeClass("grav-hashed")
        }
    },
    untilt_gravatar: function() {
        jQuery("img.grav-clone, a.grav-clone-a").remove(), Gravatar.hide_throbber()
    },
    show_throbber: function() {
        Gravatar.throbber || (Gravatar.throbber = jQuery('<div id="grav-throbber" style="position: absolute; z-index: 16"><img src="' + this.url_prefix + '.gravatar.com/images/throbber.gif" alt="." width="15" height="15" /></div>')), jQuery("body").append(Gravatar.throbber);
        var a = jQuery("#" + Gravatar.active_id).offset();
        Gravatar.throbber.css({
            top: a.top + 2 + "px",
            left: a.left + 1 + "px"
        })
    },
    hide_throbber: function() {
        Gravatar.throbber && Gravatar.throbber.remove()
    },
    fetch_profile_by_email: function(a) {
        return this.fetch_profile_by_hash(this.md5(a.toString().toLowerCase()))
    },
    fetch_profile_by_hash: function(a, t) {
        return this.profile_map["g" + a] = t, this.profile_stack["g" + a] && "object" == typeof this.profile_stack["g" + a] ? this.profile_stack["g" + a] : (this.profile_stack["g" + a] = "fetching", Gravatar.stat("fetch"), void this.load_js(this.url_prefix + ".gravatar.com/" + a + ".json?callback=Gravatar.fetch_profile_callback", function() {
            Gravatar.fetch_profile_error(a, t)
        }))
    },
    fetch_profile_callback: function(a) {
        a && "object" == typeof a && (this.profile_stack["g" + a.entry[0].hash] = a, this.notify(a.entry[0].hash))
    },
    fetch_profile_error: function(a, t) {
        Gravatar.stat("profile_404"), Gravatar.profile_map["g" + a]=!1;
        var r = jQuery("#" + t);
        r.parent('a[href="http://gravatar.com/' + a + '"]').size() && r.unwrap(), t == Gravatar.active_id && Gravatar.hide_card()
    },
    listen: function(t, r) {
        for (this.notify_stack || (this.notify_stack = {}), t = "g" + t, this.notify_stack[t] || (this.notify_stack[t] = []), a = 0; a < this.notify_stack[t].length; a++)
            if (r == this.notify_stack[t][a])
                return;
        this.notify_stack[t][this.notify_stack[t].length] = r
    },
    notify: function(t) {
        for (this.notify_stack || (this.notify_stack = {}), t = "g" + t, this.notify_stack[t] || (this.notify_stack[t] = []), a = 0; a < this.notify_stack[t].length; a++)
            0 != this.notify_stack[t][a] && "undefined" != typeof this.notify_stack[t][a] && (Gravatar[this.notify_stack[t][a]](t.substr(1)), this.notify_stack[t][a]=!1)
    },
    extract_hash: function(a) {
        if (hash = /gravatar.com\/avatar\/([0-9a-f]{32})/.exec(jQuery(a).attr("src")), null != hash && "object" == typeof hash && 2 == hash.length)
            hash = hash[1];
        else {
            if (hash = /gravatar_id\=([0-9a-f]{32})/.exec(jQuery(a).attr("src")), null === hash || "object" != typeof hash || 2 != hash.length)
                return !1;
            hash = hash[1]
        }
        return hash
    },
    load_js: function(a, t) {
        if (this.loaded_scripts || (this.loaded_scripts = []), !this.loaded_scripts[a]) {
            this.loaded_scripts[a]=!0;
            var r = document.createElement("script");
            r.src = a, r.type = "text/javascript", jQuery.isFunction(t) && (r.onerror = t), document.getElementsByTagName("head")[0].appendChild(r)
        }
    },
    loaded_js: function(a, t) {
        Gravatar.profile_cb(a, t)
    },
    add_card_css: function() {
        if (!jQuery("#gravatar-card-css").length) {
            var a, t = jQuery('script[src*="/js/gprofiles."]').attr("src") ||!1, r=!1;
            if (t ? (a = t.replace(/\/js\/gprofiles(?:\.dev)?\.js.*$/, ""), r = t.split("?")[1] ||!1) : a = "//s.gravatar.com", !r)
                var e = new Date, i = new Date(e.getFullYear(), 0, 1), r = Math.ceil(((e - i) / 864e5 + i.getDay() + 1) / 7), r = "ver=" + e.getFullYear().toString() + r.toString();
            a = a.replace(/^(https?\:)?\/\//, ""), a = window.location.protocol + "//" + a, new_css = "<link rel='stylesheet' type='text/css' id='gravatar-card-css' href='" + a + "/css/hovercard.css?" + r + "' />", jQuery("#gravatar-card-services-css").length || (new_css += "<link rel='stylesheet' type='text/css' id='gravatar-card-services-css' href='" + a + "/css/services.css?" + r + "' />"), jQuery("head").append(new_css)
        }
    },
    md5: function(a) {
        return hex_md5(a)
    },
    autofill: function(a, t) {
        a.length&&-1 != a.indexOf("@") && (this.autofill_map = t, hash = this.md5(a.toString().toLowerCase()), "undefined" == typeof this.profile_stack["g" + hash] ? (this.listen(hash, "autofill_data"), this.fetch_profile_by_hash(hash)) : this.autofill_data(hash))
    },
    autofill_data: function(a) {
        GProfile.init(this.profile_stack["g" + a]);
        for (var t in this.autofill_map)
            switch (t) {
            case"url":
                link = GProfile.get("urls"), url = "undefined" != typeof link[0] ? link[0].value : GProfile.get("profileUrl"), jQuery("#" + this.autofill_map[t]).val(url);
                break;
            case"urls":
                for (links = GProfile.get("urls"), links_str = "", l = 0; l < links.length; l++)
                    links_str += links[l].value + "\n";
                    jQuery("#" + this.autofill_map[t]).val(links_str);
                    break;
                default:
                    if (parts = t.split(/\./), parts[1]) {
                        switch (val = GProfile.get(t), parts[0]) {
                        case"ims":
                        case"phoneNumbers":
                            val = val.value;
                            break;
                        case"emails":
                            val = val[0].value;
                        case"accounts":
                            val = val.url
                        }
                        jQuery("#" + this.autofill_map[t]).val(val)
                    } else 
                        jQuery("#" + this.autofill_map[t]).val(GProfile.get(t))
                }
        },
    whee: function() {
        if (!Gravatar.whee.didWhee) {
            Gravatar.whee.didWhee=!0, document.styleSheets[0].addRule ? document.styleSheets[0].addRule(".grav-tag a", "background-position: 22px 100% !important") : jQuery(".grav-tag a").css("background-position", "22px 100%"), jQuery('img[src*="gravatar.com/"]').addClass("grav-whee").css({
                "-webkit-box-shadow": "1px 1px 3px #aaa",
                "-moz-box-shadow": "1px 1px 3px #aaa",
                "box-shadow": "1px 1px 3px #aaa",
                border: "2px white solid"
            });
            var a = 0;
            return setInterval(function() {
                jQuery(".grav-whee").css({
                    "-webkit-transform": "rotate(-" + a + "deg) scale(1.3)",
                    "-moz-transform": "rotate(-" + a + "deg) scale(1.3)",
                    transform: "rotate(-" + a + "deg) scale(1.3)"
                }), a++, 360 == a && (a = 0)
            }, 6), !1
        }
    },
    stat: function(a, t) {
        if (Gravatar.stats_queue.push(a), t) {
            var r = t.metaKey || "_blank" == jQuery(t.currentTarget).attr("target");
            return Gravatar.send_stats(function() {
                r || (document.location = t.currentTarget.href)
            }), r
        }
        Gravatar.stats_queue.length > 10 && Gravatar.send_stats()
    },
    send_stats: function(a) {
        if (document.images) {
            var t = Gravatar.stats_queue;
            if (t.length) {
                var r = new Date;
                Gravatar.stats_queue = [];
                var e = "https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover=" + t.join(",") + "&rand=" + Math.random().toString() + "-" + r.getTime(), i = new Image(1, 1);
                jQuery.isFunction(a) && (i.onload = a), i.src = e
            }
        }
    }
}, GProfile = {
    data: {},
    init: function(a) {
        return "fetching" == a?!1 : "undefined" == typeof a.entry[0]?!1 : void(GProfile.data = a.entry[0])
    },
    get: function(a) {
        if ( - 1 != a.indexOf(".")) {
            if (parts = a.split(/\./), GProfile.data[parts[0]]) {
                if (GProfile.data[parts[0]][parts[1]])
                    return GProfile.data[parts[0]][parts[1]];
                for (i = 0, s = GProfile.data[parts[0]].length; i < s; i++)
                    if (GProfile.data[parts[0]][i].type && parts[1] == GProfile.data[parts[0]][i].type || GProfile.data[parts[0]][i].shortname && parts[1] == GProfile.data[parts[0]][i].shortname || GProfile.data[parts[0]][i].primary && "primary" == parts[1])
                        return GProfile.data[parts[0]][i]
            }
            return ""
        }
        return GProfile.data[a] ? GProfile.data[a] : "url" == a && GProfile.data.urls.length ? GProfile.data.urls[0].value : ""
    }
}, hexcase = 0, b64pad = "", chrsz = 8;

/* Detect-zoom
 * -----------
 * Cross Browser Zoom and Pixel Ratio Detector
 * Version 1.0.4 | Apr 1 2013
 * dual-licensed under the WTFPL and MIT license
 * Maintained by https://github/tombigel
 * Original developer https://github.com/yonran
 */

//AMD and CommonJS initialization copied from https://github.com/zohararad/audio5js
(function (root, ns, factory) {
    "use strict";

    if (typeof (module) !== 'undefined' && module.exports) { // CommonJS
        module.exports = factory(ns, root);
    } else if (typeof (define) === 'function' && define.amd) { // AMD
        define("factory", function () {
            return factory(ns, root);
        });
    } else {
        root[ns] = factory(ns, root);
    }

}(window, 'detectZoom', function () {

    /**
     * Use devicePixelRatio if supported by the browser
     * @return {Number}
     * @private
     */
    var devicePixelRatio = function () {
        return window.devicePixelRatio || 1;
    };

    /**
     * Fallback function to set default values
     * @return {Object}
     * @private
     */
    var fallback = function () {
        return {
            zoom: 1,
            devicePxPerCssPx: 1
        };
    };
    /**
     * IE 8 and 9: no trick needed!
     * TODO: Test on IE10 and Windows 8 RT
     * @return {Object}
     * @private
     **/
    var ie8 = function () {
        var zoom = Math.round((screen.deviceXDPI / screen.logicalXDPI) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * For IE10 we need to change our technique again...
     * thanks https://github.com/stefanvanburen
     * @return {Object}
     * @private
     */
    var ie10 = function () {
        var zoom = Math.round((document.documentElement.offsetHeight / window.innerHeight) * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Mobile WebKit
     * the trick: window.innerWIdth is in CSS pixels, while
     * screen.width and screen.height are in system pixels.
     * And there are no scrollbars to mess up the measurement.
     * @return {Object}
     * @private
     */
    var webkitMobile = function () {
        var deviceWidth = (Math.abs(window.orientation) == 90) ? screen.height : screen.width;
        var zoom = deviceWidth / window.innerWidth;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Desktop Webkit
     * the trick: an element's clientHeight is in CSS pixels, while you can
     * set its line-height in system pixels using font-size and
     * -webkit-text-size-adjust:none.
     * device-pixel-ratio: http://www.webkit.org/blog/55/high-dpi-web-sites/
     *
     * Previous trick (used before http://trac.webkit.org/changeset/100847):
     * documentElement.scrollWidth is in CSS pixels, while
     * document.width was in system pixels. Note that this is the
     * layout width of the document, which is slightly different from viewport
     * because document width does not include scrollbars and might be wider
     * due to big elements.
     * @return {Object}
     * @private
     */
    var webkit = function () {
        var important = function (str) {
            return str.replace(/;/g, " !important;");
        };

        var div = document.createElement('div');
        div.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
        div.setAttribute('style', important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));

        // The container exists so that the div will be laid out in its own flow
        // while not impacting the layout, viewport size, or display of the
        // webpage as a whole.
        // Add !important and relevant CSS rule resets
        // so that other rules cannot affect the results.
        var container = document.createElement('div');
        container.setAttribute('style', important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));
        container.appendChild(div);

        document.body.appendChild(container);
        var zoom = 1000 / div.clientHeight;
        zoom = Math.round(zoom * 100) / 100;
        document.body.removeChild(container);

        return{
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * no real trick; device-pixel-ratio is the ratio of device dpi / css dpi.
     * (Note that this is a different interpretation than Webkit's device
     * pixel ratio, which is the ratio device dpi / system dpi).
     *
     * Also, for Mozilla, there is no difference between the zoom factor and the device ratio.
     *
     * @return {Object}
     * @private
     */
    var firefox4 = function () {
        var zoom = mediaQueryBinarySearch('min--moz-device-pixel-ratio', '', 0, 10, 20, 0.0001);
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom
        };
    };

    /**
     * Firefox 18.x
     * Mozilla added support for devicePixelRatio to Firefox 18,
     * but it is affected by the zoom level, so, like in older
     * Firefox we can't tell if we are in zoom mode or in a device
     * with a different pixel ratio
     * @return {Object}
     * @private
     */
    var firefox18 = function () {
        return {
            zoom: firefox4().zoom,
            devicePxPerCssPx: devicePixelRatio()
        };
    };

    /**
     * works starting Opera 11.11
     * the trick: outerWidth is the viewport width including scrollbars in
     * system px, while innerWidth is the viewport width including scrollbars
     * in CSS px
     * @return {Object}
     * @private
     */
    var opera11 = function () {
        var zoom = window.top.outerWidth / window.top.innerWidth;
        zoom = Math.round(zoom * 100) / 100;
        return {
            zoom: zoom,
            devicePxPerCssPx: zoom * devicePixelRatio()
        };
    };

    /**
     * Use a binary search through media queries to find zoom level in Firefox
     * @param property
     * @param unit
     * @param a
     * @param b
     * @param maxIter
     * @param epsilon
     * @return {Number}
     */
    var mediaQueryBinarySearch = function (property, unit, a, b, maxIter, epsilon) {
        var matchMedia;
        var head, style, div;
        if (window.matchMedia) {
            matchMedia = window.matchMedia;
        } else {
            head = document.getElementsByTagName('head')[0];
            style = document.createElement('style');
            head.appendChild(style);

            div = document.createElement('div');
            div.className = 'mediaQueryBinarySearch';
            div.style.display = 'none';
            document.body.appendChild(div);

            matchMedia = function (query) {
                style.sheet.insertRule('@media ' + query + '{.mediaQueryBinarySearch ' + '{text-decoration: underline} }', 0);
                var matched = getComputedStyle(div, null).textDecoration == 'underline';
                style.sheet.deleteRule(0);
                return {matches: matched};
            };
        }
        var ratio = binarySearch(a, b, maxIter);
        if (div) {
            head.removeChild(style);
            document.body.removeChild(div);
        }
        return ratio;

        function binarySearch(a, b, maxIter) {
            var mid = (a + b) / 2;
            if (maxIter <= 0 || b - a < epsilon) {
                return mid;
            }
            var query = "(" + property + ":" + mid + unit + ")";
            if (matchMedia(query).matches) {
                return binarySearch(mid, b, maxIter - 1);
            } else {
                return binarySearch(a, mid, maxIter - 1);
            }
        }
    };

    /**
     * Generate detection function
     * @private
     */
    var detectFunction = (function () {
        var func = fallback;
        //IE8+
        if (!isNaN(screen.logicalXDPI) && !isNaN(screen.systemXDPI)) {
            func = ie8;
        }
        // IE10+ / Touch
        else if (window.navigator.msMaxTouchPoints) {
            func = ie10;
        }
        //Mobile Webkit
        else if ('orientation' in window && typeof document.body.style.webkitMarquee === 'string') {
            func = webkitMobile;
        }
        //WebKit
        else if (typeof document.body.style.webkitMarquee === 'string') {
            func = webkit;
        }
        //Opera
        else if (navigator.userAgent.indexOf('Opera') >= 0) {
            func = opera11;
        }
        //Last one is Firefox
        //FF 18.x
        else if (window.devicePixelRatio) {
            func = firefox18;
        }
        //FF 4.0 - 17.x
        else if (firefox4().zoom > 0.001) {
            func = firefox4;
        }

        return func;
    }());


    return ({

        /**
         * Ratios.zoom shorthand
         * @return {Number} Zoom level
         */
        zoom: function () {
            return detectFunction().zoom;
        },

        /**
         * Ratios.devicePxPerCssPx shorthand
         * @return {Number} devicePxPerCssPx level
         */
        device: function () {
            return detectFunction().devicePxPerCssPx;
        }
    });
}));

var wpcom_img_zoomer = {
	zoomed: false,
	timer: null,
	interval: 1000, // zoom polling interval in millisecond

	// Should we apply width/height attributes to control the image size?
	imgNeedsSizeAtts: function( img ) {
		// Do not overwrite existing width/height attributes.
		if ( img.getAttribute('width') !== null || img.getAttribute('height') !== null )
			return false;
		// Do not apply the attributes if the image is already constrained by a parent element.
		if ( img.width < img.naturalWidth || img.height < img.naturalHeight )
			return false;
		return true;
	},

	init: function() {
		var t = this;
		try{
			t.zoomImages();
			t.timer = setInterval( function() { t.zoomImages(); }, t.interval );
		}
		catch(e){
		}
	},

	stop: function() {
		if ( this.timer )
			clearInterval( this.timer );
	},

	getScale: function() {
		var scale = detectZoom.device();
		// Round up to 1.5 or the next integer below the cap.
		if      ( scale <= 1.0 ) scale = 1.0;
		else if ( scale <= 1.5 ) scale = 1.5;
		else if ( scale <= 2.0 ) scale = 2.0;
		else if ( scale <= 3.0 ) scale = 3.0;
		else if ( scale <= 4.0 ) scale = 4.0;
		else                     scale = 5.0;
		return scale;
	},

	shouldZoom: function( scale ) {
		var t = this;
		// Do not operate on hidden frames.
		if ( "innerWidth" in window && !window.innerWidth )
			return false;
		// Don't do anything until scale > 1
		if ( scale == 1.0 && t.zoomed == false )
			return false;
		return true;
	},

	zoomImages: function() {
		var t = this;
		var scale = t.getScale();
		if ( ! t.shouldZoom( scale ) ){
			return;
		}
		t.zoomed = true;
		// Loop through all the <img> elements on the page.
		var imgs = document.getElementsByTagName("img");

		for ( var i = 0; i < imgs.length; i++ ) {
			// Wait for original images to load
			if ( "complete" in imgs[i] && ! imgs[i].complete )
				continue;

			// Skip images that don't need processing.
			var imgScale = imgs[i].getAttribute("scale");
			if ( imgScale == scale || imgScale == "0" )
				continue;

			// Skip images that have already failed at this scale
			var scaleFail = imgs[i].getAttribute("scale-fail");
			if ( scaleFail && scaleFail <= scale )
				continue;

			// Skip images that have no dimensions yet.
			if ( ! ( imgs[i].width && imgs[i].height ) )
				continue;

			// Skip images from Lazy Load plugins
			if ( ! imgScale && imgs[i].getAttribute("data-lazy-src") && (imgs[i].getAttribute("data-lazy-src") !== imgs[i].getAttribute("src")))
				continue;

			if ( t.scaleImage( imgs[i], scale ) ) {
				// Mark the img as having been processed at this scale.
				imgs[i].setAttribute("scale", scale);
			}
			else {
				// Set the flag to skip this image.
				imgs[i].setAttribute("scale", "0");
			}
		}
	},

	scaleImage: function( img, scale ) {
		var t = this;
		var newSrc = img.src;

		// Skip slideshow images
		if ( img.parentNode.className.match(/slideshow-slide/) )
			return false;

		// Scale gravatars that have ?s= or ?size=
		if ( img.src.match( /^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/ ) ) {
			newSrc = img.src.replace( /([?&](s|size)=)(\d+)/, function( $0, $1, $2, $3 ) {
				// Stash the original size
				var originalAtt = "originals",
				originalSize = img.getAttribute(originalAtt);
				if ( originalSize === null ) {
					originalSize = $3;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width/height of the image in CSS pixels
				var size = img.clientWidth;
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(img.clientWidth * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go larger than the service supports
				targetSize = Math.min( targetSize, 512 );
				return $1 + targetSize;
			});
		}

		// Scale resize queries (*.files.wordpress.com) that have ?w= or ?h=
		else if ( img.src.match( /^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/ ) ) {
			if ( img.src.match( /[?&]crop/ ) )
				return false;
			var changedAttrs = {};
			var matches = img.src.match( /([?&]([wh])=)(\d+)/g );
			for ( var i = 0; i < matches.length; i++ ) {
				var lr = matches[i].split( '=' );
				var thisAttr = lr[0].replace(/[?&]/g, '' );
				var thisVal = lr[1];

				// Stash the original size
				var originalAtt = 'original' + thisAttr, originalSize = img.getAttribute( originalAtt );
				if ( originalSize === null ) {
					originalSize = thisVal;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width/height of the image in CSS pixels
				var size = thisAttr == 'w' ? img.clientWidth : img.clientHeight;
				var naturalSize = ( thisAttr == 'w' ? img.naturalWidth : img.naturalHeight );
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(size * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go bigger unless the current one is actually lacking
				if ( scale > img.getAttribute("scale") && targetSize <= naturalSize )
					targetSize = thisVal;
				// Don't try to go bigger if the image is already smaller than was requested
				if ( naturalSize < thisVal )
					targetSize = thisVal;
				if ( targetSize != thisVal )
					changedAttrs[ thisAttr ] = targetSize;
			}
			var w = changedAttrs.w || false;
			var h = changedAttrs.h || false;

			if ( w ) {
				newSrc = img.src.replace(/([?&])w=\d+/g, function( $0, $1 ) {
					return $1 + 'w=' + w;
				});
			}
			if ( h ) {
				newSrc = newSrc.replace(/([?&])h=\d+/g, function( $0, $1 ) {
					return $1 + 'h=' + h;
				});
			}
		}

		// Scale mshots that have width
		else if ( img.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/) ) {
			newSrc = img.src.replace( /([?&]w=)(\d+)/, function($0, $1, $2) {
				// Stash the original size
				var originalAtt = 'originalw', originalSize = img.getAttribute(originalAtt);
				if ( originalSize === null ) {
					originalSize = $2;
					img.setAttribute(originalAtt, originalSize);
					if ( t.imgNeedsSizeAtts( img ) ) {
						// Fix width and height attributes to rendered dimensions.
						img.width = img.width;
						img.height = img.height;
					}
				}
				// Get the width of the image in CSS pixels
				var size = img.clientWidth;
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(size * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go bigger unless the current one is actually lacking
				if ( scale > img.getAttribute("scale") && targetSize <= img.naturalWidth )
					targetSize = $2;
				if ( $2 != targetSize )
					return $1 + targetSize;
				return $0;
			});

			// Update height attribute to match width
			newSrc = newSrc.replace( /([?&]h=)(\d+)/, function($0, $1, $2) {
				if ( newSrc == img.src ) {
					return $0;
				}
				// Stash the original size
				var originalAtt = 'originalh', originalSize = img.getAttribute(originalAtt);
				if ( originalSize === null ) {
					originalSize = $2;
					img.setAttribute(originalAtt, originalSize);
				}
				// Get the height of the image in CSS pixels
				var size = img.clientHeight;
				// Convert CSS pixels to device pixels
				var targetSize = Math.ceil(size * scale);
				// Don't go smaller than the original size
				targetSize = Math.max( targetSize, originalSize );
				// Don't go bigger unless the current one is actually lacking
				if ( scale > img.getAttribute("scale") && targetSize <= img.naturalHeight )
					targetSize = $2;
				if ( $2 != targetSize )
					return $1 + targetSize;
				return $0;
			});
		}

		// Scale simple imgpress queries (s0.wp.com) that only specify w/h/fit
		else if ( img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/) ) {
			var imgpressSafeFunctions = ["zoom", "url", "h", "w", "fit", "filter", "brightness", "contrast", "colorize", "smooth", "unsharpmask"];
			// Search the query string for unsupported functions.
			var qs = RegExp.$3.split('&');
			for ( var q in qs ) {
				q = qs[q].split('=')[0];
				if ( imgpressSafeFunctions.indexOf(q) == -1 ) {
					return false;
				}
			}
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			// Compute new src
			if ( scale == 1 )
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?');
			else
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?zoom=' + scale + '&');
		}

		// Scale LaTeX images or Photon queries (i#.wp.com)
		else if (
			img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/) ||
			img.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/)
		) {
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			// Compute new src
			if ( scale == 1 ) {
				newSrc = img.src.replace(/\?(zoom=[^&]+&)?/, '?');
			} else {
				newSrc = img.src;

				var url_var = newSrc.match( /\?w=(\d+)/ );
				if ( url_var !== null && url_var[1] ) {
					newSrc = newSrc.replace( new RegExp( 'w=' + url_var[1] ), 'w=' + img.width );
				}

				url_var = newSrc.match( /\?h=(\d+)/ );
				if ( url_var !== null && url_var[1] ) {
					newSrc = newSrc.replace( new RegExp( 'h=' + url_var[1] ), 'h=' + img.height );
				}

				var zoom_arg = '&zoom=2';
				if ( !newSrc.match( /\?/ ) ) {
					zoom_arg = '?zoom=2';
				}
				img.setAttribute( 'srcset', newSrc + zoom_arg + ' ' + scale + 'x' );
			}
		}

		// Scale static assets that have a name matching *-1x.png or *@1x.png
		else if ( img.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/) ) {
			// Fix width and height attributes to rendered dimensions.
			img.width = img.width;
			img.height = img.height;
			var currentSize = RegExp.$1, newSize = currentSize;
			if ( scale <= 1 )
				newSize = 1;
			else
				newSize = 2;
			if ( currentSize != newSize )
				newSrc = img.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/, '$1'+newSize+'x.$2$3');
		}

		else {
			return false;
		}

		// Don't set img.src unless it has changed. This avoids unnecessary reloads.
		if ( newSrc != img.src ) {
			// Store the original img.src
			var prevSrc, origSrc = img.getAttribute("src-orig");
			if ( !origSrc ) {
				origSrc = img.src;
				img.setAttribute("src-orig", origSrc);
			}
			// In case of error, revert img.src
			prevSrc = img.src;
			img.onerror = function(){
				img.src = prevSrc;
				if ( img.getAttribute("scale-fail") < scale )
					img.setAttribute("scale-fail", scale);
				img.onerror = null;
			};
			// Finally load the new image
			img.src = newSrc;
		}

		return true;
	}
};

wpcom_img_zoomer.init();
;
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

/*
 * Add thickbox to href & area elements that have a class of .thickbox.
 * Remove the loading indicator when content in an iframe has loaded.
 */
function tb_init(domChunk){
	jQuery( 'body' )
		.on( 'click', domChunk, tb_click )
		.on( 'thickbox:iframe:loaded', function() {
			jQuery( '#TB_window' ).removeClass( 'thickbox-loading' );
		});
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	var $closeBtn;

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window' class='thickbox-loading'></div>");
				jQuery("#TB_overlay").click(tb_remove);
				jQuery( 'body' ).addClass( 'modal-open' );
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");//add loader to the page
		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - original by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no parameters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no parameters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><button type='button' id='TB_closeWindowButton'><span class='screen-reader-text'>"+thickboxL10n.close+"</span><span class='tb-close-icon'></span></button></div></div><iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' allowtransparency='true' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					var load_url = url;
					load_url += -1 === url.indexOf('?') ? '?' : '&';
					jQuery("#TB_ajaxContent").load(load_url += "random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keydown.thickbox', function(e){
				if ( e.which == 27 ){ // close
					tb_remove();
					return false;
				}
			});
		}

		$closeBtn = jQuery( '#TB_closeWindowButton' );
		/*
		 * If the native Close button icon is visible, move focus on the button
		 * (e.g. in the Network Admin Themes screen).
		 * In other admin screens is hidden and replaced by a different icon.
		 */
		if ( $closeBtn.find( '.tb-close-icon' ).is( ':visible' ) ) {
			$closeBtn.focus();
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'}).trigger( 'thickbox:iframe:loaded' );
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery( '#TB_window' ).fadeOut( 'fast', function() {
		jQuery( '#TB_window, #TB_overlay, #TB_HideSelect' ).trigger( 'tb_unload' ).unbind().remove();
		jQuery( 'body' ).trigger( 'thickbox:removed' );
	});
	jQuery( 'body' ).removeClass( 'modal-open' );
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}
;
/* global pm, wpcom_reblog */

var jetpackLikesWidgetQueue = [];
var jetpackLikesWidgetBatch = [];
var jetpackLikesMasterReady = false;

function JetpackLikespostMessage( message, target ) {
	if ( 'string' === typeof message ){
		try {
			message = JSON.parse( message );
		} catch(e) {
			return;
		}
	}

	pm( {
		target: target,
		type: 'likesMessage',
		data: message,
		origin: '*'
	} );
}

function JetpackLikesBatchHandler() {
	var requests = [];
	jQuery( 'div.jetpack-likes-widget-unloaded' ).each( function() {
		if ( jetpackLikesWidgetBatch.indexOf( this.id ) > -1 ) {
			return;
		}
		jetpackLikesWidgetBatch.push( this.id );
		var regex = /like-(post|comment)-wrapper-(\d+)-(\d+)-(\w+)/,
			match = regex.exec( this.id ),
			info;

		if ( ! match || match.length !== 5 ) {
			return;
		}

		info = {
			blog_id: match[2],
			width:   this.width
		};

		if ( 'post' === match[1] ) {
			info.post_id = match[3];
		} else if ( 'comment' === match[1] ) {
			info.comment_id = match[3];
		}

		info.obj_id = match[4];

		requests.push( info );
	});

	if ( requests.length > 0 ) {
		JetpackLikespostMessage( { event: 'initialBatch', requests: requests }, window.frames['likes-master'] );
	}
}

function JetpackLikesMessageListener( event, message ) {
	var allowedOrigin, $container, $list, offset, rowLength, height, scrollbarWidth;

	if ( 'undefined' === typeof event.event ) {
		return;
	}

	// We only allow messages from one origin
	allowedOrigin = window.location.protocol + '//widgets.wp.com';
	if ( allowedOrigin !== message.origin ) {
		return;
	}

	if ( 'masterReady' === event.event ) {
		jQuery( document ).ready( function() {
			jetpackLikesMasterReady = true;

			var stylesData = {
					event: 'injectStyles'
				},
				$sdTextColor = jQuery( '.sd-text-color' ),
				$sdLinkColor = jQuery( '.sd-link-color' );

			if ( jQuery( 'iframe.admin-bar-likes-widget' ).length > 0 ) {
				JetpackLikespostMessage( { event: 'adminBarEnabled' }, window.frames[ 'likes-master' ] );

				stylesData.adminBarStyles = {
					background: jQuery( '#wpadminbar .quicklinks li#wp-admin-bar-wpl-like > a' ).css( 'background' ),
					isRtl: ( 'rtl' === jQuery( '#wpadminbar' ).css( 'direction' ) )
				};
			}

			if ( ! window.addEventListener ) {
				jQuery( '#wp-admin-bar-admin-bar-likes-widget' ).hide();
			}

			stylesData.textStyles = {
				color:          $sdTextColor.css( 'color' ),
				fontFamily:     $sdTextColor.css( 'font-family' ),
				fontSize:       $sdTextColor.css( 'font-size' ),
				direction:      $sdTextColor.css( 'direction' ),
				fontWeight:     $sdTextColor.css( 'font-weight' ),
				fontStyle:      $sdTextColor.css( 'font-style' ),
				textDecoration: $sdTextColor.css('text-decoration')
			};

			stylesData.linkStyles = {
				color:          $sdLinkColor.css('color'),
				fontFamily:     $sdLinkColor.css('font-family'),
				fontSize:       $sdLinkColor.css('font-size'),
				textDecoration: $sdLinkColor.css('text-decoration'),
				fontWeight:     $sdLinkColor.css( 'font-weight' ),
				fontStyle:      $sdLinkColor.css( 'font-style' )
			};

			JetpackLikespostMessage( stylesData, window.frames[ 'likes-master' ] );

			JetpackLikesBatchHandler();

			jQuery( document ).on( 'inview', 'div.jetpack-likes-widget-unloaded', function() {
				jetpackLikesWidgetQueue.push( this.id );
			});
		});
	}

	if ( 'showLikeWidget' === event.event ) {
		jQuery( '#' + event.id + ' .post-likes-widget-placeholder'  ).fadeOut( 'fast', function() {
			jQuery( '#' + event.id + ' .post-likes-widget' ).fadeIn( 'fast', function() {
				JetpackLikespostMessage( { event: 'likeWidgetDisplayed', blog_id: event.blog_id, post_id: event.post_id, obj_id: event.obj_id }, window.frames['likes-master'] );
			});
		});
	}

	if ( 'clickReblogFlair' === event.event ) {
		wpcom_reblog.toggle_reblog_box_flair( event.obj_id );
	}

	if ( 'showOtherGravatars' === event.event ) {
		$container = jQuery( '#likes-other-gravatars' );
		$list = $container.find( 'ul' );

		$container.hide();
		$list.html( '' );

		$container.find( '.likes-text span' ).text( event.total );

		jQuery.each( event.likers, function( i, liker ) {
			var element = jQuery( '<li><a><img /></a></li>' );
			element.addClass( liker.css_class );

			element.find( 'a' ).
				attr({
					href: liker.profile_URL,
					rel: 'nofollow',
					target: '_parent'
				}).
				addClass( 'wpl-liker' );

			element.find( 'img' ).
				attr({
					src: liker.avatar_URL,
					alt: liker.name
				}).
				css({
					width: '30px',
					height: '30px',
					paddingRight: '3px'
				});

			$list.append( element );
		} );

		offset = jQuery( '[name=\'' + event.parent + '\']' ).offset();

		$container.css( 'left', offset.left + event.position.left - 10 + 'px' );
		$container.css( 'top', offset.top + event.position.top - 33 + 'px' );

		rowLength = Math.floor( event.width / 37 );
		height = ( Math.ceil( event.likers.length / rowLength ) * 37 ) + 13;
		if ( height > 204 ) {
			height = 204;
		}

		$container.css( 'height', height + 'px' );
		$container.css( 'width', rowLength * 37 - 7 + 'px' );

		$list.css( 'width', rowLength * 37 + 'px' );

		$container.fadeIn( 'slow' );

		scrollbarWidth = $list[0].offsetWidth - $list[0].clientWidth;
		if ( scrollbarWidth > 0 ) {
			$container.width( $container.width() + scrollbarWidth );
			$list.width( $list.width() + scrollbarWidth );
		}
	}
}

pm.bind( 'likesMessage', JetpackLikesMessageListener );

jQuery( document ).click( function( e ) {
	var $container = jQuery( '#likes-other-gravatars' );

	if ( $container.has( e.target ).length === 0 ) {
		$container.fadeOut( 'slow' );
	}
});

function JetpackLikesWidgetQueueHandler() {
	var $wrapper, wrapperID, found;
	if ( ! jetpackLikesMasterReady ) {
		setTimeout( JetpackLikesWidgetQueueHandler, 500 );
		return;
	}

	if ( jetpackLikesWidgetQueue.length > 0 ) {
		// We may have a widget that needs creating now
		found = false;
		while( jetpackLikesWidgetQueue.length > 0 ) {
			// Grab the first member of the queue that isn't already loading.
			wrapperID = jetpackLikesWidgetQueue.splice( 0, 1 )[0];
			if ( jQuery( '#' + wrapperID ).hasClass( 'jetpack-likes-widget-unloaded' ) ) {
				found = true;
				break;
			}
		}
		if ( ! found ) {
			setTimeout( JetpackLikesWidgetQueueHandler, 500 );
			return;
		}
	} else if ( jQuery( 'div.jetpack-likes-widget-unloaded' ).length > 0 ) {
		// Grab any unloaded widgets for a batch request
		JetpackLikesBatchHandler();

		// Get the next unloaded widget
		wrapperID = jQuery( 'div.jetpack-likes-widget-unloaded' ).first()[0].id;
		if ( ! wrapperID ) {
			// Everything is currently loaded
			setTimeout( JetpackLikesWidgetQueueHandler, 500 );
			return;
		}
	}

	if ( 'undefined' === typeof wrapperID ) {
		setTimeout( JetpackLikesWidgetQueueHandler, 500 );
		return;
	}

	$wrapper = jQuery( '#' + wrapperID );
	$wrapper.find( 'iframe' ).remove();

	if ( $wrapper.hasClass( 'slim-likes-widget' ) ) {
		$wrapper.find( '.post-likes-widget-placeholder' ).after( '<iframe class="post-likes-widget jetpack-likes-widget" name="' + $wrapper.data( 'name' ) + '" height="22px" width="68px" frameBorder="0" scrolling="no" src="' + $wrapper.data( 'src' ) + '"></iframe>' );
	} else {
		$wrapper.find( '.post-likes-widget-placeholder' ).after( '<iframe class="post-likes-widget jetpack-likes-widget" name="' + $wrapper.data( 'name' ) + '" height="55px" width="100%" frameBorder="0" src="' + $wrapper.data( 'src' ) + '"></iframe>' );
	}

	$wrapper.removeClass( 'jetpack-likes-widget-unloaded' ).addClass( 'jetpack-likes-widget-loading' );

	$wrapper.find( 'iframe' ).load( function( e ) {
		var $iframe = jQuery( e.target );
		$wrapper.removeClass( 'jetpack-likes-widget-loading' ).addClass( 'jetpack-likes-widget-loaded' );

		JetpackLikespostMessage( { event: 'loadLikeWidget', name: $iframe.attr( 'name' ), width: $iframe.width() }, window.frames[ 'likes-master' ] );

		if ( $wrapper.hasClass( 'slim-likes-widget' ) ) {
			$wrapper.find( 'iframe' ).Jetpack( 'resizeable' );
		}
	});
	setTimeout( JetpackLikesWidgetQueueHandler, 250 );
}
JetpackLikesWidgetQueueHandler();
;
"undefined"!=typeof jQuery?("undefined"==typeof jQuery.fn.hoverIntent&&!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,void(c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval)))},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"===b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery),jQuery(document).ready(function(a){var b,c,d,e=a("#wpadminbar"),f=!1;b=function(b,c){var d=a(c),e=d.attr("tabindex");e&&d.attr("tabindex","0").attr("tabindex",e)},c=function(b){e.find("li.menupop").on("click.wp-mobile-hover",function(c){var d=a(this);d.parent().is("#wp-admin-bar-root-default")&&!d.hasClass("hover")?(c.preventDefault(),e.find("li.menupop.hover").removeClass("hover"),d.addClass("hover")):d.hasClass("hover")?a(c.target).closest("div").hasClass("ab-sub-wrapper")||(c.stopPropagation(),c.preventDefault(),d.removeClass("hover")):(c.stopPropagation(),c.preventDefault(),d.addClass("hover")),b&&(a("li.menupop").off("click.wp-mobile-hover"),f=!1)})},d=function(){var b=/Mobile\/.+Safari/.test(navigator.userAgent)?"touchstart":"click";a(document.body).on(b+".wp-mobile-hover",function(b){a(b.target).closest("#wpadminbar").length||e.find("li.menupop.hover").removeClass("hover")})},e.removeClass("nojq").removeClass("nojs"),"ontouchstart"in window?(e.on("touchstart",function(){c(!0),f=!0}),d()):/IEMobile\/[1-9]/.test(navigator.userAgent)&&(c(),d()),e.find("li.menupop").hoverIntent({over:function(){f||a(this).addClass("hover")},out:function(){f||a(this).removeClass("hover")},timeout:180,sensitivity:7,interval:100}),window.location.hash&&window.scrollBy(0,-32),a("#wp-admin-bar-get-shortlink").click(function(b){b.preventDefault(),a(this).addClass("selected").children(".shortlink-input").blur(function(){a(this).parents("#wp-admin-bar-get-shortlink").removeClass("selected")}).focus().select()}),a("#wpadminbar li.menupop > .ab-item").bind("keydown.adminbar",function(c){if(13==c.which){var d=a(c.target),e=d.closest(".ab-sub-wrapper"),f=d.parent().hasClass("hover");c.stopPropagation(),c.preventDefault(),e.length||(e=a("#wpadminbar .quicklinks")),e.find(".menupop").removeClass("hover"),f||d.parent().toggleClass("hover"),d.siblings(".ab-sub-wrapper").find(".ab-item").each(b)}}).each(b),a("#wpadminbar .ab-item").bind("keydown.adminbar",function(c){if(27==c.which){var d=a(c.target);c.stopPropagation(),c.preventDefault(),d.closest(".hover").removeClass("hover").children(".ab-item").focus(),d.siblings(".ab-sub-wrapper").find(".ab-item").each(b)}}),e.click(function(b){("wpadminbar"==b.target.id||"wp-admin-bar-top-secondary"==b.target.id)&&(e.find("li.menupop.hover").removeClass("hover"),a("html, body").animate({scrollTop:0},"fast"),b.preventDefault())}),a(".screen-reader-shortcut").keydown(function(b){var c,d;13==b.which&&(c=a(this).attr("href"),d=navigator.userAgent.toLowerCase(),-1!=d.indexOf("applewebkit")&&c&&"#"==c.charAt(0)&&setTimeout(function(){a(c).focus()},100))}),a("#adminbar-search").on({focus:function(){a("#adminbarsearch").addClass("adminbar-focused")},blur:function(){a("#adminbarsearch").removeClass("adminbar-focused")}}),"sessionStorage"in window&&a("#wp-admin-bar-logout a").click(function(){try{for(var a in sessionStorage)-1!=a.indexOf("wp-autosave-")&&sessionStorage.removeItem(a)}catch(b){}}),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})):!function(a,b){var c,d=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,function(){return c.call(a,window.event)})},e=new RegExp("\\bhover\\b","g"),f=[],g=new RegExp("\\bselected\\b","g"),h=function(a){for(var b=f.length;b--;)if(f[b]&&a==f[b][1])return f[b][0];return!1},i=function(b){for(var d,i,j,k,l,m,n=[],o=0;b&&b!=c&&b!=a;)"LI"==b.nodeName.toUpperCase()&&(n[n.length]=b,i=h(b),i&&clearTimeout(i),b.className=b.className?b.className.replace(e,"")+" hover":"hover",k=b),b=b.parentNode;if(k&&k.parentNode&&(l=k.parentNode,l&&"UL"==l.nodeName.toUpperCase()))for(d=l.childNodes.length;d--;)m=l.childNodes[d],m!=k&&(m.className=m.className?m.className.replace(g,""):"");for(d=f.length;d--;){for(j=!1,o=n.length;o--;)n[o]==f[d][1]&&(j=!0);j||(f[d][1].className=f[d][1].className?f[d][1].className.replace(e,""):"")}},j=function(b){for(;b&&b!=c&&b!=a;)"LI"==b.nodeName.toUpperCase()&&!function(a){var b=setTimeout(function(){a.className=a.className?a.className.replace(e,""):""},500);f[f.length]=[b,a]}(b),b=b.parentNode},k=function(b){for(var d,e,f,h=b.target||b.srcElement;;){if(!h||h==a||h==c)return;if(h.id&&"wp-admin-bar-get-shortlink"==h.id)break;h=h.parentNode}for(b.preventDefault&&b.preventDefault(),b.returnValue=!1,-1==h.className.indexOf("selected")&&(h.className+=" selected"),d=0,e=h.childNodes.length;e>d;d++)if(f=h.childNodes[d],f.className&&-1!=f.className.indexOf("shortlink-input")){f.focus(),f.select(),f.onblur=function(){h.className=h.className?h.className.replace(g,""):""};break}return!1},l=function(a){var b,c,d,e,f,g;if(!("wpadminbar"!=a.id&&"wp-admin-bar-top-secondary"!=a.id||(b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,1>b)))for(g=b>800?130:100,c=Math.min(12,Math.round(b/g)),d=b>800?Math.round(b/30):Math.round(b/20),e=[],f=0;b;)b-=d,0>b&&(b=0),e.push(b),setTimeout(function(){window.scrollTo(0,e.shift())},f*c),f++};d(b,"load",function(){c=a.getElementById("wpadminbar"),a.body&&c&&(a.body.appendChild(c),c.className&&(c.className=c.className.replace(/nojs/,"")),d(c,"mouseover",function(a){i(a.target||a.srcElement)}),d(c,"mouseout",function(a){j(a.target||a.srcElement)}),d(c,"click",k),d(c,"click",function(a){l(a.target||a.srcElement)}),d(document.getElementById("wp-admin-bar-logout"),"click",function(){if("sessionStorage"in window)try{for(var a in sessionStorage)-1!=a.indexOf("wp-autosave-")&&sessionStorage.removeItem(a)}catch(b){}})),b.location.hash&&b.scrollBy(0,-32),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})}(document,window);;
// Make the list of internal blogs in adminbar scrollable

jQuery( document ).ready( function( $ ) {
	// Handle the tap on menus on mobile, override the core js.
	$(document.body).off( '.wp-mobile-hover' );
	$('#wpadminbar').off('touchstart');

	setTimeout( function() {
		$('li.menupop').on( 'touchstart', function(e) {
			var $target = $(e.target).closest( 'li' );

			if ( $target.hasClass( 'menupop' ) && $target.attr( 'id' ) != 'wp-admin-bar-switch-site' ) {
				e.preventDefault();

				$('li.menupop').not($(this)).removeClass( 'hover' );
				$(this).toggleClass( 'hover' );
			}
		});
	}, 10 );

	// Handle sub menu list of sites scrolling (pre-calypso toolbar view)
	var ul = $('#wpadminbar #wp-admin-bar-my-sites'),
		li = ul.find('> li').not('.adminbar-handle'),
		size = Math.floor( ( $(window).height() - 100 ) / 30 ), // approx, based on current styling
		topHandle, bottomHandle, interval, speed = 100;

	if ( ! ul.length || li.length < size + 1 || ul.find('li:first').hasClass('.adminbar-handle') )
		return;

	function move( direction ) {
		var hide, show, next,
			visible = li.filter(':visible'),
			first = visible.first(),
			last = visible.last();

		if ( 'up' == direction ) {
			show = last.next().not('.adminbar-handle');
			hide = first;

			if ( topHandle.hasClass('scrollend') ) {
				topHandle.removeClass('scrollend');
			}

			if ( show.next().hasClass('adminbar-handle') ) {
				bottomHandle.addClass('scrollend');
			}

			if ( ! show.length ) {
				window.clearInterval( interval );
				return;
			}
		} else if ( 'down' == direction ) {
			show = first.prev().not('.adminbar-handle');
			hide = last;

			if ( bottomHandle.hasClass('scrollend') ) {
				bottomHandle.removeClass('scrollend');
			}

			if ( show.prev().hasClass('adminbar-handle') ) {
				topHandle.addClass('scrollend');
			}

			if ( ! show.length ) {
				window.clearInterval( interval );
				return;
			}
		} else {
			return;
		}

		if ( hide.length && show.length ) {
			// Maybe add some sliding animation?
			hide.hide()
			show.show()
		}
	}

	// hide the extra items
	li.slice(size).hide();

	topHandle = $('<li class="adminbar-handle">');
	bottomHandle = topHandle.clone().addClass('handle-bottom');
	ul.prepend( topHandle.addClass('handle-top scrollend') ).append( bottomHandle );

	topHandle.on( 'mouseenter', function() {
		interval = window.setInterval( function() { move('down'); }, speed );
	}).on( 'click', function() {
		 move('down');
	});

	bottomHandle.on( 'mouseenter', function() {
		interval = window.setInterval( function() { move('up'); }, speed );
	}).on( 'click', function() {
		 move('up');
	});

	topHandle.add( bottomHandle ).on( 'mouseleave click', function() {
		 window.clearInterval( interval );
	});
});
;
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution
  
  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element = container.children[0];
  var slides, slidePos, width, length;
  options = options || {};
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
    width = container.getBoundingClientRect().width || container.offsetWidth;

    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;
    
    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
            
      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
      
    } else {     
      
      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {

    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration = 
    style.MozTransitionDuration = 
    style.msTransitionDuration = 
    style.OTransitionDuration = 
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform = 
    style.MozTransform = 
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }
    
    var start = +new Date;
    
    var timer = setInterval(function() {

      var timeElap = +new Date - start;
      
      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;      

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup.call()); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];

      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };
      
      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling 
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x = 
            delta.x / 
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?                      
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false
          
          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide = 
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds = 
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;
      
      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);  
                      
          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {

      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
        
        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {
    
    // set touchstart event on element    
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {
      
      // cancel slideshow
      stop();
      
      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {
      
      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = 'auto';
      element.style.left = 0;

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '100%';
        slide.style.left = 0;

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}
;
/**
 * Comment Likes - JavaScript
 *
 * This handles liking and unliking comments, as well as viewing who has
 * liked a particular comment.
 *
 * @dependency  jQuery
 * @dependency  Swipe
 *
 * @package     Comment_Likes
 * @subpackage  JavaScript
 */
jQuery( function() {
	var $ = jQuery;
	var extWin;
	var extWinCheck;
	var commentLikeEvent;

	// The O2 theme re-injects this script into the DOM when somebody
	// creates a new thread and the page is already open, but we don't
	// want to run this script a second time.
	if ( window.comment_likes_loaded ) return;
	window.comment_likes_loaded = true;

	// Client-side cache of who liked a particular comment to avoid
	// having to hit the server multiple times for the same data.
	var comment_like_cache = {};

	/**
	 * Parse the comment ID from a comment like link.
	 */
	var get_comment_id = function( $link ) {
		var comment_id = $link.attr( 'href' ).split( 'like_comment=' );
		return comment_id[1].split( '&_wpnonce=' )[0];
	};

	/**
	 * Handle an ajax action on the comment like link.
	 */
	var handle_link_action = function( $link, action, comment_id, callback ) {
		var nonce = $link.attr( 'href' ).split( '_wpnonce=' )[1];

		$.post( '/wp-admin/admin-ajax.php', {
			'action': action,
			'_wpnonce': nonce,
			'like_comment': comment_id,
			'blog_id': Number( $link.data( 'blog' ) )
		}, callback, 'json' );
	};

	// Overlay used for displaying comment like info.
	var overlay = {

		// Overlay element.
		$el: $( '<div/>' )
			.appendTo( 'body' )
			.addClass( 'comment-likes-overlay' )
			.hide()
			.mouseenter( function() {
				// Don't hide the overlay if the user is mousing over it.
				overlay.cancel_hide();
			} ).mouseleave( function() {
				overlay.request_hide();
			} ),

		// Inner contents of overlay.
		$inner: null,

		// Instance of the Swipe library.
		swipe: null,

		// Initialise the overlay for use, removing any old content.
		clear: function() {
			// Unload any previous instance of Swipe (to avoid leaking a global
			// event handler). This is done before clearing the contents of the
			// overlay because Swipe expects the slides to still be present.
			if ( this.swipe ) {
				this.swipe.kill();
				this.swipe = null;
			}
			this.$el.html( '' );
			this.$inner = $( '<div/>' ).addClass( 'inner' ).appendTo( this.$el );
		},

		/**
		 * Construct a list (<ul>) of user (gravatar, name) details.
		 *
		 * @param  data     liker data returned from the server
		 * @param  klass    CSS class to apply to the <ul> element
		 * @param  start    index of user to start at
		 * @param  length   number of users to include in the list
		 *
		 * @return          HTML for the list
		 */
		get_user_bits: function( data, klass, start, length ) {
			start = start || 0;
			var last = start + ( length || data.length );
			last = ( last > data.length ) ? data.length : last;
			var html = '<div class="liker-list"><ul class="' + ( klass || '' ) + '">';
			for ( var i = start; i < last; ++i ) {
				var user = data[ i ];
				html += '<li>';
				html += '<a rel="nofollow" title="' + user.display_name_esc + '" href="' + user.profile_url_esc + '"><img src="' + user.avatar_url_esc + '" alt="' + user.display_name_esc + '"  /> <span class="user-name">' + user.display_name_esc + '</span></a>';
				html += '</li>';
			}
			html += '</ul></div>';
			return html;
		},

		/**
		 * Render the display of who has liked this comment. The type of
		 * display depends on how many people have liked the comment.
		 * If more than 10 people have liked the comment, this function
		 * renders navigation controls and sets up the Swipe library for
		 * changing between pages.
		 *
		 * @param link  the element over which the user is hovering
		 * @param data  the results retrieved from the server
		 */
		show_likes: function( $link, data ) {
			this.clear();

			$link.data( 'likeCount', data.length );
			if ( 0 === data.length ) {
				// No likers after all.
				return this.$el.hide();
			}

			this.$inner.css( 'padding', 12 );

			if ( data.length < 6 ) {
				// Only one column needed.
				this.$inner.css( 'max-width', 200 );
				this.$inner.html( this.get_user_bits( data, 'single' ) );

			} else if ( data.length < 11 ) {
				// Two columns, but only one page.
				this.$inner.html( this.get_user_bits( data, 'double' ) );

			} else {
				// Multiple pages.
				this.render_likes_with_pagination( data );
			}

			// Move the overlay into the correct position and then show it.
			this.set_position( $link );
		},

		/**
		 * Render multiple pages of likes with pagination controls.
		 * This function is intended to be called by `show_likes` above.
		 *
		 * @param data  the results retrieved from the server
		 */
		render_likes_with_pagination: function( data ) {
			var page_count = Math.ceil( data.length / 10 );
			// Swipe requires two nested containers.
			var $swipe = $( '<div/>' ).addClass( 'swipe' ).appendTo( this.$inner );
			var $div = $( '<div/>' ).addClass( 'swipe-wrap' ).appendTo( $swipe );
			for ( var i = 0; i < page_count; ++i ) {
				$( this.get_user_bits( data, 'double', i * 10, 10 ) ).appendTo( $div );
			}

			/** Navigation controls.
			 *  This is based on the Newdash controls found in
			 *    reader/recommendations-templates.php
			 */
			var nav_html = '<nav class="slider-nav"><a href="#" class="prev"><span class="noticon noticon-previous" title="Previous" alt="<"></span></a><span class="position">';
			for ( var i = 0; i < page_count; ++i ) {
				nav_html += '<em data-page="' + i + '" class="' + ( ( i === 0 ) ? 'on' : '' ) + '">&bull;</em>';
			}
			nav_html += '</span><a href="#" class="next"><span class="noticon noticon-next" title="Next" alt=">"></span></a></nav>';
			var $nav = $( nav_html ).appendTo( this.$inner );

			/** Set up Swipe. **/

			// Swipe cannot be set up successfully unless its container
			// is visible, so we show it now.
			this.$el.show();

			var swipe = this.swipe = new Swipe( $swipe[0], {
				callback: function( pos ) {
					// Update the pagination indicators.
					//
					// If there are exactly two pages, Swipe has a weird
					// special case where it duplicates both pages and
					// can return index 2 and 3 even though those aren't
					// real pages (see swipe.js, line 47). To deal with
					// this, we use the expression `pos % page_count`.
					pos = pos % page_count;
					$nav.find( 'em' ).each( function() {
						var page = Number( $( this ).data( 'page' ) );
						$( this ).attr( 'class', ( pos === page ) ? 'on' : '' );
					} );
				}
			} );
			$nav.find( 'em' ).on( 'click', function( $e ) {
				// Go to the page corresponding to the indicator clicked.
				swipe.slide( Number( $( this ).data( 'page' ) ) );
				$e.preventDefault();
			} );
			// Previous and next buttons.
			$nav.find( '.prev' ).on( 'click', function( $e ) {
				swipe.prev();
				$e.preventDefault();
			} );
			$nav.find( '.next' ).on( 'click', function( $e ) {
				swipe.next();
				$e.preventDefault();
			} );
		},

		/**
		 * Open the overlay and show a loading message.
		 */
		show_loading_message: function( $link ) {
			this.clear();
			this.$inner.text( comment_like_text.loading );
			this.set_position( $link );
		},

		/**
		 * Position the overlay near the current comment.
		 *
		 * @param $link  element near which to position the overlay
		 */
		set_position: function( $link ) {
			// Prepare a down arrow icon for the bottom of the overlay.
			var $icon = $( '<span/>' )
				.appendTo( this.$el )
				.addClass( 'icon noticon noticon-downarrow' )
				.css( 'text-shadow', '0px 1px 1px rgb(223, 223, 223)' );

			var offset = $link.offset();
			var left = offset.left - ( this.$el.width() - $link.width() ) / 2;
			left = left < 5 ? 5 : left;
			var top = offset.top - this.$el.height() + 5;

			// Check if the overlay would appear off the screen.
			if ( top < ( $( window ).scrollTop() + ( $( '#wpadminbar' ).height() || 0 ) ) ) {
				// We'll display the overlay beneath the link instead.
				top = offset.top + $link.height();
				// Instead of using the down arrow icon, use an up arrow.
				$icon.remove().prependTo( this.$el )
					.removeClass( 'noticon-downarrow')
					.addClass( 'noticon-uparrow' )
					.css( {
						'text-shadow': '0px -1px 1px rgb(223, 223, 223)',
						'vertical-align': 'bottom'
					} );
			}

			this.$el.css( { 'left': left, 'top': top } ).show();

			$icon.css( {
				// The height of the arrow icon differs slightly between browsers,
				// so we compute the margin here to make sure it isn't disjointed
				// from the overlay.
				'margin-top': $icon[0].scrollHeight - 26,
				'margin-bottom': 20 - $icon[0].scrollHeight,

				// Position the arrow to be horizontally centred on the link.
				'padding-left': offset.left - left + ( $link.width() - $icon[0].scrollWidth ) / 2
			} );
		},

		/**
		 * Return whether the overlay is visible.
		 */
		is_visible: function() {
			return ( 'none' !== this.$el.css( 'display' ) );
		},

		// Timeout used for hiding the overlay.
		hide_timeout: null,

		/**
		 * Request that the overlay be hidden after a short delay.
		 */
		request_hide: function() {
			if ( null !== this.hide_timeout ) {
				return;
			}
			var self = this;
			this.hide_timeout = setTimeout( function() {
				self.$el.hide();
				self.clear();
			}, 300 );
		},

		/**
		 * Cancel a request to hide the overlay.
		 */
		cancel_hide: function() {
			if ( null !== this.hide_timeout ) {
				clearTimeout( this.hide_timeout );
				this.hide_timeout = null;
			}
		}
	};

	// The most recent comment for which the user has requested to see
	// who liked it.
	var relevant_comment;

	// Precache after this timeout.
	var precache_timeout = null;

	/**
	 * Fetch the like data for a particular comment.
	 */
	var fetch_like_data = function( $link, comment_id ) {
		comment_like_cache[ comment_id ] = null;

		var $star = $link.parent().parent().find( 'a.comment-like-link' );
		handle_link_action( $star, 'view_comment_likes', comment_id, function( data ) {
			// Populate the cache.
			comment_like_cache[ comment_id ] = data;

			// Only show the overlay if the user is interested.
			if ( overlay.is_visible() && ( relevant_comment === comment_id ) ) {
				overlay.show_likes( $link, data );
			}
		} );
	};

	function readCookie( c ) {
		var nameEQ = c + '=',
			cookieStrings = document.cookie.split( ';' ),
			i, cookieString, num, chunk, pairs, pair, cookie_data;
		for ( i = 0; i < cookieStrings.length; i++ ) {
			cookieString = cookieStrings[ i ];
			while ( cookieString.charAt( 0 ) === ' ' ) {
				cookieString = cookieString.substring( 1, cookieString.length );
			}
			if ( cookieString.indexOf( nameEQ ) === 0 ) {
				chunk = cookieString.substring( nameEQ.length, cookieString.length );
				pairs = chunk.split( '&' );
				cookie_data = {};
				for ( num = pairs.length - 1; num >= 0; num-- ) {
					pair = pairs[ num ].split( '=' );
					cookie_data[ pair[0] ] = decodeURIComponent( pair[1] );
				}
				return cookie_data;
			}
		}
		return null;
	}

	function getServiceData() {
		var data = readCookie( 'wpc_wpc' );
		if ( null === data || 'undefined' === typeof data.access_token || ! data.access_token ) {
			return false;
		}
		return data;
	}

	function readMessage( event ) {
		if ( 'undefined' == typeof event.event ) {
			return;
		}

		if ( 'login' == event.event && event.success ) {
			extWinCheck = setInterval( function() {
				if ( ! extWin || extWin.closed ) {
					clearInterval( extWinCheck );
					if ( getServiceData() ) {

						// Load page in an iframe to get the current comment nonce
						var nonceIframe = document.createElement( 'iframe' );
						nonceIframe.id = 'wp-login-comment-nonce-iframe';
						nonceIframe.style.display = 'none';
						nonceIframe.src = commentLikeEvent + '';
						document.body.appendChild( nonceIframe );

						var commentLikeId = ( commentLikeEvent + '' ).split( 'like_comment=' )[1].split( '&_wpnonce=' )[0];
						var c = false;

						// Set a 5 second timeout to redirect to the comment page without doing the Like as a fallback
						var commentLikeTimeout = setTimeout( function() {
							window.location = commentLikeEvent;
						}, 5000 );

						// Check for a new nonced redirect and use that if available before timing out
						var commentLikeCheck = setInterval( function() {
							c = $( '#wp-login-comment-nonce-iframe' ).contents().find( '#comment-like-' + commentLikeId + ' .comment-like-link' );
							if ( 'undefined' !== typeof c && 'undefined' !== typeof c[0] && 'undefined' !== typeof c[0].href ) {
								clearTimeout( commentLikeTimeout );
								clearInterval( commentLikeCheck );
								window.location = c[0].href;
							}
						}, 100 );
					}
				}
			}, 100 );

			if ( extWin ) {
				if ( ! extWin.closed ) {
					extWin.close();
				}
				extWin = false;
			}

			$( '#wp-login-polling-iframe' ).remove();
		}
	}

	if ( 'undefined' != typeof window.pm ) {
		pm.bind( 'loginMessage', function( e ) { readMessage( e ); } );
	}

	$( 'body' ).on( 'click', 'a.comment-like-link', function( $e ) {
		if ( $( $e.target ).hasClass( 'needs-login' ) ) {
			$e.preventDefault();
			commentLikeEvent = $e.target;
			if ( extWin ) {
				if ( ! extWin.closed ) {
					extWin.close();
				}
				extWin = false;
			}

			$( '#wp-login-polling-iframe' ).remove();

			var url = 'https://wordpress.com/public.api/connect/?action=request&service=wordpress';
			extWin = window.open( url, 'likeconn', 'status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=1,scrollbars=1,height=560,width=500' );

			// Append cookie polling login iframe to this window to wait for user to finish logging in (or cancel)
			var loginIframe = $( "<iframe id='wp-login-polling-iframe'></iframe>" );
			loginIframe.attr( "src", "https://wordpress.com/public.api/connect/?iframe=true" );
			loginIframe.css( "display", "none" );
			$( document.body ).append( loginIframe );

			return false;
		}

		// Record that the user likes or does not like this comment.
		var $star = $( this );
		var comment_id = get_comment_id( $star );
		$star.addClass( 'loading' );
		// Determine whether to like or unlike based on whether the comment is
		// currently liked.
		var action = ( $( 'p#comment-like-' + comment_id ).data( 'liked' ) === 'comment-liked' ) ? 'unlike_comment' : 'like_comment';
		handle_link_action( $star, action, comment_id, function( data ) {
			// Invalidate the like cache for this comment.
			delete comment_like_cache[ comment_id ];

			$( '#comment-like-count-' + data.context ).html( data.display );

			if ( 'like_comment' === action ) {
				$( 'p#comment-like-' + data.context ).removeClass( 'comment-not-liked' )
					.addClass( 'comment-liked' )
					.data( 'liked', 'comment-liked' );
			} else {
				$( 'p#comment-like-' + data.context ).removeClass( 'comment-liked' )
					.addClass( 'comment-not-liked' )
					.data( 'liked', 'comment-not-liked' );
			}

			// Prefetch new data for this comment (if there are likers left).
			var $link = $star.parent().find( 'a.view-likers' );
			if ( 0 !== $link.length ) {
				fetch_like_data( $link, comment_id );
			}

			$star.removeClass( 'loading' );
		} );
		$e.preventDefault();
		$e.stopPropagation();

	} ).on( 'click', 'p.comment-not-liked', function() {
		// When a comment hasn't been liked, make the text clickable, too
		$( this ).find( 'a.comment-like-link' ).click();

	} ).on( 'mouseenter', 'p.comment-likes a.view-likers', function() {
		// Show the user a list of who has liked this comment.

		var $link = $( this );
		if ( 0 === Number( $link.data( 'likeCount' ) || 0 ) ) {
			// No one has liked this comment.
			return;
		}

		// Don't hide the overlay.
		overlay.cancel_hide();

		// Get the comment ID.
		var $star = $link.parent().parent().find( 'a.comment-like-link' );
		var comment_id = relevant_comment = get_comment_id( $star );

		// Check if the list of likes for this comment is already in
		// the cache.
		if ( comment_id in comment_like_cache ) {
			var entry = comment_like_cache[ comment_id ];
			// Only display the likes if the ajax request is
			// actually done.
			if ( null !== entry ) {
				overlay.show_likes( $link, entry );
			} else {
				// Make sure the overlay is visible (in case
				// the user moved the mouse away while loading
				// but then came back before it finished
				// loading).
				overlay.show_loading_message( $link );
			}
			return;
		}

		// Position the "Loading..." overlay.
		overlay.show_loading_message( $link );

		// Fetch the data.
		fetch_like_data( $link, comment_id );

	} ).on( 'mouseleave', 'p.comment-likes a.view-likers', function() {
		// User has moved cursor away - hide the overlay.
		overlay.request_hide();

	} ).on( 'click', 'p.comment-likes a.view-likers', function( $e ) {
		// Don't do anything when clicking on the text.
		$e.preventDefault();

	} ).on( 'mouseenter', '.comment:has(a.comment-like-link)', function() {
		// User is moving over a comment - precache the comment like data.
		if ( null !== precache_timeout ) {
			clearTimeout( precache_timeout );
			precache_timeout = null;
		}

		var $star = $( this ).find( 'a.comment-like-link' );
		var $link = $star.parent().find( 'a.view-likers' );
		if ( 0 === Number( $link.data( 'likeCount' ) || 0 ) ) {
			// No likes.
			return;
		}
		var comment_id = get_comment_id( $star );
		if ( comment_id in comment_like_cache ) {
			// Already in cache.
			return;
		}

		precache_timeout = setTimeout( function() {
			precache_timeout = null;
			if ( comment_id in comment_like_cache ) {
				// Was cached in the interim.
				return;
			}
			fetch_like_data( $link, comment_id );
		}, 1000 );
	} );
} );
;
/*!
 * Masonry PACKAGED v3.1.4
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=r(t);if("none"===n.display)return i();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var u=o.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=n[d];l=a(t,l);var m=parseFloat(l);o[d]=isNaN(m)?0:m}var y=o.paddingLeft+o.paddingRight,g=o.paddingTop+o.paddingBottom,v=o.marginLeft+o.marginRight,b=o.marginTop+o.marginBottom,_=o.borderLeftWidth+o.borderRightWidth,E=o.borderTopWidth+o.borderBottomWidth,L=u&&h,x=e(n.width);x!==!1&&(o.width=x+(L?0:y+_));var z=e(n.height);return z!==!1&&(o.height=z+(L?0:g+E)),o.innerWidth=o.width-(y+_),o.innerHeight=o.height-(g+E),o.outerWidth=o.width+v,o.outerHeight=o.height+b,o}}function a(t,e){if(o||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(r.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=r(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var n=d[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=l[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return h&&h.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,b[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,b={};return y.namespace="outlayer",y.Item=m,y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=d(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):c(n)&&(i=n),this[t]=i?d(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],h=this._getItemLayoutPosition(a);h.item=a,h.isInstant=e||a.isLayoutInstant,o.push(h)}this._processLayoutQueue(o)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=d(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=d(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.reveal()}},y.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&b[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return Object.create?n.prototype=Object.create(y.prototype):e(n.prototype,y.prototype),n.prototype.constructor=n,g(n,"options"),e(n.prototype.options,i),n.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,c=i[s],d=c.getAttribute(o);try{f=d&&JSON.parse(d)}catch(l){h&&h.error("Error parsing "+o+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var m=new n(c,f);p&&p.data(c,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});;
/*
* Organic Themes Adventure Theme
* http://organicthemes.com/
*
* Copyright 2012 Organic Themes
* GPLv2 license.
* http://www.gnu.org/licenses/gpl-2.0.html
*
*/

( function( $ ) {

	function removeNoJsClass() {
		$( 'html:first' ).removeClass( 'no-js' );
	}

	/* Superfish the menu drops ---------------------*/
	function superfishSetup() {
		$('.menu').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			cssArrows: true,
			autoArrows:  true,
			dropShadows: false
		});
	}

	/* Flexslider ---------------------*/
	function flexSliderSetup() {
		if( ($).flexslider) {
			var slider = $('.flexslider');
			slider.fitVids().flexslider({
				slideshowSpeed		: 8000,
				animationDuration	: 600,
				animation			: 'fade',
				video				: false,
				useCSS				: false,
				prevText			: '<i class="fa fa-angle-left"></i>',
				nextText			: '<i class="fa fa-angle-right"></i>',
				touch				: false,
				animationLoop		: true,
				smoothHeight		: true,

				start: function(slider) {
					slider.removeClass('loading');
				}
			});
		}
	}

	/* Masonry ---------------------*/
	function masonrySetup() {
		var $third = $('.category-wrap');
		$third.masonry({
			itemSelector : '.third',
			gutter		 : '.gutter-sizer-third'
		});
		$third.imagesLoaded(function() {
			$third.masonry();
		});
	}
	
	/* Equal Content Height ---------------------*/
	function heightSetup() {
		$(".featured-page .feature-img").css({'height':($(".featured-page .eleven.columns").height()+'px')});
	}

	function modifyPosts() {
	
		$('.sub-menu').css('display', '');

		/* Insert Line Break Before More Links ---------------------*/
		$('<br />').insertBefore('.more-link');

		/* Animate Page Scroll ---------------------*/
		$(".scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});

		/* Fit Vids ---------------------*/
		$('.article').fitVids();

	}

	$( document )
	.ready( removeNoJsClass )
	.ready( superfishSetup )
	.ready( modifyPosts )
	.ready( masonrySetup )
	.ready( heightSetup )
	.on( 'post-load', modifyPosts );

	$( window )
	.load( flexSliderSetup )
	.resize( heightSetup );

})( jQuery );;
/**
* navigation.js
* Licensed under the GPLv2 license.
* Handles toggling the navigation menu for small screens.
*/
( function() {

	var container, button, menu, holder;

	container = document.getElementById( 'navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'span' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	holder = container.getElementsByTagName( 'div' )[0];
	if ( 'undefined' === typeof button )
		return;

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'mobile-menu' ) )
			menu.className = 'menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			holder.className += ' sf-js-enabled';
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( 'mobile-menu', 'menu' );
			holder.className = holder.className.replace( 'mobile-menu', 'menu' );
			container.className = container.className.replace( 'main-small-navigation', 'navigation-main' );
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
			menu.className = menu.className.replace( 'menu', 'mobile-menu' );
			holder.className = holder.className.replace( 'menu', 'mobile-menu' );
			holder.className = holder.className.replace( 'sf-js-enabled', '' );
			container.className = container.className.replace( 'navigation-main', 'main-small-navigation' );
		}
	};

} )();;
/*jslint indent: 2, browser: true, bitwise: true, plusplus: true */

/*! Copyright Twitter Inc. and other contributors. Licensed under MIT *//*
https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
*/

// WARNING:   this file is generated automatically via
//            `node twemoji-generator.js`
//            please update its `createTwemoji` function
//            at the bottom of the same file instead.
var twemoji = (function ( ) {
  'use strict';

  /*jshint maxparams:4 */

  var
    // the exported module object
    twemoji = {


    /////////////////////////
    //      properties     //
    /////////////////////////

      // default assets url, by default will be Twitter Inc. CDN
      base: (location.protocol === 'https:' ? 'https:' : 'http:') +
            '//twemoji.maxcdn.com/',

      // default assets file extensions, by default '.png'
      ext: '.svg',

      // default assets/folder size, by default "36x36"
      // available via Twitter CDN: 16, 36, 72
      size: 'svg',

      // basic utilities / helpers to convert code points
      // to JavaScript surrogates and vice versa
      convert: {

        /**
         * Given an HEX codepoint, returns UTF16 surrogate pairs.
         *
         * @param   string  generic codepoint, i.e. '1F4A9'
         * @return  string  codepoint transformed into utf16 surrogates pair,
         *          i.e. \uD83D\uDCA9
         *
         * @example
         *  twemoji.convert.fromCodePoint('1f1e8');
         *  // "\ud83c\udde8"
         *
         *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
         *  // "\ud83c\udde8\ud83c\uddf3"
         */
        fromCodePoint: fromCodePoint,

        /**
         * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
         *
         * @param   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
         * @param   string  optional separator for double code points, default='-'
         * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
         *
         * @example
         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
         *  // "1f1e8-1f1f3"
         *
         *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
         *  // "1f1e8~1f1f3"
         */
        toCodePoint: toCodePoint
      },


    /////////////////////////
    //       methods       //
    /////////////////////////

      /**
       * User first: used to remove missing images
       * preserving the original text intent when
       * a fallback for network problems is desired.
       * Automatically added to Image nodes via DOM
       * It could be recycled for string operations via:
       *  $('img.emoji').on('error', twemoji.onerror)
       */
      onerror: function onerror() {
        if (this.parentNode) {
          this.parentNode.replaceChild(createText(this.alt), this);
        }
      },

      /**
       * Main method/logic to generate either <img> tags or HTMLImage nodes.
       *  "emojify" a generic text or DOM Element.
       *
       * @overloads
       *
       * String replacement for `innerHTML` or server side operations
       *  twemoji.parse(string);
       *  twemoji.parse(string, Function);
       *  twemoji.parse(string, Object);
       *
       * HTMLElement tree parsing for safer operations over existing DOM
       *  twemoji.parse(HTMLElement);
       *  twemoji.parse(HTMLElement, Function);
       *  twemoji.parse(HTMLElement, Object);
       *
       * @param   string|HTMLElement  the source to parse and enrich with emoji.
       *
       *          string              replace emoji matches with <img> tags.
       *                              Mainly used to inject emoji via `innerHTML`
       *                              It does **not** parse the string or validate it,
       *                              it simply replaces found emoji with a tag.
       *                              NOTE: be sure this won't affect security.
       *
       *          HTMLElement         walk through the DOM tree and find emoji
       *                              that are inside **text node only** (nodeType === 3)
       *                              Mainly used to put emoji in already generated DOM
       *                              without compromising surrounding nodes and
       *                              **avoiding** the usage of `innerHTML`.
       *                              NOTE: Using DOM elements instead of strings should
       *                              improve security without compromising too much
       *                              performance compared with a less safe `innerHTML`.
       *
       * @param   Function|Object  [optional]
       *                              either the callback that will be invoked or an object
       *                              with all properties to use per each found emoji.
       *
       *          Function            if specified, this will be invoked per each emoji
       *                              that has been found through the RegExp except
       *                              those follwed by the invariant \uFE0E ("as text").
       *                              Once invoked, parameters will be:
       *
       *                                codePoint:string  the lower case HEX code point
       *                                                  i.e. "1f4a9"
       *
       *                                options:Object    all info for this parsing operation
       *
       *                                variant:char      the optional \uFE0F ("as image")
       *                                                  variant, in case this info
       *                                                  is anyhow meaningful.
       *                                                  By default this is ignored.
       *
       *                              If such callback will return a falsy value instead
       *                              of a valid `src` to use for the image, nothing will
       *                              actually change for that specific emoji.
       *
       *
       *          Object              if specified, an object containing the following properties
       *
       *            callback   Function  the callback to invoke per each found emoji.
       *            base       string    the base url, by default twemoji.base
       *            ext        string    the image extension, by default twemoji.ext
       *            size       string    the assets size, by default twemoji.size
       *
       * @example
       *
       *  twemoji.parse("I \u2764\uFE0F emoji!");
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
       *
       *
       *  twemoji.parse("I \u2764\uFE0F emoji!", function(icon, options, variant) {
       *    return '/assets/' + icon + '.gif';
       *  });
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"> emoji!
       *
       *
       * twemoji.parse("I \u2764\uFE0F emoji!", {
       *   size: 72,
       *   callback: function(icon, options, variant) {
       *     return '/assets/' + options.size + '/' + icon + options.ext;
       *   }
       * });
       *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/72x72/2764.png"> emoji!
       *
       */
      parse: parse,

      /**
       * Given a string, invokes the callback argument
       *  per each emoji found in such string.
       * This is the most raw version used by
       *  the .parse(string) method itself.
       *
       * @param   string    generic string to parse
       * @param   Function  a generic callback that will be
       *                    invoked to replace the content.
       *                    This calback wil receive standard
       *                    String.prototype.replace(str, callback)
       *                    arguments such:
       *  callback(
       *    match,  // the emoji match
       *    icon,   // the emoji text (same as text)
       *    variant // either '\uFE0E' or '\uFE0F', if present
       *  );
       *
       *                    and others commonly received via replace.
       *
       *  NOTE: When the variant \uFE0E is found, remember this is an explicit intent
       *  from the user: the emoji should **not** be replaced with an image.
       *  In \uFE0F case one, it's the opposite, it should be graphic.
       *  This utility convetion is that only \uFE0E are not translated into images.
       */
      replace: replace,

      /**
       * Simplify string tests against emoji.
       *
       * @param   string  some text that might contain emoji
       * @return  boolean true if any emoji was found, false otherwise.
       *
       * @example
       *
       *  if (twemoji.test(someContent)) {
       *    console.log("emoji All The Things!");
       *  }
       */
      test: test
    },

    // RegExp based on emoji's official Unicode standards
    // http://www.unicode.org/Public/UNIDATA/EmojiSources.txt
    re = /((?:\ud83c\udde8\ud83c\uddf3|\ud83c\uddfa\ud83c\uddf8|\ud83c\uddf7\ud83c\uddfa|\ud83c\uddf0\ud83c\uddf7|\ud83c\uddef\ud83c\uddf5|\ud83c\uddee\ud83c\uddf9|\ud83c\uddec\ud83c\udde7|\ud83c\uddeb\ud83c\uddf7|\ud83c\uddea\ud83c\uddf8|\ud83c\udde9\ud83c\uddea|\u0039\u20e3|\u0038\u20e3|\u0037\u20e3|\u0036\u20e3|\u0035\u20e3|\u0034\u20e3|\u0033\u20e3|\u0032\u20e3|\u0031\u20e3|\u0030\u20e3|\u0023\u20e3|\ud83d\udeb3|\ud83d\udeb1|\ud83d\udeb0|\ud83d\udeaf|\ud83d\udeae|\ud83d\udea6|\ud83d\udea3|\ud83d\udea1|\ud83d\udea0|\ud83d\ude9f|\ud83d\ude9e|\ud83d\ude9d|\ud83d\ude9c|\ud83d\ude9b|\ud83d\ude98|\ud83d\ude96|\ud83d\ude94|\ud83d\ude90|\ud83d\ude8e|\ud83d\ude8d|\ud83d\ude8b|\ud83d\ude8a|\ud83d\ude88|\ud83d\ude86|\ud83d\ude82|\ud83d\ude81|\ud83d\ude36|\ud83d\ude34|\ud83d\ude2f|\ud83d\ude2e|\ud83d\ude2c|\ud83d\ude27|\ud83d\ude26|\ud83d\ude1f|\ud83d\ude1b|\ud83d\ude19|\ud83d\ude17|\ud83d\ude15|\ud83d\ude11|\ud83d\ude10|\ud83d\ude0e|\ud83d\ude08|\ud83d\ude07|\ud83d\ude00|\ud83d\udd67|\ud83d\udd66|\ud83d\udd65|\ud83d\udd64|\ud83d\udd63|\ud83d\udd62|\ud83d\udd61|\ud83d\udd60|\ud83d\udd5f|\ud83d\udd5e|\ud83d\udd5d|\ud83d\udd5c|\ud83d\udd2d|\ud83d\udd2c|\ud83d\udd15|\ud83d\udd09|\ud83d\udd08|\ud83d\udd07|\ud83d\udd06|\ud83d\udd05|\ud83d\udd04|\ud83d\udd02|\ud83d\udd01|\ud83d\udd00|\ud83d\udcf5|\ud83d\udcef|\ud83d\udced|\ud83d\udcec|\ud83d\udcb7|\ud83d\udcb6|\ud83d\udcad|\ud83d\udc6d|\ud83d\udc6c|\ud83d\udc65|\ud83d\udc2a|\ud83d\udc16|\ud83d\udc15|\ud83d\udc13|\ud83d\udc10|\ud83d\udc0f|\ud83d\udc0b|\ud83d\udc0a|\ud83d\udc09|\ud83d\udc08|\ud83d\udc07|\ud83d\udc06|\ud83d\udc05|\ud83d\udc04|\ud83d\udc03|\ud83d\udc02|\ud83d\udc01|\ud83d\udc00|\ud83c\udfe4|\ud83c\udfc9|\ud83c\udfc7|\ud83c\udf7c|\ud83c\udf50|\ud83c\udf4b|\ud83c\udf33|\ud83c\udf32|\ud83c\udf1e|\ud83c\udf1d|\ud83c\udf1c|\ud83c\udf1a|\ud83c\udf18|\ud83c\udccf|\ud83c\udd70|\ud83c\udd71|\ud83c\udd7e|\ud83c\udd8e|\ud83c\udd91|\ud83c\udd92|\ud83c\udd93|\ud83c\udd94|\ud83c\udd95|\ud83c\udd96|\ud83c\udd97|\ud83c\udd98|\ud83c\udd99|\ud83c\udd9a|\ud83d\ude0d|\ud83d\udec5|\ud83d\udec4|\ud83d\udec3|\ud83d\udec2|\ud83d\udec1|\ud83d\udebf|\ud83d\udeb8|\ud83d\udeb7|\ud83d\udeb5|\ud83c\ude01|\ud83c\ude02|\ud83c\ude32|\ud83c\ude33|\ud83c\ude34|\ud83c\ude35|\ud83c\ude36|\ud83c\ude37|\ud83c\ude38|\ud83c\ude39|\ud83c\ude3a|\ud83c\ude50|\ud83c\ude51|\ud83c\udf00|\ud83c\udf01|\ud83c\udf02|\ud83c\udf03|\ud83c\udf04|\ud83c\udf05|\ud83c\udf06|\ud83c\udf07|\ud83c\udf08|\ud83c\udf09|\ud83c\udf0a|\ud83c\udf0b|\ud83c\udf0c|\ud83c\udf0f|\ud83c\udf11|\ud83c\udf13|\ud83c\udf14|\ud83c\udf15|\ud83c\udf19|\ud83c\udf1b|\ud83c\udf1f|\ud83c\udf20|\ud83c\udf30|\ud83c\udf31|\ud83c\udf34|\ud83c\udf35|\ud83c\udf37|\ud83c\udf38|\ud83c\udf39|\ud83c\udf3a|\ud83c\udf3b|\ud83c\udf3c|\ud83c\udf3d|\ud83c\udf3e|\ud83c\udf3f|\ud83c\udf40|\ud83c\udf41|\ud83c\udf42|\ud83c\udf43|\ud83c\udf44|\ud83c\udf45|\ud83c\udf46|\ud83c\udf47|\ud83c\udf48|\ud83c\udf49|\ud83c\udf4a|\ud83c\udf4c|\ud83c\udf4d|\ud83c\udf4e|\ud83c\udf4f|\ud83c\udf51|\ud83c\udf52|\ud83c\udf53|\ud83c\udf54|\ud83c\udf55|\ud83c\udf56|\ud83c\udf57|\ud83c\udf58|\ud83c\udf59|\ud83c\udf5a|\ud83c\udf5b|\ud83c\udf5c|\ud83c\udf5d|\ud83c\udf5e|\ud83c\udf5f|\ud83c\udf60|\ud83c\udf61|\ud83c\udf62|\ud83c\udf63|\ud83c\udf64|\ud83c\udf65|\ud83c\udf66|\ud83c\udf67|\ud83c\udf68|\ud83c\udf69|\ud83c\udf6a|\ud83c\udf6b|\ud83c\udf6c|\ud83c\udf6d|\ud83c\udf6e|\ud83c\udf6f|\ud83c\udf70|\ud83c\udf71|\ud83c\udf72|\ud83c\udf73|\ud83c\udf74|\ud83c\udf75|\ud83c\udf76|\ud83c\udf77|\ud83c\udf78|\ud83c\udf79|\ud83c\udf7a|\ud83c\udf7b|\ud83c\udf80|\ud83c\udf81|\ud83c\udf82|\ud83c\udf83|\ud83c\udf84|\ud83c\udf85|\ud83c\udf86|\ud83c\udf87|\ud83c\udf88|\ud83c\udf89|\ud83c\udf8a|\ud83c\udf8b|\ud83c\udf8c|\ud83c\udf8d|\ud83c\udf8e|\ud83c\udf8f|\ud83c\udf90|\ud83c\udf91|\ud83c\udf92|\ud83c\udf93|\ud83c\udfa0|\ud83c\udfa1|\ud83c\udfa2|\ud83c\udfa3|\ud83c\udfa4|\ud83c\udfa5|\ud83c\udfa6|\ud83c\udfa7|\ud83c\udfa8|\ud83c\udfa9|\ud83c\udfaa|\ud83c\udfab|\ud83c\udfac|\ud83c\udfad|\ud83c\udfae|\ud83c\udfaf|\ud83c\udfb0|\ud83c\udfb1|\ud83c\udfb2|\ud83c\udfb3|\ud83c\udfb4|\ud83c\udfb5|\ud83c\udfb6|\ud83c\udfb7|\ud83c\udfb8|\ud83c\udfb9|\ud83c\udfba|\ud83c\udfbb|\ud83c\udfbc|\ud83c\udfbd|\ud83c\udfbe|\ud83c\udfbf|\ud83c\udfc0|\ud83c\udfc1|\ud83c\udfc2|\ud83c\udfc3|\ud83c\udfc4|\ud83c\udfc6|\ud83c\udfc8|\ud83c\udfca|\ud83c\udfe0|\ud83c\udfe1|\ud83c\udfe2|\ud83c\udfe3|\ud83c\udfe5|\ud83c\udfe6|\ud83c\udfe7|\ud83c\udfe8|\ud83c\udfe9|\ud83c\udfea|\ud83c\udfeb|\ud83c\udfec|\ud83c\udfed|\ud83c\udfee|\ud83c\udfef|\ud83c\udff0|\ud83d\udc0c|\ud83d\udc0d|\ud83d\udc0e|\ud83d\udc11|\ud83d\udc12|\ud83d\udc14|\ud83d\udc17|\ud83d\udc18|\ud83d\udc19|\ud83d\udc1a|\ud83d\udc1b|\ud83d\udc1c|\ud83d\udc1d|\ud83d\udc1e|\ud83d\udc1f|\ud83d\udc20|\ud83d\udc21|\ud83d\udc22|\ud83d\udc23|\ud83d\udc24|\ud83d\udc25|\ud83d\udc26|\ud83d\udc27|\ud83d\udc28|\ud83d\udc29|\ud83d\udc2b|\ud83d\udc2c|\ud83d\udc2d|\ud83d\udc2e|\ud83d\udc2f|\ud83d\udc30|\ud83d\udc31|\ud83d\udc32|\ud83d\udc33|\ud83d\udc34|\ud83d\udc35|\ud83d\udc36|\ud83d\udc37|\ud83d\udc38|\ud83d\udc39|\ud83d\udc3a|\ud83d\udc3b|\ud83d\udc3c|\ud83d\udc3d|\ud83d\udc3e|\ud83d\udc40|\ud83d\udc42|\ud83d\udc43|\ud83d\udc44|\ud83d\udc45|\ud83d\udc46|\ud83d\udc47|\ud83d\udc48|\ud83d\udc49|\ud83d\udc4a|\ud83d\udc4b|\ud83d\udc4c|\ud83d\udc4d|\ud83d\udc4e|\ud83d\udc4f|\ud83d\udc50|\ud83d\udc51|\ud83d\udc52|\ud83d\udc53|\ud83d\udc54|\ud83d\udc55|\ud83d\udc56|\ud83d\udc57|\ud83d\udc58|\ud83d\udc59|\ud83d\udc5a|\ud83d\udc5b|\ud83d\udc5c|\ud83d\udc5d|\ud83d\udc5e|\ud83d\udc5f|\ud83d\udc60|\ud83d\udc61|\ud83d\udc62|\ud83d\udc63|\ud83d\udc64|\ud83d\udc66|\ud83d\udc67|\ud83d\udc68|\ud83d\udc69|\ud83d\udc6a|\ud83d\udc6b|\ud83d\udc6e|\ud83d\udc6f|\ud83d\udc70|\ud83d\udc71|\ud83d\udc72|\ud83d\udc73|\ud83d\udc74|\ud83d\udc75|\ud83d\udc76|\ud83d\udc77|\ud83d\udc78|\ud83d\udc79|\ud83d\udc7a|\ud83d\udc7b|\ud83d\udc7c|\ud83d\udc7d|\ud83d\udc7e|\ud83d\udc7f|\ud83d\udc80|\ud83d\udc81|\ud83d\udc82|\ud83d\udc83|\ud83d\udc84|\ud83d\udc85|\ud83d\udc86|\ud83d\udc87|\ud83d\udc88|\ud83d\udc89|\ud83d\udc8a|\ud83d\udc8b|\ud83d\udc8c|\ud83d\udc8d|\ud83d\udc8e|\ud83d\udc8f|\ud83d\udc90|\ud83d\udc91|\ud83d\udc92|\ud83d\udc93|\ud83d\udc94|\ud83d\udc95|\ud83d\udc96|\ud83d\udc97|\ud83d\udc98|\ud83d\udc99|\ud83d\udc9a|\ud83d\udc9b|\ud83d\udc9c|\ud83d\udc9d|\ud83d\udc9e|\ud83d\udc9f|\ud83d\udca0|\ud83d\udca1|\ud83d\udca2|\ud83d\udca3|\ud83d\udca4|\ud83d\udca5|\ud83d\udca6|\ud83d\udca7|\ud83d\udca8|\ud83d\udca9|\ud83d\udcaa|\ud83d\udcab|\ud83d\udcac|\ud83d\udcae|\ud83d\udcaf|\ud83d\udcb0|\ud83d\udcb1|\ud83d\udcb2|\ud83d\udcb3|\ud83d\udcb4|\ud83d\udcb5|\ud83d\udcb8|\ud83d\udcb9|\ud83d\udcba|\ud83d\udcbb|\ud83d\udcbc|\ud83d\udcbd|\ud83d\udcbe|\ud83d\udcbf|\ud83d\udcc0|\ud83d\udcc1|\ud83d\udcc2|\ud83d\udcc3|\ud83d\udcc4|\ud83d\udcc5|\ud83d\udcc6|\ud83d\udcc7|\ud83d\udcc8|\ud83d\udcc9|\ud83d\udcca|\ud83d\udccb|\ud83d\udccc|\ud83d\udccd|\ud83d\udcce|\ud83d\udccf|\ud83d\udcd0|\ud83d\udcd1|\ud83d\udcd2|\ud83d\udcd3|\ud83d\udcd4|\ud83d\udcd5|\ud83d\udcd6|\ud83d\udcd7|\ud83d\udcd8|\ud83d\udcd9|\ud83d\udcda|\ud83d\udcdb|\ud83d\udcdc|\ud83d\udcdd|\ud83d\udcde|\ud83d\udcdf|\ud83d\udce0|\ud83d\udce1|\ud83d\udce2|\ud83d\udce3|\ud83d\udce4|\ud83d\udce5|\ud83d\udce6|\ud83d\udce7|\ud83d\udce8|\ud83d\udce9|\ud83d\udcea|\ud83d\udceb|\ud83d\udcee|\ud83d\udcf0|\ud83d\udcf1|\ud83d\udcf2|\ud83d\udcf3|\ud83d\udcf4|\ud83d\udcf6|\ud83d\udcf7|\ud83d\udcf9|\ud83d\udcfa|\ud83d\udcfb|\ud83d\udcfc|\ud83d\udd03|\ud83d\udd0a|\ud83d\udd0b|\ud83d\udd0c|\ud83d\udd0d|\ud83d\udd0e|\ud83d\udd0f|\ud83d\udd10|\ud83d\udd11|\ud83d\udd12|\ud83d\udd13|\ud83d\udd14|\ud83d\udd16|\ud83d\udd17|\ud83d\udd18|\ud83d\udd19|\ud83d\udd1a|\ud83d\udd1b|\ud83d\udd1c|\ud83d\udd1d|\ud83d\udd1e|\ud83d\udd1f|\ud83d\udd20|\ud83d\udd21|\ud83d\udd22|\ud83d\udd23|\ud83d\udd24|\ud83d\udd25|\ud83d\udd26|\ud83d\udd27|\ud83d\udd28|\ud83d\udd29|\ud83d\udd2a|\ud83d\udd2b|\ud83d\udd2e|\ud83d\udd2f|\ud83d\udd30|\ud83d\udd31|\ud83d\udd32|\ud83d\udd33|\ud83d\udd34|\ud83d\udd35|\ud83d\udd36|\ud83d\udd37|\ud83d\udd38|\ud83d\udd39|\ud83d\udd3a|\ud83d\udd3b|\ud83d\udd3c|\ud83d\udd3d|\ud83d\udd50|\ud83d\udd51|\ud83d\udd52|\ud83d\udd53|\ud83d\udd54|\ud83d\udd55|\ud83d\udd56|\ud83d\udd57|\ud83d\udd58|\ud83d\udd59|\ud83d\udd5a|\ud83d\udd5b|\ud83d\uddfb|\ud83d\uddfc|\ud83d\uddfd|\ud83d\uddfe|\ud83d\uddff|\ud83d\ude01|\ud83d\ude02|\ud83d\ude03|\ud83d\ude04|\ud83d\ude05|\ud83d\ude06|\ud83d\ude09|\ud83d\ude0a|\ud83d\ude0b|\ud83d\ude0c|\ud83d\udeb4|\ud83d\ude0f|\ud83d\ude12|\ud83d\ude13|\ud83d\ude14|\ud83d\ude16|\ud83d\ude18|\ud83d\ude1a|\ud83d\ude1c|\ud83d\ude1d|\ud83d\ude1e|\ud83d\ude20|\ud83d\ude21|\ud83d\ude22|\ud83d\ude23|\ud83d\ude24|\ud83d\ude25|\ud83d\ude28|\ud83d\ude29|\ud83d\ude2a|\ud83d\ude2b|\ud83d\ude2d|\ud83d\ude30|\ud83d\ude31|\ud83d\ude32|\ud83d\ude33|\ud83d\ude35|\ud83d\ude37|\ud83d\ude38|\ud83d\ude39|\ud83d\ude3a|\ud83d\ude3b|\ud83d\ude3c|\ud83d\ude3d|\ud83d\ude3e|\ud83d\ude3f|\ud83d\ude40|\ud83d\ude45|\ud83d\ude46|\ud83d\ude47|\ud83d\ude48|\ud83d\ude49|\ud83d\ude4a|\ud83d\ude4b|\ud83d\ude4c|\ud83d\ude4d|\ud83d\ude4e|\ud83d\ude4f|\ud83d\ude80|\ud83d\ude83|\ud83d\ude84|\ud83d\ude85|\ud83d\ude87|\ud83d\ude89|\ud83d\ude8c|\ud83d\ude8f|\ud83d\ude91|\ud83d\ude92|\ud83d\ude93|\ud83d\ude95|\ud83d\ude97|\ud83d\ude99|\ud83d\ude9a|\ud83d\udea2|\ud83d\udea4|\ud83d\udea5|\ud83d\udea7|\ud83d\udea8|\ud83d\udea9|\ud83d\udeaa|\ud83d\udeab|\ud83d\udeac|\ud83d\udead|\ud83d\udeb2|\ud83d\udeb6|\ud83d\udeb9|\ud83d\udeba|\ud83d\udebb|\ud83d\udebc|\ud83d\udebd|\ud83d\udebe|\ud83d\udec0|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ud83c\udf18|\ud83c\udf1a|\ud83c\udf1c|\ud83c\udf1d|\ud83c\udf1e|\ud83c\udf32|\ud83c\udf33|\ud83c\udf4b|\ud83c\udf50|\ud83c\udf7c|\ud83c\udfc7|\ud83c\udfc9|\ud83c\udfe4|\ud83d\udc00|\ud83d\udc01|\ud83d\udc02|\ud83d\udc03|\ud83d\udc04|\ud83d\udc05|\ud83d\udc06|\ud83d\udc07|\ud83d\udc08|\ud83d\udc09|\ud83d\udc0a|\ud83d\udc0b|\ud83d\udc0f|\ud83d\udc10|\ud83d\udc13|\ud83d\udc15|\ud83d\udc16|\ud83d\udc2a|\ud83d\udc65|\ud83d\udc6c|\ud83d\udc6d|\ud83d\udcad|\ud83d\udcb6|\ud83d\udcb7|\ud83d\udcec|\ud83d\udced|\ud83d\udcef|\ud83d\udcf5|\ud83d\udd00|\ud83d\udd01|\ud83d\udd02|\ud83d\udd04|\ud83d\udd05|\ud83d\udd06|\ud83d\udd07|\ud83d\udd08|\ud83d\udd09|\ud83d\udd15|\ud83d\udd2c|\ud83d\udd2d|\ud83d\udd5c|\ud83d\udd5d|\ud83d\udd5e|\ud83d\udd5f|\ud83d\udd60|\ud83d\udd61|\ud83d\udd62|\ud83d\udd63|\ud83d\udd64|\ud83d\udd65|\ud83d\udd66|\ud83d\udd67|\ud83d\ude00|\ud83d\ude07|\ud83d\ude08|\ud83d\ude0e|\ud83d\ude10|\ud83d\ude11|\ud83d\ude15|\ud83d\ude17|\ud83d\ude19|\ud83d\ude1b|\ud83d\ude1f|\ud83d\ude26|\ud83d\ude27|\ud83d\ude2c|\ud83d\ude2e|\ud83d\ude2f|\ud83d\ude34|\ud83d\ude36|\ud83d\ude81|\ud83d\ude82|\ud83d\ude86|\ud83d\ude88|\ud83d\ude8a|\ud83d\ude8b|\ud83d\ude8d|\ud83d\ude8e|\ud83d\ude90|\ud83d\ude94|\ud83d\ude96|\ud83d\ude98|\ud83d\ude9b|\ud83d\ude9c|\ud83d\ude9d|\ud83d\ude9e|\ud83d\ude9f|\ud83d\udea0|\ud83d\udea1|\ud83d\udea3|\ud83d\udea6|\ud83d\udeae|\ud83d\udeaf|\ud83d\udeb0|\ud83d\udeb1|\ud83d\udeb3|\ud83d\udeb4|\ud83d\udeb5|\ud83d\udeb7|\ud83d\udeb8|\ud83d\udebf|\ud83d\udec1|\ud83d\udec2|\ud83d\udec3|\ud83d\udec4|\ud83d\udec5|\ud83c\udf17|\ud83c\udf16|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ud83c\udf18|\ud83c\udf1a|\ud83c\udf1c|\ud83c\udf1d|\ud83c\udf1e|\ud83c\udf32|\ud83c\udf33|\ud83c\udf4b|\ud83c\udf50|\ud83c\udf7c|\ud83c\udfc7|\ud83c\udfc9|\ud83c\udfe4|\ud83d\udc00|\ud83d\udc01|\ud83d\udc02|\ud83d\udc03|\ud83d\udc04|\ud83d\udc05|\ud83d\udc06|\ud83d\udc07|\ud83d\udc08|\ud83d\udc09|\ud83d\udc0a|\ud83d\udc0b|\ud83d\udc0f|\ud83d\udc10|\ud83d\udc13|\ud83d\udc15|\ud83d\udc16|\ud83d\udc2a|\ud83d\udc65|\ud83d\udc6c|\ud83d\udc6d|\ud83d\udcad|\ud83d\udcb6|\ud83d\udcb7|\ud83d\udcec|\ud83d\udced|\ud83d\udcef|\ud83d\udcf5|\ud83d\udd00|\ud83d\udd01|\ud83d\udd02|\ud83d\udd04|\ud83d\udd05|\ud83d\udd06|\ud83d\udd07|\ud83d\udd08|\ud83d\udd09|\ud83d\udd15|\ud83d\udd2c|\ud83d\udd2d|\ud83d\udd5c|\ud83d\udd5d|\ud83d\udd5e|\ud83d\udd5f|\ud83d\udd60|\ud83d\udd61|\ud83d\udd62|\ud83d\udd63|\ud83d\udd64|\ud83d\udd65|\ud83d\udd66|\ud83d\udd67|\ud83d\ude00|\ud83d\ude07|\ud83d\ude08|\ud83d\ude0e|\ud83d\ude10|\ud83d\ude11|\ud83d\ude15|\ud83d\ude17|\ud83d\ude19|\ud83d\ude1b|\ud83d\ude1f|\ud83d\ude26|\ud83d\ude27|\ud83d\ude2c|\ud83d\ude2e|\ud83d\ude2f|\ud83d\ude34|\ud83d\ude36|\ud83d\ude81|\ud83d\ude82|\ud83d\ude86|\ud83d\ude88|\ud83d\ude8a|\ud83d\ude8b|\ud83d\ude8d|\ud83d\ude8e|\ud83d\ude90|\ud83d\ude94|\ud83d\ude96|\ud83d\ude98|\ud83d\ude9b|\ud83d\ude9c|\ud83d\ude9d|\ud83d\ude9e|\ud83d\ude9f|\ud83d\udea0|\ud83d\udea1|\ud83d\udea3|\ud83d\udea6|\ud83d\udeae|\ud83d\udeaf|\ud83d\udeb0|\ud83d\udeb1|\ud83d\udeb3|\ud83d\udeb4|\ud83d\udeb5|\ud83d\udeb7|\ud83d\udeb8|\ud83d\udebf|\ud83d\udec1|\ud83d\udec2|\ud83d\udec3|\ud83d\udec4|\ud83d\udec5|\ud83c\udf12|\ud83c\udf10|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ue50a|\ue50a|\ue50a|\u27bf|\u3030|\u27b0|\u2797|\u2796|\u2795|\u2755|\u2754|\u2753|\u274e|\u274c|\u2728|\u270b|\u270a|\u2705|\u26ce|\u27bf|\u23f3|\u23f0|\u23ec|\u23eb|\u23ea|\u23e9|\u2122|\u27bf|\u00a9|\u00ae)|(?:(?:\ud83c\udc04|\ud83c\udd7f|\ud83c\ude1a|\ud83c\ude2f|\u3299|\u3297|\u303d|\u2b55|\u2b50|\u2b1c|\u2b1b|\u2b07|\u2b06|\u2b05|\u2935|\u2934|\u27a1|\u2764|\u2757|\u2747|\u2744|\u2734|\u2733|\u2716|\u2714|\u2712|\u270f|\u270c|\u2709|\u2708|\u2702|\u26fd|\u26fa|\u26f5|\u26f3|\u26f2|\u26ea|\u26d4|\u26c5|\u26c4|\u26be|\u26bd|\u26ab|\u26aa|\u26a1|\u26a0|\u2693|\u267b|\u2668|\u2666|\u2665|\u2663|\u2660|\u2653|\u2652|\u2651|\u2650|\u264f|\u264e|\u264d|\u264c|\u264b|\u264a|\u2649|\u2648|\u263a|\u261d|\u2615|\u2614|\u2611|\u260e|\u2601|\u2600|\u25fe|\u25fd|\u25fc|\u25fb|\u25c0|\u25b6|\u25ab|\u25aa|\u24c2|\u231b|\u231a|\u21aa|\u21a9|\u2199|\u2198|\u2197|\u2196|\u2195|\u2194|\u2139|\u2049|\u203c|\u267f)([\uFE0E\uFE0F]?)))/g,

    // nodes with type 1 which should **not** be parsed
    shouldntBeParsed = /IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|STYLE/,

    // just a private shortcut
    fromCharCode = String.fromCharCode;

  return twemoji;


  /////////////////////////
  //  private functions  //
  //     declaration     //
  /////////////////////////

  /**
   * Shortcut to create text nodes
   * @param   string  text used to create DOM text node
   * @return  Node  a DOM node with that text
   */
  function createText(text) {
    return document.createTextNode(text);
  }

  /**
   * Default callback used to generate emoji src
   *  based on Twitter CDN
   * @param   string    the emoji codepoint string
   * @param   string    the default size to use, i.e. "36x36"
   * @param   string    optional "\uFE0F" variant char, ignored by default
   * @return  string    the image source to use
   */
  function defaultImageSrcGenerator(icon, options) {
    return ''.concat(options.base, options.size, '/', icon, options.ext);
  }

  /**
   * Given a generic DOM nodeType 1, walk through all children
   * and store every nodeType 3 (#text) found in the tree.
   * @param   Element a DOM Element with probably some text in it
   * @param   Array the list of previously discovered text nodes
   * @return  Array same list with new discovered nodes, if any
   */
  function grabAllTextNodes(node, allText) {
    var
      childNodes = node.childNodes,
      length = childNodes.length,
      subnode,
      nodeType;
    while (length--) {
      subnode = childNodes[length];
      nodeType = subnode.nodeType;
      // parse emoji only in text nodes
      if (nodeType === 3) {
        // collect them to process emoji later
        allText.push(subnode);
      }
      // ignore all nodes that are not type 1 or that
      // should not be parsed as script, style, and others
      else if (nodeType === 1 && !shouldntBeParsed.test(subnode.nodeName)) {
        grabAllTextNodes(subnode, allText);
      }
    }
    return allText;
  }

  /**
   * Used to both remove the possible variant
   *  and to convert utf16 into code points
   * @param   string    the emoji surrogate pair
   * @param   string    the optional variant char, if any
   */
  function grabTheRightIcon(icon, variant) {
    // if variant is present as \uFE0F
    return toCodePoint(
      variant === '\uFE0F' ?
        // the icon should not contain it
        icon.slice(0, -1) :
        icon
    );
  }

  /**
   * DOM version of the same logic / parser:
   *  emojify all found sub-text nodes placing images node instead.
   * @param   Element   generic DOM node with some text in some child node
   * @param   Object    options  containing info about how to parse
    *
    *            .callback   Function  the callback to invoke per each found emoji.
    *            .base       string    the base url, by default twemoji.base
    *            .ext        string    the image extension, by default twemoji.ext
    *            .size       string    the assets size, by default twemoji.size
    *
   * @return  Element same generic node with emoji in place, if any.
   */
  function parseNode(node, options) {
    var
      allText = grabAllTextNodes(node, []),
      length = allText.length,
      fragment,
      subnode,
      text,
      match,
      i,
      index,
      img,
      alt,
      icon,
      variant,
      src;
    while (length--) {
      fragment = document.createDocumentFragment();
      subnode = allText[length];
      text = subnode.nodeValue;
      i = 0;
      while ((match = re.exec(text))) {
        index = match.index;
        if (index !== i) {
          fragment.appendChild(
            createText(text.slice(i, index))
          );
        }
        alt = match[0];
        icon = match[1];
        variant = match[2];
        i = index + alt.length;
        if (variant !== '\uFE0E') {
          src = options.callback(
            grabTheRightIcon(icon, variant),
            options,
            variant
          );
          if (src) {
            img = new Image();
            img.onerror = twemoji.onerror;
            img.className = 'emoji';
            img.setAttribute('draggable', 'false');
            img.alt = alt;
            img.src = src;
          }
        }
        fragment.appendChild(img || createText(alt));
        img = null;
      }
      // is there actually anything to replace in here ?
      if (0 < i) {
        // any text left to be added ?
        if (i < text.length) {
          fragment.appendChild(
            createText(text.slice(i))
          );
        }
        // replace the text node only, leave intact
        // anything else surrounding such text
        subnode.parentNode.replaceChild(fragment, subnode);
      }
    }
    return node;
  }

  /**
   * String/HTML version of the same logic / parser:
   *  emojify a generic text placing images tags instead of surrogates pair.
   * @param   string    generic string with possibly some emoji in it
   * @param   Object    options  containing info about how to parse
   *
   *            .callback   Function  the callback to invoke per each found emoji.
   *            .base       string    the base url, by default twemoji.base
   *            .ext        string    the image extension, by default twemoji.ext
   *            .size       string    the assets size, by default twemoji.size
   *
   * @return  the string with <img tags> replacing all found and parsed emoji
   */
  function parseString(str, options) {
    return replace(str, function (match, icon, variant) {
      var src;
      // verify the variant is not the FE0E one
      // this variant means "emoji as text" and should not
      // require any action/replacement
      // http://unicode.org/Public/UNIDATA/StandardizedVariants.html
      if (variant !== '\uFE0E') {
        src = options.callback(
          grabTheRightIcon(icon, variant),
          options,
          variant
        );
        if (src) {
          // recycle the match string replacing the emoji
          // with its image counter part
          match = '<img '.concat(
            'class="emoji" ',
            'draggable="false" ',
            // needs to preserve user original intent
            // when variants should be copied and pasted too
            'alt="',
            match,
            '" ',
            'src="',
            src,
            '"',
            '>'
          );
        }
      }
      return match;
    });
  }

  /**
   * Given a generic value, creates its squared counterpart if it's a number.
   *  As example, number 36 will return '36x36'.
   * @param   any     a generic value.
   * @return  any     a string representing asset size, i.e. "36x36"
   *                  only in case the value was a number.
   *                  Returns initial value otherwise.
   */
  function toSizeSquaredAsset(value) {
    return typeof value === 'number' ?
      value + 'x' + value :
      value;
  }


  /////////////////////////
  //  exported functions //
  //     declaration     //
  /////////////////////////

  function fromCodePoint(codepoint) {
    var code = typeof codepoint === 'string' ?
          parseInt(codepoint, 16) : codepoint;
    if (code < 0x10000) {
      return fromCharCode(code);
    }
    code -= 0x10000;
    return fromCharCode(
      0xD800 + (code >> 10),
      0xDC00 + (code & 0x3FF)
    );
  }

  function parse(what, how) {
    if (!how || typeof how === 'function') {
      how = {callback: how};
    }
    // if first argument is string, inject html <img> tags
    // otherwise use the DOM tree and parse text nodes only
    return (typeof what === 'string' ? parseString : parseNode)(what, {
      callback: how.callback || defaultImageSrcGenerator,
      base:     typeof how.base === 'string' ? how.base : twemoji.base,
      ext:      how.ext || twemoji.ext,
      size:     "svg" // toSizeSquaredAsset(how.size || twemoji.size)
    });
  }

  function replace(text, callback) {
    return String(text).replace(re, callback);
  }

  function test(text) {
    // IE6 needs a reset before too
    re.lastIndex = 0;
    var result = re.test(text);
    re.lastIndex = 0;
    return result;
  }

  function toCodePoint(unicodeSurrogates, sep) {
    var
      r = [],
      c = 0,
      p = 0,
      i = 0;
    while (i < unicodeSurrogates.length) {
      c = unicodeSurrogates.charCodeAt(i++);
      if (p) {
        r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
        p = 0;
      } else if (0xD800 <= c && c <= 0xDBFF) {
        p = c;
      } else {
        r.push(c.toString(16));
      }
    }
    return r.join(sep || '-');
  }

}());

;
var JetpackEmoji = {
		EMOJI_SIZE: 72,
		BASE_URL: '//s0.wp.com/wp-content/mu-plugins/emoji/twemoji/',

        parse: function( element, size, base_url ) {
            twemoji.parse( element, {
                size: size || this.EMOJI_SIZE,
				base: base_url || this.BASE_URL,
				callback: function(icon, options, variant) {
					// Ignore some standard characters that TinyMCE recommends in its character map.
					// https://teamtinker.wordpress.com/2014/10/29/emoji-launch-week/#comment-2103
					switch ( icon ) {
						case 'a9':
						case 'ae':
						case '2122':
						case '2194':
						case '2660':
						case '2663':
						case '2665':
						case '2666':
							return false;
					}
				
					// directly from twemoji
					return ''.concat(options.base, options.size, '/', icon, options.ext);
				}
            } );
        }
}
;
(function() {
    var emoji = {	
        init: function() {
			if ( typeof JetpackEmoji === 'undefined' ) {
				console.error( 'JetpackEmoji not found.' );
				return;
			}

			var size, base_url;
			if ( typeof JetpackEmojiSettings !== 'undefined' ) {
				size = JetpackEmojiSettings.size || null;
				base_url = JetpackEmojiSettings.base_url || null;
			}	

            JetpackEmoji.parse( document.body, size, base_url );

            if ( typeof infiniteScroll !== 'undefined' ) {
                jQuery( document.body ).on( 'post-load', function( response ) {
                    // TODO: ideally, we should only target the newly added elements
                    JetpackEmoji.parse( document.body, size, base_url );
                } );
            }
        }
    };

    if ( window.addEventListener ) {
        window.addEventListener( 'load', emoji.init, false );
    } else if ( window.attachEvent ) {
        window.attachEvent( 'onload', emoji.init );
    }
})();
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;'
  };

  function escapeHTML(string) {
    return String(string).replace(/&(?!\w+;)|[<>"']/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);
;
/* Common front-end code for the Notifications system
 *	- wpNotesCommon wraps all the proxied REST calls
 *	- wpNoteModel & wpNoteList are Backbone.js Model, & Collection implementations
 */

var wpNotesCommon;
var wpNotesCommentModView;
var wpNoteList;
var wpNoteModel;

(function($){
	var cookies = document.cookie.split( /;\s*/ ), cookie = false;
	for ( i = 0; i < cookies.length; i++ ) {
		if ( cookies[i].match( /^wp_api=/ ) ) {
			cookies = cookies[i].split( '=' );
			cookie = cookies[1];
			break;
		}
	}

	wpNotesCommon = {
		jsonAPIbase: 'https://public-api.wordpress.com/rest/v1',
		hasUpgradedProxy: false,

		noteTypes: {
			comment: 'comment',
			follow: 'follow',
			like: [
				'like',
				'like_trap'
			],
			reblog: 'reblog',
			trophy: [
				'best_liked_day_feat',
				'like_milestone_achievement',
				'achieve_automattician_note',
				'achieve_user_anniversary',
				'best_followed_day_feat',
				'followed_milestone_achievement'
			],
			'alert': [
				'expired_domain_alert'
			]
		},

		noteType2Noticon: {
			'like': 'like',
			'follow': 'follow',
			'comment_like': 'like',
			'comment': 'comment',
			'comment_pingback': 'external',
			'reblog': 'reblog',
			'like_milestone_achievement': 'trophy',
			'achieve_followed_milestone_note': 'trophy',
			'achieve_user_anniversary': 'trophy',
			'best_liked_day_feat': 'milestone',
			'best_followed_day_feat': 'milestone',
			'automattician_achievement': 'trophy',
			'expired_domain_alert': 'alert',
			'automattcher': 'atsign'
		},
	
		createNoteContainer: function( note, id_prefix ) {
			var note_container = $('<div/>', {
				id : id_prefix + '-note-' + note.id,
				'class' : 'wpn-note wpn-' + note.type + ' ' + ( ( note.unread > 0 ) ? 'wpn-unread' : 'wpn-read' )
			}).data( {
				id: parseInt( note.id, 10 ),
				type: note.type
			});
			var note_body = $('<div/>', { "class":"wpn-note-body wpn-note-body-empty" } );
			var spinner = $( '<div/>', { style : 'position: absolute; left: 180px; top: 60px;' } );
			note_body.append( spinner );
			spinner.spin( 'medium' );
			note_container.append(
				this.createNoteSubject( note ),
				note_body
			);
	
			return note_container;
		},
	
		createNoteSubject: function( note ) {
			var subj = $('<div/>', { "class":"wpn-note-summary" } ).append(
				$('<span/>', {
					"class" : 'wpn-noticon noticon noticon' + note.noticon
				}),
				$('<span/>', {
					"class" : 'wpn-icon no-grav',
						html : $('<img/>', {
							src : note.subject.icon,
							width : '24px',
							height : '24px',
							style : 'display: inline-block; width: 24px; height: 24px; overflow-x: hidden; overflow-y: hidden;'
						})
				}),
				$('<span/>', {
					"class" : 'wpn-subject',
					html : note.subject.html
				})
			);
			return subj;
		},
	
	
		createNoteBody: function( note_model ) {
			var note_body = $('<div/>', { "class":"wpn-note-body" } );
			var note = note_model.toJSON();
			var class_prefix = 'wpn-' + note.body.template;
			switch( note.body.template ) {
				case 'single-line-list' :
				case 'multi-line-list' :
					note_body.append( 
						$( '<p/>' ).addClass( class_prefix + '-header' ).html( note.body.header )
					);

					for ( var i in note.body.items ) {
						var item = $('<div></div>', { 
							'class' : class_prefix + '-item ' + class_prefix + '-item-' + i + 
								( note.body.items[i].icon ? '' : ' ' + class_prefix + '-item-no-icon' )
						});
						if ( note.body.items[i].icon ) {
							item.append(
								$('<img/>', { 
									"class" : class_prefix + '-item-icon avatar avatar-' + note.body.items[i].icon_width,
									height: note.body.items[i].icon_height,
									width: note.body.items[i].icon_width,
									src: note.body.items[i].icon
							} ) );
						}
						if ( note.body.items[i].header ) {
							item.append(
								$('<div></div>', { 'class' : class_prefix + '-item-header' }
							).html( note.body.items[i].header ) );
						}
						if ( note.body.items[i].action ) {
							switch ( note.body.items[i].action.type ) {
								case 'follow' :
									var button = wpFollowButton.create( note.body.items[i].action );
									item.append( button );
									// Attach action stat tracking for follows
									button.click( function(e) {
										if ( $( this ).children('a').hasClass( 'wpcom-follow-rest' ) )
											wpNotesCommon.bumpStat( 'notes-click-action', 'unfollow' );
										else
											wpNotesCommon.bumpStat( 'notes-click-action', 'follow' );
										return true;
									} );
									break;
								default :
									console.error( "Unsupported " + note.type + " action: " + note.body.items[i].action.type );
									break;
							}
						}
						if ( note.body.items[i].html ) {
							item.append(
								$('<div></div>', { 'class' : class_prefix + '-item-body' }
							).html( note.body.items[i].html ) );
						}
						note_body.append( item );
					}
	
					if ( note.body.actions ) {
						var note_actions = new wpNotesCommentModView( { model: note_model } );
						note_actions.render();
						note_body.append( note_actions.el );
					}
	
					if ( note.body.footer ) {
						note_body.append( 
							$( '<p/>' ).addClass( class_prefix + '-footer' ).html( note.body.footer )
						);
					}
					break;
				case 'big-badge' :
					if ( note.body.header ) {
						note_body.append( 
							$( '<div/>' ).addClass( class_prefix + '-header' ).html( note.body.header )
						);
					}
	
					if ( note.body.badge ) {
						note_body.append( $('<div></div>', { 
							'class' : class_prefix + '-badge ' 
						}).append( note.body.badge ) );
					}
	
					if ( note.body.html !== '' ) {
						note_body.append( 
							$( '<div/>' ).addClass( class_prefix + '-footer' ).html( note.body.html )
						);
					}
	
					break;
				default :
					note_body.text( 'Unsupported note body template!' );
					break;
			}

			note_body.find( 'a[notes-data-click]' ).mousedown( function(e) {
				var type = $(this).attr( 'notes-data-click' );
				wpNotesCommon.bumpStat( 'notes-click-body', type );
				return true;
			} );
	
			return note_body;		
		},
	
		getNoteSubjects: function( query_params, success, fail ) {
			query_params.fields = 'id,type,unread,noticon,timestamp,subject';
			query_params.trap = true;
			return this.getNotes( query_params, success, fail );
		},

		getNotes: function( query_params, success, fail ) {
			return this.ajax({
				type:    'GET',
				path:    '/notifications/',
				data:    query_params,
				success: success,
				error:   fail
			});
		},

		getMentions: function( query_params, success ) {
			return this.ajax({
				type:    'GET',
				path:    '/users/suggest',
				data:    query_params,
				success: success
			});
		},
		
		markNotesSeen: function( timestamp ) {
			return this.ajax({
				type:    'POST',
				path:    '/notifications/seen',
				data:    { time: timestamp }
			});
		},
	
		markNotesRead: function( unread_cnts ) {
			var query_args = {};
			var t = this;

			for ( var id in unread_cnts ) {
				if ( unread_cnts[ id ] > 0 ) {
					query_args['counts[' + id + ']'] = unread_cnts[ id ];
				}
			}

			if ( 0 === query_args.length ) {
				return (new $.Deferred()).resolve( 'no unread notes' );
			}
			
			return this.ajax({
				type : 'POST',
				path : '/notifications/read',
				data : query_args,
				success : function( res ) { },
				error : function( res ) { }
			});
		},

		ajax: function( options ) {
			var t = this;
			var request = {
				path: options.path,
				method: options.type
			};

			if ( options.type.toLowerCase() == 'post' )
				request.body = options.data;
			else
				request.query = options.data;

			return $.Deferred( function( dfd ) {
				var makeProxyCall = function() {
					$.wpcom_proxy_request( request, function( response, statusCode ) { 
						if ( 200 == statusCode ) {
							if ( 'function' == typeof options.success ) {
								options.success( response );
							}
							return dfd.resolve( response );
						}
						if ( 'function' == typeof options.error ) {
							options.error( statusCode );
						}
						else {
							console.error( statusCode );
						}
						return dfd.reject( statusCode );
					});
				};

				if ( t.hasUpgradedProxy ) {
					return makeProxyCall();
				}
				return $.wpcom_proxy_request( { metaAPI: { accessAllUsersBlogs: true } } ).done( function() {
					t.hasUpgradedProxy = true;
					makeProxyCall();
				} );	
			});
		},
	
		bumpStat: function( group, names ) {
			if ( 'undefined' != typeof wpNotesIsJetpackClient && wpNotesIsJetpackClient ) {
				var jpStats = [ 'notes-menu-impressions', 'notes-menu-clicks' ];
				if ( _.contains( jpStats, group ) ) {
					names = names.replace( /(,|$)/g, '-jetpack$1' );
				}
			}
			new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_' + group + '=' + names + '&baba=' + Math.random();
		},

		getKeycode: function( key_event ) {
			//determine if we can use this key event to trigger the menu
			key_event = key_event || window.event;
			if ( key_event.target )
				element = key_event.target;
			else if ( key_event.srcElement )
				element = key_event.srcElement;
			if( element.nodeType == 3 ) //text node, check the parent
				element = element.parentNode;
			
			if( key_event.ctrlKey === true || key_event.altKey === true || key_event.metaKey === true )
				return false;
		
			var keyCode = ( key_event.keyCode ) ? key_event.keyCode : key_event.which;

			if ( keyCode && ( element.tagName == 'INPUT' || element.tagName == 'TEXTAREA' || element.tagName == 'SELECT' ) )
				return false;

			if ( keyCode && element.contentEditable == "true" )
				return false;

			return keyCode;
		}
	};

	wpNoteModel = Backbone.Model.extend({
		defaults: {
			summary: "",
			unread: true
		},

		_reloadBlocked: false,

		initialize: function() {			
		},

		markRead: function() {
			var unread_cnt = this.get( 'unread' );
			if ( Boolean( parseInt( unread_cnt, 10 ) ) ) {
				var notes = {};
				notes[ this.id ] = unread_cnt;
				wpNotesCommon.markNotesRead( notes );
				wpNotesCommon.bumpStat( 'notes-read-type', this.get( 'type' ) );
			}
		},
		
		loadBody: function() {
			wpNotesCommon.createNoteBody( this );
		},

		reload: function() {
			var t = this;
			var fields = 'id,type,unread,noticon,subject,body,date,timestamp,status';
			if ( 'comment' == t.get( 'type' ) ) {
				fields += ',approval_status,has_replied';
			}
			if (!force && this.isReloadingBlocked()) {
				return $.Deferred().reject('reloading blocked');
			}
			return wpNotesCommon.getNotes( {
				fields: fields,
				trap: true,
				ids: [ t.get('id') ]
			}, function ( res ) {
				var notes = res.notes;
				if ( typeof notes[0] !== 'undefined' ) {
					t.set( notes[ 0 ] );
				}
			}, function() {
				//ignore failure
			} );
		},

		resize: function() {
			this.trigger( 'resize' );
		},

		/* Block the model from being reloaded for a specified number of seconds
		 * needed b/c in the case of Jetpack, it takes a while for the new status to sync back to wpcom
		 * & this prevents it flashing back and forth
		 */
		
		blockReloading: function(seconds) {
			var _this = this;
			this._reloadBlocked = true;
			clearTimeout(this.reloadBlockerTimeout);
			return this.reloadBlockerTimeout = setTimeout(function() {
				return _this._reloadBlocked = false;
			}, seconds * 1000);
		},

		isReloadingBlocked: function() {
			return this._reloadBlocked;
		}
	});

	wpNoteList = Backbone.Collection.extend({
		model:   wpNoteModel,
		lastMarkedSeenTimestamp : false,
		newNotes: false,
		maxNotes : false,
		loading: false,
		hasLoaded: false,
		allBodiesLoaded: false,

		//always sort by timpstamp
		comparator: function( note ) {
			return -note.get( 'timestamp' );
		},

		addNotes: function( notes ) {
			// Filter out any notes that have no subject
			notes = _.filter( notes, function(note) { return typeof( note.subject ) === "object"; } );
			var models = _.map( notes, function(o) { return new wpNoteModel(o); });
			this.add( models );
			this.sort(); //ensure we maintain sorted order
			if ( this.maxNotes ) {
				while( this.length > this.maxNotes ) {
					this.pop();
				}
			}
			this.trigger( 'loadNotes:change' );
		},

		getMostRecentTimestamp: function() {
			if ( !this.length ) {
				return false;
			}

			//ensure we maintain sorted order see the comparator function
			this.sort();
			return parseInt( this.at(0).get( 'timestamp' ), 10 );
		},

		// load notes from the server
		loadNotes: function( query_args ) {
			var t = this;

			t.loading = true;
			t.trigger( 'loadNotes:beginLoading' );
			
			var fields = query_args.fields;
			var number = parseInt( query_args.number, 10 );
			var before = parseInt( query_args.before, 10 );
			var since = parseInt( query_args.since, 10 );
			var timeout = parseInt( query_args.timeout, 10 ) || 7000;
			var type = 'undefined' == typeof query_args.type ? null : query_args.type;
			var unread = 'undefined' == typeof query_args.unread ? null : query_args.unread;

			query_args = {
				timeout: timeout
			};
			
			if ( ! fields ) {
				fields = 'id,type,unread,noticon,subject,body,date,timestamp,status';
			}
			
			if ( isNaN( number ) ) {
				number = 9;
			}
			
			if ( ! isNaN( before ) ) {
				query_args.before = before;
			}
			if ( ! isNaN( since ) ) {
				query_args.since = since;
			}

			if ( unread !== null ) {
				query_args.unread = unread;
			}

			if ( type !== null && type != "unread" && type != "latest" ) {
				query_args.type = type;
			}
			
			query_args.number = number;
			query_args.fields = fields;
			query_args.trap = true;

			return wpNotesCommon.getNotes( query_args ).done( function ( res ) {
				var qt;
				var notes = res.notes;
				var notes_changed = false;
				if ( !t.lastMarkedSeenTimestamp || ( res.last_seen_time > t.lastMarkedSeenTimestamp ) ) { 
					notes_changed = true; 
					t.lastMarkedSeenTimestamp = parseInt( res.last_seen_time, 10 );
				} 

				for( var idx in notes ) {
					var note_model = t.get( notes[idx].id );
					if ( note_model ) {
						// Remove notes that have no subject
						if ( typeof( notes[idx].subject ) != 'object' ) {
							t.remove( notes[idx].id );
							notes_changed = true;
							continue;
						}
						if ( type ) {
							qt = note_model.get( 'queried_types' ) || {};
							qt[ type ] = true;
							notes[idx].queried_types = qt;
						}
						note_model.set( notes[ idx ] );
					}
					else {
						// Skip notes that have no subject
						if ( typeof( notes[idx].subject ) != 'object' ) {
							continue;
						}
						if ( type ) {
							qt = {};
							qt[ type ] = true;
							notes[idx].queried_types = qt;
						}
						note_model = new wpNoteModel( notes[ idx ] );
						t.add( note_model );
					}
					if ( ! note_model.has('body') )
						t.allBodiesLoaded = false;
					notes_changed = true;
				}

				if ( t.maxNotes ) {
					while( t.length > t.maxNotes ) {
						t.pop();
					}
				}

				if ( notes_changed ) {
					t.sort(); //ensure we maintain sorted order
					t.trigger( 'loadNotes:change' );
				}
				t.loading = false;
				t.hasLoaded = true;
				t.trigger( 'loadNotes:endLoading' );
			}).fail( function( e ) {
				t.loading = false;
				t.trigger( 'loadNotes:failed' );
			});
		},

		loadNoteBodies: function( filter ) {
			var t = this;
			if ( t.allBodiesLoaded ) {
				return (new $.Deferred()).resolve();
			}

			// Only load the note bodies that pass the caller supplied filter.
			// If no filter is supplied, all notes in the collection are fetched.
			var ids = t.getNoteIds( filter );

			if ( 0 == ids.length ) {
				return (new $.Deferred()).reject();
			}

			var doneFunc = function( res ) {
				var notes = res.notes;
				for( var idx in notes ) {
					// Skip notes that have no subject
					if ( typeof( notes[idx].subject ) != 'object' ) {
						continue;
					}
					var note_model = t.get( notes[idx].id );
					if ( note_model ) {
						note_model.set( notes[idx] );
					} else {
						note_model = new wpNoteModel( notes[ idx ] );
						t.add( note_model );
					}
				}
			};

			var failFunc = function ( e ) {
				if ( typeof console != 'undefined' && typeof console.error == 'function' )
					console.error( 'body loading error!' );
			}

			//get each note body as a separate request so we can get them in parallel
			//to speed up loading when there are many new notes
			var deferreds = [];

			//split into 3 requests (3 most recent notes, and then any others into one request)
			var count = 3
			for ( var i=0; i<count; i++ ) {
				if ( typeof ids[i] == 'undefined' )
					break;

				var query_params = {};
				// loads subject & meta data also so all are consistent
				query_params.fields = 'id,type,unread,noticon,timestamp,subject,body,meta,status';
				query_params.trap = true;
				query_params['ids[' + i + ']'] = ids[i];

				deferreds.push( wpNotesCommon.getNotes( query_params )
					.done( doneFunc )
					.fail( failFunc )
				)	;
			}

			if ( ids.length > count ) {
				var query_params = {};
				// loads subject & meta data also so all are consistent
				query_params.fields = 'id,type,unread,noticon,timestamp,subject,body,meta,status';
				query_params.trap = true;

				for ( var i=count; i<ids.length; i++ )
					query_params['ids[' + i + ']'] = ids[i];

				deferreds.push( wpNotesCommon.getNotes( query_params )
					.done( doneFunc )
					.fail( failFunc )
				)	;
			}

			var all_xhr = $.when.apply(null, deferreds);
			all_xhr.done( function() {
				if ( typeof filter != 'function' ) {
					t.allBodiesLoaded = true;
				}
			} );

			return all_xhr;
		},

		markNotesSeen: function() {
			var t = this,
				mostRecentTs = t.getMostRecentTimestamp();

			if ( mostRecentTs > this.lastMarkedSeenTimestamp ) {
				wpNotesCommon.markNotesSeen( mostRecentTs ).done( function() {
					t.lastMarkedSeenTimestamp = false;
				});
			}
		},

		unreadCount: function() {
			return this.reduce( function( num, note ) { return num + ( note.get('unread') ? 1 : 0 ); }, 0 );
		},

		numberNewNotes: function() {
			var t = this;
			if ( ! t.lastMarkedSeenTimestamp )
				return 0;
			return t.getNewNotes().length;
		},

		// return notes in this collection which were generated after we last marked it as seen.
		getNewNotes: function() {
			var t = this;
			return t.filter( function( note ) { 
				return ( note.get('timestamp') > t.lastMarkedSeenTimestamp ); 
			} );
		},

		// get all unread notes in the collection
		getUnreadNotes: function() {
			return this.filter( function( note ){ return Boolean( parseInt( note.get( "unread" ), 10 ) ); } );
		},
		
		// get all notes in the collection of specified type
		getNotesOfType: function( typeName ) {
			var t = this;
			switch( typeName ){
				case 'unread':
					return t.getUnreadNotes();
				case 'latest':
					return t.filter( function( note ) {
						var qt = note.get( 'queried_types' );
						return 'undefined' != typeof qt && 'undefined' != typeof qt.latest && qt.latest;
					});
				default:
					return t.filter( function( note ) {
						var note_type = note.get( "type" );
						if ( "undefined" == typeof wpNotesCommon.noteTypes[ typeName ] ) {
							return false;
						}
						else if ( "string" == typeof wpNotesCommon.noteTypes[ typeName ] ) {
							return typeName == note_type;
						}
						var len = wpNotesCommon.noteTypes[ typeName ].length;
						for ( var i=0; i<len; i++ ){
							if ( wpNotesCommon.noteTypes[ typeName ][i] == note_type ) {
								return true;
							}
						}
						return false;
					} );
			}
		},

		getNoteIds: function(filter) {
			if ( typeof filter != 'function' )
				filter = function(){ return true; };
			return _.pluck( this.filter(filter), 'id' );
		}
	});

	/**
	 * BEWARE: HERE BE DRAGONS
	 *
	 * wpNotesCommentModView is a copy/pasta from NoteCommentModView in widgets.wp.com/notes/notes-widget.test.js
	 *
	 * DO NOT edit this code - instead, fix whatever you need to fix in the-pit-of-despair/notes-widget/NoteCommentModView.coffee,
	 * regenerate notes-widget.test.js, copy/pasta, and continue the cycle of abuse.
	 **/

	wpNotesCommentModView = Backbone.View.extend({
      mode: 'buttons',
      actionsByName: null,
      possibleActions: ['approve-comment', 'replyto-comment', 'like-comment', 'spam-comment', 'trash-comment', 'unapprove-comment', 'unlike-comment', 'unspam-comment', 'untrash-comment'],
      possibleStatuses: ['approved', 'spam', 'trash', 'unapproved'],
      events: {
        'click .wpn-replyto-comment-button-open a': 'openReply',
        'click .wpn-comment-reply-button-close': 'closeReply',
        'click .wpn-comment-reply-button-send': 'sendReply',
        'click .wpn-like-comment-button a': 'clickLikeComment',
        'click .wpn-unlike-comment-button a': 'clickLikeComment',
        'click .wpn-approve-comment-button a': 'clickModComment',
        'click .wpn-unapprove-comment-button a': 'clickModComment',
        'click .wpn-spam-comment-button a': 'clickModComment',
        'click .wpn-unspam-comment-button a': 'clickModComment',
        'click .wpn-trash-comment-button a': 'clickModComment',
        'click .wpn-untrash-comment-button a': 'clickModComment'
      },
      templateActions: '\
			{{#reply}}\
			<span class="{{reply.class}}">\
				<a href="#" title="{{reply.title}}" data-action-type="{{reply.actionType}}">{{reply.text}}</a>\
			</span>\
			{{/reply}}\
			{{#like}}\
			<span class="{{like.class}}">\
				<a href="#" title="{{like.title}}" data-action-type="{{like.actionType}}">{{like.text}}</a>\
			</span>\
			{{/like}}\
			<span class="wpn-more">\
				<a href="#">More</a>\
				<div class="wpn-more-container">\
				{{#spam}}\
				<span class="{{spam.class}}">\
					<a href="#" title="{{spam.title}}" data-action-type="{{spam.actionType}}">{{spam.text}}</a>\
				</span>\
				{{/spam}}\
				{{#trash}}\
				<span class="{{trash.class}}">\
					<a href="#" title="{{trash.title}}" data-action-type="{{trash.actionType}}">{{trash.text}}</a>\
				</span>\
				{{/trash}}\
				</div>\
			</span>\
			{{#approve}}\
			<span class="{{approve.class}}">\
				<a href="#" title="{{approve.title}}" data-action-type="{{approve.actionType}}">{{approve.text}}</a>\
			</span>\
			{{/approve}}\
			<span class="wpn-comment-mod-waiting"></span>',
      templateReply: '\
			<div class="wpn-note-comment-reply">\
				<h5>{{reply_header_text}}</h5>\
				<textarea class="wpn-note-comment-reply-text" rows="5" cols="45" name="wpn-note-comment-reply-text"></textarea>\
				<p class="wpn-comment-submit">\
					<span class="wpn-comment-submit-waiting" style="display: none;"></span>\
				<span class="wpn-comment-submit-error" style="display:none;">Error!</span>\
				<a href="#" class="wpn-comment-reply-button-send alignright">{{submit_button_text}}</a>\
				<a href="#" class="wpn-comment-reply-button-close alignleft">_</a>\
				</p>\
			</div>',
      initialize: function() {
        var _this = this;
        this.setElement($('<div class="wpn-note-comment-actions" />'));
        this.listenTo(this.model, 'change:status', function(model, status) {
          var approvalStatus, prevStatus;
          approvalStatus = status.approval_status;
          prevStatus = model.previous('status') || {};
          if (prevStatus.approval_status && prevStatus.approval_status === approvalStatus) {
            return;
          }
          if (approvalStatus.match(/^trash|spam$/)) {
            return _this.setUndoStatus(prevStatus.approval_status);
          }
        });
        this.listenTo(this.model, 'change', this.render);
        $(document).on('click', '.wpn-more > a', function(ev) {
          var $el;
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.doneMoreToggle) {
            return;
          }
          ev.doneMoreToggle = true;
          $el = $(ev.currentTarget);
          $el.parent().find('.wpn-more-container').toggle();
          return false;
        });
        this;
        $(document).on('click', '.wpn-note-body', function(ev) {
          var $el, $note;
          $el = $(ev.target);
          if (($el.parents('.wpn-more').length)) {
            return;
          }
          $note = $el.closest('.wpn-note-body');
          if ($note.find('.wpn-more-container').is(':visible')) {
            $note.find('.wpn-more-container').toggle();
          }
        });
        this;
        $('.wpn-more-container:not(:has(*))').parents('.wpn-more').hide();
        $(document).on('keydown', function(keyEvent) {
          var keyCode, status, validActions;
          if (_this.$el.is(':hidden')) {
            return;
          }
          if (_this.mode !== 'buttons') {
            return;
          }
          keyCode = wpNotesCommon.getKeycode(keyEvent);
          if (!keyCode) {
            return;
          }
          validActions = _this.getValidActions();
          status = _this.model.get('status') || {};
          if (keyCode === 82) {
            if (_.contains(validActions, 'replyto-comment')) {
              _this.openReply(keyEvent);
            }
          }
          if (keyCode === 65) {
            if (_.contains(validActions, 'approve-comment')) {
              _this.modComment('approve-comment');
            } else if (_.contains(validActions, 'unapprove-comment')) {
              _this.modComment('unapprove-comment');
            }
          }
          if (keyCode === 76) {
            if (_.contains(validActions, 'like-comment')) {
              _this.likeComment('like-comment');
            } else if (_.contains(validActions, 'unlike-comment')) {
              _this.likeComment('unlike-comment');
            }
          }
          if (keyCode === 83) {
            if (_.contains(validActions, 'spam-comment')) {
              _this.modComment('spam-comment');
            } else if (_.contains(validActions, 'unspam-comment')) {
              _this.modComment('unspam-comment');
            }
          }
          if (keyCode === 84) {
            if (_.contains(validActions, 'trash-comment')) {
              _this.modComment('trash-comment');
            } else if (_.contains(validActions, 'untrash-comment')) {
              _this.modComment('untrash-comment');
            }
          }
          return false;
        });
        return this;
      },
      render: function() {
        var body;
        if (this.model._changing && 'reply' === this.mode) {
          return this;
        }
        this.$el.empty();
        body = this.model.get('body');
        if (!body.actions) {
          return this;
        }
        this.updateActionsMap();
        if (this.mode === 'buttons') {
          this.$el.html(this.createActionsHTML());
        } else {
          this.$el.html(this.createReplyBoxHTML());
          this.$('textarea').focus();
        }
        this.delegateEvents();
        return this;
      },
      setUndoStatus: function(status) {
        return this._undoStatus = status;
      },
      getUndoStatus: function() {
        var status;
        if (this._undoStatus) {
          return this._undoStatus;
        }
        status = this.model.get('status');
        if ((status != null) && status.undo_status === '1') {
          return 'approved';
        }
        return 'unapproved';
      },
      getValidActions: function() {
        var actions, status;
        status = this.model.get('status') || {};
        switch (status.approval_status) {
          case 'pending':
          case 'unapproved':
            return ['replyto-comment', 'approve-comment', 'spam-comment', 'trash-comment'];
          case 'approved':
            actions = ['replyto-comment', 'unapprove-comment', 'spam-comment', 'trash-comment'];
            if (status.i_liked) {
              actions.splice(1, 0, 'unlike-comment');
            } else {
              actions.splice(1, 0, 'like-comment');
            }
            return actions;
          case 'trash':
            return ['untrash-comment'];
          case 'spam':
            return ['unspam-comment'];
          default:
            return [];
        }
      },
      getResultantStatus: function(actionType) {
        switch (actionType) {
          case 'approve-comment':
            return 'approved';
          case 'unapprove-comment':
            return 'unapproved';
          case 'spam-comment':
            return 'spam';
          case 'trash-comment':
            return 'trash';
          case 'unspam-comment':
          case 'untrash-comment':
            return this.getUndoStatus();
          default:
            return void 0;
        }
      },
      getStatusParamFromActionType: function(actionType) {
        if (!actionType) {
          return void 0;
        }
        switch (actionType) {
          case 'approve-comment':
            return 'approved';
          case 'unapprove-comment':
            return 'unapproved';
          default:
            return actionType.split('-')[0];
        }
      },
      getComplementaryActionType: function(actionType) {
        switch (actionType) {
          case 'approve-comment':
            return 'unapprove-comment';
          case 'unapprove-comment':
            return 'approve-comment';
          case 'like-comment':
            return 'unlike-comment';
          case 'unlike-comment':
            return 'like-comment';
          case 'spam-comment':
            return 'unspam-comment';
          case 'trash-comment':
            return 'untrash-comment';
          case 'unspam-comment':
            return 'spam-comment';
          case 'untrash-comment':
            return 'trash-comment';
          default:
            return void 0;
        }
      },
      getTranslation: function(string) {
        if (typeof notes_i18n === 'undefined' || !notes_i18n.translate) {
          return string;
        }
        return notes_i18n.translate(string).fetch();
      },
      getTranslationsForActionType: function(actionType) {
        var gt;
        gt = this.getTranslation;
        if (!this._translationsByActionType) {
          this._translationsByActionType = {
            'approve-comment': {
              buttonText: gt('Approve'),
              titleText: gt('Approve this comment.')
            },
            'like-comment': {
              buttonText: gt('Like'),
              titleText: gt('Like this comment.')
            },
            'replyto-comment': {
              buttonText: gt('Reply'),
              titleText: gt('Reply to this comment.')
            },
            'spam-comment': {
              buttonText: gt('Spam'),
              titleText: gt('Mark this comment as spam.')
            },
            'trash-comment': {
              buttonText: gt('Trash'),
              titleText: gt('Move this comment to the trash.')
            },
            'unapprove-comment': {
              buttonText: gt('Unapprove'),
              titleText: gt('Unapprove this comment.')
            },
            'unlike-comment': {
              buttonText: gt('Liked'),
              titleText: gt('Unlike this comment.')
            },
            'unspam-comment': {
              buttonText: gt('Unspam'),
              titleText: gt('Unmark this comment as spam.')
            },
            'untrash-comment': {
              buttonText: gt('Untrash'),
              titleText: gt('Restore this comment from the trash.')
            }
          };
        }
        return this._translationsByActionType[actionType];
      },
      updateActionsMap: function() {
        var action, actionType, actions, body, _fn, _i, _j, _len, _len1, _ref, _results,
          _this = this;
        body = this.model.get('body');
        actions = body.actions || [];
        this.actionsByName = this.actionsByName || {};
        _fn = function(action) {
          if (!action.type || !action.params) {
            return;
          }
          return _this.actionsByName[action.type] = $.extend({}, action.params, {
            actionType: action.type
          });
        };
        for (_i = 0, _len = actions.length; _i < _len; _i++) {
          action = actions[_i];
          _fn(action);
        }
        _ref = this.possibleActions;
        _results = [];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          actionType = _ref[_j];
          _results.push((function(actionType) {
            var actionObj, complementObj, status, statusParam, submitText, translations;
            actionObj = _this.actionsByName[actionType];
            statusParam = _this.getStatusParamFromActionType(actionType);
            translations = _this.getTranslationsForActionType(actionType);
            if (!actionObj) {
              complementObj = _this.actionsByName[_this.getComplementaryActionType(actionType)];
              if (complementObj) {
                _this.actionsByName[actionType] = $.extend({}, complementObj, {
                  actionType: actionType,
                  ajax_arg: statusParam,
                  rest_body: {
                    status: statusParam
                  },
                  text: translations.buttonText,
                  title_text: translations.titleText
                });
              }
            }
            if (actionType === 'replyto-comment') {
              status = _this.model.get('status' || {});
              submitText = status.approval_status === 'approved' ? _this.getTranslation('Reply') : _this.getTranslation('Approve and Reply');
              return $.extend(_this.actionsByName['replyto-comment'], {
                button_text: translations.buttonText,
                submit_button_text: submitText,
                text: translations.buttonText,
                title_text: translations.titleText
              });
            }
          })(actionType));
        }
        return _results;
      },
      createActionsHTML: function() {
        var actionType, status, templateData, _fn, _i, _len, _ref,
          _this = this;
        status = this.model.get('status').approval_status;
        templateData = {};
        _ref = this.getValidActions();
        _fn = function(actionType) {
          var action, button_data;
          action = _this.actionsByName[actionType];
          if (!action) {
            return;
          }
          button_data = {
            "class": 'wpn-' + actionType + '-button',
            "actionType": actionType,
            "text": action.text || action.button_text
          };
          switch (actionType) {
            case 'replyto-comment':
              return templateData.reply = $.extend({}, button_data, {
                "class": 'wpn-replyto-comment-button-open',
                "title": (action.title_text || action.button_title_text) + ' [r]'
              });
            case 'like-comment':
            case 'unlike-comment':
              return templateData.like = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [l]'
              });
            case 'approve-comment':
            case 'unapprove-comment':
              if (_.contains(['spam', 'trash'], status)) {
                break;
              }
              return templateData.approve = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [a]'
              });
            case 'spam-comment':
            case 'unspam-comment':
              if (status === 'trash') {
                break;
              }
              return templateData.spam = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [s]'
              });
            case 'trash-comment':
            case 'untrash-comment':
              if (status === 'spam') {
                break;
              }
              return templateData.trash = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [t]'
              });
          }
        };
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          actionType = _ref[_i];
          _fn(actionType);
        }
        return Mustache.render(this.templateActions, templateData);
      },
      createReplyBoxHTML: function() {
        var action, blog_id, comment_id;
        action = this.actionsByName['replyto-comment'];
        if (!action) {
          return;
        }
        blog_id = action.site_id || 0;
        comment_id = this.model.id || 0;
        return Mustache.render(this.templateReply, {
          reply_header_text: action.reply_header_text,
          submit_button_text: action.submit_button_text
        });
      },
      closeReply: function(ev) {
        if (ev) {
          ev.preventDefault();
        }
        this.mode = 'buttons';
        this.model.currentReplyText = this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').val();
        this.render();
        return this.model.resize();
      },
      openReply: function(ev) {
        var action, gettingMentions, query_args,
          _this = this;
        if (ev) {
          ev.preventDefault();
        }
        this.mode = 'reply';
        this.render();
        this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').val(this.model.currentReplyText);
        $('.selected .wpn-note-body p.submitconfirm').remove();
        this.model.resize();
        if (!window.mentionDataCache) {
          window.mentionDataCache = [];
        }
        action = this.actionsByName['replyto-comment'];
        if (action.site_id != null) {
          if (window.mentionDataCache[action.site_id] != null) {
            return this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').mentions(window.mentionDataCache[action.site_id]);
          } else {
            window.mentionDataCache[action.site_id] = [];
            query_args = {
              site_id: action.site_id,
              client: 'notes-widget'
            };
            gettingMentions = wpNotesCommon.getMentions(query_args);
            return gettingMentions.done(function(res) {
              window.mentionDataCache[action.site_id] = res.suggestions;
              return _this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').mentions(window.mentionDataCache[action.site_id]);
            });
          }
        }
      },
      sendReply: function(ev) {
        var $submitWrap, action, blog_id, comment_id, comment_reply_el, content, doSend,
          _this = this;
        if (ev) {
          ev.preventDefault();
        }
        action = this.actionsByName['replyto-comment'];
        if (!action) {
          return $.Deferred().reject('Invalid replyto-comment action');
        }
        comment_reply_el = this.$el.children('.wpn-note-comment-reply');
        this.model.currentReplyText = comment_reply_el.children('.wpn-note-comment-reply-text').val();
        blog_id = action.site_id || 0;
        comment_id = action.comment_id || 0;
        content = this.model.currentReplyText || 0;
        if (!(blog_id && comment_id && content)) {
          return $.Deferred().reject('Invalid sendReply params');
        }
        $submitWrap = comment_reply_el.children('.wpn-comment-submit');
        $submitWrap.children('.wpn-comment-submit-error').hide();
        $submitWrap.children('.wpn-comment-reply-button-send').hide();
        $submitWrap.children('.wpn-comment-submit-waiting').gifspin('small').show();
        wpNotesCommon.bumpStat('notes-click-action', 'replyto-comment');
        doSend = function() {
          return wpNotesCommon.ajax({
            type: 'POST',
            path: '/sites/' + blog_id + '/comments/' + comment_id + '/replies/new',
            data: {
              content: content
            },
            success: function(r) {
              if (typeof r === 'string') {
                _this.errorReply(r);
                return false;
              }
              _this.closeReply();
              _this.model.currentReplyText = '';
              return _this.model.reload(true).done(function() {
                var tries;
                if (!_this.model.get('status').i_replied) {
                  tries = 0;
                  return _this.replyCommentInterval = setInterval(function() {
                    return _this.model.reload(true).done(function() {
                      if (_this.model.get('status').i_replied || tries++ >= 10) {
                        return clearInterval(_this.replyCommentInterval);
                      }
                    });
                  }, 3000);
                }
              });
            },
            error: function(r) {
              return _this.errorReply(r);
            }
          }).done(function() {
            var commentPermalink, submitConfirm;
            commentPermalink = $('.selected .wpn-comment-date a').attr('href');
            submitConfirm = '<p class="submitconfirm"><strong>';
            submitConfirm += notes_i18n.translate('Reply successful, <a %s>view thread</a>').fetch('target="_blank" href="' + commentPermalink + '"');
            submitConfirm += '</strong></p>';
            return $('.selected .wpn-note-body').append(submitConfirm);
          });
        };
        if (this.model.get('status').approval_status !== 'approved') {
          return this.modComment('approve-comment').done(doSend);
        } else {
          return doSend();
        }
      },
      errorReply: function(r) {
        var comment_reply_el, er, o;
        er = r;
        if (typeof r === 'object') {
          if (r.responseText) {
            o = $.parseJSON(r.responseText);
            er = o.error + ': ' + o.message;
          } else if (r.statusText) {
            er = r.statusText;
          } else {
            er = 'Unknown Error';
          }
        }
        comment_reply_el = this.$el.children('.wpn-note-comment-reply');
        comment_reply_el.children('.wpn-comment-submit').children('.wpn-comment-submit-waiting').hide();
        if (er) {
          return comment_reply_el.children('.wpn-comment-submit').children('.wpn-comment-submit-error').text(er).show();
        }
      },
      clickModComment: function(ev) {
        if (ev) {
          ev.preventDefault();
        } else {
          return $.Deferred.reject('invalid click event');
        }
        return this.modComment($(ev.currentTarget).data('action-type'));
      },
      modComment: function(actionType) {
        var moderating,
          _this = this;
        this.$('.wpn-comment-mod-waiting').show().gifspin('small');
        moderating = $.Deferred().always(function() {
          return _this.$('.wpn-comment-mod-waiting').empty().hide();
        }).fail(function(error, code) {
          if ((typeof console !== "undefined" && console !== null) && typeof console.error === 'function') {
            console.error('Comment moderation error');
            if (error) {
              console.error(error);
            }
          }
          if (!code || code !== 'too_soon') {
            return _this.model.reload();
          }
        });
        if (this.modPromise && typeof this.modPromise.state === 'function' && this.modPromise.state() === 'pending') {
          moderating.always(function() {
            return _this.$('.wpn-comment-mod-waiting').show().gifspin('small');
          });
          return moderating.reject('Moderation already in progress', 'too_soon');
        }
        this.modPromise = moderating.promise();
        if (!actionType || !actionType.length || !_.contains(this.getValidActions(), actionType)) {
          return moderating.reject('Invalid actionType');
        }
        $.Deferred(function() {
          var action, anticipatedNewStatus;
          wpNotesCommon.bumpStat('notes-click-action', actionType);
          action = _this.actionsByName[actionType];
          if (!action) {
            return moderating.reject('Undefined action params for type: ' + actionType);
          }
          anticipatedNewStatus = _this.getResultantStatus(actionType);
          if (anticipatedNewStatus) {
            _this.model.set('status', $.extend({}, _this.model.get('status'), {
              approval_status: anticipatedNewStatus
            }));
            _this.$('.wpn-comment-mod-waiting').show().gifspin('small');
          }
          return wpNotesCommon.ajax({
            type: 'POST',
            path: action.rest_path,
            data: action.rest_body
          }).done(function(r) {
            var rStatus;
            rStatus = (r != null ? r.status : void 0) ? r.status : 'undefined';
            if (_.contains(_this.possibleStatuses, rStatus)) {
              _this.model.set('status', $.extend({}, _this.model.get('status'), {
                approval_status: rStatus
              }));
              _this.model.blockReloading(15);
              return moderating.resolve();
            } else {
              return moderating.reject('Invalid status: "' + rStatus + '" received from moderation POST');
            }
          }).fail(function(error) {
            return moderating.reject(error);
          });
        });
        return this.modPromise;
      },
      clickLikeComment: function(ev) {
        var $button, actionType;
        ev.preventDefault();
        $button = $(ev.currentTarget);
        actionType = $button.data('action-type');
        return this.likeComment(actionType);
      },
      likeComment: function(actionType) {
        var action, i_liked, rest_path,
          _this = this;
        action = this.actionsByName[actionType];
        if ('like-comment' === actionType) {
          i_liked = true;
          rest_path = action.rest_path + 'new/';
        } else {
          i_liked = false;
          rest_path = action.rest_path + 'mine/delete/';
        }
        this.model.set('status', $.extend({}, this.model.get('status'), {
          i_liked: i_liked
        }));
        this.$('.wpn-comment-mod-waiting').show().gifspin('small');
        return wpNotesCommon.ajax({
          type: 'POST',
          path: rest_path
        }).done(function(r) {
          return _this.$('.wpn-comment-mod-waiting').empty().hide();
        });
      }
    });
})(jQuery);

(function() {
  (function(window, $) {
    /*
    	 * Show an animated gif spinner
    	 * Replaces the contents of the selected jQuery elements with the image
    */

    return $.fn.gifspin = function(size) {
      var $el, $spinner, len;
      $el = $(this);
      if (_.isFinite(size) && size > 0) {
        len = Math.min(~~size, 128);
      } else {
        switch (size) {
          case 'tiny':
            len = 8;
            break;
          case 'small':
            len = 16;
            break;
          case 'medium':
            len = 32;
            break;
          case 'large':
            len = 64;
            break;
          default:
            len = 128;
        }
      }
      $spinner = $('<img class="gifspinner" src="//s0.wp.com/wp-content/mu-plugins/notes/images/loading.gif" />');
      $spinner.css({
        height: len,
        width: len
      });
      $el.html($spinner);
      return $el;
    };
  })(typeof exports !== "undefined" && exports !== null ? exports : this, window.jQuery);

}).call(this);
;
if ( 'undefined' == typeof wpcom ) {
	wpcom = {};
}
if ( 'undefined' == typeof wpcom.events ) {
	wpcom.events = _.extend( {}, Backbone.Events );
}
(function($) {
	var wpNotesArgs = window.wpNotesArgs || {},
		cacheBuster = wpNotesArgs.cacheBuster || (function() {
			var today = new Date();
			return today.getFullYear() + ( '0' + ( 1 + today.getMonth() ) ).slice( -2 ) + ( '0' + today.getDate() ).slice( -2 );
		})(),
		iframeUrl = wpNotesArgs.iframeUrl || 'https://widgets.wp.com/notes/',
		iframeAppend = wpNotesArgs.iframeAppend || '',
		iframeScroll = wpNotesArgs.iframeScroll || "no",
		wideScreen = wpNotesArgs.wide || false,
		iframePanelId, iframeFrameId;

	$(function(){
		if ( ( $( '#wpnt-notes-panel' ).length == 0 && $( '#wpnt-notes-panel2' ).length ) &&
			( 'undefined' != typeof wpNotesIsJetpackClientV2 && wpNotesIsJetpackClientV2 ) ) {
			iframeUrl = 'https://widgets.wp.com/notifications/';
			iframeAppend = '2';
			iframeScroll = 'yes';
			wideScreen = true;
		}

		iframePanelId = "wpnt-notes-panel" + iframeAppend;
		iframeFrameId = "wpnt-notes-iframe" + iframeAppend;
		
		new wpntView();
	});

	var wpntView = Backbone.View.extend({
		el: '#wp-admin-bar-notes',
		hasUnseen: null,
		initialLoad: true,
		count: null,
		iframe: null,
		iframeWindow: null,
		messageQ: [],
		iframeSpinnerShown: false,
		isJetpack: false,
		linkAccountsURL: false,
		currentMasterbarActive: false,

		initialize: function() {
			var t = this;

			// graceful fallback for IE <= 7
			var matches = navigator.appVersion.match( /MSIE (\d+)/ );
			if ( matches && parseInt( matches[1], 10 ) < 8 ) {
				var $panel = t.$( '#'+iframePanelId );
				var $menuItem = t.$( '.ab-empty-item' );
				if ( !$panel.length || !$menuItem.length ) {
					return;
				}
				var offset = t.$el.offset();

				t.$( '.ab-item' ).removeClass( 'ab-item' );
				t.$( '#wpnt-notes-unread-count' ).html( '?' );

				// @todo localize
				$panel.html( ' \
					<div class="wpnt-notes-panel-header"><p>Notifications are not supported in this browser!</p> </div> \
					<img src="http://i2.wp.com/wordpress.com/wp-content/mu-plugins/notes/images/jetpack-notes-2x.png" /> \
					<p class="wpnt-ie-note"> \
					Please <a href="http://browsehappy.com" target="_blank">upgrade your browser</a> to keep using notifications. \
					</p>'
				).addClass( 'browse-happy' );

				t.$el.on( 'mouseenter', function(e) {
					clearTimeout( t.fadeOutTimeout );
					if ( $panel.is( ':visible:animated' ) ) {
						$panel.stop().css( 'opacity', '' );
					}
					$menuItem.css({ 'background-color': '#eee' });
					$panel.show();
				});

				t.$el.on( 'mouseleave', function() {
					t.fadeOutTimeout = setTimeout( function() {
						clearTimeout( t.fadeOutTimeout );
						if ( $panel.is( ':animated' ) ) {
							return;
						}
						$panel.fadeOut( 250, function() {
							$menuItem.css({ 'background-color': 'transparent' });
						});
					}, 350 );
				});

				return;
			}

			// don't break notifications if jquery.spin isn't available
			if ( 'function' != typeof $.fn.spin ) {
				$.fn.spin = function(x){};
			}
			this.isRtl = $('#wpadminbar').hasClass('rtl');
			this.count = $('#wpnt-notes-unread-count');
			this.panel = $( '#'+iframePanelId );
			this.hasUnseen = this.count.hasClass( 'wpn-unread' );
			if ( 'undefined' != typeof wpNotesIsJetpackClient && wpNotesIsJetpackClient )
				t.isJetpack = true;
			if ( t.isJetpack && 'undefined' != typeof wpNotesLinkAccountsURL )
				t.linkAccountsURL = wpNotesLinkAccountsURL;

			this.$el.children('.ab-item').on( 'click touchstart', function(e){
				e.preventDefault();
				t.togglePanel();

				return false;
			} );

			this.preventDefault = function(e) {
				if (e) e.preventDefault();
				return false;
			};

			if ( iframeAppend == '2' ) {
				// Disable scrolling on main page when cursor in notifications
				this.panel.mouseenter( function() {
					document.body.addEventListener( 'mousewheel', t.preventDefault );
				});
				this.panel.mouseleave( function() {
					document.body.removeEventListener( 'mousewheel', t.preventDefault );
				});

				if ( typeof document.hidden !== 'undefined' ) {
					document.addEventListener( 'visibilitychange', function() {
						t.postMessage( { action: "toggleVisibility", hidden: document.hidden } );
					} );
				}
			}

			// Click outside the panel to close the panel.
			$(document).bind( "mousedown focus", function(e) {
				var $clicked;

				// Don't fire if the panel isn't showing
				if ( ! t.showingPanel )
					return true;

				$clicked = $(e.target);

				/**
				 * Don't fire if there's no real click target
				 * Prevents Firefox issue described here: http://datap2.wordpress.com/2013/08/15/running-in-to-some-strange/
				 */
				if ( $clicked.is( document ) )
					return true;

				// Don't fire on clicks in the panel.
				if ( $clicked.closest( '#wp-admin-bar-notes' ).length )
					return true;

				t.hidePanel();
				return false;
			});

			$(document).on( 'keydown.notes', function (e) {
				var keyCode = wpNotesCommon.getKeycode( e );
				if ( !keyCode )
					return;

				if ( ( keyCode == 27 ) ) //ESC close only
					t.hidePanel();
				if ( ( keyCode == 78 ) ) //n open/close
					t.togglePanel();

				//ignore other commands if the iframe hasn't been loaded yet
				if ( this.iframeWindow === null )
					return;

				if ( t.showingPanel && ( ( keyCode == 74 ) || ( keyCode == 40  ) ) ) { //j and down arrow
					t.postMessage( { action:"selectNextNote" } );
					return false; //prevent default
				}
				if ( t.showingPanel && ( ( keyCode == 75 ) || ( keyCode == 38  ) ) ) { //k and up arrow
					t.postMessage( { action:"selectPrevNote" } );
					return false; //prevent default
				}

				if ( t.showingPanel && ( ( keyCode == 82 ) || ( keyCode == 65  ) ||
					( keyCode == 83  ) || ( keyCode == 84  ) ) ) { //mod keys (r,a,s,t) to pass to iframe
					t.postMessage( { action:"keyEvent", keyCode: keyCode } );
					return false; //prevent default
				}
			});

			wpcom.events.on( 'notes:togglePanel', function() {
					t.togglePanel();
				} );

			if ( t.isJetpack )
				t.loadIframe();
			else {
				setTimeout(function() {
					t.loadIframe();
				}, 3000);
			}

			if ( t.count.hasClass( 'wpn-unread' ) )
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'non-zero' );
			else
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'zero' );

			// listen for postMessage events from the iframe
			$(window).on( 'message', function( event ) {
				if ( !event.data && event.originalEvent.data ) {
					event = event.originalEvent;
				}
				if ( event.origin != 'https://widgets.wp.com' ) {
					return;
				}
				try {
					var data = ( 'string' == typeof event.data ) ? JSON.parse( event.data ) : event.data;

					if ( data.type != 'notesIframeMessage' ) {
						return;
					}
					t.handleEvent( data );
				} catch(e){}
			});
		},

		// Done this way, "this" refers to the wpntView object instead of the window.
		handleEvent: function( event ) {

			var inNewdash = ( 'undefined' !== typeof wpcomNewdash && 'undefined' !== typeof wpcomNewdash.router && 'undefined' !== wpcomNewdash.router.setRoute );

			if ( !event || !event.action ) {
				return;
			}
			switch ( event.action ) {
				case "togglePanel":
					this.togglePanel();
					break;
				case "render":
					this.render( event.num_new, event.latest_type );
					break;
				case "renderAllSeen":
					this.renderAllSeen();
					break;
				case "iFrameReady":
					this.iFrameReady(event);
					break;
				case "goToNotesPage":
					if ( inNewdash ) {
						wpcomNewdash.router.setRoute( '/notifications' );
					} else {
						window.location.href = '//wordpress.com/notifications/';
					}
					break;
				case "widescreen":
					var iframe = $( '#'+iframeFrameId );
					if ( event.widescreen && ! iframe.hasClass( 'widescreen' ) ) {
						iframe.addClass( 'widescreen' );
					} else if ( ! event.widescreen && iframe.hasClass( 'widescreen' ) ) {
						iframe.removeClass( 'widescreen' );
					}
					break;
			}
		},

		render: function( num_new, latest_type ) {
			var t = this, flash = false;

			if ( ( false === this.hasUnseen ) && ( 0 === num_new ) )
				return;

			//assume the icon is correct on initial load, prevents fading in and out for no reason
			if ( this.initialLoad && this.hasUnseen && ( 0 !== num_new ) ) {
				this.initialLoad = false;
				return;
			}

			if ( ! this.hasUnseen && ( 0 !== num_new ) ) {
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'non-zero-async' );
			}

			var latest_icon_type = wpNotesCommon.noteType2Noticon[ latest_type ];
			if ( typeof latest_icon_type == 'undefined' )
				latest_icon_type = 'notification';

			var latest_img_el = $('<span/>', {
				'class' : 'noticon noticon-' + latest_icon_type + ''
			});

			var status_img_el = this.getStatusIcon( num_new );

			if ( 0 === num_new || this.showingPanel ) {
				this.hasUnseen = false;
				t.count.fadeOut( 200, function() {
					t.count.empty();
					t.count.removeClass('wpn-unread').addClass('wpn-read');
					t.count.html( status_img_el );
					t.count.fadeIn( 500 );
				} );

				if ( wpcom && wpcom.masterbar ) {
					wpcom.masterbar.hasUnreadNotifications( false );
				}
			} else {
				if ( this.hasUnseen ) {
					// Blink the indicator if it's already on
					t.count.fadeOut( 400, function() {
						t.count.empty();
						t.count.removeClass('wpn-unread' ).addClass('wpn-read');
						t.count.html( latest_img_el );
						t.count.fadeIn( 400 );
					} );
				}
				this.hasUnseen = true;
				t.count.fadeOut( 400, function() {
					t.count.empty();
					t.count.removeClass('wpn-read').addClass('wpn-unread');
					t.count.html( latest_img_el );
					t.count.fadeIn( 400, function() { });
				});

				if ( wpcom && wpcom.masterbar ) {
					wpcom.masterbar.hasUnreadNotifications( true );
				}
			}
		},

		renderAllSeen: function() {
			var img_el = this.getStatusIcon(0);
			this.count.removeClass('wpn-unread').addClass('wpn-read');
			this.count.empty();
			this.count.html( img_el );
			this.hasUnseen = false;

			if ( wpcom && wpcom.masterbar ) {
				wpcom.masterbar.hasUnreadNotifications( false );
			}
		},

		getStatusIcon: function( number ) {
			var new_icon = '';
			switch ( number ) {
				case 0:
					new_icon = 'noticon noticon-notification';
					break;
				case 1:
					new_icon = 'noticon noticon-notification';
					break;
				case 2:
					new_icon = 'noticon noticon-notification';
					break;
				default:
					new_icon = 'noticon noticon-notification';
			}

			return $('<span/>', {
				'class' : new_icon
			});
		},

		togglePanel: function() {
			var t = this;
			this.loadIframe();
			
			// temp hack until 3.3 merge to highlight toolbar number
			//this.$el.removeClass('wpnt-stayopen');
			this.$el.toggleClass('wpnt-stayopen');
			this.$el.toggleClass('wpnt-show');
			this.showingPanel = this.$el.hasClass('wpnt-show');
			
			$( '.ab-active' ).removeClass( 'ab-active' );

			if ( this.showingPanel ) {
				var $unread = this.$( '.wpn-unread' );
				if ( $unread.length ) {
					$unread.removeClass( 'wpn-unread' ).addClass( 'wpn-read' );
				}
				this.reportIframeDelay();
				if ( this.hasUnseen )
					wpNotesCommon.bumpStat( 'notes-menu-clicks', 'non-zero' );
				else
					wpNotesCommon.bumpStat( 'notes-menu-clicks', 'zero' );

				this.hasUnseen = false;
			}

			// tell the iframe we are opening it
			this.postMessage( { action:"togglePanel", showing:this.showingPanel } );
			
			var focusNotesIframe = function( iframe ) {
				if ( null === iframe.contentWindow ) {
					iframe.addEventListener( 'load', function() {
						iframe.contentWindow.focus();
					} );
				} else {
					iframe.contentWindow.focus();
				}
			};
			
			if ( this.showingPanel ) {
				focusNotesIframe( this.iframe[0] );
			} else {
				window.focus();
			}

			this.setActive( this.showingPanel );
		},

		// Handle juggling the .active state of the masterbar
		setActive: function( active ) {
			if ( active ) {
				this.currentMasterbarActive = $( '.masterbar li.active' );
				this.currentMasterbarActive.removeClass( 'active' );
				this.$el.addClass( 'active' );
			} else {
				this.$el.removeClass( 'active' );
				this.currentMasterbarActive.addClass( 'active' );
				this.currentMasterbarActive = false;
			}
			this.$el.find( 'a' ).first().blur();
		},

		loadIframe: function() {
			var t = this,
				args = [],
				src,
				lang,
				queries,
				panelRtl;

			if ( t.iframe === null ) {
				// Removed spinner here because it shows up so briefly, and is replaced by the iframe spinner in a different spot
				// t.panel.addClass('loadingIframe').find('.wpnt-notes-panel-header').spin('large');
				t.panel.addClass('loadingIframe');

				if ( t.isJetpack ) {
					args.push( 'jetpack=true' );
					if ( t.linkAccountsURL ) {
						args.push( 'link_accounts_url=' + escape( t.linkAccountsURL ) );
					}
				}

				// Attempt to detect if browser is a touch device, similar code
				// in Calypso. The class adds CSS needed for mobile Safari to allow
				// scrolling of iframe.
				if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
					t.panel.addClass( 'touch' );
				}

				panelRtl = $( '#'+iframePanelId ).attr( 'dir' ) == 'rtl';
				lang = $( '#'+iframePanelId ).attr( 'lang' ) || 'en';
				args.push( 'v=' + cacheBuster );
				args.push( 'locale=' + lang );
				queries = ( args.length ) ? '?' + args.join( '&' ) : '';
				src = iframeUrl;
				if ( iframeAppend == '2' && ( t.isRtl || panelRtl ) && ! /rtl.html$/.test(iframeUrl) ) {
					src = iframeUrl + 'rtl.html';
				}
				src = src + queries + '#' + document.location.toString();
				if ( $( '#'+iframePanelId ).attr( 'dir' ) == 'rtl' ) {
					src += '&rtl=1';
				}
				if ( !lang.match( /^en/ ) ) {
					src += ( '&lang=' + lang );
				}

				// Add the iframe (invisible until iFrameReady)
				t.iframe = $('<iframe style="display:none" id="' +iframeFrameId+ '" frameborder=0 ALLOWTRANSPARENCY="true" scrolling="' +iframeScroll+ '"></iframe>');
				t.iframe.attr( 'src', src );
				if ( wideScreen ) {
					t.panel.addClass( 'wide' );
					t.iframe.addClass( 'wide' );
				}

				t.panel.append(t.iframe);
			}
		},

		reportIframeDelay: function() {
			if ( !this.iframeWindow ) {
				if ( !this.iframeSpinnerShown )
					this.iframeSpinnerShown = (new Date()).getTime();
				return;
			}
			if ( this.iframeSpinnerShown !== null ) {
				var delay = 0;
				if ( this.iframeSpinnerShown )
					delay = (new Date()).getTime() - this.iframeSpinnerShown;
				if ( delay === 0 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '0' );
				else if ( delay < 1000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '0-1' );
				else if ( delay < 2000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '1-2' );
				else if ( delay < 4000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '2-4' );
				else if ( delay < 8000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '4-8' );
				else
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '8-N' );
				this.iframeSpinnerShown = null;
			}
		},

		iFrameReady: function(event) {
			var t = this;
			var url_parser = document.createElement( 'a' );
			url_parser.href = this.iframe.get(0).src;
			this.iframeOrigin = url_parser.protocol + '//' + url_parser.host;
			this.iframeWindow = this.iframe.get(0).contentWindow;

			if ( "num_new" in event )
				this.render( event.num_new, event.latest_type );
			this.panel.removeClass('loadingIframe').find('.wpnt-notes-panel-header').remove();
			this.iframe.show();
			if ( this.showingPanel )
				this.reportIframeDelay();

			// detect user activity and trigger a refresh event in the iframe
			$( window ).on( 'focus keydown mousemove scroll', function() {
				// Throttle postMessages since the overhead is pretty high & these events fire a lot
				var now = ( new Date() ).getTime();
				if ( !t.lastActivityRefresh || t.lastActivityRefresh < now - 5000 ) {
					t.lastActivityRefresh = now;
					t.postMessage( { action: "refreshNotes" } );
				}
			} );

			this.sendQueuedMessages();
		},

		hidePanel: function() {
			if ( this.showingPanel ) {
				this.togglePanel();
			}
		},

		postMessage: function( message ) {
			var t = this;
			try{
				var _msg = ( 'string' == typeof message ) ? JSON.parse( message ) : message;
				if ( !_.isObject( _msg ) ) {
					return;
				}

				_msg = _.extend( { type: 'notesIframeMessage' }, _msg );

				var targetOrigin = this.iframeOrigin;
				if ( this.iframeWindow && this.iframeWindow.postMessage ) {
					this.iframeWindow.postMessage( JSON.stringify( _msg ), targetOrigin );
				} else {
					this.messageQ.push( _msg );
				}
			}
			catch(e){}
		},

		sendQueuedMessages: function() {
			var t = this;
			_.forEach( this.messageQ, function( m ) {
				t.postMessage( m );
			} );
			this.messageQ = [];
		}

	});
})(jQuery);
;
jQuery(document).ready( function($){

	var tosform = {};
	tosform.loaded = false;

	tosform.setup  = function() {

		tosform.report_type ='';
		tosform.ajaxurl = wpcom_tos_report_form.ajaxurl;
		tosform.isLoggedoutUser = wpcom_tos_report_form.isLoggedoutUser;

		tosform.$step1 = $( '#report-step-1' );
		tosform.$types = tosform.$step1.find( 'input:radio' );
		tosform.$step2 = $( '#report-step-2' );
		tosform.$step2_details = $( '.step-2-details' );
		tosform.$next = $( '#step1-submit' );
		tosform.$submit = $( '#step2-submit' );
		tosform.$report_url = $('#report-url');
		tosform.$report_email = $('#report-email');
		tosform.$step3 = $( '#report-confirm' );
		tosform.$step3_error = $( '#report-error' );

		tosform.$step3.hide();
		tosform.$step3_error.hide();
		tosform.$step2.hide();
		tosform.$step1.show();
		tosform.$step2_details.hide();
		tosform.$types.attr( 'checked', false );
		tosform.$next.attr( 'disabled', true );
		tosform.$submit.attr( 'disabled', true );
	}

	tosform.setup();

	tosform.setup_step2 = function() {
		$( '#report-step-1' ).fadeOut( 'fast', function(){
			tosform.report_type = tosform.$types.filter( ':checked' ).val();
			tosform.$step2.fadeIn( 'fast' );
			// Show step 2 description depending on type of report
			tosform.$step2_details.hide();
			if( tosform.report_type == 'copyright' )
				$('#step2-submit').hide();
			$( '#step-2-' + tosform.report_type).show();
			$( '#TB_ajaxContent' ).css( 'height', 'auto' );

		});
	}

	// Enable continue button when an option is selected, if url has been entered and the email is available
	$(document).on( 'change.tos_report_form', '#report-step-1 input:radio', function(){
		tosform.report_type = tosform.$types.filter( ':checked' ).val();
		if ( $.trim( tosform.$report_url.val() ).length != 0 && tosform.report_type.length != 0 && $.trim( tosform.$report_email.val() ).length != 0 )
			tosform.$next.attr( 'disabled', false );
		else
			tosform.$next.attr( 'disabled', true );
	});

	// Enable continue button when a url has been entered, if an option has been selected and the email is available
	$(document).on( 'change.tos_report_form', '#report-url', function(){
		if ( $.trim( tosform.$report_url.val() ).length != 0 && tosform.report_type.length != 0 && $.trim( tosform.$report_email.val() ).length != 0 )
			tosform.$next.attr( 'disabled', false );
		else
			tosform.$next.attr( 'disabled', true );
	});

	// Enable continue button when an email has been entered, if an option is selected and url  has been entered
	$(document).on( 'change.tos_report_form', '#report-email', function(){
		if ( $.trim( tosform.$report_url.val() ).length != 0 && tosform.report_type.length != 0 && $.trim( tosform.$report_email.val() ).length != 0 )
			tosform.validateUrl( tosform.$report_url.val() );
		else
			tosform.$next.attr( 'disabled', true );
	});

	// Move to step 2
	$(document).on( 'click.tos_report_form', '#step1-submit', function(){
		if( tosform.isLoggedoutUser) {
			$('#step1-submit').val('validating..');
			$.ajax( {
				url: tosform.ajaxurl,
				type : 'POST',
				dataType: 'json',
				data : {
					action: 'tos_validate_report_fields',
					report_url: $.trim( tosform.$report_url.val() ),
					report_email: $.trim( tosform.$report_email.val() )
				},
				success: function( errorMessages ) {
					$( '#tos-email-error-message' ).empty();
					$( '#tos-url-error-message' ).empty();
					if( Object.keys(errorMessages.errors).length === 0 ) {
						tosform.setup_step2();
					} else {
						if( typeof errorMessages.errors.email_error_message != 'undefined' )
							$( '#tos-email-error-message' ).append( '<p>' + errorMessages.errors.email_error_message + '</p>' );
						if( typeof errorMessages.errors.url_error_message != 'undefined' )
							$( '#tos-url-error-message' ).append( '<p>' + errorMessages.errors.url_error_message + '</p>' );
						$( '#step1-submit' ).val( 'Submit' );
					}
				}
			});
		} else {
			tosform.setup_step2();
		}

	});

	// Enable form submission when reason textarea is field
	$(document).on( 'change.tos_report_form input.tos_report_form paste.tos_report_form', 'textarea.step-2-confirm', function(){
		if ( $.trim( $(this).val() ).length != 0 )
			tosform.$submit.attr( 'disabled', false );
		else
			tosform.$submit.attr( 'disabled', true );
	});

	// close window on cancel button click or overlay click
	$(document).on( 'click.tos_report_form', '#TB_ajaxContent .tosform-cancel, #TB_overlay', function(e) {
		//e.preventDefault();
		tb_remove();
	});

	// close window on 'esc' keypress
	$(document).keyup( function(e) {
		if ( e.keyCode == 27 ) {
			tb_remove();
		}
	});

	// Open form function
	var openForm = function(e){
		e.preventDefault();
		tb_show( wpcom_tos_report_form.report_this_content, '#TB_inline?width=auto&inlineId=report-form-window&modal=true', '' );

		$( '#TB_window, #TB_overlay, #TB_load, #TB_ajaxContent' ).addClass( 'tos-report-form' );

		var $tb_ajax_content = $( '#TB_ajaxContent.tos-report-form' );

		if ( ! tosform.loaded ) {
			$tb_ajax_content.spin( 'large' );
			$.ajax( {
				url: tosform.ajaxurl,
				data : {
					action: 'tos_form',
					post_id: wpcom_tos_report_form.post_ID,
					report_url: wpcom_tos_report_form.current_url
				},
				success: function( form ) {
					$( '#TB_ajaxContent' ).html( form ).css( 'height', 'auto' );
					tosform.setup();
					tosform.loaded = true;
				},
				xhrFields: {
					withCredentials: true
				}
			} );
		} else {
			$tb_ajax_content.find( '.spinner' ).remove();
			tosform.setup();
		}

		return false;
	};
	
	// open the form
	$(document).on( 'click.tos_report_form', '#wp-admin-bar-wpcom_report_url', openForm );
	$(document).on( 'click.tos_report_form', '.flb-report a', openForm );
	
	// submit the form
	$(document).on( 'submit.tos_report_form', '#report-form', function(e){
		e.preventDefault();

		// set the reason according to the form type
		$( '#report-form input[name=reason]' ).val( $( '#confirm-' + tosform.report_type ).val() );
		var formData = $( '#report-form' ).serialize();
		$.ajax( {
			url: tosform.ajaxurl,
			data : formData,
			type : 'POST',
			success: function(result) {
				if ( result.success == true ) {
					tosform.$step2.hide();
					tosform.$step3.show();
				}
				else {
					tosform.$step2.hide();
					tosform.$step3_error.show();
				}
			},
			xhrFields: {
				withCredentials: true
			}
		});
		
		$( '#TB_ajaxContent.tos-report-form' ).spin( 'large' );

		setTimeout(function(){
			tb_remove();
		}, 2000);

	})

});
;
jQuery( document ).ready( function( $, wpcom ) {
	var masterbar,
		menupops = $( 'li#wp-admin-bar-blog.menupop, li#wp-admin-bar-newdash.menupop, li#wp-admin-bar-my-account.menupop' ),
		newmenu = $( '#wp-admin-bar-new-post-types' );

	// Unbind hoverIntent, we want clickable menus.
	menupops
		.unbind( 'mouseenter mouseleave' )
		.removeProp( 'hoverIntent_t' )
		.removeProp( 'hoverIntent_s' )
		.on( 'mouseover', function(e) {
			var li = $(e.target).closest( 'li.menupop' );
			menupops.not(li).removeClass( 'ab-hover' );
			li.toggleClass( 'ab-hover' );
		} )
		.on( 'click touchstart', function(e) {
			var $target = $( e.target );

			if ( masterbar.focusSubMenus( $target ) ) {
				return;
			}

			e.preventDefault();
			masterbar.toggleMenu( $target );
		} );

	masterbar = {
		focusSubMenus: function( $target ) {
			// Handle selection of menu items
			if ( ! $target.closest( 'ul' ).hasClass( 'ab-top-menu' ) ) {
				$target
					.closest( 'li' );

				return true;
			}

			return false;
		},

		toggleMenu: function( $target ) {
			var $li = $target.closest( 'li.menupop' ),
				$html = $( 'html' );

			$( 'body' ).off( 'click.ab-menu' );
			$( '#wpadminbar li.menupop' ).not($li).removeClass( 'ab-active wpnt-stayopen wpnt-show' );

			if ( $li.hasClass( 'ab-active' ) ) {
				$li.removeClass( 'ab-active' );
				$html.removeClass( 'ab-menu-open' );
			} else {
				$li.addClass( 'ab-active' );
				$html.addClass( 'ab-menu-open' );

				$( 'body' ).on( 'click.ab-menu', function( e ) {
					if ( ! $( e.target ).parents( '#wpadminbar' ).length ) {
						e.preventDefault();
						masterbar.toggleMenu( $li );
						$( 'body' ).off( 'click.ab-menu' );
					}
				} );
			}
		}
	};
} );;
var wpcom = window.wpcom || {};
wpcom.actionbar = {};
wpcom.actionbar.data = actionbardata;

// This might be better in another file, but is here for now
(function($){
	var fbd = wpcom.actionbar.data,
			d = document,
			docHeight = $( d ).height(),
			b = d.getElementsByTagName( 'body' )[0],
			lastScrollTop = 0,
			lastScrollDir, fb, fhtml, fbhtml, slkhtml,
			followingbtn, followbtn, fbdf, action,
			slkhtml = '', foldhtml = '', reporthtml = '',
			customizeIcon, editIcon, themeHtml = '',
			toggleactionbar, $actionbar;

	// Don't show actionbar when iframed
	if ( window != window.top ) {
		return;
	}

	fhtml = '<ul>';

	// Customize Icon
	customizeIcon = '<svg class="gridicon gridicon__customize" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M2 6c0-1.505.78-3.08 2-4 0 .845.69 2 2 2 1.657 0 3 1.343 3 3 0 .386-.08.752-.212 1.09.74.594 1.476 1.19 2.19 1.81L8.9 11.98c-.62-.716-1.214-1.454-1.807-2.192C6.753 9.92 6.387 10 6 10c-2.21 0-4-1.79-4-4zm12.152 6.848l1.34-1.34c.607.304 1.283.492 2.008.492 2.485 0 4.5-2.015 4.5-4.5 0-.725-.188-1.4-.493-2.007L18 9l-2-2 3.507-3.507C18.9 3.188 18.225 3 17.5 3 15.015 3 13 5.015 13 7.5c0 .725.188 1.4.493 2.007L3 20l2 2 6.848-6.848c1.885 1.928 3.874 3.753 5.977 5.45l1.425 1.148 1.5-1.5-1.15-1.425c-1.695-2.103-3.52-4.092-5.448-5.977z" data-reactid=".2.1.1:0.1b.0"></path></g></svg>'

	if ( fbd.canCustomizeSite ) {
		fhtml += '<li class="actnbr-btn actnbr-customize"><a href="'+ fbd.customizeLink +'">' + customizeIcon + '<span>' + fbd.i18n.customize + '<span></a></li>';
	}

	// Edit Icon
	editIcon = '<svg class="gridicon gridicon__pencil" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M13 6l5 5-9.507 9.507c-.686-.686-.69-1.794-.012-2.485l-.002-.003c-.69.676-1.8.673-2.485-.013-.677-.677-.686-1.762-.036-2.455l-.008-.008c-.694.65-1.78.64-2.456-.036L13 6zm7.586-.414l-2.172-2.172c-.78-.78-2.047-.78-2.828 0L14 5l5 5 1.586-1.586c.78-.78.78-2.047 0-2.828zM3 18v3h3c0-1.657-1.343-3-3-3z"></path></g></svg>'

	if ( fbd.canEditPost ) {
		fhtml += '<li class="actnbr-btn actnbr-edit"><a href="'+ fbd.editLink +'">' + editIcon + '<span>' + fbd.i18n.edit + '</span></a></li>';
	}

	// Follow/Unfollow Icon
	followingbtn = '<svg class="gridicon gridicon__following" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M23 13.482L15.508 21 12 17.4l1.412-1.388 2.106 2.188 6.094-6.094L23 13.482zm-7.455 1.862L20 10.89V2H2v14c0 1.1.9 2 2 2h4.538l4.913-4.832 2.095 2.176zM8 13H4v-1h4v1zm3-2H4v-1h7v1zm0-2H4V8h7v1zm7-3H4V4h14v2z"/></g></svg>';
	followbtn = '<svg class="gridicon gridicon__follow" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M23 16v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3zM20 2v9h-4v3h-3v4H4c-1.1 0-2-.9-2-2V2h18zM8 13v-1H4v1h4zm3-3H4v1h7v-1zm0-2H4v1h7V8zm7-4H4v2h14V4z"/></g></svg>';

	fbhtml = '<a class="actnbr-action actnbr-actn-follow" href="">' + followbtn + '<span>' + fbd.i18n.follow + '</span></a>';
	if ( fbd.isFollowing ) {
		fbhtml = '<a class="actnbr-action actnbr-actn-following" href="">' + followingbtn + '<span>' + fbd.i18n.following + '</span></a>';
	}

	// Show follow/unfollow icon on top level, when this is not your own site
	if ( ! fbd.canCustomizeSite ) {
		fhtml += '<li class="actnbr-btn actnbr-hidden"> \
			    	' + fbhtml + ' \
			    	<div class="actnbr-popover tip tip-top-left actnbr-notice"> \
			    		<div class="tip-arrow"></div> \
			    		<div class="tip-inner"> \
			    			' + fbd.i18n.followedText + ' \
			    		</div> \
			    	</div> \
			    </li>';

		// Report Link
		reporthtml = '<li class="flb-report"><a href="http://en.wordpress.com/abuse/">' + fbd.i18n.report + '</a></li>';
	}

	// Show shortlink on single posts
	if ( fbd.isSingular ) {
		slkhtml = '<li class="actnbr-shortlink"><a href="' + fbd.shortlink + '">' + fbd.i18n.shortlink + '</a></li>'
	}

	// Set up fold/unfold menu item
	foldhtml = '<li class="actnbr-fold"><a href="">' + fbd.i18n.foldBar + '</a></li>'
	if ( fbd.isFolded ) {
		foldhtml = '<li class="actnbr-fold"><a href="">' + fbd.i18n.unfoldBar + '</a></li>'
	}

	if ( '' != fbd.themeURL ) {
		themeHtml = '<li class="actnbr-theme"><a href="' + fbd.themeURL + '">' + fbd.i18n.themeInfo.replace( /{theme}/, fbd.themeName ) + '</a></li>';
	}

	// Ellipsis Menu
	fhtml += '<li class="actnbr-ellipsis actnbr-hidden"> \
			  <svg class="gridicon gridicon__ellipsis" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="12" r="2"/></g></svg> \
			  <div class="actnbr-popover tip tip-top-left actnbr-more"> \
			  	<div class="tip-arrow"></div> \
			  	<div class="tip-inner"> \
				  <ul> \
				    <li class="actnbr-sitename"><a href="' + fbd.siteURL + '">' + fbd.icon + ' ' + actionBarEscapeHtml( fbd.siteName ) + '</a></li> \
				   	<li class="actnbr-folded-customize"><a href="'+ fbd.customizeLink +'">' + customizeIcon + '<span>' + fbd.i18n.customize + '<span></a></li> \
				    <li class="actnbr-folded-follow">' + fbhtml + '</li> \
				    ' + themeHtml + ' \
				    ' + slkhtml + ' \
				    ' + reporthtml + ' \
				    <li class="actnbr-reader"><a href="https://wordpress.com/read/blogs/' + fbd.siteID + '">' + fbd.i18n.viewReader + '</a></li> \
				    <li class="actnbr-subs"><a href="https://wordpress.com/following/edit">' + fbd.i18n.editSubs + '</a></li> \
				    ' + foldhtml + ' \
			      </ul> \
			    </div> \
		      </div> \
		    </li> \
	      </ul>';

	fbdf = d.createElement( 'div' );
	fbdf.id = 'actionbar';
	fbdf.innerHTML = fhtml;
	b.appendChild( fbdf );

	$actionbar = $( '#actionbar' ).addClass( 'actnbr-' + fbd.themeSlug.replace( '/', '-' ) );

	// Add classes based on contents
	if ( fbd.canCustomizeSite ) {
		$actionbar.addClass( 'actnbr-has-customize' );
	}

	if ( fbd.canEditPost ) {
		$actionbar.addClass( 'actnbr-has-edit' );
	}

	if ( ! fbd.canCustomizeSite ) {
		$actionbar.addClass( 'actnbr-has-follow' );
	}

	if ( fbd.isFolded ) {
		$actionbar.addClass( 'actnbr-folded' );
	}

	// *** Actions *****************

	// Follow Site
	$actionbar.on(  'click', '.actnbr-actn-follow', function(e) {
		e.preventDefault();
		$( '#actionbar .actnbr-actn-follow' ).replaceWith( '<a class="actnbr-action actnbr-actn-following" href="">' + followingbtn + '<span>' + fbd.i18n.following + '</span></a>' );

		var btn = $( '#actionbar .actnbr-btn' );
		btn.toggleClass( 'actnbr-hidden' );

		setTimeout( function() {
			if ( ! btn.hasClass( 'actnbr-hidden' ) ) {
				$( document ).on( 'click.actnbr-body-click', function(e) {
					btn.addClass( 'actnbr-hidden' );
					$( document ).off( 'click.actnbr-body-click' );
				} );
			}
		}, 10 );

		bumpStat( 'followed' );
		request( 'ab_subscribe_to_blog' );
	} )

	// UnFollow Site
	.on(  'click', '.actnbr-actn-following', function(e) {
		e.preventDefault();
		$( '#actionbar .actnbr-actn-following' ).replaceWith( '<a class="actnbr-action actnbr-actn-follow" href="">' + followbtn + '<span>' + fbd.i18n.follow + '</span></a>' );

		bumpStat( 'unfollowed' );
		request( 'ab_unsubscribe_from_blog' );
	} )

	// Show shortlink prompt
	.on( 'click', '.actnbr-shortlink a', function(e) {
		e.preventDefault();
		window.prompt( "Shortlink: ", fbd.shortlink );
	} )

	// Toggle more menu
	.on( 'click', '.actnbr-ellipsis', function(e) {
		if ( $( e.target ).closest( 'a' ).hasClass( 'actnbr-action' ) ) {
			return false;
		}

		var popoverLi = $( '#actionbar .actnbr-ellipsis' );
		popoverLi.toggleClass( 'actnbr-hidden' );

		setTimeout( function() {
			if ( ! popoverLi.hasClass( 'actnbr-hidden' ) ) {
				$( document ).on( 'click.actnbr-body-click', function(e) {
					popoverLi.addClass( 'actnbr-hidden' );
					$( document ).off( 'click.actnbr-body-click' );
				} );
			}
		}, 10 );
	})

	// Fold/Unfold
	.on( 'click', '.actnbr-fold', function(e) {
		e.preventDefault();

		if ( $( '#actionbar' ).hasClass( 'actnbr-folded' ) ) {
			$( '.actnbr-fold a' ).html( fbd.i18n.foldBar );
			$( '#actionbar' ).removeClass( 'actnbr-folded' );

			$.post( fbd.xhrURL, { 'action': 'unfold_actionbar' } );
		} else {
			$( '.actnbr-fold a' ).html( fbd.i18n.unfoldBar );
			$( '#actionbar' ).addClass( 'actnbr-folded' );

			$.post( fbd.xhrURL, { 'action': 'fold_actionbar' } );
		}
	})

	// Record stats for clicks
	.on( 'click', '.actnbr-sitename a', function(e) {
		bumpStat( 'clicked_site_title' );
	})
	.on( 'click', '.actnbr-customize a', function(e) {
		bumpStat( 'customized' );
	})
	.on( 'click', '.actnbr-folded-customize a', function(e) {
		bumpStat( 'customized' );
	})
	.on( 'click', '.actnbr-theme a', function(e) {
		bumpStat( 'explored_theme' );
	})
	.on( 'click', '.actnbr-edit a', function(e) {
		bumpStat( 'edited' );
	})
	.on( 'click', '.flb-report a', function(e) {
		bumpStat( 'reported_content' );
	})
	.on( 'click', '.actnbr-subs a', function(e) {
		bumpStat( 'managed_following' );
	})
	.on( 'click', '.actnbr-shortlink a', function(e) {
		bumpStat( 'copied_shortlink' );
	})
	.on( 'click', '.actnbr-reader a', function(e) {
		bumpStat( 'view_reader' );
	});


	// Make Follow/Unfollow requests
	var request = function( action ) {
		$.post( fbd.xhrURL, {
			'action': action,
			'_wpnonce': fbd.nonce,
			'source': 'actionbar',
			'blog_id': fbd.siteID
		});
	};

	// Show/Hide actionbar on scroll
	fb = $('#actionbar');
	toggleactionbar = function() {
		var st = $(window).scrollTop(),
			topOffset = 0;

		if ( $(window).scrollTop() < 0 ) {
			return;
		}

		// Still
		if ( lastScrollTop == 0 || ( ( st == lastScrollTop ) && lastScrollDir == 'up' ) ) {
			fb.removeClass( 'actnbr-hidden' );

		// Moving
		} else {
			 // Scrolling Up
		    if ( st < lastScrollTop ){
				fb.removeClass( 'actnbr-hidden' );
				lastScrollDir = 'up';

			// Scrolling Down
			} else {
				fb.addClass( 'actnbr-hidden' )
				lastScrollDir = 'down';

				// Hide any menus
				$( '#actionbar li' ).addClass( 'actnbr-hidden' );
			}
		}

		lastScrollTop = st;
	}
	setInterval( toggleactionbar, 100 );

	// Bump stats
	var bumpStat = function( stat ) {
		$.post( fbd.xhrURL, {
			'action': 'actionbar_stats',
			'stat': stat
		});
	}

	function actionBarEscapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, function (s) {
			var entityMap = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': '&quot;',
				"'": '&#39;',
				"/": '&#x2F;'
			};
			return entityMap[s];
		});
	};
})(jQuery);
;

WPGroHo = jQuery.extend({
    my_hash: '',
    data: {},
    renderers: {},
    syncProfileData: function(hash, id) {
        if (!WPGroHo.data[hash]) {
            WPGroHo.data[hash] = {};
            a = jQuery('div.grofile-hash-map-' + hash + ' span').each(function() {
                WPGroHo.data[hash][this.className] = jQuery(this).text();
            });
        }
        WPGroHo.appendProfileData(WPGroHo.data[hash], hash, id);
    },
    appendProfileData: function(data, hash, id) {
        for (var key in data) {
            if (jQuery.isFunction(WPGroHo.renderers[key])) {
                return WPGroHo.renderers[key](data[key], hash, id, key);
            }
            jQuery('#' + id).find('h4').after(jQuery('<p class="grav-extra ' + key + '" />').html(data[key]));
        }
    }
}, WPGroHo);

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "1.12.4", n = function(a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length, c =+ a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b=!1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor&&!k.call(a, "constructor")&&!k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d])===!1)
                        break
            } else 
                for (d in a)
                    if (b.call(a[d], d, a[d])===!1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return - 1
        },
        merge: function(a, b) {
            var c =+ b.length, d = 0, e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h=!c; g > f; f++)
                d=!b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c), null != e && h.push(e);
            else 
                for (g in a)
                    e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return + new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b=!!a && "length"in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a)?!1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l=!0), 0
        }, C = 1<<31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return - 1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d>>10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType: 9;
            if (d = d || [], "string" != typeof a ||!a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                                if (j.id === f)
                                    return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j), d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                                return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa&&!A[a + " "] && (!q ||!q.test(a))) {
                    if (1 !== x)
                        w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u]=!0, a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|"), e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return - 1;
            return a ? 1 : - 1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b =+ b, ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a: v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p=!f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName ||!n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d || 1 !== d.nodeType ||!(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d ||!c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a)?-1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d?-1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e ||!f)
                    return a === n?-1 : b === n ? 1 : e?-1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v?-1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p&&!A[b + " "] && (!r ||!r.test(b)) && (!q ||!q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p): void 0;
            return void 0 !== f ? f : c.attributes ||!p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l=!c.detectDuplicates, k=!c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                    } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else 
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c)>-1 : "$=" === b ? c && e.slice( - c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c)>-1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s=!i&&!h, t=!1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a&&!o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m=++n && m && m[p] || (t = n = 0) || o.pop()
                                    )if (1 === m.nodeType&&++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t===!1)
                                while (m=++n && m && m[p] || (t = n = 0) || o.pop()
                                    )if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)&&++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))break;
                            return t -= e, t === d || t%d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]), a[d]=!(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h]=!(b[h] = f))
                        }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has : ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }), contains : ha(function(a) {
                    return a = a.replace(ba, ca), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a)>-1
                    }
                }), lang : ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function(b) {
                        var c;
                        do 
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target : function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function(a) {
                    return a === o
                }, focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                }, enabled: function(a) {
                    return a.disabled===!1
                }, disabled: function(a) {
                    return a.disabled===!0
                }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected===!0
                }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                }, parent: function(a) {
                    return !d.pseudos.empty(a)
                }, header: function(a) {
                    return Y.test(a.nodeName)
                }, input: function(a) {
                    return X.test(a.nodeName)
                }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: na(function() {
                    return [0]
                }), last : na(function(a, b) {
                    return [b - 1]
                }), eq : na(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }), even : na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }), odd : na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }), lt : na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a
                }), gt : na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq; for (b in{
            radio : !0, checkbox : !0, file : !0, password : !0, image : !0
        })d.pseudos[b] = la(b);
        for (b in{
            submit: !0,
            reset: !0
        })d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c&&!(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c=!1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g]&&!(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else 
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g))
                                    return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) 
                && (c&&!c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d&&!d[u] && (d = va(d)), e&&!e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q=!a ||!f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]]=!(q[n[k]] = l))
                    }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k])>-1 && (f[j]=!(g[j] = l))
                        }
                } else 
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a)>-1
            }, h, !0), m = [function(a, c, d) {
                var e=!g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e=++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                                return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*": ""
                                })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                            }
                            m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1: Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h=!p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l=!q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u), k&&!f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o=!f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a)
                            return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates=!!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b]===!0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                    d.push(a)
            }
        return d
    }, v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b)>-1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                        }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e ||!e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]), f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c)>-1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do 
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c]=!0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h =- 1, i = function() {
            for (e = a.once, d = b=!0; g.length; h =- 1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1])===!1 && a.stopOnFalse && (h = f.length, c=!1)
            }
            a.memory || (c=!1), b=!1, e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c&&!b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments), c&&!b && i()), this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c))>-1)
                        f.splice(c, 1), h >= c && h--
                }), this
            },
            has: function(a) {
                return a ? n.inArray(a, f)>-1 : f.length > 0
            },
            empty: function() {
                return f && (f = []), this
            },
            disable: function() {
                return e = g = [], f = c = "", this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e=!0, c || j.disable(), this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice(): c], g.push(c), b || i()), this
            },
            fire: function() {
                return j.fireWith(this, arguments), this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1^a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d: 0, g = 1 === f ? a: n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a===!0?--n.readyWait : n.isReady) || (n.isReady=!0, a!==!0&&--n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState&&!d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c=!1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll&&!function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout=!1, n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }), function() {
        var a = d.createElement("div");
        l.deleteExpando=!0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando=!1
        }
        a = null
    }();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()], c =+ a.nodeType || 1;
        return 1 !== c && 9 !== c?!1 : !b || b!==!0 && a.getAttribute("classid") === b
    }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : + c + "" === c?+c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else 
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b ||!n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache: a, k = i ? a[h]: a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache: a, h = f ? a[n.expando]: n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c?!Q(d) : !n.isEmptyObject(d)
                        )return 
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a&&!Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType&&!n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    }), function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a=!1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"], W = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") ||!n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j&&+i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k =+ i || 1;
            do 
                f = f || ".5", k/=f, n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f&&--g)
            }
        return c && (k =+ k||+i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : + c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e=!0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e=!0, n.isFunction(d) || (g=!0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b))for (; i > h; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div"), b = d.createDocumentFragment(), c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody=!a.getElementsByTagName("tbody").length, l.htmlSerialize=!!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked=!0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent=!!a.addEventListener, a[n.expando] = 1, l.attributes=!a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*"): "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*"): void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/, ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                    while (f--)
                        i = i.lastChild;
                        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                            g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                            while (f--)
                                n.nodeName(k = g.childNodes[f], "tbody")&&!k.childNodes.length && g.removeChild(k)
                            }
                            n.merge(q, i.childNodes), i.textContent = "";
                            while (i.firstChild)
                                i.removeChild(i.firstChild);
                                i = p.lastChild
                    } else 
                        q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d)>-1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null, p
    }
    !function() {
        var b, c, e = d.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando===!1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e===!1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k)!==!1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o]=!0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--)
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h&&!h.test(g.namespace) || d && d !== g.selector && ("**" !== d ||!g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i&&!m.length && (l.teardown && l.teardown.call(a, p, r.handle)!==!1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else 
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type: b, r = k.call(b, "namespace") ? b.namespace.split("."): [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType&&!na.test(q + n.event.triggered) && (q.indexOf(".")>-1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f ||!l.trigger || l.trigger.apply(e, c)!==!1)
                ) {
                if (!f&&!l.noBubble&&!n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++])&&!b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result===!1 && b.preventDefault());
                if (b.type = q, !f&&!b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c)===!1) && M(e) && h && e[q]&&!n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a)!==!1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++])&&!a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++])&&!a.isImmediatePropagationStopped())
                        a.rnamespace&&!a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d)===!1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled!==!0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i)>-1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--)
                c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey=!!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue===!1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando]=!0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue=!1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a&&!this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form")?!1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form"): void 0;
                c&&!n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble=!0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode&&!a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form")?!1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged=!0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged&&!a.isTrigger && (this._justChanged=!1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName)&&!n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b!==!1 && "function" != typeof b || (c = b, b = void 0), c===!1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
                    }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML&&!n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q&&!l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
                g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
                    g = i[m], _.test(g.type || "")&&!n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) ||!ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else 
                    Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                            j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a&&!wa.test(a) && (l.htmlSerialize ||!ua.test(a)) && (l.leadingWhitespace ||!aa.test(a))&&!da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d
    }
    function Ma(a) {
        var b = d, c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }, Qa = d.documentElement;
    !function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat=!!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h=!1, c = g=!0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g=!parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c&&!l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g)&&!Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }, _a = ["Webkit", "O", "Moz", "ms"], ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c ||!e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d=!0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set"in g && void 0 === (c = g.set(a, c, d)))
                    ))try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c===!0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d&&!d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e ||!r || void 0 === r[d])
                        continue;
                        q=!0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else 
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden=!q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else 
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length: 0;
                if (e)
                    return this;
                for (e=!0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing);
        g > f;
        f++)if (d = qb.prefilters[f].call(j, a, k, j.opts))
            return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c), c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a): {
            complete: c ||!c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue!==!0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a!==!1 && this.queue(a || "fx", []), this.each(function() {
                var b=!0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else 
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b=!1, f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a!==!1 && (a = a || "fx"), this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length: 0;
                for (c.finish=!0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }, function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn=!!b.value, l.optSelected = f.selected, l.enctype=!!d.createElement("form").enctype, e.disabled=!0, l.optDisabled=!f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
    var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled?!c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled ||!n.nodeName(c.parentNode, "optgroup"))
                            ) {
                        if (b = n(c).val(), f)
                            return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f)>-1)
                            try {
                                d.selected = c=!0
                    } catch (h) {
                        d.scrollHeight
                    } else 
                        d.selected=!1;
                    return c || (a.selectedIndex =- 1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b)>-1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb ||!wb.test(c) ? a[d]=!1 : a[n.camelCase("default-" + c)] = a[d]=!1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b===!1 ? n.removeAttr(a, c) : yb && xb ||!wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c]=!0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb ||!wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b?!1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : - 1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ")>-1)
                                d = d.replace(" " + f + " ", " ");
                                h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else 
                    void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a===!1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b)>-1)
                    return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location, Eb = n.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e&&!n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d+=!f-!e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement&&!c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}, f = a === Pb;
        function g(h) {
            var i;
            return e[h]=!0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f?!(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) ||!e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g===!0 ? g = j[e] : j[e]!==!0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                            if (g!==!0)
                                if (g && a["throws"])
                                    b = g(b);
                                else 
                                    try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l: "No conversion from " + i + " to " + f
                                        }
                                    }
                                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m): n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else 
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b), y(0, b), this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain=!(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u)
                return w;
            i = n.event && l.global, i && 0 === n.active++&&n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent=!Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache===!1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType!==!1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l)===!1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in{
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y( - 1, x)
                }
            } else 
                y( - 1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k=!t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s: t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0&&!a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else 
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery&&!n.isPlainObject(a)
            )n.each(a, function() {
            e(this.name, this.value)
        });
        else 
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!n(this).is(":disabled") && cc.test(this.nodeName)&&!bc.test(a) && (this.checked ||!Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }), l.cors=!!gc && "withCredentials"in gc, gc = l.ajax=!!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(), h=++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f ||!b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1), a.crossDomain && (a.type = "GET", a.global=!1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async=!0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c ||!b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a]=!0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp!==!1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp!==!1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b=!1), b = b || d;
        var e = x.exec(a), f=!c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h>-1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i])>-1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a&&!n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d===!0 || e===!0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery, oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute=!0), function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c]=!0, a.migrateWarnings.push(c), d && d.warn&&!a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }
    function e(b, c, e, f) {
        if (Object.defineProperty)
            try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
        } catch (g) {}
        a._definePropertyBroken=!0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace=!0), a.migrateReset = function() {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
    }).attr("size") && a.attrFn, h = a.attr, i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
    }, j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
    }, k = /^(?:input|button)$/i, l = /^[238]$/, m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b&&!l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function(b, d) {
                var e, f = a.prop(b, d);
                return f===!0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue!==!1 ? d.toLowerCase() : c
            },
            set: function(b, c, d) {
                var e;
                return c===!1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e]=!0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
        var g, h;
        return b && "string" == typeof b&&!a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
            try {
                document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function(a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r)
        Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser]=!0, p.version = o.version), p.chrome ? p.webkit=!0 : p.webkit && (p.safari=!0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a, c)
        }
        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this (), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y=!1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return y=!0, a = d.apply(this, arguments), y=!1, a
        })
    }), a.swap = function(a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b)
            h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b)
            a.style[g] = h[g];
        return f
    }, a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
        c = c || document, c=!c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e)
            for (i = function(a) {
                return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
            }, g = 0; null != (h = k[g]); g++)
                a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die, H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) ||!a.isFunction(c))
            return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function(c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0)%g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) ||!1
        };
        for (h.guid = f; g < e.length;)
            e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function() {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred, P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function(b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function() {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function() {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function() {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);;
var wpFollowButton;

(function($) {
    var cookies = document.cookie.split( /;\s*/ ), cookie = false;
    for ( i = 0; i < cookies.length; i++ ) {
        if ( cookies[i].match( /^wp_api=/ ) ) {
            cookies = cookies[i].split( '=' );
            cookie = cookies[1];
            break;
        }
    }

    wpFollowButton = {

        enable: function() {
            $( 'a.wpcom-follow, a.wpcom-following' ).click( function( e ) {
                e.preventDefault();

                var link = $( this );

                var blog_id = link.data('id');
                var blog_url = link.data('url');
                var is_following = link.hasClass( 'wpcom-following' );

                if ( blog_id ) {
                    var f_id = blog_id;
                } else {
                    var ln_classes = link.attr( 'class' ).split( ' ' );
                    for ( i = 0; i < ln_classes.length; i++ ) {
                        if ( 0 == ln_classes[i].indexOf('f-') ) {
                            var f_id = ln_classes[i].slice( 2, ln_classes[i].length );
                        }
                    }
                }

                if ( is_following ) {
                    var action = 'ab_unsubscribe_from_blog';
                } else {
                    var action = 'ab_subscribe_to_blog';
                }

                var elem = $( 'a.f-' + f_id );
                if ( is_following ) {
                    elem.fadeOut( 'fast', function() {
                        elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
                        elem.fadeIn( 'fast' );
                    })
                } else {
                    elem.fadeOut( 'fast', function() {
                        elem.addClass( 'wpcom-following' ).removeClass( 'wpcom-follow' ).text( 'Following' );
                        elem.fadeIn( 'fast' );
                    })
                }

                var href = link.attr( 'href' );

                var params = href.split( '\?' );
                var domain = params[0];
                var flds = 'undefined' != typeof params[1] ? params[1].split( '&' ) : [];
                for ( var i = 0; i < flds.length; i++ ) {
                    var pos = flds[i].indexOf( '=' );
                    if ( - 1 == pos ) 
                        continue;
                    var argname = flds[i].substring( 0, pos );
                    var value = flds[i].substring( pos + 1 );

                    if ( argname == '_wpnonce') {
                        var nonce = value;
                    } else if ( argname == 'src' ) {
                        var source = value;
                    }
                }

                $.post( domain + 'wp-admin/admin-ajax.php', {
                    'action': action,
                    '_wpnonce': nonce,
                    'blog_id': blog_id,
                    'blog_url': blog_url,
                    'source': source
                }, function( response ) {
                    if ( 'object' == typeof response.errors ) {
                        if ( is_following )
                            elem.removeClass( 'wpcom-follow' ).addClass( 'wpcom-following' ).text( 'Following' );
                        else
                            elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
                    }
                },
                'json' );
            });
        },

        enable_rest: function( el, source ) {
            var t = this;

            el.unbind( 'click' ).bind( 'click', function( e ) {
                e.preventDefault();
                var link = $( this );
                var blog_id = link.attr( 'data-blog-id' );
                var is_following = link.hasClass( 'wpcom-following-rest' );
                var rest_path = '/sites/' + blog_id + '/follows/new';

                if ( is_following ) {
                    rest_path = '/sites/' + blog_id + '/follows/mine/delete';
                }

                //select and update ALL follow buttons on the page (could be more than one)
                var attr_selector = 'data-blog-id="' + blog_id + '"';
                var elem = $( 'a.wpcom-follow-rest[' + attr_selector + '], a.wpcom-following-rest[' + attr_selector + ']' );
                if ( is_following ) {
                    elem.fadeOut( 'fast', function() {
                        elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
                        elem.fadeIn( 'fast' );
                    })
                } else {
                    elem.fadeOut( 'fast', function() {
                        elem.addClass( 'wpcom-following-rest' ).removeClass( 'wpcom-follow-rest' ).text( link.attr( 'data-following-text' ) );
                        elem.fadeIn( 'fast' );
                    })
                }

                t.ajax( {
                    type: 'POST',
                    path : rest_path,
                    success : function( res ) {
                        if ( ! res.success ) {
                            if ( is_following )
                                elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
                            else
                                elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
                        }
                    },
                    error : function( res ) {
                        if ( is_following )
                            elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
                        else
                            elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
                    }
                });

                //show post-Follow bubble
                if ( ! is_following ) {
                    t.showBubble( link );
                    t.bumpStat( link.attr( 'data-stat-src' ) );
                }
            });

            //show unfollow text on hover
            el.hover( function() {
                var link = $( this );
                var is_following = link.hasClass( 'wpcom-following-rest' );
                if ( is_following )
                    link.text( link.attr( 'data-following-hover-text' ) );
            }, function() {
                var link = $( this );
                var is_following = link.hasClass( 'wpcom-following-rest' );
                if ( is_following )
                    link.text( link.attr( 'data-following-text' ) );
            });

        },

        showBubble: function( link ) {
            var pos = link.position();
            var hideBubble = this.hideBubble;
            $( 'div.bubble-txt', 'div.action-bubble' ).html( "New posts from this blog will now appear in <a href='http://wordpress.com/read/following/' onclick='hideBubble()'>your reader</a>." );
            var bubble = $( 'div.action-bubble' );
            link.parent().append( bubble );
            var left = pos.left + ( link.width() / 2 ) - ( $( 'div.wpcom-bubble' ).width() / 2 );
            var top = pos.top + bubble.height();
            bubble.css( {
                left: left + 'px',
                top: top + 'px' 
            });
            bubble.addClass( 'fadein' );
            setTimeout( function() {
                $('body').on( 'click.bubble touchstart.bubble', function(e) {
                    if ( !$(e.target).hasClass('action-bubble') && !$(e.target).parents( 'div.action-bubble' ).length )
                        hideBubble();
                });
                $(document).on( 'scroll.bubble', hideBubble );
                setTimeout( hideBubble, 10000 );
            }, 500 );
        },

        hideBubble: function() {
            $( 'div.wpcom-bubble.action-bubble' ).remove();
        },

        //common method for rendering a follow button from the object data
        create : function ( data, source ) {
            var is_following = data['params']['is_following'];
            var follow_link = $('<a></a>', {
                'class' : ( is_following ? 'wpcom-following-rest' : 'wpcom-follow-rest' ),
                href : 'http://public-api.wordpress.com/sites/' + data['params']['site_id'] + '/follows',
                title : data['params']['blog_title'] + 
                ' (' + data['params']['blog_domain'] + ')',
                text : is_following ? data['params']['following-text'] : data['params']['follow-text']
            }).attr( {
                'data-blog-id' : data['params']['site_id'],
                'data-stat-src' : data['params']['stat-source'],
                'data-follow-text' : data['params']['follow-text'],
                'data-following-text' : data['params']['following-text'],
                'data-following-hover-text' : data['params']['following-hover-text']
            });
            var follow_button = $( '<div></div>', {
                'class': 'wpcom-follow-container wpcom-follow-attached',
                style: 'display: inline-block;'
            }).append( follow_link );

            this.enable_rest( follow_link, source );
            return follow_button;
        },

        createAll: function() {
            $( '.wpcom-follow-container' ).not( '.wpcom-follow-attached' ).each( function( index ) {
                var el = $( this );
                el.replaceWith( wpFollowButton.create( el.data( 'json' ), el.data( 'follow-source' ) ) );
            });
        },

        ajax: function( options ) {
            if ( document.location.host == 'public-api.wordpress.com' ) {
                //console.log( 'regular ajax call ' + options.type + ' ' + options.path);
                $.ajaxSetup({
                    beforeSend : function(xhr) {
                        if ( cookie ) {
                            xhr.setRequestHeader( 'Authorization', 'X-WPCOOKIE ' + cookie + ':1:' + document.location.host );
                        }
                    }
                });
                var request = {
                    type : options.type,
                    url : 'https://public-api.wordpress.com/rest/v1' + options.path,
                    success : options.success,
                    error : options.error,
                    data : options.data,
                    dataType : 'json'
                };
                $.ajax(request);
                $.ajaxSetup({
                    beforeSend : null 
                });
            } else {
                //console.log( 'proxied ajax call ' + options.type + ' ' + options.path );
                var request = {
                    path: options.path,
                    method: options.type
                };
                if ( request.method === "POST" )
                    request.body = options.data;
                else
                    request.query = options.data;

                $.wpcom_proxy_request(request).done( function ( response, statusCode ) {
                    if ( 200 == statusCode ) 
                        options.success( response );
                    else
                        options.error( statusCode );
                });
            }
        },

        bumpStat: function( source ) {
            new Image().src = document.location.protocol + 
            '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_follow_source=' + encodeURIComponent( source ) + '&baba=' + Math.random();
        }

    };

    $(function() {
        wpFollowButton.enable()
        wpFollowButton.createAll()
    });

})(jQuery);;
/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY = {};
(function(window, $, undefined) {

    if (!("console" in window)) {
        var c = window.console = {};
        c.log = c.warn = c.error = c.debug = function() {};
    }

    if ($ === NO_JQUERY) {
        // jQuery is optional
        $ = {
            fn: {},
            extend: function() {
                var a = arguments[0];
                for (var i = 1, len = arguments.length; i < len; i++) {
                    var b = arguments[i];
                    for (var prop in b) {
                        a[prop] = b[prop];
                    }
                }
                return a;
            }
        };
    }

    $.fn.pm = function() {
        console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])");
        return this;
    };

    // send postmessage
    $.pm = window.pm = function(options) {
        pm.send(options);
    };

    // bind postmessage handler
    $.pm.bind = window.pm.bind = function(type, fn, origin, hash, async_reply) {
        pm.bind(type, fn, origin, hash, async_reply === true);
    };

    // unbind postmessage handler
    $.pm.unbind = window.pm.unbind = function(type, fn) {
        pm.unbind(type, fn);
    };

    // default postmessage origin on bind
    $.pm.origin = window.pm.origin = null;

    // default postmessage polling if using location hash to pass postmessages
    $.pm.poll = window.pm.poll = 200;

    var pm = {

        send: function(options) {
            var o = $.extend({}, pm.defaults, options),
            target = o.target;
            if (!o.target) {
                console.warn("postmessage target window required");
                return;
            }
            if (!o.type) {
                console.warn("postmessage type required");
                return;
            }
            var msg = {
                data: o.data,
                type: o.type
            };
            if (o.success) {
                msg.callback = pm._callback(o.success);
            }
            if (o.error) {
                msg.errback = pm._callback(o.error);
            }
            if (("postMessage" in target) && !o.hash) {
                pm._bind();
                target.postMessage(JSON.stringify(msg), o.origin || '*');
            } else {
                pm.hash._bind();
                pm.hash.send(o, msg);
            }
        },

        bind: function(type, fn, origin, hash, async_reply) {
            pm._replyBind ( type, fn, origin, hash, async_reply );
        },

        _replyBind: function(type, fn, origin, hash, isCallback) {
            if (("postMessage" in window) && !hash) {
                pm._bind();
            } else {
                pm.hash._bind();
            }
            var l = pm.data("listeners.postmessage");
            if (!l) {
                l = {};
                pm.data("listeners.postmessage", l);
            }
            var fns = l[type];
            if (!fns) {
                fns = [];
                l[type] = fns;
            }
            fns.push({
                fn: fn,
                callback: isCallback,
                origin: origin || $.pm.origin
            });
        },

        unbind: function(type, fn) {
            var l = pm.data("listeners.postmessage");
            if (l) {
                if (type) {
                    if (fn) {
                        // remove specific listener
                        var fns = l[type];
                        if (fns) {
                            var m = [];
                            for (var i = 0, len = fns.length; i < len; i++) {
                                var o = fns[i];
                                if (o.fn !== fn) {
                                    m.push(o);
                                }
                            }
                            l[type] = m;
                        }
                    } else {
                        // remove all listeners by type
                        delete l[type];
                    }
                } else {
                    // unbind all listeners of all type
                    for (var i in l) {
                        delete l[i];
                    }
                }
            }
        },

        data: function(k, v) {
            if (v === undefined) {
                return pm._data[k];
            }
            pm._data[k] = v;
            return v;
        },

        _data: {},

        _CHARS: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),

        _random: function() {
            var r = [];
            for (var i = 0; i < 32; i++) {
                r[i] = pm._CHARS[0 | Math.random() * 32];
            };
            return r.join("");
        },

        _callback: function(fn) {
            var cbs = pm.data("callbacks.postmessage");
            if (!cbs) {
                cbs = {};
                pm.data("callbacks.postmessage", cbs);
            }
            var r = pm._random();
            cbs[r] = fn;
            return r;
        },

        _bind: function() {
            // are we already listening to message events on this w?
            if (!pm.data("listening.postmessage")) {
                if (window.addEventListener) {
                    window.addEventListener("message", pm._dispatch, false);
                } else if (window.attachEvent) {
                    window.attachEvent("onmessage", pm._dispatch);
                }
                pm.data("listening.postmessage", 1);
            }
        },

        _dispatch: function(e) {
            //console.log("$.pm.dispatch", e, this);
            try {
                var msg = JSON.parse(e.data);
            } catch (ex) {
                //console.warn("postmessage data invalid json: ", ex); //message wasn't meant for pm
                return;
            }
            if (!msg.type) {
                //console.warn("postmessage message type required"); //message wasn't meant for pm
                return;
            }
            var cbs = pm.data("callbacks.postmessage") || {},
            cb = cbs[msg.type];
            if (cb) {
                cb(msg.data);
            } else {
                var l = pm.data("listeners.postmessage") || {};
                var fns = l[msg.type] || [];
                for (var i = 0, len = fns.length; i < len; i++) {
                    var o = fns[i];
                    if (o.origin && o.origin !== '*' && e.origin !== o.origin) {
                        console.warn("postmessage message origin mismatch", e.origin, o.origin);
                        if (msg.errback) {
                            // notify post message errback
                            var error = {
                                message: "postmessage origin mismatch",
                                origin: [e.origin, o.origin]
                            };
                            pm.send({
                                target: e.source,
                                data: error,
                                type: msg.errback
                            });
                        }
                        continue;
                    }

                    function sendReply ( data ) {
                        if (msg.callback) {
                            pm.send({
                                target: e.source,
                                data: data,
                                type: msg.callback
                            });
                        }
                    }

                    try {
                        if ( o.callback ) {
                            o.fn(msg.data, sendReply, e);
                        } else {
                            sendReply ( o.fn(msg.data, e) );
                        }
                    } catch (ex) {
                        if (msg.errback) {
                            // notify post message errback
                            pm.send({
                                target: e.source,
                                data: ex,
                                type: msg.errback
                            });
                        } else {
                            throw ex;
                        }
                    }
                };
            }
        }
    };

    // location hash polling
    pm.hash = {

        send: function(options, msg) {
            //console.log("hash.send", target_window, options, msg);
            var target_window = options.target,
            target_url = options.url;
            if (!target_url) {
                console.warn("postmessage target window url is required");
                return;
            }
            target_url = pm.hash._url(target_url);
            var source_window,
            source_url = pm.hash._url(window.location.href);
            if (window == target_window.parent) {
                source_window = "parent";
            } else {
                try {
                    for (var i = 0, len = parent.frames.length; i < len; i++) {
                        var f = parent.frames[i];
                        if (f == window) {
                            source_window = i;
                            break;
                        }
                    };
                } catch (ex) {
                    // Opera: security error trying to access parent.frames x-origin
                    // juse use window.name
                    source_window = window.name;
                }
            }
            if (source_window == null) {
                console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");
                return;
            }
            var hashmessage = {
                "x-requested-with": "postmessage",
                source: {
                    name: source_window,
                    url: source_url
                },
                postmessage: msg
            };
            var hash_id = "#x-postmessage-id=" + pm._random();
            target_window.location = target_url + hash_id + encodeURIComponent(JSON.stringify(hashmessage));
        },

        _regex: /^\#x\-postmessage\-id\=(\w{32})/,

        _regex_len: "#x-postmessage-id=".length + 32,

        _bind: function() {
            // are we already listening to message events on this w?
            if (!pm.data("polling.postmessage")) {
                setInterval(function() {
                    var hash = "" + window.location.hash,
                    m = pm.hash._regex.exec(hash);
                    if (m) {
                        var id = m[1];
                        if (pm.hash._last !== id) {
                            pm.hash._last = id;
                            pm.hash._dispatch(hash.substring(pm.hash._regex_len));
                        }
                    }
                }, $.pm.poll || 200);
                pm.data("polling.postmessage", 1);
            }
        },

        _dispatch: function(hash) {
            if (!hash) {
                return;
            }
            try {
                hash = JSON.parse(decodeURIComponent(hash));
                if (!(hash['x-requested-with'] === 'postmessage' &&
                hash.source && hash.source.name != null && hash.source.url && hash.postmessage)) {
                    // ignore since hash could've come from somewhere else
                    return;
                }
            } catch (ex) {
                // ignore since hash could've come from somewhere else
                return;
            }
            var msg = hash.postmessage,
            cbs = pm.data("callbacks.postmessage") || {},
            cb = cbs[msg.type];
            if (cb) {
                cb(msg.data);
            } else {
                var source_window;
                if (hash.source.name === "parent") {
                    source_window = window.parent;
                } else {
                    source_window = window.frames[hash.source.name];
                }
                var l = pm.data("listeners.postmessage") || {};
                var fns = l[msg.type] || [];
                for (var i = 0, len = fns.length; i < len; i++) {
                    var o = fns[i];
                    if (o.origin) {
                        var origin = /https?\:\/\/[^\/]*/.exec(hash.source.url)[0];
                        if (o.origin !== '*' && origin !== o.origin) {
                            console.warn("postmessage message origin mismatch", origin, o.origin);
                            if (msg.errback) {
                                // notify post message errback
                                var error = {
                                    message: "postmessage origin mismatch",
                                    origin: [origin, o.origin]
                                };
                                pm.send({
                                    target: source_window,
                                    data: error,
                                    type: msg.errback,
                                    hash: true,
                                    url: hash.source.url
                                });
                            }
                            continue;
                        }
                    }

                    function sendReply ( data ) {
                        if (msg.callback) {
                            pm.send({
                                target: source_window,
                                data: data,
                                type: msg.callback,
                                hash: true,
                                url: hash.source.url
                            });
                        }
                    }

                    try {
                        if ( o.callback ) {
                            o.fn(msg.data, sendReply);
                        } else {
                            sendReply ( o.fn(msg.data) );
                        }
                    } catch (ex) {
                        if (msg.errback) {
                            // notify post message errback
                            pm.send({
                                target: source_window,
                                data: ex,
                                type: msg.errback,
                                hash: true,
                                url: hash.source.url
                            });
                        } else {
                            throw ex;
                        }
                    }
                };
            }
        },

        _url: function(url) {
            // url minus hash part
            return ("" + url).replace(/#.*$/, "");
        }

    };

    $.extend(pm, {
        defaults: {
            target: null,
            /* target window (required) */
            url: null,
            /* target window url (required if no window.postMessage or hash == true) */
            type: null,
            /* message type (required) */
            data: null,
            /* message data (required) */
            success: null,
            /* success callback (optional) */
            error: null,
            /* error callback (optional) */
            origin: "*",
            /* postmessage origin (optional) */
            hash: false /* use location hash for message passing (optional) */
        }
    });

})(this, typeof jQuery === "undefined" ? NO_JQUERY : jQuery);

/**
 * http://www.JSON.org/json2.js
 **/
if (! ("JSON" in window && window.JSON)) {
    JSON = {}
}(function() {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case"string":
            return quote(value);
        case"number":
            return isFinite(value) ? String(value) : "null";
        case"boolean":
        case"null":
            return String(value);
        case"object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === "string") {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());;
var wpcom_mobile_user_agent_info = {

    PLATFORM_WINDOWS : 'windows',
    PLATFORM_IPHONE : 'iphone',
    PLATFORM_IPOD : 'ipod',
    PLATFORM_IPAD : 'ipad',
    PLATFORM_BLACKBERRY : 'blackberry',
    PLATFORM_BLACKBERRY_10 : 'blackberry_10',
    PLATFORM_SYMBIAN : 'symbian_series60',
    PLATFORM_SYMBIAN_S40 : 'symbian_series40',
    PLATFORM_J2ME_MIDP : 'j2me_midp',
    PLATFORM_ANDROID : 'android',
    PLATFORM_ANDROID_TABLET : 'android_tablet',
    PLATFORM_FIREFOX_OS : 'firefoxOS',
    PLATFORM_MOBILE_GENERIC : 'mobile_generic',

    userAgent : false,
    //Shortcut to the browser User Agent String
    matchedPlatformName : false,
    //Matched platform name. False otherwise.
    matchedUserAgentName : false,
    //Matched UA String. False otherwise.

    init: function() {
        var t = this;
        try {
            t.userAgent = navigator.userAgent.toLowerCase();
            t.getPlatformName();
            t.getMobileUserAgentName();
        } catch (e) {
            console.error(e);
        }
    },

    initForTest: function(userAgent) {
        var t = this;
        t.matchedPlatformName = false;
        t.matchedUserAgentName = false;
        try {
            t.userAgent = userAgent.toLowerCase();
            t.getPlatformName();
            t.getMobileUserAgentName();
        } catch (e) {
            console.error(e);
        }
    },


    /**
    		 * This method detects the mobile User Agent name.
    		 *
    		 * @return string The matched User Agent name, false otherwise.
    		 */
    getMobileUserAgentName : function() {
        var t = this;
        if ( false !== t.matchedUserAgentName )
            return t.matchedUserAgentName;

        if ( false === t.userAgent )
            return false;

        if ( t.isChromeForIOS() )
            t.matchedUserAgentName = 'chrome-for-ios';
        else if ( t.isTwitterForIpad() )
            t.matchedUserAgentName = 'twitter-for-ipad';
        else if ( t.isTwitterForIphone() )
            t.matchedUserAgentName = 'twitter-for-iphone';
        else if ( t.isIPhoneOrIPod() ) 
            t.matchedUserAgentName = 'iphone';
        else if ( t.isIPad() )
            t.matchedUserAgentName = 'ipad';
        else if ( t.isAndroidTablet() )
            t.matchedUserAgentName = 'android_tablet';
        else if ( t.isAndroid() )
            t.matchedUserAgentName = 'android';
        else if ( t.isBlackberry10() )
            t.matchedUserAgentName = 'blackberry_10';
        else if ( t.userAgent.indexOf('blackberry') != - 1 )
            t.matchedUserAgentName = 'blackberry';
        else if ( t.isBlackberryTablet() )
            t.matchedUserAgentName = 'blackberry_tablet';
        else if ( t.isWindowsPhone7() )
            t.matchedUserAgentName = 'win7';
        else if ( t.isWindowsPhone8() )
            t.matchedUserAgentName = 'winphone8';
        else if ( t.isOperaMini() )
            t.matchedUserAgentName = 'opera-mini';
        else if ( t.isOperaMobile() )
            t.matchedUserAgentName = 'opera-mobi';
        else if ( t.isKindleFire() )
            t.matchedUserAgentName = 'kindle-fire';
        else if ( t.isSymbianPlatform() )
            t.matchedUserAgentName = 'series60';
        else if ( t.isFirefoxMobile() )
            t.matchedUserAgentName = 'firefox_mobile';
        else if ( t.isFirefoxOS() )
            t.matchedUserAgentName = 'firefoxOS';
        else if ( t.isFacebookForIphone() )
            t.matchedUserAgentName = 'facebook-for-iphone';
        else if ( t.isFacebookForIpad() )
            t.matchedUserAgentName = 'facebook-for-ipad';
        else if ( t.isWordPressForIos())
            t.matchedUserAgentName = 'ios-app';
        else if ( t.userAgent.indexOf('iphone') != - 1 )
            t.matchedUserAgentName = 'iphone-unknown';
        else if ( t.userAgent.indexOf('ipad') != - 1 )
            t.matchedUserAgentName = 'ipad-unknown';

        return t.matchedUserAgentName ;
    },

    getPlatformName : function() {
        var t = this;
        if ( false !== t.matchedPlatformName )
            return t.matchedPlatformName;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('windows ce') != - 1 || t.userAgent.indexOf('windows phone') != - 1) {
            t.matchedPlatformName = t.PLATFORM_WINDOWS;
        } else if ( t.userAgent.indexOf('ipad') != - 1 ) {
            t.matchedPlatformName = t.PLATFORM_IPAD;
        } else if ( t.userAgent.indexOf('ipod') != - 1 ) {
            t.matchedPlatformName = t.PLATFORM_IPOD;
        } else if ( t.userAgent.indexOf('iphone') != - 1 ) {
            t.matchedPlatformName = t.PLATFORM_IPHONE;
        } else if ( t.userAgent.indexOf('android') != - 1 ) {
            if ( t.isAndroidTablet() )
                t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
            else
                t.matchedPlatformName = t.PLATFORM_ANDROID;
        } else if ( t.isKindleFire() ) {
            t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
        } else if ( t.isBlackberry10() ) {
            t.matchedPlatformName = t.PLATFORM_BLACKBERRY_10;
        } else if ( t.userAgent.indexOf('blackberry') != - 1 ) {
            t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
        } else if ( t.isBlackberryTablet() ) {
            t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
        } else if ( t.isSymbianPlatform() ) {
            t.matchedPlatformName = t.PLATFORM_SYMBIAN;
        } else if ( t.isSymbianS40Platform() ) {
            t.matchedPlatformName = t.PLATFORM_SYMBIAN_S40;
        } else if ( t.isJ2MEPlatform() ) {
            t.matchedPlatformName = t.PLATFORM_J2ME_MIDP;
        } else if (t.isFirefoxOS()) {
            t.matchedPlatformName = t.PLATFORM_FIREFOX_OS;
        } else if (t.isFirefoxMobile()) {
            t.matchedPlatformName = t.PLATFORM_MOBILE_GENERIC;
        }

        return t.matchedPlatformName;
    },


    /**
    		 * Detect the blackBerry OS version.
    		 * 
    		 * Note: This is for smartphones only. Do not work on BB tablets.
    		 *
    		 */
    getBlackBerryOSVersion : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.isBlackberry10() )
            return '10';

        if ( t.userAgent.indexOf('blackberry') == - 1)
            return false;

        var rv = - 1; // Return value assumes failure.
        if ( t.userAgent.indexOf('webkit') != - 1 ) {
            //detecting the BB OS version for devices running OS 6.0 or higher
            var re = new RegExp(/Version\/([\d\.]+)/i);
        } else {
            //blackberry devices <= 5.XX
            //BlackBerry9000/5.0.0.93 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179
            var re = new RegExp(/BlackBerry\w+\/([\d\.]+)/i);
        }
        if (re.exec(t.userAgent) != null)
            rv = RegExp.$1.toString();

        if ( - 1 == rv )
            return false;

        return rv;
    },

    /**
    		 * Detects if the current UA is iPhone Mobile Safari or another iPhone or iPod Touch Browser.
    		 */
    isIPhoneOrIPod : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        var isIphone = ( t.userAgent.indexOf('iphone') != - 1 || t.userAgent.indexOf('ipod') != - 1 );
        var isSafari = ( t.userAgent.indexOf('safari') != - 1 );

        return ( isIphone && isSafari );
    },

    /**
    		 * Detects if the current device is an iPad.
    		 */
    isIPad : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('ipad') != - 1 && t.userAgent.indexOf('safari') != - 1);
    },


    /**
    		*  Detects if the current UA is Chrome for iOS
    		*
    		*/
    isChromeForIOS : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.isIPhoneOrIPod() && t.userAgent.indexOf('crios/') != - 1);
    },

    /**
    	     * Detects if the current browser is the Native Android browser.
    	     * @return boolean true if the browser is Android otherwise false
    	     */
    isAndroid : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('android') != - 1 ) {
            if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
                return false;
            else
                return true;
        }
        return false;
    },

    /**
    		 * Detects if the current browser is the Native Android Tablet browser.
    		 * 	Assumes 'Android' should be in the user agent, but not 'mobile'
    		 *
    		 * @return boolean true if the browser is Android and not 'mobile' otherwise false
    		 */
    isAndroidTablet : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('android') != - 1 && t.userAgent.indexOf('mobile') == - 1) {
            if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
                return false;
            else
                return true;
        }
        return false;
    },


    /**
    		 * Detects if the current browser is Opera Mobile
    		 *
    		 * What is the difference between Opera Mobile and Opera Mini?
    		 * - Opera Mobile is a full Internet browser for mobile devices.
    		 * - Opera Mini always uses a transcoder to convert the page for a small display.
    		 * (it uses Opera advanced server compression technology to compress web content before it gets to a device.
    		 *  The rendering engine is on Opera's server.)
    		 *
    		 * Opera/9.80 (Windows NT 6.1; Opera Mobi/14316; U; en) Presto/2.7.81 Version/11.00"
    		 */
    isOperaMobile : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('opera') != - 1 && t.userAgent.indexOf('mobi') != - 1);
    },

    /**
    		 * Detects if the current browser is Opera Mini
    		 *
    		 * Opera/8.01 (J2ME/MIDP; Opera Mini/3.0.6306/1528; en; U; ssr)
    		 * Opera/9.80 (Android;Opera Mini/6.0.24212/24.746 U;en) Presto/2.5.25 Version/10.5454
    		 * Opera/9.80 (iPhone; Opera Mini/5.0.019802/18.738; U; en) Presto/2.4.15
    		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
    		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
    		 * Opera/9.80 (Series 60; Opera Mini/5.1.22783/23.334; U; en) Presto/2.5.25 Version/10.54
    		 * Opera/9.80 (BlackBerry; Opera Mini/5.1.22303/22.387; U; en) Presto/2.5.25 Version/10.54
    		 *
    		 */
    isOperaMini : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('opera') != - 1 && t.userAgent.indexOf('mini') != - 1);
    },


    /**
    		 * isBlackberry10() can be used to check the User Agent for a BlackBerry 10 device.
    		 */
    isBlackberry10 : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('bb10') != - 1 && t.userAgent.indexOf('mobile') != - 1);
    },

    /**
    		 * isBlackberryTablet() can be used to check the User Agent for a RIM blackberry tablet
    		 * The user agent of the BlackBerry® Tablet OS follows a format similar to the following:
    		 * Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+
    		 *
    		 */
    isBlackberryTablet : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('playbook') != - 1 && t.userAgent.indexOf('rim tablet') != - 1);
    },

    /**
    		 * Detects if the current browser is a Windows Phone 7 device.
    		 * ex: Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)
    		 */
    isWindowsPhone7 : function () {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('windows phone os 7') != - 1 );
    },

    /**
    		 * Detects if the current browser is a Windows Phone 8 device.
    		 * ex: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; ARM; Touch; IEMobile/10.0; <Manufacturer>; <Device> [;<Operator>])
    		 */
    isWindowsPhone8 : function () {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('windows phone 8') != - 1 );
    },

    /**
    		 *
    		 * Detects if the device platform is J2ME.
    		 *
    		 */
    isJ2MEPlatform : function () {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('j2me/midp') != - 1 ) 
            return true;

        if ( t.userAgent.indexOf('midp') != - 1 && t.userAgent.indexOf('cldc') != - 1 ) 
            return true;

        return false;
    },


    /**
    		 *
    		 * Detects if the device platform is the Symbian Series 40.
    		 * Nokia Browser for Series 40 is a proxy based browser, previously known as Ovi Browser.
    		 * This browser will report 'NokiaBrowser' in the header, however some older version will also report 'OviBrowser'.
    		 *
    		 */
    isSymbianS40Platform : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('series40') != - 1 ) {
            if ( t.userAgent.indexOf('nokia') != - 1 || t.userAgent.indexOf('ovibrowser') != - 1 || t.userAgent.indexOf('nokiabrowser') != - 1)
                return true;
        }

        return false;
    },


    /**
    		 *
    		 * Detects if the device platform is the Symbian Series 60.
    		 *
    		 */
    isSymbianPlatform : function() {

        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('webkit') != - 1 ) {
            //First, test for WebKit, then make sure it's either Symbian or S60.
            if ( t.userAgent.indexOf('symbian') != - 1 || t.userAgent.indexOf('series60') != - 1 )
                return true;
            else
                return false;
        } else if ( t.userAgent.indexOf('symbianos') != - 1 && t.userAgent.indexOf('series60') != - 1 ) {
            return true;
        } else if ( t.userAgent.indexOf('nokia') != - 1 && t.userAgent.indexOf('series60') != - 1 ) {
            return true;
        } else if ( t.userAgent.indexOf('opera mini') != - 1) {
            if ( t.userAgent.indexOf('symbianos') != - 1 || t.userAgent.indexOf('symbos') != - 1 || t.userAgent.indexOf('series 60') != - 1 )
                return true;
        }

        return false;
    },


    /**
    		 * Detects if the current browser is the Kindle Fire Native browser.
    		 *
    		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true
    		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=false
    		 *
    		 * @return boolean true if the browser is Kindle Fire Native browser otherwise false
    		 */
    isKindleFire : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        return ( t.userAgent.indexOf('silk/') != - 1 && t.userAgent.indexOf('silk-accelerated=') != - 1);
    },

    /**
    		 * Detects if the current browser is Firefox Mobile (Fennec)
    		 *
    		 * http://www.userAgentstring.com/pages/Fennec/
    		 * Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.1.1) Gecko/20110415 Firefox/4.0.2pre Fennec/4.0.1
    		 * Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1
    		 */
    isFirefoxMobile : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('fennec') != - 1 )
            return true;

        return false;
    },


    /**
    		 * Detects if the current browser is the native FirefoxOS browser
    		 * 
    		 * Mozilla/5.0 (Mobile; rv:14.0) Gecko/14.0 Firefox/14.0
    		 * 
    		 */
    isFirefoxOS : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('mozilla') != - 1 && t.userAgent.indexOf('mobile') != - 1 && t.userAgent.indexOf('gecko') != - 1 && t.userAgent.indexOf('firefox') != - 1 )
            return true;

        return false;
    },


    /**
    		 * Detects if the current UA is Facebook for iPad
    		 * - Facebook 4020.0 (iPad; iPhone OS 5.0.1; en_US)
    		 * - Mozilla/5.0 (iPad; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/5.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US;FBSF/1.0]
    		 * - Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A403 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/6.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US]
    		 */
    isFacebookForIpad : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('ipad') == - 1 )
            return false;

        if ( t.userAgent.indexOf('facebook') != - 1 || t.userAgent.indexOf('fbforiphone') != - 1 || t.userAgent.indexOf('fban/fbios;') != - 1 )
            return true;

        return false;
    },

    /**
    		 * Detects if the current UA is Facebook for iPhone
    		 * - Facebook 4020.0 (iPhone; iPhone OS 5.0.1; fr_FR)
    		 * - Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.0;FBSS/2; FBCR/O2;FBID/phone;FBLC/en_US;FBSF/2.0]
    		 * - Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; FBCR/3ITA;FBID/phone;FBLC/en_US]
    		 */
    isFacebookForIphone : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('iphone') == - 1 )
            return false;

        if ( t.userAgent.indexOf('facebook') != - 1 && t.userAgent.indexOf('ipad') == - 1 )
            return true;
        else if ( t.userAgent.indexOf('fbforiphone') != - 1 && t.userAgent.indexOf('tablet') == - 1 )
            return true;
        else if ( t.userAgent.indexOf('fban/fbios;') != - 1 && t.userAgent.indexOf('tablet') == - 1 ) //FB app v5.0 or higher
        return true;

        return false;
    },

    /**
    		 *  Detects if the current UA is Twitter for iPhone
    		 *  
    		 * Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; nb-no) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPhone
    		 * Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone
    		 */
    isTwitterForIphone : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('ipad') != - 1 )
            return false;

        if ( t.userAgent.indexOf('twitter for iphone') != - 1 )
            return true;

        return false;
    },

    /**
    		 * Detects if the current UA is Twitter for iPad
    		 * 
    		 * Old version 4.X - Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPad
    		 * Ver 5.0 or Higher - Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone 
    		 */
    isTwitterForIpad : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('twitter for ipad') != - 1 )
            return true;

        if ( t.userAgent.indexOf('ipad') != - 1 && t.userAgent.indexOf('twitter for iphone') != - 1 )
            return true;

        return false;
    },


    /**
    		 *  Detects if the current UA is WordPress for iOS
    		 */
    isWordPressForIos : function() {
        var t = this;

        if ( false === t.userAgent )
            return false;

        if ( t.userAgent.indexOf('wp-iphone') != - 1 )
            return true;

        return false;
    }

};;
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function ($) {
    var inviewObjects = {}, viewportSize, viewportOffset,
    d = document, w = window, documentElement = d.documentElement, expando = $.expando;

    $.event.special.inview = {
        add: function(data) {
            inviewObjects[data.guid + "-" + this[expando]] = {
                data: data,
                $element: $(this) 
            };
        },

        remove: function(data) {
            try {
                delete inviewObjects[data.guid + "-" + this[expando]];
            } catch (e) {}
        }
    };

    function getViewportSize() {
        var mode, domObject, size = {
            height: w.innerHeight,
            width: w.innerWidth 
        };

        // if this is correct then return it. iPad has compat Mode, so will
        // go into check clientHeight/clientWidth (which has the wrong value).
        if (!size.height) {
            mode = d.compatMode;
            if (mode || !$.support.boxModel) {
                // IE, Gecko
                domObject = mode === 'CSS1Compat' ?
                documentElement : // Standards
                d.body; // Quirks
                size = {
                    height: domObject.clientHeight,
                    width: domObject.clientWidth
                };
            }
        }

        return size;
    }

    function getViewportOffset() {
        return {
            top: w.pageYOffset || documentElement.scrollTop || d.body.scrollTop,
            left: w.pageXOffset || documentElement.scrollLeft || d.body.scrollLeft
        };
    }

    function checkInView() {
        var $elements = $(), elementsLength, i = 0;

        $.each(inviewObjects, function(i, inviewObject) {
            var selector = inviewObject.data.selector,
            $element = inviewObject.$element;
            $elements = $elements.add(selector ? $element.find(selector) : $element);
        });

        elementsLength = $elements.length;
        if (elementsLength) {
            viewportSize = viewportSize || getViewportSize();
            viewportOffset = viewportOffset || getViewportOffset();

            for (; i < elementsLength; i++) {
                // Ignore elements that are not in the DOM tree
                if (!$.contains(documentElement, $elements[i])) {
                    continue;
                }

                var element = $elements[i],
                $element = $(element),
                elementSize = {},
                elementOffset = {},
                inView = $element.data('inview'),
                visiblePartX,
                visiblePartY,
                visiblePartsMerged;

                // for the case where 'display:none' is used in place of 'visibility:hidden'
                // count and sum the above items to get and move closer to the correct values
                // IMPORTANT :: insert element into container empty
                if ($element.css('display') == 'none')
                {
                    var parentElement = $element.parent();

                    elementOffset.top = parentElement.offset().top;
                    elementOffset.left = parentElement.offset().left;
                    elementSize.height = parentElement.height();
                    elementSize.width = parentElement.width();
                } else {
                    elementSize = {
                        height: $element.height(),
                        width: $element.width() 
                    }
                    elementOffset = $element.offset();
                }

                // Don't ask me why because I haven't figured out yet:
                // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
                // Even though it sounds weird:
                // It seems that the execution of this function is interferred by the onresize/onscroll event
                // where viewportOffset and viewportSize are unset
                if (!viewportOffset || !viewportSize) {
                    return;
                }

                if (element.offsetWidth >= 0 && element.offsetHeight >= 0 && element.style.display != "none" &&
                elementOffset.top + elementSize.height > viewportOffset.top &&
                elementOffset.top < viewportOffset.top + viewportSize.height &&
                elementOffset.left + elementSize.width > viewportOffset.left &&
                elementOffset.left < viewportOffset.left + viewportSize.width) {
                    visiblePartX = (viewportOffset.left > elementOffset.left ?
                    'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
                    'left' : 'both');
                    visiblePartY = (viewportOffset.top > elementOffset.top ?
                    'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
                    'top' : 'both');
                    visiblePartsMerged = visiblePartX + "-" + visiblePartY;
                    if (!inView || inView !== visiblePartsMerged) {
                        $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
                    }
                } else if (inView) {
                    $element.data('inview', false).trigger('inview', [false]);
                }
            }
        }
    }

    $(w).bind("scroll resize", function() {
        viewportSize = viewportOffset = null;
    });

    // IE < 9 scrolls to focused elements without firing the "scroll" event
    if (!documentElement.addEventListener && documentElement.attachEvent) {
        documentElement.attachEvent("onfocusin", function() {
            viewportOffset = null;
        });
    }

    // Use setInterval in order to also make sure this captures elements within
    // "overflow:scroll" elements or elements that appeared in the dom tree due to
    // dom manipulation and reflow
    // old: $(window).scroll(checkInView);
    //
    // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
    // intervals while the user scrolls. Therefore the inview event might fire a bit late there
    setInterval(checkInView, 250);
})(jQuery);;
/* global Jetpack */
/**
 * Resizeable Iframes.
 *
 * Start listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable' );
 * - OR -
 * Jetpack.resizeable( 'on', context );
 *
 * Resize selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'resize', { width: 100, height: 200 } );
 * - OR -
 * Jetpack.resizeable( 'resize', { width: 100, height: 200 }, context );
 *
 * Stop listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'off' );
 * - OR -
 * Jetpack.resizeable( 'off', context );
 *
 * Stop listening to all resize postMessage events:
 * Jetpack.resizeable( 'off' );
 */
(function($) {
    var listening = false, // Are we listening for resize postMessage events
    sourceOrigins = [], // What origins are allowed to send resize postMessage events
    $sources = false, // What iframe elements are we tracking resize postMessage events from

    URLtoOrigin, // Utility to convert URLs into origins
    setupListener, // Binds global resize postMessage event handler
    destroyListener, // Unbinds global resize postMessage event handler

    methods; // Jetpack.resizeable methods

    // Setup the Jetpack global
    if ( 'undefined' === typeof window.Jetpack ) {
        window.Jetpack = {
            /**
            			 * Handles the two different calling methods:
            			 * $( selector ).Jetpack( 'namespace', 'method', context ) // here, context is optional and is used to filter the collection
            			 * - vs. -
            			 * Jetpack.namespace( 'method', context ) // here context defines the collection
            			 *
            			 * @internal
            			 *
            			 * Call as: Jetpack.getTarget.call( this, context )
            			 *
            			 * @param string context: jQuery selector
            			 * @return jQuery|undefined object on which to perform operations or undefined when context cannot be determined
            			 */
            getTarget: function( context ) {
                if ( this instanceof jQuery ) {
                    return context ? this.filter( context ) : this;
                }

                return context ? $( context ) : context;
            }
        };
    }

    // Setup the Jetpack jQuery method
    if ( 'undefined' === typeof $.fn.Jetpack ) {
        /**
        		 * Dispatches calls to the correct namespace
        		 *
        		 * @param string namespace
        		 * @param ...
        		 * @return mixed|jQuery (chainable)
        		 */
        $.fn.Jetpack = function( namespace ) {
            if ( 'function' === typeof Jetpack[namespace] ) {
                // Send the call to the correct Jetpack.namespace
                return Jetpack[namespace].apply( this, Array.prototype.slice.call( arguments, 1 ) );
            } else {
                $.error( 'Namespace "' + namespace + '" does not exist on jQuery.Jetpack' );
            }
        };
    }

    // Define Jetpack.resizeable() namespace to just always bail if no postMessage
    if ( 'function' !== typeof window.postMessage ) {
        $.extend( window.Jetpack, {
            /**
            			 * Defines the Jetpack.resizeable() namespace.
            			 * See below for non-trivial definition for browsers with postMessage.
            			 */
            resizeable: function() {
                $.error( 'Browser does not support window.postMessage' );
            }
        });

        return;
    }

    /**
    	 * Utility to convert URLs into origins
    	 *
    	 * http://example.com:port/path?query#fragment -> http://example.com:port
    	 *
    	 * @param string URL
    	 * @return string origin
    	 */
    URLtoOrigin = function( URL ) {
        if ( ! URL.match( /^https?:\/\// ) ) {
            URL = document.location.href;
        }
        return URL.split( '/' ).slice( 0, 3 ).join( '/' );
    };

    /**
    	 * Binds global resize postMessage event handler
    	 */
    setupListener = function() {
        listening = true;

        $( window ).on( 'message.JetpackResizeableIframe', function( e ) {
            var event = e.originalEvent,
            data;

            // Ensure origin is allowed
            if ( - 1 === $.inArray( event.origin, sourceOrigins ) ) {
                return;
            }

            // Some browsers send structured data, some send JSON strings
            if ( 'object' === typeof event.data ) {
                data = event.data.data;
            } else {
                try {
                    data = JSON.parse( event.data );
                } catch ( err ) {
                    data = false;
                }
            }

            if ( !data.data ) {
                return;
            }

            // Un-nest
            data = data.data;

            // Is it a resize event?
            if ( 'undefined' === typeof data.action || 'resize' !== data.action ) {
                return;
            }

            // Find the correct iframe and resize it
            $sources.filter( function() {
                if ( 'undefined' !== typeof data.name ) {
                    return this.name === data.name;
                } else {
                    return event.source === this.contentWindow;
                }
            }).first().Jetpack( 'resizeable', 'resize', data );
        });
    };

    /**
    	 * Unbinds global resize postMessage event handler
    	 */
    destroyListener = function() {
        listening = false;
        $( window ).off( 'message.JetpackResizeableIframe' );

        sourceOrigins = [];
        $( '.jetpack-resizeable' ).removeClass( 'jetpack-resizeable' );
        $sources = false;
    };

    // Methods for Jetpack.resizeable() namespace
    methods = {
        /**
        		 * Start listening for resize postMessage events on the given iframes
        		 *
        		 * Call statically as: Jetpack.resizeable( 'on', context )
        		 * Call as: $( selector ).Jetpack( 'resizeable', 'on', context ) // context optional: used to filter the collectino
        		 *
        		 * @param string context jQuery selector.
        		 * @return jQuery (chainable)
        		 */
        on: function( context ) {
            var target = Jetpack.getTarget.call( this, context );

            if ( ! listening ) {
                setupListener();
            }

            target.each( function() {
                sourceOrigins.push( URLtoOrigin( $( this ).attr( 'src' ) ) );
            }).addClass( 'jetpack-resizeable' );

            $sources = $( '.jetpack-resizeable' );

            return target;
        },

        /**
        		 * Stop listening for resize postMessage events on the given iframes
        		 *
        		 * Call statically as: Jetpack.resizeable( 'off', context )
        		 * Call as: $( selector ).Jetpack( 'resizeable', 'off', context ) // context optional: used to filter the collectino
        		 *
        		 * @param string context jQuery selector
        		 * @return jQuery (chainable)
        		 */
        off: function( context ) {
            var target = Jetpack.getTarget.call( this, context );

            if ( 'undefined' === typeof target ) {
                destroyListener();

                return target;
            }

            target.each( function() {
                var origin = URLtoOrigin( $( this ).attr( 'src' ) ),
                pos = $.inArray( origin, sourceOrigins );

                if ( - 1 !== pos ) {
                    sourceOrigins.splice( pos, 1 );
                }
            }).removeClass( 'jetpack-resizeable' );

            $sources = $( '.jetpack-resizeable' );

            return target;
        },

        /**
        		 * Resize the given iframes
        		 *
        		 * Call statically as: Jetpack.resizeable( 'resize', dimensions, context )
        		 * Call as: $( selector ).Jetpack( 'resizeable', 'resize', dimensions, context ) // context optional: used to filter the collectino
        		 *
        		 * @param object dimensions in pixels: { width: (int), height: (int) }
        		 * @param string context jQuery selector
        		 * @return jQuery (chainable)
        		 */
        resize: function( dimensions, context ) {
            var target = Jetpack.getTarget.call( this, context );

            $.each( [ 'width', 'height' ], function( i, variable ) {
                var value = 0,
                container;
                if ( 'undefined' !== typeof dimensions[variable] ) {
                    value = parseInt( dimensions[variable], 10 );
                }

                if ( 0 !== value ) {
                    target[variable]( value );
                    container = target.parent();
                    if ( container.hasClass( 'slim-likes-widget' ) ) {
                        container[variable]( value );
                    }
                }
            });

            return target;
        }
    };

    // Define Jetpack.resizeable() namespace
    $.extend( window.Jetpack, {
        /**
        		 * Defines the Jetpack.resizeable() namespace.
        		 * See above for trivial definition for browsers with no postMessage.
        		 *
        		 * @param string method
        		 * @param ...
        		 * @return mixed|jQuery (chainable)
        		 */
        resizeable: function( method ) {
            if ( methods[method] ) {
                // Send the call to the correct Jetpack.resizeable() method
                return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
            } else if ( ! method ) {
                // By default, send to Jetpack.resizeable( 'on' ), which isn't useful in that form but is when called as
                // jQuery( selector ).Jetpack( 'resizeable' )
                return methods.on.apply( this );
            } else {
                $.error( 'Method ' + method + ' does not exist on Jetpack.resizeable' );
            }
        }
    });
})(jQuery);;
/**
* @preserve HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;
(function(window, document) {
    /*jshint evil:true */
    /** version */
    var version = '3.6.2pre';

    /** Preset options */
    var options = window.html5 || {};

    /** Used to skip problem elements */
    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

    /** Not all elements can be cloned in IE **/
    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

    /** Detect whether the browser supports default html5 styles */
    var supportsHtml5Styles;

    /** Name of the expando, to work with multiple documents or to re-shiv one document */
    var expando = '_html5shiv';

    /** The id for the the documents expando */
    var expanID = 0;

    /** Cached data for each document */
    var expandoData = {};

    /** Detect whether the browser supports unknown elements */
    var supportsUnknownElements;

    (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                // assign a false positive if unable to shiv
                (document.createElement)('a');
                var frag = document.createDocumentFragment();
                return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
                );
            }());
        } catch (e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
        }

    }());

    /*--------------------------------------------------------------------------*/

    /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
    function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
    }

    /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
    function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
    }

    /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
    function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
    }

    /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
    function createElement(nodeName, ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
    }

    /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
    function createDocumentFragment(ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
        for (; i < l; i++) {
            clone.createElement(elems[i]);
        }
        return clone;
    }

    /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
    function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
                return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
        'var n=f.cloneNode(),c=n.createElement;' +
        'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/\w+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
        }) +
        ');return n}'
        )(html5, data.frag);
    }

    /*--------------------------------------------------------------------------*/

    /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
    function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
            // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}'
            );
        }
        if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
        }
        return ownerDocument;
    }

    /*--------------------------------------------------------------------------*/

    /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
    var html5 = {

        /**
             * An array or space separated string of node names of the elements to shiv.
             * @memberOf html5
             * @type Array|String
             */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video',

        /**
             * current version of html5shiv
             */
        'version': version,

        /**
             * A flag to indicate that the HTML5 style sheet should be inserted.
             * @memberOf html5
             * @type Boolean
             */
        'shivCSS': (options.shivCSS !== false),

        /**
             * Is equal to true if a browser supports creating unknown/HTML5 elements
             * @memberOf html5
             * @type boolean
             */
        'supportsUnknownElements': supportsUnknownElements,

        /**
             * A flag to indicate that the document's `createElement` and `createDocumentFragment`
             * methods should be overwritten.
             * @memberOf html5
             * @type Boolean
             */
        'shivMethods': (options.shivMethods !== false),

        /**
             * A string to describe the type of `html5` object ("default" or "default print").
             * @memberOf html5
             * @type String
             */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment
    };

    /*--------------------------------------------------------------------------*/

    // expose html5
    window.html5 = html5;

    // shiv the document
    shivDocument(document);

}(this, document));;
/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector 
            });
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut 
            });
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX - cX) + Math.abs(pY - cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent", track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                // set previous coordinates for next time
                pX = cX;
                pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function() {
                    compare(ev, ob);
                }, cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({}, e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX;
                pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent", track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout( function() {
                        compare(ev, ob);
                    }, cfg.interval );
                }

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent", track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout( function() {
                        delay(ev, ob);
                    }, cfg.timeout );
                }
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({
            'mouseenter.hoverIntent': handleHover,
            'mouseleave.hoverIntent': handleHover
        }, cfg.selector);
    };
})(jQuery);;
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;
(function ($) {
    "use strict";

    var methods = (function () {
        // private properties and methods go here
        var c = {
            bcClass: 'sf-breadcrumb',
            menuClass: 'sf-js-enabled',
            anchorClass: 'sf-with-ul',
            menuArrowClass: 'sf-arrows'
        },
        ios = (function () {
            var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (ios) {
                // iOS clicks only bubble as far as body children
                $(window).load(function () {
                    $('body').children().on('click', $.noop);
                });
            }
            return ios;
        })(),
        wp7 = (function () {
            var style = document.documentElement.style;
            return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
        })(),
        toggleMenuClasses = function ($menu, o) {
            var classes = c.menuClass;
            if (o.cssArrows) {
                classes += ' ' + c.menuArrowClass;
            }
            $menu.toggleClass(classes);
        },
        setPathToCurrent = function ($menu, o) {
            return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
            .addClass(o.hoverClass + ' ' + c.bcClass)
            .filter(function () {
                return ($(this).children(o.popUpSelector).hide().show().length);
            }).removeClass(o.pathClass);
        },
        toggleAnchorClass = function ($li) {
            $li.children('a').toggleClass(c.anchorClass);
        },
        toggleTouchAction = function ($menu) {
            var touchAction = $menu.css('ms-touch-action');
            touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
            $menu.css('ms-touch-action', touchAction);
        },
        applyHandlers = function ($menu, o) {
            var targets = 'li:has(' + o.popUpSelector + ')';
            if ($.fn.hoverIntent && !o.disableHI) {
                $menu.hoverIntent(over, out, targets);
            } else {
                $menu
                .on('mouseenter.superfish', targets, over)
                .on('mouseleave.superfish', targets, out);
            }
            var touchevent = 'MSPointerDown.superfish';
            if (!ios) {
                touchevent += ' touchend.superfish';
            }
            if (wp7) {
                touchevent += ' mousedown.superfish';
            }
            $menu
            .on('focusin.superfish', 'li', over)
            .on('focusout.superfish', 'li', out)
            .on(touchevent, 'a', o, touchHandler);
        },
        touchHandler = function (e) {
            var $this = $(this),
            $ul = $this.siblings(e.data.popUpSelector);

            if ($ul.length > 0 && $ul.is(':hidden')) {
                $this.one('click.superfish', false);
                if (e.type === 'MSPointerDown') {
                    $this.trigger('focus');
                } else {
                    $.proxy(over, $this.parent('li'))();
                }
            }
        },
        over = function () {
            var $this = $(this),
            o = getOptions($this);
            clearTimeout(o.sfTimer);
            $this.siblings().superfish('hide').end().superfish('show');
        },
        out = function () {
            var $this = $(this),
            o = getOptions($this);
            if (ios) {
                $.proxy(close, $this, o)();
            } else {
                clearTimeout(o.sfTimer);
                o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
            }
        },
        close = function (o) {
            o.retainPath = ($.inArray(this[0], o.$path) > - 1);
            this.superfish('hide');

            if (!this.parents('.' + o.hoverClass).length) {
                o.onIdle.call(getMenu(this));
                if (o.$path.length) {
                    $.proxy(over, o.$path)();
                }
            }
        },
        getMenu = function ($el) {
            return $el.closest('.' + c.menuClass);
        },
        getOptions = function ($el) {
            return getMenu($el).data('sf-options');
        };

        return {
            // public methods
            hide: function (instant) {
                if (this.length) {
                    var $this = this,
                    o = getOptions($this);
                    if (!o) {
                        return this;
                    }
                    var not = (o.retainPath === true) ? o.$path : '',
                    $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                    speed = o.speedOut;

                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;
                    o.onBeforeHide.call($ul);
                    $ul.stop(true, true).animate(o.animationOut, speed, function () {
                        var $this = $(this);
                        o.onHide.call($this);
                    });
                }
                return this;
            },
            show: function () {
                var o = getOptions(this);
                if (!o) {
                    return this;
                }
                var $this = this.addClass(o.hoverClass),
                $ul = $this.children(o.popUpSelector);

                o.onBeforeShow.call($ul);
                $ul.stop(true, true).animate(o.animation, o.speed, function () {
                    o.onShow.call($ul);
                });
                return this;
            },
            destroy: function () {
                return this.each(function () {
                    var $this = $(this),
                    o = $this.data('sf-options'),
                    $hasPopUp;
                    if (!o) {
                        return false;
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    // remove event handlers
                    $this.off('.superfish').off('.hoverIntent');
                    // clear animation's inline display style
                    $hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
                        return style.replace(/display[^;]+;?/g, '');
                    });
                    // reset 'current' path classes
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sf-options');
                });
            },
            init: function (op) {
                return this.each(function () {
                    var $this = $(this);
                    if ($this.data('sf-options')) {
                        return false;
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);

                    $this.data('sf-options', o);

                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    applyHandlers($this, o);

                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);

                    o.onInit.call(this);
                });
            }
        };
    })();

    $.fn.superfish = function (method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
        }
    };

    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega',
        // within menu context
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        animationOut: {
            opacity: 'hide'
        },
        speed: 'normal',
        speedOut: 'fast',
        cssArrows: true,
        disableHI: false,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop
    };

    // soon to be deprecated
    $.fn.extend({
        hideSuperfishUl: methods.hide,
        showSuperfishUl: methods.show
    });

})(jQuery);;
/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ) {

    $.fn.fitVids = function( options ) {
        var settings = {
            customSelector: null
        }

        var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

        div.className = 'fit-vids-style';
        div.innerHTML = '&shy;<style>         \
        .fluid-width-video-wrapper {        \
        width: 100%;                     \
        position: relative;              \
        padding: 0;                      \
        }                                   \
        \
        .fluid-width-video-wrapper iframe,  \
        .fluid-width-video-wrapper object,  \
        .fluid-width-video-wrapper embed {  \
        position: absolute;              \
        top: 0;                          \
        left: 0;                         \
        width: 100%;                     \
        height: 100%;                    \
        }                                   \
        </style>';

        ref.parentNode.insertBefore(div, ref);

        if ( options ) {
            $.extend( settings, options );
        }

        return this.each(function() {
            var selectors = [
            "iframe[src*='player.vimeo.com']",
            "iframe[src*='www.youtube.com']",
            "iframe[src*='www.kickstarter.com']",
            "object",
            "embed"
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var $allVideos = $(this).find(selectors.join(','));

            $allVideos.each(function() {
                var $this = $(this);
                if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
                    return;
                }
                var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
                aspectRatio = height / $this.width();
                if (!$this.attr('id')) {
                    var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
                    $this.attr('id', videoID);
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
                $this.removeAttr('height').removeAttr('width');
            });
        });

    }
})( jQuery );;
//fgnass.github.com/spin.js#v1.3

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

    /* CommonJS */
    if (typeof exports == 'object') 
        module.exports = factory()
    /* AMD module */
    else if (typeof define == 'function' && define.amd) 
        define(factory)
        /* Browser global */
    else 
        root.Spinner = factory()
}(this, function() {
    "use strict";

    var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {}
    /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

    /**
       * Utility function to create elements. If no tag name is given,
       * a DIV is created. Optionally properties can be passed.
       */
    function createEl(tag, prop) {
        var el = document.createElement(tag || 'div')
        , n
        for (n in prop) 
            el[n] = prop[n]
        return el
    }

    /**
       * Appends children and returns the parent.
       */
    function ins(parent /* child1, child2, ...*/
    ) {
        for (var i = 1, n = arguments.length; i < n; i++)
            parent.appendChild(arguments[i])
        return parent
    }

    /**
       * Insert a new stylesheet to hold the @keyframe or VML rules.
       */
    var sheet = (function() {
        var el = createEl('style', {
            type : 'text/css'
        })
        ins(document.getElementsByTagName('head')[0], el)
        return el.sheet || el.styleSheet
    }())
    /**
       * Creates an opacity keyframe animation rule and returns its name.
       * Since most mobile Webkits have timing issues with animation-delay,
       * we create separate rules for each line/segment.
       */
    function addAnimation(alpha, trail, i, lines) {
        var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
        , start = 0.01 + i / lines * 100
        , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
        , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
        , pre = prefix && '-' + prefix + '-' || ''
        if (!animations[name]) {
            sheet.insertRule(
            '@' + pre + 'keyframes ' + name + '{' +
            '0%{opacity:' + z + '}' +
            start + '%{opacity:' + alpha + '}' +
            (start + 0.01) + '%{opacity:1}' +
            (start + trail) % 100 + '%{opacity:' + alpha + '}' +
            '100%{opacity:' + z + '}' +
            '}', sheet.cssRules.length)
            animations[name] = 1
        }

        return name
    }

    /**
       * Tries various vendor prefixes and returns the first supported property.
       */
    function vendor(el, prop) {
        var s = el.style
        , pp
        , i
        if (s[prop] !== undefined) 
            return prop
        prop = prop.charAt(0).toUpperCase() + prop.slice(1)
        for (i = 0; i < prefixes.length; i++) {
            pp = prefixes[i] + prop
            if (s[pp] !== undefined) 
                return pp
        }
    }

    /**
       * Sets multiple style properties at once.
       */
    function css(el, prop) {
        for (var n in prop)
            el.style[vendor(el, n) || n] = prop[n]
        return el
    }

    /**
       * Fills in default values.
       */
    function merge(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var def = arguments[i]
            for (var n in def)
                if (obj[n] === undefined) 
                    obj[n] = def[n]
        }
        return obj
    }

    /**
       * Returns the absolute page-offset of the given element.
       */
    function pos(el) {
        var o = {
            x: el.offsetLeft,
            y: el.offsetTop 
        }
        while ((el = el.offsetParent))
            o.x += el.offsetLeft, o.y += el.offsetTop
        return o
    }

    // Built-in defaults

    var defaults = {
        lines: 12,
        // The number of lines to draw
        length: 7,
        // The length of each line
        width: 5,
        // The line thickness
        radius: 10,
        // The radius of the inner circle
        rotate: 0,
        // Rotation offset
        corners: 1,
        // Roundness (0..1)
        color: '#000',
        // #rgb or #rrggbb
        direction: 1,
        // 1: clockwise, -1: counterclockwise
        speed: 1,
        // Rounds per second
        trail: 100,
        // Afterglow percentage
        opacity: 1 / 4,
        // Opacity of the lines
        fps: 20,
        // Frames per second when using setTimeout()
        zIndex: 2e9,
        // Use a high z-index by default
        className: 'spinner',
        // CSS class to assign to the element
        top: 'auto',
        // center vertically
        left: 'auto',
        // center horizontally
        position: 'relative' // element position
    }

    /** The constructor */
    function Spinner(o) {
        if (typeof this == 'undefined') 
            return new Spinner(o)
        this.opts = merge(o || {}, Spinner.defaults, defaults)
    }

    // Global defaults that override the built-ins:
    Spinner.defaults = {}

    merge(Spinner.prototype, {

        /**
             * Adds the spinner to the given target element. If this instance is already
             * spinning, it is automatically removed from its previous target b calling
             * stop() internally.
             */
        spin: function(target) {
            this.stop()
            var self = this
            , o = self.opts
            , el = self.el = css(createEl(0, {
                className: o.className
            }), {
                position: o.position,
                width: 0,
                zIndex: o.zIndex
            })
            , mid = o.radius + o.length + o.width
            , ep // element position
            , tp // target position

            if (target) {
                target.insertBefore(el, target.firstChild || null)
                tp = pos(target)
                ep = pos(el)
                css(el, {
                    left: (o.left == 'auto' ? tp.x - ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
                    top: (o.top == 'auto' ? tp.y - ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid) + 'px'
                })
            }

            el.setAttribute('role', 'progressbar')
            self.lines(el, self.opts)
            if (!useCssAnimations) {
                // No CSS animation support, use setTimeout() instead
                var i = 0
                , start = (o.lines - 1) * (1 - o.direction) / 2
                , alpha
                , fps = o.fps
                , f = fps / o.speed
                , ostep = (1 - o.opacity) / (f * o.trail / 100)
                , astep = f / o.lines
                ;
                (function anim() {
                    i++;
                    for (var j = 0; j < o.lines; j++) {
                        alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)
                        self.opacity(el, j * o.direction + start, alpha, o)
                    }
                    self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
                })()
            }
            return self
        },

        /**
             * Stops and removes the Spinner.
             */
        stop: function() {
            var el = this.el
            if (el) {
                clearTimeout(this.timeout)
                if (el.parentNode) 
                    el.parentNode.removeChild(el)
                this.el = undefined
            }
            return this
        },

        /**
             * Internal method that draws the individual lines. Will be overwritten
             * in VML fallback mode below.
             */
        lines: function(el, o) {
            var i = 0
            , start = (o.lines - 1) * (1 - o.direction) / 2
            , seg
            function fill(color, shadow) {
                return css(createEl(), {
                    position: 'absolute',
                    width: (o.length + o.width) + 'px',
                    height: o.width + 'px',
                    background: color,
                    boxShadow: shadow,
                    transformOrigin: 'left',
                    transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.radius + 'px' + ',0)',
                    borderRadius: (o.corners * o.width>>1) + 'px'
                })
            }

            for (; i < o.lines; i++) {
                seg = css(createEl(), {
                    position: 'absolute',
                    top: 1+~(o.width / 2) + 'px',
                    transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
                    opacity: o.opacity,
                    animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
                })
                if (o.shadow) 
                    ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {
                        top: 2 + 'px'
                    }))
                ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
            }
            return el
        },

        /**
             * Internal method that adjusts the opacity of a single line.
             * Will be overwritten in VML fallback mode below.
             */
        opacity: function(el, i, val) {
            if (i < el.childNodes.length) 
                el.childNodes[i].style.opacity = val
        }

    })

    function initVML() {

        /* Utility function to create a VML tag */
        function vml(tag, attr) {
            return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
        }

        // No CSS transforms but VML support, add a CSS rule for VML elements:
        sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')
        Spinner.prototype.lines = function(el, o) {
            var r = o.length + o.width
            , s = 2 * r
            function grp() {
                return css(
                vml('group', {
                    coordsize: s + ' ' + s,
                    coordorigin: - r + ' ' + - r
                }),
                {
                    width: s,
                    height: s 
                })
            }

            var margin = - (o.width + o.length) * 2 + 'px'
            , g = css(grp(), {
                position: 'absolute',
                top: margin,
                left: margin
            })
            , i
            function seg(i, dx, filter) {
                ins(g,
                ins(css(grp(), {
                    rotation: 360 / o.lines * i + 'deg',
                    left: ~~dx
                }),
                ins(css(vml('roundrect', {
                    arcsize: o.corners
                }), {
                    width: r,
                    height: o.width,
                    left: o.radius,
                    top: - o.width>>1,
                    filter: filter
                }),
                vml('fill', {
                    color: o.color,
                    opacity: o.opacity
                }),
                vml('stroke', {
                    opacity: 0
                }) // transparent stroke to fix color bleeding upon opacity change
                )
                )
                )
            }

            if (o.shadow)
                for (i = 1; i <= o.lines; i++)
                    seg(i, - 2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
            for (i = 1; i <= o.lines; i++) 
                seg(i)
            return ins(el, g)
        }

        Spinner.prototype.opacity = function(el, i, val, o) {
            var c = el.firstChild
            o = o.shadow && o.lines || 0
            if (c && i + o < c.childNodes.length) {
                c = c.childNodes[i + o];
                c = c && c.firstChild;
                c = c && c.firstChild
                if (c) 
                    c.opacity = val
            }
        }
    }

    var probe = css(createEl('group'), {
        behavior: 'url(#default#VML)'
    })
    if (!vendor(probe, 'transform') && probe.adj) 
        initVML()
    else 
        useCssAnimations = vendor(probe, 'animation')
    return Spinner
}));;
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

    if (typeof exports == 'object') {
        // CommonJS
        factory(require('jquery'), require('spin'))
    } else if (typeof define == 'function' && define.amd) {
        // AMD, register as anonymous module
        define(['jquery', 'spin'], factory)
    } else {
        // Browser globals
        if (!window.Spinner) 
            throw new Error('Spin.js not present')
        factory(window.jQuery, window.Spinner)
    }

}(function($, Spinner) {

    $.fn.spin = function(opts, color) {

        return this.each(function() {
            var $this = $(this),
            data = $this.data();

            if (data.spinner) {
                data.spinner.stop();
                delete data.spinner;
            }
            if (opts !== false) {
                opts = $.extend(
                {
                    color: color || $this.css('color') 
                },
                $.fn.spin.presets[opts] || opts
                )
                // Begin WordPress Additions
                // To use opts.right, you need to have specified a length, width, and radius.
                if ( typeof opts.right !== 'undefined' && typeof opts.length !== 'undefined'
                && typeof opts.width !== 'undefined' && typeof opts.radius !== 'undefined' ) {
                    var pad = $this.css( 'padding-left' );
                    pad = ( typeof pad === 'undefined' ) ? 0 : parseInt( pad, 10 );
                    opts.left = $this.outerWidth() - ( 2 * ( opts.length + opts.width + opts.radius ) ) - pad - opts.right;
                    delete opts.right;
                }
                // End WordPress Additions
                data.spinner = new Spinner(opts).spin(this)
            }
        })
    }

    $.fn.spin.presets = {
        tiny: {
            lines: 8,
            length: 2,
            width: 2,
            radius: 3 
        },
        small: {
            lines: 8,
            length: 4,
            width: 3,
            radius: 5 
        },
        large: {
            lines: 10,
            length: 8,
            width: 4,
            radius: 8 
        }
    }

}));

// Jetpack Presets Overrides:
(function($) {
    $.fn.spin.presets.wp = {
        trail: 60,
        speed: 1.3 
    };
    $.fn.spin.presets.small = $.extend( {
        lines: 8,
        length: 2,
        width: 2,
        radius: 3 
    }, $.fn.spin.presets.wp );
    $.fn.spin.presets.medium = $.extend( {
        lines: 8,
        length: 4,
        width: 3,
        radius: 5 
    }, $.fn.spin.presets.wp );
    $.fn.spin.presets.large = $.extend( {
        lines: 10,
        length: 6,
        width: 4,
        radius: 7 
    }, $.fn.spin.presets.wp );
    $.fn.spin.presets['small-left'] = $.extend( {
        left: 5 
    }, $.fn.spin.presets.small );
    $.fn.spin.presets['small-right'] = $.extend( {
        right: 5 
    }, $.fn.spin.presets.small );
    $.fn.spin.presets['medium-left'] = $.extend( {
        left: 5 
    }, $.fn.spin.presets.medium );
    $.fn.spin.presets['medium-right'] = $.extend( {
        right: 5 
    }, $.fn.spin.presets.medium );
    $.fn.spin.presets['large-left'] = $.extend( {
        left: 5 
    }, $.fn.spin.presets.large );
    $.fn.spin.presets['large-right'] = $.extend( {
        right: 5 
    }, $.fn.spin.presets.large );
})(jQuery);;


