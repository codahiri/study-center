import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: "root",
})
export abstract class CRUDService<TResponse, TRequest> {
	abstract url: string;

	constructor(private _base: BaseService) {}

	getAll() {
		return this._base.get<TResponse[]>(this.url);
	}

	add(model: TRequest) {
		return this._base.post<TResponse>(this.url, model);
	}

	getById(id: string) {
		return this._base.get<TResponse>(`${this.url}/${id}`);
	}

	edit(id: string, model: TRequest) {
		return this._base.put<TResponse>(`${this.url}/${id}`, model);
	}

	delete(id: string) {
		return this._base.delete<TResponse>(`${this.url}/${id}`);
	}
}
