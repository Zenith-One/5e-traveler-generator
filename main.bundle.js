webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/ability-score-selection/ability-score-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ability-score-selection/ability-score-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Step 3: Choose your ability scores for {{character.name}}</h2>\n<div class=\"row\">\n  <div class=\"col-2 option-list\">\n    <ul>\n      <li *ngIf=\"areAllAbilitiesSelected()\">\n        <button class=\"btn btn-primary\" (click)=\"submitAbilityScores()\">Continue</button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-10\">\n    <table class=\"table\">\n      <tr>\n        <th>Ability</th>\n        <th>Base</th>\n        <th>Racial</th>\n        <th>Total</th>\n        <th>Bonus</th>\n      </tr>\n      <tr *ngFor=\"let ability of abilityScoreNames\">\n        <td>{{ability.substr(0,1).toUpperCase() + ability.substr(1)}}</td>\n        <td>\n          <select [(ngModel)]=\"selectedScores[ability]\" (change)=\"selectedScoreChanged(ability)\">\n            <option [value]=\"0\"></option>\n            <option [value]=\"selectedScores[ability]\" *ngIf=\"selectedScores[ability] && selectedScores[ability] !== 'undefined'\">{{selectedScores[ability]}}</option>\n            <option *ngFor=\"let score of filterAvailableScores()\" [value]=\"score\" [selected]=\"score === selectedScores[ability]\">{{score}}</option>\n          </select>\n        </td>\n        <td>{{character.race.abilityScores[ability]}}</td>\n        <td>{{character.race.abilityScores[ability] + selectedScores[ability]}}</td>\n        <td>{{getAbilityBonus(character.race.abilityScores[ability] + selectedScores[ability])}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ability-score-selection/ability-score-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilityScoreSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbilityScoreSelectionComponent = (function () {
    function AbilityScoreSelectionComponent() {
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.abilityScoreNames = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        this.selectedScores = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
        this.availableScores = [15, 14, 13, 12, 10, 8];
        this.originalAvailable = [15, 14, 13, 12, 10, 8];
    }
    AbilityScoreSelectionComponent.prototype.ngOnInit = function () {
        this.racialBonuses = this.character.race.abilityScores;
    };
    AbilityScoreSelectionComponent.prototype.selectedScoreChanged = function (ability) {
        if (this.selectedScores[ability]) {
            this.selectedScores[ability] = Number(this.selectedScores[ability]);
        }
    };
    AbilityScoreSelectionComponent.prototype.filterAvailableScores = function () {
        var used = [];
        for (var i = 0; i < this.abilityScoreNames.length; i++) {
            var a = this.abilityScoreNames[i];
            if (this.selectedScores[a] && this.selectedScores[a] !== 'undefined') {
                var score = this.selectedScores[a];
                used.push(score);
            }
        }
        var filtered = this.availableScores.filter(function (item) {
            var usedIndex = used.indexOf(item);
            return usedIndex < 0;
        });
        return filtered;
    };
    AbilityScoreSelectionComponent.prototype.getAbilityBonus = function (score) {
        var b = __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */].getAbilityModifier(score);
        var out;
        if (b >= 0) {
            out = '+' + b;
        }
        else {
            out = b + '';
        }
        return out;
    };
    AbilityScoreSelectionComponent.prototype.areAllAbilitiesSelected = function () {
        for (var i = 0; i < this.abilityScoreNames.length; i++) {
            if (this.selectedScores[this.abilityScoreNames[i]] <= 0) {
                return false;
            }
        }
        return true;
    };
    AbilityScoreSelectionComponent.prototype.submitAbilityScores = function () {
        var s = this.selectedScores;
        var r = this.character.race.abilityScores;
        var c = this.character.abilityScores;
        this.abilityScoreNames.forEach(function (name) {
            c[name] = s[name] + r[name];
        });
        this.onComplete.emit(true);
    };
    return AbilityScoreSelectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], AbilityScoreSelectionComponent.prototype, "onComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]) === "function" && _b || Object)
], AbilityScoreSelectionComponent.prototype, "character", void 0);
AbilityScoreSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'ability-score-selection',
        template: __webpack_require__("../../../../../src/app/ability-score-selection/ability-score-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ability-score-selection/ability-score-selection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AbilityScoreSelectionComponent);

var _a, _b;
//# sourceMappingURL=ability-score-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Traveler-Style 5e Character Generator</h1>\n</div>\n<div *ngIf=\"!isExporting && !isImporting\">\n   <race-selection (onComplete)=\"handleRaceSelection($event)\" *ngIf=\"step==1\"></race-selection>\n   <name-selection (onComplete)=\"handleNameSelection()\" [character]=\"character\" *ngIf=\"step==2\"></name-selection>\n   <ability-score-selection (onComplete)=\"handleAbilitySelection()\" [character]=\"character\" *ngIf=\"step==3\"></ability-score-selection>\n   <background-selection (onComplete)=\"handleBackgroundSelection()\" [character]=\"character\" *ngIf=\"step==4\"></background-selection>\n   <career-minigame [character]=\"character\" *ngIf=\"step==5\"></career-minigame>\n</div>\n<div *ngIf=\"isExporting\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <textarea style=\"height:250px;overflow:hidden;\" class=\"form-control\" [value]=\"getExportedCharacter()\"></textarea>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isImporting\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"alert alert-warning\" *ngIf=\"importError\">{{importError}}</div>\n      <textarea style=\"height:250px;overflow:hidden;\" class=\"form-control\" (change)=\"clearImportError()\" [(ngModel)]=\"importString\" placeholder=\"Paste import string here.\"></textarea>\n      <button class=\"btn btn-primary\" (click)=\"doImport()\">Import it!</button>\n\n    </div>\n  </div>\n</div>\n<footer style=\"margin:60px;\">\n  <button class=\"btn btn-success\" *ngIf=\"step === 1\" (click)=\"showImport()\">Import</button>\n  <button class=\"btn btn-danger\" *ngIf=\"isImporting\" (click)=\"hideImport()\">Close Import</button>\n  <button class=\"btn btn-warning\" *ngIf=\"step > 1\" (click)=\"showExport()\">Export</button>\n  <button class=\"btn btn-danger\" *ngIf=\"isExporting\" (click)=\"hideExport()\">Close Export</button>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var devStep = 0;
var devData = [
    '{"step":2,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":0,"dexterity":0,"constitution":0,"intelligence":0,"wisdom":0,"charisma":0},"skills":[],"events":[],"age":50}',
    '{"step":3,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":0,"dexterity":0,"constitution":0,"intelligence":0,"wisdom":0,"charisma":0},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male"}',
    '{"step":4,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":15,"dexterity":14,"constitution":15,"intelligence":12,"wisdom":11,"charisma":8},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male"}',
    '{"step":5,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":15,"dexterity":14,"constitution":15,"intelligence":12,"wisdom":11,"charisma":8},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male","background":"Dwarven Culture"}'
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.step = 1;
        this.isExporting = false;
        this.isImporting = false;
        if (devStep) {
            var c = __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */].deserialize(devData[Math.max(devStep - 2, 0)]);
            this.character = c;
            console.log(c);
            this.step = devStep;
        }
    }
    AppComponent.prototype.handleRaceSelection = function (character) {
        this.character = character;
        this.step++;
        character.step = this.step;
        if (devStep)
            this.logCharacter();
    };
    AppComponent.prototype.handleNameSelection = function () {
        this.step++;
        this.character.step = this.step;
        if (devStep)
            this.logCharacter();
    };
    AppComponent.prototype.handleAbilitySelection = function () {
        this.step++;
        this.character.step = this.step;
        if (devStep)
            this.logCharacter();
    };
    AppComponent.prototype.handleBackgroundSelection = function () {
        this.step++;
        this.character.step = this.step;
        if (devStep)
            this.logCharacter();
    };
    AppComponent.prototype.getExportedCharacter = function () {
        return this.character.serialize();
    };
    AppComponent.prototype.showExport = function () {
        this.isExporting = true;
    };
    AppComponent.prototype.hideExport = function () {
        this.isExporting = false;
    };
    AppComponent.prototype.showImport = function () {
        this.isImporting = true;
    };
    AppComponent.prototype.hideImport = function () {
        this.isImporting = false;
    };
    AppComponent.prototype.doImport = function () {
        var c;
        try {
            c = __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */].deserialize(this.importString);
        }
        catch (e) {
            this.importError = 'Invalid import string.';
            return;
        }
        if (c) {
            this.character = c;
            this.step = c.step;
            this.isImporting = false;
        }
    };
    AppComponent.prototype.clearImportError = function () {
        this.importError = undefined;
    };
    AppComponent.prototype.logCharacter = function () {
        console.log(this.character);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__race_service__ = __webpack_require__("../../../../../src/app/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__name_service__ = __webpack_require__("../../../../../src/app/name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dice_service__ = __webpack_require__("../../../../../src/app/dice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__race_selection_race_selection_component__ = __webpack_require__("../../../../../src/app/race-selection/race-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ability_score_selection_ability_score_selection_component__ = __webpack_require__("../../../../../src/app/ability-score-selection/ability-score-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__background_selection_background_selection_component__ = __webpack_require__("../../../../../src/app/background-selection/background-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__name_selection_name_selection_component__ = __webpack_require__("../../../../../src/app/name-selection/name-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__career_minigame_career_minigame_component__ = __webpack_require__("../../../../../src/app/career-minigame/career-minigame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__character_stats_character_stats_component__ = __webpack_require__("../../../../../src/app/character-stats/character-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__character_stats_core_details_core_details_component__ = __webpack_require__("../../../../../src/app/character-stats/core-details/core-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__background_details_background_details_component__ = __webpack_require__("../../../../../src/app/background-details/background-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__race_details_race_details_component__ = __webpack_require__("../../../../../src/app/race-details/race-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__race_selection_race_selection_component__["a" /* RaceSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ability_score_selection_ability_score_selection_component__["a" /* AbilityScoreSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__background_selection_background_selection_component__["a" /* BackgroundSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__name_selection_name_selection_component__["a" /* NameSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__career_minigame_career_minigame_component__["a" /* CareerMinigameComponent */],
            __WEBPACK_IMPORTED_MODULE_13__character_stats_character_stats_component__["a" /* CharacterStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__character_stats_core_details_core_details_component__["a" /* CoreDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__background_details_background_details_component__["a" /* BackgroundDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__race_details_race_details_component__["a" /* RaceDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__dice_service__["a" /* DiceService */], __WEBPACK_IMPORTED_MODULE_5__race_service__["a" /* RaceService */], __WEBPACK_IMPORTED_MODULE_6__name_service__["a" /* NameService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/background-details/background-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/background-details/background-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{background.name}}</h3>\n  <p>{{background.description}}</p>\n  <p *ngFor=\"let f of background.features\">\n    <strong>{{f.name}}:</strong> {{f.text}}\n  </p>\n  <p>\n    <strong>Languages:</strong> You can speak, read and write {{getLanguageDisplay()}}\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/background-details/background-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background__ = __webpack_require__("../../../../../src/app/background.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__background___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__background__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundDetailsComponent = (function () {
    function BackgroundDetailsComponent() {
    }
    BackgroundDetailsComponent.prototype.getLanguageDisplay = function () {
        var lang = this.background.languages.slice();
        if (lang.length < 2) {
            return lang[0] + '.';
        }
        var lastTwo = lang.splice(lang.length - 2, 2).join(' and ');
        lang.push(lastTwo);
        return lang.join(', ') + '.';
    };
    return BackgroundDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__background__["Background"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__background__["Background"]) === "function" && _a || Object)
], BackgroundDetailsComponent.prototype, "background", void 0);
BackgroundDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'background-details',
        template: __webpack_require__("../../../../../src/app/background-details/background-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/background-details/background-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BackgroundDetailsComponent);

var _a;
//# sourceMappingURL=background-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/background-selection/background-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/background-selection/background-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Step 4: Background Selection for {{character.name}}</h2>\n<div class=\"row\">\n  <div class=\"col-2 option-list\">\n    <ul>\n      <li *ngFor=\"let b of backgrounds\" (click)=\"selectBackground(b)\" [ngClass]=\"{'selected': selectedBackground && selectedBackground.name === b.name}\">\n        {{b.name}}\n      </li>\n      <li *ngIf=\"selectedBackground\">\n        <button class=\"btn btn-primary\" (click)=\"finalizeBackground()\">Continue</button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-10\">\n    <background-details [background]=\"selectedBackground\" *ngIf=\"selectedBackground\"></background-details>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/background-selection/background-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_backgrounds_index__ = __webpack_require__("../../../../../src/app/data/backgrounds/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackgroundSelectionComponent = (function () {
    function BackgroundSelectionComponent() {
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.backgrounds = __WEBPACK_IMPORTED_MODULE_1__data_backgrounds_index__["a" /* backgrounds */];
        this.selectedBackground = __WEBPACK_IMPORTED_MODULE_1__data_backgrounds_index__["a" /* backgrounds */][0];
    }
    BackgroundSelectionComponent.prototype.selectBackground = function (b) {
        this.selectedBackground = b;
    };
    BackgroundSelectionComponent.prototype.finalizeBackground = function () {
        this.character.setBackground(this.selectedBackground);
        this.onComplete.emit(true);
    };
    return BackgroundSelectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character__["a" /* Character */]) === "function" && _a || Object)
], BackgroundSelectionComponent.prototype, "character", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _b || Object)
], BackgroundSelectionComponent.prototype, "onComplete", void 0);
BackgroundSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'background-selection',
        template: __webpack_require__("../../../../../src/app/background-selection/background-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/background-selection/background-selection.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BackgroundSelectionComponent);

var _a, _b;
//# sourceMappingURL=background-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/background.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=background.js.map

/***/ }),

