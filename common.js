"use strict";
(self["webpackChunkgenexus_web_application"] = self["webpackChunkgenexus_web_application"] || []).push([["common"],{

/***/ 6153:
/*!******************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/_commonjsHelpers-7b8ed50b.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ commonjsGlobal),
/* harmony export */   "c": () => (/* binding */ createCommonjsModule)
/* harmony export */ });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
    return commonjsRequire();
  }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}




/***/ }),

/***/ 9438:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/css-variables-watcher-cf910941.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ cssVariablesWatcher),
/* harmony export */   "d": () => (/* binding */ debounce),
/* harmony export */   "g": () => (/* binding */ getFileNameWithoutExtension),
/* harmony export */   "o": () => (/* binding */ overrideMethod)
/* harmony export */ });
function debounce(func, wait, immediate = false) {
    let timeout;
    return function (...args) {
        const later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }.bind(this);
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
/*  This functions overrides a method adding calls before (`before()`) and
    after (`after()`)
*/
function overrideMethod(component, methodName, { before, after }) {
    const oldMethod = component[methodName];
    component[methodName] = () => {
        if (before !== undefined) {
            before();
        }
        if (oldMethod !== undefined) {
            oldMethod.call(component);
        }
        if (after !== undefined) {
            after();
        }
    };
}
function getFileNameWithoutExtension(filePath) {
    /*  If the function is called in the same folder as the file,
        lastIndexOf("/") might return -1, but since we add 1 to the result, the
        value of fileNameStartIndex will be 0.
  
        If lastIndexOf("/") >= 0, it means that filePath has at least one "/" and
        adding 1 to the result of the function will return the index where the
        fileName starts.
    */
    const fileNameStartIndex = filePath.lastIndexOf("/") + 1;
    // We store the fileName that could have extension
    const fileName = filePath.substring(fileNameStartIndex);
    const extensionIndex = fileName.lastIndexOf(".");
    // If the file does not have extension
    if (extensionIndex === -1) {
        return fileName;
    }
    // Returns the name between the last "/" and the last "." of the `fileName`
    return fileName.substring(0, extensionIndex);
}

function cssVariablesWatcher(component, properties) {
    const updatePropertiesFromCss = debounce(function () {
        for (const prop of properties) {
            const propCssValue = getComputedStyle(component.element)
                .getPropertyValue(prop.cssVariableName)
                .trim();
            if (propCssValue && component[prop.propertyName] !== propCssValue) {
                component[prop.propertyName] = propCssValue;
            }
        }
    }, 100);
    // Set up a MutationObserver to monitor changes on style and class attributes.
    // When a change occurs on this attributes, the properties listed in
    // properties are updated with their corresponding CSS variables values.
    // The properties will be kept in sync with the CSS variables values.
    // The properties must have the mutable flag set to true.
    const classObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "attributes" &&
                (mutation.attributeName === "class" ||
                    mutation.attributeName === "style")) {
                updatePropertiesFromCss();
            }
        }
    });
    // componentDidLoad, componentDidUpdate and componentDidUnload are overriden
    // to start and end observing the mutations, and to update the properties values.
    overrideMethod(component, "componentDidLoad", {
        after: () => updatePropertiesFromCss(),
        before: () => {
            classObserver.observe(component.element, {
                attributes: true,
                childList: false,
                subtree: false
            });
        }
    });
    overrideMethod(component, "componentDidUpdate", {
        after: () => updatePropertiesFromCss()
    });
    overrideMethod(component, "componentDidUnload", {
        before: () => classObserver.disconnect()
    });
}




/***/ }),

/***/ 1989:
/*!***********************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/grid-base-bc611296.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ GridBaseHelper)
/* harmony export */ });
/* harmony import */ var _highlightable_e5a00dd1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlightable-e5a00dd1.js */ 6847);


class GridBaseHelper {
    static init(component) {
        (0,_highlightable_e5a00dd1_js__WEBPACK_IMPORTED_MODULE_0__.m)(component);
    }
    static hostData(cmp) {
        return {
            class: {
                "gx-grid-base": true,
                "gx-grid-empty": this.isEmptyGrid(cmp),
                "gx-grid-empty-loading": cmp.loadingState === "loading" && cmp.recordCount <= 0,
                "gx-grid-loading": cmp.loadingState === "loading"
            }
        };
    }
    static isEmptyGrid(cmp) {
        return cmp.recordCount === 0 && cmp.loadingState === "loaded";
    }
}
GridBaseHelper.GRID_BASE_CLASSNAME = "gx-grid-base";




/***/ }),

/***/ 6847:
/*!***************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/highlightable-e5a00dd1.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ makeHighlightable)
/* harmony export */ });
const HIGHLIGHT_EVENT_NAME = "highlight";
const UNHIGHTLIGHT_EVENT_NAME = "unhighlight";
const HIGHLIGHT_CLASS_NAME = "gx-highlighted";
let isSetup = false;
function makeHighlightable(component) {
    if (component.highlightable) {
        if (!isSetup) {
            isSetup = true;
            setup();
        }
        component.element.addEventListener(HIGHLIGHT_EVENT_NAME, (event) => {
            event.stopPropagation();
            component.element.classList.add(HIGHLIGHT_CLASS_NAME);
        });
        component.element.addEventListener(UNHIGHTLIGHT_EVENT_NAME, (event) => {
            event.stopPropagation();
            component.element.classList.remove(HIGHLIGHT_CLASS_NAME);
        });
    }
}
function setup() {
    setupEvent("mousedown", "mouseup", "mouseout");
    setupEvent("touchstart", "touchend", "touchcancel");
}
function setupEvent(startEventName, endEventName1, endEventName2) {
    document.body.addEventListener(startEventName, startEvent => {
        fireCustomEvent(HIGHLIGHT_EVENT_NAME, startEvent.target);
        const mouseUpHandler = endEvent => {
            fireCustomEvent(UNHIGHTLIGHT_EVENT_NAME, endEvent.target);
            document.body.removeEventListener(endEventName1, mouseUpHandler);
            document.body.removeEventListener(endEventName2, mouseUpHandler);
        };
        document.body.addEventListener(endEventName1, mouseUpHandler);
        document.body.addEventListener(endEventName2, mouseUpHandler);
    });
}
function fireCustomEvent(eventName, element) {
    const highlightEvent = new CustomEvent(eventName, {
        bubbles: true
    });
    element.dispatchEvent(highlightEvent);
}




