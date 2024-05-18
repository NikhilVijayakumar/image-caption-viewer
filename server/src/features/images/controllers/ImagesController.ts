import { Request, Response } from 'express';
import { readImagesAndCaptions } from '../usecases/ImagesUsecases';

export const getImages = (req: Request, res: Response) => {
  const images = readImagesAndCaptions();
  res.json(images);
};
