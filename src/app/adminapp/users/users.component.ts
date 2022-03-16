import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/token-storage.service';
import { UsersService } from 'src/app/users.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private userService: UsersService, private dialog: MatDialog) { }
  user: User = this.tokenStorage.getUser();
  spin: boolean = true;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns = ['id', 'name', 'comment', 'login', 'actions'];
  dataSource = new MatTableDataSource<User>();
  searchKey: string = '';

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.spin = false;
    })

  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  removeStation(station: any) {
    this.spin = true;
    this.userService.delete(station.id).subscribe((data) => {
      console.log("success")
      this.ngOnInit();
    })
  }
  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%";
    dialogconfig.height = "70%";
    dialogconfig.data = { user: { id: null, name: '', comment: '' }, action: 'Create' }
    this.dialog.open(UserComponent, dialogconfig);
  }
  onEdit(station: any) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%";
    dialogconfig.height = "70%";
    dialogconfig.data = { user: { id: station.id, name: station.name, comment: station.comment }, action: 'Edit' }
    this.dialog.open(UserComponent, dialogconfig);
  }


}
