const express = require("express");
const router = express.Router();
const reservationController = require("../controller/reservationController");

router.get("/", async (req, res) => {
  try {
    const allReservations =
      await reservationController.getCombinedReservations();
    const events = allReservations.map((reservation) => ({
      title: `${reservation.name}`,
      hotel: `${reservation.hotel}`,
      start: reservation.startDate,
      end: reservation.endDate,
      checkin: reservation.checkin,
      checkout: reservation.checkout,
    }));
    res.json(events);
  } catch (error) {
    console.log("Error fetching reservations:", error.message);
    res.status(500).send("Failed to fetch reservations");
  }
});

module.exports = router;
