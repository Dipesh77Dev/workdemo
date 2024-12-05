import express from 'express'
import { LoginForm, RegisterForm } from '../controllers/AuthController.js'
import { authenticate } from '../middleware/authenticate.js'

const router = express.Router()

router.post('/register', RegisterForm)
router.post('/login', LoginForm)
router.get('/get-user', authenticate, (req, res) => {
  res.status(200).json({ status: true, user: req.user })
})

export default router
