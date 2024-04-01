import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from "./student-list/student-list.component";
import { AddEditStudentComponent } from "./add-edit-student/add-edit-student.component";

const routes: Routes = [
	{
		path: "",
		component: StudentListComponent,
		title: "Student page",
	},
	{
		path: "add",
		component: AddEditStudentComponent,
		title: "Add-Edit page",
	},
	{
		path: "edit/:id",
		component: AddEditStudentComponent,
		title: "Add-Edit page",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StudentRoutingModule {}
