# 🌍 Earthquake Visualizer

An interactive web application that visualizes **real-time earthquake data** on a world map using the **USGS (United States Geological Survey) API**.  
Built with **React, Leaflet.js, and Vite**.

---

## 🚀 Features
- 📡 Fetches live earthquake data from USGS.
- 🗺️ Interactive world map with markers for earthquakes.
- 🔎 Click markers to see earthquake details (magnitude, location, time).
- 📊 Filter earthquakes by magnitude or time range.
- ⚡ Fast and responsive UI built with Vite + React.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, TailwindCSS  
- **Maps:** Leaflet.js (React-Leaflet)  
- **API:** [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)  

---

## 📂 Project Structure
earthquake-visualizer/
│── public/ # Static assets
│── src/
│ ├── components/ # Reusable React components
│ ├── pages/ # Main app pages
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point
│── package.json # Dependencies & scripts
│── vite.config.js # Vite config
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Ganeshuu24/Earthquake-project.git
cd Earthquake-project
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the development server
bash
Copy code
npm run dev
Then open: http://localhost:5173

🎯 Usage
Open the app in your browser.

Zoom & pan around the map.

Click on earthquake markers to view details.

Use filters to refine earthquake data display.

📡 API Reference
Data is fetched from the USGS Earthquake API:
👉 https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

