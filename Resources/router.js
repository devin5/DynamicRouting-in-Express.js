const router = require("express").Router()
const {getAll, getRes, addRes, putRes, delRes} = require("./handlers")
const {validateID} = require("./validators")

router.get( "/" , getAll)
router.get("/:id",validateID, getRes)
router.post("/", addRes)
router.put("/:id", validateID, putRes)
router.delete("/:id", validateID, delRes)

module.exports = router
