export class User {
    token: String;
    firstName: {
        type: String ,
        required: true
    };
    lastName: {
        type: String ,
        required: true
    };
    email: {
        type: String,
        required: true
    };
    password: {
        type: String,
        required: true
    };
    role: {
        type: String,
        required: true,
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
    socialLinks: {
        facebook: {
            type: String,
        },
        linkedIn: {
            type: String,
        },
        gitHub: {
            type: String
        }
    };
    verified: {
        type: Boolean,
        default: false
    };
    verificationCode: {
        type:String,
        required:false
    };
    resetPassToken: {
        type:String,
        required:false
    }
    interests: [{
        type: String
    }]
}; {
    timestamps: true
};
