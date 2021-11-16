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
  constructor(private http:HttpClient) {//reference of service use for http requests

  }
  // for getting all emplyees
  getAllEmlpoyees():Observable<Employee[]>{
    return this.http.get<Employee[]> (this.mockUrl, headerOption);
  }

  //for getting specific employee details with id
  getEmployeeDetails(id:number):Observable<Employee>{
    return this.http.get<Employee> (this.mockUrl+'/'+id, headerOption);
  }

  //for deleting specific employee details with id
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.mockUrl+'/'+id, headerOption);

  }
  //for adding employees in employee database
  insertEmployee(emp: Employee): Observable<Employee>{
    return  this.http.post<Employee>(this.mockUrl, emp, headerOption);
  }
  //for update employee using id
  updateEmployee(emp: Employee): Observable<Employee>{
    return  this.http.put<Employee>(this.mockUrl+'/'+emp.id, emp, headerOption);
  }
}