/***/ "../../../../../src/app/career-minigame/career-minigame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs .nav-item .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\nul.nav-tabs {\r\n    margin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/career-minigame/career-minigame.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Character Development</h2>\n<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]=\"{'active': tab==='develop'}\">Develop Your Character</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngClass]=\"{'active': tab==='stats'}\">Character Details</a>\n    </li>\n</ul>\n<character-stats [character]=\"character\" *ngIf=\"tab==='stats'\"></character-stats>\n\n"

/***/ }),

/***/ "../../../../../src/app/career-minigame/career-minigame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerMinigameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerMinigameComponent = (function () {
    function CareerMinigameComponent() {
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.phase = 0;
        this.tab = 'stats';
    }
    return CareerMinigameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]) === "function" && _a || Object)
], CareerMinigameComponent.prototype, "character", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _b || Object)
], CareerMinigameComponent.prototype, "onComplete", void 0);
CareerMinigameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'career-minigame',
        template: __webpack_require__("../../../../../src/app/career-minigame/career-minigame.component.html"),
        styles: [__webpack_require__("../../../../../src/app/career-minigame/career-minigame.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CareerMinigameComponent);

var _a, _b;
//# sourceMappingURL=career-minigame.component.js.map

/***/ }),

/***/ "../../../../../src/app/character-stats/character-stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-stats/character-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">{{character.name}}, the {{character.sex.toLowerCase()}} {{character.race.name}}</h3>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-2 option-list\">\r\n        <ul>\r\n            <li [ngClass]=\"{'selected': category === 'core'}\" (click)=\"selectCategory('core')\">Core Details</li>\r\n            <li [ngClass]=\"{'selected': category === 'race'}\" (click)=\"selectCategory('race')\">Race</li>\r\n            <li [ngClass]=\"{'selected': category === 'background'}\" (click)=\"selectCategory('background')\">Background</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-10\">\r\n        <core-details [character]=\"character\" *ngIf=\"category==='core'\"></core-details>\r\n        <race-details [race]=\"character.race\" *ngIf=\"category==='race'\"></race-details>\r\n        <background-details [background]=\"character.background\" *ngIf=\"category==='background'\"></background-details>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/character-stats/character-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterStatsComponent = (function () {
    function CharacterStatsComponent() {
        this.category = 'core';
    }
    CharacterStatsComponent.prototype.selectCategory = function (selected) {
        this.category = selected;
    };
    return CharacterStatsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]) === "function" && _a || Object)
], CharacterStatsComponent.prototype, "character", void 0);
CharacterStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'character-stats',
        template: __webpack_require__("../../../../../src/app/character-stats/character-stats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/character-stats/character-stats.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CharacterStatsComponent);

var _a;
//# sourceMappingURL=character-stats.component.js.map

/***/ }),

