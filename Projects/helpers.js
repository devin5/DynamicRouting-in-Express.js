const db = require("../data/DBConfig")

const getAll = () => db("projects")

const getProject = (id) => db("projects").where("Project_ID", "=" , id).first()

const addProject = (project) => db("projects").insert(project, "id")

const putProject = (id, project) => db("projects").where("Project_ID", "=" , id).update(project)

const deleteProject = (id) => db("projects").where("Project_ID",  "=", id ).del()

module.exports = {
    getAll,
    getProject,
    addProject,
    putProject,
    deleteProject

}

