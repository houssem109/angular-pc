/* import { ActivatedRouteSnapshot,  CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service/auth.service';

 */





import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

export const pcGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};


/*
old version we cant use it and we can take the root and stat without constructor we take  it with inject directly
export class pcGuard implements CanActivateFn {
  constructor (private authService: AuthService,
  private router : Router) {}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
  return true;
  else
  {
  this.router.navigate(['app-forbidden']);
  return false;
  }
}
} */