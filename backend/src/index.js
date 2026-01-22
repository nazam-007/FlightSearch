import express from "express";
import cors from "cors";
import flightsRoutes from "./routes/flights.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/flights", flightsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
