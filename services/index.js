const express = require('express');
const router = express.Router();
const recipesService = require('./recipes');
const ingredientsServices = require('./ingredients');

router.get("/api", (req, res) => {
  res.status(200).json({ message: "Api is up and running."});
});

router.use("/api", recipesService);
router.use("/api", ingredientsServices);

// catches all db related errors
router.use((err, req, res) => {
  res.status(500).json({ message: err.message, stack: err.stack })
});

module.exports = router;
