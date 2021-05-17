"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var countup_js_angular2_1 = require("countup.js-angular2");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var flex_layout_1 = require("@angular/flex-layout");
var autocomplete_1 = require("@angular/material/autocomplete");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var app_routing_1 = require("./app.routing");
var components_module_1 = require("./components/components.module");
var about_us_component_1 = require("./pages/about-us/about-us.component");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var error_Interceptor_1 = require("../app/_helpers/error.Interceptor");
var jwt_interceptor_1 = require("../app/_helpers/jwt.interceptor");
var home_component_1 = require("../app/pages/home/home.component");
var dashboard_component_1 = require("../app/pages/dashboard/dashboard.component");
var user_profile_component_1 = require("../app/pages/user-profile/user-profile.component");
var joinUs_component_1 = require("../app/pages/joinUs/joinUs.component");
var alert_component_1 = require("./alert/alert.component");
var all_posts_component_1 = require("./pages/all-posts/all-posts.component");
var add_post_component_1 = require("./pages/add-post/add-post.component");
var my_posts_component_1 = require("./pages/my-posts/my-posts.component");
var forgetpassword_component_1 = require("./pages/forgetpassword/forgetpassword.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                countup_js_angular2_1.CountUpModule,
                autocomplete_1.MatAutocompleteModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                animations_1.BrowserAnimationsModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                flex_layout_1.FlexLayoutModule
            ],
            declarations: [
                app_component_1.AppComponent,
                about_us_component_1.AboutUsComponent,
                home_component_1.HomeComponent,
                joinUs_component_1.JoinUsComponent,
                dashboard_component_1.DashboardComponent,
                alert_component_1.AlertComponent,
                user_profile_component_1.UserProfileComponent,
                all_posts_component_1.AllPostsComponent,
                add_post_component_1.AddPostComponent,
                my_posts_component_1.MyPostsComponent,
                forgetpassword_component_1.ForgetpasswordComponent,
            ], providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: error_Interceptor_1.ErrorInterceptor, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