/***/ "../../../../../src/app/character-stats/core-details/core-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.ability-scores {\r\n    list-style: none;\r\n    text-transform: capitalize\r\n}\r\n\r\nul.ability-scores strong {\r\n    display: inline-block;\r\n    width: 7em;\r\n}\r\n\r\nspan.score {\r\n    display: inline-block;\r\n    width: 2em;\r\n}\r\n\r\nspan.heading {\r\n    display: block;\r\n    font-weight: bold;\r\n}\r\n\r\n.skill-list ul {\r\n   padding-left: 1em; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-stats/core-details/core-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>Ability Scores</h5>\r\n<ul class=\"ability-scores row\">\r\n    <li class=\"col-4\" \r\n        *ngFor=\"let ability of ['strength','dexterity','constitution','intelligence','wisdom','charisma']\">\r\n        <strong>{{ability}}: </strong> <span class=\"score\">{{getAbilityScoreDisplay(ability)[0]}}</span> ({{getAbilityScoreDisplay(ability)[1]}})\r\n    </li>\r\n</ul>\r\n<hr>\r\n<h5>Physical Appearance</h5>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        <strong>Age: </strong> {{character.age}} years old\r\n    </div>\r\n    <div class=\"col-4\">\r\n        <strong>Height: </strong> {{character.getHeightDisplay()}}\r\n    </div>\r\n    <div class=\"col-4\">\r\n        <strong>Weight: </strong> {{character.size.weight}} lbs.\r\n    </div>\r\n</div>\r\n<hr>\r\n<h5>Proficiencies</h5>\r\n<div class=\"row\">\r\n    <div class=\"col-4 skill-list\">\r\n        <span class=\"heading\">Tools:</span>\r\n        <ul *ngIf=\"getProficiencies('tool').length != 0\">\r\n            <li *ngFor=\"let p of getProficiencies('tool')\">{{p.name}} ({{p.source}})</li>\r\n        </ul>\r\n        <p *ngIf=\"getProficiencies('tool').length == 0\">None</p>\r\n    </div>\r\n    <div class=\"col-4 skill-list\">\r\n        <span class=\"heading\">Weapons:</span>\r\n        <ul *ngIf=\"getProficiencies('weapon').length != 0\">\r\n            <li *ngFor=\"let p of getProficiencies('weapon')\">{{p.name}} ({{p.source}})</li>\r\n        </ul>\r\n        <p *ngIf=\"getProficiencies('weapon').length == 0\">None</p>\r\n    </div>\r\n    <div class=\"col-4 skill-list\">\r\n        <span class=\"heading\">Armor:</span>\r\n        <ul *ngIf=\"getProficiencies('armor').length != 0\">\r\n            <li *ngFor=\"let p of getProficiencies('armor')\">{{p.name}} ({{p.source}})</li>\r\n        </ul>\r\n        <p *ngIf=\"getProficiencies('armor').length == 0\">None</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/character-stats/core-details/core-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoreDetailsComponent = (function () {
    function CoreDetailsComponent() {
    }
    CoreDetailsComponent.prototype.getProficiencies = function (type) {
        return this.character.proficiencies
            .filter(function (item) { return item.category.toLowerCase() === type.toLowerCase(); })
            .sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    };
    CoreDetailsComponent.prototype.getAbilityScoreDisplay = function (ability) {
        return [this.character.abilityScores[ability] + '', this.getAbilityBonus(ability)];
    };
    CoreDetailsComponent.prototype.getAbilityBonus = function (ability) {
        var mod = __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */].getAbilityModifier(this.character.abilityScores[ability]);
        var out;
        if (mod >= 0) {
            out = '+' + mod;
        }
        else {
            out = '' + mod;
        }
        return out;
    };
    return CoreDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]) === "function" && _a || Object)
], CoreDetailsComponent.prototype, "character", void 0);
CoreDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'core-details',
        template: __webpack_require__("../../../../../src/app/character-stats/core-details/core-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/character-stats/core-details/core-details.component.css")]
    })
], CoreDetailsComponent);

var _a;
//# sourceMappingURL=core-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/character.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race_service__ = __webpack_require__("../../../../../src/app/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_backgrounds_index__ = __webpack_require__("../../../../../src/app/data/backgrounds/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("../../../../../src/app/core.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });



var Character = (function () {
    function Character(race) {
        this.race = race;
        this.proficiencies = [];
        this.languages = [];
        this.connections = [];
        this.size = __WEBPACK_IMPORTED_MODULE_0__race_service__["a" /* RaceService */].getSize(this.race);
        this.abilityScores = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };
        this.skills = [];
        this.events = [];
        this.age = race.age.startingAge;
    }
    Character.prototype.setSex = function (sex) {
        this.sex = sex;
    };
    Character.prototype.setName = function (name) {
        this.name = name;
    };
    Character.getAbilityModifier = function (score) {
        return Math.floor(score / 2 - 5);
    };
    Character.prototype.getAbilityModifier = function (scoreName) {
        var theScore = this.abilityScores[scoreName];
        return Math.floor(theScore / 2 - 5);
    };
    Character.prototype.setBackground = function (background) {
        this.background = background;
        var records = background.proficiencies.map(function (item) {
            var r = { category: item.category, name: item.name, source: 'background' };
            return r;
        });
        this.proficiencies = __WEBPACK_IMPORTED_MODULE_2__core__["a" /* unique */](this.proficiencies.concat(records));
    };
    Character.prototype.getRacialTraits = function () {
        return this.race.features;
    };
    Character.prototype.getBackgroundTraits = function () {
        return this.background ? this.background.features : [];
    };
    Character.prototype.getTraitsAndFeatures = function () {
        return this.getRacialTraits().concat(this.getBackgroundTraits());
    };
    Character.parse = function (str) {
        var cdata = JSON.parse(str);
        var c = new Character(cdata.race);
        c.setName(cdata.name);
        c.setSex(cdata.sex);
        c.abilityScores = cdata.abilityScores;
        c.background = cdata.background;
        c.size = cdata.size;
        c.skills = cdata.skills;
        c.age = cdata.age;
        c.connections = cdata.connections;
        c.workHistory = cdata.workHistory;
        console.log(c);
        return c;
    };
    Character.prototype.getHeightDisplay = function () {
        return __WEBPACK_IMPORTED_MODULE_0__race_service__["a" /* RaceService */].getHeightDisplay(this.size);
    };
    Character.prototype.serialize = function () {
        var raw = JSON.parse(JSON.stringify(this));
        raw.race = this.race.name;
        if (this.background && this.background.name) {
            raw.background = this.background.name;
        }
        return JSON.stringify(raw);
    };
    Character.deserialize = function (str) {
        var raw = JSON.parse(str);
        var race = __WEBPACK_IMPORTED_MODULE_0__race_service__["a" /* RaceService */].races.filter(function (item) { return item.name === raw.race; })[0];
        var background = __WEBPACK_IMPORTED_MODULE_1__data_backgrounds_index__["a" /* backgrounds */].filter(function (item) { return item.name === raw.background; })[0];
        var c = new Character(race);
        c.step = raw.step;
        c.setName(raw.name);
        c.setSex(raw.sex);
        c.setBackground(background);
        c.abilityScores = raw.abilityScores;
        c.size = raw.size;
        c.skills = raw.skills;
        c.age = raw.age;
        c.connections = raw.connections;
        c.workHistory = raw.workHistory;
        console.log(c);
        return c;
    };
    return Character;
}());

