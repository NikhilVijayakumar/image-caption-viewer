// src/features/images/hooks/useImages.ts
import { useState, useEffect } from 'react';
import { fetchImages, fetchImageDetails, updateCaption, ImageData } from '../../../services/api';

export const useImages = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [imageDetails, setImageDetails] = useState<string>('');
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

  const saveCaption = async (newCaption: string) => {
    const { filename } = images[currentIndex];
    await updateCaption(filename, newCaption);
    setImages((prevImages) =>
      prevImages.map((img, index) =>
        index === currentIndex ? { ...img, caption: newCaption } : img
      )
    );
  };

  return {
    images,
    imageDetails,
    currentIndex,
    nextImage,
    prevImage,
    saveCaption,
  };
};
