exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        { recipes_id: 1, ingredients_id: 1, quantity: 2.2, step_number: 1 },
        { recipes_id: 1, ingredients_id: 2, quantity: 1, step_number: 2 }
      ]);
    });
};
