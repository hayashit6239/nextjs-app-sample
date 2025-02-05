const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    // jest.setup.js または jest.config.js の setupFilesAfterEnv に追加
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = createJestConfig(customJestConfig);
