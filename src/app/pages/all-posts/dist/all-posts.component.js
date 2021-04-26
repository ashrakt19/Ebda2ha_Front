"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllPostsComponent = void 0;
var core_1 = require("@angular/core");
var AllPostsComponent = /** @class */ (function () {
    function AllPostsComponent() {
    }
    AllPostsComponent.prototype.ngOnInit = function () {
    };
    AllPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-posts',
            templateUrl: './all-posts.component.html',
            styleUrls: ['./all-posts.component.css']
        })
    ], AllPostsComponent);
    return AllPostsComponent;
}());
exports.AllPostsComponent = AllPostsComponent;
