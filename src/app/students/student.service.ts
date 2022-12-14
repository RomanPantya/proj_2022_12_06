import { PoolClient } from 'pg';
import { CreateStudentDto } from '../../dto/create-student.dto';
import { UpdateStudentDto } from '../../dto/update-student.dto';

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

export async function removeStudent(
    connection: PoolClient,
    studentId: string,
) {
    const { rows } = await connection.query(`
    delete from students
    where id = $1
    returning *
  `, [studentId]);

    return rows;
}

export async function updateStudent(
    connection: PoolClient,
    studentId: string,
    changeData: UpdateStudentDto,
    // Partial<Omit<StudentEntity, 'id'>>,
) {
    const entries = Object.entries(changeData);
    entries.push(['id', studentId]);

    const { rows: [result] } = await connection.query(`
      update students
      set

      ${entries.slice(0, -1).map(([k], i) => {
        const dollar = `$${i + 1}`;

        return `${k} = ${dollar}`;
    }).join(', ')}

      where id = $${entries.length}
      returning *
    `, entries.map(([, v]) => v));

    return result;

    // const { rows: [result1] } = await connection.query(`
    // select * from students
    // where id = $1
    // `, [studentId]);

    // const { name: name1, email: email1 } = result1;
    // const { name = name1, email = email1 } = changeData;

    // const { rows: [result] } = await connection.query(`
    // update students
    // set
    // name = $1,
    // email = $2
    // where id = $3
    // returning *
    // `, [name, email, studentId]);

    // return result;
}
