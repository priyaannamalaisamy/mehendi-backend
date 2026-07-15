const db = require("../config/db");

const getHennaPowders = (callback) => {
  const sql = "SELECT * FROM henna_powders";

  db.query(sql, (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  getHennaPowders,
};

const getOils = (callback) => {
  const sql = `
    SELECT 
      products.id,
      products.name,
      products.image,
      product_sizes.id AS size_id,
      product_sizes.size,
      product_sizes.price
    FROM products
    JOIN product_sizes
    ON products.id = product_sizes.product_id
    WHERE products.category = 'Oil'
  `;

  db.query(sql, (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  getHennaPowders,
  getOils,
};