const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err))
}

module.exports = {
getAll
}