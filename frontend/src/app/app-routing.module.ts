import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterHouseComponent } from './register-house/register-house.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: `registerStudent`, component: RegisterStudentComponent},
  {path: `registerHouse`, component: RegisterHouseComponent},
  {path: `updateStudent`, component: UpdateStudentComponent},
  {path: `students`, component: StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
