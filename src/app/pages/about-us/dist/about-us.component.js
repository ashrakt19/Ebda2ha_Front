"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutUsComponent = void 0;
var core_1 = require("@angular/core");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.newNum = 0;
        this.newNum2 = 0;
        this.options = {
            useEasing: false,
            duration: 0.5
        };
    }
    AboutUsComponent.prototype.update = function () {
        if (this.newNum == 200) {
        }
        else
            this.newNum += 10;
    };
    AboutUsComponent.prototype.update1 = function () {
        if (this.newNum2 == 150) {
        }
        else
            this.newNum2 += 10;
    };
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.css']
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
