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
var forms_1 = require("@angular/forms");
var Must_Match_1 = require("src/app/_helpers/Must Match");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, toastr, formBuilder) {
        this.userService = userService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.user = this.userService.currentUserValue;
        this.title = 'fileUpload';
        this.pic = null;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.onGetMyProfile();
        this.clearForm();
    };
    UserProfileComponent.prototype.onGetMyProfile = function () {
        var _this = this;
        this.userService.myProfile().subscribe(function (res) {
            _this.user.firstName = res.firstName;
            _this.user.lastName = res.lastName;
            _this.user.pic = res.pic;
            _this.user.email = res.email;
            _this.user.DOB = res.DOB;
            _this.user.job = res.job;
            _this.user.bio = res.bio;
            _this.user.education = res.education;
            _this.user.summary = res.summary;
            _this.user.facebook = res.facebook;
            _this.user.gitHub = res.gitHub;
            _this.user.linkedIn = res.linkedIn;
            _this.user.address = res.address;
            _this.user.city = res.city;
            _this.user.country = res.country;
        }, function (err) {
            _this.toastr.error(err);
        });
        console.log(this.user);
    };
    UserProfileComponent.prototype.onEditProfile = function () {
        var _this = this;
        this.userService.updateProfile(this.user).subscribe(function (res) {
            _this.toastr.success('You Update Your Profile Sucessfully');
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    UserProfileComponent.prototype.selectImage = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.pic = file;
            this.userService.createAvatar(this.pic).subscribe(function (res) {
                _this.toastr.success('you update your profile picture');
            }, function (err) {
                _this.toastr.error(err);
                console.log(err);
            });
        }
        console.log(this.pic);
    };
    UserProfileComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.userService.changePass(this.changePasswordForm.value)
            .subscribe(function (res) {
            _this.toastr.success('You Change Your Password Successfully');
            _this.clearForm();
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    UserProfileComponent.prototype.clearForm = function () {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', [forms_1.Validators.required]],
            newPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, {
            validator: Must_Match_1.MustMatch('newPassword', 'confirmPassword')
        });
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
