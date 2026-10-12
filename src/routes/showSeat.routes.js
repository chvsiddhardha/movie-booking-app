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
router.get(
    "/show/:showId/seats",
    showSeatController.getSeatsByShowId
);

router.post(
    "/price-preview",
    showSeatController.getPricePreview
); 
module.exports = router;