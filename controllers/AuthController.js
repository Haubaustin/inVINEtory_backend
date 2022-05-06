const { User } = require('../models')

const CreateUser = async (req, res) => {
    try {
    const user = await User.findOne({ userName : req.body.userName})
        if (user)
            return res.status(409).send({ message: "Username already in use"})

        if (req.body.password.length < 5) 
            return res.status(409).send({ message: "Password must be at least 5 characters"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await User.create({ ...req.body, password: hashPassword }).save();
            return res.status(200).json({ message : "Account Created! Redirecting you to the Login page " })
        }
    catch (error) {
            throw error
    }
}

const LoginUser = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
		if (!user)
			return res.status(401).send({ message: "Invalid UserName or Password" });

        const pass = await bcrypt.compare(
                req.body.password,
                user.password)
        if (!pass)
            return res.status(401).send({ message: "Invalid Username or Password" })
                
        const token = user.generateAuthToken();
            res.status(200).send({ data: token, message: "logged in successfully" })
        }
    catch (error) {
        throw error
    }
}

module.exports = {
    CreateUser,
    LoginUser
}