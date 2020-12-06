const getAllProducts = require("./get-all-products");

function getProductById(productId) {
  const products = getAllProducts();
  const product = products.find((product) => product.productId === productId);
  return product;
}

module.exports = getProductById;
