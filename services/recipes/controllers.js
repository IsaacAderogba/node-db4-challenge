const Recipes = require('./model');

module.exports = {
  getRecipes: async function() {
    return await Recipes.findRecipes();
  },
  getRecipeIngredients: async function(recipe_id) {
    return await Recipes.findRecipeIngredients(recipe_id);
  }
}