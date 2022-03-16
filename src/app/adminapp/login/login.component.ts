import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  error = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {
      this.router.navigateByUrl('admin/home')
    }
  }

  onSubmit(): void {
    const { login, password } = this.form.value
    this.authService.login(login, password).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.user_jwt);
        this.reloadPage();
      },
      err => {
        this.error = err.error.error;
        console.log(this.error)
      }
    );

  }
  reloadPage(): void {
    this.ngOnInit()
  }
}