const helper = require("./helpers")

const getAll = (req, res) => {
    helper.getAll()
    .then(projectResources => res.status(200).json(projectResources))
    .catch(err => res.status(500).send(err))
}

const getAllResource = (req, res) => {
    const {id} = req.params
    helper.getResourcesByPro(id)
    .then(projectResources => res.status(200).json(projectResources))
    .catch(err => res.status(500).send(err))
}

const addResProject = (req, res) => {
    const {id} = req.params
    const {_Res_ID} = req.body
    helper.addResourcePro({_Res_ID, _Pro_ID:id})
    .then(([id]) => {
        helper.getByID(id)
        .then(x => res.status(200).json(x))

    })
}

module.exports = {
getAll,
getAllResource,
addResProject
}