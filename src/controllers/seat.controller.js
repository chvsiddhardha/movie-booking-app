const seatService = require("../services/seat.service");


// GET ALL SEATS
exports.getAllSeats = async (req, res) => {
    try {

        const seats = await seatService.getAllSeats();

        res.status(200).json({
            success: true,
            seats: seats
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch all seats"
        });
    }
};


// GET SEAT BY ID
exports.getSeatById = async (req, res) => {
    try {

        const seatId = req.params.id;

        const seat = await seatService.getSeatById(seatId);

        if (!seat) {
            return res.status(404).json({
                success: false,
                message: "Seat not found"
            });
        }

        res.status(200).json({
            success: true,
            seat: seat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch seat"
        });
    }
};


// CREATE SEAT
exports.createSeat = async (req, res) => {
    try {

        const seat = await seatService.createSeat(req.body);

        res.status(201).json({
            success: true,
            message: "Seat created successfully",
            seat: seat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create seat"
        });
    }
};


// UPDATE SEAT
exports.updateSeat = async (req, res) => {
    try {

        const seatId = req.params.id;

        const seat = await seatService.updateSeat(
            seatId,
            req.body
        );

        if (!seat) {
            return res.status(404).json({
                success: false,
                message: "Seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Seat updated successfully",
            seat: seat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update seat"
        });
    }
};


// DELETE SEAT
exports.deleteSeat = async (req, res) => {
    try {

        const seatId = req.params.id;

        const seat = await seatService.deleteSeat(seatId);

        if (!seat) {
            return res.status(404).json({
                success: false,
                message: "Seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Seat deleted successfully",
            seat: seat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete seat"
        });
    }
};