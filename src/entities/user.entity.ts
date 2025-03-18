import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import Post from "./post.entity"
import Comment from "./comment.entity"
import Vote from "./vote.entity"

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  username!: string

  @Column()
  displayName!: string

  @Column({ unique: true })
  email!: string

  @Column({ nullable: true })
  password?: string

  @Column({ enum: ["user", "admin"], default: "user" })
  role!: "user" | "admin"

  @Column({ default: 0 })
  score!: number

  @Column({ nullable: true })
  googleId?: string

  @OneToMany(() => Post, post => post.author)
  posts!: Post[]

  @OneToMany(() => Comment, comment => comment.author)
  comments!: Comment[]  

  @OneToMany(() => Vote, vote => vote.author)
  votes!: Vote[]  
  
  get authType() {
    return this.googleId ? "google" : "local"
  }
}