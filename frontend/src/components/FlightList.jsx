import "./FlightList.css";

function FlightList({ flights }) {
  if (!flights.length) {
    return <p className="no-results">No flights found</p>;
  }

  return (
    <div className="flight-list">
      {flights.map((flight, index) => {
        const segments = flight.itineraries[0].segments;
        const stops = segments.length - 1;

        return (
          <div key={index} className="flight-card">
            <div className="airline">
              ✈ {flight.validatingAirlineCodes[0]}
            </div>

            <div className="route">
              {segments[0].departure.iataCode} →
              {segments[segments.length - 1].arrival.iataCode}
            </div>

            <div className="stops">
              {stops === 0 ? "Non-stop" : `${stops} stop`}
            </div>

            <div className="price">
              ₹{flight.price.total}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FlightList;
