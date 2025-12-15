import express from "express";
import multer from "multer";
import { generateBoardingSequence } from "../service/boardingService.js";
import { validateBookings } from "../validators/booking.validator.js";
import { parseBookingFile } from "../parser/file.parser.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

/**
 * Existing JSON endpoint (NO CHANGE)
 */
router.post("/sequence", (req, res) => {
  const error = validateBookings(req.body);
  if (error) return res.status(400).json({ error });

  const result = generateBoardingSequence(req.body);
  res.json(result);
});

/**
 * NEW: CSV file upload endpoint
 */
router.post(
  "/sequence/file",
  upload.single("file"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const fileContent = req.file.buffer.toString("utf-8");
    const bookings = parseBookingFile(fileContent);

    const error = validateBookings(bookings);
    if (error) return res.status(400).json({ error });

    const result = generateBoardingSequence(bookings);
    res.json(result);
  }
);

export default router;
