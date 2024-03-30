import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./modules/admin/admin.component";

describe("AppComponent", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule.forRoot([
					{ path: "", component: AppComponent },
					{ path: "admin", component: AdminComponent },
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
