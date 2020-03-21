const db = require("../data/DBConfig")

const getAll = () => {
    return db("_projects_resources_")
}

const getByID = (id) => db("_projects_resources_").where("_ID", "=" , id)
//id of project
const getResourcesByPro = (id) => db("_projects_resources_").where("_Pro_ID", "=" , id)
const addResourcePro = (respro) => db("_projects_resources_").insert(respro)

module.exports = {
    getAll,
    getResourcesByPro,
    addResourcePro,
    getByID
}