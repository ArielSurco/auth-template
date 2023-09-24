import { Router } from 'express';
import { body } from 'express-validator';

import { signUp } from './controllers/sign-up';
import { signIn } from './controllers/sign-in';
import { validateFields } from './middlewares/validateFields';

const router = Router();

router.post(
  '/sign-up',
  [
    body('username', 'Username is required').notEmpty(),
    body('email', 'Email Must be valid').isEmail(),
    body('password', 'Password must have at least 6 letters').isLength({ min: 6 }),
    validateFields,
  ],
  signUp,
);

router.post('/sign-in', signIn);

export default router;