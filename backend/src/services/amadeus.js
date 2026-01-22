import dotenv from "dotenv";
dotenv.config();  // Load .env first thing

import Amadeus from "amadeus";

// DEBUG: confirm env variables are loaded
console.log("API KEY:", process.env.AMADEUS_API_KEY ? "LOADED" : "MISSING");
console.log("API SECRET:", process.env.AMADEUS_API_SECRET ? "LOADED" : "MISSING");

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET,
});

export default amadeus;
