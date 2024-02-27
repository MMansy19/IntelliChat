import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

function RandomImage() {
  // Array of image URLs
  const images = [
    "airobot.png",
    "robot.png",
    "robott.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
  ];

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    // Generate a random index within the range of the images array length
    const newIndex = Math.floor(Math.random() * images.length);
    setRandomIndex(newIndex);
  }, []); // Run this effect only once on component mount

  return (
    <Box padding={8} mt={5} display={{ md: "flex", sm: "none", xs: "none" }}>
      <img
        src={`images/${images[randomIndex]}`}
        alt="Robot"
        style={{ maxHeight: "700px", position: "fixed" }}
      />
    </Box>
  );
}

export default RandomImage;
