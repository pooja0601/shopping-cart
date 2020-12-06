const getAllProducts = require("../get-all-products");

describe("get-all-products", () => {
  it("Successfully fetches all products", () => {
    const results = getAllProducts();
    results.forEach((result) => {
      expect(result).toHaveProperty("productId", "productName", "price");
    });
  });
});
