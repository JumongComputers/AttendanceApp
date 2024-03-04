import Exception from "../exception.js"
import Staff from "../models/staff.js"
// import Author from "../models/authors.js"
import User from "../models/users.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export async function signUp(req, res, next) {
    try {
        const data = req.body

        // Check if User Exist
        const userExists = await User.findOne({ email: data.email })

        if (userExists) {
            throw new Exception("User already exists", 400)
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const user = await User.create({...data, password: hashedPassword })

        if(data.role === 'staffs'){
            await Staff.create({user: user._id})
    } 
    user.password = null
    res.send(user)
    } catch (error) {
        next(new Exception(error.message, error.status))
    }
}

export async function updateUser(req, res, next) {
    try {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
    }

    const user = await User.findOne({ _id: req.params.id })

    if (!user) {
      return res.status(404).send()
    }

    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
}

export async function signIn(req, res, next) {
  try {
    const data = req.body

    const user = await User.findOne({ email: data.email })

    if(!user) {
        throw new Exception("User not found", 400)
    }
    const isPasswordCorrect = await bcrypt.compare(
        data.password, 
        user.password
    )
    if(!isPasswordCorrect) {
        throw new Exception("Invalid credentials", 401)
    } 

    const payload = {
        _id: user._id,
        email: user.email,
    }
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1hr' })

    console.log(accessToken);

    res.send({user, accessToken})

}catch (error) {
    next(new Exception(error.message, error.status))
 }
}


export async function searchForUser(req, res, next) {

    try {
        const data = req.body.data
        let user
        if (data.role ==='staffs') {
            if (data.firstName || data.lastName || data.email) {
                user = await User.find({$or: [{firstName: data.firstName}, {lastName: data.lastName}, {email: data.email}]})
        }
        res.send(user)
    } }catch (error) {
        next(new Exception(error.message, error.status))
    }
}
