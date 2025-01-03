import "reflect-metadata";
import { AppDataSource, ColorLog } from "./lib";
import { listen } from "./app";
import generate from "./tsoa/generate";

async function main() {
    if (process.env.NODE_ENV !== 'production') {
        await generate();
    }
    await AppDataSource.initialize();
    ColorLog("Data Source Initialized", "yellow", "italic");
    await listen(3000);
    ColorLog("Server listening on port 3000", "green", "bold");
}

main();