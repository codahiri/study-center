import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditTeacherComponent } from "./add-edit-teacher/add-edit-teacher.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";

const routes: Routes = [
	{
		path: "",
		component: TeacherListComponent,
		title: "Teacher page",
	},
	{
		path: "add",
		component: AddEditTeacherComponent,
	},
	{
		path: "edit/:id",
		component: AddEditTeacherComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TeacherRoutingModule {}
