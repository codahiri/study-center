import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class BaseService {
	constructor(private http: HttpClient) {}

	get<T>(url: string, params?: HttpParams) {
		return this.http.get<T>(url, { params });
	}

	post<T>(url: string, model?: any) {
		return this.http.post<T>(url, model);
	}

	put<T>(url: string, model?: any) {
		return this.http.put<T>(url, model);
	}

	delete<T>(url: string, body?: any) {
		return this.http.delete<T>(url, { body });
	}
}
