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

module.exports = "<h2>Ability Score Selection</h2>\n<p>\n  Select your ability scores:\n</p>\n<table class=\"table\">\n  <tr>\n    <th>Ability</th>\n    <th>Base</th>\n    <th>Racial</th>\n    <th>Total</th>\n    <th>Bonus</th>\n  </tr>\n  <tr *ngFor=\"let ability of abilityScoreNames\">\n    <td>{{ability.substr(0,1).toUpperCase() + ability.substr(1)}}</td>\n    <td>\n      <select [(ngModel)]=\"selectedScores[ability]\" (change)=\"selectedScoreChanged(ability)\">\n        <option [value]=\"0\"></option>\n        <option [value]=\"selectedScores[ability]\" *ngIf=\"selectedScores[ability] && selectedScores[ability] !== 'undefined'\">{{selectedScores[ability]}}</option>\n        <option *ngFor=\"let score of filterAvailableScores()\" [value]=\"score\" [selected]=\"score === selectedScores[ability]\">{{score}}</option>\n      </select>\n    </td>\n    <td>{{character.race.abilityScores[ability]}}</td>\n    <td>{{character.race.abilityScores[ability] + selectedScores[ability]}}</td>\n    <td>{{getAbilityBonus(character.race.abilityScores[ability] + selectedScores[ability])}}</td>\n  </tr>\n</table>\n<button *ngIf=\"areAllAbilitiesSelected()\" (click)=\"submitAbilityScores()\">Lock 'em in! Let's go!</button>\n"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n<div>\n   <race-selection (onComplete)=\"handleRaceSelection($event)\" *ngIf=\"step==1\"></race-selection>\n   <ability-score-selection (onComplete)=\"handleAbilitySelection()\" [character]=\"character\" *ngIf=\"step==2\"></ability-score-selection>\n</div>\n<footer style=\"margin-bottom:60px;\"></footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.step = 1;
    }
    AppComponent.prototype.handleRaceSelection = function (character) {
        this.character = character;
        this.step++;
    };
    AppComponent.prototype.handleAbilitySelection = function () {
        console.log(this.character);
        this.step++;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
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
            __WEBPACK_IMPORTED_MODULE_9__ability_score_selection_ability_score_selection_component__["a" /* AbilityScoreSelectionComponent */]
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

/***/ "../../../../../src/app/character.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race_service__ = __webpack_require__("../../../../../src/app/race.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Character; });

var Character = (function () {
    function Character(race, name, sex) {
        this.race = race;
        this.name = name;
        this.sex = sex;
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
    }
    Character.getAbilityModifier = function (score) {
        return Math.floor(score / 2 - 5);
    };
    Character.prototype.getAbilityModifier = function (scoreName) {
        var theScore = this.abilityScores[scoreName];
        return Math.floor(theScore / 2 - 5);
    };
    return Character;
}());

//# sourceMappingURL=character.js.map

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
            return resp.split('\n');
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

