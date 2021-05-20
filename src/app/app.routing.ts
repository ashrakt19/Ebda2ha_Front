import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { JoinUsComponent } from '../app/pages/joinUs/joinUs.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { AboutUsComponent } from '../app/pages/about-us/about-us.component';
import { UserProfileComponent } from '../app/pages/user-profile/user-profile.component';
import { Role } from '../app/models/role';
import { AuthGuard } from '../app/guard/auth.guard';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component'
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  { 
      path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [AuthGuard], 
      data: { roles: [Role.Admin] } 
  },
  { 
      path: 'joinUs', 
      component: JoinUsComponent 
  },
  { 
    path: 'aboutus', 
    component: AboutUsComponent 
},{
path: 'all-posts', 
component: AllPostsComponent 
},{
path: 'my-posts', 
component: MyPostsComponent,
canActivate: [AuthGuard]
},
{ 
    path: 'user-profile', 
    component: UserProfileComponent,
    canActivate: [AuthGuard]
},
{ 
    path: 'forget-password', 
    component: ForgetpasswordComponent,
},
{ 
    path: 'add-post', 
    component: AddPostComponent,
},
{ 
    path: 'post-details', 
    component: PostDetailsComponent,
},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);