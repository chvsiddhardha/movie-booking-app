const theatherService=require("../services/theatre.service");

exports.getAllTheathers=async(req,res)=>{
    try{
        const theathers=await theatherService.getAllTheathers();

        res.json({
            success:true,
            theather:theathers
        });
    }
    catch(error){
        console.log("Error:",error.message);

        res.json({
            success:false,
            message:"Failed to fetch theathers"
        });
    }
};

exports.getTheathersById=async(req,res)=>{
    try{
        const theatherId=req.params.id;

        const theather=await theatherService.getTheathersById(theatherId);

        if(!theather){
            return res.json({
                success:false,
                message:"Theater not found"
            });
        }
        res.json({
            success:true,
            movie:movie
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"Failed to fetch"
        });
    }
};

exports.createTheather=async(req,res)=>{
    try{
        const theather=await theatherService.createTheather(req.body);

        res.json({
            success:true,
            message:"Teather created successfully",
            theather:theather
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"Failed to create theather"
        });
    }
};

exports.updateTheather=async(req,res)=>{
    try{
        const theatherId=req.params.id;
        const theather=await theatherService.updateTheather(theatherId,req.body);
        res.json({
            success:true,
            message:"theater updated successfully",
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"failed to update theather"

        });
    }
};

exports.deleteTheather=async(req,res)=>{
    try{
        const theatherId=req.params.id;
        const theather=await theatherService.deleteTheather(theatherId);

        res.json({
            success:true,
            message:"Deleted successfully"
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"failed to delete theather"
        });
    }
};