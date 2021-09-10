import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, setInputForm }) => {
  const { url, progress } = useStorage(file);

  if (progress === 100)
    setTimeout(function () {
      setInputForm(false);
    }, 600);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Container
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      transition={{ ease: "anticipate" }}
    ></Container>
  );
};

const Container = styled(motion.div)`
  background: #a2d2ff;
  height: 10px;
`;

export default ProgressBar;
