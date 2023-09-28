import { Router } from 'express';

import AuthRouter from '../auth/router';

interface Route {
  basePath: string;
  router: Router;
}

export const ROUTES = {
  auth: {
    basePath: '/api/auth',
    router: AuthRouter,
  },
} as const satisfies Record<string, Route>;