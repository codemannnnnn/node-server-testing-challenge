const supertest = require("supertest");
const server = require("./server.js");
const router = require("../users/user-router.js");
const db = require("../data/dbConfig.js");

describe("server.js", () => {
  describe("GET /", () => {
    it("should return a get request", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return api up", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });

  describe("POST /username", () => {
    it("should save the users info", () => {
      const name = "bilfbo";
      return supertest(server)
        .post("/name")
        .send(name)
        .then((res) => {
          expect(res.body.username).toBe(name);
        });
    });
  });
});
