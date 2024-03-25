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

/***/ "./src/contracts/ui/UIElement.ts":
/*!***************************************!*\
  !*** ./src/contracts/ui/UIElement.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar UIElement = /** @class */ (function () {\n    function UIElement() {\n    }\n    /**\n     * Returns the respective HTML element that this UI Element is for\n     * @returns HTMLElement\n     */\n    UIElement.prototype.getHTMLElement = function () {\n        return this.element;\n    };\n    /**\n     * Finds the corresponding DOM element and assigns it to the element property\n     * @param elementId\n     */\n    UIElement.prototype.setElementFromId = function (elementId) {\n        this.element = document.querySelector(elementId);\n    };\n    return UIElement;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIElement);\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/contracts/ui/UIElement.ts?");

/***/ }),

/***/ "./src/contracts/ui/UIRenderableElement.ts":
/*!*************************************************!*\
  !*** ./src/contracts/ui/UIRenderableElement.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UIRenderableElement: () => (/* binding */ UIRenderableElement)\n/* harmony export */ });\n/* harmony import */ var _UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIElement */ \"./src/contracts/ui/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar UIRenderableElement = /** @class */ (function (_super) {\n    __extends(UIRenderableElement, _super);\n    function UIRenderableElement() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return UIRenderableElement;\n}(_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/contracts/ui/UIRenderableElement.ts?");

/***/ }),

/***/ "./src/contracts/ui/UIUserOption.ts":
/*!******************************************!*\
  !*** ./src/contracts/ui/UIUserOption.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UIUserOption: () => (/* binding */ UIUserOption)\n/* harmony export */ });\n/* harmony import */ var _UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIElement */ \"./src/contracts/ui/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar UIUserOption = /** @class */ (function (_super) {\n    __extends(UIUserOption, _super);\n    function UIUserOption(elementId) {\n        var _this = _super.call(this) || this;\n        _this.setElementFromId(elementId);\n        return _this;\n    }\n    UIUserOption.prototype.onChange = function (callback) {\n        this.element.addEventListener('change', callback);\n    };\n    return UIUserOption;\n}(_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/contracts/ui/UIUserOption.ts?");

/***/ }),

/***/ "./src/data/Blocks.ts":
/*!****************************!*\
  !*** ./src/data/Blocks.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blocks: () => (/* binding */ blocks),\n/* harmony export */   fileExtensionBlocks: () => (/* binding */ fileExtensionBlocks),\n/* harmony export */   pathBlocks: () => (/* binding */ pathBlocks)\n/* harmony export */ });\nvar pathBlocks = 'assets/blocks/tile_';\nvar fileExtensionBlocks = '.png';\nvar blocks = {\n    'Road': ['0000', '0001', '0002'],\n    'Coin': ['0150', '0151'],\n    'Start': ['0147', '0148', '0149'],\n    'End': ['0145'],\n    'Wall': ['0132', '0133', '0134', '0135', '0136', '0137', '0146', '0139', '0140', '0142', '0143', '0144']\n};\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/data/Blocks.ts?");

/***/ }),

