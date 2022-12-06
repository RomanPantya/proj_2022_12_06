import { OmitType } from '@nestjs/mapped-types';
import { FullStudentDto } from './full-student.dto';

export class CreateStudentDto extends OmitType(FullStudentDto, ['id']) {}
