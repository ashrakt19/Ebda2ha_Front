import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { UserList } from 'src/app/models/UserList';
import { PostsService } from 'src/app/services/posts.service';
import { ChatService } from 'src/app/services/chat-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { Summry } from 'src/app/models/Summry';
import { ToastrService } from 'ngx-toastr';
// core components
import {

  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chatService: ChatService,private postService: PostsService,private userservice: UserService, private toastar: ToastrService) { }

  userList: UserList[]
  userscount: string
  adminconut: string
  postsapprovedcount: string
  postsunapprovedcount: string
  countUserpost: String
  email: string;
  allusersId: String
  
    getposts() {
      this.postService.counterPosts().subscribe((res:any) => {
        // console.log(res)
        this.postsapprovedcount = res.approvedlength
        this.postsunapprovedcount = res.notapprovedlength
        console.log(res)
      })
  
    }

    user: User
    id: string
  makeadmin(id){
    this.userservice.makeAdmin(id).subscribe(res=>{
      // debugger
      this.toastar.success("You make this user admin successfully")
    },err=>{
     this.toastar.error(err)
    })
  }
  blockuser(id){
    this.userservice.blockUser(id).subscribe(res=>{
      // debugger
      this.toastar.success("user deleted")
    },err=>{
     this.toastar.error(err)
    })
  }
  name: string
  addCategory(){
    this.postService.AddCategory(this.name).subscribe(res=>{
      // debugger
      this.toastar.success("category added")

      console.log(res)
    },err=>{
      console.log(err)
    })
  }

  deletecategory(id){
    this.postService.deleteCategory(id).subscribe(res=>{
      // debugger
      this.toastar.success("category deleted")
    },err=>{
     this.toastar.error(err)
    })
  }
  getusers() {
    this.chatService.getAllUsers().subscribe((res: any) => {
      this.userList = res.users
      this.userscount = res.userslength
      this.adminconut = res.adminlength
      this.countUserpost = res.eachuserLength
      this.allusersId = res.allusersId
      console.log(res)
        console.log(this.userList)
    }, err => {
      console.log(err)
    })
  }


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {
    this.getCategory()
    this.getusers()

    this.getposts()

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }

 

  summaries: Summry[]
  getCategory() {
    this.postService.getAllCategory().subscribe((res: any) => {
      this.summaries = res.categories
      console.log(res)
      console.log(this.summaries)
    }, err => {
      console.log(err)
    })
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
