import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SignupRequest } from 'src/app/models/SignupRequest';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-joinus',
  templateUrl: './joinUs.component.html',
  styleUrls: ['./joinUs.component.scss']
})

export class JoinUsComponent implements OnInit, OnDestroy {
  activeClass: boolean;
  signupRequest: SignupRequest = {}
  loginRequest: LoginRequest = {}
  nonValidatedMessage: string
  errorMessage: string
  showValidText: boolean = false
  code: number
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
  }


  ngOnInit() {
  }
  ngOnDestroy() {
  }


  //toggleclass for animation login & sign up
  toggleClass() {
    this.activeClass = !this.activeClass
  }



  //login
  onlogin() {
    this.auth.login(this.loginRequest).subscribe(res => {
      localStorage.setItem("accessToken", res.accessToken);
      if (res.accessToken) {
        this.router.navigate(['/user-profile'])
      }
    }, err => {
      this.nonValidatedMessage = err.error.msg
    }, () => {
      console.log('Logged Successuflly');
    })
  }

  //signup
  onSignUp() {
    this.auth.sigup(this.signupRequest).subscribe(res => {
      if (res == true) this.showValidText = true
      this.errorMessage = null
    }, err => {
      this.errorMessage = err.error
    })
  }

  //verfication
  onVerify() {
    console.log(this.code, this.signupRequest.useremail)
    this.auth.verify(this.code, this.signupRequest.useremail).subscribe(res => {
      localStorage.setItem("accessToken", res.accessToken)
      let x = localStorage.getItem("accessToken");
      if (x) this.router.navigate(['/user-profile']);
    }, err => {
      console.log(err)
      this.errorMessage = err.error.msg
      console.log(this.errorMessage)
    })
  }


}