//# sourceMappingURL=character.js.map

/***/ }),

/***/ "../../../../../src/app/core.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unique;
function unique(items) {
    var namesUsed = [];
    var itemsOut = [];
    items.forEach(function (item) {
        if (namesUsed.indexOf(item.name) < 0) {
            namesUsed.push(item.name);
            itemsOut.push(item);
        }
    });
    return itemsOut;
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/cityUrchin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_enum__ = __webpack_require__("../../../../../src/app/skill.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cityUrchin; });

var cityUrchin = {
    name: 'City Urchin',
    description: 'You grew up alone on the streets of the big city, or at least it felt that way. You struggled to survive, fending for yourself and fighting fiercely over food and your meagre possesions. You are shaped for better or for worse by your life growing up in desperate poverty.',
    features: [
        { name: 'Street Training', text: 'You have proficiency with the dagger, sling, club and unarmed strikes.' },
        { name: 'Slippery Hands', text: 'You have proficiency in the Sleight of Hand skill.' },
        { name: 'Street Smarts', text: 'You gain proficiency in one of the following tools: Disguise kit or Thieves’ tools.' }
    ],
    languages: ['Common (or if you prefer, the main language of the city you grew up in)'],
    skills: [__WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].sleightOfHand],
    proficiencies: [
        { category: 'weapon', name: 'dagger' },
        { category: 'weapon', name: 'sling' },
        { category: 'weapon', name: 'club' },
        { category: 'weapon', name: 'unarmed strike' },
        { category: 'tool', name: 'disguise kit or thieves\' tools' }
    ]
};
//# sourceMappingURL=cityUrchin.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/dwarvenCulture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dwarvenCulture; });
var dwarvenCulture = {
    name: 'Dwarven Culture',
    description: 'You grew up in a Dwarven nation, or in a Dwarven enclave. Dwarven culture generally revolves around the earth, so there is a focus on activities such as mining, smelting and earthworks. You have grown up in this sort of environment, and have become influenced by Dwarven culture.',
    features: [
        { name: 'Dwarven Combat Training', text: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.' },
        { name: 'Tool Proficiency', text: 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.' },
        { name: 'Stonecunning', text: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' }
    ],
    languages: ['Common', 'Dwarvish'],
    skills: [],
    proficiencies: [
        { category: 'weapon', name: 'battleaxe' },
        { category: 'weapon', name: 'handaxe' },
        { category: 'weapon', name: 'warhammer' },
        { category: 'weapon', name: 'light hammer' },
        { category: 'tool', name: "smith's tools, brewer's supplies, or mason's tools" }
    ]
};
//# sourceMappingURL=dwarvenCulture.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/elvishCulture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_enum__ = __webpack_require__("../../../../../src/app/skill.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elvishCulture; });

var elvishCulture = {
    name: 'Elvish Culture',
    description: 'You grew up in a Elvish nation, or in a Elvish enclave. Elvish culture generally revolves around the forest and their fey magical ancestry, so there is much focus on scavenging in forests and learning magical lore. You have grown up in this sort of environment, and have become influenced by Elvish Culture.',
    features: [
        { name: 'Elf Weapon Training', text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.' },
        { name: 'Keen Senses', text: 'You have proficiency in the Perception skill.' }
    ],
    languages: ['Common', 'Elvish', 'one extra language of your choice'],
    skills: [__WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].perception],
    proficiencies: [
        { category: 'weapon', name: 'longsword' },
        { category: 'weapon', name: 'shortsword' },
        { category: 'weapon', name: 'longbow' },
        { category: 'weapon', name: 'shortbow' }
    ]
};
//# sourceMappingURL=elvishCulture.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/gnomishCulture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gnomishCulture; });
var gnomishCulture = {
    name: 'Gnomish Culture',
    description: 'You grew up in a Gnomish nation, or in an Gnomish enclave. Halfling culture thrives on a thirst for knowledge, and reveres gadgets and tools of all kinds. You have grown up in this sort of environment, and have become influenced by Gnomish culture.',
    features: [
        { name: 'Artificer\'s Lore', text: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.' },
        { name: 'Tinker', text: 'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. Consult the Players Handbook under the Gnome entry for a list of devices you can create, or consult your Game Master.' }
    ],
    languages: ['Common', 'Gnomish'],
    skills: [],
    proficiencies: [
        { category: 'tool', name: 'tinker\'s tools' }
    ]
};
//# sourceMappingURL=gnomishCulture.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/halflingCulture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halflingCulture; });
var halflingCulture = {
    name: 'Halfling Culture',
    description: 'You grew up in a Halfing nation, or in an Halfling enclave. Halfling culture revolves around food and community, and have a deep sense of loyalty and sense of duty to others. You have grown up in this sort of environment, and have become influenced by Halfling culture.',
    features: [
        { name: 'Brave', text: 'You have advantage on saving throws against being frightened.' },
        { name: 'Food Connoisseur', text: 'Whenever you make an Intelligence (History) check related to the origin of a particular dish, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' }
    ],
    languages: ['Common', 'Halfling'],
    skills: [],
    proficiencies: []
};
//# sourceMappingURL=halflingCulture.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dwarvenCulture__ = __webpack_require__("../../../../../src/app/data/backgrounds/dwarvenCulture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elvishCulture__ = __webpack_require__("../../../../../src/app/data/backgrounds/elvishCulture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__halflingCulture__ = __webpack_require__("../../../../../src/app/data/backgrounds/halflingCulture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gnomishCulture__ = __webpack_require__("../../../../../src/app/data/backgrounds/gnomishCulture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orcishCulture__ = __webpack_require__("../../../../../src/app/data/backgrounds/orcishCulture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cityUrchin__ = __webpack_require__("../../../../../src/app/data/backgrounds/cityUrchin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nobility__ = __webpack_require__("../../../../../src/app/data/backgrounds/nobility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wilderness__ = __webpack_require__("../../../../../src/app/data/backgrounds/wilderness.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backgrounds; });








var backgrounds = [
    __WEBPACK_IMPORTED_MODULE_0__dwarvenCulture__["a" /* dwarvenCulture */],
    __WEBPACK_IMPORTED_MODULE_1__elvishCulture__["a" /* elvishCulture */],
    __WEBPACK_IMPORTED_MODULE_2__halflingCulture__["a" /* halflingCulture */],
    __WEBPACK_IMPORTED_MODULE_3__gnomishCulture__["a" /* gnomishCulture */],
    __WEBPACK_IMPORTED_MODULE_4__orcishCulture__["a" /* orcishCulture */],
    __WEBPACK_IMPORTED_MODULE_5__cityUrchin__["a" /* cityUrchin */],
    __WEBPACK_IMPORTED_MODULE_6__nobility__["a" /* nobility */],
    __WEBPACK_IMPORTED_MODULE_7__wilderness__["a" /* wilderness */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/nobility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_enum__ = __webpack_require__("../../../../../src/app/skill.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nobility; });

var nobility = {
    name: 'Nobility',
    description: 'You grew up pampered and prepared for success in life. You had a decent education and servants to tend to your every whim. You understand the importance of wealth, power and prestige. And you have watched with fascinated interest the inner workings of political machinations.',
    features: [
        { name: 'Duelling & Jousting', text: 'You have proficiency with the longsword, rapier, lance and shortbow.' },
        { name: 'Cultural Education', text: 'You have proficiency in the History skill, as well as the Persuasion skill.' },
        { name: 'Birthright', text: 'Your noble birth means that, when travelling in lands that recognise your nation, commoners will treat you with respect and deference (at least until your reputation or gold runs out), and other nobles will regard you as in the same social sphere. You may need to provide proof of your status; this can be in the form of documents on your person or passing the scrunity of a retainer trained in the extensive lineage of nobility of your nation.' }
    ],
    languages: ['Common', 'one extra language of your choice'],
    skills: [__WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].history, __WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].persuasion],
    proficiencies: [
        { category: 'weapon', name: 'longsword' },
        { category: 'weapon', name: 'rapier' },
        { category: 'weapon', name: 'lance' },
        { category: 'weapon', name: 'shortbow' }
    ]
};
//# sourceMappingURL=nobility.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/orcishCulture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_enum__ = __webpack_require__("../../../../../src/app/skill.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orcishCulture; });

var orcishCulture = {
    name: 'Orcish Culture',
    description: 'You grew up in a Orcish nation, or in an Orcish enclave. Orcish culture is generally unrefined, reverting to barbarism and savagery. You have grown up in this sort of environment (and somehow survived), and have become influenced by Orcish culture.',
    features: [
        { name: 'Orcish Combat Training', text: 'You have proficiency with the greataxe, hand-axe, javelin and spear.' },
        { name: 'Menacing', text: 'You have proficiency in the Intimidation skill.' }
    ],
    languages: ['Common', 'Orcish'],
    skills: [__WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].intimidation],
    proficiencies: [
        { category: 'weapon', name: 'greataxe' },
        { category: 'weapon', name: 'handaxe' },
        { category: 'weapon', name: 'javelin' },
        { category: 'weapon', name: 'spear' }
    ]
};
//# sourceMappingURL=orcishCulture.js.map

/***/ }),

/***/ "../../../../../src/app/data/backgrounds/wilderness.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skill_enum__ = __webpack_require__("../../../../../src/app/skill.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wilderness; });

var wilderness = {
    name: 'Wilderness',
    description: 'You grew up beyond civilization, and not only survived but thrived. You lived off the land for years with minimal contact with the outside world. Technology and crowded streets make you feel uncomfortable because it is just so.... Unnatural.',
    features: [
        { name: 'Hunter', text: 'You have proficiency with the spear, shortbow, javelin and dagger.' },
        { name: 'Instincts', text: 'You have proficiency in the Survival skill.' },
        { name: 'Gatherer', text: 'You have advantage on any navigation-related skill checks for areas you are familiar with. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers suitable food and water supplies.' }
    ],
    languages: ['Common (or if you prefer, the primary language of the closest settlement)'],
    skills: [__WEBPACK_IMPORTED_MODULE_0__skill_enum__["a" /* Skills */].survival],
    proficiencies: [
        { category: 'weapon', name: 'spear' },
        { category: 'weapon', name: 'shortbow' },
        { category: 'weapon', name: 'javelin' },
        { category: 'weapon', name: 'dagger' }
    ]
};
//# sourceMappingURL=wilderness.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/dragonborn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dragonborn; });
var dragonborn = {
    name: 'Dragonborn',
    description: 'You are a humanoid with pronounced draconic heritage.',
    abilityScores: {
        strength: 2,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 1
    },
    age: {
        term: 4,
        startingAge: 15,
        agingStarts: 31,
        advancedAging: 75
    },
    speed: 30,
    features: [
        { name: 'Draconic Ancestry', text: "You have draconic ancestry. Choose one type from the Draconic Ancestry table in the Player's Handbook. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table." },
        { name: 'Breath Weapon', text: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t se it again until you complete a short or long rest." },
        { name: 'Damage Resistance', text: "You have resistance to the damage type associated with your draconic ancestry." }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Dragonborn are taller and heavier than humans, often standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
        baseHeight: (5 * 12) + 6,
        heightModifier: { count: 2, sides: 8 },
        baseWeight: 175,
        weightModifier: { count: 2, sides: 6 }
    },
    naming: {
        race: 'Draconic'
    }
};
//# sourceMappingURL=dragonborn.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/dwarf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dwarf; });

var dwarf = {
    name: 'Dwarf',
    description: 'You are a short, stout and extremely hardy humanoid. Many dwarves make their homes in the earth and under mountains.',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 2,
        intelligence: 0,
        wisdom: 1,
        charisma: 0
    },
    age: {
        term: 20,
        startingAge: 50,
        agingStarts: 110,
        advancedAging: 310
    },
    speed: 25,
    features: [
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Dwarven Resilience', text: 'You have advantage on saving throws against poison, and you have resistance to poison damage.' },
        { name: 'Dwarven Toughness', text: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' },
        { name: 'Stout', text: 'Your speed is not reduced by wearing heavy armor.' }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Squat and stocky, your size is medium.',
        baseHeight: (3 * 12) + 8,
        heightModifier: { count: 2, sides: 4 },
        baseWeight: 115,
        weightModifier: { count: 2, sides: 6 },
        averageHeight: 49
    },
    naming: {
        race: 'Dwarvish'
    }
};
//# sourceMappingURL=dwarf.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/elf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elf; });

var elf = {
    name: 'Elf',
    description: 'You are a lithe, graceful and extraordinarily beautiful humanoid. Many elves make their homes in wild forested areas.',
    abilityScores: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 0
    },
    age: {
        term: 45,
        startingAge: 100,
        agingStarts: 280,
        advancedAging: 685
    },
    speed: 30,
    features: [
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Fey Ancestry', text: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.' },
        { name: 'Cantrip', text: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' },
        { name: 'Trance', text: 'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.' }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Tall and slender, your size is medium.',
        baseHeight: (4 * 12) + 6,
        heightModifier: { count: 2, sides: 4 },
        baseWeight: 90,
        weightModifier: { count: 2, sides: 6 }
    },
    naming: {
        race: 'Elvish'
    }
};
//# sourceMappingURL=elf.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/gnome.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gnome; });

var gnome = {
    name: 'Gnome',
    description: 'You are a small, vibrant, and extraordinarily playful humanoid.',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 1,
        intelligence: 2,
        wisdom: 0,
        charisma: 0
    },
    age: {
        term: 26,
        startingAge: 40,
        agingStarts: 144,
        advancedAging: 390
    },
    speed: 25,
    features: [
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Gnome Cunning', text: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic." }
    ],
    sizeFactors: {
        category: 'small',
        description: 'Quite short, but resilient, your size is small.',
        baseHeight: (2 * 12) + 11,
        heightModifier: { count: 2, sides: 4 },
        baseWeight: 35,
        weightModifier: { count: 1, sides: 1 }
    },
    naming: {
        race: 'Sioux'
    }
};
//# sourceMappingURL=gnome.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/halfElf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfElf; });

