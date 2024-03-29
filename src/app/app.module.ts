import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

registerLocaleData(en);

@NgModule({
	declarations: [AppComponent, NotfoundComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		provideAnimationsAsync(),
		provideHttpClient(),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
