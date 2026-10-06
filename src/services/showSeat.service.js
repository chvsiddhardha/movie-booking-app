const showSeatModel=require("../models/showSeat.model");

exports.getAllShowSeats=async()=>{
    return await showSeatModel.getAllShowSeats();
};

exports.getShowSeatById=async(showSeatId)=>{
    return await showSeatModel.getShowSeatById(showSeatId);
};

exports.createShowSeat=async(showSeatData)=>{
    return await showSeatModel.createShow(
        showSeatData.show_id,
        showSeatData.seat_id,
        showSeatData.price,
        showSeatData.status
    );
};

exports.updateShowSeat=async(showSeatId, showSeatData)=>{
    return await showSeatModel.updateShow(
        showSeatId,
        showSeatData.show_id,
        showSeatData.seat_id,
        showSeatData.price,
        showSeatData.status
    );
};
