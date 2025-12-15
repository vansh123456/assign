export function extractSeatNumber(seat) {
  const match = seat.match(/\d+/);
  if (!match) {
    throw new Error(`Invalid seat label: ${seat}`);
  }
  return parseInt(match[0], 10);
}
