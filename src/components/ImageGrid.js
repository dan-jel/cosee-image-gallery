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
          <Card
            key={doc.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <ImageBox>
              <motion.img src={doc.url} alt="document pic" />
            </ImageBox>
            <Tag>{doc.tag}</Tag>
          </Card>
        ))}
    </Container>
  );
};

const Card = styled(motion.div)`
  height: 430px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #dddddd;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  :hover {
    cursor: pointer;
  }
`;

const Tag = styled.div`
  width: 100%;
  height: 20px;
  font-size: 1.2rem;
  padding-top: 5px;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  margin: 40px;
  grid-gap: 20px 20px;
  grid-template-columns: 400px 400px 400px;
  justify-content: center;
  @media (max-width: 1300px) {
    grid-template-columns: 400px 400px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 400px;
  }
`;

const ImageBox = styled.div`
  overflow: hidden;
  height: 400px;
  width: 400px;
  position: relative;
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
