import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
	{
		path: "",
		component: AdminComponent,
		children: [
			{
				path: "teacher",
				loadChildren: () =>
					import("./teacher/teacher.module").then((m) => m.TeacherModule),
			},
			{
				path: "student",
				loadChildren: () =>
					import("./student/student.module").then((m) => m.StudentModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
