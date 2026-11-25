function deliveryCharge(orderTotal) {
  if (orderTotal >= 50) {
    return 0;
  }

  return 3.99;
}

module.exports = deliveryCharge;
