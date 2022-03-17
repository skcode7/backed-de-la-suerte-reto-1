(self["webpackChunkgenexus_web_application"] = self["webpackChunkgenexus_web_application"] || []).push([["main"],{

/***/ 6619:
/*!****************************************!*\
  !*** ./src/app/Menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var app_gx_base_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/panel.component */ 4121);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ 1386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_global_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/base/global-events */ 7186);
/* harmony import */ var app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/auth/gam.service */ 5138);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/gx/base/app-bar.service */ 4643);











class MenuComponent extends app_gx_base_panel_component__WEBPACK_IMPORTED_MODULE_0__.PanelComponent {
    constructor(panelService, _globalevents, gam, app, nvg, activatedRoute, appBarService, cdr) {
        super(app, nvg, activatedRoute, cdr);
        this.panelService = panelService;
        this._globalevents = _globalevents;
        this.gam = gam;
        this.app = app;
        this.nvg = nvg;
        this.activatedRoute = activatedRoute;
        this.appBarService = appBarService;
        this.cdr = cdr;
        this.showNavbarOptions = false;
        this.goPage = (id, element) => {
            if (element) {
                const page = element.match(/tab\[([0-9]+)\]/i);
                if (page && page.length > 0) {
                    if (+page[1] === 1) {
                        this._GetEmoji();
                        return;
                    }
                    ;
                }
            }
        };
        // Actions
        this._GetEmoji = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const __aSt = this.startAction();
            try {
                yield this.navigate(['GetEmoji-Level_Detail'], __aSt);
            }
            catch (e) {
                this.processCompositeError(e);
            }
            finally {
                this.endAction(__aSt);
            }
        });
        this.g1 = null;
        this.initState(null);
    }
    initPanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appBarService.setNavigation({
                caption: "",
                className: "Menu",
                toggleButtonLabel: this.translate("Toggle Menu"),
                items: [
                    {
                        id: "_GetEmoji",
                        caption: "Get Emoji",
                        className: "MenuItem",
                        iconSrc: this.getImageSource(''),
                        onClick: this._GetEmoji,
                    }
                ]
            });
        });
    }
    loadPanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.nvg.emptyPrimaryOutlet()) {
                this._GetEmoji();
            }
        });
    }
    startEvents() {
        this.g1 = this._globalevents.subscribe('gx-standard-api-to-generator_showTarget', (...parms) => { this.callAction(this.goPage, ...parms); });
    }
    endEvents() {
        this._globalevents.unsubscribe(this.g1);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_gx_base_global_events__WEBPACK_IMPORTED_MODULE_2__.GlobalEvents), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_3__.GAMService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_4__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_5__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_6__.AppBarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["Menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
            _menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MenuComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] { display: flex; flex: 1; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsYUFBYSxFQUFFLE9BQU8sRUFBRSIsImZpbGUiOiJtZW51LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleDogMTsgfSJdfQ== */"] });
class MenuUIModel {
    constructor(host) {
        this._host = host;
    }
}
class MenuUIActions {
    constructor(host) {
        this._host = host;
    }
}


/***/ }),

/***/ 1386:
/*!**************************************!*\
  !*** ./src/app/Menu/menu.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var app_gx_base_panel_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/panel.service */ 8856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/auth/gam.service */ 5138);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);






class MenuService extends app_gx_base_panel_service__WEBPACK_IMPORTED_MODULE_0__.PanelService {
    constructor(http, _router, _loginService, _app) {
        super(_router, _loginService, _app);
        this.http = http;
        this._router = _router;
        this._loginService = _loginService;
        this._app = _app;
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_1__.GAMService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_2__.AppContainer)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 8952:
/*!***************************************!*\
  !*** ./src/app/app-home.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHome": () => (/* binding */ AppHome)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5755);
/* harmony import */ var app_gx_base_action_state_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/action-state.dt */ 246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);





class AppHome {
    constructor(activatedRoute, nvg) {
        this.activatedRoute = activatedRoute;
        this.nvg = nvg;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnInit() {
        this.nvg.navigateOption('Menu', 'target', 'top');
        this.nvg.navigate(['Menu'], app_gx_base_action_state_dt__WEBPACK_IMPORTED_MODULE_0__.ActionState.create("__AppInit", null));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AppHome.ɵfac = function AppHome_Factory(t) { return new (t || AppHome)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_1__.CompositeNavigation)); };
AppHome.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppHome, selectors: [["app-home"]], decls: 0, vars: 0, template: function AppHome_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/web/GlobalEvents */ 461);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_config_configurationState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/config/configurationState */ 1031);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2930);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6055);
/* harmony import */ var _app_settings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.settings.json */ 5639);
/* harmony import */ var app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/navigation/navigation-options-manager */ 1182);
/* harmony import */ var app_gx_base_view_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/base/view-manager */ 8704);
/* harmony import */ var app_gx_ui_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/ui/animations */ 3617);
/* harmony import */ var _gx_std_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gx/std/prefers-color-scheme */ 6741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var app_gx_ui_controls_progress_progress_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/gx/ui/controls/progress/progress.service */ 9619);
/* harmony import */ var app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/gx/base/app-bar.service */ 4643);
/* harmony import */ var app_gx_ui_controls_form_form_properties_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/gx/ui/controls/form/form-properties.directive */ 816);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/gx/ui/controls/component-host/component-host.component */ 7561);
/* harmony import */ var app_gx_ui_controls_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/gx/ui/controls/messages/messages.component */ 5449);
/* harmony import */ var app_gx_ui_controls_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/gx/ui/controls/progress/progress.component */ 9746);






















const _c0 = ["leftOutlet"];
const _c1 = ["rightOutlet"];
const _c2 = ["topOutlet"];
const _c3 = ["bottomOutlet"];
const _c4 = ["popupOutlet"];
function AppComponent_gx_navbar_0_gx_navbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "gx-navbar-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AppComponent_gx_navbar_0_gx_navbar_item_1_Template_gx_navbar_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13); const item_r11 = restoredCtx.$implicit; return item_r11.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](item_r11.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("iconSrc", item_r11.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@appBarItemEnterLeaveAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r11.caption, " ");
} }
function AppComponent_gx_navbar_0_gx_navbar_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "gx-navbar-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AppComponent_gx_navbar_0_gx_navbar_item_2_Template_gx_navbar_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16); const item_r14 = restoredCtx.$implicit; return item_r14.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](item_r14 == null ? null : item_r14.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("iconSrc", item_r14 == null ? null : item_r14.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("slot", item_r14 == null ? null : item_r14.slotName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r14 == null ? null : item_r14.caption, " ");
} }
function AppComponent_gx_navbar_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "gx-navbar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("toggleButtonClick", function AppComponent_gx_navbar_0_Template_gx_navbar_toggleButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r17.handleToggleButtonClick(); })("backButtonClick", function AppComponent_gx_navbar_0_Template_gx_navbar_backButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r19.handleBackButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AppComponent_gx_navbar_0_gx_navbar_item_1_Template, 2, 6, "gx-navbar-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, AppComponent_gx_navbar_0_gx_navbar_item_2_Template, 2, 6, "gx-navbar-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("caption", ctx_r0.appBarNavigation.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("toggleButtonLabel", ctx_r0.appBarNavigation.toggleButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r0.appBarNavigation.className)("showToggleButton", ctx_r0.appBarNavigation.navigationStyle === "slide" && ctx_r0.leftComponent !== null)("showBackButton", ctx_r0.appBarNavigation.showBackButton)("backButtonLabel", ctx_r0.app.translate("Back"))("singleLine", ctx_r0.applicationBarSingleLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.appBarNavigation.items)("ngForTrackBy", ctx_r0.trackAppBarItemById);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.appBarActions)("ngForTrackBy", ctx_r0.trackAppBarItemById);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function AppComponent_router_outlet_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "router-outlet");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@contentEnterLeaveAnimation", undefined);
} }
function AppComponent_gx_navbar_14_gx_navbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "gx-navbar-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AppComponent_gx_navbar_14_gx_navbar_item_1_Template_gx_navbar_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23); const item_r21 = restoredCtx.$implicit; return item_r21.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](item_r21.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("iconSrc", item_r21.iconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@appBarItemEnterLeaveAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r21.caption, " ");
} }
function AppComponent_gx_navbar_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "gx-navbar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AppComponent_gx_navbar_14_gx_navbar_item_1_Template, 2, 6, "gx-navbar-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r7.appBarNavigation.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r7.appBarNavigation.items)("ngForTrackBy", ctx_r7.trackAppBarItemById);
} }
const _c5 = function () { return { "main-layout": true }; };
const ApplicationSettings = _app_settings_json__WEBPACK_IMPORTED_MODULE_2__;
const DEFAULT_ISLOADING_UPDATE_DELAY = ApplicationSettings.DEFAULT_ISLOADING_UPDATE_DELAY || 300;
const appBarItemEnterLeaveAnimation = (0,app_gx_ui_animations__WEBPACK_IMPORTED_MODULE_5__.createFadeInOutAnimation)("appBarItemEnterLeaveAnimation");
const contentEnterLeaveAnimation = (0,app_gx_ui_animations__WEBPACK_IMPORTED_MODULE_5__.createEnterLeaveAnimation)("contentEnterLeaveAnimation", "auto");
class AppComponent {
    constructor(app, nvg, progress, document, appBarService) {
        this.app = app;
        this.nvg = nvg;
        this.progress = progress;
        this.document = document;
        this.appBarService = appBarService;
        this.leftVisible = false;
        this.rightVisible = false;
        this.topVisible = false;
        this.bottomVisible = false;
        this.popupVisible = false;
        this.topApplicationBarVisible = false;
        this.bottomApplicationBarVisible = false;
        this.applicationBarSingleLine = true;
        this.leftComponent = null;
        this.rightComponent = null;
        this.topComponent = null;
        this.bottomComponent = null;
        this.popupComponent = null;
        this.popupStyle = null;
        this.isLoading = false;
        this.appBarNavigation = {
            items: [],
        };
        this.appBarActions = [];
        this.appBarNavigationSubscription = this.appBarService.navigationChange.subscribe((navigation) => {
            setTimeout(() => {
                this.appBarNavigation = Object.assign(Object.assign({}, this.appBarNavigation), navigation);
                this.updateApplicationBarVisibility();
            });
        });
        this.appBarActionsSubscription = this.appBarService.actionsChange
            .subscribe((actions) => {
            setTimeout(() => {
                this.appBarActions = actions.map((action) => (Object.assign(Object.assign({}, action), { slotName: `${action.priority.toLowerCase()}-priority-action` })));
                this.updateApplicationBarVisibility();
            });
        });
    }
    adjustHeightOnMobileDevice() {
        const { innerHeight } = window;
        this.document.documentElement.style.setProperty('--vh', `${innerHeight}px`);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.document.documentElement.lang = "en";
            // If we are on a mobile device
            if (window.innerWidth <= 768) {
                this.adjustHeightOnMobileDevice();
                // We listen to the resize event
                window.addEventListener('resize', () => {
                    this.adjustHeightOnMobileDevice();
                }, { passive: true });
            }
            this.msgSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-standard-api-to-generator_msg", (id, msg, type) => {
                if (type.toLocaleLowerCase() === "nowait" ||
                    type.toLocaleLowerCase() === "status")
                    this.appMessage = {
                        id: id,
                        text: msg,
                        type: "message",
                        onConfirm: () => {
                            (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_msg_" + id + "_ok");
                        },
                    };
                else {
                    this.appMessage = {
                        id: id,
                        text: msg,
                        type: "error",
                        onConfirm: () => {
                            (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_msg_" + id + "_ok");
                        },
                    };
                }
            });
            this.confirmSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-standard-api-to-generator_confirm", (id, msg) => {
                this.appMessage = {
                    id: id,
                    text: msg,
                    type: "confirm",
                    onConfirm: () => {
                        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_confirm_" + id + "_ok");
                    },
                    onCancel: () => {
                        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_confirm_" + id + "_cancel");
                    },
                };
            });
            this.showTargetSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-standard-api-to-generator_showTarget", (id, element) => {
                this.showOutlet(element, true);
                (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_showTarget_" + id + "_ok");
            });
            this.hideTargetSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-standard-api-to-generator_hideTarget", (id, element) => {
                this.showOutlet(element, false);
                (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_hideTarget_" + id + "_ok");
            });
            this.dsSetOptionSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-standard-api-to-generator_dsSetOption", (id, name, value) => {
                this.dsSetOption(name, value);
                (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)("gx-standard-api-to-generator_dsSetOption_" + id + "_ok");
            });
            this.setOutletSubscription = (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)("gx-app-setOutlet", (outlet, component, options) => {
                this.setOutlet(outlet, component, options);
            });
            this.prefersColorSchemeSubscription = _gx_std_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_6__.PrefersColorScheme.getObservable().subscribe(() => {
                this.app.refreshUIContext();
            });
            this.progress.getObservable().subscribe((prog) => {
                this.appProgress = prog;
            });
            this.nvg.loadingStateChange$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.timer)(DEFAULT_ISLOADING_UPDATE_DELAY)))
                .subscribe((isLoading) => {
                setTimeout(() => {
                    this.isLoading = isLoading;
                });
            });
            _genexus_web_standard_functions_dist_lib_esm_config_configurationState__WEBPACK_IMPORTED_MODULE_1__.ConfigurationState.loadApplicationSettings(ApplicationSettings);
            this.app.setSession();
        });
    }
    ngOnDestroy() {
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.msgSubscription);
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.confirmSubscription);
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.showTargetSubscription);
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.hideTargetSubscription);
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.setOutletSubscription);
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(this.dsSetOptionSubscription);
        this.appBarNavigationSubscription.unsubscribe();
        this.appBarActionsSubscription.unsubscribe();
        this.prefersColorSchemeSubscription.unsubscribe();
    }
    onPopupClose() {
        if (this.popupVisible) {
            this.popupOutlet.cancel();
        }
    }
    showOutlet(target, value) {
        if (target === null) {
            // primary outlet
            if (value) {
                // hide secondaries to show it
                this.leftVisible = false;
                this.rightVisible = false;
                this.topVisible = false;
                this.bottomVisible = false;
            }
        }
        else {
            // secondary outlets
            target = target.toLowerCase();
            if (target === "left") {
                this.leftVisible = value;
            }
            else if (target === "right") {
                this.rightVisible = value;
            }
            else if (target === "top") {
                this.topVisible = value;
            }
            else if (target === "bottom") {
                this.bottomVisible = value;
            }
        }
    }
    setOutlet(target, component, options = null) {
        target = target.toLowerCase();
        if (target === "left") {
            this.leftComponent = component;
            this.leftOutlet.start();
        }
        else if (target === "right") {
            this.rightComponent = component;
            this.rightOutlet.start();
        }
        else if (target === "top") {
            this.topComponent = component;
            this.topOutlet.start();
        }
        else if (target === "bottom") {
            this.bottomComponent = component;
            this.bottomOutlet.start();
        }
        else if (target === "popup") {
            if (component) {
                this.setPopupOptions(options);
                this.popupComponent = component;
                this.popupVisible = true;
                this.popupOutlet.start();
            }
            else {
                this.setPopupOptions(options);
                this.popupComponent = null;
                this.popupVisible = false;
            }
        }
    }
    dsSetOption(name, value) {
        this.app.refreshUIContext();
    }
    setPopupOptions(options) {
        if (options) {
            this.popupStyle = {};
            this.popupStyle["max-width"] = "90vw";
            this.popupStyle["max-height"] = "70vh";
            if (options.size) {
                if (options.size === app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__.NavigationOptionsManager.TARGET_SIZE_SMALL_ID) {
                    this.popupStyle["height"] = "400px";
                }
                else if (options.size === app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__.NavigationOptionsManager.TARGET_SIZE_MEDIUM_ID) {
                    this.popupStyle["height"] = "500px";
                }
                else if (options.size === app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__.NavigationOptionsManager.TARGET_SIZE_LARGE_ID) {
                    this.popupStyle["height"] = "800px";
                }
            }
            else {
                this.popupStyle["min-height"] = "50vh";
            }
            if (options.width) {
                this.popupStyle["width"] = options.width;
            }
            if (options.width) {
                this.popupStyle["height"] = options.height;
            }
        }
    }
    updateApplicationBarVisibility() {
        const { appBarNavigation, appBarActions } = this;
        this.topApplicationBarVisible =
            appBarNavigation.visible &&
                (appBarNavigation.caption != null && appBarNavigation.caption.length > 0) ||
                (appBarNavigation.navigationStyle === app_gx_base_view_manager__WEBPACK_IMPORTED_MODULE_4__.NavigationStyle.Slide ||
                    appBarNavigation.items.length > 0 ||
                    appBarActions.length > 0);
        this.bottomApplicationBarVisible =
            appBarNavigation.visible && appBarNavigation.items.length > 0;
    }
    handleToggleButtonClick() {
        this.leftVisible = !this.leftVisible;
    }
    handleBackButtonClick() {
        if (this.appBarNavigation.onBackButtonClick) {
            this.appBarNavigation.onBackButtonClick();
        }
    }
    handleLeftTargetHiddenChange(event) {
        this.leftVisible = !event.detail;
    }
    handleRightTargetHiddenChange(event) {
        this.rightVisible = !event.detail;
    }
    handleTargetsBreakpointMatchCange(event) {
        this.nvg.updateVerticalTargetsBreakpointMatched(event.detail.matches);
    }
    trackAppBarItemById(index, item) {
        return item.id;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_7__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_8__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_gx_ui_controls_progress_progress_service__WEBPACK_IMPORTED_MODULE_9__.ProgressService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_10__.AppBarService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["my-app"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.leftOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.rightOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.topOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.bottomOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.popupOutlet = _t.first);
    } }, decls: 19, vars: 19, consts: [["gx-form-properties", "", "caption", "", 3, "caption", "ngClass", "showToggleButton", "showBackButton", "backButtonLabel", "singleLine", "toggleButtonLabel", "toggleButtonClick", "backButtonClick", 4, "ngIf"], [3, "ngClass", "topHidden", "rightHidden", "bottomHidden", "leftHidden", "leftHiddenChange", "rightHiddenChange", "verticalTargetsBreakpointMatchChange"], ["class", "ph-item", 4, "ngIf"], [4, "ngIf"], ["slot", "top", "id", "top", 3, "componentUri"], ["topOutlet", ""], [3, "message"], [3, "updateSettings"], ["slot", "left", "id", "left", 1, "vertical-target", 3, "componentUri"], ["leftOutlet", ""], ["slot", "right", "id", "right", 1, "vertical-target", 3, "componentUri"], ["rightOutlet", ""], ["slot", "bottom", "id", "bottom", 3, "componentUri"], ["bottomOutlet", ""], ["position", "bottom", "gx-form-properties", "", 3, "ngClass", 4, "ngIf"], [3, "opened", "close"], ["slot", "body"], ["id", "popup", 3, "ngStyle", "componentUri"], ["popupOutlet", ""], ["gx-form-properties", "", "caption", "", 3, "caption", "ngClass", "showToggleButton", "showBackButton", "backButtonLabel", "singleLine", "toggleButtonLabel", "toggleButtonClick", "backButtonClick"], ["slot", "navigation", 3, "class", "iconSrc", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "class", "iconSrc", "slot", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["slot", "navigation", 3, "iconSrc", "click"], [3, "iconSrc", "slot", "click"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-picture"], [1, "ph-row"], [1, "ph-col-6", "big"], [1, "ph-col-4", "empty", "big"], [1, "ph-col-2", "big"], [1, "ph-col-4"], [1, "ph-col-8", "empty"], [1, "ph-col-6"], [1, "ph-col-6", "empty"], ["position", "bottom", "gx-form-properties", "", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, AppComponent_gx_navbar_0_Template, 3, 11, "gx-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "gx-layout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("leftHiddenChange", function AppComponent_Template_gx_layout_leftHiddenChange_1_listener($event) { return ctx.handleLeftTargetHiddenChange($event); })("rightHiddenChange", function AppComponent_Template_gx_layout_rightHiddenChange_1_listener($event) { return ctx.handleRightTargetHiddenChange($event); })("verticalTargetsBreakpointMatchChange", function AppComponent_Template_gx_layout_verticalTargetsBreakpointMatchChange_1_listener($event) { return ctx.handleTargetsBreakpointMatchCange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, AppComponent_div_2_Template, 23, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, AppComponent_router_outlet_3_Template, 1, 1, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "gx-component-host", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "gx-messages", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "gx-progress", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "gx-component-host", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "gx-component-host", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "gx-component-host", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, AppComponent_gx_navbar_14_Template, 2, 3, "gx-navbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "gx-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("close", function AppComponent_Template_gx_modal_close_15_listener() { return ctx.onPopupClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "gx-component-host", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.topApplicationBarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](18, _c5))("topHidden", !ctx.topVisible)("rightHidden", !ctx.rightVisible)("bottomHidden", !ctx.bottomVisible)("leftHidden", !ctx.leftVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("componentUri", ctx.topComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("message", ctx.appMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("updateSettings", ctx.appProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("componentUri", ctx.leftComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("componentUri", ctx.rightComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("componentUri", ctx.bottomComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bottomApplicationBarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("opened", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", ctx.popupStyle)("componentUri", ctx.popupComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, app_gx_ui_controls_form_form_properties_directive__WEBPACK_IMPORTED_MODULE_11__.FormPropertiesDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterOutlet, app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_12__.ComponentHostComponent, app_gx_ui_controls_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__.MessagesComponent, app_gx_ui_controls_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__.ProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZXMuY3NzIn0= */", "[_nghost-%COMP%] { display: block; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0iXX0= */"], data: { animation: [
            appBarItemEnterLeaveAnimation,
            contentEnterLeaveAnimation,
        ] } });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ 1024);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-cookie-service */ 1016);
/* harmony import */ var _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genexus/ngx-virtual-scroller */ 9034);
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.module */ 3242);
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.module */ 765);
/* harmony import */ var app_gx_ui_controls_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/ui/controls/messages/messages.component */ 5449);
/* harmony import */ var app_gx_ui_controls_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/ui/controls/progress/progress.component */ 9746);
/* harmony import */ var app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/gx/ui/controls/timer/timer.component */ 9159);
/* harmony import */ var app_gx_ui_controls_action_group_action_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/gx/ui/controls/action-group/action-group.component */ 9399);
/* harmony import */ var app_gx_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/gx/auth/auth-interceptor */ 127);
/* harmony import */ var app_gx_base_visibility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/gx/base/visibility.service */ 2435);
/* harmony import */ var app_app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/app.routing */ 9668);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/app.component */ 721);
/* harmony import */ var app_app_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/app-home.component */ 8952);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../environments/environment */ 4766);
/* harmony import */ var _gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gx/base/app-bar.service */ 4643);
/* harmony import */ var _gx_base_app_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gx/base/app-container */ 3298);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService,
        app_gx_base_visibility_service__WEBPACK_IMPORTED_MODULE_9__.VisibilityService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: app_gx_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__.AuthInterceptor,
            multi: true
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_16__.APP_INITIALIZER,
            useFactory: initializeAppFactory,
            deps: [_gx_base_app_container__WEBPACK_IMPORTED_MODULE_15__.AppContainer],
            multi: true
        },
        _gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_14__.AppBarService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            app_app_routing__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _common_module__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _main_module__WEBPACK_IMPORTED_MODULE_3__.MainModule,
            _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__.VirtualScrollerModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule.register("ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__.environment.production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent,
        app_app_home_component__WEBPACK_IMPORTED_MODULE_12__.AppHome,
        app_gx_ui_controls_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__.MessagesComponent,
        app_gx_ui_controls_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__.ProgressComponent,
        app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__.TimerComponent,
        app_gx_ui_controls_action_group_action_group_component__WEBPACK_IMPORTED_MODULE_7__.ActionGroupComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        app_app_routing__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _common_module__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _main_module__WEBPACK_IMPORTED_MODULE_3__.MainModule,
        _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_1__.VirtualScrollerModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule] }); })();
function initializeAppFactory(app) {
    return () => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
        yield app.setLanguage("English");
        yield app.initApp("Reto Malandriner 2022");
        yield app.initTheme("carminesd");
        return app.initTranslations();
    });
}


/***/ }),

/***/ 9668:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleRoutes": () => (/* binding */ moduleRoutes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_app_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app-home.component */ 8952);
/* harmony import */ var app_Menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/Menu/menu.component */ 6619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);





