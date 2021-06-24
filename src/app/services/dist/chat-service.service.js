"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChatService = void 0;
var core_1 = require("@angular/core");
var socket_io_client_1 = require("socket.io-client");
var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.url = 'http://localhost:3000'; //your server local path 
        this.socket = socket_io_client_1.io(this.url);
    }
    // joinRoom(data): void {
    //   this.socket.emit('join', data);
    // }
    ChatService.prototype.createMessage = function (body, receiverId) {
        // debugger
        return this.http.post(this.url + '/message/' + receiverId + '/message', { body: body });
    };
    ChatService.prototype.getAllUsers = function () {
        return this.http.get(this.url + '/profile/getUsers');
    };
    ChatService.prototype.getmessage = function (receiverId) {
        return this.http.get(this.url + '/message/' + receiverId);
        // return this.socket.fromEvent("chat_message")
        //         .map( data => data.body );
    };
    ChatService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//   getMessage(): Observable<any> {
//    return new Observable<{user: string, message: string}>(observer => {
//      this.socket.on('new message', (data) => {
//        observer.next(data);
//      });
//      return () => {
//        this.socket.disconnect();
//      }
//    });
//  }
