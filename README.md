# ✈️ Flight Search Engine

A full-stack flight search application with live pricing, filters, and real-time graph updates.

## 🚀 Features
- Search flights by origin, destination & date
- Live price graph (Recharts)
- Complex filtering (price, stops, airlines)
- Responsive UI (mobile + desktop)
- Real-time UI updates

## 🛠 Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Charts: Recharts
- Styling: CSS Flexbox & Grid

## Features
🔍 Search & Results

Search flights using:

Origin airport code (e.g., DEL)

Destination airport code (e.g., BOM)

Travel date

Displays a clear, structured list of flight results

🎛 Complex Filtering (Real-Time)

Filter by:

Maximum price

Number of stops (Non-stop / 1 stop / Any)

Airlines

Filters work simultaneously

Updates both flight list and price graph instantly

📊 Live Price Graph

Visual price distribution using Recharts

Automatically updates when filters change

Helps users compare prices quickly

## Project Structure
FlightSearch/
├── backend/
│   ├── routes/
│   │   └── flights.js
│   ├── services/
│   │   └── amadeus.js
│   ├── index.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── flights.js
│   │   ├── components/
│   │   │   ├── SearchForm.jsx
│   │   │   ├── FlightList.jsx
│   │   │   ├── Filters.jsx
│   │   │   ├── PriceGraph.jsx
│   │   │   └── *.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   ├── index.html
│   └── package.json
│
├── README.md
└── .gitignore

⚙️ Environment Variables
Backend (.env)
PORT=5000
AMADEUS_API_KEY=your_api_key
AMADEUS_API_SECRET=your_api_secret

Frontend (.env)
VITE_API_URL=https://your-backend-link.onrender.com

### Getting Started (Local Setup)
1️⃣ Clone Repository
git clone https://github.com/your-username/flight-search.git
cd flight-search

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

## Application Workflow (High-Level)

User enters search criteria (origin, destination, date)

Frontend sends request to backend API

Backend fetches live flight data from Amadeus API

Backend returns normalized flight data

Frontend:

Displays flight list

Applies filters

Updates price graph in real time

##  Why This Project?

This project was built to demonstrate:

Clean frontend architecture

API integration best practices

State management using React hooks

Real-time UI updates

Production-ready folder structure

## Improvements (Future Scope)

Round-trip flight support

Date range price trends

User authentication

Saved searches

Pagination for large datasets

👨‍💻 Author

Nishat Wasi
Frontend / Full Stack Developer

GitHub: https://www.linkedin.com/in/nishatwasi/

LinkedIn: https://github.com/nazam-007?tab=repositories



