import bcrypt from 'bcryptjs';

import { UserCredentials } from '../domain/UserCredentials';
import { UserRepository } from '../domain/UserRepository';
import { ResponseError } from '../../../server/ResponseError';
import { createJWT } from '../../utils/createJWT';

export const authUser = async (
  userRepository: UserRepository,
  userCredentials: UserCredentials,
): Promise<string> => {
  const foundUser = await userRepository.findUserByEmail(userCredentials.email);

  if (!foundUser) {
    throw new ResponseError(400, 'Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(userCredentials.password, foundUser.password);

  if (!isPasswordValid) {
    throw new ResponseError(400, 'Invalid credentials');
  }

  const token = await createJWT({ id: foundUser.id, email: foundUser.email });

  return token;
};