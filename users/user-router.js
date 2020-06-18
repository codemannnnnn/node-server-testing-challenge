const express = require("express");
const router = express();
const db = require("./user-model.js");
const dB = require("../data/dbConfig.js");

router.get("/", (req, res) => {
  res.json("this is from the router");
});

router.get("/name", (req, res) => {
  db.getAll()
    .then((e) => res.json({ Data: e }))
    .catch((err) => console.log(err));
});

router.post("/new", (req, res) => {
  const body = req.body;
  dB("users")
    .insert(body)
    .then((ids) => {
      const id = ids[0];
      dB("users")
        .where({ id })
        .first()
        .then((e) => {
          res.json(e);
        });
    });
});

router.post("/name", (req, res) => {
  db.insert(req.body)
    .then((e) => res.json(e))
    .catch((err) => res.json(err));
});
//
// router.get("/names", (req, res) => {
//   dB("users")
//     .select("users.id", "users.username")
//     .then((e) => res.json(e))
//     .catch((err) => console.log(err));
// });

module.exports = router;
