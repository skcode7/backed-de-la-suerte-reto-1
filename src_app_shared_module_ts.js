"use strict";
(self["webpackChunkgenexus_web_application"] = self["webpackChunkgenexus_web_application"] || []).push([["src_app_shared_module_ts"],{

/***/ 4822:
/*!*******************************************!*\
  !*** ./src/app/EmojiJSON/emojijson.dt.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiJSONData": () => (/* binding */ EmojiJSONData),
/* harmony export */   "EmojiJSON_EmojiJSONItemData": () => (/* binding */ EmojiJSON_EmojiJSONItemData)
/* harmony export */ });
/* harmony import */ var app_gx_base_gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/gxcollection.dt */ 8948);

class EmojiJSONData extends app_gx_base_gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__.GxCollectionData {
}
class EmojiJSON_EmojiJSONItemData {
    constructor() {
        this.emojiid = "";
        this.emojihex = "";
        this.emojidec = "";
        this.emojihtml = "";
    }
}


/***/ }),

/***/ 2891:
/*!*************************************************************!*\
  !*** ./src/app/GetEmoji/getemoji_level_detail.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetEmoji_Level_DetailComponent": () => (/* binding */ GetEmoji_Level_DetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var app_gx_base_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/base/panel.component */ 4121);
/* harmony import */ var _getemoji_level_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getemoji_level_detail.service */ 8110);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/misc/msg */ 1648);
/* harmony import */ var app_EmojiJSON_emojijson_dt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/EmojiJSON/emojijson.dt */ 4822);
/* harmony import */ var app_gx_ui_model_ui_textblock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/ui/model/ui-textblock */ 7815);
/* harmony import */ var app_gx_base_gxsdt_dt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/base/gxsdt.dt */ 9856);
/* harmony import */ var app_gx_ui_model_ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/gx/ui/model/ui-form */ 1409);
/* harmony import */ var app_gx_ui_model_ui_actionbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/gx/ui/model/ui-actionbar */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/gx/auth/gam.service */ 5138);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);
/* harmony import */ var app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/gx/navigation/composite-navigation */ 2400);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/gx/base/app-bar.service */ 4643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _gx_utils_class_split_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gx/utils/class-split.pipe */ 5394);
/* harmony import */ var _gx_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gx/utils/translate.pipe */ 3270);
/* harmony import */ var _gx_utils_not_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gx/utils/not.pipe */ 4233);
/* harmony import */ var _gx_utils_default_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../gx/utils/default.pipe */ 1453);






















