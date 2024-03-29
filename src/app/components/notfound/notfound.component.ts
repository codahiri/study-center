import { Component } from "@angular/core";

@Component({
	selector: "app-notfound",
	template: `
		<p>Opps! Not found this page 🙄</p>
		<a [routerLink]="['']">Go back Home</a>
	`,
	styles: "",
})
export class NotfoundComponent {}
