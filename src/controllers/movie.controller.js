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