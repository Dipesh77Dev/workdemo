// import Register from '../models/register.model.js'
// import Login from '../models/login.model.js'
import User from '../models/user.model.js'

import bryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const RegisterForm = async (req, res) => {
  try {
    // console.log(req.body)

    const { name, email, password, cpass, phoneNo } = req.body

    // check if user not registered
    const checkRegistrationStatus = await User.findOne({ email })
    console.log('Check Registration Status:', checkRegistrationStatus)

    if (checkRegistrationStatus) {
      return res.status(409).json({
        status: false,
        message: 'User already registered'
      })
    }

    // hash password
    const hashPassword = bryptjs.hashSync(password, 10)
    const newRegistration = new User({
      name,
      email,
      password: hashPassword,
      cpass,
      phoneNo
    })

    await newRegistration.save()

    res.status(200).json({
      status: true,
      message: 'Registration success, you can login now..'
    })

    console.log(newRegistration)
  } catch (err) {
    console.error('Error in Registration:', err)
    res.status(500).json({
      status: false,
      error: err.message
    })
  }
}

export const LoginForm = async (req, res) => {
  try {
    const { email, password } = req.body

    // check if user not registered
    const user = await User.findOne({ email }).lean().exec() // .lean().exec() - to bring in object form which was present in mongoose
    if (!user) {
      return res.status(403).json({
        status: false,
        message: 'Invalid login credentials.'
      })
    }

    // check password
    const isVerifyPassword = await bryptjs.compare(password, user.password)
    if (!isVerifyPassword) {
      return res.status(403).json({
        status: false,
        message: 'Invalid login credentials.'
      })
    }

    delete user.password

    const token = jwt.sign(user, process.env.JWT_SECRET)

    res.cookie('access_token', token, {
      httpOnly: true
    })
    res.status(200).json({
      status: true,
      message: 'Login success.'
    })

    console.log(user)
  } catch (error) {
    console.error('Error in Registration:', error)
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
