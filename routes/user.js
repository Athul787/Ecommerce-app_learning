var express = require("express");
var router = express.Router();

/* GET home page. */
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
  res.render("index", { products, admin: false });
});

module.exports = router;
