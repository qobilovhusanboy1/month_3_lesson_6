const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into gallery(url) values ($1) returning*";

const findQuery = "select * from gallery";

const findOneQuery = "select * from gallery where id = ($1)"

const removeQuery = "delete from gallery where id = $1 returning*"

module.exports = {
  create: async (url) =>
    await fetchOne(createQuery, url),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),
    
  remove: async (id) =>
    await fetchOne(removeQuery, id)
};