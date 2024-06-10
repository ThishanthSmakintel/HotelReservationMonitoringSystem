require("dotenv").config();
const express = require("express");
const app = express();
const calendarRoutes = require("./routes/calendarRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

app.use(express.static("public"));
app.use("/calendar", calendarRoutes);
app.use("/reservations", reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