/***/ "../../../../../src/app/race-selection/race-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.name-suggestions span {\r\n    display: inline-block;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.name-suggestions span:hover {\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/race-selection/race-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Race Selection</h2>\n<div>\n  <p>\n    choose your race:\n\n    <select [(ngModel)]=\"selected\" (change)=\"selectedChanged()\">\n      <option *ngFor=\"let r of races\" [value]=\"r.name\" [selected]=\"r.name === selected\">{{r.name}}</option>\n    </select>\n  </p>\n</div>\n<div *ngIf=\"selected\">\n  <h3>{{selectedRace.name}}</h3>\n  <p>\n    <strong>Sex: </strong> <select [(ngModel)]=\"sex\" (change)=\"sexChanged()\">\n      <option value=\"Male\" [selected]=\"'Male' === sex\">Male</option>\n      <option value=\"Female\" [selected]=\"'Female' === sex\">Female</option>\n    </select>\n  </p>\n  <div>\n    <p><strong>Name:</strong> <input type=\"text\" [(ngModel)]=\"name\"/> <button (click)=\"suggestNames(selectedRace, sex)\" *ngIf=\"sex\">Suggest</button></p>\n    <p class=\"name-suggestions\" *ngIf=\"nameSuggestions && nameSuggestions.length\">\n      <span *ngFor=\"let n of nameSuggestions\" (click)=\"suggestedNameClick(n)\">{{n}}</span>\n    </p>\n    <p *ngIf=\"nameSuggestionsLoading\">\n      <img src=\"./assets/Gear.gif\" style=\"width: 50px;\"/>\n    </p>\n    <p>\n      <button *ngIf=\"readyForSubmit()\" (click)=\"finalizeRaceSelection()\">I want to be a {{selectedRace.name}}! Onward!</button>\n    </p>\n  </div>\n  <h4>Racial Features</h4>\n  <p>{{selectedRace.description}}</p>\n  <p><strong>Size: </strong>{{selectedRace.sizeFactors.description}} \n    On average you will be around {{getHeightDisplay(getAverageSize())}} tall and \n    weigh about {{getAverageSize().weight}} lbs.\n  </p>\n  <p><strong>Speed: </strong> Your base walking speed is {{selectedRace.speed}} ft.</p>\n  <p><strong>Ability Scores: </strong> {{getSelectedRaceAbilityScoreMods()}}</p>\n  <div>\n    <p *ngFor=\"let f of selectedRace.features\"><strong>{{f.name}}:</strong> {{f.text}}</p>\n  </div>\n\n\n"

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
        this.nameSuggestionsLoading = false;
        this.races = __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */].races;
    }
    RaceSelectionComponent.prototype.selectedChanged = function () {
        var _this = this;
        this.selectedRace = this.races.filter(function (r) { return r.name === _this.selected; })[0];
        this.nameSuggestions = undefined;
    };
    RaceSelectionComponent.prototype.sexChanged = function () {
        this.nameSuggestions = undefined;
    };
    RaceSelectionComponent.prototype.suggestedNameClick = function (name) {
        this.name = name;
    };
    RaceSelectionComponent.prototype.getAverageSize = function () {
        return __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */].getAverageSize(this.selectedRace);
    };
    RaceSelectionComponent.prototype.getHeightDisplay = function (s) {
        return __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */].getHeightDisplay(s);
    };
    RaceSelectionComponent.prototype.suggestNames = function (race, sex) {
        var _this = this;
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
    RaceSelectionComponent.prototype.getSelectedRaceAbilityScoreMods = function () {
        var mods = __WEBPACK_IMPORTED_MODULE_1__race_service__["a" /* RaceService */].getAbilityModifiers(this.selectedRace);
        return mods.map(function (item) {
            var name = item.name.substr(0, 1).toUpperCase() + item.name.substr(1);
            var value = item.value > 0 ? '+' + item.value : item.value;
            return name + ' ' + value;
        }).join(', ');
    };
    RaceSelectionComponent.prototype.readyForSubmit = function () {
        return this.selectedRace && this.sex && this.name;
    };
    RaceSelectionComponent.prototype.finalizeRaceSelection = function () {
        this.onComplete.emit(new __WEBPACK_IMPORTED_MODULE_3__character__["a" /* Character */](this.selectedRace, this.name, this.sex));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__races_index__ = __webpack_require__("../../../../../src/app/races/index.ts");
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
RaceService.races = [
    __WEBPACK_IMPORTED_MODULE_2__races_index__["a" /* dwarf */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["b" /* elf */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["c" /* halfling */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["d" /* human */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["e" /* dragonborn */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["f" /* gnome */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["g" /* halfElf */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["h" /* halfOrc */],
    __WEBPACK_IMPORTED_MODULE_2__races_index__["i" /* tiefling */]
];
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
var darkvision = 'You have darkvision (You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t dicern color in darkness, only shades of gray).';
;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../../src/app/races/dragonborn.ts":
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

/***/ "../../../../../src/app/races/dwarf.ts":
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

/***/ "../../../../../src/app/races/elf.ts":
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

/***/ "../../../../../src/app/races/gnome.ts":
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

/***/ "../../../../../src/app/races/halfElf.ts":
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

/***/ "../../../../../src/app/races/halfOrc.ts":
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

/***/ "../../../../../src/app/races/halfling.ts":
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

/***/ "../../../../../src/app/races/human.ts":
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

/***/ "../../../../../src/app/races/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragonborn__ = __webpack_require__("../../../../../src/app/races/dragonborn.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__dragonborn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dwarf__ = __webpack_require__("../../../../../src/app/races/dwarf.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dwarf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elf__ = __webpack_require__("../../../../../src/app/races/elf.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__elf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gnome__ = __webpack_require__("../../../../../src/app/races/gnome.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__gnome__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__halfElf__ = __webpack_require__("../../../../../src/app/races/halfElf.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__halfElf__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__halfling__ = __webpack_require__("../../../../../src/app/races/halfling.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__halfling__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__halfOrc__ = __webpack_require__("../../../../../src/app/races/halfOrc.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__halfOrc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__human__ = __webpack_require__("../../../../../src/app/races/human.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__human__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tiefling__ = __webpack_require__("../../../../../src/app/races/tiefling.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__tiefling__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/races/tiefling.ts":
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