function GetEmoji_Level_DetailComponent_gx_card_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "gx-table", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "gx-table-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "gx-textblock", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "gx-table-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "gx-table", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "gx-table-cell", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "gx-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "gx-edit", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function GetEmoji_Level_DetailComponent_gx_card_1_div_2_Template_gx_edit_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r9.G1.Emojiid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "gx-table-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "gx-button", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function GetEmoji_Level_DetailComponent_gx_card_1_div_2_Template_gx_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); ctx_r11.callAction(ctx_r11._GET); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](23, "not");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "gx-table-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "gx-textblock", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "classSplit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 12, "TableDetail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 14, "TextBlock"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 16, "Digita el nombre de un Emoji, si tienes suerte aparecer\u00E1!"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 18, "Table"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 20, "Attribute"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r2.G1.Emojiid);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("readonly",  false || ctx_r2.Mode == "DLT");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 22, "ConfirmButton"))("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](23, 24, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](24, 26, ctx_r2._actionsEnabled, true)));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 29, "GET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 31, "TextBlock"))("inner", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](31, 33, ctx_r2.uiModel.ctrlT_emoji == null ? null : ctx_r2.uiModel.ctrlT_emoji.caption, "Text Block"));
} }
function GetEmoji_Level_DetailComponent_gx_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "gx-card", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, GetEmoji_Level_DetailComponent_gx_card_1_div_2_Template, 32, 36, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showHeader", ctx_r0.showAsCard)("showBorder", ctx_r0.showAsCard)("showFooter", ctx_r0.showAsCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.viewManager.view === "ViewAny");
} }
class GetEmoji_Level_DetailComponent extends app_gx_base_panel_component__WEBPACK_IMPORTED_MODULE_0__.PanelComponent {
    constructor(panelService, gam, app, nvg, activatedRoute, appBarService, cdr) {
        super(app, nvg, activatedRoute, cdr);
        this.panelService = panelService;
        this.gam = gam;
        this.app = app;
        this.nvg = nvg;
        this.activatedRoute = activatedRoute;
        this.appBarService = appBarService;
        this.cdr = cdr;
        this.stateMembers = [
            ['Mode',],
            ['G1', 'E2', 'uiModel',]
        ];
        this._routingPath = 'GetEmoji-Level_Detail';
        this.views = [
            {
                name: "ViewAny",
                type: "any",
                os: "All",
                minShortestBound: 0,
                maxShortestBound: 0,
                minLongestBound: 0,
                maxLongestBound: 0,
                navigationStyle: "default",
                appBarInitFn: this.initAppBar_ViewAny.bind(this),
                appBarBindFn: this.bindAppBar_ViewAny.bind(this),
                appBarResetFn: this.resetAppBar_ViewAny.bind(this),
                UIModelDefaults: this.getUIModelDefaults_ViewAny.bind(this)
            }
        ];
        // Actions
        this._GET = () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const __aSt = this.startAction();
            try {
                const data = yield this.panelService.GetById(this.G1.Emojiid);
                this.E2 = data.EmojiJSON;
                if ((this.E2.Count == 0)) {
                    yield (0,_genexus_web_standard_functions_dist_lib_esm_misc_msg__WEBPACK_IMPORTED_MODULE_2__.msg)(this.app.translate('NO EXITE EL EMOJI'));
                }
                else {
                    this.uiModel.ctrlT_emoji.caption = app_gx_base_gxsdt_dt__WEBPACK_IMPORTED_MODULE_5__.GxSdtData.item(this.E2, 1).emojihtml;
                }
            }
            catch (e) {
                this.processCompositeError(e);
            }
            finally {
                this.cdr.markForCheck();
                this.endAction(__aSt);
            }
        });
        this.uiActions = new GetEmoji_Level_DetailUIActions(this);
        this.canControlAppBar = activatedRoute.component === GetEmoji_Level_DetailComponent;
        this.showAsCard = !this.canControlAppBar;
        this.initState(null);
    }
    initState(params) {
        this.G1 = new _getemoji_level_detail_service__WEBPACK_IMPORTED_MODULE_1__.GetEmoji_Level_DetailData();
        this.E2 = new app_EmojiJSON_emojijson_dt__WEBPACK_IMPORTED_MODULE_3__.EmojiJSONData();
        this.uiModel = new GetEmoji_Level_DetailUIModel(this);
        this.Mode = !params ? this.Mode : "";
        this.loadParams(params);
        this.viewManager.update(this.Mode);
        this.updateUIModel(this.uiModel, this.viewManager.getUIModelDefaults());
        this.panelService.start();
    }
    bindAppBar_ViewAny(navigationStyle) {
        this.uiModel.ctrlApplicationbar.navigationStyle = navigationStyle;
        this.uiModel.ctrlApplicationbar.showBackButton = this.nvg.canGoBack();
        this.uiModel.ctrlApplicationbar.actionItems = [];
        this.uiModel.ctrlApplicationbar.onBackButtonClick = () => this.callAction(this.__Cancel);
        this.appBarService.bind(this.showAsCard, this.uiModel.ctrlApplicationbar);
    }
    initAppBar_ViewAny() {
        this.updateUIModel(this.uiModel, this.viewManager.getUIModelDefaults());
        this.cdr.markForCheck();
    }
    resetAppBar_ViewAny() {
    }
    getUIModelDefaults_ViewAny(containerName) {
        if (!containerName) {
            return [
                ['ctrlApplicationbar', 'class', 'ApplicationBars'],
                ['ctrlApplicationbar', 'visible', true],
                ['ctrlApplicationbar', 'caption', this.app.translate('Get Emoji')],
                ['ctrlApplicationbar', 'showBackButton', 'False'],
                ['ctrlT_emoji', 'caption', this.app.translate('Text Block')]
            ];
        }
        return [];
    }
    // Load and refresh
    loadParams(params) {
        if (params) {
            this.Mode = this.nvg.getParam('mode', params, 1) || "";
        }
    }
    loadPanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.G1 = yield this.panelService.getGetEmoji_Level_Detail();
            this.updateGxdynprops(this.G1, this.uiModel);
        });
    }
    Refresh(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.G1 = yield this.panelService.getGetEmoji_Level_Detail();
            this.updateGxdynprops(this.G1, this.uiModel);
            this.cdr.markForCheck();
        });
    }
}
GetEmoji_Level_DetailComponent.ɵfac = function GetEmoji_Level_DetailComponent_Factory(t) { return new (t || GetEmoji_Level_DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_getemoji_level_detail_service__WEBPACK_IMPORTED_MODULE_1__.GetEmoji_Level_DetailService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_8__.GAMService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_9__.AppContainer), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_gx_navigation_composite_navigation__WEBPACK_IMPORTED_MODULE_10__.CompositeNavigation), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_gx_base_app_bar_service__WEBPACK_IMPORTED_MODULE_11__.AppBarService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef)); };
GetEmoji_Level_DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: GetEmoji_Level_DetailComponent, selectors: [["GetEmoji_Level_Detail"]], inputs: { Mode: ["mode", "Mode"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([
            _getemoji_level_detail_service__WEBPACK_IMPORTED_MODULE_1__.GetEmoji_Level_DetailService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "main-content"], ["class", "ApplicationBars", 3, "showHeader", "showBorder", "showFooter", 4, "ngIf"], [1, "ApplicationBars", 3, "showHeader", "showBorder", "showFooter"], ["ViewAny", ""], ["slot", "body", 4, "ngIf"], ["slot", "body"], ["areas-template", "'cell00 ' 'cell10 ' 'cell20 ' ", "columns-template", "1fr", "rows-template", "minmax(min-content, 64px) var(--gx-table-row-autogrow) minmax(min-content, 64px)", "invisible-mode", "keep-space", 3, "ngClass"], ["ctrlMaintable", ""], ["area", "cell00", "overflow-mode", "clip", "align", "center", "valign", "top", "max-height", "64px", "min-height", "64px"], ["invisible-mode", "keep-space", "line-clamp", "", 3, "ngClass"], ["ctrlTextblock1", ""], ["area", "cell10", "overflow-mode", "clip", "align", "left", "valign", "top", "min-height", "108px"], ["areas-template", "'cell00 ' 'cell10 ' ", "columns-template", "1fr", "rows-template", "minmax(min-content, 44px) minmax(min-content, 64px)", "invisible-mode", "keep-space", 2, "min-height", "108px", 3, "ngClass"], ["ctrlTable1", ""], ["area", "cell00", "overflow-mode", "clip", "align", "center", "valign", "top", "max-height", "44px", "min-height", "44px"], ["invisible-mode", "keep-space", "labelCaption", "", "label-position", "none", 3, "ngClass"], ["name", "ctrlEmojiid", "type", "text", "placeholder", "ID", "ngDefaultControl", "", "area", "field", 3, "ngModel", "ngModelChange"], ["ctrlEmojiid", ""], ["area", "cell10", "overflow-mode", "clip", "align", "center", "valign", "top", "max-height", "64px", "min-height", "64px"], ["name", "ctrlGet", "invisible-mode", "keep-space", "image-position", "after", 3, "ngClass", "disabled", "click"], ["ctrlGet", ""], ["area", "cell20", "overflow-mode", "clip", "align", "center", "valign", "top", "max-height", "64px", "min-height", "64px"], ["invisible-mode", "keep-space", "format", "HTML", 3, "ngClass", "inner"], ["ctrlT_emoji", ""]], template: function GetEmoji_Level_DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, GetEmoji_Level_DetailComponent_gx_card_1_Template, 3, 4, "gx-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.viewManager.view === "ViewAny");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel], pipes: [_gx_utils_class_split_pipe__WEBPACK_IMPORTED_MODULE_12__.ClassSplitPipe, _gx_utils_translate_pipe__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _gx_utils_not_pipe__WEBPACK_IMPORTED_MODULE_14__.NotPipe, _gx_utils_default_pipe__WEBPACK_IMPORTED_MODULE_15__.DefaultPipe], styles: ["[_nghost-%COMP%] { display: flex; flex: 1; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldGVtb2ppX2xldmVsX2RldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxhQUFhLEVBQUUsT0FBTyxFQUFFIiwiZmlsZSI6ImdldGVtb2ppX2xldmVsX2RldGFpbC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IDE7IH0iXX0= */"], changeDetection: 0 });
class GetEmoji_Level_DetailUIModel {
    constructor(host) {
        this.ctrlForm = new app_gx_ui_model_ui_form__WEBPACK_IMPORTED_MODULE_6__.UIFormElement();
        this.ctrlApplicationbar = new app_gx_ui_model_ui_actionbar__WEBPACK_IMPORTED_MODULE_7__.UIActionBarElement();
        this.ctrlT_emoji = new app_gx_ui_model_ui_textblock__WEBPACK_IMPORTED_MODULE_4__.UITextblockElement();
        this._host = host;
        this.ctrlForm.applicationBar = this.ctrlApplicationbar;
    }
}
class GetEmoji_Level_DetailUIActions {
    constructor(host) {
        this._host = host;
    }
}


/***/ }),

/***/ 8110:
/*!***********************************************************!*\
  !*** ./src/app/GetEmoji/getemoji_level_detail.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetEmoji_Level_DetailService": () => (/* binding */ GetEmoji_Level_DetailService),
