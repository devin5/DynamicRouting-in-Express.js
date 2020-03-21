const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(projectResources => res.status(200).send(projectResources))
    .catch(err => res.status(500).send(err))
}

module.exports = {
getAll
}