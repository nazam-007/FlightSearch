import express from "express";
import amadeus from "../services/amadeus.js";

const router = express.Router();

/**
 * GET /api/flights/search
 * Query Params:
 * - origin
 * - destination
 * - date
 */
router.get("/search", async (req, res) => {
  try {
    const { origin, destination, date, adults = 1 } = req.query;

    if (!origin || !destination || !date) {
      return res.status(400).json({
        error: "origin, destination and date are required",
      });
    }

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: date,
      adults,
      currencyCode: "INR",
      max: 50,
    });

    res.json(response.data);
  } catch (error) {
    console.error("Amadeus error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});

export default router;
