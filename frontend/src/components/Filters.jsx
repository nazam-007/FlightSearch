import "./Filters.css";

function Filters({
  maxPrice,
  setMaxPrice,
  stops,
  setStops,
  airlines,
  setAirlines,
  flights,
}) {
  const uniqueAirlines = [
    ...new Set(
      flights.flatMap((f) => f.validatingAirlineCodes)
    ),
  ];

  const toggleAirline = (code) => {
    setAirlines((prev) =>
      prev.includes(code)
        ? prev.filter((a) => a !== code)
        : [...prev, code]
    );
  };

  return (
    <div className="filters">
      <h3>Filters</h3>

      {/* Price */}
      <label>
        Max Price: ₹{maxPrice}
        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>

      {/* Stops */}
      <div>
        <label>Stops</label>
        <select
          value={stops}
          onChange={(e) => setStops(e.target.value)}
        >
          <option value="any">Any</option>
          <option value="0">Non-stop</option>
          <option value="1">1 Stop</option>
          <option value="2">2+ Stops</option>
        </select>
      </div>

      {/* Airlines */}
      <div>
        <label>Airlines</label>
        {uniqueAirlines.map((code) => (
          <div key={code}>
            <input
              type="checkbox"
              checked={airlines.includes(code)}
              onChange={() => toggleAirline(code)}
            />
            {code}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
