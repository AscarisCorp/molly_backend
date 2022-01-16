const mongoose = require("mongoose")
const validator = require("validator")

const ownerSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validator(value) {
            if (!validator.isMobilePhone(value, 'en-IN', { strictMode: true })) {
                throw new Error("Ïnvalid phoneNum")
            }
        }
    },
    password: {
        type: String,
        minlength: 8,
    },
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    fuid: {
        type: String,
    },
    verified: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
},
{
    timestamps: true,
})

ownerSchema.methods.toJSON = function () {
    const owner = this
    const ownerObject = owner.toObject()

    console.log(owner)

    return ownerObject
}

const Owner = mongoose.model("Owner", ownerSchema)
module.exports = Owner