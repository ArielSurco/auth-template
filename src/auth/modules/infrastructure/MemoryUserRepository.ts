import bcrypt from 'bcryptjs';

import { RegisterUser } from '../domain/RegisterUser';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

const users: User[] = [];

export const createMemoryUserRepository = (): UserRepository => ({
  create,
  findUserByEmail,
  findUserByUsername,
});

const create = async ({ username, email, password }: RegisterUser): Promise<void> => {
  const encryptedPassword = await encryptPassword(password);
  const newUser: User = {
    id: users.length.toString(),
    username,
    email,
    password: encryptedPassword,
  };

  users.push(newUser);
};

const findUserByEmail = async (email: string): Promise<User | null> => {
  const foundUser = users.find((user) => user.email === email);

  return foundUser ?? null;
};

const findUserByUsername = async (username: string): Promise<User | null> => {
  const foundUser = users.find((user) => user.username === username);

  return foundUser ?? null;
};

/* UTILS */
const encryptPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  return encryptedPassword;
};
