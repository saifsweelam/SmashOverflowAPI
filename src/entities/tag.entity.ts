import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import Post from "./post.entity";

@Entity()
export default class Tag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  color!: string;

  @ManyToMany(() => Post, post => post.tags)
  posts!: Post[]
}