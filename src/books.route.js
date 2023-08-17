const express = require("express")
 
const booksRoutes = express.Router()
const { PrismaClient} = require ("@prisma/client")

const prisma = new PrismaClient()


// C
booksRoutes.post("/books", async (req, res) => {
    const {name} = req.body
    //Aqui é definido tudo o que será passado como parâmetro
    const todo = await prisma.todo.create({
      data: {
        name,
      }
    })
    // allbooks.push({name, status: false})
    return res.status(201).json(todo)
})
// R 
booksRoutes.get("/books", async (req, res) => {
    //Se erra o nome da variavel o método findMany fica inutilizavel
    const todo = await prisma.todo.findMany()
    return res.status(200).json(todo)
})
// U 
booksRoutes.put("/books", async(req, res) =>{
  const {name, id, status} = req.body

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



module.exports = booksRoutes