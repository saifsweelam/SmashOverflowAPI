import "reflect-metadata";
import { AppDataSource, ColorLog } from "./lib";
import { listen } from "./app";

async function main() {
    await AppDataSource.initialize();
    ColorLog("Data Source Initialized", "yellow", "italic");
    await listen(3000);
    ColorLog("Server listening on port 3000", "green", "bold");
}

main();