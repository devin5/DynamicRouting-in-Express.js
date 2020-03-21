const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(projects => res.status(200).send(projects))
    .catch(err => res.status(500).send(err))
}

module.exports = {
getAll
}