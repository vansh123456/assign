export function parseCSV(content) {
    const lines = content.trim().split("\n");
  
    return lines.slice(1).map(line => {
      const [bookingId, seats] = line.split(",");
      return {
        bookingId: Number(bookingId.trim()),
        seats: seats.split("|").map(s => s.trim())
      };
    });
  }
  