import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { JoinUsComponent } from '../app/pages/joinUs/joinUs.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { AboutUsComponent } from '../app/pages/about-us/about-us.component';
import { UserProfileComponent } from '../app/pages/user-profile/user-profile.component';
import { Role } from '../app/models/role';
import { AuthGuard } from '../app/guard/auth.guard';

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
},
{ 
    path: 'user-profile', 
    component: UserProfileComponent,
    canActivate: [AuthGuard]
},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);