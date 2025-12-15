import { extractSeatNumber } from "../utils/seatUtils.js";

export function generateBoardingSequence(bookings) {
  const enrichedBookings = bookings.map(b => {  //loop through each booking
    const maxSeatDistance = Math.max( //find farthest seat first
      ...b.seats.map(seat => extractSeatNumber(seat)) //... hai spread operator that expands an array into individual elements
    );

    return {
      bookingId: b.bookingId,
      maxSeatDistance //reassign usi main kar rahe to no declaration
    };
  });

  enrichedBookings.sort((a, b) => { //comparator se kar rahe  ki kon pehle board karega
    if (b.maxSeatDistance !== a.maxSeatDistance) { //same booking time pe pehle wala booking crow
      return b.maxSeatDistance - a.maxSeatDistance; //max distance se minus kar rahe to get distance
    } //result is positive

 //a moves after b
    return a.bookingId - b.bookingId;  //smaller booking wala board pehele
  });

  return enrichedBookings.map((b, index) => ({
    seq: index + 1,
    bookingId: b.bookingId
  }));
}
