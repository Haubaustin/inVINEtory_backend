const { Bottle, Storage } = require('../models')
const { Op, sequelize, } = require("sequelize");

//#################### Storage Controllers

const CreateStorage = async (req, res) => {
    try {
        const storage = await Storage.create({...req.body})
        res.send({ msg: 'Storage succesfully created' })
    } catch (error) {
        throw error
    }
}

const EditStorage = async (req, res) => {
    try {
        const upd = req.params.storage_id
        const storage = await Storage.findByPk(upd)
            storage.update({...req.body})
            res.send(storage)
    } catch (error) {
        throw error
    }
}

const DeleteStorage = async (req, res) => {
    try {
        const del = req.params.storage_id
        const storage = await Storage.destroy({ where: { id: del }})
        res.send({message: `Storage area has been deleted`})
    } catch (error) {
        throw error
    }
}

const FindStorage = async (req, res) => {
    try {
        const storage = await Storage.findAll({ include: [{model: Bottle}], where: {user_id: req.params.user_id}})
        res.send(storage)
    } catch (error) {
        throw error
    }
}

//#################### Bottle Controllers

const CreateBottle = async (req, res) => {
    try {
        const bottle = await Bottle.create({
            ...req.body,
            user_id: req.params.user_id,
            storage_id: req.params.storage_id
        })
        res.send(bottle)
    } catch (error) {
        throw error
    }
}

const EditBottle = async (req, res) => {
    try {
        const upd = req.params.bottle_id
        const bottle = await Bottle.findByPk(upd)
        bottle.update({...req.body})
        res.send(bottle)
    } catch (error) {
        throw error
    }
}

const DeleteBottle = async (req, res) => {
    try {
        const bottle = await Bottle.destroy({ where: { id: req.params.bottle_id }})
        res.send({message: `Bottle has been deleted`})
    } catch (error) {
        throw error
    }
}

const FindBottle = async (req, res) => {
    try {
        const bottle = await Bottle.findOne({where: {id: req.params.bottle_id}})
        res.send(bottle)
    } catch (error) {
        throw error
    }
}

    module.exports = {
        CreateStorage,
        EditStorage,
        DeleteStorage,
        FindStorage,
        CreateBottle,
        EditBottle,
        DeleteBottle,
        FindBottle
    }