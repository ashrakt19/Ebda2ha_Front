import { Component, OnInit } from '@angular/core';
import { AdminList } from 'src/app/models/AdminList';
import { ChatService } from 'src/app/services/chat-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  constructor(private chatService: ChatService, private userservice: UserService) { }

  adminList: AdminList[]
  email: string;

  ngOnInit(): void {
    this.getAdmins()
  }

  makeadmin(){
    this.userservice.makeAdmin(this.email).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    
  }

  getAdmins() {
    this.chatService.getAllAdmins().subscribe((res: any) => {
      this.adminList = res.admins
      console.log(res);
      
    }, err => {
      console.log(err)
    })
  }
}
