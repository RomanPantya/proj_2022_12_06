import { Router } from 'express';
import { createStudent, getOneStudent } from './student.service';

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

export const studentController = router;
