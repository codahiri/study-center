import { Component, OnInit } from "@angular/core";
import { TeacherService } from "../services/services.service";
import { TeacherResponse } from "../models/teacher.model";

@Component({
	selector: "app-teacher-list",
	templateUrl: "./teacher-list.component.html",
	styleUrl: "./teacher-list.component.less",
})
export class TeacherListComponent implements OnInit {
	teachers: TeacherResponse[] = [];

	constructor(private $teacherService: TeacherService) {}
	ngOnInit(): void {
		this.$teacherService.getAll().subscribe((v) => {
			this.teachers = v;
		});
	}
}