const moduleRoutes = [
    { path: "", component: app_app_home_component__WEBPACK_IMPORTED_MODULE_0__.AppHome },
    { path: "Menu", component: app_Menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent },
    {
        path: "app",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared.module */ 5687)).then(mod => mod.SharedModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(moduleRoutes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9783:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _app_settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.settings.json */ 5639);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ 4766);


class Settings {
    static get GAM_CLIENT_ID() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_CLIENT_ID;
    }
    static get GAM_CLIENT_SECRET() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_CLIENT_SECRET;
    }
    static get GAM_CLIENT_LOGIN() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_CLIENT_LOGIN;
    }
    static get GAM_CLIENT_NOTAUTHORIZED() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_CLIENT_NOTAUTHORIZED;
    }
    static get GAM_CLIENT_CHANGEPASSWORD() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_CLIENT_CHANGEPASSWORD;
    }
    static get GAM_ANONYMOUS_USER() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.GAM_ANONYMOUS_USER;
    }
    static get DEBUG_ENABLED() {
        return Settings.SERVICE_DEBUG;
    }
    static get WEBROOT_URL() {
        return (Settings.SERVICE_HOSTNAME +
            Settings.WEB_BASE_PATH +
            Settings.WEB_MAIN_OBJECT);
    }
    static get SERVICE_API_ENDPOINT() {
        return (Settings.SERVICE_HOSTNAME +
            Settings.SERVICE_BASE_PATH +
            Settings.SERVICE_REST_PATH);
    }
    static get OAUTH_ENDPOINT() {
        return (Settings.SERVICE_HOSTNAME +
            Settings.SERVICE_BASE_PATH +
            Settings.SERVICE_OAUTH_PATH);
    }
    static get GXOBJECT_ENDPOINT() {
        return Settings.WEB_BASE_PATH + "gxobject";
    }
    static get WEBAPP_BASE() {
        return Settings.SERVICE_HOSTNAME;
    }
    static get loadComponentsWhenOnSight() {
        return true;
    }
    static get applicationLayouts() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.APPLICATION_LAYOUTS;
    }
    static get applicationLanguages() {
        return _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.APPLICATION_LANGUAGES;
    }
}
Settings.SERVICE_DEBUG = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.SERVICE_DEBUG;
Settings.SERVICE_HOSTNAME = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.serviceUrl || _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.SERVICE_HOSTNAME;
Settings.SERVICE_BASE_PATH = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.SERVICE_BASE_PATH;
Settings.SERVICE_REST_PATH = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.SERVICE_REST_PATH;
Settings.SERVICE_OAUTH_PATH = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.SERVICE_OAUTH_PATH;
Settings.WEB_BASE_PATH = Settings.SERVICE_BASE_PATH + _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.WEB_RELATIVE_PATH;
Settings.WEB_MAIN_OBJECT = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.WEB_MAIN_OBJECT;
Settings.DEFAULT_LANGUAGE = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LANGUAGE;
Settings.DEFAULT_NAVIGATION_STYLE = _app_settings_json__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_NAVIGATION_STYLE;


/***/ }),

/***/ 3242:
/*!**********************************!*\
  !*** ./src/app/common.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonModule": () => (/* binding */ CommonModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/ui/controls/component-host/component-host.component */ 7561);
/* harmony import */ var app_gx_ui_controls_component_host_component_outlet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/ui/controls/component-host/component-outlet.directive */ 4016);
/* harmony import */ var app_gx_ui_controls_form_form_properties_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/ui/controls/form/form-properties.directive */ 816);
/* harmony import */ var app_gx_base_visible_with_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/base/visible-with.directive */ 5133);
/* harmony import */ var app_gx_ui_controls_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/ui/controls/image-upload/image-upload.component */ 8321);
/* harmony import */ var app_gx_ui_controls_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/ui/controls/file-upload/file-upload.component */ 9213);
/* harmony import */ var app_gx_ui_controls_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/gx/ui/controls/geolocation/geolocation.component */ 8444);
/* harmony import */ var app_gx_ui_controls_audio_controller_audio_controller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/gx/ui/controls/audio-controller/audio-controller.component */ 8311);
/* harmony import */ var _gx_http_url_caching_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gx/http/url-caching-interceptor */ 9038);
/* harmony import */ var _gx_utils_resolve_relative_url_resolve_relative_url_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gx/utils/resolve-relative-url/resolve-relative-url.pipe */ 3773);
/* harmony import */ var _gx_utils_uri_cache_load_cached_uri_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gx/utils/uri-cache/load-cached-uri.pipe */ 7805);
/* harmony import */ var _gx_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gx/utils/translate.pipe */ 3270);
/* harmony import */ var _gx_utils_default_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gx/utils/default.pipe */ 1453);
/* harmony import */ var _gx_utils_not_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gx/utils/not.pipe */ 4233);
/* harmony import */ var _gx_utils_date_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gx/utils/date-to-iso-string.pipe */ 6960);
/* harmony import */ var _gx_utils_datetime_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gx/utils/datetime-to-iso-string.pipe */ 3906);
/* harmony import */ var _gx_utils_time_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gx/utils/time-to-iso-string.pipe */ 5410);
/* harmony import */ var _gx_utils_guid_to_string_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gx/utils/guid-to-string.pipe */ 7279);
/* harmony import */ var _gx_utils_geography_to_coords_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gx/utils/geography-to-coords.pipe */ 7600);
/* harmony import */ var _gx_utils_json_to_gauge_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gx/utils/json-to-gauge.pipe */ 2367);
/* harmony import */ var _gx_utils_class_split_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gx/utils/class-split.pipe */ 5394);
/* harmony import */ var _gx_utils_image_source_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gx/utils/image-source.pipe */ 4100);
/* harmony import */ var _gx_utils_image_to_url_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gx/utils/image-to-url.pipe */ 4858);
/* harmony import */ var _gx_utils_binary_to_url_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gx/utils/binary-to-url.pipe */ 2476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 1109);



























class CommonModule {
}
CommonModule.ɵfac = function CommonModule_Factory(t) { return new (t || CommonModule)(); };
CommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: CommonModule });
CommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: _gx_http_url_caching_interceptor__WEBPACK_IMPORTED_MODULE_8__.HttpInterceptorProviders, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](CommonModule, { declarations: [app_gx_ui_controls_component_host_component_outlet_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentOutletDirective,
        app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_0__.ComponentHostComponent,
        app_gx_ui_controls_form_form_properties_directive__WEBPACK_IMPORTED_MODULE_2__.FormPropertiesDirective,
        app_gx_base_visible_with_directive__WEBPACK_IMPORTED_MODULE_3__.VisibleWith,
        app_gx_ui_controls_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__.ImageUploadComponent,
        app_gx_ui_controls_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.FileUploadComponent,
        app_gx_ui_controls_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent,
        app_gx_ui_controls_audio_controller_audio_controller_component__WEBPACK_IMPORTED_MODULE_7__.AudioControllerComponent,
        _gx_utils_resolve_relative_url_resolve_relative_url_pipe__WEBPACK_IMPORTED_MODULE_9__.ResolveRelativeUrlPipe,
        _gx_utils_uri_cache_load_cached_uri_pipe__WEBPACK_IMPORTED_MODULE_10__.LoadCachedUriPipe,
        _gx_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe,
        _gx_utils_default_pipe__WEBPACK_IMPORTED_MODULE_12__.DefaultPipe,
        _gx_utils_date_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_14__.DateToISOStringPipe,
        _gx_utils_datetime_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_15__.DatetimeToISOStringPipe,
        _gx_utils_time_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_16__.TimeToISOStringPipe,
        _gx_utils_guid_to_string_pipe__WEBPACK_IMPORTED_MODULE_17__.GuidToStringPipe,
        _gx_utils_geography_to_coords_pipe__WEBPACK_IMPORTED_MODULE_18__.GeographyToCoordsPipe,
        _gx_utils_json_to_gauge_pipe__WEBPACK_IMPORTED_MODULE_19__.JsonToGaugePipe,
        _gx_utils_not_pipe__WEBPACK_IMPORTED_MODULE_13__.NotPipe,
        _gx_utils_class_split_pipe__WEBPACK_IMPORTED_MODULE_20__.ClassSplitPipe,
        _gx_utils_image_source_pipe__WEBPACK_IMPORTED_MODULE_21__.ImageSourcePipe,
        _gx_utils_image_to_url_pipe__WEBPACK_IMPORTED_MODULE_22__.ImageToURLPipe,
        _gx_utils_binary_to_url_pipe__WEBPACK_IMPORTED_MODULE_23__.BinaryToURLPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule], exports: [app_gx_ui_controls_component_host_component_outlet_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentOutletDirective,
        app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_0__.ComponentHostComponent,
        app_gx_ui_controls_form_form_properties_directive__WEBPACK_IMPORTED_MODULE_2__.FormPropertiesDirective,
        app_gx_base_visible_with_directive__WEBPACK_IMPORTED_MODULE_3__.VisibleWith,
        app_gx_ui_controls_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__.ImageUploadComponent,
        app_gx_ui_controls_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_5__.FileUploadComponent,
        app_gx_ui_controls_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_6__.GeolocationComponent,
        app_gx_ui_controls_audio_controller_audio_controller_component__WEBPACK_IMPORTED_MODULE_7__.AudioControllerComponent,
        _gx_utils_resolve_relative_url_resolve_relative_url_pipe__WEBPACK_IMPORTED_MODULE_9__.ResolveRelativeUrlPipe,
        _gx_utils_uri_cache_load_cached_uri_pipe__WEBPACK_IMPORTED_MODULE_10__.LoadCachedUriPipe,
        _gx_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe,
        _gx_utils_default_pipe__WEBPACK_IMPORTED_MODULE_12__.DefaultPipe,
        _gx_utils_date_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_14__.DateToISOStringPipe,
        _gx_utils_datetime_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_15__.DatetimeToISOStringPipe,
        _gx_utils_time_to_iso_string_pipe__WEBPACK_IMPORTED_MODULE_16__.TimeToISOStringPipe,
        _gx_utils_guid_to_string_pipe__WEBPACK_IMPORTED_MODULE_17__.GuidToStringPipe,
        _gx_utils_geography_to_coords_pipe__WEBPACK_IMPORTED_MODULE_18__.GeographyToCoordsPipe,
        _gx_utils_json_to_gauge_pipe__WEBPACK_IMPORTED_MODULE_19__.JsonToGaugePipe,
        _gx_utils_not_pipe__WEBPACK_IMPORTED_MODULE_13__.NotPipe,
        _gx_utils_class_split_pipe__WEBPACK_IMPORTED_MODULE_20__.ClassSplitPipe,
        _gx_utils_image_source_pipe__WEBPACK_IMPORTED_MODULE_21__.ImageSourcePipe,
        _gx_utils_image_to_url_pipe__WEBPACK_IMPORTED_MODULE_22__.ImageToURLPipe,
        _gx_utils_binary_to_url_pipe__WEBPACK_IMPORTED_MODULE_23__.BinaryToURLPipe] }); })();


/***/ }),

/***/ 127:
/*!*********************************************!*\
  !*** ./src/app/gx/auth/auth-interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6099);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 9783);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1325);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3800);
/* harmony import */ var _std_client_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../std/client-storage */ 9779);
/* harmony import */ var _base_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/panel.component */ 4121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 4594);










class AuthInterceptor {
    constructor(_nvg, _authService) {
        this._nvg = _nvg;
        this._authService = _authService;
        this._refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    intercept(req, next) {
        if (req.url.endsWith("/access_token")) {
            return next.handle(req);
        }
        else {
            return next.handle(this.addAuthToken(req)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error, caught) => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                    if (this.authorizationMissing(error)) { // Missing or invalid authorization token
                        if (_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_ANONYMOUS_USER) {
                            // Login as anonymous user and continue
                            return this.loginAnonymous().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
                                return next.handle(this.addAuthToken(req));
                            }));
                        }
                        else {
                            // Ask for login and continue
                            return this.navigateAndContinue(_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_LOGIN).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
                                return next.handle(this.addAuthToken(req));
                            }));
                        }
                    }
                    else if (this.notAuthorized(error)) { // Not authorized 
                        // Show "not authorized panel" and continue
                        return this.navigateAndContinue(_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_NOTAUTHORIZED).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
                            return next.handle(this.addAuthToken(req));
                        }));
                    }
                    else if (this.mustRefreshToken(error)) { // Token expired
                        return this.refreshToken().pipe(
                        // Refresh token and continue
                        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => {
                            return next.handle(this.addAuthToken(req));
                        }));
                    }
                    else {
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(error);
                    }
                }
                return caught;
            }));
        }
    }
    loginAnonymous() {
        this._refreshSubject.subscribe({
            complete: () => {
                this._refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
            }
        });
        if (this._refreshSubject.observers.length === 1) {
            this._authService.loginAnonymous().subscribe(this._refreshSubject);
        }
        return this._refreshSubject;
    }
    refreshToken() {
        this._refreshSubject.subscribe({
            complete: () => {
                this._refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
            }
        });
        if (this._refreshSubject.observers.length > 0) {
            this._authService.refreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error, caught) => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse && error.status === 401) {
                    return this.navigateAndContinue(_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_LOGIN);
                }
                return caught;
            })).subscribe(this._refreshSubject);
        }
        return this._refreshSubject;
    }
    navigateAndContinue(navigateTo) {
        this._refreshSubject.subscribe({
            complete: () => {
                this._refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
            }
        });
        if (this._refreshSubject.observers.length > 0) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.navigateEvent(navigateTo)).subscribe(this._refreshSubject);
        }
        return this._refreshSubject;
    }
    navigateEvent(navigateTo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                const __aSt = _base_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent.activePanel.startAction();
                yield this._nvg.navigateForResult([navigateTo], __aSt);
                _base_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent.activePanel.endAction(__aSt);
                resolve();
            }));
        });
    }
    authorizationMissing(e) {
        return (e.status &&
            e.status === 401 &&
            e.error && e.error.error &&
            (e.error.error.code === "21" ||
                e.error.error.message === "This service needs an Authorization Header"));
    }
    notAuthorized(e) {
        return (e.status &&
            e.status === 403 &&
            e.statusText.startsWith("Unauthorized"));
    }
    mustRefreshToken(e) {
        const refresh_token = _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Get('gx.GAM.refresh_token');
        return (refresh_token !== null && refresh_token.length > 0 &&
            e.status &&
            e.status === 403);
    }
    addAuthToken(req) {
        const token = this._authService.getAuthToken();
        if (token) {
            return req.clone({
                setHeaders: {
                    'Authorization': 'OAuth ' + token,
                    'Genexus-Agent': 'SmartDevice Application'
                }
            });
        }
        else {
            return req;
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_3__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4594:
/*!*****************************************!*\
  !*** ./src/app/gx/auth/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3815);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1325);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 9783);
/* harmony import */ var _std_client_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../std/client-storage */ 9779);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9258);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/gxcore/client/client-information */ 8185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);









class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    loginAnonymous() {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'access_token';
        let body = "grant_type=device";
        body += "&client_id=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_ID;
        body += "&client_secret=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_SECRET;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'DeviceId': _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_2__.GeneXusClientClientInformation.id(),
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.access_token', response.access_token);
            if (response.refresh_token) {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.refresh_token', response.refresh_token);
            }
            else {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Remove('gx.GAM.refresh_token');
            }
            this.getUserInfo(response.access_token).subscribe(() => response.access_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    login(username, password) {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'access_token';
        let body = "client_id=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_ID;
        body += "&client_secret=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_SECRET;
        body += "&grant_type=password&username=" + username;
        body += "&password=" + password;
        body += "&scope=FullControl";
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.access_token', response.access_token);
            if (response.refresh_token) {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.refresh_token', response.refresh_token);
            }
            else {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Remove('gx.GAM.refresh_token');
            }
            this.getUserInfo(response.access_token).subscribe(() => response.access_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    loginExternal(type, username, password, additionalParameters = null) {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'access_token';
        let body = "client_id=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_ID;
        body += "&client_secret=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_SECRET;
        body += "&grant_type=" + type;
        body += "&username=" + username;
        body += "&password=" + password;
        body += "&scope=FullControl";
        if (additionalParameters) {
            body += "&additional_parameters=" + JSON.stringify(additionalParameters);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.access_token', response.access_token);
            this.getUserInfo(response.access_token).subscribe(() => response.access_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    loginV2(username, password, additionalParameters = null) {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'gam/v2.0/access_token';
        let body = "client_id=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_ID;
        body += "&client_secret=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_SECRET;
        body += "&grant_type=password";
        body += "&username=" + username;
        body += "&password=" + password;
        body += "&scope=gam_user_data";
        if (additionalParameters) {
            if (additionalParameters.Repository) {
                body += "&repository=" + additionalParameters.Repository;
            }
            if (additionalParameters.AuthenticationTypeName) {
                body += "&authentication_type_name=" + additionalParameters.AuthenticationTypeName;
            }
            if (additionalParameters.Properties && additionalParameters.Properties.length > 0) {
                body += "&properties=" + JSON.stringify(additionalParameters.Properties);
            }
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.access_token', response.access_token);
            if (response.refresh_token) {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.refresh_token', response.refresh_token);
            }
            else {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Remove('gx.GAM.refresh_token');
            }
            this.getUserInfo(response.access_token).subscribe(() => response.access_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    refreshToken() {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'access_token';
        let body = "grant_type=refresh_token";
        body += "&client_id=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_ID;
        body += "&client_secret=" + _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.GAM_CLIENT_SECRET;
        body += "&refresh_token=" + _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Get('gx.GAM.refresh_token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'DeviceId': _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_2__.GeneXusClientClientInformation.id(),
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.access_token', response.access_token);
            if (response.refresh_token) {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.GAM.refresh_token', response.refresh_token);
            }
            else {
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Remove('gx.GAM.refresh_token');
            }
            this.getUserInfo(response.access_token).subscribe(() => response.access_token);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    logout() {
        return this._http.post(_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'logout', "{}").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Remove('gx.GAM.access_token');
            window.location.reload();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    getUserInfo(token) {
        const url = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.OAUTH_ENDPOINT + 'userinfo';
        const body = "{}";
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Content-Type': 'application/json',
            'DeviceId': _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_2__.GeneXusClientClientInformation.id(),
            'Authorization': 'OAuth ' + token,
            'Genexus-Agent': 'SmartDevice Application'
        });
        return this._http.post(url, body, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            const userInfo = JSON.stringify(response);
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set("gx.GAM.gam_user", userInfo);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(userInfo);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }));
    }
    getAuthToken() {
        return _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Get('gx.GAM.access_token');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
class AdditionalParameters {
}
class AdditionalParametersProperty {
}


/***/ }),

/***/ 5138:
/*!****************************************!*\
  !*** ./src/app/gx/auth/gam.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAMService": () => (/* binding */ GAMService),
/* harmony export */   "ResponseError": () => (/* binding */ ResponseError),
/* harmony export */   "Error": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _gamuser_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamuser.dt */ 4690);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/msg */ 1648);
/* harmony import */ var _std_client_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../std/client-storage */ 9779);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ 5626);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/panel.component */ 4121);
/* harmony import */ var app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.settings */ 9783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ 4594);
/* harmony import */ var _ui_controls_progress_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/controls/progress/progress.service */ 9619);
/* harmony import */ var _navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/composite-navigation */ 2400);













class GAMService {
    constructor(_http, _authService, progress, _nvg) {
        this._http = _http;
        this._authService = _authService;
        this.progress = progress;
        this._nvg = _nvg;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let userInfo = _std_client_storage__WEBPACK_IMPORTED_MODULE_2__.ClientStorage.Get("gx.GAM.gam_user");
            if (!userInfo) {
                userInfo = yield this._authService.getUserInfo(null).toPromise();
            }
            const o = JSON.parse(userInfo);
            return (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClassFromExist)(new _gamuser_dt__WEBPACK_IMPORTED_MODULE_0__.GAMUser(), o);
        });
    }
    login(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this._authService.login(username, password).toPromise();
            }
            catch (e) {
                yield this.progress.hide();
                if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpErrorResponse && e.status === 401 && e.error.error.code === '23') {
                    yield (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_1__.msg)(e.error.error.message);
                    const __aSt = _base_panel_component__WEBPACK_IMPORTED_MODULE_4__.PanelComponent.activePanel.startAction();
                    yield this._nvg.navigate([app_app_settings__WEBPACK_IMPORTED_MODULE_5__.Settings.GAM_CLIENT_CHANGEPASSWORD], __aSt);
                    _base_panel_component__WEBPACK_IMPORTED_MODULE_4__.PanelComponent.activePanel.endAction(__aSt);
                }
                else {
                    yield (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_1__.msg)(e.error.error.message);
                    throw new _base_panel_component__WEBPACK_IMPORTED_MODULE_4__.CompositeCancel("Composite cancelled");
                }
            }
        });
    }
    loginExternal(type, username, password, additionalParameters = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this._authService.loginExternal(type, username, password, additionalParameters).toPromise();
            }
            catch (e) {
                yield this.progress.hide();
                yield (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_1__.msg)(e.error.error.message);
                throw new _base_panel_component__WEBPACK_IMPORTED_MODULE_4__.CompositeCancel("Composite cancelled");
            }
        });
    }
    registerAnonymous() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this._authService.loginAnonymous().toPromise();
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this._authService.logout().subscribe();
        });
    }
    getEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.getEmail();
        });
    }
    getId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.getId();
        });
    }
    getName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.getName();
        });
    }
    getLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.getLogin();
        });
    }
    getExternalId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.getExternalId();
        });
    }
    isAnonymous() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            return user.isAnonymous();
        });
    }
    isLogged() {
        const userToken = this._authService.getAuthToken();
        if (userToken && userToken.length > 0) {
            return true;
        }
        return false;
    }
}
GAMService.ɵfac = function GAMService_Factory(t) { return new (t || GAMService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ui_controls_progress_progress_service__WEBPACK_IMPORTED_MODULE_7__.ProgressService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_8__.CompositeNavigation)); };
GAMService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: GAMService, factory: GAMService.ɵfac, providedIn: 'root' });
class ResponseError {
}
class Error {
}


/***/ }),

/***/ 4690:
/*!***************************************!*\
  !*** ./src/app/gx/auth/gamuser.dt.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAMUser": () => (/* binding */ GAMUser)
/* harmony export */ });
class GAMUser {
    getId() {
        return this.GUID;
    }
    getEmail() {
        return this.EMail;
    }
    get() {
        return this;
    }
    getLogin() {
        return this.Login;
    }
    getName() {
        return this.FirstName + " " + this.LastName;
    }
    getExternalId() {
        return this.ExternalId;
    }
    isAnonymous() {
        return this.IsAutoRegisteredUser;
    }
}


/***/ }),

/***/ 246:
/*!********************************************!*\
  !*** ./src/app/gx/base/action-state.dt.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionState": () => (/* binding */ ActionState)
/* harmony export */ });
/* harmony import */ var app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/navigation/navigation-helper */ 9424);

class ActionState {
    static create(name, navigation) {
        const act = new ActionState();
        act.iid = app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__.NavigationHelper.newComponentInstanceId();
        act.navigationState = navigation;
        return act;
    }
}


/***/ }),

/***/ 4643:
/*!********************************************!*\
  !*** ./src/app/gx/base/app-bar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBarService": () => (/* binding */ AppBarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class AppBarService {
    constructor() {
        this.navigationChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.actionsChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.propertyChangeSubscriptions = [];
    }
    bind(showAsCard, appBar) {
        if (!showAsCard) {
            const newNvg = {
                navigationStyle: appBar.navigationStyle,
                showBackButton: appBar.showBackButton,
                onBackButtonClick: appBar.onBackButtonClick
            };
            if (appBar.class) {
                newNvg.className = appBar.class;
            }
            if (appBar.visible) {
                newNvg.visible = appBar.visible;
            }
            if (appBar.caption) {
                newNvg.caption = appBar.caption;
            }
            this.setNavigation(newNvg);
            const actionButtons = [];
            for (const button of appBar.actionItems) {
                actionButtons.push(button);
            }
            this.setActions(actionButtons);
        }
    }
    setNavigation(data) {
        this.navigationChange.next(data);
    }
    setActions(data) {
        this.actionsChange.next(data);
        this.clearPropertyChangeSubscriptions();
        this.listenActionsPropertyChange(data);
    }
    listenActionsPropertyChange(actions) {
        for (const action of actions) {
            const uiButton = action;
            if (uiButton.propertyChange !== undefined) {
                const subscription = uiButton.propertyChange.subscribe(() => {
                    this.actionsChange.next(actions);
                });
                this.propertyChangeSubscriptions.push(subscription);
            }
        }
    }
    clearPropertyChangeSubscriptions() {
        for (const subscription of this.propertyChangeSubscriptions) {
            subscription.unsubscribe();
        }
        this.propertyChangeSubscriptions = [];
    }
}
AppBarService.ɵfac = function AppBarService_Factory(t) { return new (t || AppBarService)(); };
AppBarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppBarService, factory: AppBarService.ɵfac });


