/** @type { import("jest").Config } */
const config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: [
      "./src/test-utils/setup.ts"
    ],
    "modulePathIgnorePatterns": [
      "./src/tsoa"
    ]
};

export default config;