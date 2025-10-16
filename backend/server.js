// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
  })
);
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/bhagwatiDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    organization: String, // Organization instead of company
    city: String,
    state: String,
    address: String,
    message: String,
  },
  { timestamps: true } // createdAt automatically
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// POST – Save enquiry
app.post("/enquiry", async (req, res) => {
  console.log("Received enquiry:", req.body);
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).send({ message: "Enquiry Submitted" });
  } catch (err) {
    console.error("Error saving enquiry:", err);
    res.status(500).send({ message: "Error saving enquiry" });
  }
});

// GET – Fetch all enquiries
app.get("/enquiries", async (req, res) => {
  try {
    const allEnquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.send(allEnquiries);
  } catch (err) {
    console.error("Error fetching enquiries:", err);
    res.status(500).send({ message: "Error fetching enquiries" });
  }
});

// DELETE – Delete enquiry
app.delete("/enquiry/:id", async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).send({ message: "Enquiry not found" });
    res.send({ message: "Enquiry deleted successfully!" });
  } catch (err) {
    console.error("Error deleting enquiry:", err);
    res.status(500).send({ message: "Error deleting enquiry" });
  }
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
