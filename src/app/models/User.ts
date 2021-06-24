import { Post } from "./Post";

export class User {
    token: String;
    // _id: string;
    idd: string
    firstName: {
        type: String 
    };
    lastName: {
        type: String 
    };
    email: {
        type: String
    };
    password: {
        type: String
    };
    role: {
        type: String
    };
    pic: {
        type: String,

    };
    gender: {
        type: String,
    };
    DOB: {
        type: Date,
    };
    bio: {
        type: String
    };
    job: {
        type: String
    };
    education: {
        type: String
    };
    summary: {
        type: String
    };
        facebook: {
            type: String,
        };
        linkedIn: {
            type: String,
        };
        gitHub: {
            type: String
        };
        address: {
            type: String,
        };
        city: {
            type: String,
        };
        country: {
            type: String
        };
    verified: {
        type: Boolean,
        default: false
    };
    verificationCode: {
        type:String
    };
    resetPassToken: {
        type:String
    }
    interests: [{
        type: String
    }]
    posts: Post;
}; {
    timestamps: true
};
