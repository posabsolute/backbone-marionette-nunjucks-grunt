(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/headerbar/hamburger-menu.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/headerbar/headerbar.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"headerbar-container\">\n    <section class=\"hamburger-component\">\n    <button class=\"hamburger-component__icon\">\n        <span class=\"hamburger-component__layer\"></span>\n      </button>\n    </section>\n    <div class=\"title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.autoesc);
output += "</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/sidebar/baseSidebar.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"sidebar\">\n\t<div class=\"list\">\n\t\t<a href=\"#\" id=\"test1\">Test1</a>\n\t\t<a href=\"#\">Test1</a>\n\t\t<a href=\"#\">Test1</a>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/stats/bigstats.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"bigstats-component\">\n\t<div class=\"main-stat\">\n\t\t18<span class=\"label\"> sales this month</span>\n\t</div>\n\t<div class=\"subitem row top40\">\n\t\t<div class=\"col s4 smallstats\"><i class=\"icon\"></i> 8 requests</div>\n\t\t<div class=\"col s4 smallstats\"><i class=\"icon\"></i> 3 leads</div>\n\t\t<div class=\"col s4 smallstats\"><i class=\"icon\"></i> 100 views</div>\n\t</div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/dashboard/dashboard.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"\">\n\t<div class=\"topstats bg bg-everest\"></div>\n\t<div class=\"main\"></div>\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
