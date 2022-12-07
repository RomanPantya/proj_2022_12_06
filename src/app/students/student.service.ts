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

    return result as { id: number };
}

export async function getOneStudent(
    connection: PoolClient,
    studentId: string,
) {
    const { rows } = await connection.query(`
    select * from students
    where id = $1
    `, [studentId]);

    return rows;
}

export async function getAllStudents(
    connection: PoolClient,
) {
    const { rows } = await connection.query(`
  select * from students
  `);

    return rows;
}
