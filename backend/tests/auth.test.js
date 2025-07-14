const request = require("supertest");
const app = require("../app"); // if you exported app

describe("Auth", () => {
  it("should return 400 if no fields provided", async () => {
    const res = await request(app).post("/api/auth/signup").send({});
    expect(res.statusCode).toBe(400);
  });
});
