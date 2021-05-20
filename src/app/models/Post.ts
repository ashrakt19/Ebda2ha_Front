export class Post {
    StartupName: {
        type: String,
        required: true
    };
    facebookpage: String;
    websitelink: String;
    Posttype: String;
    Productname: {
        type: String
    }
    Price: Number;
     pic: [{
        type: String,
    }];
    description:{
        type: String,
        required: true
    }
    addressLine:{
        type: String,
        required: true
    }
    category:{
        type: String,
        required: true
    }
    phone:{
        type: Number,
        required: true
    }
    approved: {
        type: Boolean,
        default: false
    };
    categoryId: {
        required: true,
        ref: 'Category'
    };
    createdBy: {
        ref: 'User'
    }
}; {
    timestamps: true
}
