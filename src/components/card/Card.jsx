import React from "react";
import "./Card.css";
import { useState } from "react";

export default function Card({ title, image, description }) {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="card">
      <img src={image} alt="Card Image" className="card-image" />
      {/* Conditionally render the title based on isVisible */}
      {isVisible && <h2>{title}</h2>}
      <p>{description}</p>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Title" : "Show Title"}
      </button>
    </div>
  );
}
