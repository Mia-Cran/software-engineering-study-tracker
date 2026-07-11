const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        email,
        password: hash,
      }),
    )
    .then((user) => {
      res.status(201).send({
        name: user.name,
        email: user.email,
        _id: user._id,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Failed to create user" });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  return User.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          message: "Invalid email or password",
        });
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return res.status(401).send({
            message: "Invalid email or password",
          });
        }

        const token = jwt.sign
         ({ _id: user._id }, 
         process.env.JWT_SECRET, {
          expiresIn: "7d",
        });

        return res.send({ token });
      });
    });
};

module.exports = {
  createUser,
  login,
};
