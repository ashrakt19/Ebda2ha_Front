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
import { ChatComponent } from './pages/chat/chat.component';
import { PostsAdminComponent } from './pages/posts-admin/posts-admin.component';
import { UnapprovedPostsComponent } from './pages/unapproved-posts/unapproved-posts.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { AllJobsComponent } from './pages/all-jobs/all-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        //   data: { roles: [Role.Admin] } 
    },
    {
        path: 'posts-admin',
        component: PostsAdminComponent
    },
    {
        path: 'unapproved-posts',
        component: UnapprovedPostsComponent
    },
    {
        path: 'view-profile/:_id',
        component: ViewProfileComponent
    },
    {
        path: 'admin-profile',
        component: AdminProfileComponent
    },
    {
        path: 'joinUs',
        component: JoinUsComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    }, {
        path: 'all-posts',
        component: AllPostsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'all-jobs',
        component: AllJobsComponent,
        canActivate: [AuthGuard]
    },
     {
        path: 'my-posts',
        component: MyPostsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-jobs',
        component: MyJobsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add-job',
        component: AddJobComponent,
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
        canActivate: [AuthGuard]
    },
    {
        path: 'post-details/:postId',
        component: PostDetailsComponent,
    },
    {
        path: 'job-details/:jobId',
        component: JobDetailsComponent,
    },
    {
        path: 'chat/:_id',
        component: ChatComponent,
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);