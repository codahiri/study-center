import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/services";
import { StudentResponse } from "../../models/models";
import { Observable } from "rxjs";

@Component({
	selector: "app-student-list",
	templateUrl: "./student-list.component.html",
	styles: [``],
})
export class StudentListComponent implements OnInit {
	students$!: Observable<StudentResponse[]>;

	constructor(private $studentService: AdminService) {}

	ngOnInit(): void {
		this.students$ = this.$studentService.getAllStudents();
	}
}
