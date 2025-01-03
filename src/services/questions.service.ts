import { QuestionCreateBody } from "../dto/question.dto";
import { Question } from "../entities";
import { AppDataSource } from "../lib";

export default class QuestionsService {
    private repository = AppDataSource.getRepository(Question)

    getQuestions(): Promise<Question[]> {
        return this.repository.find();
    }

    createQuestion(data: QuestionCreateBody): Promise<Question> {
        const question = new Question();
        question.title = data.title;
        question.body = data.body;
        question.tags = data.tags;

        return this.repository.save(question);
    }
}