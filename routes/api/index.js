const router = require("express").Router();

const transactionsRoutes = require("./transactions");


// routes
router.use("/transactions", transactionsRoutes);

module.exports = router;
