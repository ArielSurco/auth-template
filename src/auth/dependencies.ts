import { createMemoryUserRepository } from './modules/infrastructure/MemoryUserRepository';
import { createMySQLUserRepository } from './modules/infrastructure/MySQLUserRepository';

export const userRepository = createMySQLUserRepository();