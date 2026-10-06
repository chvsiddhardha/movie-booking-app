const showModel = require("../models/show.model");

exports.getAllShows=async()=>{
    return await showModel.getAllShows();
};

exports.getShowById=async(showId)=>{
    return await showModel.getShowById();
};

exports.createShow=async(showData)=>{
    return await showModel.createShow(
        showData.movie_id,
        showData.screen_id,
        showData.show_date,
        showData.start_time,
        showData.end_time
    );
};

exports.updateShow=async(show_id,showData)=>{
    return await showModel.updateShow(
        show_id,
        showData.movie_id,
        showData.screen_id,
        showData.show_date,
        showData.start_time,
        showData.end_time
    );
};

exports.deleteShow=async(showId)=>{
    return await showModel.deleteShow(showId);
};