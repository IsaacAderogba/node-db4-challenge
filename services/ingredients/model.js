const db = require("../../data/dbConfig");

module.exports = {
  findIngredient: function(ingredient_id) {
    return db("ingredients")
      .where({ id: ingredient_id })
      .first();
  },
  findRecipesByIngredient: function(ingredients_id) {
    return db
      .select("recipe_name")
      .from("recipes")
      .join(
        "recipe_instructions",
        "recipe_instructions.recipes_id",
        "recipes.id"
      )
      .where({ingredients_id});
  }
};
