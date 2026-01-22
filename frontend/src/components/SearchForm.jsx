import { useState } from "react";
import { searchFlights } from "../api/flights";
import "./SearchForm.css";

function SearchForm({ setFlights }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
  setLoading(true);
  try {
    const data = await searchFlights({ origin, destination, date });
    console.log("API response:", data);
    setFlights(data.data || data || []);
  } catch (error) {
    console.error(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="search-card">
      <div className="form-group">
        <label>From</label>
        <input
          placeholder="DEL"
          value={origin}
          onChange={(e) => setOrigin(e.target.value.toUpperCase())}
        />
      </div>

      <div className="form-group">
        <label>To</label>
        <input
          placeholder="BOM"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value.toUpperCase())
          }
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>
        {loading ? "Searching..." : "Search Flights"}
      </button>
    </div>
  );
}

export default SearchForm;
