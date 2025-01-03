import "reflect-metadata";
import { AppDataSource, ColorLog } from "./lib";
import { listen } from "./app";

async function main() {
    await AppDataSource.initialize();
    ColorLog("yellow", "italic", "Data Source Initialized");
    await listen(3000);
    ColorLog("green", "bold", "Server listening on port 3000");
}

main();