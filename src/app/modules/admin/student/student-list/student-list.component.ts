import { Component, OnInit } from "@angular/core";
import { StudentResponse } from "../../shared/models/models";
import { Observable } from "rxjs";
import { StudentService } from "../services/student.service";

@Component({
	selector: "app-student-list",
	templateUrl: "./student-list.component.html",
	styles: [``],
})
export class StudentListComponent implements OnInit {
	students$!: Observable<StudentResponse[]>;

	constructor(private $studentService: StudentService) {}

	ngOnInit(): void {
		this.getAllData();
	}

	private getAllData() {
		this.students$ = this.$studentService.getAll();
	}
	delete(id: string) {
		this.$studentService.delete(id).subscribe();
		this.getAllData();
	}
}