/***/ }),

/***/ 3298:
/*!******************************************!*\
  !*** ./src/app/gx/base/app-container.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_gxcore_common_ui_designsystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/gxcore/common/ui/designsystem */ 6735);
/* harmony import */ var _std_client_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../std/client-storage */ 9779);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_types_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/types/guid */ 6839);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.settings */ 9783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/msg */ 1648);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_setLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/setLanguage */ 1821);
/* harmony import */ var _gximage_dt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gximage.dt */ 3735);
/* harmony import */ var _gxbinary_dt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gxbinary.dt */ 3419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../base/translation.service */ 7835);
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image.service */ 9724);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ 1016);
/* harmony import */ var app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/gx/utils/uri-cache/uri-cache.service */ 8385);















class AppContainer {
    constructor(_translations, _images, cookieService, uriCacheService) {
        this._translations = _translations;
        this._images = _images;
        this.cookieService = cookieService;
        this.uriCacheService = uriCacheService;
        this._errorCode = 0;
        this._errorString = "";
        this.currentLanguage = "English";
        this.uiContextKey = "";
        this.uiContextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    }
    initApp(id) {
        const appId = _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Get('gx.APP.id');
        if (!appId || appId != id) {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Clear();
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.APP.id', id);
        }
    }
    setLanguage(language) {
        this.currentLanguage = language;
        (0,_genexus_web_standard_functions_dist_lib_esm_misc_setLanguage__WEBPACK_IMPORTED_MODULE_5__.setLanguage)(language);
        StyleManager.setDirection(this._translations.getLanguageDirection(language));
        this.refreshUIContext();
    }
    initTheme(theme) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let currentTheme = this.getTheme();
            if (!currentTheme || currentTheme === "") {
                currentTheme = theme.toLowerCase();
                _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.APP.theme', currentTheme);
            }
            yield this._images.load(this.currentLanguage, currentTheme);
            StyleManager.setStyle(currentTheme);
            StyleManager.setDirection(this._translations.getLanguageDirection(this.currentLanguage));
        });
    }
    getTheme() {
        return _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Get('gx.APP.theme') || '';
    }
    setTheme(theme) {
        const currentTheme = this.getTheme();
        if (currentTheme !== theme.toLowerCase()) {
            _std_client_storage__WEBPACK_IMPORTED_MODULE_1__.ClientStorage.Set('gx.APP.theme', theme.toLowerCase());
            window.location.reload();
        }
    }
    getColorScheme() {
        var _a;
        const colorScheme = (_a = (0,_genexus_web_standard_functions_dist_lib_esm_gxcore_common_ui_designsystem__WEBPACK_IMPORTED_MODULE_0__.getOption)('color-scheme')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (!colorScheme && window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return "dark";
            }
            else {
                return "light";
            }
        }
        else {
            return colorScheme || "light";
        }
    }
    getThemeOptions() {
        return (0,_genexus_web_standard_functions_dist_lib_esm_gxcore_common_ui_designsystem__WEBPACK_IMPORTED_MODULE_0__.getOptions)().filter(option => option.name.toLowerCase() != 'color-scheme');
    }
    refreshUIContext() {
        this.uiContextKey = `${this.currentLanguage}_${this.getTheme()}_${this.getColorScheme()}_${this.getThemeOptions().map(option => `${option.name}_${option.value}`).join('_')}`;
        this.uiContextSubject.next();
    }
    initTranslations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            yield this._translations.load(this.currentLanguage);
        });
    }
    setMessage(message) {
        (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_4__.msg)(message);
    }
    translate(key) {
        return this._translations.translate(key);
    }
    getBaseUrl() {
        return _app_settings__WEBPACK_IMPORTED_MODULE_3__.Settings.WEBAPP_BASE;
    }
    setSession() {
        let ngSessionId = this.cookieService.get("gx-ng-session");
        if (!ngSessionId) {
            ngSessionId = _genexus_web_standard_functions_dist_lib_esm_types_guid__WEBPACK_IMPORTED_MODULE_2__.GUID.newGuid().toString();
            this.cookieService.set("gx-ng-session", ngSessionId);
        }
    }
    setError(errorCode, errorString = "") {
        this._errorCode = errorCode;
        this._errorString = errorString;
    }
    get err() { return this._errorCode; }
    get errMsg() { return this._errorString; }
    open(id) {
        const uri = this.uriCacheService.get(id);
        window.open(uri, '_blank');
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Images and binaries 
    imageToURL(image) {
        let url = "";
        if (image.id) {
            url = this.getImageSource(image.id);
        }
        else if (image.uri.indexOf('gxupload:') > -1) {
            url = this.uriCacheService.get(image.uri);
        }
        else {
            url = image.uri;
        }
        return this.resolveRelativeURL(url);
    }
    serializeImage(image) {
        if (image.id) {
            return this.resolveRelativeURL(this.getImageSource(image.id));
        }
        else if (image.uri.indexOf('gxupload:') > -1) {
            return image.uri;
        }
        else {
            return this.resolveRelativeURL(image.uri);
        }
    }
    binaryToURL(binary) {
        let url = "";
        if (binary.uri.indexOf('gxupload:') > -1) {
            url = this.uriCacheService.get(binary.uri);
        }
        else {
            url = binary.uri;
        }
        return this.resolveRelativeURL(url);
    }
    serializeBinary(binary) {
        if (binary.uri.indexOf('gxupload:') > -1) {
            return binary.uri;
        }
        else {
            return this.resolveRelativeURL(binary.uri);
        }
    }
    createImageFromURL(key) {
        let id = "";
        let url = "";
        const isPath = key.indexOf("/") > -1;
        const isUploadedImage = key.indexOf("gxupload:") > -1;
        if (isPath || isUploadedImage) {
            const imgLowerC = key.toLowerCase();
            if (imgLowerC.startsWith("blob:") ||
                imgLowerC.startsWith("file:") ||
                imgLowerC.startsWith("data:")) {
                url = key.slice(5);
            }
            else {
                url = key;
            }
        }
        else {
            id = key;
        }
        return _gximage_dt__WEBPACK_IMPORTED_MODULE_6__.GxImage.createImage(id, url);
    }
    createBinaryFromURL(url) {
        return _gxbinary_dt__WEBPACK_IMPORTED_MODULE_7__.GxBinary.createBinary(url);
    }
    getImageSource(key) {
        const isPath = key.indexOf("/") > -1;
        if (isPath) {
            return key;
        }
        else {
            return this._images.getImageSource(key, this.currentLanguage, this.getTheme(), this.getColorScheme(), this.getThemeOptions());
        }
    }
    resolveRelativeURL(url) {
        if (!url)
            return "";
        const dataURL = this.getBaseUrl();
        const imgLowerC = url.toLowerCase();
        if (imgLowerC.startsWith("assets/")) {
            const appBaseURL = window.location.origin;
            return appBaseURL + '/' + url;
        }
        else if (imgLowerC.startsWith("http://") ||
            imgLowerC.startsWith("https://") ||
            imgLowerC.startsWith("blob:") ||
            imgLowerC.startsWith("file:") ||
            imgLowerC.startsWith("data:") ||
            imgLowerC.startsWith("/" + dataURL.toLocaleLowerCase()) ||
            imgLowerC.startsWith(dataURL.toLocaleLowerCase())) {
            return url;
        }
        else {
            return dataURL + url;
        }
    }
}
AppContainer.ɵfac = function AppContainer_Factory(t) { return new (t || AppContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_base_translation_service__WEBPACK_IMPORTED_MODULE_8__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_image_service__WEBPACK_IMPORTED_MODULE_9__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_11__.UriCacheService)); };
AppContainer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: AppContainer, factory: AppContainer.ɵfac, providedIn: "root" });
class StyleManager {
    static setStyle(name) {
        this.getLinkElementForKey().setAttribute('href', name + ".css");
    }
    static setDirection(dir) {
        const bodyStyles = document.body.style;
        if (dir === 'rtl') {
            bodyStyles.setProperty('--direction', 'rtl');
        }
        else {
            bodyStyles.setProperty('--direction', 'ltr');
        }
    }
    static removeStyle(key) {
        const existingLinkElement = this.getExistingLinkElementByKey();
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
    static getLinkElementForKey() {
        return this.getExistingLinkElementByKey() || this.createLinkElementWithKey();
    }
    static getExistingLinkElementByKey() {
        return document.head.querySelector(`link[rel="stylesheet"].${"style-manager-theme"}`);
    }
    static createLinkElementWithKey() {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.type = 'text/css';
        linkEl.classList.add("style-manager-theme");
        document.head.appendChild(linkEl);
        return linkEl;
    }
}


/***/ }),

/***/ 7186:
/*!******************************************!*\
  !*** ./src/app/gx/base/global-events.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalEvents": () => (/* binding */ GlobalEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/web/GlobalEvents */ 461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);



class GlobalEvents {
    subscribe(eventName, event) {
        return (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.subscribe)(eventName.toLowerCase(), event);
    }
    unsubscribe(eventSubscription) {
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.unSubscribe)(eventSubscription);
    }
    publish(eventName, ...parameters) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return _genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish.apply(this, [eventName.toLowerCase()].concat(parameters));
        });
    }
}
GlobalEvents.ɵfac = function GlobalEvents_Factory(t) { return new (t || GlobalEvents)(); };
GlobalEvents.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GlobalEvents, factory: GlobalEvents.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6006:
/*!**************************************!*\
  !*** ./src/app/gx/base/grid-data.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridControllerData": () => (/* binding */ GridControllerData),
/* harmony export */   "GridElementData": () => (/* binding */ GridElementData),
/* harmony export */   "LevelConfig": () => (/* binding */ LevelConfig),
/* harmony export */   "gxRowNumberId": () => (/* binding */ gxRowNumberId)
/* harmony export */ });
/* harmony import */ var app_gx_base_gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/gxcollection.dt */ 8948);
/* harmony import */ var app_gx_ui_model_ui_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/ui/model/ui-list */ 7161);


class GridControllerData extends app_gx_base_gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__.GxCollectionData {
    constructor() {
        super(...arguments);
        this.start = 0;
        this.count = 0;
        this.searchText = '';
        this.loadingState = app_gx_ui_model_ui_list__WEBPACK_IMPORTED_MODULE_1__.UIListLoadingState.loading;
    }
}
class GridElementData {
}
class LevelConfig {
    constructor(it, ct) {
        this.itemType = it;
        this.controllerType = ct;
    }
}
const gxRowNumberId = 'gxIndex';


/***/ }),

/***/ 3419:
/*!****************************************!*\
  !*** ./src/app/gx/base/gxbinary.dt.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GxBinary": () => (/* binding */ GxBinary)
/* harmony export */ });
class GxBinary {
    constructor() {
        this.uri = "";
    }
    toString() {
        return this.uri;
    }
    fromString(uri) {
        this.uri = uri;
    }
    isEmpty() {
        return this.uri === "" || this.uri === null;
    }
    setEmpty() {
        this.uri = "";
    }
    toBase64String() {
        console.log('toBase64String - Not implemented');
    }
    fromBase64String(s) {
        console.log('fromBase64String - Not implemented');
    }
    static create(b1) {
        const b2 = new GxBinary();
        b2.uri = b1.uri;
        return b2;
    }
    static createBinary(url) {
        const b = new GxBinary();
        b.uri = url;
        return b;
    }
}


/***/ }),

/***/ 8948:
/*!********************************************!*\
  !*** ./src/app/gx/base/gxcollection.dt.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GxCollectionData": () => (/* binding */ GxCollectionData),
/* harmony export */   "GxCollectionOperation": () => (/* binding */ GxCollectionOperation)
/* harmony export */ });
class GxCollectionData extends Array {
    constructor() {
        super();
    }
    get Count() {
        return this.length;
    }
    add(element, position) {
        if (position) {
            this.splice(position - 1, 0, element);
        }
        else {
            this.push(element);
        }
    }
    item(ix) {
        return this[ix - 1];
    }
    static add(array, element, position) {
        if (position) {
            array.splice(position - 1, 0, element);
        }
        else {
            array.push(element);
        }
    }
    static fromArray(array) {
        const collection = new GxCollectionData();
        for (const itm of array) {
            collection.add(itm);
        }
        return collection;
    }
    static clear(array) {
        array.splice(0, array.length);
    }
    static clone(array) {
        return array.slice(0);
    }
    static indexOf(array, element) {
        return array.indexOf(element) + 1;
    }
    static item(array, ix) {
        return array[ix - 1];
    }
    static remove(array, ix) {
        array.splice(ix - 1, 1);
    }
    static tojson(array) {
        return JSON.stringify(array);
    }
    static fromjson(obj, json) {
        for (const item of JSON.parse(json)) {
            obj.add(item);
        }
    }
}
class GxCollectionOperation {
    constructor(t, e, i) {
        this.type = t;
        this.element = e;
        this.info = i;
    }
    static createAddOperation(element, ix) {
        return new GxCollectionOperation('add', element, ix ? [ix] : null);
    }
    static apply(collection, operation) {
        if (operation.type === 'add') {
            collection.add(operation.element, operation.info);
            return collection;
        }
    }
}


/***/ }),

/***/ 3735:
/*!***************************************!*\
  !*** ./src/app/gx/base/gximage.dt.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GxImage": () => (/* binding */ GxImage)
/* harmony export */ });
class GxImage {
    constructor() {
        this.id = "";
        this.uri = "";
    }
    toString() {
        return this.uri;
    }
    fromString(url) {
        this.uri = url;
    }
    isEmpty() {
        return !this.uri && !this.id;
    }
    setEmpty() {
        this.uri = "";
        this.id = "";
    }
    toBase64String() {
        console.log('toBase64String - Not implemented');
    }
    fromBase64String(s) {
        console.log('fromBase64String - Not implemented');
    }
    static createFromURL(url) {
        const b = new GxImage();
        b.uri = url;
        return b;
    }
    static createFromID(id) {
        const b = new GxImage();
        b.id = id;
        return b;
    }
    static create(i1) {
        const i2 = new GxImage();
        i2.uri = i1.uri;
        i2.id = i1.id;
        return i2;
    }
    static createImage(id, url) {
        const i = new GxImage();
        i.id = id;
        i.uri = url;
        return i;
    }
}


/***/ }),

/***/ 9724:
/*!******************************************!*\
  !*** ./src/app/gx/base/image.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService),
/* harmony export */   "ImagesData": () => (/* binding */ ImagesData),
/* harmony export */   "ImageData": () => (/* binding */ ImageData),
/* harmony export */   "ImageOption": () => (/* binding */ ImageOption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);



class ImageService {
    constructor(http) {
        this.http = http;
        this.images = {};
        this.loadedImages = {};
    }
    load(language, theme) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadImages(language, theme);
        });
    }
    loadImages(language, theme) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loadedImages[language + theme]) {
                try {
                    let response = yield this.http
                        // TODO: Load images from a specific theme/language definition file
                        //.get(`assets/images.${theme}.${language}.json`)
                        .get(`assets/images.json`)
                        .toPromise();
                    const data = response;
                    data.images.forEach(image => {
                        if (image.colorScheme) {
                            const data = {
                                location: image.location,
                                options: image.options
                            };
                            const key = this.resolveImageKey(image.name, image.lang, image.theme, image.colorScheme);
                            if (this.images[key]) {
                                let addedImage = this.images[key].find(imageOption => JSON.stringify(imageOption.options) === JSON.stringify((image.options)));
                                if (addedImage) {
                                    addedImage.location = image.location;
                                }
                                else {
                                    this.images[key].push(data);
                                }
                            }
                            else {
                                this.images[key] = [data];
                            }
                        }
                        else {
                            const dataLight = {
                                location: image.location,
                                options: image.options
                            };
                            const keyLight = this.resolveImageKey(image.name, image.lang, image.theme, "light");
                            if (this.images[keyLight]) {
                                this.images[keyLight].push(dataLight);
                            }
                            else {
                                this.images[keyLight] = [dataLight];
                            }
                            const dataDark = {
                                location: image.location,
                                options: image.options
                            };
                            const keyDark = this.resolveImageKey(image.name, image.lang, image.theme, "dark");
                            if (this.images[keyDark]) {
                                this.images[keyDark].push(dataDark);
                            }
                            else {
                                this.images[keyDark] = [dataDark];
                            }
                        }
                    });
                    this.loadedImages[language + theme] = true;
                }
                catch (e) {
                    console.log(`Could not load images definition for ${language}/${theme}`, e);
                }
            }
        });
    }
    getImageSource(name, language, theme, colorScheme, options) {
        const imageUrl = this.getImage(name, language, theme, colorScheme, options);
        if (imageUrl === "") {
            if (name.startsWith("https://") || name.startsWith("http://") || name.startsWith("/")) {
                return name;
            }
            else {
                return "";
            }
        }
        return "assets/" + imageUrl;
    }
    getImage(name, language, theme, colorScheme, options) {
        const imageOptions = this.images[this.resolveImageKey(name, language, theme, colorScheme)];
        if (imageOptions === null || imageOptions === undefined) {
            return "";
        }
        else {
            let location = "";
            let specificity = -1;
            for (let i = 0; i < imageOptions.length; i++) {
                let imageOption = imageOptions[i];
                let match = imageOption.options.every(entry => options.some(option => option.name == entry.name && option.value == entry.value));
                if (match && imageOption.options.length > specificity) {
                    location = imageOption.location;
                    specificity = imageOption.options.length;
                }
            }
            return location;
        }
    }
    resolveImageKey(name, lang, theme, colorScheme) {
        return `${name.toLowerCase()}_${lang.toLowerCase()}_${theme.toLowerCase()}_${colorScheme.toLowerCase()}`;
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: "root" });
class ImagesData {
}
class ImageData {
}
class ImageOption {
}


/***/ }),

/***/ 9586:
/*!************************************************!*\
  !*** ./src/app/gx/base/lazy-loader.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoaderService": () => (/* binding */ LazyLoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);



class LazyLoaderService {
    constructor(router, factoryResolver) {
        this.router = router;
        this.factoryResolver = factoryResolver;
    }
    findComponentFactory(componentPath) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const cfg = yield this.findComponentConfig(componentPath, this.router.config);
            if (cfg) {
                const comp = cfg.component;
                const factory = this.factoryResolver.resolveComponentFactory(comp);
                return new Promise((resolve) => { resolve(factory); });
            }
            return null;
        });
    }
    findComponentRoute(componentPath) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const cfg = yield this.findComponentConfig(componentPath, this.router.config);
            return cfg ? cfg.path : null;
        });
    }
    findComponentConfig(typeName, routes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const path = typeName.replace(/^\w+\./g, "").toLocaleLowerCase();
            for (const route of routes) {
                if (route.path.toLocaleLowerCase().indexOf(path) >= 0) {
                    return route;
                }
                else if (route.loadChildren) {
                    const mod = yield route.loadChildren();
                    let newRoutes = [];
                    if (mod.routes) {
                        newRoutes = mod.routes;
                    }
                    else {
                        newRoutes = route._loadedConfig.routes;
                    }
                    return yield this.findComponentConfig(typeName, newRoutes);
                }
            }
        });
    }
}
LazyLoaderService.ɵfac = function LazyLoaderService_Factory(t) { return new (t || LazyLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver)); };
LazyLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LazyLoaderService, factory: LazyLoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4121:
/*!********************************************!*\
  !*** ./src/app/gx/base/panel.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelComponent": () => (/* binding */ PanelComponent),
/* harmony export */   "CompositeCancel": () => (/* binding */ CompositeCancel),
/* harmony export */   "ComponentsController": () => (/* binding */ ComponentsController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 5755);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 7504);
/* harmony import */ var app_gx_base_view_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/view-manager */ 8704);
/* harmony import */ var app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/base/type-conversion */ 9626);
/* harmony import */ var app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/ui/controls/component-host/component-host.component */ 7561);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/msg */ 1648);
/* harmony import */ var app_gx_navigation_panel_navigation_state_dt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/navigation/panel-navigation-state.dt */ 4912);
/* harmony import */ var app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/navigation/navigation-helper */ 9424);
/* harmony import */ var app_gx_base_action_state_dt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/gx/base/action-state.dt */ 246);
/* harmony import */ var app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/gx/navigation/outlets-helper */ 1896);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_types_guid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/types/guid */ 6839);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.settings */ 9783);
/* harmony import */ var _gxcollection_dt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gxcollection.dt */ 8948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5485);

















/**
 * Class implementing the base panel behaviour
 */
