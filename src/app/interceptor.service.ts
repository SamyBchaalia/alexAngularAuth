import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenStorageService } from "./token-storage.service";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.tokenStorage.getToken();
    req = req.clone({
      setHeaders: {

        'user-jwt': `${authToken}`
      }
    });
    console.log(req)
    return next.handle(req);
  }
}