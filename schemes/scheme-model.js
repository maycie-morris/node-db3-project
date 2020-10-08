const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  remove,
};

const find = () => {
  return db("schemes");
}

const findById = (id) => {
  return db("schemes").where({ id }).first();
}

const findSteps = (id) => {
  return db("steps").where({ id }).first();
}

const add = (data) => {
  return db("schemes")
    .insert(data, "id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

const remove = (id) => {
  return db("schemes").where({ id }).del();
}