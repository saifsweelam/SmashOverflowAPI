import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Post from "./post.entity"
import User from "./user.entity"

@Entity()
export default class Vote {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ enum: ["upVote", "downVote"] })
  value!: "upVote" | "downVote";

  @ManyToOne(() => Post, post => post.votes)
  post!: Post

  @ManyToOne(() => User, user => user.votes)
  author!: Post
}