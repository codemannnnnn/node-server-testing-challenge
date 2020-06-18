const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db("users").del().where({ id });
}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}
