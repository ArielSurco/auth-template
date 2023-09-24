import MangasRouter from '../mangas/router';

export const ROUTES = {
  mangas: {
    basePath: '/api/mangas',
    router: MangasRouter,
  },
} as const;