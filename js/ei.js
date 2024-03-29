function __cp_domReady(e) {
    /in/.test(document.readyState) ? setTimeout("__cp_domReady(" + e + ")", 9) : e()
}
document.getElementsByClassName || (document.getElementsByClassName = function(e) {
    var t, n, a, r = document, s = [];
    if (r.querySelectorAll)
        return r.querySelectorAll("." + e);
    if (r.evaluate)
        for (n = ".//*[contains(concat(' ', @class, ' '), ' " + e + " ')]",
        t = r.evaluate(n, r, null , 0, null ); a = t.iterateNext(); )
            s.push(a);
    else
        for (t = r.getElementsByTagName("*"),
        n = new RegExp("(^|\\s)" + e + "(\\s|$)"),
        a = 0; a < t.length; a++)
            n.test(t[a].className) && s.push(t[a]);
    return s
}
);
var CodePenEmbed = {
    width: "100%",
    init: function() {
        this._showCodePenEmbeds(),
        this.listenToParentPostMessages()
    },
    _showCodePenEmbeds: function() {
        for (var e = document.getElementsByClassName("codepen"), t = e.length - 1; t > -1; t--) {
            var n = this._getParamsFromAttributes(e[t]);
            if (n = this._convertOldDataAttributesToNewDataAttributes(n),
            n.user = this._findUsernameForURL(n, e[t]),
            this._paramsHasRequiredAttributes(n)) {
                var a = this._buildURL(n)
                  , r = this._buildIFrame(n, a);
                this._addIFrameToPage(e[t], r)
            }
        }
    },
    _findUsernameForURL: function(e, t) {
        if ("string" == typeof e.user)
            return e.user;
        for (var n = 0, a = t.children.length; a > n; n++) {
            var r = t.children[n]
              , s = r.href || ""
              , i = s.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
            if (i)
                return i[2]
        }
        return "anon"
    },
    _paramsHasRequiredAttributes: function(e) {
        return e["slug-hash"]
    },
    _getParamsFromAttributes: function(e) {
        for (var t = {}, n = e.attributes, a = 0, r = n.length; r > a; a++) {
            var s = n[a].name;
            0 === s.indexOf("data-") && (t[s.replace("data-", "")] = n[a].value)
        }
        return t
    },
    _convertOldDataAttributesToNewDataAttributes: function(e) {
        return e.href && (e["slug-hash"] = e.href),
        e.type && (e["default-tab"] = e.type),
        e.safe && (e.animations = "true" === e.safe ? "run" : "stop-after-5"),
        e
    },
    _buildURL: function(e) {
        var t = this._getHost(e)
          , n = e.user ? e.user : "anon"
          , a = "?" + this._getGetParams(e)
          , r = e.preview && "true" === e.preview ? "embed/preview" : "embed"
          , s = [t, n, r, e["slug-hash"] + a].join("/");
        return s.replace(/\/\//g, "//")
    },
    _getHost: function(e) {
        return e.host ? this._getSafeHost(e.host) : "file:" === document.location.protocol ? "http://codepen.io" : "//codepen.io"
    },
    _getSafeHost: function(e) {
        return e.match(/^\/\//) || !e.match(/http:/) ? document.location.protocol + "//" + e : e
    },
    _getGetParams: function(e) {
        var t = "";
        for (var n in e)
            "" !== t && (t += "&"),
            t += n + "=" + encodeURIComponent(e[n]);
        return t
    },
    _buildIFrame: function(e, t) {
        var n = "";
        "" !== e["class"] && (n = e["class"]);
        var a = {
            id: "cp_embed_" + e["slug-hash"].replace("/", "_"),
            src: t,
            scrolling: "no",
            frameborder: "0",
            height: this._getHeight(e),
            allowTransparency: "true",
            allowfullscreen: "true",
            name: "CodePen Embed",
            title: "CodePen Embed",
            "class": "cp_embed_iframe " + n,
            style: "width: " + this.width + "; overflow: hidden;"
        }
          , r = "<iframe ";
        for (var s in a)
            r += s + '="' + a[s] + '" ';
        return r += "></iframe>"
    },
    _getHeight: function(e) {
        return e.height ? e.height : 300
    },
    _addIFrameToPage: function(e, t) {
        if (e.parentNode) {
            var n = document.createElement("div");
            n.innerHTML = t,
            e.parentNode.replaceChild(n, e)
        } else
            e.innerHTML = t
    },
    listenToParentPostMessages: function() {
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent"
          , eventListener = window[eventMethod]
          , messageEvent = "attachEvent" === eventMethod ? "onmessage" : "message";
        eventListener(messageEvent, function(e) {
            try {
                var dataObj = eval("(" + e.data + ")")
                  , iframe = document.getElementById("cp_embed_" + dataObj.hash);
                iframe && (iframe.height = dataObj.height)
            } catch (err) {}
        }
        , !1)
    }
};
__cp_domReady(function() {
    CodePenEmbed.init()
}
);
