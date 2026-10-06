const { pool } = require("../config/database");


// GET ALL SCREENS
exports.getAllScreens = async () => {
    const result = await pool.query(
        `SELECT * FROM screens
         ORDER BY id`
    );

    return result.rows;
};


// GET SCREEN BY ID
exports.getScreenById = async (screenId) => {
    const result = await pool.query(
        `SELECT * FROM screens
         WHERE id = $1`,
        [screenId]
    );

    return result.rows[0];
};


// CREATE SCREEN
exports.createScreen = async (
    theatre_id,
    name,
    total_seats
) => {
    const result = await pool.query(
        `INSERT INTO screens
        (theatre_id, name, total_seats)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [
            theatre_id,
            name,
            total_seats
        ]
    );

    return result.rows[0];
};


// UPDATE SCREEN
exports.updateScreen = async (
    screenId,
    theatre_id,
    name,
    total_seats
) => {
    const result = await pool.query(
        `UPDATE screens
         SET theatre_id = $1,
             name = $2,
             total_seats = $3
         WHERE id = $4
         RETURNING *`,
        [
            theatre_id,
            name,
            total_seats,
            screenId
        ]
    );

    return result.rows[0];
};


// DELETE SCREEN
exports.deleteScreen = async (screenId) => {
    const result = await pool.query(
        `DELETE FROM screens
         WHERE id = $1
         RETURNING *`,
        [screenId]
    );

    return result.rows[0];
};