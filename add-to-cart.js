const getProductById = require("./get-product-by-Id");
const calculateCartAmount = require("./calculate-cart-amount");

function addToCart(selectedProduct, cart = null) {
  const product = getProductById(selectedProduct.productId);
  if (!product) {
    throw new Error("please enter right product Id");
  }

  // If the cart is empty, just add the to the cart
  if (!cart) {
    const selectedProducts = [];
    selectedProducts.push({ ...product, qty: selectedProduct.qty });
    const { totalPrice, salesTax } = calculateCartAmount(selectedProducts);
    return { selectedProducts, totalPrice, salesTax };
  }

  let productPresentInCart = false;

  cart.selectedProducts.map((product) => {
    if (product.productId === selectedProduct.productId) {
      productPresentInCart = true;
      product.qty += selectedProduct.qty;
    }
  });

  if (!productPresentInCart) {
    cart.selectedProducts.push({ ...product, qty: selectedProduct.qty });
  }

  const { totalPrice, salesTax } = calculateCartAmount(cart.selectedProducts);
  return { selectedProducts: cart.selectedProducts, totalPrice, salesTax };
}
module.exports = addToCart;
