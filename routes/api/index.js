const router = require("express").Router();
const cruiseRoutes = require("./cruises");

// Cruise routes
router.use("/cruises", cruiseRoutes);

module.exports = router;
