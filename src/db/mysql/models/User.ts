import { DataTypes, Model } from 'sequelize';

import { sequelizeDB } from '../connection';
import { User } from '../../../auth/modules/domain/User';
import { RegisterUser } from '../../../auth/modules/domain/RegisterUser';

interface UserInstance extends Model<User, RegisterUser> {}

export const UserModel = sequelizeDB.define<UserInstance, User>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'user',
  },
);
