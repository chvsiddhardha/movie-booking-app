const seatModel = require("../models/seat.model");

exports.getAllSeats = async () => {
    return await seatModel.getAllSeats();
};

exports.getSeatById = async (seatId) => {
    return await seatModel.getSeatById(seatId);
};

exports.createSeat = async (seatData) => {

    return await seatModel.createSeat(
        seatData.screen_id,
        seatData.seat_number,
        seatData.seat_type,
        seatData.price
    );
};

exports.updateSeat = async (seatId, seatData) => {

    return await seatModel.updateSeat(
        seatId,
        seatData.screen_id,
        seatData.seat_number,
        seatData.seat_type,
        seatData.price
    );
};

exports.deleteSeat = async (seatId) => {
    return await seatModel.deleteSeat(seatId);
};