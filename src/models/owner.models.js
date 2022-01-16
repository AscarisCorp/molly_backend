const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ownerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validator(value) {
        if (!validator.isMobilePhone(value, "en-IN", { strictMode: true })) {
          throw new Error("Ïnvalid phoneNum");
        }
      },
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
      default: "0",
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
  }
);

ownerSchema.virtual("businesses", {
  ref: "Business",
  localField: "_id",
  foreignField: "owner_id",
});

ownerSchema.methods.toJSON = function () {
  const owner = this;
  const ownerObject = owner.toObject();

  console.log(owner);

  return ownerObject;
};

ownerSchema.methods.generateAuthToken = async function () {
  const owner = this;
  const token = jwt.sign({ _id: owner._id.toString() }, "molly");

  owner.tokens = owner.tokens.concat({ token });
  await owner.save();

  return token;
};

ownerSchema.statics.findByCredentials = async (email, password) => {
  const owner = await Owner.findOne({ email });
  if (!owner) {
    throw new Error("unable to login");
  }

  const isMatch = await bcrypt.compare(password, owner.password);
  if (!isMatch) {
    throw new Error("unable to login");
  }

  return owner;
};

ownerSchema.pre("save", async function (next) {
  const owner = this;
  if (owner.isModified("password")) {
    owner.password = await bcrypt.hash(owner.password, 8);
  }
  next();
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
