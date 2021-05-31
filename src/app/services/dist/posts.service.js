"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.SERVER_URL = 'http://localhost:3000';
        this.currentPostSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentPost')));
        this.currentPost = this.currentPostSubject.asObservable();
    }
    Object.defineProperty(PostsService.prototype, "currentPostValue", {
        get: function () {
            return this.currentPostSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    //done
    PostsService.prototype.createPost = function (post) {
        return this.http.post(this.SERVER_URL + '/post/', post);
    };
    // done
    PostsService.prototype.getAllPost = function (config) {
        var qs = '';
        qs += (config.currentPage ? '?page=' + config.currentPage : '');
        qs += (config.itemsPerPage ? '&size=' + config.itemsPerPage : '');
        return this.http.get(this.SERVER_URL + '/post' + qs);
    };
    PostsService.prototype.updatePost = function (id, post) {
        return this.http.put(this.SERVER_URL + '/posts/:postId', { id: id, post: post });
    };
    PostsService.prototype.findPost = function (postId) {
        return this.http.get(this.SERVER_URL + '/post/' + postId);
    };
    PostsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
