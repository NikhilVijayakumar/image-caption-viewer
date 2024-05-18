import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const getImageBase64Data = (filename: string): string => {
  const imageFolder = process.env.IMAGE_FOLDER_PATH;

  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }
  const imagePath = path.join(imageFolder, filename);

  if (!fs.existsSync(imagePath)) {
    throw new Error('Image not found');
  }

  const imageBuffer = fs.readFileSync(imagePath);
  return imageBuffer.toString('base64');
};
