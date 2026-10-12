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


exports.getSeatsByShowId = async (showId) => {
    return showSeatModel.getSeatsByShowId(showId);
};

exports.getPricePreview=async(showId,showSeatIds)=>{
    const seats=await showSeatModel.getSelectedSeatsForPreview(showId,showSeatIds);

    if(seats.length!==showSeatIds.length){
        throw new Error("Some selected seats do not belong to this show");
    }

    const unavailabaleSeats=seats.filter(
        (seat)=>seat.status!=="AVAILABLE"
    );
    if(unavailabaleSeats.length>0){
        throw new Error("Some selected seats are not available");
    }

    const totalAmount=seats.reduce(
        (total,seat)=>total+Number(seat.price),
        0
    );
    return{
        seats,
        seatCount:seats.length,
        totalAmount
    }
}