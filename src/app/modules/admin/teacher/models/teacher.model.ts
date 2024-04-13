export interface TeacherResponse extends TeacherRequest {
	id: string;
}

export interface TeacherRequest {
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}
