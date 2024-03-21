import React from 'react';
import { Buffer } from 'buffer';
const ImageDisplay = ({ imageData }) => {
  const base64ImageString = Buffer.from(imageData.data, 'binary').toString('base64');
  const srcValue = "data:image/png;base64,"+base64ImageString
 console.log(srcValue)
  return <div><img src={srcValue} alt="Response Image" /></div>;
};

export default ImageDisplay;
