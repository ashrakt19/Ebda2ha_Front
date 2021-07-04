"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(formBuilder, userService, commentService, toastr) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.commentService = commentService;
        this.toastr = toastr;
        this.postloaded = false;
        this.user = this.userService.currentUserValue;
        this.userId = this.user.idd;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.commentForm = this.formBuilder.group({
            content: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]]
        });
    };
    CommentComponent.prototype.AddComment = function () {
        var _this = this;
        this.commentService.createcomment(this.commentForm.value, this.postId).subscribe(function (res) {
            console.log('created');
        }, function (err) {
            _this.toastr.error(err);
        });
        console.log(this.commentForm.value);
        console.log(this.postId);
        console.log(this.userId);
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        })
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
