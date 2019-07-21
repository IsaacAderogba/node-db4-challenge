exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "Ingredient Name 1",
          ingredient_unit: "Ingredient Unit 1"
        },
        {
          ingredient_name: "Ingredient Name 2",
          ingredient_unit: "Ingredient Unit 2"
        }
      ]);
    });
};
