import express from "express";
import { generateBoardingSequence } from "../service/boardingService.js";
import { validateBookings } from "../validators/booking.validator.js";

const router = express.Router();

router.post("/sequence", (req, res) => {
  const bookings = req.body;

  const error = validateBookings(bookings);
  if (error) {
    return res.status(400).json({ error });
  }

  const result = generateBoardingSequence(bookings);
  res.json(result);
});

export default router;
