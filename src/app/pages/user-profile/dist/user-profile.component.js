"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService) {
        this.userService = userService;
        this.title = 'fileUpload';
        this.images = null;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.onGetMyProfile();
    };
    UserProfileComponent.prototype.onGetMyProfile = function () {
        var _this = this;
        this.userService.myProfile().subscribe(function (res) {
            _this.firstName = res.firstName;
            _this.lastName = res.lastName;
            _this.img = res.pic;
            _this.email = res.email;
            _this.DOB = res.DOB;
            _this.job = res.job;
            _this.bio = res.bio;
            _this.education = res.education;
        }, function (err) {
            return console.log({
                message: "an error occured"
            });
        });
    };
    UserProfileComponent.prototype.onEditProfile = function () {
        this.userService.updateProfile(this.id).subscribe(function (res) {
            console.log("hi");
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.selectImage = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.images = file;
        }
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