/* harmony export */   "GetEmoji_Level_DetailData": () => (/* binding */ GetEmoji_Level_DetailData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.settings */ 9783);
/* harmony import */ var app_gx_base_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/gx/base/panel.service */ 8856);
/* harmony import */ var app_gx_base_endpoint_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/base/endpoint.connector */ 7026);
/* harmony import */ var app_EmojiJSON_emojijson_dt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/EmojiJSON/emojijson.dt */ 4822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/gx/auth/gam.service */ 5138);
/* harmony import */ var app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/gx/base/app-container */ 3298);










class GetEmoji_Level_DetailService extends app_gx_base_panel_service__WEBPACK_IMPORTED_MODULE_1__.PanelService {
    constructor(http, _router, _loginService, _app) {
        super(_router, _loginService, _app);
        this.http = http;
        this._router = _router;
        this._loginService = _loginService;
        this._app = _app;
        // Other services
        this.GetById = (EmojiId) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const body = {
                EmojiId: EmojiId
            };
            try {
                const response = yield app_gx_base_endpoint_connector__WEBPACK_IMPORTED_MODULE_2__.EndpointConnector.postData(this.http, app_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.SERVICE_API_ENDPOINT + "GetById", body, { 'EmojiJSON': { isCollection: false, type: app_EmojiJSON_emojijson_dt__WEBPACK_IMPORTED_MODULE_3__.EmojiJSONData } });
                return response;
            }
            catch (error) {
                return this.handleError(error);
            }
        });
    }
    // Data services
    getGetEmoji_Level_Detail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield app_gx_base_endpoint_connector__WEBPACK_IMPORTED_MODULE_2__.EndpointConnector.getDataForType(this.http, app_app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.SERVICE_API_ENDPOINT + "GetEmoji_Level_Detail" + "?gxid=" + this.getGxid(0), GetEmoji_Level_DetailData);
            }
            catch (error) {
                return this.handleError(error);
            }
        });
    }
}
GetEmoji_Level_DetailService.ɵfac = function GetEmoji_Level_DetailService_Factory(t) { return new (t || GetEmoji_Level_DetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](app_gx_auth_gam_service__WEBPACK_IMPORTED_MODULE_4__.GAMService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](app_gx_base_app_container__WEBPACK_IMPORTED_MODULE_5__.AppContainer)); };
GetEmoji_Level_DetailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: GetEmoji_Level_DetailService, factory: GetEmoji_Level_DetailService.ɵfac });
// Data structures
class GetEmoji_Level_DetailData {
    constructor() {
        this.Emojiid = "";
        this.Gxdynprop = "";
    }
}


