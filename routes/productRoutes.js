const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/henna", productController.getHennaPowders);

module.exports = router;

router.get("/oils", productController.getOils);
