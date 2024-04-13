import { Injectable } from "@angular/core";
import { CRUDService } from "../../shared/services/crud.service";
import { BaseService } from "../../shared/services/base.service";
import { StudentResponse } from "../../shared/models/models";
import { StudentRequest } from "../models/student.model";

@Injectable({
	providedIn: "root",
})
export class StudentService extends CRUDService<
	StudentResponse,
	StudentRequest
> {
	// Global
	// url = "https://mocki.io/v1/70ad7f4d-7e4d-4247-87c9-622206c2293c";

	// Local
	url = "http://localhost:3000/students";

	constructor(private $base: BaseService) {
		super($base);
	}
}
