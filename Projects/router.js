const router = require("express").Router()
const {getAll, getPro, addPro, putPro, delPro} = require("./handlers")
const {validateID} = require("./validator")

router.get( "/" , getAll)
router.get("/:id",validateID, getPro)
router.post("/", addPro)
router.put("/:id", validateID, putPro)
router.delete("/:id", validateID, delPro)

module.exports = router
