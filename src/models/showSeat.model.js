const {pool}=require("../config/database");

exports.getAllShowSeats=async()=>{
    const result=await pool.query(
        `SELECT * FROM show_seats ORDER BY id`
    );
    return result.rows;
};

exports.getShowSeatById=async(showSeatId)=>{
    const result=await pool.query(
        `SELECT * FROM show_seats
        WHERE id=$1`
    );
    return result.rows[0];
};

exports.createShow=async(
    show_id,
    seat_id,
    price,
    status
)=>{
    const result=await pool.query(
        `INSERT INTO show_seats
        (show_id,seat_id,price,status)
        VALUES($1,$2,$3,$4)
        RETURNING *`,
        [show_id,seat_id,price,status]
    );
    return result.rows[0];
};

exports.updateShow=async(
    showSeatId,
    show_id,
    seat_id,
    price,
    status
)=>{
    const result=await pool.query(
        `UPDATE show_seats
        SET show_id=$1, seat_id=$2, price=$3, status=$4
        WHERE id=$5
        RETURNING *`,
        [show_id,seat_id,price,status,showSeatId]
    );
    return result.rows[0];
};

exports.deleteShowSeat=async(showSeatId)=>{
    const result=await pool.query(
        `DELETE FROM show_seats
        WHERE id=$1`,
        [showSeatId]
    );
    return result.rows[0];
};


exports.getSeatsByShowId = async (showId) => {
    const result = await pool.query(
        `SELECT
            ss.id AS show_seat_id,
            s.seat_number,
            s.seat_type,
            ss.price,
            ss.status
         FROM show_seats AS ss
         JOIN seats AS s
            ON ss.seat_id = s.id
         WHERE ss.show_id = $1
         ORDER BY s.seat_number`,
        [showId]
    );

    return result.rows;
};

exports.getSelectedSeatsForPreview = async (showId, showSeatIds) => {
    const result = await pool.query(
        `SELECT
            ss.id AS show_seat_id,
            s.seat_number,
            s.seat_type,
            ss.price,
            ss.status
         FROM show_seats AS ss
         JOIN seats AS s
            ON ss.seat_id = s.id
         WHERE ss.show_id = $1
           AND ss.id = ANY($2::int[])
         ORDER BY s.seat_number`,
        [showId, showSeatIds]
    );

    return result.rows;
};