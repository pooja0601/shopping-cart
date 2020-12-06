function getAllProducts() {
  const productsArray = [
    {
      productId: 1,
      productName: "Shower Gel",
      price: 49.99,
    },
    {
      productId: 2,
      productName: "Deodorant",
      price: 99.99,
    },
  ];

  return productsArray;
}

module.exports = getAllProducts;
