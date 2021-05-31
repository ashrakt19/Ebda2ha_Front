import { User } from "./User";

export class Post {
    _id: String;
    StartupName: {
        type: String,
        required: true
    };
    facebookpage: String;
    websitelink: String;
    Posttype:{
        type: String,
        required: true,
     }
    Productname: {
        type: String
    }
    Price: Number;
     pic: [{
        type: string,
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
        required: true,
}
    phone:{
        type: Number,
        required: true
    }
    approved: {
        type: Boolean,
        default: false
    };
    // Category:{
    //     type: String
    // }
    // categoryId: {
    //     required: true,
    //     ref: 'Category'
    // };
    createdBy: User;
}; {
    timestamps: true
}
