export function parseBookingFile(fileContent) {
  const lines = fileContent.trim().split(/\r?\n/);

  // Remove header: Booking_ID,Seats
  return lines.slice(1).map(line => {
    const parts = line.split(",");
    const bookingId = Number(parts[0].trim());
    const seats = parts.slice(1).map(s => s.trim());

    return {
      bookingId,
      seats
    };
  });
}
