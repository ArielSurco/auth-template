import bcrypt from 'bcryptjs';

import { UserModel } from '../../../db/mysql/models/User';
import { RegisterUser } from '../domain/RegisterUser';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export const createMySQLUserRepository = (): UserRepository => ({
  create,
  findUserByEmail,
  findUserByUsername,
});

const create = async (registerData: RegisterUser): Promise<void> => {
  const encryptedPassword = await encryptPassword(registerData.password);

  const newUser: RegisterUser = {
    username: registerData.username,
    email: registerData.email,
    password: encryptedPassword,
  };

  await UserModel.create(newUser);
};

const findUserByEmail = async (email: string): Promise<User | null> => {
  const foundUser = await UserModel.findOne({ where: { email } });

  if (!foundUser) return null;

  return foundUser.dataValues;
};

const findUserByUsername = async (username: string): Promise<User | null> => {
  const foundUser = await UserModel.findOne({ where: { username } });

  if (!foundUser) return null;

  return foundUser.dataValues;
};


/* UTILS */
const encryptPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  return encryptedPassword;
};