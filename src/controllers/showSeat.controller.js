const showSeatService = require("../services/showSeat.service");

// GET ALL
exports.getAllShowSeats = async (req, res) => {
    try {

        const showSeats =
            await showSeatService.getAllShowSeats();

        res.status(200).json({
            success: true,
            showSeats: showSeats
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch show seats"
        });
    }
};


// GET BY ID
exports.getShowSeatById = async (req, res) => {
    try {

        const showSeatId = req.params.id;

        const showSeat =
            await showSeatService.getShowSeatById(showSeatId);

        if (!showSeat) {
            return res.status(404).json({
                success: false,
                message: "Show seat not found"
            });
        }

        res.status(200).json({
            success: true,
            showSeat: showSeat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch show seat"
        });
    }
};


// CREATE
exports.createShowSeat = async (req, res) => {
    try {

        const showSeat =
            await showSeatService.createShowSeat(req.body);

        res.status(201).json({
            success: true,
            message: "Show seat created successfully",
            showSeat: showSeat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create show seat"
        });
    }
};


// UPDATE
exports.updateShowSeat = async (req, res) => {
    try {

        const showSeatId = req.params.id;

        const showSeat =
            await showSeatService.updateShowSeat(
                showSeatId,
                req.body
            );

        if (!showSeat) {
            return res.status(404).json({
                success: false,
                message: "Show seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Show seat updated successfully",
            showSeat: showSeat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update show seat"
        });
    }
};


// DELETE
exports.deleteShowSeat = async (req, res) => {
    try {

        const showSeatId = req.params.id;

        const showSeat =
            await showSeatService.deleteShowSeat(showSeatId);

        if (!showSeat) {
            return res.status(404).json({
                success: false,
                message: "Show seat not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Show seat deleted successfully",
            showSeat: showSeat
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete show seat"
        });
    }
};



exports.getSeatsByShowId = async (req, res) => {
    try {
        const showId = Number(req.params.showId);

        if (!Number.isInteger(showId) || showId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid show ID"
            });
        }

        const seats = await showSeatService.getSeatsByShowId(showId);

        res.status(200).json({
            success: true,
            show_id: showId,
            seats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


exports.getPricePreview = async (req, res) => {
    try {
        const { showId, showSeatIds } = req.body;

        // Validate the request body
        if (
            !Number.isInteger(showId) ||
            showId <= 0 ||
            !Array.isArray(showSeatIds) ||
            showSeatIds.length === 0 ||
            !showSeatIds.every(
                (id) => Number.isInteger(id) && id > 0
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "Provide a valid showId and showSeatIds array"
            });
        }

        // Call the service
        const preview = await showSeatService.getPricePreview(
            showId,
            showSeatIds
        );

        return res.status(200).json({
            success: true,
            showId,
            ...preview
        });
    } catch (error) {
        const statusCode =
            error.message.includes("not belong") ||
            error.message.includes("not available")
                ? 400
                : 500;

        return res.status(statusCode).json({
            success: false,
            message: error.message
        });
    }
};
