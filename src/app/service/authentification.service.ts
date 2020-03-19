import { Role } from './../modele/role';
import { User } from './../modele/user';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {  BehaviorSubject, Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  spresp: any;

  constructor( private httpClient: HttpClient, private handler: HttpHandler ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
   }

    getConnexion(user: User) {
      user.username="remy50"; user.password="admin";
    return this.httpClient.post<User>(`${environment.apiUrl}/api/login_check`, user).
     // tslint:disable-next-line: no-shadowed-variable
     pipe(map(user => {
       localStorage.setItem('currentUser', JSON.stringify(user));
      // tslint:disable-next-line: align
      this.currentUserSubject.next(user);
       return user;
   }));
  }

   getRoles() {
     return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
   }

  getUsers() {
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users`);
  }
  getUser(id: any): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users/${id}`);
  }

  postUser(user: User) {
   return  this.httpClient.post(`${environment.apiUrl}/api/users`, user);
   //.subscribe(res => {
    //console.log(res);
 // });
  }
  deleteUser(user) {
     // tslint:disable-next-line: align
     return this.httpClient.delete(`${environment.apiUrl}/api/users/${user.id}`).subscribe(
      resp => {
        return this.spresp.push(resp);
        }
     );
  }

  editUser(user) {
     // tslint:disable-next-line: align
     return this.httpClient.put<User>(`${environment.apiUrl}/api/users/${user.id}`, user);
  }

// tslint:disable-next-line: eofline
}