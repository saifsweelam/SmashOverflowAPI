import { DataSource } from "typeorm";
import { Content, Post, Tag, User, Vote, Comment } from "../entities";

const env = process.env.NODE_ENV || "development";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: env === 'test' ? "./db/test.db" : "./db/app.db",
    entities: [Post, User, Vote, Comment, Tag, Content],
    synchronize: true,
    logging: false,
});

export default AppDataSource;