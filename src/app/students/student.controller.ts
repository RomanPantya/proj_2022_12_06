import { Router } from 'express';
import {
    createStudent, getOneStudent, getAllStudents, removeStudent, updateStudent,
} from './student.service';

const router = Router();

router.post('/', async (req, res) => {
    const student = req.body;
    const result = await createStudent(req.db, student);

    res.json({
        message: 'Thats student was create',
        data: result,
    });
});

router.get('/:id', async (req, res) => {
    const { id: studentId } = req.params;
    const result = await getOneStudent(req.db, studentId);

    res.json({
        message: 'Thats your student',
        data: result,
    });
});

router.get('/', async (req, res) => {
    const result = await getAllStudents(req.db);

    res.json({
        message: 'Thats all students',
        data: result,
    });
});

router.delete('/:id', async (req, res) => {
    const { id: studentId } = req.params;
    const result = await removeStudent(req.db, studentId);

    res.json({
        message: 'Thats student was remove',
        data: result,
    });
});

router.put('/:id', async (req, res) => {
    const { id: studentId } = req.params;
    const changeData = req.body;

    if (!Object.entries(changeData).length) {
        res.json('Not have data to change');
        return;
    }

    const result = await updateStudent(req.db, studentId, changeData);

    res.json({
        message: 'This student was update',
        data: result,
    });
});

export const studentController = router;
