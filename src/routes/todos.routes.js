import express from 'express'
import { addTodo, deleteTodo, getSingleTodo, getTodo, updateTodo } from '../controllers/todos.controllers.js'

const router = express.Router()

router.post('/todo' , addTodo)
router.get('/todo' , getTodo)
router.get('/todo/:id' , getSingleTodo)
router.delete('/todo/:id' , deleteTodo)
router.put('/todo/:id' , updateTodo)

export default router