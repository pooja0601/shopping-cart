const getProductById = require("../get-product-by-Id");

describe("get-product-by-Id", () => {
  it("check with valid productId", () => {
    const result = getProductById(1);
    expect(result).toEqual({
      productId: 1,
      productName: "Shower Gel",
      price: 49.99,
    });
  });

  it("check with productId not present in Products array", () => {
    const result = getProductById(4);
    expect(result).toEqual(undefined);
  });

  it("check with invalid productId", () => {
    const result = getProductById("@");
    expect(result).toEqual(undefined);
  });
});
