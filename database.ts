import { Sequelize, DataTypes, Model } from '@sequelize/core'

const sequelize = new Sequelize('zeroblog', 'zeroblog', 'RUORLKZCDW5I287b', {
  host: 'localhost',
  dialect: 'mysql'
});
export class User extends Model {};
User.init({
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  admin: { type: DataTypes.BOOLEAN, allowNull: false },
}, { sequelize, modelName: 'Users' });
export async function dispatch() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}