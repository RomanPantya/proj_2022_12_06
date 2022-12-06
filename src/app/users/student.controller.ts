import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    res.send('Hello Hello Hello');
});

export const studentController = router;
