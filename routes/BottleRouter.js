const router = require('express').Router()
const controller = require('../controllers/AllController')

//BASE_URL/bottle*

router.post("/create/:storage_id/:user_id", controller.CreateBottle)
router.put("/edit/:bottle_id", controller.EditBottle)
router.delete('/delete/:bottle_id', controller.DeleteBottle)
router.get("/findone/:bottle_id", controller.FindBottle)
router.get('/findany/:storage_id/:search', controller.SearchAllBottleByStorage)

module.exports = router
