import React, { useState } from 'react';
import InputCode from './InputCode';
import ImageDisplay from './ImageDisplay';

const ParentComponent = () => {
  const [imageData, setImageData] = useState(null);

  return (
    <div>
      <InputCode setImageData={setImageData} />
      {imageData && <ImageDisplay imageData={imageData} />}
    </div>
  );
};

export default ParentComponent;