/***/ }),

/***/ 7026:
/*!***********************************************!*\
  !*** ./src/app/gx/base/endpoint.connector.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointConnector": () => (/* binding */ EndpointConnector)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 9783);
/* harmony import */ var _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @genexus/web-standard-functions/dist/lib-esm/gxcore/client/client-information */ 8185);
/* harmony import */ var _type_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-conversion */ 9626);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9258);





class EndpointConnector {
    static postData(http, endpoint, data, typeSpecs = {}) {
        return new Promise((resolve, reject) => {
            http.post(endpoint, this.getJsonPayload(data), { headers: this.getHeaders(), withCredentials: true }).toPromise().then(response => {
                for (const tName in typeSpecs) {
                    if (Array.isArray(response[tName])) {
                        response[tName] = _type_conversion__WEBPACK_IMPORTED_MODULE_2__.TypeConversions.arrayToCollection(response[tName], typeSpecs[tName].type);
                    }
                    else {
                        response[tName] = _type_conversion__WEBPACK_IMPORTED_MODULE_2__.TypeConversions.objectToClass(response[tName], typeSpecs[tName].type);
                    }
                }
                resolve(response);
            }).catch(response => reject(response));
        });
    }
    static getData(http, endpoint) {
        return http.get(endpoint, { headers: this.getHeaders(), withCredentials: true })
            .toPromise();
    }
    static getDataForType(http, endpoint, c) {
        return new Promise((resolve, reject) => {
            http.get(endpoint, { headers: this.getHeaders(), withCredentials: true }).toPromise().then(response => {
                const obj = _type_conversion__WEBPACK_IMPORTED_MODULE_2__.TypeConversions.objectToClass(response, c);
                resolve(obj);
            }).catch(response => reject(response));
        });
    }
    static getCacheableDataCollectionForType(http, endpoint, c = null) {
        return this.getDataCollectionForTypeObservableImpl(http, endpoint, true, c);
    }
    static getDataCollectionForTypeObservableImpl(http, endpoint, cacheable, c = null) {
        const result = http.get(endpoint, { headers: this.getHeaders(cacheable), withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((ev) => {
            return c ? _type_conversion__WEBPACK_IMPORTED_MODULE_2__.TypeConversions.arrayToCollection(ev, c) : ev;
        }));
        return result;
    }
    static getDataCollectionForTypeObservable(http, endpoint, c = null) {
        return this.getDataCollectionForTypeObservableImpl(http, endpoint, false, c);
    }
    static getDataCollectionForType(http, endpoint, c = null) {
        return new Promise((resolve, reject) => {
            http.get(endpoint, { headers: this.getHeaders(), withCredentials: true }).toPromise().then((response) => {
                resolve((c) ? _type_conversion__WEBPACK_IMPORTED_MODULE_2__.TypeConversions.arrayToCollection(response, c) : response);
            }).catch(response => reject(response));
        });
    }
    static uploadGXobject(http, endpointObject, loginService, file) {
        return new Promise((resolve, reject) => {
            let uri = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.SERVICE_API_ENDPOINT + 'gxobject';
            if (endpointObject) {
                uri = _app_settings__WEBPACK_IMPORTED_MODULE_0__.Settings.SERVICE_API_ENDPOINT + endpointObject + '/gxobject';
            }
            let contentType = "image";
            if (file.type) {
                contentType = file.type;
            }
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Accept': 'application/json', 'Content-Type': contentType });
            const options = { headers: headers, withCredentials: true };
            http.post(uri, file, options).toPromise().then(response => resolve(response)).catch(response => reject(response));
        });
    }
    static getHeaders(staleWhileRevalidate) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
            "Content-Type": "application/json",
            "DeviceId": _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_1__.GeneXusClientClientInformation.id(),
            "DeviceType": _genexus_web_standard_functions_dist_lib_esm_gxcore_client_client_information__WEBPACK_IMPORTED_MODULE_1__.GeneXusClientClientInformation.deviceType().toString(),
            "Cache-Control": (staleWhileRevalidate) ? "must-revalidate" : "no-cache",
            "GxTZOffset": this.getTimezone()
        });
    }
    static getTimezone() {
        const germanFakeRegion = new Intl.DateTimeFormat();
        return germanFakeRegion.resolvedOptions().timeZone;
    }
    static getJsonPayload(data) {
        let jsonData = null;
        if (typeof data === "string") {
            jsonData = data;
        }
        else {
            jsonData = JSON.stringify(data, (key, value) => {
                if (key === "uiModel") {
                    return undefined;
                }
                return value;
            });
        }
        return jsonData;
    }
}