/***/ "./src/data/StoredMaps.ts":
/*!********************************!*\
  !*** ./src/data/StoredMaps.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storedMaps: () => (/* binding */ storedMaps)\n/* harmony export */ });\nvar exampleMap1 = {\n    width: 4,\n    height: 4,\n    blocks: [\n        { 'type': 'Start', 'image': 'assets/blocks/tile_0147.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0002.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0001.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Wall', 'image': 'assets/blocks/tile_0144.png' },\n        { 'type': 'Wall', 'image': 'assets/blocks/tile_0143.png' },\n        { 'type': 'Wall', 'image': 'assets/blocks/tile_0142.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0000.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0001.png' },\n        { 'type': 'Road', 'image': 'assets/blocks/tile_0002.png' },\n        { 'type': 'End', 'image': 'assets/blocks/tile_0145.png' },\n    ]\n};\nvar storedMaps = [exampleMap1];\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/data/StoredMaps.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_MapGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/MapGrid */ \"./src/ui/MapGrid.ts\");\n/* harmony import */ var _ui_MapToolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/MapToolbox */ \"./src/ui/MapToolbox.ts\");\n/* harmony import */ var _ui_options_GridBorderOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/options/GridBorderOption */ \"./src/ui/options/GridBorderOption.ts\");\n/* harmony import */ var _ui_options_GridSizeOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/options/GridSizeOption */ \"./src/ui/options/GridSizeOption.ts\");\n/* harmony import */ var _ui_options_LoadMapOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/options/LoadMapOption */ \"./src/ui/options/LoadMapOption.ts\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Init the Map Grid with default values\n    var mapGrid = new _ui_MapGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    mapGrid.generateGrid(4, 4);\n    var mapToolbox = new _ui_MapToolbox__WEBPACK_IMPORTED_MODULE_1__.MapToolbox();\n    // Grid Size Selector - Get User's width and height preferences and update the grid\n    var gridSizeOption = new _ui_options_GridSizeOption__WEBPACK_IMPORTED_MODULE_3__.GridSizeOption('#grid-size-select', mapGrid);\n    var gridBorderOption = new _ui_options_GridBorderOption__WEBPACK_IMPORTED_MODULE_2__.GridBorderOption('#grid-border-select', mapGrid);\n    var loadMapOption = new _ui_options_LoadMapOption__WEBPACK_IMPORTED_MODULE_4__.LoadMapOption('#load-map-option', mapGrid);\n});\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/main.ts?");

/***/ }),

/***/ "./src/ui/DraggableItem.ts":
/*!*********************************!*\
  !*** ./src/ui/DraggableItem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableItem: () => (/* binding */ DraggableItem)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIRenderableElement */ \"./src/contracts/ui/UIRenderableElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar DraggableItem = /** @class */ (function (_super) {\n    __extends(DraggableItem, _super);\n    function DraggableItem(type, imagePathUrl) {\n        var _this = _super.call(this) || this;\n        _this.type = type;\n        _this.imagePathUrl = imagePathUrl;\n        _this.render();\n        _this.addDragStartListener();\n        return _this;\n    }\n    DraggableItem.prototype.render = function () {\n        var draggableItem = document.createElement('div');\n        draggableItem.classList.add('draggable', 'box', 'mt-2', 'me-2');\n        draggableItem.draggable = true;\n        draggableItem.dataset.type = this.type;\n        draggableItem.dataset.imageUrl = this.imagePathUrl;\n        draggableItem.innerHTML = \"<img src=\\\"\".concat(this.imagePathUrl, \"\\\" alt=\\\"\").concat(this.type, \"\\\">\");\n        this.element = draggableItem;\n    };\n    DraggableItem.prototype.addDragStartListener = function () {\n        this.element.addEventListener('dragstart', function (event) {\n            var imageUrl = event.target.parentElement.dataset.imageUrl;\n            var itemType = event.target.parentElement.dataset.type;\n            event.dataTransfer.setData('text/plain', JSON.stringify({ imageUrl: imageUrl, type: itemType }));\n        });\n    };\n    return DraggableItem;\n}(_contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__.UIRenderableElement));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/DraggableItem.ts?");

/***/ }),

/***/ "./src/ui/DraggableItemContainer.ts":
/*!******************************************!*\
  !*** ./src/ui/DraggableItemContainer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableItemContainer: () => (/* binding */ DraggableItemContainer)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIRenderableElement */ \"./src/contracts/ui/UIRenderableElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar DraggableItemContainer = /** @class */ (function (_super) {\n    __extends(DraggableItemContainer, _super);\n    function DraggableItemContainer(type) {\n        var _this = _super.call(this) || this;\n        _this.type = type;\n        _this.render();\n        return _this;\n    }\n    DraggableItemContainer.prototype.addDraggableItem = function (item) {\n        this.element.querySelector('.container-draggable-items').appendChild(item.getHTMLElement());\n    };\n    /**\n     * Create the following structure\n     * Div container for the object that will hold a Title and below its draggable items\n     *\n     * Title\n     * - Div container\n     * -- Draggable items holder here --\n     */\n    DraggableItemContainer.prototype.render = function () {\n        var container = document.createElement('div');\n        container.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');\n        // Create title\n        var title = document.createElement('h4');\n        title.classList.add('mt-4');\n        title.textContent = this.type;\n        // Create draggable items container\n        var containerDraggableItems = document.createElement('div');\n        containerDraggableItems.classList.add('d-flex', 'container-draggable-items');\n        // Merge together\n        container.appendChild(title);\n        container.appendChild(containerDraggableItems);\n        this.element = container;\n    };\n    return DraggableItemContainer;\n}(_contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__.UIRenderableElement));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/DraggableItemContainer.ts?");

