import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'students',component:StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CoursesComponent,StudentsComponent]