import { IStudent } from './student.interface';

export class StudentEntity implements IStudent {
    id!: number;

    name!: string;

    email!: string;
}
