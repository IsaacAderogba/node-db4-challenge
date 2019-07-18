const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateRecipeId } = require("./middleware");

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await controller.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get(
  "/recipes/:id/shoppingList",
  validateRecipeId,
  async (req, res, next) => {
    try {
      const shoppingList = await controller.getRecipeIngredients(req.params.id);

      const recipeWithList = {
        ...req.recipe,
        shoppingList
      };

      res.status(200).json(recipeWithList);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/recipes/:id/instructions",
  validateRecipeId,
  async (req, res, next) => {
    try {
      const instructions = await controller.getRecipeInstructions(
        req.params.id
      );

      const recipeWithInstructions = {
        ...req.recipe,
        instructions
      };

      res.status(200).json(recipeWithInstructions);
    } catch (err) {
      next(err);
    }
  }
);

router.get("/recipes/:id", validateRecipeId, async (req, res, next) => {
  try {
    const recipe = await controller.getRecipeById(req.params.id);

    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
