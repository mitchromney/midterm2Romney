var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});
router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 
module.exports = router;


var pokemon = [
  {
    name: 'Car',
    price: "20,000",
    amount: 0,
    avatarUrl: 'https://media.kohlsimg.com/is/image/kohls/3284387?wid=882&hei=882&op_sharpen=1'
  },
  {
    name: 'Dress',
    price: "400",
    amount: 0,
    avatarUrl: 'https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2017/12/28/goods-img/1515028098559239641.jpg'

  },
  {
    name: 'Phone',
    price: "1000",
    amount: 0,
    avatarUrl: 'https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/space-gray/Apple-iPhoneX-SpaceGray-1-3x.jpg'
  },
  
];

var shoppingCart = [

];

