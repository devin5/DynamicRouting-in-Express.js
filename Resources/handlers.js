const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(resources => res.status(200).send(resources))
    .catch(err => res.status(500).send(err))
}

module.exports = {
getAll
}