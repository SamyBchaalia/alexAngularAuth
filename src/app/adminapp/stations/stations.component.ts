import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { StationsService } from 'src/app/stations.service';
import { Station } from 'src/app/models/stations.model';
import { MatSort } from "@angular/material/sort"
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { StationComponent } from '../station/station.component';
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private stationService: StationsService, private dialog: MatDialog) { }
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
    dialogconfig.width = "40%";
    dialogconfig.height = "70%";
    dialogconfig.data = { Station: { id: null, name: '', comment: '' }, action: 'Create' }
    this.dialog.open(StationComponent, dialogconfig);
  }
  onEdit(station: any) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%";
    dialogconfig.height = "70%";
    dialogconfig.data = { station: { id: station.id, name: station.name, comment: station.comment }, action: 'Edit' }
    this.dialog.open(StationComponent, dialogconfig);
  }


}
