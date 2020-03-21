const db = require("../data/DBConfig")

const getAll = () => {
    return db("resources")
}

const getResource = (id) => db("resources").where("Resource_ID", "=" , id).first()

const addResource = (resource) => db("resources").insert(resource, "Resource_ID")

const putResource = (id, resource) => db("resources").where("Resource_ID", "=" , id).update(resource)

const deleteResource = (id) => db("resources").where("Resource_ID",  "=", id ).del()

module.exports = {
    getAll,
    getResource,
    addResource,
    putResource,
    deleteResource

}



