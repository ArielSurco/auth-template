import { ResponseError } from '../../../server/ResponseError';
import { RegisterUser } from '../domain/RegisterUser';
import { UserRepository } from '../domain/UserRepository';

export const createUser = async (userRepository: UserRepository, registerData: RegisterUser) => {
  const [userWithSameEmail, userWithSameUsername] = await Promise.all([
    userRepository.findUserByEmail(registerData.email),
    userRepository.findUserByUsername(registerData.username),
  ]);

  if (userWithSameEmail) {
    throw new ResponseError(400, 'Email already in use');
  }

  if (userWithSameUsername) {
    throw new ResponseError(400, 'Username already in use');
  }

  await userRepository.create(registerData);
};