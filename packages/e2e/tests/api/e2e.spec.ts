import { test, expect } from "@playwright/test";

test.describe("API Endpoint Tests", () => {
  test("GET /users returns an array", async ({ request }) => {
    const response = await request.get("/users");
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test("POST /users creates a new user", async ({ request }) => {
    const payload = { name: "Bob", email: "bob@example.com" };
    const response = await request.post("/users", { data: payload });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.name).toBe(payload.name);
    expect(data.email).toBe(payload.email);
  });

  test("GET /posts returns an array", async ({ request }) => {
    const response = await request.get("/posts");
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test("POST /posts creates a new user", async ({ request }) => {
    const payload = { title: "API Post", content: "Content from API test" };
    const response = await request.post("/users", { data: payload });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.title).toBe(payload.title);
    expect(data.content).toBe(payload.content);
  });
});
