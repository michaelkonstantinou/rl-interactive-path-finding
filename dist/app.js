/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contracts/UIElement.ts":
/*!************************************!*\
  !*** ./src/contracts/UIElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar UIElement = /** @class */ (function () {\n    function UIElement() {\n    }\n    /**\n     * Returns the respective HTML element that this UI Element is for\n     * @returns HTMLElement\n     */\n    UIElement.prototype.getHTMLElement = function () {\n        return this.element;\n    };\n    return UIElement;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIElement);\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/contracts/UIElement.ts?");

/***/ }),

/***/ "./src/data/Blocks.ts":
/*!****************************!*\
  !*** ./src/data/Blocks.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blocks: () => (/* binding */ blocks),\n/* harmony export */   fileExtensionBlocks: () => (/* binding */ fileExtensionBlocks),\n/* harmony export */   pathBlocks: () => (/* binding */ pathBlocks)\n/* harmony export */ });\nvar pathBlocks = 'assets/blocks/tile_';\nvar fileExtensionBlocks = '.png';\nvar blocks = {\n    'Wall': ['0044', '0045', '0046', '0047', '0056', '0058', '0068', '0069', '0070', '0071'],\n    'Road': ['0000', '0001', '0002'],\n    'Coin': ['0093', '0131']\n};\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/data/Blocks.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_MapGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/MapGrid */ \"./src/ui/MapGrid.ts\");\n/* harmony import */ var _ui_MapToolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/MapToolbox */ \"./src/ui/MapToolbox.ts\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Init the Map Grid with default values\n    var mapGrid = new _ui_MapGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    mapGrid.generateGrid(4, 4);\n    var mapToolbox = new _ui_MapToolbox__WEBPACK_IMPORTED_MODULE_1__.MapToolbox();\n    // Grid Size Selector - Get User's width and height preferences and update the grid\n    var gridSizeSelect = document.getElementById('grid-size-select');\n    gridSizeSelect.addEventListener('change', function () {\n        var _a = gridSizeSelect.value.split('x').map(Number), width = _a[0], height = _a[1];\n        mapGrid.generateGrid(width, height);\n    });\n});\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/main.ts?");

/***/ }),

/***/ "./src/ui/DraggableItem.ts":
/*!*********************************!*\
  !*** ./src/ui/DraggableItem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableItem: () => (/* binding */ DraggableItem)\n/* harmony export */ });\n/* harmony import */ var _contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/UIElement */ \"./src/contracts/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar DraggableItem = /** @class */ (function (_super) {\n    __extends(DraggableItem, _super);\n    function DraggableItem(type, imagePathUrl) {\n        var _this = _super.call(this) || this;\n        _this.type = type;\n        _this.imagePathUrl = imagePathUrl;\n        _this.createDomElement();\n        _this.addDragStartListener();\n        return _this;\n    }\n    DraggableItem.prototype.createDomElement = function () {\n        var draggableItem = document.createElement('div');\n        draggableItem.classList.add('draggable', 'box', 'mt-2', 'me-2');\n        draggableItem.draggable = true;\n        draggableItem.dataset.type = this.type;\n        draggableItem.dataset.imageUrl = this.imagePathUrl;\n        draggableItem.innerHTML = \"<img src=\\\"\".concat(this.imagePathUrl, \"\\\" alt=\\\"\").concat(this.type, \"\\\">\");\n        this.element = draggableItem;\n    };\n    DraggableItem.prototype.addDragStartListener = function () {\n        this.element.addEventListener('dragstart', function (event) {\n            var imageUrl = event.target.parentElement.dataset.imageUrl;\n            var itemType = event.target.parentElement.dataset.type;\n            event.dataTransfer.setData('text/plain', JSON.stringify({ imageUrl: imageUrl, type: itemType }));\n        });\n    };\n    return DraggableItem;\n}(_contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/DraggableItem.ts?");

/***/ }),

/***/ "./src/ui/DraggableItemContainer.ts":
/*!******************************************!*\
  !*** ./src/ui/DraggableItemContainer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableItemContainer: () => (/* binding */ DraggableItemContainer)\n/* harmony export */ });\n/* harmony import */ var _contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/UIElement */ \"./src/contracts/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar DraggableItemContainer = /** @class */ (function (_super) {\n    __extends(DraggableItemContainer, _super);\n    function DraggableItemContainer(type) {\n        var _this = _super.call(this) || this;\n        _this.type = type;\n        _this.createDomElement();\n        return _this;\n    }\n    DraggableItemContainer.prototype.addDraggableItem = function (item) {\n        this.element.querySelector('.container-draggable-items').appendChild(item.getHTMLElement());\n    };\n    /**\n     * Create the following structure\n     * Div container for the object that will hold a Title and below its draggable items\n     *\n     * Title\n     * - Div container\n     * -- Draggable items holder here --\n     */\n    DraggableItemContainer.prototype.createDomElement = function () {\n        var container = document.createElement('div');\n        // Create title\n        var title = document.createElement('h1');\n        title.classList.add('mt-4');\n        title.textContent = this.type;\n        // Create draggable items container\n        var containerDraggableItems = document.createElement('div');\n        containerDraggableItems.classList.add('d-flex', 'container-draggable-items');\n        // Merge together\n        container.appendChild(title);\n        container.appendChild(containerDraggableItems);\n        this.element = container;\n    };\n    return DraggableItemContainer;\n}(_contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/DraggableItemContainer.ts?");

