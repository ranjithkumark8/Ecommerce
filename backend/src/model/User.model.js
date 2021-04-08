const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, minLength: 8 },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  // checking if the password is modified or not, if modified hash it
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      // console.log(err);
      if (err) return reject(err);
      resolve(same);
    });
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
