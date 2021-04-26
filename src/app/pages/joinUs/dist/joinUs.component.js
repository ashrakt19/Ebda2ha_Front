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
    function JoinUsComponent(formBuilder, route, router, auth, userservice, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.userservice = userservice;
        this.alertService = alertService;
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
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //register form
        this.registerFrom = this.formBuilder.group({
            firstName: ['', [forms_1.Validators.required]],
            lastName: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            role: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
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
            .subscribe(function (data) {
            _this.router.navigate(['/user-profile']);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
        console.log(this.loginForm.value);
        console.log("logged success");
    };
    JoinUsComponent.prototype.onsignUp = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerFrom.invalid) {
            return;
        }
        this.loading = true;
        this.userservice.SignUp(this.registerFrom.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.registerFrom.valid;
            _this.showValidText = true;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        console.log(this.registerFrom.value);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFrom.value, null, 4));
    };
    JoinUsComponent.prototype.onVerify = function () {
        var _this = this;
        console.log(this.code, this.registerFrom.value.email);
        this.auth.verify(this.code, this.registerFrom.value.email).subscribe(function (res) {
            _this.router.navigate(['/user-profile']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
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
