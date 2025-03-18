import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Post from "./post.entity"

@Entity()
export default class Content {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;
  
  @ManyToOne(() => Post, post => post.contentHistory)
  post!: Post;
  
  @OneToOne(() => Post, post => post.latestContent, { nullable: true })
  currentPost?: Post;
}