"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var sidebar_component_1 = require("../sidebar/sidebar.component");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, authservice, userService) {
        this.element = element;
        this.router = router;
        this.authservice = authservice;
        this.userService = userService;
        this.isCollapsed = true;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        if (this.authservice.currentUserValue) {
            this.onuserProfile();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'home';
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authservice.logout();
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.onuserProfile = function () {
        var _this = this;
        this.userService.myProfile().subscribe(function (res) {
            //     firstName: this.currentUserValue.firstName,
            //     lastName: this.currentUserValue.lastName,
            //     email: this.currentUserValue.email,
            //     pic: this.currentUserValue.pic,
            //     role: this.currentUserValue.role,
            //     gender: this.currentUserValue.gender,
            //     DOB: this.currentUserValue.DOB,
            //     bio: this.currentUserValue.bio,
            //     summary: this.currentUserValue.summary,
            //     // message: "you fetched the user successfully",
            // user : {
            //  this.user.firstName = res.firstName,
            //   res.lastName,
            //   res.pic,
            //   res.role,
            //   res.email
            // }
            _this.firstName = res.firstName;
            _this.lastName = res.lastName;
            _this.img = res.pic;
        }, function (err) {
            return console.log({
                message: "an error occured"
            });
        });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
