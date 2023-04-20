const bookdata = require("../models/bookSchema");

const pagen = async (req, res) => {
  const { Name, Author, Country, Year, Availability } = req.body;
  const User = await bookdata.find({});

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};

  results.totaluser = User.length;
  results.pageCount = Math.ceil(User.length / limit);

  if (lastIndex < User.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }

  results.result = User.slice(startIndex, lastIndex);
  res.json(results);
};

module.exports = pagen;
