const productModel = require("../models/productModel");

const getHennaPowders = (req, res) => {
  productModel.getHennaPowders((err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching henna products",
      });
    }

    res.json(results);
  });
};

module.exports = {
  getHennaPowders,
};

const getOils = (req, res) => {
  productModel.getOils((err, results) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Error fetching oil products",
      });
    }

    res.json(results);
  });
};

module.exports = {
  getHennaPowders,
  getOils,
};