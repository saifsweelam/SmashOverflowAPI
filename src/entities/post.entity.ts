import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import User from "./user.entity"
import Tag from "./tag.entity"
import Content from "./content.entity"
import Comment from "./comment.entity"
import Vote from "./vote.entity"

@Entity()
export default class Post {
    // Main Columns
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({enum: ["question", "answer"], default: "question"})
    type!: "question" | "answer";

    @Column()
    title!: string;

    @Column({ default: 0 })
    voteCount!: number;

    @Column({ default: false })
    accepted?: boolean;

    @Column({ enum: ["open", "closed"], default: "open" })
    status!: string;

    // Relations
    @ManyToOne(() => User, user => user.posts)
    author!: User;
    
    @OneToOne(() => Content, content => content.currentPost)
    latestContent!: Content

    @OneToMany(() => Content, content => content.post)
    contentHistory!: Content[]

    @ManyToOne(() => Post, post => post.answers, { nullable: true })
    question?: Post;

    @OneToMany(() => Post, post => post.question)
    answers!: Post[]

    @ManyToMany(() => Tag, tag => tag.posts)
    tags!: Tag[]

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]

    @OneToMany(() => Vote, vote => vote.post)
    votes!: Vote[]

    // Timestamps
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}