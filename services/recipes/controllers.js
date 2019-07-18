const Recipes = require('./model');

module.exports = {
  getRecipes: async function() {
    return await Recipes.findRecipes();
  },
  getRecipeIngredients: async function(recipe_id) {
    return await Recipes.findRecipeIngredients(recipe_id);
  },
  getRecipeInstructions: async function(recipe_id) {
    return await Recipes.findRecipeInstructions(recipe_id);
  },
  getRecipeById: async function(recipe_id) {
    return await Recipes.findRecipeById(recipe_id);
  }
}