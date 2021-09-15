import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

const UploadForm = ({ setInputForm }) => {
  const types = ["image/jpeg", "image/png", "image/jpg"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [tempFile, setTempFile] = useState(null);
  const [tag, setTag] = useState(null);

  const FileChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setTempFile(selected);
      setError(null);
    } else {
      setTempFile(null);
      setError("Please select an image file (png,jpeg,jpg)");
    }
  };

  const TagChangeHandler = (e) => {
    let selected = e.target.value;
    setTag(selected);
  };

  const ClickHandler = (e) => {
    if (tempFile) {
      if (tag) {
        let image = { image: tempFile, tag: tag };
        setFile(image);
      } else {
        setError("please add a tag");
      }
    } else {
      setError("please add a file");
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("close")) {
      setInputForm(null);
    }
  };

  return (
    <Container onClick={handleClick} className="close">
      <div id="box">
        <InputForm>
          <UploadButton
            type="button"
            onClick={() => document.getElementById("file").click()}
          >
            select file
          </UploadButton>
          <input
            id="file"
            className="file"
            type="file"
            onChange={FileChangeHandler}
          ></input>
          {tempFile && <p className="valid">{tempFile.name}</p>}
          <input
            className="tag"
            type="text"
            placeholder="tag"
            onChange={TagChangeHandler}
          ></input>
          <div>{error && <p className="error">{error}</p>}</div>
          <SubmitButton type="button" onClick={ClickHandler}>
            upload
          </SubmitButton>
          <SpacingProgressBar>
            {file && (
              <ProgressBar
                file={file}
                setFile={setFile}
                setInputForm={setInputForm}
              />
            )}
          </SpacingProgressBar>
        </InputForm>
      </div>
    </Container>
  );
};

const SpacingProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: white;
  margin-top: 20px;
`;

const Container = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
  #box {
    max-height: 60%;
    width: 400px;
    background: white;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    border-radius: 15px;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
  overflow: hidden;
  .tag {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 1.3rem;
    margin: 20px;
  }
  .file {
    display: none;
  }
  p {
    margin: 0;
  }
  .error {
    color: red;
  }
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 100px;
  margin-top: 20px;
  border: none;
  background: #a2d2ff;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

const UploadButton = styled.button`
  width: 100px;
  height: 30px;
  background: #a2d2ff;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;

export default UploadForm;
