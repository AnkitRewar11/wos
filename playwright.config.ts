import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 90_000,
  reporter: "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL: "http://localhost:4173",
    launchOptions: process.env.PLAYWRIGHT_CHROME ? { executablePath: process.env.PLAYWRIGHT_CHROME } : undefined,
  },
  webServer: {
    command: "python3 -m http.server 4173 --directory out",
    url: "http://localhost:4173/",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
