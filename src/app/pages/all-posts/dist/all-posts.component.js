"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllPostsComponent = void 0;
var core_1 = require("@angular/core");
var add_post_component_1 = require("../add-post/add-post.component");
var comment_component_1 = require("../comment/comment.component");
var AllPostsComponent = /** @class */ (function () {
    function AllPostsComponent(dialog, postService, commentService) {
        this.dialog = dialog;
        this.postService = postService;
        this.commentService = commentService;
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: 100
        };
        this.postloaded = false;
        this.summaries = [];
    }
    AllPostsComponent.prototype.ngOnInit = function () {
        this.getposts();
        this.getCategory();
    };
    AllPostsComponent.prototype.openAdd = function () {
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
    AllPostsComponent.prototype.openAddComment = function () {
        var dialogRef = this.dialog.open(comment_component_1.CommentComponent, {
            width: '650px',
            minHeight: '310px',
            maxHeight: '900px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AllPostsComponent.prototype.getposts = function () {
        var _this = this;
        this.postService.getAllPost(this.config).subscribe(function (res) {
            _this.postloaded = true;
            // console.log(res)
            _this.posts = res.posts;
        });
    };
    AllPostsComponent.prototype.onPageChange = function (event) {
        this.config.currentPage = event;
        this.getposts();
    };
    AllPostsComponent.prototype.search = function (value) {
        this.onSearch(value);
    };
    AllPostsComponent.prototype.onSearch = function (key) {
        var _this = this;
        this.postService.search(key).subscribe(function (res) {
            // console.log(this.posts)
            _this.posts = res.posts;
        });
    };
    AllPostsComponent.prototype.getCategory = function () {
        var _this = this;
        this.postService.getAllCategory().subscribe(function (res) {
            _this.summaries = res.categories;
        }, function (err) {
            console.log(err);
        });
    };
    AllPostsComponent.prototype.filter = function (categoryId) {
        var _this = this;
        if (categoryId !== "0") {
            this.postService.filter(categoryId).subscribe(function (res) {
                _this.posts = res.posts;
                // console.log(this.posts)
            });
        }
    };
    AllPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-posts',
            templateUrl: './all-posts.component.html',
            styleUrls: ['./all-posts.component.css']
        })
    ], AllPostsComponent);
    return AllPostsComponent;
}());
exports.AllPostsComponent = AllPostsComponent;
