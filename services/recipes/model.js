const db = require("../../data/dbConfig");

module.exports = {
  findRecipes: function() {
    return db("recipes");
  },
  findRecipeIngredients: function(recipe_id) {
    return db
      .select("ingredient_name", "ingredient_unit", "quantity")
      .from("ingredients")
      .join(
        "recipe_instructions",
        "ingredients.id",
        "recipe_instructions.ingredients_id"
      )
      .where({ recipes_id: recipe_id });
  }
};
