// src/utils/fileUtils.ts
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

interface ImageData {
  filename: string; // Change imagePath to filename
  caption: string;
}
const imageFolder = process.env.IMAGE_FOLDER_PATH;

export const readImagesAndCaptions = (): ImageData[] => {

  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }

  return fs.readdirSync(imageFolder)
    .filter(file => file.endsWith('.png'))
    .map(file => {
      const imageName = path.parse(file).name;
      const filename = `${imageName}.png`; // Only filename without the path
      const captionPath = path.join(imageFolder, `${imageName}.txt`);
      let caption = '';

      if (fs.existsSync(captionPath)) {
        caption = fs.readFileSync(captionPath, 'utf-8');
      }

      return {
        filename,
        caption
      };
    });
};

export const getImageBase64Data = (filename: string): string => {
  const imageFolder = process.env.IMAGE_FOLDER_PATH;
  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }

  const imagePath = path.join(imageFolder, filename);
  if (fs.existsSync(imagePath)) {
    const image = fs.readFileSync(imagePath);
    return Buffer.from(image).toString('base64');
  } else {
    throw new Error('Image not found');
  }
};

export const updateCaption = (filename: string, newCaption: string): void => {
  
  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }

  const imageName = path.parse(filename).name;
  const captionPath = path.join(imageFolder, `${imageName}.txt`);
  fs.writeFileSync(captionPath, newCaption, 'utf-8');
};



