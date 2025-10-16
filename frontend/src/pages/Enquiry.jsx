import { useState } from "react";

function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "", // <-- Organization field
    city: "",
    state: "",
    address: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Message validation
    const messageLength = form.message.trim().length;
    if (messageLength < 20 || messageLength > 80) {
      alert("Message must be between 20 and 80 characters.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        setForm({
          name: "",
          email: "",
          phone: "",
          organization: "",
          city: "",
          state: "",
          address: "",
          message: ""
        });
      } else {
        alert("result.message" || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please check backend is running.");
    }
  }

  return (
    <div className="page">
      <h1>Enquiry Form</h1>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="organization" placeholder="Organization / Company / School" value={form.organization} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Enquiry;