/***/ }),

/***/ "./src/ui/MapBox.ts":
/*!**************************!*\
  !*** ./src/ui/MapBox.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MapBox: () => (/* binding */ MapBox)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIRenderableElement */ \"./src/contracts/ui/UIRenderableElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MapBox = /** @class */ (function (_super) {\n    __extends(MapBox, _super);\n    function MapBox(index) {\n        var _this = _super.call(this) || this;\n        _this.type = null;\n        _this.image = null;\n        _this.index = index;\n        _this.render();\n        return _this;\n    }\n    MapBox.prototype.render = function () {\n        this.element = document.createElement('div');\n        this.element.classList.add('box');\n        this.element.id = this.index.toString();\n    };\n    MapBox.prototype.setImage = function (image) {\n        this.element.style.backgroundImage = \"url(\".concat(image, \")\");\n        this.image = image;\n    };\n    MapBox.prototype.setType = function (type) {\n        this.element.dataset.type = type;\n        this.type = type;\n    };\n    MapBox.prototype.getType = function () {\n        return this.type;\n    };\n    MapBox.prototype.getImage = function () {\n        return this.image;\n    };\n    return MapBox;\n}(_contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__.UIRenderableElement));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapBox.ts?");

/***/ }),

/***/ "./src/ui/MapCode.ts":
/*!***************************!*\
  !*** ./src/ui/MapCode.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MapCode: () => (/* binding */ MapCode)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIElement */ \"./src/contracts/ui/UIElement.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MapCode = /** @class */ (function (_super) {\n    __extends(MapCode, _super);\n    function MapCode(elementId) {\n        if (elementId === void 0) { elementId = '#map-code'; }\n        var _this = _super.call(this) || this;\n        _this.setElementFromId(elementId);\n        return _this;\n    }\n    /**\n     * Iterate all the boxes of the map and generate a code representation as used in the StoredMap\n     * @param boxes\n     */\n    MapCode.prototype.generate = function (boxes) {\n        var codeAsString = \"\";\n        // Iterate boxes and fill the map's values\n        for (var i in boxes) {\n            codeAsString += \"{'type': '\".concat(boxes[i].getType(), \"', 'image': '\").concat(boxes[i].getImage(), \"'}\\n\");\n        }\n        this.element.innerHTML = \"<pre>\".concat(codeAsString, \"</pre>\");\n    };\n    return MapCode;\n}(_contracts_ui_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapCode.ts?");

/***/ }),

