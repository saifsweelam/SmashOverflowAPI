import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Question {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    body!: string;

    @Column({ type: "simple-array" })
    tags!: string[];
}