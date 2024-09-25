
// // Dashboard.js
// import  { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import axios from "axios";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [sensorData, setSensorData] = useState([]);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     // Fetch sensor data
//     axios.get('/api/sensors').then(response => {
//       setSensorData(response.data);
//     });

//     // Initialize Leaflet map
//     if (!map) {
//       const leafletMap = L.map("map").setView([5.5557, -0.1963], 6);
//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(leafletMap);
//       setMap(leafletMap);
//     }
//   }, [map]);

//   const data = {
//     labels: sensorData.map(data => data.timestamp),
//     datasets: [
//       {
//         label: "Temperature",
//         data: sensorData.map(data => data.temperature),
//         borderColor: "red",
//         fill: false,
//       },
//       {
//         label: "Humidity",
//         data: sensorData.map(data => data.humidity),
//         borderColor: "blue",
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="dashboard">
//       <h2>Real-Time Deforestation Monitoring</h2>
//       <div className="chart-container">
//         <Line data={data} />
//       </div>
//       <div id="map" className="map-container"></div>
//     </div>
//   );
// };

// export default Dashboard;


// Dashboard.js
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [map, setMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get('/api/sensors');
        setSensorData(response.data);
      } catch (error) {
        console.error("Error fetching sensor data", error);
        setError("Failed to fetch sensor data. Please try again later.");
      }
    };

    fetchSensorData();

    if (!map) {
      const leafletMap = L.map("map").setView([5.5557, -0.1963], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(leafletMap);
      setMap(leafletMap);
    }
  }, [map]);

  const data = {
    labels: sensorData.map(data => data.timestamp),
    datasets: [
      {
        label: "Temperature",
        data: sensorData.map(data => data.temperature),
        borderColor: "red",
        fill: false,
      },
      {
        label: "Humidity",
        data: sensorData.map(data => data.humidity),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Real-Time Deforestation Monitoring</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="chart-container">
        <Line data={data} />
      </div>
      <div id="map" className="map-container"></div>
    </div>
  );
};

export default Dashboard;