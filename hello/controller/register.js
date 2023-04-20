const sermodel = require("../models/newSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const add = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.json("datas are mandatory");
  } else {
    if (password.length < 6) {
      res.json("password should greater than 6 digits");
    } else {
      const salt = await bcrypt.genSalt(10);
      console.log(salt);
      const hashpassword = await bcrypt.hash(password, salt);
      console.log(hashpassword);

      const userdetails = await sermodel.create({
        firstName,
        lastName,
        email,
        password: hashpassword,
      });
      res.json({
        userdetails,
        token: generatetoken(),
      });
    }
  }
};

const generatetoken = (id) => {
  return jwt.sign({ id }, "shahin1234", { expiresIn: "1d" });
};

module.exports = add;
