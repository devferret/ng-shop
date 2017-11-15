import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }
} 
