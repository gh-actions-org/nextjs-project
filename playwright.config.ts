import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  reporter: [
    ["html", { open: "never" }],
    ["json", { outputFile: "test-results.json" }],
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
  },
});
