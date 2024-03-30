import { Component } from "@angular/core";
import {
	AbstractControl,
	AsyncValidatorFn,
	FormControl,
	FormGroup,
	NonNullableFormBuilder,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from "@angular/forms";
import { Observable, Observer } from "rxjs";

@Component({
	selector: "app-add-edit-teacher",
	templateUrl: "./add-edit-teacher.component.html",
	styleUrls: ["./add-edit-teacher.component.less"],
})
export class AddEditTeacherComponent {
	validateForm: FormGroup<{
		userName: FormControl<string>;
		email: FormControl<string>;
		password: FormControl<string>;
		confirm: FormControl<string>;
		comment: FormControl<string>;
	}>;

	submitForm(): void {
		console.log("submit", this.validateForm.value);
	}

	resetForm(e: MouseEvent): void {
		e.preventDefault();
		this.validateForm.reset();
	}

	validateConfirmPassword(): void {
		setTimeout(() =>
			this.validateForm.controls.confirm.updateValueAndValidity()
		);
	}

	userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
		new Observable((observer: Observer<ValidationErrors | null>) => {
			setTimeout(() => {
				if (control.value === "JasonWood") {
					// you have to return `{error: true}` to mark it as an error event
					observer.next({ error: true, duplicated: true });
				} else {
					observer.next(null);
				}
				observer.complete();
			}, 1000);
		});

	confirmValidator: ValidatorFn = (control: AbstractControl) => {
		if (!control.value) {
			return { error: true, required: true };
		} else if (control.value !== this.validateForm.controls.password.value) {
			return { confirm: true, error: true };
		}
		return {};
	};

	constructor(private fb: NonNullableFormBuilder) {
		this.validateForm = this.fb.group({
			userName: ["", [Validators.required], [this.userNameAsyncValidator]],
			email: ["", [Validators.email, Validators.required]],
			password: ["", [Validators.required]],
			confirm: ["", [this.confirmValidator]],
			comment: ["", [Validators.required]],
		});
	}
}
