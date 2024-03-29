import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
	declarations: [AdminComponent],
	imports: [
		CommonModule,
		AdminRoutingModule,
		NzLayoutModule,
		NzMenuModule,
		NzBreadCrumbModule,
		NzInputModule,
		NzIconModule,
	],
})
export class AdminModule {}
