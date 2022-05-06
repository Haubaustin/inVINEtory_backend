const router = require('express').Router()
const controller = require('../controllers/AllController')

//BASE_URL/bottle/*

router.get("/create", controller.CreateBottle)
router.put("/edit/:bottle_id", controller.EditBottle)
router.delete('/delete/:bottle_id', controller.DeleteBottle)
router.get("/all/:bottle_id", controller.FindBottle)
