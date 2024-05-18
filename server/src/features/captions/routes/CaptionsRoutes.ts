import { Router } from 'express';
import { updateCaption } from '../controllers/CaptionsController';

const router = Router();

router.put('/', updateCaption);

export default router;
