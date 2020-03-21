const db = require("../data/DBConfig")

const getAll = () => {
    return db("tasks")
}

module.exports = {
    getAll
}