import { Router } from 'express';
import { body } from 'express-validator';

import { signUp } from './controllers/sign-up';
import { signIn } from './controllers/sign-in';
import { validateFields } from './middlewares/validateFields';
import { signOut } from './controllers/sign-out';

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

router.post(
  '/sign-in',
  [
    body('email', 'Email Must be valid').isEmail().notEmpty(),
    body('password', 'Password is required').notEmpty(),
    validateFields,
  ],
  signIn);

router.get('/sign-out', signOut);

export default router;