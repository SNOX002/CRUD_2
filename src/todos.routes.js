const express = require("express")
 
const allTodos = [{nome: "aaaa", status: false}]
const todosRoutes = express.Router()
const { PrismaClient} = require ("@prisma/client")

const prisma = new PrismaClient()


// C
todosRoutes.post("/todos", async (req, res) => {
    const {name} = req.body
    //Aqui é definido tudo o que será passado como parâmetro
    const todo = await prisma.todo.create({
      data: {
        name,
      }
    })
    // allTodos.push({name, status: false})
    return res.status(201).json(todo)
})
// R 
// U 
// D 

module.exports = todosRoutes