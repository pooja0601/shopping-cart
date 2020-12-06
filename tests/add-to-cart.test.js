const addToCart = require("../add-to-cart");

const selectedProduct = {
  productId: 1,
  qty: 5,
};

describe("add-to-cart", () => {
  it("Fails to add product to cart with non-existing productId", () => {
    expect(() => addToCart({ productId: 5, qty: 3 })).toThrowError(
      new Error("please enter right product Id")
    );
  });

  it("Successfully adds one product with given quantity", () => {
    const cart = addToCart(selectedProduct);
    expect(cart).toHaveProperty("selectedProducts", "totalPrice", "salesTax");
    expect(cart).toMatchObject({ totalPrice: 249.95, salesTax: 0 });
  });

  it("Updates quantity of product when cart already has the selected product", () => {
    let cart = addToCart(selectedProduct);
    cart = addToCart({ ...selectedProduct, qty: 3 }, cart);
    expect(cart).toHaveProperty("selectedProducts", "totalPrice", "salesTax");
    expect(cart).toMatchObject({ totalPrice: 399.92, salesTax: 0 });
    expect(cart.selectedProducts.length).toEqual(1);
  });

  it("Calculates sales tax when 2 products with different IDs are added to cart", () => {
    let cart = addToCart({ ...selectedProduct, qty: 2 });
    cart = addToCart({ productId: 2, qty: 2 }, cart);
    expect(cart).toHaveProperty("selectedProducts", "totalPrice", "salesTax");
    expect(cart).toMatchObject({ totalPrice: 337.46, salesTax: 37.5 });
    expect(cart.selectedProducts.length).toEqual(2);
  });
});
