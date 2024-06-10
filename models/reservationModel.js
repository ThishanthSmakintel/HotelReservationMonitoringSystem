const fs = require("fs").promises;

async function fetchReservations(filename) {
  try {
    const data = await fs.readFile(filename);
    return JSON.parse(data);
  } catch (error) {
    console.error(
      `Error fetching reservations from ${filename}:`,
      error.message
    );
    throw error;
  }
}

module.exports = {
  fetchReservations,
};
