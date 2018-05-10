const router = require("express").Router();
const cruiseCunardRoutes = require("./cunard-cruises");
const cruiseHollandAmericaRoutes = require("./holland-america-cruises");
const cruiseRoyalCaribbeanRoutes = require("./royal-caribbean-cruises");
const cruisePrincessRoutes = require("./princess-cruises");
const cruisePORoutes = require("./po-cruises");

// Cruise routes
router.use("/cunard-cruises", cruiseCunardRoutes);
router.use("/holland-america-cruises", cruiseHollandAmericaRoutes);
router.use("/royal-caribbean-cruises", cruiseRoyalCaribbeanRoutes);
router.use("/princess-cruises", cruisePrincessRoutes);
router.use("/po-cruises", cruisePORoutes);

module.exports = router;
