function roundNumber(num, precision) {
  return parseFloat(
    (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(
      precision
    )
  );
}

function calculateCartAmount(selectedProducts = []) {
  let totalPrice = 0;
  let salesTax = 0;

  if (selectedProducts.length === 0) {
    throw new Error("please enter products");
  }

  totalPrice = parseFloat(
    selectedProducts
      .reduce(
        (acc, product) => acc + parseFloat(product.price) * product.qty,
        0
      )
      .toFixed(2)
  );

  if (selectedProducts.length > 1) {
    salesTax = roundNumber(parseFloat(totalPrice * 0.125), 2);
    totalPrice = parseFloat(parseFloat(totalPrice) + parseFloat(salesTax));
  }

  return { totalPrice, salesTax };
}

module.exports = calculateCartAmount;
