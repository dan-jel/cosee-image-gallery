import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const types = ["image/jpeg", "image/png", "image/jpg"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const ChangeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png,jpeg,jpg)");
    }
  };

  return (
    <Container>
      <form>
        <input type="file" onChange={ChangeHandler}></input>
        <Output>
          {error && <Message className="error">{error}</Message>}
          {file && <Message className="valid">{file.name}</Message>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </Output>
      </form>
    </Container>
  );
};

const Output = styled.div``;

const Message = styled.div``;

const Container = styled.div``;

export default UploadForm;
