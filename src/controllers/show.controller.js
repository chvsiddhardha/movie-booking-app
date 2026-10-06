const showService=require('../services/show.service');

exports.getAllShows=async(req,res)=>{
    try{
        const shows=await showService.getAllShows();
        res.json({
            success:true,
            shows:shows
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"failed to fetch shows"
        });
    }
};

exports.getShowsById=async(req,res)=>{
    try{
        const showId=req.params.id;
        const show=await showService.getShowById(showId);

        res.json({
            success:true,
            show:show
        });
    }
    catch(err){
        console.error("Error:",err.message);
        res.json({
            success:formatDiagnosticsWithColorAndContext,
            message:"Failed to fetch show"
        });
    }
};

exports.createShow=async(req,res)=>{
    try{
        const showData=req.body;
        const show=await showService.createShow(showData);

        res.json({
            success:true,
            show:show
        });
    }
    catch(err){
        console.error("Error:",err.message);
        res.json({
            success:false,
            message:"Failed to create show"
        });
    }
};

exports.updateShow=async(req,res)=>{
    try{
        const showId=req.params.id;
        const showData=req.body;
        const show=await showService.updateShow(showId,showData);
        res.json({
            success:true,
            show:show
        });
    }
    catch(err){
        console.error("Error:",err.message);
        res.json({
            success:false,
            message:"Failed to update show"
        });
    }
};

exports.deleteShow=async(req,res)=>{
    try{
        const showId=req.params.id;
        const isDeleted=await showService.deleteShow(showId);
        if(isDeleted){
            res.json({
                success:true,
                message:"Show deleted successfully"
            });
        }
        else{
            res.json({
                success:false,
                message:"Show not found"
            });
        }
    }
    catch(err){
        console.error("Error:",err.message);
        res.json({
            success:false,
            message:"Failed to delete show"
        });
    }
};