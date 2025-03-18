import { Length } from "class-validator";

export class QuestionCreateBody {
    @Length(1, 128)
    title!: string;

    content!: string;

    tags!: number[];
}