/***/ }),

/***/ 9856:
/*!*************************************!*\
  !*** ./src/app/gx/base/gxsdt.dt.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GxSdtData": () => (/* binding */ GxSdtData)
/* harmony export */ });
/* harmony import */ var _gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gxcollection.dt */ 8948);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ 5626);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);


class GxSdtData extends _gxcollection_dt__WEBPACK_IMPORTED_MODULE_0__.GxCollectionData {
    static fromJson(obj, json) {
        (0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.plainToClassFromExist)(obj, JSON.parse(json));
    }
    static toJson(obj) {
        return JSON.stringify((0,class_transformer__WEBPACK_IMPORTED_MODULE_1__.classToPlain)(obj));
    }
}


/***/ }),

/***/ 622:
/*!*****************************************************************!*\
  !*** ./src/app/gx/ui/controls/safe-pipe/safe-pipe.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 8394);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 1815:
/*!*********************************************!*\
  !*** ./src/app/gx/ui/model/ui-actionbar.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIActionBarElement": () => (/* binding */ UIActionBarElement)
/* harmony export */ });
class UIActionBarElement {
    constructor() {
        this.navigationItems = new Array();
        this.actionItems = new Array();
    }
}


/***/ }),

/***/ 1409:
/*!****************************************!*\
  !*** ./src/app/gx/ui/model/ui-form.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIFormElement": () => (/* binding */ UIFormElement)
