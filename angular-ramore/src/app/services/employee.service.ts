import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employee';

  constructor(private httpClient: HttpClient) { }

  // Create
  createEmployee(employee: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  // Read 
  getEmployeesList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  // Update
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  // Delete
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
