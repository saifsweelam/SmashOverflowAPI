import { Body, Controller, Get, Middlewares, Post, Route } from "tsoa";
import { Question } from "../entities";
import QuestionsService from "../services/questions.service";
import { QuestionCreateBody } from "../dto/question.dto";
import { validateMiddleware } from "../middlewares";

@Route("questions")
export class QuestionsController extends Controller {
    private questionsService = new QuestionsService();

    @Get()
    public async getQuestions(): Promise<Question[]> {
        return this.questionsService.getQuestions();
    }

    @Post()
    @Middlewares([ validateMiddleware("body", QuestionCreateBody) ])
    public async createQuestion(
        @Body() questionCreateBody: QuestionCreateBody
    ): Promise<Question> {
        this.setStatus(201);
        return this.questionsService.createQuestion(questionCreateBody);
    }
}