/* harmony export */ });
/* harmony import */ var app_gx_ui_model_ui_actionbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/gx/ui/model/ui-actionbar */ 1815);

class UIFormElement {
    constructor() {
        this._caption = null;
        this.applicationBar = new app_gx_ui_model_ui_actionbar__WEBPACK_IMPORTED_MODULE_0__.UIActionBarElement();
    }
    get caption() { return this._caption; }
    set caption(value) {
        if (this.applicationBar) {
            this.applicationBar.caption = value;
        }
        this._caption = value;
    }
}


/***/ }),

/***/ 7815:
/*!*********************************************!*\
  !*** ./src/app/gx/ui/model/ui-textblock.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UITextblockElement": () => (/* binding */ UITextblockElement)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);

let clickPending = false;
class UITextblockElement {
    constructor() {
        this.class = null;
        this.caption = null;
        this.visible = null;
        this.enabled = null;
        this.onClickAction = null;
        this.onDoubleclickAction = null;
    }
    onDoubleclick(eventInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            eventInfo.stopPropagation();
            if (this.onDoubleclickAction) {
                clickPending = false;
                yield this.onDoubleclickAction();
            }
        });
    }
    onClick(eventInfo) {
        eventInfo.stopPropagation();
        if (this.onClickAction) {
            clickPending = true;
            setTimeout(() => {
                if (clickPending) {
                    this.onClickAction();
                }
            }, 250);
        }
    }
    setClickAction(action) {
        this.onClickAction = action;
    }
    setDoubleclickAction(action) {
        this.onDoubleclickAction = action;
    }
    setLongclickAction(action) {
        // TODO
    }
    setSwipeAction(action) {
        // TODO
    }
    setSwipeleftAction(action) {
        // TODO
    }
    setSwiperightAction(action) {
        // TODO
    }
    setSwipedownAction(action) {
        // TODO
    }
    setSwipeupAction(action) {
        // TODO
    }
    setDragAction(action) {
        // TODO
    }
    setDropAction(action) {
        // TODO
    }
    setDropAcceptedAction(action) {
        // TODO
    }
    setDragCanceledAction(action) {
        // TODO
    }
}


/***/ }),

/***/ 6080:
/*!******************************************!*\
  !*** ./src/app/shared-routing.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleRoutes": () => (/* binding */ moduleRoutes),
/* harmony export */   "SharedRoutingModule": () => (/* binding */ SharedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var app_GetEmoji_getemoji_level_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/GetEmoji/getemoji_level_detail.component */ 2891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);




const moduleRoutes = [
    { path: "GetEmoji-Level_Detail", component: app_GetEmoji_getemoji_level_detail_component__WEBPACK_IMPORTED_MODULE_0__.GetEmoji_Level_DetailComponent }
];
class SharedRoutingModule {
}
SharedRoutingModule.ɵfac = function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); };
SharedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(moduleRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5687:
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.module */ 3242);
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.module */ 765);
/* harmony import */ var app_gx_ui_controls_safe_pipe_safe_pipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/gx/ui/controls/safe-pipe/safe-pipe.component */ 622);
/* harmony import */ var app_GetEmoji_getemoji_level_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/GetEmoji/getemoji_level_detail.component */ 2891);
/* harmony import */ var app_shared_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared-routing.module */ 6080);
/* harmony import */ var _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @genexus/ngx-virtual-scroller */ 9034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);









class SharedModule {
}
SharedModule.routes = app_shared_routing_module__WEBPACK_IMPORTED_MODULE_4__.moduleRoutes;
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            app_shared_routing_module__WEBPACK_IMPORTED_MODULE_4__.SharedRoutingModule,
            _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule,
            _common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _main_module__WEBPACK_IMPORTED_MODULE_1__.MainModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [app_gx_ui_controls_safe_pipe_safe_pipe_component__WEBPACK_IMPORTED_MODULE_2__.SafePipe,
        app_GetEmoji_getemoji_level_detail_component__WEBPACK_IMPORTED_MODULE_3__.GetEmoji_Level_DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        app_shared_routing_module__WEBPACK_IMPORTED_MODULE_4__.SharedRoutingModule,
        _genexus_ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerModule,
        _common_module__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _main_module__WEBPACK_IMPORTED_MODULE_1__.MainModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_shared_module_ts.js.map