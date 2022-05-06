const router = require('express').Router()
const controller = require('../controllers/AllController')

//BASE_URL/storage*

router.post("/create", controller.CreateStorage)
router.put("/edit/:storage_id", controller.EditStorage)
router.delete('/delete/:storage_id', controller.DeleteStorage)
router.get("/all/:user_id", controller.FindStorage)

module.exports = router