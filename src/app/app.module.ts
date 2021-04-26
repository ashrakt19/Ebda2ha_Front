import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountUpModule } from 'countup.js-angular2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import{ MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { routing } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ErrorInterceptor } from '../app/_helpers/error.Interceptor';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { HomeComponent } from '../app/pages/home/home.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../app/pages/user-profile/user-profile.component';
import { JoinUsComponent } from '../app/pages/joinUs/joinUs.component';
import { AlertComponent } from './alert/alert.component';
import { CountToModule } from 'angular-count-to';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { MyPostsComponent } from './pages/my-posts/my-posts.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    CountUpModule,
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule, 
    BrowserAnimationsModule, 
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule, 
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    JoinUsComponent,
    DashboardComponent,
    AlertComponent,
    UserProfileComponent,
    AllPostsComponent,
    AddPostComponent,
    MyPostsComponent,
      ], providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
