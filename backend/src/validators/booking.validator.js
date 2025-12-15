export function validateBookings(bookings) {
    if (!Array.isArray(bookings)) {
      return "Input must be an array";
    }
  
    for (const booking of bookings) {
      if (
        typeof booking.bookingId !== "number" ||
        !Array.isArray(booking.seats) ||
        booking.seats.length === 0
      ) {
        return "Invalid booking structure";
      }
    }
  
    return null;
  }
  