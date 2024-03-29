import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from "./components/notfound/notfound.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "client",
		pathMatch: "full",
	},
	{
		path: "admin",
		loadChildren: () =>
			import("./modules/admin/admin.module").then((m) => m.AdminModule),
		title: "Admin page",
	},
	{
		path: "client",
		loadChildren: () =>
			import("./modules/client/client.module").then((m) => m.ClientModule),
	},
	{
		path: "**",
		component: NotfoundComponent,
		title: "NotFound",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
