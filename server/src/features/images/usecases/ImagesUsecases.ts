import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export interface ImageData {
  filename: string;
  caption: string;
}

export const readImagesAndCaptions = (): ImageData[] => {
  const imageFolder = process.env.IMAGE_FOLDER_PATH;
  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }

  return fs
    .readdirSync(imageFolder)
    .filter((file) => file.endsWith('.png'))
    .map((file) => {
      const imageName = path.parse(file).name;
      const captionPath = path.join(imageFolder, `${imageName}.txt`);
      let caption = '';

      if (fs.existsSync(captionPath)) {
        caption = fs.readFileSync(captionPath, 'utf-8');
      }

      return {
        filename: file,
        caption,
      };
    });
};