/***/ "./src/ui/MapGrid.ts":
/*!***************************!*\
  !*** ./src/ui/MapGrid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIElement */ \"./src/contracts/ui/UIElement.ts\");\n/* harmony import */ var _MapBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapBox */ \"./src/ui/MapBox.ts\");\n/* harmony import */ var _MapCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapCode */ \"./src/ui/MapCode.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar MapGrid = /** @class */ (function (_super) {\n    __extends(MapGrid, _super);\n    function MapGrid(elementId) {\n        if (elementId === void 0) { elementId = '#map-grid'; }\n        var _this = _super.call(this) || this;\n        _this.setElementFromId(elementId);\n        _this.mapCode = new _MapCode__WEBPACK_IMPORTED_MODULE_2__.MapCode();\n        _this.setupEventListeners();\n        return _this;\n    }\n    /**\n     * Creates the grid based on the selected size.\n     */\n    MapGrid.prototype.generateGrid = function (width, height) {\n        // Clear previous grid\n        this.element.innerHTML = '';\n        // Remove all map-grid-repeat classes\n        this.element.classList.remove('map-grid-repeat-4');\n        this.element.classList.remove('map-grid-repeat-8');\n        this.element.classList.remove('map-grid-repeat-16');\n        // Calculate number of rows and columns based on size\n        this.element.classList.add('map-grid-repeat-' + height);\n        // Create grid of boxes\n        this.boxes = [];\n        for (var i = 0; i < width; i++) {\n            for (var j = 0; j < height; j++) {\n                var box = new _MapBox__WEBPACK_IMPORTED_MODULE_1__.MapBox(i * width + j);\n                this.element.appendChild(box.getHTMLElement());\n                this.boxes.push(box);\n            }\n        }\n    };\n    /**\n     * Given a StoredMap object, the function generates a grid based on the values of\n     * the stored map\n     *\n     * @param storedMap\n     */\n    MapGrid.prototype.generateFromStoredMap = function (storedMap) {\n        // Create empty grid\n        this.generateGrid(storedMap.width, storedMap.height);\n        // Iterate boxes and fill the map's values\n        for (var i in this.boxes) {\n            this.boxes[i].setImage(storedMap.blocks[i].image);\n            this.boxes[i].setType(storedMap.blocks[i].type);\n        }\n        // Update the code representation\n        this.mapCode.generate(this.boxes);\n    };\n    /**\n     * Toggle the class that is responsible for showing the grid boxes with borders or merged as a whole\n     */\n    MapGrid.prototype.toggleGridBorders = function () {\n        this.element.classList.toggle('hidden-borders');\n    };\n    /**\n     * Sets up event listeners for drag and drop events and grid size selection change.\n     */\n    MapGrid.prototype.setupEventListeners = function () {\n        var _this = this;\n        this.element.addEventListener('dragover', function (event) {\n            event.preventDefault();\n        });\n        this.element.addEventListener('drop', function (event) {\n            event.preventDefault();\n            var data = JSON.parse(event.dataTransfer.getData('text/plain'));\n            var target = event.target;\n            if (target.classList.contains('box')) {\n                // Set the box's values to reflect the draggable item's values\n                var targetBox = _this.boxes[target.id];\n                targetBox.setImage(data.imageUrl);\n                targetBox.setType(data.type);\n                // Update the code representation\n                _this.mapCode.generate(_this.boxes);\n            }\n        });\n    };\n    return MapGrid;\n}(_contracts_ui_UIElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapGrid);\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapGrid.ts?");

/***/ }),

/***/ "./src/ui/MapToolbox.ts":
/*!******************************!*\
  !*** ./src/ui/MapToolbox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MapToolbox: () => (/* binding */ MapToolbox)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/ui/UIRenderableElement */ \"./src/contracts/ui/UIRenderableElement.ts\");\n/* harmony import */ var _data_Blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Blocks */ \"./src/data/Blocks.ts\");\n/* harmony import */ var _DraggableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableItem */ \"./src/ui/DraggableItem.ts\");\n/* harmony import */ var _DraggableItemContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraggableItemContainer */ \"./src/ui/DraggableItemContainer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar MapToolbox = /** @class */ (function (_super) {\n    __extends(MapToolbox, _super);\n    function MapToolbox(elementId) {\n        if (elementId === void 0) { elementId = '#map-toolbox'; }\n        var _this = _super.call(this) || this;\n        _this.setElementFromId(elementId);\n        _this.render();\n        return _this;\n    }\n    /**\n     * Creates draggable items dynamically.\n     */\n    MapToolbox.prototype.render = function () {\n        var _loop_1 = function (type) {\n            var images = _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.blocks[type];\n            var container = new _DraggableItemContainer__WEBPACK_IMPORTED_MODULE_3__.DraggableItemContainer(type);\n            images.forEach(function (image) {\n                var imagePathUrl = _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.pathBlocks + image + _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.fileExtensionBlocks;\n                container.addDraggableItem(new _DraggableItem__WEBPACK_IMPORTED_MODULE_2__.DraggableItem(type, imagePathUrl));\n            });\n            this_1.element.appendChild(container.getHTMLElement());\n        };\n        var this_1 = this;\n        for (var type in _data_Blocks__WEBPACK_IMPORTED_MODULE_1__.blocks) {\n            _loop_1(type);\n        }\n    };\n    return MapToolbox;\n}(_contracts_ui_UIRenderableElement__WEBPACK_IMPORTED_MODULE_0__.UIRenderableElement));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/MapToolbox.ts?");

