import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { Roles } from "../constants/constants";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getLoginData().pipe(
      map(user => {
        if (user && ['user', 'artist', 'admin'].includes(user.role)) {
          return true;
        } else {
          this.toastr.info("Please login first", "Info");
          return this.router.createUrlTree(["/auth/login"]);
        }
      }),
      catchError(() => {
        this.toastr.info("Please login first", "Info");
        return of(this.router.createUrlTree(["/auth/login"]));
      })
    );
  }
}
