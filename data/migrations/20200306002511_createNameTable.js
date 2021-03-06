exports.up = function(knex) {
    return knex.schema.createTable("names", tbl => {
      tbl.increments("id");
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
  