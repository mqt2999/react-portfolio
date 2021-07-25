const router = require("express").Router();
const projectRoutes = require("./projects.js");

// Book routes
router.use("/projects", projectRoutes);

module.exports = router;