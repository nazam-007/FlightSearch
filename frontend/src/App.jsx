import { useState, useMemo } from "react";
import SearchForm from "./components/SearchForm";
import FlightList from "./components/FlightList";
import Filters from "./components/Filters";
import PriceGraph from "./components/PriceGraph";
import "./App.css";

function App() {
  const [flights, setFlights] = useState([]);

  // 🔹 Filter states
  const [maxPrice, setMaxPrice] = useState(20000);
  const [stops, setStops] = useState("any");
  const [airlines, setAirlines] = useState([]);

  // 🔹 Filter logic (runs automatically when filters change)
  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const price = Number(flight.price.total);
      const flightStops =
        flight.itineraries[0].segments.length - 1;
      const airline = flight.validatingAirlineCodes[0];

      if (price > maxPrice) return false;

      if (stops !== "any" && flightStops !== Number(stops))
        return false;

      if (airlines.length && !airlines.includes(airline))
        return false;

      return true;
    });
  }, [flights, maxPrice, stops, airlines]);

  return (
    <div className="app">
      {/* 🔹 Banner */}
      <header className="header">
        <h1>✈️ Flight Search Engine</h1>
        <p>Search flights with live prices & filters</p>
      </header>

      <main className="main">
        {/* 🔹 Search */}
        <SearchForm setFlights={setFlights} />

        {/* 🔹 Filters */}
        {flights.length > 0 && (
          <Filters
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            stops={stops}
            setStops={setStops}
            airlines={airlines}
            setAirlines={setAirlines}
            flights={flights}
          />
        )}

        {/* 🔹 Live Price Graph */}
        {filteredFlights.length > 0 && (
          <PriceGraph flights={filteredFlights} />
        )}

        {/* 🔹 Flight Results */}
        <FlightList flights={filteredFlights} />
      </main>
    </div>
  );
}

export default App;

