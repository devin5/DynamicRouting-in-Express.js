const router = require("express").Router()
const {getAll, getTask, addTask, putTask, delTask} = require("./handlers")
const {validateID} = require("./validators")

router.get( "/" , getAll)
router.get("/:id",validateID, getTask)
//Project ID
router.post("/:id", addTask)
//task ID
router.put("/:id", validateID, putTask)

router.delete("/:id", validateID, delTask)

module.exports = router
