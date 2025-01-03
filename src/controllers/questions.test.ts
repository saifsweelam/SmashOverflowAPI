import request from 'supertest';
import app from '../app';
import { AppDataSource } from '../lib';
import { Question } from '../entities';

describe('Questions Controller', () => {
    describe('GET /questions', () => {
        it('should return 200 OK and an array in the response body', async () => {
            const response = await request(app).get('/questions');
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
        });

        it('should return an array of questions in the response body', async () => {
            const question = new Question();
            question.title = 'What is the meaning of life?';
            question.body = 'I am having an existential crisis. Please help.';
            question.tags = ['philosophy', 'existentialism'];
            await AppDataSource.getRepository(Question).save(question);

            const response = await request(app).get('/questions');
            expect(response.status).toEqual(200);
            expect(response.body).toBeInstanceOf(Array);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('title');
            expect(response.body[0]).toHaveProperty('body');
            expect(response.body[0]).toHaveProperty('tags');
            expect(response.body[0].tags).toBeInstanceOf(Array);
        });
    });

    describe('POST /questions', () => {
        const validQuestionBody = {
            title: 'What is the meaning of life?',
            body: 'I am having an existential crisis. Please help.',
            tags: ['philosophy', 'existentialism'],
        };

        it('should return 201 Created and the question in the response body', async () => {
            const response = await request(app)
                .post('/questions')
                .send(validQuestionBody);
            expect(response.status).toEqual(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.title).toEqual(validQuestionBody.title);
            expect(response.body.body).toEqual(validQuestionBody.body);
            expect(response.body.tags).toEqual(validQuestionBody.tags);
        });

        it('should return 400 Bad Request if the request body is missing title field', async () => {
            const response = await request(app)
                .post('/questions')
                .send({ ...validQuestionBody, title: undefined });
            expect(response.status).toEqual(400);
        });

        it('should return 400 Bad Request if the request body is title field is empty', async () => {
            const response = await request(app)
                .post('/questions')
                .send({ ...validQuestionBody, title: '' });
            expect(response.status).toEqual(400);
        });
    });
});