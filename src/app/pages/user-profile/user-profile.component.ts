import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/_helpers/Must Match';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})  
export class UserProfileComponent implements OnInit {

ProfileForm: FormGroup;
  changePasswordForm: FormGroup;
  constructor(private userService: UserService, private toastr: ToastrService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.onGetMyProfile()
    this.clearForm()
    console.log(this.userService.currentUserValue)
  }
  user: User = this.userService.currentUserValue;
  userId = this.userService.currentUserValue.idd;
  pic = null;
  onGetMyProfile() {
    this.userService.myProfile().subscribe(res =>{
    this.user.firstName = res.firstName
    this.user.lastName = res.lastName
    this.user.pic = res.pic
    this.user.email = res.email
    this.user.DOB = res.DOB
    this.user.job = res.job
    this.user.bio = res.bio
    this.user.education = res.education
    this.user.summary = res.summary
    this.user.facebook = res.facebook
    this.user.gitHub= res.gitHub
    this.user.linkedIn = res.linkedIn
    this.user.address = res.address
    this.user.city = res.city
    this.user.country = res.country
    this.user.idd = res.idd
    // debugger
    console.log(this.user.idd)
},  err=> {
   this.toastr.error(err)
    
})
}

onEditProfile() {
    this.userService.updateProfile(this.user).subscribe(res => {
      this.toastr.success('You Update Your Profile Sucessfully')
      }, err => {
        this.toastr.error(err)
        
        }
      )
}


selectImage(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.pic = file;
    const formData = new FormData();
    formData.append('pic',this.pic,this.pic.name);
    
    this.userService.createAvatar(this.pic,formData).subscribe((link: any)=>{
      this.user.pic = link.user.pic
        this.toastr.success('you update your profile picture')
      },err=>{
        this.toastr.error(err)
      })
  }
}


onChangePassword() {
  this.userService.changePass(this.changePasswordForm.value)
    .subscribe(
      res => {
        this.toastr.success('You Change Your Password Successfully')
        this.clearForm()
      },
      err => {
        this.toastr.error(err);

      });
}

clearForm(){
  this.changePasswordForm = this.formBuilder.group({
 oldPassword: ['', [Validators.required]],
 newPassword: ['', [Validators.required, Validators.minLength(8)]],
 confirmPassword: ['', Validators.required]
}, {
 validator: MustMatch('newPassword', 'confirmPassword')

});

}
}
