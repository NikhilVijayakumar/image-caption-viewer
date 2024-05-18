import { Router } from 'express';
import { getImages } from '../controllers/ImagesController';

const router = Router();

router.get('/', getImages);

export default router;
