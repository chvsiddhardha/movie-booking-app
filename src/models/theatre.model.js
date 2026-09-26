const {pool} =require("../config/database");

exports.getAllTheathers=async()=>{
    const result=await pool.query(
        `SELECT * FROM theatres ORDER BY id`
    );
    return result.rows;
};

exports.getTheathersById=async(theatherId)=>{
    const result=await pool.query(
        `SELECT * FROM theatres
        WHERE id=$1`,
        [theatherId]
    );
    return result.rows[0];
};

exports.createTheather=async(
    name,
    address,
    city,
    state,
    pincode
)=>{
    const result=await pool.query(
        `INSERT INTO theatres
        (name,address,city,state,pincode)
        VALUES($1,$2,$3,$4,$5)
        RETURNING *`,
        [
            name,
            address,
            city,
            state,
            pincode
        ]
    );
    return result.rows[0];
};

exports.updateTheather=async(
    theatherId,
    name,
    address,
    city,
    state,
    pincode
)=>{
    const result=await pool.query(
        `UPDATE theatres
        SET name=$1,
            address=$2,
            city=$3,
            state=$4,
            pincode=$5
        WHERE id=$6
        RETURNING *`,
        [
            name,
            address,
            city,
            state,
            pincode
        ]
    );
    return result.rows[0];
};

exports.deleteTheather=async(theatherId)=>{
    const result=await pool.query(
        `DELETE FROM  theatres
        WHERE id=$1
        RETURNING *`,
        [theatherId]
    );
    return result.rows[0];
}