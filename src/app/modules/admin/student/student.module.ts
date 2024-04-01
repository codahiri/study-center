import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentComponent } from "./student.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { AddEditStudentComponent } from "./add-edit-student/add-edit-student.component";
// ng-zorro
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzTextareaCountComponent } from "ng-zorro-antd/input";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { StudentRoutingModule } from "./student-routing.module";

@NgModule({
	declarations: [
		StudentComponent,
		StudentListComponent,
		AddEditStudentComponent,
	],
	imports: [
		CommonModule,
		StudentRoutingModule,
		ReactiveFormsModule,
		NzTableModule,
		NzDividerModule,
		NzButtonModule,
		NzIconModule,
		NzFormModule,
		NzTextareaCountComponent,
		NzInputModule,
		NzSpaceModule,
	],
})
export class StudentModule {}
