import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Station } from 'src/app/models/stations.model';
import { StationsService } from 'src/app/stations.service';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    comment: new FormControl(''),
  });
  error = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data: { station: Station, action: 'Create' | 'Update' }, private stationService: StationsService) { }

  ngOnInit(): void {
    console.log(this.data.station)
    this.form.controls['id'].setValue(this.data.station.id || null)
    this.form.controls['name'].setValue(this.data.station.name || '')
    this.form.controls['comment'].setValue(this.data.station.comment || '')

  }
  onSubmit() {
    console.log(this.form.value)
  }
}
