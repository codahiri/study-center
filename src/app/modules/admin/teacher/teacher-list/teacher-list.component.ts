import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/services";
import { TeacherResponse } from "../../models/models";
import { Observable } from "rxjs";

@Component({
	selector: "app-teacher-list",
	templateUrl: "./teacher-list.component.html",
	styleUrl: "./teacher-list.component.less",
})
export class TeacherListComponent implements OnInit {
	teachers$!: Observable<TeacherResponse[]>;

	constructor(private $teacherService: AdminService) {}
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
