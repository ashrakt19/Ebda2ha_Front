import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from 'src/app/services/chat-service.service';
import { ViewChild } from '@angular/core';
import { UserList } from 'src/app/models/UserList';
import { UserService } from 'src/app/services/user.service';
import { Socket, io } from 'socket.io-client';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
  })
export class ChatComponent implements OnInit {

  private socket: any
  private url = 'http://localhost:3000';


  constructor(private chatService: ChatService, private userService: UserService) {
    this.socket = io(this.url);
  }

  userme: User = this.userService.currentUserValue
  userList: UserList[]

  ngOnInit(): void {
    this.socket.on('chat_message', res => {
      this.messageArray = res.conversations;
      this.getMessage();
    })
    this.getusers()
  }

  getusers() {
    this.chatService.getAllUsers().subscribe((res: any) => {
      this.userList = res.users
      console.log(this.userList)
    }, err => {
      console.log(err)
    })
  }

  body: string
  public selectedUser

  sendMessage() {
    this.chatService.createMessage(this.body, this.selectedUser._id).subscribe(res => {
      this.socket.emit('chat_message', this.body);
      // debugger
      //  this.messageArray.notes.push(this.body)
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  messageArray: any

  getMessage() {
    this.socket.on('chat_message', this.body);
    this.chatService.getmessage(this.selectedUser._id).subscribe((res: any) => {
      this.messageArray = res.conversations
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  user: any
  receiverId: any
  selectUserHandler(username: string, receiverId) {
    this.selectedUser = this.userList.find(user => user.firstName === username);
    console.log(this.selectedUser)
    this.receiverId = this.userList.find(user => user._id === receiverId);
    this.getMessage()
  }
}