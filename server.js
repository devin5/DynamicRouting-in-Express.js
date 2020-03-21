const express = require("express")
const morgan = require("morgan")
const logger = require("./middleware/logger")
const projectRouter = require("./Projects/router")
const resourceRouter = require("./Resources/router")
const taskRouter = require("./Tasks/router")
const proresRouter = require("./_Pro_Res_/router")




// creates server
server = express()
 //uses JSON
server.use(express.json())
//morgan loger middleware
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(logger)

//Routers
server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)
server.use("/projectresources", proresRouter)





server.get("/" , (req, res) => {
    res.status(200).send("As I drown in the ocean, my misery gasps for its first taste of true fresh air. ")
} )

module.exports = server