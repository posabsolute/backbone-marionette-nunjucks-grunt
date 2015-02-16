(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["components/headerbar/headerbar.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"headerbar-container\">\n    <div class=\"title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.autoesc);
output += "</div>\n    <a class=\"icon btnmenu\" href=\"#\"><span class=\"icon_menu\"></span></a>\n</div>";
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
