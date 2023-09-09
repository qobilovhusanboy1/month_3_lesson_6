const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into subscribe(email) values ($1) returning*";

const findQuery = "select * from subscribe";

const findOneQuery = "select * from subscribe where id = ($1)"

const updateQuery = "update subscribe set email = ($1) where id = ($2) returning*"

const removeQuery = "delete from subscribe where id = $1 returning*"

module.exports = {
  create: async (email) =>
    await fetchOne(createQuery,email),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),
    
  update: async (email, id) =>
    await fetchOne(updateQuery, email, id),

  remove: async (id) =>
    await fetchOne(removeQuery, id)
};
