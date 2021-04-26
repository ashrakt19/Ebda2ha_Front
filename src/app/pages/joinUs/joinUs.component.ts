import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from '../../_helpers/Must Match';


@Component({
  selector: 'app-joinus',
  templateUrl: './joinUs.component.html',
  styleUrls: ['./joinUs.component.scss']
})

export class JoinUsComponent implements OnInit, OnDestroy {
  activeClass: boolean;
  registerFrom: FormGroup;
  showValidText: boolean = false
  code: number
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
    private userservice: UserService,
    private alertService: AlertService
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
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    

    //register form
    this.registerFrom = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
        data => {
          this.router.navigate(['/user-profile']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    console.log(this.loginForm.value)
    console.log("logged success")
  }

  onsignUp() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerFrom.invalid) {
      return;
    }

    this.loading = true;
    this.userservice.SignUp(this.registerFrom.value)
      .pipe(first())
      .subscribe(
        data => {
          this.registerFrom.valid
          this.showValidText = true
          
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    console.log(this.registerFrom.value)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFrom.value, null, 4));
  }
  onVerify() {
    console.log(this.code, this.registerFrom.value.email)
    this.auth.verify(this.code, this.registerFrom.value.email).subscribe(res => {
     this.router.navigate(['/user-profile']);
    },  error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }


}