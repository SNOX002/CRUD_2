const express = require("express")
 
const allTodos = [{nome: "aaaa", status: false}]
const todosRoutes = express.Router()

// C
todosRoutes.post("/todos", (req, res) => {
    const {name} = req.body
    allTodos.push({name, status: false})
    return res.status(201).json(allTodos)
})
// R 
todosRoutes.get("/todos", (req, res) => {
    return res.status(200).json(allTodos)
})
// U 
// D 

module.exports = todosRoutes