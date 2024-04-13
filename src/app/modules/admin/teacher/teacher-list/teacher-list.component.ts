import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TeacherService } from "../services/teacher.service";
import { TeacherResponse } from "../models/teacher.model";

@Component({
	selector: "app-teacher-list",
	templateUrl: "./teacher-list.component.html",
	styleUrl: "./teacher-list.component.less",
})
export class TeacherListComponent implements OnInit {
	teachers$!: Observable<TeacherResponse[]>;

	constructor(private $teacherService: TeacherService) {}
	/**
	 *
	 */
	ngOnInit(): void {
		this.getAllData();
	}

	private getAllData() {
		this.teachers$ = this.$teacherService.getAll();
	}

	delete(id: string) {
		this.$teacherService.delete(id).subscribe();
		this.getAllData();
	}
}
