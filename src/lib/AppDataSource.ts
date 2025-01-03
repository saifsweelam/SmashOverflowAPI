import { DataSource } from "typeorm";
import { Question } from "../entities";

const env = process.env.NODE_ENV || "development";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: env === 'test' ? "./db/test.db" : "./db/app.db",
    entities: [Question],
    synchronize: true,
    logging: false,
});

export default AppDataSource;