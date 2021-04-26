"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileService = void 0;
var core_1 = require("@angular/core");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.SERVER_URL = 'http://localhost:3000';
    }
    ProfileService.prototype.buildProfile = function (profile) {
        return this.http.post(this.SERVER_URL + '/profile', profile);
    };
    ProfileService.prototype.getMyProfile = function () {
        return this.http.get(this.SERVER_URL + '/profile');
    };
    ProfileService.prototype.getProfile = function (Id) {
        return this.http.get(this.SERVER_URL + '/profile' + Id);
    };
    ProfileService.prototype.newProfile = function (profile) {
        return this.http.post(this.SERVER_URL + '/profile/', { profile: profile });
    };
    ProfileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
