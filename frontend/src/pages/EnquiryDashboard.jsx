import React, { useEffect, useState } from "react";
import "./EnquiryDashboard.css";

function EnquiryDashboard() {
  const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:5000/enquiries");
      const data = await res.json();
      setEnquiries(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEnquiries();
    const interval = setInterval(fetchEnquiries, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await fetch(`http://localhost:5000/enquiry/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setEnquiries(enquiries.filter((enq) => enq._id !== id));
        alert(data.message);
      } else {
        alert(data.message || "Error deleting enquiry");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while deleting.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "/admin-login";
  };

  return (
    <div className="page">
      <h1>All Enquiries</h1>
      <button onClick={handleLogout}>Logout</button>
      <table className="enquiry-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Organization</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq) => (
            <tr key={enq._id}>
              <td>{enq.name}</td>
              <td>{enq.email}</td>
              <td>{enq.phone}</td>
              <td>{enq.organization || enq.company}</td> {/* fallback for old data */}
              <td>{enq.address}</td>
              <td>{enq.city}</td>
              <td>{enq.state}</td>
              <td>{enq.message}</td>
              <td>{new Date(enq.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(enq._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryDashboard;
