const screenService = require("../services/screen.service");

// GET ALL SCREENS
exports.getAllScreens = async (req, res) => {
    try {
        const screens = await screenService.getAllScreens();

        res.status(200).json({
            success: true,
            screens: screens
        });
    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch screens"
        });
    }
};


// GET SCREEN BY ID
exports.getScreenById = async (req, res) => {
    try {
        const screenId = req.params.id;

        const screen = await screenService.getScreenById(screenId);

        if (!screen) {
            return res.status(404).json({
                success: false,
                message: "Screen not found"
            });
        }

        res.status(200).json({
            success: true,
            screen: screen
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch screen"
        });
    }
};


// CREATE SCREEN
exports.createScreen = async (req, res) => {
    try {
        const screen = await screenService.createScreen(req.body);

        res.status(201).json({
            success: true,
            message: "Screen created successfully",
            screen: screen
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create screen"
        });
    }
};


// UPDATE SCREEN
exports.updateScreen = async (req, res) => {
    try {
        const screenId = req.params.id;

        const screen = await screenService.updateScreen(
            screenId,
            req.body
        );

        if (!screen) {
            return res.status(404).json({
                success: false,
                message: "Screen not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Screen updated successfully",
            screen: screen
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update screen"
        });
    }
};


// DELETE SCREEN
exports.deleteScreen = async (req, res) => {
    try {
        const screenId = req.params.id;

        const screen = await screenService.deleteScreen(screenId);

        if (!screen) {
            return res.status(404).json({
                success: false,
                message: "Screen not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Screen deleted successfully",
            screen: screen
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete screen"
        });
    }
};