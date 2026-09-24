const {pool} =require("../config/database");

exports.getAllMovies =async(req,res)=>{
    const result=await pool.query(
        `SELECT * FROM movies ORDER BY id`
    );
    res.json(result.rows);
};
exports.getAllMoviesById =async (req,res)=>{
    try{
        const movieId = req.params.id;
        const result=await pool.query(
            `SELECT * FROM movies
            WHERE id=$1`,
            [movieId]
        );
        res.json(result.rows[0]);
    }
    catch(error){
        res.json({
            success:false,
            message:"Movie not found"
        });
    }
};
exports.createMovie = async (req, res) => {
    try {
        const {
            title,
            description,
            language,
            duration,
            genre,
            release_date,
            poster_url
        } = req.body;

        const result = await pool.query(
            `INSERT INTO movies
            (title, description, language, duration, genre, release_date, poster_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [
                title,
                description,
                language,
                duration,
                genre,
                release_date,
                poster_url
            ]
        );

        res.status(201).json({
            success: true,
            message: "Movie created",
            movie: result.rows[0]
        });

    } catch (error) {
        console.error("Error creating movie:", error.message);

        res.status(500).json({
            success: false,
            message: "Movie not created"
        });
    }
};
exports.updateMovie=async(req,res)=>{
    try{
        const{
            title,
            description,
            language,
            duration,
            genre,
            release_date,
            poster_url
        }=req.body;
        const result=await pool.query(
            `UPDATE movies
            SET title=$1,
                description=$2,
                language=$3,
                duration=$4,
                genre=$5,
                release_date=$6,
                poster_url=$7
            WHERE id=$8
            RETURNING *`,
            [
                title,
                description,
                language,
                duration,
                genre,
                release_date,
                poster_url
            ]
        );
        if(result.rows.length===0){
            return res.json({
                success:false,
                message:"Movie not found"
            });
        }
        res.json({
            success:true,
            message:"Movie updated successfully",
            movie:result.rows[0]
        });
    }
    catch(error){
        console.error("Error updating movie:",error.message);
        res.json({
            success:false,
            message:"Failed to update movie"
        });
    }
}
exports.deleteMovie=async (req,res)=>{
    try{
        const movieId=Number(req.params.id);
        const result=await pool.query(
            `DELETE FROM movies
            WHERE id=$1
            RETURNING *`,
            [movieId]
        );
        if(result.rows.length===0){
            return res.json({
                success:false,
                message:"Movie not found"
            });
        }
        res.json({
            success:true,
            message:"Movie deleted successfully"
        });
    }
    catch(error){
        console.error("Error deleting movie:",error.message);
        res.json({
            success:false,
            message:"Failed to delete movie"
        });
    }
};