const {pool}=require("../config/database");

exports.getAllMovies=async()=>{
    const result=await pool.query(
        `SELECT * FROM movies ORDER BY id`
    );
    return result.rows;
};

exports.getMoviesById=async(movieId)=>{
    const result=await pool.query(
        `SELECT * FROM movies
        WHERE id=$1`,
        [movieId]
    );
    return result.rows[0];
};

exports.createMovie=async(
    title,
    description,
    language,
    duration,
    genre,
    release_date,
    poster_url
)=>{
    const result=await pool.query(
        `INSERT INTO movies
        (title,description,language,duration,genre,release_date,poster_url)
        VALUES ($1,$2,$3,$4,$5,$6,$7)
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
    return result.rows[0];
};

exports.updateMovie = async (
    movieId,
    title,
    description,
    language,
    duration,
    genre,
    release_date,
    poster_url
) => {
    const result = await pool.query(
        `UPDATE movies
         SET title = $1,
             description = $2,
             language = $3,
             duration = $4,
             genre = $5,
             release_date = $6,
             poster_url = $7
         WHERE id = $8
         RETURNING *`,
        [
            title,
            description,
            language,
            duration,
            genre,
            release_date,
            poster_url,
            movieId
        ]
    );

    return result.rows[0];
};


exports.deleteMovie = async (movieId) => {
    const result = await pool.query(
        `DELETE FROM movies
         WHERE id = $1
         RETURNING *`,
        [movieId]
    );

    return result.rows[0];
};