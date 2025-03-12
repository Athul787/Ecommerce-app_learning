var express = require("express");
//const { render } = require("../app");
var router = express.Router();
var productHelper = require("../helpers/product-helpers");
/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Iphone 16",
      category: "Mobile",
      description: "It is a mobile phone",
      image: "https://inventstore.in/wp-content/uploads/2024/07/63.webp",
    },
    {
      name: "Samsung S25",
      category: "Mobile",
      description: "It is a mobile phone",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDTpT9pdFNXiKPonU8NnLyp1mV3A37z1hLg&s",
    },
    {
      name: "Oneplus 13",
      category: "Mobile",
      description: "It is a mobile phone",
      image: "https://m.media-amazon.com/images/I/71N4hshhfNL.jpg",
    },
    {
      name: "Vivo X200",
      category: "Mobile",
      description: "It is a mobile phone",
      image: "https://m.media-amazon.com/images/I/71y9acYcxnL.jpg",
    },
  ];
  res.render("admin/view-products", { admin: true, products });
});
router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});
router.post("/add-product", (req, res) => {
  console.log(req.body);
  console.log(req.files.Image);
  productHelper.addProduct(req.body, (id) => {
    let image = req.files.Image;
    console.log(id);
    image.mv("./public/product-images/" + id + ".jpg", (err, done) => {
      if (!err) {
        res.render("admin/add-product");
      } else {
        console.log(err);
      }
    });
    res.render("admin/add-product");
  });
});
module.exports = router;
