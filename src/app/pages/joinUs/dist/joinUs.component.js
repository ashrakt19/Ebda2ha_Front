"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JoinUsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var Must_Match_1 = require("../../_helpers/Must Match");
var JoinUsComponent = /** @class */ (function () {
    function JoinUsComponent(formBuilder, route, router, auth, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.showValidText = false;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.auth.currentUserValue) {
            this.router.navigate(['/home']);
        }
    }
    //toggleclass for animation login & sign up
    JoinUsComponent.prototype.toggleClass = function () {
        this.activeClass = !this.activeClass;
    };
    JoinUsComponent.prototype.ngOnDestroy = function () {
    };
    JoinUsComponent.prototype.ngOnInit = function () {
        //login form
        this.loginForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //register form
        this.registerFrom = this.formBuilder.group({
            firstName: ['', [forms_1.Validators.required]],
            lastName: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            role: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            confirm: ['', forms_1.Validators.required]
        }, {
            validator: Must_Match_1.MustMatch('password', 'confirm')
        });
    };
    Object.defineProperty(JoinUsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JoinUsComponent.prototype, "myForm", {
        get: function () {
            return this.registerFrom.controls;
        },
        enumerable: false,
        configurable: true
    });
    JoinUsComponent.prototype.onlogin = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.auth.login(this.f.email.value, this.f.password.value)
            .pipe(operators_1.first())
            .subscribe(function (res) {
            _this.router.navigate(['/user-profile']);
            _this.toastr.success('You Logged In Successfully Hope You Doing Well with us!');
            console.log(res);
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    JoinUsComponent.prototype.onsignUp = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerFrom.invalid) {
            return;
        }
        this.loading = true;
        this.auth.SignUp(this.registerFrom.value)
            .pipe(operators_1.first())
            .subscribe(function (res) {
            _this.showValidText = true;
            _this.toastr.success('Please Check Your Mail To Activate Your Account', 'You Signed Up Successfully!');
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    JoinUsComponent.prototype.onVerify = function () {
        var _this = this;
        this.auth.verifyEmail(this.code).subscribe(function (res) {
            _this.router.navigate(['/user-profile']);
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    JoinUsComponent.prototype.onResetPassword = function () {
        var _this = this;
        this.auth.getResetPass(this.f.email.value).subscribe(function (res) {
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    JoinUsComponent = __decorate([
        core_1.Component({
            selector: 'app-joinus',
            templateUrl: './joinUs.component.html',
            styleUrls: ['./joinUs.component.scss']
        })
    ], JoinUsComponent);
    return JoinUsComponent;
}());
exports.JoinUsComponent = JoinUsComponent;
