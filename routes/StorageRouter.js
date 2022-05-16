const router = require('express').Router()
const controller = require('../controllers/AllController')

//BASE_URL/storage*

router.post("/:user_id/create", controller.CreateStorage)
router.put("/edit/:storage_id", controller.EditStorage)
router.delete('/delete/:storage_id', controller.DeleteStorage)
router.get("/:user_id/all", controller.FindStorage)
router.get("/:user_id/find/:storage_id", controller.FindOneStorage)
router.get('/:user_id/notcurrent/:storage_id', controller.FindAllButCurrentStorage)

module.exports = router