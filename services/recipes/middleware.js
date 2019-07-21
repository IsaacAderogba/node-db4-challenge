/* eslint-disable require-atomic-updates */
const controller = require("./controllers");

module.exports = {
  validateRecipeId: async function(req, res, next) {
    const { id } = req.params;
    if (Number.isInteger(parseInt(id, 10))) {
      try {
        const recipe = await controller.getRecipeById(id);
        if(recipe) {
          req.recipe = recipe;
          next();
        } else {
          res
            .status(404)
            .json({ message: `The Recipe with Id of '${id}' does not exist` });
        }
      } catch (err) {
        next(err);
      }
    } else {
      res.status(400).json({ message: `The Id of '${id}' is not valid` });
    }
  }
}