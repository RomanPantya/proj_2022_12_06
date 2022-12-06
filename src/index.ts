import { generateServer } from './app/generate-server';
import { studentController } from './app/students/student.controller';
import { connectToPg } from './common/connect-to-pg';

async function main() {
    const app = generateServer();

    const connection = await connectToPg();

    app.use((req, _, next) => {
        req.db = connection;
        next();
    });

    app.use('/students', studentController);

    const port = 3000;
    app.listen(port, () => {
        console.info(`Server started on port ${port}`);
    });
}

main();
