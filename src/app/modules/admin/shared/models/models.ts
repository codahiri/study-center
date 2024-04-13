export interface StudentResponse extends StudentRequest {
	student_id: number;
	id: string;
}
export interface StudentRequest {
	first_name: string;
	last_name: string;
	age: number;
	email: string;
	major: string;
	gpa: number;
	enrollment_date: string;
	graduation_date: string;
	university_name: string;
}
