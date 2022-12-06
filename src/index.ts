import express from 'express';
import { studentController } from './app/users/student.controller';

const app = express();

const port = 3000;

app.use('/students', studentController);

app.listen(port, () => {
    console.info(`Server started on port ${port}`);
});
