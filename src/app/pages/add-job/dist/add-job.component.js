"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddJobComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddJobComponent = /** @class */ (function () {
    function AddJobComponent(dialogRef, fb, http, JobService, toastr, router) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.http = http;
        this.JobService = JobService;
        this.toastr = toastr;
        this.router = router;
    }
    AddJobComponent.prototype.ngOnInit = function () {
        this.JobForm = this.fb.group({
            JobName: ['', [forms_1.Validators.required]],
            JobDescription: ['', [forms_1.Validators.required, forms_1.Validators.minLength(20)]],
            addressLine: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            phone: ['', [forms_1.Validators.required]],
            Salary: [''],
            facebookpage: [''],
            websitelink: ['']
        });
    };
    AddJobComponent.prototype.onSubmit = function () {
        var _this = this;
        this.JobService.createJob(this.JobForm.value).subscribe(function (res) {
            _this.toastr.success('post created');
            _this.JobForm.reset();
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    AddJobComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddJobComponent = __decorate([
        core_1.Component({
            selector: 'app-add-job',
            templateUrl: './add-job.component.html',
            styleUrls: ['./add-job.component.css']
        })
    ], AddJobComponent);
    return AddJobComponent;
}());
exports.AddJobComponent = AddJobComponent;
