const screenModel=require("../models/screen.model");

exports.getAllScreens=async()=>{
    return await screenModel.getAllScreens();
};

exports.getScreenById=async(screenId)=>{
    return await screenModel.getScreenById(screenId);
};

exports.createScreen=async(screenData)=>{
    return await screenModel.createScreen(
        screenData.theatre_id,
        screenData.name,
        screenData.total_seats
    );
};

exports.updateScreen=async(screenId,screenData)=>{
    return await screenData.updateScreen(
        screenId,
        screenData.theatre_id,
        screenData.name,
        screenData.total_seats
    );
};

exports.deleteScreen=async(screenId)=>{
    return await screenModel.deleteScreen(screenId);
};