class PanelComponent {
    constructor(app, nvg, activatedRoute, cdr) {
        this.app = app;
        this.nvg = nvg;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this._isDynComponent = false;
        this._dynRefresh = false;
        this.showAsCard = true;
        this.canControlAppBar = false;
        this._dataReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
        this._viewInitialized$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(false);
        this.viewManager = new app_gx_base_view_manager__WEBPACK_IMPORTED_MODULE_0__.ViewManager();
        this._actionsEnabled = false;
        this.stateMembers = [[], []];
        this._navigation = new app_gx_navigation_panel_navigation_state_dt__WEBPACK_IMPORTED_MODULE_4__.PanelNavigationState();
        this._outlet = null;
        this._tst = new Date();
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
        this.componentsController = new ComponentsController();
        //////////////////////////////////////////////////////////////////////////////////////////////////
        // Events processing
        //
        this.callAction = (actionMethod, ...parms) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield actionMethod.bind(this)(...parms);
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////
        // Composite events processing
        this.isCompositeExecution = false;
        //////////////////////////////////////////////////////////////////////////////////////////////////
        // Methods used in templates
        this.dateToISOString = app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_1__.TypeConversions.UIDateToISOString;
        this.timeToISOString = app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_1__.TypeConversions.UITimeToISOString;
        this.datetimeToISOString = app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_1__.TypeConversions.UIDatetimeToISOString;
        this.dateFromISOString = app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_1__.TypeConversions.UIDateFromISOString;
        this.GUID = _genexus_web_standard_functions_dist_lib_esm_types_guid__WEBPACK_IMPORTED_MODULE_8__.GUID;
        this.createImageFromURL = this.app.createImageFromURL;
        this.createBinaryFromURL = this.app.createBinaryFromURL;
    }
    ngOnInit() {
        this._actionsEnabled = false;
        this.viewManager.start(this.views);
        this._subscriptions.add(this.activatedRoute.params.subscribe((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // Route parameters have changed
            this._actionsEnabled = false;
            if (this.nvg.restoringComponent()) {
                // Restoring component
                let stateFound = false;
                if (!this._dynRefresh) {
                    // Pending action -> must wait for completion
                    yield this.nvg.waitForActionToComplete();
                    const nid = this.nvg.getRestoringNID();
                    stateFound = this.nvg.restoreState(this.constructor.name, this._outlet, nid, this);
                    if (!stateFound) {
                        // can't restore (no state found) -> init and load panel
                        this.initState(this._isDynComponent ? this._dynCompoParameters : null);
                        yield this.loadPanel();
                    }
                    else {
                        this.viewManager.update(this.Mode);
                    }
                }
            }
            else {
                // Navigation state
                this._navigation = new app_gx_navigation_panel_navigation_state_dt__WEBPACK_IMPORTED_MODULE_4__.PanelNavigationState();
                this._navigation.iid = app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_5__.NavigationHelper.newComponentInstanceId();
                this._navigation.fromAction = this.nvg.getRunningAction();
                this._navigation.outlet = this._outlet;
                this._navigation.nid = this.nvg.getNavigationId();
                this._navigation.navigationCommand = this.nvg.getNavigationCommand();
                PanelComponent.activePanel = this;
                if (this.sectionType === "inline") {
                    this.initState(params);
                }
                else if (this.isOutletContent()) {
                    // Push new navigation to outlet stack
                    const nvgCommand = [this._routingPath];
                    if (!app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_5__.NavigationHelper.emptyParams(params)) {
                        nvgCommand.push(params);
                    }
                    this.nvg.pushToOutlet(this.nvg.getNavigationId(), this._outlet, nvgCommand);
                    this.initState(this._isDynComponent ? this._dynCompoParameters : params);
                }
                else if (this._isDynComponent) {
                    this.initState(this._dynCompoParameters);
                }
                else {
                    this.initState(null);
                }
                yield this.initPanel();
                yield this._ClientStart();
                yield this.loadPanel();
            }
            this.cdr.markForCheck();
            this._dynRefresh = false;
            this._actionsEnabled = true;
            this.viewManager.bindApplicationBar();
            this.initControllers();
            this.nvg.saveState(this.constructor.name, this._outlet, this.nvg.getNavigationId(), this);
            this._dataReady$.next(true);
        })));
        this._subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([this._dataReady$, this._viewInitialized$]).subscribe((params) => {
            // Data ready and view initialized -> Start inner components
            if (params[0] === true && params[1] === true) {
                this.componentsController.start(this.childComponents);
                this._dataReady$.complete();
                this._viewInitialized$.complete();
            }
        }));
        this._subscriptions.add(this.app.uiContextSubject.subscribe(() => {
            this.Refresh();
        }));
        this.startEvents();
    }
    ngOnChanges() {
    }
    ngAfterViewInit() {
        this._viewInitialized$.next(true);
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        if (this.viewManager)
            this.viewManager.end();
        if (this.componentsController)
            this.componentsController.end();
        this.endEvents();
    }
    _ClientStart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () { });
    }
    Refresh(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () { });
    } // TODO: Support type='keep'
    initState(params) {
        this.loadParams(params);
    }
    loadParams(params) { }
    initPanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () { });
    }
    loadPanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () { });
    }
    initControllers() { }
    startEvents() { }
    endEvents() { }
    __Cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const __aSt = this.startAction();
            yield this.cancel(__aSt);
            this.endAction(__aSt);
        });
    }
    isOutletContent() {
        return (!this._isDynComponent || app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_7__.OutletsHelper.isSecondaryOutlet(this._outlet));
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Panel loaded as dynamic component
    //
    initDynComponent(outlet, parameters) {
        this._isDynComponent = true;
        this._dynCompoParameters = parameters;
        this.showAsCard = false;
        this._outlet = outlet;
    }
    refreshDynComponent(outlet, parameters) {
        this.initDynComponent(outlet, parameters);
        this._dynRefresh = true;
    }
    startAction() {
        const act = new app_gx_base_action_state_dt__WEBPACK_IMPORTED_MODULE_6__.ActionState();
        act.iid = this._navigation.iid;
        act.navigationState = this._navigation;
        act.actionId = PanelComponent.nextRuntimeActionId++;
        return act;
    }
    endAction(act) {
        this.nvg.updateStateByIID(act.iid, this);
        this.nvg.endAction(act);
    }
    getRunningAction(outlet) { }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Navigation and state management
    //
    navigate(nvgCommand, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            return this.nvg.navigate(nvgCommand, act);
        });
    }
    navigateForResult(nvgCommand, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((complete) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                let result = yield this.nvg.navigateForResult(nvgCommand, act);
                this.nvg.restoreStateByIID(act.iid, this);
                complete(result);
            }));
        });
    }
    navigateForResultWithExtras(nvgCommand, extras, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((complete) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                let result = yield this.nvg.navigateForResultWithExtras(nvgCommand, extras, act);
                this.nvg.restoreStateByIID(act.iid, this);
                complete(result);
            }));
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // UIModel properties
    //   UImodel properties update method
    updateUIModel(uiModel, defaultValues = []) {
        for (let i = 0; i < defaultValues.length; i++) {
            PanelComponent.setProperty(defaultValues[i][0], defaultValues[i][1], defaultValues[i][2], uiModel);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Dynamic properties
    //   dynamic properties are set in the server and arrive in the main dataprovider payload
    updateGxdynprops(entity, uiModel) {
        if (entity.Gxdynprop) {
            const dynProps = JSON.parse(entity.Gxdynprop);
            for (let i = 0; i < dynProps.length; i++) {
                PanelComponent.setProperty(PanelComponent.toControlName(dynProps[i][0]), dynProps[i][1], dynProps[i][2], uiModel);
            }
        }
        if (entity.Gxdyncall) {
            const dynCalls = JSON.parse(entity.Gxdyncall);
            for (let i = 0; i < dynCalls.length; i++) {
                this.nvg.dynamicCall(null, dynCalls[i]);
            }
        }
    }
    static setProperty(ctrlName, propName1, propValue, uiModel) {
        let handled = false;
        const propName = propName1[0].toLowerCase() + propName1.substring(1);
        if (uiModel[ctrlName]) {
            if (typeof propValue === "string" &&
                (propValue.toLowerCase() === "false" ||
                    propValue.toLowerCase() === "true")) {
                uiModel[ctrlName][propName] = propValue.toLowerCase() === "true";
            }
            else if (Array.isArray(propValue)) {
                uiModel[ctrlName][propName] = _gxcollection_dt__WEBPACK_IMPORTED_MODULE_10__.GxCollectionData.fromArray(propValue);
            }
            else {
                uiModel[ctrlName][propName] = propValue;
            }
            handled = true;
        }
        if (!handled) {
            console.log(`Could not setProperty Control property: '${ctrlName}.${propName}'`);
        }
        return handled;
    }
    static toControlName(propControl) {
        let ctrlName = propControl;
        if (ctrlName.startsWith("&")) {
            ctrlName = ctrlName.substring(1);
        }
        return ("ctrl" + ctrlName[0].toUpperCase() + ctrlName.substring(1).toLowerCase());
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Translations
    //   Translation support for text and images
    translate(key) {
        return this.app.translate(key);
    }
    getImageSource(key) {
        return this.app.getImageSource(key);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Outlet management
    get outlet() {
        return this._outlet;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // SD Actions
    return(result, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.nvg.back(act, result);
        });
    }
    cancel(act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.nvg.back(act);
        });
    }
    returnTo(url, act) {
        this.nvg.backTo(url, act);
    }
    cancelTo(url, act) {
        this.nvg.backTo(url, act);
    }
    goHome(act) {
        this.nvg.goHome(act);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Interop
    OpenInBrowser(url) {
        window.location.href = url;
    }
    processCompositeError(e) {
        console.error(e.toString());
        if (!e) {
            this.app.setMessage(e.toString());
        }
    }
    compositeExecution(result, isComposite = true) {
        if (isComposite && this.app.err > 0) {
            throw new CompositeCancel("Composite cancelled");
        }
        return result;
    }
    raiseCompositeMessage(messages) {
        if (messages.length > 0) {
            this.app.setError(messages[0].Type);
            this.app.setMessage(messages[0].Description);
            throw new CompositeCancel("Composite cancelled");
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Hidecode
    validateHidecode(result) {
        if (result.length > 1 && result[1] === "101") {
            (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_3__.msg)(this.translate("GXM_keynfound"));
        }
        else {
            return result[0];
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Athentication
    checkAuthentication(gam) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (!gam.isLogged()) {
                if (_app_settings__WEBPACK_IMPORTED_MODULE_9__.Settings.GAM_ANONYMOUS_USER) {
                    yield gam.registerAnonymous();
                }
                else if (_app_settings__WEBPACK_IMPORTED_MODULE_9__.Settings.GAM_CLIENT_LOGIN) {
                    const __aSt = this.startAction();
                    yield this.navigateForResult([_app_settings__WEBPACK_IMPORTED_MODULE_9__.Settings.GAM_CLIENT_LOGIN], __aSt);
                    this.endAction(__aSt);
                }
            }
        });
    }
}
PanelComponent.nextRuntimeActionId = 1;
PanelComponent.activePanel = null;
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_11__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_12__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef)); };
PanelComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineDirective"]({ type: PanelComponent, viewQuery: function PanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](app_gx_ui_controls_component_host_component_host_component__WEBPACK_IMPORTED_MODULE_2__.ComponentHostComponent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.childComponents = _t);
    } }, inputs: { Mode: "Mode", sectionType: "sectionType" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵNgOnChangesFeature"]] });
/**
 * Composite cancel management
 */
class CompositeCancel extends Error {
}
/**
 * Panel GX components controller
 */
class ComponentsController {
    constructor() {
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription();
    }
    setState(s) {
        this.state = s;
    }
    start(c) {
        this.components = c;
        this.components.setDirty();
        this._subscriptions = this.components.changes.subscribe((comps) => {
            // DOM changed
            if (this.state !== undefined) {
                comps.forEach((comp) => {
                    comp.start(this.state);
                });
            }
        });
    }
    end() {
        this._subscriptions.unsubscribe();
    }
    refresh(componentId, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.components) {
                // Started
                yield this.components.forEach((comp) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                    if (comp.id === componentId) {
                        yield comp.refresh(data);
                        return;
                    }
                }));
            }
        });
    }
}


/***/ }),

/***/ 8856:
/*!******************************************!*\
  !*** ./src/app/gx/base/panel.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelService": () => (/* binding */ PanelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/msg */ 1648);
/* harmony import */ var _type_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-conversion */ 9626);



class PanelService {
    constructor(_router, _loginService, _app) {
        this.gxids = [];
        this.router = _router;
        this.loginService = _loginService;
        this.app = _app;
    }
    start() {
        this.gxids = [];
    }
    handleError(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let message = null;
            if (e && e.error && e.error.error && e.error.error.message) {
                message = e.error.error.message || e.message;
            }
            else if (e && e.message) {
                message = e.message;
            }
            if (message) {
                yield (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_0__.msg)(message);
            }
            return Promise.resolve(message || e);
        });
    }
    getGxid(serviceId) {
        if (!this.gxids[serviceId]) {
            this.gxids[serviceId] = Math.floor(Math.random() * 100000000 + 1);
        }
        return this.gxids[serviceId];
    }
    dateToISOString(d) {
        //We should use Timezone offset. But in order to work with current services, we must remove timezone offset.
        return _type_conversion__WEBPACK_IMPORTED_MODULE_1__.TypeConversions.datetimeToISOString(d);
    }
}


/***/ }),

/***/ 7835:
/*!************************************************!*\
  !*** ./src/app/gx/base/translation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationService": () => (/* binding */ TranslationService),
/* harmony export */   "TranslationsData": () => (/* binding */ TranslationsData),
/* harmony export */   "TranslationsItemData": () => (/* binding */ TranslationsItemData),
/* harmony export */   "ApplicationLanguageDefinition": () => (/* binding */ ApplicationLanguageDefinition)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.settings */ 9783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8336);




class TranslationService {
    constructor(http) {
        this.http = http;
        this.translations = {};
        this.images = {};
        this.loadedTranslations = {};
        this.loadedImages = {};
    }
    load(language) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadTranslations(language);
        });
    }
    loadTranslations(language) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loadedTranslations[language]) {
                try {
                    let response = yield this.http
                        .get(`translations/${language}.json`)
                        .toPromise();
                    const data = response;
                    data.Translations.forEach(t => (this.translations[t.M] = t.T));
                    this.loadedTranslations[language] = true;
                }
                catch (e) {
                    console.log(`Could not load translations definition for ${language}`, e);
                }
            }
        });
    }
    translate(name) {
        if (this.translations[name] !== undefined) {
            return this.translations[name];
        }
        else {
            return name;
        }
    }
    getLanguageDirection(language) {
        for (const l of _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.applicationLanguages) {
            if (l.name.toLowerCase() === language.toLowerCase()) {
                return l.isRightToLeft ? 'rtl' : 'ltr';
            }
        }
        return 'ltr';
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TranslationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: "root" });
class TranslationsData {
}
class TranslationsItemData {
}
class ApplicationLanguageDefinition {
}


/***/ }),

/***/ 9626:
/*!********************************************!*\
  !*** ./src/app/gx/base/type-conversion.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeConversions": () => (/* binding */ TypeConversions)
/* harmony export */ });
/* harmony import */ var _gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gxcollection.dt */ 8948);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ 5626);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-data */ 6006);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_date_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/date/isEmpty */ 3552);




class TypeConversions {
    static arrayToCollection(items, c) {
        const collection = new _gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__.GxCollectionData();
        if (items) {
            let idx = 0;
            items.forEach(element => {
                const item = TypeConversions.objectToClass(element, c);
                item[_grid_data__WEBPACK_IMPORTED_MODULE_2__.gxRowNumberId] = idx++;
                collection.push(item);
            });
        }
        return collection;
    }
    static objectToClass(obj, c) {
        const obj1 = (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.plainToClassFromExist)(new c(), obj);
        return TypeConversions.convertDateContent(obj1, new c());
    }
    static classToObject(obj) {
        return (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.classToPlain)(obj);
    }
    static classToString(obj) {
        return JSON.stringify(this.classToObject(obj));
    }
    static convertDateContent(o1, c) {
        for (let p in o1) {
            if (c[p] && c[p] instanceof Date) {
                let d = new Date(0, 0, 0, 0, 0, 0);
                if (o1[p] instanceof Date)
                    continue; // hack , this should be handled in previous phases.
                if (!o1[p].startsWith("0000-00-00")) {
                    if (o1[p].indexOf("T") > -1) {
                        // Format = yyyy-mm-ddThh:mm:ss -> UTC
                        const datetimeS = o1[p].split("T");
                        const dateS = datetimeS[0].split("-");
                        const timeS = datetimeS[1].split(":");
                        if (+dateS[0] === 1) {
                            d = new Date();
                            d.setUTCHours(+timeS[0]);
                            d.setUTCMinutes(+timeS[1]);
                            d.setUTCSeconds(+timeS[2] || 0);
                        }
                        else {
                            d = new Date(Date.UTC(+dateS[0], +dateS[1] - 1, +dateS[2], +timeS[0], +timeS[1] || 0, +timeS[2] || 0));
                        }
                    }
                    else {
                        // Format = yyyy-mm-dd -> local
                        if (o1[p] !== "0000-00-00") {
                            const dateS = o1[p].split("-");
                            d = new Date(+dateS[0], +dateS[1] - 1, +dateS[2], 0, 0, 0);
                        }
                    }
                }
                o1[p] = d;
            }
        }
        return o1;
    }
    static timeToISOString(d) {
        if (d) {
            const a = TypeConversions.dateToArray(d);
            return TypeConversions.dateArrayToTimeString(a);
        }
        return '';
    }
    static dateToISOString(d) {
        if (d) {
            const a = TypeConversions.dateToArray(d);
            return TypeConversions.dateArrayToDateString(a);
        }
        return '';
    }
    static datetimeToISOString(d) {
        if (d) {
            const a = TypeConversions.dateToArray(d);
            return TypeConversions.dateArrayToDatetimeString(a);
        }
        return '';
    }
    static datetimeFromISOString(s) {
        let d;
        try {
            const da = TypeConversions.ISODateToDTA(s);
            d = TypeConversions.DTAToDate(da);
        }
        catch (_a) {
            throw new Error('Invalid date: "' + s + '"');
        }
        if (!TypeConversions.isValidDate(d)) {
            // Not ISO, try to convert from any supported fromat
            d = new Date(s);
        }
        return d;
    }
    static isValidDate(d) {
        return d instanceof Date && !isNaN(d.getTime());
    }
    static dateToArray(d) {
        return [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    }
    static dateArrayToDatetimeString(s) {
        // yyyy-mm-ddThh:mm:ss
        return ("000" + s[0]).slice(-4) + "-" + ("0" + (s[1] + 1)).slice(-2) + "-" + ("0" + s[2]).slice(-2) + "T" + ("0" + s[3]).slice(-2) + ":" + ("0" + s[4]).slice(-2) + ":" + ("0" + s[5]).slice(-2);
    }
    static dateArrayToDateString(s) {
        // yyyy-mm-dd
        return ("000" + s[0]).slice(-4) + "-" + ("0" + (s[1] + 1)).slice(-2) + "-" + ("0" + s[2]).slice(-2);
    }
    static dateArrayToTimeString(s) {
        // hh:mm:ss
        return ("0" + s[3]).slice(-2) + ":" + ("0" + s[4]).slice(-2) + ":" + ("0" + s[5]).slice(-2);
    }
    static ISODateToDTA(s) {
        // DTA = Array<numeric> = [date_format, year, month, day, hour, min, sec ]
        const datetimeS = s.split("T");
        if (datetimeS.length > 1) {
            const dateS = datetimeS[0].split("-");
            const timeS = datetimeS[1].split(":");
            return [-1, +dateS[0], +dateS[1], +dateS[2], +timeS[0], +timeS[1], +timeS[2]]; // -1=DATE_AND_TIME
        }
        else if (s.indexOf("-") > 1) {
            const dateS = datetimeS[0].split("-");
            return [-2, +dateS[0], +dateS[1], +dateS[2], 0, 0, 0]; // -2=ONLY_DATE
        }
        else if (s.indexOf(":") > -1) {
            const timeS = datetimeS[0].split(":");
            return [-3, 0, 0, 0, +timeS[0], +timeS[1], +timeS[2]]; // -3=ONLY_TIME
        }
        return [0, 0, 0, 0, 0, 0, 0]; // 0=INVALID_DATE
    }
    static DTAToDate(dta) {
        if (dta[0] === 0) { // INVALID_DATE
            return new Date(0, 0, 0);
        }
        else { // DATE_AND_TIME
            const a = dta.slice(1);
            return TypeConversions.arrayToDate(a);
        }
    }
    static arrayToDate(a) {
        const d = new Date();
        d.setFullYear(+a[0], +a[1] - 1, +a[2]);
        d.setHours(+a[3]);
        d.setMinutes(+a[4]);
        d.setSeconds(+a[5]);
        return d;
    }
    static UIDateToISOString(d) {
        if (!(0,_genexus_web_standard_functions_dist_lib_esm_date_isEmpty__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(d)) {
            let s = TypeConversions.dateToISOString(d);
            return TypeConversions.getDateUIValue(d, s);
        }
        return "";
    }
    static UITimeToISOString(d) {
        if (!(0,_genexus_web_standard_functions_dist_lib_esm_date_isEmpty__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(d)) {
            let s = TypeConversions.timeToISOString(d);
            return TypeConversions.getDateUIValue(d, s);
        }
        return "";
    }
    static UIDatetimeToISOString(d) {
        if (!(0,_genexus_web_standard_functions_dist_lib_esm_date_isEmpty__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(d)) {
            let s = TypeConversions.datetimeToISOString(d);
            return TypeConversions.getDateUIValue(d, s);
        }
        return "";
    }
    static UIDateFromISOString(s) {
        let d = TypeConversions.datetimeFromISOString(s);
        TypeConversions.setDateUIValue(d, s);
        return d;
    }
    static setDateUIValue(d, s) {
        d["UI_VALUE"] = s;
    }
    static getDateUIValue(d, s) {
        if (!d["UI_VALUE"]) {
            d["UI_VALUE"] = s;
        }
        return d["UI_VALUE"];
    }
    static UISetValidDate(d, newD) {
        if (newD) {
            return newD;
        }
        else {
            return d;
        }
    }
}


/***/ }),

/***/ 8704:
/*!*****************************************!*\
  !*** ./src/app/gx/base/view-manager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationStyle": () => (/* binding */ NavigationStyle),
/* harmony export */   "ViewManager": () => (/* binding */ ViewManager)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9700);
/* harmony import */ var app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.settings */ 9783);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/gxcore/client/client-information */ 8185);



var NavigationStyle;
(function (NavigationStyle) {
    NavigationStyle["Cascade"] = "cascade";
    NavigationStyle["Flip"] = "flip";
    NavigationStyle["Slide"] = "slide";
    NavigationStyle["Split"] = "split";
})(NavigationStyle || (NavigationStyle = {}));
class ViewManager {
    constructor() {
        this.views = [];
        this.view = null;
        this.type = "";
        this.oldMode = "";
    }
    start(viewVariants) {
        this.views = viewVariants || [];
        this.updateViewManager();
        this.resizeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, "resize");
        this.resizeSubscription = this.resizeObservable.subscribe(evt => {
            this.updateViewManager();
        });
    }
    bindApplicationBar() {
        const currentView = this.selectView();
        const currentNavigationStyle = this.selectNavigationStyle(currentView);
        if (currentView !== undefined) {
            if (currentView.appBarBindFn !== undefined) {
                currentView.appBarBindFn(currentNavigationStyle);
            }
        }
    }
    update(m) {
        if (this.oldMode !== m) {
            if (m !== "") {
                this.type = "edit";
            }
            else {
                this.type = "";
            }
            this.updateViewManager();
            this.oldMode = m;
        }
    }
    updateViewManager() {
        const currentView = this.selectView();
        const currentNavigationStyle = this.selectNavigationStyle(currentView);
        if (currentView !== undefined && currentView.name !== this.view) {
            if (currentView.appBarInitFn !== undefined) {
                // Set view to show
                this.view = currentView.name;
                // Init view model
                currentView.appBarInitFn();
                // Setup and bind view actions
                currentView.appBarBindFn(currentNavigationStyle);
            }
        }
    }
    selectView() {
        const forWeb = _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_1__.GeneXusClientClientInformation.platformName() === "Web";
        return this.views
            .filter((platform) => { return forWeb && platform.os === "Web" || !forWeb && platform.os !== "Web"; })
            .filter((platform) => this.type === "" || platform.type === this.type)
            .find(viewMatchesViewport(window))
            || this.views
                .filter((platform) => this.type === "" || platform.type === this.type)
                .find(viewMatchesViewport(window))
            || this.views[0];
    }
    selectNavigationStyle(currentView) {
        return currentView !== undefined &&
            currentView.navigationStyle !== "default"
            ? currentView.navigationStyle
            : app_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.DEFAULT_NAVIGATION_STYLE;
    }
    end() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        const viewDef = this.getViewDefinition();
        if (viewDef !== undefined && viewDef.appBarResetFn !== undefined) {
            viewDef.appBarResetFn();
        }
    }
    getUIModelDefaults(containerName) {
        const viewDef = this.getViewDefinition();
        if (viewDef !== undefined && viewDef.appBarResetFn !== undefined) {
            return viewDef.UIModelDefaults(containerName, this.selectNavigationStyle(viewDef));
        }
        return [];
    }
    getViewDefinition() {
        return this.views.find((viewDef) => viewDef.name === this.view);
    }
}
const viewMatchesViewport = (win) => (platform) => {
    const shortestBound = Math.min(win.innerWidth, win.innerHeight);
    const longestBound = Math.max(win.innerWidth, win.innerHeight);
    return ((platform.minShortestBound > 0
        ? platform.minShortestBound < shortestBound
        : true) &&
        (platform.maxShortestBound > 0
            ? platform.maxShortestBound > shortestBound
            : true) &&
        (platform.minLongestBound > 0
            ? platform.minLongestBound < longestBound
            : true) &&
        (platform.maxLongestBound > 0
            ? platform.maxLongestBound > longestBound
            : true));
};


/***/ }),

/***/ 2435:
/*!***********************************************!*\
  !*** ./src/app/gx/base/visibility.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibilityService": () => (/* binding */ VisibilityService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8569);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6086);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3815);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9700);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1689);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3932);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);




class VisibilityService {
    constructor(document) {
        this.pageVisible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(!document.hidden)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'visibilitychange')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(e => !document.hidden)));
    }
    elementInSight(element) {
        const elementVisible$ = rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.create(observer => {
            const intersectionObserver = new IntersectionObserver(entries => {
                observer.next(entries);
            });
            intersectionObserver.observe(element.nativeElement);
            return () => { intersectionObserver.disconnect(); };
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.flatMap)((entries) => entries), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(entry => entry.isIntersecting), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
        const elementInSight$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)(this.pageVisible$, elementVisible$, (pageVisible, elementVisible) => pageVisible && elementVisible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
        return elementInSight$;
    }
}
VisibilityService.ɵfac = function VisibilityService_Factory(t) { return new (t || VisibilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT)); };
VisibilityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: VisibilityService, factory: VisibilityService.ɵfac });


/***/ }),

/***/ 5133:
/*!***************************************************!*\
  !*** ./src/app/gx/base/visible-with.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibleWith": () => (/* binding */ VisibleWith)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4266);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2629);
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.service */ 2435);




