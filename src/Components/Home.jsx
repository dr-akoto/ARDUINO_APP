
// Home.js
// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>EcoWatch: Combatting Deforestation</h1>
        <p>Real-time monitoring of deforestation with IoT sensors, satellite data, and AI predictions.</p>
        <Link to="/dashboard" className="btn-primary">View Dashboard</Link>
        <Link to="/login" className="btn-secondary">Login/Signup</Link>
      </header>
      
      <section className="features">
        <div className="feature-item">
          <h2>Real-time Monitoring</h2>
          <p>Live data from temperature and humidity sensors deployed in forests.</p>
        </div>
        <div className="feature-item">
          <h2>Satellite Imagery</h2>
          <p>Analyze satellite images of forest areas with historical comparisons.</p>
        </div>
        <div className="feature-item">
          <h2>Predictive AI</h2>
          <p>Machine learning models forecasting deforestation risks.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;