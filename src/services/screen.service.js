const screenModel = require("../models/screen.model");


// GET ALL SCREENS
exports.getAllScreens = async () => {
    return await screenModel.getAllScreens();
};


// GET SCREEN BY ID
exports.getScreenById = async (screenId) => {
    return await screenModel.getScreenById(screenId);
};


// CREATE SCREEN
exports.createScreen = async (screenData) => {
    return await screenModel.createScreen(
        screenData.theatre_id,
        screenData.name,
        screenData.total_seats
    );
};


// UPDATE SCREEN
exports.updateScreen = async (screenId, screenData) => {
    return await screenModel.updateScreen(
        screenId,
        screenData.theatre_id,
        screenData.name,
        screenData.total_seats
    );
};


// DELETE SCREEN
exports.deleteScreen = async (screenId) => {
    return await screenModel.deleteScreen(screenId);
};