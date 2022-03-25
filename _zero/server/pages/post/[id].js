"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageSubTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


function PageSubTitle({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "100%",
        bgColor: "#989898",
        p: "1",
        h: "20px",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            h: "25px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "xs",
                mt: "-10px",
                children: title
            })
        })
    });
};


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


function PageTitle({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "100%",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
            bg: "#999999b6",
            h: "25px",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "md",
                children: title
            })
        })
    });
};


/***/ }),

/***/ 294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(702);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var markdown_it_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(351);
/* harmony import */ var markdown_it_meta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_meta__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(975);
/* harmony import */ var markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var markdown_it_table_of_contents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(684);
/* harmony import */ var markdown_it_table_of_contents__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_it_table_of_contents__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(markdown_it_attrs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var markdown_it_multimd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(182);
/* harmony import */ var markdown_it_multimd_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(markdown_it_multimd_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var markdown_it_wikilinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(224);
/* harmony import */ var markdown_it_wikilinks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(markdown_it_wikilinks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var markdown_it_html5_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(377);
/* harmony import */ var markdown_it_html5_media__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(markdown_it_html5_media__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(339);
/* harmony import */ var markdown_it_abbr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var markdown_it_inline_comments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(590);
/* harmony import */ var markdown_it_inline_comments__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(markdown_it_inline_comments__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(484);
/* harmony import */ var markdown_it_footnote__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(687);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(866);
/* harmony import */ var _components_PageSubTitle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(304);
/* harmony import */ var _components_ZeroHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(570);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_3__, highlight_js__WEBPACK_IMPORTED_MODULE_4__]);
([globby__WEBPACK_IMPORTED_MODULE_3__, highlight_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const md = __webpack_require__(653)({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'l-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: function(str, lang) {
        if (lang && highlight_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLanguage(lang)) {
            try {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    className: "hljs",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                        children: highlight_js__WEBPACK_IMPORTED_MODULE_4__["default"].highlight(str, {
                            language: lang,
                            ignoreIllegals: true
                        }).value
                    })
                });
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
}).use((markdown_it_meta__WEBPACK_IMPORTED_MODULE_5___default())).use((markdown_it_anchor__WEBPACK_IMPORTED_MODULE_6___default())).use((markdown_it_table_of_contents__WEBPACK_IMPORTED_MODULE_7___default()), {
    includeLevel: [
        1,
        2,
        3
    ],
    listType: 'ol'
}).use((markdown_it_attrs__WEBPACK_IMPORTED_MODULE_8___default())).use((markdown_it_multimd_table__WEBPACK_IMPORTED_MODULE_9___default())).use(markdown_it_wikilinks__WEBPACK_IMPORTED_MODULE_10___default()({})).use(markdown_it_html5_media__WEBPACK_IMPORTED_MODULE_11__.html5Media).use((markdown_it_abbr__WEBPACK_IMPORTED_MODULE_12___default()), {
    "HTML": "Hyper Text Markup Language",
    "W3C": "World Wide Web Consortium"
}).use((markdown_it_inline_comments__WEBPACK_IMPORTED_MODULE_13___default())).use((markdown_it_footnote__WEBPACK_IMPORTED_MODULE_14___default())).use((markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_15___default()), {
    enabled: true
});
md.linkify.set({
    fuzzyEmail: false
});




function PostPage({ post  }) {
    const rawRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: rawHTML  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.data);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (rawRef.current) {
            rawRef.current.innerHTML = rawHTML;
        }
    }, [
        rawRef.current,
        rawHTML
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ZeroHead__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                title: `zerønet — ${post.meta.title}`,
                description: post.meta.subtitle,
                type: "article",
                url: `https://zeronet.space/post/${post.meta.id}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                title: post.meta.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageSubTitle__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                title: post.meta.subtitle || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        children: "Подзаголовок не указан..."
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                position: "relative",
                mb: "60px",
                w: "100%",
                p: "2",
                fontSize: "16px",
                ref: rawRef
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                position: "fixed",
                style: {
                    width: '100%',
                    bottom: '0'
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "100%",
                        bgColor: "#898989",
                        p: "1",
                        h: "20px",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            mt: "-3px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: "Автор статьи"
                                    })
                                }),
                                " ",
                                post.meta.author
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "100%",
                        bgColor: "#898989",
                        p: "1",
                        h: "20px",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            mt: "-3px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: "Статья опубликована"
                                    })
                                }),
                                " ",
                                post.meta.createdAt
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: "100%",
                        bgColor: "#898989",
                        p: "1",
                        h: "20px",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            mt: "-3px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: "Последнее изменение"
                                    })
                                }),
                                " ",
                                post.meta.modifiedAt
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    let { id  } = context.query;
    let posts = (await (0,globby__WEBPACK_IMPORTED_MODULE_3__.globby)("./articles/**/*.md")).map((post)=>{
        let document = md.render(fs__WEBPACK_IMPORTED_MODULE_16___default().readFileSync(post, "utf-8").toString());
        if (md.meta.id === parseInt(id)) {
            let stat = fs__WEBPACK_IMPORTED_MODULE_16___default().statSync(post);
            return {
                meta: {
                    ...md.meta,
                    createdAt: stat.ctime.toLocaleString("ru-RU"),
                    modifiedAt: stat.mtime.toLocaleString("ru-RU")
                },
                data: document
            };
        }
    });
    let post1 = posts.filter((post)=>post !== undefined && post.meta.id === parseInt(id)
    )[0];
    return {
        props: {
            post: post1
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 653:
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ 339:
/***/ ((module) => {

module.exports = require("markdown-it-abbr");

/***/ }),

/***/ 975:
/***/ ((module) => {

module.exports = require("markdown-it-anchor");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("markdown-it-attrs");

/***/ }),

/***/ 484:
/***/ ((module) => {

module.exports = require("markdown-it-footnote");

/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("markdown-it-html5-media");

/***/ }),

/***/ 590:
/***/ ((module) => {

module.exports = require("markdown-it-inline-comments");

/***/ }),

/***/ 351:
/***/ ((module) => {

module.exports = require("markdown-it-meta");

/***/ }),

/***/ 182:
/***/ ((module) => {

module.exports = require("markdown-it-multimd-table");

/***/ }),

/***/ 684:
/***/ ((module) => {

module.exports = require("markdown-it-table-of-contents");

/***/ }),

/***/ 687:
/***/ ((module) => {

module.exports = require("markdown-it-task-lists");

/***/ }),

/***/ 224:
/***/ ((module) => {

module.exports = require("markdown-it-wikilinks");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 702:
/***/ ((module) => {

module.exports = import("globby");;

/***/ }),

/***/ 0:
/***/ ((module) => {

module.exports = import("highlight.js");;

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [570], () => (__webpack_exec__(294)));
module.exports = __webpack_exports__;

})();