const customer = require("../../models/custumSchema");

const customadd = async (req, res) => {
  const { name, email, addressline1, addressline2, city, state, pincode } =req.body;
    const user =await customer.create({ name, email, addressline1, addressline2, city, state, pincode})
    res.json(user);
};

module.exports = customadd
