import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpass: {
        type: String,
        // required: true,
    },
    phoneNo: {
        type: Number,
        // required: true,
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User