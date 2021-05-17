import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutUsService } from 'src/app/services/about-us.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private aboutusService: AboutUsService) { }
  newNum = 0;
  newNum2 = 0;
  options = {
    useEasing: false,
    duration: 0.5

  }
  contactFrom: FormGroup;
  update() {

    if (this.newNum == 200) {
    }
    else
      this.newNum += 10;

  }
  update1() {

    if (this.newNum2 == 150) {
    }
    else
      this.newNum2 += 10;

  }

  ngOnInit() {
    this.contactFrom = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: [''],
      phone: ['', [Validators.pattern("(02)[0-9]{9}"), Validators.required]],
      message: ['', [Validators.required]]
    })
  }

  get myForm() {
    return this.contactFrom.controls;
  }

  onsubmit() {
    this.aboutusService.sendContactMail(this.contactFrom.value)
      .subscribe(
        res => {
          console.log(res)

        },
        error => {
          console.log(error)
        });
    console.log(this.contactFrom.value)
  }

}
