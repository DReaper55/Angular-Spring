import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Person } from './employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = 'http://localhost:8088/spring/api';

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  getAllUsers(): Observable<Person[]>{
    return this.http.get<Person[]>('http://localhost:8088/spring/api/users');
  }

  addUser(person: Person): Observable<any>{
    return this.http.post<Person>(`${this.baseUrl}/user`, person);
    // return this.http.post<Person>('http://localhost:8088/spring/api/user', person)
  }

  updateUser(id: string, person: Person): Observable<Object>{
    return this.http.put(`${this.baseUrl}/user/${id}`, person);
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/user/${id}`, {responseType: 'text'});
  }
}
