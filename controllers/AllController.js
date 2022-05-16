const { Bottle, Storage } = require('../models')
const { Op, sequelize, where, } = require("sequelize");

//#################### Storage Controllers

const CreateStorage = async (req, res) => {
    try {
        const storage = await Storage.create({...req.body})
        return res.send({ message: 'Storage succesfully created' })
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
        const storage = await Storage.findAll({
            where: {user_id: req.params.user_id},
            include: [
                { 
                    model: Bottle,
                    },
                ],
            })
        console.log(storage)
        res.send(storage)
    } catch (error) {
        throw error
    }
}

const FindOneStorage = async (req, res) => {
    try {
        const storage = await Storage.findOne({ where: {id: req.params.storage_id}, 
            include: [{model: Bottle}], 
            order: [[Bottle, 'row', 'asc'],[Bottle, 'column', 'asc']]})
        res.send(storage)
    } catch (error) {
        throw error
    }
}

const FindAllButCurrentStorage = async (req, res) => {
    try {
        const storage = await Storage.findAll({ 
            where: {
                [Op.and] : [
                    {user_id: req.params.user_id},
                    {id: { [Op.not]: req.params.storage_id }}
                ]
            }, 
            include: [{model: Bottle}], 
        })
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
        res.send({message: `${req.body.name} successfully placed in row ${req.body.row} column ${req.body.column}`})
    } catch (error) {
        throw error
    }
}

const EditBottle = async (req, res) => {
    try {
        const upd = req.params.bottle_id
        const bottle = await Bottle.findByPk(upd)
        bottle.update({...req.body})
        res.send({message: `${bottle.name} has been updated successfully`})
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

const SearchAllBottleByStorage = async (req, res) => {
    try {
        const search = req.params.search
        const bottles = await Bottle.findAll({
            where: {storage_id: req.params.storage_id,
            [Op.or]: [
                { name: { [Op.iLike]: `%${search}%` } },
                { region: { [Op.iLike]: `%${search}%` } },
                { color: { [Op.iLike]: `%${search}%` } },
                { winery: { [Op.iLike]: `%${search}%` } },
                { varietal: { [Op.iLike]: `%${search}%` } },
                { vintage: { [Op.iLike]: `%${search}%` } },
                { notes: { [Op.iLike]: `%${search}%` } },
                    ]   
                },
            }
        )
    res.send(bottles)
    }
    catch (error) {
        throw error
    }
}

const SearchAllBottleByUser = async (req, res) => {
    try {
        const search = req.params.search
        const bottles = await Bottle.findAll({
            where: {user_id: req.params.user_id,
            [Op.or]: [
                { name: { [Op.iLike]: `%${search}%` } },
                { region: { [Op.iLike]: `%${search}%` } },
                { color: { [Op.iLike]: `%${search}%` } },
                { winery: { [Op.iLike]: `%${search}%` } },
                { varietal: { [Op.iLike]: `%${search}%` } },
                { vintage: { [Op.iLike]: `%${search}%` } },
                { notes: { [Op.iLike]: `%${search}%` } },
                    ]   
                },
            include: [{model: Storage}],
            }
        )
    res.send(bottles)
    }
    catch (error) {
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
        FindBottle,
        FindOneStorage,
        SearchAllBottleByStorage,
        SearchAllBottleByUser,
        FindAllButCurrentStorage
    }