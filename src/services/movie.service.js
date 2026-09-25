const movieModel = require("../models/movie.model");

exports.getAllMovies = async () => {
    return await movieModel.getAllMovies();
};

exports.getMovieById = async (movieId) => {
    return await movieModel.getMovieById(movieId);
};

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

exports.deleteMovie = async (movieId) => {
    return await movieModel.deleteMovie(movieId);
};