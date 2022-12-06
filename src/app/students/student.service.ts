import { PoolClient } from 'pg';
import { CreateStudentDto } from '../../dto/create-student.dto';

export async function createStudent(
    connection: PoolClient,
    student: CreateStudentDto,
    // Omit<StudentEntity, 'id'>
) {
    const { rows: [result] } = await connection.query(`
    insert into students(
    name,
    email
    )
    values(
      $1,
      $2
    )
    returning *
    `, [student.name, student.email]);

    return result;
}
