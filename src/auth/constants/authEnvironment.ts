import dotenv from 'dotenv';

dotenv.config();

export const AUTH_ENV = {
  JWT_SECRET: process.env.JWT_SECRET ?? '',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION ?? '',
};