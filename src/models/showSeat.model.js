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

