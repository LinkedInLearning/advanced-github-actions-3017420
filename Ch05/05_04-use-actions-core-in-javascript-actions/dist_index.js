/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 482:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// require the libraries for actions
const core = __nccwpck_require__(931);
const github = __nccwpck_require__(482);

// use an async function for the main tasks
async function main() {

    // get the inputs
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const input_1 = core.getInput('input_1');

    core.info("INFO: input_1 = " + input_1);
    core.notice("This is a notice");
    core.warning("This is a warning");
    core.error("This is an error");
}

// call the function
main();

})();

module.exports = __webpack_exports__;
/******/ })()
;