const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, register_password, username, profilepic } = req.body
    const user = await User.findOne({ where: {username: req.body.username} })
    
    if (user) {
      return res.send({ message: "Username already in use"})
    }
      
    let password = await middleware.hashPassword(register_password)
    const newuser = await User.create({ email, password, username, profilepic })
    res.send(newuser)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
    Login,
    Register,
    CheckSession
}