import { createTodoModel } from './todos.models.js';
import { createUserModel } from './users.models.js';

const initializeModels = (sequelize) => {
    const models = {};

    models.User = createUserModel(sequelize);
    models.Todo = createTodoModel(sequelize)

    return models;
};

export { initializeModels };
