import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountUpModule } from 'countup.js-angular2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    CountUpModule
  ],
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    JoinUsComponent,
    DashboardComponent,
    AlertComponent,
    UserProfileComponent
  ], providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
