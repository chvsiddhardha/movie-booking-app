const express = require("express");

const router = express.Router();

const showController = require("../controllers/show.controller");

router.get("/", showController.getAllShows);

router.get("/:id", showController.getShowsById);

router.post("/", showController.createShow);

router.put("/:id", showController.updateShow);

router.delete("/:id", showController.deleteShow);

module.exports = router;