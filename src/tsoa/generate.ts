import { generateSpecAndRoutes } from "tsoa";

export default async function generate() {
    generateSpecAndRoutes({
        configuration: {
            entryFile: "./src/app.ts",
            noImplicitAdditionalProperties: "ignore",
            controllerPathGlobs: ["./src/controllers/*.ts"],
            routes: {
                routesDir: "./src/tsoa",
            },
            spec: {
                outputDirectory: "./src/tsoa",
                specVersion: 3,
            }
        }
    });
}