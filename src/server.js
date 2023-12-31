import express from 'express'
import todosRoutes from './todos.routes'

const app = express()
const port = 3000

// Utilização "http://localhost:3000/todos"

app.use(express.json())
app.use(todosRoutes)

app.get('/healt', (req, res) => {
  res.json('UP')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
