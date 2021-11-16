import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.service';
import { EmployeesModule } from '../employees.module';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  obj:Employee | undefined;
  constructor(public employeeService:EmployeeService, private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  createAndUpdate(currentEmployee: Employee){
    // console.log(currentEmployee);
    if(currentEmployee.id!=null){
      this.updateEmployee(currentEmployee);
      this.router.navigate(['/show']);
      
    }
    else{
      this.insertEmployee(currentEmployee);
      this.router.navigate(['/show']);
    }
  }

  insertEmployee(emp:Employee){
    this.employeeService.insertEmployee(emp).subscribe();
  }

  updateEmployee(emp:Employee){
    this.employeeService.updateEmployee(emp).subscribe();
  }

  clear(){
    this.employeeService.currentEmployee={
      id:null,
      firstname: '',
      lastname: '',
      designation: '',
      contact: null,
      address: ''
    }


   
  }



  
  // edit(emp){
  //   this.employeeService.currentEmployee = Object.assign({},emp);
  // }


}

export class Employee{
  id:number;
  firstname:string;
  lastname:string;
  designation:string;
  contact:number;
  address:string;

  constructor(id:number,firstname:string,lastname:string,designation:string,contact:342342,address:string){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
    this.designation=designation;
    this.contact=contact;
    this.address=address;
  }
}

