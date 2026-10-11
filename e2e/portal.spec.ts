import { expect, test } from "@playwright/test";

test("home portal shows the source snapshot and no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "State 2566" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "State rankings" })).toBeVisible();
  const width = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
  expect(width.document).toBeLessThanOrEqual(width.viewport);
});

test("all ten leaderboard routes render independently", async ({ page }) => {
  test.setTimeout(120_000);
  const routes = [
    ["personal-power", "Personal Power"], ["furnace-level", "Furnace Level"], ["kill-count", "Kill Count"],
    ["exploration-stage", "Exploration Stage"], ["hero-power", "Hero Power"], ["total-pet-power", "Total Pet Power"],
    ["heros-total-power", "Hero's Total Power"], ["total-expert-power", "Total Expert Power"], ["labyrinth", "The Labyrinth"],
    ["island-prosperity", "Island Prosperity"],
  ];
  await page.goto("/rankings/");
  await expect(page.locator(".ranking-category-card")).toHaveCount(10);
  for (const [slug, title] of routes) {
    await page.goto(`/rankings/${slug}/`);
    await expect(page.getByRole("heading", { name: title, level: 1 })).toBeVisible();
  }
});

test("search, sort and pagination include only supplied player rows", async ({ page }) => {
  await page.goto("/rankings/personal-power/");
  const search = page.getByRole("searchbox", { name: "Search player or alliance" });
  const tableRows = page.locator(".ranking-table-desktop tbody tr");
  await search.fill("IMF");
  await expect(tableRows).toHaveCount(1);
  await expect(tableRows.first()).toContainText("SquirrelTCo");
  await search.fill("");
  await page.getByLabel("Sort by").selectOption("metric-asc");
  await expect(tableRows.first()).toContainText("#125");
  await page.getByLabel("Sort by").selectOption("rank");
  await page.getByRole("button", { name: "Next page" }).click();
  await expect(tableRows).toHaveCount(2);
  await expect(tableRows.nth(1)).toContainText("#125");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".ranking-cards-mobile")).toBeVisible();
  const width = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
  expect(width.document).toBeLessThanOrEqual(width.viewport);
});

test("alliance directory caps the public list at five", async ({ page }) => {
  await page.goto("/alliances/");
  await expect(page.getByRole("heading", { name: "Top 5 Alliances", level: 1 })).toBeVisible();
  await expect(page.locator(".alliance-podium .alliance-card")).toHaveCount(3);
  await expect(page.locator(".alliance-table-desktop tbody tr")).toHaveCount(2);
  await expect(page.locator(".alliance-table-desktop")).not.toContainText("#6");
});

test("calendar views switch while keeping the honest empty state", async ({ page }) => {
  await page.goto("/events/");
  await page.getByRole("tab", { name: "Agenda" }).click();
  await expect(page.getByRole("tab", { name: "Agenda" })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(".calendar-empty:visible")).toContainText("Agenda view");
  await expect(page.locator(".calendar-empty:visible")).toContainText("No events announced yet");
});

test("theme switch works and unknown routes return a useful 404", async ({ page }) => {
  await page.goto("/");
  const themeButton = page.locator("[data-theme-toggle]");
  await themeButton.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "white");
  const response = await page.goto("/not-a-state-page/");
  expect(response?.status()).toBe(404);
  await page.goto("/404.html");
  await expect(page.getByText("This page could not be found.")).toBeVisible();
});
