import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public isCollapsed = true;
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,
     public authservice: AuthService,public userService: UserService, private toastr: ToastrService) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    if(this.authservice.currentUserValue){
  this.onuserProfile()
    }
    
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'home';
  }

  onLogout(){
    this.authservice.logout();
    this.toastr.success('You Logged Out Successfully!')
    this.router.navigate(['/joinUs']);
  }
  firstName
  lastName
  img

  onuserProfile() {
    this.userService.myProfile().subscribe(res =>{
    //     firstName: this.currentUserValue.firstName,
    //     lastName: this.currentUserValue.lastName,
    //     email: this.currentUserValue.email,
    //     pic: this.currentUserValue.pic,
    //     role: this.currentUserValue.role,
    //     gender: this.currentUserValue.gender,
    //     DOB: this.currentUserValue.DOB,
    //     bio: this.currentUserValue.bio,
    //     summary: this.currentUserValue.summary,
    //     // message: "you fetched the user successfully",
    // user : {
    //  this.user.firstName = res.firstName,
    //   res.lastName,
    //   res.pic,
    //   res.role,
    //   res.email
    // }
    this.firstName = res.firstName
    this.lastName = res.lastName
    this.img = res.pic
},  err=> {
   this.toastr.error(err)
})}
}
