import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    cpass: {
      type: String,
      required: true
    },
    phoneNo: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const Register = mongoose.model('Register', registerSchema)

export default Register
