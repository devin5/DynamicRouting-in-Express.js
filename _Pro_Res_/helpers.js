const db = require("../data/DBConfig")

const getAll = () => {
    return db("_projects_resources_")
}

module.exports = {
    getAll
}