import { Request, Response } from 'express';
import { getImageBase64Data } from '../usecases/ImageDetailsUsecases';

export const getImageDetails = (req: Request, res: Response) => {
  const { filename } = req.params;
  const base64Image = getImageBase64Data(filename);
  res.json({ base64Image });
};
