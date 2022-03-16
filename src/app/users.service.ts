import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  ROOT_URL = environment.userUrl + "users";
  getAll() {
    return this.http.get(this.ROOT_URL);
  }
  create(user: User) {
    return this.http.post(this.ROOT_URL, user);
  }
  delete(id: number) {
    return this.http.delete(`${this.ROOT_URL}/${id}`)
  }
  getById(id: number) {
    return this.http.get(`${this.ROOT_URL}/${id}`)
  }
  update(user: User) {
    const { name, comment } = user;
    return this.http.patch(`${this.ROOT_URL}/${user.id}`, { name, comment })
  }
}