const db = require("../data/DBConfig")

const getAll = () => {
    return db("projects")
}

module.exports = {
    getAll
}