class VisibleWith {
    constructor(templateRef, viewContainer, visibilityService, cdr) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.visibilityService = visibilityService;
        this.cdr = cdr;
    }
    set visibleWith(element) {
        this.visibilityService
            .elementInSight(new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(element))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(visible => visible), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
            .subscribe(() => {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.cdr.markForCheck();
        });
    }
}
VisibleWith.ɵfac = function VisibleWith_Factory(t) { return new (t || VisibleWith)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_visibility_service__WEBPACK_IMPORTED_MODULE_0__.VisibilityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
VisibleWith.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VisibleWith, selectors: [["", "visibleWith", ""]], inputs: { visibleWith: "visibleWith" } });


/***/ }),

/***/ 5747:
/*!**************************************************************!*\
  !*** ./src/app/gx/http/cache/request-cache-local-storage.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPersistentCacheLocalStorage": () => (/* binding */ RequestPersistentCacheLocalStorage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8336);


class RequestPersistentCacheLocalStorage {
    set(request, response) {
        localStorage.setItem(this.getKey(request), JSON.stringify(response));
    }
    getAsync(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const json = localStorage.getItem(this.getKey(request));
                if (json) {
                    resolve(Object.assign(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(), JSON.parse(json)));
                }
                else {
                    resolve(null);
                }
            });
        });
    }
    remove(request) {
        localStorage.removeItem(this.getKey(request));
    }
    getKey(request) {
        return request.urlWithParams.replace(/gxid=(\d*)&?/gi, "");
    }
}


/***/ }),

/***/ 3387:
/*!********************************************************!*\
  !*** ./src/app/gx/http/cache/request-cache-storage.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPersistentCacheStorage": () => (/* binding */ RequestPersistentCacheStorage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8336);


class RequestPersistentCacheStorage {
    constructor() {
        this.CACHE_NAME = "GX-APP-HTTP-CACHE";
    }
    set(request, response) {
        const headers = new Headers();
        const headersKeys = response.headers.keys();
        for (let i = 0; i < headersKeys.length; i++) {
            headers.append(headersKeys[i], response.headers.get(headersKeys[i]));
        }
        const myResponse = new Response(JSON.stringify(response.body), { status: response.status, statusText: response.statusText, headers: headers });
        caches
            .open(this.CACHE_NAME)
            .then((cache) => cache.put(this.getKey(request), myResponse));
    }
    getAsync(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const key = this.getKey(request);
            return new Promise((resolve, _) => {
                caches
                    .open(this.CACHE_NAME)
                    .then((cache) => {
                    cache
                        .match(key)
                        .then((r) => {
                        r.json().then((json) => {
                            const result = Object.assign(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(), {
                                body: json,
                            });
                            resolve(result);
                        });
                    })
                        .catch((err) => {
                        resolve(null);
                    });
                })
                    .catch((err) => {
                    resolve(null);
                });
            });
        });
    }
    remove(request) {
        caches
            .open(this.CACHE_NAME)
            .then((cache) => cache.delete(this.getKey(request)));
    }
    getKey(request) {
        return request.urlWithParams.replace(/gxid=(\d*)&?/gi, "");
    }
}


/***/ }),

/***/ 9038:
/*!****************************************************!*\
  !*** ./src/app/gx/http/url-caching-interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UriCachingStaleWhileRevalidateInterceptor": () => (/* binding */ UriCachingStaleWhileRevalidateInterceptor),
/* harmony export */   "HttpInterceptorProviders": () => (/* binding */ HttpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8569);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1265);
/* harmony import */ var _cache_request_cache_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache/request-cache-storage */ 3387);
/* harmony import */ var _cache_request_cache_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache/request-cache-local-storage */ 5747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);







class UriCachingStaleWhileRevalidateInterceptor {
    constructor() {
        this.cache = buildCache();
        this.cachedRequests = {};
    }
    intercept(httpRequest, handler) {
        const newRequest = httpRequest.clone();
        const isCacheable = shouldResolveRequestFromCache(httpRequest, this.cachedRequests);
        if (!isCacheable) {
            return handler.handle(newRequest);
        }
        if (httpRequest.headers.get("reset-cache")) {
            this.cache.remove(httpRequest);
        }
        const cachedResponse = this.cache.getAsync(httpRequest);
        const results$ = handler.handle(newRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                if (isCacheableHttpResponse(event)) {
                    this.cache.set(newRequest, event);
                    this.cachedRequests[getCacheKey(newRequest.urlWithParams)] = true;
                }
            }
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concat)(cachedResponse, results$);
    }
}
UriCachingStaleWhileRevalidateInterceptor.ɵfac = function UriCachingStaleWhileRevalidateInterceptor_Factory(t) { return new (t || UriCachingStaleWhileRevalidateInterceptor)(); };
UriCachingStaleWhileRevalidateInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UriCachingStaleWhileRevalidateInterceptor, factory: UriCachingStaleWhileRevalidateInterceptor.ɵfac });
function shouldResolveRequestFromCache(request, cachedRequests) {
    return (request.method === "GET" &&
        request.headers.get("Cache-Control") !== "no-cache" &&
        request.headers.get("Content-Type") === "application/json" &&
        cachedRequests[getCacheKey(request.urlWithParams)] === undefined //Cache only first time GET of Object.
    );
}
function isCacheableHttpResponse(httpResponse) {
    const cacheControl = httpResponse.headers.get("Cache-Control");
    return !cacheControl || cacheControl.indexOf('private') < 0;
}
function getCacheKey(url) {
    return url.replace(/start=(\d*)&?count=(\d*)&?/gi, "");
}
function buildCache() {
    return (window["caches"] === undefined) ? new _cache_request_cache_local_storage__WEBPACK_IMPORTED_MODULE_1__.RequestPersistentCacheLocalStorage() : new _cache_request_cache_storage__WEBPACK_IMPORTED_MODULE_0__.RequestPersistentCacheStorage();
}
const HttpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
        useClass: UriCachingStaleWhileRevalidateInterceptor,
        multi: true,
    },
];


/***/ }),

/***/ 2400:
/*!*******************************************************!*\
  !*** ./src/app/gx/navigation/composite-navigation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompositeNavigation": () => (/* binding */ CompositeNavigation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/navigation/navigation-helper */ 9424);
/* harmony import */ var app_gx_navigation_navigation_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/navigation/navigation-state */ 623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_lazy_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/base/lazy-loader.service */ 9586);
/* harmony import */ var app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/navigation/navigation-options-manager */ 1182);
/* harmony import */ var app_gx_navigation_router_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/navigation/router-navigation */ 5223);
/* harmony import */ var app_gx_navigation_outlets_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/navigation/outlets-navigation */ 8967);









/**
 * Class encapsulating routing, navigation and event state and resume management
 */
class CompositeNavigation {
    constructor(loader, nvgOptsMngr, routerNavigation, outletsNavigation) {
        this.loader = loader;
        this.nvgOptsMngr = nvgOptsMngr;
        this.routerNavigation = routerNavigation;
        this.outletsNavigation = outletsNavigation;
        // Navigation and events resume
        this.runningActionsManager = new CompositeActionsManager();
        // Navigation location and state
        this.activeState = new app_gx_navigation_navigation_state__WEBPACK_IMPORTED_MODULE_1__.NavigationState(); // Components state
        this.NID2IID = [];
        this.current = new CompositeNavigationState(); // current navigation state
        this.loadingStateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        // Subscribe to router start/end navigation events to manage component state and events resume
        this.routerNavigation.navigationEvent$.subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Start navigation event
            if (event.type === 'start') {
                if (!event.uri.startsWith("/(")) {
                    this.loadingStateChange$.next(true);
                }
                this.current.navigationCommand = event.navigationCommand;
                this.current.outlet = event.outlet;
                this.current.nid = event.id;
                this.current.nvgExtras = event.nvgExtras;
                this.current.appExtras = event.appExtras;
                this.current.navigationTrigger = event.trigger;
                this.current.backNID = event.restoredId;
                // Process navigation type
                if (event.trigger === 'popstate') {
                    // browser back/forward navigation
                }
                else if (event.trigger === 'appback') {
                    // returning back from component -> must complete pending events
                    const runningAction = event.nvgExtras;
                    if (runningAction.actionId) {
                        yield this.runningActionsManager.resumePendingEvent(runningAction.navigationState.fromAction.actionId);
                    }
                }
            }
            // End navigation event
            else if (event.type === 'end') {
                const activatedOutlets = this.outletsNavigation.loadSecondaryOutlets(event.uri);
                if (this.isVerticalTargetsBreakpointMatched) {
                    // show target outlet
                    if (event.outlet === null && !this.outletsNavigation.hasContentInPrimaryOutlet(event.uri)) {
                        // Targets prtimary outlet it has NO content -> defaults to showing all active secondary outlets
                        for (const outlet of activatedOutlets) {
                            this.outletsNavigation.showOutlet(outlet);
                        }
                    }
                    else {
                        // Show target outlet
                        this.outletsNavigation.showOutlet(event.outlet);
                    }
                }
                else {
                    // show all active outlets
                    for (const outlet of activatedOutlets) {
                        this.outletsNavigation.showOutlet(outlet);
                    }
                }
                if (!event.uri.startsWith("/(")) {
                    this.loadingStateChange$.next(false);
                }
            }
        }));
    }
    pushToOutlet(nid, outlet, navigationCommand) {
        this.outletsNavigation.pushToOutlet(nid, outlet, navigationCommand);
    }
    canGoBack() {
        return this.outletsNavigation.canGoBack(this.current.outlet);
    }
    /**
     * Save component <comp> state and sets a reference nid -> iid for
     * restoring it during back navigation
     * @param componentName
     * @param outletName
     * @param nid
     * @param comp
     */
    saveState(componentName, outletName, nid, comp) {
        this.NID2IID.push({
            nid: nid,
            name: componentName,
            outlet: outletName,
            iid: comp._navigation.iid
        });
        this.activeState.save(comp._navigation.iid, comp);
    }
    /**
     * Restores component <comp> state it had before navigation <nid>
     * @param componentName
     * @param outletName
     * @param nid
     * @param comp
     */
    restoreState(componentName, outletName, nid, comp) {
        let i = this.NID2IID.length - 1;
        while (i >= 0) {
            const c = this.NID2IID[i];
            if (c.nid <= nid && c.name === componentName && c.outlet === outletName) {
                return this.activeState.restore(c.iid, comp);
            }
            i--;
        }
        return false;
    }
    /**
     * Restores component <comp> state to saved state for instance <iid>
     * @param iid
     * @param comp
     */
    restoreStateByIID(iid, comp) {
        return this.activeState.restore(iid, comp);
    }
    /**
     * Update stored instance state <iid> to <comp> state
     * @param iid
     * @param comp
     */
    updateStateByIID(iid, comp) {
        this.activeState.update(iid, comp);
    }
    /**
     * Process the end of an event execution
     * @param act
     *    action state
     */
    endAction(act) {
        this.runningActionsManager.endEvent(act.actionId);
    }
    /**
     * Checks for back or popstate navigation
     */
    restoringComponent() {
        return this.current.navigationTrigger === 'popstate' || this.current.navigationTrigger === 'appback';
    }
    /**
     * When back or popstate navigation, it returns the navigation ID of the returning navigation
     */
    getRestoringNID() {
        return this.current.backNID;
    }
    /**
    *  Returns the current running action (stored in the extras field of the navigation state)
    */
    getRunningAction() {
        return this.current.nvgExtras;
    }
    /**
     * Wait for the running action to complete
     */
    waitForActionToComplete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.current.navigationTrigger === 'appback') {
                const runningAction = this.getRunningAction();
                if (runningAction && runningAction.navigationState && runningAction.navigationState.fromAction) {
                    yield this.runningActionsManager.waitForActionToComplete(runningAction.navigationState.fromAction.actionId);
                }
            }
        });
    }
    /**
     * Return the command issued to navigate to the current navigation state
     */
    getNavigationCommand() {
        return this.current.navigationCommand;
    }
    /**
     * Returns the current navigation id
     */
    getNavigationId() {
        return this.current.nid;
    }
    navigateOption(optionTarget, optionName, optionValue) {
        this.nvgOptsMngr.set(optionTarget, optionName, optionValue);
    }
    navigate(nvgCommand, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return this.navigate_impl(nvgCommand, false, act, {});
        });
    }
    navigateForResult(nvgCommand, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return this.navigate_impl(nvgCommand, true, act, {});
        });
    }
    navigateForResultWithExtras(nvgCommand, extras, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return this.navigate_impl(nvgCommand, true, act, extras);
        });
    }
    /**
     * Navigates to given route
     * @param nvgCommand
     *     Uri with route parameters
     *     Expected format = [ '<url>', {<parm1_name>:<parm1_value>, <parm2_name>:<parms_value>, ...}]
     * @param waitForResult
     *     Sets executing behavior:
     *         true = waits for target object return to complete
     *         false = completes depending on runtime contidions related to target outlet
     * @param act
     *      State of the action issuing the navigation command
     */
    navigate_impl(nvgCommand, waitForResult, act, appExtras) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Find target outlet
            const targetOutlet = this.nvgOptsMngr.getOutlet(nvgCommand);
            // Add info for navigation tracking
            const navigationExtras = this.routerNavigation.setNavigationExtras(act, appExtras, {});
            // Navigate
            yield this.routerNavigation.navigate(nvgCommand, targetOutlet, navigationExtras);
            this.nvgOptsMngr.clear(nvgCommand[0]);
            if (waitForResult || this.mustWaitForOutlet(targetOutlet, act)) {
                // Sync navigation - navigates to target and waits for return to continue executing next statements
                return new Promise((complete) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    let result = yield this.runningActionsManager.waitForResult(act.actionId);
                    complete(result);
                }));
            }
            else {
                // Async navigation - navigates to target and continues executing next statements
                return Promise.resolve();
            }
        });
    }
    /**
     * Returns when the navigation must wait for the called objetc to return, to continue with action execution
     * @param targetOutlet
     *      Target outlet of navigation
     * @param act
     *      State of the action running
     */
    mustWaitForOutlet(targetOutlet, act) {
        if (targetOutlet === 'popup') {
            return true;
        }
        else if (act.navigationState && targetOutlet === act.navigationState.outlet) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Navigates back to previous component, returning values and restoring outlets state
     * @param act
     *      State of the action running
     * @param result
     *      Result data to return
     */
    back(act, result = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // 1. Setup back navigation
            const currentNID = act.navigationState.nid; // running action navigation id
            const currentOutlet = act.navigationState.outlet; // outlet of current running action component
            // 2. Return data to calling component
            if (currentNID) {
                const currNvgEvt = this.routerNavigation.getNavigationEvent(currentNID);
                if (currNvgEvt) {
                    // get the calling action that we must return to
                    const runningAction = currNvgEvt.nvgExtras;
                    // set return value
                    this.runningActionsManager.saveResult(runningAction.actionId, result);
                }
            }
            // 3. Navigate back to previous component in outlet
            const restoringOutlet = this.outletsNavigation.popFromOutlet(currentOutlet); // previous component in current outlet
            const navigationExtras = this.routerNavigation.setNavigationExtras(act, {}, {});
            yield this.routerNavigation.navigateBack(restoringOutlet.url, currentOutlet, restoringOutlet.navigationId, navigationExtras);
        });
    }
    backTo(url, act) {
        this.back(act, {});
    }
    goHome(act) {
        this.routerNavigation.navigateByUrl("/");
    }
    /**
     * Dynamic call, accepting parameters included in target string and/or in the parameters array
     * @param target
     *      Call string
     * @param act
     *      State of the action issuing this navigation
     * @param parameters
     *      Added parameters
     */
    dynamicCall(act, target, ...parameters) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const route = yield this.parseDyncall(target, parameters);
            if (route.length > 1 && route[1]) {
                yield this.navigate([route[0], { _gxParameterValues: route[1] }], act);
            }
            else {
                yield this.navigate([route[0]], act);
            }
        });
    }
    /**
     * Parse dynmamic call string
     * @param callString
     *      Accepted format: ['sd:']'<module>.<object_name>' | ['sd:']'<module>.<object_name>?<encoded_parameters>'
     * @param parameters
     *      Call parameters, if there are parameters in both callString and parameters => all are included
     */
    parseDyncall(callString, parameters) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Parse 'sd' prefix
            let startUri = callString.indexOf("sd:");
            startUri = startUri >= 0 ? startUri + 2 : -1;
            // Normalize parameters
            let uriParams = parameters ? parameters.join(",") : "";
            let endUri = callString.indexOf("?");
            if (endUri >= 0) {
                // Found parameters included in callString
                uriParams =
                    this.decodeURI_ex(callString.substring(endUri + 1)) + uriParams;
            }
            else {
                endUri = callString.length;
            }
            let uri = callString.substring(startUri + 1, endUri);
            uri = uri.replace(/\./g, "/");
            uri = yield this.loader.findComponentRoute(uri);
            return [uri, uriParams];
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Helpers
    //
    /**
     * Get parameter value (by name or positional)
     * CONVENTION: a parameter with name "_gxParameterValues" denotes positional parameters (comma separated)
     * @param name
     * @param params
     * @param position
     */
    getParam(name, params, position) {
        if (position && params["_gxParameterValues"]) {
            return this.getParamFromGxParameter(params["_gxParameterValues"], position);
        }
        return params[name];
    }
    getAppExtras(name) {
        if (this.current.appExtras && this.current.appExtras[name]) {
            return this.current.appExtras[name];
        }
        return null;
    }
    getParamFromGxParameter(params, position) {
        return params.split(",")[position - 1];
    }
    uriFromObject(objectName, ...parameters) {
        return app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__.NavigationHelper.uriFromObject(objectName, ...parameters);
    }
    decodeURI_ex(uri) {
        return decodeURI(uri.replace(/\+/g, "%20"));
    }
    emptyPrimaryOutlet() {
        return this.routerNavigation.getCurrentLocation().startsWith("?");
    }
    updateVerticalTargetsBreakpointMatched(isMatched) {
        this.isVerticalTargetsBreakpointMatched = isMatched;
    }
}
CompositeNavigation.ɵfac = function CompositeNavigation_Factory(t) { return new (t || CompositeNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](app_gx_base_lazy_loader_service__WEBPACK_IMPORTED_MODULE_2__.LazyLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_3__.NavigationOptionsManager), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](app_gx_navigation_router_navigation__WEBPACK_IMPORTED_MODULE_4__.RouterNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](app_gx_navigation_outlets_navigation__WEBPACK_IMPORTED_MODULE_5__.OutletsNavigation)); };
CompositeNavigation.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: CompositeNavigation, factory: CompositeNavigation.ɵfac, providedIn: "root" });
/**
 * Encapsulates running actions syncronization and behaviour
 */
class CompositeActionsManager {
    constructor() {
        this.pendingNavigations = {};
        this.completedEvents = {};
        this.navigationResult = {};
        this.lastNbr = 0;
    }
    /**
     * Saves result to be returned given action
     * @param actionId
     *      Id of the awaiting action
     * @param result
     *      Data to return
     */
    saveResult(actionId, result) {
        this.navigationResult[actionId] = result;
    }
    /**
     * Waits for result to continue executing the async event
     * @param actionId
     *      Id of the awaiting action
     */
    waitForResult(actionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((complete) => {
                let pendingNavigation = this.pendingNavigations[actionId];
                if (!pendingNavigation) {
                    pendingNavigation = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
                    this.pendingNavigations[actionId] = pendingNavigation;
                }
                pendingNavigation.subscribe((result) => {
                    complete(result);
                });
            });
        });
    }
    /**
     * Waits for action to complete and resumes actions in 'waitForResult'
     * @param actionId
     *      Id of the action to resume
     */
    resumePendingEvent(actionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((complete) => {
                const pendingEvent = this.pendingNavigations[actionId];
                if (pendingEvent) {
                    this.pendingNavigations[actionId] = null;
                    const result = this.navigationResult[actionId];
                    pendingEvent.next(result);
                    pendingEvent.complete();
                    let completedEvent = this.completedEvents[actionId];
                    if (!completedEvent) {
                        completedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
                        this.completedEvents[actionId] = completedEvent;
                    }
                    completedEvent.subscribe((result) => {
                        complete(result);
                    });
                }
                else {
                    complete(null);
                }
            });
        });
    }
    waitForActionToComplete(actionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((complete) => {
                let completedEvent = this.completedEvents[actionId];
                if (!completedEvent) {
                    completedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
                    this.completedEvents[actionId] = completedEvent;
                }
                else {
                    if (completedEvent.isStopped) {
                        // Already completed
                        complete(null);
                    }
                }
                completedEvent.subscribe((result) => {
                    complete(result);
                });
            });
        });
    }
    /**
     * Completes pending action execution
     * @param backTo
     */
    endEvent(actionId) {
        let completedEvent = this.completedEvents[actionId];
        if (!completedEvent) {
            completedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
            this.completedEvents[actionId] = completedEvent;
        }
        completedEvent.next(actionId);
        completedEvent.complete(actionId);
    }
    getNextId() {
        return this.lastNbr++;
    }
}
/**
 * Transient state of the composite navigation
 */
class CompositeNavigationState {
}


/***/ }),

/***/ 3394:
/*!******************************************************!*\
  !*** ./src/app/gx/navigation/navigation-event.dt.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationEvent": () => (/* binding */ NavigationEvent)
/* harmony export */ });
class NavigationEvent {
}


/***/ }),

/***/ 9424:
/*!****************************************************!*\
  !*** ./src/app/gx/navigation/navigation-helper.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationHelper": () => (/* binding */ NavigationHelper)
/* harmony export */ });
class NavigationHelper {
    static newComponentInstanceId() {
        return NavigationHelper.componentInstanceId++;
    }
    static appendToQueryParams(nvgExt, key, value) {
        if (!nvgExt.queryParams) {
            const qParams = {};
            qParams[key] = value;
            nvgExt = { queryParams: qParams };
        }
        else {
            nvgExt.queryParams[key] = value;
        }
        return nvgExt;
    }
    static addQueryParams(nvgExt, queryParams) {
        if (!queryParams) {
            return nvgExt;
        }
        if (!nvgExt) {
            nvgExt = {};
        }
        if (!nvgExt.queryParams) {
            nvgExt.queryParams = queryParams;
        }
        else {
            for (let qp in queryParams) {
                nvgExt.queryParams[qp] = queryParams[qp];
            }
        }
        return nvgExt;
    }
    static toUriString(uri) {
        const parms = [];
        if (uri.length > 1) {
            for (let pty in uri[1]) {
                parms.push(uri[1][pty]);
            }
        }
        return this.uriFromObject(uri[0], ...parms);
    }
    static uriFromObject(objectName, ...parameters) {
        if (parameters.length > 0) {
            return (objectName +
                "?" +
                parameters
                    .map(p => {
                    return encodeURI(p);
                })
                    .join(","));
        }
        else {
            return objectName;
        }
    }
    static emptyParams(obj) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
}
NavigationHelper.componentInstanceId = 1;


/***/ }),

/***/ 1182:
/*!*************************************************************!*\
  !*** ./src/app/gx/navigation/navigation-options-manager.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationOptionsManager": () => (/* binding */ NavigationOptionsManager),
