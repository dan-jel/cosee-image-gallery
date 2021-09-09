import React, { useState } from "react";

import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Zoom from "./components/Zoom";

function App() {
  const [selectedImage, setSelectedImage] = useState();

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Zoom
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
