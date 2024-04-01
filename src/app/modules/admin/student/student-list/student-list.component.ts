import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/services";
import { StudentResponse } from "../../models/models";

@Component({
	selector: "app-student-list",
	templateUrl: "./student-list.component.html",
	styleUrl: "./student-list.component.less",
})
export class StudentListComponent implements OnInit {
	students: StudentResponse[] = [];

	constructor(private $studentService: AdminService) {}

	ngOnInit(): void {
		this.$studentService.getAllStudents().subscribe((v) => {
			this.students = v;
		});
	}
}
