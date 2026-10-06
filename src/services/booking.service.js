const bookingModel = require('../models/booking.model');

exports.getAllBookings=async()=>{
    return await bookingModel.getAllBokkings();
};

exports.getBookingsById=async(bookingId)=>{
    return await bookingModel.getBookingsById(bookingId);
};

exports.createBooking=async(showData)=>{
    return await bookingModel.createBooking(
        showData.user_id,
        showData.show_id,
        showData.total_amount,
        showData.price
    );
};

exports.updateBooking=async(bookingId,showData)=>{
    return await bookingModel.updateBooking(
        bookingId,
        showData.user_id,
        showData.show_id,
        showData.total_amount,
        showData.price
    );
};

exports.deleteBooking=async(bookingId)=>{
    return await bookingModel.deleteBooking(bookingId);
};
