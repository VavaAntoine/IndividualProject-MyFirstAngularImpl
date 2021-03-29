import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Employee } from '../common/employee';
import { tap, catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  private baseUrl = 'http://localhost:8080/attribute';
  private searchUrl = 'http://localhost:8080/attribute/search/employee';


  constructor(private httpClient: HttpClient) { } // inject HttpClient

  // Create
  createAttribute(attribute: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, attribute);
  }

  // Read 
  getAttributesList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getAttribute(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  // Read Search
  searchEmployeesByAttribute(id: number): Observable<any> {
    return this.httpClient.get(`${this.searchUrl}/${id}`);
  }
 
  searchEmployeeRoutings(id1: number, id2: number): Observable<any> {
    return this.httpClient.get(`${this.searchUrl}/${id1}/${id2}`);
  }

  // Update
  updateAttribute(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  // Delete
  deleteAttribute(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  } 

}