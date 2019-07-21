/* eslint-disable require-atomic-updates */
const controller = require("./controllers");

module.exports = {
  validateId: async function(req, res, next) {
    const { id } = req.params;
    if (Number.isInteger(parseInt(id, 10))) {
      try {
        const ingredient = await controller.getIngredientById(id);
        if (ingredient) {
          req.ingredient = ingredient;
          next();
        } else {
          res
            .status(404)
            .json({
              message: `The Ingredient with Id of '${id}' does not exist`
            });
        }
      } catch (err) {
        next(err);
      }
    } else {
      res.status(400).json({ message: `The Id of '${id}' is not valid` });
    }
  }
};
