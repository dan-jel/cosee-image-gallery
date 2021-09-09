import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Zoom = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("close")) {
      setSelectedImage(null);
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
      className="close"
    >
      <motion.img
        src={selectedImage}
        alt="zoomed view"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </Container>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  img {
    display: block;
    max-width: 80%;
    max-height: 80%;
    margin: 50px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
  }
`;

export default Zoom;
