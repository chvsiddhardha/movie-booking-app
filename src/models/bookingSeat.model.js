const { pool } = require("../config/database");

exports.getAllBookingSeats = async () => {
    const result = await pool.query(
        `SELECT * FROM booking_seats ORDER BY id`
    );

    return result.rows;
};

exports.getBookingSeatById = async (bookingSeatId) => {
    const result = await pool.query(
        `SELECT * FROM booking_seats
         WHERE id = $1`,
        [bookingSeatId]
    );

    return result.rows[0];
};

exports.createBookingSeat = async (
    booking_id,
    show_seat_id,
    price
) => {
    const result = await pool.query(
        `INSERT INTO booking_seats
        (booking_id, show_seat_id, price)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [booking_id, show_seat_id, price]
    );

    return result.rows[0];
};

exports.updateBookingSeat = async (
    bookingSeatId,
    booking_id,
    show_seat_id,
    price
) => {
    const result = await pool.query(
        `UPDATE booking_seats
         SET booking_id = $1,
             show_seat_id = $2,
             price = $3
         WHERE id = $4
         RETURNING *`,
        [booking_id, show_seat_id, price, bookingSeatId]
    );

    return result.rows[0];
};

exports.deleteBookingSeat = async (bookingSeatId) => {
    const result = await pool.query(
        `DELETE FROM booking_seats
         WHERE id = $1
         RETURNING *`,
        [bookingSeatId]
    );

    return result.rows[0];
};