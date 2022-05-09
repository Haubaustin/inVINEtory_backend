const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT = parseInt(process.env.SALT)
const JWTPRIVATEKEY = process.env.JWTPRIVATEKEY

const hashPassword = async (password) => {
    let hashPassword = await bcrypt.hash(password, SALT)
    return hashPassword
}

const comparePassword = async (passwordOnFile, password) => {
    let passwordMatch = await bcrypt.compare(password, passwordOnFile)
    return passwordMatch
}

const createToken = (payload) => {
    let token = jwt.sign(payload, JWTPRIVATEKEY)
    return token
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    try{
        let payload = jwt.verify(token, JWTPRIVATEKEY)
        if(payload){
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
    }catch(error){
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }
} 

const stripToken = (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(' ')[1]
        console.log(token)
        if(token){
            res.locals.token = token
            return next()
        }
    }catch(error){
        res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    createToken,
    verifyToken,
    stripToken,
}