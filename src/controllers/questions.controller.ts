import { Body, Controller, Get, Middlewares, Post as PostMethod, Route } from "tsoa";
import { Post } from "../entities";
import QuestionsService from "../services/questions.service";
import { QuestionCreateBody } from "../dto/question.dto";
import { validateMiddleware } from "../middlewares";

@Route("questions")
export class QuestionsController extends Controller {
    private questionsService = new QuestionsService();

    @Get()
    public async getQuestions(): Promise<Post[]> {
        return this.questionsService.getQuestions();
    }

    @PostMethod()
    @Middlewares([ validateMiddleware("body", QuestionCreateBody) ])
    public async createQuestion(
        @Body() questionCreateBody: QuestionCreateBody
    ): Promise<Post> {
        this.setStatus(201);
        return this.questionsService.createQuestion(questionCreateBody, 1);
    }
}