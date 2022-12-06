import { Router } from 'express';
import { createStudent } from './student.service';

const router = Router();

router.post('/', async (req, res) => {
    const student = req.body;
    const result = await createStudent(req.db, student);

    res.json({
        message: 'Thats student was create',
        data: result,
    });
});

export const studentController = router;
