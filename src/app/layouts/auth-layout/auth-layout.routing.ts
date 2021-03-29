import { Routes } from '@angular/router';

import { JoinUsComponent } from '../../pages/joinUs/joinUs.component';
import { HomeComponent } from '../../pages/home/home.component'
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'joinUs',          component: JoinUsComponent },
    { path: 'home',           component: HomeComponent },
    { path: 'aboutus',        component: AboutUsComponent },
    { path: 'userprofile',    component: UserProfileComponent }
];
