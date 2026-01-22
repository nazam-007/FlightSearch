export async function searchFlights({ origin, destination, date }) {
  const response = await fetch(
    `http://localhost:5000/api/flights/search?origin=${origin}&destination=${destination}&date=${date}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch flights");
  }

  return response.json();
}
