import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectDB } from './src/db/index.js'
import todosRouter from './src/routes/todos.routes.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1', todosRouter)

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("POSTGRESQL connection failed !!! ", err);
  });