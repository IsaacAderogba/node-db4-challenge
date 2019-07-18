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
  },
  findRecipeInstructions: function(recipe_id) {
    return db
      .select("ingredient_name", "ingredient_unit", "quantity", "step_number")
      .from("recipes")
      .join(
        "recipe_instructions",
        "recipes.id",
        "recipe_instructions.recipes_id"
      )
      .join(
        "ingredients",
        "ingredients.id",
        "recipe_instructions.ingredients_id"
      )
      .where({ recipes_id: recipe_id })
      .orderBy("step_number", "asc");

    /*SELECT
  ingredient_name,
  ingredient_unit,
  quantity,
  step_number
FROM recipes
JOIN recipe_instructions
ON recipes.id = recipe_instructions.recipes_id
JOIN ingredients
ON ingredients.id = recipe_instructions.ingredients_id
ORDER BY step_number ASC 
*/
  }
};
