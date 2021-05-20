import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/_helpers/Must Match';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})  
export class UserProfileComponent implements OnInit {


  changePasswordForm: FormGroup;
  constructor(private userService: UserService, private toastr: ToastrService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.onGetMyProfile()
     
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')

    });


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
   this.toastr.error(err)
    
})}

onEditProfile() {
  this.userService.updateProfile(this.id).subscribe(res => {
  console.log("hi")
  }, err => {
    this.toastr.error(err)
    
    }
  )
}

selectImage(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.images = file;
  }
  console.log(this.images)
}


onChangePassword() {
  this.userService.changePass(this.changePasswordForm.value)
    .subscribe(
      res => {
        this.toastr.success('You Change Your Password Successfuly')
      },
      err => {
        this.toastr.error(err);

      });
}


}
