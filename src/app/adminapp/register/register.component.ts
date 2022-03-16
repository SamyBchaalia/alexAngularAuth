import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    comment: new FormControl(''),
    name: new FormControl('')
  });
  isLoggedIn = false;
  isLoginFailed = false;
  error = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {
      this.authService.verify();
    }
  }

  onSubmit(): void {
    const { login, password, comment, name } = this.form.value
    this.authService.register(login, password, comment, name).subscribe(
      data => {
        console.log("data", data);
        this.router.navigateByUrl("admin/login")
      },
      err => {
        this.error = err.error.error;
        console.log("error", this.error)
      }
    );

  }
  reloadPage(): void {
    this.ngOnInit()
  }
}
