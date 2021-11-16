import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  
  temp:string|null;
  empid:number=0;
  detailsObj:employeeDetails | undefined;
  constructor(private employeeService:EmployeeService, private activeRoute:ActivatedRoute) {
    console.log("Reached");
   //constructor injection
    //extract rout parameters
    //snapshot method //observable method
    this.temp = activeRoute.snapshot.paramMap.get("id");
    
    if(this.temp!=null)
      this.empid = parseInt(this.temp);
    this.getEmployeeDetails(this.empid);
    // this.removeDetails();
  }

  ngOnInit(): void {
    console.log("Reached");
  }



  getEmployeeDetails(id:number){
    this.employeeService.getEmployeeDetails(id).subscribe(
      (data:employeeDetails) =>{
        this.detailsObj=data;
        
      }
    );
  }

}


class employeeDetails{
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
