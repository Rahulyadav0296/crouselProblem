import React, { useEffect, useState } from "react";
import { images } from "./utils/data";
function App() {
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrev = () => {
    setImgIndex((imgIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setImgIndex((imgIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [imgIndex]);

  console.log(images);
  return (
    <div className="images-data">
      <button onClick={handlePrev} className="prev">
        Prev
      </button>
      {images.map((image, index) => (
        <div key={index} className="image-items">
          {index === imgIndex && (
            <img src={image} alt={index} className="image-item" />
          )}
        </div>
      ))}
      <button onClick={handleNext} className="next">
        Next
      </button>
    </div>
  );
}

export default App;
