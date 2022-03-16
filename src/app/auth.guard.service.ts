import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: "root",
})
export class AuthguardGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenstorage: TokenStorageService,
        private authservice: AuthService
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const token = this.tokenstorage.getToken();
        if (token) {
            this.authservice.verify();
            return true;
        } else {
            this.router.navigateByUrl("/admin/login");
            return false;
        }
    }
}