var halfElf = {
    name: 'Half-elf',
    description: 'You are a half-breed, caught between the worlds of elves and men.',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 2
    },
    age: {
        term: 10,
        startingAge: 20,
        agingStarts: 60,
        advancedAging: 160
    },
    speed: 30,
    features: [
        { name: 'Half-Elf Versatility', text: 'Increase two ability scores, other than Charisma, by 1 each.' },
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Fey Ancestry', text: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Half-elves are about the same size as humans. Your size is medium.',
        baseHeight: (4 * 12) + 9,
        heightModifier: { count: 2, sides: 8 },
        baseWeight: 110,
        weightModifier: { count: 2, sides: 4 }
    },
    naming: {
        race: 'Human'
    }
};
//# sourceMappingURL=halfElf.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/halfOrc.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfOrc; });

var halfOrc = {
    name: 'Half-orc',
    description: 'You are a half-breed, caught between the worlds of orcs and men.',
    abilityScores: {
        strength: 2,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    age: {
        term: 4,
        startingAge: 14,
        agingStarts: 30,
        advancedAging: 60
    },
    speed: 30,
    features: [
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Reletless Endurance', text: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest." },
        { name: 'Savage Attacks', text: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit." }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Half-orcs are somewhat larger and bulkier than humans, but your size is still medium.',
        baseHeight: (4 * 12) + 10,
        heightModifier: { count: 2, sides: 10 },
        baseWeight: 140,
        weightModifier: { count: 2, sides: 6 }
    },
    naming: {
        race: 'Orcish'
    }
};
//# sourceMappingURL=halfOrc.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/halfling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfling; });
var halfling = {
    name: 'Halfling',
    description: 'You are a small, practical and extraordinarily plucky humanoid.',
    abilityScores: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 1
    },
    age: {
        term: 15,
        startingAge: 20,
        agingStarts: 80,
        advancedAging: 230
    },
    speed: 25,
    features: [
        { name: 'Lucky', text: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll." },
        { name: 'Halfling Nimbleness', text: "You can move through the space of any creature that is of a size larger than yours." },
        { name: 'Naturally Stealthy', text: "You can attempt to hide even when you are obscurred only by a creature that is at least one size larger than you." }
    ],
    sizeFactors: {
        category: 'small',
        description: 'Humble in stature, your size is small.',
        baseHeight: (2 * 12) + 7,
        heightModifier: { count: 2, sides: 4 },
        baseWeight: 35,
        weightModifier: { count: 1, sides: 1 }
    },
    naming: {
        race: 'Halfling'
    }
};
//# sourceMappingURL=halfling.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/human.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return human; });
var human = {
    name: 'Human',
    description: 'You are a standard humanoid.',
    abilityScores: {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1
    },
    age: {
        term: 4,
        startingAge: 18,
        agingStarts: 34,
        advancedAging: 82
    },
    speed: 30,
    features: [],
    sizeFactors: {
        category: 'medium',
        description: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
        baseHeight: (4 * 12) + 8,
        heightModifier: { count: 2, sides: 10 },
        baseWeight: 110,
        weightModifier: { count: 2, sides: 4 }
    },
    naming: {
        race: 'Human'
    }
};
//# sourceMappingURL=human.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragonborn__ = __webpack_require__("../../../../../src/app/data/races/dragonborn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dwarf__ = __webpack_require__("../../../../../src/app/data/races/dwarf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elf__ = __webpack_require__("../../../../../src/app/data/races/elf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gnome__ = __webpack_require__("../../../../../src/app/data/races/gnome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__halfElf__ = __webpack_require__("../../../../../src/app/data/races/halfElf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__halfling__ = __webpack_require__("../../../../../src/app/data/races/halfling.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__halfOrc__ = __webpack_require__("../../../../../src/app/data/races/halfOrc.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__human__ = __webpack_require__("../../../../../src/app/data/races/human.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tiefling__ = __webpack_require__("../../../../../src/app/data/races/tiefling.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return races; });









var races = [
    __WEBPACK_IMPORTED_MODULE_1__dwarf__["a" /* dwarf */],
    __WEBPACK_IMPORTED_MODULE_2__elf__["a" /* elf */],
    __WEBPACK_IMPORTED_MODULE_5__halfling__["a" /* halfling */],
    __WEBPACK_IMPORTED_MODULE_7__human__["a" /* human */],
    __WEBPACK_IMPORTED_MODULE_0__dragonborn__["a" /* dragonborn */],
    __WEBPACK_IMPORTED_MODULE_3__gnome__["a" /* gnome */],
    __WEBPACK_IMPORTED_MODULE_4__halfElf__["a" /* halfElf */],
    __WEBPACK_IMPORTED_MODULE_6__halfOrc__["a" /* halfOrc */],
    __WEBPACK_IMPORTED_MODULE_8__tiefling__["a" /* tiefling */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/data/races/tiefling.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tiefling; });

var tiefling = {
    name: 'Tiefling',
    description: 'You are the end result of generations of fiend blood mixing with humans.',
    abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 2
    },
    age: {
        term: 4,
        startingAge: 18,
        agingStarts: 34,
        advancedAging: 82
    },
    speed: 30,
    features: [
        { name: 'Darkvision', text: __WEBPACK_IMPORTED_MODULE_0__race__["a" /* darkvision */] },
        { name: 'Hellish Resistance', text: "You have resistance to fire damage." },
        { name: 'Infernal Legacy', text: "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells." }
    ],
    sizeFactors: {
        category: 'medium',
        description: 'Tieflings are about the same size and build as humans. Your size is medium.',
        baseHeight: (4 * 12) + 9,
        heightModifier: { count: 2, sides: 8 },
        baseWeight: 110,
        weightModifier: { count: 2, sides: 4 }
    },
    naming: {
        race: 'Fiendish',
        sexAgnostic: true
    }
};
//# sourceMappingURL=tiefling.js.map

/***/ }),

