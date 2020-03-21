const router = require("express").Router()
const {getAll} = require("./handlers")

router.get( "/" , getAll)

module.exports = router
