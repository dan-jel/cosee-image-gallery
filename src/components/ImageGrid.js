import React from "react";
import styled from "styled-components";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <Container>
      {docs &&
        docs.map((doc) => (
          <ImageBox key={doc.id} whileHover={{ opacity: 1 }} layout>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="document pic"
              onClick={() => setSelectedImage(doc.url)}
            />
          </ImageBox>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  margin: 40px;
  grid-gap: 20px;
  grid-template-columns: 400px 400px 400px;
  justify-content: center;
  @media (max-width: 1300px) {
    grid-template-columns: 400px 400px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 400px;
  }
`;

const ImageBox = styled(motion.div)`
  overflow: hidden;
  height: 400px;
  width: 400px;
  position: relative;
  opacity: 0.8;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

export default ImageGrid;
