"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyPostsComponent = void 0;
var core_1 = require("@angular/core");
var add_post_component_1 = require("../add-post/add-post.component");
var comment_component_1 = require("../comment/comment.component");
var MyPostsComponent = /** @class */ (function () {
    function MyPostsComponent(dialog, postService, userService) {
        this.dialog = dialog;
        this.postService = postService;
        this.userService = userService;
    }
    MyPostsComponent.prototype.ngOnInit = function () {
        this.listMyPosts();
    };
    MyPostsComponent.prototype.openAdd = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_post_component_1.AddPostComponent, {
            width: '650px',
            minHeight: '200px',
            maxHeight: '700px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.listMyPosts();
        });
    };
    MyPostsComponent.prototype.openAddComment = function () {
        var dialogRef = this.dialog.open(comment_component_1.CommentComponent, {
            width: '650px',
            minHeight: '310px',
            maxHeight: '900px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    MyPostsComponent.prototype.listMyPosts = function () {
        var _this = this;
        this.userService.myProfile().subscribe(function (res) {
            _this.posts = res.posts;
            console.log(_this.posts);
        });
    };
    MyPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-my-posts',
            templateUrl: './my-posts.component.html',
            styleUrls: ['./my-posts.component.css']
        })
    ], MyPostsComponent);
    return MyPostsComponent;
}());
exports.MyPostsComponent = MyPostsComponent;
