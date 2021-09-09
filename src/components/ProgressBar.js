import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></Container>
  );
};

const Container = styled(motion.div)`
  background: red;
  height: 10px;
`;

export default ProgressBar;
