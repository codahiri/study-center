import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { StudentRequest, StudentResponse } from "../../shared/models/models";
import { StudentService } from "../services/student.service";

@Component({
	selector: "app-add-edit-student",
	templateUrl: "./add-edit-student.component.html",
	styleUrl: "./add-edit-student.component.less",
})
export class AddEditStudentComponent {
	form = this.fb.nonNullable.group({
		first_name: ["", Validators.required],
		last_name: ["", Validators.required],
		age: [0, Validators.required],
		email: ["", Validators.required],
		major: ["", Validators.required],
		gpa: [0, Validators.required],
		enrollment_date: ["", Validators.required],
		graduation_date: ["", Validators.required],
		university_name: ["", Validators.required],
	});

	get id() {
		return this.route.snapshot.params["id"];
	}
	constructor(
		private fb: FormBuilder,
		private $studentService: StudentService,
		private route: ActivatedRoute
	) {
		if (this.id) {
			this.$studentService.getById(this.id).subscribe((student) => {
				this.setFormValues(student);
			});
		}
	}

	private setFormValues(student: StudentResponse) {
		this.form.controls.first_name.setValue(student.first_name);
		this.form.controls.last_name.setValue(student.last_name);
		this.form.controls.age.setValue(student.age);
		this.form.controls.email.setValue(student.email);
		this.form.controls.major.setValue(student.major);
		this.form.controls.gpa.setValue(student.gpa);
		this.form.controls.enrollment_date.setValue(student.enrollment_date);
		this.form.controls.graduation_date.setValue(student.graduation_date);
		this.form.controls.university_name.setValue(student.university_name);
	}

	submit(): void {
		if (this.form.invalid) {
			this.checked();
			return;
		}
		const request: StudentRequest = this.form.getRawValue();
		this.$studentService.add(request).subscribe;
	}

	private checked() {
		Object.values(this.form.controls).forEach((control) => {
			if (control.invalid) {
				control.markAsDirty();
				control.updateValueAndValidity({ onlySelf: true });
			}
		});
		alert(`This form is ${this.form.status}`);
	}
	clear(e: MouseEvent): void {
		e.preventDefault();
		this.form.reset();
	}
}
