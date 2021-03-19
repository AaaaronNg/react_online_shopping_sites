const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // for encrpytion
const SALT_I = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true, // not want white space
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  name: {
    type: String,
    require: true,
    maxlength: 100,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 100,
  },
  cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
});

// hash the pwd encryption
userSchema.pre("save", function (next) {
  let user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(SALT_I, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash; // assign a new password storing in the database
        next();
      });
    });
  } else {
    next(); // move on
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  let user = this; //refer the current user
  let token = jwt.sign(user._id.toHexString(), process.env.SECRET); // generate user.id + password, which generating token

  user.token = token; // assign a new token storing in database
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user); // user with token
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this; // refer the current user
  jwt.verify(token, process.env.SECRET, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      //console.log(user.toString());
      cb(null, user); // null as a error and user is an object
    });
  });
};

const User = mongoose.model("user", userSchema);

module.exports = { User };
