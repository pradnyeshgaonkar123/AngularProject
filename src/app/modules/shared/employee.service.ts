import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employees/employee/employee.component';

const headerOption={
  headers:new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  currentEmployee:Employee ={
    id:null,
    firstname: '',
    lastname: '',
    designation: '',
    contact: null,
    address: ''
  }
  mockUrl="http://localhost:3000/Employee";
  constructor(private http:HttpClient) {

  }
  getAllEmlpoyees():Observable<Employee[]>{
    return this.http.get<Employee[]> (this.mockUrl, headerOption);
  }

  getEmployeeDetails(id:number):Observable<Employee>{
    return this.http.get<Employee> (this.mockUrl+'/'+id, headerOption);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.mockUrl+'/'+id, headerOption);

  }
  insertEmployee(emp: Employee): Observable<Employee>{
    return  this.http.post<Employee>(this.mockUrl, emp, headerOption);
  }
  updateEmployee(emp: Employee): Observable<Employee>{
    return  this.http.put<Employee>(this.mockUrl+'/'+emp.id, emp, headerOption);
  }
}
