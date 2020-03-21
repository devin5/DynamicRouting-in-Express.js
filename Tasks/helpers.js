const db = require("../data/DBConfig")

const getAll = () => db("tasks")

const getTask = (id) => db("tasks").join("projects", "projects.Project_ID", "=", "tasks.Task_Project_ID").where("Task_Project_ID", "=" , id).select("*")

const addTask = (task) => db("tasks").insert(task, "Task_ID")

const putTask = (id, task) => db("tasks").where("Task_ID", "=" , id).update(task)

const deleteTask = (id) => db("tasks").where("Task_ID",  "=", id ).del()

module.exports = {
    getAll,
    getTask,
    addTask,
    putTask,
    deleteTask
}