import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TokenStorageService } from "./token-storage.service";
import { Router } from "@angular/router";
import { User } from "./models/user.model"
const AUTH_API = environment.userUrl + "users";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenstorage: TokenStorageService,
    private router: Router
  ) { }

  login(login: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "/auth", { login, password });
  }

  register(name: string, login: string, password: string, comment: string): Observable<any> {
    return this.http.post(
      AUTH_API,
      {
        name,
        login,
        comment,
        password,
      },
      httpOptions
    );
  }

  verify(): void {
    this.http
      .get(
        AUTH_API + "/me",
        httpOptions
      )
      .subscribe(
        (data: any) => {
          const user: User = data;
          this.tokenstorage.saveUser(user);
        },
        (err) => {
          console.log(err)
          this.tokenstorage.signOut();
          this.router.navigateByUrl("/admin/login");
        }
      );
  }



}