/* harmony export */   "OutletOptions": () => (/* binding */ OutletOptions)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class NavigationOptionsManager {
    constructor() {
        // Navigation options
        this.navigationOptions = {};
    }
    set(optionTarget, optionName, optionValue) {
        const optionTargetId = this.normalizeOptionTarget(optionTarget);
        let optionId = optionName.toLowerCase();
        let optionValueId1 = optionValue ? optionValue.toLocaleLowerCase() : null;
        if (optionId === NavigationOptionsManager.TYPE_ID && (optionValueId1 === NavigationOptionsManager.TYPE_POPUP_ID || optionValueId1 === NavigationOptionsManager.TYPE_CALLOUT_ID)) {
            // obj.type = popup -> obj.target = 'popup'
            optionId = NavigationOptionsManager.TARGET_ID;
            optionValueId1 = NavigationOptionsManager.TYPE_POPUP_ID;
        }
        const optionKey = this.getOptionKey(optionTargetId, optionId);
        this.navigationOptions[optionKey] = optionValueId1;
    }
    get(optionTarget, optionName) {
        const optionTargetId = this.normalizeOptionTarget(optionTarget);
        const optionId = optionName.toLowerCase();
        const optionKey = this.getOptionKey(optionTargetId, optionId);
        return this.navigationOptions[optionKey];
    }
    clear(optionTarget) {
        const optionTargetId = this.normalizeOptionTarget(optionTarget);
        for (const optionKey in this.navigationOptions) {
            if (this.isOptionForTarget(optionKey, optionTargetId)) {
                this.navigationOptions[optionKey] = null;
            }
        }
    }
    getOutlet(url) {
        const targetUri = url[0];
        if (typeof targetUri === "string") {
            // Target
            const optionTargetId = this.normalizeOptionTarget(url.join("/"));
            const optionKey = this.getOptionKey(optionTargetId, NavigationOptionsManager.TARGET_ID);
            const outlet = this.navigationOptions[optionKey];
            if (outlet) {
                this.navigationOptions[optionKey] = null; // release navigation option after usage
                return outlet;
            }
        }
        return null;
    }
    /**
     * Normalize input target, to obtain a unique tartget_name for option target identificacion, accepting formats:
     *    /<target_name>-<section>
     *    [<target_name>-<section>, <parameters>]
     * @param optionTarget
     */
    normalizeOptionTarget(optionTarget) {
        if (Array.isArray(optionTarget)) {
            // [<target_name>-<section>, <parameters>]
            if (optionTarget.length > 0) {
                const optionTarget1 = optionTarget[0];
                return this.normalizeOptionTarget(optionTarget1);
            }
        }
        else {
            // /<target_name>-<section>
            let optionTargetId = optionTarget;
            if (optionTargetId.startsWith("/")) {
                optionTargetId = optionTarget.substring(1);
            }
            if (optionTargetId.indexOf("-") >= 0) {
                return optionTargetId.substring(0, optionTargetId.indexOf("-"));
            }
            return optionTargetId;
        }
    }
    getOptionKey(optionTargetId, optionId) {
        return optionTargetId.toLowerCase() + "__" + optionId.toLowerCase();
    }
    isOptionForTarget(optionTargetFound, optionTargetId) {
        const key = this.getOptionKey(optionTargetId, "");
        return optionTargetFound.startsWith(key);
    }
    processNavigationOptionsExtras(url, nvgExt = {}) {
        // CallType
        if (this.isNavigationReplace(url)) {
            nvgExt.replaceUrl = true;
        }
        // Append query ID
        return this.appendIdToQueryParams(nvgExt);
    }
    isNavigationReplace(optionTarget) {
        const optionTargetId = this.normalizeOptionTarget(optionTarget);
        const optionKey = this.getOptionKey(optionTargetId, NavigationOptionsManager.TYPE_ID);
        return this.navigationOptions[optionKey] === NavigationOptionsManager.TYPE_REPLACE_ID;
    }
    appendIdToQueryParams(nvgExt) {
        const rnd = Math.floor(Math.random() * 1000 + 1);
        if (!nvgExt) {
            nvgExt = { queryParams: { _id: rnd } };
        }
        else if (nvgExt.queryParams) {
            nvgExt.queryParams = { _id: rnd };
        }
        return nvgExt;
    }
    processOutletOptions(outlet, url) {
        const options = new OutletOptions();
        options.size = this.get(url, NavigationOptionsManager.TARGET_SIZE_ID);
        options.width = OutletOptions.convertSize(this.get(url, NavigationOptionsManager.TARGET_WIDTH_ID));
        options.height = OutletOptions.convertSize(this.get(url, NavigationOptionsManager.TARGET_HEIGHT_ID));
        return options;
    }
}
// Option IDs
NavigationOptionsManager.TARGET_ID = 'target';
NavigationOptionsManager.TARGET_SIZE_ID = 'targetsize';
NavigationOptionsManager.TARGET_WIDTH_ID = 'targetwidth';
NavigationOptionsManager.TARGET_HEIGHT_ID = 'targetheight';
NavigationOptionsManager.TYPE_ID = 'type';
// TYPE option values
NavigationOptionsManager.TYPE_POPUP_ID = 'popup';
NavigationOptionsManager.TYPE_REPLACE_ID = 'replace';
NavigationOptionsManager.TYPE_CALLOUT_ID = 'callout';
NavigationOptionsManager.TYPE_PUSH_ID = 'push';
// TARGET_SIZE option values
NavigationOptionsManager.TARGET_SIZE_SMALL_ID = 'small';
NavigationOptionsManager.TARGET_SIZE_MEDIUM_ID = 'medium';
NavigationOptionsManager.TARGET_SIZE_LARGE_ID = 'large';
NavigationOptionsManager.ɵfac = function NavigationOptionsManager_Factory(t) { return new (t || NavigationOptionsManager)(); };
NavigationOptionsManager.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationOptionsManager, factory: NavigationOptionsManager.ɵfac, providedIn: "root" });
class OutletOptions {
    static convertSize(s) {
        return s ? s.replace("dip", "px") : null;
    }
}


/***/ }),

/***/ 623:
/*!***************************************************!*\
  !*** ./src/app/gx/navigation/navigation-state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationState": () => (/* binding */ NavigationState)
/* harmony export */ });
class NavigationState {
    constructor() {
        this.current = {};
    }
    save(iid, comp) {
        if (comp) {
            const state = {
                _name: comp.constructor.name,
                _tst: comp._tst,
                navigation: comp._navigation
            };
            for (const prop of comp.stateMembers[0].concat(comp.stateMembers[1])) {
                state[prop] = comp[prop];
            }
            this.current[iid] = state;
        }
    }
    update(iid, comp) {
        if (comp) {
            const state = this.current[iid];
            if (state) {
                for (const prop of comp.stateMembers[1]) {
                    state[prop] = comp[prop];
                }
            }
        }
    }
    restore(iid, comp) {
        const state = this.current[iid];
        if (state) {
            for (const prop of comp.stateMembers[0].concat(comp.stateMembers[1])) {
                comp[prop] = state[prop];
            }
            comp._navigation = state.navigation;
            return true;
        }
        return false;
    }
    getInstance(iid) {
        return this.current[iid];
    }
}


/***/ }),

/***/ 1896:
/*!*************************************************!*\
  !*** ./src/app/gx/navigation/outlets-helper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutletsHelper": () => (/* binding */ OutletsHelper)
/* harmony export */ });
/* harmony import */ var app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/navigation/navigation-helper */ 9424);

class OutletsHelper {
    static qsToOutlets(qs) {
        const result = [];
        if (qs) {
            const secondaryOutlets = qs.split("//");
            for (let o of secondaryOutlets) {
                let parts = o.split(":");
                result.push({ outlet: parts[0], url: decodeURIComponent(parts[1]) });
            }
        }
        return result;
    }
    static outletsToQs(outlets) {
        const result = '';
        if (outlets) {
            const qsOutlets = [];
            for (const o of outlets) {
                if (o.outlet.length > 0 && o.url && o.url.length > 0) {
                    qsOutlets.push(o.outlet + ':' + encodeURIComponent(o.url));
                }
            }
            return qsOutlets.join('//');
        }
        return result;
    }
    static isSecondaryOutlet(name) {
        return ['left', 'right', 'top', 'bottom', 'popup'].includes(name);
    }
    static mergeOutlets(activatedUrl, activatedQueryParms, outlet, oUrl, nvgExt) {
        const outlet1 = OutletsHelper.isSecondaryOutlet(outlet) ? outlet : null;
        if (outlet1) {
            const url = app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__.NavigationHelper.toUriString(oUrl);
            const qsOutlets = this.qsToOutlets(activatedQueryParms['_outlets']);
            let found = false;
            for (let o of qsOutlets) {
                if (o.outlet === outlet1) {
                    o.url = url;
                    found = true;
                }
            }
            if (!found) {
                qsOutlets.push({ outlet: outlet1, url: url });
            }
            return [activatedUrl, app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__.NavigationHelper.addQueryParams(nvgExt, { "_outlets": this.outletsToQs(qsOutlets) })];
        }
        else {
            return [oUrl, app_gx_navigation_navigation_helper__WEBPACK_IMPORTED_MODULE_0__.NavigationHelper.addQueryParams(nvgExt, activatedQueryParms)];
        }
    }
}


/***/ }),

/***/ 8967:
/*!*****************************************************!*\
  !*** ./src/app/gx/navigation/outlets-navigation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutletsNavigation": () => (/* binding */ OutletsNavigation),
/* harmony export */   "OutletHistoryData": () => (/* binding */ OutletHistoryData)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/web/GlobalEvents */ 461);
/* harmony import */ var app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/navigation/outlets-helper */ 1896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/navigation/navigation-options-manager */ 1182);





/**
 * Outlet routing and management
 */
class OutletsNavigation {
    constructor(nvgOptsMngr) {
        this.nvgOptsMngr = nvgOptsMngr;
        this.appOutlets = {};
        this.outletStack = new OutletStack();
    }
    /**
     * Renders to secondary outlets using url spec (see parm url)
     * @param url
     *        url must contain in the queryString the target outlet and the component to render in in
     *        queryParameter syntax "_outlets"=<outletName1>:<componentUrl1>//<outletName2>:<componentUrl2>//...<outletNameN>:<componentUrlN>
     *          componentUrl must be urlEncoded
     */
    loadSecondaryOutlets(url) {
        const activeOutlets = [];
        const outletsToLoad = this.parseSecondaryOutlets(url);
        for (let o of outletsToLoad) {
            this.setOutlet(o.outlet, o.url, this.nvgOptsMngr.processOutletOptions(o.outlet, o.url));
            activeOutlets.push(o.outlet);
        }
        // Clear deactivated outlets
        for (let o in this.appOutlets) {
            if (activeOutlets.indexOf(o) === -1) {
                this.setOutlet(o, null, null);
            }
        }
        return activeOutlets;
    }
    hasContentInPrimaryOutlet(url) {
        const urlSerializer = new _angular_router__WEBPACK_IMPORTED_MODULE_3__.DefaultUrlSerializer();
        const pUrl = urlSerializer.parse(url);
        if (pUrl.root.hasChildren()) {
            return true;
        }
        return false;
    }
    /**
     * Push navigation information to outlet stack
     * @param nid
     * @param outlet
     * @param url
     */
    pushToOutlet(nid, outlet, url) {
        // Avoid duplicates
        const head = this.outletStack.peek(outlet);
        if (head && JSON.stringify(head.url) === JSON.stringify(url)) {
            return;
        }
        this.outletStack.push(outlet, url, nid);
    }
    /**
     * Pop from outlet and returns NID and url
     * @param outlet
     */
    popFromOutlet(outlet) {
        this.outletStack.pop(outlet);
        const toOutlet = this.outletStack.peek(outlet);
        return toOutlet ? toOutlet : { url: [""], navigationId: 0 };
    }
    /**
   * Checks if there's somewhere to go back
   * @param outlet
   */
    canGoBack(outlet) {
        return this.outletStack.getCount(outlet) > 1;
    }
    showOutlet(outlet) {
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)('gx-standard-api-to-generator_showTarget', '', outlet);
    }
    setOutlet(outlet, uri, options) {
        this.appOutlets[outlet] = true;
        (0,_genexus_web_standard_functions_dist_lib_esm_web_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__.publish)('gx-app-setOutlet', outlet, uri, options);
    }
    parseSecondaryOutlets(url) {
        const urlSerializer = new _angular_router__WEBPACK_IMPORTED_MODULE_3__.DefaultUrlSerializer();
        const qs = urlSerializer.parse(url).queryParams;
        if (qs['_outlets']) {
            return app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_1__.OutletsHelper.qsToOutlets(qs['_outlets']);
        }
        return [];
    }
}
OutletsNavigation.ɵfac = function OutletsNavigation_Factory(t) { return new (t || OutletsNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_2__.NavigationOptionsManager)); };
OutletsNavigation.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OutletsNavigation, factory: OutletsNavigation.ɵfac, providedIn: "root" });
/**
 * Implements a stack for every used outlet
 */
class OutletStack {
    constructor() {
        this.outlets = new Array();
    }
    push(outlet, url, navigationId) {
        if (navigationId) {
            const o = this.outlets.find(x => x.name === outlet);
            if (o) {
                o.history.push({ url: url, navigationId: navigationId });
            }
            else {
                this.outlets.push({ name: outlet, history: [{ url: url, navigationId: navigationId }] });
            }
        }
    }
    pop(outlet) {
        const o = this.outlets.find(x => x.name === outlet);
        if (o) {
            return o.history.pop();
        }
        else {
            return null;
        }
    }
    peek(outlet) {
        const o = this.outlets.find(x => x.name === outlet);
        if (o) {
            return this.getHead(o);
        }
        else {
            return null;
        }
    }
    getCount(outlet) {
        const o = this.outlets.find(x => x.name === outlet);
        if (o) {
            return o.history.length;
        }
        return 0;
    }
    getHead(o) {
        if (o && o.history.length > 0) {
            return o.history[o.history.length - 1];
        }
        return null;
    }
}
class OutletState {
}
class OutletHistoryData {
}


/***/ }),

/***/ 4912:
/*!************************************************************!*\
  !*** ./src/app/gx/navigation/panel-navigation-state.dt.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelNavigationState": () => (/* binding */ PanelNavigationState)
/* harmony export */ });
class PanelNavigationState {
}


/***/ }),

/***/ 5223:
/*!****************************************************!*\
  !*** ./src/app/gx/navigation/router-navigation.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterNavigation": () => (/* binding */ RouterNavigation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var app_gx_navigation_navigation_event_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/navigation/navigation-event.dt */ 3394);
/* harmony import */ var app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/navigation/outlets-helper */ 1896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/navigation/navigation-options-manager */ 1182);









/**
 * Angular routing to app routing interface
 */
class RouterNavigation {
    constructor(location, activatedRoute, nvgOptsMngr, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.nvgOptsMngr = nvgOptsMngr;
        this.router = router;
        this.defaultSegment = 'app';
        this.navigationEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.nidToNavigationEvent = {};
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
                // Process changing location
                if (this.currentLocation !== event.url) {
                    const nvgData = this.getCurrentNavigationExtras('nvg');
                    const appData = this.getCurrentNavigationExtras('app');
                    const routerTransientState = this.getCurrentNavigationExtras('transient');
                    // Update location state
                    this.currentLocation = event.url;
                    const navigationEvent = new app_gx_navigation_navigation_event_dt__WEBPACK_IMPORTED_MODULE_0__.NavigationEvent();
                    navigationEvent.type = 'start';
                    navigationEvent.id = event.id;
                    navigationEvent.uri = event.url;
                    navigationEvent.trigger = event.navigationTrigger;
                    navigationEvent.navigationCommand = routerTransientState.navigationCommand ? routerTransientState.navigationCommand : [""];
                    navigationEvent.outlet = routerTransientState.outlet ? routerTransientState.outlet : null;
                    if (event.navigationTrigger === 'popstate') { // browser back/forward navigation
                        navigationEvent.trigger = 'popstate';
                        const popNavigationEvent = this.nidToNavigationEvent[event.restoredState.navigationId];
                        navigationEvent.nvgExtras = popNavigationEvent.nvgExtras;
                        navigationEvent.appExtras = popNavigationEvent.appExtras;
                        navigationEvent.restoredId = event.restoredState.navigationId;
                        this.nidToNavigationEvent[navigationEvent.id] = navigationEvent;
                    }
                    else if (routerTransientState.isBackNavigation) { // app return/cancel
                        navigationEvent.trigger = 'appback';
                        navigationEvent.nvgExtras = nvgData;
                        navigationEvent.appExtras = appData;
                        navigationEvent.restoredId = routerTransientState.backNID;
                        this.nidToNavigationEvent[navigationEvent.id] = navigationEvent;
                    }
                    else { // app forward navigation
                        navigationEvent.trigger = 'imperative';
                        navigationEvent.nvgExtras = nvgData;
                        navigationEvent.appExtras = appData;
                        this.nidToNavigationEvent[navigationEvent.id] = navigationEvent;
                    }
                    this.navigationEvent$.next(navigationEvent);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
                const routerTransientState = this.getCurrentNavigationExtras("transient");
                const navigationEvent = new app_gx_navigation_navigation_event_dt__WEBPACK_IMPORTED_MODULE_0__.NavigationEvent();
                navigationEvent.type = 'end';
                navigationEvent.uri = event.url;
                navigationEvent.id = event.id;
                navigationEvent.outlet = routerTransientState.outlet ? routerTransientState.outlet : null;
                this.navigationEvent$.next(navigationEvent);
            }
        });
    }
    getNavigationEvent(nid) {
        return this.nidToNavigationEvent[nid];
    }
    navigate(nvgCommand, outlet, navigationExtras) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const transientState = new RoutingTransientState(nvgCommand, outlet, false, 0);
            this.addNavigationExtras("transient", transientState, navigationExtras);
            yield this.navigate_impl(nvgCommand, outlet, navigationExtras);
        });
    }
    navigateBack(nvgCommand, outlet, backNID, navigationExtras) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Add transient routing state
            const transientState = new RoutingTransientState(nvgCommand, outlet, true, backNID);
            this.addNavigationExtras("transient", transientState, navigationExtras);
            yield this.navigate_impl(nvgCommand, outlet, navigationExtras);
        });
    }
    navigate_impl(nvgCommand, outlet, navigationExtras) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let targetUrl = nvgCommand;
            // Setup navigation options CallOptions, Id, Querystring
            let nvgExt = this.nvgOptsMngr.processNavigationOptionsExtras(nvgCommand[0], navigationExtras);
            // Resolve outlets
            [targetUrl, nvgExt] = app_gx_navigation_outlets_helper__WEBPACK_IMPORTED_MODULE_1__.OutletsHelper.mergeOutlets(this.activatedRoute.snapshot.url, this.activatedRoute.snapshot.queryParams, outlet, nvgCommand, nvgExt);
            targetUrl = this.normalizeRoute(targetUrl);
            // Invalid URL 
            if (targetUrl.length > 0 && targetUrl[0].length === 0) {
                return Promise.reject("Cannot navigate to an empty URL");
            }
            // Navigate
            return this.router.navigate(targetUrl, nvgExt);
        });
    }
    navigateByUrl(url, navigationExtras) {
        this.router.navigateByUrl(url, navigationExtras);
    }
    getCurrentLocation() {
        return this.location.path();
    }
    setNavigationExtras(nvgData, appData, navigationExtras = {}) {
        let navigationExtras1 = this.addNavigationExtras("nvg", nvgData, navigationExtras);
        navigationExtras1 = this.addNavigationExtras("app", appData, navigationExtras1);
        return navigationExtras1;
    }
    getCurrentNavigationExtras(dataName) {
        const currentNavigation = this.router.getCurrentNavigation();
        if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state && currentNavigation.extras.state[dataName]) {
            return currentNavigation.extras.state[dataName];
        }
        else {
            return {};
        }
    }
    addNavigationExtras(dataName, dataContent, navigationExtras) {
        if (!navigationExtras) {
            navigationExtras = { state: {} };
        }
        else if (!navigationExtras.state) {
            navigationExtras.state = {};
        }
        navigationExtras.state[dataName] = dataContent;
        return navigationExtras;
    }
    normalizeRoute(targetUri) {
        const uriSegments = this.normalizeRouteCommands(targetUri);
        const prefixSegment = this.resolvePrefixSegment(uriSegments);
        return [prefixSegment].concat(uriSegments).filter(x => x !== null);
    }
    normalizeRouteCommands(cmds) {
        let newCmds = [];
        for (let cmd of cmds) {
            if (typeof cmd === "string") {
                newCmds = newCmds.concat(cmd.split('/')); // path as string
            }
            else {
                newCmds.push(cmd); // other parameters
            }
        }
        return newCmds;
    }
    resolvePrefixSegment(path) {
        if (path.length === 0 || path[0].length === 0) {
            // No route or empty route
            return null;
        }
        let sPath = '';
        for (let segment of path) {
            if (typeof segment === 'string') {
                sPath += segment;
            }
        }
        let r = null;
        for (r of this.router.config) {
            if (r.path && r.path === sPath) {
                return null;
            }
        }
        return this.defaultSegment;
    }
}
RouterNavigation.ɵfac = function RouterNavigation_Factory(t) { return new (t || RouterNavigation)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](app_gx_navigation_navigation_options_manager__WEBPACK_IMPORTED_MODULE_2__.NavigationOptionsManager), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RouterNavigation.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RouterNavigation, factory: RouterNavigation.ɵfac, providedIn: "root" });
class RoutingTransientState {
    constructor(navigationCommand, outlet, isBackNavigation, backNID) {
        this.navigationCommand = navigationCommand;
        this.outlet = outlet;
        this.isBackNavigation = isBackNavigation;
        this.backNID = backNID;
    }
}


/***/ }),

/***/ 9779:
/*!******************************************!*\
  !*** ./src/app/gx/std/client-storage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientStorage": () => (/* binding */ ClientStorage)
/* harmony export */ });
class ClientStorage {
    static Set(key, data) {
        window.localStorage.setItem(key, data);
    }
    static Get(key) {
        return window.localStorage.getItem(key);
    }
    static Remove(key) {
        window.localStorage.removeItem(key);
    }
    static Clear() {
        window.localStorage.clear();
    }
}


/***/ }),

/***/ 6741:
/*!************************************************!*\
  !*** ./src/app/gx/std/prefers-color-scheme.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefersColorScheme": () => (/* binding */ PrefersColorScheme)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1689);

class PrefersColorScheme {
    static getObservable() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            const media = window.matchMedia('(prefers-color-scheme: dark)');
            const fn = (e) => {
                observer.next(e.matches ? 'dark' : 'light');
            };
            media.addEventListener("change", fn);
            return {
                unsubscribe() {
                    media.removeEventListener("change", fn);
                }
            };
        });
    }
}


/***/ }),

/***/ 3617:
/*!*************************************!*\
  !*** ./src/app/gx/ui/animations.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEnterLeaveAnimation": () => (/* binding */ createEnterLeaveAnimation),
/* harmony export */   "createFadeInOutAnimation": () => (/* binding */ createFadeInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4117);

function createEnterLeaveAnimation(name, visibleHeight) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(name, [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: 0, opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(".3s ease-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: visibleHeight, opacity: 1 })),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: visibleHeight, opacity: 1 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(".3s ease-in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: 0, opacity: 0 })),
        ]),
    ]);
}
function createFadeInOutAnimation(name) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)(name, [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(".3s ease-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(".3s ease-in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
        ]),
    ]);
}


/***/ }),

/***/ 9399:
/*!***********************************************************************!*\
  !*** ./src/app/gx/ui/controls/action-group/action-group.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionGroupComponent": () => (/* binding */ ActionGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/ui/controls/timer/timer.component */ 9159);




const _c0 = ["*"];
class ActionGroupComponent {
    constructor() {
        this.show = false;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.timerState = app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__.TimerState.Stopped;
    }
    ;
    dismissGroup() {
        this.show = false;
        this.onClose.emit();
    }
    ngOnChanges() {
        if (this.show) {
            this.timerState = app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__.TimerState.Running;
        }
        else {
            this.timerState = app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__.TimerState.Reset;
        }
    }
}
ActionGroupComponent.ɵfac = function ActionGroupComponent_Factory(t) { return new (t || ActionGroupComponent)(); };
ActionGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActionGroupComponent, selectors: [["gx-action-group"]], inputs: { show: "show" }, outputs: { onClose: "onClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["interval", "1", "maxValue", "5", 3, "state", "onEnd"], [1, "action-group-panel", 3, "hidden"]], template: function ActionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "gx-timer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onEnd", function ActionGroupComponent_Template_gx_timer_onEnd_0_listener() { return ctx.dismissGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx.timerState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.show);
    } }, directives: [app_gx_ui_controls_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__.TimerComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.action-group-panel[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px gray solid;\n  margin: 10px;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUVJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiYWN0aW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWN0aW9uLWdyb3VwLXBhbmVsIHtcclxuICAgIC8vIFRPRE86IEZvcm1hdCB0aGlzIVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8311:
/*!*******************************************************************************!*\
  !*** ./src/app/gx/ui/controls/audio-controller/audio-controller.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioControllerComponent": () => (/* binding */ AudioControllerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class AudioControllerComponent {
}
AudioControllerComponent.ɵfac = function AudioControllerComponent_Factory(t) { return new (t || AudioControllerComponent)(); };
AudioControllerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioControllerComponent, selectors: [["AudioController"]], decls: 1, vars: 0, template: function AudioControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "AudioController not implemented yet!");
    } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0QiLCJmaWxlIjoiYXVkaW8tY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7561:
