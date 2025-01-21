import { models } from "../models/index.js";

const { Todo } = models

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const todo = await Todo.create({ title, description });

        res.status(201).json({
            message: "todo added successfully",
            todo
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTodo = async (req, res) => {
    try {
        const todos = await models.Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSingleTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await models.Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await models.Todo.findByPk(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        await todo.destroy();
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findByPk(id);
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        await todo.update({ title, description, completed });
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export { addTodo, getSingleTodo, getTodo, deleteTodo, updateTodo }