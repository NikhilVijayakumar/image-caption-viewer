// src/controllers/imageController.ts
import { Request, Response } from 'express';
import { readImagesAndCaptions, getImageBase64Data,updateCaption } from '../utils/fileUtils';

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

export const updateImageCaption = (req: Request, res: Response) => {
  const { filename, caption } = req.body;

  if (!filename || !caption) {
    return res.status(400).send('Filename and caption are required');
  }

  try {
    updateCaption(filename, caption);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send('Failed to update caption');
  }
};


