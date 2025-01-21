import { createTodoModel } from './todos.models.js';
import { createUserModel } from './users.models.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('crud', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

const models = {};
models.User = createUserModel(sequelize);
models.Todo = createTodoModel(sequelize);

sequelize.sync({ alter: true }).then(() => {
    console.log("All models were synchronized successfully.");
}).catch((error) => {
    console.error("Error syncing models:", error);
});

export { models , sequelize };
