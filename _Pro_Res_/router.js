const router = require("express").Router()
const {getAll, getAllResource,addResProject} = require("./handlers")

router.get( "/" , getAll)
router.get("/:id", getAllResource)
router.post("/:id" , addResProject)

module.exports = router