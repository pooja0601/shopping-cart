const calculateCartAmount = require("../calculate-cart-amount");

// More test cases to be added
describe("calculate-cart-amount", () => {
  it("Fails when no products are selected", () => {
    expect(() => calculateCartAmount()).toThrowError(
      new Error("please enter products")
    );
  });

  it("Correctly calculates amounts when quantity for a product is zero", () => {
    const result = calculateCartAmount([
      { productId: 3, price: 50.0, productName: "Shoes", qty: 0 },
    ]);
    expect(result).toEqual({ totalPrice: 0, salesTax: 0 });
  });

  it("calculate total price for one product", () => {
    const result = calculateCartAmount([
      { productId: 6, price: 30.0, productName: "Clips", qty: 2 },
    ]);
    expect(result).toEqual({ totalPrice: 60.0, salesTax: 0 });
  });

  it("calculate total price and Sales tax for two products", () => {
    const result = calculateCartAmount([
      { productId: 6, price: 30.0, productName: "Clips", qty: 2 },
      { productId: 7, price: 30.0, productName: "Clips", qty: 1 },
    ]);
    expect(result).toEqual({ totalPrice: 101.25, salesTax: 11.25 });
  });
});
