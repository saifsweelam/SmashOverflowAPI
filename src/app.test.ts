import request from 'supertest';
import app from './app';

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello World');
    });
});