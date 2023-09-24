import { RegisterUser } from './RegisterUser';

export interface UserRepository {
  create: (user: RegisterUser) => Promise<void>;
}