"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(702);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var markdown_it_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(351);
/* harmony import */ var markdown_it_meta__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it_meta__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var markdown_it_attrs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_attrs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ZeroHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(570);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_2__]);
globby__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const md = __webpack_require__(653)({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'l-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’'
});
md.use((markdown_it_meta__WEBPACK_IMPORTED_MODULE_4___default()));
md.use((markdown_it_attrs__WEBPACK_IMPORTED_MODULE_5___default()));

function Home({ posts  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ZeroHead__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "zer\xf8net",
                description: "\xd8",
                type: "website",
                url: "https://zeronet.space/"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "relative",
                w: "100%",
                m: "0",
                children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            position: "relative",
                            w: "100%",
                            bgColor: "#979797",
                            mb: "1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    w: "100%",
                                    bgColor: "#989898",
                                    p: "1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            fontSize: "md",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                href: `/post/${post.meta.id}`,
                                                children: post.meta.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            w: "100%",
                                            bgColor: "#898989",
                                            p: "1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                mt: "-3px",
                                                children: post.meta.subtitle || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "Подзаголовок не указан..."
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    w: "100%",
                                    bgColor: "#898989",
                                    p: "1",
                                    h: "20px",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    w: "100%",
                                    bgColor: "#898989",
                                    p: "1",
                                    h: "20px",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    w: "100%",
                                    bgColor: "#898989",
                                    p: "1",
                                    h: "20px",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
                    })
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "fixed",
                style: {
                    width: '100%',
                    bottom: '0'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    w: "100%",
                    bgColor: "#898989",
                    p: "1px",
                    pl: "5px",
                    h: "20px",
                    children: [
                        "Авторское право \xa9 2021-",
                        new Date().getFullYear(),
                        ". Нихуя не защищено :KekW:"
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    let posts = (await (0,globby__WEBPACK_IMPORTED_MODULE_2__.globby)("./articles/**/*.md")).map((post)=>{
        let document = md.render(fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(post, "utf-8").toString());
        let stat = fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(post);
        return {
            meta: {
                ...md.meta,
                createdAt: stat.ctime.toLocaleString("ru-RU"),
                modifiedAt: stat.mtime.toLocaleString("ru-RU")
            },
            data: document
        };
    });
    return {
        props: {
            posts: posts
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

/***/ 28:
/***/ ((module) => {

module.exports = require("markdown-it-attrs");

/***/ }),

/***/ 351:
/***/ ((module) => {

module.exports = require("markdown-it-meta");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 702:
/***/ ((module) => {

module.exports = import("globby");;

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [570], () => (__webpack_exec__(186)));
module.exports = __webpack_exports__;

})();