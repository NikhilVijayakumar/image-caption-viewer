// src/controllers/imageController.ts
import { Request, Response } from 'express';
import { readImagesAndCaptions, getImageBase64Data } from '../utils/fileUtils';

export const getImages = (req: Request, res: Response) => {
  const images = readImagesAndCaptions();
  res.json(images);
};

export const getImageDetails = (req: Request, res: Response) => {
  const { filename } = req.params;
  try {
    const base64Image = getImageBase64Data(filename);
    const imageData = { filename, base64Image }; // You can add more details if needed
    res.json(imageData);
  } catch (error) {
    res.status(404).send('Image not found');
  }
};


