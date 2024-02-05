import React, { useState } from "react";
import "./reservation.scss";

const Reservation = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phoneNumber: "",
    selectedService: "Ayurvedic Treatments",
    preferredDate: "",
    preferredTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server or store in state)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="reservation" id="Reservation">
      <h2 className="reservation__heading">Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="clientName">Your Name:</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleInputChange}
          required
          autoComplete="name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          autoComplete="email"
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          autoComplete="tel"
        />

        <label htmlFor="selectedService">Select Service:</label>
        <select
          id="selectedService"
          name="selectedService"
          value={formData.selectedService}
          onChange={handleInputChange}
          required
          autoComplete="service"
        >
          {/* Options... */}
        </select>

        <label htmlFor="preferredDate">Preferred Date:</label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleInputChange}
          required
          autoComplete="date"
        />

        <label htmlFor="preferredTime">Preferred Time:</label>
        <input
          type="time"
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleInputChange}
          required
          autoComplete="time"
        />

        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
