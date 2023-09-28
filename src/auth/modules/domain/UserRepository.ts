import { RegisterUser } from './RegisterUser';
import { User } from './User';

export interface UserRepository {
  create: (user: RegisterUser) => Promise<void>;
  findUserByEmail: (email: string) => Promise<User | null>;
  findUserByUsername: (username: string) => Promise<User | null>;
}