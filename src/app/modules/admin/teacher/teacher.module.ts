import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherComponent } from "./teacher.component";
import { AddEditTeacherComponent } from "./add-edit-teacher/add-edit-teacher.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
	declarations: [
		TeacherComponent,
		AddEditTeacherComponent,
		TeacherListComponent,
	],
	imports: [
		CommonModule,
		TeacherRoutingModule,
		NzTableModule,
		NzDividerModule,
		NzButtonModule,
		NzIconModule,
	],
})
export class TeacherModule {}
