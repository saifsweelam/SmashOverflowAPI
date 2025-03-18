import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Post from "./post.entity"
import User from "./user.entity"

@Entity()
export default class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @ManyToOne(() => Post, post => post.comments)
  post!: Post;

  @ManyToOne(() => User, user => user.comments)
  author!: User;
}