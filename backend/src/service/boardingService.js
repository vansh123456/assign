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

  enrichedBookings.sort((a, b) => {
    if (b.maxSeatDistance !== a.maxSeatDistance) {
      return b.maxSeatDistance - a.maxSeatDistance;
    }
    return a.bookingId - b.bookingId;
  });

  return enrichedBookings.map((b, index) => ({
    seq: index + 1,
    bookingId: b.bookingId
  }));
}
