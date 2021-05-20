import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { PostsService } from 'src/app/services/posts.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  msg: string = 'You must specify a description thats between 20 and 500 characters';
  categories = ['Product Form','Startup Form'];
  selectedCateogry = 'Category';
  categoryFlag: boolean = false;
  pic: any = null
  PostForm: FormGroup


  constructor(public dialogRef: MatDialogRef<AddPostComponent>, private fb: FormBuilder,
   private http: HttpClient, private PostService: PostsService,private toastr: ToastrService) { }

  ngOnInit(): void {
  

    this.PostForm = this.fb.group({
      StartupName: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required]],
      phone: ['', [Validators.pattern("(02)[0-9]{9}"), Validators.required]],
      Productname: [''],
      Price:[''],
      Posttype:[''],
      facebookpage:[''],
      websitelink:[''],
      pic: ['', [Validators.required]],
    
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pic = file
    }
  }

  // onSubmit(values) {
  //   if (!this. pic) {
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'warning',
  //       title: 'You must upload the image of your Product!',
  //       showConfirmButton: false,
  //       timer: 1500
  //     })
  //   } 
  //   // else if(!values.location){
  //   //   Swal.fire({
  //   //     position: 'center',
  //   //     icon: 'warning',
  //   //     title: 'You must choose a location on the map !',
  //   //     showConfirmButton: false,
  //   //     timer: 1500
  //   //   })
  //   // }
  //   else {
  //     console.log(this.PostForm.value)
  //     this.PostService.createPost(values).subscribe(res => {
  //       // const formData = new FormData();
  //       // formData.append(' pic', this. pic);
  //       // this.http.post<any>('http://localhost:3000/posts/uploadimg/' + res.newItemId, formData).subscribe(res => console.log('Done'));
  //       this.dialogRef.close();
  //     }, err=>{
  //       this.toastr.error(err);
  //     }
  //     )
  //   }
   
  // }
onSubmit(){
  this.PostService.createPost(this.PostForm.value).subscribe(res=>{
    this.toastr.success('post created');
  },err=>{
    this.toastr.error(err)
  })
  console.log(this.PostForm.value)
}

  onCancel() {
    this.dialogRef.close();
  }

}
