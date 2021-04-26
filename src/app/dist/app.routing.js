"use strict";
exports.__esModule = true;
exports.routing = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("../app/pages/home/home.component");
var joinUs_component_1 = require("../app/pages/joinUs/joinUs.component");
var dashboard_component_1 = require("../app/pages/dashboard/dashboard.component");
var about_us_component_1 = require("../app/pages/about-us/about-us.component");
var user_profile_component_1 = require("../app/pages/user-profile/user-profile.component");
var role_1 = require("../app/models/role");
var auth_guard_1 = require("../app/guard/auth.guard");
var all_posts_component_1 = require("./pages/all-posts/all-posts.component");
var my_posts_component_1 = require("./pages/my-posts/my-posts.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: { roles: [role_1.Role.Admin] }
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
        component: all_posts_component_1.AllPostsComponent
    }, {
        path: 'my-posts',
        component: my_posts_component_1.MyPostsComponent
        // canActivate: [AuthGuard]
    },
    {
        path: 'user-profile',
        component: user_profile_component_1.UserProfileComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
