import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})  
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.onGetMyProfile()
  }
  firstName
  lastName
  img
  email
  DOB
  job
  education
  bio
  title = 'fileUpload';
  images = null;
  id: string
  onGetMyProfile() {
    this.userService.myProfile().subscribe(res =>{
    this.firstName = res.firstName
    this.lastName = res.lastName
    this.img = res.pic
    this.email = res.email
    this.DOB = res.DOB
    this.job = res.job
    this.bio = res.bio
    this.education = res.education
},  err=> {
    return console.log({
        message: "an error occured"
    });
})}

onEditProfile() {
  this.userService.updateProfile(this.id).subscribe(res => {
  console.log("hi")
  }, err => {
    console.log(err)
    }
  )
}

selectImage(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.images = file;
  }
}

}
