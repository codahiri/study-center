import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeacherRequest, TeacherResponse } from "../models/teacher.model";

@Injectable({
	providedIn: "root",
})
export class TeacherService {
	url = "http://localhost:3000/teachers";

	constructor(private http: HttpClient) {}

	/**
	 *
	 * @returns
	 */
	getAll() {
		return this.http.get<TeacherResponse[]>(this.url);
	}
	/**
	 *
	 * @param model
	 * @returns
	 */
	add(model: TeacherRequest) {
		return this.http.post(this.url, model);
	}
}
