import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  newNum = 0;
  newNum2 = 0;
  options = {
    useEasing: false,
    duration: 0.5
  }

  update() {
    
    if (this.newNum == 200){
    }
    else
    this.newNum += 10;
   
  }
  update1() {
    
    if (this.newNum2 == 150){
    }
    else
    this.newNum2 += 10;
   
  }

  ngOnInit(){

  }
  
}
