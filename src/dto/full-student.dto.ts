import { IStudent } from '../entities/student.interface';

export class FullStudentDto implements IStudent {
    id!: number;

    name!: string;

    email!: string;
}