/*!***************************************************************************!*\
  !*** ./src/app/gx/ui/controls/component-host/component-host.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentHostComponent": () => (/* binding */ ComponentHostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _component_outlet_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/ui/controls/component-host/component-outlet.directive */ 4016);
/* harmony import */ var app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.settings */ 9783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5755);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8406);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3815);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 7504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var app_gx_base_visibility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/gx/base/visibility.service */ 2435);
/* harmony import */ var app_gx_base_lazy_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/base/lazy-loader.service */ 9586);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8143);










function ComponentHostComponent_ng_template_1_Template(rf, ctx) { }
function ComponentHostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border", 0);
} }
class ComponentHostComponent {
    constructor(nvg, visibilityService, host, loader, cdr) {
        this.nvg = nvg;
        this.visibilityService = visibilityService;
        this.host = host;
        this.loader = loader;
        this.cdr = cdr;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.lastComponentUri = null;
        this.lastVersion = 0;
        this.started = false;
        this.started$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(false);
        this.uri$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
        this.version$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(0);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let visible$ = null;
            if (app_app_settings__WEBPACK_IMPORTED_MODULE_1__.Settings.loadComponentsWhenOnSight) {
                visible$ = this.visibilityService.elementInSight(this.host);
            }
            else {
                visible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(true);
            }
            const componentChanged$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)(visible$, this.uri$, this.started$, this.version$);
            this.subscription.add(componentChanged$.subscribe((status) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                const visible = status[0];
                const uri = status[1];
                this.started = status[2];
                const version = status[3];
                if (this.started && visible && (this.lastVersion !== version || this.lastComponentUri !== uri)) {
                    yield this.loadComponent(uri, version);
                    this.lastComponentUri = uri;
                    this.lastVersion = version;
                }
            })));
        });
    }
    ngOnChanges() {
        this.uri$.next(this.componentUri);
    }
    start(dataContext = null, uiContext = null) {
        if (!this.started) {
            let uri = this.componentUri;
            if (uiContext && uiContext.object) {
                uri = uiContext.object;
            }
            if (dataContext) {
                uri = this.buildWithContext(dataContext, uri);
            }
            this.uri$.next(uri);
            this.started$.next(true);
        }
    }
    refresh(context = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.started) {
                let uri = this.componentUri;
                if (context) {
                    uri = this.buildWithContext(context, this.componentUri);
                }
                this.uri$.next(uri);
                this.version$.next(this.lastVersion + 1);
            }
        });
    }
    buildWithContext(context, uri) {
        if (uri) {
            const startParmsPos = uri.indexOf("?");
            if (startParmsPos >= 0) {
                const parms = [];
                for (let p of uri.substr(startParmsPos + 1).split(",")) {
                    if (p.startsWith("&")) {
                        p = p.substr(1);
                    }
                    if (context[p] !== undefined) {
                        parms.push(context[p]);
                    }
                    else {
                        parms.push(p);
                    }
                }
                return uri.substr(0, startParmsPos) + "?" + parms.join(",");
            }
        }
        return uri;
    }
    loadComponent(uri, version) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (uri) {
                const compToCall = yield this.nvg.parseDyncall(uri);
                if (compToCall) {
                    const componentFactory = yield this.loader.findComponentFactory(compToCall[0]);
                    const viewContainerRef = this.componentHost.viewContainerRef;
                    viewContainerRef.clear();
                    this.componentRef = viewContainerRef.createComponent(componentFactory);
                    if (compToCall.length > 1) {
                        const panelComponent = this.componentRef.instance;
                        if (version === this.lastVersion) {
                            panelComponent.initDynComponent(this.getHostId(), { _gxParameterValues: compToCall[1] });
                        }
                        else {
                            panelComponent.refreshDynComponent(this.getHostId(), { _gxParameterValues: compToCall[1] });
                        }
                        this.cdr.markForCheck();
                    }
                }
            }
            else {
                this.componentHost.viewContainerRef.clear();
            }
        });
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const panelComponent = this.componentRef.instance;
            if (panelComponent) {
                yield panelComponent.__Cancel();
            }
        });
    }
    getHostId() {
        return this.parentOutlet ? this.parentOutlet + "-" + this.id : this.id;
    }
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.subscription.unsubscribe();
    }
}
ComponentHostComponent.ɵfac = function ComponentHostComponent_Factory(t) { return new (t || ComponentHostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_2__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_gx_base_visibility_service__WEBPACK_IMPORTED_MODULE_3__.VisibilityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_gx_base_lazy_loader_service__WEBPACK_IMPORTED_MODULE_4__.LazyLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
ComponentHostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ComponentHostComponent, selectors: [["gx-component-host"]], viewQuery: function ComponentHostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_component_outlet_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentOutletDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentHost = _t.first);
    } }, inputs: { componentUri: "componentUri", id: "id", parentOutlet: "parentOutlet" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [["gx-component-outlet", ""], ["class", "ph-item", 3, "border", 4, "ngIf"], [1, "ph-item"], [1, "ph-col-12"], [1, "ph-picture"], [1, "ph-row"], [1, "ph-col-6", "big"], [1, "ph-col-4", "empty", "big"], [1, "ph-col-2", "big"], [1, "ph-col-4"], [1, "ph-col-8", "empty"], [1, "ph-col-6"], [1, "ph-col-6", "empty"]], template: function ComponentHostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ComponentHostComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ComponentHostComponent_div_2_Template, 12, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.componentUri != null && ctx.lastComponentUri === null);
    } }, directives: [_component_outlet_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]    > div[_ngcontent-%COMP%] { display: flex; flex: 1; flex-direction: column; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC1ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUIsYUFBYSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSIsImZpbGUiOiJjb21wb25lbnQtaG9zdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgOmhvc3QgPiBkaXYgeyBkaXNwbGF5OiBmbGV4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 4016:
/*!*****************************************************************************!*\
  !*** ./src/app/gx/ui/controls/component-host/component-outlet.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentOutletDirective": () => (/* binding */ ComponentOutletDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class ComponentOutletDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ComponentOutletDirective.ɵfac = function ComponentOutletDirective_Factory(t) { return new (t || ComponentOutletDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ComponentOutletDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ComponentOutletDirective, selectors: [["", "gx-component-outlet", ""]] });


/***/ }),

/***/ 9213:
/*!*********************************************************************!*\
  !*** ./src/app/gx/ui/controls/file-upload/file-upload.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/utils/uri-cache/uri-cache.service */ 8385);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _utils_translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/translate.pipe */ 3270);








const _c0 = ["fileInput"];
function FileUploadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileUploadComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r3.viewFile(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.fileSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.fileShowName, " ");
} }
function FileUploadComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileUploadComponent_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r5.triggerAction(); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.disabled || ctx_r1.uploading);
} }
class FileUploadComponent {
    constructor(uriCacheService, app, titleService) {
        this.uriCacheService = uriCacheService;
        this.app = app;
        this.titleService = titleService;
        this.fileSource = '';
        this.disabled = false;
        this.readonly = false;
        this.uploadService = null;
        this.onFileChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.showDialog = false;
        this.uploading = false;
        this.fileShowName = '';
    }
    ngOnChanges() {
        this.modalTitle = this.titleService.getTitle();
        this.fileShowName = this.fileSource.slice(this.fileSource.lastIndexOf("/") + 1);
    }
    triggerAction() {
        if (this.fileSource === '') {
            this.file.nativeElement.click();
        }
        else {
            this.showDialog = !this.showDialog;
        }
    }
    viewFile() {
        if (!this.showDialog) {
            this.app.open(this.fileSource);
        }
    }
    clearFileAction() {
        this.fileSource = '';
        this.uploading = false;
        this.onFileChanged.emit('');
    }
    onFileSelected() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const files = this.file.nativeElement.files;
            for (let key in files) {
                if (!isNaN(parseInt(key))) {
                    this.uploading = true;
                    const objectId = yield this.uploadFile(files[key]);
                    this.onFileChanged.emit(objectId);
                    this.uploading = false;
                    this.showDialog = false;
                    this.fileShowName = files[key].name;
                    return;
                }
            }
        });
    }
    uploadFile(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.uploadService) {
                const result = yield this.uploadService(file);
                this.uriCacheService.store(result.object_id, file);
                return result.object_id;
            }
            else {
                const objectId = "gxupload:" + Math.floor(Math.random() * 100000000 + 1);
                this.uriCacheService.store(objectId, file);
                return objectId;
            }
        });
    }
    closeAction() {
        this.showDialog = false;
    }
    translate(key) {
        return this.app.translate(key);
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_0__.UriCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_1__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["gx-file-upload"]], viewQuery: function FileUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, inputs: { fileSource: "fileSource", disabled: "disabled", readonly: "readonly", uploadService: "uploadService" }, outputs: { onFileChanged: "onFileChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 13, consts: [[1, "click-capture"], [1, "file-viewer"], ["class", "file-viewer-file", 3, "href", "click", 4, "ngIf"], [1, "file-viewer-button"], ["ngClass", "file-edit", 3, "disabled", "click", 4, "ngIf"], [1, "action-dialog", 3, "opened", "onClose"], ["slot", "header"], ["slot", "body", 2, "display", "flex", "justify-content", "space-around"], [1, "select-file"], ["type", "file", 3, "change"], ["fileInput", ""], [1, "Button", 3, "click"], ["slot", "secondary-action"], [1, "file-viewer-file", 3, "href", "click"], ["ngClass", "file-edit", 3, "disabled", "click"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FileUploadComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FileUploadComponent_button_4_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "gx-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClose", function FileUploadComponent_Template_gx_modal_onClose_5_listener() { return ctx.closeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_13_listener($event) { ctx.onFileSelected(); ctx.closeAction(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "gx-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileUploadComponent_Template_gx_button_click_15_listener($event) { ctx.clearFileAction(); ctx.closeAction(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "gx-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileUploadComponent_Template_gx_button_click_19_listener($event) { ctx.closeAction(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fileSource && ctx.fileSource.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", ctx.showDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, "Change file"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 9, "Remove file"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 11, "GXM_cancel"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  pointer-events: none;\n}\n\n.click-capture[_ngcontent-%COMP%] {\n  display: contents;\n  pointer-events: auto;\n}\n\n.file-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  max-height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.file-viewer[_ngcontent-%COMP%]   .file-viewer-file[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  flex: 3;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.file-viewer[_ngcontent-%COMP%]   .file-viewer-button[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 100%;\n  height: 100%;\n}\n\n.file-viewer[_ngcontent-%COMP%]   .file-viewer-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  content: url(\"/assets/images/multimediaedit.png\");\n}\n\n.action-dialog[_ngcontent-%COMP%]   .select-file[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-right: 3px;\n  text-transform: uppercase;\n}\n\n.action-dialog[_ngcontent-%COMP%]   .select-file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-edit[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-style: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n}\n\n.file-edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/multimediaedit.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: transparent;\n  border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDUjs7QUFFSTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBUjs7QUFFUTtFQUNJLGlEQUFBO0FBQVo7O0FBTUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUhSOztBQUtRO0VBQ0ksYUFBQTtBQUhaOztBQVFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPSTtFQUNJLDBEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFMUiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jbGljay1jYXB0dXJlIHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi5maWxlLXZpZXdlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmIC5maWxlLXZpZXdlci1maWxlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuXHJcbiAgICAmIC5maWxlLXZpZXdlci1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tdWx0aW1lZGlhZWRpdC5wbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWRpYWxvZyB7XHJcbiAgICAuc2VsZWN0LWZpbGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL211bHRpbWVkaWFlZGl0LnBuZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 816:
/*!******************************************************************!*\
  !*** ./src/app/gx/ui/controls/form/form-properties.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPropertiesDirective": () => (/* binding */ FormPropertiesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 8394);


class FormPropertiesDirective {
    constructor(viewContainerRef, _metaService, _titleService) {
        this.viewContainerRef = viewContainerRef;
        this._metaService = _metaService;
        this._titleService = _titleService;
    }
    ngOnChanges() {
        if (this.caption) {
            this._titleService.setTitle(this.caption);
            this._metaService.updateTag({ name: "description", content: this.caption });
        }
    }
}
FormPropertiesDirective.ɵfac = function FormPropertiesDirective_Factory(t) { return new (t || FormPropertiesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title)); };
FormPropertiesDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FormPropertiesDirective, selectors: [["", "gx-form-properties", ""]], inputs: { caption: ["formCaption", "caption"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 8444:
/*!*********************************************************************!*\
  !*** ./src/app/gx/ui/controls/geolocation/geolocation.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationComponent": () => (/* binding */ GeolocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8143);



function GeolocationComponent_gx_map_marker_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "gx-map-marker", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coords", ctx_r0.convertCoords(ctx_r0.coords));
} }
class GeolocationComponent {
    constructor() {
        this.coords = "";
        this.disabled = false;
        this.readonly = false;
        this.onGeolocationChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.zoom = "1";
    }
    ngOnInit() {
        if (this.coords !== "") {
            this.zoom = "15";
        }
    }
    convertCoords(x) {
        let pt = x.trim().toUpperCase();
        if (pt.startsWith("POINT")) {
            let sCoords = pt.replace(")", "").replace("(", "");
            let coords = sCoords.split(" ");
            return "" + coords[2] + "," + coords[1];
        }
        else {
            return pt;
        }
    }
    coordsChanged(x) {
        if (!this.readonly && !this.disabled) {
            this.onGeolocationChanged.emit(x);
        }
    }
}
GeolocationComponent.ɵfac = function GeolocationComponent_Factory(t) { return new (t || GeolocationComponent)(); };
GeolocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeolocationComponent, selectors: [["gx-geolocation"]], inputs: { coords: "coords", disabled: "disabled", readonly: "readonly" }, outputs: { onGeolocationChanged: "onGeolocationChanged" }, decls: 2, vars: 4, consts: [[3, "selectionLayer", "center", "zoom", "selectionChange"], [3, "coords", 4, "ngIf"], [3, "coords"]], template: function GeolocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gx-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GeolocationComponent_Template_gx_map_selectionChange_0_listener($event) { return ctx.coordsChanged($event.detail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeolocationComponent_gx_map_marker_1_Template, 1, 1, "gx-map-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectionLayer", !(ctx.readonly || ctx.disabled))("center", ctx.convertCoords(ctx.coords))("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.readonly || ctx.disabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6Imdlb2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8321:
/*!***********************************************************************!*\
  !*** ./src/app/gx/ui/controls/image-upload/image-upload.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploadComponent": () => (/* binding */ ImageUploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/utils/uri-cache/uri-cache.service */ 8385);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _utils_translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/translate.pipe */ 3270);







const _c0 = ["imageUpload"];
class ImageUploadComponent {
    constructor(uriCacheService, app, titleService) {
        this.uriCacheService = uriCacheService;
        this.app = app;
        this.titleService = titleService;
        this.alt = "";
        this.autoGrow = true;
        this.disabled = false;
        this.invisibleMode = "collapse";
        this.lazyLoad = true;
        this.lowResolutionSrc = "";
        this.src = "";
        this.highlightable = false;
        this.readonly = false;
        this.modalTitle = null;
        this.changeButtonText = "Change image...";
        this.removeButtonText = "Remove image";
        this.cancelButtonText = "GXM_cancel";
        this.uploadService = null;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.onImageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.state = "readyToUse";
    }
    handleImageChange(event) {
        // This stopPropagation() allows to not call the external event, defined
        // when using the Angular's control
        event.stopPropagation();
        // The image was removed
        if (event.detail == null) {
            this.src = null;
            this.alt = "";
            this.onImageChanged.emit("");
        }
        // The image was updated
        else {
            const imageFile = event.detail;
            this.fileSelectedAction(imageFile);
        }
    }
    clickImageAction(event) {
        // This stopPropagation() allows to not call the external event, defined
        // when using the Angular's control
        event.stopPropagation();
        this.click.emit(event);
    }
    fileSelectedAction(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.state = "uploadingFile";
            const objectId = yield this.onFileSelected(file);
            if (objectId) {
                yield this.updateImage(file, objectId);
            }
            this.state = "readyToUse";
            return;
        });
    }
    onFileSelected(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.uploadService(file);
            return result.object_id;
        });
    }
    translate(key) {
        return this.app.translate(key);
    }
    updateImage(file, objectId) {
        return new Promise((complete) => {
            if (file) {
                const gxImageUpload = this.imageUpload.nativeElement;
                const fileURL = this.uriCacheService.store(objectId, file);
                this.src = fileURL;
                this.alt = gxImageUpload.alt;
                this.onImageChanged.emit(objectId);
                complete();
            }
        });
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_utils_uri_cache_uri_cache_service__WEBPACK_IMPORTED_MODULE_0__.UriCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_1__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
ImageUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["gx-image-upload"]], viewQuery: function ImageUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.imageUpload = _t.first);
    } }, inputs: { alt: "alt", autoGrow: "autoGrow", disabled: "disabled", height: "height", invisibleMode: "invisibleMode", lazyLoad: "lazyLoad", lowResolutionSrc: "lowResolutionSrc", scaleType: "scaleType", src: "src", width: "width", highlightable: "highlightable", readonly: "readonly", modalTitle: "modalTitle", changeButtonText: "changeButtonText", removeButtonText: "removeButtonText", cancelButtonText: "cancelButtonText", uploadService: "uploadService" }, outputs: { click: "click", onImageChanged: "onImageChanged" }, decls: 6, vars: 25, consts: [[3, "alt", "autoGrow", "disabled", "height", "invisibleMode", "lazyLoad", "lowResolutionSrc", "scaleType", "src", "width", "highlightable", "modalTitle", "changeButtonText", "removeButtonText", "cancelButtonText", "state", "click", "onImageChanged"], ["imageUpload", ""]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "gx-image-picker", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImageUploadComponent_Template_gx_image_picker_click_0_listener($event) { return ctx.clickImageAction($event); })("onImageChanged", function ImageUploadComponent_Template_gx_image_picker_onImageChanged_0_listener($event) { return ctx.handleImageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", ctx.alt)("autoGrow", ctx.autoGrow)("disabled", ctx.disabled)("height", ctx.height)("invisibleMode", ctx.invisibleMode)("lazyLoad", ctx.lazyLoad)("lowResolutionSrc", ctx.lowResolutionSrc)("scaleType", ctx.scaleType)("src", ctx.src)("width", ctx.width)("highlightable", ctx.highlightable)("modalTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 17, ctx.modalTitle))("changeButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 19, ctx.changeButtonText))("removeButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 21, ctx.removeButtonText))("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 23, ctx.cancelButtonText))("state", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("readonly", ctx.readonly);
    } }, pipes: [_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJpbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 5449:
/*!***************************************************************!*\
  !*** ./src/app/gx/ui/controls/messages/messages.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _utils_translate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/translate.pipe */ 3270);





