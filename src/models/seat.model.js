const { pool } = require("../config/database");

exports.getAllSeats = async () => {

    const result = await pool.query(
        `SELECT * FROM seats ORDER BY id`
    );

    return result.rows;
};


exports.getSeatById = async (seatId) => {

    const result = await pool.query(
        `SELECT * FROM seats
         WHERE id = $1`,
        [seatId]
    );

    return result.rows[0];
};


exports.createSeat = async (
    screen_id,
    seat_number,
    seat_type,
    price
) => {

    const result = await pool.query(
        `INSERT INTO seats
        (screen_id, seat_number, seat_type, price)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [
            screen_id,
            seat_number,
            seat_type,
            price
        ]
    );

    return result.rows[0];
};


exports.updateSeat = async (
    seatId,
    screen_id,
    seat_number,
    seat_type,
    price
) => {

    const result = await pool.query(
        `UPDATE seats
         SET screen_id = $1,
             seat_number = $2,
             seat_type = $3,
             price = $4
         WHERE id = $5
         RETURNING *`,
        [
            screen_id,
            seat_number,
            seat_type,
            price,
            seatId
        ]
    );

    return result.rows[0];
};


exports.deleteSeat = async (seatId) => {

    const result = await pool.query(
        `DELETE FROM seats
         WHERE id = $1
         RETURNING *`,
        [seatId]
    );

    return result.rows[0];
};