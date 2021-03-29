// models file that contain classes with thier values to equall it with the respond from the backend

//error class
export interface error {
    value: string,
    msg: string,
    param: string
}

// api error class
export interface ApiError {
    errors: error[]
}

//auth result class that will provide us with an accesstoken
export interface AuthResult {
    accessToken?: string,
}
