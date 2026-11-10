const request = require("supertest");
const app = require("./app");

describe("Node.js application", () => {
    test("Homepage should return successful response", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("CI/CD deployment successful");
    });

    test("Health endpoint should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });
});
