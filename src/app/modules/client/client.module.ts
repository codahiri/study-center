import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClietnRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./client.component";

@NgModule({
	declarations: [ClientComponent],
	imports: [CommonModule, ClietnRoutingModule],
})
export class ClientModule {}
