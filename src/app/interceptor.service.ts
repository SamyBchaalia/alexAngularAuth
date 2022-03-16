import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.tokenStorage.getToken();
    if (currentUser) {
      const headers = new HttpHeaders({
        "user-jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0NH0.Z5PqMcc_xbD4aYL-M4x6wRthQ34-DVENnQVX-RYth84",
        'Content-Type': 'application/json'

      });
      request.clone({ headers })
    }

    return next.handle(request);
  }
}