/***/ "../../../../../src/app/dice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiceService = (function () {
    function DiceService() {
    }
    DiceService.roll = function (arg1, sides) {
        var count = arg1;
        if (arg1 && typeof arg1 === "object") {
            count = arg1.count;
            sides = arg1.sides;
        }
        var total = 0;
        var rolls = [];
        for (var i = count; i > 0; i--) {
            var current = rollOne(sides);
            rolls.push(current);
            total += current;
        }
        return { total: total, rolls: rolls };
    };
    DiceService.dieAverage = function (sides) {
        var total = 0;
        for (var i = sides; i > 0; i--) {
            total += i;
        }
        return total / sides;
    };
    return DiceService;
}());
DiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DiceService);

function rollOne(sides) {
    var result = 0;
    var runs = 0;
    while (result === 0 && runs < 5000) {
        var temp = Math.floor(Math.random() * 100);
        if (temp < sides) {
            result = temp + 1;
        }
    }
    return result;
}
//# sourceMappingURL=dice.service.js.map

/***/ }),

/***/ "../../../../../src/app/name-selection/name-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".name-suggestions li {\r\n    display: inline-block;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n    width: 20%;\r\n    text-align:center;\r\n}\r\n\r\n.name-suggestions li:hover {\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/name-selection/name-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Step 2: Choose your name</h2>\n\n<div class=\"row\">\n  <div class=\"col-2 option-list\">\n    <ul>\n      <li [ngClass]=\"{'selected': sex === 'Male'}\" (click)=\"selectSex('Male')\">Male</li>\n      <li [ngClass]=\"{'selected': sex === 'Female'}\" (click)=\"selectSex('Female')\">Female</li>\n      <li *ngIf=\"sex && name && name.length>0\" style=\"margin-top:20px;\">\n        <button class=\"btn btn-primary\" (click)=\"lockInName()\">Continue</button>\n\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-10\">\n    <div *ngIf=\"!sex\">\n      <h4>&lt;- Choose your gender.</h4>\n    </div>\n    <div *ngIf=\"sex\">\n      <div class=\"form-group\">\n        <label for=\"name\"><h4>Name your {{sex.toLowerCase()}} {{character.race.name.toLowerCase()}}.</h4></label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" \n                      aria-describedby=\"nameHelp\" placeholder=\"Enter your character's name\" [ngModel]=\"name\">\n        <small id=\"nameHelp\" class=\"form-text text-muted\">Names are important. Choose carefully.</small>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div>\n            <h5 class=\"card-title\">Name suggestions:</h5>\n            <div *ngIf=\"nameSuggestionsLoading\">\n              <p style=\"text-align:center;\">\n                <span class=\"loading\" ></span>\n              </p>\n              <p style=\"text-align:center;\">\n                Loading...\n              </p>\n            </div>\n            <div *ngIf=\"nameSuggestions && nameSuggestions.length\">\n              <ul class=\"name-suggestions\">\n                <li *ngFor=\"let n of nameSuggestions\" (click)=\"selectName(n)\">{{n}}</li>\n              </ul>\n              <p style=\"text-align:center;\">\n                <button class=\"btn btn-secondary\" (click)=\"suggestNames()\">Refresh</button>\n              </p>\n            </div>\n            <p>\n              <small>\n                Name suggestions powered by <a href=\"https://donjon.bin.sh/fantasy/name/\" target=\"_blank\">donjon</a>\n              </small>\n            </p>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/name-selection/name-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__name_service__ = __webpack_require__("../../../../../src/app/name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NameSelectionComponent = (function () {
    function NameSelectionComponent(nameService) {
        this.nameService = nameService;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.nameSuggestionsLoading = false;
    }
    NameSelectionComponent.prototype.suggestNames = function () {
        var _this = this;
        var race = this.character.race;
        var sex = this.sex;
        this.nameSuggestionsLoading = true;
        this.nameSuggestions = [];
        var namesPromise;
        if (race.naming.sexAgnostic) {
            namesPromise = this.nameService.getNames(race.naming.race);
        }
        else {
            namesPromise = this.nameService.getNames(race.naming.race, sex);
        }
        namesPromise.then(function (names) {
            _this.nameSuggestionsLoading = false;
            _this.nameSuggestions = names;
        }).catch(function (arg1, arg2, arg3) {
            _this.nameSuggestionsLoading = false;
            console.log('something went wrong...', arg1, arg2, arg3);
        });
    };
    NameSelectionComponent.prototype.selectSex = function (sex) {
        this.sex = sex;
        this.suggestNames();
    };
    NameSelectionComponent.prototype.selectName = function (n) {
        this.name = n;
    };
    NameSelectionComponent.prototype.lockInName = function () {
        this.character.setSex(this.sex);
        this.character.setName(this.name);
        this.onComplete.emit(true);
    };
    return NameSelectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__character__["a" /* Character */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__character__["a" /* Character */]) === "function" && _a || Object)
], NameSelectionComponent.prototype, "character", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _b || Object)
], NameSelectionComponent.prototype, "onComplete", void 0);
NameSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'name-selection',
        template: __webpack_require__("../../../../../src/app/name-selection/name-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/name-selection/name-selection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__name_service__["a" /* NameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__name_service__["a" /* NameService */]) === "function" && _c || Object])
], NameSelectionComponent);

