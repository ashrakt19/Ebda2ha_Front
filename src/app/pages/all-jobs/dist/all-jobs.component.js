"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllJobsComponent = void 0;
var core_1 = require("@angular/core");
var add_job_component_1 = require("../add-job/add-job.component");
var comment_component_1 = require("../comment/comment.component");
var AllJobsComponent = /** @class */ (function () {
    function AllJobsComponent(dialog, jobService, commentService) {
        this.dialog = dialog;
        this.jobService = jobService;
        this.commentService = commentService;
    }
    AllJobsComponent.prototype.ngOnInit = function () {
        this.getjobs();
    };
    AllJobsComponent.prototype.openAdd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_job_component_1.AddJobComponent, {
            width: '650px',
            minHeight: '200px',
            maxHeight: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getjobs();
        });
    };
    AllJobsComponent.prototype.openAddComment = function () {
        var dialogRef = this.dialog.open(comment_component_1.CommentComponent, {
            width: '650px',
            minHeight: '310px',
            maxHeight: '900px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AllJobsComponent.prototype.getjobs = function () {
        var _this = this;
        this.jobService.getAllJob().subscribe(function (res) {
            console.log(res);
            _this.jobs = res.alljob;
        });
    };
    AllJobsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-jobs',
            templateUrl: './all-jobs.component.html',
            styleUrls: ['./all-jobs.component.css']
        })
    ], AllJobsComponent);
    return AllJobsComponent;
}());
exports.AllJobsComponent = AllJobsComponent;
