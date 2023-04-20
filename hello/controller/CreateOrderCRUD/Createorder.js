const createSchema = require("../../models/createSchema");

const create = async (req, res) => {
  const {
    fristname,
    lastname,
    orderid,
    product,
    numberofproduct,
    date,
    street,
    additionalinformation,
    zipcode,
    place,
    code,
    phonenumber,
    email,
  } = req.body;
  const user = await createSchema.create({
    fristname,
    lastname,
    orderid,
    product,
    numberofproduct,
    date,
    street,
    additionalinformation,
    zipcode,
    place,
    code,
    phonenumber,
    email,
  });
  res.json(user);
};

module.exports = create;
