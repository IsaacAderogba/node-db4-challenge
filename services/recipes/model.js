const db = require("../../data/dbConfig");

module.exports = {
  findRecipes: function() {
    return db('recipes');
  }
}