import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { TeacherService } from "../services/services.service";
import { TeacherRequest } from "../models/teacher.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-add-edit-teacher",
	templateUrl: "./add-edit-teacher.component.html",
	styleUrls: ["./add-edit-teacher.component.less"],
})
export class AddEditTeacherComponent {
	form = this.fb.nonNullable.group({
		name: ["", Validators.required],
		username: ["", Validators.required],
		email: ["", Validators.required],
		phone: ["", Validators.required],
		website: ["", Validators.required],
	});
	constructor(
		private fb: FormBuilder,
		private $teacherService: TeacherService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	add(): void {
		if (this.form.valid) {
			const request: TeacherRequest = this.form.getRawValue();
			this.$teacherService.add(request).subscribe((response) => {
				if (response) {
					this.router.navigate(["../"], { relativeTo: this.route });
				}
			});
		} else {
			Object.values(this.form.controls).forEach((control) => {
				if (control.invalid) {
					control.markAsDirty();
					control.updateValueAndValidity({ onlySelf: true });
				}
			});
			alert(`This form is ${this.form.status}`);
		}
	}

	clear(e: MouseEvent): void {
		e.preventDefault();
		this.form.reset();
	}
}
