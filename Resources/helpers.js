const db = require("../data/DBConfig")

const getAll = () => {
    return db("resources")
}

module.exports = {
    getAll
}