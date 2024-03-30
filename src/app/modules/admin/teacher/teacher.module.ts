import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherComponent } from "./teacher.component";
import { AddEditTeacherComponent } from "./add-edit-teacher/add-edit-teacher.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzTextareaCountComponent } from "ng-zorro-antd/input";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
	declarations: [
		TeacherComponent,
		AddEditTeacherComponent,
		TeacherListComponent,
	],
	imports: [
		CommonModule,
		TeacherRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NzTableModule,
		NzDividerModule,
		NzButtonModule,
		NzIconModule,
		NzFormModule,
		NzTextareaCountComponent,
		NzInputModule,
	],
})
export class TeacherModule {}
