import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./models/user.model";

const TOKEN_KEY = "user-jwt";
const USER_KEY = "auth-user";
@Injectable({
  providedIn: "root",
})
export class TokenStorageService {
  constructor(private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();

    this.router.navigateByUrl("admin/login");
  }



  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}