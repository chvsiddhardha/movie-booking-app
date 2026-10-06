const express = require("express");

const router = express.Router();

const showSeatController =
    require("../controllers/showSeat.controller");

router.get(
    "/",
    showSeatController.getAllShowSeats
);

router.get(
    "/:id",
    showSeatController.getShowSeatById
);

router.post(
    "/",
    showSeatController.createShowSeat
);

router.put(
    "/:id",
    showSeatController.updateShowSeat
);

router.delete(
    "/:id",
    showSeatController.deleteShowSeat
);

module.exports = router;