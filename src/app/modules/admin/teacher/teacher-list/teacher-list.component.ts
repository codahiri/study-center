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
	/**
	 *
	 */
	ngOnInit(): void {
		this.getAllData();
	}

	private getAllData() {
		this.$teacherService.getAll().subscribe((v) => {
			this.teachers = v;
		});
	}

	delete(id: string) {
		this.$teacherService.delete(id).subscribe();
		this.getAllData();
	}
}
