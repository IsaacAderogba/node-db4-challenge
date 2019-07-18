const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateId } = require("./middleware");

router.get("/ingredients/:id", validateId, (req, res, next) => {
  try {
    res.status(200).json(req.ingredient);
  } catch (err) {
    next(err);
  }
});

router.get("/ingredients/:id/recipes", validateId, async (req, res, next) => {
  try {
    const recipes = await controller.getRecipesWithIngredient(req.params.id);

    const recipesWithIngredient = {
      ...req.ingredient,
      recipes
    };

    res.status(200).json(recipesWithIngredient);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
