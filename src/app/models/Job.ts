import { User } from "./User";
export class Job {
    _id: string;
    JobName: {
        type: String,
        required: true
    };
    JobDescription: {
        type: String
    }
    Salary: Number;
     sal: [{
        type: string,
    }];
    facebookpage: String;
    websitelink: String;
    addressLine:{
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
    createdBy: User
    comments: Comment[]
}; {
    timestamps: true
}
