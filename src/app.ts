import express from 'express';
import { RegisterRoutes } from './tsoa/routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

RegisterRoutes(app);

export const listen = (port: number) => {
    return new Promise<void>((resolve) => {
        app.listen(port, () => {
            resolve();
        });
    });
};

export default app;
