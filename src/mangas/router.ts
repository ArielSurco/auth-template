import { Router } from 'express';

import { getMangas } from './controllers';

const router = Router();

router.get('/', getMangas);

export default router;