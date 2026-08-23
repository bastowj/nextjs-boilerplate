import type { Config } from "jest";

// A local standalone build contains its own package.json, which otherwise
// collides with the repository manifest while Jest scans for modules.
const modulePathIgnorePatterns = ["<rootDir>/.next/"];

const config: Config = {
  modulePathIgnorePatterns,
  projects: [
    {
      displayName: "node",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/**/__tests__/**/*.test.ts"],
      moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
      modulePathIgnorePatterns,
    },
    {
      displayName: "jsdom",
      preset: "ts-jest",
      testEnvironment: "jest-environment-jsdom",
      testMatch: ["<rootDir>/src/**/__tests__/**/*.test.tsx"],
      moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
      modulePathIgnorePatterns,
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    },
  ],
};

export default config;
