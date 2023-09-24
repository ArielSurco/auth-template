import { createMemoryUserRepository } from './modules/infrastructure/MemoryUserRepository';

export const userRepository = createMemoryUserRepository();