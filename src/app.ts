import express from 'express';
import { RegisterRoutes } from './tsoa/routes';
import { apiReference } from '@scalar/express-api-reference';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

RegisterRoutes(app);

app.get('/docs/openapi.json', (req, res) => {
    res.sendFile('public/docs/swagger.json', { root: '.' });
})

app.get('/docs', apiReference({
    spec: {
        url: '/docs/openapi.json'
    },
}));

export const listen = (port: number) => {
    return new Promise<void>((resolve) => {
        app.listen(port, () => {
            resolve();
        });
    });
};

export default app;
