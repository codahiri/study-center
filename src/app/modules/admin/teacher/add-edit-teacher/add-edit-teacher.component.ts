import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { TeacherService } from "../services/services.service";
import { TeacherRequest, TeacherResponse } from "../models/teacher.model";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-add-edit-teacher",
	templateUrl: "./add-edit-teacher.component.html",
	styleUrls: ["./add-edit-teacher.component.less"],
})
export class AddEditTeacherComponent {
	/**
	 *
	 */
	form = this.fb.nonNullable.group({
		name: ["", Validators.required],
		username: ["", Validators.required],
		email: ["", Validators.required],
		phone: ["", Validators.required],
		website: ["", Validators.required],
	});

	get id() {
		return this.route.snapshot.params["id"];
	}
	get isEdit() {
		return this.id;
	}

	constructor(
		private fb: FormBuilder,
		private $teacherService: TeacherService,
		private route: ActivatedRoute
	) {
		if (this.id) {
			this.$teacherService.getById(this.isEdit).subscribe((teacher) => {
				this.setFormValues(teacher);
			});
		}
	}

	/**
	 *
	 * @param model
	 */
	setFormValues(model: TeacherResponse) {
		this.form.controls.name.setValue(model.name);
		this.form.controls.username.setValue(model.username);
		this.form.controls.email.setValue(model.email);
		this.form.controls.phone.setValue(model.phone);
		this.form.controls.website.setValue(model.website);
	}

	/**
	 *
	 * @returns
	 */
	submit(): void {
		if (this.form.invalid) {
			this.checked();
			return;
		}

		const request: TeacherRequest = this.form.getRawValue();
		if (this.isEdit) {
			this.$teacherService.edit(this.id, request).subscribe();
			return;
		}
		this.$teacherService.add(request).subscribe();
	}

	/**
	 *
	 */
	private checked() {
		Object.values(this.form.controls).forEach((control) => {
			if (control.invalid) {
				control.markAsDirty();
				control.updateValueAndValidity({ onlySelf: true });
			}
		});
		alert(`This form is ${this.form.status}`);
	}

	/**
	 *
	 * @param e
	 */
	clear(e: MouseEvent): void {
		e.preventDefault();
		this.form.reset();
	}
}
