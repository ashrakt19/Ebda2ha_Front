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
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.SERVER_URL = 'http://localhost:3000';
    }
    PostsService.prototype.createPost = function (post) {
        return this.http.post(this.SERVER_URL + '/post/', { post: post });
    };
    //   getposts(config: Config): Observable<Post[]> {
    //     let qs = ''
    //     qs += (config.currentPage ? '&pageNo=' + config.currentPage : '')
    //     qs += (config.itemsPerPage ? '&size=' + config.itemsPerPage : '')
    //     return this.http.get<Post[]>(this.SERVER_URL + '/post/?' + qs);
    //   }
    PostsService.prototype.getAllPost = function (Id) {
        return this.http.get(this.SERVER_URL + '/post/' + Id);
    };
    PostsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
