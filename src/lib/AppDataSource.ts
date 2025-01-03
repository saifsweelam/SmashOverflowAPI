import { DataSource } from "typeorm";
import { Photo } from "../entities/Photo";

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db/app.db",
    entities: [Photo],
    synchronize: true,
    logging: false,
});

export default AppDataSource;