var _a, _b, _c;
//# sourceMappingURL=name-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/name.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var urlTemplate = "https://cors-anywhere.herokuapp.com/https://donjon.bin.sh/name/rpc.cgi?type=#SETTINGS#&n=10";
var NameService = (function () {
    function NameService(http) {
        this.http = http;
    }
    NameService.prototype.getNames = function (race, sex) {
        var settings = sex ? race + '+' + sex : race;
        var url = urlTemplate.replace('#SETTINGS#', settings);
        return this.http.get(url, { responseType: 'text' }).toPromise()
            .then(function (resp) {
            return resp.split('\n').map(function (item) { return item.split(' ')[0]; });
        });
    };
    return NameService;
}());
NameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], NameService);

var _a;
//# sourceMappingURL=name.service.js.map

/***/ }),

/***/ "../../../../../src/app/race-details/race-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-details/race-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{race.name}}</h3>\n  <p>{{race.description}}</p>\n  <p><strong>Size: </strong>{{race.sizeFactors.description}} \n    On average you will be around {{getHeightDisplay(getAverageSize())}} tall and \n    weigh about {{getAverageSize().weight}} lbs.\n  </p>\n  <p><strong>Speed: </strong> Your base walking speed is {{race.speed}} ft.</p>\n  <p><strong>Ability Scores: </strong> {{getSelectedRaceAbilityScoreMods()}}</p>\n  <div>\n    <p *ngFor=\"let f of race.features\"><strong>{{f.name}}:</strong> {{f.text}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/race-details/race-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__race__ = __webpack_require__("../../../../../src/app/race.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__race_service__ = __webpack_require__("../../../../../src/app/race.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceDetailsComponent = (function () {
    function RaceDetailsComponent() {
    }
    RaceDetailsComponent.prototype.getAverageSize = function () {
        return __WEBPACK_IMPORTED_MODULE_2__race_service__["a" /* RaceService */].getAverageSize(this.race);
    };
    RaceDetailsComponent.prototype.getHeightDisplay = function (s) {
        return __WEBPACK_IMPORTED_MODULE_2__race_service__["a" /* RaceService */].getHeightDisplay(s);
    };
    RaceDetailsComponent.prototype.getSelectedRaceAbilityScoreMods = function () {
        var mods = __WEBPACK_IMPORTED_MODULE_2__race_service__["a" /* RaceService */].getAbilityModifiers(this.race);
        return mods.map(function (item) {
            var name = item.name.substr(0, 1).toUpperCase() + item.name.substr(1);
            var value = item.value > 0 ? '+' + item.value : item.value;
            return name + ' ' + value;
        }).join(', ');
    };
    return RaceDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__race__["b" /* Race */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__race__["b" /* Race */]) === "function" && _a || Object)
], RaceDetailsComponent.prototype, "race", void 0);
RaceDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'race-details',
        template: __webpack_require__("../../../../../src/app/race-details/race-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/race-details/race-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RaceDetailsComponent);

var _a;
//# sourceMappingURL=race-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/race-selection/race-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-selection/race-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Step 1: Select your race</h2>\n\n<div class=\"row\">\n  <div class=\"col-2 option-list\">\n    <ul>\n      <li *ngFor=\"let r of races\" (click)=\"selectRace(r)\" [ngClass]=\"{'selected': selectedRace && selectedRace.name === r.name}\">\n        {{r.name}}\n      </li>\n      <li *ngIf=\"selectedRace && !raceLocked\" style=\"margin-top:20px;\">\n        <button class=\"btn btn-primary\" (click)=\"lockInRace()\">Choose {{selectedRace.name}}</button>\n\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-10\">\n    <race-details [race]=\"selectedRace\"></race-details>\n  </div>\n</div>\n\n<!-->\n        <p>\n        <strong>Sex: </strong> <select [(ngModel)]=\"sex\" (change)=\"sexChanged()\">\n          <option value=\"Male\" [selected]=\"'Male' === sex\">Male</option>\n          <option value=\"Female\" [selected]=\"'Female' === sex\">Female</option>\n        </select>\n      </p>\n      <div>\n        <p><strong>Name:</strong> <input type=\"text\" [(ngModel)]=\"name\"/> <button (click)=\"suggestNames(selectedRace, sex)\" *ngIf=\"sex\">Suggest</button></p>\n        <p class=\"name-suggestions\" *ngIf=\"nameSuggestions && nameSuggestions.length\">\n          <span *ngFor=\"let n of nameSuggestions\" (click)=\"suggestedNameClick(n)\">{{n}}</span>\n        </p>\n        <p *ngIf=\"nameSuggestionsLoading\" >\n          <span class=\"loading\" style=\"margin:20px\"></span>\n        </p>\n        <p>\n                  </p>\n      </div>\n<-->"

/***/ }),

