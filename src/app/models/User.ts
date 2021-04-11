export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    Password: string;
    Role: string;
    token?: string;
    acceptTerms: boolean;
    confirmPassword: string;
}