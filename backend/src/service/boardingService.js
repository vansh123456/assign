import { extractSeatNumber } from "../utils/seatUtils.js";

export function generateBoardingSequence(bookings) {
  const enrichedBookings = bookings.map(b => {
    const maxSeatDistance = Math.max(
      ...b.seats.map(seat => extractSeatNumber(seat))
    );

    return {
      bookingId: b.bookingId,
      maxSeatDistance
    };
  });

  enrichedBookings.sort((a, b) => { //comparator se kar rahe
    if (b.maxSeatDistance !== a.maxSeatDistance) {
      return b.maxSeatDistance - a.maxSeatDistance; //max distance se minus kar rahe to get distance
    } //result is positive

 //a moves after b
    return a.bookingId - b.bookingId;
  });

  return enrichedBookings.map((b, index) => ({
    seq: index + 1,
    bookingId: b.bookingId
  }));
}
