import { Sequelize } from 'sequelize';
import { createUserModel } from '../models/users.models.js';
import { initializeModels } from '../models/index.js';

const sequelize = new Sequelize('crud', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        initializeModels(sequelize);
        await sequelize.sync({alter: true})
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize, connectDB };