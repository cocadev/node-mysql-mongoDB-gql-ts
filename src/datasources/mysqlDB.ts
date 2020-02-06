import {Sequelize} from 'sequelize';
import model_user from '../graphql/schema/user-model'

const sequelize = new Sequelize("knowledge", 'root', '', {
    host:             "localhost",
    dialect:          "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
  });

export const db = {
  Sequelize: Sequelize,
  sequelize,
  user: null
};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = model_user(sequelize, Sequelize);

try {
  sequelize.authenticate();
  console.log('MySQL Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the MySQL database:', error);
}