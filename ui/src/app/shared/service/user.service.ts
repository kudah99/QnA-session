import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getfakeUsers() {
    return this.http.get<UserModel[]>('http://localhost:4200/assets/mockUsers.json');
  }

  getUsers() {
    // TODO: get real user from api
  }
}
