import { AppDataSource } from "../lib"
import generate from "../tsoa/generate";

beforeAll(async () => {
    await generate();
    await AppDataSource.initialize();
})

afterEach(async () => {
    const entities = AppDataSource.entityMetadatas;

    for (const entity of entities) {
        const repository = AppDataSource.getRepository(entity.name);
        await repository.clear();
    }
})