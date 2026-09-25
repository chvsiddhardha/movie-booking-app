const movieService = require("../services/movie.service");


// GET ALL MOVIES
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();

        res.status(200).json({
            success: true,
            count: movies.length,
            movies: movies
        });

    } catch (error) {
        console.error("Error fetching movies:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch movies"
        });
    }
};


// GET MOVIE BY ID
exports.getMovieById = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await movieService.getMovieById(movieId);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            movie: movie
        });

    } catch (error) {
        console.error("Error fetching movie:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch movie"
        });
    }
};


// CREATE MOVIE
exports.createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);

        res.status(201).json({
            success: true,
            message: "Movie created successfully",
            movie: movie
        });

    } catch (error) {
        console.error("Error creating movie:", error.message);

        res.status(500).json({
            success: false,
            message: "Movie not created"
        });
    }
};


// UPDATE MOVIE
exports.updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await movieService.updateMovie(
            movieId,
            req.body
        );

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie updated successfully",
            movie: movie
        });

    } catch (error) {
        console.error("Error updating movie:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update movie"
        });
    }
};


// DELETE MOVIE
exports.deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await movieService.deleteMovie(movieId);

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Movie deleted successfully",
            movie: movie
        });

    } catch (error) {
        console.error("Error deleting movie:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete movie"
        });
    }
};