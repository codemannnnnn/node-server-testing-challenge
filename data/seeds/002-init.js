exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "cody" },
        { username: "bailey" },
        { username: "dalton" },
        { username: "kade" },
        { username: "megan" },
      ]);
    });
};
