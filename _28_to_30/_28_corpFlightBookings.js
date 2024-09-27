/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
let corpFlightBookings = function (bookings, n) {
  let totalSeats = new Array(n).fill(0);
  for (let booking of bookings) {
    for (let i = booking[0] - 1; i <= booking[1] - 1; i++) {
      totalSeats[i] += booking[2];
    }
  }

  return totalSeats;
};
