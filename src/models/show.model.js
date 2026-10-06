const {pool} =require('../config/database');

exports.getAllShows=async()=>{
    const result=await pool.query(
        `SELECT * FROM shows ORDER BY id`
    );
    return result.rows;
};

exports.getShowById=async(showId)=>{
    const result=await pool.query(
        `SELECT * FROM shows where id=$1`,
        [showId]
    );
    return result.rows[0];
};

exports.createShow=async(
    movie_id,
    screen_id,
    show_date,
    start_time,
    end_time
)=>{
    const result=await pool.query(
        `INSERT INTO shows
        (movie_id,screen_id,show_date,start_time,end_time)
        VALUES($1,$2,$3,$4,$5)
        RETURNING *`,
        [movie_id, screen_id, show_date, start_time, end_time]
    );
    return result.rows[0];
};

exports.updateShow=async(
    movie_id,
    screen_id,
    show_date,
    start_time,
    end_time
)=>{
    const result=await pool.query(
        `UPDATE shows
        SET movie_id=$1
            screen_id=$2
            show_date=$3
            start_time=$4
            end_time=$5
        WHERE id=$6
        RETURNING *`,
        [movie_id, screen_id, show_date, start_time, end_time]
    );
    return result.rows[0];
};
        
exports.deleteShow=async(showId)=>{
    const result=await pool.query(
        `DELETE FROM shows WHERE id=$1`,
        [showId]
    );
    return result.rowCount>0;
};