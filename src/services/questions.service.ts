import { QuestionCreateBody } from "../dto/question.dto";
import { Content, Post } from "../entities";
import { AppDataSource } from "../lib";

export default class QuestionsService {
    private repository = AppDataSource.getRepository(Post)

    getQuestions(): Promise<Post[]> {
        return this.repository.find();
    }

    async createQuestion(data: QuestionCreateBody, authorId: number) {
        const question = new Post();
        
        // Create content
        const content = new Content();
        content.text = data.content;
        content.post = question;
        await AppDataSource.getRepository(Content).save(content)
        
        question.latestContent = content;
        question.contentHistory.push(content);

        await this.repository
            .createQueryBuilder()
            .relation(Post, 'tags')
            .of(question)
            .add(data.tags)
        
        await this.repository
            .createQueryBuilder()
            .relation(Post, 'author')
            .of(question)
            .add(authorId)

        question.title = data.title;
        question.type = 'question';

        return this.repository.save(question);
    }
}