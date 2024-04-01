import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
	TeacherResponse,
	TeacherRequest,
	StudentResponse,
	StudentRequest,
} from "../models/models";

@Injectable({
	providedIn: "root",
})
export class AdminService {
	// local
	// urlT = "http://localhost:3000/teachers";
	// Global
	urlT = "https://jsonplaceholder.typicode.com/users";
	// Local
	urlS = "http://localhost:3000/students";
	// Global
	// urlS = "https://mocki.io/v1/70ad7f4d-7e4d-4247-87c9-622206c2293c";

	constructor(private http: HttpClient) {}

	/**
	 *
	 * @returns
	 */
	getAll() {
		return this.http.get<TeacherResponse[]>(this.urlT);
	}
	getAllStudents() {
		return this.http.get<StudentResponse[]>(this.urlS);
	}
	/**
	 *
	 * @param model
	 * @returns
	 */
	add(model: TeacherRequest) {
		return this.http.post<TeacherResponse>(this.urlT, model);
	}
	addStudents(model: StudentRequest) {
		return this.http.post<StudentResponse>(this.urlS, model);
	}
	/**
	 *
	 * @param id
	 * @returns
	 */
	getById(id: string) {
		return this.http.get<TeacherResponse>(`${this.urlT}/${id}`);
	}
	getByIdStudent(id: string) {
		return this.http.get<StudentResponse>(`${this.urlS}/${id}`);
	}
	/**
	 *
	 */
	edit(id: string, model: TeacherRequest) {
		return this.http.put<TeacherResponse>(`${this.urlT}/${id}`, model);
	}
	editStudent(id: string, model: StudentRequest) {
		return this.http.patch<StudentResponse>(`${this.urlS}/${id}`, model);
	}
	/**
	 *
	 * @param id
	 * @returns
	 */
	delete(id: string) {
		return this.http.delete<TeacherResponse>(`${this.urlT}/${id}`);
	}
	deleteStudent(id: string) {
		return this.http.delete<StudentResponse>(`${this.urlS}/${id}`);
	}
}
