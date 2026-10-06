const bookingService = require("../services/booking.service");

// GET ALL BOOKINGS
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingService.getAllBookings();

        res.status(200).json({
            success: true,
            bookings: bookings
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings"
        });
    }
};


// GET BOOKING BY ID
exports.getBookingById = async (req, res) => {
    try {
        const bookingId = req.params.id;

        const booking =
            await bookingService.getBookingById(bookingId);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            booking: booking
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch booking"
        });
    }
};


// CREATE BOOKING
exports.createBooking = async (req, res) => {
    try {
        const booking =
            await bookingService.createBooking(req.body);

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking: booking
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create booking"
        });
    }
};


// UPDATE BOOKING
exports.updateBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;

        const booking =
            await bookingService.updateBooking(
                bookingId,
                req.body
            );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            booking: booking
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update booking"
        });
    }
};


// DELETE BOOKING
exports.deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;

        const booking =
            await bookingService.deleteBooking(bookingId);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            booking: booking
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete booking"
        });
    }
};