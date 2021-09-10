import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Zoom from "./components/Zoom";

function App() {
  const [selectedImage, setSelectedImage] = useState();
  const [inputForm, setInputForm] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header setInputForm={setInputForm} />
        {inputForm && <UploadForm setInputForm={setInputForm} />}
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Zoom
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
        )}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 80%;
  position: relative;
  left: 10%;
  margin: 50px 0;
`;

export default App;
