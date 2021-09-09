import React from "react";
import styled from "styled-components";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
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
  margin: 20px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;

const ImageBox = styled(motion.div)`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;

  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default ImageGrid;