/***/ "../../../../../src/app/race-selection/race-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__race_service__ = __webpack_require__("../../../../../src/app/race.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_service__ = __webpack_require__("../../../../../src/app/name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character__ = __webpack_require__("../../../../../src/app/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RaceSelectionComponent = (function () {
    function RaceSelectionComponent(raceService, nameService) {
        this.raceService = raceService;
        this.nameService = nameService;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.races = __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */].races;
        this.selectedRace = this.races[0];
        this.raceLocked = false;
    }
    RaceSelectionComponent.prototype.selectRace = function (r) {
        this.selectedRace = r;
    };
    RaceSelectionComponent.prototype.lockInRace = function () {
        this.finalizeRaceSelection();
    };
    RaceSelectionComponent.prototype.finalizeRaceSelection = function () {
        this.onComplete.emit(new __WEBPACK_IMPORTED_MODULE_3__character__["a" /* Character */](this.selectedRace));
    };
    return RaceSelectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], RaceSelectionComponent.prototype, "onComplete", void 0);
RaceSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'race-selection',
        template: __webpack_require__("../../../../../src/app/race-selection/race-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/race-selection/race-selection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__name_service__["a" /* NameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__name_service__["a" /* NameService */]) === "function" && _c || Object])
], RaceSelectionComponent);

var _a, _b, _c;
//# sourceMappingURL=race-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/race.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dice_service__ = __webpack_require__("../../../../../src/app/dice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_races_index__ = __webpack_require__("../../../../../src/app/data/races/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceService = (function () {
    function RaceService() {
    }
    RaceService.getSize = function (race) {
        var baseHeight = race.sizeFactors.baseHeight;
        var heightMod = __WEBPACK_IMPORTED_MODULE_1__dice_service__["a" /* DiceService */].roll(race.sizeFactors.heightModifier).total;
        var baseWeight = race.sizeFactors.baseWeight;
        var weightMod = __WEBPACK_IMPORTED_MODULE_1__dice_service__["a" /* DiceService */].roll(race.sizeFactors.weightModifier).total;
        return {
            category: race.sizeFactors.category,
            description: race.sizeFactors.description,
            height: baseHeight + heightMod,
            weight: baseWeight + (heightMod * weightMod)
        };
    };
    RaceService.getAverageSize = function (race) {
        var size = race.sizeFactors;
        var baseHeight = size.baseHeight;
        var heightDieAverage = __WEBPACK_IMPORTED_MODULE_1__dice_service__["a" /* DiceService */].dieAverage(size.heightModifier.sides) * size.heightModifier.count;
        var baseWeight = race.sizeFactors.baseWeight;
        var weightDieAverage = __WEBPACK_IMPORTED_MODULE_1__dice_service__["a" /* DiceService */].dieAverage(size.weightModifier.sides) * size.weightModifier.count;
        return {
            category: race.sizeFactors.category,
            description: race.sizeFactors.description,
            height: baseHeight + Math.floor(heightDieAverage),
            weight: baseWeight + Math.floor(heightDieAverage * weightDieAverage)
        };
    };
    RaceService.getHeightDisplay = function (height) {
        if (typeof height === 'object') {
            height = height.height;
        }
        var ft = Math.floor(height / 12);
        var inches = height % 12;
        return ft + "'" + inches + '"';
    };
    RaceService.getAbilityModifiers = function (race) {
        var abilities = race.abilityScores;
        var names = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        var bonuses = [];
        for (var i = 0; i < names.length; i += 1) {
            var current = abilities[names[i]];
            if (current !== 0) {
                bonuses.push({ name: names[i], value: current });
            }
        }
        var sorted = bonuses.sort(function (a, b) {
            if (a.value < b.value) {
                return -1;
            }
            else if (a.value == b.value) {
                return 0;
            }
            return 1;
        });
        return bonuses[0] === sorted[0] && names.length === sorted.length ? sorted : sorted.reverse();
    };
    return RaceService;
}());
RaceService.races = __WEBPACK_IMPORTED_MODULE_2__data_races_index__["a" /* races */];
RaceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RaceService);

//# sourceMappingURL=race.service.js.map

/***/ }),

/***/ "../../../../../src/app/race.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkvision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Race; });
var darkvision = 'You have darkvision (You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t dicern color in darkness, only shades of gray).';
;
var Race = (function () {
    function Race() {
    }
    return Race;
}());

//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../../src/app/skill.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skills; });
var Skills = {
    athletics: { id: 0, name: 'Athletics', abilityScore: 'strength' },
    acrobatics: { id: 1, name: 'Acrobatics', abilityScore: 'dexterity' },
    sleightOfHand: { id: 2, name: 'Sleight of Hand', abilityScore: 'dexterity' },
    stealth: { id: 3, name: 'stealth', abilityScore: 'dexterity' },
    arcana: { id: 4, name: 'Arcana', abilityScore: 'intelligence' },
    history: { id: 5, name: 'History', abilityScore: 'intelligence' },
    investigation: { id: 6, name: 'Investigation', abilityScore: 'intelligence' },
    nature: { id: 7, name: 'Nature', abilityScore: 'intelligence' },
    religion: { id: 8, name: 'Religion', abilityScore: 'intelligence' },
    animalHandling: { id: 9, name: 'Animal Handling', abilityScore: 'wisdom' },
    insight: { id: 10, name: 'Insight', abilityScore: 'wisdom' },
    medicine: { id: 11, name: 'Medicine', abilityScore: 'wisdom' },
    perception: { id: 12, name: 'Perception', abilityScore: 'wisdom' },
    survival: { id: 13, name: 'Survival', abilityScore: 'wisdom' },
    deception: { id: 14, name: 'Deception', abilityScore: 'charisma' },
    intimidation: { id: 15, name: 'Intimidation', abilityScore: 'charisma' },
    performance: { id: 16, name: 'Performance', abilityScore: 'charisma' },
    persuasion: { id: 17, name: 'Persuasion', abilityScore: 'charisma' }
};
//# sourceMappingURL=skill.enum.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map