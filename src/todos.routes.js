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
todosRoutes.get("/todos", async (req, res) => {
    //Se erra o nome da variavel o método findMany fica inutilizavel
    const todo = await prisma.todo.findMany()
    return res.status(200).json(todo)
})
// U 
todosRoutes.put("/todos", async(req, res) =>{
  const {name, id} = req.body

  if(!id)
  {
    return res.status(403).json("ID é necessário")
  }

  const todoAlreadyExist = await prisma.todo.findUnique({ where: {id} })

  if(!todoAlreadyExist) {
    return res.status(404).json("Todo not exist")
  }
  const todo = await prisma.todo.update({
    where:{
      id,
    },
    data: {
      name,
    },
  })
  return res.status(201).json(todo)
})

// D 
todosRoutes.delete("/todos",async (req, res) => {
  const {name, id} = req.body

  if(!id)
  {
    return res.status(403).json("ID é necessário")
  }
  const todoAlreadyExist = await prisma.todo.findUnique({ where: {id} })

  if(!todoAlreadyExist) {
    return res.status(404).json("Todo Não existe")
  }
  const todo = await prisma.todo.delete({ 
    where: {
      id, 
      name,
      } 
    })
    const response = {
      message: `Todo com ID ${todo.id} foi deletada do DB`,
      deletedTodo: todo,
    };
  return res.status(201).json( response);
})


module.exports = todosRoutes