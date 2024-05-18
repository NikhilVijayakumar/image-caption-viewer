import React from 'react';

interface ImageViewProps {
  imageData: string; // Change imagePath to imageData
}

const ImageView: React.FC<ImageViewProps> = ({ imageData }) => {
  return (
    <div>
      <img src={`data:image/png;base64,${imageData}`} alt="Current" style={{ width: '512px', height: '512px' }} />
    </div>
  );
};

export default ImageView;


