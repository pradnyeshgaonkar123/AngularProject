import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../shared/employee.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './employee-list/search-filter.pipe';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    SearchFilterPipe,
    EmpDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[EmployeeComponent, EmployeeListComponent, EmpDetailsComponent],
  providers:[EmployeeService]

})
export class EmployeesModule { }
