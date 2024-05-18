// src/features/captions/controllers/CaptionsController.ts
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { updateCaptionUsecase } from '../usecases/CaptionsUsecases';

dotenv.config();

export const updateCaption = (req: Request, res: Response) => {
  const { filename, caption } = req.body;
  if (!filename || !caption) {
    return res
      .status(400)
      .json({ message: 'Filename and caption are required' });
  }

  try {
    updateCaptionUsecase(filename, caption);
    res.status(200).json({ message: 'Caption updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating caption', error });
  }
};
