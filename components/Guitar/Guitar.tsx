import React from "react";

//Image component
const Guitar = () => (
  <img
    src="/guitarbody.png" // Route of the image file
    style={{ width: "100vw", filter: "contrast(1.5) saturate(0.5)" }} // Desired size with correct aspect ratio
    alt="Guitar"
  />
);

export default Guitar;
