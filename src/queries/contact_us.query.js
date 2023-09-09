const {fetch, fetchOne} = require("../utils/pg");

const createQuery ="insert into contact(name, phone_number, email, message) values ($1, $2, $3, $4) returning*";

const findQuery = "select * from contact";

const findOneQuery = "select * from contact where id = ($1)"

const updateQuery = "update contact set name = ($1), phone_number = ($2), email = ($3), message = ($4) where id = ($5) returning*"

const removeQuery = "delete from contact where id = $1 returning*"

module.exports = {
  create: async (name, phone_number, email, message) =>
    await fetchOne(createQuery, name, phone_number, email, message),
  
  find: async () =>
    await fetch(findQuery),

  find_one: async (id) => 
    await fetchOne(findOneQuery, id),
    
  update: async (name, phone_number, email, message ,id) =>
    await fetchOne(updateQuery, name, phone_number, email, message, id),

  remove: async (id) =>
    await fetchOne(removeQuery, id)
};