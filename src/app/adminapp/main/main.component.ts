import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { StationsService } from 'src/app/stations.service';
import { Station } from 'src/app/models/stations.model';
import { MatSort } from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { StationComponent } from '../station/station.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private stationService: StationsService, private dialog: MatDialog) { }
  user: User = this.tokenStorage.getUser();
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns = ['id', 'name', 'comment', 'actions'];
  dataSource = new MatTableDataSource<Station>();
  searchKey: string = '';

  ngOnInit(): void {
    this.stationService.getAll().subscribe((data: any) => {
      console.log(data)
      this.dataSource = new MatTableDataSource<Station>(data);
      this.dataSource.sort;
      this.dataSource.paginator
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
    console.log(station)
  }
  onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "70%";
    dialogconfig.height = "90%";
    this.dialog.open(StationComponent, dialogconfig);
  }


}
