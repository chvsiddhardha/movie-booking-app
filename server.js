require("dotenv").config();

const express = require("express");

const { connectDatabase } = require("./src/config/database");

const app = express();

const PORT = process.env.PORT || 5000;


// =====================================
// MIDDLEWARE
// =====================================

const movieRoutes = require("./src/routes/movie.routes");
const theatherRoutes=require("./src/routes/theatre.routes");
const screenRoutes=require("./src/routes/screen.routes");
const seatRoutes=require("./src/routes/seat.routes");
const showRoutes = require("./src/routes/show.routes");
const showSeatRoutes=require("./src/routes/showSeat.routes");
const bookingRoutes =
    require("./src/routes/booking.routes");
const bookingSeatRoutes =
    require("./src/routes/bookingSeat.routes");
app.use(express.json());


app.use("/api/movies", movieRoutes);
app.use("/api/theather",theatherRoutes);
app.use("/api/screens",screenRoutes);
app.use("/api/seats",seatRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/show-seats", showSeatRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/booking-seats", bookingSeatRoutes);
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