const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/henna", productController.getHennaPowders);

router.get("/oils", productController.getOils);

module.exports = router;