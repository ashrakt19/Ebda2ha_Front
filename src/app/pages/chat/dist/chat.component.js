"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatComponent = void 0;
var core_1 = require("@angular/core");
var socket_io_client_1 = require("socket.io-client");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.url = 'http://localhost:3000';
        this.userme = this.userService.currentUserValue;
        this.socket = socket_io_client_1.io(this.url);
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('chat_message', function (res) {
            _this.messageArray = res.conversations;
            _this.getMessage();
        });
        this.getusers();
    };
    ChatComponent.prototype.getusers = function () {
        var _this = this;
        this.chatService.getAllUsers().subscribe(function (res) {
            _this.userList = res.users;
            console.log(_this.userList);
        }, function (err) {
            console.log(err);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.createMessage(this.body, this.selectedUser._id).subscribe(function (res) {
            _this.socket.emit('chat_message', _this.body);
            debugger;
            _this.messageArray.notes.push(_this.body);
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ChatComponent.prototype.getMessage = function () {
        var _this = this;
        this.socket.on('chat_message', this.body);
        this.chatService.getmessage(this.selectedUser._id).subscribe(function (res) {
            _this.messageArray = res.conversations;
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ChatComponent.prototype.selectUserHandler = function (username, receiverId) {
        this.selectedUser = this.userList.find(function (user) { return user.firstName === username; });
        console.log(this.selectedUser);
        this.receiverId = this.userList.find(function (user) { return user._id === receiverId; });
        this.getMessage();
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css']
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
