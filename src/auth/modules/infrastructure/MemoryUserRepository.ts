import bcrypt from 'bcryptjs';

import { RegisterUser } from '../domain/RegisterUser';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

const users: User[] = [];

export const createMemoryUserRepository = (): UserRepository => ({
  create,
});

export const create = async ({ username, email, password }: RegisterUser): Promise<void> => {
  const encryptedPassword = await encryptPassword(password);
  const newUser: User = {
    id: users.length.toString(),
    username,
    email,
    password: encryptedPassword,
  };
  console.log(newUser);

  users.push(newUser);
};

/* UTILS */
const encryptPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  return encryptedPassword;
};

// const comparePassword = async (password: string, receivedPassword: string): Promise<boolean> => {
//   const isSamePassword = await bcrypt.compare(password, receivedPassword);

//   return isSamePassword;
// };
