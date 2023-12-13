const express = require("express");
const router = express.Router();
const Product = require("../controllers/product");

router.get("/products", Product.getItems);
router.get("/product/:id", Product.getItemById);

module.exports = router;