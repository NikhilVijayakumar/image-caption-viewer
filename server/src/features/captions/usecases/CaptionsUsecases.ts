import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const updateCaptionUsecase = (filename: string, caption: string) => {
  const imageFolder = process.env.IMAGE_FOLDER_PATH;
  if (!imageFolder) {
    throw new Error('IMAGE_FOLDER_PATH environment variable is not defined');
  }
  const captionPath = path.join(
    imageFolder,
    `${path.parse(filename).name}.txt`,
  );

  if (!fs.existsSync(captionPath)) {
    throw new Error('Caption file not found');
  }

  fs.writeFileSync(captionPath, caption, 'utf-8');
};
