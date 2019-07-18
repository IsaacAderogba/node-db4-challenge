const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await controller.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
