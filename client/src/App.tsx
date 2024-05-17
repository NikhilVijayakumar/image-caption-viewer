import React, { useEffect, useState } from 'react';
import './App.css';
import ImageView from './components/ImageView';
import Caption from './components/Caption';
import Navigation from './components/Navigation';
import { fetchImages, ImageData, fetchImageDetails } from './services/api';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [imageDetails, setImageDetails] = useState<string>(''); // State to store base64 image data
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const loadImageDetails = async () => {
      if (images.length > 0) {
        const { filename } = images[currentIndex];
        const details = await fetchImageDetails(filename);
        setImageDetails(details.base64Image);
      }
    };

    loadImageDetails();
  }, [currentIndex, images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  const { caption } = images[currentIndex];

  return (
    <div className="App">
      <ImageView imageData={imageDetails} />
      <Caption text={caption} />
      <Navigation onNext={nextImage} onPrevious={prevImage} />
    </div>
  );
};

export default App;
