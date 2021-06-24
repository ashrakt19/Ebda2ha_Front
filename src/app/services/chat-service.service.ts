import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private url = 'http://localhost:3000'; //your server local path 

  constructor ( private http: HttpClient) { 
    this.socket = io(this.url);
  }

  // joinRoom(data): void {
  //   this.socket.emit('join', data);
  // }

  createMessage(body: string,receiverId: string){
    // debugger
   return this.http.post(this.url+ '/message/'+receiverId+'/message',{body})
  }

  getAllUsers(){
    return this.http.get<any>(this.url+ '/profile/getUsers')

  }
  
  getmessage(receiverId){

    return this.http.get(this.url+'/message/'+receiverId)
    // return this.socket.fromEvent("chat_message")
    //         .map( data => data.body );
    }
    //return this.socket.on('chat_message', (body) => {
      // 
      
      //  Observable.create((observer) => {
        // observer.next(body);
      // });
    // });
  }

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
