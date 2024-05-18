import { Router } from 'express';
import { getImageDetails } from '../controllers/ImageDetailsController';

const router = Router();

router.get('/:filename', getImageDetails);

export default router;
