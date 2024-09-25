// // Import necessary libraries and components
// import  { useState, useEffect } from "react";
// import axios from "axios";  // For API requests to fetch reports
// import "./Admin.css";  // Custom styles for admin panel

// // Functional component for the Admin page
// const Admin = () => {
//   // State for storing fetched reports data
//   const [reports, setReports] = useState([]);

//   // Fetch all reports on component mount using useEffect
//   useEffect(() => {
//     axios.get("/api/reports")
//       .then(response => {
//         setReports(response.data);  // Store the reports in state
//       })
//       .catch(error => console.error("Error fetching reports", error));
//   }, []);

//   // JSX structure of the admin panel
//   return (
//     <div className="admin-container">
//       <h2>Admin Portal</h2>
//       <div className="reports-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Report ID</th>
//               <th>Description</th>
//               <th>Location</th>
//               <th>Date Submitted</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Render each report in the table */}
//             {reports.map((report) => (
//               <tr key={report.id}>
//                 <td>{report.id}</td>
//                 <td>{report.description}</td>
//                 <td>{report.location}</td>
//                 <td>{new Date(report.date).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Admin;  // Export the Admin component



import { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports", error);
        setError("Failed to fetch reports. Please try again later.");
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Portal</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Description</th>
              <th>Location</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.description}</td>
                <td>{report.location}</td>
                <td>{new Date(report.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;