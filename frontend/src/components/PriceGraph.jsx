import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PriceGraph({ flights }) {
  // Transform flight data for chart
  const data = flights.map((flight, index) => ({
    name: `Flight ${index + 1}`,
    price: Number(flight.price.total),
  }));

  if (data.length === 0) return null;

  return (
    <div style={{ width: "100%", height: 300, margin: "30px 0" }}>
      <h3>📈 Price Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceGraph;
