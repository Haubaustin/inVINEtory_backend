const router = require('express').Router()
const controller = require('../controllers/AllController')
const middleware = require('../middleware')


//BASE_URL/storage*

router.post("/:user_id/create", middleware.stripToken, middleware.verifyToken, controller.CreateStorage)
router.put("/edit/:storage_id", middleware.stripToken, middleware.verifyToken, controller.EditStorage)
router.delete('/delete/:storage_id', middleware.stripToken, middleware.verifyToken, controller.DeleteStorage)
router.get("/:user_id/all", middleware.stripToken, middleware.verifyToken, controller.FindStorage)
router.get("/:user_id/find/:storage_id", middleware.stripToken, middleware.verifyToken, controller.FindOneStorage)
router.get('/:user_id/notcurrent/:storage_id', middleware.stripToken, middleware.verifyToken, controller.FindAllButCurrentStorage)

module.exports = router