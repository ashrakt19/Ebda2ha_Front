import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from '../../_helpers/Must Match';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-joinus',
  templateUrl: './joinUs.component.html',
  styleUrls: ['./joinUs.component.scss']
})

export class JoinUsComponent implements OnInit, OnDestroy {
  activeClass: boolean;
  registerFrom: FormGroup;
  showValidText: boolean = false
  code: String
  //toggleclass for animation login & sign up
  toggleClass() {
    this.activeClass = !this.activeClass
  }

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) {
    // redirect to home if already logged in
    if (this.auth.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }
  ngOnDestroy(): void {
  }

  ngOnInit() {

   
    //login form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    

    //register form
    this.registerFrom = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirm')

    });
  }



  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  get myForm() {
    return this.registerFrom.controls;
  }

  onlogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        res => {
          this.router.navigate(['/user-profile']);
          this.toastr.success('You Logged In Successfully Hope You Doing Well with us!')
        },
        err => {
          this.toastr.error(err);

        });
  }

  onsignUp() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerFrom.invalid) {
      return;
    }

    this.loading = true;
    this.auth.SignUp(this.registerFrom.value)
      .pipe(first())
      .subscribe(
        res => {
          this.showValidText = true
         this.toastr.success('Please Check Your Mail To Activate Your Account','You Signed Up Successfully!')
        },
        err => {
          this.toastr.error(err);

        });
  }
  onVerify() {
    this.auth.verifyEmail(this.code).subscribe(res => {
      this.router.navigate(['/user-profile']);
    },  err => {
      this.toastr.error(err);

    });
  }
  onResetPassword(){
    this.auth.getResetPass(this.f.email.value).subscribe(res=>{
   }, err => {
      this.toastr.error(err);

    });
  }

}