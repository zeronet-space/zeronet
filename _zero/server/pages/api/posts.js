"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postsRoute)
/* harmony export */ });
async function postsRoute(req, res) {
    /*const admin = await User.create({
    id: '66-6-6-6-666'.replace(/6/g,_=>(Math.random().toString(16)+'00000').slice(2,6)),
    username: 'ay0ks',
    password: '$2a$12$5viYeccNg4yhP8Z6hBh7buXU4UALhDAXHNPwy4lQAVaLrlXs7xa.y',
    email: 'contact@zeronet.space',
    admin: true
  });*/ res.send({
        message: 'системы постов пока-что не будет (зато есть админка без логина), подождите апдейт'
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(545));
module.exports = __webpack_exports__;

})();