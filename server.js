require("dotenv").config();

const express = require("express");

const { connectDatabase } = require("./src/config/database");

const app = express();

const PORT = process.env.PORT || 5000;


// =====================================
// MIDDLEWARE
// =====================================

const movieRoutes = require("./src/routes/movie.routes");
app.use(express.json());


app.use("/api/movies", movieRoutes);
// =====================================
// ROOT ROUTE
// =====================================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Cinema-Conqueror backend is running"
    });
});


// =====================================
// START SERVER
// =====================================

const startServer = async () => {

    try {

        // Connect PostgreSQL first
        await connectDatabase();

        // Start Express only after DB connection
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error("Failed to start server");

        process.exit(1);
    }
};

startServer();