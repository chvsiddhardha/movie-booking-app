const express = require("express");

const router = express.Router();

const screenController = require("../controllers/screen.controller");


// GET ALL SCREENS
router.get("/", screenController.getAllScreens);


// GET SCREEN BY ID
router.get("/:id", screenController.getScreenById);


// CREATE SCREEN
router.post("/", screenController.createScreen);


// UPDATE SCREEN
router.put("/:id", screenController.updateScreen);


// DELETE SCREEN
router.delete("/:id", screenController.deleteScreen);


module.exports = router;