const reservationModel = require("../models/reservationModel");

async function getCombinedReservations() {
  try {
    const data1 = await reservationModel.fetchReservations("reservations.json");
    const data2 = await reservationModel.fetchReservations(
      "reservations2.json"
    );
    const data3 = await reservationModel.fetchReservations(
      "reservations3.json"
    );

    const reservations1 = data1.reservations.map((reservation) => ({
      ...reservation,
      hotel: data1.hotel,
    }));

    const reservations2 = data2.reservations.map((reservation) => ({
      ...reservation,
      hotel: data2.hotel,
    }));

    const reservations3 = data3.reservations.map((reservation) => ({
      ...reservation,
      hotel: data3.hotel,
    }));

    return [...reservations1, ...reservations2, ...reservations3];
  } catch (error) {
    console.error("Error fetching combined reservations:", error.message);
    throw error;
  }
}

module.exports = {
  getCombinedReservations,
};
