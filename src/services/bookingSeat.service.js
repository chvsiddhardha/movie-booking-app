const bookingSeatModel = require("../models/bookingSeat.model");

exports.getAllBookingSeats = async () => {
    return bookingSeatModel.getAllBookingSeats();
};

exports.getBookingSeatById = async (bookingSeatId) => {
    return bookingSeatModel.getBookingSeatById(bookingSeatId);
};

exports.createBookingSeat = async (bookingSeatData) => {
    return bookingSeatModel.createBookingSeat(
        bookingSeatData.booking_id,
        bookingSeatData.show_seat_id,
        bookingSeatData.price
    );
};

exports.updateBookingSeat = async (bookingSeatId, bookingSeatData) => {
    return bookingSeatModel.updateBookingSeat(
        bookingSeatId,
        bookingSeatData.booking_id,
        bookingSeatData.show_seat_id,
        bookingSeatData.price
    );
};

exports.deleteBookingSeat = async (bookingSeatId) => {
    return bookingSeatModel.deleteBookingSeat(bookingSeatId);
};