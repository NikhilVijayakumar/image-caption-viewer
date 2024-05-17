// src/routes/imageRoutes.ts
import { Router } from 'express';
import { getImages, getImageDetails } from '../controllers/imageController';

const router = Router();

router.get('/', getImages);
router.get('/details/:filename', getImageDetails); // Endpoint for image details

export default router;

