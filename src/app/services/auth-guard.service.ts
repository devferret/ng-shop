import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }

}
