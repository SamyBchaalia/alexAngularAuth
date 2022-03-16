import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    comment: new FormControl(''),
    login: new FormControl(''),

  });
  error = ''
  spin = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User, action: 'Create' | 'Update' }, private userService: UsersService, public dialogRef: MatDialogRef<UserComponent>) { }

  ngOnInit(): void {
    this.form.controls['id'].setValue(this.data.user.id || null)
    this.form.controls['name'].setValue(this.data.user.name || '')
    this.form.controls['comment'].setValue(this.data.user.comment || '')
    this.form.controls['login'].setValue(this.data.user.login || '')


  }
  onSubmit() {
    this.spin = true;
    if (this.data.action == 'Create') {
      this.userService.create({
        name: this.form.value.name, comment: this.form.value.comment, login: this.form.value.login
      }).subscribe((data) => {
        window.location.reload();

      })
    }
    else {
      this.userService.update({ id: this.form.value.id, name: this.form.value.name, comment: this.form.value.comment, login: this.form.value.login }).subscribe((data) => {
        window.location.reload();

      })
    }
  }
  closeModal() {
    this.dialogRef.close()
  }
}
