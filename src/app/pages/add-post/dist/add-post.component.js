"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(dialogRef, fb, http, PostService, toastr) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.http = http;
        this.PostService = PostService;
        this.toastr = toastr;
        this.msg = 'You must specify a description thats between 20 and 500 characters';
        this.categories = ['Product Form', 'Startup Form'];
        this.selectedCateogry = 'Category';
        // filters= ['Food','Furniture','Handmade','Technology'];
        // selectedFilter= 'Filter';
        this.categoryFlag = false;
        this.pic = null;
    }
    AddPostComponent.prototype.ngOnInit = function () {
        this.PostForm = this.fb.group({
            StartupName: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required, forms_1.Validators.minLength(20)]],
            addressLine: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            category: ['', forms_1.Validators.required],
            // Category: ['', Validators.required],
            phone: ['', [forms_1.Validators.required]],
            Productname: [''],
            Price: [''],
            Posttype: [''],
            facebookpage: [''],
            websitelink: ['']
        });
    };
    AddPostComponent.prototype.setCategory = function (category) {
        this.selectedCateogry = category;
        this.categoryFlag = true;
        this.PostForm.patchValue({
            category: category
        });
        category === 'Product Form' ? this.PostForm.get('Productname').setValidators(forms_1.Validators.required) : this.PostForm.get('Productname').clearValidators();
        this.PostForm.get('Productname').updateValueAndValidity();
        category === 'Product Form' ? this.PostForm.get('Price').setValidators(forms_1.Validators.required) : this.PostForm.get('Price').clearValidators();
        this.PostForm.get('Price').updateValueAndValidity();
        category === 'Startup Form' ? this.PostForm.get('Posttype').setValidators([forms_1.Validators.required]) : this.PostForm.get('Posttype').clearValidators();
        this.PostForm.get('Posttype').updateValueAndValidity();
    };
    // setFilter(filter: string) {
    //   this.selectedFilter = filter;
    //   this.PostForm.patchValue({
    //     Category: filter
    //   })
    // }
    AddPostComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.pic = file;
        }
        console.log(this.pic);
    };
    AddPostComponent.prototype.onSubmit = function () {
        var _this = this;
        this.PostService.createPost(this.PostForm.value).subscribe(function (res) {
            _this.toastr.success('post created');
            _this.PostForm.reset();
        }, function (err) {
            _this.toastr.error(err);
        });
        console.log(this.PostForm.value);
    };
    AddPostComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddPostComponent = __decorate([
        core_1.Component({
            selector: 'app-add-post',
            templateUrl: './add-post.component.html',
            styleUrls: ['./add-post.component.css']
        })
    ], AddPostComponent);
    return AddPostComponent;
}());
exports.AddPostComponent = AddPostComponent;
