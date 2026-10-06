exports.getAvailableSeatsForUpdate = async (
    client,
    showId,
    showSeatIds
) => {
    const result = await client.query(
        `SELECT id, show_id, seat_id, price, status
         FROM show_seats
         WHERE show_id = $1
         AND id = ANY($2::int[])
         FOR UPDATE`,
        [showId, showSeatIds]
    );

    return result.rows;
};


exports.createBookingTransaction = async (
    client,
    userId,
    showId,
    totalAmount
) => {
    const result = await client.query(
        `INSERT INTO bookings
        (user_id, show_id, total_amount, status)
        VALUES ($1, $2, $3, 'PENDING')
        RETURNING *`,
        [userId, showId, totalAmount]
    );

    return result.rows[0];
};


exports.createBookingSeat = async (
    client,
    bookingId,
    showSeatId,
    price
) => {
    const result = await client.query(
        `INSERT INTO booking_seats
        (booking_id, show_seat_id, price)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [bookingId, showSeatId, price]
    );

    return result.rows[0];
};


exports.markSeatsBooked = async (
    client,
    showSeatIds
) => {
    const result = await client.query(
        `UPDATE show_seats
         SET status = 'BOOKED'
         WHERE id = ANY($1::int[])
         RETURNING *`,
        [showSeatIds]
    );

    return result.rows;
};