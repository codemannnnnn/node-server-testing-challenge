const express = require("express");
const server = express();
const Hobbits = require("../users/user-model.js");
const userRouter = require("../users/user-router.js");

server.use(express.json());

server.use("/api", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/name", (req, res) => {
  Hobbits.insert(req.body)
    .then((e) => res.json(e))
    .catch((err) => res.json(err));
});

module.exports = server;
