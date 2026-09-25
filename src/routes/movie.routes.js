const express = require("express");

const router = express.Router();

const movieController = require("../controllers/movie.controller");


// GET ALL MOVIES
router.get("/", movieController.getAllMovies);


// GET MOVIE BY ID
router.get("/:id", movieController.getMovieById);


// CREATE MOVIE
router.post("/", movieController.createMovie);


// UPDATE MOVIE
router.put("/:id", movieController.updateMovie);


// DELETE MOVIE
router.delete("/:id", movieController.deleteMovie);


module.exports = router;