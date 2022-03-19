"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZeroApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(566);
/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(330);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_juggle_resize_observer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _zeronet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_4__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const LinkItems = [
    {
        name: 'Главная',
        icon: 'fluent:home-12-filled',
        url: '/'
    },
    {
        name: 'Пастбин',
        icon: 'fluent:notebook-add-24-filled',
        url: '//paste.zeronet.space'
    }, 
];
function SimpleSidebar({ children  }) {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContent, {
                onClose: ()=>onClose
                ,
                display: {
                    base: 'none'
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
                autoFocus: false,
                isOpen: isOpen,
                placement: "left",
                onClose: onClose,
                returnFocusOnClose: false,
                onOverlayClick: onClose,
                size: "full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerContent, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContent, {
                        onClose: onClose
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                height: "24",
                width: "24",
                icon: "ep:menu",
                onClick: onOpen,
                cursor: "pointer",
                style: {
                    marginTop: '-11px'
                }
            })
        ]
    }));
}
const SidebarContent = ({ onClose , ...rest })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#999999b8', '#737373'),
        borderRight: "1px",
        borderRightColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)('#999999b8', '#737373'),
        w: {
            base: 'full'
        },
        pos: "fixed",
        h: "full",
        style: {
            overflowY: 'scroll'
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        w: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                            bg: "#999999",
                            h: "25px",
                            color: "white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                fontSize: "md",
                                children: "Меню"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        p: "3",
                        h: "25px",
                        bg: "#999999",
                        color: "white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                            bg: "#999999",
                            h: "2px",
                            color: "white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                                height: "21",
                                width: "21",
                                icon: "fa:close",
                                onClick: onClose,
                                cursor: "pointer",
                                style: {
                                    marginTop: '-4px'
                                }
                            })
                        })
                    })
                ]
            }),
            LinkItems.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                    icon: link.icon,
                    url: link.url,
                    children: link.name
                }, link.name)
            )
        ]
    }));
};
const NavItem = ({ icon , url , children , ...rest })=>{
    const { observe , width , height  } = react_cool_dimensions__WEBPACK_IMPORTED_MODULE_5___default()({
        useBorderBoxSize: true,
        polyfill: _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_6__.ResizeObserver
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
        fontFamily: "verdana",
        href: url,
        style: {
            textDecoration: 'none'
        },
        _focus: {
            boxShadow: 'none'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            align: "center",
            p: "1",
            role: "group",
            cursor: "pointer",
            w: "100%",
            _hover: {
                bg: '#737373',
                color: 'white'
            },
            fontSize: "13px",
            ...rest,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    whiteSpace: "nowrap",
                    paddingRight: "5px",
                    textDecoration: "underline",
                    children: [
                        children,
                        '\t'
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                    variant: "dashed",
                    orientation: "horizontal"
                }),
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                    icon: icon,
                    height: "24",
                    width: "24",
                    style: {
                        minHeight: '24px',
                        minWidth: '24px'
                    }
                })
            ]
        })
    }));
};
function ZeroApp({ Component , pageProps  }) {
    const { 0: isMenuOpen , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleMenu = ()=>{
        setMenu((prevState)=>!prevState
        );
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#5bbad5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "zer\xf8net"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "\xd8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://zeronet.space"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/android-chrome-48x48.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:title",
                        content: "zer\xf8net"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:url",
                        content: "https://zeronet.space"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:image",
                        content: "/android-chrome-48x48.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "zer\xf8net"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "application-name",
                        content: "zer\xf8net"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#603cba"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileImage",
                        content: "/mstile-144x144.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#222233"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=Edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html, charset=UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "referrer",
                        content: "strict-origin-when-cross-origin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google",
                        content: "notranslate"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
                theme: _zeronet_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ColorModeScript, {
                        initialColorMode: _zeronet_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"].config.initialColorMode */ .Z.config.initialColorMode
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                w: "100%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                        position: "absolute",
                                        fontSize: "md",
                                        bgColor: "#757575",
                                        h: "25px",
                                        w: "25px",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                            src: "/android-chrome-36x36.png",
                                            h: "16px",
                                            w: "16px",
                                            mt: "4px",
                                            ml: "4px",
                                            alt: "zeronet logo"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                                        bg: "#999999",
                                        h: "25px",
                                        color: "white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                            fontSize: "md",
                                            mr: "-48px",
                                            children: "Блог Айокса"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                p: "3",
                                h: "25px",
                                bg: "#999999",
                                color: "white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleSidebar, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    colors: {
        black: '#999'
    },
    components: {
        Component: {
            baseStyle: {
                backgroundColor: '#999999b8'
            }
        }
    },
    styles: {
        global: (props)=>({
                body: {
                    bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#999999b8', '#737373')(props)
                }
            })
    },
    useSystemColorMode: true
}));


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 330:
/***/ ((module) => {

module.exports = require("@juggle/resize-observer");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 60:
/***/ ((module) => {

module.exports = require("react-cool-dimensions");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(656));
module.exports = __webpack_exports__;

})();