/***/ }),

/***/ "./src/ui/options/GridBorderOption.ts":
/*!********************************************!*\
  !*** ./src/ui/options/GridBorderOption.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridBorderOption: () => (/* binding */ GridBorderOption)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contracts/ui/UIUserOption */ \"./src/contracts/ui/UIUserOption.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GridBorderOption = /** @class */ (function (_super) {\n    __extends(GridBorderOption, _super);\n    function GridBorderOption(elementId, mapGrid) {\n        var _this = _super.call(this, elementId) || this;\n        _this.element.checked = false;\n        _this.onChange(function () {\n            mapGrid.toggleGridBorders();\n        });\n        return _this;\n    }\n    GridBorderOption.prototype.getValue = function () {\n        return this.element.value;\n    };\n    return GridBorderOption;\n}(_contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__.UIUserOption));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/options/GridBorderOption.ts?");

/***/ }),

/***/ "./src/ui/options/GridSizeOption.ts":
/*!******************************************!*\
  !*** ./src/ui/options/GridSizeOption.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridSizeOption: () => (/* binding */ GridSizeOption)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contracts/ui/UIUserOption */ \"./src/contracts/ui/UIUserOption.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GridSizeOption = /** @class */ (function (_super) {\n    __extends(GridSizeOption, _super);\n    function GridSizeOption(elementId, mapGrid) {\n        var _this = _super.call(this, elementId) || this;\n        _this.onChange(function () {\n            var _a;\n            _a = _this.getValue().split('x').map(Number), _this.width = _a[0], _this.height = _a[1];\n            mapGrid.generateGrid(_this.width, _this.height);\n        });\n        return _this;\n    }\n    GridSizeOption.prototype.getValue = function () {\n        return this.element.value;\n    };\n    return GridSizeOption;\n}(_contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__.UIUserOption));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/options/GridSizeOption.ts?");

/***/ }),

/***/ "./src/ui/options/LoadMapOption.ts":
/*!*****************************************!*\
  !*** ./src/ui/options/LoadMapOption.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadMapOption: () => (/* binding */ LoadMapOption)\n/* harmony export */ });\n/* harmony import */ var _contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contracts/ui/UIUserOption */ \"./src/contracts/ui/UIUserOption.ts\");\n/* harmony import */ var _data_StoredMaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/StoredMaps */ \"./src/data/StoredMaps.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar LoadMapOption = /** @class */ (function (_super) {\n    __extends(LoadMapOption, _super);\n    function LoadMapOption(elementId, mapGrid) {\n        var _this = _super.call(this, elementId) || this;\n        _this.onChange(function () {\n            if (_this.getValue() === \"-1\") {\n                mapGrid.generateGrid(4, 4);\n            }\n            else {\n                _this.loadMap(mapGrid);\n            }\n        });\n        return _this;\n    }\n    LoadMapOption.prototype.getValue = function () {\n        return this.element.value;\n    };\n    /**\n     * Generates a new map based on the stored map value\n     *\n     * @param mapGrid\n     */\n    LoadMapOption.prototype.loadMap = function (mapGrid) {\n        var mapIndex = Number.parseInt(this.getValue());\n        mapGrid.generateFromStoredMap(_data_StoredMaps__WEBPACK_IMPORTED_MODULE_1__.storedMaps[mapIndex]);\n    };\n    return LoadMapOption;\n}(_contracts_ui_UIUserOption__WEBPACK_IMPORTED_MODULE_0__.UIUserOption));\n\n\n\n//# sourceURL=webpack://rl-interactive-path-finding/./src/ui/options/LoadMapOption.ts?");

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