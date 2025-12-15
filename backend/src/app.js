import express from "express";
import cors from "cors";
import boardingRoute from "./routes/boardingRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/boarding", boardingRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
