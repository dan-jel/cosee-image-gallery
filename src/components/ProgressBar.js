import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import styled from "styled-components";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <Container progress={progress}></Container>;
};

const Container = styled.div`
  width: ${(props) => props.progress}%;
  background: red;
  height: 10px;
`;

export default ProgressBar;
