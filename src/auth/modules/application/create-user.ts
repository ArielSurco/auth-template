import { RegisterUser } from '../domain/RegisterUser';
import { UserRepository } from '../domain/UserRepository';

export const createUser = async (userRepository: UserRepository, registerData: RegisterUser) => {
  await userRepository.create(registerData);
};