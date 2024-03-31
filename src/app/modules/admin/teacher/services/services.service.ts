import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TeacherRequest, TeacherResponse } from "../models/teacher.model";

@Injectable({
	providedIn: "root",
})
export class TeacherService {
	// local
	url = "http://localhost:3000/teachers";
	// global
	// url = "https://jsonplaceholder.typicode.com/users"

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
		return this.http.post<TeacherResponse>(this.url, model);
	}
	/**
	 *
	 * @param id
	 * @returns
	 */
	getById(id: string) {
		return this.http.get<TeacherResponse>(`${this.url}/${id}`);
	}
	/**
	 *
	 */
	edit(id: string, model: TeacherRequest) {
		return this.http.put<TeacherResponse>(`${this.url}/${id}`, model);
	}
	/**
	 *
	 * @param id
	 * @returns
	 */
	delete(id: string) {
		return this.http.delete<TeacherResponse>(`${this.url}/${id}`);
	}
}
