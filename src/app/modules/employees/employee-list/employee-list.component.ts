import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../employee/employee.component';
import { EmployeesModule } from '../employees.module';
import { ActivatedRoute, Router } from '@angular/router'; 
import { EmpDetailsComponent } from '../emp-details/emp-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  query="";
  public searchFilter: any = '';
  allEmployee: Employee[] | undefined;

  
  constructor(private employeeService:EmployeeService, private router: Router) {
  }
  getAllEmployee(){
    this.employeeService.getAllEmlpoyees().subscribe(
      (data:Employee[]) =>{
        this.allEmployee=data;
      }
    );
  }

 

  ngOnInit(): void {
    this.getAllEmployee();
  }

  deleteEmployee(id:number){
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (data: Employee) =>{
        this.getAllEmployee();
      }
    );
  }

  edit(emp){
    this.router.navigate(['/add']);
    this.employeeService.currentEmployee = Object.assign({},emp);
    
  }

  


}
