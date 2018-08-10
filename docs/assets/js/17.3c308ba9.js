(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{178:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("When we decided to use "),a("router-link",{attrs:{to:"/templating/template-literals.html"}},[t._v("template litterals as template engine")]),t._v(", we have managed to create DOM node by hand, using the standard "),a("code",[t._v("document")]),t._v(" APIs.")],1),t._v(" "),a("p",[t._v("It means that it's our responsibility to manage every possible modifications happening on any kind of possible node.")]),t._v(" "),a("p",[t._v("In the previous section "),a("router-link",{attrs:{to:"/vdom/intro.html"}},[t._v("what's a VDOM")]),t._v(", we've seen that VDOMs are a great way to manage performances issues dealing with the DOM.")],1),t._v(" "),a("p",[t._v("This way, let's make our framework better and rely on "),a("a",{attrs:{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("snabbdom"),a("OutboundLink")],1),t._v(" VDOM to handle DOM modifications.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("hr"),t._v(" "),t._m(7),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v('Note on moving type from tagName to "element"')]),t._v(" "),t._m(8),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mfrachet/frontend-example/blob/master/framework/elements/element.reducer.js#L13",target:"_blank",rel:"noopener noreferrer"}},[t._v("Check this link for more on the type"),a("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("With our new VDOM, "),a("code",[t._v("./framework/index.js")]),t._v(" will be slightly simpler. "),a("a",{attrs:{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snabbdom"),a("OutboundLink")],1),t._v(" will manage each of the dom operations for us:")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"adding-snabbdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-snabbdom","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Snabbdom")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-snabbdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-snabbdom","aria-hidden":"true"}},[this._v("#")]),this._v(" Install snabbdom")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Simply install it from "),s("code",[this._v("npm")]),this._v(" or "),s("code",[this._v("yarn")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ yarn install snabbdom\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"delegate-the-dom-manipulations-to-snabbdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delegate-the-dom-manipulations-to-snabbdom","aria-hidden":"true"}},[this._v("#")]),this._v(" Delegate the DOM manipulations to snabbdom")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We can now refacto the "),s("code",[this._v("./framework/element.js")]),this._v(" to create a VDOM node instead of a real DOM node:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" h "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"snabbdom/h"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("createElement")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tagName "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strings"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"element"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("h")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    tagName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    strings"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reduce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentString"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" acc "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" currentString "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" div "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"div"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"p"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Note on h")]),t._v(" "),a("p",[a("code",[t._v("h")]),t._v(" is commonly used to define virtual nodes. The "),a("code",[t._v("h")]),t._v(" means "),a("code",[t._v("hyperscript")]),t._v(".")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("This will help us manage different operations later, like events. "),a("code",[t._v("element")]),t._v(" helps to distinguish which kind of interpolated values\nour "),a("code",[t._v("tagged template literal")]),t._v(" deals with. "),a("code",[t._v("template literals")]),t._v(" doesn't distinguish DOM nodes or "),a("code",[t._v("events")]),t._v(" attributes such as "),a("code",[t._v("onClick")]),t._v(" etc...")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"spawning-the-app-with-the-vdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spawning-the-app-with-the-vdom","aria-hidden":"true"}},[this._v("#")]),this._v(" Spawning the app with the VDOM")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" snabbdom "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"snabbdom"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" patch "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" snabbdom"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("init")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("patch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="adding-snabbdom.md";s.default=e.exports}}]);