/***/ }),

/***/ "./src/ui/MapGrid.ts":
/*!***************************!*\
  !*** ./src/ui/MapGrid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/UIElement */ \"./src/contracts/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MapGrid = /** @class */ (function (_super) {\n    __extends(MapGrid, _super);\n    function MapGrid(elementId) {\n        if (elementId === void 0) { elementId = '#map-grid'; }\n        var _this = _super.call(this) || this;\n        _this.element = document.querySelector(elementId);\n        _this.setupEventListeners();\n        return _this;\n    }\n    /**\n     * Creates the grid based on the selected size.\n     */\n    MapGrid.prototype.generateGrid = function (width, height) {\n        this.element.innerHTML = ''; // Clear previous grid\n        // Remove all map-grid-repeat classes\n        this.element.classList.remove('map-grid-repeat-4');\n        this.element.classList.remove('map-grid-repeat-8');\n        this.element.classList.remove('map-grid-repeat-16');\n        // Calculate number of rows and columns based on size\n        this.element.classList.add('map-grid-repeat-' + height);\n        // Create grid of boxes\n        for (var i = 0; i < width; i++) {\n            for (var j = 0; j < height; j++) {\n                var box = document.createElement('div');\n                box.classList.add('box');\n                this.element.appendChild(box);\n            }\n        }\n    };\n    /**\n     * Sets up event listeners for drag and drop events and grid size selection change.\n     */\n    MapGrid.prototype.setupEventListeners = function () {\n        this.element.addEventListener('dragover', function (event) {\n            event.preventDefault();\n        });\n        this.element.addEventListener('drop', function (event) {\n            event.preventDefault();\n            console.log('sth');\n            var data = JSON.parse(event.dataTransfer.getData('text/plain'));\n            var target = event.target;\n            if (target.classList.contains('box')) {\n                target.style.backgroundImage = \"url(\".concat(data.imageUrl, \")\");\n                target.dataset.type = data.type;\n            }\n        });\n    };\n    return MapGrid;\n}(_contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapGrid);\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapGrid.ts?");

/***/ }),

/***/ "./src/ui/MapToolbox.ts":
/*!******************************!*\
  !*** ./src/ui/MapToolbox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MapToolbox: () => (/* binding */ MapToolbox)\n/* harmony export */ });\n/* harmony import */ var _contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/UIElement */ \"./src/contracts/UIElement.ts\");\n/* harmony import */ var _data_Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Blocks */ \"./src/data/Blocks.ts\");\n/* harmony import */ var _DraggableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableItem */ \"./src/ui/DraggableItem.ts\");\n/* harmony import */ var _DraggableItemContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraggableItemContainer */ \"./src/ui/DraggableItemContainer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar MapToolbox = /** @class */ (function (_super) {\n    __extends(MapToolbox, _super);\n    function MapToolbox(elementId) {\n        if (elementId === void 0) { elementId = '#map-toolbox'; }\n        var _this = _super.call(this) || this;\n        _this.element = document.querySelector(elementId);\n        _this.draggableBlocks = _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.blocks;\n        _this.createDraggableItems();\n        return _this;\n    }\n    /**\n     * Creates draggable items dynamically.\n     */\n    MapToolbox.prototype.createDraggableItems = function () {\n        var _loop_1 = function (type) {\n            var images = _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.blocks[type];\n            var container = new _DraggableItemContainer__WEBPACK_IMPORTED_MODULE_3__.DraggableItemContainer(type);\n            images.forEach(function (image) {\n                var imagePathUrl = _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.pathBlocks + image + _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.fileExtensionBlocks;\n                container.addDraggableItem(new _DraggableItem__WEBPACK_IMPORTED_MODULE_2__.DraggableItem(type, imagePathUrl));\n            });\n            this_1.element.parentNode.insertBefore(container.getHTMLElement(), this_1.element.nextSibling);\n        };\n        var this_1 = this;\n        for (var type in _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.blocks) {\n            _loop_1(type);\n        }\n    };\n    return MapToolbox;\n}(_contracts_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapToolbox.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;