class MessagesComponent {
    constructor(app, titleService) {
        this.app = app;
        this.titleService = titleService;
        this.statusOpened = false;
        this.statusCount = 0;
        this.statusDuration = 3; // 3 seconds
        this.statusBarClass = "";
        this.modalOpened = false;
        this.allowCancelAction = false;
    }
    ngOnChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.modalTitle = this.titleService.getTitle();
            if (this.message) {
                if (this.message.type === "message") {
                    this.showStatusMessage();
                }
                else if (this.message.type === "messageWarning") {
                    this.showStatusMessage('warning');
                }
                else if (this.message.type === "messageError") {
                    this.showStatusMessage('error');
                }
                else if (this.message.type === "error") {
                    this.showErrorMessage();
                }
                else if (this.message.type === "confirm") {
                    this.showConfirmMessage();
                }
            }
        });
    }
    showStatusMessage(type = 'info') {
        this.onConfirm = this.message.onConfirm;
        this.statusBarClass = "show";
        this.statusCount = this.statusDuration;
        this.statusMessage = this.message.text;
        this.statusMessageType = type;
        if (!this.statusOpened) {
            this.statusOpened = true;
            const interval = setInterval(() => {
                if (this.statusCount > 0) {
                    this.statusCount--;
                }
                else {
                    this.statusBarClass = "";
                    this.statusMessage = null;
                    this.statusOpened = false;
                    clearInterval(interval);
                }
            }, 1000);
        }
        if (this.onConfirm)
            this.onConfirm();
    }
    showErrorMessage() {
        this.onConfirm = this.message.onConfirm;
        this.confirmCaption = this.translate("GXM_Ok");
        this.allowCancelAction = false;
        this.modalOpened = true;
        this.modalMessage = this.message.text;
    }
    showConfirmMessage() {
        this.onConfirm = this.message.onConfirm;
        this.onCancel = this.message.onCancel;
        this.confirmCaption = this.translate("GXM_Confirm");
        this.allowCancelAction = true;
        this.modalOpened = true;
        this.modalMessage = this.message.text;
    }
    closeAction() {
        this.modalOpened = false;
        if (this.onCancel)
            this.onCancel();
    }
    confirmAction() {
        this.modalOpened = false;
        if (this.onConfirm)
            this.onConfirm();
    }
    cancelAction() {
        this.modalOpened = false;
        if (this.onCancel)
            this.onCancel();
    }
    translate(key) {
        return this.app.translate(key);
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["gx-messages"]], inputs: { message: "message" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 12, consts: [["id", "messageBar"], [3, "type"], [3, "opened", "close"], ["slot", "header"], ["slot", "body"], ["slot", "primary-action"], [1, "Button", 3, "click"], ["slot", "secondary-action", 3, "hidden"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "gx-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "gx-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function MessagesComponent_Template_gx_modal_close_3_listener() { return ctx.closeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "gx-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessagesComponent_Template_gx_button_click_9_listener() { return ctx.confirmAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "gx-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessagesComponent_Template_gx_button_click_12_listener() { return ctx.cancelAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.statusBarClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx.statusMessageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.statusMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", ctx.modalOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.modalMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.confirmCaption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.allowCancelAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, "GXM_cancel"), " ");
    } }, pipes: [_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["#messageBar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 101;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 50px;\n  text-align: center;\n  overflow: hidden;\n  transform: translateY(-100%);\n}\n\n#messageBar.show[_ngcontent-%COMP%] {\n  animation: slideDown 0.5s 0s 1 ease forwards;\n}\n\n@keyframes slideDown {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNHLDRCQUFBO0VBQ0w7RUFFRTtJQUNJLHlCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXNzYWdlQmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG5cclxuI21lc3NhZ2VCYXIuc2hvdyB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjVzIDBzIDEgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9746:
/*!***************************************************************!*\
  !*** ./src/app/gx/ui/controls/progress/progress.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
/* harmony import */ var _progress_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.service */ 9619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class ProgressComponent {
    constructor() {
        this.settings = new _progress_service__WEBPACK_IMPORTED_MODULE_0__.UIProgress();
        this.show = false;
    }
    ngOnChanges() {
        if (this.updateSettings) {
            for (const st in this.updateSettings) {
                this.settings[st] = this.updateSettings[st];
            }
            this.sValue = this.settings.value / this.settings.maxValue * 100 + '';
            if (!this.settings.type) {
                this.sValue = "100";
            }
        }
        this.show = this.updateSettings ? true : false;
        if (this.updateSettings && this.updateSettings.callback) {
            setTimeout(() => {
                this.updateSettings.callback(true);
            }, 500);
        }
    }
    openAction() {
    }
    closeAction() {
        this.show = false;
        this.sValue = "0";
        this.settings = {};
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["gx-progress"]], inputs: { updateSettings: "updateSettings" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 4, consts: [[1, "progress-fade", 3, "hidden"], [1, "progress-box"], [1, "progress-header"], [1, "progress-body"], [3, "value"], [1, "progress-body-text"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "gx-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.settings.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.sValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.settings.description, " ");
    } }, styles: [".progress-fade[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  position: fixed;\n  background-color: #aaaaaa33;\n}\n\n.progress-box[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 3000;\n  top: 50%;\n  min-height: 70px;\n  width: 300px;\n  left: calc(50% - 150px);\n  background-color: #fff;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 1px 1px 4px #999;\n}\n\n.progress-body[_ngcontent-%COMP%] {\n  width: 260px;\n}\n\n.progress-header[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-weight: 500;\n}\n\n.progress-body-text[_ngcontent-%COMP%] {\n  margin: 2px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtZmFkZSB7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgcmlnaHQ6MHB4O1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhMzM7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1ib3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMzAwMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGxlZnQ6IGNhbGMoIDUwJSAtIDE1MHB4ICk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzk5OTtcclxufVxyXG5cclxuLnByb2dyZXNzLWJvZHkge1xyXG4gICAgd2lkdGg6MjYwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWFkZXIge1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJvZHktdGV4dCB7XHJcbiAgICBtYXJnaW46MnB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9619:
/*!*************************************************************!*\
  !*** ./src/app/gx/ui/controls/progress/progress.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressService": () => (/* binding */ ProgressService),
/* harmony export */   "UIProgress": () => (/* binding */ UIProgress)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class ProgressService {
    constructor() {
        this.progressSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.currentSettings = {};
    }
    getObservable() {
        this.currentSettings = {};
        return this.progressSource.asObservable();
    }
    getClass() {
        return this.currentSettings.cssClass || "";
    }
    setClass(c) {
        this.updateProgress({ cssClass: c });
    }
    getType() {
        // Indeterminate=0, Determinate=1
        return this.currentSettings.type || 0;
    }
    setType(type) {
        // Indeterminate=0, Determinate=1
        this.updateProgress({ type: type });
    }
    getTitle() {
        return this.currentSettings.title || "";
    }
    setTitle(title) {
        this.updateProgress({ title: title });
    }
    getDescription() {
        return this.currentSettings.description || "";
    }
    setDescription(description) {
        this.updateProgress({ description: description });
    }
    getMaxValue() {
        return this.currentSettings.maxValue || 0;
    }
    setMaxValue(value) {
        this.updateProgress({ maxValue: value });
    }
    getValue() {
        return this.currentSettings.value || 0;
    }
    setValue(value) {
        this.updateProgress({ value: value });
    }
    show() {
        this.updateProgress({});
    }
    showWithTitle(title) {
        return new Promise(complete => {
            this.updateProgress({
                title: title,
                description: null,
                callback: complete
            });
        });
    }
    showWithTitleAndDescription(title, description) {
        this.updateProgress({ title: title, description: description });
    }
    hide() {
        this.currentSettings = {};
        this.updateProgress(null);
    }
    updateProgress(settings) {
        if (settings) {
            for (const st in settings) {
                this.currentSettings[st] = settings[st];
            }
            this.progressSource.next(Object.assign({}, this.currentSettings));
        }
        else {
            this.progressSource.next(null);
        }
    }
}
ProgressService.ɵfac = function ProgressService_Factory(t) { return new (t || ProgressService)(); };
ProgressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProgressService, factory: ProgressService.ɵfac, providedIn: 'root' });
class UIProgress {
    constructor() {
        this.type = 0; // 0=indeterminate, 1=determinate
        this.title = null;
        this.description = null;
        this.value = 100;
        this.maxValue = 100;
        this.cssClass = null;
    }
}


/***/ }),

/***/ 9159:
/*!*********************************************************!*\
  !*** ./src/app/gx/ui/controls/timer/timer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent),
/* harmony export */   "TimerState": () => (/* binding */ TimerState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6283);



const _c0 = ["*"];
class TimerComponent {
    constructor() {
        this.interval = 1; // interval in seconds
        this.maxValue = 0; // maxVlaue in seconds
        this.onTick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.counter = 0;
    }
    ngOnChanges() {
        if (this.state === TimerState.Running) {
            this.startTimer();
        }
        else if (this.state === TimerState.Stopped) {
            this.stopTimer();
        }
        else if (this.state === TimerState.Reset) {
            this.stopTimer();
            this.counter = 0;
        }
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    startTimer() {
        if (!this.timer) {
            this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(this.interval * 1000);
            this.timerSubscription = this.timer.subscribe(() => {
                this.counter++;
                if (this.maxValue > 0 && this.counter >= this.maxValue) {
                    this.stopTimer();
                    this.onEnd.emit(this.counter);
                }
                this.onTick.emit(this.counter);
            });
        }
    }
    stopTimer() {
        if (this.timer) {
            this.timerSubscription.unsubscribe();
            this.timer = null;
            this.state = TimerState.Stopped;
        }
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["gx-timer"]], inputs: { state: "state", interval: "interval", maxValue: "maxValue" }, outputs: { onTick: "onTick", onEnd: "onEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
var TimerState;
(function (TimerState) {
    TimerState["Running"] = "running";
    TimerState["Stopped"] = "stopped";
    TimerState["Reset"] = "reset";
})(TimerState || (TimerState = {}));


/***/ }),

/***/ 7161:
/*!****************************************!*\
  !*** ./src/app/gx/ui/model/ui-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIListLoadingState": () => (/* binding */ UIListLoadingState),
/* harmony export */   "UIListElement": () => (/* binding */ UIListElement),
/* harmony export */   "UIListElementItem": () => (/* binding */ UIListElementItem)
/* harmony export */ });
var UIListLoadingState;
(function (UIListLoadingState) {
    UIListLoadingState["loading"] = "loading";
    UIListLoadingState["loaded"] = "loaded";
})(UIListLoadingState || (UIListLoadingState = {}));
class UIListElement {
    constructor() {
        this.class = null;
        this.visible = null;
        this.enabled = null;
        this.defaultLayoutName = null;
        this.columnsPerPagePortrait = null;
        this.loadingState = UIListLoadingState.loading;
        this.currentPage = 1;
        this.recordCount = 0;
        this.count = 0;
        this.start = 0;
    }
    onSelect(selectedItem, eventInfo) {
        if (this.onSelectAction) {
            eventInfo.stopPropagation();
            this.currentItem = selectedItem;
            this.onSelectAction();
        }
    }
    onPullRelease(eventInfo) {
        if (this.onRefreshAction) {
            this.onRefreshAction();
        }
    }
    onSelectionChanged(eventInfo) {
        // TODO: Bring implementation from selectAction panel.component and add CurrentItem to model
        if (this.onSelectionChangedAction) {
            this.onSelectionChangedAction();
        }
    }
    onPageChanged(eventInfo) {
        this.currentPage = eventInfo.detail;
        if (this.onPageChangedAction) {
            this.onPageChangedAction();
        }
    }
    setPageChangedAction(action) {
        this.onPageChangedAction = action;
    }
    setSelectAction(action) {
        this.onSelectAction = action;
    }
    setPullReleaseAction(action) {
        this.onPullReleaseAction = action;
    }
    setRefreshAction(action) {
        this.onRefreshAction = action;
    }
    setSelectionChangedAction(action) {
        this.onSelectionChangedAction = action;
    }
    refresh() {
        if (this.onRefreshAction) {
            this.onRefreshAction();
        }
    }
    load() { }
    select(item) {
        item.Selected = true;
        return true;
    }
    deselect(item) {
        item.Selected = false;
        return false;
    }
}
class UIListElementItem {
    constructor() {
        this.Itemlayout = "";
        this.Selected = false;
        this.Break = false;
    }
}


/***/ }),

/***/ 2476:
/*!************************************************!*\
  !*** ./src/app/gx/utils/binary-to-url.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BinaryToURLPipe": () => (/* binding */ BinaryToURLPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);


class BinaryToURLPipe {
    constructor(app) {
        this.app = app;
    }
    transform(image) {
        return this.app.binaryToURL(image);
    }
}
BinaryToURLPipe.ɵfac = function BinaryToURLPipe_Factory(t) { return new (t || BinaryToURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
BinaryToURLPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "binaryToURL", type: BinaryToURLPipe, pure: true });


/***/ }),

/***/ 5394:
/*!**********************************************!*\
  !*** ./src/app/gx/utils/class-split.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassSplitPipe": () => (/* binding */ ClassSplitPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class ClassSplitPipe {
    constructor() { }
    transform(value, args) {
        return value.replace(/,/g, ' ');
    }
}
ClassSplitPipe.ɵfac = function ClassSplitPipe_Factory(t) { return new (t || ClassSplitPipe)(); };
ClassSplitPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "classSplit", type: ClassSplitPipe, pure: true });


/***/ }),

/***/ 6960:
/*!*****************************************************!*\
  !*** ./src/app/gx/utils/date-to-iso-string.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateToISOStringPipe": () => (/* binding */ DateToISOStringPipe)
/* harmony export */ });
/* harmony import */ var app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/type-conversion */ 9626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class DateToISOStringPipe {
    constructor() { }
    transform(value) {
        return app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__.TypeConversions.UIDateToISOString(value);
    }
}
DateToISOStringPipe.ɵfac = function DateToISOStringPipe_Factory(t) { return new (t || DateToISOStringPipe)(); };
DateToISOStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dateToISOString", type: DateToISOStringPipe, pure: true });


/***/ }),

/***/ 3906:
/*!*********************************************************!*\
  !*** ./src/app/gx/utils/datetime-to-iso-string.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatetimeToISOStringPipe": () => (/* binding */ DatetimeToISOStringPipe)
/* harmony export */ });
/* harmony import */ var app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/type-conversion */ 9626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class DatetimeToISOStringPipe {
    constructor() { }
    transform(value) {
        return app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__.TypeConversions.UIDatetimeToISOString(value);
    }
}
DatetimeToISOStringPipe.ɵfac = function DatetimeToISOStringPipe_Factory(t) { return new (t || DatetimeToISOStringPipe)(); };
DatetimeToISOStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "datetimeToISOString", type: DatetimeToISOStringPipe, pure: true });


/***/ }),

/***/ 1453:
/*!******************************************!*\
  !*** ./src/app/gx/utils/default.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPipe": () => (/* binding */ DefaultPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class DefaultPipe {
    constructor() { }
    transform(value, defaultValue) {
        if (value !== null && value !== undefined) {
            return value;
        }
        else {
            return defaultValue;
        }
    }
}
DefaultPipe.ɵfac = function DefaultPipe_Factory(t) { return new (t || DefaultPipe)(); };
DefaultPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "default", type: DefaultPipe, pure: true });


/***/ }),

/***/ 7600:
/*!******************************************************!*\
  !*** ./src/app/gx/utils/geography-to-coords.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeographyToCoordsPipe": () => (/* binding */ GeographyToCoordsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/app-container */ 3298);


class GeographyToCoordsPipe {
    constructor(app) {
        this.app = app;
    }
    transform(geography) {
        return `${geography.latitude},${geography.longitude}`;
    }
}
GeographyToCoordsPipe.ɵfac = function GeographyToCoordsPipe_Factory(t) { return new (t || GeographyToCoordsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
GeographyToCoordsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "geographyToCoords", type: GeographyToCoordsPipe, pure: true });


/***/ }),

/***/ 7279:
/*!*************************************************!*\
  !*** ./src/app/gx/utils/guid-to-string.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidToStringPipe": () => (/* binding */ GuidToStringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/app-container */ 3298);


class GuidToStringPipe {
    constructor(app) {
        this.app = app;
    }
    transform(guid) {
        return guid.toString();
    }
}
GuidToStringPipe.ɵfac = function GuidToStringPipe_Factory(t) { return new (t || GuidToStringPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
GuidToStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "guidToString", type: GuidToStringPipe, pure: true });


/***/ }),

/***/ 4100:
/*!***********************************************!*\
  !*** ./src/app/gx/utils/image-source.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSourcePipe": () => (/* binding */ ImageSourcePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/app-container */ 3298);


class ImageSourcePipe {
    constructor(app) {
        this.app = app;
    }
    transform(name, context) {
        return this.app.getImageSource(name);
    }
}
ImageSourcePipe.ɵfac = function ImageSourcePipe_Factory(t) { return new (t || ImageSourcePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
ImageSourcePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "imageSource", type: ImageSourcePipe, pure: true });


/***/ }),

/***/ 4858:
/*!***********************************************!*\
  !*** ./src/app/gx/utils/image-to-url.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageToURLPipe": () => (/* binding */ ImageToURLPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);


class ImageToURLPipe {
    constructor(app) {
        this.app = app;
    }
    transform(image, context) {
        return this.app.imageToURL(image);
    }
}
ImageToURLPipe.ɵfac = function ImageToURLPipe_Factory(t) { return new (t || ImageToURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
ImageToURLPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "imageToURL", type: ImageToURLPipe, pure: true });


/***/ }),

/***/ 2367:
/*!************************************************!*\
  !*** ./src/app/gx/utils/json-to-gauge.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonToGaugePipe": () => (/* binding */ JsonToGaugePipe)
/* harmony export */ });
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_types_gauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/types/gauge */ 3339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/app-container */ 3298);



class JsonToGaugePipe {
    constructor(app) {
        this.app = app;
    }
    transform(json) {
        if (json && json !== "") {
            return new _genexus_web_standard_functions_dist_lib_esm_types_gauge__WEBPACK_IMPORTED_MODULE_0__.Gauge(json);
        }
    }
}
JsonToGaugePipe.ɵfac = function JsonToGaugePipe_Factory(t) { return new (t || JsonToGaugePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_base_app_container__WEBPACK_IMPORTED_MODULE_1__.AppContainer, 16)); };
JsonToGaugePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "jsonToGauge", type: JsonToGaugePipe, pure: true });


/***/ }),

/***/ 4233:
/*!**************************************!*\
  !*** ./src/app/gx/utils/not.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotPipe": () => (/* binding */ NotPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class NotPipe {
    constructor() { }
    transform(value, args) {
        return !value;
    }
}
NotPipe.ɵfac = function NotPipe_Factory(t) { return new (t || NotPipe)(); };
NotPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "not", type: NotPipe, pure: true });


/***/ }),

/***/ 3773:
/*!****************************************************************************!*\
  !*** ./src/app/gx/utils/resolve-relative-url/resolve-relative-url.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveRelativeUrlPipe": () => (/* binding */ ResolveRelativeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);


class ResolveRelativeUrlPipe {
    constructor(app) {
        this.app = app;
    }
    transform(url, args) {
        return this.app.resolveRelativeURL(url);
    }
}
ResolveRelativeUrlPipe.ɵfac = function ResolveRelativeUrlPipe_Factory(t) { return new (t || ResolveRelativeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
ResolveRelativeUrlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "resolveRelativeUrl", type: ResolveRelativeUrlPipe, pure: true });


/***/ }),

/***/ 5410:
/*!*****************************************************!*\
  !*** ./src/app/gx/utils/time-to-iso-string.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeToISOStringPipe": () => (/* binding */ TimeToISOStringPipe)
/* harmony export */ });
/* harmony import */ var app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/type-conversion */ 9626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


class TimeToISOStringPipe {
    constructor() { }
    transform(value) {
        return app_gx_base_type_conversion__WEBPACK_IMPORTED_MODULE_0__.TypeConversions.timeToISOString(value);
    }
}
TimeToISOStringPipe.ɵfac = function TimeToISOStringPipe_Factory(t) { return new (t || TimeToISOStringPipe)(); };
TimeToISOStringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timeToISOString", type: TimeToISOStringPipe, pure: true });


/***/ }),

/***/ 3270:
/*!********************************************!*\
  !*** ./src/app/gx/utils/translate.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatePipe": () => (/* binding */ TranslatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _base_app_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/app-container */ 3298);


class TranslatePipe {
    constructor(app) {
        this.app = app;
    }
    transform(s, args) {
        return this.app.translate(s);
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_base_app_container__WEBPACK_IMPORTED_MODULE_0__.AppContainer, 16)); };
TranslatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: true });


/***/ }),

/***/ 7805:
/*!************************************************************!*\
  !*** ./src/app/gx/utils/uri-cache/load-cached-uri.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadCachedUriPipe": () => (/* binding */ LoadCachedUriPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _uri_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uri-cache.service */ 8385);


class LoadCachedUriPipe {
    constructor(urlCacheService) {
        this.urlCacheService = urlCacheService;
    }
    transform(uri, args) {
        return this.urlCacheService.get(uri);
    }
}
LoadCachedUriPipe.ɵfac = function LoadCachedUriPipe_Factory(t) { return new (t || LoadCachedUriPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_uri_cache_service__WEBPACK_IMPORTED_MODULE_0__.UriCacheService, 16)); };
LoadCachedUriPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "loadCachedUri", type: LoadCachedUriPipe, pure: true });


/***/ }),

/***/ 8385:
/*!*********************************************************!*\
  !*** ./src/app/gx/utils/uri-cache/uri-cache.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UriCacheService": () => (/* binding */ UriCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);

class UriCacheService {
    constructor() {
        this.srcMap = new Map();
        this.cacheLimit = 50;
    }
    get(uri) {
        if (uri) {
            const uploadKeyPos = uri.indexOf('gxupload:');
            if (uploadKeyPos > -1) {
                const uploadKey = uri.substr(uploadKeyPos);
                if (this.srcMap.has(uploadKey)) {
                    return this.srcMap.get(uploadKey);
                }
            }
        }
        return uri;
    }
    store(key, file) {
        if (this.srcMap.size > this.cacheLimit) {
            const elder = this.srcMap.keys().next().value;
            this.srcMap.delete(elder);
        }
        const fileURL = URL.createObjectURL(file);
        this.srcMap.set(key, fileURL);
        return fileURL;
    }
}
UriCacheService.ɵfac = function UriCacheService_Factory(t) { return new (t || UriCacheService)(); };
UriCacheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UriCacheService, factory: UriCacheService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 765:
/*!********************************!*\
  !*** ./src/app/main.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainModule": () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 4766);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ 1024);
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.module */ 3242);
/* harmony import */ var _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @genexus/ngx-virtual-scroller */ 9034);
/* harmony import */ var app_Menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/Menu/menu.component */ 6619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);









class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__.VirtualScrollerModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.ServiceWorkerModule.register("ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MainModule, { declarations: [app_Menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _common_module__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__.VirtualScrollerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.ServiceWorkerModule], exports: [app_Menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent] }); })();


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    serviceUrl: ""
};


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);
/* harmony import */ var _genexus_web_controls_library_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @genexus/web-controls-library/loader */ 4741);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_genexus_web_controls_library_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 1155:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@genexus/web-controls-library/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./gx-action-sheet-item.entry.js": [
		8809,
		"node_modules_genexus_web-controls-library_dist_esm_gx-action-sheet-item_entry_js"
	],
	"./gx-action-sheet.entry.js": [
		6340,
		"node_modules_genexus_web-controls-library_dist_esm_gx-action-sheet_entry_js"
	],
	"./gx-audio.entry.js": [
		6041,
		"node_modules_genexus_web-controls-library_dist_esm_gx-audio_entry_js"
	],
	"./gx-bootstrap_14.entry.js": [
		9295,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-bootstrap_14_entry_js"
	],
	"./gx-canvas_2.entry.js": [
		414,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-canvas_2_entry_js"
	],
	"./gx-checkbox.entry.js": [
		5604,
		"node_modules_genexus_web-controls-library_dist_esm_gx-checkbox_entry_js"
	],
	"./gx-chronometer.entry.js": [
		6126,
		"node_modules_genexus_web-controls-library_dist_esm_gx-chronometer_entry_js"
	],
	"./gx-edit_2.entry.js": [
		36,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-edit_2_entry_js"
	],
	"./gx-gauge-range.entry.js": [
		2084,
		"node_modules_genexus_web-controls-library_dist_esm_gx-gauge-range_entry_js"
	],
	"./gx-gauge.entry.js": [
		1004,
		"node_modules_genexus_web-controls-library_dist_esm_gx-gauge_entry_js"
	],
	"./gx-grid-empty-indicator_7.entry.js": [
		6031,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-grid-empty-indicator_7_entry_js"
	],
	"./gx-grid-flex.entry.js": [
		9300,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-grid-flex_entry_js"
	],
	"./gx-group.entry.js": [
		2129,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-group_entry_js"
	],
	"./gx-image-picker.entry.js": [
		151,
		"node_modules_genexus_web-controls-library_dist_esm_gx-image-picker_entry_js"
	],
	"./gx-interactive-image.entry.js": [
		8074,
		"node_modules_genexus_web-controls-library_dist_esm_gx-interactive-image_entry_js"
	],
	"./gx-loading.entry.js": [
		5048,
		"node_modules_genexus_web-controls-library_dist_esm_gx-loading_entry_js"
	],
	"./gx-lottie.entry.js": [
		2380,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-lottie_entry_js"
	],
	"./gx-map-line.entry.js": [
		9351,
		"default-node_modules_genexus_web-controls-library_dist_esm_coordsValidate-cde38689_js",
		"node_modules_genexus_web-controls-library_dist_esm_gx-map-line_entry_js"
	],
	"./gx-map_2.entry.js": [
		8374,
		"default-node_modules_genexus_web-controls-library_dist_esm_coordsValidate-cde38689_js",
		"node_modules_genexus_web-controls-library_dist_esm_gx-map_2_entry_js"
	],
	"./gx-password-edit.entry.js": [
		129,
		"node_modules_genexus_web-controls-library_dist_esm_gx-password-edit_entry_js"
	],
	"./gx-query-viewer-element-format.entry.js": [
		3451,
		"node_modules_genexus_web-controls-library_dist_esm_gx-query-viewer-element-format_entry_js"
	],
	"./gx-query-viewer-element.entry.js": [
		6445,
		"node_modules_genexus_web-controls-library_dist_esm_gx-query-viewer-element_entry_js"
	],
	"./gx-query-viewer-format-style.entry.js": [
		5585,
		"node_modules_genexus_web-controls-library_dist_esm_gx-query-viewer-format-style_entry_js"
	],
	"./gx-query-viewer-parameter.entry.js": [
		6546,
		"node_modules_genexus_web-controls-library_dist_esm_gx-query-viewer-parameter_entry_js"
	],
	"./gx-query-viewer.entry.js": [
		179,
		"node_modules_genexus_web-controls-library_dist_esm_gx-query-viewer_entry_js"
	],
	"./gx-radio-group.entry.js": [
		9594,
		"node_modules_genexus_web-controls-library_dist_esm_gx-radio-group_entry_js"
	],
	"./gx-radio-option.entry.js": [
		4129,
		"node_modules_genexus_web-controls-library_dist_esm_gx-radio-option_entry_js"
	],
	"./gx-rating.entry.js": [
		108,
		"node_modules_genexus_web-controls-library_dist_esm_gx-rating_entry_js"
	],
	"./gx-select-option.entry.js": [
		4037,
		"node_modules_genexus_web-controls-library_dist_esm_gx-select-option_entry_js"
	],
	"./gx-select.entry.js": [
		3085,
		"node_modules_genexus_web-controls-library_dist_esm_gx-select_entry_js"
	],
	"./gx-switch.entry.js": [
		4241,
		"node_modules_genexus_web-controls-library_dist_esm_gx-switch_entry_js"
	],
	"./gx-tab_3.entry.js": [
		8637,
		"common",
		"node_modules_genexus_web-controls-library_dist_esm_gx-tab_3_entry_js"
	],
	"./gx-video.entry.js": [
		7685,
		"node_modules_genexus_web-controls-library_dist_esm_gx-video_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5639:
/*!***************************!*\
  !*** ./app.settings.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"SERVICE_DEBUG":true,"SERVICE_HOSTNAME":"http://38.242.207.151/SupaBase.NETFrameworkEnvironment/","SERVICE_BASE_PATH":"","SERVICE_REST_PATH":"rest/","SERVICE_OAUTH_PATH":"oauth/","WEB_RELATIVE_PATH":"servlet/","WEB_MAIN_OBJECT":"com.kbgenng.dashboard","GAM_CLIENT_ID":"","GAM_CLIENT_SECRET":"","GAM_CLIENT_LOGIN":"","GAM_CLIENT_NOTAUTHORIZED":"","GAM_CLIENT_CHANGEPASSWORD":"","GAM_ANONYMOUS_USER":false,"DEFAULT_LANGUAGE":"English","DEFAULT_ISLOADING_UPDATE_DELAY":300,"APPLICATION_LAYOUTS":[{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":599},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":600,"maxLongestBound":719},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":1200,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":720,"maxLongestBound":1199},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":720,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":600,"maxShortestBound":719,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":599,"minLongestBound":0,"maxLongestBound":0},{"navigationStyle":"default","minShortestBound":0,"maxShortestBound":0,"minLongestBound":0,"maxLongestBound":0}],"APPLICATION_LANGUAGES":[{"name":"english","isRightToLeft":false}],"DEFAULT_NAVIGATION_STYLE":"flip"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map