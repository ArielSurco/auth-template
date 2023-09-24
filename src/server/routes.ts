import AuthRouter from '../auth/router';
import MangasRouter from '../mangas/router';

export const ROUTES = {
  mangas: {
    basePath: '/api/mangas',
    router: MangasRouter,
  },
  auth: {
    basePath: '/api/auth',
    router: AuthRouter,
  },
} as const;