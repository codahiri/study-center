export interface TeacherResponse {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

export interface TeacherRequest {
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

export interface StudentResponse {
	student_id: number;
	first_name: string;
	last_name: string;
	age: number;
	email: string;
	major: string;
	gpa: number;
	enrollment_date: string;
	graduation_date: string;
	university_name: string;
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
