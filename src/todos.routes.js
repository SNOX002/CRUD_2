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
// U 
// D 

module.exports = todosRoutes