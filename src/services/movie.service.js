const movieModel = require("../models/movie.model");


// GET ALL MOVIES
exports.getAllMovies = async () => {
    return await movieModel.getAllMovies();
};


// GET MOVIE BY ID
exports.getMovieById = async (movieId) => {
    return await movieModel.getMovieById(movieId);
};


// CREATE MOVIE
exports.createMovie = async (movieData) => {
    return await movieModel.createMovie(
        movieData.title,
        movieData.description,
        movieData.language,
        movieData.duration,
        movieData.genre,
        movieData.release_date,
        movieData.poster_url
    );
};


// UPDATE MOVIE
exports.updateMovie = async (movieId, movieData) => {
    return await movieModel.updateMovie(
        movieId,
        movieData.title,
        movieData.description,
        movieData.language,
        movieData.duration,
        movieData.genre,
        movieData.release_date,
        movieData.poster_url
    );
};


// DELETE MOVIE
exports.deleteMovie = async (movieId) => {
    return await movieModel.deleteMovie(movieId);
};