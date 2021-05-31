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
    function AllPostsComponent(dialog, postService) {
        this.dialog = dialog;
        this.postService = postService;
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: 100
        };
    }
    AllPostsComponent.prototype.ngOnInit = function () {
        this.getposts();
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
            // debugger
            console.log(res);
            _this.posts = res.posts;
        });
    };
    AllPostsComponent.prototype.onPageChange = function (event) {
        this.config.currentPage = event;
        this.getposts();
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
