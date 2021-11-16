import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpDetailsComponent } from './modules/employees/emp-details/emp-details.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';

const routes: Routes = [
  {path: 'add', component: EmployeeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'show', component: EmployeeListComponent},
  {path :'details/:id', component: EmpDetailsComponent},
  {path :'' , redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
