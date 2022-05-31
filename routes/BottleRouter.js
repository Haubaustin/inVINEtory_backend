const router = require('express').Router()
const controller = require('../controllers/AllController')
const middleware = require('../middleware')


//BASE_URL/bottle*

router.post("/create/:storage_id/:user_id", middleware.stripToken, middleware.verifyToken, controller.CreateBottle)
router.put("/edit/:bottle_id", middleware.stripToken, middleware.verifyToken, controller.EditBottle)
router.delete('/delete/:bottle_id', middleware.stripToken, middleware.verifyToken, controller.DeleteBottle)
router.get("/findone/:bottle_id", middleware.stripToken, middleware.verifyToken, controller.FindBottle)
router.get('/findinstorage/:storage_id/:search', middleware.stripToken, middleware.verifyToken, controller.SearchAllBottleByStorage)
router.get('/findall/:user_id/:search', middleware.stripToken, middleware.verifyToken, controller.SearchAllBottleByUser)


module.exports = router
