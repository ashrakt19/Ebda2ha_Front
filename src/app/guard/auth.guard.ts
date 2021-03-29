import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            return true
        } else {
            this.router.navigate(['home'])
            return false
        }
    }

}
