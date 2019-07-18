const Recipes = require('./model');

module.exports = {
  getRecipes: async function() {
    return await Recipes.findRecipes();
  }
}