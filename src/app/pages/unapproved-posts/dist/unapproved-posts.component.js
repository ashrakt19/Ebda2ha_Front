"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnapprovedPostsComponent = void 0;
var core_1 = require("@angular/core");
var add_post_component_1 = require("../add-post/add-post.component");
var comment_component_1 = require("../comment/comment.component");
var UnapprovedPostsComponent = /** @class */ (function () {
    function UnapprovedPostsComponent(router, toastr, dialog, toastar, postService, userService, commentService, _Activatedroute) {
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.toastar = toastar;
        this.postService = postService;
        this.userService = userService;
        this.commentService = commentService;
        this._Activatedroute = _Activatedroute;
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: 100
        };
        this.postloaded = false;
        this.summaries = [];
    }
    UnapprovedPostsComponent.prototype.approve = function (_id) {
        var _this = this;
        // debugger
        this.postService.approvPost(_id).subscribe(function (res) {
            _this.toastar.success("approved");
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log('ssssssssssssssssssss' + this.post);
    };
    UnapprovedPostsComponent.prototype.ngOnInit = function () {
        this.getposts();
        this.getCategory();
        this._id = this._Activatedroute.snapshot.paramMap.get("_id");
    };
    UnapprovedPostsComponent.prototype.openAdd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_post_component_1.AddPostComponent, {
            width: '650px',
            minHeight: '200px',
            maxHeight: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getposts();
        });
    };
    UnapprovedPostsComponent.prototype.openAddComment = function () {
        var dialogRef = this.dialog.open(comment_component_1.CommentComponent, {
            width: '650px',
            minHeight: '310px',
            maxHeight: '900px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UnapprovedPostsComponent.prototype.getposts = function () {
        var _this = this;
        this.postService.getAllUnapprovedPost().subscribe(function (res) {
            _this.postloaded = true;
            console.log(res);
            _this.posts = res.posts;
            _this._id = res.id;
        }, function (err) {
            console.log(err);
        });
    };
    UnapprovedPostsComponent.prototype.onPageChange = function (event) {
        this.config.currentPage = event;
        this.getposts();
    };
    UnapprovedPostsComponent.prototype.search = function (value) {
        this.onSearch(value);
    };
    UnapprovedPostsComponent.prototype.onSearch = function (key) {
        var _this = this;
        this.postService.search(key).subscribe(function (res) {
            // console.log(this.posts)
            _this.posts = res.posts;
        });
    };
    UnapprovedPostsComponent.prototype.getCategory = function () {
        var _this = this;
        this.postService.getAllCategory().subscribe(function (res) {
            _this.summaries = res.categories;
        }, function (err) {
            console.log(err);
        });
    };
    UnapprovedPostsComponent.prototype.filter = function (categoryId) {
        var _this = this;
        if (categoryId !== "0") {
            this.postService.filter(categoryId).subscribe(function (res) {
                _this.posts = res.posts;
                // console.log(this.posts)
            });
        }
    };
    UnapprovedPostsComponent.prototype.DenyPost = function (_id) {
        var _this = this;
        this.userService.refusePost(_id).subscribe(function (res) {
            console.log(res);
            _this.toastr.success('your post deleted successfully');
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    UnapprovedPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-unapproved-posts',
            templateUrl: './unapproved-posts.component.html',
            styleUrls: ['./unapproved-posts.component.css']
        })
    ], UnapprovedPostsComponent);
    return UnapprovedPostsComponent;
}());
exports.UnapprovedPostsComponent = UnapprovedPostsComponent;
