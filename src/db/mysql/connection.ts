import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  host: process.env.MY_SQL_HOST ?? '',
  db: process.env.MY_SQL_DB ?? '',
  user: process.env.MY_SQL_USER ?? '',
  password: process.env.MY_SQL_PASSWORD ?? '',
};

export const sequelizeDB = new Sequelize(CONFIG.db, CONFIG.user, CONFIG.password, {
  host: CONFIG.host,
  dialect: 'mysql',
});

sequelizeDB.authenticate()
  .then(() => {
    sequelizeDB.sync();
    console.log('Connection has been established successfully.');
  })
  .catch((err) => console.log('error', err));
