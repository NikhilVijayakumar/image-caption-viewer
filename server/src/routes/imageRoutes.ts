// src/routes/imageRoutes.ts
import { Router } from 'express';
import { getImages, getImageDetails,updateImageCaption  } from '../controllers/imageController';

const router = Router();

router.get('/', getImages);
router.get('/details/:filename', getImageDetails); // Endpoint for image details
router.put('/caption', updateImageCaption); // Endpoint for updating image caption

export default router;

