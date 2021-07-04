"use strict";
exports.__esModule = true;
exports.routing = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("../app/pages/home/home.component");
var joinUs_component_1 = require("../app/pages/joinUs/joinUs.component");
var dashboard_component_1 = require("../app/pages/dashboard/dashboard.component");
var about_us_component_1 = require("../app/pages/about-us/about-us.component");
var user_profile_component_1 = require("../app/pages/user-profile/user-profile.component");
var auth_guard_1 = require("../app/guard/auth.guard");
var all_posts_component_1 = require("./pages/all-posts/all-posts.component");
var my_posts_component_1 = require("./pages/my-posts/my-posts.component");
var forgetpassword_component_1 = require("./pages/forgetpassword/forgetpassword.component");
var add_post_component_1 = require("./pages/add-post/add-post.component");
var post_details_component_1 = require("./pages/post-details/post-details.component");
var chat_component_1 = require("./pages/chat/chat.component");
var posts_admin_component_1 = require("./pages/posts-admin/posts-admin.component");
var unapproved_posts_component_1 = require("./pages/unapproved-posts/unapproved-posts.component");
var view_profile_component_1 = require("./pages/view-profile/view-profile.component");
var admin_profile_component_1 = require("./pages/admin-profile/admin-profile.component");
var add_job_component_1 = require("./pages/add-job/add-job.component");
var my_jobs_component_1 = require("./pages/my-jobs/my-jobs.component");
var all_jobs_component_1 = require("./pages/all-jobs/all-jobs.component");
var job_details_component_1 = require("./pages/job-details/job-details.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'posts-admin',
        component: posts_admin_component_1.PostsAdminComponent
    },
    {
        path: 'unapproved-posts',
        component: unapproved_posts_component_1.UnapprovedPostsComponent
    },
    {
        path: 'view-profile/:_id',
        component: view_profile_component_1.ViewProfileComponent
    },
    {
        path: 'admin-profile',
        component: admin_profile_component_1.AdminProfileComponent
    },
    {
        path: 'joinUs',
        component: joinUs_component_1.JoinUsComponent
    },
    {
        path: 'aboutus',
        component: about_us_component_1.AboutUsComponent
    }, {
        path: 'all-posts',
        component: all_posts_component_1.AllPostsComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'all-jobs',
        component: all_jobs_component_1.AllJobsComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'my-posts',
        component: my_posts_component_1.MyPostsComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'my-jobs',
        component: my_jobs_component_1.MyJobsComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'add-job',
        component: add_job_component_1.AddJobComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'user-profile',
        component: user_profile_component_1.UserProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'forget-password',
        component: forgetpassword_component_1.ForgetpasswordComponent
    },
    {
        path: 'add-post',
        component: add_post_component_1.AddPostComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'post-details/:postId',
        component: post_details_component_1.PostDetailsComponent
    },
    {
        path: 'job-details/:jobId',
        component: job_details_component_1.JobDetailsComponent
    },
    {
        path: 'chat/:_id',
        component: chat_component_1.ChatComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
