const bookingSeatService = require("../services/bookingSeat.service");

exports.getAllBookingSeats = async (req, res) => {
    try {
        const bookingSeats =
            await bookingSeatService.getAllBookingSeats();

        res.status(200).json({
            success: true,
            bookingSeats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getBookingSeatById = async (req, res) => {
    try {
        const bookingSeat =
            await bookingSeatService.getBookingSeatById(
                Number(req.params.id)
            );

        if (!bookingSeat) {
            return res.status(404).json({
                success: false,
                message: "Booking seat not found"
            });
        }

        res.status(200).json({
            success: true,
            bookingSeat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.createBookingSeat = async (req, res) => {
    try {
        const bookingSeat =
            await bookingSeatService.createBookingSeat(req.body);

        res.status(201).json({
            success: true,
            message: "Booking seat created successfully",
            bookingSeat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateBookingSeat = async (req, res) => {
    try {
        const bookingSeat =
            await bookingSeatService.updateBookingSeat(
                Number(req.params.id),
                req.body
            );

        if (!bookingSeat) {
            return res.status(404).json({
                success: false,
                message: "Booking seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking seat updated successfully",
            bookingSeat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteBookingSeat = async (req, res) => {
    try {
        const bookingSeat =
            await bookingSeatService.deleteBookingSeat(
                Number(req.params.id)
            );

        if (!bookingSeat) {
            return res.status(404).json({
                success: false,
                message: "Booking seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking seat deleted successfully",
            bookingSeat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};