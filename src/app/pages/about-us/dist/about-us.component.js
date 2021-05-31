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
var forms_1 = require("@angular/forms");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(formBuilder, aboutusService, toastr) {
        this.formBuilder = formBuilder;
        this.aboutusService = aboutusService;
        this.toastr = toastr;
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
        this.contactFrom = this.formBuilder.group({
            email: ['', [forms_1.Validators.email, forms_1.Validators.required]],
            name: [''],
            phone: ['', [forms_1.Validators.pattern("(02)[0-9]{9}"), forms_1.Validators.required]],
            message: ['', [forms_1.Validators.required]]
        });
    };
    Object.defineProperty(AboutUsComponent.prototype, "myForm", {
        get: function () {
            return this.contactFrom.controls;
        },
        enumerable: false,
        configurable: true
    });
    AboutUsComponent.prototype.onsubmit = function () {
        var _this = this;
        this.aboutusService.sendContactMail(this.contactFrom.value)
            .subscribe(function (res) {
            console.log(res);
            _this.toastr.success('Your Feedback Sent Successfully!');
            location.reload(true);
        }, function (err) {
            _this.toastr.error(err);
        });
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
