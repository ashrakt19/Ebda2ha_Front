import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/services/posts.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  msg: string = 'You must specify a description thats between 20 and 500 characters';
  categories = ['Product Form', 'Startup Form'];
  selectedCateogry = 'Category';
  // filters= ['Food','Furniture','Handmade','Technology'];
  // selectedFilter= 'Filter';
  categoryFlag: boolean = false;
  pic: any = null
  PostForm: FormGroup
  id: string



  constructor(public dialogRef: MatDialogRef<AddPostComponent>, private fb: FormBuilder,
    private http: HttpClient, private PostService: PostsService, private toastr: ToastrService) { }

  ngOnInit(): void {


    this.PostForm = this.fb.group({
      StartupName: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', Validators.required],
      // Category: ['', Validators.required],
      phone: ['', [Validators.required]],
      Productname: [''],
      Price: [''],
      Posttype: [''],
      facebookpage: [''],
      websitelink: [''],
    });
  }

  setCategory(category: string) {
    this.selectedCateogry = category;
    this.categoryFlag = true;
    this.PostForm.patchValue({
      category: category
    })
    category === 'Product Form' ? this.PostForm.get('Productname').setValidators(Validators.required) : this.PostForm.get('Productname').clearValidators();
    this.PostForm.get('Productname').updateValueAndValidity();
    category === 'Product Form' ? this.PostForm.get('Price').setValidators(Validators.required) : this.PostForm.get('Price').clearValidators();
    this.PostForm.get('Price').updateValueAndValidity();

    category === 'Startup Form' ? this.PostForm.get('Posttype').setValidators([Validators.required]) : this.PostForm.get('Posttype').clearValidators();
    this.PostForm.get('Posttype').updateValueAndValidity();

  }
  // setFilter(filter: string) {
  //   this.selectedFilter = filter;
  //   this.PostForm.patchValue({
  //     Category: filter
  //   })

  // }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pic = file
    }
    console.log(this.pic)
  }

  onSubmit() {
    this.PostService.createPost(this.PostForm.value).subscribe(res => {
      this.toastr.success('post created');
      this.PostForm.reset();

    }, err => {
      this.toastr.error(err)
    })
    console.log(this.PostForm.value)
  }

  onCancel() {
    this.dialogRef.close();
  }

  // MapToProductObject(productObject) {
  //   const obj = {
  //     "Price": productObject.Price,
  //     "Productname": productObject.Productname,
  //     "StartupName": productObject.StartupName,
  //     "addressLine": productObject.addressLine,
  //     "category": productObject.category,
  //     "description": productObject.description,
  //     "facebookpage": productObject.facebookpage,
  //     "phone": productObject.phone,
  //     "websitelink": productObject.websitelink
  //   }
  //   return obj;

  // }

}
