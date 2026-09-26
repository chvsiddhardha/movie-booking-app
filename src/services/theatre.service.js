const theatherModel=require("../models/theatre.model");

exports.getAllTheathers =async()=>{
    return await theatherModel.getAllTheathers();
};

exports.getTheathersById=async(theatherId)=>{
    return await theatherModel.getTheathersById(theatherId);
}

exports.createTheather =async(theatherData)=>{
    return await theatherModel.createTheather(
        theatherData.name,
        theatherData.address,
        theatherData.city,
        theatherData.state,
        theatherData.pincode,
    );
}

exports.updateTheather=async(theatherId,theatherData)=>{
    return await theatherModel.updateTheather(
        theatherId,
        theatherData.name,
        theatherData.address,
        theatherData.city,
        theatherData.state,
        theatherData.pincode
    );
};

exports.deleteTheather=async(theatherId)=>{
    return await theatherModel.deleteTheather(theatherId);
}