const Ingredients = require('./model');

module.exports = {
  getIngredientById: async function(id) {
    return Ingredients.findIngredient(id);
  },
  getRecipesWithIngredient: async function(id) {
    return Ingredients.findRecipesByIngredient(id);
  }
}
