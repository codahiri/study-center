import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeacherResponse } from "../models/teacher.model";

@Injectable({
	providedIn: "root",
})
export class TeacherService {
	url = "https://jsonplaceholder.typicode.com/users";

	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get<TeacherResponse[]>(this.url);
	}
}
