exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id");
  table.varchar("name");
  table.varchar("email");
  table.varchar("password");
  table.integer("cpf");
  table.varchar("phone");
  table.varchar("avatar").nullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("notes");