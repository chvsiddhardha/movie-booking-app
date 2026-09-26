const {pool} =require("../config/database");

exports.getAllScreens =async(req,res)=>{
    try{
        const result=await pool.query(
            `SELECT * FROM screens`
        );
        res.json(result.rows);
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"Failed to fetch screens"
        });
    }
    
}

exports.getScreensById =async (req,res)=>{
    try{
        const screenId=req.params.id;
        const result=await pool.query(
            `SELECT * FROM screens
            WHERE id=$1`,
            [screenId]
        );
        res.json(result.rows[0]);
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"screen not found"
        });
    }
};
exports.createScreen = async (req, res) => {
    try {

        const {
            theatre_id,
            name,
            total_seats
        } = req.body;

        const result = await pool.query(
            `INSERT INTO screens
            (theatre_id, name, total_seats)
            VALUES($1, $2, $3)
            RETURNING *`,
            [
                theatre_id,
                name,
                total_seats
            ]
        );

        res.status(201).json({
            success: true,
            message: "Created screen successfully",
            screen: result.rows[0]
        });

    } catch (error) {

        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create screen"
        });
    }
};
exports.updateScreen=async(req,res)=>{
    try{
        const screenId=req.params.id;
        const{
            theatre_id,
            name,
            total_seats
        }=req.body
        const result=await pool.query(
            `UPDATE screens
            SET theatre_id=$1,
                name=$2,
                total_seats=$3
            WHERE id=$4
            RETURNING *`
        ,[theatre_id,name,total_seats,screenId]);
        res.json({
            success:true,
            message:"Updated screen successfully"
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"Failed to update screen"
        });
    }
};

exports.deleteScreen=async(req,res)=>{
    try{
        const screenId=req.params.id;
        const result=await pool.query(
            `DELETE FROM screens
            WHERE id=$1 RETURNING *`,
            [screenId]
        );
        res.json({
            success:true,
            message:"Screen deleted successfully"
        });
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"Failed to delete screen"
        });
    }
};