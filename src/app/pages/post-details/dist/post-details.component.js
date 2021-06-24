"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostDetailsComponent = void 0;
var core_1 = require("@angular/core");
var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(router, toastr, postService, userService, _Activatedroute, _router) {
        this.router = router;
        this.toastr = toastr;
        this.postService = postService;
        this.userService = userService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.postloaded = false;
        this.user = this.userService.currentUserValue;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        this.postId = this._Activatedroute.snapshot.paramMap.get("postId");
        this.getPost();
    };
    PostDetailsComponent.prototype.getPost = function () {
        var _this = this;
        this.postService.findPost(this.postId).subscribe(function (res) {
            _this.post = res.post;
            _this.postloaded = true;
            console.log(_this.post);
        });
    };
    PostDetailsComponent.prototype.onEditPost = function () {
        var _this = this;
        this.postService.updatePost(this.post, this.post._id).subscribe(function (res) {
            _this.toastr.success('You Update Your Post Sucessfully');
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    PostDetailsComponent.prototype.onDeletePost = function () {
        var _this = this;
        this.postService.deletePost(this.post._id).subscribe(function (res) {
            _this.toastr.success('your post deleted successfully');
            _this.router.navigate(['/all-posts']);
        }, function (err) {
            _this.toastr.error(err);
        });
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-post-details',
            templateUrl: './post-details.component.html',
            styleUrls: ['./post-details.component.css']
        })
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
