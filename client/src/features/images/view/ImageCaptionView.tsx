// src/features/images/view/ImageCaptionView.tsx
import React from 'react';
import { useImageViewModel } from '../viewmodel/ImageViewModel';
import ImageView from '../components/ImageView';
import Caption from '../components/Caption';
import Navigation from '../components/Navigation';
import '../../../App.css';

const ImageCaptionView: React.FC = () => {
  const { images, imageDetails, currentIndex, nextImage, prevImage, saveCaption } = useImageViewModel();

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  const { caption } = images[currentIndex];

  return (
    <div className="container">
      <ImageView imageData={imageDetails} />
      <Caption text={caption} onSave={saveCaption} />
      <Navigation onNext={nextImage} onPrevious={prevImage} />
    </div>
  );
};

export default ImageCaptionView;
