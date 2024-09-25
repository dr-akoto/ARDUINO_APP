// // Import necessary libraries and components
// import  { useState } from "react";
// import axios from "axios";  // For making HTTP requests to the backend API
// import "./Report.css";  // Custom styles for the report form

// // Functional component for the Report page
// const Report = () => {
//   // State management for form inputs and user-uploaded files
//   const [description, setDescription] = useState("");  // Description of the incident
//   const [image, setImage] = useState(null);  // Image uploaded by the user
//   const [location, setLocation] = useState("");  // Geolocation coordinates
//   const [message, setMessage] = useState("");  // Success/error message

//   // Event handler for form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();  // Prevent default form behavior

//     // Create a new form data object to store the report details
//     const formData = new FormData();
//     formData.append("description", description);
//     formData.append("location", location);
//     if (image) {
//       formData.append("image", image);  // Include the uploaded image
//     }

//     try {
//       // Send the report data to the backend API using POST request
//       await axios.post("/api/report", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",  // Specify file upload format
//         },
//       });
      
//       // Update message to show success response
//       setMessage("Report submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting report", error);
//       setMessage("Failed to submit the report. Please try again.");  // Error handling
//     }
//   };

//   // JSX for rendering the report form
//   return (
//     <div className="report-container">
//       <h2>Report Illegal Deforestation</h2>

//       {/* Form for submitting deforestation reports */}
//       <form onSubmit={handleSubmit} className="report-form">
//         <label>Description of Incident:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />

//         <label>Location (Coordinates):</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           placeholder="Latitude, Longitude"
//           required
//         />

//         <label>Upload Evidence (Optional):</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <button type="submit">Submit Report</button>
//       </form>

//       {/* Display success/error message */}
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default Report;  // Export the Report component



import { useState } from "react";
import axios from "axios";
import "./Report.css";

const Report = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("location", location);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("/api/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Report submitted successfully!");
      setError(""); // Clear any previous error
    } catch (error) {
      console.error("Error submitting report", error);
      setError("Failed to submit the report. Please try again.");
      setMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="report-container">
      <h2>Report Illegal Deforestation</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="report-form">
        <label>Description of Incident:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Location (Coordinates):</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Latitude, Longitude"
          required
        />
        <label>Upload Evidence (Optional):</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit Report</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Report;