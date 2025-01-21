import { sequelize } from '../models/index.js';

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log('All models initialized and synced successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize, connectDB };
