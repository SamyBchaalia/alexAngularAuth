import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Station } from "./models/stations.model"
@Injectable({
  providedIn: 'root'
})
export class StationsService {
  constructor(private http: HttpClient) { }
  ROOT_URL = environment.userUrl + "stations";
  getAll() {
    return this.http.get(this.ROOT_URL);
  }
  create(station: Station) {
    return this.http.post(this.ROOT_URL, station);
  }
  delete(id: number) {
    return this.http.delete(`${this.ROOT_URL}/${id}`)
  }
  getById(id: number) {
    return this.http.get(`${this.ROOT_URL}/${id}`)
  }
  update(station: Station) {
    const { name, comment } = station;
    return this.http.patch(`${this.ROOT_URL}/${station.id}`, { name, comment })
  }
}