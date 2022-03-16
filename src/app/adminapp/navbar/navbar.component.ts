import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { route } from "../../models/route.model"
import { Router } from "@angular/router";
import { TokenStorageService } from 'src/app/token-storage.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  @Input() routes: route[] = [];
  @Input() user: User = { name: '', comment: '', login: '', id: 0 };

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService
  ) {
    console.log(this.routes);
  }
  singOut() {
    this.tokenStorageService.signOut();
  }

}