const express = require("express");

const router = express.Router();

const bookingSeatController =
    require("../controllers/bookingSeat.controller");

router.get("/", bookingSeatController.getAllBookingSeats);

router.get("/:id", bookingSeatController.getBookingSeatById);

router.post("/", bookingSeatController.createBookingSeat);

router.put("/:id", bookingSeatController.updateBookingSeat);

router.delete("/:id", bookingSeatController.deleteBookingSeat);

module.exports = router;