/***/ }),

/***/ 839:
/*!****************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/image-position-f497f3df.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ imagePositionClass),
/* harmony export */   "h": () => (/* binding */ hideMainImageWhenDisabledClass),
/* harmony export */   "i": () => (/* binding */ imagePositionRender)
/* harmony export */ });
/* harmony import */ var _index_10623738_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-10623738.js */ 9689);


function imagePositionRender(slots) {
    return [slots.mainImage, slots.disabledImage, (0,_index_10623738_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, slots.default)];
}
const DEFAULT_IMAGE_POSITION = "above";
function imagePositionClass(imagePosition) {
    return `gx-image-position--${imagePosition || DEFAULT_IMAGE_POSITION}`;
}
const hideMainImageWhenDisabledClass = "gx-image-position--hide-main";




/***/ }),

/***/ 481:
/*!************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/line-clamp-b4163b3c.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ makeLinesClampable)
/* harmony export */ });
/* harmony import */ var _css_variables_watcher_cf910941_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-watcher-cf910941.js */ 9438);


function makeLinesClampable(component, contentContainerElementSelector, lineMeasuringElementSelector) {
    // Used to know the sizes of the `content-container`
    let contentContainerElement;
    // Used to measure the line height
    let lineMeasuringElement;
    // Used to keep the state of the component
    let contentContainerHeight = -1;
    let lineMeasuringHeight = -1;
    const applyLineClamp = (0,_css_variables_watcher_cf910941_js__WEBPACK_IMPORTED_MODULE_0__.d)(function () {
        requestAnimationFrame(function applyLineClampImpl() {
            const currentContentContainerHeight = contentContainerElement.clientHeight;
            const currentLineMeasuringHeight = lineMeasuringElement.clientHeight;
            /*  If the container height and the line height have not been changed,
                there is not need to update `component.maxLines`
            */
            if (contentContainerHeight == currentContentContainerHeight &&
                lineMeasuringHeight == currentLineMeasuringHeight) {
                return;
            }
            // Stores the current height of the content container and line measurement
            contentContainerHeight = currentContentContainerHeight;
            lineMeasuringHeight = currentLineMeasuringHeight;
            // At least, one line will be displayed
            component.maxLines = Math.max(Math.trunc(currentContentContainerHeight / lineMeasuringHeight), 1);
        });
    }, 100);
    let resizeObserverContainer = null;
    let resizeObserverLineHeight = null;
    if (component.lineClamp) {
        (0,_css_variables_watcher_cf910941_js__WEBPACK_IMPORTED_MODULE_0__.o)(component, "componentDidLoad", {
            before: () => {
                contentContainerElement = component.element.querySelector(contentContainerElementSelector);
                lineMeasuringElement = component.element.querySelector(lineMeasuringElementSelector);
                if (contentContainerElement === null || lineMeasuringElement === null) {
                    return;
                }
                /*  If the `content-container` resizes, it checks if it is necessary to
                    update `component.maxLines`
                */
                resizeObserverContainer = new ResizeObserver(() => {
                    applyLineClamp();
                });
                /*  If the `font-size` changes, it checks if it is necessary to update
                    `component.maxLines`
                */
                resizeObserverLineHeight = new ResizeObserver(() => {
                    applyLineClamp();
                });
                // Observe the `content-container` and line height
                resizeObserverContainer.observe(component.element);
                resizeObserverLineHeight.observe(lineMeasuringElement);
            }
        });
    }
    (0,_css_variables_watcher_cf910941_js__WEBPACK_IMPORTED_MODULE_0__.o)(component, "disconnectedCallback", {
        before: () => {
            if (resizeObserverContainer !== null) {
                resizeObserverContainer.disconnect();
            }
            if (resizeObserverLineHeight !== null) {
                resizeObserverLineHeight.disconnect();
            }
        }
    });
    return {
        applyLineClamp
    };
}




/***/ }),

/***/ 1772:
/*!***********************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/swipeable-71a0e453.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ makeSwipeable)
/* harmony export */ });
function makeSwipeable(comp) {
    const element = comp.element;
    element.addEventListener("touchstart", startTouch);
    element.addEventListener("touchmove", moveTouch);
    let initialX = null;
    let initialY = null;
    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    }
    function moveTouch(e) {
        if (initialX === null) {
            return;
        }
        if (initialY === null) {
            return;
        }
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = initialX - currentX;
        const diffY = initialY - currentY;
        comp.swipe.emit(event);
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                comp.swipeLeft.emit(event);
            }
            else {
                // swiped right
                comp.swipeRight.emit(event);
            }
        }
        else {
            // sliding vertically
            if (diffY > 0) {
                // swiped up
                comp.swipeUp.emit(event);
            }
            else {
                // swiped down
                comp.swipeDown.emit(event);
            }
        }
        initialX = null;
        initialY = null;
    }
}




/***/ })

}]);
//# sourceMappingURL=common.js.map