import { User } from './User';
export interface Profile {
    user?: User,

    age?: Number,
    job?: string,
    phone?: Number,
    Contacts?: {
        address?: string,
        city?: string,
        country?: string
    },
    SocialMedia?: {
        facebook?: string,
        email?: string,
        Twitter?: string,
        instgram?: string,
        linkedin?: string
    },
    description?: string
}