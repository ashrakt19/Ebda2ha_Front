import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {


  constructor(private userservice: UserService, private _Activatedroute: ActivatedRoute) { }
   user: User = this.userservice.currentUserValue;;
   _id: string
  ngOnInit(): void { 
    this._id = this._Activatedroute.snapshot.paramMap.get("_id");

  this.getuser()
  }
  userId = this.userservice.currentUserValue.idd;

    getuser(){
      this.userservice.getUser(this._id).subscribe((res: any)=>{
        this.user = res.user
        console.log(this.user)
      },err=>{
        console.log(err)

      })
    }
}

