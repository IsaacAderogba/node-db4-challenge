exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table.text("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table.text("ingredient_name", 128).notNullable();
      table.text("ingredient_unit", 128).notNullable();
    })
    .createTable("recipe_instructions", table => {
      table.increments();
      table
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      table.float("quantity").notNullable();
      table.integer("step_number").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
