import { Component, Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

export function ssnValidator(control: FormControl): { [key: string]: any } {
	const value: string = control.value || '';
	const valid = value.match(/^\d{9}$/);
	return valid ? null : { ssn: true };
}

@Directive({
	selector: '[ssn]',
	providers: [ { provide: NG_VALIDATORS, useValue: ssnValidator, multi: true } ]
})
export class SsnValidatorDirective {}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'template-validator';
}
