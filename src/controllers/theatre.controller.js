const {pool} =require("../config/database");

exports.getAllTheathers=async(req,res)=>{
    const result=await pool.query(
        `SELECT * FROM theatres ORDER BY id`
    );
    res.json(result.rows);
};

exports.getTheathersById=async(req,res)=>{
    try{
        const theatherId=req.params.id;
        const result=await pool.query(
            `SELECT * FROM theatres
            WHERE id=$1`,
            [theatherId]
        );
        res.json(result.rows[0]);
    }
    catch(error){
        console.error("Error:",error.message);
        res.json({
            success:false,
            message:"theather not found"
        });
    }
};

exports.createTheather = async (req, res) => {
    try {
        const {
            name,
            address,
            city,
            state,
            pincode
        } = req.body;

        const result = await pool.query(
            `INSERT INTO theatres
            (name, address, city, state, pincode)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [
                name,
                address,
                city,
                state,
                pincode
            ]
        );

        res.status(201).json({
            success: true,
            message: "Theatre created successfully",
            theatre: result.rows[0]
        });

    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create theatre"
        });
    }
};

exports.updateTheather=async(req,res)=>{
    try{
        const{
            name,
            address,
            city,
            state,
            pincode
        }=req.body;
        const result=await pool.query(
            `UPDATE theatres
            SET name=$1
                address=$2,
                city=$3,
                state=$4,
                pincode=$5
            WHERE id=$6
            RETURNING * `,
            [
                name,
                address,
                city,
                state,
                pincode
            ]
        );
        res.json(result.rows[0]);
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
        const result=await pool.query(
            `DELETE FROM theatres
            WHERE id=$1`,
            [theatherId]
        );
        res.json({
            success:true,
            message:"theather deleted successfully"
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