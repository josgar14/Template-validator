import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent, SsnValidatorDirective } from './app.component';

@NgModule({
	declarations: [ AppComponent, SsnValidatorDirective ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
