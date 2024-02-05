import React, { useState } from "react";
import spaServices from "./SpaData";
import "./services.scss";
import { getImageURL } from "../utils/ImageUtils";

const Services = () => {
  const [selectedService, setSelectedService] = useState(spaServices[0]);

  const handleServiceChange = (event) => {
    const selectedServiceName = event.target.value;
    const service = spaServices.find((s) => s.name === selectedServiceName);
    setSelectedService(service);
  };

  return (
    <div>
      <section className="services" id="Services">
        <div className="heading_container">
          <h1>Services</h1>
        </div>
        <div className="servie_P">
          <p>
            Treat yourself to our refreshing spa services! We've whipped up some
            amazing treatments with 100% natural ingredients to pamper your body
            and soothe your soul. 🌿✨
          </p>
        </div>

        <div className="image-container">
          <img
            className="service_image"
            src={getImageURL(selectedService.image)}
            alt={selectedService.name}
          />
        </div>

        <div>
          <label htmlFor="spaService">Choose a spa service</label>
          <br />
          <select
            id="spaService"
            onChange={handleServiceChange}
            value={selectedService.name}
          >
            {spaServices.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="table-container">
        <table className="service-details">
          <thead>
            <tr>
              <th>Service</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedService.name}</td>
              <td>{selectedService.category}</td>
              <td>{selectedService.cost}</td>
              <td>{selectedService.description}</td>
              <td>{selectedService.duration}</td>
              <td>
                {selectedService.benefits &&
                  selectedService.benefits.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
