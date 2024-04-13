import { Injectable } from "@angular/core";
import {
	TeacherResponse,
	TeacherRequest,
} from "../../teacher/models/teacher.model";
import { CRUDService } from "../../shared/services/crud.service";
import { BaseService } from "../../shared/services/base.service";

@Injectable({
	providedIn: "root",
})
export class TeacherService extends CRUDService<
	TeacherResponse,
	TeacherRequest
> {
	// local
	// url = "http://localhost:3000/teachers";

	// Global
	url = "https://jsonplaceholder.typicode.com/users";

	constructor(private $base: BaseService) {
		super($base);
	}
}
