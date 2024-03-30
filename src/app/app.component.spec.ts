import { TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./modules/admin/admin.component";
import { ClientComponent } from "./modules/client/client.component";

describe("AppComponent", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule.forRoot([
					{ path: "", component: AppComponent },
					{ path: "admin", component: AdminComponent },
					{ path: "client", component: ClientComponent },
				]),
			],
		});
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'study-center'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("study-center");
	});
});
