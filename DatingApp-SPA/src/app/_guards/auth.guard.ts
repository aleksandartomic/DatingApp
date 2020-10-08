import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, private alertify: AlertifyService, private route: Router) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertify.error('You shall not pass!!!');
    this.route.navigate(['/home']);
    return false;
  }
}
