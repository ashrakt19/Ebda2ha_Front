"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.SERVER_URL = "http://localhost:3000";
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.myProfile = function () {
        return this.http.get(this.SERVER_URL + '/profile');
    };
    UserService.prototype.updateProfile = function (id) {
        return this.http.put(this.SERVER_URL + '/profile/updateProfile', { id: id });
    };
    UserService.prototype.changePass = function (changepassword) {
        return this.http.put(this.SERVER_URL + '/profile/changePass', changepassword);
    };
    UserService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
